import * as React from 'react';
import {View, Text, TouchableOpacity,TextInput, AsyncStorage} from 'react-native';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import BackArrowSvg from "../../svgs/backArrow";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import Dash from 'react-native-dash';

import SelectDropdownComponent from "../Components/SelectDropdownComponent";

import styles from "../Styles/styles";
import {useState} from "react";

let isOpened=0;

let workPlace= ["연안식당", "해법영어", "이디야", "메가커피"];
let recentWorkPlace = "근무지 선택";

let workingHours =
    [   "0.5시간", "1시간", "1.5시간", "2시간", "2.5시간",
        "3시간", "3.5시간", "4시간", "4.5시간", "5시간","5.5시간",
        "6시간","6.5시간","7시간","7.5시간", "8시간",
        "8.5시간","9시간","9.5시간","10시간",
    ]
let recentWorkingHours = "시간 선택"

let taxList = ["적용 안함", "3.3%", ""];

function AddWorkScreen({navigation}){
    const [hourlyWage, setHourlyWage] = useState(9160);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const onHourlyWageChanged = (text) => {
        setHourlyWage({mobile:text.replace(/[^0-9]/g, '')});
    };
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.childContainer}>
                <View>
                    <View style={styles.topBar}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Home')}
                            style={styles.backArrow}>
                            <BackArrowSvg/>
                        </TouchableOpacity>
                        <Text style={styles.text.bold}>급여계산기</Text>
                    </View>
                    <View style={styles.monthCard}>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>직장</Text>
                            <SelectDropdownComponent isOpened={isOpened} defaultItem={recentWorkPlace} itemList={workPlace}/>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>근무시간</Text>
                            <SelectDropdownComponent isOpened={isOpened} defaultItem={recentWorkingHours} itemList={workingHours}/>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>시급</Text>
                            <TextInput
                                style={styles.hourlyWageInputBox}
                                keyboardType='numeric'
                                onChangeText={(text)=> onHourlyWageChanged(text)}
                                value={hourlyWage}
                                maxLength={5}
                                returnKeyType={'done'}
                                multiline={false}
                            />
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>세금 적용</Text>
                            <SelectDropdownComponent isOpened={isOpened} defaultItem={taxList[0]} itemList={taxList}/>
                        </View>
                        <View style={styles.viewJustify}>
                            <Text style={styles.text.bold}>근무일</Text>
                            <View style={{
                                height:100,
                                flex: 0.68
                            }}>
                                <TouchableOpacity
                                    style={styles.dateText}
                                    onPress={showDatepicker}>
                                    <Text>{date.toLocaleDateString()}</Text>
                                </TouchableOpacity>
                                {show && (
                                    <RNDateTimePicker
                                        style={styles.datePicker}
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        onChange={onChange}
                                    />
                                )}
                            </View>
                        </View>
                        <Dash
                            style={styles.dashLine}
                            dashGap={2.5}
                            dashLength={7}
                            dashThickness={1}
                            dashColor={"#E9E9E9"}
                        />
                        <View style={styles.viewJustify}>
                            <TouchableOpacity style={styles.resetButton}>
                                <Text style={styles.text}>초기화</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.calculationButton}>
                                <Text style={styles.text.white}>계산하기</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.text.white}>추가</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default AddWorkScreen;