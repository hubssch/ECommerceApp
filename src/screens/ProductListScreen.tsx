import React from 'react';
import { ScrollView, Button } from 'react-native';
import styled from 'styled-components/native';

const ProductListScreen: React.FC = ({ navigation, route }) => {
  const { category } = route.params;

  return (
    <Container>
      <SectionTitle>{category}</SectionTitle>
      <ScrollView>
        <ProductCard>
          <ProductImage source={{ uri: 'https://example.com/product1.jpg' }} />
          <ProductDetails>
            <ProductName>Product 1</ProductName>
            <ProductPrice>$100</ProductPrice>
            <Button title="View Details" onPress={() => navigation.navigate('ProductDetails', { productId: 1 })} />
          </ProductDetails>
        </ProductCard>
        <ProductCard>
          <ProductImage source={{ uri: 'https://example.com/product2.jpg' }} />
          <ProductDetails>
            <ProductName>Product 2</ProductName>
            <ProductPrice>$200</ProductPrice>
            <Button title="View Details" onPress={() => navigation.navigate('ProductDetails', { productId: 2 })} />
          </ProductDetails>
        </ProductCard>
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

const ProductCard = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  padding: 10px;
  border-radius: 10px;
`;

const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const ProductDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const ProductName = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const ProductPrice = styled.Text`
  font-size: 16px;
  color: #888;
`;

export default ProductListScreen;
