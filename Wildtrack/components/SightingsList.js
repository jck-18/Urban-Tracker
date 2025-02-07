import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from './firebaseConfig';

export default function SightingsList() {
  const [sightings, setSightings] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "sightings"), (snapshot) => {
      setSightings(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <FlatList
      data={sightings}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.speciesName}</Text>
          <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
        </View>
      )}
    />
  );
}
    