
import { StyleSheet, SafeAreaView, Button, View, FlatList } from 'react-native';
import { router } from 'expo-router';
import { usePrivy } from '@privy-io/expo';

import { Token } from '@/types/token';
import { useAuth } from '@/contexts/AuthContext';

const tokens: Token[] = [
  { id: '1', name: 'Token A' },
  { id: '2', name: 'Token B' },
  { id: '3', name: 'Token C' },
];

export default function HomeScreen() {
  const {isSignedIn, signOut} = useAuth();
  const { user } = usePrivy();

  const renderToken = ({ item }: { item: Token }) => (
    
    <Button
      title={item.name}
      onPress={() => router.push({
        pathname: '/token',
        params: { id: item.id, name: item.name }
      })}
    />
  );

  return (
    <SafeAreaView>
      <View>
      { user ? 
      <>
        <Button
          title='Profile'
          onPress={() => router.push('/profile/user')}
        />
      </>
      :
      <>
        <Button
          title='Sign In'
          onPress={() => {
            router.push('/profile/LoginScreen');
          }}
        />
      </>
      }        
      </View>
      <FlatList
        data={tokens}
        renderItem={renderToken}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
