import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let punten=parseFloat(await userInput.question("Geef hier de punt in dat je hebt behaald: "))
let Min=parseFloat(await userInput.question("Geef hier het maximum score dat je kan behalen: "))
let gemiddeld = parseFloat(Min/2)

if(punten >= gemiddeld){
    console.log("proficiaat je bent geslaagd")
}
else{
    console.log("Volgende keer beter")
}

process.exit()