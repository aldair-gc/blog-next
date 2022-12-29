export const fetchJson = async <T>(url: string): Promise<T> => {
  const data = await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
  return data;
};
