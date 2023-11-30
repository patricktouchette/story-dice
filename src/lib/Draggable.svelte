<script>
  export let left = 0;
  export let top = 0;
  let moving = false;
  let originalPosition = true;
  let leftOffset = 0;
  let topOffset = 0;

  function start() {
    moving = true;
  }

  function stop() {
    moving = false;
  }

  function move(e) {
    if (moving) {
      left += e.movementX;
      top += e.movementY;
    }
  }

  function moveMobile(e) {
    const touchLocation = e.targetTouches[0];
    // console.log("touchLocation", touchLocation);

    if (originalPosition) {
      leftOffset = touchLocation.pageX;
      topOffset = touchLocation.pageY;
      originalPosition = false;
    }

    if (moving) {
      left = touchLocation.pageX - leftOffset;
      top = touchLocation.pageY - topOffset;
    }
  }
</script>

<svelte:window on:mouseup={stop} on:mousemove={move} />

<div
  on:mousedown={start}
  on:touchstart={start}
  on:touchmove={moveMobile}
  on:touchend={stop}
  style="left: {left}px; top: {top}px;"
  class="draggable"
  tabindex="0"
  role="button"
>
  <slot />
</div>

<style>
  .draggable {
    user-select: none;
    position: absolute;
    cursor: grab;
    width: 100%;
    height: 100%;
  }
</style>
