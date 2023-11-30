<script>
  import Dice from "./Dice.svelte";

  export let scale = 1;
</script>

<Dice {scale}>
  <div slot="sideOne">
    <div class="dot one-1" />
  </div>
  <div slot="sideTwo">
    <div class="dot two-1" />
    <div class="dot two-2" />
  </div>
  <div slot="sideThree">
    <div class="dot three-1" />
    <div class="dot three-2" />
    <div class="dot three-3" />
  </div>
  <div slot="sideFour">
    <div class="dot four-1" />
    <div class="dot four-2" />
    <div class="dot four-3" />
    <div class="dot four-4" />
  </div>
  <div slot="sideFive">
    <div class="dot five-1" />
    <div class="dot five-2" />
    <div class="dot five-3" />
    <div class="dot five-4" />
    <div class="dot five-5" />
  </div>
  <div slot="sideSix">
    <div class="dot six-1" />
    <div class="dot six-2" />
    <div class="dot six-3" />
    <div class="dot six-4" />
    <div class="dot six-5" />
    <div class="dot six-6" />
  </div>
</Dice>

<style>
  .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    margin: -10px 5px 5px -10px;
    border-radius: 20px;
    background-color: #f25f5c;
    box-shadow: inset 2px 2px #d90429;
  }

  .two-1,
  .three-1,
  .four-1,
  .five-1,
  .six-1 {
    top: 20%;
    left: 20%;
  }

  .four-3,
  .five-3,
  .six-4 {
    top: 20%;
    left: 80%;
  }

  .one-1,
  .three-2,
  .five-5 {
    top: 50%;
    left: 50%;
  }

  .four-2,
  .five-2,
  .six-3 {
    top: 80%;
    left: 20%;
  }

  .two-2,
  .three-3,
  .four-4,
  .five-4,
  .six-6 {
    top: 80%;
    left: 80%;
  }

  .six-2 {
    top: 50%;
    left: 20%;
  }

  .six-5 {
    top: 50%;
    left: 80%;
  }
</style>
