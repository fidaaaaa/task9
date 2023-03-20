import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
    <HeaderSection>
      <Div>
        <Ul>
          <FirstLi>
              <ImageContainer>
                <Img  src={require('../Assets/Images/man.png')} alt="Image"/>
              </ImageContainer>
          </FirstLi>
          <Li>
              <ImageContainer>
                <Img src={require('../Assets/Images/setting.png')} alt="Image"/>
              </ImageContainer>
          </Li>
          <Li>
              <ImageContainer>
                <Img src={require('../Assets/Images/bell5.png')} alt="Image"/>
              </ImageContainer>
          </Li>
        </Ul>
      </Div>
    </HeaderSection>
   
   
   
   </>
  )
}
const HeaderSection = styled.header`
    height: 60px;
   display: flex;
   align-items: center;
`;
const Div = styled.div`
    width:95%;
    margin: 0 auto;

`;
const Ul = styled.ul`
    display: flex;
    flex-direction: row-reverse;
    list-style: none;
`;
const Li  = styled.li`
    margin-right:20px;
`;
const FirstLi = styled.li`
    margin-right: 0;
`;
const ImageContainer  = styled.div`
width: 30px;
`;
const Img  = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
 `;

export default Header 

