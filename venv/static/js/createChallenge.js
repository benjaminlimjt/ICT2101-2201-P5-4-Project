function changeSquare() {
    var image = document.getElementById(this.id);

    // If image is currently green square, change to red, and vice versa
    if (image.src.match("/static/img/blank.png")) {
        image.src = "/static/img/wall.png";
    } else if (image.src.match("/static/img/wall.png")) {
        image.src = "/static/img/car.png";
    }
    else if (image.src.match("/static/img/car.png")) {
        image.src = "/static/img/target.png";
    }
    else if (image.src.match("/static/img/target.png")) {
        image.src = "/static/img/blank.png";
    }
};

//Creates a grid of dimensions width by height
function makeGrid(height, width) {

    // Loop over height and width to create black square objects with
    // buttons in middle
    for (i = 0; i < height; i++) {
    var row = document.createElement("tr");
        for (j = 0; j < width; j++) {
            var tableCell = document.createElement("td");
            tableCell.className = "mapTile";
            tableCell.style = "border: 1px solid black;";
            // Add green square image
            var image = document.createElement("img");
            image.id = ("image").concat(i,",", j);
            image.src = "/static/img/blank.png"; 
            image.className = "tile";
            tableCell.appendChild(image);
            row.appendChild(tableCell);
            // Add onclick feature. I've tried using different methods
            // and putting it above the appendChild line, but nothing seems
            // to work.
            image.onclick = changeSquare;
        }
        document.getElementById("virtualMap").appendChild(row);
    }
};

makeGrid(5, 5);

$("form[name=createChallenge_form").submit(function (e) {

    var $form = $(this);
    var data = $form.serialize();

    var virtualMapTable = document.getElementById("virtualMap");
    var challengeData = new Array();

    for (var y = 0; y < 5; y++) {
        challengeData[y] = new Array();
        for (var x = 0; x < 5; x++) {

            if ( virtualMapTable.rows[y].cells[x].getElementsByTagName('img')[0].src.includes("/static/img/blank.png")) {
                challengeData[y].push(0);
            }
            else if ( virtualMapTable.rows[y].cells[x].getElementsByTagName('img')[0].src.includes("/static/img/wall.png")) {
                challengeData[y].push(1);
            }
            else if ( virtualMapTable.rows[y].cells[x].getElementsByTagName('img')[0].src.includes("/static/img/car.png")){
                challengeData[y].push(2);
            }
            else if ( virtualMapTable.rows[y].cells[x].getElementsByTagName('img')[0].src.includes("/static/img/target.png")) {
                challengeData[y].push(3);
            }
        }
    }

    $.ajax({
        url: "/admin/manageChallenges/createChallenges",
        type: "POST",
        data: {"formData": data, "challengeData": JSON.stringify(challengeData)},
        dataType: "json",
        success: function (resp) {
            
        },
        error: function (resp) {
            
        }

    })

    e.preventDefault();
});