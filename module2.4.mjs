import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal =parseFloat(await userInput.question("Geef me een getal van 0 tot 10: "))

if(getal ==8){
    console.log("Je hebt het zelfde getal als mij ")
}
else{
    console.log("Je hebt niet het zelfde getal als mij")
}
process.exit()