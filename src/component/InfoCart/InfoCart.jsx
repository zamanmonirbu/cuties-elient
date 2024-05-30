import { useState } from 'react';
import './InfoCart.css';
import { RiPencilFill } from "react-icons/ri";
import ProfileModals from '../ProfileModals/ProfileModals';

const InfoCart = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="infoCart">
            <div className="infoHead">
                <h4>Your Info</h4>
                <RiPencilFill onClick={() => setModalOpen(true)} />
                <ProfileModals opened={isModalOpen} setOpened={setModalOpen}/>
                
            </div>
            <div className="info">
                <span><b>Status: </b><span>In Relationship</span></span>
            </div>
            <div className="info">
                <span><b>Lives In: </b><span>Dhaka</span></span>
            </div>
            <div className="info">
                <span><b>Works at: </b><span>Google</span></span>
            </div>
            <button className="button logout-button">Logout</button>
        </div>
    );
};

export default InfoCart;
