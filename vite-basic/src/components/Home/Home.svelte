<script>
    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js"
    
    //dollartegn foran betyder man tilgår værdien
    console.log($fridgeMessageStore)
</script>

<h3>Familiy Home</h3>

<h4>Fridge Bulletin</h4>
<p>{$fridgeMessageStore}</p>

<slot></slot>

<p>---------------------</p>
<p>|    Welcome    |</p>
<p>---------------------</p>