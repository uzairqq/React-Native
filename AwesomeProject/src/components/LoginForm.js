import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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
                <CardSection />
                <Input
                    placeHolder="Enter Your Password"
                    label="Password"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm;