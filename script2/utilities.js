const getTextValueById = (id) => {
  const textValue = document.getElementById(id).innerText;
  const textNumber = parseFloat(textValue);
  return textNumber;
};

const increaseTaskNumber = (id, operation, num) => {
  const number = getTextValueById(id);
  if (number <= 1) {
    alert("Congratulation You have Complete All The Tasks");
  }
  switch (operation) {
    case "add":
      return (document.getElementById(id).innerText = number + num);
    case "subtract":
      return (document.getElementById(id).innerText = number - num);
  }
};
