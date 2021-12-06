

function validateCreateUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("passwd").value;
    var name = document.getElementById("name").value;

        if (username == null || username == "") {
            alert("Please enter the username.");
            return false;
        }
        if (password == null || password == "") {
            alert("Please enter the password.");
            return false;
        }
    if (name == null ||name == "") {
        alert("Please enter the name.");
            return false;
    }

// Create User Form
$("form[name=createUser_form").submit(function (e) {

    var $form = $(this);
    var $success = $form.find(".success");
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url: "/admin/manageUsers/createUser",
        type: "POST",
        data: data,
        dataType: "json",
        success: function (resp) {
            $error.text("").addClass("error--hidden");
            $success.text(resp.success).removeClass("success--hidden");
            document.getElementById("createUser_form").reset();
        },
        error: function (resp) {
            $success.text("").addClass("success--hidden");
            $error.text(resp.responseJSON.error).removeClass("error--hidden");
        },

    })

    e.preventDefault();
    })

}

function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("passwd").value;
            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password == null     || password == "") {
                alert("Please enter the password.");
                return false;
            }
            
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
                window.location.href = "/";
            },
            error: function (resp) {
                console.log(resp);
            }

        })

        e.preventDefault();
    })
                    
}
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

// Car Listeners JS
document.getElementById("carBtnUp").addEventListener("mousedown", moveCarUp);
document.getElementById("carBtnLeft").addEventListener("mousedown", moveCarLeft);
document.getElementById("carBtnRight").addEventListener("mousedown", moveCarRight);
document.getElementById("carBtnDown").addEventListener("mousedown", moveCarDown);
document.getElementById("carBtnUp").addEventListener("mouseup", stopCar);
document.getElementById("carBtnLeft").addEventListener("mouseup", stopCar);
document.getElementById("carBtnRight").addEventListener("mouseup", stopCar);
document.getElementById("carBtnDown").addEventListener("mouseup", stopCar);

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
