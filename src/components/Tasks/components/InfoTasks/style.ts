import { StyleSheet } from "react-native";

import { colors } from "../../../../../constants";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    createdText: {
        color: colors.blue,
        fontWeight: 'bold'
    },
    completedText: {
        color: colors.purple,
        fontWeight: 'bold'
    },
    badge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        backgroundColor: colors["gray-400"],
        borderRadius: 999,
        paddingHorizontal: 8,
        paddingVertical: 2
    },
    badgeText: {
        color: colors["gray-200"]
    },
});