import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {createContext, useContext} from 'react'
import AppContext from './AppContext'

const Belajar = ({ navigation }) => {
  const { konter } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('BelajarUseState', { getTitle: 'useState page' })} style={[styles.button, styles.marginBottom]}>
        <Text style={styles.title}>useState</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BelajarUseContext')} style={[styles.button, styles.marginBottom]}>
        <Text style={styles.title}>useContext</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('BelajarBasket', {qty: konter})} style={[styles.button, styles.marginBottom]}>
        <Text style={styles.title}>Basket</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Belajar

const styles = StyleSheet.create({
    container: { padding: 32 ,},
    button: { backgroundColor: '#00A884', paddingVertical: 16, borderRadius: 16, },
    title: { color: '#FFFFFF', textAlign: 'center', fontSize: 18, },
    marginBottom: { marginBottom: 8, }
})