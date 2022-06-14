import * as React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import CharacterCard from './CharacterCard.jsx';
import apiParams from '../config.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        // console.log(`${baseURL}/v1/public/characters?ts=${ts}&&apikey=${apikey}&&hash=${hash}`)
        axios.get(`${baseURL}/v1/public/characters`, {
          params: {
            ts,
            apikey,
            hash
          }
        })
          .then(response => setData(response.data.data.results))
          .catch(error => console.error(error))
          .finally(() => setLoading(false));
      }, []);
    
  return (
    <View>
      {isLoading 
        ? <ActivityIndicator size="large" color="#00ff00" /> 
        : (
          <FlatList
            data={data}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <CharacterCard 
                id={item.id}
                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`} 
                name={item.name} />
            )}
          />
        )
      }
    </View>
  );
}