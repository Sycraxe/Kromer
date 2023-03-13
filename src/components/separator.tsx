import React from "react"

export class Separator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                width: 0.1 + 'cm',
                height: 21.0 +'cm',
                display: "inline-block"
            }
        }
    }

    render() {
        return (
            <div style={this.state['styles']}></div>
        )
    }
}