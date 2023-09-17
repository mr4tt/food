import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Button({ label, theme, type, onPress }) {
    if (theme === "to_picker") {
      return (
        <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
        >
          <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]} onPress={onPress}
            >
            <Ionicons
              name="fast-food" //https://icons.expo.fyi/Index
              size={18}
              color="#25292e"
              style={styles.buttonIcon} 
            />
            <Text style={[styles.buttonLabel, { color: "#AE445A" }]}>{label}</Text>
          </Pressable>
      </View>
      );
    }
  
    if (theme === "submit") {
      return (
      <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
        >
          <Pressable
            style={[styles.button, { backgroundColor: "#fff" }]} onPress={() => {alert('Saved!'); onPress;}}>
            <Ionicons
              name="fast-food" //https://icons.expo.fyi/Index
              size={18}
              color="#25292e"
              style={styles.buttonIcon} 
            />
            <Text style={[styles.buttonLabel, { color: "#AE445A" }]}>{label}</Text>
          </Pressable>
      </View>);
    }

    return (
      <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onPress} >
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
    );
  }
  

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});