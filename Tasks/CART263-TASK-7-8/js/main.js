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

    renderIrisShapes(irisesWithColors);
  }

window.onload = async function(){
    console.log("task 7-8");

    try{
 
        let response = await fetch('../data/iris.json'); //response
        let parsedResultJS = await response.json();
        console.log(parsedResultJS);

        mapIrisesColors(parsedResultJS);

       }
       catch(err){
        
           console.log(err)
       }

      

       
mapIrisesColors();
    

}