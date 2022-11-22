import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    mode: true,
  }

  onChangeMode = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  render() {
    const {mode} = this.state
    const modeClassName = mode ? 'dark-mode' : 'light-mode'
    const buttonText = mode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="app-container">
        <div className={`container ${modeClassName}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
