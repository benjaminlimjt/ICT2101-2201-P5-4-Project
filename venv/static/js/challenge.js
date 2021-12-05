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

var currentCarDegree = 0;

document.getElementById("runCodeButton").addEventListener("click", function() {
    var codeList = document.getElementById("inputCode_container").querySelectorAll(".list-group-item");

    // Disable Run Button
    document.getElementById("runCodeButton").setAttribute("disabled", true);
    // Main Timer to loop through input code
    var commandHistoryBox = document.getElementById("commandHistory");
    for (var i = 0, len = codeList.length; i < len; i++) {

        (function(i){
            setTimeout(function(){
                // Highlights the "currently" parsing code
                codeList[i].classList.add('red')
                commandHistoryBox.innerHTML += codeList[i].textContent + "<br>";
                // Read Command and Rotate Car
                if(codeList[i].textContent == "Turn Left") {
                    currentCarDegree-= 90;
                }
                if(codeList[i].textContent == "Turn Right") {
                    currentCarDegree+= 90;
                }
                if (currentCarDegree > 360) {
                    currentCarDegree = 0;
                }
                $('.carTileImage').css('-webkit-transform', "rotate("+currentCarDegree+"deg)");


            }, 1000 * i);
        }(i));

        // Secondary Timer to remove "active" code
        (function(i){
            setTimeout(function(){
                codeList[i].classList.remove('red')
            }, 1000 + (1000 * i));
        }(i));

        // Final timer to enable run button
        (function(len){
            setTimeout(function(){
                document.getElementById("runCodeButton").removeAttribute("disabled");
            }, 1000 * len);
        }(len));
    }
    

});
