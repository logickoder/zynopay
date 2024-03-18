import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Button from '../../components/Button';

export default function HomeScreen() {
  const count = useAppSelector((state) => state.home.value);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Button onPress={() => dispatch({ type: 'home/decrement' })}>Decrement</Button>
      <Text>Open up App.tsx to start working on your app! {count}</Text>
      <Button onPress={() => dispatch({ type: 'home/increment' })}>Increment</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
