<template>
    <div class="form">
        <h1>This is a form page</h1>
        <form action="" method="get">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .form {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    form {
        display: grid;
        gap: .25rem;
    }
}
</style>