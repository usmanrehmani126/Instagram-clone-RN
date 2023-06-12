import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo";

const Stories = () => {
  const USERS = [
    // {
    //   id: "2",
    //   image:
    //     "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    //   name: "your story",
    // },
    {
      id: "21",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      name: "USAMASAJID",
    },
    {
      id: "0",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      name: "usman",
    },
    {
      id: "11",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      name: "Maheen",
    },
    {
      id: "12",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      name: "Hubba Umar",
    },
    {
      id: "13",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      name: "sufyan",
    },
    {
      id: "133",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Ahmed",
    },
    {
      id: "134",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
      name: "sufyan",
    },
    {
      id: "13444",
      image:
        "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=612x612&w=0&k=20&c=eU56mZTN4ZXYDJ2SR2DFcQahxEnIl3CiqpP3SOQVbbI=",
      name: "Ali",
    },
  ];
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            }}
            style={styles.storyImageUpload}
          />
          <View style={styles.plusParent}>
            <Text style={styles.plusParentText}>+</Text>
          </View>
          <Text style={{ color: "white", marginLeft: 6 }}>your story</Text>
        </TouchableOpacity>

        {USERS.map((story, index) => (
          <TouchableOpacity
          key={index}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={{
                uri: story.image,
              }}
              style={styles.storyImage}
            />
            <Text style={{ color: "white", marginLeft: 6 }}>{story.name.length>8?story.name.substring(0,8).toLocaleLowerCase() + "...":story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={{ color: "white" }}></Text>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 12,
    borderWidth: 2,
    borderColor: "#ff8501",
  },
  storyImageUpload: {
    marginRight: 20,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  plusParent: {
    backgroundColor: "#6C00FF",
    position: "absolute",
    right: 10,
    top: 40,
    width: 20,
    height: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  plusParentText: {
    fontSize: 16,
    color: "white",
  },
});
