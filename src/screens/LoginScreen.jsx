import React, { useState, useEffect } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const configureGoogleSignIn = async () => {
    await GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID', 
    });
  };

  const handleLogin = async () => {
    if (!email.endsWith('@company.com')) {
      Alert.alert('Invalid Email', 'Please use a valid domain email');
      return;
    }

    try {
      navigation.navigate('Home');
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert('Login Failed', 'Please try again later');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
     console.log(userInfo);


      if (userInfo.user.email.endsWith('@gmail.com')) {
        Alert.alert('Invalid Email', 'Please use a company email instead of Gmail');
        return;
      }

      navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google login canceled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google login in progress');
      } else {
        console.error('Google login error', error);
      }
    }
  };


  return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          labelStyle={styles.buttonText}>
          Login
        </Button>
        <GoogleSigninButton
          style={styles.googleSignInButton}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={handleGoogleLogin}
        />
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
  logo: {
    height: 100,
    marginBottom: 20,
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
  googleLoginText: {
    marginTop: 15,
    color: '#3498db',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  googleSignInButton: {
    width: '100%',
    height: 48,
    marginTop: 10,
  },
});


export default LoginScreen;
