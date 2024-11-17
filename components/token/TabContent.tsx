// components/TabContent.tsx

import { View, Text, StyleSheet } from 'react-native';
import { TabType } from '@/types/token';

interface TabContentProps {
  activeTab: TabType;
  id?: string;
  name?: string;
}

export function TabContent({ activeTab, id, name }: TabContentProps) {
  switch (activeTab) {
    case 'overview':
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>Overview Content</Text>
          <Text style={styles.contentText}>Token ID: {id}</Text>
          <Text style={styles.contentText}>Token Name: {name}</Text>
          {Array(50).fill(null).map((_, i) => (
            <Text key={i} style={styles.contentText}> content {i + 1}</Text>
          ))}
        </View>
      );
    case 'chart':
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>Chart Content</Text>
        </View>
      );
    case 'news':
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>News Content</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 18,
    marginBottom: 16,
  },
});
