/** add an event for keydown */
let inputNode = document.querySelector("input[name='itemName']");
inputNode.addEventListener("keydown", function (evt) {
  // need to check if the return key was depressed
  if (evt.code === "Enter") {
    // create a <span>value from input field</span>
    let itemName = document.createElement("span");
    itemName.innerHTML = inputNode.value;

    // nest the <span> in <li>...</li>
    let newListItem = document.createElement("li");
    newListItem.appendChild(itemName);

    // append the <li> to the end of the list
    let ul = document.querySelector("#list");
    ul.appendChild(newListItem);

    // clear out the input field
    this.value = "";
  }
});
