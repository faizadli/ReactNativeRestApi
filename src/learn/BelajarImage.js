import React, { useState, useEffect } from "react";
import { View,Image,StyleSheet } from 'react-native';


const BelajarImage = () => {
    return (
        
            <View  style={styles.imgcon}>
                <Image style={styles.imgbicth} source={require('../assets/images/img-2.jpg')}/>            
            </View>
        
    )
}

export default BelajarImage;
const styles = StyleSheet.create({

    imgbicth: {
        width: 300,
        height: 200,
        borderRadius: 20,
    },

    imgcon: {
        marginTop: 100,
        
        alignItems: 'center',
    }

});