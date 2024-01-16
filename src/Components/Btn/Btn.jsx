import React from 'react'

const Btn = (props) => {
  return (
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
        border: props.border,
        cursor: 'pointer'
      }}
    >
      {props.titulo}
    </div>
  )
}

export default Btn
