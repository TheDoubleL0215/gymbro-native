import { Stack } from "expo-router";
import "../global.css";
import { StatusBar, View } from "react-native";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { AppTheme } from "@/styles/AppTheme";

export default function RootLayout() {
  return <>
    <StatusBar barStyle="light-content" backgroundColor="black" />
    <ThemeProvider value={AppTheme}>
      <View style={{ flex: 1, backgroundColor: AppTheme.colors.background }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </View>
    </ThemeProvider>
  </>

}
