import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../component/Home/Header";
import Stories from "../component/Home/Stories";
import Post from "../component/Home/Post";
import BottomTab from "../component/Home/BottomTab";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Stories />
        <Post />
      </ScrollView>
      <BottomTab navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
