<script lang="ts">
    import Name from "../components/Name.svelte";
    import Goal from "../components/GoalSelection.svelte";
    import Field from "../components/FieldOrientation.svelte";
    import GoalSummary from "../components/GoalSummary.svelte";

    import {
        name,
        audioSelection,
        musicSelection,
        musicProductionSelection,
        FieldSelection,
        completed,
    } from "../lib/stores/form.js";

    import { Stepper, makeStep } from "@efstajas/svelte-stepper";

    const steps = [
        makeStep({
            component: Name,
            props: undefined,
        }),
        makeStep({
            component: Field,
            props: undefined,
        }),
        makeStep({
            component: Goal,
            props: undefined,
        }),
        makeStep({
            component: GoalSummary,
            props: undefined,
        }),
    ];
</script>

<Stepper {steps} />

{#if $completed === true}
    <h1>Results</h1>

    {#if $name}
        <p>Your name is {$name}</p>
    {/if}

    {#if $audioSelection}
        <p>You selected {$audioSelection}</p>
    {/if}

    {#if $musicSelection}
        <p>You selected {$musicSelection}</p>
    {/if}

    {#if $musicProductionSelection}
        <p>You selected {$musicProductionSelection}</p>
    {/if}

    {#if $FieldSelection}
        <p>You selected {$FieldSelection}</p>
    {/if}
{/if}
