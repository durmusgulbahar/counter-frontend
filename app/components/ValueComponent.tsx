'use client'
import React, { useEffect } from 'react'
import styles from '@/app/styles/Value.module.css'
import { getValue } from '../services/GetValue'
import { useStore } from '../middleware/useStore'
import Button, { CircularProgress } from "@mui/material/";


export default function ValueComponent() {
   const { value, fetchValue } = useStore();

  useEffect(() => {
    fetchValue();
  }, [fetchValue]);
    
  return (
    <div className={styles.valueContainer}>{value?value:<CircularProgress/>}</div>
  )
}