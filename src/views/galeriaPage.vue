<template>
  <div id="main">
    <div id="main-stym">
      <h2 @click="toggleText">STYMULATORY TKANKOWE</h2>
        <p class="text-reveal" v-if="showText">
          W świecie, gdzie codziennie szukamy nowych sposobów na
          zachowanie młodości i witalności, pragniemy przedstawić Państwu
          przełom w dziedzinie pielęgnacji skóry – stymulatory tkankowe. To
          nie tylko produkty, to klucze do drzwi, za którymi czeka zdrowsza,
          bardziej elastyczna i młodsza skóra.

          Nie czekaj na jutro, zacznij dzisiaj! Zainwestuj w swoją skórę,
          zainwestuj w swoje zdrowie i dobre samopoczucie. Już teraz
          odwiedź naszą stronę internetową lub skontaktuj się z nami, aby
          dowiedzieć się więcej o tym, jak możemy Ci pomóc osiągnąć
          wygląd skóry, o którym zawsze marzyłeś. Twoja przygoda z
          młodością zaczyna się teraz!
        </p>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    toggleText() {
      this.showText = !this.showText;
    },
  },
};

</script>

<style lang="scss" scoped>
@import '../styles/style.scss';

#main-stym {
  height: 100vh;
}

</style>
