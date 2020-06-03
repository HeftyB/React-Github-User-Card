import React, { Component } from 'react'
import { 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input } from 'reactstrap';

export class Forms extends Component {
    render() {
        return (
            <div className="forms">
                <Form onSubmit={ (event) => {
                    this.props.onFormSumbit(event)
                }}>
                    <Label>Add a User by Github Username:</Label>
                    <FormGroup>
                        <Input 
                            type="text" 
                            name="input" 
                            value={this.props.formData}
                            onChange={this.props.onInputChange}></Input>
                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
                <Button onClick={this.props.addDefaultUsers}>Add Default UserNames</Button>
            </div>
        )
    }
}

export default Forms
