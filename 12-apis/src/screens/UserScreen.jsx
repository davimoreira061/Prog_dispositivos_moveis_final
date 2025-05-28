import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card } from 'react-native-paper'
import axios from 'axios'

export default function UserScreen({route}) {
  const [user, setUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const id = route.params

  const getUserInfo = async () => {
     axios.get(`https://dummyjson.com/users/${id}`)
    .then((response) => {
      setUser(response.data)
    })
    .catch(e => console.log(e))
    .finally(() => {
      return 0
    })
  }

  const getUserPosts = async () => {
    axios.get(`https://dummyjson.com/users/${id}/posts`)
    .then((response) => {
      setUserPosts(response.data)
      console.log(response.data)
    })
    .catch(e => console.log(e))
    .finally(() => {
      return 0
    })
  }

  useEffect(() => {
    getUserInfo()
    getUserPosts()
  }, [])


  return (
    <View>
      <Text>UserScreen</Text>
      <Card>
        <Card.Title
        title={ user.id + " " + user.firstName + " " + user.lastName}
        subtitle={user.email}
        left={(props) => <Avatar.Image {...props} source={{uri : user.image}}/>}
        />
        <Card.Content>
          <Text>Put some user info here bro!!!</Text>
        </Card.Content>
      </Card>

      <Card>
        <Card.Title/>
        <Card.Content>
          
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})