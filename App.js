import React from 'react';
import { StyleSheet, View, ImageBackground, Image, TouchableOpacity, Text } from 'react-native';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/images/bg.png')} // Replace with your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require('./assets/images/logo.png')} // Replace with your logo
          style={styles.logo}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Welcome</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: '50%', // pushes logo towards center
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default App;
