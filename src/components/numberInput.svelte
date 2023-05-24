<script>
    import { count } from "../lib/stores/form.js";

    let number = 1;

    const increment = () => {
        number = $count + 1;
        count.set(number);
    };

    const decrement = () => {
        number = $count - 1;
        count.set(number);
    };

    $: {
        if (number < 0) {
            alert("Really? Gonzalo is mad now.");
        }
    }
</script>

<div class="buttonContainer">
    <button class="outline" on:click={decrement}>-</button>
    <span>{$count}</span>
    <button class="outline" on:click={increment}>+</button>
</div>

<style>
    .buttonContainer {
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: baseline;
    }

    span {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
