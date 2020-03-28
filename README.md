# Freshery Sample Site
Freshery is a sample grocery store website that showcases Acoustic Content (formerly Watson Content Hub) site capabilities. It provides an alternative to the Oslo sample that is installed with Content.

<img src="/screenshots/screenshot-home.png?raw=true" width="433" title="Freshery home page" alt="Freshery home page"/> <img src="/screenshots/screenshot-recipes.png?raw=true" width="433" title="Freshery recipes page" alt="Freshery recipes page"/>

## Freshery Live

If you wish to just see Freshery, you can use the version hosted at [https://my1.digitalexperience.ibm.com/06b21b25-591a-4dd3-a189-197363ea3d1f/home](https://my1.digitalexperience.ibm.com/06b21b25-591a-4dd3-a189-197363ea3d1f/home).

## Installing and modifying Freshery

### Prerequisites

If you want to get the Freshery site in order to make changes to the site, or install Freshery in your own hub, you will need:

* A WCH hub in Trial or Standard Tier
* [wchtools-cli](https://github.com/ibm-wch/wchtools-cli) v2.3.4 or above
* Node.js v6.11.1 or above

### Preparation

The bootstrap step of this repository will remove all artifacts from your hub. We recommend to first do a pull with wchtools if you want to keep any of the existing artifacts.

### Steps

1. Run `wchtools init` to setup the [WCH tools CLI](https://github.com/ibm-wch/wchtools-cli#getting-started).
2. Run `wchtools delete -A --all -v` to empty your tenant to get a fresh start. If your tenancy is brand new, wait for the sample Oslo site to be installed before doing this. **WARNING**: _This will delete all your tenant's Content, Assets, Types, Layouts, Pages, Taxonomies and Image Profiles._ Read more [here](https://github.com/ibm-wch/wchtools-cli#deleting-all-instances-of-a-specified-artifact-type-or-all-instances-of-all-artifact-types).
3. Download or clone this repository to get the Freshery artifacts.
4. Go to the directory where you have the Freshery artifacts.
5. Push the Freshery site artifacts to your hub by running `npm run init-content`. This repository contains the built site, so there is no need to build it. Note that publishing can take several minutes to make the site fully available.
6. Login to your tenant and open the About menu. View the Freshery website by clicking on Hub information to find the URL to the live site.

### Customizing the site

1. Install dependencies with `npm install`.
2. Update `src/app/Constants.ts` to set your tenant (`DOMAIN_NAME` and `CONTENT_HUB_ID`).
3. Run `npm start` for a local development server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.
4. Customize the site. Read more [here](https://developer.ibm.com/customer-engagement/docs/wch/developing-your-own-website/).
5. Build with `npm run build`.
6. Run `npm run deploy` to deploy the built code to Watson Content Hub. There is also a shortcut for building and deploying in one step via `npm run build-deploy`. Note that publishing can take several minutes for all updates to be available.
