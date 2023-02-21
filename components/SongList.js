import { FlatList, Text, StyleSheet, View, Image, SafeAreaView, ScrollView} from "react-native"
import Song from "./Song";
import { millisToMinutesAndSeconds } from "../utils";

const renderSong = ({ item, index }) => (
    <Song
      num={index +1} // 
      title={item.songTitle}
      artist={item.songArtists[0].name} // see console
      album = {item.albumName}
      duration = {millisToMinutesAndSeconds(item.duration)}  
      imageUrl={item.imageUrl}
    />
  );

const SongList = ({tracks}) => {
    return (
    <ScrollView>   
        <View style={styles.titleTop}>
        <Image style={styles.spotifypic} source={require('../assets/spotify-logo.png')}/>
            <Text style={styles.title}>My Top Tracks</Text>
        </View>
        <FlatList 
            data = {tracks}
            renderItem={(item) => renderSong(item)}
            keyExtractor={(item) => item.num}
        />
    </ScrollView> 
    );
};

const styles = StyleSheet.create({
    spotifypic: {
      width: 30,
      height: 30,
      marginRight: 5
    },
    titleTop: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 8,
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
      color: "white",
      marginBottom: -50
    },
    image: {
        margin: 10,
        width: 100,
        height: 100
    },
  });

export default SongList