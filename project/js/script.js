// Random Images
let landingPage = document.querySelector(".landing-page");

let imagesArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];

let backgroundStatus = true;

let randomImages;

function randomBackgroundImg() {
  if (backgroundStatus === true) {
    randomImages = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * imagesArr.length);

      landingPage.style.backgroundImage = `url("/images/${imagesArr[randomNumber]}")`;

      localStorage.setItem(
        "lastImg",
        `url("/images/${imagesArr[randomNumber]}`
      );
    }, 5000);
  } else {
    clearInterval(randomImages);
  }
}
randomBackgroundImg();

// --------------------------------

// Settings Box
let settingsIcon = document.querySelector(".settings .icon");
let settingsBox = document.querySelector(".settings");

settingsIcon.addEventListener("click", () => {
  settingsBox.classList.toggle("active");
});

// Color Switcher
let colorList = document.querySelectorAll(".settings ul.page-colors li");

colorList.forEach((e) => {
  // Remove Active Class From Each List
  if (localStorage.getItem("main-color")) {
    colorList.forEach((e) => {
      e.classList.remove("active");
    });
  }

  // Set Active Class To The Current List
  if (localStorage.getItem("main-color")) {
    document
      .querySelector(`[data-color = "${localStorage.getItem("main-color")}"]`)
      .classList.add("active");
  }

  e.addEventListener("click", (e) => {
    // Remove Active Class From Each List
    colorList.forEach((e) => {
      e.classList.remove("active");
    });

    // Add Active Class From Each List
    e.currentTarget.classList.add("active");

    // Change Color Vaiable Value
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );

    // Set Color Data To The Local Storage
    localStorage.setItem("main-color", e.currentTarget.dataset.color);
  });
});

// Get The Data Color From Local Storage
if (localStorage.getItem("main-color")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("main-color")
  );
}

// --------------------------

// Change Image Buttons
let imagesButtons = document.querySelectorAll(".change-images li");

imagesButtons.forEach((e) => {
  e.addEventListener("click", (e) => {
    // Remove Active Class From Every Element
    imagesButtons.forEach((e) => {
      e.classList.remove("active");
    });

    console.log();

    // Add active Class To The Current Target
    e.currentTarget.classList.add("active");

    // Change The Landing Box Image
    landingPage.style.backgroundImage = `url("/images/${
      imagesArr[e.currentTarget.textContent - 1]
    }")`;

    // Set Image Value To Local Storage
    localStorage.setItem("lastImg", imagesArr[e.currentTarget.textContent - 1]);

    // Set Current Index To Local Storage
    localStorage.setItem("currImgEle", e.currentTarget.textContent - 1);
  });
});

// Check If Current Image & lastImg Element Avail In Local Storage
if (localStorage.getItem("currImgEle")) {
  // Remove Active Class From Every Element
  imagesButtons.forEach((e) => {
    e.classList.remove("active");
  });

  // Set Active Class
  imagesButtons[localStorage.getItem("currImgEle")].classList.add("active");
}

if (localStorage.getItem("lastImg")) {
  // Change The Landing Box Image
  landingPage.style.backgroundImage = `url("/images/${localStorage.getItem(
    "lastImg"
  )}")`;
}

// --------------------------

// Random Background Button Function
let backgroundCheck = document.querySelector("#background-check");

function randomImagesCheck() {
  if (backgroundCheck.checked) {
    clearInterval(randomImages);

    backgroundStatus = false;
  } else {
    backgroundStatus = true;

    randomBackgroundImg();
  }

  // Set The Data To Local Storage
  localStorage.setItem("backgroundStatus", backgroundStatus);
}

backgroundCheck.addEventListener("click", () => randomImagesCheck());

// Get The Data From Local Storage
if (localStorage.getItem("backgroundStatus")) {
  backgroundStatus = localStorage.getItem("backgroundStatus");

  if (backgroundStatus == "false") backgroundCheck.click();

  landingPage.style.backgroundImage = localStorage.getItem("lastImg");
}

// Header Toggle button
let headerToggleButton = document.querySelector(".toggle-button");
let HeaderUL = document.querySelector("header .ul-list");

headerToggleButton.addEventListener("click", () => {
  HeaderUL.classList.toggle("active");
  headerToggleButton.classList.toggle("active");
});

// ------------------------------------

// Progress Box
let skillsBox = document.querySelector(".skills");
let skillsProgress = document.querySelectorAll(".skill-progress span");

// Scroll Function
window.addEventListener("scroll", () => {
  let skillsPosition = skillsBox.offsetTop - 200;

  let windowPosition = window.scrollY;

  if (skillsPosition <= windowPosition) {
    skillsBox.classList.add("active");

    skillsProgress.forEach((e) => {
      e.style.width = e.dataset.progress;

      e.classList.add("active");
    });
  }
});

// ----------------------------------------

