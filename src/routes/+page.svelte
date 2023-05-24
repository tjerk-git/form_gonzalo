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
        summary,
        targetAudience,
        stakeholder,
        count,
    } from "../lib/stores/form.js";

    import { Stepper, makeStep } from "@efstajas/svelte-stepper";
    import StakeHolders from "../components/StakeHolders.svelte";

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
        makeStep({
            component: StakeHolders,
            props: undefined,
        }),
    ];
</script>

<Stepper {steps} />

<h1>Results</h1>

{#if $name}
    <p>Your name is {$name}</p>
{/if}

{#if $audioSelection}
    <p>You want to {$audioSelection}</p>
{/if}

{#if $musicSelection}
    <p>You want to {$musicSelection}</p>
{/if}

{#if $musicProductionSelection}
    <p>You want to {$musicProductionSelection}</p>
{/if}

{#if $FieldSelection}
    <p>You selected {$FieldSelection}</p>
{/if}

{#if $summary}
    <p>You said: {$summary}</p>
{/if}

{#if $stakeholder}
    <p>Your stakeholders are: {$stakeholder}</p>
{/if}

{#if $targetAudience}
    <p>Your target audience is: {$targetAudience}</p>
{/if}

{#if $count}
    <p>Your iteration count is {$count}</p>
{/if}
