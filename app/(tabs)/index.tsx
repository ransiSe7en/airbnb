import { View } from "react-native";
import React, { useMemo, useState } from "react";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/listingsMap";
import listingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";

const Page = () => {
   const [category, setCategory] = useState("Tiny homes");

   const items = useMemo(() => listingsData as any, []);

   const onDataChanged = (category: string) => {
      console.log("CHANGED_", category);
      setCategory(category);
   };

   return (
      <View style={{ flex: 1, marginTop: 130 }}>
         <Stack.Screen
            options={{
               header: () => (
                  <ExploreHeader onCategoryChanged={onDataChanged} />
               ),
            }}
         />

         {/* <Listings listings={[items]} category={category} /> */}
      </View>
   );
};

export default Page;
