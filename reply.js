// References
var chatBox = document.getElementsByName("message_body")[0];
var replyBut = document.getElementById("u_0_y");

// Enter message in chat box
var fillChat = function() {
    chatBox.classList.remove("DOMControl_placeholder");
    chatBox.value = "Same";
};

// Hit reply button (slight delay after filling in message box)
var replyClick = function() {
    replyBut.click();
};

var startRepeat = function() {
    setInterval(fillChat, 2000);
    setInterval(replyClick, 2000);
    console.log("start1");
};

var stopRepeat = function() {
    // Clear all intervals (should be a better way to do this)
    for (var i = 1; i < 99999; i++) {
        window.clearInterval(i);
    }
};

// Check if should start messaging on page load
chrome.storage.sync.get("start", function(callback) {
    if (callback.start) {
        startRepeat();
    }
});

// Start/stop messaging
chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (changes.start.newValue) {
        startRepeat();
    } else {
        stopRepeat();
    }
});

// // select the target node
// var target = document.querySelector("#webMessengerRecentMessages");
//
// // create an observer instance
// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutation) {
//         console.log(mutation.type);
//     });
// });
//
// // configuration of the observer:
// var config = { childList: true };
//
// // pass in the target node, as well as the observer options
// observer.observe(target, config);
