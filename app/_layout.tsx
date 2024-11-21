import { Slot, SplashScreen } from 'expo-router';
import './global.css';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {

  const [fontsLoaded, error] = useFonts({
  'rale-black': require('../assets/fonts/Raleway-Black.ttf'),
  'rale-light': require('../assets/fonts/Raleway-Light.ttf'),
  'rale-medium':require('../assets/fonts/Raleway-Medium.ttf') ,
  });
  
  useEffect(( ) => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;
  return <Slot/>
}

export default RootLayout;