import React from 'react';
import '../../App.css'
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <SectionSpotlight>
        <SectionWrapper>
          <H1>Home</H1>
          <DivTop>
            <DivContent>
              <DivImgContainer>
                <Image src={require("../Assets/Images/Rectangle 4.jpg")}/>
              </DivImgContainer>
              <H3>Basic Chemistry lll</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/woman2.png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020</TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>

            <DivContent>
              <DivImgContainer>
                <Image2 src={require("../Assets/Images/Rectangle 20693.jpg")}/>
              </DivImgContainer>
              <H3>Mechanics in Physics</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/woman1.png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020</TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>

            <DivContent>
              <DivImgContainer>
                <Image3 src={require("../Assets/Images/Rectangle 20694.jpg")}/>
              </DivImgContainer>
              <H3>Focus on Words</H3>
              <P>This part of chemistry deals with atomic
                structure and molecular structure.
              </P>
              <SmallDiv>
                <Divround>
                  <ImageRound src={require("../Assets/Images/man.png")}/>
                </Divround>
                <DivRight>
                  <SpanName>By Prof Kenni</SpanName>
                  <TimeDate>8:30, 13th March 2020
                  </TimeDate>
                </DivRight>
              </SmallDiv>
            </DivContent>
          </DivTop>
        </SectionWrapper>
      </SectionSpotlight>
    </div>
  )
}
 
const SectionSpotlight = styled.section``;
const SectionWrapper = styled.section`
  width: 91%;
  margin: 0 auto;
`;
const H1 = styled.h1`
  font-size: 48px;
`;
const DivTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DivContent = styled.div`
  width: 32%;
  box-shadow: 0 3px 60px 3px #d6cdcdc9;
  padding-bottom: 30px;
`;
const DivImgContainer = styled.div`
`;
const Image = styled.img`
  width: 100%;
  display: block;
`;
const Image2 = styled.img`
  width: 100%;
  height: 199.09px;
  display: block;
`;
const Image3 = styled.img`
  width: 100%;
  height: 199.09px;
  display: block;
`;
const H3 = styled.h3`
  font-weight: 700;
  margin: 15px auto;
  width: 87%;
  font-size: 16px;  
`;
const P = styled.p`
  color: #9E9696;
  width: 87%;
  margin: 0 auto;
`;
const SmallDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 12px 0 0 20px;
`;
const Divround = styled.div`
  width: 26%;
`;
const ImageRound = styled.img`
  width: 100%;
  display: block;
`;
const DivRight = styled.div`
`;
const SpanName = styled.span`
  display: block;
  font-weight: 700;
  font-size: 14px;
  margin: 9px 0;
`;
const TimeDate = styled.span`
display: block;
color: #9E9696;
font-size: 14px;
`;


export default Home