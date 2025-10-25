export const baseUrl = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  if (!url) {
    return {
      error: "Base url can't found.",
    };
  }
  return url;
};

export const backendUrl = baseUrl();
