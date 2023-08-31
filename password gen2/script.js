
class Password {
    constructor(numbers, letters, characters, length) {
        this.numbers = numbers;
        this.characters = characters;
        this.letters = letters;
        this.length = length;
    }

    getPassword() {
        const passwordArray = [...this.numbers, ...this.letters, ...this.characters];
        let revisedArray = [];
        passwordArray.forEach((pass) => {
            revisedArray.splice(Math.floor(Math.random() * revisedArray.length), 0, pass);
        });
        let password = '';
        for (let i = 0; i < this.length; i++) {
            password += revisedArray[Math.floor(Math.random() * revisedArray.length)];
        }
        
            displayPassword(password);
       
    }
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const characters = '!@#$%&?';
let generate;

const show = document.querySelector('.password');
function displayPassword(ins) {
    show.value = ins;
}

const generateBtn = document.querySelector('.generate');
const numCheck = document.querySelector('#numbers');
const charCheck = document.querySelector('#characters');
const letterCheck = document.querySelector('#letters');
const passLength = document.querySelector('.passLength');

generateBtn.addEventListener('click', () => {
    if (numCheck.checked && letterCheck.checked && charCheck.checked) {
        generate = new Password(numbers, letters, characters, passLength.value);
    } 
    else if (numCheck.checked && letterCheck.checked && !charCheck.checked) {
        generate = new Password(numbers, letters, '', passLength.value);
    }
    else if (numCheck.checked && !letterCheck.checked && charCheck.checked) {
        generate = new Password(numbers, characters, '', passLength.value);
    }
    else if (!numCheck.checked && letterCheck.checked && charCheck.checked) {
        generate = new Password(letters, characters, '', passLength.value);
    }
     else if (numCheck.checked && !charCheck.checked && !letterCheck.checked) {
        generate = new Password(numbers, '', '', passLength.value);
    } 
     else if (!numCheck.checked && charCheck.checked && !letterCheck.checked) {
        generate = new Password(characters, '', '', passLength.value);
    } 
     else if (!numCheck.checked && !charCheck.checked && letterCheck.checked) {
        generate = new Password(letters, '', '', passLength.value);
    } 
    else {
        alert("Please select at least one character set.");
        return;
    }

    generate.getPassword();
});


const copy = document.querySelector('.copy')
copy.addEventListener('click', () =>{
    if(show.value !== ''){
        navigator.clipboard.writeText(show.value)
        showCopiedLabel()
    }
})

function showCopiedLabel(){
    document.querySelector('.text').style.display = 'block'

    setInterval(() =>{
        document.querySelector('.text').style.display = 'none'
    },3000)
}