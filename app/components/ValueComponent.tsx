
import React from 'react'
import styles from '@/app/styles/Value.module.css'
type Props = {
  value:number
}

export default function ValueComponent(props: Props) {
  return (
    <div className={styles.valueContainer}>{props.value}</div>
  )
}