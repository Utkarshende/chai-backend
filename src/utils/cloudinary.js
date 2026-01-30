import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'//file system

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath)=>{
    try{
if (!localFilePath) return null
//upload file on cloudinary
const response = await cloudinary.uploader.upload(localFilePath,{
    resource_type:"auto"
})
//file has been uploaded successfully
console.log("FIle is uploaded on cloudinary",
    response.url);
    return response;
    }catch(error){
fs.unlinkSync(localFilePath)//remove the locally saved temperory file as the upload operaton got failde
return null
    }
}

cloudinary.v2.uploader
.upload("dog.mp4", {
  resource_type: "video", 
  public_id: "my_dog",
  overwrite: true, 
  notification_url: "https://mysite.example.com/notify_endpoint"})
.then(result=>console.log(result));