export const getData = url => {
  return fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  }).then(response => {
    return response.json();
  });
};
