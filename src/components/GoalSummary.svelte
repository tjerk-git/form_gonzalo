<script>
    import {
        FieldSelection,
        musicProductionSelection,
    } from "../lib/stores/form.js";

    import { createStepController } from "@efstajas/svelte-stepper";

    const stepController = createStepController();

    const AudioDescription = `Think about what is the main solution you will be solving with this project.
Mixing and mastering the song of a band could be; “ I will mix and master a song, so that everything is very clear and makes the band sound very proffessional”
If you will be mixing an existing multitrack of a known song as practice, there needs to be some kind of innovation, “I will mix the song Bohemian Raphsody so that it sounds totally modern”
It it’s “I will act as the engineer of a live event” could be: “ so that everything sounds as close as possible as the original recording of the band” or that everything sounds clear.
If it’s something more complicated like a VST plugin could be many things like: I will create a VST plugin that makes things sound compressed, with reverb, Lofi, etc. Or a VST EQ that is very easy to use.
`;

    const MusicDescription = "";
    const MusicProductionDescription = "";

    const summary = "";

    const handleClick = (name) => {
        FieldSelection.set(name);
    };
</script>

<h1>
    <br />{#if $FieldSelection}
        You selected: {$FieldSelection}
    {/if}
</h1>

<p>
    {#if $FieldSelection == "Audio"}
        {AudioDescription}
    {/if}
    {#if $FieldSelection == "Music"}
        {MusicDescription}
    {/if}
    {#if $FieldSelection == "Music Production"}
        {MusicProductionDescription}
    {/if}
</p>

<textara {summary} />

<br />

<button on:click={stepController.nextStep}>Next</button>
<button on:click={stepController.previousStep}>Previous</button>

<style>
</style>
