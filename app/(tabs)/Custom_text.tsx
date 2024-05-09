import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';

export default function CustomText() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome to the App!</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
      />
      <Button
        title="Press Me"
        onPress={() => alert('Button Pressed!')}
      />
      <Image
        source={{ uri: 'https://avatar.iran.liara.run/public' }}
        style={styles.image}
      />
      <Text style={styles.footerText}>Thank you for visiting!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  textInput: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    borderRadius: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 18,
    marginTop: 20,
  },
});
