import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education.js'
import Skills from './skills.js';



class Resume extends React.Component {
    render() {
        return (

            <div style={{width: '100%', margin: 'auto',maxWidth:'100%',height:'auto'}}>
                <Grid>
                    {/*LADO ESQUERDO */}
                    <Cell className="resume-left-col" col={4}>
                     
                        <div style={{ textAlign: 'center' }}>
                  
                            <h2 style={{ color: 'white', paddingTop: '1em' }}>Programmer</h2>
                          
                           
                           <div className="App">
                        <header className="App-header">
                        <img src={require('../logo.svg')} className="App-logo" alt="logo" style={{paddingTop:'3em'}}  />
                        
                     </header>
                     </div>
                      
                        </div>

                    </Cell>


                    {/*LADO DIREITO */}
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{ fontFamily: 'Alata', color: 'white',paddingBottom:'1em',color:'#3b8d99' }}>Education</h2>
                        <Education
                            firstLeftText='Instituto Federal de Minas Gerais (IFMG): 
                            2018 - In activity'
                            firstRigthText='
                            Focus on:
                            Computer programming,
                            Programming paradigms,
                            Algorithms,
                            Data structures,
                            Logic & Computation,
                            Computer architecture,
                            
                            Linear algebra,
                            Calculus,
                            Probability theory and statistics,
                            Combinatorics and discrete mathematics,
                            Differential calculus and mathematics.'

                            
                        />
                         <hr style={{ borderTop: '5px solid white', width: '100%' }} />
                        <h3 style={{ fontFamily: 'Alata', paddingTop: '1em', color: '#aa4b6b'}}>Extra Skills</h3>
                        <Skills
                            firstText='Java'
                            secondText='C'
                            threeText='R'
                            fourText='Python'
                            fiveText='JavaScript'
                        />
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Resume;