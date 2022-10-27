import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blogs = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>1. What is cors?</Accordion.Header>
        <Accordion.Body>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </Accordion.Header>
        <Accordion.Body>
          The Firebase is a Backend-as-a-Service (BaaS) that offers the
          developers a wide spectrum of tools and services to develop
          high-quality apps at a much faster pace. Usually, authentication by a
          server entails the use of a user name and password. Other ways to
          authenticate can be through cards, retina scans, voice recognition,
          and fingerprints.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>3. How does the private route work?</Accordion.Header>
        <Accordion.Body>
          The react private route component renders child components ( children
          ) if the user is logged in. If not logged in the user is redirected to
          the /login page with the return url passed in the location state
          property.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          4. What is Node? How does Node work?
        </Accordion.Header>
        <Accordion.Body>
          Node. js is a JavaScript runtime environment that achieves low latency
          and high throughput by taking a “non-blocking” approach to serving
          requests. In other words, Node. js wastes no time or resources on
          waiting for I/O requests to return.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Blogs;
