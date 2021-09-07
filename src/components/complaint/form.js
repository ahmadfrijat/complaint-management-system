import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import useForm from '../hooks/hook-form.js'





function ComplaintForm(props) {

  const [item, handleInputChange, handleSubmit] = useForm(handleForm);
  
  function handleForm(item) {
    props.handleSubmit(item)
  }



  return (
    <>
     <Card style={{ marginLeft: '250px', width: '24rem', height: '25rem' ,padding: '10px' }}>
      <h3>Name</h3>
      <Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <Form.Label>
          <span>Name</span>
          <Form.Control
            name="text"
            placeholder="Enter Your Name"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Email</span>
          <Form.Control
            name="text"
            placeholder="Enter Your Email"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Telephone</span>
          <Form.Control type="text" name="Telephone" placeholder="Enter Your Telephone" onChange={handleInputChange} />
        </Form.Label>
        <Form.Label>
          <span>Complaint</span>
          <Form.Control as="textarea" rows={3} type="text" name="Complaint" placeholder="Enter Your Complaint" onChange={handleInputChange} />
        </Form.Label>
        <Button type="submit">Add Item</Button>
        {/* <button></button> */}
      </Form>
    </Card>
    </>
  );
}



export default ComplaintForm;