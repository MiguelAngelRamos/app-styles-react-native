import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
  children: string;
  color?: 'primary'|'secondary'|'tertiary';
  className?: string
}
const ButtonCustom = ({children, color ='primary', onPress, className, onLongPress}:Props) => {

 const btnColor = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary'
 }[color];

 const textColor = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary'
 }[color];

  return (
   <Pressable
    className={`p-3 ${btnColor} ${className}`}
   onPress={onPress}
   >
    <Text className={`text-center ${textColor}`}>{children}</Text>
   </Pressable>
  )
}

export default ButtonCustom;