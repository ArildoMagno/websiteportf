import React from 'react';
import { render } from 'react-dom';
import { withBounce, withShake, Bounce, Jello, withTadaInfinite } from 'react-motions'



const Component = () => (
    <div className='poster'>
        
        <img src={require('../mePic-circle-cropped.png')}
            style={{
                width: '90%', maxWidth: '100%', height: 'auto',paddingTop:'10%'
            }}
        />
    </div>
);


class Animationpic extends React.Component {
    render() {
        return (
            <Bounce duration={2}><Component/></Bounce>
        );
    }
}


export default Animationpic;