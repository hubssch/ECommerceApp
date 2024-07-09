import React from 'react';
import { TextInput, Button } from 'react-native';
import styled from 'styled-components/native';

const CheckoutScreen: React.FC = () => {
  return (
    <Container>
      <SectionTitle>Checkout</SectionTitle>
      <Form>
        <Label>Full Name</Label>
        <Input placeholder="John Doe" />
        <Label>Address</Label>
        <Input placeholder="123 Main St" />
        <Label>City</Label>
        <Input placeholder="Anytown" />
        <Label>Credit Card</Label>
        <Input placeholder="1234 5678 9101 1121" />
        <Button title="Confirm Purchase" onPress={() => {/* Confirm purchase functionality */}} />
      </Form>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.View`
  margin-top: 20px;
`;

const Label = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export default CheckoutScreen;
