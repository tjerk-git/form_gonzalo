<script>
    import { stakeholder, targetAudience } from "../lib/stores/form.js";
    import { createStepController } from "@efstajas/svelte-stepper";
    import { count } from "../lib/stores/form.js";

    import NumberInput from "./numberInput.svelte";

    const stepController = createStepController();

    function handleInput(event) {
        stakeholder.set(event.target.value);
    }

    function handleInputAudience(event) {
        targetAudience.set(event.target.value);
    }
</script>

<h1>Who will be your stakeholders?</h1>
<p>
    if this is for a client in an assignment then they will be the main
    stakeholder. If it’s a personal project it will be yourself and a chosen
    teacher (with relevant knowledge in the area)
</p>

<input
    bind:value={$stakeholder}
    on:keydown={handleInput}
    placeholder="Your stakeholder"
/>
<input
    bind:value={$targetAudience}
    on:keydown={handleInputAudience}
    placeholder="Your target audience"
/>

<p>Remember to iterate, as a rule of thumb 3 iterations is a minimum.</p>
<p>But what is a formal iteration?</p>
<p>
    A formal iteration is creating a version and showing it to your stakeholders
    for feedback and then work on a new iteration using the feedback given.
</p>
<p>
    Keep in mind that the shape of iterations should be agreed beforehand with
    the stakeholder.
</p>
<p>
    (Plus: testing your song/track with your target audience is also very
    important)
</p>

<strong
    >I will iterate {$count} times <br /><br />
    <NumberInput />
</strong>

<div class="buttonContainer">
    <button on:click={stepController.previousStep}>Previous</button>
    <button on:click={stepController.nextStep}>Next</button>
</div>

<style>
    .buttonContainer {
        display: flex;
        text-align: center;
        width: 100%;
    }
    .buttonContainer :first-child {
        margin-right: 20px;
    }
</style>
