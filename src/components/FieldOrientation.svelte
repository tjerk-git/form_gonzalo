<script>
    import { FieldSelection } from "../lib/stores/form.js";
    import { createStepController } from "@efstajas/svelte-stepper";

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

    const handleClick = (name) => {
        FieldSelection.set(name);
    };
</script>

<h1>
    Which field are you intrested in? <br />{#if $FieldSelection}
        You selected: {$FieldSelection}
    {/if}
</h1>

<div class="column">
    <h2>Audio</h2>
    <ul>
        {#each audioOptions as option}
            <li>{option}</li>
        {/each}
    </ul>

    <button on:click={() => handleClick("Audio")}>Pick</button>
</div>

<div class="column">
    <h2>Music</h2>
    <ul>
        {#each musicOptions as option}
            <li>{option}</li>
        {/each}
    </ul>

    <button on:click={() => handleClick("Music")}>Pick</button>
</div>

<div class="column">
    <h2>Music Production</h2>
    <ul>
        {#each musicProductionOptions as option}
            <li>{option}</li>
        {/each}
    </ul>

    <button on:click={() => handleClick("Music Production")}>Pick</button>
</div>

<br />

<button on:click={stepController.nextStep}>Next</button>
<button on:click={stepController.previousStep}>Previous</button>

<style>
    .column {
        display: inline-block;
        vertical-align: top;
        width: 30%;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid #031f68;
        margin-left: 10px;
    }

    label {
        display: block;
    }
</style>
