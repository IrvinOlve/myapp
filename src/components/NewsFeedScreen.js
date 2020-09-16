import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, VirtualizedList, SectionList, } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firestore from '@react-native-firebase/firestore';
import Firebase from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

// temporary data until we pull from Firebase
function renderPost(post) {
  return (
    <View style={styles.feedItem}>
      <Image source={post.avatar} style={styles.avatar} />
      <View style={{
        flex: 1,
        marginRight: 16,
      }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
          <View>
            <Text style={styles.name}>{post.name}</Text>
            <Text style={styles.timestamp}>{moment(post.time).fromNow()}</Text>
          </View>

          <Ionicons name="add-outline" size={24} color="#73788B" />
        </View>
        <Text style={styles.post}>{post.text}</Text>
        <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />
        <View style={{ flexDirection: "row" }}>
          <Ionicons name="heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
          <Ionicons name="chatbox-outline" size={24} color="#73788B" />
        </View>
      </View>
    </View>
  );
}

const posts = [
  {
    id: "1",
    name: "Joe McKay",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    timestamp: 1569109273726,
    avatar: require("../assets/tempAvatar.jpg"),
    image: require("../assets/tempImage1.jpg")
  },
  {
    id: "2",
    name: "Karyn Kim",
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    timestamp: 1569109273726,
    avatar: require("../assets/tempAvatar.jpg"),
    image: require("../assets/tempImage2.jpg")
  },
  {
    id: "3",
    name: "Emerson Parsons",
    text:
      "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
    timestamp: 1569109273726,
    avatar: require("../assets/tempAvatar.jpg"),
    image: require("../assets/tempImage3.jpg")
  },
  {
    id: "4",
    name: "Kathie Malone",
    text:
      "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
    timestamp: 1569109273726,
    avatar: require("../assets/tempAvatar.jpg"),
    image: require("../assets/tempImage4.jpg")
  }
];


function HomeScreen() {
  return (
    <View>
      <Text>Screen 1</Text>
    </View>

  );
}

function HomeScreeen() {
  return (
    <SafeAreaView>
      <Text>Screen 1</Text>
    </SafeAreaView>

  );
}

export default function NewsFeedScreen() {
  const [tab, setTab] = useState(1);
  const Tab = createMaterialTopTabNavigator();

  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
  const user = auth().currentUser;

  useEffect(() => {
    const subscriber = firestore()
      .collection('users').doc(user.uid).collection('posts')
      .onSnapshot(querySnapshot => {
        const users = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>News Feed</Text>

      </View>
      <FlatList
        style={styles.feed}
        data={users}
        renderItem={({ item }) => renderPost(item)}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBECF4"
  },
  header: {
    paddingTop: 55,
    paddingBottom: 16,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    // shadowColor: "#454D65",
    // shadowOffset: { height: 5 },
    // shadowRadius: 15,
    // shadowOpacity: 0.2,
    // zIndex: 10
  },
  headerTitle: {
    top: 4.5,
    fontSize: 17,
    fontWeight: '600',
  },
  feed: {
    marginHorizontal: 20,
  },
  feedItem: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 8,
    flexDirection: "row",
    marginVertical: 8,

  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16,
    // borderWidth: 1,
    borderColor: 'black'
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    color: "#454D65"
  },
  timestamp: {
    fontSize: 11,
    color: "#C4C6CE",
    marginTop: 4
  },
  post: {
    marginTop: 16,
    fontSize: 14,
    color: "#838899"
  },
  postImage: {
    width: undefined,
    height: 150,
    borderRadius: 5,
    marginVertical: 16
  }
});