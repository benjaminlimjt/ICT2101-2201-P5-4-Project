
new Sortable(document.getElementById('sourceCode_container'), {
    group: {
        name: 'code',
        pull: 'clone',
        put: false
    },
    sort: false,
    animation: 150,
    ghostClass: 'bg-info'
})

new Sortable(document.getElementById('inputCode_container'), {
    group: {
        name: 'code',
    },
    animation: 150,
    ghostClass: 'text-info',
    swap: true,
    swapClass: 'myswap',
    removeOnSpill: true
})

// Car Variables
var currentCarDegree = 0;
var virtualMapTable = document.getElementById("virtualMap");
var virtualMapGrid = JSON.parse(challengeMap);
var carPosX = 0;
var carPosY = 0;
var carOGPosX = 0;
var carOGPosY = 0;
var carFuturePosX = 0;
var carFuturePosY = 0;

var maxPosX = virtualMapGrid.length-1;
var maxPosY = virtualMapGrid.length-1;

var dog = 0;

// Initial Locate Car
loop2:
    for (carPosY = 0; carPosY < virtualMapGrid.length; carPosY++) {     
        for (carPosX = 0; carPosX < virtualMapGrid[carPosY].length; carPosX++) {
            if(virtualMapGrid[carPosY][carPosX] == 2) {
                break loop2;
            }
        }
    }

carOGPosX = carPosX;
carOGPosY = carPosY;   
carFuturePosX = carPosX;
carFuturePosY = carPosY;


function reset() {
    var id = window.setTimeout(function () {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    document.getElementById("runCodeButton").removeAttribute("disabled");
    var redList = document.querySelectorAll(".red");
    if (redList !==null) {
        redList.forEach(el => el.classList.remove("red"));
    }
    var carTile = document.getElementById("carTileImage");
    virtualMapTable.rows[carOGPosY].cells[carOGPosX].appendChild(carTile);
    $('.carTileImage').css('-webkit-transform', "rotate(0deg)");
    currentCarDegree = 0;

    carPosX = carOGPosX;
    carPosY = carOGPosY;
    carFuturePosX = carOGPosX;
    carFuturePosY = carOGPosY;
}

document.getElementById("stopCodeButton").addEventListener("click", reset);

function checkValidCoordinates() {
    if (carFuturePosX == -1) {
        carFuturePosX = 0;
        return 0;
    }
    if (carFuturePosX > maxPosX) {
        carFuturePosX = maxPosX;
        return 0;
    }
    if (carFuturePosY == -1) {
        carFuturePosY = 0;
        return 0;
    }
    if (carFuturePosY > maxPosY) {
        carFuturePosY = maxPosY;
        return 0;
    }

    if(virtualMapTable.rows[carFuturePosY].cells[carFuturePosX].classList.contains("wallTile")) {

        return 0;
    }

    if(virtualMapTable.rows[carFuturePosY].cells[carFuturePosX].classList.contains("targetTile")) {

        return 2;
    }

    carPosX = carFuturePosX;
    carPosY = carFuturePosY;

    return 1;

}


document.getElementById("runCodeButton").addEventListener("click", function() {

    var carTile = document.getElementById("carTileImage");
    var codeList = document.getElementById("inputCode_container").querySelectorAll(".list-group-item");
    
    // Disable Run Button
    document.getElementById("runCodeButton").setAttribute("disabled", true);

    var commandHistoryBox = document.getElementById("commandHistoryBox");
    commandHistoryBox.innerHTML = "";

        // Main Timer to loop through input code
    for (var i = 0, len = codeList.length; i < len; i++) {
        (function(i){
            setTimeout(function(){
                // Highlights the "currently" parsing code
                codeList[i].classList.add('red')
                commandHistoryBox.innerHTML += codeList[i].textContent + "<br>";
                // Read Command and Rotate Car
                if(codeList[i].textContent == "Turn Left") {
                    currentCarDegree-= 90;
                    moveCarLeft();
                    // cmdList = cmdList + "CarLEFT";
                }
                if(codeList[i].textContent == "Turn Right") {
                    currentCarDegree+= 90;
                    moveCarRight();
                    // cmdList = cmdList+ "CarRIGHT";
                }
                if (currentCarDegree > 360) {
                    currentCarDegree = 0;
                }
                if(codeList[i].textContent == "Move Front") {
                    var direction = Math.abs((currentCarDegree / 90) % 4);
                    switch(direction) {
                        case 0:
                            carFuturePosX += 1;
                            break;
                        
                        case 1:
                            carFuturePosY -= 1;
                            break;
                        
                        case 2:
                            carFuturePosX -= 1;
                            break;
                        
                        case 3:
                            carFuturePosY += 1;
                            break;
                    };
                    if(checkValidCoordinates() == 1) {
                        virtualMapTable.rows[carPosY].cells[carPosX].appendChild(carTile);
                        moveCarUp();
                    }
                    else if (checkValidCoordinates() == 2) {
                        alert("Successfully completed the puzzle!");
                        reset();
                        return;
                    }
                    else {
                        console.log(checkValidCoordinates());
                        alert("Failed the puzzle.");
                        reset();
                        return;
                    }
                }

                if(codeList[i].textContent == "Move Back") {
                    var direction = Math.abs((currentCarDegree / 90) % 4);
                    switch(direction) {
                        case 0:
                            carFuturePosX -= 1;
                            break;
                        
                        case 1:
                            carFuturePosY += 1;
                            break;
                        
                        case 2:
                            carFuturePosX += 1;
                            break;
                        
                        case 3:
                            carFuturePosY -= 1;
                            break;
                    }
                    if(checkValidCoordinates() == 1) {
                        virtualMapTable.rows[carPosY].cells[carPosX].appendChild(carTile);
                        moveCarDown();
                    }
                    else if (checkValidCoordinates() == 2) {
                        alert("Successfully completed the puzzle!");
                        reset();
                        return;
                    }
                    else {
                        alert("Failed the puzzle.");
                        reset();
                        return;
                    }
                }
                $('.carTileImage').css('-webkit-transform', "rotate("+currentCarDegree+"deg)");
             }, 5000 * i); 
        }(i));

        // Secondary Timer to remove "active" code
        (function(i){
            setTimeout(function(){
                codeList[i].classList.remove('red')
            }, 5000 + (5000 * i));
        }(i));

        // Final timer to enable run button
        (function(len){
            setTimeout(function(){
                document.getElementById("runCodeButton").removeAttribute("disabled");
                if (i == len) {
                    alert("Sorry, all steps have been run but you have not reached target! Try again! :)");
                    reset();
                    return;
                }
            }, 5000 * len);
        }(len));
    }

    

});
