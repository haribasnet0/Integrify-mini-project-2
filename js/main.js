// getting the value from the input 

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', generateColor);

function randomHexaNumberGenerator(){
    return `#${Math.random().toString(16).substring(2, 8)}`;
}
//console.log(randomHexaNumberGenerator());

console.log(randomHexaNumberGenerator());

function generateColor(num){

    num = input.value;
    const result = document.querySelector('.result-section');

    

    for (let i = 0; i < num; i++){
        const newDiv = document.createElement('div');
        newDiv.textContent = 'Hello';
        newDiv.style.backgroundColor = randomHexaNumberGenerator();

        const hexLabel = document.createElement('span');
        hexLabel.textContent = `${randomHexaNumberGenerator()}`;

        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';

        newDiv.appendChild(hexLabel);
        newDiv.appendChild(copyButton);
        result.appendChild(newDiv);
    }  
}
