import React, { Component } from 'react'
import {
  Icon,
  Menu,
  Modal,
  Dropdown,
  Button,
  Breadcrumb,
  Segment
} from 'semantic-ui-react'
import { Details } from '.'
import { Editor } from '.'
import { History } from '.'

import { Prove } from '.'
import { Translation } from '.'
import { GitCommit } from '.'
import { Filebrowser } from '.'
import { CreateFileModal } from '.'
import { CreateFolderModal } from '.'
import { UploadFileModal } from '.'
import { DownloadFileModal } from '.'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]

const main = ({ match }) => {
  return (
    <Router>
      <Route path={`${match.url}`} component={menuline} />
    </Router>
  )
}

const Content = ({ match }) => {
  console.log(match)

  return (
    <div
      style={{
        display: 'inline',
        flex: '8',
        marginTop: '2px'
      }}
    >
      <div style={{ flex: '8', minHeight: '80vh' }}>
        {match.params.Content == 'Details' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Details />
            </div>
          </div>
        ) : match.params.Content == 'Editor' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Editor />
            </div>
          </div>
        ) : match.params.Content == 'History' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <History />
            </div>
          </div>
        ) : match.params.Content == 'Details+Editor' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Details />
              <Editor />
            </div>
          </div>
        ) : match.params.Content == 'Details+History' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Details />
              <History />
            </div>
          </div>
        ) : match.params.Content == 'Editor+History' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
                <Button
                  icon="plus"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details+Editor+History')
                    .replace(':Context', match.params.Context)}`}
                />
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Editor />
              <History />
            </div>
          </div>
        ) : match.params.Content == 'Details+Editor+History' ? (
          <div>
            <Menu attached size="mini">
              <Menu.Item name="details">
                <Button
                  name="details"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Details')
                    .replace(':Context', match.params.Context)}`}
                >
                  Details
                </Button>
              </Menu.Item>
              <Menu.Item name="editor">
                <Button
                  name="editor"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'Editor')
                    .replace(':Context', match.params.Context)}`}
                >
                  Editor{' '}
                </Button>
              </Menu.Item>
              <Menu.Item name="history">
                <Button
                  name="history"
                  as={Link}
                  to={`${match.path
                    .replace(':Content', 'History')
                    .replace(':Context', match.params.Context)}`}
                >
                  History{' '}
                </Button>
              </Menu.Item>
            </Menu>
            <div style={{ display: 'flex' }}>
              <Details />
              <Editor />
              <History />
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

const Context = ({ match }) => {
  return (
    <div
      style={{
        display: 'inline',
        flex: '7',
        name: 'close Context',
        icon1: 'window close outline',
        icon2: 'null',
        marginLeft: '4px',
        marginTop: '2px'
      }}
    >
      {match.params.Context == 'prove' ? (
        <div>
          <Menu attached size="mini">
            <Menu.Item>
              <Button
                name="prove"
                active
                content="Prove"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'prove')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="translation"
                content="Translation"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'translation')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="gitcommit"
                content="Git Commit"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'git')}`}
              />
            </Menu.Item>
          </Menu>
          <div>
            <Prove />
          </div>
        </div>
      ) : match.params.Context == 'git' ? (
        <div>
          <Menu attached size="mini">
            <Menu.Item>
              <Button
                name="prove"
                content="Prove"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'prove')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="translation"
                content="Translation"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'translation')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="gitcommit"
                active
                content="Git Commit"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'git')}`}
              />
            </Menu.Item>
          </Menu>
          <div>
            <GitCommit />
          </div>
        </div>
      ) : match.params.Context == 'translation' ? (
        <div>
          <Menu attached size="mini">
            <Menu.Item>
              <Button
                name="prove"
                content="Prove"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'prove')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="translation"
                active
                content="Translation"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'translation')}`}
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                name="gitcommit"
                content="Git Commit"
                as={Link}
                to={`${match.path
                  .replace(':Content', match.params.Content)
                  .replace(':Context', 'git')}`}
              />
            </Menu.Item>
          </Menu>
          <div>
            <Translation />
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}

const onlyCnt = ({ match }) => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'inline',
          flex: '5',
          marginTop: '2px'
        }}
      >
        <Content match={match} />
      </div>
    </div>
  )
}

