export const GTM_ID = "GTM-K2Z9HSJ";

export const pageView = (url) => {
  window.dataLayer?.push({
    event: "pageview",
    page: url,
  });
};




