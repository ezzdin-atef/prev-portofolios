const elements = {
  navBar: document.querySelectorAll(".navigation-bar .sections li"),
  open: document.querySelector(".open"),
  close: document.querySelector(".close"),
  mobileMenu: document.querySelector(".navigation-bar"),
  projectsContainer: document.querySelector(".projects"),
  proejctsBtn: document.querySelector(".homepage .contact-btn"),
  contactBtn: document.querySelector(".homepage .project-btn"),
  homepage: document.querySelector(".homepage"),
  load: document.querySelector(".loader"),
};

// Handle the click navingation bar
elements.navBar.forEach((el) => {
  el.addEventListener("click", (el) => {
    // add the d-none class to all the sections
    elements.navBar.forEach((el) => {
      document
        .querySelector(`.${el.closest("li").dataset.link}`)
        .classList.add("d-none");
    });
    // remove the d-none class from the section of the link
    document
      .querySelector(`.${el.target.closest("li").dataset.link}`)
      .classList.remove("d-none");
    if (window.innerWidth <= "900") {
      elements.mobileMenu.style.display = "none";
      elements.close.classList.add("d-none");
      elements.open.classList.remove("d-none");
    }
    document.querySelector("li.active").classList.remove("active");
    el.target.closest("li").classList.add("active");
  });
});

// Handle the open button menu in the mobile view
elements.open.addEventListener("click", () => {
  elements.open.classList.add("d-none");
  elements.mobileMenu.style.display = "flex";
  elements.close.classList.remove("d-none");
});

// Handle the close button menu in the mobile view
elements.close.addEventListener("click", () => {
  elements.close.classList.add("d-none");
  elements.mobileMenu.style.display = "none";
  elements.open.classList.remove("d-none");
});

// Handle to make you go to the contact form by the contact button in the homepage
elements.contactBtn.addEventListener("click", () => {
  // add the d-none class to all the sections
  elements.navBar.forEach((el) => {
    document
      .querySelector(`.${el.closest("li").dataset.link}`)
      .classList.add("d-none");
  });
  document.querySelector(".contact").classList.remove("d-none");
});

elements.proejctsBtn.addEventListener("click", () => {
  // add the d-none class to all the sections
  elements.navBar.forEach((el) => {
    document
      .querySelector(`.${el.closest("li").dataset.link}`)
      .classList.add("d-none");
  });
  document.querySelector(".projects").classList.remove("d-none");
});

// Handle the load part
if (window.innerWidth > "900") {
  setTimeout(() => {
    elements.load.style.animation = "goone 0.2s ease forwards";
    setTimeout(() => {
      elements.load.classList.add("d-none");
      elements.homepage.classList.remove("d-none");
      elements.mobileMenu.classList.remove("d-none");
    }, 250);
  }, 5000);
} else {
  elements.load.classList.add("d-none");
  elements.homepage.classList.remove("d-none");
  elements.mobileMenu.classList.remove("d-none");
}

// Calling the JSON file and load it in the page
const xhr = new XMLHttpRequest();
xhr.open("GET", "./js/projects.json");
xhr.onload = () => {
  const res = JSON.parse(xhr.responseText);

  res.forEach((el) => {
    const langs = [];
    el.langs.forEach((lang) => {
      if (lang.includes("html")) {
        langs.push("<span class='html'>HTML5</span>");
      } else if (lang.includes("css")) {
        langs.push("<span class='css'>CSS3</span>");
      } else if (lang.includes("js")) {
        langs.push("<span class='js'>JavaScript</span>");
      } else if (lang.includes("jquery")) {
        langs.push("<span class='jquery'>jQuery</span>");
      } else if (lang.includes("php")) {
        langs.push("<span class='php'>PHP</span>");
      } else if (lang.includes("mysql")) {
        langs.push("<span class='mysql'>MySQL</span>");
      } else if (lang.includes("sass")) {
        langs.push("<span class='sass'>Sass</span>");
      } else if (lang.includes("pug")) {
        langs.push("<span class='pug'>Pug.js</span>");
      } else if (lang.includes("wp")) {
        langs.push("<span class='wp'>WordPress</span>");
      } else if (lang.includes("bootstrap")) {
        langs.push("<span class='bootstrap'>Bootstrap</span>");
      } else if (lang.includes("react")) {
        langs.push("<span class='react'>React.js</span>");
      } else if (lang.includes("node")) {
        langs.push("<span class='node'>Node.js</span>");
      } else if (lang.includes("express")) {
        langs.push("<span class='express'>Express.js</span>");
      } else if (lang.includes("graphql")) {
        langs.push("<span class='graphql'>GraphQL</span>");
      } else if (lang.includes("firebase")) {
        langs.push("<span class='firebase'>Firebase</span>");
      } else if (lang.includes("mongodb")) {
        langs.push("<span class='mongodb'>MongoDB</span>");
      }
    });
    let credit = "";
    if (el.credit) {
      credit = `
      <div class="credit">
        <a href="${el.credit_link}" target="_blank">${el.credit}</a>
      </div>
    `;
    }

    const card = `
      <div class="card">
        <h4>
          <a href="${el.live}" target="_blank">${el.title} <span>--></span></a>
        </h4>
        <p>
          ${el.description}
        </p>
        ${credit}
        <footer>
          <div class="langs">
            ${langs.toString().split(",").join("")}
          </div>

          <a href="${
            el.github
          }" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
        </footer>
      </div>
    `;
    elements.projectsContainer.insertAdjacentHTML("beforeend", card);
  });
};
xhr.send();

// Not All Images Fit Very Well :(
// el.langs.forEach((lang) => {
//   if (lang.includes("html")) {
//     langs.push('<img src="./img/html5 (1).svg" alt="..." />');
//   } else if (lang.includes("css")) {
//     langs.push('<img src="./img/css.svg" alt="..." />');
//   } else if (lang.includes("js")) {
//     langs.push('<img src="./img/icons8-javascript.svg" alt="..." />');
//   } else if (lang.includes("jquery")) {
//     langs.push('<img src="./img/jquery-icon.svg" alt="..." />');
//   } else if (lang.includes("php")) {
//     langs.push('<img src="./img/new-php-logo.svg" alt="..." />');
//   } else if (lang.includes("mysql")) {
//     langs.push('<img src="./img/mysql-icon.svg" alt="..." />');
//   } else if (lang.includes("sass")) {
//     langs.push('<img src="./img/Orion_sass.svg" alt="..." />');
//   } else if (lang.includes("pug")) {
//     langs.push('<img src="./img/pugjs-icon.svg" alt="..." />');
//   } else if (lang.includes("wp")) {
//     langs.push('<img src="./img/wordpress-icon.svg" alt="..." />');
//   } else if (lang.includes("bootstrap")) {
//     langs.push('<img src="./img/icons8-bootstrap.svg" alt="..." />');
//   } else if (lang.includes("react")) {
//     langs.push('<img src="./img/React-icon.svg" alt="..." />');
//   }
// });
