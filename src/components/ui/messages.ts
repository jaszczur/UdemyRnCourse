import Toast from "react-native-root-toast";

export function showMessage(msg: string) {
    Toast.show(msg);
}

export function showWarningMessage(msg: string) {
    showMessage(msg + " 😞");
}

export function showError(errId: number, msg?: string) {
    if (__DEV__) {
        showMessage(msg + ". Pass error id " + errId + " to our developers.");
    }
}
