import "../global.css";
import { Stack } from "expo-router";
import { AuthProvider } from "../src/contexts/AuthContext";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </GluestackUIProvider>
  );
}
