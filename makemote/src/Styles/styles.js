import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex:1,
        height: Dimensions.get('window').height,
        backgroundColor: "white"
    },
    childContainer: {
        flex: 1,
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
        shadowRadius: 10
    },
    viewJustify : {
        flexDirection: "row",
        justifyContent : "space-between",
        marginBottom : 10,
        alignItems: 'center'
    },
    text : {
        color: "#1A1A1A",
        fontSize: 16,
        bold : {
            fontWeight : "bold",
            fontSize : 16
        },
        white: {
            fontSize: 16,
            color: 'white'
        }
    },
    line: {
        height: 1,
        backgroundColor : "#1A1A1A",
        marginBottom: 17,
        marginTop : 27,
        grey: {
            backgroundColor: '#E9E9E9',
            height: 1,
            marginVertical : 10
        }
    },
    addButton: {
        height: 50,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4169E1',
        borderRadius: 5,
        marginHorizontal: 16
    },
    topBar : {
        flex: 1,
        flexDirection : 'row',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width,
        backgroundColor: 'grey',
        marginBottom: 30,
        marginLeft: 2
    },
    backArrow : {
        width: 18,
        height: 14,
        marginRight : 10,
        marginTop: 1
    },
    selectDropdownButton : {
        height: 35,
        backgroundColor: 'white',
        borderColor: "#E9E9E9",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    },
    selectDropdownText:{
        fontSize: 14,
        color: "#1A1A1A",
        textAlign: "left",
    },
    selectDropdownRowButton: {
        flex:0.7,
        height: 35,
        backgroundColor: 'white',
        paddingLeft: 7
    },
    hourlyWageInputBox:{
        flex:0.63,
        height: 35,
        paddingLeft: 17,
        borderColor: "#E9E9E9",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5
    },
    dateText : {
        flex:0.6,
        paddingLeft: 17,
        borderColor: "#E9E9E9",
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        textAlign: 'left',
        textAlignVertical: "center",
        alignItems:"left",
        justifyContent: "center",
        maxHeight: 35
    },
    datePicker:{
        flex: 1,
    },
    resetButton: {
        flex:1,
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E9E9E9",
        borderStyle: 'solid',
        justifyContent:"center",
        alignItems: "center",
        marginRight: 5
    },
    calculationButton:{
        flex:1,
        height: 45,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: '#4169E1',
        borderRadius: 5
    },
    dashLine:{
        flex: 1,
        height: 1,
        marginBottom: 17
    },
    calendar: {
        paddingHorizontal : 16,
        paddingTop : 10,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: "white",
        elevation : 3,
        shadowColor: "#797979",
        shadowOpacity: 0.25,
        shadowOffset: {width: 4, height: 4},
        shadowRadius: 10,
        marginTop: 16,
        color: '#1A1A1A',
        marginBottom: 100,
    }
});

export default styles;