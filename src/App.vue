<template>
  <div id="app">
    <nav id="ross" class="navbar navbar-expand-lg ">
      <h3 class="nav-link">Resume Info</h3>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      </div>
      <div class="rights-link">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active ">
            <h3><router-link  class="nav-link" to="/">Home</router-link></h3>
          </li>
          <li class="nav-item active">
            <h3><router-link class="nav-link" to="/show">Show</router-link></h3>
          </li>
        </ul>
        
      </div>
    </nav>
    <router-view/>
  </div>

</template>

<style>
body {
  background-image: url("/grey_wash_wall.png");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.card-text {
  max-width: 300%;
  height: 100%;
  font-size: 20px;
}
.container {
  max-width: 48rem;
  font-size: 35px;
  font-weight: bold;
}
.display-4 {
  font-size: 105px;
  font-weight: 900;
}
#ross {
  font-size: 20px;
  background-color: #00cd9a;
  /*font-weight: bold;*/
}
.nav-link {
  color: black;
}
.btn-primary {
  background-color: #00cd9a;
  font-size: 0.8em;
  color: black;
  font-weight: bold;
}

.card-index {
 color: white;
}
.card {
  /*margin: 40px;*/
  margin-top: 80px;
  margin-right: 12%;
  margin-left: 12%;
  margin-bottom: 10%;
 
}
#name-size {
font-weight: 900;
font-size: 5em;
}
.right-side {
float: right;
text-align: justify;
}
.left-side {
float: left;
text-align: justify;
}
.school-style {
  font-size: 2em;

}
</style>
