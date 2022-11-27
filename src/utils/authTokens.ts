export const setTokensOnStorage = (id_token: string, refresh_token: string) => {
  localStorage.setItem("id_token", JSON.stringify(id_token));
  localStorage.setItem("refresh_token", JSON.stringify(refresh_token));
};

export const unsetTokensFromStorage: () => void = (): void => {
  localStorage.removeItem("id_token");
  localStorage.removeItem("refresh_token");
};
