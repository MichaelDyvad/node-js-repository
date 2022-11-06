<script>
    import Date from "./component/Date.svelte";

    const name = "Anders";
    const age = 24
</script>

<h2 id="page-title">First svelte project</h2>
<div>More content for {name} {age}</div>
<h3 id="age">Anders is {age}</h3>
<Date></Date>


<style>
  #page-title{
    color: blue
  }
</style>