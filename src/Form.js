import React, { Component } from 'react'

class Form extends Component {
    initial_state = {
        name: "",
        job: ""
    }
    state = this.initial_state

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = () => {
        this.props.handleSubmission(this.state)
        this.setState(this.initial_state)
    }

    render() {
        const { name, job } = this.state

        return (
            <form>
                <label htmlFor = "name">Name</label>
                <input id = "name"
                    name = "name"
                    value = { name }
                    type = "text"
                    onChange = { this.handleChange } />

                <label htmlFor = "job">Job</label>
                <input id = "job"
                    name = "job"
                    value = { job }
                    type = "text"
                    onChange = { this.handleChange } />

                <input type = "button"
                    value = "Submit"
                    onClick = { this.handleSubmit } />
            </form>
        )
    }
}

export default Form
