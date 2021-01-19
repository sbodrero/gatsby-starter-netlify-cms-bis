import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import AmbPagePreview from './preview-templates/AmbPagePreview';
import AgenceIdentiteVisuellePreview from './preview-templates/AgenceIdentiteVisuellePagePreview';
import ContentMarketingPagePreview from './preview-templates/ContentMarketingPagePreview';
import EventPagePreview from './preview-templates/EventPagePreview';
import GrowthDrivenDesignPagePreview from './preview-templates/GrowthDrivenDesignPagePreview';
import MarketingAutomationPagePreview from './preview-templates/MarketingAutomationPagePreview';
import SalesEnablementPagePreview from './preview-templates/SalesEnablementPagePreview';
import SeoPagePreview from './preview-templates/SeoPagePreview';
import SmmPagePreview from './preview-templates/SmmPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('amb', AmbPagePreview);
CMS.registerPreviewTemplate('agence_identite_visuelle', AgenceIdentiteVisuellePreview);
CMS.registerPreviewTemplate('content_marketing', ContentMarketingPagePreview);
CMS.registerPreviewTemplate('event', EventPagePreview);
CMS.registerPreviewTemplate('growth_driven_design', GrowthDrivenDesignPagePreview);
CMS.registerPreviewTemplate('marketing_automation', MarketingAutomationPagePreview);
CMS.registerPreviewTemplate('sales_enablement', SalesEnablementPagePreview);
CMS.registerPreviewTemplate('seo', SeoPagePreview);
CMS.registerPreviewTemplate('smm', SmmPagePreview);
