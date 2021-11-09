<template>
<div>
    <div class="container-fluid bg-primary extra-ws p-4 p-md-5">
        <div class="row my-5 mx-auto px-md-5 py-md-5">
            <div class="col-lg-5 my-auto">
                <div class="h1 header-alpina text-center row">
                    Projekte aus Leidenschaft
                </div>
                <div class="row px-md-5 mx-md-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
            </div>
            <div class="col-lg-7 text-center">
                <div class="img"><img src="../../public/images/forest.jpg" width="646px" class="img-fluid" alt="Responsive image"></div>
            </div>
        </div>
    </div>
    <div class="container-fluid bg-primary-extra-light">
        <div class="container-fluid p-5">
            <button v-if="selected=='all'" class="btn-active mx-4 px-5 py-2" v-on:click="filter('all')">Alle</button>
            <button v-else class="btn-inactive mx-4 px-5 py-2" v-on:click="filter('all')">Alle</button>

            <button v-if="selected=='hotel'" class="btn-active mx-4 px-5 py-2" v-on:click="filter('hotel')">Hotellerie</button>
            <button v-else class="btn-inactive mx-4 px-5 py-2" v-on:click="filter('hotel')">Hotellerie</button>

            <button v-if="selected=='privat'" class="btn-active mx-4 px-5 py-2" v-on:click="filter('privat')">Privat</button>
            <button v-else class="btn-inactive mx-4 px-5 py-2" v-on:click="filter('privat')">Privat</button>

            <button v-if="selected=='tueren'" class="btn-active mx-4 px-5 py-2" v-on:click="filter('tueren')">Türen</button>
            <button v-else class="btn-inactive mx-4 px-5 py-2" v-on:click="filter('tueren')">Türen</button>
        </div>

        <transition-group name="list" tag="div" class="container-fluid p-5 grid-container">
          <div v-for="project in selectedProjects" :key="project" class="p-5 grid-item">
            <span>{{ project.year }}</span>
              <h3>{{ project.title }}</h3>
              <router-link class="contact-link" :to="`/projekte/${project.id}`">
                  <div>Mehr
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
              </div>
              </router-link>
          </div>
        </transition-group>
    </div>
</div>
</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>

<script>
export default {
  props: ['name'],
  created () {
    // Set Page title to subpage title
    document.title = 'Projekte - Hans Bacher Tischlerei'

    // Check if name query was passed with router-link
    if (this.name === undefined) {
      // Set 'all' if no parameter was passed via url
      this.selected = 'all'
    } else {
      // name param is pased from Home.vue via router-link
      this.selected = this.name
    }
  },
  data () {
    return {
      selected: 'all',
      selectedProjects: [],
      projects: [
        {
          id: 1,
          title: 'Hotel Falkensteiner',
          content: 'Das ist Projekt 1.',
          type: 'hotel',
          year: '2017'
        },
        {
          id: 2,
          title: 'Hotel xyz',
          content: 'Das ist Projekt 2.',
          type: 'hotel',
          year: '2018'
        },
        {
          id: 3,
          title: 'Privat Mustermann',
          content: 'Das ist Projekt 3.',
          type: 'privat',
          year: '2020'
        },
        {
          id: 4,
          title: 'Tür Mustermann',
          content: 'Das ist ein Projekt mit Türen.',
          type: 'tueren',
          year: '2021'
        }
      ]
    }
  },
  methods: {
    filter: function (message) {
      this.selected = message
      this.selectedProjects = []
      if (message === 'all') {
        this.selectedProjects = this.projects
      } else {
        this.projects.map(elem => {
          if (elem.type === message) {
            this.selectedProjects.push(elem)
          }
        })
      }
    }
  }
}
</script>
