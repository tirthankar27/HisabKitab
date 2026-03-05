import { View, Text, FlatList, StyleSheet } from "react-native";

const transactions = [
  { id:"1", name:"Ramesh", amount:500, type:"credit" },
  { id:"2", name:"Rahul", amount:200, type:"payment" },
  { id:"3", name:"Amit", amount:1000, type:"credit" }
];

export default function Transactions() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transactions</Text>
      </View>

      {/* LIST */}
      <View style={styles.content}>
        <FlatList
          data={transactions}
          keyExtractor={(item)=>item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>

              <Text
                style={[
                  styles.amount,
                  item.type === "credit" ? styles.green : styles.red
                ]}
              >
                ₹ {item.amount}
              </Text>
            </View>
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f3f7"
  },

  header:{
    backgroundColor:"#2e4a7d",
    paddingTop:50,
    paddingBottom:30,
    paddingHorizontal:20,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
  },

  headerTitle:{
    fontSize:24,
    fontWeight:"bold",
    color:"#fff"
  },

  content:{
    padding:20
  },

  card:{
    backgroundColor:"#fff",
    padding:16,
    borderRadius:12,
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-between",
    elevation:2
  },

  name:{
    fontSize:18
  },

  amount:{
    fontSize:18,
    fontWeight:"bold"
  },

  green:{
    color:"#2e7d32"
  },

  red:{
    color:"#d32f2f"
  }

});