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
      <Text style={styles.title}>Our Members</Text>

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  loadingTxt: { marginTop: 12, fontSize: 16, color: "gray" },
  title: { fontSize: 32, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  card: { backgroundColor: "#f3f4f6", borderRadius: 12, padding: 16, marginBottom: 12 },
  name_txt: { fontSize: 18, fontWeight: "600" },
  role_txt: { fontSize: 14, color: "gray", marginTop: 4 },
});