import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const courses = useLoaderData();
  const {title, details, price, image_url} = courses;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <h2>Fees: ${price}</h2>
        <Button variant="danger">Enroll Now</Button>
      </Card.Body>
    </Card>
  );
};

export default Courses;
