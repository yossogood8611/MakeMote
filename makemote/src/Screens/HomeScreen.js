import * as React from 'react';
import LogoSvg from '../../svgs/logo';
import PlusSvg from "../../svgs/plus";
import MyCalendar from '../Components/MyCalendar';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

import styles from "../Styles/styles";

function HomeScreen({navigation}){
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.childContainer}>
                <ScrollView contentContainerStyle={{padding:16}}>
                    <LogoSvg/>
                    <View style={styles.monthCard}>
                        <Text style={[styles.text.bold, {marginBottom: 17}]}>이번 달</Text>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>연안식당</Text>
                            <Text style={styles.text}>426,000 원</Text>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>해법영어</Text>
                            <Text style={styles.text}>100,000 원</Text>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text}>앱개발 외주</Text>
                            <Text style={styles.text}>1,000,000 원</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={styles.viewJustify}>
                            <Text style={[styles.text.bold,{marginBottom: 17}]}>합계</Text>
                            <Text style={[styles.text.bold,{marginBottom: 17}]}>1,526,000 원</Text>
                        </View>
                    </View>
                    <View style={styles.calendar}>
                        <MyCalendar/>
                    </View>
                </ScrollView>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AddWork')}>
                    <PlusSvg/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;