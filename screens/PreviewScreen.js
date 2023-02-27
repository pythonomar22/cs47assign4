import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const PreviewScreen = ( {navigation, route}) => {
    return (
      <WebView source={{uri: route.params.previewUrl}} style={{marginTop: 20}} />
    )
}

export default PreviewScreen

const styles = StyleSheet.create({});