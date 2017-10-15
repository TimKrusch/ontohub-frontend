import React, { Component } from 'react'
import {
  Icon,
  Menu,
  Modal,
  Header,
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

{
  /*import { Content } from '.'
  import { Context } from '.'*/
}

const branches = [
  { key: 'master', text: 'master', value: 'master' },
  { key: 'branch_test1', text: 'branch_test1', value: 'branch_test1' },
  { key: 'branch_test2', text: 'branch_test2', value: 'branch_test2' }
]

{
  /*


const testmain = ({ match }) => (
  <Router>
    <div style={{ minHeight: '90vh', background: '#4B4C4D' }}>
      {' '}
      <Menu borderless attached>
        <Button.Group>
          <Button
            basic
            content="Filebrowser"
            icon="sitemap"
            as={Link}
            to={`${match.url}/tree`}
          />
        </Button.Group>
        <Menu.Item content="Branches:" />
        <Dropdown basic options={branches} defaultValue="master" simple item />

        <Menu.Item disabled />

        <Menu.Item>
          <Breadcrumb>
            <Breadcrumb.Section link as={Link} to={`/${match.params.user}`}>
              {match.params.user}
            </Breadcrumb.Section>
            <Breadcrumb.Divider />
            <Breadcrumb.Section active>{match.params.repo}</Breadcrumb.Section>
          </Breadcrumb>
        </Menu.Item>
        <Menu.Menu position="right">
          <Button.Group floated="right">
            <Button basic>
              <Icon.Group>
                <Icon name="window restore" />
                <Icon corner name="plus" />
              </Icon.Group>
              open Context
            </Button>
            <CreateFileModal />
            <CreateFolderModal />
            <UploadFileModal />
            <DownloadFileModal />
          </Button.Group>
        </Menu.Menu>
      </Menu>
      <div>
        <Route path={`${match.url}/tree`} component={WithFileBrowser} />
        <Route path={`${match.url}`} component={WithOutFileBrowser} />
      </div>
    </div>
  </Router>
)

const WithOutFileBrowser = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}`} component={Contentcomponent} />
    </div>
  </div>
)

const WithFileBrowser = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: '2', marginTop: '2px', marginRight: '4px' }}>
      <Segment attached style={{ height: '80vh' }}>
        <Filebrowser />
      </Segment>
    </div>
    /*
    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}/Details`} component={DetailsMenu} />
      <Route path={`${match.url}/Editor`} component={EditorMenu} />
      <Route path={`${match.url}/History`} component={HistoryMenu} />
      <Route
        path={`${match.url}/Details+Editor`}
        component={DetailsEditorMenu}
      />
      <Route
        path={`${match.url}/Details+History`}
        component={DetailsHistoryMenu}
      />
      <Route
        path={`${match.url}/Editor+History`}
        component={EditorHistoryMenu}
      />
      <Route
        path={`${match.url}/Details+Editor+History`}
        component={DetailsEditorHistoryMenu}
      /></div>
    
    
      *

    <div style={{ flex: '8', marginTop: '2px', minHeight: '80vh' }}>
      <Route path={`${match.url}`} component={Contentcomponent} />
    </div>
  </div>
)

const Contentcomponent = ({ match }) => {
  var pathname = '/Details'

  {
    /*
these are the functions to decide the
path from the menu 

*

  function contentpathdecide_detailsplus(contentpath) {
    if (contentpath == '/Details') {
      contentpath = '/Details'
    } else {
      if (contentpath == '/Editor') {
        contentpath = '/Details+Editor'
      } else {
        if (contentpath == '/History') {
          contentpath = '/Details+History'
        } else {
          if (contentpath == '/Details+History') {
            contentpath = '/Details+History'
          } else {
            if (contentpath == '/Details+Editor') {
              contentpath = '/Details+Editor'
            } else {
              if (contentpath == '/Editor+History') {
                contentpath = '/Details+Editor+History'
              }
            }
          }
        }
      }
    }
    pathname = contentpath
    return pathname
  }

  function contentpathdecide_editplus(contentpath) {
    if (contentpath == '/Details') {
      contentpath = '/Details+Editor'
    } else {
      if (contentpath == '/Editor') {
        contentpath = '/Editor'
      } else {
        if (contentpath == '/History') {
          contentpath = '/Editor+History'
        } else {
          if (contentpath == '/Details+History') {
            contentpath = '/Details+Editor+History}'
          } else {
            if (contentpath == '/Details+Editor') {
              contentpath = '/Details+Editor'
            } else {
              if (contentpath == '/Editor+History') {
                contentpath = '/Editor+History'
              }
            }
          }
        }
      }
    }
    pathname = contentpath
    return pathname
  }

  function contentpathdecide_histplus(contentpath) {
    if (contentpath == '/Details') {
      contentpath = '/Details+History'
    } else {
      if (contentpath == '/Editor') {
        contentpath = '/Editor+History'
      } else {
        if (contentpath == '/History') {
          contentpath = '/History'
        } else {
          if (contentpath == '/Details+History') {
            contentpath = '/Details+History'
          } else {
            if (contentpath == '/Details+Editor') {
              contentpath = '/Details+Editor+History'
            } else {
              if (contentpath == '/Editor+History') {
                contentpath = '/Editor+History'
              }
            }
          }
        }
      }
    }
    pathname = contentpath
    return pathname
  }
  return (
    <div>
      {/* 
      
      Routes bei denen aber die url nicht korrekt geändert wird
      
      
      <div>
      <Route path={`${match.url}/Details`} component={DetailsMenu} />
      <Route path={`${match.url}/Editor`} component={EditorMenu} />
      <Route path={`${match.url}/History`} component={HistoryMenu} />
      <Route
        path={`${match.url}/Details+Editor`}
        component={DetailsEditorMenu}
      />
      <Route
        path={`${match.url}/Details+History`}
        component={DetailsHistoryMenu}
      />
      <Route
        path={`${match.url}/Editor+History`}
        component={EditorHistoryMenu}
      />
      <Route
        path={`${match.url}/Details+Editor+History`}
        component={DetailsEditorHistoryMenu}
      />
    </div>*/
}

{
  /*
      Routes bei denen url korrekt geändert wird, aber funktionsweise nicht korrekt


      <div style={{ display: 'flex' }}>
        <Menu attached size="mini">
          <Menu.Item name="details">
            <Button name="details" as={Link} to={`${match.url}/Details`}>
              Details
            </Button>
          </Menu.Item>
          <Menu.Item name="editor">
            <Button name="editor" as={Link} to={`${match.url}/Editor`}>
              Editor{' '}
            </Button>
            <Button
              name="2"
              icon="plus"
              as={Link}
              to={`${match.url}/Details+Editor`}
            />
          </Menu.Item>
          <Menu.Item name="history" >
            <Button name="history" as={Link} to={`${match.url}/History`}>History </Button>
            <Button
              name="3"
              icon="plus"
              as={Link}
              to={`${match.url}/Details+History`}
            />
          </Menu.Item>
        </Menu>
      </div>
*

      <div style={{ display: 'flex' }}>
        <Menu attached size="mini">
          <Menu.Item>
            <Button name="details" as={Link} to={`${match.url}/Details`}>
              Details
            </Button>
            <Button
              name="1"
              icon="plus"
              onClick={contentpathdecide_detailsplus(pathname)}
            />
          </Menu.Item>
          <Menu.Item>
            <Button name="editor" as={Link} to={`${match.url}/Editor`}>
              Editor{' '}
            </Button>
            <Button
              name="2"
              icon="plus"
              onClick={contentpathdecide_editplus(pathname)}
            />
          </Menu.Item>
          <Menu.Item>
            <Button name="history" as={Link} to={`${match.url}/History`}>
              History{' '}
            </Button>
            <Button
              name="3"
              icon="plus"
              onClick={contentpathdecide_histplus(pathname)}
            />
          </Menu.Item>
        </Menu>
      </div>

      <div>
        <Route path={`${match.url}/Details`} component={Detailsconst} />
        <Route path={`${match.url}/Editor`} component={Editorconst} />
        <Route path={`${match.url}/History`} component={Historyconst} />
        <Route path={`${match.url}/Details+Editor`} component={DetailsEditor} />
        <Route
          path={`${match.url}/Details+History`}
          component={DetailsHistory}
        />
        <Route path={`${match.url}/Editor+History`} component={EditorHistory} />
        <Route
          path={`${match.url}/Details+Editor+History`}
          component={DetailsEditorHistory}
        />
      </div>

      {/* 
    <Route path={`${match.url}/:onepanel`} component={OnePanel} />
    <Route path={`${match.url}/:panelleft+:panelright`} component={TwoPanel} />
    <Route
      path={`${match.url}/:panelleft+:panelmid+:panelright`}
      component={ThreePanel}
    />*
    </div>
  )
}

{
  /*
const OnePanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <match.params.onepanel />
  </div>
)

const TwoPanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <match.params.panelleft />
    <match.params.panelright />
  </div>
)
const ThreePanel = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
    <History />
  </div>
)
*

const Detailsconst = ({ match }) => {
  Contentcomponent.pathname = '/Details'

  return (
    <div style={{ display: 'flex' }}>
      <Details />
    </div>
  )
}
const Editorconst = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Editor />
  </div>
)
const Historyconst = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <History />
  </div>
)

const DetailsEditor = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
  </div>
)
const DetailsHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <History />
  </div>
)

const EditorHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Editor />
    <History />
  </div>
)
const DetailsEditorHistory = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Details />
    <Editor />
    <History />
  </div>
)

{
  /*following const are the specific menus 
for all combinations*
const DetailsMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)
const EditorMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Editor+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)

const HistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Editor+History`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

const DetailsEditorMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
        <Button
          name="3"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor+History`}
        />
      </Menu.Item>
    </Menu>
  </div>
)
const DetailsHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
        <Button
          name="2"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+Editor+History`}
        />
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

const EditorHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
        <Button
          name="1"
          icon="plus"
          as={Link}
          to={`${match.url}/Details+History`}
        />
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)
const DetailsEditorHistoryMenu = ({ match }) => (
  <div style={{ display: 'flex' }}>
    <Menu attached size="mini">
      <Menu.Item name="details">
        <Button name="details" as={Link} to={`${match.url}/Details`}>
          Details
        </Button>
      </Menu.Item>
      <Menu.Item name="editor">
        <Button name="editor" as={Link} to={`${match.url}/Editor`}>
          Editor{' '}
        </Button>
      </Menu.Item>
      <Menu.Item name="history">
        <Button name="history" as={Link} to={`${match.url}/History`}>
          History{' '}
        </Button>
      </Menu.Item>
    </Menu>
  </div>
)

*/
}

const testmain = ({ match }) => {
  return (
    <Router>
      <Route path={`${match.url}`} component={test} />
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

class test extends Component {
  constructor(props) {
    super()

    this.state = {
      path: props.match.path,
      isFBvisible: 1,
      isCxvisible: 0,
      visibleFB: {
        display: 'inline',
        flex: '2',
        marginRight: '4px',
        marginTop: '2px'
      },
      visibleC: {
        display: 'inline',
        flex: '8',
        marginTop: '2px'
      },
      visibleCx: {
        display: 'none',
        flex: '4',
        name: 'add Context',
        icon1: 'window restore',
        icon2: 'plus',
        marginLeft: '4px',
        marginTop: '2px'
      }
    }
  }

  toggleFB(e) {
    if (this.state.isFBvisible === 1) {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '6',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '4',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '1',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    } else {
      if (this.state.isCxvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '5',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '3',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '8',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    }
  }

  toggleCx(e) {
    if (this.state.isCxvisible === 0) {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 1,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '5',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '3',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 1,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '6',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'inline',
            flex: '4',
            name: 'close Context',
            icon1: 'window close outline',
            icon2: 'null',
            marginLeft: '4px',
            marginTop: '2px'
          }
        })
      }
    } else {
      if (this.state.isFBvisible === 1) {
        this.setState({
          isFBvisible: 1,
          isCxvisible: 0,
          visibleFB: {
            display: 'inline',
            flex: '2',
            marginRight: '4px',
            marginTop: '2px'
          },
          visibleC: {
            display: 'inline',
            flex: '8',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      } else {
        this.setState({
          isFBvisible: 0,
          isCxvisible: 0,
          visibleFB: { display: 'none', flex: '1' },
          visibleC: {
            display: 'inline',
            flex: '10',
            marginTop: '2px'
          },
          visibleCx: {
            display: 'none',
            flex: '1',
            name: 'add Context',
            icon1: 'window restore',
            icon2: 'plus'
          }
        })
      }
    }
  }

  render() {
    const { visibleFB } = this.state
    const { visibleC } = this.state
    const { visibleCx } = this.state

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
                  .charAt(0) == 'F'
                  ? this.props.location.pathname.replace('Filebrowser+', '')
                  : `${this.props.match
                      .url}/Filebrowser+${this.props.location.pathname.replace(
                      `${this.props.match.url}/`,
                      ''
                    )}`
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
              <Breadcrumb.Section
                link
                as={Link}
                to={`/${this.props.match.params.user}`}
              >
                {this.props.match.params.user}
              </Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section active>
                {this.props.match.params.repo}
              </Breadcrumb.Section>
            </Breadcrumb>

            {/*<Breadcrumb>
              <Breadcrumb.Section link>user</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section acitve>Fixtures</Breadcrumb.Section>
            </Breadcrumb>*/}
          </Menu.Item>
          <Menu.Menu position="right">
            <Button.Group floated="right">
              <Button
                basic
                as={Link}
                to={
                  this.props.location.pathname.search('///git') == -1
                    ? this.props.location.pathname.search('///prove') == -1
                      ? this.props.location.pathname.search('///translation') ==
                        -1
                        ? `${this.props.location.pathname}///prove`
                        : this.props.location.pathname.replace(
                            '///translation',
                            ''
                          )
                      : this.props.location.pathname.replace('///prove', '')
                    : this.props.location.pathname.replace('///git', '')
                }
              >
                <Icon.Group>
                  <Icon
                    name={
                      this.props.location.pathname.search('///git') == -1
                        ? this.props.location.pathname.search('///prove') == -1
                          ? this.props.location.pathname.search(
                              '///translation'
                            ) == -1
                            ? 'window restore'
                            : 'window close outline'
                          : 'window close outline'
                        : 'window close outline'
                    }
                  />
                  <Icon
                    corner
                    name={
                      this.props.location.pathname.search('///git') == -1
                        ? this.props.location.pathname.search('///prove') == -1
                          ? this.props.location.pathname.search(
                              '///translation'
                            ) == -1
                            ? 'plus'
                            : 'null'
                          : 'null'
                        : 'null'
                    }
                  />
                </Icon.Group>
                {this.props.location.pathname.search('///git') == -1
                  ? this.props.location.pathname.search('///prove') == -1
                    ? this.props.location.pathname.search('///translation') ==
                      -1
                      ? 'add Context'
                      : 'close Context'
                    : 'close Context'
                  : 'close Context'}
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

export { testmain }

export default testmain
