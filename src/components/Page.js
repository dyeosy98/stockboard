import React from 'react';
import styled from 'styled-components';

import Table from './Table';

const Body = styled.div`
  height: auto;
  display: grid;
  grid-template-areas:
    'header header header'
    'left   main   right';
  grid-template-columns: 1fr 6fr 1fr;
  grid-template-rows: 1fr .;
`

const Head = styled.div`
  grid-area: header;
`

const Left = styled.div`
  grid-area: left;
`

const Main = styled.div`
  grid-area: main;
  display: grid;
  grid-template-areas:
    'title'
    'table';
`

const Right = styled.div`
  grid-area: right;
`

const Page = () => (
      <Body>
        <Head>Stock!!!!</Head>
        <Left>Left</Left>
        <Right>Right</Right>
        <Main>
            <h2 grid-area='title'>This is a Stock Table</h2>
            <Table grid-area='table'/>
            </Main>
      </Body>
);


export default Page;