import { Image, StyleSheet, Platform, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "@/global.css"



export default function HomeScreen() {
  return (
    <SafeAreaView className='justify-center flex-1 items-center'>
      <Text className='text-blue-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusantium commodi, nulla quia, praesentium iste porro veniam provident dicta vero recusandae asperiores, fugiat exercitationem? Qui perferendis sapiente ab unde maiores?</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
