
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    return matrix.reduce((accumulator, item, index) =>
        accumulator.concat((index % 2 != 0) ? item.reverse() : item), []);
}
