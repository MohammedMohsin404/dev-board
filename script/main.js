// Task Assign

// ButtonHandler

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector("#history").innerHTML += "";
    // Increase Task Assign Number

    increaseTaskNumber("task-number", "subtract", 1);

    // Decrease Total Tak Number
    increaseTaskNumber("total-task-number", "add", 1);

    // Add Title To History

    const parentElement = btn.parentElement.parentElement;

    const taskTitle = parentElement.querySelector("h2").innerText;

    const history = document.querySelector("#history");

        // Task Complete Time
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const timeString = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    history.innerHTML += `  <div  class="bg-[rgb(242,246,255)] mt-8 p-4 rounded-3xl flex space-x-4">
                        <div class="rounded-full bg-white p-4 ">
                            <img src="./assets/checkbox.png" alt="">
                        </div>
                        <h3 class="">${taskTitle} completed at <span class="italic">${timeString}</span></h3>
                    </div>`;

    document.querySelector("#history").innerHTML += "";
    btn.classList.add("btn-disabled");
  });
});

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

document.getElementById("current-date").innerText = formattedDate;


// Clear History
document.querySelector("#btn-history-clear").addEventListener("click",()=>{
  document.querySelector("#history").innerHTML = ``;
})



// Theme Color Change

const daisyUIThemes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const themeButton = document.getElementById("theme-color");

themeButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * daisyUIThemes.length);
  const randomTheme = daisyUIThemes[randomIndex];

  document.documentElement.setAttribute("data-theme", randomTheme);
});
