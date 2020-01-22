import React from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends React.Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>{this.props.firstLeftText}</Cell>
                <Cell col={8} style={{ color: 'white', fontFamily: 'Alata'}}>{this.props.firstRigthText}</Cell>
                
            </Grid>
        );
    }
}

export default Education;