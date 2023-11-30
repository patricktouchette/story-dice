<script>
  import { onMount } from "svelte";

  let emojis = [];

  const categories = [
    // Example categories
    ["🏰", "📜", "🌧️", "🐉", "😄", "🚀", "🕰️", "🌊", "🤔", "😠"],
    ["🍌", "🤣", "🤪", "🍔", "🙈"],
    ["🍌", "🤣", "🤪", "🍔", "🙈"],
    ["😜", "🎈", "🌈", "☔", "🌋"],
  ];

  function rollDice() {
    emojis = categories.map(
      (category) => category[Math.floor(Math.random() * category.length)]
    );
  }

  onMount(() => {
    rollDice();
  });
</script>

<main>
  <h1>Dice Story Game</h1>
  <div class="dice-container">
    {#each emojis as emoji, index}
      <div class="dice-roll" style="animation-delay: {index * 0.1}s">
        <div class="dice" style="animation-delay: {index * 0.1}s">{emoji}</div>
      </div>
    {/each}
  </div>
  <button on:click={rollDice}>Roll Dice</button>
</main>

<style>
  .dice-container {
    display: flex;
  }

  .dice-roll {
    animation: roll 0.5s ease-out;
  }

  .dice {
    /* Add your dice styling */
    margin: 20px;
    padding: 10px;
    font-size: 24px;
    border: 2px solid #333;
    border-radius: 8px;
    animation: spin 1s linear;
  }

  @keyframes roll {
    0% {
      transform: translateY(-50%) scale(0) translateX(-5px);
    }
    50% {
      transform: translateY(50%) scale(1.2) translateX(5px);
    }
    100% {
      transform: translateY(0) scale(1) translateX(-2px);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
