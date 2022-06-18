import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img: {
      width: '250px',
      height: '400px',
    },
    title: {
      fontWeight: 'bold',
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3vw',
      width: '250px',
      paddingTop: '10px',
      paddingBottom: '10px'
    },
    cont: {
      backgroundColor: '#b8b8b8',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: '2px',
      marginRight: '10px',
      marginLeft: '10px',
      paddingRight: '10px',
      paddingLeft: '10px',
      paddingTop: '10px',
  },
  })

  export default function Comic({ name, image }) {
    return (
      <View style={styles.cont}>
              <Image
                  style={styles.img}
                  source={{uri: image}}
              />
              <Text style={styles.title}>{name}</Text>
      </View>
    )
  }