import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import App from './containers/app'

import './index.css'

class Root extends React.Component {
  constructor (props) {
    super(props)
    this.store = store
  }
  render() {
    const { name } = this.props
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={history}>
          <div>
            <App name={name} />
          </div>
        </ConnectedRouter>
    </Provider>
    )
  }
}

export default Root