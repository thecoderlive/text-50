import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ProfileList from './ProfileList'

const Profile = () => (
<ScrollView style={styles.profile} showsVerticalScrollIndicator={false}>
<Image
    style={styles.artist_pic}
    source={{uri: item.artist_pic}}
    />
<Text style={styles.artist_details}>{item.artist_details}</Text>
<Text style={styles.artist_description}>{item.artist_description}</Text>
<ProfileList item={item.profile_list}/>
</ScrollView>
)

export default Profile;

const styles = StyleSheet.create({
    'artist_pic': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 5,
        'backgroundColor': '#03dda3ff'
    },
    'artist_details': {
        'color': '#b0d605ff',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'fontFamily': 'sans-serif-medium'
    },
    'artist_description': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'color': '#590331ff',
        'fontFamily': 'sans-serif-medium'
    }
});