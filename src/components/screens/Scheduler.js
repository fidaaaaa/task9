import React from 'react';
import '../../App.css'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import Slider from "react-slick";
import {NavLink, Outlet} from 'react-router-dom'
import CheckGreen from '../Assets/Images/tickGreen.svg';
import CheckGrey from '../Assets/Images/tickGray.svg';

function Scheduler() {
  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };



  return (
    <div>
    <Helmet>
      <title>Scheduler</title>
    </Helmet>
    <SectionSpotlight>
      <SectionWrapper>
        <Arrowflex>
          <H2>New Lessons Board</H2>
          <Arrows>
            <Arrowleft>
              <ArrowImg src={require("../Assets/Images/leftarrow.png")}/>
            </Arrowleft>
            <Arrowright>
              <ArrowImg src={require("../Assets/Images/rightarrow.png")}/>
            </Arrowright>
          </Arrows>
        </Arrowflex>

        <Slider {...settings}>

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
              <Image2 src={require("../Assets/Images/Rectangle 20693.jpg")}/>
            </DivImgContainer>
            <H3>Mechanics in Physics</H3>
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
                <TimeDate>3 days ago
                </TimeDate>
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
              <Image src={require("../Assets/Images/Rectangle 4.jpg")}/>
            </DivImgContainer>
            <H3>Basic Chemistry lll</H3>
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

        </Slider>

        <DivBottom>
          <SectionLeft>
            <H>Assignment Manager</H>
              <Ul>
                <Li>
                  <LinkNav className={({ isActive }) => isActive ? "hover" : ""} to="pending">Pending</LinkNav>
                </Li>
                <Li>
                  <LinkNav className={({ isActive }) => isActive ? "hover" : ""} to="completed">Completed</LinkNav>
                </Li>
                <Li>
                  <LinkNav className={({ isActive }) => isActive ? "hover" : ""} to="submitted">Submitted</LinkNav>
                </Li>
              </Ul>
            <SectionRouter>
              <Outlet/>
            </SectionRouter>
          </SectionLeft>

          <SectionRight>
            <Live>
              <LiveSession>Live Session</LiveSession> <GreenCircle></GreenCircle>
            </Live>
            <SectionContent>
            <Lecture>Ongoing Lecture</Lecture>
            <Hr/>
            <SectionPadding>
            <CenterFlex>
              <Left>
                <ForceMomentum>Force and Momentum revision</ForceMomentum>
                <Prof><Blue>Physics</Blue>Prof Lee Dan Qi</Prof>
              </Left>
              <Right>
                <ButtonFlex>
                  <DivPlay>
                    <Playbutton src={require("../Assets/Images/playbutton.png")}/>
                  </DivPlay>
                  <Join>join</Join>
                </ButtonFlex>
              </Right>
            </CenterFlex>
            <Hr/>
            <Level>
              <Line>
                <CheckGreenContainer>
                  <CheckGreenImage src={CheckGreen} alt="Image"/>
                </CheckGreenContainer>
                <SIUnits>Force and unit</SIUnits>
                <Time><B>03:40</B>min</Time>
                <Buttonbggrey>Medium</Buttonbggrey>
              </Line>

              <Line>
                <CheckGreyContainer>
                  <CheckGreyImage src={CheckGrey}alt="Image"/>
                </CheckGreyContainer>
                <SIUnits>Mass and acceleration</SIUnits>
                <Time><B>06:08</B>min</Time>
                <Buttonbgdarkgrey>Hard</Buttonbgdarkgrey>
              </Line>

              <Line>
                <CheckGreyContainer>
                  <CheckGreyImage src={CheckGrey} alt="Image"/>
                </CheckGreyContainer>
                <SIUnits>Gain of Momentum</SIUnits>
                <Time><B>09:30</B>min</Time>
                <Buttonbggrey>Medium</Buttonbggrey>
              </Line>
            </Level>
            </SectionPadding>
          </SectionContent>
          </SectionRight>
          
        </DivBottom>
      </SectionWrapper>
    </SectionSpotlight>
  </div>
  )
}

const SectionSpotlight = styled.section`
  height: 100vh;
`;
const SectionWrapper = styled.section`
  width: 91%;
  margin: 0 auto;
`;
const Arrowflex = styled.div`
	display:flex;
	justify-content: space-between;
	align-items: center;
`;
const Arrows = styled.div`
	display:flex;
  justify-content: space-between;
  width: 8%;
`;
const Arrowleft = styled.span`
  width: 33%;
`;
const Arrowright = styled.span`
  width: 35%;
`;
const ArrowImg = styled.img`
	width: 100%;
	display: block;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 32px;
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
  height: 199.09px;
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
const DivBottom = styled.div`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;

`;
const SectionLeft = styled.section`
  width: 48%;
`;
const H = styled.h3`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 24px;
`
const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 32px;
  list-style: none;
`;
const Li = styled.li``;
const SectionRouter = styled.section`
  
`;
const LinkNav = styled(NavLink)`
  color: #9E9696;
  font-weight: 700;
  font-size: 14px
`;

const SectionRight = styled.section`
  width: 48%;
  /* margin-bottom: 5%; */
 `;
const Live = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 27%;
  margin-bottom: -20px;
`;
const LiveSession = styled.h3`
  font-weight: 700;
  font-size: 20px;
`;
const GreenCircle = styled.div`
  Width: 16px;
  height: 10px;
  border-radius: 50%;
  background: #59F195;
`;
const SectionContent = styled.section`
  box-shadow: 0 3px 60px 3px #d6cdcdc9;
`;
const SectionPadding = styled.section`
padding: 17px;
`
;
const Lecture = styled.h4`
  font-weight: 700;
  font-size: 17px;
  padding: 9px 0 0px 18px;
`;
const Hr = styled.hr`
  border-bottom: 1px solid #9E9696;
`;
const CenterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;
const Left = styled.div`
  margin-bottom: 28px;
`;
const ForceMomentum = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 5px;
`;
const Prof = styled.span`
  font-size: 14px;
`;
const Blue = styled.span`
  color: #5C75FB;
  margin-right: 6px
`;
const Right = styled.div`
`;  
const ButtonFlex = styled.div`
  display: flex;
  border-radius: 4px;
  margin-top: 3px;
`;
const DivPlay = styled.div`
  background: #1C40FA;
  width: 26%;
  padding: 4px;
  border-radius: 4px 0 0 4px;
`;
const Playbutton = styled.img`
  width: 100%;
  display: block;
`;
const Join = styled.button`
  background: #5C75FB;
  width: 55%;
  padding: 12px 8px;
  border-radius: 0 4px  4px 0;
  color: #fff;
  font-size: 16px;
  border-style: none;
`;
const Level = styled.section`
    margin-bottom: -22px;
    padding:21px 30px ;
`;
const Line = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 22px; */
`;
const CheckGreenContainer = styled.div``;
const CheckGreenImage = styled.img`
  width: 100%;
  display: block;
`;
const SIUnits = styled.p`
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  width: 30%;
`;
const B = styled.b`
  font-weight: 600;
  color: #000;
`
const Time = styled.span`
  font-size: 15px;
  color: #9E9696;
  width: 22%;
`;
const Buttonbggrey = styled.button`
  padding: 11px 20px;
  background: #c9c9c9;
  border-radius: 7px;
  border-style: none;
`;
const CheckGreyContainer = styled.div``;
const CheckGreyImage = styled.img``;
const Buttonbgdarkgrey = styled.button`
padding: 11px 30px;
background: #9E9696;
border-radius: 7px;
border-style: none;
`;

export default Scheduler