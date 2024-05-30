import PropTypes from 'prop-types';
import './Post.css';
import Comment from '../img/comment.png';
import Share from '../img/share.png';
import Like from '../img/like.png';
import NotLike from '../img/notlike.png';


const Post = ({ post }) => {
    const { img, name, desc, likes, liked } = post;
    return (
        <div className='post'>
            <img src={img} alt="" />
            <div className="postReact">
                <img src={liked?Like:NotLike} alt="" />
                <img src={Comment} alt="" />
                <img src={Share} alt="" />             
            </div>
            <span style={{ color:"gray"}}>{likes} Person likes it</span>
            <div className="details">
                <span><b>{name}</b></span>
                <span>{ desc}</span>
            </div>
        </div>
    );
};

export default Post;
