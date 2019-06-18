import React from 'react'
import ReactDOM from 'react-dom'

/*
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB } from './componentes/DoisComponentes'
import MultiElementos from './componentes/MultiElemento'
*/
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
  <div>
    <Familia sobrenome="burger" >
      <Membro nome="jose"  />
        <Membro nome="jose"  />
          <Membro nome="jose"  />
            <Membro nome="jose"  />
    </Familia>
  </div>
  , elemento)
  /*  <MultiElementos />
      <PrimeiroComponente valor='teste 123'/>
      <CompA valor="aaaaa" />
      <CompB valor="bbbbb"/>
  */
