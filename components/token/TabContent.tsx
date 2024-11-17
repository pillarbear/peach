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
          <Text>Token ID: {id}</Text>
          <Text>Token Name: {name}</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
          <Text>Dummy</Text>
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
