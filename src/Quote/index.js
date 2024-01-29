import React, {ReactElement, useState} from 'react';

export default function Quote(props) {

    return (
      <>
        <div>
          Texte : {props.text}
        </div>
        <div>
          Auteur : {props.author}
        </div>
      </>);
}