export const API_BASE_URL =
  process.env.REACT_APP_API_URL ||
  "https://www.profxsummit.com/adminpanel/api/v1";

export const API_KEY =
  process.env.REACT_APP_API_KEY || "772414293281728";

const API_CACHE_VERSION = "profx-api-v2";

if (typeof window !== "undefined") {
  const currentVersion = window.sessionStorage.getItem("apiCacheVersion");

  if (currentVersion !== API_CACHE_VERSION) {
    ["social", "topbar", "logo", "menuLinks"].forEach((key) => {
      window.sessionStorage.removeItem(key);
    });
    window.sessionStorage.setItem("apiCacheVersion", API_CACHE_VERSION);
  }
}
