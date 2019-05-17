<template>
           <div id="countDown">
        <h1>Due Date</h1>
        <div class="content">
            <p>This is how long we have until our little one is due to make a grand entrance into the world! When do you think Baby will actually arrive?!</p>
                <hr/>
            <p id="demo"></p>
                <hr />
            <p><a href="#panels">Home</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        //Countdown
     countDownDate = new Date("Aug, 21 2019 0:00:00").getTime(),

    // Update the count down every 1 second
     x = setInterval(function() {
    
      // Get todays date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    }
</script>

<style lang="scss" scoped>

</style>