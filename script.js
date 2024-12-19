$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            url: "process.php",
            type: "POST",
            data: $(this).serialize(),
            success: function (response) {
                $("#result").html(response).fadeIn();
            },
            error: function () {
                $("#result").html("<p>There was an error processing your request.</p>").fadeIn();
            }
        });
    });
});
