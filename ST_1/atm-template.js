const ATM = {
    isAuth: false,
    currentUser: {},
    logs: [],
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        {id: "0000", pin: "000", debet: 0, type: "admin"}, // EXTENDED
        {id: "0025", pin: "123", debet: 675, type: "user"}
    ],
    // authorization
    auth(id, pin) {
        if(!this.isAuth) {
            let i = 0;

            let users = this.users;
            let usersLength = users.length;
            for (; i < usersLength; i++) {
                if (id === users[i].id && pin === users[i].pin) {
                    this.isAuth = true;
                    break;
                }
            }

            if (this.isAuth) {
                if (i === 0) {
                    console.log("Вы авторизовались как администратор")
                } else {
                    console.log("Привет!\n твой id " + this.users[i].id);
                }
                this.currentUser = this.users[i];
                this.logs.push("Пользователь \"/" + this.currentUser.id + "\" вошел в систему");
            } else {
                console.log("не правельный id или pin")
            }
        }else {
            console.log("Вы уже авторизированы ваш id " + this.currentUser.id)
        }
    },
    // check current debet
    check() {
        if (!this.isAuth) {
            console.log("Вы не авторизировались!\n")
        } else {
            console.log("Сумма на вашем счёте:" + this.currentUser.debet);
            this.logs.push("Пользователь \"/" + this.currentUser.id + "\" проверил свой счёт");
        }
    },
    // get cash - available for user only
    getCash(amount) {
        if (!this.isAuth) {
            console.log("Вы не авторизировались!\n")
        } else if (!isNaN(amount) && amount > 0 && amount <= this.currentUser.debet) {
            this.currentUser.debet -= amount;
            this.cash -= amount;
            this.logs.push("Пользователь \"/" + this.currentUser.id + "\" снял с банкомата" + amount);
        } else {
            console.log("Вы ввели неверное значение")
        }
    },
    // load cash - available for user only
    loadCash(amount) {
        if (!this.isAuth) {
            console.log("Вы не авторизировались!\n");
        } else if(this.currentUser === this.users[0]){
            console.log("Администратор не может пополнять свой счёт");
            return;
        }else if (!isNaN(amount) && amount > 0) {
            this.currentUser.debet += amount;
            this.cash += amount;
            this.logs.push("Пользователь \"/" + this.currentUser.id + "\" полжил " + amount + "на свой счёт");
        } else {
            console.log("Вы ввели неверное значение")
        }
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if (!this.isAuth) {
            console.log("Вы не авторизировались!\n")
        } else if (this.currentUser !== this.users[0]) {
            console.log("Вы не администратор!")
        } else if (!isNaN(amount) && amount > 0) {
            this.cash += amount;
            this.logs.push("Банкомат пополнен на " + amount);
        } else {
            console.log("Вы ввели неверное значение")
        }
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if (!this.isAuth) {
            console.log("Вы не авторизировались!\n")
        } else if (this.currentUser !== this.users[0]) {
            console.log("Вы не администратор!")
        } else {
            let logLength = this.logs.length;
            let logs = this.logs;
            for (let i = 0; i < logLength; i++) {
                console.log(logs[i] + "\n")
            }
            this.logs.push("Прооизведён вывод логов");
        }
    }
    ,
    // log out
    logout() {
        if (!this.isAuth) {
            console.log("И куда ты хочешь выйти? :)")
        } else {
            this.logs.push("Пользователь \"/" + this.currentUser.id + "\" вышел из системы");
            this.currentUser = {};
            console.log("Пока!")
        }
    }
};
