import React from 'react';
import { Form, Button,} from 'semantic-ui-react'

const FormBox = (props) => {
    const {submitHandler, onChangeHandler, value, result, resetFormHandler} = props;
    
    // To disable/enable reset button
    const isTouched = result === "" ? true : false;

    return (
        <div className="formBox">
            <Form onSubmit={submitHandler} onReset={resetFormHandler}>
                <Form.Field>
                    <label>Insert a number</label>
                    <input placeholder='Insert a number' value={value} onChange={onChangeHandler} />
                </Form.Field>
                <Button type='reset' inverted color="orange" disabled={isTouched}>Reset</Button>
                <Button type='submit' primary={true} >Get the result</Button>
            </Form>
        </div>
    );
};
export default FormBox;