import React from 'react';
import {SideBarPropsType} from '../../../App';
import {connect} from 'react-redux';
import SideBar from './SideBar';
import {AppStateType} from '../../../redux/redux-store';

type MapStatePropsType = {
    friends: Array<SideBarPropsType>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        friends: state.sideBarPage.friends
    }
}
const SideBarContainer = connect(mapStateToProps)(SideBar)

export default SideBarContainer;