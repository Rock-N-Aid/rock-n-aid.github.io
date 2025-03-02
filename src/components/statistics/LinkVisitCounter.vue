<script setup>
    import { LinkGetManager, Cookie } from '@/assets/Utils.js';
    import EventHandler from '@/assets/EventHandler';
    import PHPVisitNotifier from '@/components/statistics/PHPVisitNotifier.vue'
</script>

<template>
    <PHPVisitNotifier ref = "notifier"/>
</template>

<script>
    export default {
        data() {
            return {
                ip: ""
            }
        },

        methods: {
            setIP() {

                return new Promise((resolve) => {
                    fetch('https://api.ipify.org?format=json')
                    .then(x => x.json())
                    .then(({ ip }) => {
                        this.term = ip;
                        this.ip = ip;
                        resolve()
                    });
                });


            }
        },
        mounted() {

            console.log("notifier mounted")
            EventHandler.on('routeChanged', async () => {
                console.log("routeChanged :))))")
                await this.setIP()
                let code = LinkGetManager.getParameter("code");
                // alert("cooldown: " + Cookie.Exists("codeCooldown"))
                // alert("code: " + code)
                if (!Cookie.Exists("codeCooldown") && code == undefined) {
                    // alert("Code changed to  #")
                    code = "#";
                    Cookie.Set("codeCooldown", 1, 60)
                }
                if (code != undefined) {
                    let loc = window.location.toString();
                    console.warn(loc)
                    window.location = loc.replace("?code="+code, "")
                    // location.replace(window.location)
                    console.warn(window.location.toString() + " ")
                    console.warn("CODE: " + code);
                    this.code = code
                    // this.$refs.notifier.go()
                    // alert("gone: " + this.ip)
                    EventHandler.emit("notifierGo", {code: code, ip: this.ip})
                    
                } else {
                    // alert("code: undefined")
                }
            });

            
        }
    }
</script>