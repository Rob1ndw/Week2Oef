import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let graden = parseFloat(await userInput.question("Hoeveel graden is het op dit moment: "))
let regen = await userInput.question("Is het aan het regen? ")

if(graden > 20){
    console.log("Ideal weer voor een short")
    if(regen == 'ja'){
        console.log("Beter een regen jas aan doen")
    }
}else{
    console.log("Beter een lange broek aan doen")
}

process.exit()

