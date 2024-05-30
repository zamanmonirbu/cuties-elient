import { PostsData } from '../../Data/PostData';
import './Posts.css';
import Post from '../Post/Post';

const Posts = () => {
    return (
        <div className='posts'>
            {
                PostsData.map((post,id)=>{
                    return <Post post={post} key={id}/>
                })
            }
        </div>
    );
};

export default Posts;