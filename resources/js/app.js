/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Chart=t()}}(function(){return function t(e,a,i){function n(r,l){if(!a[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var d=new Error("Cannot find module '"+r+"'");throw d.code="MODULE_NOT_FOUND",d}var u=a[r]={exports:{}};e[r][0].call(u.exports,function(t){var a=e[r][1][t];return n(a?a:t)},u,u.exports,t,e,a,i)}return a[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({1:[function(t,e,a){},{}],2:[function(t,e,a){function i(t){if(t){var e=/^#([a-fA-F0-9]{3})$/,a=/^#([a-fA-F0-9]{6})$/,i=/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,n=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/,o=/(\w+)/,r=[0,0,0],l=1,s=t.match(e);if(s){s=s[1];for(var d=0;d<r.length;d++)r[d]=parseInt(s[d]+s[d],16)}else if(s=t.match(a)){s=s[1];for(var d=0;d<r.length;d++)r[d]=parseInt(s.slice(2*d,2*d+2),16)}else if(s=t.match(i)){for(var d=0;d<r.length;d++)r[d]=parseInt(s[d+1]);l=parseFloat(s[4])}else if(s=t.match(n)){for(var d=0;d<r.length;d++)r[d]=Math.round(2.55*parseFloat(s[d+1]));l=parseFloat(s[4])}else if(s=t.match(o)){if("transparent"==s[1])return[0,0,0,0];if(r=y[s[1]],!r)return}for(var d=0;d<r.length;d++)r[d]=v(r[d],0,255);return l=l||0==l?v(l,0,1):1,r[3]=l,r}}function n(t){if(t){var e=/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=v(parseInt(a[1]),0,360),o=v(parseFloat(a[2]),0,100),r=v(parseFloat(a[3]),0,100),l=v(isNaN(i)?1:i,0,1);return[n,o,r,l]}}}function o(t){if(t){var e=/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/,a=t.match(e);if(a){var i=parseFloat(a[4]),n=v(parseInt(a[1]),0,360),o=v(parseFloat(a[2]),0,100),r=v(parseFloat(a[3]),0,100),l=v(isNaN(i)?1:i,0,1);return[n,o,r,l]}}}function r(t){var e=i(t);return e&&e.slice(0,3)}function l(t){var e=n(t);return e&&e.slice(0,3)}function s(t){var e=i(t);return e?e[3]:(e=n(t))?e[3]:(e=o(t))?e[3]:void 0}function d(t){return"#"+x(t[0])+x(t[1])+x(t[2])}function u(t,e){return 1>e||t[3]&&t[3]<1?c(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"}function c(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function h(t,e){if(1>e||t[3]&&t[3]<1)return f(t,e);var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgb("+a+"%, "+i+"%, "+n+"%)"}function f(t,e){var a=Math.round(t[0]/255*100),i=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return"rgba("+a+"%, "+i+"%, "+n+"%, "+(e||t[3]||1)+")"}function g(t,e){return 1>e||t[3]&&t[3]<1?p(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"}function p(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function m(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"}function b(t){return k[t.slice(0,3)]}function v(t,e,a){return Math.min(Math.max(e,t),a)}function x(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var y=t(6);e.exports={getRgba:i,getHsla:n,getRgb:r,getHsl:l,getHwb:o,getAlpha:s,hexString:d,rgbString:u,rgbaString:c,percentString:h,percentaString:f,hslString:g,hslaString:p,hwbString:m,keyword:b};var k={};for(var S in y)k[y[S]]=S},{6:6}],3:[function(t,e,a){var i=t(5),n=t(2),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;if("string"==typeof t)if(e=n.getRgba(t))this.setValues("rgb",e);else if(e=n.getHsla(t))this.setValues("hsl",e);else{if(!(e=n.getHwb(t)))throw new Error('Unable to parse color from string "'+t+'"');this.setValues("hwb",e)}else if("object"==typeof t)if(e=t,void 0!==e.r||void 0!==e.red)this.setValues("rgb",e);else if(void 0!==e.l||void 0!==e.lightness)this.setValues("hsl",e);else if(void 0!==e.v||void 0!==e.value)this.setValues("hsv",e);else if(void 0!==e.w||void 0!==e.whiteness)this.setValues("hwb",e);else{if(void 0===e.c&&void 0===e.cyan)throw new Error("Unable to parse color from object "+JSON.stringify(t));this.setValues("cmyk",e)}};o.prototype={rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t%=360,t=0>t?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return n.hexString(this.values.rgb)},rgbString:function(){return n.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return n.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return n.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return n.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return n.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return n.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return n.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],a=0;a<t.length;a++){var i=t[a]/255;e[a]=.03928>=i?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),a=t.luminosity();return e>a?(e+.05)/(a+.05):(a+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb,e=(299*t[0]+587*t[1]+114*t[2])/1e3;return 128>e},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;3>e;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,a=(e[0]+t)%360;return e[0]=0>a?360+a:a,this.setValues("hsl",e),this},mix:function(t,e){var a=this,i=t,n=void 0===e?.5:e,o=2*n-1,r=a.alpha()-i.alpha(),l=((o*r===-1?o:(o+r)/(1+o*r))+1)/2,s=1-l;return this.rgb(l*a.red()+s*i.red(),l*a.green()+s*i.green(),l*a.blue()+s*i.blue()).alpha(a.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,a=new o,i=this.values,n=a.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],e={}.toString.call(t),"[object Array]"===e?n[r]=t.slice(0):"[object Number]"===e?n[r]=t:console.error("unexpected color value:",t));return a}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,a={},i=0;i<t.length;i++)a[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(a.a=e.alpha),a},o.prototype.setValues=function(t,e){var a,n=this.values,o=this.spaces,r=this.maxes,l=1;if("alpha"===t)l=e;else if(e.length)n[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(a=0;a<t.length;a++)n[t][a]=e[t.charAt(a)];l=e.a}else if(void 0!==e[o[t][0]]){var s=o[t];for(a=0;a<t.length;a++)n[t][a]=e[s[a]];l=e.alpha}if(n.alpha=Math.max(0,Math.min(1,void 0===l?n.alpha:l)),"alpha"===t)return!1;var d;for(a=0;a<t.length;a++)d=Math.max(0,Math.min(r[t][a],n[t][a])),n[t][a]=Math.round(d);for(var u in o)u!==t&&(n[u]=i[t][u](n[t]));return!0},o.prototype.setSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a),this)},o.prototype.setChannel=function(t,e,a){var i=this.values[t];return void 0===a?i[e]:a===i[e]?this:(i[e]=a,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,a){function i(t){var e,a,i,n=t[0]/255,o=t[1]/255,r=t[2]/255,l=Math.min(n,o,r),s=Math.max(n,o,r),d=s-l;return s==l?e=0:n==s?e=(o-r)/d:o==s?e=2+(r-n)/d:r==s&&(e=4+(n-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=(l+s)/2,a=s==l?0:.5>=i?d/(s+l):d/(2-s-l),[e,100*a,100*i]}function n(t){var e,a,i,n=t[0],o=t[1],r=t[2],l=Math.min(n,o,r),s=Math.max(n,o,r),d=s-l;return a=0==s?0:d/s*1e3/10,s==l?e=0:n==s?e=(o-r)/d:o==s?e=2+(r-n)/d:r==s&&(e=4+(n-o)/d),e=Math.min(60*e,360),0>e&&(e+=360),i=s/255*1e3/10,[e,a,i]}function o(t){var e=t[0],a=t[1],n=t[2],o=i(t)[0],r=1/255*Math.min(e,Math.min(a,n)),n=1-1/255*Math.max(e,Math.max(a,n));return[o,100*r,100*n]}function l(t){var e,a,i,n,o=t[0]/255,r=t[1]/255,l=t[2]/255;return n=Math.min(1-o,1-r,1-l),e=(1-o-n)/(1-n)||0,a=(1-r-n)/(1-n)||0,i=(1-l-n)/(1-n)||0,[100*e,100*a,100*i,100*n]}function s(t){return G[JSON.stringify(t)]}function d(t){var e=t[0]/255,a=t[1]/255,i=t[2]/255;e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,a=a>.04045?Math.pow((a+.055)/1.055,2.4):a/12.92,i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92;var n=.4124*e+.3576*a+.1805*i,o=.2126*e+.7152*a+.0722*i,r=.0193*e+.1192*a+.9505*i;return[100*n,100*o,100*r]}function u(t){var e,a,i,n=d(t),o=n[0],r=n[1],l=n[2];return o/=95.047,r/=100,l/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=116*r-16,a=500*(o-r),i=200*(r-l),[e,a,i]}function c(t){return W(u(t))}function h(t){var e,a,i,n,o,r=t[0]/360,l=t[1]/100,s=t[2]/100;if(0==l)return o=255*s,[o,o,o];a=.5>s?s*(1+l):s+l-s*l,e=2*s-a,n=[0,0,0];for(var d=0;3>d;d++)i=r+1/3*-(d-1),0>i&&i++,i>1&&i--,o=1>6*i?e+6*(a-e)*i:1>2*i?a:2>3*i?e+(a-e)*(2/3-i)*6:e,n[d]=255*o;return n}function f(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,n*=1>=o?o:2-o,a=(o+n)/2,e=2*n/(o+n),[i,100*e,100*a])}function p(t){return o(h(t))}function m(t){return l(h(t))}function v(t){return s(h(t))}function x(t){var e=t[0]/60,a=t[1]/100,i=t[2]/100,n=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-a),l=255*i*(1-a*o),s=255*i*(1-a*(1-o)),i=255*i;switch(n){case 0:return[i,s,r];case 1:return[l,i,r];case 2:return[r,i,s];case 3:return[r,l,i];case 4:return[s,r,i];case 5:return[i,r,l]}}function y(t){var e,a,i=t[0],n=t[1]/100,o=t[2]/100;return a=(2-n)*o,e=n*o,e/=1>=a?a:2-a,e=e||0,a/=2,[i,100*e,100*a]}function k(t){return o(x(t))}function S(t){return l(x(t))}function w(t){return s(x(t))}function M(t){var e,a,i,n,o=t[0]/360,l=t[1]/100,s=t[2]/100,d=l+s;switch(d>1&&(l/=d,s/=d),e=Math.floor(6*o),a=1-s,i=6*o-e,0!=(1&e)&&(i=1-i),n=l+i*(a-l),e){default:case 6:case 0:r=a,g=n,b=l;break;case 1:r=n,g=a,b=l;break;case 2:r=l,g=a,b=n;break;case 3:r=l,g=n,b=a;break;case 4:r=n,g=l,b=a;break;case 5:r=a,g=l,b=n}return[255*r,255*g,255*b]}function C(t){return i(M(t))}function D(t){return n(M(t))}function I(t){return l(M(t))}function A(t){return s(M(t))}function T(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100,l=t[3]/100;return e=1-Math.min(1,n*(1-l)+l),a=1-Math.min(1,o*(1-l)+l),i=1-Math.min(1,r*(1-l)+l),[255*e,255*a,255*i]}function P(t){return i(T(t))}function F(t){return n(T(t))}function _(t){return o(T(t))}function R(t){return s(T(t))}function V(t){var e,a,i,n=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*n+-1.5372*o+r*-.4986,a=n*-.9689+1.8758*o+.0415*r,i=.0557*n+o*-.204+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e=12.92*e,a=a>.0031308?1.055*Math.pow(a,1/2.4)-.055:a=12.92*a,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i=12.92*i,e=Math.min(Math.max(0,e),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[255*e,255*a,255*i]}function L(t){var e,a,i,n=t[0],o=t[1],r=t[2];return n/=95.047,o/=100,r/=108.883,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,a=500*(n-o),i=200*(o-r),[e,a,i]}function O(t){return W(L(t))}function B(t){var e,a,i,n,o=t[0],r=t[1],l=t[2];return 8>=o?(a=100*o/903.3,n=7.787*(a/100)+16/116):(a=100*Math.pow((o+16)/116,3),n=Math.pow(a/100,1/3)),e=.008856>=e/95.047?e=95.047*(r/500+n-16/116)/7.787:95.047*Math.pow(r/500+n,3),i=.008859>=i/108.883?i=108.883*(n-l/200-16/116)/7.787:108.883*Math.pow(n-l/200,3),[e,a,i]}function W(t){var e,a,i,n=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),a=360*e/2/Math.PI,0>a&&(a+=360),i=Math.sqrt(o*o+r*r),[n,i,a]}function z(t){return V(B(t))}function N(t){var e,a,i,n=t[0],o=t[1],r=t[2];return i=r/360*2*Math.PI,e=o*Math.cos(i),a=o*Math.sin(i),[n,e,a]}function E(t){return B(N(t))}function H(t){return z(N(t))}function U(t){return Z[t]}function j(t){return i(U(t))}function q(t){return n(U(t))}function Y(t){return o(U(t))}function X(t){return l(U(t))}function K(t){return u(U(t))}function J(t){return d(U(t))}e.exports={rgb2hsl:i,rgb2hsv:n,rgb2hwb:o,rgb2cmyk:l,rgb2keyword:s,rgb2xyz:d,rgb2lab:u,rgb2lch:c,hsl2rgb:h,hsl2hsv:f,hsl2hwb:p,hsl2cmyk:m,hsl2keyword:v,hsv2rgb:x,hsv2hsl:y,hsv2hwb:k,hsv2cmyk:S,hsv2keyword:w,hwb2rgb:M,hwb2hsl:C,hwb2hsv:D,hwb2cmyk:I,hwb2keyword:A,cmyk2rgb:T,cmyk2hsl:P,cmyk2hsv:F,cmyk2hwb:_,cmyk2keyword:R,keyword2rgb:U,keyword2hsl:j,keyword2hsv:q,keyword2hwb:Y,keyword2cmyk:X,keyword2lab:K,keyword2xyz:J,xyz2rgb:V,xyz2lab:L,xyz2lch:O,lab2xyz:B,lab2rgb:z,lab2lch:W,lch2lab:N,lch2xyz:E,lch2rgb:H};var Z={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G={};for(var Q in Z)G[JSON.stringify(Z[Q])]=Q},{}],5:[function(t,e,a){var i=t(4),n=function(){return new d};for(var o in i){n[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),l=r[1],s=r[2];n[l]=n[l]||{},n[l][s]=n[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var a=i[t](e);if("string"==typeof a||void 0===a)return a;for(var n=0;n<a.length;n++)a[n]=Math.round(a[n]);return a}}(o)}var d=function(){this.convs={}};d.prototype.routeSpace=function(t,e){var a=e[0];return void 0===a?this.getValues(t):("number"==typeof a&&(a=Array.prototype.slice.call(e)),this.setValues(t,a))},d.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},d.prototype.getValues=function(t){var e=this.convs[t];if(!e){var a=this.space,i=this.convs[a];e=n[a][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){d.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=n},{4:4}],6:[function(t,e,a){e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,a){var i=t(28)();t(26)(i),t(22)(i),t(25)(i),t(21)(i),t(23)(i),t(24)(i),t(29)(i),t(33)(i),t(31)(i),t(34)(i),t(32)(i),t(35)(i),t(30)(i),t(27)(i),t(36)(i),t(37)(i),t(38)(i),t(39)(i),t(40)(i),t(43)(i),t(41)(i),t(42)(i),t(44)(i),t(45)(i),t(46)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i),window.Chart=e.exports=i},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,8:8,9:9}],8:[function(t,e,a){"use strict";e.exports=function(t){t.Bar=function(e,a){return a.type="bar",new t(e,a)}}},{}],9:[function(t,e,a){"use strict";e.exports=function(t){t.Bubble=function(e,a){return a.type="bubble",new t(e,a)}}},{}],10:[function(t,e,a){"use strict";e.exports=function(t){t.Doughnut=function(e,a){return a.type="doughnut",new t(e,a)}}},{}],11:[function(t,e,a){"use strict";e.exports=function(t){t.Line=function(e,a){return a.type="line",new t(e,a)}}},{}],12:[function(t,e,a){"use strict";e.exports=function(t){t.PolarArea=function(e,a){return a.type="polarArea",new t(e,a)}}},{}],13:[function(t,e,a){"use strict";e.exports=function(t){t.Radar=function(e,a){return a.type="radar",new t(e,a)}}},{}],14:[function(t,e,a){"use strict";e.exports=function(t){var e={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-1"}],yAxes:[{type:"linear",position:"left",id:"y-axis-1"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}};t.defaults.scatter=e,t.controllers.scatter=t.controllers.line,t.Scatter=function(e,a){return a.type="scatter",new t(e,a)}}},{}],15:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bar={hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}},t.controllers.bar=t.DatasetController.extend({dataElementType:t.elements.Rectangle,initialize:function(e,a){t.DatasetController.prototype.initialize.call(this,e,a),this.getMeta().bar=!0},getBarCount:function(){var t=this,a=0;return e.each(t.chart.data.datasets,function(e,i){var n=t.chart.getDatasetMeta(i);n.bar&&t.chart.isDatasetVisible(i)&&++a},t),a},update:function(t){var a=this;e.each(a.getMeta().data,function(e,i){a.updateElement(e,i,t)},a)},updateElement:function(t,a,i){var n=this,o=n.getMeta(),r=n.getScaleForId(o.xAxisID),l=n.getScaleForId(o.yAxisID),s=l.getBasePixel(),d=n.chart.options.elements.rectangle,u=t.custom||{},c=n.getDataset();t._xScale=r,t._yScale=l,t._datasetIndex=n.index,t._index=a;var h=n.getRuler(a);t._model={x:n.calculateBarX(a,n.index,h),y:i?s:n.calculateBarY(a,n.index),label:n.chart.data.labels[a],datasetLabel:c.label,base:i?s:n.calculateBarBase(n.index,a),width:n.calculateBarWidth(h),backgroundColor:u.backgroundColor?u.backgroundColor:e.getValueAtIndexOrDefault(c.backgroundColor,a,d.backgroundColor),borderSkipped:u.borderSkipped?u.borderSkipped:d.borderSkipped,borderColor:u.borderColor?u.borderColor:e.getValueAtIndexOrDefault(c.borderColor,a,d.borderColor),borderWidth:u.borderWidth?u.borderWidth:e.getValueAtIndexOrDefault(c.borderWidth,a,d.borderWidth)},t.pivot()},calculateBarBase:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=0;if(n.options.stacked){for(var r=a.chart,l=r.data.datasets,s=Number(l[t].data[e]),d=0;t>d;d++){var u=l[d],c=r.getDatasetMeta(d);if(c.bar&&c.yAxisID===n.id&&r.isDatasetVisible(d)){var h=Number(u.data[e]);o+=0>s?Math.min(h,0):Math.max(h,0)}}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(t){var e,a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=a.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var r=e*n.options.categoryPercentage,l=(e-e*n.options.categoryPercentage)/2,s=r/o;if(n.ticks.length!==a.chart.data.labels.length){var d=n.ticks.length/a.chart.data.labels.length;s*=d}var u=s*n.options.barPercentage,c=s-s*n.options.barPercentage;return{datasetCount:o,tickWidth:e,categoryWidth:r,categorySpacing:l,fullBarWidth:s,barWidth:u,barSpacing:c}},calculateBarWidth:function(t){var e=this.getScaleForId(this.getMeta().xAxisID);return e.options.barThickness?e.options.barThickness:e.options.stacked?t.categoryWidth:t.barWidth},getBarIndex:function(t){var e,a,i=0;for(a=0;t>a;++a)e=this.chart.getDatasetMeta(a),e.bar&&this.chart.isDatasetVisible(a)&&++i;return i},calculateBarX:function(t,e,a){var i=this,n=i.getMeta(),o=i.getScaleForId(n.xAxisID),r=i.getBarIndex(e),l=o.getPixelForValue(null,t,e,i.chart.isCombo);return l-=i.chart.isCombo?a.tickWidth/2:0,o.options.stacked?l+a.categoryWidth/2+a.categorySpacing:l+a.barWidth/2+a.categorySpacing+a.barWidth*r+a.barSpacing/2+a.barSpacing*r},calculateBarY:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=Number(a.getDataset().data[t]);if(n.options.stacked){for(var r=0,l=0,s=0;e>s;s++){var d=a.chart.data.datasets[s],u=a.chart.getDatasetMeta(s);if(u.bar&&u.yAxisID===n.id&&a.chart.isDatasetVisible(s)){var c=Number(d.data[t]);0>c?l+=c||0:r+=c||0}}return 0>o?n.getPixelForValue(l+o):n.getPixelForValue(r+o)}return n.getPixelForValue(o)},draw:function(t){var e,a,i=this,n=t||1,o=i.getMeta().data,r=i.getDataset();for(e=0,a=o.length;a>e;++e){var l=r.data[e];null===l||void 0===l||isNaN(l)||o[e].transition(n).draw()}},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.hoverBackgroundColor,i,e.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor?n.hoverBorderColor:e.getValueAtIndexOrDefault(a.hoverBorderColor,i,e.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:e.getValueAtIndexOrDefault(a.hoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model,r=this.chart.options.elements.rectangle;o.backgroundColor=n.backgroundColor?n.backgroundColor:e.getValueAtIndexOrDefault(a.backgroundColor,i,r.backgroundColor),o.borderColor=n.borderColor?n.borderColor:e.getValueAtIndexOrDefault(a.borderColor,i,r.borderColor),o.borderWidth=n.borderWidth?n.borderWidth:e.getValueAtIndexOrDefault(a.borderWidth,i,r.borderWidth)}}),t.defaults.horizontalBar={hover:{mode:"label"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var a="";return t.length>0&&(t[0].yLabel?a=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(a=e.labels[t[0].index])),a},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.xLabel}}}},t.controllers.horizontalBar=t.controllers.bar.extend({updateElement:function(t,a,i){var n=this,o=n.getMeta(),r=n.getScaleForId(o.xAxisID),l=n.getScaleForId(o.yAxisID),s=r.getBasePixel(),d=t.custom||{},u=n.getDataset(),c=n.chart.options.elements.rectangle;t._xScale=r,t._yScale=l,t._datasetIndex=n.index,t._index=a;var h=n.getRuler(a);t._model={x:i?s:n.calculateBarX(a,n.index),y:n.calculateBarY(a,n.index,h),label:n.chart.data.labels[a],datasetLabel:u.label,base:i?s:n.calculateBarBase(n.index,a),height:n.calculateBarHeight(h),backgroundColor:d.backgroundColor?d.backgroundColor:e.getValueAtIndexOrDefault(u.backgroundColor,a,c.backgroundColor),borderSkipped:d.borderSkipped?d.borderSkipped:c.borderSkipped,borderColor:d.borderColor?d.borderColor:e.getValueAtIndexOrDefault(u.borderColor,a,c.borderColor),borderWidth:d.borderWidth?d.borderWidth:e.getValueAtIndexOrDefault(u.borderWidth,a,c.borderWidth)},t.draw=function(){function t(t){return s[(u+t)%4]}var e=this._chart.ctx,a=this._view,i=a.height/2,n=a.y-i,o=a.y+i,r=a.base-(a.base-a.x),l=a.borderWidth/2;a.borderWidth&&(n+=l,o-=l,r+=l),e.beginPath(),e.fillStyle=a.backgroundColor,e.strokeStyle=a.borderColor,e.lineWidth=a.borderWidth;var s=[[a.base,o],[a.base,n],[r,n],[r,o]],d=["bottom","left","top","right"],u=d.indexOf(a.borderSkipped,0);-1===u&&(u=0),e.moveTo.apply(e,t(0));for(var c=1;4>c;c++)e.lineTo.apply(e,t(c));e.fill(),a.borderWidth&&e.stroke()},t.pivot()},calculateBarBase:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=0;if(n.options.stacked){for(var r=a.chart,l=r.data.datasets,s=Number(l[t].data[e]),d=0;t>d;d++){var u=l[d],c=r.getDatasetMeta(d);if(c.bar&&c.xAxisID===n.id&&r.isDatasetVisible(d)){
var h=Number(u.data[e]);o+=0>s?Math.min(h,0):Math.max(h,0)}}return n.getPixelForValue(o)}return n.getBasePixel()},getRuler:function(t){var e,a=this,i=a.getMeta(),n=a.getScaleForId(i.yAxisID),o=a.getBarCount();e="category"===n.options.type?n.getPixelForTick(t+1)-n.getPixelForTick(t):n.width/n.ticks.length;var r=e*n.options.categoryPercentage,l=(e-e*n.options.categoryPercentage)/2,s=r/o;if(n.ticks.length!==a.chart.data.labels.length){var d=n.ticks.length/a.chart.data.labels.length;s*=d}var u=s*n.options.barPercentage,c=s-s*n.options.barPercentage;return{datasetCount:o,tickHeight:e,categoryHeight:r,categorySpacing:l,fullBarHeight:s,barHeight:u,barSpacing:c}},calculateBarHeight:function(t){var e=this,a=e.getScaleForId(e.getMeta().yAxisID);return a.options.barThickness?a.options.barThickness:a.options.stacked?t.categoryHeight:t.barHeight},calculateBarX:function(t,e){var a=this,i=a.getMeta(),n=a.getScaleForId(i.xAxisID),o=Number(a.getDataset().data[t]);if(n.options.stacked){for(var r=0,l=0,s=0;e>s;s++){var d=a.chart.data.datasets[s],u=a.chart.getDatasetMeta(s);if(u.bar&&u.xAxisID===n.id&&a.chart.isDatasetVisible(s)){var c=Number(d.data[t]);0>c?l+=c||0:r+=c||0}}return 0>o?n.getPixelForValue(l+o):n.getPixelForValue(r+o)}return n.getPixelForValue(o)},calculateBarY:function(t,e,a){var i=this,n=i.getMeta(),o=i.getScaleForId(n.yAxisID),r=i.getBarIndex(e),l=o.getPixelForValue(null,t,e,i.chart.isCombo);return l-=i.chart.isCombo?a.tickHeight/2:0,o.options.stacked?l+a.categoryHeight/2+a.categorySpacing:l+a.barHeight/2+a.categorySpacing+a.barHeight*r+a.barSpacing/2+a.barSpacing*r}})}},{}],16:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.bubble={hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return a+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}},t.controllers.bubble=t.DatasetController.extend({dataElementType:t.elements.Point,update:function(t){var a=this,i=a.getMeta(),n=i.data;e.each(n,function(e,i){a.updateElement(e,i,t)})},updateElement:function(a,i,n){var o=this,r=o.getMeta(),l=o.getScaleForId(r.xAxisID),s=o.getScaleForId(r.yAxisID),d=a.custom||{},u=o.getDataset(),c=u.data[i],h=o.chart.options.elements.point,f=o.index;e.extend(a,{_xScale:l,_yScale:s,_datasetIndex:f,_index:i,_model:{x:n?l.getPixelForDecimal(.5):l.getPixelForValue("object"==typeof c?c:NaN,i,f,o.chart.isCombo),y:n?s.getBasePixel():s.getPixelForValue(c,i,f),radius:n?0:d.radius?d.radius:o.getRadius(c),hitRadius:d.hitRadius?d.hitRadius:e.getValueAtIndexOrDefault(u.hitRadius,i,h.hitRadius)}}),t.DatasetController.prototype.removeHoverStyle.call(o,a,h);var g=a._model;g.skip=d.skip?d.skip:isNaN(g.x)||isNaN(g.y),a.pivot()},getRadius:function(t){return t.r||this.chart.options.elements.point.radius},setHoverStyle:function(a){var i=this;t.DatasetController.prototype.setHoverStyle.call(i,a);var n=i.chart.data.datasets[a._datasetIndex],o=a._index,r=a.custom||{},l=a._model;l.radius=r.hoverRadius?r.hoverRadius:e.getValueAtIndexOrDefault(n.hoverRadius,o,i.chart.options.elements.point.hoverRadius)+i.getRadius(n.data[o])},removeHoverStyle:function(e){var a=this;t.DatasetController.prototype.removeHoverStyle.call(a,e,a.chart.options.elements.point);var i=a.chart.data.datasets[e._datasetIndex].data[e._index],n=e.custom||{},o=e._model;o.radius=n.radius?n.radius:a.getRadius(i)}})}},{}],17:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults;a.doughnut={animation:{animateRotate:!0,animateScale:!1},aspectRatio:1,hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],l=o.data[n],s=l&&l.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:d(r.backgroundColor,n,u.backgroundColor),h=s.borderColor?s.borderColor:d(r.borderColor,n,u.borderColor),f=s.borderWidth?s.borderWidth:d(r.borderWidth,n,u.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;i>a;++a)n=r.getDatasetMeta(a),n.data[o]&&(n.data[o].hidden=!n.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:Math.PI*-.5,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,a){var i=a.labels[t.index],n=": "+a.datasets[t.datasetIndex].data[t.index];return e.isArray(i)?(i=i.slice(),i[0]+=n):i+=n,i}}}},a.pie=e.clone(a.doughnut),e.extend(a.pie,{cutoutPercentage:0}),t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,getRingIndex:function(t){for(var e=0,a=0;t>a;++a)this.chart.isDatasetVisible(a)&&++e;return e},update:function(t){var a=this,i=a.chart,n=i.chartArea,o=i.options,r=o.elements.arc,l=n.right-n.left-r.borderWidth,s=n.bottom-n.top-r.borderWidth,d=Math.min(l,s),u={x:0,y:0},c=a.getMeta(),h=o.cutoutPercentage,f=o.circumference;if(f<2*Math.PI){var g=o.rotation%(2*Math.PI);g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0);var p=g+f,m={x:Math.cos(g),y:Math.sin(g)},b={x:Math.cos(p),y:Math.sin(p)},v=0>=g&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,S=h/100,w={x:y?-1:Math.min(m.x*(m.x<0?1:S),b.x*(b.x<0?1:S)),y:k?-1:Math.min(m.y*(m.y<0?1:S),b.y*(b.y<0?1:S))},M={x:v?1:Math.max(m.x*(m.x>0?1:S),b.x*(b.x>0?1:S)),y:x?1:Math.max(m.y*(m.y>0?1:S),b.y*(b.y>0?1:S))},C={width:.5*(M.x-w.x),height:.5*(M.y-w.y)};d=Math.min(l/C.width,s/C.height),u={x:(M.x+w.x)*-.5,y:(M.y+w.y)*-.5}}i.borderWidth=a.getMaxBorderWidth(c.data),i.outerRadius=Math.max((d-i.borderWidth)/2,0),i.innerRadius=Math.max(h?i.outerRadius/100*h:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),i.offsetX=u.x*i.outerRadius,i.offsetY=u.y*i.outerRadius,c.total=a.calculateTotal(),a.outerRadius=i.outerRadius-i.radiusLength*a.getRingIndex(a.index),a.innerRadius=a.outerRadius-i.radiusLength,e.each(c.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){var n=this,o=n.chart,r=o.chartArea,l=o.options,s=l.animation,d=(r.left+r.right)/2,u=(r.top+r.bottom)/2,c=l.rotation,h=l.rotation,f=n.getDataset(),g=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(f.data[a])*(l.circumference/(2*Math.PI)),p=i&&s.animateScale?0:n.innerRadius,m=i&&s.animateScale?0:n.outerRadius,b=e.getValueAtIndexOrDefault;e.extend(t,{_datasetIndex:n.index,_index:a,_model:{x:d+o.offsetX,y:u+o.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:m,innerRadius:p,label:b(f.label,a,o.data.labels[a])}});var v=t._model;this.removeHoverStyle(t),i&&s.animateRotate||(0===a?v.startAngle=l.rotation:v.startAngle=n.getMeta().data[a-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,a=this.getDataset(),i=this.getMeta(),n=0;return e.each(i.data,function(e,i){t=a.data[i],isNaN(t)||e.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,a,i=0,n=this.index,o=t.length,r=0;o>r;r++)e=t[r]._model?t[r]._model.borderWidth:0,a=t[r]._chart?t[r]._chart.config.data.datasets[n].hoverBorderWidth:0,i=e>i?e:i,i=a>i?a:i;return i}})}},{}],18:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return a.getValueOrDefault(t.showLine,e.showLines)}var a=t.helpers;t.defaults.line={showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}},t.controllers.line=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,update:function(t){var i,n,o,r=this,l=r.getMeta(),s=l.dataset,d=l.data||[],u=r.chart.options,c=u.elements.line,h=r.getScaleForId(l.yAxisID),f=r.getDataset(),g=e(f,u);for(g&&(o=s.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),s._scale=h,s._datasetIndex=r.index,s._children=d,s._model={spanGaps:f.spanGaps?f.spanGaps:u.spanGaps,tension:o.tension?o.tension:a.getValueOrDefault(f.lineTension,c.tension),backgroundColor:o.backgroundColor?o.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:o.borderWidth?o.borderWidth:f.borderWidth||c.borderWidth,borderColor:o.borderColor?o.borderColor:f.borderColor||c.borderColor,borderCapStyle:o.borderCapStyle?o.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:o.borderDash?o.borderDash:f.borderDash||c.borderDash,borderDashOffset:o.borderDashOffset?o.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:o.borderJoinStyle?o.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:o.fill?o.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:o.steppedLine?o.steppedLine:a.getValueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:o.cubicInterpolationMode?o.cubicInterpolationMode:a.getValueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode),scaleTop:h.top,scaleBottom:h.bottom,scaleZero:h.getBasePixel()},s.pivot()),i=0,n=d.length;n>i;++i)r.updateElement(d[i],i,t);for(g&&0!==s._model.tension&&r.updateBezierControlPoints(),i=0,n=d.length;n>i;++i)d[i].pivot()},getPointBackgroundColor:function(t,e){var i=this.chart.options.elements.point.backgroundColor,n=this.getDataset(),o=t.custom||{};return o.backgroundColor?i=o.backgroundColor:n.pointBackgroundColor?i=a.getValueAtIndexOrDefault(n.pointBackgroundColor,e,i):n.backgroundColor&&(i=n.backgroundColor),i},getPointBorderColor:function(t,e){var i=this.chart.options.elements.point.borderColor,n=this.getDataset(),o=t.custom||{};return o.borderColor?i=o.borderColor:n.pointBorderColor?i=a.getValueAtIndexOrDefault(n.pointBorderColor,e,i):n.borderColor&&(i=n.borderColor),i},getPointBorderWidth:function(t,e){var i=this.chart.options.elements.point.borderWidth,n=this.getDataset(),o=t.custom||{};return o.borderWidth?i=o.borderWidth:n.pointBorderWidth?i=a.getValueAtIndexOrDefault(n.pointBorderWidth,e,i):n.borderWidth&&(i=n.borderWidth),i},updateElement:function(t,e,i){var n,o,r=this,l=r.getMeta(),s=t.custom||{},d=r.getDataset(),u=r.index,c=d.data[e],h=r.getScaleForId(l.yAxisID),f=r.getScaleForId(l.xAxisID),g=r.chart.options.elements.point,p=r.chart.data.labels||[],m=1===p.length||1===d.data.length||r.chart.isCombo;void 0!==d.radius&&void 0===d.pointRadius&&(d.pointRadius=d.radius),void 0!==d.hitRadius&&void 0===d.pointHitRadius&&(d.pointHitRadius=d.hitRadius),n=f.getPixelForValue("object"==typeof c?c:NaN,e,u,m),o=i?h.getBasePixel():r.calculatePointY(c,e,u),t._xScale=f,t._yScale=h,t._datasetIndex=u,t._index=e,t._model={x:n,y:o,skip:s.skip||isNaN(n)||isNaN(o),radius:s.radius||a.getValueAtIndexOrDefault(d.pointRadius,e,g.radius),pointStyle:s.pointStyle||a.getValueAtIndexOrDefault(d.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,steppedLine:l.dataset._model?l.dataset._model.steppedLine:!1,hitRadius:s.hitRadius||a.getValueAtIndexOrDefault(d.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,a){var i,n,o,r=this,l=r.chart,s=r.getMeta(),d=r.getScaleForId(s.yAxisID),u=0,c=0;if(d.options.stacked){for(i=0;a>i;i++)if(n=l.data.datasets[i],o=l.getDatasetMeta(i),"line"===o.type&&o.yAxisID===d.id&&l.isDatasetVisible(i)){var h=Number(d.getRightValue(n.data[e]));0>h?c+=h||0:u+=h||0}var f=Number(d.getRightValue(t));return 0>f?d.getPixelForValue(c+f):d.getPixelForValue(u+f)}return d.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,a){return Math.max(Math.min(t,a),e)}var e,i,n,o,r,l=this,s=l.getMeta(),d=l.chart.chartArea,u=s.data||[];if(s.dataset._model.spanGaps&&(u=u.filter(function(t){return!t._model.skip})),"monotone"===s.dataset._model.cubicInterpolationMode)a.splineCurveMonotone(u);else for(e=0,i=u.length;i>e;++e)n=u[e],o=n._model,r=a.splineCurve(a.previousItem(u,e)._model,o,a.nextItem(u,e)._model,s.dataset._model.tension),o.controlPointPreviousX=r.previous.x,o.controlPointPreviousY=r.previous.y,o.controlPointNextX=r.next.x,o.controlPointNextY=r.next.y;if(l.chart.options.elements.line.capBezierPoints)for(e=0,i=u.length;i>e;++e)o=u[e]._model,o.controlPointPreviousX=t(o.controlPointPreviousX,d.left,d.right),o.controlPointPreviousY=t(o.controlPointPreviousY,d.top,d.bottom),o.controlPointNextX=t(o.controlPointNextX,d.left,d.right),o.controlPointNextY=t(o.controlPointNextY,d.top,d.bottom)},draw:function(t){var a,i,n=this,o=n.getMeta(),r=o.data||[],l=t||1;for(a=0,i=r.length;i>a;++a)r[a].transition(l);for(e(n.getDataset(),n.chart.options)&&o.dataset.transition(l).draw(),a=0,i=r.length;i>a;++a)r[a].draw()},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},o=t._model;o.radius=n.hoverRadius||a.getValueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),o.backgroundColor=n.hoverBackgroundColor||a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor,i,a.getHoverColor(o.backgroundColor)),o.borderColor=n.hoverBorderColor||a.getValueAtIndexOrDefault(e.pointHoverBorderColor,i,a.getHoverColor(o.borderColor)),o.borderWidth=n.hoverBorderWidth||a.getValueAtIndexOrDefault(e.pointHoverBorderWidth,i,o.borderWidth)},removeHoverStyle:function(t){var e=this,i=e.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=t._model;void 0!==i.radius&&void 0===i.pointRadius&&(i.pointRadius=i.radius),r.radius=o.radius||a.getValueAtIndexOrDefault(i.pointRadius,n,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,n),r.borderColor=e.getPointBorderColor(t,n),r.borderWidth=e.getPointBorderWidth(t,n)}})}},{}],19:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.polarArea={scale:{type:"radialLinear",lineArc:!0,ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,aspectRatio:1,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var a=t.data,i=a.datasets,n=a.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),n[o]&&e.push(n[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var a=t.data;return a.labels.length&&a.datasets.length?a.labels.map(function(i,n){var o=t.getDatasetMeta(0),r=a.datasets[0],l=o.data[n],s=l.custom||{},d=e.getValueAtIndexOrDefault,u=t.options.elements.arc,c=s.backgroundColor?s.backgroundColor:d(r.backgroundColor,n,u.backgroundColor),h=s.borderColor?s.borderColor:d(r.borderColor,n,u.borderColor),f=s.borderWidth?s.borderWidth:d(r.borderWidth,n,u.borderWidth);return{text:i,fillStyle:c,strokeStyle:h,lineWidth:f,hidden:isNaN(r.data[n])||o.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var a,i,n,o=e.index,r=this.chart;for(a=0,i=(r.data.datasets||[]).length;i>a;++a)n=r.getDatasetMeta(a),n.data[o].hidden=!n.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}},t.controllers.polarArea=t.DatasetController.extend({dataElementType:t.elements.Arc,linkScales:e.noop,update:function(t){var a=this,i=a.chart,n=i.chartArea,o=a.getMeta(),r=i.options,l=r.elements.arc,s=Math.min(n.right-n.left,n.bottom-n.top);i.outerRadius=Math.max((s-l.borderWidth/2)/2,0),i.innerRadius=Math.max(r.cutoutPercentage?i.outerRadius/100*r.cutoutPercentage:1,0),i.radiusLength=(i.outerRadius-i.innerRadius)/i.getVisibleDatasetCount(),a.outerRadius=i.outerRadius-i.radiusLength*a.index,a.innerRadius=a.outerRadius-i.radiusLength,o.count=a.countVisibleElements(),e.each(o.data,function(e,i){a.updateElement(e,i,t)})},updateElement:function(t,a,i){for(var n=this,o=n.chart,r=n.getDataset(),l=o.options,s=l.animation,d=o.scale,u=e.getValueAtIndexOrDefault,c=o.data.labels,h=n.calculateCircumference(r.data[a]),f=d.xCenter,g=d.yCenter,p=0,m=n.getMeta(),b=0;a>b;++b)isNaN(r.data[b])||m.data[b].hidden||++p;var v=l.startAngle,x=t.hidden?0:d.getDistanceFromCenterForValue(r.data[a]),y=v+h*p,k=y+(t.hidden?0:h),S=s.animateScale?0:d.getDistanceFromCenterForValue(r.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:d,_model:{x:f,y:g,innerRadius:0,outerRadius:i?S:x,startAngle:i&&s.animateRotate?v:y,endAngle:i&&s.animateRotate?v:k,label:u(c,a,c[a])}}),n.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),a=this.getMeta(),i=0;return e.each(a.data,function(e,a){isNaN(t.data[a])||e.hidden||i++}),i},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{}],20:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.radar={aspectRatio:1,scale:{type:"radialLinear"},elements:{line:{tension:0}}},t.controllers.radar=t.DatasetController.extend({datasetElementType:t.elements.Line,dataElementType:t.elements.Point,linkScales:e.noop,update:function(t){var a=this,i=a.getMeta(),n=i.dataset,o=i.data,r=n.custom||{},l=a.getDataset(),s=a.chart.options.elements.line,d=a.chart.scale;void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),e.extend(i.dataset,{_datasetIndex:a.index,_children:o,_loop:!0,_model:{tension:r.tension?r.tension:e.getValueOrDefault(l.lineTension,s.tension),backgroundColor:r.backgroundColor?r.backgroundColor:l.backgroundColor||s.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:l.borderWidth||s.borderWidth,borderColor:r.borderColor?r.borderColor:l.borderColor||s.borderColor,fill:r.fill?r.fill:void 0!==l.fill?l.fill:s.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:l.borderCapStyle||s.borderCapStyle,borderDash:r.borderDash?r.borderDash:l.borderDash||s.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:l.borderDashOffset||s.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:l.borderJoinStyle||s.borderJoinStyle,scaleTop:d.top,scaleBottom:d.bottom,scaleZero:d.getBasePosition()}}),i.dataset.pivot(),e.each(o,function(e,i){a.updateElement(e,i,t)},a),a.updateBezierControlPoints()},updateElement:function(t,a,i){var n=this,o=t.custom||{},r=n.getDataset(),l=n.chart.scale,s=n.chart.options.elements.point,d=l.getPointPositionForValue(a,r.data[a]);e.extend(t,{_datasetIndex:n.index,_index:a,_scale:l,_model:{x:i?l.xCenter:d.x,y:i?l.yCenter:d.y,tension:o.tension?o.tension:e.getValueOrDefault(r.tension,n.chart.options.elements.line.tension),radius:o.radius?o.radius:e.getValueAtIndexOrDefault(r.pointRadius,a,s.radius),backgroundColor:o.backgroundColor?o.backgroundColor:e.getValueAtIndexOrDefault(r.pointBackgroundColor,a,s.backgroundColor),borderColor:o.borderColor?o.borderColor:e.getValueAtIndexOrDefault(r.pointBorderColor,a,s.borderColor),borderWidth:o.borderWidth?o.borderWidth:e.getValueAtIndexOrDefault(r.pointBorderWidth,a,s.borderWidth),pointStyle:o.pointStyle?o.pointStyle:e.getValueAtIndexOrDefault(r.pointStyle,a,s.pointStyle),hitRadius:o.hitRadius?o.hitRadius:e.getValueAtIndexOrDefault(r.hitRadius,a,s.hitRadius)}}),t._model.skip=o.skip?o.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,a=this.getMeta();e.each(a.data,function(i,n){var o=i._model,r=e.splineCurve(e.previousItem(a.data,n,!0)._model,o,e.nextItem(a.data,n,!0)._model,o.tension);o.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),o.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),o.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),o.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),i.pivot()})},draw:function(t){var a=this.getMeta(),i=t||1;e.each(a.data,function(t){t.transition(i)}),a.dataset.transition(i).draw(),e.each(a.data,function(t){t.draw()})},setHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model;o.radius=i.hoverRadius?i.hoverRadius:e.getValueAtIndexOrDefault(a.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),o.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor,n,e.getHoverColor(o.backgroundColor)),o.borderColor=i.hoverBorderColor?i.hoverBorderColor:e.getValueAtIndexOrDefault(a.pointHoverBorderColor,n,e.getHoverColor(o.borderColor)),o.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:e.getValueAtIndexOrDefault(a.pointHoverBorderWidth,n,o.borderWidth)},removeHoverStyle:function(t){var a=this.chart.data.datasets[t._datasetIndex],i=t.custom||{},n=t._index,o=t._model,r=this.chart.options.elements.point;o.radius=i.radius?i.radius:e.getValueAtIndexOrDefault(a.radius,n,r.radius),o.backgroundColor=i.backgroundColor?i.backgroundColor:e.getValueAtIndexOrDefault(a.pointBackgroundColor,n,r.backgroundColor),o.borderColor=i.borderColor?i.borderColor:e.getValueAtIndexOrDefault(a.pointBorderColor,n,r.borderColor),o.borderWidth=i.borderWidth?i.borderWidth:e.getValueAtIndexOrDefault(a.pointBorderWidth,n,r.borderWidth)}})}},{}],21:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.animation={duration:1e3,easing:"easeOutQuart",onProgress:e.noop,onComplete:e.noop},t.Animation=t.Element.extend({currentStep:null,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,a,i){var n=this;i||(t.animating=!0);for(var o=0;o<n.animations.length;++o)if(n.animations[o].chartInstance===t)return void(n.animations[o].animationObject=e);n.animations.push({chartInstance:t,animationObject:e}),1===n.animations.length&&n.requestAnimationFrame()},cancelAnimation:function(t){var a=e.findIndex(this.animations,function(e){return e.chartInstance===t});-1!==a&&(this.animations.splice(a,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=e.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),a=0;t.dropFrames>1&&(a=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1);for(var i=0;i<t.animations.length;)null===t.animations[i].animationObject.currentStep&&(t.animations[i].animationObject.currentStep=0),t.animations[i].animationObject.currentStep+=1+a,t.animations[i].animationObject.currentStep>t.animations[i].animationObject.numSteps&&(t.animations[i].animationObject.currentStep=t.animations[i].animationObject.numSteps),t.animations[i].animationObject.render(t.animations[i].chartInstance,t.animations[i].animationObject),t.animations[i].animationObject.onAnimationProgress&&t.animations[i].animationObject.onAnimationProgress.call&&t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].animationObject.currentStep===t.animations[i].animationObject.numSteps?(t.animations[i].animationObject.onAnimationComplete&&t.animations[i].animationObject.onAnimationComplete.call&&t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance,t.animations[i]),t.animations[i].chartInstance.animating=!1,t.animations.splice(i,1)):++i;var n=Date.now(),o=(n-e)/t.frameDuration;t.dropFrames+=o,t.animations.length>0&&t.requestAnimationFrame()}}}},{}],22:[function(t,e,a){"use strict";e.exports=function(t){var e=t.canvasHelpers={};e.drawPoint=function(t,e,a,i,n){var o,r,l,s,d,u;if("object"==typeof e&&(o=e.toString(),"[object HTMLImageElement]"===o||"[object HTMLCanvasElement]"===o))return void t.drawImage(e,i-e.width/2,n-e.height/2);if(!(isNaN(a)||0>=a)){switch(e){default:t.beginPath(),t.arc(i,n,a,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),r=3*a/Math.sqrt(3),d=r*Math.sqrt(3)/2,t.moveTo(i-r/2,n+d/3),t.lineTo(i+r/2,n+d/3),t.lineTo(i,n-2*d/3),t.closePath(),t.fill();break;case"rect":u=1/Math.SQRT2*a,t.beginPath(),t.fillRect(i-u,n-u,2*u,2*u),t.strokeRect(i-u,n-u,2*u,2*u);break;case"rectRot":u=1/Math.SQRT2*a,t.beginPath(),t.moveTo(i-u,n),t.lineTo(i,n+u),t.lineTo(i+u,n),t.lineTo(i,n-u),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(i,n+a),t.lineTo(i,n-a),t.moveTo(i-a,n),t.lineTo(i+a,n),t.closePath();break;case"crossRot":t.beginPath(),l=Math.cos(Math.PI/4)*a,s=Math.sin(Math.PI/4)*a,t.moveTo(i-l,n-s),t.lineTo(i+l,n+s),t.moveTo(i-l,n+s),t.lineTo(i+l,n-s),t.closePath();break;case"star":t.beginPath(),t.moveTo(i,n+a),t.lineTo(i,n-a),t.moveTo(i-a,n),t.lineTo(i+a,n),l=Math.cos(Math.PI/4)*a,s=Math.sin(Math.PI/4)*a,t.moveTo(i-l,n-s),t.lineTo(i+l,n+s),t.moveTo(i-l,n+s),t.lineTo(i+l,n-s),t.closePath();break;case"line":t.beginPath(),t.moveTo(i-a,n),t.lineTo(i+a,n),t.closePath();break;case"dash":t.beginPath(),t.moveTo(i,n),t.lineTo(i+a,n),t.closePath()}t.stroke()}}}},{}],23:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){var a=r.getStyle(t,e),i=a&&a.match(/(\d+)px/);return i?Number(i[1]):void 0}function a(t,a){var i=t.style,n=t.getAttribute("height"),o=t.getAttribute("width");if(t._chartjs={initial:{height:n,width:o,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===o||""===o){var r=e(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(a.options.aspectRatio||2);else{var l=e(t,"height");void 0!==r&&(t.height=l)}return t}function i(t){if(t._chartjs){var e=t._chartjs.initial;["height","width"].forEach(function(a){var i=e[a];void 0===i||null===i?t.removeAttribute(a):t.setAttribute(a,i)}),r.each(e.style||{},function(e,a){t.style[a]=e}),t.width=t.width,delete t._chartjs}}function n(t,e){if("string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t instanceof HTMLCanvasElement){var i=t.getContext&&t.getContext("2d");if(i instanceof CanvasRenderingContext2D)return a(t,e),i}return null}function o(e){e=e||{};var a=e.data=e.data||{};return a.datasets=a.datasets||[],a.labels=a.labels||[],e.options=r.configMerge(t.defaults.global,t.defaults[e.type],e.options||{}),e}var r=t.helpers;t.types={},t.instances={},t.controllers={},t.Controller=function(e,a,i){var l=this;a=o(a);var s=n(e,a),d=s&&s.canvas,u=d&&d.height,c=d&&d.width;return i.ctx=s,i.canvas=d,i.config=a,i.width=c,i.height=u,i.aspectRatio=u?c/u:null,l.id=r.uid(),l.chart=i,l.config=a,l.options=a.options,l._bufferedRender=!1,t.instances[l.id]=l,Object.defineProperty(l,"data",{get:function(){return l.config.data}}),s&&d?(r.retinaScale(i),l.options.responsive&&(r.addResizeListener(d.parentNode,function(){l.resize()}),l.resize(!0)),l.initialize(),l):(console.error("Failed to create chart: can't acquire context from the given item"),l)},r.extend(t.Controller.prototype,{initialize:function(){var e=this;return t.plugins.notify("beforeInit",[e]),e.bindEvents(),e.ensureScalesHaveIDs(),e.buildOrUpdateControllers(),e.buildScales(),e.updateLayout(),e.resetElements(),e.initToolTip(),e.update(),t.plugins.notify("afterInit",[e]),e},clear:function(){return r.clear(this.chart),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(e){var a=this,i=a.chart,n=a.options,o=i.canvas,l=n.maintainAspectRatio&&i.aspectRatio||null,s=Math.floor(r.getMaximumWidth(o)),d=Math.floor(l?s/l:r.getMaximumHeight(o));if(i.width!==s||i.height!==d){o.width=i.width=s,o.height=i.height=d,o.style.width=s+"px",o.style.height=d+"px",r.retinaScale(i);var u={width:s,height:d};t.plugins.notify("resize",[a,u]),a.options.onResize&&a.options.onResize(a,u),e||(a.stop(),a.update(a.options.responsiveAnimationDuration))}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},a=t.scale;r.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),r.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),a&&(a.id=a.id||"scale")},buildScales:function(){var e=this,a=e.options,i=e.scales={},n=[];a.scales&&(n=n.concat((a.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category"}}),(a.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear"}}))),a.scale&&n.push({options:a.scale,dtype:"radialLinear",isDefault:!0}),r.each(n,function(a){var n=a.options,o=r.getValueOrDefault(n.type,a.dtype),l=t.scaleService.getScaleConstructor(o);if(l){var s=new l({id:n.id,options:n,ctx:e.chart.ctx,chart:e});i[s.id]=s,a.isDefault&&(e.scale=s)}}),t.scaleService.addScalesToLayout(this)},updateLayout:function(){t.layoutService.update(this,this.chart.width,this.chart.height)},buildOrUpdateControllers:function(){var e=this,a=[],i=[];if(r.each(e.data.datasets,function(n,o){var r=e.getDatasetMeta(o);r.type||(r.type=n.type||e.config.type),a.push(r.type),r.controller?r.controller.updateIndex(o):(r.controller=new t.controllers[r.type](e,o),i.push(r.controller))},e),a.length>1)for(var n=1;n<a.length;n++)if(a[n]!==a[n-1]){e.isCombo=!0;break}return i},resetElements:function(){var t=this;r.each(t.data.datasets,function(e,a){t.getDatasetMeta(a).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(e,a){var i=this;t.plugins.notify("beforeUpdate",[i]),i.tooltip._data=i.data;var n=i.buildOrUpdateControllers();r.each(i.data.datasets,function(t,e){i.getDatasetMeta(e).controller.buildOrUpdateElements()},i),t.layoutService.update(i,i.chart.width,i.chart.height),t.plugins.notify("afterScaleUpdate",[i]),r.each(n,function(t){t.reset()}),i.updateDatasets(),t.plugins.notify("afterUpdate",[i]),i._bufferedRender?i._bufferedRequest={lazy:a,duration:e}:i.render(e,a)},updateDatasets:function(){var e,a,i=this;if(t.plugins.notify("beforeDatasetsUpdate",[i])){for(e=0,a=i.data.datasets.length;a>e;++e)i.getDatasetMeta(e).controller.update();t.plugins.notify("afterDatasetsUpdate",[i])}},render:function(e,a){var i=this;t.plugins.notify("beforeRender",[i]);var n=i.options.animation;if(n&&("undefined"!=typeof e&&0!==e||"undefined"==typeof e&&0!==n.duration)){var o=new t.Animation;o.numSteps=(e||n.duration)/16.66,o.easing=n.easing,o.render=function(t,e){var a=r.easingEffects[e.easing],i=e.currentStep/e.numSteps,n=a(i);t.draw(n,i,e.currentStep)},o.onAnimationProgress=n.onProgress,o.onAnimationComplete=n.onComplete,t.animationService.addAnimation(i,o,e,a)}else i.draw(),n&&n.onComplete&&n.onComplete.call&&n.onComplete.call(i);return i},draw:function(e){var a=this,i=e||1;a.clear(),t.plugins.notify("beforeDraw",[a,i]),r.each(a.boxes,function(t){t.draw(a.chartArea)},a),a.scale&&a.scale.draw(),t.plugins.notify("beforeDatasetsDraw",[a,i]),r.each(a.data.datasets,function(t,i){a.isDatasetVisible(i)&&a.getDatasetMeta(i).controller.draw(e)},a,!0),t.plugins.notify("afterDatasetsDraw",[a,i]),a.tooltip.transition(i).draw(),t.plugins.notify("afterDraw",[a,i])},getElementAtEvent:function(e){return t.Interaction.modes.single(this,e)},getElementsAtEvent:function(e){return t.Interaction.modes.label(this,e,{intersect:!0})},getElementsAtXAxis:function(e){return t.Interaction.modes["x-axis"](this,e,{intersect:!0})},getElementsAtEventForMode:function(e,a,i){var n=t.Interaction.modes[a];return"function"==typeof n?n(this,e,i):[]},getDatasetAtEvent:function(e){return t.Interaction.modes.dataset(this,e)},getDatasetMeta:function(t){var e=this,a=e.data.datasets[t];a._meta||(a._meta={});
var i=a._meta[e.id];return i||(i=a._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,a=this.data.datasets.length;a>e;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroy:function(){var e,a,n,o=this,l=o.chart.canvas;for(o.stop(),a=0,n=o.data.datasets.length;n>a;++a)e=o.getDatasetMeta(a),e.controller&&(e.controller.destroy(),e.controller=null);l&&(r.unbindEvents(o,o.events),r.removeResizeListener(l.parentNode),r.clear(o.chart),i(l),o.chart.canvas=null,o.chart.ctx=null),t.plugins.notify("destroy",[o]),delete t.instances[o.id]},toBase64Image:function(){return this.chart.canvas.toDataURL.apply(this.chart.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e.chart,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e),e.tooltip.initialize()},bindEvents:function(){var t=this;r.bindEvents(t,t.options.events,function(e){t.eventHandler(e)})},updateHoverStyle:function(t,e,a){var i,n,o,r=a?"setHoverStyle":"removeHoverStyle";for(n=0,o=t.length;o>n;++n)i=t[n],i&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var e=this,a=e.legend,i=e.tooltip,n=e.options.hover;e._bufferedRender=!0,e._bufferedRequest=null;var o=e.handleEvent(t);o|=a&&a.handleEvent(t),o|=i&&i.handleEvent(t);var r=e._bufferedRequest;return r?e.render(r.duration,r.lazy):o&&!e.animating&&(e.stop(),e.render(n.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e},handleEvent:function(t){var e=this,a=e.options||{},i=a.hover,n=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,i.mode,i),i.onHover&&i.onHover.call(e,e.active),("mouseup"===t.type||"click"===t.type)&&a.onClick&&a.onClick.call(e,t,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,i.mode,!1),e.active.length&&i.mode&&e.updateHoverStyle(e.active,i.mode,!0),n=!r.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,n}})}},{}],24:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return t._chartjs?void t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),void n.forEach(function(e){var a="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=n.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[a]&&t[a].apply(t,e)}),o}})}))}function a(t,e){var a=t._chartjs;if(a){var i=a.listeners,o=i.indexOf(e);-1!==o&&i.splice(o,1),i.length>0||(n.forEach(function(e){delete t[e]}),delete t._chartjs)}}var i=t.helpers,n=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var a=this;a.chart=t,a.index=e,a.linkScales(),a.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),a=t.getDataset();null===e.xAxisID&&(e.xAxisID=a.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=a.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&a(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,a=e.dataElementType;return a&&new a({_chart:e.chart.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,a=this,i=a.getMeta(),n=a.getDataset().data||[],o=i.data;for(t=0,e=n.length;e>t;++t)o[t]=o[t]||a.createMetaData(t);i.dataset=i.dataset||a.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),n=i.data||(i.data=[]);t._data!==n&&(t._data&&a(t._data,t),e(n,t),t._data=n),t.resyncElements()},update:i.noop,draw:function(t){var e,a,i=t||1,n=this.getMeta().data;for(e=0,a=n.length;a>e;++e)n[e].transition(i).draw()},removeHoverStyle:function(t,e){var a=this.chart.data.datasets[t._datasetIndex],n=t._index,o=t.custom||{},r=i.getValueAtIndexOrDefault,l=t._model;l.backgroundColor=o.backgroundColor?o.backgroundColor:r(a.backgroundColor,n,e.backgroundColor),l.borderColor=o.borderColor?o.borderColor:r(a.borderColor,n,e.borderColor),l.borderWidth=o.borderWidth?o.borderWidth:r(a.borderWidth,n,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],a=t._index,n=t.custom||{},o=i.getValueAtIndexOrDefault,r=i.getHoverColor,l=t._model;l.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o(e.hoverBackgroundColor,a,r(l.backgroundColor)),l.borderColor=n.hoverBorderColor?n.hoverBorderColor:o(e.hoverBorderColor,a,r(l.borderColor)),l.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o(e.hoverBorderWidth,a,l.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),a=t.getDataset().data,i=e.data.length,n=a.length;i>n?e.data.splice(n,i-n):n>i&&t.insertElements(i,n-i)},insertElements:function(t,e){for(var a=0;e>a;++a)this.addElementAndReset(t+a)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{}],25:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.elements={},t.Element=function(t){e.extend(this,t),this.initialize.apply(this,arguments)},e.extend(t.Element.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=e.clone(t._model)),t._start=e.clone(t._view),t},transition:function(t){var a=this;return a._view||(a._view=e.clone(a._model)),1===t?(a._view=a._model,a._start=null,a):(a._start||a.pivot(),e.each(a._model,function(i,n){if("_"===n[0]);else if(a._view.hasOwnProperty(n))if(i===a._view[n]);else if("string"==typeof i)try{var o=e.color(a._model[n]).mix(e.color(a._start[n]),t);a._view[n]=o.rgbString()}catch(r){a._view[n]=i}else if("number"==typeof i){var l=void 0!==a._start[n]&&isNaN(a._start[n])===!1?a._start[n]:0;a._view[n]=(a._model[n]-l)*t+l}else a._view[n]=i;else"number"!=typeof i||isNaN(a._view[n])?a._view[n]=i:a._view[n]=i*t},a),a)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return e.isNumber(this._model.x)&&e.isNumber(this._model.y)}}),t.Element.extend=e.inherits}},{}],26:[function(t,e,a){"use strict";var i=t(3);e.exports=function(t){function e(t,e,a){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[a])):i=t,i}function a(t){return void 0!==t&&null!==t&&"none"!==t}function n(t,i,n){var o=document.defaultView,r=t.parentNode,l=o.getComputedStyle(t)[i],s=o.getComputedStyle(r)[i],d=a(l),u=a(s),c=Number.POSITIVE_INFINITY;return d||u?Math.min(d?e(l,t,n):c,u?e(s,r,n):c):"none"}var o=t.helpers={};o.each=function(t,e,a,i){var n,r;if(o.isArray(t))if(r=t.length,i)for(n=r-1;n>=0;n--)e.call(a,t[n],n);else for(n=0;r>n;n++)e.call(a,t[n],n);else if("object"==typeof t){var l=Object.keys(t);for(r=l.length,n=0;r>n;n++)e.call(a,t[l[n]],l[n])}},o.clone=function(t){var e={};return o.each(t,function(t,a){o.isArray(t)?e[a]=t.slice(0):"object"==typeof t&&null!==t?e[a]=o.clone(t):e[a]=t}),e},o.extend=function(t){for(var e=function(e,a){t[a]=e},a=1,i=arguments.length;i>a;a++)o.each(arguments[a],e);return t},o.configMerge=function(e){var a=o.clone(e);return o.each(Array.prototype.slice.call(arguments,1),function(e){o.each(e,function(e,i){var n=a.hasOwnProperty(i),r=n?a[i]:{};"scales"===i?a[i]=o.scaleMerge(r,e):"scale"===i?a[i]=o.configMerge(r,t.scaleService.getScaleDefaults(e.type),e):!n||"object"!=typeof r||o.isArray(r)||null===r||"object"!=typeof e||o.isArray(e)?a[i]=e:a[i]=o.configMerge(r,e)})}),a},o.scaleMerge=function(e,a){var i=o.clone(e);return o.each(a,function(e,a){"xAxes"===a||"yAxes"===a?i.hasOwnProperty(a)?o.each(e,function(e,n){var r=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear"),l=t.scaleService.getScaleDefaults(r);n>=i[a].length||!i[a][n].type?i[a].push(o.configMerge(l,e)):e.type&&e.type!==i[a][n].type?i[a][n]=o.configMerge(i[a][n],l,e):i[a][n]=o.configMerge(i[a][n],e)}):(i[a]=[],o.each(e,function(e){var n=o.getValueOrDefault(e.type,"xAxes"===a?"category":"linear");i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n),e))})):i.hasOwnProperty(a)&&"object"==typeof i[a]&&null!==i[a]&&"object"==typeof e?i[a]=o.configMerge(i[a],e):i[a]=e}),i},o.getValueAtIndexOrDefault=function(t,e,a){return void 0===t||null===t?a:o.isArray(t)?e<t.length?t[e]:a:t},o.getValueOrDefault=function(t,e){return void 0===t?e:t},o.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var a=0,i=t.length;i>a;++a)if(t[a]===e)return a;return-1},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var a=[];return o.each(t,function(t){e(t)&&a.push(t)}),a},o.findIndex=Array.prototype.findIndex?function(t,e,a){return t.findIndex(e,a)}:function(t,e,a){a=void 0===a?t:a;for(var i=0,n=t.length;n>i;++i)if(e.call(a,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,a){(void 0===a||null===a)&&(a=-1);for(var i=a+1;i<t.length;i++){var n=t[i];if(e(n))return n}},o.findPreviousWhere=function(t,e,a){(void 0===a||null===a)&&(a=t.length);for(var i=a-1;i>=0;i--){var n=t[i];if(e(n))return n}},o.inherits=function(t){var e=this,a=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},i=function(){this.constructor=a};return i.prototype=e.prototype,a.prototype=new i,a.extend=o.inherits,t&&o.extend(a.prototype,t),a.__super__=e.prototype,a},o.noop=function(){},o.uid=function(){var t=0;return function(){return t++}}(),o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,a){return Math.abs(t-e)<a},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return t=+t,0===t||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i),o=Math.atan2(i,a);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:n}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2===0?0:.5},o.splineCurve=function(t,e,a,i){var n=t.skip?e:t,o=e,r=a.skip?e:a,l=Math.sqrt(Math.pow(o.x-n.x,2)+Math.pow(o.y-n.y,2)),s=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),d=l/(l+s),u=s/(l+s);d=isNaN(d)?0:d,u=isNaN(u)?0:u;var c=i*d,h=i*u;return{previous:{x:o.x-c*(r.x-n.x),y:o.y-c*(r.y-n.y)},next:{x:o.x+h*(r.x-n.x),y:o.y+h*(r.y-n.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,a,i,n,r=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),l=r.length;for(e=0;l>e;++e)i=r[e],i.model.skip||(a=e>0?r[e-1]:null,n=l-1>e?r[e+1]:null,n&&!n.model.skip&&(i.deltaK=(n.model.y-i.model.y)/(n.model.x-i.model.x)),!a||a.model.skip?i.mK=i.deltaK:!n||n.model.skip?i.mK=a.deltaK:this.sign(a.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(a.deltaK+i.deltaK)/2);var s,d,u,c;for(e=0;l-1>e;++e)i=r[e],n=r[e+1],i.model.skip||n.model.skip||(o.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=n.mK=0:(s=i.mK/i.deltaK,d=n.mK/i.deltaK,c=Math.pow(s,2)+Math.pow(d,2),9>=c||(u=3/Math.sqrt(c),i.mK=s*u*i.deltaK,n.mK=d*u*i.deltaK)));var h;for(e=0;l>e;++e)i=r[e],i.model.skip||(a=e>0?r[e-1]:null,n=l-1>e?r[e+1]:null,a&&!a.model.skip&&(h=(i.model.x-a.model.x)/3,i.model.controlPointPreviousX=i.model.x-h,i.model.controlPointPreviousY=i.model.y-h*i.mK),n&&!n.model.skip&&(h=(n.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+h,i.model.controlPointNextY=i.model.y+h*i.mK))},o.nextItem=function(t,e,a){return a?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,a){return a?0>=e?t[t.length-1]:t[e-1]:0>=e?t[0]:t[e-1]},o.niceNum=function(t,e){var a,i=Math.floor(o.log10(t)),n=t/Math.pow(10,i);return a=e?1.5>n?1:3>n?2:7>n?5:10:1>=n?1:2>=n?2:5>=n?5:10,a*Math.pow(10,i)};var r=o.easingEffects={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-1*t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-0.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return 1*((t=t/1-1)*t*t+1)},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-1*((t=t/1-1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-0.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return 1*(t/=1)*t*t*t*t},easeOutQuint:function(t){return 1*((t=t/1-1)*t*t*t*t+1)},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return-1*Math.cos(t/1*(Math.PI/2))+1},easeOutSine:function(t){return 1*Math.sin(t/1*(Math.PI/2))},easeInOutSine:function(t){return-0.5*(Math.cos(Math.PI*t/1)-1)},easeInExpo:function(t){return 0===t?1:1*Math.pow(2,10*(t/1-1))},easeOutExpo:function(t){return 1===t?1:1*(-Math.pow(2,-10*t/1)+1)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return t>=1?t:-1*(Math.sqrt(1-(t/=1)*t)-1)},easeOutCirc:function(t){return 1*Math.sqrt(1-(t=t/1-1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-0.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),-(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)))},easeOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:1===(t/=1)?1:(a||(a=.3),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((1*t-e)*(2*Math.PI)/a)+1)},easeInOutElastic:function(t){var e=1.70158,a=0,i=1;return 0===t?0:2===(t/=.5)?1:(a||(a=1*(.3*1.5)),i<Math.abs(1)?(i=1,e=a/4):e=a/(2*Math.PI)*Math.asin(1/i),1>t?-.5*(i*Math.pow(2,10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)):i*Math.pow(2,-10*(t-=1))*Math.sin((1*t-e)*(2*Math.PI)/a)*.5+1)},easeInBack:function(t){var e=1.70158;return 1*(t/=1)*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return 1*((t=t/1-1)*t*((e+1)*t+e)+1)},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:function(t){return 1-r.easeOutBounce(1-t)},easeOutBounce:function(t){return(t/=1)<1/2.75?1*(7.5625*t*t):2/2.75>t?1*(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1*(7.5625*(t-=2.25/2.75)*t+.9375):1*(7.5625*(t-=2.625/2.75)*t+.984375)},easeInOutBounce:function(t){return.5>t?.5*r.easeInBounce(2*t):.5*r.easeOutBounce(2*t-1)+.5}};o.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.cancelAnimFrame=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t,1e3/60)}}(),o.getRelativePosition=function(t,e){var a,i,n=t.originalEvent||t,r=t.currentTarget||t.srcElement,l=r.getBoundingClientRect(),s=n.touches;s&&s.length>0?(a=s[0].clientX,i=s[0].clientY):(a=n.clientX,i=n.clientY);var d=parseFloat(o.getStyle(r,"padding-left")),u=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=l.right-l.left-d-c,g=l.bottom-l.top-u-h;return a=Math.round((a-l.left-d)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-l.top-u)/g*r.height/e.currentDevicePixelRatio),{x:a,y:i}},o.addEvent=function(t,e,a){t.addEventListener?t.addEventListener(e,a):t.attachEvent?t.attachEvent("on"+e,a):t["on"+e]=a},o.removeEvent=function(t,e,a){t.removeEventListener?t.removeEventListener(e,a,!1):t.detachEvent?t.detachEvent("on"+e,a):t["on"+e]=o.noop},o.bindEvents=function(t,e,a){var i=t.events=t.events||{};o.each(e,function(e){i[e]=function(){a.apply(t,arguments)},o.addEvent(t.chart.canvas,e,i[e])})},o.unbindEvents=function(t,e){var a=t.chart.canvas;o.each(e,function(t,e){o.removeEvent(a,e,t)})},o.getConstraintWidth=function(t){return n(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return n(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-left"),10),i=parseInt(o.getStyle(e,"padding-right"),10),n=e.clientWidth-a-i,r=o.getConstraintWidth(t);return isNaN(r)?n:Math.min(n,r)},o.getMaximumHeight=function(t){var e=t.parentNode,a=parseInt(o.getStyle(e,"padding-top"),10),i=parseInt(o.getStyle(e,"padding-bottom"),10),n=e.clientHeight-a-i,r=o.getConstraintHeight(t);return isNaN(r)?n:Math.min(n,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t){var e=t.currentDevicePixelRatio=window.devicePixelRatio||1;if(1!==e){var a=t.canvas,i=t.height,n=t.width;a.height=i*e,a.width=n*e,t.ctx.scale(e,e),a.style.height=i+"px",a.style.width=n+"px"}},o.clear=function(t){t.ctx.clearRect(0,0,t.width,t.height)},o.fontString=function(t,e,a){return e+" "+t+"px "+a},o.longestText=function(t,e,a,i){i=i||{};var n=i.data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(n=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var l=0;o.each(a,function(e){void 0!==e&&null!==e&&o.isArray(e)!==!0?l=o.measureText(t,n,r,l,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(l=o.measureText(t,n,r,l,e))})});var s=r.length/2;if(s>a.length){for(var d=0;s>d;d++)delete n[r[d]];r.splice(0,s)}return l},o.measureText=function(t,e,a,i,n){var o=e[n];return o||(o=e[n]=t.measureText(n).width,a.push(n)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.drawRoundedRectangle=function(t,e,a,i,n,o){t.beginPath(),t.moveTo(e+o,a),t.lineTo(e+i-o,a),t.quadraticCurveTo(e+i,a,e+i,a+o),t.lineTo(e+i,a+n-o),t.quadraticCurveTo(e+i,a+n,e+i-o,a+n),t.lineTo(e+o,a+n),t.quadraticCurveTo(e,a+n,e,a+n-o),t.lineTo(e,a+o),t.quadraticCurveTo(e,a,e+o,a),t.closePath()},o.color=function(e){return i?i(e instanceof CanvasGradient?t.defaults.global.defaultColor:e):(console.error("Color.js not found!"),e)},o.addResizeListener=function(t,e){var a=document.createElement("iframe");a.className="chartjs-hidden-iframe",a.style.cssText="display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",a.tabIndex=-1;var i=t._chartjs={resizer:a,ticking:!1},n=function(){i.ticking||(i.ticking=!0,o.requestAnimFrame.call(window,function(){return i.resizer?(i.ticking=!1,e()):void 0}))};o.addEvent(a,"load",function(){o.addEvent(a.contentWindow||a,"resize",n),n()}),t.insertBefore(a,t.firstChild)},o.removeResizeListener=function(t){if(t&&t._chartjs){var e=t._chartjs.resizer;e&&(e.parentNode.removeChild(e),t._chartjs.resizer=null),delete t._chartjs}},o.isArray=Array.isArray?function(t){return Array.isArray(t)}:function(t){return"[object Array]"===Object.prototype.toString.call(t)},o.arrayEquals=function(t,e){var a,i,n,r;if(!t||!e||t.length!==e.length)return!1;for(a=0,i=t.length;i>a;++a)if(n=t[a],r=e[a],n instanceof Array&&r instanceof Array){if(!o.arrayEquals(n,r))return!1}else if(n!==r)return!1;return!0},o.callCallback=function(t,e,a){t&&"function"==typeof t.call&&t.apply(a,e)},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{3:3}],27:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){var a,i,n,o,r,l=t.data.datasets;for(i=0,o=l.length;o>i;++i)if(t.isDatasetVisible(i))for(a=t.getDatasetMeta(i),n=0,r=a.data.length;r>n;++n){var s=a.data[n];s._view.skip||e(s)}}function a(t,a){var i=[];return e(t,function(t){t.inRange(a.x,a.y)&&i.push(t)}),i}function i(t,a,i,n){var r=Number.POSITIVE_INFINITY,l=[];return n||(n=o.distanceBetweenPoints),e(t,function(t){if(!i||t.inRange(a.x,a.y)){var e=t.getCenterPoint(),o=n(a,e);r>o?(l=[t],r=o):o===r&&l.push(t)}}),l}function n(t,e,n){var r=o.getRelativePosition(e,t.chart),l=function(t,e){return Math.abs(t.x-e.x)},s=n.intersect?a(t,r):i(t,r,!1,l),d=[];return s.length?(t.data.datasets.forEach(function(e,a){if(t.isDatasetVisible(a)){var i=t.getDatasetMeta(a),n=i.data[s[0]._index];n&&!n._view.skip&&d.push(n)}}),d):[]}var o=t.helpers;t.Interaction={modes:{single:function(t,a){var i=o.getRelativePosition(a,t.chart),n=[];return e(t,function(t){return t.inRange(i.x,i.y)?(n.push(t),n):void 0}),n.slice(0,1)},label:n,index:n,dataset:function(t,e,n){var r=o.getRelativePosition(e,t.chart),l=n.intersect?a(t,r):i(t,r,!1);return l.length>0&&(l=t.getDatasetMeta(l[0]._datasetIndex).data),l},"x-axis":function(t,e){return n(t,e,!0)},point:function(t,e){var i=o.getRelativePosition(e,t.chart);return a(t,i)},nearest:function(t,e,a){var n=o.getRelativePosition(e,t.chart),r=i(t,n,a.intersect);return r.length>1&&r.sort(function(t,e){var a=t.getArea(),i=e.getArea(),n=a-i;return 0===n&&(n=t._datasetIndex-e._datasetIndex),n}),r.slice(0,1)},x:function(t,a,i){var n=o.getRelativePosition(a,t.chart),r=[],l=!1;return e(t,function(t){t.inXRange(n.x)&&r.push(t),t.inRange(n.x,n.y)&&(l=!0)}),i.intersect&&!l&&(r=[]),r},y:function(t,a,i){var n=o.getRelativePosition(a,t.chart),r=[],l=!1;return e(t,function(t){t.inYRange(n.y)&&r.push(t),t.inRange(n.x,n.y)&&(l=!0)}),i.intersect&&!l&&(r=[]),r}}}}},{}],28:[function(t,e,a){"use strict";e.exports=function(){var t=function(e,a){return this.controller=new t.Controller(e,a,this),this.controller};return t.defaults={global:{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var a=0;a<t.data.datasets.length;a++)e.push('<li><span style="background-color:'+t.data.datasets[a].backgroundColor+'"></span>'),t.data.datasets[a].label&&e.push(t.data.datasets[a].label),e.push("</li>");return e.push("</ul>"),e.join("")}}},t.Chart=t,t}},{}],29:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),t.boxes.push(e)},removeBox:function(t,e){t.boxes&&t.boxes.splice(t.boxes.indexOf(e),1)},update:function(t,a,i){function n(t){var e,a=t.isHorizontal();a?(e=t.update(t.options.fullWidth?x:C,M),D-=e.height):(e=t.update(w,S),C-=e.width),I.push({horizontal:a,minSize:e,box:t})}function o(t){var a=e.findNextWhere(I,function(e){return e.box===t});if(a)if(t.isHorizontal()){var i={left:A,right:T,top:0,bottom:0};t.update(t.options.fullWidth?x:C,y/2,i)}else t.update(a.minSize.width,D)}function r(t){var a=e.findNextWhere(I,function(e){return e.box===t}),i={left:0,right:0,top:P,bottom:F};a&&t.update(a.minSize.width,D,i)}function l(t){t.isHorizontal()?(t.left=t.options.fullWidth?u:A,t.right=t.options.fullWidth?a-c:A+C,t.top=L,t.bottom=L+t.height,L=t.bottom):(t.left=V,t.right=V+t.width,t.top=P,t.bottom=P+D,V=t.right)}if(t){var s=t.options.layout,d=s?s.padding:null,u=0,c=0,h=0,f=0;isNaN(d)?(u=d.left||0,c=d.right||0,h=d.top||0,f=d.bottom||0):(u=d,c=d,h=d,f=d);var g=e.where(t.boxes,function(t){return"left"===t.options.position}),p=e.where(t.boxes,function(t){return"right"===t.options.position}),m=e.where(t.boxes,function(t){return"top"===t.options.position}),b=e.where(t.boxes,function(t){return"bottom"===t.options.position}),v=e.where(t.boxes,function(t){return"chartArea"===t.options.position});m.sort(function(t,e){return(e.options.fullWidth?1:0)-(t.options.fullWidth?1:0)}),b.sort(function(t,e){return(t.options.fullWidth?1:0)-(e.options.fullWidth?1:0)});var x=a-u-c,y=i-h-f,k=x/2,S=y/2,w=(a-k)/(g.length+p.length),M=(i-S)/(m.length+b.length),C=x,D=y,I=[];e.each(g.concat(p,m,b),n);var A=u,T=c,P=h,F=f;e.each(g.concat(p),o),e.each(g,function(t){A+=t.width}),e.each(p,function(t){T+=t.width}),e.each(m.concat(b),o),e.each(m,function(t){P+=t.height}),e.each(b,function(t){F+=t.height}),e.each(g.concat(p),r),A=u,T=c,P=h,F=f,e.each(g,function(t){A+=t.width}),e.each(p,function(t){T+=t.width}),e.each(m,function(t){P+=t.height}),e.each(b,function(t){F+=t.height});var _=i-P-F,R=a-A-T;(R!==C||_!==D)&&(e.each(g,function(t){t.height=_}),e.each(p,function(t){t.height=_}),e.each(m,function(t){t.options.fullWidth||(t.width=R)}),e.each(b,function(t){t.options.fullWidth||(t.width=R)}),D=_,C=R);var V=u,L=h;e.each(g.concat(m),l),V+=C,L+=D,e.each(p,l),e.each(b,l),t.chartArea={left:A,top:P,right:A+C,bottom:P+D},e.each(v,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(C,D)})}}}}},{}],30:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}var a=t.helpers,i=a.noop;t.defaults.global.legend={display:!0,position:"top",fullWidth:!0,reverse:!1,onClick:function(t,e){var a=e.datasetIndex,i=this.chart,n=i.getDatasetMeta(a);n.hidden=null===n.hidden?!i.data.datasets[a].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return a.isArray(e.datasets)?e.datasets.map(function(e,i){return{text:e.label,fillStyle:a.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(i),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:i}},this):[]}}},t.Legend=t.Element.extend({initialize:function(t){a.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:i,update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:i,beforeSetDimensions:i,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:i,beforeBuildLabels:i,buildLabels:function(){var t=this;t.legendItems=t.options.labels.generateLabels.call(t,t.chart),t.options.reverse&&t.legendItems.reverse()},afterBuildLabels:i,beforeFit:i,fit:function(){var i=this,n=i.options,o=n.labels,r=n.display,l=i.ctx,s=t.defaults.global,d=a.getValueOrDefault,u=d(o.fontSize,s.defaultFontSize),c=d(o.fontStyle,s.defaultFontStyle),h=d(o.fontFamily,s.defaultFontFamily),f=a.fontString(u,c,h),g=i.legendHitBoxes=[],p=i.minSize,m=i.isHorizontal();if(m?(p.width=i.maxWidth,p.height=r?10:0):(p.width=r?10:0,p.height=i.maxHeight),r)if(l.font=f,m){var b=i.lineWidths=[0],v=i.legendItems.length?u+o.padding:0;l.textAlign="left",l.textBaseline="top",a.each(i.legendItems,function(t,a){var n=e(o,u),r=n+u/2+l.measureText(t.text).width;b[b.length-1]+r+o.padding>=i.width&&(v+=u+o.padding,b[b.length]=i.left),g[a]={left:0,top:0,width:r,height:u},b[b.length-1]+=r+o.padding}),p.height+=v}else{var x=o.padding,y=i.columnWidths=[],k=o.padding,S=0,w=0,M=u+x;a.each(i.legendItems,function(t,a){var i=e(o,u),n=i+u/2+l.measureText(t.text).width;w+M>p.height&&(k+=S+o.padding,y.push(S),S=0,w=0),S=Math.max(S,n),w+=M,g[a]={left:0,top:0,width:n,height:u}}),k+=S,y.push(S),p.width+=k}i.width=p.width,i.height=p.height},afterFit:i,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var i=this,n=i.options,o=n.labels,r=t.defaults.global,l=r.elements.line,s=i.width,d=i.lineWidths;if(n.display){var u,c=i.ctx,h=a.getValueOrDefault,f=h(o.fontColor,r.defaultFontColor),g=h(o.fontSize,r.defaultFontSize),p=h(o.fontStyle,r.defaultFontStyle),m=h(o.fontFamily,r.defaultFontFamily),b=a.fontString(g,p,m);c.textAlign="left",c.textBaseline="top",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=b;var v=e(o,g),x=i.legendHitBoxes,y=function(e,a,i){if(!(isNaN(v)||0>=v)){c.save(),c.fillStyle=h(i.fillStyle,r.defaultColor),c.lineCap=h(i.lineCap,l.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,l.borderDashOffset),c.lineJoin=h(i.lineJoin,l.borderJoinStyle),c.lineWidth=h(i.lineWidth,l.borderWidth),c.strokeStyle=h(i.strokeStyle,r.defaultColor);var o=0===h(i.lineWidth,l.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,l.borderDash)),n.labels&&n.labels.usePointStyle){var s=g*Math.SQRT2/2,d=s/Math.SQRT2,u=e+d,f=a+d;t.canvasHelpers.drawPoint(c,i.pointStyle,s,u,f)}else o||c.strokeRect(e,a,v,g),c.fillRect(e,a,v,g);c.restore()}},k=function(t,e,a,i){c.fillText(a.text,v+g/2+t,e),a.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(v+g/2+t,e+g/2),c.lineTo(v+g/2+t+i,e+g/2),c.stroke())},S=i.isHorizontal();u=S?{x:i.left+(s-d[0])/2,y:i.top+o.padding,line:0}:{x:i.left+o.padding,y:i.top+o.padding,line:0};var w=g+o.padding;a.each(i.legendItems,function(t,e){var a=c.measureText(t.text).width,n=v+g/2+a,r=u.x,l=u.y;S?r+n>=s&&(l=u.y+=w,u.line++,r=u.x=i.left+(s-d[u.line])/2):l+w>i.bottom&&(r=u.x=r+i.columnWidths[u.line]+o.padding,l=u.y=i.top,u.line++),y(r,l,t),x[e].left=r,x[e].top=l,k(r,l,t,a),S?u.x+=n+o.padding:u.y+=w})}},handleEvent:function(t){var e=this,i=e.options,n="mouseup"===t.type?"click":t.type,o=!1;if("mousemove"===n){if(!i.onHover)return}else{if("click"!==n)return;if(!i.onClick)return}var r=a.getRelativePosition(t,e.chart.chart),l=r.x,s=r.y;if(l>=e.left&&l<=e.right&&s>=e.top&&s<=e.bottom)for(var d=e.legendHitBoxes,u=0;u<d.length;++u){var c=d[u];if(l>=c.left&&l<=c.left+c.width&&s>=c.top&&s<=c.top+c.height){if("click"===n){i.onClick.call(e,t,e.legendItems[u]),o=!0;break}if("mousemove"===n){i.onHover.call(e,t,e.legendItems[u]),o=!0;break}}}return o}}),t.plugins.register({beforeInit:function(e){var a=e.options,i=a.legend;i&&(e.legend=new t.Legend({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.legend))}})}},{}],31:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers.noop;t.plugins={_plugins:[],register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)})},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var a=e.indexOf(t);-1!==a&&e.splice(a,1)})},clear:function(){this._plugins=[]},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e){var a,i,n=this._plugins,o=n.length;
for(a=0;o>a;++a)if(i=n[a],"function"==typeof i[t]&&i[t].apply(i,e||[])===!1)return!1;return!0}},t.PluginBase=t.Element.extend({beforeInit:e,afterInit:e,beforeUpdate:e,afterUpdate:e,beforeDraw:e,afterDraw:e,destroy:e}),t.pluginService=t.plugins}},{}],32:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.scale={display:!0,position:"left",gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{labelString:"",display:!1},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:10,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:t.Ticks.formatters.values}},t.Scale=t.Element.extend({beforeUpdate:function(){e.callCallback(this.options.beforeUpdate,[this])},update:function(t,a,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=a,n.margins=e.extend({left:0,right:0,top:0,bottom:0},i),n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeDataLimits(),n.determineDataLimits(),n.afterDataLimits(),n.beforeBuildTicks(),n.buildTicks(),n.afterBuildTicks(),n.beforeTickToLabelConversion(),n.convertTicksToLabels(),n.afterTickToLabelConversion(),n.beforeCalculateTickRotation(),n.calculateTickRotation(),n.afterCalculateTickRotation(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:function(){e.callCallback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){e.callCallback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){e.callCallback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){e.callCallback(this.options.beforeDataLimits,[this])},determineDataLimits:e.noop,afterDataLimits:function(){e.callCallback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){e.callCallback(this.options.beforeBuildTicks,[this])},buildTicks:e.noop,afterBuildTicks:function(){e.callCallback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){e.callCallback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback)},afterTickToLabelConversion:function(){e.callCallback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){e.callCallback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var a=this,i=a.ctx,n=t.defaults.global,o=a.options.ticks,r=e.getValueOrDefault(o.fontSize,n.defaultFontSize),l=e.getValueOrDefault(o.fontStyle,n.defaultFontStyle),s=e.getValueOrDefault(o.fontFamily,n.defaultFontFamily),d=e.fontString(r,l,s);i.font=d;var u,c=i.measureText(a.ticks[0]).width,h=i.measureText(a.ticks[a.ticks.length-1]).width;if(a.labelRotation=o.minRotation||0,a.paddingRight=0,a.paddingLeft=0,a.options.display&&a.isHorizontal()){a.paddingRight=h/2+3,a.paddingLeft=c/2+3,a.longestTextCache||(a.longestTextCache={});for(var f,g,p=e.longestText(i,d,a.ticks,a.longestTextCache),m=p,b=a.getPixelForTick(1)-a.getPixelForTick(0)-6;m>b&&a.labelRotation<o.maxRotation;){if(f=Math.cos(e.toRadians(a.labelRotation)),g=Math.sin(e.toRadians(a.labelRotation)),u=f*c,u+r/2>a.yLabelWidth&&(a.paddingLeft=u+r/2),a.paddingRight=r/2,g*p>a.maxHeight){a.labelRotation--;break}a.labelRotation++,m=f*p}}a.margins&&(a.paddingLeft=Math.max(a.paddingLeft-a.margins.left,0),a.paddingRight=Math.max(a.paddingRight-a.margins.right,0))},afterCalculateTickRotation:function(){e.callCallback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){e.callCallback(this.options.beforeFit,[this])},fit:function(){var a=this,i=a.minSize={width:0,height:0},n=a.options,o=t.defaults.global,r=n.ticks,l=n.scaleLabel,s=n.gridLines,d=n.display,u=a.isHorizontal(),c=e.getValueOrDefault(r.fontSize,o.defaultFontSize),h=e.getValueOrDefault(r.fontStyle,o.defaultFontStyle),f=e.getValueOrDefault(r.fontFamily,o.defaultFontFamily),g=e.fontString(c,h,f),p=e.getValueOrDefault(l.fontSize,o.defaultFontSize),m=n.gridLines.tickMarkLength;if(u?i.width=a.isFullWidth()?a.maxWidth-a.margins.left-a.margins.right:a.maxWidth:i.width=d&&s.drawTicks?m:0,u?i.height=d&&s.drawTicks?m:0:i.height=a.maxHeight,l.display&&d&&(u?i.height+=1.5*p:i.width+=1.5*p),r.display&&d){a.longestTextCache||(a.longestTextCache={});var b=e.longestText(a.ctx,g,a.ticks,a.longestTextCache),v=e.numberOfLabelLines(a.ticks),x=.5*c;if(u){a.longestLabelWidth=b;var y=Math.sin(e.toRadians(a.labelRotation))*a.longestLabelWidth+c*v+x*v;i.height=Math.min(a.maxHeight,i.height+y),a.ctx.font=g;var k=a.ctx.measureText(a.ticks[0]).width,S=a.ctx.measureText(a.ticks[a.ticks.length-1]).width,w=Math.cos(e.toRadians(a.labelRotation)),M=Math.sin(e.toRadians(a.labelRotation));a.paddingLeft=0!==a.labelRotation?w*k+3:k/2+3,a.paddingRight=0!==a.labelRotation?M*(c/2)+3:S/2+3}else{var C=a.maxWidth-i.width,D=r.mirror;D?b=0:b+=a.options.ticks.padding,C>b?i.width+=b:i.width=a.maxWidth,a.paddingTop=c/2,a.paddingBottom=c/2}}a.margins&&(a.paddingLeft=Math.max(a.paddingLeft-a.margins.left,0),a.paddingTop=Math.max(a.paddingTop-a.margins.top,0),a.paddingRight=Math.max(a.paddingRight-a.margins.right,0),a.paddingBottom=Math.max(a.paddingBottom-a.margins.bottom,0)),a.width=i.width,a.height=i.height},afterFit:function(){e.callCallback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){return null===t||"undefined"==typeof t?NaN:"number"!=typeof t||isFinite(t)?"object"==typeof t?t instanceof Date||t.isValid?t:this.getRightValue(this.isHorizontal()?t.x:t.y):t:NaN},getLabelForIndex:e.noop,getPixelForValue:e.noop,getValueForPixel:e.noop,getPixelForTick:function(t,e){var a=this;if(a.isHorizontal()){var i=a.width-(a.paddingLeft+a.paddingRight),n=i/Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),o=n*t+a.paddingLeft;e&&(o+=n/2);var r=a.left+Math.round(o);return r+=a.isFullWidth()?a.margins.left:0}var l=a.height-(a.paddingTop+a.paddingBottom);return a.top+t*(l/(a.ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var a=e.width-(e.paddingLeft+e.paddingRight),i=a*t+e.paddingLeft,n=e.left+Math.round(i);return n+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){var t=this,e=t.min,a=t.max;return t.getPixelForValue(t.beginAtZero?0:0>e&&0>a?a:e>0&&a>0?e:0)},draw:function(a){var i=this,n=i.options;if(n.display){var o,r,l=i.ctx,s=t.defaults.global,d=n.ticks,u=n.gridLines,c=n.scaleLabel,h=0!==i.labelRotation,f=d.autoSkip,g=i.isHorizontal();d.maxTicksLimit&&(r=d.maxTicksLimit);var p=e.getValueOrDefault(d.fontColor,s.defaultFontColor),m=e.getValueOrDefault(d.fontSize,s.defaultFontSize),b=e.getValueOrDefault(d.fontStyle,s.defaultFontStyle),v=e.getValueOrDefault(d.fontFamily,s.defaultFontFamily),x=e.fontString(m,b,v),y=u.tickMarkLength,k=e.getValueOrDefault(u.borderDash,s.borderDash),S=e.getValueOrDefault(u.borderDashOffset,s.borderDashOffset),w=e.getValueOrDefault(c.fontColor,s.defaultFontColor),M=e.getValueOrDefault(c.fontSize,s.defaultFontSize),C=e.getValueOrDefault(c.fontStyle,s.defaultFontStyle),D=e.getValueOrDefault(c.fontFamily,s.defaultFontFamily),I=e.fontString(M,C,D),A=e.toRadians(i.labelRotation),T=Math.cos(A),P=i.longestLabelWidth*T;l.fillStyle=p;var F=[];if(g){if(o=!1,h&&(P/=2),(P+d.autoSkipPadding)*i.ticks.length>i.width-(i.paddingLeft+i.paddingRight)&&(o=1+Math.floor((P+d.autoSkipPadding)*i.ticks.length/(i.width-(i.paddingLeft+i.paddingRight)))),r&&i.ticks.length>r)for(;!o||i.ticks.length/(o||1)>r;)o||(o=1),o+=1;f||(o=!1)}var _="right"===n.position?i.left:i.right-y,R="right"===n.position?i.left+y:i.right,V="bottom"===n.position?i.top:i.bottom-y,L="bottom"===n.position?i.top+y:i.bottom;if(e.each(i.ticks,function(t,r){if(void 0!==t&&null!==t){var l=i.ticks.length===r+1,s=o>1&&r%o>0||r%o===0&&r+o>=i.ticks.length;if((!s||l)&&void 0!==t&&null!==t){var c,f;r===("undefined"!=typeof i.zeroLineIndex?i.zeroLineIndex:0)?(c=u.zeroLineWidth,f=u.zeroLineColor):(c=e.getValueAtIndexOrDefault(u.lineWidth,r),f=e.getValueAtIndexOrDefault(u.color,r));var p,m,b,v,x,w,M,C,D,I,T="middle",P="middle";if(g){h||(P="top"===n.position?"bottom":"top"),T=h?"right":"center";var O=i.getPixelForTick(r)+e.aliasPixel(c);D=i.getPixelForTick(r,u.offsetGridLines)+d.labelOffset,I=h?i.top+12:"top"===n.position?i.bottom-y:i.top+y,p=b=x=M=O,m=V,v=L,w=a.top,C=a.bottom}else{"left"===n.position?d.mirror?(D=i.right+d.padding,T="left"):(D=i.right-d.padding,T="right"):d.mirror?(D=i.left-d.padding,T="right"):(D=i.left+d.padding,T="left");var B=i.getPixelForTick(r);B+=e.aliasPixel(c),I=i.getPixelForTick(r,u.offsetGridLines),p=_,b=R,x=a.left,M=a.right,m=v=w=C=B}F.push({tx1:p,ty1:m,tx2:b,ty2:v,x1:x,y1:w,x2:M,y2:C,labelX:D,labelY:I,glWidth:c,glColor:f,glBorderDash:k,glBorderDashOffset:S,rotation:-1*A,label:t,textBaseline:P,textAlign:T})}}}),e.each(F,function(t){if(u.display&&(l.save(),l.lineWidth=t.glWidth,l.strokeStyle=t.glColor,l.setLineDash&&(l.setLineDash(t.glBorderDash),l.lineDashOffset=t.glBorderDashOffset),l.beginPath(),u.drawTicks&&(l.moveTo(t.tx1,t.ty1),l.lineTo(t.tx2,t.ty2)),u.drawOnChartArea&&(l.moveTo(t.x1,t.y1),l.lineTo(t.x2,t.y2)),l.stroke(),l.restore()),d.display){l.save(),l.translate(t.labelX,t.labelY),l.rotate(t.rotation),l.font=x,l.textBaseline=t.textBaseline,l.textAlign=t.textAlign;var a=t.label;if(e.isArray(a))for(var i=0,n=-(a.length-1)*m*.75;i<a.length;++i)l.fillText(""+a[i],0,n),n+=1.5*m;else l.fillText(a,0,0);l.restore()}}),c.display){var O,B,W=0;if(g)O=i.left+(i.right-i.left)/2,B="bottom"===n.position?i.bottom-M/2:i.top+M/2;else{var z="left"===n.position;O=z?i.left+M/2:i.right-M/2,B=i.top+(i.bottom-i.top)/2,W=z?-.5*Math.PI:.5*Math.PI}l.save(),l.translate(O,B),l.rotate(W),l.textAlign="center",l.textBaseline="middle",l.fillStyle=w,l.font=I,l.fillText(c.labelString,0,0),l.restore()}if(u.drawBorder){l.lineWidth=e.getValueAtIndexOrDefault(u.lineWidth,0),l.strokeStyle=e.getValueAtIndexOrDefault(u.color,0);var N=i.left,E=i.right,H=i.top,U=i.bottom,j=e.aliasPixel(l.lineWidth);g?(H=U="top"===n.position?i.bottom:i.top,H+=j,U+=j):(N=E="left"===n.position?i.right:i.left,N+=j,E+=j),l.beginPath(),l.moveTo(N,H),l.lineTo(E,U),l.stroke()}}}})}},{}],33:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,a,i){this.constructors[t]=a,this.defaults[t]=e.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(a){return this.defaults.hasOwnProperty(a)?e.scaleMerge(t.defaults.scale,this.defaults[a]):{}},updateScaleDefaults:function(t,a){var i=this.defaults;i.hasOwnProperty(t)&&(i[t]=e.extend(i[t],a))},addScalesToLayout:function(a){e.each(a.scales,function(e){t.layoutService.addBox(a,e)})}}}},{}],34:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.Ticks={generators:{linear:function(t,a){var i,n=[];if(t.stepSize&&t.stepSize>0)i=t.stepSize;else{var o=e.niceNum(a.max-a.min,!1);i=e.niceNum(o/(t.maxTicks-1),!0)}var r=Math.floor(a.min/i)*i,l=Math.ceil(a.max/i)*i;if(t.min&&t.max&&t.stepSize){var s=(t.max-t.min)%t.stepSize===0;s&&(r=t.min,l=t.max)}var d=(l-r)/i;d=e.almostEquals(d,Math.round(d),i/1e3)?Math.round(d):Math.ceil(d),n.push(void 0!==t.min?t.min:r);for(var u=1;d>u;++u)n.push(r+u*i);return n.push(void 0!==t.max?t.max:l),n},logarithmic:function(t,a){for(var i=[],n=e.getValueOrDefault,o=n(t.min,Math.pow(10,Math.floor(e.log10(a.min))));o<a.max;){i.push(o);var r,l;0===o?(r=Math.floor(e.log10(a.minNotZero)),l=Math.round(a.minNotZero/Math.pow(10,r))):(r=Math.floor(e.log10(o)),l=Math.floor(o/Math.pow(10,r))+1),10===l&&(l=1,++r),o=l*Math.pow(10,r)}var s=n(t.max,o);return i.push(s),i}},formatters:{values:function(t){return e.isArray(t)?t:""+t},linear:function(t,a,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var o=e.log10(Math.abs(n)),r="";if(0!==t){var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,a,i){var n=t/Math.pow(10,Math.floor(e.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===a||a===i.length-1?t.toExponential():""}}}}},{}],35:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers;t.defaults.global.title={display:!1,position:"top",fullWidth:!0,fontStyle:"bold",padding:10,text:""};var a=e.noop;t.Title=t.Element.extend({initialize:function(a){var i=this;e.extend(i,a),i.options=e.configMerge(t.defaults.global.title,a.options),i.legendHitBoxes=[]},beforeUpdate:function(){var a=this.chart.options;a&&a.title&&(this.options=e.configMerge(t.defaults.global.title,a.title))},update:function(t,e,a){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=a,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:a,beforeSetDimensions:a,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:a,beforeBuildLabels:a,buildLabels:a,afterBuildLabels:a,beforeFit:a,fit:function(){var a=this,i=e.getValueOrDefault,n=a.options,o=t.defaults.global,r=n.display,l=i(n.fontSize,o.defaultFontSize),s=a.minSize;a.isHorizontal()?(s.width=a.maxWidth,s.height=r?l+2*n.padding:0):(s.width=r?l+2*n.padding:0,s.height=a.maxHeight),a.width=s.width,a.height=s.height},afterFit:a,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var a=this,i=a.ctx,n=e.getValueOrDefault,o=a.options,r=t.defaults.global;if(o.display){var l,s,d,u=n(o.fontSize,r.defaultFontSize),c=n(o.fontStyle,r.defaultFontStyle),h=n(o.fontFamily,r.defaultFontFamily),f=e.fontString(u,c,h),g=0,p=a.top,m=a.left,b=a.bottom,v=a.right;i.fillStyle=n(o.fontColor,r.defaultFontColor),i.font=f,a.isHorizontal()?(l=m+(v-m)/2,s=p+(b-p)/2,d=v-m):(l="left"===o.position?m+u/2:v-u/2,s=p+(b-p)/2,d=b-p,g=Math.PI*("left"===o.position?-.5:.5)),i.save(),i.translate(l,s),i.rotate(g),i.textAlign="center",i.textBaseline="middle",i.fillText(o.text,0,0,d),i.restore()}}}),t.plugins.register({beforeInit:function(e){var a=e.options,i=a.title;i&&(e.titleBlock=new t.Title({ctx:e.chart.ctx,options:i,chart:e}),t.layoutService.addBox(e,e.titleBlock))}})}},{}],36:[function(t,e,a){"use strict";e.exports=function(t){function e(t,e){var a=s.color(t);return a.alpha(e*a.alpha()).rgbaString()}function a(t,e){return e&&(s.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function i(t){var e=t._xScale,a=t._yScale||t._scale,i=t._index,n=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,n):"",yLabel:a?a.getLabelForIndex(i,n):"",index:i,datasetIndex:n,x:t._model.x,y:t._model.y}}function n(e){var a=t.defaults.global,i=s.getValueOrDefault;return{xPadding:e.xPadding,yPadding:e.yPadding,xAlign:e.xAlign,yAlign:e.yAlign,bodyFontColor:e.bodyFontColor,_bodyFontFamily:i(e.bodyFontFamily,a.defaultFontFamily),_bodyFontStyle:i(e.bodyFontStyle,a.defaultFontStyle),_bodyAlign:e.bodyAlign,bodyFontSize:i(e.bodyFontSize,a.defaultFontSize),bodySpacing:e.bodySpacing,titleFontColor:e.titleFontColor,_titleFontFamily:i(e.titleFontFamily,a.defaultFontFamily),_titleFontStyle:i(e.titleFontStyle,a.defaultFontStyle),titleFontSize:i(e.titleFontSize,a.defaultFontSize),_titleAlign:e.titleAlign,titleSpacing:e.titleSpacing,titleMarginBottom:e.titleMarginBottom,footerFontColor:e.footerFontColor,_footerFontFamily:i(e.footerFontFamily,a.defaultFontFamily),_footerFontStyle:i(e.footerFontStyle,a.defaultFontStyle),footerFontSize:i(e.footerFontSize,a.defaultFontSize),_footerAlign:e.footerAlign,footerSpacing:e.footerSpacing,footerMarginTop:e.footerMarginTop,caretSize:e.caretSize,cornerRadius:e.cornerRadius,backgroundColor:e.backgroundColor,opacity:0,legendColorBackground:e.multiKeyBackground,displayColors:e.displayColors}}function o(t,e){var a=t._chart.ctx,i=2*e.yPadding,n=0,o=e.body,r=o.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);r+=e.beforeBody.length+e.afterBody.length;var l=e.title.length,d=e.footer.length,u=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=l*u,i+=l?(l-1)*e.titleSpacing:0,i+=l?e.titleMarginBottom:0,i+=r*c,i+=r?(r-1)*e.bodySpacing:0,i+=d?e.footerMarginTop:0,i+=d*h,i+=d?(d-1)*e.footerSpacing:0;var f=0,g=function(t){n=Math.max(n,a.measureText(t).width+f)};return a.font=s.fontString(u,e._titleFontStyle,e._titleFontFamily),s.each(e.title,g),a.font=s.fontString(c,e._bodyFontStyle,e._bodyFontFamily),s.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,s.each(o,function(t){s.each(t.before,g),s.each(t.lines,g),s.each(t.after,g)}),f=0,a.font=s.fontString(h,e._footerFontStyle,e._footerFontFamily),s.each(e.footer,g),n+=2*e.xPadding,{width:n,height:i}}function r(t,e){var a=t._model,i=t._chart,n=t._chartInstance.chartArea,o="center",r="center";a.y<e.height?r="top":a.y>i.height-e.height&&(r="bottom");var l,s,d,u,c,h=(n.left+n.right)/2,f=(n.top+n.bottom)/2;"center"===r?(l=function(t){return h>=t},s=function(t){return t>h}):(l=function(t){return t<=e.width/2},s=function(t){return t>=i.width-e.width/2}),d=function(t){return t+e.width>i.width},u=function(t){return t-e.width<0},c=function(t){return f>=t?"top":"bottom"},l(a.x)?(o="left",d(a.x)&&(o="center",r=c(a.y))):s(a.x)&&(o="right",u(a.x)&&(o="center",r=c(a.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:o,yAlign:g.yAlign?g.yAlign:r}}function l(t,e,a){var i=t.x,n=t.y,o=t.caretSize,r=t.caretPadding,l=t.cornerRadius,s=a.xAlign,d=a.yAlign,u=o+r,c=l+r;return"right"===s?i-=e.width:"center"===s&&(i-=e.width/2),"top"===d?n+=u:n-="bottom"===d?e.height+u:e.height/2,"center"===d?"left"===s?i+=u:"right"===s&&(i-=u):"left"===s?i-=c:"right"===s&&(i+=c),{x:i,y:n}}var s=t.helpers;t.defaults.global.tooltips={enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,callbacks:{beforeTitle:s.noop,title:function(t,e){var a="",i=e.labels,n=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?a=o.xLabel:n>0&&o.index<n&&(a=i[o.index])}return a},afterTitle:s.noop,beforeBody:s.noop,beforeLabel:s.noop,label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a+": "+t.yLabel},labelColor:function(t,e){var a=e.getDatasetMeta(t.datasetIndex),i=a.data[t.index],n=i._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},afterLabel:s.noop,afterBody:s.noop,beforeFooter:s.noop,footer:s.noop,afterFooter:s.noop}},t.Tooltip=t.Element.extend({initialize:function(){this._model=n(this._options)},getTitle:function(){var t=this,e=t._options,i=e.callbacks,n=i.beforeTitle.apply(t,arguments),o=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),l=[];return l=a(l,n),l=a(l,o),l=a(l,r)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return s.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,n=i._options.callbacks,o=[];return s.each(t,function(t){var r={before:[],lines:[],after:[]};a(r.before,n.beforeLabel.call(i,t,e)),a(r.lines,n.label.call(i,t,e)),a(r.after,n.afterLabel.call(i,t,e)),o.push(r)}),o},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return s.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),n=e.footer.apply(t,arguments),o=e.afterFooter.apply(t,arguments),r=[];return r=a(r,i),r=a(r,n),r=a(r,o)},update:function(e){var a,d,u=this,c=u._options,h=u._model,f=u._model=n(c),g=u._active,p=u._data,m=u._chartInstance,b={xAlign:h.xAlign,yAlign:h.yAlign},v={x:h.x,y:h.y},x={width:h.width,height:h.height},y={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var k=[];y=t.Tooltip.positioners[c.position](g,u._eventPosition);var S=[];for(a=0,d=g.length;d>a;++a)S.push(i(g[a]));c.filter&&(S=S.filter(function(t){return c.filter(t,p)})),c.itemSort&&(S=S.sort(function(t,e){return c.itemSort(t,e,p)})),s.each(S,function(t){k.push(c.callbacks.labelColor.call(u,t,m))}),f.title=u.getTitle(S,p),f.beforeBody=u.getBeforeBody(S,p),f.body=u.getBody(S,p),f.afterBody=u.getAfterBody(S,p),f.footer=u.getFooter(S,p),f.x=Math.round(y.x),f.y=Math.round(y.y),f.caretPadding=s.getValueOrDefault(y.padding,2),f.labelColors=k,f.dataPoints=S,x=o(this,f),b=r(this,x),v=l(f,x,b)}else f.opacity=0;return f.xAlign=b.xAlign,f.yAlign=b.yAlign,f.x=v.x,f.y=v.y,f.width=x.width,f.height=x.height,f.caretX=y.x,f.caretY=y.y,u._model=f,e&&c.custom&&c.custom.call(u,f),u},drawCaret:function(t,a,i){var n,o,r,l,s,d,u=this._view,c=this._chart.ctx,h=u.caretSize,f=u.cornerRadius,g=u.xAlign,p=u.yAlign,m=t.x,b=t.y,v=a.width,x=a.height;"center"===p?("left"===g?(n=m,o=n-h,r=n):(n=m+v,o=n+h,r=n),s=b+x/2,l=s-h,d=s+h):("left"===g?(n=m+f,o=n+h,r=o+h):"right"===g?(n=m+v-f,o=n-h,r=o-h):(o=m+v/2,n=o-h,r=o+h),"top"===p?(l=b,s=l-h,d=l):(l=b+x,s=l+h,d=l)),c.fillStyle=e(u.backgroundColor,i),c.beginPath(),c.moveTo(n,l),c.lineTo(o,s),c.lineTo(r,d),c.closePath(),c.fill()},drawTitle:function(t,a,i,n){var o=a.title;if(o.length){i.textAlign=a._titleAlign,i.textBaseline="top";var r=a.titleFontSize,l=a.titleSpacing;i.fillStyle=e(a.titleFontColor,n),i.font=s.fontString(r,a._titleFontStyle,a._titleFontFamily);var d,u;for(d=0,u=o.length;u>d;++d)i.fillText(o[d],t.x,t.y),t.y+=r+l,d+1===o.length&&(t.y+=a.titleMarginBottom-l)}},drawBody:function(t,a,i,n){var o=a.bodyFontSize,r=a.bodySpacing,l=a.body;i.textAlign=a._bodyAlign,i.textBaseline="top";var d=e(a.bodyFontColor,n);i.fillStyle=d,i.font=s.fontString(o,a._bodyFontStyle,a._bodyFontFamily);var u=0,c=function(e){i.fillText(e,t.x+u,t.y),t.y+=o+r};s.each(a.beforeBody,c);var h=a.displayColors;u=h?o+2:0,s.each(l,function(r,l){s.each(r.before,c),s.each(r.lines,function(r){h&&(i.fillStyle=e(a.legendColorBackground,n),i.fillRect(t.x,t.y,o,o),i.strokeStyle=e(a.labelColors[l].borderColor,n),i.strokeRect(t.x,t.y,o,o),i.fillStyle=e(a.labelColors[l].backgroundColor,n),i.fillRect(t.x+1,t.y+1,o-2,o-2),i.fillStyle=d),c(r)}),s.each(r.after,c)}),u=0,s.each(a.afterBody,c),t.y-=r},drawFooter:function(t,a,i,n){var o=a.footer;o.length&&(t.y+=a.footerMarginTop,i.textAlign=a._footerAlign,i.textBaseline="top",i.fillStyle=e(a.footerFontColor,n),i.font=s.fontString(a.footerFontSize,a._footerFontStyle,a._footerFontFamily),s.each(o,function(e){i.fillText(e,t.x,t.y),t.y+=a.footerFontSize+a.footerSpacing}))},drawBackground:function(t,a,i,n,o){i.fillStyle=e(a.backgroundColor,o),s.drawRoundedRectangle(i,t.x,t.y,n.width,n.height,a.cornerRadius),i.fill()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var a={width:e.width,height:e.height},i={x:e.x,y:e.y},n=Math.abs(e.opacity<.001)?0:e.opacity;this._options.enabled&&(this.drawBackground(i,e,t,a,n),this.drawCaret(i,a,n),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,n),this.drawBody(i,e,t,n),this.drawFooter(i,e,t,n))}},handleEvent:function(t){var e=this,a=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chartInstance.getElementsAtEventForMode(t,a.mode,a),i=!s.arrayEquals(e._active,e._lastActive),e._lastActive=e._active,a.enabled||a.custom){e._eventPosition=s.getRelativePosition(t,e._chart);var n=e._model;e.update(!0),e.pivot(),i|=n.x!==e._model.x||n.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,a,i=0,n=0,o=0;for(e=0,a=t.length;a>e;++e){var r=t[e];if(r&&r.hasValue()){var l=r.tooltipPosition();i+=l.x,n+=l.y,++o}}return{x:Math.round(i/o),y:Math.round(n/o)}},nearest:function(t,e){var a,i,n,o=e.x,r=e.y,l=Number.POSITIVE_INFINITY;for(i=0,n=t.length;n>i;++i){var d=t[i];if(d&&d.hasValue()){var u=d.getCenterPoint(),c=s.distanceBetweenPoints(e,u);l>c&&(l=c,a=d)}}if(a){var h=a.tooltipPosition();o=h.x,r=h.y}return{x:o,y:r}}}}},{}],37:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global;a.elements.arc={backgroundColor:a.defaultColor,borderColor:"#fff",borderWidth:2},t.elements.Arc=t.Element.extend({inLabelRange:function(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2):!1},inRange:function(t,a){var i=this._view;if(i){for(var n=e.getAngleFromPoint(i,{x:t,y:a}),o=n.angle,r=n.distance,l=i.startAngle,s=i.endAngle;l>s;)s+=2*Math.PI;for(;o>s;)o-=2*Math.PI;for(;l>o;)o+=2*Math.PI;var d=o>=l&&s>=o,u=r>=i.innerRadius&&r<=i.outerRadius;return d&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,a=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*a,y:t.y+Math.sin(e)*a}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,a=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*a,y:t.y+Math.sin(e)*a}},draw:function(){var t=this._chart.ctx,e=this._view,a=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,a,i),t.arc(e.x,e.y,e.innerRadius,i,a,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})}},{}],38:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global;t.defaults.global.elements.line={tension:.4,backgroundColor:a.defaultColor,borderWidth:3,borderColor:a.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0},t.elements.Line=t.Element.extend({draw:function(){function t(t,e){var a=e._view;e._view.steppedLine===!0?(s.lineTo(a.x,t._view.y),s.lineTo(a.x,a.y)):0===e._view.tension?s.lineTo(a.x,a.y):s.bezierCurveTo(t._view.controlPointNextX,t._view.controlPointNextY,a.controlPointPreviousX,a.controlPointPreviousY,a.x,a.y)}var i=this,n=i._view,o=n.spanGaps,r=n.scaleZero,l=i._loop;l||("top"===n.fill?r=n.scaleTop:"bottom"===n.fill&&(r=n.scaleBottom));var s=i._chart.ctx;s.save();var d=i._children.slice(),u=-1;l&&d.length&&d.push(d[0]);var c,h,f,g;if(d.length&&n.fill){for(s.beginPath(),c=0;c<d.length;++c)h=d[c],f=e.previousItem(d,c),g=h._view,0===c?(l?s.moveTo(r.x,r.y):s.moveTo(g.x,r),g.skip||(u=c,s.lineTo(g.x,g.y))):(f=-1===u?f:d[u],g.skip?o||u!==c-1||(l?s.lineTo(r.x,r.y):s.lineTo(f._view.x,r)):(u!==c-1?o&&-1!==u?t(f,h):l?s.lineTo(g.x,g.y):(s.lineTo(g.x,r),s.lineTo(g.x,g.y)):t(f,h),u=c));l||-1===u||s.lineTo(d[u]._view.x,r),s.fillStyle=n.backgroundColor||a.defaultColor,s.closePath(),s.fill()}var p=a.elements.line;for(s.lineCap=n.borderCapStyle||p.borderCapStyle,s.setLineDash&&s.setLineDash(n.borderDash||p.borderDash),s.lineDashOffset=n.borderDashOffset||p.borderDashOffset,s.lineJoin=n.borderJoinStyle||p.borderJoinStyle,s.lineWidth=n.borderWidth||p.borderWidth,s.strokeStyle=n.borderColor||a.defaultColor,s.beginPath(),u=-1,c=0;c<d.length;++c)h=d[c],f=e.previousItem(d,c),g=h._view,0===c?g.skip||(s.moveTo(g.x,g.y),u=c):(f=-1===u?f:d[u],g.skip||(u!==c-1&&!o||-1===u?s.moveTo(g.x,g.y):t(f,h),u=c));s.stroke(),s.restore()}})}},{}],39:[function(t,e,a){"use strict";e.exports=function(t){function e(t){var e=this._view;return e?Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2):!1}function a(t){var e=this._view;return e?Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2):!1}var i=t.helpers,n=t.defaults.global,o=n.defaultColor;n.elements.point={radius:3,pointStyle:"circle",backgroundColor:o,borderWidth:1,borderColor:o,hitRadius:1,hoverRadius:4,hoverBorderWidth:1},t.elements.Point=t.Element.extend({inRange:function(t,e){var a=this._view;return a?Math.pow(t-a.x,2)+Math.pow(e-a.y,2)<Math.pow(a.hitRadius+a.radius,2):!1},inLabelRange:e,inXRange:e,inYRange:a,getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(){var e=this._view,a=this._chart.ctx,r=e.pointStyle,l=e.radius,s=e.x,d=e.y;e.skip||(a.strokeStyle=e.borderColor||o,a.lineWidth=i.getValueOrDefault(e.borderWidth,n.elements.point.borderWidth),a.fillStyle=e.backgroundColor||o,t.canvasHelpers.drawPoint(a,r,l,s,d))}})}},{}],40:[function(t,e,a){"use strict";e.exports=function(t){function e(t){return void 0!==t._view.width}function a(t){var a,i,n,o,r=t._view;if(e(t)){var l=r.width/2;a=r.x-l,i=r.x+l,n=Math.min(r.y,r.base),o=Math.max(r.y,r.base)}else{var s=r.height/2;a=Math.min(r.x,r.base),i=Math.max(r.x,r.base),n=r.y-s,o=r.y+s}return{left:a,top:n,right:i,bottom:o}}var i=t.defaults.global;i.elements.rectangle={backgroundColor:i.defaultColor,borderWidth:0,borderColor:i.defaultColor,borderSkipped:"bottom"},t.elements.Rectangle=t.Element.extend({draw:function(){function t(t){return s[(u+t)%4]}var e=this._chart.ctx,a=this._view,i=a.width/2,n=a.x-i,o=a.x+i,r=a.base-(a.base-a.y),l=a.borderWidth/2;a.borderWidth&&(n+=l,o-=l,r+=l),e.beginPath(),e.fillStyle=a.backgroundColor,e.strokeStyle=a.borderColor,e.lineWidth=a.borderWidth;var s=[[n,a.base],[n,r],[o,r],[o,a.base]],d=["bottom","left","top","right"],u=d.indexOf(a.borderSkipped,0);-1===u&&(u=0);var c=t(0);e.moveTo(c[0],c[1]);for(var h=1;4>h;h++)c=t(h),e.lineTo(c[0],c[1]);e.fill(),a.borderWidth&&e.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var i=!1;if(this._view){var n=a(this);i=t>=n.left&&t<=n.right&&e>=n.top&&e<=n.bottom}return i},inLabelRange:function(t,i){var n=this;if(!n._view)return!1;var o=!1,r=a(n);return o=e(n)?t>=r.left&&t<=r.right:i>=r.top&&i<=r.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,a,i=this._view;return e(this)?(t=i.x,a=(i.y+i.base)/2):(t=(i.x+i.base)/2,a=i.y),{x:t,y:a}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})}},{}],41:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"bottom"},i=t.Scale.extend({getLabels:function(){var t=this.chart.data;return(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,a=t.getLabels();t.minIndex=0,t.maxIndex=a.length-1;var i;void 0!==t.options.ticks.min&&(i=e.indexOf(a,t.options.ticks.min),t.minIndex=-1!==i?i:t.minIndex),void 0!==t.options.ticks.max&&(i=e.indexOf(a,t.options.ticks.max),t.maxIndex=-1!==i?i:t.maxIndex),t.min=a[t.minIndex],t.max=a[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var a=this,i=a.chart.data,n=a.isHorizontal();return i.xLabels&&n||i.yLabels&&!n?a.getRightValue(i.datasets[e].data[t]):a.ticks[t]},getPixelForValue:function(t,e,a,i){var n=this,o=Math.max(n.maxIndex+1-n.minIndex-(n.options.gridLines.offsetGridLines?0:1),1);if(void 0!==t&&isNaN(e)){var r=n.getLabels(),l=r.indexOf(t);e=-1!==l?l:e}if(n.isHorizontal()){var s=n.width-(n.paddingLeft+n.paddingRight),d=s/o,u=d*(e-n.minIndex)+n.paddingLeft;return(n.options.gridLines.offsetGridLines&&i||n.maxIndex===n.minIndex&&i)&&(u+=d/2),
n.left+Math.round(u)}var c=n.height-(n.paddingTop+n.paddingBottom),h=c/o,f=h*(e-n.minIndex)+n.paddingTop;return n.options.gridLines.offsetGridLines&&i&&(f+=h/2),n.top+Math.round(f)},getPixelForTick:function(t,e){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null,e)},getValueForPixel:function(t){var e,a=this,i=Math.max(a.ticks.length-(a.options.gridLines.offsetGridLines?0:1),1),n=a.isHorizontal(),o=n?a.width-(a.paddingLeft+a.paddingRight):a.height-(a.paddingTop+a.paddingBottom),r=o/i;return t-=n?a.left:a.top,a.options.gridLines.offsetGridLines&&(t-=r/2),t-=n?a.paddingLeft:a.paddingTop,e=0>=t?0:Math.round(t/r)},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",i,a)}},{}],42:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:t.Ticks.formatters.linear}},i=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return l?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=a.chart,o=n.data,r=o.datasets,l=a.isHorizontal();if(a.min=null,a.max=null,i.stacked){var s={};e.each(r,function(o,r){var l=n.getDatasetMeta(r);void 0===s[l.type]&&(s[l.type]={positiveValues:[],negativeValues:[]});var d=s[l.type].positiveValues,u=s[l.type].negativeValues;n.isDatasetVisible(r)&&t(l)&&e.each(o.data,function(t,e){var n=+a.getRightValue(t);isNaN(n)||l.data[e].hidden||(d[e]=d[e]||0,u[e]=u[e]||0,i.relativePoints?d[e]=100:0>n?u[e]+=n:d[e]+=n)})}),e.each(s,function(t){var i=t.positiveValues.concat(t.negativeValues),n=e.min(i),o=e.max(i);a.min=null===a.min?n:Math.min(a.min,n),a.max=null===a.max?o:Math.max(a.max,o)})}else e.each(r,function(i,o){var r=n.getDatasetMeta(o);n.isDatasetVisible(o)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i))})});this.handleTickRangeOptions()},getTickLimit:function(){var a,i=this,n=i.options.ticks;if(i.isHorizontal())a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.width/50));else{var o=e.getValueOrDefault(n.fontSize,t.defaults.global.defaultFontSize);a=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(i.height/(2*o)))}return a},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,a,i=this,n=i.paddingLeft,o=i.paddingBottom,r=i.start,l=+i.getRightValue(t),s=i.end-r;return i.isHorizontal()?(a=i.width-(n+i.paddingRight),e=i.left+a/s*(l-r),Math.round(e+n)):(a=i.height-(i.paddingTop+o),e=i.bottom-o-a/s*(l-r),Math.round(e))},getValueForPixel:function(t){var e=this,a=e.isHorizontal(),i=e.paddingLeft,n=e.paddingBottom,o=a?e.width-(i+e.paddingRight):e.height-(e.paddingTop+n),r=(a?t-e.left-i:e.bottom-n-t)/o;return e.start+(e.end-e.start)*r},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",i,a)}},{}],43:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=e.noop;t.LinearScaleBase=t.Scale.extend({handleTickRangeOptions:function(){var t=this,a=t.options,i=a.ticks;if(i.beginAtZero){var n=e.sign(t.min),o=e.sign(t.max);0>n&&0>o?t.max=0:n>0&&o>0&&(t.min=0)}void 0!==i.min?t.min=i.min:void 0!==i.suggestedMin&&(t.min=Math.min(t.min,i.suggestedMin)),void 0!==i.max?t.max=i.max:void 0!==i.suggestedMax&&(t.max=Math.max(t.max,i.suggestedMax)),t.min===t.max&&(t.max++,i.beginAtZero||t.min--)},getTickLimit:a,handleDirectionalChanges:a,buildTicks:function(){var a=this,i=a.options,n=i.ticks,o=a.getTickLimit();o=Math.max(2,o);var r={maxTicks:o,min:n.min,max:n.max,stepSize:e.getValueOrDefault(n.fixedStepSize,n.stepSize)},l=a.ticks=t.Ticks.generators.linear(r,a);a.handleDirectionalChanges(),a.max=e.max(l),a.min=e.min(l),n.reverse?(l.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{}],44:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a={position:"left",ticks:{callback:t.Ticks.formatters.logarithmic}},i=t.Scale.extend({determineDataLimits:function(){function t(t){return d?t.xAxisID===a.id:t.yAxisID===a.id}var a=this,i=a.options,n=i.ticks,o=a.chart,r=o.data,l=r.datasets,s=e.getValueOrDefault,d=a.isHorizontal();if(a.min=null,a.max=null,a.minNotZero=null,i.stacked){var u={};e.each(l,function(n,r){var l=o.getDatasetMeta(r);o.isDatasetVisible(r)&&t(l)&&(void 0===u[l.type]&&(u[l.type]=[]),e.each(n.data,function(t,e){var n=u[l.type],o=+a.getRightValue(t);isNaN(o)||l.data[e].hidden||(n[e]=n[e]||0,i.relativePoints?n[e]=100:n[e]+=o)}))}),e.each(u,function(t){var i=e.min(t),n=e.max(t);a.min=null===a.min?i:Math.min(a.min,i),a.max=null===a.max?n:Math.max(a.max,n)})}else e.each(l,function(i,n){var r=o.getDatasetMeta(n);o.isDatasetVisible(n)&&t(r)&&e.each(i.data,function(t,e){var i=+a.getRightValue(t);isNaN(i)||r.data[e].hidden||(null===a.min?a.min=i:i<a.min&&(a.min=i),null===a.max?a.max=i:i>a.max&&(a.max=i),0!==i&&(null===a.minNotZero||i<a.minNotZero)&&(a.minNotZero=i))})});a.min=s(n.min,a.min),a.max=s(n.max,a.max),a.min===a.max&&(0!==a.min&&null!==a.min?(a.min=Math.pow(10,Math.floor(e.log10(a.min))-1),a.max=Math.pow(10,Math.floor(e.log10(a.max))+1)):(a.min=1,a.max=10))},buildTicks:function(){var a=this,i=a.options,n=i.ticks,o={min:n.min,max:n.max},r=a.ticks=t.Ticks.generators.logarithmic(o,a);a.isHorizontal()||r.reverse(),a.max=e.max(r),a.min=e.min(r),n.reverse?(r.reverse(),a.start=a.max,a.end=a.min):(a.start=a.min,a.end=a.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var a,i,n,o=this,r=o.start,l=+o.getRightValue(t),s=o.paddingTop,d=o.paddingBottom,u=o.paddingLeft,c=o.options,h=c.ticks;return o.isHorizontal()?(n=e.log10(o.end)-e.log10(r),0===l?i=o.left+u:(a=o.width-(u+o.paddingRight),i=o.left+a/n*(e.log10(l)-e.log10(r)),i+=u)):(a=o.height-(s+d),0!==r||h.reverse?0===o.end&&h.reverse?(n=e.log10(o.start)-e.log10(o.minNotZero),i=l===o.end?o.top+s:l===o.minNotZero?o.top+s+.02*a:o.top+s+.02*a+.98*a/n*(e.log10(l)-e.log10(o.minNotZero))):(n=e.log10(o.end)-e.log10(r),a=o.height-(s+d),i=o.bottom-d-a/n*(e.log10(l)-e.log10(r))):(n=e.log10(o.end)-e.log10(o.minNotZero),i=l===r?o.bottom-d:l===o.minNotZero?o.bottom-d-.02*a:o.bottom-d-.02*a-.98*a/n*(e.log10(l)-e.log10(o.minNotZero)))),i},getValueForPixel:function(t){var a,i,n=this,o=e.log10(n.end)-e.log10(n.start);return n.isHorizontal()?(i=n.width-(n.paddingLeft+n.paddingRight),a=n.start*Math.pow(10,(t-n.left-n.paddingLeft)*o/i)):(i=n.height-(n.paddingTop+n.paddingBottom),a=Math.pow(10,(n.bottom-n.paddingBottom-t)*o/i)/n.start),a}});t.scaleService.registerScaleType("logarithmic",i,a)}},{}],45:[function(t,e,a){"use strict";e.exports=function(t){var e=t.helpers,a=t.defaults.global,i={display:!0,animate:!0,lineArc:!1,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:t.Ticks.formatters.linear},pointLabels:{fontSize:10,callback:function(t){return t}}},n=t.LinearScaleBase.extend({getValueCount:function(){return this.chart.data.labels.length},setDimensions:function(){var t=this,i=t.options,n=i.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var o=e.min([t.height,t.width]),r=e.getValueOrDefault(n.fontSize,a.defaultFontSize);t.drawingArea=i.display?o/2-(r/2+n.backdropPaddingY):o/2},determineDataLimits:function(){var t=this,a=t.chart;t.min=null,t.max=null,e.each(a.data.datasets,function(i,n){if(a.isDatasetVisible(n)){var o=a.getDatasetMeta(n);e.each(i.data,function(e,a){var i=+t.getRightValue(e);isNaN(i)||o.data[a].hidden||(null===t.min?t.min=i:i<t.min&&(t.min=i),null===t.max?t.max=i:i>t.max&&(t.max=i))})}}),t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,i=e.getValueOrDefault(t.fontSize,a.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*i)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t,i,n,o,r,l,s,d,u,c,h,f,g=this.options.pointLabels,p=e.getValueOrDefault(g.fontSize,a.defaultFontSize),m=e.getValueOrDefault(g.fontStyle,a.defaultFontStyle),b=e.getValueOrDefault(g.fontFamily,a.defaultFontFamily),v=e.fontString(p,m,b),x=e.min([this.height/2-p-5,this.width/2]),y=this.width,k=0;for(this.ctx.font=v,i=0;i<this.getValueCount();i++){t=this.getPointPosition(i,x),n=this.ctx.measureText(this.pointLabels[i]?this.pointLabels[i]:"").width+5;var S=this.getIndexAngle(i)+Math.PI/2,w=360*S/(2*Math.PI)%360;0===w||180===w?(o=n/2,t.x+o>y&&(y=t.x+o,r=i),t.x-o<k&&(k=t.x-o,s=i)):180>w?t.x+n>y&&(y=t.x+n,r=i):t.x-n<k&&(k=t.x-n,s=i)}u=k,c=Math.ceil(y-this.width),l=this.getIndexAngle(r),d=this.getIndexAngle(s),h=c/Math.sin(l+Math.PI/2),f=u/Math.sin(d+Math.PI/2),h=e.isNumber(h)?h:0,f=e.isNumber(f)?f:0,this.drawingArea=Math.round(x-(f+h)/2),this.setCenterPoint(f,h)},setCenterPoint:function(t,e){var a=this,i=a.width-e-a.drawingArea,n=t+a.drawingArea;a.xCenter=Math.round((n+i)/2+a.left),a.yCenter=Math.round(a.height/2+a.top)},getIndexAngle:function(t){var e=2*Math.PI/this.getValueCount(),a=this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0,i=a*Math.PI*2/360;return t*e-Math.PI/2+i},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var a=e.drawingArea/(e.max-e.min);return e.options.reverse?(e.max-t)*a:(t-e.min)*a},getPointPosition:function(t,e){var a=this,i=a.getIndexAngle(t);return{x:Math.round(Math.cos(i)*e)+a.xCenter,y:Math.round(Math.sin(i)*e)+a.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,a=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:0>e&&0>a?a:e>0&&a>0?e:0)},draw:function(){var t=this,i=t.options,n=i.gridLines,o=i.ticks,r=i.angleLines,l=i.pointLabels,s=e.getValueOrDefault;if(i.display){var d=t.ctx,u=s(o.fontSize,a.defaultFontSize),c=s(o.fontStyle,a.defaultFontStyle),h=s(o.fontFamily,a.defaultFontFamily),f=e.fontString(u,c,h);if(e.each(t.ticks,function(r,l){if(l>0||i.reverse){var c=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),h=t.yCenter-c;if(n.display&&0!==l)if(d.strokeStyle=e.getValueAtIndexOrDefault(n.color,l-1),d.lineWidth=e.getValueAtIndexOrDefault(n.lineWidth,l-1),i.lineArc)d.beginPath(),d.arc(t.xCenter,t.yCenter,c,0,2*Math.PI),d.closePath(),d.stroke();else{d.beginPath();for(var g=0;g<t.getValueCount();g++){var p=t.getPointPosition(g,c);0===g?d.moveTo(p.x,p.y):d.lineTo(p.x,p.y)}d.closePath(),d.stroke()}if(o.display){var m=s(o.fontColor,a.defaultFontColor);if(d.font=f,o.showLabelBackdrop){var b=d.measureText(r).width;d.fillStyle=o.backdropColor,d.fillRect(t.xCenter-b/2-o.backdropPaddingX,h-u/2-o.backdropPaddingY,b+2*o.backdropPaddingX,u+2*o.backdropPaddingY)}d.textAlign="center",d.textBaseline="middle",d.fillStyle=m,d.fillText(r,t.xCenter,h)}}}),!i.lineArc){d.lineWidth=r.lineWidth,d.strokeStyle=r.color;for(var g=t.getDistanceFromCenterForValue(i.reverse?t.min:t.max),p=s(l.fontSize,a.defaultFontSize),m=s(l.fontStyle,a.defaultFontStyle),b=s(l.fontFamily,a.defaultFontFamily),v=e.fontString(p,m,b),x=t.getValueCount()-1;x>=0;x--){if(r.display){var y=t.getPointPosition(x,g);d.beginPath(),d.moveTo(t.xCenter,t.yCenter),d.lineTo(y.x,y.y),d.stroke(),d.closePath()}var k=t.getPointPosition(x,g+5),S=s(l.fontColor,a.defaultFontColor);d.font=v,d.fillStyle=S;var w=t.pointLabels,M=this.getIndexAngle(x)+Math.PI/2,C=360*M/(2*Math.PI)%360;0===C||180===C?d.textAlign="center":180>C?d.textAlign="left":d.textAlign="right",90===C||270===C?d.textBaseline="middle":C>270||90>C?d.textBaseline="bottom":d.textBaseline="top",d.fillText(w[x]?w[x]:"",k.x,k.y)}}}}});t.scaleService.registerScaleType("radialLinear",n,i)}},{}],46:[function(t,e,a){"use strict";var i=t(1);i="function"==typeof i?i:window.moment,e.exports=function(t){var e=t.helpers,a={units:[{name:"millisecond",steps:[1,2,5,10,20,50,100,250,500]},{name:"second",steps:[1,2,5,10,30]},{name:"minute",steps:[1,2,5,10,30]},{name:"hour",steps:[1,2,3,6,12]},{name:"day",steps:[1,2,5]},{name:"week",maxStep:4},{name:"month",maxStep:3},{name:"quarter",maxStep:4},{name:"year",maxStep:!1}]},n={position:"bottom",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm:ss a",hour:"MMM D, hA",day:"ll",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1}},o=t.Scale.extend({initialize:function(){if(!i)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");t.Scale.prototype.initialize.call(this)},getLabelMoment:function(t,e){return null===t||null===e?null:"undefined"!=typeof this.labelMoments[t]?this.labelMoments[t][e]:null},getLabelDiff:function(t,e){var a=this;return null===t||null===e?null:(void 0===a.labelDiffs&&a.buildLabelDiffs(),"undefined"!=typeof a.labelDiffs[t]?a.labelDiffs[t][e]:null)},getMomentStartOf:function(t){var e=this;return"week"===e.options.time.unit&&e.options.time.isoWeekday!==!1?t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday):t.clone().startOf(e.tickUnit)},determineDataLimits:function(){var t=this;t.labelMoments=[];var a=[];t.chart.data.labels&&t.chart.data.labels.length>0?(e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),a.push(i))},t),t.firstTick=i.min.call(t,a),t.lastTick=i.max.call(t,a)):(t.firstTick=null,t.lastTick=null),e.each(t.chart.data.datasets,function(n,o){var r=[],l=t.chart.isDatasetVisible(o);"object"==typeof n.data[0]&&null!==n.data[0]?e.each(n.data,function(e){var a=t.parseTime(t.getRightValue(e));a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),r.push(a),l&&(t.firstTick=null!==t.firstTick?i.min(t.firstTick,a):a,t.lastTick=null!==t.lastTick?i.max(t.lastTick,a):a))},t):r=a,t.labelMoments.push(r)},t),t.options.time.min&&(t.firstTick=t.parseTime(t.options.time.min)),t.options.time.max&&(t.lastTick=t.parseTime(t.options.time.max)),t.firstTick=(t.firstTick||i()).clone(),t.lastTick=(t.lastTick||i()).clone()},buildLabelDiffs:function(){var t=this;t.labelDiffs=[];var a=[];t.chart.data.labels&&t.chart.data.labels.length>0&&e.each(t.chart.data.labels,function(e){var i=t.parseTime(e);i.isValid()&&(t.options.time.round&&i.startOf(t.options.time.round),a.push(i.diff(t.firstTick,t.tickUnit,!0)))},t),e.each(t.chart.data.datasets,function(i){var n=[];"object"==typeof i.data[0]&&null!==i.data[0]?e.each(i.data,function(e){var a=t.parseTime(t.getRightValue(e));a.isValid()&&(t.options.time.round&&a.startOf(t.options.time.round),n.push(a.diff(t.firstTick,t.tickUnit,!0)))},t):n=a,t.labelDiffs.push(n)},t)},buildTicks:function(){var i=this;i.ctx.save();var n=e.getValueOrDefault(i.options.ticks.fontSize,t.defaults.global.defaultFontSize),o=e.getValueOrDefault(i.options.ticks.fontStyle,t.defaults.global.defaultFontStyle),r=e.getValueOrDefault(i.options.ticks.fontFamily,t.defaults.global.defaultFontFamily),l=e.fontString(n,o,r);if(i.ctx.font=l,i.ticks=[],i.unitScale=1,i.scaleSizeInUnits=0,i.options.time.unit)i.tickUnit=i.options.time.unit||"day",i.displayFormat=i.options.time.displayFormats[i.tickUnit],i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,1);else{var s=i.isHorizontal()?i.width-(i.paddingLeft+i.paddingRight):i.height-(i.paddingTop+i.paddingBottom),d=i.tickFormatFunction(i.firstTick,0,[]),u=i.ctx.measureText(d).width,c=Math.cos(e.toRadians(i.options.ticks.maxRotation)),h=Math.sin(e.toRadians(i.options.ticks.maxRotation));u=u*c+n*h;var f=s/u;i.tickUnit=i.options.time.minUnit,i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0),i.displayFormat=i.options.time.displayFormats[i.tickUnit];for(var g=0,p=a.units[g];g<a.units.length;){if(i.unitScale=1,e.isArray(p.steps)&&Math.ceil(i.scaleSizeInUnits/f)<e.max(p.steps)){for(var m=0;m<p.steps.length;++m)if(p.steps[m]>=Math.ceil(i.scaleSizeInUnits/f)){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,p.steps[m]);break}break}if(p.maxStep===!1||Math.ceil(i.scaleSizeInUnits/f)<p.maxStep){i.unitScale=e.getValueOrDefault(i.options.time.unitStepSize,Math.ceil(i.scaleSizeInUnits/f));break}++g,p=a.units[g],i.tickUnit=p.name;var b=i.firstTick.diff(i.getMomentStartOf(i.firstTick),i.tickUnit,!0),v=i.getMomentStartOf(i.lastTick.clone().add(1,i.tickUnit)).diff(i.lastTick,i.tickUnit,!0);i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)+b+v,i.displayFormat=i.options.time.displayFormats[p.name]}}var x;if(i.options.time.min?x=i.getMomentStartOf(i.firstTick):(i.firstTick=i.getMomentStartOf(i.firstTick),x=i.firstTick),!i.options.time.max){var y=i.getMomentStartOf(i.lastTick),k=y.diff(i.lastTick,i.tickUnit,!0);0>k?i.lastTick=i.getMomentStartOf(i.lastTick.add(1,i.tickUnit)):k>=0&&(i.lastTick=y),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0)}i.options.time.displayFormat&&(i.displayFormat=i.options.time.displayFormat),i.ticks.push(i.firstTick.clone());for(var S=1;S<=i.scaleSizeInUnits;++S){var w=x.clone().add(S,i.tickUnit);if(i.options.time.max&&w.diff(i.lastTick,i.tickUnit,!0)>=0)break;S%i.unitScale===0&&i.ticks.push(w)}var M=i.ticks[i.ticks.length-1].diff(i.lastTick,i.tickUnit);(0!==M||0===i.scaleSizeInUnits)&&(i.options.time.max?(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.ticks[0],i.tickUnit,!0)):(i.ticks.push(i.lastTick.clone()),i.scaleSizeInUnits=i.lastTick.diff(i.firstTick,i.tickUnit,!0))),i.ctx.restore(),i.labelDiffs=void 0},getLabelForIndex:function(t,e){var a=this,i=a.chart.data.labels&&t<a.chart.data.labels.length?a.chart.data.labels[t]:"";return"object"==typeof a.chart.data.datasets[e].data[0]&&(i=a.getRightValue(a.chart.data.datasets[e].data[t])),a.options.time.tooltipFormat&&(i=a.parseTime(i).format(a.options.time.tooltipFormat)),i},tickFormatFunction:function(t,a,i){var n=t.format(this.displayFormat),o=this.options.ticks,r=e.getValueOrDefault(o.callback,o.userCallback);return r?r(n,a,i):n},convertTicksToLabels:function(){var t=this;t.tickMoments=t.ticks,t.ticks=t.ticks.map(t.tickFormatFunction,t)},getPixelForValue:function(t,e,a){var i=this,n=null;if(void 0!==e&&void 0!==a&&(n=i.getLabelDiff(a,e)),null===n&&(t&&t.isValid||(t=i.parseTime(i.getRightValue(t))),t&&t.isValid&&t.isValid()&&(n=t.diff(i.firstTick,i.tickUnit,!0))),null!==n){var o=0!==n?n/i.scaleSizeInUnits:n;if(i.isHorizontal()){var r=i.width-(i.paddingLeft+i.paddingRight),l=r*o+i.paddingLeft;return i.left+Math.round(l)}var s=i.height-(i.paddingTop+i.paddingBottom),d=s*o+i.paddingTop;return i.top+Math.round(d)}},getPixelForTick:function(t){return this.getPixelForValue(this.tickMoments[t],null,null)},getValueForPixel:function(t){var e=this,a=e.isHorizontal()?e.width-(e.paddingLeft+e.paddingRight):e.height-(e.paddingTop+e.paddingBottom),n=(t-(e.isHorizontal()?e.left+e.paddingLeft:e.top+e.paddingTop))/a;return n*=e.scaleSizeInUnits,e.firstTick.clone().add(i.duration(n,e.tickUnit).asSeconds(),"seconds")},parseTime:function(t){var e=this;return"string"==typeof e.options.time.parser?i(t,e.options.time.parser):"function"==typeof e.options.time.parser?e.options.time.parser(t):"function"==typeof t.getMonth||"number"==typeof t?i(t):t.isValid&&t.isValid()?t:"string"!=typeof e.options.time.format&&e.options.time.format.call?(console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),e.options.time.format(t)):i(t,e.options.time.format)}});t.scaleService.registerScaleType("time",o,n)}},{1:1}]},{},[7])(7)});
//Platform Logo's
function PlatformLogo(platformnaam)
{
    platformnaam = platformnaam.toUpperCase();
    switch (platformnaam)
    {
        default:
            return platformnaam;

        //platforms - spelcomputers
        case "PS1":
            return "<img src='/resources/images/icons/ps1.png' />";
        case "PS3":
            return "<img src='/resources/images/icons/ps3.png' />";
        case "PS2":
            return "<img src='/resources/images/icons/ps2.png' />";
        case "PS4":
            return "<img src='/resources/images/icons/ps4.png' />";
        case "PC":
            return "<img src='/resources/images/icons/windows.png' />";
        case "XBOX":
            return "<img src='/resources/images/icons/xbox.png' />";
        case "NES":
            return "<img src='/resources/images/icons/nes.png' />";
        case "N64":
            return "<img src='/resources/images/icons/n64.png' />";
        case "NINTENDO SWITCH":
            return "<img src='/resources/images/icons/switch.png' />";
        case "NGC":
            return "<img src='/resources/images/icons/ngc.png' />";

        //publishers - uitgevers
        case "NINTENDO":
            return "<img src='/resources/images/publishers/nintendo.png' />";
        case "UBISOFT":
            return "<img src='/resources/images/publishers/ubisoft.png' />";
        case "ELECTRONIC ARTS":
            return "<img src='/resources/images/publishers/ea.png' />";
        case "SONY":
            return "<img src='/resources/images/publishers/sony.png' />";
        case "ROCKSTAR":
            return "<img src='/resources/images/publishers/rockstar.png' />";
        case "SEGA":
            return "<img src='/resources/images/publishers/sega.png' />";
    }
}

function BeschikbaarheidKleur(stockvalue){
    
        if (stockvalue<=0) {
            return "<img src='/resources/images/availability/buttonred.png' />";
        } else if (stockvalue>=1) {
            return "<img src='/resources/images/availability/buttongreen.png' />";
        } else {
            return stockvalue
        }
}
$(document).on("click", "a.order__navigate", function (e) {
    e.preventDefault();

    if ($(this).hasClass("disabled") == false)
    {
        // Get the order step
        var step =  $(this).data("step");

        // Set the new order step as active
        $("ul.order-steps li").removeClass("active");
        $("ul.order-steps li." + step).addClass("active");

        $(".order__step").removeClass("order__step--active");
        $("#" + step).addClass("order__step--active");
    }
})

$(document).on("change", "select#shipping_method", function (e)
{
    var val = $(this).val();

    if (val != "")
    {
        $(this).parents(".order__step").find(".btn--next").removeClass("disabled");
    }
    else
    {
        $(this).parents(".order__step").find(".btn--next").addClass("disabled");
    }

    $(".shipping__fields").hide();
    $("." + val + "_fields").show();
})

$(document).on("change", "select#payment_method", function (e)
{
    var val = $(this).val();

    if (val != "")
    {
        $(this).parents(".order__step").find(".btn--next").removeClass("disabled");
        $(this).parents(".order__step").find(".btn--next").attr("disabled", false);
    }
    else
    {
        $(this).parents(".order__step").find(".btn--next").addClass("disabled");
        $(this).parents(".order__step").find(".btn--next").attr("disabled", true);
        
    }
});
var Router = function ()
{
    baseUrl = "project-webshop/";

    function route(url, history)
    {
        if (isInternal(url) == false || url == "")
        {
            return;
        }

        var particles = getParticles(url);

        switch(particles[0])
        {
            case "":
            case "index.html":
            case "products":
                new ProductsController(new ProductsViewHelper(), new ProductsModel()).main();
                break;
            case "product":
                new ProductController(new ProductViewHelper(), new ProductModel(particles[1])).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "login":
                new LoginController(new LoginViewHelper(), new LoginModel()).main();
                break;
            case "logout":
                new LogoutController(new LogoutViewHelper(), new LogoutModel()).main();
                break;
            case "register":
                new RegisterController(new RegisterViewHelper(), new RegisterModel()).main();
                break;
            case "resetpassword":
                new ResetPasswordController(new ResetPasswordViewHelper(), new ResetPasswordModel()).main();
                break;
            case "wishlist":
                new WishlistController(new WishlistViewHelper(), new WishlistModel()).main();
                break;
            case "stats":
                new StatsController(new StatsViewHelper(), new StatsModel()).main();
                break;
            case "admin":
                new AdminController(new AdminViewHelper(), new AdminModel()).main();
                break;
            case "admin_user":
                new AdminUserController(new AdminUserViewHelper(), new AdminUserModel(particles[1])).main();
                break;
            case "adminsert":
                new AdminsertController(new AdminsertViewHelper(), new AdminsertModel()).main();
                break;
            case "favoritelist": 
                new FavoriteListController(new FavoriteListViewHelper(), new FavoriteListModel()).main();
                break;
            case "checkout":
                new CheckoutController(new CheckoutViewHelper(), new CheckoutModel()).main();
                break;
            case "orders":
                new OrdersController(new OrdersViewHelper, new OrdersModel()).main();
                break;
            case "order":
                new OrderController(new OrderViewHelper, new OrderModel(particles[1])).main();
                break;
            case "public_wishlist":
                new PublicWishlistController(new PublicWishlistViewHelper(), new PublicWishlistModel(particles[1])).main();
                break;
            default:
                new ErrorController(new ErrorViewHelper()).main();
                break;
        }

        if (history != false)
        {
            if (url != "" && typeof url === 'string')
            {
                writeHistory({}, "A-Z Games", url);

                // Load screen and close cart
                $(".sidebar").removeClass("sidebar--open");
                $(".overlay").removeClass("overlay--visible");
                $("body").removeClass("sidebar--open");
                showLoadScreen();
                
                // Scroll to top of page
                window.scrollTo(0, 0);
            }
        }
    }

    function isInternal(url)
    {
        if (url.indexOf("http") != -1 || url.indexOf("www") != -1 || url.indexOf("mailto") != -1)
        {
            window.location = url;
            
            return false;
        }

        return true;
    }

    function getParticles(url)
    {
        // Remove the first /
        if (url.indexOf("/") == 0)
        {
            url = url.substring(1);
        }

        // If there is a base url set, remove the base url
        if (this.baseUrl != null && url.indexOf(this.baseUrl) != -1)
        {
            url = url.substring(url.indexOf(this.baseUrl) + this.baseUrl.length);
        }

        return url.split(/\/(.+)?/)
    }

    function writeHistory(object, title, url)
    {
        window.history.pushState(object, title, url);
    }

    return {
        route: route
    }
}
$(document).ready(function()
{
    $(".sidebar-toggle").click(function (e)
    {
        // Prevent default click action
        e.preventDefault();

        // Id of the sidebar to toggle
        var sidebar = $(this).data("sidebar");

        toggleSidebar($("#" + sidebar));
    });

    $(".sidebar__close").click(function (e) {
        toggleSidebar($(this).parent().parent());
    })

    $(".overlay").click(function (e) {
        toggleSidebar($(".sidebar"), true);
    });

    function toggleSidebar(sidebar, forceClose)
    {
        if (forceClose)
        {
            $(sidebar).removeClass("sidebar--open");   
        }
        else
        {
            $(sidebar).toggleClass("sidebar--open");
        }

        $(".overlay").toggleClass("overlay--visible");
        $("body").toggleClass("sidebar--open");
    }
});
$(document).on("mouseenter", ".hasTooltip", function(event)
{
    // Get content and position
    var content  = $(this).data("tooltip");
    var position = getOffset(this);

    // Create tooltip
    var tooltip = $("<div class='tooltip'>" + content + "</div>");
    $("body").append(tooltip);

    // Calculate new positions
    position.top  = position.top + $(this).outerHeight();
    position.left = position.left + ($(this).outerWidth() / 2) - ($(".tooltip").outerWidth() / 2);

    // Change position of tooltip
    tooltip.css("left", position.left);
    tooltip.css("top", position.top);
});

$(document).on("mouseleave", ".hasTooltip", function(event) {
    $("body").find(".tooltip").remove();
});

function getOffset(el)
{
    el = el.getBoundingClientRect();
    
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
  }
}
/**
 * Helper for finding, creating and deleting cookies
 */
function CookieHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {string}
     */
    this.getCookie = function(name)
    {
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++)
        {
            var cookie = cookies[i].split("=");

            if (cookie[0].trim() == name)
            {
                return cookie[1];
            }
        }
    }

    /**
     * Create a cookie
     * 
     * @param {string} name   Name of the cookie
     * @param {string} value  Value of the cookie
     * 
     * @return {void}
     */
    this.createCookie = function(name, value)
    {
        var d = new Date(); 
        d.setTime(d.getTime() + (1*24*60*60*1000)); 
        var expires = "expires="+ d.toUTCString(); 

        document.cookie = name + '=' + value + ';' + expires + ';path=/'; 
    }

    /**
     * Delete a cookie and it's value
     * 
     * @param {string} name  Name of the cookie
     * 
     * @return {void}
     */
    this.deleteCookie = function(name)
    {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}

/**
 * Helper for cart actions
 */
function FavoriteListHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} id  Prodcut ID to remove fom the car
     * 
     * @return {string}
     */
    //this.addItem = function(ean_number)
    var addItem = function(ean_number)
    {
        $.ajax({
            url: "http://localhost:8081/favoritelist/" + ean_number, // "https://api.az-games.nl/favoritelist/"
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Product succesvol toegevoegd aan je favorieten."); // im staat voor imaginary/denkbeeldig
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            },
            error: function(xhr, status, error) {
                alert("Product is al in je favorieten.");
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            }
        });
    }

    return {
        addItem: addItem
    }
}
var Router       = new Router();
var CookieHelper = new CookieHelper();
var UserHelper     = new UserHelper();
var WishlistHelper = new WishlistHelper();

function showLoadScreen()
{
    $("#component").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>');
}


function onLoadPage()
{
    $(".mmenu").empty();
    $(".nav").clone().appendTo(".mmenu");

    if (UserHelper.isAdmin())
    {
        $(".visible-admin").css("display", "block");
        $(".visible-customer").css("display", "block");
        $(".inloggen_text").hide();
    }
    else if (UserHelper.isCustomer())
    {
        $(".visible-customer").css("display", "block");
        $(".inloggen_text").hide();
    }
    else
    {
        $(".visible-admin").hide();
        $(".visible-customer").hide();
        $("#inloggen_text").css("display", "block");
    }
}
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            if (this.value != "")
            {
                o[this.name].push(this.value);
            }
        } else {
            if (this.value != "")
            {
                o[this.name] = this.value || '';
            }
        }
    });
    return o;
};
/**
 * Helper for user related stuff
 */
function UserHelper()
{
    /**
     * Check if the user is a guest (not logged in)
     */
    this.isLogedIn = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");
        
        if (accessToken != undefined && accessToken != "")
        {
            return true;
        }

        return false;
    }

    /**
     * Check if the current user is a customer
     */
    this.isCustomer = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "customer" || usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Check if the current user is admin
     */
    this.isAdmin = function()
    {
        if (UserHelper.isLogedIn())
        {
            var usertype = this.decodeToken().usertype;

            if (usertype == "admin")
            {
                return true;
            }
        }

        return false;
    }

    /**
     * Decode the JWT token
     */
    this.decodeToken = function()
    {
        var accessToken = CookieHelper.getCookie("access_token");

        if (accessToken != undefined && accessToken  != "")
        {
            var payload = accessToken.split(".")[1];

            return JSON.parse(atob(payload));
        }
    }

    /**
     * Get the information of the current user
     */
    this.getUserInfo = function(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                Router.route("/login");
            }
        });

    }
}
/**
 * Helper for cart actions
 */
function WishlistHelper()
{
    /**
     * Get the value of a cookie
     * 
     * @param {string} id  Prodcut ID to remove fom the car
     * 
     * @return {string}
     */
    this.addItem = function(ean_number)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + ean_number,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                $(this).toggleClass("like--active");
                alert("Het product is succesvol toegevoegd aan je verlanglijst.");
            },
            error: function(xhr, status, error) {
                alert("Dit product staat al op je verlanglijst.");
            }
        });
    }

    this.copyLink = function()
    {
        // Select the content
        document.querySelector("input#public_link").select();
        // Copy to the clipboard
        document.execCommand('copy');
    }
}
var AdminsertModel = function()
{
    function updateDB(formData, callback)
    {
        // Modify data before sending (also convert to UTC)
        formData.release_date = new Date(Date.UTC(formData.jaar, formData.maand, formData.dag));

        // Remove year, month and day
        delete formData.jaar;
        delete formData.maand;
        delete formData.dag;

        $.ajax({
            url: "http://localhost:8081/admin/new_game",
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                publisher : formData.publisher,
                title : formData.title,
                subtitle : formData.subtitle,
                genre : formData.genre,
                franchise : formData.franchise,
                description : formData.description,
                ean_number : formData.ean_number,
                platform : formData.platform,
                release_date : formData.release_date,
                pegi_age : formData.pegi_age,
                stock : formData.stock,
                price : formData.price,
                image : formData.image
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#adminsert__api__error__message").show();
            }
        });
    }

    return {
        updateDB: updateDB
    }
}
var AdminUserModel = function(id)
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + id, //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function saveUserInfo(data, callback)
    {
        // Modify data before sending (also convert to UTC)
        data.date_of_birth = new Date(Date.UTC(data.jaar, data.maand, data.dag));

        // Remove year, month and day
        delete data.jaar;
        delete data.maand;
        delete data.dag;

        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + data.user_id, //"https://api.az-games.nl/
            type: "PATCH",
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteUser(user_id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users/" + user_id, //"https://api.az-games.nl/
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback();
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage,
        saveUserInfo: saveUserInfo,
        deleteUser: deleteUser
    }
}
var AdminModel = function()
{
    function getPage(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/admin/users", //"https://api.az-games.nl/
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }

};
var CartModel = function()
{
    /**
     * Get all cart items
     */
    function getCart(callback)
    {
        var cart = CookieHelper.getCookie("cart");

        if (cart != undefined)
        {
            callback(JSON.parse(cart));
        }
    }

    /**
     * Add a product to the cart cookie and database if the user is registered
     */
    function addProduct(id, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + id,
            type: "get",
            contentType: "json",
            success: function (data) {
                cart = {ean_number:data[0].ean_number, title:data[0].title, price:data[0].price, image:data[0].image};
                callback(cart);

                // Save cart in cookies
                var currentCart = CookieHelper.getCookie("cart");

                if (currentCart == undefined)
                {
                    CookieHelper.createCookie("cart", JSON.stringify([cart]));
                }
                else
                {
                    currentCart = JSON.parse(currentCart);
                    currentCart.push(cart);

                    CookieHelper.createCookie("cart", JSON.stringify(currentCart))
                }
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    /**
     * Remove a item from the cart
     * 
     * @param {int} id Product id
     */
    function removeProduct(id)
    {
        cart = JSON.parse(CookieHelper.getCookie("cart"));

        for(i = 0; i < cart.length; i++)
        {
            if (cart[i].ean_number == id)
            {
                cart.splice(i, 1);
                break;
            }
        }
        
        CookieHelper.createCookie("cart", JSON.stringify(cart));
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getCart: getCart,
        addProduct: addProduct,
        removeProduct: removeProduct
    }
};
var CheckoutModel = function()
{
    function getOrderInformation(callback)
    {
        var cart = CookieHelper.getCookie('cart');

        if (cart != undefined && cart != "")
        {
            callback(JSON.parse(cart));
        }
        else
        {
            callback([]);
        }
    }

    function saveOrder(orderData, callback)
    {
        // Append data form other sources
        orderData.status         = "paid";
        orderData.btw_percentage = 21;
        orderData.order_date     = new Date();
        orderData.delivery_costs = 3.95;
        orderData.cart           = JSON.parse(CookieHelper.getCookie("cart"));

        $.ajax({
            url: "http://localhost:8081/orders",
            type: "post",
            data: JSON.stringify(orderData),
            contentType: "application/json;",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data)
            {
                CookieHelper.deleteCookie("cart");
                callback();
            },
            error: function (xhr, status, error) {
                console.log("someting went wrong");
            }
        });

    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrderInformation: getOrderInformation,
        saveOrder: saveOrder
    }
};
var FavoriteListModel = function()
{
    function getFavoriteList(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist", // "https://api.az-games.nl/favoritelist"
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                console.log("getFavoriteList ajax done");
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteFromFavoriteList(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist/" + String(ean), //"https://api.az-games.nl/favoritelist/
            type: "DELETE",
            dataType: 'json',
            // contentType: "application/json; charset=utf-8",
            // data: JSON.stringify(data),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data); //moet data per se meegeven aan callback?
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getFavoriteList: getFavoriteList,
        deleteFromFavoriteList: deleteFromFavoriteList
    }
};
var LoginModel = function()
{
    function login(email, password, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/login",
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Basic " + btoa(email + ":" + password)
            },
            success: function (data) {
                // put token in cookie
                CookieHelper.createCookie("access_token", data.access_token);
                CookieHelper.createCookie("user_id", data.user_id);

                // 'reload' page
                onLoadPage();

                // let controller resume with stuff
                callback(data);
            },
            error: function (xhr, status, error) {
                if (xhr.status == 401)
                {
                    $("#error_message").show();
                }
                else if (xhr.status == 403)
                {
                    $("#error_blocked_message").show();
                }
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        login: login
    }
};
var LogoutModel = function()
{
    function logout(callback)
    {
        // let controller resume with stuff
        CookieHelper.deleteCookie("access_token");
        CookieHelper.deleteCookie("user_id");

        // 'reload' page
        onLoadPage();

        callback();
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        logout: logout
    }
};
var OrdersModel = function()
{
    /**
     * Get all orders
     */
    function getOrders(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/orders",
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrders: getOrders,
    }
};
var OrderModel = function(order_id)
{
    /**
     * Get all order
     */
    function getOrder(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/orders/" + order_id,
            type: "GET",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function addToFavoriteList(ean_number, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/favoritelist/" + ean_number, // "https://api.az-games.nl/favoritelist/"
            type: "post",
            dataType: 'json',
            data: JSON.stringify({}),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function(xhr, status, error) {
                alert("Product is al in je favorieten.");
                // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getOrder: getOrder,
        addToFavoriteList: addToFavoriteList
    }
};
var ProductsModel = function()
{
    function getPage(filter, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products?" + filter,
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getPage: getPage
    }
};
var PublicWishlistModel = function(user_id)
{
    this.getPublicWishlist = function(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/public_wishlist/" + user_id,
            type: "get",
            dataType: 'json',
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }
};
var RegisterModel = function()
{
    function register(formData, callback)
    {
        // Modify data before sending (also convert to UTC)
        formData.date_of_birth = new Date(Date.UTC(formData.jaar, formData.maand, formData.dag));

        // Remove year, month and day
        delete formData.jaar;
        delete formData.maand;
        delete formData.dag;

        $.ajax({
            url: "https://api.az-games.nl/user/register",
            type: "post",
            data: JSON.stringify({
                e_mail : formData.e_mailadres,
                password : formData.wachtwoord,
                first_name : formData.voornaam,
                insertion : formData.tussenvoegsel,
                surname : formData.achternaam,
                gender : formData.gender,
                date_of_birth : formData.birth_date,
                phone_number : formData.mobiel_nummer,
                secret_question : formData.security_question,
                secret_question_answer : formData.security_answer,
                postal_code : formData.postcode,
                number : formData.huisnummer,
                street_name : formData.straatnaam,
                city : formData.plaats
            }),
            contentType: "application/json;",
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#regi_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        register: register
    }
};
var ResetPasswordModel = function()
{
    function resetpassword(formData, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/user/resetpassword",
            type: "post",
            data: JSON.stringify({
                email : formData.e_mailadres,
                secret_question_answer : formData.security_answer,
                secret_question : formData.security_question,
                new_password : formData.wachtwoord,
                repeat_password : formData.wachtwoord2
            }),
            contentType: "application/json;",
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("views/error/error.html");
                $("#reset_password_api_error_message").show();
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        resetpassword: resetpassword
    }
};
var ProductModel = function(ean)
{
    function GetProductInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/products/" + ean,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetProductInfo: GetProductInfo
    }
};
var StatsModel = function()
{
    function getGraphData(range, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/stats/topgames?range=" + range,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                callback(range, data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getGraphData: getGraphData
    }

};
var UserModel = function(userid)
{
    function GetUserInfo(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/users/" + userid,
            type: "get",
            dataType: 'json',
            success: function (data) {
                // let controller resume with stuff
                callback(data[0]);
            },
            error: function (xhr, status, error) {
                $("#component").load("/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        GetUserInfo: GetUserInfo
    }
};
var WishlistModel = function()
{
    function getWishlist(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist",
            type: "get",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function addToWishlist(viewData, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") /*+ "/" + viewData.ean_number*/,
            type: "post",
            dataType: 'json',
            data: JSON.stringify({
                wishlist_id : viewData.wishlist_id,
                //ean_number : viewData.ean_number
            }),
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function(xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function deleteFromWishlist(ean, callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/wishlist/" + CookieHelper.getCookie("user_id") + "/" + String(ean),
            type: "DELETE",
            dataType: 'json',
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function switchPublicState(newStatus, callback)
    {
        var go = false;

        var newDBStatus = "0";
        if (newStatus == "public"){
            newDBStatus = "1";
            go = true;
        } else if (newStatus == "private"){
            go = true;
        } else {
            console.log("newStatus has unexpected value. newStatus = " + newStatus);
        }

        if (go)
        {
            $.ajax({
                url: "https://api.az-games.nl/wishlist/switch_public",
                type: "patch",
                dataType: 'json',
                data: JSON.stringify({"newDBStatus":newDBStatus}),
                headers: {
                    "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
                },
                success: function (data) {
                    callback(data);
                },
                error: function (xhr, status, error) {
                    $("#component").load("/views/error/error.html");
                }
            });
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getWishlist: getWishlist,
        addToWishlist: addToWishlist,
        deleteFromWishlist: deleteFromWishlist,
        switchPublicState: switchPublicState
    }
};
var AdminsertController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function main()
    {
        ViewHelper.setView();
        ViewHelper.setActionListener(formToData);
    }

    function formToData()
    {
        console.log("action listener triggered: in formToData()");
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#error__message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["publisher", "title", "subtitle", "genre", "franchise", "description", "ean_number", "platform", "stock", "price", "image"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })
        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#error__message").show();
            return false;
        }

        // let model send game info to API
        updateDB(formData);

    }

    function updateDB(formData)
    {
        Model.updateDB(formData, function()
        {
            console.log("game succesvol opgeslagen met pi_id ....")
        });
    }

    return {
        main: main
    }
};
var AdminUserController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        viewHelper.setSaveListener(saveUserInfo);
        viewHelper.setDeleteListener(deleteUser);
    }

    function getPage()
    {
        Model.getPage(setView);
    }
    
    function setView(data) 
    {
        ViewHelper.setView(data);
    }

    function saveUserInfo(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation();

        var formData = $(this).serializeObject();

        Model.saveUserInfo(formData, function(formData)
        {
            alert("Gebruiker succesvol geüpdate.");
        });
    }

    function deleteUser(user_id)
    {
        Model.deleteUser(user_id, function()
        {
            alert("Gebruiker succesvol gedelete.");
            Router.route("/admin");
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var AdminController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
    }

    function getPage()
    {
        Model.getPage(setView); //"", function (data) { ViewHelper.setView(data); });
    }
    function setView(data) 
    {
        ViewHelper.setView(data);
    }


    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var CartController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    /**
     * Get all cart items and pass the items to the ViewHelper
     */
    function getCart()
    {
        Model.getCart(function (data) { ViewHelper.setView(data); });
    }

    /**
     * Add a item to the cart and pass it to the viewHelper
     * 
     * @param {int} id  Item id
     */
    function addProduct(id)
    {
        Model.addProduct(id, function (data) { ViewHelper.addItem(data); });
    }

    /**
     * Remove a product and call the viewHelper
     */
    function removeProduct(id)
    {
        Model.removeProduct(id, function (data) { });
    }

    // Main function, also the start startpoint for a page
    function main()
    {                        
        ViewHelper.setActionListener(getCart);
        ViewHelper.setAddProductListener(addProduct);
        ViewHelper.setRemoveListener(removeProduct);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var CheckoutController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.getOrderInformation(function (data) {
            ViewHelper.setView(data);
        });
    }

    function order(event)
    {
        event.preventDefault();
        event.stopImmediatePropagation();

        var formData = $(this).serializeObject();

        Model.saveOrder(formData, function() {
            ViewHelper.finishOrder();
            ViewHelper.clearCart();
        })
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        if (UserHelper.isLogedIn() == false)
        {
            Router.route("/login");
        }
        else
        {
            ViewHelper.setActionListener(actionPerformed);
            ViewHelper.setOrderListener(order)
        }
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var DeleteController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        
    }
}
var ErrorController = function(viewHelper)
{
    var ViewHelper = viewHelper;

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var FavoriteListController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;
    
    function main()
    {
        ViewHelper.setActionListener(getFavoriteList);
        ViewHelper.setDeleteListener(deleteFromFavoriteList);
    }

    function getFavoriteList()
    {
        Model.getFavoriteList(setView);
    }

    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function deleteFromFavoriteList(ean, div_to_hide)
    {
        Model.deleteFromFavoriteList(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    return {
        main: main
    }
};
var LoginController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();
        event.stopImmediatePropagation();

        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function onSuccess(data) {
            // show uitloggen button
            $(".inloggen_text").hide();
            $(".uitloggen_text").show();

            Router.route("products");
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to login form
        ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var LogoutController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.logout(function (data) {
            // show uitloggen button
            $(".inloggen_text").show();
            $(".uitloggen_text").hide();

            // set view to login form
            ViewHelper.setView();
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var OrdersController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.getOrders(function(data) {
            viewHelper.setView(data);
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var OrderController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        Model.getOrder(function(data) {
            viewHelper.setView(data);
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        ViewHelper.setActionListener(actionPerformed);
        ViewHelper.setAddToFavoritesListener(addToFavoriteList);
    }

    function addToFavoriteList(ean_number)
    {
        Model.addToFavoriteList(ean_number, function onSuccess()
        {
            $(this).toggleClass("like--active");
            alert("Product succesvol toegevoegd aan je favorieten."); // im staat voor imaginary/denkbeeldig
            // Comment to self = (ORDER + ORDER HISTORY verhaal Niels) + (FAVORIETEN LIJST verhaal Habbo) SAMENVOEGEN STRAKS OR ELSE...!!!!
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};

var ProductsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function getPage()
    {
        Model.getPage("", function (data) { ViewHelper.setView(data); });
    }

    function filterProducts(event)
    {
        // Prevent sending the form (page reload)
        event.preventDefault();

        var filters = $(this).serialize();
        Model.getPage(filters, function (data) { ViewHelper.loadProducts(data); });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getPage);
        ViewHelper.setFilterListener(filterProducts);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var PublicWishlistController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;

    function main()
    {
        console.log("in main");
        ViewHelper.setActionListener(getPublicWishlist);
    }

    function getPublicWishlist()
    {
        Model.getPublicWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    return {
        main: main
    }
};
var RegisterController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#regi_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // fix date of birth (API expects certain format)
        formData["birth_date"] = formData.jaar + "-" + formData.maand + "-" + formData.dag;

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["voornaam", "achternaam", "postcode", "huisnummer", "e_mailadres", "wachtwoord", "wachtwoord2", "security_answer"]; //dropdowns (like gender) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#register_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }

        // let model send user info to API
        Model.register(formData, function (data) {
            ViewHelper.setView('/views/register/after_register.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // set view to register form
        ViewHelper.setView('/views/register/register.html');

        // user fills in register info; clicks 'register': view notices this and reacts
        ViewHelper.setActionListener(actionPerformed);

        // email and password are send to API; API checks if email already exists (and whether password is correct?) 
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};
var ResetPasswordController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
     // Function that is executed on a action listener
    function actionPerformed()
    {
        // Prevent sending the form
        event.preventDefault();

        // reset error messages
        $("#reset_password_api_error_message").hide();
        $("#ww2_error_message").hide();

        // put form fields in javascript Object
        var formData = {};

        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // check whether any mandatory field is left empty by user and
        // if so, abort function
        var mandatoryFieldMisses = false;
        var mandatoryFields = ["wachtwoord", "wachtwoord2", "e_mailadres","security_answer"]; //dropdowns (like security_question_answer) are always filled in, so don't put in this list

        // (reset all fields to 'valid' because user may have filled in fields since
        // the previous time this function was called)
        $.each(mandatoryFields, function (i, manField) {
            $("#" + manField).removeClass("invalid");
        })

        $.each(mandatoryFields, function (i, manField) {
            if (formData[manField] == "")
            {
                $("#" + manField).addClass("invalid");

                mandatoryFieldMisses = true;
            }
        })

        
        // if a mandatory field is empty, show error message to user and abort function
        if (mandatoryFieldMisses)
        { 
            // scroll to top of page so that users see message "something is not filled in"
            window.scrollTo(0, 0);
            // show message "something is not filled in"
            $("#reset_error_message").show();
        };

        var passwordsNotIdentical = false;

        if (formData.wachtwoord != formData.wachtwoord2) 
        {
            passwordsNotIdentical = true;
            $("#ww2_error_message").show();
            $("#wachtwoord").addClass("invalid");
            $("#wachtwoord2").addClass("invalid");
        }

        // abort function if mandatory field misses or passwords not identical
        if (mandatoryFieldMisses || passwordsNotIdentical)
        {
            return false;
        }
        // let model send user info to API
        Model.resetpassword(formData, function (data) {
            ViewHelper.setView('views/resetpassword/after_reset.html');
        });
    }

    // Main function, also the start startpoint for a page
    function main()
    {      
        // set view to reset password form
        ViewHelper.setView('views/resetpassword/resetpassword.html');

        ViewHelper.setActionListener(actionPerformed);
        // new action wanner er op filter wordt gedrukt
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};





var ProductController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Function that is executed on a action listener
    function actionPerformed(event)
    {
        // Prevent sending the form
        event.preventDefault();






        // Loop trough the form data and get all fields
        var formData = {};
        $.each($(this).serializeArray(), function (i, field) {
            formData[field.name] = field.value;
        });

        // let model send email and password to API
        Model.login(formData.email, formData.password, function (data) {
            // show uitloggen button
            $(".inloggen_text").hide();
            $(".uitloggen_text").show();

            // Weergeef een andere pagina gebasseerd op 'admin' of 'registered user'
            new PageController(new PageViewHelper(), new PageModel()).main();
        });
    }

    // let view show view with data from database
    function showView(data)
    {
        viewHelper.setView(data);
    }

    // Main function, also the start startpoint for a page
    function main()
    {
        // what happens:
        // 1) user clicks on a product 
        // 2) model gets info of the product
        // 3) system puts info in html
        // 4) view shows info

        // 2) model gets info of the product
        // 3) system puts info in html
        model.GetProductInfo(showView);



        // set view to login form
        //ViewHelper.setView();

        // user fills in email and password; clicks 'login': VIEW notices this and reacts
        //ViewHelper.setActionListener(actionPerformed);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main,
        showView : showView
    }
};
var StatsController = function(viewHelper, model)
{
    var Model      = model;
    var ViewHelper = viewHelper;
    
    // Main function, also the start startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getGraphData);
        ViewHelper.setTopTenChangeListener(getChangedTopTen);
    }

    function getGraphData()
    {
        Model.getGraphData("quarter", setTopTenView);
    }
    function setTopTenView(range, data)
    {
        ViewHelper.setTopTenView(range, data);
    }

    function getChangedTopTen(range)
    {
        Model.getGraphData(range, setTopTenView);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        main: main
    }
};

var WishlistController = function(viewHelper, model)
{
    var Model = model;
    var ViewHelper = viewHelper;

    function main()
    {
        ViewHelper.setActionListener(getWishlist);
        ViewHelper.setDeleteListener(deleteFromWishlist);
        ViewHelper.setPublicListener(switchPublicState);
    }

    function getWishlist()
    {
        Model.getWishlist(setView);
    }
    function setView(data)
    {
        ViewHelper.setView(data);
    }

    function deleteFromWishlist(ean, div_to_hide)
    {
        Model.deleteFromWishlist(ean, function()
        {
            ViewHelper.hideItem(div_to_hide);
        });
    }

    function switchPublicState(newStatus)
    {
        Model.switchPublicState(newStatus, function()
        {
            ViewHelper.showExampleButton(newStatus);
        });
    }

    return {
        main: main
    }
};
var AdminsertViewHelper = function()
{
    function setView()
    {
        document.title = "New Games - AZ Games"

        $("#component").load("views/adminsert/adminsert.html", function()
        {
            var date = new Date();

            for(i = 1; i < 32; i++)
            {
                $("#dag").append("<option value='" + i + "'>" + i + "</option>");
            }

            for (i = 1900; i < date.getFullYear() + 1; i++)
            {
                if (i == 2000)
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                    continue;
                }

                $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
            }
        });
    }

    function setActionListener(action)
    {
        $("#component").on("submit", "#adminsert__form", action)
    }

    return {
        setActionListener: setActionListener,
        setView: setView
    }
}
var AdminViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
     function setView(data)
    {
        document.title ="Admin - AZ Games";

        $("#component").load('/views/admin/admin.html', function () { // waar id = 'component' doe .load......
            $.each(data, function(key, value) {
                // Clone product
                var user = $('#single_user').clone();
                
                // Add product info
                $(user).find(".user__firstname").html(value.first_name);
                $(user).find(".user__firstname").attr('href', '/admin_user/' + value.user_id);
                $(user).find(".user__insertion").html(value.insertion);
                $(user).find(".user__lastname").html(value.surname);
                $(user).find(".user__email").html(value.email);
                $(user).find(".user__phonenumber").html(value.phone_number);

                $("#users_body").append(user);
            });

            // Remove the first list item, because this item is always empty
            $("#single_user").first().remove();
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
    }
}

    //dat hieronder zat aardig wat werk in... Donald wil nog ff houden

    // function showUsers(data)
    // {
    //     document.title ="Admin - AZ Games";

    //     $("#component").load('/views/admin/admin.html', function () {
    //         var table = $("<table id='users_table'></table>");

    //         // table header
    //         var row = $('<tr></tr>');
    //         row.append('<td>Voornaam</td><td>Tussenv</td><td>Achternaam</td><td>Gebruikersnaam</td><td>email</td><td>type</td>');

    //         $.each(data, function(numberr, user) 
    //         {
    //             var row = $('<tr></tr>');
    //             $.each(user, function(key, value)
    //             {
    //                 if (value != undefined)
    //                 {
    //                     row.append( $("<td class='td_user'></td>").html(String(value)) );
    //                 } else {
    //                     row.append( $("<td class='td_user'></td>") );
    //                 }
    //             })
    //             table.append(row);
    //             // //for additional user info if clicked
    //             // row = $('<div class="tobetable"></div>');
    //             // table.append(row);
    //         });
    //         $('#users').append(table);
    //     });
    // }

    // function putInfoInHtml(clicked, data)
    // {
    //     console.log('in putInfoInHtml()');
    //     // show info of the right user (if not already showing it)
    //     // insert row as table header
    //     var headerrow = $('<tr></tr>').append('<td>ww</td><td>geblokkeerd</td><td>id</td><td>gender</td><td>geboortedatum</td><td>vraag</td><td>antwoord</td>');

    //     // insert row with te userinfo
    //     var inforow = $('<tr></tr>');

    //     var count = 0;
    //     $.each(data[0], function(key, value)
    //     {
    //         if (count == 1) { // geblokkeerd
    //             if (value == 1) {
    //                 value = 'nee';
    //             } else if (value == 0) {
    //                 value = 'ja'
    //             } else {
    //                 value = 'db fout?'
    //             }
    //         }

    //         console.log(count);
    //         var td = $('<td></td>').append(value);

    //         console.log('key, value: ' + key, value);

    //         inforow.append(td);

    //         count += 1;
    //     })

    //     inforow.insertAfter( $(clicked).closest('tr') );
    //     headerrow.insertAfter($(clicked).closest('tr'));
    // }


var CartViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        if (viewData != "")
        {
            viewData.forEach(function (item, index) {
                addItem(item);
            });
        }
    }

    /**
     * Update the total price  of the cart
     * 
     * @param {int} totalPrice  Total price of the cart
     */
    function updateTotalPrice(newPrice)
    {
        newPrice = parseFloat(newPrice) + parseFloat($(".cart__total .price").html().substr(1));
        $(".cart__total .price").html("€" + parseFloat(newPrice).toFixed(2));
    }

    /**
     * Make new cart item visiable in the DOM
     * 
     * @param  {array}  item  Product
     */
    function addItem(item)
    {
        var cartItem = $('<div>').html($('.sidebar__content__tmp').html());

        cartItem.find(".cart__item__title").html(item.title);
        cartItem.find(".cart__item__price").html("€" + item.price.toFixed(2));
        cartItem.find(".cart__item__image img").attr("src", item.image);
        cartItem.find(".cart__item").attr("data-id", item.ean_number)

        $(".cart").append(cartItem);

        // Change amount of items
        var amount = $(".cart_button .count").html();
        $(".cart_button .count").html(parseInt(amount) + 1);

        // Update the total price
        updateTotalPrice(item.price);
    }

    /**
     * Load the cart when the page is  rease
     */
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    /**
     * Listener for the Add to cart button
     * 
     * @param  {function} addtoCart  Model callback
     */
    function setAddProductListener(addToCart)
    {
        $("body").on("click", ".addtocart", function (event) {
            event.preventDefault();

            var product_id = $(this).data("id");
            addToCart(product_id);
            $(this).closest("#to_shop_cart").find("#shop_cart").fadeTo(0, 100).delay(1000).fadeTo(600, 0);
        })
    }

    /**
     * Listener for remove a product from the DOM cart
     * 
     * @param {function} removeProduct Callback function to remove the prodcut from the memory
     */
    function setRemoveListener(removeProduct) {
        $("body").on("click", ".cart__item__remove", function (event){
            var cartitem   = $(this).parent();
            var product_id = $(this).parent().data("id");

            // Remove product from DOM cart
            $(cartitem).addClass("cart__item--removed");
            $(cartitem).on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
                $(this).remove();
            });

            // Decrese count
            var amount = $(".cart_button .count").html();
            $(".cart_button .count").html(parseInt(amount) - 1);

            removeProduct(product_id)
            updateTotalPrice(-$(cartitem).find(".cart__item__price").html().substr(1))
        });
    }
    
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        addItem: addItem,
        updateTotalPrice: updateTotalPrice,
        setActionListener: setActionListener,
        setAddProductListener: setAddProductListener,
        setRemoveListener: setRemoveListener,
    }
};
var AdminUserViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setView(value)
    {
        //preventDefault();
        $("#component").load('/views/adminuser/adminuser.html', function ()
        {
            $("#delete_btn").attr("data-id", value.user_id)   
            $("#first_name").val(value.first_name);
            $("#insertion").val(value.insertion);
            $("#surname").val(value.surname);
            $("#user_type").val(value.user_type);
            $("#email").val(value.email);
            $("#password").attr('placeholder', 'Vul hier iets in om het wachtwoord te veranderen');
            $("#gender").val(value.gender);
            $("#date_of_birth").val(value.date_of_birth);
            $("#phone_number").val(value.phone_number);
            $("#is_active").val(value.is_active);
            $("#user_id").val(value.user_id);

            var today       = new Date();
            var dateOfBirth = new Date(value.date_of_birth);

            for(i = 1; i < 32; i++)
            {
                if (i == dateOfBirth.getDate())
                {
                    $("#dag").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                } else
                {
                    $("#dag").append("<option value='" + i + "'>" + i + "</option>");
                }
            }

            for (i = 1900; i < today.getFullYear() + 1; i++)
            {
                if (i == dateOfBirth.getFullYear())
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                }
                else
                {
                    $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
                }
            }
            
            $("#maand").val(dateOfBirth.getMonth());
        })
    }

    function setSaveListener(action)
    {
        $(document).on('submit', '#userform', action);
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", '#delete_btn', function (e)
        {
            e.preventDefault();
            action($(this).data("id"));
        });
    }

    return {
        setActionListener: setActionListener,
        setView: setView,
        setSaveListener: setSaveListener,
        setDeleteListener: setDeleteListener
    }
}
var CheckoutViewHelper = function()
{
    // Change the view of the page
    function setView(cart)
    {
        document.title = "Bestellen - AZ Games";

        $("#component").load('/views/checkout/checkout.html', function() {

            if (cart != undefined && cart != "")
            {
                // Add cart content
                $.each(cart, function(key, value) {
                    var product = $("#product").clone();

                    $(product).find(".product__title").html(value.title);
                    $(product).find(".product__image img").attr("src", value.image);
                    $(product).find(".product__price").append(("€ ") + value.price.toFixed(2));

                    $("#product__list").append(product);
                    $("#product__list").append("<hr />");
                });

                $("#order_info .order__navigate").first().removeClass("disabled");
            }
            else
            {
                $("#product__list").html("<div class='message message--info'>Je winkelwagen is nog leeg, stop er producten in om deze te kunnen bestellen.</div>")
            }

            // Remove the first list item, because this item is always empty
            $("#product").first().remove();

            // Set and move total price to end of list
            $("#total").appendTo("#product__list");
            $(".total__price").html($(".cart__total .price").html());

            // Set delivery date (we always deliver in one day)
            var today = new Date();
            today.setDate(today.getDate() + 1);

            $(".delivery_date").html(today.getDate() + " " + today.toLocaleString("nl-NL", {month: "long"}));
            $(".delivery__calendar__month").html(today.toLocaleString("nl-NL", {month: "short"}).toUpperCase());
            $(".delivery__calendar__day").html(today.getDate());

            // Set user address
            UserHelper.getUserInfo(function(user) {
                $(".adres__name").html(user.first_name + " " + user.insertion + " " + user.surname);
                $(".adres__street").html(user.address.street + " " + user.address.house_number);
                $(".adres__postalcode").html(user.address.postal_code + " " + user.address.city.toUpperCase());
            });
        });
    }

    // Go to the last step of the order process
    function finishOrder()
    {
        $("ul.order-steps li").removeClass("active");
        $("ul.order-steps li a").addClass("disabled");
        $("ul.order-steps li.confirmation").addClass("active");

        $(".order__step").removeClass("order__step--active");
        $("#confirmation").addClass("order__step--active");
    }

    // Clear the visible cart
    function clearCart()
    {
        $(".cart").empty();
        $(".cart_button .count").html("0");
        $(".cart__total .price").html("€00.00")
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Confirm the order when sbmitting the form
    function setOrderListener(action)
    {
        $(document).on("submit", "#orderform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener,
        setOrderListener: setOrderListener,
        finishOrder: finishOrder,
        clearCart: clearCart
    }
};
var FavoriteListViewHelper = function()
{
    //change view of page
    function setView(viewData)
    {
        //console.log("WL VIEW: Inside setView");
        document.title = "Favorietenlijst - AZ Games";
        $("#component").html('<div class="col-12"><div class="col-12" id="favoritelist"></div></div>');

        loadFavoritelist(viewData);
    }
    function loadFavoritelist(viewData)
    {
        $("#favoritelist").load('/views/favoritelist/favoritelist.html', function ()
        {
            // add all favoritelist items to html
            var current = 0;
            var count = 0;

            $.each(viewData, function(key, value) {
                // Clone product
                var favorite__list__item = $('<div>').append($('#favorite__list__item').clone());

                // Add product info
                current = current + 1;

                $(favorite__list__item).find(".favorite__list__id").append(current);
                $(favorite__list__item).find(".favorite__list__image img").attr("src", value.image);
                $(favorite__list__item).find(".favorite__list__title").html(value.title);
                $(favorite__list__item).find(".favorite__list__price").append(("€ ")+value.price);
                $(favorite__list__item).find(".favorite__list__platform").append(PlatformLogo(value.platform));
                $(favorite__list__item).find(".favorite__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(favorite__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                $(favorite__list__item).find("#cart_btn").attr("data-id", value.ean_number);

                $("#favorite__list").append(favorite__list__item);

                count++;
            });

            if (count == 0) 
            {
                $("#favoritelist_error_message").show();
            }

            // Remove the first list item, because this item is always empty
            $("#favorite__list__item").first().remove();
        });
    }

    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"       
    }

    function setDeleteListener(action)
    {
        console.log("setDeleteListener()");
        $("#component").off().on("click", "#delete_btn", function(e)
        {
            e.preventDefault();
            var ean = $(this).data("id");
            var div_to_hide = $(this).closest(".row");
            action(ean, div_to_hide);
        } );
    }

    function hideItem(div_to_hide)
    {
        div_to_hide.fadeTo(200, 0).slideUp(200);
    }

    return {
        setView: setView,
        loadFavoritelist: loadFavoritelist,
        setActionListener: setActionListener,
        setDeleteListener: setDeleteListener,
        hideItem: hideItem
    }
}
var ErrorViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Oeps - AZ Games";

        $("#component").load('/views/error/error.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        $(document).ready(eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var LoginViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title ="Inloggen - AZ Games";

        $("#component").load('/views/login/login.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in login form
        // user presses 'login'

        // if user presses 'login', perform action (make controller send email and password to API)
        $("#component").on("submit", "#loginform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var StatsViewHelper = function ()
{
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
    function setTopTenView(range, graphData)
    {
        console.log(graphData);
        document.title ="Stats - AZ Games";

        $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
            // default select data
            $("#component").find("#range_switch").val(range);

            // graph
            var labels = new Array();
            var data = [];

            var gameCount = 0;
            var last_rank_num = 0; //assuming value.rank is never 0!
            var highestVal = 0;

            $.each(graphData, function(key, value) {
                gameCount++;

                if (gameCount < 11 || value.rank == last_rank_num) {
                    labels.push(value.title);
                    data.push(value.user_count);
                    
                    if (gameCount == 10) {
                        last_rank_num = value.rank;
                    }
                }
            });
            
            console.log(labels);
            console.log(data);

            var el = $("#graph__toptenitems__cnvs");
            var TopTenChart = new Chart(el, {
                type: 'horizontalBar',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: 'rgba(0, 200, 26, 1)', //groen
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display:false
                    },
                    title: {
                        display:true,
                        text: "Meest verkochte games" // need in januari, in februari, etc.
                    },
                    responsive:true,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                beginAtZero:true,
                                // maxRotation: 90,
                                // minRotation: 90,
                            }
                        }]
                    }
                }
            })

            // put desciption below graph
            var descr = 'Deze grafiek laat de games zien met het meeste aantal gebruikers dat de game 1 of meer keer heeft gekocht in de gekozen tijdsperiode.';

            var theDiv = document.getElementById("description__topten");
            var content = document.createTextNode(descr); 
            theDiv.appendChild(content); 

        });
    }

    function setTopTenChangeListener(action)
    {
        $("#component").on("change", "#range_switch", function()
        {
            var range = $("#range_switch").val();
            console.log("range: " + range);
            action(range);
        })
    }

    return {
        setActionListener: setActionListener,
        setTopTenView: setTopTenView,
        setTopTenChangeListener: setTopTenChangeListener
    }
}
var LogoutViewHelper = function()
{
    // Change the view of the page
    function setView()
    {
        document.title = "Uitloggen - AZ Games";

        $("#component").load('/views/logout/logout.html');
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var OrderViewHelper = function()
{
    // Change the view of the page
    function setView(order)
    {
        document.title ="Bestelgeschiedenis - AZ Games";

        $("#component").load('/views/order/order.html', function() {
            // Date
            var date = new Date(order.order_date);

            // Format shipping method
            switch(order.shipping_method)
            {
                case "deliver":
                    order.shipping_method = "Bezorgen (via PostNL)";
                    break;
                case "pickup":
                    order.shipping_method = "Ophalen";
                    break;
            }

            // Fill order info
            $(".order__date").html(date.getDate() + " " + date.toLocaleString("nl-NL", {month: "long"}) + " " + date.getFullYear())
            $(".order__paymentmethod").html(order.payment_method);
            $(".order__shippping").html(order.shipping_method);

            // Add products
            $.each(order.products, function(key, value) {
                var product = $("#product").clone();

                $(product).find(".product__title").html(value.title);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".product__amount").html("<b>Aantal:</b> " + value.amount)
                $(product).find(".product__price").append(("€ ") + value.price.toFixed(2));
                $(product).find(".addToFavoritesButton").attr("data-id", value.ean_number);

                $("#product__list").append(product);
                $("#product__list").append("<hr />");
            });

            // Remove the first list item, because this item is always empty
            $("#product").first().remove();

            // Set and move total price to end of list
            $("#total").appendTo("#product__list");
            $(".total__price").html("€ " + order.total_order_price)
        });
    }

    function setActionListener(action)
    {
        $(document).ready(action);
    }

    function setAddToFavoritesListener(action)
    {
        $("#component").on("click", ".addToFavoritesButton", function(e)
        {
            e.preventDefault();
            var ean = $(this).data("id");
            action(ean);
        })
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener,
        setAddToFavoritesListener: setAddToFavoritesListener
    }
};
var OrdersViewHelper = function()
{
    // Change the view of the page
    function setView(orders)
    {
        document.title ="Bestelgeschiedenis - AZ Games";

        $("#component").load('/views/orders/orders.html', function() {
            $.each(orders, function(key, value) {
                // Clone product
                var order = $('#single_order').clone();

                // Date
                var date = new Date(value.order_date);

                // Format shipping method
                switch(value.shipping_method)
                {
                    case "deliver":
                        value.shipping_method = "Bezorgen (via PostNL)";
                        break;
                    case "pickup":
                        value.shipping_method = "Ophalen";
                        break;
                }
                
                // Add product info
                $(order).find(".order__number").html(value.order_number);
                $(order).find(".order__date").html(date.getDate() + " " + date.toLocaleString("nl-NL", {month: "long"}) + " " + date.getFullYear())
                $(order).find(".order__price").html("€ " + value.total_order_price);
                $(order).find(".order__paymentmethod").html(value.payment_method);
                $(order).find(".order__shippping").html(value.shipping_method);
                $(order).find(".order__link a").attr("href", "/order/" + value.order_number);

                $("#orders_body").append(order);
            });

            // Remove the first list item, because this item is always empty
            $("#single_order").first().remove();
        });
    }

    function setActionListener(action)
    {
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var PublicWishlistViewHelper = function()
{
    function setActionListener(action) // heb de $ erbij gezet. internet had het daarover (zie onderstaande comment ook)
    {
        $(document).ready(action);
    }

    //change view of page
    function setView(viewData)
    {
        console.log(viewData)
        if (viewData.length == 0)
        {
            document.title = "Error - AZ Games"
            $("#component").load("/views/error/error.html");
        }
        else if (viewData.length > 0)
        {
            if (viewData[0].is_public == 1){
                loadPublicWishlist(viewData);
            }
            else if (viewData[0].is_public == 0)
            {
                document.title = "Error - AZ Games"
                $("#component").load("/views/error/error.html");
            }
            else{
                console.log("viewData[0].is_public heeft onverwachte waarde. viewData[0].is_public = " + viewData[0].is_public);
            }
        }
        else
        {
            console.log("viewData[0].length heeft onverwachte waarde. viewData.length = " + viewData.length);
        }
    }

    function loadPublicWishlist(data)
    {
        document.title = "Verlanglijst " + data[0].first_name + " - AZ Games";

        $("#component").html('<div class="col-12" id="public_wishlist"></div>');

        $("#public_wishlist").load('/views/public_wishlist/public_wishlist.html', function ()
        {
            $("#public__wishlist__header").html("Verlanglijst van " + data[0].first_name);

            var current = 0;
            $.each(data, function(key, value)
            {                
                var wishlist_item = $('<div>').append( $('#wish__list__item').clone() );

                current++;
                $(wishlist_item).find(".wish__list__id").append(current);
                $(wishlist_item).find(".wish__list__image img").attr("src", value.image);
                $(wishlist_item).find(".wish__list__title").html(value.title);
                $(wishlist_item).find(".wish__list__price").append(("€ ")+value.price);
                $(wishlist_item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wishlist_item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(wishlist_item).find(".wish__list__likebutton").append();
                $(wishlist_item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wishlist_item).find("#cart_btn").attr("data-id", value.ean_number);

                wishlist_item.appendTo($("#wish__list"));
            })

            $("#wish__list__item").first().remove();
        });
    }

    return {
        setView: setView,
        loadPublicWishlist: loadPublicWishlist,
        setActionListener: setActionListener
    }


}
var ProductsViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        document.title = "Producten - AZ Games";

        $("#component").html('<div class="col-12"><div class="col-3" id="filters"></div><div class="col-9" id="products"></div></div>');
        // load filters
        $("#filters").load('/views/products/filters.html');

        // load products
        loadProducts(viewData);
    }

    function loadProducts(viewData)
    {
        $("#products").load('/views/products/products.html', function () { // waar id = 'component' doe .load......
            $.each(viewData, function(key, value) {
                // Clone product
                var product = $('<div>').append($('#product__list__item').clone());
                
                // Add product info
                $(product).find(".product__title").html(value.title);
                $(product).find(".product__subtitle").append(value.genre +(" | PEGI ") + value.pegi_age +(" | ")+ PlatformLogo(value.platform));
                $(product).find(".product__description").html(CutString(value.description));
                $(product).find(".product__price").append(("€ ")+value.price.toFixed(2));
                $(product).find("#buttons__info, .product__image a, .product__title").attr("href", "product/" + value.ean_number);
                $(product).find(".product__image img").attr("src", value.image);
                $(product).find(".addtocart").attr("data-id", value.ean_number);

                $("#product__list").append(product);
            });

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
        });
    }

    //Show more/less
    function CutString(text){
        var ShowAmount = 50;
        var WordsArray = text.split(" ");
        if(WordsArray.length>ShowAmount){
            var ShortString = "";
            for(i=0; i<ShowAmount; i++){
                ShortString += WordsArray[i] + " ";
            }
            return ShortString+"...";
        }else{
            return text;
        }
    };

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    function setFilterListener(action)
    {
         // Hier het formulier versturen als we op een checkbox drukken
        $("#component").off().on("change", "input[type=checkbox]", function(event) {
            $("#product_filter").submit();
        });

        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change keyup", "input[name=price-max], input[name=price-min]", function(event) {
            if($("#pricemin").val() == null) {
                $("#pricemin").val(0);
            }
            else
            {
                $("#product_filter").submit();
            }
        });

        $("#component").on("submit", "#product_filter", action);
    }
    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProducts: loadProducts,
        setActionListener: setActionListener,
        setFilterListener: setFilterListener
    }
};
var RegisterViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Registreren - AZ Games";
        
        $("#component").load(viewToShow, function()
        {
            var date = new Date();

            for(i = 1; i < 32; i++)
            {
                $("#dag").append("<option value='" + i + "'>" + i + "</option>");
            }

            for (i = 1900; i < date.getFullYear() + 1; i++)
            {
                if (i == 2000)
                {
                    $("#jaar").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                    continue;
                }

                $("#jaar").append("<option value='" + i + "'>" + i + "</option>");
            }
        });
    }

    // Execute the event when 'something' happens (when a button is clicked for example)
    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $("#component").on("submit", "#registerform", action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var ProductViewHelper = function()
{
    // Change the view of the page
    function setView(product)
    {
        document.title = product.title + " - AZ Games";

         $("#component").load('/views/single_product/single_product.html', function () {
                $(".singleproduct__image img").attr("src", product.image);
                $(".singleproduct__title").html(product.title);
                $(".singleproduct__price").html("€ " + product.price.toFixed(2));

                $(".singleproduct__ean").append(product.ean_number);
                $(".singleproduct__platform").append(PlatformLogo(product.platform)); // functie voor logo
                $(".singleproduct__publisher").append(PlatformLogo(product.publisher)); // functie voor logo
                $(".singleproduct__pegi").append(product.pegi_age);
                $(".singleproduct__genre").append(product.genre);
                $(".singleproduct__descr").html(product.description)
                $(".addtocart").attr("data-id", product.ean_number);

                if (UserHelper.isLogedIn())
                {
                    $(".addToWishlistButton").attr("onclick", "WishlistHelper.addItem(" + product.ean_number + ");");
                }
                else
                {
                    $(".addToWishlistButton").hide();
                }

                var d = new Date(product.release_date);

                var months = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];

                $(".singleproduct__releasedate").append(d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear());
        });
    }

    function setActionListener(action)
    {
        // user fills in register form
        // user presses 'register'

        // if user presses 'register', perform action
        $(document).ready(action);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewToShow)
    {
        document.title = "Inloggen - AZ Games";

        $("#component").load(viewToShow);
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};

/*
var ResetPasswordViewHelper = function()
{
    // Change the view of the page
    function setView(viewData)
    {
        $("#component").load('views/resetpassword/resetpassword.html');
    }

    // ActionListener that executes actions on specific events
    function setActionListener(eventHandler)
    {
        //$(document).ready(eventHandler);
        $("#component").on("submit", "#resetform", eventHandler);
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        setActionListener: setActionListener
    }
};
*/
var WishlistViewHelper = function()
{
    //change view of page
    function setView(viewData)
    {
        //console.log("WL VIEW: Inside setView");
        document.title = "Wishlist - AZ Games";
        $("#component").html('<div class="col-12"><div class="col-12" id="wishlist"></div></div>');

        loadWishlist(viewData);
    }

    function loadWishlist(viewData)
    {
        //console.log("WL VIEW: Inside loadWishList");
        $("#wishlist").load('/views/wishlist/wishlist.html', function ()
        {
            // add all wishlist items to html
            var current = 0;
            var count = 0;
            $.each(viewData, function(key, value) {
                // Clone product
                var wish__list__item = $('<div>').append($('#wish__list__item').clone());

                // Add product info
                current = current +1
                $(wish__list__item).find(".wish__list__id").append(current);
                $(wish__list__item).find(".wish__list__image img").attr("src", value.image);
                $(wish__list__item).find(".wish__list__title").html(value.title);
                $(wish__list__item).find(".wish__list__price").append(("€ ")+value.price);
                $(wish__list__item).find(".wish__list__platform").append(PlatformLogo(value.platform));
                $(wish__list__item).find(".wish__list__availability").append(BeschikbaarheidKleur(value.stock));
                $(wish__list__item).find("#delete_btn").attr("data-id", value.ean_number);
                $(wish__list__item).find("#cart_btn").attr("data-id", value.ean_number);
                $("#example__btn").attr("href", "/public_wishlist/" + value.user_id);
                $("#share__btn").attr("href", "mailto:?subject=Mijn verlanglijst op AZ-Games.nl!&body=Bekijk mijn verlanglijst op: http://az-games.nl/public_wishlist/" + value.user_id); // CHECK DIS!
                $("#clipboard__btn").attr("href", "/public_wishlist/" + value.user_id);
                $("#public_link").val("https://az-games.nl/public_wishlist/" + value.user_id);

                $("#wish__list").append(wish__list__item);

                if (count == 0) {
                    if (value.is_public == 0) {
                        $("#publicator").val("private");
                        $("#example__btn, .share__btn, .clipboard__btn").hide();
                    } else if (value.is_public == 1) {
                        $("#publicator").val("public");
                        $("#example__btn").show();
                    } else {
                        console.log("value has unexpected value. value = " + value);
                    }
                }
                count++;
            });

            // Als er geen items in wishlist staan, dan hide de volgende divs.
            if (count == 0) {
                $("#wishlist_error_message").show();
                $("#public__related").hide();
                $("#wish__list").hide();
            }

            // Remove the first list item, because this item is always empty
            $("#wish__list__item").first().remove();
        });
    }

    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"       
    }

    function setDeleteListener(action)
    {
        $("#component").off().on("click", "#delete_btn", function(e)
        {
            if (!$('#delete_btn').hasClass("btn--pressed")){
                $("#delete_btn").addClass("btn--pressed");
                
                e.preventDefault();
                var ean = $(this).data("id");
                var div_to_hide = $(this).closest(".row");
                action(ean, div_to_hide);
            }
        } );
    }

    function setPublicListener(action)
    {
        $("#component").on("change", "#publicator", function()
        {
            console.log(this.value);
            action(this.value);
        });
    }

    function hideItem(div_to_hide)
    {
        div_to_hide.fadeTo(200, 0).slideUp(200);
    }

    function showExampleButton(newStatus)
    {
        console.log(newStatus);

        if (newStatus == "public") {
            $("#example__btn").show();
            $(".share__btn").show();
            $(".clipboard__btn").show();
        } else if (newStatus == "private") {
            $("#example__btn").hide();
            $(".share__btn").hide();
            $(".clipboard__btn").hide();

        } else {console.log("unexpected newStatus value, value = "+newStatus)}


        $("#example__btn__div").show();
    }

    function OpenSmallMailWindow(url, windowName, features)
    {
        window.open(url, windowName, features);
    }


    return {
        setView: setView,
        loadWishlist: loadWishlist,
        setActionListener: setActionListener,
        setDeleteListener: setDeleteListener,
        setPublicListener: setPublicListener,
        hideItem: hideItem,
        showExampleButton: showExampleButton
    }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbnNlcnRfbW9kZWwuanMiLCJhZG1pbnVzZXJfbW9kZWwuanMiLCJhZG1pbl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImZhdm9yaXRlbGlzdF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJzX21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwic3RhdHNfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbnNlcnRfY29udHJvbGxlci5qcyIsImFkbWludXNlcl9jb250cm9sbGVyLmpzIiwiYWRtaW5fY29udHJvbGxlci5qcyIsImNhcnRfY29udHJvbGxlci5qcyIsImNoZWNrb3V0X2NvbnRyb2xsZXIuanMiLCJkZWxldGVfY29udHJvbGxlci5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJmYXZvcml0ZWxpc3RfY29udHJvbGxlci5qcyIsImxvZ2luX2NvbnRyb2xsZXIuanMiLCJsb2dvdXRfY29udHJvbGxlci5qcyIsIm9yZGVyc19jb250cm9sbGVyLmpzIiwib3JkZXJfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJwdWJsaWNfd2lzaGxpc3RfY29udHJvbGxlci5qcyIsInJlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJyZXNldHBhc3N3b3JkX2NvbnRyb2xsZXIuanMiLCJzaW5nbGVfcHJvZHVjdF9jb250cm9sbGVyLmpzIiwic3RhdHNfY29udHJvbGxlci5qcyIsInVzZXJfY29udHJvbGxlci5qcyIsIndpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJhZG1pbnNlcnQvYWRtaW5zZXJ0X3ZpZXcuanMiLCJhZG1pbi9hZG1pbl92aWV3LmpzIiwiY2FydC9jYXJ0X3ZpZXcuanMiLCJhZG1pbnVzZXIvYWRtaW51c2VyX3ZpZXcuanMiLCJjaGVja291dC9jaGVja291dF92aWV3LmpzIiwiZmF2b3JpdGVsaXN0L2Zhdm9yaXRlbGlzdF92aWV3LmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImxvZ2luL2xvZ2luX3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dvdXQvbG9nb3V0X3ZpZXcuanMiLCJvcmRlci9vcmRlcl92aWV3LmpzIiwib3JkZXJzL29yZGVyc192aWV3LmpzIiwicHVibGljX3dpc2hsaXN0L3B1YmxpY193aXNobGlzdF92aWV3LmpzIiwicHJvZHVjdHMvcHJvZHVjdHNfdmlldy5qcyIsInJlZ2lzdGVyL3JlZ2lzdGVyX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJ3aXNobGlzdC93aXNobGlzdF92aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBDaGFydC5qc1xyXG4gKiBodHRwOi8vY2hhcnRqcy5vcmcvXHJcbiAqIFZlcnNpb246IDIuNC4wXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDE2IE5pY2sgRG93bmllXHJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcnRqcy9DaGFydC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXHJcbiAqL1xyXG4hZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBlO2U9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGUuQ2hhcnQ9dCgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gdChlLGEsaSl7ZnVuY3Rpb24gbihyLGwpe2lmKCFhW3JdKXtpZighZVtyXSl7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighbCYmcylyZXR1cm4gcyhyLCEwKTtpZihvKXJldHVybiBvKHIsITApO3ZhciBkPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcitcIidcIik7dGhyb3cgZC5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGR9dmFyIHU9YVtyXT17ZXhwb3J0czp7fX07ZVtyXVswXS5jYWxsKHUuZXhwb3J0cyxmdW5jdGlvbih0KXt2YXIgYT1lW3JdWzFdW3RdO3JldHVybiBuKGE/YTp0KX0sdSx1LmV4cG9ydHMsdCxlLGEsaSl9cmV0dXJuIGFbcl0uZXhwb3J0c31mb3IodmFyIG89XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxyPTA7cjxpLmxlbmd0aDtyKyspbihpW3JdKTtyZXR1cm4gbn0oezE6W2Z1bmN0aW9uKHQsZSxhKXt9LHt9XSwyOltmdW5jdGlvbih0LGUsYSl7ZnVuY3Rpb24gaSh0KXtpZih0KXt2YXIgZT0vXiMoW2EtZkEtRjAtOV17M30pJC8sYT0vXiMoW2EtZkEtRjAtOV17Nn0pJC8saT0vXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxuPS9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLG89LyhcXHcrKS8scj1bMCwwLDBdLGw9MSxzPXQubWF0Y2goZSk7aWYocyl7cz1zWzFdO2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQoc1tkXStzW2RdLDE2KX1lbHNlIGlmKHM9dC5tYXRjaChhKSl7cz1zWzFdO2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQocy5zbGljZSgyKmQsMipkKzIpLDE2KX1lbHNlIGlmKHM9dC5tYXRjaChpKSl7Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzW2QrMV0pO2w9cGFyc2VGbG9hdChzWzRdKX1lbHNlIGlmKHM9dC5tYXRjaChuKSl7Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1NYXRoLnJvdW5kKDIuNTUqcGFyc2VGbG9hdChzW2QrMV0pKTtsPXBhcnNlRmxvYXQoc1s0XSl9ZWxzZSBpZihzPXQubWF0Y2gobykpe2lmKFwidHJhbnNwYXJlbnRcIj09c1sxXSlyZXR1cm5bMCwwLDAsMF07aWYocj15W3NbMV1dLCFyKXJldHVybn1mb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXYocltkXSwwLDI1NSk7cmV0dXJuIGw9bHx8MD09bD92KGwsMCwxKToxLHJbM109bCxyfX1mdW5jdGlvbiBuKHQpe2lmKHQpe3ZhciBlPS9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLyxhPXQubWF0Y2goZSk7aWYoYSl7dmFyIGk9cGFyc2VGbG9hdChhWzRdKSxuPXYocGFyc2VJbnQoYVsxXSksMCwzNjApLG89dihwYXJzZUZsb2F0KGFbMl0pLDAsMTAwKSxyPXYocGFyc2VGbG9hdChhWzNdKSwwLDEwMCksbD12KGlzTmFOKGkpPzE6aSwwLDEpO3JldHVybltuLG8scixsXX19fWZ1bmN0aW9uIG8odCl7aWYodCl7dmFyIGU9L15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLyxhPXQubWF0Y2goZSk7aWYoYSl7dmFyIGk9cGFyc2VGbG9hdChhWzRdKSxuPXYocGFyc2VJbnQoYVsxXSksMCwzNjApLG89dihwYXJzZUZsb2F0KGFbMl0pLDAsMTAwKSxyPXYocGFyc2VGbG9hdChhWzNdKSwwLDEwMCksbD12KGlzTmFOKGkpPzE6aSwwLDEpO3JldHVybltuLG8scixsXX19fWZ1bmN0aW9uIHIodCl7dmFyIGU9aSh0KTtyZXR1cm4gZSYmZS5zbGljZSgwLDMpfWZ1bmN0aW9uIGwodCl7dmFyIGU9bih0KTtyZXR1cm4gZSYmZS5zbGljZSgwLDMpfWZ1bmN0aW9uIHModCl7dmFyIGU9aSh0KTtyZXR1cm4gZT9lWzNdOihlPW4odCkpP2VbM106KGU9byh0KSk/ZVszXTp2b2lkIDB9ZnVuY3Rpb24gZCh0KXtyZXR1cm5cIiNcIit4KHRbMF0pK3godFsxXSkreCh0WzJdKX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuIDE+ZXx8dFszXSYmdFszXTwxP2ModCxlKTpcInJnYihcIit0WzBdK1wiLCBcIit0WzFdK1wiLCBcIit0WzJdK1wiKVwifWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwicmdiYShcIit0WzBdK1wiLCBcIit0WzFdK1wiLCBcIit0WzJdK1wiLCBcIitlK1wiKVwifWZ1bmN0aW9uIGgodCxlKXtpZigxPmV8fHRbM10mJnRbM108MSlyZXR1cm4gZih0LGUpO3ZhciBhPU1hdGgucm91bmQodFswXS8yNTUqMTAwKSxpPU1hdGgucm91bmQodFsxXS8yNTUqMTAwKSxuPU1hdGgucm91bmQodFsyXS8yNTUqMTAwKTtyZXR1cm5cInJnYihcIithK1wiJSwgXCIraStcIiUsIFwiK24rXCIlKVwifWZ1bmN0aW9uIGYodCxlKXt2YXIgYT1NYXRoLnJvdW5kKHRbMF0vMjU1KjEwMCksaT1NYXRoLnJvdW5kKHRbMV0vMjU1KjEwMCksbj1NYXRoLnJvdW5kKHRbMl0vMjU1KjEwMCk7cmV0dXJuXCJyZ2JhKFwiK2ErXCIlLCBcIitpK1wiJSwgXCIrbitcIiUsIFwiKyhlfHx0WzNdfHwxKStcIilcIn1mdW5jdGlvbiBnKHQsZSl7cmV0dXJuIDE+ZXx8dFszXSYmdFszXTwxP3AodCxlKTpcImhzbChcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiUpXCJ9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJoc2xhKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJSwgXCIrZStcIilcIn1mdW5jdGlvbiBtKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcImh3YihcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiVcIisodm9pZCAwIT09ZSYmMSE9PWU/XCIsIFwiK2U6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gYih0KXtyZXR1cm4ga1t0LnNsaWNlKDAsMyldfWZ1bmN0aW9uIHYodCxlLGEpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChlLHQpLGEpfWZ1bmN0aW9uIHgodCl7dmFyIGU9dC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gZS5sZW5ndGg8Mj9cIjBcIitlOmV9dmFyIHk9dCg2KTtlLmV4cG9ydHM9e2dldFJnYmE6aSxnZXRIc2xhOm4sZ2V0UmdiOnIsZ2V0SHNsOmwsZ2V0SHdiOm8sZ2V0QWxwaGE6cyxoZXhTdHJpbmc6ZCxyZ2JTdHJpbmc6dSxyZ2JhU3RyaW5nOmMscGVyY2VudFN0cmluZzpoLHBlcmNlbnRhU3RyaW5nOmYsaHNsU3RyaW5nOmcsaHNsYVN0cmluZzpwLGh3YlN0cmluZzptLGtleXdvcmQ6Yn07dmFyIGs9e307Zm9yKHZhciBTIGluIHkpa1t5W1NdXT1TfSx7Njo2fV0sMzpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoNSksbj10KDIpLG89ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIG8pcmV0dXJuIHQ7aWYoISh0aGlzIGluc3RhbmNlb2YgbykpcmV0dXJuIG5ldyBvKHQpO3RoaXMudmFsdWVzPXtyZ2I6WzAsMCwwXSxoc2w6WzAsMCwwXSxoc3Y6WzAsMCwwXSxod2I6WzAsMCwwXSxjbXlrOlswLDAsMCwwXSxhbHBoYToxfTt2YXIgZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpZihlPW4uZ2V0UmdiYSh0KSl0aGlzLnNldFZhbHVlcyhcInJnYlwiLGUpO2Vsc2UgaWYoZT1uLmdldEhzbGEodCkpdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKTtlbHNle2lmKCEoZT1uLmdldEh3Yih0KSkpdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmcgXCInK3QrJ1wiJyk7dGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiB0KWlmKGU9dCx2b2lkIDAhPT1lLnJ8fHZvaWQgMCE9PWUucmVkKXRoaXMuc2V0VmFsdWVzKFwicmdiXCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLmx8fHZvaWQgMCE9PWUubGlnaHRuZXNzKXRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLnZ8fHZvaWQgMCE9PWUudmFsdWUpdGhpcy5zZXRWYWx1ZXMoXCJoc3ZcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUud3x8dm9pZCAwIT09ZS53aGl0ZW5lc3MpdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKTtlbHNle2lmKHZvaWQgMD09PWUuYyYmdm9pZCAwPT09ZS5jeWFuKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCBcIitKU09OLnN0cmluZ2lmeSh0KSk7dGhpcy5zZXRWYWx1ZXMoXCJjbXlrXCIsZSl9fTtvLnByb3RvdHlwZT17cmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJyZ2JcIixhcmd1bWVudHMpfSxoc2w6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzbFwiLGFyZ3VtZW50cyl9LGhzdjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHN2XCIsYXJndW1lbnRzKX0saHdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJod2JcIixhcmd1bWVudHMpfSxjbXlrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJjbXlrXCIsYXJndW1lbnRzKX0scmdiQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMucmdifSxoc2xBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5oc2x9LGhzdkFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmhzdn0saHdiQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gMSE9PXQuYWxwaGE/dC5od2IuY29uY2F0KFt0LmFscGhhXSk6dC5od2J9LGNteWtBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5jbXlrfSxyZ2JhQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gdC5yZ2IuY29uY2F0KFt0LmFscGhhXSl9LGhzbGFBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiB0LmhzbC5jb25jYXQoW3QuYWxwaGFdKX0sYWxwaGE6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy52YWx1ZXMuYWxwaGE6KHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIix0KSx0aGlzKX0scmVkOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwwLHQpfSxncmVlbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMSx0KX0sYmx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMix0KX0saHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0JiYodCU9MzYwLHQ9MD50PzM2MCt0OnQpLHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDAsdCl9LHNhdHVyYXRpb246ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDEsdCl9LGxpZ2h0bmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMix0KX0sc2F0dXJhdGlvbnY6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLDEsdCl9LHdoaXRlbmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsMSx0KX0sYmxhY2tuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwyLHQpfSx2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsMix0KX0sY3lhbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDAsdCl9LG1hZ2VudGE6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwxLHQpfSx5ZWxsb3c6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwyLHQpfSxibGFjazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDMsdCl9LGhleFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpfSxyZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scmdiYVN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scGVyY2VudFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0saHNsU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCx0aGlzLnZhbHVlcy5hbHBoYSl9LGhzbGFTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCx0aGlzLnZhbHVlcy5hbHBoYSl9LGh3YlN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxrZXl3b3JkOmZ1bmN0aW9uKCl7cmV0dXJuIG4ua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxyZ2JOdW1iZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2I7cmV0dXJuIHRbMF08PDE2fHRbMV08PDh8dFsyXX0sbHVtaW5vc2l0eTpmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT1bXSxhPTA7YTx0Lmxlbmd0aDthKyspe3ZhciBpPXRbYV0vMjU1O2VbYV09LjAzOTI4Pj1pP2kvMTIuOTI6TWF0aC5wb3coKGkrLjA1NSkvMS4wNTUsMi40KX1yZXR1cm4uMjEyNiplWzBdKy43MTUyKmVbMV0rLjA3MjIqZVsyXX0sY29udHJhc3Q6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sdW1pbm9zaXR5KCksYT10Lmx1bWlub3NpdHkoKTtyZXR1cm4gZT5hPyhlKy4wNSkvKGErLjA1KTooYSsuMDUpLyhlKy4wNSl9LGxldmVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29udHJhc3QodCk7cmV0dXJuIGU+PTcuMT9cIkFBQVwiOmU+PTQuNT9cIkFBXCI6XCJcIn0sZGFyazpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYixlPSgyOTkqdFswXSs1ODcqdFsxXSsxMTQqdFsyXSkvMWUzO3JldHVybiAxMjg+ZX0sbGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5kYXJrKCl9LG5lZ2F0ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7Mz5lO2UrKyl0W2VdPTI1NS10aGlzLnZhbHVlcy5yZ2JbZV07cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsdCksdGhpc30sbGlnaHRlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMl0rPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LGRhcmtlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMl0tPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LHNhdHVyYXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsxXSs9ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sZGVzYXR1cmF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMV0tPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LHdoaXRlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5od2I7cmV0dXJuIGVbMV0rPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpLHRoaXN9LGJsYWNrZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHdiO3JldHVybiBlWzJdKz1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKSx0aGlzfSxncmV5c2NhbGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT0uMyp0WzBdKy41OSp0WzFdKy4xMSp0WzJdO3JldHVybiB0aGlzLnNldFZhbHVlcyhcInJnYlwiLFtlLGUsZV0pLHRoaXN9LGNsZWFyZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuYWxwaGE7cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIixlLWUqdCksdGhpc30sb3BhcXVlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5hbHBoYTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLGUrZSp0KSx0aGlzfSxyb3RhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsLGE9KGVbMF0rdCklMzYwO3JldHVybiBlWzBdPTA+YT8zNjArYTphLHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sbWl4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPXQsbj12b2lkIDA9PT1lPy41OmUsbz0yKm4tMSxyPWEuYWxwaGEoKS1pLmFscGhhKCksbD0oKG8qcj09PS0xP286KG8rcikvKDErbypyKSkrMSkvMixzPTEtbDtyZXR1cm4gdGhpcy5yZ2IobCphLnJlZCgpK3MqaS5yZWQoKSxsKmEuZ3JlZW4oKStzKmkuZ3JlZW4oKSxsKmEuYmx1ZSgpK3MqaS5ibHVlKCkpLmFscGhhKGEuYWxwaGEoKSpuK2kuYWxwaGEoKSooMS1uKSl9LHRvSlNPTjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJnYigpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0LGUsYT1uZXcgbyxpPXRoaXMudmFsdWVzLG49YS52YWx1ZXM7Zm9yKHZhciByIGluIGkpaS5oYXNPd25Qcm9wZXJ0eShyKSYmKHQ9aVtyXSxlPXt9LnRvU3RyaW5nLmNhbGwodCksXCJbb2JqZWN0IEFycmF5XVwiPT09ZT9uW3JdPXQuc2xpY2UoMCk6XCJbb2JqZWN0IE51bWJlcl1cIj09PWU/bltyXT10OmNvbnNvbGUuZXJyb3IoXCJ1bmV4cGVjdGVkIGNvbG9yIHZhbHVlOlwiLHQpKTtyZXR1cm4gYX19LG8ucHJvdG90eXBlLnNwYWNlcz17cmdiOltcInJlZFwiLFwiZ3JlZW5cIixcImJsdWVcIl0saHNsOltcImh1ZVwiLFwic2F0dXJhdGlvblwiLFwibGlnaHRuZXNzXCJdLGhzdjpbXCJodWVcIixcInNhdHVyYXRpb25cIixcInZhbHVlXCJdLGh3YjpbXCJodWVcIixcIndoaXRlbmVzc1wiLFwiYmxhY2tuZXNzXCJdLGNteWs6W1wiY3lhblwiLFwibWFnZW50YVwiLFwieWVsbG93XCIsXCJibGFja1wiXX0sby5wcm90b3R5cGUubWF4ZXM9e3JnYjpbMjU1LDI1NSwyNTVdLGhzbDpbMzYwLDEwMCwxMDBdLGhzdjpbMzYwLDEwMCwxMDBdLGh3YjpbMzYwLDEwMCwxMDBdLGNteWs6WzEwMCwxMDAsMTAwLDEwMF19LG8ucHJvdG90eXBlLmdldFZhbHVlcz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy52YWx1ZXMsYT17fSxpPTA7aTx0Lmxlbmd0aDtpKyspYVt0LmNoYXJBdChpKV09ZVt0XVtpXTtyZXR1cm4gMSE9PWUuYWxwaGEmJihhLmE9ZS5hbHBoYSksYX0sby5wcm90b3R5cGUuc2V0VmFsdWVzPWZ1bmN0aW9uKHQsZSl7dmFyIGEsbj10aGlzLnZhbHVlcyxvPXRoaXMuc3BhY2VzLHI9dGhpcy5tYXhlcyxsPTE7aWYoXCJhbHBoYVwiPT09dClsPWU7ZWxzZSBpZihlLmxlbmd0aCluW3RdPWUuc2xpY2UoMCx0Lmxlbmd0aCksbD1lW3QubGVuZ3RoXTtlbHNlIGlmKHZvaWQgMCE9PWVbdC5jaGFyQXQoMCldKXtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKW5bdF1bYV09ZVt0LmNoYXJBdChhKV07bD1lLmF9ZWxzZSBpZih2b2lkIDAhPT1lW29bdF1bMF1dKXt2YXIgcz1vW3RdO2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspblt0XVthXT1lW3NbYV1dO2w9ZS5hbHBoYX1pZihuLmFscGhhPU1hdGgubWF4KDAsTWF0aC5taW4oMSx2b2lkIDA9PT1sP24uYWxwaGE6bCkpLFwiYWxwaGFcIj09PXQpcmV0dXJuITE7dmFyIGQ7Zm9yKGE9MDthPHQubGVuZ3RoO2ErKylkPU1hdGgubWF4KDAsTWF0aC5taW4oclt0XVthXSxuW3RdW2FdKSksblt0XVthXT1NYXRoLnJvdW5kKGQpO2Zvcih2YXIgdSBpbiBvKXUhPT10JiYoblt1XT1pW3RdW3VdKG5bdF0pKTtyZXR1cm4hMH0sby5wcm90b3R5cGUuc2V0U3BhY2U9ZnVuY3Rpb24odCxlKXt2YXIgYT1lWzBdO3JldHVybiB2b2lkIDA9PT1hP3RoaXMuZ2V0VmFsdWVzKHQpOihcIm51bWJlclwiPT10eXBlb2YgYSYmKGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkpLHRoaXMuc2V0VmFsdWVzKHQsYSksdGhpcyl9LG8ucHJvdG90eXBlLnNldENoYW5uZWw9ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMudmFsdWVzW3RdO3JldHVybiB2b2lkIDA9PT1hP2lbZV06YT09PWlbZV0/dGhpczooaVtlXT1hLHRoaXMuc2V0VmFsdWVzKHQsaSksdGhpcyl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3cuQ29sb3I9byksZS5leHBvcnRzPW99LHsyOjIsNTo1fV0sNDpbZnVuY3Rpb24odCxlLGEpe2Z1bmN0aW9uIGkodCl7dmFyIGUsYSxpLG49dFswXS8yNTUsbz10WzFdLzI1NSxyPXRbMl0vMjU1LGw9TWF0aC5taW4obixvLHIpLHM9TWF0aC5tYXgobixvLHIpLGQ9cy1sO3JldHVybiBzPT1sP2U9MDpuPT1zP2U9KG8tcikvZDpvPT1zP2U9Misoci1uKS9kOnI9PXMmJihlPTQrKG4tbykvZCksZT1NYXRoLm1pbig2MCplLDM2MCksMD5lJiYoZSs9MzYwKSxpPShsK3MpLzIsYT1zPT1sPzA6LjU+PWk/ZC8ocytsKTpkLygyLXMtbCksW2UsMTAwKmEsMTAwKmldfWZ1bmN0aW9uIG4odCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdLGw9TWF0aC5taW4obixvLHIpLHM9TWF0aC5tYXgobixvLHIpLGQ9cy1sO3JldHVybiBhPTA9PXM/MDpkL3MqMWUzLzEwLHM9PWw/ZT0wOm49PXM/ZT0oby1yKS9kOm89PXM/ZT0yKyhyLW4pL2Q6cj09cyYmKGU9NCsobi1vKS9kKSxlPU1hdGgubWluKDYwKmUsMzYwKSwwPmUmJihlKz0zNjApLGk9cy8yNTUqMWUzLzEwLFtlLGEsaV19ZnVuY3Rpb24gbyh0KXt2YXIgZT10WzBdLGE9dFsxXSxuPXRbMl0sbz1pKHQpWzBdLHI9MS8yNTUqTWF0aC5taW4oZSxNYXRoLm1pbihhLG4pKSxuPTEtMS8yNTUqTWF0aC5tYXgoZSxNYXRoLm1heChhLG4pKTtyZXR1cm5bbywxMDAqciwxMDAqbl19ZnVuY3Rpb24gbCh0KXt2YXIgZSxhLGksbixvPXRbMF0vMjU1LHI9dFsxXS8yNTUsbD10WzJdLzI1NTtyZXR1cm4gbj1NYXRoLm1pbigxLW8sMS1yLDEtbCksZT0oMS1vLW4pLygxLW4pfHwwLGE9KDEtci1uKS8oMS1uKXx8MCxpPSgxLWwtbikvKDEtbil8fDAsWzEwMCplLDEwMCphLDEwMCppLDEwMCpuXX1mdW5jdGlvbiBzKHQpe3JldHVybiBHW0pTT04uc3RyaW5naWZ5KHQpXX1mdW5jdGlvbiBkKHQpe3ZhciBlPXRbMF0vMjU1LGE9dFsxXS8yNTUsaT10WzJdLzI1NTtlPWU+LjA0MDQ1P01hdGgucG93KChlKy4wNTUpLzEuMDU1LDIuNCk6ZS8xMi45MixhPWE+LjA0MDQ1P01hdGgucG93KChhKy4wNTUpLzEuMDU1LDIuNCk6YS8xMi45MixpPWk+LjA0MDQ1P01hdGgucG93KChpKy4wNTUpLzEuMDU1LDIuNCk6aS8xMi45Mjt2YXIgbj0uNDEyNCplKy4zNTc2KmErLjE4MDUqaSxvPS4yMTI2KmUrLjcxNTIqYSsuMDcyMippLHI9LjAxOTMqZSsuMTE5MiphKy45NTA1Kmk7cmV0dXJuWzEwMCpuLDEwMCpvLDEwMCpyXX1mdW5jdGlvbiB1KHQpe3ZhciBlLGEsaSxuPWQodCksbz1uWzBdLHI9blsxXSxsPW5bMl07cmV0dXJuIG8vPTk1LjA0NyxyLz0xMDAsbC89MTA4Ljg4MyxvPW8+LjAwODg1Nj9NYXRoLnBvdyhvLDEvMyk6Ny43ODcqbysxNi8xMTYscj1yPi4wMDg4NTY/TWF0aC5wb3cociwxLzMpOjcuNzg3KnIrMTYvMTE2LGw9bD4uMDA4ODU2P01hdGgucG93KGwsMS8zKTo3Ljc4NypsKzE2LzExNixlPTExNipyLTE2LGE9NTAwKihvLXIpLGk9MjAwKihyLWwpLFtlLGEsaV19ZnVuY3Rpb24gYyh0KXtyZXR1cm4gVyh1KHQpKX1mdW5jdGlvbiBoKHQpe3ZhciBlLGEsaSxuLG8scj10WzBdLzM2MCxsPXRbMV0vMTAwLHM9dFsyXS8xMDA7aWYoMD09bClyZXR1cm4gbz0yNTUqcyxbbyxvLG9dO2E9LjU+cz9zKigxK2wpOnMrbC1zKmwsZT0yKnMtYSxuPVswLDAsMF07Zm9yKHZhciBkPTA7Mz5kO2QrKylpPXIrMS8zKi0oZC0xKSwwPmkmJmkrKyxpPjEmJmktLSxvPTE+NippP2UrNiooYS1lKSppOjE+MippP2E6Mj4zKmk/ZSsoYS1lKSooMi8zLWkpKjY6ZSxuW2RdPTI1NSpvO3JldHVybiBufWZ1bmN0aW9uIGYodCl7dmFyIGUsYSxpPXRbMF0sbj10WzFdLzEwMCxvPXRbMl0vMTAwO3JldHVybiAwPT09bz9bMCwwLDBdOihvKj0yLG4qPTE+PW8/bzoyLW8sYT0obytuKS8yLGU9MipuLyhvK24pLFtpLDEwMCplLDEwMCphXSl9ZnVuY3Rpb24gcCh0KXtyZXR1cm4gbyhoKHQpKX1mdW5jdGlvbiBtKHQpe3JldHVybiBsKGgodCkpfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHMoaCh0KSl9ZnVuY3Rpb24geCh0KXt2YXIgZT10WzBdLzYwLGE9dFsxXS8xMDAsaT10WzJdLzEwMCxuPU1hdGguZmxvb3IoZSklNixvPWUtTWF0aC5mbG9vcihlKSxyPTI1NSppKigxLWEpLGw9MjU1KmkqKDEtYSpvKSxzPTI1NSppKigxLWEqKDEtbykpLGk9MjU1Kmk7c3dpdGNoKG4pe2Nhc2UgMDpyZXR1cm5baSxzLHJdO2Nhc2UgMTpyZXR1cm5bbCxpLHJdO2Nhc2UgMjpyZXR1cm5bcixpLHNdO2Nhc2UgMzpyZXR1cm5bcixsLGldO2Nhc2UgNDpyZXR1cm5bcyxyLGldO2Nhc2UgNTpyZXR1cm5baSxyLGxdfX1mdW5jdGlvbiB5KHQpe3ZhciBlLGEsaT10WzBdLG49dFsxXS8xMDAsbz10WzJdLzEwMDtyZXR1cm4gYT0oMi1uKSpvLGU9bipvLGUvPTE+PWE/YToyLWEsZT1lfHwwLGEvPTIsW2ksMTAwKmUsMTAwKmFdfWZ1bmN0aW9uIGsodCl7cmV0dXJuIG8oeCh0KSl9ZnVuY3Rpb24gUyh0KXtyZXR1cm4gbCh4KHQpKX1mdW5jdGlvbiB3KHQpe3JldHVybiBzKHgodCkpfWZ1bmN0aW9uIE0odCl7dmFyIGUsYSxpLG4sbz10WzBdLzM2MCxsPXRbMV0vMTAwLHM9dFsyXS8xMDAsZD1sK3M7c3dpdGNoKGQ+MSYmKGwvPWQscy89ZCksZT1NYXRoLmZsb29yKDYqbyksYT0xLXMsaT02Km8tZSwwIT0oMSZlKSYmKGk9MS1pKSxuPWwraSooYS1sKSxlKXtkZWZhdWx0OmNhc2UgNjpjYXNlIDA6cj1hLGc9bixiPWw7YnJlYWs7Y2FzZSAxOnI9bixnPWEsYj1sO2JyZWFrO2Nhc2UgMjpyPWwsZz1hLGI9bjticmVhaztjYXNlIDM6cj1sLGc9bixiPWE7YnJlYWs7Y2FzZSA0OnI9bixnPWwsYj1hO2JyZWFrO2Nhc2UgNTpyPWEsZz1sLGI9bn1yZXR1cm5bMjU1KnIsMjU1KmcsMjU1KmJdfWZ1bmN0aW9uIEModCl7cmV0dXJuIGkoTSh0KSl9ZnVuY3Rpb24gRCh0KXtyZXR1cm4gbihNKHQpKX1mdW5jdGlvbiBJKHQpe3JldHVybiBsKE0odCkpfWZ1bmN0aW9uIEEodCl7cmV0dXJuIHMoTSh0KSl9ZnVuY3Rpb24gVCh0KXt2YXIgZSxhLGksbj10WzBdLzEwMCxvPXRbMV0vMTAwLHI9dFsyXS8xMDAsbD10WzNdLzEwMDtyZXR1cm4gZT0xLU1hdGgubWluKDEsbiooMS1sKStsKSxhPTEtTWF0aC5taW4oMSxvKigxLWwpK2wpLGk9MS1NYXRoLm1pbigxLHIqKDEtbCkrbCksWzI1NSplLDI1NSphLDI1NSppXX1mdW5jdGlvbiBQKHQpe3JldHVybiBpKFQodCkpfWZ1bmN0aW9uIEYodCl7cmV0dXJuIG4oVCh0KSl9ZnVuY3Rpb24gXyh0KXtyZXR1cm4gbyhUKHQpKX1mdW5jdGlvbiBSKHQpe3JldHVybiBzKFQodCkpfWZ1bmN0aW9uIFYodCl7dmFyIGUsYSxpLG49dFswXS8xMDAsbz10WzFdLzEwMCxyPXRbMl0vMTAwO3JldHVybiBlPTMuMjQwNipuKy0xLjUzNzIqbytyKi0uNDk4NixhPW4qLS45Njg5KzEuODc1OCpvKy4wNDE1KnIsaT0uMDU1NypuK28qLS4yMDQrMS4wNTcqcixlPWU+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coZSwxLzIuNCktLjA1NTplPTEyLjkyKmUsYT1hPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGEsMS8yLjQpLS4wNTU6YT0xMi45MiphLGk9aT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhpLDEvMi40KS0uMDU1Omk9MTIuOTIqaSxlPU1hdGgubWluKE1hdGgubWF4KDAsZSksMSksYT1NYXRoLm1pbihNYXRoLm1heCgwLGEpLDEpLGk9TWF0aC5taW4oTWF0aC5tYXgoMCxpKSwxKSxbMjU1KmUsMjU1KmEsMjU1KmldfWZ1bmN0aW9uIEwodCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBuLz05NS4wNDcsby89MTAwLHIvPTEwOC44ODMsbj1uPi4wMDg4NTY/TWF0aC5wb3cobiwxLzMpOjcuNzg3Km4rMTYvMTE2LG89bz4uMDA4ODU2P01hdGgucG93KG8sMS8zKTo3Ljc4NypvKzE2LzExNixyPXI+LjAwODg1Nj9NYXRoLnBvdyhyLDEvMyk6Ny43ODcqcisxNi8xMTYsZT0xMTYqby0xNixhPTUwMCoobi1vKSxpPTIwMCooby1yKSxbZSxhLGldfWZ1bmN0aW9uIE8odCl7cmV0dXJuIFcoTCh0KSl9ZnVuY3Rpb24gQih0KXt2YXIgZSxhLGksbixvPXRbMF0scj10WzFdLGw9dFsyXTtyZXR1cm4gOD49bz8oYT0xMDAqby85MDMuMyxuPTcuNzg3KihhLzEwMCkrMTYvMTE2KTooYT0xMDAqTWF0aC5wb3coKG8rMTYpLzExNiwzKSxuPU1hdGgucG93KGEvMTAwLDEvMykpLGU9LjAwODg1Nj49ZS85NS4wNDc/ZT05NS4wNDcqKHIvNTAwK24tMTYvMTE2KS83Ljc4Nzo5NS4wNDcqTWF0aC5wb3coci81MDArbiwzKSxpPS4wMDg4NTk+PWkvMTA4Ljg4Mz9pPTEwOC44ODMqKG4tbC8yMDAtMTYvMTE2KS83Ljc4NzoxMDguODgzKk1hdGgucG93KG4tbC8yMDAsMyksW2UsYSxpXX1mdW5jdGlvbiBXKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gZT1NYXRoLmF0YW4yKHIsbyksYT0zNjAqZS8yL01hdGguUEksMD5hJiYoYSs9MzYwKSxpPU1hdGguc3FydChvKm8rcipyKSxbbixpLGFdfWZ1bmN0aW9uIHoodCl7cmV0dXJuIFYoQih0KSl9ZnVuY3Rpb24gTih0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIGk9ci8zNjAqMipNYXRoLlBJLGU9bypNYXRoLmNvcyhpKSxhPW8qTWF0aC5zaW4oaSksW24sZSxhXX1mdW5jdGlvbiBFKHQpe3JldHVybiBCKE4odCkpfWZ1bmN0aW9uIEgodCl7cmV0dXJuIHooTih0KSl9ZnVuY3Rpb24gVSh0KXtyZXR1cm4gWlt0XX1mdW5jdGlvbiBqKHQpe3JldHVybiBpKFUodCkpfWZ1bmN0aW9uIHEodCl7cmV0dXJuIG4oVSh0KSl9ZnVuY3Rpb24gWSh0KXtyZXR1cm4gbyhVKHQpKX1mdW5jdGlvbiBYKHQpe3JldHVybiBsKFUodCkpfWZ1bmN0aW9uIEsodCl7cmV0dXJuIHUoVSh0KSl9ZnVuY3Rpb24gSih0KXtyZXR1cm4gZChVKHQpKX1lLmV4cG9ydHM9e3JnYjJoc2w6aSxyZ2IyaHN2Om4scmdiMmh3YjpvLHJnYjJjbXlrOmwscmdiMmtleXdvcmQ6cyxyZ2IyeHl6OmQscmdiMmxhYjp1LHJnYjJsY2g6Yyxoc2wycmdiOmgsaHNsMmhzdjpmLGhzbDJod2I6cCxoc2wyY215azptLGhzbDJrZXl3b3JkOnYsaHN2MnJnYjp4LGhzdjJoc2w6eSxoc3YyaHdiOmssaHN2MmNteWs6Uyxoc3Yya2V5d29yZDp3LGh3YjJyZ2I6TSxod2IyaHNsOkMsaHdiMmhzdjpELGh3YjJjbXlrOkksaHdiMmtleXdvcmQ6QSxjbXlrMnJnYjpULGNteWsyaHNsOlAsY215azJoc3Y6RixjbXlrMmh3YjpfLGNteWsya2V5d29yZDpSLGtleXdvcmQycmdiOlUsa2V5d29yZDJoc2w6aixrZXl3b3JkMmhzdjpxLGtleXdvcmQyaHdiOlksa2V5d29yZDJjbXlrOlgsa2V5d29yZDJsYWI6SyxrZXl3b3JkMnh5ejpKLHh5ejJyZ2I6Vix4eXoybGFiOkwseHl6MmxjaDpPLGxhYjJ4eXo6QixsYWIycmdiOnosbGFiMmxjaDpXLGxjaDJsYWI6TixsY2gyeHl6OkUsbGNoMnJnYjpIfTt2YXIgWj17YWxpY2VibHVlOlsyNDAsMjQ4LDI1NV0sYW50aXF1ZXdoaXRlOlsyNTAsMjM1LDIxNV0sYXF1YTpbMCwyNTUsMjU1XSxhcXVhbWFyaW5lOlsxMjcsMjU1LDIxMl0sYXp1cmU6WzI0MCwyNTUsMjU1XSxiZWlnZTpbMjQ1LDI0NSwyMjBdLGJpc3F1ZTpbMjU1LDIyOCwxOTZdLGJsYWNrOlswLDAsMF0sYmxhbmNoZWRhbG1vbmQ6WzI1NSwyMzUsMjA1XSxibHVlOlswLDAsMjU1XSxibHVldmlvbGV0OlsxMzgsNDMsMjI2XSxicm93bjpbMTY1LDQyLDQyXSxidXJseXdvb2Q6WzIyMiwxODQsMTM1XSxjYWRldGJsdWU6Wzk1LDE1OCwxNjBdLGNoYXJ0cmV1c2U6WzEyNywyNTUsMF0sY2hvY29sYXRlOlsyMTAsMTA1LDMwXSxjb3JhbDpbMjU1LDEyNyw4MF0sY29ybmZsb3dlcmJsdWU6WzEwMCwxNDksMjM3XSxjb3Juc2lsazpbMjU1LDI0OCwyMjBdLGNyaW1zb246WzIyMCwyMCw2MF0sY3lhbjpbMCwyNTUsMjU1XSxkYXJrYmx1ZTpbMCwwLDEzOV0sZGFya2N5YW46WzAsMTM5LDEzOV0sZGFya2dvbGRlbnJvZDpbMTg0LDEzNCwxMV0sZGFya2dyYXk6WzE2OSwxNjksMTY5XSxkYXJrZ3JlZW46WzAsMTAwLDBdLGRhcmtncmV5OlsxNjksMTY5LDE2OV0sZGFya2toYWtpOlsxODksMTgzLDEwN10sZGFya21hZ2VudGE6WzEzOSwwLDEzOV0sZGFya29saXZlZ3JlZW46Wzg1LDEwNyw0N10sZGFya29yYW5nZTpbMjU1LDE0MCwwXSxkYXJrb3JjaGlkOlsxNTMsNTAsMjA0XSxkYXJrcmVkOlsxMzksMCwwXSxkYXJrc2FsbW9uOlsyMzMsMTUwLDEyMl0sZGFya3NlYWdyZWVuOlsxNDMsMTg4LDE0M10sZGFya3NsYXRlYmx1ZTpbNzIsNjEsMTM5XSxkYXJrc2xhdGVncmF5Ols0Nyw3OSw3OV0sZGFya3NsYXRlZ3JleTpbNDcsNzksNzldLGRhcmt0dXJxdW9pc2U6WzAsMjA2LDIwOV0sZGFya3Zpb2xldDpbMTQ4LDAsMjExXSxkZWVwcGluazpbMjU1LDIwLDE0N10sZGVlcHNreWJsdWU6WzAsMTkxLDI1NV0sZGltZ3JheTpbMTA1LDEwNSwxMDVdLGRpbWdyZXk6WzEwNSwxMDUsMTA1XSxkb2RnZXJibHVlOlszMCwxNDQsMjU1XSxmaXJlYnJpY2s6WzE3OCwzNCwzNF0sZmxvcmFsd2hpdGU6WzI1NSwyNTAsMjQwXSxmb3Jlc3RncmVlbjpbMzQsMTM5LDM0XSxmdWNoc2lhOlsyNTUsMCwyNTVdLGdhaW5zYm9ybzpbMjIwLDIyMCwyMjBdLGdob3N0d2hpdGU6WzI0OCwyNDgsMjU1XSxnb2xkOlsyNTUsMjE1LDBdLGdvbGRlbnJvZDpbMjE4LDE2NSwzMl0sZ3JheTpbMTI4LDEyOCwxMjhdLGdyZWVuOlswLDEyOCwwXSxncmVlbnllbGxvdzpbMTczLDI1NSw0N10sZ3JleTpbMTI4LDEyOCwxMjhdLGhvbmV5ZGV3OlsyNDAsMjU1LDI0MF0saG90cGluazpbMjU1LDEwNSwxODBdLGluZGlhbnJlZDpbMjA1LDkyLDkyXSxpbmRpZ286Wzc1LDAsMTMwXSxpdm9yeTpbMjU1LDI1NSwyNDBdLGtoYWtpOlsyNDAsMjMwLDE0MF0sbGF2ZW5kZXI6WzIzMCwyMzAsMjUwXSxsYXZlbmRlcmJsdXNoOlsyNTUsMjQwLDI0NV0sbGF3bmdyZWVuOlsxMjQsMjUyLDBdLGxlbW9uY2hpZmZvbjpbMjU1LDI1MCwyMDVdLGxpZ2h0Ymx1ZTpbMTczLDIxNiwyMzBdLGxpZ2h0Y29yYWw6WzI0MCwxMjgsMTI4XSxsaWdodGN5YW46WzIyNCwyNTUsMjU1XSxsaWdodGdvbGRlbnJvZHllbGxvdzpbMjUwLDI1MCwyMTBdLGxpZ2h0Z3JheTpbMjExLDIxMSwyMTFdLGxpZ2h0Z3JlZW46WzE0NCwyMzgsMTQ0XSxsaWdodGdyZXk6WzIxMSwyMTEsMjExXSxsaWdodHBpbms6WzI1NSwxODIsMTkzXSxsaWdodHNhbG1vbjpbMjU1LDE2MCwxMjJdLGxpZ2h0c2VhZ3JlZW46WzMyLDE3OCwxNzBdLGxpZ2h0c2t5Ymx1ZTpbMTM1LDIwNiwyNTBdLGxpZ2h0c2xhdGVncmF5OlsxMTksMTM2LDE1M10sbGlnaHRzbGF0ZWdyZXk6WzExOSwxMzYsMTUzXSxsaWdodHN0ZWVsYmx1ZTpbMTc2LDE5NiwyMjJdLGxpZ2h0eWVsbG93OlsyNTUsMjU1LDIyNF0sbGltZTpbMCwyNTUsMF0sbGltZWdyZWVuOls1MCwyMDUsNTBdLGxpbmVuOlsyNTAsMjQwLDIzMF0sbWFnZW50YTpbMjU1LDAsMjU1XSxtYXJvb246WzEyOCwwLDBdLG1lZGl1bWFxdWFtYXJpbmU6WzEwMiwyMDUsMTcwXSxtZWRpdW1ibHVlOlswLDAsMjA1XSxtZWRpdW1vcmNoaWQ6WzE4Niw4NSwyMTFdLG1lZGl1bXB1cnBsZTpbMTQ3LDExMiwyMTldLG1lZGl1bXNlYWdyZWVuOls2MCwxNzksMTEzXSxtZWRpdW1zbGF0ZWJsdWU6WzEyMywxMDQsMjM4XSxtZWRpdW1zcHJpbmdncmVlbjpbMCwyNTAsMTU0XSxtZWRpdW10dXJxdW9pc2U6WzcyLDIwOSwyMDRdLG1lZGl1bXZpb2xldHJlZDpbMTk5LDIxLDEzM10sbWlkbmlnaHRibHVlOlsyNSwyNSwxMTJdLG1pbnRjcmVhbTpbMjQ1LDI1NSwyNTBdLG1pc3R5cm9zZTpbMjU1LDIyOCwyMjVdLG1vY2Nhc2luOlsyNTUsMjI4LDE4MV0sbmF2YWpvd2hpdGU6WzI1NSwyMjIsMTczXSxuYXZ5OlswLDAsMTI4XSxvbGRsYWNlOlsyNTMsMjQ1LDIzMF0sb2xpdmU6WzEyOCwxMjgsMF0sb2xpdmVkcmFiOlsxMDcsMTQyLDM1XSxvcmFuZ2U6WzI1NSwxNjUsMF0sb3JhbmdlcmVkOlsyNTUsNjksMF0sb3JjaGlkOlsyMTgsMTEyLDIxNF0scGFsZWdvbGRlbnJvZDpbMjM4LDIzMiwxNzBdLHBhbGVncmVlbjpbMTUyLDI1MSwxNTJdLHBhbGV0dXJxdW9pc2U6WzE3NSwyMzgsMjM4XSxwYWxldmlvbGV0cmVkOlsyMTksMTEyLDE0N10scGFwYXlhd2hpcDpbMjU1LDIzOSwyMTNdLHBlYWNocHVmZjpbMjU1LDIxOCwxODVdLHBlcnU6WzIwNSwxMzMsNjNdLHBpbms6WzI1NSwxOTIsMjAzXSxwbHVtOlsyMjEsMTYwLDIyMV0scG93ZGVyYmx1ZTpbMTc2LDIyNCwyMzBdLHB1cnBsZTpbMTI4LDAsMTI4XSxyZWJlY2NhcHVycGxlOlsxMDIsNTEsMTUzXSxyZWQ6WzI1NSwwLDBdLHJvc3licm93bjpbMTg4LDE0MywxNDNdLHJveWFsYmx1ZTpbNjUsMTA1LDIyNV0sc2FkZGxlYnJvd246WzEzOSw2OSwxOV0sc2FsbW9uOlsyNTAsMTI4LDExNF0sc2FuZHlicm93bjpbMjQ0LDE2NCw5Nl0sc2VhZ3JlZW46WzQ2LDEzOSw4N10sc2Vhc2hlbGw6WzI1NSwyNDUsMjM4XSxzaWVubmE6WzE2MCw4Miw0NV0sc2lsdmVyOlsxOTIsMTkyLDE5Ml0sc2t5Ymx1ZTpbMTM1LDIwNiwyMzVdLHNsYXRlYmx1ZTpbMTA2LDkwLDIwNV0sc2xhdGVncmF5OlsxMTIsMTI4LDE0NF0sc2xhdGVncmV5OlsxMTIsMTI4LDE0NF0sc25vdzpbMjU1LDI1MCwyNTBdLHNwcmluZ2dyZWVuOlswLDI1NSwxMjddLHN0ZWVsYmx1ZTpbNzAsMTMwLDE4MF0sdGFuOlsyMTAsMTgwLDE0MF0sdGVhbDpbMCwxMjgsMTI4XSx0aGlzdGxlOlsyMTYsMTkxLDIxNl0sdG9tYXRvOlsyNTUsOTksNzFdLHR1cnF1b2lzZTpbNjQsMjI0LDIwOF0sdmlvbGV0OlsyMzgsMTMwLDIzOF0sd2hlYXQ6WzI0NSwyMjIsMTc5XSx3aGl0ZTpbMjU1LDI1NSwyNTVdLHdoaXRlc21va2U6WzI0NSwyNDUsMjQ1XSx5ZWxsb3c6WzI1NSwyNTUsMF0seWVsbG93Z3JlZW46WzE1NCwyMDUsNTBdfSxHPXt9O2Zvcih2YXIgUSBpbiBaKUdbSlNPTi5zdHJpbmdpZnkoWltRXSldPVF9LHt9XSw1OltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCg0KSxuPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBkfTtmb3IodmFyIG8gaW4gaSl7bltvK1wiUmF3XCJdPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmKGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSksaVt0XShlKX19KG8pO3ZhciByPS8oXFx3KykyKFxcdyspLy5leGVjKG8pLGw9clsxXSxzPXJbMl07bltsXT1uW2xdfHx7fSxuW2xdW3NdPW5bb109ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe1wibnVtYmVyXCI9PXR5cGVvZiBlJiYoZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTt2YXIgYT1pW3RdKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhfHx2b2lkIDA9PT1hKXJldHVybiBhO2Zvcih2YXIgbj0wO248YS5sZW5ndGg7bisrKWFbbl09TWF0aC5yb3VuZChhW25dKTtyZXR1cm4gYX19KG8pfXZhciBkPWZ1bmN0aW9uKCl7dGhpcy5jb252cz17fX07ZC5wcm90b3R5cGUucm91dGVTcGFjZT1mdW5jdGlvbih0LGUpe3ZhciBhPWVbMF07cmV0dXJuIHZvaWQgMD09PWE/dGhpcy5nZXRWYWx1ZXModCk6KFwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSksdGhpcy5zZXRWYWx1ZXModCxhKSl9LGQucHJvdG90eXBlLnNldFZhbHVlcz1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnNwYWNlPXQsdGhpcy5jb252cz17fSx0aGlzLmNvbnZzW3RdPWUsdGhpc30sZC5wcm90b3R5cGUuZ2V0VmFsdWVzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29udnNbdF07aWYoIWUpe3ZhciBhPXRoaXMuc3BhY2UsaT10aGlzLmNvbnZzW2FdO2U9blthXVt0XShpKSx0aGlzLmNvbnZzW3RdPWV9cmV0dXJuIGV9LFtcInJnYlwiLFwiaHNsXCIsXCJoc3ZcIixcImNteWtcIixcImtleXdvcmRcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtkLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yb3V0ZVNwYWNlKHQsYXJndW1lbnRzKX19KSxlLmV4cG9ydHM9bn0sezQ6NH1dLDY6W2Z1bmN0aW9uKHQsZSxhKXtlLmV4cG9ydHM9e2FsaWNlYmx1ZTpbMjQwLDI0OCwyNTVdLGFudGlxdWV3aGl0ZTpbMjUwLDIzNSwyMTVdLGFxdWE6WzAsMjU1LDI1NV0sYXF1YW1hcmluZTpbMTI3LDI1NSwyMTJdLGF6dXJlOlsyNDAsMjU1LDI1NV0sYmVpZ2U6WzI0NSwyNDUsMjIwXSxiaXNxdWU6WzI1NSwyMjgsMTk2XSxibGFjazpbMCwwLDBdLGJsYW5jaGVkYWxtb25kOlsyNTUsMjM1LDIwNV0sYmx1ZTpbMCwwLDI1NV0sYmx1ZXZpb2xldDpbMTM4LDQzLDIyNl0sYnJvd246WzE2NSw0Miw0Ml0sYnVybHl3b29kOlsyMjIsMTg0LDEzNV0sY2FkZXRibHVlOls5NSwxNTgsMTYwXSxjaGFydHJldXNlOlsxMjcsMjU1LDBdLGNob2NvbGF0ZTpbMjEwLDEwNSwzMF0sY29yYWw6WzI1NSwxMjcsODBdLGNvcm5mbG93ZXJibHVlOlsxMDAsMTQ5LDIzN10sY29ybnNpbGs6WzI1NSwyNDgsMjIwXSxjcmltc29uOlsyMjAsMjAsNjBdLGN5YW46WzAsMjU1LDI1NV0sZGFya2JsdWU6WzAsMCwxMzldLGRhcmtjeWFuOlswLDEzOSwxMzldLGRhcmtnb2xkZW5yb2Q6WzE4NCwxMzQsMTFdLGRhcmtncmF5OlsxNjksMTY5LDE2OV0sZGFya2dyZWVuOlswLDEwMCwwXSxkYXJrZ3JleTpbMTY5LDE2OSwxNjldLGRhcmtraGFraTpbMTg5LDE4MywxMDddLGRhcmttYWdlbnRhOlsxMzksMCwxMzldLGRhcmtvbGl2ZWdyZWVuOls4NSwxMDcsNDddLGRhcmtvcmFuZ2U6WzI1NSwxNDAsMF0sZGFya29yY2hpZDpbMTUzLDUwLDIwNF0sZGFya3JlZDpbMTM5LDAsMF0sZGFya3NhbG1vbjpbMjMzLDE1MCwxMjJdLGRhcmtzZWFncmVlbjpbMTQzLDE4OCwxNDNdLGRhcmtzbGF0ZWJsdWU6WzcyLDYxLDEzOV0sZGFya3NsYXRlZ3JheTpbNDcsNzksNzldLGRhcmtzbGF0ZWdyZXk6WzQ3LDc5LDc5XSxkYXJrdHVycXVvaXNlOlswLDIwNiwyMDldLGRhcmt2aW9sZXQ6WzE0OCwwLDIxMV0sZGVlcHBpbms6WzI1NSwyMCwxNDddLGRlZXBza3libHVlOlswLDE5MSwyNTVdLGRpbWdyYXk6WzEwNSwxMDUsMTA1XSxkaW1ncmV5OlsxMDUsMTA1LDEwNV0sZG9kZ2VyYmx1ZTpbMzAsMTQ0LDI1NV0sZmlyZWJyaWNrOlsxNzgsMzQsMzRdLGZsb3JhbHdoaXRlOlsyNTUsMjUwLDI0MF0sZm9yZXN0Z3JlZW46WzM0LDEzOSwzNF0sZnVjaHNpYTpbMjU1LDAsMjU1XSxnYWluc2Jvcm86WzIyMCwyMjAsMjIwXSxnaG9zdHdoaXRlOlsyNDgsMjQ4LDI1NV0sZ29sZDpbMjU1LDIxNSwwXSxnb2xkZW5yb2Q6WzIxOCwxNjUsMzJdLGdyYXk6WzEyOCwxMjgsMTI4XSxncmVlbjpbMCwxMjgsMF0sZ3JlZW55ZWxsb3c6WzE3MywyNTUsNDddLGdyZXk6WzEyOCwxMjgsMTI4XSxob25leWRldzpbMjQwLDI1NSwyNDBdLGhvdHBpbms6WzI1NSwxMDUsMTgwXSxpbmRpYW5yZWQ6WzIwNSw5Miw5Ml0saW5kaWdvOls3NSwwLDEzMF0saXZvcnk6WzI1NSwyNTUsMjQwXSxraGFraTpbMjQwLDIzMCwxNDBdLGxhdmVuZGVyOlsyMzAsMjMwLDI1MF0sbGF2ZW5kZXJibHVzaDpbMjU1LDI0MCwyNDVdLGxhd25ncmVlbjpbMTI0LDI1MiwwXSxsZW1vbmNoaWZmb246WzI1NSwyNTAsMjA1XSxsaWdodGJsdWU6WzE3MywyMTYsMjMwXSxsaWdodGNvcmFsOlsyNDAsMTI4LDEyOF0sbGlnaHRjeWFuOlsyMjQsMjU1LDI1NV0sbGlnaHRnb2xkZW5yb2R5ZWxsb3c6WzI1MCwyNTAsMjEwXSxsaWdodGdyYXk6WzIxMSwyMTEsMjExXSxsaWdodGdyZWVuOlsxNDQsMjM4LDE0NF0sbGlnaHRncmV5OlsyMTEsMjExLDIxMV0sbGlnaHRwaW5rOlsyNTUsMTgyLDE5M10sbGlnaHRzYWxtb246WzI1NSwxNjAsMTIyXSxsaWdodHNlYWdyZWVuOlszMiwxNzgsMTcwXSxsaWdodHNreWJsdWU6WzEzNSwyMDYsMjUwXSxsaWdodHNsYXRlZ3JheTpbMTE5LDEzNiwxNTNdLGxpZ2h0c2xhdGVncmV5OlsxMTksMTM2LDE1M10sbGlnaHRzdGVlbGJsdWU6WzE3NiwxOTYsMjIyXSxsaWdodHllbGxvdzpbMjU1LDI1NSwyMjRdLGxpbWU6WzAsMjU1LDBdLGxpbWVncmVlbjpbNTAsMjA1LDUwXSxsaW5lbjpbMjUwLDI0MCwyMzBdLG1hZ2VudGE6WzI1NSwwLDI1NV0sbWFyb29uOlsxMjgsMCwwXSxtZWRpdW1hcXVhbWFyaW5lOlsxMDIsMjA1LDE3MF0sbWVkaXVtYmx1ZTpbMCwwLDIwNV0sbWVkaXVtb3JjaGlkOlsxODYsODUsMjExXSxtZWRpdW1wdXJwbGU6WzE0NywxMTIsMjE5XSxtZWRpdW1zZWFncmVlbjpbNjAsMTc5LDExM10sbWVkaXVtc2xhdGVibHVlOlsxMjMsMTA0LDIzOF0sbWVkaXVtc3ByaW5nZ3JlZW46WzAsMjUwLDE1NF0sbWVkaXVtdHVycXVvaXNlOls3MiwyMDksMjA0XSxtZWRpdW12aW9sZXRyZWQ6WzE5OSwyMSwxMzNdLG1pZG5pZ2h0Ymx1ZTpbMjUsMjUsMTEyXSxtaW50Y3JlYW06WzI0NSwyNTUsMjUwXSxtaXN0eXJvc2U6WzI1NSwyMjgsMjI1XSxtb2NjYXNpbjpbMjU1LDIyOCwxODFdLG5hdmFqb3doaXRlOlsyNTUsMjIyLDE3M10sbmF2eTpbMCwwLDEyOF0sb2xkbGFjZTpbMjUzLDI0NSwyMzBdLG9saXZlOlsxMjgsMTI4LDBdLG9saXZlZHJhYjpbMTA3LDE0MiwzNV0sb3JhbmdlOlsyNTUsMTY1LDBdLG9yYW5nZXJlZDpbMjU1LDY5LDBdLG9yY2hpZDpbMjE4LDExMiwyMTRdLHBhbGVnb2xkZW5yb2Q6WzIzOCwyMzIsMTcwXSxwYWxlZ3JlZW46WzE1MiwyNTEsMTUyXSxwYWxldHVycXVvaXNlOlsxNzUsMjM4LDIzOF0scGFsZXZpb2xldHJlZDpbMjE5LDExMiwxNDddLHBhcGF5YXdoaXA6WzI1NSwyMzksMjEzXSxwZWFjaHB1ZmY6WzI1NSwyMTgsMTg1XSxwZXJ1OlsyMDUsMTMzLDYzXSxwaW5rOlsyNTUsMTkyLDIwM10scGx1bTpbMjIxLDE2MCwyMjFdLHBvd2RlcmJsdWU6WzE3NiwyMjQsMjMwXSxwdXJwbGU6WzEyOCwwLDEyOF0scmViZWNjYXB1cnBsZTpbMTAyLDUxLDE1M10scmVkOlsyNTUsMCwwXSxyb3N5YnJvd246WzE4OCwxNDMsMTQzXSxyb3lhbGJsdWU6WzY1LDEwNSwyMjVdLHNhZGRsZWJyb3duOlsxMzksNjksMTldLHNhbG1vbjpbMjUwLDEyOCwxMTRdLHNhbmR5YnJvd246WzI0NCwxNjQsOTZdLHNlYWdyZWVuOls0NiwxMzksODddLHNlYXNoZWxsOlsyNTUsMjQ1LDIzOF0sc2llbm5hOlsxNjAsODIsNDVdLHNpbHZlcjpbMTkyLDE5MiwxOTJdLHNreWJsdWU6WzEzNSwyMDYsMjM1XSxzbGF0ZWJsdWU6WzEwNiw5MCwyMDVdLHNsYXRlZ3JheTpbMTEyLDEyOCwxNDRdLHNsYXRlZ3JleTpbMTEyLDEyOCwxNDRdLHNub3c6WzI1NSwyNTAsMjUwXSxzcHJpbmdncmVlbjpbMCwyNTUsMTI3XSxzdGVlbGJsdWU6WzcwLDEzMCwxODBdLHRhbjpbMjEwLDE4MCwxNDBdLHRlYWw6WzAsMTI4LDEyOF0sdGhpc3RsZTpbMjE2LDE5MSwyMTZdLHRvbWF0bzpbMjU1LDk5LDcxXSx0dXJxdW9pc2U6WzY0LDIyNCwyMDhdLHZpb2xldDpbMjM4LDEzMCwyMzhdLHdoZWF0OlsyNDUsMjIyLDE3OV0sd2hpdGU6WzI1NSwyNTUsMjU1XSx3aGl0ZXNtb2tlOlsyNDUsMjQ1LDI0NV0seWVsbG93OlsyNTUsMjU1LDBdLHllbGxvd2dyZWVuOlsxNTQsMjA1LDUwXX19LHt9XSw3OltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCgyOCkoKTt0KDI2KShpKSx0KDIyKShpKSx0KDI1KShpKSx0KDIxKShpKSx0KDIzKShpKSx0KDI0KShpKSx0KDI5KShpKSx0KDMzKShpKSx0KDMxKShpKSx0KDM0KShpKSx0KDMyKShpKSx0KDM1KShpKSx0KDMwKShpKSx0KDI3KShpKSx0KDM2KShpKSx0KDM3KShpKSx0KDM4KShpKSx0KDM5KShpKSx0KDQwKShpKSx0KDQzKShpKSx0KDQxKShpKSx0KDQyKShpKSx0KDQ0KShpKSx0KDQ1KShpKSx0KDQ2KShpKSx0KDE1KShpKSx0KDE2KShpKSx0KDE3KShpKSx0KDE4KShpKSx0KDE5KShpKSx0KDIwKShpKSx0KDgpKGkpLHQoOSkoaSksdCgxMCkoaSksdCgxMSkoaSksdCgxMikoaSksdCgxMykoaSksdCgxNCkoaSksd2luZG93LkNoYXJ0PWUuZXhwb3J0cz1pfSx7MTA6MTAsMTE6MTEsMTI6MTIsMTM6MTMsMTQ6MTQsMTU6MTUsMTY6MTYsMTc6MTcsMTg6MTgsMTk6MTksMjA6MjAsMjE6MjEsMjI6MjIsMjM6MjMsMjQ6MjQsMjU6MjUsMjY6MjYsMjc6MjcsMjg6MjgsMjk6MjksMzA6MzAsMzE6MzEsMzI6MzIsMzM6MzMsMzQ6MzQsMzU6MzUsMzY6MzYsMzc6MzcsMzg6MzgsMzk6MzksNDA6NDAsNDE6NDEsNDI6NDIsNDM6NDMsNDQ6NDQsNDU6NDUsNDY6NDYsODo4LDk6OX1dLDg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5CYXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiYmFyXCIsbmV3IHQoZSxhKX19fSx7fV0sOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkJ1YmJsZT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJidWJibGVcIixuZXcgdChlLGEpfX19LHt9XSwxMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkRvdWdobnV0PWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImRvdWdobnV0XCIsbmV3IHQoZSxhKX19fSx7fV0sMTE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5MaW5lPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImxpbmVcIixuZXcgdChlLGEpfX19LHt9XSwxMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LlBvbGFyQXJlYT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJwb2xhckFyZWFcIixuZXcgdChlLGEpfX19LHt9XSwxMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LlJhZGFyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInJhZGFyXCIsbmV3IHQoZSxhKX19fSx7fV0sMTQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9e2hvdmVyOnttb2RlOlwic2luZ2xlXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIixpZDpcIngtYXhpcy0xXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImxlZnRcIixpZDpcInktYXhpcy0xXCJ9XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0KXtyZXR1cm5cIihcIit0LnhMYWJlbCtcIiwgXCIrdC55TGFiZWwrXCIpXCJ9fX19O3QuZGVmYXVsdHMuc2NhdHRlcj1lLHQuY29udHJvbGxlcnMuc2NhdHRlcj10LmNvbnRyb2xsZXJzLmxpbmUsdC5TY2F0dGVyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInNjYXR0ZXJcIixuZXcgdChlLGEpfX19LHt9XSwxNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5iYXI9e2hvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJjYXRlZ29yeVwiLGNhdGVnb3J5UGVyY2VudGFnZTouOCxiYXJQZXJjZW50YWdlOi45LGdyaWRMaW5lczp7b2Zmc2V0R3JpZExpbmVzOiEwfX1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwifV19fSx0LmNvbnRyb2xsZXJzLmJhcj10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUmVjdGFuZ2xlLGluaXRpYWxpemU6ZnVuY3Rpb24oZSxhKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyxlLGEpLHRoaXMuZ2V0TWV0YSgpLmJhcj0hMH0sZ2V0QmFyQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9MDtyZXR1cm4gZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihlLGkpe3ZhciBuPXQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoaSk7bi5iYXImJnQuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSYmKythfSx0KSxhfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcztlLmVhY2goYS5nZXRNZXRhKCkuZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9LGEpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5nZXRNZXRhKCkscj1uLmdldFNjYWxlRm9ySWQoby54QXhpc0lEKSxsPW4uZ2V0U2NhbGVGb3JJZChvLnlBeGlzSUQpLHM9bC5nZXRCYXNlUGl4ZWwoKSxkPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGUsdT10LmN1c3RvbXx8e30sYz1uLmdldERhdGFzZXQoKTt0Ll94U2NhbGU9cix0Ll95U2NhbGU9bCx0Ll9kYXRhc2V0SW5kZXg9bi5pbmRleCx0Ll9pbmRleD1hO3ZhciBoPW4uZ2V0UnVsZXIoYSk7dC5fbW9kZWw9e3g6bi5jYWxjdWxhdGVCYXJYKGEsbi5pbmRleCxoKSx5Omk/czpuLmNhbGN1bGF0ZUJhclkoYSxuLmluZGV4KSxsYWJlbDpuLmNoYXJ0LmRhdGEubGFiZWxzW2FdLGRhdGFzZXRMYWJlbDpjLmxhYmVsLGJhc2U6aT9zOm4uY2FsY3VsYXRlQmFyQmFzZShuLmluZGV4LGEpLHdpZHRoOm4uY2FsY3VsYXRlQmFyV2lkdGgoaCksYmFja2dyb3VuZENvbG9yOnUuYmFja2dyb3VuZENvbG9yP3UuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYmFja2dyb3VuZENvbG9yLGEsZC5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlclNraXBwZWQ6dS5ib3JkZXJTa2lwcGVkP3UuYm9yZGVyU2tpcHBlZDpkLmJvcmRlclNraXBwZWQsYm9yZGVyQ29sb3I6dS5ib3JkZXJDb2xvcj91LmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYm9yZGVyQ29sb3IsYSxkLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDp1LmJvcmRlcldpZHRoP3UuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5ib3JkZXJXaWR0aCxhLGQuYm9yZGVyV2lkdGgpfSx0LnBpdm90KCl9LGNhbGN1bGF0ZUJhckJhc2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPTA7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj1hLmNoYXJ0LGw9ci5kYXRhLmRhdGFzZXRzLHM9TnVtYmVyKGxbdF0uZGF0YVtlXSksZD0wO3Q+ZDtkKyspe3ZhciB1PWxbZF0sYz1yLmdldERhdGFzZXRNZXRhKGQpO2lmKGMuYmFyJiZjLnlBeGlzSUQ9PT1uLmlkJiZyLmlzRGF0YXNldFZpc2libGUoZCkpe3ZhciBoPU51bWJlcih1LmRhdGFbZV0pO28rPTA+cz9NYXRoLm1pbihoLDApOk1hdGgubWF4KGgsMCl9fXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9cmV0dXJuIG4uZ2V0QmFzZVBpeGVsKCl9LGdldFJ1bGVyOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz1hLmdldEJhckNvdW50KCk7ZT1cImNhdGVnb3J5XCI9PT1uLm9wdGlvbnMudHlwZT9uLmdldFBpeGVsRm9yVGljayh0KzEpLW4uZ2V0UGl4ZWxGb3JUaWNrKHQpOm4ud2lkdGgvbi50aWNrcy5sZW5ndGg7dmFyIHI9ZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlLGw9KGUtZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlKS8yLHM9ci9vO2lmKG4udGlja3MubGVuZ3RoIT09YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGgpe3ZhciBkPW4udGlja3MubGVuZ3RoL2EuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoO3MqPWR9dmFyIHU9cypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZSxjPXMtcypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZTtyZXR1cm57ZGF0YXNldENvdW50Om8sdGlja1dpZHRoOmUsY2F0ZWdvcnlXaWR0aDpyLGNhdGVnb3J5U3BhY2luZzpsLGZ1bGxCYXJXaWR0aDpzLGJhcldpZHRoOnUsYmFyU3BhY2luZzpjfX0sY2FsY3VsYXRlQmFyV2lkdGg6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRTY2FsZUZvcklkKHRoaXMuZ2V0TWV0YSgpLnhBeGlzSUQpO3JldHVybiBlLm9wdGlvbnMuYmFyVGhpY2tuZXNzP2Uub3B0aW9ucy5iYXJUaGlja25lc3M6ZS5vcHRpb25zLnN0YWNrZWQ/dC5jYXRlZ29yeVdpZHRoOnQuYmFyV2lkdGh9LGdldEJhckluZGV4OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT0wO2ZvcihhPTA7dD5hOysrYSllPXRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEoYSksZS5iYXImJnRoaXMuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShhKSYmKytpO3JldHVybiBpfSxjYWxjdWxhdGVCYXJYOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49aS5nZXRNZXRhKCksbz1pLmdldFNjYWxlRm9ySWQobi54QXhpc0lEKSxyPWkuZ2V0QmFySW5kZXgoZSksbD1vLmdldFBpeGVsRm9yVmFsdWUobnVsbCx0LGUsaS5jaGFydC5pc0NvbWJvKTtyZXR1cm4gbC09aS5jaGFydC5pc0NvbWJvP2EudGlja1dpZHRoLzI6MCxvLm9wdGlvbnMuc3RhY2tlZD9sK2EuY2F0ZWdvcnlXaWR0aC8yK2EuY2F0ZWdvcnlTcGFjaW5nOmwrYS5iYXJXaWR0aC8yK2EuY2F0ZWdvcnlTcGFjaW5nK2EuYmFyV2lkdGgqcithLmJhclNwYWNpbmcvMithLmJhclNwYWNpbmcqcn0sY2FsY3VsYXRlQmFyWTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89TnVtYmVyKGEuZ2V0RGF0YXNldCgpLmRhdGFbdF0pO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9MCxsPTAscz0wO2U+cztzKyspe3ZhciBkPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tzXSx1PWEuY2hhcnQuZ2V0RGF0YXNldE1ldGEocyk7aWYodS5iYXImJnUueUF4aXNJRD09PW4uaWQmJmEuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShzKSl7dmFyIGM9TnVtYmVyKGQuZGF0YVt0XSk7MD5jP2wrPWN8fDA6cis9Y3x8MH19cmV0dXJuIDA+bz9uLmdldFBpeGVsRm9yVmFsdWUobCtvKTpuLmdldFBpeGVsRm9yVmFsdWUocitvKX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10aGlzLG49dHx8MSxvPWkuZ2V0TWV0YSgpLmRhdGEscj1pLmdldERhdGFzZXQoKTtmb3IoZT0wLGE9by5sZW5ndGg7YT5lOysrZSl7dmFyIGw9ci5kYXRhW2VdO251bGw9PT1sfHx2b2lkIDA9PT1sfHxpc05hTihsKXx8b1tlXS50cmFuc2l0aW9uKG4pLmRyYXcoKX19LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsO28uYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3I/bi5ob3ZlckJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQmFja2dyb3VuZENvbG9yLGksZS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3I/bi5ob3ZlckJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCb3JkZXJDb2xvcixpLGUuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGg/bi5ob3ZlckJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCb3JkZXJXaWR0aCxpLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbCxyPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGU7by5iYWNrZ3JvdW5kQ29sb3I9bi5iYWNrZ3JvdW5kQ29sb3I/bi5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5iYWNrZ3JvdW5kQ29sb3IsaSxyLmJhY2tncm91bmRDb2xvciksby5ib3JkZXJDb2xvcj1uLmJvcmRlckNvbG9yP24uYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ib3JkZXJDb2xvcixpLHIuYm9yZGVyQ29sb3IpLG8uYm9yZGVyV2lkdGg9bi5ib3JkZXJXaWR0aD9uLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYm9yZGVyV2lkdGgsaSxyLmJvcmRlcldpZHRoKX19KSx0LmRlZmF1bHRzLmhvcml6b250YWxCYXI9e2hvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwifV0seUF4ZXM6W3twb3NpdGlvbjpcImxlZnRcIix0eXBlOlwiY2F0ZWdvcnlcIixjYXRlZ29yeVBlcmNlbnRhZ2U6LjgsYmFyUGVyY2VudGFnZTouOSxncmlkTGluZXM6e29mZnNldEdyaWRMaW5lczohMH19XX0sZWxlbWVudHM6e3JlY3RhbmdsZTp7Ym9yZGVyU2tpcHBlZDpcImxlZnRcIn19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9XCJcIjtyZXR1cm4gdC5sZW5ndGg+MCYmKHRbMF0ueUxhYmVsP2E9dFswXS55TGFiZWw6ZS5sYWJlbHMubGVuZ3RoPjAmJnRbMF0uaW5kZXg8ZS5sYWJlbHMubGVuZ3RoJiYoYT1lLmxhYmVsc1t0WzBdLmluZGV4XSkpLGF9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCI7cmV0dXJuIGErXCI6IFwiK3QueExhYmVsfX19fSx0LmNvbnRyb2xsZXJzLmhvcml6b250YWxCYXI9dC5jb250cm9sbGVycy5iYXIuZXh0ZW5kKHt1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5nZXRNZXRhKCkscj1uLmdldFNjYWxlRm9ySWQoby54QXhpc0lEKSxsPW4uZ2V0U2NhbGVGb3JJZChvLnlBeGlzSUQpLHM9ci5nZXRCYXNlUGl4ZWwoKSxkPXQuY3VzdG9tfHx7fSx1PW4uZ2V0RGF0YXNldCgpLGM9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZTt0Ll94U2NhbGU9cix0Ll95U2NhbGU9bCx0Ll9kYXRhc2V0SW5kZXg9bi5pbmRleCx0Ll9pbmRleD1hO3ZhciBoPW4uZ2V0UnVsZXIoYSk7dC5fbW9kZWw9e3g6aT9zOm4uY2FsY3VsYXRlQmFyWChhLG4uaW5kZXgpLHk6bi5jYWxjdWxhdGVCYXJZKGEsbi5pbmRleCxoKSxsYWJlbDpuLmNoYXJ0LmRhdGEubGFiZWxzW2FdLGRhdGFzZXRMYWJlbDp1LmxhYmVsLGJhc2U6aT9zOm4uY2FsY3VsYXRlQmFyQmFzZShuLmluZGV4LGEpLGhlaWdodDpuLmNhbGN1bGF0ZUJhckhlaWdodChoKSxiYWNrZ3JvdW5kQ29sb3I6ZC5iYWNrZ3JvdW5kQ29sb3I/ZC5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5iYWNrZ3JvdW5kQ29sb3IsYSxjLmJhY2tncm91bmRDb2xvciksYm9yZGVyU2tpcHBlZDpkLmJvcmRlclNraXBwZWQ/ZC5ib3JkZXJTa2lwcGVkOmMuYm9yZGVyU2tpcHBlZCxib3JkZXJDb2xvcjpkLmJvcmRlckNvbG9yP2QuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5ib3JkZXJDb2xvcixhLGMuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOmQuYm9yZGVyV2lkdGg/ZC5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJvcmRlcldpZHRoLGEsYy5ib3JkZXJXaWR0aCl9LHQuZHJhdz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHNbKHUrdCklNF19dmFyIGU9dGhpcy5fY2hhcnQuY3R4LGE9dGhpcy5fdmlldyxpPWEuaGVpZ2h0LzIsbj1hLnktaSxvPWEueStpLHI9YS5iYXNlLShhLmJhc2UtYS54KSxsPWEuYm9yZGVyV2lkdGgvMjthLmJvcmRlcldpZHRoJiYobis9bCxvLT1sLHIrPWwpLGUuYmVnaW5QYXRoKCksZS5maWxsU3R5bGU9YS5iYWNrZ3JvdW5kQ29sb3IsZS5zdHJva2VTdHlsZT1hLmJvcmRlckNvbG9yLGUubGluZVdpZHRoPWEuYm9yZGVyV2lkdGg7dmFyIHM9W1thLmJhc2Usb10sW2EuYmFzZSxuXSxbcixuXSxbcixvXV0sZD1bXCJib3R0b21cIixcImxlZnRcIixcInRvcFwiLFwicmlnaHRcIl0sdT1kLmluZGV4T2YoYS5ib3JkZXJTa2lwcGVkLDApOy0xPT09dSYmKHU9MCksZS5tb3ZlVG8uYXBwbHkoZSx0KDApKTtmb3IodmFyIGM9MTs0PmM7YysrKWUubGluZVRvLmFwcGx5KGUsdChjKSk7ZS5maWxsKCksYS5ib3JkZXJXaWR0aCYmZS5zdHJva2UoKX0sdC5waXZvdCgpfSxjYWxjdWxhdGVCYXJCYXNlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz0wO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9YS5jaGFydCxsPXIuZGF0YS5kYXRhc2V0cyxzPU51bWJlcihsW3RdLmRhdGFbZV0pLGQ9MDt0PmQ7ZCsrKXt2YXIgdT1sW2RdLGM9ci5nZXREYXRhc2V0TWV0YShkKTtpZihjLmJhciYmYy54QXhpc0lEPT09bi5pZCYmci5pc0RhdGFzZXRWaXNpYmxlKGQpKXtcclxudmFyIGg9TnVtYmVyKHUuZGF0YVtlXSk7bys9MD5zP01hdGgubWluKGgsMCk6TWF0aC5tYXgoaCwwKX19cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX1yZXR1cm4gbi5nZXRCYXNlUGl4ZWwoKX0sZ2V0UnVsZXI6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPWEuZ2V0QmFyQ291bnQoKTtlPVwiY2F0ZWdvcnlcIj09PW4ub3B0aW9ucy50eXBlP24uZ2V0UGl4ZWxGb3JUaWNrKHQrMSktbi5nZXRQaXhlbEZvclRpY2sodCk6bi53aWR0aC9uLnRpY2tzLmxlbmd0aDt2YXIgcj1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UsbD0oZS1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UpLzIscz1yL287aWYobi50aWNrcy5sZW5ndGghPT1hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aCl7dmFyIGQ9bi50aWNrcy5sZW5ndGgvYS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg7cyo9ZH12YXIgdT1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlLGM9cy1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlO3JldHVybntkYXRhc2V0Q291bnQ6byx0aWNrSGVpZ2h0OmUsY2F0ZWdvcnlIZWlnaHQ6cixjYXRlZ29yeVNwYWNpbmc6bCxmdWxsQmFySGVpZ2h0OnMsYmFySGVpZ2h0OnUsYmFyU3BhY2luZzpjfX0sY2FsY3VsYXRlQmFySGVpZ2h0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmdldFNjYWxlRm9ySWQoZS5nZXRNZXRhKCkueUF4aXNJRCk7cmV0dXJuIGEub3B0aW9ucy5iYXJUaGlja25lc3M/YS5vcHRpb25zLmJhclRoaWNrbmVzczphLm9wdGlvbnMuc3RhY2tlZD90LmNhdGVnb3J5SGVpZ2h0OnQuYmFySGVpZ2h0fSxjYWxjdWxhdGVCYXJYOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz1OdW1iZXIoYS5nZXREYXRhc2V0KCkuZGF0YVt0XSk7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj0wLGw9MCxzPTA7ZT5zO3MrKyl7dmFyIGQ9YS5jaGFydC5kYXRhLmRhdGFzZXRzW3NdLHU9YS5jaGFydC5nZXREYXRhc2V0TWV0YShzKTtpZih1LmJhciYmdS54QXhpc0lEPT09bi5pZCYmYS5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKHMpKXt2YXIgYz1OdW1iZXIoZC5kYXRhW3RdKTswPmM/bCs9Y3x8MDpyKz1jfHwwfX1yZXR1cm4gMD5vP24uZ2V0UGl4ZWxGb3JWYWx1ZShsK28pOm4uZ2V0UGl4ZWxGb3JWYWx1ZShyK28pfXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9LGNhbGN1bGF0ZUJhclk6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1pLmdldE1ldGEoKSxvPWkuZ2V0U2NhbGVGb3JJZChuLnlBeGlzSUQpLHI9aS5nZXRCYXJJbmRleChlKSxsPW8uZ2V0UGl4ZWxGb3JWYWx1ZShudWxsLHQsZSxpLmNoYXJ0LmlzQ29tYm8pO3JldHVybiBsLT1pLmNoYXJ0LmlzQ29tYm8/YS50aWNrSGVpZ2h0LzI6MCxvLm9wdGlvbnMuc3RhY2tlZD9sK2EuY2F0ZWdvcnlIZWlnaHQvMithLmNhdGVnb3J5U3BhY2luZzpsK2EuYmFySGVpZ2h0LzIrYS5jYXRlZ29yeVNwYWNpbmcrYS5iYXJIZWlnaHQqcithLmJhclNwYWNpbmcvMithLmJhclNwYWNpbmcqcn19KX19LHt9XSwxNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5idWJibGU9e2hvdmVyOnttb2RlOlwic2luZ2xlXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIixpZDpcIngtYXhpcy0wXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImxlZnRcIixpZDpcInktYXhpcy0wXCJ9XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiLGk9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0uZGF0YVt0LmluZGV4XTtyZXR1cm4gYStcIjogKFwiK3QueExhYmVsK1wiLCBcIit0LnlMYWJlbCtcIiwgXCIraS5yK1wiKVwifX19fSx0LmNvbnRyb2xsZXJzLmJ1YmJsZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWkuZGF0YTtlLmVhY2gobixmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbihhLGksbil7dmFyIG89dGhpcyxyPW8uZ2V0TWV0YSgpLGw9by5nZXRTY2FsZUZvcklkKHIueEF4aXNJRCkscz1vLmdldFNjYWxlRm9ySWQoci55QXhpc0lEKSxkPWEuY3VzdG9tfHx7fSx1PW8uZ2V0RGF0YXNldCgpLGM9dS5kYXRhW2ldLGg9by5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LGY9by5pbmRleDtlLmV4dGVuZChhLHtfeFNjYWxlOmwsX3lTY2FsZTpzLF9kYXRhc2V0SW5kZXg6ZixfaW5kZXg6aSxfbW9kZWw6e3g6bj9sLmdldFBpeGVsRm9yRGVjaW1hbCguNSk6bC5nZXRQaXhlbEZvclZhbHVlKFwib2JqZWN0XCI9PXR5cGVvZiBjP2M6TmFOLGksZixvLmNoYXJ0LmlzQ29tYm8pLHk6bj9zLmdldEJhc2VQaXhlbCgpOnMuZ2V0UGl4ZWxGb3JWYWx1ZShjLGksZikscmFkaXVzOm4/MDpkLnJhZGl1cz9kLnJhZGl1czpvLmdldFJhZGl1cyhjKSxoaXRSYWRpdXM6ZC5oaXRSYWRpdXM/ZC5oaXRSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5oaXRSYWRpdXMsaSxoLmhpdFJhZGl1cyl9fSksdC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKG8sYSxoKTt2YXIgZz1hLl9tb2RlbDtnLnNraXA9ZC5za2lwP2Quc2tpcDppc05hTihnLngpfHxpc05hTihnLnkpLGEucGl2b3QoKX0sZ2V0UmFkaXVzOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJ8fHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5yYWRpdXN9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpczt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5zZXRIb3ZlclN0eWxlLmNhbGwoaSxhKTt2YXIgbj1pLmNoYXJ0LmRhdGEuZGF0YXNldHNbYS5fZGF0YXNldEluZGV4XSxvPWEuX2luZGV4LHI9YS5jdXN0b218fHt9LGw9YS5fbW9kZWw7bC5yYWRpdXM9ci5ob3ZlclJhZGl1cz9yLmhvdmVyUmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4uaG92ZXJSYWRpdXMsbyxpLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpK2kuZ2V0UmFkaXVzKG4uZGF0YVtvXSl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpczt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwoYSxlLGEuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCk7dmFyIGk9YS5jaGFydC5kYXRhLmRhdGFzZXRzW2UuX2RhdGFzZXRJbmRleF0uZGF0YVtlLl9pbmRleF0sbj1lLmN1c3RvbXx8e30sbz1lLl9tb2RlbDtvLnJhZGl1cz1uLnJhZGl1cz9uLnJhZGl1czphLmdldFJhZGl1cyhpKX19KX19LHt9XSwxNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzO2EuZG91Z2hudXQ9e2FuaW1hdGlvbjp7YW5pbWF0ZVJvdGF0ZTohMCxhbmltYXRlU2NhbGU6ITF9LGFzcGVjdFJhdGlvOjEsaG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTt2YXIgYT10LmRhdGEsaT1hLmRhdGFzZXRzLG49YS5sYWJlbHM7aWYoaS5sZW5ndGgpZm9yKHZhciBvPTA7bzxpWzBdLmRhdGEubGVuZ3RoOysrbyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JytpWzBdLmJhY2tncm91bmRDb2xvcltvXSsnXCI+PC9zcGFuPicpLG5bb10mJmUucHVzaChuW29dKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfSxsZWdlbmQ6e2xhYmVsczp7Z2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGE9dC5kYXRhO3JldHVybiBhLmxhYmVscy5sZW5ndGgmJmEuZGF0YXNldHMubGVuZ3RoP2EubGFiZWxzLm1hcChmdW5jdGlvbihpLG4pe3ZhciBvPXQuZ2V0RGF0YXNldE1ldGEoMCkscj1hLmRhdGFzZXRzWzBdLGw9by5kYXRhW25dLHM9bCYmbC5jdXN0b218fHt9LGQ9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsdT10Lm9wdGlvbnMuZWxlbWVudHMuYXJjLGM9cy5iYWNrZ3JvdW5kQ29sb3I/cy5iYWNrZ3JvdW5kQ29sb3I6ZChyLmJhY2tncm91bmRDb2xvcixuLHUuYmFja2dyb3VuZENvbG9yKSxoPXMuYm9yZGVyQ29sb3I/cy5ib3JkZXJDb2xvcjpkKHIuYm9yZGVyQ29sb3Isbix1LmJvcmRlckNvbG9yKSxmPXMuYm9yZGVyV2lkdGg/cy5ib3JkZXJXaWR0aDpkKHIuYm9yZGVyV2lkdGgsbix1LmJvcmRlcldpZHRoKTtyZXR1cm57dGV4dDppLGZpbGxTdHlsZTpjLHN0cm9rZVN0eWxlOmgsbGluZVdpZHRoOmYsaGlkZGVuOmlzTmFOKHIuZGF0YVtuXSl8fG8uZGF0YVtuXS5oaWRkZW4saW5kZXg6bn19KTpbXX19LG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLmluZGV4LHI9dGhpcy5jaGFydDtmb3IoYT0wLGk9KHIuZGF0YS5kYXRhc2V0c3x8W10pLmxlbmd0aDtpPmE7KythKW49ci5nZXREYXRhc2V0TWV0YShhKSxuLmRhdGFbb10mJihuLmRhdGFbb10uaGlkZGVuPSFuLmRhdGFbb10uaGlkZGVuKTtyLnVwZGF0ZSgpfX0sY3V0b3V0UGVyY2VudGFnZTo1MCxyb3RhdGlvbjpNYXRoLlBJKi0uNSxjaXJjdW1mZXJlbmNlOjIqTWF0aC5QSSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsYSl7dmFyIGk9YS5sYWJlbHNbdC5pbmRleF0sbj1cIjogXCIrYS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0uZGF0YVt0LmluZGV4XTtyZXR1cm4gZS5pc0FycmF5KGkpPyhpPWkuc2xpY2UoKSxpWzBdKz1uKTppKz1uLGl9fX19LGEucGllPWUuY2xvbmUoYS5kb3VnaG51dCksZS5leHRlbmQoYS5waWUse2N1dG91dFBlcmNlbnRhZ2U6MH0pLHQuY29udHJvbGxlcnMuZG91Z2hudXQ9dC5jb250cm9sbGVycy5waWU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkFyYyxsaW5rU2NhbGVzOmUubm9vcCxnZXRSaW5nSW5kZXg6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsYT0wO3Q+YTsrK2EpdGhpcy5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGEpJiYrK2U7cmV0dXJuIGV9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWkuY2hhcnRBcmVhLG89aS5vcHRpb25zLHI9by5lbGVtZW50cy5hcmMsbD1uLnJpZ2h0LW4ubGVmdC1yLmJvcmRlcldpZHRoLHM9bi5ib3R0b20tbi50b3Atci5ib3JkZXJXaWR0aCxkPU1hdGgubWluKGwscyksdT17eDowLHk6MH0sYz1hLmdldE1ldGEoKSxoPW8uY3V0b3V0UGVyY2VudGFnZSxmPW8uY2lyY3VtZmVyZW5jZTtpZihmPDIqTWF0aC5QSSl7dmFyIGc9by5yb3RhdGlvbiUoMipNYXRoLlBJKTtnKz0yKk1hdGguUEkqKGc+PU1hdGguUEk/LTE6ZzwtTWF0aC5QST8xOjApO3ZhciBwPWcrZixtPXt4Ok1hdGguY29zKGcpLHk6TWF0aC5zaW4oZyl9LGI9e3g6TWF0aC5jb3MocCkseTpNYXRoLnNpbihwKX0sdj0wPj1nJiZwPj0wfHxnPD0yKk1hdGguUEkmJjIqTWF0aC5QSTw9cCx4PWc8PS41Kk1hdGguUEkmJi41Kk1hdGguUEk8PXB8fGc8PTIuNSpNYXRoLlBJJiYyLjUqTWF0aC5QSTw9cCx5PWc8PS1NYXRoLlBJJiYtTWF0aC5QSTw9cHx8Zzw9TWF0aC5QSSYmTWF0aC5QSTw9cCxrPWc8PS41Ki1NYXRoLlBJJiYuNSotTWF0aC5QSTw9cHx8Zzw9MS41Kk1hdGguUEkmJjEuNSpNYXRoLlBJPD1wLFM9aC8xMDAsdz17eDp5Py0xOk1hdGgubWluKG0ueCoobS54PDA/MTpTKSxiLngqKGIueDwwPzE6UykpLHk6az8tMTpNYXRoLm1pbihtLnkqKG0ueTwwPzE6UyksYi55KihiLnk8MD8xOlMpKX0sTT17eDp2PzE6TWF0aC5tYXgobS54KihtLng+MD8xOlMpLGIueCooYi54PjA/MTpTKSkseTp4PzE6TWF0aC5tYXgobS55KihtLnk+MD8xOlMpLGIueSooYi55PjA/MTpTKSl9LEM9e3dpZHRoOi41KihNLngtdy54KSxoZWlnaHQ6LjUqKE0ueS13LnkpfTtkPU1hdGgubWluKGwvQy53aWR0aCxzL0MuaGVpZ2h0KSx1PXt4OihNLngrdy54KSotLjUseTooTS55K3cueSkqLS41fX1pLmJvcmRlcldpZHRoPWEuZ2V0TWF4Qm9yZGVyV2lkdGgoYy5kYXRhKSxpLm91dGVyUmFkaXVzPU1hdGgubWF4KChkLWkuYm9yZGVyV2lkdGgpLzIsMCksaS5pbm5lclJhZGl1cz1NYXRoLm1heChoP2kub3V0ZXJSYWRpdXMvMTAwKmg6MSwwKSxpLnJhZGl1c0xlbmd0aD0oaS5vdXRlclJhZGl1cy1pLmlubmVyUmFkaXVzKS9pLmdldFZpc2libGVEYXRhc2V0Q291bnQoKSxpLm9mZnNldFg9dS54Kmkub3V0ZXJSYWRpdXMsaS5vZmZzZXRZPXUueSppLm91dGVyUmFkaXVzLGMudG90YWw9YS5jYWxjdWxhdGVUb3RhbCgpLGEub3V0ZXJSYWRpdXM9aS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCphLmdldFJpbmdJbmRleChhLmluZGV4KSxhLmlubmVyUmFkaXVzPWEub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgsZS5lYWNoKGMuZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uY2hhcnQscj1vLmNoYXJ0QXJlYSxsPW8ub3B0aW9ucyxzPWwuYW5pbWF0aW9uLGQ9KHIubGVmdCtyLnJpZ2h0KS8yLHU9KHIudG9wK3IuYm90dG9tKS8yLGM9bC5yb3RhdGlvbixoPWwucm90YXRpb24sZj1uLmdldERhdGFzZXQoKSxnPWkmJnMuYW5pbWF0ZVJvdGF0ZT8wOnQuaGlkZGVuPzA6bi5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKGYuZGF0YVthXSkqKGwuY2lyY3VtZmVyZW5jZS8oMipNYXRoLlBJKSkscD1pJiZzLmFuaW1hdGVTY2FsZT8wOm4uaW5uZXJSYWRpdXMsbT1pJiZzLmFuaW1hdGVTY2FsZT8wOm4ub3V0ZXJSYWRpdXMsYj1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdDtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX21vZGVsOnt4OmQrby5vZmZzZXRYLHk6dStvLm9mZnNldFksc3RhcnRBbmdsZTpjLGVuZEFuZ2xlOmgsY2lyY3VtZmVyZW5jZTpnLG91dGVyUmFkaXVzOm0saW5uZXJSYWRpdXM6cCxsYWJlbDpiKGYubGFiZWwsYSxvLmRhdGEubGFiZWxzW2FdKX19KTt2YXIgdj10Ll9tb2RlbDt0aGlzLnJlbW92ZUhvdmVyU3R5bGUodCksaSYmcy5hbmltYXRlUm90YXRlfHwoMD09PWE/di5zdGFydEFuZ2xlPWwucm90YXRpb246di5zdGFydEFuZ2xlPW4uZ2V0TWV0YSgpLmRhdGFbYS0xXS5fbW9kZWwuZW5kQW5nbGUsdi5lbmRBbmdsZT12LnN0YXJ0QW5nbGUrdi5jaXJjdW1mZXJlbmNlKSx0LnBpdm90KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKHRoaXMsZSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMuYXJjKX0sY2FsY3VsYXRlVG90YWw6ZnVuY3Rpb24oKXt2YXIgdCxhPXRoaXMuZ2V0RGF0YXNldCgpLGk9dGhpcy5nZXRNZXRhKCksbj0wO3JldHVybiBlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUsaSl7dD1hLmRhdGFbaV0saXNOYU4odCl8fGUuaGlkZGVufHwobis9TWF0aC5hYnModCkpfSksbn0sY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldE1ldGEoKS50b3RhbDtyZXR1cm4gZT4wJiYhaXNOYU4odCk/MipNYXRoLlBJKih0L2UpOjB9LGdldE1heEJvcmRlcldpZHRoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxhLGk9MCxuPXRoaXMuaW5kZXgsbz10Lmxlbmd0aCxyPTA7bz5yO3IrKyllPXRbcl0uX21vZGVsP3Rbcl0uX21vZGVsLmJvcmRlcldpZHRoOjAsYT10W3JdLl9jaGFydD90W3JdLl9jaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1tuXS5ob3ZlckJvcmRlcldpZHRoOjAsaT1lPmk/ZTppLGk9YT5pP2E6aTtyZXR1cm4gaX19KX19LHt9XSwxODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIGEuZ2V0VmFsdWVPckRlZmF1bHQodC5zaG93TGluZSxlLnNob3dMaW5lcyl9dmFyIGE9dC5oZWxwZXJzO3QuZGVmYXVsdHMubGluZT17c2hvd0xpbmVzOiEwLHNwYW5HYXBzOiExLGhvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJjYXRlZ29yeVwiLGlkOlwieC1heGlzLTBcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLGlkOlwieS1heGlzLTBcIn1dfX0sdC5jb250cm9sbGVycy5saW5lPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhc2V0RWxlbWVudFR5cGU6dC5lbGVtZW50cy5MaW5lLGRhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgaSxuLG8scj10aGlzLGw9ci5nZXRNZXRhKCkscz1sLmRhdGFzZXQsZD1sLmRhdGF8fFtdLHU9ci5jaGFydC5vcHRpb25zLGM9dS5lbGVtZW50cy5saW5lLGg9ci5nZXRTY2FsZUZvcklkKGwueUF4aXNJRCksZj1yLmdldERhdGFzZXQoKSxnPWUoZix1KTtmb3IoZyYmKG89cy5jdXN0b218fHt9LHZvaWQgMCE9PWYudGVuc2lvbiYmdm9pZCAwPT09Zi5saW5lVGVuc2lvbiYmKGYubGluZVRlbnNpb249Zi50ZW5zaW9uKSxzLl9zY2FsZT1oLHMuX2RhdGFzZXRJbmRleD1yLmluZGV4LHMuX2NoaWxkcmVuPWQscy5fbW9kZWw9e3NwYW5HYXBzOmYuc3BhbkdhcHM/Zi5zcGFuR2Fwczp1LnNwYW5HYXBzLHRlbnNpb246by50ZW5zaW9uP28udGVuc2lvbjphLmdldFZhbHVlT3JEZWZhdWx0KGYubGluZVRlbnNpb24sYy50ZW5zaW9uKSxiYWNrZ3JvdW5kQ29sb3I6by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6Zi5iYWNrZ3JvdW5kQ29sb3J8fGMuYmFja2dyb3VuZENvbG9yLGJvcmRlcldpZHRoOm8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDpmLmJvcmRlcldpZHRofHxjLmJvcmRlcldpZHRoLGJvcmRlckNvbG9yOm8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjpmLmJvcmRlckNvbG9yfHxjLmJvcmRlckNvbG9yLGJvcmRlckNhcFN0eWxlOm8uYm9yZGVyQ2FwU3R5bGU/by5ib3JkZXJDYXBTdHlsZTpmLmJvcmRlckNhcFN0eWxlfHxjLmJvcmRlckNhcFN0eWxlLGJvcmRlckRhc2g6by5ib3JkZXJEYXNoP28uYm9yZGVyRGFzaDpmLmJvcmRlckRhc2h8fGMuYm9yZGVyRGFzaCxib3JkZXJEYXNoT2Zmc2V0Om8uYm9yZGVyRGFzaE9mZnNldD9vLmJvcmRlckRhc2hPZmZzZXQ6Zi5ib3JkZXJEYXNoT2Zmc2V0fHxjLmJvcmRlckRhc2hPZmZzZXQsYm9yZGVySm9pblN0eWxlOm8uYm9yZGVySm9pblN0eWxlP28uYm9yZGVySm9pblN0eWxlOmYuYm9yZGVySm9pblN0eWxlfHxjLmJvcmRlckpvaW5TdHlsZSxmaWxsOm8uZmlsbD9vLmZpbGw6dm9pZCAwIT09Zi5maWxsP2YuZmlsbDpjLmZpbGwsc3RlcHBlZExpbmU6by5zdGVwcGVkTGluZT9vLnN0ZXBwZWRMaW5lOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5zdGVwcGVkTGluZSxjLnN0ZXBwZWQpLGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6by5jdWJpY0ludGVycG9sYXRpb25Nb2RlP28uY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTphLmdldFZhbHVlT3JEZWZhdWx0KGYuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSxjLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUpLHNjYWxlVG9wOmgudG9wLHNjYWxlQm90dG9tOmguYm90dG9tLHNjYWxlWmVybzpoLmdldEJhc2VQaXhlbCgpfSxzLnBpdm90KCkpLGk9MCxuPWQubGVuZ3RoO24+aTsrK2kpci51cGRhdGVFbGVtZW50KGRbaV0saSx0KTtmb3IoZyYmMCE9PXMuX21vZGVsLnRlbnNpb24mJnIudXBkYXRlQmV6aWVyQ29udHJvbFBvaW50cygpLGk9MCxuPWQubGVuZ3RoO24+aTsrK2kpZFtpXS5waXZvdCgpfSxnZXRQb2ludEJhY2tncm91bmRDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5iYWNrZ3JvdW5kQ29sb3Isbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5iYWNrZ3JvdW5kQ29sb3I/aT1vLmJhY2tncm91bmRDb2xvcjpuLnBvaW50QmFja2dyb3VuZENvbG9yP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJhY2tncm91bmRDb2xvcixlLGkpOm4uYmFja2dyb3VuZENvbG9yJiYoaT1uLmJhY2tncm91bmRDb2xvciksaX0sZ2V0UG9pbnRCb3JkZXJDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ib3JkZXJDb2xvcixuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJvcmRlckNvbG9yP2k9by5ib3JkZXJDb2xvcjpuLnBvaW50Qm9yZGVyQ29sb3I/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50Qm9yZGVyQ29sb3IsZSxpKTpuLmJvcmRlckNvbG9yJiYoaT1uLmJvcmRlckNvbG9yKSxpfSxnZXRQb2ludEJvcmRlcldpZHRoOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJvcmRlcldpZHRoLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYm9yZGVyV2lkdGg/aT1vLmJvcmRlcldpZHRoOm4ucG9pbnRCb3JkZXJXaWR0aD9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCb3JkZXJXaWR0aCxlLGkpOm4uYm9yZGVyV2lkdGgmJihpPW4uYm9yZGVyV2lkdGgpLGl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxlLGkpe3ZhciBuLG8scj10aGlzLGw9ci5nZXRNZXRhKCkscz10LmN1c3RvbXx8e30sZD1yLmdldERhdGFzZXQoKSx1PXIuaW5kZXgsYz1kLmRhdGFbZV0saD1yLmdldFNjYWxlRm9ySWQobC55QXhpc0lEKSxmPXIuZ2V0U2NhbGVGb3JJZChsLnhBeGlzSUQpLGc9ci5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LHA9ci5jaGFydC5kYXRhLmxhYmVsc3x8W10sbT0xPT09cC5sZW5ndGh8fDE9PT1kLmRhdGEubGVuZ3RofHxyLmNoYXJ0LmlzQ29tYm87dm9pZCAwIT09ZC5yYWRpdXMmJnZvaWQgMD09PWQucG9pbnRSYWRpdXMmJihkLnBvaW50UmFkaXVzPWQucmFkaXVzKSx2b2lkIDAhPT1kLmhpdFJhZGl1cyYmdm9pZCAwPT09ZC5wb2ludEhpdFJhZGl1cyYmKGQucG9pbnRIaXRSYWRpdXM9ZC5oaXRSYWRpdXMpLG49Zi5nZXRQaXhlbEZvclZhbHVlKFwib2JqZWN0XCI9PXR5cGVvZiBjP2M6TmFOLGUsdSxtKSxvPWk/aC5nZXRCYXNlUGl4ZWwoKTpyLmNhbGN1bGF0ZVBvaW50WShjLGUsdSksdC5feFNjYWxlPWYsdC5feVNjYWxlPWgsdC5fZGF0YXNldEluZGV4PXUsdC5faW5kZXg9ZSx0Ll9tb2RlbD17eDpuLHk6byxza2lwOnMuc2tpcHx8aXNOYU4obil8fGlzTmFOKG8pLHJhZGl1czpzLnJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludFJhZGl1cyxlLGcucmFkaXVzKSxwb2ludFN0eWxlOnMucG9pbnRTdHlsZXx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludFN0eWxlLGUsZy5wb2ludFN0eWxlKSxiYWNrZ3JvdW5kQ29sb3I6ci5nZXRQb2ludEJhY2tncm91bmRDb2xvcih0LGUpLGJvcmRlckNvbG9yOnIuZ2V0UG9pbnRCb3JkZXJDb2xvcih0LGUpLGJvcmRlcldpZHRoOnIuZ2V0UG9pbnRCb3JkZXJXaWR0aCh0LGUpLHRlbnNpb246bC5kYXRhc2V0Ll9tb2RlbD9sLmRhdGFzZXQuX21vZGVsLnRlbnNpb246MCxzdGVwcGVkTGluZTpsLmRhdGFzZXQuX21vZGVsP2wuZGF0YXNldC5fbW9kZWwuc3RlcHBlZExpbmU6ITEsaGl0UmFkaXVzOnMuaGl0UmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50SGl0UmFkaXVzLGUsZy5oaXRSYWRpdXMpfX0sY2FsY3VsYXRlUG9pbnRZOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxuLG8scj10aGlzLGw9ci5jaGFydCxzPXIuZ2V0TWV0YSgpLGQ9ci5nZXRTY2FsZUZvcklkKHMueUF4aXNJRCksdT0wLGM9MDtpZihkLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKGk9MDthPmk7aSsrKWlmKG49bC5kYXRhLmRhdGFzZXRzW2ldLG89bC5nZXREYXRhc2V0TWV0YShpKSxcImxpbmVcIj09PW8udHlwZSYmby55QXhpc0lEPT09ZC5pZCYmbC5pc0RhdGFzZXRWaXNpYmxlKGkpKXt2YXIgaD1OdW1iZXIoZC5nZXRSaWdodFZhbHVlKG4uZGF0YVtlXSkpOzA+aD9jKz1ofHwwOnUrPWh8fDB9dmFyIGY9TnVtYmVyKGQuZ2V0UmlnaHRWYWx1ZSh0KSk7cmV0dXJuIDA+Zj9kLmdldFBpeGVsRm9yVmFsdWUoYytmKTpkLmdldFBpeGVsRm9yVmFsdWUodStmKX1yZXR1cm4gZC5nZXRQaXhlbEZvclZhbHVlKHQpfSx1cGRhdGVCZXppZXJDb250cm9sUG9pbnRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsYSl7cmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHQsYSksZSl9dmFyIGUsaSxuLG8scixsPXRoaXMscz1sLmdldE1ldGEoKSxkPWwuY2hhcnQuY2hhcnRBcmVhLHU9cy5kYXRhfHxbXTtpZihzLmRhdGFzZXQuX21vZGVsLnNwYW5HYXBzJiYodT11LmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hdC5fbW9kZWwuc2tpcH0pKSxcIm1vbm90b25lXCI9PT1zLmRhdGFzZXQuX21vZGVsLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUpYS5zcGxpbmVDdXJ2ZU1vbm90b25lKHUpO2Vsc2UgZm9yKGU9MCxpPXUubGVuZ3RoO2k+ZTsrK2Upbj11W2VdLG89bi5fbW9kZWwscj1hLnNwbGluZUN1cnZlKGEucHJldmlvdXNJdGVtKHUsZSkuX21vZGVsLG8sYS5uZXh0SXRlbSh1LGUpLl9tb2RlbCxzLmRhdGFzZXQuX21vZGVsLnRlbnNpb24pLG8uY29udHJvbFBvaW50UHJldmlvdXNYPXIucHJldmlvdXMueCxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT1yLnByZXZpb3VzLnksby5jb250cm9sUG9pbnROZXh0WD1yLm5leHQueCxvLmNvbnRyb2xQb2ludE5leHRZPXIubmV4dC55O2lmKGwuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLmNhcEJlemllclBvaW50cylmb3IoZT0wLGk9dS5sZW5ndGg7aT5lOysrZSlvPXVbZV0uX21vZGVsLG8uY29udHJvbFBvaW50UHJldmlvdXNYPXQoby5jb250cm9sUG9pbnRQcmV2aW91c1gsZC5sZWZ0LGQucmlnaHQpLG8uY29udHJvbFBvaW50UHJldmlvdXNZPXQoby5jb250cm9sUG9pbnRQcmV2aW91c1ksZC50b3AsZC5ib3R0b20pLG8uY29udHJvbFBvaW50TmV4dFg9dChvLmNvbnRyb2xQb2ludE5leHRYLGQubGVmdCxkLnJpZ2h0KSxvLmNvbnRyb2xQb2ludE5leHRZPXQoby5jb250cm9sUG9pbnROZXh0WSxkLnRvcCxkLmJvdHRvbSl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGEsaSxuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW8uZGF0YXx8W10sbD10fHwxO2ZvcihhPTAsaT1yLmxlbmd0aDtpPmE7KythKXJbYV0udHJhbnNpdGlvbihsKTtmb3IoZShuLmdldERhdGFzZXQoKSxuLmNoYXJ0Lm9wdGlvbnMpJiZvLmRhdGFzZXQudHJhbnNpdGlvbihsKS5kcmF3KCksYT0wLGk9ci5sZW5ndGg7aT5hOysrYSlyW2FdLmRyYXcoKX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWw7by5yYWRpdXM9bi5ob3ZlclJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyUmFkaXVzLGksdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IsaSxhLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcnx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQm9yZGVyQ29sb3IsaSxhLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRofHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxpLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1lLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxuPXQuX2luZGV4LG89dC5jdXN0b218fHt9LHI9dC5fbW9kZWw7dm9pZCAwIT09aS5yYWRpdXMmJnZvaWQgMD09PWkucG9pbnRSYWRpdXMmJihpLnBvaW50UmFkaXVzPWkucmFkaXVzKSxyLnJhZGl1cz1vLnJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoaS5wb2ludFJhZGl1cyxuLGUuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5yYWRpdXMpLHIuYmFja2dyb3VuZENvbG9yPWUuZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3IodCxuKSxyLmJvcmRlckNvbG9yPWUuZ2V0UG9pbnRCb3JkZXJDb2xvcih0LG4pLHIuYm9yZGVyV2lkdGg9ZS5nZXRQb2ludEJvcmRlcldpZHRoKHQsbil9fSl9fSx7fV0sMTk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMucG9sYXJBcmVhPXtzY2FsZTp7dHlwZTpcInJhZGlhbExpbmVhclwiLGxpbmVBcmM6ITAsdGlja3M6e2JlZ2luQXRaZXJvOiEwfX0sYW5pbWF0aW9uOnthbmltYXRlUm90YXRlOiEwLGFuaW1hdGVTY2FsZTohMH0sc3RhcnRBbmdsZTotLjUqTWF0aC5QSSxhc3BlY3RSYXRpbzoxLGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7dmFyIGE9dC5kYXRhLGk9YS5kYXRhc2V0cyxuPWEubGFiZWxzO2lmKGkubGVuZ3RoKWZvcih2YXIgbz0wO288aVswXS5kYXRhLmxlbmd0aDsrK28pZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicraVswXS5iYWNrZ3JvdW5kQ29sb3Jbb10rJ1wiPjwvc3Bhbj4nKSxuW29dJiZlLnB1c2gobltvXSksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX0sbGVnZW5kOntsYWJlbHM6e2dlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBhPXQuZGF0YTtyZXR1cm4gYS5sYWJlbHMubGVuZ3RoJiZhLmRhdGFzZXRzLmxlbmd0aD9hLmxhYmVscy5tYXAoZnVuY3Rpb24oaSxuKXt2YXIgbz10LmdldERhdGFzZXRNZXRhKDApLHI9YS5kYXRhc2V0c1swXSxsPW8uZGF0YVtuXSxzPWwuY3VzdG9tfHx7fSxkPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHU9dC5vcHRpb25zLmVsZW1lbnRzLmFyYyxjPXMuYmFja2dyb3VuZENvbG9yP3MuYmFja2dyb3VuZENvbG9yOmQoci5iYWNrZ3JvdW5kQ29sb3Isbix1LmJhY2tncm91bmRDb2xvciksaD1zLmJvcmRlckNvbG9yP3MuYm9yZGVyQ29sb3I6ZChyLmJvcmRlckNvbG9yLG4sdS5ib3JkZXJDb2xvciksZj1zLmJvcmRlcldpZHRoP3MuYm9yZGVyV2lkdGg6ZChyLmJvcmRlcldpZHRoLG4sdS5ib3JkZXJXaWR0aCk7cmV0dXJue3RleHQ6aSxmaWxsU3R5bGU6YyxzdHJva2VTdHlsZTpoLGxpbmVXaWR0aDpmLGhpZGRlbjppc05hTihyLmRhdGFbbl0pfHxvLmRhdGFbbl0uaGlkZGVuLGluZGV4Om59fSk6W119fSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS5pbmRleCxyPXRoaXMuY2hhcnQ7Zm9yKGE9MCxpPShyLmRhdGEuZGF0YXNldHN8fFtdKS5sZW5ndGg7aT5hOysrYSluPXIuZ2V0RGF0YXNldE1ldGEoYSksbi5kYXRhW29dLmhpZGRlbj0hbi5kYXRhW29dLmhpZGRlbjtyLnVwZGF0ZSgpfX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGUpe3JldHVybiBlLmxhYmVsc1t0LmluZGV4XStcIjogXCIrdC55TGFiZWx9fX19LHQuY29udHJvbGxlcnMucG9sYXJBcmVhPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5BcmMsbGlua1NjYWxlczplLm5vb3AsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49aS5jaGFydEFyZWEsbz1hLmdldE1ldGEoKSxyPWkub3B0aW9ucyxsPXIuZWxlbWVudHMuYXJjLHM9TWF0aC5taW4obi5yaWdodC1uLmxlZnQsbi5ib3R0b20tbi50b3ApO2kub3V0ZXJSYWRpdXM9TWF0aC5tYXgoKHMtbC5ib3JkZXJXaWR0aC8yKS8yLDApLGkuaW5uZXJSYWRpdXM9TWF0aC5tYXgoci5jdXRvdXRQZXJjZW50YWdlP2kub3V0ZXJSYWRpdXMvMTAwKnIuY3V0b3V0UGVyY2VudGFnZToxLDApLGkucmFkaXVzTGVuZ3RoPShpLm91dGVyUmFkaXVzLWkuaW5uZXJSYWRpdXMpL2kuZ2V0VmlzaWJsZURhdGFzZXRDb3VudCgpLGEub3V0ZXJSYWRpdXM9aS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCphLmluZGV4LGEuaW5uZXJSYWRpdXM9YS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCxvLmNvdW50PWEuY291bnRWaXNpYmxlRWxlbWVudHMoKSxlLmVhY2goby5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXtmb3IodmFyIG49dGhpcyxvPW4uY2hhcnQscj1uLmdldERhdGFzZXQoKSxsPW8ub3B0aW9ucyxzPWwuYW5pbWF0aW9uLGQ9by5zY2FsZSx1PWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LGM9by5kYXRhLmxhYmVscyxoPW4uY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShyLmRhdGFbYV0pLGY9ZC54Q2VudGVyLGc9ZC55Q2VudGVyLHA9MCxtPW4uZ2V0TWV0YSgpLGI9MDthPmI7KytiKWlzTmFOKHIuZGF0YVtiXSl8fG0uZGF0YVtiXS5oaWRkZW58fCsrcDt2YXIgdj1sLnN0YXJ0QW5nbGUseD10LmhpZGRlbj8wOmQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoci5kYXRhW2FdKSx5PXYraCpwLGs9eSsodC5oaWRkZW4/MDpoKSxTPXMuYW5pbWF0ZVNjYWxlPzA6ZC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShyLmRhdGFbYV0pO2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfc2NhbGU6ZCxfbW9kZWw6e3g6Zix5OmcsaW5uZXJSYWRpdXM6MCxvdXRlclJhZGl1czppP1M6eCxzdGFydEFuZ2xlOmkmJnMuYW5pbWF0ZVJvdGF0ZT92OnksZW5kQW5nbGU6aSYmcy5hbmltYXRlUm90YXRlP3Y6ayxsYWJlbDp1KGMsYSxjW2FdKX19KSxuLnJlbW92ZUhvdmVyU3R5bGUodCksdC5waXZvdCgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbCh0aGlzLGUsdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmFyYyl9LGNvdW50VmlzaWJsZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXREYXRhc2V0KCksYT10aGlzLmdldE1ldGEoKSxpPTA7cmV0dXJuIGUuZWFjaChhLmRhdGEsZnVuY3Rpb24oZSxhKXtpc05hTih0LmRhdGFbYV0pfHxlLmhpZGRlbnx8aSsrfSksaX0sY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldE1ldGEoKS5jb3VudDtyZXR1cm4gZT4wJiYhaXNOYU4odCk/MipNYXRoLlBJL2U6MH19KX19LHt9XSwyMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5yYWRhcj17YXNwZWN0UmF0aW86MSxzY2FsZTp7dHlwZTpcInJhZGlhbExpbmVhclwifSxlbGVtZW50czp7bGluZTp7dGVuc2lvbjowfX19LHQuY29udHJvbGxlcnMucmFkYXI9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFzZXRFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkxpbmUsZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsbGlua1NjYWxlczplLm5vb3AsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWkuZGF0YXNldCxvPWkuZGF0YSxyPW4uY3VzdG9tfHx7fSxsPWEuZ2V0RGF0YXNldCgpLHM9YS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUsZD1hLmNoYXJ0LnNjYWxlO3ZvaWQgMCE9PWwudGVuc2lvbiYmdm9pZCAwPT09bC5saW5lVGVuc2lvbiYmKGwubGluZVRlbnNpb249bC50ZW5zaW9uKSxlLmV4dGVuZChpLmRhdGFzZXQse19kYXRhc2V0SW5kZXg6YS5pbmRleCxfY2hpbGRyZW46byxfbG9vcDohMCxfbW9kZWw6e3RlbnNpb246ci50ZW5zaW9uP3IudGVuc2lvbjplLmdldFZhbHVlT3JEZWZhdWx0KGwubGluZVRlbnNpb24scy50ZW5zaW9uKSxiYWNrZ3JvdW5kQ29sb3I6ci5iYWNrZ3JvdW5kQ29sb3I/ci5iYWNrZ3JvdW5kQ29sb3I6bC5iYWNrZ3JvdW5kQ29sb3J8fHMuYmFja2dyb3VuZENvbG9yLGJvcmRlcldpZHRoOnIuYm9yZGVyV2lkdGg/ci5ib3JkZXJXaWR0aDpsLmJvcmRlcldpZHRofHxzLmJvcmRlcldpZHRoLGJvcmRlckNvbG9yOnIuYm9yZGVyQ29sb3I/ci5ib3JkZXJDb2xvcjpsLmJvcmRlckNvbG9yfHxzLmJvcmRlckNvbG9yLGZpbGw6ci5maWxsP3IuZmlsbDp2b2lkIDAhPT1sLmZpbGw/bC5maWxsOnMuZmlsbCxib3JkZXJDYXBTdHlsZTpyLmJvcmRlckNhcFN0eWxlP3IuYm9yZGVyQ2FwU3R5bGU6bC5ib3JkZXJDYXBTdHlsZXx8cy5ib3JkZXJDYXBTdHlsZSxib3JkZXJEYXNoOnIuYm9yZGVyRGFzaD9yLmJvcmRlckRhc2g6bC5ib3JkZXJEYXNofHxzLmJvcmRlckRhc2gsYm9yZGVyRGFzaE9mZnNldDpyLmJvcmRlckRhc2hPZmZzZXQ/ci5ib3JkZXJEYXNoT2Zmc2V0OmwuYm9yZGVyRGFzaE9mZnNldHx8cy5ib3JkZXJEYXNoT2Zmc2V0LGJvcmRlckpvaW5TdHlsZTpyLmJvcmRlckpvaW5TdHlsZT9yLmJvcmRlckpvaW5TdHlsZTpsLmJvcmRlckpvaW5TdHlsZXx8cy5ib3JkZXJKb2luU3R5bGUsc2NhbGVUb3A6ZC50b3Asc2NhbGVCb3R0b206ZC5ib3R0b20sc2NhbGVaZXJvOmQuZ2V0QmFzZVBvc2l0aW9uKCl9fSksaS5kYXRhc2V0LnBpdm90KCksZS5lYWNoKG8sZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSxhKSxhLnVwZGF0ZUJlemllckNvbnRyb2xQb2ludHMoKX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPXQuY3VzdG9tfHx7fSxyPW4uZ2V0RGF0YXNldCgpLGw9bi5jaGFydC5zY2FsZSxzPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxkPWwuZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlKGEsci5kYXRhW2FdKTtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX3NjYWxlOmwsX21vZGVsOnt4Omk/bC54Q2VudGVyOmQueCx5Omk/bC55Q2VudGVyOmQueSx0ZW5zaW9uOm8udGVuc2lvbj9vLnRlbnNpb246ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLnRlbnNpb24sbi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUudGVuc2lvbikscmFkaXVzOm8ucmFkaXVzP28ucmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRSYWRpdXMsYSxzLnJhZGl1cyksYmFja2dyb3VuZENvbG9yOm8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCYWNrZ3JvdW5kQ29sb3IsYSxzLmJhY2tncm91bmRDb2xvciksYm9yZGVyQ29sb3I6by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCb3JkZXJDb2xvcixhLHMuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOm8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50Qm9yZGVyV2lkdGgsYSxzLmJvcmRlcldpZHRoKSxwb2ludFN0eWxlOm8ucG9pbnRTdHlsZT9vLnBvaW50U3R5bGU6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludFN0eWxlLGEscy5wb2ludFN0eWxlKSxoaXRSYWRpdXM6by5oaXRSYWRpdXM/by5oaXRSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5oaXRSYWRpdXMsYSxzLmhpdFJhZGl1cyl9fSksdC5fbW9kZWwuc2tpcD1vLnNraXA/by5za2lwOmlzTmFOKHQuX21vZGVsLngpfHxpc05hTih0Ll9tb2RlbC55KX0sdXBkYXRlQmV6aWVyQ29udHJvbFBvaW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuY2hhcnQuY2hhcnRBcmVhLGE9dGhpcy5nZXRNZXRhKCk7ZS5lYWNoKGEuZGF0YSxmdW5jdGlvbihpLG4pe3ZhciBvPWkuX21vZGVsLHI9ZS5zcGxpbmVDdXJ2ZShlLnByZXZpb3VzSXRlbShhLmRhdGEsbiwhMCkuX21vZGVsLG8sZS5uZXh0SXRlbShhLmRhdGEsbiwhMCkuX21vZGVsLG8udGVuc2lvbik7by5jb250cm9sUG9pbnRQcmV2aW91c1g9TWF0aC5tYXgoTWF0aC5taW4oci5wcmV2aW91cy54LHQucmlnaHQpLHQubGVmdCksby5jb250cm9sUG9pbnRQcmV2aW91c1k9TWF0aC5tYXgoTWF0aC5taW4oci5wcmV2aW91cy55LHQuYm90dG9tKSx0LnRvcCksby5jb250cm9sUG9pbnROZXh0WD1NYXRoLm1heChNYXRoLm1pbihyLm5leHQueCx0LnJpZ2h0KSx0LmxlZnQpLG8uY29udHJvbFBvaW50TmV4dFk9TWF0aC5tYXgoTWF0aC5taW4oci5uZXh0LnksdC5ib3R0b20pLHQudG9wKSxpLnBpdm90KCl9KX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmdldE1ldGEoKSxpPXR8fDE7ZS5lYWNoKGEuZGF0YSxmdW5jdGlvbih0KXt0LnRyYW5zaXRpb24oaSl9KSxhLmRhdGFzZXQudHJhbnNpdGlvbihpKS5kcmF3KCksZS5lYWNoKGEuZGF0YSxmdW5jdGlvbih0KXt0LmRyYXcoKX0pfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5jdXN0b218fHt9LG49dC5faW5kZXgsbz10Ll9tb2RlbDtvLnJhZGl1cz1pLmhvdmVyUmFkaXVzP2kuaG92ZXJSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyUmFkaXVzLG4sdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1pLmhvdmVyQmFja2dyb3VuZENvbG9yP2kuaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yLG4sZS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1pLmhvdmVyQm9yZGVyQ29sb3I/aS5ob3ZlckJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJvcmRlckNvbG9yLG4sZS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPWkuaG92ZXJCb3JkZXJXaWR0aD9pLmhvdmVyQm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQm9yZGVyV2lkdGgsbixvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuY3VzdG9tfHx7fSxuPXQuX2luZGV4LG89dC5fbW9kZWwscj10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQ7by5yYWRpdXM9aS5yYWRpdXM/aS5yYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5yYWRpdXMsbixyLnJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9aS5iYWNrZ3JvdW5kQ29sb3I/aS5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJhY2tncm91bmRDb2xvcixuLHIuYmFja2dyb3VuZENvbG9yKSxvLmJvcmRlckNvbG9yPWkuYm9yZGVyQ29sb3I/aS5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50Qm9yZGVyQ29sb3IsbixyLmJvcmRlckNvbG9yKSxvLmJvcmRlcldpZHRoPWkuYm9yZGVyV2lkdGg/aS5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50Qm9yZGVyV2lkdGgsbixyLmJvcmRlcldpZHRoKX19KX19LHt9XSwyMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwuYW5pbWF0aW9uPXtkdXJhdGlvbjoxZTMsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIsb25Qcm9ncmVzczplLm5vb3Asb25Db21wbGV0ZTplLm5vb3B9LHQuQW5pbWF0aW9uPXQuRWxlbWVudC5leHRlbmQoe2N1cnJlbnRTdGVwOm51bGwsbnVtU3RlcHM6NjAsZWFzaW5nOlwiXCIscmVuZGVyOm51bGwsb25BbmltYXRpb25Qcm9ncmVzczpudWxsLG9uQW5pbWF0aW9uQ29tcGxldGU6bnVsbH0pLHQuYW5pbWF0aW9uU2VydmljZT17ZnJhbWVEdXJhdGlvbjoxNyxhbmltYXRpb25zOltdLGRyb3BGcmFtZXM6MCxyZXF1ZXN0Om51bGwsYWRkQW5pbWF0aW9uOmZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXRoaXM7aXx8KHQuYW5pbWF0aW5nPSEwKTtmb3IodmFyIG89MDtvPG4uYW5pbWF0aW9ucy5sZW5ndGg7KytvKWlmKG4uYW5pbWF0aW9uc1tvXS5jaGFydEluc3RhbmNlPT09dClyZXR1cm4gdm9pZChuLmFuaW1hdGlvbnNbb10uYW5pbWF0aW9uT2JqZWN0PWUpO24uYW5pbWF0aW9ucy5wdXNoKHtjaGFydEluc3RhbmNlOnQsYW5pbWF0aW9uT2JqZWN0OmV9KSwxPT09bi5hbmltYXRpb25zLmxlbmd0aCYmbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX0sY2FuY2VsQW5pbWF0aW9uOmZ1bmN0aW9uKHQpe3ZhciBhPWUuZmluZEluZGV4KHRoaXMuYW5pbWF0aW9ucyxmdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFydEluc3RhbmNlPT09dH0pOy0xIT09YSYmKHRoaXMuYW5pbWF0aW9ucy5zcGxpY2UoYSwxKSx0LmFuaW1hdGluZz0hMSl9LHJlcXVlc3RBbmltYXRpb25GcmFtZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7bnVsbD09PXQucmVxdWVzdCYmKHQucmVxdWVzdD1lLnJlcXVlc3RBbmltRnJhbWUuY2FsbCh3aW5kb3csZnVuY3Rpb24oKXt0LnJlcXVlc3Q9bnVsbCx0LnN0YXJ0RGlnZXN0KCl9KSl9LHN0YXJ0RGlnZXN0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPURhdGUubm93KCksYT0wO3QuZHJvcEZyYW1lcz4xJiYoYT1NYXRoLmZsb29yKHQuZHJvcEZyYW1lcyksdC5kcm9wRnJhbWVzPXQuZHJvcEZyYW1lcyUxKTtmb3IodmFyIGk9MDtpPHQuYW5pbWF0aW9ucy5sZW5ndGg7KW51bGw9PT10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwJiYodC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD0wKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwKz0xK2EsdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD50LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzJiYodC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LnJlbmRlcih0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0KSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcy5jYWxsJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MuY2FsbCh0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0pLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9PT10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzPyh0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZS5jYWxsJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUuY2FsbCh0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0pLHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLmFuaW1hdGluZz0hMSx0LmFuaW1hdGlvbnMuc3BsaWNlKGksMSkpOisraTt2YXIgbj1EYXRlLm5vdygpLG89KG4tZSkvdC5mcmFtZUR1cmF0aW9uO3QuZHJvcEZyYW1lcys9byx0LmFuaW1hdGlvbnMubGVuZ3RoPjAmJnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9fX19LHt9XSwyMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmNhbnZhc0hlbHBlcnM9e307ZS5kcmF3UG9pbnQ9ZnVuY3Rpb24odCxlLGEsaSxuKXt2YXIgbyxyLGwscyxkLHU7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJihvPWUudG9TdHJpbmcoKSxcIltvYmplY3QgSFRNTEltYWdlRWxlbWVudF1cIj09PW98fFwiW29iamVjdCBIVE1MQ2FudmFzRWxlbWVudF1cIj09PW8pKXJldHVybiB2b2lkIHQuZHJhd0ltYWdlKGUsaS1lLndpZHRoLzIsbi1lLmhlaWdodC8yKTtpZighKGlzTmFOKGEpfHwwPj1hKSl7c3dpdGNoKGUpe2RlZmF1bHQ6dC5iZWdpblBhdGgoKSx0LmFyYyhpLG4sYSwwLDIqTWF0aC5QSSksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJ0cmlhbmdsZVwiOnQuYmVnaW5QYXRoKCkscj0zKmEvTWF0aC5zcXJ0KDMpLGQ9cipNYXRoLnNxcnQoMykvMix0Lm1vdmVUbyhpLXIvMixuK2QvMyksdC5saW5lVG8oaStyLzIsbitkLzMpLHQubGluZVRvKGksbi0yKmQvMyksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJyZWN0XCI6dT0xL01hdGguU1FSVDIqYSx0LmJlZ2luUGF0aCgpLHQuZmlsbFJlY3QoaS11LG4tdSwyKnUsMip1KSx0LnN0cm9rZVJlY3QoaS11LG4tdSwyKnUsMip1KTticmVhaztjYXNlXCJyZWN0Um90XCI6dT0xL01hdGguU1FSVDIqYSx0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGktdSxuKSx0LmxpbmVUbyhpLG4rdSksdC5saW5lVG8oaSt1LG4pLHQubGluZVRvKGksbi11KSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcImNyb3NzXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4rYSksdC5saW5lVG8oaSxuLWEpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJjcm9zc1JvdFwiOnQuYmVnaW5QYXRoKCksbD1NYXRoLmNvcyhNYXRoLlBJLzQpKmEscz1NYXRoLnNpbihNYXRoLlBJLzQpKmEsdC5tb3ZlVG8oaS1sLG4tcyksdC5saW5lVG8oaStsLG4rcyksdC5tb3ZlVG8oaS1sLG4rcyksdC5saW5lVG8oaStsLG4tcyksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJzdGFyXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4rYSksdC5saW5lVG8oaSxuLWEpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksbD1NYXRoLmNvcyhNYXRoLlBJLzQpKmEscz1NYXRoLnNpbihNYXRoLlBJLzQpKmEsdC5tb3ZlVG8oaS1sLG4tcyksdC5saW5lVG8oaStsLG4rcyksdC5tb3ZlVG8oaS1sLG4rcyksdC5saW5lVG8oaStsLG4tcyksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJsaW5lXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwiZGFzaFwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKX10LnN0cm9rZSgpfX19fSx7fV0sMjM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhPXIuZ2V0U3R5bGUodCxlKSxpPWEmJmEubWF0Y2goLyhcXGQrKXB4Lyk7cmV0dXJuIGk/TnVtYmVyKGlbMV0pOnZvaWQgMH1mdW5jdGlvbiBhKHQsYSl7dmFyIGk9dC5zdHlsZSxuPXQuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpLG89dC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKTtpZih0Ll9jaGFydGpzPXtpbml0aWFsOntoZWlnaHQ6bix3aWR0aDpvLHN0eWxlOntkaXNwbGF5OmkuZGlzcGxheSxoZWlnaHQ6aS5oZWlnaHQsd2lkdGg6aS53aWR0aH19fSxpLmRpc3BsYXk9aS5kaXNwbGF5fHxcImJsb2NrXCIsbnVsbD09PW98fFwiXCI9PT1vKXt2YXIgcj1lKHQsXCJ3aWR0aFwiKTt2b2lkIDAhPT1yJiYodC53aWR0aD1yKX1pZihudWxsPT09bnx8XCJcIj09PW4paWYoXCJcIj09PXQuc3R5bGUuaGVpZ2h0KXQuaGVpZ2h0PXQud2lkdGgvKGEub3B0aW9ucy5hc3BlY3RSYXRpb3x8Mik7ZWxzZXt2YXIgbD1lKHQsXCJoZWlnaHRcIik7dm9pZCAwIT09ciYmKHQuaGVpZ2h0PWwpfXJldHVybiB0fWZ1bmN0aW9uIGkodCl7aWYodC5fY2hhcnRqcyl7dmFyIGU9dC5fY2hhcnRqcy5pbml0aWFsO1tcImhlaWdodFwiLFwid2lkdGhcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgaT1lW2FdO3ZvaWQgMD09PWl8fG51bGw9PT1pP3QucmVtb3ZlQXR0cmlidXRlKGEpOnQuc2V0QXR0cmlidXRlKGEsaSl9KSxyLmVhY2goZS5zdHlsZXx8e30sZnVuY3Rpb24oZSxhKXt0LnN0eWxlW2FdPWV9KSx0LndpZHRoPXQud2lkdGgsZGVsZXRlIHQuX2NoYXJ0anN9fWZ1bmN0aW9uIG4odCxlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgdD90PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpOnQubGVuZ3RoJiYodD10WzBdKSx0JiZ0LmNhbnZhcyYmKHQ9dC5jYW52YXMpLHQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCl7dmFyIGk9dC5nZXRDb250ZXh0JiZ0LmdldENvbnRleHQoXCIyZFwiKTtpZihpIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKXJldHVybiBhKHQsZSksaX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBvKGUpe2U9ZXx8e307dmFyIGE9ZS5kYXRhPWUuZGF0YXx8e307cmV0dXJuIGEuZGF0YXNldHM9YS5kYXRhc2V0c3x8W10sYS5sYWJlbHM9YS5sYWJlbHN8fFtdLGUub3B0aW9ucz1yLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLHQuZGVmYXVsdHNbZS50eXBlXSxlLm9wdGlvbnN8fHt9KSxlfXZhciByPXQuaGVscGVyczt0LnR5cGVzPXt9LHQuaW5zdGFuY2VzPXt9LHQuY29udHJvbGxlcnM9e30sdC5Db250cm9sbGVyPWZ1bmN0aW9uKGUsYSxpKXt2YXIgbD10aGlzO2E9byhhKTt2YXIgcz1uKGUsYSksZD1zJiZzLmNhbnZhcyx1PWQmJmQuaGVpZ2h0LGM9ZCYmZC53aWR0aDtyZXR1cm4gaS5jdHg9cyxpLmNhbnZhcz1kLGkuY29uZmlnPWEsaS53aWR0aD1jLGkuaGVpZ2h0PXUsaS5hc3BlY3RSYXRpbz11P2MvdTpudWxsLGwuaWQ9ci51aWQoKSxsLmNoYXJ0PWksbC5jb25maWc9YSxsLm9wdGlvbnM9YS5vcHRpb25zLGwuX2J1ZmZlcmVkUmVuZGVyPSExLHQuaW5zdGFuY2VzW2wuaWRdPWwsT2JqZWN0LmRlZmluZVByb3BlcnR5KGwsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBsLmNvbmZpZy5kYXRhfX0pLHMmJmQ/KHIucmV0aW5hU2NhbGUoaSksbC5vcHRpb25zLnJlc3BvbnNpdmUmJihyLmFkZFJlc2l6ZUxpc3RlbmVyKGQucGFyZW50Tm9kZSxmdW5jdGlvbigpe2wucmVzaXplKCl9KSxsLnJlc2l6ZSghMCkpLGwuaW5pdGlhbGl6ZSgpLGwpOihjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBjaGFydDogY2FuJ3QgYWNxdWlyZSBjb250ZXh0IGZyb20gdGhlIGdpdmVuIGl0ZW1cIiksbCl9LHIuZXh0ZW5kKHQuQ29udHJvbGxlci5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlSW5pdFwiLFtlXSksZS5iaW5kRXZlbnRzKCksZS5lbnN1cmVTY2FsZXNIYXZlSURzKCksZS5idWlsZE9yVXBkYXRlQ29udHJvbGxlcnMoKSxlLmJ1aWxkU2NhbGVzKCksZS51cGRhdGVMYXlvdXQoKSxlLnJlc2V0RWxlbWVudHMoKSxlLmluaXRUb29sVGlwKCksZS51cGRhdGUoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJJbml0XCIsW2VdKSxlfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiByLmNsZWFyKHRoaXMuY2hhcnQpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gdC5hbmltYXRpb25TZXJ2aWNlLmNhbmNlbEFuaW1hdGlvbih0aGlzKSx0aGlzfSxyZXNpemU6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1hLm9wdGlvbnMsbz1pLmNhbnZhcyxsPW4ubWFpbnRhaW5Bc3BlY3RSYXRpbyYmaS5hc3BlY3RSYXRpb3x8bnVsbCxzPU1hdGguZmxvb3Ioci5nZXRNYXhpbXVtV2lkdGgobykpLGQ9TWF0aC5mbG9vcihsP3MvbDpyLmdldE1heGltdW1IZWlnaHQobykpO2lmKGkud2lkdGghPT1zfHxpLmhlaWdodCE9PWQpe28ud2lkdGg9aS53aWR0aD1zLG8uaGVpZ2h0PWkuaGVpZ2h0PWQsby5zdHlsZS53aWR0aD1zK1wicHhcIixvLnN0eWxlLmhlaWdodD1kK1wicHhcIixyLnJldGluYVNjYWxlKGkpO3ZhciB1PXt3aWR0aDpzLGhlaWdodDpkfTt0LnBsdWdpbnMubm90aWZ5KFwicmVzaXplXCIsW2EsdV0pLGEub3B0aW9ucy5vblJlc2l6ZSYmYS5vcHRpb25zLm9uUmVzaXplKGEsdSksZXx8KGEuc3RvcCgpLGEudXBkYXRlKGEub3B0aW9ucy5yZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb24pKX19LGVuc3VyZVNjYWxlc0hhdmVJRHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMsZT10LnNjYWxlc3x8e30sYT10LnNjYWxlO3IuZWFjaChlLnhBeGVzLGZ1bmN0aW9uKHQsZSl7dC5pZD10LmlkfHxcIngtYXhpcy1cIitlfSksci5lYWNoKGUueUF4ZXMsZnVuY3Rpb24odCxlKXt0LmlkPXQuaWR8fFwieS1heGlzLVwiK2V9KSxhJiYoYS5pZD1hLmlkfHxcInNjYWxlXCIpfSxidWlsZFNjYWxlczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1lLm9wdGlvbnMsaT1lLnNjYWxlcz17fSxuPVtdO2Euc2NhbGVzJiYobj1uLmNvbmNhdCgoYS5zY2FsZXMueEF4ZXN8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue29wdGlvbnM6dCxkdHlwZTpcImNhdGVnb3J5XCJ9fSksKGEuc2NhbGVzLnlBeGVzfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybntvcHRpb25zOnQsZHR5cGU6XCJsaW5lYXJcIn19KSkpLGEuc2NhbGUmJm4ucHVzaCh7b3B0aW9uczphLnNjYWxlLGR0eXBlOlwicmFkaWFsTGluZWFyXCIsaXNEZWZhdWx0OiEwfSksci5lYWNoKG4sZnVuY3Rpb24oYSl7dmFyIG49YS5vcHRpb25zLG89ci5nZXRWYWx1ZU9yRGVmYXVsdChuLnR5cGUsYS5kdHlwZSksbD10LnNjYWxlU2VydmljZS5nZXRTY2FsZUNvbnN0cnVjdG9yKG8pO2lmKGwpe3ZhciBzPW5ldyBsKHtpZDpuLmlkLG9wdGlvbnM6bixjdHg6ZS5jaGFydC5jdHgsY2hhcnQ6ZX0pO2lbcy5pZF09cyxhLmlzRGVmYXVsdCYmKGUuc2NhbGU9cyl9fSksdC5zY2FsZVNlcnZpY2UuYWRkU2NhbGVzVG9MYXlvdXQodGhpcyl9LHVwZGF0ZUxheW91dDpmdW5jdGlvbigpe3QubGF5b3V0U2VydmljZS51cGRhdGUodGhpcyx0aGlzLmNoYXJ0LndpZHRoLHRoaXMuY2hhcnQuaGVpZ2h0KX0sYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPVtdLGk9W107aWYoci5lYWNoKGUuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihuLG8pe3ZhciByPWUuZ2V0RGF0YXNldE1ldGEobyk7ci50eXBlfHwoci50eXBlPW4udHlwZXx8ZS5jb25maWcudHlwZSksYS5wdXNoKHIudHlwZSksci5jb250cm9sbGVyP3IuY29udHJvbGxlci51cGRhdGVJbmRleChvKTooci5jb250cm9sbGVyPW5ldyB0LmNvbnRyb2xsZXJzW3IudHlwZV0oZSxvKSxpLnB1c2goci5jb250cm9sbGVyKSl9LGUpLGEubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhLmxlbmd0aDtuKyspaWYoYVtuXSE9PWFbbi0xXSl7ZS5pc0NvbWJvPSEwO2JyZWFrfXJldHVybiBpfSxyZXNldEVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyLmVhY2godC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGUsYSl7dC5nZXREYXRhc2V0TWV0YShhKS5jb250cm9sbGVyLnJlc2V0KCl9LHQpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVzZXRFbGVtZW50cygpLHRoaXMudG9vbHRpcC5pbml0aWFsaXplKCl9LHVwZGF0ZTpmdW5jdGlvbihlLGEpe3ZhciBpPXRoaXM7dC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZVVwZGF0ZVwiLFtpXSksaS50b29sdGlwLl9kYXRhPWkuZGF0YTt2YXIgbj1pLmJ1aWxkT3JVcGRhdGVDb250cm9sbGVycygpO3IuZWFjaChpLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24odCxlKXtpLmdldERhdGFzZXRNZXRhKGUpLmNvbnRyb2xsZXIuYnVpbGRPclVwZGF0ZUVsZW1lbnRzKCl9LGkpLHQubGF5b3V0U2VydmljZS51cGRhdGUoaSxpLmNoYXJ0LndpZHRoLGkuY2hhcnQuaGVpZ2h0KSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJTY2FsZVVwZGF0ZVwiLFtpXSksci5lYWNoKG4sZnVuY3Rpb24odCl7dC5yZXNldCgpfSksaS51cGRhdGVEYXRhc2V0cygpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlclVwZGF0ZVwiLFtpXSksaS5fYnVmZmVyZWRSZW5kZXI/aS5fYnVmZmVyZWRSZXF1ZXN0PXtsYXp5OmEsZHVyYXRpb246ZX06aS5yZW5kZXIoZSxhKX0sdXBkYXRlRGF0YXNldHM6ZnVuY3Rpb24oKXt2YXIgZSxhLGk9dGhpcztpZih0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRGF0YXNldHNVcGRhdGVcIixbaV0pKXtmb3IoZT0wLGE9aS5kYXRhLmRhdGFzZXRzLmxlbmd0aDthPmU7KytlKWkuZ2V0RGF0YXNldE1ldGEoZSkuY29udHJvbGxlci51cGRhdGUoKTt0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEYXRhc2V0c1VwZGF0ZVwiLFtpXSl9fSxyZW5kZXI6ZnVuY3Rpb24oZSxhKXt2YXIgaT10aGlzO3QucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVSZW5kZXJcIixbaV0pO3ZhciBuPWkub3B0aW9ucy5hbmltYXRpb247aWYobiYmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiYwIT09ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJjAhPT1uLmR1cmF0aW9uKSl7dmFyIG89bmV3IHQuQW5pbWF0aW9uO28ubnVtU3RlcHM9KGV8fG4uZHVyYXRpb24pLzE2LjY2LG8uZWFzaW5nPW4uZWFzaW5nLG8ucmVuZGVyPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ci5lYXNpbmdFZmZlY3RzW2UuZWFzaW5nXSxpPWUuY3VycmVudFN0ZXAvZS5udW1TdGVwcyxuPWEoaSk7dC5kcmF3KG4saSxlLmN1cnJlbnRTdGVwKX0sby5vbkFuaW1hdGlvblByb2dyZXNzPW4ub25Qcm9ncmVzcyxvLm9uQW5pbWF0aW9uQ29tcGxldGU9bi5vbkNvbXBsZXRlLHQuYW5pbWF0aW9uU2VydmljZS5hZGRBbmltYXRpb24oaSxvLGUsYSl9ZWxzZSBpLmRyYXcoKSxuJiZuLm9uQ29tcGxldGUmJm4ub25Db21wbGV0ZS5jYWxsJiZuLm9uQ29tcGxldGUuY2FsbChpKTtyZXR1cm4gaX0sZHJhdzpmdW5jdGlvbihlKXt2YXIgYT10aGlzLGk9ZXx8MTthLmNsZWFyKCksdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURyYXdcIixbYSxpXSksci5lYWNoKGEuYm94ZXMsZnVuY3Rpb24odCl7dC5kcmF3KGEuY2hhcnRBcmVhKX0sYSksYS5zY2FsZSYmYS5zY2FsZS5kcmF3KCksdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURhdGFzZXRzRHJhd1wiLFthLGldKSxyLmVhY2goYS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKHQsaSl7YS5pc0RhdGFzZXRWaXNpYmxlKGkpJiZhLmdldERhdGFzZXRNZXRhKGkpLmNvbnRyb2xsZXIuZHJhdyhlKX0sYSwhMCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRGF0YXNldHNEcmF3XCIsW2EsaV0pLGEudG9vbHRpcC50cmFuc2l0aW9uKGkpLmRyYXcoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEcmF3XCIsW2EsaV0pfSxnZXRFbGVtZW50QXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5zaW5nbGUodGhpcyxlKX0sZ2V0RWxlbWVudHNBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLmxhYmVsKHRoaXMsZSx7aW50ZXJzZWN0OiEwfSl9LGdldEVsZW1lbnRzQXRYQXhpczpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlc1tcIngtYXhpc1wiXSh0aGlzLGUse2ludGVyc2VjdDohMH0pfSxnZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlOmZ1bmN0aW9uKGUsYSxpKXt2YXIgbj10LkludGVyYWN0aW9uLm1vZGVzW2FdO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0aGlzLGUsaSk6W119LGdldERhdGFzZXRBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLmRhdGFzZXQodGhpcyxlKX0sZ2V0RGF0YXNldE1ldGE6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZGF0YS5kYXRhc2V0c1t0XTthLl9tZXRhfHwoYS5fbWV0YT17fSk7XHJcbnZhciBpPWEuX21ldGFbZS5pZF07cmV0dXJuIGl8fChpPWEuX21ldGFbZS5pZF09e3R5cGU6bnVsbCxkYXRhOltdLGRhdGFzZXQ6bnVsbCxjb250cm9sbGVyOm51bGwsaGlkZGVuOm51bGwseEF4aXNJRDpudWxsLHlBeGlzSUQ6bnVsbH0pLGl9LGdldFZpc2libGVEYXRhc2V0Q291bnQ6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPTAsYT10aGlzLmRhdGEuZGF0YXNldHMubGVuZ3RoO2E+ZTsrK2UpdGhpcy5pc0RhdGFzZXRWaXNpYmxlKGUpJiZ0Kys7cmV0dXJuIHR9LGlzRGF0YXNldFZpc2libGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXREYXRhc2V0TWV0YSh0KTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGUuaGlkZGVuPyFlLmhpZGRlbjohdGhpcy5kYXRhLmRhdGFzZXRzW3RdLmhpZGRlbn0sZ2VuZXJhdGVMZWdlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmxlZ2VuZENhbGxiYWNrKHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGUsYSxuLG89dGhpcyxsPW8uY2hhcnQuY2FudmFzO2ZvcihvLnN0b3AoKSxhPTAsbj1vLmRhdGEuZGF0YXNldHMubGVuZ3RoO24+YTsrK2EpZT1vLmdldERhdGFzZXRNZXRhKGEpLGUuY29udHJvbGxlciYmKGUuY29udHJvbGxlci5kZXN0cm95KCksZS5jb250cm9sbGVyPW51bGwpO2wmJihyLnVuYmluZEV2ZW50cyhvLG8uZXZlbnRzKSxyLnJlbW92ZVJlc2l6ZUxpc3RlbmVyKGwucGFyZW50Tm9kZSksci5jbGVhcihvLmNoYXJ0KSxpKGwpLG8uY2hhcnQuY2FudmFzPW51bGwsby5jaGFydC5jdHg9bnVsbCksdC5wbHVnaW5zLm5vdGlmeShcImRlc3Ryb3lcIixbb10pLGRlbGV0ZSB0Lmluc3RhbmNlc1tvLmlkXX0sdG9CYXNlNjRJbWFnZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmNhbnZhcy50b0RhdGFVUkwuYXBwbHkodGhpcy5jaGFydC5jYW52YXMsYXJndW1lbnRzKX0saW5pdFRvb2xUaXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UudG9vbHRpcD1uZXcgdC5Ub29sdGlwKHtfY2hhcnQ6ZS5jaGFydCxfY2hhcnRJbnN0YW5jZTplLF9kYXRhOmUuZGF0YSxfb3B0aW9uczplLm9wdGlvbnMudG9vbHRpcHN9LGUpLGUudG9vbHRpcC5pbml0aWFsaXplKCl9LGJpbmRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3IuYmluZEV2ZW50cyh0LHQub3B0aW9ucy5ldmVudHMsZnVuY3Rpb24oZSl7dC5ldmVudEhhbmRsZXIoZSl9KX0sdXBkYXRlSG92ZXJTdHlsZTpmdW5jdGlvbih0LGUsYSl7dmFyIGksbixvLHI9YT9cInNldEhvdmVyU3R5bGVcIjpcInJlbW92ZUhvdmVyU3R5bGVcIjtmb3Iobj0wLG89dC5sZW5ndGg7bz5uOysrbilpPXRbbl0saSYmdGhpcy5nZXREYXRhc2V0TWV0YShpLl9kYXRhc2V0SW5kZXgpLmNvbnRyb2xsZXJbcl0oaSl9LGV2ZW50SGFuZGxlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5sZWdlbmQsaT1lLnRvb2x0aXAsbj1lLm9wdGlvbnMuaG92ZXI7ZS5fYnVmZmVyZWRSZW5kZXI9ITAsZS5fYnVmZmVyZWRSZXF1ZXN0PW51bGw7dmFyIG89ZS5oYW5kbGVFdmVudCh0KTtvfD1hJiZhLmhhbmRsZUV2ZW50KHQpLG98PWkmJmkuaGFuZGxlRXZlbnQodCk7dmFyIHI9ZS5fYnVmZmVyZWRSZXF1ZXN0O3JldHVybiByP2UucmVuZGVyKHIuZHVyYXRpb24sci5sYXp5KTpvJiYhZS5hbmltYXRpbmcmJihlLnN0b3AoKSxlLnJlbmRlcihuLmFuaW1hdGlvbkR1cmF0aW9uLCEwKSksZS5fYnVmZmVyZWRSZW5kZXI9ITEsZS5fYnVmZmVyZWRSZXF1ZXN0PW51bGwsZX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUub3B0aW9uc3x8e30saT1hLmhvdmVyLG49ITE7cmV0dXJuIGUubGFzdEFjdGl2ZT1lLmxhc3RBY3RpdmV8fFtdLFwibW91c2VvdXRcIj09PXQudHlwZT9lLmFjdGl2ZT1bXTplLmFjdGl2ZT1lLmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUodCxpLm1vZGUsaSksaS5vbkhvdmVyJiZpLm9uSG92ZXIuY2FsbChlLGUuYWN0aXZlKSwoXCJtb3VzZXVwXCI9PT10LnR5cGV8fFwiY2xpY2tcIj09PXQudHlwZSkmJmEub25DbGljayYmYS5vbkNsaWNrLmNhbGwoZSx0LGUuYWN0aXZlKSxlLmxhc3RBY3RpdmUubGVuZ3RoJiZlLnVwZGF0ZUhvdmVyU3R5bGUoZS5sYXN0QWN0aXZlLGkubW9kZSwhMSksZS5hY3RpdmUubGVuZ3RoJiZpLm1vZGUmJmUudXBkYXRlSG92ZXJTdHlsZShlLmFjdGl2ZSxpLm1vZGUsITApLG49IXIuYXJyYXlFcXVhbHMoZS5hY3RpdmUsZS5sYXN0QWN0aXZlKSxlLmxhc3RBY3RpdmU9ZS5hY3RpdmUsbn19KX19LHt9XSwyNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHQuX2NoYXJ0anM/dm9pZCB0Ll9jaGFydGpzLmxpc3RlbmVycy5wdXNoKGUpOihPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9jaGFydGpzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOntsaXN0ZW5lcnM6W2VdfX0pLHZvaWQgbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPVwib25EYXRhXCIrZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49dFtlXTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksbz1uLmFwcGx5KHRoaXMsZSk7cmV0dXJuIGkuZWFjaCh0Ll9jaGFydGpzLmxpc3RlbmVycyxmdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0W2FdJiZ0W2FdLmFwcGx5KHQsZSl9KSxvfX0pfSkpfWZ1bmN0aW9uIGEodCxlKXt2YXIgYT10Ll9jaGFydGpzO2lmKGEpe3ZhciBpPWEubGlzdGVuZXJzLG89aS5pbmRleE9mKGUpOy0xIT09byYmaS5zcGxpY2UobywxKSxpLmxlbmd0aD4wfHwobi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RlbGV0ZSB0W2VdfSksZGVsZXRlIHQuX2NoYXJ0anMpfX12YXIgaT10LmhlbHBlcnMsbj1bXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJzcGxpY2VcIixcInVuc2hpZnRcIl07dC5EYXRhc2V0Q29udHJvbGxlcj1mdW5jdGlvbih0LGUpe3RoaXMuaW5pdGlhbGl6ZSh0LGUpfSxpLmV4dGVuZCh0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZSx7ZGF0YXNldEVsZW1lbnRUeXBlOm51bGwsZGF0YUVsZW1lbnRUeXBlOm51bGwsaW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7YS5jaGFydD10LGEuaW5kZXg9ZSxhLmxpbmtTY2FsZXMoKSxhLmFkZEVsZW1lbnRzKCl9LHVwZGF0ZUluZGV4OmZ1bmN0aW9uKHQpe3RoaXMuaW5kZXg9dH0sbGlua1NjYWxlczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldE1ldGEoKSxhPXQuZ2V0RGF0YXNldCgpO251bGw9PT1lLnhBeGlzSUQmJihlLnhBeGlzSUQ9YS54QXhpc0lEfHx0LmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLmlkKSxudWxsPT09ZS55QXhpc0lEJiYoZS55QXhpc0lEPWEueUF4aXNJRHx8dC5jaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5pZCl9LGdldERhdGFzZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3RoaXMuaW5kZXhdfSxnZXRNZXRhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEodGhpcy5pbmRleCl9LGdldFNjYWxlRm9ySWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2hhcnQuc2NhbGVzW3RdfSxyZXNldDpmdW5jdGlvbigpe3RoaXMudXBkYXRlKCEwKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX2RhdGEmJmEodGhpcy5fZGF0YSx0aGlzKX0sY3JlYXRlTWV0YURhdGFzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5kYXRhc2V0RWxlbWVudFR5cGU7cmV0dXJuIGUmJm5ldyBlKHtfY2hhcnQ6dC5jaGFydC5jaGFydCxfZGF0YXNldEluZGV4OnQuaW5kZXh9KX0sY3JlYXRlTWV0YURhdGE6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZGF0YUVsZW1lbnRUeXBlO3JldHVybiBhJiZuZXcgYSh7X2NoYXJ0OmUuY2hhcnQuY2hhcnQsX2RhdGFzZXRJbmRleDplLmluZGV4LF9pbmRleDp0fSl9LGFkZEVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQsZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0RGF0YXNldCgpLmRhdGF8fFtdLG89aS5kYXRhO2Zvcih0PTAsZT1uLmxlbmd0aDtlPnQ7Kyt0KW9bdF09b1t0XXx8YS5jcmVhdGVNZXRhRGF0YSh0KTtpLmRhdGFzZXQ9aS5kYXRhc2V0fHxhLmNyZWF0ZU1ldGFEYXRhc2V0KCl9LGFkZEVsZW1lbnRBbmRSZXNldDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNyZWF0ZU1ldGFEYXRhKHQpO3RoaXMuZ2V0TWV0YSgpLmRhdGEuc3BsaWNlKHQsMCxlKSx0aGlzLnVwZGF0ZUVsZW1lbnQoZSx0LCEwKX0sYnVpbGRPclVwZGF0ZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQuZ2V0RGF0YXNldCgpLG49aS5kYXRhfHwoaS5kYXRhPVtdKTt0Ll9kYXRhIT09biYmKHQuX2RhdGEmJmEodC5fZGF0YSx0KSxlKG4sdCksdC5fZGF0YT1uKSx0LnJlc3luY0VsZW1lbnRzKCl9LHVwZGF0ZTppLm5vb3AsZHJhdzpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dHx8MSxuPXRoaXMuZ2V0TWV0YSgpLmRhdGE7Zm9yKGU9MCxhPW4ubGVuZ3RoO2E+ZTsrK2UpbltlXS50cmFuc2l0aW9uKGkpLmRyYXcoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLG49dC5faW5kZXgsbz10LmN1c3RvbXx8e30scj1pLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxsPXQuX21vZGVsO2wuYmFja2dyb3VuZENvbG9yPW8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOnIoYS5iYWNrZ3JvdW5kQ29sb3IsbixlLmJhY2tncm91bmRDb2xvciksbC5ib3JkZXJDb2xvcj1vLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6cihhLmJvcmRlckNvbG9yLG4sZS5ib3JkZXJDb2xvciksbC5ib3JkZXJXaWR0aD1vLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6cihhLmJvcmRlcldpZHRoLG4sZS5ib3JkZXJXaWR0aCl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sYT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPWkuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHI9aS5nZXRIb3ZlckNvbG9yLGw9dC5fbW9kZWw7bC5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcj9uLmhvdmVyQmFja2dyb3VuZENvbG9yOm8oZS5ob3ZlckJhY2tncm91bmRDb2xvcixhLHIobC5iYWNrZ3JvdW5kQ29sb3IpKSxsLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcj9uLmhvdmVyQm9yZGVyQ29sb3I6byhlLmhvdmVyQm9yZGVyQ29sb3IsYSxyKGwuYm9yZGVyQ29sb3IpKSxsLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aD9uLmhvdmVyQm9yZGVyV2lkdGg6byhlLmhvdmVyQm9yZGVyV2lkdGgsYSxsLmJvcmRlcldpZHRoKX0scmVzeW5jRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRNZXRhKCksYT10LmdldERhdGFzZXQoKS5kYXRhLGk9ZS5kYXRhLmxlbmd0aCxuPWEubGVuZ3RoO2k+bj9lLmRhdGEuc3BsaWNlKG4saS1uKTpuPmkmJnQuaW5zZXJ0RWxlbWVudHMoaSxuLWkpfSxpbnNlcnRFbGVtZW50czpmdW5jdGlvbih0LGUpe2Zvcih2YXIgYT0wO2U+YTsrK2EpdGhpcy5hZGRFbGVtZW50QW5kUmVzZXQodCthKX0sb25EYXRhUHVzaDpmdW5jdGlvbigpe3RoaXMuaW5zZXJ0RWxlbWVudHModGhpcy5nZXREYXRhc2V0KCkuZGF0YS5sZW5ndGgtMSxhcmd1bWVudHMubGVuZ3RoKX0sb25EYXRhUG9wOmZ1bmN0aW9uKCl7dGhpcy5nZXRNZXRhKCkuZGF0YS5wb3AoKX0sb25EYXRhU2hpZnQ6ZnVuY3Rpb24oKXt0aGlzLmdldE1ldGEoKS5kYXRhLnNoaWZ0KCl9LG9uRGF0YVNwbGljZTpmdW5jdGlvbih0LGUpe3RoaXMuZ2V0TWV0YSgpLmRhdGEuc3BsaWNlKHQsZSksdGhpcy5pbnNlcnRFbGVtZW50cyh0LGFyZ3VtZW50cy5sZW5ndGgtMil9LG9uRGF0YVVuc2hpZnQ6ZnVuY3Rpb24oKXt0aGlzLmluc2VydEVsZW1lbnRzKDAsYXJndW1lbnRzLmxlbmd0aCl9fSksdC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQ9aS5pbmhlcml0c319LHt9XSwyNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5lbGVtZW50cz17fSx0LkVsZW1lbnQ9ZnVuY3Rpb24odCl7ZS5leHRlbmQodGhpcyx0KSx0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmV4dGVuZCh0LkVsZW1lbnQucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5oaWRkZW49ITF9LHBpdm90OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdC5fdmlld3x8KHQuX3ZpZXc9ZS5jbG9uZSh0Ll9tb2RlbCkpLHQuX3N0YXJ0PWUuY2xvbmUodC5fdmlldyksdH0sdHJhbnNpdGlvbjpmdW5jdGlvbih0KXt2YXIgYT10aGlzO3JldHVybiBhLl92aWV3fHwoYS5fdmlldz1lLmNsb25lKGEuX21vZGVsKSksMT09PXQ/KGEuX3ZpZXc9YS5fbW9kZWwsYS5fc3RhcnQ9bnVsbCxhKTooYS5fc3RhcnR8fGEucGl2b3QoKSxlLmVhY2goYS5fbW9kZWwsZnVuY3Rpb24oaSxuKXtpZihcIl9cIj09PW5bMF0pO2Vsc2UgaWYoYS5fdmlldy5oYXNPd25Qcm9wZXJ0eShuKSlpZihpPT09YS5fdmlld1tuXSk7ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgaSl0cnl7dmFyIG89ZS5jb2xvcihhLl9tb2RlbFtuXSkubWl4KGUuY29sb3IoYS5fc3RhcnRbbl0pLHQpO2EuX3ZpZXdbbl09by5yZ2JTdHJpbmcoKX1jYXRjaChyKXthLl92aWV3W25dPWl9ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgaSl7dmFyIGw9dm9pZCAwIT09YS5fc3RhcnRbbl0mJmlzTmFOKGEuX3N0YXJ0W25dKT09PSExP2EuX3N0YXJ0W25dOjA7YS5fdmlld1tuXT0oYS5fbW9kZWxbbl0tbCkqdCtsfWVsc2UgYS5fdmlld1tuXT1pO2Vsc2VcIm51bWJlclwiIT10eXBlb2YgaXx8aXNOYU4oYS5fdmlld1tuXSk/YS5fdmlld1tuXT1pOmEuX3ZpZXdbbl09aSp0fSxhKSxhKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJue3g6dGhpcy5fbW9kZWwueCx5OnRoaXMuX21vZGVsLnl9fSxoYXNWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBlLmlzTnVtYmVyKHRoaXMuX21vZGVsLngpJiZlLmlzTnVtYmVyKHRoaXMuX21vZGVsLnkpfX0pLHQuRWxlbWVudC5leHRlbmQ9ZS5pbmhlcml0c319LHt9XSwyNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoMyk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlLGEpe3ZhciBpO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0PyhpPXBhcnNlSW50KHQsMTApLC0xIT09dC5pbmRleE9mKFwiJVwiKSYmKGk9aS8xMDAqZS5wYXJlbnROb2RlW2FdKSk6aT10LGl9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdm9pZCAwIT09dCYmbnVsbCE9PXQmJlwibm9uZVwiIT09dH1mdW5jdGlvbiBuKHQsaSxuKXt2YXIgbz1kb2N1bWVudC5kZWZhdWx0VmlldyxyPXQucGFyZW50Tm9kZSxsPW8uZ2V0Q29tcHV0ZWRTdHlsZSh0KVtpXSxzPW8uZ2V0Q29tcHV0ZWRTdHlsZShyKVtpXSxkPWEobCksdT1hKHMpLGM9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO3JldHVybiBkfHx1P01hdGgubWluKGQ/ZShsLHQsbik6Yyx1P2UocyxyLG4pOmMpOlwibm9uZVwifXZhciBvPXQuaGVscGVycz17fTtvLmVhY2g9ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG4scjtpZihvLmlzQXJyYXkodCkpaWYocj10Lmxlbmd0aCxpKWZvcihuPXItMTtuPj0wO24tLSllLmNhbGwoYSx0W25dLG4pO2Vsc2UgZm9yKG49MDtyPm47bisrKWUuY2FsbChhLHRbbl0sbik7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGw9T2JqZWN0LmtleXModCk7Zm9yKHI9bC5sZW5ndGgsbj0wO3I+bjtuKyspZS5jYWxsKGEsdFtsW25dXSxsW25dKX19LG8uY2xvbmU9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQsYSl7by5pc0FycmF5KHQpP2VbYV09dC5zbGljZSgwKTpcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9PXQ/ZVthXT1vLmNsb25lKHQpOmVbYV09dH0pLGV9LG8uZXh0ZW5kPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1mdW5jdGlvbihlLGEpe3RbYV09ZX0sYT0xLGk9YXJndW1lbnRzLmxlbmd0aDtpPmE7YSsrKW8uZWFjaChhcmd1bWVudHNbYV0sZSk7cmV0dXJuIHR9LG8uY29uZmlnTWVyZ2U9ZnVuY3Rpb24oZSl7dmFyIGE9by5jbG9uZShlKTtyZXR1cm4gby5lYWNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxmdW5jdGlvbihlKXtvLmVhY2goZSxmdW5jdGlvbihlLGkpe3ZhciBuPWEuaGFzT3duUHJvcGVydHkoaSkscj1uP2FbaV06e307XCJzY2FsZXNcIj09PWk/YVtpXT1vLnNjYWxlTWVyZ2UocixlKTpcInNjYWxlXCI9PT1pP2FbaV09by5jb25maWdNZXJnZShyLHQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMoZS50eXBlKSxlKTohbnx8XCJvYmplY3RcIiE9dHlwZW9mIHJ8fG8uaXNBcnJheShyKXx8bnVsbD09PXJ8fFwib2JqZWN0XCIhPXR5cGVvZiBlfHxvLmlzQXJyYXkoZSk/YVtpXT1lOmFbaV09by5jb25maWdNZXJnZShyLGUpfSl9KSxhfSxvLnNjYWxlTWVyZ2U9ZnVuY3Rpb24oZSxhKXt2YXIgaT1vLmNsb25lKGUpO3JldHVybiBvLmVhY2goYSxmdW5jdGlvbihlLGEpe1wieEF4ZXNcIj09PWF8fFwieUF4ZXNcIj09PWE/aS5oYXNPd25Qcm9wZXJ0eShhKT9vLmVhY2goZSxmdW5jdGlvbihlLG4pe3ZhciByPW8uZ2V0VmFsdWVPckRlZmF1bHQoZS50eXBlLFwieEF4ZXNcIj09PWE/XCJjYXRlZ29yeVwiOlwibGluZWFyXCIpLGw9dC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhyKTtuPj1pW2FdLmxlbmd0aHx8IWlbYV1bbl0udHlwZT9pW2FdLnB1c2goby5jb25maWdNZXJnZShsLGUpKTplLnR5cGUmJmUudHlwZSE9PWlbYV1bbl0udHlwZT9pW2FdW25dPW8uY29uZmlnTWVyZ2UoaVthXVtuXSxsLGUpOmlbYV1bbl09by5jb25maWdNZXJnZShpW2FdW25dLGUpfSk6KGlbYV09W10sby5lYWNoKGUsZnVuY3Rpb24oZSl7dmFyIG49by5nZXRWYWx1ZU9yRGVmYXVsdChlLnR5cGUsXCJ4QXhlc1wiPT09YT9cImNhdGVnb3J5XCI6XCJsaW5lYXJcIik7aVthXS5wdXNoKG8uY29uZmlnTWVyZ2UodC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhuKSxlKSl9KSk6aS5oYXNPd25Qcm9wZXJ0eShhKSYmXCJvYmplY3RcIj09dHlwZW9mIGlbYV0mJm51bGwhPT1pW2FdJiZcIm9iamVjdFwiPT10eXBlb2YgZT9pW2FdPW8uY29uZmlnTWVyZ2UoaVthXSxlKTppW2FdPWV9KSxpfSxvLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdD1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIHZvaWQgMD09PXR8fG51bGw9PT10P2E6by5pc0FycmF5KHQpP2U8dC5sZW5ndGg/dFtlXTphOnR9LG8uZ2V0VmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09dD9lOnR9LG8uaW5kZXhPZj1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbih0LGUpe3JldHVybiB0LmluZGV4T2YoZSl9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBhPTAsaT10Lmxlbmd0aDtpPmE7KythKWlmKHRbYV09PT1lKXJldHVybiBhO3JldHVybi0xfSxvLndoZXJlPWZ1bmN0aW9uKHQsZSl7aWYoby5pc0FycmF5KHQpJiZBcnJheS5wcm90b3R5cGUuZmlsdGVyKXJldHVybiB0LmZpbHRlcihlKTt2YXIgYT1bXTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCl7ZSh0KSYmYS5wdXNoKHQpfSksYX0sby5maW5kSW5kZXg9QXJyYXkucHJvdG90eXBlLmZpbmRJbmRleD9mdW5jdGlvbih0LGUsYSl7cmV0dXJuIHQuZmluZEluZGV4KGUsYSl9OmZ1bmN0aW9uKHQsZSxhKXthPXZvaWQgMD09PWE/dDphO2Zvcih2YXIgaT0wLG49dC5sZW5ndGg7bj5pOysraSlpZihlLmNhbGwoYSx0W2ldLGksdCkpcmV0dXJuIGk7cmV0dXJuLTF9LG8uZmluZE5leHRXaGVyZT1mdW5jdGlvbih0LGUsYSl7KHZvaWQgMD09PWF8fG51bGw9PT1hKSYmKGE9LTEpO2Zvcih2YXIgaT1hKzE7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07aWYoZShuKSlyZXR1cm4gbn19LG8uZmluZFByZXZpb3VzV2hlcmU9ZnVuY3Rpb24odCxlLGEpeyh2b2lkIDA9PT1hfHxudWxsPT09YSkmJihhPXQubGVuZ3RoKTtmb3IodmFyIGk9YS0xO2k+PTA7aS0tKXt2YXIgbj10W2ldO2lmKGUobikpcmV0dXJuIG59fSxvLmluaGVyaXRzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT10JiZ0Lmhhc093blByb3BlcnR5KFwiY29uc3RydWN0b3JcIik/dC5jb25zdHJ1Y3RvcjpmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0saT1mdW5jdGlvbigpe3RoaXMuY29uc3RydWN0b3I9YX07cmV0dXJuIGkucHJvdG90eXBlPWUucHJvdG90eXBlLGEucHJvdG90eXBlPW5ldyBpLGEuZXh0ZW5kPW8uaW5oZXJpdHMsdCYmby5leHRlbmQoYS5wcm90b3R5cGUsdCksYS5fX3N1cGVyX189ZS5wcm90b3R5cGUsYX0sby5ub29wPWZ1bmN0aW9uKCl7fSxvLnVpZD1mdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQrK319KCksby5pc051bWJlcj1mdW5jdGlvbih0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfSxvLmFsbW9zdEVxdWFscz1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIE1hdGguYWJzKHQtZSk8YX0sby5tYXg9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGlzTmFOKGUpP3Q6TWF0aC5tYXgodCxlKX0sTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZKX0sby5taW49ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGlzTmFOKGUpP3Q6TWF0aC5taW4odCxlKX0sTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKX0sby5zaWduPU1hdGguc2lnbj9mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zaWduKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCwwPT09dHx8aXNOYU4odCk/dDp0PjA/MTotMX0sby5sb2cxMD1NYXRoLmxvZzEwP2Z1bmN0aW9uKHQpe3JldHVybiBNYXRoLmxvZzEwKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5sb2codCkvTWF0aC5MTjEwfSxvLnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCooTWF0aC5QSS8xODApfSxvLnRvRGVncmVlcz1mdW5jdGlvbih0KXtyZXR1cm4gdCooMTgwL01hdGguUEkpfSxvLmdldEFuZ2xlRnJvbVBvaW50PWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS54LXQueCxpPWUueS10Lnksbj1NYXRoLnNxcnQoYSphK2kqaSksbz1NYXRoLmF0YW4yKGksYSk7cmV0dXJuIG88LS41Kk1hdGguUEkmJihvKz0yKk1hdGguUEkpLHthbmdsZTpvLGRpc3RhbmNlOm59fSxvLmRpc3RhbmNlQmV0d2VlblBvaW50cz1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZS54LXQueCwyKStNYXRoLnBvdyhlLnktdC55LDIpKX0sby5hbGlhc1BpeGVsPWZ1bmN0aW9uKHQpe3JldHVybiB0JTI9PT0wPzA6LjV9LG8uc3BsaW5lQ3VydmU9ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dC5za2lwP2U6dCxvPWUscj1hLnNraXA/ZTphLGw9TWF0aC5zcXJ0KE1hdGgucG93KG8ueC1uLngsMikrTWF0aC5wb3coby55LW4ueSwyKSkscz1NYXRoLnNxcnQoTWF0aC5wb3coci54LW8ueCwyKStNYXRoLnBvdyhyLnktby55LDIpKSxkPWwvKGwrcyksdT1zLyhsK3MpO2Q9aXNOYU4oZCk/MDpkLHU9aXNOYU4odSk/MDp1O3ZhciBjPWkqZCxoPWkqdTtyZXR1cm57cHJldmlvdXM6e3g6by54LWMqKHIueC1uLngpLHk6by55LWMqKHIueS1uLnkpfSxuZXh0Ont4Om8ueCtoKihyLngtbi54KSx5Om8ueStoKihyLnktbi55KX19fSxvLkVQU0lMT049TnVtYmVyLkVQU0lMT058fDFlLTE0LG8uc3BsaW5lQ3VydmVNb25vdG9uZT1mdW5jdGlvbih0KXt2YXIgZSxhLGksbixyPSh0fHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybnttb2RlbDp0Ll9tb2RlbCxkZWx0YUs6MCxtSzowfX0pLGw9ci5sZW5ndGg7Zm9yKGU9MDtsPmU7KytlKWk9cltlXSxpLm1vZGVsLnNraXB8fChhPWU+MD9yW2UtMV06bnVsbCxuPWwtMT5lP3JbZSsxXTpudWxsLG4mJiFuLm1vZGVsLnNraXAmJihpLmRlbHRhSz0obi5tb2RlbC55LWkubW9kZWwueSkvKG4ubW9kZWwueC1pLm1vZGVsLngpKSwhYXx8YS5tb2RlbC5za2lwP2kubUs9aS5kZWx0YUs6IW58fG4ubW9kZWwuc2tpcD9pLm1LPWEuZGVsdGFLOnRoaXMuc2lnbihhLmRlbHRhSykhPT10aGlzLnNpZ24oaS5kZWx0YUspP2kubUs9MDppLm1LPShhLmRlbHRhSytpLmRlbHRhSykvMik7dmFyIHMsZCx1LGM7Zm9yKGU9MDtsLTE+ZTsrK2UpaT1yW2VdLG49cltlKzFdLGkubW9kZWwuc2tpcHx8bi5tb2RlbC5za2lwfHwoby5hbG1vc3RFcXVhbHMoaS5kZWx0YUssMCx0aGlzLkVQU0lMT04pP2kubUs9bi5tSz0wOihzPWkubUsvaS5kZWx0YUssZD1uLm1LL2kuZGVsdGFLLGM9TWF0aC5wb3cocywyKStNYXRoLnBvdyhkLDIpLDk+PWN8fCh1PTMvTWF0aC5zcXJ0KGMpLGkubUs9cyp1KmkuZGVsdGFLLG4ubUs9ZCp1KmkuZGVsdGFLKSkpO3ZhciBoO2ZvcihlPTA7bD5lOysrZSlpPXJbZV0saS5tb2RlbC5za2lwfHwoYT1lPjA/cltlLTFdOm51bGwsbj1sLTE+ZT9yW2UrMV06bnVsbCxhJiYhYS5tb2RlbC5za2lwJiYoaD0oaS5tb2RlbC54LWEubW9kZWwueCkvMyxpLm1vZGVsLmNvbnRyb2xQb2ludFByZXZpb3VzWD1pLm1vZGVsLngtaCxpLm1vZGVsLmNvbnRyb2xQb2ludFByZXZpb3VzWT1pLm1vZGVsLnktaCppLm1LKSxuJiYhbi5tb2RlbC5za2lwJiYoaD0obi5tb2RlbC54LWkubW9kZWwueCkvMyxpLm1vZGVsLmNvbnRyb2xQb2ludE5leHRYPWkubW9kZWwueCtoLGkubW9kZWwuY29udHJvbFBvaW50TmV4dFk9aS5tb2RlbC55K2gqaS5tSykpfSxvLm5leHRJdGVtPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gYT9lPj10Lmxlbmd0aC0xP3RbMF06dFtlKzFdOmU+PXQubGVuZ3RoLTE/dFt0Lmxlbmd0aC0xXTp0W2UrMV19LG8ucHJldmlvdXNJdGVtPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gYT8wPj1lP3RbdC5sZW5ndGgtMV06dFtlLTFdOjA+PWU/dFswXTp0W2UtMV19LG8ubmljZU51bT1mdW5jdGlvbih0LGUpe3ZhciBhLGk9TWF0aC5mbG9vcihvLmxvZzEwKHQpKSxuPXQvTWF0aC5wb3coMTAsaSk7cmV0dXJuIGE9ZT8xLjU+bj8xOjM+bj8yOjc+bj81OjEwOjE+PW4/MToyPj1uPzI6NT49bj81OjEwLGEqTWF0aC5wb3coMTAsaSl9O3ZhciByPW8uZWFzaW5nRWZmZWN0cz17bGluZWFyOmZ1bmN0aW9uKHQpe3JldHVybiB0fSxlYXNlSW5RdWFkOmZ1bmN0aW9uKHQpe3JldHVybiB0KnR9LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKHQpe3JldHVybi0xKnQqKHQtMil9LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdDotMC41KigtLXQqKHQtMiktMSl9LGVhc2VJbkN1YmljOmZ1bmN0aW9uKHQpe3JldHVybiB0KnQqdH0sZWFzZU91dEN1YmljOmZ1bmN0aW9uKHQpe3JldHVybiAxKigodD10LzEtMSkqdCp0KzEpfSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQ6LjUqKCh0LT0yKSp0KnQrMil9LGVhc2VJblF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybiB0KnQqdCp0fSxlYXNlT3V0UXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuLTEqKCh0PXQvMS0xKSp0KnQqdC0xKX0sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0KnQ6LTAuNSooKHQtPTIpKnQqdCp0LTIpfSxlYXNlSW5RdWludDpmdW5jdGlvbih0KXtyZXR1cm4gMSoodC89MSkqdCp0KnQqdH0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKHQpe3JldHVybiAxKigodD10LzEtMSkqdCp0KnQqdCsxKX0sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0KnQqdDouNSooKHQtPTIpKnQqdCp0KnQrMil9LGVhc2VJblNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuLTEqTWF0aC5jb3ModC8xKihNYXRoLlBJLzIpKSsxfSxlYXNlT3V0U2luZTpmdW5jdGlvbih0KXtyZXR1cm4gMSpNYXRoLnNpbih0LzEqKE1hdGguUEkvMikpfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKHQpe3JldHVybi0wLjUqKE1hdGguY29zKE1hdGguUEkqdC8xKS0xKX0sZWFzZUluRXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMD09PXQ/MToxKk1hdGgucG93KDIsMTAqKHQvMS0xKSl9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAxPT09dD8xOjEqKC1NYXRoLnBvdygyLC0xMCp0LzEpKzEpfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAwPT09dD8wOjE9PT10PzE6KHQvPS41KTwxPy41Kk1hdGgucG93KDIsMTAqKHQtMSkpOi41KigtTWF0aC5wb3coMiwtMTAqLS10KSsyKX0sZWFzZUluQ2lyYzpmdW5jdGlvbih0KXtyZXR1cm4gdD49MT90Oi0xKihNYXRoLnNxcnQoMS0odC89MSkqdCktMSl9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKHQpe3JldHVybiAxKk1hdGguc3FydCgxLSh0PXQvMS0xKSp0KX0sZWFzZUluT3V0Q2lyYzpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LTAuNSooTWF0aC5zcXJ0KDEtdCp0KS0xKTouNSooTWF0aC5zcXJ0KDEtKHQtPTIpKnQpKzEpfSxlYXNlSW5FbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoxPT09KHQvPTEpPzE6KGF8fChhPS4zKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSwtKGkqTWF0aC5wb3coMiwxMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkpKX0sZWFzZU91dEVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjE9PT0odC89MSk/MTooYXx8KGE9LjMpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLGkqTWF0aC5wb3coMiwtMTAqdCkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSsxKX0sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6Mj09PSh0Lz0uNSk/MTooYXx8KGE9MSooLjMqMS41KSksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksMT50Py0uNSooaSpNYXRoLnBvdygyLDEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSk6aSpNYXRoLnBvdygyLC0xMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkqLjUrMSl9LGVhc2VJbkJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4gMSoodC89MSkqdCooKGUrMSkqdC1lKX0sZWFzZU91dEJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqKChlKzEpKnQrZSkrMSl9LGVhc2VJbk91dEJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4odC89LjUpPDE/LjUqKHQqdCooKChlKj0xLjUyNSkrMSkqdC1lKSk6LjUqKCh0LT0yKSp0KigoKGUqPTEuNTI1KSsxKSp0K2UpKzIpfSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuIDEtci5lYXNlT3V0Qm91bmNlKDEtdCl9LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPTEpPDEvMi43NT8xKig3LjU2MjUqdCp0KToyLzIuNzU+dD8xKig3LjU2MjUqKHQtPTEuNS8yLjc1KSp0Ky43NSk6Mi41LzIuNzU+dD8xKig3LjU2MjUqKHQtPTIuMjUvMi43NSkqdCsuOTM3NSk6MSooNy41NjI1Kih0LT0yLjYyNS8yLjc1KSp0Ky45ODQzNzUpfSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuLjU+dD8uNSpyLmVhc2VJbkJvdW5jZSgyKnQpOi41KnIuZWFzZU91dEJvdW5jZSgyKnQtMSkrLjV9fTtvLnJlcXVlc3RBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KHQsMWUzLzYwKX19KCksby5jYW5jZWxBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe3JldHVybiB3aW5kb3cuY2xlYXJUaW1lb3V0KHQsMWUzLzYwKX19KCksby5nZXRSZWxhdGl2ZVBvc2l0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuPXQub3JpZ2luYWxFdmVudHx8dCxyPXQuY3VycmVudFRhcmdldHx8dC5zcmNFbGVtZW50LGw9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPW4udG91Y2hlcztzJiZzLmxlbmd0aD4wPyhhPXNbMF0uY2xpZW50WCxpPXNbMF0uY2xpZW50WSk6KGE9bi5jbGllbnRYLGk9bi5jbGllbnRZKTt2YXIgZD1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctbGVmdFwiKSksdT1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctdG9wXCIpKSxjPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1yaWdodFwiKSksaD1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctYm90dG9tXCIpKSxmPWwucmlnaHQtbC5sZWZ0LWQtYyxnPWwuYm90dG9tLWwudG9wLXUtaDtyZXR1cm4gYT1NYXRoLnJvdW5kKChhLWwubGVmdC1kKS9mKnIud2lkdGgvZS5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbyksaT1NYXRoLnJvdW5kKChpLWwudG9wLXUpL2cqci5oZWlnaHQvZS5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbykse3g6YSx5Oml9fSxvLmFkZEV2ZW50PWZ1bmN0aW9uKHQsZSxhKXt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGUsYSk6dC5hdHRhY2hFdmVudD90LmF0dGFjaEV2ZW50KFwib25cIitlLGEpOnRbXCJvblwiK2VdPWF9LG8ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24odCxlLGEpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcj90LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxhLCExKTp0LmRldGFjaEV2ZW50P3QuZGV0YWNoRXZlbnQoXCJvblwiK2UsYSk6dFtcIm9uXCIrZV09by5ub29wfSxvLmJpbmRFdmVudHM9ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQuZXZlbnRzPXQuZXZlbnRzfHx7fTtvLmVhY2goZSxmdW5jdGlvbihlKXtpW2VdPWZ1bmN0aW9uKCl7YS5hcHBseSh0LGFyZ3VtZW50cyl9LG8uYWRkRXZlbnQodC5jaGFydC5jYW52YXMsZSxpW2VdKX0pfSxvLnVuYmluZEV2ZW50cz1mdW5jdGlvbih0LGUpe3ZhciBhPXQuY2hhcnQuY2FudmFzO28uZWFjaChlLGZ1bmN0aW9uKHQsZSl7by5yZW1vdmVFdmVudChhLGUsdCl9KX0sby5nZXRDb25zdHJhaW50V2lkdGg9ZnVuY3Rpb24odCl7cmV0dXJuIG4odCxcIm1heC13aWR0aFwiLFwiY2xpZW50V2lkdGhcIil9LG8uZ2V0Q29uc3RyYWludEhlaWdodD1mdW5jdGlvbih0KXtyZXR1cm4gbih0LFwibWF4LWhlaWdodFwiLFwiY2xpZW50SGVpZ2h0XCIpfSxvLmdldE1heGltdW1XaWR0aD1mdW5jdGlvbih0KXt2YXIgZT10LnBhcmVudE5vZGUsYT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLWxlZnRcIiksMTApLGk9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1yaWdodFwiKSwxMCksbj1lLmNsaWVudFdpZHRoLWEtaSxyPW8uZ2V0Q29uc3RyYWludFdpZHRoKHQpO3JldHVybiBpc05hTihyKT9uOk1hdGgubWluKG4scil9LG8uZ2V0TWF4aW11bUhlaWdodD1mdW5jdGlvbih0KXt2YXIgZT10LnBhcmVudE5vZGUsYT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLXRvcFwiKSwxMCksaT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCksbj1lLmNsaWVudEhlaWdodC1hLWkscj1vLmdldENvbnN0cmFpbnRIZWlnaHQodCk7cmV0dXJuIGlzTmFOKHIpP246TWF0aC5taW4obixyKX0sby5nZXRTdHlsZT1mdW5jdGlvbih0LGUpe3JldHVybiB0LmN1cnJlbnRTdHlsZT90LmN1cnJlbnRTdHlsZVtlXTpkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKX0sby5yZXRpbmFTY2FsZT1mdW5jdGlvbih0KXt2YXIgZT10LmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxO2lmKDEhPT1lKXt2YXIgYT10LmNhbnZhcyxpPXQuaGVpZ2h0LG49dC53aWR0aDthLmhlaWdodD1pKmUsYS53aWR0aD1uKmUsdC5jdHguc2NhbGUoZSxlKSxhLnN0eWxlLmhlaWdodD1pK1wicHhcIixhLnN0eWxlLndpZHRoPW4rXCJweFwifX0sby5jbGVhcj1mdW5jdGlvbih0KXt0LmN0eC5jbGVhclJlY3QoMCwwLHQud2lkdGgsdC5oZWlnaHQpfSxvLmZvbnRTdHJpbmc9ZnVuY3Rpb24odCxlLGEpe3JldHVybiBlK1wiIFwiK3QrXCJweCBcIithfSxvLmxvbmdlc3RUZXh0PWZ1bmN0aW9uKHQsZSxhLGkpe2k9aXx8e307dmFyIG49aS5kYXRhPWkuZGF0YXx8e30scj1pLmdhcmJhZ2VDb2xsZWN0PWkuZ2FyYmFnZUNvbGxlY3R8fFtdO2kuZm9udCE9PWUmJihuPWkuZGF0YT17fSxyPWkuZ2FyYmFnZUNvbGxlY3Q9W10saS5mb250PWUpLHQuZm9udD1lO3ZhciBsPTA7by5lYWNoKGEsZnVuY3Rpb24oZSl7dm9pZCAwIT09ZSYmbnVsbCE9PWUmJm8uaXNBcnJheShlKSE9PSEwP2w9by5tZWFzdXJlVGV4dCh0LG4scixsLGUpOm8uaXNBcnJheShlKSYmby5lYWNoKGUsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZXx8bnVsbD09PWV8fG8uaXNBcnJheShlKXx8KGw9by5tZWFzdXJlVGV4dCh0LG4scixsLGUpKX0pfSk7dmFyIHM9ci5sZW5ndGgvMjtpZihzPmEubGVuZ3RoKXtmb3IodmFyIGQ9MDtzPmQ7ZCsrKWRlbGV0ZSBuW3JbZF1dO3Iuc3BsaWNlKDAscyl9cmV0dXJuIGx9LG8ubWVhc3VyZVRleHQ9ZnVuY3Rpb24odCxlLGEsaSxuKXt2YXIgbz1lW25dO3JldHVybiBvfHwobz1lW25dPXQubWVhc3VyZVRleHQobikud2lkdGgsYS5wdXNoKG4pKSxvPmkmJihpPW8pLGl9LG8ubnVtYmVyT2ZMYWJlbExpbmVzPWZ1bmN0aW9uKHQpe3ZhciBlPTE7cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQpe28uaXNBcnJheSh0KSYmdC5sZW5ndGg+ZSYmKGU9dC5sZW5ndGgpfSksZX0sby5kcmF3Um91bmRlZFJlY3RhbmdsZT1mdW5jdGlvbih0LGUsYSxpLG4sbyl7dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlK28sYSksdC5saW5lVG8oZStpLW8sYSksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUraSxhLGUraSxhK28pLHQubGluZVRvKGUraSxhK24tbyksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUraSxhK24sZStpLW8sYStuKSx0LmxpbmVUbyhlK28sYStuKSx0LnF1YWRyYXRpY0N1cnZlVG8oZSxhK24sZSxhK24tbyksdC5saW5lVG8oZSxhK28pLHQucXVhZHJhdGljQ3VydmVUbyhlLGEsZStvLGEpLHQuY2xvc2VQYXRoKCl9LG8uY29sb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGk/aShlIGluc3RhbmNlb2YgQ2FudmFzR3JhZGllbnQ/dC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdENvbG9yOmUpOihjb25zb2xlLmVycm9yKFwiQ29sb3IuanMgbm90IGZvdW5kIVwiKSxlKX0sby5hZGRSZXNpemVMaXN0ZW5lcj1mdW5jdGlvbih0LGUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7YS5jbGFzc05hbWU9XCJjaGFydGpzLWhpZGRlbi1pZnJhbWVcIixhLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtib3JkZXI6MDttYXJnaW46MDt0b3A6MDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMTtcIixhLnRhYkluZGV4PS0xO3ZhciBpPXQuX2NoYXJ0anM9e3Jlc2l6ZXI6YSx0aWNraW5nOiExfSxuPWZ1bmN0aW9uKCl7aS50aWNraW5nfHwoaS50aWNraW5nPSEwLG8ucmVxdWVzdEFuaW1GcmFtZS5jYWxsKHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBpLnJlc2l6ZXI/KGkudGlja2luZz0hMSxlKCkpOnZvaWQgMH0pKX07by5hZGRFdmVudChhLFwibG9hZFwiLGZ1bmN0aW9uKCl7by5hZGRFdmVudChhLmNvbnRlbnRXaW5kb3d8fGEsXCJyZXNpemVcIixuKSxuKCl9KSx0Lmluc2VydEJlZm9yZShhLHQuZmlyc3RDaGlsZCl9LG8ucmVtb3ZlUmVzaXplTGlzdGVuZXI9ZnVuY3Rpb24odCl7aWYodCYmdC5fY2hhcnRqcyl7dmFyIGU9dC5fY2hhcnRqcy5yZXNpemVyO2UmJihlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksdC5fY2hhcnRqcy5yZXNpemVyPW51bGwpLGRlbGV0ZSB0Ll9jaGFydGpzfX0sby5pc0FycmF5PUFycmF5LmlzQXJyYXk/ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCl9OmZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX0sby5hcnJheUVxdWFscz1mdW5jdGlvbih0LGUpe3ZhciBhLGksbixyO2lmKCF0fHwhZXx8dC5sZW5ndGghPT1lLmxlbmd0aClyZXR1cm4hMTtmb3IoYT0wLGk9dC5sZW5ndGg7aT5hOysrYSlpZihuPXRbYV0scj1lW2FdLG4gaW5zdGFuY2VvZiBBcnJheSYmciBpbnN0YW5jZW9mIEFycmF5KXtpZighby5hcnJheUVxdWFscyhuLHIpKXJldHVybiExfWVsc2UgaWYobiE9PXIpcmV0dXJuITE7cmV0dXJuITB9LG8uY2FsbENhbGxiYWNrPWZ1bmN0aW9uKHQsZSxhKXt0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNhbGwmJnQuYXBwbHkoYSxlKX0sby5nZXRIb3ZlckNvbG9yPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgQ2FudmFzUGF0dGVybj90Om8uY29sb3IodCkuc2F0dXJhdGUoLjUpLmRhcmtlbiguMSkucmdiU3RyaW5nKCl9fX0sezM6M31dLDI3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYSxpLG4sbyxyLGw9dC5kYXRhLmRhdGFzZXRzO2ZvcihpPTAsbz1sLmxlbmd0aDtvPmk7KytpKWlmKHQuaXNEYXRhc2V0VmlzaWJsZShpKSlmb3IoYT10LmdldERhdGFzZXRNZXRhKGkpLG49MCxyPWEuZGF0YS5sZW5ndGg7cj5uOysrbil7dmFyIHM9YS5kYXRhW25dO3MuX3ZpZXcuc2tpcHx8ZShzKX19ZnVuY3Rpb24gYSh0LGEpe3ZhciBpPVtdO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pblJhbmdlKGEueCxhLnkpJiZpLnB1c2godCl9KSxpfWZ1bmN0aW9uIGkodCxhLGksbil7dmFyIHI9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLGw9W107cmV0dXJuIG58fChuPW8uZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKSxlKHQsZnVuY3Rpb24odCl7aWYoIWl8fHQuaW5SYW5nZShhLngsYS55KSl7dmFyIGU9dC5nZXRDZW50ZXJQb2ludCgpLG89bihhLGUpO3I+bz8obD1bdF0scj1vKTpvPT09ciYmbC5wdXNoKHQpfX0pLGx9ZnVuY3Rpb24gbih0LGUsbil7dmFyIHI9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCksbD1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyh0LngtZS54KX0scz1uLmludGVyc2VjdD9hKHQscik6aSh0LHIsITEsbCksZD1bXTtyZXR1cm4gcy5sZW5ndGg/KHQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGUsYSl7aWYodC5pc0RhdGFzZXRWaXNpYmxlKGEpKXt2YXIgaT10LmdldERhdGFzZXRNZXRhKGEpLG49aS5kYXRhW3NbMF0uX2luZGV4XTtuJiYhbi5fdmlldy5za2lwJiZkLnB1c2gobil9fSksZCk6W119dmFyIG89dC5oZWxwZXJzO3QuSW50ZXJhY3Rpb249e21vZGVzOntzaW5nbGU6ZnVuY3Rpb24odCxhKXt2YXIgaT1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxuPVtdO3JldHVybiBlKHQsZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5SYW5nZShpLngsaS55KT8obi5wdXNoKHQpLG4pOnZvaWQgMH0pLG4uc2xpY2UoMCwxKX0sbGFiZWw6bixpbmRleDpuLGRhdGFzZXQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLGw9bi5pbnRlcnNlY3Q/YSh0LHIpOmkodCxyLCExKTtyZXR1cm4gbC5sZW5ndGg+MCYmKGw9dC5nZXREYXRhc2V0TWV0YShsWzBdLl9kYXRhc2V0SW5kZXgpLmRhdGEpLGx9LFwieC1heGlzXCI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbih0LGUsITApfSxwb2ludDpmdW5jdGlvbih0LGUpe3ZhciBpPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpO3JldHVybiBhKHQsaSl9LG5lYXJlc3Q6ZnVuY3Rpb24odCxlLGEpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLHI9aSh0LG4sYS5pbnRlcnNlY3QpO3JldHVybiByLmxlbmd0aD4xJiZyLnNvcnQoZnVuY3Rpb24odCxlKXt2YXIgYT10LmdldEFyZWEoKSxpPWUuZ2V0QXJlYSgpLG49YS1pO3JldHVybiAwPT09biYmKG49dC5fZGF0YXNldEluZGV4LWUuX2RhdGFzZXRJbmRleCksbn0pLHIuc2xpY2UoMCwxKX0seDpmdW5jdGlvbih0LGEsaSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCkscj1bXSxsPSExO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pblhSYW5nZShuLngpJiZyLnB1c2godCksdC5pblJhbmdlKG4ueCxuLnkpJiYobD0hMCl9KSxpLmludGVyc2VjdCYmIWwmJihyPVtdKSxyfSx5OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxyPVtdLGw9ITE7cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluWVJhbmdlKG4ueSkmJnIucHVzaCh0KSx0LmluUmFuZ2Uobi54LG4ueSkmJihsPSEwKX0pLGkuaW50ZXJzZWN0JiYhbCYmKHI9W10pLHJ9fX19fSx7fV0sMjg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLGEpe3JldHVybiB0aGlzLmNvbnRyb2xsZXI9bmV3IHQuQ29udHJvbGxlcihlLGEsdGhpcyksdGhpcy5jb250cm9sbGVyfTtyZXR1cm4gdC5kZWZhdWx0cz17Z2xvYmFsOntyZXNwb25zaXZlOiEwLHJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbjowLG1haW50YWluQXNwZWN0UmF0aW86ITAsZXZlbnRzOltcIm1vdXNlbW92ZVwiLFwibW91c2VvdXRcIixcImNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIl0saG92ZXI6e29uSG92ZXI6bnVsbCxtb2RlOlwibmVhcmVzdFwiLGludGVyc2VjdDohMCxhbmltYXRpb25EdXJhdGlvbjo0MDB9LG9uQ2xpY2s6bnVsbCxkZWZhdWx0Q29sb3I6XCJyZ2JhKDAsMCwwLDAuMSlcIixkZWZhdWx0Rm9udENvbG9yOlwiIzY2NlwiLGRlZmF1bHRGb250RmFtaWx5OlwiJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixkZWZhdWx0Rm9udFNpemU6MTIsZGVmYXVsdEZvbnRTdHlsZTpcIm5vcm1hbFwiLHNob3dMaW5lczohMCxlbGVtZW50czp7fSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO2Zvcih2YXIgYT0wO2E8dC5kYXRhLmRhdGFzZXRzLmxlbmd0aDthKyspZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrdC5kYXRhLmRhdGFzZXRzW2FdLmJhY2tncm91bmRDb2xvcisnXCI+PC9zcGFuPicpLHQuZGF0YS5kYXRhc2V0c1thXS5sYWJlbCYmZS5wdXNoKHQuZGF0YS5kYXRhc2V0c1thXS5sYWJlbCksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX19fSx0LkNoYXJ0PXQsdH19LHt9XSwyOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5sYXlvdXRTZXJ2aWNlPXtkZWZhdWx0czp7fSxhZGRCb3g6ZnVuY3Rpb24odCxlKXt0LmJveGVzfHwodC5ib3hlcz1bXSksdC5ib3hlcy5wdXNoKGUpfSxyZW1vdmVCb3g6ZnVuY3Rpb24odCxlKXt0LmJveGVzJiZ0LmJveGVzLnNwbGljZSh0LmJveGVzLmluZGV4T2YoZSksMSl9LHVwZGF0ZTpmdW5jdGlvbih0LGEsaSl7ZnVuY3Rpb24gbih0KXt2YXIgZSxhPXQuaXNIb3Jpem9udGFsKCk7YT8oZT10LnVwZGF0ZSh0Lm9wdGlvbnMuZnVsbFdpZHRoP3g6QyxNKSxELT1lLmhlaWdodCk6KGU9dC51cGRhdGUodyxTKSxDLT1lLndpZHRoKSxJLnB1c2goe2hvcml6b250YWw6YSxtaW5TaXplOmUsYm94OnR9KX1mdW5jdGlvbiBvKHQpe3ZhciBhPWUuZmluZE5leHRXaGVyZShJLGZ1bmN0aW9uKGUpe3JldHVybiBlLmJveD09PXR9KTtpZihhKWlmKHQuaXNIb3Jpem9udGFsKCkpe3ZhciBpPXtsZWZ0OkEscmlnaHQ6VCx0b3A6MCxib3R0b206MH07dC51cGRhdGUodC5vcHRpb25zLmZ1bGxXaWR0aD94OkMseS8yLGkpfWVsc2UgdC51cGRhdGUoYS5taW5TaXplLndpZHRoLEQpfWZ1bmN0aW9uIHIodCl7dmFyIGE9ZS5maW5kTmV4dFdoZXJlKEksZnVuY3Rpb24oZSl7cmV0dXJuIGUuYm94PT09dH0pLGk9e2xlZnQ6MCxyaWdodDowLHRvcDpQLGJvdHRvbTpGfTthJiZ0LnVwZGF0ZShhLm1pblNpemUud2lkdGgsRCxpKX1mdW5jdGlvbiBsKHQpe3QuaXNIb3Jpem9udGFsKCk/KHQubGVmdD10Lm9wdGlvbnMuZnVsbFdpZHRoP3U6QSx0LnJpZ2h0PXQub3B0aW9ucy5mdWxsV2lkdGg/YS1jOkErQyx0LnRvcD1MLHQuYm90dG9tPUwrdC5oZWlnaHQsTD10LmJvdHRvbSk6KHQubGVmdD1WLHQucmlnaHQ9Vit0LndpZHRoLHQudG9wPVAsdC5ib3R0b209UCtELFY9dC5yaWdodCl9aWYodCl7dmFyIHM9dC5vcHRpb25zLmxheW91dCxkPXM/cy5wYWRkaW5nOm51bGwsdT0wLGM9MCxoPTAsZj0wO2lzTmFOKGQpPyh1PWQubGVmdHx8MCxjPWQucmlnaHR8fDAsaD1kLnRvcHx8MCxmPWQuYm90dG9tfHwwKToodT1kLGM9ZCxoPWQsZj1kKTt2YXIgZz1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJsZWZ0XCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxwPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cInJpZ2h0XCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxtPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cInRvcFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksYj1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJib3R0b21cIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLHY9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwiY2hhcnRBcmVhXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KTttLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4oZS5vcHRpb25zLmZ1bGxXaWR0aD8xOjApLSh0Lm9wdGlvbnMuZnVsbFdpZHRoPzE6MCl9KSxiLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4odC5vcHRpb25zLmZ1bGxXaWR0aD8xOjApLShlLm9wdGlvbnMuZnVsbFdpZHRoPzE6MCl9KTt2YXIgeD1hLXUtYyx5PWktaC1mLGs9eC8yLFM9eS8yLHc9KGEtaykvKGcubGVuZ3RoK3AubGVuZ3RoKSxNPShpLVMpLyhtLmxlbmd0aCtiLmxlbmd0aCksQz14LEQ9eSxJPVtdO2UuZWFjaChnLmNvbmNhdChwLG0sYiksbik7dmFyIEE9dSxUPWMsUD1oLEY9ZjtlLmVhY2goZy5jb25jYXQocCksbyksZS5lYWNoKGcsZnVuY3Rpb24odCl7QSs9dC53aWR0aH0pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe1QrPXQud2lkdGh9KSxlLmVhY2gobS5jb25jYXQoYiksbyksZS5lYWNoKG0sZnVuY3Rpb24odCl7UCs9dC5oZWlnaHR9KSxlLmVhY2goYixmdW5jdGlvbih0KXtGKz10LmhlaWdodH0pLGUuZWFjaChnLmNvbmNhdChwKSxyKSxBPXUsVD1jLFA9aCxGPWYsZS5lYWNoKGcsZnVuY3Rpb24odCl7QSs9dC53aWR0aH0pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe1QrPXQud2lkdGh9KSxlLmVhY2gobSxmdW5jdGlvbih0KXtQKz10LmhlaWdodH0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe0YrPXQuaGVpZ2h0fSk7dmFyIF89aS1QLUYsUj1hLUEtVDsoUiE9PUN8fF8hPT1EKSYmKGUuZWFjaChnLGZ1bmN0aW9uKHQpe3QuaGVpZ2h0PV99KSxlLmVhY2gocCxmdW5jdGlvbih0KXt0LmhlaWdodD1ffSksZS5lYWNoKG0sZnVuY3Rpb24odCl7dC5vcHRpb25zLmZ1bGxXaWR0aHx8KHQud2lkdGg9Uil9KSxlLmVhY2goYixmdW5jdGlvbih0KXt0Lm9wdGlvbnMuZnVsbFdpZHRofHwodC53aWR0aD1SKX0pLEQ9XyxDPVIpO3ZhciBWPXUsTD1oO2UuZWFjaChnLmNvbmNhdChtKSxsKSxWKz1DLEwrPUQsZS5lYWNoKHAsbCksZS5lYWNoKGIsbCksdC5jaGFydEFyZWE9e2xlZnQ6QSx0b3A6UCxyaWdodDpBK0MsYm90dG9tOlArRH0sZS5lYWNoKHYsZnVuY3Rpb24oZSl7ZS5sZWZ0PXQuY2hhcnRBcmVhLmxlZnQsZS50b3A9dC5jaGFydEFyZWEudG9wLGUucmlnaHQ9dC5jaGFydEFyZWEucmlnaHQsZS5ib3R0b209dC5jaGFydEFyZWEuYm90dG9tLGUudXBkYXRlKEMsRCl9KX19fX19LHt9XSwzMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHQudXNlUG9pbnRTdHlsZT9lKk1hdGguU1FSVDI6dC5ib3hXaWR0aH12YXIgYT10LmhlbHBlcnMsaT1hLm5vb3A7dC5kZWZhdWx0cy5nbG9iYWwubGVnZW5kPXtkaXNwbGF5OiEwLHBvc2l0aW9uOlwidG9wXCIsZnVsbFdpZHRoOiEwLHJldmVyc2U6ITEsb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldEluZGV4LGk9dGhpcy5jaGFydCxuPWkuZ2V0RGF0YXNldE1ldGEoYSk7bi5oaWRkZW49bnVsbD09PW4uaGlkZGVuPyFpLmRhdGEuZGF0YXNldHNbYV0uaGlkZGVuOm51bGwsaS51cGRhdGUoKX0sb25Ib3ZlcjpudWxsLGxhYmVsczp7Ym94V2lkdGg6NDAscGFkZGluZzoxMCxnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgZT10LmRhdGE7cmV0dXJuIGEuaXNBcnJheShlLmRhdGFzZXRzKT9lLmRhdGFzZXRzLm1hcChmdW5jdGlvbihlLGkpe3JldHVybnt0ZXh0OmUubGFiZWwsZmlsbFN0eWxlOmEuaXNBcnJheShlLmJhY2tncm91bmRDb2xvcik/ZS5iYWNrZ3JvdW5kQ29sb3JbMF06ZS5iYWNrZ3JvdW5kQ29sb3IsaGlkZGVuOiF0LmlzRGF0YXNldFZpc2libGUoaSksbGluZUNhcDplLmJvcmRlckNhcFN0eWxlLGxpbmVEYXNoOmUuYm9yZGVyRGFzaCxsaW5lRGFzaE9mZnNldDplLmJvcmRlckRhc2hPZmZzZXQsbGluZUpvaW46ZS5ib3JkZXJKb2luU3R5bGUsbGluZVdpZHRoOmUuYm9yZGVyV2lkdGgsc3Ryb2tlU3R5bGU6ZS5ib3JkZXJDb2xvcixwb2ludFN0eWxlOmUucG9pbnRTdHlsZSxkYXRhc2V0SW5kZXg6aX19LHRoaXMpOltdfX19LHQuTGVnZW5kPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24odCl7YS5leHRlbmQodGhpcyx0KSx0aGlzLmxlZ2VuZEhpdEJveGVzPVtdLHRoaXMuZG91Z2hudXRNb2RlPSExfSxiZWZvcmVVcGRhdGU6aSx1cGRhdGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXM7cmV0dXJuIGkuYmVmb3JlVXBkYXRlKCksaS5tYXhXaWR0aD10LGkubWF4SGVpZ2h0PWUsaS5tYXJnaW5zPWEsaS5iZWZvcmVTZXREaW1lbnNpb25zKCksaS5zZXREaW1lbnNpb25zKCksaS5hZnRlclNldERpbWVuc2lvbnMoKSxpLmJlZm9yZUJ1aWxkTGFiZWxzKCksaS5idWlsZExhYmVscygpLGkuYWZ0ZXJCdWlsZExhYmVscygpLGkuYmVmb3JlRml0KCksaS5maXQoKSxpLmFmdGVyRml0KCksaS5hZnRlclVwZGF0ZSgpLGkubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6aSxiZWZvcmVTZXREaW1lbnNpb25zOmksc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wLHQubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH19LGFmdGVyU2V0RGltZW5zaW9uczppLGJlZm9yZUJ1aWxkTGFiZWxzOmksYnVpbGRMYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGVnZW5kSXRlbXM9dC5vcHRpb25zLmxhYmVscy5nZW5lcmF0ZUxhYmVscy5jYWxsKHQsdC5jaGFydCksdC5vcHRpb25zLnJldmVyc2UmJnQubGVnZW5kSXRlbXMucmV2ZXJzZSgpfSxhZnRlckJ1aWxkTGFiZWxzOmksYmVmb3JlRml0OmksZml0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucyxvPW4ubGFiZWxzLHI9bi5kaXNwbGF5LGw9aS5jdHgscz10LmRlZmF1bHRzLmdsb2JhbCxkPWEuZ2V0VmFsdWVPckRlZmF1bHQsdT1kKG8uZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLGM9ZChvLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLGg9ZChvLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSksZj1hLmZvbnRTdHJpbmcodSxjLGgpLGc9aS5sZWdlbmRIaXRCb3hlcz1bXSxwPWkubWluU2l6ZSxtPWkuaXNIb3Jpem9udGFsKCk7aWYobT8ocC53aWR0aD1pLm1heFdpZHRoLHAuaGVpZ2h0PXI/MTA6MCk6KHAud2lkdGg9cj8xMDowLHAuaGVpZ2h0PWkubWF4SGVpZ2h0KSxyKWlmKGwuZm9udD1mLG0pe3ZhciBiPWkubGluZVdpZHRocz1bMF0sdj1pLmxlZ2VuZEl0ZW1zLmxlbmd0aD91K28ucGFkZGluZzowO2wudGV4dEFsaWduPVwibGVmdFwiLGwudGV4dEJhc2VsaW5lPVwidG9wXCIsYS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxhKXt2YXIgbj1lKG8sdSkscj1uK3UvMitsLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGg7YltiLmxlbmd0aC0xXStyK28ucGFkZGluZz49aS53aWR0aCYmKHYrPXUrby5wYWRkaW5nLGJbYi5sZW5ndGhdPWkubGVmdCksZ1thXT17bGVmdDowLHRvcDowLHdpZHRoOnIsaGVpZ2h0OnV9LGJbYi5sZW5ndGgtMV0rPXIrby5wYWRkaW5nfSkscC5oZWlnaHQrPXZ9ZWxzZXt2YXIgeD1vLnBhZGRpbmcseT1pLmNvbHVtbldpZHRocz1bXSxrPW8ucGFkZGluZyxTPTAsdz0wLE09dSt4O2EuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsYSl7dmFyIGk9ZShvLHUpLG49aSt1LzIrbC5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoO3crTT5wLmhlaWdodCYmKGsrPVMrby5wYWRkaW5nLHkucHVzaChTKSxTPTAsdz0wKSxTPU1hdGgubWF4KFMsbiksdys9TSxnW2FdPXtsZWZ0OjAsdG9wOjAsd2lkdGg6bixoZWlnaHQ6dX19KSxrKz1TLHkucHVzaChTKSxwLndpZHRoKz1rfWkud2lkdGg9cC53aWR0aCxpLmhlaWdodD1wLmhlaWdodH0sYWZ0ZXJGaXQ6aSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXtyZXR1cm5cInRvcFwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucyxvPW4ubGFiZWxzLHI9dC5kZWZhdWx0cy5nbG9iYWwsbD1yLmVsZW1lbnRzLmxpbmUscz1pLndpZHRoLGQ9aS5saW5lV2lkdGhzO2lmKG4uZGlzcGxheSl7dmFyIHUsYz1pLmN0eCxoPWEuZ2V0VmFsdWVPckRlZmF1bHQsZj1oKG8uZm9udENvbG9yLHIuZGVmYXVsdEZvbnRDb2xvciksZz1oKG8uZm9udFNpemUsci5kZWZhdWx0Rm9udFNpemUpLHA9aChvLmZvbnRTdHlsZSxyLmRlZmF1bHRGb250U3R5bGUpLG09aChvLmZvbnRGYW1pbHksci5kZWZhdWx0Rm9udEZhbWlseSksYj1hLmZvbnRTdHJpbmcoZyxwLG0pO2MudGV4dEFsaWduPVwibGVmdFwiLGMudGV4dEJhc2VsaW5lPVwidG9wXCIsYy5saW5lV2lkdGg9LjUsYy5zdHJva2VTdHlsZT1mLGMuZmlsbFN0eWxlPWYsYy5mb250PWI7dmFyIHY9ZShvLGcpLHg9aS5sZWdlbmRIaXRCb3hlcyx5PWZ1bmN0aW9uKGUsYSxpKXtpZighKGlzTmFOKHYpfHwwPj12KSl7Yy5zYXZlKCksYy5maWxsU3R5bGU9aChpLmZpbGxTdHlsZSxyLmRlZmF1bHRDb2xvciksYy5saW5lQ2FwPWgoaS5saW5lQ2FwLGwuYm9yZGVyQ2FwU3R5bGUpLGMubGluZURhc2hPZmZzZXQ9aChpLmxpbmVEYXNoT2Zmc2V0LGwuYm9yZGVyRGFzaE9mZnNldCksYy5saW5lSm9pbj1oKGkubGluZUpvaW4sbC5ib3JkZXJKb2luU3R5bGUpLGMubGluZVdpZHRoPWgoaS5saW5lV2lkdGgsbC5ib3JkZXJXaWR0aCksYy5zdHJva2VTdHlsZT1oKGkuc3Ryb2tlU3R5bGUsci5kZWZhdWx0Q29sb3IpO3ZhciBvPTA9PT1oKGkubGluZVdpZHRoLGwuYm9yZGVyV2lkdGgpO2lmKGMuc2V0TGluZURhc2gmJmMuc2V0TGluZURhc2goaChpLmxpbmVEYXNoLGwuYm9yZGVyRGFzaCkpLG4ubGFiZWxzJiZuLmxhYmVscy51c2VQb2ludFN0eWxlKXt2YXIgcz1nKk1hdGguU1FSVDIvMixkPXMvTWF0aC5TUVJUMix1PWUrZCxmPWErZDt0LmNhbnZhc0hlbHBlcnMuZHJhd1BvaW50KGMsaS5wb2ludFN0eWxlLHMsdSxmKX1lbHNlIG98fGMuc3Ryb2tlUmVjdChlLGEsdixnKSxjLmZpbGxSZWN0KGUsYSx2LGcpO2MucmVzdG9yZSgpfX0saz1mdW5jdGlvbih0LGUsYSxpKXtjLmZpbGxUZXh0KGEudGV4dCx2K2cvMit0LGUpLGEuaGlkZGVuJiYoYy5iZWdpblBhdGgoKSxjLmxpbmVXaWR0aD0yLGMubW92ZVRvKHYrZy8yK3QsZStnLzIpLGMubGluZVRvKHYrZy8yK3QraSxlK2cvMiksYy5zdHJva2UoKSl9LFM9aS5pc0hvcml6b250YWwoKTt1PVM/e3g6aS5sZWZ0KyhzLWRbMF0pLzIseTppLnRvcCtvLnBhZGRpbmcsbGluZTowfTp7eDppLmxlZnQrby5wYWRkaW5nLHk6aS50b3Arby5wYWRkaW5nLGxpbmU6MH07dmFyIHc9ZytvLnBhZGRpbmc7YS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxlKXt2YXIgYT1jLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGgsbj12K2cvMithLHI9dS54LGw9dS55O1M/cituPj1zJiYobD11LnkrPXcsdS5saW5lKysscj11Lng9aS5sZWZ0KyhzLWRbdS5saW5lXSkvMik6bCt3PmkuYm90dG9tJiYocj11Lng9citpLmNvbHVtbldpZHRoc1t1LmxpbmVdK28ucGFkZGluZyxsPXUueT1pLnRvcCx1LmxpbmUrKykseShyLGwsdCkseFtlXS5sZWZ0PXIseFtlXS50b3A9bCxrKHIsbCx0LGEpLFM/dS54Kz1uK28ucGFkZGluZzp1LnkrPXd9KX19LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1lLm9wdGlvbnMsbj1cIm1vdXNldXBcIj09PXQudHlwZT9cImNsaWNrXCI6dC50eXBlLG89ITE7aWYoXCJtb3VzZW1vdmVcIj09PW4pe2lmKCFpLm9uSG92ZXIpcmV0dXJufWVsc2V7aWYoXCJjbGlja1wiIT09bilyZXR1cm47aWYoIWkub25DbGljaylyZXR1cm59dmFyIHI9YS5nZXRSZWxhdGl2ZVBvc2l0aW9uKHQsZS5jaGFydC5jaGFydCksbD1yLngscz1yLnk7aWYobD49ZS5sZWZ0JiZsPD1lLnJpZ2h0JiZzPj1lLnRvcCYmczw9ZS5ib3R0b20pZm9yKHZhciBkPWUubGVnZW5kSGl0Qm94ZXMsdT0wO3U8ZC5sZW5ndGg7Kyt1KXt2YXIgYz1kW3VdO2lmKGw+PWMubGVmdCYmbDw9Yy5sZWZ0K2Mud2lkdGgmJnM+PWMudG9wJiZzPD1jLnRvcCtjLmhlaWdodCl7aWYoXCJjbGlja1wiPT09bil7aS5vbkNsaWNrLmNhbGwoZSx0LGUubGVnZW5kSXRlbXNbdV0pLG89ITA7YnJlYWt9aWYoXCJtb3VzZW1vdmVcIj09PW4pe2kub25Ib3Zlci5jYWxsKGUsdCxlLmxlZ2VuZEl0ZW1zW3VdKSxvPSEwO2JyZWFrfX19cmV0dXJuIG99fSksdC5wbHVnaW5zLnJlZ2lzdGVyKHtiZWZvcmVJbml0OmZ1bmN0aW9uKGUpe3ZhciBhPWUub3B0aW9ucyxpPWEubGVnZW5kO2kmJihlLmxlZ2VuZD1uZXcgdC5MZWdlbmQoe2N0eDplLmNoYXJ0LmN0eCxvcHRpb25zOmksY2hhcnQ6ZX0pLHQubGF5b3V0U2VydmljZS5hZGRCb3goZSxlLmxlZ2VuZCkpfX0pfX0se31dLDMxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycy5ub29wO3QucGx1Z2lucz17X3BsdWdpbnM6W10scmVnaXN0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcGx1Z2lucztbXS5jb25jYXQodCkuZm9yRWFjaChmdW5jdGlvbih0KXstMT09PWUuaW5kZXhPZih0KSYmZS5wdXNoKHQpfSl9LHVucmVnaXN0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcGx1Z2lucztbXS5jb25jYXQodCkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgYT1lLmluZGV4T2YodCk7LTEhPT1hJiZlLnNwbGljZShhLDEpfSl9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5fcGx1Z2lucz1bXX0sY291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGx1Z2lucy5sZW5ndGh9LGdldEFsbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wbHVnaW5zfSxub3RpZnk6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG49dGhpcy5fcGx1Z2lucyxvPW4ubGVuZ3RoO1xyXG5mb3IoYT0wO28+YTsrK2EpaWYoaT1uW2FdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGlbdF0mJmlbdF0uYXBwbHkoaSxlfHxbXSk9PT0hMSlyZXR1cm4hMTtyZXR1cm4hMH19LHQuUGx1Z2luQmFzZT10LkVsZW1lbnQuZXh0ZW5kKHtiZWZvcmVJbml0OmUsYWZ0ZXJJbml0OmUsYmVmb3JlVXBkYXRlOmUsYWZ0ZXJVcGRhdGU6ZSxiZWZvcmVEcmF3OmUsYWZ0ZXJEcmF3OmUsZGVzdHJveTplfSksdC5wbHVnaW5TZXJ2aWNlPXQucGx1Z2luc319LHt9XSwzMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5zY2FsZT17ZGlzcGxheTohMCxwb3NpdGlvbjpcImxlZnRcIixncmlkTGluZXM6e2Rpc3BsYXk6ITAsY29sb3I6XCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixsaW5lV2lkdGg6MSxkcmF3Qm9yZGVyOiEwLGRyYXdPbkNoYXJ0QXJlYTohMCxkcmF3VGlja3M6ITAsdGlja01hcmtMZW5ndGg6MTAsemVyb0xpbmVXaWR0aDoxLHplcm9MaW5lQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMjUpXCIsb2Zmc2V0R3JpZExpbmVzOiExLGJvcmRlckRhc2g6W10sYm9yZGVyRGFzaE9mZnNldDowfSxzY2FsZUxhYmVsOntsYWJlbFN0cmluZzpcIlwiLGRpc3BsYXk6ITF9LHRpY2tzOntiZWdpbkF0WmVybzohMSxtaW5Sb3RhdGlvbjowLG1heFJvdGF0aW9uOjUwLG1pcnJvcjohMSxwYWRkaW5nOjEwLHJldmVyc2U6ITEsZGlzcGxheTohMCxhdXRvU2tpcDohMCxhdXRvU2tpcFBhZGRpbmc6MCxsYWJlbE9mZnNldDowLGNhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy52YWx1ZXN9fSx0LlNjYWxlPXQuRWxlbWVudC5leHRlbmQoe2JlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUsW3RoaXNdKX0sdXBkYXRlOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzO3JldHVybiBuLmJlZm9yZVVwZGF0ZSgpLG4ubWF4V2lkdGg9dCxuLm1heEhlaWdodD1hLG4ubWFyZ2lucz1lLmV4dGVuZCh7bGVmdDowLHJpZ2h0OjAsdG9wOjAsYm90dG9tOjB9LGkpLG4uYmVmb3JlU2V0RGltZW5zaW9ucygpLG4uc2V0RGltZW5zaW9ucygpLG4uYWZ0ZXJTZXREaW1lbnNpb25zKCksbi5iZWZvcmVEYXRhTGltaXRzKCksbi5kZXRlcm1pbmVEYXRhTGltaXRzKCksbi5hZnRlckRhdGFMaW1pdHMoKSxuLmJlZm9yZUJ1aWxkVGlja3MoKSxuLmJ1aWxkVGlja3MoKSxuLmFmdGVyQnVpbGRUaWNrcygpLG4uYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uKCksbi5jb252ZXJ0VGlja3NUb0xhYmVscygpLG4uYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb24oKSxuLmJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uY2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5hZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uYmVmb3JlRml0KCksbi5maXQoKSxuLmFmdGVyRml0KCksbi5hZnRlclVwZGF0ZSgpLG4ubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJVcGRhdGUsW3RoaXNdKX0sYmVmb3JlU2V0RGltZW5zaW9uczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVTZXREaW1lbnNpb25zLFt0aGlzXSl9LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MH0sYWZ0ZXJTZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyU2V0RGltZW5zaW9ucyxbdGhpc10pfSxiZWZvcmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZURhdGFMaW1pdHMsW3RoaXNdKX0sZGV0ZXJtaW5lRGF0YUxpbWl0czplLm5vb3AsYWZ0ZXJEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyRGF0YUxpbWl0cyxbdGhpc10pfSxiZWZvcmVCdWlsZFRpY2tzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUJ1aWxkVGlja3MsW3RoaXNdKX0sYnVpbGRUaWNrczplLm5vb3AsYWZ0ZXJCdWlsZFRpY2tzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyQnVpbGRUaWNrcyxbdGhpc10pfSxiZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uLFt0aGlzXSl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQub3B0aW9ucy50aWNrczt0LnRpY2tzPXQudGlja3MubWFwKGUudXNlckNhbGxiYWNrfHxlLmNhbGxiYWNrKX0sYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb24sW3RoaXNdKX0sYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbixbdGhpc10pfSxjYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5jdHgsbj10LmRlZmF1bHRzLmdsb2JhbCxvPWEub3B0aW9ucy50aWNrcyxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250U2l6ZSxuLmRlZmF1bHRGb250U2l6ZSksbD1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udFN0eWxlLG4uZGVmYXVsdEZvbnRTdHlsZSkscz1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udEZhbWlseSxuLmRlZmF1bHRGb250RmFtaWx5KSxkPWUuZm9udFN0cmluZyhyLGwscyk7aS5mb250PWQ7dmFyIHUsYz1pLm1lYXN1cmVUZXh0KGEudGlja3NbMF0pLndpZHRoLGg9aS5tZWFzdXJlVGV4dChhLnRpY2tzW2EudGlja3MubGVuZ3RoLTFdKS53aWR0aDtpZihhLmxhYmVsUm90YXRpb249by5taW5Sb3RhdGlvbnx8MCxhLnBhZGRpbmdSaWdodD0wLGEucGFkZGluZ0xlZnQ9MCxhLm9wdGlvbnMuZGlzcGxheSYmYS5pc0hvcml6b250YWwoKSl7YS5wYWRkaW5nUmlnaHQ9aC8yKzMsYS5wYWRkaW5nTGVmdD1jLzIrMyxhLmxvbmdlc3RUZXh0Q2FjaGV8fChhLmxvbmdlc3RUZXh0Q2FjaGU9e30pO2Zvcih2YXIgZixnLHA9ZS5sb25nZXN0VGV4dChpLGQsYS50aWNrcyxhLmxvbmdlc3RUZXh0Q2FjaGUpLG09cCxiPWEuZ2V0UGl4ZWxGb3JUaWNrKDEpLWEuZ2V0UGl4ZWxGb3JUaWNrKDApLTY7bT5iJiZhLmxhYmVsUm90YXRpb248by5tYXhSb3RhdGlvbjspe2lmKGY9TWF0aC5jb3MoZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksZz1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSx1PWYqYyx1K3IvMj5hLnlMYWJlbFdpZHRoJiYoYS5wYWRkaW5nTGVmdD11K3IvMiksYS5wYWRkaW5nUmlnaHQ9ci8yLGcqcD5hLm1heEhlaWdodCl7YS5sYWJlbFJvdGF0aW9uLS07YnJlYWt9YS5sYWJlbFJvdGF0aW9uKyssbT1mKnB9fWEubWFyZ2lucyYmKGEucGFkZGluZ0xlZnQ9TWF0aC5tYXgoYS5wYWRkaW5nTGVmdC1hLm1hcmdpbnMubGVmdCwwKSxhLnBhZGRpbmdSaWdodD1NYXRoLm1heChhLnBhZGRpbmdSaWdodC1hLm1hcmdpbnMucmlnaHQsMCkpfSxhZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbixbdGhpc10pfSxiZWZvcmVGaXQ6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlRml0LFt0aGlzXSl9LGZpdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9LG49YS5vcHRpb25zLG89dC5kZWZhdWx0cy5nbG9iYWwscj1uLnRpY2tzLGw9bi5zY2FsZUxhYmVsLHM9bi5ncmlkTGluZXMsZD1uLmRpc3BsYXksdT1hLmlzSG9yaXpvbnRhbCgpLGM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxoPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250U3R5bGUsby5kZWZhdWx0Rm9udFN0eWxlKSxmPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250RmFtaWx5LG8uZGVmYXVsdEZvbnRGYW1pbHkpLGc9ZS5mb250U3RyaW5nKGMsaCxmKSxwPWUuZ2V0VmFsdWVPckRlZmF1bHQobC5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSksbT1uLmdyaWRMaW5lcy50aWNrTWFya0xlbmd0aDtpZih1P2kud2lkdGg9YS5pc0Z1bGxXaWR0aCgpP2EubWF4V2lkdGgtYS5tYXJnaW5zLmxlZnQtYS5tYXJnaW5zLnJpZ2h0OmEubWF4V2lkdGg6aS53aWR0aD1kJiZzLmRyYXdUaWNrcz9tOjAsdT9pLmhlaWdodD1kJiZzLmRyYXdUaWNrcz9tOjA6aS5oZWlnaHQ9YS5tYXhIZWlnaHQsbC5kaXNwbGF5JiZkJiYodT9pLmhlaWdodCs9MS41KnA6aS53aWR0aCs9MS41KnApLHIuZGlzcGxheSYmZCl7YS5sb25nZXN0VGV4dENhY2hlfHwoYS5sb25nZXN0VGV4dENhY2hlPXt9KTt2YXIgYj1lLmxvbmdlc3RUZXh0KGEuY3R4LGcsYS50aWNrcyxhLmxvbmdlc3RUZXh0Q2FjaGUpLHY9ZS5udW1iZXJPZkxhYmVsTGluZXMoYS50aWNrcykseD0uNSpjO2lmKHUpe2EubG9uZ2VzdExhYmVsV2lkdGg9Yjt2YXIgeT1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSphLmxvbmdlc3RMYWJlbFdpZHRoK2Mqdit4KnY7aS5oZWlnaHQ9TWF0aC5taW4oYS5tYXhIZWlnaHQsaS5oZWlnaHQreSksYS5jdHguZm9udD1nO3ZhciBrPWEuY3R4Lm1lYXN1cmVUZXh0KGEudGlja3NbMF0pLndpZHRoLFM9YS5jdHgubWVhc3VyZVRleHQoYS50aWNrc1thLnRpY2tzLmxlbmd0aC0xXSkud2lkdGgsdz1NYXRoLmNvcyhlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSxNPU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpO2EucGFkZGluZ0xlZnQ9MCE9PWEubGFiZWxSb3RhdGlvbj93KmsrMzprLzIrMyxhLnBhZGRpbmdSaWdodD0wIT09YS5sYWJlbFJvdGF0aW9uP00qKGMvMikrMzpTLzIrM31lbHNle3ZhciBDPWEubWF4V2lkdGgtaS53aWR0aCxEPXIubWlycm9yO0Q/Yj0wOmIrPWEub3B0aW9ucy50aWNrcy5wYWRkaW5nLEM+Yj9pLndpZHRoKz1iOmkud2lkdGg9YS5tYXhXaWR0aCxhLnBhZGRpbmdUb3A9Yy8yLGEucGFkZGluZ0JvdHRvbT1jLzJ9fWEubWFyZ2lucyYmKGEucGFkZGluZ0xlZnQ9TWF0aC5tYXgoYS5wYWRkaW5nTGVmdC1hLm1hcmdpbnMubGVmdCwwKSxhLnBhZGRpbmdUb3A9TWF0aC5tYXgoYS5wYWRkaW5nVG9wLWEubWFyZ2lucy50b3AsMCksYS5wYWRkaW5nUmlnaHQ9TWF0aC5tYXgoYS5wYWRkaW5nUmlnaHQtYS5tYXJnaW5zLnJpZ2h0LDApLGEucGFkZGluZ0JvdHRvbT1NYXRoLm1heChhLnBhZGRpbmdCb3R0b20tYS5tYXJnaW5zLmJvdHRvbSwwKSksYS53aWR0aD1pLndpZHRoLGEuaGVpZ2h0PWkuaGVpZ2h0fSxhZnRlckZpdDpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckZpdCxbdGhpc10pfSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXtyZXR1cm5cInRvcFwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufSxpc0Z1bGxXaWR0aDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMuZnVsbFdpZHRofSxnZXRSaWdodFZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dHx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/TmFOOlwibnVtYmVyXCIhPXR5cGVvZiB0fHxpc0Zpbml0ZSh0KT9cIm9iamVjdFwiPT10eXBlb2YgdD90IGluc3RhbmNlb2YgRGF0ZXx8dC5pc1ZhbGlkP3Q6dGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuaXNIb3Jpem9udGFsKCk/dC54OnQueSk6dDpOYU59LGdldExhYmVsRm9ySW5kZXg6ZS5ub29wLGdldFBpeGVsRm9yVmFsdWU6ZS5ub29wLGdldFZhbHVlRm9yUGl4ZWw6ZS5ub29wLGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7aWYoYS5pc0hvcml6b250YWwoKSl7dmFyIGk9YS53aWR0aC0oYS5wYWRkaW5nTGVmdCthLnBhZGRpbmdSaWdodCksbj1pL01hdGgubWF4KGEudGlja3MubGVuZ3RoLShhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpLG89bip0K2EucGFkZGluZ0xlZnQ7ZSYmKG8rPW4vMik7dmFyIHI9YS5sZWZ0K01hdGgucm91bmQobyk7cmV0dXJuIHIrPWEuaXNGdWxsV2lkdGgoKT9hLm1hcmdpbnMubGVmdDowfXZhciBsPWEuaGVpZ2h0LShhLnBhZGRpbmdUb3ArYS5wYWRkaW5nQm90dG9tKTtyZXR1cm4gYS50b3ArdCoobC8oYS50aWNrcy5sZW5ndGgtMSkpfSxnZXRQaXhlbEZvckRlY2ltYWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihlLmlzSG9yaXpvbnRhbCgpKXt2YXIgYT1lLndpZHRoLShlLnBhZGRpbmdMZWZ0K2UucGFkZGluZ1JpZ2h0KSxpPWEqdCtlLnBhZGRpbmdMZWZ0LG49ZS5sZWZ0K01hdGgucm91bmQoaSk7cmV0dXJuIG4rPWUuaXNGdWxsV2lkdGgoKT9lLm1hcmdpbnMubGVmdDowfXJldHVybiBlLnRvcCt0KmUuaGVpZ2h0fSxnZXRCYXNlUGl4ZWw6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5taW4sYT10Lm1heDtyZXR1cm4gdC5nZXRQaXhlbEZvclZhbHVlKHQuYmVnaW5BdFplcm8/MDowPmUmJjA+YT9hOmU+MCYmYT4wP2U6MCl9LGRyYXc6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucztpZihuLmRpc3BsYXkpe3ZhciBvLHIsbD1pLmN0eCxzPXQuZGVmYXVsdHMuZ2xvYmFsLGQ9bi50aWNrcyx1PW4uZ3JpZExpbmVzLGM9bi5zY2FsZUxhYmVsLGg9MCE9PWkubGFiZWxSb3RhdGlvbixmPWQuYXV0b1NraXAsZz1pLmlzSG9yaXpvbnRhbCgpO2QubWF4VGlja3NMaW1pdCYmKHI9ZC5tYXhUaWNrc0xpbWl0KTt2YXIgcD1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udENvbG9yLHMuZGVmYXVsdEZvbnRDb2xvciksbT1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLGI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLHY9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSkseD1lLmZvbnRTdHJpbmcobSxiLHYpLHk9dS50aWNrTWFya0xlbmd0aCxrPWUuZ2V0VmFsdWVPckRlZmF1bHQodS5ib3JkZXJEYXNoLHMuYm9yZGVyRGFzaCksUz1lLmdldFZhbHVlT3JEZWZhdWx0KHUuYm9yZGVyRGFzaE9mZnNldCxzLmJvcmRlckRhc2hPZmZzZXQpLHc9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRDb2xvcixzLmRlZmF1bHRGb250Q29sb3IpLE09ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxDPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSxEPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLEk9ZS5mb250U3RyaW5nKE0sQyxEKSxBPWUudG9SYWRpYW5zKGkubGFiZWxSb3RhdGlvbiksVD1NYXRoLmNvcyhBKSxQPWkubG9uZ2VzdExhYmVsV2lkdGgqVDtsLmZpbGxTdHlsZT1wO3ZhciBGPVtdO2lmKGcpe2lmKG89ITEsaCYmKFAvPTIpLChQK2QuYXV0b1NraXBQYWRkaW5nKSppLnRpY2tzLmxlbmd0aD5pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSYmKG89MStNYXRoLmZsb29yKChQK2QuYXV0b1NraXBQYWRkaW5nKSppLnRpY2tzLmxlbmd0aC8oaS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCkpKSksciYmaS50aWNrcy5sZW5ndGg+cilmb3IoOyFvfHxpLnRpY2tzLmxlbmd0aC8ob3x8MSk+cjspb3x8KG89MSksbys9MTtmfHwobz0hMSl9dmFyIF89XCJyaWdodFwiPT09bi5wb3NpdGlvbj9pLmxlZnQ6aS5yaWdodC15LFI9XCJyaWdodFwiPT09bi5wb3NpdGlvbj9pLmxlZnQreTppLnJpZ2h0LFY9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS50b3A6aS5ib3R0b20teSxMPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kudG9wK3k6aS5ib3R0b207aWYoZS5lYWNoKGkudGlja3MsZnVuY3Rpb24odCxyKXtpZih2b2lkIDAhPT10JiZudWxsIT09dCl7dmFyIGw9aS50aWNrcy5sZW5ndGg9PT1yKzEscz1vPjEmJnIlbz4wfHxyJW89PT0wJiZyK28+PWkudGlja3MubGVuZ3RoO2lmKCghc3x8bCkmJnZvaWQgMCE9PXQmJm51bGwhPT10KXt2YXIgYyxmO3I9PT0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuemVyb0xpbmVJbmRleD9pLnplcm9MaW5lSW5kZXg6MCk/KGM9dS56ZXJvTGluZVdpZHRoLGY9dS56ZXJvTGluZUNvbG9yKTooYz1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmxpbmVXaWR0aCxyKSxmPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuY29sb3IscikpO3ZhciBwLG0sYix2LHgsdyxNLEMsRCxJLFQ9XCJtaWRkbGVcIixQPVwibWlkZGxlXCI7aWYoZyl7aHx8KFA9XCJ0b3BcIj09PW4ucG9zaXRpb24/XCJib3R0b21cIjpcInRvcFwiKSxUPWg/XCJyaWdodFwiOlwiY2VudGVyXCI7dmFyIE89aS5nZXRQaXhlbEZvclRpY2socikrZS5hbGlhc1BpeGVsKGMpO0Q9aS5nZXRQaXhlbEZvclRpY2socix1Lm9mZnNldEdyaWRMaW5lcykrZC5sYWJlbE9mZnNldCxJPWg/aS50b3ArMTI6XCJ0b3BcIj09PW4ucG9zaXRpb24/aS5ib3R0b20teTppLnRvcCt5LHA9Yj14PU09TyxtPVYsdj1MLHc9YS50b3AsQz1hLmJvdHRvbX1lbHNle1wibGVmdFwiPT09bi5wb3NpdGlvbj9kLm1pcnJvcj8oRD1pLnJpZ2h0K2QucGFkZGluZyxUPVwibGVmdFwiKTooRD1pLnJpZ2h0LWQucGFkZGluZyxUPVwicmlnaHRcIik6ZC5taXJyb3I/KEQ9aS5sZWZ0LWQucGFkZGluZyxUPVwicmlnaHRcIik6KEQ9aS5sZWZ0K2QucGFkZGluZyxUPVwibGVmdFwiKTt2YXIgQj1pLmdldFBpeGVsRm9yVGljayhyKTtCKz1lLmFsaWFzUGl4ZWwoYyksST1pLmdldFBpeGVsRm9yVGljayhyLHUub2Zmc2V0R3JpZExpbmVzKSxwPV8sYj1SLHg9YS5sZWZ0LE09YS5yaWdodCxtPXY9dz1DPUJ9Ri5wdXNoKHt0eDE6cCx0eTE6bSx0eDI6Yix0eTI6dix4MTp4LHkxOncseDI6TSx5MjpDLGxhYmVsWDpELGxhYmVsWTpJLGdsV2lkdGg6YyxnbENvbG9yOmYsZ2xCb3JkZXJEYXNoOmssZ2xCb3JkZXJEYXNoT2Zmc2V0OlMscm90YXRpb246LTEqQSxsYWJlbDp0LHRleHRCYXNlbGluZTpQLHRleHRBbGlnbjpUfSl9fX0pLGUuZWFjaChGLGZ1bmN0aW9uKHQpe2lmKHUuZGlzcGxheSYmKGwuc2F2ZSgpLGwubGluZVdpZHRoPXQuZ2xXaWR0aCxsLnN0cm9rZVN0eWxlPXQuZ2xDb2xvcixsLnNldExpbmVEYXNoJiYobC5zZXRMaW5lRGFzaCh0LmdsQm9yZGVyRGFzaCksbC5saW5lRGFzaE9mZnNldD10LmdsQm9yZGVyRGFzaE9mZnNldCksbC5iZWdpblBhdGgoKSx1LmRyYXdUaWNrcyYmKGwubW92ZVRvKHQudHgxLHQudHkxKSxsLmxpbmVUbyh0LnR4Mix0LnR5MikpLHUuZHJhd09uQ2hhcnRBcmVhJiYobC5tb3ZlVG8odC54MSx0LnkxKSxsLmxpbmVUbyh0LngyLHQueTIpKSxsLnN0cm9rZSgpLGwucmVzdG9yZSgpKSxkLmRpc3BsYXkpe2wuc2F2ZSgpLGwudHJhbnNsYXRlKHQubGFiZWxYLHQubGFiZWxZKSxsLnJvdGF0ZSh0LnJvdGF0aW9uKSxsLmZvbnQ9eCxsLnRleHRCYXNlbGluZT10LnRleHRCYXNlbGluZSxsLnRleHRBbGlnbj10LnRleHRBbGlnbjt2YXIgYT10LmxhYmVsO2lmKGUuaXNBcnJheShhKSlmb3IodmFyIGk9MCxuPS0oYS5sZW5ndGgtMSkqbSouNzU7aTxhLmxlbmd0aDsrK2kpbC5maWxsVGV4dChcIlwiK2FbaV0sMCxuKSxuKz0xLjUqbTtlbHNlIGwuZmlsbFRleHQoYSwwLDApO2wucmVzdG9yZSgpfX0pLGMuZGlzcGxheSl7dmFyIE8sQixXPTA7aWYoZylPPWkubGVmdCsoaS5yaWdodC1pLmxlZnQpLzIsQj1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbS1NLzI6aS50b3ArTS8yO2Vsc2V7dmFyIHo9XCJsZWZ0XCI9PT1uLnBvc2l0aW9uO089ej9pLmxlZnQrTS8yOmkucmlnaHQtTS8yLEI9aS50b3ArKGkuYm90dG9tLWkudG9wKS8yLFc9ej8tLjUqTWF0aC5QSTouNSpNYXRoLlBJfWwuc2F2ZSgpLGwudHJhbnNsYXRlKE8sQiksbC5yb3RhdGUoVyksbC50ZXh0QWxpZ249XCJjZW50ZXJcIixsLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGwuZmlsbFN0eWxlPXcsbC5mb250PUksbC5maWxsVGV4dChjLmxhYmVsU3RyaW5nLDAsMCksbC5yZXN0b3JlKCl9aWYodS5kcmF3Qm9yZGVyKXtsLmxpbmVXaWR0aD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmxpbmVXaWR0aCwwKSxsLnN0cm9rZVN0eWxlPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuY29sb3IsMCk7dmFyIE49aS5sZWZ0LEU9aS5yaWdodCxIPWkudG9wLFU9aS5ib3R0b20saj1lLmFsaWFzUGl4ZWwobC5saW5lV2lkdGgpO2c/KEg9VT1cInRvcFwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbTppLnRvcCxIKz1qLFUrPWopOihOPUU9XCJsZWZ0XCI9PT1uLnBvc2l0aW9uP2kucmlnaHQ6aS5sZWZ0LE4rPWosRSs9aiksbC5iZWdpblBhdGgoKSxsLm1vdmVUbyhOLEgpLGwubGluZVRvKEUsVSksbC5zdHJva2UoKX19fX0pfX0se31dLDMzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LnNjYWxlU2VydmljZT17Y29uc3RydWN0b3JzOnt9LGRlZmF1bHRzOnt9LHJlZ2lzdGVyU2NhbGVUeXBlOmZ1bmN0aW9uKHQsYSxpKXt0aGlzLmNvbnN0cnVjdG9yc1t0XT1hLHRoaXMuZGVmYXVsdHNbdF09ZS5jbG9uZShpKX0sZ2V0U2NhbGVDb25zdHJ1Y3RvcjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcnMuaGFzT3duUHJvcGVydHkodCk/dGhpcy5jb25zdHJ1Y3RvcnNbdF06dm9pZCAwfSxnZXRTY2FsZURlZmF1bHRzOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRlZmF1bHRzLmhhc093blByb3BlcnR5KGEpP2Uuc2NhbGVNZXJnZSh0LmRlZmF1bHRzLnNjYWxlLHRoaXMuZGVmYXVsdHNbYV0pOnt9fSx1cGRhdGVTY2FsZURlZmF1bHRzOmZ1bmN0aW9uKHQsYSl7dmFyIGk9dGhpcy5kZWZhdWx0cztpLmhhc093blByb3BlcnR5KHQpJiYoaVt0XT1lLmV4dGVuZChpW3RdLGEpKX0sYWRkU2NhbGVzVG9MYXlvdXQ6ZnVuY3Rpb24oYSl7ZS5lYWNoKGEuc2NhbGVzLGZ1bmN0aW9uKGUpe3QubGF5b3V0U2VydmljZS5hZGRCb3goYSxlKX0pfX19fSx7fV0sMzQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuVGlja3M9e2dlbmVyYXRvcnM6e2xpbmVhcjpmdW5jdGlvbih0LGEpe3ZhciBpLG49W107aWYodC5zdGVwU2l6ZSYmdC5zdGVwU2l6ZT4wKWk9dC5zdGVwU2l6ZTtlbHNle3ZhciBvPWUubmljZU51bShhLm1heC1hLm1pbiwhMSk7aT1lLm5pY2VOdW0oby8odC5tYXhUaWNrcy0xKSwhMCl9dmFyIHI9TWF0aC5mbG9vcihhLm1pbi9pKSppLGw9TWF0aC5jZWlsKGEubWF4L2kpKmk7aWYodC5taW4mJnQubWF4JiZ0LnN0ZXBTaXplKXt2YXIgcz0odC5tYXgtdC5taW4pJXQuc3RlcFNpemU9PT0wO3MmJihyPXQubWluLGw9dC5tYXgpfXZhciBkPShsLXIpL2k7ZD1lLmFsbW9zdEVxdWFscyhkLE1hdGgucm91bmQoZCksaS8xZTMpP01hdGgucm91bmQoZCk6TWF0aC5jZWlsKGQpLG4ucHVzaCh2b2lkIDAhPT10Lm1pbj90Lm1pbjpyKTtmb3IodmFyIHU9MTtkPnU7Kyt1KW4ucHVzaChyK3UqaSk7cmV0dXJuIG4ucHVzaCh2b2lkIDAhPT10Lm1heD90Lm1heDpsKSxufSxsb2dhcml0aG1pYzpmdW5jdGlvbih0LGEpe2Zvcih2YXIgaT1bXSxuPWUuZ2V0VmFsdWVPckRlZmF1bHQsbz1uKHQubWluLE1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1pbikpKSk7bzxhLm1heDspe2kucHVzaChvKTt2YXIgcixsOzA9PT1vPyhyPU1hdGguZmxvb3IoZS5sb2cxMChhLm1pbk5vdFplcm8pKSxsPU1hdGgucm91bmQoYS5taW5Ob3RaZXJvL01hdGgucG93KDEwLHIpKSk6KHI9TWF0aC5mbG9vcihlLmxvZzEwKG8pKSxsPU1hdGguZmxvb3Ioby9NYXRoLnBvdygxMCxyKSkrMSksMTA9PT1sJiYobD0xLCsrciksbz1sKk1hdGgucG93KDEwLHIpfXZhciBzPW4odC5tYXgsbyk7cmV0dXJuIGkucHVzaChzKSxpfX0sZm9ybWF0dGVyczp7dmFsdWVzOmZ1bmN0aW9uKHQpe3JldHVybiBlLmlzQXJyYXkodCk/dDpcIlwiK3R9LGxpbmVhcjpmdW5jdGlvbih0LGEsaSl7dmFyIG49aS5sZW5ndGg+Mz9pWzJdLWlbMV06aVsxXS1pWzBdO01hdGguYWJzKG4pPjEmJnQhPT1NYXRoLmZsb29yKHQpJiYobj10LU1hdGguZmxvb3IodCkpO3ZhciBvPWUubG9nMTAoTWF0aC5hYnMobikpLHI9XCJcIjtpZigwIT09dCl7dmFyIGw9LTEqTWF0aC5mbG9vcihvKTtsPU1hdGgubWF4KE1hdGgubWluKGwsMjApLDApLHI9dC50b0ZpeGVkKGwpfWVsc2Ugcj1cIjBcIjtyZXR1cm4gcn0sbG9nYXJpdGhtaWM6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXQvTWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKHQpKSk7cmV0dXJuIDA9PT10P1wiMFwiOjE9PT1ufHwyPT09bnx8NT09PW58fDA9PT1hfHxhPT09aS5sZW5ndGgtMT90LnRvRXhwb25lbnRpYWwoKTpcIlwifX19fX0se31dLDM1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC50aXRsZT17ZGlzcGxheTohMSxwb3NpdGlvbjpcInRvcFwiLGZ1bGxXaWR0aDohMCxmb250U3R5bGU6XCJib2xkXCIscGFkZGluZzoxMCx0ZXh0OlwiXCJ9O3ZhciBhPWUubm9vcDt0LlRpdGxlPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpcztlLmV4dGVuZChpLGEpLGkub3B0aW9ucz1lLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlLGEub3B0aW9ucyksaS5sZWdlbmRIaXRCb3hlcz1bXX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jaGFydC5vcHRpb25zO2EmJmEudGl0bGUmJih0aGlzLm9wdGlvbnM9ZS5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbC50aXRsZSxhLnRpdGxlKSl9LHVwZGF0ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcztyZXR1cm4gaS5iZWZvcmVVcGRhdGUoKSxpLm1heFdpZHRoPXQsaS5tYXhIZWlnaHQ9ZSxpLm1hcmdpbnM9YSxpLmJlZm9yZVNldERpbWVuc2lvbnMoKSxpLnNldERpbWVuc2lvbnMoKSxpLmFmdGVyU2V0RGltZW5zaW9ucygpLGkuYmVmb3JlQnVpbGRMYWJlbHMoKSxpLmJ1aWxkTGFiZWxzKCksaS5hZnRlckJ1aWxkTGFiZWxzKCksaS5iZWZvcmVGaXQoKSxpLmZpdCgpLGkuYWZ0ZXJGaXQoKSxpLmFmdGVyVXBkYXRlKCksaS5taW5TaXplfSxhZnRlclVwZGF0ZTphLGJlZm9yZVNldERpbWVuc2lvbnM6YSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTAsdC5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfX0sYWZ0ZXJTZXREaW1lbnNpb25zOmEsYmVmb3JlQnVpbGRMYWJlbHM6YSxidWlsZExhYmVsczphLGFmdGVyQnVpbGRMYWJlbHM6YSxiZWZvcmVGaXQ6YSxmaXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9ZS5nZXRWYWx1ZU9yRGVmYXVsdCxuPWEub3B0aW9ucyxvPXQuZGVmYXVsdHMuZ2xvYmFsLHI9bi5kaXNwbGF5LGw9aShuLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxzPWEubWluU2l6ZTthLmlzSG9yaXpvbnRhbCgpPyhzLndpZHRoPWEubWF4V2lkdGgscy5oZWlnaHQ9cj9sKzIqbi5wYWRkaW5nOjApOihzLndpZHRoPXI/bCsyKm4ucGFkZGluZzowLHMuaGVpZ2h0PWEubWF4SGVpZ2h0KSxhLndpZHRoPXMud2lkdGgsYS5oZWlnaHQ9cy5oZWlnaHR9LGFmdGVyRml0OmEsaXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnBvc2l0aW9uO3JldHVyblwidG9wXCI9PT10fHxcImJvdHRvbVwiPT09dH0sZHJhdzpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLmN0eCxuPWUuZ2V0VmFsdWVPckRlZmF1bHQsbz1hLm9wdGlvbnMscj10LmRlZmF1bHRzLmdsb2JhbDtpZihvLmRpc3BsYXkpe3ZhciBsLHMsZCx1PW4oby5mb250U2l6ZSxyLmRlZmF1bHRGb250U2l6ZSksYz1uKG8uZm9udFN0eWxlLHIuZGVmYXVsdEZvbnRTdHlsZSksaD1uKG8uZm9udEZhbWlseSxyLmRlZmF1bHRGb250RmFtaWx5KSxmPWUuZm9udFN0cmluZyh1LGMsaCksZz0wLHA9YS50b3AsbT1hLmxlZnQsYj1hLmJvdHRvbSx2PWEucmlnaHQ7aS5maWxsU3R5bGU9bihvLmZvbnRDb2xvcixyLmRlZmF1bHRGb250Q29sb3IpLGkuZm9udD1mLGEuaXNIb3Jpem9udGFsKCk/KGw9bSsodi1tKS8yLHM9cCsoYi1wKS8yLGQ9di1tKToobD1cImxlZnRcIj09PW8ucG9zaXRpb24/bSt1LzI6di11LzIscz1wKyhiLXApLzIsZD1iLXAsZz1NYXRoLlBJKihcImxlZnRcIj09PW8ucG9zaXRpb24/LS41Oi41KSksaS5zYXZlKCksaS50cmFuc2xhdGUobCxzKSxpLnJvdGF0ZShnKSxpLnRleHRBbGlnbj1cImNlbnRlclwiLGkudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsaS5maWxsVGV4dChvLnRleHQsMCwwLGQpLGkucmVzdG9yZSgpfX19KSx0LnBsdWdpbnMucmVnaXN0ZXIoe2JlZm9yZUluaXQ6ZnVuY3Rpb24oZSl7dmFyIGE9ZS5vcHRpb25zLGk9YS50aXRsZTtpJiYoZS50aXRsZUJsb2NrPW5ldyB0LlRpdGxlKHtjdHg6ZS5jaGFydC5jdHgsb3B0aW9uczppLGNoYXJ0OmV9KSx0LmxheW91dFNlcnZpY2UuYWRkQm94KGUsZS50aXRsZUJsb2NrKSl9fSl9fSx7fV0sMzY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhPXMuY29sb3IodCk7cmV0dXJuIGEuYWxwaGEoZSphLmFscGhhKCkpLnJnYmFTdHJpbmcoKX1mdW5jdGlvbiBhKHQsZSl7cmV0dXJuIGUmJihzLmlzQXJyYXkoZSk/QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodCxlKTp0LnB1c2goZSkpLHR9ZnVuY3Rpb24gaSh0KXt2YXIgZT10Ll94U2NhbGUsYT10Ll95U2NhbGV8fHQuX3NjYWxlLGk9dC5faW5kZXgsbj10Ll9kYXRhc2V0SW5kZXg7cmV0dXJue3hMYWJlbDplP2UuZ2V0TGFiZWxGb3JJbmRleChpLG4pOlwiXCIseUxhYmVsOmE/YS5nZXRMYWJlbEZvckluZGV4KGksbik6XCJcIixpbmRleDppLGRhdGFzZXRJbmRleDpuLHg6dC5fbW9kZWwueCx5OnQuX21vZGVsLnl9fWZ1bmN0aW9uIG4oZSl7dmFyIGE9dC5kZWZhdWx0cy5nbG9iYWwsaT1zLmdldFZhbHVlT3JEZWZhdWx0O3JldHVybnt4UGFkZGluZzplLnhQYWRkaW5nLHlQYWRkaW5nOmUueVBhZGRpbmcseEFsaWduOmUueEFsaWduLHlBbGlnbjplLnlBbGlnbixib2R5Rm9udENvbG9yOmUuYm9keUZvbnRDb2xvcixfYm9keUZvbnRGYW1pbHk6aShlLmJvZHlGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF9ib2R5Rm9udFN0eWxlOmkoZS5ib2R5Rm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksX2JvZHlBbGlnbjplLmJvZHlBbGlnbixib2R5Rm9udFNpemU6aShlLmJvZHlGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksYm9keVNwYWNpbmc6ZS5ib2R5U3BhY2luZyx0aXRsZUZvbnRDb2xvcjplLnRpdGxlRm9udENvbG9yLF90aXRsZUZvbnRGYW1pbHk6aShlLnRpdGxlRm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfdGl0bGVGb250U3R5bGU6aShlLnRpdGxlRm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksdGl0bGVGb250U2l6ZTppKGUudGl0bGVGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksX3RpdGxlQWxpZ246ZS50aXRsZUFsaWduLHRpdGxlU3BhY2luZzplLnRpdGxlU3BhY2luZyx0aXRsZU1hcmdpbkJvdHRvbTplLnRpdGxlTWFyZ2luQm90dG9tLGZvb3RlckZvbnRDb2xvcjplLmZvb3RlckZvbnRDb2xvcixfZm9vdGVyRm9udEZhbWlseTppKGUuZm9vdGVyRm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfZm9vdGVyRm9udFN0eWxlOmkoZS5mb290ZXJGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxmb290ZXJGb250U2l6ZTppKGUuZm9vdGVyRm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLF9mb290ZXJBbGlnbjplLmZvb3RlckFsaWduLGZvb3RlclNwYWNpbmc6ZS5mb290ZXJTcGFjaW5nLGZvb3Rlck1hcmdpblRvcDplLmZvb3Rlck1hcmdpblRvcCxjYXJldFNpemU6ZS5jYXJldFNpemUsY29ybmVyUmFkaXVzOmUuY29ybmVyUmFkaXVzLGJhY2tncm91bmRDb2xvcjplLmJhY2tncm91bmRDb2xvcixvcGFjaXR5OjAsbGVnZW5kQ29sb3JCYWNrZ3JvdW5kOmUubXVsdGlLZXlCYWNrZ3JvdW5kLGRpc3BsYXlDb2xvcnM6ZS5kaXNwbGF5Q29sb3JzfX1mdW5jdGlvbiBvKHQsZSl7dmFyIGE9dC5fY2hhcnQuY3R4LGk9MiplLnlQYWRkaW5nLG49MCxvPWUuYm9keSxyPW8ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQrZS5iZWZvcmUubGVuZ3RoK2UubGluZXMubGVuZ3RoK2UuYWZ0ZXIubGVuZ3RofSwwKTtyKz1lLmJlZm9yZUJvZHkubGVuZ3RoK2UuYWZ0ZXJCb2R5Lmxlbmd0aDt2YXIgbD1lLnRpdGxlLmxlbmd0aCxkPWUuZm9vdGVyLmxlbmd0aCx1PWUudGl0bGVGb250U2l6ZSxjPWUuYm9keUZvbnRTaXplLGg9ZS5mb290ZXJGb250U2l6ZTtpKz1sKnUsaSs9bD8obC0xKSplLnRpdGxlU3BhY2luZzowLGkrPWw/ZS50aXRsZU1hcmdpbkJvdHRvbTowLGkrPXIqYyxpKz1yPyhyLTEpKmUuYm9keVNwYWNpbmc6MCxpKz1kP2UuZm9vdGVyTWFyZ2luVG9wOjAsaSs9ZCpoLGkrPWQ/KGQtMSkqZS5mb290ZXJTcGFjaW5nOjA7dmFyIGY9MCxnPWZ1bmN0aW9uKHQpe249TWF0aC5tYXgobixhLm1lYXN1cmVUZXh0KHQpLndpZHRoK2YpfTtyZXR1cm4gYS5mb250PXMuZm9udFN0cmluZyh1LGUuX3RpdGxlRm9udFN0eWxlLGUuX3RpdGxlRm9udEZhbWlseSkscy5lYWNoKGUudGl0bGUsZyksYS5mb250PXMuZm9udFN0cmluZyhjLGUuX2JvZHlGb250U3R5bGUsZS5fYm9keUZvbnRGYW1pbHkpLHMuZWFjaChlLmJlZm9yZUJvZHkuY29uY2F0KGUuYWZ0ZXJCb2R5KSxnKSxmPWUuZGlzcGxheUNvbG9ycz9jKzI6MCxzLmVhY2gobyxmdW5jdGlvbih0KXtzLmVhY2godC5iZWZvcmUsZykscy5lYWNoKHQubGluZXMsZykscy5lYWNoKHQuYWZ0ZXIsZyl9KSxmPTAsYS5mb250PXMuZm9udFN0cmluZyhoLGUuX2Zvb3RlckZvbnRTdHlsZSxlLl9mb290ZXJGb250RmFtaWx5KSxzLmVhY2goZS5mb290ZXIsZyksbis9MiplLnhQYWRkaW5nLHt3aWR0aDpuLGhlaWdodDppfX1mdW5jdGlvbiByKHQsZSl7dmFyIGE9dC5fbW9kZWwsaT10Ll9jaGFydCxuPXQuX2NoYXJ0SW5zdGFuY2UuY2hhcnRBcmVhLG89XCJjZW50ZXJcIixyPVwiY2VudGVyXCI7YS55PGUuaGVpZ2h0P3I9XCJ0b3BcIjphLnk+aS5oZWlnaHQtZS5oZWlnaHQmJihyPVwiYm90dG9tXCIpO3ZhciBsLHMsZCx1LGMsaD0obi5sZWZ0K24ucmlnaHQpLzIsZj0obi50b3Arbi5ib3R0b20pLzI7XCJjZW50ZXJcIj09PXI/KGw9ZnVuY3Rpb24odCl7cmV0dXJuIGg+PXR9LHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+aH0pOihsPWZ1bmN0aW9uKHQpe3JldHVybiB0PD1lLndpZHRoLzJ9LHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PWkud2lkdGgtZS53aWR0aC8yfSksZD1mdW5jdGlvbih0KXtyZXR1cm4gdCtlLndpZHRoPmkud2lkdGh9LHU9ZnVuY3Rpb24odCl7cmV0dXJuIHQtZS53aWR0aDwwfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBmPj10P1widG9wXCI6XCJib3R0b21cIn0sbChhLngpPyhvPVwibGVmdFwiLGQoYS54KSYmKG89XCJjZW50ZXJcIixyPWMoYS55KSkpOnMoYS54KSYmKG89XCJyaWdodFwiLHUoYS54KSYmKG89XCJjZW50ZXJcIixyPWMoYS55KSkpO3ZhciBnPXQuX29wdGlvbnM7cmV0dXJue3hBbGlnbjpnLnhBbGlnbj9nLnhBbGlnbjpvLHlBbGlnbjpnLnlBbGlnbj9nLnlBbGlnbjpyfX1mdW5jdGlvbiBsKHQsZSxhKXt2YXIgaT10Lngsbj10Lnksbz10LmNhcmV0U2l6ZSxyPXQuY2FyZXRQYWRkaW5nLGw9dC5jb3JuZXJSYWRpdXMscz1hLnhBbGlnbixkPWEueUFsaWduLHU9bytyLGM9bCtyO3JldHVyblwicmlnaHRcIj09PXM/aS09ZS53aWR0aDpcImNlbnRlclwiPT09cyYmKGktPWUud2lkdGgvMiksXCJ0b3BcIj09PWQ/bis9dTpuLT1cImJvdHRvbVwiPT09ZD9lLmhlaWdodCt1OmUuaGVpZ2h0LzIsXCJjZW50ZXJcIj09PWQ/XCJsZWZ0XCI9PT1zP2krPXU6XCJyaWdodFwiPT09cyYmKGktPXUpOlwibGVmdFwiPT09cz9pLT1jOlwicmlnaHRcIj09PXMmJihpKz1jKSx7eDppLHk6bn19dmFyIHM9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLnRvb2x0aXBzPXtlbmFibGVkOiEwLGN1c3RvbTpudWxsLG1vZGU6XCJuZWFyZXN0XCIscG9zaXRpb246XCJhdmVyYWdlXCIsaW50ZXJzZWN0OiEwLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsMC44KVwiLHRpdGxlRm9udFN0eWxlOlwiYm9sZFwiLHRpdGxlU3BhY2luZzoyLHRpdGxlTWFyZ2luQm90dG9tOjYsdGl0bGVGb250Q29sb3I6XCIjZmZmXCIsdGl0bGVBbGlnbjpcImxlZnRcIixib2R5U3BhY2luZzoyLGJvZHlGb250Q29sb3I6XCIjZmZmXCIsYm9keUFsaWduOlwibGVmdFwiLGZvb3RlckZvbnRTdHlsZTpcImJvbGRcIixmb290ZXJTcGFjaW5nOjIsZm9vdGVyTWFyZ2luVG9wOjYsZm9vdGVyRm9udENvbG9yOlwiI2ZmZlwiLGZvb3RlckFsaWduOlwibGVmdFwiLHlQYWRkaW5nOjYseFBhZGRpbmc6NixjYXJldFNpemU6NSxjb3JuZXJSYWRpdXM6NixtdWx0aUtleUJhY2tncm91bmQ6XCIjZmZmXCIsZGlzcGxheUNvbG9yczohMCxjYWxsYmFja3M6e2JlZm9yZVRpdGxlOnMubm9vcCx0aXRsZTpmdW5jdGlvbih0LGUpe3ZhciBhPVwiXCIsaT1lLmxhYmVscyxuPWk/aS5sZW5ndGg6MDtpZih0Lmxlbmd0aD4wKXt2YXIgbz10WzBdO28ueExhYmVsP2E9by54TGFiZWw6bj4wJiZvLmluZGV4PG4mJihhPWlbby5pbmRleF0pfXJldHVybiBhfSxhZnRlclRpdGxlOnMubm9vcCxiZWZvcmVCb2R5OnMubm9vcCxiZWZvcmVMYWJlbDpzLm5vb3AsbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIjtyZXR1cm4gYStcIjogXCIrdC55TGFiZWx9LGxhYmVsQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmdldERhdGFzZXRNZXRhKHQuZGF0YXNldEluZGV4KSxpPWEuZGF0YVt0LmluZGV4XSxuPWkuX3ZpZXc7cmV0dXJue2JvcmRlckNvbG9yOm4uYm9yZGVyQ29sb3IsYmFja2dyb3VuZENvbG9yOm4uYmFja2dyb3VuZENvbG9yfX0sYWZ0ZXJMYWJlbDpzLm5vb3AsYWZ0ZXJCb2R5OnMubm9vcCxiZWZvcmVGb290ZXI6cy5ub29wLGZvb3RlcjpzLm5vb3AsYWZ0ZXJGb290ZXI6cy5ub29wfX0sdC5Ub29sdGlwPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl9tb2RlbD1uKHRoaXMuX29wdGlvbnMpfSxnZXRUaXRsZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Ll9vcHRpb25zLGk9ZS5jYWxsYmFja3Msbj1pLmJlZm9yZVRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxvPWkudGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLHI9aS5hZnRlclRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxsPVtdO3JldHVybiBsPWEobCxuKSxsPWEobCxvKSxsPWEobCxyKX0sZ2V0QmVmb3JlQm9keTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX29wdGlvbnMuY2FsbGJhY2tzLmJlZm9yZUJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBzLmlzQXJyYXkodCk/dDp2b2lkIDAhPT10P1t0XTpbXX0sZ2V0Qm9keTpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMsbj1pLl9vcHRpb25zLmNhbGxiYWNrcyxvPVtdO3JldHVybiBzLmVhY2godCxmdW5jdGlvbih0KXt2YXIgcj17YmVmb3JlOltdLGxpbmVzOltdLGFmdGVyOltdfTthKHIuYmVmb3JlLG4uYmVmb3JlTGFiZWwuY2FsbChpLHQsZSkpLGEoci5saW5lcyxuLmxhYmVsLmNhbGwoaSx0LGUpKSxhKHIuYWZ0ZXIsbi5hZnRlckxhYmVsLmNhbGwoaSx0LGUpKSxvLnB1c2gocil9KSxvfSxnZXRBZnRlckJvZHk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9vcHRpb25zLmNhbGxiYWNrcy5hZnRlckJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBzLmlzQXJyYXkodCk/dDp2b2lkIDAhPT10P1t0XTpbXX0sZ2V0Rm9vdGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX29wdGlvbnMuY2FsbGJhY2tzLGk9ZS5iZWZvcmVGb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLG49ZS5mb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLG89ZS5hZnRlckZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cykscj1bXTtyZXR1cm4gcj1hKHIsaSkscj1hKHIsbikscj1hKHIsbyl9LHVwZGF0ZTpmdW5jdGlvbihlKXt2YXIgYSxkLHU9dGhpcyxjPXUuX29wdGlvbnMsaD11Ll9tb2RlbCxmPXUuX21vZGVsPW4oYyksZz11Ll9hY3RpdmUscD11Ll9kYXRhLG09dS5fY2hhcnRJbnN0YW5jZSxiPXt4QWxpZ246aC54QWxpZ24seUFsaWduOmgueUFsaWdufSx2PXt4OmgueCx5OmgueX0seD17d2lkdGg6aC53aWR0aCxoZWlnaHQ6aC5oZWlnaHR9LHk9e3g6aC5jYXJldFgseTpoLmNhcmV0WX07aWYoZy5sZW5ndGgpe2Yub3BhY2l0eT0xO3ZhciBrPVtdO3k9dC5Ub29sdGlwLnBvc2l0aW9uZXJzW2MucG9zaXRpb25dKGcsdS5fZXZlbnRQb3NpdGlvbik7dmFyIFM9W107Zm9yKGE9MCxkPWcubGVuZ3RoO2Q+YTsrK2EpUy5wdXNoKGkoZ1thXSkpO2MuZmlsdGVyJiYoUz1TLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gYy5maWx0ZXIodCxwKX0pKSxjLml0ZW1Tb3J0JiYoUz1TLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gYy5pdGVtU29ydCh0LGUscCl9KSkscy5lYWNoKFMsZnVuY3Rpb24odCl7ay5wdXNoKGMuY2FsbGJhY2tzLmxhYmVsQ29sb3IuY2FsbCh1LHQsbSkpfSksZi50aXRsZT11LmdldFRpdGxlKFMscCksZi5iZWZvcmVCb2R5PXUuZ2V0QmVmb3JlQm9keShTLHApLGYuYm9keT11LmdldEJvZHkoUyxwKSxmLmFmdGVyQm9keT11LmdldEFmdGVyQm9keShTLHApLGYuZm9vdGVyPXUuZ2V0Rm9vdGVyKFMscCksZi54PU1hdGgucm91bmQoeS54KSxmLnk9TWF0aC5yb3VuZCh5LnkpLGYuY2FyZXRQYWRkaW5nPXMuZ2V0VmFsdWVPckRlZmF1bHQoeS5wYWRkaW5nLDIpLGYubGFiZWxDb2xvcnM9ayxmLmRhdGFQb2ludHM9Uyx4PW8odGhpcyxmKSxiPXIodGhpcyx4KSx2PWwoZix4LGIpfWVsc2UgZi5vcGFjaXR5PTA7cmV0dXJuIGYueEFsaWduPWIueEFsaWduLGYueUFsaWduPWIueUFsaWduLGYueD12LngsZi55PXYueSxmLndpZHRoPXgud2lkdGgsZi5oZWlnaHQ9eC5oZWlnaHQsZi5jYXJldFg9eS54LGYuY2FyZXRZPXkueSx1Ll9tb2RlbD1mLGUmJmMuY3VzdG9tJiZjLmN1c3RvbS5jYWxsKHUsZiksdX0sZHJhd0NhcmV0OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbixvLHIsbCxzLGQsdT10aGlzLl92aWV3LGM9dGhpcy5fY2hhcnQuY3R4LGg9dS5jYXJldFNpemUsZj11LmNvcm5lclJhZGl1cyxnPXUueEFsaWduLHA9dS55QWxpZ24sbT10LngsYj10Lnksdj1hLndpZHRoLHg9YS5oZWlnaHQ7XCJjZW50ZXJcIj09PXA/KFwibGVmdFwiPT09Zz8obj1tLG89bi1oLHI9bik6KG49bSt2LG89bitoLHI9bikscz1iK3gvMixsPXMtaCxkPXMraCk6KFwibGVmdFwiPT09Zz8obj1tK2Ysbz1uK2gscj1vK2gpOlwicmlnaHRcIj09PWc/KG49bSt2LWYsbz1uLWgscj1vLWgpOihvPW0rdi8yLG49by1oLHI9bytoKSxcInRvcFwiPT09cD8obD1iLHM9bC1oLGQ9bCk6KGw9Yit4LHM9bCtoLGQ9bCkpLGMuZmlsbFN0eWxlPWUodS5iYWNrZ3JvdW5kQ29sb3IsaSksYy5iZWdpblBhdGgoKSxjLm1vdmVUbyhuLGwpLGMubGluZVRvKG8scyksYy5saW5lVG8ocixkKSxjLmNsb3NlUGF0aCgpLGMuZmlsbCgpfSxkcmF3VGl0bGU6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS50aXRsZTtpZihvLmxlbmd0aCl7aS50ZXh0QWxpZ249YS5fdGl0bGVBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiO3ZhciByPWEudGl0bGVGb250U2l6ZSxsPWEudGl0bGVTcGFjaW5nO2kuZmlsbFN0eWxlPWUoYS50aXRsZUZvbnRDb2xvcixuKSxpLmZvbnQ9cy5mb250U3RyaW5nKHIsYS5fdGl0bGVGb250U3R5bGUsYS5fdGl0bGVGb250RmFtaWx5KTt2YXIgZCx1O2ZvcihkPTAsdT1vLmxlbmd0aDt1PmQ7KytkKWkuZmlsbFRleHQob1tkXSx0LngsdC55KSx0LnkrPXIrbCxkKzE9PT1vLmxlbmd0aCYmKHQueSs9YS50aXRsZU1hcmdpbkJvdHRvbS1sKX19LGRyYXdCb2R5OmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEuYm9keUZvbnRTaXplLHI9YS5ib2R5U3BhY2luZyxsPWEuYm9keTtpLnRleHRBbGlnbj1hLl9ib2R5QWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIjt2YXIgZD1lKGEuYm9keUZvbnRDb2xvcixuKTtpLmZpbGxTdHlsZT1kLGkuZm9udD1zLmZvbnRTdHJpbmcobyxhLl9ib2R5Rm9udFN0eWxlLGEuX2JvZHlGb250RmFtaWx5KTt2YXIgdT0wLGM9ZnVuY3Rpb24oZSl7aS5maWxsVGV4dChlLHQueCt1LHQueSksdC55Kz1vK3J9O3MuZWFjaChhLmJlZm9yZUJvZHksYyk7dmFyIGg9YS5kaXNwbGF5Q29sb3JzO3U9aD9vKzI6MCxzLmVhY2gobCxmdW5jdGlvbihyLGwpe3MuZWFjaChyLmJlZm9yZSxjKSxzLmVhY2goci5saW5lcyxmdW5jdGlvbihyKXtoJiYoaS5maWxsU3R5bGU9ZShhLmxlZ2VuZENvbG9yQmFja2dyb3VuZCxuKSxpLmZpbGxSZWN0KHQueCx0LnksbyxvKSxpLnN0cm9rZVN0eWxlPWUoYS5sYWJlbENvbG9yc1tsXS5ib3JkZXJDb2xvcixuKSxpLnN0cm9rZVJlY3QodC54LHQueSxvLG8pLGkuZmlsbFN0eWxlPWUoYS5sYWJlbENvbG9yc1tsXS5iYWNrZ3JvdW5kQ29sb3IsbiksaS5maWxsUmVjdCh0LngrMSx0LnkrMSxvLTIsby0yKSxpLmZpbGxTdHlsZT1kKSxjKHIpfSkscy5lYWNoKHIuYWZ0ZXIsYyl9KSx1PTAscy5lYWNoKGEuYWZ0ZXJCb2R5LGMpLHQueS09cn0sZHJhd0Zvb3RlcjpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLmZvb3RlcjtvLmxlbmd0aCYmKHQueSs9YS5mb290ZXJNYXJnaW5Ub3AsaS50ZXh0QWxpZ249YS5fZm9vdGVyQWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIixpLmZpbGxTdHlsZT1lKGEuZm9vdGVyRm9udENvbG9yLG4pLGkuZm9udD1zLmZvbnRTdHJpbmcoYS5mb290ZXJGb250U2l6ZSxhLl9mb290ZXJGb250U3R5bGUsYS5fZm9vdGVyRm9udEZhbWlseSkscy5lYWNoKG8sZnVuY3Rpb24oZSl7aS5maWxsVGV4dChlLHQueCx0LnkpLHQueSs9YS5mb290ZXJGb250U2l6ZSthLmZvb3RlclNwYWNpbmd9KSl9LGRyYXdCYWNrZ3JvdW5kOmZ1bmN0aW9uKHQsYSxpLG4sbyl7aS5maWxsU3R5bGU9ZShhLmJhY2tncm91bmRDb2xvcixvKSxzLmRyYXdSb3VuZGVkUmVjdGFuZ2xlKGksdC54LHQueSxuLndpZHRoLG4uaGVpZ2h0LGEuY29ybmVyUmFkaXVzKSxpLmZpbGwoKX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NoYXJ0LmN0eCxlPXRoaXMuX3ZpZXc7aWYoMCE9PWUub3BhY2l0eSl7dmFyIGE9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxpPXt4OmUueCx5OmUueX0sbj1NYXRoLmFicyhlLm9wYWNpdHk8LjAwMSk/MDplLm9wYWNpdHk7dGhpcy5fb3B0aW9ucy5lbmFibGVkJiYodGhpcy5kcmF3QmFja2dyb3VuZChpLGUsdCxhLG4pLHRoaXMuZHJhd0NhcmV0KGksYSxuKSxpLngrPWUueFBhZGRpbmcsaS55Kz1lLnlQYWRkaW5nLHRoaXMuZHJhd1RpdGxlKGksZSx0LG4pLHRoaXMuZHJhd0JvZHkoaSxlLHQsbiksdGhpcy5kcmF3Rm9vdGVyKGksZSx0LG4pKX19LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLl9vcHRpb25zLGk9ITE7aWYoZS5fbGFzdEFjdGl2ZT1lLl9sYXN0QWN0aXZlfHxbXSxcIm1vdXNlb3V0XCI9PT10LnR5cGU/ZS5fYWN0aXZlPVtdOmUuX2FjdGl2ZT1lLl9jaGFydEluc3RhbmNlLmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUodCxhLm1vZGUsYSksaT0hcy5hcnJheUVxdWFscyhlLl9hY3RpdmUsZS5fbGFzdEFjdGl2ZSksZS5fbGFzdEFjdGl2ZT1lLl9hY3RpdmUsYS5lbmFibGVkfHxhLmN1c3RvbSl7ZS5fZXZlbnRQb3NpdGlvbj1zLmdldFJlbGF0aXZlUG9zaXRpb24odCxlLl9jaGFydCk7dmFyIG49ZS5fbW9kZWw7ZS51cGRhdGUoITApLGUucGl2b3QoKSxpfD1uLnghPT1lLl9tb2RlbC54fHxuLnkhPT1lLl9tb2RlbC55fXJldHVybiBpfX0pLHQuVG9vbHRpcC5wb3NpdGlvbmVycz17YXZlcmFnZTpmdW5jdGlvbih0KXtpZighdC5sZW5ndGgpcmV0dXJuITE7dmFyIGUsYSxpPTAsbj0wLG89MDtmb3IoZT0wLGE9dC5sZW5ndGg7YT5lOysrZSl7dmFyIHI9dFtlXTtpZihyJiZyLmhhc1ZhbHVlKCkpe3ZhciBsPXIudG9vbHRpcFBvc2l0aW9uKCk7aSs9bC54LG4rPWwueSwrK299fXJldHVybnt4Ok1hdGgucm91bmQoaS9vKSx5Ok1hdGgucm91bmQobi9vKX19LG5lYXJlc3Q6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLngscj1lLnksbD1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7Zm9yKGk9MCxuPXQubGVuZ3RoO24+aTsrK2kpe3ZhciBkPXRbaV07aWYoZCYmZC5oYXNWYWx1ZSgpKXt2YXIgdT1kLmdldENlbnRlclBvaW50KCksYz1zLmRpc3RhbmNlQmV0d2VlblBvaW50cyhlLHUpO2w+YyYmKGw9YyxhPWQpfX1pZihhKXt2YXIgaD1hLnRvb2x0aXBQb3NpdGlvbigpO289aC54LHI9aC55fXJldHVybnt4Om8seTpyfX19fX0se31dLDM3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsO2EuZWxlbWVudHMuYXJjPXtiYWNrZ3JvdW5kQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyQ29sb3I6XCIjZmZmXCIsYm9yZGVyV2lkdGg6Mn0sdC5lbGVtZW50cy5BcmM9dC5FbGVtZW50LmV4dGVuZCh7aW5MYWJlbFJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLngsMik8TWF0aC5wb3coZS5yYWRpdXMrZS5ob3ZlclJhZGl1cywyKTohMX0saW5SYW5nZTpmdW5jdGlvbih0LGEpe3ZhciBpPXRoaXMuX3ZpZXc7aWYoaSl7Zm9yKHZhciBuPWUuZ2V0QW5nbGVGcm9tUG9pbnQoaSx7eDp0LHk6YX0pLG89bi5hbmdsZSxyPW4uZGlzdGFuY2UsbD1pLnN0YXJ0QW5nbGUscz1pLmVuZEFuZ2xlO2w+czspcys9MipNYXRoLlBJO2Zvcig7bz5zOylvLT0yKk1hdGguUEk7Zm9yKDtsPm87KW8rPTIqTWF0aC5QSTt2YXIgZD1vPj1sJiZzPj1vLHU9cj49aS5pbm5lclJhZGl1cyYmcjw9aS5vdXRlclJhZGl1cztyZXR1cm4gZCYmdX1yZXR1cm4hMX0sZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3LGU9KHQuc3RhcnRBbmdsZSt0LmVuZEFuZ2xlKS8yLGE9KHQuaW5uZXJSYWRpdXMrdC5vdXRlclJhZGl1cykvMjtyZXR1cm57eDp0LngrTWF0aC5jb3MoZSkqYSx5OnQueStNYXRoLnNpbihlKSphfX0sZ2V0QXJlYTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIE1hdGguUEkqKCh0LmVuZEFuZ2xlLXQuc3RhcnRBbmdsZSkvKDIqTWF0aC5QSSkpKihNYXRoLnBvdyh0Lm91dGVyUmFkaXVzLDIpLU1hdGgucG93KHQuaW5uZXJSYWRpdXMsMikpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3LGU9dC5zdGFydEFuZ2xlKyh0LmVuZEFuZ2xlLXQuc3RhcnRBbmdsZSkvMixhPSh0Lm91dGVyUmFkaXVzLXQuaW5uZXJSYWRpdXMpLzIrdC5pbm5lclJhZGl1cztyZXR1cm57eDp0LngrTWF0aC5jb3MoZSkqYSx5OnQueStNYXRoLnNpbihlKSphfX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NoYXJ0LmN0eCxlPXRoaXMuX3ZpZXcsYT1lLnN0YXJ0QW5nbGUsaT1lLmVuZEFuZ2xlO3QuYmVnaW5QYXRoKCksdC5hcmMoZS54LGUueSxlLm91dGVyUmFkaXVzLGEsaSksdC5hcmMoZS54LGUueSxlLmlubmVyUmFkaXVzLGksYSwhMCksdC5jbG9zZVBhdGgoKSx0LnN0cm9rZVN0eWxlPWUuYm9yZGVyQ29sb3IsdC5saW5lV2lkdGg9ZS5ib3JkZXJXaWR0aCx0LmZpbGxTdHlsZT1lLmJhY2tncm91bmRDb2xvcix0LmZpbGwoKSx0LmxpbmVKb2luPVwiYmV2ZWxcIixlLmJvcmRlcldpZHRoJiZ0LnN0cm9rZSgpfX0pfX0se31dLDM4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsO3QuZGVmYXVsdHMuZ2xvYmFsLmVsZW1lbnRzLmxpbmU9e3RlbnNpb246LjQsYmFja2dyb3VuZENvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlcldpZHRoOjMsYm9yZGVyQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyQ2FwU3R5bGU6XCJidXR0XCIsYm9yZGVyRGFzaDpbXSxib3JkZXJEYXNoT2Zmc2V0OjAsYm9yZGVySm9pblN0eWxlOlwibWl0ZXJcIixjYXBCZXppZXJQb2ludHM6ITAsZmlsbDohMH0sdC5lbGVtZW50cy5MaW5lPXQuRWxlbWVudC5leHRlbmQoe2RyYXc6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dmFyIGE9ZS5fdmlldztlLl92aWV3LnN0ZXBwZWRMaW5lPT09ITA/KHMubGluZVRvKGEueCx0Ll92aWV3LnkpLHMubGluZVRvKGEueCxhLnkpKTowPT09ZS5fdmlldy50ZW5zaW9uP3MubGluZVRvKGEueCxhLnkpOnMuYmV6aWVyQ3VydmVUbyh0Ll92aWV3LmNvbnRyb2xQb2ludE5leHRYLHQuX3ZpZXcuY29udHJvbFBvaW50TmV4dFksYS5jb250cm9sUG9pbnRQcmV2aW91c1gsYS5jb250cm9sUG9pbnRQcmV2aW91c1ksYS54LGEueSl9dmFyIGk9dGhpcyxuPWkuX3ZpZXcsbz1uLnNwYW5HYXBzLHI9bi5zY2FsZVplcm8sbD1pLl9sb29wO2x8fChcInRvcFwiPT09bi5maWxsP3I9bi5zY2FsZVRvcDpcImJvdHRvbVwiPT09bi5maWxsJiYocj1uLnNjYWxlQm90dG9tKSk7dmFyIHM9aS5fY2hhcnQuY3R4O3Muc2F2ZSgpO3ZhciBkPWkuX2NoaWxkcmVuLnNsaWNlKCksdT0tMTtsJiZkLmxlbmd0aCYmZC5wdXNoKGRbMF0pO3ZhciBjLGgsZixnO2lmKGQubGVuZ3RoJiZuLmZpbGwpe2ZvcihzLmJlZ2luUGF0aCgpLGM9MDtjPGQubGVuZ3RoOysrYyloPWRbY10sZj1lLnByZXZpb3VzSXRlbShkLGMpLGc9aC5fdmlldywwPT09Yz8obD9zLm1vdmVUbyhyLngsci55KTpzLm1vdmVUbyhnLngsciksZy5za2lwfHwodT1jLHMubGluZVRvKGcueCxnLnkpKSk6KGY9LTE9PT11P2Y6ZFt1XSxnLnNraXA/b3x8dSE9PWMtMXx8KGw/cy5saW5lVG8oci54LHIueSk6cy5saW5lVG8oZi5fdmlldy54LHIpKToodSE9PWMtMT9vJiYtMSE9PXU/dChmLGgpOmw/cy5saW5lVG8oZy54LGcueSk6KHMubGluZVRvKGcueCxyKSxzLmxpbmVUbyhnLngsZy55KSk6dChmLGgpLHU9YykpO2x8fC0xPT09dXx8cy5saW5lVG8oZFt1XS5fdmlldy54LHIpLHMuZmlsbFN0eWxlPW4uYmFja2dyb3VuZENvbG9yfHxhLmRlZmF1bHRDb2xvcixzLmNsb3NlUGF0aCgpLHMuZmlsbCgpfXZhciBwPWEuZWxlbWVudHMubGluZTtmb3Iocy5saW5lQ2FwPW4uYm9yZGVyQ2FwU3R5bGV8fHAuYm9yZGVyQ2FwU3R5bGUscy5zZXRMaW5lRGFzaCYmcy5zZXRMaW5lRGFzaChuLmJvcmRlckRhc2h8fHAuYm9yZGVyRGFzaCkscy5saW5lRGFzaE9mZnNldD1uLmJvcmRlckRhc2hPZmZzZXR8fHAuYm9yZGVyRGFzaE9mZnNldCxzLmxpbmVKb2luPW4uYm9yZGVySm9pblN0eWxlfHxwLmJvcmRlckpvaW5TdHlsZSxzLmxpbmVXaWR0aD1uLmJvcmRlcldpZHRofHxwLmJvcmRlcldpZHRoLHMuc3Ryb2tlU3R5bGU9bi5ib3JkZXJDb2xvcnx8YS5kZWZhdWx0Q29sb3Iscy5iZWdpblBhdGgoKSx1PS0xLGM9MDtjPGQubGVuZ3RoOysrYyloPWRbY10sZj1lLnByZXZpb3VzSXRlbShkLGMpLGc9aC5fdmlldywwPT09Yz9nLnNraXB8fChzLm1vdmVUbyhnLngsZy55KSx1PWMpOihmPS0xPT09dT9mOmRbdV0sZy5za2lwfHwodSE9PWMtMSYmIW98fC0xPT09dT9zLm1vdmVUbyhnLngsZy55KTp0KGYsaCksdT1jKSk7cy5zdHJva2UoKSxzLnJlc3RvcmUoKX19KX19LHt9XSwzOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLngsMik8TWF0aC5wb3coZS5yYWRpdXMrZS5oaXRSYWRpdXMsMik6ITF9ZnVuY3Rpb24gYSh0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS55LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaGl0UmFkaXVzLDIpOiExfXZhciBpPXQuaGVscGVycyxuPXQuZGVmYXVsdHMuZ2xvYmFsLG89bi5kZWZhdWx0Q29sb3I7bi5lbGVtZW50cy5wb2ludD17cmFkaXVzOjMscG9pbnRTdHlsZTpcImNpcmNsZVwiLGJhY2tncm91bmRDb2xvcjpvLGJvcmRlcldpZHRoOjEsYm9yZGVyQ29sb3I6byxoaXRSYWRpdXM6MSxob3ZlclJhZGl1czo0LGhvdmVyQm9yZGVyV2lkdGg6MX0sdC5lbGVtZW50cy5Qb2ludD10LkVsZW1lbnQuZXh0ZW5kKHtpblJhbmdlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcy5fdmlldztyZXR1cm4gYT9NYXRoLnBvdyh0LWEueCwyKStNYXRoLnBvdyhlLWEueSwyKTxNYXRoLnBvdyhhLmhpdFJhZGl1cythLnJhZGl1cywyKTohMX0saW5MYWJlbFJhbmdlOmUsaW5YUmFuZ2U6ZSxpbllSYW5nZTphLGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0Lnl9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguUEkqTWF0aC5wb3codGhpcy5fdmlldy5yYWRpdXMsMil9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55LHBhZGRpbmc6dC5yYWRpdXMrdC5ib3JkZXJXaWR0aH19LGRyYXc6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl92aWV3LGE9dGhpcy5fY2hhcnQuY3R4LHI9ZS5wb2ludFN0eWxlLGw9ZS5yYWRpdXMscz1lLngsZD1lLnk7ZS5za2lwfHwoYS5zdHJva2VTdHlsZT1lLmJvcmRlckNvbG9yfHxvLGEubGluZVdpZHRoPWkuZ2V0VmFsdWVPckRlZmF1bHQoZS5ib3JkZXJXaWR0aCxuLmVsZW1lbnRzLnBvaW50LmJvcmRlcldpZHRoKSxhLmZpbGxTdHlsZT1lLmJhY2tncm91bmRDb2xvcnx8byx0LmNhbnZhc0hlbHBlcnMuZHJhd1BvaW50KGEscixsLHMsZCkpfX0pfX0se31dLDQwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHZvaWQgMCE9PXQuX3ZpZXcud2lkdGh9ZnVuY3Rpb24gYSh0KXt2YXIgYSxpLG4sbyxyPXQuX3ZpZXc7aWYoZSh0KSl7dmFyIGw9ci53aWR0aC8yO2E9ci54LWwsaT1yLngrbCxuPU1hdGgubWluKHIueSxyLmJhc2UpLG89TWF0aC5tYXgoci55LHIuYmFzZSl9ZWxzZXt2YXIgcz1yLmhlaWdodC8yO2E9TWF0aC5taW4oci54LHIuYmFzZSksaT1NYXRoLm1heChyLngsci5iYXNlKSxuPXIueS1zLG89ci55K3N9cmV0dXJue2xlZnQ6YSx0b3A6bixyaWdodDppLGJvdHRvbTpvfX12YXIgaT10LmRlZmF1bHRzLmdsb2JhbDtpLmVsZW1lbnRzLnJlY3RhbmdsZT17YmFja2dyb3VuZENvbG9yOmkuZGVmYXVsdENvbG9yLGJvcmRlcldpZHRoOjAsYm9yZGVyQ29sb3I6aS5kZWZhdWx0Q29sb3IsYm9yZGVyU2tpcHBlZDpcImJvdHRvbVwifSx0LmVsZW1lbnRzLlJlY3RhbmdsZT10LkVsZW1lbnQuZXh0ZW5kKHtkcmF3OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gc1sodSt0KSU0XX12YXIgZT10aGlzLl9jaGFydC5jdHgsYT10aGlzLl92aWV3LGk9YS53aWR0aC8yLG49YS54LWksbz1hLngraSxyPWEuYmFzZS0oYS5iYXNlLWEueSksbD1hLmJvcmRlcldpZHRoLzI7YS5ib3JkZXJXaWR0aCYmKG4rPWwsby09bCxyKz1sKSxlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPWEuYmFja2dyb3VuZENvbG9yLGUuc3Ryb2tlU3R5bGU9YS5ib3JkZXJDb2xvcixlLmxpbmVXaWR0aD1hLmJvcmRlcldpZHRoO3ZhciBzPVtbbixhLmJhc2VdLFtuLHJdLFtvLHJdLFtvLGEuYmFzZV1dLGQ9W1wiYm90dG9tXCIsXCJsZWZ0XCIsXCJ0b3BcIixcInJpZ2h0XCJdLHU9ZC5pbmRleE9mKGEuYm9yZGVyU2tpcHBlZCwwKTstMT09PXUmJih1PTApO3ZhciBjPXQoMCk7ZS5tb3ZlVG8oY1swXSxjWzFdKTtmb3IodmFyIGg9MTs0Pmg7aCsrKWM9dChoKSxlLmxpbmVUbyhjWzBdLGNbMV0pO2UuZmlsbCgpLGEuYm9yZGVyV2lkdGgmJmUuc3Ryb2tlKCl9LGhlaWdodDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIHQuYmFzZS10Lnl9LGluUmFuZ2U6ZnVuY3Rpb24odCxlKXt2YXIgaT0hMTtpZih0aGlzLl92aWV3KXt2YXIgbj1hKHRoaXMpO2k9dD49bi5sZWZ0JiZ0PD1uLnJpZ2h0JiZlPj1uLnRvcCYmZTw9bi5ib3R0b219cmV0dXJuIGl9LGluTGFiZWxSYW5nZTpmdW5jdGlvbih0LGkpe3ZhciBuPXRoaXM7aWYoIW4uX3ZpZXcpcmV0dXJuITE7dmFyIG89ITEscj1hKG4pO3JldHVybiBvPWUobik/dD49ci5sZWZ0JiZ0PD1yLnJpZ2h0Omk+PXIudG9wJiZpPD1yLmJvdHRvbX0saW5YUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9YSh0aGlzKTtyZXR1cm4gdD49ZS5sZWZ0JiZ0PD1lLnJpZ2h0fSxpbllSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpO3JldHVybiB0Pj1lLnRvcCYmdDw9ZS5ib3R0b219LGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQsYSxpPXRoaXMuX3ZpZXc7cmV0dXJuIGUodGhpcyk/KHQ9aS54LGE9KGkueStpLmJhc2UpLzIpOih0PShpLngraS5iYXNlKS8yLGE9aS55KSx7eDp0LHk6YX19LGdldEFyZWE6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiB0LndpZHRoKk1hdGguYWJzKHQueS10LmJhc2UpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueX19fSl9fSx7fV0sNDE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwiYm90dG9tXCJ9LGk9dC5TY2FsZS5leHRlbmQoe2dldExhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuY2hhcnQuZGF0YTtyZXR1cm4odGhpcy5pc0hvcml6b250YWwoKT90LnhMYWJlbHM6dC55TGFiZWxzKXx8dC5sYWJlbHN9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5nZXRMYWJlbHMoKTt0Lm1pbkluZGV4PTAsdC5tYXhJbmRleD1hLmxlbmd0aC0xO3ZhciBpO3ZvaWQgMCE9PXQub3B0aW9ucy50aWNrcy5taW4mJihpPWUuaW5kZXhPZihhLHQub3B0aW9ucy50aWNrcy5taW4pLHQubWluSW5kZXg9LTEhPT1pP2k6dC5taW5JbmRleCksdm9pZCAwIT09dC5vcHRpb25zLnRpY2tzLm1heCYmKGk9ZS5pbmRleE9mKGEsdC5vcHRpb25zLnRpY2tzLm1heCksdC5tYXhJbmRleD0tMSE9PWk/aTp0Lm1heEluZGV4KSx0Lm1pbj1hW3QubWluSW5kZXhdLHQubWF4PWFbdC5tYXhJbmRleF19LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRMYWJlbHMoKTt0LnRpY2tzPTA9PT10Lm1pbkluZGV4JiZ0Lm1heEluZGV4PT09ZS5sZW5ndGgtMT9lOmUuc2xpY2UodC5taW5JbmRleCx0Lm1heEluZGV4KzEpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQuZGF0YSxuPWEuaXNIb3Jpem9udGFsKCk7cmV0dXJuIGkueExhYmVscyYmbnx8aS55TGFiZWxzJiYhbj9hLmdldFJpZ2h0VmFsdWUoaS5kYXRhc2V0c1tlXS5kYXRhW3RdKTphLnRpY2tzW3RdfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXRoaXMsbz1NYXRoLm1heChuLm1heEluZGV4KzEtbi5taW5JbmRleC0obi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKTtpZih2b2lkIDAhPT10JiZpc05hTihlKSl7dmFyIHI9bi5nZXRMYWJlbHMoKSxsPXIuaW5kZXhPZih0KTtlPS0xIT09bD9sOmV9aWYobi5pc0hvcml6b250YWwoKSl7dmFyIHM9bi53aWR0aC0obi5wYWRkaW5nTGVmdCtuLnBhZGRpbmdSaWdodCksZD1zL28sdT1kKihlLW4ubWluSW5kZXgpK24ucGFkZGluZ0xlZnQ7cmV0dXJuKG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiZpfHxuLm1heEluZGV4PT09bi5taW5JbmRleCYmaSkmJih1Kz1kLzIpLFxyXG5uLmxlZnQrTWF0aC5yb3VuZCh1KX12YXIgYz1uLmhlaWdodC0obi5wYWRkaW5nVG9wK24ucGFkZGluZ0JvdHRvbSksaD1jL28sZj1oKihlLW4ubWluSW5kZXgpK24ucGFkZGluZ1RvcDtyZXR1cm4gbi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJmkmJihmKz1oLzIpLG4udG9wK01hdGgucm91bmQoZil9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrc1t0XSx0K3RoaXMubWluSW5kZXgsbnVsbCxlKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1NYXRoLm1heChhLnRpY2tzLmxlbmd0aC0oYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKSxuPWEuaXNIb3Jpem9udGFsKCksbz1uP2Eud2lkdGgtKGEucGFkZGluZ0xlZnQrYS5wYWRkaW5nUmlnaHQpOmEuaGVpZ2h0LShhLnBhZGRpbmdUb3ArYS5wYWRkaW5nQm90dG9tKSxyPW8vaTtyZXR1cm4gdC09bj9hLmxlZnQ6YS50b3AsYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJih0LT1yLzIpLHQtPW4/YS5wYWRkaW5nTGVmdDphLnBhZGRpbmdUb3AsZT0wPj10PzA6TWF0aC5yb3VuZCh0L3IpfSxnZXRCYXNlUGl4ZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ib3R0b219fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJjYXRlZ29yeVwiLGksYSl9fSx7fV0sNDI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwibGVmdFwiLHRpY2tzOntjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubGluZWFyfX0saT10LkxpbmVhclNjYWxlQmFzZS5leHRlbmQoe2RldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBsP3QueEF4aXNJRD09PWEuaWQ6dC55QXhpc0lEPT09YS5pZH12YXIgYT10aGlzLGk9YS5vcHRpb25zLG49YS5jaGFydCxvPW4uZGF0YSxyPW8uZGF0YXNldHMsbD1hLmlzSG9yaXpvbnRhbCgpO2lmKGEubWluPW51bGwsYS5tYXg9bnVsbCxpLnN0YWNrZWQpe3ZhciBzPXt9O2UuZWFjaChyLGZ1bmN0aW9uKG8scil7dmFyIGw9bi5nZXREYXRhc2V0TWV0YShyKTt2b2lkIDA9PT1zW2wudHlwZV0mJihzW2wudHlwZV09e3Bvc2l0aXZlVmFsdWVzOltdLG5lZ2F0aXZlVmFsdWVzOltdfSk7dmFyIGQ9c1tsLnR5cGVdLnBvc2l0aXZlVmFsdWVzLHU9c1tsLnR5cGVdLm5lZ2F0aXZlVmFsdWVzO24uaXNEYXRhc2V0VmlzaWJsZShyKSYmdChsKSYmZS5lYWNoKG8uZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBuPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4obil8fGwuZGF0YVtlXS5oaWRkZW58fChkW2VdPWRbZV18fDAsdVtlXT11W2VdfHwwLGkucmVsYXRpdmVQb2ludHM/ZFtlXT0xMDA6MD5uP3VbZV0rPW46ZFtlXSs9bil9KX0pLGUuZWFjaChzLGZ1bmN0aW9uKHQpe3ZhciBpPXQucG9zaXRpdmVWYWx1ZXMuY29uY2F0KHQubmVnYXRpdmVWYWx1ZXMpLG49ZS5taW4oaSksbz1lLm1heChpKTthLm1pbj1udWxsPT09YS5taW4/bjpNYXRoLm1pbihhLm1pbixuKSxhLm1heD1udWxsPT09YS5tYXg/bzpNYXRoLm1heChhLm1heCxvKX0pfWVsc2UgZS5lYWNoKHIsZnVuY3Rpb24oaSxvKXt2YXIgcj1uLmdldERhdGFzZXRNZXRhKG8pO24uaXNEYXRhc2V0VmlzaWJsZShvKSYmdChyKSYmZS5lYWNoKGkuZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBpPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4oaSl8fHIuZGF0YVtlXS5oaWRkZW58fChudWxsPT09YS5taW4/YS5taW49aTppPGEubWluJiYoYS5taW49aSksbnVsbD09PWEubWF4P2EubWF4PWk6aT5hLm1heCYmKGEubWF4PWkpKX0pfSk7dGhpcy5oYW5kbGVUaWNrUmFuZ2VPcHRpb25zKCl9LGdldFRpY2tMaW1pdDpmdW5jdGlvbigpe3ZhciBhLGk9dGhpcyxuPWkub3B0aW9ucy50aWNrcztpZihpLmlzSG9yaXpvbnRhbCgpKWE9TWF0aC5taW4obi5tYXhUaWNrc0xpbWl0P24ubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwoaS53aWR0aC81MCkpO2Vsc2V7dmFyIG89ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZvbnRTaXplLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSk7YT1NYXRoLm1pbihuLm1heFRpY2tzTGltaXQ/bi5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbChpLmhlaWdodC8oMipvKSkpfXJldHVybiBhfSxoYW5kbGVEaXJlY3Rpb25hbENoYW5nZXM6ZnVuY3Rpb24oKXt0aGlzLmlzSG9yaXpvbnRhbCgpfHx0aGlzLnRpY2tzLnJldmVyc2UoKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10aGlzLG49aS5wYWRkaW5nTGVmdCxvPWkucGFkZGluZ0JvdHRvbSxyPWkuc3RhcnQsbD0raS5nZXRSaWdodFZhbHVlKHQpLHM9aS5lbmQtcjtyZXR1cm4gaS5pc0hvcml6b250YWwoKT8oYT1pLndpZHRoLShuK2kucGFkZGluZ1JpZ2h0KSxlPWkubGVmdCthL3MqKGwtciksTWF0aC5yb3VuZChlK24pKTooYT1pLmhlaWdodC0oaS5wYWRkaW5nVG9wK28pLGU9aS5ib3R0b20tby1hL3MqKGwtciksTWF0aC5yb3VuZChlKSl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuaXNIb3Jpem9udGFsKCksaT1lLnBhZGRpbmdMZWZ0LG49ZS5wYWRkaW5nQm90dG9tLG89YT9lLndpZHRoLShpK2UucGFkZGluZ1JpZ2h0KTplLmhlaWdodC0oZS5wYWRkaW5nVG9wK24pLHI9KGE/dC1lLmxlZnQtaTplLmJvdHRvbS1uLXQpL287cmV0dXJuIGUuc3RhcnQrKGUuZW5kLWUuc3RhcnQpKnJ9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja3NBc051bWJlcnNbdF0pfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwibGluZWFyXCIsaSxhKX19LHt9XSw0MzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT1lLm5vb3A7dC5MaW5lYXJTY2FsZUJhc2U9dC5TY2FsZS5leHRlbmQoe2hhbmRsZVRpY2tSYW5nZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5vcHRpb25zLGk9YS50aWNrcztpZihpLmJlZ2luQXRaZXJvKXt2YXIgbj1lLnNpZ24odC5taW4pLG89ZS5zaWduKHQubWF4KTswPm4mJjA+bz90Lm1heD0wOm4+MCYmbz4wJiYodC5taW49MCl9dm9pZCAwIT09aS5taW4/dC5taW49aS5taW46dm9pZCAwIT09aS5zdWdnZXN0ZWRNaW4mJih0Lm1pbj1NYXRoLm1pbih0Lm1pbixpLnN1Z2dlc3RlZE1pbikpLHZvaWQgMCE9PWkubWF4P3QubWF4PWkubWF4OnZvaWQgMCE9PWkuc3VnZ2VzdGVkTWF4JiYodC5tYXg9TWF0aC5tYXgodC5tYXgsaS5zdWdnZXN0ZWRNYXgpKSx0Lm1pbj09PXQubWF4JiYodC5tYXgrKyxpLmJlZ2luQXRaZXJvfHx0Lm1pbi0tKX0sZ2V0VGlja0xpbWl0OmEsaGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzOmEsYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89YS5nZXRUaWNrTGltaXQoKTtvPU1hdGgubWF4KDIsbyk7dmFyIHI9e21heFRpY2tzOm8sbWluOm4ubWluLG1heDpuLm1heCxzdGVwU2l6ZTplLmdldFZhbHVlT3JEZWZhdWx0KG4uZml4ZWRTdGVwU2l6ZSxuLnN0ZXBTaXplKX0sbD1hLnRpY2tzPXQuVGlja3MuZ2VuZXJhdG9ycy5saW5lYXIocixhKTthLmhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlcygpLGEubWF4PWUubWF4KGwpLGEubWluPWUubWluKGwpLG4ucmV2ZXJzZT8obC5yZXZlcnNlKCksYS5zdGFydD1hLm1heCxhLmVuZD1hLm1pbik6KGEuc3RhcnQ9YS5taW4sYS5lbmQ9YS5tYXgpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS50aWNrc0FzTnVtYmVycz1lLnRpY2tzLnNsaWNlKCksZS56ZXJvTGluZUluZGV4PWUudGlja3MuaW5kZXhPZigwKSx0LlNjYWxlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKGUpfX0pfX0se31dLDQ0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImxlZnRcIix0aWNrczp7Y2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxvZ2FyaXRobWljfX0saT10LlNjYWxlLmV4dGVuZCh7ZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIGQ/dC54QXhpc0lEPT09YS5pZDp0LnlBeGlzSUQ9PT1hLmlkfXZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89YS5jaGFydCxyPW8uZGF0YSxsPXIuZGF0YXNldHMscz1lLmdldFZhbHVlT3JEZWZhdWx0LGQ9YS5pc0hvcml6b250YWwoKTtpZihhLm1pbj1udWxsLGEubWF4PW51bGwsYS5taW5Ob3RaZXJvPW51bGwsaS5zdGFja2VkKXt2YXIgdT17fTtlLmVhY2gobCxmdW5jdGlvbihuLHIpe3ZhciBsPW8uZ2V0RGF0YXNldE1ldGEocik7by5pc0RhdGFzZXRWaXNpYmxlKHIpJiZ0KGwpJiYodm9pZCAwPT09dVtsLnR5cGVdJiYodVtsLnR5cGVdPVtdKSxlLmVhY2gobi5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIG49dVtsLnR5cGVdLG89K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihvKXx8bC5kYXRhW2VdLmhpZGRlbnx8KG5bZV09bltlXXx8MCxpLnJlbGF0aXZlUG9pbnRzP25bZV09MTAwOm5bZV0rPW8pfSkpfSksZS5lYWNoKHUsZnVuY3Rpb24odCl7dmFyIGk9ZS5taW4odCksbj1lLm1heCh0KTthLm1pbj1udWxsPT09YS5taW4/aTpNYXRoLm1pbihhLm1pbixpKSxhLm1heD1udWxsPT09YS5tYXg/bjpNYXRoLm1heChhLm1heCxuKX0pfWVsc2UgZS5lYWNoKGwsZnVuY3Rpb24oaSxuKXt2YXIgcj1vLmdldERhdGFzZXRNZXRhKG4pO28uaXNEYXRhc2V0VmlzaWJsZShuKSYmdChyKSYmZS5lYWNoKGkuZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBpPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4oaSl8fHIuZGF0YVtlXS5oaWRkZW58fChudWxsPT09YS5taW4/YS5taW49aTppPGEubWluJiYoYS5taW49aSksbnVsbD09PWEubWF4P2EubWF4PWk6aT5hLm1heCYmKGEubWF4PWkpLDAhPT1pJiYobnVsbD09PWEubWluTm90WmVyb3x8aTxhLm1pbk5vdFplcm8pJiYoYS5taW5Ob3RaZXJvPWkpKX0pfSk7YS5taW49cyhuLm1pbixhLm1pbiksYS5tYXg9cyhuLm1heCxhLm1heCksYS5taW49PT1hLm1heCYmKDAhPT1hLm1pbiYmbnVsbCE9PWEubWluPyhhLm1pbj1NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5taW4pKS0xKSxhLm1heD1NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5tYXgpKSsxKSk6KGEubWluPTEsYS5tYXg9MTApKX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89e21pbjpuLm1pbixtYXg6bi5tYXh9LHI9YS50aWNrcz10LlRpY2tzLmdlbmVyYXRvcnMubG9nYXJpdGhtaWMobyxhKTthLmlzSG9yaXpvbnRhbCgpfHxyLnJldmVyc2UoKSxhLm1heD1lLm1heChyKSxhLm1pbj1lLm1pbihyKSxuLnJldmVyc2U/KHIucmV2ZXJzZSgpLGEuc3RhcnQ9YS5tYXgsYS5lbmQ9YS5taW4pOihhLnN0YXJ0PWEubWluLGEuZW5kPWEubWF4KX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt0aGlzLnRpY2tWYWx1ZXM9dGhpcy50aWNrcy5zbGljZSgpLHQuU2NhbGUucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwodGhpcyl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrVmFsdWVzW3RdKX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgYSxpLG4sbz10aGlzLHI9by5zdGFydCxsPStvLmdldFJpZ2h0VmFsdWUodCkscz1vLnBhZGRpbmdUb3AsZD1vLnBhZGRpbmdCb3R0b20sdT1vLnBhZGRpbmdMZWZ0LGM9by5vcHRpb25zLGg9Yy50aWNrcztyZXR1cm4gby5pc0hvcml6b250YWwoKT8obj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKHIpLDA9PT1sP2k9by5sZWZ0K3U6KGE9by53aWR0aC0odStvLnBhZGRpbmdSaWdodCksaT1vLmxlZnQrYS9uKihlLmxvZzEwKGwpLWUubG9nMTAocikpLGkrPXUpKTooYT1vLmhlaWdodC0ocytkKSwwIT09cnx8aC5yZXZlcnNlPzA9PT1vLmVuZCYmaC5yZXZlcnNlPyhuPWUubG9nMTAoby5zdGFydCktZS5sb2cxMChvLm1pbk5vdFplcm8pLGk9bD09PW8uZW5kP28udG9wK3M6bD09PW8ubWluTm90WmVybz9vLnRvcCtzKy4wMiphOm8udG9wK3MrLjAyKmErLjk4KmEvbiooZS5sb2cxMChsKS1lLmxvZzEwKG8ubWluTm90WmVybykpKToobj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKHIpLGE9by5oZWlnaHQtKHMrZCksaT1vLmJvdHRvbS1kLWEvbiooZS5sb2cxMChsKS1lLmxvZzEwKHIpKSk6KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChvLm1pbk5vdFplcm8pLGk9bD09PXI/by5ib3R0b20tZDpsPT09by5taW5Ob3RaZXJvP28uYm90dG9tLWQtLjAyKmE6by5ib3R0b20tZC0uMDIqYS0uOTgqYS9uKihlLmxvZzEwKGwpLWUubG9nMTAoby5taW5Ob3RaZXJvKSkpKSxpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBhLGksbj10aGlzLG89ZS5sb2cxMChuLmVuZCktZS5sb2cxMChuLnN0YXJ0KTtyZXR1cm4gbi5pc0hvcml6b250YWwoKT8oaT1uLndpZHRoLShuLnBhZGRpbmdMZWZ0K24ucGFkZGluZ1JpZ2h0KSxhPW4uc3RhcnQqTWF0aC5wb3coMTAsKHQtbi5sZWZ0LW4ucGFkZGluZ0xlZnQpKm8vaSkpOihpPW4uaGVpZ2h0LShuLnBhZGRpbmdUb3Arbi5wYWRkaW5nQm90dG9tKSxhPU1hdGgucG93KDEwLChuLmJvdHRvbS1uLnBhZGRpbmdCb3R0b20tdCkqby9pKS9uLnN0YXJ0KSxhfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwibG9nYXJpdGhtaWNcIixpLGEpfX0se31dLDQ1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsLGk9e2Rpc3BsYXk6ITAsYW5pbWF0ZTohMCxsaW5lQXJjOiExLHBvc2l0aW9uOlwiY2hhcnRBcmVhXCIsYW5nbGVMaW5lczp7ZGlzcGxheTohMCxjb2xvcjpcInJnYmEoMCwgMCwgMCwgMC4xKVwiLGxpbmVXaWR0aDoxfSx0aWNrczp7c2hvd0xhYmVsQmFja2Ryb3A6ITAsYmFja2Ryb3BDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC43NSlcIixiYWNrZHJvcFBhZGRpbmdZOjIsYmFja2Ryb3BQYWRkaW5nWDoyLGNhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5saW5lYXJ9LHBvaW50TGFiZWxzOntmb250U2l6ZToxMCxjYWxsYmFjazpmdW5jdGlvbih0KXtyZXR1cm4gdH19fSxuPXQuTGluZWFyU2NhbGVCYXNlLmV4dGVuZCh7Z2V0VmFsdWVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aH0sc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10Lm9wdGlvbnMsbj1pLnRpY2tzO3Qud2lkdGg9dC5tYXhXaWR0aCx0LmhlaWdodD10Lm1heEhlaWdodCx0LnhDZW50ZXI9TWF0aC5yb3VuZCh0LndpZHRoLzIpLHQueUNlbnRlcj1NYXRoLnJvdW5kKHQuaGVpZ2h0LzIpO3ZhciBvPWUubWluKFt0LmhlaWdodCx0LndpZHRoXSkscj1lLmdldFZhbHVlT3JEZWZhdWx0KG4uZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpO3QuZHJhd2luZ0FyZWE9aS5kaXNwbGF5P28vMi0oci8yK24uYmFja2Ryb3BQYWRkaW5nWSk6by8yfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQuY2hhcnQ7dC5taW49bnVsbCx0Lm1heD1udWxsLGUuZWFjaChhLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oaSxuKXtpZihhLmlzRGF0YXNldFZpc2libGUobikpe3ZhciBvPWEuZ2V0RGF0YXNldE1ldGEobik7ZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlLGEpe3ZhciBpPSt0LmdldFJpZ2h0VmFsdWUoZSk7aXNOYU4oaSl8fG8uZGF0YVthXS5oaWRkZW58fChudWxsPT09dC5taW4/dC5taW49aTppPHQubWluJiYodC5taW49aSksbnVsbD09PXQubWF4P3QubWF4PWk6aT50Lm1heCYmKHQubWF4PWkpKX0pfX0pLHQuaGFuZGxlVGlja1JhbmdlT3B0aW9ucygpfSxnZXRUaWNrTGltaXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMudGlja3MsaT1lLmdldFZhbHVlT3JEZWZhdWx0KHQuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpO3JldHVybiBNYXRoLm1pbih0Lm1heFRpY2tzTGltaXQ/dC5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbCh0aGlzLmRyYXdpbmdBcmVhLygxLjUqaSkpKX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3QuTGluZWFyU2NhbGVCYXNlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKGUpLGUucG9pbnRMYWJlbHM9ZS5jaGFydC5kYXRhLmxhYmVscy5tYXAoZS5vcHRpb25zLnBvaW50TGFiZWxzLmNhbGxiYWNrLGUpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGZpdDpmdW5jdGlvbigpe3ZhciB0LGksbixvLHIsbCxzLGQsdSxjLGgsZixnPXRoaXMub3B0aW9ucy5wb2ludExhYmVscyxwPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksbT1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksYj1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSx2PWUuZm9udFN0cmluZyhwLG0sYikseD1lLm1pbihbdGhpcy5oZWlnaHQvMi1wLTUsdGhpcy53aWR0aC8yXSkseT10aGlzLndpZHRoLGs9MDtmb3IodGhpcy5jdHguZm9udD12LGk9MDtpPHRoaXMuZ2V0VmFsdWVDb3VudCgpO2krKyl7dD10aGlzLmdldFBvaW50UG9zaXRpb24oaSx4KSxuPXRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRoaXMucG9pbnRMYWJlbHNbaV0/dGhpcy5wb2ludExhYmVsc1tpXTpcIlwiKS53aWR0aCs1O3ZhciBTPXRoaXMuZ2V0SW5kZXhBbmdsZShpKStNYXRoLlBJLzIsdz0zNjAqUy8oMipNYXRoLlBJKSUzNjA7MD09PXd8fDE4MD09PXc/KG89bi8yLHQueCtvPnkmJih5PXQueCtvLHI9aSksdC54LW88ayYmKGs9dC54LW8scz1pKSk6MTgwPnc/dC54K24+eSYmKHk9dC54K24scj1pKTp0LngtbjxrJiYoaz10LngtbixzPWkpfXU9ayxjPU1hdGguY2VpbCh5LXRoaXMud2lkdGgpLGw9dGhpcy5nZXRJbmRleEFuZ2xlKHIpLGQ9dGhpcy5nZXRJbmRleEFuZ2xlKHMpLGg9Yy9NYXRoLnNpbihsK01hdGguUEkvMiksZj11L01hdGguc2luKGQrTWF0aC5QSS8yKSxoPWUuaXNOdW1iZXIoaCk/aDowLGY9ZS5pc051bWJlcihmKT9mOjAsdGhpcy5kcmF3aW5nQXJlYT1NYXRoLnJvdW5kKHgtKGYraCkvMiksdGhpcy5zZXRDZW50ZXJQb2ludChmLGgpfSxzZXRDZW50ZXJQb2ludDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLndpZHRoLWUtYS5kcmF3aW5nQXJlYSxuPXQrYS5kcmF3aW5nQXJlYTthLnhDZW50ZXI9TWF0aC5yb3VuZCgobitpKS8yK2EubGVmdCksYS55Q2VudGVyPU1hdGgucm91bmQoYS5oZWlnaHQvMithLnRvcCl9LGdldEluZGV4QW5nbGU6ZnVuY3Rpb24odCl7dmFyIGU9MipNYXRoLlBJL3RoaXMuZ2V0VmFsdWVDb3VudCgpLGE9dGhpcy5jaGFydC5vcHRpb25zJiZ0aGlzLmNoYXJ0Lm9wdGlvbnMuc3RhcnRBbmdsZT90aGlzLmNoYXJ0Lm9wdGlvbnMuc3RhcnRBbmdsZTowLGk9YSpNYXRoLlBJKjIvMzYwO3JldHVybiB0KmUtTWF0aC5QSS8yK2l9LGdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYobnVsbD09PXQpcmV0dXJuIDA7dmFyIGE9ZS5kcmF3aW5nQXJlYS8oZS5tYXgtZS5taW4pO3JldHVybiBlLm9wdGlvbnMucmV2ZXJzZT8oZS5tYXgtdCkqYToodC1lLm1pbikqYX0sZ2V0UG9pbnRQb3NpdGlvbjpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldEluZGV4QW5nbGUodCk7cmV0dXJue3g6TWF0aC5yb3VuZChNYXRoLmNvcyhpKSplKSthLnhDZW50ZXIseTpNYXRoLnJvdW5kKE1hdGguc2luKGkpKmUpK2EueUNlbnRlcn19LGdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdldFBvaW50UG9zaXRpb24odCx0aGlzLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKGUpKX0sZ2V0QmFzZVBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQubWluLGE9dC5tYXg7cmV0dXJuIHQuZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlKDAsdC5iZWdpbkF0WmVybz8wOjA+ZSYmMD5hP2E6ZT4wJiZhPjA/ZTowKX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10Lm9wdGlvbnMsbj1pLmdyaWRMaW5lcyxvPWkudGlja3Mscj1pLmFuZ2xlTGluZXMsbD1pLnBvaW50TGFiZWxzLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdDtpZihpLmRpc3BsYXkpe3ZhciBkPXQuY3R4LHU9cyhvLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxjPXMoby5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxoPXMoby5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLGY9ZS5mb250U3RyaW5nKHUsYyxoKTtpZihlLmVhY2godC50aWNrcyxmdW5jdGlvbihyLGwpe2lmKGw+MHx8aS5yZXZlcnNlKXt2YXIgYz10LmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHQudGlja3NBc051bWJlcnNbbF0pLGg9dC55Q2VudGVyLWM7aWYobi5kaXNwbGF5JiYwIT09bClpZihkLnN0cm9rZVN0eWxlPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4uY29sb3IsbC0xKSxkLmxpbmVXaWR0aD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmxpbmVXaWR0aCxsLTEpLGkubGluZUFyYylkLmJlZ2luUGF0aCgpLGQuYXJjKHQueENlbnRlcix0LnlDZW50ZXIsYywwLDIqTWF0aC5QSSksZC5jbG9zZVBhdGgoKSxkLnN0cm9rZSgpO2Vsc2V7ZC5iZWdpblBhdGgoKTtmb3IodmFyIGc9MDtnPHQuZ2V0VmFsdWVDb3VudCgpO2crKyl7dmFyIHA9dC5nZXRQb2ludFBvc2l0aW9uKGcsYyk7MD09PWc/ZC5tb3ZlVG8ocC54LHAueSk6ZC5saW5lVG8ocC54LHAueSl9ZC5jbG9zZVBhdGgoKSxkLnN0cm9rZSgpfWlmKG8uZGlzcGxheSl7dmFyIG09cyhvLmZvbnRDb2xvcixhLmRlZmF1bHRGb250Q29sb3IpO2lmKGQuZm9udD1mLG8uc2hvd0xhYmVsQmFja2Ryb3Ape3ZhciBiPWQubWVhc3VyZVRleHQocikud2lkdGg7ZC5maWxsU3R5bGU9by5iYWNrZHJvcENvbG9yLGQuZmlsbFJlY3QodC54Q2VudGVyLWIvMi1vLmJhY2tkcm9wUGFkZGluZ1gsaC11LzItby5iYWNrZHJvcFBhZGRpbmdZLGIrMipvLmJhY2tkcm9wUGFkZGluZ1gsdSsyKm8uYmFja2Ryb3BQYWRkaW5nWSl9ZC50ZXh0QWxpZ249XCJjZW50ZXJcIixkLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGQuZmlsbFN0eWxlPW0sZC5maWxsVGV4dChyLHQueENlbnRlcixoKX19fSksIWkubGluZUFyYyl7ZC5saW5lV2lkdGg9ci5saW5lV2lkdGgsZC5zdHJva2VTdHlsZT1yLmNvbG9yO2Zvcih2YXIgZz10LmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKGkucmV2ZXJzZT90Lm1pbjp0Lm1heCkscD1zKGwuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLG09cyhsLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGI9cyhsLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksdj1lLmZvbnRTdHJpbmcocCxtLGIpLHg9dC5nZXRWYWx1ZUNvdW50KCktMTt4Pj0wO3gtLSl7aWYoci5kaXNwbGF5KXt2YXIgeT10LmdldFBvaW50UG9zaXRpb24oeCxnKTtkLmJlZ2luUGF0aCgpLGQubW92ZVRvKHQueENlbnRlcix0LnlDZW50ZXIpLGQubGluZVRvKHkueCx5LnkpLGQuc3Ryb2tlKCksZC5jbG9zZVBhdGgoKX12YXIgaz10LmdldFBvaW50UG9zaXRpb24oeCxnKzUpLFM9cyhsLmZvbnRDb2xvcixhLmRlZmF1bHRGb250Q29sb3IpO2QuZm9udD12LGQuZmlsbFN0eWxlPVM7dmFyIHc9dC5wb2ludExhYmVscyxNPXRoaXMuZ2V0SW5kZXhBbmdsZSh4KStNYXRoLlBJLzIsQz0zNjAqTS8oMipNYXRoLlBJKSUzNjA7MD09PUN8fDE4MD09PUM/ZC50ZXh0QWxpZ249XCJjZW50ZXJcIjoxODA+Qz9kLnRleHRBbGlnbj1cImxlZnRcIjpkLnRleHRBbGlnbj1cInJpZ2h0XCIsOTA9PT1DfHwyNzA9PT1DP2QudGV4dEJhc2VsaW5lPVwibWlkZGxlXCI6Qz4yNzB8fDkwPkM/ZC50ZXh0QmFzZWxpbmU9XCJib3R0b21cIjpkLnRleHRCYXNlbGluZT1cInRvcFwiLGQuZmlsbFRleHQod1t4XT93W3hdOlwiXCIsay54LGsueSl9fX19fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJyYWRpYWxMaW5lYXJcIixuLGkpfX0se31dLDQ2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dCgxKTtpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aTp3aW5kb3cubW9tZW50LGUuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17dW5pdHM6W3tuYW1lOlwibWlsbGlzZWNvbmRcIixzdGVwczpbMSwyLDUsMTAsMjAsNTAsMTAwLDI1MCw1MDBdfSx7bmFtZTpcInNlY29uZFwiLHN0ZXBzOlsxLDIsNSwxMCwzMF19LHtuYW1lOlwibWludXRlXCIsc3RlcHM6WzEsMiw1LDEwLDMwXX0se25hbWU6XCJob3VyXCIsc3RlcHM6WzEsMiwzLDYsMTJdfSx7bmFtZTpcImRheVwiLHN0ZXBzOlsxLDIsNV19LHtuYW1lOlwid2Vla1wiLG1heFN0ZXA6NH0se25hbWU6XCJtb250aFwiLG1heFN0ZXA6M30se25hbWU6XCJxdWFydGVyXCIsbWF4U3RlcDo0fSx7bmFtZTpcInllYXJcIixtYXhTdGVwOiExfV19LG49e3Bvc2l0aW9uOlwiYm90dG9tXCIsdGltZTp7cGFyc2VyOiExLGZvcm1hdDohMSx1bml0OiExLHJvdW5kOiExLGRpc3BsYXlGb3JtYXQ6ITEsaXNvV2Vla2RheTohMSxtaW5Vbml0OlwibWlsbGlzZWNvbmRcIixkaXNwbGF5Rm9ybWF0czp7bWlsbGlzZWNvbmQ6XCJoOm1tOnNzLlNTUyBhXCIsc2Vjb25kOlwiaDptbTpzcyBhXCIsbWludXRlOlwiaDptbTpzcyBhXCIsaG91cjpcIk1NTSBELCBoQVwiLGRheTpcImxsXCIsd2VlazpcImxsXCIsbW9udGg6XCJNTU0gWVlZWVwiLHF1YXJ0ZXI6XCJbUV1RIC0gWVlZWVwiLHllYXI6XCJZWVlZXCJ9fSx0aWNrczp7YXV0b1NraXA6ITF9fSxvPXQuU2NhbGUuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiQ2hhcnQuanMgLSBNb21lbnQuanMgY291bGQgbm90IGJlIGZvdW5kISBZb3UgbXVzdCBpbmNsdWRlIGl0IGJlZm9yZSBDaGFydC5qcyB0byB1c2UgdGhlIHRpbWUgc2NhbGUuIERvd25sb2FkIGF0IGh0dHBzOi8vbW9tZW50anMuY29tXCIpO3QuU2NhbGUucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzKX0sZ2V0TGFiZWxNb21lbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbD09PXR8fG51bGw9PT1lP251bGw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMubGFiZWxNb21lbnRzW3RdP3RoaXMubGFiZWxNb21lbnRzW3RdW2VdOm51bGx9LGdldExhYmVsRGlmZjpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7cmV0dXJuIG51bGw9PT10fHxudWxsPT09ZT9udWxsOih2b2lkIDA9PT1hLmxhYmVsRGlmZnMmJmEuYnVpbGRMYWJlbERpZmZzKCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEubGFiZWxEaWZmc1t0XT9hLmxhYmVsRGlmZnNbdF1bZV06bnVsbCl9LGdldE1vbWVudFN0YXJ0T2Y6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm5cIndlZWtcIj09PWUub3B0aW9ucy50aW1lLnVuaXQmJmUub3B0aW9ucy50aW1lLmlzb1dlZWtkYXkhPT0hMT90LmNsb25lKCkuc3RhcnRPZihcImlzb1dlZWtcIikuaXNvV2Vla2RheShlLm9wdGlvbnMudGltZS5pc29XZWVrZGF5KTp0LmNsb25lKCkuc3RhcnRPZihlLnRpY2tVbml0KX0sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sYWJlbE1vbWVudHM9W107dmFyIGE9W107dC5jaGFydC5kYXRhLmxhYmVscyYmdC5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg+MD8oZS5lYWNoKHQuY2hhcnQuZGF0YS5sYWJlbHMsZnVuY3Rpb24oZSl7dmFyIGk9dC5wYXJzZVRpbWUoZSk7aS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmaS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxhLnB1c2goaSkpfSx0KSx0LmZpcnN0VGljaz1pLm1pbi5jYWxsKHQsYSksdC5sYXN0VGljaz1pLm1heC5jYWxsKHQsYSkpOih0LmZpcnN0VGljaz1udWxsLHQubGFzdFRpY2s9bnVsbCksZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihuLG8pe3ZhciByPVtdLGw9dC5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKG8pO1wib2JqZWN0XCI9PXR5cGVvZiBuLmRhdGFbMF0mJm51bGwhPT1uLmRhdGFbMF0/ZS5lYWNoKG4uZGF0YSxmdW5jdGlvbihlKXt2YXIgYT10LnBhcnNlVGltZSh0LmdldFJpZ2h0VmFsdWUoZSkpO2EuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmEuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksci5wdXNoKGEpLGwmJih0LmZpcnN0VGljaz1udWxsIT09dC5maXJzdFRpY2s/aS5taW4odC5maXJzdFRpY2ssYSk6YSx0Lmxhc3RUaWNrPW51bGwhPT10Lmxhc3RUaWNrP2kubWF4KHQubGFzdFRpY2ssYSk6YSkpfSx0KTpyPWEsdC5sYWJlbE1vbWVudHMucHVzaChyKX0sdCksdC5vcHRpb25zLnRpbWUubWluJiYodC5maXJzdFRpY2s9dC5wYXJzZVRpbWUodC5vcHRpb25zLnRpbWUubWluKSksdC5vcHRpb25zLnRpbWUubWF4JiYodC5sYXN0VGljaz10LnBhcnNlVGltZSh0Lm9wdGlvbnMudGltZS5tYXgpKSx0LmZpcnN0VGljaz0odC5maXJzdFRpY2t8fGkoKSkuY2xvbmUoKSx0Lmxhc3RUaWNrPSh0Lmxhc3RUaWNrfHxpKCkpLmNsb25lKCl9LGJ1aWxkTGFiZWxEaWZmczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sYWJlbERpZmZzPVtdO3ZhciBhPVtdO3QuY2hhcnQuZGF0YS5sYWJlbHMmJnQuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoPjAmJmUuZWFjaCh0LmNoYXJ0LmRhdGEubGFiZWxzLGZ1bmN0aW9uKGUpe3ZhciBpPXQucGFyc2VUaW1lKGUpO2kuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmkuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksYS5wdXNoKGkuZGlmZih0LmZpcnN0VGljayx0LnRpY2tVbml0LCEwKSkpfSx0KSxlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGkpe3ZhciBuPVtdO1wib2JqZWN0XCI9PXR5cGVvZiBpLmRhdGFbMF0mJm51bGwhPT1pLmRhdGFbMF0/ZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlKXt2YXIgYT10LnBhcnNlVGltZSh0LmdldFJpZ2h0VmFsdWUoZSkpO2EuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmEuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksbi5wdXNoKGEuZGlmZih0LmZpcnN0VGljayx0LnRpY2tVbml0LCEwKSkpfSx0KTpuPWEsdC5sYWJlbERpZmZzLnB1c2gobil9LHQpfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmN0eC5zYXZlKCk7dmFyIG49ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udFNpemUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplKSxvPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRTdHlsZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFN0eWxlKSxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRGYW1pbHksdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkpLGw9ZS5mb250U3RyaW5nKG4sbyxyKTtpZihpLmN0eC5mb250PWwsaS50aWNrcz1bXSxpLnVuaXRTY2FsZT0xLGkuc2NhbGVTaXplSW5Vbml0cz0wLGkub3B0aW9ucy50aW1lLnVuaXQpaS50aWNrVW5pdD1pLm9wdGlvbnMudGltZS51bml0fHxcImRheVwiLGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1tpLnRpY2tVbml0XSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApLGkudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLDEpO2Vsc2V7dmFyIHM9aS5pc0hvcml6b250YWwoKT9pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KTppLmhlaWdodC0oaS5wYWRkaW5nVG9wK2kucGFkZGluZ0JvdHRvbSksZD1pLnRpY2tGb3JtYXRGdW5jdGlvbihpLmZpcnN0VGljaywwLFtdKSx1PWkuY3R4Lm1lYXN1cmVUZXh0KGQpLndpZHRoLGM9TWF0aC5jb3MoZS50b1JhZGlhbnMoaS5vcHRpb25zLnRpY2tzLm1heFJvdGF0aW9uKSksaD1NYXRoLnNpbihlLnRvUmFkaWFucyhpLm9wdGlvbnMudGlja3MubWF4Um90YXRpb24pKTt1PXUqYytuKmg7dmFyIGY9cy91O2kudGlja1VuaXQ9aS5vcHRpb25zLnRpbWUubWluVW5pdCxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApLGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1tpLnRpY2tVbml0XTtmb3IodmFyIGc9MCxwPWEudW5pdHNbZ107ZzxhLnVuaXRzLmxlbmd0aDspe2lmKGkudW5pdFNjYWxlPTEsZS5pc0FycmF5KHAuc3RlcHMpJiZNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpPGUubWF4KHAuc3RlcHMpKXtmb3IodmFyIG09MDttPHAuc3RlcHMubGVuZ3RoOysrbSlpZihwLnN0ZXBzW21dPj1NYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpKXtpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSxwLnN0ZXBzW21dKTticmVha31icmVha31pZihwLm1heFN0ZXA9PT0hMXx8TWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKTxwLm1heFN0ZXApe2kudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLE1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZikpO2JyZWFrfSsrZyxwPWEudW5pdHNbZ10saS50aWNrVW5pdD1wLm5hbWU7dmFyIGI9aS5maXJzdFRpY2suZGlmZihpLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spLGkudGlja1VuaXQsITApLHY9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2suY2xvbmUoKS5hZGQoMSxpLnRpY2tVbml0KSkuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApO2kuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkrYit2LGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1twLm5hbWVdfX12YXIgeDtpZihpLm9wdGlvbnMudGltZS5taW4/eD1pLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spOihpLmZpcnN0VGljaz1pLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spLHg9aS5maXJzdFRpY2spLCFpLm9wdGlvbnMudGltZS5tYXgpe3ZhciB5PWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrKSxrPXkuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApOzA+az9pLmxhc3RUaWNrPWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrLmFkZCgxLGkudGlja1VuaXQpKTprPj0wJiYoaS5sYXN0VGljaz15KSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApfWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXQmJihpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdCksaS50aWNrcy5wdXNoKGkuZmlyc3RUaWNrLmNsb25lKCkpO2Zvcih2YXIgUz0xO1M8PWkuc2NhbGVTaXplSW5Vbml0czsrK1Mpe3ZhciB3PXguY2xvbmUoKS5hZGQoUyxpLnRpY2tVbml0KTtpZihpLm9wdGlvbnMudGltZS5tYXgmJncuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApPj0wKWJyZWFrO1MlaS51bml0U2NhbGU9PT0wJiZpLnRpY2tzLnB1c2godyl9dmFyIE09aS50aWNrc1tpLnRpY2tzLmxlbmd0aC0xXS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCk7KDAhPT1NfHwwPT09aS5zY2FsZVNpemVJblVuaXRzKSYmKGkub3B0aW9ucy50aW1lLm1heD8oaS50aWNrcy5wdXNoKGkubGFzdFRpY2suY2xvbmUoKSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLnRpY2tzWzBdLGkudGlja1VuaXQsITApKTooaS50aWNrcy5wdXNoKGkubGFzdFRpY2suY2xvbmUoKSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSkpLGkuY3R4LnJlc3RvcmUoKSxpLmxhYmVsRGlmZnM9dm9pZCAwfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQuZGF0YS5sYWJlbHMmJnQ8YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg/YS5jaGFydC5kYXRhLmxhYmVsc1t0XTpcIlwiO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVswXSYmKGk9YS5nZXRSaWdodFZhbHVlKGEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKSksYS5vcHRpb25zLnRpbWUudG9vbHRpcEZvcm1hdCYmKGk9YS5wYXJzZVRpbWUoaSkuZm9ybWF0KGEub3B0aW9ucy50aW1lLnRvb2x0aXBGb3JtYXQpKSxpfSx0aWNrRm9ybWF0RnVuY3Rpb246ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXQuZm9ybWF0KHRoaXMuZGlzcGxheUZvcm1hdCksbz10aGlzLm9wdGlvbnMudGlja3Mscj1lLmdldFZhbHVlT3JEZWZhdWx0KG8uY2FsbGJhY2ssby51c2VyQ2FsbGJhY2spO3JldHVybiByP3IobixhLGkpOm59LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LnRpY2tNb21lbnRzPXQudGlja3MsdC50aWNrcz10LnRpY2tzLm1hcCh0LnRpY2tGb3JtYXRGdW5jdGlvbix0KX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPW51bGw7aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09YSYmKG49aS5nZXRMYWJlbERpZmYoYSxlKSksbnVsbD09PW4mJih0JiZ0LmlzVmFsaWR8fCh0PWkucGFyc2VUaW1lKGkuZ2V0UmlnaHRWYWx1ZSh0KSkpLHQmJnQuaXNWYWxpZCYmdC5pc1ZhbGlkKCkmJihuPXQuZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSkpLG51bGwhPT1uKXt2YXIgbz0wIT09bj9uL2kuc2NhbGVTaXplSW5Vbml0czpuO2lmKGkuaXNIb3Jpem9udGFsKCkpe3ZhciByPWkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpLGw9cipvK2kucGFkZGluZ0xlZnQ7cmV0dXJuIGkubGVmdCtNYXRoLnJvdW5kKGwpfXZhciBzPWkuaGVpZ2h0LShpLnBhZGRpbmdUb3AraS5wYWRkaW5nQm90dG9tKSxkPXMqbytpLnBhZGRpbmdUb3A7cmV0dXJuIGkudG9wK01hdGgucm91bmQoZCl9fSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tNb21lbnRzW3RdLG51bGwsbnVsbCl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuaXNIb3Jpem9udGFsKCk/ZS53aWR0aC0oZS5wYWRkaW5nTGVmdCtlLnBhZGRpbmdSaWdodCk6ZS5oZWlnaHQtKGUucGFkZGluZ1RvcCtlLnBhZGRpbmdCb3R0b20pLG49KHQtKGUuaXNIb3Jpem9udGFsKCk/ZS5sZWZ0K2UucGFkZGluZ0xlZnQ6ZS50b3ArZS5wYWRkaW5nVG9wKSkvYTtyZXR1cm4gbio9ZS5zY2FsZVNpemVJblVuaXRzLGUuZmlyc3RUaWNrLmNsb25lKCkuYWRkKGkuZHVyYXRpb24obixlLnRpY2tVbml0KS5hc1NlY29uZHMoKSxcInNlY29uZHNcIil9LHBhcnNlVGltZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLm9wdGlvbnMudGltZS5wYXJzZXI/aSh0LGUub3B0aW9ucy50aW1lLnBhcnNlcik6XCJmdW5jdGlvblwiPT10eXBlb2YgZS5vcHRpb25zLnRpbWUucGFyc2VyP2Uub3B0aW9ucy50aW1lLnBhcnNlcih0KTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmdldE1vbnRofHxcIm51bWJlclwiPT10eXBlb2YgdD9pKHQpOnQuaXNWYWxpZCYmdC5pc1ZhbGlkKCk/dDpcInN0cmluZ1wiIT10eXBlb2YgZS5vcHRpb25zLnRpbWUuZm9ybWF0JiZlLm9wdGlvbnMudGltZS5mb3JtYXQuY2FsbD8oY29uc29sZS53YXJuKFwib3B0aW9ucy50aW1lLmZvcm1hdCBpcyBkZXByZWNhdGVkIGFuZCByZXBsYWNlZCBieSBvcHRpb25zLnRpbWUucGFyc2VyLiBTZWUgaHR0cDovL25ubmljay5naXRodWIuaW8vQ2hhcnQuanMvZG9jcy12Mi8jc2NhbGVzLXRpbWUtc2NhbGVcIiksZS5vcHRpb25zLnRpbWUuZm9ybWF0KHQpKTppKHQsZS5vcHRpb25zLnRpbWUuZm9ybWF0KX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcInRpbWVcIixvLG4pfX0sezE6MX1dfSx7fSxbN10pKDcpfSk7IiwiLy9QbGF0Zm9ybSBMb2dvJ3NcclxuZnVuY3Rpb24gUGxhdGZvcm1Mb2dvKHBsYXRmb3JtbmFhbSlcclxue1xyXG4gICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBzd2l0Y2ggKHBsYXRmb3JtbmFhbSlcclxuICAgIHtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1uYWFtO1xyXG5cclxuICAgICAgICAvL3BsYXRmb3JtcyAtIHNwZWxjb21wdXRlcnNcclxuICAgICAgICBjYXNlIFwiUFMxXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczEucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMy5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTMlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMyLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiUFM0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczQucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQQ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2luZG93cy5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlhCT1hcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3hib3gucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJORVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25lcy5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk42NFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbjY0LnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiTklOVEVORE8gU1dJVENIXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9zd2l0Y2gucG5nJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOR0NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25nYy5wbmcnIC8+XCI7XHJcblxyXG4gICAgICAgIC8vcHVibGlzaGVycyAtIHVpdGdldmVyc1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9uaW50ZW5kby5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlVCSVNPRlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvdWJpc29mdC5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkVMRUNUUk9OSUMgQVJUU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9lYS5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlNPTllcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc29ueS5wbmcnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlJPQ0tTVEFSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3JvY2tzdGFyLnBuZycgLz5cIjtcclxuICAgICAgICBjYXNlIFwiU0VHQVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9zZWdhLnBuZycgLz5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQmVzY2hpa2JhYXJoZWlkS2xldXIoc3RvY2t2YWx1ZSl7XHJcbiAgICBcclxuICAgICAgICBpZiAoc3RvY2t2YWx1ZTw9MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbnJlZC5wbmcnIC8+XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG9ja3ZhbHVlPj0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9uZ3JlZW4ucG5nJyAvPlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9ja3ZhbHVlXHJcbiAgICAgICAgfVxyXG59IiwiJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImEub3JkZXJfX25hdmlnYXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSA9PSBmYWxzZSlcclxuICAgIHtcclxuICAgICAgICAvLyBHZXQgdGhlIG9yZGVyIHN0ZXBcclxuICAgICAgICB2YXIgc3RlcCA9ICAkKHRoaXMpLmRhdGEoXCJzdGVwXCIpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBvcmRlciBzdGVwIGFzIGFjdGl2ZVxyXG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuXCIgKyBzdGVwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHN0ZXApLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgIH1cclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3NoaXBwaW5nX21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcclxue1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIuc2hpcHBpbmdfX2ZpZWxkc1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLlwiICsgdmFsICsgXCJfZmllbGRzXCIpLnNob3coKTtcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3BheW1lbnRfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxyXG57XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSB8fCB1cmwgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgV2lzaGxpc3RDb250cm9sbGVyKG5ldyBXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFdpc2hsaXN0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFN0YXRzQ29udHJvbGxlcihuZXcgU3RhdHNWaWV3SGVscGVyKCksIG5ldyBTdGF0c01vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pbkNvbnRyb2xsZXIobmV3IEFkbWluVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluX3VzZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pblVzZXJDb250cm9sbGVyKG5ldyBBZG1pblVzZXJWaWV3SGVscGVyKCksIG5ldyBBZG1pblVzZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluc2VydFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluc2VydENvbnRyb2xsZXIobmV3IEFkbWluc2VydFZpZXdIZWxwZXIoKSwgbmV3IEFkbWluc2VydE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVsaXN0XCI6IFxyXG4gICAgICAgICAgICAgICAgbmV3IEZhdm9yaXRlTGlzdENvbnRyb2xsZXIobmV3IEZhdm9yaXRlTGlzdFZpZXdIZWxwZXIoKSwgbmV3IEZhdm9yaXRlTGlzdE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tvdXRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBDaGVja291dENvbnRyb2xsZXIobmV3IENoZWNrb3V0Vmlld0hlbHBlcigpLCBuZXcgQ2hlY2tvdXRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyc0NvbnRyb2xsZXIobmV3IE9yZGVyc1ZpZXdIZWxwZXIsIG5ldyBPcmRlcnNNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJDb250cm9sbGVyKG5ldyBPcmRlclZpZXdIZWxwZXIsIG5ldyBPcmRlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHVibGljX3dpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHVibGljV2lzaGxpc3RDb250cm9sbGVyKG5ldyBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFB1YmxpY1dpc2hsaXN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT0gXCJcIiAmJiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvYWQgc2NyZWVuIGFuZCBjbG9zZSBjYXJ0XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmxheS0tdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0b3Agb2YgcGFnZVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJ3d3dcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJtYWlsdG9cIikgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYXJ0aWNsZXModXJsKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgL1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJhc2UgdXJsIHNldCwgcmVtb3ZlIHRoZSBiYXNlIHVybFxyXG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwgIT0gbnVsbCAmJiB1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICsgdGhpcy5iYXNlVXJsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9cXC8oLispPy8pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVIaXN0b3J5KG9iamVjdCwgdGl0bGUsIHVybClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUob2JqZWN0LCB0aXRsZSwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJvdXRlOiByb3V0ZVxyXG4gICAgfVxyXG59IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxyXG57XHJcbiAgICAkKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIElkIG9mIHRoZSBzaWRlYmFyIHRvIHRvZ2dsZVxyXG4gICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5kYXRhKFwic2lkZWJhclwiKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiI1wiICsgc2lkZWJhcikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zaWRlYmFyX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIub3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIi5zaWRlYmFyXCIpLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoc2lkZWJhciwgZm9yY2VDbG9zZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZm9yY2VDbG9zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoc2lkZWJhcikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKHNpZGViYXIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgfVxyXG59KTsiLCIkKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXJcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudClcclxue1xyXG4gICAgLy8gR2V0IGNvbnRlbnQgYW5kIHBvc2l0aW9uXHJcbiAgICB2YXIgY29udGVudCAgPSAkKHRoaXMpLmRhdGEoXCJ0b29sdGlwXCIpO1xyXG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0T2Zmc2V0KHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0b29sdGlwXHJcbiAgICB2YXIgdG9vbHRpcCA9ICQoXCI8ZGl2IGNsYXNzPSd0b29sdGlwJz5cIiArIGNvbnRlbnQgKyBcIjwvZGl2PlwiKTtcclxuICAgICQoXCJib2R5XCIpLmFwcGVuZCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uc1xyXG4gICAgcG9zaXRpb24udG9wICA9IHBvc2l0aW9uLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgIHBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgKCQodGhpcykub3V0ZXJXaWR0aCgpIC8gMikgLSAoJChcIi50b29sdGlwXCIpLm91dGVyV2lkdGgoKSAvIDIpO1xyXG5cclxuICAgIC8vIENoYW5nZSBwb3NpdGlvbiBvZiB0b29sdGlwXHJcbiAgICB0b29sdGlwLmNzcyhcImxlZnRcIiwgcG9zaXRpb24ubGVmdCk7XHJcbiAgICB0b29sdGlwLmNzcyhcInRvcFwiLCBwb3NpdGlvbi50b3ApO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKFwiYm9keVwiKS5maW5kKFwiLnRvb2x0aXBcIikucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKVxyXG57XHJcbiAgICBlbCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGVsLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcclxuICAgICAgICB0b3A6IGVsLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgZmluZGluZywgY3JlYXRpbmcgYW5kIGRlbGV0aW5nIGNvb2tpZXNcclxuICovXHJcbmZ1bmN0aW9uIENvb2tpZUhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOYW1lIG9mIHRoZSBjb29raWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNyZWF0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTsgXHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDEqMjQqNjAqNjAqMTAwMCkpOyBcclxuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIisgZC50b1VUQ1N0cmluZygpOyBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsnICsgZXhwaXJlcyArICc7cGF0aD0vJzsgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYSBjb29raWUgYW5kIGl0J3MgdmFsdWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmRlbGV0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBGYXZvcml0ZUxpc3RIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIC8vdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHZhciBhZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIGZhdm9yaWV0ZW4uXCIpOyAvLyBpbSBzdGFhdCB2b29yIGltYWdpbmFyeS9kZW5rYmVlbGRpZ1xyXG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW1cclxuICAgIH1cclxufSIsInZhciBSb3V0ZXIgICAgICAgPSBuZXcgUm91dGVyKCk7XHJcbnZhciBDb29raWVIZWxwZXIgPSBuZXcgQ29va2llSGVscGVyKCk7XHJcbnZhciBVc2VySGVscGVyICAgICA9IG5ldyBVc2VySGVscGVyKCk7XHJcbnZhciBXaXNobGlzdEhlbHBlciA9IG5ldyBXaXNobGlzdEhlbHBlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRTY3JlZW4oKVxyXG57XHJcbiAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlM1wiPjwvZGl2PiA8L2Rpdj4nKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTG9hZFBhZ2UoKVxyXG57XHJcbiAgICAkKFwiLm1tZW51XCIpLmVtcHR5KCk7XHJcbiAgICAkKFwiLm5hdlwiKS5jbG9uZSgpLmFwcGVuZFRvKFwiLm1tZW51XCIpO1xyXG5cclxuICAgIGlmIChVc2VySGVscGVyLmlzQWRtaW4oKSlcclxuICAgIHtcclxuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxufSIsIiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgbyA9IHt9O1xyXG4gICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG87XHJcbn07IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgdXNlciByZWxhdGVkIHN0dWZmXHJcbiAqL1xyXG5mdW5jdGlvbiBVc2VySGVscGVyKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBhIGd1ZXN0IChub3QgbG9nZ2VkIGluKVxyXG4gICAgICovXHJcbiAgICB0aGlzLmlzTG9nZWRJbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhIGN1c3RvbWVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNDdXN0b21lciA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImN1c3RvbWVyXCIgfHwgdXNlcnR5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhZG1pblxyXG4gICAgICovXHJcbiAgICB0aGlzLmlzQWRtaW4gPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdXNlcnR5cGUgPSB0aGlzLmRlY29kZVRva2VuKCkudXNlcnR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIHRoZSBKV1QgdG9rZW5cclxuICAgICAqL1xyXG4gICAgdGhpcy5kZWNvZGVUb2tlbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4gIT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VuICAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBhY2Nlc3NUb2tlbi5zcGxpdChcIi5cIilbMV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IHVzZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBXaXNobGlzdEhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgZWFuX251bWJlcixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHt9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSGV0IHByb2R1Y3QgaXMgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIHZlcmxhbmdsaWpzdC5cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGl0IHByb2R1Y3Qgc3RhYXQgYWwgb3AgamUgdmVybGFuZ2xpanN0LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29weUxpbmsgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gU2VsZWN0IHRoZSBjb250ZW50XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3B1YmxpY19saW5rXCIpLnNlbGVjdCgpO1xyXG4gICAgICAgIC8vIENvcHkgdG8gdGhlIGNsaXBib2FyZFxyXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5zZXJ0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZURCKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcclxuICAgICAgICBmb3JtRGF0YS5yZWxlYXNlX2RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhmb3JtRGF0YS5qYWFyLCBmb3JtRGF0YS5tYWFuZCwgZm9ybURhdGEuZGFnKSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmphYXI7XHJcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLm1hYW5kO1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5kYWc7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvYWRtaW4vbmV3X2dhbWVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHB1Ymxpc2hlciA6IGZvcm1EYXRhLnB1Ymxpc2hlcixcclxuICAgICAgICAgICAgICAgIHRpdGxlIDogZm9ybURhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA6IGZvcm1EYXRhLnN1YnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZ2VucmUgOiBmb3JtRGF0YS5nZW5yZSxcclxuICAgICAgICAgICAgICAgIGZyYW5jaGlzZSA6IGZvcm1EYXRhLmZyYW5jaGlzZSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogZm9ybURhdGEuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBlYW5fbnVtYmVyIDogZm9ybURhdGEuZWFuX251bWJlcixcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtIDogZm9ybURhdGEucGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGUgOiBmb3JtRGF0YS5yZWxlYXNlX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBwZWdpX2FnZSA6IGZvcm1EYXRhLnBlZ2lfYWdlLFxyXG4gICAgICAgICAgICAgICAgc3RvY2sgOiBmb3JtRGF0YS5zdG9jayxcclxuICAgICAgICAgICAgICAgIHByaWNlIDogZm9ybURhdGEucHJpY2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZSA6IGZvcm1EYXRhLmltYWdlXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjYWRtaW5zZXJ0X19hcGlfX2Vycm9yX19tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXBkYXRlREI6IHVwZGF0ZURCXHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5Vc2VyTW9kZWwgPSBmdW5jdGlvbihpZClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBpZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVVc2VySW5mbyhkYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcclxuICAgICAgICBkYXRhLmRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRhLmphYXIsIGRhdGEubWFhbmQsIGRhdGEuZGFnKSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSB5ZWFyLCBtb250aCBhbmQgZGF5XHJcbiAgICAgICAgZGVsZXRlIGRhdGEuamFhcjtcclxuICAgICAgICBkZWxldGUgZGF0YS5tYWFuZDtcclxuICAgICAgICBkZWxldGUgZGF0YS5kYWc7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIGRhdGEudXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBBVENIXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VyX2lkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyB1c2VyX2lkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXHJcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlLFxyXG4gICAgICAgIHNhdmVVc2VySW5mbzogc2F2ZVVzZXJJbmZvLFxyXG4gICAgICAgIGRlbGV0ZVVzZXI6IGRlbGV0ZVVzZXJcclxuICAgIH1cclxufSIsInZhciBBZG1pbk1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vyc1wiLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxyXG4gICAgfVxyXG5cclxufTsiLCJ2YXIgQ2FydE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRDYXJ0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XHJcblxyXG4gICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gdGhlIGNhcnQgY29va2llIGFuZCBkYXRhYmFzZSBpZiB0aGUgdXNlciBpcyByZWdpc3RlcmVkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGlkLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0ID0ge2Vhbl9udW1iZXI6ZGF0YVswXS5lYW5fbnVtYmVyLCB0aXRsZTpkYXRhWzBdLnRpdGxlLCBwcmljZTpkYXRhWzBdLnByaWNlLCBpbWFnZTpkYXRhWzBdLmltYWdlfTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNhcnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2FydCBpbiBjb29raWVzXHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudENhcnQgPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENhcnQgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KFtjYXJ0XSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0ID0gSlNPTi5wYXJzZShjdXJyZW50Q2FydCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcnQucHVzaChjYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENhcnQpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBpdGVtIGZyb20gdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGlkIFByb2R1Y3QgaWRcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcclxuICAgIHtcclxuICAgICAgICBjYXJ0ID0gSlNPTi5wYXJzZShDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKSk7XHJcblxyXG4gICAgICAgIGZvcihpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoY2FydFtpXS5lYW5fbnVtYmVyID09IGlkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDYXJ0OiBnZXRDYXJ0LFxyXG4gICAgICAgIGFkZFByb2R1Y3Q6IGFkZFByb2R1Y3QsXHJcbiAgICAgICAgcmVtb3ZlUHJvZHVjdDogcmVtb3ZlUHJvZHVjdFxyXG4gICAgfVxyXG59OyIsInZhciBDaGVja291dE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlckluZm9ybWF0aW9uKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZSgnY2FydCcpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQgJiYgY2FydCAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKFtdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZU9yZGVyKG9yZGVyRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gQXBwZW5kIGRhdGEgZm9ybSBvdGhlciBzb3VyY2VzXHJcbiAgICAgICAgb3JkZXJEYXRhLnN0YXR1cyAgICAgICAgID0gXCJwYWlkXCI7XHJcbiAgICAgICAgb3JkZXJEYXRhLmJ0d19wZXJjZW50YWdlID0gMjE7XHJcbiAgICAgICAgb3JkZXJEYXRhLm9yZGVyX2RhdGUgICAgID0gbmV3IERhdGUoKTtcclxuICAgICAgICBvcmRlckRhdGEuZGVsaXZlcnlfY29zdHMgPSAzLjk1O1xyXG4gICAgICAgIG9yZGVyRGF0YS5jYXJ0ICAgICAgICAgICA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3JkZXJEYXRhKSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImNhcnRcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVySW5mb3JtYXRpb246IGdldE9yZGVySW5mb3JtYXRpb24sXHJcbiAgICAgICAgc2F2ZU9yZGVyOiBzYXZlT3JkZXJcclxuICAgIH1cclxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCJcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRGYXZvcml0ZUxpc3QgYWpheCBkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTsgLy9tb2V0IGRhdGEgcGVyIHNlIG1lZWdldmVuIGFhbiBjYWxsYmFjaz9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEZhdm9yaXRlTGlzdDogZ2V0RmF2b3JpdGVMaXN0LFxyXG4gICAgICAgIGRlbGV0ZUZyb21GYXZvcml0ZUxpc3Q6IGRlbGV0ZUZyb21GYXZvcml0ZUxpc3RcclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwidXNlcl9pZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhoci5zdGF0dXMgPT0gNDAzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZXJyb3JfYmxvY2tlZF9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICBDb29raWVIZWxwZXIuZGVsZXRlQ29va2llKFwidXNlcl9pZFwiKTtcclxuXHJcbiAgICAgICAgLy8gJ3JlbG9hZCcgcGFnZVxyXG4gICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvdXQ6IGxvZ291dFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlcnNNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIG9yZGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVyczogZ2V0T3JkZXJzLFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlck1vZGVsID0gZnVuY3Rpb24ob3JkZXJfaWQpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBvcmRlclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvb3JkZXJzL1wiICsgb3JkZXJfaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlciwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRPcmRlcjogZ2V0T3JkZXIsXHJcbiAgICAgICAgYWRkVG9GYXZvcml0ZUxpc3Q6IGFkZFRvRmF2b3JpdGVMaXN0XHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKHVzZXJfaWQpXHJcbntcclxuICAgIHRoaXMuZ2V0UHVibGljV2lzaGxpc3QgPSBmdW5jdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdXNlcl9pZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcclxuICAgICAgICBmb3JtRGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZm9ybURhdGEuamFhciwgZm9ybURhdGEubWFhbmQsIGZvcm1EYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5qYWFyO1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIDogZm9ybURhdGEudm9vcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxyXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YS5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSA6IGZvcm1EYXRhLnBvc3Rjb2RlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcclxuICAgICAgICAgICAgICAgIHN0cmVldF9uYW1lIDogZm9ybURhdGEuc3RyYWF0bmFhbSxcclxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YS5wbGFhdHNcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZXNldHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmV3X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXNldHBhc3N3b3JkOiByZXNldHBhc3N3b3JkXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RNb2RlbCA9IGZ1bmN0aW9uKGVhbilcclxue1xyXG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXHJcbiAgICB9XHJcbn07IiwidmFyIFN0YXRzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldEdyYXBoRGF0YShyYW5nZSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3N0YXRzL3RvcGdhbWVzP3JhbmdlPVwiICsgcmFuZ2UsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJhbmdlLCBkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEdyYXBoRGF0YTogZ2V0R3JhcGhEYXRhXHJcbiAgICB9XHJcblxyXG59OyIsInZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbih1c2VyaWQpXHJcbntcclxuICAgIGZ1bmN0aW9uIEdldFVzZXJJbmZvKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2Vycy9cIiArIHVzZXJpZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEdldFVzZXJJbmZvOiBHZXRVc2VySW5mb1xyXG4gICAgfVxyXG59OyIsInZhciBXaXNobGlzdE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3RcIixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUb1dpc2hsaXN0KHZpZXdEYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSAvKisgXCIvXCIgKyB2aWV3RGF0YS5lYW5fbnVtYmVyKi8sXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICB3aXNobGlzdF9pZCA6IHZpZXdEYXRhLndpc2hsaXN0X2lkLFxyXG4gICAgICAgICAgICAgICAgLy9lYW5fbnVtYmVyIDogdmlld0RhdGEuZWFuX251bWJlclxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpICsgXCIvXCIgKyBTdHJpbmcoZWFuKSxcclxuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBnbyA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbmV3REJTdGF0dXMgPSBcIjBcIjtcclxuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpe1xyXG4gICAgICAgICAgICBuZXdEQlN0YXR1cyA9IFwiMVwiO1xyXG4gICAgICAgICAgICBnbyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpe1xyXG4gICAgICAgICAgICBnbyA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdTdGF0dXMgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIG5ld1N0YXR1cyA9IFwiICsgbmV3U3RhdHVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChnbylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3Qvc3dpdGNoX3B1YmxpY1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwYXRjaFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcIm5ld0RCU3RhdHVzXCI6bmV3REJTdGF0dXN9KSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFdpc2hsaXN0OiBnZXRXaXNobGlzdCxcclxuICAgICAgICBhZGRUb1dpc2hsaXN0OiBhZGRUb1dpc2hsaXN0LFxyXG4gICAgICAgIGRlbGV0ZUZyb21XaXNobGlzdDogZGVsZXRlRnJvbVdpc2hsaXN0LFxyXG4gICAgICAgIHN3aXRjaFB1YmxpY1N0YXRlOiBzd2l0Y2hQdWJsaWNTdGF0ZVxyXG4gICAgfVxyXG59OyIsInZhciBBZG1pbnNlcnRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZm9ybVRvRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZm9ybVRvRGF0YSgpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24gbGlzdGVuZXIgdHJpZ2dlcmVkOiBpbiBmb3JtVG9EYXRhKClcIik7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI2Vycm9yX19tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJwdWJsaXNoZXJcIiwgXCJ0aXRsZVwiLCBcInN1YnRpdGxlXCIsIFwiZ2VucmVcIiwgXCJmcmFuY2hpc2VcIiwgXCJkZXNjcmlwdGlvblwiLCBcImVhbl9udW1iZXJcIiwgXCJwbGF0Zm9ybVwiLCBcInN0b2NrXCIsIFwicHJpY2VcIiwgXCJpbWFnZVwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAkKFwiI2Vycm9yX19tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZ2FtZSBpbmZvIHRvIEFQSVxyXG4gICAgICAgIHVwZGF0ZURCKGZvcm1EYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlREIoZm9ybURhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwudXBkYXRlREIoZm9ybURhdGEsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZSBzdWNjZXN2b2wgb3BnZXNsYWdlbiBtZXQgcGlfaWQgLi4uLlwiKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBBZG1pblVzZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcclxuICAgICAgICB2aWV3SGVscGVyLnNldFNhdmVMaXN0ZW5lcihzYXZlVXNlckluZm8pO1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlVXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2F2ZVVzZXJJbmZvKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIE1vZGVsLnNhdmVVc2VySW5mbyhmb3JtRGF0YSwgZnVuY3Rpb24oZm9ybURhdGEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIkdlYnJ1aWtlciBzdWNjZXN2b2wgZ2XDvHBkYXRlLlwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZGVsZXRlVXNlcih1c2VyX2lkLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydChcIkdlYnJ1aWtlciBzdWNjZXN2b2wgZ2VkZWxldGUuXCIpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvYWRtaW5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2Uoc2V0Vmlldyk7IC8vXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIENhcnRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBjYXJ0IGl0ZW1zIGFuZCBwYXNzIHRoZSBpdGVtcyB0byB0aGUgVmlld0hlbHBlclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRDYXJ0KClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRDYXJ0KGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBpdGVtIHRvIHRoZSBjYXJ0IGFuZCBwYXNzIGl0IHRvIHRoZSB2aWV3SGVscGVyXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7aW50fSBpZCAgSXRlbSBpZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KGlkKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmFkZFByb2R1Y3QoaWQsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuYWRkSXRlbShkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZW1vdmUgYSBwcm9kdWN0IGFuZCBjYWxsIHRoZSB2aWV3SGVscGVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwucmVtb3ZlUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldENhcnQpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFByb2R1Y3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0UmVtb3ZlTGlzdGVuZXIocmVtb3ZlUHJvZHVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBDaGVja291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldE9yZGVySW5mb3JtYXRpb24oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9yZGVyKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplT2JqZWN0KCk7XHJcblxyXG4gICAgICAgIE1vZGVsLnNhdmVPcmRlcihmb3JtRGF0YSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuZmluaXNoT3JkZXIoKTtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5jbGVhckNhcnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkgPT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRPcmRlckxpc3RlbmVyKG9yZGVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIERlbGV0ZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsInZhciBFcnJvckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyKVxyXG57XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBGYXZvcml0ZUxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEZhdm9yaXRlTGlzdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tRmF2b3JpdGVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRGYXZvcml0ZUxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldEZhdm9yaXRlTGlzdChzZXRWaWV3KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21GYXZvcml0ZUxpc3QoZWFuLCBkaXZfdG9faGlkZSlcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5kZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gb25TdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIudWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwicHJvZHVjdHNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJzKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRPcmRlcihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXIoYWRkVG9GYXZvcml0ZUxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlciwgZnVuY3Rpb24gb25TdWNjZXNzKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBzdWNjZXN2b2wgdG9lZ2V2b2VnZCBhYW4gamUgZmF2b3JpZXRlbi5cIik7IC8vIGltIHN0YWF0IHZvb3IgaW1hZ2luYXJ5L2RlbmtiZWVsZGlnXHJcbiAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07XHJcbiIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShcIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbHRlclByb2R1Y3RzKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybSAocGFnZSByZWxvYWQpXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xyXG4gICAgICAgIE1vZGVsLmdldFBhZ2UoZmlsdGVycywgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5sb2FkUHJvZHVjdHMoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcclxuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBtYWluXCIpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UHVibGljV2lzaGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFB1YmxpY1dpc2hsaXN0KClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQdWJsaWNXaXNobGlzdChzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaXggZGF0ZSBvZiBiaXJ0aCAoQVBJIGV4cGVjdHMgY2VydGFpbiBmb3JtYXQpXHJcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcclxuXHJcbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxyXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZWdpc3Rlcihmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvYWZ0ZXJfcmVnaXN0ZXIuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygnL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmh0bWwnKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuXHJcbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XHJcblxyXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcclxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvYWZ0ZXJfcmVzZXQuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xyXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gICAgZnVuY3Rpb24gc2hvd1ZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XHJcbiAgICAgICAgLy8gMSkgdXNlciBjbGlja3Mgb24gYSBwcm9kdWN0IFxyXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxyXG4gICAgICAgIC8vIDQpIHZpZXcgc2hvd3MgaW5mb1xyXG5cclxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcclxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW4sXHJcbiAgICAgICAgc2hvd1ZpZXcgOiBzaG93Vmlld1xyXG4gICAgfVxyXG59OyIsInZhciBTdGF0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEdyYXBoRGF0YSk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihnZXRDaGFuZ2VkVG9wVGVuKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldEdyYXBoRGF0YShcInF1YXJ0ZXJcIiwgc2V0VG9wVGVuVmlldyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5WaWV3KHJhbmdlLCBkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VG9wVGVuVmlldyhyYW5nZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2hhbmdlZFRvcFRlbihyYW5nZSlcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRHcmFwaERhdGEocmFuZ2UsIHNldFRvcFRlblZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCIiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0V2lzaGxpc3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbVdpc2hsaXN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFB1YmxpY0xpc3RlbmVyKHN3aXRjaFB1YmxpY1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0V2lzaGxpc3Qoc2V0Vmlldyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuaGlkZUl0ZW0oZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cylcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5zd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5zZXJ0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk5ldyBHYW1lcyAtIEFaIEdhbWVzXCJcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcInZpZXdzL2FkbWluc2VydC9hZG1pbnNlcnQuaHRtbFwiLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE5MDA7IGkgPCBkYXRlLmdldEZ1bGxZZWFyKCkgKyAxOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IDIwMDApXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjYWRtaW5zZXJ0X19mb3JtXCIsIGFjdGlvbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3XHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5WaWV3SGVscGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gJCgnI3NpbmdsZV91c2VyJykuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5odG1sKHZhbHVlLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5hdHRyKCdocmVmJywgJy9hZG1pbl91c2VyLycgKyB2YWx1ZS51c2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19pbnNlcnRpb25cIikuaHRtbCh2YWx1ZS5pbnNlcnRpb24pO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2xhc3RuYW1lXCIpLmh0bWwodmFsdWUuc3VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZW1haWxcIikuaHRtbCh2YWx1ZS5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fcGhvbmVudW1iZXJcIikuaHRtbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjdXNlcnNfYm9keVwiKS5hcHBlbmQodXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3NpbmdsZV91c2VyXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgIH1cclxufVxyXG5cclxuICAgIC8vZGF0IGhpZXJvbmRlciB6YXQgYWFyZGlnIHdhdCB3ZXJrIGluLi4uIERvbmFsZCB3aWwgbm9nIGZmIGhvdWRlblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNob3dVc2VycyhkYXRhKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAvLyAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciB0YWJsZSA9ICQoXCI8dGFibGUgaWQ9J3VzZXJzX3RhYmxlJz48L3RhYmxlPlwiKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHRhYmxlIGhlYWRlclxyXG4gICAgLy8gICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZD5Wb29ybmFhbTwvdGQ+PHRkPlR1c3NlbnY8L3RkPjx0ZD5BY2h0ZXJuYWFtPC90ZD48dGQ+R2VicnVpa2Vyc25hYW08L3RkPjx0ZD5lbWFpbDwvdGQ+PHRkPnR5cGU8L3RkPicpO1xyXG5cclxuICAgIC8vICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgICAgICAkLmVhY2godXNlciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikuaHRtbChTdHJpbmcodmFsdWUpKSApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gLy9mb3IgYWRkaXRpb25hbCB1c2VyIGluZm8gaWYgY2xpY2tlZFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gcm93ID0gJCgnPGRpdiBjbGFzcz1cInRvYmV0YWJsZVwiPjwvZGl2PicpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGFibGUuYXBwZW5kKHJvdyk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAkKCcjdXNlcnMnKS5hcHBlbmQodGFibGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHB1dEluZm9Jbkh0bWwoY2xpY2tlZCwgZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaW4gcHV0SW5mb0luSHRtbCgpJyk7XHJcbiAgICAvLyAgICAgLy8gc2hvdyBpbmZvIG9mIHRoZSByaWdodCB1c2VyIChpZiBub3QgYWxyZWFkeSBzaG93aW5nIGl0KVxyXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgYXMgdGFibGUgaGVhZGVyXHJcbiAgICAvLyAgICAgdmFyIGhlYWRlcnJvdyA9ICQoJzx0cj48L3RyPicpLmFwcGVuZCgnPHRkPnd3PC90ZD48dGQ+Z2VibG9ra2VlcmQ8L3RkPjx0ZD5pZDwvdGQ+PHRkPmdlbmRlcjwvdGQ+PHRkPmdlYm9vcnRlZGF0dW08L3RkPjx0ZD52cmFhZzwvdGQ+PHRkPmFudHdvb3JkPC90ZD4nKTtcclxuXHJcbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyB3aXRoIHRlIHVzZXJpbmZvXHJcbiAgICAvLyAgICAgdmFyIGluZm9yb3cgPSAkKCc8dHI+PC90cj4nKTtcclxuXHJcbiAgICAvLyAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgIC8vICAgICAkLmVhY2goZGF0YVswXSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7IC8vIGdlYmxva2tlZXJkXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ25lZSc7XHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdqYSdcclxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnZGIgZm91dD8nXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgIC8vICAgICAgICAgdmFyIHRkID0gJCgnPHRkPjwvdGQ+JykuYXBwZW5kKHZhbHVlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdrZXksIHZhbHVlOiAnICsga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgLy8gICAgICAgICBpbmZvcm93LmFwcGVuZCh0ZCk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gICAgIGluZm9yb3cuaW5zZXJ0QWZ0ZXIoICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSApO1xyXG4gICAgLy8gICAgIGhlYWRlcnJvdy5pbnNlcnRBZnRlcigkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykpO1xyXG4gICAgLy8gfVxyXG5cclxuIiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsUHJpY2UgIFRvdGFsIHByaWNlIG9mIHRoZSBjYXJ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XHJcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIG5ldyBjYXJ0IGl0ZW0gdmlzaWFibGUgaW4gdGhlIERPTVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0SXRlbSA9ICQoJzxkaXY+JykuaHRtbCgkKCcuc2lkZWJhcl9fY29udGVudF9fdG1wJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbChcIuKCrFwiICsgaXRlbS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXHJcblxyXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXHJcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcclxuICAgIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHJlbW92ZSBhIHByb2R1Y3QgZnJvbSB0aGUgRE9NIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgY2FydGl0ZW0gICA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBmcm9tIERPTSBjYXJ0XHJcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3Jlc2UgY291bnRcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEFkZFByb2R1Y3RMaXN0ZW5lcjogc2V0QWRkUHJvZHVjdExpc3RlbmVyLFxyXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5Vc2VyVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgLy9wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbnVzZXIvYWRtaW51c2VyLmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLnVzZXJfaWQpICAgXHJcbiAgICAgICAgICAgICQoXCIjZmlyc3RfbmFtZVwiKS52YWwodmFsdWUuZmlyc3RfbmFtZSk7XHJcbiAgICAgICAgICAgICQoXCIjaW5zZXJ0aW9uXCIpLnZhbCh2YWx1ZS5pbnNlcnRpb24pO1xyXG4gICAgICAgICAgICAkKFwiI3N1cm5hbWVcIikudmFsKHZhbHVlLnN1cm5hbWUpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfdHlwZVwiKS52YWwodmFsdWUudXNlcl90eXBlKTtcclxuICAgICAgICAgICAgJChcIiNlbWFpbFwiKS52YWwodmFsdWUuZW1haWwpO1xyXG4gICAgICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1Z1bCBoaWVyIGlldHMgaW4gb20gaGV0IHdhY2h0d29vcmQgdGUgdmVyYW5kZXJlbicpO1xyXG4gICAgICAgICAgICAkKFwiI2dlbmRlclwiKS52YWwodmFsdWUuZ2VuZGVyKTtcclxuICAgICAgICAgICAgJChcIiNkYXRlX29mX2JpcnRoXCIpLnZhbCh2YWx1ZS5kYXRlX29mX2JpcnRoKTtcclxuICAgICAgICAgICAgJChcIiNwaG9uZV9udW1iZXJcIikudmFsKHZhbHVlLnBob25lX251bWJlcik7XHJcbiAgICAgICAgICAgICQoXCIjaXNfYWN0aXZlXCIpLnZhbCh2YWx1ZS5pc19hY3RpdmUpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfaWRcIikudmFsKHZhbHVlLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvZGF5ICAgICAgID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGVPZkJpcnRoID0gbmV3IERhdGUodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XHJcblxyXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE5MDA7IGkgPCB0b2RheS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI21hYW5kXCIpLnZhbChkYXRlT2ZCaXJ0aC5nZXRNb250aCgpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNhdmVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICcjdXNlcmZvcm0nLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZUxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsICcjZGVsZXRlX2J0bicsIGZ1bmN0aW9uIChlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhY3Rpb24oJCh0aGlzKS5kYXRhKFwiaWRcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0U2F2ZUxpc3RlbmVyOiBzZXRTYXZlTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyXHJcbiAgICB9XHJcbn0iLCJ2YXIgQ2hlY2tvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQmVzdGVsbGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2NoZWNrb3V0L2NoZWNrb3V0Lmh0bWwnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXJ0IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJfaW5mbyAub3JkZXJfX25hdmlnYXRlXCIpLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XHJcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcclxuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGRlbGl2ZXJ5IGRhdGUgKHdlIGFsd2F5cyBkZWxpdmVyIGluIG9uZSBkYXkpXHJcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X2RhdGVcIikuaHRtbCh0b2RheS5nZXREYXRlKCkgKyBcIiBcIiArIHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pKTtcclxuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fZGF5XCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgVXNlckhlbHBlci5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19uYW1lXCIpLmh0bWwodXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmluc2VydGlvbiArIFwiIFwiICsgdXNlci5zdXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fcG9zdGFsY29kZVwiKS5odG1sKHVzZXIuYWRkcmVzcy5wb3N0YWxfY29kZSArIFwiIFwiICsgdXNlci5hZGRyZXNzLmNpdHkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcclxuICAgIGZ1bmN0aW9uIGZpbmlzaE9yZGVyKClcclxuICAgIHtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpIGFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI2NvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHZpc2libGUgY2FydFxyXG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcclxuICAgIHtcclxuICAgICAgICAkKFwiLmNhcnRcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcclxuICAgICAgICAkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKFwi4oKsMDAuMDBcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpcm0gdGhlIG9yZGVyIHdoZW4gc2JtaXR0aW5nIHRoZSBmb3JtXHJcbiAgICBmdW5jdGlvbiBzZXRPcmRlckxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIiNvcmRlcmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRPcmRlckxpc3RlbmVyOiBzZXRPcmRlckxpc3RlbmVyLFxyXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcclxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydFxyXG4gICAgfVxyXG59OyIsInZhciBGYXZvcml0ZUxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJGYXZvcmlldGVubGlqc3QgLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJmYXZvcml0ZWxpc3RcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdCh2aWV3RGF0YSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBsb2FkRmF2b3JpdGVsaXN0KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjZmF2b3JpdGVsaXN0XCIpLmxvYWQoJy92aWV3cy9mYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYWRkIGFsbCBmYXZvcml0ZWxpc3QgaXRlbXMgdG8gaHRtbFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBmYXZvcml0ZV9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNmYXZvcml0ZV9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2F2YWlsYWJpbGl0eVwiKS5hcHBlbmQoQmVzY2hpa2JhYXJoZWlkS2xldXIodmFsdWUuc3RvY2spKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNmYXZvcml0ZV9fbGlzdFwiKS5hcHBlbmQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlbGlzdF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI2Zhdm9yaXRlX19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZUxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldERlbGV0ZUxpc3RlbmVyKClcIik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCBcIiNkZWxldGVfYnRuXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgdmFyIGRpdl90b19oaWRlID0gJCh0aGlzKS5jbG9zZXN0KFwiLnJvd1wiKTtcclxuICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlSXRlbShkaXZfdG9faGlkZSlcclxuICAgIHtcclxuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRGYXZvcml0ZWxpc3Q6IGxvYWRGYXZvcml0ZWxpc3QsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lcixcclxuICAgICAgICBoaWRlSXRlbTogaGlkZUl0ZW1cclxuICAgIH1cclxufSIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dpbi9sb2dpbi5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdsb2dpbidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI2xvZ2luZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFN0YXRzVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VG9wVGVuVmlldyhyYW5nZSwgZ3JhcGhEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoRGF0YSk7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiU3RhdHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZ3JhcGhzL2dyYXBocy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXHJcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgc2VsZWN0IGRhdGFcclxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikuZmluZChcIiNyYW5nZV9zd2l0Y2hcIikudmFsKHJhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGdyYXBoXHJcbiAgICAgICAgICAgIHZhciBsYWJlbHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHZhciBnYW1lQ291bnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgbGFzdF9yYW5rX251bSA9IDA7IC8vYXNzdW1pbmcgdmFsdWUucmFuayBpcyBuZXZlciAwIVxyXG4gICAgICAgICAgICB2YXIgaGlnaGVzdFZhbCA9IDA7XHJcblxyXG4gICAgICAgICAgICAkLmVhY2goZ3JhcGhEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBnYW1lQ291bnQrKztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZUNvdW50IDwgMTEgfHwgdmFsdWUucmFuayA9PSBsYXN0X3JhbmtfbnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnB1c2godmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaCh2YWx1ZS51c2VyX2NvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZUNvdW50ID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RfcmFua19udW0gPSB2YWx1ZS5yYW5rO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYWJlbHMpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbCA9ICQoXCIjZ3JhcGhfX3RvcHRlbml0ZW1zX19jbnZzXCIpO1xyXG4gICAgICAgICAgICB2YXIgVG9wVGVuQ2hhcnQgPSBuZXcgQ2hhcnQoZWwsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdob3Jpem9udGFsQmFyJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAyMDAsIDI2LCAxKScsIC8vZ3JvZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk1lZXN0IHZlcmtvY2h0ZSBnYW1lc1wiIC8vIG5lZWQgaW4gamFudWFyaSwgaW4gZmVicnVhcmksIGV0Yy5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1heFJvdGF0aW9uOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW5Sb3RhdGlvbjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLy8gcHV0IGRlc2NpcHRpb24gYmVsb3cgZ3JhcGhcclxuICAgICAgICAgICAgdmFyIGRlc2NyID0gJ0RlemUgZ3JhZmllayBsYWF0IGRlIGdhbWVzIHppZW4gbWV0IGhldCBtZWVzdGUgYWFudGFsIGdlYnJ1aWtlcnMgZGF0IGRlIGdhbWUgMSBvZiBtZWVyIGtlZXIgaGVlZnQgZ2Vrb2NodCBpbiBkZSBnZWtvemVuIHRpamRzcGVyaW9kZS4nO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRoZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25fX3RvcHRlblwiKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcik7IFxyXG4gICAgICAgICAgICB0aGVEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7IFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2VcIiwgXCIjcmFuZ2Vfc3dpdGNoXCIsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9ICQoXCIjcmFuZ2Vfc3dpdGNoXCIpLnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJhbmdlOiBcIiArIHJhbmdlKTtcclxuICAgICAgICAgICAgYWN0aW9uKHJhbmdlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFRvcFRlblZpZXc6IHNldFRvcFRlblZpZXcsXHJcbiAgICAgICAgc2V0VG9wVGVuQ2hhbmdlTGlzdGVuZXI6IHNldFRvcFRlbkNoYW5nZUxpc3RlbmVyXHJcbiAgICB9XHJcbn0iLCJ2YXIgTG9nb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcob3JkZXIpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVyL29yZGVyLmh0bWwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRGF0ZVxyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybWF0IHNoaXBwaW5nIG1ldGhvZFxyXG4gICAgICAgICAgICBzd2l0Y2gob3JkZXIuc2hpcHBpbmdfbWV0aG9kKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVsaXZlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGlja3VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpbGwgb3JkZXIgaW5mb1xyXG4gICAgICAgICAgICAkKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fcGF5bWVudG1ldGhvZFwiKS5odG1sKG9yZGVyLnBheW1lbnRfbWV0aG9kKTtcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwob3JkZXIuc2hpcHBpbmdfbWV0aG9kKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0c1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXIucHJvZHVjdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19hbW91bnRcIikuaHRtbChcIjxiPkFhbnRhbDo8L2I+IFwiICsgdmFsdWUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIuYWRkVG9GYXZvcml0ZXNCdXR0b25cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8aHIgLz5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBhbmQgbW92ZSB0b3RhbCBwcmljZSB0byBlbmQgb2YgbGlzdFxyXG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIudG90YWxfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBvcmRlci50b3RhbF9vcmRlcl9wcmljZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiLmFkZFRvRmF2b3JpdGVzQnV0dG9uXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgYWN0aW9uKGVhbik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyOiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIE9yZGVyc1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcnMpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVycy9vcmRlcnMuaHRtbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXIgPSAkKCcjc2luZ2xlX29yZGVyJykuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcclxuICAgICAgICAgICAgICAgIHN3aXRjaCh2YWx1ZS5zaGlwcGluZ19tZXRob2QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2hpcHBpbmdfbWV0aG9kID0gXCJCZXpvcmdlbiAodmlhIFBvc3ROTClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zaGlwcGluZ19tZXRob2QgPSBcIk9waGFsZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX251bWJlclwiKS5odG1sKHZhbHVlLm9yZGVyX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyB2YWx1ZS50b3RhbF9vcmRlcl9wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwodmFsdWUucGF5bWVudF9tZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwodmFsdWUuc2hpcHBpbmdfbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX2xpbmsgYVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9vcmRlci9cIiArIHZhbHVlLm9yZGVyX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNvcmRlcnNfYm9keVwiKS5hcHBlbmQob3JkZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNzaW5nbGVfb3JkZXJcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbikgLy8gaGViIGRlICQgZXJiaWogZ2V6ZXQuIGludGVybmV0IGhhZCBoZXQgZGFhcm92ZXIgKHppZSBvbmRlcnN0YWFuZGUgY29tbWVudCBvb2spXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmlld0RhdGEpXHJcbiAgICAgICAgaWYgKHZpZXdEYXRhLmxlbmd0aCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkVycm9yIC0gQVogR2FtZXNcIlxyXG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0uaXNfcHVibGljID09IDEpe1xyXG4gICAgICAgICAgICAgICAgbG9hZFB1YmxpY1dpc2hsaXN0KHZpZXdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkVycm9yIC0gQVogR2FtZXNcIlxyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZXdEYXRhWzBdLmlzX3B1YmxpYyBoZWVmdCBvbnZlcndhY2h0ZSB3YWFyZGUuIHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9IFwiICsgdmlld0RhdGFbMF0uaXNfcHVibGljKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZXdEYXRhWzBdLmxlbmd0aCBoZWVmdCBvbnZlcndhY2h0ZSB3YWFyZGUuIHZpZXdEYXRhLmxlbmd0aCA9IFwiICsgdmlld0RhdGEubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFB1YmxpY1dpc2hsaXN0KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlZlcmxhbmdsaWpzdCBcIiArIGRhdGFbMF0uZmlyc3RfbmFtZSArIFwiIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwicHVibGljX3dpc2hsaXN0XCI+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgICQoXCIjcHVibGljX3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy9wdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChcIiNwdWJsaWNfX3dpc2hsaXN0X19oZWFkZXJcIikuaHRtbChcIlZlcmxhbmdsaWpzdCB2YW4gXCIgKyBkYXRhWzBdLmZpcnN0X25hbWUpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZhciB3aXNobGlzdF9pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoICQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSApO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQrKztcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2xpa2VidXR0b25cIikuYXBwZW5kKCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aXNobGlzdF9pdGVtLmFwcGVuZFRvKCQoXCIjd2lzaF9fbGlzdFwiKSk7XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZFB1YmxpY1dpc2hsaXN0OiBsb2FkUHVibGljV2lzaGxpc3QsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcblxyXG5cclxufSIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcclxuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm8sIC5wcm9kdWN0X19pbWFnZSBhLCAucHJvZHVjdF9fdGl0bGVcIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IG1vcmUvbGVzc1xyXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xyXG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XHJcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcclxuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmKCQoXCIjcHJpY2VtaW5cIikudmFsKCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUmVnaXN0cmVyZW4gLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyMDAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVnaXN0ZXJmb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdC50aXRsZSArIFwiIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9zaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdC5odG1sJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcHJpY2VcIikuaHRtbChcIuKCrCBcIiArIHByb2R1Y3QucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28ocHJvZHVjdC5wbGF0Zm9ybSkpOyAvLyBmdW5jdGllIHZvb3IgbG9nb1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wdWJsaXNoZXJcIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnB1Ymxpc2hlcikpOyAvLyBmdW5jdGllIHZvb3IgbG9nb1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZ2VucmVcIikuYXBwZW5kKHByb2R1Y3QuZ2VucmUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19kZXNjclwiKS5odG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5hdHRyKFwib25jbGlja1wiLCBcIldpc2hsaXN0SGVscGVyLmFkZEl0ZW0oXCIgKyBwcm9kdWN0LmVhbl9udW1iZXIgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtcImphbnVhcmlcIiwgXCJmZWJydWFyaVwiLCBcIm1hYXJ0XCIsIFwiYXByaWxcIiwgXCJtZWlcIiwgXCJqdW5pXCIsIFwianVsaVwiLCBcImF1Z3VzdHVzXCIsIFwic2VwdGVtYmVyXCIsIFwib2t0b2JlclwiLCBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbnZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59O1xyXG4qLyIsInZhciBXaXNobGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIldpc2hsaXN0IC0gQVogR2FtZXNcIjtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwid2lzaGxpc3RcIj48L2Rpdj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgbG9hZFdpc2hsaXN0KHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkV2lzaGxpc3Qodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBsb2FkV2lzaExpc3RcIik7XHJcbiAgICAgICAgJChcIiN3aXNobGlzdFwiKS5sb2FkKCcvdmlld3Mvd2lzaGxpc3Qvd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIHdpc2hsaXN0IGl0ZW1zIHRvIGh0bWxcclxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciB3aXNoX19saXN0X19pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3dpc2hfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArMVxyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNzaGFyZV9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwibWFpbHRvOj9zdWJqZWN0PU1pam4gdmVybGFuZ2xpanN0IG9wIEFaLUdhbWVzLm5sISZib2R5PUJla2lqayBtaWpuIHZlcmxhbmdsaWpzdCBvcDogaHR0cDovL2F6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpOyAvLyBDSEVDSyBESVMhXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NsaXBib2FyZF9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfbGlua1wiKS52YWwoXCJodHRwczovL2F6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdFwiKS5hcHBlbmQod2lzaF9fbGlzdF9faXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaXNfcHVibGljID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdG9yXCIpLnZhbChcInByaXZhdGVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuLCAuc2hhcmVfX2J0biwgLmNsaXBib2FyZF9fYnRuXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlzX3B1YmxpYyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwdWJsaWNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIGhhcyB1bmV4cGVjdGVkIHZhbHVlLiB2YWx1ZSA9IFwiICsgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWxzIGVyIGdlZW4gaXRlbXMgaW4gd2lzaGxpc3Qgc3RhYW4sIGRhbiBoaWRlIGRlIHZvbGdlbmRlIGRpdnMuXHJcbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfX3JlbGF0ZWRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2J0blwiLCBmdW5jdGlvbihlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKCEkKCcjZGVsZXRlX2J0bicpLmhhc0NsYXNzKFwiYnRuLS1wcmVzc2VkXCIpKXtcclxuICAgICAgICAgICAgICAgICQoXCIjZGVsZXRlX2J0blwiKS5hZGRDbGFzcyhcImJ0bi0tcHJlc3NlZFwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVhbiA9ICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpdl90b19oaWRlID0gJCh0aGlzKS5jbG9zZXN0KFwiLnJvd1wiKTtcclxuICAgICAgICAgICAgICAgIGFjdGlvbihlYW4sIGRpdl90b19oaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRQdWJsaWNMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2VcIiwgXCIjcHVibGljYXRvclwiLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgYWN0aW9uKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIGRpdl90b19oaWRlLmZhZGVUbygyMDAsIDApLnNsaWRlVXAoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93RXhhbXBsZUJ1dHRvbihuZXdTdGF0dXMpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3RhdHVzKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0YXR1cyA9PSBcInB1YmxpY1wiKSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi5zaGFyZV9fYnRuXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIi5jbGlwYm9hcmRfX2J0blwiKS5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpIHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnNoYXJlX19idG5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtjb25zb2xlLmxvZyhcInVuZXhwZWN0ZWQgbmV3U3RhdHVzIHZhbHVlLCB2YWx1ZSA9IFwiK25ld1N0YXR1cyl9XHJcblxyXG5cclxuICAgICAgICAkKFwiI2V4YW1wbGVfX2J0bl9fZGl2XCIpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBPcGVuU21hbGxNYWlsV2luZG93KHVybCwgd2luZG93TmFtZSwgZmVhdHVyZXMpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4odXJsLCB3aW5kb3dOYW1lLCBmZWF0dXJlcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBsb2FkV2lzaGxpc3Q6IGxvYWRXaXNobGlzdCxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxyXG4gICAgICAgIHNldFB1YmxpY0xpc3RlbmVyOiBzZXRQdWJsaWNMaXN0ZW5lcixcclxuICAgICAgICBoaWRlSXRlbTogaGlkZUl0ZW0sXHJcbiAgICAgICAgc2hvd0V4YW1wbGVCdXR0b246IHNob3dFeGFtcGxlQnV0dG9uXHJcbiAgICB9XHJcbn0iXX0=
