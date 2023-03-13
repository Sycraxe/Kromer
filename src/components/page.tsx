import React from "react"
import {Props} from "../interfaces"

export class Page extends React.Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                width: 14.8 + 'cm',
                height: 21.0 +'cm',
                display: "inline-block",
                background: "#242424",
                "border-radius": (props.side == "left") ? "1cm 0 0 1cm" : (props.side == "right") ? "0 1cm 1cm 0" : "0"
            }
        }
    }

    render() {
        return (
            <div style={this.state['styles']}></div>
        )
    }
}