import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div style={{margin:"1rem"}}>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{(props.alert.msg).toUpperCase()}</strong> Check It Out!!!.
        </div>
    </div>
  )
}
