import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { globalStyle } from '../assets/styles';

 const HomeScreen = ({navigation}) =>  {
    return (
      <View style={globalStyle.container}>
            <Text style={globalStyle.title}> Quiz Game </Text>
            <Button title='Start Quiz' onPress={() => navigation.navigate('Quiz')}></Button>
      </View>
    );
}
export default HomeScreen