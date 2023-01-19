import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'

import AppContext from './AppContext'

const BelajarUseContext = () => {
    const { konter } = useContext(AppContext);

    return (
        <View style={[styles.container]}>
            <Text style={[styles.title1,]}>
                Ini Adalah Nilai Konter Dari AppContext Yang Di Buat Di Belajar useState Dan Di Lempar Ke Halaman Belajar useContext.
            </Text>
            <Text style={[styles.bold, styles.title2]}>{konter}</Text>
        </View>
    )
}

export default BelajarUseContext

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        padding: 32,
    },
    bold: {
        fontWeight: 'bold',
    },
    title1: {
        fontSize: 20,
        paddingTop: 32,
        textAlign: 'center',
    },
    title2: {
        fontSize: 80,
        paddingTop: 32,
        textAlign: 'center',
    },
})