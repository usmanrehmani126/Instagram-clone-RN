import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "@rneui/themed";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import validUrl from "valid-url";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A  URL  is required"),
  caption: Yup.string().max(2200, "Caption has reached the maximum character"),
});
const PLACE_HOLDER_IMAGE_URL =
  "https://yt3.ggpht.com/kzDbyAHTpiUJT6raiotEabq3eRIwYkLlFynU4w0OCPIEYLQQDJcQTZ7oh7sTHc_eG-QNDdAd1PQ=s88-c-k-c0x00ffffff-no-rj-mo";
const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACE_HOLDER_IMAGE_URL);
  const navigation = useNavigation();
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        console.log("your post upload successfully");
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              flexDirection: "row",
              gap: 30,
              marginLeft: 20,
              marginRight: 20,
              marginTop: 60,
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : PLACE_HOLDER_IMAGE_URL,
              }}
              style={{ width: 100, height: 100, borderRadius: 12 }}
            />
            <View>
              <TextInput
                placeholder="Write a caption..."
                placeholderTextColor="white"
                style={{
                  color: "white",
                  fontSize: 18,
                  marginBottom: 20,
                  // backgroundColor: "gray",
                  // borderWidth: 1,
                  // paddingHorizontal: 30,
                  // paddingVertical: 5,
                }}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.letter}
              />
            </View>
          </View>
          <Divider style={{ margin: 20 }} />
          <TextInput
            placeholder="Enter Image Url"
            placeholderTextColor="white"
            style={{
              color: "white",
              fontSize: 16,
              backgroundColor: "gray",
              borderWidth: 1,
              paddingHorizontal: 30,
              paddingVertical: 5,
              marginLeft: 20,
              marginRight: 20,
            }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red" }}>{errors.imageUrl}</Text>
          )}
          <View style={{ marginLeft: 30, marginRight: 30, marginVertical: 20 }}>
            <Button title="Share" onPress={handleSubmit} disabled={!isValid} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
// 2:43:42 / 5:57:23
