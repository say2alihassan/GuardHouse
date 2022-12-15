import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS} from '../Style/font';

const Head = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 30,
          backgroundColor: '#0000FF',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#fff', fontFamily: FONTS.BOLD, fontSize: 12}}>
          {' '}
          State{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 30,
          backgroundColor: '#0000FF',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Countryinput')}>
        <Text style={{color: '#fff', fontFamily: FONTS.BOLD, fontSize: 12}}>
          {' '}
          Phone{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 30,
          backgroundColor: '#0000FF',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('DatePick')}>
        <Text style={{color: '#fff', fontFamily: FONTS.BOLD, fontSize: 12}}>
          {' '}
          DATEPICKER{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 30,
          backgroundColor: '#0000FF',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ImageUpload')}>
        <Text style={{color: '#fff', fontFamily: FONTS.BOLD, fontSize: 12}}>
          {' '}
          Media{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Head;

const styles = StyleSheet.create({});
