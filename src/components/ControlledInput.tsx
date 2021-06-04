import * as React from 'react'
import { useState } from "react"

type Props = JSX.IntrinsicElements['input'] & {}

export const ControlledInput: React.VFC<Props> = () => {
  const [state, setState] = useState({value: ''})
  const handleChange = e => {
    setState({...state, value: e.target.value})
  }
  return (
    <>
      <input onChange={handleChange} value={state.value}/>
      { state.value.length > 3 && 
        <p style={{margin: 0, color: 'red'}}>3文字以内にしてください</p>
      }
      <p>{JSON.stringify(state)}</p>
    </>
  )
}