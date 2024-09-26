import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let fruit=await userInput.question("Welke fruit wil je kopen: ")
let prijs = 0

switch (fruit){
    case 'peer':
    case 'peren':
    prijs = 1.02
    break

    case 'appelen':
    case 'appel':
    prijs = 1.49
    break

    case 'watermeloen':
    case 'watermeloenen':
    prijs = 2.00
    break 

    case 'citroen':
    case 'citroenen':
    prijs = 1.09
    break

    default: console.log('Deze fruit is niet herkend')

}
console.log("de prijs van een" + fruit + " is "+ prijs + "€ ")

process.exit()