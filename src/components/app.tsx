import React from "react"
import {Book} from "./book"

export class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                width: '100%',
                height: '100%',
                position: 'fixed',
                background: '#1a1a1a'
            }
        }
    }

    render() {
        return (
            <div style={this.state['styles']}>
                <Book></Book>
            </div>
        )
    }
}