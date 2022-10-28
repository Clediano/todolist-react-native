import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
    },
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
        backgroundColor: '#262626',
        color: colors["gray-100"],
        borderRadius: 6,
        marginRight: 4,
        fontSize: 16,
        fontFamily: 'Inter-Regular'
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: colors.blueDark,
        color: colors["gray-100"],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }
});