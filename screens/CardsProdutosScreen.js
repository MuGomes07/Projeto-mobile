import React from 'react';
import { View, Text,  FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../src/styles/CardsProductsStyle'; // Ajuste o caminho conforme a sua estrutura de pastas

// Importe suas imagens locais
const imagemProduto1 = require('../assets/produto1.jpg'); // Certifique-se de que o caminho está correto
const imagemProduto2 = require('../assets/produto2.jpg');
const imagemProduto3 = require('../assets/produto3.jpg');

const produtos = [
  { id: '1', nome: 'Produto 1', imagem: imagemProduto1, preco: 'R$ 50,00' },
  { id: '2', nome: 'Produto 2', imagem: imagemProduto2, preco: 'R$ 70,00' },
  { id: '3', nome: 'Produto 3', imagem: imagemProduto3, preco: 'R$ 30,00' },
];

const CardsProdutosScreen = ({ navigation }) => {
  const renderProduto = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
      {/* Para imagens locais, não use { uri: ... }, apenas o nome da imagem */}
      <Image source={item.imagem} style={styles.imagem} />
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
};


export default CardsProdutosScreen;