import { Text, View, StyleSheet, Image } from "react-native"
import { Post } from "../types";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from "react";

type PostListItemProps = {
    post: Post
};

type FooterButtonProp = {
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
};

function FooterButton({text, icon}: FooterButtonProp){
    return(
        <View style={{flexDirection: 'row'}}>
            <FontAwesome name={icon} size={24} color={"gray"}/>
                <Text style={{marginLeft:5, color:'gray', fontWeight:'500'}}>
                    {text}
                </Text>
        </View>
    )
}

export default function PostListItem({ post }:PostListItemProps){
    return(
        <View style = {styles.container}>
            {/* Header */}
            <View style ={styles.header}>
                <Image 
                source={{ uri: post.author.image }}
                style = {styles.userImage}
                />
                <View>
                    <Text style = {styles.userName}>{post.author.name}</Text>
                    <Text>{post.author.position}</Text> 
                </View>
            </View>

            {/* Text content */}

            <Text style = {styles.content}>{post.content}</Text>
            
            {/* Image content */}

            {post.image && <Image 
            source={{uri: post.image}}
            style = {styles.postImage}
            />}

            {/* Footer */}
            <View style={styles.footer}>
                <FooterButton text = "Likes" icon = "thumbs-o-up"/>
                <FooterButton text = "Comments" icon = "comment-o"/>
                <FooterButton text = "Share" icon = "share"/>

            </View>
          
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: 'red',
    },
    //Header
    header:{
        flexDirection : 'row',
        alignItems: 'center',
        padding: 10,
    },
    userName:{
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom:3,
    },
    //Content
    content:{
        margin:10,
        marginTop:0
    },
    //Body
    userImage:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight: 10,
    },
    //Image
    postImage:{
        width: '100%',
        aspectRatio: 1,
    },
    //Footer
    footer:{
        flexDirection:'row',
        paddingVertical: 10,
        justifyContent: 'space-around',
        borderTopWidth:0.4,
        borderColor:'lightgray'
    }
})
