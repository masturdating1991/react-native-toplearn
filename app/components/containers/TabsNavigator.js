import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from '../../screens/AccountScreen';
import CoursesScreen from '../../screens/CoursesScreen';
import MyCoursesScreen from '../../screens/MyCoursesScreen';



const Tab = createBottomTabNavigator();


export default function TabsNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Courses") {
                        iconName = focused ? "video-account" : "school"
                    } else if (route.name === "Account") {
                        iconName = focused ? "account-circle" : "account-circle-outline"
                    } else if (route.name === "MyCourses") {
                        iconName = "message-video"
                    }

                    return (
                        <MaterialCommunityIcons
                            name={iconName}
                            color={color}
                            size={size}
                        />
                    )
                }
            })}

            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
                activeBackgroundColor: "lightcyan",
                labelStyle: {
                    fontFamily: "ih",
                    fontSize: 14
                }
            }}
        >

            <Tab.Screen name="MyCourses" component={MyCoursesScreen} options={{
                tabBarLabel: "دوره های من",
                tabBarBadge: 3
            }} />
            <Tab.Screen name="Courses" component={CoursesScreen} options={{
                tabBarLabel: "دوره ها"
            }} />
            <Tab.Screen name="Account" component={AccountScreen} options={{
                tabBarLabel: "اکانت من"
            }} />

        </Tab.Navigator>
    )
}
