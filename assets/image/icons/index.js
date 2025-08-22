const images = {};
const requireContext = require.context('@img/icons',false,/\.(png|svg|jpg|jpeg|gif|webp)$/i);
requireContext.keys().forEach(img=>{
    var key = img.replace(/(\.\/|(\.\.\/))/,"").replace(/\.\w+$/,"");
    images[key] = requireContext(img);
});
export default images;