import React from "react";
import { View, Image, Text, StyleSheet, ImageBackground } from "react-native";

const BelajarImageBackground = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/bg.jpg')}
                resizeMode={'cover'}
                style={styles.background}
            >
                <Image 
                    style={[styles.img, styles.mt30]}
                    resizeMode={'contain'}
                    source={require('../assets/images/img-1.jpg')}
                />
                <Image 
                    style={[styles.img, styles.mt20]}
                    resizeMode={'contain'}
                    source={require('../assets/images/img-2.jpg')}
                />
                <Image 
                    style={[styles.img, styles.mt20]}
                    resizeMode={'contain'}
                    source={{ uri: 'https://bit.ly/3BbSOJN' }}
                />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    background: {
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    img: {
        width:350,
        height:197,
        borderRadius:12,
    },
    mt20: {
        marginTop:20,
    },
    mt30: {
        marginTop:30,
    },
});

export default BelajarImageBackground;