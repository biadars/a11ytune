const initialCode = `export type Store = {
  name: string;
  address: string;
  openingHours: string;
}

const leedsStore: Store = {
  name: 'A11yTune Leeds ',
  address: 'University of Leeds Michael Marks Building, Woodhouse, Leeds LS2 9LP England',
  openingHours: '09:00 - 17:00'
};

const liverpoolStore: Store = {
  name: 'A11yTune Liverpool',
  address: 'The Arch, 142 Duke Street, Liverpool L1 5DR England',
  openingHours: '09:00 - 17:30'
};

const manchesterStore: Store = {
  name: 'A11yTune Manchester',
  address: 'Boyle Street, Manchester M8 8UW England',
  openingHours: '09:30 - 18:00'
};

export const ALL_STORES = [
  leedsStore,
  liverpoolStore,
  manchesterStore
];

import { StyleSheet, TouchableOpacity, View, Text, FlatList } from 'react-native';
import Constants from 'expo-constants';

type StoreSummaryProperties = {
  store: Store;
}

const StoreSummary = ({store}: StoreSummaryProperties) => {  
  return <TouchableOpacity role="link" accessibilityRole="link">
    <View style={styles.summaryCard}>
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.storeInfo}>📍{store.address}</Text>
      <Text style={styles.storeInfo}>⏰ {store.openingHours}</Text>
    </View>
  </TouchableOpacity>
}

export default () => {
  return (<>
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>A11yTune</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.header}>Find us</Text>
      <Text style={[styles.bodyText, styles.paragraph]}>
        You can find more detail about each of our locations by selecting one from the list below.
      </Text>
      <View style={styles.list}>
        <FlatList
          data={ALL_STORES}
          role="list"
          accessibilityRole="list"
          renderItem={({item}: Store)  => <StoreSummary store={item}
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
  storeName: {
    fontSize: 16,
    color: '#34495e',
    fontWeight: 'bold'
  },
  storeInfo: {
    fontSize: 16,
    color: '#34495e'
  }
});
`

export default initialCode;