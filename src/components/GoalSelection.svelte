<script lang="ts">
    import { createStepController } from "@efstajas/svelte-stepper";

    import {
        audioSelection,
        musicSelection,
        musicProductionSelection,
        FieldSelection,
    } from "../lib/stores/form.js";

    const stepController = createStepController();

    const audioOptions = [
        "Mix & Master a song",
        "Mix the postproduction of a Film/Documentary",
        "Manage the live sound of an event",
        "Act as the recording engineer for a Live session(Music)",
        "Act as the Live engineer for a Live event(Music)",
        "Program my own VST Plugin",
        "Create my own Sample Library",
        "Create a library of Convolution Impulse responses",
        "Create a musical instrument",
        "Build a synthesiser",
        "Create a vocal chain",
    ];

    const musicOptions = [
        "Compose/Write a song",
        "Write lyrics for a song",
        "Harmonise and arrange a string quartet/horns/choir",
        "Create an arrangement",
        "Innovate in our musical system",
    ];

    const musicProductionOptions = [
        "Create a new musical genre",
        "Produce an EP",
        "Produce a Podcast",
        "Produce a soundscape",
        "Produce a film/documentary score",
        "Produce Foley Sounds for a Film/Documentary",
        "Produce a song",
        "Produce a Beat/Track/Instrumental",
    ];
</script>

<h1>Select your specification for {$FieldSelection}</h1>

{#if $FieldSelection == "Audio"}
    {#each audioOptions as option}
        <label>
            <input type="radio" bind:group={$audioSelection} value={option} />
            {option}
        </label>
    {/each}
{/if}

{#if $FieldSelection == "Music"}
    {#each musicOptions as option}
        <label>
            <input type="radio" bind:group={$musicSelection} value={option} />
            {option}
        </label>
    {/each}
{/if}

{#if $FieldSelection == "Music Production"}
    {#each musicProductionOptions as option}
        <label>
            <input
                type="radio"
                bind:group={$musicProductionSelection}
                value={option}
            />
            {option}
        </label>
    {/each}
{/if}

<br />

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
