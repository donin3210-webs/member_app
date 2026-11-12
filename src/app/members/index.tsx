import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { members } from "../data/members";

export default function Members() {
  const router = useRouter();

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
            onPress={() => router.push(`/members/${item.id}`)}
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
  title: { fontSize: 32, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  list: { paddingHorizontal: 20, paddingBottom: 20 },
  card: { backgroundColor: "#f3f4f6", borderRadius: 12, padding: 16, marginBottom: 12 },
  name_txt: { fontSize: 18, fontWeight: "600" },
  role_txt: { fontSize: 14, color: "gray", marginTop: 4 },
});