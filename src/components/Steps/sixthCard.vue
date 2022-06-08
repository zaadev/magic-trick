<template>
  <p class="text-right">7/7</p>
  <div class="shadow-lg p-10 rounded">
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
</template>

<script>
export default {
  name: "sixthCard",
  props: {
    formValue: {
      sixthCardPicture: String,
      bio: String,
    },
  },
  emits: ["formValueChange"],
  methods: {
    uploadFile(e) {
      const file = e.target.files[0];

      if (!file) {
        return;
      }

      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.$emit("formValueChange", {
          label: "sixthCard",
          data: {
            ...this.formValue,
            sixthCardPicture: fileReader.result,
          },
        });
      };

      fileReader.readAsDataURL(file);
    },
    onChange(e) {
      this.$emit("formValueChange", {
        label: "sixthCard",
        data: {
          ...this.formValue,
          [e.target.name]: e.target.value,
        },
      });
    },
  },
};
</script>
