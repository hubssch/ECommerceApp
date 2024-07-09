import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { RouteProp, useRoute } from '@react-navigation/native';

interface Post {
  id: number;
  title: string;
  body: string;
}

type ParamList = {
  ProductDetails: {
    userId: number;
  };
};

const ProductDetailsScreen: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute<RouteProp<ParamList, 'ProductDetails'>>();
  const { userId } = route.params;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {post && (
        <>
          <Text style={styles.title}>{post.title}</Text>
          <Text style={styles.body}>{post.body}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  body: { fontSize: 16 }
});

export default ProductDetailsScreen;
