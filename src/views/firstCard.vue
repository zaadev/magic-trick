<template>
  <div v-touch:swipe="onSwipeItem()" class="shadow-lg p-10 rounded">
    <p class="text-right">2/7</p>
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
</template>

<script>
import router from "@/router";

export default {
  name: "guessNumber",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          router.push({
            name: "second_step",
            params: { result: 32 },
          });
        }

        if (direction == "left") {
          router.push({
            name: "second_step",
            params: { result: 0 },
          });
        }
      };
    },
  },
};
</script>

