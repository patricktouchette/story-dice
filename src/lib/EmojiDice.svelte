<script>
  import Dice from "./Dice.svelte";

  export let faces = ["🏃‍♂️", "🤔", "🎭", "🚀", "🛌", "🎉"];
  export let scale = 1;
</script>

<Dice {scale}>
  <div slot="sideOne">
    <p>{faces[0]}</p>
  </div>
  <div slot="sideTwo">
    <p>{faces[1]}</p>
  </div>
  <div slot="sideThree">
    <p>{faces[2]}</p>
  </div>
  <div slot="sideFour">
    <p>{faces[3]}</p>
  </div>
  <div slot="sideFive">
    <p>{faces[4]}</p>
  </div>
  <div slot="sideSix">
    <p>{faces[5]}</p>
  </div>
</Dice>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  p {
    font-size: 50px;
    line-height: 50px;
    margin: 0 0 0 0;
  }
</style>
