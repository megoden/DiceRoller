const rollButton = document.querySelector('#StartRole')

const dieRolls = []

let totalvalue = document.querySelector('#total')
      var array = [];
      
const userInput = document.querySelector('#dice')

rollButton.addEventListener("click", function() {

const Rolling = userInput.value
console.log(Rolling)

let D = Math.random

let x = Rolling
let y = 0

do {
    
    if (D() < 0.16) {
        console.log('1')
        dieRolls.push(1)
        array.push(1)
        } else if (D() < 0.33) {
            console.log('2')
            dieRolls.push(2)
            array.push(2)
        } else if (D() < 0.50) {
            console.log('3')
            array.push(3)
            dieRolls.push(3)
        }else if (D() < 0.66) {
            console.log('4')
            array.push(4)
            dieRolls.push(4)
        }else if (D() < 0.83) {
            console.log('5')
            array.push(5)
            dieRolls.push(5)
        }else {
            console.log('6')
            array.push(6)
            dieRolls.push(6)
        }
        y++
      }
      while (y < x ) {
      }
      // Getting sum of numbers
    var sum = array.reduce(function(a, b){
        return a + b;
    }, 0);
    
      let Valueofdicerolled = Number(totalvalue.innerHTML);

      totalvalue.innerHTML = sum
      console.log(sum);
    })

const bagel = document.querySelector('#ShowAll')
let creamcheese = document.querySelector('AllRoles')
bagel.addEventListener("click", function() {
    let showingalldice = Number(creamcheese.innerHTML);

    creamcheese.innerHTML = dieRolls
    console.log(dieRolls);
})
