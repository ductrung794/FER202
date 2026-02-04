import React from 'react';
import { newLists } from '../data/newList';
import News from '../components/News';
import { Container, Row, Col } from 'react-bootstrap';  
function NewList() {
    return (
        <Container>
            <h2 className="my-4">Latest News</h2>
            <Row>
                {newLists.map((newItem) => (
                    <Col key={newItem.id} sm={12} md={6} lg={4}>
                        <News newItem={newItem} />
                    </Col>  
                ))}
            </Row>
        </Container>
    );
}
export default NewList;