import React, { useEffect, useState } from 'react';
import {Button,Form,Card,Badge} from 'react-bootstrap';
import axios from 'axios';
import './complaint.scss';
import Header from '../header/header';




// Api 
const complaintApi = 'http://localhost:5000/complaint';


function Complaint() {
  // the state for complaint lists.
  const [lists, setList] = useState([]);
  // the state for all form inputs.   
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [telephone, setTelephone] = useState([]);
  const [complaint, setComplaint] = useState([]);



  // handele submint for the form
  function handleSubmit(e) {
    e.preventDefault();
    // post request from api
    const _addItem = async (item) => {
      const postData = {
        name,
        email,
        telephone,
        complaint
      };
      const results = await axios.post(complaintApi, postData);
      setList([...lists, results.data]);
    };
    _addItem();
  }


  // handele delete for the list
  function handleDelete() {
    // delete request from api
    const _deleteItems = async (id) => {
      let item = lists.find((i) => i._id === id) || {};
      console.log(id);

      if (item._id) {
        item.complete = !item.complete;
        let url = `${complaintApi}/${id}`;

        const results = await axios.delete(url);
        setList(lists.filter((listItem) => listItem._id !== results.data._id));
      }
    };
    _deleteItems()
  }



  useEffect(() => {

    // get request from api
    const _getComplaint = async () => {
      const results = await axios.get(complaintApi);
      setList([...results.data]);
    };

    _getComplaint();
  }, [])




  return (
    <>
      <Header />
      {/* complaint form ...... */}
      <Card style={{ marginLeft: '250px', width: '24rem', height: '25rem', padding: '10px' }}>
        <h3>Register your complaint here</h3>
        <Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
          <Form.Label>
            <span>Name</span>
            <Form.Control
              name="name"
              value={name}
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)} />
          </Form.Label>
          <Form.Label>
            <span>Email</span>
            <Form.Control
              name="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)} />
          </Form.Label>
          <Form.Label>
            <span>Telephone</span>
            <Form.Control
              type="text"
              name="telephone"
              value={telephone}
              placeholder="Enter Your Telephone"
              onChange={(e) => setTelephone(e.target.value)} />
          </Form.Label>
          <Form.Label>
            <span>Complaint</span>
            <Form.Control
              as="textarea" rows={3}
              type="text"
              name="complaint"
              value={complaint}
              placeholder="Enter Your Complaint"
              onChange={(e) => setComplaint(e.target.value)} />
          </Form.Label>
          <Button type="submit">Add Item</Button>

        </Form>

      </Card>


      {/* complaints list ...... */}
      <ul className="complists">
        {lists.map((item) => (
          <Card
            className={`complete-${item.complete} complete-${item.complete}- card`}
            key={item._id}
          >
            <Card.Header>
              <Badge pill variant={item.complete ? 'danger' : 'success'}>
                {item.complete ? 'Complete' : 'Pending'}
              </Badge>

              <Button style={{ marginLeft: '226px' }} variant="danger" className='delete' onClick={() => handleDelete(item._id)}>X</Button></Card.Header>
            <Card.Text >
              <strong style={{ marginLeft: '20px' }} >
                {item.name}
              </strong>
            </Card.Text>
            <Card.Text >
              <strong style={{ marginLeft: '20px' }} >
                {item.email}
              </strong>
            </Card.Text>
            <Card.Text >
              <strong style={{ marginLeft: '20px' }} >
                {item.telephone}
              </strong>
            </Card.Text>
            <Card.Text >
              <strong style={{ marginLeft: '20px' }} >
                {item.complaint}
              </strong>
            </Card.Text>
          </Card>
        ))}
      </ul>

    </>
  );
}





export default Complaint;