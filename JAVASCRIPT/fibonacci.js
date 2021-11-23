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