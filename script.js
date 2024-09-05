const { createApp } = Vue;

createApp({
    data() {
        return {

            tasks: [
                {
                    text: 'Code Consistenly',
                    done: 'true'
                },
                {
                    text: 'Stay Hydrated',
                    done: 'true'
                },
                {
                    text: 'Sleep Enough',
                    done: 'false'
                },
                {
                    text: 'Be Grateful',
                    done: 'true'
                },
                {
                    text: 'Work Out',
                    done: 'false'
                }
            ],

        }

    },
    methods: {
        deleteTask(task) {
            this.tasks.splice(task, 1)
        }
    }
}).mount('#app')