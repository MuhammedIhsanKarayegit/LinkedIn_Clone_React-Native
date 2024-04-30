import { Text } from "react-native"
import { Post } from "../Types";
import { User } from "../Types";

type PostListItemProps = {
    post: Post
};

export default function PostListItem({ post }:PostListItemProps){
    return <Text>{post.content}</Text>
    
}