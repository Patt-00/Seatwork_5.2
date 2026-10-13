import { StyleSheet, View } from 'react-native';

import ProfileCard from '../components/ProfileCard';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <ProfileCard name="Your Name" course="Mobile Computing" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: 64,
    backgroundColor: '#f3f4f6',
  },
});
