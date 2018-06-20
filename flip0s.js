// first1 = index lowest 1 in series
// zeroes = array of indices of 0's in series
// maxFlips

function scanData(dataArray, maxFlips) {
    var first1 = 0;
    var zeroes = [];
    var zleft = 0;
    var zright = 0;
    var zbest = 0;
    var longest = 0;

    for (let current = 0; current < dataArray.length; current++) {
        if (dataArray[current] == 0) {
            zeroes[zright++] = current;
            // collected maxFlips?
            if ((zright - zleft) == maxFlips) {
                // calc length
                for (var i = current+1; i < dataArray.length; i++) {
                    if (dataArray[i] == 1) {
                        current = i;
                    } else {
                        break;
                    }
                }
                let thisLen = i - first1;
                if (thisLen > longest) {
                    zbest = zleft;
                    longest = thisLen;
                }
                // slide window
                first1 = zeroes[zleft] + 1;
                zleft++;
            }
        }
    }
    console.log("flip these [" + zeroes.slice(zbest, zbest+maxFlips) + "] for run length " + longest);
}

var v = [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0];
scanData(v, 3);
