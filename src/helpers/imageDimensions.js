export default async function imageDimensions(imagePath) {
    // console.log('imagepath',imagePath)
    const img = new Image()
    img.src = imagePath

    return new Promise((resolve, reject) => {
        img.onload = () => resolve({planWidth: img.naturalWidth, planHeight: img.naturalHeight})
        img.onerror = error => reject(error)
    })
}