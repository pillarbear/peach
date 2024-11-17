// app/_layout.tsx

import Constants from "expo-constants";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { PrivyProvider, PrivyElements } from "@privy-io/expo";

import { AuthProvider } from '@/contexts/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <PrivyProvider
      appId={Constants.expoConfig?.extra?.privyAppId}
      clientId={Constants.expoConfig?.extra?.privyClientId}
    >
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="profile/user" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthProvider>
    </PrivyProvider>
  );
}
