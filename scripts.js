//Created by Raul Mesquita
//https://github.com/pasteldepepino
var clicks = 0, mny1 = 0, mny2 = 0, dblclck = 0, multiclickamount = 0, multiclck = 0, autoclickamount = 0, rndm = 0, rndmamnt = 0, lucky = 0, luckamnt = 0  //sets the variable for the points, money skins, double click lock
var lucktrue = 0 //extra variables
function changeimg() { //sets the function that will change the buttonguy image when the click here! button is clicked
    document.getElementById("buttonguy").src="btn.png"
    setTimeout(function() {
        document.getElementById("buttonguy").src = "button.png";
        }, 250);
}
function updatecounter() { //sets the function that is used to update the click counter
    document.getElementById("points").innerHTML = clicks; 
}
function incrementclick() { //sets the function that will update the click counter when the click here! button is clicked
    if (lucky == 1) {
        if (Math.floor(Math.random() * 100) + 1 <= luckamnt) { //checks if you were lucky
            lucktrue = 1
        }
    }
    if (dblclck == 1) {
        if (lucktrue == 1) {
            clicks += 10
        }
        else {              //checks if double click was bought
            clicks += 2
        }
    }                  
                           
    if (multiclck == 1) {
        if (lucktrue == 1) {
            clicks += multiclickamount * 10
        }
        else {
            clicks += multiclickamount //checksa if multiclick was bought
        }
        }
    if (rndm == 1) {
        let value = Math.floor(Math.random() * (rndmamnt * 10)) + 1; //checks if random sum was bought 
        if (lucktrue == 1) {
            clicks += value * 10
        } 
        else {
            clicks += value
        }
        
    }
    
    if (clicks < 10000) { //resets the money guy skin when you spend you mny
        document.getElementById("moneyguy").src = "money.png"
    }
    if (clicks >= 10000) { //changes the money guy skin when hit 10.000 clicks
        if (mny1 != 1) {
            document.getElementById("moneyguy").src = "money1.png"
            mny1 = 1
        }
    }
    if (clicks >= 100000) { //changes money guy skin when hit 100.000 clicks
        if (mny2 != 1) {
            document.getElementById("moneyguy").src = "money2.png"
            mny2 = 1
        }
    }
    else {
        clicks += 1 //if you havent bought anything
    }
    changeimg()
    updatecounter()
}
function dblclick() {
    if (clicks >= 200) { //function used to buy double click
        dblclck = 1
        clicks -= 200
        updatecounter()
        document.getElementById("dblbtn").innerHTML = "Double click / Cost 200 points (Bought!)"
        const dbldis = document.getElementById("dblbtn")
        dbldis.disabled = true
    }
    else {
        alert("Not enough points! You need 200 clicks to buy this!")
    }
}
function multiclick() { //function to buy click multiplier
    if (clicks >= 400 + 4 * 5 * multiclickamount) {
        clicks -= 400 + 4 * 5 * multiclickamount
        multiclickamount += 1
        document.getElementById("multibtn").innerHTML = "Click multiplier / Cost 400 points plus 5% for each bought. you have " + multiclickamount
        multiclck = 1
        updatecounter()
    }
    else {
        alert("You don't have enough clicks to buy this!")
    }
}
function autoclickexec() {  //executes the code to add the auto clicker points
    clicks += autoclickamount
    updatecounter()
}
function autoclickset() {
    if (clicks >= 1000 + (1000 / 100 * 10) * autoclickamount) { //runs the autoclick
        clicks -= 1000 + (1000 / 100 * 10) * autoclickamount
        autoclickamount += 1
        document.getElementById("autobtn").innerHTML = "Auto click / Cost 1.000 points plus 10% for each bought. you have " + autoclickamount
        updatecounter()
        setInterval(autoclickexec, 1000)
        }

    else {
        alert("You don't have enough points top buy this!")
    }
}    
function randomsum() {
    if (clicks >= 3000 + (3000 / 100 * 10) * rndmamnt) {
        clicks -= 3000 + (3000 / 100 * 10) * rndmamnt //buys random sum
        rndmamnt += 1
        rndm = 1
        updatecounter()
        document.getElementById("rndmbtn").innerHTML = "Random sum / Cost 3.000 points plus 10% for each bought. You have " + rndmamnt
    }
    else {
        alert("You don't have enough points to buy this!")
    }
}
function luck() {
    if (clicks >= 4500 + (4500 / 100 * 10) * luckamnt) { //buys lucky strike
        clicks -= 4500 + (4500 / 100 * 10) * luckamnt
        luckamnt += 1
        lucky = 1
        updatecounter()
        document.getElementById("lckbtn").innerHTML = "Lucky strike / Cost 4.500 points plus 10% for each bought. You have " + luckamnt
    }
    else {
        alert("You don't have enough points to buy this!")
    }
}
function beat() {
    if (clicks >= 10000000) {
        clicks -= 10000000
        updatecounter()
        const beatbtnc = document.getElementById("beatbtn")
        beatbtnc.disabled = true
        window.location.replace("credits.html")
    }
    else {
        alert("You don't have enough clicks to beat the game")
    }
}
