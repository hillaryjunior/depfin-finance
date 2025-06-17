export const GTM_ID = "GTM-N4LX88L";

export const pageView = (url) => {
  window.dataLayer?.push({
    event: "pageview",
    page: url,
  });
};




