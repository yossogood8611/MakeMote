import * as React from 'react';
import LogoSvg from '../../svgs/logo';
import PlusSvg from "../../svgs/plus";
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import moment from 'moment';
import 'moment/locale/ko';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";

import styles from "../Styles/styles";
import {LocaleConfig} from "react-native-calendars/src/index";
import {useState} from "react";


LocaleConfig.locales['en'] = {
    formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    // numbers: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'] // number localization example
};
LocaleConfig.defaultLocale = 'en';

function HomeScreen({navigation}){
    const [currentDate, setCurrentDate] = useState(moment().format('YYYY-MM-DD'));
    const [firstDate, setFirstDate] = useState(moment().startOf('month').format('YYYY-MM-DD'));
    const [lastDate, setLastDate] = useState(moment().endOf('month').format('YYYY-MM-DD'));

    const work1 = {key:'work1', color:'#60D9FF'};
    const work2 = {key:'work2', color:'#FF813A'};
    const work3 = {key:'work3', color:'#61ED77'};

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
                        <Calendar
                            theme={{
                                todayTextColor: "#4169E1"
                            }}
                            // Initially visible month. Default = now
                            current={currentDate}
                            // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                            minDate={firstDate}
                            // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                            maxDate={lastDate}
                            // Handler which gets executed on day press. Default = undefined
                            onDayPress={day => {
                                console.log('selected day', day);
                            }}
                            // Handler which gets executed on day long press. Default = undefined
                            onDayLongPress={day => {
                                console.log('selected day', day);
                            }}
                            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                            monthFormat={'yyyy MM'}
                            // Handler which gets executed when visible month changes in calendar. Default = undefined
                            onMonthChange={month => {
                                console.log('month changed', month);
                            }}
                            // Hide month navigation arrows. Default = false
                            hideArrows={true}
                            // Replace default arrows with custom ones (direction can be 'left' or 'right')
                            renderArrow={direction => <Arrow />}
                            // Do not show days of other months in month page. Default = false
                            hideExtraDays={true}
                            // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
                            // day from another month that is visible in calendar page. Default = false
                            disableMonthChange={true}
                            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
                            firstDay={1}
                            // Hide day names. Default = false
                            hideDayNames={false}
                            // Show week numbers to the left. Default = false
                            showWeekNumbers={false}
                            // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                            onPressArrowLeft={subtractMonth => subtractMonth()}
                            // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                            onPressArrowRight={addMonth => addMonth()}
                            // Disable left arrow. Default = false
                            disableArrowLeft={true}
                            // Disable right arrow. Default = false
                            disableArrowRight={true}
                            // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                            disableAllTouchEventsForDisabledDays={true}
                            // Replace default month and year title with custom one. the function receive a date as parameter
                            // renderHeader={date => {
                            //     /*Return JSX*/
                            // }}
                            // Enable the option to swipe between months. Default = false
                            enableSwipeMonths={true}
                            markingType={'multi-dot'}
                            markedDates={{
                                '2022-05-02':{dots:[work1]},
                                '2022-05-03':{dots:[work1]},
                                '2022-05-04':{dots:[work1]},
                                '2022-05-05':{dots:[work1]},
                                '2022-05-09':{dots:[work1]},
                                '2022-05-10':{dots:[work1]},
                                '2022-05-11':{dots:[work1]},
                                '2022-05-12':{dots:[work1]},
                                '2022-05-20':{dots:[work3]},
                                '2022-05-23':{dots:[work1]},
                                '2022-05-24':{dots:[work1]},
                                '2022-05-25':{dots:[work1]},
                                '2022-05-26':{dots:[work2]},
                                '2022-05-27':{dots:[work2]},
                                '2022-05-30':{dots:[work1,work3]},
                                '2022-05-31':{dots:[work2], selected:true},
                            }}
                        />
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