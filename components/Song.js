import { StyleSheet, Text, View, Image } from 'react-native';

const Song = ({ num, title, artist, album, duration, imageUrl }) => {
  return (
    <View style={styles.item}>

      <Text style={styles.num}>
        {num}
      </Text>

      <Image style={styles.image} source={{ uri: imageUrl }} />

      <View style={styles.text}>
        <Text style={{color: "white"}}>
          {title}
        </Text>
        <Text style={{color: "white", marginTop: 5}}>{artist}</Text>
      </View>

      <View style={styles.album}>
        <Text style={{color: "white"}}>{album}</Text>
      </View>

      <View style={styles.duration}>
        <Text style={{color: "white"}}>{duration}</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  num: {
    color: 'white',
    marginLeft: -5
  },
  album: {
    marginHorizontal: 5
  },
  duration: {
    padding: 20
  },
  item: {
    backgroundColor: '#121212',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    padding: 0,
    marginVertical: 8,
    height: '40%',
    width: '40%',
  },
  image: {
    width: 75,
    height: 75,
    marginHorizontal: 10,
  },
});

export default Song;