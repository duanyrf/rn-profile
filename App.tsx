import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, Roboto_700Bold, Roboto_400Regular_Italic } from '@expo-google-fonts/roboto'
import { RobotoMono_300Light } from '@expo-google-fonts/roboto-mono'
import { AntDesign } from '@expo/vector-icons'

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular_Italic, RobotoMono_300Light })

  if (!fontLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.boxSuperior}>
      </View>

      <View style={styles.boxInferior}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: 'https://github.com/duanyrf.png' }} style={styles.photo} />
        </View>
        <View style={{ alignItems: 'center', marginTop: 80, gap: 8 }}>
          <Text style={{ fontFamily: 'Roboto_700Bold', fontSize: 24 }}>Duany Dreyton</Text>
          <Text style={{ fontFamily: 'Roboto_400Regular_Italic', fontSize: 16 }}>Software Engineer</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: 48, gap: 16 }}>
          <View style={styles.social}>
            <AntDesign name="github" size={24} color="#000000" />
            <Text style={styles.social_link}>github.com/duanyrf</Text>
          </View>
          <View style={styles.social}>
            <AntDesign name="twitter" size={24} color="#000000" />
            <Text style={styles.social_link}>twitter.com/duanyrf</Text>
          </View>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boxSuperior: {
    width: '100%',
    height: 200,
    backgroundColor: '#FF8D76',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
  },
  boxInferior: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F5E3',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: -(150 / 2),
    borderWidth: 3,
    borderColor: '#ffffff',
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  social_link: {
    fontFamily: 'RobotoMono_300Light',
    fontSize: 16,
  }
});
