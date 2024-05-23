import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import Colors from '@/constants/Colors';
// import { ScrollView } from 'react-native-reanimated/lib/typescript/Animated';
import { ScrollView } from 'react-native';
import { toLinearSpace } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import * as Haptics from 'expo-haptics';

const categories = [
  {
    name: 'Tiny keys',
    icon: 'home'
  },
  {
    name:'Cabins',
    icon:'house-siding'
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
  {
    name:'Beachfront',
    icon:'beach-access'
  },
  {
    name:'Countryside',
    icon:'nature-people'
  },
];

interface Props {
  onCategoryChanged : (category: string) => void
}

const ExploreHeader = ({onCategoryChanged}: Props ) => {
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    setActiveIndex(index)

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({x: x - 16 ,y: 0, animated: true});
    })
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
    
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity style={styles.searchBtn}>
              <Ionicons name='search' size={24} />
              <View>
                <Text style={{fontFamily:'mon-sb'}}>Where to</Text>
                <Text style={{fontFamily:'mon-b',color:Colors.grey}}>Anywhere Anyweek</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterBtn}>
            <Ionicons name="options-outline" size={24}/>
          </TouchableOpacity>
        </View>

        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems:'center',
            gap:30,
            paddingHorizontal:16,
          }}>
        {categories.map((item, index) => (
            <TouchableOpacity 
            onPress={() => selectCategory(index)}
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            style={activeIndex === index ? styles.categoriesBtnActive : styles.categoriesBtn}
            >
              <MaterialCommunityIcons size={24} name={item.icon as any} color={activeIndex === index ? '#000': Colors.grey} />
              <Text style={activeIndex === index ? styles.categoryTextActive : styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    
    </SafeAreaView>
  );
}; 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'fff',
    height:130,
  },
  actionRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap:10,
  },
  filterBtn:{
    padding:10,
    borderWidth:1,
    borderColor:Colors.grey,
    borderRadius: 24,
  },
  searchBtn:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    borderColor:'#c2c2c2',
    borderWidth:StyleSheet.hairlineWidth,
    flex:1,
    padding:14,
    borderRadius:30,
    backgroundColor:'#fff',

    elevation:2,
    shadowColor:'#000',
    shadowOpacity:0.12,
    shadowRadius:8,
    shadowOffset:{
      width:1,
      height:1,
    },
  },
  categoryText: {
    fontSize:14,
    fontFamily: 'mon-sb',
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize:14,
    fontFamily: 'mon-sb',
    color:'#000',
  },
  categoriesBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:8,
  },  
  categoriesBtnActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor:'#000',
    borderBottomWidth:2,
    paddingBottom:8,
  },
});

export default ExploreHeader