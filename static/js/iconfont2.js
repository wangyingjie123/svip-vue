(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-wenhao" viewBox="0 0 1024 1024">'+""+'<path d="M512.000156 0C229.25538 0 0.000156 229.255224 0.000156 512S229.25538 1024 512.000156 1024s512-229.255224 512-512S794.844913 0 512.000156 0z m-14.097246 753.652802c-29.394259 0-50.990041-20.096075-50.990041-48.490529s21.595782-47.990627 50.990041-47.990627 50.990041 19.596173 50.990041 47.990627-21.595782 48.490529-50.990041 48.490529z m168.067174-368.1281C660.671119 477.406756 565.389729 503.001757 546.5934 575.087678c-5.398946 20.895919-23.695372 35.693029-45.291154 35.693029-31.293888 0-55.489162-30.694005-44.991213-60.088264 24.795157-68.986526 125.875415-103.67975 125.875415-161.768405 0-39.092365-24.595196-62.287834-65.887131-62.287834-23.995313 0-63.4876 13.197422-83.183754 27.794571-16.296817 11.997657-38.492482 12.097637-53.389572-1.699668-18.596368-17.296622-17.096661-47.090803 2.999414-62.687756 35.093146-27.194689 77.584847-43.691467 126.675259-43.691467 81.784027 0.09998 162.468268 36.792814 156.56942 139.172818z" fill="#F3C91F" ></path>'+""+'<path d="M497.90291 657.071666c-29.394259 0-50.990041 19.596173-50.990041 47.990627s21.595782 48.490529 50.990041 48.490529 50.990041-20.096075 50.990041-48.490529-21.595782-47.990627-50.990041-47.990627zM509.500644 246.451865c-49.090412 0-91.482132 16.496778-126.675258 43.691466-20.096075 15.596954-21.595782 45.391135-2.999415 62.687757 14.89709 13.797305 36.992775 13.697325 53.389573 1.699668 19.696153-14.497169 59.18844-27.794571 83.183753-27.794572 41.291935 0 65.887131 23.19547 65.887131 62.287835 0 57.988674-101.180238 92.681898-125.875415 161.768404-10.59793 29.494239 13.697325 60.088264 44.991213 60.088264 21.495802 0 39.892209-14.89709 45.291154-35.693028 18.796329-72.085921 114.077719-97.780902 119.376684-189.562976 5.798867-102.479984-74.885374-139.172818-156.56942-139.172818z" fill="#2D2E30" ></path>'+""+"</symbol>"+""+'<symbol id="icon-xuanzhong" viewBox="0 0 1025 1024">'+""+'<path d="M513.599063 0.599649c-282.634394 0-511.700176 229.065782-511.700176 511.700175s229.065782 511.700176 511.700176 511.700176 511.700176-229.065782 511.700176-511.700176S796.233457 0.599649 513.599063 0.599649z m284.333398 356.691001l-361.788014 361.788015c-14.191685 14.191685-37.47804 14.191685-51.669725 0L229.365606 563.969549c-14.191685-14.191685-14.191685-37.47804 0-51.669725 14.191685-14.191685 37.47804-14.191685 51.669725 0l129.224283 129.224283 336.003123-336.003123c14.191685-14.191685 37.47804-14.191685 51.669724 0 14.191685 14.291626 14.191685 37.47804 0 51.769666z" fill="#F3C91F" ></path>'+""+'<path d="M746.262737 305.520984L410.259614 641.524107 281.035331 512.299824c-14.191685-14.191685-37.47804-14.191685-51.669725 0-14.191685 14.191685-14.191685 37.47804 0 51.669725l155.109116 155.109116c14.191685 14.191685 37.47804 14.191685 51.669725 0l361.788014-361.788015c14.191685-14.191685 14.191685-37.47804 0-51.669725-14.291626-14.291626-37.47804-14.291626-51.669724-0.099941z" fill="#2D2E30" ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)