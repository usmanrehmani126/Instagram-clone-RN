import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Divider } from "@rneui/base";
const BottomTab = ({navigation}) => {
  return (
    <View
      style={{
        width: "100%",
        height: 38,
        justifyContent: "center",
      }}
    >
      <Divider style={{marginBottom:6}} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity>
          <Entypo name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate("SearchScreen")}>
          <Feather name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("AddNewPost",{
          navigation
        })}>
          <Octicons name="diff-added" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Octicons name="video" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
            }}
            style={styles.profileAccount}
          />
        </TouchableOpacity>
      </View> 
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  profileAccount: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
});
