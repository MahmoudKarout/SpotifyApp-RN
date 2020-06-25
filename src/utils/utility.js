import { AsyncStorage } from 'react-native';


export const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(0) + "K";
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(0) + "M";
    } else if (num < 900) {
        return num;
    }
}

export const getHashParams = () => {
    const hashParams = {};
    let e;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
};


export const hexToRgb = (hex) => {
    var c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split("");
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = "0x" + c.join("");
        return (
            "rgb(" + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") + ",0.3)"
        );
    }
    throw new Error("Bad Hex");


}


export const titleTrimmer = (title, maxChar = 18) => {
    if (title.length > maxChar) {
        title = title.substring(0, maxChar) + "...";
        return title;
    } else {
        return title
    }
}


// export const getKeyFromAyncStorage = async (key)=>{
//     try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//             this.setState({ token: value });
//         }
//     } catch (error) {
//         return error;
//     }
// }