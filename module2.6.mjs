import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let temperatuur=parseFloat(await userInput.question("Wat is de temperatuur op dit moment: "))

if(temperatuur>=20 && temperatuur <=23){
    console.log("Dit is een aangenamen temperatuur voor een kamer")
}
else{
    console.log("Dat is niet de goeie kamertemperatuur")
}

let naam = 'jerome'
//let naam=await userInput.question("Wat is je naam: ")
if((naam == 'suske')||(naam == "wiske")){
    console.log(naam+ ' zegt hallo!')
}

let postcode=parseFloat(await userInput.question("Wat is je postcode? "))

if(postcode != 1502){
    console.log("Je bent niet in lembeek")
}
else{
    console.log("Je bent in lembeek")
}


process.exit();