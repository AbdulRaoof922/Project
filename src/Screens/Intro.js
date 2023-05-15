import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Dimensions } from 'react-native'
import { Button ,TouchableOpacity} from 'react-native'

import { useNavigation } from '@react-navigation/native'
const { height, width } = Dimensions.get("screen")
const data = [
    require("../images/chat.png"),
    require("../images/quote.png"),
    require("../images/quote_1.png")
]
const Intro = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.listView}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.itemView}>
                                <Image source={item} style={styles.ImageView} />
                                <Text style={styles.textbtnstyle}>Welcome</Text>
                            </View>
                        )
                    }} />
                   
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("HomeScreen")}>
                   <Text style={styles.buttontext}>Continue</Text>
                </TouchableOpacity>
            </View>
           
        </View>
        
    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"yellow"
    },
    itemView: {
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    ImageView: {
        height: 200,
        width: 200,
    },
    listView: {
        height: 250,
        marginTop: 100,
    },
    btnView: {
        position: "absolute",
        bottom: 20,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    btn:{
        height:50,
        width:300,
        backgroundColor:"purple",
        justifyContent:"center",
        alignItems:"center" ,
        borderRadius:10
    },
    buttontext:{
        fontSize:20,
        color:"white"

    },
    textbtnstyle:{
        fontSize:30,
        fontWeight:"600",
        marginTop:20
    }
 

})