import React, {useState} from 'react';
import {Animated, PanResponder, Image, View, Text} from 'react-native';
import moment from 'moment';
import {ISwipeCardProps} from '../../types/interface';
import styles from './SwipeCardStyles';

const SwipeCard = (props: ISwipeCardProps) => {
  const [liked, setLiked] = useState({liked: false, preFetch: false});
  const [disliked, setDisliked] = useState({
    disliked: false,
    preFetch: false,
  });
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
        // abs value of dx
        const absDx = Math.abs(dx);
        // 1 right (like), -1 left (dislike)
        const direction = absDx / dx;
        if (direction === 1) {
          setLiked({liked: true, preFetch: false});
        } else {
          setDisliked({disliked: true, preFetch: false});
        }
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

  console.log(liked);
  console.log(disliked);

  // Destruct props
  const {dob, name, bio, id} = props.profile;
  console.log(dob);
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
      <Image style={styles.img} source={{uri: fbImage}} />
      <View style={styles.footerContainer}>
        <Text style={styles.headerText}>
          {name}, {profileAge}
        </Text>
        <Text style={styles.subHeaderText}>{bio}</Text>
      </View>
    </Animated.View>
  );
};

export default SwipeCard;