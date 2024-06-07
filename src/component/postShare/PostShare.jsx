import './PostShare.css';
import profile from '../img/profileImg.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { GrSchedule } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { FaPlayCircle } from "react-icons/fa";
import { useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../Services/actions/uploadAction';

const PostShare = () => {
    const [image, setImage] = useState('');
    const { user } = useSelector((state) => state.authReducer.authData);
    const desc = useRef();
    const imgRef = useRef();
    const dispatch=useDispatch();

    const onImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const img = event.target.files[0];
            setImage(img);
        }
    };

    const handleShare = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        };
        if (image) {
            const data = new FormData();
            const fileName = Date.now() + image.name;
            data.append("name", fileName);
            data.append("file", image);
            newPost.image = fileName;
        }
        console.log(newPost); // Ensure this log is capturing the right data
        try {
            dispatch(uploadImage(newPost))
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="postShare">
            <img src={profile} alt="" />
            <div>
                <input type="text" placeholder="What's happing" ref={desc} required />
                <div className="postOptions">
                    <div className="option" style={{ color: "var(--photo)" }} onClick={() => imgRef.current.click()}>
                        <GrGallery />
                        Photo
                    </div>
                    <div className="option" style={{ color: "var(--video)" }}>
                        <FaPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{ color: "var(--location)" }}>
                        <FaLocationDot />
                        Location
                    </div>
                    <div className="option" style={{ color: "var(--schedule)" }}>
                        <GrSchedule />
                        Schedule
                    </div>
                    <button className='button ps-button' onClick={handleShare}>
                        Share
                    </button>
                    <div style={{ display: "none" }}>
                        <input type="file" name="myImage" ref={imgRef} onChange={onImgChange} />
                    </div>
                </div>
                {image && (
                    <div className="imgPreview">
                        <RxCross2 onClick={() => setImage(null)} />
                        <img src={URL.createObjectURL(image)} alt="selected image" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostShare;
