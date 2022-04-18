var themeBtns = document.querySelectorAll("#themeButtons svg");
var cssRoots = document.querySelector(":root");
// var themes = ["dark", "light", "solar"];

themeBtns.forEach((element, index) => {
  // element.setAttribute("id", themes[index]);
  if (element.classList[1] != "active") {
    element.style.display = "none";
  } else {
    // themeHandler(element.getAttribute("id"));
    console.log("activate found");
  }
});

function getCssVar(variable) {
  var rs = getComputedStyle(cssRoots);
  return rs.getPropertyValue(variable);
}

function setCssVar([variable, value]) {
  cssRoots.style.setProperty(variable, value);
}

// Handle theme by changing css variables
function themeHandler(themeName) {
  if (themeName == "dark") {
    let colorPlatte = [
      ["--text-primary", "#b6b6b6"],
      ["--text-secondary", "#cccccc"],
      ["--bg-primary", "#23232e"],
      ["--bg-secondary", "#141418"],
      ["--transition-speed", "600ms"],
      ["--icon-primary", "#c52b8a"],
      ["--icon-secondary", "#ff7eee"],
    ];
    colorPlatte.forEach((color) => setCssVar(color));
  } else if (themeName == "light") {
    let colorPlatte = [
      ["--text-primary", "#23232e"],
      ["--text-secondary", "#141418"],
      ["--bg-primary", "#fffffffd"],
      ["--bg-secondary", "#f3f3f3"],
      ["--transition-speed", "600ms"],
      ["--icon-primary", "#072344"],
      ["--icon-secondary", "#7c9b9f"],
    ];
    colorPlatte.forEach((color) => setCssVar(color));
  } else if (themeName == "solar") {
    let colorPlatte = [
      ["--text-primary", "#4E5340"],
      ["--text-secondary", "#697268"],
      ["--bg-primary", "#E2E8DD"],
      ["--bg-secondary", "#B7D1DA"],
      ["--transition-speed", "600ms"],
      ["--icon-primary", "#6f00ab"],
      ["--icon-secondary", "#9e6f97"],
    ];
    colorPlatte.forEach((color) => setCssVar(color));
  }
}

themeBtns.forEach((element) => {
  element.addEventListener("click", () => {
    nextElement = element.nextElementSibling;
    element.classList.remove("active");
    element.style.display = "none";
    if (nextElement.classList[0] != "theme-icon") {
      nextElement = themeBtns[0];
    }
    nextElement.classList.add("active");
    nextElement.style.display = "block";
    let themeID = nextElement.getAttribute("id");
    console.log(themeID);
    themeHandler(themeID);
  });
});
