import React from "react";
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity,} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [22, 23, 24, 25, 26, 27, 28];

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
      <View style={styles.profile}>
    <Image
      style={styles.Image}
      source={{ uri: "https://thumbs.dreamstime.com/b/generated-image-372601986.jpg" }}
      
    />
    <View style={{alignItems:"center",}}>
      <Text style={styles.name}>Hello, Sanya</Text>
      <Text style={styles.date}>Today 25 Nov.</Text>
    </View>
  </View>

  <TouchableOpacity>
    <Ionicons name="search-outline" size={26} color="#474747ff" />
  </TouchableOpacity>
</View>

    
      <View  style={styles.Card}>
        <Text style={styles.Title}>Daily challenge</Text>
        <Text style={styles.Subtitle}>
          Do your plan before 09:00 AM
        </Text>

    
        <View style={styles.comProfile}>
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/44.jpg" }}
            style={styles.avatar}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }}
            style={[styles.avatar, { left: -10 }]}
          />
          <Image
            source={{ uri: "https://randomuser.me/api/portraits/women/46.jpg" }}
            style={[styles.avatar, { left: -20 }]}
          />
          <View style={[styles.avatar, styles.moreAvatar, { left: -30 }]}>
            <Text style={styles.moreAvatarText}>+4</Text>
          </View>
        </View>

        <Image
          source={{
            uri: "https://thumbs.dreamstime.com/b/generated-image-372601986.jpg",
          }}
          style={styles.Img}
        />
      </View>

     <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateContainer}
      >
        {days.map((day, index) => {
          const active = day === "Wed";
          return (
            <View
              key={index}
              style={[styles.dateCircle, active && styles.activeDateCircle]}
            >
              <Text
                style={[styles.dateText, active && styles.activeDateText]}
              >
                {day}
              </Text>
              <Text
                style={[styles.dateNum, active && styles.activeDateText]}
              >
                {dates[index]}
              </Text>
            </View>
          );
        })}
      </ScrollView>

      
      <Text style={styles.sectionTitle}>Your plan</Text>

      <View style={styles.planContainer}>
       
        <View style={[styles.planCard, { backgroundColor: "#FBCB6D" }]}>
          <Text style={styles.planTag}>Medium</Text>
          <Text style={styles.planTitle}>Yoga Group</Text>
          <Text style={styles.planDetail}>25 Nov.</Text>
          <Text style={styles.planDetail}>14:00 - 15:00</Text>
          <Text style={styles.planDetail}>A5 room</Text>

          <View style={styles.trainerRow}>
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/women/65.jpg",
              }}
              style={styles.trainerAvatar}
            />
            <Text style={styles.trainerText}>Trainer Tiffany Way</Text>
          </View>
        </View>
        <View style={{flexDirection:"column",marginBottom:10}}>
        
        <View style={[styles.planCard, { backgroundColor: "#B7D1FF" }]}>
          <Text style={styles.planTag}>Light</Text>
          <Text style={styles.planTitle}>Balance</Text>
          <Text style={styles.planDetail}>28 Nov.</Text>
          <Text style={styles.planDetail}>18:00 - 19:30</Text>
          <Text style={styles.planDetail}>A2 room</Text>
        </View>
     
      <View style={styles.social}>
        <Ionicons name="logo-instagram" size={30} color="#C13584" />
        <Ionicons name="logo-twitter" size={30} color="#1DA1F2" />
        <Ionicons name="logo-facebook" size={30} color="#3b5998" />
      </View>
      </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    padding: 20,
  },
header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 10,
},
profile: {
  flexDirection: "row",
  alignItems: "center",
  gap: 70,
},
Image: {
  width: 50,
  height: 50,
  borderRadius: 25, 
  marginRight: 10,
  
},
name: {
  fontSize: 20,
  fontWeight: "700",
  color: "#222",
  
},
date: {
  fontSize: 14,
  color: "#777",
 
},
  Card: {
    marginVertical: 40,
    borderRadius: 24,
    padding: 30,
    position: "relative",
    overflow: "hidden",
    backgroundColor:"#B8A7E0"
  },
  Title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },
  Subtitle: {
    fontSize: 14,
    color: "#444",
    marginVertical: 6,
  },
  Img: {
    width: 100,
    height: 100,
    position: "absolute",
    right: 10,
    top: 40,
    borderRadius:35
  },
  comProfile: {
    flexDirection: "row",
    marginTop: 0,
    gap:"-7"
  },
  avatar: {
    width: 36,
    height: 36,
    
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreAvatar: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  moreAvatarText: {
    fontWeight: "700",
    color: "#444",
  },
  dateContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  dateCircle: {
    width: 55,
    height: 80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth:1,
    borderColor:"#636262ff"
  },
  activeDateCircle: {
    backgroundColor: "#000",
  },
  dateText: {
    color: "#666",
    fontWeight: "600",
    fontSize: 14,
  },
  dateNum: {
    fontWeight: "700",
    fontSize: 16,
    color: "#333",
  },
  activeDateText: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 37,
    fontWeight: "600",
    color: "#111",
    marginVertical: 10,
  },
  planContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop:10
  },
  planCard: {
    flex: 1,
    borderRadius: 24,
    padding: 20,
    marginRight: 10,
     gap:15
  },
  planTag: {
    fontSize: 16,
    fontWeight: "500",
    
  },
  planTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 6,
  },
  planDetail: {
    fontSize: 15,
    color: "#333",
    fontWeight:"400"
   
  },
  trainerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
     marginRight: 30,
    
  },
  trainerAvatar: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
  },
  trainerText: {
    fontSize: 14,
    fontWeight: "600",
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 20,
    backgroundColor:"#fdb7e6ff",
    padding:20,
    borderRadius:23
  },
});
