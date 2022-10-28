import { StyleSheet } from "react-native";

import { colors } from "../../../../../constants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 48,
        paddingHorizontal: 20,

        borderTopWidth: 1,
        borderTopColor: colors["gray-400"]
    },
    textBold: {
        color: colors["gray-300"],
        fontFamily: 'Inter-Bold',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 16,
        fontSize: 14
    },
    textNormal: {
        fontFamily: 'Inter-Regular',
        fontSize: 14,
        color: colors["gray-300"],
    }
});