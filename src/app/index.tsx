import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleViewMembers = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/members");
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
      <Text style={styles.time_txt}>{time.toLocaleTimeString("en-US")}</Text>
      <Text style={styles.group_txt}>Group 1</Text>
      <Text style={styles.team_txt}>Team Spirit</Text>

      <Text style={styles.desc_txt}>
        We are Team Spirit, a group of passionate students who believe that
        teamwork, creativity, and determination can turn any challenge into an
        opportunity to learn and grow together.
      </Text>

      <TouchableOpacity activeOpacity={0.8} onPress={handleViewMembers}>
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
    backgroundColor: "#0f172a",
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  loadingTxt: { marginTop: 12, fontSize: 16, color: "gray" },
  time_txt: { fontSize: 20, color: "#94a3b8", marginBottom: 20 },
  group_txt: { fontSize: 40, color: "white", fontWeight: "bold" },
  team_txt: { fontSize: 40, color: "white" },
  desc_txt: {
    fontSize: 18,
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
    paddingVertical: 16,
    alignItems: "center",

    shadowColor: "#3b82f6",                 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,                      
    elevation: 10,                          
  },
  btn_txt: { color: "white", fontSize: 18, fontWeight: "600" },
});