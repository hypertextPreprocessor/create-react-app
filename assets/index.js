const imageContext = require.context("./image",true);
const videoContext = require.context("./video",true);

const images = {};
const videos = {};

imageContext.keys().forEach((key)=>{
    console.log(key);
    const name = key.replace('./','').replace(/\.\w+$/,'');
    images[name] = imageContext(key);
});

videoContext.keys().forEach((key)=>{
    const name = key.replace('./','').replace(/\.\w+$/,'');
    videos[name] = videoContext(key);
});

export {images,videos};