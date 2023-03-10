<template>
    <div class="form-container outer">
        <div class="form-form">
            <div class="form-form-wrap">
                <div class="form-container">
                    <div class="form-content">

                        <h1 class="">Sign In</h1>
                        <p class="">Log in to your account to continue.</p>
                        <p class="text-error" v-if="LogginFalse.status" style="color:red">{{ LogginFalse.text }}</p>
                        <p class="text-error" v-if="LogginTrue.status"></p>
                        <form class="text-left" method="post" v-on:submit.prevent="Submit">
                            <div class="form">

                                <div id="username-field" class="field-wrapper input">
                                    <label for="username">EMAIL</label>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <input id="username" name="username" type="text" class="form-control"
                                        placeholder="EMAIL" v-model="user.email"
                                        :class="{ error: emailError.status, success: emailSuccess.status }">
                                    <p class="text-error" v-if="emailError.status">{{ emailError.text }}</p>
                                    <p class="success-text" v-if="emailSuccess.status">{{ emailSuccess.text }}
                                    </p>
                                </div>

                                <div id="password-field" class="field-wrapper input mb-2">
                                    <div class="d-flex justify-content-between">
                                        <label for="password">PASSWORD</label>
                                        <a href="" class="forgot-pass-link">Forgot
                                            Password?</a>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-lock">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    <input id="password" name="password" type="password" class="form-control"
                                        placeholder="PASSWORD" v-model="user.password"
                                        :class="{ error: passwordError.status, success: passwordSuccess.status }">
                                    <p class="text-error" v-if="passwordError.status">{{ passwordError.text }}</p>
                                    <p class="success-text" v-if="passwordSuccess.status">{{ passwordSuccess.text }}
                                    </p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" id="toggle-password" class="feather feather-eye">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                                <div class="d-sm-flex justify-content-between">
                                    <div class="field-wrapper">
                                        <button type="submit" class="btn btn-primary" value="">Log In</button>
                                    </div>
                                </div>

                                <div class="division">
                                    <span>OR</span>
                                </div>

                                <div class="social">
                                    <a href="javascript:void(0);" class="btn social-fb">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-facebook">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                                            </path>
                                        </svg>
                                        <span class="brand-name">Facebook</span>
                                    </a>
                                    <a href="javascript:void(0);" class="btn social-github">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-github">
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                            </path>
                                        </svg>
                                        <span class="brand-name">Github</span>
                                    </a>
                                </div>

                                <p class="signup-link">Not registered ? <a href="">Create an
                                        account</a></p>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: {
                email: "",
                password: "",
            },
            emailError: {
                text: "",
                status: false,
            },
            emailSuccess: {
                text: "",
                status: false,
            },
            passwordError: {
                text: "",
                status: false,
            },
            passwordSuccess: {
                text: "",
                status: false,
            },
            LogginFalse: {
                text: "",
                status: false,
            },
            LogginTrue: {
                text: "",
                status: false,
            }

        }
    },
    methods: {
        Submit(event) {
            const regex = /^\w+([.-]?\w+)*@[a-z]+([.-]?\w+)*(.\w{2,3})+$/;
            if (this.user.email.length == 0) {
                this.emailError = {
                    text: "Email cannot be blank",
                    status: true,
                };
                this.LogginTrue = {
                    text: "",
                    status: true
                }
            } else if (!regex.test(this.user.email)) {
                this.emailError = {
                    text: "Email cannot be blank!!!!",
                    status: true,
                };
                this.LogginTrue = {
                    text: "",
                    status: true
                }
            } else if (regex.test(this.user.email)) {
                this.emailSuccess = {
                    text: "",
                    status: true,
                };
                this.emailError = {
                    text: "",
                    status: false,
                };
            }
            else {
                this.emailError = {
                    text: "",
                    status: true,
                };
            }
            if (this.user.password.length == 0) {
                this.passwordError = {
                    text: "Password can not be blank",
                    status: true
                }
                this.LogginTrue = {
                    text: "",
                    status: true
                }
            } else if (this.user.password.length > 0) {
                this.passwordSuccess = {
                    text: "",
                    status: true,
                };
                this.passwordError = {
                    text: "",
                    status: false,
                };
            }
            else {
                this.passwordError = {
                    text: "",
                    status: false
                }
            }
            if (this.emailSuccess.status == true && this.passwordSuccess.status == true) {
                event.preventDefault()
                axios.post('http://localhost:54195/api/AccountAdmin/login/', this.user)
                    .then(response => {

                        const token = response.data.token
                        const users = response.data.user
                        if (this.user.email == users.email && this.user.password == users.password) {
                            localStorage.setItem('token', token)
                            localStorage.setItem('user', JSON.stringify(users))
                            axios.defaults.headers.common['Authorization'] = "Bearer" + token
                            window.location.href = "/";
                            this.LogginTrue = {
                                text: "",
                                status: true
                            }
                            this.LogginFalse = {
                                text: "",
                                status: false
                            }
                        } else {
                            this.LogginFalse = {
                                text: "Email or password is incorrect",
                                status: true
                            }
                            this.LogginTrue = {
                                text: "",
                                status: false
                            }
                        }

                    }).catch(err => {
                        localStorage.removeItem('token');
                        console.log(err);
                        this.LogginFalse = {
                            text: "Email or password is incorrect",
                            status: true
                        }
                        this.LogginTrue = {
                                text: "",
                                status: false
                            }
                    })
            }
        }
    }

}
</script>