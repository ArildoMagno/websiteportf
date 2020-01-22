import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Animation extends Component {
    
    render() {
        return (
            <div>
                <ParticlesBg type="cobweb" bg={true} />
            </div>
        );
    }
}

export default Animation;
