import React, { useEffect, useState } from "react";
import useSpinner from "Components/UI/Spinner";
import Axios from "axios";
import { toast } from "react-toastify";
import {
  InputGroup,
  FormControl,
  Button,
  Card,
  Container,
} from "react-bootstrap";

export default function Ifsc({ id }) {
  const [, setSpinner, Spinner] = useSpinner(false);
  const [ifsc, setIfsc] = useState(id || "");
  const [data, setData] = useState(null);

  useEffect(() => {
    Axios.get;
  }, [setSpinner]);

  const clickHandler = () => {
    setSpinner(true);
    Axios.get(`https://ifsc.razorpay.com/${ifsc}`)
      .then((res) => {
        setData(res.data);
        setSpinner(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("Invalid IFSC");
        setSpinner(false);
      });
  };
  return (
    <Container className="justify-content-md-center">
      <Card
        style={{
          width: "30rem",
          margin: "auto",
          textAlign: "left",
          padding: "1rem",
        }}
      >
        <Card.Title>Bank Details By Ifsc</Card.Title>
        <Card.Body>
          <InputGroup>
            <FormControl
              value={ifsc}
              onChange={(e) => setIfsc(e.target.value)}
              placeholder="IFSC of bank"
              aria-label="BANK IFSC"
            />
            <InputGroup.Append>
              <Button onClick={clickHandler}>View</Button>
            </InputGroup.Append>
          </InputGroup>
          {data ? (
            <div>
              <Card.Text>
                {Object.entries(data).map(([key, value]) => (
                  <span key={key}>
                    <strong>{`${key}`}</strong>: {`${value}`}
                    <br />
                  </span>
                ))}
              </Card.Text>
            </div>
          ) : null}
          <Spinner />
        </Card.Body>
      </Card>
    </Container>
  );
}
