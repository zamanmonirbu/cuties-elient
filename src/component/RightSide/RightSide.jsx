import './RightSide.css'
import Home from '../img/home.png';
import Notification from '../img/noti.png';
import Comment from '../img/comment.png';
import { IoMdSettings } from "react-icons/io";
import TrendCart from '../TrendCart/TrendCart';
import { useState } from 'react';
import ShareModals from '../ShareModals/ShareModals';

const RightSide = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="rightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <IoMdSettings/>
                <img src={Notification} alt="" />
                <img src={Comment} alt="" />
            </div>
            <TrendCart/>
            <button className='button r-button' onClick={() => setModalOpen(true)}>Share </button>
            <ShareModals opened={isModalOpen} setOpened={setModalOpen}/>
        </div>
    );
};

export default RightSide;