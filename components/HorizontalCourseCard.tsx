import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, icons, SIZES } from '../constants'
import IconLabel from './IconLabel'
import { connect } from 'react-redux'

const HorizontalCourseCard = ({ containerStyle, course }: any) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
        >

            {/* Thumbnail */}
            <ImageBackground
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: 130,
                    height: 130,
                    marginBottom: SIZES.radius
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        backgroundColor: COLORS.white
                    }}
                >
                    <Image
                        source={icons.favourite}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: course.is_favourite ? COLORS.secondary : COLORS.additionalColor4
                        }}
                    />
                </View>

            </ImageBackground>

            {/* Details */}
            <View
                style={{
                    flex: 1,
                    marginLeft: SIZES.base
                }}

            >
                {/* Title */}
                <Text
                    style={{
                        ...FONTS.h3,
                        fontSize: 18,
                        color: COLORS.black
                    }}
                >
                    {course.title}
                </Text>

                {/* Instructor and Duration */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.base
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.black
                        }}
                    >
                        By {course.instructor}
                    </Text>

                    <IconLabel
                        icon={icons.time}
                        label={course.duration}
                        containerStyle={{
                            marginLeft: SIZES.base
                        }}
                        iconStyle={{
                            width: 15,
                            height: 15
                        }}

                        labelStyle={{
                            ...FONTS.body4
                        }}
                    />
                </View>

                {/* Price and Rating */}
                <View
                    style={{

                        flexDirection: 'row',
                        alignItems: 'center'
                        , marginTop: SIZES.base
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.h2,
                            color: COLORS.primary
                        }}
                    >N{course.price.toFixed(2)}</Text>

                    <IconLabel
                        icon={icons.star}
                        label={course.ratings}
                        containerStyle={{
                            marginLeft: SIZES.base
                        }}
                        iconStyle={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.primary2
                        }}

                        labelStyle={{
                            marginLeft: 5,
                            color: COLORS.black,
                            ...FONTS.h3
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

function mapStateToProps(state: { appTheme: any; error: any; }) {
    return {
        appTheme: state.appTheme,
        error: state.error
    }
}

function mapDispatchToProps(dispatch: any) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HorizontalCourseCard)