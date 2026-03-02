// 4 digit 'OTP generator'

function generateOTP() {
    let otp = ""

    for (let i = 0; i < 4; i++) {
        otp += Math.floor((Math.random() * 10));
    }
    console.log("four Digit OTP = " + otp);
}

//calling function
// generateOTP();



// custom otp Generator 
function customGenerateOTP(length) {
    let otp = ""

    for (let i = 0; i < length; i++) {
        otp += Math.floor((Math.random() * 10));
    }
    console.log(`OTP of ${length} digits: ${otp}`);
    return otp;
}

//calling function
customGenerateOTP(4) // otp of 4 digit
customGenerateOTP(6) // opt of 6 digit
customGenerateOTP(10) // opt of 10 digit