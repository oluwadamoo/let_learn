
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import { toggleTheme } from '../../stores/themeAction';

import { IconButton, LineDivider, ProfileRadioButton, ProfileValue, Progressbar, TextButton } from '../../components';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';

const Profile = () => {
    const [newCourseNotification, setNewCourseNotification] = useState(false)
    const [studyReminder, setStudyReminder] = useState(false)

    function RenderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 50,
                    paddingHorizontal: SIZES.padding,
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        color: COLORS.black
                        ,
                        ...FONTS.h1
                    }}
                >
                    Profile
                </Text>
                <IconButton
                    icon={icons.sun}
                    iconStyle={{
                        tintColor: COLORS.black
                    }}
                />
            </View>
        )
    }

    function RenderProfileCard() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 20,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary3
                }}
            >
                {/* Profile Image */}
                <TouchableOpacity
                    style={{
                        width: 80,
                        height: 80
                    }}
                >
                    <Image
                        source={images.student_1}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 40,
                            borderWidth: 1,
                            borderColor: COLORS.white
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                marginBottom: -15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <Image
                                source={icons.camera}
                                resizeMode="contain"
                                style={{
                                    width: 17,
                                    height: 17
                                }}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Details */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        alignItems: 'flex-start'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.h2
                        }}
                    >
                        Just Codes
                    </Text>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        Full Stack Developer
                    </Text>

                    {/* Progress bar */}
                    <Progressbar
                        progress="58%"
                        containerStyle={
                            {
                                marginTop: SIZES.radius
                            }
                        }
                    />

                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            Overall Progress
                        </Text>

                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4
                            }}
                        >
                            58%
                        </Text>

                    </View>

                    {/* Member */}
                    <TextButton
                        label="+ Become Member"
                        contentContainerStyle={{
                            height: 35,
                            marginTop: SIZES.padding,
                            paddingHorizontal: SIZES.radius,
                            borderRadius: 20,
                            backgroundColor: COLORS.white
                        }}

                        labelStyle={{
                            color: COLORS.primary
                        }}
                    />
                </View>
            </View>
        )
    }


    function RenderProfileSection1() {
        return (
            <View
                style={styles.profileSectionContainer}
            >
                <ProfileValue
                    icon={icons.profile}
                    label="Name"
                    value="Just Codes"
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.email}
                    label="Email"
                    value="jcodes@gmail.com"
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.password}
                    label="Password"
                    value="Updated 2 weeks ago"
                />
                <LineDivider />

                <ProfileValue
                    icon={icons.call}
                    label="Contact Number"
                    value="081443322553"
                />
            </View>
        )
    }

    function RenderProfileSection2() {
        return (
            <View
                style={styles.profileSectionContainer}
            >
                <ProfileValue
                    icon={icons.star_1}
                    value={"Pages"}
                />
                <LineDivider />

                <ProfileRadioButton
                    icon={icons.new_icon}
                    label="New Course Notification"
                    isSelected={newCourseNotification}
                    onPress={() => setNewCourseNotification(!newCourseNotification)}
                />
                <LineDivider />

                <ProfileRadioButton
                    icon={icons.reminder}
                    label="Study Reminder"
                    isSelected={studyReminder}
                    onPress={() => setStudyReminder(!studyReminder)}
                />
            </View>
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

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 150
                }}
            >
                {/* Profile Card */}
                <RenderProfileCard />

                {/* Profile Section 1 */}
                <RenderProfileSection1 />

                {/* Profile Section 2 */}
                <RenderProfileSection2 />
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    profileSectionContainer: {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderWidth: 1,
        borderRadius: SIZES.radius,
        borderColor: COLORS.gray20
    }
})


export default Profile;