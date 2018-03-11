import React from 'react'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'dotted',
      padding: 20,
      borderWidth: 2,
      color: 'red'
    }
    return (
      <div style={style}>
        render here notification...
      </div>
    )
  }
}

export default Notification
