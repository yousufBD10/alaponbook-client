import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import MediaCard from './MediaCard';

const Media = () => {
    const posts = useLoaderData();
    console.log(posts);
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                posts.map(post => <MediaCard post={post} key={post._id}></MediaCard>)
            }
        
        </div>
    );
};

export default Media;