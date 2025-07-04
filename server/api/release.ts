import axios from "axios";
import { saveRelease } from "~/server/utils/saveRelease";
import { verifySignature } from "~/server/utils/verifySignature";
import { type GithubRelease } from "~/server/types/github";

const githubWebhookSecret = process.env.GITHUB_WEBHOOK_SECRET;

if (!githubWebhookSecret)
  throw new Error("'GITHUB_WEBHOOK_SECRET' env is required");

const url = "https://api.github.com/repos/Waradu/a.ni.me/releases";

export default defineEventHandler(async (event) => {
  const type = getHeader(event, "x-github-event");

  if (type == "ping") {
    return "pong";
  }

  const sig = getHeader(event, "x-hub-signature-256");

  if (!sig) {
    throw createError({
      statusCode: 400,
      data: {
        error: "Signature is required",
      },
    });
  }

  const rawBody = await readRawBody(event);

  if (!rawBody) {
    throw createError({
      statusCode: 400,
      data: {
        error: "Body is required",
      },
    });
  }

  const isValid = await verifySignature(githubWebhookSecret, sig, rawBody);

  if (!isValid) {
    throw createError({
      statusCode: 400,
      data: {
        error: "Signature is invalid",
      },
    });
  }

  try {
    const response = await axios.get<GithubRelease[]>(url);
    const releases = response.data
      .sort(
        (a, b) =>
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
      )
      .filter((release) => !release.draft);

    const latest = releases.find((release) => !release.prerelease);
    const latestPrerelease = releases.find((release) => release.prerelease);

    if (latest) latest.prerelease = false;
    if (latestPrerelease) latestPrerelease.prerelease = true;

    if (latest) saveRelease(latest);
    if (latestPrerelease) saveRelease(latestPrerelease);

    return;
  } catch (e) {
    console.error(e);

    throw createError("Unknown error");
  }
});
