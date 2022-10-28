import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
    inputGroup: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -48
    },
    input: {
        flex: 1,
        height: 54,
        padding: 16,
        backgroundColor: colors["gray-500"],
        color: colors["gray-100"],
        fontSize: 16,
        borderRadius: 6,
        marginRight: 4,
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: colors.blueDark,
        color: colors["gray-100"],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    },
    image: {
        height: 16,
        width: 16,
        tintColor: colors["gray-100"]
    }
});