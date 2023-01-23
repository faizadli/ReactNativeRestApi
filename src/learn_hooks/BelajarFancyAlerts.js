import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FancyAlert } from 'react-native-expo-fancy-alerts'
import Ionicons from '@expo/vector-icons/Ionicons';
 
const BelajarFancyAlerts = () => {
    const [alertVisibleSuccess, setAlertVisibleSuccess] = useState(false)
    const [alertVisibleError, setAlertVisibleError] = useState(false)

    const handlePressSuccess = useCallback(() => {
        setAlertVisibleSuccess(true);
    },[]);

    const handleCloseSuccess = useCallback(() => {
        setAlertVisibleSuccess(false);
    },[]);

    const handlePressError = useCallback(() => {
        setAlertVisibleError(true);
    },[]);

    const handleCloseError = useCallback(() => {
        setAlertVisibleError(false);
    },[]);

  return (
    <View style={styles.container}> 
        <TouchableOpacity onPress={handlePressSuccess} style={[styles.button, styles.buttonSuccess]}>
            <Text style={styles.title}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressError} style={[styles.button, styles.buttonError]}>
            <Text style={styles.title}>Error</Text>
        </TouchableOpacity>
        <FancyAlert
            icon={
                <View style={[styles.alertSuccess, styles.buttonSuccess]}>
                    <Ionicons name="checkmark" size={30} color="white" onPress={handleCloseSuccess}/>
                </View>
            }
            style={{ backgroundColor: 'white' }}
            visible={alertVisibleSuccess}
        >
            <Text style={{ marginTop: -16, marginBottom: 32 }}>Your Are Administrator</Text>
            
        </FancyAlert>
        <FancyAlert
            icon={
                <View style={[styles.alertError, styles.buttonError]}>
                    <Ionicons name="close" size={30} color="white" onPress={handleCloseError}/>
                </View>
            }
            style={{ backgroundColor: 'white' }}
            visible={alertVisibleError}
        >
            <Text style={{ marginTop: -16, marginBottom: 32 }}>Your Email Or/End Password Wrong!</Text>
            
        </FancyAlert>
    </View>
  )
}

export default BelajarFancyAlerts

const styles = StyleSheet.create({
    container: { padding: 32 , flexDirection: 'row'},
    button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16, flex:1, marginHorizontal: 5},
    buttonSuccess: {
        backgroundColor: '#00A884'
    },
    buttonError: {
        backgroundColor: 'red'

    },
    title: { color: '#FFFFFF', textAlign: 'center', fontSize: 18, },
    alertSuccess : {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: '100%',
      },
    alertError : {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        width: '100%',
    },
})