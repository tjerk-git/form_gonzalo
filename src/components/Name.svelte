<script lang="ts">
    import { createStepController } from "@efstajas/svelte-stepper";
    import { name } from "../lib/stores/form.js";

    function handleInput(event) {
        name.set(event.target.value);
    }

    const stepController = createStepController();
</script>

<br />
<p>Welcome to the awesome sound learning goal generator helper thing!</p>
<h3>Please enter your name</h3>

<input bind:value={$name} on:keydown={handleInput} />

<button on:click={stepController.nextStep}>Next</button>
