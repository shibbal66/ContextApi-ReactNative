import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import HeartContext from '../context/HeartContext';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Detail = ({route}) => {
  const {item} = route.params;
  const {hearts, setHearts} = useContext(HeartContext);
  const navigation = useNavigation();

  const toggleHeart = () => {
    setHearts(prevHearts => ({
      ...prevHearts,
      [item.id]: !prevHearts[item.id],
    }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity onPress={toggleHeart}>
        <Image
          style={styles.heartIcon}
          source={
            hearts[item.id]
              ? require('../assets/redheart.png')
              : require('../assets/heartunfilled.png')
          }
        />
      </TouchableOpacity>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('MainScreen')}
        style={styles.goBackButton}>
        Go Back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 20,
    fontSize: 16,
  },
  heartIcon: {
    width: 32,
    height: 32,
  },
  goBackButton: {
    marginTop: 20,
  },
});

export default Detail;
