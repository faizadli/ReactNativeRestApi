import { TextInput, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Card, Button, Avatar } from "react-native-paper";
import React, { useContext, useState } from "react";

import AppContext from './AppContext';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Product = () => {
    const {konter, setKonter} = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Card style={styles.product} >
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title="Monitor" subtitle="Rp 10.000.000 "  left={LeftContent}/>
                <Card.Actions>
                    <Button onPress={() => setKonter(konter+1)}>Add To Cart</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        paddingHorizontal: 32,
    },
    product: {
        marginBottom: 50,
    },
    bold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 30,
    },
    box: {
        marginTop: 32,
        alignItems:'center',
        flexDirection: 'row',
    },
    boxItem: {
        marginHorizontal: 26,
    },
})