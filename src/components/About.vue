<template>
    <div class="about">
        <div class="des">
            <h3>Personal Information</h3>
            <p>name: Player</p>
            <p>Level: 4</p>
        </div>
        <div class="text">
            <h3>Personal introduction</h3>
            <p>I haven't filled in my personal information yet.</p>
        </div>
    </div>
</template>

<style scoped>
.about{
    box-sizing: border-box;
    width: 100%;
    margin-top: 1rem;
    padding: 0 1rem;
}
.about .des{
    width: 100%;
    color: #aaa;
    margin-bottom: 4rem;
}
.about .des h3{
    color: #000;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}
.about .des p{
    font-size: 0.8rem;
}
.about .text{
    width: 100%;
    color: #aaa;
}
.about .text h3{
    color: #000;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}
.about .text p{
    font-size: 0.8rem;
}
.app.nightMode .about h3{
    color: #fff;
}
</style>

