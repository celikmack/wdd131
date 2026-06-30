const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul")

const li = document.createElement("li");
const deleteBtn = document.createElement("button");

li.textContent = input.value;
deleteBtn = "❌";
li.appendChild(deleteBtn);
list.appendChild(li);