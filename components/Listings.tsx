import { View, Text, ListRenderItem } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { defaultStyles } from '@/constants/styles';
// import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import { FlatList } from 'react-native';
import { Link } from 'expo-router';

interface Props {
    listings : any[];
    category: string;
}

const Listings = ({listings: items,category }: Props) => {
  const [loading,setLoading] = useState(false);
  const listRef =  useRef<FlatList>(null);

    useEffect(() => {
        console.log('RELOAD LISTINGS', items.length);
        setLoading(true);

        setTimeout(() => {setLoading(false)}, 200)
    }, [category]);

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} >
      <Text>Go there</Text>
    </Link>
  )

  return (
    <View style={defaultStyles.container}>
      <FlatList 
      ref={listRef }
      data={loading ? [] : items}
      renderItem={renderRow} />
    </View>
  )
}

export default Listings;