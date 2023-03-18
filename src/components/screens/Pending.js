import React , {useState}from 'react';
import '../../App.css';
import styled from 'styled-components';

function Pending() {
  return (
    <>
    <DivMain>
        <DivFlex>
            <DivLeft>
                <Flex>
                    <H4>Basic Physics lll</H4>
                    <DivLoading>
                        <SpanDarkBlue></SpanDarkBlue>
                    </DivLoading>
                </Flex>
                <Due>Final assessment | Due 14th March 2020</Due>
            </DivLeft>
            <DivRight>
                <Resume>Resume</Resume>
            </DivRight>
        </DivFlex>
        <DivFlex>
            <DivLeft>
                <Flex>
                    <H4>Mental Math l</H4>
                </Flex>
                <Due>Class test | Due Tomorrow</Due>
            </DivLeft>
            <DivRight>
                <Start>Start</Start>
            </DivRight>
        </DivFlex>
    </DivMain>
  </>
   
  )
}

const DivMain = styled.div``;
const DivFlex = styled.div``;
const DivLeft = styled.div``;
const Flex = styled.div``;
const H4 = styled.h4``;
const DivLoading = styled.div``;
const SpanDarkBlue = styled.div``;
const Due = styled.small``;
const DivRight = styled.div``;
const Resume = styled.button``;
const Start = styled.button``;

export default Pending