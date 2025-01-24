import { Stack } from "expo-router";
import "../global.css";
import { StatusBar, View } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { AppTheme } from "@/styles/AppTheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider value={AppTheme}>
          <View style={{ flex: 1, backgroundColor: AppTheme.colors.background }}>
            <Stack>
              {/* Ensure `(tabs)` exists and is correctly set up */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
          </View>
        </ThemeProvider>
      </GestureHandlerRootView>
    </>
  );
}
