import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import CardFilme from '../../components/CardFilme';

export default function MoviesPage(){
    
  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(() => {
    fetch(baseURL)
     .then(data => data.json())
     .then(object => {
      setFilmes(object.data)
    })
  }, []);

   return (
      <SafeAreaView style={styles.container}>
      { filmes.length > 0 ? <ScrollView horizontal>
        {
          filmes.map(filme => <CardFilme key= 
          {filme.id} filme={filme.attributes} />)
        }
      </ScrollView>: <ActivityIndicator size={'large'}/>}
    </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });