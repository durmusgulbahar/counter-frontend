'use client'
import React, { useEffect, useState } from 'react'
import { useLogs } from '../middleware/useLogs';
import LogsTable from '../components/LogsList';
import { CircularProgress } from '@mui/material';

export default function Logs() {
    const { logs, fetchLogs } = useLogs();
    const[loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetchLogs();
        setLoading(false);
      }, [fetchLogs]);
  return (
    <div style={{width:"40%", display:"flex", justifyContent:"center", alignItems:"center"}}>
      
        {loading? <CircularProgress color='error'/> : <LogsTable rows={logs}/>}
      
    </div>
  )
}