// Gallety Box
let galleryData = [
  {
    img: "images/gallery-001.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-002.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-003.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-004.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-005.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-006.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-007.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
  {
    img: "images/gallery-008.jpg",
    title: "Title",
    paragraph:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, et. Optio facere corrupti deserunt quibusdam ratione laboriosam expedita nostrum? Commodi.",
    dataLink: "#",
  },
];

galleryData.forEach((e) => {
  // create The Main Box
  let box = document.createElement("div");

  // Set class To The Box
  box.className = "box";

  // Set Data Link To The Box
  box.setAttribute("data-link", e.dataLink);

  // Create The Image Box
  let imgBox = document.createElement("div");

  // Set Class To The Image Box
  imgBox.className = "img-box";

  // Create The Main Img
  let mainImg = document.createElement("img");

  // Set Source To The Image
  mainImg.src = e.img;

  // Set Alt Attreibute For The Img
  mainImg.setAttribute("alt", "Gallery Image");

  // Append The Img To The Image Box
  imgBox.appendChild(mainImg);

  // Create The Text Box
  let textBox = document.createElement("div");

  // Set Class To The Text Box
  textBox.className = "text";

  // Create The Heading Title In The Text Box
  let headingTitle = document.createElement("h3");

  // Set Value To The Heading Box
  headingTitle.textContent = e.title;

  // Append The Heading To The text Box
  textBox.appendChild(headingTitle);

  // Create The Paragraph Box
  let paragraph = document.createElement("p");

  // Set Value To The Paragraph Box
  paragraph.textContent = e.paragraph;

  // Append The Paragraph To The text Box
  textBox.appendChild(paragraph);

  // Append The Img Box To the Box
  box.appendChild(imgBox);

  // Append The Text Box To the Box
  box.appendChild(textBox);

  // Append The Box To The Body
  document.querySelector(".gallery .content").appendChild(box);
});

// -------------------------------------------

// Each Gallery Box On Click Function

let galleryBoxes = document.querySelectorAll(".gallery .box");

galleryBoxes.forEach((el) => {
  el.addEventListener("click", () => {
    // Remove All Popup Box From The Page
    if (document.querySelector(".popup-box")) {
      document.querySelector(".popup-box").remove();
    }

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Set Class To The Popup Box
    popupBox.className = "popup-box";

    // Create The Popup Content Box
    let popupContentBox = document.createElement("div");

    // Set Class To The Popup Content Box
    popupContentBox.className = "content";

    // Create The Img Box
    let imgBox = document.createElement("div");

    // Set Class To Img Box
    imgBox.className = "img-box";

    // Create The Main Image
    let mainImg = document.createElement("img");

    // Set Src To Main Img
    mainImg.src = el.querySelector("img").src;

    // Set Alt Attreibute For The Img
    mainImg.setAttribute("alt", "Gallery Image");

    // Append The Main Img To The Img Box
    imgBox.appendChild(mainImg);

    // Append Th Img Box To The popupContentBox
    popupContentBox.appendChild(imgBox);

    // Create The Text Box
    let textBox = document.createElement("div");

    // Set Class To Text Box
    textBox.className = "text-box";

    // Create The Heading Title
    let headingTitle = document.createElement("h3");

    // Set Value To Heading Title
    headingTitle.textContent = el.querySelector("h3").textContent;

    // Append The Heading Title To The Text Box
    textBox.appendChild(headingTitle);

    // Create The Pargraph
    let pargraph = document.createElement("p");

    // Set Value To Heading Title
    pargraph.textContent = el.querySelector("p").textContent;

    // Append The pargraph To The Text Box
    textBox.appendChild(pargraph);

    // Create The Preview Box
    let previewBox = document.createElement("div");

    // Set Class To The Preview Box
    previewBox.className = "preview";

    // Create The Link Inside The Preview Box
    let PreviewLink = document.createElement("a");

    // Set Href To The PreviewLink
    PreviewLink.href = el.dataset.link;

    // Set Value To The PreviewLink
    PreviewLink.textContent = "Preview";

    // Append The PreviewLink To The Preview Box
    previewBox.appendChild(PreviewLink);

    // Append The The Text Box popupContentBox
    popupContentBox.appendChild(textBox);

    // Append The Preview Box To The popupContentBox
    popupContentBox.appendChild(previewBox);

    // Append The popupContentBox To The Main Popup Box
    popupBox.appendChild(popupContentBox);

    // Create The Exit Button
    let exitButton = document.createElement("i");

    // Set Vlass To The Exit Button
    exitButton.className = "far fa-times-circle";

    // Append The Exit Button To The Main Popup Box
    popupBox.appendChild(exitButton);

    // Appned The Main Popup Box To The Document
    document.body.appendChild(popupBox);

    // Popup Box Exite Button On Click function
    let mainExitButton = document.querySelector(".popup-box i");

    mainExitButton.addEventListener("click", (e) => {
      mainExitButton.parentElement.remove();
      overlayBox.classList.remove("active");
    });

    // Set Class Active To The Overlay Box On Click
    let overlayBox = document.querySelector(".overlay-box");

    overlayBox.classList.add("active");

    // Remove The Popup Box From The Page On Overlay Clicked
    overlayBox.addEventListener("click", () => {
      popupBox.remove();
      overlayBox.classList.remove("active");
    });
  });
});

// --------------------------------

// Timeline Functions
let ulBullets = document.querySelectorAll(".timeline ul li");
let timelineBox = document.querySelectorAll(".timeline .box");
let currentTimelineIndex = 0;

// Ul Bullets On Click Function
ulBullets.forEach((e) => {
  e.addEventListener("click", (e) => {
    // Call The Function To Remove Active Class
    timelineActiveClass();

    // Add Class Active To The Current List
    e.currentTarget.classList.add("active");

    // Change The Current Index Value
    currentTimelineIndex = e.currentTarget.dataset.index;

    // Call The Function To Dislay The current Box
    timelineBoxFunc();
  });
});

// remove Active Class From Each List
function timelineActiveClass() {
  ulBullets.forEach((e) => {
    e.classList.remove("active");
  });
}

function timelineBoxFunc() {
  // Remove Active Class From All Boxes
  timelineBox.forEach((e) => e.classList.remove("active"));

  // Add Class Active To The Current Box
  timelineBox[currentTimelineIndex].classList.add("active");
}

timelineBoxFunc();
