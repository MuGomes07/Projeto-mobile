import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede7f6', // fundo roxo claro
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#512da8', // roxo escuro
  },
  newsItem: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b39ddb', // roxo claro para borda
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#0d47a1', // azul escuro
  },
  description: {
    fontSize: 16,
    color: '#303f9f', // azul médio escuro
  },
});

export default styles;
