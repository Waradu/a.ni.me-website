import { db } from "~/server/utils/db";
import { type Latest } from "~/server/types/latest";

export default defineEventHandler(async (event) => {
  let prerelease = "pre" in getQuery(event);

  try {
    const latest = await db.get<Latest>("latest");
    const latestPrerelease = await db.get<Latest>("latest-pre");

    if (!latestPrerelease && !latestPrerelease) {
      throw createError({
        statusCode: 404,
        data: {
          error: "No versions found",
        },
      });
    } else if (!latestPrerelease) prerelease = false;
    else if (!latest) prerelease = true;

    const result = (prerelease ? latestPrerelease : latest) as Latest;

    return result;
  } catch (e) {
    console.error(e);

    throw createError("Unknown error");
  }
});
