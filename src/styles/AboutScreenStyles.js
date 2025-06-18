import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede7f6', // fundo roxo claro
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#512da8', // roxo escuro
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#0d47a1', // azul escuro
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#1565c0', // azul escuro
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: '#fff', // texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    color: '#512da8', // roxo escuro
    fontSize: 14,
  },
});

export default styles;
