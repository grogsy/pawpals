import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
  },

  formField: {
    flexDirection: 'column',
    marginRight: 75,
  },

  inputFieldAndDescription: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    color: '#656565',
  },
});

export default styles;
