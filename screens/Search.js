import { ScrollView, ScrollViewBase, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";
const Search = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View  style={{marginTop:30,flexDirection:"row",marginLeft:20,marginRight:20,alignItems:"center",gap:70}}>
        <View style={{}}>
        <TextInput placeholder="Search for images or videoz" placeholderTextColor="white" style={{backgroundColor:"gray",width:"100%",marginLeft:30,marginRight:30,padding:3,borderRadius:5,}} />
        </View>
        <Text style={{ color: "white" }}>Search</Text>
      </View>

      <ScrollView style={{marginTop:20}}>
      <Divider />
      <View style={{ marginVertical: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Usman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{ width: "100%", height: 350 }}
          />
        </TouchableOpacity>
        <View style={{ marginVertical: 12, marginLeft: 5, marginRight: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="hearto" size={24} color="white" />
              <Feather name="message-circle" size={24} color="white" />
              <Octicons name="share-android" size={24} color="white" />
            </View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            7,849 Likes
          </Text>
        </View>
        <View style={{ marginLeft: 5, marginRight: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium. or sit amet consectetur adipisicin React Native Build
            with React Redux,Firebase (as a backend) ...
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 14 }}>
              View all 3 comments
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            choose a better build with us,have you guys intresetd for this huge
            Build comments below 🎇 🎉.
          </Text>
        </View>
      </View>
      {/* <View style={{ marginVertical: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Usman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8&w=1000&q=80",
            }}
            style={{ width: "100%", height: 350 }}
          />
        </TouchableOpacity>
        <View style={{ marginVertical: 12, marginLeft: 5, marginRight: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="hearto" size={24} color="white" />
              <Feather name="message-circle" size={24} color="white" />
              <Octicons name="share-android" size={24} color="white" />
            </View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            7,849 Likes
          </Text>
        </View>
        <View style={{ marginLeft: 5, marginRight: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium. or sit amet consectetur adipisicin React Native Build
            with React Redux,Firebase (as a backend) ...
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 14 }}>
              View all 3 comments
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            choose a better build with us,have you guys intresetd for this huge
            Build comments below 🎇 🎉.
          </Text>
        </View>
      </View> */}
      <View style={{ marginVertical: 12 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
          >
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Maheen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginVertical: 12 }}>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/team-professional-developer-programmer-cooperation-meeting-brainstorming-programming-website-working-software-141282860.jpg",
            }}
            style={{ width: "100%", height: 350 }}
          />
        </TouchableOpacity>
        <View style={{ marginVertical: 12, marginLeft: 5, marginRight: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <AntDesign name="hearto" size={24} color="white" />
              <Feather name="message-circle" size={24} color="white" />
              <Octicons name="share-android" size={24} color="white" />
              {/* <Image
                source={require("../../assets/send1.png")}
                style={{ width: 30, height: 30,backgroundColor:"white",borderRadius: 15, }}
              /> */}
            </View>
            <Feather name="bookmark" size={24} color="white" />
          </View>
        </View>
        <View style={{ marginLeft: 5 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            7,849 Likes
          </Text>
        </View>
        <View style={{ marginLeft: 5, marginRight: 5 }}>
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium. or sit amet consectetur adipisicin React Native Build
            with React Redux,Firebase (as a backend) ...
          </Text>
          <TouchableOpacity>
            <Text style={{ color: "gray", fontSize: 14 }}>
              View all 3 comments
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "white" ,marginBottom:12}}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            choose a better build with us,have you guys intresetd for this huge
            Build comments below 🎇 🎉.
          </Text>
        </View>
      </View>
      </ScrollView>
      </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
