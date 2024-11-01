var aiPluginTool = {};
aiPluginTool.attachAiService = function (elem, url, btnText, callback, style) {
  let switchIcon = {
      show: '<svg style="display: inline-block; vertical-align: middle;" t="1730429381179" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8630" width="10" height="10"><path d="M317.724444 519.774815L157.392593 682.192593c-7.016296 7.111111-18.962963 2.085926-18.962963-7.964445V349.487407c0-10.05037 11.946667-15.075556 18.962963-7.964444l160.237037 162.322963c4.361481 4.456296 4.361481 11.567407 0.094814 15.928889zM885.096296 239.691852H171.899259c-11.757037 0-21.333333-9.576296-21.333333-21.333333s9.576296-21.333333 21.333333-21.333334h713.102222c11.757037 0 21.333333 9.576296 21.333334 21.333334s-9.481481 21.333333-21.238519 21.333333zM885.096296 435.38963H472.841481c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h412.254815c11.757037 0 21.333333 9.576296 21.333334 21.333333s-9.576296 21.333333-21.333334 21.333334zM885.096296 630.992593H472.841481c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h412.254815c11.757037 0 21.333333 9.576296 21.333334 21.333333s-9.576296 21.333333-21.333334 21.333334zM885.096296 826.595556H171.899259c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h713.102222c11.757037 0 21.333333 9.576296 21.333334 21.333333s-9.481481 21.333333-21.238519 21.333334z" p-id="8631" fill="#ffffff"></path></svg>',
      hide: '<svg style="display: inline-block; vertical-align: middle;" t="1730429426585" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8813" width="10" height="10"><path d="M132.171852 519.774815l160.237037 162.322963c7.016296 7.111111 18.962963 2.085926 18.962963-7.964445V349.487407c0-10.05037-11.946667-15.075556-18.962963-7.964444l-160.237037 162.322963c-4.361481 4.456296-4.361481 11.567407 0 15.928889zM875.614815 239.691852H162.417778c-11.757037 0-21.333333-9.576296-21.333334-21.333333s9.576296-21.333333 21.333334-21.333334h713.102222c11.757037 0 21.333333 9.576296 21.333333 21.333334s-9.481481 21.333333-21.238518 21.333333zM875.614815 435.38963H463.36c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h412.254815c11.757037 0 21.333333 9.576296 21.333333 21.333333s-9.576296 21.333333-21.333333 21.333334zM875.614815 630.992593H463.36c-11.757037 0-21.333333-9.576296-21.333333-21.333334s9.576296-21.333333 21.333333-21.333333h412.254815c11.757037 0 21.333333 9.576296 21.333333 21.333333s-9.576296 21.333333-21.333333 21.333334zM875.614815 826.595556H162.417778c-11.757037 0-21.333333-9.576296-21.333334-21.333334s9.576296-21.333333 21.333334-21.333333h713.102222c11.757037 0 21.333333 9.576296 21.333333 21.333333s-9.481481 21.333333-21.238518 21.333334z" p-id="8814" fill="#ffffff"></path></svg>'
  };
  let switchStyle = "cursor: pointer; float: right; margin-top: 5px; margin-right: 9px; display: flex; justify-content: center; align-items: center; text-align: center; border-radius: 100%; width: 20px; height: 20px; background-color: #222;"
  aiPluginTool.attachLabel(elem, `<button class="aiPluginBtn" style="border: solid 1px #ddd; cursor: pointer; border-radius: 5px; padding: 4px 10px; width: 111px; font-size: 14px; background-color: #333; color: #fff;"> ${btnText || 'Transweb'} </button><span class="switchBtnItem" style="${switchStyle}">${switchIcon.hide}</span>`, {
    minWidth: "140px"
  }, {
    parent: document.body
  }, true);
  let btnItem = elem.querySelector("._label_box");
  this.attachAttribute(style, btnItem.style);
  document.body.style.minHeight = "100%";
  document.body.style.minWidth = "100%";
  document.body.style.backgroundColor = "#fff";
  let iframe = document.createElement('iframe');
  iframe.src = url; // 替换为你要显示的 URL
  iframe.style.width = '100%'; // 设置宽度
  iframe.style.height = '100%'; // 设置高度
  iframe.style.border = 'none'; // 去掉边框
  iframe.style.position = 'fixed';
  iframe.style.left = '0px';
  iframe.style.top = '0px';
  iframe.style.zIndex = -1000;
  iframe.style.left = "-9999px";
  // 将 iframe 添加到 body
  document.body.appendChild(iframe);

  let _self = this;
  elem.querySelector("._label_box button").onclick = function () {
    let d = {};
    if (typeof callback) {
      d = callback();
    }
    _self.activateTask(iframe, d);
  }

  elem.querySelector("._label_box .switchBtnItem").setAttribute("title", "点击可隐藏按钮");

  elem.querySelector("._label_box .switchBtnItem").onclick = function() {
    if(elem.querySelector("._label_box button").style.display !== "none") {
        elem.querySelector("._label_box button").style.display = "none"; 
        this.innerHTML = switchIcon.show;
        this.setAttribute("title", "点击可展开按钮");
    }
    else {
        elem.querySelector("._label_box button").style.display = "inline-block";  
        this.innerHTML = switchIcon.hide;
        this.setAttribute("title", "点击可隐藏按钮");
    }
  }

  this.listenMessage((tData) => {
    if (tData.data.value === "dismissCurrentService") {
      _self.dismissAiService(iframe);
    }
  }, "*");

  return iframe;
}

aiPluginTool.activateTask = function (iframe, obj) {
  iframe.style.zIndex = 9999999;
  iframe.style.left = "0px";
  if(!this.isTransforming) {
    iframe.contentWindow.postMessage(obj, '*');  
    this.isTransforming = true;
  }
}

aiPluginTool.dismissAiService = function (iframe) {
  iframe.style.zIndex = -1000;
  iframe.style.left = "-9999px";
}

aiPluginTool.attachAttribute = function (obj, subObj) {
  if (!obj || !subObj) {
    return false;
  }
  for (var k in obj) {
    if (obj[k] && obj[k].constructor.name === "Object") {
      subObj[k] = subObj[k] || {};
      this.attachAttribute(obj[k], subObj[k]);
    } else {
      subObj[k] = obj[k];
    }
  }
  return subObj;
}

aiPluginTool.listenMessage = function (callback, origin) {
  var tCallback = function (message) {
    if (!origin || origin === message.origin || origin === "*") {
      callback(message);
    }
  };
  if (window.addEventListener) {
    window.removeEventListener('message', tCallback);
    window.addEventListener('message', tCallback, false)
  } else {
    window.detachEvent("onmessage", tCallback);
    window.attachEvent('onmessage', tCallback);
  }
}

aiPluginTool.attachLabel = function (elem, html, style, _params, flag) {
  elem = elem || document.querySelector(".CardItem") || document.body;
  _params = _params || {}

  let rElem = _params.parent || document.body;
  if (flag) {
    rElem = elem;
    let p = window.getComputedStyle(rElem)["position"];
    if (p === "static") {
      rElem.style.position = "relative";
    }
  }

  style = style || {
    height: "30px",
    lineHeight: "30px",
    display: "inline-block",
    minWidth: "40px"
  };

  if (elem !== rElem) {
    let root = rElem.getBoundingClientRect();
    let tBox = root;
    if (elem) {
      tBox = elem.getBoundingClientRect();
    }
    let gapX = tBox.x - root.x;
    let gapY = tBox.y - root.y;
    style.marginLeft = gapX + "px";
    style.marginTop = gapY + "px";
  }

  var box = document.createElement("div");
  box.setAttribute("class", "_label_box");
  box.style.width = "0px";
  box.style.height = "0px";
  box.style.top = "0px";
  box.style.left = "0px";
  rElem.prepend(box);

  var content = document.createElement("div");
  // content.innerHTML = ;
  let tContent = document.createElement("div");
  tContent.innerHTML = html;
  content.appendChild(tContent);
  // tContent.style.backgroundColor = "rgba(245, 245, 245, 0.8)";
  style = style || {};
  this.attachAttribute(style, tContent.style);
  if (_params && _params.animation) {
    tContent.setAttribute("class", `animate__animated animate__${_params.animation} animate__infinite`);
  }

  box.appendChild(content);

  box.style.position = "absolute";
  if(elem === document.body) {
     box.style.position = "fixed"; 
  }
  box.style.zIndex = style.zIndex || 999999;
  content.style.position = "relative";
  box.style.display = "inline-block";
  content.style.display = "inline-block";
  content.style.top = 0;
  content.style.left = 0;

  if (elem !== rElem) {
    let x = Math.max(rElem.getBoundingClientRect().left - content.getBoundingClientRect().left, 0)
    box.style.left = x + "px";
    let y = Math.max(rElem.getBoundingClientRect().top - content.getBoundingClientRect().top, 0);
    box.style.top = y + "px";
  }

  if (_params.duration) {
    setTimeout(function () {
      rElem.removeChild(box);
    }, _params.duration * 1000);
  }

  return content;
}