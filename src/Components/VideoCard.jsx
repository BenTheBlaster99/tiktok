import React from 'react';

function VideoCard({video}) {
    return (
        <div style={styles.card}>
            <video src={video.url} conteols style={styles.vide}/>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
        </div> 
    );
}
const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        width: '400px',
    },
    video: {
        width: '100%',
    },
};
export default VideoCard;