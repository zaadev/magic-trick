<template>
  <!-- <router-view name="home"></router-view>
  <router-view /> -->

  <swiper @swiper="onSwiper" @slideChange="onSlideChange">
    <!-- Guess a number -->
    <swiper-slide>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Guess a Number Between
        </p>

        <p class="text-4xl font-bold mb-9 text-center">1 to 63</p>
      </div>
    </swiper-slide>

    <!-- card-1 -->
    <swiper-slide>
      <p class="text-right">2/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
            <div>32</div>
            <div>33</div>
            <div>34</div>
            <div>35</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
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
    </swiper-slide>

    <!-- card-2  -->
    <swiper-slide>
      <p class="text-right">3/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
    </swiper-slide>

    <swiper-slide>
      <p class="text-right">4/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>44</div>
            <div>45</div>
            <div>46</div>
            <div>47</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>52</div>
            <div>53</div>
            <div>54</div>
            <div>55</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>60</div>
            <div>61</div>
            <div>62</div>
            <div>63</div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <p class="text-right">4/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
            <div>04</div>
            <div>05</div>
            <div>06</div>
            <div>07</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>20</div>
            <div>21</div>
            <div>22</div>
            <div>23</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>28</div>
            <div>29</div>
            <div>30</div>
            <div>31</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>36</div>
            <div>37</div>
            <div>38</div>
            <div>39</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>44</div>
            <div>45</div>
            <div>46</div>
            <div>47</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>52</div>
            <div>53</div>
            <div>54</div>
            <div>55</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>60</div>
            <div>61</div>
            <div>62</div>
            <div>63</div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <p class="text-right">6/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
    </swiper-slide>

    <swiper-slide>
      <p class="text-right">7/7</p>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Do you see your number?
        </p>
        <p class="font-bold mb-9 text-center">
          Swipe right for yes, left for no.
        </p>

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
            <div>01</div>
            <div>03</div>
            <div>05</div>
            <div>07</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>09</div>
            <div>11</div>
            <div>13</div>
            <div>15</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>17</div>
            <div>19</div>
            <div>21</div>
            <div>23</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>25</div>
            <div>27</div>
            <div>29</div>
            <div>31</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>33</div>
            <div>35</div>
            <div>37</div>
            <div>39</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>41</div>
            <div>43</div>
            <div>45</div>
            <div>47</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>49</div>
            <div>51</div>
            <div>53</div>
            <div>55</div>
          </div>

          <div class="grid grid-cols-4 gap-4">
            <div>57</div>
            <div>59</div>
            <div>61</div>
            <div>63</div>
          </div>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="shadow-lg p-10 rounded">
        <p class="text-5xl font-bold mb-9 text-center">
          Your Guess a Number is
        </p>

        <p class="text-4xl font-bold mb-9 text-center">
          <!-- {{ $route.params.result }} -->
          63
        </p>
      </div>
    </swiper-slide>

  </swiper>

  <!-- <div class="w-1/2 m-auto">
    <div class="text-center">      
      <button
        v-if="currentStep !== 0 && currentStep !== 7"
        v-on:click="previous"
        class="text-center p-5 text-5xl mt-4"
      >
        <i className="ion-arrow-left-c" />
      </button>
      
      <button
        v-if="currentStep !== 7"
        v-on:click="next"
        class="text-center p-5 text-5xl mt-4"
      >
        <i className="ion-arrow-right-c" />
      </button>
    </div>
  </div> -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  name: "MagicMathCards",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
  data() {
    return {
      currentStep: 0,
      finalResult: 0,
    };
  },
  methods: {
    next() {
      if (this.currentStep == 0) {
        this.$router.push({
          name: "first_step",
        });
      }

      if (this.currentStep == 1) {
        this.finalResult += 32;
        this.$router.push({
          name: "second_step",
        });
      }

      if (this.currentStep == 2) {
        this.finalResult += 8;
        this.$router.push({
          name: "third_step",
        });
      }

      if (this.currentStep == 3) {
        this.finalResult += 4;
        this.$router.push({
          name: "fourth_step",
        });
      }

      if (this.currentStep == 4) {
        this.finalResult += 2;
        this.$router.push({
          name: "fifth_step",
        });
      }

      if (this.currentStep == 5) {
        this.finalResult += 16;
        this.$router.push({
          name: "sixth_step",
        });
      }

      if (this.currentStep == 6) {
        this.finalResult += 1;
        this.$router.push({
          name: "final_result",
          params: { result: this.finalResult },
        });
      }

      this.currentStep += 1;
    },
    previous() {
      if (this.currentStep == 0) {
        this.$router.push({
          name: "first_step",
        });
      }

      if (this.currentStep == 1) {
        this.$router.push({
          name: "second_step",
        });
      }

      if (this.currentStep == 2) {
        this.$router.push({
          name: "third_step",
        });
      }

      if (this.currentStep == 3) {
        this.$router.push({
          name: "fourth_step",
        });
      }

      if (this.currentStep == 4) {
        this.$router.push({
          name: "fifth_step",
        });
      }

      if (this.currentStep == 5) {
        this.$router.push({
          name: "sixth_step",
        });
      }

      if (this.currentStep == 6) {
        this.$router.push({
          name: "final_result",
          params: { result: this.finalResult },
        });
      }

      this.currentStep += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
