<!-- <template>
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
</script> -->
<template>
<div id="g_id_onload"
     data-client_id="148724204917-dpgah2sm4sdv5i9hqsbt5ceg8628h08o.apps.googleusercontent.com"
     data-context="signin"
     data-ux_mode="popup"
     data-login_uri="https://www.Google.com"
     data-allowed_parent_origin="http://localhost/3000"
     data-auto_prompt="true"
     data-nonce=""
     data-auto_select="true"
     data-itp_support="true">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="pill"
     data-theme="filled_blue"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
</template>
<!-- <script src="https://accounts.google.com/gsi/client" async defer></script> -->