import React from 'react';

class Video1 extends React.Component {
    render() {
        return (
            <div class="embed-responsive embed-responsive-21by9">
                <iframe class="embed-responsive-item" src="./video.mp4" title="1" allowfullscreen></iframe>
            </div>
        )
    }
}

export default Video1;