 const users = JSON.parse(localStorage.getItem("users")) || [];

        function login() {
            const username = document.getElementById("login-username").value;
            const password = document.getElementById("login-password").value;
            const message = document.getElementById("message");

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                message.style.color = "green";
                message.innerText = "You have logged in successfully. You will be redirected now...";
                // إعادة التوجيه إلى index.html بعد 1.5 ثانية
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1500);
            } else {
                message.style.color = "red";
                message.innerText = "You are not registered! Please register first.";
            }
        }

        function register() {
            const username = document.getElementById("reg-username").value;
            const password = document.getElementById("reg-password").value;
            const message = document.getElementById("message");

            if (!username || !password) {
                message.style.color = "red";
                message.innerText = "Please enter your username and password.";
                return;
            }

            // تحقق من أن كلمة المرور 8 خانات أو أكثر
            if (password.length < 8) {
                message.style.color = "red";
                message.innerText = "The password must be at least 8 characters long.";
                return;
            }

            const exists = users.find(u => u.username === username);
            if (exists) {
                message.style.color = "red";
                message.innerText = "The username already exists.";
            } else {
                users.push({ username, password });
                localStorage.setItem("users", JSON.stringify(users));
                message.style.color = "green";
                message.innerText = "Registration successful! You can now login.";
                // العودة إلى صفحة تسجيل الدخول بعد 1.5 ثانية
                setTimeout(() => {
                    goToLogin();
                }, 1500);
            }
        }

        function goToRegister() {
            document.getElementById("login-section").style.display = "none";
            document.getElementById("register-section").style.display = "block";
            document.getElementById("message").innerText = "";
        }

        function goToLogin() {
            document.getElementById("register-section").style.display = "none";
            document.getElementById("login-section").style.display = "block";
            document.getElementById("message").innerText = "";
        }