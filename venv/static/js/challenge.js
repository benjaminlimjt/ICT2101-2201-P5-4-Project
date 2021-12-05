
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

var maxPosX = virtualMapGrid.length-1;
var maxPosY = virtualMapGrid.length-1;

// Initial Locate Car
loop2:
    for (carPosY = 0; carPosY < virtualMapGrid.length; carPosY++) {     
        for (carPosX = 0; carPosX < virtualMapGrid[carPosY].length; carPosX++) {
            if(virtualMapGrid[carPosY][carPosX] == 2) {
                break loop2;
            }
        }
    }

var carFuturePosX = carPosX;
var carFuturePosY = carPosY;

document.getElementById("stopCodeButton").addEventListener("click", function() {
    var id = window.setTimeout(function () {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    document.getElementById("runCodeButton").removeAttribute("disabled");
    var redList = document.querySelector(".red");
    if (redList !==null) {
        redList.classList.remove("red");
    }
});

function checkValidCoordinates() {
    if (carFuturePosX == -1) {
        carFuturePosX = 0;
        return false;
    }
    if (carFuturePosX > maxPosX) {
        carFuturePosX = maxPosX;
        return false;
    }
    if (carFuturePosY == -1) {
        carFuturePosY = 0;
        return false;
    }
    if (carFuturePosY > maxPosY) {
        carFuturePosY = maxPosY;
        return false;
    }

    if(virtualMapTable.rows[carFuturePosY].cells[carFuturePosX].classList.contains("wallTile")) {
        carFuturePosX = carPosX;
        carFuturePosY = carPosY;
        return false;
    }

    carPosX = carFuturePosX;
    carPosY = carFuturePosY;

    return true;
}


document.getElementById("runCodeButton").addEventListener("click", function() {
    var carTile = document.getElementById("carTileImage");
    var codeList = document.getElementById("inputCode_container").querySelectorAll(".list-group-item");
    
    // Disable Run Button
    document.getElementById("runCodeButton").setAttribute("disabled", true);

    var commandHistoryBox = document.getElementById("commandHistory");
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

                    if(checkValidCoordinates()) {
                        virtualMapTable.rows[carPosY].cells[carPosX].appendChild(carTile);
                        moveCarUp();
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

                    if(checkValidCoordinates()) {
                        virtualMapTable.rows[carPosY].cells[carPosX].appendChild(carTile);
                        moveCarDown();
                    }
                }
                $('.carTileImage').css('-webkit-transform', "rotate("+currentCarDegree+"deg)");


             }, 1000 * i); 
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
            }, 5000 * len);
        }(len));
    }

});
