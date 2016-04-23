$(document).ready(init);

function init() {

    $('#start').click(function() {
        chrome.storage.sync.set({ 'start': true });
        console.log("ButtonStart");
    });

    $('#pause').click(function() {
        chrome.storage.sync.set({ 'start': false });
        console.log("ButtonPause");
    });
}
