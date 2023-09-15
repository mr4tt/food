import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from '../components/Button';

import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Breakfast', value: 'breakfast' },
  { label: 'Lunch', value: 'lunch' },
  { label: 'Dinner', value: 'dinner' },
];

function setAndSubmit(item) {
  showSubmitButton(true);
  return setValue(item.value);
}

const DropdownComponent = (props) => {
  const [value, setValue] = useState(null);
  const showSubmitButton = useState(false);
  const showAppOptions = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        value={value}
        onChange={setAndSubmit}
      />
      {showAppOptions ? (
        <View style={styles.footerContainer}>
          <Button theme="submit" label="Enter" type={item} onPress={something}/>
        </View>
      ) : (null)
    }
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#451952',
  },
  footerContainer: { 
    flex: 1,
    marginTop: "100%",
    alignItems: 'center',
  },
  dropdown: {
    marginTop: 100,
    margin: 16,
    height: 45,
    //borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: '#F39F5A',
    textAlign: 'center',
  },
  placeholderStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});


// const styles = StyleSheet.create({

//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//   },
//   image: {
//     width: 320,
//     height: 440,
//     borderRadius: 18,
//   },
// });