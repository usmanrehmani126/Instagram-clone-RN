import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AddPostComponent = () => {
  const navigation=useNavigation()
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ flexDirection: "row", gap:100,alignItems:"center" }}>
       <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Ionicons name="arrow-back-outline" size={26} style={{marginLeft:12}} color="white" />
       </TouchableOpacity>
        <Text style={{ color: "white",textAlign:"center" }}>New Post</Text>
      </View>
    </View>
  );
};

export default AddPostComponent;

const styles = StyleSheet.create({});
// 2:31