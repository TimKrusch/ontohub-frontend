import React, { Component } from 'react'
import {
  Segment,
  Button,
  Menu,
  state,
  handleItemClick,
  List,
  Container,
  Tab,
  Divider
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import styled from 'styled-components'
{
  /* 

we used the following query for the test data 

query ($organizationalUnitID: ID!) {
  organizationalUnit(id: $organizationalUnitID) {
    displayName
    id
    repositories {
      id
      name
      description
      contentType
    }
    
  }
}


query variables
{"organizationalUnitID":"ada"}



*/
}

const Repodiv = styled.div`
  width: 400px;
  height: 100px;
  clear: both;
  border: 1px solid #aaaaaf;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  background: white;
`
const MyRepodiv = styled.div`
  width: 100%;
  height: 100px;
  clear: both;
  padding: 5px;
  margin-bottom: 20px;
  background: white;
`

const RepoTitle = styled.h4`
  font-size: 1.2em;
  text-align: left;
  color: black;
`
const RepoDescription = styled.p`
  font-size: 1em;
  text-align: left;
  color: 2a2a2f;
  margin-left: 1em;
`

const usermain = ({ match }) => {
  {
    /*we added some more example Repositories*/
  }
  const testdata = {
    data: {
      organizationalUnit: {
        displayName: 'Ada Lovelace',
        id: 'ada',
        repositories: [
          {
            id: 'ada/fixtures',
            name: 'Fixtures',
            description: 'This is a fixture repository from the user ada.',
            contentType: 'specification'
          },
          {
            id: 'ada/ExampleOne',
            name: 'Example One',
            description: 'This is a example repository from the user ada.',
            contentType: 'ontology'
          },

          {
            id: 'ada/ExampleTwo',
            name: 'Example Two',
            description: 'This is a example repository from the user ada.',
            contentType: 'model'
          }
        ]
      }
    }
  }
  const MenuTabs = [
    {
      menuItem: 'Overview',
      render: () => (
        <Tab.Pane attached={false} as={Segment} style={{ height: '100vh' }}>
          <Overview />
        </Tab.Pane>
      )
    },
    {
      menuItem: 'My Repositories',
      render: () => (
        <Tab.Pane attached={false} as={Segment} style={{ height: '100vh' }}>
          <MyRepositories />
        </Tab.Pane>
      )
    }
  ]

  const Overview = () => (
    <div>
      <Repodiv>
        <RepoTitle>
          <Link
            to={`${testdata.data.organizationalUnit.repositories[0]
              .id}/Filebrowser+Details`}
          >
            {testdata.data.organizationalUnit.repositories[0].name}
          </Link>
        </RepoTitle>
        <RepoDescription>
          {testdata.data.organizationalUnit.repositories[0].description}
        </RepoDescription>
        <RepoDescription>
          Content Type: {' '}
          {testdata.data.organizationalUnit.repositories[0].contentType}
        </RepoDescription>
      </Repodiv>
    </div>
  )

  const MyRepositories = () => <div>{createMyRepositories()}</div>

  function createMyRepositories() {
    const repo = testdata.data.organizationalUnit.repositories
    let length = repo.length
    const files = []

    for (let i = 0; i < length; i++) {
      const file = (
        <MyRepodiv>
          <RepoTitle>
            {' '}
            <Link
              to={`${testdata.data.organizationalUnit.repositories[i]
                .id}/Filebrowser+Details`}
            >
              {repo[i].name}
            </Link>
          </RepoTitle>
          <RepoDescription>{repo[i].description}</RepoDescription>
          <RepoDescription>
            {' '}
            Content Type: {repo[i].contentType}
          </RepoDescription>
          <Divider />
        </MyRepodiv>
      )
      files.push(file)
    }
    return files
  }
  return (
    <div style={{ display: 'flex', height: '100vh', background: '#4B4C4D' }}>
      <div style={{ flex: '3' }}>
        <div
          style={{
            background: 'white',
            width: '200px',
            height: '200px',
            margin: '50px',
            marginBottom: '20px',
            float: 'right',
            clear: 'both',
            border: '1px solid #aaaaaf',
            borderRadius: '5px'
          }}
        >
          <p style={{ padding: '75px' }}>Picture</p>
        </div>
        <div
          style={{
            background: 'white',
            width: '200px',
            marginRight: '50px',
            float: 'right',
            clear: 'both',
            border: '1px solid #aaaaaf',
            borderRadius: '5px',
            textAlign: 'center'
          }}
        >
          <h3>{testdata.data.organizationalUnit.displayName}</h3>
        </div>
      </div>

      <div
        style={{
          flex: '6',
          marginTop: '50px',
          float: 'Left'
        }}
      >
        <Tab
          style={{ marginRight: '400px' }}
          menu={{
            pointing: 'true',
            color: 'white'
          }}
          panes={MenuTabs}
        />
      </div>
    </div>
  )
}

{
  /*

const user = ({ match }) => (
  <Router>
    <Route path="/:user" component={usermain} />
  </Router>
)

*/
}
export { usermain }
