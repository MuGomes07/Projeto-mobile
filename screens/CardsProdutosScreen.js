import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchbleOpacity} from 'react-native';

const imagemProduto1 = require('../assets/produto1.jpg');
const imagemProduto2 = require('../assets/produto2.jpg');
const imagemProduto3 = require('../assets/produto3.jpg');

const produtos = [
    { id: '1', nome: 'Produto 1', imagem: imagemProduto1, preco: 'R$750,00'},
    { id: '2', nome: 'Produto 2', imagem: imagemProduto2, preco: 'R$350,00'},
    { id: '3', nome: 'Produto 3', imagem: imagemProduto3, preco: 'R$399,90'},
]

const CardsProdutosScreen = ({ navigation }) => {
    const renderProduto = ({ item }) => (
        <TouchbleOpacity style={styles.card} onPress={() => alert(`Você selecionou: ${item.nome}`)}>
            <Image source={item.imagem} style={styles.imagem}/>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.preco}>{item.preco}</Text>
        </TouchbleOpacity>        
    );

    return(
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

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        padding: 16,
    },
    titulo:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    lista: {
        paddingBottom: 16,
    },
    card:{
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    imagem:{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 8,
    },
    nome:{
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco: {
        fontSize: 14,
        color: '#888',
    },

});

export default CardsProdutosScreen;