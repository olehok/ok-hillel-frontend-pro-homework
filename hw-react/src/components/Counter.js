import React from "react";
import './style.css'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            addition: 0
        };
    }

    handleCount = (addition, isIncrement) => {
        this.setState({
            count: this.state.count + (isIncrement
                ? addition
                : -addition)
        })
    }

    handleChangeAddition = (value) => {
        this.setState({
            addition: value
        })
    }

    render() {
        return <div className="container">
            <h1>
                {this.state.count}
            </h1>
            <p>
                Актуальний доданок: {this.state.addition}
            </p>
            <div>
                <button
                    className="button"
                    onClick={() => { this.handleChangeAddition(1) }}>
                    1
                </button>
                <button
                    className="button"
                    onClick={() => { this.handleChangeAddition(5) }}>
                    5
                </button>
                <button
                    className="button"
                    onClick={() => { this.handleChangeAddition(10) }}>
                    10
                </button>
            </div>
            <div>
                <button
                    className="button"
                    onClick={() => { this.handleCount(this.state.addition, true) }}>
                    додати {this.state.addition}
                </button>
                <button
                    className="button"
                    onClick={() => { this.handleCount(this.state.addition, false) }}>
                    відняти {this.state.addition}
                </button>
            </div>
        </div>
    }
}

export default Counter;