import React from 'react';
import { ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';

const CartScreen: React.FC = ({ navigation }) => {
  // Mock cart data
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$100', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$200', quantity: 2 },
  ];

  const total = cartItems.reduce((sum, item) => sum + parseInt(item.price.substring(1)) * item.quantity, 0);

  return (
    <Container>
      <ScrollView>
        <SectionTitle>Your Cart</SectionTitle>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <CartItemName>{item.name}</CartItemName>
            <CartItemPrice>{item.price}</CartItemPrice>
            <CartItemQuantity>Quantity: {item.quantity}</CartItemQuantity>
          </CartItem>
        ))}
        <Total>Total: ${total}</Total>
        <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
      </ScrollView>
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

const CartItem = styled.View`
  background-color: #f5f5f5;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const CartItemName = styled.Text`
  font-size: 18px;
`;

const CartItemPrice = styled.Text`
  font-size: 16px;
  color: #888;
`;

const CartItemQuantity = styled.Text`
  font-size: 16px;
`;

const Total = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

export default CartScreen;
