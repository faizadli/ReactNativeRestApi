import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Card, Button, Avatar } from "react-native-paper";

import AppContext from './AppContext'

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Basket = () => {
    
    const {konter, setKonter} = useContext(AppContext);
    const total = 10000000*konter

    const removeItem = () => {
        if(konter > 0){
            setKonter(konter-1);
        } else {
            null
        }
    }

    return (
        <View style={styles.container}>
            <Card style={styles.product} >
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Title title="Monitor" subtitle={'Rp.10.000.000'}  left={LeftContent}/>
                <Card.Actions>
                    <Button title="Kurang" onPress={() => setKonter(removeItem)}>Kurang </Button>
                    <View><Text style={[styles.bold, styles.title]}>{konter}</Text></View>
                    <Button title="Tambah" onPress={() => setKonter(konter+1)} >Tambah</Button>
                </Card.Actions>
            </Card>
            <Card style={styles.product} >
                <Card.Title title="Harga" subtitle={'Rp. 10.000.000'}/>
                <Card.Title title="Jumlah Item" subtitle={konter}/>
                <Card.Title title="Total" subtitle={'Rp.' + total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/>
            </Card>
        </View>
    )   
}

export default Basket

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