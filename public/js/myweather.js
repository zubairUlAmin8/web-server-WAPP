console.log("my websit functionality is loaded successfully");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const message_1 = document.querySelector("#message-1");
const message_2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  console.log(location);
  message_1.textContent = "Loading...";
  message_2.textContent = "";

  if (!location) {
    alert("Please Enter City Name in the Inpute field and Try Again");
  }

  fetch("http://localhost:3000/weather?city=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data);
        if (data.code == 105) {
          message_1.textContent = location;
          message_2.textContent = data.info;
          //   alert(data.info);
        }
        //   console.log(data.forecast);
      }
    });
  });
});
