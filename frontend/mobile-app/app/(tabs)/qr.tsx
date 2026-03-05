import { View, Text, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function QR() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive Payment</Text>

      <View style={styles.qrBox}>
        <QRCode
          value="upi://pay?pa=test@upi&pn=HisabKitab&am=100"
          size={200}
        />
      </View>

      <Text style={styles.upi}>UPI ID: test@upi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f2f3f7",
    alignItems:"center",
    justifyContent:"center"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20
  },
  qrBox:{
    backgroundColor:"#fff",
    padding:25,
    borderRadius:15
  },
  upi:{
    marginTop:20,
    fontSize:16,
    color:"#777"
  }
});