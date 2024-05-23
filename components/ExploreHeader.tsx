import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';

const categories = [
  {
    name: 'Tiny Homes',
    icon: 'home'
  },
  {
    name:'Cabins',
    icon:'house-Siding'
  },
  {
    name:'Trending',
    icon:'local-fire-department'
  },
  {
    name:'Play',
    icon:'videogame-asset'
  },
  {
    name:'City',
    icon:'apartment'
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'}>Booking</Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24}/>
          </TouchableOpacity>
        </View>
      </View>
    
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'fff',
    height:'130',
  },
  actionRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  filterBtn:{
    padding:10,
    borderWidth:1,
    borderColor:Colors.grey,
    borderRadius: 24,
  }
});

export default ExploreHeader