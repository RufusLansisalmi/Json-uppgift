const container = document.querySelector(".container");
const shortcuts = [
  { name: "Prakticum", url: "https://prakticum.fi" },
  { name: "Wilma", url: "https://prakticum.inschool.fi" },
  { name: "e-post", url: "https://outlook.office.com/" },
  { name: "Google drive", url: "https://drive.google.com" },
  { name: "Google classroom", url: "https://classroom.google.com" },
  { name: "Github", url: "https://github.com" }
]

const showShortcuts = () => {
  let output = ""
  shortcuts.forEach(
    ({ name, url }) =>
      (output += `
              <div class="card">
                <h1>${name}</h1>
                <a href="${url}">Let's go!</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showShortcuts)
