
import { StyleSheet, SafeAreaView, Button, View, FlatList } from 'react-native';
import { router } from 'expo-router';

import { Token } from '@/types/token';
import { useAuth } from '@/contexts/AuthContext';

const tokens: Token[] = [
  { id: '1', name: 'Token A' },
  { id: '2', name: 'Token B' },
  { id: '3', name: 'Token C' },
];

export default function HomeScreen() {
  const {isSignedIn, signOut} = useAuth();

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
      { isSignedIn ? 
      <>
        <View style={styles.row_container}>
          <Button
            title='Show Profile'
            onPress={() => router.push('/profile/profile')}
          />
          <Button
            title='Sign Out'
            onPress={signOut}
          />
        </View>
      </>
      :
      <>
        <Button
          title='Sign In'
          onPress={() => {
            router.push('/profile/login');
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
  row_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
