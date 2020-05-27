import React from 'react'

const Table = props => {
    return (
        <table>
            <TableHeader />
            <TableBody
                charactersData = { props.charactersData }
                removeCharacter = { props.removeCharacter } />
        </table>
    )
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Jobs</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const { charactersData, removeCharacter } = props

    const rows = charactersData.map((character, index) => {
        return (
            <tr key = { index }>
                <td>{ character.name }</td>
                <td>{ character.job }</td>

                <td>
                    <button onClick = { () => removeCharacter(index) }>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{ rows }</tbody>
}

export default Table
