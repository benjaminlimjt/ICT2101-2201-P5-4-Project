$("form[name=createUser_form").submit(function (e) {

    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url: "/admin/manageUsers/createUser",
        type: "POST",
        data: data,
        dataType: "json",
        success: function (resp) {
            console.log(resp);
        },
        error: function(resp) {
            console.log(resp);
        }

    })

    e.preventDefault();
})

$("form[name=login_form").submit(function (e) {

    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url: "/login",
        type: "POST",
        data: data,
        dataType: "json",
        success: function (resp) {
            console.log(resp);
        },
        error: function(resp) {
            console.log(resp);
        }

    })

    e.preventDefault();
})

//CAR JS

function moveCarUp() {
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify("CarUP"),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}

function moveCarLeft() {
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify("CarLEFT"),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}

function moveCarRight() {
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify("CarRIGHT"),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}

function moveCarDown() {
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify("CarDOWN"),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}
function stopCar() {
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify("CarSTOP"),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}
function sendCommandList(cmdList){
    $.ajax({
        url: "/freeDriving",
        type: "POST",
        data: JSON.stringify(cmdList),
        contentType: "application/json",
        success: function (resp) {
            console.log(resp);
        },
        error: function (resp) {
            console.log(resp);
        }
    })
}
//END CAR JS