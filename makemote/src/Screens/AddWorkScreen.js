import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

function AddWorkScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <View sytle={styles.childContainer}>
                //일한곳(시간, 시급, 세금 자동 기입) 수정 가능, 추가
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        height: Dimensions.get('window').height,
        backgroundColor: "white"
    }
});

export default AddWorkScreen;