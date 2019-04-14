const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('d69babe1-068f-4fbe-bb48-7bcb06c07f14');

var resp = await deepai.callStandardApi("image-similarity", {
        image1: "YOUR_IMAGE_URL",
        image2: "YOUR_IMAGE_URL",
});
console.log(resp);