<template>
    <div class="modal-image" v-if="showModal">
      <div class="modal-content">
        <button id="closeModal" @click="closeModal">
          <img src="../assetsPng/closeicon.png">
        </button>
        <img src="../assetsPng/modalzapro.png">

      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        showModal: false,
      };
    },
    mounted() {
      this.showModal = true;
    },
    methods: {
      closeModal() {
        this.showModal = false;
      },
    },
  };
  </script>

  <style>
  .modal-image {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Półprzezroczyste tło */
    z-index: 1000; /* Wysoki z-index, aby modal był nad innymi elementami */
    display: flex; /* Użyj Flexboxa dla wyśrodkowania */
    align-items: center;
    justify-content: center;
  }

  .modal-content {
    max-width: 500px; /* Dostosuj maksymalną szerokość */
  }
  #closeModal {
    position: absolute;
    top: 10%; /* Adjust the offset from the top */
    right: 20%; /* Adjust the offset from the right */
    background: none; /* Remove any default background */
    border: none; /* Remove any default border */
    cursor: pointer; /* Indicate that it's clickable */
  }
  </style>
./ImageModal.vue