function generateotp(length) {
    let otp = '';
    for(i=0; i<length; i++) {
        otp += Math.floor(Math.random(length) * 10).toString();
    }
    return otp;

}

console.log(generateotp(5));