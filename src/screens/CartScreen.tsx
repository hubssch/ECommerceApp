import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

interface Comment {
  id: number;
  name: string;
  body: string;
}

const CartScreen: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(response => {
        setComments(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Items</Text>
      <FlatList
        data={comments}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Checkout', { commentId: item.id })}>
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.body}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 15 },
  name: { fontSize: 18 },
  description: { fontSize: 16, color: 'gray' }
});

export default CartScreen;
