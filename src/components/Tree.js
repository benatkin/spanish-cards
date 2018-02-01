import React from 'react'
import './Tree.css'

const Tree = ({data}) => {
  return (
    <div>
      {
        Object.entries(data).map(([referenceWord, value]) => {
          const word = Array.isArray(value) ? value[0] : value
          const children = Array.isArray(value) ? value[1] : []
          return (
            <div style={{lineHeight: 1.4}}>
              <em style={{paddingRight: '0.8em'}}>{referenceWord}</em>{word}
              {
                children && (
                  <div style={{paddingLeft: '12px'}}>
                    <Tree data={children} />
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Tree