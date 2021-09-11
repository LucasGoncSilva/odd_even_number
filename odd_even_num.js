const input = require('readline-sync')

function ask_run() {
    let answer = input.keyInYNStrict('Wanna know if that number is even or odd?')

    if (answer == true) { odd_even() }
    else {console.log("\nOk, I'm not going to be bad with this..")}
}

function odd_even() {
    let num = Number(input.question('\nWrite that number: '))

    if (num % 2 === 0) { console.log(`\n${num} is an even number\n`) }
    else { console.log(`\n${num} is an odd number\n`) }

    ask_run()
}

ask_run()