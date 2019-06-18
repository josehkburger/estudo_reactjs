import React from 'react'

export function PassProps(props){
  return React.Children.map(props.children, compFilho => {
    return React.cloneElement(compFilho, { ...props })
    })
}
