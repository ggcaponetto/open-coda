import qs from "qs";
import * as cocoSsd from "@tensorflow-models/coco-ssd/dist/coco-ssd";
import styles from './video-capture.module.css';

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

const detect = async (imageElement) => {
  console.log('detect', {cocoSsd, window});
  // Load the model.
  const model = await cocoSsd.load();
  // Classify the image.
  const predictions = await model.detect(imageElement);
  console.log('detect - prediction: ', predictions);
}

const detectFromVideo = async (videoElement, canvasElement) => {
  console.log('detectFromVideo', {cocoSsd, window});
  const renderPredictions = (predictions, canvasElement) => {
    const ctx = canvasElement.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = "#00FFFF";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = "#00FFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  };
  // Load the model.
  const model = await cocoSsd.load();
  // Classify the image.
  const detectFrame = async () => {
    await model.detect(videoElement).then(predictions => {
      console.log('detectFromVideo - prediction: ', predictions);
      renderPredictions(predictions, canvasElement);
      requestAnimationFrame(async () => {
         await detectFrame(videoElement, model);
      });
    });
  }
  await detectFrame(videoElement, canvasElement);
}

const runCallback = () => {
  console.log(`runCallback`);
  window.onload = function(){
    let callbackName = getCallbackName();
    let paths = callbackName.split(".");
    window[`${paths[0]}`] = {
      ...window[`${paths[0]}`],
      detect,
      detectFromVideo,
      styles
    }
    window[`${paths[0]}`][`${paths[1]}`]();
  }
}

runCallback()
