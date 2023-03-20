class Interest {
  static calculate(principal, rate, time) {
    const amount = principal * (1 + rate / 100) ** time;
    const interest = amount - principal;
    return interest.toFixed(2);
  }
}

module.exports = Interest;
