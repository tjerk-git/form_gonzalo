<script>
    import { stakeholder, targetAudience } from "../lib/stores/form.js";
    import { createStepController } from "@efstajas/svelte-stepper";
    import { count, ec, completed } from "../lib/stores/form.js";
    import Select from "svelte-select";
    import NumberInput from "./numberInput.svelte";

    const stepController = createStepController();

    function handleInput(event) {
        stakeholder.set(event.target.value);
    }

    function handleInputAudience(event) {
        targetAudience.set(event.target.value);
    }

    let simple = ["3EC", "6EC", "9EC", "12EC"];

    let value = "3EC";

    $: {
        ec.set(value.label);
    }

    const updateCompleted = () => {
        completed.set(true);
    };
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
<h3>Iterations</h3>
<p>Remember to iterate, as a rule of thumb 3 iterations is a minimum.</p>
<p>But what is a formal iteration?</p>
<p>
    A formal iteration is creating a version and showing it to your stakeholders
    for feedback and then work on a new iteration using the feedback given. Keep
    in mind that the shape of iterations should be agreed beforehand with the
    stakeholder. (Plus: testing your song/track with your target audience is
    also very important)
</p>

<strong
    >I will iterate {$count} times <br /><br />
    <NumberInput />
</strong>

<h3>How many EC?</h3>

<p>
    Depending on the depth, your learning goal could mean more ECs, but as a
    general rule:
</p>

<ul>
    <li>Producing a Beat: 3EC</li>
    <li>Mixing and mastering one song: 3EC</li>
    <li>Writing a song: 3EC</li>
    <span>And the same for scaling it up!</span>
    <li>Producing an EP: 9EC</li>
    <li>Mixing an EP: 9EC</li>
    <li>I will produce a film score: 9EC</li>
    <li>I will mix the post production of a documentary: 9EC</li>
    <li>I will create a VST plugin: 12 EC</li>
</ul>

<Select items={simple} bind:value />

{#if value}
    <p>
        I am going for {value.label}'s
    </p>
{/if}

<div class="buttonContainer">
    <button on:click={stepController.previousStep}>Previous</button>
    <button on:click={updateCompleted}>Next</button>
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
