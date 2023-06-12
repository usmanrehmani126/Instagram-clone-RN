import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddPostComponent from "../../component/Post/AddPostComponent";
import FormikPostUploader from "../../component/Post/FormikPostUploader";

const AddNewPost = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
      <AddPostComponent />
      <FormikPostUploader />
    </View>
  );
};

export default AddNewPost;

const styles = StyleSheet.create({});
