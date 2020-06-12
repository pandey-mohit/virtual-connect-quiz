import React from 'react';
import { Button, Modal, Layout } from 'antd';
import json from './players';
import Trophy from './Trophy';
const { Sider } = Layout;


class Scoreboard extends React.Component {
  state = {
    data: json
  }

  showModal = () => {
    let { name } = this.sort(this.state.data)[0]
    Modal.info({
      content: (
        <div className="winner">
          <Trophy />
          <p>Congratulations {name}<br />You won!!</p>
        </div>
      ),
      width: 700,
      maskClosable: true
    });
  };

  onClick = name => {
    let data = this.state.data.map((v) => {
      if(v.name.toLowerCase() === name.toLowerCase()) {
        console.log(v.score)
        v.score += 1
        console.log(v.score)
      }
      return v
    })
    this.setState({ data })
  }

  sort = data => {
    return data.sort((a, b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))
  }

  render() {
    const { data } = this.state
    return (
      <Sider className="leaderboard" trigger={null}>
        <div className="logo">LeaderBoard</div>
        { this.sort(data).map((v, i) => {
          return (
            <div key={i} className={`players  ${i === 0 ? 'first' : ''}`}>
              <span>{v.name}</span>
              <span className="badge" onClick={() => this.onClick(v.name)}>{v.score}</span>
            </div>
          )
        })}
        <Button type="primary" onClick={this.showModal}>Result</Button>
      </Sider>
    )
  }
}

 export default Scoreboard