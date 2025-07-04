export const useLatest = () => {
  return useFetch("/api/latest", {
    key: "a.ni.me-latest",
  });
};
