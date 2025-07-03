import axios from "axios";

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
const location = `https://anilist.co/api/v2/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

export default defineEventHandler(async (event) => {
  const { code } = getQuery(event);

  if (!code) {
    throw createError({
      statusCode: 404,
      data: {
        error: "Anilist did not return a valid code please try again.",
      },
    });
  }

  const response = await axios.post<{ access_token: string }>(
    "https://anilist.co/api/v2/oauth/token",
    {
      grant_type: "authorization_code",
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code: code,
    }
  );

  const token = response.data.access_token;

  if (!token) {
    throw createError({
      statusCode: 404,
      data: {
        error: "Anilist did not return a valid token please try again.",
      },
    });
  }

  sendRedirect(event, `/auth#${token}`);
});
