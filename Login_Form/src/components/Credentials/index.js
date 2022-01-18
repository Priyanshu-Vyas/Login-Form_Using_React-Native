import React from 'react';
import {TextInput} from 'react-native';

export default function Credential({style,placeholder,secureTextEntry,autoComplete}) {
  return (
  <TextInput style={style} placeholder={placeholder} secureTextEntry={secureTextEntry} autoComplete={autoComplete} />
  );
}