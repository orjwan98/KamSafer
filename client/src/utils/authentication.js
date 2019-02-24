export const authentication = () => {
  return fetch("/checkauth", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      return response.json();
    })
    .catch(error => {
      alert(`Error Try Again Later ! Refresh The Page`);
    });
};
