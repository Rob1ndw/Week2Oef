import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let fruit=await userInput.question("Welke fruit wil je kopen: ")
let prijs=0

if(fruit == "citroen"){
    prijs=1.02
}
else if(fruit == "appel"){
    prijs=1.49
}
else if(fruit == "watermeloen"){
    prijs = 2.00
}
else if(fruit == "peer"){
    prijs=1.25
}
else{
    console.log("Deze fruit is niet gekend")
}
console.log("de prijs van een" + fruit + " is "+ prijs + "€ ")

process.exit()