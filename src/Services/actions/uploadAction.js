import {UploadImage} from '../api/UploadRequest.js'
export const uploadImage=(data)=>async(dispatch)=>{
    try {
        await UploadImage(data)
    } catch (error) {
        console.log(error)
    }
}