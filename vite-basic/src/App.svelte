<script>
    import Parent from "./components/Parent/Parent.svelte";
    import Home from "./components/Home/Home.svelte";
    import Pets from "./components/Pets/Pets.svelte";

    const parents = ["Kurt", "Katja"]
    const children = [
        {
            name: "Flemming",
            blacksheep: "ultra-blacksheep"
        },
        {
            name: "Erik",
            blacksheep: "medium-blacksheep",
            brightkid: true

        },
        {
            name: "Ingrid",
            brightkid: false
        },
    ];

    const pets = [
        {type: "Panda", "name": "Poh"},
        {type: "Dinosaur", "name": "Littlefoot"}
    ]

</script>

<main>
    <Home>
        <Parent name={parents[0]} children={children} />
        <Parent name={parents[1]} children={children} />
    </Home>
</main>

<style>
</style>
