import React, {ReactElement, useState} from 'react';
import Quote from '../Quote';

export default function Allquotes(props) {
    return(
      <>
        {props.quotes.map((x)=> <Quote key = {x.id} {...x} />)}
      </>
    )
  }