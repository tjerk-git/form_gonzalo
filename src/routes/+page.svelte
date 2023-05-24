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
        ec,
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

    const handleCompleted = () => {
        completed.set(false);
    };
</script>

{#if $completed}
    <h1>Summary</h1>
    <p>
        Let’s see: {$name}, you want to do go for

        {#if $FieldSelection}
            <strong>{$FieldSelection}</strong>
        {/if}
        with the focus on:
        {#if $audioSelection}
            <strong>{$audioSelection}</strong>
        {/if}

        {#if $musicSelection}
            <strong>{$musicSelection}</strong>
        {/if}

        {#if $musicProductionSelection}
            <strong>{$musicProductionSelection}</strong>
            <br />
        {/if}. You promised to iterate <strong>{$count}</strong> times, using
        the feedback of <strong>{$stakeholder}</strong> and with targetAudience
        <strong>{$targetAudience}.</strong>
    </p>
    <p>You will ask for <strong>{$ec}'s</strong></p>
    <br />Good luck with your learning goal!
    <br /><br />
    <button class="outline" on:click={handleCompleted}>Hang on, go back!</button
    >
{:else}
    <Stepper {steps} />
{/if}
