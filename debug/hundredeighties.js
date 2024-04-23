function convert(s, numRows) {
    if (s.length === 1 || numRows === 1) {
        return s;
    }
    var strArr = Array.from({ length: numRows }, function () { return []; });
    var curRow = 0;
    var boundaryFlag = -1;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var str = s_1[_i];
        if (!curRow || curRow === numRows - 1) {
            boundaryFlag = -boundaryFlag;
        }
        strArr[curRow].push(str);
        curRow += boundaryFlag;
    }
    return strArr.map(function (row) { return row.join(""); }).join("");
}
var s = "PAYPALISHIRING";
var numRows = 3;
convert(s, numRows);
