<template>
    <nav class="navbar navbar-expand-lg navbar-light border-header bg-primary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <router-link to="/philosophie" class="nav-link">Philosophie</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/projects" class="nav-link">Projekte</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav abs-center-x">
                    <li class="nav-item"><router-link to="/" class="nav-link company-name-header fw-bold">Hans Bacher</router-link></li>
                </ul>
                <ul class="nav navbar-nav ms-auto">
                    <li class="nav-item px-3 contact-navbar">
                        <a class="nav-link" href="mailto:office@hans-bacher.at">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
