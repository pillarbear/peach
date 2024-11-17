// app/profile/profile.tsx

import { StyleSheet, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

export default function ProfileScreen() {
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Profile'
          }}
        />
        <Text style={styles.text}> Profile Page </Text>
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