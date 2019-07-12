import Toast from "react-native-root-toast";
import { ErrorCode } from "../../errors";

export function showMessage(msg: string) {
    Toast.show(msg);
}

export function showWarningMessage(msg: string) {
    showMessage(msg + " 😞");
}

export function showError(errorCode: ErrorCode, msg?: string) {
    if (__DEV__) {
        console.log(msg);
        showMessage("Ooops 😨. Pass error code " + errorCode + " to our developers.");
    }
}
