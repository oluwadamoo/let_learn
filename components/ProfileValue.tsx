import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'

const ProfileValue = ({ icon, label, value, onPress }: any) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: 'row',
                height: 80,
                alignItems: 'center'
            }}
        >
            {/* Icon */}
            <View
                style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        tintColor: COLORS.primary
                    }}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius
                }}
            >
                {label &&
                    <Text
                        style={{
                            color: COLORS.gray30,
                            ...FONTS.body3
                        }}
                    >
                        {label}
                    </Text>}

                <Text
                    style={{
                        ...FONTS.h3,
                        color: COLORS.black
                    }}
                >
                    {value}
                </Text>
            </View>

            {/* Icon */}
            <Image
                source={icons.right_arrow}
                style={{
                    width: 15,
                    height: 15,
                    tintColor: COLORS.primary
                }}
            />
        </TouchableOpacity>
    )
}


export default ProfileValue