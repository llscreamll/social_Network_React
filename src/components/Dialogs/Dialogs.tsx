import React from 'react'
import style from "./Dialogs.module.css";
import Users from "./Users/Users";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {initialStateType} from "../../redux/dialogs-reducer";
import {Redirect} from 'react-router-dom';


const maxLength90 = maxLengthCreator(90)

type PropsType = {
    authDisabled : boolean
    dialogsPage:initialStateType
    addNewMessagesDialogs : ( message: string) => void
}

export type NewMessageFormValuesType = {
    newMessageBody : string
}
type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>


const Dialogs : React.FC<PropsType> = (props) => {
    if(!props.authDisabled) { return <Redirect to="/login" />}


    let addNewMessage = (newMessage : NewMessageFormValuesType) =>{

        props.addNewMessagesDialogs(newMessage.newMessageBody);
        newMessage.newMessageBody=""
    }

    return (
        <div className={style.container}>
            <h1>Test message:</h1>
        <div className={style.content}>

            <div className={style.contentUsers}>
                {props.dialogsPage.users.map(el => <Users users={el.user} id={el.id} key={el.id}/>)}
            </div>
            <div className={style.contentMessages}>
                {props.dialogsPage.messages.map(el => <div className={style.messagesStyle} key={el.id}>{el.mes}</div>)}
            </div>
        </div>
            <div className={style.formStyles}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

type DialogsPropsType = {}

let AddMessageForm : React.FC<InjectedFormProps<NewMessageFormValuesType, DialogsPropsType> & DialogsPropsType> = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} >
            <div className={style.formInput}>
            {createField<NewMessageFormValuesKeysType>("Enter you message", "newMessageBody", [required,maxLength90], Textarea)}
            </div>


            <button className={style.buttonSend}>Send</button>
        </form>
    )
}

let  AddMessageFormRedux = reduxForm<NewMessageFormValuesType>({
    form : "message"
})(AddMessageForm)



export default Dialogs;
