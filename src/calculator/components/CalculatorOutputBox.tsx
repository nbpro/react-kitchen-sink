import React, {useState} from "react";
import styled from "styled-components";
import { Row, Col} from 'antd'

export const CalculatorOutputBoxStyle= styled.div`
  width: 20rem;
  padding: 0.5rem
`;

// @ts-ignore
export default function CalculatorOutBox({output}) {
    console.log(output);
    // const [result, setResult] = useState(output);
    return (
        <CalculatorOutputBoxStyle>
            <Row>
                <Col span={11}></Col>
                <Col span={1}>{output}</Col>
            </Row>
        </CalculatorOutputBoxStyle>
    );
}