import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategorieBox = (props) => {

    // const handlingNav = (props) => {
        
    // }
    return (
        <View>
            <View style={styles.categorie}>
                <View style={styles.categorieItem}><Text style={styles.text} >Fees</Text></View>
                <View style={styles.categorieItem}><Text style={styles.text}>Classes</Text></View>
            </View>
            <View style={styles.categorie}>
                <View style={styles.categorieItem}><Text style={styles.text}>Campus</Text></View>
                <View style={styles.categorieItem}><Text style={styles.text}>Books</Text></View>
            </View>
            <View style={styles.categorie}>
                <View style={styles.categorieItem}><Text style={styles.text}>Teacher Panel</Text></View>
                <View style={styles.categorieItem}><Text style={styles.text}>Admin panel</Text></View>
            </View>
        </View>
    )
}

export default CategorieBox;

const styles = StyleSheet.create({
    categorie: {
        width: '100%',
        padding: 0,
        margin: 0,
        // height: '50%',
        // paddingLeft: 5,
        // paddingRight: 5,
        flexDirection: 'row',
        // backgroundColor: 'green',
        justifyContent: 'space-around',
        // alignItems: 'center',
    },
    categorieItem: {
        width: '35%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        shadowColor: "#000",
        borderRadius: 10,
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        shadowOffset: {
            width: 0,
            height: 5,
        },
    },
    text: {
        fontSize: 20
    }
})
