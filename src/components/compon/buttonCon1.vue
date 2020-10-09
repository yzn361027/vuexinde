<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: "button-con1"
    }
</script>

<style scoped>
  .button{
    width:96%;
    height:3rem;
    background: var(--backgroundColor);
    border-radius:.4rem;
    border:0;
    margin:1rem auto;
    color:#ffffff;
    display: block;

  }

</style>
