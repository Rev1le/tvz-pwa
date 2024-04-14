import {injectManifest} from 'workbox-build';

const injectManifestOptions = {
    swSrc: "./dist/service-worker.js",
    swDest: "./dist/service-worker.js",
    globDirectory: './dist',
    globPatterns: [
        '**/*.js',
        '**/*.css',
        '**/*.svg'
    ],
    manifestTransforms: [
        (entryes) =>{
            return {
                manifest: entryes.map(en => en.url)
            }
        }
    ]
};

injectManifest(injectManifestOptions).catch(e => console.error(e));
