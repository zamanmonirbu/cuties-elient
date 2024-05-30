import FollowersCart from '../FollowersCart/FollowersCart';
import InfoCart from '../InfoCart/InfoCart';
import LogoSearch from '../LogoSearch/LogoSearch';

import'../ProfileSide/ProfileSide.css';

const ProfileLeft = () => {
    return (
        <div className="ProfileSide">
            <LogoSearch/>
            <InfoCart/>
            <FollowersCart/>
        </div>
    );
};

export default ProfileLeft;