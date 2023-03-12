import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super({ width: '100%', height: '100%' })
    }

    render() {
        return (
            <Page></Page>
        )
    }
}

function Page() {
    return (
        <div>
            <div></div>
            <Title></Title>
            <div></div>
        </div>
    )
}

function Title() {
    return <p></p>
}

ReactDOM.render(<App/>, document.getElementById('app'))