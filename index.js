function superbowlWin(objArray) {
    const holdResult = () => objArray.find(obj => {
        // console.log(obj);
        if (obj.result === "W") {
            return true;
        } else {
            return undefined;
        }
    })
    const wDoesExist = holdResult();
    if (wDoesExist) {
        return wDoesExist.year
    } else {
        return undefined;
    }
}
