var display = document.getElementById("output");

function set(nums) {
  if (display.textContent === "0") {
    display.textContent = nums.textContent;
  } else if (display.textContent === "00") {
    display.textContent = nums.textContent;
  } else {
    display.textContent += nums.textContent;
  }
}

function operator(nums) {
  if (display.textContent.slice(-1) === "+") {
    return;
  } else if (display.textContent.slice(-1) ===  "-") {
    return;
  } else if (display.textContent.slice(-1) === "*") {
      return;
  } else if (display.textContent.slice(-1) === "/") {
      return;
  } else {
    display.textContent += nums.textContent;
  }
}

function point(nums) {
  if (display.textContent.slice(-1) === ".") {
    return;
  } else {
    display.textContent += nums.textContent;
  }
}

function calc() {
  display.textContent = new Function("return " + display.textContent)();
}

function reset() {
  display.textContent = "";
}
