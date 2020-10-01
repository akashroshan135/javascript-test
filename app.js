const msg = "Hello World!!!";

console.log(msg);

function addNum(num1, num2) {
    console.log(num1 + num2);
}

const toUpper = (text) => {
    text = text.toUpperCase();
    console.log(text);
};

addNum(5, 10);
toUpper(msg);
