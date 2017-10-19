import React, { Component } from 'react'
import { List, Segment } from 'semantic-ui-react'

import FileBrowser from 'react-keyed-file-browser'
import 'react-keyed-file-browser/dist/react-keyed-file-browser.css'

{
  /* 

we used the following query for the test data 

query ($repositoryId: ID!, $revision: ID!) {
  repository(id: $repositoryId) {
    name
    commit(revision: $revision) {
      lsFiles
    }
    owner {
      displayName
    }
  }
}



*/
}

class Filebrowser extends React.Component {
  constructor(props) {
    super()

    this.testdata = {
      data: {
        repository: {
          name: 'Fixtures',
          commit: {
            lsFiles: [
              'icons/ontohub.jpg',
              'icons/ontohub.png',
              'icons/ontohub.svg',
              'new_folder/.gitkeep',
              'pdf/ontohub.pdf',
              'texts/ontohub.txt',
              'texts/ontohub_changed.txt',
              'texts/ontohub_changed_renamed.txt',
              'texts/ontohub_created.txt',
              'texts/ontohub_renamed.txt'
            ]
          },
          owner: {
            displayName: 'Ada Lovelace'
          }
        }
      }
    }

    this.state = {
      files: []
    }
  }

  setFiledata() {
    const filedata = this.testdata.data.repository.commit.lsFiles
    let length = filedata.length
    const files = []

    for (let i = 0; i < length; i++) {
      const file = {
        key: this.testdata.data.repository.name.concat('/', filedata[i])
      }
      files.push(file)
    }

    return files
  }

  render() {
    const data = this.setFiledata()
    return <FileBrowser files={data} />
  }
}
export { Filebrowser }
