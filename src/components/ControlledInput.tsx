import * as React from 'react'
import { useState } from "react"

type Props = JSX.IntrinsicElements['input'] & {}

// 状態管理をReactで完全に制御している(onChangeハンドラでstateの更新)
export const ControlledInput: React.VFC<Props> = () => {
  const [state, setState] = useState({value: ''})
  const handleChange = e => {
    setState({...state, value: e.target.value})
  }
  return (
    <>
      <input onChange={handleChange} value={state.value}/>
      <p>{JSON.stringify(state)}</p>
    </>
  )
}