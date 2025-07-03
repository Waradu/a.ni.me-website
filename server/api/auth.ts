const clientId = process.env.CLIENT_ID;
const redirectUri = process.env.REDIRECT_URI;
const location = `https://anilist.co/api/v2/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

export default defineEventHandler(async (event) => {
  sendRedirect(event, location);
});
