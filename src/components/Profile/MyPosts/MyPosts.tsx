import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {ActionsTypes} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

type PostType = {
    id: number
    description: string
    likesCount: number
}
type MyPostsType = {
    posts: Array<PostType>
    updateNewPost: (text: string) => void
    addPost: () => void
    newPostText: string
}

function MyPosts(props: MyPostsType) {
    let postsElement = props.posts.map(p => <Post key={p.id} description={p.description} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.updateNewPost(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input onChange={onPostChange} value={props.newPostText} placeholder={'write your post'}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;