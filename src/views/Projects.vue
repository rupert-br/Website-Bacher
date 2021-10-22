<template>
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
            <button class="btn btn-secondary mx-2 border h3 p-3" v-on:click="filter('all')">ALLE</button>
            <button class="btn btn-secondary mx-2 border h3 p-3" v-on:click="filter('hotel')">HOTELLERIE</button>
            <button class="btn btn-secondary mx-2 border h3 p-3" v-on:click="filter('privat')">PRIVAT</button>
            <button class="btn btn-secondary mx-2 border h3 p-3" v-on:click="filter('tueren')">TÜREN</button>
        </div>
        <div class="container-fluid p-5 grid-container">
            <template v-for="project in projects" :key="project.index">
                <div class="p-5 grid-item" v-if="selected == project.type || selected == 'all'">
                    <span>{{ project.year }}</span>
                    <h3>{{ project.title }}</h3>
                    <router-link class="contact-link" :to="`/projects/${project.id}`">
                        <div>Mehr
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                    </router-link>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  created () {
    document.title = 'Projekte - Hans Bacher Tischlerei'
  },
  data () {
    return {
      selected: 'all',
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
          title: 'Haus Mustermann',
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
    }
  }
}
</script>
