import { View, FlatList, Text } from 'react-native'
import postData from "../data/posts.json"
import Post from "../components/Post"

const PostList = ({route, navigation}) => {
    console.log("PostList")
    return (
        <View>
            <FlatList
                data={postData}
                renderItem={({ item }) => <Post info={item} />}
                keyExtractor={item=>item.id}
            />
        </View>
    )
}

export default PostList
