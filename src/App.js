import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Content, Navigation } from 'react-mdl';
import Main from './components/main';
import { HashRouter,Link } from 'react-router-dom';
import Clock from './components/clock';



function App() {

  return (
    <div className="demo-big-content">
      
      <Layout>
     
        <Header className="header-color" title={<Clock />} scroll>
     
          <Navigation>

            <Link to="/websiteportf/">Home</Link>
            <Link to="/websiteportf/resume">Resume</Link>
            <Link to="/websiteportf/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title={<Clock />}>
          <Navigation>
            <Link to="/websiteportf/">Home</Link>
            <Link to="/websiteportf/resume">Resume</Link>
            <Link to="/websiteportf/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
