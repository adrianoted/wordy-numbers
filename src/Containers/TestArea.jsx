import React from 'react';
import { Header, Divider } from 'semantic-ui-react'

import { transformNumberInWords } from '../Utilities/Utils';

import FormBox from '../Components/TestArea/FormBox';
import ResultBox from '../Components/TestArea/ResultBox';


class TestArea extends React.Component {
    state = {
        form: {
            value: ""
        },
        result: ""
    }

    // Controlled Input
    getInputValue = (e) => {
        // Create a first level copy and store the input value in the state
        const stateFormCopy = { ...this.state.form };
        stateFormCopy.value = e.target.value;
        this.setState({ form: stateFormCopy })
    }

    submitHandler = () => {
        this.setState({ result: "" })

        // get the input value stored in the state
        const numberToTranform = this.state.form.value;

        // transform the number into words
        const result = transformNumberInWords(numberToTranform);
        this.setState({ result });
    }


    resetFormHandler = () => {
        const stateFormCopy = { ...this.state.form };
        stateFormCopy.value = "";
        this.setState({ form: stateFormCopy, result: "" })
    }

    render() {
        const { form: { value }, result } = this.state;

        return (
            <React.Fragment>
                <Header as="h2">Target</Header>
                <p>Create a function which takes a number and returns the name of the number in English as a lowercase string. The function should support at least the numbers ±2 Quadrillion (±2,000,000,000,000,000) as well as positive and negative infinity.</p>

                <Divider hidden />

                <FormBox
                    onChangeHandler={this.getInputValue}
                    value={value}
                    result={result}
                    submitHandler={this.submitHandler}
                    resetFormHandler={this.resetFormHandler}
                />

                <Divider hidden />
                <Divider hidden />

                {result && <ResultBox result={result} />}
            </React.Fragment>
        );
    };
}
export default TestArea;