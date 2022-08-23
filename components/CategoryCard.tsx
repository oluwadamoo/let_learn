import { Text, TouchableOpacity, ImageBackground, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import { SharedElement } from 'react-navigation-shared-element'


const CategoryCard = ({ sharedElementPrefix, category, containerStyle, onPress }: any) => {
    return (
        <TouchableOpacity
            style={{
                height: 150,
                width: 200,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <SharedElement
                id={`${sharedElementPrefix}-CategoryCard-Bg-${category?.id}`}
                style={[StyleSheet.absoluteFillObject]}
            >
                <Image
                    source={category?.thumbnail}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: SIZES.radius
                    }}
                />
            </SharedElement>

            {/* Title */}
            <View
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 5
                }}
            >
                <SharedElement
                    id={`${sharedElementPrefix}-CategoryCard-Title-${category?.id}`}
                    style={[StyleSheet.absoluteFillObject]}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2,
                            position: 'absolute',
                        }}
                    >{category?.title}</Text>
                </SharedElement>
            </View>

        </TouchableOpacity>
    )
}


export default CategoryCard