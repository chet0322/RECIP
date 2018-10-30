import React from "react";
import {TouchableOpacity, Text, KeyboardAvoidingView, View} from "react-native";
import styles from '../designs/stylings';

export default class Button extends React.Component {
    render() {
        const {
            title,
            onPress,
            disabled,
        } = this.props;
        return (
            <TouchableOpacity disabled={disabled} style={disabled?styles.disableButton:styles.button} onPress={onPress}>
                <Text style={{textAlign: 'center', color: 'white', fontSize: 15,}}>{title}</Text>
            </TouchableOpacity>
        )
    };
};

export class FormText extends React.Component {
    render() {
        const {
            title,
            flag,
            errorTitle,
        } = this.props;
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                    <Text style={styles.textLabel}>{ title }</Text>
                </View>
                {
                    flag &&
                    <View style={styles.errorView}>
                        <Text style={styles.errorMessage}>{ errorTitle }</Text>
                    </View>
                }
            </View>
        )
    }
}

export class LinkMessage extends React.Component {
    render() {
        const {
            message,
            link,
            onPress,
        } = this.props;
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={{fontSize: 15}}>{ message }</Text>
                <TouchableOpacity onPress={ onPress }>
                    <Text style={{color: 'rgb(150, 10 , 10)', fontSize: 15}}>{ link }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export const Container = (props) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            {props.children}
        </KeyboardAvoidingView>
    )
};

export const Form = (props) =>{
    return (
        <View style={styles.form}>
            {props.children}
        </View>
    )
};
