<script>
  import { fly, fade } from "svelte/transition";
  import { bounceIn, cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  let visible = false;
  export let x = 0;
  export let y = 0;
  export let duration = 1000;
  export let delay = 0;

  onMount(() => {
    visible = true;
  });
</script>

<!-- <button on:click={() => (visible = !visible)}>Toggle</button> -->

{#if visible}
  <div in:fly={{ x, y, duration, delay }}><slot /></div>
{/if}

<style>
</style>
