import { Stack } from "expo-router";
import "../global.css";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { AppTheme } from "@/styles/AppTheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React, { Suspense } from "react";
import { SQLiteProvider } from "expo-sqlite";

export const DATABASE_NAME = "exercise";

export default function RootLayout() {
  return (
    <>
      <Suspense fallback={<ActivityIndicator size="large" />}>
        <SQLiteProvider
          databaseName={DATABASE_NAME}
          options={{ enableChangeListener: true }}
          useSuspense>
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
        </SQLiteProvider>
      </Suspense>
    </>
  );
}
