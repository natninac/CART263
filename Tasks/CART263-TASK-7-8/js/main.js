function mapIrisesColors(irisArray) {
    const possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];

    irisesWithColors = irisArray.map(iris => {
        const color = possibleColor[Math.floor(Math.random() * possibleColor.length)];
        return {
            ...iris,
            color: color
        };
    });

    console.log("iris with random colors", irisesWithColors);

    // 3. filter irises with sepal width >= 4
    const filteredIrises = irisesWithColors.filter(sepalWidthFour);

    function sepalWidthFour(iris) {
        return iris.sepalWidth >= 4;
    }

    console.log("filtered irises", filteredIrises);

    // 4. reduce to find average petal length
    const totalPetalLength = irisesWithColors.reduce(
        function (accum, iris) {
            return accum + iris.petalLength
        }, 0);

    console.log("total petal length", totalPetalLength);

    const averagePetalLength = totalPetalLength / irisesWithColors.length;

    console.log("average petal length", averagePetalLength);

    // 5. find to find petals with width > 1
    const petalWidthOne = irisesWithColors.find(
        function (iris) {
            return iris.petalWidth > 1
        });

    console.log("irises with petal width > 1", petalWidthOne);

    // 6. some to find object with petal length > 10 
    const petalLengthTen = irisesWithColors.some(
        function (iris) {
            return iris.petalLength > 10
        });

    console.log("irises with petal length > 10", petalLengthTen);

    // 7. some to find object with petal length == 4.2 
    const petalLengthFourPointTwo = irisesWithColors.some(
        function (iris) {
            return iris.petalLength == 4.2
        });

    console.log("irises with petal length == 4.2", petalLengthFourPointTwo);

    renderIrisShapes(irisesWithColors);
}

window.onload = async function () {
    console.log("task 7-8");

    try {

        let response = await fetch('../data/iris.json'); //response
        let parsedResultJS = await response.json();
        console.log(parsedResultJS);

        mapIrisesColors(parsedResultJS);

    }
    catch (err) {

        console.log(err)
    }




    mapIrisesColors();


}