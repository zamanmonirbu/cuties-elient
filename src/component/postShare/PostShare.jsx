import './PostShare.css';
import profile from '../img/profileImg.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { FaPlayCircle } from "react-icons/fa";
import { useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const PostShare = () => {
    const [image,setImage]=useState('');
    const imgRef=useRef();
    const onImgChange=(event)=>{
        if(event.target.files&&event.target.files[0]){
            const img=event.target.files[0];
            setImage({
                image:URL.createObjectURL(img)
            })
        }
    }
    return (
        <div className="postShare">
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="What's happing" />
            
            <div className="postOptions">
                <div className="option" style={{ color:"var(--photo)"}} onClick={()=>imgRef.current.click()}>
                    <GrGallery/>
                    Photo
                </div>
                <div className="option" style={{ color:"var(--video)"}}>
                    <FaPlayCircle/>
                    Video
                </div>
                <div className="option" style={{ color:"var(--location)"}}>
                    <FaLocationDot/>
                    Location
                </div>
                <div className="option" style={{ color:"var(--shedule)"}}>
                   <GrSchedule/>
                   Schedule
                </div>
                <button className='button ps-button'>
                    Share 
                </button>
                <div style={{ display:"none"}}>
                    <input type="file" name="myImage" ref={imgRef} onChange={onImgChange}/>
                    
                </div>
            </div>
            {
                    image&&
                    <div className="imgPreview">
                        <RxCross2 onClick={()=>setImage(null)}/>
                        <img src={image.image} alt="selected image" />
                    </div>

                }
            </div>
        </div>
    );
};

export default PostShare;