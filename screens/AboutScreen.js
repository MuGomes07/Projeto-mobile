import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import styles from '../src/styles/AboutScreenStyles';


const AboutScreen = () => {
  const handleOpenWebsite = () => {
    Linking.openURL('');
  };


  const handleSendEmail = () => {
    Linking.openURL('');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Aplicativo</Text>
      <Text style={styles.infoText}>versão 1.0.0</Text>
      <Text style={styles.infoText}>Desenvolvido por: Murillo Gomes</Text>


      <TouchableOpacity style={styles.button} onPress={handleOpenWebsite}>
        <Text style={styles.buttonText}>Visitar meu site</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
        <Text style={styles.buttonText}>Entre em contato por mail</Text>
      </TouchableOpacity>


      <Text style={styles.footer}>@ 2025 Murillo Gomes</Text>
    </View>
  );
};


export default AboutScreen;
