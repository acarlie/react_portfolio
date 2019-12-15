import React, { Component } from 'react';

class TypeWriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            longestWord: '',
            letter: 0,
            counter: 0,
            add: true,
            interval: '',
            deleteInterval: '',
            blink: '',
            word: ''
        }
        this.textArray = this.props.textArray;
        this.period = this.props.period;
    }

    componentDidMount(){
        this.type();
    };

    type() {
        clearInterval(this.state.interval);
        const interval = setInterval(() => { this.addLetters(); }, this.period);
        this.setState({ 
            interval,
            counter: 0
        });
        this.setWord();
    }

    setWord() {
        this.setState({
            word: this.textArray[this.state.counter]
        });
    }

    deleteLetters() {
        const { letter, add, counter, text } = this.state;
        if (letter > 0 && !add) {
            this.setState({
                letter: letter - 1,
                text: text.substring(0, letter - 1)
            })
        } else if (letter === 0 && !add) {
            this.setState({
                add: true,
                text: '',
                counter: counter + 1
            });
            this.setWord();
            this.startAdd();
        }
    }

    addLetters() {
        const { letter, add, counter, word, text } = this.state;
        if (counter === this.textArray.length) {
            this.type();
        } else {
            this.setWord();
            if (letter < word.length && add) {
                this.setState({
                    text: `${text}${word[letter]}`,
                    letter: letter + 1
                })
            } else if (letter === word.length && add) {
                this.setState({
                    add: false,
                    blink: 'blink'
                })
                setTimeout(() => { this.startDelete(); }, 1500);
            }
        }
    }

    startDelete() {
        this.setState({
            blink: ''
        })
        clearInterval(this.state.interval);
        const interval = setInterval(() => { this.deleteLetters(); }, this.period);
        this.setState({
            interval
        })
    }

    startAdd() {
        clearInterval(this.state.interval);
        const interval = setInterval(() => { this.addLetters(); }, this.period);
        this.setState({
            interval
        });
    }

    render() {
        return (
            <div>
                <div className='text-center'>
                    <h1 id='type'>{this.state.text}</h1>
                    <h1 id='blinker' className={this.state.blink}>|</h1>
                </div>
                <h1 id='type-hidden'>Development |</h1>
            </div>
        );
    }
}

export default TypeWriter;
