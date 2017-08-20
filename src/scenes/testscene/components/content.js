/*eslint linebreak-style: ["error", "windows"]*/
import React, { Component } from 'react'
import {
  Sidebar,
  Icon,
  Segment,
  Menu,
  Dropdown,
  Button,
  Breadcrumb,
  Header,
  state,
  toggleVisibility,
  List,
  Rail,
  Tab,
  toggle,
  handleItemClick
} from 'semantic-ui-react'
import styled from 'styled-components'

export default class Content extends React.Component {


  constructor(props) {
    super()
    this.state = {
      isDvisible: 1,
      isEvisible: 0,
      isHvisible: 0,
      isCxvisible: 0,
      visibleD: { display: 'inline', width: '100%', float: 'left' },
      visibleE: { display: 'none', width: '24%', float: 'left' },
      visibleH: { display: 'none', width: '24%', float: 'left' },
      visibleCx: { display: 'none', width: '24%', float: 'left' }
    }
  }

  toggle1(e) {
    if (this.state.isEvisible === 1) {
      if (this.state.isHvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '24%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '30%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'inline', width: '30%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '30%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '40%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '40%', float: 'left' },
            visibleE: { display: 'inline', width: '60%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    } else {
      if (this.state.isHvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '33%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '34%', float: 'left' },
            visibleCx: { display: 'inline', width: '33%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '45%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '55%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 0,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '55%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '45%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 0,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '100%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    }
  }
  toggle2(e) {
    if (this.state.isDvisible === 1) {
      if (this.state.isHvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '24%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '30%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'inline', width: '30%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '30%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '40%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '40%', float: 'left' },
            visibleE: { display: 'inline', width: '60%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    } else {
      if (this.state.isHvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'inline', width: '30%', float: 'left' },
            visibleCx: { display: 'inline', width: '30%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '60%', float: 'left' },
            visibleH: { display: 'inline', width: '40%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 1,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '60%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '40%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 0,
            isCxvisible: 0,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '100%', float: 'left' },
            visibleH: { display: 'none', width: '24%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    }
  }
  toggle3(e) {
    if (this.state.isDvisible === 1) {
      if (this.state.isEvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '24%', float: 'left' },
            visibleCx: { display: 'inline', width: '24%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '30%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'inline', width: '30%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'inline', width: '33%', float: 'left' },
            visibleE: { display: 'inline', width: '24%', float: 'left' },
            visibleH: { display: 'none', width: '34%', float: 'left' },
            visibleCx: { display: 'inline', width: '33%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 1,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'inline', width: '45%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '55%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    } else {
      if (this.state.isEvisible === 1) {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '40%', float: 'left' },
            visibleH: { display: 'inline', width: '30%', float: 'left' },
            visibleCx: { display: 'inline', width: '30%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 0,
            isEvisible: 1,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'inline', width: '60%', float: 'left' },
            visibleH: { display: 'inline', width: '40%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      } else {
        if (this.state.isCxvisible === 1) {
          this.setState({
            isDvisible: 0,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 1,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '55%', float: 'left' },
            visibleCx: { display: 'inline', width: '45%', float: 'left' }
          })
        } else {
          this.setState({
            isDvisible: 0,
            isEvisible: 0,
            isHvisible: 1,
            isCxvisible: 0,
            visibleD: { display: 'none', width: '24%', float: 'left' },
            visibleE: { display: 'none', width: '24%', float: 'left' },
            visibleH: { display: 'inline', width: '100%', float: 'left' },
            visibleCx: { display: 'none', width: '24%', float: 'left' }
          })
        }
      }
    }
  }

  toggleDETAILS(e) {
    this.setState({
      isDvisible: 1,
      isEvisible: 0,
      isHvisible: 0,
      isCxvisible: 0,
      visibleD: { display: 'inline', width: '100%', float: 'left' },
      visibleE: { display: 'none', width: '24%', float: 'left' },
      visibleH: { display: 'none', width: '24%', float: 'left' },
      visibleCx: { display: 'none', width: '24%', float: 'left' }
    })
  }

  toggleEDIT(e) {
    this.setState({
      isDvisible: 0,
      isEvisible: 1,
      isHvisible: 0,
      isCxvisible: 0,
      visibleD: { display: 'none', width: '24%', float: 'left' },
      visibleE: { display: 'inline', width: '100%', float: 'left' },
      visibleH: { display: 'none', width: '24%', float: 'left' },
      visibleCx: { display: 'none', width: '24%', float: 'left' }
    })
  }

  toggleHISTORY(e) {
    this.setState({
      isDvisible: 0,
      isEvisible: 0,
      isHvisible: 1,
      isCxvisible: 0,
      visibleD: { display: 'none', width: '24%', float: 'left' },
      visibleE: { display: 'none', width: '24%', float: 'left' },
      visibleH: { display: 'inline', width: '100%', float: 'left' },
      visibleCx: { display: 'none', width: '24%', float: 'left' }
    })
  }

  render() {
    const { visibleD } = this.state
    const { visibleE } = this.state
    const { visibleH } = this.state
    const { visibleCx } = this.state

    return (
      <div>
        <div style={visibleD}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details">
              <Button
                name="details"
                active={'details'}
                onClick={this.toggleDETAILS.bind(this)}>
                Details{' '}
              </Button>
              <Button name="1" icon="plus"
                onClick={this.toggle1.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="editor" >
              <Button
                name="editor"
                onClick={this.toggleEDIT.bind(this)}
              >
                Editor{' '}
              </Button>
              <Button name="2" icon="plus"
                onClick={this.toggle2.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="history" >
              <Button
                name="history"
                onClick={this.toggleHISTORY.bind(this)}
              >
                History{' '}
              </Button>
              <Button name="3" icon="plus"
                onClick={this.toggle3.bind(this)}>
              </Button>
            </Menu.Item>
          </Menu>
          <Segment>
            Details
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Segment>
        </div>
        <div style={visibleE}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details" >
              <Button
                name="details"
                onClick={this.toggleDETAILS.bind(this)}
              >
                Details{' '}
              </Button>
              <Button name="1" icon="plus"
                onClick={this.toggle1.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="editor">
              <Button
                name="editor"
                active={'editor'}
                onClick={this.toggleEDIT.bind(this)}
              >
                Editor{' '}
              </Button>
              <Button name="2" icon="plus"
                onClick={this.toggle2.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="history" >
              <Button
                name="history"
                onClick={this.toggleHISTORY.bind(this)}
              >
                History{' '}
              </Button>
              <Button name="3" icon="plus"
                onClick={this.toggle3.bind(this)}>
              </Button>
            </Menu.Item>
          </Menu>
          <Segment>
            Editor
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Segment>
        </div>
        <div style={visibleH}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details" >
              <Button
                name="details"
                onClick={this.toggleDETAILS.bind(this)}>
                Details{' '}
              </Button>
              <Button name="1" icon="plus"
                onClick={this.toggle1.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="editor" >
              <Button
                name="editor"
                onClick={this.toggleEDIT.bind(this)}>
                Editor{' '}
              </Button>
              <Button name="2" icon="plus"
                onClick={this.toggle2.bind(this)}>
              </Button>
            </Menu.Item>
            <Menu.Item name="history" >
              <Button
                name="history"
                active={'history'}
                onClick={this.toggleHISTORY.bind(this)}>
                History{' '}
              </Button>
              <Button name="3" icon="plus"
                onClick={this.toggle3.bind(this)}>
              </Button>
            </Menu.Item>
          </Menu>
          <Segment>
            History
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Segment>
        </div>
        <div style={visibleCx}>
          Context
        </div>
      </div>
    )
  }
}
export { Content }
