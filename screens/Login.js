import {
  ActivityIndicator,
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
const Login = () => {
  const navigation = useNavigation();
  const loginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An  email  is required"),
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
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={loginFormSchema}
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
            <View>
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

              <Text
                style={{
                  fontSize: 16,
                  color: "#6BB0F5",
                  alignSelf: "flex-end",
                  marginRight: 20,
                  textDecorationLine: "underline",
                }}
              >
                Forget Password?
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
                marginLeft: 10,
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              <Pressable
                onPress={() => navigation.navigate("HomeScreen")}
                style={styles.button(isValid)}
              >
                <Text style={styles.buttonText}>Login</Text>
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
              <Text style={{ fontWeight: "500" }}>Don't have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("signUpSCreen")}
              >
                <Text
                  style={{
                    color: "#6BB0F5",
                    fontWeight: "bold",
                    fontSize: 18,
                    textDecorationLine: "underline",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default Login;

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
    // backgroundColor: "#DDDDDD",
    padding: 8,
    borderColor: "gray",
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
