import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const DetailsScreen = ( {navigation, route}) => {
    return (
      <WebView source={{ uri: route.params.externalUrl}} style={{marginTop: 20}} />
    )
}

export default DetailsScreen

const styles = StyleSheet.create({});