import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'
import styled from 'styled-components'

export default class Details extends React.Component {
  render() {
    return (
      <div style={{ flex: '2' }}>
        <Segment attached>
          <div style={{ minHeight: '70vh' }}>Details</div>
        </Segment>
      </div>
    )
  }
}
export { Details }
