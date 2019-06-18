import React from 'react'
import { PassProps } from '../utils/PassProps'

export default props =>
        <div>
            {PassProps(props)}
            {/*React.Children.map(props.children, compFilho => {
              return React.cloneElement(compFilho, { ...props })
            })*/}
            {/*React.cloneElement(props.children,{sobrenome : props.sobrenome})*/}
            {/*props.children*/}
        </div>
