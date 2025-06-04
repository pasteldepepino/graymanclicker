var clicks = 0, mny1 = 0, mny2 = 0, dblclck = 0 //sets the variable for the points, money skins, double click lock
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
    if (dblclck == 1) {
        clicks += 2
    }                  //checks if double click was bought
    else {
        clicks += 1
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