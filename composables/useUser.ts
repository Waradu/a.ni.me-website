interface UserDataResponse {
  Viewer: Viewer;
}

interface Viewer {
  id: number;
  name: string;
  avatar: Avatar;
  bannerImage: string;
  options: Options;
  siteUrl: string;
}

interface Avatar {
  large: string;
}

interface Options {
  displayAdultContent: boolean;
  titleLanguage: string;
}

export const useUser = (token: string) => {
  const query = `
    query Viewer {
      Viewer {
        id
        name
        avatar {
          large
        }
        bannerImage
        options {
          displayAdultContent
          titleLanguage
        }
        siteUrl
      }
    }
  `;

  return useFetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: { query },
    transform: (res: { data: UserDataResponse }) => res.data.Viewer,
  });
};
