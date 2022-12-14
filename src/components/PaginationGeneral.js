import React from 'react';
import Pagination from 'react-bootstrap/Pagination';


export default function PaginationGeneral(props) {
  return (
    <Pagination>
      <Pagination.Prev onClick={props.prevAction} />
        <Pagination.Item>{props.page}</Pagination.Item>
      <Pagination.Next onClick={props.nextAction} />
    </Pagination>
  )
}
