<template>
    <div class="show">
      <div class="card">
        <div class="card-header">
          <h1>{{ first_name }}{{" "}}{{ last_name }}</h1>
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <h4>{{ phone_number }}</h4>
            <h4>{{ email }}</h4>
            <h4>{{ short_bio }}</h4>
            <h4>{{ linkedin_url }}</h4>
            <h4>{{ personal_website_url }}</h4>
            <h4>{{ github_url }}</h4>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
     
    <!--   <h1>{{ id }}</h1> -->

      <h3>{{ city_state }}</h3>
    </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      id: 1,
      first_name: "Rob",
      last_name: "Kondradowicz",
      email: "rob@gamil.com",
      phone_number: "708-777-7689",
      short_bio: "Eats his soup. Also, he codes.",
      linkedin_url: "https://www.linkedin.com/in/robkondratowicz",
      personal_website_url: "https://www.linkedin.com/in/robkondratowicz",
      github_url: "https://github.com/EatYourSoup7",
      city_state: "Chicago, IL"
    };
  },
  created: function() {},
  methods: {}
};
</script>