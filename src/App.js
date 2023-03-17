import logo from './logo.svg';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import LeftNavBar from './components/includes/LeftNavBar';
import Header from './components/includes/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/screens/Home';
import Scheduler from './components/screens/Scheduler';
import Technology from './components/screens/Technology';
import Submission from './components/screens/Submission';
import Rewards from './components/screens/Rewards';
import Notes from './components/screens/Notes';
import Pending from './components/screens/Pending';
import Completed from './components/screens/Completed';
import Submitted from './components/screens/Submitted';

function App() {
  return <Router>
    <Container>
      <LeftNavBar/>
      <Wrapper>
        <Header/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="scheduler" element= {<Scheduler/>}>
          <Route index element={<Pending/>}/>
            <Route path="pending" element={<Pending/>}/>
            <Route path="completed" element={<Completed/>}/>
            <Route path="submitted" element={<Submitted/>}/>
          </Route>
          <Route path="technology" element= {<Technology/>} />
          <Route path="submission" element= {<Submission/>} />
          <Route path="rewards" element= {<Rewards/>} />
          <Route path="notes" element= {<Notes/>} />
        </Routes>
      </Wrapper>
    </Container>
  </Router>
   
      
      
    
    
  
  
}
const Container = styled.section`
    display: flex;
    align-items: start;
    justify-content: space-between;
`;
const Wrapper = styled.div`
    width: 83%;
`;


export default App;
