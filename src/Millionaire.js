import React, { useState } from 'react';
import { Button, Alert, Radio } from 'antd';
import json from './question';


const Wrapper = () => {
  const [quiz, setQuiz] = useState(false);
  return (
    <div className="scrollable-container">
      { quiz ? (
        <Quiz />
      ) : (
        [
          <h2>Rules</h2>,
          <p>1. There are total 10 questions.</p>,
          <p>2. Each question will have 4 options out of which 1 is correct.</p>,
          <p>3. You have 30 seconds to answer (timer will appear on right).</p>,
          <p>4. You need to enter the answer on zoom chat box before the timeout.</p>,
          <p>5. Each correct answer will earn you 1 point.</p>,
          <Button type="primary" onClick={() => setQuiz(true)}>Start</Button>
        ]
      )}
    </div>
  );
};


class Quiz extends React.Component {
  state = {
    index: 0
  , countdown: 30
  };

  timer = null

  componentDidMount() {
    this.resetTimer()
  }
  
  resetTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
      let countdown = this.state.countdown - 1
      if(this.state.countdown === 0) {
        clearInterval(this.timer)
      } else {
        this.setState({ countdown })
      }
    }, 1000)
  }

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  onNext = e => {
    this.setState({ index: this.state.index + 1, countdown: 30, value: null })
    this.resetTimer()
  }

  render() {
    const { index, value, countdown } = this.state
        , { question, options, answer, description } = json[index]

    return (
      <>
        { countdown === 0 && <Alert message="Times Up!!!" type="warning" />}
        <p className="question">Q{index+1}: {question}
          <span className="timer">{countdown} sec left</span>
        </p>
        <Radio.Group onChange={this.onChange} value={this.state.value}>
          { options.map((val,idx) => <Radio className="radio" value={idx}>{val}</Radio>) }
        </Radio.Group>
        { answer === value && (
          <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
        )}
        { index < json.length - 1 && <Button type="primary" onClick={this.onNext}>Next</Button> }
      </>
    );
  }
}


export default Wrapper