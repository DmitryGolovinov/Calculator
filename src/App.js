import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result';
import KeyBoard from './Components/Keyboard';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "AC"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.state.result === 'error' || this.state.result === 'infinity' ?
            this.setState({
                result: button
            })
            :
            this.setState({
                result: this.state.result + button
            })
        }
    };

    render() {
        return (
                <div className="calculator">
                    <Result result={this.state.result}/>
                    <KeyBoard onClick={this.onClick}/>
                </div>
        );
    }
}

export default App;
