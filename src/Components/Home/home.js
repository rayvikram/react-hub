import React from "react";
import { Link } from "@reach/router";
import { Card, Button } from "react-bootstrap";

import URLS from "Routes/urls";

export default function Home() {
  const HomeComps = [
    {
      title: "Bank Details",
      btnText: "View",
      text: "View bank details of ifsc code",
      url: URLS.IFSC.url,
    },
  ];
  return (
    <div className="home">
      {HomeComps.map((item) => (
        <Card key={item.title} style={{ width: "18rem", margin: "5px" }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.text}</Card.Text>
            <Link to={item.url}>
              <Button variant="primary">{item.btnText}</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
