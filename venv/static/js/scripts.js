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
        error: function(resp) {
            console.log(resp);
        }

    })

    e.preventDefault();
})
$("form[name=sendCmd_form").submit(function (e) {

    var $form = $(this);
    var $error = $form.find(".error");
    var data = $form.serialize();

    $.ajax({
        url: "/freeDriving",
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