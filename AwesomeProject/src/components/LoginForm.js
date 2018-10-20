import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, View } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onLoginButtonPress() {
        const { email, passowrd } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, passowrd)
            .catch(() => {
                firebase.auth().signInWithEmailAndPassword(email, passowrd)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' })
                    })
            })
    }

    render() {
        return (
            <Card>

                <CardSection>
                    <Input
                        placeHolder="Enter Your Email"
                        label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        placeHolder="Enter Your Password"
                        label="Password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    <Button onPress={this.onLoginButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: red
    }
}

export default LoginForm;