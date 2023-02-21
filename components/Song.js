import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import colors from "../assets/Themes/colors"

const Song = ({ id, name, artist, album, duration, quantity, imageUrl }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.index}>{id}</Text>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={styles.textSection} numberOfLines={1}>
        <Text style={styles.whitecolor} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.artistcolor}>{artist}</Text>
      </View>
      <View style={styles.album}>
        <Text style={styles.whitecolor}>{album}</Text>
      </View>
      <View style={styles.duration}>
        <Text style={styles.whitecolor}>{duration}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artistcolor: {
    // color: colors.whitecolor, this never works for me
    color: '#FFFFFF'
  },
  whitecolor: {
    color: 'white', // colors.whitecolor never works
  },
  index: {
    color: 'white',
    marginLeft: -5
  },
  album: {
    marginHorizontal: 5
  },
  duration: {
    padding: 30
  },
  item: {
    backgroundColor: '#121212',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
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