$(document).ready(init);

function init() {

    $('#start').click(function() {
        chrome.storage.local.set({ 'start': true });
        console.log("ButtonStart");
    });

    $('#pause').click(function() {
        chrome.storage.local.set({ 'start': false });
        console.log("ButtonPause");
    });
}
