import React, {useState} from "react";
import styled from "styled-components";
import {Button, Row, Col} from 'antd'
import CalculatorOutBox from "./CalculatorOutputBox";

export const CalculatorNumericPad = styled.div`
  width: 20rem;
`;


 const CalculatorOperations = {
    '/': ({prevValue, nextValue}: { prevValue: any, nextValue: any }) => prevValue / nextValue,
    '*': ({prevValue, nextValue}: { prevValue: any, nextValue: any }) => prevValue * nextValue,
    '+': ({prevValue, nextValue}: { prevValue: any, nextValue: any }) => prevValue + nextValue,
    '-': ({prevValue, nextValue}: { prevValue: any, nextValue: any }) => prevValue - nextValue,
    '=': ({prevValue, nextValue}: { prevValue: any, nextValue: any }) => nextValue
}

export function  CalculatorPad(){

    const [value, setValue] = useState(null);
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand]  = useState(true);
    const [calStackTree, setCallStackTree] = useState([]);

    function  clearAll() {
        setValue(null);
        setDisplayValue('0');
        setOperator(null);
        setWaitingForOperand(false);
    }

    function clearDisplay() {
        setDisplayValue('0');
    }

    // clearLastChar() {
    //     const { displayValue } = this.state
    //
    //     this.setState({
    //         displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
    //     })
    // }

    function handleInputValue(digit: number) {
        if (waitingForOperand) {
            setDisplayValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit)
        }
    }

    function  performOperation(nextOperator: string) {
        // const { value, displayValue, operator } = this.state
        const inputValue = parseFloat(displayValue)

        if (value == null) {
            // this.setState({
            //     value: inputValue
            // });
            // @ts-ignore
            setValue(inputValue);
        } else if (operator) {
            const currentValue = value || 0
            // @ts-ignore
            const newValue = CalculatorOperations[operator](currentValue, inputValue)
            setValue(newValue);
            setDisplayValue(String(newValue));
        }

        setWaitingForOperand(true);
        // @ts-ignore
        setWaitingForOperand(nextOperator);
    }
    return (
        <CalculatorNumericPad>
            <CalculatorOutBox output={displayValue}></CalculatorOutBox>
            <Row>
                <Col span={6}> <Button type="text" value="1" onClick={() => handleInputValue(1)}>1</Button></Col>
                <Col span={6}> <Button type="text" value="2" onClick={() => handleInputValue(2)}>2</Button></Col>
                <Col span={6}> <Button type="text" value="3" onClick={() => handleInputValue(3)}>3</Button></Col>
                <Col span={6}> <Button type="text" value="ADD" onClick={() => performOperation('+')}>Add(+)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="4" onClick={() => handleInputValue(4)}>4</Button></Col>
                <Col span={6}> <Button type="text" value="5" onClick={() => handleInputValue(5)}>5</Button></Col>
                <Col span={6}> <Button type="text" value="6" onClick={() => handleInputValue(6)}>6</Button></Col>
                <Col span={6}> <Button type="text" value="SUB" onClick={() => performOperation('-')}>Subtract(-)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="7" onClick={() => handleInputValue(7)}>7</Button></Col>
                <Col span={6}> <Button type="text" value="8" onClick={() => handleInputValue(8)}>8</Button></Col>
                <Col span={6}> <Button type="text" value="9" onClick={() => handleInputValue(9)}>9</Button></Col>
                <Col span={6}> <Button type="text" value="MUL" onClick={() =>  performOperation('*')}>Multiply(*)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="CLEAR" onClick={() => clearDisplay()}>Clear</Button></Col>
                <Col span={6}> <Button type="text" value="0" onClick={() => handleInputValue(0)}>0</Button></Col>
                <Col span={6}> <Button type="text" onClick={() => performOperation("=")} value="=">=</Button></Col>
                <Col span={6}> <Button type="text" value="DIV" onClick={() =>  performOperation('/')}>Divide(/)</Button></Col>
            </Row>
        </CalculatorNumericPad>
    );
}