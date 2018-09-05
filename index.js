let body = document.querySelector('body');

let mouseClientCheckbox = document.querySelector('#mouseClient');
let mouseoffsetCheckbox = document.querySelector('#mouseoffset');
let mousePageCheckbox = document.querySelector('#mousePage');
let mouseScreenCheckbox = document.querySelector('#mouseScreen');
let mouseXYCheckbox = document.querySelector('#mouseXY');
let mouseMovementCheckbox = document.querySelector('#mouseMovement');
let mouseLayerCheckbox = document.querySelector('#mouseLayer');

let pagePosition = document.querySelector('.pagePosition');
let offsetPosition = document.querySelector('.offsetPosition');
let clientPosition = document.querySelector('.clientPosition');
let screenPosition= document.querySelector('.screenPosition');
let XYPosition= document.querySelector('.XYPosition');
let movementPosition= document.querySelector('.movementPosition');
let layerPosition= document.querySelector('.layerPosition');
let allPosition = document.querySelectorAll('.Position');

body.addEventListener('mousemove', (e) => {
  checkPage(e.target.id,e.target.parentElement.id);
  checkOffset(e.target.id,e.target.parentElement.id);
  checkClient(e.target.id,e.target.parentElement.id);
  checkScreen(e.target.id,e.target.parentElement.id);
  checkXY(e.target.id,e.target.parentElement.id);
  checkMovement(e.target.id,e.target.parentElement.id);
  checkLayer(e.target.id,e.target.parentElement.id);
  console.log(e.screenY);
  display(e);
})

function display(e) {
  pagePosition.style.top = `${e.pageY}px`;
  pagePosition.style.left = `${e.pageX}px`;
  pagePosition.innerHTML =
    `
  page<br>
  <span>X : ${e.pageX}px Y : ${e.pageY}px</span>
  `

  offsetPosition.style.top = `${e.offsetY}px`;
  offsetPosition.style.left = `${e.offsetX}px`;
  offsetPosition.innerHTML =
    `
  offset<br>
  <span>X : ${e.offsetX}px Y : ${e.offsetY}px</span>
  `

  clientPosition.style.top = `${e.clientY}px`;
  clientPosition.style.left = `${e.clientX}px`;
  clientPosition.innerHTML =
    `
  client<br>
  <span>X : ${e.clientX}px Y : ${e.clientY}px</span>
  `

  screenPosition.style.top = `${e.screenY}px`;
  screenPosition.style.left = `${e.screenX}px`;
  screenPosition.innerHTML =
    `
  Screen<br>
  <span>X : ${e.screenX}px Y : ${e.screenY}px</span>
  `

  XYPosition.style.top = `${e.y}px`;
  XYPosition.style.left = `${e.x}px`;
  XYPosition.innerHTML =
    `
  XY<br>
  <span>X : ${e.y}px Y : ${e.x}px</span>
  `

  movementPosition.style.top = `${e.movementY}px`;
  movementPosition.style.left = `${e.movementX}px`;
  movementPosition.innerHTML =
    `
  movement<br>
  <span>X : ${e.movementX}px Y : ${e.movementY}px</span>
  `

  layerPosition.style.top = `${e.layerY}px`;
  layerPosition.style.left = `${e.layerX}px`;
  layerPosition.innerHTML =
    `
  layer<br>
  <span>X : ${e.layerX}px Y : ${e.layerY}px</span>
  `

}

function checkPage(targetId,targetParentId) {
  if (mousePageCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    pagePosition.classList.remove("hide")
  } else {
    pagePosition.classList.add("hide")
  }
}

function checkOffset(targetId,targetParentId) {
  if (mouseoffsetCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    offsetPosition.classList.remove("hide")
  } else {
    offsetPosition.classList.add("hide")
  }
}

function checkClient(targetId,targetParentId) {
  if (mouseClientCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    clientPosition.classList.remove("hide")
  } else {
    clientPosition.classList.add("hide")
  }
}
function checkScreen(targetId,targetParentId) {
  if (mouseScreenCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    screenPosition.classList.remove("hide")
  } else {
    screenPosition.classList.add("hide")
  }
}
function checkXY(targetId,targetParentId) {
  if (mouseXYCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    XYPosition.classList.remove("hide")
  } else {
    XYPosition.classList.add("hide")
  }
}
function checkMovement(targetId,targetParentId) {
  if (mouseMovementCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    movementPosition.classList.remove("hide")
  } else {
    movementPosition.classList.add("hide")
  }
}
function checkLayer(targetId,targetParentId) {
  if (mouseLayerCheckbox.checked && targetId !== "chooseDisplay" && targetParentId !== "chooseDisplay") {
    layerPosition.classList.remove("hide")
  } else {
    layerPosition.classList.add("hide")
  }
}
