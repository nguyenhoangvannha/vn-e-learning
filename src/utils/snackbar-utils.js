import Snackbar from "react-native-snackbar";

export default SnackbarUtils = {
    show: (text, duration) => Snackbar.show({
        text: text,
        duration: duration,
    })
}