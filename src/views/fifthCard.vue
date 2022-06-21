<template>
  <div v-touch:swipe="onSwipeItem()" class="shadow-lg p-10 rounded">
    <p class="text-right">6/7</p>
    <p v-show="false" id="FourthCardResult">{{ $route.params.result }}</p>
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
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>20</div>
        <div>21</div>
        <div>22</div>
        <div>23</div>
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
        <div>48</div>
        <div>49</div>
        <div>50</div>
        <div>51</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>52</div>
        <div>53</div>
        <div>54</div>
        <div>55</div>
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
  name: "fifthCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult    = document.getElementById('FourthCardResult').innerText;
        const nextResult        = parseInt(previousResult) + 16;
        console.log("Swiped item in direction ", direction);

        // if user swipe right
        if (direction == "right") {
          router.push({
            name: "sixth_step",
            params: { result: nextResult },
          });
        }

        // if user swipe left
        if (direction == "left") {
          router.push({
            name: "sixth_step",
            params: { result: previousResult },
          });
        }
      };
    },
  },
};
</script>