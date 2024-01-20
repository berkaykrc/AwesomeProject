import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';

const MyButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{props.myTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
  },
  buttonContainer: {
    backgroundColor: 'cyan',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
});

export default MyButton;
