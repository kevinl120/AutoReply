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
        console.log("defaultStart");
    } else {
        console.log("defaultStop");
    }
});

// Start/stop messaging
chrome.storage.onChanged.addListener(function(changes, areaName) {
    if (changes.start.newValue) {
        startRepeat();
        console.log("startRepeat");
    } else {
        stopRepeat();
        console.log("stopRepeat");
    }
});

// select the target node
var target = document.querySelector("#webMessengerRecentMessages");

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
            var item = mutation.addedNodes[i];
            if (hasClass(item, "unreadHighlight") || hasClass(item, "unreadFading")) {
                console.log("unread");
                fillChat();
                replyClick();
                // // Delay before reply to ensure only reply once
                // setTimeout(replyClick, 100);
            }
        }
    });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
