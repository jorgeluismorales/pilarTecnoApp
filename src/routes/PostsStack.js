import React from 'react';
import Posts from '../screens/Posts';
import PostDetail from '../screens/PostDetail';
import PostEdit from '../screens/PostEdit';
import PostCreate from '../screens/PostCreate';
import { createStackNavigator } from '@react-navigation/stack';

const PostStack = createStackNavigator();

export default function PostsStackScreen () {
    return(
        <PostStack.Navigator>
            <PostStack.Screen name="posts" component={Posts} />
            <PostStack.Screen name="postDetail" component={PostDetail} />
            <PostStack.Screen name="postEdit" component={PostEdit} />
            <PostStack.Screen name="postCreate" component={PostCreate} />
        </PostStack.Navigator>
    )
}