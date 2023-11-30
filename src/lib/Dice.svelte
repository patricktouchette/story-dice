<script>
  import { onMount } from "svelte";
  import Draggable from "./Draggable.svelte";

  export let rollOnMount = true;

  let diceOne = 0;
  let showSame = false;
  export let scale = 1;

  let scaleStyle = null;
  if (scale !== 1) {
    scaleStyle = `transform: scale(${scale}) translate(-${scale * 100}%,-${
      scale * 100
    }%);`;
  }

  function rollDice() {
    let lastRoll = diceOne;
    diceOne = Math.floor(Math.random() * 6 + 1);
    // diceOne = 6;

    if (diceOne === lastRoll && !showSame) {
      showSame = true;
    } else {
      showSame = false;
    }
  }

  onMount(() => {
    rollDice();
    if (rollOnMount) setTimeout(rollDice, 5);
  });
</script>

<Draggable>
  <div class="dice-component" style={scaleStyle}>
    <div
      class="container"
      on:dblclick={rollDice}
      on:keypress={rollDice}
      role="button"
      tabindex="0"
    >
      <div id="dice1" class="dice dice-one show-{diceOne}" class:showSame>
        <div id="dice-one-side-one" class="side one">
          <slot name="sideOne" />
        </div>
        <div id="dice-one-side-two" class="side two">
          <slot name="sideTwo" />
        </div>
        <div id="dice-one-side-three" class="side three">
          <slot name="sideThree" />
        </div>
        <div id="dice-one-side-four" class="side four">
          <slot name="sideFour" />
        </div>
        <div id="dice-one-side-five" class="side five">
          <slot name="sideFive" />
        </div>
        <div id="dice-one-side-six" class="side six">
          <slot name="sideSix" />
        </div>
      </div>
    </div>
  </div>
</Draggable>

<style>
  .dice-component {
    width: 100px;
    height: 100px;
    transition: transform 0.3s;
    /* z-index: 1; */
  }

  .dice-component:hover {
    transform: scale(1.3);
  }

  .dice {
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transition: transform 1s;
  }

  .dice-one {
    position: absolute;
  }

  .side {
    position: absolute;
    background-color: #fff;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    text-align: center;
    line-height: 2em;
    user-select: none;
  }

  /* Face 1 transforms */
  .side:nth-child(1) {
    transform: translateZ(3.1em);
  }
  .show-1 {
    transform: rotateX(720deg) rotateZ(-720deg);
  }
  .show-1:hover {
    transform: rotateX(730deg) rotateZ(-725deg);
  }
  .show-1.showSame {
    transform: rotateX(0deg) rotateZ(-0deg);
  }
  .show-1.showSame:hover {
    transform: rotateX(10deg) rotateZ(-5deg);
  }

  /* Face 2 transforms */
  .side:nth-child(2) {
    transform: rotateX(-90deg) translateZ(3.1em);
  }
  .show-2 {
    transform: rotateX(450deg) rotateZ(-720deg);
  }
  .show-2:hover {
    transform: rotateX(460deg) rotateZ(-725deg);
  }
  .show-2.showSame {
    transform: rotateX(90deg) rotateZ(-0deg);
  }
  .show-2.showSame:hover {
    transform: rotateX(80deg) rotateZ(-10deg);
  }

  /* Face 3 transforms */
  .side:nth-child(3) {
    transform: rotateY(90deg) translateZ(3.1em);
  }
  .show-3 {
    transform: rotateY(-450deg) rotateZ(-1440deg);
  }
  .show-3:hover {
    transform: rotateY(-440deg) rotateZ(-1450deg);
  }
  .show-3.showSame {
    transform: rotateY(90deg) rotateZ(-180deg);
  }
  .show-3.showSame:hover {
    transform: rotateY(100deg) rotateZ(-170deg);
  }

  /* Face 4 transforms */
  .side:nth-child(4) {
    transform: rotateY(-90deg) translateZ(3.1em);
  }
  .show-4 {
    transform: rotateY(810deg) rotateZ(720deg);
  }
  .show-4:hover {
    transform: rotateY(820deg) rotateZ(725deg);
  }
  .show-4.showSame {
    transform: rotateY(90deg) rotateZ(0deg);
  }
  .show-4.showSame:hover {
    transform: rotateY(100deg) rotateZ(-5deg);
  }

  /* Face 5 transforms */
  .side:nth-child(5) {
    transform: rotateX(90deg) translateZ(3.1em);
  }
  .show-5 {
    transform: rotateX(-810deg) rotateZ(-1080deg);
  }
  .show-5:hover {
    transform: rotateX(-820deg) rotateZ(-1070deg);
  }
  .show-5.showSame {
    transform: rotateX(-90deg) rotateZ(-0deg);
  }
  .show-5.showSame:hover {
    transform: rotateX(-80deg) rotateZ(-10deg);
  }

  /* Face 6 transforms */
  .side:nth-child(6) {
    transform: rotateY(-180deg) translateZ(3.1em);
  }
  .show-6 {
    transform: rotateX(-900deg) rotateZ(900deg);
  }
  .show-6:hover {
    transform: rotateX(-910deg) rotateZ(910deg);
  }
  .show-6.showSame {
    transform: rotateX(-180deg) rotateZ(180deg);
  }
  .show-6.showSame:hover {
    transform: rotateX(-190deg) rotateZ(170deg);
  }
</style>
