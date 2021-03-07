import React from 'react'
import { StyleSheet, StatusBar, Text, View } from 'react-native'
import CategorieBox from "./CategorieBox";

const Home = () => {
    return (
        <View style={styles.Home}>
            <StatusBar backgroundColor='#1db5b5' barStyle="dark-content" />
            <View style={styles.Home__Header}>
                <Text>Header</Text>
            </View>
            <View style={styles.Home__Footer}>
                <CategorieBox/>
                {/* <CategorieBox /> */}

            </View>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    Home: {
        flex: 1,
        backgroundColor: '#fff',
    },
    Home__Header: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    Home__Footer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        justifyContent: 'center'
    },
    Footer__Categrories: {

        backgroundColor: 'yellow',
        // width: '95%',
        height: '95%',
        // alignItems: 'center',
        // justifyContent: 'center'
    },


})
