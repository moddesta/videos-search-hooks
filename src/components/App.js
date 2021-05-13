import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';  
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos'; 

const App = () => {
        
        const [selectedVideo, setSelectedVideo] = useState(null);
        const [videos, search] = useVideos('kilimanjaro');

        // we call useEffect any time we get new list of videos (when we 
        // complete the search) we run setSelectedVideo and provide 1st video in the list
        useEffect(() => {
            setSelectedVideo(videos[0]);
        }, [videos]);
 
    

return (
    <div className="ui container">
        
        <SearchBar onFormSubmit={search}/> {/* when submiting the form - requesting for the data from api */}
         <div className="ui grid">
             <div className="ui row"> 
             <div className="eleven wide column">
             <VideoDetail video={selectedVideo} />  {/* passing only one video - selected one   */}
             </div>

             <div className="five wide column">
             {/* passing list of videos */}
             <VideoList 
             videos={videos} 
             onVideoSelect={setSelectedVideo} /* onVideoSelect={video => setSelectedVideo(video)} */
             />
             </div>
             </div>
        </div>

   </div>
    );
};


export default App;