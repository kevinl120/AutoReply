// References
var chatBox = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_y");

// Enter message in chat box
var fillChat = function() {
    chatBox.classList.remove("DOMControl_placeholder");
    chatBox.value = "Same";
};
var chatIntervalID;

// Hit reply button (slight delay after filling in message box)
var replyClick = function() {
    replyBut.click();
};
var replyIntervalID;

var startRepeat = function() {
    chatIntervalID = setInterval(fillChat, 1500);
    // Slight delay between filling in message and clicking reply
    replyIntervalID = setInterval(replyClick, 2000);
};

var stopRepeat = function() {
    clearInterval(chatIntervalID);
    clearInterval(replyIntervalID);
};


chrome.storage.local.get("start", function(callback) {
    if (callback) {
        startRepeat();
        console.log("defaultStart");
    } else {
        console.log("defaultStop");
    }
});

chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (changes.start.newValue) {
        startRepeat();
        console.log("start");
    } else {
        stopRepeat();
        console.log("stop");
    }
});
