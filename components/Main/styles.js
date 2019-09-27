import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  description: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 65,
    color: '#656565',
  },

  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
  },

  button: {
    borderWidth: 5,
    width: 50,
  },

  routes: {
    flexDirection: 'row',
  },
});

export default styles;
