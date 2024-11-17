// components/TabBar.tsx

import { View, StyleSheet } from 'react-native';
import { TokenTab } from './TokenTab';
import { TabType } from '@/types/token';

interface TabBarProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

export function TabBar({ activeTab, onTabPress }: TabBarProps) {
  return (
    <View style={styles.tabBar}>
      <TokenTab 
        label="Overview" 
        isActive={activeTab === 'overview'}
        onPress={() => onTabPress('overview')}
      />
      <TokenTab 
        label="Chart" 
        isActive={activeTab === 'chart'}
        onPress={() => onTabPress('chart')}
      />
      <TokenTab 
        label="News" 
        isActive={activeTab === 'news'}
        onPress={() => onTabPress('news')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
});