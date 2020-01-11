import React, { Component } from "react";
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      shank: "shank1.jpg",
      diamond: "diamond-round.webp",
      shankConfiguration: {
        "shank1.jpg": {
          "diamond-round.webp": {
            left: "26px",
            top: "-11px",
            height: "20vmin",
            zIndex: "2",
            position: "absolute"
          },
          "diamond-princess.webp": {
            left: "26px",
            top: "-11px",
            height: "20vmin",
            zIndex: "2",
            position: "absolute"
          }
        },
        "shank2.jpg": {
          "diamond-round.webp": {
            left: "26px",
            top: "-20px",
            height: "20vmin",
            zIndex: "2",
            position: "absolute"
          },
          "diamond-princess.webp": {
            left: "16px",
            top: "-31px",
            height: "22vmin",
            zIndex: "2",
            position: "absolute"
          }
        },
        "shank3.jpg": {
          "diamond-round.webp": {
            left: "18px",
            top: "-30px",
            height: "21vmin",
            zIndex: "2",
            position: "absolute"
          },
          "diamond-princess.webp": {
            left: "18px",
            top: "-30px",
            height: "21vmin",
            zIndex: "2",
            position: "absolute"
          }
        }
      }
    }
  }

  updateShank() {
    console.log(`selected shank ${document.querySelector('#shanks').value}`)
    const shank = document.querySelector('#shanks').value
    const selectedShankConfig = this.state.shankConfiguration[shank]
    var diamond = this.state.diamond 
    if (!(this.state.diamond in selectedShankConfig)) {
      diamond = Object.keys(this.state.shankConfiguration[shank])[0]
    }
    this.setState({
      shank,
      diamond
    })
  }

  updateDiamond() {
    var diamond = document.querySelector('#diamonds').value
    console.log(`selected diamond ${diamond}`)
    this.setState({
      diamond
    })
  }

  render() {
    const shanks = []
    for (var s of Object.keys(this.state.shankConfiguration)) {
      shanks.push(<option key={s} value={s}>{s}</option>)
    }
    const diamonds = []
    for (var d of Object.keys(this.state.shankConfiguration[this.state.shank])) {
      diamonds.push(<option key={d} value={d}>{d}</option>)
    }
    const shank = this.state.shank;
    const diamond = this.state.diamond;
    return (
      <div className="App">
        <div>
          <img
            src={"./assets/" + diamond}
            style={this.state.shankConfiguration[shank][diamond]}
            alt="logo"
          />
          <img src={"./assets/" + shank} className="shank" alt="logo" />
          <select id="shanks" name="shanks" onChange={(s) => this.updateShank()} value={this.state.shank}>
            {shanks}
          </select>
          <select id="diamonds" name="diamonds" onChange={(d) => this.updateDiamond()} value={this.state.diamond}>
            {diamonds}
          </select>
        </div>
      </div>
    );
  }
}
export default App;
