import {
    addPostAC,
    deletePostAC, profileReducer,
    ProfileReducerInitialStateType,
    ProfileUserType,
    setStatusAC,
    setUserProfileAC
} from '../profile-reducer';

let initialState = {} as ProfileReducerInitialStateType

beforeEach(() => {
    initialState = {
        posts: [
            {id: 1, description: 'It is my first post', likesCount: 20},
            {id: 2, description: 'Hi, how are you?', likesCount: 12},
            {id: 3, description: 'Hey, i write this post', likesCount: 25},
            {id: 4, description: 'YOO, subscribers!', likesCount: 10},
        ],
        newPostText: '',
        profile: {} as ProfileUserType,
        status: ''
    }
})

test('new post should be added', () => {
    const action = addPostAC('New Post')

    const result = profileReducer(initialState, action)



    expect(result.posts.length).toBe(5)
    expect(result.posts[0].description).toBe('New Post')
    expect(result.posts[0].likesCount).toBe(0)
})

test('post should be deleted', () => {
    const action = deletePostAC(1)

    const result = profileReducer(initialState, action)

    expect(result.posts.length).toBe(3)
})

test('status should be changed', () => {
    const action = setStatusAC("yOOO")

    const result = profileReducer(initialState, action)

    expect(result.status).toBe("yOOO")
})
test('profile should be changed', () => {
    const action = setUserProfileAC({aboutMe: 'I student', userId: 2, fullName: '', lookingForAJob: false, lookingForAJobDescription: '', photos: {small: '', large: ''}})

    const result = profileReducer(initialState, action)

    expect(result.profile.aboutMe).toBe('I student')
    expect(result.profile.userId).toBe(2)

})