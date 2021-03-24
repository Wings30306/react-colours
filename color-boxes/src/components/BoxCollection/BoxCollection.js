import React, { Component } from "react";
import ColorBox from "../ColorBox/ColorBox";

class BoxCollection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: Array.from({length: this.props.numberOfBoxes})
        }
    }

    static defaultProps = {
        numberOfBoxes: 16,
        colours: ["aliceblue", "aquamarine", "bisque", "burlywood", "chocolate","cornsilk", "gainsboro", "ghostwhite", "indianred", "lavender", "linen", "navajowhite", "peachpuff", "rosybrown", "silver", "thistle"]
    }


    randomColor = () => {
        let color = this.props.colours[Math.floor(Math.random() * this.props.colours.length)];
        return color;
    }


    render(){
        return (
            <div className="BoxCollection">
                { 
                    this.state.boxes.map(
                        box => <ColorBox color={this.randomColor()} />
                        )
                }
                

            </div>
        )
    }
}

export default BoxCollection;