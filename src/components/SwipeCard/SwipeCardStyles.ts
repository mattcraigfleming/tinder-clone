import {StyleSheet, Dimensions} from 'react-native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

export default StyleSheet.create({
  card: {
    position: 'absolute',
    width: windowWidth - 20,
    height: windowHeight * 0.7,
    top: (windowHeight * 0.3) / 2.25,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  img: {flex: 1},
  footerContainer: {margin: 20},
  headerText: {fontSize: 20},
  subHeaderText: {fontSize: 15, color: 'darkgrey'},
});
