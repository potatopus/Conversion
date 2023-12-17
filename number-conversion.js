let users = ['admin'];
let passwords = ['adminpass'];
let input = 'valid';
let signedIn = false;
let userForgotpassword;

function signinButton() {
    var password = document.getElementById("password1");
    var confirmpassword = document.getElementById("confirmpassword");
    var password1 = document.getElementById("password2");
    var confirmpassword1 = document.getElementById("confirmpassword1");
    let timerInterval;
    Swal.fire({
        timer: 600,
        background: 'transparent',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(() => {
        document.getElementById('signin').style.display = 'block';
        document.getElementById('signup').style.display = 'none';
        document.getElementById('forgotpassword').style.display = 'none';
        document.getElementById('username').value = null;
        document.getElementById('password').value = null;
        document.getElementById('showpassword1').checked = false;
        confirmpassword.type = "password";
        password.type = "password";
        password1.value = null;
        confirmpassword1.value = null;
        document.getElementById('showpassword2').checked = false;
        confirmpassword1.type = "password";
        password1.type = "password";
    })
}

function signupButton() {
    var password = document.getElementById("password");
    let timerInterval;
    Swal.fire({
        timer: 600,
        background: 'transparent',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(() => {
        document.getElementById('signin').style.display = 'none';
        document.getElementById('signup').style.display = 'block';
        document.getElementById('username1').value = null;
        document.getElementById('password1').value = null;
        document.getElementById('confirmpassword').value = null;
        document.getElementById('showpassword').checked = false;
        password.type = "password";
    })
}

function showpassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showpassword1() {
    var password = document.getElementById("password1");
    var confirmpassword = document.getElementById("confirmpassword");
    if (password.type === "password") {
        password.type = "text";
        confirmpassword.type = "text";
    } else {
        confirmpassword.type = "password";
        password.type = "password";
    }
}

/* Forgot password */
function forgotpassword() {
    Swal.fire({
        title: "Input username",
        text: "type your username",
        input: 'text',
        showCancelButton: true,
        background: 'grey',
        color: 'whitesmoke'
    }).then((result) => {
        if (result.isConfirmed) {
            if (users.includes(result.value)) {
                userForgotpassword = users.indexOf(result.value);
                let timerInterval;
                Swal.fire({
                    timer: 600,
                    background: 'transparent',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then(() => {
                    console.log('username found');
                    document.getElementById('showpassword').checked = false;
                    document.getElementById("password").type = 'password';
                    document.getElementById('username').value = null;
                    document.getElementById('password').value = null;
                    document.getElementById('signin').style.display = 'none';
                    document.getElementById('forgotpassword').style.display = 'block';
                })
            }
            else {
                let timerInterval;
                Swal.fire({
                    timer: 600,
                    background: 'transparent',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    willClose: () => {
                        clearInterval(timerInterval);
                    }
                }).then(() => {
                    Swal.fire({
                        title: "Username not found",
                        background: 'grey',
                        color: 'whitesmoke'
                    })
                });
                console.log('username not found');
            }
        }
    });
}

function showpassword2() {
    var password = document.getElementById("password2");
    var confirmpassword = document.getElementById("confirmpassword1");
    if (password.type === "password") {
        password.type = "text";
        confirmpassword.type = "text";
    } else {
        confirmpassword.type = "password";
        password.type = "password";
    }
}

/* Change password */
function changepassword() {
    let password = document.getElementById('password2').value;
    let confirmpassword = document.getElementById('confirmpassword1').value;

    for (let inp of password) {
        if (inp == " ") {
            input = 'password invalid';
        }
    }

    if (password == '') {
        Swal.fire({
            icon: "error",
            title: "PASSWORD CHANGE FAILED!",
            text: "enter password",
            color: 'white',
            background: 'grey'
        });
    }
    
    else if (input == 'password invalid') {
        Swal.fire({
            icon: "error",
            title: "INVALID INPUT!",
            text: "password can not contain SPACES",
            color: 'white',
            background: 'grey'
        });
    }

    else if (password != confirmpassword) {
        Swal.fire({
            icon: 'error',
            title: 'PASSWORD CHANGE FAILED!',
            text: 'password doesn\'t match',
            color: 'white',
            background: 'grey'
        })
    }
    
    else {
        Swal.fire({
            icon: 'success',
            title: 'PASSWORD CHANGE SUCCESFUL!',
            text: 'successfully changed password',
            color: 'white',
            background: 'grey'
        })
        passwords[userForgotpassword] = password;
        document.getElementById('password2').value = null;
        document.getElementById('confirmpassword1').value = null;
    }
    input = 'valid';
    console.log(userForgotpassword);
}

function signout() {
    base = 'dec';
    document.getElementById('baseButtonBin').style.color = '#ADB5BD';
    document.getElementById('baseButtonBin').style.textShadow = 'none';
    document.getElementById('baseButtonDec').style.color = '#aff6ff';
    document.getElementById('baseButtonDec').style.textShadow = '0 0 6px #F8F9FA';
    document.getElementById('baseButtonOct').style.color = '#ADB5BD';
    document.getElementById('baseButtonOct').style.textShadow = 'none';
    document.getElementById('baseButtonHex').style.color = '#ADB5BD';
    document.getElementById('baseButtonHex').style.textShadow = 'none';
    for (let i = 0; i < 10; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = false;
    }
    for (let i = 10; i < 16; i++) {
        let buttonId = 'hexButton' + i;
        document.getElementById(buttonId).disabled = true;
    }
    numberInput.innerHTML = '';
    document.getElementById('baseButtonBin').disabled = false;
    document.getElementById('baseButtonDec').disabled = true;
    document.getElementById('baseButtonOct').disabled = false;
    document.getElementById('baseButtonHex').disabled = false;

    /*CHANGE BASE*/
    document.getElementById('conversion1').innerHTML = 'BIN';
    document.getElementById('conversion2').innerHTML = 'OCT';
    document.getElementById('conversion3').innerHTML = 'HEX';

    let timerInterval;
    Swal.fire({
        timer: 600,
        background: 'transparent',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then(() => {
        document.getElementById('signin').style.display = 'block';
        document.getElementById('signout').style.display = 'none';
        document.getElementById('converter').style.display = 'none';
        signedIn = false;
    })
}

function signIn() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let userConfirmed = false;

    for (let i = 0; i < users.length; i++) {
        if (username == users[i] && password == passwords[i]) {
            userConfirmed = true;
        }
    }

    if (userConfirmed) {
        var passwordShow = document.getElementById("password");
        document.getElementById('username').value = null;
        document.getElementById('password').value = null;
        signedIn = true;
        let timerInterval;
        Swal.fire({
            icon: 'success',
            title: "successfully signed in",
            timer: 1000,
            color: 'white',
            background: 'grey',
            didOpen: () => {
                Swal.showLoading();
            },
            willClose: () => {
                clearInterval(timerInterval);
                if (signedIn == true) {
                    document.getElementById('signin').style.display = 'none';
                    document.getElementById('signup').style.display = 'none';
                    document.getElementById('converter').style.display = 'block';
                    document.getElementById('signout').style.display = 'block';
                    document.getElementById('showpassword').checked = false;
                    passwordShow.type = "password";
                }
            }
        })
    }
    else {
        Swal.fire({
            icon: "error",
            title: "oops...",
            text: "wrong username and/or password",
            color: 'white',
            background: 'grey'
        });
    }
}

function signupUser() {
    let username = document.getElementById('username1').value;
    let password = document.getElementById('password1').value;
    let confirmpassword = document.getElementById('confirmpassword').value;

    for (let inp of username) {
        if (inp == " ") {
            input = 'user invalid';
        }
    }

    for (let inp of password) {
        if (inp == " ") {
            input = 'password invalid';
        }
    }

    if (username == '' || password == '') {
        Swal.fire({
            icon: "error",
            title: "SIGN UP FAILED!",
            text: "enter username and password",
            color: 'white',
            background: 'grey'
        });
    }
    else if (input == 'user invalid') {
        Swal.fire({
            icon: "error",
            title: "INVALID INPUT!",
            text: "username can not contain SPACES",
            color: 'white',
            background: 'grey'
        });
    }
    else if (input == 'password invalid') {
        Swal.fire({
            icon: "error",
            title: "INVALID INPUT!",
            text: "password can not contain SPACES",
            color: 'white',
            background: 'grey'
        });
    }
    else if (password != confirmpassword) {
        Swal.fire({
            icon: 'error',
            title: 'SIGN UP FAILED!',
            text: 'password doesn\'t match',
            color: 'white',
            background: 'grey'
        })
    }
    else {
        Swal.fire({
            icon: 'success',
            title: 'SIGN UP SUCCESFUL!',
            text: 'successfully signed up user',
            color: 'white',
            background: 'grey'
        })
        users.push(username);
        passwords.push(password);
        document.getElementById('username1').value = null;
        document.getElementById('password1').value = null;
        document.getElementById('confirmpassword').value = null;
    }
    input = 'valid';
}

/*CONVERSION JAVASCRIPT*/

var base = 'dec';

for (let i = 10; i < 16; i++) {
    let buttonId = 'hexButton' + i;
    document.getElementById(buttonId).disabled = true;
}

setInterval(() => {
    let numberInput = document.getElementById('numberInput').innerHTML;
    let numberInput1 = document.getElementById('numberInput').innerHTML;
    let numberInput2 = document.getElementById('numberInput').innerHTML;
    let numberInput3 = document.getElementById('numberInput').innerHTML;

    if (base === 'bin') {
        /*REVERSE THE BINARY FOR CONVERSION*/
        var revBin = '';
        for (let i = numberInput1.length - 1; i >= 0; i--) {
            revBin += numberInput1[i];
        }

        /*CONVERSION TO DEC*/
        var dec = 0;
        for (let i = 0; i < revBin.length; i++) {
            dec += revBin[i] * (2 ** i);
        }
        result1.innerHTML = dec;

        /*CONVERSION TO OCTAL*/
        var oct = "";
        var toOct = 0;
        var digits = 1;
        for (let i = 0; i < revBin.length; i++) {
            if (digits > 4) {
                oct = toOct + oct;
                digits = 1;
                toOct = 0;
            }
            if (revBin[i] == 1) {
                toOct += digits;
            }
            digits *= 2;
        }
        result2.innerHTML = toOct + oct;

        /*CONVERSION TO HEX*/
        var hex = "";
        var toHex = 0;
        var digits = 1;
        for (let i = 0; i < revBin.length; i++) {
            if (digits > 8) {
                hex = toHex + hex;
                digits = 1;
                toHex = 0;
            }
            if (revBin[i] == 1) {
                toHex += digits;
                switch (toHex) {
                    case 10:
                        toHex = 'A';
                        break;
                    case 11:
                        toHex = 'B';
                        break;
                    case 12:
                        toHex = 'C';
                        break;
                    case 13:
                        toHex = 'D';
                        break;
                    case 14:
                        toHex = 'E';
                        break;
                    case 15:
                        toHex = 'F';
                        break;
                    default:
                        toHex = toHex;
                        break;
                }
            }
            digits *= 2;
        }
        result3.innerHTML = toHex + hex;
    }

    else if (base === 'dec') {
        /*CONVERSION TO BIN*/
        var binary = "";
        while (numberInput1 != 0) {
            quotient = Math.floor(numberInput1 / 2);
            toBin = numberInput1 % 2;
            numberInput1 = quotient;
            binary = toBin + binary;
        }
        result1.innerHTML = binary;

        /*CONVERSION TO OCT*/
        var octal = "";
        while (numberInput2 != 0) {
            quotient = Math.floor(numberInput2 / 8);
            toOct = numberInput2 % 8;
            numberInput2 = quotient;
            octal = toOct + octal;
        }
        result2.innerHTML = octal;

        /*CONVERSION TO HEX*/
        var hexa = "";
        while (numberInput3 != 0) {
            quotient = Math.floor(numberInput3 / 16);
            toHex = numberInput3 % 16;
            switch (toHex) {
                case 10:
                    toHex = 'A';
                    break;
                case 11:
                    toHex = 'B';
                    break;
                case 12:
                    toHex = 'C';
                    break;
                case 13:
                    toHex = 'D';
                    break;
                case 14:
                    toHex = 'E';
                    break;
                case 15:
                    toHex = 'F';
                    break;
                default:
                    toHex = toHex;
                    break;
            }
            numberInput3 = quotient;
            hexa = toHex + hexa;
        }
        result3.innerHTML = hexa;
    }

    else if (base === 'oct') {
        /*REVERSE THE OCTAL FOR CONVERSION*/
        var revOct = '';
        for (let i = numberInput.length - 1; i >= 0; i--) {
            revOct += numberInput[i];
        }

        /*CONVERSION TO BIN*/
        var bin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                bin += "000";
            }
            else if (val == 1) {
                bin += "001";
            }
            else if (val == 2) {
                bin += "010";
            }
            else if (val == 3) {
                bin += "011";
            }
            else if (val == 4) {
                bin += "100";
            }
            else if (val == 5) {
                bin += "101";
            }
            else if (val == 6) {
                bin += "101";
            }
            else if (val == 7) {
                bin += "111";
            }
        }
        result1.innerHTML = bin;

        /*CONVERSION TO DEC*/
        var dec = 0;
        for (let i = 0; i < revOct.length; i++) {
            dec += revOct[i] * (8 ** i);
        }
        result2.innerHTML = dec;

        /*CONVERSION TO HEX*/
        // first convert to binary
        var toBin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                toBin += "000";
            }
            else if (val == 1) {
                toBin += "001";
            }
            else if (val == 2) {
                toBin += "010";
            }
            else if (val == 3) {
                toBin += "011";
            }
            else if (val == 4) {
                toBin += "100";
            }
            else if (val == 5) {
                toBin += "101";
            }
            else if (val == 6) {
                toBin += "101";
            }
            else if (val == 7) {
                toBin += "111";
            }
        }
        // then from binary to hexadecimal
        var hex = "";
        var toHex = 0;
        var digits = 1;
        for (let i = toBin.length - 1; i >= 0; i--) {
            if (digits > 8) {
                hex = toHex + hex;
                digits = 1;
                toHex = 0;
            }
            if (toBin[i] == 1) {
                toHex += digits;
                switch (toHex) {
                    case 10:
                        toHex = 'A';
                        break;
                    case 11:
                        toHex = 'B';
                        break;
                    case 12:
                        toHex = 'C';
                        break;
                    case 13:
                        toHex = 'D';
                        break;
                    case 14:
                        toHex = 'E';
                        break;
                    case 15:
                        toHex = 'F';
                        break;
                    default:
                        toHex = toHex;
                        break;
                }
            }
            digits *= 2;
        }
        result3.innerHTML = toHex + hex;
    }

    else if (base === 'hex') {
        /*REVERSE THE HEX FOR CONVERSION*/
        var revHex = '';
        for (let i = numberInput.length - 1; i >= 0; i--) {
            revHex += numberInput[i];
        }

        /*CONVERSION TO BIN*/
        var bin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                bin += "0000";
            }
            else if (val == 1) {
                bin += "0001";
            }
            else if (val == 2) {
                bin += "0010";
            }
            else if (val == 3) {
                bin += "0011";
            }
            else if (val == 4) {
                bin += "0100";
            }
            else if (val == 5) {
                bin += "0101";
            }
            else if (val == 6) {
                bin += "0101";
            }
            else if (val == 7) {
                bin += "0111";
            }
            else if (val == 8) {
                bin += "1000";
            }
            else if (val == 9) {
                bin += "1001";
            }
            else if (val == 'a' || val == 'A') {
                bin += "1010";
            }
            else if (val == 'b' || val == 'B') {
                bin += "1011";
            }
            else if (val == 'c' || val == 'C') {
                bin += "1100";
            }
            else if (val == 'd' || val == 'D') {
                bin += "1101";
            }
            else if (val == 'e' || val == 'E') {
                bin += "1110";
            }
            else if (val == 'f' || val == 'F') {
                bin += "1111";
            }
        }
        result1.innerHTML = bin;

        /*CONVERSION TO DEC*/
        var dec = 0;
        for (let i = 0; i < revHex.length; i++) {
            var val = revHex[i];
            switch (val) {
                case 'a':
                case 'A':
                    val = 10;
                    break;
                case 'b':
                case 'B':
                    val = 11;
                    break;
                case 'c':
                case 'C':
                    val = 12;
                    break;
                case 'd':
                case 'D':
                    val = 13;
                    break;
                case 'e':
                case 'E':
                    val = 14;
                    break;
                case 'f':
                case 'F':
                    val = 15;
                    break;
                default:
                    val = revHex[i];
                    break;
            }
            dec += val * (16 ** i);
        }
        result2.innerHTML = dec;

        /*CONVERSION TO OCT*/
        // first convert to binary
        var toBin = "";
        for (let i = 0; i < numberInput.length; i++) {
            let val = numberInput[i];
            if (val == 0) {
                toBin += "0000";
            }
            else if (val == 1) {
                toBin += "0001";
            }
            else if (val == 2) {
                toBin += "0010";
            }
            else if (val == 3) {
                toBin += "0011";
            }
            else if (val == 4) {
                toBin += "0100";
            }
            else if (val == 5) {
                toBin += "0101";
            }
            else if (val == 6) {
                toBin += "0101";
            }
            else if (val == 7) {
                toBin += "0111";
            }
            else if (val == 8) {
                toBin += "1000";
            }
            else if (val == 9) {
                toBin += "1001";
            }
            else if (val == 'a' || val == 'A') {
                toBin += "1010";
            }
            else if (val == 'b' || val == 'B') {
                toBin += "1011";
            }
            else if (val == 'c' || val == 'C') {
                toBin += "1100";
            }
            else if (val == 'd' || val == 'D') {
                toBin += "1101";
            }
            else if (val == 'e' || val == 'E') {
                toBin += "1110";
            }
            else if (val == 'f' || val == 'F') {
                toBin += "1111";
            }
        }
        // then convert the binary to octal
        var oct = "";
        var toOct = 0;
        var digits = 1;
        for (let i = toBin.length - 1; i >= 0; i--) {
            if (digits > 4) {
                oct = toOct + oct;
                digits = 1;
                toOct = 0;
            }
            if (toBin[i] == 1) {
                toOct += digits;
            }
            digits *= 2;
        }
        result3.innerHTML = toOct + oct;
    }

}, 10);

function numZero() {
    numberInput.innerHTML += "0";
}

function numOne() {
    numberInput.innerHTML += "1";
}

function numTwo() {
    numberInput.innerHTML += "2";
}

function numThree() {
    numberInput.innerHTML += "3";
}

function numFour() {
    numberInput.innerHTML += "4";
}

function numFive() {
    numberInput.innerHTML += "5";
}

function numSix() {
    numberInput.innerHTML += "6";
}

function numSeven() {
    numberInput.innerHTML += "7";
}

function numEight() {
    numberInput.innerHTML += "8";
}

function numNine() {
    numberInput.innerHTML += "9";
}

function hexA() {
    numberInput.innerHTML += "A";
}

function hexB() {
    numberInput.innerHTML += "B";
}

function hexC() {
    numberInput.innerHTML += "C";
}

function hexD() {
    numberInput.innerHTML += "D";
}

function hexE() {
    numberInput.innerHTML += "E";
}

function hexF() {
    numberInput.innerHTML += "F";
}

function del() {
    let numIn = document.getElementById("numberInput").innerHTML;
    numIn = numIn.slice(0, -1);
    document.getElementById("numberInput").innerHTML = numIn;
}

function clr() {
    numberInput.innerHTML = null;
}

function bin() {
    base = 'bin';
    document.getElementById('baseButtonBin').style.color = '#aff6ff';
    document.getElementById('baseButtonBin').style.textShadow = '0 0 6px #F8F9FA';
    document.getElementById('baseButtonDec').style.color = '#ADB5BD';
    document.getElementById('baseButtonDec').style.textShadow = 'none';
    document.getElementById('baseButtonOct').style.color = '#ADB5BD';
    document.getElementById('baseButtonOct').style.textShadow = 'none';
    document.getElementById('baseButtonHex').style.color = '#ADB5BD';
    document.getElementById('baseButtonHex').style.textShadow = 'none';
    for (let i = 2; i < 10; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = true;
    }
    for (let i = 10; i < 16; i++) {
        let buttonId = 'hexButton' + i;
        document.getElementById(buttonId).disabled = true;
    }
    numberInput.innerHTML = '';
    document.getElementById('baseButtonBin').disabled = true;
    document.getElementById('baseButtonDec').disabled = false;
    document.getElementById('baseButtonOct').disabled = false;
    document.getElementById('baseButtonHex').disabled = false;

    /*CHANGE BASE*/
    document.getElementById('conversion1').innerHTML = 'DEC';
    document.getElementById('conversion2').innerHTML = 'OCT';
    document.getElementById('conversion3').innerHTML = 'HEX';
}

function dec() {
    base = 'dec';
    document.getElementById('baseButtonBin').style.color = '#ADB5BD';
    document.getElementById('baseButtonBin').style.textShadow = 'none';
    document.getElementById('baseButtonDec').style.color = '#aff6ff';
    document.getElementById('baseButtonDec').style.textShadow = '0 0 6px #F8F9FA';
    document.getElementById('baseButtonOct').style.color = '#ADB5BD';
    document.getElementById('baseButtonOct').style.textShadow = 'none';
    document.getElementById('baseButtonHex').style.color = '#ADB5BD';
    document.getElementById('baseButtonHex').style.textShadow = 'none';
    for (let i = 0; i < 10; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = false;
    }
    for (let i = 10; i < 16; i++) {
        let buttonId = 'hexButton' + i;
        document.getElementById(buttonId).disabled = true;
    }
    numberInput.innerHTML = '';
    document.getElementById('baseButtonBin').disabled = false;
    document.getElementById('baseButtonDec').disabled = true;
    document.getElementById('baseButtonOct').disabled = false;
    document.getElementById('baseButtonHex').disabled = false;

    /*CHANGE BASE*/
    document.getElementById('conversion1').innerHTML = 'BIN';
    document.getElementById('conversion2').innerHTML = 'OCT';
    document.getElementById('conversion3').innerHTML = 'HEX';
}

function oct() {
    base = 'oct';
    document.getElementById('baseButtonBin').style.color = '#ADB5BD';
    document.getElementById('baseButtonBin').style.textShadow = 'none';
    document.getElementById('baseButtonDec').style.color = '#ADB5BD';
    document.getElementById('baseButtonDec').style.textShadow = 'none';
    document.getElementById('baseButtonOct').style.color = '#aff6ff';
    document.getElementById('baseButtonOct').style.textShadow = '0 0 6px #F8F9FA';
    document.getElementById('baseButtonHex').style.color = '#ADB5BD';
    document.getElementById('baseButtonHex').style.textShadow = 'none';
    for (let i = 0; i < 8; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = false;
    }
    for (let i = 8; i < 10; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = true;
    }
    for (let i = 10; i < 16; i++) {
        let buttonId = 'hexButton' + i;
        document.getElementById(buttonId).disabled = true;
    }
    numberInput.innerHTML = '';
    document.getElementById('baseButtonBin').disabled = false;
    document.getElementById('baseButtonDec').disabled = false;
    document.getElementById('baseButtonOct').disabled = true;
    document.getElementById('baseButtonHex').disabled = false;

    /*CHANGE BASE*/
    document.getElementById('conversion1').innerHTML = 'BIN';
    document.getElementById('conversion2').innerHTML = 'DEC';
    document.getElementById('conversion3').innerHTML = 'HEX';
}

function hex() {
    base = 'hex';
    document.getElementById('baseButtonBin').style.color = '#ADB5BD';
    document.getElementById('baseButtonBin').style.textShadow = 'none';
    document.getElementById('baseButtonDec').style.color = '#ADB5BD';
    document.getElementById('baseButtonDec').style.textShadow = 'none';
    document.getElementById('baseButtonOct').style.color = '#ADB5BD';
    document.getElementById('baseButtonOct').style.textShadow = 'none';
    document.getElementById('baseButtonHex').style.color = '#aff6ff';
    document.getElementById('baseButtonHex').style.textShadow = '0 0 6px #F8F9FA';
    for (let i = 0; i < 10; i++) {
        let buttonId = 'button' + i;
        document.getElementById(buttonId).disabled = false;
    }
    for (let i = 10; i < 16; i++) {
        let buttonId = 'hexButton' + i;
        document.getElementById(buttonId).disabled = false;
    }
    numberInput.innerHTML = '';
    document.getElementById('baseButtonBin').disabled = false;
    document.getElementById('baseButtonDec').disabled = false;
    document.getElementById('baseButtonOct').disabled = false;
    document.getElementById('baseButtonHex').disabled = true;

    /*CHANGE BASE*/
    document.getElementById('conversion1').innerHTML = 'BIN';
    document.getElementById('conversion2').innerHTML = 'DEC';
    document.getElementById('conversion3').innerHTML = 'OCT';
}