const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const validBooks = ["1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Mosiah",
    "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni" ]

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});


button.addEventListener("click", () => {
    const value = input.value.trim();
    
    if (value !== "") {
        // Only from Book of Mormon 
        const isValid = validBooks.some(book => value.startsWith(book));
        if (!isValid) {
            alert("Only books from the Book of Mormon!");
            input.value = "";
            input.focus();
            return;
        }
        displayList(value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus(); 
    } else {
        input.focus();
    }
});    
       
function displayList(item) {
    let li = document.createElement("li");
    let deletebtn = document.createElement("button");
    li.textContent = item;
    deletebtn.textContent = "❌";
    deletebtn.classList.add("delete");
    li.appendChild(deletebtn);
    list.appendChild(li);
    deletebtn.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}


function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}





