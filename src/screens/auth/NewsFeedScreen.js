import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, VirtualizedList, SectionList, ActivityIndicator, RefreshControl, } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from "moment";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import firestore from '@react-native-firebase/firestore';
import Firebase from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
// import handleProfile from "../helpers/handleProfile";
import PostCard from "../../components/PostCard";
import Loading from "../../components/Loading";
import logout from "../../helpers/logout";

// function renderPost(post, currentData) {

//   let currentUserProfile = [];

//   return (
//     <View style={styles.feedItem}>
//       <Image source={{ uri: currentData.photoURL }} style={styles.avatar} />
//       <View style={{
//         flex: 1,
//         marginRight: 16,
//       }}>
//         <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
//           <View>
//             <Text style={styles.name}>{currentData.name}</Text>
//             <Text style={styles.timestamp}>{moment(post.time).fromNow()}</Text>
//           </View>

//           <Ionicons name="add-outline" size={24} color="#73788B" />
//         </View>
//         <Text style={styles.post}>{post.text}</Text>
//         <Image source={{ uri: post.image }} style={styles.postImage} resizeMode="cover" />
//         <View style={{ flexDirection: "row" }}>
//           <Ionicons name="heart-outline" size={24} color="#73788B" style={{ marginRight: 16 }} />
//           <Ionicons name="chatbox-outline" size={24} color="#73788B" />
//         </View>
//       </View>
//     </View>
//   );
// }

export default function NewsFeedScreen({ navigation }) {
  // temporary data until we pull from Firebase

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
        // setLoading(false)

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
        renderItem={({ item }) => <PostCard navigation={navigation} post={item} />}
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