import { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type ProfileCardProps = {
  name: string;
  course: string;
};

export default function ProfileCard({ name, course }: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.course}>{course}</Text>
      <Image
        accessibilityLabel="React Native logo"
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.avatar}
      />
      <TextInput
        accessibilityLabel="Write a comment"
        placeholder="Write a comment"
        placeholderTextColor="#64748b"
        returnKeyType="done"
        style={styles.commentInput}
      />
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Like (${likes})`}
        onPress={() => setLikes(currentLikes => currentLikes + 1)}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Like ({likes})</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#dbe3ed',
    borderRadius: 12,
    borderWidth: 1,
    gap: 12,
    maxWidth: 440,
    padding: 16,
    width: '100%',
  },
  name: {
    color: '#172033',
    fontSize: 22,
    fontWeight: '700',
  },
  course: {
    color: '#475569',
    fontSize: 16,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  commentInput: {
    borderColor: '#cbd5e1',
    borderRadius: 8,
    borderWidth: 1,
    color: '#172033',
    minHeight: 46,
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2563eb',
    borderRadius: 8,
    justifyContent: 'center',
    minHeight: 46,
    paddingHorizontal: 16,
  },
  buttonPressed: {
    backgroundColor: '#1d4ed8',
    opacity: 0.9,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
