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
        error: function (resp) {
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
        error: function (resp) {
            console.log(resp);
        }

    })

    e.preventDefault();
})

$("form[name=sendData_form").submit(function (e) {

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
        error: function (resp) {
            console.log(resp);
        }

    })

    e.preventDefault();
})
// $("form[name=sendCmd_form").submit(function (e) {

//     var $form = $(this);
//     var $error = $form.find(".error");
//     var data = $form.serialize();

//     $.ajax({
//         url: "/freeDriving",
//         type: "POST",
//         data: data,
//         dataType: "json",
//         success: function (resp) {
//             console.log(resp);
//         },
//         error: function(resp) {
//             console.log(resp);
//         }

//     })

//     e.preventDefault();
// })
document.getElementById("carBtnUp").addEventListener("click", moveCarUp);
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
document.getElementById("carBtnLeft").addEventListener("click", moveCarLeft);
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
document.getElementById("carBtnRight").addEventListener("click", moveCarRight);
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
document.getElementById("carBtnDown").addEventListener("click", moveCarDown);
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