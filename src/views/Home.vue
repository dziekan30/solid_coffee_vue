<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">

    <div class="row">
      <div class="card text-center" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
          <p class="card-text">{{ short_bio }}</p>
          <a href="./show" class="btn btn-primary">Info</a>
        </div>
      </div>

      <div class="card text-center" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
          <p class="card-text">{{ short_bio }}</p>
          <a href="#" class="btn btn-primary">Info</a>
        </div>
      </div>

      <div class="card text-center" style="width: 20rem;">
        <div class="card-body">
          <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
          <p class="card-text">{{ short_bio }}</p>
          <a href="#" class="btn btn-primary">Info</a>
        </div>
      </div>

        <div class="card text-center" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
            <p class="card-text">{{ short_bio }}</p>
            <a href="./show" class="btn btn-primary">Info</a>
          </div>
        </div>

        <div class="card text-center" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
            <p class="card-text">{{ short_bio }}</p>
            <a href="#" class="btn btn-primary">Info</a>
          </div>
        </div>

        <div class="card text-center" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
            <p class="card-text">{{ short_bio }}</p>
            <a href="#" class="btn btn-primary">Info</a>
          </div>
        </div>

        <div class="card text-center" style="width: 20rem;">
          <div class="card-body">
            <h5 class="card-title">{{ first_name }}{{" "}}{{ last_name }}</h5>
            <p class="card-text">{{ short_bio }}</p>
            <a href="./show" class="btn btn-primary">Info</a>
          </div>
        </div>

      <div class="card">
        <!-- < --><!-- div class="card-body">
          <h5 class="card-title"></h5>      
        </div> -->
        <img src="https://miro.medium.com/max/10368/1*3b6J9lKY6_aPSvmoA9jXYA.jpeg" class="card-img-top" alt="">
      </div>

    </div>

    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      message: "Bash To The Future!",
      first_name: "Rob",
      last_name: "Kondradowicz",
      short_bio: "Eats his soup. Also, he codes.",

    };
  },
  created: function() {},
  methods: {}
};
</script>