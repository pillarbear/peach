// app/profile/login.tsx

import { StyleSheet, Text, SafeAreaView, Button } from "react-native";
import { router, Stack } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

export default function Login2Screen() {
  const { signIn } = useAuth();

  const handleLogin = () => {
    signIn();
    router.back();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerBackTitleVisible: false,
          headerTitle: 'Sign In'
        }}
      />
      <Text style={styles.text}> Login Page </Text>
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      fontSize: 25,
      fontWeight: '500',
    },
  });