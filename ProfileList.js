import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const profileListItem = ({ item }) => (
<View style={styles.profile_list_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
<Text style={styles.art_text}>{item.art_text}</Text>
</View>
  );

const ProfileList = ({ item }) => (
<FlatList
    style={styles.profile_list}
    data={item}
    renderItem={profileListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ProfileList;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5,
        'backgroundColor': '#03dda3ff'
    },
    'art_text': {
        'color': '#b0d605ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontFamily': 'sans-serif-medium'
    }
});