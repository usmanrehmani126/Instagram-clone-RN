import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const Header = () => {
  return (
    <View style={{ marginTop: 40,marginBottom:30 }}>
      <View
        style={{
          marginLeft: 12,
          marginRight: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
        }}
      >
        <TouchableOpacity>
          <Text style={{ color: "white", fontSize: 30 }}>instagram</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", gap: 12, marginTop: 6 }}>

          <TouchableOpacity>
            <AntDesign name="hearto" size={22} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>3</Text>
            </View>
            <FontAwesome5 name="facebook-messenger" size={22} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  unreadBadge: {
    position: "absolute",
    bottom: 20,
    right:6,
    backgroundColor: "red",
    width: 20,
    height: 18,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    zIndex:180
  },
  unreadBadgeText: {
    color: "white",
    fontSize:12
  },
});
