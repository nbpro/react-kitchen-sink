import React, {useState} from "react";
import styled from "styled-components";
import {Button, Row, Col} from 'antd'

export const CalculatorNumericPad = styled.div`
  width: 20rem;
`;
export default function CalculatorPad() {

    const [value, setValue] = useState(null);
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand]  = useState(false);

    function clearValue(){
        setValue(null);
        setDisplayValue('0');
        setOperator(null);
        setWaitingForOperand(false);
    }

    function clearDisplay(){
        setDisplayValue('0');
    }
    const CalculatorOperations = {
        '/': (prevValue: any, nextValue: any) => prevValue / nextValue,
        '*': (prevValue: any, nextValue: any ) => prevValue * nextValue,
        '+': (prevValue: any, nextValue: any) => prevValue + nextValue,
        '-': (prevValue: any,nextValue:any) => prevValue - nextValue,
        '=': (prevValue: any, nextValue:any) => nextValue
    }

    function handleClick(key: any): void{
        if (key === 'Enter')
            key = '='
        if ((/\d/).test(key)) {
            inputDigit(parseInt(key, 10))
        } else if (key in CalculatorOperations) {
            performOperation(key)
        } else if (key === 'Clear') {
            if (displayValue !== '0') {
                clearDisplay()
            } else {
                clearValue()
            }
        }
        console.log(key);
    }

    function inputDigit(digit: any){
        if (waitingForOperand) {
            setDisplayValue(String(digit));
            setWaitingForOperand(false);
        } else {
            setDisplayValue(displayValue === '0' ? String(digit) : parseFloat(displayValue) + digit);
        }
    }

    function performOperation(key: any){
        const inputValue = parseFloat(displayValue);
        if (value == null) {
            // @ts-ignore
            setValue(inputValue);
        } else if (operator) {
            const currentValue = value || 0
            // @ts-ignore
            const newValue = CalculatorOperations[key](currentValue, inputValue);
            setValue(newValue);
            setDisplayValue(String(newValue));
        }
        setWaitingForOperand(true);
        setOperator(key);
    }

    function showResult():void{
        console.log(`show result triggered`);
    }
    return (
        <CalculatorNumericPad>
            Result is : {displayValue}
            <Row>
                <Col span={6}> <Button type="text" value="1" onClick={() => handleClick(1)}>1</Button></Col>
                <Col span={6}> <Button type="text" value="2" onClick={() => handleClick(2)}>2</Button></Col>
                <Col span={6}> <Button type="text" value="3" onClick={() => handleClick(3)}>3</Button></Col>
                <Col span={6}> <Button type="text" value="ADD" onClick={() => handleClick('+')}>Add(+)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="4" onClick={() => handleClick(4)}>4</Button></Col>
                <Col span={6}> <Button type="text" value="5" onClick={() => handleClick(5)}>5</Button></Col>
                <Col span={6}> <Button type="text" value="6" onClick={() => handleClick(6)}>6</Button></Col>
                <Col span={6}> <Button type="text" value="SUB" onClick={() => handleClick('-')}>Subtract(-)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="7" onClick={() => handleClick(7)}>7</Button></Col>
                <Col span={6}> <Button type="text" value="8" onClick={() => handleClick(8)}>8</Button></Col>
                <Col span={6}> <Button type="text" value="9" onClick={() => handleClick(9)}>9</Button></Col>
                <Col span={6}> <Button type="text" value="MUL" onClick={() => handleClick('*')}>Multiply(*)</Button></Col>
            </Row>
            <Row>
                <Col span={6}> <Button type="text" value="CLEAR" onClick={() => clearValue()}>Clear</Button></Col>
                <Col span={6}> <Button type="text" value="0" onClick={() => handleClick(0)}>0</Button></Col>
                <Col span={6}> <Button type="text" onClick={() => showResult()} value="=">=</Button></Col>
                <Col span={6}> <Button type="text" value="DIV" onClick={() => handleClick('/')}>Divide(/)</Button></Col>
            </Row>
        </CalculatorNumericPad>
    );
}