import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="members/index" options={{ title: "Our Members" }} />
      <Stack.Screen name="members/[id]" options={{ title: "Member Details" }} />
    </Stack>
  );
}