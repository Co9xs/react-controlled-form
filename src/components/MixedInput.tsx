import * as React from 'react'
import { useState } from "react"

type Props = JSX.IntrinsicElements['input'] & {}

// inputの状態はDOMに持たせ、onBlurハンドラでstateを更新し同期することで入力時のパフォーマンスを担保する
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