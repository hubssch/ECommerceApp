import React from 'react';
import { ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';

const ProductDetailsScreen: React.FC = ({ route }) => {
  const { productId } = route.params;

  // Mock product data
  const product = {
    id: productId,
    name: 'Product 1',
    price: '$100',
    description: 'This is a great product.',
    image: 'https://example.com/product1.jpg',
  };

  return (
    <Container>
      <ScrollView>
        <ProductImage source={{ uri: product.image }} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ProductDescription>{product.description}</ProductDescription>
        <Button title="Add to Cart" onPress={() => {/* Add to cart functionality */}} />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
`;

const ProductName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductPrice = styled.Text`
  font-size: 20px;
  color: #888;
  margin-bottom: 20px;
`;

const ProductDescription = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export default ProductDetailsScreen;
