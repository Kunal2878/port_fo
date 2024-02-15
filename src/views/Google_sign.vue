<template>
<GoogleLogin :callback="callback" prompt/>
</template>
<script>

export default{
    data(){
        return{
        callback:(response)=>{
            console.log("Logged in")
            console(response)
            
        }
    }
}
}
</script>