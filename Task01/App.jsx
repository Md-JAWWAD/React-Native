import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const App = () => {
const [data, setdata] = useState('How are you?')  

const dataPress = () => {
  console.log(data);
  setdata('I am fine')
}
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
      <Text style={styles.btn}>
      "Hello React Native" 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn:{
    textAlign: 'center',
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 20
  }

})

export default App;
