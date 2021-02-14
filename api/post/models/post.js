'use strict';

const slugify = require('slugify');
const readingTime = require('reading-time');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
            if (data.title) {
                data.slug = slugify(data.title, {lower: true});
            }

            const stats = readingTime(data.content);
            data.timing = stats.text;
        },
        async beforeUpdate(params, data) {
            if (data.title) {
                data.slug = slugify(data.title, {lower: true});
            }

            const stats = readingTime(data.content);
            data.timing = stats.text;
        },
    },
};
