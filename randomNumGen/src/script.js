let generateButton = document.getElementById('generateButton');

generateButton.addEventListener('click',() => {
    let output1 = document.getElementById('outPut');
    let output2 = document.querySelector('.outPut');

    output2.style.display = "block";
    let result;
    output1.value = "";

    result = Math.floor(Math.random()*90000) + 10000;
    output1.value += `${result}`;

    }
)

const textarea = document.getElementById('outPut');
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    textarea.value = "";
});