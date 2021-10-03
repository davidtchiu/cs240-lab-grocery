// add an event for keypress
let inputNode = document.querySelector("input[name='itemName']");
inputNode.addEventListener("keydown", function (evt) {
  // need to check if the return key was pressed
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

  // create a <span>item name</span>
  let itemName = document.createElement("span");
  itemName.innerHTML = item;

  // nest the <span> in <li>...</li>
  let newListItem = document.createElement("li");
  newListItem.appendChild(itemName);

  // append the <li> to the end of the list
  let ul = document.querySelector(listID);
  ul.appendChild(newListItem);
}
