import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';

class Skills extends React.Component {
    render() {
        return (
            <List>
                <ListItem>
                    <ListItemContent icon="" style={{ color: 'white', fontFamily: 'Alata' }}>{this.props.firstText}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="" style={{ color: 'white', fontFamily: 'Alata' }}>{this.props.secondText}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="" style={{ color: 'white', fontFamily: 'Alata' }}>{this.props.threeText}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="" style={{ color: 'white', fontFamily: 'Alata' }}>{this.props.fourText}</ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemContent icon="" style={{ color: 'white', fontFamily: 'Alata' }}>{this.props.fiveText}</ListItemContent>
                </ListItem>
            </List>
        );
    }
}

export default Skills;