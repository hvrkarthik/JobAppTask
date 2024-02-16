import axios from 'axios';
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    if (!email.endsWith('@gmail.com')) {
      Alert.alert('Invalid Email', 'Please use a valid domain email');
      return;
    }

    try {
      const response = await axios.get(
        'https://jsearch.p.rapidapi.com/search?query=search&page=1&num_pages=1',
        {
          headers: {
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            'X-RapidAPI-Key':
              '1f4de0b89fmsh82c36bed6622944p1eef39jsna38f337f725e',
          },
        },
      );

      navigation.navigate('Home', {data: response.data});
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert('Login Failed', 'Please try again later');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)} 
      />
      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.button}
        labelStyle={styles.buttonText}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#3498db',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
