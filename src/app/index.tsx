import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [time, setTime] = useState(new Date());

  // update the clock every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.time_txt}>{time.toLocaleTimeString()}</Text>
      <Text style={styles.group_txt}>Group 1</Text>
      <Text style={styles.team_txt}>Team Spirit</Text>

      <Text style={styles.desc_txt}>
        We are Team Spirit, a group of passionate students who believe that
        teamwork, creativity, and determination can turn any challenge into an
        opportunity to learn and grow together.
      </Text>

      <TouchableOpacity activeOpacity={0.8} onPress={() => router.push("/members")}>
        <View style={styles.btn}>
          <Text style={styles.btn_txt}>View Members</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  time_txt: { fontSize: 20, color: "gray", marginBottom: 20 },
  group_txt: { fontSize: 40, fontWeight: "bold" },
  team_txt: { fontSize: 40 },
  desc_txt: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 30,
    maxWidth: 400,
    marginVertical: 20,
  },
  btn: {
    backgroundColor: "#2563eb",
    borderRadius: 50,
    minWidth: 220,
    paddingVertical: 14,
    alignItems: "center",
  },
  btn_txt: { color: "white", fontSize: 18, fontWeight: "600" },
});