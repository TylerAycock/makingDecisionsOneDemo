let roboHealth = 100 
let roboAttack = 20 

let robo2Health = 100
let robo2Attack = 25

if (roboAttack > robo2Attack) {
    console.log(`robo has a higher attack than robo2`)
} else {
    console.log(`robo2 has higher attack`)
}

//roboHealth -= robo2Attack 

//console.log(roboHealth)

//this is a robo2 attack

while(roboHealth > 30) {
    roboHealth -= roboAttack
    console.log(`robo2 attacks robo. His health is now ${roboHealth}`)
}

//robo healing 

for (let i = 0; i < 2; i++){
   if (roboHealth + 50 < 100) {
    roboHealth = 100
   } else {
    roboHealth = 50
   }
}

console.log(roboHealth)

let roboDefense = 15 

roboHealth -= robo2Attack - roboDefense 
console.log(roboHealth)

let attacks = 0

while(roboHealth > 30) {
    roboHealth -= roboAttack - roboDefense
    console.log(`robo2 attacks robo. His health is now ${roboHealth}`)
    attacks ++
}

console.log(attacks)