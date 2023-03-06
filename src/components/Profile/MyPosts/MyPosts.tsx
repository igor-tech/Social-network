import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {reduxForm} from 'redux-form';
import {AddPostForm} from './AddPostForm';

type PostType = {
    id: number
    description: string
    likesCount: number
}
type MyPostsType = {
    posts: Array<PostType>
    addPost: (newPostBody: string) => void
    newPostText: string
}

function MyPosts(props: MyPostsType) {
    let postsElement = props.posts.map(p => <Post key={p.id} description={p.description} likesCount={p.likesCount}/>)

    const AddPostForm = (values: any) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
           <AddPostFormRedux onSubmit={AddPostForm}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}

const AddPostFormRedux = reduxForm({form: 'AddPostForm'})(AddPostForm)

export default MyPosts;