
import {connect} from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import Nav from "./Navbar";


let mapFriendsProps = (state :AppStateType) =>{
    return {
        friends : state.sideBar.friends
    }
}
const navContainer = connect(mapFriendsProps)(Nav)

export default navContainer;