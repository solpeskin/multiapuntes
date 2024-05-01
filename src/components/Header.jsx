import React from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleProfilePress()} style={styles.iconContainer}>
          <Icon name="user-circle" size={30} color="#9A3B3B" /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCreateContentPress()} style={styles.iconContainer}>
          <Icon name="plus-circle" size={30} color="#9A3B3B" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSearchPress()} style={styles.iconContainer}>
          <Icon name="search" size={30} color="#9A3B3B" /> 
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleHomePress()} style={styles.iconContainer}>
          <Icon name="home" size={30} color="#9A3B3B" /> 
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F2ECBE',
  },
  iconContainer: {
    paddingHorizontal: 10,
  },
});

export default Header;
