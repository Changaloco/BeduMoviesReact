import React from 'react';
import Cardmovie from '../Cardmovie';

export default function MovieSearch(props) {
  return (
    <Cardmovie style={{
        marginTop: "10px",
        marginBottom: "10px",
    }} peli={props.peli} />
  )
}
