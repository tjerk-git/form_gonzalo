<script lang="ts">
    import { createStepController } from "@efstajas/svelte-stepper";
    import { name } from "../lib/stores/form.js";

    function handleInput(event) {
        name.set(event.target.value);
    }

    const stepController = createStepController();
</script>

<h1>Please enter your name</h1>

<input bind:value={$name} on:keydown={handleInput} />

<button on:click={stepController.nextStep}>Next</button>
