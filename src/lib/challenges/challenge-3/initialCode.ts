const initialCode = `import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

export type Record = {
  name: string;
  artist: string;
}

const theRiseAndFallOfAMidwestPrincess: Record = {
  name: 'The Rise and Fall of a Midwest Princess',
  artist: 'Chappell Roan'
};

const dontForgetMe: Record = {
  name: 'Don\\'t forget me',
  artist: 'Maggie Roggers'
};

const deadClubCity: Record = {
  name: 'Dead Club City',
  artist: 'Nothing But Thieves'
};

const ALL_RECORDS = [
  theRiseAndFallOfAMidwestPrincess,
  dontForgetMe,
  deadClubCity
];

type RecordSummaryProperties = {
  record: Record;
};

const RecordSummary = ({record}: RecordSummaryProperties) => {
  const [quantity, setQuantity] = useState(0);

  return <View style={styles.summaryCard}>
      <View style={styles.recordInfo}>
        <Text style={styles.recordName}>{record.name}</Text>
        <Text style={styles.recordArtist}>{record.artist}</Text>
      </View>
      <View style={styles.quantityCounter}>
        <TouchableOpacity style={[styles.quantityButton, quantity === 0 && styles.disabledButton]}
                          onPress={() => setQuantity(quantity - 1)}
                          disabled={quantity === 0}
                          role="button"
                          accessibilityRole="button"
                          accessibilityLabel="reduce quantity"
                          accessibilityHint="Reduces the quantity of this record in your basket."
                          >
          <AntDesign name="minuscircle" size={24} color="#115E59" />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}
                          onPress={() => setQuantity(quantity + 1)}
                          role="button"
                          accessibilityRole="button"
                          accessibilityLabel="increase quantity"
                          accessibilityHint="Increases the quantity of this record in your basket."
                          >
          <AntDesign name="pluscircle" size={24} color="#115E59" />
        </TouchableOpacity>
      </View>
    </View>;
};

export default () => {
return (<>
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>A11yTune</Text>
  </View>
  <View style={styles.container}>
    <Text style={styles.header}>Our records</Text>
    <Text style={[styles.bodyText, styles.paragraph]}>
      Browse our top records of the week:
    </Text>
    <View style={styles.list}>
      <FlatList
        data={ALL_RECORDS}
        role="list"
        accessibilityRole="list"
        renderItem={({item}: Record)  => <RecordSummary record={item}
        />}
      />
    </View>
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
list: {
  marginTop: 10
},
summaryCard: {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#FFFFFF',
  width: '100%',
  padding: 16,
  borderRadius: 8,
  shadowColor: '#616161',
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 6,
  marginVertical: 10
},
recordName: {
  fontSize: 16,
  color: '#34495e',
  fontWeight: 'bold'
},
recordArtist: {
  fontSize: 16,
  color: '#34495e'
},
recordInfo: {
  display: 'flex',
  flexDirection: 'column',
  width: '75%'
},
quantityCounter: {
  display: 'flex',
  flexDirection: 'row',
  width: '25%',
  justifyContent: 'flex-end',
  alignItems: 'center',
},
quantityButton: {
  padding: 0,
  margin: 0
},
disabledButton: {
  opacity: 0.5
},
quantity: {
  fontWeight: 'bold',
  padding: 12
}
});
`

export default initialCode;