const required = ["VITE_API_URL", "VITE_APP_AUTH_URL"];

for (const key of required) {
  if (!import.meta.env[key]) {
    throw new Error(`Variável ${key} não definida`);
  }
}

export const config = {
    apiUrl: import.meta.env.VITE_API_URL,
    authUrl: import.meta.env.VITE_APP_AUTH_URL,
};
