import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Animationpic from './animationPic'
import Texttipical from './texttipical.js';
class Contact extends React.Component {


    render() {
        return (

            <div className="contact-body" style={{ width: '100%', margin: 'auto', maxWidth: '100%', height: '100%' }}>


                <Grid className="contact-grid">
                    <Cell col={4}>
                    <Texttipical 
                            text="Arildo Magno"
                            size="h2"
                            />
                      
                        <hr style={{width:'100%'}}/>
                        <Animationpic />


                        <p>
                            Graduating in Computer Science at the Instituto Federal de Minas Gerais (IFMG)<br />
                            Having main focuses as Desktop and Web development.
                        </p>
                    </Cell>

                    <Cell col={8}>
                        <div className="contact-list" style={{ width: '100%', margin: 'auto', maxWidth: '100%', height: 'auto' }}>
                          
                            <List>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Alata' }}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />arildodraix@gmail.com (Email)

                                </ListItemContent>
                                </ListItem>



                                <ListItem>
                                    <ListItemContent style={{ fontSize: '15px', fontFamily: 'Alata', }}>
                                        <i className="fa fa-whatsapp" aria-hidden="true" />
                                        (55) 37 99816-1851 (Whats-app)
                                    </ListItemContent>
                                </ListItem>


                             



                            </List>
                         


                        </div>


                        <div className="maps" >

                        </div>
                    </Cell>
                </Grid>

            </div>

        );

    }
}

export default Contact;