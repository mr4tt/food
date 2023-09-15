import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PlaceholderImage = require('../assets/title.jpg');

export default function FirstScreen( props ) {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImage} />
        </View>
        <View style={styles.footerContainer}>
          <Button theme="to_picker" label="Enter meal" navigation={props.navigation}/>
          <Button label="Look at previous meals" />
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#451952',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});