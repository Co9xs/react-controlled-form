import * as React from 'react'
import { useState } from "react"

type Props = JSX.IntrinsicElements['input'] & {}

export const MixedInput: React.VFC<Props> = () => {
  const [state, setState] = useState({value: ''})
  const handleBlur = e => {
    setState({...state, value: e.target.value})
  }
  return (
    <>
      <input onBlur={handleBlur}/>
      <p>{JSON.stringify(state)}</p>
    </>
  )
}