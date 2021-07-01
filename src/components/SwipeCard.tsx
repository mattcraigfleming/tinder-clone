import React, {useState} from 'react';
import {
  Animated,
  PanResponder,
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import moment from 'moment';
import {ISwipeCardProps} from '../types/interface';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const SwipeCard = (props: ISwipeCardProps) => {
  // Set initial multiplexed animated value
  const [pan] = useState(new Animated.ValueXY());
  // Initialize pan responder callback functions
  const [cardPanResponder] = useState(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, {dx}) => {
        const absDx = Math.abs(dx);
        const direction = absDx / dx;
        if (absDx > 120) {
          Animated.decay(pan, {
            velocity: {x: 3 * direction, y: 0},
            deceleration: 0.995,
            useNativeDriver: true,
          }).start(props.onSwipeOff);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            friction: 4.5,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  );

  // Destruct props
  const {profile} = props;
  const {dob, name, bio, id} = profile;

  const profileBday = moment(dob, 'MM/DD/YYYY');
  const profileAge = moment().diff(profileBday, 'years');
  const fbImage = `https://graph.facebook.com/${id}/picture?height=500`;

  const rotateCard = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['10deg', '0deg', '-10deg'],
  });
  const animatedStyle = {
    transform: [{translateX: pan.x}, {translateY: pan.y}, {rotate: rotateCard}],
  };

  return (
    <Animated.View
      {...cardPanResponder.panHandlers}
      style={[styles.card, animatedStyle]}>
      <Image style={{flex: 1}} source={{uri: fbImage}} />
      <View style={{margin: 20}}>
        <Text style={{fontSize: 20}}>
          {name}, {profileAge}
        </Text>
        <Text style={{fontSize: 15, color: 'darkgrey'}}>{bio}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: windowWidth - 20,
    height: windowHeight * 0.7,
    top: (windowHeight * 0.3) / 6,
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  wrapper: {},
});

export default SwipeCard;
