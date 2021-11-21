function lifeInWeeks(age) {
    yearsRemaining = 90 - age;
  total_days = yearsRemaining * 365;
  total_weeks = yearsRemaining * 52;
  total_months = yearsRemaining * 12;
  console.log(
    "You have " +
      total_days +
      " days, " +
      total_weeks +
      " weeks, and " +
      total_months +
      " months left."
  );
}

lifeInWeeks(56);
