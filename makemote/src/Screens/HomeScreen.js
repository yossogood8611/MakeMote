import * as React from 'react';
import {Button, StyleSheet, Text, View, ViewComponent, Image} from 'react-native';

function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../assets/Logo.svg')}
            />
            <Button
                title="add"
                onPress={() => navigation.navigate('AddWork')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 100,
        paddingHorizontal : 20
    },
    logo: {
        width : 20,
        height : 20,
        marginBottom : 15,
    }
});


export default HomeScreen;