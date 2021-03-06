import React, { Component } from 'react'
import { injectGlobal } from 'styled-components'
import { Match, Miss } from 'react-router'

import { HomePage, SamplePage } from 'components'

class App extends Component {
  componentDidMount () {
    injectGlobal`
      body {
        margin: 0;
      }
    `
  }

  render () {
    return (
      <div>
        <Match pattern="/" exactly component={HomePage} />
        <Match pattern="/sample-page" component={SamplePage} />
        <Miss component={HomePage} />
      </div>
    )
  }
}

export default App
