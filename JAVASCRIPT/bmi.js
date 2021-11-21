function BMI(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
    
}
BMI(45, 160);