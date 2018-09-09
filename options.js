window.addEventListener('load', function load(event) {
    chrome.storage.local.get('textSize', function(result) {
        if (result != undefined && result.textSize != undefined) {
            document.getElementById('textSize').value = result.textSize;
        }
    });
    chrome.storage.local.get('singleLine', function(result2) {
        if (result2 != undefined && result2.singleLine != undefined) {
            document.getElementById('singleLine').value = result2.singleLine;

        }
    });
    document.getElementById('save').onclick = function() {
        chrome.storage.local.set({'textSize': document.getElementById('textSize').value});
        chrome.storage.local.set({'singleLine': document.getElementById('singleLine').value});
        document.getElementById("legend").innerText = document.getElementById("legend").innerText + " Değişiklikler Kaydedildi.";
    };
});