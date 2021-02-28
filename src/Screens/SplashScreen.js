import React from 'react';
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';

const SplashScreen = (props) => {
    return (
        <View style={styles.splash}>
            <StatusBar
                barStyle='dark-content'
                hidden={false}
                backgroundColor='#ffff'
            />
            <View style={styles.splash__one}>
                <Image style={styles.splash_img}
                    source={require('../Images/Education4.png')}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.splash__second}>
                <View style={styles.splash__educationQuote}>
                    <Text style={styles.splash__educationQuote1}>
                        Optimize <Text style={styles.splash__educationQuote2}>Workers</Text>
                    </Text>
                    <Text style={styles.splash__educationQuote3}>
                        An investment in knowledge pays the best interest
                </Text>
                </View>
                <View style={styles.splash__buttons}>
                    <TouchableOpacity style={styles.splash__signIn} onPress={() => props.navigation.navigate("SignIn")}>
                        <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 20 }}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.splash__signUp}>
                        <Text style={{ color: "gray", fontWeight: 'bold', fontSize: 15 }} onPress={() => props.navigation.navigate("SignUp")}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    splash__one: {
        flex: 0.65,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    splash__second: {
        flex: 0.35,
        width: "100%",
        height: "100%",
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    splash_img: {
        width: "80%",
        height: "80%",
    },
    splash__educationQuote: {
        alignItems: 'center',
        // backgroundColor: 'red',
        width: "95%"
    },
    splash__educationQuote1: {
        fontSize: 25,
    },
    splash__educationQuote2: {
        fontSize: 25,
        color: '#2ff1f5'
    },
    splash__educationQuote3: {
        fontSize: 15,
        color: '#000',
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    splash__buttons: {
        marginTop: 20,
        width: "100%",
        alignItems: 'center',

    },
    splash__signIn: {
        alignItems: 'center',
        backgroundColor: '#2ff1f5',
        padding: 15,
        width: '90%',
        borderRadius: 10,
        marginBottom: 10
    },
    splash__signUp: {
        color: 'gray',
        marginBottom: 10
    }
})
