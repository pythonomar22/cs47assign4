import { View, Text, Image, StyleSheet } from "react-native";
import { millisToMinuteSeconds } from "../utils/millisToMinuteSeconds";

const Song = ({ songTitle, artist, album, albumImageUrl, duration }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: albumImageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {songTitle}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
        <Text style={styles.album} numberOfLines={1}>
          {album}
        </Text>
      </View>
      <View style={styles.durationContainer}>
        <Text style={styles.duration}>
          {millisToMinuteSeconds(duration)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomColor: "lightgray",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  artist: {
    color: "gray",
  },
  album: {
    color: "gray",
  },
  durationContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
  },
  duration: {
    fontWeight: "bold",
  },
});

export default Song;