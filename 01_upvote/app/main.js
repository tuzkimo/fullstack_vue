const submissionComponent = {
    template: `
        <div style="display: flex; width: 100%">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img :src="submission.submissionImage">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>
                            <a :href="submission.url" class="has-text-info">{{submission.title}}</a>
                            <span class="tag is-small">#{{submission.id}}</span>
                        </strong>
                        <br>
                            {{submission.description}}
                        <br>
                        <small class="is-size-7">
                            Submitted by:
                            <img :src="submission.avatar" class="image is-24x24">
                        </small>
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span class="icon is-small" @click="upvote(submission.id)">
                    <i class="fa fa-chevron-up"></i>
                    <strong class="has-text-info">{{submission.votes}}</strong>
                </span>
            </div>
        </div>
        `,
    props: ['submission', 'submissions'],
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(submission => submission.id === submissionId)
            submission.votes++
        }
    },

}

new Vue({
    el: "#app",
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => b.votes - a.votes)
        }
    },
    components: {
        'submission-component': submissionComponent
    }
});