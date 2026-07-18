import { API_BASE_URL, API_KEY } from "./config";

const buildUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  const url = new URL(`${API_BASE_URL}/${cleanEndpoint}`);
  url.searchParams.set("api_key", API_KEY);
  return url.toString();
};

const appendPayload = (body, payload) => {
  Object.entries({ api_key: API_KEY, ...payload }).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      body.append(key, value);
    }
  });
};

const parseResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }
  return { code: 0, msg: await response.text() };
};

export const postApi = async (endpoint, payload = {}) => {
  const body = new FormData();
  appendPayload(body, payload);

  const response = await fetch(buildUrl(endpoint), {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body,
  });

  const data = await parseResponse(response);
  return { data, status: response.status, ok: response.ok };
};

export const postFormApi = async (endpoint, formData) => {
  if (!formData.has("api_key")) {
    formData.append("api_key", API_KEY);
  }

  const response = await fetch(buildUrl(endpoint), {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: formData,
  });

  const data = await parseResponse(response);
  return { data, status: response.status, ok: response.ok };
};
