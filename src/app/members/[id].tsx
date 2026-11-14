import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { members } from "../../data/members";

export default function MemberDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const member = members.find((m) => m.id === id);

  if (!member) {
    return (
      <View style={styles.container}>
        <Text style={styles.not_found_txt}>Member not found.</Text>
      </View>
    );
  }

  const getInitials = (name: string) => {
  const words = name.split(" ");
    return words[0][0] + words[words.length - 1][0];
  };

  return (
    <View style={styles.container}>

      <View style={styles.avatar}>
        <Text style={styles.avatar_txt}>{getInitials(member.name)}</Text>
      </View>

      <Text style={styles.name_txt}>{member.name}</Text>
      <Text style={styles.role_txt}>{member.role}</Text>

      <View style={styles.card1}>
        <Text style={styles.label_txt}>Email</Text>
        <Text style={styles.info_txt}>{member.email}</Text>

        <Text style={styles.label_txt}>Phone</Text>
        <Text style={styles.info_txt}>{member.phone}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} 
      onPress={() => {
        if (router.canGoBack()) {
          router.back();
        } else {
          router.replace("/members");
        }
      }}>
        <View style={styles.btn}>
          <Text style={styles.btn_txt}>Back</Text>
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
    paddingHorizontal: 20,
    backgroundColor: "#0f172a",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#2563eb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8
  },
  avatar_txt: { color: "white", fontSize: 36, fontWeight: "bold" },
  name_txt: { fontSize: 32, color: "white", fontWeight: "bold", textAlign: "center" },
  role_txt: { fontSize: 18, color: "gray", marginBottom: 20 },
  card1: {
    backgroundColor: "#1e293b",
    borderRadius: 12,
    padding: 16,
    width: "100%",
    maxWidth: 400,
    marginBottom: 30,
  },
  label_txt: { fontSize: 14, color: "gray", marginTop: 8 },
  info_txt: { fontSize: 18, color: "white", fontWeight: "600" },
  not_found_txt: { fontSize: 18, color: "gray" },
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
});