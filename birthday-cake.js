function birthdayCakeCandles(candles) {
    let count = 0;
    let maxElem = Math.max(...candles)
    for (let i = 0; i < candles.length; i++) {
        if (maxElem === candles[i]) {
            count = count + 1;
        }
    }
    return count;
}