
const imageUpload = document.getElementById('imageUpload')

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),

  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),


  faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
]).then(start)
function start(){
  const container =document.createElement('div')
  container.style.position='relative'
  document.body.append('loaded')
  imageUpload.addEventListener('change',async()=>{
    const image=await faceapi.bufferToImage(imageUpload.files[0])
    document.body.append(image)
    const canvas=faceapi.createCanvasFromMedia(image)

  })
}