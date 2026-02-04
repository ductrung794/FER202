import React from 'react';
import { Card } from 'react-bootstrap';
function News({ newItem }) { 
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={newItem.images} />
            <Card.Body>
                <Card.Title>{newItem.title}</Card.Title>
                <Card.Text>{newItem.description}</Card.Text>
            </Card.Body>    
        </Card>
    );
}
export default News;