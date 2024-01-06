import React from 'react'
import { Link } from 'react-router-dom'

const Btn = (props) => {
  return (
    <Link style={{ textDecoration: props.textDecoration }} to="/login">
      <div
        style={{
          width: props.width,
          height: props.height,
          borderRadius: props.borderRadius,
          color: props.color,
          background: props.background,
          padding: props.padding,
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          borderColor: props.borderColor,
          border: props.border
        }}
      >
        {props.titulo}
      </div>
    </Link>
  )
}

export default Btn
