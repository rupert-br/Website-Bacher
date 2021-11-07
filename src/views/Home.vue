<template>
    <div class="container-fluid bg-primary extra-ws p-4 p-md-5">
        <div class="row my-5 mx-auto px-md-5 py-md-5">
            <div class="col-lg-5 my-auto">
                <div class="h1 header-alpina text-center row">
                    Handwerk, einzigartig
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

    <div class="container-fluid bg-primary-light p-md-5">
        <div class="row mx-auto px-5 py-5">
            <div class="col-lg-7">
                <h2>Es sind die kleinen Dinge, die das Ganze zu etwas besonderem machen.</h2>
                <div>HANS BACHER</div>
            </div>
            <div class="col-lg-5">
                <div class="mt-lg-5 mx-lg-5 px-lg-5 pt-lg-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    <div class="fw-bold pt-3">
                        <router-link class="contact-link" to="/philosophie">
                            Philosphie
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-primary-extra-light p-md-5">
        <div class="row mx-auto px-5 py-5 mb-4 col-md-10">
            <div class="col-lg-6 px-5">
                <div>UNSER STECKENPFERD</div>
                <h2>Hotellerie</h2>
                <div class="col-md-8 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <router-link class="contact-link" to="/projekte">
                    Projekte Hotellerie
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </router-link>
            </div>
            <div class="col-lg-6 px-5">Image</div>
        </div>
        <div class="row mx-auto landing-box mb-4 col-md-10">
            <div class="col-lg-6 px-5">Image</div>
            <div class="col-lg-6 px-5">
                <div>UNSERE LEIDENSCHAFT</div>
                <h2>Privaträume</h2>
                <div class="col-md-8 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <router-link class="contact-link" to="/projekte">
                    Projekte Privat
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </router-link>
            </div>
        </div>
        <div class="row mx-auto px-5 py-5 mb-5 col-md-10">
            <div class="col-lg-6 px-5">
                <div>UNSERE SPEZIALITÄT</div>
                <h2>Türen</h2>
                <div class="col-md-8 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <router-link class="contact-link" to="/projekte">
                    Projekte Türen
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-arrow-right mb-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                </router-link>
            </div>
            <div class="col-lg-6 px-5">Image</div>
        </div>
    </div>
</template>

<script>
export default {
  created () {
    document.title = 'Hans Bacher Tischlerei'
  }
}
</script>
