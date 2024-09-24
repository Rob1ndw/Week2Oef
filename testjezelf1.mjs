import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question("Geef me een getal: "))
let getal2 = parseFloat(await userInput.question("Geef me een tweede getal: "))

if (getal1<getal2){
    console.log("je eerste getal is kleiner dan je tweede getal " + getal2)
}
else{
    console.log("Je eerste getal is gelijk of groter dan je tweede getal " + getal1)
}
process.exit()