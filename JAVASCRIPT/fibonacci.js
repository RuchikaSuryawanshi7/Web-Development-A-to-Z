function fibonacciGenerator (n) {
    var series = []
    if (n == 1){
        series.push(0);
        return series;
    }
    else if (n == 2){
        series[0] = 0;
        series[1] = 1;
        return series;
    }
    else{
        series[0] = 0;
        series[1] = 1;
        for (var i=2; i<=n; i++){
            series.push(series[series.length -2] + series[series.length-1]);                   
            }
          return series


    }
}

fibonacciGenerator(5);
Technologies like Web/App development , Machine Learning, computer vision are most important and powerful technologies to use, I have experience in web development,  Flutter, Dart, firebase and google cloud, Machine Learning. 
Winter of code is program will give me a good exposure to the feild of open source and practical implementation 