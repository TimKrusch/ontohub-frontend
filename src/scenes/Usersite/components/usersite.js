import React, { Component } from 'react'
import { Segment, Menu, state, handleItemClick, List } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const BasicExample = ({ match }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/Clear`}>Clear</Link>
        </li>
        <li>
          <Link to={`${match.url}/Left`}>Left</Link>
        </li>
        <li>
          <Link to={`${match.url}/Right`}>Right</Link>
        </li>
        <li>
          <Link to={`${match.url}/Left+Right`}>Both</Link>
        </li>
      </ul>

      <hr />

      <Route path={`${match.url}/Clear`} component={Clear} />
      <Route path={`${match.url}/Left`} component={Left} />
      <Route path={`${match.url}/Right`} component={Right} />

      <Route
        path={`${match.url}/Left+Right`}
        component={() => (
          <div style={{ display: 'flex' }}>
            <Left />
            <Right />
          </div>
        )}
      />
    </div>
  </Router>
)

const Clear = () => (
  <div>
    <h2>Clear</h2>
    <Switch>
      <Redirect from="/Clear" to="/Left" />
      <Route path="/Left" component={Left} />
    </Switch>
  </div>
)

const Left = ({ match }) => (
  <div style={{ background: 'blue', flex: '1' }}>
    <h2>Left</h2>
  </div>
)

const Right = () => (
  <div style={{ background: 'red', flex: '1' }}>
    <h2>Right</h2>
  </div>
)

export { BasicExample as usermain }

{
  /*export default class usermain extends Component {
  state = { activeItem: 'Overview' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      
    

    <div>
         <Menu pointing secondary>
          <Menu.Item
            name="Overview"
            active={activeItem === 'Overview'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="My Repositories"
            active={activeItem === 'My Repositories'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <List celled style={{ width: '40%' }}>
          <List.Item>
            <List.Content>
              <List.Header>Repo1</List.Header>
              first Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo2</List.Header>
              second Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo3</List.Header>
              third Repo
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>Repo4</List.Header>
              fourth Repo
            </List.Content>
          </List.Item>
        </List>
    </div>)
   
  }
}*/
}
