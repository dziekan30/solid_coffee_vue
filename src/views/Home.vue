<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid bg-dark card text-white" >
        <h1 class="display-4 ">{{ message }}</h1>
    </div>

    <div class="container" >

      <div  class="card-index mb-3" v-for="(student, index) in students" v-bind:style="{'background-color': colorPicker[index]}">
        <div class="card-header" >{{ student.first_name }}{{" "}}{{ student.last_name }}</div>
        <div class="card-body">
          <p></p>
          <p class="card-text">{{student.short_bio}}</p>
          <a href="/show" class="btn btn-primary ">Resume Info</a>
        </div>
      </div>
    </div>

     <!--  <div class="card">
        <img src="https://miro.medium.com/max/10368/1*3b6J9lKY6_aPSvmoA9jXYA.jpeg" class="card-img-top" alt="">
      </div> -->

    </div>
  </div>
</template>

<style>
</style>

<script>
  var axios = require("axios")

export default {
  data: function() {
    return {
      message: "Bash To The Future!",

      students: [ {
                  "first_name": "",
                  "last_name": "",
                  "short_bio": "" 
                },
                {
                  "first_name": "",
                  "last_name": "",
                  "short_bio": "" 
                } ],
                  
                
      colorPicker: [ "#009999", "#003333", "#006666", "#00cccc",
       "#006699", "#003366", "#0099cc","#003399", "#0066cc", "#000033",
        "#000066", "#0033cc", "#0000cc", "#3300cc", "#3300ff", "#003fff", "#00beff"]
    };
  },
  created: function() {
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
       this.students = response.data;
      });
  },
  methods: {}
};
</script>