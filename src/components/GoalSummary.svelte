<script>
    import { FieldSelection, summary } from "../lib/stores/form.js";

    import { createStepController } from "@efstajas/svelte-stepper";

    const stepController = createStepController();

    const AudioDescription = `<p><strong>Main Solution:</strong> Mixing and Mastering</p>
<p><em>Solution Description:</em> I will mix and master a song, so that everything is very clear and makes the band sound very professional.</p>

<p>If you will be mixing an existing multitrack of a known song as practice, there needs to be some kind of innovation.</p>
<p><em>Innovation Description:</em> I will mix the song "Bohemian Rhapsody" so that it sounds totally modern.</p>

<p>If the solution involves acting as the engineer of a live event, the objective could be:</p>
<p><em>Objective:</em> Ensure that everything sounds as close as possible to the original recording of the band or that everything sounds clear.</p>

<p>If the project involves creating a VST plugin, there could be various objectives:</p>
<ul>
  <li><em>Objective 1:</em> Create a VST plugin that makes things sound compressed, with reverb, Lo-Fi, etc.</li>
  <li><em>Objective 2:</em> Design a VST EQ that is very easy to use.</li>
</ul>`;

    const MusicDescription = `<p><strong>Main Problem:</strong> Providing a Solution in the Field of Art</p>
<p>When it comes to art, identifying the main problem can be challenging, but let's give it a try...</p>

<p>If the solution involves creating a song, consider the following possibilities:</p>
<ol>
  <li><em>Solution 1:</em> Create a very danceable song.</li>
  <li><em>Solution 2:</em> Create a song that evokes happiness and uplifts people.</li>
  <li><em>Solution 3:</em> Create a song that combines the styles of two different artists to provide an interesting listening experience.</li>
  <li><em>Solution 4:</em> Create a song that raises awareness about a specific subject.</li>
</ol>

<p>If the solution involves working on an existing song, specifically focusing on arrangement or harmonization, consider these options:</p>
<ol>
  <li><em>Solution 1:</em> Create a string quartet arrangement that enhances the emotional impact of the song.</li>
  <li><em>Solution 2:</em> Create a horn arrangement that adds a grand and expansive quality to the song.</li>
</ol>
`;
    const MusicProductionDescription = `<p>If you will be producing a song or an EP, the main goal could be:</p>
<ul>
  <li><em>Goal 1:</em> Create an EP that truly captures me as an artist.</li>
  <li><em>Goal 2:</em> Produce a dance track that evokes a sense of camaraderie among listeners.</li>
  <li><em>Goal 3:</em> Produce a hip-hop track that elicits euphoria in people.</li>
</ul>

<p>If you're creating the score for a film, the goal could be:</p>
<ul>
  <li><em>Goal:</em> Produce a film score that effectively supports the overall feel and image of the film.</li>
</ul>
`;

    function handleInput(event) {
        summary.set(event.target.value);
    }

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
        {@html AudioDescription}
    {/if}
    {#if $FieldSelection == "Music"}
        {@html MusicDescription}
    {/if}
    {#if $FieldSelection == "Music Production"}
        {@html MusicProductionDescription}
    {/if}
</p>

Please fill in your learning goal:
<textarea bind:value={$summary} on:keydown={handleInput} />

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
