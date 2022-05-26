import * as React from 'react';
import LogoSvg from '../../svgs/logo';
import PlusSvg from "../../svgs/plus";
import {StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

function HomeScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.childContainer}>
                <View>
                    <LogoSvg/>
                    <View style={styles.monthCard}>
                        <Text style={styles.text.bold}>이번 달</Text>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>연안식당</Text>
                            <Text style={styles.text}>426,000 원</Text>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>해법영어</Text>
                            <Text style={styles.text}>100,000 원</Text>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>용돈</Text>
                            <Text style={styles.text}>0 원</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>합계</Text>
                            <Text style={styles.text.bold}>526,000 원</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddWork')}>
                    <PlusSvg/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        height: Dimensions.get('window').height,
        backgroundColor: "white"
    },
    childContainer: {
        flex: 1,
        padding : 16,
        height: Dimensions.get('window').height,
        paddingTop: 20,
        backgroundColor: "white",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    monthCard : {
        paddingHorizontal : 16,
        paddingTop : 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation : 3,
        shadowColor: "#797979",
        shadowOpacity: 0.25,
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 10,
        marginBottom: 20,
        marginTop: 16
    },
    viewJustify : {
        flexDirection: "row",
        justifyContent : "space-between",
        marginBottom : 10
    },
    text : {
        color: "#1A1A1A",
        fontSize: 16,
        bold : {
            fontWeight : "bold",
            marginBottom: 26,
            fontSize : 16
        }
    },
    line: {
        height: 1,
        backgroundColor : "#1A1A1A",
        marginBottom: 17,
        marginTop : 34
    },
    addButton: {
        height: 50,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4169E1',
        borderRadius: 5
    }
});


export default HomeScreen;