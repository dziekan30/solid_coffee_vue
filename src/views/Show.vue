<template>
    <div class="show">

      <div class="card" v-for="(student) in students">
        <div class="card-header" >
          <h1 id="name-size">{{ student.first_name }}{{" "}}{{ student.last_name }}</h1>

            <div class="card-body">

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

            </div>
        </div>

        <div class="card" >
           <h1 class="title-wrapping"> Education:</h1> 
          <div class="main-wrapping">
            <div class="card-body" v-for="school in schools" >
              <div class="card">
                <div class="wrapping">
                  <h2>School Name: {{school.university_name}}</h2>
                  <h3> Start Date: {{school.start_date}}{{" "}} || End Date: {{school.end_date}}</h3>
                  <h3>{{school.degree}}</h3>
                  <h3>{{school.details}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
            <h1 class="title-wrapping">Skills:</h1>
          <div class="main-wrapping">
            <div class="card-body" v-for="skill in skills">
              <div class="card" >
                <div class="wrapping">
                  <h3>{{skill.skill_name}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div class="card">
              <h1 class="title-wrapping">Projects:</h1>
            <div class="main-wrapping">
              <div class="card-body" v-for="project in projects">
                <div class="card">
                  <div class="wrapping">
                    <h3>Project Name: {{project.name}}</h3>
                    <h3>{{project.description}}</h3>
                    <h3>{{project.url}}</h3> 
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
              <h1 class="title-wrapping">Experiences:</h1>
            <div class="main-wrapping">
              <div class="card-body" v-for="experience in experiences">
                <div class="card">
                  <div class="wrapping">
                    <h2>Company Name: {{experience.company_name}}</h2>
                    <h3> Start Date: {{experience.start_date}}{{" "}} || End Date: {{experience.end_date}}</h3>
                    <h3>{{experience.job_title}}</h3>
                    <h3>{{experience.current}}</h3>
                    <h3>{{experience.details}}</h3>
                  </div>
                </div>
              </div>
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
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.skills = response.data[0].skills;
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.projects = response.data[0].projects;
      });
    axios
      .get("https://hidden-dawn-34584.herokuapp.com/api/students")
      .then(response => {
        this.experiences = response.data[0].experiences;
      });

  },
  methods: {}
};
</script>