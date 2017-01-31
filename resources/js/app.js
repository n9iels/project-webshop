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
            url: "https://api.az-games.nl/orders",
            type: "post",
            dataType: 'json',
            data: JSON.stringify(orderData),
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
                // show 'not good email or password to user'
                $("#error_message").show();

                //$("#component").html("error function");
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
            url: "https://api.az-games.nl/products?" + filter, //? http://84.84.245.29:243 = API-locatie?
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
    function getGraphData(callback)
    {
        $.ajax({
            url: "https://api.az-games.nl/stats/topgames",
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
        //ViewHelper.getPage(getPublicWishlist);
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
    }

    function getGraphData()
    {
        Model.getGraphData(setTopTenView);
    }
    function setTopTenView(data)
    {
        ViewHelper.setTopTenView(data);
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
    function setActionListener(action)
    {
        $(document).ready(action); // if 'document ready' perform "action"
    }

    // Change the view of the page
    function setTopTenView(graphData)
    {
        console.log(graphData);
        document.title ="Stats - AZ Games";

        $("#component").load('/views/graphs/graphs.html', function () { // waar id = 'component' doe .load......
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

    return {
        setActionListener: setActionListener,
        setTopTenView: setTopTenView,
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

                $(product).find(".product__subtitle img").attr("data-tooltip", String(value.platform));

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

                $("#wish__list").append(wish__list__item);

                if (count == 0) {
                    if (value.is_public == 0) {
                        $("#publicator").val("private");
                        $("#example__btn").hide();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbnVzZXJfbW9kZWwuanMiLCJhZG1pbl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImZhdm9yaXRlbGlzdF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJzX21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwic3RhdHNfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbnVzZXJfY29udHJvbGxlci5qcyIsImFkbWluX2NvbnRyb2xsZXIuanMiLCJjYXJ0X2NvbnRyb2xsZXIuanMiLCJjaGVja291dF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwiZmF2b3JpdGVsaXN0X2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJvcmRlcnNfY29udHJvbGxlci5qcyIsIm9yZGVyX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicHVibGljX3dpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsInN0YXRzX2NvbnRyb2xsZXIuanMiLCJ1c2VyX2NvbnRyb2xsZXIuanMiLCJ3aXNobGlzdF9jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW5fdmlldy5qcyIsImFkbWludXNlci9hZG1pbnVzZXJfdmlldy5qcyIsImNhcnQvY2FydF92aWV3LmpzIiwiY2hlY2tvdXQvY2hlY2tvdXRfdmlldy5qcyIsImVycm9yL2Vycm9yX3ZpZXcuanMiLCJmYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0X3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsIm9yZGVycy9vcmRlcnNfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwid2lzaGxpc3Qvd2lzaGxpc3Rfdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQ2hhcnQuanNcclxuICogaHR0cDovL2NoYXJ0anMub3JnL1xyXG4gKiBWZXJzaW9uOiAyLjQuMFxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxNiBOaWNrIERvd25pZVxyXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcclxuICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJ0anMvQ2hhcnQuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxyXG4gKi9cclxuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgZTtlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxlLkNoYXJ0PXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHQoZSxhLGkpe2Z1bmN0aW9uIG4ocixsKXtpZighYVtyXSl7aWYoIWVbcl0pe3ZhciBzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWwmJnMpcmV0dXJuIHMociwhMCk7aWYobylyZXR1cm4gbyhyLCEwKTt2YXIgZD1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3IrXCInXCIpO3Rocm93IGQuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixkfXZhciB1PWFbcl09e2V4cG9ydHM6e319O2Vbcl1bMF0uY2FsbCh1LmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGE9ZVtyXVsxXVt0XTtyZXR1cm4gbihhP2E6dCl9LHUsdS5leHBvcnRzLHQsZSxhLGkpfXJldHVybiBhW3JdLmV4cG9ydHN9Zm9yKHZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUscj0wO3I8aS5sZW5ndGg7cisrKW4oaVtyXSk7cmV0dXJuIG59KHsxOltmdW5jdGlvbih0LGUsYSl7fSx7fV0sMjpbZnVuY3Rpb24odCxlLGEpe2Z1bmN0aW9uIGkodCl7aWYodCl7dmFyIGU9L14jKFthLWZBLUYwLTldezN9KSQvLGE9L14jKFthLWZBLUYwLTldezZ9KSQvLGk9L15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sbj0vXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxvPS8oXFx3KykvLHI9WzAsMCwwXSxsPTEscz10Lm1hdGNoKGUpO2lmKHMpe3M9c1sxXTtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHNbZF0rc1tkXSwxNil9ZWxzZSBpZihzPXQubWF0Y2goYSkpe3M9c1sxXTtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHMuc2xpY2UoMipkLDIqZCsyKSwxNil9ZWxzZSBpZihzPXQubWF0Y2goaSkpe2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQoc1tkKzFdKTtsPXBhcnNlRmxvYXQoc1s0XSl9ZWxzZSBpZihzPXQubWF0Y2gobikpe2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09TWF0aC5yb3VuZCgyLjU1KnBhcnNlRmxvYXQoc1tkKzFdKSk7bD1wYXJzZUZsb2F0KHNbNF0pfWVsc2UgaWYocz10Lm1hdGNoKG8pKXtpZihcInRyYW5zcGFyZW50XCI9PXNbMV0pcmV0dXJuWzAsMCwwLDBdO2lmKHI9eVtzWzFdXSwhcilyZXR1cm59Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT12KHJbZF0sMCwyNTUpO3JldHVybiBsPWx8fDA9PWw/dihsLDAsMSk6MSxyWzNdPWwscn19ZnVuY3Rpb24gbih0KXtpZih0KXt2YXIgZT0vXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS8sYT10Lm1hdGNoKGUpO2lmKGEpe3ZhciBpPXBhcnNlRmxvYXQoYVs0XSksbj12KHBhcnNlSW50KGFbMV0pLDAsMzYwKSxvPXYocGFyc2VGbG9hdChhWzJdKSwwLDEwMCkscj12KHBhcnNlRmxvYXQoYVszXSksMCwxMDApLGw9dihpc05hTihpKT8xOmksMCwxKTtyZXR1cm5bbixvLHIsbF19fX1mdW5jdGlvbiBvKHQpe2lmKHQpe3ZhciBlPS9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS8sYT10Lm1hdGNoKGUpO2lmKGEpe3ZhciBpPXBhcnNlRmxvYXQoYVs0XSksbj12KHBhcnNlSW50KGFbMV0pLDAsMzYwKSxvPXYocGFyc2VGbG9hdChhWzJdKSwwLDEwMCkscj12KHBhcnNlRmxvYXQoYVszXSksMCwxMDApLGw9dihpc05hTihpKT8xOmksMCwxKTtyZXR1cm5bbixvLHIsbF19fX1mdW5jdGlvbiByKHQpe3ZhciBlPWkodCk7cmV0dXJuIGUmJmUuc2xpY2UoMCwzKX1mdW5jdGlvbiBsKHQpe3ZhciBlPW4odCk7cmV0dXJuIGUmJmUuc2xpY2UoMCwzKX1mdW5jdGlvbiBzKHQpe3ZhciBlPWkodCk7cmV0dXJuIGU/ZVszXTooZT1uKHQpKT9lWzNdOihlPW8odCkpP2VbM106dm9pZCAwfWZ1bmN0aW9uIGQodCl7cmV0dXJuXCIjXCIreCh0WzBdKSt4KHRbMV0pK3godFsyXSl9ZnVuY3Rpb24gdSh0LGUpe3JldHVybiAxPmV8fHRbM10mJnRbM108MT9jKHQsZSk6XCJyZ2IoXCIrdFswXStcIiwgXCIrdFsxXStcIiwgXCIrdFsyXStcIilcIn1mdW5jdGlvbiBjKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcInJnYmEoXCIrdFswXStcIiwgXCIrdFsxXStcIiwgXCIrdFsyXStcIiwgXCIrZStcIilcIn1mdW5jdGlvbiBoKHQsZSl7aWYoMT5lfHx0WzNdJiZ0WzNdPDEpcmV0dXJuIGYodCxlKTt2YXIgYT1NYXRoLnJvdW5kKHRbMF0vMjU1KjEwMCksaT1NYXRoLnJvdW5kKHRbMV0vMjU1KjEwMCksbj1NYXRoLnJvdW5kKHRbMl0vMjU1KjEwMCk7cmV0dXJuXCJyZ2IoXCIrYStcIiUsIFwiK2krXCIlLCBcIituK1wiJSlcIn1mdW5jdGlvbiBmKHQsZSl7dmFyIGE9TWF0aC5yb3VuZCh0WzBdLzI1NSoxMDApLGk9TWF0aC5yb3VuZCh0WzFdLzI1NSoxMDApLG49TWF0aC5yb3VuZCh0WzJdLzI1NSoxMDApO3JldHVyblwicmdiYShcIithK1wiJSwgXCIraStcIiUsIFwiK24rXCIlLCBcIisoZXx8dFszXXx8MSkrXCIpXCJ9ZnVuY3Rpb24gZyh0LGUpe3JldHVybiAxPmV8fHRbM10mJnRbM108MT9wKHQsZSk6XCJoc2woXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlKVwifWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwiaHNsYShcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiUsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJod2IoXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlXCIrKHZvaWQgMCE9PWUmJjEhPT1lP1wiLCBcIitlOlwiXCIpK1wiKVwifWZ1bmN0aW9uIGIodCl7cmV0dXJuIGtbdC5zbGljZSgwLDMpXX1mdW5jdGlvbiB2KHQsZSxhKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZSx0KSxhKX1mdW5jdGlvbiB4KHQpe3ZhciBlPXQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIGUubGVuZ3RoPDI/XCIwXCIrZTplfXZhciB5PXQoNik7ZS5leHBvcnRzPXtnZXRSZ2JhOmksZ2V0SHNsYTpuLGdldFJnYjpyLGdldEhzbDpsLGdldEh3YjpvLGdldEFscGhhOnMsaGV4U3RyaW5nOmQscmdiU3RyaW5nOnUscmdiYVN0cmluZzpjLHBlcmNlbnRTdHJpbmc6aCxwZXJjZW50YVN0cmluZzpmLGhzbFN0cmluZzpnLGhzbGFTdHJpbmc6cCxod2JTdHJpbmc6bSxrZXl3b3JkOmJ9O3ZhciBrPXt9O2Zvcih2YXIgUyBpbiB5KWtbeVtTXV09U30sezY6Nn1dLDM6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDUpLG49dCgyKSxvPWZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBvKXJldHVybiB0O2lmKCEodGhpcyBpbnN0YW5jZW9mIG8pKXJldHVybiBuZXcgbyh0KTt0aGlzLnZhbHVlcz17cmdiOlswLDAsMF0saHNsOlswLDAsMF0saHN2OlswLDAsMF0saHdiOlswLDAsMF0sY215azpbMCwwLDAsMF0sYWxwaGE6MX07dmFyIGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaWYoZT1uLmdldFJnYmEodCkpdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixlKTtlbHNlIGlmKGU9bi5nZXRIc2xhKHQpKXRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSk7ZWxzZXtpZighKGU9bi5nZXRId2IodCkpKXRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyt0KydcIicpO3RoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSl9ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgdClpZihlPXQsdm9pZCAwIT09ZS5yfHx2b2lkIDAhPT1lLnJlZCl0aGlzLnNldFZhbHVlcyhcInJnYlwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS5sfHx2b2lkIDAhPT1lLmxpZ2h0bmVzcyl0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS52fHx2b2lkIDAhPT1lLnZhbHVlKXRoaXMuc2V0VmFsdWVzKFwiaHN2XCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLnd8fHZvaWQgMCE9PWUud2hpdGVuZXNzKXRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSk7ZWxzZXtpZih2b2lkIDA9PT1lLmMmJnZvaWQgMD09PWUuY3lhbil0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3QgXCIrSlNPTi5zdHJpbmdpZnkodCkpO3RoaXMuc2V0VmFsdWVzKFwiY215a1wiLGUpfX07by5wcm90b3R5cGU9e3JnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwicmdiXCIsYXJndW1lbnRzKX0saHNsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc2xcIixhcmd1bWVudHMpfSxoc3Y6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzdlwiLGFyZ3VtZW50cyl9LGh3YjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHdiXCIsYXJndW1lbnRzKX0sY215azpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiY215a1wiLGFyZ3VtZW50cyl9LHJnYkFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLnJnYn0saHNsQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuaHNsfSxoc3ZBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5oc3Z9LGh3YkFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIDEhPT10LmFscGhhP3QuaHdiLmNvbmNhdChbdC5hbHBoYV0pOnQuaHdifSxjbXlrQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuY215a30scmdiYUFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIHQucmdiLmNvbmNhdChbdC5hbHBoYV0pfSxoc2xhQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gdC5oc2wuY29uY2F0KFt0LmFscGhhXSl9LGFscGhhOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMudmFsdWVzLmFscGhhOih0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsdCksdGhpcyl9LHJlZDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMCx0KX0sZ3JlZW46ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDEsdCl9LGJsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDIsdCl9LGh1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmKHQlPTM2MCx0PTA+dD8zNjArdDp0KSx0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwwLHQpfSxzYXR1cmF0aW9uOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwxLHQpfSxsaWdodG5lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDIsdCl9LHNhdHVyYXRpb252OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwxLHQpfSx3aGl0ZW5lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLDEsdCl9LGJsYWNrbmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsMix0KX0sdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLDIsdCl9LGN5YW46ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwwLHQpfSxtYWdlbnRhOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMSx0KX0seWVsbG93OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMix0KX0sYmxhY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwzLHQpfSxoZXhTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKX0scmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHJnYmFTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHBlcmNlbnRTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LGhzbFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsdGhpcy52YWx1ZXMuYWxwaGEpfSxoc2xhU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsdGhpcy52YWx1ZXMuYWxwaGEpfSxod2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLHRoaXMudmFsdWVzLmFscGhhKX0sa2V5d29yZDpmdW5jdGlvbigpe3JldHVybiBuLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scmdiTnVtYmVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiO3JldHVybiB0WzBdPDwxNnx0WzFdPDw4fHRbMl19LGx1bWlub3NpdHk6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9W10sYT0wO2E8dC5sZW5ndGg7YSsrKXt2YXIgaT10W2FdLzI1NTtlW2FdPS4wMzkyOD49aT9pLzEyLjkyOk1hdGgucG93KChpKy4wNTUpLzEuMDU1LDIuNCl9cmV0dXJuLjIxMjYqZVswXSsuNzE1MiplWzFdKy4wNzIyKmVbMl19LGNvbnRyYXN0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubHVtaW5vc2l0eSgpLGE9dC5sdW1pbm9zaXR5KCk7cmV0dXJuIGU+YT8oZSsuMDUpLyhhKy4wNSk6KGErLjA1KS8oZSsuMDUpfSxsZXZlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbnRyYXN0KHQpO3JldHVybiBlPj03LjE/XCJBQUFcIjplPj00LjU/XCJBQVwiOlwiXCJ9LGRhcms6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT0oMjk5KnRbMF0rNTg3KnRbMV0rMTE0KnRbMl0pLzFlMztyZXR1cm4gMTI4PmV9LGxpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuZGFyaygpfSxuZWdhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wOzM+ZTtlKyspdFtlXT0yNTUtdGhpcy52YWx1ZXMucmdiW2VdO3JldHVybiB0aGlzLnNldFZhbHVlcyhcInJnYlwiLHQpLHRoaXN9LGxpZ2h0ZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzJdKz1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxkYXJrZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzJdLT1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxzYXR1cmF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMV0rPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LGRlc2F0dXJhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzFdLT1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSx3aGl0ZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHdiO3JldHVybiBlWzFdKz1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKSx0aGlzfSxibGFja2VuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmh3YjtyZXR1cm4gZVsyXSs9ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSksdGhpc30sZ3JleXNjYWxlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9LjMqdFswXSsuNTkqdFsxXSsuMTEqdFsyXTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixbZSxlLGVdKSx0aGlzfSxjbGVhcmVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmFscGhhO3JldHVybiB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsZS1lKnQpLHRoaXN9LG9wYXF1ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuYWxwaGE7cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIixlK2UqdCksdGhpc30scm90YXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbCxhPShlWzBdK3QpJTM2MDtyZXR1cm4gZVswXT0wPmE/MzYwK2E6YSx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LG1peDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT10LG49dm9pZCAwPT09ZT8uNTplLG89MipuLTEscj1hLmFscGhhKCktaS5hbHBoYSgpLGw9KChvKnI9PT0tMT9vOihvK3IpLygxK28qcikpKzEpLzIscz0xLWw7cmV0dXJuIHRoaXMucmdiKGwqYS5yZWQoKStzKmkucmVkKCksbCphLmdyZWVuKCkrcyppLmdyZWVuKCksbCphLmJsdWUoKStzKmkuYmx1ZSgpKS5hbHBoYShhLmFscGhhKCkqbitpLmFscGhhKCkqKDEtbikpfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZ2IoKX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgdCxlLGE9bmV3IG8saT10aGlzLnZhbHVlcyxuPWEudmFsdWVzO2Zvcih2YXIgciBpbiBpKWkuaGFzT3duUHJvcGVydHkocikmJih0PWlbcl0sZT17fS50b1N0cmluZy5jYWxsKHQpLFwiW29iamVjdCBBcnJheV1cIj09PWU/bltyXT10LnNsaWNlKDApOlwiW29iamVjdCBOdW1iZXJdXCI9PT1lP25bcl09dDpjb25zb2xlLmVycm9yKFwidW5leHBlY3RlZCBjb2xvciB2YWx1ZTpcIix0KSk7cmV0dXJuIGF9fSxvLnByb3RvdHlwZS5zcGFjZXM9e3JnYjpbXCJyZWRcIixcImdyZWVuXCIsXCJibHVlXCJdLGhzbDpbXCJodWVcIixcInNhdHVyYXRpb25cIixcImxpZ2h0bmVzc1wiXSxoc3Y6W1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJ2YWx1ZVwiXSxod2I6W1wiaHVlXCIsXCJ3aGl0ZW5lc3NcIixcImJsYWNrbmVzc1wiXSxjbXlrOltcImN5YW5cIixcIm1hZ2VudGFcIixcInllbGxvd1wiLFwiYmxhY2tcIl19LG8ucHJvdG90eXBlLm1heGVzPXtyZ2I6WzI1NSwyNTUsMjU1XSxoc2w6WzM2MCwxMDAsMTAwXSxoc3Y6WzM2MCwxMDAsMTAwXSxod2I6WzM2MCwxMDAsMTAwXSxjbXlrOlsxMDAsMTAwLDEwMCwxMDBdfSxvLnByb3RvdHlwZS5nZXRWYWx1ZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudmFsdWVzLGE9e30saT0wO2k8dC5sZW5ndGg7aSsrKWFbdC5jaGFyQXQoaSldPWVbdF1baV07cmV0dXJuIDEhPT1lLmFscGhhJiYoYS5hPWUuYWxwaGEpLGF9LG8ucHJvdG90eXBlLnNldFZhbHVlcz1mdW5jdGlvbih0LGUpe3ZhciBhLG49dGhpcy52YWx1ZXMsbz10aGlzLnNwYWNlcyxyPXRoaXMubWF4ZXMsbD0xO2lmKFwiYWxwaGFcIj09PXQpbD1lO2Vsc2UgaWYoZS5sZW5ndGgpblt0XT1lLnNsaWNlKDAsdC5sZW5ndGgpLGw9ZVt0Lmxlbmd0aF07ZWxzZSBpZih2b2lkIDAhPT1lW3QuY2hhckF0KDApXSl7Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyluW3RdW2FdPWVbdC5jaGFyQXQoYSldO2w9ZS5hfWVsc2UgaWYodm9pZCAwIT09ZVtvW3RdWzBdXSl7dmFyIHM9b1t0XTtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKW5bdF1bYV09ZVtzW2FdXTtsPWUuYWxwaGF9aWYobi5hbHBoYT1NYXRoLm1heCgwLE1hdGgubWluKDEsdm9pZCAwPT09bD9uLmFscGhhOmwpKSxcImFscGhhXCI9PT10KXJldHVybiExO3ZhciBkO2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspZD1NYXRoLm1heCgwLE1hdGgubWluKHJbdF1bYV0sblt0XVthXSkpLG5bdF1bYV09TWF0aC5yb3VuZChkKTtmb3IodmFyIHUgaW4gbyl1IT09dCYmKG5bdV09aVt0XVt1XShuW3RdKSk7cmV0dXJuITB9LG8ucHJvdG90eXBlLnNldFNwYWNlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZVswXTtyZXR1cm4gdm9pZCAwPT09YT90aGlzLmdldFZhbHVlcyh0KTooXCJudW1iZXJcIj09dHlwZW9mIGEmJihhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpKSx0aGlzLnNldFZhbHVlcyh0LGEpLHRoaXMpfSxvLnByb3RvdHlwZS5zZXRDaGFubmVsPWZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLnZhbHVlc1t0XTtyZXR1cm4gdm9pZCAwPT09YT9pW2VdOmE9PT1pW2VdP3RoaXM6KGlbZV09YSx0aGlzLnNldFZhbHVlcyh0LGkpLHRoaXMpfSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93LkNvbG9yPW8pLGUuZXhwb3J0cz1vfSx7MjoyLDU6NX1dLDQ6W2Z1bmN0aW9uKHQsZSxhKXtmdW5jdGlvbiBpKHQpe3ZhciBlLGEsaSxuPXRbMF0vMjU1LG89dFsxXS8yNTUscj10WzJdLzI1NSxsPU1hdGgubWluKG4sbyxyKSxzPU1hdGgubWF4KG4sbyxyKSxkPXMtbDtyZXR1cm4gcz09bD9lPTA6bj09cz9lPShvLXIpL2Q6bz09cz9lPTIrKHItbikvZDpyPT1zJiYoZT00KyhuLW8pL2QpLGU9TWF0aC5taW4oNjAqZSwzNjApLDA+ZSYmKGUrPTM2MCksaT0obCtzKS8yLGE9cz09bD8wOi41Pj1pP2QvKHMrbCk6ZC8oMi1zLWwpLFtlLDEwMCphLDEwMCppXX1mdW5jdGlvbiBuKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXSxsPU1hdGgubWluKG4sbyxyKSxzPU1hdGgubWF4KG4sbyxyKSxkPXMtbDtyZXR1cm4gYT0wPT1zPzA6ZC9zKjFlMy8xMCxzPT1sP2U9MDpuPT1zP2U9KG8tcikvZDpvPT1zP2U9Misoci1uKS9kOnI9PXMmJihlPTQrKG4tbykvZCksZT1NYXRoLm1pbig2MCplLDM2MCksMD5lJiYoZSs9MzYwKSxpPXMvMjU1KjFlMy8xMCxbZSxhLGldfWZ1bmN0aW9uIG8odCl7dmFyIGU9dFswXSxhPXRbMV0sbj10WzJdLG89aSh0KVswXSxyPTEvMjU1Kk1hdGgubWluKGUsTWF0aC5taW4oYSxuKSksbj0xLTEvMjU1Kk1hdGgubWF4KGUsTWF0aC5tYXgoYSxuKSk7cmV0dXJuW28sMTAwKnIsMTAwKm5dfWZ1bmN0aW9uIGwodCl7dmFyIGUsYSxpLG4sbz10WzBdLzI1NSxyPXRbMV0vMjU1LGw9dFsyXS8yNTU7cmV0dXJuIG49TWF0aC5taW4oMS1vLDEtciwxLWwpLGU9KDEtby1uKS8oMS1uKXx8MCxhPSgxLXItbikvKDEtbil8fDAsaT0oMS1sLW4pLygxLW4pfHwwLFsxMDAqZSwxMDAqYSwxMDAqaSwxMDAqbl19ZnVuY3Rpb24gcyh0KXtyZXR1cm4gR1tKU09OLnN0cmluZ2lmeSh0KV19ZnVuY3Rpb24gZCh0KXt2YXIgZT10WzBdLzI1NSxhPXRbMV0vMjU1LGk9dFsyXS8yNTU7ZT1lPi4wNDA0NT9NYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpOmUvMTIuOTIsYT1hPi4wNDA0NT9NYXRoLnBvdygoYSsuMDU1KS8xLjA1NSwyLjQpOmEvMTIuOTIsaT1pPi4wNDA0NT9NYXRoLnBvdygoaSsuMDU1KS8xLjA1NSwyLjQpOmkvMTIuOTI7dmFyIG49LjQxMjQqZSsuMzU3NiphKy4xODA1Kmksbz0uMjEyNiplKy43MTUyKmErLjA3MjIqaSxyPS4wMTkzKmUrLjExOTIqYSsuOTUwNSppO3JldHVyblsxMDAqbiwxMDAqbywxMDAqcl19ZnVuY3Rpb24gdSh0KXt2YXIgZSxhLGksbj1kKHQpLG89blswXSxyPW5bMV0sbD1uWzJdO3JldHVybiBvLz05NS4wNDcsci89MTAwLGwvPTEwOC44ODMsbz1vPi4wMDg4NTY/TWF0aC5wb3cobywxLzMpOjcuNzg3Km8rMTYvMTE2LHI9cj4uMDA4ODU2P01hdGgucG93KHIsMS8zKTo3Ljc4NypyKzE2LzExNixsPWw+LjAwODg1Nj9NYXRoLnBvdyhsLDEvMyk6Ny43ODcqbCsxNi8xMTYsZT0xMTYqci0xNixhPTUwMCooby1yKSxpPTIwMCooci1sKSxbZSxhLGldfWZ1bmN0aW9uIGModCl7cmV0dXJuIFcodSh0KSl9ZnVuY3Rpb24gaCh0KXt2YXIgZSxhLGksbixvLHI9dFswXS8zNjAsbD10WzFdLzEwMCxzPXRbMl0vMTAwO2lmKDA9PWwpcmV0dXJuIG89MjU1KnMsW28sbyxvXTthPS41PnM/cyooMStsKTpzK2wtcypsLGU9MipzLWEsbj1bMCwwLDBdO2Zvcih2YXIgZD0wOzM+ZDtkKyspaT1yKzEvMyotKGQtMSksMD5pJiZpKyssaT4xJiZpLS0sbz0xPjYqaT9lKzYqKGEtZSkqaToxPjIqaT9hOjI+MyppP2UrKGEtZSkqKDIvMy1pKSo2OmUsbltkXT0yNTUqbztyZXR1cm4gbn1mdW5jdGlvbiBmKHQpe3ZhciBlLGEsaT10WzBdLG49dFsxXS8xMDAsbz10WzJdLzEwMDtyZXR1cm4gMD09PW8/WzAsMCwwXToobyo9MixuKj0xPj1vP286Mi1vLGE9KG8rbikvMixlPTIqbi8obytuKSxbaSwxMDAqZSwxMDAqYV0pfWZ1bmN0aW9uIHAodCl7cmV0dXJuIG8oaCh0KSl9ZnVuY3Rpb24gbSh0KXtyZXR1cm4gbChoKHQpKX1mdW5jdGlvbiB2KHQpe3JldHVybiBzKGgodCkpfWZ1bmN0aW9uIHgodCl7dmFyIGU9dFswXS82MCxhPXRbMV0vMTAwLGk9dFsyXS8xMDAsbj1NYXRoLmZsb29yKGUpJTYsbz1lLU1hdGguZmxvb3IoZSkscj0yNTUqaSooMS1hKSxsPTI1NSppKigxLWEqbykscz0yNTUqaSooMS1hKigxLW8pKSxpPTI1NSppO3N3aXRjaChuKXtjYXNlIDA6cmV0dXJuW2kscyxyXTtjYXNlIDE6cmV0dXJuW2wsaSxyXTtjYXNlIDI6cmV0dXJuW3IsaSxzXTtjYXNlIDM6cmV0dXJuW3IsbCxpXTtjYXNlIDQ6cmV0dXJuW3MscixpXTtjYXNlIDU6cmV0dXJuW2kscixsXX19ZnVuY3Rpb24geSh0KXt2YXIgZSxhLGk9dFswXSxuPXRbMV0vMTAwLG89dFsyXS8xMDA7cmV0dXJuIGE9KDItbikqbyxlPW4qbyxlLz0xPj1hP2E6Mi1hLGU9ZXx8MCxhLz0yLFtpLDEwMCplLDEwMCphXX1mdW5jdGlvbiBrKHQpe3JldHVybiBvKHgodCkpfWZ1bmN0aW9uIFModCl7cmV0dXJuIGwoeCh0KSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gcyh4KHQpKX1mdW5jdGlvbiBNKHQpe3ZhciBlLGEsaSxuLG89dFswXS8zNjAsbD10WzFdLzEwMCxzPXRbMl0vMTAwLGQ9bCtzO3N3aXRjaChkPjEmJihsLz1kLHMvPWQpLGU9TWF0aC5mbG9vcig2Km8pLGE9MS1zLGk9NipvLWUsMCE9KDEmZSkmJihpPTEtaSksbj1sK2kqKGEtbCksZSl7ZGVmYXVsdDpjYXNlIDY6Y2FzZSAwOnI9YSxnPW4sYj1sO2JyZWFrO2Nhc2UgMTpyPW4sZz1hLGI9bDticmVhaztjYXNlIDI6cj1sLGc9YSxiPW47YnJlYWs7Y2FzZSAzOnI9bCxnPW4sYj1hO2JyZWFrO2Nhc2UgNDpyPW4sZz1sLGI9YTticmVhaztjYXNlIDU6cj1hLGc9bCxiPW59cmV0dXJuWzI1NSpyLDI1NSpnLDI1NSpiXX1mdW5jdGlvbiBDKHQpe3JldHVybiBpKE0odCkpfWZ1bmN0aW9uIEQodCl7cmV0dXJuIG4oTSh0KSl9ZnVuY3Rpb24gSSh0KXtyZXR1cm4gbChNKHQpKX1mdW5jdGlvbiBBKHQpe3JldHVybiBzKE0odCkpfWZ1bmN0aW9uIFQodCl7dmFyIGUsYSxpLG49dFswXS8xMDAsbz10WzFdLzEwMCxyPXRbMl0vMTAwLGw9dFszXS8xMDA7cmV0dXJuIGU9MS1NYXRoLm1pbigxLG4qKDEtbCkrbCksYT0xLU1hdGgubWluKDEsbyooMS1sKStsKSxpPTEtTWF0aC5taW4oMSxyKigxLWwpK2wpLFsyNTUqZSwyNTUqYSwyNTUqaV19ZnVuY3Rpb24gUCh0KXtyZXR1cm4gaShUKHQpKX1mdW5jdGlvbiBGKHQpe3JldHVybiBuKFQodCkpfWZ1bmN0aW9uIF8odCl7cmV0dXJuIG8oVCh0KSl9ZnVuY3Rpb24gUih0KXtyZXR1cm4gcyhUKHQpKX1mdW5jdGlvbiBWKHQpe3ZhciBlLGEsaSxuPXRbMF0vMTAwLG89dFsxXS8xMDAscj10WzJdLzEwMDtyZXR1cm4gZT0zLjI0MDYqbistMS41MzcyKm8rciotLjQ5ODYsYT1uKi0uOTY4OSsxLjg3NTgqbysuMDQxNSpyLGk9LjA1NTcqbitvKi0uMjA0KzEuMDU3KnIsZT1lPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGUsMS8yLjQpLS4wNTU6ZT0xMi45MiplLGE9YT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhhLDEvMi40KS0uMDU1OmE9MTIuOTIqYSxpPWk+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coaSwxLzIuNCktLjA1NTppPTEyLjkyKmksZT1NYXRoLm1pbihNYXRoLm1heCgwLGUpLDEpLGE9TWF0aC5taW4oTWF0aC5tYXgoMCxhKSwxKSxpPU1hdGgubWluKE1hdGgubWF4KDAsaSksMSksWzI1NSplLDI1NSphLDI1NSppXX1mdW5jdGlvbiBMKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gbi89OTUuMDQ3LG8vPTEwMCxyLz0xMDguODgzLG49bj4uMDA4ODU2P01hdGgucG93KG4sMS8zKTo3Ljc4NypuKzE2LzExNixvPW8+LjAwODg1Nj9NYXRoLnBvdyhvLDEvMyk6Ny43ODcqbysxNi8xMTYscj1yPi4wMDg4NTY/TWF0aC5wb3cociwxLzMpOjcuNzg3KnIrMTYvMTE2LGU9MTE2Km8tMTYsYT01MDAqKG4tbyksaT0yMDAqKG8tciksW2UsYSxpXX1mdW5jdGlvbiBPKHQpe3JldHVybiBXKEwodCkpfWZ1bmN0aW9uIEIodCl7dmFyIGUsYSxpLG4sbz10WzBdLHI9dFsxXSxsPXRbMl07cmV0dXJuIDg+PW8/KGE9MTAwKm8vOTAzLjMsbj03Ljc4NyooYS8xMDApKzE2LzExNik6KGE9MTAwKk1hdGgucG93KChvKzE2KS8xMTYsMyksbj1NYXRoLnBvdyhhLzEwMCwxLzMpKSxlPS4wMDg4NTY+PWUvOTUuMDQ3P2U9OTUuMDQ3KihyLzUwMCtuLTE2LzExNikvNy43ODc6OTUuMDQ3Kk1hdGgucG93KHIvNTAwK24sMyksaT0uMDA4ODU5Pj1pLzEwOC44ODM/aT0xMDguODgzKihuLWwvMjAwLTE2LzExNikvNy43ODc6MTA4Ljg4MypNYXRoLnBvdyhuLWwvMjAwLDMpLFtlLGEsaV19ZnVuY3Rpb24gVyh0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIGU9TWF0aC5hdGFuMihyLG8pLGE9MzYwKmUvMi9NYXRoLlBJLDA+YSYmKGErPTM2MCksaT1NYXRoLnNxcnQobypvK3IqciksW24saSxhXX1mdW5jdGlvbiB6KHQpe3JldHVybiBWKEIodCkpfWZ1bmN0aW9uIE4odCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBpPXIvMzYwKjIqTWF0aC5QSSxlPW8qTWF0aC5jb3MoaSksYT1vKk1hdGguc2luKGkpLFtuLGUsYV19ZnVuY3Rpb24gRSh0KXtyZXR1cm4gQihOKHQpKX1mdW5jdGlvbiBIKHQpe3JldHVybiB6KE4odCkpfWZ1bmN0aW9uIFUodCl7cmV0dXJuIFpbdF19ZnVuY3Rpb24gaih0KXtyZXR1cm4gaShVKHQpKX1mdW5jdGlvbiBxKHQpe3JldHVybiBuKFUodCkpfWZ1bmN0aW9uIFkodCl7cmV0dXJuIG8oVSh0KSl9ZnVuY3Rpb24gWCh0KXtyZXR1cm4gbChVKHQpKX1mdW5jdGlvbiBLKHQpe3JldHVybiB1KFUodCkpfWZ1bmN0aW9uIEoodCl7cmV0dXJuIGQoVSh0KSl9ZS5leHBvcnRzPXtyZ2IyaHNsOmkscmdiMmhzdjpuLHJnYjJod2I6byxyZ2IyY215azpsLHJnYjJrZXl3b3JkOnMscmdiMnh5ejpkLHJnYjJsYWI6dSxyZ2IybGNoOmMsaHNsMnJnYjpoLGhzbDJoc3Y6Zixoc2wyaHdiOnAsaHNsMmNteWs6bSxoc2wya2V5d29yZDp2LGhzdjJyZ2I6eCxoc3YyaHNsOnksaHN2Mmh3YjprLGhzdjJjbXlrOlMsaHN2MmtleXdvcmQ6dyxod2IycmdiOk0saHdiMmhzbDpDLGh3YjJoc3Y6RCxod2IyY215azpJLGh3YjJrZXl3b3JkOkEsY215azJyZ2I6VCxjbXlrMmhzbDpQLGNteWsyaHN2OkYsY215azJod2I6XyxjbXlrMmtleXdvcmQ6UixrZXl3b3JkMnJnYjpVLGtleXdvcmQyaHNsOmosa2V5d29yZDJoc3Y6cSxrZXl3b3JkMmh3YjpZLGtleXdvcmQyY215azpYLGtleXdvcmQybGFiOkssa2V5d29yZDJ4eXo6Six4eXoycmdiOlYseHl6MmxhYjpMLHh5ejJsY2g6TyxsYWIyeHl6OkIsbGFiMnJnYjp6LGxhYjJsY2g6VyxsY2gybGFiOk4sbGNoMnh5ejpFLGxjaDJyZ2I6SH07dmFyIFo9e2FsaWNlYmx1ZTpbMjQwLDI0OCwyNTVdLGFudGlxdWV3aGl0ZTpbMjUwLDIzNSwyMTVdLGFxdWE6WzAsMjU1LDI1NV0sYXF1YW1hcmluZTpbMTI3LDI1NSwyMTJdLGF6dXJlOlsyNDAsMjU1LDI1NV0sYmVpZ2U6WzI0NSwyNDUsMjIwXSxiaXNxdWU6WzI1NSwyMjgsMTk2XSxibGFjazpbMCwwLDBdLGJsYW5jaGVkYWxtb25kOlsyNTUsMjM1LDIwNV0sYmx1ZTpbMCwwLDI1NV0sYmx1ZXZpb2xldDpbMTM4LDQzLDIyNl0sYnJvd246WzE2NSw0Miw0Ml0sYnVybHl3b29kOlsyMjIsMTg0LDEzNV0sY2FkZXRibHVlOls5NSwxNTgsMTYwXSxjaGFydHJldXNlOlsxMjcsMjU1LDBdLGNob2NvbGF0ZTpbMjEwLDEwNSwzMF0sY29yYWw6WzI1NSwxMjcsODBdLGNvcm5mbG93ZXJibHVlOlsxMDAsMTQ5LDIzN10sY29ybnNpbGs6WzI1NSwyNDgsMjIwXSxjcmltc29uOlsyMjAsMjAsNjBdLGN5YW46WzAsMjU1LDI1NV0sZGFya2JsdWU6WzAsMCwxMzldLGRhcmtjeWFuOlswLDEzOSwxMzldLGRhcmtnb2xkZW5yb2Q6WzE4NCwxMzQsMTFdLGRhcmtncmF5OlsxNjksMTY5LDE2OV0sZGFya2dyZWVuOlswLDEwMCwwXSxkYXJrZ3JleTpbMTY5LDE2OSwxNjldLGRhcmtraGFraTpbMTg5LDE4MywxMDddLGRhcmttYWdlbnRhOlsxMzksMCwxMzldLGRhcmtvbGl2ZWdyZWVuOls4NSwxMDcsNDddLGRhcmtvcmFuZ2U6WzI1NSwxNDAsMF0sZGFya29yY2hpZDpbMTUzLDUwLDIwNF0sZGFya3JlZDpbMTM5LDAsMF0sZGFya3NhbG1vbjpbMjMzLDE1MCwxMjJdLGRhcmtzZWFncmVlbjpbMTQzLDE4OCwxNDNdLGRhcmtzbGF0ZWJsdWU6WzcyLDYxLDEzOV0sZGFya3NsYXRlZ3JheTpbNDcsNzksNzldLGRhcmtzbGF0ZWdyZXk6WzQ3LDc5LDc5XSxkYXJrdHVycXVvaXNlOlswLDIwNiwyMDldLGRhcmt2aW9sZXQ6WzE0OCwwLDIxMV0sZGVlcHBpbms6WzI1NSwyMCwxNDddLGRlZXBza3libHVlOlswLDE5MSwyNTVdLGRpbWdyYXk6WzEwNSwxMDUsMTA1XSxkaW1ncmV5OlsxMDUsMTA1LDEwNV0sZG9kZ2VyYmx1ZTpbMzAsMTQ0LDI1NV0sZmlyZWJyaWNrOlsxNzgsMzQsMzRdLGZsb3JhbHdoaXRlOlsyNTUsMjUwLDI0MF0sZm9yZXN0Z3JlZW46WzM0LDEzOSwzNF0sZnVjaHNpYTpbMjU1LDAsMjU1XSxnYWluc2Jvcm86WzIyMCwyMjAsMjIwXSxnaG9zdHdoaXRlOlsyNDgsMjQ4LDI1NV0sZ29sZDpbMjU1LDIxNSwwXSxnb2xkZW5yb2Q6WzIxOCwxNjUsMzJdLGdyYXk6WzEyOCwxMjgsMTI4XSxncmVlbjpbMCwxMjgsMF0sZ3JlZW55ZWxsb3c6WzE3MywyNTUsNDddLGdyZXk6WzEyOCwxMjgsMTI4XSxob25leWRldzpbMjQwLDI1NSwyNDBdLGhvdHBpbms6WzI1NSwxMDUsMTgwXSxpbmRpYW5yZWQ6WzIwNSw5Miw5Ml0saW5kaWdvOls3NSwwLDEzMF0saXZvcnk6WzI1NSwyNTUsMjQwXSxraGFraTpbMjQwLDIzMCwxNDBdLGxhdmVuZGVyOlsyMzAsMjMwLDI1MF0sbGF2ZW5kZXJibHVzaDpbMjU1LDI0MCwyNDVdLGxhd25ncmVlbjpbMTI0LDI1MiwwXSxsZW1vbmNoaWZmb246WzI1NSwyNTAsMjA1XSxsaWdodGJsdWU6WzE3MywyMTYsMjMwXSxsaWdodGNvcmFsOlsyNDAsMTI4LDEyOF0sbGlnaHRjeWFuOlsyMjQsMjU1LDI1NV0sbGlnaHRnb2xkZW5yb2R5ZWxsb3c6WzI1MCwyNTAsMjEwXSxsaWdodGdyYXk6WzIxMSwyMTEsMjExXSxsaWdodGdyZWVuOlsxNDQsMjM4LDE0NF0sbGlnaHRncmV5OlsyMTEsMjExLDIxMV0sbGlnaHRwaW5rOlsyNTUsMTgyLDE5M10sbGlnaHRzYWxtb246WzI1NSwxNjAsMTIyXSxsaWdodHNlYWdyZWVuOlszMiwxNzgsMTcwXSxsaWdodHNreWJsdWU6WzEzNSwyMDYsMjUwXSxsaWdodHNsYXRlZ3JheTpbMTE5LDEzNiwxNTNdLGxpZ2h0c2xhdGVncmV5OlsxMTksMTM2LDE1M10sbGlnaHRzdGVlbGJsdWU6WzE3NiwxOTYsMjIyXSxsaWdodHllbGxvdzpbMjU1LDI1NSwyMjRdLGxpbWU6WzAsMjU1LDBdLGxpbWVncmVlbjpbNTAsMjA1LDUwXSxsaW5lbjpbMjUwLDI0MCwyMzBdLG1hZ2VudGE6WzI1NSwwLDI1NV0sbWFyb29uOlsxMjgsMCwwXSxtZWRpdW1hcXVhbWFyaW5lOlsxMDIsMjA1LDE3MF0sbWVkaXVtYmx1ZTpbMCwwLDIwNV0sbWVkaXVtb3JjaGlkOlsxODYsODUsMjExXSxtZWRpdW1wdXJwbGU6WzE0NywxMTIsMjE5XSxtZWRpdW1zZWFncmVlbjpbNjAsMTc5LDExM10sbWVkaXVtc2xhdGVibHVlOlsxMjMsMTA0LDIzOF0sbWVkaXVtc3ByaW5nZ3JlZW46WzAsMjUwLDE1NF0sbWVkaXVtdHVycXVvaXNlOls3MiwyMDksMjA0XSxtZWRpdW12aW9sZXRyZWQ6WzE5OSwyMSwxMzNdLG1pZG5pZ2h0Ymx1ZTpbMjUsMjUsMTEyXSxtaW50Y3JlYW06WzI0NSwyNTUsMjUwXSxtaXN0eXJvc2U6WzI1NSwyMjgsMjI1XSxtb2NjYXNpbjpbMjU1LDIyOCwxODFdLG5hdmFqb3doaXRlOlsyNTUsMjIyLDE3M10sbmF2eTpbMCwwLDEyOF0sb2xkbGFjZTpbMjUzLDI0NSwyMzBdLG9saXZlOlsxMjgsMTI4LDBdLG9saXZlZHJhYjpbMTA3LDE0MiwzNV0sb3JhbmdlOlsyNTUsMTY1LDBdLG9yYW5nZXJlZDpbMjU1LDY5LDBdLG9yY2hpZDpbMjE4LDExMiwyMTRdLHBhbGVnb2xkZW5yb2Q6WzIzOCwyMzIsMTcwXSxwYWxlZ3JlZW46WzE1MiwyNTEsMTUyXSxwYWxldHVycXVvaXNlOlsxNzUsMjM4LDIzOF0scGFsZXZpb2xldHJlZDpbMjE5LDExMiwxNDddLHBhcGF5YXdoaXA6WzI1NSwyMzksMjEzXSxwZWFjaHB1ZmY6WzI1NSwyMTgsMTg1XSxwZXJ1OlsyMDUsMTMzLDYzXSxwaW5rOlsyNTUsMTkyLDIwM10scGx1bTpbMjIxLDE2MCwyMjFdLHBvd2RlcmJsdWU6WzE3NiwyMjQsMjMwXSxwdXJwbGU6WzEyOCwwLDEyOF0scmViZWNjYXB1cnBsZTpbMTAyLDUxLDE1M10scmVkOlsyNTUsMCwwXSxyb3N5YnJvd246WzE4OCwxNDMsMTQzXSxyb3lhbGJsdWU6WzY1LDEwNSwyMjVdLHNhZGRsZWJyb3duOlsxMzksNjksMTldLHNhbG1vbjpbMjUwLDEyOCwxMTRdLHNhbmR5YnJvd246WzI0NCwxNjQsOTZdLHNlYWdyZWVuOls0NiwxMzksODddLHNlYXNoZWxsOlsyNTUsMjQ1LDIzOF0sc2llbm5hOlsxNjAsODIsNDVdLHNpbHZlcjpbMTkyLDE5MiwxOTJdLHNreWJsdWU6WzEzNSwyMDYsMjM1XSxzbGF0ZWJsdWU6WzEwNiw5MCwyMDVdLHNsYXRlZ3JheTpbMTEyLDEyOCwxNDRdLHNsYXRlZ3JleTpbMTEyLDEyOCwxNDRdLHNub3c6WzI1NSwyNTAsMjUwXSxzcHJpbmdncmVlbjpbMCwyNTUsMTI3XSxzdGVlbGJsdWU6WzcwLDEzMCwxODBdLHRhbjpbMjEwLDE4MCwxNDBdLHRlYWw6WzAsMTI4LDEyOF0sdGhpc3RsZTpbMjE2LDE5MSwyMTZdLHRvbWF0bzpbMjU1LDk5LDcxXSx0dXJxdW9pc2U6WzY0LDIyNCwyMDhdLHZpb2xldDpbMjM4LDEzMCwyMzhdLHdoZWF0OlsyNDUsMjIyLDE3OV0sd2hpdGU6WzI1NSwyNTUsMjU1XSx3aGl0ZXNtb2tlOlsyNDUsMjQ1LDI0NV0seWVsbG93OlsyNTUsMjU1LDBdLHllbGxvd2dyZWVuOlsxNTQsMjA1LDUwXX0sRz17fTtmb3IodmFyIFEgaW4gWilHW0pTT04uc3RyaW5naWZ5KFpbUV0pXT1RfSx7fV0sNTpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoNCksbj1mdW5jdGlvbigpe3JldHVybiBuZXcgZH07Zm9yKHZhciBvIGluIGkpe25bbytcIlJhd1wiXT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJihlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpLGlbdF0oZSl9fShvKTt2YXIgcj0vKFxcdyspMihcXHcrKS8uZXhlYyhvKSxsPXJbMV0scz1yWzJdO25bbF09bltsXXx8e30sbltsXVtzXT1uW29dPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7dmFyIGE9aVt0XShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYXx8dm9pZCAwPT09YSlyZXR1cm4gYTtmb3IodmFyIG49MDtuPGEubGVuZ3RoO24rKylhW25dPU1hdGgucm91bmQoYVtuXSk7cmV0dXJuIGF9fShvKX12YXIgZD1mdW5jdGlvbigpe3RoaXMuY29udnM9e319O2QucHJvdG90eXBlLnJvdXRlU3BhY2U9ZnVuY3Rpb24odCxlKXt2YXIgYT1lWzBdO3JldHVybiB2b2lkIDA9PT1hP3RoaXMuZ2V0VmFsdWVzKHQpOihcIm51bWJlclwiPT10eXBlb2YgYSYmKGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkpLHRoaXMuc2V0VmFsdWVzKHQsYSkpfSxkLnByb3RvdHlwZS5zZXRWYWx1ZXM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5zcGFjZT10LHRoaXMuY29udnM9e30sdGhpcy5jb252c1t0XT1lLHRoaXN9LGQucHJvdG90eXBlLmdldFZhbHVlcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbnZzW3RdO2lmKCFlKXt2YXIgYT10aGlzLnNwYWNlLGk9dGhpcy5jb252c1thXTtlPW5bYV1bdF0oaSksdGhpcy5jb252c1t0XT1lfXJldHVybiBlfSxbXCJyZ2JcIixcImhzbFwiLFwiaHN2XCIsXCJjbXlrXCIsXCJrZXl3b3JkXCJdLmZvckVhY2goZnVuY3Rpb24odCl7ZC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucm91dGVTcGFjZSh0LGFyZ3VtZW50cyl9fSksZS5leHBvcnRzPW59LHs0OjR9XSw2OltmdW5jdGlvbih0LGUsYSl7ZS5leHBvcnRzPXthbGljZWJsdWU6WzI0MCwyNDgsMjU1XSxhbnRpcXVld2hpdGU6WzI1MCwyMzUsMjE1XSxhcXVhOlswLDI1NSwyNTVdLGFxdWFtYXJpbmU6WzEyNywyNTUsMjEyXSxhenVyZTpbMjQwLDI1NSwyNTVdLGJlaWdlOlsyNDUsMjQ1LDIyMF0sYmlzcXVlOlsyNTUsMjI4LDE5Nl0sYmxhY2s6WzAsMCwwXSxibGFuY2hlZGFsbW9uZDpbMjU1LDIzNSwyMDVdLGJsdWU6WzAsMCwyNTVdLGJsdWV2aW9sZXQ6WzEzOCw0MywyMjZdLGJyb3duOlsxNjUsNDIsNDJdLGJ1cmx5d29vZDpbMjIyLDE4NCwxMzVdLGNhZGV0Ymx1ZTpbOTUsMTU4LDE2MF0sY2hhcnRyZXVzZTpbMTI3LDI1NSwwXSxjaG9jb2xhdGU6WzIxMCwxMDUsMzBdLGNvcmFsOlsyNTUsMTI3LDgwXSxjb3JuZmxvd2VyYmx1ZTpbMTAwLDE0OSwyMzddLGNvcm5zaWxrOlsyNTUsMjQ4LDIyMF0sY3JpbXNvbjpbMjIwLDIwLDYwXSxjeWFuOlswLDI1NSwyNTVdLGRhcmtibHVlOlswLDAsMTM5XSxkYXJrY3lhbjpbMCwxMzksMTM5XSxkYXJrZ29sZGVucm9kOlsxODQsMTM0LDExXSxkYXJrZ3JheTpbMTY5LDE2OSwxNjldLGRhcmtncmVlbjpbMCwxMDAsMF0sZGFya2dyZXk6WzE2OSwxNjksMTY5XSxkYXJra2hha2k6WzE4OSwxODMsMTA3XSxkYXJrbWFnZW50YTpbMTM5LDAsMTM5XSxkYXJrb2xpdmVncmVlbjpbODUsMTA3LDQ3XSxkYXJrb3JhbmdlOlsyNTUsMTQwLDBdLGRhcmtvcmNoaWQ6WzE1Myw1MCwyMDRdLGRhcmtyZWQ6WzEzOSwwLDBdLGRhcmtzYWxtb246WzIzMywxNTAsMTIyXSxkYXJrc2VhZ3JlZW46WzE0MywxODgsMTQzXSxkYXJrc2xhdGVibHVlOls3Miw2MSwxMzldLGRhcmtzbGF0ZWdyYXk6WzQ3LDc5LDc5XSxkYXJrc2xhdGVncmV5Ols0Nyw3OSw3OV0sZGFya3R1cnF1b2lzZTpbMCwyMDYsMjA5XSxkYXJrdmlvbGV0OlsxNDgsMCwyMTFdLGRlZXBwaW5rOlsyNTUsMjAsMTQ3XSxkZWVwc2t5Ymx1ZTpbMCwxOTEsMjU1XSxkaW1ncmF5OlsxMDUsMTA1LDEwNV0sZGltZ3JleTpbMTA1LDEwNSwxMDVdLGRvZGdlcmJsdWU6WzMwLDE0NCwyNTVdLGZpcmVicmljazpbMTc4LDM0LDM0XSxmbG9yYWx3aGl0ZTpbMjU1LDI1MCwyNDBdLGZvcmVzdGdyZWVuOlszNCwxMzksMzRdLGZ1Y2hzaWE6WzI1NSwwLDI1NV0sZ2FpbnNib3JvOlsyMjAsMjIwLDIyMF0sZ2hvc3R3aGl0ZTpbMjQ4LDI0OCwyNTVdLGdvbGQ6WzI1NSwyMTUsMF0sZ29sZGVucm9kOlsyMTgsMTY1LDMyXSxncmF5OlsxMjgsMTI4LDEyOF0sZ3JlZW46WzAsMTI4LDBdLGdyZWVueWVsbG93OlsxNzMsMjU1LDQ3XSxncmV5OlsxMjgsMTI4LDEyOF0saG9uZXlkZXc6WzI0MCwyNTUsMjQwXSxob3RwaW5rOlsyNTUsMTA1LDE4MF0saW5kaWFucmVkOlsyMDUsOTIsOTJdLGluZGlnbzpbNzUsMCwxMzBdLGl2b3J5OlsyNTUsMjU1LDI0MF0sa2hha2k6WzI0MCwyMzAsMTQwXSxsYXZlbmRlcjpbMjMwLDIzMCwyNTBdLGxhdmVuZGVyYmx1c2g6WzI1NSwyNDAsMjQ1XSxsYXduZ3JlZW46WzEyNCwyNTIsMF0sbGVtb25jaGlmZm9uOlsyNTUsMjUwLDIwNV0sbGlnaHRibHVlOlsxNzMsMjE2LDIzMF0sbGlnaHRjb3JhbDpbMjQwLDEyOCwxMjhdLGxpZ2h0Y3lhbjpbMjI0LDI1NSwyNTVdLGxpZ2h0Z29sZGVucm9keWVsbG93OlsyNTAsMjUwLDIxMF0sbGlnaHRncmF5OlsyMTEsMjExLDIxMV0sbGlnaHRncmVlbjpbMTQ0LDIzOCwxNDRdLGxpZ2h0Z3JleTpbMjExLDIxMSwyMTFdLGxpZ2h0cGluazpbMjU1LDE4MiwxOTNdLGxpZ2h0c2FsbW9uOlsyNTUsMTYwLDEyMl0sbGlnaHRzZWFncmVlbjpbMzIsMTc4LDE3MF0sbGlnaHRza3libHVlOlsxMzUsMjA2LDI1MF0sbGlnaHRzbGF0ZWdyYXk6WzExOSwxMzYsMTUzXSxsaWdodHNsYXRlZ3JleTpbMTE5LDEzNiwxNTNdLGxpZ2h0c3RlZWxibHVlOlsxNzYsMTk2LDIyMl0sbGlnaHR5ZWxsb3c6WzI1NSwyNTUsMjI0XSxsaW1lOlswLDI1NSwwXSxsaW1lZ3JlZW46WzUwLDIwNSw1MF0sbGluZW46WzI1MCwyNDAsMjMwXSxtYWdlbnRhOlsyNTUsMCwyNTVdLG1hcm9vbjpbMTI4LDAsMF0sbWVkaXVtYXF1YW1hcmluZTpbMTAyLDIwNSwxNzBdLG1lZGl1bWJsdWU6WzAsMCwyMDVdLG1lZGl1bW9yY2hpZDpbMTg2LDg1LDIxMV0sbWVkaXVtcHVycGxlOlsxNDcsMTEyLDIxOV0sbWVkaXVtc2VhZ3JlZW46WzYwLDE3OSwxMTNdLG1lZGl1bXNsYXRlYmx1ZTpbMTIzLDEwNCwyMzhdLG1lZGl1bXNwcmluZ2dyZWVuOlswLDI1MCwxNTRdLG1lZGl1bXR1cnF1b2lzZTpbNzIsMjA5LDIwNF0sbWVkaXVtdmlvbGV0cmVkOlsxOTksMjEsMTMzXSxtaWRuaWdodGJsdWU6WzI1LDI1LDExMl0sbWludGNyZWFtOlsyNDUsMjU1LDI1MF0sbWlzdHlyb3NlOlsyNTUsMjI4LDIyNV0sbW9jY2FzaW46WzI1NSwyMjgsMTgxXSxuYXZham93aGl0ZTpbMjU1LDIyMiwxNzNdLG5hdnk6WzAsMCwxMjhdLG9sZGxhY2U6WzI1MywyNDUsMjMwXSxvbGl2ZTpbMTI4LDEyOCwwXSxvbGl2ZWRyYWI6WzEwNywxNDIsMzVdLG9yYW5nZTpbMjU1LDE2NSwwXSxvcmFuZ2VyZWQ6WzI1NSw2OSwwXSxvcmNoaWQ6WzIxOCwxMTIsMjE0XSxwYWxlZ29sZGVucm9kOlsyMzgsMjMyLDE3MF0scGFsZWdyZWVuOlsxNTIsMjUxLDE1Ml0scGFsZXR1cnF1b2lzZTpbMTc1LDIzOCwyMzhdLHBhbGV2aW9sZXRyZWQ6WzIxOSwxMTIsMTQ3XSxwYXBheWF3aGlwOlsyNTUsMjM5LDIxM10scGVhY2hwdWZmOlsyNTUsMjE4LDE4NV0scGVydTpbMjA1LDEzMyw2M10scGluazpbMjU1LDE5MiwyMDNdLHBsdW06WzIyMSwxNjAsMjIxXSxwb3dkZXJibHVlOlsxNzYsMjI0LDIzMF0scHVycGxlOlsxMjgsMCwxMjhdLHJlYmVjY2FwdXJwbGU6WzEwMiw1MSwxNTNdLHJlZDpbMjU1LDAsMF0scm9zeWJyb3duOlsxODgsMTQzLDE0M10scm95YWxibHVlOls2NSwxMDUsMjI1XSxzYWRkbGVicm93bjpbMTM5LDY5LDE5XSxzYWxtb246WzI1MCwxMjgsMTE0XSxzYW5keWJyb3duOlsyNDQsMTY0LDk2XSxzZWFncmVlbjpbNDYsMTM5LDg3XSxzZWFzaGVsbDpbMjU1LDI0NSwyMzhdLHNpZW5uYTpbMTYwLDgyLDQ1XSxzaWx2ZXI6WzE5MiwxOTIsMTkyXSxza3libHVlOlsxMzUsMjA2LDIzNV0sc2xhdGVibHVlOlsxMDYsOTAsMjA1XSxzbGF0ZWdyYXk6WzExMiwxMjgsMTQ0XSxzbGF0ZWdyZXk6WzExMiwxMjgsMTQ0XSxzbm93OlsyNTUsMjUwLDI1MF0sc3ByaW5nZ3JlZW46WzAsMjU1LDEyN10sc3RlZWxibHVlOls3MCwxMzAsMTgwXSx0YW46WzIxMCwxODAsMTQwXSx0ZWFsOlswLDEyOCwxMjhdLHRoaXN0bGU6WzIxNiwxOTEsMjE2XSx0b21hdG86WzI1NSw5OSw3MV0sdHVycXVvaXNlOls2NCwyMjQsMjA4XSx2aW9sZXQ6WzIzOCwxMzAsMjM4XSx3aGVhdDpbMjQ1LDIyMiwxNzldLHdoaXRlOlsyNTUsMjU1LDI1NV0sd2hpdGVzbW9rZTpbMjQ1LDI0NSwyNDVdLHllbGxvdzpbMjU1LDI1NSwwXSx5ZWxsb3dncmVlbjpbMTU0LDIwNSw1MF19fSx7fV0sNzpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoMjgpKCk7dCgyNikoaSksdCgyMikoaSksdCgyNSkoaSksdCgyMSkoaSksdCgyMykoaSksdCgyNCkoaSksdCgyOSkoaSksdCgzMykoaSksdCgzMSkoaSksdCgzNCkoaSksdCgzMikoaSksdCgzNSkoaSksdCgzMCkoaSksdCgyNykoaSksdCgzNikoaSksdCgzNykoaSksdCgzOCkoaSksdCgzOSkoaSksdCg0MCkoaSksdCg0MykoaSksdCg0MSkoaSksdCg0MikoaSksdCg0NCkoaSksdCg0NSkoaSksdCg0NikoaSksdCgxNSkoaSksdCgxNikoaSksdCgxNykoaSksdCgxOCkoaSksdCgxOSkoaSksdCgyMCkoaSksdCg4KShpKSx0KDkpKGkpLHQoMTApKGkpLHQoMTEpKGkpLHQoMTIpKGkpLHQoMTMpKGkpLHQoMTQpKGkpLHdpbmRvdy5DaGFydD1lLmV4cG9ydHM9aX0sezEwOjEwLDExOjExLDEyOjEyLDEzOjEzLDE0OjE0LDE1OjE1LDE2OjE2LDE3OjE3LDE4OjE4LDE5OjE5LDIwOjIwLDIxOjIxLDIyOjIyLDIzOjIzLDI0OjI0LDI1OjI1LDI2OjI2LDI3OjI3LDI4OjI4LDI5OjI5LDMwOjMwLDMxOjMxLDMyOjMyLDMzOjMzLDM0OjM0LDM1OjM1LDM2OjM2LDM3OjM3LDM4OjM4LDM5OjM5LDQwOjQwLDQxOjQxLDQyOjQyLDQzOjQzLDQ0OjQ0LDQ1OjQ1LDQ2OjQ2LDg6OCw5Ojl9XSw4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuQmFyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImJhclwiLG5ldyB0KGUsYSl9fX0se31dLDk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5CdWJibGU9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiYnViYmxlXCIsbmV3IHQoZSxhKX19fSx7fV0sMTA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5Eb3VnaG51dD1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJkb3VnaG51dFwiLG5ldyB0KGUsYSl9fX0se31dLDExOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuTGluZT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJsaW5lXCIsbmV3IHQoZSxhKX19fSx7fV0sMTI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5Qb2xhckFyZWE9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwicG9sYXJBcmVhXCIsbmV3IHQoZSxhKX19fSx7fV0sMTM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5SYWRhcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJyYWRhclwiLG5ldyB0KGUsYSl9fX0se31dLDE0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXtob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaWQ6XCJ4LWF4aXMtMVwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJsZWZ0XCIsaWQ6XCJ5LWF4aXMtMVwifV19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCl7cmV0dXJuXCIoXCIrdC54TGFiZWwrXCIsIFwiK3QueUxhYmVsK1wiKVwifX19fTt0LmRlZmF1bHRzLnNjYXR0ZXI9ZSx0LmNvbnRyb2xsZXJzLnNjYXR0ZXI9dC5jb250cm9sbGVycy5saW5lLHQuU2NhdHRlcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJzY2F0dGVyXCIsbmV3IHQoZSxhKX19fSx7fV0sMTU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuYmFyPXtob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwiY2F0ZWdvcnlcIixjYXRlZ29yeVBlcmNlbnRhZ2U6LjgsYmFyUGVyY2VudGFnZTouOSxncmlkTGluZXM6e29mZnNldEdyaWRMaW5lczohMH19XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIn1dfX0sdC5jb250cm9sbGVycy5iYXI9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlJlY3RhbmdsZSxpbml0aWFsaXplOmZ1bmN0aW9uKGUsYSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsZSxhKSx0aGlzLmdldE1ldGEoKS5iYXI9ITB9LGdldEJhckNvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPTA7cmV0dXJuIGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oZSxpKXt2YXIgbj10LmNoYXJ0LmdldERhdGFzZXRNZXRhKGkpO24uYmFyJiZ0LmNoYXJ0LmlzRGF0YXNldFZpc2libGUoaSkmJisrYX0sdCksYX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXM7ZS5lYWNoKGEuZ2V0TWV0YSgpLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSxhKX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9bi5nZXRTY2FsZUZvcklkKG8ueEF4aXNJRCksbD1uLmdldFNjYWxlRm9ySWQoby55QXhpc0lEKSxzPWwuZ2V0QmFzZVBpeGVsKCksZD1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlLHU9dC5jdXN0b218fHt9LGM9bi5nZXREYXRhc2V0KCk7dC5feFNjYWxlPXIsdC5feVNjYWxlPWwsdC5fZGF0YXNldEluZGV4PW4uaW5kZXgsdC5faW5kZXg9YTt2YXIgaD1uLmdldFJ1bGVyKGEpO3QuX21vZGVsPXt4Om4uY2FsY3VsYXRlQmFyWChhLG4uaW5kZXgsaCkseTppP3M6bi5jYWxjdWxhdGVCYXJZKGEsbi5pbmRleCksbGFiZWw6bi5jaGFydC5kYXRhLmxhYmVsc1thXSxkYXRhc2V0TGFiZWw6Yy5sYWJlbCxiYXNlOmk/czpuLmNhbGN1bGF0ZUJhckJhc2Uobi5pbmRleCxhKSx3aWR0aDpuLmNhbGN1bGF0ZUJhcldpZHRoKGgpLGJhY2tncm91bmRDb2xvcjp1LmJhY2tncm91bmRDb2xvcj91LmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJhY2tncm91bmRDb2xvcixhLGQuYmFja2dyb3VuZENvbG9yKSxib3JkZXJTa2lwcGVkOnUuYm9yZGVyU2tpcHBlZD91LmJvcmRlclNraXBwZWQ6ZC5ib3JkZXJTa2lwcGVkLGJvcmRlckNvbG9yOnUuYm9yZGVyQ29sb3I/dS5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJvcmRlckNvbG9yLGEsZC5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6dS5ib3JkZXJXaWR0aD91LmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYm9yZGVyV2lkdGgsYSxkLmJvcmRlcldpZHRoKX0sdC5waXZvdCgpfSxjYWxjdWxhdGVCYXJCYXNlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz0wO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9YS5jaGFydCxsPXIuZGF0YS5kYXRhc2V0cyxzPU51bWJlcihsW3RdLmRhdGFbZV0pLGQ9MDt0PmQ7ZCsrKXt2YXIgdT1sW2RdLGM9ci5nZXREYXRhc2V0TWV0YShkKTtpZihjLmJhciYmYy55QXhpc0lEPT09bi5pZCYmci5pc0RhdGFzZXRWaXNpYmxlKGQpKXt2YXIgaD1OdW1iZXIodS5kYXRhW2VdKTtvKz0wPnM/TWF0aC5taW4oaCwwKTpNYXRoLm1heChoLDApfX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfXJldHVybiBuLmdldEJhc2VQaXhlbCgpfSxnZXRSdWxlcjpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89YS5nZXRCYXJDb3VudCgpO2U9XCJjYXRlZ29yeVwiPT09bi5vcHRpb25zLnR5cGU/bi5nZXRQaXhlbEZvclRpY2sodCsxKS1uLmdldFBpeGVsRm9yVGljayh0KTpuLndpZHRoL24udGlja3MubGVuZ3RoO3ZhciByPWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSxsPShlLWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSkvMixzPXIvbztpZihuLnRpY2tzLmxlbmd0aCE9PWEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoKXt2YXIgZD1uLnRpY2tzLmxlbmd0aC9hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aDtzKj1kfXZhciB1PXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2UsYz1zLXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2U7cmV0dXJue2RhdGFzZXRDb3VudDpvLHRpY2tXaWR0aDplLGNhdGVnb3J5V2lkdGg6cixjYXRlZ29yeVNwYWNpbmc6bCxmdWxsQmFyV2lkdGg6cyxiYXJXaWR0aDp1LGJhclNwYWNpbmc6Y319LGNhbGN1bGF0ZUJhcldpZHRoOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0U2NhbGVGb3JJZCh0aGlzLmdldE1ldGEoKS54QXhpc0lEKTtyZXR1cm4gZS5vcHRpb25zLmJhclRoaWNrbmVzcz9lLm9wdGlvbnMuYmFyVGhpY2tuZXNzOmUub3B0aW9ucy5zdGFja2VkP3QuY2F0ZWdvcnlXaWR0aDp0LmJhcldpZHRofSxnZXRCYXJJbmRleDpmdW5jdGlvbih0KXt2YXIgZSxhLGk9MDtmb3IoYT0wO3Q+YTsrK2EpZT10aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKGEpLGUuYmFyJiZ0aGlzLmNoYXJ0LmlzRGF0YXNldFZpc2libGUoYSkmJisraTtyZXR1cm4gaX0sY2FsY3VsYXRlQmFyWDpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPWkuZ2V0TWV0YSgpLG89aS5nZXRTY2FsZUZvcklkKG4ueEF4aXNJRCkscj1pLmdldEJhckluZGV4KGUpLGw9by5nZXRQaXhlbEZvclZhbHVlKG51bGwsdCxlLGkuY2hhcnQuaXNDb21ibyk7cmV0dXJuIGwtPWkuY2hhcnQuaXNDb21ibz9hLnRpY2tXaWR0aC8yOjAsby5vcHRpb25zLnN0YWNrZWQ/bCthLmNhdGVnb3J5V2lkdGgvMithLmNhdGVnb3J5U3BhY2luZzpsK2EuYmFyV2lkdGgvMithLmNhdGVnb3J5U3BhY2luZythLmJhcldpZHRoKnIrYS5iYXJTcGFjaW5nLzIrYS5iYXJTcGFjaW5nKnJ9LGNhbGN1bGF0ZUJhclk6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPU51bWJlcihhLmdldERhdGFzZXQoKS5kYXRhW3RdKTtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPTAsbD0wLHM9MDtlPnM7cysrKXt2YXIgZD1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbc10sdT1hLmNoYXJ0LmdldERhdGFzZXRNZXRhKHMpO2lmKHUuYmFyJiZ1LnlBeGlzSUQ9PT1uLmlkJiZhLmNoYXJ0LmlzRGF0YXNldFZpc2libGUocykpe3ZhciBjPU51bWJlcihkLmRhdGFbdF0pOzA+Yz9sKz1jfHwwOnIrPWN8fDB9fXJldHVybiAwPm8/bi5nZXRQaXhlbEZvclZhbHVlKGwrbyk6bi5nZXRQaXhlbEZvclZhbHVlKHIrbyl9cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dGhpcyxuPXR8fDEsbz1pLmdldE1ldGEoKS5kYXRhLHI9aS5nZXREYXRhc2V0KCk7Zm9yKGU9MCxhPW8ubGVuZ3RoO2E+ZTsrK2Upe3ZhciBsPXIuZGF0YVtlXTtudWxsPT09bHx8dm9pZCAwPT09bHx8aXNOYU4obCl8fG9bZV0udHJhbnNpdGlvbihuKS5kcmF3KCl9fSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbDtvLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yP24uaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJhY2tncm91bmRDb2xvcixpLGUuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yP24uaG92ZXJCb3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQm9yZGVyQ29sb3IsaSxlLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRoP24uaG92ZXJCb3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQm9yZGVyV2lkdGgsaSxvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWwscj10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlO28uYmFja2dyb3VuZENvbG9yPW4uYmFja2dyb3VuZENvbG9yP24uYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYmFja2dyb3VuZENvbG9yLGksci5iYWNrZ3JvdW5kQ29sb3IpLG8uYm9yZGVyQ29sb3I9bi5ib3JkZXJDb2xvcj9uLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYm9yZGVyQ29sb3IsaSxyLmJvcmRlckNvbG9yKSxvLmJvcmRlcldpZHRoPW4uYm9yZGVyV2lkdGg/bi5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJvcmRlcldpZHRoLGksci5ib3JkZXJXaWR0aCl9fSksdC5kZWZhdWx0cy5ob3Jpem9udGFsQmFyPXtob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIn1dLHlBeGVzOlt7cG9zaXRpb246XCJsZWZ0XCIsdHlwZTpcImNhdGVnb3J5XCIsY2F0ZWdvcnlQZXJjZW50YWdlOi44LGJhclBlcmNlbnRhZ2U6LjksZ3JpZExpbmVzOntvZmZzZXRHcmlkTGluZXM6ITB9fV19LGVsZW1lbnRzOntyZWN0YW5nbGU6e2JvcmRlclNraXBwZWQ6XCJsZWZ0XCJ9fSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbih0LGUpe3ZhciBhPVwiXCI7cmV0dXJuIHQubGVuZ3RoPjAmJih0WzBdLnlMYWJlbD9hPXRbMF0ueUxhYmVsOmUubGFiZWxzLmxlbmd0aD4wJiZ0WzBdLmluZGV4PGUubGFiZWxzLmxlbmd0aCYmKGE9ZS5sYWJlbHNbdFswXS5pbmRleF0pKSxhfSxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiO3JldHVybiBhK1wiOiBcIit0LnhMYWJlbH19fX0sdC5jb250cm9sbGVycy5ob3Jpem9udGFsQmFyPXQuY29udHJvbGxlcnMuYmFyLmV4dGVuZCh7dXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9bi5nZXRTY2FsZUZvcklkKG8ueEF4aXNJRCksbD1uLmdldFNjYWxlRm9ySWQoby55QXhpc0lEKSxzPXIuZ2V0QmFzZVBpeGVsKCksZD10LmN1c3RvbXx8e30sdT1uLmdldERhdGFzZXQoKSxjPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGU7dC5feFNjYWxlPXIsdC5feVNjYWxlPWwsdC5fZGF0YXNldEluZGV4PW4uaW5kZXgsdC5faW5kZXg9YTt2YXIgaD1uLmdldFJ1bGVyKGEpO3QuX21vZGVsPXt4Omk/czpuLmNhbGN1bGF0ZUJhclgoYSxuLmluZGV4KSx5Om4uY2FsY3VsYXRlQmFyWShhLG4uaW5kZXgsaCksbGFiZWw6bi5jaGFydC5kYXRhLmxhYmVsc1thXSxkYXRhc2V0TGFiZWw6dS5sYWJlbCxiYXNlOmk/czpuLmNhbGN1bGF0ZUJhckJhc2Uobi5pbmRleCxhKSxoZWlnaHQ6bi5jYWxjdWxhdGVCYXJIZWlnaHQoaCksYmFja2dyb3VuZENvbG9yOmQuYmFja2dyb3VuZENvbG9yP2QuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYmFja2dyb3VuZENvbG9yLGEsYy5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlclNraXBwZWQ6ZC5ib3JkZXJTa2lwcGVkP2QuYm9yZGVyU2tpcHBlZDpjLmJvcmRlclNraXBwZWQsYm9yZGVyQ29sb3I6ZC5ib3JkZXJDb2xvcj9kLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYm9yZGVyQ29sb3IsYSxjLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDpkLmJvcmRlcldpZHRoP2QuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5ib3JkZXJXaWR0aCxhLGMuYm9yZGVyV2lkdGgpfSx0LmRyYXc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBzWyh1K3QpJTRdfXZhciBlPXRoaXMuX2NoYXJ0LmN0eCxhPXRoaXMuX3ZpZXcsaT1hLmhlaWdodC8yLG49YS55LWksbz1hLnkraSxyPWEuYmFzZS0oYS5iYXNlLWEueCksbD1hLmJvcmRlcldpZHRoLzI7YS5ib3JkZXJXaWR0aCYmKG4rPWwsby09bCxyKz1sKSxlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPWEuYmFja2dyb3VuZENvbG9yLGUuc3Ryb2tlU3R5bGU9YS5ib3JkZXJDb2xvcixlLmxpbmVXaWR0aD1hLmJvcmRlcldpZHRoO3ZhciBzPVtbYS5iYXNlLG9dLFthLmJhc2Usbl0sW3Isbl0sW3Isb11dLGQ9W1wiYm90dG9tXCIsXCJsZWZ0XCIsXCJ0b3BcIixcInJpZ2h0XCJdLHU9ZC5pbmRleE9mKGEuYm9yZGVyU2tpcHBlZCwwKTstMT09PXUmJih1PTApLGUubW92ZVRvLmFwcGx5KGUsdCgwKSk7Zm9yKHZhciBjPTE7ND5jO2MrKyllLmxpbmVUby5hcHBseShlLHQoYykpO2UuZmlsbCgpLGEuYm9yZGVyV2lkdGgmJmUuc3Ryb2tlKCl9LHQucGl2b3QoKX0sY2FsY3VsYXRlQmFyQmFzZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89MDtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPWEuY2hhcnQsbD1yLmRhdGEuZGF0YXNldHMscz1OdW1iZXIobFt0XS5kYXRhW2VdKSxkPTA7dD5kO2QrKyl7dmFyIHU9bFtkXSxjPXIuZ2V0RGF0YXNldE1ldGEoZCk7aWYoYy5iYXImJmMueEF4aXNJRD09PW4uaWQmJnIuaXNEYXRhc2V0VmlzaWJsZShkKSl7XHJcbnZhciBoPU51bWJlcih1LmRhdGFbZV0pO28rPTA+cz9NYXRoLm1pbihoLDApOk1hdGgubWF4KGgsMCl9fXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9cmV0dXJuIG4uZ2V0QmFzZVBpeGVsKCl9LGdldFJ1bGVyOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz1hLmdldEJhckNvdW50KCk7ZT1cImNhdGVnb3J5XCI9PT1uLm9wdGlvbnMudHlwZT9uLmdldFBpeGVsRm9yVGljayh0KzEpLW4uZ2V0UGl4ZWxGb3JUaWNrKHQpOm4ud2lkdGgvbi50aWNrcy5sZW5ndGg7dmFyIHI9ZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlLGw9KGUtZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlKS8yLHM9ci9vO2lmKG4udGlja3MubGVuZ3RoIT09YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGgpe3ZhciBkPW4udGlja3MubGVuZ3RoL2EuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoO3MqPWR9dmFyIHU9cypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZSxjPXMtcypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZTtyZXR1cm57ZGF0YXNldENvdW50Om8sdGlja0hlaWdodDplLGNhdGVnb3J5SGVpZ2h0OnIsY2F0ZWdvcnlTcGFjaW5nOmwsZnVsbEJhckhlaWdodDpzLGJhckhlaWdodDp1LGJhclNwYWNpbmc6Y319LGNhbGN1bGF0ZUJhckhlaWdodDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5nZXRTY2FsZUZvcklkKGUuZ2V0TWV0YSgpLnlBeGlzSUQpO3JldHVybiBhLm9wdGlvbnMuYmFyVGhpY2tuZXNzP2Eub3B0aW9ucy5iYXJUaGlja25lc3M6YS5vcHRpb25zLnN0YWNrZWQ/dC5jYXRlZ29yeUhlaWdodDp0LmJhckhlaWdodH0sY2FsY3VsYXRlQmFyWDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89TnVtYmVyKGEuZ2V0RGF0YXNldCgpLmRhdGFbdF0pO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9MCxsPTAscz0wO2U+cztzKyspe3ZhciBkPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tzXSx1PWEuY2hhcnQuZ2V0RGF0YXNldE1ldGEocyk7aWYodS5iYXImJnUueEF4aXNJRD09PW4uaWQmJmEuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShzKSl7dmFyIGM9TnVtYmVyKGQuZGF0YVt0XSk7MD5jP2wrPWN8fDA6cis9Y3x8MH19cmV0dXJuIDA+bz9uLmdldFBpeGVsRm9yVmFsdWUobCtvKTpuLmdldFBpeGVsRm9yVmFsdWUocitvKX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfSxjYWxjdWxhdGVCYXJZOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49aS5nZXRNZXRhKCksbz1pLmdldFNjYWxlRm9ySWQobi55QXhpc0lEKSxyPWkuZ2V0QmFySW5kZXgoZSksbD1vLmdldFBpeGVsRm9yVmFsdWUobnVsbCx0LGUsaS5jaGFydC5pc0NvbWJvKTtyZXR1cm4gbC09aS5jaGFydC5pc0NvbWJvP2EudGlja0hlaWdodC8yOjAsby5vcHRpb25zLnN0YWNrZWQ/bCthLmNhdGVnb3J5SGVpZ2h0LzIrYS5jYXRlZ29yeVNwYWNpbmc6bCthLmJhckhlaWdodC8yK2EuY2F0ZWdvcnlTcGFjaW5nK2EuYmFySGVpZ2h0KnIrYS5iYXJTcGFjaW5nLzIrYS5iYXJTcGFjaW5nKnJ9fSl9fSx7fV0sMTY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuYnViYmxlPXtob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaWQ6XCJ4LWF4aXMtMFwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJsZWZ0XCIsaWQ6XCJ5LWF4aXMtMFwifV19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixpPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmRhdGFbdC5pbmRleF07cmV0dXJuIGErXCI6IChcIit0LnhMYWJlbCtcIiwgXCIrdC55TGFiZWwrXCIsIFwiK2kucitcIilcIn19fX0sdC5jb250cm9sbGVycy5idWJibGU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1pLmRhdGE7ZS5lYWNoKG4sZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24oYSxpLG4pe3ZhciBvPXRoaXMscj1vLmdldE1ldGEoKSxsPW8uZ2V0U2NhbGVGb3JJZChyLnhBeGlzSUQpLHM9by5nZXRTY2FsZUZvcklkKHIueUF4aXNJRCksZD1hLmN1c3RvbXx8e30sdT1vLmdldERhdGFzZXQoKSxjPXUuZGF0YVtpXSxoPW8uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxmPW8uaW5kZXg7ZS5leHRlbmQoYSx7X3hTY2FsZTpsLF95U2NhbGU6cyxfZGF0YXNldEluZGV4OmYsX2luZGV4OmksX21vZGVsOnt4Om4/bC5nZXRQaXhlbEZvckRlY2ltYWwoLjUpOmwuZ2V0UGl4ZWxGb3JWYWx1ZShcIm9iamVjdFwiPT10eXBlb2YgYz9jOk5hTixpLGYsby5jaGFydC5pc0NvbWJvKSx5Om4/cy5nZXRCYXNlUGl4ZWwoKTpzLmdldFBpeGVsRm9yVmFsdWUoYyxpLGYpLHJhZGl1czpuPzA6ZC5yYWRpdXM/ZC5yYWRpdXM6by5nZXRSYWRpdXMoYyksaGl0UmFkaXVzOmQuaGl0UmFkaXVzP2QuaGl0UmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuaGl0UmFkaXVzLGksaC5oaXRSYWRpdXMpfX0pLHQuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbChvLGEsaCk7dmFyIGc9YS5fbW9kZWw7Zy5za2lwPWQuc2tpcD9kLnNraXA6aXNOYU4oZy54KXx8aXNOYU4oZy55KSxhLnBpdm90KCl9LGdldFJhZGl1czpmdW5jdGlvbih0KXtyZXR1cm4gdC5yfHx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQucmFkaXVzfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXM7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUuc2V0SG92ZXJTdHlsZS5jYWxsKGksYSk7dmFyIG49aS5jaGFydC5kYXRhLmRhdGFzZXRzW2EuX2RhdGFzZXRJbmRleF0sbz1hLl9pbmRleCxyPWEuY3VzdG9tfHx7fSxsPWEuX21vZGVsO2wucmFkaXVzPXIuaG92ZXJSYWRpdXM/ci5ob3ZlclJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmhvdmVyUmFkaXVzLG8saS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKStpLmdldFJhZGl1cyhuLmRhdGFbb10pfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXM7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKGEsZSxhLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQpO3ZhciBpPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlLl9kYXRhc2V0SW5kZXhdLmRhdGFbZS5faW5kZXhdLG49ZS5jdXN0b218fHt9LG89ZS5fbW9kZWw7by5yYWRpdXM9bi5yYWRpdXM/bi5yYWRpdXM6YS5nZXRSYWRpdXMoaSl9fSl9fSx7fV0sMTc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0czthLmRvdWdobnV0PXthbmltYXRpb246e2FuaW1hdGVSb3RhdGU6ITAsYW5pbWF0ZVNjYWxlOiExfSxhc3BlY3RSYXRpbzoxLGhvdmVyOnttb2RlOlwic2luZ2xlXCJ9LGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7dmFyIGE9dC5kYXRhLGk9YS5kYXRhc2V0cyxuPWEubGFiZWxzO2lmKGkubGVuZ3RoKWZvcih2YXIgbz0wO288aVswXS5kYXRhLmxlbmd0aDsrK28pZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicraVswXS5iYWNrZ3JvdW5kQ29sb3Jbb10rJ1wiPjwvc3Bhbj4nKSxuW29dJiZlLnB1c2gobltvXSksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX0sbGVnZW5kOntsYWJlbHM6e2dlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBhPXQuZGF0YTtyZXR1cm4gYS5sYWJlbHMubGVuZ3RoJiZhLmRhdGFzZXRzLmxlbmd0aD9hLmxhYmVscy5tYXAoZnVuY3Rpb24oaSxuKXt2YXIgbz10LmdldERhdGFzZXRNZXRhKDApLHI9YS5kYXRhc2V0c1swXSxsPW8uZGF0YVtuXSxzPWwmJmwuY3VzdG9tfHx7fSxkPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHU9dC5vcHRpb25zLmVsZW1lbnRzLmFyYyxjPXMuYmFja2dyb3VuZENvbG9yP3MuYmFja2dyb3VuZENvbG9yOmQoci5iYWNrZ3JvdW5kQ29sb3Isbix1LmJhY2tncm91bmRDb2xvciksaD1zLmJvcmRlckNvbG9yP3MuYm9yZGVyQ29sb3I6ZChyLmJvcmRlckNvbG9yLG4sdS5ib3JkZXJDb2xvciksZj1zLmJvcmRlcldpZHRoP3MuYm9yZGVyV2lkdGg6ZChyLmJvcmRlcldpZHRoLG4sdS5ib3JkZXJXaWR0aCk7cmV0dXJue3RleHQ6aSxmaWxsU3R5bGU6YyxzdHJva2VTdHlsZTpoLGxpbmVXaWR0aDpmLGhpZGRlbjppc05hTihyLmRhdGFbbl0pfHxvLmRhdGFbbl0uaGlkZGVuLGluZGV4Om59fSk6W119fSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS5pbmRleCxyPXRoaXMuY2hhcnQ7Zm9yKGE9MCxpPShyLmRhdGEuZGF0YXNldHN8fFtdKS5sZW5ndGg7aT5hOysrYSluPXIuZ2V0RGF0YXNldE1ldGEoYSksbi5kYXRhW29dJiYobi5kYXRhW29dLmhpZGRlbj0hbi5kYXRhW29dLmhpZGRlbik7ci51cGRhdGUoKX19LGN1dG91dFBlcmNlbnRhZ2U6NTAscm90YXRpb246TWF0aC5QSSotLjUsY2lyY3VtZmVyZW5jZToyKk1hdGguUEksdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGEpe3ZhciBpPWEubGFiZWxzW3QuaW5kZXhdLG49XCI6IFwiK2EuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmRhdGFbdC5pbmRleF07cmV0dXJuIGUuaXNBcnJheShpKT8oaT1pLnNsaWNlKCksaVswXSs9bik6aSs9bixpfX19fSxhLnBpZT1lLmNsb25lKGEuZG91Z2hudXQpLGUuZXh0ZW5kKGEucGllLHtjdXRvdXRQZXJjZW50YWdlOjB9KSx0LmNvbnRyb2xsZXJzLmRvdWdobnV0PXQuY29udHJvbGxlcnMucGllPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5BcmMsbGlua1NjYWxlczplLm5vb3AsZ2V0UmluZ0luZGV4OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLGE9MDt0PmE7KythKXRoaXMuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShhKSYmKytlO3JldHVybiBlfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1pLmNoYXJ0QXJlYSxvPWkub3B0aW9ucyxyPW8uZWxlbWVudHMuYXJjLGw9bi5yaWdodC1uLmxlZnQtci5ib3JkZXJXaWR0aCxzPW4uYm90dG9tLW4udG9wLXIuYm9yZGVyV2lkdGgsZD1NYXRoLm1pbihsLHMpLHU9e3g6MCx5OjB9LGM9YS5nZXRNZXRhKCksaD1vLmN1dG91dFBlcmNlbnRhZ2UsZj1vLmNpcmN1bWZlcmVuY2U7aWYoZjwyKk1hdGguUEkpe3ZhciBnPW8ucm90YXRpb24lKDIqTWF0aC5QSSk7Zys9MipNYXRoLlBJKihnPj1NYXRoLlBJPy0xOmc8LU1hdGguUEk/MTowKTt2YXIgcD1nK2YsbT17eDpNYXRoLmNvcyhnKSx5Ok1hdGguc2luKGcpfSxiPXt4Ok1hdGguY29zKHApLHk6TWF0aC5zaW4ocCl9LHY9MD49ZyYmcD49MHx8Zzw9MipNYXRoLlBJJiYyKk1hdGguUEk8PXAseD1nPD0uNSpNYXRoLlBJJiYuNSpNYXRoLlBJPD1wfHxnPD0yLjUqTWF0aC5QSSYmMi41Kk1hdGguUEk8PXAseT1nPD0tTWF0aC5QSSYmLU1hdGguUEk8PXB8fGc8PU1hdGguUEkmJk1hdGguUEk8PXAsaz1nPD0uNSotTWF0aC5QSSYmLjUqLU1hdGguUEk8PXB8fGc8PTEuNSpNYXRoLlBJJiYxLjUqTWF0aC5QSTw9cCxTPWgvMTAwLHc9e3g6eT8tMTpNYXRoLm1pbihtLngqKG0ueDwwPzE6UyksYi54KihiLng8MD8xOlMpKSx5Oms/LTE6TWF0aC5taW4obS55KihtLnk8MD8xOlMpLGIueSooYi55PDA/MTpTKSl9LE09e3g6dj8xOk1hdGgubWF4KG0ueCoobS54PjA/MTpTKSxiLngqKGIueD4wPzE6UykpLHk6eD8xOk1hdGgubWF4KG0ueSoobS55PjA/MTpTKSxiLnkqKGIueT4wPzE6UykpfSxDPXt3aWR0aDouNSooTS54LXcueCksaGVpZ2h0Oi41KihNLnktdy55KX07ZD1NYXRoLm1pbihsL0Mud2lkdGgscy9DLmhlaWdodCksdT17eDooTS54K3cueCkqLS41LHk6KE0ueSt3LnkpKi0uNX19aS5ib3JkZXJXaWR0aD1hLmdldE1heEJvcmRlcldpZHRoKGMuZGF0YSksaS5vdXRlclJhZGl1cz1NYXRoLm1heCgoZC1pLmJvcmRlcldpZHRoKS8yLDApLGkuaW5uZXJSYWRpdXM9TWF0aC5tYXgoaD9pLm91dGVyUmFkaXVzLzEwMCpoOjEsMCksaS5yYWRpdXNMZW5ndGg9KGkub3V0ZXJSYWRpdXMtaS5pbm5lclJhZGl1cykvaS5nZXRWaXNpYmxlRGF0YXNldENvdW50KCksaS5vZmZzZXRYPXUueCppLm91dGVyUmFkaXVzLGkub2Zmc2V0WT11LnkqaS5vdXRlclJhZGl1cyxjLnRvdGFsPWEuY2FsY3VsYXRlVG90YWwoKSxhLm91dGVyUmFkaXVzPWkub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgqYS5nZXRSaW5nSW5kZXgoYS5pbmRleCksYS5pbm5lclJhZGl1cz1hLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoLGUuZWFjaChjLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmNoYXJ0LHI9by5jaGFydEFyZWEsbD1vLm9wdGlvbnMscz1sLmFuaW1hdGlvbixkPShyLmxlZnQrci5yaWdodCkvMix1PShyLnRvcCtyLmJvdHRvbSkvMixjPWwucm90YXRpb24saD1sLnJvdGF0aW9uLGY9bi5nZXREYXRhc2V0KCksZz1pJiZzLmFuaW1hdGVSb3RhdGU/MDp0LmhpZGRlbj8wOm4uY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShmLmRhdGFbYV0pKihsLmNpcmN1bWZlcmVuY2UvKDIqTWF0aC5QSSkpLHA9aSYmcy5hbmltYXRlU2NhbGU/MDpuLmlubmVyUmFkaXVzLG09aSYmcy5hbmltYXRlU2NhbGU/MDpuLm91dGVyUmFkaXVzLGI9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQ7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9tb2RlbDp7eDpkK28ub2Zmc2V0WCx5OnUrby5vZmZzZXRZLHN0YXJ0QW5nbGU6YyxlbmRBbmdsZTpoLGNpcmN1bWZlcmVuY2U6ZyxvdXRlclJhZGl1czptLGlubmVyUmFkaXVzOnAsbGFiZWw6YihmLmxhYmVsLGEsby5kYXRhLmxhYmVsc1thXSl9fSk7dmFyIHY9dC5fbW9kZWw7dGhpcy5yZW1vdmVIb3ZlclN0eWxlKHQpLGkmJnMuYW5pbWF0ZVJvdGF0ZXx8KDA9PT1hP3Yuc3RhcnRBbmdsZT1sLnJvdGF0aW9uOnYuc3RhcnRBbmdsZT1uLmdldE1ldGEoKS5kYXRhW2EtMV0uX21vZGVsLmVuZEFuZ2xlLHYuZW5kQW5nbGU9di5zdGFydEFuZ2xlK3YuY2lyY3VtZmVyZW5jZSksdC5waXZvdCgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbCh0aGlzLGUsdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmFyYyl9LGNhbGN1bGF0ZVRvdGFsOmZ1bmN0aW9uKCl7dmFyIHQsYT10aGlzLmdldERhdGFzZXQoKSxpPXRoaXMuZ2V0TWV0YSgpLG49MDtyZXR1cm4gZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlLGkpe3Q9YS5kYXRhW2ldLGlzTmFOKHQpfHxlLmhpZGRlbnx8KG4rPU1hdGguYWJzKHQpKX0pLG59LGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRNZXRhKCkudG90YWw7cmV0dXJuIGU+MCYmIWlzTmFOKHQpPzIqTWF0aC5QSSoodC9lKTowfSxnZXRNYXhCb3JkZXJXaWR0aDpmdW5jdGlvbih0KXtmb3IodmFyIGUsYSxpPTAsbj10aGlzLmluZGV4LG89dC5sZW5ndGgscj0wO28+cjtyKyspZT10W3JdLl9tb2RlbD90W3JdLl9tb2RlbC5ib3JkZXJXaWR0aDowLGE9dFtyXS5fY2hhcnQ/dFtyXS5fY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbbl0uaG92ZXJCb3JkZXJXaWR0aDowLGk9ZT5pP2U6aSxpPWE+aT9hOmk7cmV0dXJuIGl9fSl9fSx7fV0sMTg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiBhLmdldFZhbHVlT3JEZWZhdWx0KHQuc2hvd0xpbmUsZS5zaG93TGluZXMpfXZhciBhPXQuaGVscGVyczt0LmRlZmF1bHRzLmxpbmU9e3Nob3dMaW5lczohMCxzcGFuR2FwczohMSxob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwiY2F0ZWdvcnlcIixpZDpcIngtYXhpcy0wXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixpZDpcInktYXhpcy0wXCJ9XX19LHQuY29udHJvbGxlcnMubGluZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YXNldEVsZW1lbnRUeXBlOnQuZWxlbWVudHMuTGluZSxkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGksbixvLHI9dGhpcyxsPXIuZ2V0TWV0YSgpLHM9bC5kYXRhc2V0LGQ9bC5kYXRhfHxbXSx1PXIuY2hhcnQub3B0aW9ucyxjPXUuZWxlbWVudHMubGluZSxoPXIuZ2V0U2NhbGVGb3JJZChsLnlBeGlzSUQpLGY9ci5nZXREYXRhc2V0KCksZz1lKGYsdSk7Zm9yKGcmJihvPXMuY3VzdG9tfHx7fSx2b2lkIDAhPT1mLnRlbnNpb24mJnZvaWQgMD09PWYubGluZVRlbnNpb24mJihmLmxpbmVUZW5zaW9uPWYudGVuc2lvbikscy5fc2NhbGU9aCxzLl9kYXRhc2V0SW5kZXg9ci5pbmRleCxzLl9jaGlsZHJlbj1kLHMuX21vZGVsPXtzcGFuR2FwczpmLnNwYW5HYXBzP2Yuc3BhbkdhcHM6dS5zcGFuR2Fwcyx0ZW5zaW9uOm8udGVuc2lvbj9vLnRlbnNpb246YS5nZXRWYWx1ZU9yRGVmYXVsdChmLmxpbmVUZW5zaW9uLGMudGVuc2lvbiksYmFja2dyb3VuZENvbG9yOm8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOmYuYmFja2dyb3VuZENvbG9yfHxjLmJhY2tncm91bmRDb2xvcixib3JkZXJXaWR0aDpvLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6Zi5ib3JkZXJXaWR0aHx8Yy5ib3JkZXJXaWR0aCxib3JkZXJDb2xvcjpvLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6Zi5ib3JkZXJDb2xvcnx8Yy5ib3JkZXJDb2xvcixib3JkZXJDYXBTdHlsZTpvLmJvcmRlckNhcFN0eWxlP28uYm9yZGVyQ2FwU3R5bGU6Zi5ib3JkZXJDYXBTdHlsZXx8Yy5ib3JkZXJDYXBTdHlsZSxib3JkZXJEYXNoOm8uYm9yZGVyRGFzaD9vLmJvcmRlckRhc2g6Zi5ib3JkZXJEYXNofHxjLmJvcmRlckRhc2gsYm9yZGVyRGFzaE9mZnNldDpvLmJvcmRlckRhc2hPZmZzZXQ/by5ib3JkZXJEYXNoT2Zmc2V0OmYuYm9yZGVyRGFzaE9mZnNldHx8Yy5ib3JkZXJEYXNoT2Zmc2V0LGJvcmRlckpvaW5TdHlsZTpvLmJvcmRlckpvaW5TdHlsZT9vLmJvcmRlckpvaW5TdHlsZTpmLmJvcmRlckpvaW5TdHlsZXx8Yy5ib3JkZXJKb2luU3R5bGUsZmlsbDpvLmZpbGw/by5maWxsOnZvaWQgMCE9PWYuZmlsbD9mLmZpbGw6Yy5maWxsLHN0ZXBwZWRMaW5lOm8uc3RlcHBlZExpbmU/by5zdGVwcGVkTGluZTphLmdldFZhbHVlT3JEZWZhdWx0KGYuc3RlcHBlZExpbmUsYy5zdGVwcGVkKSxjdWJpY0ludGVycG9sYXRpb25Nb2RlOm8uY3ViaWNJbnRlcnBvbGF0aW9uTW9kZT9vLmN1YmljSW50ZXJwb2xhdGlvbk1vZGU6YS5nZXRWYWx1ZU9yRGVmYXVsdChmLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUsYy5jdWJpY0ludGVycG9sYXRpb25Nb2RlKSxzY2FsZVRvcDpoLnRvcCxzY2FsZUJvdHRvbTpoLmJvdHRvbSxzY2FsZVplcm86aC5nZXRCYXNlUGl4ZWwoKX0scy5waXZvdCgpKSxpPTAsbj1kLmxlbmd0aDtuPmk7KytpKXIudXBkYXRlRWxlbWVudChkW2ldLGksdCk7Zm9yKGcmJjAhPT1zLl9tb2RlbC50ZW5zaW9uJiZyLnVwZGF0ZUJlemllckNvbnRyb2xQb2ludHMoKSxpPTAsbj1kLmxlbmd0aDtuPmk7KytpKWRbaV0ucGl2b3QoKX0sZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYmFja2dyb3VuZENvbG9yLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYmFja2dyb3VuZENvbG9yP2k9by5iYWNrZ3JvdW5kQ29sb3I6bi5wb2ludEJhY2tncm91bmRDb2xvcj9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCYWNrZ3JvdW5kQ29sb3IsZSxpKTpuLmJhY2tncm91bmRDb2xvciYmKGk9bi5iYWNrZ3JvdW5kQ29sb3IpLGl9LGdldFBvaW50Qm9yZGVyQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYm9yZGVyQ29sb3Isbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5ib3JkZXJDb2xvcj9pPW8uYm9yZGVyQ29sb3I6bi5wb2ludEJvcmRlckNvbG9yP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJvcmRlckNvbG9yLGUsaSk6bi5ib3JkZXJDb2xvciYmKGk9bi5ib3JkZXJDb2xvciksaX0sZ2V0UG9pbnRCb3JkZXJXaWR0aDpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ib3JkZXJXaWR0aCxuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJvcmRlcldpZHRoP2k9by5ib3JkZXJXaWR0aDpuLnBvaW50Qm9yZGVyV2lkdGg/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50Qm9yZGVyV2lkdGgsZSxpKTpuLmJvcmRlcldpZHRoJiYoaT1uLmJvcmRlcldpZHRoKSxpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsZSxpKXt2YXIgbixvLHI9dGhpcyxsPXIuZ2V0TWV0YSgpLHM9dC5jdXN0b218fHt9LGQ9ci5nZXREYXRhc2V0KCksdT1yLmluZGV4LGM9ZC5kYXRhW2VdLGg9ci5nZXRTY2FsZUZvcklkKGwueUF4aXNJRCksZj1yLmdldFNjYWxlRm9ySWQobC54QXhpc0lEKSxnPXIuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxwPXIuY2hhcnQuZGF0YS5sYWJlbHN8fFtdLG09MT09PXAubGVuZ3RofHwxPT09ZC5kYXRhLmxlbmd0aHx8ci5jaGFydC5pc0NvbWJvO3ZvaWQgMCE9PWQucmFkaXVzJiZ2b2lkIDA9PT1kLnBvaW50UmFkaXVzJiYoZC5wb2ludFJhZGl1cz1kLnJhZGl1cyksdm9pZCAwIT09ZC5oaXRSYWRpdXMmJnZvaWQgMD09PWQucG9pbnRIaXRSYWRpdXMmJihkLnBvaW50SGl0UmFkaXVzPWQuaGl0UmFkaXVzKSxuPWYuZ2V0UGl4ZWxGb3JWYWx1ZShcIm9iamVjdFwiPT10eXBlb2YgYz9jOk5hTixlLHUsbSksbz1pP2guZ2V0QmFzZVBpeGVsKCk6ci5jYWxjdWxhdGVQb2ludFkoYyxlLHUpLHQuX3hTY2FsZT1mLHQuX3lTY2FsZT1oLHQuX2RhdGFzZXRJbmRleD11LHQuX2luZGV4PWUsdC5fbW9kZWw9e3g6bix5Om8sc2tpcDpzLnNraXB8fGlzTmFOKG4pfHxpc05hTihvKSxyYWRpdXM6cy5yYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRSYWRpdXMsZSxnLnJhZGl1cykscG9pbnRTdHlsZTpzLnBvaW50U3R5bGV8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRTdHlsZSxlLGcucG9pbnRTdHlsZSksYmFja2dyb3VuZENvbG9yOnIuZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3IodCxlKSxib3JkZXJDb2xvcjpyLmdldFBvaW50Qm9yZGVyQ29sb3IodCxlKSxib3JkZXJXaWR0aDpyLmdldFBvaW50Qm9yZGVyV2lkdGgodCxlKSx0ZW5zaW9uOmwuZGF0YXNldC5fbW9kZWw/bC5kYXRhc2V0Ll9tb2RlbC50ZW5zaW9uOjAsc3RlcHBlZExpbmU6bC5kYXRhc2V0Ll9tb2RlbD9sLmRhdGFzZXQuX21vZGVsLnN0ZXBwZWRMaW5lOiExLGhpdFJhZGl1czpzLmhpdFJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludEhpdFJhZGl1cyxlLGcuaGl0UmFkaXVzKX19LGNhbGN1bGF0ZVBvaW50WTpmdW5jdGlvbih0LGUsYSl7dmFyIGksbixvLHI9dGhpcyxsPXIuY2hhcnQscz1yLmdldE1ldGEoKSxkPXIuZ2V0U2NhbGVGb3JJZChzLnlBeGlzSUQpLHU9MCxjPTA7aWYoZC5vcHRpb25zLnN0YWNrZWQpe2ZvcihpPTA7YT5pO2krKylpZihuPWwuZGF0YS5kYXRhc2V0c1tpXSxvPWwuZ2V0RGF0YXNldE1ldGEoaSksXCJsaW5lXCI9PT1vLnR5cGUmJm8ueUF4aXNJRD09PWQuaWQmJmwuaXNEYXRhc2V0VmlzaWJsZShpKSl7dmFyIGg9TnVtYmVyKGQuZ2V0UmlnaHRWYWx1ZShuLmRhdGFbZV0pKTswPmg/Yys9aHx8MDp1Kz1ofHwwfXZhciBmPU51bWJlcihkLmdldFJpZ2h0VmFsdWUodCkpO3JldHVybiAwPmY/ZC5nZXRQaXhlbEZvclZhbHVlKGMrZik6ZC5nZXRQaXhlbEZvclZhbHVlKHUrZil9cmV0dXJuIGQuZ2V0UGl4ZWxGb3JWYWx1ZSh0KX0sdXBkYXRlQmV6aWVyQ29udHJvbFBvaW50czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLGEpe3JldHVybiBNYXRoLm1heChNYXRoLm1pbih0LGEpLGUpfXZhciBlLGksbixvLHIsbD10aGlzLHM9bC5nZXRNZXRhKCksZD1sLmNoYXJ0LmNoYXJ0QXJlYSx1PXMuZGF0YXx8W107aWYocy5kYXRhc2V0Ll9tb2RlbC5zcGFuR2FwcyYmKHU9dS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXQuX21vZGVsLnNraXB9KSksXCJtb25vdG9uZVwiPT09cy5kYXRhc2V0Ll9tb2RlbC5jdWJpY0ludGVycG9sYXRpb25Nb2RlKWEuc3BsaW5lQ3VydmVNb25vdG9uZSh1KTtlbHNlIGZvcihlPTAsaT11Lmxlbmd0aDtpPmU7KytlKW49dVtlXSxvPW4uX21vZGVsLHI9YS5zcGxpbmVDdXJ2ZShhLnByZXZpb3VzSXRlbSh1LGUpLl9tb2RlbCxvLGEubmV4dEl0ZW0odSxlKS5fbW9kZWwscy5kYXRhc2V0Ll9tb2RlbC50ZW5zaW9uKSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWD1yLnByZXZpb3VzLngsby5jb250cm9sUG9pbnRQcmV2aW91c1k9ci5wcmV2aW91cy55LG8uY29udHJvbFBvaW50TmV4dFg9ci5uZXh0Lngsby5jb250cm9sUG9pbnROZXh0WT1yLm5leHQueTtpZihsLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZS5jYXBCZXppZXJQb2ludHMpZm9yKGU9MCxpPXUubGVuZ3RoO2k+ZTsrK2Upbz11W2VdLl9tb2RlbCxvLmNvbnRyb2xQb2ludFByZXZpb3VzWD10KG8uY29udHJvbFBvaW50UHJldmlvdXNYLGQubGVmdCxkLnJpZ2h0KSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT10KG8uY29udHJvbFBvaW50UHJldmlvdXNZLGQudG9wLGQuYm90dG9tKSxvLmNvbnRyb2xQb2ludE5leHRYPXQoby5jb250cm9sUG9pbnROZXh0WCxkLmxlZnQsZC5yaWdodCksby5jb250cm9sUG9pbnROZXh0WT10KG8uY29udHJvbFBvaW50TmV4dFksZC50b3AsZC5ib3R0b20pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBhLGksbj10aGlzLG89bi5nZXRNZXRhKCkscj1vLmRhdGF8fFtdLGw9dHx8MTtmb3IoYT0wLGk9ci5sZW5ndGg7aT5hOysrYSlyW2FdLnRyYW5zaXRpb24obCk7Zm9yKGUobi5nZXREYXRhc2V0KCksbi5jaGFydC5vcHRpb25zKSYmby5kYXRhc2V0LnRyYW5zaXRpb24obCkuZHJhdygpLGE9MCxpPXIubGVuZ3RoO2k+YTsrK2EpclthXS5kcmF3KCl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsO28ucmFkaXVzPW4uaG92ZXJSYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlclJhZGl1cyxpLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcnx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yLGksYS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3J8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJvcmRlckNvbG9yLGksYS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aHx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQm9yZGVyV2lkdGgsaSxvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9ZS5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sbj10Ll9pbmRleCxvPXQuY3VzdG9tfHx7fSxyPXQuX21vZGVsO3ZvaWQgMCE9PWkucmFkaXVzJiZ2b2lkIDA9PT1pLnBvaW50UmFkaXVzJiYoaS5wb2ludFJhZGl1cz1pLnJhZGl1cyksci5yYWRpdXM9by5yYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGkucG9pbnRSYWRpdXMsbixlLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQucmFkaXVzKSxyLmJhY2tncm91bmRDb2xvcj1lLmdldFBvaW50QmFja2dyb3VuZENvbG9yKHQsbiksci5ib3JkZXJDb2xvcj1lLmdldFBvaW50Qm9yZGVyQ29sb3IodCxuKSxyLmJvcmRlcldpZHRoPWUuZ2V0UG9pbnRCb3JkZXJXaWR0aCh0LG4pfX0pfX0se31dLDE5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnBvbGFyQXJlYT17c2NhbGU6e3R5cGU6XCJyYWRpYWxMaW5lYXJcIixsaW5lQXJjOiEwLHRpY2tzOntiZWdpbkF0WmVybzohMH19LGFuaW1hdGlvbjp7YW5pbWF0ZVJvdGF0ZTohMCxhbmltYXRlU2NhbGU6ITB9LHN0YXJ0QW5nbGU6LS41Kk1hdGguUEksYXNwZWN0UmF0aW86MSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO3ZhciBhPXQuZGF0YSxpPWEuZGF0YXNldHMsbj1hLmxhYmVscztpZihpLmxlbmd0aClmb3IodmFyIG89MDtvPGlbMF0uZGF0YS5sZW5ndGg7KytvKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2lbMF0uYmFja2dyb3VuZENvbG9yW29dKydcIj48L3NwYW4+JyksbltvXSYmZS5wdXNoKG5bb10pLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9LGxlZ2VuZDp7bGFiZWxzOntnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgYT10LmRhdGE7cmV0dXJuIGEubGFiZWxzLmxlbmd0aCYmYS5kYXRhc2V0cy5sZW5ndGg/YS5sYWJlbHMubWFwKGZ1bmN0aW9uKGksbil7dmFyIG89dC5nZXREYXRhc2V0TWV0YSgwKSxyPWEuZGF0YXNldHNbMF0sbD1vLmRhdGFbbl0scz1sLmN1c3RvbXx8e30sZD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCx1PXQub3B0aW9ucy5lbGVtZW50cy5hcmMsYz1zLmJhY2tncm91bmRDb2xvcj9zLmJhY2tncm91bmRDb2xvcjpkKHIuYmFja2dyb3VuZENvbG9yLG4sdS5iYWNrZ3JvdW5kQ29sb3IpLGg9cy5ib3JkZXJDb2xvcj9zLmJvcmRlckNvbG9yOmQoci5ib3JkZXJDb2xvcixuLHUuYm9yZGVyQ29sb3IpLGY9cy5ib3JkZXJXaWR0aD9zLmJvcmRlcldpZHRoOmQoci5ib3JkZXJXaWR0aCxuLHUuYm9yZGVyV2lkdGgpO3JldHVybnt0ZXh0OmksZmlsbFN0eWxlOmMsc3Ryb2tlU3R5bGU6aCxsaW5lV2lkdGg6ZixoaWRkZW46aXNOYU4oci5kYXRhW25dKXx8by5kYXRhW25dLmhpZGRlbixpbmRleDpufX0pOltdfX0sb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUuaW5kZXgscj10aGlzLmNoYXJ0O2ZvcihhPTAsaT0oci5kYXRhLmRhdGFzZXRzfHxbXSkubGVuZ3RoO2k+YTsrK2Epbj1yLmdldERhdGFzZXRNZXRhKGEpLG4uZGF0YVtvXS5oaWRkZW49IW4uZGF0YVtvXS5oaWRkZW47ci51cGRhdGUoKX19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5sYWJlbHNbdC5pbmRleF0rXCI6IFwiK3QueUxhYmVsfX19fSx0LmNvbnRyb2xsZXJzLnBvbGFyQXJlYT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuQXJjLGxpbmtTY2FsZXM6ZS5ub29wLHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWkuY2hhcnRBcmVhLG89YS5nZXRNZXRhKCkscj1pLm9wdGlvbnMsbD1yLmVsZW1lbnRzLmFyYyxzPU1hdGgubWluKG4ucmlnaHQtbi5sZWZ0LG4uYm90dG9tLW4udG9wKTtpLm91dGVyUmFkaXVzPU1hdGgubWF4KChzLWwuYm9yZGVyV2lkdGgvMikvMiwwKSxpLmlubmVyUmFkaXVzPU1hdGgubWF4KHIuY3V0b3V0UGVyY2VudGFnZT9pLm91dGVyUmFkaXVzLzEwMCpyLmN1dG91dFBlcmNlbnRhZ2U6MSwwKSxpLnJhZGl1c0xlbmd0aD0oaS5vdXRlclJhZGl1cy1pLmlubmVyUmFkaXVzKS9pLmdldFZpc2libGVEYXRhc2V0Q291bnQoKSxhLm91dGVyUmFkaXVzPWkub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgqYS5pbmRleCxhLmlubmVyUmFkaXVzPWEub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgsby5jb3VudD1hLmNvdW50VmlzaWJsZUVsZW1lbnRzKCksZS5lYWNoKG8uZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7Zm9yKHZhciBuPXRoaXMsbz1uLmNoYXJ0LHI9bi5nZXREYXRhc2V0KCksbD1vLm9wdGlvbnMscz1sLmFuaW1hdGlvbixkPW8uc2NhbGUsdT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxjPW8uZGF0YS5sYWJlbHMsaD1uLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2Uoci5kYXRhW2FdKSxmPWQueENlbnRlcixnPWQueUNlbnRlcixwPTAsbT1uLmdldE1ldGEoKSxiPTA7YT5iOysrYilpc05hTihyLmRhdGFbYl0pfHxtLmRhdGFbYl0uaGlkZGVufHwrK3A7dmFyIHY9bC5zdGFydEFuZ2xlLHg9dC5oaWRkZW4/MDpkLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHIuZGF0YVthXSkseT12K2gqcCxrPXkrKHQuaGlkZGVuPzA6aCksUz1zLmFuaW1hdGVTY2FsZT8wOmQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoci5kYXRhW2FdKTtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX3NjYWxlOmQsX21vZGVsOnt4OmYseTpnLGlubmVyUmFkaXVzOjAsb3V0ZXJSYWRpdXM6aT9TOngsc3RhcnRBbmdsZTppJiZzLmFuaW1hdGVSb3RhdGU/djp5LGVuZEFuZ2xlOmkmJnMuYW5pbWF0ZVJvdGF0ZT92OmssbGFiZWw6dShjLGEsY1thXSl9fSksbi5yZW1vdmVIb3ZlclN0eWxlKHQpLHQucGl2b3QoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwodGhpcyxlLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5hcmMpfSxjb3VudFZpc2libGVFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0RGF0YXNldCgpLGE9dGhpcy5nZXRNZXRhKCksaT0wO3JldHVybiBlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKGUsYSl7aXNOYU4odC5kYXRhW2FdKXx8ZS5oaWRkZW58fGkrK30pLGl9LGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRNZXRhKCkuY291bnQ7cmV0dXJuIGU+MCYmIWlzTmFOKHQpPzIqTWF0aC5QSS9lOjB9fSl9fSx7fV0sMjA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMucmFkYXI9e2FzcGVjdFJhdGlvOjEsc2NhbGU6e3R5cGU6XCJyYWRpYWxMaW5lYXJcIn0sZWxlbWVudHM6e2xpbmU6e3RlbnNpb246MH19fSx0LmNvbnRyb2xsZXJzLnJhZGFyPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhc2V0RWxlbWVudFR5cGU6dC5lbGVtZW50cy5MaW5lLGRhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LGxpbmtTY2FsZXM6ZS5ub29wLHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1pLmRhdGFzZXQsbz1pLmRhdGEscj1uLmN1c3RvbXx8e30sbD1hLmdldERhdGFzZXQoKSxzPWEuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLGQ9YS5jaGFydC5zY2FsZTt2b2lkIDAhPT1sLnRlbnNpb24mJnZvaWQgMD09PWwubGluZVRlbnNpb24mJihsLmxpbmVUZW5zaW9uPWwudGVuc2lvbiksZS5leHRlbmQoaS5kYXRhc2V0LHtfZGF0YXNldEluZGV4OmEuaW5kZXgsX2NoaWxkcmVuOm8sX2xvb3A6ITAsX21vZGVsOnt0ZW5zaW9uOnIudGVuc2lvbj9yLnRlbnNpb246ZS5nZXRWYWx1ZU9yRGVmYXVsdChsLmxpbmVUZW5zaW9uLHMudGVuc2lvbiksYmFja2dyb3VuZENvbG9yOnIuYmFja2dyb3VuZENvbG9yP3IuYmFja2dyb3VuZENvbG9yOmwuYmFja2dyb3VuZENvbG9yfHxzLmJhY2tncm91bmRDb2xvcixib3JkZXJXaWR0aDpyLmJvcmRlcldpZHRoP3IuYm9yZGVyV2lkdGg6bC5ib3JkZXJXaWR0aHx8cy5ib3JkZXJXaWR0aCxib3JkZXJDb2xvcjpyLmJvcmRlckNvbG9yP3IuYm9yZGVyQ29sb3I6bC5ib3JkZXJDb2xvcnx8cy5ib3JkZXJDb2xvcixmaWxsOnIuZmlsbD9yLmZpbGw6dm9pZCAwIT09bC5maWxsP2wuZmlsbDpzLmZpbGwsYm9yZGVyQ2FwU3R5bGU6ci5ib3JkZXJDYXBTdHlsZT9yLmJvcmRlckNhcFN0eWxlOmwuYm9yZGVyQ2FwU3R5bGV8fHMuYm9yZGVyQ2FwU3R5bGUsYm9yZGVyRGFzaDpyLmJvcmRlckRhc2g/ci5ib3JkZXJEYXNoOmwuYm9yZGVyRGFzaHx8cy5ib3JkZXJEYXNoLGJvcmRlckRhc2hPZmZzZXQ6ci5ib3JkZXJEYXNoT2Zmc2V0P3IuYm9yZGVyRGFzaE9mZnNldDpsLmJvcmRlckRhc2hPZmZzZXR8fHMuYm9yZGVyRGFzaE9mZnNldCxib3JkZXJKb2luU3R5bGU6ci5ib3JkZXJKb2luU3R5bGU/ci5ib3JkZXJKb2luU3R5bGU6bC5ib3JkZXJKb2luU3R5bGV8fHMuYm9yZGVySm9pblN0eWxlLHNjYWxlVG9wOmQudG9wLHNjYWxlQm90dG9tOmQuYm90dG9tLHNjYWxlWmVybzpkLmdldEJhc2VQb3NpdGlvbigpfX0pLGkuZGF0YXNldC5waXZvdCgpLGUuZWFjaChvLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0sYSksYS51cGRhdGVCZXppZXJDb250cm9sUG9pbnRzKCl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz10LmN1c3RvbXx8e30scj1uLmdldERhdGFzZXQoKSxsPW4uY2hhcnQuc2NhbGUscz1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQsZD1sLmdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZShhLHIuZGF0YVthXSk7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9zY2FsZTpsLF9tb2RlbDp7eDppP2wueENlbnRlcjpkLngseTppP2wueUNlbnRlcjpkLnksdGVuc2lvbjpvLnRlbnNpb24/by50ZW5zaW9uOmUuZ2V0VmFsdWVPckRlZmF1bHQoci50ZW5zaW9uLG4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLnRlbnNpb24pLHJhZGl1czpvLnJhZGl1cz9vLnJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50UmFkaXVzLGEscy5yYWRpdXMpLGJhY2tncm91bmRDb2xvcjpvLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50QmFja2dyb3VuZENvbG9yLGEscy5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlckNvbG9yOm8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50Qm9yZGVyQ29sb3IsYSxzLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDpvLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJvcmRlcldpZHRoLGEscy5ib3JkZXJXaWR0aCkscG9pbnRTdHlsZTpvLnBvaW50U3R5bGU/by5wb2ludFN0eWxlOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRTdHlsZSxhLHMucG9pbnRTdHlsZSksaGl0UmFkaXVzOm8uaGl0UmFkaXVzP28uaGl0UmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIuaGl0UmFkaXVzLGEscy5oaXRSYWRpdXMpfX0pLHQuX21vZGVsLnNraXA9by5za2lwP28uc2tpcDppc05hTih0Ll9tb2RlbC54KXx8aXNOYU4odC5fbW9kZWwueSl9LHVwZGF0ZUJlemllckNvbnRyb2xQb2ludHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNoYXJ0LmNoYXJ0QXJlYSxhPXRoaXMuZ2V0TWV0YSgpO2UuZWFjaChhLmRhdGEsZnVuY3Rpb24oaSxuKXt2YXIgbz1pLl9tb2RlbCxyPWUuc3BsaW5lQ3VydmUoZS5wcmV2aW91c0l0ZW0oYS5kYXRhLG4sITApLl9tb2RlbCxvLGUubmV4dEl0ZW0oYS5kYXRhLG4sITApLl9tb2RlbCxvLnRlbnNpb24pO28uY29udHJvbFBvaW50UHJldmlvdXNYPU1hdGgubWF4KE1hdGgubWluKHIucHJldmlvdXMueCx0LnJpZ2h0KSx0LmxlZnQpLG8uY29udHJvbFBvaW50UHJldmlvdXNZPU1hdGgubWF4KE1hdGgubWluKHIucHJldmlvdXMueSx0LmJvdHRvbSksdC50b3ApLG8uY29udHJvbFBvaW50TmV4dFg9TWF0aC5tYXgoTWF0aC5taW4oci5uZXh0LngsdC5yaWdodCksdC5sZWZ0KSxvLmNvbnRyb2xQb2ludE5leHRZPU1hdGgubWF4KE1hdGgubWluKHIubmV4dC55LHQuYm90dG9tKSx0LnRvcCksaS5waXZvdCgpfSl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5nZXRNZXRhKCksaT10fHwxO2UuZWFjaChhLmRhdGEsZnVuY3Rpb24odCl7dC50cmFuc2l0aW9uKGkpfSksYS5kYXRhc2V0LnRyYW5zaXRpb24oaSkuZHJhdygpLGUuZWFjaChhLmRhdGEsZnVuY3Rpb24odCl7dC5kcmF3KCl9KX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuY3VzdG9tfHx7fSxuPXQuX2luZGV4LG89dC5fbW9kZWw7by5yYWRpdXM9aS5ob3ZlclJhZGl1cz9pLmhvdmVyUmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlclJhZGl1cyxuLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9aS5ob3ZlckJhY2tncm91bmRDb2xvcj9pLmhvdmVyQmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixuLGUuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9aS5ob3ZlckJvcmRlckNvbG9yP2kuaG92ZXJCb3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCb3JkZXJDb2xvcixuLGUuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1pLmhvdmVyQm9yZGVyV2lkdGg/aS5ob3ZlckJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJvcmRlcldpZHRoLG4sby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10LmN1c3RvbXx8e30sbj10Ll9pbmRleCxvPXQuX21vZGVsLHI9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50O28ucmFkaXVzPWkucmFkaXVzP2kucmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucmFkaXVzLG4sci5yYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPWkuYmFja2dyb3VuZENvbG9yP2kuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCYWNrZ3JvdW5kQ29sb3IsbixyLmJhY2tncm91bmRDb2xvciksby5ib3JkZXJDb2xvcj1pLmJvcmRlckNvbG9yP2kuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJvcmRlckNvbG9yLG4sci5ib3JkZXJDb2xvciksby5ib3JkZXJXaWR0aD1pLmJvcmRlcldpZHRoP2kuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJvcmRlcldpZHRoLG4sci5ib3JkZXJXaWR0aCl9fSl9fSx7fV0sMjE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLmFuaW1hdGlvbj17ZHVyYXRpb246MWUzLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLG9uUHJvZ3Jlc3M6ZS5ub29wLG9uQ29tcGxldGU6ZS5ub29wfSx0LkFuaW1hdGlvbj10LkVsZW1lbnQuZXh0ZW5kKHtjdXJyZW50U3RlcDpudWxsLG51bVN0ZXBzOjYwLGVhc2luZzpcIlwiLHJlbmRlcjpudWxsLG9uQW5pbWF0aW9uUHJvZ3Jlc3M6bnVsbCxvbkFuaW1hdGlvbkNvbXBsZXRlOm51bGx9KSx0LmFuaW1hdGlvblNlcnZpY2U9e2ZyYW1lRHVyYXRpb246MTcsYW5pbWF0aW9uczpbXSxkcm9wRnJhbWVzOjAscmVxdWVzdDpudWxsLGFkZEFuaW1hdGlvbjpmdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10aGlzO2l8fCh0LmFuaW1hdGluZz0hMCk7Zm9yKHZhciBvPTA7bzxuLmFuaW1hdGlvbnMubGVuZ3RoOysrbylpZihuLmFuaW1hdGlvbnNbb10uY2hhcnRJbnN0YW5jZT09PXQpcmV0dXJuIHZvaWQobi5hbmltYXRpb25zW29dLmFuaW1hdGlvbk9iamVjdD1lKTtuLmFuaW1hdGlvbnMucHVzaCh7Y2hhcnRJbnN0YW5jZTp0LGFuaW1hdGlvbk9iamVjdDplfSksMT09PW4uYW5pbWF0aW9ucy5sZW5ndGgmJm4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9LGNhbmNlbEFuaW1hdGlvbjpmdW5jdGlvbih0KXt2YXIgYT1lLmZpbmRJbmRleCh0aGlzLmFuaW1hdGlvbnMsZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhcnRJbnN0YW5jZT09PXR9KTstMSE9PWEmJih0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGEsMSksdC5hbmltYXRpbmc9ITEpfSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO251bGw9PT10LnJlcXVlc3QmJih0LnJlcXVlc3Q9ZS5yZXF1ZXN0QW5pbUZyYW1lLmNhbGwod2luZG93LGZ1bmN0aW9uKCl7dC5yZXF1ZXN0PW51bGwsdC5zdGFydERpZ2VzdCgpfSkpfSxzdGFydERpZ2VzdDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1EYXRlLm5vdygpLGE9MDt0LmRyb3BGcmFtZXM+MSYmKGE9TWF0aC5mbG9vcih0LmRyb3BGcmFtZXMpLHQuZHJvcEZyYW1lcz10LmRyb3BGcmFtZXMlMSk7Zm9yKHZhciBpPTA7aTx0LmFuaW1hdGlvbnMubGVuZ3RoOyludWxsPT09dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcCYmKHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9MCksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcCs9MSthLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA+dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcyYmKHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcyksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5yZW5kZXIodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdCksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MuY2FsbCYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzLmNhbGwodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPT09dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcz8odC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUuY2FsbCYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlLmNhbGwodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldKSx0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZS5hbmltYXRpbmc9ITEsdC5hbmltYXRpb25zLnNwbGljZShpLDEpKTorK2k7dmFyIG49RGF0ZS5ub3coKSxvPShuLWUpL3QuZnJhbWVEdXJhdGlvbjt0LmRyb3BGcmFtZXMrPW8sdC5hbmltYXRpb25zLmxlbmd0aD4wJiZ0LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfX19fSx7fV0sMjI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jYW52YXNIZWxwZXJzPXt9O2UuZHJhd1BvaW50PWZ1bmN0aW9uKHQsZSxhLGksbil7dmFyIG8scixsLHMsZCx1O2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlJiYobz1lLnRvU3RyaW5nKCksXCJbb2JqZWN0IEhUTUxJbWFnZUVsZW1lbnRdXCI9PT1vfHxcIltvYmplY3QgSFRNTENhbnZhc0VsZW1lbnRdXCI9PT1vKSlyZXR1cm4gdm9pZCB0LmRyYXdJbWFnZShlLGktZS53aWR0aC8yLG4tZS5oZWlnaHQvMik7aWYoIShpc05hTihhKXx8MD49YSkpe3N3aXRjaChlKXtkZWZhdWx0OnQuYmVnaW5QYXRoKCksdC5hcmMoaSxuLGEsMCwyKk1hdGguUEkpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwidHJpYW5nbGVcIjp0LmJlZ2luUGF0aCgpLHI9MyphL01hdGguc3FydCgzKSxkPXIqTWF0aC5zcXJ0KDMpLzIsdC5tb3ZlVG8oaS1yLzIsbitkLzMpLHQubGluZVRvKGkrci8yLG4rZC8zKSx0LmxpbmVUbyhpLG4tMipkLzMpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwicmVjdFwiOnU9MS9NYXRoLlNRUlQyKmEsdC5iZWdpblBhdGgoKSx0LmZpbGxSZWN0KGktdSxuLXUsMip1LDIqdSksdC5zdHJva2VSZWN0KGktdSxuLXUsMip1LDIqdSk7YnJlYWs7Y2FzZVwicmVjdFJvdFwiOnU9MS9NYXRoLlNRUlQyKmEsdC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLXUsbiksdC5saW5lVG8oaSxuK3UpLHQubGluZVRvKGkrdSxuKSx0LmxpbmVUbyhpLG4tdSksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJjcm9zc1wiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuK2EpLHQubGluZVRvKGksbi1hKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwiY3Jvc3NSb3RcIjp0LmJlZ2luUGF0aCgpLGw9TWF0aC5jb3MoTWF0aC5QSS80KSphLHM9TWF0aC5zaW4oTWF0aC5QSS80KSphLHQubW92ZVRvKGktbCxuLXMpLHQubGluZVRvKGkrbCxuK3MpLHQubW92ZVRvKGktbCxuK3MpLHQubGluZVRvKGkrbCxuLXMpLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwic3RhclwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuK2EpLHQubGluZVRvKGksbi1hKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLGw9TWF0aC5jb3MoTWF0aC5QSS80KSphLHM9TWF0aC5zaW4oTWF0aC5QSS80KSphLHQubW92ZVRvKGktbCxuLXMpLHQubGluZVRvKGkrbCxuK3MpLHQubW92ZVRvKGktbCxuK3MpLHQubGluZVRvKGkrbCxuLXMpLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwibGluZVwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImRhc2hcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCl9dC5zdHJva2UoKX19fX0se31dLDIzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYT1yLmdldFN0eWxlKHQsZSksaT1hJiZhLm1hdGNoKC8oXFxkKylweC8pO3JldHVybiBpP051bWJlcihpWzFdKTp2b2lkIDB9ZnVuY3Rpb24gYSh0LGEpe3ZhciBpPXQuc3R5bGUsbj10LmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSxvPXQuZ2V0QXR0cmlidXRlKFwid2lkdGhcIik7aWYodC5fY2hhcnRqcz17aW5pdGlhbDp7aGVpZ2h0Om4sd2lkdGg6byxzdHlsZTp7ZGlzcGxheTppLmRpc3BsYXksaGVpZ2h0OmkuaGVpZ2h0LHdpZHRoOmkud2lkdGh9fX0saS5kaXNwbGF5PWkuZGlzcGxheXx8XCJibG9ja1wiLG51bGw9PT1vfHxcIlwiPT09byl7dmFyIHI9ZSh0LFwid2lkdGhcIik7dm9pZCAwIT09ciYmKHQud2lkdGg9cil9aWYobnVsbD09PW58fFwiXCI9PT1uKWlmKFwiXCI9PT10LnN0eWxlLmhlaWdodCl0LmhlaWdodD10LndpZHRoLyhhLm9wdGlvbnMuYXNwZWN0UmF0aW98fDIpO2Vsc2V7dmFyIGw9ZSh0LFwiaGVpZ2h0XCIpO3ZvaWQgMCE9PXImJih0LmhlaWdodD1sKX1yZXR1cm4gdH1mdW5jdGlvbiBpKHQpe2lmKHQuX2NoYXJ0anMpe3ZhciBlPXQuX2NoYXJ0anMuaW5pdGlhbDtbXCJoZWlnaHRcIixcIndpZHRoXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGk9ZVthXTt2b2lkIDA9PT1pfHxudWxsPT09aT90LnJlbW92ZUF0dHJpYnV0ZShhKTp0LnNldEF0dHJpYnV0ZShhLGkpfSksci5lYWNoKGUuc3R5bGV8fHt9LGZ1bmN0aW9uKGUsYSl7dC5zdHlsZVthXT1lfSksdC53aWR0aD10LndpZHRoLGRlbGV0ZSB0Ll9jaGFydGpzfX1mdW5jdGlvbiBuKHQsZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQ/dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTp0Lmxlbmd0aCYmKHQ9dFswXSksdCYmdC5jYW52YXMmJih0PXQuY2FudmFzKSx0IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpe3ZhciBpPXQuZ2V0Q29udGV4dCYmdC5nZXRDb250ZXh0KFwiMmRcIik7aWYoaSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRClyZXR1cm4gYSh0LGUpLGl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gbyhlKXtlPWV8fHt9O3ZhciBhPWUuZGF0YT1lLmRhdGF8fHt9O3JldHVybiBhLmRhdGFzZXRzPWEuZGF0YXNldHN8fFtdLGEubGFiZWxzPWEubGFiZWxzfHxbXSxlLm9wdGlvbnM9ci5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbCx0LmRlZmF1bHRzW2UudHlwZV0sZS5vcHRpb25zfHx7fSksZX12YXIgcj10LmhlbHBlcnM7dC50eXBlcz17fSx0Lmluc3RhbmNlcz17fSx0LmNvbnRyb2xsZXJzPXt9LHQuQ29udHJvbGxlcj1mdW5jdGlvbihlLGEsaSl7dmFyIGw9dGhpczthPW8oYSk7dmFyIHM9bihlLGEpLGQ9cyYmcy5jYW52YXMsdT1kJiZkLmhlaWdodCxjPWQmJmQud2lkdGg7cmV0dXJuIGkuY3R4PXMsaS5jYW52YXM9ZCxpLmNvbmZpZz1hLGkud2lkdGg9YyxpLmhlaWdodD11LGkuYXNwZWN0UmF0aW89dT9jL3U6bnVsbCxsLmlkPXIudWlkKCksbC5jaGFydD1pLGwuY29uZmlnPWEsbC5vcHRpb25zPWEub3B0aW9ucyxsLl9idWZmZXJlZFJlbmRlcj0hMSx0Lmluc3RhbmNlc1tsLmlkXT1sLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbC5jb25maWcuZGF0YX19KSxzJiZkPyhyLnJldGluYVNjYWxlKGkpLGwub3B0aW9ucy5yZXNwb25zaXZlJiYoci5hZGRSZXNpemVMaXN0ZW5lcihkLnBhcmVudE5vZGUsZnVuY3Rpb24oKXtsLnJlc2l6ZSgpfSksbC5yZXNpemUoITApKSxsLmluaXRpYWxpemUoKSxsKTooY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgY2hhcnQ6IGNhbid0IGFjcXVpcmUgY29udGV4dCBmcm9tIHRoZSBnaXZlbiBpdGVtXCIpLGwpfSxyLmV4dGVuZCh0LkNvbnRyb2xsZXIucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZUluaXRcIixbZV0pLGUuYmluZEV2ZW50cygpLGUuZW5zdXJlU2NhbGVzSGF2ZUlEcygpLGUuYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzKCksZS5idWlsZFNjYWxlcygpLGUudXBkYXRlTGF5b3V0KCksZS5yZXNldEVsZW1lbnRzKCksZS5pbml0VG9vbFRpcCgpLGUudXBkYXRlKCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVySW5pdFwiLFtlXSksZX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5jbGVhcih0aGlzLmNoYXJ0KSx0aGlzfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIHQuYW5pbWF0aW9uU2VydmljZS5jYW5jZWxBbmltYXRpb24odGhpcyksdGhpc30scmVzaXplOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49YS5vcHRpb25zLG89aS5jYW52YXMsbD1uLm1haW50YWluQXNwZWN0UmF0aW8mJmkuYXNwZWN0UmF0aW98fG51bGwscz1NYXRoLmZsb29yKHIuZ2V0TWF4aW11bVdpZHRoKG8pKSxkPU1hdGguZmxvb3IobD9zL2w6ci5nZXRNYXhpbXVtSGVpZ2h0KG8pKTtpZihpLndpZHRoIT09c3x8aS5oZWlnaHQhPT1kKXtvLndpZHRoPWkud2lkdGg9cyxvLmhlaWdodD1pLmhlaWdodD1kLG8uc3R5bGUud2lkdGg9cytcInB4XCIsby5zdHlsZS5oZWlnaHQ9ZCtcInB4XCIsci5yZXRpbmFTY2FsZShpKTt2YXIgdT17d2lkdGg6cyxoZWlnaHQ6ZH07dC5wbHVnaW5zLm5vdGlmeShcInJlc2l6ZVwiLFthLHVdKSxhLm9wdGlvbnMub25SZXNpemUmJmEub3B0aW9ucy5vblJlc2l6ZShhLHUpLGV8fChhLnN0b3AoKSxhLnVwZGF0ZShhLm9wdGlvbnMucmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uKSl9fSxlbnN1cmVTY2FsZXNIYXZlSURzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLGU9dC5zY2FsZXN8fHt9LGE9dC5zY2FsZTtyLmVhY2goZS54QXhlcyxmdW5jdGlvbih0LGUpe3QuaWQ9dC5pZHx8XCJ4LWF4aXMtXCIrZX0pLHIuZWFjaChlLnlBeGVzLGZ1bmN0aW9uKHQsZSl7dC5pZD10LmlkfHxcInktYXhpcy1cIitlfSksYSYmKGEuaWQ9YS5pZHx8XCJzY2FsZVwiKX0sYnVpbGRTY2FsZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGE9ZS5vcHRpb25zLGk9ZS5zY2FsZXM9e30sbj1bXTthLnNjYWxlcyYmKG49bi5jb25jYXQoKGEuc2NhbGVzLnhBeGVzfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybntvcHRpb25zOnQsZHR5cGU6XCJjYXRlZ29yeVwifX0pLChhLnNjYWxlcy55QXhlc3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57b3B0aW9uczp0LGR0eXBlOlwibGluZWFyXCJ9fSkpKSxhLnNjYWxlJiZuLnB1c2goe29wdGlvbnM6YS5zY2FsZSxkdHlwZTpcInJhZGlhbExpbmVhclwiLGlzRGVmYXVsdDohMH0pLHIuZWFjaChuLGZ1bmN0aW9uKGEpe3ZhciBuPWEub3B0aW9ucyxvPXIuZ2V0VmFsdWVPckRlZmF1bHQobi50eXBlLGEuZHR5cGUpLGw9dC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVDb25zdHJ1Y3RvcihvKTtpZihsKXt2YXIgcz1uZXcgbCh7aWQ6bi5pZCxvcHRpb25zOm4sY3R4OmUuY2hhcnQuY3R4LGNoYXJ0OmV9KTtpW3MuaWRdPXMsYS5pc0RlZmF1bHQmJihlLnNjYWxlPXMpfX0pLHQuc2NhbGVTZXJ2aWNlLmFkZFNjYWxlc1RvTGF5b3V0KHRoaXMpfSx1cGRhdGVMYXlvdXQ6ZnVuY3Rpb24oKXt0LmxheW91dFNlcnZpY2UudXBkYXRlKHRoaXMsdGhpcy5jaGFydC53aWR0aCx0aGlzLmNoYXJ0LmhlaWdodCl9LGJ1aWxkT3JVcGRhdGVDb250cm9sbGVyczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1bXSxpPVtdO2lmKHIuZWFjaChlLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24obixvKXt2YXIgcj1lLmdldERhdGFzZXRNZXRhKG8pO3IudHlwZXx8KHIudHlwZT1uLnR5cGV8fGUuY29uZmlnLnR5cGUpLGEucHVzaChyLnR5cGUpLHIuY29udHJvbGxlcj9yLmNvbnRyb2xsZXIudXBkYXRlSW5kZXgobyk6KHIuY29udHJvbGxlcj1uZXcgdC5jb250cm9sbGVyc1tyLnR5cGVdKGUsbyksaS5wdXNoKHIuY29udHJvbGxlcikpfSxlKSxhLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YS5sZW5ndGg7bisrKWlmKGFbbl0hPT1hW24tMV0pe2UuaXNDb21ibz0hMDticmVha31yZXR1cm4gaX0scmVzZXRFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7ci5lYWNoKHQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihlLGEpe3QuZ2V0RGF0YXNldE1ldGEoYSkuY29udHJvbGxlci5yZXNldCgpfSx0KX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0RWxlbWVudHMoKSx0aGlzLnRvb2x0aXAuaW5pdGlhbGl6ZSgpfSx1cGRhdGU6ZnVuY3Rpb24oZSxhKXt2YXIgaT10aGlzO3QucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVVcGRhdGVcIixbaV0pLGkudG9vbHRpcC5fZGF0YT1pLmRhdGE7dmFyIG49aS5idWlsZE9yVXBkYXRlQ29udHJvbGxlcnMoKTtyLmVhY2goaS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKHQsZSl7aS5nZXREYXRhc2V0TWV0YShlKS5jb250cm9sbGVyLmJ1aWxkT3JVcGRhdGVFbGVtZW50cygpfSxpKSx0LmxheW91dFNlcnZpY2UudXBkYXRlKGksaS5jaGFydC53aWR0aCxpLmNoYXJ0LmhlaWdodCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyU2NhbGVVcGRhdGVcIixbaV0pLHIuZWFjaChuLGZ1bmN0aW9uKHQpe3QucmVzZXQoKX0pLGkudXBkYXRlRGF0YXNldHMoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJVcGRhdGVcIixbaV0pLGkuX2J1ZmZlcmVkUmVuZGVyP2kuX2J1ZmZlcmVkUmVxdWVzdD17bGF6eTphLGR1cmF0aW9uOmV9OmkucmVuZGVyKGUsYSl9LHVwZGF0ZURhdGFzZXRzOmZ1bmN0aW9uKCl7dmFyIGUsYSxpPXRoaXM7aWYodC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURhdGFzZXRzVXBkYXRlXCIsW2ldKSl7Zm9yKGU9MCxhPWkuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YT5lOysrZSlpLmdldERhdGFzZXRNZXRhKGUpLmNvbnRyb2xsZXIudXBkYXRlKCk7dC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRGF0YXNldHNVcGRhdGVcIixbaV0pfX0scmVuZGVyOmZ1bmN0aW9uKGUsYSl7dmFyIGk9dGhpczt0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlUmVuZGVyXCIsW2ldKTt2YXIgbj1pLm9wdGlvbnMuYW5pbWF0aW9uO2lmKG4mJihcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmMCE9PWV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYwIT09bi5kdXJhdGlvbikpe3ZhciBvPW5ldyB0LkFuaW1hdGlvbjtvLm51bVN0ZXBzPShlfHxuLmR1cmF0aW9uKS8xNi42NixvLmVhc2luZz1uLmVhc2luZyxvLnJlbmRlcj1mdW5jdGlvbih0LGUpe3ZhciBhPXIuZWFzaW5nRWZmZWN0c1tlLmVhc2luZ10saT1lLmN1cnJlbnRTdGVwL2UubnVtU3RlcHMsbj1hKGkpO3QuZHJhdyhuLGksZS5jdXJyZW50U3RlcCl9LG8ub25BbmltYXRpb25Qcm9ncmVzcz1uLm9uUHJvZ3Jlc3Msby5vbkFuaW1hdGlvbkNvbXBsZXRlPW4ub25Db21wbGV0ZSx0LmFuaW1hdGlvblNlcnZpY2UuYWRkQW5pbWF0aW9uKGksbyxlLGEpfWVsc2UgaS5kcmF3KCksbiYmbi5vbkNvbXBsZXRlJiZuLm9uQ29tcGxldGUuY2FsbCYmbi5vbkNvbXBsZXRlLmNhbGwoaSk7cmV0dXJuIGl9LGRyYXc6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpcyxpPWV8fDE7YS5jbGVhcigpLHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEcmF3XCIsW2EsaV0pLHIuZWFjaChhLmJveGVzLGZ1bmN0aW9uKHQpe3QuZHJhdyhhLmNoYXJ0QXJlYSl9LGEpLGEuc2NhbGUmJmEuc2NhbGUuZHJhdygpLHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEYXRhc2V0c0RyYXdcIixbYSxpXSksci5lYWNoKGEuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbih0LGkpe2EuaXNEYXRhc2V0VmlzaWJsZShpKSYmYS5nZXREYXRhc2V0TWV0YShpKS5jb250cm9sbGVyLmRyYXcoZSl9LGEsITApLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRhdGFzZXRzRHJhd1wiLFthLGldKSxhLnRvb2x0aXAudHJhbnNpdGlvbihpKS5kcmF3KCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRHJhd1wiLFthLGldKX0sZ2V0RWxlbWVudEF0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMuc2luZ2xlKHRoaXMsZSl9LGdldEVsZW1lbnRzQXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5sYWJlbCh0aGlzLGUse2ludGVyc2VjdDohMH0pfSxnZXRFbGVtZW50c0F0WEF4aXM6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXNbXCJ4LWF4aXNcIl0odGhpcyxlLHtpbnRlcnNlY3Q6ITB9KX0sZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZTpmdW5jdGlvbihlLGEsaSl7dmFyIG49dC5JbnRlcmFjdGlvbi5tb2Rlc1thXTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odGhpcyxlLGkpOltdfSxnZXREYXRhc2V0QXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5kYXRhc2V0KHRoaXMsZSl9LGdldERhdGFzZXRNZXRhOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmRhdGEuZGF0YXNldHNbdF07YS5fbWV0YXx8KGEuX21ldGE9e30pO1xyXG52YXIgaT1hLl9tZXRhW2UuaWRdO3JldHVybiBpfHwoaT1hLl9tZXRhW2UuaWRdPXt0eXBlOm51bGwsZGF0YTpbXSxkYXRhc2V0Om51bGwsY29udHJvbGxlcjpudWxsLGhpZGRlbjpudWxsLHhBeGlzSUQ6bnVsbCx5QXhpc0lEOm51bGx9KSxpfSxnZXRWaXNpYmxlRGF0YXNldENvdW50OmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT0wLGE9dGhpcy5kYXRhLmRhdGFzZXRzLmxlbmd0aDthPmU7KytlKXRoaXMuaXNEYXRhc2V0VmlzaWJsZShlKSYmdCsrO3JldHVybiB0fSxpc0RhdGFzZXRWaXNpYmxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0RGF0YXNldE1ldGEodCk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlLmhpZGRlbj8hZS5oaWRkZW46IXRoaXMuZGF0YS5kYXRhc2V0c1t0XS5oaWRkZW59LGdlbmVyYXRlTGVnZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5sZWdlbmRDYWxsYmFjayh0aGlzKX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlLGEsbixvPXRoaXMsbD1vLmNoYXJ0LmNhbnZhcztmb3Ioby5zdG9wKCksYT0wLG49by5kYXRhLmRhdGFzZXRzLmxlbmd0aDtuPmE7KythKWU9by5nZXREYXRhc2V0TWV0YShhKSxlLmNvbnRyb2xsZXImJihlLmNvbnRyb2xsZXIuZGVzdHJveSgpLGUuY29udHJvbGxlcj1udWxsKTtsJiYoci51bmJpbmRFdmVudHMobyxvLmV2ZW50cyksci5yZW1vdmVSZXNpemVMaXN0ZW5lcihsLnBhcmVudE5vZGUpLHIuY2xlYXIoby5jaGFydCksaShsKSxvLmNoYXJ0LmNhbnZhcz1udWxsLG8uY2hhcnQuY3R4PW51bGwpLHQucGx1Z2lucy5ub3RpZnkoXCJkZXN0cm95XCIsW29dKSxkZWxldGUgdC5pbnN0YW5jZXNbby5pZF19LHRvQmFzZTY0SW1hZ2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5jYW52YXMudG9EYXRhVVJMLmFwcGx5KHRoaXMuY2hhcnQuY2FudmFzLGFyZ3VtZW50cyl9LGluaXRUb29sVGlwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLnRvb2x0aXA9bmV3IHQuVG9vbHRpcCh7X2NoYXJ0OmUuY2hhcnQsX2NoYXJ0SW5zdGFuY2U6ZSxfZGF0YTplLmRhdGEsX29wdGlvbnM6ZS5vcHRpb25zLnRvb2x0aXBzfSxlKSxlLnRvb2x0aXAuaW5pdGlhbGl6ZSgpfSxiaW5kRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyLmJpbmRFdmVudHModCx0Lm9wdGlvbnMuZXZlbnRzLGZ1bmN0aW9uKGUpe3QuZXZlbnRIYW5kbGVyKGUpfSl9LHVwZGF0ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpLG4sbyxyPWE/XCJzZXRIb3ZlclN0eWxlXCI6XCJyZW1vdmVIb3ZlclN0eWxlXCI7Zm9yKG49MCxvPXQubGVuZ3RoO28+bjsrK24paT10W25dLGkmJnRoaXMuZ2V0RGF0YXNldE1ldGEoaS5fZGF0YXNldEluZGV4KS5jb250cm9sbGVyW3JdKGkpfSxldmVudEhhbmRsZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUubGVnZW5kLGk9ZS50b29sdGlwLG49ZS5vcHRpb25zLmhvdmVyO2UuX2J1ZmZlcmVkUmVuZGVyPSEwLGUuX2J1ZmZlcmVkUmVxdWVzdD1udWxsO3ZhciBvPWUuaGFuZGxlRXZlbnQodCk7b3w9YSYmYS5oYW5kbGVFdmVudCh0KSxvfD1pJiZpLmhhbmRsZUV2ZW50KHQpO3ZhciByPWUuX2J1ZmZlcmVkUmVxdWVzdDtyZXR1cm4gcj9lLnJlbmRlcihyLmR1cmF0aW9uLHIubGF6eSk6byYmIWUuYW5pbWF0aW5nJiYoZS5zdG9wKCksZS5yZW5kZXIobi5hbmltYXRpb25EdXJhdGlvbiwhMCkpLGUuX2J1ZmZlcmVkUmVuZGVyPSExLGUuX2J1ZmZlcmVkUmVxdWVzdD1udWxsLGV9LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLm9wdGlvbnN8fHt9LGk9YS5ob3ZlcixuPSExO3JldHVybiBlLmxhc3RBY3RpdmU9ZS5sYXN0QWN0aXZlfHxbXSxcIm1vdXNlb3V0XCI9PT10LnR5cGU/ZS5hY3RpdmU9W106ZS5hY3RpdmU9ZS5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKHQsaS5tb2RlLGkpLGkub25Ib3ZlciYmaS5vbkhvdmVyLmNhbGwoZSxlLmFjdGl2ZSksKFwibW91c2V1cFwiPT09dC50eXBlfHxcImNsaWNrXCI9PT10LnR5cGUpJiZhLm9uQ2xpY2smJmEub25DbGljay5jYWxsKGUsdCxlLmFjdGl2ZSksZS5sYXN0QWN0aXZlLmxlbmd0aCYmZS51cGRhdGVIb3ZlclN0eWxlKGUubGFzdEFjdGl2ZSxpLm1vZGUsITEpLGUuYWN0aXZlLmxlbmd0aCYmaS5tb2RlJiZlLnVwZGF0ZUhvdmVyU3R5bGUoZS5hY3RpdmUsaS5tb2RlLCEwKSxuPSFyLmFycmF5RXF1YWxzKGUuYWN0aXZlLGUubGFzdEFjdGl2ZSksZS5sYXN0QWN0aXZlPWUuYWN0aXZlLG59fSl9fSx7fV0sMjQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiB0Ll9jaGFydGpzP3ZvaWQgdC5fY2hhcnRqcy5saXN0ZW5lcnMucHVzaChlKTooT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfY2hhcnRqc1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTp7bGlzdGVuZXJzOltlXX19KSx2b2lkIG4uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgYT1cIm9uRGF0YVwiK2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPXRbZV07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLG89bi5hcHBseSh0aGlzLGUpO3JldHVybiBpLmVhY2godC5fY2hhcnRqcy5saXN0ZW5lcnMsZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdFthXSYmdFthXS5hcHBseSh0LGUpfSksb319KX0pKX1mdW5jdGlvbiBhKHQsZSl7dmFyIGE9dC5fY2hhcnRqcztpZihhKXt2YXIgaT1hLmxpc3RlbmVycyxvPWkuaW5kZXhPZihlKTstMSE9PW8mJmkuc3BsaWNlKG8sMSksaS5sZW5ndGg+MHx8KG4uZm9yRWFjaChmdW5jdGlvbihlKXtkZWxldGUgdFtlXX0pLGRlbGV0ZSB0Ll9jaGFydGpzKX19dmFyIGk9dC5oZWxwZXJzLG49W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwic3BsaWNlXCIsXCJ1bnNoaWZ0XCJdO3QuRGF0YXNldENvbnRyb2xsZXI9ZnVuY3Rpb24odCxlKXt0aGlzLmluaXRpYWxpemUodCxlKX0saS5leHRlbmQodC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUse2RhdGFzZXRFbGVtZW50VHlwZTpudWxsLGRhdGFFbGVtZW50VHlwZTpudWxsLGluaXRpYWxpemU6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2EuY2hhcnQ9dCxhLmluZGV4PWUsYS5saW5rU2NhbGVzKCksYS5hZGRFbGVtZW50cygpfSx1cGRhdGVJbmRleDpmdW5jdGlvbih0KXt0aGlzLmluZGV4PXR9LGxpbmtTY2FsZXM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRNZXRhKCksYT10LmdldERhdGFzZXQoKTtudWxsPT09ZS54QXhpc0lEJiYoZS54QXhpc0lEPWEueEF4aXNJRHx8dC5jaGFydC5vcHRpb25zLnNjYWxlcy54QXhlc1swXS5pZCksbnVsbD09PWUueUF4aXNJRCYmKGUueUF4aXNJRD1hLnlBeGlzSUR8fHQuY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uaWQpfSxnZXREYXRhc2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0aGlzLmluZGV4XX0sZ2V0TWV0YTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKHRoaXMuaW5kZXgpfSxnZXRTY2FsZUZvcklkOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNoYXJ0LnNjYWxlc1t0XX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZSghMCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhJiZhKHRoaXMuX2RhdGEsdGhpcyl9LGNyZWF0ZU1ldGFEYXRhc2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZGF0YXNldEVsZW1lbnRUeXBlO3JldHVybiBlJiZuZXcgZSh7X2NoYXJ0OnQuY2hhcnQuY2hhcnQsX2RhdGFzZXRJbmRleDp0LmluZGV4fSl9LGNyZWF0ZU1ldGFEYXRhOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmRhdGFFbGVtZW50VHlwZTtyZXR1cm4gYSYmbmV3IGEoe19jaGFydDplLmNoYXJ0LmNoYXJ0LF9kYXRhc2V0SW5kZXg6ZS5pbmRleCxfaW5kZXg6dH0pfSxhZGRFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0LGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldERhdGFzZXQoKS5kYXRhfHxbXSxvPWkuZGF0YTtmb3IodD0wLGU9bi5sZW5ndGg7ZT50OysrdClvW3RdPW9bdF18fGEuY3JlYXRlTWV0YURhdGEodCk7aS5kYXRhc2V0PWkuZGF0YXNldHx8YS5jcmVhdGVNZXRhRGF0YXNldCgpfSxhZGRFbGVtZW50QW5kUmVzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jcmVhdGVNZXRhRGF0YSh0KTt0aGlzLmdldE1ldGEoKS5kYXRhLnNwbGljZSh0LDAsZSksdGhpcy51cGRhdGVFbGVtZW50KGUsdCwhMCl9LGJ1aWxkT3JVcGRhdGVFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10LmdldERhdGFzZXQoKSxuPWkuZGF0YXx8KGkuZGF0YT1bXSk7dC5fZGF0YSE9PW4mJih0Ll9kYXRhJiZhKHQuX2RhdGEsdCksZShuLHQpLHQuX2RhdGE9biksdC5yZXN5bmNFbGVtZW50cygpfSx1cGRhdGU6aS5ub29wLGRyYXc6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXR8fDEsbj10aGlzLmdldE1ldGEoKS5kYXRhO2ZvcihlPTAsYT1uLmxlbmd0aDthPmU7KytlKW5bZV0udHJhbnNpdGlvbihpKS5kcmF3KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxuPXQuX2luZGV4LG89dC5jdXN0b218fHt9LHI9aS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsbD10Ll9tb2RlbDtsLmJhY2tncm91bmRDb2xvcj1vLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjpyKGEuYmFja2dyb3VuZENvbG9yLG4sZS5iYWNrZ3JvdW5kQ29sb3IpLGwuYm9yZGVyQ29sb3I9by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOnIoYS5ib3JkZXJDb2xvcixuLGUuYm9yZGVyQ29sb3IpLGwuYm9yZGVyV2lkdGg9by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOnIoYS5ib3JkZXJXaWR0aCxuLGUuYm9yZGVyV2lkdGgpfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGE9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz1pLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxyPWkuZ2V0SG92ZXJDb2xvcixsPXQuX21vZGVsO2wuYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3I/bi5ob3ZlckJhY2tncm91bmRDb2xvcjpvKGUuaG92ZXJCYWNrZ3JvdW5kQ29sb3IsYSxyKGwuYmFja2dyb3VuZENvbG9yKSksbC5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3I/bi5ob3ZlckJvcmRlckNvbG9yOm8oZS5ob3ZlckJvcmRlckNvbG9yLGEscihsLmJvcmRlckNvbG9yKSksbC5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGg/bi5ob3ZlckJvcmRlcldpZHRoOm8oZS5ob3ZlckJvcmRlcldpZHRoLGEsbC5ib3JkZXJXaWR0aCl9LHJlc3luY0VsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TWV0YSgpLGE9dC5nZXREYXRhc2V0KCkuZGF0YSxpPWUuZGF0YS5sZW5ndGgsbj1hLmxlbmd0aDtpPm4/ZS5kYXRhLnNwbGljZShuLGktbik6bj5pJiZ0Lmluc2VydEVsZW1lbnRzKGksbi1pKX0saW5zZXJ0RWxlbWVudHM6ZnVuY3Rpb24odCxlKXtmb3IodmFyIGE9MDtlPmE7KythKXRoaXMuYWRkRWxlbWVudEFuZFJlc2V0KHQrYSl9LG9uRGF0YVB1c2g6ZnVuY3Rpb24oKXt0aGlzLmluc2VydEVsZW1lbnRzKHRoaXMuZ2V0RGF0YXNldCgpLmRhdGEubGVuZ3RoLTEsYXJndW1lbnRzLmxlbmd0aCl9LG9uRGF0YVBvcDpmdW5jdGlvbigpe3RoaXMuZ2V0TWV0YSgpLmRhdGEucG9wKCl9LG9uRGF0YVNoaWZ0OmZ1bmN0aW9uKCl7dGhpcy5nZXRNZXRhKCkuZGF0YS5zaGlmdCgpfSxvbkRhdGFTcGxpY2U6ZnVuY3Rpb24odCxlKXt0aGlzLmdldE1ldGEoKS5kYXRhLnNwbGljZSh0LGUpLHRoaXMuaW5zZXJ0RWxlbWVudHModCxhcmd1bWVudHMubGVuZ3RoLTIpfSxvbkRhdGFVbnNoaWZ0OmZ1bmN0aW9uKCl7dGhpcy5pbnNlcnRFbGVtZW50cygwLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kPWkuaW5oZXJpdHN9fSx7fV0sMjU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZWxlbWVudHM9e30sdC5FbGVtZW50PWZ1bmN0aW9uKHQpe2UuZXh0ZW5kKHRoaXMsdCksdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5leHRlbmQodC5FbGVtZW50LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuaGlkZGVuPSExfSxwaXZvdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHQuX3ZpZXd8fCh0Ll92aWV3PWUuY2xvbmUodC5fbW9kZWwpKSx0Ll9zdGFydD1lLmNsb25lKHQuX3ZpZXcpLHR9LHRyYW5zaXRpb246ZnVuY3Rpb24odCl7dmFyIGE9dGhpcztyZXR1cm4gYS5fdmlld3x8KGEuX3ZpZXc9ZS5jbG9uZShhLl9tb2RlbCkpLDE9PT10PyhhLl92aWV3PWEuX21vZGVsLGEuX3N0YXJ0PW51bGwsYSk6KGEuX3N0YXJ0fHxhLnBpdm90KCksZS5lYWNoKGEuX21vZGVsLGZ1bmN0aW9uKGksbil7aWYoXCJfXCI9PT1uWzBdKTtlbHNlIGlmKGEuX3ZpZXcuaGFzT3duUHJvcGVydHkobikpaWYoaT09PWEuX3ZpZXdbbl0pO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpdHJ5e3ZhciBvPWUuY29sb3IoYS5fbW9kZWxbbl0pLm1peChlLmNvbG9yKGEuX3N0YXJ0W25dKSx0KTthLl92aWV3W25dPW8ucmdiU3RyaW5nKCl9Y2F0Y2gocil7YS5fdmlld1tuXT1pfWVsc2UgaWYoXCJudW1iZXJcIj09dHlwZW9mIGkpe3ZhciBsPXZvaWQgMCE9PWEuX3N0YXJ0W25dJiZpc05hTihhLl9zdGFydFtuXSk9PT0hMT9hLl9zdGFydFtuXTowO2EuX3ZpZXdbbl09KGEuX21vZGVsW25dLWwpKnQrbH1lbHNlIGEuX3ZpZXdbbl09aTtlbHNlXCJudW1iZXJcIiE9dHlwZW9mIGl8fGlzTmFOKGEuX3ZpZXdbbl0pP2EuX3ZpZXdbbl09aTphLl92aWV3W25dPWkqdH0sYSksYSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMuX21vZGVsLngseTp0aGlzLl9tb2RlbC55fX0saGFzVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZS5pc051bWJlcih0aGlzLl9tb2RlbC54KSYmZS5pc051bWJlcih0aGlzLl9tb2RlbC55KX19KSx0LkVsZW1lbnQuZXh0ZW5kPWUuaW5oZXJpdHN9fSx7fV0sMjY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KDMpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSxhKXt2YXIgaTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD8oaT1wYXJzZUludCh0LDEwKSwtMSE9PXQuaW5kZXhPZihcIiVcIikmJihpPWkvMTAwKmUucGFyZW50Tm9kZVthXSkpOmk9dCxpfWZ1bmN0aW9uIGEodCl7cmV0dXJuIHZvaWQgMCE9PXQmJm51bGwhPT10JiZcIm5vbmVcIiE9PXR9ZnVuY3Rpb24gbih0LGksbil7dmFyIG89ZG9jdW1lbnQuZGVmYXVsdFZpZXcscj10LnBhcmVudE5vZGUsbD1vLmdldENvbXB1dGVkU3R5bGUodClbaV0scz1vLmdldENvbXB1dGVkU3R5bGUocilbaV0sZD1hKGwpLHU9YShzKSxjPU51bWJlci5QT1NJVElWRV9JTkZJTklUWTtyZXR1cm4gZHx8dT9NYXRoLm1pbihkP2UobCx0LG4pOmMsdT9lKHMscixuKTpjKTpcIm5vbmVcIn12YXIgbz10LmhlbHBlcnM9e307by5lYWNoPWZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuLHI7aWYoby5pc0FycmF5KHQpKWlmKHI9dC5sZW5ndGgsaSlmb3Iobj1yLTE7bj49MDtuLS0pZS5jYWxsKGEsdFtuXSxuKTtlbHNlIGZvcihuPTA7cj5uO24rKyllLmNhbGwoYSx0W25dLG4pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciBsPU9iamVjdC5rZXlzKHQpO2ZvcihyPWwubGVuZ3RoLG49MDtyPm47bisrKWUuY2FsbChhLHRbbFtuXV0sbFtuXSl9fSxvLmNsb25lPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0LGEpe28uaXNBcnJheSh0KT9lW2FdPXQuc2xpY2UoMCk6XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10P2VbYV09by5jbG9uZSh0KTplW2FdPXR9KSxlfSxvLmV4dGVuZD1mdW5jdGlvbih0KXtmb3IodmFyIGU9ZnVuY3Rpb24oZSxhKXt0W2FdPWV9LGE9MSxpPWFyZ3VtZW50cy5sZW5ndGg7aT5hO2ErKylvLmVhY2goYXJndW1lbnRzW2FdLGUpO3JldHVybiB0fSxvLmNvbmZpZ01lcmdlPWZ1bmN0aW9uKGUpe3ZhciBhPW8uY2xvbmUoZSk7cmV0dXJuIG8uZWFjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSksZnVuY3Rpb24oZSl7by5lYWNoKGUsZnVuY3Rpb24oZSxpKXt2YXIgbj1hLmhhc093blByb3BlcnR5KGkpLHI9bj9hW2ldOnt9O1wic2NhbGVzXCI9PT1pP2FbaV09by5zY2FsZU1lcmdlKHIsZSk6XCJzY2FsZVwiPT09aT9hW2ldPW8uY29uZmlnTWVyZ2Uocix0LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKGUudHlwZSksZSk6IW58fFwib2JqZWN0XCIhPXR5cGVvZiByfHxvLmlzQXJyYXkocil8fG51bGw9PT1yfHxcIm9iamVjdFwiIT10eXBlb2YgZXx8by5pc0FycmF5KGUpP2FbaV09ZTphW2ldPW8uY29uZmlnTWVyZ2UocixlKX0pfSksYX0sby5zY2FsZU1lcmdlPWZ1bmN0aW9uKGUsYSl7dmFyIGk9by5jbG9uZShlKTtyZXR1cm4gby5lYWNoKGEsZnVuY3Rpb24oZSxhKXtcInhBeGVzXCI9PT1hfHxcInlBeGVzXCI9PT1hP2kuaGFzT3duUHJvcGVydHkoYSk/by5lYWNoKGUsZnVuY3Rpb24oZSxuKXt2YXIgcj1vLmdldFZhbHVlT3JEZWZhdWx0KGUudHlwZSxcInhBeGVzXCI9PT1hP1wiY2F0ZWdvcnlcIjpcImxpbmVhclwiKSxsPXQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMocik7bj49aVthXS5sZW5ndGh8fCFpW2FdW25dLnR5cGU/aVthXS5wdXNoKG8uY29uZmlnTWVyZ2UobCxlKSk6ZS50eXBlJiZlLnR5cGUhPT1pW2FdW25dLnR5cGU/aVthXVtuXT1vLmNvbmZpZ01lcmdlKGlbYV1bbl0sbCxlKTppW2FdW25dPW8uY29uZmlnTWVyZ2UoaVthXVtuXSxlKX0pOihpW2FdPVtdLG8uZWFjaChlLGZ1bmN0aW9uKGUpe3ZhciBuPW8uZ2V0VmFsdWVPckRlZmF1bHQoZS50eXBlLFwieEF4ZXNcIj09PWE/XCJjYXRlZ29yeVwiOlwibGluZWFyXCIpO2lbYV0ucHVzaChvLmNvbmZpZ01lcmdlKHQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMobiksZSkpfSkpOmkuaGFzT3duUHJvcGVydHkoYSkmJlwib2JqZWN0XCI9PXR5cGVvZiBpW2FdJiZudWxsIT09aVthXSYmXCJvYmplY3RcIj09dHlwZW9mIGU/aVthXT1vLmNvbmZpZ01lcmdlKGlbYV0sZSk6aVthXT1lfSksaX0sby5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQ9ZnVuY3Rpb24odCxlLGEpe3JldHVybiB2b2lkIDA9PT10fHxudWxsPT09dD9hOm8uaXNBcnJheSh0KT9lPHQubGVuZ3RoP3RbZV06YTp0fSxvLmdldFZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PXQ/ZTp0fSxvLmluZGV4T2Y9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5pbmRleE9mKGUpfTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgYT0wLGk9dC5sZW5ndGg7aT5hOysrYSlpZih0W2FdPT09ZSlyZXR1cm4gYTtyZXR1cm4tMX0sby53aGVyZT1mdW5jdGlvbih0LGUpe2lmKG8uaXNBcnJheSh0KSYmQXJyYXkucHJvdG90eXBlLmZpbHRlcilyZXR1cm4gdC5maWx0ZXIoZSk7dmFyIGE9W107cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQpe2UodCkmJmEucHVzaCh0KX0pLGF9LG8uZmluZEluZGV4PUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXg/ZnVuY3Rpb24odCxlLGEpe3JldHVybiB0LmZpbmRJbmRleChlLGEpfTpmdW5jdGlvbih0LGUsYSl7YT12b2lkIDA9PT1hP3Q6YTtmb3IodmFyIGk9MCxuPXQubGVuZ3RoO24+aTsrK2kpaWYoZS5jYWxsKGEsdFtpXSxpLHQpKXJldHVybiBpO3JldHVybi0xfSxvLmZpbmROZXh0V2hlcmU9ZnVuY3Rpb24odCxlLGEpeyh2b2lkIDA9PT1hfHxudWxsPT09YSkmJihhPS0xKTtmb3IodmFyIGk9YSsxO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO2lmKGUobikpcmV0dXJuIG59fSxvLmZpbmRQcmV2aW91c1doZXJlPWZ1bmN0aW9uKHQsZSxhKXsodm9pZCAwPT09YXx8bnVsbD09PWEpJiYoYT10Lmxlbmd0aCk7Zm9yKHZhciBpPWEtMTtpPj0wO2ktLSl7dmFyIG49dFtpXTtpZihlKG4pKXJldHVybiBufX0sby5pbmhlcml0cz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9dCYmdC5oYXNPd25Qcm9wZXJ0eShcImNvbnN0cnVjdG9yXCIpP3QuY29uc3RydWN0b3I6ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGk9ZnVuY3Rpb24oKXt0aGlzLmNvbnN0cnVjdG9yPWF9O3JldHVybiBpLnByb3RvdHlwZT1lLnByb3RvdHlwZSxhLnByb3RvdHlwZT1uZXcgaSxhLmV4dGVuZD1vLmluaGVyaXRzLHQmJm8uZXh0ZW5kKGEucHJvdG90eXBlLHQpLGEuX19zdXBlcl9fPWUucHJvdG90eXBlLGF9LG8ubm9vcD1mdW5jdGlvbigpe30sby51aWQ9ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0Kyt9fSgpLG8uaXNOdW1iZXI9ZnVuY3Rpb24odCl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQodCkpJiZpc0Zpbml0ZSh0KX0sby5hbG1vc3RFcXVhbHM9ZnVuY3Rpb24odCxlLGEpe3JldHVybiBNYXRoLmFicyh0LWUpPGF9LG8ubWF4PWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBpc05hTihlKT90Ok1hdGgubWF4KHQsZSl9LE51bWJlci5ORUdBVElWRV9JTkZJTklUWSl9LG8ubWluPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBpc05hTihlKT90Ok1hdGgubWluKHQsZSl9LE51bWJlci5QT1NJVElWRV9JTkZJTklUWSl9LG8uc2lnbj1NYXRoLnNpZ24/ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc2lnbih0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3QsMD09PXR8fGlzTmFOKHQpP3Q6dD4wPzE6LTF9LG8ubG9nMTA9TWF0aC5sb2cxMD9mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5sb2cxMCh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgubG9nKHQpL01hdGguTE4xMH0sby50b1JhZGlhbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHQqKE1hdGguUEkvMTgwKX0sby50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQqKDE4MC9NYXRoLlBJKX0sby5nZXRBbmdsZUZyb21Qb2ludD1mdW5jdGlvbih0LGUpe3ZhciBhPWUueC10LngsaT1lLnktdC55LG49TWF0aC5zcXJ0KGEqYStpKmkpLG89TWF0aC5hdGFuMihpLGEpO3JldHVybiBvPC0uNSpNYXRoLlBJJiYobys9MipNYXRoLlBJKSx7YW5nbGU6byxkaXN0YW5jZTpufX0sby5kaXN0YW5jZUJldHdlZW5Qb2ludHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGUueC10LngsMikrTWF0aC5wb3coZS55LXQueSwyKSl9LG8uYWxpYXNQaXhlbD1mdW5jdGlvbih0KXtyZXR1cm4gdCUyPT09MD8wOi41fSxvLnNwbGluZUN1cnZlPWZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXQuc2tpcD9lOnQsbz1lLHI9YS5za2lwP2U6YSxsPU1hdGguc3FydChNYXRoLnBvdyhvLngtbi54LDIpK01hdGgucG93KG8ueS1uLnksMikpLHM9TWF0aC5zcXJ0KE1hdGgucG93KHIueC1vLngsMikrTWF0aC5wb3coci55LW8ueSwyKSksZD1sLyhsK3MpLHU9cy8obCtzKTtkPWlzTmFOKGQpPzA6ZCx1PWlzTmFOKHUpPzA6dTt2YXIgYz1pKmQsaD1pKnU7cmV0dXJue3ByZXZpb3VzOnt4Om8ueC1jKihyLngtbi54KSx5Om8ueS1jKihyLnktbi55KX0sbmV4dDp7eDpvLngraCooci54LW4ueCkseTpvLnkraCooci55LW4ueSl9fX0sby5FUFNJTE9OPU51bWJlci5FUFNJTE9OfHwxZS0xNCxvLnNwbGluZUN1cnZlTW9ub3RvbmU9ZnVuY3Rpb24odCl7dmFyIGUsYSxpLG4scj0odHx8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57bW9kZWw6dC5fbW9kZWwsZGVsdGFLOjAsbUs6MH19KSxsPXIubGVuZ3RoO2ZvcihlPTA7bD5lOysrZSlpPXJbZV0saS5tb2RlbC5za2lwfHwoYT1lPjA/cltlLTFdOm51bGwsbj1sLTE+ZT9yW2UrMV06bnVsbCxuJiYhbi5tb2RlbC5za2lwJiYoaS5kZWx0YUs9KG4ubW9kZWwueS1pLm1vZGVsLnkpLyhuLm1vZGVsLngtaS5tb2RlbC54KSksIWF8fGEubW9kZWwuc2tpcD9pLm1LPWkuZGVsdGFLOiFufHxuLm1vZGVsLnNraXA/aS5tSz1hLmRlbHRhSzp0aGlzLnNpZ24oYS5kZWx0YUspIT09dGhpcy5zaWduKGkuZGVsdGFLKT9pLm1LPTA6aS5tSz0oYS5kZWx0YUsraS5kZWx0YUspLzIpO3ZhciBzLGQsdSxjO2ZvcihlPTA7bC0xPmU7KytlKWk9cltlXSxuPXJbZSsxXSxpLm1vZGVsLnNraXB8fG4ubW9kZWwuc2tpcHx8KG8uYWxtb3N0RXF1YWxzKGkuZGVsdGFLLDAsdGhpcy5FUFNJTE9OKT9pLm1LPW4ubUs9MDoocz1pLm1LL2kuZGVsdGFLLGQ9bi5tSy9pLmRlbHRhSyxjPU1hdGgucG93KHMsMikrTWF0aC5wb3coZCwyKSw5Pj1jfHwodT0zL01hdGguc3FydChjKSxpLm1LPXMqdSppLmRlbHRhSyxuLm1LPWQqdSppLmRlbHRhSykpKTt2YXIgaDtmb3IoZT0wO2w+ZTsrK2UpaT1yW2VdLGkubW9kZWwuc2tpcHx8KGE9ZT4wP3JbZS0xXTpudWxsLG49bC0xPmU/cltlKzFdOm51bGwsYSYmIWEubW9kZWwuc2tpcCYmKGg9KGkubW9kZWwueC1hLm1vZGVsLngpLzMsaS5tb2RlbC5jb250cm9sUG9pbnRQcmV2aW91c1g9aS5tb2RlbC54LWgsaS5tb2RlbC5jb250cm9sUG9pbnRQcmV2aW91c1k9aS5tb2RlbC55LWgqaS5tSyksbiYmIW4ubW9kZWwuc2tpcCYmKGg9KG4ubW9kZWwueC1pLm1vZGVsLngpLzMsaS5tb2RlbC5jb250cm9sUG9pbnROZXh0WD1pLm1vZGVsLngraCxpLm1vZGVsLmNvbnRyb2xQb2ludE5leHRZPWkubW9kZWwueStoKmkubUspKX0sby5uZXh0SXRlbT1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGE/ZT49dC5sZW5ndGgtMT90WzBdOnRbZSsxXTplPj10Lmxlbmd0aC0xP3RbdC5sZW5ndGgtMV06dFtlKzFdfSxvLnByZXZpb3VzSXRlbT1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGE/MD49ZT90W3QubGVuZ3RoLTFdOnRbZS0xXTowPj1lP3RbMF06dFtlLTFdfSxvLm5pY2VOdW09ZnVuY3Rpb24odCxlKXt2YXIgYSxpPU1hdGguZmxvb3Ioby5sb2cxMCh0KSksbj10L01hdGgucG93KDEwLGkpO3JldHVybiBhPWU/MS41Pm4/MTozPm4/Mjo3Pm4/NToxMDoxPj1uPzE6Mj49bj8yOjU+PW4/NToxMCxhKk1hdGgucG93KDEwLGkpfTt2YXIgcj1vLmVhc2luZ0VmZmVjdHM9e2xpbmVhcjpmdW5jdGlvbih0KXtyZXR1cm4gdH0sZWFzZUluUXVhZDpmdW5jdGlvbih0KXtyZXR1cm4gdCp0fSxlYXNlT3V0UXVhZDpmdW5jdGlvbih0KXtyZXR1cm4tMSp0Kih0LTIpfSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQ6LTAuNSooLS10Kih0LTIpLTEpfSxlYXNlSW5DdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4gdCp0KnR9LGVhc2VPdXRDdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqdCsxKX0sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0Oi41KigodC09MikqdCp0KzIpfSxlYXNlSW5RdWFydDpmdW5jdGlvbih0KXtyZXR1cm4gdCp0KnQqdH0sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybi0xKigodD10LzEtMSkqdCp0KnQtMSl9LGVhc2VJbk91dFF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdCp0Oi0wLjUqKCh0LT0yKSp0KnQqdC0yKX0sZWFzZUluUXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKHQvPTEpKnQqdCp0KnR9LGVhc2VPdXRRdWludDpmdW5jdGlvbih0KXtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqdCp0KnQrMSl9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdCp0KnQ6LjUqKCh0LT0yKSp0KnQqdCp0KzIpfSxlYXNlSW5TaW5lOmZ1bmN0aW9uKHQpe3JldHVybi0xKk1hdGguY29zKHQvMSooTWF0aC5QSS8yKSkrMX0sZWFzZU91dFNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuIDEqTWF0aC5zaW4odC8xKihNYXRoLlBJLzIpKX0sZWFzZUluT3V0U2luZTpmdW5jdGlvbih0KXtyZXR1cm4tMC41KihNYXRoLmNvcyhNYXRoLlBJKnQvMSktMSl9LGVhc2VJbkV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDA9PT10PzE6MSpNYXRoLnBvdygyLDEwKih0LzEtMSkpfSxlYXNlT3V0RXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMT09PXQ/MToxKigtTWF0aC5wb3coMiwtMTAqdC8xKSsxKX0sZWFzZUluT3V0RXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMD09PXQ/MDoxPT09dD8xOih0Lz0uNSk8MT8uNSpNYXRoLnBvdygyLDEwKih0LTEpKTouNSooLU1hdGgucG93KDIsLTEwKi0tdCkrMil9LGVhc2VJbkNpcmM6ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PTE/dDotMSooTWF0aC5zcXJ0KDEtKHQvPTEpKnQpLTEpfSxlYXNlT3V0Q2lyYzpmdW5jdGlvbih0KXtyZXR1cm4gMSpNYXRoLnNxcnQoMS0odD10LzEtMSkqdCl9LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy0wLjUqKE1hdGguc3FydCgxLXQqdCktMSk6LjUqKE1hdGguc3FydCgxLSh0LT0yKSp0KSsxKX0sZWFzZUluRWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6MT09PSh0Lz0xKT8xOihhfHwoYT0uMyksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksLShpKk1hdGgucG93KDIsMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKSl9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoxPT09KHQvPTEpPzE6KGF8fChhPS4zKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSxpKk1hdGgucG93KDIsLTEwKnQpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkrMSl9LGVhc2VJbk91dEVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjI9PT0odC89LjUpPzE6KGF8fChhPTEqKC4zKjEuNSkpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLDE+dD8tLjUqKGkqTWF0aC5wb3coMiwxMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkpOmkqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKi41KzEpfSxlYXNlSW5CYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuIDEqKHQvPTEpKnQqKChlKzEpKnQtZSl9LGVhc2VPdXRCYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KigoZSsxKSp0K2UpKzEpfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuKHQvPS41KTwxPy41Kih0KnQqKCgoZSo9MS41MjUpKzEpKnQtZSkpOi41KigodC09MikqdCooKChlKj0xLjUyNSkrMSkqdCtlKSsyKX0sZWFzZUluQm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybiAxLXIuZWFzZU91dEJvdW5jZSgxLXQpfSxlYXNlT3V0Qm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0xKTwxLzIuNzU/MSooNy41NjI1KnQqdCk6Mi8yLjc1PnQ/MSooNy41NjI1Kih0LT0xLjUvMi43NSkqdCsuNzUpOjIuNS8yLjc1PnQ/MSooNy41NjI1Kih0LT0yLjI1LzIuNzUpKnQrLjkzNzUpOjEqKDcuNTYyNSoodC09Mi42MjUvMi43NSkqdCsuOTg0Mzc1KX0sZWFzZUluT3V0Qm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybi41PnQ/LjUqci5lYXNlSW5Cb3VuY2UoMip0KTouNSpyLmVhc2VPdXRCb3VuY2UoMip0LTEpKy41fX07by5yZXF1ZXN0QW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe3JldHVybiB3aW5kb3cuc2V0VGltZW91dCh0LDFlMy82MCl9fSgpLG8uY2FuY2VsQW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LmNsZWFyVGltZW91dCh0LDFlMy82MCl9fSgpLG8uZ2V0UmVsYXRpdmVQb3NpdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBhLGksbj10Lm9yaWdpbmFsRXZlbnR8fHQscj10LmN1cnJlbnRUYXJnZXR8fHQuc3JjRWxlbWVudCxsPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscz1uLnRvdWNoZXM7cyYmcy5sZW5ndGg+MD8oYT1zWzBdLmNsaWVudFgsaT1zWzBdLmNsaWVudFkpOihhPW4uY2xpZW50WCxpPW4uY2xpZW50WSk7dmFyIGQ9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLWxlZnRcIikpLHU9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLXRvcFwiKSksYz1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctcmlnaHRcIikpLGg9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLWJvdHRvbVwiKSksZj1sLnJpZ2h0LWwubGVmdC1kLWMsZz1sLmJvdHRvbS1sLnRvcC11LWg7cmV0dXJuIGE9TWF0aC5yb3VuZCgoYS1sLmxlZnQtZCkvZipyLndpZHRoL2UuY3VycmVudERldmljZVBpeGVsUmF0aW8pLGk9TWF0aC5yb3VuZCgoaS1sLnRvcC11KS9nKnIuaGVpZ2h0L2UuY3VycmVudERldmljZVBpeGVsUmF0aW8pLHt4OmEseTppfX0sby5hZGRFdmVudD1mdW5jdGlvbih0LGUsYSl7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLGEpOnQuYXR0YWNoRXZlbnQ/dC5hdHRhY2hFdmVudChcIm9uXCIrZSxhKTp0W1wib25cIitlXT1hfSxvLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKHQsZSxhKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXI/dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsYSwhMSk6dC5kZXRhY2hFdmVudD90LmRldGFjaEV2ZW50KFwib25cIitlLGEpOnRbXCJvblwiK2VdPW8ubm9vcH0sby5iaW5kRXZlbnRzPWZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10LmV2ZW50cz10LmV2ZW50c3x8e307by5lYWNoKGUsZnVuY3Rpb24oZSl7aVtlXT1mdW5jdGlvbigpe2EuYXBwbHkodCxhcmd1bWVudHMpfSxvLmFkZEV2ZW50KHQuY2hhcnQuY2FudmFzLGUsaVtlXSl9KX0sby51bmJpbmRFdmVudHM9ZnVuY3Rpb24odCxlKXt2YXIgYT10LmNoYXJ0LmNhbnZhcztvLmVhY2goZSxmdW5jdGlvbih0LGUpe28ucmVtb3ZlRXZlbnQoYSxlLHQpfSl9LG8uZ2V0Q29uc3RyYWludFdpZHRoPWZ1bmN0aW9uKHQpe3JldHVybiBuKHQsXCJtYXgtd2lkdGhcIixcImNsaWVudFdpZHRoXCIpfSxvLmdldENvbnN0cmFpbnRIZWlnaHQ9ZnVuY3Rpb24odCl7cmV0dXJuIG4odCxcIm1heC1oZWlnaHRcIixcImNsaWVudEhlaWdodFwiKX0sby5nZXRNYXhpbXVtV2lkdGg9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlLGE9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1sZWZ0XCIpLDEwKSxpPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctcmlnaHRcIiksMTApLG49ZS5jbGllbnRXaWR0aC1hLWkscj1vLmdldENvbnN0cmFpbnRXaWR0aCh0KTtyZXR1cm4gaXNOYU4ocik/bjpNYXRoLm1pbihuLHIpfSxvLmdldE1heGltdW1IZWlnaHQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlLGE9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy10b3BcIiksMTApLGk9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1ib3R0b21cIiksMTApLG49ZS5jbGllbnRIZWlnaHQtYS1pLHI9by5nZXRDb25zdHJhaW50SGVpZ2h0KHQpO3JldHVybiBpc05hTihyKT9uOk1hdGgubWluKG4scil9LG8uZ2V0U3R5bGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jdXJyZW50U3R5bGU/dC5jdXJyZW50U3R5bGVbZV06ZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpLmdldFByb3BlcnR5VmFsdWUoZSl9LG8ucmV0aW5hU2NhbGU9ZnVuY3Rpb24odCl7dmFyIGU9dC5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MTtpZigxIT09ZSl7dmFyIGE9dC5jYW52YXMsaT10LmhlaWdodCxuPXQud2lkdGg7YS5oZWlnaHQ9aSplLGEud2lkdGg9biplLHQuY3R4LnNjYWxlKGUsZSksYS5zdHlsZS5oZWlnaHQ9aStcInB4XCIsYS5zdHlsZS53aWR0aD1uK1wicHhcIn19LG8uY2xlYXI9ZnVuY3Rpb24odCl7dC5jdHguY2xlYXJSZWN0KDAsMCx0LndpZHRoLHQuaGVpZ2h0KX0sby5mb250U3RyaW5nPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gZStcIiBcIit0K1wicHggXCIrYX0sby5sb25nZXN0VGV4dD1mdW5jdGlvbih0LGUsYSxpKXtpPWl8fHt9O3ZhciBuPWkuZGF0YT1pLmRhdGF8fHt9LHI9aS5nYXJiYWdlQ29sbGVjdD1pLmdhcmJhZ2VDb2xsZWN0fHxbXTtpLmZvbnQhPT1lJiYobj1pLmRhdGE9e30scj1pLmdhcmJhZ2VDb2xsZWN0PVtdLGkuZm9udD1lKSx0LmZvbnQ9ZTt2YXIgbD0wO28uZWFjaChhLGZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUmJm51bGwhPT1lJiZvLmlzQXJyYXkoZSkhPT0hMD9sPW8ubWVhc3VyZVRleHQodCxuLHIsbCxlKTpvLmlzQXJyYXkoZSkmJm8uZWFjaChlLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWV8fG51bGw9PT1lfHxvLmlzQXJyYXkoZSl8fChsPW8ubWVhc3VyZVRleHQodCxuLHIsbCxlKSl9KX0pO3ZhciBzPXIubGVuZ3RoLzI7aWYocz5hLmxlbmd0aCl7Zm9yKHZhciBkPTA7cz5kO2QrKylkZWxldGUgbltyW2RdXTtyLnNwbGljZSgwLHMpfXJldHVybiBsfSxvLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQsZSxhLGksbil7dmFyIG89ZVtuXTtyZXR1cm4gb3x8KG89ZVtuXT10Lm1lYXN1cmVUZXh0KG4pLndpZHRoLGEucHVzaChuKSksbz5pJiYoaT1vKSxpfSxvLm51bWJlck9mTGFiZWxMaW5lcz1mdW5jdGlvbih0KXt2YXIgZT0xO3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0KXtvLmlzQXJyYXkodCkmJnQubGVuZ3RoPmUmJihlPXQubGVuZ3RoKX0pLGV9LG8uZHJhd1JvdW5kZWRSZWN0YW5nbGU9ZnVuY3Rpb24odCxlLGEsaSxuLG8pe3QuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZStvLGEpLHQubGluZVRvKGUraS1vLGEpLHQucXVhZHJhdGljQ3VydmVUbyhlK2ksYSxlK2ksYStvKSx0LmxpbmVUbyhlK2ksYStuLW8pLHQucXVhZHJhdGljQ3VydmVUbyhlK2ksYStuLGUraS1vLGErbiksdC5saW5lVG8oZStvLGErbiksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUsYStuLGUsYStuLW8pLHQubGluZVRvKGUsYStvKSx0LnF1YWRyYXRpY0N1cnZlVG8oZSxhLGUrbyxhKSx0LmNsb3NlUGF0aCgpfSxvLmNvbG9yPWZ1bmN0aW9uKGUpe3JldHVybiBpP2koZSBpbnN0YW5jZW9mIENhbnZhc0dyYWRpZW50P3QuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRDb2xvcjplKTooY29uc29sZS5lcnJvcihcIkNvbG9yLmpzIG5vdCBmb3VuZCFcIiksZSl9LG8uYWRkUmVzaXplTGlzdGVuZXI9ZnVuY3Rpb24odCxlKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO2EuY2xhc3NOYW1lPVwiY2hhcnRqcy1oaWRkZW4taWZyYW1lXCIsYS5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjA7bWFyZ2luOjA7dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7XCIsYS50YWJJbmRleD0tMTt2YXIgaT10Ll9jaGFydGpzPXtyZXNpemVyOmEsdGlja2luZzohMX0sbj1mdW5jdGlvbigpe2kudGlja2luZ3x8KGkudGlja2luZz0hMCxvLnJlcXVlc3RBbmltRnJhbWUuY2FsbCh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gaS5yZXNpemVyPyhpLnRpY2tpbmc9ITEsZSgpKTp2b2lkIDB9KSl9O28uYWRkRXZlbnQoYSxcImxvYWRcIixmdW5jdGlvbigpe28uYWRkRXZlbnQoYS5jb250ZW50V2luZG93fHxhLFwicmVzaXplXCIsbiksbigpfSksdC5pbnNlcnRCZWZvcmUoYSx0LmZpcnN0Q2hpbGQpfSxvLnJlbW92ZVJlc2l6ZUxpc3RlbmVyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX2NoYXJ0anMpe3ZhciBlPXQuX2NoYXJ0anMucmVzaXplcjtlJiYoZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLHQuX2NoYXJ0anMucmVzaXplcj1udWxsKSxkZWxldGUgdC5fY2hhcnRqc319LG8uaXNBcnJheT1BcnJheS5pc0FycmF5P2Z1bmN0aW9uKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpfTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9LG8uYXJyYXlFcXVhbHM9ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4scjtpZighdHx8IWV8fHQubGVuZ3RoIT09ZS5sZW5ndGgpcmV0dXJuITE7Zm9yKGE9MCxpPXQubGVuZ3RoO2k+YTsrK2EpaWYobj10W2FdLHI9ZVthXSxuIGluc3RhbmNlb2YgQXJyYXkmJnIgaW5zdGFuY2VvZiBBcnJheSl7aWYoIW8uYXJyYXlFcXVhbHMobixyKSlyZXR1cm4hMX1lbHNlIGlmKG4hPT1yKXJldHVybiExO3JldHVybiEwfSxvLmNhbGxDYWxsYmFjaz1mdW5jdGlvbih0LGUsYSl7dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jYWxsJiZ0LmFwcGx5KGEsZSl9LG8uZ2V0SG92ZXJDb2xvcj1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIENhbnZhc1BhdHRlcm4/dDpvLmNvbG9yKHQpLnNhdHVyYXRlKC41KS5kYXJrZW4oLjEpLnJnYlN0cmluZygpfX19LHszOjN9XSwyNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGEsaSxuLG8scixsPXQuZGF0YS5kYXRhc2V0cztmb3IoaT0wLG89bC5sZW5ndGg7bz5pOysraSlpZih0LmlzRGF0YXNldFZpc2libGUoaSkpZm9yKGE9dC5nZXREYXRhc2V0TWV0YShpKSxuPTAscj1hLmRhdGEubGVuZ3RoO3I+bjsrK24pe3ZhciBzPWEuZGF0YVtuXTtzLl92aWV3LnNraXB8fGUocyl9fWZ1bmN0aW9uIGEodCxhKXt2YXIgaT1bXTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5SYW5nZShhLngsYS55KSYmaS5wdXNoKHQpfSksaX1mdW5jdGlvbiBpKHQsYSxpLG4pe3ZhciByPU51bWJlci5QT1NJVElWRV9JTkZJTklUWSxsPVtdO3JldHVybiBufHwobj1vLmRpc3RhbmNlQmV0d2VlblBvaW50cyksZSh0LGZ1bmN0aW9uKHQpe2lmKCFpfHx0LmluUmFuZ2UoYS54LGEueSkpe3ZhciBlPXQuZ2V0Q2VudGVyUG9pbnQoKSxvPW4oYSxlKTtyPm8/KGw9W3RdLHI9byk6bz09PXImJmwucHVzaCh0KX19KSxsfWZ1bmN0aW9uIG4odCxlLG4pe3ZhciByPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hYnModC54LWUueCl9LHM9bi5pbnRlcnNlY3Q/YSh0LHIpOmkodCxyLCExLGwpLGQ9W107cmV0dXJuIHMubGVuZ3RoPyh0LmRhdGEuZGF0YXNldHMuZm9yRWFjaChmdW5jdGlvbihlLGEpe2lmKHQuaXNEYXRhc2V0VmlzaWJsZShhKSl7dmFyIGk9dC5nZXREYXRhc2V0TWV0YShhKSxuPWkuZGF0YVtzWzBdLl9pbmRleF07biYmIW4uX3ZpZXcuc2tpcCYmZC5wdXNoKG4pfX0pLGQpOltdfXZhciBvPXQuaGVscGVyczt0LkludGVyYWN0aW9uPXttb2Rlczp7c2luZ2xlOmZ1bmN0aW9uKHQsYSl7dmFyIGk9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCksbj1bXTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3JldHVybiB0LmluUmFuZ2UoaS54LGkueSk/KG4ucHVzaCh0KSxuKTp2b2lkIDB9KSxuLnNsaWNlKDAsMSl9LGxhYmVsOm4saW5kZXg6bixkYXRhc2V0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxsPW4uaW50ZXJzZWN0P2EodCxyKTppKHQsciwhMSk7cmV0dXJuIGwubGVuZ3RoPjAmJihsPXQuZ2V0RGF0YXNldE1ldGEobFswXS5fZGF0YXNldEluZGV4KS5kYXRhKSxsfSxcIngtYXhpc1wiOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4odCxlLCEwKX0scG9pbnQ6ZnVuY3Rpb24odCxlKXt2YXIgaT1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KTtyZXR1cm4gYSh0LGkpfSxuZWFyZXN0OmZ1bmN0aW9uKHQsZSxhKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxyPWkodCxuLGEuaW50ZXJzZWN0KTtyZXR1cm4gci5sZW5ndGg+MSYmci5zb3J0KGZ1bmN0aW9uKHQsZSl7dmFyIGE9dC5nZXRBcmVhKCksaT1lLmdldEFyZWEoKSxuPWEtaTtyZXR1cm4gMD09PW4mJihuPXQuX2RhdGFzZXRJbmRleC1lLl9kYXRhc2V0SW5kZXgpLG59KSxyLnNsaWNlKDAsMSl9LHg6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLHI9W10sbD0hMTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5YUmFuZ2Uobi54KSYmci5wdXNoKHQpLHQuaW5SYW5nZShuLngsbi55KSYmKGw9ITApfSksaS5pbnRlcnNlY3QmJiFsJiYocj1bXSkscn0seTpmdW5jdGlvbih0LGEsaSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCkscj1bXSxsPSExO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pbllSYW5nZShuLnkpJiZyLnB1c2godCksdC5pblJhbmdlKG4ueCxuLnkpJiYobD0hMCl9KSxpLmludGVyc2VjdCYmIWwmJihyPVtdKSxyfX19fX0se31dLDI4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gdGhpcy5jb250cm9sbGVyPW5ldyB0LkNvbnRyb2xsZXIoZSxhLHRoaXMpLHRoaXMuY29udHJvbGxlcn07cmV0dXJuIHQuZGVmYXVsdHM9e2dsb2JhbDp7cmVzcG9uc2l2ZTohMCxyZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb246MCxtYWludGFpbkFzcGVjdFJhdGlvOiEwLGV2ZW50czpbXCJtb3VzZW1vdmVcIixcIm1vdXNlb3V0XCIsXCJjbGlja1wiLFwidG91Y2hzdGFydFwiLFwidG91Y2htb3ZlXCJdLGhvdmVyOntvbkhvdmVyOm51bGwsbW9kZTpcIm5lYXJlc3RcIixpbnRlcnNlY3Q6ITAsYW5pbWF0aW9uRHVyYXRpb246NDAwfSxvbkNsaWNrOm51bGwsZGVmYXVsdENvbG9yOlwicmdiYSgwLDAsMCwwLjEpXCIsZGVmYXVsdEZvbnRDb2xvcjpcIiM2NjZcIixkZWZhdWx0Rm9udEZhbWlseTpcIidIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsZGVmYXVsdEZvbnRTaXplOjEyLGRlZmF1bHRGb250U3R5bGU6XCJub3JtYWxcIixzaG93TGluZXM6ITAsZWxlbWVudHM6e30sbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTtmb3IodmFyIGE9MDthPHQuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YSsrKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK3QuZGF0YS5kYXRhc2V0c1thXS5iYWNrZ3JvdW5kQ29sb3IrJ1wiPjwvc3Bhbj4nKSx0LmRhdGEuZGF0YXNldHNbYV0ubGFiZWwmJmUucHVzaCh0LmRhdGEuZGF0YXNldHNbYV0ubGFiZWwpLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9fX0sdC5DaGFydD10LHR9fSx7fV0sMjk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QubGF5b3V0U2VydmljZT17ZGVmYXVsdHM6e30sYWRkQm94OmZ1bmN0aW9uKHQsZSl7dC5ib3hlc3x8KHQuYm94ZXM9W10pLHQuYm94ZXMucHVzaChlKX0scmVtb3ZlQm94OmZ1bmN0aW9uKHQsZSl7dC5ib3hlcyYmdC5ib3hlcy5zcGxpY2UodC5ib3hlcy5pbmRleE9mKGUpLDEpfSx1cGRhdGU6ZnVuY3Rpb24odCxhLGkpe2Z1bmN0aW9uIG4odCl7dmFyIGUsYT10LmlzSG9yaXpvbnRhbCgpO2E/KGU9dC51cGRhdGUodC5vcHRpb25zLmZ1bGxXaWR0aD94OkMsTSksRC09ZS5oZWlnaHQpOihlPXQudXBkYXRlKHcsUyksQy09ZS53aWR0aCksSS5wdXNoKHtob3Jpem9udGFsOmEsbWluU2l6ZTplLGJveDp0fSl9ZnVuY3Rpb24gbyh0KXt2YXIgYT1lLmZpbmROZXh0V2hlcmUoSSxmdW5jdGlvbihlKXtyZXR1cm4gZS5ib3g9PT10fSk7aWYoYSlpZih0LmlzSG9yaXpvbnRhbCgpKXt2YXIgaT17bGVmdDpBLHJpZ2h0OlQsdG9wOjAsYm90dG9tOjB9O3QudXBkYXRlKHQub3B0aW9ucy5mdWxsV2lkdGg/eDpDLHkvMixpKX1lbHNlIHQudXBkYXRlKGEubWluU2l6ZS53aWR0aCxEKX1mdW5jdGlvbiByKHQpe3ZhciBhPWUuZmluZE5leHRXaGVyZShJLGZ1bmN0aW9uKGUpe3JldHVybiBlLmJveD09PXR9KSxpPXtsZWZ0OjAscmlnaHQ6MCx0b3A6UCxib3R0b206Rn07YSYmdC51cGRhdGUoYS5taW5TaXplLndpZHRoLEQsaSl9ZnVuY3Rpb24gbCh0KXt0LmlzSG9yaXpvbnRhbCgpPyh0LmxlZnQ9dC5vcHRpb25zLmZ1bGxXaWR0aD91OkEsdC5yaWdodD10Lm9wdGlvbnMuZnVsbFdpZHRoP2EtYzpBK0MsdC50b3A9TCx0LmJvdHRvbT1MK3QuaGVpZ2h0LEw9dC5ib3R0b20pOih0LmxlZnQ9Vix0LnJpZ2h0PVYrdC53aWR0aCx0LnRvcD1QLHQuYm90dG9tPVArRCxWPXQucmlnaHQpfWlmKHQpe3ZhciBzPXQub3B0aW9ucy5sYXlvdXQsZD1zP3MucGFkZGluZzpudWxsLHU9MCxjPTAsaD0wLGY9MDtpc05hTihkKT8odT1kLmxlZnR8fDAsYz1kLnJpZ2h0fHwwLGg9ZC50b3B8fDAsZj1kLmJvdHRvbXx8MCk6KHU9ZCxjPWQsaD1kLGY9ZCk7dmFyIGc9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwibGVmdFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSkscD1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJyaWdodFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksbT1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJ0b3BcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLGI9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwiYm90dG9tXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSx2PWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImNoYXJ0QXJlYVwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSk7bS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuKGUub3B0aW9ucy5mdWxsV2lkdGg/MTowKS0odC5vcHRpb25zLmZ1bGxXaWR0aD8xOjApfSksYi5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQub3B0aW9ucy5mdWxsV2lkdGg/MTowKS0oZS5vcHRpb25zLmZ1bGxXaWR0aD8xOjApfSk7dmFyIHg9YS11LWMseT1pLWgtZixrPXgvMixTPXkvMix3PShhLWspLyhnLmxlbmd0aCtwLmxlbmd0aCksTT0oaS1TKS8obS5sZW5ndGgrYi5sZW5ndGgpLEM9eCxEPXksST1bXTtlLmVhY2goZy5jb25jYXQocCxtLGIpLG4pO3ZhciBBPXUsVD1jLFA9aCxGPWY7ZS5lYWNoKGcuY29uY2F0KHApLG8pLGUuZWFjaChnLGZ1bmN0aW9uKHQpe0ErPXQud2lkdGh9KSxlLmVhY2gocCxmdW5jdGlvbih0KXtUKz10LndpZHRofSksZS5lYWNoKG0uY29uY2F0KGIpLG8pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe1ArPXQuaGVpZ2h0fSksZS5lYWNoKGIsZnVuY3Rpb24odCl7Ris9dC5oZWlnaHR9KSxlLmVhY2goZy5jb25jYXQocCksciksQT11LFQ9YyxQPWgsRj1mLGUuZWFjaChnLGZ1bmN0aW9uKHQpe0ErPXQud2lkdGh9KSxlLmVhY2gocCxmdW5jdGlvbih0KXtUKz10LndpZHRofSksZS5lYWNoKG0sZnVuY3Rpb24odCl7UCs9dC5oZWlnaHR9KSxlLmVhY2goYixmdW5jdGlvbih0KXtGKz10LmhlaWdodH0pO3ZhciBfPWktUC1GLFI9YS1BLVQ7KFIhPT1DfHxfIT09RCkmJihlLmVhY2goZyxmdW5jdGlvbih0KXt0LmhlaWdodD1ffSksZS5lYWNoKHAsZnVuY3Rpb24odCl7dC5oZWlnaHQ9X30pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe3Qub3B0aW9ucy5mdWxsV2lkdGh8fCh0LndpZHRoPVIpfSksZS5lYWNoKGIsZnVuY3Rpb24odCl7dC5vcHRpb25zLmZ1bGxXaWR0aHx8KHQud2lkdGg9Uil9KSxEPV8sQz1SKTt2YXIgVj11LEw9aDtlLmVhY2goZy5jb25jYXQobSksbCksVis9QyxMKz1ELGUuZWFjaChwLGwpLGUuZWFjaChiLGwpLHQuY2hhcnRBcmVhPXtsZWZ0OkEsdG9wOlAscmlnaHQ6QStDLGJvdHRvbTpQK0R9LGUuZWFjaCh2LGZ1bmN0aW9uKGUpe2UubGVmdD10LmNoYXJ0QXJlYS5sZWZ0LGUudG9wPXQuY2hhcnRBcmVhLnRvcCxlLnJpZ2h0PXQuY2hhcnRBcmVhLnJpZ2h0LGUuYm90dG9tPXQuY2hhcnRBcmVhLmJvdHRvbSxlLnVwZGF0ZShDLEQpfSl9fX19fSx7fV0sMzA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiB0LnVzZVBvaW50U3R5bGU/ZSpNYXRoLlNRUlQyOnQuYm94V2lkdGh9dmFyIGE9dC5oZWxwZXJzLGk9YS5ub29wO3QuZGVmYXVsdHMuZ2xvYmFsLmxlZ2VuZD17ZGlzcGxheTohMCxwb3NpdGlvbjpcInRvcFwiLGZ1bGxXaWR0aDohMCxyZXZlcnNlOiExLG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRJbmRleCxpPXRoaXMuY2hhcnQsbj1pLmdldERhdGFzZXRNZXRhKGEpO24uaGlkZGVuPW51bGw9PT1uLmhpZGRlbj8haS5kYXRhLmRhdGFzZXRzW2FdLmhpZGRlbjpudWxsLGkudXBkYXRlKCl9LG9uSG92ZXI6bnVsbCxsYWJlbHM6e2JveFdpZHRoOjQwLHBhZGRpbmc6MTAsZ2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRhO3JldHVybiBhLmlzQXJyYXkoZS5kYXRhc2V0cyk/ZS5kYXRhc2V0cy5tYXAoZnVuY3Rpb24oZSxpKXtyZXR1cm57dGV4dDplLmxhYmVsLGZpbGxTdHlsZTphLmlzQXJyYXkoZS5iYWNrZ3JvdW5kQ29sb3IpP2UuYmFja2dyb3VuZENvbG9yWzBdOmUuYmFja2dyb3VuZENvbG9yLGhpZGRlbjohdC5pc0RhdGFzZXRWaXNpYmxlKGkpLGxpbmVDYXA6ZS5ib3JkZXJDYXBTdHlsZSxsaW5lRGFzaDplLmJvcmRlckRhc2gsbGluZURhc2hPZmZzZXQ6ZS5ib3JkZXJEYXNoT2Zmc2V0LGxpbmVKb2luOmUuYm9yZGVySm9pblN0eWxlLGxpbmVXaWR0aDplLmJvcmRlcldpZHRoLHN0cm9rZVN0eWxlOmUuYm9yZGVyQ29sb3IscG9pbnRTdHlsZTplLnBvaW50U3R5bGUsZGF0YXNldEluZGV4Oml9fSx0aGlzKTpbXX19fSx0LkxlZ2VuZD10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe2EuZXh0ZW5kKHRoaXMsdCksdGhpcy5sZWdlbmRIaXRCb3hlcz1bXSx0aGlzLmRvdWdobnV0TW9kZT0hMX0sYmVmb3JlVXBkYXRlOmksdXBkYXRlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzO3JldHVybiBpLmJlZm9yZVVwZGF0ZSgpLGkubWF4V2lkdGg9dCxpLm1heEhlaWdodD1lLGkubWFyZ2lucz1hLGkuYmVmb3JlU2V0RGltZW5zaW9ucygpLGkuc2V0RGltZW5zaW9ucygpLGkuYWZ0ZXJTZXREaW1lbnNpb25zKCksaS5iZWZvcmVCdWlsZExhYmVscygpLGkuYnVpbGRMYWJlbHMoKSxpLmFmdGVyQnVpbGRMYWJlbHMoKSxpLmJlZm9yZUZpdCgpLGkuZml0KCksaS5hZnRlckZpdCgpLGkuYWZ0ZXJVcGRhdGUoKSxpLm1pblNpemV9LGFmdGVyVXBkYXRlOmksYmVmb3JlU2V0RGltZW5zaW9uczppLHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MCx0Lm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9fSxhZnRlclNldERpbWVuc2lvbnM6aSxiZWZvcmVCdWlsZExhYmVsczppLGJ1aWxkTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxlZ2VuZEl0ZW1zPXQub3B0aW9ucy5sYWJlbHMuZ2VuZXJhdGVMYWJlbHMuY2FsbCh0LHQuY2hhcnQpLHQub3B0aW9ucy5yZXZlcnNlJiZ0LmxlZ2VuZEl0ZW1zLnJldmVyc2UoKX0sYWZ0ZXJCdWlsZExhYmVsczppLGJlZm9yZUZpdDppLGZpdDpmdW5jdGlvbigpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnMsbz1uLmxhYmVscyxyPW4uZGlzcGxheSxsPWkuY3R4LHM9dC5kZWZhdWx0cy5nbG9iYWwsZD1hLmdldFZhbHVlT3JEZWZhdWx0LHU9ZChvLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxjPWQoby5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSxoPWQoby5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLGY9YS5mb250U3RyaW5nKHUsYyxoKSxnPWkubGVnZW5kSGl0Qm94ZXM9W10scD1pLm1pblNpemUsbT1pLmlzSG9yaXpvbnRhbCgpO2lmKG0/KHAud2lkdGg9aS5tYXhXaWR0aCxwLmhlaWdodD1yPzEwOjApOihwLndpZHRoPXI/MTA6MCxwLmhlaWdodD1pLm1heEhlaWdodCkscilpZihsLmZvbnQ9ZixtKXt2YXIgYj1pLmxpbmVXaWR0aHM9WzBdLHY9aS5sZWdlbmRJdGVtcy5sZW5ndGg/dStvLnBhZGRpbmc6MDtsLnRleHRBbGlnbj1cImxlZnRcIixsLnRleHRCYXNlbGluZT1cInRvcFwiLGEuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsYSl7dmFyIG49ZShvLHUpLHI9bit1LzIrbC5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoO2JbYi5sZW5ndGgtMV0rcitvLnBhZGRpbmc+PWkud2lkdGgmJih2Kz11K28ucGFkZGluZyxiW2IubGVuZ3RoXT1pLmxlZnQpLGdbYV09e2xlZnQ6MCx0b3A6MCx3aWR0aDpyLGhlaWdodDp1fSxiW2IubGVuZ3RoLTFdKz1yK28ucGFkZGluZ30pLHAuaGVpZ2h0Kz12fWVsc2V7dmFyIHg9by5wYWRkaW5nLHk9aS5jb2x1bW5XaWR0aHM9W10saz1vLnBhZGRpbmcsUz0wLHc9MCxNPXUreDthLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGEpe3ZhciBpPWUobyx1KSxuPWkrdS8yK2wubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aDt3K00+cC5oZWlnaHQmJihrKz1TK28ucGFkZGluZyx5LnB1c2goUyksUz0wLHc9MCksUz1NYXRoLm1heChTLG4pLHcrPU0sZ1thXT17bGVmdDowLHRvcDowLHdpZHRoOm4saGVpZ2h0OnV9fSksays9Uyx5LnB1c2goUykscC53aWR0aCs9a31pLndpZHRoPXAud2lkdGgsaS5oZWlnaHQ9cC5oZWlnaHR9LGFmdGVyRml0OmksaXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJ0b3BcIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbn0sZHJhdzpmdW5jdGlvbigpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnMsbz1uLmxhYmVscyxyPXQuZGVmYXVsdHMuZ2xvYmFsLGw9ci5lbGVtZW50cy5saW5lLHM9aS53aWR0aCxkPWkubGluZVdpZHRocztpZihuLmRpc3BsYXkpe3ZhciB1LGM9aS5jdHgsaD1hLmdldFZhbHVlT3JEZWZhdWx0LGY9aChvLmZvbnRDb2xvcixyLmRlZmF1bHRGb250Q29sb3IpLGc9aChvLmZvbnRTaXplLHIuZGVmYXVsdEZvbnRTaXplKSxwPWgoby5mb250U3R5bGUsci5kZWZhdWx0Rm9udFN0eWxlKSxtPWgoby5mb250RmFtaWx5LHIuZGVmYXVsdEZvbnRGYW1pbHkpLGI9YS5mb250U3RyaW5nKGcscCxtKTtjLnRleHRBbGlnbj1cImxlZnRcIixjLnRleHRCYXNlbGluZT1cInRvcFwiLGMubGluZVdpZHRoPS41LGMuc3Ryb2tlU3R5bGU9ZixjLmZpbGxTdHlsZT1mLGMuZm9udD1iO3ZhciB2PWUobyxnKSx4PWkubGVnZW5kSGl0Qm94ZXMseT1mdW5jdGlvbihlLGEsaSl7aWYoIShpc05hTih2KXx8MD49dikpe2Muc2F2ZSgpLGMuZmlsbFN0eWxlPWgoaS5maWxsU3R5bGUsci5kZWZhdWx0Q29sb3IpLGMubGluZUNhcD1oKGkubGluZUNhcCxsLmJvcmRlckNhcFN0eWxlKSxjLmxpbmVEYXNoT2Zmc2V0PWgoaS5saW5lRGFzaE9mZnNldCxsLmJvcmRlckRhc2hPZmZzZXQpLGMubGluZUpvaW49aChpLmxpbmVKb2luLGwuYm9yZGVySm9pblN0eWxlKSxjLmxpbmVXaWR0aD1oKGkubGluZVdpZHRoLGwuYm9yZGVyV2lkdGgpLGMuc3Ryb2tlU3R5bGU9aChpLnN0cm9rZVN0eWxlLHIuZGVmYXVsdENvbG9yKTt2YXIgbz0wPT09aChpLmxpbmVXaWR0aCxsLmJvcmRlcldpZHRoKTtpZihjLnNldExpbmVEYXNoJiZjLnNldExpbmVEYXNoKGgoaS5saW5lRGFzaCxsLmJvcmRlckRhc2gpKSxuLmxhYmVscyYmbi5sYWJlbHMudXNlUG9pbnRTdHlsZSl7dmFyIHM9ZypNYXRoLlNRUlQyLzIsZD1zL01hdGguU1FSVDIsdT1lK2QsZj1hK2Q7dC5jYW52YXNIZWxwZXJzLmRyYXdQb2ludChjLGkucG9pbnRTdHlsZSxzLHUsZil9ZWxzZSBvfHxjLnN0cm9rZVJlY3QoZSxhLHYsZyksYy5maWxsUmVjdChlLGEsdixnKTtjLnJlc3RvcmUoKX19LGs9ZnVuY3Rpb24odCxlLGEsaSl7Yy5maWxsVGV4dChhLnRleHQsditnLzIrdCxlKSxhLmhpZGRlbiYmKGMuYmVnaW5QYXRoKCksYy5saW5lV2lkdGg9MixjLm1vdmVUbyh2K2cvMit0LGUrZy8yKSxjLmxpbmVUbyh2K2cvMit0K2ksZStnLzIpLGMuc3Ryb2tlKCkpfSxTPWkuaXNIb3Jpem9udGFsKCk7dT1TP3t4OmkubGVmdCsocy1kWzBdKS8yLHk6aS50b3Arby5wYWRkaW5nLGxpbmU6MH06e3g6aS5sZWZ0K28ucGFkZGluZyx5OmkudG9wK28ucGFkZGluZyxsaW5lOjB9O3ZhciB3PWcrby5wYWRkaW5nO2EuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsZSl7dmFyIGE9Yy5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoLG49ditnLzIrYSxyPXUueCxsPXUueTtTP3Irbj49cyYmKGw9dS55Kz13LHUubGluZSsrLHI9dS54PWkubGVmdCsocy1kW3UubGluZV0pLzIpOmwrdz5pLmJvdHRvbSYmKHI9dS54PXIraS5jb2x1bW5XaWR0aHNbdS5saW5lXStvLnBhZGRpbmcsbD11Lnk9aS50b3AsdS5saW5lKyspLHkocixsLHQpLHhbZV0ubGVmdD1yLHhbZV0udG9wPWwsayhyLGwsdCxhKSxTP3UueCs9bitvLnBhZGRpbmc6dS55Kz13fSl9fSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9ZS5vcHRpb25zLG49XCJtb3VzZXVwXCI9PT10LnR5cGU/XCJjbGlja1wiOnQudHlwZSxvPSExO2lmKFwibW91c2Vtb3ZlXCI9PT1uKXtpZighaS5vbkhvdmVyKXJldHVybn1lbHNle2lmKFwiY2xpY2tcIiE9PW4pcmV0dXJuO2lmKCFpLm9uQ2xpY2spcmV0dXJufXZhciByPWEuZ2V0UmVsYXRpdmVQb3NpdGlvbih0LGUuY2hhcnQuY2hhcnQpLGw9ci54LHM9ci55O2lmKGw+PWUubGVmdCYmbDw9ZS5yaWdodCYmcz49ZS50b3AmJnM8PWUuYm90dG9tKWZvcih2YXIgZD1lLmxlZ2VuZEhpdEJveGVzLHU9MDt1PGQubGVuZ3RoOysrdSl7dmFyIGM9ZFt1XTtpZihsPj1jLmxlZnQmJmw8PWMubGVmdCtjLndpZHRoJiZzPj1jLnRvcCYmczw9Yy50b3ArYy5oZWlnaHQpe2lmKFwiY2xpY2tcIj09PW4pe2kub25DbGljay5jYWxsKGUsdCxlLmxlZ2VuZEl0ZW1zW3VdKSxvPSEwO2JyZWFrfWlmKFwibW91c2Vtb3ZlXCI9PT1uKXtpLm9uSG92ZXIuY2FsbChlLHQsZS5sZWdlbmRJdGVtc1t1XSksbz0hMDticmVha319fXJldHVybiBvfX0pLHQucGx1Z2lucy5yZWdpc3Rlcih7YmVmb3JlSW5pdDpmdW5jdGlvbihlKXt2YXIgYT1lLm9wdGlvbnMsaT1hLmxlZ2VuZDtpJiYoZS5sZWdlbmQ9bmV3IHQuTGVnZW5kKHtjdHg6ZS5jaGFydC5jdHgsb3B0aW9uczppLGNoYXJ0OmV9KSx0LmxheW91dFNlcnZpY2UuYWRkQm94KGUsZS5sZWdlbmQpKX19KX19LHt9XSwzMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMubm9vcDt0LnBsdWdpbnM9e19wbHVnaW5zOltdLHJlZ2lzdGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3BsdWdpbnM7W10uY29uY2F0KHQpLmZvckVhY2goZnVuY3Rpb24odCl7LTE9PT1lLmluZGV4T2YodCkmJmUucHVzaCh0KX0pfSx1bnJlZ2lzdGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3BsdWdpbnM7W10uY29uY2F0KHQpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGE9ZS5pbmRleE9mKHQpOy0xIT09YSYmZS5zcGxpY2UoYSwxKX0pfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMuX3BsdWdpbnM9W119LGNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BsdWdpbnMubGVuZ3RofSxnZXRBbGw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGx1Z2luc30sbm90aWZ5OmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuPXRoaXMuX3BsdWdpbnMsbz1uLmxlbmd0aDtcclxuZm9yKGE9MDtvPmE7KythKWlmKGk9blthXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpW3RdJiZpW3RdLmFwcGx5KGksZXx8W10pPT09ITEpcmV0dXJuITE7cmV0dXJuITB9fSx0LlBsdWdpbkJhc2U9dC5FbGVtZW50LmV4dGVuZCh7YmVmb3JlSW5pdDplLGFmdGVySW5pdDplLGJlZm9yZVVwZGF0ZTplLGFmdGVyVXBkYXRlOmUsYmVmb3JlRHJhdzplLGFmdGVyRHJhdzplLGRlc3Ryb3k6ZX0pLHQucGx1Z2luU2VydmljZT10LnBsdWdpbnN9fSx7fV0sMzI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuc2NhbGU9e2Rpc3BsYXk6ITAscG9zaXRpb246XCJsZWZ0XCIsZ3JpZExpbmVzOntkaXNwbGF5OiEwLGNvbG9yOlwicmdiYSgwLCAwLCAwLCAwLjEpXCIsbGluZVdpZHRoOjEsZHJhd0JvcmRlcjohMCxkcmF3T25DaGFydEFyZWE6ITAsZHJhd1RpY2tzOiEwLHRpY2tNYXJrTGVuZ3RoOjEwLHplcm9MaW5lV2lkdGg6MSx6ZXJvTGluZUNvbG9yOlwicmdiYSgwLDAsMCwwLjI1KVwiLG9mZnNldEdyaWRMaW5lczohMSxib3JkZXJEYXNoOltdLGJvcmRlckRhc2hPZmZzZXQ6MH0sc2NhbGVMYWJlbDp7bGFiZWxTdHJpbmc6XCJcIixkaXNwbGF5OiExfSx0aWNrczp7YmVnaW5BdFplcm86ITEsbWluUm90YXRpb246MCxtYXhSb3RhdGlvbjo1MCxtaXJyb3I6ITEscGFkZGluZzoxMCxyZXZlcnNlOiExLGRpc3BsYXk6ITAsYXV0b1NraXA6ITAsYXV0b1NraXBQYWRkaW5nOjAsbGFiZWxPZmZzZXQ6MCxjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMudmFsdWVzfX0sdC5TY2FsZT10LkVsZW1lbnQuZXh0ZW5kKHtiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlLFt0aGlzXSl9LHVwZGF0ZTpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcztyZXR1cm4gbi5iZWZvcmVVcGRhdGUoKSxuLm1heFdpZHRoPXQsbi5tYXhIZWlnaHQ9YSxuLm1hcmdpbnM9ZS5leHRlbmQoe2xlZnQ6MCxyaWdodDowLHRvcDowLGJvdHRvbTowfSxpKSxuLmJlZm9yZVNldERpbWVuc2lvbnMoKSxuLnNldERpbWVuc2lvbnMoKSxuLmFmdGVyU2V0RGltZW5zaW9ucygpLG4uYmVmb3JlRGF0YUxpbWl0cygpLG4uZGV0ZXJtaW5lRGF0YUxpbWl0cygpLG4uYWZ0ZXJEYXRhTGltaXRzKCksbi5iZWZvcmVCdWlsZFRpY2tzKCksbi5idWlsZFRpY2tzKCksbi5hZnRlckJ1aWxkVGlja3MoKSxuLmJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbigpLG4uY29udmVydFRpY2tzVG9MYWJlbHMoKSxuLmFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uKCksbi5iZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmJlZm9yZUZpdCgpLG4uZml0KCksbi5hZnRlckZpdCgpLG4uYWZ0ZXJVcGRhdGUoKSxuLm1pblNpemV9LGFmdGVyVXBkYXRlOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyVXBkYXRlLFt0aGlzXSl9LGJlZm9yZVNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlU2V0RGltZW5zaW9ucyxbdGhpc10pfSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTB9LGFmdGVyU2V0RGltZW5zaW9uczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclNldERpbWVuc2lvbnMsW3RoaXNdKX0sYmVmb3JlRGF0YUxpbWl0czpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVEYXRhTGltaXRzLFt0aGlzXSl9LGRldGVybWluZURhdGFMaW1pdHM6ZS5ub29wLGFmdGVyRGF0YUxpbWl0czpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckRhdGFMaW1pdHMsW3RoaXNdKX0sYmVmb3JlQnVpbGRUaWNrczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVCdWlsZFRpY2tzLFt0aGlzXSl9LGJ1aWxkVGlja3M6ZS5ub29wLGFmdGVyQnVpbGRUaWNrczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckJ1aWxkVGlja3MsW3RoaXNdKX0sYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbixbdGhpc10pfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm9wdGlvbnMudGlja3M7dC50aWNrcz10LnRpY2tzLm1hcChlLnVzZXJDYWxsYmFja3x8ZS5jYWxsYmFjayl9LGFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uLFt0aGlzXSl9LGJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb24sW3RoaXNdKX0sY2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEuY3R4LG49dC5kZWZhdWx0cy5nbG9iYWwsbz1hLm9wdGlvbnMudGlja3Mscj1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udFNpemUsbi5kZWZhdWx0Rm9udFNpemUpLGw9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRTdHlsZSxuLmRlZmF1bHRGb250U3R5bGUpLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRGYW1pbHksbi5kZWZhdWx0Rm9udEZhbWlseSksZD1lLmZvbnRTdHJpbmcocixsLHMpO2kuZm9udD1kO3ZhciB1LGM9aS5tZWFzdXJlVGV4dChhLnRpY2tzWzBdKS53aWR0aCxoPWkubWVhc3VyZVRleHQoYS50aWNrc1thLnRpY2tzLmxlbmd0aC0xXSkud2lkdGg7aWYoYS5sYWJlbFJvdGF0aW9uPW8ubWluUm90YXRpb258fDAsYS5wYWRkaW5nUmlnaHQ9MCxhLnBhZGRpbmdMZWZ0PTAsYS5vcHRpb25zLmRpc3BsYXkmJmEuaXNIb3Jpem9udGFsKCkpe2EucGFkZGluZ1JpZ2h0PWgvMiszLGEucGFkZGluZ0xlZnQ9Yy8yKzMsYS5sb25nZXN0VGV4dENhY2hlfHwoYS5sb25nZXN0VGV4dENhY2hlPXt9KTtmb3IodmFyIGYsZyxwPWUubG9uZ2VzdFRleHQoaSxkLGEudGlja3MsYS5sb25nZXN0VGV4dENhY2hlKSxtPXAsYj1hLmdldFBpeGVsRm9yVGljaygxKS1hLmdldFBpeGVsRm9yVGljaygwKS02O20+YiYmYS5sYWJlbFJvdGF0aW9uPG8ubWF4Um90YXRpb247KXtpZihmPU1hdGguY29zKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLGc9TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksdT1mKmMsdStyLzI+YS55TGFiZWxXaWR0aCYmKGEucGFkZGluZ0xlZnQ9dStyLzIpLGEucGFkZGluZ1JpZ2h0PXIvMixnKnA+YS5tYXhIZWlnaHQpe2EubGFiZWxSb3RhdGlvbi0tO2JyZWFrfWEubGFiZWxSb3RhdGlvbisrLG09ZipwfX1hLm1hcmdpbnMmJihhLnBhZGRpbmdMZWZ0PU1hdGgubWF4KGEucGFkZGluZ0xlZnQtYS5tYXJnaW5zLmxlZnQsMCksYS5wYWRkaW5nUmlnaHQ9TWF0aC5tYXgoYS5wYWRkaW5nUmlnaHQtYS5tYXJnaW5zLnJpZ2h0LDApKX0sYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb24sW3RoaXNdKX0sYmVmb3JlRml0OmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUZpdCxbdGhpc10pfSxmaXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfSxuPWEub3B0aW9ucyxvPXQuZGVmYXVsdHMuZ2xvYmFsLHI9bi50aWNrcyxsPW4uc2NhbGVMYWJlbCxzPW4uZ3JpZExpbmVzLGQ9bi5kaXNwbGF5LHU9YS5pc0hvcml6b250YWwoKSxjPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSksaD1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udFN0eWxlLG8uZGVmYXVsdEZvbnRTdHlsZSksZj1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udEZhbWlseSxvLmRlZmF1bHRGb250RmFtaWx5KSxnPWUuZm9udFN0cmluZyhjLGgsZikscD1lLmdldFZhbHVlT3JEZWZhdWx0KGwuZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLG09bi5ncmlkTGluZXMudGlja01hcmtMZW5ndGg7aWYodT9pLndpZHRoPWEuaXNGdWxsV2lkdGgoKT9hLm1heFdpZHRoLWEubWFyZ2lucy5sZWZ0LWEubWFyZ2lucy5yaWdodDphLm1heFdpZHRoOmkud2lkdGg9ZCYmcy5kcmF3VGlja3M/bTowLHU/aS5oZWlnaHQ9ZCYmcy5kcmF3VGlja3M/bTowOmkuaGVpZ2h0PWEubWF4SGVpZ2h0LGwuZGlzcGxheSYmZCYmKHU/aS5oZWlnaHQrPTEuNSpwOmkud2lkdGgrPTEuNSpwKSxyLmRpc3BsYXkmJmQpe2EubG9uZ2VzdFRleHRDYWNoZXx8KGEubG9uZ2VzdFRleHRDYWNoZT17fSk7dmFyIGI9ZS5sb25nZXN0VGV4dChhLmN0eCxnLGEudGlja3MsYS5sb25nZXN0VGV4dENhY2hlKSx2PWUubnVtYmVyT2ZMYWJlbExpbmVzKGEudGlja3MpLHg9LjUqYztpZih1KXthLmxvbmdlc3RMYWJlbFdpZHRoPWI7dmFyIHk9TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSkqYS5sb25nZXN0TGFiZWxXaWR0aCtjKnYreCp2O2kuaGVpZ2h0PU1hdGgubWluKGEubWF4SGVpZ2h0LGkuaGVpZ2h0K3kpLGEuY3R4LmZvbnQ9Zzt2YXIgaz1hLmN0eC5tZWFzdXJlVGV4dChhLnRpY2tzWzBdKS53aWR0aCxTPWEuY3R4Lm1lYXN1cmVUZXh0KGEudGlja3NbYS50aWNrcy5sZW5ndGgtMV0pLndpZHRoLHc9TWF0aC5jb3MoZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksTT1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKTthLnBhZGRpbmdMZWZ0PTAhPT1hLmxhYmVsUm90YXRpb24/dyprKzM6ay8yKzMsYS5wYWRkaW5nUmlnaHQ9MCE9PWEubGFiZWxSb3RhdGlvbj9NKihjLzIpKzM6Uy8yKzN9ZWxzZXt2YXIgQz1hLm1heFdpZHRoLWkud2lkdGgsRD1yLm1pcnJvcjtEP2I9MDpiKz1hLm9wdGlvbnMudGlja3MucGFkZGluZyxDPmI/aS53aWR0aCs9YjppLndpZHRoPWEubWF4V2lkdGgsYS5wYWRkaW5nVG9wPWMvMixhLnBhZGRpbmdCb3R0b209Yy8yfX1hLm1hcmdpbnMmJihhLnBhZGRpbmdMZWZ0PU1hdGgubWF4KGEucGFkZGluZ0xlZnQtYS5tYXJnaW5zLmxlZnQsMCksYS5wYWRkaW5nVG9wPU1hdGgubWF4KGEucGFkZGluZ1RvcC1hLm1hcmdpbnMudG9wLDApLGEucGFkZGluZ1JpZ2h0PU1hdGgubWF4KGEucGFkZGluZ1JpZ2h0LWEubWFyZ2lucy5yaWdodCwwKSxhLnBhZGRpbmdCb3R0b209TWF0aC5tYXgoYS5wYWRkaW5nQm90dG9tLWEubWFyZ2lucy5ib3R0b20sMCkpLGEud2lkdGg9aS53aWR0aCxhLmhlaWdodD1pLmhlaWdodH0sYWZ0ZXJGaXQ6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJGaXQsW3RoaXNdKX0saXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJ0b3BcIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbn0saXNGdWxsV2lkdGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmZ1bGxXaWR0aH0sZ2V0UmlnaHRWYWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXR8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P05hTjpcIm51bWJlclwiIT10eXBlb2YgdHx8aXNGaW5pdGUodCk/XCJvYmplY3RcIj09dHlwZW9mIHQ/dCBpbnN0YW5jZW9mIERhdGV8fHQuaXNWYWxpZD90OnRoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmlzSG9yaXpvbnRhbCgpP3QueDp0LnkpOnQ6TmFOfSxnZXRMYWJlbEZvckluZGV4OmUubm9vcCxnZXRQaXhlbEZvclZhbHVlOmUubm9vcCxnZXRWYWx1ZUZvclBpeGVsOmUubm9vcCxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2lmKGEuaXNIb3Jpem9udGFsKCkpe3ZhciBpPWEud2lkdGgtKGEucGFkZGluZ0xlZnQrYS5wYWRkaW5nUmlnaHQpLG49aS9NYXRoLm1heChhLnRpY2tzLmxlbmd0aC0oYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKSxvPW4qdCthLnBhZGRpbmdMZWZ0O2UmJihvKz1uLzIpO3ZhciByPWEubGVmdCtNYXRoLnJvdW5kKG8pO3JldHVybiByKz1hLmlzRnVsbFdpZHRoKCk/YS5tYXJnaW5zLmxlZnQ6MH12YXIgbD1hLmhlaWdodC0oYS5wYWRkaW5nVG9wK2EucGFkZGluZ0JvdHRvbSk7cmV0dXJuIGEudG9wK3QqKGwvKGEudGlja3MubGVuZ3RoLTEpKX0sZ2V0UGl4ZWxGb3JEZWNpbWFsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoZS5pc0hvcml6b250YWwoKSl7dmFyIGE9ZS53aWR0aC0oZS5wYWRkaW5nTGVmdCtlLnBhZGRpbmdSaWdodCksaT1hKnQrZS5wYWRkaW5nTGVmdCxuPWUubGVmdCtNYXRoLnJvdW5kKGkpO3JldHVybiBuKz1lLmlzRnVsbFdpZHRoKCk/ZS5tYXJnaW5zLmxlZnQ6MH1yZXR1cm4gZS50b3ArdCplLmhlaWdodH0sZ2V0QmFzZVBpeGVsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQubWluLGE9dC5tYXg7cmV0dXJuIHQuZ2V0UGl4ZWxGb3JWYWx1ZSh0LmJlZ2luQXRaZXJvPzA6MD5lJiYwPmE/YTplPjAmJmE+MD9lOjApfSxkcmF3OmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnM7aWYobi5kaXNwbGF5KXt2YXIgbyxyLGw9aS5jdHgscz10LmRlZmF1bHRzLmdsb2JhbCxkPW4udGlja3MsdT1uLmdyaWRMaW5lcyxjPW4uc2NhbGVMYWJlbCxoPTAhPT1pLmxhYmVsUm90YXRpb24sZj1kLmF1dG9Ta2lwLGc9aS5pc0hvcml6b250YWwoKTtkLm1heFRpY2tzTGltaXQmJihyPWQubWF4VGlja3NMaW1pdCk7dmFyIHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRDb2xvcixzLmRlZmF1bHRGb250Q29sb3IpLG09ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxiPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSx2PWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLHg9ZS5mb250U3RyaW5nKG0sYix2KSx5PXUudGlja01hcmtMZW5ndGgsaz1lLmdldFZhbHVlT3JEZWZhdWx0KHUuYm9yZGVyRGFzaCxzLmJvcmRlckRhc2gpLFM9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh1LmJvcmRlckRhc2hPZmZzZXQscy5ib3JkZXJEYXNoT2Zmc2V0KSx3PWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250Q29sb3Iscy5kZWZhdWx0Rm9udENvbG9yKSxNPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksQz1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksRD1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSxJPWUuZm9udFN0cmluZyhNLEMsRCksQT1lLnRvUmFkaWFucyhpLmxhYmVsUm90YXRpb24pLFQ9TWF0aC5jb3MoQSksUD1pLmxvbmdlc3RMYWJlbFdpZHRoKlQ7bC5maWxsU3R5bGU9cDt2YXIgRj1bXTtpZihnKXtpZihvPSExLGgmJihQLz0yKSwoUCtkLmF1dG9Ta2lwUGFkZGluZykqaS50aWNrcy5sZW5ndGg+aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCkmJihvPTErTWF0aC5mbG9vcigoUCtkLmF1dG9Ta2lwUGFkZGluZykqaS50aWNrcy5sZW5ndGgvKGkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpKSkpLHImJmkudGlja3MubGVuZ3RoPnIpZm9yKDshb3x8aS50aWNrcy5sZW5ndGgvKG98fDEpPnI7KW98fChvPTEpLG8rPTE7Znx8KG89ITEpfXZhciBfPVwicmlnaHRcIj09PW4ucG9zaXRpb24/aS5sZWZ0OmkucmlnaHQteSxSPVwicmlnaHRcIj09PW4ucG9zaXRpb24/aS5sZWZ0K3k6aS5yaWdodCxWPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kudG9wOmkuYm90dG9tLXksTD1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLnRvcCt5OmkuYm90dG9tO2lmKGUuZWFjaChpLnRpY2tzLGZ1bmN0aW9uKHQscil7aWYodm9pZCAwIT09dCYmbnVsbCE9PXQpe3ZhciBsPWkudGlja3MubGVuZ3RoPT09cisxLHM9bz4xJiZyJW8+MHx8ciVvPT09MCYmcitvPj1pLnRpY2tzLmxlbmd0aDtpZigoIXN8fGwpJiZ2b2lkIDAhPT10JiZudWxsIT09dCl7dmFyIGMsZjtyPT09KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnplcm9MaW5lSW5kZXg/aS56ZXJvTGluZUluZGV4OjApPyhjPXUuemVyb0xpbmVXaWR0aCxmPXUuemVyb0xpbmVDb2xvcik6KGM9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5saW5lV2lkdGgsciksZj1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmNvbG9yLHIpKTt2YXIgcCxtLGIsdix4LHcsTSxDLEQsSSxUPVwibWlkZGxlXCIsUD1cIm1pZGRsZVwiO2lmKGcpe2h8fChQPVwidG9wXCI9PT1uLnBvc2l0aW9uP1wiYm90dG9tXCI6XCJ0b3BcIiksVD1oP1wicmlnaHRcIjpcImNlbnRlclwiO3ZhciBPPWkuZ2V0UGl4ZWxGb3JUaWNrKHIpK2UuYWxpYXNQaXhlbChjKTtEPWkuZ2V0UGl4ZWxGb3JUaWNrKHIsdS5vZmZzZXRHcmlkTGluZXMpK2QubGFiZWxPZmZzZXQsST1oP2kudG9wKzEyOlwidG9wXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tLXk6aS50b3AreSxwPWI9eD1NPU8sbT1WLHY9TCx3PWEudG9wLEM9YS5ib3R0b219ZWxzZXtcImxlZnRcIj09PW4ucG9zaXRpb24/ZC5taXJyb3I/KEQ9aS5yaWdodCtkLnBhZGRpbmcsVD1cImxlZnRcIik6KEQ9aS5yaWdodC1kLnBhZGRpbmcsVD1cInJpZ2h0XCIpOmQubWlycm9yPyhEPWkubGVmdC1kLnBhZGRpbmcsVD1cInJpZ2h0XCIpOihEPWkubGVmdCtkLnBhZGRpbmcsVD1cImxlZnRcIik7dmFyIEI9aS5nZXRQaXhlbEZvclRpY2socik7Qis9ZS5hbGlhc1BpeGVsKGMpLEk9aS5nZXRQaXhlbEZvclRpY2socix1Lm9mZnNldEdyaWRMaW5lcykscD1fLGI9Uix4PWEubGVmdCxNPWEucmlnaHQsbT12PXc9Qz1CfUYucHVzaCh7dHgxOnAsdHkxOm0sdHgyOmIsdHkyOnYseDE6eCx5MTp3LHgyOk0seTI6QyxsYWJlbFg6RCxsYWJlbFk6SSxnbFdpZHRoOmMsZ2xDb2xvcjpmLGdsQm9yZGVyRGFzaDprLGdsQm9yZGVyRGFzaE9mZnNldDpTLHJvdGF0aW9uOi0xKkEsbGFiZWw6dCx0ZXh0QmFzZWxpbmU6UCx0ZXh0QWxpZ246VH0pfX19KSxlLmVhY2goRixmdW5jdGlvbih0KXtpZih1LmRpc3BsYXkmJihsLnNhdmUoKSxsLmxpbmVXaWR0aD10LmdsV2lkdGgsbC5zdHJva2VTdHlsZT10LmdsQ29sb3IsbC5zZXRMaW5lRGFzaCYmKGwuc2V0TGluZURhc2godC5nbEJvcmRlckRhc2gpLGwubGluZURhc2hPZmZzZXQ9dC5nbEJvcmRlckRhc2hPZmZzZXQpLGwuYmVnaW5QYXRoKCksdS5kcmF3VGlja3MmJihsLm1vdmVUbyh0LnR4MSx0LnR5MSksbC5saW5lVG8odC50eDIsdC50eTIpKSx1LmRyYXdPbkNoYXJ0QXJlYSYmKGwubW92ZVRvKHQueDEsdC55MSksbC5saW5lVG8odC54Mix0LnkyKSksbC5zdHJva2UoKSxsLnJlc3RvcmUoKSksZC5kaXNwbGF5KXtsLnNhdmUoKSxsLnRyYW5zbGF0ZSh0LmxhYmVsWCx0LmxhYmVsWSksbC5yb3RhdGUodC5yb3RhdGlvbiksbC5mb250PXgsbC50ZXh0QmFzZWxpbmU9dC50ZXh0QmFzZWxpbmUsbC50ZXh0QWxpZ249dC50ZXh0QWxpZ247dmFyIGE9dC5sYWJlbDtpZihlLmlzQXJyYXkoYSkpZm9yKHZhciBpPTAsbj0tKGEubGVuZ3RoLTEpKm0qLjc1O2k8YS5sZW5ndGg7KytpKWwuZmlsbFRleHQoXCJcIithW2ldLDAsbiksbis9MS41Km07ZWxzZSBsLmZpbGxUZXh0KGEsMCwwKTtsLnJlc3RvcmUoKX19KSxjLmRpc3BsYXkpe3ZhciBPLEIsVz0wO2lmKGcpTz1pLmxlZnQrKGkucmlnaHQtaS5sZWZ0KS8yLEI9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS5ib3R0b20tTS8yOmkudG9wK00vMjtlbHNle3ZhciB6PVwibGVmdFwiPT09bi5wb3NpdGlvbjtPPXo/aS5sZWZ0K00vMjppLnJpZ2h0LU0vMixCPWkudG9wKyhpLmJvdHRvbS1pLnRvcCkvMixXPXo/LS41Kk1hdGguUEk6LjUqTWF0aC5QSX1sLnNhdmUoKSxsLnRyYW5zbGF0ZShPLEIpLGwucm90YXRlKFcpLGwudGV4dEFsaWduPVwiY2VudGVyXCIsbC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixsLmZpbGxTdHlsZT13LGwuZm9udD1JLGwuZmlsbFRleHQoYy5sYWJlbFN0cmluZywwLDApLGwucmVzdG9yZSgpfWlmKHUuZHJhd0JvcmRlcil7bC5saW5lV2lkdGg9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5saW5lV2lkdGgsMCksbC5zdHJva2VTdHlsZT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmNvbG9yLDApO3ZhciBOPWkubGVmdCxFPWkucmlnaHQsSD1pLnRvcCxVPWkuYm90dG9tLGo9ZS5hbGlhc1BpeGVsKGwubGluZVdpZHRoKTtnPyhIPVU9XCJ0b3BcIj09PW4ucG9zaXRpb24/aS5ib3R0b206aS50b3AsSCs9aixVKz1qKTooTj1FPVwibGVmdFwiPT09bi5wb3NpdGlvbj9pLnJpZ2h0OmkubGVmdCxOKz1qLEUrPWopLGwuYmVnaW5QYXRoKCksbC5tb3ZlVG8oTixIKSxsLmxpbmVUbyhFLFUpLGwuc3Ryb2tlKCl9fX19KX19LHt9XSwzMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5zY2FsZVNlcnZpY2U9e2NvbnN0cnVjdG9yczp7fSxkZWZhdWx0czp7fSxyZWdpc3RlclNjYWxlVHlwZTpmdW5jdGlvbih0LGEsaSl7dGhpcy5jb25zdHJ1Y3RvcnNbdF09YSx0aGlzLmRlZmF1bHRzW3RdPWUuY2xvbmUoaSl9LGdldFNjYWxlQ29uc3RydWN0b3I6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KHQpP3RoaXMuY29uc3RydWN0b3JzW3RdOnZvaWQgMH0sZ2V0U2NhbGVEZWZhdWx0czpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShhKT9lLnNjYWxlTWVyZ2UodC5kZWZhdWx0cy5zY2FsZSx0aGlzLmRlZmF1bHRzW2FdKTp7fX0sdXBkYXRlU2NhbGVEZWZhdWx0czpmdW5jdGlvbih0LGEpe3ZhciBpPXRoaXMuZGVmYXVsdHM7aS5oYXNPd25Qcm9wZXJ0eSh0KSYmKGlbdF09ZS5leHRlbmQoaVt0XSxhKSl9LGFkZFNjYWxlc1RvTGF5b3V0OmZ1bmN0aW9uKGEpe2UuZWFjaChhLnNjYWxlcyxmdW5jdGlvbihlKXt0LmxheW91dFNlcnZpY2UuYWRkQm94KGEsZSl9KX19fX0se31dLDM0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LlRpY2tzPXtnZW5lcmF0b3JzOntsaW5lYXI6ZnVuY3Rpb24odCxhKXt2YXIgaSxuPVtdO2lmKHQuc3RlcFNpemUmJnQuc3RlcFNpemU+MClpPXQuc3RlcFNpemU7ZWxzZXt2YXIgbz1lLm5pY2VOdW0oYS5tYXgtYS5taW4sITEpO2k9ZS5uaWNlTnVtKG8vKHQubWF4VGlja3MtMSksITApfXZhciByPU1hdGguZmxvb3IoYS5taW4vaSkqaSxsPU1hdGguY2VpbChhLm1heC9pKSppO2lmKHQubWluJiZ0Lm1heCYmdC5zdGVwU2l6ZSl7dmFyIHM9KHQubWF4LXQubWluKSV0LnN0ZXBTaXplPT09MDtzJiYocj10Lm1pbixsPXQubWF4KX12YXIgZD0obC1yKS9pO2Q9ZS5hbG1vc3RFcXVhbHMoZCxNYXRoLnJvdW5kKGQpLGkvMWUzKT9NYXRoLnJvdW5kKGQpOk1hdGguY2VpbChkKSxuLnB1c2godm9pZCAwIT09dC5taW4/dC5taW46cik7Zm9yKHZhciB1PTE7ZD51OysrdSluLnB1c2gocit1KmkpO3JldHVybiBuLnB1c2godm9pZCAwIT09dC5tYXg/dC5tYXg6bCksbn0sbG9nYXJpdGhtaWM6ZnVuY3Rpb24odCxhKXtmb3IodmFyIGk9W10sbj1lLmdldFZhbHVlT3JEZWZhdWx0LG89bih0Lm1pbixNYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5taW4pKSkpO288YS5tYXg7KXtpLnB1c2gobyk7dmFyIHIsbDswPT09bz8ocj1NYXRoLmZsb29yKGUubG9nMTAoYS5taW5Ob3RaZXJvKSksbD1NYXRoLnJvdW5kKGEubWluTm90WmVyby9NYXRoLnBvdygxMCxyKSkpOihyPU1hdGguZmxvb3IoZS5sb2cxMChvKSksbD1NYXRoLmZsb29yKG8vTWF0aC5wb3coMTAscikpKzEpLDEwPT09bCYmKGw9MSwrK3IpLG89bCpNYXRoLnBvdygxMCxyKX12YXIgcz1uKHQubWF4LG8pO3JldHVybiBpLnB1c2gocyksaX19LGZvcm1hdHRlcnM6e3ZhbHVlczpmdW5jdGlvbih0KXtyZXR1cm4gZS5pc0FycmF5KHQpP3Q6XCJcIit0fSxsaW5lYXI6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPWkubGVuZ3RoPjM/aVsyXS1pWzFdOmlbMV0taVswXTtNYXRoLmFicyhuKT4xJiZ0IT09TWF0aC5mbG9vcih0KSYmKG49dC1NYXRoLmZsb29yKHQpKTt2YXIgbz1lLmxvZzEwKE1hdGguYWJzKG4pKSxyPVwiXCI7aWYoMCE9PXQpe3ZhciBsPS0xKk1hdGguZmxvb3Iobyk7bD1NYXRoLm1heChNYXRoLm1pbihsLDIwKSwwKSxyPXQudG9GaXhlZChsKX1lbHNlIHI9XCIwXCI7cmV0dXJuIHJ9LGxvZ2FyaXRobWljOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10L01hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMCh0KSkpO3JldHVybiAwPT09dD9cIjBcIjoxPT09bnx8Mj09PW58fDU9PT1ufHwwPT09YXx8YT09PWkubGVuZ3RoLTE/dC50b0V4cG9uZW50aWFsKCk6XCJcIn19fX19LHt9XSwzNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwudGl0bGU9e2Rpc3BsYXk6ITEscG9zaXRpb246XCJ0b3BcIixmdWxsV2lkdGg6ITAsZm9udFN0eWxlOlwiYm9sZFwiLHBhZGRpbmc6MTAsdGV4dDpcIlwifTt2YXIgYT1lLm5vb3A7dC5UaXRsZT10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXM7ZS5leHRlbmQoaSxhKSxpLm9wdGlvbnM9ZS5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbC50aXRsZSxhLm9wdGlvbnMpLGkubGVnZW5kSGl0Qm94ZXM9W119LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY2hhcnQub3B0aW9uczthJiZhLnRpdGxlJiYodGhpcy5vcHRpb25zPWUuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwudGl0bGUsYS50aXRsZSkpfSx1cGRhdGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXM7cmV0dXJuIGkuYmVmb3JlVXBkYXRlKCksaS5tYXhXaWR0aD10LGkubWF4SGVpZ2h0PWUsaS5tYXJnaW5zPWEsaS5iZWZvcmVTZXREaW1lbnNpb25zKCksaS5zZXREaW1lbnNpb25zKCksaS5hZnRlclNldERpbWVuc2lvbnMoKSxpLmJlZm9yZUJ1aWxkTGFiZWxzKCksaS5idWlsZExhYmVscygpLGkuYWZ0ZXJCdWlsZExhYmVscygpLGkuYmVmb3JlRml0KCksaS5maXQoKSxpLmFmdGVyRml0KCksaS5hZnRlclVwZGF0ZSgpLGkubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6YSxiZWZvcmVTZXREaW1lbnNpb25zOmEsc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wLHQubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH19LGFmdGVyU2V0RGltZW5zaW9uczphLGJlZm9yZUJ1aWxkTGFiZWxzOmEsYnVpbGRMYWJlbHM6YSxhZnRlckJ1aWxkTGFiZWxzOmEsYmVmb3JlRml0OmEsZml0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWUuZ2V0VmFsdWVPckRlZmF1bHQsbj1hLm9wdGlvbnMsbz10LmRlZmF1bHRzLmdsb2JhbCxyPW4uZGlzcGxheSxsPWkobi5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSkscz1hLm1pblNpemU7YS5pc0hvcml6b250YWwoKT8ocy53aWR0aD1hLm1heFdpZHRoLHMuaGVpZ2h0PXI/bCsyKm4ucGFkZGluZzowKToocy53aWR0aD1yP2wrMipuLnBhZGRpbmc6MCxzLmhlaWdodD1hLm1heEhlaWdodCksYS53aWR0aD1zLndpZHRoLGEuaGVpZ2h0PXMuaGVpZ2h0fSxhZnRlckZpdDphLGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5wb3NpdGlvbjtyZXR1cm5cInRvcFwiPT09dHx8XCJib3R0b21cIj09PXR9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5jdHgsbj1lLmdldFZhbHVlT3JEZWZhdWx0LG89YS5vcHRpb25zLHI9dC5kZWZhdWx0cy5nbG9iYWw7aWYoby5kaXNwbGF5KXt2YXIgbCxzLGQsdT1uKG8uZm9udFNpemUsci5kZWZhdWx0Rm9udFNpemUpLGM9bihvLmZvbnRTdHlsZSxyLmRlZmF1bHRGb250U3R5bGUpLGg9bihvLmZvbnRGYW1pbHksci5kZWZhdWx0Rm9udEZhbWlseSksZj1lLmZvbnRTdHJpbmcodSxjLGgpLGc9MCxwPWEudG9wLG09YS5sZWZ0LGI9YS5ib3R0b20sdj1hLnJpZ2h0O2kuZmlsbFN0eWxlPW4oby5mb250Q29sb3Isci5kZWZhdWx0Rm9udENvbG9yKSxpLmZvbnQ9ZixhLmlzSG9yaXpvbnRhbCgpPyhsPW0rKHYtbSkvMixzPXArKGItcCkvMixkPXYtbSk6KGw9XCJsZWZ0XCI9PT1vLnBvc2l0aW9uP20rdS8yOnYtdS8yLHM9cCsoYi1wKS8yLGQ9Yi1wLGc9TWF0aC5QSSooXCJsZWZ0XCI9PT1vLnBvc2l0aW9uPy0uNTouNSkpLGkuc2F2ZSgpLGkudHJhbnNsYXRlKGwscyksaS5yb3RhdGUoZyksaS50ZXh0QWxpZ249XCJjZW50ZXJcIixpLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGkuZmlsbFRleHQoby50ZXh0LDAsMCxkKSxpLnJlc3RvcmUoKX19fSksdC5wbHVnaW5zLnJlZ2lzdGVyKHtiZWZvcmVJbml0OmZ1bmN0aW9uKGUpe3ZhciBhPWUub3B0aW9ucyxpPWEudGl0bGU7aSYmKGUudGl0bGVCbG9jaz1uZXcgdC5UaXRsZSh7Y3R4OmUuY2hhcnQuY3R4LG9wdGlvbnM6aSxjaGFydDplfSksdC5sYXlvdXRTZXJ2aWNlLmFkZEJveChlLGUudGl0bGVCbG9jaykpfX0pfX0se31dLDM2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYT1zLmNvbG9yKHQpO3JldHVybiBhLmFscGhhKGUqYS5hbHBoYSgpKS5yZ2JhU3RyaW5nKCl9ZnVuY3Rpb24gYSh0LGUpe3JldHVybiBlJiYocy5pc0FycmF5KGUpP0FycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHQsZSk6dC5wdXNoKGUpKSx0fWZ1bmN0aW9uIGkodCl7dmFyIGU9dC5feFNjYWxlLGE9dC5feVNjYWxlfHx0Ll9zY2FsZSxpPXQuX2luZGV4LG49dC5fZGF0YXNldEluZGV4O3JldHVybnt4TGFiZWw6ZT9lLmdldExhYmVsRm9ySW5kZXgoaSxuKTpcIlwiLHlMYWJlbDphP2EuZ2V0TGFiZWxGb3JJbmRleChpLG4pOlwiXCIsaW5kZXg6aSxkYXRhc2V0SW5kZXg6bix4OnQuX21vZGVsLngseTp0Ll9tb2RlbC55fX1mdW5jdGlvbiBuKGUpe3ZhciBhPXQuZGVmYXVsdHMuZ2xvYmFsLGk9cy5nZXRWYWx1ZU9yRGVmYXVsdDtyZXR1cm57eFBhZGRpbmc6ZS54UGFkZGluZyx5UGFkZGluZzplLnlQYWRkaW5nLHhBbGlnbjplLnhBbGlnbix5QWxpZ246ZS55QWxpZ24sYm9keUZvbnRDb2xvcjplLmJvZHlGb250Q29sb3IsX2JvZHlGb250RmFtaWx5OmkoZS5ib2R5Rm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfYm9keUZvbnRTdHlsZTppKGUuYm9keUZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLF9ib2R5QWxpZ246ZS5ib2R5QWxpZ24sYm9keUZvbnRTaXplOmkoZS5ib2R5Rm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLGJvZHlTcGFjaW5nOmUuYm9keVNwYWNpbmcsdGl0bGVGb250Q29sb3I6ZS50aXRsZUZvbnRDb2xvcixfdGl0bGVGb250RmFtaWx5OmkoZS50aXRsZUZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX3RpdGxlRm9udFN0eWxlOmkoZS50aXRsZUZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLHRpdGxlRm9udFNpemU6aShlLnRpdGxlRm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLF90aXRsZUFsaWduOmUudGl0bGVBbGlnbix0aXRsZVNwYWNpbmc6ZS50aXRsZVNwYWNpbmcsdGl0bGVNYXJnaW5Cb3R0b206ZS50aXRsZU1hcmdpbkJvdHRvbSxmb290ZXJGb250Q29sb3I6ZS5mb290ZXJGb250Q29sb3IsX2Zvb3RlckZvbnRGYW1pbHk6aShlLmZvb3RlckZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX2Zvb3RlckZvbnRTdHlsZTppKGUuZm9vdGVyRm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksZm9vdGVyRm9udFNpemU6aShlLmZvb3RlckZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxfZm9vdGVyQWxpZ246ZS5mb290ZXJBbGlnbixmb290ZXJTcGFjaW5nOmUuZm9vdGVyU3BhY2luZyxmb290ZXJNYXJnaW5Ub3A6ZS5mb290ZXJNYXJnaW5Ub3AsY2FyZXRTaXplOmUuY2FyZXRTaXplLGNvcm5lclJhZGl1czplLmNvcm5lclJhZGl1cyxiYWNrZ3JvdW5kQ29sb3I6ZS5iYWNrZ3JvdW5kQ29sb3Isb3BhY2l0eTowLGxlZ2VuZENvbG9yQmFja2dyb3VuZDplLm11bHRpS2V5QmFja2dyb3VuZCxkaXNwbGF5Q29sb3JzOmUuZGlzcGxheUNvbG9yc319ZnVuY3Rpb24gbyh0LGUpe3ZhciBhPXQuX2NoYXJ0LmN0eCxpPTIqZS55UGFkZGluZyxuPTAsbz1lLmJvZHkscj1vLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiB0K2UuYmVmb3JlLmxlbmd0aCtlLmxpbmVzLmxlbmd0aCtlLmFmdGVyLmxlbmd0aH0sMCk7cis9ZS5iZWZvcmVCb2R5Lmxlbmd0aCtlLmFmdGVyQm9keS5sZW5ndGg7dmFyIGw9ZS50aXRsZS5sZW5ndGgsZD1lLmZvb3Rlci5sZW5ndGgsdT1lLnRpdGxlRm9udFNpemUsYz1lLmJvZHlGb250U2l6ZSxoPWUuZm9vdGVyRm9udFNpemU7aSs9bCp1LGkrPWw/KGwtMSkqZS50aXRsZVNwYWNpbmc6MCxpKz1sP2UudGl0bGVNYXJnaW5Cb3R0b206MCxpKz1yKmMsaSs9cj8oci0xKSplLmJvZHlTcGFjaW5nOjAsaSs9ZD9lLmZvb3Rlck1hcmdpblRvcDowLGkrPWQqaCxpKz1kPyhkLTEpKmUuZm9vdGVyU3BhY2luZzowO3ZhciBmPTAsZz1mdW5jdGlvbih0KXtuPU1hdGgubWF4KG4sYS5tZWFzdXJlVGV4dCh0KS53aWR0aCtmKX07cmV0dXJuIGEuZm9udD1zLmZvbnRTdHJpbmcodSxlLl90aXRsZUZvbnRTdHlsZSxlLl90aXRsZUZvbnRGYW1pbHkpLHMuZWFjaChlLnRpdGxlLGcpLGEuZm9udD1zLmZvbnRTdHJpbmcoYyxlLl9ib2R5Rm9udFN0eWxlLGUuX2JvZHlGb250RmFtaWx5KSxzLmVhY2goZS5iZWZvcmVCb2R5LmNvbmNhdChlLmFmdGVyQm9keSksZyksZj1lLmRpc3BsYXlDb2xvcnM/YysyOjAscy5lYWNoKG8sZnVuY3Rpb24odCl7cy5lYWNoKHQuYmVmb3JlLGcpLHMuZWFjaCh0LmxpbmVzLGcpLHMuZWFjaCh0LmFmdGVyLGcpfSksZj0wLGEuZm9udD1zLmZvbnRTdHJpbmcoaCxlLl9mb290ZXJGb250U3R5bGUsZS5fZm9vdGVyRm9udEZhbWlseSkscy5lYWNoKGUuZm9vdGVyLGcpLG4rPTIqZS54UGFkZGluZyx7d2lkdGg6bixoZWlnaHQ6aX19ZnVuY3Rpb24gcih0LGUpe3ZhciBhPXQuX21vZGVsLGk9dC5fY2hhcnQsbj10Ll9jaGFydEluc3RhbmNlLmNoYXJ0QXJlYSxvPVwiY2VudGVyXCIscj1cImNlbnRlclwiO2EueTxlLmhlaWdodD9yPVwidG9wXCI6YS55PmkuaGVpZ2h0LWUuaGVpZ2h0JiYocj1cImJvdHRvbVwiKTt2YXIgbCxzLGQsdSxjLGg9KG4ubGVmdCtuLnJpZ2h0KS8yLGY9KG4udG9wK24uYm90dG9tKS8yO1wiY2VudGVyXCI9PT1yPyhsPWZ1bmN0aW9uKHQpe3JldHVybiBoPj10fSxzPWZ1bmN0aW9uKHQpe3JldHVybiB0Pmh9KToobD1mdW5jdGlvbih0KXtyZXR1cm4gdDw9ZS53aWR0aC8yfSxzPWZ1bmN0aW9uKHQpe3JldHVybiB0Pj1pLndpZHRoLWUud2lkdGgvMn0pLGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQrZS53aWR0aD5pLndpZHRofSx1PWZ1bmN0aW9uKHQpe3JldHVybiB0LWUud2lkdGg8MH0sYz1mdW5jdGlvbih0KXtyZXR1cm4gZj49dD9cInRvcFwiOlwiYm90dG9tXCJ9LGwoYS54KT8obz1cImxlZnRcIixkKGEueCkmJihvPVwiY2VudGVyXCIscj1jKGEueSkpKTpzKGEueCkmJihvPVwicmlnaHRcIix1KGEueCkmJihvPVwiY2VudGVyXCIscj1jKGEueSkpKTt2YXIgZz10Ll9vcHRpb25zO3JldHVybnt4QWxpZ246Zy54QWxpZ24/Zy54QWxpZ246byx5QWxpZ246Zy55QWxpZ24/Zy55QWxpZ246cn19ZnVuY3Rpb24gbCh0LGUsYSl7dmFyIGk9dC54LG49dC55LG89dC5jYXJldFNpemUscj10LmNhcmV0UGFkZGluZyxsPXQuY29ybmVyUmFkaXVzLHM9YS54QWxpZ24sZD1hLnlBbGlnbix1PW8rcixjPWwrcjtyZXR1cm5cInJpZ2h0XCI9PT1zP2ktPWUud2lkdGg6XCJjZW50ZXJcIj09PXMmJihpLT1lLndpZHRoLzIpLFwidG9wXCI9PT1kP24rPXU6bi09XCJib3R0b21cIj09PWQ/ZS5oZWlnaHQrdTplLmhlaWdodC8yLFwiY2VudGVyXCI9PT1kP1wibGVmdFwiPT09cz9pKz11OlwicmlnaHRcIj09PXMmJihpLT11KTpcImxlZnRcIj09PXM/aS09YzpcInJpZ2h0XCI9PT1zJiYoaSs9Yykse3g6aSx5Om59fXZhciBzPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC50b29sdGlwcz17ZW5hYmxlZDohMCxjdXN0b206bnVsbCxtb2RlOlwibmVhcmVzdFwiLHBvc2l0aW9uOlwiYXZlcmFnZVwiLGludGVyc2VjdDohMCxiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLDAuOClcIix0aXRsZUZvbnRTdHlsZTpcImJvbGRcIix0aXRsZVNwYWNpbmc6Mix0aXRsZU1hcmdpbkJvdHRvbTo2LHRpdGxlRm9udENvbG9yOlwiI2ZmZlwiLHRpdGxlQWxpZ246XCJsZWZ0XCIsYm9keVNwYWNpbmc6Mixib2R5Rm9udENvbG9yOlwiI2ZmZlwiLGJvZHlBbGlnbjpcImxlZnRcIixmb290ZXJGb250U3R5bGU6XCJib2xkXCIsZm9vdGVyU3BhY2luZzoyLGZvb3Rlck1hcmdpblRvcDo2LGZvb3RlckZvbnRDb2xvcjpcIiNmZmZcIixmb290ZXJBbGlnbjpcImxlZnRcIix5UGFkZGluZzo2LHhQYWRkaW5nOjYsY2FyZXRTaXplOjUsY29ybmVyUmFkaXVzOjYsbXVsdGlLZXlCYWNrZ3JvdW5kOlwiI2ZmZlwiLGRpc3BsYXlDb2xvcnM6ITAsY2FsbGJhY2tzOntiZWZvcmVUaXRsZTpzLm5vb3AsdGl0bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT1cIlwiLGk9ZS5sYWJlbHMsbj1pP2kubGVuZ3RoOjA7aWYodC5sZW5ndGg+MCl7dmFyIG89dFswXTtvLnhMYWJlbD9hPW8ueExhYmVsOm4+MCYmby5pbmRleDxuJiYoYT1pW28uaW5kZXhdKX1yZXR1cm4gYX0sYWZ0ZXJUaXRsZTpzLm5vb3AsYmVmb3JlQm9keTpzLm5vb3AsYmVmb3JlTGFiZWw6cy5ub29wLGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCI7cmV0dXJuIGErXCI6IFwiK3QueUxhYmVsfSxsYWJlbENvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5nZXREYXRhc2V0TWV0YSh0LmRhdGFzZXRJbmRleCksaT1hLmRhdGFbdC5pbmRleF0sbj1pLl92aWV3O3JldHVybntib3JkZXJDb2xvcjpuLmJvcmRlckNvbG9yLGJhY2tncm91bmRDb2xvcjpuLmJhY2tncm91bmRDb2xvcn19LGFmdGVyTGFiZWw6cy5ub29wLGFmdGVyQm9keTpzLm5vb3AsYmVmb3JlRm9vdGVyOnMubm9vcCxmb290ZXI6cy5ub29wLGFmdGVyRm9vdGVyOnMubm9vcH19LHQuVG9vbHRpcD10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fbW9kZWw9bih0aGlzLl9vcHRpb25zKX0sZ2V0VGl0bGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5fb3B0aW9ucyxpPWUuY2FsbGJhY2tzLG49aS5iZWZvcmVUaXRsZS5hcHBseSh0LGFyZ3VtZW50cyksbz1pLnRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxyPWkuYWZ0ZXJUaXRsZS5hcHBseSh0LGFyZ3VtZW50cyksbD1bXTtyZXR1cm4gbD1hKGwsbiksbD1hKGwsbyksbD1hKGwscil9LGdldEJlZm9yZUJvZHk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9vcHRpb25zLmNhbGxiYWNrcy5iZWZvcmVCb2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcy5pc0FycmF5KHQpP3Q6dm9pZCAwIT09dD9bdF06W119LGdldEJvZHk6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLG49aS5fb3B0aW9ucy5jYWxsYmFja3Msbz1bXTtyZXR1cm4gcy5lYWNoKHQsZnVuY3Rpb24odCl7dmFyIHI9e2JlZm9yZTpbXSxsaW5lczpbXSxhZnRlcjpbXX07YShyLmJlZm9yZSxuLmJlZm9yZUxhYmVsLmNhbGwoaSx0LGUpKSxhKHIubGluZXMsbi5sYWJlbC5jYWxsKGksdCxlKSksYShyLmFmdGVyLG4uYWZ0ZXJMYWJlbC5jYWxsKGksdCxlKSksby5wdXNoKHIpfSksb30sZ2V0QWZ0ZXJCb2R5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fb3B0aW9ucy5jYWxsYmFja3MuYWZ0ZXJCb2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcy5pc0FycmF5KHQpP3Q6dm9pZCAwIT09dD9bdF06W119LGdldEZvb3RlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Ll9vcHRpb25zLmNhbGxiYWNrcyxpPWUuYmVmb3JlRm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxuPWUuZm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxvPWUuYWZ0ZXJGb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLHI9W107cmV0dXJuIHI9YShyLGkpLHI9YShyLG4pLHI9YShyLG8pfSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIGEsZCx1PXRoaXMsYz11Ll9vcHRpb25zLGg9dS5fbW9kZWwsZj11Ll9tb2RlbD1uKGMpLGc9dS5fYWN0aXZlLHA9dS5fZGF0YSxtPXUuX2NoYXJ0SW5zdGFuY2UsYj17eEFsaWduOmgueEFsaWduLHlBbGlnbjpoLnlBbGlnbn0sdj17eDpoLngseTpoLnl9LHg9e3dpZHRoOmgud2lkdGgsaGVpZ2h0OmguaGVpZ2h0fSx5PXt4OmguY2FyZXRYLHk6aC5jYXJldFl9O2lmKGcubGVuZ3RoKXtmLm9wYWNpdHk9MTt2YXIgaz1bXTt5PXQuVG9vbHRpcC5wb3NpdGlvbmVyc1tjLnBvc2l0aW9uXShnLHUuX2V2ZW50UG9zaXRpb24pO3ZhciBTPVtdO2ZvcihhPTAsZD1nLmxlbmd0aDtkPmE7KythKVMucHVzaChpKGdbYV0pKTtjLmZpbHRlciYmKFM9Uy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIGMuZmlsdGVyKHQscCl9KSksYy5pdGVtU29ydCYmKFM9Uy5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGMuaXRlbVNvcnQodCxlLHApfSkpLHMuZWFjaChTLGZ1bmN0aW9uKHQpe2sucHVzaChjLmNhbGxiYWNrcy5sYWJlbENvbG9yLmNhbGwodSx0LG0pKX0pLGYudGl0bGU9dS5nZXRUaXRsZShTLHApLGYuYmVmb3JlQm9keT11LmdldEJlZm9yZUJvZHkoUyxwKSxmLmJvZHk9dS5nZXRCb2R5KFMscCksZi5hZnRlckJvZHk9dS5nZXRBZnRlckJvZHkoUyxwKSxmLmZvb3Rlcj11LmdldEZvb3RlcihTLHApLGYueD1NYXRoLnJvdW5kKHkueCksZi55PU1hdGgucm91bmQoeS55KSxmLmNhcmV0UGFkZGluZz1zLmdldFZhbHVlT3JEZWZhdWx0KHkucGFkZGluZywyKSxmLmxhYmVsQ29sb3JzPWssZi5kYXRhUG9pbnRzPVMseD1vKHRoaXMsZiksYj1yKHRoaXMseCksdj1sKGYseCxiKX1lbHNlIGYub3BhY2l0eT0wO3JldHVybiBmLnhBbGlnbj1iLnhBbGlnbixmLnlBbGlnbj1iLnlBbGlnbixmLng9di54LGYueT12LnksZi53aWR0aD14LndpZHRoLGYuaGVpZ2h0PXguaGVpZ2h0LGYuY2FyZXRYPXkueCxmLmNhcmV0WT15LnksdS5fbW9kZWw9ZixlJiZjLmN1c3RvbSYmYy5jdXN0b20uY2FsbCh1LGYpLHV9LGRyYXdDYXJldDpmdW5jdGlvbih0LGEsaSl7dmFyIG4sbyxyLGwscyxkLHU9dGhpcy5fdmlldyxjPXRoaXMuX2NoYXJ0LmN0eCxoPXUuY2FyZXRTaXplLGY9dS5jb3JuZXJSYWRpdXMsZz11LnhBbGlnbixwPXUueUFsaWduLG09dC54LGI9dC55LHY9YS53aWR0aCx4PWEuaGVpZ2h0O1wiY2VudGVyXCI9PT1wPyhcImxlZnRcIj09PWc/KG49bSxvPW4taCxyPW4pOihuPW0rdixvPW4raCxyPW4pLHM9Yit4LzIsbD1zLWgsZD1zK2gpOihcImxlZnRcIj09PWc/KG49bStmLG89bitoLHI9bytoKTpcInJpZ2h0XCI9PT1nPyhuPW0rdi1mLG89bi1oLHI9by1oKToobz1tK3YvMixuPW8taCxyPW8raCksXCJ0b3BcIj09PXA/KGw9YixzPWwtaCxkPWwpOihsPWIreCxzPWwraCxkPWwpKSxjLmZpbGxTdHlsZT1lKHUuYmFja2dyb3VuZENvbG9yLGkpLGMuYmVnaW5QYXRoKCksYy5tb3ZlVG8obixsKSxjLmxpbmVUbyhvLHMpLGMubGluZVRvKHIsZCksYy5jbG9zZVBhdGgoKSxjLmZpbGwoKX0sZHJhd1RpdGxlOmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEudGl0bGU7aWYoby5sZW5ndGgpe2kudGV4dEFsaWduPWEuX3RpdGxlQWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIjt2YXIgcj1hLnRpdGxlRm9udFNpemUsbD1hLnRpdGxlU3BhY2luZztpLmZpbGxTdHlsZT1lKGEudGl0bGVGb250Q29sb3IsbiksaS5mb250PXMuZm9udFN0cmluZyhyLGEuX3RpdGxlRm9udFN0eWxlLGEuX3RpdGxlRm9udEZhbWlseSk7dmFyIGQsdTtmb3IoZD0wLHU9by5sZW5ndGg7dT5kOysrZClpLmZpbGxUZXh0KG9bZF0sdC54LHQueSksdC55Kz1yK2wsZCsxPT09by5sZW5ndGgmJih0LnkrPWEudGl0bGVNYXJnaW5Cb3R0b20tbCl9fSxkcmF3Qm9keTpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLmJvZHlGb250U2l6ZSxyPWEuYm9keVNwYWNpbmcsbD1hLmJvZHk7aS50ZXh0QWxpZ249YS5fYm9keUFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCI7dmFyIGQ9ZShhLmJvZHlGb250Q29sb3Isbik7aS5maWxsU3R5bGU9ZCxpLmZvbnQ9cy5mb250U3RyaW5nKG8sYS5fYm9keUZvbnRTdHlsZSxhLl9ib2R5Rm9udEZhbWlseSk7dmFyIHU9MCxjPWZ1bmN0aW9uKGUpe2kuZmlsbFRleHQoZSx0LngrdSx0LnkpLHQueSs9bytyfTtzLmVhY2goYS5iZWZvcmVCb2R5LGMpO3ZhciBoPWEuZGlzcGxheUNvbG9yczt1PWg/bysyOjAscy5lYWNoKGwsZnVuY3Rpb24ocixsKXtzLmVhY2goci5iZWZvcmUsYykscy5lYWNoKHIubGluZXMsZnVuY3Rpb24ocil7aCYmKGkuZmlsbFN0eWxlPWUoYS5sZWdlbmRDb2xvckJhY2tncm91bmQsbiksaS5maWxsUmVjdCh0LngsdC55LG8sbyksaS5zdHJva2VTdHlsZT1lKGEubGFiZWxDb2xvcnNbbF0uYm9yZGVyQ29sb3IsbiksaS5zdHJva2VSZWN0KHQueCx0LnksbyxvKSxpLmZpbGxTdHlsZT1lKGEubGFiZWxDb2xvcnNbbF0uYmFja2dyb3VuZENvbG9yLG4pLGkuZmlsbFJlY3QodC54KzEsdC55KzEsby0yLG8tMiksaS5maWxsU3R5bGU9ZCksYyhyKX0pLHMuZWFjaChyLmFmdGVyLGMpfSksdT0wLHMuZWFjaChhLmFmdGVyQm9keSxjKSx0LnktPXJ9LGRyYXdGb290ZXI6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS5mb290ZXI7by5sZW5ndGgmJih0LnkrPWEuZm9vdGVyTWFyZ2luVG9wLGkudGV4dEFsaWduPWEuX2Zvb3RlckFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCIsaS5maWxsU3R5bGU9ZShhLmZvb3RlckZvbnRDb2xvcixuKSxpLmZvbnQ9cy5mb250U3RyaW5nKGEuZm9vdGVyRm9udFNpemUsYS5fZm9vdGVyRm9udFN0eWxlLGEuX2Zvb3RlckZvbnRGYW1pbHkpLHMuZWFjaChvLGZ1bmN0aW9uKGUpe2kuZmlsbFRleHQoZSx0LngsdC55KSx0LnkrPWEuZm9vdGVyRm9udFNpemUrYS5mb290ZXJTcGFjaW5nfSkpfSxkcmF3QmFja2dyb3VuZDpmdW5jdGlvbih0LGEsaSxuLG8pe2kuZmlsbFN0eWxlPWUoYS5iYWNrZ3JvdW5kQ29sb3Isbykscy5kcmF3Um91bmRlZFJlY3RhbmdsZShpLHQueCx0Lnksbi53aWR0aCxuLmhlaWdodCxhLmNvcm5lclJhZGl1cyksaS5maWxsKCl9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jaGFydC5jdHgsZT10aGlzLl92aWV3O2lmKDAhPT1lLm9wYWNpdHkpe3ZhciBhPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0saT17eDplLngseTplLnl9LG49TWF0aC5hYnMoZS5vcGFjaXR5PC4wMDEpPzA6ZS5vcGFjaXR5O3RoaXMuX29wdGlvbnMuZW5hYmxlZCYmKHRoaXMuZHJhd0JhY2tncm91bmQoaSxlLHQsYSxuKSx0aGlzLmRyYXdDYXJldChpLGEsbiksaS54Kz1lLnhQYWRkaW5nLGkueSs9ZS55UGFkZGluZyx0aGlzLmRyYXdUaXRsZShpLGUsdCxuKSx0aGlzLmRyYXdCb2R5KGksZSx0LG4pLHRoaXMuZHJhd0Zvb3RlcihpLGUsdCxuKSl9fSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5fb3B0aW9ucyxpPSExO2lmKGUuX2xhc3RBY3RpdmU9ZS5fbGFzdEFjdGl2ZXx8W10sXCJtb3VzZW91dFwiPT09dC50eXBlP2UuX2FjdGl2ZT1bXTplLl9hY3RpdmU9ZS5fY2hhcnRJbnN0YW5jZS5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKHQsYS5tb2RlLGEpLGk9IXMuYXJyYXlFcXVhbHMoZS5fYWN0aXZlLGUuX2xhc3RBY3RpdmUpLGUuX2xhc3RBY3RpdmU9ZS5fYWN0aXZlLGEuZW5hYmxlZHx8YS5jdXN0b20pe2UuX2V2ZW50UG9zaXRpb249cy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHQsZS5fY2hhcnQpO3ZhciBuPWUuX21vZGVsO2UudXBkYXRlKCEwKSxlLnBpdm90KCksaXw9bi54IT09ZS5fbW9kZWwueHx8bi55IT09ZS5fbW9kZWwueX1yZXR1cm4gaX19KSx0LlRvb2x0aXAucG9zaXRpb25lcnM9e2F2ZXJhZ2U6ZnVuY3Rpb24odCl7aWYoIXQubGVuZ3RoKXJldHVybiExO3ZhciBlLGEsaT0wLG49MCxvPTA7Zm9yKGU9MCxhPXQubGVuZ3RoO2E+ZTsrK2Upe3ZhciByPXRbZV07aWYociYmci5oYXNWYWx1ZSgpKXt2YXIgbD1yLnRvb2x0aXBQb3NpdGlvbigpO2krPWwueCxuKz1sLnksKytvfX1yZXR1cm57eDpNYXRoLnJvdW5kKGkvbykseTpNYXRoLnJvdW5kKG4vbyl9fSxuZWFyZXN0OmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS54LHI9ZS55LGw9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO2ZvcihpPTAsbj10Lmxlbmd0aDtuPmk7KytpKXt2YXIgZD10W2ldO2lmKGQmJmQuaGFzVmFsdWUoKSl7dmFyIHU9ZC5nZXRDZW50ZXJQb2ludCgpLGM9cy5kaXN0YW5jZUJldHdlZW5Qb2ludHMoZSx1KTtsPmMmJihsPWMsYT1kKX19aWYoYSl7dmFyIGg9YS50b29sdGlwUG9zaXRpb24oKTtvPWgueCxyPWgueX1yZXR1cm57eDpvLHk6cn19fX19LHt9XSwzNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbDthLmVsZW1lbnRzLmFyYz17YmFja2dyb3VuZENvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlckNvbG9yOlwiI2ZmZlwiLGJvcmRlcldpZHRoOjJ9LHQuZWxlbWVudHMuQXJjPXQuRWxlbWVudC5leHRlbmQoe2luTGFiZWxSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS54LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaG92ZXJSYWRpdXMsMik6ITF9LGluUmFuZ2U6ZnVuY3Rpb24odCxhKXt2YXIgaT10aGlzLl92aWV3O2lmKGkpe2Zvcih2YXIgbj1lLmdldEFuZ2xlRnJvbVBvaW50KGkse3g6dCx5OmF9KSxvPW4uYW5nbGUscj1uLmRpc3RhbmNlLGw9aS5zdGFydEFuZ2xlLHM9aS5lbmRBbmdsZTtsPnM7KXMrPTIqTWF0aC5QSTtmb3IoO28+czspby09MipNYXRoLlBJO2Zvcig7bD5vOylvKz0yKk1hdGguUEk7dmFyIGQ9bz49bCYmcz49byx1PXI+PWkuaW5uZXJSYWRpdXMmJnI8PWkub3V0ZXJSYWRpdXM7cmV0dXJuIGQmJnV9cmV0dXJuITF9LGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldyxlPSh0LnN0YXJ0QW5nbGUrdC5lbmRBbmdsZSkvMixhPSh0LmlubmVyUmFkaXVzK3Qub3V0ZXJSYWRpdXMpLzI7cmV0dXJue3g6dC54K01hdGguY29zKGUpKmEseTp0LnkrTWF0aC5zaW4oZSkqYX19LGdldEFyZWE6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiBNYXRoLlBJKigodC5lbmRBbmdsZS10LnN0YXJ0QW5nbGUpLygyKk1hdGguUEkpKSooTWF0aC5wb3codC5vdXRlclJhZGl1cywyKS1NYXRoLnBvdyh0LmlubmVyUmFkaXVzLDIpKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldyxlPXQuc3RhcnRBbmdsZSsodC5lbmRBbmdsZS10LnN0YXJ0QW5nbGUpLzIsYT0odC5vdXRlclJhZGl1cy10LmlubmVyUmFkaXVzKS8yK3QuaW5uZXJSYWRpdXM7cmV0dXJue3g6dC54K01hdGguY29zKGUpKmEseTp0LnkrTWF0aC5zaW4oZSkqYX19LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jaGFydC5jdHgsZT10aGlzLl92aWV3LGE9ZS5zdGFydEFuZ2xlLGk9ZS5lbmRBbmdsZTt0LmJlZ2luUGF0aCgpLHQuYXJjKGUueCxlLnksZS5vdXRlclJhZGl1cyxhLGkpLHQuYXJjKGUueCxlLnksZS5pbm5lclJhZGl1cyxpLGEsITApLHQuY2xvc2VQYXRoKCksdC5zdHJva2VTdHlsZT1lLmJvcmRlckNvbG9yLHQubGluZVdpZHRoPWUuYm9yZGVyV2lkdGgsdC5maWxsU3R5bGU9ZS5iYWNrZ3JvdW5kQ29sb3IsdC5maWxsKCksdC5saW5lSm9pbj1cImJldmVsXCIsZS5ib3JkZXJXaWR0aCYmdC5zdHJva2UoKX19KX19LHt9XSwzODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbDt0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5saW5lPXt0ZW5zaW9uOi40LGJhY2tncm91bmRDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJXaWR0aDozLGJvcmRlckNvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlckNhcFN0eWxlOlwiYnV0dFwiLGJvcmRlckRhc2g6W10sYm9yZGVyRGFzaE9mZnNldDowLGJvcmRlckpvaW5TdHlsZTpcIm1pdGVyXCIsY2FwQmV6aWVyUG9pbnRzOiEwLGZpbGw6ITB9LHQuZWxlbWVudHMuTGluZT10LkVsZW1lbnQuZXh0ZW5kKHtkcmF3OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZhciBhPWUuX3ZpZXc7ZS5fdmlldy5zdGVwcGVkTGluZT09PSEwPyhzLmxpbmVUbyhhLngsdC5fdmlldy55KSxzLmxpbmVUbyhhLngsYS55KSk6MD09PWUuX3ZpZXcudGVuc2lvbj9zLmxpbmVUbyhhLngsYS55KTpzLmJlemllckN1cnZlVG8odC5fdmlldy5jb250cm9sUG9pbnROZXh0WCx0Ll92aWV3LmNvbnRyb2xQb2ludE5leHRZLGEuY29udHJvbFBvaW50UHJldmlvdXNYLGEuY29udHJvbFBvaW50UHJldmlvdXNZLGEueCxhLnkpfXZhciBpPXRoaXMsbj1pLl92aWV3LG89bi5zcGFuR2FwcyxyPW4uc2NhbGVaZXJvLGw9aS5fbG9vcDtsfHwoXCJ0b3BcIj09PW4uZmlsbD9yPW4uc2NhbGVUb3A6XCJib3R0b21cIj09PW4uZmlsbCYmKHI9bi5zY2FsZUJvdHRvbSkpO3ZhciBzPWkuX2NoYXJ0LmN0eDtzLnNhdmUoKTt2YXIgZD1pLl9jaGlsZHJlbi5zbGljZSgpLHU9LTE7bCYmZC5sZW5ndGgmJmQucHVzaChkWzBdKTt2YXIgYyxoLGYsZztpZihkLmxlbmd0aCYmbi5maWxsKXtmb3Iocy5iZWdpblBhdGgoKSxjPTA7YzxkLmxlbmd0aDsrK2MpaD1kW2NdLGY9ZS5wcmV2aW91c0l0ZW0oZCxjKSxnPWguX3ZpZXcsMD09PWM/KGw/cy5tb3ZlVG8oci54LHIueSk6cy5tb3ZlVG8oZy54LHIpLGcuc2tpcHx8KHU9YyxzLmxpbmVUbyhnLngsZy55KSkpOihmPS0xPT09dT9mOmRbdV0sZy5za2lwP298fHUhPT1jLTF8fChsP3MubGluZVRvKHIueCxyLnkpOnMubGluZVRvKGYuX3ZpZXcueCxyKSk6KHUhPT1jLTE/byYmLTEhPT11P3QoZixoKTpsP3MubGluZVRvKGcueCxnLnkpOihzLmxpbmVUbyhnLngscikscy5saW5lVG8oZy54LGcueSkpOnQoZixoKSx1PWMpKTtsfHwtMT09PXV8fHMubGluZVRvKGRbdV0uX3ZpZXcueCxyKSxzLmZpbGxTdHlsZT1uLmJhY2tncm91bmRDb2xvcnx8YS5kZWZhdWx0Q29sb3Iscy5jbG9zZVBhdGgoKSxzLmZpbGwoKX12YXIgcD1hLmVsZW1lbnRzLmxpbmU7Zm9yKHMubGluZUNhcD1uLmJvcmRlckNhcFN0eWxlfHxwLmJvcmRlckNhcFN0eWxlLHMuc2V0TGluZURhc2gmJnMuc2V0TGluZURhc2gobi5ib3JkZXJEYXNofHxwLmJvcmRlckRhc2gpLHMubGluZURhc2hPZmZzZXQ9bi5ib3JkZXJEYXNoT2Zmc2V0fHxwLmJvcmRlckRhc2hPZmZzZXQscy5saW5lSm9pbj1uLmJvcmRlckpvaW5TdHlsZXx8cC5ib3JkZXJKb2luU3R5bGUscy5saW5lV2lkdGg9bi5ib3JkZXJXaWR0aHx8cC5ib3JkZXJXaWR0aCxzLnN0cm9rZVN0eWxlPW4uYm9yZGVyQ29sb3J8fGEuZGVmYXVsdENvbG9yLHMuYmVnaW5QYXRoKCksdT0tMSxjPTA7YzxkLmxlbmd0aDsrK2MpaD1kW2NdLGY9ZS5wcmV2aW91c0l0ZW0oZCxjKSxnPWguX3ZpZXcsMD09PWM/Zy5za2lwfHwocy5tb3ZlVG8oZy54LGcueSksdT1jKTooZj0tMT09PXU/ZjpkW3VdLGcuc2tpcHx8KHUhPT1jLTEmJiFvfHwtMT09PXU/cy5tb3ZlVG8oZy54LGcueSk6dChmLGgpLHU9YykpO3Muc3Ryb2tlKCkscy5yZXN0b3JlKCl9fSl9fSx7fV0sMzk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS54LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaGl0UmFkaXVzLDIpOiExfWZ1bmN0aW9uIGEodCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueSwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhpdFJhZGl1cywyKTohMX12YXIgaT10LmhlbHBlcnMsbj10LmRlZmF1bHRzLmdsb2JhbCxvPW4uZGVmYXVsdENvbG9yO24uZWxlbWVudHMucG9pbnQ9e3JhZGl1czozLHBvaW50U3R5bGU6XCJjaXJjbGVcIixiYWNrZ3JvdW5kQ29sb3I6byxib3JkZXJXaWR0aDoxLGJvcmRlckNvbG9yOm8saGl0UmFkaXVzOjEsaG92ZXJSYWRpdXM6NCxob3ZlckJvcmRlcldpZHRoOjF9LHQuZWxlbWVudHMuUG9pbnQ9dC5FbGVtZW50LmV4dGVuZCh7aW5SYW5nZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMuX3ZpZXc7cmV0dXJuIGE/TWF0aC5wb3codC1hLngsMikrTWF0aC5wb3coZS1hLnksMik8TWF0aC5wb3coYS5oaXRSYWRpdXMrYS5yYWRpdXMsMik6ITF9LGluTGFiZWxSYW5nZTplLGluWFJhbmdlOmUsaW5ZUmFuZ2U6YSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55fX0sZ2V0QXJlYTpmdW5jdGlvbigpe3JldHVybiBNYXRoLlBJKk1hdGgucG93KHRoaXMuX3ZpZXcucmFkaXVzLDIpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueSxwYWRkaW5nOnQucmFkaXVzK3QuYm9yZGVyV2lkdGh9fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fdmlldyxhPXRoaXMuX2NoYXJ0LmN0eCxyPWUucG9pbnRTdHlsZSxsPWUucmFkaXVzLHM9ZS54LGQ9ZS55O2Uuc2tpcHx8KGEuc3Ryb2tlU3R5bGU9ZS5ib3JkZXJDb2xvcnx8byxhLmxpbmVXaWR0aD1pLmdldFZhbHVlT3JEZWZhdWx0KGUuYm9yZGVyV2lkdGgsbi5lbGVtZW50cy5wb2ludC5ib3JkZXJXaWR0aCksYS5maWxsU3R5bGU9ZS5iYWNrZ3JvdW5kQ29sb3J8fG8sdC5jYW52YXNIZWxwZXJzLmRyYXdQb2ludChhLHIsbCxzLGQpKX19KX19LHt9XSw0MDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe3JldHVybiB2b2lkIDAhPT10Ll92aWV3LndpZHRofWZ1bmN0aW9uIGEodCl7dmFyIGEsaSxuLG8scj10Ll92aWV3O2lmKGUodCkpe3ZhciBsPXIud2lkdGgvMjthPXIueC1sLGk9ci54K2wsbj1NYXRoLm1pbihyLnksci5iYXNlKSxvPU1hdGgubWF4KHIueSxyLmJhc2UpfWVsc2V7dmFyIHM9ci5oZWlnaHQvMjthPU1hdGgubWluKHIueCxyLmJhc2UpLGk9TWF0aC5tYXgoci54LHIuYmFzZSksbj1yLnktcyxvPXIueStzfXJldHVybntsZWZ0OmEsdG9wOm4scmlnaHQ6aSxib3R0b206b319dmFyIGk9dC5kZWZhdWx0cy5nbG9iYWw7aS5lbGVtZW50cy5yZWN0YW5nbGU9e2JhY2tncm91bmRDb2xvcjppLmRlZmF1bHRDb2xvcixib3JkZXJXaWR0aDowLGJvcmRlckNvbG9yOmkuZGVmYXVsdENvbG9yLGJvcmRlclNraXBwZWQ6XCJib3R0b21cIn0sdC5lbGVtZW50cy5SZWN0YW5nbGU9dC5FbGVtZW50LmV4dGVuZCh7ZHJhdzpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHNbKHUrdCklNF19dmFyIGU9dGhpcy5fY2hhcnQuY3R4LGE9dGhpcy5fdmlldyxpPWEud2lkdGgvMixuPWEueC1pLG89YS54K2kscj1hLmJhc2UtKGEuYmFzZS1hLnkpLGw9YS5ib3JkZXJXaWR0aC8yO2EuYm9yZGVyV2lkdGgmJihuKz1sLG8tPWwscis9bCksZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1hLmJhY2tncm91bmRDb2xvcixlLnN0cm9rZVN0eWxlPWEuYm9yZGVyQ29sb3IsZS5saW5lV2lkdGg9YS5ib3JkZXJXaWR0aDt2YXIgcz1bW24sYS5iYXNlXSxbbixyXSxbbyxyXSxbbyxhLmJhc2VdXSxkPVtcImJvdHRvbVwiLFwibGVmdFwiLFwidG9wXCIsXCJyaWdodFwiXSx1PWQuaW5kZXhPZihhLmJvcmRlclNraXBwZWQsMCk7LTE9PT11JiYodT0wKTt2YXIgYz10KDApO2UubW92ZVRvKGNbMF0sY1sxXSk7Zm9yKHZhciBoPTE7ND5oO2grKyljPXQoaCksZS5saW5lVG8oY1swXSxjWzFdKTtlLmZpbGwoKSxhLmJvcmRlcldpZHRoJiZlLnN0cm9rZSgpfSxoZWlnaHQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiB0LmJhc2UtdC55fSxpblJhbmdlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9ITE7aWYodGhpcy5fdmlldyl7dmFyIG49YSh0aGlzKTtpPXQ+PW4ubGVmdCYmdDw9bi5yaWdodCYmZT49bi50b3AmJmU8PW4uYm90dG9tfXJldHVybiBpfSxpbkxhYmVsUmFuZ2U6ZnVuY3Rpb24odCxpKXt2YXIgbj10aGlzO2lmKCFuLl92aWV3KXJldHVybiExO3ZhciBvPSExLHI9YShuKTtyZXR1cm4gbz1lKG4pP3Q+PXIubGVmdCYmdDw9ci5yaWdodDppPj1yLnRvcCYmaTw9ci5ib3R0b219LGluWFJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPWEodGhpcyk7cmV0dXJuIHQ+PWUubGVmdCYmdDw9ZS5yaWdodH0saW5ZUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9YSh0aGlzKTtyZXR1cm4gdD49ZS50b3AmJnQ8PWUuYm90dG9tfSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0LGEsaT10aGlzLl92aWV3O3JldHVybiBlKHRoaXMpPyh0PWkueCxhPShpLnkraS5iYXNlKS8yKToodD0oaS54K2kuYmFzZSkvMixhPWkueSkse3g6dCx5OmF9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gdC53aWR0aCpNYXRoLmFicyh0LnktdC5iYXNlKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0Lnl9fX0pfX0se31dLDQxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImJvdHRvbVwifSxpPXQuU2NhbGUuZXh0ZW5kKHtnZXRMYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNoYXJ0LmRhdGE7cmV0dXJuKHRoaXMuaXNIb3Jpem9udGFsKCk/dC54TGFiZWxzOnQueUxhYmVscyl8fHQubGFiZWxzfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQuZ2V0TGFiZWxzKCk7dC5taW5JbmRleD0wLHQubWF4SW5kZXg9YS5sZW5ndGgtMTt2YXIgaTt2b2lkIDAhPT10Lm9wdGlvbnMudGlja3MubWluJiYoaT1lLmluZGV4T2YoYSx0Lm9wdGlvbnMudGlja3MubWluKSx0Lm1pbkluZGV4PS0xIT09aT9pOnQubWluSW5kZXgpLHZvaWQgMCE9PXQub3B0aW9ucy50aWNrcy5tYXgmJihpPWUuaW5kZXhPZihhLHQub3B0aW9ucy50aWNrcy5tYXgpLHQubWF4SW5kZXg9LTEhPT1pP2k6dC5tYXhJbmRleCksdC5taW49YVt0Lm1pbkluZGV4XSx0Lm1heD1hW3QubWF4SW5kZXhdfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TGFiZWxzKCk7dC50aWNrcz0wPT09dC5taW5JbmRleCYmdC5tYXhJbmRleD09PWUubGVuZ3RoLTE/ZTplLnNsaWNlKHQubWluSW5kZXgsdC5tYXhJbmRleCsxKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LmRhdGEsbj1hLmlzSG9yaXpvbnRhbCgpO3JldHVybiBpLnhMYWJlbHMmJm58fGkueUxhYmVscyYmIW4/YS5nZXRSaWdodFZhbHVlKGkuZGF0YXNldHNbZV0uZGF0YVt0XSk6YS50aWNrc1t0XX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10aGlzLG89TWF0aC5tYXgobi5tYXhJbmRleCsxLW4ubWluSW5kZXgtKG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSk7aWYodm9pZCAwIT09dCYmaXNOYU4oZSkpe3ZhciByPW4uZ2V0TGFiZWxzKCksbD1yLmluZGV4T2YodCk7ZT0tMSE9PWw/bDplfWlmKG4uaXNIb3Jpem9udGFsKCkpe3ZhciBzPW4ud2lkdGgtKG4ucGFkZGluZ0xlZnQrbi5wYWRkaW5nUmlnaHQpLGQ9cy9vLHU9ZCooZS1uLm1pbkluZGV4KStuLnBhZGRpbmdMZWZ0O3JldHVybihuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmaXx8bi5tYXhJbmRleD09PW4ubWluSW5kZXgmJmkpJiYodSs9ZC8yKSxcclxubi5sZWZ0K01hdGgucm91bmQodSl9dmFyIGM9bi5oZWlnaHQtKG4ucGFkZGluZ1RvcCtuLnBhZGRpbmdCb3R0b20pLGg9Yy9vLGY9aCooZS1uLm1pbkluZGV4KStuLnBhZGRpbmdUb3A7cmV0dXJuIG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiZpJiYoZis9aC8yKSxuLnRvcCtNYXRoLnJvdW5kKGYpfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja3NbdF0sdCt0aGlzLm1pbkluZGV4LG51bGwsZSl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9TWF0aC5tYXgoYS50aWNrcy5sZW5ndGgtKGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSksbj1hLmlzSG9yaXpvbnRhbCgpLG89bj9hLndpZHRoLShhLnBhZGRpbmdMZWZ0K2EucGFkZGluZ1JpZ2h0KTphLmhlaWdodC0oYS5wYWRkaW5nVG9wK2EucGFkZGluZ0JvdHRvbSkscj1vL2k7cmV0dXJuIHQtPW4/YS5sZWZ0OmEudG9wLGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiYodC09ci8yKSx0LT1uP2EucGFkZGluZ0xlZnQ6YS5wYWRkaW5nVG9wLGU9MD49dD8wOk1hdGgucm91bmQodC9yKX0sZ2V0QmFzZVBpeGVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYm90dG9tfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwiY2F0ZWdvcnlcIixpLGEpfX0se31dLDQyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImxlZnRcIix0aWNrczp7Y2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxpbmVhcn19LGk9dC5MaW5lYXJTY2FsZUJhc2UuZXh0ZW5kKHtkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gbD90LnhBeGlzSUQ9PT1hLmlkOnQueUF4aXNJRD09PWEuaWR9dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWEuY2hhcnQsbz1uLmRhdGEscj1vLmRhdGFzZXRzLGw9YS5pc0hvcml6b250YWwoKTtpZihhLm1pbj1udWxsLGEubWF4PW51bGwsaS5zdGFja2VkKXt2YXIgcz17fTtlLmVhY2gocixmdW5jdGlvbihvLHIpe3ZhciBsPW4uZ2V0RGF0YXNldE1ldGEocik7dm9pZCAwPT09c1tsLnR5cGVdJiYoc1tsLnR5cGVdPXtwb3NpdGl2ZVZhbHVlczpbXSxuZWdhdGl2ZVZhbHVlczpbXX0pO3ZhciBkPXNbbC50eXBlXS5wb3NpdGl2ZVZhbHVlcyx1PXNbbC50eXBlXS5uZWdhdGl2ZVZhbHVlcztuLmlzRGF0YXNldFZpc2libGUocikmJnQobCkmJmUuZWFjaChvLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgbj0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKG4pfHxsLmRhdGFbZV0uaGlkZGVufHwoZFtlXT1kW2VdfHwwLHVbZV09dVtlXXx8MCxpLnJlbGF0aXZlUG9pbnRzP2RbZV09MTAwOjA+bj91W2VdKz1uOmRbZV0rPW4pfSl9KSxlLmVhY2gocyxmdW5jdGlvbih0KXt2YXIgaT10LnBvc2l0aXZlVmFsdWVzLmNvbmNhdCh0Lm5lZ2F0aXZlVmFsdWVzKSxuPWUubWluKGkpLG89ZS5tYXgoaSk7YS5taW49bnVsbD09PWEubWluP246TWF0aC5taW4oYS5taW4sbiksYS5tYXg9bnVsbD09PWEubWF4P286TWF0aC5tYXgoYS5tYXgsbyl9KX1lbHNlIGUuZWFjaChyLGZ1bmN0aW9uKGksbyl7dmFyIHI9bi5nZXREYXRhc2V0TWV0YShvKTtuLmlzRGF0YXNldFZpc2libGUobykmJnQocikmJmUuZWFjaChpLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgaT0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKGkpfHxyLmRhdGFbZV0uaGlkZGVufHwobnVsbD09PWEubWluP2EubWluPWk6aTxhLm1pbiYmKGEubWluPWkpLG51bGw9PT1hLm1heD9hLm1heD1pOmk+YS5tYXgmJihhLm1heD1pKSl9KX0pO3RoaXMuaGFuZGxlVGlja1JhbmdlT3B0aW9ucygpfSxnZXRUaWNrTGltaXQ6ZnVuY3Rpb24oKXt2YXIgYSxpPXRoaXMsbj1pLm9wdGlvbnMudGlja3M7aWYoaS5pc0hvcml6b250YWwoKSlhPU1hdGgubWluKG4ubWF4VGlja3NMaW1pdD9uLm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKGkud2lkdGgvNTApKTtlbHNle3ZhciBvPWUuZ2V0VmFsdWVPckRlZmF1bHQobi5mb250U2l6ZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUpO2E9TWF0aC5taW4obi5tYXhUaWNrc0xpbWl0P24ubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwoaS5oZWlnaHQvKDIqbykpKX1yZXR1cm4gYX0saGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzOmZ1bmN0aW9uKCl7dGhpcy5pc0hvcml6b250YWwoKXx8dGhpcy50aWNrcy5yZXZlcnNlKCl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dGhpcyxuPWkucGFkZGluZ0xlZnQsbz1pLnBhZGRpbmdCb3R0b20scj1pLnN0YXJ0LGw9K2kuZ2V0UmlnaHRWYWx1ZSh0KSxzPWkuZW5kLXI7cmV0dXJuIGkuaXNIb3Jpem9udGFsKCk/KGE9aS53aWR0aC0obitpLnBhZGRpbmdSaWdodCksZT1pLmxlZnQrYS9zKihsLXIpLE1hdGgucm91bmQoZStuKSk6KGE9aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtvKSxlPWkuYm90dG9tLW8tYS9zKihsLXIpLE1hdGgucm91bmQoZSkpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmlzSG9yaXpvbnRhbCgpLGk9ZS5wYWRkaW5nTGVmdCxuPWUucGFkZGluZ0JvdHRvbSxvPWE/ZS53aWR0aC0oaStlLnBhZGRpbmdSaWdodCk6ZS5oZWlnaHQtKGUucGFkZGluZ1RvcCtuKSxyPShhP3QtZS5sZWZ0LWk6ZS5ib3R0b20tbi10KS9vO3JldHVybiBlLnN0YXJ0KyhlLmVuZC1lLnN0YXJ0KSpyfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tzQXNOdW1iZXJzW3RdKX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImxpbmVhclwiLGksYSl9fSx7fV0sNDM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9ZS5ub29wO3QuTGluZWFyU2NhbGVCYXNlPXQuU2NhbGUuZXh0ZW5kKHtoYW5kbGVUaWNrUmFuZ2VPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQub3B0aW9ucyxpPWEudGlja3M7aWYoaS5iZWdpbkF0WmVybyl7dmFyIG49ZS5zaWduKHQubWluKSxvPWUuc2lnbih0Lm1heCk7MD5uJiYwPm8/dC5tYXg9MDpuPjAmJm8+MCYmKHQubWluPTApfXZvaWQgMCE9PWkubWluP3QubWluPWkubWluOnZvaWQgMCE9PWkuc3VnZ2VzdGVkTWluJiYodC5taW49TWF0aC5taW4odC5taW4saS5zdWdnZXN0ZWRNaW4pKSx2b2lkIDAhPT1pLm1heD90Lm1heD1pLm1heDp2b2lkIDAhPT1pLnN1Z2dlc3RlZE1heCYmKHQubWF4PU1hdGgubWF4KHQubWF4LGkuc3VnZ2VzdGVkTWF4KSksdC5taW49PT10Lm1heCYmKHQubWF4KyssaS5iZWdpbkF0WmVyb3x8dC5taW4tLSl9LGdldFRpY2tMaW1pdDphLGhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlczphLGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPWEuZ2V0VGlja0xpbWl0KCk7bz1NYXRoLm1heCgyLG8pO3ZhciByPXttYXhUaWNrczpvLG1pbjpuLm1pbixtYXg6bi5tYXgsc3RlcFNpemU6ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZpeGVkU3RlcFNpemUsbi5zdGVwU2l6ZSl9LGw9YS50aWNrcz10LlRpY2tzLmdlbmVyYXRvcnMubGluZWFyKHIsYSk7YS5oYW5kbGVEaXJlY3Rpb25hbENoYW5nZXMoKSxhLm1heD1lLm1heChsKSxhLm1pbj1lLm1pbihsKSxuLnJldmVyc2U/KGwucmV2ZXJzZSgpLGEuc3RhcnQ9YS5tYXgsYS5lbmQ9YS5taW4pOihhLnN0YXJ0PWEubWluLGEuZW5kPWEubWF4KX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UudGlja3NBc051bWJlcnM9ZS50aWNrcy5zbGljZSgpLGUuemVyb0xpbmVJbmRleD1lLnRpY2tzLmluZGV4T2YoMCksdC5TY2FsZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbChlKX19KX19LHt9XSw0NDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJsZWZ0XCIsdGlja3M6e2NhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5sb2dhcml0aG1pY319LGk9dC5TY2FsZS5leHRlbmQoe2RldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBkP3QueEF4aXNJRD09PWEuaWQ6dC55QXhpc0lEPT09YS5pZH12YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPWEuY2hhcnQscj1vLmRhdGEsbD1yLmRhdGFzZXRzLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdCxkPWEuaXNIb3Jpem9udGFsKCk7aWYoYS5taW49bnVsbCxhLm1heD1udWxsLGEubWluTm90WmVybz1udWxsLGkuc3RhY2tlZCl7dmFyIHU9e307ZS5lYWNoKGwsZnVuY3Rpb24obixyKXt2YXIgbD1vLmdldERhdGFzZXRNZXRhKHIpO28uaXNEYXRhc2V0VmlzaWJsZShyKSYmdChsKSYmKHZvaWQgMD09PXVbbC50eXBlXSYmKHVbbC50eXBlXT1bXSksZS5lYWNoKG4uZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBuPXVbbC50eXBlXSxvPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4obyl8fGwuZGF0YVtlXS5oaWRkZW58fChuW2VdPW5bZV18fDAsaS5yZWxhdGl2ZVBvaW50cz9uW2VdPTEwMDpuW2VdKz1vKX0pKX0pLGUuZWFjaCh1LGZ1bmN0aW9uKHQpe3ZhciBpPWUubWluKHQpLG49ZS5tYXgodCk7YS5taW49bnVsbD09PWEubWluP2k6TWF0aC5taW4oYS5taW4saSksYS5tYXg9bnVsbD09PWEubWF4P246TWF0aC5tYXgoYS5tYXgsbil9KX1lbHNlIGUuZWFjaChsLGZ1bmN0aW9uKGksbil7dmFyIHI9by5nZXREYXRhc2V0TWV0YShuKTtvLmlzRGF0YXNldFZpc2libGUobikmJnQocikmJmUuZWFjaChpLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgaT0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKGkpfHxyLmRhdGFbZV0uaGlkZGVufHwobnVsbD09PWEubWluP2EubWluPWk6aTxhLm1pbiYmKGEubWluPWkpLG51bGw9PT1hLm1heD9hLm1heD1pOmk+YS5tYXgmJihhLm1heD1pKSwwIT09aSYmKG51bGw9PT1hLm1pbk5vdFplcm98fGk8YS5taW5Ob3RaZXJvKSYmKGEubWluTm90WmVybz1pKSl9KX0pO2EubWluPXMobi5taW4sYS5taW4pLGEubWF4PXMobi5tYXgsYS5tYXgpLGEubWluPT09YS5tYXgmJigwIT09YS5taW4mJm51bGwhPT1hLm1pbj8oYS5taW49TWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWluKSktMSksYS5tYXg9TWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWF4KSkrMSkpOihhLm1pbj0xLGEubWF4PTEwKSl9LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPXttaW46bi5taW4sbWF4Om4ubWF4fSxyPWEudGlja3M9dC5UaWNrcy5nZW5lcmF0b3JzLmxvZ2FyaXRobWljKG8sYSk7YS5pc0hvcml6b250YWwoKXx8ci5yZXZlcnNlKCksYS5tYXg9ZS5tYXgociksYS5taW49ZS5taW4ociksbi5yZXZlcnNlPyhyLnJldmVyc2UoKSxhLnN0YXJ0PWEubWF4LGEuZW5kPWEubWluKTooYS5zdGFydD1hLm1pbixhLmVuZD1hLm1heCl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dGhpcy50aWNrVmFsdWVzPXRoaXMudGlja3Muc2xpY2UoKSx0LlNjYWxlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKHRoaXMpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja1ZhbHVlc1t0XSl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGEsaSxuLG89dGhpcyxyPW8uc3RhcnQsbD0rby5nZXRSaWdodFZhbHVlKHQpLHM9by5wYWRkaW5nVG9wLGQ9by5wYWRkaW5nQm90dG9tLHU9by5wYWRkaW5nTGVmdCxjPW8ub3B0aW9ucyxoPWMudGlja3M7cmV0dXJuIG8uaXNIb3Jpem9udGFsKCk/KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChyKSwwPT09bD9pPW8ubGVmdCt1OihhPW8ud2lkdGgtKHUrby5wYWRkaW5nUmlnaHQpLGk9by5sZWZ0K2EvbiooZS5sb2cxMChsKS1lLmxvZzEwKHIpKSxpKz11KSk6KGE9by5oZWlnaHQtKHMrZCksMCE9PXJ8fGgucmV2ZXJzZT8wPT09by5lbmQmJmgucmV2ZXJzZT8obj1lLmxvZzEwKG8uc3RhcnQpLWUubG9nMTAoby5taW5Ob3RaZXJvKSxpPWw9PT1vLmVuZD9vLnRvcCtzOmw9PT1vLm1pbk5vdFplcm8/by50b3ArcysuMDIqYTpvLnRvcCtzKy4wMiphKy45OCphL24qKGUubG9nMTAobCktZS5sb2cxMChvLm1pbk5vdFplcm8pKSk6KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChyKSxhPW8uaGVpZ2h0LShzK2QpLGk9by5ib3R0b20tZC1hL24qKGUubG9nMTAobCktZS5sb2cxMChyKSkpOihuPWUubG9nMTAoby5lbmQpLWUubG9nMTAoby5taW5Ob3RaZXJvKSxpPWw9PT1yP28uYm90dG9tLWQ6bD09PW8ubWluTm90WmVybz9vLmJvdHRvbS1kLS4wMiphOm8uYm90dG9tLWQtLjAyKmEtLjk4KmEvbiooZS5sb2cxMChsKS1lLmxvZzEwKG8ubWluTm90WmVybykpKSksaX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgYSxpLG49dGhpcyxvPWUubG9nMTAobi5lbmQpLWUubG9nMTAobi5zdGFydCk7cmV0dXJuIG4uaXNIb3Jpem9udGFsKCk/KGk9bi53aWR0aC0obi5wYWRkaW5nTGVmdCtuLnBhZGRpbmdSaWdodCksYT1uLnN0YXJ0Kk1hdGgucG93KDEwLCh0LW4ubGVmdC1uLnBhZGRpbmdMZWZ0KSpvL2kpKTooaT1uLmhlaWdodC0obi5wYWRkaW5nVG9wK24ucGFkZGluZ0JvdHRvbSksYT1NYXRoLnBvdygxMCwobi5ib3R0b20tbi5wYWRkaW5nQm90dG9tLXQpKm8vaSkvbi5zdGFydCksYX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImxvZ2FyaXRobWljXCIsaSxhKX19LHt9XSw0NTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbCxpPXtkaXNwbGF5OiEwLGFuaW1hdGU6ITAsbGluZUFyYzohMSxwb3NpdGlvbjpcImNoYXJ0QXJlYVwiLGFuZ2xlTGluZXM6e2Rpc3BsYXk6ITAsY29sb3I6XCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixsaW5lV2lkdGg6MX0sdGlja3M6e3Nob3dMYWJlbEJhY2tkcm9wOiEwLGJhY2tkcm9wQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpXCIsYmFja2Ryb3BQYWRkaW5nWToyLGJhY2tkcm9wUGFkZGluZ1g6MixjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubGluZWFyfSxwb2ludExhYmVsczp7Zm9udFNpemU6MTAsY2FsbGJhY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHR9fX0sbj10LkxpbmVhclNjYWxlQmFzZS5leHRlbmQoe2dldFZhbHVlQ291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGh9LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5vcHRpb25zLG49aS50aWNrczt0LndpZHRoPXQubWF4V2lkdGgsdC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC54Q2VudGVyPU1hdGgucm91bmQodC53aWR0aC8yKSx0LnlDZW50ZXI9TWF0aC5yb3VuZCh0LmhlaWdodC8yKTt2YXIgbz1lLm1pbihbdC5oZWlnaHQsdC53aWR0aF0pLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKTt0LmRyYXdpbmdBcmVhPWkuZGlzcGxheT9vLzItKHIvMituLmJhY2tkcm9wUGFkZGluZ1kpOm8vMn0sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10LmNoYXJ0O3QubWluPW51bGwsdC5tYXg9bnVsbCxlLmVhY2goYS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGksbil7aWYoYS5pc0RhdGFzZXRWaXNpYmxlKG4pKXt2YXIgbz1hLmdldERhdGFzZXRNZXRhKG4pO2UuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSxhKXt2YXIgaT0rdC5nZXRSaWdodFZhbHVlKGUpO2lzTmFOKGkpfHxvLmRhdGFbYV0uaGlkZGVufHwobnVsbD09PXQubWluP3QubWluPWk6aTx0Lm1pbiYmKHQubWluPWkpLG51bGw9PT10Lm1heD90Lm1heD1pOmk+dC5tYXgmJih0Lm1heD1pKSl9KX19KSx0LmhhbmRsZVRpY2tSYW5nZU9wdGlvbnMoKX0sZ2V0VGlja0xpbWl0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnRpY2tzLGk9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh0LmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKTtyZXR1cm4gTWF0aC5taW4odC5tYXhUaWNrc0xpbWl0P3QubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwodGhpcy5kcmF3aW5nQXJlYS8oMS41KmkpKSl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0LkxpbmVhclNjYWxlQmFzZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbChlKSxlLnBvaW50TGFiZWxzPWUuY2hhcnQuZGF0YS5sYWJlbHMubWFwKGUub3B0aW9ucy5wb2ludExhYmVscy5jYWxsYmFjayxlKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxmaXQ6ZnVuY3Rpb24oKXt2YXIgdCxpLG4sbyxyLGwscyxkLHUsYyxoLGYsZz10aGlzLm9wdGlvbnMucG9pbnRMYWJlbHMscD1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLG09ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksdj1lLmZvbnRTdHJpbmcocCxtLGIpLHg9ZS5taW4oW3RoaXMuaGVpZ2h0LzItcC01LHRoaXMud2lkdGgvMl0pLHk9dGhpcy53aWR0aCxrPTA7Zm9yKHRoaXMuY3R4LmZvbnQ9dixpPTA7aTx0aGlzLmdldFZhbHVlQ291bnQoKTtpKyspe3Q9dGhpcy5nZXRQb2ludFBvc2l0aW9uKGkseCksbj10aGlzLmN0eC5tZWFzdXJlVGV4dCh0aGlzLnBvaW50TGFiZWxzW2ldP3RoaXMucG9pbnRMYWJlbHNbaV06XCJcIikud2lkdGgrNTt2YXIgUz10aGlzLmdldEluZGV4QW5nbGUoaSkrTWF0aC5QSS8yLHc9MzYwKlMvKDIqTWF0aC5QSSklMzYwOzA9PT13fHwxODA9PT13PyhvPW4vMix0Lngrbz55JiYoeT10LngrbyxyPWkpLHQueC1vPGsmJihrPXQueC1vLHM9aSkpOjE4MD53P3QueCtuPnkmJih5PXQueCtuLHI9aSk6dC54LW48ayYmKGs9dC54LW4scz1pKX11PWssYz1NYXRoLmNlaWwoeS10aGlzLndpZHRoKSxsPXRoaXMuZ2V0SW5kZXhBbmdsZShyKSxkPXRoaXMuZ2V0SW5kZXhBbmdsZShzKSxoPWMvTWF0aC5zaW4obCtNYXRoLlBJLzIpLGY9dS9NYXRoLnNpbihkK01hdGguUEkvMiksaD1lLmlzTnVtYmVyKGgpP2g6MCxmPWUuaXNOdW1iZXIoZik/ZjowLHRoaXMuZHJhd2luZ0FyZWE9TWF0aC5yb3VuZCh4LShmK2gpLzIpLHRoaXMuc2V0Q2VudGVyUG9pbnQoZixoKX0sc2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS53aWR0aC1lLWEuZHJhd2luZ0FyZWEsbj10K2EuZHJhd2luZ0FyZWE7YS54Q2VudGVyPU1hdGgucm91bmQoKG4raSkvMithLmxlZnQpLGEueUNlbnRlcj1NYXRoLnJvdW5kKGEuaGVpZ2h0LzIrYS50b3ApfSxnZXRJbmRleEFuZ2xlOmZ1bmN0aW9uKHQpe3ZhciBlPTIqTWF0aC5QSS90aGlzLmdldFZhbHVlQ291bnQoKSxhPXRoaXMuY2hhcnQub3B0aW9ucyYmdGhpcy5jaGFydC5vcHRpb25zLnN0YXJ0QW5nbGU/dGhpcy5jaGFydC5vcHRpb25zLnN0YXJ0QW5nbGU6MCxpPWEqTWF0aC5QSSoyLzM2MDtyZXR1cm4gdCplLU1hdGguUEkvMitpfSxnZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKG51bGw9PT10KXJldHVybiAwO3ZhciBhPWUuZHJhd2luZ0FyZWEvKGUubWF4LWUubWluKTtyZXR1cm4gZS5vcHRpb25zLnJldmVyc2U/KGUubWF4LXQpKmE6KHQtZS5taW4pKmF9LGdldFBvaW50UG9zaXRpb246ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRJbmRleEFuZ2xlKHQpO3JldHVybnt4Ok1hdGgucm91bmQoTWF0aC5jb3MoaSkqZSkrYS54Q2VudGVyLHk6TWF0aC5yb3VuZChNYXRoLnNpbihpKSplKSthLnlDZW50ZXJ9fSxnZXRQb2ludFBvc2l0aW9uRm9yVmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZXRQb2ludFBvc2l0aW9uKHQsdGhpcy5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShlKSl9LGdldEJhc2VQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm1pbixhPXQubWF4O3JldHVybiB0LmdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZSgwLHQuYmVnaW5BdFplcm8/MDowPmUmJjA+YT9hOmU+MCYmYT4wP2U6MCl9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5vcHRpb25zLG49aS5ncmlkTGluZXMsbz1pLnRpY2tzLHI9aS5hbmdsZUxpbmVzLGw9aS5wb2ludExhYmVscyxzPWUuZ2V0VmFsdWVPckRlZmF1bHQ7aWYoaS5kaXNwbGF5KXt2YXIgZD10LmN0eCx1PXMoby5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksYz1zKG8uZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksaD1zKG8uZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxmPWUuZm9udFN0cmluZyh1LGMsaCk7aWYoZS5lYWNoKHQudGlja3MsZnVuY3Rpb24ocixsKXtpZihsPjB8fGkucmV2ZXJzZSl7dmFyIGM9dC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZSh0LnRpY2tzQXNOdW1iZXJzW2xdKSxoPXQueUNlbnRlci1jO2lmKG4uZGlzcGxheSYmMCE9PWwpaWYoZC5zdHJva2VTdHlsZT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmNvbG9yLGwtMSksZC5saW5lV2lkdGg9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5saW5lV2lkdGgsbC0xKSxpLmxpbmVBcmMpZC5iZWdpblBhdGgoKSxkLmFyYyh0LnhDZW50ZXIsdC55Q2VudGVyLGMsMCwyKk1hdGguUEkpLGQuY2xvc2VQYXRoKCksZC5zdHJva2UoKTtlbHNle2QuYmVnaW5QYXRoKCk7Zm9yKHZhciBnPTA7Zzx0LmdldFZhbHVlQ291bnQoKTtnKyspe3ZhciBwPXQuZ2V0UG9pbnRQb3NpdGlvbihnLGMpOzA9PT1nP2QubW92ZVRvKHAueCxwLnkpOmQubGluZVRvKHAueCxwLnkpfWQuY2xvc2VQYXRoKCksZC5zdHJva2UoKX1pZihvLmRpc3BsYXkpe3ZhciBtPXMoby5mb250Q29sb3IsYS5kZWZhdWx0Rm9udENvbG9yKTtpZihkLmZvbnQ9ZixvLnNob3dMYWJlbEJhY2tkcm9wKXt2YXIgYj1kLm1lYXN1cmVUZXh0KHIpLndpZHRoO2QuZmlsbFN0eWxlPW8uYmFja2Ryb3BDb2xvcixkLmZpbGxSZWN0KHQueENlbnRlci1iLzItby5iYWNrZHJvcFBhZGRpbmdYLGgtdS8yLW8uYmFja2Ryb3BQYWRkaW5nWSxiKzIqby5iYWNrZHJvcFBhZGRpbmdYLHUrMipvLmJhY2tkcm9wUGFkZGluZ1kpfWQudGV4dEFsaWduPVwiY2VudGVyXCIsZC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixkLmZpbGxTdHlsZT1tLGQuZmlsbFRleHQocix0LnhDZW50ZXIsaCl9fX0pLCFpLmxpbmVBcmMpe2QubGluZVdpZHRoPXIubGluZVdpZHRoLGQuc3Ryb2tlU3R5bGU9ci5jb2xvcjtmb3IodmFyIGc9dC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShpLnJldmVyc2U/dC5taW46dC5tYXgpLHA9cyhsLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxtPXMobC5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxiPXMobC5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLHY9ZS5mb250U3RyaW5nKHAsbSxiKSx4PXQuZ2V0VmFsdWVDb3VudCgpLTE7eD49MDt4LS0pe2lmKHIuZGlzcGxheSl7dmFyIHk9dC5nZXRQb2ludFBvc2l0aW9uKHgsZyk7ZC5iZWdpblBhdGgoKSxkLm1vdmVUbyh0LnhDZW50ZXIsdC55Q2VudGVyKSxkLmxpbmVUbyh5LngseS55KSxkLnN0cm9rZSgpLGQuY2xvc2VQYXRoKCl9dmFyIGs9dC5nZXRQb2ludFBvc2l0aW9uKHgsZys1KSxTPXMobC5mb250Q29sb3IsYS5kZWZhdWx0Rm9udENvbG9yKTtkLmZvbnQ9dixkLmZpbGxTdHlsZT1TO3ZhciB3PXQucG9pbnRMYWJlbHMsTT10aGlzLmdldEluZGV4QW5nbGUoeCkrTWF0aC5QSS8yLEM9MzYwKk0vKDIqTWF0aC5QSSklMzYwOzA9PT1DfHwxODA9PT1DP2QudGV4dEFsaWduPVwiY2VudGVyXCI6MTgwPkM/ZC50ZXh0QWxpZ249XCJsZWZ0XCI6ZC50ZXh0QWxpZ249XCJyaWdodFwiLDkwPT09Q3x8MjcwPT09Qz9kLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiOkM+MjcwfHw5MD5DP2QudGV4dEJhc2VsaW5lPVwiYm90dG9tXCI6ZC50ZXh0QmFzZWxpbmU9XCJ0b3BcIixkLmZpbGxUZXh0KHdbeF0/d1t4XTpcIlwiLGsueCxrLnkpfX19fX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwicmFkaWFsTGluZWFyXCIsbixpKX19LHt9XSw0NjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoMSk7aT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6d2luZG93Lm1vbWVudCxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3VuaXRzOlt7bmFtZTpcIm1pbGxpc2Vjb25kXCIsc3RlcHM6WzEsMiw1LDEwLDIwLDUwLDEwMCwyNTAsNTAwXX0se25hbWU6XCJzZWNvbmRcIixzdGVwczpbMSwyLDUsMTAsMzBdfSx7bmFtZTpcIm1pbnV0ZVwiLHN0ZXBzOlsxLDIsNSwxMCwzMF19LHtuYW1lOlwiaG91clwiLHN0ZXBzOlsxLDIsMyw2LDEyXX0se25hbWU6XCJkYXlcIixzdGVwczpbMSwyLDVdfSx7bmFtZTpcIndlZWtcIixtYXhTdGVwOjR9LHtuYW1lOlwibW9udGhcIixtYXhTdGVwOjN9LHtuYW1lOlwicXVhcnRlclwiLG1heFN0ZXA6NH0se25hbWU6XCJ5ZWFyXCIsbWF4U3RlcDohMX1dfSxuPXtwb3NpdGlvbjpcImJvdHRvbVwiLHRpbWU6e3BhcnNlcjohMSxmb3JtYXQ6ITEsdW5pdDohMSxyb3VuZDohMSxkaXNwbGF5Rm9ybWF0OiExLGlzb1dlZWtkYXk6ITEsbWluVW5pdDpcIm1pbGxpc2Vjb25kXCIsZGlzcGxheUZvcm1hdHM6e21pbGxpc2Vjb25kOlwiaDptbTpzcy5TU1MgYVwiLHNlY29uZDpcImg6bW06c3MgYVwiLG1pbnV0ZTpcImg6bW06c3MgYVwiLGhvdXI6XCJNTU0gRCwgaEFcIixkYXk6XCJsbFwiLHdlZWs6XCJsbFwiLG1vbnRoOlwiTU1NIFlZWVlcIixxdWFydGVyOlwiW1FdUSAtIFlZWVlcIix5ZWFyOlwiWVlZWVwifX0sdGlja3M6e2F1dG9Ta2lwOiExfX0sbz10LlNjYWxlLmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe2lmKCFpKXRocm93IG5ldyBFcnJvcihcIkNoYXJ0LmpzIC0gTW9tZW50LmpzIGNvdWxkIG5vdCBiZSBmb3VuZCEgWW91IG11c3QgaW5jbHVkZSBpdCBiZWZvcmUgQ2hhcnQuanMgdG8gdXNlIHRoZSB0aW1lIHNjYWxlLiBEb3dubG9hZCBhdCBodHRwczovL21vbWVudGpzLmNvbVwiKTt0LlNjYWxlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyl9LGdldExhYmVsTW9tZW50OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGw9PT10fHxudWxsPT09ZT9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLmxhYmVsTW9tZW50c1t0XT90aGlzLmxhYmVsTW9tZW50c1t0XVtlXTpudWxsfSxnZXRMYWJlbERpZmY6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO3JldHVybiBudWxsPT09dHx8bnVsbD09PWU/bnVsbDoodm9pZCAwPT09YS5sYWJlbERpZmZzJiZhLmJ1aWxkTGFiZWxEaWZmcygpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmxhYmVsRGlmZnNbdF0/YS5sYWJlbERpZmZzW3RdW2VdOm51bGwpfSxnZXRNb21lbnRTdGFydE9mOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuXCJ3ZWVrXCI9PT1lLm9wdGlvbnMudGltZS51bml0JiZlLm9wdGlvbnMudGltZS5pc29XZWVrZGF5IT09ITE/dC5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpLmlzb1dlZWtkYXkoZS5vcHRpb25zLnRpbWUuaXNvV2Vla2RheSk6dC5jbG9uZSgpLnN0YXJ0T2YoZS50aWNrVW5pdCl9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGFiZWxNb21lbnRzPVtdO3ZhciBhPVtdO3QuY2hhcnQuZGF0YS5sYWJlbHMmJnQuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoPjA/KGUuZWFjaCh0LmNoYXJ0LmRhdGEubGFiZWxzLGZ1bmN0aW9uKGUpe3ZhciBpPXQucGFyc2VUaW1lKGUpO2kuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmkuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksYS5wdXNoKGkpKX0sdCksdC5maXJzdFRpY2s9aS5taW4uY2FsbCh0LGEpLHQubGFzdFRpY2s9aS5tYXguY2FsbCh0LGEpKToodC5maXJzdFRpY2s9bnVsbCx0Lmxhc3RUaWNrPW51bGwpLGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24obixvKXt2YXIgcj1bXSxsPXQuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShvKTtcIm9iamVjdFwiPT10eXBlb2Ygbi5kYXRhWzBdJiZudWxsIT09bi5kYXRhWzBdP2UuZWFjaChuLmRhdGEsZnVuY3Rpb24oZSl7dmFyIGE9dC5wYXJzZVRpbWUodC5nZXRSaWdodFZhbHVlKGUpKTthLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZhLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLHIucHVzaChhKSxsJiYodC5maXJzdFRpY2s9bnVsbCE9PXQuZmlyc3RUaWNrP2kubWluKHQuZmlyc3RUaWNrLGEpOmEsdC5sYXN0VGljaz1udWxsIT09dC5sYXN0VGljaz9pLm1heCh0Lmxhc3RUaWNrLGEpOmEpKX0sdCk6cj1hLHQubGFiZWxNb21lbnRzLnB1c2gocil9LHQpLHQub3B0aW9ucy50aW1lLm1pbiYmKHQuZmlyc3RUaWNrPXQucGFyc2VUaW1lKHQub3B0aW9ucy50aW1lLm1pbikpLHQub3B0aW9ucy50aW1lLm1heCYmKHQubGFzdFRpY2s9dC5wYXJzZVRpbWUodC5vcHRpb25zLnRpbWUubWF4KSksdC5maXJzdFRpY2s9KHQuZmlyc3RUaWNrfHxpKCkpLmNsb25lKCksdC5sYXN0VGljaz0odC5sYXN0VGlja3x8aSgpKS5jbG9uZSgpfSxidWlsZExhYmVsRGlmZnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGFiZWxEaWZmcz1bXTt2YXIgYT1bXTt0LmNoYXJ0LmRhdGEubGFiZWxzJiZ0LmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD4wJiZlLmVhY2godC5jaGFydC5kYXRhLmxhYmVscyxmdW5jdGlvbihlKXt2YXIgaT10LnBhcnNlVGltZShlKTtpLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZpLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLGEucHVzaChpLmRpZmYodC5maXJzdFRpY2ssdC50aWNrVW5pdCwhMCkpKX0sdCksZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihpKXt2YXIgbj1bXTtcIm9iamVjdFwiPT10eXBlb2YgaS5kYXRhWzBdJiZudWxsIT09aS5kYXRhWzBdP2UuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSl7dmFyIGE9dC5wYXJzZVRpbWUodC5nZXRSaWdodFZhbHVlKGUpKTthLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZhLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLG4ucHVzaChhLmRpZmYodC5maXJzdFRpY2ssdC50aWNrVW5pdCwhMCkpKX0sdCk6bj1hLHQubGFiZWxEaWZmcy5wdXNoKG4pfSx0KX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5jdHguc2F2ZSgpO3ZhciBuPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRTaXplLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSksbz1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250U3R5bGUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTdHlsZSkscj1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250RmFtaWx5LHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5KSxsPWUuZm9udFN0cmluZyhuLG8scik7aWYoaS5jdHguZm9udD1sLGkudGlja3M9W10saS51bml0U2NhbGU9MSxpLnNjYWxlU2l6ZUluVW5pdHM9MCxpLm9wdGlvbnMudGltZS51bml0KWkudGlja1VuaXQ9aS5vcHRpb25zLnRpbWUudW5pdHx8XCJkYXlcIixpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbaS50aWNrVW5pdF0saS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSxpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSwxKTtlbHNle3ZhciBzPWkuaXNIb3Jpem9udGFsKCk/aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCk6aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtpLnBhZGRpbmdCb3R0b20pLGQ9aS50aWNrRm9ybWF0RnVuY3Rpb24oaS5maXJzdFRpY2ssMCxbXSksdT1pLmN0eC5tZWFzdXJlVGV4dChkKS53aWR0aCxjPU1hdGguY29zKGUudG9SYWRpYW5zKGkub3B0aW9ucy50aWNrcy5tYXhSb3RhdGlvbikpLGg9TWF0aC5zaW4oZS50b1JhZGlhbnMoaS5vcHRpb25zLnRpY2tzLm1heFJvdGF0aW9uKSk7dT11KmMrbipoO3ZhciBmPXMvdTtpLnRpY2tVbml0PWkub3B0aW9ucy50aW1lLm1pblVuaXQsaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSxpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbaS50aWNrVW5pdF07Zm9yKHZhciBnPTAscD1hLnVuaXRzW2ddO2c8YS51bml0cy5sZW5ndGg7KXtpZihpLnVuaXRTY2FsZT0xLGUuaXNBcnJheShwLnN0ZXBzKSYmTWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKTxlLm1heChwLnN0ZXBzKSl7Zm9yKHZhciBtPTA7bTxwLnN0ZXBzLmxlbmd0aDsrK20paWYocC5zdGVwc1ttXT49TWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKSl7aS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUscC5zdGVwc1ttXSk7YnJlYWt9YnJlYWt9aWYocC5tYXhTdGVwPT09ITF8fE1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZik8cC5tYXhTdGVwKXtpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSxNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpKTticmVha30rK2cscD1hLnVuaXRzW2ddLGkudGlja1VuaXQ9cC5uYW1lO3ZhciBiPWkuZmlyc3RUaWNrLmRpZmYoaS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKSxpLnRpY2tVbml0LCEwKSx2PWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrLmNsb25lKCkuYWRkKDEsaS50aWNrVW5pdCkpLmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKTtpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApK2IrdixpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbcC5uYW1lXX19dmFyIHg7aWYoaS5vcHRpb25zLnRpbWUubWluP3g9aS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKTooaS5maXJzdFRpY2s9aS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKSx4PWkuZmlyc3RUaWNrKSwhaS5vcHRpb25zLnRpbWUubWF4KXt2YXIgeT1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljayksaz15LmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKTswPms/aS5sYXN0VGljaz1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljay5hZGQoMSxpLnRpY2tVbml0KSk6az49MCYmKGkubGFzdFRpY2s9eSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKX1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0JiYoaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXQpLGkudGlja3MucHVzaChpLmZpcnN0VGljay5jbG9uZSgpKTtmb3IodmFyIFM9MTtTPD1pLnNjYWxlU2l6ZUluVW5pdHM7KytTKXt2YXIgdz14LmNsb25lKCkuYWRkKFMsaS50aWNrVW5pdCk7aWYoaS5vcHRpb25zLnRpbWUubWF4JiZ3LmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKT49MClicmVhaztTJWkudW5pdFNjYWxlPT09MCYmaS50aWNrcy5wdXNoKHcpfXZhciBNPWkudGlja3NbaS50aWNrcy5sZW5ndGgtMV0uZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQpOygwIT09TXx8MD09PWkuc2NhbGVTaXplSW5Vbml0cykmJihpLm9wdGlvbnMudGltZS5tYXg/KGkudGlja3MucHVzaChpLmxhc3RUaWNrLmNsb25lKCkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS50aWNrc1swXSxpLnRpY2tVbml0LCEwKSk6KGkudGlja3MucHVzaChpLmxhc3RUaWNrLmNsb25lKCkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkpKSxpLmN0eC5yZXN0b3JlKCksaS5sYWJlbERpZmZzPXZvaWQgMH0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LmRhdGEubGFiZWxzJiZ0PGEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoP2EuY2hhcnQuZGF0YS5sYWJlbHNbdF06XCJcIjtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYS5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbMF0mJihpPWEuZ2V0UmlnaHRWYWx1ZShhLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSkpLGEub3B0aW9ucy50aW1lLnRvb2x0aXBGb3JtYXQmJihpPWEucGFyc2VUaW1lKGkpLmZvcm1hdChhLm9wdGlvbnMudGltZS50b29sdGlwRm9ybWF0KSksaX0sdGlja0Zvcm1hdEZ1bmN0aW9uOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10LmZvcm1hdCh0aGlzLmRpc3BsYXlGb3JtYXQpLG89dGhpcy5vcHRpb25zLnRpY2tzLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmNhbGxiYWNrLG8udXNlckNhbGxiYWNrKTtyZXR1cm4gcj9yKG4sYSxpKTpufSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC50aWNrTW9tZW50cz10LnRpY2tzLHQudGlja3M9dC50aWNrcy5tYXAodC50aWNrRm9ybWF0RnVuY3Rpb24sdCl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1udWxsO2lmKHZvaWQgMCE9PWUmJnZvaWQgMCE9PWEmJihuPWkuZ2V0TGFiZWxEaWZmKGEsZSkpLG51bGw9PT1uJiYodCYmdC5pc1ZhbGlkfHwodD1pLnBhcnNlVGltZShpLmdldFJpZ2h0VmFsdWUodCkpKSx0JiZ0LmlzVmFsaWQmJnQuaXNWYWxpZCgpJiYobj10LmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkpKSxudWxsIT09bil7dmFyIG89MCE9PW4/bi9pLnNjYWxlU2l6ZUluVW5pdHM6bjtpZihpLmlzSG9yaXpvbnRhbCgpKXt2YXIgcj1pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSxsPXIqbytpLnBhZGRpbmdMZWZ0O3JldHVybiBpLmxlZnQrTWF0aC5yb3VuZChsKX12YXIgcz1pLmhlaWdodC0oaS5wYWRkaW5nVG9wK2kucGFkZGluZ0JvdHRvbSksZD1zKm8raS5wYWRkaW5nVG9wO3JldHVybiBpLnRvcCtNYXRoLnJvdW5kKGQpfX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrTW9tZW50c1t0XSxudWxsLG51bGwpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmlzSG9yaXpvbnRhbCgpP2Uud2lkdGgtKGUucGFkZGluZ0xlZnQrZS5wYWRkaW5nUmlnaHQpOmUuaGVpZ2h0LShlLnBhZGRpbmdUb3ArZS5wYWRkaW5nQm90dG9tKSxuPSh0LShlLmlzSG9yaXpvbnRhbCgpP2UubGVmdCtlLnBhZGRpbmdMZWZ0OmUudG9wK2UucGFkZGluZ1RvcCkpL2E7cmV0dXJuIG4qPWUuc2NhbGVTaXplSW5Vbml0cyxlLmZpcnN0VGljay5jbG9uZSgpLmFkZChpLmR1cmF0aW9uKG4sZS50aWNrVW5pdCkuYXNTZWNvbmRzKCksXCJzZWNvbmRzXCIpfSxwYXJzZVRpbWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5vcHRpb25zLnRpbWUucGFyc2VyP2kodCxlLm9wdGlvbnMudGltZS5wYXJzZXIpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub3B0aW9ucy50aW1lLnBhcnNlcj9lLm9wdGlvbnMudGltZS5wYXJzZXIodCk6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRNb250aHx8XCJudW1iZXJcIj09dHlwZW9mIHQ/aSh0KTp0LmlzVmFsaWQmJnQuaXNWYWxpZCgpP3Q6XCJzdHJpbmdcIiE9dHlwZW9mIGUub3B0aW9ucy50aW1lLmZvcm1hdCYmZS5vcHRpb25zLnRpbWUuZm9ybWF0LmNhbGw/KGNvbnNvbGUud2FybihcIm9wdGlvbnMudGltZS5mb3JtYXQgaXMgZGVwcmVjYXRlZCBhbmQgcmVwbGFjZWQgYnkgb3B0aW9ucy50aW1lLnBhcnNlci4gU2VlIGh0dHA6Ly9ubm5pY2suZ2l0aHViLmlvL0NoYXJ0LmpzL2RvY3MtdjIvI3NjYWxlcy10aW1lLXNjYWxlXCIpLGUub3B0aW9ucy50aW1lLmZvcm1hdCh0KSk6aSh0LGUub3B0aW9ucy50aW1lLmZvcm1hdCl9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJ0aW1lXCIsbyxuKX19LHsxOjF9XX0se30sWzddKSg3KX0pOyIsIi8vUGxhdGZvcm0gTG9nbydzXHJcbmZ1bmN0aW9uIFBsYXRmb3JtTG9nbyhwbGF0Zm9ybW5hYW0pXHJcbntcclxuICAgIHBsYXRmb3JtbmFhbSA9IHBsYXRmb3JtbmFhbS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgc3dpdGNoIChwbGF0Zm9ybW5hYW0pXHJcbiAgICB7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtbmFhbTtcclxuXHJcbiAgICAgICAgLy9wbGF0Zm9ybXMgLSBzcGVsY29tcHV0ZXJzXHJcbiAgICAgICAgY2FzZSBcIlBTMVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMxLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTM1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTMlwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMyLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTNFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHM0LnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBDXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy93aW5kb3dzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlhCT1ggT05FXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy94Ym94b25lLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5FU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmVzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk42NFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbjY0LnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIFNXSVRDSFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvc3dpdGNoLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIFdJSVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2lpLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIFdJSSBVXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy93aWl1LnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5HQ1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmdjLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkdBTUUgQk9ZXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9nYW1lYm95LnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIERTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uaW50ZW5kb2RzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkdCQVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvZ2JhLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlBTUFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHNwLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIDNEU1wiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmludGVuZG8zZHMucG5nJyBjbGFzcz0naGFzVG9vbHRpcCcgLz5cIjtcclxuXHJcbiAgICAgICAgLy9wdWJsaXNoZXJzIC0gdWl0Z2V2ZXJzXHJcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL25pbnRlbmRvLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlVCSVNPRlRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvdWJpc29mdC5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJFTEVDVFJPTklDIEFSVFNcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvZWEucG5nJyBjbGFzcz0naGFzVG9vbHRpcCcgLz5cIjtcclxuICAgICAgICBjYXNlIFwiU09OWVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9zb255LnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlJPQ0tTVEFSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3JvY2tzdGFyLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIlNFR0FcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc2VnYS5wbmcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgICAgIGNhc2UgXCJLT05BTUlcIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMva29uYW1pLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkFUTFVTXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL2F0bHVzLnBuZycgY2xhc3M9J2hhc1Rvb2x0aXAnIC8+XCI7XHJcbiAgICAgICAgY2FzZSBcIkFDVElWSVNJT05cIjpcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvYWN0aXZpc2lvbi5qcGcnIGNsYXNzPSdoYXNUb29sdGlwJyAvPlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBCZXNjaGlrYmFhcmhlaWRLbGV1cihzdG9ja3ZhbHVlKXtcclxuICAgIFxyXG4gICAgICAgIGlmIChzdG9ja3ZhbHVlPD0wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9ucmVkLnBuZycgLz5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0b2NrdmFsdWU+PTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2F2YWlsYWJpbGl0eS9idXR0b25ncmVlbi5wbmcnIC8+XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b2NrdmFsdWVcclxuICAgICAgICB9XHJcbn0iLCIkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYS5vcmRlcl9fbmF2aWdhdGVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpID09IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEdldCB0aGUgb3JkZXIgc3RlcFxyXG4gICAgICAgIHZhciBzdGVwID0gICQodGhpcykuZGF0YShcInN0ZXBcIik7XHJcblxyXG4gICAgICAgIC8vIFNldCB0aGUgbmV3IG9yZGVyIHN0ZXAgYXMgYWN0aXZlXHJcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaS5cIiArIHN0ZXApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI1wiICsgc3RlcCkuYWRkQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3Qjc2hpcHBpbmdfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxyXG57XHJcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcclxuXHJcbiAgICBpZiAodmFsICE9IFwiXCIpXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJChcIi5zaGlwcGluZ19fZmllbGRzXCIpLmhpZGUoKTtcclxuICAgICQoXCIuXCIgKyB2YWwgKyBcIl9maWVsZHNcIikuc2hvdygpO1xyXG59KVxyXG5cclxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3QjcGF5bWVudF9tZXRob2RcIiwgZnVuY3Rpb24gKGUpXHJcbntcclxuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG5cclxuICAgIGlmICh2YWwgIT0gXCJcIilcclxuICAgIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59KTsiLCJ2YXIgUm91dGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgYmFzZVVybCA9IFwicHJvamVjdC13ZWJzaG9wL1wiO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJvdXRlKHVybCwgaGlzdG9yeSlcclxuICAgIHtcclxuICAgICAgICBpZiAoaXNJbnRlcm5hbCh1cmwpID09IGZhbHNlIHx8IHVybCA9PSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyh1cmwpO1xyXG5cclxuICAgICAgICBzd2l0Y2gocGFydGljbGVzWzBdKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSBcIlwiOlxyXG4gICAgICAgICAgICBjYXNlIFwiaW5kZXguaHRtbFwiOlxyXG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdHNcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0c0NvbnRyb2xsZXIobmV3IFByb2R1Y3RzVmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdHNNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0Q29udHJvbGxlcihuZXcgUHJvZHVjdFZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IExvZ2luQ29udHJvbGxlcihuZXcgTG9naW5WaWV3SGVscGVyKCksIG5ldyBMb2dpbk1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgTG9nb3V0Q29udHJvbGxlcihuZXcgTG9nb3V0Vmlld0hlbHBlcigpLCBuZXcgTG9nb3V0TW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicmVzZXRwYXNzd29yZFwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKG5ldyBSZXNldFBhc3N3b3JkVmlld0hlbHBlcigpLCBuZXcgUmVzZXRQYXNzd29yZE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwid2lzaGxpc3RcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBXaXNobGlzdENvbnRyb2xsZXIobmV3IFdpc2hsaXN0Vmlld0hlbHBlcigpLCBuZXcgV2lzaGxpc3RNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgU3RhdHNDb250cm9sbGVyKG5ldyBTdGF0c1ZpZXdIZWxwZXIoKSwgbmV3IFN0YXRzTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pblwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluQ29udHJvbGxlcihuZXcgQWRtaW5WaWV3SGVscGVyKCksIG5ldyBBZG1pbk1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5fdXNlclwiOlxyXG4gICAgICAgICAgICAgICAgbmV3IEFkbWluVXNlckNvbnRyb2xsZXIobmV3IEFkbWluVXNlclZpZXdIZWxwZXIoKSwgbmV3IEFkbWluVXNlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVsaXN0XCI6IFxyXG4gICAgICAgICAgICAgICAgbmV3IEZhdm9yaXRlTGlzdENvbnRyb2xsZXIobmV3IEZhdm9yaXRlTGlzdFZpZXdIZWxwZXIoKSwgbmV3IEZhdm9yaXRlTGlzdE1vZGVsKCkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tvdXRcIjpcclxuICAgICAgICAgICAgICAgIG5ldyBDaGVja291dENvbnRyb2xsZXIobmV3IENoZWNrb3V0Vmlld0hlbHBlcigpLCBuZXcgQ2hlY2tvdXRNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyc1wiOlxyXG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyc0NvbnRyb2xsZXIobmV3IE9yZGVyc1ZpZXdIZWxwZXIsIG5ldyBPcmRlcnNNb2RlbCgpKS5tYWluKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIm9yZGVyXCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJDb250cm9sbGVyKG5ldyBPcmRlclZpZXdIZWxwZXIsIG5ldyBPcmRlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHVibGljX3dpc2hsaXN0XCI6XHJcbiAgICAgICAgICAgICAgICBuZXcgUHVibGljV2lzaGxpc3RDb250cm9sbGVyKG5ldyBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFB1YmxpY1dpc2hsaXN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh1cmwgIT0gXCJcIiAmJiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvYWQgc2NyZWVuIGFuZCBjbG9zZSBjYXJ0XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmxheS0tdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgICAgICAgICAgICAgIHNob3dMb2FkU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0b3Agb2YgcGFnZVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxyXG4gICAge1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJ3d3dcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJtYWlsdG9cIikgIT0gLTEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYXJ0aWNsZXModXJsKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgL1xyXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJhc2UgdXJsIHNldCwgcmVtb3ZlIHRoZSBiYXNlIHVybFxyXG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwgIT0gbnVsbCAmJiB1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICE9IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICsgdGhpcy5iYXNlVXJsLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9cXC8oLispPy8pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVIaXN0b3J5KG9iamVjdCwgdGl0bGUsIHVybClcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUob2JqZWN0LCB0aXRsZSwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHJvdXRlOiByb3V0ZVxyXG4gICAgfVxyXG59IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxyXG57XHJcbiAgICAkKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIElkIG9mIHRoZSBzaWRlYmFyIHRvIHRvZ2dsZVxyXG4gICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5kYXRhKFwic2lkZWJhclwiKTtcclxuXHJcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiI1wiICsgc2lkZWJhcikpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIi5zaWRlYmFyX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSk7XHJcbiAgICB9KVxyXG5cclxuICAgICQoXCIub3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIi5zaWRlYmFyXCIpLCB0cnVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoc2lkZWJhciwgZm9yY2VDbG9zZSlcclxuICAgIHtcclxuICAgICAgICBpZiAoZm9yY2VDbG9zZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoc2lkZWJhcikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpOyAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKHNpZGViYXIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XHJcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xyXG4gICAgfVxyXG59KTsiLCIkKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXJcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudClcclxue1xyXG4gICAgLy8gR2V0IGNvbnRlbnQgYW5kIHBvc2l0aW9uXHJcbiAgICB2YXIgY29udGVudCAgPSAkKHRoaXMpLmRhdGEoXCJ0b29sdGlwXCIpO1xyXG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0T2Zmc2V0KHRoaXMpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0b29sdGlwXHJcbiAgICB2YXIgdG9vbHRpcCA9ICQoXCI8ZGl2IGNsYXNzPSd0b29sdGlwJz5cIiArIGNvbnRlbnQgKyBcIjwvZGl2PlwiKTtcclxuICAgICQoXCJib2R5XCIpLmFwcGVuZCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uc1xyXG4gICAgcG9zaXRpb24udG9wICA9IHBvc2l0aW9uLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgIHBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgKCQodGhpcykub3V0ZXJXaWR0aCgpIC8gMikgLSAoJChcIi50b29sdGlwXCIpLm91dGVyV2lkdGgoKSAvIDIpO1xyXG5cclxuICAgIC8vIENoYW5nZSBwb3NpdGlvbiBvZiB0b29sdGlwXHJcbiAgICB0b29sdGlwLmNzcyhcImxlZnRcIiwgcG9zaXRpb24ubGVmdCk7XHJcbiAgICB0b29sdGlwLmNzcyhcInRvcFwiLCBwb3NpdGlvbi50b3ApO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKFwiYm9keVwiKS5maW5kKFwiLnRvb2x0aXBcIikucmVtb3ZlKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKVxyXG57XHJcbiAgICBlbCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGVsLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcclxuICAgICAgICB0b3A6IGVsLnRvcCArIHdpbmRvdy5zY3JvbGxZXHJcbiAgfVxyXG59IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgZmluZGluZywgY3JlYXRpbmcgYW5kIGRlbGV0aW5nIGNvb2tpZXNcclxuICovXHJcbmZ1bmN0aW9uIENvb2tpZUhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGUgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOYW1lIG9mIHRoZSBjb29raWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVmFsdWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmNyZWF0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTsgXHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDEqMjQqNjAqNjAqMTAwMCkpOyBcclxuICAgICAgICB2YXIgZXhwaXJlcyA9IFwiZXhwaXJlcz1cIisgZC50b1VUQ1N0cmluZygpOyBcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsnICsgZXhwaXJlcyArICc7cGF0aD0vJzsgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWxldGUgYSBjb29raWUgYW5kIGl0J3MgdmFsdWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB0aGlzLmRlbGV0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBGYXZvcml0ZUxpc3RIZWxwZXIoKVxyXG57XHJcbiAgICAvKipcclxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIC8vdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHZhciBhZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIGZhdm9yaWV0ZW4uXCIpOyAvLyBpbSBzdGFhdCB2b29yIGltYWdpbmFyeS9kZW5rYmVlbGRpZ1xyXG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW1cclxuICAgIH1cclxufSIsInZhciBSb3V0ZXIgICAgICAgPSBuZXcgUm91dGVyKCk7XHJcbnZhciBDb29raWVIZWxwZXIgPSBuZXcgQ29va2llSGVscGVyKCk7XHJcbnZhciBVc2VySGVscGVyICAgICA9IG5ldyBVc2VySGVscGVyKCk7XHJcbnZhciBXaXNobGlzdEhlbHBlciA9IG5ldyBXaXNobGlzdEhlbHBlcigpO1xyXG5cclxuZnVuY3Rpb24gc2hvd0xvYWRTY3JlZW4oKVxyXG57XHJcbiAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlM1wiPjwvZGl2PiA8L2Rpdj4nKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uTG9hZFBhZ2UoKVxyXG57XHJcbiAgICAkKFwiLm1tZW51XCIpLmVtcHR5KCk7XHJcbiAgICAkKFwiLm5hdlwiKS5jbG9uZSgpLmFwcGVuZFRvKFwiLm1tZW51XCIpO1xyXG5cclxuICAgIGlmIChVc2VySGVscGVyLmlzQWRtaW4oKSlcclxuICAgIHtcclxuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGVsc2VcclxuICAgIHtcclxuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxufSIsIiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICB2YXIgbyA9IHt9O1xyXG4gICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG87XHJcbn07IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgdXNlciByZWxhdGVkIHN0dWZmXHJcbiAqL1xyXG5mdW5jdGlvbiBVc2VySGVscGVyKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBhIGd1ZXN0IChub3QgbG9nZ2VkIGluKVxyXG4gICAgICovXHJcbiAgICB0aGlzLmlzTG9nZWRJbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhIGN1c3RvbWVyXHJcbiAgICAgKi9cclxuICAgIHRoaXMuaXNDdXN0b21lciA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImN1c3RvbWVyXCIgfHwgdXNlcnR5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhZG1pblxyXG4gICAgICovXHJcbiAgICB0aGlzLmlzQWRtaW4gPSBmdW5jdGlvbigpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgdXNlcnR5cGUgPSB0aGlzLmRlY29kZVRva2VuKCkudXNlcnR5cGU7XHJcblxyXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJhZG1pblwiKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVjb2RlIHRoZSBKV1QgdG9rZW5cclxuICAgICAqL1xyXG4gICAgdGhpcy5kZWNvZGVUb2tlbiA9IGZ1bmN0aW9uKClcclxuICAgIHtcclxuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xyXG5cclxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4gIT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VuICAhPSBcIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBhY2Nlc3NUb2tlbi5zcGxpdChcIi5cIilbMV07XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IHVzZXJcclxuICAgICAqL1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2xvZ2luXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBXaXNobGlzdEhlbHBlcigpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgZWFuX251bWJlcixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHt9KSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSGV0IHByb2R1Y3QgaXMgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIHZlcmxhbmdsaWpzdC5cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGl0IHByb2R1Y3Qgc3RhYXQgYWwgb3AgamUgdmVybGFuZ2xpanN0LlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwidmFyIEFkbWluVXNlck1vZGVsID0gZnVuY3Rpb24oaWQpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0YS5qYWFyLCBkYXRhLm1hYW5kLCBkYXRhLmRhZykpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxyXG4gICAgICAgIGRlbGV0ZSBkYXRhLmphYXI7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEubWFhbmQ7XHJcbiAgICAgICAgZGVsZXRlIGRhdGEuZGFnO1xyXG5cclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBkYXRhLnVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cclxuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZCwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgdXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZSxcclxuICAgICAgICBzYXZlVXNlckluZm86IHNhdmVVc2VySW5mbyxcclxuICAgICAgICBkZWxldGVVc2VyOiBkZWxldGVVc2VyXHJcbiAgICB9XHJcbn0iLCJ2YXIgQWRtaW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnNcIiwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxuXHJcbn07IiwidmFyIENhcnRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXNcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FydChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xyXG5cclxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KGlkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBpZCxcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShbY2FydF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0LnB1c2goY2FydCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVtb3ZlIGEgaXRlbSBmcm9tIHRoZSBjYXJ0XHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgY2FydCA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xyXG5cclxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKGNhcnRbaV0uZWFuX251bWJlciA9PSBpZClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FydC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q2FydDogZ2V0Q2FydCxcclxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxyXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q6IHJlbW92ZVByb2R1Y3RcclxuICAgIH1cclxufTsiLCJ2YXIgQ2hlY2tvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXJJbmZvcm1hdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoJ2NhcnQnKTtcclxuXHJcbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkICYmIGNhcnQgIT0gXCJcIilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVPcmRlcihvcmRlckRhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIEFwcGVuZCBkYXRhIGZvcm0gb3RoZXIgc291cmNlc1xyXG4gICAgICAgIG9yZGVyRGF0YS5zdGF0dXMgICAgICAgICA9IFwicGFpZFwiO1xyXG4gICAgICAgIG9yZGVyRGF0YS5idHdfcGVyY2VudGFnZSA9IDIxO1xyXG4gICAgICAgIG9yZGVyRGF0YS5vcmRlcl9kYXRlICAgICA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgb3JkZXJEYXRhLmRlbGl2ZXJ5X2Nvc3RzID0gMy45NTtcclxuICAgICAgICBvcmRlckRhdGEuY2FydCAgICAgICAgICAgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3JkZXJEYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImNhcnRcIik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGluZyB3ZW50IHdyb25nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVySW5mb3JtYXRpb246IGdldE9yZGVySW5mb3JtYXRpb24sXHJcbiAgICAgICAgc2F2ZU9yZGVyOiBzYXZlT3JkZXJcclxuICAgIH1cclxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdChjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCJcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRGYXZvcml0ZUxpc3QgYWpheCBkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1xyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTsgLy9tb2V0IGRhdGEgcGVyIHNlIG1lZWdldmVuIGFhbiBjYWxsYmFjaz9cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEZhdm9yaXRlTGlzdDogZ2V0RmF2b3JpdGVMaXN0LFxyXG4gICAgICAgIGRlbGV0ZUZyb21GYXZvcml0ZUxpc3Q6IGRlbGV0ZUZyb21GYXZvcml0ZUxpc3RcclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5Nb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCYXNpYyBcIiArIGJ0b2EoZW1haWwgKyBcIjpcIiArIHBhc3N3b3JkKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gcHV0IHRva2VuIGluIGNvb2tpZVxyXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwidXNlcl9pZFwiLCBkYXRhLnVzZXJfaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcclxuICAgICAgICAgICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaG93ICdub3QgZ29vZCBlbWFpbCBvciBwYXNzd29yZCB0byB1c2VyJ1xyXG4gICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmh0bWwoXCJlcnJvciBmdW5jdGlvblwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiBsb2dpblxyXG4gICAgfVxyXG59OyIsInZhciBMb2dvdXRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcclxuICAgICAgICBDb29raWVIZWxwZXIuZGVsZXRlQ29va2llKFwidXNlcl9pZFwiKTtcclxuXHJcbiAgICAgICAgLy8gJ3JlbG9hZCcgcGFnZVxyXG4gICAgICAgIG9uTG9hZFBhZ2UoKTtcclxuXHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dvdXQ6IGxvZ291dFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlcnNNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIG9yZGVyc1xyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE9yZGVyczogZ2V0T3JkZXJzLFxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlck1vZGVsID0gZnVuY3Rpb24ob3JkZXJfaWQpXHJcbntcclxuICAgIC8qKlxyXG4gICAgICogR2V0IGFsbCBvcmRlclxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPcmRlcihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvb3JkZXJzL1wiICsgb3JkZXJfaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlciwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXHJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XHJcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRPcmRlcjogZ2V0T3JkZXIsXHJcbiAgICAgICAgYWRkVG9GYXZvcml0ZUxpc3Q6IGFkZFRvRmF2b3JpdGVMaXN0XHJcbiAgICB9XHJcbn07IiwidmFyIFByb2R1Y3RzTW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbih1c2VyX2lkKVxyXG57XHJcbiAgICB0aGlzLmdldFB1YmxpY1dpc2hsaXN0ID0gZnVuY3Rpb24oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHVzZXJfaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyIsInZhciBSZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXHJcbiAgICAgICAgZm9ybURhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGZvcm1EYXRhLmphYXIsIGZvcm1EYXRhLm1hYW5kLCBmb3JtRGF0YS5kYWcpKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEuamFhcjtcclxuICAgICAgICBkZWxldGUgZm9ybURhdGEubWFhbmQ7XHJcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmRhZztcclxuXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIGVfbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSA6IGZvcm1EYXRhLnZvb3JuYWFtLFxyXG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uIDogZm9ybURhdGEudHVzc2Vudm9lZ3NlbCxcclxuICAgICAgICAgICAgICAgIHN1cm5hbWUgOiBmb3JtRGF0YS5hY2h0ZXJuYWFtLFxyXG4gICAgICAgICAgICAgICAgZ2VuZGVyIDogZm9ybURhdGEuZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aCA6IGZvcm1EYXRhLmJpcnRoX2RhdGUsXHJcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YS5tb2JpZWxfbnVtbWVyLFxyXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uIDogZm9ybURhdGEuc2VjdXJpdHlfcXVlc3Rpb24sXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxyXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBmb3JtRGF0YS5wb3N0Y29kZSxcclxuICAgICAgICAgICAgICAgIG51bWJlciA6IGZvcm1EYXRhLmh1aXNudW1tZXIsXHJcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXHJcbiAgICAgICAgICAgICAgICBjaXR5IDogZm9ybURhdGEucGxhYXRzXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRNb2RlbCA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChmb3JtRGF0YSwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcclxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgZW1haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcclxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXHJcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcclxuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXHJcbiAgICAgICAgICAgICAgICByZXBlYXRfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkMlxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzZXRwYXNzd29yZDogcmVzZXRwYXNzd29yZFxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXHJcbntcclxuICAgIGZ1bmN0aW9uIEdldFByb2R1Y3RJbmZvKGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGVhbixcclxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEdldFByb2R1Y3RJbmZvOiBHZXRQcm9kdWN0SW5mb1xyXG4gICAgfVxyXG59OyIsInZhciBTdGF0c01vZGVsID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEoY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3N0YXRzL3RvcGdhbWVzXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0R3JhcGhEYXRhOiBnZXRHcmFwaERhdGFcclxuICAgIH1cclxuXHJcbn07IiwidmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKHVzZXJpZClcclxue1xyXG4gICAgZnVuY3Rpb24gR2V0VXNlckluZm8oY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJzL1wiICsgdXNlcmlkLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgR2V0VXNlckluZm86IEdldFVzZXJJbmZvXHJcbiAgICB9XHJcbn07IiwidmFyIFdpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIGZ1bmN0aW9uIGdldFdpc2hsaXN0KGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdFwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRvV2lzaGxpc3Qodmlld0RhdGEsIGNhbGxiYWNrKVxyXG4gICAge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpIC8qKyBcIi9cIiArIHZpZXdEYXRhLmVhbl9udW1iZXIqLyxcclxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2lkIDogdmlld0RhdGEud2lzaGxpc3RfaWQsXHJcbiAgICAgICAgICAgICAgICAvL2Vhbl9udW1iZXIgOiB2aWV3RGF0YS5lYW5fbnVtYmVyXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIFN0cmluZyhlYW4pLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cywgY2FsbGJhY2spXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIGdvID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBuZXdEQlN0YXR1cyA9IFwiMFwiO1xyXG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT0gXCJwdWJsaWNcIil7XHJcbiAgICAgICAgICAgIG5ld0RCU3RhdHVzID0gXCIxXCI7XHJcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyA9PSBcInByaXZhdGVcIil7XHJcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXR1cyBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gbmV3U3RhdHVzID0gXCIgKyBuZXdTdGF0dXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdvKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9zd2l0Y2hfcHVibGljXCIsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBhdGNoXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wibmV3REJTdGF0dXNcIjpuZXdEQlN0YXR1c30pLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0V2lzaGxpc3Q6IGdldFdpc2hsaXN0LFxyXG4gICAgICAgIGFkZFRvV2lzaGxpc3Q6IGFkZFRvV2lzaGxpc3QsXHJcbiAgICAgICAgZGVsZXRlRnJvbVdpc2hsaXN0OiBkZWxldGVGcm9tV2lzaGxpc3QsXHJcbiAgICAgICAgc3dpdGNoUHVibGljU3RhdGU6IHN3aXRjaFB1YmxpY1N0YXRlXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgICAgIHZpZXdIZWxwZXIuc2V0U2F2ZUxpc3RlbmVyKHNhdmVVc2VySW5mbyk7XHJcbiAgICAgICAgdmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVVc2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpIFxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZVVzZXJJbmZvKGZvcm1EYXRhLCBmdW5jdGlvbihmb3JtRGF0YSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZWRlbGV0ZS5cIik7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEFkbWluQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTsgLy9cIlwiLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldENhcnQoKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldENhcnQoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFkZCBhIGl0ZW0gdG8gdGhlIGNhcnQgYW5kIHBhc3MgaXQgdG8gdGhlIHZpZXdIZWxwZXJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IGlkICBJdGVtIGlkXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuYWRkUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5hZGRJdGVtKGRhdGEpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5yZW1vdmVQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0Q2FydCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBZGRQcm9kdWN0TGlzdGVuZXIoYWRkUHJvZHVjdCk7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIENoZWNrb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJJbmZvcm1hdGlvbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3JkZXIoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcclxuXHJcbiAgICAgICAgTW9kZWwuc2F2ZU9yZGVyKGZvcm1EYXRhLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5maW5pc2hPcmRlcigpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLmNsZWFyQ2FydCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSA9PSBmYWxzZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9sb2dpblwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldE9yZGVyTGlzdGVuZXIob3JkZXIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgRGVsZXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXHJcbntcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIEZhdm9yaXRlTGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0RmF2b3JpdGVMaXN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZUZyb21GYXZvcml0ZUxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0RmF2b3JpdGVMaXN0KHNldFZpZXcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21GYXZvcml0ZUxpc3QoZWFuLCBmdW5jdGlvbigpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLmhpZGVJdGVtKGRpdl90b19oaWRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgTG9naW5Db250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xyXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXHJcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cclxuICAgICAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCJwcm9kdWN0c1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwubG9nb3V0KGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlcnNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRPcmRlcnMoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBPcmRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmdldE9yZGVyKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lcihhZGRUb0Zhdm9yaXRlTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlcilcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5hZGRUb0Zhdm9yaXRlTGlzdChlYW5fbnVtYmVyLCBmdW5jdGlvbiBvblN1Y2Nlc3MoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcclxuICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTtcclxuIiwidmFyIFByb2R1Y3RzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtIChwYWdlIHJlbG9hZClcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB2YXIgZmlsdGVycyA9ICQodGhpcykuc2VyaWFsaXplKCk7XHJcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RmlsdGVyTGlzdGVuZXIoZmlsdGVyUHJvZHVjdHMpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59OyIsInZhciBQdWJsaWNXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluIG1haW5cIik7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQdWJsaWNXaXNobGlzdCk7XHJcbiAgICAgICAgLy9WaWV3SGVscGVyLmdldFBhZ2UoZ2V0UHVibGljV2lzaGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFB1YmxpY1dpc2hsaXN0KClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRQdWJsaWNXaXNobGlzdChzZXRWaWV3KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWluOiBtYWluXHJcbiAgICB9XHJcbn07IiwidmFyIFJlZ2lzdGVyQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxyXG57XHJcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG4gICAgXHJcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXHJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxyXG4gICAge1xyXG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXHJcbiAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBmaXggZGF0ZSBvZiBiaXJ0aCAoQVBJIGV4cGVjdHMgY2VydGFpbiBmb3JtYXQpXHJcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcclxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcclxuXHJcbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxyXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcclxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcclxuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcclxuICAgICAgICB7IFxyXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZWdpc3Rlcihmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvYWZ0ZXJfcmVnaXN0ZXIuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygnL3ZpZXdzL3JlZ2lzdGVyL3JlZ2lzdGVyLmh0bWwnKTtcclxuXHJcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcclxuXHJcbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcclxuICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gcHV0IGZvcm0gZmllbGRzIGluIGphdmFzY3JpcHQgT2JqZWN0XHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcblxyXG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xyXG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxyXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XHJcblxyXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcclxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXHJcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xyXG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cclxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXHJcbiAgICAgICAgeyBcclxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcclxuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XHJcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxyXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcclxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvYWZ0ZXJfcmVzZXQuaHRtbCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxyXG4gICAgZnVuY3Rpb24gbWFpbigpXHJcbiAgICB7ICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcclxuXHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWFpbjogbWFpblxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XHJcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XHJcbiAgICBcclxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcclxuICAgIHtcclxuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXHJcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XHJcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcclxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxyXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFdlZXJnZWVmIGVlbiBhbmRlcmUgcGFnaW5hIGdlYmFzc2VlcmQgb3AgJ2FkbWluJyBvZiAncmVnaXN0ZXJlZCB1c2VyJ1xyXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxyXG4gICAgZnVuY3Rpb24gc2hvd1ZpZXcoZGF0YSlcclxuICAgIHtcclxuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XHJcbiAgICAgICAgLy8gMSkgdXNlciBjbGlja3Mgb24gYSBwcm9kdWN0IFxyXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxyXG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxyXG4gICAgICAgIC8vIDQpIHZpZXcgc2hvd3MgaW5mb1xyXG5cclxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcclxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcclxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRWaWV3KCk7XHJcblxyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xyXG4gICAgICAgIC8vVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW4sXHJcbiAgICAgICAgc2hvd1ZpZXcgOiBzaG93Vmlld1xyXG4gICAgfVxyXG59OyIsInZhciBTdGF0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcclxue1xyXG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcclxuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcclxuICAgIFxyXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXHJcbiAgICBmdW5jdGlvbiBtYWluKClcclxuICAgIHtcclxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEdyYXBoRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhEYXRhKClcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5nZXRHcmFwaERhdGEoc2V0VG9wVGVuVmlldyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5WaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRUb3BUZW5WaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCIiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXHJcbntcclxuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xyXG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xyXG5cclxuICAgIGZ1bmN0aW9uIG1haW4oKVxyXG4gICAge1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0V2lzaGxpc3QpO1xyXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbVdpc2hsaXN0KTtcclxuICAgICAgICBWaWV3SGVscGVyLnNldFB1YmxpY0xpc3RlbmVyKHN3aXRjaFB1YmxpY1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdCgpXHJcbiAgICB7XHJcbiAgICAgICAgTW9kZWwuZ2V0V2lzaGxpc3Qoc2V0Vmlldyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuaGlkZUl0ZW0oZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cylcclxuICAgIHtcclxuICAgICAgICBNb2RlbC5zd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1haW46IG1haW5cclxuICAgIH1cclxufTsiLCJ2YXIgQWRtaW5WaWV3SGVscGVyID0gZnVuY3Rpb24gKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciB1c2VyID0gJCgnI3NpbmdsZV91c2VyJykuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5odG1sKHZhbHVlLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5hdHRyKCdocmVmJywgJy9hZG1pbl91c2VyLycgKyB2YWx1ZS51c2VyX2lkKTtcclxuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19pbnNlcnRpb25cIikuaHRtbCh2YWx1ZS5pbnNlcnRpb24pO1xyXG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2xhc3RuYW1lXCIpLmh0bWwodmFsdWUuc3VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZW1haWxcIikuaHRtbCh2YWx1ZS5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fcGhvbmVudW1iZXJcIikuaHRtbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjdXNlcnNfYm9keVwiKS5hcHBlbmQodXNlcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3NpbmdsZV91c2VyXCIpLmZpcnN0KCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgIH1cclxufVxyXG5cclxuICAgIC8vZGF0IGhpZXJvbmRlciB6YXQgYWFyZGlnIHdhdCB3ZXJrIGluLi4uIERvbmFsZCB3aWwgbm9nIGZmIGhvdWRlblxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHNob3dVc2VycyhkYXRhKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAvLyAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWluL2FkbWluLmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciB0YWJsZSA9ICQoXCI8dGFibGUgaWQ9J3VzZXJzX3RhYmxlJz48L3RhYmxlPlwiKTtcclxuXHJcbiAgICAvLyAgICAgICAgIC8vIHRhYmxlIGhlYWRlclxyXG4gICAgLy8gICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZD5Wb29ybmFhbTwvdGQ+PHRkPlR1c3NlbnY8L3RkPjx0ZD5BY2h0ZXJuYWFtPC90ZD48dGQ+R2VicnVpa2Vyc25hYW08L3RkPjx0ZD5lbWFpbDwvdGQ+PHRkPnR5cGU8L3RkPicpO1xyXG5cclxuICAgIC8vICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XHJcbiAgICAvLyAgICAgICAgICAgICAkLmVhY2godXNlciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikuaHRtbChTdHJpbmcodmFsdWUpKSApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpICk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gLy9mb3IgYWRkaXRpb25hbCB1c2VyIGluZm8gaWYgY2xpY2tlZFxyXG4gICAgLy8gICAgICAgICAgICAgLy8gcm93ID0gJCgnPGRpdiBjbGFzcz1cInRvYmV0YWJsZVwiPjwvZGl2PicpO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdGFibGUuYXBwZW5kKHJvdyk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAkKCcjdXNlcnMnKS5hcHBlbmQodGFibGUpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIHB1dEluZm9Jbkh0bWwoY2xpY2tlZCwgZGF0YSlcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZygnaW4gcHV0SW5mb0luSHRtbCgpJyk7XHJcbiAgICAvLyAgICAgLy8gc2hvdyBpbmZvIG9mIHRoZSByaWdodCB1c2VyIChpZiBub3QgYWxyZWFkeSBzaG93aW5nIGl0KVxyXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgYXMgdGFibGUgaGVhZGVyXHJcbiAgICAvLyAgICAgdmFyIGhlYWRlcnJvdyA9ICQoJzx0cj48L3RyPicpLmFwcGVuZCgnPHRkPnd3PC90ZD48dGQ+Z2VibG9ra2VlcmQ8L3RkPjx0ZD5pZDwvdGQ+PHRkPmdlbmRlcjwvdGQ+PHRkPmdlYm9vcnRlZGF0dW08L3RkPjx0ZD52cmFhZzwvdGQ+PHRkPmFudHdvb3JkPC90ZD4nKTtcclxuXHJcbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyB3aXRoIHRlIHVzZXJpbmZvXHJcbiAgICAvLyAgICAgdmFyIGluZm9yb3cgPSAkKCc8dHI+PC90cj4nKTtcclxuXHJcbiAgICAvLyAgICAgdmFyIGNvdW50ID0gMDtcclxuICAgIC8vICAgICAkLmVhY2goZGF0YVswXSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7IC8vIGdlYmxva2tlZXJkXHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodmFsdWUgPT0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ25lZSc7XHJcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDApIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdqYSdcclxuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnZGIgZm91dD8nXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcclxuICAgIC8vICAgICAgICAgdmFyIHRkID0gJCgnPHRkPjwvdGQ+JykuYXBwZW5kKHZhbHVlKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCdrZXksIHZhbHVlOiAnICsga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgLy8gICAgICAgICBpbmZvcm93LmFwcGVuZCh0ZCk7XHJcblxyXG4gICAgLy8gICAgICAgICBjb3VudCArPSAxO1xyXG4gICAgLy8gICAgIH0pXHJcblxyXG4gICAgLy8gICAgIGluZm9yb3cuaW5zZXJ0QWZ0ZXIoICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSApO1xyXG4gICAgLy8gICAgIGhlYWRlcnJvdy5pbnNlcnRBZnRlcigkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykpO1xyXG4gICAgLy8gfVxyXG5cclxuIiwidmFyIEFkbWluVXNlclZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxyXG57XHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIC8vcHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW51c2VyL2FkbWludXNlci5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS51c2VyX2lkKSAgIFxyXG4gICAgICAgICAgICAkKFwiI2ZpcnN0X25hbWVcIikudmFsKHZhbHVlLmZpcnN0X25hbWUpO1xyXG4gICAgICAgICAgICAkKFwiI2luc2VydGlvblwiKS52YWwodmFsdWUuaW5zZXJ0aW9uKTtcclxuICAgICAgICAgICAgJChcIiNzdXJuYW1lXCIpLnZhbCh2YWx1ZS5zdXJuYW1lKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX3R5cGVcIikudmFsKHZhbHVlLnVzZXJfdHlwZSk7XHJcbiAgICAgICAgICAgICQoXCIjZW1haWxcIikudmFsKHZhbHVlLmVtYWlsKTtcclxuICAgICAgICAgICAgJChcIiNwYXNzd29yZFwiKS5hdHRyKCdwbGFjZWhvbGRlcicsICdWdWwgaGllciBpZXRzIGluIG9tIGhldCB3YWNodHdvb3JkIHRlIHZlcmFuZGVyZW4nKTtcclxuICAgICAgICAgICAgJChcIiNnZW5kZXJcIikudmFsKHZhbHVlLmdlbmRlcik7XHJcbiAgICAgICAgICAgICQoXCIjZGF0ZV9vZl9iaXJ0aFwiKS52YWwodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XHJcbiAgICAgICAgICAgICQoXCIjcGhvbmVfbnVtYmVyXCIpLnZhbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAkKFwiI2lzX2FjdGl2ZVwiKS52YWwodmFsdWUuaXNfYWN0aXZlKTtcclxuICAgICAgICAgICAgJChcIiN1c2VyX2lkXCIpLnZhbCh2YWx1ZS51c2VyX2lkKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB0b2RheSAgICAgICA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRlT2ZCaXJ0aCA9IG5ldyBEYXRlKHZhbHVlLmRhdGVfb2ZfYmlydGgpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGkgPSAxOyBpIDwgMzI7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgdG9kYXkuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJChcIiNtYWFuZFwiKS52YWwoZGF0ZU9mQmlydGguZ2V0TW9udGgoKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTYXZlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnI3VzZXJmb3JtJywgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCAnI2RlbGV0ZV9idG4nLCBmdW5jdGlvbiAoZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgYWN0aW9uKCQodGhpcykuZGF0YShcImlkXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldFNhdmVMaXN0ZW5lcjogc2V0U2F2ZUxpc3RlbmVyLFxyXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lclxyXG4gICAgfVxyXG59IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2aWV3RGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsUHJpY2UgIFRvdGFsIHByaWNlIG9mIHRoZSBjYXJ0XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXHJcbiAgICB7XHJcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XHJcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYWtlIG5ldyBjYXJ0IGl0ZW0gdmlzaWFibGUgaW4gdGhlIERPTVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBjYXJ0SXRlbSA9ICQoJzxkaXY+JykuaHRtbCgkKCcuc2lkZWJhcl9fY29udGVudF9fdG1wJykuaHRtbCgpKTtcclxuXHJcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbChcIuKCrFwiICsgaXRlbS5wcmljZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xyXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXHJcblxyXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgYW1vdW50IG9mIGl0ZW1zXHJcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcclxuXHJcbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkIHRoZSBjYXJ0IHdoZW4gdGhlIHBhZ2UgaXMgIHJlYXNlXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFRvQ2FydClcclxuICAgIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgIGFkZFRvQ2FydChwcm9kdWN0X2lkKTtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTGlzdGVuZXIgZm9yIHJlbW92ZSBhIHByb2R1Y3QgZnJvbSB0aGUgRE9NIGNhcnRcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xyXG4gICAgICAgICAgICB2YXIgY2FydGl0ZW0gICA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgcHJvZHVjdCBmcm9tIERPTSBjYXJ0XHJcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcclxuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIERlY3Jlc2UgY291bnRcclxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcclxuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXHJcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtLFxyXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldEFkZFByb2R1Y3RMaXN0ZW5lcjogc2V0QWRkUHJvZHVjdExpc3RlbmVyLFxyXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcclxuICAgIH1cclxufTsiLCJ2YXIgQ2hlY2tvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQmVzdGVsbGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2NoZWNrb3V0L2NoZWNrb3V0Lmh0bWwnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXJ0IGNvbnRlbnRcclxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJfaW5mbyAub3JkZXJfX25hdmlnYXRlXCIpLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XHJcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcclxuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gU2V0IGRlbGl2ZXJ5IGRhdGUgKHdlIGFsd2F5cyBkZWxpdmVyIGluIG9uZSBkYXkpXHJcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XHJcblxyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X2RhdGVcIikuaHRtbCh0b2RheS5nZXREYXRlKCkgKyBcIiBcIiArIHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pKTtcclxuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fZGF5XCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcclxuICAgICAgICAgICAgVXNlckhlbHBlci5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19uYW1lXCIpLmh0bWwodXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmluc2VydGlvbiArIFwiIFwiICsgdXNlci5zdXJuYW1lKTtcclxuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fcG9zdGFsY29kZVwiKS5odG1sKHVzZXIuYWRkcmVzcy5wb3N0YWxfY29kZSArIFwiIFwiICsgdXNlci5hZGRyZXNzLmNpdHkudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcclxuICAgIGZ1bmN0aW9uIGZpbmlzaE9yZGVyKClcclxuICAgIHtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpIGFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcclxuICAgICAgICAkKFwiI2NvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2xlYXIgdGhlIHZpc2libGUgY2FydFxyXG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcclxuICAgIHtcclxuICAgICAgICAkKFwiLmNhcnRcIikuZW1wdHkoKTtcclxuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcclxuICAgICAgICAkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKFwi4oKsMDAuMDBcIilcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbmZpcm0gdGhlIG9yZGVyIHdoZW4gc2JtaXR0aW5nIHRoZSBmb3JtXHJcbiAgICBmdW5jdGlvbiBzZXRPcmRlckxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIiNvcmRlcmZvcm1cIiwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRPcmRlckxpc3RlbmVyOiBzZXRPcmRlckxpc3RlbmVyLFxyXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcclxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydFxyXG4gICAgfVxyXG59OyIsInZhciBFcnJvclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIEZhdm9yaXRlTGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkZhdm9yaWV0ZW5saWpzdCAtIEFaIEdhbWVzXCI7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cImZhdm9yaXRlbGlzdFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBsb2FkRmF2b3JpdGVsaXN0KHZpZXdEYXRhKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGxvYWRGYXZvcml0ZWxpc3Qodmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNmYXZvcml0ZWxpc3RcIikubG9hZCgnL3ZpZXdzL2Zhdm9yaXRlbGlzdC9mYXZvcml0ZWxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIGZhdm9yaXRlbGlzdCBpdGVtcyB0byBodG1sXHJcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIGZhdm9yaXRlX19saXN0X19pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI2Zhdm9yaXRlX19saXN0X19pdGVtJykuY2xvbmUoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKyAxO1xyXG5cclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlX19saXN0XCIpLmFwcGVuZChmYXZvcml0ZV9fbGlzdF9faXRlbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZmF2b3JpdGVsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjZmF2b3JpdGVfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2V0RGVsZXRlTGlzdGVuZXIoKVwiKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIGVhbiA9ICQodGhpcykuZGF0YShcImlkXCIpO1xyXG4gICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xyXG4gICAgICAgICAgICBhY3Rpb24oZWFuLCBkaXZfdG9faGlkZSk7XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxyXG4gICAge1xyXG4gICAgICAgIGRpdl90b19oaWRlLmZhZGVUbygyMDAsIDApLnNsaWRlVXAoMjAwKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdDogbG9hZEZhdm9yaXRlbGlzdCxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxyXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbVxyXG4gICAgfVxyXG59IiwidmFyIFN0YXRzVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXHJcbntcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VG9wVGVuVmlldyhncmFwaERhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZ3JhcGhEYXRhKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJTdGF0cyAtIEFaIEdhbWVzXCI7XHJcblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9ncmFwaHMvZ3JhcGhzLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cclxuICAgICAgICAgICAgdmFyIGxhYmVscyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgdmFyIGdhbWVDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBsYXN0X3JhbmtfbnVtID0gMDsgLy9hc3N1bWluZyB2YWx1ZS5yYW5rIGlzIG5ldmVyIDAhXHJcbiAgICAgICAgICAgIHZhciBoaWdoZXN0VmFsID0gMDtcclxuXHJcbiAgICAgICAgICAgICQuZWFjaChncmFwaERhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGdhbWVDb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ291bnQgPCAxMSB8fCB2YWx1ZS5yYW5rID09IGxhc3RfcmFua19udW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbHMucHVzaCh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHZhbHVlLnVzZXJfY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lQ291bnQgPT0gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9yYW5rX251bSA9IHZhbHVlLnJhbms7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhYmVscyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsID0gJChcIiNncmFwaF9fdG9wdGVuaXRlbXNfX2NudnNcIik7XHJcbiAgICAgICAgICAgIHZhciBUb3BUZW5DaGFydCA9IG5ldyBDaGFydChlbCwge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ2hvcml6b250YWxCYXInLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDIwMCwgMjYsIDEpJywgLy9ncm9lblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTWVlc3QgdmVya29jaHRlIGdhbWVzXCIgLy8gbmVlZCBpbiBqYW51YXJpLCBpbiBmZWJydWFyaSwgZXRjLlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5QXhlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4Um90YXRpb246IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pblJvdGF0aW9uOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAvLyBwdXQgZGVzY2lwdGlvbiBiZWxvdyBncmFwaFxyXG4gICAgICAgICAgICB2YXIgZGVzY3IgPSAnRGV6ZSBncmFmaWVrIGxhYXQgZGUgZ2FtZXMgemllbiBtZXQgaGV0IG1lZXN0ZSBhYW50YWwgZ2VicnVpa2VycyBkYXQgZGUgZ2FtZSAxIG9mIG1lZXIga2VlciBoZWVmdCBnZWtvY2h0IGluIGRlIGdla296ZW4gdGlqZHNwZXJpb2RlLic7XHJcblxyXG4gICAgICAgICAgICB2YXIgdGhlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbl9fdG9wdGVuXCIpO1xyXG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyKTsgXHJcbiAgICAgICAgICAgIHRoZURpdi5hcHBlbmRDaGlsZChjb250ZW50KTsgXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxyXG4gICAgICAgIHNldFRvcFRlblZpZXc6IHNldFRvcFRlblZpZXcsXHJcbiAgICB9XHJcbn0iLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ2luL2xvZ2luLmh0bWwnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGxvZ2luIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ2xvZ2luJywgcGVyZm9ybSBhY3Rpb24gKG1ha2UgY29udHJvbGxlciBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUEkpXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgTG9nb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcob3JkZXIpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVyL29yZGVyLmh0bWwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8gRGF0ZVxyXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gRm9ybWF0IHNoaXBwaW5nIG1ldGhvZFxyXG4gICAgICAgICAgICBzd2l0Y2gob3JkZXIuc2hpcHBpbmdfbWV0aG9kKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVsaXZlclwiOlxyXG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicGlja3VwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEZpbGwgb3JkZXIgaW5mb1xyXG4gICAgICAgICAgICAkKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fcGF5bWVudG1ldGhvZFwiKS5odG1sKG9yZGVyLnBheW1lbnRfbWV0aG9kKTtcclxuICAgICAgICAgICAgJChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwob3JkZXIuc2hpcHBpbmdfbWV0aG9kKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0c1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXIucHJvZHVjdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19hbW91bnRcIikuaHRtbChcIjxiPkFhbnRhbDo8L2I+IFwiICsgdmFsdWUuYW1vdW50KVxyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIuYWRkVG9GYXZvcml0ZXNCdXR0b25cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8aHIgLz5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxyXG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCBhbmQgbW92ZSB0b3RhbCBwcmljZSB0byBlbmQgb2YgbGlzdFxyXG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XHJcbiAgICAgICAgICAgICQoXCIudG90YWxfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBvcmRlci50b3RhbF9vcmRlcl9wcmljZSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiLmFkZFRvRmF2b3JpdGVzQnV0dG9uXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcclxuICAgICAgICAgICAgYWN0aW9uKGVhbik7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyOiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIE9yZGVyc1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcnMpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVycy9vcmRlcnMuaHRtbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkLmVhY2gob3JkZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XHJcbiAgICAgICAgICAgICAgICB2YXIgb3JkZXIgPSAkKCcjc2luZ2xlX29yZGVyJykuY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEYXRlXHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlLm9yZGVyX2RhdGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcclxuICAgICAgICAgICAgICAgIHN3aXRjaCh2YWx1ZS5zaGlwcGluZ19tZXRob2QpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2hpcHBpbmdfbWV0aG9kID0gXCJCZXpvcmdlbiAodmlhIFBvc3ROTClcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zaGlwcGluZ19tZXRob2QgPSBcIk9waGFsZW5cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX251bWJlclwiKS5odG1sKHZhbHVlLm9yZGVyX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyB2YWx1ZS50b3RhbF9vcmRlcl9wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwodmFsdWUucGF5bWVudF9tZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwodmFsdWUuc2hpcHBpbmdfbWV0aG9kKTtcclxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX2xpbmsgYVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9vcmRlci9cIiArIHZhbHVlLm9yZGVyX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNvcmRlcnNfYm9keVwiKS5hcHBlbmQob3JkZXIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcclxuICAgICAgICAgICAgJChcIiNzaW5nbGVfb3JkZXJcIikuZmlyc3QoKS5yZW1vdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59OyIsInZhciBQcm9kdWN0c1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcclxuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcclxuICAgICAgICAkKFwiI2ZpbHRlcnNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL2ZpbHRlcnMuaHRtbCcpO1xyXG5cclxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXHJcbiAgICAgICAgbG9hZFByb2R1Y3RzKHZpZXdEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHJvZHVjdHModmlld0RhdGEpXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxyXG4gICAgICAgICAgICAkLmVhY2godmlld0RhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcclxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3N1YnRpdGxlXCIpLmFwcGVuZCh2YWx1ZS5nZW5yZSArKFwiIHwgUEVHSSBcIikgKyB2YWx1ZS5wZWdpX2FnZSArKFwiIHwgXCIpKyBQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiI2J1dHRvbnNfX2luZm8sIC5wcm9kdWN0X19pbWFnZSBhLCAucHJvZHVjdF9fdGl0bGVcIikuYXR0cihcImhyZWZcIiwgXCJwcm9kdWN0L1wiICsgdmFsdWUuZWFuX251bWJlcik7XHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fc3VidGl0bGUgaW1nXCIpLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiwgU3RyaW5nKHZhbHVlLnBsYXRmb3JtKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vU2hvdyBtb3JlL2xlc3NcclxuICAgIGZ1bmN0aW9uIEN1dFN0cmluZyh0ZXh0KXtcclxuICAgICAgICB2YXIgU2hvd0Ftb3VudCA9IDUwO1xyXG4gICAgICAgIHZhciBXb3Jkc0FycmF5ID0gdGV4dC5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgaWYoV29yZHNBcnJheS5sZW5ndGg+U2hvd0Ftb3VudCl7XHJcbiAgICAgICAgICAgIHZhciBTaG9ydFN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcihpPTA7IGk8U2hvd0Ftb3VudDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIFNob3J0U3RyaW5nICs9IFdvcmRzQXJyYXlbaV0gKyBcIiBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gU2hvcnRTdHJpbmcrXCIuLi5cIjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEZpbHRlckxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAgLy8gSGllciBoZXQgZm9ybXVsaWVyIHZlcnN0dXJlbiBhbHMgd2Ugb3AgZWVuIGNoZWNrYm94IGRydWtrZW5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9maWx0ZXJcIikuc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBkZSBwcm9kdWN0ZW5saWpzdCBhbHMgZWVuIHdhYXJkZSBpbiBkZSBzbGlkZXIgdmVyYW5kZXJkKGFsbGUgbWFuaWVyZW4pXHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2Uga2V5dXBcIiwgXCJpbnB1dFtuYW1lPXByaWNlLW1heF0sIGlucHV0W25hbWU9cHJpY2UtbWluXVwiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZigkKFwiI3ByaWNlbWluXCIpLnZhbCgpID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcHJpY2VtaW5cIikudmFsKDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNwcm9kdWN0X2ZpbHRlclwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBsb2FkUHJvZHVjdHM6IGxvYWRQcm9kdWN0cyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0RmlsdGVyTGlzdGVuZXI6IHNldEZpbHRlckxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKSAvLyBoZWIgZGUgJCBlcmJpaiBnZXpldC4gaW50ZXJuZXQgaGFkIGhldCBkYWFyb3ZlciAoemllIG9uZGVyc3RhYW5kZSBjb21tZW50IG9vaylcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxyXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2aWV3RGF0YSlcclxuICAgICAgICBpZiAodmlld0RhdGEubGVuZ3RoID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiRXJyb3IgLSBBWiBHYW1lc1wiXHJcbiAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmlld0RhdGEubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMSl7XHJcbiAgICAgICAgICAgICAgICBsb2FkUHVibGljV2lzaGxpc3Qodmlld0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9PSAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiRXJyb3IgLSBBWiBHYW1lc1wiXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0uaXNfcHVibGljIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGFbMF0uaXNfcHVibGljID0gXCIgKyB2aWV3RGF0YVswXS5pc19wdWJsaWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0ubGVuZ3RoIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGEubGVuZ3RoID0gXCIgKyB2aWV3RGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkUHVibGljV2lzaGxpc3QoZGF0YSlcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVmVybGFuZ2xpanN0IFwiICsgZGF0YVswXS5maXJzdF9uYW1lICsgXCIgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJwdWJsaWNfd2lzaGxpc3RcIj48L2Rpdj4nKTtcclxuXHJcbiAgICAgICAgJChcIiNwdWJsaWNfd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3B1YmxpY193aXNobGlzdC9wdWJsaWNfd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAkKFwiI3B1YmxpY19fd2lzaGxpc3RfX2hlYWRlclwiKS5odG1sKFwiVmVybGFuZ2xpanN0IHZhbiBcIiArIGRhdGFbMF0uZmlyc3RfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHdpc2hsaXN0X2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCggJCgnI3dpc2hfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpICk7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VycmVudCsrO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fbGlrZWJ1dHRvblwiKS5hcHBlbmQoKTtcclxuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2l0ZW0uYXBwZW5kVG8oJChcIiN3aXNoX19saXN0XCIpKTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBsb2FkUHVibGljV2lzaGxpc3Q6IGxvYWRQdWJsaWNXaXNobGlzdCxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxuXHJcblxyXG59IiwidmFyIFJlZ2lzdGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcclxuICAgICAgICBcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3csIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IGRhdGUuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gMjAwMClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxyXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXHJcblxyXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3JlZ2lzdGVyZm9ybVwiLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxyXG57XHJcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcclxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcclxuICAgIHtcclxuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcclxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcclxuICAgIH1cclxufTtcclxuXHJcbi8qXHJcbnZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xyXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxyXG4gICAge1xyXG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxyXG4gICAgfVxyXG59O1xyXG4qLyIsInZhciBQcm9kdWN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHByb2R1Y3QpXHJcbiAgICB7XHJcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xyXG5cclxuICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3NpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0Lmh0bWwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X190aXRsZVwiKS5odG1sKHByb2R1Y3QudGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2VhblwiKS5hcHBlbmQocHJvZHVjdC5lYW5fbnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnBsYXRmb3JtKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucHVibGlzaGVyKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BlZ2lcIikuYXBwZW5kKHByb2R1Y3QucGVnaV9hZ2UpO1xyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgICAgICQoXCIuYWRkdG9jYXJ0XCIpLmF0dHIoXCJkYXRhLWlkXCIsIHByb2R1Y3QuZWFuX251bWJlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wdWJsaXNoZXIgaW1nXCIpLmF0dHIoXCJkYXRhLXRvb2x0aXBcIiwgU3RyaW5nKHByb2R1Y3QucHVibGlzaGVyKSk7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3BsYXRmb3JtIGltZ1wiKS5hdHRyKFwiZGF0YS10b29sdGlwXCIsIFN0cmluZyhwcm9kdWN0LnBsYXRmb3JtKSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5hdHRyKFwib25jbGlja1wiLCBcIldpc2hsaXN0SGVscGVyLmFkZEl0ZW0oXCIgKyBwcm9kdWN0LmVhbl9udW1iZXIgKyBcIik7XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG1vbnRocyA9IFtcImphbnVhcmlcIiwgXCJmZWJydWFyaVwiLCBcIm1hYXJ0XCIsIFwiYXByaWxcIiwgXCJtZWlcIiwgXCJqdW5pXCIsIFwianVsaVwiLCBcImF1Z3VzdHVzXCIsIFwic2VwdGVtYmVyXCIsIFwib2t0b2JlclwiLCBcIm5vdmVtYmVyXCIsIFwiZGVjZW1iZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cclxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xyXG5cclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXHJcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXHJcbiAgICB9XHJcbn07IiwidmFyIFdpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcclxue1xyXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXHJcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxyXG4gICAge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgc2V0Vmlld1wiKTtcclxuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2lzaGxpc3QgLSBBWiBHYW1lc1wiO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCIgaWQ9XCJ3aXNobGlzdFwiPjwvZGl2PjwvZGl2PicpO1xyXG5cclxuICAgICAgICBsb2FkV2lzaGxpc3Qodmlld0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRXaXNobGlzdCh2aWV3RGF0YSlcclxuICAgIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIGxvYWRXaXNoTGlzdFwiKTtcclxuICAgICAgICAkKFwiI3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy93aXNobGlzdC93aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgd2lzaGxpc3QgaXRlbXMgdG8gaHRtbFxyXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XHJcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgdmFyIHdpc2hfX2xpc3RfX2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjd2lzaF9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cclxuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsxXHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faWRcIikuYXBwZW5kKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XHJcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2F2YWlsYWJpbGl0eVwiKS5hcHBlbmQoQmVzY2hpa2JhYXJoZWlkS2xldXIodmFsdWUuc3RvY2spKTtcclxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuYXR0cihcImhyZWZcIiwgXCIvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3NoYXJlX19idG5cIikuYXR0cihcImhyZWZcIiwgXCJtYWlsdG86P3N1YmplY3Q9TWlqbiB2ZXJsYW5nbGlqc3Qgb3AgQVotR2FtZXMubmwhJmJvZHk9QmVraWprIG1pam4gdmVybGFuZ2xpanN0IG9wOiBodHRwOi8vYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7IC8vIENIRUNLIERJUyFcclxuICAgICAgICAgICAgICAgICQoXCIjY2xpcGJvYXJkX19idG5cIikuYXR0cihcImhyZWZcIiwgXCIvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmFwcGVuZCh3aXNoX19saXN0X19pdGVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0b3JcIikudmFsKFwicHJpdmF0ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNfcHVibGljID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdG9yXCIpLnZhbChcInB1YmxpY1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWUgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIHZhbHVlID0gXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBbHMgZXIgZ2VlbiBpdGVtcyBpbiB3aXNobGlzdCBzdGFhbiwgZGFuIGhpZGUgZGUgdm9sZ2VuZGUgZGl2cy5cclxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcclxuICAgICAgICAgICAgICAgICQoXCIjd2lzaGxpc3RfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY19fcmVsYXRlZFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XHJcbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXHJcbiAgICB7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCBcIiNkZWxldGVfYnRuXCIsIGZ1bmN0aW9uKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAoISQoJyNkZWxldGVfYnRuJykuaGFzQ2xhc3MoXCJidG4tLXByZXNzZWRcIikpe1xyXG4gICAgICAgICAgICAgICAgJChcIiNkZWxldGVfYnRuXCIpLmFkZENsYXNzKFwiYnRuLS1wcmVzc2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFB1YmxpY0xpc3RlbmVyKGFjdGlvbilcclxuICAgIHtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZVwiLCBcIiNwdWJsaWNhdG9yXCIsIGZ1bmN0aW9uKClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpO1xyXG4gICAgICAgICAgICBhY3Rpb24odGhpcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW0oZGl2X3RvX2hpZGUpXHJcbiAgICB7XHJcbiAgICAgICAgZGl2X3RvX2hpZGUuZmFkZVRvKDIwMCwgMCkuc2xpZGVVcCgyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dFeGFtcGxlQnV0dG9uKG5ld1N0YXR1cylcclxuICAgIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdTdGF0dXMpO1xyXG5cclxuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpIHtcclxuICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiLnNoYXJlX19idG5cIikuc2hvdygpO1xyXG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyA9PSBcInByaXZhdGVcIikge1xyXG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuY2xpcGJvYXJkX19idG5cIikuaGlkZSgpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge2NvbnNvbGUubG9nKFwidW5leHBlY3RlZCBuZXdTdGF0dXMgdmFsdWUsIHZhbHVlID0gXCIrbmV3U3RhdHVzKX1cclxuXHJcblxyXG4gICAgICAgICQoXCIjZXhhbXBsZV9fYnRuX19kaXZcIikuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIE9wZW5TbWFsbE1haWxXaW5kb3codXJsLCB3aW5kb3dOYW1lLCBmZWF0dXJlcylcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cub3Blbih1cmwsIHdpbmRvd05hbWUsIGZlYXR1cmVzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxyXG4gICAgICAgIGxvYWRXaXNobGlzdDogbG9hZFdpc2hsaXN0LFxyXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcclxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXIsXHJcbiAgICAgICAgc2V0UHVibGljTGlzdGVuZXI6IHNldFB1YmxpY0xpc3RlbmVyLFxyXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbSxcclxuICAgICAgICBzaG93RXhhbXBsZUJ1dHRvbjogc2hvd0V4YW1wbGVCdXR0b25cclxuICAgIH1cclxufSJdfQ==