const withFb = ({ match }) => {
  console.log(match)
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'inline',
          flex: '2',
          marginRight: '4px',
          marginTop: '2px',
          minHeight: '80vh'
        }}
      >
        <Segment
          attached
          style={{
            minHeight: '80vh'
          }}
        >
          <Filebrowser />
        </Segment>
      </div>
      <Content match={match} />
    </div>
  )
}
const withCx = ({ match }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Content match={match} />

      <Context match={match} />
    </div>
  )
}

const withFbCx = ({ match }) => {
  console.log(match)

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'inline',
          flex: '3',
          marginRight: '4px',
          marginTop: '2px',
          minHeight: '80vh'
        }}
      >
        <Segment
          attached
          style={{
            minHeight: '80vh'
          }}
        >
          <Filebrowser />
        </Segment>
      </div>
      <Content match={match} />

      <Context match={match} />
    </div>
  )
}

class menuline extends Component {
  render() {
    console.log(this)
    return (
      <div style={{ minHeight: '90vh', background: '#4B4C4D' }}>
        {' '}
        <Menu borderless attached>
          <Button.Group>
            <Button
              basic
              content="Filebrowser"
              as={Link}
              to={
                this.props.location.pathname
                  .replace(`${this.props.match.url}/`, '')
                  .charAt(0) == 'F' ? (
                  this.props.location.pathname.replace('Filebrowser+', '')
                ) : (
                  `${this.props.match
                    .url}/Filebrowser+${this.props.location.pathname.replace(
                    `${this.props.match.url}/`,
                    ''
                  )}`
                )
              }
              icon="sitemap"
            />
          </Button.Group>
          <Menu.Item content="Branches:" />
          <Dropdown
            basic
            options={branches}
            defaultValue="master"
            simple
            item
          />

          <Menu.Item disabled />

          <Menu.Item>
            <Breadcrumb>
              <Breadcrumb.Section link as={Link} to={'/ada'}>
                ada
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section acitve>Fixtures</Breadcrumb.Section>
            </Breadcrumb>
          </Menu.Item>
          <Menu.Menu position="right">
            <Button.Group floated="right">
              <Button
                basic
                as={Link}
                to={
                  this.props.location.pathname.search('///git') ==
                  -1 ? this.props.location.pathname.search('///prove') ==
                  -1 ? this.props.location.pathname.search('///translation') ==
                  -1 ? (
                    `${this.props.location.pathname}///prove`
                  ) : (
                    this.props.location.pathname.replace('///translation', '')
                  ) : (
                    this.props.location.pathname.replace('///prove', '')
                  ) : (
                    this.props.location.pathname.replace('///git', '')
                  )
                }
              >
                <Icon.Group>
                  <Icon
                    name={
                      this.props.location.pathname.search('///git') ==
                      -1 ? this.props.location.pathname.search('///prove') ==
                      -1 ? this.props.location.pathname.search(
                        '///translation'
                      ) == -1 ? (
                        'window restore'
                      ) : (
                        'window close outline'
                      ) : (
                        'window close outline'
                      ) : (
                        'window close outline'
                      )
                    }
                  />
                  <Icon
                    corner
                    name={
                      this.props.location.pathname.search('///git') ==
                      -1 ? this.props.location.pathname.search('///prove') ==
                      -1 ? this.props.location.pathname.search(
                        '///translation'
                      ) == -1 ? (
                        'plus'
                      ) : (
                        'null'
                      ) : (
                        'null'
                      ) : (
                        'null'
                      )
                    }
                  />
                </Icon.Group>
                {this.props.location.pathname.search('///git') ==
                -1 ? this.props.location.pathname.search('///prove') ==
                -1 ? this.props.location.pathname.search('///translation') ==
                -1 ? (
                  'add Context'
                ) : (
                  'close Context'
                ) : (
                  'close Context'
                ) : (
                  'close Context'
                )}
              </Button>
              <CreateFileModal />
              <CreateFolderModal />
              <UploadFileModal />
              <DownloadFileModal />
            </Button.Group>
          </Menu.Menu>
        </Menu>
        <Switch>
          <Route
            path={`${this.props.match.url}/Filebrowser+:Content///:Context`}
            component={withFbCx}
          />
          <Route
            path={`${this.props.match.url}/Filebrowser+:Content`}
            component={withFb}
          />
          <Route
            path={`${this.props.match.url}/:Content///:Context`}
            component={withCx}
          />
          <Route
            path={`${this.props.match.url}/:Content`}
            component={onlyCnt}
          />
        </Switch>
      </div>
    )
  }
}

export { main }

export default main
