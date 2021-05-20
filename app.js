// add an event for button press
let buttonNode = document.querySelector("#addButton");
buttonNode.addEventListener("click", function () {
  let inputField = document.querySelector("input[name='itemName']");

  // get the value from the input field
  addItem("#list", inputField.value);

  // clear out field
  inputField.value = "";
});

// add an event for keypress
let inputNode = document.querySelector("input[name='itemName']");
inputNode.addEventListener("keypress", function (evt) {
  if (evt.code === "Enter") {
    // get the value from the input field
    addItem("#list", inputNode.value);

    // clear out field
    inputNode.value = "";
  }
});

/**
 * Adds an item to the list
 * @param {string} listID HTML id of the list
 * @param {string} item Name of the grocery list item to be added
 */
function addItem(listID, item) {
  if (!listID.startsWith("#")) {
    listID = "#" + listID;
  }

  // try to find existing item (case insensitive)
  let found = false;
  let ul = document.querySelector(listID);
  for (let i = 0; i < ul.childElementCount; i++) {
    // first child is qty, last child is item name
    if (ul.children[i].lastChild.innerHTML == item) {
      let cnt = parseInt(ul.children[i].firstChild.innerHTML) + 1;
      ul.children[i].firstChild.innerHTML = cnt;
      found = true;
    }
  }
  if (!found) {
    // create children of item node
    // let qty = document.createElement("span");
    // qty.innerHTML = 1;
    let itemName = document.createElement("span");
    itemName.innerHTML = item;

    // make a new checkbox
    let chkbox = document.createElement("input");
    chkbox.type = "checkbox";
    chkbox.addEventListener("change", function () {
      if (chkbox.checked) {
        chkbox.parentElement.className = "itemChecked";
      } else {
        chkbox.parentElement.className = "";
      }
    });

    let newListItem = document.createElement("li");
    newListItem.appendChild(chkbox);
    // newListItem.appendChild(qty);
    newListItem.appendChild(itemName);

    // append to the list
    let ul = document.querySelector(listID);
    ul.appendChild(newListItem);
  }
}
