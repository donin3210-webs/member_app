import { useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { members } from "../data/members";

export default function Members() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const handleViewMembers = (id: String) => {
    setLoading(true);
    setTimeout(() => {
      router.push(`/members/${id}`);
      setLoading(false);
    }, 800);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text style={styles.loadingTxt}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.title}>Our Members</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleViewMembers(item.id)}
          >
            <View style={styles.card}>
              <Text style={styles.name_txt}>{item.name}</Text>
              <Text style={styles.role_txt}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}

        ListFooterComponent={
          <View style={styles.footer}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.dismissTo("/")}>
              <View style={styles.btn}>
                <Text style={styles.btn_txt}>Back to Home</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0f172a" },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  loadingTxt: { marginTop: 12, fontSize: 16, color: "gray" },
  title: { fontSize: 32, color: "white", fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  card: { backgroundColor: "#1e293b", borderRadius: 12, padding: 16, marginBottom: 12 },
  name_txt: { fontSize: 18, color: "white", fontWeight: "600" },
  role_txt: { fontSize: 14, color: "gray", marginTop: 4 },
  btn: {
    backgroundColor: "#2563eb",
    borderRadius: 50,
    minWidth: 220,
    paddingVertical: 14,
    alignItems: "center",

    shadowColor: "#3b82f6",                 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,                      
    elevation: 10,  
  },
  btn_txt: { color: "white", fontSize: 18, fontWeight: "600" },
  footer: { alignItems: "center", marginTop: 12 },
});