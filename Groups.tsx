import React from 'react'
import getAllGroupsForUser from './DB';
import { View, FlatList, Text } from 'react-native'

type UserProps = {
    uid: string
}
function Groups(props : UserProps) : JSX.Element {
    const userGroups = getAllGroupsForUser(props.uid);
    return (
        <View>
            <FlatList
            data={userGroups.map((group : any) => {key : group.groupName})}
            renderItem={({item}) => <Text>{item.key}</Text>}/>
        </View>
        
    )
}

export default Groups;