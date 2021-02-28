import React from 'react';
import { StyleSheet, StatusBar, Image, TouchableOpacity, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Form, Item, Input, Label } from 'native-base';


const SignUp = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#1db5b5' barStyle="dark-content" />
            <View style={styles.header}>
                <Image style={styles.splash_img}
                    source={require('../Images/Education14.png')}
                    resizeMode="contain"
                />
                <Text style={styles.text_header}>
                    "Education is simply the soul of a society as it passes from one generation to another"
                </Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer]}>
                <View >
                    <Form>
                        <Item floatingLabel>
                            <Label>Email Address</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Confirm Password</Label>
                            <Input />
                        </Item>
                        <View style={styles.splash__buttons}>
                            <TouchableOpacity style={styles.splash__signIn} onPress={() => props.navigation.navigate("SignIn")}>
                                <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 20 }}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </Form>

                </View>

            </Animatable.View>
        </View >

    )
}

export default SignUp

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
