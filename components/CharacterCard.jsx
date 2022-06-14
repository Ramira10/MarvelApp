import * as React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    name: {
        fontWeight:'bold',
        marginLeft: "3%"
    },
    img: {
        width: 50, height: 50, marginBottom: '1%', marginTop: '1%', marginLeft: '5%'
    },
    cont: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffbdbd',
        marginBottom: '2%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '20px',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth:'2px'
    }
})

export default function CharacterCard({id, image, name}) {
    const navigation = useNavigation();

    return (
    <TouchableOpacity style={styles.cont} onPress={() => navigation.navigate('Detail', {id})}>
        <Image style={styles.img} source={{uri: image}}/>
        <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}
