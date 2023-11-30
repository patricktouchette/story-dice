<script>
  import EmojiDice from "./lib/EmojiDice.svelte";
  import RegularDice from "./lib/RegularDice.svelte";
  import diceThemesData from "./diceThemes.json";
  import { fly, fade } from "svelte/transition";
  import { bounceIn, cubicOut } from "svelte/easing";
  import { onMount } from "svelte";
  import TransitionFly from "./lib/TransitionFly.svelte";

  let numberOfDice = 6;
  let diceThemes = diceThemesData.slice(0, numberOfDice);
  let innerWidth = 10000;
  let innerHeight = 500;
  let scale = 1;

  // Set dice to a random order
  diceThemes.sort(() => 0.5 - Math.random());
  let visible = false;

  const throwDice = () => {
    visible = false;
    diceThemes.sort(() => 0.5 - Math.random());
    diceThemes = [...diceThemes];
    setTimeout(() => (visible = true), 100);
  };

  onMount(() => {
    visible = true;
    scale = innerWidth > 950 ? 1 : 0.5;
  });
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<main style={`height: ${innerHeight}px`}>
  <div class="regularDice">
    <div><RegularDice scale={0.5} /></div>
    <h1>Story Dice</h1>
    <div><RegularDice scale={0.5} /></div>
  </div>

  <button class="button-53" on:click={throwDice}>New Story</button>

  <section>
    {#key visible}
      {#if visible}
        {#each diceThemes as { faces }, index}
          <TransitionFly delay={index * 50} x={-250} y={-250}>
            {#if innerWidth > 950}
              <div
                class="emojiDice"
                in:fade={{ duration: 100, delay: index * 50 }}
                style={`position: relative; left: ${
                  index * 150 * scale + 25
                }px; top: 25px`}
              >
                <EmojiDice {faces} {scale} />
              </div>
            {:else}
              <div
                class="emojiDice"
                in:fade={{ duration: 100, delay: index * 50 }}
                style={`position: relative; left: ${
                  index > 2
                    ? (index - 3) * 125 * scale + 12
                    : index * 125 * scale + 12
                }px; top: ${index > 2 ? 125 * scale + 12 : 12}px`}
              >
                <EmojiDice {faces} {scale} />
              </div>
            {/if}
          </TransitionFly>
        {/each}
      {/if}
    {/key}
  </section>

  <h2>Your Story</h2>
  {#if innerWidth > 950}
    <p>
      Drag the dice here in any order you like to create a story. You can double
      click on a dice to re-roll it.
    </p>
  {/if}

  <section />
</main>

<style>
  main {
    /* margin-top: 3rem;  */
    overflow-x: hidden;
    overflow-y: hidden;
    padding: 2rem;
  }

  .regularDice {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  .regularDice > div {
    width: 50px;
    height: 50px;
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 950px) {
    .regularDice {
      gap: 1rem;
      margin-bottom: 3rem;
    }
  }

  h1 {
    text-align: center;
    margin: 0;
  }

  h2 {
    margin-bottom: 1.3rem;
  }
  p {
    margin-bottom: 1rem;
  }

  section {
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    background: pink;
    height: 150px;
    border-radius: 5px;
    box-shadow:
      rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  }

  .emojiDice {
    position: absolute;
    z-index: 1;
  }

  /* CSS */
  .button-53 {
    background-color: #3dd1e7;
    border: 0 solid #e5e7eb;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      system-ui,
      "Segoe UI",
      Roboto,
      "Helvetica Neue",
      Arial,
      "Noto Sans",
      sans-serif,
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1.75rem;
    padding: 0.75rem 1.65rem;
    position: relative;
    text-align: center;
    text-decoration: none #000000 solid;
    text-decoration-thickness: auto;
    width: 100%;
    max-width: 460px;
    position: relative;
    cursor: pointer;
    transform: rotate(-2deg);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    max-width: 200px;
  }

  .button-53:focus {
    outline: 0;
  }

  .button-53:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  .button-53:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    .button-53 {
      padding: 0.75rem 3rem;
      font-size: 1.25rem;
    }
  }
</style>
