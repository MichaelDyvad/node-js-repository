<script>
    let date = new Date();
    let dates = [date];
    function updateDate(){
        date = new Date();
        dates.push(date)
        dates = dates;
    }
</script>

<div>Current Date: {date}</div>

<button on:click={updateDate}>Update Date</button>

<div>{JSON.stringify(dates)}</div>