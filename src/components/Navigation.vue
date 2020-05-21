<template>
    <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 414 134.157">
            <defs>
                <clipPath id="clipped">
                    <path id="Path" d="M31,0S90.879-2.6,136.863,0s49.084,33.336,74.771,32.689S245.694,1.172,291.146,0,383,0,383,0a31,31,0,0,1,31,31v71a31,31,0,0,1-31,31H31A31,31,0,0,1,0,102V31A31,31,0,0,1,31,0Z" transform="translate(0 1.157)" fill="#eaebf3"/>
                </clipPath>
            </defs>
        </svg>

        <div class="clipped">
            chuj
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

    .clipped {
        clip-path: url(#clipped);
        background: green;
        height:13vh;
        width:300vh;
    }
</style>
