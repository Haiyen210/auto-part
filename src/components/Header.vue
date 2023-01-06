<template>
    <div>
        <!--  BEGIN NAVBAR  -->
        <div class="header-container fixed-top" >
            <header class="header navbar navbar-expand-sm" style="background:#1abc9c!important">

                <ul class="navbar-item theme-brand flex-row  text-center">
                    <li class="nav-item theme-logo">
                        <a href="#">
                            <img src="assets/img/logo.svg" class="navbar-logo" alt="logo">
                        </a>
                    </li>
                    <li class="nav-item theme-text">
                        <a href="#" class="nav-link"> AAL </a>
                    </li>
                </ul>

            </header>
        </div>
        <!--  END NAVBAR  -->

        <!--  BEGIN NAVBAR  -->
        <div class="sub-header-container">
            <header class="header navbar navbar-expand-sm">
                <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg></a>

                <ul class="navbar-nav flex-row">
                    <li>
                        <div class="page-header">

                            <nav class="breadcrumb-one" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                    <li class="breadcrumb-item active" aria-current="page"><span>Sales</span></li>
                                </ol>
                            </nav>

                        </div>
                    </li>
                </ul>
                <ul class="navbar-item flex-row ml-md-auto">

                    <li class="nav-item dropdown user-profile-dropdown">
                        <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="userProfileDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            {{ user_name }}
                            <img v-if="images" :src="'http://localhost:8080/uploads/' + images" alt="avatar" />
                            <img src="https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                                alt="avatar" v-else />

                        </a>
                        <div class="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                            <div class="">
                                <div class="dropdown-item">
                                    <a class="" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        {{ user_name }}</a>
                                </div>
                                <div class="dropdown-item" v-if="login">
                                    <a class="" href="" @click.prevent="logOut"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-log-out">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                            <polyline points="16 17 21 12 16 7"></polyline>
                                            <line x1="21" y1="12" x2="9" y2="12"></line>
                                        </svg>
                                        Logout</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </header>
        </div>
        <!--  END NAVBAR  -->
    </div>
</template>
<script>
export default {
  setup() {
    let login = JSON.parse(localStorage.getItem("user"));
    let user_name = login.accountName;
    return { login, user_name }
  },
  methods: {
    logOut() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
  }
};
</script>