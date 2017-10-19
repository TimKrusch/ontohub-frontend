import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class Translation extends React.Component {
  render() {
    return (
      <Segment attached>
        <div style={{ minHeight: '70vh' }}>Translation</div>
      </Segment>
    )
  }
}
export { Translation }
