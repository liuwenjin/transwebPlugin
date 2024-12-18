const manifest = chrome.runtime.getManifest();
let customParams = manifest.options_ui.customParams;
document.title = manifest.name;

let _callback = function(appName) {
    // 获取当前活动的标签页
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        const activeTab = tabs[0].id;
        // 发送消息到 content script
        chrome.tabs.sendMessage(activeTab, {
            appName: appName
        });
    });
}

let callback = function(btn, appName) {
    btn.setAttribute('disabled', true);
    _callback(appName);
    setTimeout(() => {
        btn.setAttribute('disabled', false);
    }, 30000)
}

let agentInit = function(arr) {
    let btnArea = document.querySelector(".buttonList");
    btnArea.innerHTML = "";
    for(let i = 0; i < arr.length; i++) {
        let button = document.createElement("button");
        button.innerHTML = arr[i].buttonLabel;
        button.addEventListener("click", (e) => {
            callback(e.target, arr[i].name);
        });
        btnArea.appendChild(button);
    }
}


if(customParams.agentList && customParams.agentList.length !== 0) {
   agentInit(customParams.agentList); 
}
else {
   document.getElementById("cardNotes").addEventListener("click", (e) => {
       callback(e.target, "cardNotes");
   });
   
   document.getElementById("knowledgeTree").addEventListener("click", (e) => {
       callback(e.target, "knowledgeTree");
   }); 
}

chrome.runtime.sendMessage({ action: 'getManifest' }, (response) => {
  if (response && response.manifest) {
    console.log('Manifest:', response.manifest);
  } else {
    console.error('Failed to get manifest');
  }
});


