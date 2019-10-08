import React from 'react';
import { Text, View,FlatList } from 'react-native';

const ListScreen = () => {

   const freinds=[
       {name:'Freind #1'},
       {name:'Freind #2'},
       {name:'Freind #3'},
       {name:'Freind #4'},
       {name:'Freind #5'},
       {name:'Freind #6'},
       {name:'Freind #7'}
   ]
return(
    <View>
        <Text>List Screen</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(freind)=> freind.name}
        data={freinds}
        renderItem={({item})=>{
            return <Text>{item.name}</Text>;
        }}
        />
    </View>
    
);
}

export default ListScreen;
