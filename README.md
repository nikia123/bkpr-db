# BKPR - Be Kind Please Rewind
By:   
Nikia @nikia123 & Connor @MigTig


[Style Mock Up](https://xd.adobe.com/view/9eea7424-d890-46a2-862c-8e1256e28343-cbb9/)

 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project uses an API key stored remotely. Add your API key by creating a root file with the name of:  
```
.env.local
```

In the file, create a variable with the name:  

```
NEXT_PUBLIC_API_KEY=yourAPIKeyHere
```  
  
The key should be raw input, no quotes or brackets required. If the dev server is ran before the key is inputted, stop the dev server and restart it.

Install modules:  

```bash
npm i next@latest
```

Run the development server:  

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the page.

### Note:

Console Warning:
```
The resource <URL> was preloaded using link preload but not used within a few seconds from the window's load event. Please make sure it has an appropriate `as` value and it is preloaded intentionally.
```


is currently an issue due to Next.js 13 using the appDir (used in this build)
Stack Overflow example: [https://stackoverflow.com/questions/75620940/warning-in-console-using-next-js-13](https://stackoverflow.com/questions/75620940/warning-in-console-using-next-js-13)

Major Navigational links are pre-fetched for fast response times, however movie/page.jsx is not preloaded. (Page is navigated to when clicking a movie to see more info). These are causing warnings to appear on the console, but are intentional.

