import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      // ADDED: screenOptions applies to ALL screens in this Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#1e293b" }, // header background (slate navy)
        headerTintColor: "white", // back arrow and title color
        headerTitleStyle: { fontWeight: "bold" }, // bolder title text
        headerShadowVisible: false, // removes the thin line under the header
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="members/index" options={{ title: "Our Members" }} />
      <Stack.Screen name="members/[id]" options={{ title: "Member Details" }} />
    </Stack>
  );
}