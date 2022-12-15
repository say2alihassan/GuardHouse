import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {DATE_PICK} from '../assets/images';
import {FONTS} from '../Style/font';

const DatePick = () => {
  const [cal, setCal] = useState(false);
  const [selectedDATE, setDATE] = useState('');
  function OPEN() {
    setCal(!cal);
  }
  const calenderClick = date => {
    console.log(date, 'DATE--->');
    setDATE(date);

    setCal(!cal);
  };
  let Today = new Date().toDateString();
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
      <View
        style={{
          width: 350,
          height: 50,
          backgroundColor: '#fff',
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
        <Text style={{fontFamily: FONTS.MEDIUM}}>
          {selectedDATE.dateString || Today}
        </Text>
        <TouchableOpacity
          style={{height: 50, width: 50}}
          onPress={() => OPEN()}>
          <Image
            source={DATE_PICK}
            resizeMode={'contain'}
            style={{height: 40, width: 40}}
          />
        </TouchableOpacity>
      </View>
      {cal && (
        <Calendar
          enableSwipeMonths
          disabledDaysIndexes={[0, 6]}
          style={{
            width: Dimensions.get('screen').width,
            // height: 150,
          }}
          theme={{
            calendarBackground: '#000',
            textMonthFontFamily: FONTS.MEDIUM,
            dayTextColor: '#2d4150',
            textDisabledColor: '#ff3',
            monthTextColor: '#ff0000',
            selectedDayTextColor: '#ff0000',
            indicatorColor: 'blue',
            textDayFontFamily: FONTS.MEDIUM,
            textMonthFontFamily: FONTS.MEDIUM,
            textDayHeaderFontFamily: FONTS.MEDIUM,
            // textDayFontWeight: '300',
            textSectionTitleDisabledColor: '#d9e1e8',

            // textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          minDate={new Date().toDateString()}
          //   pastScrollRange={20}
          // Max amount of months allowed to scroll to the future. Default = 50
          //   futureScrollRange={2}
          // Enable or disable scrolling of calendar list
          //   scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          showScrollIndicator={true}
          onDayPress={date => {
            console.log('selected day============>', date);
            calenderClick(date);
          }}
        />
      )}
    </View>
  );
};

export default DatePick;

const styles = StyleSheet.create({});
