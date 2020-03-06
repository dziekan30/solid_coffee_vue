<template>
    <div class="show">

      <div class="card" v-for="(student) in students">
        <div class="card-header" >
          <h1 id="name-size">{{ student.first_name }}{{" "}}{{ student.last_name }}</h1>

            <div class="card-body">
              <blockquote class="blockquote mb-0">


                <div class="right-side">
                  <h4>Email: {{ student.email }}</h4>
                  <h4>Phone Number: {{ student.phone_number }}</h4>
                  <h4>Bio: {{ student.short_bio }}</h4>
                  <h4>City and State: {{ student.city_state }}</h4>
                </div>

                <div class="left-side">
                  <h4>Linkedin: {{ student.linkedin_url }}</h4>
                  <h4>Personal Website: {{ student.personal_website_url }}</h4>
                  <h4>GitHub: {{ student.github_url }}</h4>
                </div>

              </blockquote>
            </div>
        </div>

        <div class="card" >
           <h1> Education:</h1> 
          <div class="card-body" v-for="school in schools" >
            <div class="card">
              <h2>{{school.university_name}}</h2>
              <h3> Start Date: {{school.start_date}}{{" "}} || End Date: {{school.end_date}}</h3>
              <h3>{{school.degree}}</h3>
              <h3>{{school.details}}</h3>
            </div>
          </div>
        </div>

        <div class="card">
            <h1>Skills</h1>
          <div class="card" >
            <div class="card-body" v-for="skill in skills">
              <h5>{{skill.skill_name}}</h5>
            </div>
          </div>
        </div>

          <div class="card">
            <div class="card-body" v-for="project in projects">
              <h5>Projects</h5>
              <h5>{{project.name}}</h5>
              <h5>{{project.description}}</h5>
              <h5>{{project.url}}</h5>
            </div>
          </div>

          <div class="card">
            <div class="card-body" v-for="experience in experiences">
              <h3>Experiences</h3>
              <h5>{{experience.company_name}}</h5>
              <h5>{{experience.start_date}}</h5>
              <h5>{{experience.end_date}}</h5>
              <h5>{{experience.job_title}}</h5>
              <h5>{{experience.current}}</h5>
              <h5>{{experience.details}}</h5>
            </div>
          </div>

        </div>
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
      id: 1,
      schools: "",
      skills: "",
      projects: "",
      experiences: "",
       students: [ {
                  "first_name": "",
                  "last_name": "",
                  "short_bio": "" ,
                  "educations": [{
                                  "start_date": "",
                                  "end_date": "",
                                  "university_name": "",
                                  "degree": "",
                                  "details": ""
                                }],


                  } ],

                  
    };
  },
  created: function() {
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.students = response.data;
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.schools = response.data[0].educations;
        // console.log(response.data[0].educations);
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.skills = response.data[0].skills;
        // console.log(response.data[0].educations);
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.projects = response.data[0].projects;
        // console.log(response.data[0].educations);
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.experiences = response.data[0].experiences;
        // console.log(response.data[0].educations);
      });

  },
  methods: {}
};
</script>