import { TextInput, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";

import IonIcons from '@expo/vector-icons/Ionicons';

import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
    const [name, setName] = useState(null)

    const saveData = async () => {
        try {
            await AsyncStorage.setItem('@kodein2022', name)
        } catch (error) {
            console.log(error);
        }
    }

    const handlerChangeName = (val) => {
        setName(val);
        saveData();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textName}>Type Your Fullname:</Text>
            <TextInput
                style={styles.inputName}
                value={name}
                onChangeText={handlerChangeName}
                placeholder="Sekolah Developer Indonesia"
                placeholderTextColor={'#808080'}
            />
            <Text style={styles.textStateName}>{name}</Text>
            <View style={styles.buttonContact}>
                <TouchableOpacity style={styles.boxContact} onPress={() => navigation.navigate('Contact')}>
                    <Text style={styles.textContact}>Contact Page</Text>
                    <IonIcons name="arrow-forward-outline" size={28} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        paddingHorizontal: 32,
    },
    textName: {
        fontWeight: 'bold',
    },
    inputName: {
        marginTop: 8,
        marginBottom: 32,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 16,
        borderRadius: 12,
    },
    boxContact: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    buttonContact: {
        borderWidth: 1,
        borderColor: '#004987',
        backgroundColor: '#004987',
        padding: 16,
        borderRadius: 12,
    },
    textContact: {
        fontWeight: 'bold',
        color: '#ffffff',
        fontSize: 18,
    },
    textStateName: {
        fontWeight: 'bold',
        color: '#353535',
        fontSize: 22,
        marginBottom: 32,
        textAlign: 'center',
    },
})