import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Animated, { interpolate, useAnimatedStyle, withDelay, withTiming } from 'react-native-reanimated'

import {
    TextButton,
    LineDivider,
    TwoPointSlider
} from '.'
import { COLORS, constants, FONTS, icons, SIZES } from '../constants'


const ClassTypeOption = ({ containerStyle, classType, isSelected, onPress }: any) => {
    return (
        <TouchableOpacity
            style={{
                flex: 1,
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: isSelected ? COLORS.primary3 : COLORS.additionalColor9,
                ...containerStyle
            }}

            onPress={onPress}
        >
            <Image
                source={classType.icon}
                resizeMode="contain"
                style={{
                    width: 40,
                    height: 40,
                    tintColor: isSelected ? COLORS.white : COLORS.gray80
                }}
            />

            <Text
                style={{
                    marginTop: SIZES.base,
                    color: isSelected ? COLORS.white : COLORS.gray80,
                    ...FONTS.h3
                }}
            >
                {classType.label}
            </Text>
        </TouchableOpacity>
    )
}

const ClassLevelOption = ({ containerStyle, classLevel, isLastItem, isSelected, onPress }: any) => {
    return (
        <>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    ...containerStyle
                }}
                onPress={onPress}
            >

                <Text
                    style={{
                        flex: 1,
                        color: COLORS.black,
                        ...FONTS.body3,

                    }}
                >
                    {classLevel.label}
                </Text>

                <Image
                    source={isSelected ? icons.checkbox_on : icons.checkbox_off}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
            </TouchableOpacity>

            {!isLastItem && <LineDivider
                style={{
                    height: 1
                }}
            />}
        </>
    )
}
const FilterModal = ({ filterModelSharedValue1, filterModelSharedValue2, }: any) => {
    const [selectedClassType, setSelectedClassType] = React.useState<number>(0)
    const [selectedClassLevel, setSelectedClassLevel] = React.useState(0)
    const [selectedCreatedWithin, setSelectedCreatedWithin] = React.useState(0)


    const filterModalContainerAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModelSharedValue1.value, [SIZES.height, 0], [0, 1]
            ),
            transform: [
                {
                    translateY: filterModelSharedValue1.value
                }
            ]
        }
    })


    const filterModalBgAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModelSharedValue2.value, [SIZES.height, 0], [0, 1])
        }
    })

    const filterModalContentAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(filterModelSharedValue2.value, [SIZES.height, 0], [0, 1]),
            transform: [
                {
                    translateY: filterModelSharedValue2.value
                }
            ]

        }
    })


    function RenderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginBottom: 30,
                    paddingHorizontal: SIZES.padding
                }}
            >
                {/* Reset */}
                <TextButton
                    label="Reset"
                    contentContainerStyle={{
                        flex: 1,
                        borderRadius: SIZES.radius,
                        borderWidth: 1,
                        backgroundColor: 'transparent',
                    }}
                    labelStyle={{
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                />

                {/* Apply btn */}
                <TextButton
                    label="Apply"
                    contentContainerStyle={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        borderRadius: SIZES.radius,
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        backgroundColor: COLORS.primary,
                    }}
                    labelStyle={{
                        color: COLORS.white,
                        ...FONTS.h3
                    }}
                />

            </View>
        )
    }
    return (
        // Main container
        <Animated.View
            style={[{
                position: 'absolute',
                bottom: 0,
                height: SIZES.height,
                width: SIZES.width
            }, filterModalContainerAnimatedStyle]}
        >

            {/* Background Container */}
            <Animated.View
                style={[{
                    flex: 1,
                    height: SIZES.height,
                    width: SIZES.width,
                    backgroundColor: COLORS.transparentBlack7,
                },
                    filterModalBgAnimatedStyle
                ]}
            >

            </Animated.View>

            {/* Content Container */}
            <Animated.View
                style={[{
                    position: 'absolute',
                    bottom: 0,
                    height: SIZES.height * 0.9,
                    width: SIZES.width,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.white
                },
                    filterModalContentAnimatedStyle
                ]}
            >
                {/* Header */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.padding
                    }}
                >
                    <View
                        style={{
                            width: 60
                        }}
                    />

                    <Text
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            ...FONTS.h1,
                            color: COLORS.black
                        }}
                    >
                        Filter
                    </Text>

                    <TextButton
                        label="Cancel"
                        contentContainerStyle={{
                            width: 60,
                            backgroundColor: 'transparent'
                        }}
                        labelStyle={{
                            color: COLORS.black,
                            ...FONTS.body3
                        }}
                        onPress={() => {
                            filterModelSharedValue2.value = withTiming(SIZES.height, {
                                duration: 500
                            })

                            filterModelSharedValue1.value = withDelay(500, withTiming(SIZES.height, {
                                duration: 100
                            }))
                        }}
                    />
                </View>

                {/* Content */}
                <ScrollView
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: 50
                    }}
                >
                    {/* Class type */}
                    <View
                        style={{
                            marginTop: SIZES.radius
                        }}
                    >
                        <Text style={{
                            ...FONTS.h3,
                            color: COLORS.black
                        }}>
                            Class Type
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: SIZES.radius
                            }}
                        >
                            {constants.class_types.map((item, index) => {
                                return (
                                    <ClassTypeOption
                                        key={`ClassType-${index}`}
                                        classType={item}
                                        isSelected={selectedClassType == item?.id}
                                        containerStyle={{
                                            marginLeft: index == 0 ? 0 : SIZES.base
                                        }}
                                        onPress={() => {
                                            setSelectedClassType(item.id)
                                        }}
                                    />
                                )
                            })}
                        </View>
                    </View>

                    {/* Class level */}
                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            Class Level
                        </Text>

                        <View>
                            {constants.class_levels.map((item, index) => {
                                return (
                                    <ClassLevelOption
                                        key={`ClassType-${index}`}
                                        classLevel={item}
                                        isLastItem={index == constants.class_levels.length - 1}
                                        isSelected={selectedClassLevel == item?.id}
                                        onPress={() => (
                                            setSelectedClassLevel(item.id)
                                        )}
                                    />
                                )
                            })}
                        </View>
                    </View>

                    {/* Created Within */}
                    <View
                        style={{
                            marginTop: SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            Created Within
                        </Text>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }}
                        >
                            {constants.created_within.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`CreatedWithin-${index}`}
                                        label={item?.label}
                                        contentContainerStyle={{
                                            height: 45,
                                            paddingHorizontal: SIZES.radius,
                                            marginLeft: index % 3 == 0 ? 0 : SIZES.radius,
                                            marginTop: SIZES.radius,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: COLORS.gray20,
                                            backgroundColor: item?.id == selectedCreatedWithin ? COLORS.primary3 : 'transparent'
                                        }}
                                        labelStyle={{
                                            color: item?.id == selectedCreatedWithin ? COLORS.white : COLORS.black
                                        }}
                                        onPress={() => {
                                            setSelectedCreatedWithin(item.id)
                                        }}
                                    />
                                )
                            })}
                        </View>
                    </View>

                    {/* Class Length */}
                    <View
                        style={{
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            Class Length
                        </Text>

                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            <TwoPointSlider
                                values={[20, 50]}
                                min={15}
                                max={60}
                                postfix="min"
                                onValuesChange={(values: any) => console.log(values)}
                            />
                        </View>
                    </View>
                </ScrollView>

                {/* Footer */}
                <RenderFooter />
            </Animated.View>
        </Animated.View>
    )
}

export default FilterModal