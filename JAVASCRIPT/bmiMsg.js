function bmiCalculator(weight, height) {
  var bmi = Math.round(weight / (height * height));
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + " , so you are underweight";
  } else if (bmi > 18.5 && bmi < 24.9) {
    return "Your BMI is " + bmi + " , so you have normal weight";
  } else if (bmi > 24.9) {
    return "Your BMI is " + bmi + " , so you are overweight";
  }
}
bmiCalculator(45, 1.6);
