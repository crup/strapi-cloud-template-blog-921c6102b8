'use strict';

const { CMSService } = require('../../../services/catalog-service');

/**
 * seo-content controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::seo-content.seo-content', ({strapi}) => ({
    async find(ctx) {
        const { data, meta } = await super.find(ctx);
        const commons = { sort: "bestmatch" };
        const pageData = await CMSService.getPageData({
            url: 'buy-used-cars-new-delhi',
            ...commons
        });
        const metaContent = pageData.data.metaContent;

        return { 
            data: data.map(post => ({
                ...post, 
                attributes: {
                    ...post.attributes,
                    metaContent
                }
            })), 
            meta 
        };
    },
}));
