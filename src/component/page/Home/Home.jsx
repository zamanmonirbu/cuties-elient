import './Home.css'
import PostSide from '../../PostSide/PostSide';
import ProfileSide from '../../ProfileSide/ProfileSide';
import RightSide from '../../RightSide/RightSide';
const Home = () => {
    return (
        <div className="home">
            <ProfileSide/>
            <PostSide/>
            <RightSide/>
        </div>
    );
};

export default Home;