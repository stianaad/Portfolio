import React from 'react';
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse';
import {makeStyles} from '@material-ui/core/styles'
import "./test.css"

export default function Test(){
  return(
    <div>
        <div className="dot" />
        <div className="ntnu"> NTNU </div>
        <div className="rightbottom"/>
        <div className="vertline"/>
        <div className="right"/>
        <div className="rightvertline" />
    </div>
  )
}
/**
 * <div className="right"/>
        <div className="rightbottom"/>
        <div className="rightvertline" />
        <div className="dot" />
        <div className="ntnu"> NTNU </div>
 */