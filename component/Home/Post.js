import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Divider } from "@rneui/themed";

const Post = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
        <TouchableOpacity style={{marginTop:12}}>
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
          <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "bold" }}> Usman </Text>
            choose a better build with us,have you guys intresetd for this huge
            Build comments below 🎇 🎉.
          </Text>
        </View>
      </View>
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
                uri: "https://img.freepik.com/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419458.jpg?size=626&ext=jpg&ga=GA1.2.1345083404.1669650799&semt=sph",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Hubba Umar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Image
            source={{
              uri: "https://i.pinimg.com/236x/22/f6/c5/22f6c510324f415fd5f93591a834bcf4.jpg",
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
                uri: "https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg&ga=GA1.2.1345083404.1669650799&semt=sph",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Jhon Wick</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginVertical: 12 }}>
          <Image
            source={{
              uri: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*9U56EcvbDoSMTxLi.png",
            }}
            style={{ width: "100%", height: 400 }}
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
                uri: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg",
              }}
              style={styles.profileAccount}
            />
            <Text style={{ color: "white" }}>Jain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 6 }}>
            <Entypo name="dots-three-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginVertical: 12 }}>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/javascript-code-bracket-software-python-programming-developer-python-programming-developer-124596436.jpg",
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
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  profileAccount: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 12,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
});
