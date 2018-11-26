function sendemail() {
  $.ajax({
    type: "POST",
    url: "https://contactoqtave.herokuapp.com/contact",
    data: {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("#messageus").val()
    },
    success: function(msg) {
      //alert(msg);
      if (msg == "OK") {
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        $(".contactForm")
          .find("input, textarea")
          .val("");
      } else {
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $("#errormessage").html(msg);
      }
    },
    error: function(jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}
