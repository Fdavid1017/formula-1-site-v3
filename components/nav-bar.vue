<template>
  <div>
    <!--  MEDIUM NAVBAR  -->
    <v-app-bar
      flat
      color="transparent"
      class="px-5 my-nav-bar d-none d-sm-none d-md-block"
    >
      <div class="nav-bar-item">
        <nuxt-link to="">
          Schedule
        </nuxt-link>
      </div>
      <v-spacer />
      <div class="nav-bar-item">
        <nuxt-link to="">
          News
        </nuxt-link>
      </div>
      <v-spacer />
      <v-app-bar-nav-icon>
        <img class="logo" src="~static/f1-logo.svg">
      </v-app-bar-nav-icon>
      <v-spacer />
      <div class="nav-bar-item">
        <nuxt-link to="">
          Drivers
        </nuxt-link>
      </div>
      <v-spacer />
      <div class="nav-bar-item">
        <nuxt-link to="">
          Teams
        </nuxt-link>
      </div>
    </v-app-bar>

    <!--  SMALL NAVBAR  -->
    <div class="px-5 justify-center my-nav-bar d-flex d-sm-flex d-md-none">
      <v-row>
        <v-col>
          <div class="justify-center d-flex">
            <img class="logo" src="~static/f1-logo.svg" alt="F1">
          </div>
        </v-col>
        <v-col class="my-auto">
          <div :class="'hamburger ' +(showMobileMenu?'active':'')" @click="toggleMobileMenu">
            <span class="bar" />
            <span class="bar" />
            <span class="bar" />
          </div>
        </v-col>
      </v-row>

      <div class="nav-menu mt-5" :class="(showMobileMenu?'active':'')">
        <v-row>
          <v-col>
            <div class="nav-bar-item justify-center d-flex" @click="toggleMobileMenu">
              <nuxt-link to="">
                Schedule
              </nuxt-link>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="nav-bar-item justify-center d-flex" @click="toggleMobileMenu">
              <nuxt-link to="">
                News
              </nuxt-link>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="nav-bar-item justify-center d-flex" @click="toggleMobileMenu">
              <nuxt-link to="">
                Drivers
              </nuxt-link>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="nav-bar-item justify-center d-flex" @click="toggleMobileMenu">
              <nuxt-link to="">
                Teams
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    toggleMobileMenu () {
      this.showMobileMenu = !this.showMobileMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  display: none;
  cursor: pointer;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #2a2a2a;
  //box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -110%;
    top: 5rem;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    flex-direction: column;
    width: 100%;
    transition: 0.3s;
    background-color: #f6f6f6;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.25), 0px -5px 7px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(6px);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    -webkit-transform: translateY(8px) rotate(45deg);
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    -webkit-transform: translateY(-8px) rotate(-45deg);
    transform: translateY(-8px) rotate(-45deg);
  }
}

.my-nav-bar {
  width: 85%;
  margin-left: auto;
  margin-right: auto;
}

.nav-bar-item {
  text-transform: uppercase;
  color: white;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.25);
  font-family: 'Formula1 Bold';
  font-size: 1.5em;

  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;

  &:hover {
    font-size: 1.25em;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.25);
  }

  a {
    color: white;
    text-decoration: none;
  }
}

.logo {
  max-height: 8em;
}
</style>
