<template>
    <div id="footer">
        <div id="footer-left">
            <a href="https://rejestracja.medfile.pl/register/index/?uuid=3aa71cad-f0cf-1e7f-13fd-3b4f5e9eeaa1">ZAPISY ONLINE</a>
            <router-link to="/cennik">CENNIK</router-link>
        </div>
        <div id="footer-center">
            <a>KLINIKA JA</a>
            <a>JAKTOROWSKA 8</a>
            <a>01-202 WARSZAWA</a>
        </div>
        <div id="footer-right">
            <div id="phone">
                <a>TEL. 453 630 680</a>
            </div>
            <div id="socials">
                <a href="https://www.facebook.com/profile.php?id=61555627505963">
                    <img src="../assetsPng/fbii.png">
                </a>
                <a href="https://www.instagram.com/klinika_ja/">
                    <img src="../assetsPng/igi.png">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  setup() {

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
        font-size: small;
    }
    #footer
    {

        height: 70px;
        border-top: 1px solid #1f1c1c;
        display: flex;
        justify-content: space-around;
        #footer-left
        {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        #footer-center
        {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        #footer-right
        {
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
    }
    @media only screen and (max-width: 1000px)
    {

        #footer{
            a {font-size: smaller;}
            align-items: center;
            #footer-left{
                justify-content: center;
                align-items: center;
                flex-direction: column;
                width: 25%;
            }
            #footer-center{
                flex-direction: column;
                width: 30%;
            }
            #footer-right{
                display: flex;
                flex-direction: column
            }
        }
    }
</style>
