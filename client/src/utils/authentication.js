export const authentication = () => {
  return fetch("/checkauth", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
