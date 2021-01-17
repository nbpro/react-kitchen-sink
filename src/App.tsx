import React from "react";

import { Tabs } from "antd";
import styled from "styled-components";
import CalculatorIndex from "./calculator";

const { TabPane } = Tabs;

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;
export const AppHeader = styled.div`
  width: 190px;
  height: 33px;
  left: 269px;
  top: 134px;
  font-family: Agenda;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  letter-spacing: 0.18em;
  color: #4970f8;
  margin-top: 2rem;
`;

function AppContents() {
  const callback = (key: any) => {
    console.log(key);
  };
  return (
    <Container>
      <AppHeader>React Kitchen Sink</AppHeader>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="react-calculator" key="1">
            <CalculatorIndex/>
        </TabPane>
      </Tabs>
    </Container>
  );
}

export default function App() {
  return <AppContents />;
}
