<template>
    <div v-if="isMobile">
        <div id="mobilebaner">
            <div id="dropik">
                <div class="dropdown">
                    <div class="dropdown-toggle" @click="toggleMenu">
                      <img src="../assetsPng/ikonka.png" class="icon">
                    </div>
                    <ul v-show="isOpen" class="dropdown-menu">
                      <li v-for="option in options" :key="option.value">
                          <a @click="handleClick(option.value)"> {{ option.text }} </a>
                      </li>
                    </ul>
                </div>
            </div>
            <div id="baner-moblogo" >
              <router-link to="/">
                <a>KLINIKA MEDYCYNY ESTETYCZNEJ</a>
              </router-link>
                <router-link to="/">
                  <img src="../assetsPng/logonew.png"/>
                </router-link>
            </div>
            <div id="pusty">
            </div>
        </div>
    </div>
    <div v-else>
        <div id="baner">
            <div id="baner-left">
                <router-link to="/galeria">GALERIA</router-link>
                <a @click.prevent="handleClick('oferta')">OFERTA</a>
                <router-link to="/zespol">ZESPÓŁ</router-link>
            </div>
            <div id="baner-logo" >
                <router-link to="/">
                <a>KLINIKA MEDYCYNY ESTETYCZNEJ</a>
                </router-link>
                <router-link to="/">
                <img src="../assetsPng/logonew.png"/>
                </router-link>
            </div>
            <div id="baner-right">
                <a @click.prevent="handleClick('o nas')">O NAS</a>
                <router-link to="/cennik">CENNIK</router-link>
                <router-link to="/kontakt">KONTAKT</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {

    data() {
        return {
            isOpen: false,
            options: [
                { value: "galeria", text: "GALERIA" },
                { value: "oferta", text: "OFERTA" },
                { value: "zespol", text: "ZESPÓŁ" },
                { value: "o nas", text: "O NAS" },
                { value: "cennik", text: "CENNIK" },
                { value: "kontakt", text: "KONTAKT" },
            ],
        };
    },
    computed: {
        isMobile() {
            return window.innerWidth <= 1000;
        },
    },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    async handleClick(value) {
      if (value === "cennik") {
        this.$router.push("/cennik");
      }else if (value === "oferta") {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            this.scrollToSection('oferta');
          }, 80);
        });
      }else if (value === "o nas") {
        this.$router.push('/').then(() => {
          setTimeout(() => {
            this.scrollToSection('mainhead');
          }, 80);
        });
      }else if (value === "kontakt") {
        this.$router.push("/kontakt");
      } else if (value === "klinika ja") {
        this.$router.push("/");
      } else if (value === "galeria") {
        this.$router.push("/galeria");
      } else if (value === "zespol"){
        this.$router.push("zespol")
      } else {
        this.selectedOption = this.options.find((option) => option.value === value).text;
      }
      this.isOpen = false;
    },
    scrollToSection(targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  },
};
</script>


<style lang="scss" scoped>
@import '../styles/style.scss';
    *
    {
        background-color: #1f1c1c;
        color: #BD924A;
        text-decoration: none;
        font-size: 13px;
    }
    #baner
    {
        height: 120px;
        border-bottom: 1px solid #1f1c1c;

        display: flex;
        justify-content: space-between;

        #baner-left
        {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
        }
        #baner-right
        {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;
        }
        #baner-logo
        {
          width: 20%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          text-align: center;
        }
    }
    @media only screen and (max-width: 1000px)
    {
        #mobilebaner
        {
            display: flex;
            height: 30%;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            #dropik{
              width:33%;
              margin-left: 2%;
            }
            #pusty{
              width:33%;
            }
            #baner-moblogo
            {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              text-align: center;
            }
            .icon {
              width: 20px;
              height: 20px;
              object-fit: cover;
            }
        }
    }
    html {
      scroll-behavior: smooth;
    }
</style>