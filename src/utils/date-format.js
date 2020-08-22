import 'intl';
import "intl/locale-data/jsonp/en";

const toMdy = (date) => {
    // if (Platform.OS === "android") {
    //     // See https://github.com/expo/expo/issues/6536 for this issue.
    //     if (Intl.__disableRegExpRestore === "function") {
    //         Intl.__disableRegExpRestore();
    //     }
    // }
    try {
        const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
        return dateTimeFormat.format(date)
    } catch (e) {
        console.log('DEBUG FORMAT DATE', e)
        return 'empty';
    }
}

export const DateFormat = {
    toMdy: toMdy,
}