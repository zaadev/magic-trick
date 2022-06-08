<template>
  <p class="text-right">5/7</p>
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
        <div>02</div>
        <div>03</div>
        <div>06</div>
        <div>07</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>10</div>
        <div>11</div>
        <div>14</div>
        <div>15</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>18</div>
        <div>19</div>
        <div>22</div>
        <div>23</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>26</div>
        <div>27</div>
        <div>30</div>
        <div>31</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>34</div>
        <div>35</div>
        <div>38</div>
        <div>39</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>42</div>
        <div>43</div>
        <div>46</div>
        <div>47</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>50</div>
        <div>51</div>
        <div>54</div>
        <div>55</div>
      </div>

      <div class="grid grid-cols-4 gap-4">
        <div>58</div>
        <div>59</div>
        <div>62</div>
        <div>63</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fourthCard",
  props: {
    formValue: {
      fourthCardPicture: String,
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
          label: "fourthCard",
          data: {
            ...this.formValue,
            fourthCardPicture: fileReader.result,
          },
        });
      };

      fileReader.readAsDataURL(file);
    },
    onChange(e) {
      this.$emit("formValueChange", {
        label: "fourthCard",
        data: {
          ...this.formValue,
          [e.target.name]: e.target.value,
        },
      });
    },
  },
};
</script>
