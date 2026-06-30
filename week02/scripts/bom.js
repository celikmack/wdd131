const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const validBooks = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Mosiah",
    "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni" ]

button.addEventListener("click", function() {
    const value = input.value.trim();
    // Limit to 10 entries
    if (list.children.length >= 10) {
        alert("You can only add 10 chapters!");
        input.value = "";
        input.focus();
        return;
    }    
    // Only from Book of Mormon    
    const isValid = validBooks.some(book => value.startsWith(book));

    if (!isValid) {
        alert("Only books from the Book of Mormon!");
        input.value = "";
        input.focus();
        return;
    }

    if (value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        const deletebtn = document.createElement("button");
        deletebtn.textContent = "❌";
        deletebtn.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });
        li.appendChild(deletebtn);
        list.appendChild(li);
        input.value = "";
    }
    input.focus();
});






