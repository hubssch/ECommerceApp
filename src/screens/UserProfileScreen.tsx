import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const UserProfileScreen: React.FC = () => {
  return (
    <Container>
      <SectionTitle>User Profile</SectionTitle>
      <ProfileDetail>
        <Label>Name:</Label>
        <Value>John Doe</Value>
      </ProfileDetail>
      <ProfileDetail>
        <Label>Email:</Label>
        <Value>johndoe@example.com</Value>
      </ProfileDetail>
      <Button title="Edit Profile" onPress={() => {/* Edit profile functionality */}} />
      <Button title="Logout" onPress={() => {/* Logout functionality */}} style={{ marginTop: 10 }} />
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

const ProfileDetail = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const Value = styled.Text`
  font-size: 16px;
`;

export default UserProfileScreen;
