import './FollowersCart.css';
import {users} from '../UserData/UserData'

const FollowersCart = () => {
    return (
        <div className='followersCart'>
            <p>my followers</p>
            {
                users.map((data,index)=>{
                    return(
                        <div className="follower" key={index}>
                            <div>
                                <img src={data.img} alt="" className="followerImg"/>
                                <div className="name">
                                        <span>{data.name}</span>
                                        <span>@{data.userName}</span>
                                </div>
                            </div>
                            <button className='button btn-fc'>
                                    Follow
                                </button>

                        </div>
                        
                    )
                }
            )
            }
        </div>
    );
};

export default FollowersCart;