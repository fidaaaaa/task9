import React from 'react';
import styled from 'styled-components';

function LeftNavBar() {
  return (
    <>
        <SectionMain>
            <SectionWrapper>
                <SectionTop>
                    <Logo>
                        <LogoImg/>
                    </Logo>
                </SectionTop>
                <SectionMiddle>
                    <Ul>
                        <Li>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </Li>
                        <Li>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </Li>
                        <Li>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </Li>
                        <Li>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </Li>
                        <Li>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </Li>
                        <LiLast>
                            <LeftLogoContainer>
                                <LeftLogoImage/>
                            </LeftLogoContainer>
                            <LinkNav></LinkNav>
                        </LiLast>
                    </Ul>
                </SectionMiddle>
                <SectionBottom>
                    <Div>
                        <NavImage/>
                    </Div>
                    <BuyPremium>Buy Premium</BuyPremium>
                    <LearnMore>Learn More</LearnMore>
                </SectionBottom>
            </SectionWrapper>
        </SectionMain>
    </>
    
  )
}

const SectionMain = styled.section``;
const SectionWrapper = styled.section``;
const SectionTop = styled.section``;
const Logo = styled.h1``;
const LogoImg = styled.img``;
const SectionMiddle = styled.section``;
const Ul = styled.ul``;
const Li = styled.li``;
const LiLast = styled.section``;
const LeftLogoContainer = styled.section``;
const LeftLogoImage = styled.img``;
const LinkNav = styled.section``;
const SectionBottom = styled.section``;
const Div = styled.div``;
const NavImage = styled.img``;
const BuyPremium = styled.button``;
const LearnMore = styled.(Link)``;







export default LeftNavBar