import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CouseseSummaryCard = ({ courses }) => {
    const {_id, title, image_url, details} = courses;
  return (
    <Card className="mb-5">
      <Card.Header>Running Course</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details}
        </Card.Text>
        <Link to={`/courses/${_id}`}><Button variant="primary">Get Premium Access</Button></Link>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

export default CouseseSummaryCard;
