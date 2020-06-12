import React, { useState } from 'react';
import { Button, Card } from 'antd';
import json from './knowme';


const Wrapper = () => {
  const [quiz, setQuiz] = useState(true);
  return (
    <div className="scrollable-container">
      { quiz ? (
        <KnowMe />
      ) : (
        [
          <p>Dummy TExt</p>,
          <Button type="primary" onClick={() => setQuiz(true)}>Start</Button>
        ]
      )}
    </div>
  );
};


class KnowMe extends React.Component {
  state = {
    data: json.map(i => {
      i.selected = false
      return i
    })
  }

  onClick = idx => {
    let data = this.state.data.map((v, i) => {
      if(i === idx) {
        v.selected = true
      }
      return v
    })
    this.setState(data)
  }

  render() {
    const { data } = this.state
    return (
      <div className="knowme-container">
        { data.map((val, idx) => {
          return (
            <>
              { val.selected ? (
                <Card title={val.name}>
                  { val.question && <h4>{ val.question }</h4> }
                  { val.options.map(i => <p>{i}</p>) }
                </Card>
              ) : (
                <Card className="select" onClick={() => this.onClick(idx)}>
                  <p>{idx + 1}</p>
                </Card>
              )}
            </>
          )
        })}
      </div>
    );
  }
}


export default Wrapper