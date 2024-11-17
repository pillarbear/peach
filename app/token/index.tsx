// app/token/index.tsx

import { useState } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Animated,
  Share,
  TouchableOpacity
} from "react-native";
import { useLocalSearchParams, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

import { TabBar } from '@/components/token/TabBar';
import { TabContent } from '@/components/token/TabContent';
import { TabType } from '@/types/token';

export default function TokenScreen() {
  const { id, name } = useLocalSearchParams();
  const [scrollY] = useState(new Animated.Value(0));
  const [isStarred, setIsStarred] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${name} token!`,
        // You can add url or other details here
      });
    } catch (error) {
      console.error(error);
    }
  };

  const HeaderRight = () => (
    <View style={styles.headerActions}>
      <TouchableOpacity
        onPress={() => setIsStarred(!isStarred)}
        style={styles.headerButton}
      >
        <Ionicons
          name={isStarred ? "star" : "star-outline"}
          size={24}
          color={isStarred ? "#FFD700" : "#000"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleShare}
        style={styles.headerButton}
      >
        <Ionicons name="share-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      <Stack.Screen 
        options={{
          headerTitle: () => (
            <Animated.View style={[styles.headerContent, { opacity: headerOpacity }]}>
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.smallLogo}
              />
              <Text style={styles.headerTitle}>{name}</Text>
            </Animated.View>
          ),
          headerRight: HeaderRight,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: 'white',
          },
          headerShadowVisible: false
        }}
      />
      
      <ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.topContent}>
          <Image
            source={require('@/assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>{name}</Text>
        </View>

        <View style={styles.stickyHeader}>
          <TabBar activeTab={activeTab} onTabPress={setActiveTab} />
        </View>

        <View>
          <TabContent activeTab={activeTab} id={id as string} name={name as string} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerButton: {
    marginLeft: 4,
    padding: 4
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stickyHeader: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  smallLogo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  topContent: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});