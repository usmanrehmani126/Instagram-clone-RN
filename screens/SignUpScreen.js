import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const signUpSchema = Yup.object().shape({
    email: Yup.string().email().required("An  email  is required"),
    username: Yup.string().required().min(3, "A username is required"),
    password: Yup.string()
      .required()
      .min(8, "your password must be at least 8 characters long"),
  });
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/insta_logo.webp")}
          style={[
            { width: 150, height: 150, borderRadius: 25 },
            styles.imageLogo,
          ]}
        />
      </View>

      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={signUpSchema}
        validateOnMount={true}
      >
        {({ handleBlur, handleChange, handleSubmit, values, isValid }) => (
          <>
            <View>
              <View style={[styles.textInputFields]}>
                <TextInput
                  placeholder="name"
                  placeholderTextColor="black"
                  //   autoCapitalize="none"
                  //   autoFocus={true}
                  //   onChangeText={handleChange("name")}
                  //   onBlur={handleBlur("name")}
                  //   value={values.name}
                />
              </View>

              <View
                style={[
                  styles.textInputFields,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="Phone number,username or email"
                  placeholderTextColor="black"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <View
                style={[
                  styles.textInputFields,
                  {
                    borderColor:
                      1 > values.password.length || values.password.length > 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholder="password"
                  placeholderTextColor="black"
                  autoCorrect={false}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>
            </View>
            <View
              style={{
                marginRight: 10,
                marginLeft: 10,
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <Pressable onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText} onPress={()=>navigation.navigate("HomeScreen")}>Register</Text>
              </Pressable>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <Text style={{ fontWeight: "500" }}>
                All ready have an account! 
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("loginScreen")}
                style={{marginLeft:4}}
              >
                <Text
                  style={{
                    color: "#6BB0F5",
                    fontWeight: "bold",
                    fontSize: 18,
                    textDecorationLine: "underline",
                  }}
                >
                   Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingVertical: 30,
    backgroundColor: "white",
    flex: 1,
  },
  logoContainer: {
    marginTop: 60,
    alignSelf: "center",
  },
  textInputFields: {
    marginLeft: 12,
    marginRight: 12,
    borderWidth: 0.7,
    padding: 8,
    borderColor: "#ccc",
    marginBottom: 12,
    borderRadius: 5,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#6BB0F5" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 36,
    borderRadius: 4,
  }),
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
});
