import ProfileLeft from '../../ProfileLeft/ProfileLeft';
import './Profile.css';
import ProfileCart from '../../profileCart/ProfileCart';
import PostSide from '../../PostSide/PostSide';
import RightSide from '../../RightSide/RightSide';

const Profile = () => {
    return (
        <div className="profile">
            <ProfileLeft/>
            <div className="profile-center">
                <ProfileCart/>
                <PostSide/>
                
            </div>
            <RightSide/>
        </div>
    );
};

export default Profile;