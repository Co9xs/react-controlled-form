import * as React from 'react'
import { useRef } from "react"

type Props = JSX.IntrinsicElements['input'] & {}

export const UncontrolledInput: React.VFC<Props> = () => {
  const ref = useRef<HTMLInputElement>()
  const handleBlur = e => {
   console.log({value: ref.current.value})
  }
  return (
    <>
      <input onBlur={handleBlur} ref={ref}/>
    </>
  )
}