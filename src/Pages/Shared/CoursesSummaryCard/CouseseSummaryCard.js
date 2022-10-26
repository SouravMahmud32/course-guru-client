import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CouseseSummaryCard = ({ courses }) => {
    const {_id, title, image_url, rating, details} = courses;
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
      <Card.Footer className="">
        <div>
            <FaStar className='text-warning me-2'></FaStar>
            <span>{rating?.number}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CouseseSummaryCard;
