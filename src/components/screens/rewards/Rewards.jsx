import React from 'react'
import Sidebar from '../../Sidebar'
import styled from 'styled-components';


function Rewards() {
  return (
    <>
      <Container>
        <Sidebar />
        <h1>Coming Soon..</h1 >
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
export default Rewards