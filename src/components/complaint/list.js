import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import {PaginationContext} from '../context/pagination-context.js';


function ComplaintList(props) {
  const pagination = useContext(PaginationContext);
console.log("ssssssssssssssssssssssssss",pagination);
  return (
    <ul>
      {pagination.current.map((item) => (
        <Card 
          className={`complete-${item.complete} complete-${item.complete}- card`}
          key={item._id}
        >
          <Card.Header>
            <Badge pill variant={item.complete ? 'danger' : 'success'}>
              {item.complete ? 'Complete' : 'Pending'}
            </Badge>
            <strong style={{ marginLeft: '20px' }} >
							{item.assignee}
						</strong>
            <Button style={{ marginLeft: '226px' }} variant="danger" className='delete' onClick={() => props.handleDelete(item._id)}>X</Button></Card.Header>
          <Card.Text onClick={() => props.handleComplete(item._id)}>
            {"      "}{item.text}

            <strong className="text-muted">Difficulty:{item.difficulty} </strong>

          </Card.Text>
        </Card>
      ))}
    </ul>
  );
}


export default ComplaintList;