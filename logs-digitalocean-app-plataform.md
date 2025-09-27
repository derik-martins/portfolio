Sep 27 01:36:08  [34m╭────────────[34m[30m[44m git repo clone [0m[0m[34m───────────╼[0m
Sep 27 01:36:08  [34m│[0m [34m › fetching app source code[0m
Sep 27 01:36:08  [34m│[0m => Selecting branch "main"
Sep 27 01:36:08  [34m│[0m => Checking out commit "044a4490cff8da0367c88e8ef445be6d6d5f7ea6"
Sep 27 01:36:08  [34m│[0m 
Sep 27 01:36:08  [34m│[0m [32m ✔ cloned repo to [35m/workspace[0m[0m
Sep 27 01:36:08  [34m╰────────────────────────────────────────╼[0m
Sep 27 01:36:08  
Sep 27 01:36:08  [34m╭────────────[34m[30m[44m buildpack detection [0m[0m[34m───────────╼[0m
Sep 27 01:36:08  [34m│[0m [34m › using Ubuntu 22.04 stack[0m
Sep 27 01:36:09  [34m│[0m Detected the following buildpacks suitable to build your app:
Sep 27 01:36:09  [34m│[0m 
Sep 27 01:36:09  [34m│[0m    digitalocean/nodejs-appdetect  v0.0.6    
Sep 27 01:36:09  [34m│[0m    heroku/nodejs                  v0.296.5  (Node.js)
Sep 27 01:36:09  [34m│[0m    digitalocean/procfile          v0.1.0    (Procfile)
Sep 27 01:36:09  [34m│[0m    digitalocean/custom            v0.2.0    (Custom Build Command)
Sep 27 01:36:09  [34m╰─────────────────────────────────────────────╼[0m
Sep 27 01:36:09  
Sep 27 01:36:09  [34m╭────────────[34m[30m[44m build caching [0m[0m[34m───────────╼[0m
Sep 27 01:36:09  [34m│[0m [34m › checking for cache from a previous build[0m
Sep 27 01:36:10  [34m│[0m Timer: Analyzer started at 2025-09-27T01:36:10Z
Sep 27 01:36:11  [34m│[0m Restoring metadata for "heroku/nodejs:shim" from cache
Sep 27 01:36:11  [34m│[0m Timer: Analyzer ran for 768.368257ms and ended at 2025-09-27T01:36:11Z
Sep 27 01:36:11  [34m│[0m Timer: Restorer started at 2025-09-27T01:36:11Z
Sep 27 01:36:11  [34m│[0m Restoring data for "heroku/nodejs:shim" from cache
Sep 27 01:36:24  [34m│[0m Timer: Restorer ran for 12.831236069s and ended at 2025-09-27T01:36:24Z
Sep 27 01:36:24  [34m╰───────────────────────────────────────╼[0m
Sep 27 01:36:24  
Sep 27 01:36:24  [34m╭────────────[34m[30m[44m app build [0m[0m[34m───────────╼[0m
Sep 27 01:36:24  [34m│[0m Timer: Builder started at 2025-09-27T01:36:24Z
Sep 27 01:36:24  [34m│[0m Project contains pnpm-lock.yaml, using pnpm
Sep 27 01:36:24  [34m│[0m        
Sep 27 01:36:24  [34m│[0m -----> Creating runtime environment
Sep 27 01:36:24  [34m│[0m        
Sep 27 01:36:24  [34m│[0m        NPM_CONFIG_LOGLEVEL=error
Sep 27 01:36:24  [34m│[0m        NODE_VERBOSE=false
Sep 27 01:36:24  [34m│[0m        NODE_ENV=
Sep 27 01:36:24  [34m│[0m        NODE_MODULES_CACHE=true
Sep 27 01:36:24  [34m│[0m        
Sep 27 01:36:24  [34m│[0m -----> Installing binaries
Sep 27 01:36:24  [34m│[0m        engines.node (package.json):   unspecified
Sep 27 01:36:24  [34m│[0m        engines.npm (package.json):    unspecified (use default)
Sep 27 01:36:24  [34m│[0m        engines.pnpm (package.json):   unspecified (use default)
Sep 27 01:36:24  [34m│[0m        
Sep 27 01:36:25  [34m│[0m        Resolving node version 22.x...
Sep 27 01:36:25  [34m│[0m        Downloading and installing node 22.16.0...
Sep 27 01:36:28  [34m│[0m        Using default npm version: 10.9.2
Sep 27 01:36:28  [34m│[0m        Installing pnpm@latest via corepack 0.32.0
Sep 27 01:36:31  [34m│[0m        Using pnpm 10.17.1
Sep 27 01:36:32  [34m│[0m         !     Default pnpm version used
Sep 27 01:36:32  [34m│[0m        
Sep 27 01:36:32  [34m│[0m               A pnpm lockfile (pnpm-lock.yaml) was detected but no specific version of pnpm was defined in package.json in either of the following fields:
Sep 27 01:36:32  [34m│[0m               - "packageManager"
Sep 27 01:36:32  [34m│[0m               - "engines.pnpm"
Sep 27 01:36:32  [34m│[0m        
Sep 27 01:36:32  [34m│[0m               Without a specific version defined, this build will use "pnpm@latest" by default. We highly recommend setting an explicit version
Sep 27 01:36:32  [34m│[0m               of pnpm to improve the reliability of your builds. You can set this with:
Sep 27 01:36:32  [34m│[0m        
Sep 27 01:36:32  [34m│[0m               > corepack use pnpm@{your_preferred_version}
Sep 27 01:36:32  [34m│[0m        
Sep 27 01:36:32  [34m│[0m               Then commit and push the changes to package.json.
Sep 27 01:36:32  [34m│[0m               https://devcenter.heroku.com/articles/nodejs-support
Sep 27 01:36:32  [34m│[0m        
Sep 27 01:36:33  [34m│[0m        
Sep 27 01:36:33  [34m│[0m -----> Restoring cache
Sep 27 01:36:33  [34m│[0m        - pnpm cache
Sep 27 01:36:34  [34m│[0m        
Sep 27 01:36:34  [34m│[0m -----> Installing dependencies
Sep 27 01:36:34  [34m│[0m        Running 'pnpm install' with pnpm-lock.yaml
Sep 27 01:36:38  [34m│[0m        
Sep 27 01:36:38  [34m│[0m -----> Build
Sep 27 01:36:38  [34m│[0m        Running build
Sep 27 01:36:38  [34m│[0m        
Sep 27 01:36:38  [34m│[0m        > porfolio@0.1.0 build /workspace
Sep 27 01:36:38  [34m│[0m        > next build
Sep 27 01:36:38  [34m│[0m        
Sep 27 01:36:39  [34m│[0m        ⚠ No build cache found. Please configure build caching for faster rebuilds. Read more: https://nextjs.org/docs/messages/no-cache
Sep 27 01:36:39  [34m│[0m        Attention: Next.js now collects completely anonymous telemetry regarding usage.
Sep 27 01:36:39  [34m│[0m        This information is used to shape Next.js' roadmap and prioritize features.
Sep 27 01:36:39  [34m│[0m        You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
Sep 27 01:36:39  [34m│[0m        https://nextjs.org/telemetry
Sep 27 01:36:39  [34m│[0m        
Sep 27 01:36:39  [34m│[0m          ▲ Next.js 14.2.4
Sep 27 01:36:39  [34m│[0m        
Sep 27 01:36:39  [34m│[0m           Creating an optimized production build ...
Sep 27 01:37:04  [34m│[0m         ✓ Compiled successfully
Sep 27 01:37:04  [34m│[0m           Linting and checking validity of types ...
Sep 27 01:37:08  [34m│[0m           Collecting page data ...
Sep 27 01:37:10  [34m│[0m           Generating static pages (0/7) ...
Sep 27 01:37:11  [34m│[0m           Generating static pages (1/7) 
Sep 27 01:37:11  [34m│[0m           Generating static pages (3/7) 
Sep 27 01:37:11  [34m│[0m           Generating static pages (5/7) 
Sep 27 01:37:11  [34m│[0m         ✓ Generating static pages (7/7)
Sep 27 01:37:12  [34m│[0m           Finalizing page optimization ...
Sep 27 01:37:12  [34m│[0m           Collecting build traces ...
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m        Route (app)                              Size     First Load JS
Sep 27 01:37:22  [34m│[0m        ┌ ○ /                                    10.2 kB         150 kB
Sep 27 01:37:22  [34m│[0m        ├ ○ /_not-found                          870 B            88 kB
Sep 27 01:37:22  [34m│[0m        ├ ○ /blog                                2.19 kB         133 kB
Sep 27 01:37:22  [34m│[0m        └ ● /blog/[slug]                         138 B          87.3 kB
Sep 27 01:37:22  [34m│[0m            └ /blog/hello-world
Sep 27 01:37:22  [34m│[0m        + First Load JS shared by all            87.2 kB
Sep 27 01:37:22  [34m│[0m          ├ chunks/221-e9884629effc34fb.js       31.6 kB
Sep 27 01:37:22  [34m│[0m          ├ chunks/67cfe1a8-1e0b14605a3aca8a.js  53.6 kB
Sep 27 01:37:22  [34m│[0m          └ other shared chunks (total)          1.89 kB
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m        ○  (Static)  prerendered as static content
Sep 27 01:37:22  [34m│[0m        ●  (SSG)     prerendered as static HTML (uses getStaticProps)
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m -----> Caching build
Sep 27 01:37:22  [34m│[0m        - pnpm cache
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m -----> Pruning devDependencies
Sep 27 01:37:22  [34m│[0m        Skipping because NODE_ENV is not 'production'
Sep 27 01:37:22  [34m│[0m        
Sep 27 01:37:22  [34m│[0m -----> Build succeeded!
Sep 27 01:37:23  [34m│[0m Timer: Builder ran for 58.998184634s and ended at 2025-09-27T01:37:23Z
Sep 27 01:37:23  [34m╰───────────────────────────────────╼[0m
Sep 27 01:37:23  
Sep 27 01:37:23  [34m╭────────────[34m[30m[44m app upload [0m[0m[34m───────────╼[0m
Sep 27 01:37:23  [34m│[0m [34m › uploading app container image to DOCR[0m
Sep 27 01:37:23  [34m│[0m Reusing layers from image <registry-uri-0>
Sep 27 01:37:24  [34m│[0m Timer: Exporter started at 2025-09-27T01:37:23Z
Sep 27 01:37:24  [34m│[0m Reusing layer 'heroku/nodejs:profile'
Sep 27 01:37:44  [34m│[0m Adding 1/1 app layer(s)
Sep 27 01:37:44  [34m│[0m Reusing layer 'buildpacksio/lifecycle:launcher'
Sep 27 01:37:44  [34m│[0m Reusing layer 'buildpacksio/lifecycle:config'
Sep 27 01:37:44  [34m│[0m Reusing layer 'buildpacksio/lifecycle:process-types'
Sep 27 01:37:44  [34m│[0m Adding label 'io.buildpacks.lifecycle.metadata'
Sep 27 01:37:44  [34m│[0m Adding label 'io.buildpacks.build.metadata'
Sep 27 01:37:44  [34m│[0m Adding label 'io.buildpacks.project.metadata'
Sep 27 01:37:44  [34m│[0m Setting default process type 'web'
Sep 27 01:37:44  [34m│[0m Timer: Saving <image-1>... started at 2025-09-27T01:37:44Z
Sep 27 01:37:57  [34m│[0m *** Images (sha256:e0e700295c0406272e1fd454b7c9fff8d6b1fe9e507dcf8fd9ffbd4e8f0d3463):
Sep 27 01:37:57  [34m│[0m       <image-2>
Sep 27 01:37:57  [34m│[0m Timer: Saving <image-3>... ran for 12.711609279s and ended at 2025-09-27T01:37:56Z
Sep 27 01:37:57  [34m│[0m Timer: Exporter ran for 32.994804483s and ended at 2025-09-27T01:37:56Z
Sep 27 01:37:57  [34m│[0m Timer: Cache started at 2025-09-27T01:37:56Z
Sep 27 01:38:04  [34m│[0m Adding cache layer 'heroku/nodejs:shim'
Sep 27 01:38:22  [34m│[0m [32m ✔ uploaded app image to DOCR[0m
Sep 27 01:38:22  [34m╰────────────────────────────────────╼[0m
Sep 27 01:38:22  
Sep 27 01:38:22  [32m ✔ [0m[30m[42m build complete [0m[0m