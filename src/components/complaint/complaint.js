import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const complaintApi = 'http://localhost:5000/complaint';


function Complaint() {
	const [lists, setList] = useState([]);
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [telephone, setTelephone] = useState([]);
    const [complaint, setComplaint] = useState([]);




function handleSubmit(e){
    e.preventDefault();
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

function handleDelete() {
    const _deleteItems = async (id) => {
        let item = lists.find((i) => i._id === id) || {};
        console.log(id);

        if (item._id) {
            item.complete = !item.complete;
            let url = `${complaintApi}/${id}`;
    
            const results = await axios.delete(url);
            // console.log(results);
            setList(lists.filter((listItem) => listItem._id !== results.data._id));
        }
    };
    _deleteItems()
}








useEffect(() => {
	const _getComplaint = async () => {
		const results = await axios.get(complaintApi);
		setList([...results.data]);
	};

    _getComplaint();
}, [])



    
  return (
    <>

<Form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <Form.Label>
          <span>Name</span>
          <Form.Control
            name="name"
            value={name}
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}/>
        </Form.Label>
        <Form.Label>
          <span>Email</span>
          <Form.Control
            name="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}/>  
        </Form.Label> 
         <Form.Label>
          <span>Telephone</span>
          <Form.Control 
          type="text"
          name="telephone"
          value={telephone}
          placeholder="Enter Your Telephone"
          onChange={(e) => setTelephone(e.target.value)}/> 
        </Form.Label>
        <Form.Label>
          <span>Complaint</span>
          <Form.Control
           as="textarea" rows={3}
           type="text" 
           name="complaint" 
           value={complaint}
           placeholder="Enter Your Complaint" 
           onChange={(e) => setComplaint(e.target.value)}/> 
        </Form.Label>
        <Button type="submit">Add Item</Button>

        </Form>



       <ul>
      {lists.map((item) => (
        <Card 
          key={item._id}
        >
          <Card.Header>
            <Button style={{ marginLeft: '226px' }} variant="danger" className='delete' onClick={() => handleDelete(item._id)}>X</Button>
          </Card.Header>
          <Card.Text >
           {item.name}
          </Card.Text>
          <Card.Text >
           {item.email}
          </Card.Text>
          <Card.Text >
           {item.telephone}
          </Card.Text>
          <Card.Text >
           {item.complaint}
          </Card.Text>
        </Card>
      ))}
    </ul>
    
        </>
  );
}





export default Complaint;