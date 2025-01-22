import { Theme } from "@react-navigation/native";

export const AppTheme: Theme = {
    dark: true,
    colors: {
        primary: 'rgb(10, 132, 255)',
        background: 'rgb(1, 1, 1)',
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
    },
    fonts: {
        regular: {
            fontFamily: 'System',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'System',
            fontWeight: 'bold',
        },
        bold: {
            fontFamily: 'System',
            fontWeight: 'bold',
        },
        heavy: {
            fontFamily: 'System',
            fontWeight: 'bold',
        },
    },
};
