import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from "./TextInput";

const FormDialog = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const inputName = (event) => {
        setName(event.target.value);
    }

    const inputEmail = (event) => {
        setEmail(event.target.value);
    }

    const inputDescription = (event) => {
        setDescription(event.target.value);
    }

    const validateRequiredInput = (...args) => {
        let isBlank = false;
        args.forEach(arg => {
            if (arg === '') {
                isBlank = true;
            }
        });
        return isBlank;
    };

    const validateEmailFormat = (email) => {
        const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email);
    }

    const submitForm = () => {
        if (validateRequiredInput(name, email, description)) {
            alert('必須入力欄が空白です。')
            return false;
        }

        if (!validateEmailFormat(email)) {
            alert('メールアドレスが不正です。')
            return false;
        }

        const payload = {
            text: '問い合わせがありました\n'
                + 'お名前：' + name + '\n'
                + 'メールアドレス：' + email + '\n'
                + '問い合わせ内容：\n' + description
        };

        const url = '';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('送信が完了しました。追ってご連絡します！');
            setName('');
            setEmail('');
            setDescription('');
            return props.handleClose();
        });
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">問い合わせ</DialogTitle>
            <DialogContent>
                <TextInput
                    label={"お名前（必須）"}
                    multiline={false}
                    rows={1}
                    value={name}
                    type={"text"}
                    onChange={inputName}
                />
                <TextInput
                    label={"メールアドレス（必須）"}
                    multiline={false}
                    rows={1}
                    value={email}
                    type={"email"}
                    onChange={inputEmail}
                />
                <TextInput
                    label={"問い合わせ内容（必須）"}
                    multiline={true}
                    rows={5}
                    value={description}
                    type={"text"}
                    onChange={inputDescription}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="primary">
                    キャンセル
                </Button>
                <Button onClick={submitForm} color="primary" autoFocus>
                    送信
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default FormDialog;
