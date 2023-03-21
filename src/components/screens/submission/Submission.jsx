import React from 'react'
import Sidebar from '../../Sidebar'
import styled from 'styled-components';

function Submission() {
  return (
  <>
    <Container>
      <Sidebar />
      <h1>Coming soon...</h1 >
    </Container>
  </>
    )
  }
const Container = styled.div`
  display: flex;
`;
const Header = styled.div`
  width: 80%;
`;
export default Submission