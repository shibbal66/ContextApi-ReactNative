import {React, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HeartContext from '../context/HeartContext';

const data = [
  {id: '1', name: 'Card 1', description: 'Description 1'},
  {id: '2', name: 'Card 2', description: 'Description 2'},
  {id: '3', name: 'Card 3', description: 'Description 3'},
  {id: '4', name: 'Card 4', description: 'Description 4'},
  {id: '5', name: 'Card 5', description: 'Description 5'},
  {id: '6', name: 'Card 6', description: 'Description 6'},
];

const MainScreen = () => {
  const {hearts, setHearts} = useContext(HeartContext);
  const navigation = useNavigation();

  const toggleHeart = id => {
    setHearts(prevHearts => ({
      ...prevHearts,
      [id]: !prevHearts[id],
    }));
  };

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => toggleHeart(item.id)}>
          <Image
            style={styles.heartIcon}
            source={
              hearts[item.id]
                ? require('../assets/redheart.png')
                : require('../assets/heartunfilled.png')
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Detail', {item})}>
          <Text style={styles.detailButton}>Detail</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.column}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  column: {
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartIcon: {
    width: 24,
    height: 24,
  },
  detailButton: {
    color: 'blue',
  },
});

export default MainScreen;
