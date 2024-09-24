import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let leeftijd=parseFloat(await userInput.question("Wat is je leeftijd? "))

if(leeftijd<18){
    console.log("Sorry maar je bent nog te jong voor deze site")
}
else{
    console.log("Welke kijk maar eens rond op onze site")
}
process.exit()