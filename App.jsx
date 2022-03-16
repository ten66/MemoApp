import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>Logout</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2022年3月12日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2022年3月12日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2022年3月12日 10:00</Text>
          </View>
          <View>
            <Text>x</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appbarRight: {
    position: 'absolute',
    right: 16,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
