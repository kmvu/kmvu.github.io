import React, { Component } from 'react'

import Table from './Table.js'
import Form from './Form.js'

class App extends Component {
    initial_state = {
        characters: [],
        data: []
    }
    state = this.initial_state

    remove = removeIndex => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, index) => {
                return index !== removeIndex
            })
        })
    }

    submit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    componentDidMount() {
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

        fetch(url)
            .then(result => result.json())
            .then(json => {
                this.setState({
                    data: json.filter((elem, index) => {
                        return elem !== "" && index > 0
                    })
                })
             })
    }

    render() {
        const { data } = this.state

        const result = data.map((entry, index) => {
            return <li key = { index }>{ entry }</li>
        })

        return (
            <div className = "container">
                <ul>{ result }</ul>

                <Table
                    charactersData = { this.state.characters }
                    removeCharacter = { this.remove } />

                <Form
                    handleSubmission = { this.submit } />
            </div>
        )
    }
}

export default App
