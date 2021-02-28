import React, { useState } from 'react'
import { StyleSheet, TextInput, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { Form, Item, Input, Label } from 'native-base';



const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const handlingSign = () => {
        console.log(email, password)
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1db5b5' barStyle="dark-content" />
            <View style={styles.header}>
                <Image style={styles.splash_img}
                    source={require('../Images/Education7.png')}
                    resizeMode="contain"
                />
                <Text style={styles.text_header}>
                    "Spending time in eductional world means Investing time in right direction"
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]}>
                <View >
                    <Form>
                        <Item floatingLabel>
                            <Label>Email Address</Label>
                            <Input
                                autoCompleteType="email"
                                onChangeText={(e) => setEmail(e)}
                            />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input
                                autoCompleteType="password"
                                secureTextEntry={true}
                                onChangeText={(e) => setpassword(e)}
                            />
                        </Item>
                        <View style={styles.splash__buttons}>
                            <TouchableOpacity style={styles.splash__signIn} onPress={() => handlingSign()}>
                                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
                            </TouchableOpacity>
                            <View style={styles.SignUpText}>
                                <Text>Don't have account? </Text>
                                <TouchableOpacity style={styles.splash__signUp}>
                                    <Text style={{ color: "gray", fontWeight: 'bold', fontSize: 15 }} onPress={() => props.navigation.navigate("SignUp")}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Form>

                </View>

            </Animatable.View>
        </View >
    )

}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1db5b5'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        alignItems: 'center',
        paddingBottom: 50
    },
    splash_img: {
        width: "80%",
        height: "80%",
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#000',
        fontSize: 17,
        textAlign: 'center',
    },

    splash__buttons: {
        marginTop: 20,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    splash__signIn: {
        alignItems: 'center',
        backgroundColor: '#1db5b5',
        padding: 15,
        width: '100%',
        borderRadius: 10,
        marginBottom: 10
    },
    SignUpText: {
        marginTop: 20
    },
    SignUpText: {
        alignItems: 'center'
    }
})
