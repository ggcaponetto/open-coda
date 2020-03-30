import qs from "qs";

const getCallbackName = () => {
  let scripts = Array.from(document.getElementsByTagName('script'));
  let myScriptProd = scripts.filter(script => script.src.includes(`dist/tools/video-capture/video-capture.min.js`))[0];
  let myScriptDebug = scripts.filter(script => script.src.includes(`dist/tools/video-capture/video-capture.js`))[0];
  let myScript = myScriptProd || myScriptDebug;
  let src = myScript.src;
  let url = new URL(src);
  let queryString = qs.parse(url.search.substr(1, url.search.length));
  console.log(`getCallbackName - url is`, {scripts, window: window, src, url, queryString});
  return queryString.callback;
};

const runCallback = () => {
  console.log(`runCallback`);
  window.onload = function(){
    let callbackName = getCallbackName();
    let paths = callbackName.split(".");
    window[`${paths[0]}`][`${paths[1]}`]();
  }
}

runCallback()
