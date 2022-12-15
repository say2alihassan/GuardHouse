import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {FONTS} from '../Style/font';

import PhoneInput from 'react-native-phone-number-input';
const Countryinput = () => {
  const phoneInput = useRef(null);
  console.log(phoneInput);
  const [selectedCallingCode, setSelectedCallingCode] = useState('90');
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <PhoneInput
        placeholder="Type here....... "
        // layout="second"
        // defaultValue="0993833"
        containerStyle={[
          {
            backgroundColor: '#fff',
            height: 60,
            width: 300,
            borderRadius: 20,
            borderColor: '#000',
            borderWidth: 2,
            paddingHorizontal: 5,
            // paddingVertical: 5,
            overflow: 'hidden',
          },
        ]}
        // disableArrowIcon
        textInputStyle={{
          position: 'absolute',
          top: -25,
          // alignSelf: 'center',
          color: '#000',
          // backgroundColor: '#000',
          borderLeftWidth: 1,
          borderLeftColor: '#000',
          fontFamily: FONTS.MEDIUM,
          fontSize: 16,
          // marginTop: -10,
          // top: 3,
          bottom: -5,
          left: 60,
          // marginLeft: 30,
          width: Dimensions.get('screen').width,
          height: 110,
        }}
        countryPickerButtonStyle={{
          backgroundColor: '#fff',
          width: 50,
          // position: 'absolute',
        }}
      />
    </View>
  );
};

export default Countryinput;

const styles = StyleSheet.create({
  inputs: {
    width: 300,
    height: 60,
    marginTop: 5,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
    // padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 16,
    color: '#000',
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
  },
});
