// payment/page.js

"use client";
import React, { useState } from "react";
import { Container, Button, Icon, Segment } from "semantic-ui-react";

const PaymentPortal = ({ method }) => (
  <Segment>
    <h2>{method.charAt(0).toUpperCase() + method.slice(1)} Payment Portal</h2>
    <p>
      Enter your {method === "stripe" ? "card details" : `${method} address`}{" "}
      here.
    </p>
    {/* Add more payment form fields here */}
  </Segment>
);

export default function Home() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  const paymentMethods = [
    { name: "bitcoin", color: "orange", icon: "bitcoin" },
    { name: "ethereum", color: "purple", icon: "ethereum" },
    { name: "stripe", color: "blue", icon: "credit card" },
  ];

  return (
    <Container text>
      <h1>Select Payment Method</h1>
      <Button.Group>
        {paymentMethods.map(
          (method) =>
            (!selectedMethod || selectedMethod === method.name) && (
              <Button
                key={method.name}
                color={method.color}
                onClick={() => handleMethodSelect(method.name)}
              >
                <Icon name={method.icon} />{" "}
                {method.name.charAt(0).toUpperCase() + method.name.slice(1)}
              </Button>
            )
        )}
      </Button.Group>
      {selectedMethod && <PaymentPortal method={selectedMethod} />}
    </Container>
  );
}
