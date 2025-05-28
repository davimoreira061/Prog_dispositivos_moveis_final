import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import {
  ActivityIndicator,
  Avatar,
  Card,
  IconButton,
} from "react-native-paper";

export default function HomeScreen({navigation, route}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await axios
      .get("https://dummyjson.com/users")
      .then((res) => {
        setUsers(res.data.users);
        return res.data.users;
      })
      .catch((e) => console.log(e));
  };
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "left", "right"]}>
      <Text>HomeScreen</Text>
      <FlatList
        data={users}
        renderItem={(user) => {
          return (
            <Card style={{ marginBottom: 12 }}
            onPress={() => navigation.navigate('UserScreen', user.item.id)}
            >
              <Card.Title
                title={user.item.username}
                left={(props) => (
                  <Avatar.Image {...props} source={{ uri: user.item.image }} />
                )}
                right={(props) => (
                  <IconButton icon={"chevron-right"} size={30} />
                )}
              />
              <Card.Content>
                <Text>
                  Fullname: {user.item.firstName} {user.item.lastName}
                </Text>
                <Text>Country: {user.item.address.country}</Text>
                <Text>Email: {user.item.email}</Text>
              </Card.Content>
            </Card>
          );
        }}
        ListEmptyComponent={
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#4264a8" />
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
