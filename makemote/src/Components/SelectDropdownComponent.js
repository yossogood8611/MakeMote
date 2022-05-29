import React from "react";
import SelectDropdown from 'react-native-select-dropdown';
import DropdownIconSvg from "../../svgs/dropdownIcon";
import DropdownIconOpenedSvg from "../../svgs/dropdownIconOpened";
import styles from "../Styles/styles";

function SelectDropdownComponent(props) {
    let itemList = props.itemList;
    let defaultItem = props.defaultItem;
    let isOpened = props.isOpened;
            return(
                <SelectDropdown
                    data={itemList}
                    onSelect={(selectedItem, index)=>{
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index)=>{
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index)=>{
                        return item
                    }}
                    defaultButtonText={defaultItem}
                    buttonStyle={styles.selectDropdownButton}
                    buttonTextStyle={styles.selectDropdownText}
                    rowTextStyle={styles.selectDropdownText}
                    rowStyle={styles.selectDropdownRowButton}
                    renderDropdownIcon={(isOpened)=>{
                        return isOpened?(<DropdownIconOpenedSvg/>):(<DropdownIconSvg/>)
                    }}
                    dropdownIconPosition={"right"}
                    onFocus={()=>{isOpened=!isOpened}}
                    onBlur={()=>{isOpened=!isOpened}}
                />
                )
}

export default SelectDropdownComponent;

