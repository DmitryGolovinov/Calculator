import React, {Component} from 'react';

class KeyBoard extends Component {

    render() {
        return (
            <div className="keys">

                <button className='pars' name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className='pars' name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>

                <button name="+" className='operator' onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="-" className='operator' onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="*" className='operator' onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="/" className='operator' onClick={e => this.props.onClick(e.target.name)}>÷</button>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>

                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>

                <button className='zero' name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>

          
                <button name="." className='dicimal' onClick={e => this.props.onClick(e.target.name)}>.</button>

                <button className='all-cancel' name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button>
                <button className='cancel-entry' name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                
                <button className='equal' name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                
            </div>
        );
    }
}


export default KeyBoard;