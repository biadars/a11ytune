const initialCode = `import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

export default () => {
  const [postCode, setPostCode] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (<>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>A11yTune</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>Delivery address</Text>
      <TextInput value={postCode}
                onChangeText={(value) => setPostCode(value)}
                placeholder="Enter your postcode"
                placeholderTextColor="#808080"
                style={styles.input}/>
      <TouchableOpacity role="button"
                        accessibilityRole="button"
                        accessibilityHint="Tap to search for your address."
                        onPress={() => setFormSubmitted(true)}
                        style={styles.button}>
        <Text style={styles.buttonText}>Find my address</Text>
      </TouchableOpacity>
      {formSubmitted && <View style={styles.error}>
            <MaterialIcons name="error-outline" size={24} color="black" />
            <Text style={styles.errorText}>Could not find address, please check your postcode and try again.</Text>
          </View>}
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
  fontSize: 20,
  marginBottom: 10
},
container: {
  flex: 1,
  padding: 30,
  backgroundColor: '#ecf0f1',
},
labelText: {
  fontSize: 16,
  color: '#34495e',
},
input: {
  height: 40,
    marginTop: 12,
    borderWidth: 1,
    borderColor: '#34495e',
    padding: 10,
},
button: {
  marginTop: 20,
  backgroundColor: '#115E59',
  width: 160,
  borderRadius: 10
},
buttonText: {
  color: '#F3F4F6',
  fontWeight: 'bold',
  fontSize: 16,
  margin: 15
},
error: {
  backgroundColor: '#e64635',
  marginTop: 20,
  display: 'flex',
  flexDirection: 'row',
  padding: 10,
  borderRadius: 10,
  alignItems: 'center'
},
errorText: {
  marginLeft: 5
}
});
`;

export default initialCode;
