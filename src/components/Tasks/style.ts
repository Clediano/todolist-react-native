import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["gray-600"],
    },
    listItemContainer: {
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
    listItemContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listItemText: {
        color: colors["gray-100"],
        paddingLeft: 8
    },
    listItemTextChecked: {
        color: colors["gray-100"],
        paddingLeft: 8,
        textDecorationLine: 'line-through'
    },
    listItemTrash: {
        padding: 8
    }
});