import { StyleSheet } from "react-native";

import { colors } from "../../../../../constants";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        backgroundColor: colors["gray-500"],
        marginBottom: 16,
        borderRadius: 8,

        paddingVertical: 12,
        paddingLeft: 12,
        paddingRight: 8
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: colors["gray-100"],
        paddingLeft: 8
    },
    textChecked: {
        color: colors["gray-300"],
        paddingLeft: 8,
        textDecorationLine: 'line-through',
    },
    trash: {
        padding: 8
    }
});