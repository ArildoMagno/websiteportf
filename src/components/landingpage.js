import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Texttipical from './texttipical.js';
import AnimationLandingpage from './animationLandingpage'

class Landing extends React.Component {
    render() {
        return (

       
              
                <Grid className="landing-grid">
                    <Cell col={12}>

                    <AnimationLandingpage />

                        <div className="banner-text">

                            <Texttipical 
                            text="Front-end  Developer"
                            size="h1"
                            />
                            <hr />
                            <p>HTML/CSS | Bootstrap | JavaScript | React </p>

                            <div className="social-links">

                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/arildo-magno-3a34a785" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>


                                {/*GitHub*/}
                                <a href="https://github.com/ArildoMagno" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>

                </Grid>

        );
    }
}

export default Landing;