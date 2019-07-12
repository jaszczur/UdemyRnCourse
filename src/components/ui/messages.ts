import Toast from "react-native-root-toast";

export function showMessage(msg: string) {
    Toast.show(msg);
}

export function showWarningMessage(msg: string) {
    showMessage(msg + " 😞");
}
