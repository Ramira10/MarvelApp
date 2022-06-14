import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: '500px',
    },
    name: {
        fontWeight: 'bold',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '4vw'
    },
    des: {
        backgroundColor: '#ffbdbd',
        borderRadius: '20px',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: '2px',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%'
    },
    text: {
        marginTop: '2%',
        marginBottom: '2%',
        marginRight: '2%',
        marginLeft: '2%',
        fontSize: '2vw'
    },
    err: {
        display: 'flex',
        justifyContent: 'center',
        color: 'red',
        fontSize: '2vw'
    }
})

export default function Information({ image, name, description }) {
    return (
        <ScrollView>
            <Image
                style={styles.img}d
                source={{ uri: image }}
            />
            <Text style={styles.name}>{name}</Text>
            {description ? 
            <View style={styles.des}>
                <Text style={styles.text}>{description}</Text>
            </View> :
            <View><Text style={styles.err}>Doesn't have description.</Text></View>
            } 
        </ScrollView>
    )
}