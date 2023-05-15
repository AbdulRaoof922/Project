import { StyleSheet, Text, View, Image, FlatList, ViewBase, TouchableOpacity, Share, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Clipboard from '@react-native-clipboard/clipboard';



const HomeScreen = () => {
  const [data, setData] = useState()


  useEffect(() => {
    getdata()
  }, [])
  const getdata = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const result = await response.json();
    console.log(result)
    setData(result)
  }
  const onShare = async (text) => {
    try {
      const result = await Share.share({
        message:
          text
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.firsttext}>Quotes</Text>
        <Text style={styles.secondtext}>Hub</Text>
      </View>
      <View>
        <FlatList data={data} renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image source={require("../images/open.png")} style={[styles.imageview, { marginTop: 10, marginLeft: 10 }]} />
              <Text style={styles.quotetext}>{item.text}</Text>
              <Text style={styles.authortext}>{item.author}</Text>
              <Image source={require("../images/close.png")} style={[styles.imageview, { marginTop: 10, marginRight: 10, alignSelf: "flex-end", marginBottom: 10 }]} />
              <View style={styles.bottomView}>
                <TouchableOpacity style={styles.btn} onPress={() => { Clipboard.setStrings(item.text + ' ' + item.author); console.log("copied text") }}>
                  <Image style={styles.btnimage} source={require("../images/copy.png")} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => {
                  onShare(item.text)
                }}
                >
                  <Image style={styles.btnimage} source={require("../images/share.png")} />

                </TouchableOpacity>
              </View>
            </View>
          )
        }} />
      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    height: 60,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 1
  },
  firsttext: {
    fontSize: 30,
    fontWeight: "800",
    color: "black"
  },
  secondtext: {
    fontSize: 20,
    color: "red"
  },
  itemView: {
    width: "90%",

    borderRadius: 5,
    borderWidth: 0.3,
    alignSelf: "center",//horizontal center 
    marginTop: 10

  },
  imageview: {
    height: 30,
    width: 30,
  },
  quotetext: {
    margin: 10,
    fontSize: 16,
    fontWeight: "600",

  },
  authortext: {
    color: "red",
    alignSelf: "flex-end",
    marginRight: 10

  },
  bottomView: {
    height: 50,
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",

  },
  btn: {
    height: 40,
    width: "40%",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#e6e6e6",
    marginBottom: 20,
    alignItems: "center"

  },
  btnimage: {
    height: 30,
    width: 30,

  }

})





//  onPress={() => {onShare(item.text)