import fetch from "node-fetch";

export default async function run() {
  const query = new URLSearchParams({
    clientid: "qdxgjxly",
    clientsecret: "cprilyxv",
    from: "0209544825",
    to: "+233558210908",
    content: "test message",
  }).toString();

  const resp = await fetch(
    `https://devp-sms03726-api.hubtel.com/v1/messages/send?${query}`,
    { method: "GET" }
  );

  const data = await resp.text();
  console.log(data);
}

run();

fetch("YOUR_URL")
  .then(function (response) {
    // response is a json string
    return response.json(); // convert it to a pure JavaScript object
  })
  .then(function (data) {
    //Process Your data
    if (data.is_taken_email) alert(data);
  })
  .catch(function (err) {
    console.log(err);
  });
