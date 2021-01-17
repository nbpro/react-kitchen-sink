import React, {useState} from "react";
import styled from "styled-components";
import { Row, Col} from 'antd'

export const CalculatorOutputBoxStyle= styled.div`
  width: 20rem;
  padding: 0.5rem
`;

export default function CalculatorOutBox({output = `0`}) {
    const [result, setResult] = useState(output);
    return (
        <CalculatorOutputBoxStyle>
            <Row>
                <Col span={11}></Col>
                <Col span={1}>{result}</Col>
            </Row>
        </CalculatorOutputBoxStyle>
    );
}