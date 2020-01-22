import React, { Component } from 'react'
import Typical from 'react-typical'

class Texttipical extends React.Component {
    
   
 
    render() {
        return (
            <Typical
                steps={['', 500, this.props.text, 2000]}
                loop={Infinity}
                wrapper={this.props.size}
            
            />
        )
    }
}

export default Texttipical;