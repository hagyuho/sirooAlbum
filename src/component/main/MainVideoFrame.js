import React from 'react';

const MainVideoFrame = () => {
    return (
        <div>
            <video width="100%" height="400px" autoPlay loop muted controls>
                <source src ="media/icecreamSiroo.mp4" type="video/mp4"></source>
            </video>
        </div>
    );
};

export default MainVideoFrame;