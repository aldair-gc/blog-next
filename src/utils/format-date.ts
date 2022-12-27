export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("PT-BR", {
    timeZone: "America/Fortaleza",
  });
};
