suite("Sorting Algorithms", function() {

    var expected = [2, 10, 12, 23, 30, 65, 67, 67, 76, 98, 234, 234],
        result;

    afterEach(function() {
        for(var i = 0; i < expected.length; i++) {
            if(result[i] !== expected[i]) {
                throw new Error("Result is not correct: " + result.toString());
            }
        }
    });

    test("Insertion Sort", function() {

        result = insertionSort([10, 30, 98, 23, 65, 234, 67, 234, 12, 2, 76, 67]);
    });

    function insertionSort(array) {
        var l = array.length;

        for (var i = 0; i < l; i++) {
            var j = i;
            while (j >= 0) {
                if (array[j] > array[j + 1]) {

                    var t = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = t;
                }
                j = j - 1;
            }
        }

        return array;
    }

});
