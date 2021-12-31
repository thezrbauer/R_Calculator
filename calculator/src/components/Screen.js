import React, {Component} from 'react'
import {Form} from './styles/Screen.styled';



export class Screen extends Component {
    render() {
        let {result} = this.props;
        return (
            <Form className="result">
                <h2>{result}</h2>
        </Form>
        )
    }
}

export default Screen