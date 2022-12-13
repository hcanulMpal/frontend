<template>
    <div class="tree">
        <div class="top" style="--j:0">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>
        <div class="top" style="--j:1">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>
        <div class="top" style="--j:2">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>
        <div class="top" style="--j:3">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>
        <div class="bottom">
            <span style="--i:0;"></span>
            <span style="--i:1;"></span>
            <span style="--i:2;"></span>
            <span style="--i:3;"></span>
        </div>
        <span class="shadow"></span>
    </div>
</template>
<script>
export default {
    name:'ArboLito',
}
</script>
<style scoped>
.tree
{
    position: relative;
    top: 300px;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(30deg);
    animation: animate 6s linear infinite;
}
.tree::before
{
    content: "⭐";
    position: absolute;
    font-size: 4em;
    top: -100px;
    left: calc(50% - 32px);
}
@keyframes animate {
    0%{
        transform: rotateX(-20deg) rotateY(360deg);
    }
    100%{
        transform: rotateX(-20deg) rotateY(0deg);
    }
}
.tree div
{
    position: absolute;
    top: -90px;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: translateY(calc(40px * var(--j)));
}
.tree div.top span
{
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #69c069, #77dd77);
    clip-path: polygon(50% 0%,0% 100%,100% 100%);
    transform-origin: bottom;
    border-bottom: 10px solid #00000019;
    transform: rotateY(calc(90deg * var(--i))) translateZ(50px) rotateX(30deg);
}
.tree div.bottom span
{
    position: absolute;
    top: 250px;
    left: 40px;
    width: 20px;
    height: 100%;
    background: linear-gradient(90deg, #bb4622, #df7214);
    transform-origin: bottom;
    border-bottom: 10px solid #00000055;
    transform: rotateY(calc(90deg * var(--i))) translateZ(10px);
}
.shadow
{
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #002;
    transform-style: preserve-3d;
    transform: rotateX(90deg) translateZ(-350px);
    filter: blur(20px);
}
</style>