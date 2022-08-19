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
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts(props: MyPostsType) {
    let postsElement = props.posts.map(p => <Post key={p.id} description={p.description} likesCount={p.likesCount}/>)
    let newPostElement = props.newPostText

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }


    let onPostChange = (e: ChangeEvent<HTMLInputElement>) => {
        let post = e.target.value
        props.dispatch(updateNewPostTextActionCreator(post))
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <input value={newPostElement} onChange={onPostChange} placeholder={'write your post'}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;