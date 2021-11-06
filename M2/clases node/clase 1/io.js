import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Cual es su nombre?', (res) => {
    nombre(res)
})

function nombre(res){
    console.log("mucho gusto "+res)
}