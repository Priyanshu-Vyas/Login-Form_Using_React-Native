import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { any } from 'react-native/Libraries/Text/TextNativeComponent';
import Credential from '../../components/Credentials';

export default function Mainscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LOGIN</Text>
      <Credential style={styles.textinput} placeholder='Username' autoComplete='username' />
      <Credential style={styles.textinput} placeholder='Password' secureTextEntry={true}/>
      <Button title="Submit" accessibilityLabel="Click to submit the form"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'skyblue',
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  textinput: {
    fontSize: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 5,
    borderRadius: 20,
    textAlign: 'center',
    marginBottom: 20,
    alignItems: "center",
    padding: 20,
    fontStyle: 'italic',
  },
});
