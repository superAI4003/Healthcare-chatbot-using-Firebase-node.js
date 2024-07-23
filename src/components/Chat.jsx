import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import NoProfile from '../assets/img/no-profile.png';
import Billy from '../assets/img/billy-gibbons.jpg';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    }
}));

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat_row' : 'p-chat__reverse';
    return (
        <ListItem className={classes}>
            <ListItemAvatar>
                {isQuestion ? (
                    <Avatar alt="icon" src={Billy} />
                ) : (
                    <Avatar alt="icon" src={NoProfile} />
                )}
            </ListItemAvatar>
            <div className="p-chat__bubble">{props.text}</div>
        </ListItem>
    );
};

export default Chat;
