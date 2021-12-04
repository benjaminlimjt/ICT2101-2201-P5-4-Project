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

function validate() {
            var username = document.getElementById("username").value;
            var password = document.getElementById("passwd").value;
            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;
            }
            if (password == null || password == "") {
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
            },
            error: function (resp) {
                console.log(resp);
            }

        })

        e.preventDefault();
    })
                    
}