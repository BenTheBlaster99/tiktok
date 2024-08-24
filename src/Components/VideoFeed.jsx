import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import {fetchVideos} from '../Components/VideoCard'
import VideoCard from "./VideoCard";

function VideoFeed() {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videoData.videos);
  useEffect(() => {
    const loadVideos = async () => {
      const fetchedVideos = await fetchedVideos();
      dispatch({ type: "SET_VIDEOS", payload: fetchedVideos });
    };
  }, [dispatch]);
  return (
    <div>
      <h1>Video feed</h1>
      <div style={styles.feed}>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}const styles = {
    feed: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default VideoFeed;
