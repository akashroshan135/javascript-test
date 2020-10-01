console.log("Hello World!!!");

const title = document.querySelector("h1");
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    title.classList.toggle("title");
});

const testList = document.querySelectorAll(".testlist li");
for (item of testList) {
    item.addEventListener("click", function () {
        console.log(this);
        this.style.color = "pink";
    });
}
console.log(testList);

const newList = document.querySelector(".newlist");
const listInput = document.getElementById("listInput");
const inputBtn = document.getElementById("btn1");
inputBtn.addEventListener("click", function () {
    //create li tag
    const newItem = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    //attach licontent inside li tag
    newItem.appendChild(liContent);
    //attach li tag inside namelist dom
    newList.appendChild(newItem);
});
