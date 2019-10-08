import React from 'react';
import { Text, View,FlatList } from 'react-native';

const ListScreen = () => {

   const freinds=[
       {key:'1',name:'Freind #1'},
       {key:'2',name:'Freind #2'},
       {key:'3',name:'Freind #3'},
       {key:'4',name:'Freind #4'},
       {key:'5',name:'Freind #5'},
       {key:'6',name:'Freind #6'},
       {key:'7',name:'Freind #7'}
   ]
return(
    <View>
        <Text>List Screen</Text>
        <FlatList 
        data={freinds}
        renderItem={({item})=>{
            return <Text>{item.name}</Text>;
        }}
        />
    </View>
    
);
}

export default ListScreen;
