 import { useState, useEffect } from 'react';
 import youtube from '../apis/youtube';

 //setSelectedVideo(response.data.items[0]);

 const useVideos = (defaultSearchTerm) => {
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
    });

    setVideos(response.data.items);
     };
    //or we could return an object that has props of videos and search (the parts that could be reused)
    return [ videos, search ];
 };

 export default useVideos;