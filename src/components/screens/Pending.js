import React , {useState}from 'react';
import '../../App.css';
import styled from 'styled-components';

function Pending() {

    const [state , setState] = useState(false);
    const toggle=() =>{
        setState(!state);
    }
    

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
                <Resume onClick={toggle} className={'tooggle--button ' + (state ? 'toggle--close ':'')}>
                    {state ? 'Start':'Resume'}
                    </Resume>
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
                <Start onClick={toggle} className={'tooggle--pause ' + (state ? 'toggle--start ':'')}>
                    {state ? 'Pause':'Start'}
                    </Start>
            </DivRight>
        </DivFlex>
    </DivMain>
  </>
   
  )
}

const DivMain = styled.div`
    box-shadow: 0 3px 60px 3px #d6cdcdc9;
    padding: 55px 36px 20px;
`;
const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
`;
const DivLeft = styled.div`
    width:70%;
`;
const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin-bottom: 22px;
`;
const H4 = styled.h4`
    font-size: 14px;
    font-weight: 700;
    width: 45%;
`;
const DivLoading = styled.div`
    width: 45%;
    height: 13px;
    background: #adaaaa;
    border-radius: 6px;
`;
const SpanDarkBlue = styled.div`
    background: #1C40FA;
    border-radius: 6px;
    height: 13px;
    width: 70%;
`;
const Due = styled.small`
  color: #9E9696;
  font-size: 13px;
  font-weight: 600;
`;
const DivRight = styled.div`
    width:20%;

`;
const Resume = styled.button`
    padding: 10px 14px;
    border-radius: 7px;
    border: 2px solid orange;
    color: orange;
    font-weight: 700;
    font-size: 14px;
`;
const Start = styled.button`
    color: #5C75FB;
    padding: 10px 27px;
    border-radius: 7px;
    border: 2px solid #5C75FB;
    font-weight: 700;
    font-size: 14px;
`;


export default Pending