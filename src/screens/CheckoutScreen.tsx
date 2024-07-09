import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface Album {
  id: number;
  title: string;
}

const CheckoutScreen: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        setAlbums(response.data);
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
      <Text style={styles.title}>Checkout Steps</Text>
      <FlatList
        data={albums}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: { marginBottom: 15 },
  name: { fontSize: 18 }
});

export default CheckoutScreen;
