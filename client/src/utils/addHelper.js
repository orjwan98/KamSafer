export const addHelper = data => {
  return fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  });
};

export const getlastkm = data => {
  return fetch("/getstartkm", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  });
};
