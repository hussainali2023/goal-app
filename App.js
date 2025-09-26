import { Button, StyleSheet, Text, View } from 'react-native'

const App = () => {

  const clickFunc = () =>{
    const time = new Date().getSeconds()
    console.log(time)

  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Button onPress={clickFunc} title='Click Me'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"

  },
  text: {
    color:"red",
    fontSize:30,
    fontWeight:"bold"

  }
})

export default App
