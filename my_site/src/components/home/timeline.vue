<template lang="">
    <v-col md="8" cols="12">
            <v-card>
                <v-card-title primary-title class="text-uppercase">
                    <div>
                        <h3 class="headline mb-0">
                            EDUCATION AND EXPERIENCE
                        </h3>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-timeline :dense="isMobile">
                        <v-timeline-item
                            v-for="timelineItem in timeline"
                            :key="timelineItem.name"
                        >
                            <template v-slot:opposite>
                                <span
                                    class="headline font-weight-bold"
                                    v-text="timelineItem.date"
                                ></span>
                            </template>
                            <v-card class="elevation-10">
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">
                                            {{ timelineItem.name }}
                                        </h3>
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    {{ timelineItem.text }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>
            </v-card>
        </v-col>
</template>
<script>
export default {
    data() {
        return {
            isMobile: false,
             timeline: [
                {
                    name: "School: Zuiderzee collge",
                    text: "I currently study media design and ICT here",
                    date: "4/07/2029 - now",
                },
                {
                    name: "Internship at Antoni van Leeuwenhoek hospital",
                    text:
                        "Here I was an intern at the department A&I werkplekbeheer where I made sure that all computers in the hospital worked correctly and that people had the right tools for their work in terms of computer technology. ",
                    date: "8/05/2019 - 26/06/2019",
                },
            ],
        }
    },
    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 600;
        },
    },
    beforeDestroy() {
        if (typeof window !== "undefined") {
            window.removeEventListener("resize", this.onResize, {
                passive: true,
            });
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener("resize", this.onResize, { passive: true });
    },
}
</script>
<style lang="">
    
</style>