<template>
    <div id="mainn">
        <div id="main-entrance">
            <h2 @mouseover="increaseSize" @mouseout="resetSize">Rozpocznij Swoją podróż z Kliniką JA</h2>
            <p>
                Cieszymy się, że nasza oferta wzbudziła Twoje zainteresowanie.
                <br>
                Jesteśmy tutaj, aby odpowiedzieć na wszystkie Twoje pytania, rozwiać wątpliwości
                <br>
                oraz pomóc Ci zaplanować pierwsze kroki na Twojej indywidualnej ścieżce do piękna i zdrowia.
            </p>
        </div>
        <div id="main-data" class="flex-container">
            <br>
            <strong>Jak się z nami skontaktować:</strong>
            <p>
                <strong>Telefonicznie</strong>: Nasz zespół jest dostępny pod numerem <strong>453 630 680 </strong>od poniedziałku do piątku w godzinach 09:00-19:00,
                <br>
                a w soboty 10:00-14:00.
                <br>
                Chętnie umówimy Cię na konsultację lub odpowiemy na pytania dotyczące naszych usług.
                <br>
                <br>
                <strong>E-mailowo</strong>: Preferujesz kontakt elektroniczny? Napisz do nas na adres: <strong>info@klinikaja.pl</strong>
                <br>
                Dołożymy starań, aby odpowiedzieć na Twoją wiadomość jak najszybciej.
                <br>
                <br>
                <strong>Facebook</strong>: klinika JA
                <br>
                <strong>Instagram</strong>: klinika_ja
                <br>
                <br>
                <Strong>Odwiedź nas osobiście</Strong>: Jeśli wolisz bezpośredni kontakt, zapraszamy do naszej kliniki pod adresem <strong>ul. Jaktorowska 8, 01-202 Warszawa</strong>, wejście od ul. Karolkowej.
                <br>
                Będzie nam niezmiernie miło gościć Cię i przedstawić naszą ofertę.
                <br>

            </p>
        </div>
        <div id="main-lower">
            <a id="link1" href="https://rejestracja.medfile.pl/register/index/?uuid=3aa71cad-f0cf-1e7f-13fd-3b4f5e9eeaa1"><strong>Jesteś już zdecydowany/a? Zapisz się online na wizytę :)</strong></a>
        </div>
        <br>
        <div id="main-end">
            <br>
            <a><strong>Jesteśmy dla Ciebie!</strong></a>
            <a>Pamiętaj, że bez względu na pytanie czy wątpliwość, jesteśmy tutaj, aby Ci pomóc. Naszym priorytetem jest Twoje zadowolenie i dobrostan, dlatego zależy nam na budowaniu otwartych i serdecznych relacji z Naszymi Klientami. <strong>Zapraszamy do kontaktu!</strong></a>
        </div>
        <div id="main-maps">
            <br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.500425438945!2d20.975192376913647!3d52.23429355734281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8296892633%3A0x72fe0ca3d273ab9b!2sJaktorowska%208%2C%2001-202%20Warszawa!5e0!3m2!1sen!2spl!4v1709136669203!5m2!1sen!2spl" height="300" width="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <br>
        </div>
    </div>
</template>
<script>
export default {
  setup() {
    const increaseSize = () => {
      document.querySelector('h2').style.fontSize = '1.8em';
    };

    const resetSize = () => {
      document.querySelector('h2').style.fontSize = ''; // Reset to initial size
    };

    return { increaseSize, resetSize };
  }
}
</script>


<style lang="scss" scoped>
@import '../styles/style.scss';
    *{
    text-decoration: none;
    }
#mainn
{
    min-height: 90vh;
    height: 100%;
    width: 90%;
    #main-entrance
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #main-data
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    #main-lower
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        #link1{
            color: #BD924A;
        }
    }
    #main-end
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    h2
    {
        transition: font-size 0.3s ease-in-out;
    }
    @media only screen and (max-width: 768px) {
        .flex-container{
            display: flex;
            width: 80vw;
        }
    }
}
</style>