import logo from './logo.svg';
import './App.css';
import React from 'react';
import LeftNavBar from './components/includes/LeftNavBar';
import Header from './components/includes/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return <Router>
    <Container>
      <LeftNavBar/>
      <Wrapper>
        <Header/>
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
