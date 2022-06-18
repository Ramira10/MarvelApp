import * as React from 'react';
import { ActivityIndicator, FlatList, View, Button } from 'react-native';
import CharacterCard from './CharacterCard.jsx';
import apiParams from '../config.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';

export default function Home() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const { ts, apikey, hash, baseURL } = apiParams;
  const [search, setSearch] = useState('');

  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          nameStartsWith: search
        }
      })
        .then(response => setData(response.data.data.results))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    }
  }

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

  const axiosMore = () => {
    if (!search && data.length >= 20 && data.length < 500) {
      axios.get(`${baseURL}/v1/public/characters`, {
        params: {
          ts,
          apikey,
          hash,
          limit: 20,
          offset: data.length
        }
      })
        .then(response => setData([...data, ...response.data.data.results]))
        .catch(error => console.error(error))
    }
  }

  const getAll = () => {
    setSearch('')
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
  }

  return (
    <View>
      {isLoading
        ? <ActivityIndicator size="large" color="#00ff00" />
        : (
          <View>
            <Searchbar
              placeholder="Search for character..."
              onChangeText={value => setSearch(value)}
              value={search}
              onIconPress={searchCharacter}
              onSubmitEditing={searchCharacter}
            />
            <Button color='#b8b8b8' title="Refresh" onPress={getAll}></Button>
            <FlatList
              data={data}
              keyExtractor={({ id }) => id.toString()}
              onEndReached={axiosMore}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => (
                <CharacterCard
                  id={item.id}
                  image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                  name={item.name} />
              )}
            />
          </View>
        )
      }
    </View>
  );
}
