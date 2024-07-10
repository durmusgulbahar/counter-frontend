import React from 'react'
import { getValue } from '../services/GetValue'
type Props = {}

export default async function page({}: Props) {
  const data = await getValue();
  console.log("DATAA",data);
  console.log(typeof data)
  return (
    <div>{data}</div>
  )
}