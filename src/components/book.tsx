import React from "react"
import {Page} from "./page"
import {Separator} from "./separator"

export class Book extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            styles: {
                width: 29.7 + 'cm',
                height: 21.0 +'cm',
                "border-radius": "10px",
                top: "50%",
                left: "50%",
                position: "absolute",
                transform: "translate(-50%, -50%)"
            }
        }
    }

    render() {
        return (
            <div style={this.state['styles']}>
                <Page side="left"/>
                <Separator/>
                <Page side="right"/>
            </div>
        )
    }
}