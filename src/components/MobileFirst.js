import React from 'react'
import Media from 'react-media'

export default ({children}) => {
  const outerDivStyles = {
    backgroundColor: 'black',
    height: '98vh',
    paddingTop: '2vh',
    overflowX: 'hidden'
  }
  const innerDivStyles = {
    position: 'relative',
    margin: '0px auto',
    height: '96vh',
    width: '48vh',
    backgroundColor: 'white',
    overflowX: 'scroll',
    overflowY: 'scroll'
  }
  return (
    <Media query="(min-aspect-ratio: 3/4)">
      {
        matches => (
          matches ? (
            <div style={outerDivStyles}>
              <div style={innerDivStyles}>
                {children}
              </div>
            </div>
          ) : children
        )
      }
    </Media>
  )
}
