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
            return "<img src='/resources/images/icons/ps1.png' class='hasTooltip' />";
        case "PS3":
            return "<img src='/resources/images/icons/ps3.png' class='hasTooltip' />";
        case "PS2":
            return "<img src='/resources/images/icons/ps2.png' class='hasTooltip' />";
        case "PS4":
            return "<img src='/resources/images/icons/ps4.png' class='hasTooltip' />";
        case "PC":
            return "<img src='/resources/images/icons/windows.png' class='hasTooltip' />";
        case "XBOX ONE":
            return "<img src='/resources/images/icons/xboxone.png' class='hasTooltip' />";
        case "NES":
            return "<img src='/resources/images/icons/nes.png' class='hasTooltip' />";
        case "N64":
            return "<img src='/resources/images/icons/n64.png' class='hasTooltip' />";
        case "NINTENDO SWITCH":
            return "<img src='/resources/images/icons/switch.png' class='hasTooltip' />";
        case "NINTENDO WII":
            return "<img src='/resources/images/icons/wii.png' class='hasTooltip' />";
        case "NINTENDO WII U":
            return "<img src='/resources/images/icons/wiiu.png' class='hasTooltip' />";
        case "NGC":
            return "<img src='/resources/images/icons/ngc.png' class='hasTooltip' />";
        case "GAME BOY":
            return "<img src='/resources/images/icons/gameboy.png' class='hasTooltip' />";
        case "NINTENDO DS":
            return "<img src='/resources/images/icons/nintendods.png' class='hasTooltip' />";
        case "GBA":
            return "<img src='/resources/images/icons/gba.png' class='hasTooltip' />";
        case "PSP":
            return "<img src='/resources/images/icons/psp.png' class='hasTooltip' />";
        case "NINTENDO 3DS":
            return "<img src='/resources/images/icons/nintendo3ds.png' class='hasTooltip' />";

        //publishers - uitgevers
        case "NINTENDO":
            return "<img src='/resources/images/publishers/nintendo.png' class='hasTooltip' />";
        case "UBISOFT":
            return "<img src='/resources/images/publishers/ubisoft.png' class='hasTooltip' />";
        case "ELECTRONIC ARTS":
            return "<img src='/resources/images/publishers/ea.png' class='hasTooltip' />";
        case "SONY":
            return "<img src='/resources/images/publishers/sony.png' class='hasTooltip' />";
        case "ROCKSTAR":
            return "<img src='/resources/images/publishers/rockstar.png' class='hasTooltip' />";
        case "SEGA":
            return "<img src='/resources/images/publishers/sega.png' class='hasTooltip' />";
        case "KONAMI":
            return "<img src='/resources/images/publishers/konami.png' class='hasTooltip' />";
        case "ATLUS":
            return "<img src='/resources/images/publishers/atlus.png' class='hasTooltip' />";
        case "ACTIVISION":
            return "<img src='/resources/images/publishers/activision.jpg' class='hasTooltip' />";
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
            case "del_game":
                new DelGameController(new DelGameViewHelper(), new DelGameModel()).main();
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
var DelGameModel = function()
{
    
}
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
    function getTopTenData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/topgames?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                callback(data);
            },
            error: function (xhr, status, error) {
                //$("#component").load("/views/error/error.html");
            }
        });
    }

    function getRevenueData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/rev?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                callback(begin_date, end_date, data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    function getUserAmntData(begin_date, end_date, callback)
    {
        $.ajax({
            url: "http://localhost:8081/stats/useramnt?b_date=" + begin_date + "&e_date=" + end_date,
            type: "GET",
            headers: {
                "Authorization": "Bearer " + CookieHelper.getCookie("access_token")
            },
            contentType: "application/json;",
            success: function (data) {
                callback(begin_date, end_date, data);
            },
            error: function (xhr, status, error) {
                $("#component").load("/views/error/error.html");
            }
        });
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        getTopTenData: getTopTenData,
        getRevenueData: getRevenueData,
        getUserAmntData: getUserAmntData
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
var AdminsertController = function(viewHelper, addModel)
{
    var AddModel = addModel;
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
        AddModel.updateDB(formData, function()
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
var DelGameController = function(viewHelper, model)
{
    var ViewHelper = viewHelper;
    var Model = model;

    function main()
    {
        ViewHelper.setActionListener(getGamesBySearch); //initialize html + listen for input in delete-game-search bar
    }

    function getGamesBySearch(args)
    {
        Model.getGamesBySearch(args, showSearchResults);
    }
    function showSearchResults(data)
    {
        ViewHelper.showSearchResults(data, setClickGameListener)
    }
    function setClickGameListener()
    {
        ViewHelper.setClickGameListener();
    }

    return {
        main: main
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
        event.stopImmediatePropagation();

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
    
    // Main function, also the startpoint for a page
    function main()
    {
        ViewHelper.setActionListener(getTopTenData, getRevenueData, getUserAmntData); //
        ViewHelper.setRangeChangeListeners(getTopTenData, getRevenueData, getUserAmntData);
        ViewHelper.setGraphSelectListener(getTopTenData, getRevenueData, getUserAmntData);
    }

    // functions for getting data
    function getTopTenData(begin_date, end_date) //dateformat = "yyyy-mm-dd"
    {
        Model.getTopTenData(begin_date, end_date, showTopGamesGraph);
    }
    function getRevenueData(begin_date, end_date)
    {
        Model.getRevenueData(begin_date, end_date, showRevenueGraph);
    }
    function getUserAmntData(begin_date, end_date)
    {
        Model.getUserAmntData(begin_date, end_date, showUserAmntGraph);
    }

    // functions for showing graphs using the gathered data
    function showTopGamesGraph(data)
    {
        ViewHelper.showTopGamesGraph(data);
    }
    function showRevenueGraph(begin_date, end_date, data)
    {
        ViewHelper.showRevenueGraph(begin_date, end_date, data);
    }
    function showUserAmntGraph(begin_date, end_date, data)
    {
        ViewHelper.showUserAmntGraph(begin_date, end_date, data);
    }

    // function getGraphData(range)
    // {
    //     Model.getGraphData(range, showGraphs);
    // }
    // function showGraphs(range, data)
    // {
    //     ViewHelper.showGraphs(range, data);
    // }

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
var DelGameViewHelper = function()
{

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
var StatsViewHelper = function ()
{
    function setActionListener(action1, action2, action3)
    {
        $(document).ready(function()
        {
            // load page
            // put range switch to default
            // get default values from html
            // show TopTen graph

            cur_date = new Date();
            var cur_day = cur_date.getDate();
            var cur_month = cur_date.getMonth() + 1;
            var cur_year = cur_date.getFullYear();

            var end_day = putZeroBeforeNum(cur_day);
            var end_month = putZeroBeforeNum(cur_month);
            var end_year = String(cur_year);

            var begin_date = calcBeginDate(cur_day, cur_month, cur_year, 3); // array of strings: [0]=day [1]=month [2]=year
            console.log("in ready: " + end_year, end_month, end_day, begin_date);

            // load page
            document.title ="Stats - AZ Games";
            $("#component").load('/views/graphs/graphs.html', function()
            {
                for(i = 1; i < 32; i++)
                {
                    $("#range_bd").append("<option value='" + putZeroBeforeNum(i) + "'>" + i + "</option>");
                    $("#range_ed").append("<option value='" + putZeroBeforeNum(i) + "'>" + i + "</option>");
                }

                for (i = 2015; i < cur_date.getFullYear() + 1; i++)
                {
                    if (i == 2000)
                    {
                        $("#range_by").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                        $("#range_ey").append("<option value='" + i + "' selected='selected'>" + i + "</option>");
                        continue;
                    }

                    $("#range_by").append("<option value='" + i + "'>" + i + "</option>");
                    $("#range_ey").append("<option value='" + i + "'>" + i + "</option>");
                }

                // put range switches to default
                // begin date
                $("#component").find("#range_by").val(begin_date[2]);
                $("#component").find("#range_bm").val(begin_date[1]);
                $("#component").find("#range_bd").val(begin_date[0]);
                //end date
                $("#component").find("#range_ey").val(end_year     );
                $("#component").find("#range_em").val(end_month    );
                $("#component").find("#range_ed").val(end_day      );

                showGraphByHtml(action1, action2, action3);
            })
        })
    }
    function calcBeginDate(cd, cm, cy, months_earlier)
    {
        var begin_date = [];
        var begin_day = cd;
        var begin_month = cm;
        var begin_year = cy;

        while (months_earlier > 0) {
            begin_month -= 1;
            if (begin_month == 0) {
                begin_year -= 1;
                begin_month += 12;
            }
            months_earlier--;
        }

        begin_date.push(putZeroBeforeNum(begin_day));
        begin_date.push(putZeroBeforeNum(begin_month));
        begin_date.push(String(begin_year));
        return begin_date;
    }

    function showGraphByHtml(action1, action2, action3)
    {
        var by = $("#component").find("#range_by").val();
        var bm = $("#component").find("#range_bm").val();
        var bd = $("#component").find("#range_bd").val();
        var ey = $("#component").find("#range_ey").val();
        var em = $("#component").find("#range_em").val();
        var ed = $("#component").find("#range_ed").val();

        var begin_date = by + "-" + bm + "-" + bd;
        var end_date = ey + "-" + em + "-" + ed;

        var graph_choice = $("#component").find("#graph_choice").val();
        if (graph_choice == "topgames") {
            action1(begin_date, end_date);
        } else if (graph_choice == "revenue") {
            action2(begin_date, end_date);
        } else if (graph_choice == "useramnt") {
            action3(begin_date, end_date);
        } else {
            console.log("graph_choice has unexpected value. graph_choice = " + graph_choice);
        }
    }

    function setRangeChangeListeners(showTopGames, showRevenue, showUserAmnt)
    {
        $("#component").on("change", ".range", function()
        {
            showGraphByHtml(showTopGames, showRevenue, showUserAmnt);
        })
    }

    function setGraphSelectListener(showTopGames, showRevenue, showUserAmnt)
    {
        $("#component").on("change", "#graph_choice", function()
        {
            showGraphByHtml(showTopGames, showRevenue, showUserAmnt);
        })
    }

    function putZeroBeforeNum (num) {
        if (parseInt(num) < 10)
        {
            num = "0" + String(num);
            return num;
        } else {
            return String(num);
        }
    }

    // functions for showing a graph
    function showTopGamesGraph(graphData)
    {
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
        
        // remove old chart
        var graph_el = $("#graph");
        graph_el.empty();
        graph_el.append('<div class="graph__description message message--info" id="graph__description"></div>');
        graph_el.append('<canvas id="graph__cnvs" width="800" height="400"></canvas>');

        // add new chart
        var el = $("#graph__cnvs");
        var TopGamesChart = new Chart(el, {
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
                    text: "Best verkochte games"
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

        // remove old description
        var theDiv = document.getElementById("graph__description");
        theDiv.innerHTML = "";
        // put desciption below graph
        var descr = 'Deze grafiek laat de games zien met het meeste aantal gebruikers dat de game 1 of meer keer heeft gekocht in de gekozen tijdsperiode.';
        var content = document.createTextNode(descr); 
        theDiv.appendChild(content); 
    }

    function showRevenueGraph(begin_date, end_date, graphData)
    {
        // graph
        var labels = new Array();
        var data = [];

        // put all dates in x-axis. put all corresponding data in graph
        var b_dateA = begin_date.split("-");
        var y = parseInt(b_dateA[0]);
        var m = parseInt(b_dateA[1]);
        var d = parseInt(b_dateA[2]);

        var e_dateA = end_date.split("-");
        var end_y = parseInt(e_dateA[0]);
        var end_m = parseInt(e_dateA[1]);
        var end_d = parseInt(e_dateA[2]);

        var i = 0;
        var db_date = graphData[i].order_date.split("T")[0];
        var insert_into_next_iteration = 0;
        var insert_prev=false;
        while (!(y == end_y && m == end_m && d == end_d)) {
            var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
            //prevent major bug
            if (getDateScore(db_date) < getDateScore(date) && i == 0) {
                i+=1;
                var db_date = graphData[i].order_date.split("T")[0];
            }
            //x-axis
            labels.push(date);
            //y-axis
            if (date == db_date && i < graphData.length) {
                if (insert_prev){
                    data.push(insert_into_next_iteration)
                } else {
                    data.push(0);
                }
                insert_prev=true;
                insert_into_next_iteration = graphData[i].day_price;
                // update db_date
                i += 1;
                if (i < graphData.length) {
                    db_date = graphData[i].order_date.split("T")[0];
                }
            } else {
                if (insert_prev){
                    data.push(insert_into_next_iteration);
                } else {
                    data.push(0);
                }
                insert_prev=false;
            }
            //make next date
            d += 1;
            if (d>31) {
                d=1; m+=1;
                if (m>12) {
                    m=1; y+=1;
                }
            }
        }
        //// end date (doesn't go through the while loop above)
        var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
        //x-axis
        labels.push(date);
        //y-axis
        if (insert_prev){
            data.push(insert_into_next_iteration)
        } else {
            data.push(0);
        }

        // remove old chart
        var graph_el = $("#graph");
        graph_el.empty();
        graph_el.append('<div class="graph__description message message--info" id="graph__description"></div>');
        graph_el.append('<canvas id="graph__cnvs" width="800" height="400"></canvas>');

        // add new chart
        var el = $("#graph__cnvs");
        var RevChart = new Chart(el, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: 'rgba(0, 200, 26, 1)', //groen //weg?
                    //borderWidth: 1, //weg?
                    spanGaps:false,
                }],
            },
            options: {
                legend: {
                    display:false
                },
                title: {
                    display:true,
                    text: "Omzet"
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
                            maxRotation: 90,
                            minRotation: 90,
                        }
                    }]
                }
            }
        })

        // remove old description
        var theDiv = document.getElementById("graph__description");
        theDiv.innerHTML = "";
        // put desciption below graph
        var descr = 'De gegenereerde omzet.';
        var content = document.createTextNode(descr); 
        theDiv.appendChild(content);
    }

    function showUserAmntGraph(begin_date, end_date, graphData)
    {
        // graph
        var labels = new Array();
        var data = [];

        // put all dates in x-axis. put all corresponding data in graph
        var b_dateA = begin_date.split("-");
        var y = parseInt(b_dateA[0]);
        var m = parseInt(b_dateA[1]);
        var d = parseInt(b_dateA[2]);

        var e_dateA = end_date.split("-");
        var end_y = parseInt(e_dateA[0]);
        var end_m = parseInt(e_dateA[1]);
        var end_d = parseInt(e_dateA[2]);

        var day_usercount = 0;
        var datescore = 0;
        while (!(y == end_y && m == end_m && d == end_d)) {
            var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
            //x-axis
            labels.push(date);
            //y-axis
            var datescore = getDateScore(date);
            $.each(graphData, function(key, value)
            {
                var userscore = getDateScore(value.registration_date.split("T")[0]);
                if (userscore+1 < datescore) {
                    day_usercount += 1;
                }
            })
            data.push(day_usercount);
            day_usercount = 0;
            //make next date
            d += 1;
            if (d>31) {
                d=1; m+=1;
                if (m>12) {
                    m=1; y+=1;
                }
            }
        }
        //// end date (doesn't go through the while loop above)
        var date = (String(y) + "-" + putZeroBeforeNum(m) + "-" + putZeroBeforeNum(d));
        //x-axis
        labels.push(date);
        //y-axis
        var datescore = getDateScore(date);
        $.each(graphData, function(key, value)
        {
            var userscore = getDateScore(value.registration_date.split("T")[0]);
            if (userscore+1 < datescore) {
                day_usercount += 1;
            }
        })
        data.push(day_usercount);
        day_usercount = 0;

        // remove old chart
        var graph_el = $("#graph");
        graph_el.empty();
        graph_el.append('<div class="graph__description message message--info" id="graph__description"></div>');
        graph_el.append('<canvas id="graph__cnvs" width="800" height="400"></canvas>');

        // add new chart
        var el = $("#graph__cnvs");
        var RevChart = new Chart(el, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: 'rgba(0, 200, 26, 1)', //groen //weg?
                    //borderWidth: 1, //weg?
                    spanGaps:false,
                }],
            },
            options: {
                legend: {
                    display:false
                },
                title: {
                    display:true,
                    text: "Aantal gebruikers"
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
                            maxRotation: 90,
                            minRotation: 90,
                        }
                    }]
                }
            }
        })
        // remove old description
        var theDiv = document.getElementById("graph__description");
        theDiv.innerHTML = "";
        // put desciption below graph
        var descr = 'Deze grafiek geeft een overzicht van het aantal ';
        var content = document.createTextNode(descr); 
        theDiv.appendChild(content);
    }

    function getDateScore(date) //expected format: "yyyy-mm-dd" (string)
    {
        var year_points  = 12*31*1;
        var month_points =    31*1;
        var day_points   =       1;

        var dateA = date.split("-");
        var y = parseInt(dateA[0]);
        var m = parseInt(dateA[1]);
        var d = parseInt(dateA[2]);

        return (y*year_points + m*month_points + d*day_points);
    }

    return {
        setActionListener: setActionListener,
        setRangeChangeListeners: setRangeChangeListeners,
        setGraphSelectListener: setGraphSelectListener,
        showTopGamesGraph: showTopGamesGraph,
        showRevenueGraph: showRevenueGraph,
        showUserAmntGraph: showUserAmntGraph
    }
}

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
            if (viewData.data != undefined && viewData.data != "")
            {
                $.each(viewData.data, function(key, value) {
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

                // Build pagination
                if (viewData.pages.last == undefined)
                {
                    viewData.pages.last = viewData.pages.prev + 1;
                }

                for (i = 1; i < viewData.pages.last + 1; i++)
                {
                    var pagination = $("#pagination__item").clone();

                    $(pagination).find(".pagination__link").html(i);

                    if (i == viewData.pages.next - 1 || i == viewData.pages.prev + 1)
                    {
                        $(pagination).find(".pagination__link").addClass("pagination__link--active");
                    }

                    $("#pagination__items").append(pagination);
                }
            }
            else
            {
                $("#products").html("<div class='message message--info'><b>Helaas..</b><br />Er zijn geen games gevonden die voldoen aan de gekozen filters.</div>")
            }

            // Remove the first list item, because this item is always empty
            $("#product__list__item").first().remove();
            $("#pagination__item").first().remove();
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
        $("#component").on("change", "input[type=checkbox]", function(event) {
            $("#pagefilter").val(0);
            refreshProducts();
            $("#product_filter").submit();
        });

        // Update de productenlijst als een waarde in de slider veranderd(alle manieren)
        $("#component").on("change keyup", "input[name=price-max], input[name=price-min]", function(event) {
            if($("#pricemin").val() == null) {
                $("#pricemin").val(0);
            }
            else
            {
                $("#pagefilter").val(0);
                refreshProducts();
                $("#product_filter").submit();
            }
        });

        $("#component").on("click", ".pagination__link", function(event)
        {
            $("#pagefilter").val($(this).html());
            refreshProducts();
            $("#product_filter").submit();
            $("#component").on("submit", "#product_filter", action);
        });
        $("#component").on("submit", "#product_filter", action);
    }

    function refreshProducts()
    {
        window.scrollTo(0, 0);
        $("#products").html('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div> </div>');
    }

    // Return the methods that can be used by other programs (the controller in this case)
    return {
        setView: setView,
        loadProducts: loadProducts,
        setActionListener: setActionListener,
        setFilterListener: setFilterListener,
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

                $(".singleproduct__publisher img").attr("data-tooltip", String(product.publisher));
                $(".singleproduct__platform img").attr("data-tooltip", String(product.platform));


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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbnNlcnRfbW9kZWwuanMiLCJhZG1pbnVzZXJfbW9kZWwuanMiLCJhZG1pbl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImRlbF9nYW1lX21vZGVsLmpzIiwiZmF2b3JpdGVsaXN0X21vZGVsLmpzIiwibG9naW5fbW9kZWwuanMiLCJsb2dvdXRfbW9kZWwuanMiLCJvcmRlcnNfbW9kZWwuanMiLCJvcmRlcl9tb2RlbC5qcyIsInByb2R1Y3RzX21vZGVsLmpzIiwicHVibGljX3dpc2hsaXN0X21vZGVsLmpzIiwicmVnaXN0ZXJfbW9kZWwuanMiLCJyZXNldHBhc3N3b3JkX21vZGVsLmpzIiwic2luZ2xlX3Byb2R1Y3RfbW9kZWwuanMiLCJzdGF0c19tb2RlbC5qcyIsInVzZXJfbW9kZWwuanMiLCJ3aXNobGlzdF9tb2RlbC5qcyIsImFkbWluc2VydF9jb250cm9sbGVyLmpzIiwiYWRtaW51c2VyX2NvbnRyb2xsZXIuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiY2FydF9jb250cm9sbGVyLmpzIiwiY2hlY2tvdXRfY29udHJvbGxlci5qcyIsImRlbGdhbWVfY29udHJvbGxlci5qcyIsImVycm9yX2NvbnRyb2xsZXIuanMiLCJmYXZvcml0ZWxpc3RfY29udHJvbGxlci5qcyIsImxvZ2luX2NvbnRyb2xsZXIuanMiLCJsb2dvdXRfY29udHJvbGxlci5qcyIsIm9yZGVyc19jb250cm9sbGVyLmpzIiwib3JkZXJfY29udHJvbGxlci5qcyIsInByb2R1Y3RzX2NvbnRyb2xsZXIuanMiLCJwdWJsaWNfd2lzaGxpc3RfY29udHJvbGxlci5qcyIsInJlZ2lzdGVyX2NvbnRyb2xsZXIuanMiLCJyZXNldHBhc3N3b3JkX2NvbnRyb2xsZXIuanMiLCJzaW5nbGVfcHJvZHVjdF9jb250cm9sbGVyLmpzIiwic3RhdHNfY29udHJvbGxlci5qcyIsInVzZXJfY29udHJvbGxlci5qcyIsIndpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJhZG1pbi9hZG1pbl92aWV3LmpzIiwiYWRtaW5zZXJ0L2FkbWluc2VydF92aWV3LmpzIiwiY2FydC9jYXJ0X3ZpZXcuanMiLCJhZG1pbnVzZXIvYWRtaW51c2VyX3ZpZXcuanMiLCJjaGVja291dC9jaGVja291dF92aWV3LmpzIiwiZGVsX2dhbWUvZGVsX2dhbWVfdmlldy5qcyIsImVycm9yL2Vycm9yX3ZpZXcuanMiLCJmYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0X3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsIm9yZGVycy9vcmRlcnNfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwid2lzaGxpc3Qvd2lzaGxpc3Rfdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3REQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdGRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIENoYXJ0LmpzXHJcbiAqIGh0dHA6Ly9jaGFydGpzLm9yZy9cclxuICogVmVyc2lvbjogMi40LjBcclxuICpcclxuICogQ29weXJpZ2h0IDIwMTYgTmljayBEb3duaWVcclxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFydGpzL0NoYXJ0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcclxuICovXHJcbiFmdW5jdGlvbih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIGU7ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZS5DaGFydD10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiB0KGUsYSxpKXtmdW5jdGlvbiBuKHIsbCl7aWYoIWFbcl0pe2lmKCFlW3JdKXt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFsJiZzKXJldHVybiBzKHIsITApO2lmKG8pcmV0dXJuIG8ociwhMCk7dmFyIGQ9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBkLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZH12YXIgdT1hW3JdPXtleHBvcnRzOnt9fTtlW3JdWzBdLmNhbGwodS5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBhPWVbcl1bMV1bdF07cmV0dXJuIG4oYT9hOnQpfSx1LHUuZXhwb3J0cyx0LGUsYSxpKX1yZXR1cm4gYVtyXS5leHBvcnRzfWZvcih2YXIgbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLHI9MDtyPGkubGVuZ3RoO3IrKyluKGlbcl0pO3JldHVybiBufSh7MTpbZnVuY3Rpb24odCxlLGEpe30se31dLDI6W2Z1bmN0aW9uKHQsZSxhKXtmdW5jdGlvbiBpKHQpe2lmKHQpe3ZhciBlPS9eIyhbYS1mQS1GMC05XXszfSkkLyxhPS9eIyhbYS1mQS1GMC05XXs2fSkkLyxpPS9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLG49L15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sbz0vKFxcdyspLyxyPVswLDAsMF0sbD0xLHM9dC5tYXRjaChlKTtpZihzKXtzPXNbMV07Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzW2RdK3NbZF0sMTYpfWVsc2UgaWYocz10Lm1hdGNoKGEpKXtzPXNbMV07Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzLnNsaWNlKDIqZCwyKmQrMiksMTYpfWVsc2UgaWYocz10Lm1hdGNoKGkpKXtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHNbZCsxXSk7bD1wYXJzZUZsb2F0KHNbNF0pfWVsc2UgaWYocz10Lm1hdGNoKG4pKXtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPU1hdGgucm91bmQoMi41NSpwYXJzZUZsb2F0KHNbZCsxXSkpO2w9cGFyc2VGbG9hdChzWzRdKX1lbHNlIGlmKHM9dC5tYXRjaChvKSl7aWYoXCJ0cmFuc3BhcmVudFwiPT1zWzFdKXJldHVyblswLDAsMCwwXTtpZihyPXlbc1sxXV0sIXIpcmV0dXJufWZvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09dihyW2RdLDAsMjU1KTtyZXR1cm4gbD1sfHwwPT1sP3YobCwwLDEpOjEsclszXT1sLHJ9fWZ1bmN0aW9uIG4odCl7aWYodCl7dmFyIGU9L15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvLGE9dC5tYXRjaChlKTtpZihhKXt2YXIgaT1wYXJzZUZsb2F0KGFbNF0pLG49dihwYXJzZUludChhWzFdKSwwLDM2MCksbz12KHBhcnNlRmxvYXQoYVsyXSksMCwxMDApLHI9dihwYXJzZUZsb2F0KGFbM10pLDAsMTAwKSxsPXYoaXNOYU4oaSk/MTppLDAsMSk7cmV0dXJuW24sbyxyLGxdfX19ZnVuY3Rpb24gbyh0KXtpZih0KXt2YXIgZT0vXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvLGE9dC5tYXRjaChlKTtpZihhKXt2YXIgaT1wYXJzZUZsb2F0KGFbNF0pLG49dihwYXJzZUludChhWzFdKSwwLDM2MCksbz12KHBhcnNlRmxvYXQoYVsyXSksMCwxMDApLHI9dihwYXJzZUZsb2F0KGFbM10pLDAsMTAwKSxsPXYoaXNOYU4oaSk/MTppLDAsMSk7cmV0dXJuW24sbyxyLGxdfX19ZnVuY3Rpb24gcih0KXt2YXIgZT1pKHQpO3JldHVybiBlJiZlLnNsaWNlKDAsMyl9ZnVuY3Rpb24gbCh0KXt2YXIgZT1uKHQpO3JldHVybiBlJiZlLnNsaWNlKDAsMyl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1pKHQpO3JldHVybiBlP2VbM106KGU9bih0KSk/ZVszXTooZT1vKHQpKT9lWzNdOnZvaWQgMH1mdW5jdGlvbiBkKHQpe3JldHVyblwiI1wiK3godFswXSkreCh0WzFdKSt4KHRbMl0pfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4gMT5lfHx0WzNdJiZ0WzNdPDE/Yyh0LGUpOlwicmdiKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIsIFwiK3RbMl0rXCIpXCJ9ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJyZ2JhKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIsIFwiK3RbMl0rXCIsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gaCh0LGUpe2lmKDE+ZXx8dFszXSYmdFszXTwxKXJldHVybiBmKHQsZSk7dmFyIGE9TWF0aC5yb3VuZCh0WzBdLzI1NSoxMDApLGk9TWF0aC5yb3VuZCh0WzFdLzI1NSoxMDApLG49TWF0aC5yb3VuZCh0WzJdLzI1NSoxMDApO3JldHVyblwicmdiKFwiK2ErXCIlLCBcIitpK1wiJSwgXCIrbitcIiUpXCJ9ZnVuY3Rpb24gZih0LGUpe3ZhciBhPU1hdGgucm91bmQodFswXS8yNTUqMTAwKSxpPU1hdGgucm91bmQodFsxXS8yNTUqMTAwKSxuPU1hdGgucm91bmQodFsyXS8yNTUqMTAwKTtyZXR1cm5cInJnYmEoXCIrYStcIiUsIFwiK2krXCIlLCBcIituK1wiJSwgXCIrKGV8fHRbM118fDEpK1wiKVwifWZ1bmN0aW9uIGcodCxlKXtyZXR1cm4gMT5lfHx0WzNdJiZ0WzNdPDE/cCh0LGUpOlwiaHNsKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJSlcIn1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcImhzbGEoXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlLCBcIitlK1wiKVwifWZ1bmN0aW9uIG0odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwiaHdiKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJVwiKyh2b2lkIDAhPT1lJiYxIT09ZT9cIiwgXCIrZTpcIlwiKStcIilcIn1mdW5jdGlvbiBiKHQpe3JldHVybiBrW3Quc2xpY2UoMCwzKV19ZnVuY3Rpb24gdih0LGUsYSl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGUsdCksYSl9ZnVuY3Rpb24geCh0KXt2YXIgZT10LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO3JldHVybiBlLmxlbmd0aDwyP1wiMFwiK2U6ZX12YXIgeT10KDYpO2UuZXhwb3J0cz17Z2V0UmdiYTppLGdldEhzbGE6bixnZXRSZ2I6cixnZXRIc2w6bCxnZXRId2I6byxnZXRBbHBoYTpzLGhleFN0cmluZzpkLHJnYlN0cmluZzp1LHJnYmFTdHJpbmc6YyxwZXJjZW50U3RyaW5nOmgscGVyY2VudGFTdHJpbmc6Zixoc2xTdHJpbmc6Zyxoc2xhU3RyaW5nOnAsaHdiU3RyaW5nOm0sa2V5d29yZDpifTt2YXIgaz17fTtmb3IodmFyIFMgaW4geSlrW3lbU11dPVN9LHs2OjZ9XSwzOltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCg1KSxuPXQoMiksbz1mdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgbylyZXR1cm4gdDtpZighKHRoaXMgaW5zdGFuY2VvZiBvKSlyZXR1cm4gbmV3IG8odCk7dGhpcy52YWx1ZXM9e3JnYjpbMCwwLDBdLGhzbDpbMCwwLDBdLGhzdjpbMCwwLDBdLGh3YjpbMCwwLDBdLGNteWs6WzAsMCwwLDBdLGFscGhhOjF9O3ZhciBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlmKGU9bi5nZXRSZ2JhKHQpKXRoaXMuc2V0VmFsdWVzKFwicmdiXCIsZSk7ZWxzZSBpZihlPW4uZ2V0SHNsYSh0KSl0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpO2Vsc2V7aWYoIShlPW4uZ2V0SHdiKHQpKSl0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicrdCsnXCInKTt0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIHQpaWYoZT10LHZvaWQgMCE9PWUucnx8dm9pZCAwIT09ZS5yZWQpdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUubHx8dm9pZCAwIT09ZS5saWdodG5lc3MpdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUudnx8dm9pZCAwIT09ZS52YWx1ZSl0aGlzLnNldFZhbHVlcyhcImhzdlwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS53fHx2b2lkIDAhPT1lLndoaXRlbmVzcyl0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpO2Vsc2V7aWYodm9pZCAwPT09ZS5jJiZ2b2lkIDA9PT1lLmN5YW4pdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0IFwiK0pTT04uc3RyaW5naWZ5KHQpKTt0aGlzLnNldFZhbHVlcyhcImNteWtcIixlKX19O28ucHJvdG90eXBlPXtyZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcInJnYlwiLGFyZ3VtZW50cyl9LGhzbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHNsXCIsYXJndW1lbnRzKX0saHN2OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc3ZcIixhcmd1bWVudHMpfSxod2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImh3YlwiLGFyZ3VtZW50cyl9LGNteWs6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImNteWtcIixhcmd1bWVudHMpfSxyZ2JBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5yZ2J9LGhzbEFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmhzbH0saHN2QXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuaHN2fSxod2JBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiAxIT09dC5hbHBoYT90Lmh3Yi5jb25jYXQoW3QuYWxwaGFdKTp0Lmh3Yn0sY215a0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmNteWt9LHJnYmFBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiB0LnJnYi5jb25jYXQoW3QuYWxwaGFdKX0saHNsYUFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIHQuaHNsLmNvbmNhdChbdC5hbHBoYV0pfSxhbHBoYTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLnZhbHVlcy5hbHBoYToodGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLHQpLHRoaXMpfSxyZWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDAsdCl9LGdyZWVuOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwxLHQpfSxibHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwyLHQpfSxodWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJih0JT0zNjAsdD0wPnQ/MzYwK3Q6dCksdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMCx0KX0sc2F0dXJhdGlvbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMSx0KX0sbGlnaHRuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwyLHQpfSxzYXR1cmF0aW9udjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsMSx0KX0sd2hpdGVuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwxLHQpfSxibGFja25lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLDIsdCl9LHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwyLHQpfSxjeWFuOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMCx0KX0sbWFnZW50YTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDEsdCl9LHllbGxvdzpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDIsdCl9LGJsYWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMyx0KX0saGV4U3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYil9LHJnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxyZ2JhU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxwZXJjZW50U3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxoc2xTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLHRoaXMudmFsdWVzLmFscGhhKX0saHNsYVN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLHRoaXMudmFsdWVzLmFscGhhKX0saHdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3Yix0aGlzLnZhbHVlcy5hbHBoYSl9LGtleXdvcmQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHJnYk51bWJlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYjtyZXR1cm4gdFswXTw8MTZ8dFsxXTw8OHx0WzJdfSxsdW1pbm9zaXR5OmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMudmFsdWVzLnJnYixlPVtdLGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGk9dFthXS8yNTU7ZVthXT0uMDM5Mjg+PWk/aS8xMi45MjpNYXRoLnBvdygoaSsuMDU1KS8xLjA1NSwyLjQpfXJldHVybi4yMTI2KmVbMF0rLjcxNTIqZVsxXSsuMDcyMiplWzJdfSxjb250cmFzdDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmx1bWlub3NpdHkoKSxhPXQubHVtaW5vc2l0eSgpO3JldHVybiBlPmE/KGUrLjA1KS8oYSsuMDUpOihhKy4wNSkvKGUrLjA1KX0sbGV2ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb250cmFzdCh0KTtyZXR1cm4gZT49Ny4xP1wiQUFBXCI6ZT49NC41P1wiQUFcIjpcIlwifSxkYXJrOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9KDI5OSp0WzBdKzU4Nyp0WzFdKzExNCp0WzJdKS8xZTM7cmV0dXJuIDEyOD5lfSxsaWdodDpmdW5jdGlvbigpe3JldHVybiF0aGlzLmRhcmsoKX0sbmVnYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDszPmU7ZSsrKXRbZV09MjU1LXRoaXMudmFsdWVzLnJnYltlXTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIix0KSx0aGlzfSxsaWdodGVuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsyXSs9ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sZGFya2VuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsyXS09ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sc2F0dXJhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzFdKz1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxkZXNhdHVyYXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsxXS09ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sd2hpdGVuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmh3YjtyZXR1cm4gZVsxXSs9ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSksdGhpc30sYmxhY2tlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5od2I7cmV0dXJuIGVbMl0rPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpLHRoaXN9LGdyZXlzY2FsZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYixlPS4zKnRbMF0rLjU5KnRbMV0rLjExKnRbMl07cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsW2UsZSxlXSksdGhpc30sY2xlYXJlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5hbHBoYTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLGUtZSp0KSx0aGlzfSxvcGFxdWVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmFscGhhO3JldHVybiB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsZStlKnQpLHRoaXN9LHJvdGF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2wsYT0oZVswXSt0KSUzNjA7cmV0dXJuIGVbMF09MD5hPzM2MCthOmEsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxtaXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9dCxuPXZvaWQgMD09PWU/LjU6ZSxvPTIqbi0xLHI9YS5hbHBoYSgpLWkuYWxwaGEoKSxsPSgobypyPT09LTE/bzoobytyKS8oMStvKnIpKSsxKS8yLHM9MS1sO3JldHVybiB0aGlzLnJnYihsKmEucmVkKCkrcyppLnJlZCgpLGwqYS5ncmVlbigpK3MqaS5ncmVlbigpLGwqYS5ibHVlKCkrcyppLmJsdWUoKSkuYWxwaGEoYS5hbHBoYSgpKm4raS5hbHBoYSgpKigxLW4pKX0sdG9KU09OOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmdiKCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIHQsZSxhPW5ldyBvLGk9dGhpcy52YWx1ZXMsbj1hLnZhbHVlcztmb3IodmFyIHIgaW4gaSlpLmhhc093blByb3BlcnR5KHIpJiYodD1pW3JdLGU9e30udG9TdHJpbmcuY2FsbCh0KSxcIltvYmplY3QgQXJyYXldXCI9PT1lP25bcl09dC5zbGljZSgwKTpcIltvYmplY3QgTnVtYmVyXVwiPT09ZT9uW3JdPXQ6Y29uc29sZS5lcnJvcihcInVuZXhwZWN0ZWQgY29sb3IgdmFsdWU6XCIsdCkpO3JldHVybiBhfX0sby5wcm90b3R5cGUuc3BhY2VzPXtyZ2I6W1wicmVkXCIsXCJncmVlblwiLFwiYmx1ZVwiXSxoc2w6W1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJsaWdodG5lc3NcIl0saHN2OltcImh1ZVwiLFwic2F0dXJhdGlvblwiLFwidmFsdWVcIl0saHdiOltcImh1ZVwiLFwid2hpdGVuZXNzXCIsXCJibGFja25lc3NcIl0sY215azpbXCJjeWFuXCIsXCJtYWdlbnRhXCIsXCJ5ZWxsb3dcIixcImJsYWNrXCJdfSxvLnByb3RvdHlwZS5tYXhlcz17cmdiOlsyNTUsMjU1LDI1NV0saHNsOlszNjAsMTAwLDEwMF0saHN2OlszNjAsMTAwLDEwMF0saHdiOlszNjAsMTAwLDEwMF0sY215azpbMTAwLDEwMCwxMDAsMTAwXX0sby5wcm90b3R5cGUuZ2V0VmFsdWVzPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnZhbHVlcyxhPXt9LGk9MDtpPHQubGVuZ3RoO2krKylhW3QuY2hhckF0KGkpXT1lW3RdW2ldO3JldHVybiAxIT09ZS5hbHBoYSYmKGEuYT1lLmFscGhhKSxhfSxvLnByb3RvdHlwZS5zZXRWYWx1ZXM9ZnVuY3Rpb24odCxlKXt2YXIgYSxuPXRoaXMudmFsdWVzLG89dGhpcy5zcGFjZXMscj10aGlzLm1heGVzLGw9MTtpZihcImFscGhhXCI9PT10KWw9ZTtlbHNlIGlmKGUubGVuZ3RoKW5bdF09ZS5zbGljZSgwLHQubGVuZ3RoKSxsPWVbdC5sZW5ndGhdO2Vsc2UgaWYodm9pZCAwIT09ZVt0LmNoYXJBdCgwKV0pe2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspblt0XVthXT1lW3QuY2hhckF0KGEpXTtsPWUuYX1lbHNlIGlmKHZvaWQgMCE9PWVbb1t0XVswXV0pe3ZhciBzPW9bdF07Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyluW3RdW2FdPWVbc1thXV07bD1lLmFscGhhfWlmKG4uYWxwaGE9TWF0aC5tYXgoMCxNYXRoLm1pbigxLHZvaWQgMD09PWw/bi5hbHBoYTpsKSksXCJhbHBoYVwiPT09dClyZXR1cm4hMTt2YXIgZDtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKWQ9TWF0aC5tYXgoMCxNYXRoLm1pbihyW3RdW2FdLG5bdF1bYV0pKSxuW3RdW2FdPU1hdGgucm91bmQoZCk7Zm9yKHZhciB1IGluIG8pdSE9PXQmJihuW3VdPWlbdF1bdV0oblt0XSkpO3JldHVybiEwfSxvLnByb3RvdHlwZS5zZXRTcGFjZT1mdW5jdGlvbih0LGUpe3ZhciBhPWVbMF07cmV0dXJuIHZvaWQgMD09PWE/dGhpcy5nZXRWYWx1ZXModCk6KFwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSksdGhpcy5zZXRWYWx1ZXModCxhKSx0aGlzKX0sby5wcm90b3R5cGUuc2V0Q2hhbm5lbD1mdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcy52YWx1ZXNbdF07cmV0dXJuIHZvaWQgMD09PWE/aVtlXTphPT09aVtlXT90aGlzOihpW2VdPWEsdGhpcy5zZXRWYWx1ZXModCxpKSx0aGlzKX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKHdpbmRvdy5Db2xvcj1vKSxlLmV4cG9ydHM9b30sezI6Miw1OjV9XSw0OltmdW5jdGlvbih0LGUsYSl7ZnVuY3Rpb24gaSh0KXt2YXIgZSxhLGksbj10WzBdLzI1NSxvPXRbMV0vMjU1LHI9dFsyXS8yNTUsbD1NYXRoLm1pbihuLG8scikscz1NYXRoLm1heChuLG8sciksZD1zLWw7cmV0dXJuIHM9PWw/ZT0wOm49PXM/ZT0oby1yKS9kOm89PXM/ZT0yKyhyLW4pL2Q6cj09cyYmKGU9NCsobi1vKS9kKSxlPU1hdGgubWluKDYwKmUsMzYwKSwwPmUmJihlKz0zNjApLGk9KGwrcykvMixhPXM9PWw/MDouNT49aT9kLyhzK2wpOmQvKDItcy1sKSxbZSwxMDAqYSwxMDAqaV19ZnVuY3Rpb24gbih0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl0sbD1NYXRoLm1pbihuLG8scikscz1NYXRoLm1heChuLG8sciksZD1zLWw7cmV0dXJuIGE9MD09cz8wOmQvcyoxZTMvMTAscz09bD9lPTA6bj09cz9lPShvLXIpL2Q6bz09cz9lPTIrKHItbikvZDpyPT1zJiYoZT00KyhuLW8pL2QpLGU9TWF0aC5taW4oNjAqZSwzNjApLDA+ZSYmKGUrPTM2MCksaT1zLzI1NSoxZTMvMTAsW2UsYSxpXX1mdW5jdGlvbiBvKHQpe3ZhciBlPXRbMF0sYT10WzFdLG49dFsyXSxvPWkodClbMF0scj0xLzI1NSpNYXRoLm1pbihlLE1hdGgubWluKGEsbikpLG49MS0xLzI1NSpNYXRoLm1heChlLE1hdGgubWF4KGEsbikpO3JldHVybltvLDEwMCpyLDEwMCpuXX1mdW5jdGlvbiBsKHQpe3ZhciBlLGEsaSxuLG89dFswXS8yNTUscj10WzFdLzI1NSxsPXRbMl0vMjU1O3JldHVybiBuPU1hdGgubWluKDEtbywxLXIsMS1sKSxlPSgxLW8tbikvKDEtbil8fDAsYT0oMS1yLW4pLygxLW4pfHwwLGk9KDEtbC1uKS8oMS1uKXx8MCxbMTAwKmUsMTAwKmEsMTAwKmksMTAwKm5dfWZ1bmN0aW9uIHModCl7cmV0dXJuIEdbSlNPTi5zdHJpbmdpZnkodCldfWZ1bmN0aW9uIGQodCl7dmFyIGU9dFswXS8yNTUsYT10WzFdLzI1NSxpPXRbMl0vMjU1O2U9ZT4uMDQwNDU/TWF0aC5wb3coKGUrLjA1NSkvMS4wNTUsMi40KTplLzEyLjkyLGE9YT4uMDQwNDU/TWF0aC5wb3coKGErLjA1NSkvMS4wNTUsMi40KTphLzEyLjkyLGk9aT4uMDQwNDU/TWF0aC5wb3coKGkrLjA1NSkvMS4wNTUsMi40KTppLzEyLjkyO3ZhciBuPS40MTI0KmUrLjM1NzYqYSsuMTgwNSppLG89LjIxMjYqZSsuNzE1MiphKy4wNzIyKmkscj0uMDE5MyplKy4xMTkyKmErLjk1MDUqaTtyZXR1cm5bMTAwKm4sMTAwKm8sMTAwKnJdfWZ1bmN0aW9uIHUodCl7dmFyIGUsYSxpLG49ZCh0KSxvPW5bMF0scj1uWzFdLGw9blsyXTtyZXR1cm4gby89OTUuMDQ3LHIvPTEwMCxsLz0xMDguODgzLG89bz4uMDA4ODU2P01hdGgucG93KG8sMS8zKTo3Ljc4NypvKzE2LzExNixyPXI+LjAwODg1Nj9NYXRoLnBvdyhyLDEvMyk6Ny43ODcqcisxNi8xMTYsbD1sPi4wMDg4NTY/TWF0aC5wb3cobCwxLzMpOjcuNzg3KmwrMTYvMTE2LGU9MTE2KnItMTYsYT01MDAqKG8tciksaT0yMDAqKHItbCksW2UsYSxpXX1mdW5jdGlvbiBjKHQpe3JldHVybiBXKHUodCkpfWZ1bmN0aW9uIGgodCl7dmFyIGUsYSxpLG4sbyxyPXRbMF0vMzYwLGw9dFsxXS8xMDAscz10WzJdLzEwMDtpZigwPT1sKXJldHVybiBvPTI1NSpzLFtvLG8sb107YT0uNT5zP3MqKDErbCk6cytsLXMqbCxlPTIqcy1hLG49WzAsMCwwXTtmb3IodmFyIGQ9MDszPmQ7ZCsrKWk9cisxLzMqLShkLTEpLDA+aSYmaSsrLGk+MSYmaS0tLG89MT42Kmk/ZSs2KihhLWUpKmk6MT4yKmk/YToyPjMqaT9lKyhhLWUpKigyLzMtaSkqNjplLG5bZF09MjU1Km87cmV0dXJuIG59ZnVuY3Rpb24gZih0KXt2YXIgZSxhLGk9dFswXSxuPXRbMV0vMTAwLG89dFsyXS8xMDA7cmV0dXJuIDA9PT1vP1swLDAsMF06KG8qPTIsbio9MT49bz9vOjItbyxhPShvK24pLzIsZT0yKm4vKG8rbiksW2ksMTAwKmUsMTAwKmFdKX1mdW5jdGlvbiBwKHQpe3JldHVybiBvKGgodCkpfWZ1bmN0aW9uIG0odCl7cmV0dXJuIGwoaCh0KSl9ZnVuY3Rpb24gdih0KXtyZXR1cm4gcyhoKHQpKX1mdW5jdGlvbiB4KHQpe3ZhciBlPXRbMF0vNjAsYT10WzFdLzEwMCxpPXRbMl0vMTAwLG49TWF0aC5mbG9vcihlKSU2LG89ZS1NYXRoLmZsb29yKGUpLHI9MjU1KmkqKDEtYSksbD0yNTUqaSooMS1hKm8pLHM9MjU1KmkqKDEtYSooMS1vKSksaT0yNTUqaTtzd2l0Y2gobil7Y2FzZSAwOnJldHVybltpLHMscl07Y2FzZSAxOnJldHVybltsLGkscl07Y2FzZSAyOnJldHVybltyLGksc107Y2FzZSAzOnJldHVybltyLGwsaV07Y2FzZSA0OnJldHVybltzLHIsaV07Y2FzZSA1OnJldHVybltpLHIsbF19fWZ1bmN0aW9uIHkodCl7dmFyIGUsYSxpPXRbMF0sbj10WzFdLzEwMCxvPXRbMl0vMTAwO3JldHVybiBhPSgyLW4pKm8sZT1uKm8sZS89MT49YT9hOjItYSxlPWV8fDAsYS89MixbaSwxMDAqZSwxMDAqYV19ZnVuY3Rpb24gayh0KXtyZXR1cm4gbyh4KHQpKX1mdW5jdGlvbiBTKHQpe3JldHVybiBsKHgodCkpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIHMoeCh0KSl9ZnVuY3Rpb24gTSh0KXt2YXIgZSxhLGksbixvPXRbMF0vMzYwLGw9dFsxXS8xMDAscz10WzJdLzEwMCxkPWwrcztzd2l0Y2goZD4xJiYobC89ZCxzLz1kKSxlPU1hdGguZmxvb3IoNipvKSxhPTEtcyxpPTYqby1lLDAhPSgxJmUpJiYoaT0xLWkpLG49bCtpKihhLWwpLGUpe2RlZmF1bHQ6Y2FzZSA2OmNhc2UgMDpyPWEsZz1uLGI9bDticmVhaztjYXNlIDE6cj1uLGc9YSxiPWw7YnJlYWs7Y2FzZSAyOnI9bCxnPWEsYj1uO2JyZWFrO2Nhc2UgMzpyPWwsZz1uLGI9YTticmVhaztjYXNlIDQ6cj1uLGc9bCxiPWE7YnJlYWs7Y2FzZSA1OnI9YSxnPWwsYj1ufXJldHVyblsyNTUqciwyNTUqZywyNTUqYl19ZnVuY3Rpb24gQyh0KXtyZXR1cm4gaShNKHQpKX1mdW5jdGlvbiBEKHQpe3JldHVybiBuKE0odCkpfWZ1bmN0aW9uIEkodCl7cmV0dXJuIGwoTSh0KSl9ZnVuY3Rpb24gQSh0KXtyZXR1cm4gcyhNKHQpKX1mdW5jdGlvbiBUKHQpe3ZhciBlLGEsaSxuPXRbMF0vMTAwLG89dFsxXS8xMDAscj10WzJdLzEwMCxsPXRbM10vMTAwO3JldHVybiBlPTEtTWF0aC5taW4oMSxuKigxLWwpK2wpLGE9MS1NYXRoLm1pbigxLG8qKDEtbCkrbCksaT0xLU1hdGgubWluKDEsciooMS1sKStsKSxbMjU1KmUsMjU1KmEsMjU1KmldfWZ1bmN0aW9uIFAodCl7cmV0dXJuIGkoVCh0KSl9ZnVuY3Rpb24gRih0KXtyZXR1cm4gbihUKHQpKX1mdW5jdGlvbiBfKHQpe3JldHVybiBvKFQodCkpfWZ1bmN0aW9uIFIodCl7cmV0dXJuIHMoVCh0KSl9ZnVuY3Rpb24gVih0KXt2YXIgZSxhLGksbj10WzBdLzEwMCxvPXRbMV0vMTAwLHI9dFsyXS8xMDA7cmV0dXJuIGU9My4yNDA2Km4rLTEuNTM3MipvK3IqLS40OTg2LGE9biotLjk2ODkrMS44NzU4Km8rLjA0MTUqcixpPS4wNTU3Km4rbyotLjIwNCsxLjA1NypyLGU9ZT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhlLDEvMi40KS0uMDU1OmU9MTIuOTIqZSxhPWE+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coYSwxLzIuNCktLjA1NTphPTEyLjkyKmEsaT1pPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGksMS8yLjQpLS4wNTU6aT0xMi45MippLGU9TWF0aC5taW4oTWF0aC5tYXgoMCxlKSwxKSxhPU1hdGgubWluKE1hdGgubWF4KDAsYSksMSksaT1NYXRoLm1pbihNYXRoLm1heCgwLGkpLDEpLFsyNTUqZSwyNTUqYSwyNTUqaV19ZnVuY3Rpb24gTCh0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIG4vPTk1LjA0NyxvLz0xMDAsci89MTA4Ljg4MyxuPW4+LjAwODg1Nj9NYXRoLnBvdyhuLDEvMyk6Ny43ODcqbisxNi8xMTYsbz1vPi4wMDg4NTY/TWF0aC5wb3cobywxLzMpOjcuNzg3Km8rMTYvMTE2LHI9cj4uMDA4ODU2P01hdGgucG93KHIsMS8zKTo3Ljc4NypyKzE2LzExNixlPTExNipvLTE2LGE9NTAwKihuLW8pLGk9MjAwKihvLXIpLFtlLGEsaV19ZnVuY3Rpb24gTyh0KXtyZXR1cm4gVyhMKHQpKX1mdW5jdGlvbiBCKHQpe3ZhciBlLGEsaSxuLG89dFswXSxyPXRbMV0sbD10WzJdO3JldHVybiA4Pj1vPyhhPTEwMCpvLzkwMy4zLG49Ny43ODcqKGEvMTAwKSsxNi8xMTYpOihhPTEwMCpNYXRoLnBvdygobysxNikvMTE2LDMpLG49TWF0aC5wb3coYS8xMDAsMS8zKSksZT0uMDA4ODU2Pj1lLzk1LjA0Nz9lPTk1LjA0Nyooci81MDArbi0xNi8xMTYpLzcuNzg3Ojk1LjA0NypNYXRoLnBvdyhyLzUwMCtuLDMpLGk9LjAwODg1OT49aS8xMDguODgzP2k9MTA4Ljg4Myoobi1sLzIwMC0xNi8xMTYpLzcuNzg3OjEwOC44ODMqTWF0aC5wb3cobi1sLzIwMCwzKSxbZSxhLGldfWZ1bmN0aW9uIFcodCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBlPU1hdGguYXRhbjIocixvKSxhPTM2MCplLzIvTWF0aC5QSSwwPmEmJihhKz0zNjApLGk9TWF0aC5zcXJ0KG8qbytyKnIpLFtuLGksYV19ZnVuY3Rpb24geih0KXtyZXR1cm4gVihCKHQpKX1mdW5jdGlvbiBOKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gaT1yLzM2MCoyKk1hdGguUEksZT1vKk1hdGguY29zKGkpLGE9bypNYXRoLnNpbihpKSxbbixlLGFdfWZ1bmN0aW9uIEUodCl7cmV0dXJuIEIoTih0KSl9ZnVuY3Rpb24gSCh0KXtyZXR1cm4geihOKHQpKX1mdW5jdGlvbiBVKHQpe3JldHVybiBaW3RdfWZ1bmN0aW9uIGoodCl7cmV0dXJuIGkoVSh0KSl9ZnVuY3Rpb24gcSh0KXtyZXR1cm4gbihVKHQpKX1mdW5jdGlvbiBZKHQpe3JldHVybiBvKFUodCkpfWZ1bmN0aW9uIFgodCl7cmV0dXJuIGwoVSh0KSl9ZnVuY3Rpb24gSyh0KXtyZXR1cm4gdShVKHQpKX1mdW5jdGlvbiBKKHQpe3JldHVybiBkKFUodCkpfWUuZXhwb3J0cz17cmdiMmhzbDppLHJnYjJoc3Y6bixyZ2IyaHdiOm8scmdiMmNteWs6bCxyZ2Iya2V5d29yZDpzLHJnYjJ4eXo6ZCxyZ2IybGFiOnUscmdiMmxjaDpjLGhzbDJyZ2I6aCxoc2wyaHN2OmYsaHNsMmh3YjpwLGhzbDJjbXlrOm0saHNsMmtleXdvcmQ6dixoc3YycmdiOngsaHN2MmhzbDp5LGhzdjJod2I6ayxoc3YyY215azpTLGhzdjJrZXl3b3JkOncsaHdiMnJnYjpNLGh3YjJoc2w6Qyxod2IyaHN2OkQsaHdiMmNteWs6SSxod2Iya2V5d29yZDpBLGNteWsycmdiOlQsY215azJoc2w6UCxjbXlrMmhzdjpGLGNteWsyaHdiOl8sY215azJrZXl3b3JkOlIsa2V5d29yZDJyZ2I6VSxrZXl3b3JkMmhzbDpqLGtleXdvcmQyaHN2OnEsa2V5d29yZDJod2I6WSxrZXl3b3JkMmNteWs6WCxrZXl3b3JkMmxhYjpLLGtleXdvcmQyeHl6OkoseHl6MnJnYjpWLHh5ejJsYWI6TCx4eXoybGNoOk8sbGFiMnh5ejpCLGxhYjJyZ2I6eixsYWIybGNoOlcsbGNoMmxhYjpOLGxjaDJ4eXo6RSxsY2gycmdiOkh9O3ZhciBaPXthbGljZWJsdWU6WzI0MCwyNDgsMjU1XSxhbnRpcXVld2hpdGU6WzI1MCwyMzUsMjE1XSxhcXVhOlswLDI1NSwyNTVdLGFxdWFtYXJpbmU6WzEyNywyNTUsMjEyXSxhenVyZTpbMjQwLDI1NSwyNTVdLGJlaWdlOlsyNDUsMjQ1LDIyMF0sYmlzcXVlOlsyNTUsMjI4LDE5Nl0sYmxhY2s6WzAsMCwwXSxibGFuY2hlZGFsbW9uZDpbMjU1LDIzNSwyMDVdLGJsdWU6WzAsMCwyNTVdLGJsdWV2aW9sZXQ6WzEzOCw0MywyMjZdLGJyb3duOlsxNjUsNDIsNDJdLGJ1cmx5d29vZDpbMjIyLDE4NCwxMzVdLGNhZGV0Ymx1ZTpbOTUsMTU4LDE2MF0sY2hhcnRyZXVzZTpbMTI3LDI1NSwwXSxjaG9jb2xhdGU6WzIxMCwxMDUsMzBdLGNvcmFsOlsyNTUsMTI3LDgwXSxjb3JuZmxvd2VyYmx1ZTpbMTAwLDE0OSwyMzddLGNvcm5zaWxrOlsyNTUsMjQ4LDIyMF0sY3JpbXNvbjpbMjIwLDIwLDYwXSxjeWFuOlswLDI1NSwyNTVdLGRhcmtibHVlOlswLDAsMTM5XSxkYXJrY3lhbjpbMCwxMzksMTM5XSxkYXJrZ29sZGVucm9kOlsxODQsMTM0LDExXSxkYXJrZ3JheTpbMTY5LDE2OSwxNjldLGRhcmtncmVlbjpbMCwxMDAsMF0sZGFya2dyZXk6WzE2OSwxNjksMTY5XSxkYXJra2hha2k6WzE4OSwxODMsMTA3XSxkYXJrbWFnZW50YTpbMTM5LDAsMTM5XSxkYXJrb2xpdmVncmVlbjpbODUsMTA3LDQ3XSxkYXJrb3JhbmdlOlsyNTUsMTQwLDBdLGRhcmtvcmNoaWQ6WzE1Myw1MCwyMDRdLGRhcmtyZWQ6WzEzOSwwLDBdLGRhcmtzYWxtb246WzIzMywxNTAsMTIyXSxkYXJrc2VhZ3JlZW46WzE0MywxODgsMTQzXSxkYXJrc2xhdGVibHVlOls3Miw2MSwxMzldLGRhcmtzbGF0ZWdyYXk6WzQ3LDc5LDc5XSxkYXJrc2xhdGVncmV5Ols0Nyw3OSw3OV0sZGFya3R1cnF1b2lzZTpbMCwyMDYsMjA5XSxkYXJrdmlvbGV0OlsxNDgsMCwyMTFdLGRlZXBwaW5rOlsyNTUsMjAsMTQ3XSxkZWVwc2t5Ymx1ZTpbMCwxOTEsMjU1XSxkaW1ncmF5OlsxMDUsMTA1LDEwNV0sZGltZ3JleTpbMTA1LDEwNSwxMDVdLGRvZGdlcmJsdWU6WzMwLDE0NCwyNTVdLGZpcmVicmljazpbMTc4LDM0LDM0XSxmbG9yYWx3aGl0ZTpbMjU1LDI1MCwyNDBdLGZvcmVzdGdyZWVuOlszNCwxMzksMzRdLGZ1Y2hzaWE6WzI1NSwwLDI1NV0sZ2FpbnNib3JvOlsyMjAsMjIwLDIyMF0sZ2hvc3R3aGl0ZTpbMjQ4LDI0OCwyNTVdLGdvbGQ6WzI1NSwyMTUsMF0sZ29sZGVucm9kOlsyMTgsMTY1LDMyXSxncmF5OlsxMjgsMTI4LDEyOF0sZ3JlZW46WzAsMTI4LDBdLGdyZWVueWVsbG93OlsxNzMsMjU1LDQ3XSxncmV5OlsxMjgsMTI4LDEyOF0saG9uZXlkZXc6WzI0MCwyNTUsMjQwXSxob3RwaW5rOlsyNTUsMTA1LDE4MF0saW5kaWFucmVkOlsyMDUsOTIsOTJdLGluZGlnbzpbNzUsMCwxMzBdLGl2b3J5OlsyNTUsMjU1LDI0MF0sa2hha2k6WzI0MCwyMzAsMTQwXSxsYXZlbmRlcjpbMjMwLDIzMCwyNTBdLGxhdmVuZGVyYmx1c2g6WzI1NSwyNDAsMjQ1XSxsYXduZ3JlZW46WzEyNCwyNTIsMF0sbGVtb25jaGlmZm9uOlsyNTUsMjUwLDIwNV0sbGlnaHRibHVlOlsxNzMsMjE2LDIzMF0sbGlnaHRjb3JhbDpbMjQwLDEyOCwxMjhdLGxpZ2h0Y3lhbjpbMjI0LDI1NSwyNTVdLGxpZ2h0Z29sZGVucm9keWVsbG93OlsyNTAsMjUwLDIxMF0sbGlnaHRncmF5OlsyMTEsMjExLDIxMV0sbGlnaHRncmVlbjpbMTQ0LDIzOCwxNDRdLGxpZ2h0Z3JleTpbMjExLDIxMSwyMTFdLGxpZ2h0cGluazpbMjU1LDE4MiwxOTNdLGxpZ2h0c2FsbW9uOlsyNTUsMTYwLDEyMl0sbGlnaHRzZWFncmVlbjpbMzIsMTc4LDE3MF0sbGlnaHRza3libHVlOlsxMzUsMjA2LDI1MF0sbGlnaHRzbGF0ZWdyYXk6WzExOSwxMzYsMTUzXSxsaWdodHNsYXRlZ3JleTpbMTE5LDEzNiwxNTNdLGxpZ2h0c3RlZWxibHVlOlsxNzYsMTk2LDIyMl0sbGlnaHR5ZWxsb3c6WzI1NSwyNTUsMjI0XSxsaW1lOlswLDI1NSwwXSxsaW1lZ3JlZW46WzUwLDIwNSw1MF0sbGluZW46WzI1MCwyNDAsMjMwXSxtYWdlbnRhOlsyNTUsMCwyNTVdLG1hcm9vbjpbMTI4LDAsMF0sbWVkaXVtYXF1YW1hcmluZTpbMTAyLDIwNSwxNzBdLG1lZGl1bWJsdWU6WzAsMCwyMDVdLG1lZGl1bW9yY2hpZDpbMTg2LDg1LDIxMV0sbWVkaXVtcHVycGxlOlsxNDcsMTEyLDIxOV0sbWVkaXVtc2VhZ3JlZW46WzYwLDE3OSwxMTNdLG1lZGl1bXNsYXRlYmx1ZTpbMTIzLDEwNCwyMzhdLG1lZGl1bXNwcmluZ2dyZWVuOlswLDI1MCwxNTRdLG1lZGl1bXR1cnF1b2lzZTpbNzIsMjA5LDIwNF0sbWVkaXVtdmlvbGV0cmVkOlsxOTksMjEsMTMzXSxtaWRuaWdodGJsdWU6WzI1LDI1LDExMl0sbWludGNyZWFtOlsyNDUsMjU1LDI1MF0sbWlzdHlyb3NlOlsyNTUsMjI4LDIyNV0sbW9jY2FzaW46WzI1NSwyMjgsMTgxXSxuYXZham93aGl0ZTpbMjU1LDIyMiwxNzNdLG5hdnk6WzAsMCwxMjhdLG9sZGxhY2U6WzI1MywyNDUsMjMwXSxvbGl2ZTpbMTI4LDEyOCwwXSxvbGl2ZWRyYWI6WzEwNywxNDIsMzVdLG9yYW5nZTpbMjU1LDE2NSwwXSxvcmFuZ2VyZWQ6WzI1NSw2OSwwXSxvcmNoaWQ6WzIxOCwxMTIsMjE0XSxwYWxlZ29sZGVucm9kOlsyMzgsMjMyLDE3MF0scGFsZWdyZWVuOlsxNTIsMjUxLDE1Ml0scGFsZXR1cnF1b2lzZTpbMTc1LDIzOCwyMzhdLHBhbGV2aW9sZXRyZWQ6WzIxOSwxMTIsMTQ3XSxwYXBheWF3aGlwOlsyNTUsMjM5LDIxM10scGVhY2hwdWZmOlsyNTUsMjE4LDE4NV0scGVydTpbMjA1LDEzMyw2M10scGluazpbMjU1LDE5MiwyMDNdLHBsdW06WzIyMSwxNjAsMjIxXSxwb3dkZXJibHVlOlsxNzYsMjI0LDIzMF0scHVycGxlOlsxMjgsMCwxMjhdLHJlYmVjY2FwdXJwbGU6WzEwMiw1MSwxNTNdLHJlZDpbMjU1LDAsMF0scm9zeWJyb3duOlsxODgsMTQzLDE0M10scm95YWxibHVlOls2NSwxMDUsMjI1XSxzYWRkbGVicm93bjpbMTM5LDY5LDE5XSxzYWxtb246WzI1MCwxMjgsMTE0XSxzYW5keWJyb3duOlsyNDQsMTY0LDk2XSxzZWFncmVlbjpbNDYsMTM5LDg3XSxzZWFzaGVsbDpbMjU1LDI0NSwyMzhdLHNpZW5uYTpbMTYwLDgyLDQ1XSxzaWx2ZXI6WzE5MiwxOTIsMTkyXSxza3libHVlOlsxMzUsMjA2LDIzNV0sc2xhdGVibHVlOlsxMDYsOTAsMjA1XSxzbGF0ZWdyYXk6WzExMiwxMjgsMTQ0XSxzbGF0ZWdyZXk6WzExMiwxMjgsMTQ0XSxzbm93OlsyNTUsMjUwLDI1MF0sc3ByaW5nZ3JlZW46WzAsMjU1LDEyN10sc3RlZWxibHVlOls3MCwxMzAsMTgwXSx0YW46WzIxMCwxODAsMTQwXSx0ZWFsOlswLDEyOCwxMjhdLHRoaXN0bGU6WzIxNiwxOTEsMjE2XSx0b21hdG86WzI1NSw5OSw3MV0sdHVycXVvaXNlOls2NCwyMjQsMjA4XSx2aW9sZXQ6WzIzOCwxMzAsMjM4XSx3aGVhdDpbMjQ1LDIyMiwxNzldLHdoaXRlOlsyNTUsMjU1LDI1NV0sd2hpdGVzbW9rZTpbMjQ1LDI0NSwyNDVdLHllbGxvdzpbMjU1LDI1NSwwXSx5ZWxsb3dncmVlbjpbMTU0LDIwNSw1MF19LEc9e307Zm9yKHZhciBRIGluIFopR1tKU09OLnN0cmluZ2lmeShaW1FdKV09UX0se31dLDU6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDQpLG49ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGR9O2Zvcih2YXIgbyBpbiBpKXtuW28rXCJSYXdcIl09ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiYoZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSxpW3RdKGUpfX0obyk7dmFyIHI9LyhcXHcrKTIoXFx3KykvLmV4ZWMobyksbD1yWzFdLHM9clsyXTtuW2xdPW5bbF18fHt9LG5bbF1bc109bltvXT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7XCJudW1iZXJcIj09dHlwZW9mIGUmJihlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO3ZhciBhPWlbdF0oZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGF8fHZvaWQgMD09PWEpcmV0dXJuIGE7Zm9yKHZhciBuPTA7bjxhLmxlbmd0aDtuKyspYVtuXT1NYXRoLnJvdW5kKGFbbl0pO3JldHVybiBhfX0obyl9dmFyIGQ9ZnVuY3Rpb24oKXt0aGlzLmNvbnZzPXt9fTtkLnByb3RvdHlwZS5yb3V0ZVNwYWNlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZVswXTtyZXR1cm4gdm9pZCAwPT09YT90aGlzLmdldFZhbHVlcyh0KTooXCJudW1iZXJcIj09dHlwZW9mIGEmJihhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpKSx0aGlzLnNldFZhbHVlcyh0LGEpKX0sZC5wcm90b3R5cGUuc2V0VmFsdWVzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuc3BhY2U9dCx0aGlzLmNvbnZzPXt9LHRoaXMuY29udnNbdF09ZSx0aGlzfSxkLnByb3RvdHlwZS5nZXRWYWx1ZXM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb252c1t0XTtpZighZSl7dmFyIGE9dGhpcy5zcGFjZSxpPXRoaXMuY29udnNbYV07ZT1uW2FdW3RdKGkpLHRoaXMuY29udnNbdF09ZX1yZXR1cm4gZX0sW1wicmdiXCIsXCJoc2xcIixcImhzdlwiLFwiY215a1wiLFwia2V5d29yZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2QucHJvdG90eXBlW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJvdXRlU3BhY2UodCxhcmd1bWVudHMpfX0pLGUuZXhwb3J0cz1ufSx7NDo0fV0sNjpbZnVuY3Rpb24odCxlLGEpe2UuZXhwb3J0cz17YWxpY2VibHVlOlsyNDAsMjQ4LDI1NV0sYW50aXF1ZXdoaXRlOlsyNTAsMjM1LDIxNV0sYXF1YTpbMCwyNTUsMjU1XSxhcXVhbWFyaW5lOlsxMjcsMjU1LDIxMl0sYXp1cmU6WzI0MCwyNTUsMjU1XSxiZWlnZTpbMjQ1LDI0NSwyMjBdLGJpc3F1ZTpbMjU1LDIyOCwxOTZdLGJsYWNrOlswLDAsMF0sYmxhbmNoZWRhbG1vbmQ6WzI1NSwyMzUsMjA1XSxibHVlOlswLDAsMjU1XSxibHVldmlvbGV0OlsxMzgsNDMsMjI2XSxicm93bjpbMTY1LDQyLDQyXSxidXJseXdvb2Q6WzIyMiwxODQsMTM1XSxjYWRldGJsdWU6Wzk1LDE1OCwxNjBdLGNoYXJ0cmV1c2U6WzEyNywyNTUsMF0sY2hvY29sYXRlOlsyMTAsMTA1LDMwXSxjb3JhbDpbMjU1LDEyNyw4MF0sY29ybmZsb3dlcmJsdWU6WzEwMCwxNDksMjM3XSxjb3Juc2lsazpbMjU1LDI0OCwyMjBdLGNyaW1zb246WzIyMCwyMCw2MF0sY3lhbjpbMCwyNTUsMjU1XSxkYXJrYmx1ZTpbMCwwLDEzOV0sZGFya2N5YW46WzAsMTM5LDEzOV0sZGFya2dvbGRlbnJvZDpbMTg0LDEzNCwxMV0sZGFya2dyYXk6WzE2OSwxNjksMTY5XSxkYXJrZ3JlZW46WzAsMTAwLDBdLGRhcmtncmV5OlsxNjksMTY5LDE2OV0sZGFya2toYWtpOlsxODksMTgzLDEwN10sZGFya21hZ2VudGE6WzEzOSwwLDEzOV0sZGFya29saXZlZ3JlZW46Wzg1LDEwNyw0N10sZGFya29yYW5nZTpbMjU1LDE0MCwwXSxkYXJrb3JjaGlkOlsxNTMsNTAsMjA0XSxkYXJrcmVkOlsxMzksMCwwXSxkYXJrc2FsbW9uOlsyMzMsMTUwLDEyMl0sZGFya3NlYWdyZWVuOlsxNDMsMTg4LDE0M10sZGFya3NsYXRlYmx1ZTpbNzIsNjEsMTM5XSxkYXJrc2xhdGVncmF5Ols0Nyw3OSw3OV0sZGFya3NsYXRlZ3JleTpbNDcsNzksNzldLGRhcmt0dXJxdW9pc2U6WzAsMjA2LDIwOV0sZGFya3Zpb2xldDpbMTQ4LDAsMjExXSxkZWVwcGluazpbMjU1LDIwLDE0N10sZGVlcHNreWJsdWU6WzAsMTkxLDI1NV0sZGltZ3JheTpbMTA1LDEwNSwxMDVdLGRpbWdyZXk6WzEwNSwxMDUsMTA1XSxkb2RnZXJibHVlOlszMCwxNDQsMjU1XSxmaXJlYnJpY2s6WzE3OCwzNCwzNF0sZmxvcmFsd2hpdGU6WzI1NSwyNTAsMjQwXSxmb3Jlc3RncmVlbjpbMzQsMTM5LDM0XSxmdWNoc2lhOlsyNTUsMCwyNTVdLGdhaW5zYm9ybzpbMjIwLDIyMCwyMjBdLGdob3N0d2hpdGU6WzI0OCwyNDgsMjU1XSxnb2xkOlsyNTUsMjE1LDBdLGdvbGRlbnJvZDpbMjE4LDE2NSwzMl0sZ3JheTpbMTI4LDEyOCwxMjhdLGdyZWVuOlswLDEyOCwwXSxncmVlbnllbGxvdzpbMTczLDI1NSw0N10sZ3JleTpbMTI4LDEyOCwxMjhdLGhvbmV5ZGV3OlsyNDAsMjU1LDI0MF0saG90cGluazpbMjU1LDEwNSwxODBdLGluZGlhbnJlZDpbMjA1LDkyLDkyXSxpbmRpZ286Wzc1LDAsMTMwXSxpdm9yeTpbMjU1LDI1NSwyNDBdLGtoYWtpOlsyNDAsMjMwLDE0MF0sbGF2ZW5kZXI6WzIzMCwyMzAsMjUwXSxsYXZlbmRlcmJsdXNoOlsyNTUsMjQwLDI0NV0sbGF3bmdyZWVuOlsxMjQsMjUyLDBdLGxlbW9uY2hpZmZvbjpbMjU1LDI1MCwyMDVdLGxpZ2h0Ymx1ZTpbMTczLDIxNiwyMzBdLGxpZ2h0Y29yYWw6WzI0MCwxMjgsMTI4XSxsaWdodGN5YW46WzIyNCwyNTUsMjU1XSxsaWdodGdvbGRlbnJvZHllbGxvdzpbMjUwLDI1MCwyMTBdLGxpZ2h0Z3JheTpbMjExLDIxMSwyMTFdLGxpZ2h0Z3JlZW46WzE0NCwyMzgsMTQ0XSxsaWdodGdyZXk6WzIxMSwyMTEsMjExXSxsaWdodHBpbms6WzI1NSwxODIsMTkzXSxsaWdodHNhbG1vbjpbMjU1LDE2MCwxMjJdLGxpZ2h0c2VhZ3JlZW46WzMyLDE3OCwxNzBdLGxpZ2h0c2t5Ymx1ZTpbMTM1LDIwNiwyNTBdLGxpZ2h0c2xhdGVncmF5OlsxMTksMTM2LDE1M10sbGlnaHRzbGF0ZWdyZXk6WzExOSwxMzYsMTUzXSxsaWdodHN0ZWVsYmx1ZTpbMTc2LDE5NiwyMjJdLGxpZ2h0eWVsbG93OlsyNTUsMjU1LDIyNF0sbGltZTpbMCwyNTUsMF0sbGltZWdyZWVuOls1MCwyMDUsNTBdLGxpbmVuOlsyNTAsMjQwLDIzMF0sbWFnZW50YTpbMjU1LDAsMjU1XSxtYXJvb246WzEyOCwwLDBdLG1lZGl1bWFxdWFtYXJpbmU6WzEwMiwyMDUsMTcwXSxtZWRpdW1ibHVlOlswLDAsMjA1XSxtZWRpdW1vcmNoaWQ6WzE4Niw4NSwyMTFdLG1lZGl1bXB1cnBsZTpbMTQ3LDExMiwyMTldLG1lZGl1bXNlYWdyZWVuOls2MCwxNzksMTEzXSxtZWRpdW1zbGF0ZWJsdWU6WzEyMywxMDQsMjM4XSxtZWRpdW1zcHJpbmdncmVlbjpbMCwyNTAsMTU0XSxtZWRpdW10dXJxdW9pc2U6WzcyLDIwOSwyMDRdLG1lZGl1bXZpb2xldHJlZDpbMTk5LDIxLDEzM10sbWlkbmlnaHRibHVlOlsyNSwyNSwxMTJdLG1pbnRjcmVhbTpbMjQ1LDI1NSwyNTBdLG1pc3R5cm9zZTpbMjU1LDIyOCwyMjVdLG1vY2Nhc2luOlsyNTUsMjI4LDE4MV0sbmF2YWpvd2hpdGU6WzI1NSwyMjIsMTczXSxuYXZ5OlswLDAsMTI4XSxvbGRsYWNlOlsyNTMsMjQ1LDIzMF0sb2xpdmU6WzEyOCwxMjgsMF0sb2xpdmVkcmFiOlsxMDcsMTQyLDM1XSxvcmFuZ2U6WzI1NSwxNjUsMF0sb3JhbmdlcmVkOlsyNTUsNjksMF0sb3JjaGlkOlsyMTgsMTEyLDIxNF0scGFsZWdvbGRlbnJvZDpbMjM4LDIzMiwxNzBdLHBhbGVncmVlbjpbMTUyLDI1MSwxNTJdLHBhbGV0dXJxdW9pc2U6WzE3NSwyMzgsMjM4XSxwYWxldmlvbGV0cmVkOlsyMTksMTEyLDE0N10scGFwYXlhd2hpcDpbMjU1LDIzOSwyMTNdLHBlYWNocHVmZjpbMjU1LDIxOCwxODVdLHBlcnU6WzIwNSwxMzMsNjNdLHBpbms6WzI1NSwxOTIsMjAzXSxwbHVtOlsyMjEsMTYwLDIyMV0scG93ZGVyYmx1ZTpbMTc2LDIyNCwyMzBdLHB1cnBsZTpbMTI4LDAsMTI4XSxyZWJlY2NhcHVycGxlOlsxMDIsNTEsMTUzXSxyZWQ6WzI1NSwwLDBdLHJvc3licm93bjpbMTg4LDE0MywxNDNdLHJveWFsYmx1ZTpbNjUsMTA1LDIyNV0sc2FkZGxlYnJvd246WzEzOSw2OSwxOV0sc2FsbW9uOlsyNTAsMTI4LDExNF0sc2FuZHlicm93bjpbMjQ0LDE2NCw5Nl0sc2VhZ3JlZW46WzQ2LDEzOSw4N10sc2Vhc2hlbGw6WzI1NSwyNDUsMjM4XSxzaWVubmE6WzE2MCw4Miw0NV0sc2lsdmVyOlsxOTIsMTkyLDE5Ml0sc2t5Ymx1ZTpbMTM1LDIwNiwyMzVdLHNsYXRlYmx1ZTpbMTA2LDkwLDIwNV0sc2xhdGVncmF5OlsxMTIsMTI4LDE0NF0sc2xhdGVncmV5OlsxMTIsMTI4LDE0NF0sc25vdzpbMjU1LDI1MCwyNTBdLHNwcmluZ2dyZWVuOlswLDI1NSwxMjddLHN0ZWVsYmx1ZTpbNzAsMTMwLDE4MF0sdGFuOlsyMTAsMTgwLDE0MF0sdGVhbDpbMCwxMjgsMTI4XSx0aGlzdGxlOlsyMTYsMTkxLDIxNl0sdG9tYXRvOlsyNTUsOTksNzFdLHR1cnF1b2lzZTpbNjQsMjI0LDIwOF0sdmlvbGV0OlsyMzgsMTMwLDIzOF0sd2hlYXQ6WzI0NSwyMjIsMTc5XSx3aGl0ZTpbMjU1LDI1NSwyNTVdLHdoaXRlc21va2U6WzI0NSwyNDUsMjQ1XSx5ZWxsb3c6WzI1NSwyNTUsMF0seWVsbG93Z3JlZW46WzE1NCwyMDUsNTBdfX0se31dLDc6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDI4KSgpO3QoMjYpKGkpLHQoMjIpKGkpLHQoMjUpKGkpLHQoMjEpKGkpLHQoMjMpKGkpLHQoMjQpKGkpLHQoMjkpKGkpLHQoMzMpKGkpLHQoMzEpKGkpLHQoMzQpKGkpLHQoMzIpKGkpLHQoMzUpKGkpLHQoMzApKGkpLHQoMjcpKGkpLHQoMzYpKGkpLHQoMzcpKGkpLHQoMzgpKGkpLHQoMzkpKGkpLHQoNDApKGkpLHQoNDMpKGkpLHQoNDEpKGkpLHQoNDIpKGkpLHQoNDQpKGkpLHQoNDUpKGkpLHQoNDYpKGkpLHQoMTUpKGkpLHQoMTYpKGkpLHQoMTcpKGkpLHQoMTgpKGkpLHQoMTkpKGkpLHQoMjApKGkpLHQoOCkoaSksdCg5KShpKSx0KDEwKShpKSx0KDExKShpKSx0KDEyKShpKSx0KDEzKShpKSx0KDE0KShpKSx3aW5kb3cuQ2hhcnQ9ZS5leHBvcnRzPWl9LHsxMDoxMCwxMToxMSwxMjoxMiwxMzoxMywxNDoxNCwxNToxNSwxNjoxNiwxNzoxNywxODoxOCwxOToxOSwyMDoyMCwyMToyMSwyMjoyMiwyMzoyMywyNDoyNCwyNToyNSwyNjoyNiwyNzoyNywyODoyOCwyOToyOSwzMDozMCwzMTozMSwzMjozMiwzMzozMywzNDozNCwzNTozNSwzNjozNiwzNzozNywzODozOCwzOTozOSw0MDo0MCw0MTo0MSw0Mjo0Miw0Mzo0Myw0NDo0NCw0NTo0NSw0Njo0Niw4OjgsOTo5fV0sODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkJhcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJiYXJcIixuZXcgdChlLGEpfX19LHt9XSw5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuQnViYmxlPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImJ1YmJsZVwiLG5ldyB0KGUsYSl9fX0se31dLDEwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuRG91Z2hudXQ9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiZG91Z2hudXRcIixuZXcgdChlLGEpfX19LHt9XSwxMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkxpbmU9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwibGluZVwiLG5ldyB0KGUsYSl9fX0se31dLDEyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuUG9sYXJBcmVhPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInBvbGFyQXJlYVwiLG5ldyB0KGUsYSl9fX0se31dLDEzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuUmFkYXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwicmFkYXJcIixuZXcgdChlLGEpfX19LHt9XSwxNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT17aG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGlkOlwieC1heGlzLTFcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwibGVmdFwiLGlkOlwieS1heGlzLTFcIn1dfSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQpe3JldHVyblwiKFwiK3QueExhYmVsK1wiLCBcIit0LnlMYWJlbCtcIilcIn19fX07dC5kZWZhdWx0cy5zY2F0dGVyPWUsdC5jb250cm9sbGVycy5zY2F0dGVyPXQuY29udHJvbGxlcnMubGluZSx0LlNjYXR0ZXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwic2NhdHRlclwiLG5ldyB0KGUsYSl9fX0se31dLDE1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmJhcj17aG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImNhdGVnb3J5XCIsY2F0ZWdvcnlQZXJjZW50YWdlOi44LGJhclBlcmNlbnRhZ2U6LjksZ3JpZExpbmVzOntvZmZzZXRHcmlkTGluZXM6ITB9fV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCJ9XX19LHQuY29udHJvbGxlcnMuYmFyPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5SZWN0YW5nbGUsaW5pdGlhbGl6ZTpmdW5jdGlvbihlLGEpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLGUsYSksdGhpcy5nZXRNZXRhKCkuYmFyPSEwfSxnZXRCYXJDb3VudDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT0wO3JldHVybiBlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGUsaSl7dmFyIG49dC5jaGFydC5nZXREYXRhc2V0TWV0YShpKTtuLmJhciYmdC5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGkpJiYrK2F9LHQpLGF9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzO2UuZWFjaChhLmdldE1ldGEoKS5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0sYSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW4uZ2V0U2NhbGVGb3JJZChvLnhBeGlzSUQpLGw9bi5nZXRTY2FsZUZvcklkKG8ueUF4aXNJRCkscz1sLmdldEJhc2VQaXhlbCgpLGQ9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZSx1PXQuY3VzdG9tfHx7fSxjPW4uZ2V0RGF0YXNldCgpO3QuX3hTY2FsZT1yLHQuX3lTY2FsZT1sLHQuX2RhdGFzZXRJbmRleD1uLmluZGV4LHQuX2luZGV4PWE7dmFyIGg9bi5nZXRSdWxlcihhKTt0Ll9tb2RlbD17eDpuLmNhbGN1bGF0ZUJhclgoYSxuLmluZGV4LGgpLHk6aT9zOm4uY2FsY3VsYXRlQmFyWShhLG4uaW5kZXgpLGxhYmVsOm4uY2hhcnQuZGF0YS5sYWJlbHNbYV0sZGF0YXNldExhYmVsOmMubGFiZWwsYmFzZTppP3M6bi5jYWxjdWxhdGVCYXJCYXNlKG4uaW5kZXgsYSksd2lkdGg6bi5jYWxjdWxhdGVCYXJXaWR0aChoKSxiYWNrZ3JvdW5kQ29sb3I6dS5iYWNrZ3JvdW5kQ29sb3I/dS5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5iYWNrZ3JvdW5kQ29sb3IsYSxkLmJhY2tncm91bmRDb2xvciksYm9yZGVyU2tpcHBlZDp1LmJvcmRlclNraXBwZWQ/dS5ib3JkZXJTa2lwcGVkOmQuYm9yZGVyU2tpcHBlZCxib3JkZXJDb2xvcjp1LmJvcmRlckNvbG9yP3UuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5ib3JkZXJDb2xvcixhLGQuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOnUuYm9yZGVyV2lkdGg/dS5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJvcmRlcldpZHRoLGEsZC5ib3JkZXJXaWR0aCl9LHQucGl2b3QoKX0sY2FsY3VsYXRlQmFyQmFzZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89MDtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPWEuY2hhcnQsbD1yLmRhdGEuZGF0YXNldHMscz1OdW1iZXIobFt0XS5kYXRhW2VdKSxkPTA7dD5kO2QrKyl7dmFyIHU9bFtkXSxjPXIuZ2V0RGF0YXNldE1ldGEoZCk7aWYoYy5iYXImJmMueUF4aXNJRD09PW4uaWQmJnIuaXNEYXRhc2V0VmlzaWJsZShkKSl7dmFyIGg9TnVtYmVyKHUuZGF0YVtlXSk7bys9MD5zP01hdGgubWluKGgsMCk6TWF0aC5tYXgoaCwwKX19cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX1yZXR1cm4gbi5nZXRCYXNlUGl4ZWwoKX0sZ2V0UnVsZXI6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPWEuZ2V0QmFyQ291bnQoKTtlPVwiY2F0ZWdvcnlcIj09PW4ub3B0aW9ucy50eXBlP24uZ2V0UGl4ZWxGb3JUaWNrKHQrMSktbi5nZXRQaXhlbEZvclRpY2sodCk6bi53aWR0aC9uLnRpY2tzLmxlbmd0aDt2YXIgcj1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UsbD0oZS1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UpLzIscz1yL287aWYobi50aWNrcy5sZW5ndGghPT1hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aCl7dmFyIGQ9bi50aWNrcy5sZW5ndGgvYS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg7cyo9ZH12YXIgdT1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlLGM9cy1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlO3JldHVybntkYXRhc2V0Q291bnQ6byx0aWNrV2lkdGg6ZSxjYXRlZ29yeVdpZHRoOnIsY2F0ZWdvcnlTcGFjaW5nOmwsZnVsbEJhcldpZHRoOnMsYmFyV2lkdGg6dSxiYXJTcGFjaW5nOmN9fSxjYWxjdWxhdGVCYXJXaWR0aDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldFNjYWxlRm9ySWQodGhpcy5nZXRNZXRhKCkueEF4aXNJRCk7cmV0dXJuIGUub3B0aW9ucy5iYXJUaGlja25lc3M/ZS5vcHRpb25zLmJhclRoaWNrbmVzczplLm9wdGlvbnMuc3RhY2tlZD90LmNhdGVnb3J5V2lkdGg6dC5iYXJXaWR0aH0sZ2V0QmFySW5kZXg6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPTA7Zm9yKGE9MDt0PmE7KythKWU9dGhpcy5jaGFydC5nZXREYXRhc2V0TWV0YShhKSxlLmJhciYmdGhpcy5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGEpJiYrK2k7cmV0dXJuIGl9LGNhbGN1bGF0ZUJhclg6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1pLmdldE1ldGEoKSxvPWkuZ2V0U2NhbGVGb3JJZChuLnhBeGlzSUQpLHI9aS5nZXRCYXJJbmRleChlKSxsPW8uZ2V0UGl4ZWxGb3JWYWx1ZShudWxsLHQsZSxpLmNoYXJ0LmlzQ29tYm8pO3JldHVybiBsLT1pLmNoYXJ0LmlzQ29tYm8/YS50aWNrV2lkdGgvMjowLG8ub3B0aW9ucy5zdGFja2VkP2wrYS5jYXRlZ29yeVdpZHRoLzIrYS5jYXRlZ29yeVNwYWNpbmc6bCthLmJhcldpZHRoLzIrYS5jYXRlZ29yeVNwYWNpbmcrYS5iYXJXaWR0aCpyK2EuYmFyU3BhY2luZy8yK2EuYmFyU3BhY2luZypyfSxjYWxjdWxhdGVCYXJZOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz1OdW1iZXIoYS5nZXREYXRhc2V0KCkuZGF0YVt0XSk7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj0wLGw9MCxzPTA7ZT5zO3MrKyl7dmFyIGQ9YS5jaGFydC5kYXRhLmRhdGFzZXRzW3NdLHU9YS5jaGFydC5nZXREYXRhc2V0TWV0YShzKTtpZih1LmJhciYmdS55QXhpc0lEPT09bi5pZCYmYS5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKHMpKXt2YXIgYz1OdW1iZXIoZC5kYXRhW3RdKTswPmM/bCs9Y3x8MDpyKz1jfHwwfX1yZXR1cm4gMD5vP24uZ2V0UGl4ZWxGb3JWYWx1ZShsK28pOm4uZ2V0UGl4ZWxGb3JWYWx1ZShyK28pfXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXRoaXMsbj10fHwxLG89aS5nZXRNZXRhKCkuZGF0YSxyPWkuZ2V0RGF0YXNldCgpO2ZvcihlPTAsYT1vLmxlbmd0aDthPmU7KytlKXt2YXIgbD1yLmRhdGFbZV07bnVsbD09PWx8fHZvaWQgMD09PWx8fGlzTmFOKGwpfHxvW2VdLnRyYW5zaXRpb24obikuZHJhdygpfX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWw7by5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcj9uLmhvdmVyQmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCYWNrZ3JvdW5kQ29sb3IsaSxlLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcj9uLmhvdmVyQm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJvcmRlckNvbG9yLGksZS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aD9uLmhvdmVyQm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJvcmRlcldpZHRoLGksby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsLHI9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZTtvLmJhY2tncm91bmRDb2xvcj1uLmJhY2tncm91bmRDb2xvcj9uLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJhY2tncm91bmRDb2xvcixpLHIuYmFja2dyb3VuZENvbG9yKSxvLmJvcmRlckNvbG9yPW4uYm9yZGVyQ29sb3I/bi5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJvcmRlckNvbG9yLGksci5ib3JkZXJDb2xvciksby5ib3JkZXJXaWR0aD1uLmJvcmRlcldpZHRoP24uYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ib3JkZXJXaWR0aCxpLHIuYm9yZGVyV2lkdGgpfX0pLHQuZGVmYXVsdHMuaG9yaXpvbnRhbEJhcj17aG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCJ9XSx5QXhlczpbe3Bvc2l0aW9uOlwibGVmdFwiLHR5cGU6XCJjYXRlZ29yeVwiLGNhdGVnb3J5UGVyY2VudGFnZTouOCxiYXJQZXJjZW50YWdlOi45LGdyaWRMaW5lczp7b2Zmc2V0R3JpZExpbmVzOiEwfX1dfSxlbGVtZW50czp7cmVjdGFuZ2xlOntib3JkZXJTa2lwcGVkOlwibGVmdFwifX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT1cIlwiO3JldHVybiB0Lmxlbmd0aD4wJiYodFswXS55TGFiZWw/YT10WzBdLnlMYWJlbDplLmxhYmVscy5sZW5ndGg+MCYmdFswXS5pbmRleDxlLmxhYmVscy5sZW5ndGgmJihhPWUubGFiZWxzW3RbMF0uaW5kZXhdKSksYX0sbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIjtyZXR1cm4gYStcIjogXCIrdC54TGFiZWx9fX19LHQuY29udHJvbGxlcnMuaG9yaXpvbnRhbEJhcj10LmNvbnRyb2xsZXJzLmJhci5leHRlbmQoe3VwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW4uZ2V0U2NhbGVGb3JJZChvLnhBeGlzSUQpLGw9bi5nZXRTY2FsZUZvcklkKG8ueUF4aXNJRCkscz1yLmdldEJhc2VQaXhlbCgpLGQ9dC5jdXN0b218fHt9LHU9bi5nZXREYXRhc2V0KCksYz1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlO3QuX3hTY2FsZT1yLHQuX3lTY2FsZT1sLHQuX2RhdGFzZXRJbmRleD1uLmluZGV4LHQuX2luZGV4PWE7dmFyIGg9bi5nZXRSdWxlcihhKTt0Ll9tb2RlbD17eDppP3M6bi5jYWxjdWxhdGVCYXJYKGEsbi5pbmRleCkseTpuLmNhbGN1bGF0ZUJhclkoYSxuLmluZGV4LGgpLGxhYmVsOm4uY2hhcnQuZGF0YS5sYWJlbHNbYV0sZGF0YXNldExhYmVsOnUubGFiZWwsYmFzZTppP3M6bi5jYWxjdWxhdGVCYXJCYXNlKG4uaW5kZXgsYSksaGVpZ2h0Om4uY2FsY3VsYXRlQmFySGVpZ2h0KGgpLGJhY2tncm91bmRDb2xvcjpkLmJhY2tncm91bmRDb2xvcj9kLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJhY2tncm91bmRDb2xvcixhLGMuYmFja2dyb3VuZENvbG9yKSxib3JkZXJTa2lwcGVkOmQuYm9yZGVyU2tpcHBlZD9kLmJvcmRlclNraXBwZWQ6Yy5ib3JkZXJTa2lwcGVkLGJvcmRlckNvbG9yOmQuYm9yZGVyQ29sb3I/ZC5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJvcmRlckNvbG9yLGEsYy5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6ZC5ib3JkZXJXaWR0aD9kLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYm9yZGVyV2lkdGgsYSxjLmJvcmRlcldpZHRoKX0sdC5kcmF3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gc1sodSt0KSU0XX12YXIgZT10aGlzLl9jaGFydC5jdHgsYT10aGlzLl92aWV3LGk9YS5oZWlnaHQvMixuPWEueS1pLG89YS55K2kscj1hLmJhc2UtKGEuYmFzZS1hLngpLGw9YS5ib3JkZXJXaWR0aC8yO2EuYm9yZGVyV2lkdGgmJihuKz1sLG8tPWwscis9bCksZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1hLmJhY2tncm91bmRDb2xvcixlLnN0cm9rZVN0eWxlPWEuYm9yZGVyQ29sb3IsZS5saW5lV2lkdGg9YS5ib3JkZXJXaWR0aDt2YXIgcz1bW2EuYmFzZSxvXSxbYS5iYXNlLG5dLFtyLG5dLFtyLG9dXSxkPVtcImJvdHRvbVwiLFwibGVmdFwiLFwidG9wXCIsXCJyaWdodFwiXSx1PWQuaW5kZXhPZihhLmJvcmRlclNraXBwZWQsMCk7LTE9PT11JiYodT0wKSxlLm1vdmVUby5hcHBseShlLHQoMCkpO2Zvcih2YXIgYz0xOzQ+YztjKyspZS5saW5lVG8uYXBwbHkoZSx0KGMpKTtlLmZpbGwoKSxhLmJvcmRlcldpZHRoJiZlLnN0cm9rZSgpfSx0LnBpdm90KCl9LGNhbGN1bGF0ZUJhckJhc2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPTA7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj1hLmNoYXJ0LGw9ci5kYXRhLmRhdGFzZXRzLHM9TnVtYmVyKGxbdF0uZGF0YVtlXSksZD0wO3Q+ZDtkKyspe3ZhciB1PWxbZF0sYz1yLmdldERhdGFzZXRNZXRhKGQpO2lmKGMuYmFyJiZjLnhBeGlzSUQ9PT1uLmlkJiZyLmlzRGF0YXNldFZpc2libGUoZCkpe1xyXG52YXIgaD1OdW1iZXIodS5kYXRhW2VdKTtvKz0wPnM/TWF0aC5taW4oaCwwKTpNYXRoLm1heChoLDApfX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfXJldHVybiBuLmdldEJhc2VQaXhlbCgpfSxnZXRSdWxlcjpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89YS5nZXRCYXJDb3VudCgpO2U9XCJjYXRlZ29yeVwiPT09bi5vcHRpb25zLnR5cGU/bi5nZXRQaXhlbEZvclRpY2sodCsxKS1uLmdldFBpeGVsRm9yVGljayh0KTpuLndpZHRoL24udGlja3MubGVuZ3RoO3ZhciByPWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSxsPShlLWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSkvMixzPXIvbztpZihuLnRpY2tzLmxlbmd0aCE9PWEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoKXt2YXIgZD1uLnRpY2tzLmxlbmd0aC9hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aDtzKj1kfXZhciB1PXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2UsYz1zLXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2U7cmV0dXJue2RhdGFzZXRDb3VudDpvLHRpY2tIZWlnaHQ6ZSxjYXRlZ29yeUhlaWdodDpyLGNhdGVnb3J5U3BhY2luZzpsLGZ1bGxCYXJIZWlnaHQ6cyxiYXJIZWlnaHQ6dSxiYXJTcGFjaW5nOmN9fSxjYWxjdWxhdGVCYXJIZWlnaHQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZ2V0U2NhbGVGb3JJZChlLmdldE1ldGEoKS55QXhpc0lEKTtyZXR1cm4gYS5vcHRpb25zLmJhclRoaWNrbmVzcz9hLm9wdGlvbnMuYmFyVGhpY2tuZXNzOmEub3B0aW9ucy5zdGFja2VkP3QuY2F0ZWdvcnlIZWlnaHQ6dC5iYXJIZWlnaHR9LGNhbGN1bGF0ZUJhclg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPU51bWJlcihhLmdldERhdGFzZXQoKS5kYXRhW3RdKTtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPTAsbD0wLHM9MDtlPnM7cysrKXt2YXIgZD1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbc10sdT1hLmNoYXJ0LmdldERhdGFzZXRNZXRhKHMpO2lmKHUuYmFyJiZ1LnhBeGlzSUQ9PT1uLmlkJiZhLmNoYXJ0LmlzRGF0YXNldFZpc2libGUocykpe3ZhciBjPU51bWJlcihkLmRhdGFbdF0pOzA+Yz9sKz1jfHwwOnIrPWN8fDB9fXJldHVybiAwPm8/bi5nZXRQaXhlbEZvclZhbHVlKGwrbyk6bi5nZXRQaXhlbEZvclZhbHVlKHIrbyl9cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX0sY2FsY3VsYXRlQmFyWTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPWkuZ2V0TWV0YSgpLG89aS5nZXRTY2FsZUZvcklkKG4ueUF4aXNJRCkscj1pLmdldEJhckluZGV4KGUpLGw9by5nZXRQaXhlbEZvclZhbHVlKG51bGwsdCxlLGkuY2hhcnQuaXNDb21ibyk7cmV0dXJuIGwtPWkuY2hhcnQuaXNDb21ibz9hLnRpY2tIZWlnaHQvMjowLG8ub3B0aW9ucy5zdGFja2VkP2wrYS5jYXRlZ29yeUhlaWdodC8yK2EuY2F0ZWdvcnlTcGFjaW5nOmwrYS5iYXJIZWlnaHQvMithLmNhdGVnb3J5U3BhY2luZythLmJhckhlaWdodCpyK2EuYmFyU3BhY2luZy8yK2EuYmFyU3BhY2luZypyfX0pfX0se31dLDE2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmJ1YmJsZT17aG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGlkOlwieC1heGlzLTBcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwibGVmdFwiLGlkOlwieS1heGlzLTBcIn1dfSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCIsaT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5kYXRhW3QuaW5kZXhdO3JldHVybiBhK1wiOiAoXCIrdC54TGFiZWwrXCIsIFwiK3QueUxhYmVsK1wiLCBcIitpLnIrXCIpXCJ9fX19LHQuY29udHJvbGxlcnMuYnViYmxlPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49aS5kYXRhO2UuZWFjaChuLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKGEsaSxuKXt2YXIgbz10aGlzLHI9by5nZXRNZXRhKCksbD1vLmdldFNjYWxlRm9ySWQoci54QXhpc0lEKSxzPW8uZ2V0U2NhbGVGb3JJZChyLnlBeGlzSUQpLGQ9YS5jdXN0b218fHt9LHU9by5nZXREYXRhc2V0KCksYz11LmRhdGFbaV0saD1vLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQsZj1vLmluZGV4O2UuZXh0ZW5kKGEse194U2NhbGU6bCxfeVNjYWxlOnMsX2RhdGFzZXRJbmRleDpmLF9pbmRleDppLF9tb2RlbDp7eDpuP2wuZ2V0UGl4ZWxGb3JEZWNpbWFsKC41KTpsLmdldFBpeGVsRm9yVmFsdWUoXCJvYmplY3RcIj09dHlwZW9mIGM/YzpOYU4saSxmLG8uY2hhcnQuaXNDb21ibykseTpuP3MuZ2V0QmFzZVBpeGVsKCk6cy5nZXRQaXhlbEZvclZhbHVlKGMsaSxmKSxyYWRpdXM6bj8wOmQucmFkaXVzP2QucmFkaXVzOm8uZ2V0UmFkaXVzKGMpLGhpdFJhZGl1czpkLmhpdFJhZGl1cz9kLmhpdFJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmhpdFJhZGl1cyxpLGguaGl0UmFkaXVzKX19KSx0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwobyxhLGgpO3ZhciBnPWEuX21vZGVsO2cuc2tpcD1kLnNraXA/ZC5za2lwOmlzTmFOKGcueCl8fGlzTmFOKGcueSksYS5waXZvdCgpfSxnZXRSYWRpdXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQucnx8dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LnJhZGl1c30sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbihhKXt2YXIgaT10aGlzO3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnNldEhvdmVyU3R5bGUuY2FsbChpLGEpO3ZhciBuPWkuY2hhcnQuZGF0YS5kYXRhc2V0c1thLl9kYXRhc2V0SW5kZXhdLG89YS5faW5kZXgscj1hLmN1c3RvbXx8e30sbD1hLl9tb2RlbDtsLnJhZGl1cz1yLmhvdmVyUmFkaXVzP3IuaG92ZXJSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5ob3ZlclJhZGl1cyxvLGkuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cykraS5nZXRSYWRpdXMobi5kYXRhW29dKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt2YXIgYT10aGlzO3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbChhLGUsYS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50KTt2YXIgaT1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbZS5fZGF0YXNldEluZGV4XS5kYXRhW2UuX2luZGV4XSxuPWUuY3VzdG9tfHx7fSxvPWUuX21vZGVsO28ucmFkaXVzPW4ucmFkaXVzP24ucmFkaXVzOmEuZ2V0UmFkaXVzKGkpfX0pfX0se31dLDE3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHM7YS5kb3VnaG51dD17YW5pbWF0aW9uOnthbmltYXRlUm90YXRlOiEwLGFuaW1hdGVTY2FsZTohMX0sYXNwZWN0UmF0aW86MSxob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO3ZhciBhPXQuZGF0YSxpPWEuZGF0YXNldHMsbj1hLmxhYmVscztpZihpLmxlbmd0aClmb3IodmFyIG89MDtvPGlbMF0uZGF0YS5sZW5ndGg7KytvKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2lbMF0uYmFja2dyb3VuZENvbG9yW29dKydcIj48L3NwYW4+JyksbltvXSYmZS5wdXNoKG5bb10pLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9LGxlZ2VuZDp7bGFiZWxzOntnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgYT10LmRhdGE7cmV0dXJuIGEubGFiZWxzLmxlbmd0aCYmYS5kYXRhc2V0cy5sZW5ndGg/YS5sYWJlbHMubWFwKGZ1bmN0aW9uKGksbil7dmFyIG89dC5nZXREYXRhc2V0TWV0YSgwKSxyPWEuZGF0YXNldHNbMF0sbD1vLmRhdGFbbl0scz1sJiZsLmN1c3RvbXx8e30sZD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCx1PXQub3B0aW9ucy5lbGVtZW50cy5hcmMsYz1zLmJhY2tncm91bmRDb2xvcj9zLmJhY2tncm91bmRDb2xvcjpkKHIuYmFja2dyb3VuZENvbG9yLG4sdS5iYWNrZ3JvdW5kQ29sb3IpLGg9cy5ib3JkZXJDb2xvcj9zLmJvcmRlckNvbG9yOmQoci5ib3JkZXJDb2xvcixuLHUuYm9yZGVyQ29sb3IpLGY9cy5ib3JkZXJXaWR0aD9zLmJvcmRlcldpZHRoOmQoci5ib3JkZXJXaWR0aCxuLHUuYm9yZGVyV2lkdGgpO3JldHVybnt0ZXh0OmksZmlsbFN0eWxlOmMsc3Ryb2tlU3R5bGU6aCxsaW5lV2lkdGg6ZixoaWRkZW46aXNOYU4oci5kYXRhW25dKXx8by5kYXRhW25dLmhpZGRlbixpbmRleDpufX0pOltdfX0sb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUuaW5kZXgscj10aGlzLmNoYXJ0O2ZvcihhPTAsaT0oci5kYXRhLmRhdGFzZXRzfHxbXSkubGVuZ3RoO2k+YTsrK2Epbj1yLmdldERhdGFzZXRNZXRhKGEpLG4uZGF0YVtvXSYmKG4uZGF0YVtvXS5oaWRkZW49IW4uZGF0YVtvXS5oaWRkZW4pO3IudXBkYXRlKCl9fSxjdXRvdXRQZXJjZW50YWdlOjUwLHJvdGF0aW9uOk1hdGguUEkqLS41LGNpcmN1bWZlcmVuY2U6MipNYXRoLlBJLHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxhKXt2YXIgaT1hLmxhYmVsc1t0LmluZGV4XSxuPVwiOiBcIithLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5kYXRhW3QuaW5kZXhdO3JldHVybiBlLmlzQXJyYXkoaSk/KGk9aS5zbGljZSgpLGlbMF0rPW4pOmkrPW4saX19fX0sYS5waWU9ZS5jbG9uZShhLmRvdWdobnV0KSxlLmV4dGVuZChhLnBpZSx7Y3V0b3V0UGVyY2VudGFnZTowfSksdC5jb250cm9sbGVycy5kb3VnaG51dD10LmNvbnRyb2xsZXJzLnBpZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuQXJjLGxpbmtTY2FsZXM6ZS5ub29wLGdldFJpbmdJbmRleDpmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxhPTA7dD5hOysrYSl0aGlzLmNoYXJ0LmlzRGF0YXNldFZpc2libGUoYSkmJisrZTtyZXR1cm4gZX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49aS5jaGFydEFyZWEsbz1pLm9wdGlvbnMscj1vLmVsZW1lbnRzLmFyYyxsPW4ucmlnaHQtbi5sZWZ0LXIuYm9yZGVyV2lkdGgscz1uLmJvdHRvbS1uLnRvcC1yLmJvcmRlcldpZHRoLGQ9TWF0aC5taW4obCxzKSx1PXt4OjAseTowfSxjPWEuZ2V0TWV0YSgpLGg9by5jdXRvdXRQZXJjZW50YWdlLGY9by5jaXJjdW1mZXJlbmNlO2lmKGY8MipNYXRoLlBJKXt2YXIgZz1vLnJvdGF0aW9uJSgyKk1hdGguUEkpO2crPTIqTWF0aC5QSSooZz49TWF0aC5QST8tMTpnPC1NYXRoLlBJPzE6MCk7dmFyIHA9ZytmLG09e3g6TWF0aC5jb3MoZykseTpNYXRoLnNpbihnKX0sYj17eDpNYXRoLmNvcyhwKSx5Ok1hdGguc2luKHApfSx2PTA+PWcmJnA+PTB8fGc8PTIqTWF0aC5QSSYmMipNYXRoLlBJPD1wLHg9Zzw9LjUqTWF0aC5QSSYmLjUqTWF0aC5QSTw9cHx8Zzw9Mi41Kk1hdGguUEkmJjIuNSpNYXRoLlBJPD1wLHk9Zzw9LU1hdGguUEkmJi1NYXRoLlBJPD1wfHxnPD1NYXRoLlBJJiZNYXRoLlBJPD1wLGs9Zzw9LjUqLU1hdGguUEkmJi41Ki1NYXRoLlBJPD1wfHxnPD0xLjUqTWF0aC5QSSYmMS41Kk1hdGguUEk8PXAsUz1oLzEwMCx3PXt4Onk/LTE6TWF0aC5taW4obS54KihtLng8MD8xOlMpLGIueCooYi54PDA/MTpTKSkseTprPy0xOk1hdGgubWluKG0ueSoobS55PDA/MTpTKSxiLnkqKGIueTwwPzE6UykpfSxNPXt4OnY/MTpNYXRoLm1heChtLngqKG0ueD4wPzE6UyksYi54KihiLng+MD8xOlMpKSx5Ong/MTpNYXRoLm1heChtLnkqKG0ueT4wPzE6UyksYi55KihiLnk+MD8xOlMpKX0sQz17d2lkdGg6LjUqKE0ueC13LngpLGhlaWdodDouNSooTS55LXcueSl9O2Q9TWF0aC5taW4obC9DLndpZHRoLHMvQy5oZWlnaHQpLHU9e3g6KE0ueCt3LngpKi0uNSx5OihNLnkrdy55KSotLjV9fWkuYm9yZGVyV2lkdGg9YS5nZXRNYXhCb3JkZXJXaWR0aChjLmRhdGEpLGkub3V0ZXJSYWRpdXM9TWF0aC5tYXgoKGQtaS5ib3JkZXJXaWR0aCkvMiwwKSxpLmlubmVyUmFkaXVzPU1hdGgubWF4KGg/aS5vdXRlclJhZGl1cy8xMDAqaDoxLDApLGkucmFkaXVzTGVuZ3RoPShpLm91dGVyUmFkaXVzLWkuaW5uZXJSYWRpdXMpL2kuZ2V0VmlzaWJsZURhdGFzZXRDb3VudCgpLGkub2Zmc2V0WD11LngqaS5vdXRlclJhZGl1cyxpLm9mZnNldFk9dS55Kmkub3V0ZXJSYWRpdXMsYy50b3RhbD1hLmNhbGN1bGF0ZVRvdGFsKCksYS5vdXRlclJhZGl1cz1pLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoKmEuZ2V0UmluZ0luZGV4KGEuaW5kZXgpLGEuaW5uZXJSYWRpdXM9YS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCxlLmVhY2goYy5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5jaGFydCxyPW8uY2hhcnRBcmVhLGw9by5vcHRpb25zLHM9bC5hbmltYXRpb24sZD0oci5sZWZ0K3IucmlnaHQpLzIsdT0oci50b3Arci5ib3R0b20pLzIsYz1sLnJvdGF0aW9uLGg9bC5yb3RhdGlvbixmPW4uZ2V0RGF0YXNldCgpLGc9aSYmcy5hbmltYXRlUm90YXRlPzA6dC5oaWRkZW4/MDpuLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UoZi5kYXRhW2FdKSoobC5jaXJjdW1mZXJlbmNlLygyKk1hdGguUEkpKSxwPWkmJnMuYW5pbWF0ZVNjYWxlPzA6bi5pbm5lclJhZGl1cyxtPWkmJnMuYW5pbWF0ZVNjYWxlPzA6bi5vdXRlclJhZGl1cyxiPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0O2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfbW9kZWw6e3g6ZCtvLm9mZnNldFgseTp1K28ub2Zmc2V0WSxzdGFydEFuZ2xlOmMsZW5kQW5nbGU6aCxjaXJjdW1mZXJlbmNlOmcsb3V0ZXJSYWRpdXM6bSxpbm5lclJhZGl1czpwLGxhYmVsOmIoZi5sYWJlbCxhLG8uZGF0YS5sYWJlbHNbYV0pfX0pO3ZhciB2PXQuX21vZGVsO3RoaXMucmVtb3ZlSG92ZXJTdHlsZSh0KSxpJiZzLmFuaW1hdGVSb3RhdGV8fCgwPT09YT92LnN0YXJ0QW5nbGU9bC5yb3RhdGlvbjp2LnN0YXJ0QW5nbGU9bi5nZXRNZXRhKCkuZGF0YVthLTFdLl9tb2RlbC5lbmRBbmdsZSx2LmVuZEFuZ2xlPXYuc3RhcnRBbmdsZSt2LmNpcmN1bWZlcmVuY2UpLHQucGl2b3QoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwodGhpcyxlLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5hcmMpfSxjYWxjdWxhdGVUb3RhbDpmdW5jdGlvbigpe3ZhciB0LGE9dGhpcy5nZXREYXRhc2V0KCksaT10aGlzLmdldE1ldGEoKSxuPTA7cmV0dXJuIGUuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSxpKXt0PWEuZGF0YVtpXSxpc05hTih0KXx8ZS5oaWRkZW58fChuKz1NYXRoLmFicyh0KSl9KSxufSxjYWxjdWxhdGVDaXJjdW1mZXJlbmNlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0TWV0YSgpLnRvdGFsO3JldHVybiBlPjAmJiFpc05hTih0KT8yKk1hdGguUEkqKHQvZSk6MH0sZ2V0TWF4Qm9yZGVyV2lkdGg6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGEsaT0wLG49dGhpcy5pbmRleCxvPXQubGVuZ3RoLHI9MDtvPnI7cisrKWU9dFtyXS5fbW9kZWw/dFtyXS5fbW9kZWwuYm9yZGVyV2lkdGg6MCxhPXRbcl0uX2NoYXJ0P3Rbcl0uX2NoYXJ0LmNvbmZpZy5kYXRhLmRhdGFzZXRzW25dLmhvdmVyQm9yZGVyV2lkdGg6MCxpPWU+aT9lOmksaT1hPmk/YTppO3JldHVybiBpfX0pfX0se31dLDE4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gYS5nZXRWYWx1ZU9yRGVmYXVsdCh0LnNob3dMaW5lLGUuc2hvd0xpbmVzKX12YXIgYT10LmhlbHBlcnM7dC5kZWZhdWx0cy5saW5lPXtzaG93TGluZXM6ITAsc3BhbkdhcHM6ITEsaG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImNhdGVnb3J5XCIsaWQ6XCJ4LWF4aXMtMFwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIsaWQ6XCJ5LWF4aXMtMFwifV19fSx0LmNvbnRyb2xsZXJzLmxpbmU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFzZXRFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkxpbmUsZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBpLG4sbyxyPXRoaXMsbD1yLmdldE1ldGEoKSxzPWwuZGF0YXNldCxkPWwuZGF0YXx8W10sdT1yLmNoYXJ0Lm9wdGlvbnMsYz11LmVsZW1lbnRzLmxpbmUsaD1yLmdldFNjYWxlRm9ySWQobC55QXhpc0lEKSxmPXIuZ2V0RGF0YXNldCgpLGc9ZShmLHUpO2ZvcihnJiYobz1zLmN1c3RvbXx8e30sdm9pZCAwIT09Zi50ZW5zaW9uJiZ2b2lkIDA9PT1mLmxpbmVUZW5zaW9uJiYoZi5saW5lVGVuc2lvbj1mLnRlbnNpb24pLHMuX3NjYWxlPWgscy5fZGF0YXNldEluZGV4PXIuaW5kZXgscy5fY2hpbGRyZW49ZCxzLl9tb2RlbD17c3BhbkdhcHM6Zi5zcGFuR2Fwcz9mLnNwYW5HYXBzOnUuc3BhbkdhcHMsdGVuc2lvbjpvLnRlbnNpb24/by50ZW5zaW9uOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5saW5lVGVuc2lvbixjLnRlbnNpb24pLGJhY2tncm91bmRDb2xvcjpvLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjpmLmJhY2tncm91bmRDb2xvcnx8Yy5iYWNrZ3JvdW5kQ29sb3IsYm9yZGVyV2lkdGg6by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOmYuYm9yZGVyV2lkdGh8fGMuYm9yZGVyV2lkdGgsYm9yZGVyQ29sb3I6by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOmYuYm9yZGVyQ29sb3J8fGMuYm9yZGVyQ29sb3IsYm9yZGVyQ2FwU3R5bGU6by5ib3JkZXJDYXBTdHlsZT9vLmJvcmRlckNhcFN0eWxlOmYuYm9yZGVyQ2FwU3R5bGV8fGMuYm9yZGVyQ2FwU3R5bGUsYm9yZGVyRGFzaDpvLmJvcmRlckRhc2g/by5ib3JkZXJEYXNoOmYuYm9yZGVyRGFzaHx8Yy5ib3JkZXJEYXNoLGJvcmRlckRhc2hPZmZzZXQ6by5ib3JkZXJEYXNoT2Zmc2V0P28uYm9yZGVyRGFzaE9mZnNldDpmLmJvcmRlckRhc2hPZmZzZXR8fGMuYm9yZGVyRGFzaE9mZnNldCxib3JkZXJKb2luU3R5bGU6by5ib3JkZXJKb2luU3R5bGU/by5ib3JkZXJKb2luU3R5bGU6Zi5ib3JkZXJKb2luU3R5bGV8fGMuYm9yZGVySm9pblN0eWxlLGZpbGw6by5maWxsP28uZmlsbDp2b2lkIDAhPT1mLmZpbGw/Zi5maWxsOmMuZmlsbCxzdGVwcGVkTGluZTpvLnN0ZXBwZWRMaW5lP28uc3RlcHBlZExpbmU6YS5nZXRWYWx1ZU9yRGVmYXVsdChmLnN0ZXBwZWRMaW5lLGMuc3RlcHBlZCksY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTpvLmN1YmljSW50ZXJwb2xhdGlvbk1vZGU/by5jdWJpY0ludGVycG9sYXRpb25Nb2RlOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5jdWJpY0ludGVycG9sYXRpb25Nb2RlLGMuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSksc2NhbGVUb3A6aC50b3Asc2NhbGVCb3R0b206aC5ib3R0b20sc2NhbGVaZXJvOmguZ2V0QmFzZVBpeGVsKCl9LHMucGl2b3QoKSksaT0wLG49ZC5sZW5ndGg7bj5pOysraSlyLnVwZGF0ZUVsZW1lbnQoZFtpXSxpLHQpO2ZvcihnJiYwIT09cy5fbW9kZWwudGVuc2lvbiYmci51cGRhdGVCZXppZXJDb250cm9sUG9pbnRzKCksaT0wLG49ZC5sZW5ndGg7bj5pOysraSlkW2ldLnBpdm90KCl9LGdldFBvaW50QmFja2dyb3VuZENvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJhY2tncm91bmRDb2xvcixuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJhY2tncm91bmRDb2xvcj9pPW8uYmFja2dyb3VuZENvbG9yOm4ucG9pbnRCYWNrZ3JvdW5kQ29sb3I/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50QmFja2dyb3VuZENvbG9yLGUsaSk6bi5iYWNrZ3JvdW5kQ29sb3ImJihpPW4uYmFja2dyb3VuZENvbG9yKSxpfSxnZXRQb2ludEJvcmRlckNvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJvcmRlckNvbG9yLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYm9yZGVyQ29sb3I/aT1vLmJvcmRlckNvbG9yOm4ucG9pbnRCb3JkZXJDb2xvcj9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCb3JkZXJDb2xvcixlLGkpOm4uYm9yZGVyQ29sb3ImJihpPW4uYm9yZGVyQ29sb3IpLGl9LGdldFBvaW50Qm9yZGVyV2lkdGg6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYm9yZGVyV2lkdGgsbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5ib3JkZXJXaWR0aD9pPW8uYm9yZGVyV2lkdGg6bi5wb2ludEJvcmRlcldpZHRoP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJvcmRlcldpZHRoLGUsaSk6bi5ib3JkZXJXaWR0aCYmKGk9bi5ib3JkZXJXaWR0aCksaX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGUsaSl7dmFyIG4sbyxyPXRoaXMsbD1yLmdldE1ldGEoKSxzPXQuY3VzdG9tfHx7fSxkPXIuZ2V0RGF0YXNldCgpLHU9ci5pbmRleCxjPWQuZGF0YVtlXSxoPXIuZ2V0U2NhbGVGb3JJZChsLnlBeGlzSUQpLGY9ci5nZXRTY2FsZUZvcklkKGwueEF4aXNJRCksZz1yLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQscD1yLmNoYXJ0LmRhdGEubGFiZWxzfHxbXSxtPTE9PT1wLmxlbmd0aHx8MT09PWQuZGF0YS5sZW5ndGh8fHIuY2hhcnQuaXNDb21ibzt2b2lkIDAhPT1kLnJhZGl1cyYmdm9pZCAwPT09ZC5wb2ludFJhZGl1cyYmKGQucG9pbnRSYWRpdXM9ZC5yYWRpdXMpLHZvaWQgMCE9PWQuaGl0UmFkaXVzJiZ2b2lkIDA9PT1kLnBvaW50SGl0UmFkaXVzJiYoZC5wb2ludEhpdFJhZGl1cz1kLmhpdFJhZGl1cyksbj1mLmdldFBpeGVsRm9yVmFsdWUoXCJvYmplY3RcIj09dHlwZW9mIGM/YzpOYU4sZSx1LG0pLG89aT9oLmdldEJhc2VQaXhlbCgpOnIuY2FsY3VsYXRlUG9pbnRZKGMsZSx1KSx0Ll94U2NhbGU9Zix0Ll95U2NhbGU9aCx0Ll9kYXRhc2V0SW5kZXg9dSx0Ll9pbmRleD1lLHQuX21vZGVsPXt4Om4seTpvLHNraXA6cy5za2lwfHxpc05hTihuKXx8aXNOYU4obykscmFkaXVzOnMucmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50UmFkaXVzLGUsZy5yYWRpdXMpLHBvaW50U3R5bGU6cy5wb2ludFN0eWxlfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50U3R5bGUsZSxnLnBvaW50U3R5bGUpLGJhY2tncm91bmRDb2xvcjpyLmdldFBvaW50QmFja2dyb3VuZENvbG9yKHQsZSksYm9yZGVyQ29sb3I6ci5nZXRQb2ludEJvcmRlckNvbG9yKHQsZSksYm9yZGVyV2lkdGg6ci5nZXRQb2ludEJvcmRlcldpZHRoKHQsZSksdGVuc2lvbjpsLmRhdGFzZXQuX21vZGVsP2wuZGF0YXNldC5fbW9kZWwudGVuc2lvbjowLHN0ZXBwZWRMaW5lOmwuZGF0YXNldC5fbW9kZWw/bC5kYXRhc2V0Ll9tb2RlbC5zdGVwcGVkTGluZTohMSxoaXRSYWRpdXM6cy5oaXRSYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRIaXRSYWRpdXMsZSxnLmhpdFJhZGl1cyl9fSxjYWxjdWxhdGVQb2ludFk6ZnVuY3Rpb24odCxlLGEpe3ZhciBpLG4sbyxyPXRoaXMsbD1yLmNoYXJ0LHM9ci5nZXRNZXRhKCksZD1yLmdldFNjYWxlRm9ySWQocy55QXhpc0lEKSx1PTAsYz0wO2lmKGQub3B0aW9ucy5zdGFja2VkKXtmb3IoaT0wO2E+aTtpKyspaWYobj1sLmRhdGEuZGF0YXNldHNbaV0sbz1sLmdldERhdGFzZXRNZXRhKGkpLFwibGluZVwiPT09by50eXBlJiZvLnlBeGlzSUQ9PT1kLmlkJiZsLmlzRGF0YXNldFZpc2libGUoaSkpe3ZhciBoPU51bWJlcihkLmdldFJpZ2h0VmFsdWUobi5kYXRhW2VdKSk7MD5oP2MrPWh8fDA6dSs9aHx8MH12YXIgZj1OdW1iZXIoZC5nZXRSaWdodFZhbHVlKHQpKTtyZXR1cm4gMD5mP2QuZ2V0UGl4ZWxGb3JWYWx1ZShjK2YpOmQuZ2V0UGl4ZWxGb3JWYWx1ZSh1K2YpfXJldHVybiBkLmdldFBpeGVsRm9yVmFsdWUodCl9LHVwZGF0ZUJlemllckNvbnRyb2xQb2ludHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxhKXtyZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odCxhKSxlKX12YXIgZSxpLG4sbyxyLGw9dGhpcyxzPWwuZ2V0TWV0YSgpLGQ9bC5jaGFydC5jaGFydEFyZWEsdT1zLmRhdGF8fFtdO2lmKHMuZGF0YXNldC5fbW9kZWwuc3BhbkdhcHMmJih1PXUuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0Ll9tb2RlbC5za2lwfSkpLFwibW9ub3RvbmVcIj09PXMuZGF0YXNldC5fbW9kZWwuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSlhLnNwbGluZUN1cnZlTW9ub3RvbmUodSk7ZWxzZSBmb3IoZT0wLGk9dS5sZW5ndGg7aT5lOysrZSluPXVbZV0sbz1uLl9tb2RlbCxyPWEuc3BsaW5lQ3VydmUoYS5wcmV2aW91c0l0ZW0odSxlKS5fbW9kZWwsbyxhLm5leHRJdGVtKHUsZSkuX21vZGVsLHMuZGF0YXNldC5fbW9kZWwudGVuc2lvbiksby5jb250cm9sUG9pbnRQcmV2aW91c1g9ci5wcmV2aW91cy54LG8uY29udHJvbFBvaW50UHJldmlvdXNZPXIucHJldmlvdXMueSxvLmNvbnRyb2xQb2ludE5leHRYPXIubmV4dC54LG8uY29udHJvbFBvaW50TmV4dFk9ci5uZXh0Lnk7aWYobC5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUuY2FwQmV6aWVyUG9pbnRzKWZvcihlPTAsaT11Lmxlbmd0aDtpPmU7KytlKW89dVtlXS5fbW9kZWwsby5jb250cm9sUG9pbnRQcmV2aW91c1g9dChvLmNvbnRyb2xQb2ludFByZXZpb3VzWCxkLmxlZnQsZC5yaWdodCksby5jb250cm9sUG9pbnRQcmV2aW91c1k9dChvLmNvbnRyb2xQb2ludFByZXZpb3VzWSxkLnRvcCxkLmJvdHRvbSksby5jb250cm9sUG9pbnROZXh0WD10KG8uY29udHJvbFBvaW50TmV4dFgsZC5sZWZ0LGQucmlnaHQpLG8uY29udHJvbFBvaW50TmV4dFk9dChvLmNvbnRyb2xQb2ludE5leHRZLGQudG9wLGQuYm90dG9tKX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgYSxpLG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9by5kYXRhfHxbXSxsPXR8fDE7Zm9yKGE9MCxpPXIubGVuZ3RoO2k+YTsrK2EpclthXS50cmFuc2l0aW9uKGwpO2ZvcihlKG4uZ2V0RGF0YXNldCgpLG4uY2hhcnQub3B0aW9ucykmJm8uZGF0YXNldC50cmFuc2l0aW9uKGwpLmRyYXcoKSxhPTAsaT1yLmxlbmd0aDtpPmE7KythKXJbYV0uZHJhdygpfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbDtvLnJhZGl1cz1uLmhvdmVyUmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJSYWRpdXMsaSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3J8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixpLGEuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCb3JkZXJDb2xvcixpLGEuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGh8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJvcmRlcldpZHRoLGksby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxpPWUuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLG49dC5faW5kZXgsbz10LmN1c3RvbXx8e30scj10Ll9tb2RlbDt2b2lkIDAhPT1pLnJhZGl1cyYmdm9pZCAwPT09aS5wb2ludFJhZGl1cyYmKGkucG9pbnRSYWRpdXM9aS5yYWRpdXMpLHIucmFkaXVzPW8ucmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChpLnBvaW50UmFkaXVzLG4sZS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LnJhZGl1cyksci5iYWNrZ3JvdW5kQ29sb3I9ZS5nZXRQb2ludEJhY2tncm91bmRDb2xvcih0LG4pLHIuYm9yZGVyQ29sb3I9ZS5nZXRQb2ludEJvcmRlckNvbG9yKHQsbiksci5ib3JkZXJXaWR0aD1lLmdldFBvaW50Qm9yZGVyV2lkdGgodCxuKX19KX19LHt9XSwxOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5wb2xhckFyZWE9e3NjYWxlOnt0eXBlOlwicmFkaWFsTGluZWFyXCIsbGluZUFyYzohMCx0aWNrczp7YmVnaW5BdFplcm86ITB9fSxhbmltYXRpb246e2FuaW1hdGVSb3RhdGU6ITAsYW5pbWF0ZVNjYWxlOiEwfSxzdGFydEFuZ2xlOi0uNSpNYXRoLlBJLGFzcGVjdFJhdGlvOjEsbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTt2YXIgYT10LmRhdGEsaT1hLmRhdGFzZXRzLG49YS5sYWJlbHM7aWYoaS5sZW5ndGgpZm9yKHZhciBvPTA7bzxpWzBdLmRhdGEubGVuZ3RoOysrbyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JytpWzBdLmJhY2tncm91bmRDb2xvcltvXSsnXCI+PC9zcGFuPicpLG5bb10mJmUucHVzaChuW29dKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfSxsZWdlbmQ6e2xhYmVsczp7Z2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGE9dC5kYXRhO3JldHVybiBhLmxhYmVscy5sZW5ndGgmJmEuZGF0YXNldHMubGVuZ3RoP2EubGFiZWxzLm1hcChmdW5jdGlvbihpLG4pe3ZhciBvPXQuZ2V0RGF0YXNldE1ldGEoMCkscj1hLmRhdGFzZXRzWzBdLGw9by5kYXRhW25dLHM9bC5jdXN0b218fHt9LGQ9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsdT10Lm9wdGlvbnMuZWxlbWVudHMuYXJjLGM9cy5iYWNrZ3JvdW5kQ29sb3I/cy5iYWNrZ3JvdW5kQ29sb3I6ZChyLmJhY2tncm91bmRDb2xvcixuLHUuYmFja2dyb3VuZENvbG9yKSxoPXMuYm9yZGVyQ29sb3I/cy5ib3JkZXJDb2xvcjpkKHIuYm9yZGVyQ29sb3Isbix1LmJvcmRlckNvbG9yKSxmPXMuYm9yZGVyV2lkdGg/cy5ib3JkZXJXaWR0aDpkKHIuYm9yZGVyV2lkdGgsbix1LmJvcmRlcldpZHRoKTtyZXR1cm57dGV4dDppLGZpbGxTdHlsZTpjLHN0cm9rZVN0eWxlOmgsbGluZVdpZHRoOmYsaGlkZGVuOmlzTmFOKHIuZGF0YVtuXSl8fG8uZGF0YVtuXS5oaWRkZW4saW5kZXg6bn19KTpbXX19LG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLmluZGV4LHI9dGhpcy5jaGFydDtmb3IoYT0wLGk9KHIuZGF0YS5kYXRhc2V0c3x8W10pLmxlbmd0aDtpPmE7KythKW49ci5nZXREYXRhc2V0TWV0YShhKSxuLmRhdGFbb10uaGlkZGVuPSFuLmRhdGFbb10uaGlkZGVuO3IudXBkYXRlKCl9fSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUubGFiZWxzW3QuaW5kZXhdK1wiOiBcIit0LnlMYWJlbH19fX0sdC5jb250cm9sbGVycy5wb2xhckFyZWE9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkFyYyxsaW5rU2NhbGVzOmUubm9vcCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1pLmNoYXJ0QXJlYSxvPWEuZ2V0TWV0YSgpLHI9aS5vcHRpb25zLGw9ci5lbGVtZW50cy5hcmMscz1NYXRoLm1pbihuLnJpZ2h0LW4ubGVmdCxuLmJvdHRvbS1uLnRvcCk7aS5vdXRlclJhZGl1cz1NYXRoLm1heCgocy1sLmJvcmRlcldpZHRoLzIpLzIsMCksaS5pbm5lclJhZGl1cz1NYXRoLm1heChyLmN1dG91dFBlcmNlbnRhZ2U/aS5vdXRlclJhZGl1cy8xMDAqci5jdXRvdXRQZXJjZW50YWdlOjEsMCksaS5yYWRpdXNMZW5ndGg9KGkub3V0ZXJSYWRpdXMtaS5pbm5lclJhZGl1cykvaS5nZXRWaXNpYmxlRGF0YXNldENvdW50KCksYS5vdXRlclJhZGl1cz1pLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoKmEuaW5kZXgsYS5pbm5lclJhZGl1cz1hLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoLG8uY291bnQ9YS5jb3VudFZpc2libGVFbGVtZW50cygpLGUuZWFjaChvLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe2Zvcih2YXIgbj10aGlzLG89bi5jaGFydCxyPW4uZ2V0RGF0YXNldCgpLGw9by5vcHRpb25zLHM9bC5hbmltYXRpb24sZD1vLnNjYWxlLHU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsYz1vLmRhdGEubGFiZWxzLGg9bi5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKHIuZGF0YVthXSksZj1kLnhDZW50ZXIsZz1kLnlDZW50ZXIscD0wLG09bi5nZXRNZXRhKCksYj0wO2E+YjsrK2IpaXNOYU4oci5kYXRhW2JdKXx8bS5kYXRhW2JdLmhpZGRlbnx8KytwO3ZhciB2PWwuc3RhcnRBbmdsZSx4PXQuaGlkZGVuPzA6ZC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShyLmRhdGFbYV0pLHk9ditoKnAsaz15Kyh0LmhpZGRlbj8wOmgpLFM9cy5hbmltYXRlU2NhbGU/MDpkLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHIuZGF0YVthXSk7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9zY2FsZTpkLF9tb2RlbDp7eDpmLHk6Zyxpbm5lclJhZGl1czowLG91dGVyUmFkaXVzOmk/Uzp4LHN0YXJ0QW5nbGU6aSYmcy5hbmltYXRlUm90YXRlP3Y6eSxlbmRBbmdsZTppJiZzLmFuaW1hdGVSb3RhdGU/djprLGxhYmVsOnUoYyxhLGNbYV0pfX0pLG4ucmVtb3ZlSG92ZXJTdHlsZSh0KSx0LnBpdm90KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKHRoaXMsZSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMuYXJjKX0sY291bnRWaXNpYmxlRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldERhdGFzZXQoKSxhPXRoaXMuZ2V0TWV0YSgpLGk9MDtyZXR1cm4gZS5lYWNoKGEuZGF0YSxmdW5jdGlvbihlLGEpe2lzTmFOKHQuZGF0YVthXSl8fGUuaGlkZGVufHxpKyt9KSxpfSxjYWxjdWxhdGVDaXJjdW1mZXJlbmNlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0TWV0YSgpLmNvdW50O3JldHVybiBlPjAmJiFpc05hTih0KT8yKk1hdGguUEkvZTowfX0pfX0se31dLDIwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnJhZGFyPXthc3BlY3RSYXRpbzoxLHNjYWxlOnt0eXBlOlwicmFkaWFsTGluZWFyXCJ9LGVsZW1lbnRzOntsaW5lOnt0ZW5zaW9uOjB9fX0sdC5jb250cm9sbGVycy5yYWRhcj10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YXNldEVsZW1lbnRUeXBlOnQuZWxlbWVudHMuTGluZSxkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCxsaW5rU2NhbGVzOmUubm9vcCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49aS5kYXRhc2V0LG89aS5kYXRhLHI9bi5jdXN0b218fHt9LGw9YS5nZXREYXRhc2V0KCkscz1hLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZSxkPWEuY2hhcnQuc2NhbGU7dm9pZCAwIT09bC50ZW5zaW9uJiZ2b2lkIDA9PT1sLmxpbmVUZW5zaW9uJiYobC5saW5lVGVuc2lvbj1sLnRlbnNpb24pLGUuZXh0ZW5kKGkuZGF0YXNldCx7X2RhdGFzZXRJbmRleDphLmluZGV4LF9jaGlsZHJlbjpvLF9sb29wOiEwLF9tb2RlbDp7dGVuc2lvbjpyLnRlbnNpb24/ci50ZW5zaW9uOmUuZ2V0VmFsdWVPckRlZmF1bHQobC5saW5lVGVuc2lvbixzLnRlbnNpb24pLGJhY2tncm91bmRDb2xvcjpyLmJhY2tncm91bmRDb2xvcj9yLmJhY2tncm91bmRDb2xvcjpsLmJhY2tncm91bmRDb2xvcnx8cy5iYWNrZ3JvdW5kQ29sb3IsYm9yZGVyV2lkdGg6ci5ib3JkZXJXaWR0aD9yLmJvcmRlcldpZHRoOmwuYm9yZGVyV2lkdGh8fHMuYm9yZGVyV2lkdGgsYm9yZGVyQ29sb3I6ci5ib3JkZXJDb2xvcj9yLmJvcmRlckNvbG9yOmwuYm9yZGVyQ29sb3J8fHMuYm9yZGVyQ29sb3IsZmlsbDpyLmZpbGw/ci5maWxsOnZvaWQgMCE9PWwuZmlsbD9sLmZpbGw6cy5maWxsLGJvcmRlckNhcFN0eWxlOnIuYm9yZGVyQ2FwU3R5bGU/ci5ib3JkZXJDYXBTdHlsZTpsLmJvcmRlckNhcFN0eWxlfHxzLmJvcmRlckNhcFN0eWxlLGJvcmRlckRhc2g6ci5ib3JkZXJEYXNoP3IuYm9yZGVyRGFzaDpsLmJvcmRlckRhc2h8fHMuYm9yZGVyRGFzaCxib3JkZXJEYXNoT2Zmc2V0OnIuYm9yZGVyRGFzaE9mZnNldD9yLmJvcmRlckRhc2hPZmZzZXQ6bC5ib3JkZXJEYXNoT2Zmc2V0fHxzLmJvcmRlckRhc2hPZmZzZXQsYm9yZGVySm9pblN0eWxlOnIuYm9yZGVySm9pblN0eWxlP3IuYm9yZGVySm9pblN0eWxlOmwuYm9yZGVySm9pblN0eWxlfHxzLmJvcmRlckpvaW5TdHlsZSxzY2FsZVRvcDpkLnRvcCxzY2FsZUJvdHRvbTpkLmJvdHRvbSxzY2FsZVplcm86ZC5nZXRCYXNlUG9zaXRpb24oKX19KSxpLmRhdGFzZXQucGl2b3QoKSxlLmVhY2gobyxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9LGEpLGEudXBkYXRlQmV6aWVyQ29udHJvbFBvaW50cygpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89dC5jdXN0b218fHt9LHI9bi5nZXREYXRhc2V0KCksbD1uLmNoYXJ0LnNjYWxlLHM9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LGQ9bC5nZXRQb2ludFBvc2l0aW9uRm9yVmFsdWUoYSxyLmRhdGFbYV0pO2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfc2NhbGU6bCxfbW9kZWw6e3g6aT9sLnhDZW50ZXI6ZC54LHk6aT9sLnlDZW50ZXI6ZC55LHRlbnNpb246by50ZW5zaW9uP28udGVuc2lvbjplLmdldFZhbHVlT3JEZWZhdWx0KHIudGVuc2lvbixuLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZS50ZW5zaW9uKSxyYWRpdXM6by5yYWRpdXM/by5yYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludFJhZGl1cyxhLHMucmFkaXVzKSxiYWNrZ3JvdW5kQ29sb3I6by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJhY2tncm91bmRDb2xvcixhLHMuYmFja2dyb3VuZENvbG9yKSxib3JkZXJDb2xvcjpvLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJvcmRlckNvbG9yLGEscy5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCb3JkZXJXaWR0aCxhLHMuYm9yZGVyV2lkdGgpLHBvaW50U3R5bGU6by5wb2ludFN0eWxlP28ucG9pbnRTdHlsZTplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50U3R5bGUsYSxzLnBvaW50U3R5bGUpLGhpdFJhZGl1czpvLmhpdFJhZGl1cz9vLmhpdFJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLmhpdFJhZGl1cyxhLHMuaGl0UmFkaXVzKX19KSx0Ll9tb2RlbC5za2lwPW8uc2tpcD9vLnNraXA6aXNOYU4odC5fbW9kZWwueCl8fGlzTmFOKHQuX21vZGVsLnkpfSx1cGRhdGVCZXppZXJDb250cm9sUG9pbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jaGFydC5jaGFydEFyZWEsYT10aGlzLmdldE1ldGEoKTtlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKGksbil7dmFyIG89aS5fbW9kZWwscj1lLnNwbGluZUN1cnZlKGUucHJldmlvdXNJdGVtKGEuZGF0YSxuLCEwKS5fbW9kZWwsbyxlLm5leHRJdGVtKGEuZGF0YSxuLCEwKS5fbW9kZWwsby50ZW5zaW9uKTtvLmNvbnRyb2xQb2ludFByZXZpb3VzWD1NYXRoLm1heChNYXRoLm1pbihyLnByZXZpb3VzLngsdC5yaWdodCksdC5sZWZ0KSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT1NYXRoLm1heChNYXRoLm1pbihyLnByZXZpb3VzLnksdC5ib3R0b20pLHQudG9wKSxvLmNvbnRyb2xQb2ludE5leHRYPU1hdGgubWF4KE1hdGgubWluKHIubmV4dC54LHQucmlnaHQpLHQubGVmdCksby5jb250cm9sUG9pbnROZXh0WT1NYXRoLm1heChNYXRoLm1pbihyLm5leHQueSx0LmJvdHRvbSksdC50b3ApLGkucGl2b3QoKX0pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuZ2V0TWV0YSgpLGk9dHx8MTtlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKHQpe3QudHJhbnNpdGlvbihpKX0pLGEuZGF0YXNldC50cmFuc2l0aW9uKGkpLmRyYXcoKSxlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKHQpe3QuZHJhdygpfSl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10LmN1c3RvbXx8e30sbj10Ll9pbmRleCxvPXQuX21vZGVsO28ucmFkaXVzPWkuaG92ZXJSYWRpdXM/aS5ob3ZlclJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJSYWRpdXMsbix0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPWkuaG92ZXJCYWNrZ3JvdW5kQ29sb3I/aS5ob3ZlckJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IsbixlLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPWkuaG92ZXJCb3JkZXJDb2xvcj9pLmhvdmVyQm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQm9yZGVyQ29sb3IsbixlLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9aS5ob3ZlckJvcmRlcldpZHRoP2kuaG92ZXJCb3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxuLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5jdXN0b218fHt9LG49dC5faW5kZXgsbz10Ll9tb2RlbCxyPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludDtvLnJhZGl1cz1pLnJhZGl1cz9pLnJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnJhZGl1cyxuLHIucmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1pLmJhY2tncm91bmRDb2xvcj9pLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50QmFja2dyb3VuZENvbG9yLG4sci5iYWNrZ3JvdW5kQ29sb3IpLG8uYm9yZGVyQ29sb3I9aS5ib3JkZXJDb2xvcj9pLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCb3JkZXJDb2xvcixuLHIuYm9yZGVyQ29sb3IpLG8uYm9yZGVyV2lkdGg9aS5ib3JkZXJXaWR0aD9pLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCb3JkZXJXaWR0aCxuLHIuYm9yZGVyV2lkdGgpfX0pfX0se31dLDIxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC5hbmltYXRpb249e2R1cmF0aW9uOjFlMyxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixvblByb2dyZXNzOmUubm9vcCxvbkNvbXBsZXRlOmUubm9vcH0sdC5BbmltYXRpb249dC5FbGVtZW50LmV4dGVuZCh7Y3VycmVudFN0ZXA6bnVsbCxudW1TdGVwczo2MCxlYXNpbmc6XCJcIixyZW5kZXI6bnVsbCxvbkFuaW1hdGlvblByb2dyZXNzOm51bGwsb25BbmltYXRpb25Db21wbGV0ZTpudWxsfSksdC5hbmltYXRpb25TZXJ2aWNlPXtmcmFtZUR1cmF0aW9uOjE3LGFuaW1hdGlvbnM6W10sZHJvcEZyYW1lczowLHJlcXVlc3Q6bnVsbCxhZGRBbmltYXRpb246ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dGhpcztpfHwodC5hbmltYXRpbmc9ITApO2Zvcih2YXIgbz0wO288bi5hbmltYXRpb25zLmxlbmd0aDsrK28paWYobi5hbmltYXRpb25zW29dLmNoYXJ0SW5zdGFuY2U9PT10KXJldHVybiB2b2lkKG4uYW5pbWF0aW9uc1tvXS5hbmltYXRpb25PYmplY3Q9ZSk7bi5hbmltYXRpb25zLnB1c2goe2NoYXJ0SW5zdGFuY2U6dCxhbmltYXRpb25PYmplY3Q6ZX0pLDE9PT1uLmFuaW1hdGlvbnMubGVuZ3RoJiZuLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfSxjYW5jZWxBbmltYXRpb246ZnVuY3Rpb24odCl7dmFyIGE9ZS5maW5kSW5kZXgodGhpcy5hbmltYXRpb25zLGZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJ0SW5zdGFuY2U9PT10fSk7LTEhPT1hJiYodGhpcy5hbmltYXRpb25zLnNwbGljZShhLDEpLHQuYW5pbWF0aW5nPSExKX0scmVxdWVzdEFuaW1hdGlvbkZyYW1lOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztudWxsPT09dC5yZXF1ZXN0JiYodC5yZXF1ZXN0PWUucmVxdWVzdEFuaW1GcmFtZS5jYWxsKHdpbmRvdyxmdW5jdGlvbigpe3QucmVxdWVzdD1udWxsLHQuc3RhcnREaWdlc3QoKX0pKX0sc3RhcnREaWdlc3Q6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9RGF0ZS5ub3coKSxhPTA7dC5kcm9wRnJhbWVzPjEmJihhPU1hdGguZmxvb3IodC5kcm9wRnJhbWVzKSx0LmRyb3BGcmFtZXM9dC5kcm9wRnJhbWVzJTEpO2Zvcih2YXIgaT0wO2k8dC5hbmltYXRpb25zLmxlbmd0aDspbnVsbD09PXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXAmJih0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPTApLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXArPTErYSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHMmJih0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHMpLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QucmVuZGVyKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QpLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcyYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzLmNhbGwmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcy5jYWxsKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXSksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD09PXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHM/KHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZSYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlLmNhbGwmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZS5jYWxsKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXSksdC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UuYW5pbWF0aW5nPSExLHQuYW5pbWF0aW9ucy5zcGxpY2UoaSwxKSk6KytpO3ZhciBuPURhdGUubm93KCksbz0obi1lKS90LmZyYW1lRHVyYXRpb247dC5kcm9wRnJhbWVzKz1vLHQuYW5pbWF0aW9ucy5sZW5ndGg+MCYmdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX19fX0se31dLDIyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY2FudmFzSGVscGVycz17fTtlLmRyYXdQb2ludD1mdW5jdGlvbih0LGUsYSxpLG4pe3ZhciBvLHIsbCxzLGQsdTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmKG89ZS50b1N0cmluZygpLFwiW29iamVjdCBIVE1MSW1hZ2VFbGVtZW50XVwiPT09b3x8XCJbb2JqZWN0IEhUTUxDYW52YXNFbGVtZW50XVwiPT09bykpcmV0dXJuIHZvaWQgdC5kcmF3SW1hZ2UoZSxpLWUud2lkdGgvMixuLWUuaGVpZ2h0LzIpO2lmKCEoaXNOYU4oYSl8fDA+PWEpKXtzd2l0Y2goZSl7ZGVmYXVsdDp0LmJlZ2luUGF0aCgpLHQuYXJjKGksbixhLDAsMipNYXRoLlBJKSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcInRyaWFuZ2xlXCI6dC5iZWdpblBhdGgoKSxyPTMqYS9NYXRoLnNxcnQoMyksZD1yKk1hdGguc3FydCgzKS8yLHQubW92ZVRvKGktci8yLG4rZC8zKSx0LmxpbmVUbyhpK3IvMixuK2QvMyksdC5saW5lVG8oaSxuLTIqZC8zKSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcInJlY3RcIjp1PTEvTWF0aC5TUVJUMiphLHQuYmVnaW5QYXRoKCksdC5maWxsUmVjdChpLXUsbi11LDIqdSwyKnUpLHQuc3Ryb2tlUmVjdChpLXUsbi11LDIqdSwyKnUpO2JyZWFrO2Nhc2VcInJlY3RSb3RcIjp1PTEvTWF0aC5TUVJUMiphLHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaS11LG4pLHQubGluZVRvKGksbit1KSx0LmxpbmVUbyhpK3UsbiksdC5saW5lVG8oaSxuLXUpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwiY3Jvc3NcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbithKSx0LmxpbmVUbyhpLG4tYSksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImNyb3NzUm90XCI6dC5iZWdpblBhdGgoKSxsPU1hdGguY29zKE1hdGguUEkvNCkqYSxzPU1hdGguc2luKE1hdGguUEkvNCkqYSx0Lm1vdmVUbyhpLWwsbi1zKSx0LmxpbmVUbyhpK2wsbitzKSx0Lm1vdmVUbyhpLWwsbitzKSx0LmxpbmVUbyhpK2wsbi1zKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcInN0YXJcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbithKSx0LmxpbmVUbyhpLG4tYSksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSxsPU1hdGguY29zKE1hdGguUEkvNCkqYSxzPU1hdGguc2luKE1hdGguUEkvNCkqYSx0Lm1vdmVUbyhpLWwsbi1zKSx0LmxpbmVUbyhpK2wsbitzKSx0Lm1vdmVUbyhpLWwsbitzKSx0LmxpbmVUbyhpK2wsbi1zKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImxpbmVcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJkYXNoXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpfXQuc3Ryb2tlKCl9fX19LHt9XSwyMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGE9ci5nZXRTdHlsZSh0LGUpLGk9YSYmYS5tYXRjaCgvKFxcZCspcHgvKTtyZXR1cm4gaT9OdW1iZXIoaVsxXSk6dm9pZCAwfWZ1bmN0aW9uIGEodCxhKXt2YXIgaT10LnN0eWxlLG49dC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiksbz10LmdldEF0dHJpYnV0ZShcIndpZHRoXCIpO2lmKHQuX2NoYXJ0anM9e2luaXRpYWw6e2hlaWdodDpuLHdpZHRoOm8sc3R5bGU6e2Rpc3BsYXk6aS5kaXNwbGF5LGhlaWdodDppLmhlaWdodCx3aWR0aDppLndpZHRofX19LGkuZGlzcGxheT1pLmRpc3BsYXl8fFwiYmxvY2tcIixudWxsPT09b3x8XCJcIj09PW8pe3ZhciByPWUodCxcIndpZHRoXCIpO3ZvaWQgMCE9PXImJih0LndpZHRoPXIpfWlmKG51bGw9PT1ufHxcIlwiPT09bilpZihcIlwiPT09dC5zdHlsZS5oZWlnaHQpdC5oZWlnaHQ9dC53aWR0aC8oYS5vcHRpb25zLmFzcGVjdFJhdGlvfHwyKTtlbHNle3ZhciBsPWUodCxcImhlaWdodFwiKTt2b2lkIDAhPT1yJiYodC5oZWlnaHQ9bCl9cmV0dXJuIHR9ZnVuY3Rpb24gaSh0KXtpZih0Ll9jaGFydGpzKXt2YXIgZT10Ll9jaGFydGpzLmluaXRpYWw7W1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBpPWVbYV07dm9pZCAwPT09aXx8bnVsbD09PWk/dC5yZW1vdmVBdHRyaWJ1dGUoYSk6dC5zZXRBdHRyaWJ1dGUoYSxpKX0pLHIuZWFjaChlLnN0eWxlfHx7fSxmdW5jdGlvbihlLGEpe3Quc3R5bGVbYV09ZX0pLHQud2lkdGg9dC53aWR0aCxkZWxldGUgdC5fY2hhcnRqc319ZnVuY3Rpb24gbih0LGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk6dC5sZW5ndGgmJih0PXRbMF0pLHQmJnQuY2FudmFzJiYodD10LmNhbnZhcyksdCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KXt2YXIgaT10LmdldENvbnRleHQmJnQuZ2V0Q29udGV4dChcIjJkXCIpO2lmKGkgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpcmV0dXJuIGEodCxlKSxpfXJldHVybiBudWxsfWZ1bmN0aW9uIG8oZSl7ZT1lfHx7fTt2YXIgYT1lLmRhdGE9ZS5kYXRhfHx7fTtyZXR1cm4gYS5kYXRhc2V0cz1hLmRhdGFzZXRzfHxbXSxhLmxhYmVscz1hLmxhYmVsc3x8W10sZS5vcHRpb25zPXIuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwsdC5kZWZhdWx0c1tlLnR5cGVdLGUub3B0aW9uc3x8e30pLGV9dmFyIHI9dC5oZWxwZXJzO3QudHlwZXM9e30sdC5pbnN0YW5jZXM9e30sdC5jb250cm9sbGVycz17fSx0LkNvbnRyb2xsZXI9ZnVuY3Rpb24oZSxhLGkpe3ZhciBsPXRoaXM7YT1vKGEpO3ZhciBzPW4oZSxhKSxkPXMmJnMuY2FudmFzLHU9ZCYmZC5oZWlnaHQsYz1kJiZkLndpZHRoO3JldHVybiBpLmN0eD1zLGkuY2FudmFzPWQsaS5jb25maWc9YSxpLndpZHRoPWMsaS5oZWlnaHQ9dSxpLmFzcGVjdFJhdGlvPXU/Yy91Om51bGwsbC5pZD1yLnVpZCgpLGwuY2hhcnQ9aSxsLmNvbmZpZz1hLGwub3B0aW9ucz1hLm9wdGlvbnMsbC5fYnVmZmVyZWRSZW5kZXI9ITEsdC5pbnN0YW5jZXNbbC5pZF09bCxPYmplY3QuZGVmaW5lUHJvcGVydHkobCxcImRhdGFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGwuY29uZmlnLmRhdGF9fSkscyYmZD8oci5yZXRpbmFTY2FsZShpKSxsLm9wdGlvbnMucmVzcG9uc2l2ZSYmKHIuYWRkUmVzaXplTGlzdGVuZXIoZC5wYXJlbnROb2RlLGZ1bmN0aW9uKCl7bC5yZXNpemUoKX0pLGwucmVzaXplKCEwKSksbC5pbml0aWFsaXplKCksbCk6KGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNoYXJ0OiBjYW4ndCBhY3F1aXJlIGNvbnRleHQgZnJvbSB0aGUgZ2l2ZW4gaXRlbVwiKSxsKX0sci5leHRlbmQodC5Db250cm9sbGVyLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVJbml0XCIsW2VdKSxlLmJpbmRFdmVudHMoKSxlLmVuc3VyZVNjYWxlc0hhdmVJRHMoKSxlLmJ1aWxkT3JVcGRhdGVDb250cm9sbGVycygpLGUuYnVpbGRTY2FsZXMoKSxlLnVwZGF0ZUxheW91dCgpLGUucmVzZXRFbGVtZW50cygpLGUuaW5pdFRvb2xUaXAoKSxlLnVwZGF0ZSgpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckluaXRcIixbZV0pLGV9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xlYXIodGhpcy5jaGFydCksdGhpc30sc3RvcDpmdW5jdGlvbigpe3JldHVybiB0LmFuaW1hdGlvblNlcnZpY2UuY2FuY2VsQW5pbWF0aW9uKHRoaXMpLHRoaXN9LHJlc2l6ZTpmdW5jdGlvbihlKXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWEub3B0aW9ucyxvPWkuY2FudmFzLGw9bi5tYWludGFpbkFzcGVjdFJhdGlvJiZpLmFzcGVjdFJhdGlvfHxudWxsLHM9TWF0aC5mbG9vcihyLmdldE1heGltdW1XaWR0aChvKSksZD1NYXRoLmZsb29yKGw/cy9sOnIuZ2V0TWF4aW11bUhlaWdodChvKSk7aWYoaS53aWR0aCE9PXN8fGkuaGVpZ2h0IT09ZCl7by53aWR0aD1pLndpZHRoPXMsby5oZWlnaHQ9aS5oZWlnaHQ9ZCxvLnN0eWxlLndpZHRoPXMrXCJweFwiLG8uc3R5bGUuaGVpZ2h0PWQrXCJweFwiLHIucmV0aW5hU2NhbGUoaSk7dmFyIHU9e3dpZHRoOnMsaGVpZ2h0OmR9O3QucGx1Z2lucy5ub3RpZnkoXCJyZXNpemVcIixbYSx1XSksYS5vcHRpb25zLm9uUmVzaXplJiZhLm9wdGlvbnMub25SZXNpemUoYSx1KSxlfHwoYS5zdG9wKCksYS51cGRhdGUoYS5vcHRpb25zLnJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbikpfX0sZW5zdXJlU2NhbGVzSGF2ZUlEczpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucyxlPXQuc2NhbGVzfHx7fSxhPXQuc2NhbGU7ci5lYWNoKGUueEF4ZXMsZnVuY3Rpb24odCxlKXt0LmlkPXQuaWR8fFwieC1heGlzLVwiK2V9KSxyLmVhY2goZS55QXhlcyxmdW5jdGlvbih0LGUpe3QuaWQ9dC5pZHx8XCJ5LWF4aXMtXCIrZX0pLGEmJihhLmlkPWEuaWR8fFwic2NhbGVcIil9LGJ1aWxkU2NhbGVzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPWUub3B0aW9ucyxpPWUuc2NhbGVzPXt9LG49W107YS5zY2FsZXMmJihuPW4uY29uY2F0KChhLnNjYWxlcy54QXhlc3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57b3B0aW9uczp0LGR0eXBlOlwiY2F0ZWdvcnlcIn19KSwoYS5zY2FsZXMueUF4ZXN8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue29wdGlvbnM6dCxkdHlwZTpcImxpbmVhclwifX0pKSksYS5zY2FsZSYmbi5wdXNoKHtvcHRpb25zOmEuc2NhbGUsZHR5cGU6XCJyYWRpYWxMaW5lYXJcIixpc0RlZmF1bHQ6ITB9KSxyLmVhY2gobixmdW5jdGlvbihhKXt2YXIgbj1hLm9wdGlvbnMsbz1yLmdldFZhbHVlT3JEZWZhdWx0KG4udHlwZSxhLmR0eXBlKSxsPXQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlQ29uc3RydWN0b3Iobyk7aWYobCl7dmFyIHM9bmV3IGwoe2lkOm4uaWQsb3B0aW9uczpuLGN0eDplLmNoYXJ0LmN0eCxjaGFydDplfSk7aVtzLmlkXT1zLGEuaXNEZWZhdWx0JiYoZS5zY2FsZT1zKX19KSx0LnNjYWxlU2VydmljZS5hZGRTY2FsZXNUb0xheW91dCh0aGlzKX0sdXBkYXRlTGF5b3V0OmZ1bmN0aW9uKCl7dC5sYXlvdXRTZXJ2aWNlLnVwZGF0ZSh0aGlzLHRoaXMuY2hhcnQud2lkdGgsdGhpcy5jaGFydC5oZWlnaHQpfSxidWlsZE9yVXBkYXRlQ29udHJvbGxlcnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGE9W10saT1bXTtpZihyLmVhY2goZS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKG4sbyl7dmFyIHI9ZS5nZXREYXRhc2V0TWV0YShvKTtyLnR5cGV8fChyLnR5cGU9bi50eXBlfHxlLmNvbmZpZy50eXBlKSxhLnB1c2goci50eXBlKSxyLmNvbnRyb2xsZXI/ci5jb250cm9sbGVyLnVwZGF0ZUluZGV4KG8pOihyLmNvbnRyb2xsZXI9bmV3IHQuY29udHJvbGxlcnNbci50eXBlXShlLG8pLGkucHVzaChyLmNvbnRyb2xsZXIpKX0sZSksYS5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGEubGVuZ3RoO24rKylpZihhW25dIT09YVtuLTFdKXtlLmlzQ29tYm89ITA7YnJlYWt9cmV0dXJuIGl9LHJlc2V0RWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3IuZWFjaCh0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oZSxhKXt0LmdldERhdGFzZXRNZXRhKGEpLmNvbnRyb2xsZXIucmVzZXQoKX0sdCl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEVsZW1lbnRzKCksdGhpcy50b29sdGlwLmluaXRpYWxpemUoKX0sdXBkYXRlOmZ1bmN0aW9uKGUsYSl7dmFyIGk9dGhpczt0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlVXBkYXRlXCIsW2ldKSxpLnRvb2x0aXAuX2RhdGE9aS5kYXRhO3ZhciBuPWkuYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzKCk7ci5lYWNoKGkuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbih0LGUpe2kuZ2V0RGF0YXNldE1ldGEoZSkuY29udHJvbGxlci5idWlsZE9yVXBkYXRlRWxlbWVudHMoKX0saSksdC5sYXlvdXRTZXJ2aWNlLnVwZGF0ZShpLGkuY2hhcnQud2lkdGgsaS5jaGFydC5oZWlnaHQpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlclNjYWxlVXBkYXRlXCIsW2ldKSxyLmVhY2gobixmdW5jdGlvbih0KXt0LnJlc2V0KCl9KSxpLnVwZGF0ZURhdGFzZXRzKCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyVXBkYXRlXCIsW2ldKSxpLl9idWZmZXJlZFJlbmRlcj9pLl9idWZmZXJlZFJlcXVlc3Q9e2xhenk6YSxkdXJhdGlvbjplfTppLnJlbmRlcihlLGEpfSx1cGRhdGVEYXRhc2V0czpmdW5jdGlvbigpe3ZhciBlLGEsaT10aGlzO2lmKHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEYXRhc2V0c1VwZGF0ZVwiLFtpXSkpe2ZvcihlPTAsYT1pLmRhdGEuZGF0YXNldHMubGVuZ3RoO2E+ZTsrK2UpaS5nZXREYXRhc2V0TWV0YShlKS5jb250cm9sbGVyLnVwZGF0ZSgpO3QucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRhdGFzZXRzVXBkYXRlXCIsW2ldKX19LHJlbmRlcjpmdW5jdGlvbihlLGEpe3ZhciBpPXRoaXM7dC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZVJlbmRlclwiLFtpXSk7dmFyIG49aS5vcHRpb25zLmFuaW1hdGlvbjtpZihuJiYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJjAhPT1lfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmMCE9PW4uZHVyYXRpb24pKXt2YXIgbz1uZXcgdC5BbmltYXRpb247by5udW1TdGVwcz0oZXx8bi5kdXJhdGlvbikvMTYuNjYsby5lYXNpbmc9bi5lYXNpbmcsby5yZW5kZXI9ZnVuY3Rpb24odCxlKXt2YXIgYT1yLmVhc2luZ0VmZmVjdHNbZS5lYXNpbmddLGk9ZS5jdXJyZW50U3RlcC9lLm51bVN0ZXBzLG49YShpKTt0LmRyYXcobixpLGUuY3VycmVudFN0ZXApfSxvLm9uQW5pbWF0aW9uUHJvZ3Jlc3M9bi5vblByb2dyZXNzLG8ub25BbmltYXRpb25Db21wbGV0ZT1uLm9uQ29tcGxldGUsdC5hbmltYXRpb25TZXJ2aWNlLmFkZEFuaW1hdGlvbihpLG8sZSxhKX1lbHNlIGkuZHJhdygpLG4mJm4ub25Db21wbGV0ZSYmbi5vbkNvbXBsZXRlLmNhbGwmJm4ub25Db21wbGV0ZS5jYWxsKGkpO3JldHVybiBpfSxkcmF3OmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsaT1lfHwxO2EuY2xlYXIoKSx0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRHJhd1wiLFthLGldKSxyLmVhY2goYS5ib3hlcyxmdW5jdGlvbih0KXt0LmRyYXcoYS5jaGFydEFyZWEpfSxhKSxhLnNjYWxlJiZhLnNjYWxlLmRyYXcoKSx0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRGF0YXNldHNEcmF3XCIsW2EsaV0pLHIuZWFjaChhLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24odCxpKXthLmlzRGF0YXNldFZpc2libGUoaSkmJmEuZ2V0RGF0YXNldE1ldGEoaSkuY29udHJvbGxlci5kcmF3KGUpfSxhLCEwKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIixbYSxpXSksYS50b29sdGlwLnRyYW5zaXRpb24oaSkuZHJhdygpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRyYXdcIixbYSxpXSl9LGdldEVsZW1lbnRBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLnNpbmdsZSh0aGlzLGUpfSxnZXRFbGVtZW50c0F0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMubGFiZWwodGhpcyxlLHtpbnRlcnNlY3Q6ITB9KX0sZ2V0RWxlbWVudHNBdFhBeGlzOmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzW1wieC1heGlzXCJdKHRoaXMsZSx7aW50ZXJzZWN0OiEwfSl9LGdldEVsZW1lbnRzQXRFdmVudEZvck1vZGU6ZnVuY3Rpb24oZSxhLGkpe3ZhciBuPXQuSW50ZXJhY3Rpb24ubW9kZXNbYV07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHRoaXMsZSxpKTpbXX0sZ2V0RGF0YXNldEF0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMuZGF0YXNldCh0aGlzLGUpfSxnZXREYXRhc2V0TWV0YTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5kYXRhLmRhdGFzZXRzW3RdO2EuX21ldGF8fChhLl9tZXRhPXt9KTtcclxudmFyIGk9YS5fbWV0YVtlLmlkXTtyZXR1cm4gaXx8KGk9YS5fbWV0YVtlLmlkXT17dHlwZTpudWxsLGRhdGE6W10sZGF0YXNldDpudWxsLGNvbnRyb2xsZXI6bnVsbCxoaWRkZW46bnVsbCx4QXhpc0lEOm51bGwseUF4aXNJRDpudWxsfSksaX0sZ2V0VmlzaWJsZURhdGFzZXRDb3VudDpmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9MCxhPXRoaXMuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YT5lOysrZSl0aGlzLmlzRGF0YXNldFZpc2libGUoZSkmJnQrKztyZXR1cm4gdH0saXNEYXRhc2V0VmlzaWJsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldERhdGFzZXRNZXRhKHQpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZS5oaWRkZW4/IWUuaGlkZGVuOiF0aGlzLmRhdGEuZGF0YXNldHNbdF0uaGlkZGVufSxnZW5lcmF0ZUxlZ2VuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubGVnZW5kQ2FsbGJhY2sodGhpcyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZSxhLG4sbz10aGlzLGw9by5jaGFydC5jYW52YXM7Zm9yKG8uc3RvcCgpLGE9MCxuPW8uZGF0YS5kYXRhc2V0cy5sZW5ndGg7bj5hOysrYSllPW8uZ2V0RGF0YXNldE1ldGEoYSksZS5jb250cm9sbGVyJiYoZS5jb250cm9sbGVyLmRlc3Ryb3koKSxlLmNvbnRyb2xsZXI9bnVsbCk7bCYmKHIudW5iaW5kRXZlbnRzKG8sby5ldmVudHMpLHIucmVtb3ZlUmVzaXplTGlzdGVuZXIobC5wYXJlbnROb2RlKSxyLmNsZWFyKG8uY2hhcnQpLGkobCksby5jaGFydC5jYW52YXM9bnVsbCxvLmNoYXJ0LmN0eD1udWxsKSx0LnBsdWdpbnMubm90aWZ5KFwiZGVzdHJveVwiLFtvXSksZGVsZXRlIHQuaW5zdGFuY2VzW28uaWRdfSx0b0Jhc2U2NEltYWdlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuY2FudmFzLnRvRGF0YVVSTC5hcHBseSh0aGlzLmNoYXJ0LmNhbnZhcyxhcmd1bWVudHMpfSxpbml0VG9vbFRpcDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS50b29sdGlwPW5ldyB0LlRvb2x0aXAoe19jaGFydDplLmNoYXJ0LF9jaGFydEluc3RhbmNlOmUsX2RhdGE6ZS5kYXRhLF9vcHRpb25zOmUub3B0aW9ucy50b29sdGlwc30sZSksZS50b29sdGlwLmluaXRpYWxpemUoKX0sYmluZEV2ZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7ci5iaW5kRXZlbnRzKHQsdC5vcHRpb25zLmV2ZW50cyxmdW5jdGlvbihlKXt0LmV2ZW50SGFuZGxlcihlKX0pfSx1cGRhdGVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxuLG8scj1hP1wic2V0SG92ZXJTdHlsZVwiOlwicmVtb3ZlSG92ZXJTdHlsZVwiO2ZvcihuPTAsbz10Lmxlbmd0aDtvPm47KytuKWk9dFtuXSxpJiZ0aGlzLmdldERhdGFzZXRNZXRhKGkuX2RhdGFzZXRJbmRleCkuY29udHJvbGxlcltyXShpKX0sZXZlbnRIYW5kbGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmxlZ2VuZCxpPWUudG9vbHRpcCxuPWUub3B0aW9ucy5ob3ZlcjtlLl9idWZmZXJlZFJlbmRlcj0hMCxlLl9idWZmZXJlZFJlcXVlc3Q9bnVsbDt2YXIgbz1lLmhhbmRsZUV2ZW50KHQpO298PWEmJmEuaGFuZGxlRXZlbnQodCksb3w9aSYmaS5oYW5kbGVFdmVudCh0KTt2YXIgcj1lLl9idWZmZXJlZFJlcXVlc3Q7cmV0dXJuIHI/ZS5yZW5kZXIoci5kdXJhdGlvbixyLmxhenkpOm8mJiFlLmFuaW1hdGluZyYmKGUuc3RvcCgpLGUucmVuZGVyKG4uYW5pbWF0aW9uRHVyYXRpb24sITApKSxlLl9idWZmZXJlZFJlbmRlcj0hMSxlLl9idWZmZXJlZFJlcXVlc3Q9bnVsbCxlfSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5vcHRpb25zfHx7fSxpPWEuaG92ZXIsbj0hMTtyZXR1cm4gZS5sYXN0QWN0aXZlPWUubGFzdEFjdGl2ZXx8W10sXCJtb3VzZW91dFwiPT09dC50eXBlP2UuYWN0aXZlPVtdOmUuYWN0aXZlPWUuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSh0LGkubW9kZSxpKSxpLm9uSG92ZXImJmkub25Ib3Zlci5jYWxsKGUsZS5hY3RpdmUpLChcIm1vdXNldXBcIj09PXQudHlwZXx8XCJjbGlja1wiPT09dC50eXBlKSYmYS5vbkNsaWNrJiZhLm9uQ2xpY2suY2FsbChlLHQsZS5hY3RpdmUpLGUubGFzdEFjdGl2ZS5sZW5ndGgmJmUudXBkYXRlSG92ZXJTdHlsZShlLmxhc3RBY3RpdmUsaS5tb2RlLCExKSxlLmFjdGl2ZS5sZW5ndGgmJmkubW9kZSYmZS51cGRhdGVIb3ZlclN0eWxlKGUuYWN0aXZlLGkubW9kZSwhMCksbj0hci5hcnJheUVxdWFscyhlLmFjdGl2ZSxlLmxhc3RBY3RpdmUpLGUubGFzdEFjdGl2ZT1lLmFjdGl2ZSxufX0pfX0se31dLDI0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gdC5fY2hhcnRqcz92b2lkIHQuX2NoYXJ0anMubGlzdGVuZXJzLnB1c2goZSk6KE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX2NoYXJ0anNcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6e2xpc3RlbmVyczpbZV19fSksdm9pZCBuLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIGE9XCJvbkRhdGFcIitlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj10W2VdO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxvPW4uYXBwbHkodGhpcyxlKTtyZXR1cm4gaS5lYWNoKHQuX2NoYXJ0anMubGlzdGVuZXJzLGZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHRbYV0mJnRbYV0uYXBwbHkodCxlKX0pLG99fSl9KSl9ZnVuY3Rpb24gYSh0LGUpe3ZhciBhPXQuX2NoYXJ0anM7aWYoYSl7dmFyIGk9YS5saXN0ZW5lcnMsbz1pLmluZGV4T2YoZSk7LTEhPT1vJiZpLnNwbGljZShvLDEpLGkubGVuZ3RoPjB8fChuLmZvckVhY2goZnVuY3Rpb24oZSl7ZGVsZXRlIHRbZV19KSxkZWxldGUgdC5fY2hhcnRqcyl9fXZhciBpPXQuaGVscGVycyxuPVtcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInNwbGljZVwiLFwidW5zaGlmdFwiXTt0LkRhdGFzZXRDb250cm9sbGVyPWZ1bmN0aW9uKHQsZSl7dGhpcy5pbml0aWFsaXplKHQsZSl9LGkuZXh0ZW5kKHQuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLHtkYXRhc2V0RWxlbWVudFR5cGU6bnVsbCxkYXRhRWxlbWVudFR5cGU6bnVsbCxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpczthLmNoYXJ0PXQsYS5pbmRleD1lLGEubGlua1NjYWxlcygpLGEuYWRkRWxlbWVudHMoKX0sdXBkYXRlSW5kZXg6ZnVuY3Rpb24odCl7dGhpcy5pbmRleD10fSxsaW5rU2NhbGVzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TWV0YSgpLGE9dC5nZXREYXRhc2V0KCk7bnVsbD09PWUueEF4aXNJRCYmKGUueEF4aXNJRD1hLnhBeGlzSUR8fHQuY2hhcnQub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uaWQpLG51bGw9PT1lLnlBeGlzSUQmJihlLnlBeGlzSUQ9YS55QXhpc0lEfHx0LmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmlkKX0sZ2V0RGF0YXNldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdGhpcy5pbmRleF19LGdldE1ldGE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5nZXREYXRhc2V0TWV0YSh0aGlzLmluZGV4KX0sZ2V0U2NhbGVGb3JJZDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jaGFydC5zY2FsZXNbdF19LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy51cGRhdGUoITApfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fZGF0YSYmYSh0aGlzLl9kYXRhLHRoaXMpfSxjcmVhdGVNZXRhRGF0YXNldDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmRhdGFzZXRFbGVtZW50VHlwZTtyZXR1cm4gZSYmbmV3IGUoe19jaGFydDp0LmNoYXJ0LmNoYXJ0LF9kYXRhc2V0SW5kZXg6dC5pbmRleH0pfSxjcmVhdGVNZXRhRGF0YTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5kYXRhRWxlbWVudFR5cGU7cmV0dXJuIGEmJm5ldyBhKHtfY2hhcnQ6ZS5jaGFydC5jaGFydCxfZGF0YXNldEluZGV4OmUuaW5kZXgsX2luZGV4OnR9KX0sYWRkRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdCxlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXREYXRhc2V0KCkuZGF0YXx8W10sbz1pLmRhdGE7Zm9yKHQ9MCxlPW4ubGVuZ3RoO2U+dDsrK3Qpb1t0XT1vW3RdfHxhLmNyZWF0ZU1ldGFEYXRhKHQpO2kuZGF0YXNldD1pLmRhdGFzZXR8fGEuY3JlYXRlTWV0YURhdGFzZXQoKX0sYWRkRWxlbWVudEFuZFJlc2V0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY3JlYXRlTWV0YURhdGEodCk7dGhpcy5nZXRNZXRhKCkuZGF0YS5zcGxpY2UodCwwLGUpLHRoaXMudXBkYXRlRWxlbWVudChlLHQsITApfSxidWlsZE9yVXBkYXRlRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5nZXREYXRhc2V0KCksbj1pLmRhdGF8fChpLmRhdGE9W10pO3QuX2RhdGEhPT1uJiYodC5fZGF0YSYmYSh0Ll9kYXRhLHQpLGUobix0KSx0Ll9kYXRhPW4pLHQucmVzeW5jRWxlbWVudHMoKX0sdXBkYXRlOmkubm9vcCxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10fHwxLG49dGhpcy5nZXRNZXRhKCkuZGF0YTtmb3IoZT0wLGE9bi5sZW5ndGg7YT5lOysrZSluW2VdLnRyYW5zaXRpb24oaSkuZHJhdygpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sbj10Ll9pbmRleCxvPXQuY3VzdG9tfHx7fSxyPWkuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LGw9dC5fbW9kZWw7bC5iYWNrZ3JvdW5kQ29sb3I9by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6cihhLmJhY2tncm91bmRDb2xvcixuLGUuYmFja2dyb3VuZENvbG9yKSxsLmJvcmRlckNvbG9yPW8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjpyKGEuYm9yZGVyQ29sb3IsbixlLmJvcmRlckNvbG9yKSxsLmJvcmRlcldpZHRoPW8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDpyKGEuYm9yZGVyV2lkdGgsbixlLmJvcmRlcldpZHRoKX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxhPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89aS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQscj1pLmdldEhvdmVyQ29sb3IsbD10Ll9tb2RlbDtsLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yP24uaG92ZXJCYWNrZ3JvdW5kQ29sb3I6byhlLmhvdmVyQmFja2dyb3VuZENvbG9yLGEscihsLmJhY2tncm91bmRDb2xvcikpLGwuYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yP24uaG92ZXJCb3JkZXJDb2xvcjpvKGUuaG92ZXJCb3JkZXJDb2xvcixhLHIobC5ib3JkZXJDb2xvcikpLGwuYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRoP24uaG92ZXJCb3JkZXJXaWR0aDpvKGUuaG92ZXJCb3JkZXJXaWR0aCxhLGwuYm9yZGVyV2lkdGgpfSxyZXN5bmNFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldE1ldGEoKSxhPXQuZ2V0RGF0YXNldCgpLmRhdGEsaT1lLmRhdGEubGVuZ3RoLG49YS5sZW5ndGg7aT5uP2UuZGF0YS5zcGxpY2UobixpLW4pOm4+aSYmdC5pbnNlcnRFbGVtZW50cyhpLG4taSl9LGluc2VydEVsZW1lbnRzOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBhPTA7ZT5hOysrYSl0aGlzLmFkZEVsZW1lbnRBbmRSZXNldCh0K2EpfSxvbkRhdGFQdXNoOmZ1bmN0aW9uKCl7dGhpcy5pbnNlcnRFbGVtZW50cyh0aGlzLmdldERhdGFzZXQoKS5kYXRhLmxlbmd0aC0xLGFyZ3VtZW50cy5sZW5ndGgpfSxvbkRhdGFQb3A6ZnVuY3Rpb24oKXt0aGlzLmdldE1ldGEoKS5kYXRhLnBvcCgpfSxvbkRhdGFTaGlmdDpmdW5jdGlvbigpe3RoaXMuZ2V0TWV0YSgpLmRhdGEuc2hpZnQoKX0sb25EYXRhU3BsaWNlOmZ1bmN0aW9uKHQsZSl7dGhpcy5nZXRNZXRhKCkuZGF0YS5zcGxpY2UodCxlKSx0aGlzLmluc2VydEVsZW1lbnRzKHQsYXJndW1lbnRzLmxlbmd0aC0yKX0sb25EYXRhVW5zaGlmdDpmdW5jdGlvbigpe3RoaXMuaW5zZXJ0RWxlbWVudHMoMCxhcmd1bWVudHMubGVuZ3RoKX19KSx0LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZD1pLmluaGVyaXRzfX0se31dLDI1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmVsZW1lbnRzPXt9LHQuRWxlbWVudD1mdW5jdGlvbih0KXtlLmV4dGVuZCh0aGlzLHQpLHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZXh0ZW5kKHQuRWxlbWVudC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmhpZGRlbj0hMX0scGl2b3Q6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0Ll92aWV3fHwodC5fdmlldz1lLmNsb25lKHQuX21vZGVsKSksdC5fc3RhcnQ9ZS5jbG9uZSh0Ll92aWV3KSx0fSx0cmFuc2l0aW9uOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXM7cmV0dXJuIGEuX3ZpZXd8fChhLl92aWV3PWUuY2xvbmUoYS5fbW9kZWwpKSwxPT09dD8oYS5fdmlldz1hLl9tb2RlbCxhLl9zdGFydD1udWxsLGEpOihhLl9zdGFydHx8YS5waXZvdCgpLGUuZWFjaChhLl9tb2RlbCxmdW5jdGlvbihpLG4pe2lmKFwiX1wiPT09blswXSk7ZWxzZSBpZihhLl92aWV3Lmhhc093blByb3BlcnR5KG4pKWlmKGk9PT1hLl92aWV3W25dKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXRyeXt2YXIgbz1lLmNvbG9yKGEuX21vZGVsW25dKS5taXgoZS5jb2xvcihhLl9zdGFydFtuXSksdCk7YS5fdmlld1tuXT1vLnJnYlN0cmluZygpfWNhdGNoKHIpe2EuX3ZpZXdbbl09aX1lbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiBpKXt2YXIgbD12b2lkIDAhPT1hLl9zdGFydFtuXSYmaXNOYU4oYS5fc3RhcnRbbl0pPT09ITE/YS5fc3RhcnRbbl06MDthLl92aWV3W25dPShhLl9tb2RlbFtuXS1sKSp0K2x9ZWxzZSBhLl92aWV3W25dPWk7ZWxzZVwibnVtYmVyXCIhPXR5cGVvZiBpfHxpc05hTihhLl92aWV3W25dKT9hLl92aWV3W25dPWk6YS5fdmlld1tuXT1pKnR9LGEpLGEpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLl9tb2RlbC54LHk6dGhpcy5fbW9kZWwueX19LGhhc1ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGUuaXNOdW1iZXIodGhpcy5fbW9kZWwueCkmJmUuaXNOdW1iZXIodGhpcy5fbW9kZWwueSl9fSksdC5FbGVtZW50LmV4dGVuZD1lLmluaGVyaXRzfX0se31dLDI2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dCgzKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUsYSl7dmFyIGk7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/KGk9cGFyc2VJbnQodCwxMCksLTEhPT10LmluZGV4T2YoXCIlXCIpJiYoaT1pLzEwMCplLnBhcmVudE5vZGVbYV0pKTppPXQsaX1mdW5jdGlvbiBhKHQpe3JldHVybiB2b2lkIDAhPT10JiZudWxsIT09dCYmXCJub25lXCIhPT10fWZ1bmN0aW9uIG4odCxpLG4pe3ZhciBvPWRvY3VtZW50LmRlZmF1bHRWaWV3LHI9dC5wYXJlbnROb2RlLGw9by5nZXRDb21wdXRlZFN0eWxlKHQpW2ldLHM9by5nZXRDb21wdXRlZFN0eWxlKHIpW2ldLGQ9YShsKSx1PWEocyksYz1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7cmV0dXJuIGR8fHU/TWF0aC5taW4oZD9lKGwsdCxuKTpjLHU/ZShzLHIsbik6Yyk6XCJub25lXCJ9dmFyIG89dC5oZWxwZXJzPXt9O28uZWFjaD1mdW5jdGlvbih0LGUsYSxpKXt2YXIgbixyO2lmKG8uaXNBcnJheSh0KSlpZihyPXQubGVuZ3RoLGkpZm9yKG49ci0xO24+PTA7bi0tKWUuY2FsbChhLHRbbl0sbik7ZWxzZSBmb3Iobj0wO3I+bjtuKyspZS5jYWxsKGEsdFtuXSxuKTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgbD1PYmplY3Qua2V5cyh0KTtmb3Iocj1sLmxlbmd0aCxuPTA7cj5uO24rKyllLmNhbGwoYSx0W2xbbl1dLGxbbl0pfX0sby5jbG9uZT1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCxhKXtvLmlzQXJyYXkodCk/ZVthXT10LnNsaWNlKDApOlwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dD9lW2FdPW8uY2xvbmUodCk6ZVthXT10fSksZX0sby5leHRlbmQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWZ1bmN0aW9uKGUsYSl7dFthXT1lfSxhPTEsaT1hcmd1bWVudHMubGVuZ3RoO2k+YTthKyspby5lYWNoKGFyZ3VtZW50c1thXSxlKTtyZXR1cm4gdH0sby5jb25maWdNZXJnZT1mdW5jdGlvbihlKXt2YXIgYT1vLmNsb25lKGUpO3JldHVybiBvLmVhY2goQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGZ1bmN0aW9uKGUpe28uZWFjaChlLGZ1bmN0aW9uKGUsaSl7dmFyIG49YS5oYXNPd25Qcm9wZXJ0eShpKSxyPW4/YVtpXTp7fTtcInNjYWxlc1wiPT09aT9hW2ldPW8uc2NhbGVNZXJnZShyLGUpOlwic2NhbGVcIj09PWk/YVtpXT1vLmNvbmZpZ01lcmdlKHIsdC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhlLnR5cGUpLGUpOiFufHxcIm9iamVjdFwiIT10eXBlb2Ygcnx8by5pc0FycmF5KHIpfHxudWxsPT09cnx8XCJvYmplY3RcIiE9dHlwZW9mIGV8fG8uaXNBcnJheShlKT9hW2ldPWU6YVtpXT1vLmNvbmZpZ01lcmdlKHIsZSl9KX0pLGF9LG8uc2NhbGVNZXJnZT1mdW5jdGlvbihlLGEpe3ZhciBpPW8uY2xvbmUoZSk7cmV0dXJuIG8uZWFjaChhLGZ1bmN0aW9uKGUsYSl7XCJ4QXhlc1wiPT09YXx8XCJ5QXhlc1wiPT09YT9pLmhhc093blByb3BlcnR5KGEpP28uZWFjaChlLGZ1bmN0aW9uKGUsbil7dmFyIHI9by5nZXRWYWx1ZU9yRGVmYXVsdChlLnR5cGUsXCJ4QXhlc1wiPT09YT9cImNhdGVnb3J5XCI6XCJsaW5lYXJcIiksbD10LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKHIpO24+PWlbYV0ubGVuZ3RofHwhaVthXVtuXS50eXBlP2lbYV0ucHVzaChvLmNvbmZpZ01lcmdlKGwsZSkpOmUudHlwZSYmZS50eXBlIT09aVthXVtuXS50eXBlP2lbYV1bbl09by5jb25maWdNZXJnZShpW2FdW25dLGwsZSk6aVthXVtuXT1vLmNvbmZpZ01lcmdlKGlbYV1bbl0sZSl9KTooaVthXT1bXSxvLmVhY2goZSxmdW5jdGlvbihlKXt2YXIgbj1vLmdldFZhbHVlT3JEZWZhdWx0KGUudHlwZSxcInhBeGVzXCI9PT1hP1wiY2F0ZWdvcnlcIjpcImxpbmVhclwiKTtpW2FdLnB1c2goby5jb25maWdNZXJnZSh0LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKG4pLGUpKX0pKTppLmhhc093blByb3BlcnR5KGEpJiZcIm9iamVjdFwiPT10eXBlb2YgaVthXSYmbnVsbCE9PWlbYV0mJlwib2JqZWN0XCI9PXR5cGVvZiBlP2lbYV09by5jb25maWdNZXJnZShpW2FdLGUpOmlbYV09ZX0pLGl9LG8uZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0PWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gdm9pZCAwPT09dHx8bnVsbD09PXQ/YTpvLmlzQXJyYXkodCk/ZTx0Lmxlbmd0aD90W2VdOmE6dH0sby5nZXRWYWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT10P2U6dH0sby5pbmRleE9mPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaW5kZXhPZihlKX06ZnVuY3Rpb24odCxlKXtmb3IodmFyIGE9MCxpPXQubGVuZ3RoO2k+YTsrK2EpaWYodFthXT09PWUpcmV0dXJuIGE7cmV0dXJuLTF9LG8ud2hlcmU9ZnVuY3Rpb24odCxlKXtpZihvLmlzQXJyYXkodCkmJkFycmF5LnByb3RvdHlwZS5maWx0ZXIpcmV0dXJuIHQuZmlsdGVyKGUpO3ZhciBhPVtdO3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0KXtlKHQpJiZhLnB1c2godCl9KSxhfSxvLmZpbmRJbmRleD1BcnJheS5wcm90b3R5cGUuZmluZEluZGV4P2Z1bmN0aW9uKHQsZSxhKXtyZXR1cm4gdC5maW5kSW5kZXgoZSxhKX06ZnVuY3Rpb24odCxlLGEpe2E9dm9pZCAwPT09YT90OmE7Zm9yKHZhciBpPTAsbj10Lmxlbmd0aDtuPmk7KytpKWlmKGUuY2FsbChhLHRbaV0saSx0KSlyZXR1cm4gaTtyZXR1cm4tMX0sby5maW5kTmV4dFdoZXJlPWZ1bmN0aW9uKHQsZSxhKXsodm9pZCAwPT09YXx8bnVsbD09PWEpJiYoYT0tMSk7Zm9yKHZhciBpPWErMTtpPHQubGVuZ3RoO2krKyl7dmFyIG49dFtpXTtpZihlKG4pKXJldHVybiBufX0sby5maW5kUHJldmlvdXNXaGVyZT1mdW5jdGlvbih0LGUsYSl7KHZvaWQgMD09PWF8fG51bGw9PT1hKSYmKGE9dC5sZW5ndGgpO2Zvcih2YXIgaT1hLTE7aT49MDtpLS0pe3ZhciBuPXRbaV07aWYoZShuKSlyZXR1cm4gbn19LG8uaW5oZXJpdHM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPXQmJnQuaGFzT3duUHJvcGVydHkoXCJjb25zdHJ1Y3RvclwiKT90LmNvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpPWZ1bmN0aW9uKCl7dGhpcy5jb25zdHJ1Y3Rvcj1hfTtyZXR1cm4gaS5wcm90b3R5cGU9ZS5wcm90b3R5cGUsYS5wcm90b3R5cGU9bmV3IGksYS5leHRlbmQ9by5pbmhlcml0cyx0JiZvLmV4dGVuZChhLnByb3RvdHlwZSx0KSxhLl9fc3VwZXJfXz1lLnByb3RvdHlwZSxhfSxvLm5vb3A9ZnVuY3Rpb24oKXt9LG8udWlkPWZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCsrfX0oKSxvLmlzTnVtYmVyPWZ1bmN0aW9uKHQpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KHQpKSYmaXNGaW5pdGUodCl9LG8uYWxtb3N0RXF1YWxzPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gTWF0aC5hYnModC1lKTxhfSxvLm1heD1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gaXNOYU4oZSk/dDpNYXRoLm1heCh0LGUpfSxOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpfSxvLm1pbj1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gaXNOYU4oZSk/dDpNYXRoLm1pbih0LGUpfSxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpfSxvLnNpZ249TWF0aC5zaWduP2Z1bmN0aW9uKHQpe3JldHVybiBNYXRoLnNpZ24odCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0PSt0LDA9PT10fHxpc05hTih0KT90OnQ+MD8xOi0xfSxvLmxvZzEwPU1hdGgubG9nMTA/ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgubG9nMTAodCl9OmZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmxvZyh0KS9NYXRoLkxOMTB9LG8udG9SYWRpYW5zPWZ1bmN0aW9uKHQpe3JldHVybiB0KihNYXRoLlBJLzE4MCl9LG8udG9EZWdyZWVzPWZ1bmN0aW9uKHQpe3JldHVybiB0KigxODAvTWF0aC5QSSl9LG8uZ2V0QW5nbGVGcm9tUG9pbnQ9ZnVuY3Rpb24odCxlKXt2YXIgYT1lLngtdC54LGk9ZS55LXQueSxuPU1hdGguc3FydChhKmEraSppKSxvPU1hdGguYXRhbjIoaSxhKTtyZXR1cm4gbzwtLjUqTWF0aC5QSSYmKG8rPTIqTWF0aC5QSSkse2FuZ2xlOm8sZGlzdGFuY2U6bn19LG8uZGlzdGFuY2VCZXR3ZWVuUG9pbnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhlLngtdC54LDIpK01hdGgucG93KGUueS10LnksMikpfSxvLmFsaWFzUGl4ZWw9ZnVuY3Rpb24odCl7cmV0dXJuIHQlMj09PTA/MDouNX0sby5zcGxpbmVDdXJ2ZT1mdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10LnNraXA/ZTp0LG89ZSxyPWEuc2tpcD9lOmEsbD1NYXRoLnNxcnQoTWF0aC5wb3coby54LW4ueCwyKStNYXRoLnBvdyhvLnktbi55LDIpKSxzPU1hdGguc3FydChNYXRoLnBvdyhyLngtby54LDIpK01hdGgucG93KHIueS1vLnksMikpLGQ9bC8obCtzKSx1PXMvKGwrcyk7ZD1pc05hTihkKT8wOmQsdT1pc05hTih1KT8wOnU7dmFyIGM9aSpkLGg9aSp1O3JldHVybntwcmV2aW91czp7eDpvLngtYyooci54LW4ueCkseTpvLnktYyooci55LW4ueSl9LG5leHQ6e3g6by54K2gqKHIueC1uLngpLHk6by55K2gqKHIueS1uLnkpfX19LG8uRVBTSUxPTj1OdW1iZXIuRVBTSUxPTnx8MWUtMTQsby5zcGxpbmVDdXJ2ZU1vbm90b25lPWZ1bmN0aW9uKHQpe3ZhciBlLGEsaSxuLHI9KHR8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue21vZGVsOnQuX21vZGVsLGRlbHRhSzowLG1LOjB9fSksbD1yLmxlbmd0aDtmb3IoZT0wO2w+ZTsrK2UpaT1yW2VdLGkubW9kZWwuc2tpcHx8KGE9ZT4wP3JbZS0xXTpudWxsLG49bC0xPmU/cltlKzFdOm51bGwsbiYmIW4ubW9kZWwuc2tpcCYmKGkuZGVsdGFLPShuLm1vZGVsLnktaS5tb2RlbC55KS8obi5tb2RlbC54LWkubW9kZWwueCkpLCFhfHxhLm1vZGVsLnNraXA/aS5tSz1pLmRlbHRhSzohbnx8bi5tb2RlbC5za2lwP2kubUs9YS5kZWx0YUs6dGhpcy5zaWduKGEuZGVsdGFLKSE9PXRoaXMuc2lnbihpLmRlbHRhSyk/aS5tSz0wOmkubUs9KGEuZGVsdGFLK2kuZGVsdGFLKS8yKTt2YXIgcyxkLHUsYztmb3IoZT0wO2wtMT5lOysrZSlpPXJbZV0sbj1yW2UrMV0saS5tb2RlbC5za2lwfHxuLm1vZGVsLnNraXB8fChvLmFsbW9zdEVxdWFscyhpLmRlbHRhSywwLHRoaXMuRVBTSUxPTik/aS5tSz1uLm1LPTA6KHM9aS5tSy9pLmRlbHRhSyxkPW4ubUsvaS5kZWx0YUssYz1NYXRoLnBvdyhzLDIpK01hdGgucG93KGQsMiksOT49Y3x8KHU9My9NYXRoLnNxcnQoYyksaS5tSz1zKnUqaS5kZWx0YUssbi5tSz1kKnUqaS5kZWx0YUspKSk7dmFyIGg7Zm9yKGU9MDtsPmU7KytlKWk9cltlXSxpLm1vZGVsLnNraXB8fChhPWU+MD9yW2UtMV06bnVsbCxuPWwtMT5lP3JbZSsxXTpudWxsLGEmJiFhLm1vZGVsLnNraXAmJihoPShpLm1vZGVsLngtYS5tb2RlbC54KS8zLGkubW9kZWwuY29udHJvbFBvaW50UHJldmlvdXNYPWkubW9kZWwueC1oLGkubW9kZWwuY29udHJvbFBvaW50UHJldmlvdXNZPWkubW9kZWwueS1oKmkubUspLG4mJiFuLm1vZGVsLnNraXAmJihoPShuLm1vZGVsLngtaS5tb2RlbC54KS8zLGkubW9kZWwuY29udHJvbFBvaW50TmV4dFg9aS5tb2RlbC54K2gsaS5tb2RlbC5jb250cm9sUG9pbnROZXh0WT1pLm1vZGVsLnkraCppLm1LKSl9LG8ubmV4dEl0ZW09ZnVuY3Rpb24odCxlLGEpe3JldHVybiBhP2U+PXQubGVuZ3RoLTE/dFswXTp0W2UrMV06ZT49dC5sZW5ndGgtMT90W3QubGVuZ3RoLTFdOnRbZSsxXX0sby5wcmV2aW91c0l0ZW09ZnVuY3Rpb24odCxlLGEpe3JldHVybiBhPzA+PWU/dFt0Lmxlbmd0aC0xXTp0W2UtMV06MD49ZT90WzBdOnRbZS0xXX0sby5uaWNlTnVtPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaT1NYXRoLmZsb29yKG8ubG9nMTAodCkpLG49dC9NYXRoLnBvdygxMCxpKTtyZXR1cm4gYT1lPzEuNT5uPzE6Mz5uPzI6Nz5uPzU6MTA6MT49bj8xOjI+PW4/Mjo1Pj1uPzU6MTAsYSpNYXRoLnBvdygxMCxpKX07dmFyIHI9by5lYXNpbmdFZmZlY3RzPXtsaW5lYXI6ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGVhc2VJblF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdH0sZWFzZU91dFF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuLTEqdCoodC0yKX0sZWFzZUluT3V0UXVhZDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0Oi0wLjUqKC0tdCoodC0yKS0xKX0sZWFzZUluQ3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdCp0fSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KnQrMSl9LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdDouNSooKHQtPTIpKnQqdCsyKX0sZWFzZUluUXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdCp0KnR9LGVhc2VPdXRRdWFydDpmdW5jdGlvbih0KXtyZXR1cm4tMSooKHQ9dC8xLTEpKnQqdCp0LTEpfSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQqdDotMC41KigodC09MikqdCp0KnQtMil9LGVhc2VJblF1aW50OmZ1bmN0aW9uKHQpe3JldHVybiAxKih0Lz0xKSp0KnQqdCp0fSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KnQqdCp0KzEpfSxlYXNlSW5PdXRRdWludDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQqdCp0Oi41KigodC09MikqdCp0KnQqdCsyKX0sZWFzZUluU2luZTpmdW5jdGlvbih0KXtyZXR1cm4tMSpNYXRoLmNvcyh0LzEqKE1hdGguUEkvMikpKzF9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKHQpe3JldHVybiAxKk1hdGguc2luKHQvMSooTWF0aC5QSS8yKSl9LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuLTAuNSooTWF0aC5jb3MoTWF0aC5QSSp0LzEpLTEpfSxlYXNlSW5FeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAwPT09dD8xOjEqTWF0aC5wb3coMiwxMCoodC8xLTEpKX0sZWFzZU91dEV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDE9PT10PzE6MSooLU1hdGgucG93KDIsLTEwKnQvMSkrMSl9LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDA9PT10PzA6MT09PXQ/MToodC89LjUpPDE/LjUqTWF0aC5wb3coMiwxMCoodC0xKSk6LjUqKC1NYXRoLnBvdygyLC0xMCotLXQpKzIpfSxlYXNlSW5DaXJjOmZ1bmN0aW9uKHQpe3JldHVybiB0Pj0xP3Q6LTEqKE1hdGguc3FydCgxLSh0Lz0xKSp0KS0xKX0sZWFzZU91dENpcmM6ZnVuY3Rpb24odCl7cmV0dXJuIDEqTWF0aC5zcXJ0KDEtKHQ9dC8xLTEpKnQpfSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8tMC41KihNYXRoLnNxcnQoMS10KnQpLTEpOi41KihNYXRoLnNxcnQoMS0odC09MikqdCkrMSl9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjE9PT0odC89MSk/MTooYXx8KGE9LjMpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLC0oaSpNYXRoLnBvdygyLDEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSkpfSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6MT09PSh0Lz0xKT8xOihhfHwoYT0uMyksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksaSpNYXRoLnBvdygyLC0xMCp0KSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKzEpfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoyPT09KHQvPS41KT8xOihhfHwoYT0xKiguMyoxLjUpKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSwxPnQ/LS41KihpKk1hdGgucG93KDIsMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKTppKk1hdGgucG93KDIsLTEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSouNSsxKX0sZWFzZUluQmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybiAxKih0Lz0xKSp0KigoZSsxKSp0LWUpfSxlYXNlT3V0QmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybiAxKigodD10LzEtMSkqdCooKGUrMSkqdCtlKSsxKX0sZWFzZUluT3V0QmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybih0Lz0uNSk8MT8uNSoodCp0KigoKGUqPTEuNTI1KSsxKSp0LWUpKTouNSooKHQtPTIpKnQqKCgoZSo9MS41MjUpKzEpKnQrZSkrMil9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4gMS1yLmVhc2VPdXRCb3VuY2UoMS10KX0sZWFzZU91dEJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4odC89MSk8MS8yLjc1PzEqKDcuNTYyNSp0KnQpOjIvMi43NT50PzEqKDcuNTYyNSoodC09MS41LzIuNzUpKnQrLjc1KToyLjUvMi43NT50PzEqKDcuNTYyNSoodC09Mi4yNS8yLjc1KSp0Ky45Mzc1KToxKig3LjU2MjUqKHQtPTIuNjI1LzIuNzUpKnQrLjk4NDM3NSl9LGVhc2VJbk91dEJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4uNT50Py41KnIuZWFzZUluQm91bmNlKDIqdCk6LjUqci5lYXNlT3V0Qm91bmNlKDIqdC0xKSsuNX19O28ucmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQodCwxZTMvNjApfX0oKSxvLmNhbmNlbEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7cmV0dXJuIHdpbmRvdy5jbGVhclRpbWVvdXQodCwxZTMvNjApfX0oKSxvLmdldFJlbGF0aXZlUG9zaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG49dC5vcmlnaW5hbEV2ZW50fHx0LHI9dC5jdXJyZW50VGFyZ2V0fHx0LnNyY0VsZW1lbnQsbD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHM9bi50b3VjaGVzO3MmJnMubGVuZ3RoPjA/KGE9c1swXS5jbGllbnRYLGk9c1swXS5jbGllbnRZKTooYT1uLmNsaWVudFgsaT1uLmNsaWVudFkpO3ZhciBkPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1sZWZ0XCIpKSx1PXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy10b3BcIikpLGM9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLXJpZ2h0XCIpKSxoPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1ib3R0b21cIikpLGY9bC5yaWdodC1sLmxlZnQtZC1jLGc9bC5ib3R0b20tbC50b3AtdS1oO3JldHVybiBhPU1hdGgucm91bmQoKGEtbC5sZWZ0LWQpL2Yqci53aWR0aC9lLmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvKSxpPU1hdGgucm91bmQoKGktbC50b3AtdSkvZypyLmhlaWdodC9lLmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvKSx7eDphLHk6aX19LG8uYWRkRXZlbnQ9ZnVuY3Rpb24odCxlLGEpe3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoZSxhKTp0LmF0dGFjaEV2ZW50P3QuYXR0YWNoRXZlbnQoXCJvblwiK2UsYSk6dFtcIm9uXCIrZV09YX0sby5yZW1vdmVFdmVudD1mdW5jdGlvbih0LGUsYSl7dC5yZW1vdmVFdmVudExpc3RlbmVyP3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLGEsITEpOnQuZGV0YWNoRXZlbnQ/dC5kZXRhY2hFdmVudChcIm9uXCIrZSxhKTp0W1wib25cIitlXT1vLm5vb3B9LG8uYmluZEV2ZW50cz1mdW5jdGlvbih0LGUsYSl7dmFyIGk9dC5ldmVudHM9dC5ldmVudHN8fHt9O28uZWFjaChlLGZ1bmN0aW9uKGUpe2lbZV09ZnVuY3Rpb24oKXthLmFwcGx5KHQsYXJndW1lbnRzKX0sby5hZGRFdmVudCh0LmNoYXJ0LmNhbnZhcyxlLGlbZV0pfSl9LG8udW5iaW5kRXZlbnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGE9dC5jaGFydC5jYW52YXM7by5lYWNoKGUsZnVuY3Rpb24odCxlKXtvLnJlbW92ZUV2ZW50KGEsZSx0KX0pfSxvLmdldENvbnN0cmFpbnRXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gbih0LFwibWF4LXdpZHRoXCIsXCJjbGllbnRXaWR0aFwiKX0sby5nZXRDb25zdHJhaW50SGVpZ2h0PWZ1bmN0aW9uKHQpe3JldHVybiBuKHQsXCJtYXgtaGVpZ2h0XCIsXCJjbGllbnRIZWlnaHRcIil9LG8uZ2V0TWF4aW11bVdpZHRoPWZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZSxhPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctbGVmdFwiKSwxMCksaT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLXJpZ2h0XCIpLDEwKSxuPWUuY2xpZW50V2lkdGgtYS1pLHI9by5nZXRDb25zdHJhaW50V2lkdGgodCk7cmV0dXJuIGlzTmFOKHIpP246TWF0aC5taW4obixyKX0sby5nZXRNYXhpbXVtSGVpZ2h0PWZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZSxhPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctdG9wXCIpLDEwKSxpPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctYm90dG9tXCIpLDEwKSxuPWUuY2xpZW50SGVpZ2h0LWEtaSxyPW8uZ2V0Q29uc3RyYWludEhlaWdodCh0KTtyZXR1cm4gaXNOYU4ocik/bjpNYXRoLm1pbihuLHIpfSxvLmdldFN0eWxlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY3VycmVudFN0eWxlP3QuY3VycmVudFN0eWxlW2VdOmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGUpfSxvLnJldGluYVNjYWxlPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY3VycmVudERldmljZVBpeGVsUmF0aW89d2luZG93LmRldmljZVBpeGVsUmF0aW98fDE7aWYoMSE9PWUpe3ZhciBhPXQuY2FudmFzLGk9dC5oZWlnaHQsbj10LndpZHRoO2EuaGVpZ2h0PWkqZSxhLndpZHRoPW4qZSx0LmN0eC5zY2FsZShlLGUpLGEuc3R5bGUuaGVpZ2h0PWkrXCJweFwiLGEuc3R5bGUud2lkdGg9bitcInB4XCJ9fSxvLmNsZWFyPWZ1bmN0aW9uKHQpe3QuY3R4LmNsZWFyUmVjdCgwLDAsdC53aWR0aCx0LmhlaWdodCl9LG8uZm9udFN0cmluZz1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGUrXCIgXCIrdCtcInB4IFwiK2F9LG8ubG9uZ2VzdFRleHQ9ZnVuY3Rpb24odCxlLGEsaSl7aT1pfHx7fTt2YXIgbj1pLmRhdGE9aS5kYXRhfHx7fSxyPWkuZ2FyYmFnZUNvbGxlY3Q9aS5nYXJiYWdlQ29sbGVjdHx8W107aS5mb250IT09ZSYmKG49aS5kYXRhPXt9LHI9aS5nYXJiYWdlQ29sbGVjdD1bXSxpLmZvbnQ9ZSksdC5mb250PWU7dmFyIGw9MDtvLmVhY2goYSxmdW5jdGlvbihlKXt2b2lkIDAhPT1lJiZudWxsIT09ZSYmby5pc0FycmF5KGUpIT09ITA/bD1vLm1lYXN1cmVUZXh0KHQsbixyLGwsZSk6by5pc0FycmF5KGUpJiZvLmVhY2goZSxmdW5jdGlvbihlKXt2b2lkIDA9PT1lfHxudWxsPT09ZXx8by5pc0FycmF5KGUpfHwobD1vLm1lYXN1cmVUZXh0KHQsbixyLGwsZSkpfSl9KTt2YXIgcz1yLmxlbmd0aC8yO2lmKHM+YS5sZW5ndGgpe2Zvcih2YXIgZD0wO3M+ZDtkKyspZGVsZXRlIG5bcltkXV07ci5zcGxpY2UoMCxzKX1yZXR1cm4gbH0sby5tZWFzdXJlVGV4dD1mdW5jdGlvbih0LGUsYSxpLG4pe3ZhciBvPWVbbl07cmV0dXJuIG98fChvPWVbbl09dC5tZWFzdXJlVGV4dChuKS53aWR0aCxhLnB1c2gobikpLG8+aSYmKGk9byksaX0sby5udW1iZXJPZkxhYmVsTGluZXM9ZnVuY3Rpb24odCl7dmFyIGU9MTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCl7by5pc0FycmF5KHQpJiZ0Lmxlbmd0aD5lJiYoZT10Lmxlbmd0aCl9KSxlfSxvLmRyYXdSb3VuZGVkUmVjdGFuZ2xlPWZ1bmN0aW9uKHQsZSxhLGksbixvKXt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrbyxhKSx0LmxpbmVUbyhlK2ktbyxhKSx0LnF1YWRyYXRpY0N1cnZlVG8oZStpLGEsZStpLGErbyksdC5saW5lVG8oZStpLGErbi1vKSx0LnF1YWRyYXRpY0N1cnZlVG8oZStpLGErbixlK2ktbyxhK24pLHQubGluZVRvKGUrbyxhK24pLHQucXVhZHJhdGljQ3VydmVUbyhlLGErbixlLGErbi1vKSx0LmxpbmVUbyhlLGErbyksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUsYSxlK28sYSksdC5jbG9zZVBhdGgoKX0sby5jb2xvcj1mdW5jdGlvbihlKXtyZXR1cm4gaT9pKGUgaW5zdGFuY2VvZiBDYW52YXNHcmFkaWVudD90LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Q29sb3I6ZSk6KGNvbnNvbGUuZXJyb3IoXCJDb2xvci5qcyBub3QgZm91bmQhXCIpLGUpfSxvLmFkZFJlc2l6ZUxpc3RlbmVyPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTthLmNsYXNzTmFtZT1cImNoYXJ0anMtaGlkZGVuLWlmcmFtZVwiLGEuc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjowO21hcmdpbjowO3RvcDowO2xlZnQ6MDtib3R0b206MDtyaWdodDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xO1wiLGEudGFiSW5kZXg9LTE7dmFyIGk9dC5fY2hhcnRqcz17cmVzaXplcjphLHRpY2tpbmc6ITF9LG49ZnVuY3Rpb24oKXtpLnRpY2tpbmd8fChpLnRpY2tpbmc9ITAsby5yZXF1ZXN0QW5pbUZyYW1lLmNhbGwod2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuIGkucmVzaXplcj8oaS50aWNraW5nPSExLGUoKSk6dm9pZCAwfSkpfTtvLmFkZEV2ZW50KGEsXCJsb2FkXCIsZnVuY3Rpb24oKXtvLmFkZEV2ZW50KGEuY29udGVudFdpbmRvd3x8YSxcInJlc2l6ZVwiLG4pLG4oKX0pLHQuaW5zZXJ0QmVmb3JlKGEsdC5maXJzdENoaWxkKX0sby5yZW1vdmVSZXNpemVMaXN0ZW5lcj1mdW5jdGlvbih0KXtpZih0JiZ0Ll9jaGFydGpzKXt2YXIgZT10Ll9jaGFydGpzLnJlc2l6ZXI7ZSYmKGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSx0Ll9jaGFydGpzLnJlc2l6ZXI9bnVsbCksZGVsZXRlIHQuX2NoYXJ0anN9fSxvLmlzQXJyYXk9QXJyYXkuaXNBcnJheT9mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KX06ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfSxvLmFycmF5RXF1YWxzPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLHI7aWYoIXR8fCFlfHx0Lmxlbmd0aCE9PWUubGVuZ3RoKXJldHVybiExO2ZvcihhPTAsaT10Lmxlbmd0aDtpPmE7KythKWlmKG49dFthXSxyPWVbYV0sbiBpbnN0YW5jZW9mIEFycmF5JiZyIGluc3RhbmNlb2YgQXJyYXkpe2lmKCFvLmFycmF5RXF1YWxzKG4scikpcmV0dXJuITF9ZWxzZSBpZihuIT09cilyZXR1cm4hMTtyZXR1cm4hMH0sby5jYWxsQ2FsbGJhY2s9ZnVuY3Rpb24odCxlLGEpe3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2FsbCYmdC5hcHBseShhLGUpfSxvLmdldEhvdmVyQ29sb3I9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBDYW52YXNQYXR0ZXJuP3Q6by5jb2xvcih0KS5zYXR1cmF0ZSguNSkuZGFya2VuKC4xKS5yZ2JTdHJpbmcoKX19fSx7MzozfV0sMjc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhLGksbixvLHIsbD10LmRhdGEuZGF0YXNldHM7Zm9yKGk9MCxvPWwubGVuZ3RoO28+aTsrK2kpaWYodC5pc0RhdGFzZXRWaXNpYmxlKGkpKWZvcihhPXQuZ2V0RGF0YXNldE1ldGEoaSksbj0wLHI9YS5kYXRhLmxlbmd0aDtyPm47KytuKXt2YXIgcz1hLmRhdGFbbl07cy5fdmlldy5za2lwfHxlKHMpfX1mdW5jdGlvbiBhKHQsYSl7dmFyIGk9W107cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluUmFuZ2UoYS54LGEueSkmJmkucHVzaCh0KX0pLGl9ZnVuY3Rpb24gaSh0LGEsaSxuKXt2YXIgcj1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksbD1bXTtyZXR1cm4gbnx8KG49by5kaXN0YW5jZUJldHdlZW5Qb2ludHMpLGUodCxmdW5jdGlvbih0KXtpZighaXx8dC5pblJhbmdlKGEueCxhLnkpKXt2YXIgZT10LmdldENlbnRlclBvaW50KCksbz1uKGEsZSk7cj5vPyhsPVt0XSxyPW8pOm89PT1yJiZsLnB1c2godCl9fSksbH1mdW5jdGlvbiBuKHQsZSxuKXt2YXIgcj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYWJzKHQueC1lLngpfSxzPW4uaW50ZXJzZWN0P2EodCxyKTppKHQsciwhMSxsKSxkPVtdO3JldHVybiBzLmxlbmd0aD8odC5kYXRhLmRhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24oZSxhKXtpZih0LmlzRGF0YXNldFZpc2libGUoYSkpe3ZhciBpPXQuZ2V0RGF0YXNldE1ldGEoYSksbj1pLmRhdGFbc1swXS5faW5kZXhdO24mJiFuLl92aWV3LnNraXAmJmQucHVzaChuKX19KSxkKTpbXX12YXIgbz10LmhlbHBlcnM7dC5JbnRlcmFjdGlvbj17bW9kZXM6e3NpbmdsZTpmdW5jdGlvbih0LGEpe3ZhciBpPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLG49W107cmV0dXJuIGUodCxmdW5jdGlvbih0KXtyZXR1cm4gdC5pblJhbmdlKGkueCxpLnkpPyhuLnB1c2godCksbik6dm9pZCAwfSksbi5zbGljZSgwLDEpfSxsYWJlbDpuLGluZGV4Om4sZGF0YXNldDpmdW5jdGlvbih0LGUsbil7dmFyIHI9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCksbD1uLmludGVyc2VjdD9hKHQscik6aSh0LHIsITEpO3JldHVybiBsLmxlbmd0aD4wJiYobD10LmdldERhdGFzZXRNZXRhKGxbMF0uX2RhdGFzZXRJbmRleCkuZGF0YSksbH0sXCJ4LWF4aXNcIjpmdW5jdGlvbih0LGUpe3JldHVybiBuKHQsZSwhMCl9LHBvaW50OmZ1bmN0aW9uKHQsZSl7dmFyIGk9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCk7cmV0dXJuIGEodCxpKX0sbmVhcmVzdDpmdW5jdGlvbih0LGUsYSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCkscj1pKHQsbixhLmludGVyc2VjdCk7cmV0dXJuIHIubGVuZ3RoPjEmJnIuc29ydChmdW5jdGlvbih0LGUpe3ZhciBhPXQuZ2V0QXJlYSgpLGk9ZS5nZXRBcmVhKCksbj1hLWk7cmV0dXJuIDA9PT1uJiYobj10Ll9kYXRhc2V0SW5kZXgtZS5fZGF0YXNldEluZGV4KSxufSksci5zbGljZSgwLDEpfSx4OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxyPVtdLGw9ITE7cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluWFJhbmdlKG4ueCkmJnIucHVzaCh0KSx0LmluUmFuZ2Uobi54LG4ueSkmJihsPSEwKX0pLGkuaW50ZXJzZWN0JiYhbCYmKHI9W10pLHJ9LHk6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLHI9W10sbD0hMTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5ZUmFuZ2Uobi55KSYmci5wdXNoKHQpLHQuaW5SYW5nZShuLngsbi55KSYmKGw9ITApfSksaS5pbnRlcnNlY3QmJiFsJiYocj1bXSkscn19fX19LHt9XSwyODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUsYSl7cmV0dXJuIHRoaXMuY29udHJvbGxlcj1uZXcgdC5Db250cm9sbGVyKGUsYSx0aGlzKSx0aGlzLmNvbnRyb2xsZXJ9O3JldHVybiB0LmRlZmF1bHRzPXtnbG9iYWw6e3Jlc3BvbnNpdmU6ITAscmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uOjAsbWFpbnRhaW5Bc3BlY3RSYXRpbzohMCxldmVudHM6W1wibW91c2Vtb3ZlXCIsXCJtb3VzZW91dFwiLFwiY2xpY2tcIixcInRvdWNoc3RhcnRcIixcInRvdWNobW92ZVwiXSxob3Zlcjp7b25Ib3ZlcjpudWxsLG1vZGU6XCJuZWFyZXN0XCIsaW50ZXJzZWN0OiEwLGFuaW1hdGlvbkR1cmF0aW9uOjQwMH0sb25DbGljazpudWxsLGRlZmF1bHRDb2xvcjpcInJnYmEoMCwwLDAsMC4xKVwiLGRlZmF1bHRGb250Q29sb3I6XCIjNjY2XCIsZGVmYXVsdEZvbnRGYW1pbHk6XCInSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLGRlZmF1bHRGb250U2l6ZToxMixkZWZhdWx0Rm9udFN0eWxlOlwibm9ybWFsXCIsc2hvd0xpbmVzOiEwLGVsZW1lbnRzOnt9LGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7Zm9yKHZhciBhPTA7YTx0LmRhdGEuZGF0YXNldHMubGVuZ3RoO2ErKyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jyt0LmRhdGEuZGF0YXNldHNbYV0uYmFja2dyb3VuZENvbG9yKydcIj48L3NwYW4+JyksdC5kYXRhLmRhdGFzZXRzW2FdLmxhYmVsJiZlLnB1c2godC5kYXRhLmRhdGFzZXRzW2FdLmxhYmVsKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfX19LHQuQ2hhcnQ9dCx0fX0se31dLDI5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmxheW91dFNlcnZpY2U9e2RlZmF1bHRzOnt9LGFkZEJveDpmdW5jdGlvbih0LGUpe3QuYm94ZXN8fCh0LmJveGVzPVtdKSx0LmJveGVzLnB1c2goZSl9LHJlbW92ZUJveDpmdW5jdGlvbih0LGUpe3QuYm94ZXMmJnQuYm94ZXMuc3BsaWNlKHQuYm94ZXMuaW5kZXhPZihlKSwxKX0sdXBkYXRlOmZ1bmN0aW9uKHQsYSxpKXtmdW5jdGlvbiBuKHQpe3ZhciBlLGE9dC5pc0hvcml6b250YWwoKTthPyhlPXQudXBkYXRlKHQub3B0aW9ucy5mdWxsV2lkdGg/eDpDLE0pLEQtPWUuaGVpZ2h0KTooZT10LnVwZGF0ZSh3LFMpLEMtPWUud2lkdGgpLEkucHVzaCh7aG9yaXpvbnRhbDphLG1pblNpemU6ZSxib3g6dH0pfWZ1bmN0aW9uIG8odCl7dmFyIGE9ZS5maW5kTmV4dFdoZXJlKEksZnVuY3Rpb24oZSl7cmV0dXJuIGUuYm94PT09dH0pO2lmKGEpaWYodC5pc0hvcml6b250YWwoKSl7dmFyIGk9e2xlZnQ6QSxyaWdodDpULHRvcDowLGJvdHRvbTowfTt0LnVwZGF0ZSh0Lm9wdGlvbnMuZnVsbFdpZHRoP3g6Qyx5LzIsaSl9ZWxzZSB0LnVwZGF0ZShhLm1pblNpemUud2lkdGgsRCl9ZnVuY3Rpb24gcih0KXt2YXIgYT1lLmZpbmROZXh0V2hlcmUoSSxmdW5jdGlvbihlKXtyZXR1cm4gZS5ib3g9PT10fSksaT17bGVmdDowLHJpZ2h0OjAsdG9wOlAsYm90dG9tOkZ9O2EmJnQudXBkYXRlKGEubWluU2l6ZS53aWR0aCxELGkpfWZ1bmN0aW9uIGwodCl7dC5pc0hvcml6b250YWwoKT8odC5sZWZ0PXQub3B0aW9ucy5mdWxsV2lkdGg/dTpBLHQucmlnaHQ9dC5vcHRpb25zLmZ1bGxXaWR0aD9hLWM6QStDLHQudG9wPUwsdC5ib3R0b209TCt0LmhlaWdodCxMPXQuYm90dG9tKToodC5sZWZ0PVYsdC5yaWdodD1WK3Qud2lkdGgsdC50b3A9UCx0LmJvdHRvbT1QK0QsVj10LnJpZ2h0KX1pZih0KXt2YXIgcz10Lm9wdGlvbnMubGF5b3V0LGQ9cz9zLnBhZGRpbmc6bnVsbCx1PTAsYz0wLGg9MCxmPTA7aXNOYU4oZCk/KHU9ZC5sZWZ0fHwwLGM9ZC5yaWdodHx8MCxoPWQudG9wfHwwLGY9ZC5ib3R0b218fDApOih1PWQsYz1kLGg9ZCxmPWQpO3ZhciBnPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImxlZnRcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLHA9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwicmlnaHRcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLG09ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwidG9wXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxiPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImJvdHRvbVwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksdj1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJjaGFydEFyZWFcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pO20uc29ydChmdW5jdGlvbih0LGUpe3JldHVybihlLm9wdGlvbnMuZnVsbFdpZHRoPzE6MCktKHQub3B0aW9ucy5mdWxsV2lkdGg/MTowKX0pLGIuc29ydChmdW5jdGlvbih0LGUpe3JldHVybih0Lm9wdGlvbnMuZnVsbFdpZHRoPzE6MCktKGUub3B0aW9ucy5mdWxsV2lkdGg/MTowKX0pO3ZhciB4PWEtdS1jLHk9aS1oLWYsaz14LzIsUz15LzIsdz0oYS1rKS8oZy5sZW5ndGgrcC5sZW5ndGgpLE09KGktUykvKG0ubGVuZ3RoK2IubGVuZ3RoKSxDPXgsRD15LEk9W107ZS5lYWNoKGcuY29uY2F0KHAsbSxiKSxuKTt2YXIgQT11LFQ9YyxQPWgsRj1mO2UuZWFjaChnLmNvbmNhdChwKSxvKSxlLmVhY2goZyxmdW5jdGlvbih0KXtBKz10LndpZHRofSksZS5lYWNoKHAsZnVuY3Rpb24odCl7VCs9dC53aWR0aH0pLGUuZWFjaChtLmNvbmNhdChiKSxvKSxlLmVhY2gobSxmdW5jdGlvbih0KXtQKz10LmhlaWdodH0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe0YrPXQuaGVpZ2h0fSksZS5lYWNoKGcuY29uY2F0KHApLHIpLEE9dSxUPWMsUD1oLEY9ZixlLmVhY2goZyxmdW5jdGlvbih0KXtBKz10LndpZHRofSksZS5lYWNoKHAsZnVuY3Rpb24odCl7VCs9dC53aWR0aH0pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe1ArPXQuaGVpZ2h0fSksZS5lYWNoKGIsZnVuY3Rpb24odCl7Ris9dC5oZWlnaHR9KTt2YXIgXz1pLVAtRixSPWEtQS1UOyhSIT09Q3x8XyE9PUQpJiYoZS5lYWNoKGcsZnVuY3Rpb24odCl7dC5oZWlnaHQ9X30pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe3QuaGVpZ2h0PV99KSxlLmVhY2gobSxmdW5jdGlvbih0KXt0Lm9wdGlvbnMuZnVsbFdpZHRofHwodC53aWR0aD1SKX0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe3Qub3B0aW9ucy5mdWxsV2lkdGh8fCh0LndpZHRoPVIpfSksRD1fLEM9Uik7dmFyIFY9dSxMPWg7ZS5lYWNoKGcuY29uY2F0KG0pLGwpLFYrPUMsTCs9RCxlLmVhY2gocCxsKSxlLmVhY2goYixsKSx0LmNoYXJ0QXJlYT17bGVmdDpBLHRvcDpQLHJpZ2h0OkErQyxib3R0b206UCtEfSxlLmVhY2godixmdW5jdGlvbihlKXtlLmxlZnQ9dC5jaGFydEFyZWEubGVmdCxlLnRvcD10LmNoYXJ0QXJlYS50b3AsZS5yaWdodD10LmNoYXJ0QXJlYS5yaWdodCxlLmJvdHRvbT10LmNoYXJ0QXJlYS5ib3R0b20sZS51cGRhdGUoQyxEKX0pfX19fX0se31dLDMwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gdC51c2VQb2ludFN0eWxlP2UqTWF0aC5TUVJUMjp0LmJveFdpZHRofXZhciBhPXQuaGVscGVycyxpPWEubm9vcDt0LmRlZmF1bHRzLmdsb2JhbC5sZWdlbmQ9e2Rpc3BsYXk6ITAscG9zaXRpb246XCJ0b3BcIixmdWxsV2lkdGg6ITAscmV2ZXJzZTohMSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0SW5kZXgsaT10aGlzLmNoYXJ0LG49aS5nZXREYXRhc2V0TWV0YShhKTtuLmhpZGRlbj1udWxsPT09bi5oaWRkZW4/IWkuZGF0YS5kYXRhc2V0c1thXS5oaWRkZW46bnVsbCxpLnVwZGF0ZSgpfSxvbkhvdmVyOm51bGwsbGFiZWxzOntib3hXaWR0aDo0MCxwYWRkaW5nOjEwLGdlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YTtyZXR1cm4gYS5pc0FycmF5KGUuZGF0YXNldHMpP2UuZGF0YXNldHMubWFwKGZ1bmN0aW9uKGUsaSl7cmV0dXJue3RleHQ6ZS5sYWJlbCxmaWxsU3R5bGU6YS5pc0FycmF5KGUuYmFja2dyb3VuZENvbG9yKT9lLmJhY2tncm91bmRDb2xvclswXTplLmJhY2tncm91bmRDb2xvcixoaWRkZW46IXQuaXNEYXRhc2V0VmlzaWJsZShpKSxsaW5lQ2FwOmUuYm9yZGVyQ2FwU3R5bGUsbGluZURhc2g6ZS5ib3JkZXJEYXNoLGxpbmVEYXNoT2Zmc2V0OmUuYm9yZGVyRGFzaE9mZnNldCxsaW5lSm9pbjplLmJvcmRlckpvaW5TdHlsZSxsaW5lV2lkdGg6ZS5ib3JkZXJXaWR0aCxzdHJva2VTdHlsZTplLmJvcmRlckNvbG9yLHBvaW50U3R5bGU6ZS5wb2ludFN0eWxlLGRhdGFzZXRJbmRleDppfX0sdGhpcyk6W119fX0sdC5MZWdlbmQ9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbih0KXthLmV4dGVuZCh0aGlzLHQpLHRoaXMubGVnZW5kSGl0Qm94ZXM9W10sdGhpcy5kb3VnaG51dE1vZGU9ITF9LGJlZm9yZVVwZGF0ZTppLHVwZGF0ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcztyZXR1cm4gaS5iZWZvcmVVcGRhdGUoKSxpLm1heFdpZHRoPXQsaS5tYXhIZWlnaHQ9ZSxpLm1hcmdpbnM9YSxpLmJlZm9yZVNldERpbWVuc2lvbnMoKSxpLnNldERpbWVuc2lvbnMoKSxpLmFmdGVyU2V0RGltZW5zaW9ucygpLGkuYmVmb3JlQnVpbGRMYWJlbHMoKSxpLmJ1aWxkTGFiZWxzKCksaS5hZnRlckJ1aWxkTGFiZWxzKCksaS5iZWZvcmVGaXQoKSxpLmZpdCgpLGkuYWZ0ZXJGaXQoKSxpLmFmdGVyVXBkYXRlKCksaS5taW5TaXplfSxhZnRlclVwZGF0ZTppLGJlZm9yZVNldERpbWVuc2lvbnM6aSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTAsdC5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfX0sYWZ0ZXJTZXREaW1lbnNpb25zOmksYmVmb3JlQnVpbGRMYWJlbHM6aSxidWlsZExhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sZWdlbmRJdGVtcz10Lm9wdGlvbnMubGFiZWxzLmdlbmVyYXRlTGFiZWxzLmNhbGwodCx0LmNoYXJ0KSx0Lm9wdGlvbnMucmV2ZXJzZSYmdC5sZWdlbmRJdGVtcy5yZXZlcnNlKCl9LGFmdGVyQnVpbGRMYWJlbHM6aSxiZWZvcmVGaXQ6aSxmaXQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLG49aS5vcHRpb25zLG89bi5sYWJlbHMscj1uLmRpc3BsYXksbD1pLmN0eCxzPXQuZGVmYXVsdHMuZ2xvYmFsLGQ9YS5nZXRWYWx1ZU9yRGVmYXVsdCx1PWQoby5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksYz1kKG8uZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksaD1kKG8uZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSxmPWEuZm9udFN0cmluZyh1LGMsaCksZz1pLmxlZ2VuZEhpdEJveGVzPVtdLHA9aS5taW5TaXplLG09aS5pc0hvcml6b250YWwoKTtpZihtPyhwLndpZHRoPWkubWF4V2lkdGgscC5oZWlnaHQ9cj8xMDowKToocC53aWR0aD1yPzEwOjAscC5oZWlnaHQ9aS5tYXhIZWlnaHQpLHIpaWYobC5mb250PWYsbSl7dmFyIGI9aS5saW5lV2lkdGhzPVswXSx2PWkubGVnZW5kSXRlbXMubGVuZ3RoP3Urby5wYWRkaW5nOjA7bC50ZXh0QWxpZ249XCJsZWZ0XCIsbC50ZXh0QmFzZWxpbmU9XCJ0b3BcIixhLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGEpe3ZhciBuPWUobyx1KSxyPW4rdS8yK2wubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aDtiW2IubGVuZ3RoLTFdK3Irby5wYWRkaW5nPj1pLndpZHRoJiYodis9dStvLnBhZGRpbmcsYltiLmxlbmd0aF09aS5sZWZ0KSxnW2FdPXtsZWZ0OjAsdG9wOjAsd2lkdGg6cixoZWlnaHQ6dX0sYltiLmxlbmd0aC0xXSs9citvLnBhZGRpbmd9KSxwLmhlaWdodCs9dn1lbHNle3ZhciB4PW8ucGFkZGluZyx5PWkuY29sdW1uV2lkdGhzPVtdLGs9by5wYWRkaW5nLFM9MCx3PTAsTT11K3g7YS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxhKXt2YXIgaT1lKG8sdSksbj1pK3UvMitsLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGg7dytNPnAuaGVpZ2h0JiYoays9UytvLnBhZGRpbmcseS5wdXNoKFMpLFM9MCx3PTApLFM9TWF0aC5tYXgoUyxuKSx3Kz1NLGdbYV09e2xlZnQ6MCx0b3A6MCx3aWR0aDpuLGhlaWdodDp1fX0pLGsrPVMseS5wdXNoKFMpLHAud2lkdGgrPWt9aS53aWR0aD1wLndpZHRoLGkuaGVpZ2h0PXAuaGVpZ2h0fSxhZnRlckZpdDppLGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3JldHVyblwidG9wXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb258fFwiYm90dG9tXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb259LGRyYXc6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLG49aS5vcHRpb25zLG89bi5sYWJlbHMscj10LmRlZmF1bHRzLmdsb2JhbCxsPXIuZWxlbWVudHMubGluZSxzPWkud2lkdGgsZD1pLmxpbmVXaWR0aHM7aWYobi5kaXNwbGF5KXt2YXIgdSxjPWkuY3R4LGg9YS5nZXRWYWx1ZU9yRGVmYXVsdCxmPWgoby5mb250Q29sb3Isci5kZWZhdWx0Rm9udENvbG9yKSxnPWgoby5mb250U2l6ZSxyLmRlZmF1bHRGb250U2l6ZSkscD1oKG8uZm9udFN0eWxlLHIuZGVmYXVsdEZvbnRTdHlsZSksbT1oKG8uZm9udEZhbWlseSxyLmRlZmF1bHRGb250RmFtaWx5KSxiPWEuZm9udFN0cmluZyhnLHAsbSk7Yy50ZXh0QWxpZ249XCJsZWZ0XCIsYy50ZXh0QmFzZWxpbmU9XCJ0b3BcIixjLmxpbmVXaWR0aD0uNSxjLnN0cm9rZVN0eWxlPWYsYy5maWxsU3R5bGU9ZixjLmZvbnQ9Yjt2YXIgdj1lKG8sZykseD1pLmxlZ2VuZEhpdEJveGVzLHk9ZnVuY3Rpb24oZSxhLGkpe2lmKCEoaXNOYU4odil8fDA+PXYpKXtjLnNhdmUoKSxjLmZpbGxTdHlsZT1oKGkuZmlsbFN0eWxlLHIuZGVmYXVsdENvbG9yKSxjLmxpbmVDYXA9aChpLmxpbmVDYXAsbC5ib3JkZXJDYXBTdHlsZSksYy5saW5lRGFzaE9mZnNldD1oKGkubGluZURhc2hPZmZzZXQsbC5ib3JkZXJEYXNoT2Zmc2V0KSxjLmxpbmVKb2luPWgoaS5saW5lSm9pbixsLmJvcmRlckpvaW5TdHlsZSksYy5saW5lV2lkdGg9aChpLmxpbmVXaWR0aCxsLmJvcmRlcldpZHRoKSxjLnN0cm9rZVN0eWxlPWgoaS5zdHJva2VTdHlsZSxyLmRlZmF1bHRDb2xvcik7dmFyIG89MD09PWgoaS5saW5lV2lkdGgsbC5ib3JkZXJXaWR0aCk7aWYoYy5zZXRMaW5lRGFzaCYmYy5zZXRMaW5lRGFzaChoKGkubGluZURhc2gsbC5ib3JkZXJEYXNoKSksbi5sYWJlbHMmJm4ubGFiZWxzLnVzZVBvaW50U3R5bGUpe3ZhciBzPWcqTWF0aC5TUVJUMi8yLGQ9cy9NYXRoLlNRUlQyLHU9ZStkLGY9YStkO3QuY2FudmFzSGVscGVycy5kcmF3UG9pbnQoYyxpLnBvaW50U3R5bGUscyx1LGYpfWVsc2Ugb3x8Yy5zdHJva2VSZWN0KGUsYSx2LGcpLGMuZmlsbFJlY3QoZSxhLHYsZyk7Yy5yZXN0b3JlKCl9fSxrPWZ1bmN0aW9uKHQsZSxhLGkpe2MuZmlsbFRleHQoYS50ZXh0LHYrZy8yK3QsZSksYS5oaWRkZW4mJihjLmJlZ2luUGF0aCgpLGMubGluZVdpZHRoPTIsYy5tb3ZlVG8oditnLzIrdCxlK2cvMiksYy5saW5lVG8oditnLzIrdCtpLGUrZy8yKSxjLnN0cm9rZSgpKX0sUz1pLmlzSG9yaXpvbnRhbCgpO3U9Uz97eDppLmxlZnQrKHMtZFswXSkvMix5OmkudG9wK28ucGFkZGluZyxsaW5lOjB9Ont4OmkubGVmdCtvLnBhZGRpbmcseTppLnRvcCtvLnBhZGRpbmcsbGluZTowfTt2YXIgdz1nK28ucGFkZGluZzthLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGUpe3ZhciBhPWMubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aCxuPXYrZy8yK2Escj11LngsbD11Lnk7Uz9yK24+PXMmJihsPXUueSs9dyx1LmxpbmUrKyxyPXUueD1pLmxlZnQrKHMtZFt1LmxpbmVdKS8yKTpsK3c+aS5ib3R0b20mJihyPXUueD1yK2kuY29sdW1uV2lkdGhzW3UubGluZV0rby5wYWRkaW5nLGw9dS55PWkudG9wLHUubGluZSsrKSx5KHIsbCx0KSx4W2VdLmxlZnQ9cix4W2VdLnRvcD1sLGsocixsLHQsYSksUz91LngrPW4rby5wYWRkaW5nOnUueSs9d30pfX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxpPWUub3B0aW9ucyxuPVwibW91c2V1cFwiPT09dC50eXBlP1wiY2xpY2tcIjp0LnR5cGUsbz0hMTtpZihcIm1vdXNlbW92ZVwiPT09bil7aWYoIWkub25Ib3ZlcilyZXR1cm59ZWxzZXtpZihcImNsaWNrXCIhPT1uKXJldHVybjtpZighaS5vbkNsaWNrKXJldHVybn12YXIgcj1hLmdldFJlbGF0aXZlUG9zaXRpb24odCxlLmNoYXJ0LmNoYXJ0KSxsPXIueCxzPXIueTtpZihsPj1lLmxlZnQmJmw8PWUucmlnaHQmJnM+PWUudG9wJiZzPD1lLmJvdHRvbSlmb3IodmFyIGQ9ZS5sZWdlbmRIaXRCb3hlcyx1PTA7dTxkLmxlbmd0aDsrK3Upe3ZhciBjPWRbdV07aWYobD49Yy5sZWZ0JiZsPD1jLmxlZnQrYy53aWR0aCYmcz49Yy50b3AmJnM8PWMudG9wK2MuaGVpZ2h0KXtpZihcImNsaWNrXCI9PT1uKXtpLm9uQ2xpY2suY2FsbChlLHQsZS5sZWdlbmRJdGVtc1t1XSksbz0hMDticmVha31pZihcIm1vdXNlbW92ZVwiPT09bil7aS5vbkhvdmVyLmNhbGwoZSx0LGUubGVnZW5kSXRlbXNbdV0pLG89ITA7YnJlYWt9fX1yZXR1cm4gb319KSx0LnBsdWdpbnMucmVnaXN0ZXIoe2JlZm9yZUluaXQ6ZnVuY3Rpb24oZSl7dmFyIGE9ZS5vcHRpb25zLGk9YS5sZWdlbmQ7aSYmKGUubGVnZW5kPW5ldyB0LkxlZ2VuZCh7Y3R4OmUuY2hhcnQuY3R4LG9wdGlvbnM6aSxjaGFydDplfSksdC5sYXlvdXRTZXJ2aWNlLmFkZEJveChlLGUubGVnZW5kKSl9fSl9fSx7fV0sMzE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLm5vb3A7dC5wbHVnaW5zPXtfcGx1Z2luczpbXSxyZWdpc3RlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wbHVnaW5zO1tdLmNvbmNhdCh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xPT09ZS5pbmRleE9mKHQpJiZlLnB1c2godCl9KX0sdW5yZWdpc3RlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wbHVnaW5zO1tdLmNvbmNhdCh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBhPWUuaW5kZXhPZih0KTstMSE9PWEmJmUuc3BsaWNlKGEsMSl9KX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLl9wbHVnaW5zPVtdfSxjb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wbHVnaW5zLmxlbmd0aH0sZ2V0QWxsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BsdWdpbnN9LG5vdGlmeTpmdW5jdGlvbih0LGUpe3ZhciBhLGksbj10aGlzLl9wbHVnaW5zLG89bi5sZW5ndGg7XHJcbmZvcihhPTA7bz5hOysrYSlpZihpPW5bYV0sXCJmdW5jdGlvblwiPT10eXBlb2YgaVt0XSYmaVt0XS5hcHBseShpLGV8fFtdKT09PSExKXJldHVybiExO3JldHVybiEwfX0sdC5QbHVnaW5CYXNlPXQuRWxlbWVudC5leHRlbmQoe2JlZm9yZUluaXQ6ZSxhZnRlckluaXQ6ZSxiZWZvcmVVcGRhdGU6ZSxhZnRlclVwZGF0ZTplLGJlZm9yZURyYXc6ZSxhZnRlckRyYXc6ZSxkZXN0cm95OmV9KSx0LnBsdWdpblNlcnZpY2U9dC5wbHVnaW5zfX0se31dLDMyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnNjYWxlPXtkaXNwbGF5OiEwLHBvc2l0aW9uOlwibGVmdFwiLGdyaWRMaW5lczp7ZGlzcGxheTohMCxjb2xvcjpcInJnYmEoMCwgMCwgMCwgMC4xKVwiLGxpbmVXaWR0aDoxLGRyYXdCb3JkZXI6ITAsZHJhd09uQ2hhcnRBcmVhOiEwLGRyYXdUaWNrczohMCx0aWNrTWFya0xlbmd0aDoxMCx6ZXJvTGluZVdpZHRoOjEsemVyb0xpbmVDb2xvcjpcInJnYmEoMCwwLDAsMC4yNSlcIixvZmZzZXRHcmlkTGluZXM6ITEsYm9yZGVyRGFzaDpbXSxib3JkZXJEYXNoT2Zmc2V0OjB9LHNjYWxlTGFiZWw6e2xhYmVsU3RyaW5nOlwiXCIsZGlzcGxheTohMX0sdGlja3M6e2JlZ2luQXRaZXJvOiExLG1pblJvdGF0aW9uOjAsbWF4Um90YXRpb246NTAsbWlycm9yOiExLHBhZGRpbmc6MTAscmV2ZXJzZTohMSxkaXNwbGF5OiEwLGF1dG9Ta2lwOiEwLGF1dG9Ta2lwUGFkZGluZzowLGxhYmVsT2Zmc2V0OjAsY2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLnZhbHVlc319LHQuU2NhbGU9dC5FbGVtZW50LmV4dGVuZCh7YmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZSxbdGhpc10pfSx1cGRhdGU6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXM7cmV0dXJuIG4uYmVmb3JlVXBkYXRlKCksbi5tYXhXaWR0aD10LG4ubWF4SGVpZ2h0PWEsbi5tYXJnaW5zPWUuZXh0ZW5kKHtsZWZ0OjAscmlnaHQ6MCx0b3A6MCxib3R0b206MH0saSksbi5iZWZvcmVTZXREaW1lbnNpb25zKCksbi5zZXREaW1lbnNpb25zKCksbi5hZnRlclNldERpbWVuc2lvbnMoKSxuLmJlZm9yZURhdGFMaW1pdHMoKSxuLmRldGVybWluZURhdGFMaW1pdHMoKSxuLmFmdGVyRGF0YUxpbWl0cygpLG4uYmVmb3JlQnVpbGRUaWNrcygpLG4uYnVpbGRUaWNrcygpLG4uYWZ0ZXJCdWlsZFRpY2tzKCksbi5iZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb24oKSxuLmNvbnZlcnRUaWNrc1RvTGFiZWxzKCksbi5hZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbigpLG4uYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5jYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5iZWZvcmVGaXQoKSxuLmZpdCgpLG4uYWZ0ZXJGaXQoKSxuLmFmdGVyVXBkYXRlKCksbi5taW5TaXplfSxhZnRlclVwZGF0ZTpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclVwZGF0ZSxbdGhpc10pfSxiZWZvcmVTZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVNldERpbWVuc2lvbnMsW3RoaXNdKX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wfSxhZnRlclNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJTZXREaW1lbnNpb25zLFt0aGlzXSl9LGJlZm9yZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlRGF0YUxpbWl0cyxbdGhpc10pfSxkZXRlcm1pbmVEYXRhTGltaXRzOmUubm9vcCxhZnRlckRhdGFMaW1pdHM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJEYXRhTGltaXRzLFt0aGlzXSl9LGJlZm9yZUJ1aWxkVGlja3M6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlQnVpbGRUaWNrcyxbdGhpc10pfSxidWlsZFRpY2tzOmUubm9vcCxhZnRlckJ1aWxkVGlja3M6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJCdWlsZFRpY2tzLFt0aGlzXSl9LGJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb24sW3RoaXNdKX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5vcHRpb25zLnRpY2tzO3QudGlja3M9dC50aWNrcy5tYXAoZS51c2VyQ2FsbGJhY2t8fGUuY2FsbGJhY2spfSxhZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbixbdGhpc10pfSxiZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uLFt0aGlzXSl9LGNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLmN0eCxuPXQuZGVmYXVsdHMuZ2xvYmFsLG89YS5vcHRpb25zLnRpY2tzLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRTaXplLG4uZGVmYXVsdEZvbnRTaXplKSxsPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250U3R5bGUsbi5kZWZhdWx0Rm9udFN0eWxlKSxzPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250RmFtaWx5LG4uZGVmYXVsdEZvbnRGYW1pbHkpLGQ9ZS5mb250U3RyaW5nKHIsbCxzKTtpLmZvbnQ9ZDt2YXIgdSxjPWkubWVhc3VyZVRleHQoYS50aWNrc1swXSkud2lkdGgsaD1pLm1lYXN1cmVUZXh0KGEudGlja3NbYS50aWNrcy5sZW5ndGgtMV0pLndpZHRoO2lmKGEubGFiZWxSb3RhdGlvbj1vLm1pblJvdGF0aW9ufHwwLGEucGFkZGluZ1JpZ2h0PTAsYS5wYWRkaW5nTGVmdD0wLGEub3B0aW9ucy5kaXNwbGF5JiZhLmlzSG9yaXpvbnRhbCgpKXthLnBhZGRpbmdSaWdodD1oLzIrMyxhLnBhZGRpbmdMZWZ0PWMvMiszLGEubG9uZ2VzdFRleHRDYWNoZXx8KGEubG9uZ2VzdFRleHRDYWNoZT17fSk7Zm9yKHZhciBmLGcscD1lLmxvbmdlc3RUZXh0KGksZCxhLnRpY2tzLGEubG9uZ2VzdFRleHRDYWNoZSksbT1wLGI9YS5nZXRQaXhlbEZvclRpY2soMSktYS5nZXRQaXhlbEZvclRpY2soMCktNjttPmImJmEubGFiZWxSb3RhdGlvbjxvLm1heFJvdGF0aW9uOyl7aWYoZj1NYXRoLmNvcyhlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSxnPU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLHU9ZipjLHUrci8yPmEueUxhYmVsV2lkdGgmJihhLnBhZGRpbmdMZWZ0PXUrci8yKSxhLnBhZGRpbmdSaWdodD1yLzIsZypwPmEubWF4SGVpZ2h0KXthLmxhYmVsUm90YXRpb24tLTticmVha31hLmxhYmVsUm90YXRpb24rKyxtPWYqcH19YS5tYXJnaW5zJiYoYS5wYWRkaW5nTGVmdD1NYXRoLm1heChhLnBhZGRpbmdMZWZ0LWEubWFyZ2lucy5sZWZ0LDApLGEucGFkZGluZ1JpZ2h0PU1hdGgubWF4KGEucGFkZGluZ1JpZ2h0LWEubWFyZ2lucy5yaWdodCwwKSl9LGFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uLFt0aGlzXSl9LGJlZm9yZUZpdDpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVGaXQsW3RoaXNdKX0sZml0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH0sbj1hLm9wdGlvbnMsbz10LmRlZmF1bHRzLmdsb2JhbCxyPW4udGlja3MsbD1uLnNjYWxlTGFiZWwscz1uLmdyaWRMaW5lcyxkPW4uZGlzcGxheSx1PWEuaXNIb3Jpem9udGFsKCksYz1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLGg9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRTdHlsZSxvLmRlZmF1bHRGb250U3R5bGUpLGY9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRGYW1pbHksby5kZWZhdWx0Rm9udEZhbWlseSksZz1lLmZvbnRTdHJpbmcoYyxoLGYpLHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChsLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxtPW4uZ3JpZExpbmVzLnRpY2tNYXJrTGVuZ3RoO2lmKHU/aS53aWR0aD1hLmlzRnVsbFdpZHRoKCk/YS5tYXhXaWR0aC1hLm1hcmdpbnMubGVmdC1hLm1hcmdpbnMucmlnaHQ6YS5tYXhXaWR0aDppLndpZHRoPWQmJnMuZHJhd1RpY2tzP206MCx1P2kuaGVpZ2h0PWQmJnMuZHJhd1RpY2tzP206MDppLmhlaWdodD1hLm1heEhlaWdodCxsLmRpc3BsYXkmJmQmJih1P2kuaGVpZ2h0Kz0xLjUqcDppLndpZHRoKz0xLjUqcCksci5kaXNwbGF5JiZkKXthLmxvbmdlc3RUZXh0Q2FjaGV8fChhLmxvbmdlc3RUZXh0Q2FjaGU9e30pO3ZhciBiPWUubG9uZ2VzdFRleHQoYS5jdHgsZyxhLnRpY2tzLGEubG9uZ2VzdFRleHRDYWNoZSksdj1lLm51bWJlck9mTGFiZWxMaW5lcyhhLnRpY2tzKSx4PS41KmM7aWYodSl7YS5sb25nZXN0TGFiZWxXaWR0aD1iO3ZhciB5PU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpKmEubG9uZ2VzdExhYmVsV2lkdGgrYyp2K3gqdjtpLmhlaWdodD1NYXRoLm1pbihhLm1heEhlaWdodCxpLmhlaWdodCt5KSxhLmN0eC5mb250PWc7dmFyIGs9YS5jdHgubWVhc3VyZVRleHQoYS50aWNrc1swXSkud2lkdGgsUz1hLmN0eC5tZWFzdXJlVGV4dChhLnRpY2tzW2EudGlja3MubGVuZ3RoLTFdKS53aWR0aCx3PU1hdGguY29zKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLE09TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSk7YS5wYWRkaW5nTGVmdD0wIT09YS5sYWJlbFJvdGF0aW9uP3cqayszOmsvMiszLGEucGFkZGluZ1JpZ2h0PTAhPT1hLmxhYmVsUm90YXRpb24/TSooYy8yKSszOlMvMiszfWVsc2V7dmFyIEM9YS5tYXhXaWR0aC1pLndpZHRoLEQ9ci5taXJyb3I7RD9iPTA6Yis9YS5vcHRpb25zLnRpY2tzLnBhZGRpbmcsQz5iP2kud2lkdGgrPWI6aS53aWR0aD1hLm1heFdpZHRoLGEucGFkZGluZ1RvcD1jLzIsYS5wYWRkaW5nQm90dG9tPWMvMn19YS5tYXJnaW5zJiYoYS5wYWRkaW5nTGVmdD1NYXRoLm1heChhLnBhZGRpbmdMZWZ0LWEubWFyZ2lucy5sZWZ0LDApLGEucGFkZGluZ1RvcD1NYXRoLm1heChhLnBhZGRpbmdUb3AtYS5tYXJnaW5zLnRvcCwwKSxhLnBhZGRpbmdSaWdodD1NYXRoLm1heChhLnBhZGRpbmdSaWdodC1hLm1hcmdpbnMucmlnaHQsMCksYS5wYWRkaW5nQm90dG9tPU1hdGgubWF4KGEucGFkZGluZ0JvdHRvbS1hLm1hcmdpbnMuYm90dG9tLDApKSxhLndpZHRoPWkud2lkdGgsYS5oZWlnaHQ9aS5oZWlnaHR9LGFmdGVyRml0OmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyRml0LFt0aGlzXSl9LGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3JldHVyblwidG9wXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb258fFwiYm90dG9tXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb259LGlzRnVsbFdpZHRoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5mdWxsV2lkdGh9LGdldFJpZ2h0VmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT10fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9OYU46XCJudW1iZXJcIiE9dHlwZW9mIHR8fGlzRmluaXRlKHQpP1wib2JqZWN0XCI9PXR5cGVvZiB0P3QgaW5zdGFuY2VvZiBEYXRlfHx0LmlzVmFsaWQ/dDp0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5pc0hvcml6b250YWwoKT90Lng6dC55KTp0Ok5hTn0sZ2V0TGFiZWxGb3JJbmRleDplLm5vb3AsZ2V0UGl4ZWxGb3JWYWx1ZTplLm5vb3AsZ2V0VmFsdWVGb3JQaXhlbDplLm5vb3AsZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztpZihhLmlzSG9yaXpvbnRhbCgpKXt2YXIgaT1hLndpZHRoLShhLnBhZGRpbmdMZWZ0K2EucGFkZGluZ1JpZ2h0KSxuPWkvTWF0aC5tYXgoYS50aWNrcy5sZW5ndGgtKGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSksbz1uKnQrYS5wYWRkaW5nTGVmdDtlJiYobys9bi8yKTt2YXIgcj1hLmxlZnQrTWF0aC5yb3VuZChvKTtyZXR1cm4gcis9YS5pc0Z1bGxXaWR0aCgpP2EubWFyZ2lucy5sZWZ0OjB9dmFyIGw9YS5oZWlnaHQtKGEucGFkZGluZ1RvcCthLnBhZGRpbmdCb3R0b20pO3JldHVybiBhLnRvcCt0KihsLyhhLnRpY2tzLmxlbmd0aC0xKSl9LGdldFBpeGVsRm9yRGVjaW1hbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKGUuaXNIb3Jpem9udGFsKCkpe3ZhciBhPWUud2lkdGgtKGUucGFkZGluZ0xlZnQrZS5wYWRkaW5nUmlnaHQpLGk9YSp0K2UucGFkZGluZ0xlZnQsbj1lLmxlZnQrTWF0aC5yb3VuZChpKTtyZXR1cm4gbis9ZS5pc0Z1bGxXaWR0aCgpP2UubWFyZ2lucy5sZWZ0OjB9cmV0dXJuIGUudG9wK3QqZS5oZWlnaHR9LGdldEJhc2VQaXhlbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm1pbixhPXQubWF4O3JldHVybiB0LmdldFBpeGVsRm9yVmFsdWUodC5iZWdpbkF0WmVybz8wOjA+ZSYmMD5hP2E6ZT4wJiZhPjA/ZTowKX0sZHJhdzpmdW5jdGlvbihhKXt2YXIgaT10aGlzLG49aS5vcHRpb25zO2lmKG4uZGlzcGxheSl7dmFyIG8scixsPWkuY3R4LHM9dC5kZWZhdWx0cy5nbG9iYWwsZD1uLnRpY2tzLHU9bi5ncmlkTGluZXMsYz1uLnNjYWxlTGFiZWwsaD0wIT09aS5sYWJlbFJvdGF0aW9uLGY9ZC5hdXRvU2tpcCxnPWkuaXNIb3Jpem9udGFsKCk7ZC5tYXhUaWNrc0xpbWl0JiYocj1kLm1heFRpY2tzTGltaXQpO3ZhciBwPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250Q29sb3Iscy5kZWZhdWx0Rm9udENvbG9yKSxtPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksYj1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksdj1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSx4PWUuZm9udFN0cmluZyhtLGIsdikseT11LnRpY2tNYXJrTGVuZ3RoLGs9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh1LmJvcmRlckRhc2gscy5ib3JkZXJEYXNoKSxTPWUuZ2V0VmFsdWVPckRlZmF1bHQodS5ib3JkZXJEYXNoT2Zmc2V0LHMuYm9yZGVyRGFzaE9mZnNldCksdz1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udENvbG9yLHMuZGVmYXVsdEZvbnRDb2xvciksTT1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLEM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLEQ9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSksST1lLmZvbnRTdHJpbmcoTSxDLEQpLEE9ZS50b1JhZGlhbnMoaS5sYWJlbFJvdGF0aW9uKSxUPU1hdGguY29zKEEpLFA9aS5sb25nZXN0TGFiZWxXaWR0aCpUO2wuZmlsbFN0eWxlPXA7dmFyIEY9W107aWYoZyl7aWYobz0hMSxoJiYoUC89MiksKFArZC5hdXRvU2tpcFBhZGRpbmcpKmkudGlja3MubGVuZ3RoPmkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpJiYobz0xK01hdGguZmxvb3IoKFArZC5hdXRvU2tpcFBhZGRpbmcpKmkudGlja3MubGVuZ3RoLyhpLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSkpKSxyJiZpLnRpY2tzLmxlbmd0aD5yKWZvcig7IW98fGkudGlja3MubGVuZ3RoLyhvfHwxKT5yOylvfHwobz0xKSxvKz0xO2Z8fChvPSExKX12YXIgXz1cInJpZ2h0XCI9PT1uLnBvc2l0aW9uP2kubGVmdDppLnJpZ2h0LXksUj1cInJpZ2h0XCI9PT1uLnBvc2l0aW9uP2kubGVmdCt5OmkucmlnaHQsVj1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLnRvcDppLmJvdHRvbS15LEw9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS50b3AreTppLmJvdHRvbTtpZihlLmVhY2goaS50aWNrcyxmdW5jdGlvbih0LHIpe2lmKHZvaWQgMCE9PXQmJm51bGwhPT10KXt2YXIgbD1pLnRpY2tzLmxlbmd0aD09PXIrMSxzPW8+MSYmciVvPjB8fHIlbz09PTAmJnIrbz49aS50aWNrcy5sZW5ndGg7aWYoKCFzfHxsKSYmdm9pZCAwIT09dCYmbnVsbCE9PXQpe3ZhciBjLGY7cj09PShcInVuZGVmaW5lZFwiIT10eXBlb2YgaS56ZXJvTGluZUluZGV4P2kuemVyb0xpbmVJbmRleDowKT8oYz11Lnplcm9MaW5lV2lkdGgsZj11Lnplcm9MaW5lQ29sb3IpOihjPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUubGluZVdpZHRoLHIpLGY9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5jb2xvcixyKSk7dmFyIHAsbSxiLHYseCx3LE0sQyxELEksVD1cIm1pZGRsZVwiLFA9XCJtaWRkbGVcIjtpZihnKXtofHwoUD1cInRvcFwiPT09bi5wb3NpdGlvbj9cImJvdHRvbVwiOlwidG9wXCIpLFQ9aD9cInJpZ2h0XCI6XCJjZW50ZXJcIjt2YXIgTz1pLmdldFBpeGVsRm9yVGljayhyKStlLmFsaWFzUGl4ZWwoYyk7RD1pLmdldFBpeGVsRm9yVGljayhyLHUub2Zmc2V0R3JpZExpbmVzKStkLmxhYmVsT2Zmc2V0LEk9aD9pLnRvcCsxMjpcInRvcFwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbS15OmkudG9wK3kscD1iPXg9TT1PLG09Vix2PUwsdz1hLnRvcCxDPWEuYm90dG9tfWVsc2V7XCJsZWZ0XCI9PT1uLnBvc2l0aW9uP2QubWlycm9yPyhEPWkucmlnaHQrZC5wYWRkaW5nLFQ9XCJsZWZ0XCIpOihEPWkucmlnaHQtZC5wYWRkaW5nLFQ9XCJyaWdodFwiKTpkLm1pcnJvcj8oRD1pLmxlZnQtZC5wYWRkaW5nLFQ9XCJyaWdodFwiKTooRD1pLmxlZnQrZC5wYWRkaW5nLFQ9XCJsZWZ0XCIpO3ZhciBCPWkuZ2V0UGl4ZWxGb3JUaWNrKHIpO0IrPWUuYWxpYXNQaXhlbChjKSxJPWkuZ2V0UGl4ZWxGb3JUaWNrKHIsdS5vZmZzZXRHcmlkTGluZXMpLHA9XyxiPVIseD1hLmxlZnQsTT1hLnJpZ2h0LG09dj13PUM9Qn1GLnB1c2goe3R4MTpwLHR5MTptLHR4MjpiLHR5Mjp2LHgxOngseTE6dyx4MjpNLHkyOkMsbGFiZWxYOkQsbGFiZWxZOkksZ2xXaWR0aDpjLGdsQ29sb3I6ZixnbEJvcmRlckRhc2g6ayxnbEJvcmRlckRhc2hPZmZzZXQ6Uyxyb3RhdGlvbjotMSpBLGxhYmVsOnQsdGV4dEJhc2VsaW5lOlAsdGV4dEFsaWduOlR9KX19fSksZS5lYWNoKEYsZnVuY3Rpb24odCl7aWYodS5kaXNwbGF5JiYobC5zYXZlKCksbC5saW5lV2lkdGg9dC5nbFdpZHRoLGwuc3Ryb2tlU3R5bGU9dC5nbENvbG9yLGwuc2V0TGluZURhc2gmJihsLnNldExpbmVEYXNoKHQuZ2xCb3JkZXJEYXNoKSxsLmxpbmVEYXNoT2Zmc2V0PXQuZ2xCb3JkZXJEYXNoT2Zmc2V0KSxsLmJlZ2luUGF0aCgpLHUuZHJhd1RpY2tzJiYobC5tb3ZlVG8odC50eDEsdC50eTEpLGwubGluZVRvKHQudHgyLHQudHkyKSksdS5kcmF3T25DaGFydEFyZWEmJihsLm1vdmVUbyh0LngxLHQueTEpLGwubGluZVRvKHQueDIsdC55MikpLGwuc3Ryb2tlKCksbC5yZXN0b3JlKCkpLGQuZGlzcGxheSl7bC5zYXZlKCksbC50cmFuc2xhdGUodC5sYWJlbFgsdC5sYWJlbFkpLGwucm90YXRlKHQucm90YXRpb24pLGwuZm9udD14LGwudGV4dEJhc2VsaW5lPXQudGV4dEJhc2VsaW5lLGwudGV4dEFsaWduPXQudGV4dEFsaWduO3ZhciBhPXQubGFiZWw7aWYoZS5pc0FycmF5KGEpKWZvcih2YXIgaT0wLG49LShhLmxlbmd0aC0xKSptKi43NTtpPGEubGVuZ3RoOysraSlsLmZpbGxUZXh0KFwiXCIrYVtpXSwwLG4pLG4rPTEuNSptO2Vsc2UgbC5maWxsVGV4dChhLDAsMCk7bC5yZXN0b3JlKCl9fSksYy5kaXNwbGF5KXt2YXIgTyxCLFc9MDtpZihnKU89aS5sZWZ0KyhpLnJpZ2h0LWkubGVmdCkvMixCPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tLU0vMjppLnRvcCtNLzI7ZWxzZXt2YXIgej1cImxlZnRcIj09PW4ucG9zaXRpb247Tz16P2kubGVmdCtNLzI6aS5yaWdodC1NLzIsQj1pLnRvcCsoaS5ib3R0b20taS50b3ApLzIsVz16Py0uNSpNYXRoLlBJOi41Kk1hdGguUEl9bC5zYXZlKCksbC50cmFuc2xhdGUoTyxCKSxsLnJvdGF0ZShXKSxsLnRleHRBbGlnbj1cImNlbnRlclwiLGwudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsbC5maWxsU3R5bGU9dyxsLmZvbnQ9SSxsLmZpbGxUZXh0KGMubGFiZWxTdHJpbmcsMCwwKSxsLnJlc3RvcmUoKX1pZih1LmRyYXdCb3JkZXIpe2wubGluZVdpZHRoPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUubGluZVdpZHRoLDApLGwuc3Ryb2tlU3R5bGU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5jb2xvciwwKTt2YXIgTj1pLmxlZnQsRT1pLnJpZ2h0LEg9aS50b3AsVT1pLmJvdHRvbSxqPWUuYWxpYXNQaXhlbChsLmxpbmVXaWR0aCk7Zz8oSD1VPVwidG9wXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tOmkudG9wLEgrPWosVSs9aik6KE49RT1cImxlZnRcIj09PW4ucG9zaXRpb24/aS5yaWdodDppLmxlZnQsTis9aixFKz1qKSxsLmJlZ2luUGF0aCgpLGwubW92ZVRvKE4sSCksbC5saW5lVG8oRSxVKSxsLnN0cm9rZSgpfX19fSl9fSx7fV0sMzM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3Quc2NhbGVTZXJ2aWNlPXtjb25zdHJ1Y3RvcnM6e30sZGVmYXVsdHM6e30scmVnaXN0ZXJTY2FsZVR5cGU6ZnVuY3Rpb24odCxhLGkpe3RoaXMuY29uc3RydWN0b3JzW3RdPWEsdGhpcy5kZWZhdWx0c1t0XT1lLmNsb25lKGkpfSxnZXRTY2FsZUNvbnN0cnVjdG9yOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9ycy5oYXNPd25Qcm9wZXJ0eSh0KT90aGlzLmNvbnN0cnVjdG9yc1t0XTp2b2lkIDB9LGdldFNjYWxlRGVmYXVsdHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoYSk/ZS5zY2FsZU1lcmdlKHQuZGVmYXVsdHMuc2NhbGUsdGhpcy5kZWZhdWx0c1thXSk6e319LHVwZGF0ZVNjYWxlRGVmYXVsdHM6ZnVuY3Rpb24odCxhKXt2YXIgaT10aGlzLmRlZmF1bHRzO2kuaGFzT3duUHJvcGVydHkodCkmJihpW3RdPWUuZXh0ZW5kKGlbdF0sYSkpfSxhZGRTY2FsZXNUb0xheW91dDpmdW5jdGlvbihhKXtlLmVhY2goYS5zY2FsZXMsZnVuY3Rpb24oZSl7dC5sYXlvdXRTZXJ2aWNlLmFkZEJveChhLGUpfSl9fX19LHt9XSwzNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5UaWNrcz17Z2VuZXJhdG9yczp7bGluZWFyOmZ1bmN0aW9uKHQsYSl7dmFyIGksbj1bXTtpZih0LnN0ZXBTaXplJiZ0LnN0ZXBTaXplPjApaT10LnN0ZXBTaXplO2Vsc2V7dmFyIG89ZS5uaWNlTnVtKGEubWF4LWEubWluLCExKTtpPWUubmljZU51bShvLyh0Lm1heFRpY2tzLTEpLCEwKX12YXIgcj1NYXRoLmZsb29yKGEubWluL2kpKmksbD1NYXRoLmNlaWwoYS5tYXgvaSkqaTtpZih0Lm1pbiYmdC5tYXgmJnQuc3RlcFNpemUpe3ZhciBzPSh0Lm1heC10Lm1pbikldC5zdGVwU2l6ZT09PTA7cyYmKHI9dC5taW4sbD10Lm1heCl9dmFyIGQ9KGwtcikvaTtkPWUuYWxtb3N0RXF1YWxzKGQsTWF0aC5yb3VuZChkKSxpLzFlMyk/TWF0aC5yb3VuZChkKTpNYXRoLmNlaWwoZCksbi5wdXNoKHZvaWQgMCE9PXQubWluP3QubWluOnIpO2Zvcih2YXIgdT0xO2Q+dTsrK3Upbi5wdXNoKHIrdSppKTtyZXR1cm4gbi5wdXNoKHZvaWQgMCE9PXQubWF4P3QubWF4OmwpLG59LGxvZ2FyaXRobWljOmZ1bmN0aW9uKHQsYSl7Zm9yKHZhciBpPVtdLG49ZS5nZXRWYWx1ZU9yRGVmYXVsdCxvPW4odC5taW4sTWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWluKSkpKTtvPGEubWF4Oyl7aS5wdXNoKG8pO3ZhciByLGw7MD09PW8/KHI9TWF0aC5mbG9vcihlLmxvZzEwKGEubWluTm90WmVybykpLGw9TWF0aC5yb3VuZChhLm1pbk5vdFplcm8vTWF0aC5wb3coMTAscikpKToocj1NYXRoLmZsb29yKGUubG9nMTAobykpLGw9TWF0aC5mbG9vcihvL01hdGgucG93KDEwLHIpKSsxKSwxMD09PWwmJihsPTEsKytyKSxvPWwqTWF0aC5wb3coMTAscil9dmFyIHM9bih0Lm1heCxvKTtyZXR1cm4gaS5wdXNoKHMpLGl9fSxmb3JtYXR0ZXJzOnt2YWx1ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIGUuaXNBcnJheSh0KT90OlwiXCIrdH0sbGluZWFyOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1pLmxlbmd0aD4zP2lbMl0taVsxXTppWzFdLWlbMF07TWF0aC5hYnMobik+MSYmdCE9PU1hdGguZmxvb3IodCkmJihuPXQtTWF0aC5mbG9vcih0KSk7dmFyIG89ZS5sb2cxMChNYXRoLmFicyhuKSkscj1cIlwiO2lmKDAhPT10KXt2YXIgbD0tMSpNYXRoLmZsb29yKG8pO2w9TWF0aC5tYXgoTWF0aC5taW4obCwyMCksMCkscj10LnRvRml4ZWQobCl9ZWxzZSByPVwiMFwiO3JldHVybiByfSxsb2dhcml0aG1pYzpmdW5jdGlvbih0LGEsaSl7dmFyIG49dC9NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAodCkpKTtyZXR1cm4gMD09PXQ/XCIwXCI6MT09PW58fDI9PT1ufHw1PT09bnx8MD09PWF8fGE9PT1pLmxlbmd0aC0xP3QudG9FeHBvbmVudGlhbCgpOlwiXCJ9fX19fSx7fV0sMzU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlPXtkaXNwbGF5OiExLHBvc2l0aW9uOlwidG9wXCIsZnVsbFdpZHRoOiEwLGZvbnRTdHlsZTpcImJvbGRcIixwYWRkaW5nOjEwLHRleHQ6XCJcIn07dmFyIGE9ZS5ub29wO3QuVGl0bGU9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbihhKXt2YXIgaT10aGlzO2UuZXh0ZW5kKGksYSksaS5vcHRpb25zPWUuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwudGl0bGUsYS5vcHRpb25zKSxpLmxlZ2VuZEhpdEJveGVzPVtdfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNoYXJ0Lm9wdGlvbnM7YSYmYS50aXRsZSYmKHRoaXMub3B0aW9ucz1lLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlLGEudGl0bGUpKX0sdXBkYXRlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzO3JldHVybiBpLmJlZm9yZVVwZGF0ZSgpLGkubWF4V2lkdGg9dCxpLm1heEhlaWdodD1lLGkubWFyZ2lucz1hLGkuYmVmb3JlU2V0RGltZW5zaW9ucygpLGkuc2V0RGltZW5zaW9ucygpLGkuYWZ0ZXJTZXREaW1lbnNpb25zKCksaS5iZWZvcmVCdWlsZExhYmVscygpLGkuYnVpbGRMYWJlbHMoKSxpLmFmdGVyQnVpbGRMYWJlbHMoKSxpLmJlZm9yZUZpdCgpLGkuZml0KCksaS5hZnRlckZpdCgpLGkuYWZ0ZXJVcGRhdGUoKSxpLm1pblNpemV9LGFmdGVyVXBkYXRlOmEsYmVmb3JlU2V0RGltZW5zaW9uczphLHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MCx0Lm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9fSxhZnRlclNldERpbWVuc2lvbnM6YSxiZWZvcmVCdWlsZExhYmVsczphLGJ1aWxkTGFiZWxzOmEsYWZ0ZXJCdWlsZExhYmVsczphLGJlZm9yZUZpdDphLGZpdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1lLmdldFZhbHVlT3JEZWZhdWx0LG49YS5vcHRpb25zLG89dC5kZWZhdWx0cy5nbG9iYWwscj1uLmRpc3BsYXksbD1pKG4uZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLHM9YS5taW5TaXplO2EuaXNIb3Jpem9udGFsKCk/KHMud2lkdGg9YS5tYXhXaWR0aCxzLmhlaWdodD1yP2wrMipuLnBhZGRpbmc6MCk6KHMud2lkdGg9cj9sKzIqbi5wYWRkaW5nOjAscy5oZWlnaHQ9YS5tYXhIZWlnaHQpLGEud2lkdGg9cy53aWR0aCxhLmhlaWdodD1zLmhlaWdodH0sYWZ0ZXJGaXQ6YSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMucG9zaXRpb247cmV0dXJuXCJ0b3BcIj09PXR8fFwiYm90dG9tXCI9PT10fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEuY3R4LG49ZS5nZXRWYWx1ZU9yRGVmYXVsdCxvPWEub3B0aW9ucyxyPXQuZGVmYXVsdHMuZ2xvYmFsO2lmKG8uZGlzcGxheSl7dmFyIGwscyxkLHU9bihvLmZvbnRTaXplLHIuZGVmYXVsdEZvbnRTaXplKSxjPW4oby5mb250U3R5bGUsci5kZWZhdWx0Rm9udFN0eWxlKSxoPW4oby5mb250RmFtaWx5LHIuZGVmYXVsdEZvbnRGYW1pbHkpLGY9ZS5mb250U3RyaW5nKHUsYyxoKSxnPTAscD1hLnRvcCxtPWEubGVmdCxiPWEuYm90dG9tLHY9YS5yaWdodDtpLmZpbGxTdHlsZT1uKG8uZm9udENvbG9yLHIuZGVmYXVsdEZvbnRDb2xvciksaS5mb250PWYsYS5pc0hvcml6b250YWwoKT8obD1tKyh2LW0pLzIscz1wKyhiLXApLzIsZD12LW0pOihsPVwibGVmdFwiPT09by5wb3NpdGlvbj9tK3UvMjp2LXUvMixzPXArKGItcCkvMixkPWItcCxnPU1hdGguUEkqKFwibGVmdFwiPT09by5wb3NpdGlvbj8tLjU6LjUpKSxpLnNhdmUoKSxpLnRyYW5zbGF0ZShsLHMpLGkucm90YXRlKGcpLGkudGV4dEFsaWduPVwiY2VudGVyXCIsaS50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixpLmZpbGxUZXh0KG8udGV4dCwwLDAsZCksaS5yZXN0b3JlKCl9fX0pLHQucGx1Z2lucy5yZWdpc3Rlcih7YmVmb3JlSW5pdDpmdW5jdGlvbihlKXt2YXIgYT1lLm9wdGlvbnMsaT1hLnRpdGxlO2kmJihlLnRpdGxlQmxvY2s9bmV3IHQuVGl0bGUoe2N0eDplLmNoYXJ0LmN0eCxvcHRpb25zOmksY2hhcnQ6ZX0pLHQubGF5b3V0U2VydmljZS5hZGRCb3goZSxlLnRpdGxlQmxvY2spKX19KX19LHt9XSwzNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGE9cy5jb2xvcih0KTtyZXR1cm4gYS5hbHBoYShlKmEuYWxwaGEoKSkucmdiYVN0cmluZygpfWZ1bmN0aW9uIGEodCxlKXtyZXR1cm4gZSYmKHMuaXNBcnJheShlKT9BcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0LGUpOnQucHVzaChlKSksdH1mdW5jdGlvbiBpKHQpe3ZhciBlPXQuX3hTY2FsZSxhPXQuX3lTY2FsZXx8dC5fc2NhbGUsaT10Ll9pbmRleCxuPXQuX2RhdGFzZXRJbmRleDtyZXR1cm57eExhYmVsOmU/ZS5nZXRMYWJlbEZvckluZGV4KGksbik6XCJcIix5TGFiZWw6YT9hLmdldExhYmVsRm9ySW5kZXgoaSxuKTpcIlwiLGluZGV4OmksZGF0YXNldEluZGV4Om4seDp0Ll9tb2RlbC54LHk6dC5fbW9kZWwueX19ZnVuY3Rpb24gbihlKXt2YXIgYT10LmRlZmF1bHRzLmdsb2JhbCxpPXMuZ2V0VmFsdWVPckRlZmF1bHQ7cmV0dXJue3hQYWRkaW5nOmUueFBhZGRpbmcseVBhZGRpbmc6ZS55UGFkZGluZyx4QWxpZ246ZS54QWxpZ24seUFsaWduOmUueUFsaWduLGJvZHlGb250Q29sb3I6ZS5ib2R5Rm9udENvbG9yLF9ib2R5Rm9udEZhbWlseTppKGUuYm9keUZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX2JvZHlGb250U3R5bGU6aShlLmJvZHlGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxfYm9keUFsaWduOmUuYm9keUFsaWduLGJvZHlGb250U2l6ZTppKGUuYm9keUZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxib2R5U3BhY2luZzplLmJvZHlTcGFjaW5nLHRpdGxlRm9udENvbG9yOmUudGl0bGVGb250Q29sb3IsX3RpdGxlRm9udEZhbWlseTppKGUudGl0bGVGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF90aXRsZUZvbnRTdHlsZTppKGUudGl0bGVGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSx0aXRsZUZvbnRTaXplOmkoZS50aXRsZUZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxfdGl0bGVBbGlnbjplLnRpdGxlQWxpZ24sdGl0bGVTcGFjaW5nOmUudGl0bGVTcGFjaW5nLHRpdGxlTWFyZ2luQm90dG9tOmUudGl0bGVNYXJnaW5Cb3R0b20sZm9vdGVyRm9udENvbG9yOmUuZm9vdGVyRm9udENvbG9yLF9mb290ZXJGb250RmFtaWx5OmkoZS5mb290ZXJGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF9mb290ZXJGb250U3R5bGU6aShlLmZvb3RlckZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGZvb3RlckZvbnRTaXplOmkoZS5mb290ZXJGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksX2Zvb3RlckFsaWduOmUuZm9vdGVyQWxpZ24sZm9vdGVyU3BhY2luZzplLmZvb3RlclNwYWNpbmcsZm9vdGVyTWFyZ2luVG9wOmUuZm9vdGVyTWFyZ2luVG9wLGNhcmV0U2l6ZTplLmNhcmV0U2l6ZSxjb3JuZXJSYWRpdXM6ZS5jb3JuZXJSYWRpdXMsYmFja2dyb3VuZENvbG9yOmUuYmFja2dyb3VuZENvbG9yLG9wYWNpdHk6MCxsZWdlbmRDb2xvckJhY2tncm91bmQ6ZS5tdWx0aUtleUJhY2tncm91bmQsZGlzcGxheUNvbG9yczplLmRpc3BsYXlDb2xvcnN9fWZ1bmN0aW9uIG8odCxlKXt2YXIgYT10Ll9jaGFydC5jdHgsaT0yKmUueVBhZGRpbmcsbj0wLG89ZS5ib2R5LHI9by5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdCtlLmJlZm9yZS5sZW5ndGgrZS5saW5lcy5sZW5ndGgrZS5hZnRlci5sZW5ndGh9LDApO3IrPWUuYmVmb3JlQm9keS5sZW5ndGgrZS5hZnRlckJvZHkubGVuZ3RoO3ZhciBsPWUudGl0bGUubGVuZ3RoLGQ9ZS5mb290ZXIubGVuZ3RoLHU9ZS50aXRsZUZvbnRTaXplLGM9ZS5ib2R5Rm9udFNpemUsaD1lLmZvb3RlckZvbnRTaXplO2krPWwqdSxpKz1sPyhsLTEpKmUudGl0bGVTcGFjaW5nOjAsaSs9bD9lLnRpdGxlTWFyZ2luQm90dG9tOjAsaSs9cipjLGkrPXI/KHItMSkqZS5ib2R5U3BhY2luZzowLGkrPWQ/ZS5mb290ZXJNYXJnaW5Ub3A6MCxpKz1kKmgsaSs9ZD8oZC0xKSplLmZvb3RlclNwYWNpbmc6MDt2YXIgZj0wLGc9ZnVuY3Rpb24odCl7bj1NYXRoLm1heChuLGEubWVhc3VyZVRleHQodCkud2lkdGgrZil9O3JldHVybiBhLmZvbnQ9cy5mb250U3RyaW5nKHUsZS5fdGl0bGVGb250U3R5bGUsZS5fdGl0bGVGb250RmFtaWx5KSxzLmVhY2goZS50aXRsZSxnKSxhLmZvbnQ9cy5mb250U3RyaW5nKGMsZS5fYm9keUZvbnRTdHlsZSxlLl9ib2R5Rm9udEZhbWlseSkscy5lYWNoKGUuYmVmb3JlQm9keS5jb25jYXQoZS5hZnRlckJvZHkpLGcpLGY9ZS5kaXNwbGF5Q29sb3JzP2MrMjowLHMuZWFjaChvLGZ1bmN0aW9uKHQpe3MuZWFjaCh0LmJlZm9yZSxnKSxzLmVhY2godC5saW5lcyxnKSxzLmVhY2godC5hZnRlcixnKX0pLGY9MCxhLmZvbnQ9cy5mb250U3RyaW5nKGgsZS5fZm9vdGVyRm9udFN0eWxlLGUuX2Zvb3RlckZvbnRGYW1pbHkpLHMuZWFjaChlLmZvb3RlcixnKSxuKz0yKmUueFBhZGRpbmcse3dpZHRoOm4saGVpZ2h0Oml9fWZ1bmN0aW9uIHIodCxlKXt2YXIgYT10Ll9tb2RlbCxpPXQuX2NoYXJ0LG49dC5fY2hhcnRJbnN0YW5jZS5jaGFydEFyZWEsbz1cImNlbnRlclwiLHI9XCJjZW50ZXJcIjthLnk8ZS5oZWlnaHQ/cj1cInRvcFwiOmEueT5pLmhlaWdodC1lLmhlaWdodCYmKHI9XCJib3R0b21cIik7dmFyIGwscyxkLHUsYyxoPShuLmxlZnQrbi5yaWdodCkvMixmPShuLnRvcCtuLmJvdHRvbSkvMjtcImNlbnRlclwiPT09cj8obD1mdW5jdGlvbih0KXtyZXR1cm4gaD49dH0scz1mdW5jdGlvbih0KXtyZXR1cm4gdD5ofSk6KGw9ZnVuY3Rpb24odCl7cmV0dXJuIHQ8PWUud2lkdGgvMn0scz1mdW5jdGlvbih0KXtyZXR1cm4gdD49aS53aWR0aC1lLndpZHRoLzJ9KSxkPWZ1bmN0aW9uKHQpe3JldHVybiB0K2Uud2lkdGg+aS53aWR0aH0sdT1mdW5jdGlvbih0KXtyZXR1cm4gdC1lLndpZHRoPDB9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIGY+PXQ/XCJ0b3BcIjpcImJvdHRvbVwifSxsKGEueCk/KG89XCJsZWZ0XCIsZChhLngpJiYobz1cImNlbnRlclwiLHI9YyhhLnkpKSk6cyhhLngpJiYobz1cInJpZ2h0XCIsdShhLngpJiYobz1cImNlbnRlclwiLHI9YyhhLnkpKSk7dmFyIGc9dC5fb3B0aW9ucztyZXR1cm57eEFsaWduOmcueEFsaWduP2cueEFsaWduOm8seUFsaWduOmcueUFsaWduP2cueUFsaWduOnJ9fWZ1bmN0aW9uIGwodCxlLGEpe3ZhciBpPXQueCxuPXQueSxvPXQuY2FyZXRTaXplLHI9dC5jYXJldFBhZGRpbmcsbD10LmNvcm5lclJhZGl1cyxzPWEueEFsaWduLGQ9YS55QWxpZ24sdT1vK3IsYz1sK3I7cmV0dXJuXCJyaWdodFwiPT09cz9pLT1lLndpZHRoOlwiY2VudGVyXCI9PT1zJiYoaS09ZS53aWR0aC8yKSxcInRvcFwiPT09ZD9uKz11Om4tPVwiYm90dG9tXCI9PT1kP2UuaGVpZ2h0K3U6ZS5oZWlnaHQvMixcImNlbnRlclwiPT09ZD9cImxlZnRcIj09PXM/aSs9dTpcInJpZ2h0XCI9PT1zJiYoaS09dSk6XCJsZWZ0XCI9PT1zP2ktPWM6XCJyaWdodFwiPT09cyYmKGkrPWMpLHt4OmkseTpufX12YXIgcz10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwudG9vbHRpcHM9e2VuYWJsZWQ6ITAsY3VzdG9tOm51bGwsbW9kZTpcIm5lYXJlc3RcIixwb3NpdGlvbjpcImF2ZXJhZ2VcIixpbnRlcnNlY3Q6ITAsYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwwLjgpXCIsdGl0bGVGb250U3R5bGU6XCJib2xkXCIsdGl0bGVTcGFjaW5nOjIsdGl0bGVNYXJnaW5Cb3R0b206Nix0aXRsZUZvbnRDb2xvcjpcIiNmZmZcIix0aXRsZUFsaWduOlwibGVmdFwiLGJvZHlTcGFjaW5nOjIsYm9keUZvbnRDb2xvcjpcIiNmZmZcIixib2R5QWxpZ246XCJsZWZ0XCIsZm9vdGVyRm9udFN0eWxlOlwiYm9sZFwiLGZvb3RlclNwYWNpbmc6Mixmb290ZXJNYXJnaW5Ub3A6Nixmb290ZXJGb250Q29sb3I6XCIjZmZmXCIsZm9vdGVyQWxpZ246XCJsZWZ0XCIseVBhZGRpbmc6Nix4UGFkZGluZzo2LGNhcmV0U2l6ZTo1LGNvcm5lclJhZGl1czo2LG11bHRpS2V5QmFja2dyb3VuZDpcIiNmZmZcIixkaXNwbGF5Q29sb3JzOiEwLGNhbGxiYWNrczp7YmVmb3JlVGl0bGU6cy5ub29wLHRpdGxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9XCJcIixpPWUubGFiZWxzLG49aT9pLmxlbmd0aDowO2lmKHQubGVuZ3RoPjApe3ZhciBvPXRbMF07by54TGFiZWw/YT1vLnhMYWJlbDpuPjAmJm8uaW5kZXg8biYmKGE9aVtvLmluZGV4XSl9cmV0dXJuIGF9LGFmdGVyVGl0bGU6cy5ub29wLGJlZm9yZUJvZHk6cy5ub29wLGJlZm9yZUxhYmVsOnMubm9vcCxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiO3JldHVybiBhK1wiOiBcIit0LnlMYWJlbH0sbGFiZWxDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZ2V0RGF0YXNldE1ldGEodC5kYXRhc2V0SW5kZXgpLGk9YS5kYXRhW3QuaW5kZXhdLG49aS5fdmlldztyZXR1cm57Ym9yZGVyQ29sb3I6bi5ib3JkZXJDb2xvcixiYWNrZ3JvdW5kQ29sb3I6bi5iYWNrZ3JvdW5kQ29sb3J9fSxhZnRlckxhYmVsOnMubm9vcCxhZnRlckJvZHk6cy5ub29wLGJlZm9yZUZvb3RlcjpzLm5vb3AsZm9vdGVyOnMubm9vcCxhZnRlckZvb3RlcjpzLm5vb3B9fSx0LlRvb2x0aXA9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX21vZGVsPW4odGhpcy5fb3B0aW9ucyl9LGdldFRpdGxlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX29wdGlvbnMsaT1lLmNhbGxiYWNrcyxuPWkuYmVmb3JlVGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLG89aS50aXRsZS5hcHBseSh0LGFyZ3VtZW50cykscj1pLmFmdGVyVGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLGw9W107cmV0dXJuIGw9YShsLG4pLGw9YShsLG8pLGw9YShsLHIpfSxnZXRCZWZvcmVCb2R5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fb3B0aW9ucy5jYWxsYmFja3MuYmVmb3JlQm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHMuaXNBcnJheSh0KT90OnZvaWQgMCE9PXQ/W3RdOltdfSxnZXRCb2R5OmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcyxuPWkuX29wdGlvbnMuY2FsbGJhY2tzLG89W107cmV0dXJuIHMuZWFjaCh0LGZ1bmN0aW9uKHQpe3ZhciByPXtiZWZvcmU6W10sbGluZXM6W10sYWZ0ZXI6W119O2Eoci5iZWZvcmUsbi5iZWZvcmVMYWJlbC5jYWxsKGksdCxlKSksYShyLmxpbmVzLG4ubGFiZWwuY2FsbChpLHQsZSkpLGEoci5hZnRlcixuLmFmdGVyTGFiZWwuY2FsbChpLHQsZSkpLG8ucHVzaChyKX0pLG99LGdldEFmdGVyQm9keTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX29wdGlvbnMuY2FsbGJhY2tzLmFmdGVyQm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHMuaXNBcnJheSh0KT90OnZvaWQgMCE9PXQ/W3RdOltdfSxnZXRGb290ZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5fb3B0aW9ucy5jYWxsYmFja3MsaT1lLmJlZm9yZUZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cyksbj1lLmZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cyksbz1lLmFmdGVyRm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxyPVtdO3JldHVybiByPWEocixpKSxyPWEocixuKSxyPWEocixvKX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciBhLGQsdT10aGlzLGM9dS5fb3B0aW9ucyxoPXUuX21vZGVsLGY9dS5fbW9kZWw9bihjKSxnPXUuX2FjdGl2ZSxwPXUuX2RhdGEsbT11Ll9jaGFydEluc3RhbmNlLGI9e3hBbGlnbjpoLnhBbGlnbix5QWxpZ246aC55QWxpZ259LHY9e3g6aC54LHk6aC55fSx4PXt3aWR0aDpoLndpZHRoLGhlaWdodDpoLmhlaWdodH0seT17eDpoLmNhcmV0WCx5OmguY2FyZXRZfTtpZihnLmxlbmd0aCl7Zi5vcGFjaXR5PTE7dmFyIGs9W107eT10LlRvb2x0aXAucG9zaXRpb25lcnNbYy5wb3NpdGlvbl0oZyx1Ll9ldmVudFBvc2l0aW9uKTt2YXIgUz1bXTtmb3IoYT0wLGQ9Zy5sZW5ndGg7ZD5hOysrYSlTLnB1c2goaShnW2FdKSk7Yy5maWx0ZXImJihTPVMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBjLmZpbHRlcih0LHApfSkpLGMuaXRlbVNvcnQmJihTPVMuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiBjLml0ZW1Tb3J0KHQsZSxwKX0pKSxzLmVhY2goUyxmdW5jdGlvbih0KXtrLnB1c2goYy5jYWxsYmFja3MubGFiZWxDb2xvci5jYWxsKHUsdCxtKSl9KSxmLnRpdGxlPXUuZ2V0VGl0bGUoUyxwKSxmLmJlZm9yZUJvZHk9dS5nZXRCZWZvcmVCb2R5KFMscCksZi5ib2R5PXUuZ2V0Qm9keShTLHApLGYuYWZ0ZXJCb2R5PXUuZ2V0QWZ0ZXJCb2R5KFMscCksZi5mb290ZXI9dS5nZXRGb290ZXIoUyxwKSxmLng9TWF0aC5yb3VuZCh5LngpLGYueT1NYXRoLnJvdW5kKHkueSksZi5jYXJldFBhZGRpbmc9cy5nZXRWYWx1ZU9yRGVmYXVsdCh5LnBhZGRpbmcsMiksZi5sYWJlbENvbG9ycz1rLGYuZGF0YVBvaW50cz1TLHg9byh0aGlzLGYpLGI9cih0aGlzLHgpLHY9bChmLHgsYil9ZWxzZSBmLm9wYWNpdHk9MDtyZXR1cm4gZi54QWxpZ249Yi54QWxpZ24sZi55QWxpZ249Yi55QWxpZ24sZi54PXYueCxmLnk9di55LGYud2lkdGg9eC53aWR0aCxmLmhlaWdodD14LmhlaWdodCxmLmNhcmV0WD15LngsZi5jYXJldFk9eS55LHUuX21vZGVsPWYsZSYmYy5jdXN0b20mJmMuY3VzdG9tLmNhbGwodSxmKSx1fSxkcmF3Q2FyZXQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuLG8scixsLHMsZCx1PXRoaXMuX3ZpZXcsYz10aGlzLl9jaGFydC5jdHgsaD11LmNhcmV0U2l6ZSxmPXUuY29ybmVyUmFkaXVzLGc9dS54QWxpZ24scD11LnlBbGlnbixtPXQueCxiPXQueSx2PWEud2lkdGgseD1hLmhlaWdodDtcImNlbnRlclwiPT09cD8oXCJsZWZ0XCI9PT1nPyhuPW0sbz1uLWgscj1uKToobj1tK3Ysbz1uK2gscj1uKSxzPWIreC8yLGw9cy1oLGQ9cytoKTooXCJsZWZ0XCI9PT1nPyhuPW0rZixvPW4raCxyPW8raCk6XCJyaWdodFwiPT09Zz8obj1tK3YtZixvPW4taCxyPW8taCk6KG89bSt2LzIsbj1vLWgscj1vK2gpLFwidG9wXCI9PT1wPyhsPWIscz1sLWgsZD1sKToobD1iK3gscz1sK2gsZD1sKSksYy5maWxsU3R5bGU9ZSh1LmJhY2tncm91bmRDb2xvcixpKSxjLmJlZ2luUGF0aCgpLGMubW92ZVRvKG4sbCksYy5saW5lVG8obyxzKSxjLmxpbmVUbyhyLGQpLGMuY2xvc2VQYXRoKCksYy5maWxsKCl9LGRyYXdUaXRsZTpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLnRpdGxlO2lmKG8ubGVuZ3RoKXtpLnRleHRBbGlnbj1hLl90aXRsZUFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCI7dmFyIHI9YS50aXRsZUZvbnRTaXplLGw9YS50aXRsZVNwYWNpbmc7aS5maWxsU3R5bGU9ZShhLnRpdGxlRm9udENvbG9yLG4pLGkuZm9udD1zLmZvbnRTdHJpbmcocixhLl90aXRsZUZvbnRTdHlsZSxhLl90aXRsZUZvbnRGYW1pbHkpO3ZhciBkLHU7Zm9yKGQ9MCx1PW8ubGVuZ3RoO3U+ZDsrK2QpaS5maWxsVGV4dChvW2RdLHQueCx0LnkpLHQueSs9citsLGQrMT09PW8ubGVuZ3RoJiYodC55Kz1hLnRpdGxlTWFyZ2luQm90dG9tLWwpfX0sZHJhd0JvZHk6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS5ib2R5Rm9udFNpemUscj1hLmJvZHlTcGFjaW5nLGw9YS5ib2R5O2kudGV4dEFsaWduPWEuX2JvZHlBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiO3ZhciBkPWUoYS5ib2R5Rm9udENvbG9yLG4pO2kuZmlsbFN0eWxlPWQsaS5mb250PXMuZm9udFN0cmluZyhvLGEuX2JvZHlGb250U3R5bGUsYS5fYm9keUZvbnRGYW1pbHkpO3ZhciB1PTAsYz1mdW5jdGlvbihlKXtpLmZpbGxUZXh0KGUsdC54K3UsdC55KSx0LnkrPW8rcn07cy5lYWNoKGEuYmVmb3JlQm9keSxjKTt2YXIgaD1hLmRpc3BsYXlDb2xvcnM7dT1oP28rMjowLHMuZWFjaChsLGZ1bmN0aW9uKHIsbCl7cy5lYWNoKHIuYmVmb3JlLGMpLHMuZWFjaChyLmxpbmVzLGZ1bmN0aW9uKHIpe2gmJihpLmZpbGxTdHlsZT1lKGEubGVnZW5kQ29sb3JCYWNrZ3JvdW5kLG4pLGkuZmlsbFJlY3QodC54LHQueSxvLG8pLGkuc3Ryb2tlU3R5bGU9ZShhLmxhYmVsQ29sb3JzW2xdLmJvcmRlckNvbG9yLG4pLGkuc3Ryb2tlUmVjdCh0LngsdC55LG8sbyksaS5maWxsU3R5bGU9ZShhLmxhYmVsQ29sb3JzW2xdLmJhY2tncm91bmRDb2xvcixuKSxpLmZpbGxSZWN0KHQueCsxLHQueSsxLG8tMixvLTIpLGkuZmlsbFN0eWxlPWQpLGMocil9KSxzLmVhY2goci5hZnRlcixjKX0pLHU9MCxzLmVhY2goYS5hZnRlckJvZHksYyksdC55LT1yfSxkcmF3Rm9vdGVyOmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEuZm9vdGVyO28ubGVuZ3RoJiYodC55Kz1hLmZvb3Rlck1hcmdpblRvcCxpLnRleHRBbGlnbj1hLl9mb290ZXJBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiLGkuZmlsbFN0eWxlPWUoYS5mb290ZXJGb250Q29sb3IsbiksaS5mb250PXMuZm9udFN0cmluZyhhLmZvb3RlckZvbnRTaXplLGEuX2Zvb3RlckZvbnRTdHlsZSxhLl9mb290ZXJGb250RmFtaWx5KSxzLmVhY2gobyxmdW5jdGlvbihlKXtpLmZpbGxUZXh0KGUsdC54LHQueSksdC55Kz1hLmZvb3RlckZvbnRTaXplK2EuZm9vdGVyU3BhY2luZ30pKX0sZHJhd0JhY2tncm91bmQ6ZnVuY3Rpb24odCxhLGksbixvKXtpLmZpbGxTdHlsZT1lKGEuYmFja2dyb3VuZENvbG9yLG8pLHMuZHJhd1JvdW5kZWRSZWN0YW5nbGUoaSx0LngsdC55LG4ud2lkdGgsbi5oZWlnaHQsYS5jb3JuZXJSYWRpdXMpLGkuZmlsbCgpfSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY2hhcnQuY3R4LGU9dGhpcy5fdmlldztpZigwIT09ZS5vcGFjaXR5KXt2YXIgYT17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LGk9e3g6ZS54LHk6ZS55fSxuPU1hdGguYWJzKGUub3BhY2l0eTwuMDAxKT8wOmUub3BhY2l0eTt0aGlzLl9vcHRpb25zLmVuYWJsZWQmJih0aGlzLmRyYXdCYWNrZ3JvdW5kKGksZSx0LGEsbiksdGhpcy5kcmF3Q2FyZXQoaSxhLG4pLGkueCs9ZS54UGFkZGluZyxpLnkrPWUueVBhZGRpbmcsdGhpcy5kcmF3VGl0bGUoaSxlLHQsbiksdGhpcy5kcmF3Qm9keShpLGUsdCxuKSx0aGlzLmRyYXdGb290ZXIoaSxlLHQsbikpfX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuX29wdGlvbnMsaT0hMTtpZihlLl9sYXN0QWN0aXZlPWUuX2xhc3RBY3RpdmV8fFtdLFwibW91c2VvdXRcIj09PXQudHlwZT9lLl9hY3RpdmU9W106ZS5fYWN0aXZlPWUuX2NoYXJ0SW5zdGFuY2UuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSh0LGEubW9kZSxhKSxpPSFzLmFycmF5RXF1YWxzKGUuX2FjdGl2ZSxlLl9sYXN0QWN0aXZlKSxlLl9sYXN0QWN0aXZlPWUuX2FjdGl2ZSxhLmVuYWJsZWR8fGEuY3VzdG9tKXtlLl9ldmVudFBvc2l0aW9uPXMuZ2V0UmVsYXRpdmVQb3NpdGlvbih0LGUuX2NoYXJ0KTt2YXIgbj1lLl9tb2RlbDtlLnVwZGF0ZSghMCksZS5waXZvdCgpLGl8PW4ueCE9PWUuX21vZGVsLnh8fG4ueSE9PWUuX21vZGVsLnl9cmV0dXJuIGl9fSksdC5Ub29sdGlwLnBvc2l0aW9uZXJzPXthdmVyYWdlOmZ1bmN0aW9uKHQpe2lmKCF0Lmxlbmd0aClyZXR1cm4hMTt2YXIgZSxhLGk9MCxuPTAsbz0wO2ZvcihlPTAsYT10Lmxlbmd0aDthPmU7KytlKXt2YXIgcj10W2VdO2lmKHImJnIuaGFzVmFsdWUoKSl7dmFyIGw9ci50b29sdGlwUG9zaXRpb24oKTtpKz1sLngsbis9bC55LCsrb319cmV0dXJue3g6TWF0aC5yb3VuZChpL28pLHk6TWF0aC5yb3VuZChuL28pfX0sbmVhcmVzdDpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUueCxyPWUueSxsPU51bWJlci5QT1NJVElWRV9JTkZJTklUWTtmb3IoaT0wLG49dC5sZW5ndGg7bj5pOysraSl7dmFyIGQ9dFtpXTtpZihkJiZkLmhhc1ZhbHVlKCkpe3ZhciB1PWQuZ2V0Q2VudGVyUG9pbnQoKSxjPXMuZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKGUsdSk7bD5jJiYobD1jLGE9ZCl9fWlmKGEpe3ZhciBoPWEudG9vbHRpcFBvc2l0aW9uKCk7bz1oLngscj1oLnl9cmV0dXJue3g6byx5OnJ9fX19fSx7fV0sMzc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWw7YS5lbGVtZW50cy5hcmM9e2JhY2tncm91bmRDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJDb2xvcjpcIiNmZmZcIixib3JkZXJXaWR0aDoyfSx0LmVsZW1lbnRzLkFyYz10LkVsZW1lbnQuZXh0ZW5kKHtpbkxhYmVsUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueCwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhvdmVyUmFkaXVzLDIpOiExfSxpblJhbmdlOmZ1bmN0aW9uKHQsYSl7dmFyIGk9dGhpcy5fdmlldztpZihpKXtmb3IodmFyIG49ZS5nZXRBbmdsZUZyb21Qb2ludChpLHt4OnQseTphfSksbz1uLmFuZ2xlLHI9bi5kaXN0YW5jZSxsPWkuc3RhcnRBbmdsZSxzPWkuZW5kQW5nbGU7bD5zOylzKz0yKk1hdGguUEk7Zm9yKDtvPnM7KW8tPTIqTWF0aC5QSTtmb3IoO2w+bzspbys9MipNYXRoLlBJO3ZhciBkPW8+PWwmJnM+PW8sdT1yPj1pLmlubmVyUmFkaXVzJiZyPD1pLm91dGVyUmFkaXVzO3JldHVybiBkJiZ1fXJldHVybiExfSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXcsZT0odC5zdGFydEFuZ2xlK3QuZW5kQW5nbGUpLzIsYT0odC5pbm5lclJhZGl1cyt0Lm91dGVyUmFkaXVzKS8yO3JldHVybnt4OnQueCtNYXRoLmNvcyhlKSphLHk6dC55K01hdGguc2luKGUpKmF9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gTWF0aC5QSSooKHQuZW5kQW5nbGUtdC5zdGFydEFuZ2xlKS8oMipNYXRoLlBJKSkqKE1hdGgucG93KHQub3V0ZXJSYWRpdXMsMiktTWF0aC5wb3codC5pbm5lclJhZGl1cywyKSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXcsZT10LnN0YXJ0QW5nbGUrKHQuZW5kQW5nbGUtdC5zdGFydEFuZ2xlKS8yLGE9KHQub3V0ZXJSYWRpdXMtdC5pbm5lclJhZGl1cykvMit0LmlubmVyUmFkaXVzO3JldHVybnt4OnQueCtNYXRoLmNvcyhlKSphLHk6dC55K01hdGguc2luKGUpKmF9fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY2hhcnQuY3R4LGU9dGhpcy5fdmlldyxhPWUuc3RhcnRBbmdsZSxpPWUuZW5kQW5nbGU7dC5iZWdpblBhdGgoKSx0LmFyYyhlLngsZS55LGUub3V0ZXJSYWRpdXMsYSxpKSx0LmFyYyhlLngsZS55LGUuaW5uZXJSYWRpdXMsaSxhLCEwKSx0LmNsb3NlUGF0aCgpLHQuc3Ryb2tlU3R5bGU9ZS5ib3JkZXJDb2xvcix0LmxpbmVXaWR0aD1lLmJvcmRlcldpZHRoLHQuZmlsbFN0eWxlPWUuYmFja2dyb3VuZENvbG9yLHQuZmlsbCgpLHQubGluZUpvaW49XCJiZXZlbFwiLGUuYm9yZGVyV2lkdGgmJnQuc3Ryb2tlKCl9fSl9fSx7fV0sMzg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWw7dC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMubGluZT17dGVuc2lvbjouNCxiYWNrZ3JvdW5kQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyV2lkdGg6Myxib3JkZXJDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJDYXBTdHlsZTpcImJ1dHRcIixib3JkZXJEYXNoOltdLGJvcmRlckRhc2hPZmZzZXQ6MCxib3JkZXJKb2luU3R5bGU6XCJtaXRlclwiLGNhcEJlemllclBvaW50czohMCxmaWxsOiEwfSx0LmVsZW1lbnRzLkxpbmU9dC5FbGVtZW50LmV4dGVuZCh7ZHJhdzpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2YXIgYT1lLl92aWV3O2UuX3ZpZXcuc3RlcHBlZExpbmU9PT0hMD8ocy5saW5lVG8oYS54LHQuX3ZpZXcueSkscy5saW5lVG8oYS54LGEueSkpOjA9PT1lLl92aWV3LnRlbnNpb24/cy5saW5lVG8oYS54LGEueSk6cy5iZXppZXJDdXJ2ZVRvKHQuX3ZpZXcuY29udHJvbFBvaW50TmV4dFgsdC5fdmlldy5jb250cm9sUG9pbnROZXh0WSxhLmNvbnRyb2xQb2ludFByZXZpb3VzWCxhLmNvbnRyb2xQb2ludFByZXZpb3VzWSxhLngsYS55KX12YXIgaT10aGlzLG49aS5fdmlldyxvPW4uc3BhbkdhcHMscj1uLnNjYWxlWmVybyxsPWkuX2xvb3A7bHx8KFwidG9wXCI9PT1uLmZpbGw/cj1uLnNjYWxlVG9wOlwiYm90dG9tXCI9PT1uLmZpbGwmJihyPW4uc2NhbGVCb3R0b20pKTt2YXIgcz1pLl9jaGFydC5jdHg7cy5zYXZlKCk7dmFyIGQ9aS5fY2hpbGRyZW4uc2xpY2UoKSx1PS0xO2wmJmQubGVuZ3RoJiZkLnB1c2goZFswXSk7dmFyIGMsaCxmLGc7aWYoZC5sZW5ndGgmJm4uZmlsbCl7Zm9yKHMuYmVnaW5QYXRoKCksYz0wO2M8ZC5sZW5ndGg7KytjKWg9ZFtjXSxmPWUucHJldmlvdXNJdGVtKGQsYyksZz1oLl92aWV3LDA9PT1jPyhsP3MubW92ZVRvKHIueCxyLnkpOnMubW92ZVRvKGcueCxyKSxnLnNraXB8fCh1PWMscy5saW5lVG8oZy54LGcueSkpKTooZj0tMT09PXU/ZjpkW3VdLGcuc2tpcD9vfHx1IT09Yy0xfHwobD9zLmxpbmVUbyhyLngsci55KTpzLmxpbmVUbyhmLl92aWV3LngscikpOih1IT09Yy0xP28mJi0xIT09dT90KGYsaCk6bD9zLmxpbmVUbyhnLngsZy55KToocy5saW5lVG8oZy54LHIpLHMubGluZVRvKGcueCxnLnkpKTp0KGYsaCksdT1jKSk7bHx8LTE9PT11fHxzLmxpbmVUbyhkW3VdLl92aWV3Lngscikscy5maWxsU3R5bGU9bi5iYWNrZ3JvdW5kQ29sb3J8fGEuZGVmYXVsdENvbG9yLHMuY2xvc2VQYXRoKCkscy5maWxsKCl9dmFyIHA9YS5lbGVtZW50cy5saW5lO2ZvcihzLmxpbmVDYXA9bi5ib3JkZXJDYXBTdHlsZXx8cC5ib3JkZXJDYXBTdHlsZSxzLnNldExpbmVEYXNoJiZzLnNldExpbmVEYXNoKG4uYm9yZGVyRGFzaHx8cC5ib3JkZXJEYXNoKSxzLmxpbmVEYXNoT2Zmc2V0PW4uYm9yZGVyRGFzaE9mZnNldHx8cC5ib3JkZXJEYXNoT2Zmc2V0LHMubGluZUpvaW49bi5ib3JkZXJKb2luU3R5bGV8fHAuYm9yZGVySm9pblN0eWxlLHMubGluZVdpZHRoPW4uYm9yZGVyV2lkdGh8fHAuYm9yZGVyV2lkdGgscy5zdHJva2VTdHlsZT1uLmJvcmRlckNvbG9yfHxhLmRlZmF1bHRDb2xvcixzLmJlZ2luUGF0aCgpLHU9LTEsYz0wO2M8ZC5sZW5ndGg7KytjKWg9ZFtjXSxmPWUucHJldmlvdXNJdGVtKGQsYyksZz1oLl92aWV3LDA9PT1jP2cuc2tpcHx8KHMubW92ZVRvKGcueCxnLnkpLHU9Yyk6KGY9LTE9PT11P2Y6ZFt1XSxnLnNraXB8fCh1IT09Yy0xJiYhb3x8LTE9PT11P3MubW92ZVRvKGcueCxnLnkpOnQoZixoKSx1PWMpKTtzLnN0cm9rZSgpLHMucmVzdG9yZSgpfX0pfX0se31dLDM5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueCwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhpdFJhZGl1cywyKTohMX1mdW5jdGlvbiBhKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLnksMik8TWF0aC5wb3coZS5yYWRpdXMrZS5oaXRSYWRpdXMsMik6ITF9dmFyIGk9dC5oZWxwZXJzLG49dC5kZWZhdWx0cy5nbG9iYWwsbz1uLmRlZmF1bHRDb2xvcjtuLmVsZW1lbnRzLnBvaW50PXtyYWRpdXM6Myxwb2ludFN0eWxlOlwiY2lyY2xlXCIsYmFja2dyb3VuZENvbG9yOm8sYm9yZGVyV2lkdGg6MSxib3JkZXJDb2xvcjpvLGhpdFJhZGl1czoxLGhvdmVyUmFkaXVzOjQsaG92ZXJCb3JkZXJXaWR0aDoxfSx0LmVsZW1lbnRzLlBvaW50PXQuRWxlbWVudC5leHRlbmQoe2luUmFuZ2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLl92aWV3O3JldHVybiBhP01hdGgucG93KHQtYS54LDIpK01hdGgucG93KGUtYS55LDIpPE1hdGgucG93KGEuaGl0UmFkaXVzK2EucmFkaXVzLDIpOiExfSxpbkxhYmVsUmFuZ2U6ZSxpblhSYW5nZTplLGluWVJhbmdlOmEsZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueX19LGdldEFyZWE6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5QSSpNYXRoLnBvdyh0aGlzLl92aWV3LnJhZGl1cywyKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0LnkscGFkZGluZzp0LnJhZGl1cyt0LmJvcmRlcldpZHRofX0sZHJhdzpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3ZpZXcsYT10aGlzLl9jaGFydC5jdHgscj1lLnBvaW50U3R5bGUsbD1lLnJhZGl1cyxzPWUueCxkPWUueTtlLnNraXB8fChhLnN0cm9rZVN0eWxlPWUuYm9yZGVyQ29sb3J8fG8sYS5saW5lV2lkdGg9aS5nZXRWYWx1ZU9yRGVmYXVsdChlLmJvcmRlcldpZHRoLG4uZWxlbWVudHMucG9pbnQuYm9yZGVyV2lkdGgpLGEuZmlsbFN0eWxlPWUuYmFja2dyb3VuZENvbG9yfHxvLHQuY2FudmFzSGVscGVycy5kcmF3UG9pbnQoYSxyLGwscyxkKSl9fSl9fSx7fV0sNDA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdm9pZCAwIT09dC5fdmlldy53aWR0aH1mdW5jdGlvbiBhKHQpe3ZhciBhLGksbixvLHI9dC5fdmlldztpZihlKHQpKXt2YXIgbD1yLndpZHRoLzI7YT1yLngtbCxpPXIueCtsLG49TWF0aC5taW4oci55LHIuYmFzZSksbz1NYXRoLm1heChyLnksci5iYXNlKX1lbHNle3ZhciBzPXIuaGVpZ2h0LzI7YT1NYXRoLm1pbihyLngsci5iYXNlKSxpPU1hdGgubWF4KHIueCxyLmJhc2UpLG49ci55LXMsbz1yLnkrc31yZXR1cm57bGVmdDphLHRvcDpuLHJpZ2h0OmksYm90dG9tOm99fXZhciBpPXQuZGVmYXVsdHMuZ2xvYmFsO2kuZWxlbWVudHMucmVjdGFuZ2xlPXtiYWNrZ3JvdW5kQ29sb3I6aS5kZWZhdWx0Q29sb3IsYm9yZGVyV2lkdGg6MCxib3JkZXJDb2xvcjppLmRlZmF1bHRDb2xvcixib3JkZXJTa2lwcGVkOlwiYm90dG9tXCJ9LHQuZWxlbWVudHMuUmVjdGFuZ2xlPXQuRWxlbWVudC5leHRlbmQoe2RyYXc6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBzWyh1K3QpJTRdfXZhciBlPXRoaXMuX2NoYXJ0LmN0eCxhPXRoaXMuX3ZpZXcsaT1hLndpZHRoLzIsbj1hLngtaSxvPWEueCtpLHI9YS5iYXNlLShhLmJhc2UtYS55KSxsPWEuYm9yZGVyV2lkdGgvMjthLmJvcmRlcldpZHRoJiYobis9bCxvLT1sLHIrPWwpLGUuYmVnaW5QYXRoKCksZS5maWxsU3R5bGU9YS5iYWNrZ3JvdW5kQ29sb3IsZS5zdHJva2VTdHlsZT1hLmJvcmRlckNvbG9yLGUubGluZVdpZHRoPWEuYm9yZGVyV2lkdGg7dmFyIHM9W1tuLGEuYmFzZV0sW24scl0sW28scl0sW28sYS5iYXNlXV0sZD1bXCJib3R0b21cIixcImxlZnRcIixcInRvcFwiLFwicmlnaHRcIl0sdT1kLmluZGV4T2YoYS5ib3JkZXJTa2lwcGVkLDApOy0xPT09dSYmKHU9MCk7dmFyIGM9dCgwKTtlLm1vdmVUbyhjWzBdLGNbMV0pO2Zvcih2YXIgaD0xOzQ+aDtoKyspYz10KGgpLGUubGluZVRvKGNbMF0sY1sxXSk7ZS5maWxsKCksYS5ib3JkZXJXaWR0aCYmZS5zdHJva2UoKX0saGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gdC5iYXNlLXQueX0saW5SYW5nZTpmdW5jdGlvbih0LGUpe3ZhciBpPSExO2lmKHRoaXMuX3ZpZXcpe3ZhciBuPWEodGhpcyk7aT10Pj1uLmxlZnQmJnQ8PW4ucmlnaHQmJmU+PW4udG9wJiZlPD1uLmJvdHRvbX1yZXR1cm4gaX0saW5MYWJlbFJhbmdlOmZ1bmN0aW9uKHQsaSl7dmFyIG49dGhpcztpZighbi5fdmlldylyZXR1cm4hMTt2YXIgbz0hMSxyPWEobik7cmV0dXJuIG89ZShuKT90Pj1yLmxlZnQmJnQ8PXIucmlnaHQ6aT49ci50b3AmJmk8PXIuYm90dG9tfSxpblhSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpO3JldHVybiB0Pj1lLmxlZnQmJnQ8PWUucmlnaHR9LGluWVJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPWEodGhpcyk7cmV0dXJuIHQ+PWUudG9wJiZ0PD1lLmJvdHRvbX0sZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdCxhLGk9dGhpcy5fdmlldztyZXR1cm4gZSh0aGlzKT8odD1pLngsYT0oaS55K2kuYmFzZSkvMik6KHQ9KGkueCtpLmJhc2UpLzIsYT1pLnkpLHt4OnQseTphfX0sZ2V0QXJlYTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIHQud2lkdGgqTWF0aC5hYnModC55LXQuYmFzZSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55fX19KX19LHt9XSw0MTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJib3R0b21cIn0saT10LlNjYWxlLmV4dGVuZCh7Z2V0TGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jaGFydC5kYXRhO3JldHVybih0aGlzLmlzSG9yaXpvbnRhbCgpP3QueExhYmVsczp0LnlMYWJlbHMpfHx0LmxhYmVsc30sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10LmdldExhYmVscygpO3QubWluSW5kZXg9MCx0Lm1heEluZGV4PWEubGVuZ3RoLTE7dmFyIGk7dm9pZCAwIT09dC5vcHRpb25zLnRpY2tzLm1pbiYmKGk9ZS5pbmRleE9mKGEsdC5vcHRpb25zLnRpY2tzLm1pbiksdC5taW5JbmRleD0tMSE9PWk/aTp0Lm1pbkluZGV4KSx2b2lkIDAhPT10Lm9wdGlvbnMudGlja3MubWF4JiYoaT1lLmluZGV4T2YoYSx0Lm9wdGlvbnMudGlja3MubWF4KSx0Lm1heEluZGV4PS0xIT09aT9pOnQubWF4SW5kZXgpLHQubWluPWFbdC5taW5JbmRleF0sdC5tYXg9YVt0Lm1heEluZGV4XX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldExhYmVscygpO3QudGlja3M9MD09PXQubWluSW5kZXgmJnQubWF4SW5kZXg9PT1lLmxlbmd0aC0xP2U6ZS5zbGljZSh0Lm1pbkluZGV4LHQubWF4SW5kZXgrMSl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5jaGFydC5kYXRhLG49YS5pc0hvcml6b250YWwoKTtyZXR1cm4gaS54TGFiZWxzJiZufHxpLnlMYWJlbHMmJiFuP2EuZ2V0UmlnaHRWYWx1ZShpLmRhdGFzZXRzW2VdLmRhdGFbdF0pOmEudGlja3NbdF19LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dGhpcyxvPU1hdGgubWF4KG4ubWF4SW5kZXgrMS1uLm1pbkluZGV4LShuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpO2lmKHZvaWQgMCE9PXQmJmlzTmFOKGUpKXt2YXIgcj1uLmdldExhYmVscygpLGw9ci5pbmRleE9mKHQpO2U9LTEhPT1sP2w6ZX1pZihuLmlzSG9yaXpvbnRhbCgpKXt2YXIgcz1uLndpZHRoLShuLnBhZGRpbmdMZWZ0K24ucGFkZGluZ1JpZ2h0KSxkPXMvbyx1PWQqKGUtbi5taW5JbmRleCkrbi5wYWRkaW5nTGVmdDtyZXR1cm4obi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJml8fG4ubWF4SW5kZXg9PT1uLm1pbkluZGV4JiZpKSYmKHUrPWQvMiksXHJcbm4ubGVmdCtNYXRoLnJvdW5kKHUpfXZhciBjPW4uaGVpZ2h0LShuLnBhZGRpbmdUb3Arbi5wYWRkaW5nQm90dG9tKSxoPWMvbyxmPWgqKGUtbi5taW5JbmRleCkrbi5wYWRkaW5nVG9wO3JldHVybiBuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmaSYmKGYrPWgvMiksbi50b3ArTWF0aC5yb3VuZChmKX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tzW3RdLHQrdGhpcy5taW5JbmRleCxudWxsLGUpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPU1hdGgubWF4KGEudGlja3MubGVuZ3RoLShhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpLG49YS5pc0hvcml6b250YWwoKSxvPW4/YS53aWR0aC0oYS5wYWRkaW5nTGVmdCthLnBhZGRpbmdSaWdodCk6YS5oZWlnaHQtKGEucGFkZGluZ1RvcCthLnBhZGRpbmdCb3R0b20pLHI9by9pO3JldHVybiB0LT1uP2EubGVmdDphLnRvcCxhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmKHQtPXIvMiksdC09bj9hLnBhZGRpbmdMZWZ0OmEucGFkZGluZ1RvcCxlPTA+PXQ/MDpNYXRoLnJvdW5kKHQvcil9LGdldEJhc2VQaXhlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmJvdHRvbX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImNhdGVnb3J5XCIsaSxhKX19LHt9XSw0MjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJsZWZ0XCIsdGlja3M6e2NhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5saW5lYXJ9fSxpPXQuTGluZWFyU2NhbGVCYXNlLmV4dGVuZCh7ZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIGw/dC54QXhpc0lEPT09YS5pZDp0LnlBeGlzSUQ9PT1hLmlkfXZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1hLmNoYXJ0LG89bi5kYXRhLHI9by5kYXRhc2V0cyxsPWEuaXNIb3Jpem9udGFsKCk7aWYoYS5taW49bnVsbCxhLm1heD1udWxsLGkuc3RhY2tlZCl7dmFyIHM9e307ZS5lYWNoKHIsZnVuY3Rpb24obyxyKXt2YXIgbD1uLmdldERhdGFzZXRNZXRhKHIpO3ZvaWQgMD09PXNbbC50eXBlXSYmKHNbbC50eXBlXT17cG9zaXRpdmVWYWx1ZXM6W10sbmVnYXRpdmVWYWx1ZXM6W119KTt2YXIgZD1zW2wudHlwZV0ucG9zaXRpdmVWYWx1ZXMsdT1zW2wudHlwZV0ubmVnYXRpdmVWYWx1ZXM7bi5pc0RhdGFzZXRWaXNpYmxlKHIpJiZ0KGwpJiZlLmVhY2goby5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIG49K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihuKXx8bC5kYXRhW2VdLmhpZGRlbnx8KGRbZV09ZFtlXXx8MCx1W2VdPXVbZV18fDAsaS5yZWxhdGl2ZVBvaW50cz9kW2VdPTEwMDowPm4/dVtlXSs9bjpkW2VdKz1uKX0pfSksZS5lYWNoKHMsZnVuY3Rpb24odCl7dmFyIGk9dC5wb3NpdGl2ZVZhbHVlcy5jb25jYXQodC5uZWdhdGl2ZVZhbHVlcyksbj1lLm1pbihpKSxvPWUubWF4KGkpO2EubWluPW51bGw9PT1hLm1pbj9uOk1hdGgubWluKGEubWluLG4pLGEubWF4PW51bGw9PT1hLm1heD9vOk1hdGgubWF4KGEubWF4LG8pfSl9ZWxzZSBlLmVhY2gocixmdW5jdGlvbihpLG8pe3ZhciByPW4uZ2V0RGF0YXNldE1ldGEobyk7bi5pc0RhdGFzZXRWaXNpYmxlKG8pJiZ0KHIpJiZlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIGk9K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihpKXx8ci5kYXRhW2VdLmhpZGRlbnx8KG51bGw9PT1hLm1pbj9hLm1pbj1pOmk8YS5taW4mJihhLm1pbj1pKSxudWxsPT09YS5tYXg/YS5tYXg9aTppPmEubWF4JiYoYS5tYXg9aSkpfSl9KTt0aGlzLmhhbmRsZVRpY2tSYW5nZU9wdGlvbnMoKX0sZ2V0VGlja0xpbWl0OmZ1bmN0aW9uKCl7dmFyIGEsaT10aGlzLG49aS5vcHRpb25zLnRpY2tzO2lmKGkuaXNIb3Jpem9udGFsKCkpYT1NYXRoLm1pbihuLm1heFRpY2tzTGltaXQ/bi5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbChpLndpZHRoLzUwKSk7ZWxzZXt2YXIgbz1lLmdldFZhbHVlT3JEZWZhdWx0KG4uZm9udFNpemUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplKTthPU1hdGgubWluKG4ubWF4VGlja3NMaW1pdD9uLm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKGkuaGVpZ2h0LygyKm8pKSl9cmV0dXJuIGF9LGhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlczpmdW5jdGlvbigpe3RoaXMuaXNIb3Jpem9udGFsKCl8fHRoaXMudGlja3MucmV2ZXJzZSgpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXRoaXMsbj1pLnBhZGRpbmdMZWZ0LG89aS5wYWRkaW5nQm90dG9tLHI9aS5zdGFydCxsPStpLmdldFJpZ2h0VmFsdWUodCkscz1pLmVuZC1yO3JldHVybiBpLmlzSG9yaXpvbnRhbCgpPyhhPWkud2lkdGgtKG4raS5wYWRkaW5nUmlnaHQpLGU9aS5sZWZ0K2EvcyoobC1yKSxNYXRoLnJvdW5kKGUrbikpOihhPWkuaGVpZ2h0LShpLnBhZGRpbmdUb3ArbyksZT1pLmJvdHRvbS1vLWEvcyoobC1yKSxNYXRoLnJvdW5kKGUpKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5pc0hvcml6b250YWwoKSxpPWUucGFkZGluZ0xlZnQsbj1lLnBhZGRpbmdCb3R0b20sbz1hP2Uud2lkdGgtKGkrZS5wYWRkaW5nUmlnaHQpOmUuaGVpZ2h0LShlLnBhZGRpbmdUb3Arbikscj0oYT90LWUubGVmdC1pOmUuYm90dG9tLW4tdCkvbztyZXR1cm4gZS5zdGFydCsoZS5lbmQtZS5zdGFydCkqcn0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrc0FzTnVtYmVyc1t0XSl9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJsaW5lYXJcIixpLGEpfX0se31dLDQzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPWUubm9vcDt0LkxpbmVhclNjYWxlQmFzZT10LlNjYWxlLmV4dGVuZCh7aGFuZGxlVGlja1JhbmdlT3B0aW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10Lm9wdGlvbnMsaT1hLnRpY2tzO2lmKGkuYmVnaW5BdFplcm8pe3ZhciBuPWUuc2lnbih0Lm1pbiksbz1lLnNpZ24odC5tYXgpOzA+biYmMD5vP3QubWF4PTA6bj4wJiZvPjAmJih0Lm1pbj0wKX12b2lkIDAhPT1pLm1pbj90Lm1pbj1pLm1pbjp2b2lkIDAhPT1pLnN1Z2dlc3RlZE1pbiYmKHQubWluPU1hdGgubWluKHQubWluLGkuc3VnZ2VzdGVkTWluKSksdm9pZCAwIT09aS5tYXg/dC5tYXg9aS5tYXg6dm9pZCAwIT09aS5zdWdnZXN0ZWRNYXgmJih0Lm1heD1NYXRoLm1heCh0Lm1heCxpLnN1Z2dlc3RlZE1heCkpLHQubWluPT09dC5tYXgmJih0Lm1heCsrLGkuYmVnaW5BdFplcm98fHQubWluLS0pfSxnZXRUaWNrTGltaXQ6YSxoYW5kbGVEaXJlY3Rpb25hbENoYW5nZXM6YSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz1hLmdldFRpY2tMaW1pdCgpO289TWF0aC5tYXgoMixvKTt2YXIgcj17bWF4VGlja3M6byxtaW46bi5taW4sbWF4Om4ubWF4LHN0ZXBTaXplOmUuZ2V0VmFsdWVPckRlZmF1bHQobi5maXhlZFN0ZXBTaXplLG4uc3RlcFNpemUpfSxsPWEudGlja3M9dC5UaWNrcy5nZW5lcmF0b3JzLmxpbmVhcihyLGEpO2EuaGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzKCksYS5tYXg9ZS5tYXgobCksYS5taW49ZS5taW4obCksbi5yZXZlcnNlPyhsLnJldmVyc2UoKSxhLnN0YXJ0PWEubWF4LGEuZW5kPWEubWluKTooYS5zdGFydD1hLm1pbixhLmVuZD1hLm1heCl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLnRpY2tzQXNOdW1iZXJzPWUudGlja3Muc2xpY2UoKSxlLnplcm9MaW5lSW5kZXg9ZS50aWNrcy5pbmRleE9mKDApLHQuU2NhbGUucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwoZSl9fSl9fSx7fV0sNDQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwibGVmdFwiLHRpY2tzOntjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubG9nYXJpdGhtaWN9fSxpPXQuU2NhbGUuZXh0ZW5kKHtkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZD90LnhBeGlzSUQ9PT1hLmlkOnQueUF4aXNJRD09PWEuaWR9dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz1hLmNoYXJ0LHI9by5kYXRhLGw9ci5kYXRhc2V0cyxzPWUuZ2V0VmFsdWVPckRlZmF1bHQsZD1hLmlzSG9yaXpvbnRhbCgpO2lmKGEubWluPW51bGwsYS5tYXg9bnVsbCxhLm1pbk5vdFplcm89bnVsbCxpLnN0YWNrZWQpe3ZhciB1PXt9O2UuZWFjaChsLGZ1bmN0aW9uKG4scil7dmFyIGw9by5nZXREYXRhc2V0TWV0YShyKTtvLmlzRGF0YXNldFZpc2libGUocikmJnQobCkmJih2b2lkIDA9PT11W2wudHlwZV0mJih1W2wudHlwZV09W10pLGUuZWFjaChuLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgbj11W2wudHlwZV0sbz0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKG8pfHxsLmRhdGFbZV0uaGlkZGVufHwobltlXT1uW2VdfHwwLGkucmVsYXRpdmVQb2ludHM/bltlXT0xMDA6bltlXSs9byl9KSl9KSxlLmVhY2godSxmdW5jdGlvbih0KXt2YXIgaT1lLm1pbih0KSxuPWUubWF4KHQpO2EubWluPW51bGw9PT1hLm1pbj9pOk1hdGgubWluKGEubWluLGkpLGEubWF4PW51bGw9PT1hLm1heD9uOk1hdGgubWF4KGEubWF4LG4pfSl9ZWxzZSBlLmVhY2gobCxmdW5jdGlvbihpLG4pe3ZhciByPW8uZ2V0RGF0YXNldE1ldGEobik7by5pc0RhdGFzZXRWaXNpYmxlKG4pJiZ0KHIpJiZlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIGk9K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihpKXx8ci5kYXRhW2VdLmhpZGRlbnx8KG51bGw9PT1hLm1pbj9hLm1pbj1pOmk8YS5taW4mJihhLm1pbj1pKSxudWxsPT09YS5tYXg/YS5tYXg9aTppPmEubWF4JiYoYS5tYXg9aSksMCE9PWkmJihudWxsPT09YS5taW5Ob3RaZXJvfHxpPGEubWluTm90WmVybykmJihhLm1pbk5vdFplcm89aSkpfSl9KTthLm1pbj1zKG4ubWluLGEubWluKSxhLm1heD1zKG4ubWF4LGEubWF4KSxhLm1pbj09PWEubWF4JiYoMCE9PWEubWluJiZudWxsIT09YS5taW4/KGEubWluPU1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1pbikpLTEpLGEubWF4PU1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1heCkpKzEpKTooYS5taW49MSxhLm1heD0xMCkpfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz17bWluOm4ubWluLG1heDpuLm1heH0scj1hLnRpY2tzPXQuVGlja3MuZ2VuZXJhdG9ycy5sb2dhcml0aG1pYyhvLGEpO2EuaXNIb3Jpem9udGFsKCl8fHIucmV2ZXJzZSgpLGEubWF4PWUubWF4KHIpLGEubWluPWUubWluKHIpLG4ucmV2ZXJzZT8oci5yZXZlcnNlKCksYS5zdGFydD1hLm1heCxhLmVuZD1hLm1pbik6KGEuc3RhcnQ9YS5taW4sYS5lbmQ9YS5tYXgpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3RoaXMudGlja1ZhbHVlcz10aGlzLnRpY2tzLnNsaWNlKCksdC5TY2FsZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbCh0aGlzKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tWYWx1ZXNbdF0pfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBhLGksbixvPXRoaXMscj1vLnN0YXJ0LGw9K28uZ2V0UmlnaHRWYWx1ZSh0KSxzPW8ucGFkZGluZ1RvcCxkPW8ucGFkZGluZ0JvdHRvbSx1PW8ucGFkZGluZ0xlZnQsYz1vLm9wdGlvbnMsaD1jLnRpY2tzO3JldHVybiBvLmlzSG9yaXpvbnRhbCgpPyhuPWUubG9nMTAoby5lbmQpLWUubG9nMTAociksMD09PWw/aT1vLmxlZnQrdTooYT1vLndpZHRoLSh1K28ucGFkZGluZ1JpZ2h0KSxpPW8ubGVmdCthL24qKGUubG9nMTAobCktZS5sb2cxMChyKSksaSs9dSkpOihhPW8uaGVpZ2h0LShzK2QpLDAhPT1yfHxoLnJldmVyc2U/MD09PW8uZW5kJiZoLnJldmVyc2U/KG49ZS5sb2cxMChvLnN0YXJ0KS1lLmxvZzEwKG8ubWluTm90WmVybyksaT1sPT09by5lbmQ/by50b3ArczpsPT09by5taW5Ob3RaZXJvP28udG9wK3MrLjAyKmE6by50b3ArcysuMDIqYSsuOTgqYS9uKihlLmxvZzEwKGwpLWUubG9nMTAoby5taW5Ob3RaZXJvKSkpOihuPWUubG9nMTAoby5lbmQpLWUubG9nMTAociksYT1vLmhlaWdodC0ocytkKSxpPW8uYm90dG9tLWQtYS9uKihlLmxvZzEwKGwpLWUubG9nMTAocikpKToobj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKG8ubWluTm90WmVybyksaT1sPT09cj9vLmJvdHRvbS1kOmw9PT1vLm1pbk5vdFplcm8/by5ib3R0b20tZC0uMDIqYTpvLmJvdHRvbS1kLS4wMiphLS45OCphL24qKGUubG9nMTAobCktZS5sb2cxMChvLm1pbk5vdFplcm8pKSkpLGl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGEsaSxuPXRoaXMsbz1lLmxvZzEwKG4uZW5kKS1lLmxvZzEwKG4uc3RhcnQpO3JldHVybiBuLmlzSG9yaXpvbnRhbCgpPyhpPW4ud2lkdGgtKG4ucGFkZGluZ0xlZnQrbi5wYWRkaW5nUmlnaHQpLGE9bi5zdGFydCpNYXRoLnBvdygxMCwodC1uLmxlZnQtbi5wYWRkaW5nTGVmdCkqby9pKSk6KGk9bi5oZWlnaHQtKG4ucGFkZGluZ1RvcCtuLnBhZGRpbmdCb3R0b20pLGE9TWF0aC5wb3coMTAsKG4uYm90dG9tLW4ucGFkZGluZ0JvdHRvbS10KSpvL2kpL24uc3RhcnQpLGF9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJsb2dhcml0aG1pY1wiLGksYSl9fSx7fV0sNDU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWwsaT17ZGlzcGxheTohMCxhbmltYXRlOiEwLGxpbmVBcmM6ITEscG9zaXRpb246XCJjaGFydEFyZWFcIixhbmdsZUxpbmVzOntkaXNwbGF5OiEwLGNvbG9yOlwicmdiYSgwLCAwLCAwLCAwLjEpXCIsbGluZVdpZHRoOjF9LHRpY2tzOntzaG93TGFiZWxCYWNrZHJvcDohMCxiYWNrZHJvcENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjc1KVwiLGJhY2tkcm9wUGFkZGluZ1k6MixiYWNrZHJvcFBhZGRpbmdYOjIsY2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxpbmVhcn0scG9pbnRMYWJlbHM6e2ZvbnRTaXplOjEwLGNhbGxiYWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0fX19LG49dC5MaW5lYXJTY2FsZUJhc2UuZXh0ZW5kKHtnZXRWYWx1ZUNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RofSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQub3B0aW9ucyxuPWkudGlja3M7dC53aWR0aD10Lm1heFdpZHRoLHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQueENlbnRlcj1NYXRoLnJvdW5kKHQud2lkdGgvMiksdC55Q2VudGVyPU1hdGgucm91bmQodC5oZWlnaHQvMik7dmFyIG89ZS5taW4oW3QuaGVpZ2h0LHQud2lkdGhdKSxyPWUuZ2V0VmFsdWVPckRlZmF1bHQobi5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSk7dC5kcmF3aW5nQXJlYT1pLmRpc3BsYXk/by8yLShyLzIrbi5iYWNrZHJvcFBhZGRpbmdZKTpvLzJ9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5jaGFydDt0Lm1pbj1udWxsLHQubWF4PW51bGwsZS5lYWNoKGEuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihpLG4pe2lmKGEuaXNEYXRhc2V0VmlzaWJsZShuKSl7dmFyIG89YS5nZXREYXRhc2V0TWV0YShuKTtlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUsYSl7dmFyIGk9K3QuZ2V0UmlnaHRWYWx1ZShlKTtpc05hTihpKXx8by5kYXRhW2FdLmhpZGRlbnx8KG51bGw9PT10Lm1pbj90Lm1pbj1pOmk8dC5taW4mJih0Lm1pbj1pKSxudWxsPT09dC5tYXg/dC5tYXg9aTppPnQubWF4JiYodC5tYXg9aSkpfSl9fSksdC5oYW5kbGVUaWNrUmFuZ2VPcHRpb25zKCl9LGdldFRpY2tMaW1pdDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy50aWNrcyxpPWUuZ2V0VmFsdWVPckRlZmF1bHQodC5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSk7cmV0dXJuIE1hdGgubWluKHQubWF4VGlja3NMaW1pdD90Lm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKHRoaXMuZHJhd2luZ0FyZWEvKDEuNSppKSkpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dC5MaW5lYXJTY2FsZUJhc2UucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwoZSksZS5wb2ludExhYmVscz1lLmNoYXJ0LmRhdGEubGFiZWxzLm1hcChlLm9wdGlvbnMucG9pbnRMYWJlbHMuY2FsbGJhY2ssZSl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZml0OmZ1bmN0aW9uKCl7dmFyIHQsaSxuLG8scixsLHMsZCx1LGMsaCxmLGc9dGhpcy5vcHRpb25zLnBvaW50TGFiZWxzLHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxtPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxiPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLHY9ZS5mb250U3RyaW5nKHAsbSxiKSx4PWUubWluKFt0aGlzLmhlaWdodC8yLXAtNSx0aGlzLndpZHRoLzJdKSx5PXRoaXMud2lkdGgsaz0wO2Zvcih0aGlzLmN0eC5mb250PXYsaT0wO2k8dGhpcy5nZXRWYWx1ZUNvdW50KCk7aSsrKXt0PXRoaXMuZ2V0UG9pbnRQb3NpdGlvbihpLHgpLG49dGhpcy5jdHgubWVhc3VyZVRleHQodGhpcy5wb2ludExhYmVsc1tpXT90aGlzLnBvaW50TGFiZWxzW2ldOlwiXCIpLndpZHRoKzU7dmFyIFM9dGhpcy5nZXRJbmRleEFuZ2xlKGkpK01hdGguUEkvMix3PTM2MCpTLygyKk1hdGguUEkpJTM2MDswPT09d3x8MTgwPT09dz8obz1uLzIsdC54K28+eSYmKHk9dC54K28scj1pKSx0LngtbzxrJiYoaz10LngtbyxzPWkpKToxODA+dz90Lngrbj55JiYoeT10LngrbixyPWkpOnQueC1uPGsmJihrPXQueC1uLHM9aSl9dT1rLGM9TWF0aC5jZWlsKHktdGhpcy53aWR0aCksbD10aGlzLmdldEluZGV4QW5nbGUociksZD10aGlzLmdldEluZGV4QW5nbGUocyksaD1jL01hdGguc2luKGwrTWF0aC5QSS8yKSxmPXUvTWF0aC5zaW4oZCtNYXRoLlBJLzIpLGg9ZS5pc051bWJlcihoKT9oOjAsZj1lLmlzTnVtYmVyKGYpP2Y6MCx0aGlzLmRyYXdpbmdBcmVhPU1hdGgucm91bmQoeC0oZitoKS8yKSx0aGlzLnNldENlbnRlclBvaW50KGYsaCl9LHNldENlbnRlclBvaW50OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEud2lkdGgtZS1hLmRyYXdpbmdBcmVhLG49dCthLmRyYXdpbmdBcmVhO2EueENlbnRlcj1NYXRoLnJvdW5kKChuK2kpLzIrYS5sZWZ0KSxhLnlDZW50ZXI9TWF0aC5yb3VuZChhLmhlaWdodC8yK2EudG9wKX0sZ2V0SW5kZXhBbmdsZTpmdW5jdGlvbih0KXt2YXIgZT0yKk1hdGguUEkvdGhpcy5nZXRWYWx1ZUNvdW50KCksYT10aGlzLmNoYXJ0Lm9wdGlvbnMmJnRoaXMuY2hhcnQub3B0aW9ucy5zdGFydEFuZ2xlP3RoaXMuY2hhcnQub3B0aW9ucy5zdGFydEFuZ2xlOjAsaT1hKk1hdGguUEkqMi8zNjA7cmV0dXJuIHQqZS1NYXRoLlBJLzIraX0sZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihudWxsPT09dClyZXR1cm4gMDt2YXIgYT1lLmRyYXdpbmdBcmVhLyhlLm1heC1lLm1pbik7cmV0dXJuIGUub3B0aW9ucy5yZXZlcnNlPyhlLm1heC10KSphOih0LWUubWluKSphfSxnZXRQb2ludFBvc2l0aW9uOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0SW5kZXhBbmdsZSh0KTtyZXR1cm57eDpNYXRoLnJvdW5kKE1hdGguY29zKGkpKmUpK2EueENlbnRlcix5Ok1hdGgucm91bmQoTWF0aC5zaW4oaSkqZSkrYS55Q2VudGVyfX0sZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZ2V0UG9pbnRQb3NpdGlvbih0LHRoaXMuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoZSkpfSxnZXRCYXNlUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5taW4sYT10Lm1heDtyZXR1cm4gdC5nZXRQb2ludFBvc2l0aW9uRm9yVmFsdWUoMCx0LmJlZ2luQXRaZXJvPzA6MD5lJiYwPmE/YTplPjAmJmE+MD9lOjApfSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQub3B0aW9ucyxuPWkuZ3JpZExpbmVzLG89aS50aWNrcyxyPWkuYW5nbGVMaW5lcyxsPWkucG9pbnRMYWJlbHMscz1lLmdldFZhbHVlT3JEZWZhdWx0O2lmKGkuZGlzcGxheSl7dmFyIGQ9dC5jdHgsdT1zKG8uZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLGM9cyhvLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGg9cyhvLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksZj1lLmZvbnRTdHJpbmcodSxjLGgpO2lmKGUuZWFjaCh0LnRpY2tzLGZ1bmN0aW9uKHIsbCl7aWYobD4wfHxpLnJldmVyc2Upe3ZhciBjPXQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUodC50aWNrc0FzTnVtYmVyc1tsXSksaD10LnlDZW50ZXItYztpZihuLmRpc3BsYXkmJjAhPT1sKWlmKGQuc3Ryb2tlU3R5bGU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5jb2xvcixsLTEpLGQubGluZVdpZHRoPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ubGluZVdpZHRoLGwtMSksaS5saW5lQXJjKWQuYmVnaW5QYXRoKCksZC5hcmModC54Q2VudGVyLHQueUNlbnRlcixjLDAsMipNYXRoLlBJKSxkLmNsb3NlUGF0aCgpLGQuc3Ryb2tlKCk7ZWxzZXtkLmJlZ2luUGF0aCgpO2Zvcih2YXIgZz0wO2c8dC5nZXRWYWx1ZUNvdW50KCk7ZysrKXt2YXIgcD10LmdldFBvaW50UG9zaXRpb24oZyxjKTswPT09Zz9kLm1vdmVUbyhwLngscC55KTpkLmxpbmVUbyhwLngscC55KX1kLmNsb3NlUGF0aCgpLGQuc3Ryb2tlKCl9aWYoby5kaXNwbGF5KXt2YXIgbT1zKG8uZm9udENvbG9yLGEuZGVmYXVsdEZvbnRDb2xvcik7aWYoZC5mb250PWYsby5zaG93TGFiZWxCYWNrZHJvcCl7dmFyIGI9ZC5tZWFzdXJlVGV4dChyKS53aWR0aDtkLmZpbGxTdHlsZT1vLmJhY2tkcm9wQ29sb3IsZC5maWxsUmVjdCh0LnhDZW50ZXItYi8yLW8uYmFja2Ryb3BQYWRkaW5nWCxoLXUvMi1vLmJhY2tkcm9wUGFkZGluZ1ksYisyKm8uYmFja2Ryb3BQYWRkaW5nWCx1KzIqby5iYWNrZHJvcFBhZGRpbmdZKX1kLnRleHRBbGlnbj1cImNlbnRlclwiLGQudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsZC5maWxsU3R5bGU9bSxkLmZpbGxUZXh0KHIsdC54Q2VudGVyLGgpfX19KSwhaS5saW5lQXJjKXtkLmxpbmVXaWR0aD1yLmxpbmVXaWR0aCxkLnN0cm9rZVN0eWxlPXIuY29sb3I7Zm9yKHZhciBnPXQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoaS5yZXZlcnNlP3QubWluOnQubWF4KSxwPXMobC5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksbT1zKGwuZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksYj1zKGwuZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSx2PWUuZm9udFN0cmluZyhwLG0sYikseD10LmdldFZhbHVlQ291bnQoKS0xO3g+PTA7eC0tKXtpZihyLmRpc3BsYXkpe3ZhciB5PXQuZ2V0UG9pbnRQb3NpdGlvbih4LGcpO2QuYmVnaW5QYXRoKCksZC5tb3ZlVG8odC54Q2VudGVyLHQueUNlbnRlciksZC5saW5lVG8oeS54LHkueSksZC5zdHJva2UoKSxkLmNsb3NlUGF0aCgpfXZhciBrPXQuZ2V0UG9pbnRQb3NpdGlvbih4LGcrNSksUz1zKGwuZm9udENvbG9yLGEuZGVmYXVsdEZvbnRDb2xvcik7ZC5mb250PXYsZC5maWxsU3R5bGU9Uzt2YXIgdz10LnBvaW50TGFiZWxzLE09dGhpcy5nZXRJbmRleEFuZ2xlKHgpK01hdGguUEkvMixDPTM2MCpNLygyKk1hdGguUEkpJTM2MDswPT09Q3x8MTgwPT09Qz9kLnRleHRBbGlnbj1cImNlbnRlclwiOjE4MD5DP2QudGV4dEFsaWduPVwibGVmdFwiOmQudGV4dEFsaWduPVwicmlnaHRcIiw5MD09PUN8fDI3MD09PUM/ZC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIjpDPjI3MHx8OTA+Qz9kLnRleHRCYXNlbGluZT1cImJvdHRvbVwiOmQudGV4dEJhc2VsaW5lPVwidG9wXCIsZC5maWxsVGV4dCh3W3hdP3dbeF06XCJcIixrLngsay55KX19fX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcInJhZGlhbExpbmVhclwiLG4saSl9fSx7fV0sNDY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KDEpO2k9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pOndpbmRvdy5tb21lbnQsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXt1bml0czpbe25hbWU6XCJtaWxsaXNlY29uZFwiLHN0ZXBzOlsxLDIsNSwxMCwyMCw1MCwxMDAsMjUwLDUwMF19LHtuYW1lOlwic2Vjb25kXCIsc3RlcHM6WzEsMiw1LDEwLDMwXX0se25hbWU6XCJtaW51dGVcIixzdGVwczpbMSwyLDUsMTAsMzBdfSx7bmFtZTpcImhvdXJcIixzdGVwczpbMSwyLDMsNiwxMl19LHtuYW1lOlwiZGF5XCIsc3RlcHM6WzEsMiw1XX0se25hbWU6XCJ3ZWVrXCIsbWF4U3RlcDo0fSx7bmFtZTpcIm1vbnRoXCIsbWF4U3RlcDozfSx7bmFtZTpcInF1YXJ0ZXJcIixtYXhTdGVwOjR9LHtuYW1lOlwieWVhclwiLG1heFN0ZXA6ITF9XX0sbj17cG9zaXRpb246XCJib3R0b21cIix0aW1lOntwYXJzZXI6ITEsZm9ybWF0OiExLHVuaXQ6ITEscm91bmQ6ITEsZGlzcGxheUZvcm1hdDohMSxpc29XZWVrZGF5OiExLG1pblVuaXQ6XCJtaWxsaXNlY29uZFwiLGRpc3BsYXlGb3JtYXRzOnttaWxsaXNlY29uZDpcImg6bW06c3MuU1NTIGFcIixzZWNvbmQ6XCJoOm1tOnNzIGFcIixtaW51dGU6XCJoOm1tOnNzIGFcIixob3VyOlwiTU1NIEQsIGhBXCIsZGF5OlwibGxcIix3ZWVrOlwibGxcIixtb250aDpcIk1NTSBZWVlZXCIscXVhcnRlcjpcIltRXVEgLSBZWVlZXCIseWVhcjpcIllZWVlcIn19LHRpY2tzOnthdXRvU2tpcDohMX19LG89dC5TY2FsZS5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oKXtpZighaSl0aHJvdyBuZXcgRXJyb3IoXCJDaGFydC5qcyAtIE1vbWVudC5qcyBjb3VsZCBub3QgYmUgZm91bmQhIFlvdSBtdXN0IGluY2x1ZGUgaXQgYmVmb3JlIENoYXJ0LmpzIHRvIHVzZSB0aGUgdGltZSBzY2FsZS4gRG93bmxvYWQgYXQgaHR0cHM6Ly9tb21lbnRqcy5jb21cIik7dC5TY2FsZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMpfSxnZXRMYWJlbE1vbWVudDpmdW5jdGlvbih0LGUpe3JldHVybiBudWxsPT09dHx8bnVsbD09PWU/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5sYWJlbE1vbWVudHNbdF0/dGhpcy5sYWJlbE1vbWVudHNbdF1bZV06bnVsbH0sZ2V0TGFiZWxEaWZmOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztyZXR1cm4gbnVsbD09PXR8fG51bGw9PT1lP251bGw6KHZvaWQgMD09PWEubGFiZWxEaWZmcyYmYS5idWlsZExhYmVsRGlmZnMoKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5sYWJlbERpZmZzW3RdP2EubGFiZWxEaWZmc1t0XVtlXTpudWxsKX0sZ2V0TW9tZW50U3RhcnRPZjpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVyblwid2Vla1wiPT09ZS5vcHRpb25zLnRpbWUudW5pdCYmZS5vcHRpb25zLnRpbWUuaXNvV2Vla2RheSE9PSExP3QuY2xvbmUoKS5zdGFydE9mKFwiaXNvV2Vla1wiKS5pc29XZWVrZGF5KGUub3B0aW9ucy50aW1lLmlzb1dlZWtkYXkpOnQuY2xvbmUoKS5zdGFydE9mKGUudGlja1VuaXQpfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxhYmVsTW9tZW50cz1bXTt2YXIgYT1bXTt0LmNoYXJ0LmRhdGEubGFiZWxzJiZ0LmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD4wPyhlLmVhY2godC5jaGFydC5kYXRhLmxhYmVscyxmdW5jdGlvbihlKXt2YXIgaT10LnBhcnNlVGltZShlKTtpLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZpLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLGEucHVzaChpKSl9LHQpLHQuZmlyc3RUaWNrPWkubWluLmNhbGwodCxhKSx0Lmxhc3RUaWNrPWkubWF4LmNhbGwodCxhKSk6KHQuZmlyc3RUaWNrPW51bGwsdC5sYXN0VGljaz1udWxsKSxlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKG4sbyl7dmFyIHI9W10sbD10LmNoYXJ0LmlzRGF0YXNldFZpc2libGUobyk7XCJvYmplY3RcIj09dHlwZW9mIG4uZGF0YVswXSYmbnVsbCE9PW4uZGF0YVswXT9lLmVhY2gobi5kYXRhLGZ1bmN0aW9uKGUpe3ZhciBhPXQucGFyc2VUaW1lKHQuZ2V0UmlnaHRWYWx1ZShlKSk7YS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmYS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxyLnB1c2goYSksbCYmKHQuZmlyc3RUaWNrPW51bGwhPT10LmZpcnN0VGljaz9pLm1pbih0LmZpcnN0VGljayxhKTphLHQubGFzdFRpY2s9bnVsbCE9PXQubGFzdFRpY2s/aS5tYXgodC5sYXN0VGljayxhKTphKSl9LHQpOnI9YSx0LmxhYmVsTW9tZW50cy5wdXNoKHIpfSx0KSx0Lm9wdGlvbnMudGltZS5taW4mJih0LmZpcnN0VGljaz10LnBhcnNlVGltZSh0Lm9wdGlvbnMudGltZS5taW4pKSx0Lm9wdGlvbnMudGltZS5tYXgmJih0Lmxhc3RUaWNrPXQucGFyc2VUaW1lKHQub3B0aW9ucy50aW1lLm1heCkpLHQuZmlyc3RUaWNrPSh0LmZpcnN0VGlja3x8aSgpKS5jbG9uZSgpLHQubGFzdFRpY2s9KHQubGFzdFRpY2t8fGkoKSkuY2xvbmUoKX0sYnVpbGRMYWJlbERpZmZzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxhYmVsRGlmZnM9W107dmFyIGE9W107dC5jaGFydC5kYXRhLmxhYmVscyYmdC5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg+MCYmZS5lYWNoKHQuY2hhcnQuZGF0YS5sYWJlbHMsZnVuY3Rpb24oZSl7dmFyIGk9dC5wYXJzZVRpbWUoZSk7aS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmaS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxhLnB1c2goaS5kaWZmKHQuZmlyc3RUaWNrLHQudGlja1VuaXQsITApKSl9LHQpLGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oaSl7dmFyIG49W107XCJvYmplY3RcIj09dHlwZW9mIGkuZGF0YVswXSYmbnVsbCE9PWkuZGF0YVswXT9lLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUpe3ZhciBhPXQucGFyc2VUaW1lKHQuZ2V0UmlnaHRWYWx1ZShlKSk7YS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmYS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxuLnB1c2goYS5kaWZmKHQuZmlyc3RUaWNrLHQudGlja1VuaXQsITApKSl9LHQpOm49YSx0LmxhYmVsRGlmZnMucHVzaChuKX0sdCl9LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuY3R4LnNhdmUoKTt2YXIgbj1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250U2l6ZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUpLG89ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udFN0eWxlLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U3R5bGUpLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udEZhbWlseSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSksbD1lLmZvbnRTdHJpbmcobixvLHIpO2lmKGkuY3R4LmZvbnQ9bCxpLnRpY2tzPVtdLGkudW5pdFNjYWxlPTEsaS5zY2FsZVNpemVJblVuaXRzPTAsaS5vcHRpb25zLnRpbWUudW5pdClpLnRpY2tVbml0PWkub3B0aW9ucy50aW1lLnVuaXR8fFwiZGF5XCIsaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW2kudGlja1VuaXRdLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCksaS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUsMSk7ZWxzZXt2YXIgcz1pLmlzSG9yaXpvbnRhbCgpP2kud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpOmkuaGVpZ2h0LShpLnBhZGRpbmdUb3AraS5wYWRkaW5nQm90dG9tKSxkPWkudGlja0Zvcm1hdEZ1bmN0aW9uKGkuZmlyc3RUaWNrLDAsW10pLHU9aS5jdHgubWVhc3VyZVRleHQoZCkud2lkdGgsYz1NYXRoLmNvcyhlLnRvUmFkaWFucyhpLm9wdGlvbnMudGlja3MubWF4Um90YXRpb24pKSxoPU1hdGguc2luKGUudG9SYWRpYW5zKGkub3B0aW9ucy50aWNrcy5tYXhSb3RhdGlvbikpO3U9dSpjK24qaDt2YXIgZj1zL3U7aS50aWNrVW5pdD1pLm9wdGlvbnMudGltZS5taW5Vbml0LGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCksaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW2kudGlja1VuaXRdO2Zvcih2YXIgZz0wLHA9YS51bml0c1tnXTtnPGEudW5pdHMubGVuZ3RoOyl7aWYoaS51bml0U2NhbGU9MSxlLmlzQXJyYXkocC5zdGVwcykmJk1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZik8ZS5tYXgocC5zdGVwcykpe2Zvcih2YXIgbT0wO208cC5zdGVwcy5sZW5ndGg7KyttKWlmKHAuc3RlcHNbbV0+PU1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZikpe2kudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLHAuc3RlcHNbbV0pO2JyZWFrfWJyZWFrfWlmKHAubWF4U3RlcD09PSExfHxNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpPHAubWF4U3RlcCl7aS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUsTWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKSk7YnJlYWt9KytnLHA9YS51bml0c1tnXSxpLnRpY2tVbml0PXAubmFtZTt2YXIgYj1pLmZpcnN0VGljay5kaWZmKGkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljayksaS50aWNrVW5pdCwhMCksdj1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljay5jbG9uZSgpLmFkZCgxLGkudGlja1VuaXQpKS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk7aS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKStiK3YsaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW3AubmFtZV19fXZhciB4O2lmKGkub3B0aW9ucy50aW1lLm1pbj94PWkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljayk6KGkuZmlyc3RUaWNrPWkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljaykseD1pLmZpcnN0VGljayksIWkub3B0aW9ucy50aW1lLm1heCl7dmFyIHk9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2spLGs9eS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk7MD5rP2kubGFzdFRpY2s9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2suYWRkKDEsaS50aWNrVW5pdCkpOms+PTAmJihpLmxhc3RUaWNrPXkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCl9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdCYmKGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0KSxpLnRpY2tzLnB1c2goaS5maXJzdFRpY2suY2xvbmUoKSk7Zm9yKHZhciBTPTE7Uzw9aS5zY2FsZVNpemVJblVuaXRzOysrUyl7dmFyIHc9eC5jbG9uZSgpLmFkZChTLGkudGlja1VuaXQpO2lmKGkub3B0aW9ucy50aW1lLm1heCYmdy5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk+PTApYnJlYWs7UyVpLnVuaXRTY2FsZT09PTAmJmkudGlja3MucHVzaCh3KX12YXIgTT1pLnRpY2tzW2kudGlja3MubGVuZ3RoLTFdLmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0KTsoMCE9PU18fDA9PT1pLnNjYWxlU2l6ZUluVW5pdHMpJiYoaS5vcHRpb25zLnRpbWUubWF4PyhpLnRpY2tzLnB1c2goaS5sYXN0VGljay5jbG9uZSgpKSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkudGlja3NbMF0saS50aWNrVW5pdCwhMCkpOihpLnRpY2tzLnB1c2goaS5sYXN0VGljay5jbG9uZSgpKSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApKSksaS5jdHgucmVzdG9yZSgpLGkubGFiZWxEaWZmcz12b2lkIDB9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5jaGFydC5kYXRhLmxhYmVscyYmdDxhLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD9hLmNoYXJ0LmRhdGEubGFiZWxzW3RdOlwiXCI7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhWzBdJiYoaT1hLmdldFJpZ2h0VmFsdWUoYS5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pKSxhLm9wdGlvbnMudGltZS50b29sdGlwRm9ybWF0JiYoaT1hLnBhcnNlVGltZShpKS5mb3JtYXQoYS5vcHRpb25zLnRpbWUudG9vbHRpcEZvcm1hdCkpLGl9LHRpY2tGb3JtYXRGdW5jdGlvbjpmdW5jdGlvbih0LGEsaSl7dmFyIG49dC5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSxvPXRoaXMub3B0aW9ucy50aWNrcyxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5jYWxsYmFjayxvLnVzZXJDYWxsYmFjayk7cmV0dXJuIHI/cihuLGEsaSk6bn0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QudGlja01vbWVudHM9dC50aWNrcyx0LnRpY2tzPXQudGlja3MubWFwKHQudGlja0Zvcm1hdEZ1bmN0aW9uLHQpfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49bnVsbDtpZih2b2lkIDAhPT1lJiZ2b2lkIDAhPT1hJiYobj1pLmdldExhYmVsRGlmZihhLGUpKSxudWxsPT09biYmKHQmJnQuaXNWYWxpZHx8KHQ9aS5wYXJzZVRpbWUoaS5nZXRSaWdodFZhbHVlKHQpKSksdCYmdC5pc1ZhbGlkJiZ0LmlzVmFsaWQoKSYmKG49dC5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApKSksbnVsbCE9PW4pe3ZhciBvPTAhPT1uP24vaS5zY2FsZVNpemVJblVuaXRzOm47aWYoaS5pc0hvcml6b250YWwoKSl7dmFyIHI9aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCksbD1yKm8raS5wYWRkaW5nTGVmdDtyZXR1cm4gaS5sZWZ0K01hdGgucm91bmQobCl9dmFyIHM9aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtpLnBhZGRpbmdCb3R0b20pLGQ9cypvK2kucGFkZGluZ1RvcDtyZXR1cm4gaS50b3ArTWF0aC5yb3VuZChkKX19LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja01vbWVudHNbdF0sbnVsbCxudWxsKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5pc0hvcml6b250YWwoKT9lLndpZHRoLShlLnBhZGRpbmdMZWZ0K2UucGFkZGluZ1JpZ2h0KTplLmhlaWdodC0oZS5wYWRkaW5nVG9wK2UucGFkZGluZ0JvdHRvbSksbj0odC0oZS5pc0hvcml6b250YWwoKT9lLmxlZnQrZS5wYWRkaW5nTGVmdDplLnRvcCtlLnBhZGRpbmdUb3ApKS9hO3JldHVybiBuKj1lLnNjYWxlU2l6ZUluVW5pdHMsZS5maXJzdFRpY2suY2xvbmUoKS5hZGQoaS5kdXJhdGlvbihuLGUudGlja1VuaXQpLmFzU2Vjb25kcygpLFwic2Vjb25kc1wiKX0scGFyc2VUaW1lOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy50aW1lLnBhcnNlcj9pKHQsZS5vcHRpb25zLnRpbWUucGFyc2VyKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9wdGlvbnMudGltZS5wYXJzZXI/ZS5vcHRpb25zLnRpbWUucGFyc2VyKHQpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuZ2V0TW9udGh8fFwibnVtYmVyXCI9PXR5cGVvZiB0P2kodCk6dC5pc1ZhbGlkJiZ0LmlzVmFsaWQoKT90Olwic3RyaW5nXCIhPXR5cGVvZiBlLm9wdGlvbnMudGltZS5mb3JtYXQmJmUub3B0aW9ucy50aW1lLmZvcm1hdC5jYWxsPyhjb25zb2xlLndhcm4oXCJvcHRpb25zLnRpbWUuZm9ybWF0IGlzIGRlcHJlY2F0ZWQgYW5kIHJlcGxhY2VkIGJ5IG9wdGlvbnMudGltZS5wYXJzZXIuIFNlZSBodHRwOi8vbm5uaWNrLmdpdGh1Yi5pby9DaGFydC5qcy9kb2NzLXYyLyNzY2FsZXMtdGltZS1zY2FsZVwiKSxlLm9wdGlvbnMudGltZS5mb3JtYXQodCkpOmkodCxlLm9wdGlvbnMudGltZS5mb3JtYXQpfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwidGltZVwiLG8sbil9fSx7MToxfV19LHt9LFs3XSkoNyl9KTsiLCIvL1BsYXRmb3JtIExvZ28nc1xyXG5mdW5jdGlvbiBQbGF0Zm9ybUxvZ28ocGxhdGZvcm1uYWFtKVxyXG57XHJcbiAgICBwbGF0Zm9ybW5hYW0gPSBwbGF0Zm9ybW5hYW0udG9VcHBlckNhc2UoKTtcclxuICAgIHN3aXRjaCAocGxhdGZvcm1uYWFtKVxyXG4gICAge1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XHJcblxyXG4gICAgICAgIC8vcGxhdGZvcm1zIC0gc3BlbGNvbXB1dGVyc1xyXG4gICAgICAgIGNhc2UgXCJQUzFcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMi5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQUzRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzNC5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQQ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2luZG93cy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJYQk9YIE9ORVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMveGJveG9uZS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJORVNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25lcy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJONjRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL242NC5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBTV0lUQ0hcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3N3aXRjaC5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBXSUlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3dpaS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBXSUkgVVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2lpdS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOR0NcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25nYy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJHQU1FIEJPWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvZ2FtZWJveS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBEU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmludGVuZG9kcy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJHQkFcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL2diYS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJQU1BcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzcC5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyAzRFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25pbnRlbmRvM2RzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcblxyXG4gICAgICAgIC8vcHVibGlzaGVycyAtIHVpdGdldmVyc1xyXG4gICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9uaW50ZW5kby5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJVQklTT0ZUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3ViaXNvZnQucG5nJyBjbGFzcz0naGFzVG9vbHRpcCcgLz5cIjtcclxuICAgICAgICBjYXNlIFwiRUxFQ1RST05JQyBBUlRTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL2VhLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlNPTllcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc29ueS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJST0NLU1RBUlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9yb2Nrc3Rhci5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJTRUdBXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3NlZ2EucG5nJyBjbGFzcz0naGFzVG9vbHRpcCcgLz5cIjtcclxuICAgICAgICBjYXNlIFwiS09OQU1JXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL2tvbmFtaS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJBVExVU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9hdGx1cy5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJBQ1RJVklTSU9OXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL2FjdGl2aXNpb24uanBnJyBjbGFzcz0naGFzVG9vbHRpcCcgLz5cIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQmVzY2hpa2JhYXJoZWlkS2xldXIoc3RvY2t2YWx1ZSl7XHJcbiAgICBcclxuICAgICAgICBpZiAoc3RvY2t2YWx1ZTw9MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbnJlZC5wbmcnIC8+XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdG9ja3ZhbHVlPj0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9uZ3JlZW4ucG5nJyAvPlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9ja3ZhbHVlXHJcbiAgICAgICAgfVxyXG59IiwiJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImEub3JkZXJfX25hdmlnYXRlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSA9PSBmYWxzZSlcclxuICAgIHtcclxuICAgICAgICAvLyBHZXQgdGhlIG9yZGVyIHN0ZXBcclxuICAgICAgICB2YXIgc3RlcCA9ICAkKHRoaXMpLmRhdGEoXCJzdGVwXCIpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBvcmRlciBzdGVwIGFzIGFjdGl2ZVxyXG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuXCIgKyBzdGVwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHJcbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHN0ZXApLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgIH1cclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3NoaXBwaW5nX21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcclxue1xyXG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XHJcblxyXG4gICAgaWYgKHZhbCAhPSBcIlwiKVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICQoXCIuc2hpcHBpbmdfX2ZpZWxkc1wiKS5oaWRlKCk7XHJcbiAgICAkKFwiLlwiICsgdmFsICsgXCJfZmllbGRzXCIpLnNob3coKTtcclxufSlcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3BheW1lbnRfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxyXG57XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcclxuXHJcbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSB8fCB1cmwgPT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcclxuXHJcbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcclxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIndpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgV2lzaGxpc3RDb250cm9sbGVyKG5ldyBXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFdpc2hsaXN0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFN0YXRzQ29udHJvbGxlcihuZXcgU3RhdHNWaWV3SGVscGVyKCksIG5ldyBTdGF0c01vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pbkNvbnRyb2xsZXIobmV3IEFkbWluVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Nb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluX3VzZXJcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBBZG1pblVzZXJDb250cm9sbGVyKG5ldyBBZG1pblVzZXJWaWV3SGVscGVyKCksIG5ldyBBZG1pblVzZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImFkbWluc2VydFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluc2VydENvbnRyb2xsZXIobmV3IEFkbWluc2VydFZpZXdIZWxwZXIoKSwgbmV3IEFkbWluc2VydE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZGVsX2dhbWVcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBEZWxHYW1lQ29udHJvbGxlcihuZXcgRGVsR2FtZVZpZXdIZWxwZXIoKSwgbmV3IERlbEdhbWVNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlbGlzdFwiOiBcclxuICAgICAgICAgICAgICAgIG5ldyBGYXZvcml0ZUxpc3RDb250cm9sbGVyKG5ldyBGYXZvcml0ZUxpc3RWaWV3SGVscGVyKCksIG5ldyBGYXZvcml0ZUxpc3RNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRDb250cm9sbGVyKG5ldyBDaGVja291dFZpZXdIZWxwZXIoKSwgbmV3IENoZWNrb3V0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlcnNcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBPcmRlcnNDb250cm9sbGVyKG5ldyBPcmRlcnNWaWV3SGVscGVyLCBuZXcgT3JkZXJzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyQ29udHJvbGxlcihuZXcgT3JkZXJWaWV3SGVscGVyLCBuZXcgT3JkZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInB1YmxpY193aXNobGlzdFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlcihuZXcgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyKCksIG5ldyBQdWJsaWNXaXNobGlzdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yQ29udHJvbGxlcihuZXcgRXJyb3JWaWV3SGVscGVyKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhpc3RvcnkgIT0gZmFsc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodXJsICE9IFwiXCIgJiYgdHlwZW9mIHVybCA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBMb2FkIHNjcmVlbiBhbmQgY2xvc2UgY2FydFxyXG4gICAgICAgICAgICAgICAgJChcIi5zaWRlYmFyXCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICBzaG93TG9hZFNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIG9mIHBhZ2VcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpc0ludGVybmFsKHVybClcclxuICAgIHtcclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwid3d3XCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwibWFpbHRvXCIpICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcclxuICAgIHtcclxuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IC9cclxuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBiYXNlIHVybCBzZXQsIHJlbW92ZSB0aGUgYmFzZSB1cmxcclxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSArIHRoaXMuYmFzZVVybC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgvXFwvKC4rKT8vKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlSGlzdG9yeShvYmplY3QsIHRpdGxlLCB1cmwpXHJcbiAgICB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG9iamVjdCwgdGl0bGUsIHVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByb3V0ZTogcm91dGVcclxuICAgIH1cclxufSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcclxue1xyXG4gICAgJChcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbiAoZSlcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgY2xpY2sgYWN0aW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyBJZCBvZiB0aGUgc2lkZWJhciB0byB0b2dnbGVcclxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuZGF0YShcInNpZGViYXJcIik7XHJcblxyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIiNcIiArIHNpZGViYXIpKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCIuc2lkZWJhcl9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQodGhpcykucGFyZW50KCkucGFyZW50KCkpO1xyXG4gICAgfSlcclxuXHJcbiAgICAkKFwiLm92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQoXCIuc2lkZWJhclwiKSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKHNpZGViYXIsIGZvcmNlQ2xvc2UpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKGZvcmNlQ2xvc2UpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKHNpZGViYXIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTsgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChzaWRlYmFyKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiLm92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJvdmVybGF5LS12aXNpYmxlXCIpO1xyXG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgIH1cclxufSk7IiwiJChkb2N1bWVudCkub24oXCJtb3VzZWVudGVyXCIsIFwiLmhhc1Rvb2x0aXBcIiwgZnVuY3Rpb24oZXZlbnQpXHJcbntcclxuICAgIC8vIEdldCBjb250ZW50IGFuZCBwb3NpdGlvblxyXG4gICAgdmFyIGNvbnRlbnQgID0gJCh0aGlzKS5kYXRhKFwidG9vbHRpcFwiKTtcclxuICAgIHZhciBwb3NpdGlvbiA9IGdldE9mZnNldCh0aGlzKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdG9vbHRpcFxyXG4gICAgdmFyIHRvb2x0aXAgPSAkKFwiPGRpdiBjbGFzcz0ndG9vbHRpcCc+XCIgKyBjb250ZW50ICsgXCI8L2Rpdj5cIik7XHJcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQodG9vbHRpcCk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBwb3NpdGlvbnNcclxuICAgIHBvc2l0aW9uLnRvcCAgPSBwb3NpdGlvbi50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICBwb3NpdGlvbi5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICgkKHRoaXMpLm91dGVyV2lkdGgoKSAvIDIpIC0gKCQoXCIudG9vbHRpcFwiKS5vdXRlcldpZHRoKCkgLyAyKTtcclxuXHJcbiAgICAvLyBDaGFuZ2UgcG9zaXRpb24gb2YgdG9vbHRpcFxyXG4gICAgdG9vbHRpcC5jc3MoXCJsZWZ0XCIsIHBvc2l0aW9uLmxlZnQpO1xyXG4gICAgdG9vbHRpcC5jc3MoXCJ0b3BcIiwgcG9zaXRpb24udG9wKTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbGVhdmVcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgJChcImJvZHlcIikuZmluZChcIi50b29sdGlwXCIpLnJlbW92ZSgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldE9mZnNldChlbClcclxue1xyXG4gICAgZWwgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsZWZ0OiBlbC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXHJcbiAgICAgICAgdG9wOiBlbC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxyXG4gIH1cclxufSIsIi8qKlxyXG4gKiBIZWxwZXIgZm9yIGZpbmRpbmcsIGNyZWF0aW5nIGFuZCBkZWxldGluZyBjb29raWVzXHJcbiAqL1xyXG5mdW5jdGlvbiBDb29raWVIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29va2llWzBdLnRyaW0oKSA9PSBuYW1lKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlIGEgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgIFZhbHVlIG9mIHRoZSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5jcmVhdGVDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSlcclxuICAgIHtcclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7IFxyXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgxKjI0KjYwKjYwKjEwMDApKTsgXHJcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrIGQudG9VVENTdHJpbmcoKTsgXHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7IFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVsZXRlIGEgY29va2llIGFuZCBpdCdzIHZhbHVlXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybiB7dm9pZH1cclxuICAgICAqL1xyXG4gICAgdGhpcy5kZWxldGVDb29raWUgPSBmdW5jdGlvbihuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXIgZm9yIGNhcnQgYWN0aW9uc1xyXG4gKi9cclxuZnVuY3Rpb24gRmF2b3JpdGVMaXN0SGVscGVyKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgUHJvZGN1dCBJRCB0byByZW1vdmUgZm9tIHRoZSBjYXJcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICovXHJcbiAgICAvL3RoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXHJcbiAgICB2YXIgYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9mYXZvcml0ZWxpc3QvXCIgKyBlYW5fbnVtYmVyLCAvLyBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIlxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcclxuICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IGlzIGFsIGluIGplIGZhdm9yaWV0ZW4uXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtXHJcbiAgICB9XHJcbn0iLCJ2YXIgUm91dGVyICAgICAgID0gbmV3IFJvdXRlcigpO1xyXG52YXIgQ29va2llSGVscGVyID0gbmV3IENvb2tpZUhlbHBlcigpO1xyXG52YXIgVXNlckhlbHBlciAgICAgPSBuZXcgVXNlckhlbHBlcigpO1xyXG52YXIgV2lzaGxpc3RIZWxwZXIgPSBuZXcgV2lzaGxpc3RIZWxwZXIoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dMb2FkU2NyZWVuKClcclxue1xyXG4gICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj4gPC9kaXY+Jyk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBvbkxvYWRQYWdlKClcclxue1xyXG4gICAgJChcIi5tbWVudVwiKS5lbXB0eSgpO1xyXG4gICAgJChcIi5uYXZcIikuY2xvbmUoKS5hcHBlbmRUbyhcIi5tbWVudVwiKTtcclxuXHJcbiAgICBpZiAoVXNlckhlbHBlci5pc0FkbWluKCkpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChVc2VySGVscGVyLmlzQ3VzdG9tZXIoKSlcclxuICAgIHtcclxuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICB9XHJcbn0iLCIkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgdmFyIG8gPSB7fTtcclxuICAgIHZhciBhID0gdGhpcy5zZXJpYWxpemVBcnJheSgpO1xyXG4gICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmIChvW3RoaXMubmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpZiAoIW9bdGhpcy5uYW1lXS5wdXNoKSB7XHJcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvO1xyXG59OyIsIi8qKlxyXG4gKiBIZWxwZXIgZm9yIHVzZXIgcmVsYXRlZCBzdHVmZlxyXG4gKi9cclxuZnVuY3Rpb24gVXNlckhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgYSBndWVzdCAobm90IGxvZ2dlZCBpbilcclxuICAgICAqL1xyXG4gICAgdGhpcy5pc0xvZ2VkSW4gPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4gIT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VuICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYSBjdXN0b21lclxyXG4gICAgICovXHJcbiAgICB0aGlzLmlzQ3VzdG9tZXIgPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdXNlcnR5cGUgPSB0aGlzLmRlY29kZVRva2VuKCkudXNlcnR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJjdXN0b21lclwiIHx8IHVzZXJ0eXBlID09IFwiYWRtaW5cIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWRtaW5cclxuICAgICAqL1xyXG4gICAgdGhpcy5pc0FkbWluID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiYWRtaW5cIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERlY29kZSB0aGUgSldUIHRva2VuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZGVjb2RlVG9rZW4gPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0gYWNjZXNzVG9rZW4uc3BsaXQoXCIuXCIpWzFdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYXRvYihwYXlsb2FkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudCB1c2VyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuZ2V0VXNlckluZm8gPSBmdW5jdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9sb2dpblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBIZWxwZXIgZm9yIGNhcnQgYWN0aW9uc1xyXG4gKi9cclxuZnVuY3Rpb24gV2lzaGxpc3RIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHRoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIGVhbl9udW1iZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkhldCBwcm9kdWN0IGlzIHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSB2ZXJsYW5nbGlqc3QuXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkRpdCBwcm9kdWN0IHN0YWF0IGFsIG9wIGplIHZlcmxhbmdsaWpzdC5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvcHlMaW5rID0gZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgY29udGVudFxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwdWJsaWNfbGlua1wiKS5zZWxlY3QoKTtcclxuICAgICAgICAvLyBDb3B5IHRvIHRoZSBjbGlwYm9hcmRcclxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgfVxyXG59IiwidmFyIEFkbWluc2VydE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVEQihmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZm9ybURhdGEucmVsZWFzZV9kYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZm9ybURhdGEuamFhciwgZm9ybURhdGEubWFhbmQsIGZvcm1EYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5qYWFyO1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2FkbWluL25ld19nYW1lXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBwdWJsaXNoZXIgOiBmb3JtRGF0YS5wdWJsaXNoZXIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZSA6IGZvcm1EYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc3VidGl0bGUgOiBmb3JtRGF0YS5zdWJ0aXRsZSxcclxuICAgICAgICAgICAgICAgIGdlbnJlIDogZm9ybURhdGEuZ2VucmUsXHJcbiAgICAgICAgICAgICAgICBmcmFuY2hpc2UgOiBmb3JtRGF0YS5mcmFuY2hpc2UsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGZvcm1EYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgZWFuX251bWJlciA6IGZvcm1EYXRhLmVhbl9udW1iZXIsXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybSA6IGZvcm1EYXRhLnBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgICAgcmVsZWFzZV9kYXRlIDogZm9ybURhdGEucmVsZWFzZV9kYXRlLFxyXG4gICAgICAgICAgICAgICAgcGVnaV9hZ2UgOiBmb3JtRGF0YS5wZWdpX2FnZSxcclxuICAgICAgICAgICAgICAgIHN0b2NrIDogZm9ybURhdGEuc3RvY2ssXHJcbiAgICAgICAgICAgICAgICBwcmljZSA6IGZvcm1EYXRhLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2UgOiBmb3JtRGF0YS5pbWFnZVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2FkbWluc2VydF9fYXBpX19lcnJvcl9fbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHVwZGF0ZURCOiB1cGRhdGVEQlxyXG4gICAgfVxyXG59IiwidmFyIEFkbWluVXNlck1vZGVsID0gZnVuY3Rpb24oaWQpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0YS5qYWFyLCBkYXRhLm1hYW5kLCBkYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBkYXRhLmphYXI7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEubWFhbmQ7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBkYXRhLnVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgdXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZSxcclxuICAgICAgICBzYXZlVXNlckluZm86IHNhdmVVc2VySW5mbyxcclxuICAgICAgICBkZWxldGVVc2VyOiBkZWxldGVVc2VyXHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnNcIiwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxuXHJcbn07IiwidmFyIENhcnRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KGlkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBpZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShbY2FydF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0LnB1c2goY2FydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgaXRlbSBmcm9tIHRoZSBjYXJ0XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgY2FydCA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNhcnRbaV0uZWFuX251bWJlciA9PSBpZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q2FydDogZ2V0Q2FydCxcclxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q6IHJlbW92ZVByb2R1Y3RcclxuICAgIH1cclxufTsiLCJ2YXIgQ2hlY2tvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXJJbmZvcm1hdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoJ2NhcnQnKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkICYmIGNhcnQgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVPcmRlcihvcmRlckRhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEFwcGVuZCBkYXRhIGZvcm0gb3RoZXIgc291cmNlc1xyXG4gICAgICAgIG9yZGVyRGF0YS5zdGF0dXMgICAgICAgICA9IFwicGFpZFwiO1xyXG4gICAgICAgIG9yZGVyRGF0YS5idHdfcGVyY2VudGFnZSA9IDIxO1xyXG4gICAgICAgIG9yZGVyRGF0YS5vcmRlcl9kYXRlICAgICA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgb3JkZXJEYXRhLmRlbGl2ZXJ5X2Nvc3RzID0gMy45NTtcclxuICAgICAgICBvcmRlckRhdGEuY2FydCAgICAgICAgICAgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9vcmRlcnNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9yZGVyRGF0YSksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJjYXJ0XCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRPcmRlckluZm9ybWF0aW9uOiBnZXRPcmRlckluZm9ybWF0aW9uLFxyXG4gICAgICAgIHNhdmVPcmRlcjogc2F2ZU9yZGVyXHJcbiAgICB9XHJcbn07IiwidmFyIERlbEdhbWVNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgXHJcbn0iLCJ2YXIgRmF2b3JpdGVMaXN0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCJcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRGYXZvcml0ZUxpc3QgYWpheCBkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTsgLy9tb2V0IGRhdGEgcGVyIHNlIG1lZWdldmVuIGFhbiBjYWxsYmFjaz9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEZhdm9yaXRlTGlzdDogZ2V0RmF2b3JpdGVMaXN0LFxyXG4gICAgICAgIGRlbGV0ZUZyb21GYXZvcml0ZUxpc3Q6IGRlbGV0ZUZyb21GYXZvcml0ZUxpc3RcclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwidXNlcl9pZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PSA0MDEpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHhoci5zdGF0dXMgPT0gNDAzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZXJyb3JfYmxvY2tlZF9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICBDb29raWVIZWxwZXIuZGVsZXRlQ29va2llKFwidXNlcl9pZFwiKTtcclxuXHJcbiAgICAgICAgLy8gJ3JlbG9hZCcgcGFnZVxyXG4gICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvdXQ6IGxvZ291dFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlcnNNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIG9yZGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVyczogZ2V0T3JkZXJzLFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlck1vZGVsID0gZnVuY3Rpb24ob3JkZXJfaWQpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBvcmRlclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvb3JkZXJzL1wiICsgb3JkZXJfaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlciwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRPcmRlcjogZ2V0T3JkZXIsXHJcbiAgICAgICAgYWRkVG9GYXZvcml0ZUxpc3Q6IGFkZFRvRmF2b3JpdGVMaXN0XHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKHVzZXJfaWQpXHJcbntcclxuICAgIHRoaXMuZ2V0UHVibGljV2lzaGxpc3QgPSBmdW5jdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdXNlcl9pZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcclxuICAgICAgICBmb3JtRGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZm9ybURhdGEuamFhciwgZm9ybURhdGEubWFhbmQsIGZvcm1EYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5qYWFyO1xyXG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIDogZm9ybURhdGEudm9vcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxyXG4gICAgICAgICAgICAgICAgc3VybmFtZSA6IGZvcm1EYXRhLmFjaHRlcm5hYW0sXHJcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YS5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcclxuICAgICAgICAgICAgICAgIHBob25lX251bWJlciA6IGZvcm1EYXRhLm1vYmllbF9udW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSA6IGZvcm1EYXRhLnBvc3Rjb2RlLFxyXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcclxuICAgICAgICAgICAgICAgIHN0cmVldF9uYW1lIDogZm9ybURhdGEuc3RyYWF0bmFhbSxcclxuICAgICAgICAgICAgICAgIGNpdHkgOiBmb3JtRGF0YS5wbGFhdHNcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZXNldHBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBlbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmV3X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXNldHBhc3N3b3JkOiByZXNldHBhc3N3b3JkXHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RNb2RlbCA9IGZ1bmN0aW9uKGVhbilcclxue1xyXG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXHJcbiAgICB9XHJcbn07IiwidmFyIFN0YXRzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFRvcFRlbkRhdGEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvc3RhdHMvdG9wZ2FtZXM/Yl9kYXRlPVwiICsgYmVnaW5fZGF0ZSArIFwiJmVfZGF0ZT1cIiArIGVuZF9kYXRlLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIC8vJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmV2ZW51ZURhdGEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvc3RhdHMvcmV2P2JfZGF0ZT1cIiArIGJlZ2luX2RhdGUgKyBcIiZlX2RhdGU9XCIgKyBlbmRfZGF0ZSxcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VXNlckFtbnREYXRhKGJlZ2luX2RhdGUsIGVuZF9kYXRlLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3N0YXRzL3VzZXJhbW50P2JfZGF0ZT1cIiArIGJlZ2luX2RhdGUgKyBcIiZlX2RhdGU9XCIgKyBlbmRfZGF0ZSxcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0VG9wVGVuRGF0YTogZ2V0VG9wVGVuRGF0YSxcclxuICAgICAgICBnZXRSZXZlbnVlRGF0YTogZ2V0UmV2ZW51ZURhdGEsXHJcbiAgICAgICAgZ2V0VXNlckFtbnREYXRhOiBnZXRVc2VyQW1udERhdGFcclxuICAgIH1cclxuXHJcbn07IiwidmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKHVzZXJpZClcclxue1xyXG4gICAgZnVuY3Rpb24gR2V0VXNlckluZm8oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJzL1wiICsgdXNlcmlkLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0VXNlckluZm86IEdldFVzZXJJbmZvXHJcbiAgICB9XHJcbn07IiwidmFyIFdpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFdpc2hsaXN0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvV2lzaGxpc3Qodmlld0RhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpIC8qKyBcIi9cIiArIHZpZXdEYXRhLmVhbl9udW1iZXIqLyxcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2lkIDogdmlld0RhdGEud2lzaGxpc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAvL2Vhbl9udW1iZXIgOiB2aWV3RGF0YS5lYW5fbnVtYmVyXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIFN0cmluZyhlYW4pLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cywgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGdvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBuZXdEQlN0YXR1cyA9IFwiMFwiO1xyXG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT0gXCJwdWJsaWNcIil7XHJcbiAgICAgICAgICAgIG5ld0RCU3RhdHVzID0gXCIxXCI7XHJcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyA9PSBcInByaXZhdGVcIil7XHJcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXR1cyBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gbmV3U3RhdHVzID0gXCIgKyBuZXdTdGF0dXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9zd2l0Y2hfcHVibGljXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhdGNoXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wibmV3REJTdGF0dXNcIjpuZXdEQlN0YXR1c30pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0V2lzaGxpc3Q6IGdldFdpc2hsaXN0LFxyXG4gICAgICAgIGFkZFRvV2lzaGxpc3Q6IGFkZFRvV2lzaGxpc3QsXHJcbiAgICAgICAgZGVsZXRlRnJvbVdpc2hsaXN0OiBkZWxldGVGcm9tV2lzaGxpc3QsXHJcbiAgICAgICAgc3dpdGNoUHVibGljU3RhdGU6IHN3aXRjaFB1YmxpY1N0YXRlXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluc2VydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBhZGRNb2RlbClcclxue1xyXG4gICAgdmFyIEFkZE1vZGVsID0gYWRkTW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihmb3JtVG9EYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmb3JtVG9EYXRhKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbiBsaXN0ZW5lciB0cmlnZ2VyZWQ6IGluIGZvcm1Ub0RhdGEoKVwiKTtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xyXG4gICAgICAgICQoXCIjZXJyb3JfX21lc3NhZ2VcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXHJcbiAgICAgICAgLy8gaWYgc28sIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcInB1Ymxpc2hlclwiLCBcInRpdGxlXCIsIFwic3VidGl0bGVcIiwgXCJnZW5yZVwiLCBcImZyYW5jaGlzZVwiLCBcImRlc2NyaXB0aW9uXCIsIFwiZWFuX251bWJlclwiLCBcInBsYXRmb3JtXCIsIFwic3RvY2tcIiwgXCJwcmljZVwiLCBcImltYWdlXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBnZW5kZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XHJcblxyXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcclxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjZXJyb3JfX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBnYW1lIGluZm8gdG8gQVBJXHJcbiAgICAgICAgdXBkYXRlREIoZm9ybURhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVEQihmb3JtRGF0YSlcclxuICAgIHtcclxuICAgICAgICBBZGRNb2RlbC51cGRhdGVEQihmb3JtRGF0YSwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJnYW1lIHN1Y2Nlc3ZvbCBvcGdlc2xhZ2VuIG1ldCBwaV9pZCAuLi4uXCIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0U2F2ZUxpc3RlbmVyKHNhdmVVc2VySW5mbyk7XHJcbiAgICAgICAgdmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVVc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpIFxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZVVzZXJJbmZvKGZvcm1EYXRhLCBmdW5jdGlvbihmb3JtRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZWRlbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTsgLy9cIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldENhcnQoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGl0ZW0gdG8gdGhlIGNhcnQgYW5kIHBhc3MgaXQgdG8gdGhlIHZpZXdIZWxwZXJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGlkICBJdGVtIGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuYWRkUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5hZGRJdGVtKGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5yZW1vdmVQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0Q2FydCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBZGRQcm9kdWN0TGlzdGVuZXIoYWRkUHJvZHVjdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIENoZWNrb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJJbmZvcm1hdGlvbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3JkZXIoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZU9yZGVyKGZvcm1EYXRhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5maW5pc2hPcmRlcigpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLmNsZWFyQ2FydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldE9yZGVyTGlzdGVuZXIob3JkZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgRGVsR2FtZUNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcblxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRHYW1lc0J5U2VhcmNoKTsgLy9pbml0aWFsaXplIGh0bWwgKyBsaXN0ZW4gZm9yIGlucHV0IGluIGRlbGV0ZS1nYW1lLXNlYXJjaCBiYXJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRHYW1lc0J5U2VhcmNoKGFyZ3MpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0R2FtZXNCeVNlYXJjaChhcmdzLCBzaG93U2VhcmNoUmVzdWx0cyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzaG93U2VhcmNoUmVzdWx0cyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2hvd1NlYXJjaFJlc3VsdHMoZGF0YSwgc2V0Q2xpY2tHYW1lTGlzdGVuZXIpXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRDbGlja0dhbWVMaXN0ZW5lcigpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRDbGlja0dhbWVMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEZhdm9yaXRlTGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0RmF2b3JpdGVMaXN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZUZyb21GYXZvcml0ZUxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0RmF2b3JpdGVMaXN0KHNldFZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21GYXZvcml0ZUxpc3QoZWFuLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLmhpZGVJdGVtKGRpdl90b19oaWRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXHJcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCJwcm9kdWN0c1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwubG9nb3V0KGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlcnNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRPcmRlcnMoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldE9yZGVyKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lcihhZGRUb0Zhdm9yaXRlTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5hZGRUb0Zhdm9yaXRlTGlzdChlYW5fbnVtYmVyLCBmdW5jdGlvbiBvblN1Y2Nlc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcclxuICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTtcclxuIiwidmFyIFByb2R1Y3RzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtIChwYWdlIHJlbG9hZClcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICB2YXIgZmlsdGVycyA9ICQodGhpcykuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RmlsdGVyTGlzdGVuZXIoZmlsdGVyUHJvZHVjdHMpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBQdWJsaWNXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIG1haW5cIik7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQdWJsaWNXaXNobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHVibGljV2lzaGxpc3QoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFB1YmxpY1dpc2hsaXN0KHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcclxuICAgICAgICBmb3JtRGF0YVtcImJpcnRoX2RhdGVcIl0gPSBmb3JtRGF0YS5qYWFyICsgXCItXCIgKyBmb3JtRGF0YS5tYWFuZCArIFwiLVwiICsgZm9ybURhdGEuZGFnO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxyXG5cclxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXHJcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxyXG4gICAgICAgIHsgXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XHJcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGluZm87IGNsaWNrcyAncmVnaXN0ZXInOiB2aWV3IG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG5cclxuICAgICAgICAvLyBlbWFpbCBhbmQgcGFzc3dvcmQgYXJlIHNlbmQgdG8gQVBJOyBBUEkgY2hlY2tzIGlmIGVtYWlsIGFscmVhZHkgZXhpc3RzIChhbmQgd2hldGhlciBwYXNzd29yZCBpcyBjb3JyZWN0PykgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBSZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xyXG4gICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xyXG5cclxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXHJcbiAgICAgICAgLy8gaWYgc28sIGFib3J0IGZ1bmN0aW9uXHJcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcImVfbWFpbGFkcmVzXCIsXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcclxuXHJcbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxyXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjcmVzZXRfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLnJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9hZnRlcl9yZXNldC5odG1sJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHsgICAgICBcclxuICAgICAgICAvLyBzZXQgdmlldyB0byByZXNldCBwYXNzd29yZCBmb3JtXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xyXG5cclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4iLCJ2YXIgUHJvZHVjdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcclxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcclxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcclxuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxyXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXHJcbiAgICAgICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIudWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXHJcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGV0IHZpZXcgc2hvdyB2aWV3IHdpdGggZGF0YSBmcm9tIGRhdGFiYXNlXHJcbiAgICBmdW5jdGlvbiBzaG93VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHdoYXQgaGFwcGVuczpcclxuICAgICAgICAvLyAxKSB1c2VyIGNsaWNrcyBvbiBhIHByb2R1Y3QgXHJcbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XHJcbiAgICAgICAgLy8gMykgc3lzdGVtIHB1dHMgaW5mbyBpbiBodG1sXHJcbiAgICAgICAgLy8gNCkgdmlldyBzaG93cyBpbmZvXHJcblxyXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxyXG4gICAgICAgIG1vZGVsLkdldFByb2R1Y3RJbmZvKHNob3dWaWV3KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXHJcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldFZpZXcoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpbixcclxuICAgICAgICBzaG93VmlldyA6IHNob3dWaWV3XHJcbiAgICB9XHJcbn07IiwidmFyIFN0YXRzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0VG9wVGVuRGF0YSwgZ2V0UmV2ZW51ZURhdGEsIGdldFVzZXJBbW50RGF0YSk7IC8vXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRSYW5nZUNoYW5nZUxpc3RlbmVycyhnZXRUb3BUZW5EYXRhLCBnZXRSZXZlbnVlRGF0YSwgZ2V0VXNlckFtbnREYXRhKTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEdyYXBoU2VsZWN0TGlzdGVuZXIoZ2V0VG9wVGVuRGF0YSwgZ2V0UmV2ZW51ZURhdGEsIGdldFVzZXJBbW50RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb25zIGZvciBnZXR0aW5nIGRhdGFcclxuICAgIGZ1bmN0aW9uIGdldFRvcFRlbkRhdGEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUpIC8vZGF0ZWZvcm1hdCA9IFwieXl5eS1tbS1kZFwiXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0VG9wVGVuRGF0YShiZWdpbl9kYXRlLCBlbmRfZGF0ZSwgc2hvd1RvcEdhbWVzR3JhcGgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0UmV2ZW51ZURhdGEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UmV2ZW51ZURhdGEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIHNob3dSZXZlbnVlR3JhcGgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZ2V0VXNlckFtbnREYXRhKGJlZ2luX2RhdGUsIGVuZF9kYXRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldFVzZXJBbW50RGF0YShiZWdpbl9kYXRlLCBlbmRfZGF0ZSwgc2hvd1VzZXJBbW50R3JhcGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9ucyBmb3Igc2hvd2luZyBncmFwaHMgdXNpbmcgdGhlIGdhdGhlcmVkIGRhdGFcclxuICAgIGZ1bmN0aW9uIHNob3dUb3BHYW1lc0dyYXBoKGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zaG93VG9wR2FtZXNHcmFwaChkYXRhKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dSZXZlbnVlR3JhcGgoYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zaG93UmV2ZW51ZUdyYXBoKGJlZ2luX2RhdGUsIGVuZF9kYXRlLCBkYXRhKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNob3dVc2VyQW1udEdyYXBoKGJlZ2luX2RhdGUsIGVuZF9kYXRlLCBkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2hvd1VzZXJBbW50R3JhcGgoYmVnaW5fZGF0ZSwgZW5kX2RhdGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGdldEdyYXBoRGF0YShyYW5nZSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBNb2RlbC5nZXRHcmFwaERhdGEocmFuZ2UsIHNob3dHcmFwaHMpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZnVuY3Rpb24gc2hvd0dyYXBocyhyYW5nZSwgZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBWaWV3SGVscGVyLnNob3dHcmFwaHMocmFuZ2UsIGRhdGEpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCIiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0V2lzaGxpc3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbVdpc2hsaXN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFB1YmxpY0xpc3RlbmVyKHN3aXRjaFB1YmxpY1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0V2lzaGxpc3Qoc2V0Vmlldyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuaGlkZUl0ZW0oZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cylcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5zd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5WaWV3SGVscGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gJCgnI3NpbmdsZV91c2VyJykuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5odG1sKHZhbHVlLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5hdHRyKCdocmVmJywgJy9hZG1pbl91c2VyLycgKyB2YWx1ZS51c2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19pbnNlcnRpb25cIikuaHRtbCh2YWx1ZS5pbnNlcnRpb24pO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2xhc3RuYW1lXCIpLmh0bWwodmFsdWUuc3VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZW1haWxcIikuaHRtbCh2YWx1ZS5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fcGhvbmVudW1iZXJcIikuaHRtbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjdXNlcnNfYm9keVwiKS5hcHBlbmQodXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3NpbmdsZV91c2VyXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgIH1cclxufVxyXG5cclxuICAgIC8vZGF0IGhpZXJvbmRlciB6YXQgYWFyZGlnIHdhdCB3ZXJrIGluLi4uIERvbmFsZCB3aWwgbm9nIGZmIGhvdWRlblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNob3dVc2VycyhkYXRhKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAvLyAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciB0YWJsZSA9ICQoXCI8dGFibGUgaWQ9J3VzZXJzX3RhYmxlJz48L3RhYmxlPlwiKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHRhYmxlIGhlYWRlclxyXG4gICAgLy8gICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZD5Wb29ybmFhbTwvdGQ+PHRkPlR1c3NlbnY8L3RkPjx0ZD5BY2h0ZXJuYWFtPC90ZD48dGQ+R2VicnVpa2Vyc25hYW08L3RkPjx0ZD5lbWFpbDwvdGQ+PHRkPnR5cGU8L3RkPicpO1xyXG5cclxuICAgIC8vICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgICAgICAkLmVhY2godXNlciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikuaHRtbChTdHJpbmcodmFsdWUpKSApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gLy9mb3IgYWRkaXRpb25hbCB1c2VyIGluZm8gaWYgY2xpY2tlZFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gcm93ID0gJCgnPGRpdiBjbGFzcz1cInRvYmV0YWJsZVwiPjwvZGl2PicpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGFibGUuYXBwZW5kKHJvdyk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAkKCcjdXNlcnMnKS5hcHBlbmQodGFibGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHB1dEluZm9Jbkh0bWwoY2xpY2tlZCwgZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaW4gcHV0SW5mb0luSHRtbCgpJyk7XHJcbiAgICAvLyAgICAgLy8gc2hvdyBpbmZvIG9mIHRoZSByaWdodCB1c2VyIChpZiBub3QgYWxyZWFkeSBzaG93aW5nIGl0KVxyXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgYXMgdGFibGUgaGVhZGVyXHJcbiAgICAvLyAgICAgdmFyIGhlYWRlcnJvdyA9ICQoJzx0cj48L3RyPicpLmFwcGVuZCgnPHRkPnd3PC90ZD48dGQ+Z2VibG9ra2VlcmQ8L3RkPjx0ZD5pZDwvdGQ+PHRkPmdlbmRlcjwvdGQ+PHRkPmdlYm9vcnRlZGF0dW08L3RkPjx0ZD52cmFhZzwvdGQ+PHRkPmFudHdvb3JkPC90ZD4nKTtcclxuXHJcbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyB3aXRoIHRlIHVzZXJpbmZvXHJcbiAgICAvLyAgICAgdmFyIGluZm9yb3cgPSAkKCc8dHI+PC90cj4nKTtcclxuXHJcbiAgICAvLyAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgIC8vICAgICAkLmVhY2goZGF0YVswXSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7IC8vIGdlYmxva2tlZXJkXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ25lZSc7XHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdqYSdcclxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnZGIgZm91dD8nXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgIC8vICAgICAgICAgdmFyIHRkID0gJCgnPHRkPjwvdGQ+JykuYXBwZW5kKHZhbHVlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdrZXksIHZhbHVlOiAnICsga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgLy8gICAgICAgICBpbmZvcm93LmFwcGVuZCh0ZCk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gICAgIGluZm9yb3cuaW5zZXJ0QWZ0ZXIoICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSApO1xyXG4gICAgLy8gICAgIGhlYWRlcnJvdy5pbnNlcnRBZnRlcigkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykpO1xyXG4gICAgLy8gfVxyXG5cclxuIiwidmFyIEFkbWluc2VydFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJOZXcgR2FtZXMgLSBBWiBHYW1lc1wiXHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9hZG1pbnNlcnQvYWRtaW5zZXJ0Lmh0bWxcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyMDAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI2FkbWluc2VydF9fZm9ybVwiLCBhY3Rpb24pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0Vmlld1xyXG4gICAgfVxyXG59IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsUHJpY2UgIFRvdGFsIHByaWNlIG9mIHRoZSBjYXJ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XHJcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIG5ldyBjYXJ0IGl0ZW0gdmlzaWFibGUgaW4gdGhlIERPTVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0SXRlbSA9ICQoJzxkaXY+JykuaHRtbCgkKCcuc2lkZWJhcl9fY29udGVudF9fdG1wJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbChcIuKCrFwiICsgaXRlbS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXHJcblxyXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXHJcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcclxuICAgIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHJlbW92ZSBhIHByb2R1Y3QgZnJvbSB0aGUgRE9NIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgY2FydGl0ZW0gICA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBmcm9tIERPTSBjYXJ0XHJcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3Jlc2UgY291bnRcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEFkZFByb2R1Y3RMaXN0ZW5lcjogc2V0QWRkUHJvZHVjdExpc3RlbmVyLFxyXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5Vc2VyVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmFsdWUpXHJcbiAgICB7XHJcbiAgICAgICAgLy9wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbnVzZXIvYWRtaW51c2VyLmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLnVzZXJfaWQpICAgXHJcbiAgICAgICAgICAgICQoXCIjZmlyc3RfbmFtZVwiKS52YWwodmFsdWUuZmlyc3RfbmFtZSk7XHJcbiAgICAgICAgICAgICQoXCIjaW5zZXJ0aW9uXCIpLnZhbCh2YWx1ZS5pbnNlcnRpb24pO1xyXG4gICAgICAgICAgICAkKFwiI3N1cm5hbWVcIikudmFsKHZhbHVlLnN1cm5hbWUpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfdHlwZVwiKS52YWwodmFsdWUudXNlcl90eXBlKTtcclxuICAgICAgICAgICAgJChcIiNlbWFpbFwiKS52YWwodmFsdWUuZW1haWwpO1xyXG4gICAgICAgICAgICAkKFwiI3Bhc3N3b3JkXCIpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJ1Z1bCBoaWVyIGlldHMgaW4gb20gaGV0IHdhY2h0d29vcmQgdGUgdmVyYW5kZXJlbicpO1xyXG4gICAgICAgICAgICAkKFwiI2dlbmRlclwiKS52YWwodmFsdWUuZ2VuZGVyKTtcclxuICAgICAgICAgICAgJChcIiNkYXRlX29mX2JpcnRoXCIpLnZhbCh2YWx1ZS5kYXRlX29mX2JpcnRoKTtcclxuICAgICAgICAgICAgJChcIiNwaG9uZV9udW1iZXJcIikudmFsKHZhbHVlLnBob25lX251bWJlcik7XHJcbiAgICAgICAgICAgICQoXCIjaXNfYWN0aXZlXCIpLnZhbCh2YWx1ZS5pc19hY3RpdmUpO1xyXG4gICAgICAgICAgICAkKFwiI3VzZXJfaWRcIikudmFsKHZhbHVlLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRvZGF5ICAgICAgID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgdmFyIGRhdGVPZkJpcnRoID0gbmV3IERhdGUodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XHJcblxyXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXREYXRlKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAoaSA9IDE5MDA7IGkgPCB0b2RheS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXRGdWxsWWVhcigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAkKFwiI21hYW5kXCIpLnZhbChkYXRlT2ZCaXJ0aC5nZXRNb250aCgpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFNhdmVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3N1Ym1pdCcsICcjdXNlcmZvcm0nLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZUxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsICcjZGVsZXRlX2J0bicsIGZ1bmN0aW9uIChlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBhY3Rpb24oJCh0aGlzKS5kYXRhKFwiaWRcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0U2F2ZUxpc3RlbmVyOiBzZXRTYXZlTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyXHJcbiAgICB9XHJcbn0iLCJ2YXIgQ2hlY2tvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQmVzdGVsbGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2NoZWNrb3V0L2NoZWNrb3V0Lmh0bWwnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXJ0IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJfaW5mbyAub3JkZXJfX25hdmlnYXRlXCIpLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XHJcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcclxuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGRlbGl2ZXJ5IGRhdGUgKHdlIGFsd2F5cyBkZWxpdmVyIGluIG9uZSBkYXkpXHJcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X2RhdGVcIikuaHRtbCh0b2RheS5nZXREYXRlKCkgKyBcIiBcIiArIHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pKTtcclxuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fZGF5XCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgVXNlckhlbHBlci5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19uYW1lXCIpLmh0bWwodXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmluc2VydGlvbiArIFwiIFwiICsgdXNlci5zdXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fcG9zdGFsY29kZVwiKS5odG1sKHVzZXIuYWRkcmVzcy5wb3N0YWxfY29kZSArIFwiIFwiICsgdXNlci5hZGRyZXNzLmNpdHkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcclxuICAgIGZ1bmN0aW9uIGZpbmlzaE9yZGVyKClcclxuICAgIHtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpIGFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI2NvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHZpc2libGUgY2FydFxyXG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcclxuICAgIHtcclxuICAgICAgICAkKFwiLmNhcnRcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcclxuICAgICAgICAkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKFwi4oKsMDAuMDBcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpcm0gdGhlIG9yZGVyIHdoZW4gc2JtaXR0aW5nIHRoZSBmb3JtXHJcbiAgICBmdW5jdGlvbiBzZXRPcmRlckxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIiNvcmRlcmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRPcmRlckxpc3RlbmVyOiBzZXRPcmRlckxpc3RlbmVyLFxyXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcclxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydFxyXG4gICAgfVxyXG59OyIsInZhciBEZWxHYW1lVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG5cclxufSIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIEZhdm9yaXRlTGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkZhdm9yaWV0ZW5saWpzdCAtIEFaIEdhbWVzXCI7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cImZhdm9yaXRlbGlzdFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBsb2FkRmF2b3JpdGVsaXN0KHZpZXdEYXRhKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvYWRGYXZvcml0ZWxpc3Qodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNmYXZvcml0ZWxpc3RcIikubG9hZCgnL3ZpZXdzL2Zhdm9yaXRlbGlzdC9mYXZvcml0ZWxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIGZhdm9yaXRlbGlzdCBpdGVtcyB0byBodG1sXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIGZhdm9yaXRlX19saXN0X19pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI2Zhdm9yaXRlX19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlX19saXN0XCIpLmFwcGVuZChmYXZvcml0ZV9fbGlzdF9faXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZmF2b3JpdGVsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjZmF2b3JpdGVfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0RGVsZXRlTGlzdGVuZXIoKVwiKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVhbiA9ICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xyXG4gICAgICAgICAgICBhY3Rpb24oZWFuLCBkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIGRpdl90b19oaWRlLmZhZGVUbygyMDAsIDApLnNsaWRlVXAoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdDogbG9hZEZhdm9yaXRlbGlzdCxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxyXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbVxyXG4gICAgfVxyXG59IiwidmFyIFN0YXRzVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMpXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gbG9hZCBwYWdlXHJcbiAgICAgICAgICAgIC8vIHB1dCByYW5nZSBzd2l0Y2ggdG8gZGVmYXVsdFxyXG4gICAgICAgICAgICAvLyBnZXQgZGVmYXVsdCB2YWx1ZXMgZnJvbSBodG1sXHJcbiAgICAgICAgICAgIC8vIHNob3cgVG9wVGVuIGdyYXBoXHJcblxyXG4gICAgICAgICAgICBjdXJfZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBjdXJfZGF5ID0gY3VyX2RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB2YXIgY3VyX21vbnRoID0gY3VyX2RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgICAgIHZhciBjdXJfeWVhciA9IGN1cl9kYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZW5kX2RheSA9IHB1dFplcm9CZWZvcmVOdW0oY3VyX2RheSk7XHJcbiAgICAgICAgICAgIHZhciBlbmRfbW9udGggPSBwdXRaZXJvQmVmb3JlTnVtKGN1cl9tb250aCk7XHJcbiAgICAgICAgICAgIHZhciBlbmRfeWVhciA9IFN0cmluZyhjdXJfeWVhcik7XHJcblxyXG4gICAgICAgICAgICB2YXIgYmVnaW5fZGF0ZSA9IGNhbGNCZWdpbkRhdGUoY3VyX2RheSwgY3VyX21vbnRoLCBjdXJfeWVhciwgMyk7IC8vIGFycmF5IG9mIHN0cmluZ3M6IFswXT1kYXkgWzFdPW1vbnRoIFsyXT15ZWFyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW4gcmVhZHk6IFwiICsgZW5kX3llYXIsIGVuZF9tb250aCwgZW5kX2RheSwgYmVnaW5fZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBsb2FkIHBhZ2VcclxuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiU3RhdHMgLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZ3JhcGhzL2dyYXBocy5odG1sJywgZnVuY3Rpb24oKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmFuZ2VfYmRcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBwdXRaZXJvQmVmb3JlTnVtKGkpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmFuZ2VfZWRcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBwdXRaZXJvQmVmb3JlTnVtKGkpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDIwMTU7IGkgPCBjdXJfZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIwMDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3JhbmdlX2J5XCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3JhbmdlX2V5XCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmFuZ2VfYnlcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcmFuZ2VfZXlcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHB1dCByYW5nZSBzd2l0Y2hlcyB0byBkZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAvLyBiZWdpbiBkYXRlXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX2J5XCIpLnZhbChiZWdpbl9kYXRlWzJdKTtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmZpbmQoXCIjcmFuZ2VfYm1cIikudmFsKGJlZ2luX2RhdGVbMV0pO1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikuZmluZChcIiNyYW5nZV9iZFwiKS52YWwoYmVnaW5fZGF0ZVswXSk7XHJcbiAgICAgICAgICAgICAgICAvL2VuZCBkYXRlXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX2V5XCIpLnZhbChlbmRfeWVhciAgICAgKTtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmZpbmQoXCIjcmFuZ2VfZW1cIikudmFsKGVuZF9tb250aCAgICApO1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikuZmluZChcIiNyYW5nZV9lZFwiKS52YWwoZW5kX2RheSAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2hvd0dyYXBoQnlIdG1sKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjQmVnaW5EYXRlKGNkLCBjbSwgY3ksIG1vbnRoc19lYXJsaWVyKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBiZWdpbl9kYXRlID0gW107XHJcbiAgICAgICAgdmFyIGJlZ2luX2RheSA9IGNkO1xyXG4gICAgICAgIHZhciBiZWdpbl9tb250aCA9IGNtO1xyXG4gICAgICAgIHZhciBiZWdpbl95ZWFyID0gY3k7XHJcblxyXG4gICAgICAgIHdoaWxlIChtb250aHNfZWFybGllciA+IDApIHtcclxuICAgICAgICAgICAgYmVnaW5fbW9udGggLT0gMTtcclxuICAgICAgICAgICAgaWYgKGJlZ2luX21vbnRoID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJlZ2luX3llYXIgLT0gMTtcclxuICAgICAgICAgICAgICAgIGJlZ2luX21vbnRoICs9IDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vbnRoc19lYXJsaWVyLS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBiZWdpbl9kYXRlLnB1c2gocHV0WmVyb0JlZm9yZU51bShiZWdpbl9kYXkpKTtcclxuICAgICAgICBiZWdpbl9kYXRlLnB1c2gocHV0WmVyb0JlZm9yZU51bShiZWdpbl9tb250aCkpO1xyXG4gICAgICAgIGJlZ2luX2RhdGUucHVzaChTdHJpbmcoYmVnaW5feWVhcikpO1xyXG4gICAgICAgIHJldHVybiBiZWdpbl9kYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dHcmFwaEJ5SHRtbChhY3Rpb24xLCBhY3Rpb24yLCBhY3Rpb24zKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBieSA9ICQoXCIjY29tcG9uZW50XCIpLmZpbmQoXCIjcmFuZ2VfYnlcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGJtID0gJChcIiNjb21wb25lbnRcIikuZmluZChcIiNyYW5nZV9ibVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgYmQgPSAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX2JkXCIpLnZhbCgpO1xyXG4gICAgICAgIHZhciBleSA9ICQoXCIjY29tcG9uZW50XCIpLmZpbmQoXCIjcmFuZ2VfZXlcIikudmFsKCk7XHJcbiAgICAgICAgdmFyIGVtID0gJChcIiNjb21wb25lbnRcIikuZmluZChcIiNyYW5nZV9lbVwiKS52YWwoKTtcclxuICAgICAgICB2YXIgZWQgPSAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX2VkXCIpLnZhbCgpO1xyXG5cclxuICAgICAgICB2YXIgYmVnaW5fZGF0ZSA9IGJ5ICsgXCItXCIgKyBibSArIFwiLVwiICsgYmQ7XHJcbiAgICAgICAgdmFyIGVuZF9kYXRlID0gZXkgKyBcIi1cIiArIGVtICsgXCItXCIgKyBlZDtcclxuXHJcbiAgICAgICAgdmFyIGdyYXBoX2Nob2ljZSA9ICQoXCIjY29tcG9uZW50XCIpLmZpbmQoXCIjZ3JhcGhfY2hvaWNlXCIpLnZhbCgpO1xyXG4gICAgICAgIGlmIChncmFwaF9jaG9pY2UgPT0gXCJ0b3BnYW1lc1wiKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjEoYmVnaW5fZGF0ZSwgZW5kX2RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JhcGhfY2hvaWNlID09IFwicmV2ZW51ZVwiKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbjIoYmVnaW5fZGF0ZSwgZW5kX2RhdGUpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZ3JhcGhfY2hvaWNlID09IFwidXNlcmFtbnRcIikge1xyXG4gICAgICAgICAgICBhY3Rpb24zKGJlZ2luX2RhdGUsIGVuZF9kYXRlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImdyYXBoX2Nob2ljZSBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gZ3JhcGhfY2hvaWNlID0gXCIgKyBncmFwaF9jaG9pY2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRSYW5nZUNoYW5nZUxpc3RlbmVycyhzaG93VG9wR2FtZXMsIHNob3dSZXZlbnVlLCBzaG93VXNlckFtbnQpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2VcIiwgXCIucmFuZ2VcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hvd0dyYXBoQnlIdG1sKHNob3dUb3BHYW1lcywgc2hvd1JldmVudWUsIHNob3dVc2VyQW1udCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRHcmFwaFNlbGVjdExpc3RlbmVyKHNob3dUb3BHYW1lcywgc2hvd1JldmVudWUsIHNob3dVc2VyQW1udClcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZVwiLCBcIiNncmFwaF9jaG9pY2VcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc2hvd0dyYXBoQnlIdG1sKHNob3dUb3BHYW1lcywgc2hvd1JldmVudWUsIHNob3dVc2VyQW1udCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwdXRaZXJvQmVmb3JlTnVtIChudW0pIHtcclxuICAgICAgICBpZiAocGFyc2VJbnQobnVtKSA8IDEwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbnVtID0gXCIwXCIgKyBTdHJpbmcobnVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKG51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9ucyBmb3Igc2hvd2luZyBhIGdyYXBoXHJcbiAgICBmdW5jdGlvbiBzaG93VG9wR2FtZXNHcmFwaChncmFwaERhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ3JhcGhcclxuICAgICAgICB2YXIgbGFiZWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGdhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgdmFyIGxhc3RfcmFua19udW0gPSAwOyAvL2Fzc3VtaW5nIHZhbHVlLnJhbmsgaXMgbmV2ZXIgMCFcclxuICAgICAgICB2YXIgaGlnaGVzdFZhbCA9IDA7XHJcblxyXG4gICAgICAgICQuZWFjaChncmFwaERhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgZ2FtZUNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICBpZiAoZ2FtZUNvdW50IDwgMTEgfHwgdmFsdWUucmFuayA9PSBsYXN0X3JhbmtfbnVtKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbHMucHVzaCh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2godmFsdWUudXNlcl9jb3VudCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ291bnQgPT0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0X3JhbmtfbnVtID0gdmFsdWUucmFuaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgY2hhcnRcclxuICAgICAgICB2YXIgZ3JhcGhfZWwgPSAkKFwiI2dyYXBoXCIpO1xyXG4gICAgICAgIGdyYXBoX2VsLmVtcHR5KCk7XHJcbiAgICAgICAgZ3JhcGhfZWwuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZ3JhcGhfX2Rlc2NyaXB0aW9uIG1lc3NhZ2UgbWVzc2FnZS0taW5mb1wiIGlkPVwiZ3JhcGhfX2Rlc2NyaXB0aW9uXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgZ3JhcGhfZWwuYXBwZW5kKCc8Y2FudmFzIGlkPVwiZ3JhcGhfX2NudnNcIiB3aWR0aD1cIjgwMFwiIGhlaWdodD1cIjQwMFwiPjwvY2FudmFzPicpO1xyXG5cclxuICAgICAgICAvLyBhZGQgbmV3IGNoYXJ0XHJcbiAgICAgICAgdmFyIGVsID0gJChcIiNncmFwaF9fY252c1wiKTtcclxuICAgICAgICB2YXIgVG9wR2FtZXNDaGFydCA9IG5ldyBDaGFydChlbCwge1xyXG4gICAgICAgICAgICB0eXBlOiAnaG9yaXpvbnRhbEJhcicsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDIwMCwgMjYsIDEpJywgLy9ncm9lblxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJCZXN0IHZlcmtvY2h0ZSBnYW1lc1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtYXhSb3RhdGlvbjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW5Sb3RhdGlvbjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBkZXNjcmlwdGlvblxyXG4gICAgICAgIHZhciB0aGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoX19kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB0aGVEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAvLyBwdXQgZGVzY2lwdGlvbiBiZWxvdyBncmFwaFxyXG4gICAgICAgIHZhciBkZXNjciA9ICdEZXplIGdyYWZpZWsgbGFhdCBkZSBnYW1lcyB6aWVuIG1ldCBoZXQgbWVlc3RlIGFhbnRhbCBnZWJydWlrZXJzIGRhdCBkZSBnYW1lIDEgb2YgbWVlciBrZWVyIGhlZWZ0IGdla29jaHQgaW4gZGUgZ2Vrb3plbiB0aWpkc3BlcmlvZGUuJztcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyKTsgXHJcbiAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpOyBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93UmV2ZW51ZUdyYXBoKGJlZ2luX2RhdGUsIGVuZF9kYXRlLCBncmFwaERhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ3JhcGhcclxuICAgICAgICB2YXIgbGFiZWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGFsbCBkYXRlcyBpbiB4LWF4aXMuIHB1dCBhbGwgY29ycmVzcG9uZGluZyBkYXRhIGluIGdyYXBoXHJcbiAgICAgICAgdmFyIGJfZGF0ZUEgPSBiZWdpbl9kYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICB2YXIgeSA9IHBhcnNlSW50KGJfZGF0ZUFbMF0pO1xyXG4gICAgICAgIHZhciBtID0gcGFyc2VJbnQoYl9kYXRlQVsxXSk7XHJcbiAgICAgICAgdmFyIGQgPSBwYXJzZUludChiX2RhdGVBWzJdKTtcclxuXHJcbiAgICAgICAgdmFyIGVfZGF0ZUEgPSBlbmRfZGF0ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgdmFyIGVuZF95ID0gcGFyc2VJbnQoZV9kYXRlQVswXSk7XHJcbiAgICAgICAgdmFyIGVuZF9tID0gcGFyc2VJbnQoZV9kYXRlQVsxXSk7XHJcbiAgICAgICAgdmFyIGVuZF9kID0gcGFyc2VJbnQoZV9kYXRlQVsyXSk7XHJcblxyXG4gICAgICAgIHZhciBpID0gMDtcclxuICAgICAgICB2YXIgZGJfZGF0ZSA9IGdyYXBoRGF0YVtpXS5vcmRlcl9kYXRlLnNwbGl0KFwiVFwiKVswXTtcclxuICAgICAgICB2YXIgaW5zZXJ0X2ludG9fbmV4dF9pdGVyYXRpb24gPSAwO1xyXG4gICAgICAgIHZhciBpbnNlcnRfcHJldj1mYWxzZTtcclxuICAgICAgICB3aGlsZSAoISh5ID09IGVuZF95ICYmIG0gPT0gZW5kX20gJiYgZCA9PSBlbmRfZCkpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSAoU3RyaW5nKHkpICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKG0pICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKGQpKTtcclxuICAgICAgICAgICAgLy9wcmV2ZW50IG1ham9yIGJ1Z1xyXG4gICAgICAgICAgICBpZiAoZ2V0RGF0ZVNjb3JlKGRiX2RhdGUpIDwgZ2V0RGF0ZVNjb3JlKGRhdGUpICYmIGkgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaSs9MTtcclxuICAgICAgICAgICAgICAgIHZhciBkYl9kYXRlID0gZ3JhcGhEYXRhW2ldLm9yZGVyX2RhdGUuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8veC1heGlzXHJcbiAgICAgICAgICAgIGxhYmVscy5wdXNoKGRhdGUpO1xyXG4gICAgICAgICAgICAvL3ktYXhpc1xyXG4gICAgICAgICAgICBpZiAoZGF0ZSA9PSBkYl9kYXRlICYmIGkgPCBncmFwaERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0X3ByZXYpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChpbnNlcnRfaW50b19uZXh0X2l0ZXJhdGlvbilcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0X3ByZXY9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGluc2VydF9pbnRvX25leHRfaXRlcmF0aW9uID0gZ3JhcGhEYXRhW2ldLmRheV9wcmljZTtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBkYl9kYXRlXHJcbiAgICAgICAgICAgICAgICBpICs9IDE7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IGdyYXBoRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYl9kYXRlID0gZ3JhcGhEYXRhW2ldLm9yZGVyX2RhdGUuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluc2VydF9wcmV2KXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goaW5zZXJ0X2ludG9fbmV4dF9pdGVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2goMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRfcHJldj1mYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL21ha2UgbmV4dCBkYXRlXHJcbiAgICAgICAgICAgIGQgKz0gMTtcclxuICAgICAgICAgICAgaWYgKGQ+MzEpIHtcclxuICAgICAgICAgICAgICAgIGQ9MTsgbSs9MTtcclxuICAgICAgICAgICAgICAgIGlmIChtPjEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbT0xOyB5Kz0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vLy8gZW5kIGRhdGUgKGRvZXNuJ3QgZ28gdGhyb3VnaCB0aGUgd2hpbGUgbG9vcCBhYm92ZSlcclxuICAgICAgICB2YXIgZGF0ZSA9IChTdHJpbmcoeSkgKyBcIi1cIiArIHB1dFplcm9CZWZvcmVOdW0obSkgKyBcIi1cIiArIHB1dFplcm9CZWZvcmVOdW0oZCkpO1xyXG4gICAgICAgIC8veC1heGlzXHJcbiAgICAgICAgbGFiZWxzLnB1c2goZGF0ZSk7XHJcbiAgICAgICAgLy95LWF4aXNcclxuICAgICAgICBpZiAoaW5zZXJ0X3ByZXYpe1xyXG4gICAgICAgICAgICBkYXRhLnB1c2goaW5zZXJ0X2ludG9fbmV4dF9pdGVyYXRpb24pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBjaGFydFxyXG4gICAgICAgIHZhciBncmFwaF9lbCA9ICQoXCIjZ3JhcGhcIik7XHJcbiAgICAgICAgZ3JhcGhfZWwuZW1wdHkoKTtcclxuICAgICAgICBncmFwaF9lbC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJncmFwaF9fZGVzY3JpcHRpb24gbWVzc2FnZSBtZXNzYWdlLS1pbmZvXCIgaWQ9XCJncmFwaF9fZGVzY3JpcHRpb25cIj48L2Rpdj4nKTtcclxuICAgICAgICBncmFwaF9lbC5hcHBlbmQoJzxjYW52YXMgaWQ9XCJncmFwaF9fY252c1wiIHdpZHRoPVwiODAwXCIgaGVpZ2h0PVwiNDAwXCI+PC9jYW52YXM+Jyk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBuZXcgY2hhcnRcclxuICAgICAgICB2YXIgZWwgPSAkKFwiI2dyYXBoX19jbnZzXCIpO1xyXG4gICAgICAgIHZhciBSZXZDaGFydCA9IG5ldyBDaGFydChlbCwge1xyXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDIwMCwgMjYsIDEpJywgLy9ncm9lbiAvL3dlZz9cclxuICAgICAgICAgICAgICAgICAgICAvL2JvcmRlcldpZHRoOiAxLCAvL3dlZz9cclxuICAgICAgICAgICAgICAgICAgICBzcGFuR2FwczpmYWxzZSxcclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJPbXpldFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzp0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3RhdGlvbjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5Sb3RhdGlvbjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBkZXNjcmlwdGlvblxyXG4gICAgICAgIHZhciB0aGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoX19kZXNjcmlwdGlvblwiKTtcclxuICAgICAgICB0aGVEaXYuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICAvLyBwdXQgZGVzY2lwdGlvbiBiZWxvdyBncmFwaFxyXG4gICAgICAgIHZhciBkZXNjciA9ICdEZSBnZWdlbmVyZWVyZGUgb216ZXQuJztcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyKTsgXHJcbiAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dVc2VyQW1udEdyYXBoKGJlZ2luX2RhdGUsIGVuZF9kYXRlLCBncmFwaERhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ3JhcGhcclxuICAgICAgICB2YXIgbGFiZWxzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGFsbCBkYXRlcyBpbiB4LWF4aXMuIHB1dCBhbGwgY29ycmVzcG9uZGluZyBkYXRhIGluIGdyYXBoXHJcbiAgICAgICAgdmFyIGJfZGF0ZUEgPSBiZWdpbl9kYXRlLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICB2YXIgeSA9IHBhcnNlSW50KGJfZGF0ZUFbMF0pO1xyXG4gICAgICAgIHZhciBtID0gcGFyc2VJbnQoYl9kYXRlQVsxXSk7XHJcbiAgICAgICAgdmFyIGQgPSBwYXJzZUludChiX2RhdGVBWzJdKTtcclxuXHJcbiAgICAgICAgdmFyIGVfZGF0ZUEgPSBlbmRfZGF0ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgdmFyIGVuZF95ID0gcGFyc2VJbnQoZV9kYXRlQVswXSk7XHJcbiAgICAgICAgdmFyIGVuZF9tID0gcGFyc2VJbnQoZV9kYXRlQVsxXSk7XHJcbiAgICAgICAgdmFyIGVuZF9kID0gcGFyc2VJbnQoZV9kYXRlQVsyXSk7XHJcblxyXG4gICAgICAgIHZhciBkYXlfdXNlcmNvdW50ID0gMDtcclxuICAgICAgICB2YXIgZGF0ZXNjb3JlID0gMDtcclxuICAgICAgICB3aGlsZSAoISh5ID09IGVuZF95ICYmIG0gPT0gZW5kX20gJiYgZCA9PSBlbmRfZCkpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSAoU3RyaW5nKHkpICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKG0pICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKGQpKTtcclxuICAgICAgICAgICAgLy94LWF4aXNcclxuICAgICAgICAgICAgbGFiZWxzLnB1c2goZGF0ZSk7XHJcbiAgICAgICAgICAgIC8veS1heGlzXHJcbiAgICAgICAgICAgIHZhciBkYXRlc2NvcmUgPSBnZXREYXRlU2NvcmUoZGF0ZSk7XHJcbiAgICAgICAgICAgICQuZWFjaChncmFwaERhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhciB1c2Vyc2NvcmUgPSBnZXREYXRlU2NvcmUodmFsdWUucmVnaXN0cmF0aW9uX2RhdGUuc3BsaXQoXCJUXCIpWzBdKTtcclxuICAgICAgICAgICAgICAgIGlmICh1c2Vyc2NvcmUrMSA8IGRhdGVzY29yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheV91c2VyY291bnQgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgZGF0YS5wdXNoKGRheV91c2VyY291bnQpO1xyXG4gICAgICAgICAgICBkYXlfdXNlcmNvdW50ID0gMDtcclxuICAgICAgICAgICAgLy9tYWtlIG5leHQgZGF0ZVxyXG4gICAgICAgICAgICBkICs9IDE7XHJcbiAgICAgICAgICAgIGlmIChkPjMxKSB7XHJcbiAgICAgICAgICAgICAgICBkPTE7IG0rPTE7XHJcbiAgICAgICAgICAgICAgICBpZiAobT4xMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG09MTsgeSs9MTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vIGVuZCBkYXRlIChkb2Vzbid0IGdvIHRocm91Z2ggdGhlIHdoaWxlIGxvb3AgYWJvdmUpXHJcbiAgICAgICAgdmFyIGRhdGUgPSAoU3RyaW5nKHkpICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKG0pICsgXCItXCIgKyBwdXRaZXJvQmVmb3JlTnVtKGQpKTtcclxuICAgICAgICAvL3gtYXhpc1xyXG4gICAgICAgIGxhYmVscy5wdXNoKGRhdGUpO1xyXG4gICAgICAgIC8veS1heGlzXHJcbiAgICAgICAgdmFyIGRhdGVzY29yZSA9IGdldERhdGVTY29yZShkYXRlKTtcclxuICAgICAgICAkLmVhY2goZ3JhcGhEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHVzZXJzY29yZSA9IGdldERhdGVTY29yZSh2YWx1ZS5yZWdpc3RyYXRpb25fZGF0ZS5zcGxpdChcIlRcIilbMF0pO1xyXG4gICAgICAgICAgICBpZiAodXNlcnNjb3JlKzEgPCBkYXRlc2NvcmUpIHtcclxuICAgICAgICAgICAgICAgIGRheV91c2VyY291bnQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZGF0YS5wdXNoKGRheV91c2VyY291bnQpO1xyXG4gICAgICAgIGRheV91c2VyY291bnQgPSAwO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgb2xkIGNoYXJ0XHJcbiAgICAgICAgdmFyIGdyYXBoX2VsID0gJChcIiNncmFwaFwiKTtcclxuICAgICAgICBncmFwaF9lbC5lbXB0eSgpO1xyXG4gICAgICAgIGdyYXBoX2VsLmFwcGVuZCgnPGRpdiBjbGFzcz1cImdyYXBoX19kZXNjcmlwdGlvbiBtZXNzYWdlIG1lc3NhZ2UtLWluZm9cIiBpZD1cImdyYXBoX19kZXNjcmlwdGlvblwiPjwvZGl2PicpO1xyXG4gICAgICAgIGdyYXBoX2VsLmFwcGVuZCgnPGNhbnZhcyBpZD1cImdyYXBoX19jbnZzXCIgd2lkdGg9XCI4MDBcIiBoZWlnaHQ9XCI0MDBcIj48L2NhbnZhcz4nKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIG5ldyBjaGFydFxyXG4gICAgICAgIHZhciBlbCA9ICQoXCIjZ3JhcGhfX2NudnNcIik7XHJcbiAgICAgICAgdmFyIFJldkNoYXJ0ID0gbmV3IENoYXJ0KGVsLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMjAwLCAyNiwgMSknLCAvL2dyb2VuIC8vd2VnP1xyXG4gICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyV2lkdGg6IDEsIC8vd2VnP1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW5HYXBzOmZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFhbnRhbCBnZWJydWlrZXJzXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOnRydWUsXHJcbiAgICAgICAgICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvdGF0aW9uOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblJvdGF0aW9uOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgZGVzY3JpcHRpb25cclxuICAgICAgICB2YXIgdGhlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncmFwaF9fZGVzY3JpcHRpb25cIik7XHJcbiAgICAgICAgdGhlRGl2LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgLy8gcHV0IGRlc2NpcHRpb24gYmVsb3cgZ3JhcGhcclxuICAgICAgICB2YXIgZGVzY3IgPSAnRGV6ZSBncmFmaWVrIGdlZWZ0IGVlbiBvdmVyemljaHQgdmFuIGhldCBhYW50YWwgJztcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyKTsgXHJcbiAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldERhdGVTY29yZShkYXRlKSAvL2V4cGVjdGVkIGZvcm1hdDogXCJ5eXl5LW1tLWRkXCIgKHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB2YXIgeWVhcl9wb2ludHMgID0gMTIqMzEqMTtcclxuICAgICAgICB2YXIgbW9udGhfcG9pbnRzID0gICAgMzEqMTtcclxuICAgICAgICB2YXIgZGF5X3BvaW50cyAgID0gICAgICAgMTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGVBID0gZGF0ZS5zcGxpdChcIi1cIik7XHJcbiAgICAgICAgdmFyIHkgPSBwYXJzZUludChkYXRlQVswXSk7XHJcbiAgICAgICAgdmFyIG0gPSBwYXJzZUludChkYXRlQVsxXSk7XHJcbiAgICAgICAgdmFyIGQgPSBwYXJzZUludChkYXRlQVsyXSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoeSp5ZWFyX3BvaW50cyArIG0qbW9udGhfcG9pbnRzICsgZCpkYXlfcG9pbnRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRSYW5nZUNoYW5nZUxpc3RlbmVyczogc2V0UmFuZ2VDaGFuZ2VMaXN0ZW5lcnMsXHJcbiAgICAgICAgc2V0R3JhcGhTZWxlY3RMaXN0ZW5lcjogc2V0R3JhcGhTZWxlY3RMaXN0ZW5lcixcclxuICAgICAgICBzaG93VG9wR2FtZXNHcmFwaDogc2hvd1RvcEdhbWVzR3JhcGgsXHJcbiAgICAgICAgc2hvd1JldmVudWVHcmFwaDogc2hvd1JldmVudWVHcmFwaCxcclxuICAgICAgICBzaG93VXNlckFtbnRHcmFwaDogc2hvd1VzZXJBbW50R3JhcGhcclxuICAgIH1cclxufVxyXG4iLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ2luL2xvZ2luLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGxvZ2luIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ2xvZ2luJywgcGVyZm9ybSBhY3Rpb24gKG1ha2UgY29udHJvbGxlciBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUEkpXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcob3JkZXIpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVyL29yZGVyLmh0bWwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRGF0ZVxyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybWF0IHNoaXBwaW5nIG1ldGhvZFxyXG4gICAgICAgICAgICBzd2l0Y2gob3JkZXIuc2hpcHBpbmdfbWV0aG9kKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVsaXZlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGlja3VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpbGwgb3JkZXIgaW5mb1xyXG4gICAgICAgICAgICAkKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fcGF5bWVudG1ldGhvZFwiKS5odG1sKG9yZGVyLnBheW1lbnRfbWV0aG9kKTtcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwob3JkZXIuc2hpcHBpbmdfbWV0aG9kKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0c1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXIucHJvZHVjdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19hbW91bnRcIikuaHRtbChcIjxiPkFhbnRhbDo8L2I+IFwiICsgdmFsdWUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIuYWRkVG9GYXZvcml0ZXNCdXR0b25cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8aHIgLz5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBhbmQgbW92ZSB0b3RhbCBwcmljZSB0byBlbmQgb2YgbGlzdFxyXG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIudG90YWxfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBvcmRlci50b3RhbF9vcmRlcl9wcmljZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiLmFkZFRvRmF2b3JpdGVzQnV0dG9uXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgYWN0aW9uKGVhbik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyOiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIE9yZGVyc1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcnMpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVycy9vcmRlcnMuaHRtbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXIgPSAkKCcjc2luZ2xlX29yZGVyJykuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcclxuICAgICAgICAgICAgICAgIHN3aXRjaCh2YWx1ZS5zaGlwcGluZ19tZXRob2QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2hpcHBpbmdfbWV0aG9kID0gXCJCZXpvcmdlbiAodmlhIFBvc3ROTClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zaGlwcGluZ19tZXRob2QgPSBcIk9waGFsZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX251bWJlclwiKS5odG1sKHZhbHVlLm9yZGVyX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyB2YWx1ZS50b3RhbF9vcmRlcl9wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwodmFsdWUucGF5bWVudF9tZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwodmFsdWUuc2hpcHBpbmdfbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX2xpbmsgYVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9vcmRlci9cIiArIHZhbHVlLm9yZGVyX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNvcmRlcnNfYm9keVwiKS5hcHBlbmQob3JkZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNzaW5nbGVfb3JkZXJcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcclxuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICBpZiAodmlld0RhdGEuZGF0YSAhPSB1bmRlZmluZWQgJiYgdmlld0RhdGEuZGF0YSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2godmlld0RhdGEuZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fc3VidGl0bGVcIikuYXBwZW5kKHZhbHVlLmdlbnJlICsoXCIgfCBQRUdJIFwiKSArIHZhbHVlLnBlZ2lfYWdlICsoXCIgfCBcIikrIFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIjYnV0dG9uc19faW5mbywgLnByb2R1Y3RfX2ltYWdlIGEsIC5wcm9kdWN0X190aXRsZVwiKS5hdHRyKFwiaHJlZlwiLCBcInByb2R1Y3QvXCIgKyB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5hZGR0b2NhcnRcIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBCdWlsZCBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAodmlld0RhdGEucGFnZXMubGFzdCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmlld0RhdGEucGFnZXMubGFzdCA9IHZpZXdEYXRhLnBhZ2VzLnByZXYgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCB2aWV3RGF0YS5wYWdlcy5sYXN0ICsgMTsgaSsrKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uID0gJChcIiNwYWdpbmF0aW9uX19pdGVtXCIpLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQocGFnaW5hdGlvbikuZmluZChcIi5wYWdpbmF0aW9uX19saW5rXCIpLmh0bWwoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09IHZpZXdEYXRhLnBhZ2VzLm5leHQgLSAxIHx8IGkgPT0gdmlld0RhdGEucGFnZXMucHJldiArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHBhZ2luYXRpb24pLmZpbmQoXCIucGFnaW5hdGlvbl9fbGlua1wiKS5hZGRDbGFzcyhcInBhZ2luYXRpb25fX2xpbmstLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcGFnaW5hdGlvbl9faXRlbXNcIikuYXBwZW5kKHBhZ2luYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz48Yj5IZWxhYXMuLjwvYj48YnIgLz5FciB6aWpuIGdlZW4gZ2FtZXMgZ2V2b25kZW4gZGllIHZvbGRvZW4gYWFuIGRlIGdla296ZW4gZmlsdGVycy48L2Rpdj5cIilcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgJChcIiNwYWdpbmF0aW9uX19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9TaG93IG1vcmUvbGVzc1xyXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xyXG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XHJcbiAgICAgICAgdmFyIFdvcmRzQXJyYXkgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcclxuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yKGk9MDsgaTxTaG93QW1vdW50OyBpKyspe1xyXG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9ydFN0cmluZytcIi4uLlwiO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RmlsdGVyTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT1jaGVja2JveF1cIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJChcIiNwYWdlZmlsdGVyXCIpLnZhbCgwKTtcclxuICAgICAgICAgICAgcmVmcmVzaFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBkZSBwcm9kdWN0ZW5saWpzdCBhbHMgZWVuIHdhYXJkZSBpbiBkZSBzbGlkZXIgdmVyYW5kZXJkKGFsbGUgbWFuaWVyZW4pXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2Uga2V5dXBcIiwgXCJpbnB1dFtuYW1lPXByaWNlLW1heF0sIGlucHV0W25hbWU9cHJpY2UtbWluXVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZigkKFwiI3ByaWNlbWluXCIpLnZhbCgpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJpY2VtaW5cIikudmFsKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwYWdlZmlsdGVyXCIpLnZhbCgwKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hQcm9kdWN0cygpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiLnBhZ2luYXRpb25fX2xpbmtcIiwgZnVuY3Rpb24oZXZlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKFwiI3BhZ2VmaWx0ZXJcIikudmFsKCQodGhpcykuaHRtbCgpKTtcclxuICAgICAgICAgICAgcmVmcmVzaFByb2R1Y3RzKCk7XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Byb2R1Y3RfZmlsdGVyXCIsIGFjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcHJvZHVjdF9maWx0ZXJcIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoUHJvZHVjdHMoKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAkKFwiI3Byb2R1Y3RzXCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PGRpdiBjbGFzcz1cImJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlMlwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UzXCI+PC9kaXY+IDwvZGl2PicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzOiBsb2FkUHJvZHVjdHMsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEZpbHRlckxpc3RlbmVyOiBzZXRGaWx0ZXJMaXN0ZW5lcixcclxuICAgIH1cclxufTsiLCJ2YXIgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pIC8vIGhlYiBkZSAkIGVyYmlqIGdlemV0LiBpbnRlcm5ldCBoYWQgaGV0IGRhYXJvdmVyICh6aWUgb25kZXJzdGFhbmRlIGNvbW1lbnQgb29rKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdEYXRhKVxyXG4gICAgICAgIGlmICh2aWV3RGF0YS5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcclxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2aWV3RGF0YS5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdCh2aWV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmlld0RhdGFbMF0uaXNfcHVibGljID09IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5pc19wdWJsaWMgaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YVswXS5pc19wdWJsaWMgPSBcIiArIHZpZXdEYXRhWzBdLmlzX3B1YmxpYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5sZW5ndGggaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YS5sZW5ndGggPSBcIiArIHZpZXdEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQdWJsaWNXaXNobGlzdChkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJWZXJsYW5nbGlqc3QgXCIgKyBkYXRhWzBdLmZpcnN0X25hbWUgKyBcIiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cInB1YmxpY193aXNobGlzdFwiPjwvZGl2PicpO1xyXG5cclxuICAgICAgICAkKFwiI3B1YmxpY193aXNobGlzdFwiKS5sb2FkKCcvdmlld3MvcHVibGljX3dpc2hsaXN0L3B1YmxpY193aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoXCIjcHVibGljX193aXNobGlzdF9faGVhZGVyXCIpLmh0bWwoXCJWZXJsYW5nbGlqc3QgdmFuIFwiICsgZGF0YVswXS5maXJzdF9uYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgd2lzaGxpc3RfaXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCAkKCcjd2lzaF9fbGlzdF9faXRlbScpLmNsb25lKCkgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Kys7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faWRcIikuYXBwZW5kKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2F2YWlsYWJpbGl0eVwiKS5hcHBlbmQoQmVzY2hpa2JhYXJoZWlkS2xldXIodmFsdWUuc3RvY2spKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19saWtlYnV0dG9uXCIpLmFwcGVuZCgpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaXRlbS5hcHBlbmRUbygkKFwiI3dpc2hfX2xpc3RcIikpO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJChcIiN3aXNoX19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdDogbG9hZFB1YmxpY1dpc2hsaXN0LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUmVnaXN0cmVyZW4gLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgIFxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyMDAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXHJcbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcclxuXHJcbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVnaXN0ZXJmb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59O1xyXG5cclxuLypcclxudmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXHJcbiAgICB7XHJcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07XHJcbiovIiwidmFyIFByb2R1Y3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcocHJvZHVjdClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHByb2R1Y3QudGl0bGUgKyBcIiAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgcHJvZHVjdC5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3RpdGxlXCIpLmh0bWwocHJvZHVjdC50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZWFuXCIpLmFwcGVuZChwcm9kdWN0LmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucGxhdGZvcm0pKTsgLy8gZnVuY3RpZSB2b29yIGxvZ29cclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcHVibGlzaGVyXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28ocHJvZHVjdC5wdWJsaXNoZXIpKTsgLy8gZnVuY3RpZSB2b29yIGxvZ29cclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGVnaVwiKS5hcHBlbmQocHJvZHVjdC5wZWdpX2FnZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2dlbnJlXCIpLmFwcGVuZChwcm9kdWN0LmdlbnJlKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZGVzY3JcIikuaHRtbChwcm9kdWN0LmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAgICAgJChcIi5hZGR0b2NhcnRcIikuYXR0cihcImRhdGEtaWRcIiwgcHJvZHVjdC5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlciBpbWdcIikuYXR0cihcImRhdGEtdG9vbHRpcFwiLCBTdHJpbmcocHJvZHVjdC5wdWJsaXNoZXIpKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGxhdGZvcm0gaW1nXCIpLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiwgU3RyaW5nKHByb2R1Y3QucGxhdGZvcm0pKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmF0dHIoXCJvbmNsaWNrXCIsIFwiV2lzaGxpc3RIZWxwZXIuYWRkSXRlbShcIiArIHByb2R1Y3QuZWFuX251bWJlciArIFwiKTtcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW1wiamFudWFyaVwiLCBcImZlYnJ1YXJpXCIsIFwibWFhcnRcIiwgXCJhcHJpbFwiLCBcIm1laVwiLCBcImp1bmlcIiwgXCJqdWxpXCIsIFwiYXVndXN0dXNcIiwgXCJzZXB0ZW1iZXJcIiwgXCJva3RvYmVyXCIsIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3JlbGVhc2VkYXRlXCIpLmFwcGVuZChkLmdldERhdGUoKSArIFwiIFwiICsgbW9udGhzW2QuZ2V0TW9udGgoKV0gKyBcIiBcIiArIGQuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgV2lzaGxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJXaXNobGlzdCAtIEFaIEdhbWVzXCI7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cIndpc2hsaXN0XCI+PC9kaXY+PC9kaXY+Jyk7XHJcblxyXG4gICAgICAgIGxvYWRXaXNobGlzdCh2aWV3RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFdpc2hsaXN0KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgbG9hZFdpc2hMaXN0XCIpO1xyXG4gICAgICAgICQoXCIjd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3dpc2hsaXN0L3dpc2hsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYWRkIGFsbCB3aXNobGlzdCBpdGVtcyB0byBodG1sXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lzaF9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKzFcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIi9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICQoXCIjc2hhcmVfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIm1haWx0bzo/c3ViamVjdD1NaWpuIHZlcmxhbmdsaWpzdCBvcCBBWi1HYW1lcy5ubCEmYm9keT1CZWtpamsgbWlqbiB2ZXJsYW5nbGlqc3Qgb3A6IGh0dHA6Ly9hei1nYW1lcy5ubC9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTsgLy8gQ0hFQ0sgRElTIVxyXG4gICAgICAgICAgICAgICAgJChcIiNjbGlwYm9hcmRfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIi9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcHVibGljX2xpbmtcIikudmFsKFwiaHR0cHM6Ly9hei1nYW1lcy5ubC9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RcIikuYXBwZW5kKHdpc2hfX2xpc3RfX2l0ZW0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmlzX3B1YmxpYyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwcml2YXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0biwgLnNoYXJlX19idG4sIC5jbGlwYm9hcmRfX2J0blwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0b3JcIikudmFsKFwicHVibGljXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gdmFsdWUgPSBcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFscyBlciBnZWVuIGl0ZW1zIGluIHdpc2hsaXN0IHN0YWFuLCBkYW4gaGlkZSBkZSB2b2xnZW5kZSBkaXZzLlxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNobGlzdF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcHVibGljX19yZWxhdGVkXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiN3aXNoX19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldERlbGV0ZUxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICghJCgnI2RlbGV0ZV9idG4nKS5oYXNDbGFzcyhcImJ0bi0tcHJlc3NlZFwiKSl7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYWRkQ2xhc3MoXCJidG4tLXByZXNzZWRcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBkaXZfdG9faGlkZSA9ICQodGhpcykuY2xvc2VzdChcIi5yb3dcIik7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oZWFuLCBkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0UHVibGljTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiI3B1YmxpY2F0b3JcIiwgZnVuY3Rpb24oKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoaWRlSXRlbShkaXZfdG9faGlkZSlcclxuICAgIHtcclxuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1N0YXR1cyk7XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT0gXCJwdWJsaWNcIikge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIuY2xpcGJvYXJkX19idG5cIikuc2hvdygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdHVzID09IFwicHJpdmF0ZVwiKSB7XHJcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5zaGFyZV9fYnRuXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi5jbGlwYm9hcmRfX2J0blwiKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7Y29uc29sZS5sb2coXCJ1bmV4cGVjdGVkIG5ld1N0YXR1cyB2YWx1ZSwgdmFsdWUgPSBcIituZXdTdGF0dXMpfVxyXG5cclxuXHJcbiAgICAgICAgJChcIiNleGFtcGxlX19idG5fX2RpdlwiKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gT3BlblNtYWxsTWFpbFdpbmRvdyh1cmwsIHdpbmRvd05hbWUsIGZlYXR1cmVzKVxyXG4gICAge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgd2luZG93TmFtZSwgZmVhdHVyZXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZFdpc2hsaXN0OiBsb2FkV2lzaGxpc3QsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lcixcclxuICAgICAgICBzZXRQdWJsaWNMaXN0ZW5lcjogc2V0UHVibGljTGlzdGVuZXIsXHJcbiAgICAgICAgaGlkZUl0ZW06IGhpZGVJdGVtLFxyXG4gICAgICAgIHNob3dFeGFtcGxlQnV0dG9uOiBzaG93RXhhbXBsZUJ1dHRvblxyXG4gICAgfVxyXG59Il19
