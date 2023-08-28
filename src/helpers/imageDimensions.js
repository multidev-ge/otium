export default function imageDimensions(imagePath) {
    const img = new Image();
    img.src = imagePath;

    return new Promise((resolve, reject) => {
        img.onload = () => resolve({planWidth: img.naturalWidth, planHeight: img.naturalHeight});
        img.onerror = error => reject(error);
    });
};