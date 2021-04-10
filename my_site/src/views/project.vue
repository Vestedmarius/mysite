<template>
    <div>
        <h1 class="mt-5 text-center">{{ Project.name }}</h1>
        <v-row>
            <v-col cols="5">
                <v-card class="mb-4">
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Genral info</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <p>
                            Language: {{ Project.info.Language }}<br />
                            Platform: {{ Project.info.Platform }}<br />
                            Role: {{ Project.info.Role }}<br />
                            Teamsize: {{ Project.info.size }}
                        </p>
                    </v-card-text>
                </v-card>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Date</h3>
                        </div>
                    </v-card-title>
                    <v-timeline dense>
                        <v-timeline-item>
                            <v-card class="elevation-10" max-width="95%">
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">
                                            To
                                        </h3>
                                    </div>
                                </v-card-title>
                                <v-card-text
                                    v-if="Project.info.date.end == null"
                                >
                                    Now
                                </v-card-text>
                                <v-card-text v-else>
                                    {{ Project.info.date.end }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>

                        <v-timeline-item>
                            <v-card class="elevation-10" max-width="95%">
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">
                                            From
                                        </h3>
                                    </div>
                                </v-card-title>
                                <v-card-text>
                                    {{ Project.info.date.start }}
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>
            </v-col>
            <v-col cols="7">
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">About Project</h3>
                        </div>
                    </v-card-title>
                    <v-card-text>
                        <pre>{{ Project.Discription }}</pre>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import projects from "../projects.js";
export default {
    data() {
        return {
            routeName: this.$route.params.name,
        };
    },
    computed: {
        Project: function() {
            return projects.projects.find(
                (project) => project.saveLink == this.routeName
            );
        },
    },
};
</script>

<style lang="scss" scoped></style>
