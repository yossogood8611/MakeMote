import * as React from 'react';
import {Button, StyleSheet, Text, View, ViewComponent} from 'react-native';

function AddWorkScreen(){
    return (
        <View style={styles.container}>
            <Text>Add</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        paddingTop : 100,
        paddingHorizontal : 20
    }
});

export default AddWorkScreen;