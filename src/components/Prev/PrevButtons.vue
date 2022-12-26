<template>
    <div class="buttons d-flex align-items-center justify-content-between mx-auto flex-column flex-lg-row">
        <a href="#steps" class="tosteps d-flex align-items-center text-decoration-none text-center p-lg-3 text-white rounded-pill mb-5 mb-lg-0">
            <p class="mb-0 fw-bold fs-5">Check how you wash hand</p>
            <font-awesome-icon icon="fa-solid fas fa-arrow-right" class="ms-4" />
        </a>
        <RouterLink class="text-decoration-none d-flex align-items-center" to="/questions">
            <p class="mb-0 fw-bold fs-5">
                Q&amp;A on Coronavirus
            </p>
            <font-awesome-icon icon="fa-solid fas fa-arrow-right" class="ms-4" />
    </RouterLink>
    </div>
</template>

<style scoped>
.buttons{
    width: 50%;
    margin: 100px 0;
}
    .buttons .tosteps{
        background-color: var(--active);
        min-width: 220px;
        padding: 20px;
    }
    p{
        width: fit-content;
    }
</style>