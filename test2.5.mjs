import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let taal=await userInput.question("Zeg welke taal je spreek NL,FR,EN of ander: ")
let NL;
let FR;
let EN;
let ander;


if (taal == 'NL'){
    console.log("Hallo welkom")
}
else if( taal == 'FR'){
    console.log('Bonjour')
}
else if(taal == 'EN'){
    console.log("Hello Welcome")
}
else{
    console.log("sorry deze taal spreken we niet")
}
process.exit()