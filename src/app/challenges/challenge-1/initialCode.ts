const initialCode = `import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Linking } from 'react-native';
import Constants from 'expo-constants';

export default () => {
  return (<>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>A11yTune</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>Who are we?</Text>
      <Text style={[styles.bodyText, styles.paragraph]}>
        Hello, we're A11yTune! 👋
      </Text>
      <Text style={[styles.bodyText, styles.paragraph]}>
        We're your friendly neighbourhood indie record store.
      </Text>
      <Text style={[styles.bodyText, styles.paragraph]}>
        You can find out more about our mission 
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('http://www.google.com')}>
        <Text style={[styles.bodyText, styles.link]}>here</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>Browse our records</Text>
      </TouchableOpacity>
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 0,
    height: 150,
    backgroundColor: '#115E59',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center'
  },
  headerText: {
    marginLeft: 30,
    fontWeight: 'bold',
    color: '#F3F4F6',
    fontSize: 30
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ecf0f1',
  },
  bodyText: {
    fontSize: 16,
    color: '#34495e',
  },
  paragraph: {
    marginTop: 20,
  },
  link: {
    color: 'blue'
  },
  primaryButton: {
    marginTop: 30,
    marginBottom: 30,
    color: 'white',
    backgroundColor: '#115E59',
    textWeight: 'bold',
    width: 150,
    border: 'none',
    borderRadius: 10
  },
  primaryButtonText: {
    margin: 10,
    color: 'white'
  }
});`;

export default initialCode;
