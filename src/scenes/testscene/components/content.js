import React, { Component } from 'react'
import {
  Segment,
  Menu,
  Button,
  DetailsClick,
  EditorClick,
  HistoryClick
} from 'semantic-ui-react'
import styled from 'styled-components'

class Content extends Component {
  constructor(props) {
    super()
    this.state = {
      isDvisible: true,
      isEvisible: false,
      isHvisible: false,
      visibleD: { display: 'inline', flex: '2' },
      visibleE: { display: 'none', flex: '3' },
      visibleH: { display: 'none', flex: '2' }
    }
  }

  toggletheVisibility(bDetails, bEditor, bHistory, e) {
    if (bDetails === true && bEditor === true && bHistory === true) {
      this.setState({
        isDvisible: true,
        isEvisible: true,
        isHvisible: true,
        visibleD: { display: 'inline', flex: '2' },
        visibleE: { display: 'inline', flex: '3' },
        visibleH: { display: 'inline', flex: '2' }
      })
    } else {
      if (bDetails === true && bEditor === true) {
        this.setState({
          isDvisible: true,
          isEvisible: true,
          isHvisible: false,
          visibleD: { display: 'inline', flex: '2' },
          visibleE: { display: 'inline', flex: '3' },
          visibleH: { display: 'none', flex: '2' }
        })
      } else {
        if (bDetails === true && bHistory === true) {
          this.setState({
            isDvisible: true,
            isEvisible: false,
            isHvisible: true,
            visibleD: { display: 'inline', flex: '2' },
            visibleE: { display: 'none', flex: '3' },
            visibleH: { display: 'inline', flex: '2' }
          })
        } else {
          if (bEditor === true && bHistory === true) {
            this.setState({
              isDvisible: false,
              isEvisible: true,
              isHvisible: true,
              visibleD: { display: 'none', flex: '2' },
              visibleE: { display: 'inline', flex: '3' },
              visibleH: { display: 'inline', flex: '2' }
            })
          } else {
            if (bDetails === true) {
              this.setState({
                isDvisible: true,
                isEvisible: false,
                isHvisible: false,
                visibleD: { display: 'inline', flex: '2' },
                visibleE: { display: 'none', flex: '3' },
                visibleH: { display: 'none', flex: '2' }
              })
            } else {
              if (bEditor === true) {
                this.setState({
                  isDvisible: false,
                  isEvisible: true,
                  isHvisible: false,
                  visibleD: { display: 'none', flex: '2' },
                  visibleE: { display: 'inline', flex: '3' },
                  visibleH: { display: 'none', flex: '2' }
                })
              } else {
                if (bHistory === true) {
                  this.setState({
                    isDvisible: false,
                    isEvisible: false,
                    isHvisible: true,
                    visibleD: { display: 'none', flex: '2' },
                    visibleE: { display: 'none', flex: '3' },
                    visibleH: { display: 'inline', flex: '2' }
                  })
                }
              }
            }
          }
        }
      }
    }
  }

  DetailsClick = e => this.toggletheVisibility(true, false, false, e)

  EditorClick = e => this.toggletheVisibility(false, true, false, e)

  HistoryClick = e => this.toggletheVisibility(false, false, true, e)

  DetailsplusClick(e) {
    if (this.state.isEvisible === true && this.state.isHvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isEvisible === true) {
        this.toggletheVisibility(true, true, false, e)
      } else {
        if (this.state.isHvisible === true) {
          this.toggletheVisibility(true, false, true, e)
        } else {
          this.toggletheVisibility(true, false, false, e)
        }
      }
    }
  }

  EditorplusClick(e) {
    console.log(this)
    if (this.state.isDvisible === true && this.state.isHvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isDvisible === true) {
        this.toggletheVisibility(true, true, false, e)
      } else {
        if (this.state.isHvisible === true) {
          this.toggletheVisibility(false, true, true, e)
        } else {
          this.toggletheVisibility(false, true, false, e)
          console.log(this)
        }
      }
    }
  }

  HistoryplusClick(e) {
    if (this.state.isDvisible === true && this.state.isEvisible === true) {
      this.toggletheVisibility(true, true, true, e)
    } else {
      if (this.state.isDvisible === true) {
        this.toggletheVisibility(true, false, true, e)
      } else {
        if (this.state.isEvisible === true) {
          this.toggletheVisibility(false, true, true, e)
        } else {
          this.toggletheVisibility(false, false, true, e)
        }
      }
    }
  }

  render() {
    const { visibleD } = this.state
    const { visibleE } = this.state
    const { visibleH } = this.state

    return (
      <div style={{ display: 'flex' }}>
        <div style={visibleD}>
          <Menu attached="top" size="mini">
            <Menu.Item name="details">
              <Button
                name="details"
                active={'details'}
                onClick={this.DetailsClick}
              >
                {' '}Details{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="editor">
              <Button name="editor" onClick={this.EditorClick}>
                Editor{' '}
              </Button>
              <Button
                name="2"
                icon="plus"
                onClick={this.EditorplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="history">
              <Button name="history" onClick={this.HistoryClick}>
                History{' '}
              </Button>
              <Button
                name="3"
                icon="plus"
                onClick={this.HistoryplusClick.bind(this)}
              />
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
            <Menu.Item name="details">
              <Button name="details" onClick={this.DetailsClick}>
                Details{' '}
              </Button>
              <Button
                name="1"
                icon="plus"
                onClick={this.DetailsplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="editor">
              <Button
                name="editor"
                active={'editor'}
                onClick={this.EditorClick}
              >
                Editor{' '}
              </Button>
            </Menu.Item>
            <Menu.Item name="history">
              <Button name="history" onClick={this.HistoryClick}>
                History{' '}
              </Button>
              <Button
                name="3"
                icon="plus"
                onClick={this.HistoryplusClick.bind(this)}
              />
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
            <Menu.Item name="details">
              <Button name="details" onClick={this.DetailsClick}>
                Details{' '}
              </Button>
              <Button
                name="1"
                icon="plus"
                onClick={this.DetailsplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="editor">
              <Button name="editor" onClick={this.EditorClick}>
                Editor{' '}
              </Button>
              <Button
                name="2"
                icon="plus"
                onClick={this.EditorplusClick.bind(this)}
              />
            </Menu.Item>
            <Menu.Item name="history">
              <Button
                name="history"
                active={'history'}
                onClick={this.HistoryClick}
              >
                History{' '}
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
      </div>
    )
  }
}
export { Content }

export default Content
