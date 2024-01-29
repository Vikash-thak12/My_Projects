function generateotp(length) {
    let otp = '';
    for(i=0; i<length; i++) {
        otp += Math.floor(Math.random(length) * 10).toString();
    }
    return otp;

}

let result = new generateotp();
result(5);