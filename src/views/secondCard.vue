<template>  
  <div v-touch:swipe="onSwipeItem()" class="shadow-lg p-10 rounded">
    <p class="text-right">3/7</p>    
    <p class="text-5xl font-bold mb-9 text-center">Do you see your number?</p>
    <p class="font-bold mb-9 text-center">Swipe right for yes, left for no.</p>

    <div
      class="
        text-center
        w-full
        text-2xl
        p-2
        border-2
        rounded
        border-green-300
        mt-4
        mb-4
      "
    >
      <div class="grid grid-cols-4 gap-4">
        <div>08</div>
        <div>09</div>
        <div>10</div>
        <div>11</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>24</div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>28</div>
        <div>29</div>
        <div>30</div>
        <div>31</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>40</div>
        <div>41</div>
        <div>42</div>
        <div>43</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>44</div>
        <div>45</div>
        <div>46</div>
        <div>47</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>56</div>
        <div>57</div>
        <div>58</div>
        <div>59</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>60</div>
        <div>61</div>
        <div>62</div>
        <div>63</div>
      </div>
    </div>
  </div>
</template>


<script>
import router from "@/router";

export default {
  name: "secondCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult    = localStorage.getItem('finalResult');
        const nextResult        = parseInt(previousResult) + 8;      
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem('finalResult', nextResult);
          router.push({
            name: "third_step",            
          });
        }

        if (direction == "left") {
          router.push({
            name: "third_step",            
          });
        }
      };
    },
  },
};
</script>