import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Notes() {
  return (
    <div>
        <Helmet>
            <title>Notes</title>
        </Helmet>
        <H1>Coming Soon</H1>
    </div>
  )
}
const H1 = styled.h1`
    font-size: 48px;
`;
export default Notes;