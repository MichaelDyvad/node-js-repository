<script>
  let name = "michael"

  let src = '/tutorial/image.gif';

  import Nested from "./Nested.svelte";

  let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<h1>Hello {name.toLocaleUpperCase()}</h1>

<img {src} alt="A {name} dances.">

<p>This is a paragraph.</p>

<Nested/>

<p>{@html string}</p>

<style>
  p{
    color: purple;
    font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
  }
</style>