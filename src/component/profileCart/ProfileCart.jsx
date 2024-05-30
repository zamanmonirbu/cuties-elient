import cover from '../img/cover.jpg';
import profile from '../img/profileImg.jpg'
import './ProfileCart.css'

const ProfileCart = () => {
    const profileCart=true;
    return (
        <div className="profileCart">
            <div className="profileImage">
                <img src={cover} alt="" />
                <img src={profile} alt="" />
            </div>
            <div className="profileName">
                <span>Jenny Mariya</span>
                <span>Senior web Developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,565 </span>
                        <span>Following</span>
                    </div>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>1 </span>
                        <span>Followers</span>
                    </div>
                    {
                profileCart && (
                    <>
                        <div className="vl">

                        </div>
                        <div className="follow">
                            <span>
                                3
                            </span>
                            <span>Posts</span>
                        </div>
                    </>
                )
            }
            </div>
            <hr />
                </div>
            

            {
                profileCart?"":<span>My Profile</span>
            }
            

        </div>
    );
};

export default ProfileCart;