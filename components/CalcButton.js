
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class CalcButton extends React.Component {

    static defaultProps = {
        onPress: function() { },
        title: "",
        color: "white",
        backgroundColor: "black",
        style: { },
    }

    render() {
        var bc = this.props.backgroundColor;

        return(
            <TouchableOpacity onPress={this.props.onPress} style={[styles.container, { backgroundColor: bc }, {...this.props.style}]}>
                <Text style={[styles.text, { color: this.props.color }]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderRadius: 70,
        margin: 5,
    },
    text: { 
        fontSize: 25,
        fontWeight: '400',
    },
});