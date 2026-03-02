function generateOTP() {
    let otp = ""

    for (let i = 0; i < 4; i++) {
        otp += Math.floor((Math.random() * 10));
    }
    console.log("four Digit OTP = " + otp);
}

//calling function
generateOTP();