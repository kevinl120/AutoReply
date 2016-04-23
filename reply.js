setTimeout(reply, 5000);

function reply() {
    var chatBox = document.getElementsByName("message_body")[0];
    var replyBut = document.getElementById("u_0_y");

    var test = setInterval(function() {
        chatBox.classList.remove("DOMControl_placeholder");
        chatBox.value = "Same";

        getEventListeners(chatBox).paste[0].listener();

    }, 1000);

    var replyClicker = setInterval(function() {
        replyBut.click();
    }, 2000);

    var stopKittens = function() {
        clearInterval(kitInt);
        clearInterval(replyClicker);
    };
}
