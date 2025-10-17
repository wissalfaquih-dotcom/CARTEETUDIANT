import { Image, Text, View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/Emsi.jpeg')}
          style={styles.image}
        />
        <Text style={styles.title}>STUDENT CARD EMSI CENTRE</Text>
      </View>

      
      <Text style={styles.label}>
        Nom : <Text style={styles.value}>TENSAOUI</Text>
      </Text>
      <Text style={styles.label}>
        Prénom : <Text style={styles.value}>ALI</Text>
      </Text>
      <Text style={styles.label}>
        Année universitaire : <Text style={styles.value}>2025 / 2026</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 130,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004aad',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginVertical: 4,
  },
  value: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
