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



function getLastMessages()
{
    var same[] = document.getElementByClass("unreadHighlight");
    var index;

	if(same[numberOfMessages]!=""){
		reply();
		numberOfMessages = numberOfMessages+1;
	}
	else{
		console.log("")
	}
}

