import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Courses = () => {
  const courses = useLoaderData();
  const { title, details, price, image_url, duration } = courses;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <div>
        <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <h2>Fees: ${price}</h2>
          <h4>Duration: {duration}</h4>
          <Button variant="danger">Enroll Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Courses;
