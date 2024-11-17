// components/TokenTab.tsx

import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { TokenTabProps } from '@/types/token';

export function TokenTab({ label, isActive, onPress }: TokenTabProps) {
  return (
    <TouchableOpacity 
      style={[styles.tab, isActive && styles.activeTab]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, isActive && styles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: '600',
  },
});