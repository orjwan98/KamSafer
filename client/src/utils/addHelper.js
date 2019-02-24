export const addHelper = data => {
  return fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  })
  .catch(error => {
    alert(`Error Try Again Later ! Refresh The Page`);
  });
};
