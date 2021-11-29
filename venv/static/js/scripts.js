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
        error: function(resp) {
            console.log(resp);
            $success.text(resp.success).addClass("success--hidden");
            $error.text(resp.responseJSON.error).removeClass("error--hidden");
        },

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
            window.location.href = "/";
        },
        error: function(resp) {
            $error.text(resp.responseJSON.error).removeClass("error--hidden");
        },

    })

    e.preventDefault();
})