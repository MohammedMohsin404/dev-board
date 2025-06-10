console.log("Js COnnected");

// Current Date 

const today = new Date();

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

const formattedDate = new Intl.DateTimeFormat("en-GB", options)
  .format(today)
  .replace(",", "");

const date = (getInputValueById("date").innerHTML = formattedDate);

console.log(date);

// Assigned Task


