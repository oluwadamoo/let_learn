import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native';


import { FlatList } from 'react-native-gesture-handler'
import { CategoryCard, HorizontalCourseCard, IconButton, LineDivider, TextButton, VerticalCourseCard } from '../../components';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants';


// Section
const Section = ({ containerStyle, titleStyle, title, onPress, children }: any) => {
    return (
        <View
            style={{ ...containerStyle }}
        >
            <View style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.padding,
            }}>
                <Text style={{ flex: 1, ...FONTS.h2, ...titleStyle }}>
                    {title}
                </Text>

                <TextButton
                    contentContainerStyle={{
                        width: 80,
                        borderRadius: 30,
                        backgrondColor: COLORS.primary
                    }}
                    label="See All"
                    onPress={onPress}
                />
            </View>

            {children}
        </View>
    )
}
const Home = () => {

    const navigation: any = useNavigation()
    // Header...
    function RenderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 40,
                    marginBottom: 10,
                    paddingHorizontal: SIZES.padding,
                    alignItems: "center"
                }}
            >
                {/* Greetings */}
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.black }}>Hello, Just Codes</Text>
                    <Text
                        style={{
                            color: COLORS.gray50,
                            ...FONTS.body4
                        }}
                    >Sunday, 21st August 2022</Text>
                </View>
                {/* Notifications */}
                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: COLORS.primary
                    }}
                />
            </View>
        )
    }

    function RenderCourses() {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => `Courses-${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({ item, index }) => (
                    <VerticalCourseCard course={item} containerStyle={{
                        marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                        marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0,


                    }} />
                )}
            />
        )
    }

    function RenderStartLearning() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
                }}

                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >

                {/* Info */}
                <View>
                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.body2
                    }}>HOW TO</Text>

                    <Text style={{
                        color: COLORS.white,
                        ...FONTS.h2
                    }}>
                        Make your brand more visible with our checklist
                    </Text>
                    <Text
                        style={{
                            marginTop: SIZES.radius,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        By Scott Harrison
                    </Text>
                </View>

                {/* Image */}
                <Image
                    source={images.start_learning}
                    style={{
                        width: '100%',
                        height: 110,
                        marginTop: SIZES.padding
                    }}
                />
                {/* Button */}
                <TextButton
                    label="Start Learning"
                    contentContainerStyle={{
                        height: 40,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 20,
                        backgroundColor: COLORS.white
                    }}

                    labelStyle={{
                        color: COLORS.black
                    }}
                />
            </ImageBackground>
        )
    }


    function RenderCategories() {
        return (
            <Section
                title="Categories"
                titleStyle={{
                    color: COLORS.black
                }}
            >
                <FlatList
                    data={dummyData.categories}
                    listKey="Categories"
                    horizontal
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            sharedElementPrefix="Home"
                            category={item}
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                                marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0
                            }}
                            onPress={() => navigation.navigate('CourseListing', { category: item, sharedElementPrefix: 'Home' })}
                        />
                    )}
                />
            </Section>
        )
    }

    function RenderPopularCourses() {
        return (
            <Section
                title="Popular Courses"
                containerStyle={{
                    marginTop: 30
                }}
                titleStyle={{
                    color: COLORS.black
                }}
            >
                <FlatList
                    data={dummyData.courses_list_2}
                    listKey="PopularCourses"
                    scrollEnabled={false}
                    keyExtractor={item => `PopularCourses-${item.id}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding
                    }}
                    renderItem={({ item, index }) => (
                        <HorizontalCourseCard
                            course={item}
                            containerStyle={{
                                marginVertical: SIZES.padding,
                                marginTop: index == 0 ? SIZES.radius : SIZES.padding,
                            }}
                        />
                    )}

                    ItemSeparatorComponent={() => <LineDivider
                        lineStyle={{
                            backgroundColor: COLORS.gray20
                        }}
                    />}
                />
            </Section>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            <RenderHeader />


            {/* Content */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 150
                }}
                showsVerticalScrollIndicator={false}
            >
                {/* Start Learning */}
                <RenderStartLearning />

                {/* Courses */}
                <RenderCourses />
                <LineDivider lineStyle={{ marginVertical: SIZES.padding }} />

                {/* Categories */}
                <RenderCategories />


                {/* Popular Courses */}
                <RenderPopularCourses />
            </ScrollView>
        </View>
    )
}


export default Home;
