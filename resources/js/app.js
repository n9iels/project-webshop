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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbl9tb2RlbC5qcyIsImFkbWludXNlcl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImZhdm9yaXRlbGlzdF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJvcmRlcnNfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwic3RhdHNfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiYWRtaW51c2VyX2NvbnRyb2xsZXIuanMiLCJjYXJ0X2NvbnRyb2xsZXIuanMiLCJjaGVja291dF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwiZmF2b3JpdGVsaXN0X2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJvcmRlcl9jb250cm9sbGVyLmpzIiwib3JkZXJzX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicHVibGljX3dpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsInN0YXRzX2NvbnRyb2xsZXIuanMiLCJ1c2VyX2NvbnRyb2xsZXIuanMiLCJ3aXNobGlzdF9jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW5fdmlldy5qcyIsImFkbWludXNlci9hZG1pbnVzZXJfdmlldy5qcyIsImNhcnQvY2FydF92aWV3LmpzIiwiZXJyb3IvZXJyb3Jfdmlldy5qcyIsImNoZWNrb3V0L2NoZWNrb3V0X3ZpZXcuanMiLCJmYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0X3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXJzL29yZGVyc192aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwid2lzaGxpc3Qvd2lzaGxpc3Rfdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5QkE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBDaGFydC5qc1xuICogaHR0cDovL2NoYXJ0anMub3JnL1xuICogVmVyc2lvbjogMi40LjBcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNiBOaWNrIERvd25pZVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcnRqcy9DaGFydC5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cbiFmdW5jdGlvbih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIGU7ZT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsZS5DaGFydD10KCl9fShmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbiB0KGUsYSxpKXtmdW5jdGlvbiBuKHIsbCl7aWYoIWFbcl0pe2lmKCFlW3JdKXt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFsJiZzKXJldHVybiBzKHIsITApO2lmKG8pcmV0dXJuIG8ociwhMCk7dmFyIGQ9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIityK1wiJ1wiKTt0aHJvdyBkLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZH12YXIgdT1hW3JdPXtleHBvcnRzOnt9fTtlW3JdWzBdLmNhbGwodS5leHBvcnRzLGZ1bmN0aW9uKHQpe3ZhciBhPWVbcl1bMV1bdF07cmV0dXJuIG4oYT9hOnQpfSx1LHUuZXhwb3J0cyx0LGUsYSxpKX1yZXR1cm4gYVtyXS5leHBvcnRzfWZvcih2YXIgbz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLHI9MDtyPGkubGVuZ3RoO3IrKyluKGlbcl0pO3JldHVybiBufSh7MTpbZnVuY3Rpb24odCxlLGEpe30se31dLDI6W2Z1bmN0aW9uKHQsZSxhKXtmdW5jdGlvbiBpKHQpe2lmKHQpe3ZhciBlPS9eIyhbYS1mQS1GMC05XXszfSkkLyxhPS9eIyhbYS1mQS1GMC05XXs2fSkkLyxpPS9ecmdiYT9cXChcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLG49L15yZ2JhP1xcKFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sbz0vKFxcdyspLyxyPVswLDAsMF0sbD0xLHM9dC5tYXRjaChlKTtpZihzKXtzPXNbMV07Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzW2RdK3NbZF0sMTYpfWVsc2UgaWYocz10Lm1hdGNoKGEpKXtzPXNbMV07Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzLnNsaWNlKDIqZCwyKmQrMiksMTYpfWVsc2UgaWYocz10Lm1hdGNoKGkpKXtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHNbZCsxXSk7bD1wYXJzZUZsb2F0KHNbNF0pfWVsc2UgaWYocz10Lm1hdGNoKG4pKXtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPU1hdGgucm91bmQoMi41NSpwYXJzZUZsb2F0KHNbZCsxXSkpO2w9cGFyc2VGbG9hdChzWzRdKX1lbHNlIGlmKHM9dC5tYXRjaChvKSl7aWYoXCJ0cmFuc3BhcmVudFwiPT1zWzFdKXJldHVyblswLDAsMCwwXTtpZihyPXlbc1sxXV0sIXIpcmV0dXJufWZvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09dihyW2RdLDAsMjU1KTtyZXR1cm4gbD1sfHwwPT1sP3YobCwwLDEpOjEsclszXT1sLHJ9fWZ1bmN0aW9uIG4odCl7aWYodCl7dmFyIGU9L15oc2xhP1xcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvLGE9dC5tYXRjaChlKTtpZihhKXt2YXIgaT1wYXJzZUZsb2F0KGFbNF0pLG49dihwYXJzZUludChhWzFdKSwwLDM2MCksbz12KHBhcnNlRmxvYXQoYVsyXSksMCwxMDApLHI9dihwYXJzZUZsb2F0KGFbM10pLDAsMTAwKSxsPXYoaXNOYU4oaSk/MTppLDAsMSk7cmV0dXJuW24sbyxyLGxdfX19ZnVuY3Rpb24gbyh0KXtpZih0KXt2YXIgZT0vXmh3YlxcKFxccyooWystXT9cXGQrKSg/OmRlZyk/XFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkvLGE9dC5tYXRjaChlKTtpZihhKXt2YXIgaT1wYXJzZUZsb2F0KGFbNF0pLG49dihwYXJzZUludChhWzFdKSwwLDM2MCksbz12KHBhcnNlRmxvYXQoYVsyXSksMCwxMDApLHI9dihwYXJzZUZsb2F0KGFbM10pLDAsMTAwKSxsPXYoaXNOYU4oaSk/MTppLDAsMSk7cmV0dXJuW24sbyxyLGxdfX19ZnVuY3Rpb24gcih0KXt2YXIgZT1pKHQpO3JldHVybiBlJiZlLnNsaWNlKDAsMyl9ZnVuY3Rpb24gbCh0KXt2YXIgZT1uKHQpO3JldHVybiBlJiZlLnNsaWNlKDAsMyl9ZnVuY3Rpb24gcyh0KXt2YXIgZT1pKHQpO3JldHVybiBlP2VbM106KGU9bih0KSk/ZVszXTooZT1vKHQpKT9lWzNdOnZvaWQgMH1mdW5jdGlvbiBkKHQpe3JldHVyblwiI1wiK3godFswXSkreCh0WzFdKSt4KHRbMl0pfWZ1bmN0aW9uIHUodCxlKXtyZXR1cm4gMT5lfHx0WzNdJiZ0WzNdPDE/Yyh0LGUpOlwicmdiKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIsIFwiK3RbMl0rXCIpXCJ9ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJyZ2JhKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIsIFwiK3RbMl0rXCIsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gaCh0LGUpe2lmKDE+ZXx8dFszXSYmdFszXTwxKXJldHVybiBmKHQsZSk7dmFyIGE9TWF0aC5yb3VuZCh0WzBdLzI1NSoxMDApLGk9TWF0aC5yb3VuZCh0WzFdLzI1NSoxMDApLG49TWF0aC5yb3VuZCh0WzJdLzI1NSoxMDApO3JldHVyblwicmdiKFwiK2ErXCIlLCBcIitpK1wiJSwgXCIrbitcIiUpXCJ9ZnVuY3Rpb24gZih0LGUpe3ZhciBhPU1hdGgucm91bmQodFswXS8yNTUqMTAwKSxpPU1hdGgucm91bmQodFsxXS8yNTUqMTAwKSxuPU1hdGgucm91bmQodFsyXS8yNTUqMTAwKTtyZXR1cm5cInJnYmEoXCIrYStcIiUsIFwiK2krXCIlLCBcIituK1wiJSwgXCIrKGV8fHRbM118fDEpK1wiKVwifWZ1bmN0aW9uIGcodCxlKXtyZXR1cm4gMT5lfHx0WzNdJiZ0WzNdPDE/cCh0LGUpOlwiaHNsKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJSlcIn1mdW5jdGlvbiBwKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcImhzbGEoXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlLCBcIitlK1wiKVwifWZ1bmN0aW9uIG0odCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwiaHdiKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJVwiKyh2b2lkIDAhPT1lJiYxIT09ZT9cIiwgXCIrZTpcIlwiKStcIilcIn1mdW5jdGlvbiBiKHQpe3JldHVybiBrW3Quc2xpY2UoMCwzKV19ZnVuY3Rpb24gdih0LGUsYSl7cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGUsdCksYSl9ZnVuY3Rpb24geCh0KXt2YXIgZT10LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO3JldHVybiBlLmxlbmd0aDwyP1wiMFwiK2U6ZX12YXIgeT10KDYpO2UuZXhwb3J0cz17Z2V0UmdiYTppLGdldEhzbGE6bixnZXRSZ2I6cixnZXRIc2w6bCxnZXRId2I6byxnZXRBbHBoYTpzLGhleFN0cmluZzpkLHJnYlN0cmluZzp1LHJnYmFTdHJpbmc6YyxwZXJjZW50U3RyaW5nOmgscGVyY2VudGFTdHJpbmc6Zixoc2xTdHJpbmc6Zyxoc2xhU3RyaW5nOnAsaHdiU3RyaW5nOm0sa2V5d29yZDpifTt2YXIgaz17fTtmb3IodmFyIFMgaW4geSlrW3lbU11dPVN9LHs2OjZ9XSwzOltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCg1KSxuPXQoMiksbz1mdW5jdGlvbih0KXtpZih0IGluc3RhbmNlb2YgbylyZXR1cm4gdDtpZighKHRoaXMgaW5zdGFuY2VvZiBvKSlyZXR1cm4gbmV3IG8odCk7dGhpcy52YWx1ZXM9e3JnYjpbMCwwLDBdLGhzbDpbMCwwLDBdLGhzdjpbMCwwLDBdLGh3YjpbMCwwLDBdLGNteWs6WzAsMCwwLDBdLGFscGhhOjF9O3ZhciBlO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KWlmKGU9bi5nZXRSZ2JhKHQpKXRoaXMuc2V0VmFsdWVzKFwicmdiXCIsZSk7ZWxzZSBpZihlPW4uZ2V0SHNsYSh0KSl0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpO2Vsc2V7aWYoIShlPW4uZ2V0SHdiKHQpKSl0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIHN0cmluZyBcIicrdCsnXCInKTt0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIHQpaWYoZT10LHZvaWQgMCE9PWUucnx8dm9pZCAwIT09ZS5yZWQpdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUubHx8dm9pZCAwIT09ZS5saWdodG5lc3MpdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUudnx8dm9pZCAwIT09ZS52YWx1ZSl0aGlzLnNldFZhbHVlcyhcImhzdlwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS53fHx2b2lkIDAhPT1lLndoaXRlbmVzcyl0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpO2Vsc2V7aWYodm9pZCAwPT09ZS5jJiZ2b2lkIDA9PT1lLmN5YW4pdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gb2JqZWN0IFwiK0pTT04uc3RyaW5naWZ5KHQpKTt0aGlzLnNldFZhbHVlcyhcImNteWtcIixlKX19O28ucHJvdG90eXBlPXtyZ2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcInJnYlwiLGFyZ3VtZW50cyl9LGhzbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHNsXCIsYXJndW1lbnRzKX0saHN2OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc3ZcIixhcmd1bWVudHMpfSxod2I6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImh3YlwiLGFyZ3VtZW50cyl9LGNteWs6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImNteWtcIixhcmd1bWVudHMpfSxyZ2JBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5yZ2J9LGhzbEFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmhzbH0saHN2QXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuaHN2fSxod2JBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiAxIT09dC5hbHBoYT90Lmh3Yi5jb25jYXQoW3QuYWxwaGFdKTp0Lmh3Yn0sY215a0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmNteWt9LHJnYmFBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiB0LnJnYi5jb25jYXQoW3QuYWxwaGFdKX0saHNsYUFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIHQuaHNsLmNvbmNhdChbdC5hbHBoYV0pfSxhbHBoYTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dD90aGlzLnZhbHVlcy5hbHBoYToodGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLHQpLHRoaXMpfSxyZWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDAsdCl9LGdyZWVuOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwxLHQpfSxibHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwyLHQpfSxodWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQmJih0JT0zNjAsdD0wPnQ/MzYwK3Q6dCksdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMCx0KX0sc2F0dXJhdGlvbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMSx0KX0sbGlnaHRuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwyLHQpfSxzYXR1cmF0aW9udjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsMSx0KX0sd2hpdGVuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwxLHQpfSxibGFja25lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLDIsdCl9LHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwyLHQpfSxjeWFuOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMCx0KX0sbWFnZW50YTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDEsdCl9LHllbGxvdzpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDIsdCl9LGJsYWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMyx0KX0saGV4U3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaGV4U3RyaW5nKHRoaXMudmFsdWVzLnJnYil9LHJnYlN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnJnYlN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxyZ2JhU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucmdiYVN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxwZXJjZW50U3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGVyY2VudFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxoc2xTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oc2xTdHJpbmcodGhpcy52YWx1ZXMuaHNsLHRoaXMudmFsdWVzLmFscGhhKX0saHNsYVN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhzbGFTdHJpbmcodGhpcy52YWx1ZXMuaHNsLHRoaXMudmFsdWVzLmFscGhhKX0saHdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHdiU3RyaW5nKHRoaXMudmFsdWVzLmh3Yix0aGlzLnZhbHVlcy5hbHBoYSl9LGtleXdvcmQ6ZnVuY3Rpb24oKXtyZXR1cm4gbi5rZXl3b3JkKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHJnYk51bWJlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYjtyZXR1cm4gdFswXTw8MTZ8dFsxXTw8OHx0WzJdfSxsdW1pbm9zaXR5OmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMudmFsdWVzLnJnYixlPVtdLGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIGk9dFthXS8yNTU7ZVthXT0uMDM5Mjg+PWk/aS8xMi45MjpNYXRoLnBvdygoaSsuMDU1KS8xLjA1NSwyLjQpfXJldHVybi4yMTI2KmVbMF0rLjcxNTIqZVsxXSsuMDcyMiplWzJdfSxjb250cmFzdDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmx1bWlub3NpdHkoKSxhPXQubHVtaW5vc2l0eSgpO3JldHVybiBlPmE/KGUrLjA1KS8oYSsuMDUpOihhKy4wNSkvKGUrLjA1KX0sbGV2ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb250cmFzdCh0KTtyZXR1cm4gZT49Ny4xP1wiQUFBXCI6ZT49NC41P1wiQUFcIjpcIlwifSxkYXJrOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9KDI5OSp0WzBdKzU4Nyp0WzFdKzExNCp0WzJdKS8xZTM7cmV0dXJuIDEyOD5lfSxsaWdodDpmdW5jdGlvbigpe3JldHVybiF0aGlzLmRhcmsoKX0sbmVnYXRlOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDszPmU7ZSsrKXRbZV09MjU1LXRoaXMudmFsdWVzLnJnYltlXTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIix0KSx0aGlzfSxsaWdodGVuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsyXSs9ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sZGFya2VuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsyXS09ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sc2F0dXJhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzFdKz1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxkZXNhdHVyYXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsxXS09ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sd2hpdGVuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmh3YjtyZXR1cm4gZVsxXSs9ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSksdGhpc30sYmxhY2tlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5od2I7cmV0dXJuIGVbMl0rPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpLHRoaXN9LGdyZXlzY2FsZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYixlPS4zKnRbMF0rLjU5KnRbMV0rLjExKnRbMl07cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsW2UsZSxlXSksdGhpc30sY2xlYXJlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5hbHBoYTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLGUtZSp0KSx0aGlzfSxvcGFxdWVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmFscGhhO3JldHVybiB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsZStlKnQpLHRoaXN9LHJvdGF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2wsYT0oZVswXSt0KSUzNjA7cmV0dXJuIGVbMF09MD5hPzM2MCthOmEsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxtaXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9dCxuPXZvaWQgMD09PWU/LjU6ZSxvPTIqbi0xLHI9YS5hbHBoYSgpLWkuYWxwaGEoKSxsPSgobypyPT09LTE/bzoobytyKS8oMStvKnIpKSsxKS8yLHM9MS1sO3JldHVybiB0aGlzLnJnYihsKmEucmVkKCkrcyppLnJlZCgpLGwqYS5ncmVlbigpK3MqaS5ncmVlbigpLGwqYS5ibHVlKCkrcyppLmJsdWUoKSkuYWxwaGEoYS5hbHBoYSgpKm4raS5hbHBoYSgpKigxLW4pKX0sdG9KU09OOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmdiKCl9LGNsb25lOmZ1bmN0aW9uKCl7dmFyIHQsZSxhPW5ldyBvLGk9dGhpcy52YWx1ZXMsbj1hLnZhbHVlcztmb3IodmFyIHIgaW4gaSlpLmhhc093blByb3BlcnR5KHIpJiYodD1pW3JdLGU9e30udG9TdHJpbmcuY2FsbCh0KSxcIltvYmplY3QgQXJyYXldXCI9PT1lP25bcl09dC5zbGljZSgwKTpcIltvYmplY3QgTnVtYmVyXVwiPT09ZT9uW3JdPXQ6Y29uc29sZS5lcnJvcihcInVuZXhwZWN0ZWQgY29sb3IgdmFsdWU6XCIsdCkpO3JldHVybiBhfX0sby5wcm90b3R5cGUuc3BhY2VzPXtyZ2I6W1wicmVkXCIsXCJncmVlblwiLFwiYmx1ZVwiXSxoc2w6W1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJsaWdodG5lc3NcIl0saHN2OltcImh1ZVwiLFwic2F0dXJhdGlvblwiLFwidmFsdWVcIl0saHdiOltcImh1ZVwiLFwid2hpdGVuZXNzXCIsXCJibGFja25lc3NcIl0sY215azpbXCJjeWFuXCIsXCJtYWdlbnRhXCIsXCJ5ZWxsb3dcIixcImJsYWNrXCJdfSxvLnByb3RvdHlwZS5tYXhlcz17cmdiOlsyNTUsMjU1LDI1NV0saHNsOlszNjAsMTAwLDEwMF0saHN2OlszNjAsMTAwLDEwMF0saHdiOlszNjAsMTAwLDEwMF0sY215azpbMTAwLDEwMCwxMDAsMTAwXX0sby5wcm90b3R5cGUuZ2V0VmFsdWVzPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnZhbHVlcyxhPXt9LGk9MDtpPHQubGVuZ3RoO2krKylhW3QuY2hhckF0KGkpXT1lW3RdW2ldO3JldHVybiAxIT09ZS5hbHBoYSYmKGEuYT1lLmFscGhhKSxhfSxvLnByb3RvdHlwZS5zZXRWYWx1ZXM9ZnVuY3Rpb24odCxlKXt2YXIgYSxuPXRoaXMudmFsdWVzLG89dGhpcy5zcGFjZXMscj10aGlzLm1heGVzLGw9MTtpZihcImFscGhhXCI9PT10KWw9ZTtlbHNlIGlmKGUubGVuZ3RoKW5bdF09ZS5zbGljZSgwLHQubGVuZ3RoKSxsPWVbdC5sZW5ndGhdO2Vsc2UgaWYodm9pZCAwIT09ZVt0LmNoYXJBdCgwKV0pe2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspblt0XVthXT1lW3QuY2hhckF0KGEpXTtsPWUuYX1lbHNlIGlmKHZvaWQgMCE9PWVbb1t0XVswXV0pe3ZhciBzPW9bdF07Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyluW3RdW2FdPWVbc1thXV07bD1lLmFscGhhfWlmKG4uYWxwaGE9TWF0aC5tYXgoMCxNYXRoLm1pbigxLHZvaWQgMD09PWw/bi5hbHBoYTpsKSksXCJhbHBoYVwiPT09dClyZXR1cm4hMTt2YXIgZDtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKWQ9TWF0aC5tYXgoMCxNYXRoLm1pbihyW3RdW2FdLG5bdF1bYV0pKSxuW3RdW2FdPU1hdGgucm91bmQoZCk7Zm9yKHZhciB1IGluIG8pdSE9PXQmJihuW3VdPWlbdF1bdV0oblt0XSkpO3JldHVybiEwfSxvLnByb3RvdHlwZS5zZXRTcGFjZT1mdW5jdGlvbih0LGUpe3ZhciBhPWVbMF07cmV0dXJuIHZvaWQgMD09PWE/dGhpcy5nZXRWYWx1ZXModCk6KFwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSksdGhpcy5zZXRWYWx1ZXModCxhKSx0aGlzKX0sby5wcm90b3R5cGUuc2V0Q2hhbm5lbD1mdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcy52YWx1ZXNbdF07cmV0dXJuIHZvaWQgMD09PWE/aVtlXTphPT09aVtlXT90aGlzOihpW2VdPWEsdGhpcy5zZXRWYWx1ZXModCxpKSx0aGlzKX0sXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKHdpbmRvdy5Db2xvcj1vKSxlLmV4cG9ydHM9b30sezI6Miw1OjV9XSw0OltmdW5jdGlvbih0LGUsYSl7ZnVuY3Rpb24gaSh0KXt2YXIgZSxhLGksbj10WzBdLzI1NSxvPXRbMV0vMjU1LHI9dFsyXS8yNTUsbD1NYXRoLm1pbihuLG8scikscz1NYXRoLm1heChuLG8sciksZD1zLWw7cmV0dXJuIHM9PWw/ZT0wOm49PXM/ZT0oby1yKS9kOm89PXM/ZT0yKyhyLW4pL2Q6cj09cyYmKGU9NCsobi1vKS9kKSxlPU1hdGgubWluKDYwKmUsMzYwKSwwPmUmJihlKz0zNjApLGk9KGwrcykvMixhPXM9PWw/MDouNT49aT9kLyhzK2wpOmQvKDItcy1sKSxbZSwxMDAqYSwxMDAqaV19ZnVuY3Rpb24gbih0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl0sbD1NYXRoLm1pbihuLG8scikscz1NYXRoLm1heChuLG8sciksZD1zLWw7cmV0dXJuIGE9MD09cz8wOmQvcyoxZTMvMTAscz09bD9lPTA6bj09cz9lPShvLXIpL2Q6bz09cz9lPTIrKHItbikvZDpyPT1zJiYoZT00KyhuLW8pL2QpLGU9TWF0aC5taW4oNjAqZSwzNjApLDA+ZSYmKGUrPTM2MCksaT1zLzI1NSoxZTMvMTAsW2UsYSxpXX1mdW5jdGlvbiBvKHQpe3ZhciBlPXRbMF0sYT10WzFdLG49dFsyXSxvPWkodClbMF0scj0xLzI1NSpNYXRoLm1pbihlLE1hdGgubWluKGEsbikpLG49MS0xLzI1NSpNYXRoLm1heChlLE1hdGgubWF4KGEsbikpO3JldHVybltvLDEwMCpyLDEwMCpuXX1mdW5jdGlvbiBsKHQpe3ZhciBlLGEsaSxuLG89dFswXS8yNTUscj10WzFdLzI1NSxsPXRbMl0vMjU1O3JldHVybiBuPU1hdGgubWluKDEtbywxLXIsMS1sKSxlPSgxLW8tbikvKDEtbil8fDAsYT0oMS1yLW4pLygxLW4pfHwwLGk9KDEtbC1uKS8oMS1uKXx8MCxbMTAwKmUsMTAwKmEsMTAwKmksMTAwKm5dfWZ1bmN0aW9uIHModCl7cmV0dXJuIEdbSlNPTi5zdHJpbmdpZnkodCldfWZ1bmN0aW9uIGQodCl7dmFyIGU9dFswXS8yNTUsYT10WzFdLzI1NSxpPXRbMl0vMjU1O2U9ZT4uMDQwNDU/TWF0aC5wb3coKGUrLjA1NSkvMS4wNTUsMi40KTplLzEyLjkyLGE9YT4uMDQwNDU/TWF0aC5wb3coKGErLjA1NSkvMS4wNTUsMi40KTphLzEyLjkyLGk9aT4uMDQwNDU/TWF0aC5wb3coKGkrLjA1NSkvMS4wNTUsMi40KTppLzEyLjkyO3ZhciBuPS40MTI0KmUrLjM1NzYqYSsuMTgwNSppLG89LjIxMjYqZSsuNzE1MiphKy4wNzIyKmkscj0uMDE5MyplKy4xMTkyKmErLjk1MDUqaTtyZXR1cm5bMTAwKm4sMTAwKm8sMTAwKnJdfWZ1bmN0aW9uIHUodCl7dmFyIGUsYSxpLG49ZCh0KSxvPW5bMF0scj1uWzFdLGw9blsyXTtyZXR1cm4gby89OTUuMDQ3LHIvPTEwMCxsLz0xMDguODgzLG89bz4uMDA4ODU2P01hdGgucG93KG8sMS8zKTo3Ljc4NypvKzE2LzExNixyPXI+LjAwODg1Nj9NYXRoLnBvdyhyLDEvMyk6Ny43ODcqcisxNi8xMTYsbD1sPi4wMDg4NTY/TWF0aC5wb3cobCwxLzMpOjcuNzg3KmwrMTYvMTE2LGU9MTE2KnItMTYsYT01MDAqKG8tciksaT0yMDAqKHItbCksW2UsYSxpXX1mdW5jdGlvbiBjKHQpe3JldHVybiBXKHUodCkpfWZ1bmN0aW9uIGgodCl7dmFyIGUsYSxpLG4sbyxyPXRbMF0vMzYwLGw9dFsxXS8xMDAscz10WzJdLzEwMDtpZigwPT1sKXJldHVybiBvPTI1NSpzLFtvLG8sb107YT0uNT5zP3MqKDErbCk6cytsLXMqbCxlPTIqcy1hLG49WzAsMCwwXTtmb3IodmFyIGQ9MDszPmQ7ZCsrKWk9cisxLzMqLShkLTEpLDA+aSYmaSsrLGk+MSYmaS0tLG89MT42Kmk/ZSs2KihhLWUpKmk6MT4yKmk/YToyPjMqaT9lKyhhLWUpKigyLzMtaSkqNjplLG5bZF09MjU1Km87cmV0dXJuIG59ZnVuY3Rpb24gZih0KXt2YXIgZSxhLGk9dFswXSxuPXRbMV0vMTAwLG89dFsyXS8xMDA7cmV0dXJuIDA9PT1vP1swLDAsMF06KG8qPTIsbio9MT49bz9vOjItbyxhPShvK24pLzIsZT0yKm4vKG8rbiksW2ksMTAwKmUsMTAwKmFdKX1mdW5jdGlvbiBwKHQpe3JldHVybiBvKGgodCkpfWZ1bmN0aW9uIG0odCl7cmV0dXJuIGwoaCh0KSl9ZnVuY3Rpb24gdih0KXtyZXR1cm4gcyhoKHQpKX1mdW5jdGlvbiB4KHQpe3ZhciBlPXRbMF0vNjAsYT10WzFdLzEwMCxpPXRbMl0vMTAwLG49TWF0aC5mbG9vcihlKSU2LG89ZS1NYXRoLmZsb29yKGUpLHI9MjU1KmkqKDEtYSksbD0yNTUqaSooMS1hKm8pLHM9MjU1KmkqKDEtYSooMS1vKSksaT0yNTUqaTtzd2l0Y2gobil7Y2FzZSAwOnJldHVybltpLHMscl07Y2FzZSAxOnJldHVybltsLGkscl07Y2FzZSAyOnJldHVybltyLGksc107Y2FzZSAzOnJldHVybltyLGwsaV07Y2FzZSA0OnJldHVybltzLHIsaV07Y2FzZSA1OnJldHVybltpLHIsbF19fWZ1bmN0aW9uIHkodCl7dmFyIGUsYSxpPXRbMF0sbj10WzFdLzEwMCxvPXRbMl0vMTAwO3JldHVybiBhPSgyLW4pKm8sZT1uKm8sZS89MT49YT9hOjItYSxlPWV8fDAsYS89MixbaSwxMDAqZSwxMDAqYV19ZnVuY3Rpb24gayh0KXtyZXR1cm4gbyh4KHQpKX1mdW5jdGlvbiBTKHQpe3JldHVybiBsKHgodCkpfWZ1bmN0aW9uIHcodCl7cmV0dXJuIHMoeCh0KSl9ZnVuY3Rpb24gTSh0KXt2YXIgZSxhLGksbixvPXRbMF0vMzYwLGw9dFsxXS8xMDAscz10WzJdLzEwMCxkPWwrcztzd2l0Y2goZD4xJiYobC89ZCxzLz1kKSxlPU1hdGguZmxvb3IoNipvKSxhPTEtcyxpPTYqby1lLDAhPSgxJmUpJiYoaT0xLWkpLG49bCtpKihhLWwpLGUpe2RlZmF1bHQ6Y2FzZSA2OmNhc2UgMDpyPWEsZz1uLGI9bDticmVhaztjYXNlIDE6cj1uLGc9YSxiPWw7YnJlYWs7Y2FzZSAyOnI9bCxnPWEsYj1uO2JyZWFrO2Nhc2UgMzpyPWwsZz1uLGI9YTticmVhaztjYXNlIDQ6cj1uLGc9bCxiPWE7YnJlYWs7Y2FzZSA1OnI9YSxnPWwsYj1ufXJldHVyblsyNTUqciwyNTUqZywyNTUqYl19ZnVuY3Rpb24gQyh0KXtyZXR1cm4gaShNKHQpKX1mdW5jdGlvbiBEKHQpe3JldHVybiBuKE0odCkpfWZ1bmN0aW9uIEkodCl7cmV0dXJuIGwoTSh0KSl9ZnVuY3Rpb24gQSh0KXtyZXR1cm4gcyhNKHQpKX1mdW5jdGlvbiBUKHQpe3ZhciBlLGEsaSxuPXRbMF0vMTAwLG89dFsxXS8xMDAscj10WzJdLzEwMCxsPXRbM10vMTAwO3JldHVybiBlPTEtTWF0aC5taW4oMSxuKigxLWwpK2wpLGE9MS1NYXRoLm1pbigxLG8qKDEtbCkrbCksaT0xLU1hdGgubWluKDEsciooMS1sKStsKSxbMjU1KmUsMjU1KmEsMjU1KmldfWZ1bmN0aW9uIFAodCl7cmV0dXJuIGkoVCh0KSl9ZnVuY3Rpb24gRih0KXtyZXR1cm4gbihUKHQpKX1mdW5jdGlvbiBfKHQpe3JldHVybiBvKFQodCkpfWZ1bmN0aW9uIFIodCl7cmV0dXJuIHMoVCh0KSl9ZnVuY3Rpb24gVih0KXt2YXIgZSxhLGksbj10WzBdLzEwMCxvPXRbMV0vMTAwLHI9dFsyXS8xMDA7cmV0dXJuIGU9My4yNDA2Km4rLTEuNTM3MipvK3IqLS40OTg2LGE9biotLjk2ODkrMS44NzU4Km8rLjA0MTUqcixpPS4wNTU3Km4rbyotLjIwNCsxLjA1NypyLGU9ZT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhlLDEvMi40KS0uMDU1OmU9MTIuOTIqZSxhPWE+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coYSwxLzIuNCktLjA1NTphPTEyLjkyKmEsaT1pPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGksMS8yLjQpLS4wNTU6aT0xMi45MippLGU9TWF0aC5taW4oTWF0aC5tYXgoMCxlKSwxKSxhPU1hdGgubWluKE1hdGgubWF4KDAsYSksMSksaT1NYXRoLm1pbihNYXRoLm1heCgwLGkpLDEpLFsyNTUqZSwyNTUqYSwyNTUqaV19ZnVuY3Rpb24gTCh0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIG4vPTk1LjA0NyxvLz0xMDAsci89MTA4Ljg4MyxuPW4+LjAwODg1Nj9NYXRoLnBvdyhuLDEvMyk6Ny43ODcqbisxNi8xMTYsbz1vPi4wMDg4NTY/TWF0aC5wb3cobywxLzMpOjcuNzg3Km8rMTYvMTE2LHI9cj4uMDA4ODU2P01hdGgucG93KHIsMS8zKTo3Ljc4NypyKzE2LzExNixlPTExNipvLTE2LGE9NTAwKihuLW8pLGk9MjAwKihvLXIpLFtlLGEsaV19ZnVuY3Rpb24gTyh0KXtyZXR1cm4gVyhMKHQpKX1mdW5jdGlvbiBCKHQpe3ZhciBlLGEsaSxuLG89dFswXSxyPXRbMV0sbD10WzJdO3JldHVybiA4Pj1vPyhhPTEwMCpvLzkwMy4zLG49Ny43ODcqKGEvMTAwKSsxNi8xMTYpOihhPTEwMCpNYXRoLnBvdygobysxNikvMTE2LDMpLG49TWF0aC5wb3coYS8xMDAsMS8zKSksZT0uMDA4ODU2Pj1lLzk1LjA0Nz9lPTk1LjA0Nyooci81MDArbi0xNi8xMTYpLzcuNzg3Ojk1LjA0NypNYXRoLnBvdyhyLzUwMCtuLDMpLGk9LjAwODg1OT49aS8xMDguODgzP2k9MTA4Ljg4Myoobi1sLzIwMC0xNi8xMTYpLzcuNzg3OjEwOC44ODMqTWF0aC5wb3cobi1sLzIwMCwzKSxbZSxhLGldfWZ1bmN0aW9uIFcodCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBlPU1hdGguYXRhbjIocixvKSxhPTM2MCplLzIvTWF0aC5QSSwwPmEmJihhKz0zNjApLGk9TWF0aC5zcXJ0KG8qbytyKnIpLFtuLGksYV19ZnVuY3Rpb24geih0KXtyZXR1cm4gVihCKHQpKX1mdW5jdGlvbiBOKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gaT1yLzM2MCoyKk1hdGguUEksZT1vKk1hdGguY29zKGkpLGE9bypNYXRoLnNpbihpKSxbbixlLGFdfWZ1bmN0aW9uIEUodCl7cmV0dXJuIEIoTih0KSl9ZnVuY3Rpb24gSCh0KXtyZXR1cm4geihOKHQpKX1mdW5jdGlvbiBVKHQpe3JldHVybiBaW3RdfWZ1bmN0aW9uIGoodCl7cmV0dXJuIGkoVSh0KSl9ZnVuY3Rpb24gcSh0KXtyZXR1cm4gbihVKHQpKX1mdW5jdGlvbiBZKHQpe3JldHVybiBvKFUodCkpfWZ1bmN0aW9uIFgodCl7cmV0dXJuIGwoVSh0KSl9ZnVuY3Rpb24gSyh0KXtyZXR1cm4gdShVKHQpKX1mdW5jdGlvbiBKKHQpe3JldHVybiBkKFUodCkpfWUuZXhwb3J0cz17cmdiMmhzbDppLHJnYjJoc3Y6bixyZ2IyaHdiOm8scmdiMmNteWs6bCxyZ2Iya2V5d29yZDpzLHJnYjJ4eXo6ZCxyZ2IybGFiOnUscmdiMmxjaDpjLGhzbDJyZ2I6aCxoc2wyaHN2OmYsaHNsMmh3YjpwLGhzbDJjbXlrOm0saHNsMmtleXdvcmQ6dixoc3YycmdiOngsaHN2MmhzbDp5LGhzdjJod2I6ayxoc3YyY215azpTLGhzdjJrZXl3b3JkOncsaHdiMnJnYjpNLGh3YjJoc2w6Qyxod2IyaHN2OkQsaHdiMmNteWs6SSxod2Iya2V5d29yZDpBLGNteWsycmdiOlQsY215azJoc2w6UCxjbXlrMmhzdjpGLGNteWsyaHdiOl8sY215azJrZXl3b3JkOlIsa2V5d29yZDJyZ2I6VSxrZXl3b3JkMmhzbDpqLGtleXdvcmQyaHN2OnEsa2V5d29yZDJod2I6WSxrZXl3b3JkMmNteWs6WCxrZXl3b3JkMmxhYjpLLGtleXdvcmQyeHl6OkoseHl6MnJnYjpWLHh5ejJsYWI6TCx4eXoybGNoOk8sbGFiMnh5ejpCLGxhYjJyZ2I6eixsYWIybGNoOlcsbGNoMmxhYjpOLGxjaDJ4eXo6RSxsY2gycmdiOkh9O3ZhciBaPXthbGljZWJsdWU6WzI0MCwyNDgsMjU1XSxhbnRpcXVld2hpdGU6WzI1MCwyMzUsMjE1XSxhcXVhOlswLDI1NSwyNTVdLGFxdWFtYXJpbmU6WzEyNywyNTUsMjEyXSxhenVyZTpbMjQwLDI1NSwyNTVdLGJlaWdlOlsyNDUsMjQ1LDIyMF0sYmlzcXVlOlsyNTUsMjI4LDE5Nl0sYmxhY2s6WzAsMCwwXSxibGFuY2hlZGFsbW9uZDpbMjU1LDIzNSwyMDVdLGJsdWU6WzAsMCwyNTVdLGJsdWV2aW9sZXQ6WzEzOCw0MywyMjZdLGJyb3duOlsxNjUsNDIsNDJdLGJ1cmx5d29vZDpbMjIyLDE4NCwxMzVdLGNhZGV0Ymx1ZTpbOTUsMTU4LDE2MF0sY2hhcnRyZXVzZTpbMTI3LDI1NSwwXSxjaG9jb2xhdGU6WzIxMCwxMDUsMzBdLGNvcmFsOlsyNTUsMTI3LDgwXSxjb3JuZmxvd2VyYmx1ZTpbMTAwLDE0OSwyMzddLGNvcm5zaWxrOlsyNTUsMjQ4LDIyMF0sY3JpbXNvbjpbMjIwLDIwLDYwXSxjeWFuOlswLDI1NSwyNTVdLGRhcmtibHVlOlswLDAsMTM5XSxkYXJrY3lhbjpbMCwxMzksMTM5XSxkYXJrZ29sZGVucm9kOlsxODQsMTM0LDExXSxkYXJrZ3JheTpbMTY5LDE2OSwxNjldLGRhcmtncmVlbjpbMCwxMDAsMF0sZGFya2dyZXk6WzE2OSwxNjksMTY5XSxkYXJra2hha2k6WzE4OSwxODMsMTA3XSxkYXJrbWFnZW50YTpbMTM5LDAsMTM5XSxkYXJrb2xpdmVncmVlbjpbODUsMTA3LDQ3XSxkYXJrb3JhbmdlOlsyNTUsMTQwLDBdLGRhcmtvcmNoaWQ6WzE1Myw1MCwyMDRdLGRhcmtyZWQ6WzEzOSwwLDBdLGRhcmtzYWxtb246WzIzMywxNTAsMTIyXSxkYXJrc2VhZ3JlZW46WzE0MywxODgsMTQzXSxkYXJrc2xhdGVibHVlOls3Miw2MSwxMzldLGRhcmtzbGF0ZWdyYXk6WzQ3LDc5LDc5XSxkYXJrc2xhdGVncmV5Ols0Nyw3OSw3OV0sZGFya3R1cnF1b2lzZTpbMCwyMDYsMjA5XSxkYXJrdmlvbGV0OlsxNDgsMCwyMTFdLGRlZXBwaW5rOlsyNTUsMjAsMTQ3XSxkZWVwc2t5Ymx1ZTpbMCwxOTEsMjU1XSxkaW1ncmF5OlsxMDUsMTA1LDEwNV0sZGltZ3JleTpbMTA1LDEwNSwxMDVdLGRvZGdlcmJsdWU6WzMwLDE0NCwyNTVdLGZpcmVicmljazpbMTc4LDM0LDM0XSxmbG9yYWx3aGl0ZTpbMjU1LDI1MCwyNDBdLGZvcmVzdGdyZWVuOlszNCwxMzksMzRdLGZ1Y2hzaWE6WzI1NSwwLDI1NV0sZ2FpbnNib3JvOlsyMjAsMjIwLDIyMF0sZ2hvc3R3aGl0ZTpbMjQ4LDI0OCwyNTVdLGdvbGQ6WzI1NSwyMTUsMF0sZ29sZGVucm9kOlsyMTgsMTY1LDMyXSxncmF5OlsxMjgsMTI4LDEyOF0sZ3JlZW46WzAsMTI4LDBdLGdyZWVueWVsbG93OlsxNzMsMjU1LDQ3XSxncmV5OlsxMjgsMTI4LDEyOF0saG9uZXlkZXc6WzI0MCwyNTUsMjQwXSxob3RwaW5rOlsyNTUsMTA1LDE4MF0saW5kaWFucmVkOlsyMDUsOTIsOTJdLGluZGlnbzpbNzUsMCwxMzBdLGl2b3J5OlsyNTUsMjU1LDI0MF0sa2hha2k6WzI0MCwyMzAsMTQwXSxsYXZlbmRlcjpbMjMwLDIzMCwyNTBdLGxhdmVuZGVyYmx1c2g6WzI1NSwyNDAsMjQ1XSxsYXduZ3JlZW46WzEyNCwyNTIsMF0sbGVtb25jaGlmZm9uOlsyNTUsMjUwLDIwNV0sbGlnaHRibHVlOlsxNzMsMjE2LDIzMF0sbGlnaHRjb3JhbDpbMjQwLDEyOCwxMjhdLGxpZ2h0Y3lhbjpbMjI0LDI1NSwyNTVdLGxpZ2h0Z29sZGVucm9keWVsbG93OlsyNTAsMjUwLDIxMF0sbGlnaHRncmF5OlsyMTEsMjExLDIxMV0sbGlnaHRncmVlbjpbMTQ0LDIzOCwxNDRdLGxpZ2h0Z3JleTpbMjExLDIxMSwyMTFdLGxpZ2h0cGluazpbMjU1LDE4MiwxOTNdLGxpZ2h0c2FsbW9uOlsyNTUsMTYwLDEyMl0sbGlnaHRzZWFncmVlbjpbMzIsMTc4LDE3MF0sbGlnaHRza3libHVlOlsxMzUsMjA2LDI1MF0sbGlnaHRzbGF0ZWdyYXk6WzExOSwxMzYsMTUzXSxsaWdodHNsYXRlZ3JleTpbMTE5LDEzNiwxNTNdLGxpZ2h0c3RlZWxibHVlOlsxNzYsMTk2LDIyMl0sbGlnaHR5ZWxsb3c6WzI1NSwyNTUsMjI0XSxsaW1lOlswLDI1NSwwXSxsaW1lZ3JlZW46WzUwLDIwNSw1MF0sbGluZW46WzI1MCwyNDAsMjMwXSxtYWdlbnRhOlsyNTUsMCwyNTVdLG1hcm9vbjpbMTI4LDAsMF0sbWVkaXVtYXF1YW1hcmluZTpbMTAyLDIwNSwxNzBdLG1lZGl1bWJsdWU6WzAsMCwyMDVdLG1lZGl1bW9yY2hpZDpbMTg2LDg1LDIxMV0sbWVkaXVtcHVycGxlOlsxNDcsMTEyLDIxOV0sbWVkaXVtc2VhZ3JlZW46WzYwLDE3OSwxMTNdLG1lZGl1bXNsYXRlYmx1ZTpbMTIzLDEwNCwyMzhdLG1lZGl1bXNwcmluZ2dyZWVuOlswLDI1MCwxNTRdLG1lZGl1bXR1cnF1b2lzZTpbNzIsMjA5LDIwNF0sbWVkaXVtdmlvbGV0cmVkOlsxOTksMjEsMTMzXSxtaWRuaWdodGJsdWU6WzI1LDI1LDExMl0sbWludGNyZWFtOlsyNDUsMjU1LDI1MF0sbWlzdHlyb3NlOlsyNTUsMjI4LDIyNV0sbW9jY2FzaW46WzI1NSwyMjgsMTgxXSxuYXZham93aGl0ZTpbMjU1LDIyMiwxNzNdLG5hdnk6WzAsMCwxMjhdLG9sZGxhY2U6WzI1MywyNDUsMjMwXSxvbGl2ZTpbMTI4LDEyOCwwXSxvbGl2ZWRyYWI6WzEwNywxNDIsMzVdLG9yYW5nZTpbMjU1LDE2NSwwXSxvcmFuZ2VyZWQ6WzI1NSw2OSwwXSxvcmNoaWQ6WzIxOCwxMTIsMjE0XSxwYWxlZ29sZGVucm9kOlsyMzgsMjMyLDE3MF0scGFsZWdyZWVuOlsxNTIsMjUxLDE1Ml0scGFsZXR1cnF1b2lzZTpbMTc1LDIzOCwyMzhdLHBhbGV2aW9sZXRyZWQ6WzIxOSwxMTIsMTQ3XSxwYXBheWF3aGlwOlsyNTUsMjM5LDIxM10scGVhY2hwdWZmOlsyNTUsMjE4LDE4NV0scGVydTpbMjA1LDEzMyw2M10scGluazpbMjU1LDE5MiwyMDNdLHBsdW06WzIyMSwxNjAsMjIxXSxwb3dkZXJibHVlOlsxNzYsMjI0LDIzMF0scHVycGxlOlsxMjgsMCwxMjhdLHJlYmVjY2FwdXJwbGU6WzEwMiw1MSwxNTNdLHJlZDpbMjU1LDAsMF0scm9zeWJyb3duOlsxODgsMTQzLDE0M10scm95YWxibHVlOls2NSwxMDUsMjI1XSxzYWRkbGVicm93bjpbMTM5LDY5LDE5XSxzYWxtb246WzI1MCwxMjgsMTE0XSxzYW5keWJyb3duOlsyNDQsMTY0LDk2XSxzZWFncmVlbjpbNDYsMTM5LDg3XSxzZWFzaGVsbDpbMjU1LDI0NSwyMzhdLHNpZW5uYTpbMTYwLDgyLDQ1XSxzaWx2ZXI6WzE5MiwxOTIsMTkyXSxza3libHVlOlsxMzUsMjA2LDIzNV0sc2xhdGVibHVlOlsxMDYsOTAsMjA1XSxzbGF0ZWdyYXk6WzExMiwxMjgsMTQ0XSxzbGF0ZWdyZXk6WzExMiwxMjgsMTQ0XSxzbm93OlsyNTUsMjUwLDI1MF0sc3ByaW5nZ3JlZW46WzAsMjU1LDEyN10sc3RlZWxibHVlOls3MCwxMzAsMTgwXSx0YW46WzIxMCwxODAsMTQwXSx0ZWFsOlswLDEyOCwxMjhdLHRoaXN0bGU6WzIxNiwxOTEsMjE2XSx0b21hdG86WzI1NSw5OSw3MV0sdHVycXVvaXNlOls2NCwyMjQsMjA4XSx2aW9sZXQ6WzIzOCwxMzAsMjM4XSx3aGVhdDpbMjQ1LDIyMiwxNzldLHdoaXRlOlsyNTUsMjU1LDI1NV0sd2hpdGVzbW9rZTpbMjQ1LDI0NSwyNDVdLHllbGxvdzpbMjU1LDI1NSwwXSx5ZWxsb3dncmVlbjpbMTU0LDIwNSw1MF19LEc9e307Zm9yKHZhciBRIGluIFopR1tKU09OLnN0cmluZ2lmeShaW1FdKV09UX0se31dLDU6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDQpLG49ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IGR9O2Zvcih2YXIgbyBpbiBpKXtuW28rXCJSYXdcIl09ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBlJiYoZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSxpW3RdKGUpfX0obyk7dmFyIHI9LyhcXHcrKTIoXFx3KykvLmV4ZWMobyksbD1yWzFdLHM9clsyXTtuW2xdPW5bbF18fHt9LG5bbF1bc109bltvXT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7XCJudW1iZXJcIj09dHlwZW9mIGUmJihlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO3ZhciBhPWlbdF0oZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGF8fHZvaWQgMD09PWEpcmV0dXJuIGE7Zm9yKHZhciBuPTA7bjxhLmxlbmd0aDtuKyspYVtuXT1NYXRoLnJvdW5kKGFbbl0pO3JldHVybiBhfX0obyl9dmFyIGQ9ZnVuY3Rpb24oKXt0aGlzLmNvbnZzPXt9fTtkLnByb3RvdHlwZS5yb3V0ZVNwYWNlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZVswXTtyZXR1cm4gdm9pZCAwPT09YT90aGlzLmdldFZhbHVlcyh0KTooXCJudW1iZXJcIj09dHlwZW9mIGEmJihhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpKSx0aGlzLnNldFZhbHVlcyh0LGEpKX0sZC5wcm90b3R5cGUuc2V0VmFsdWVzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuc3BhY2U9dCx0aGlzLmNvbnZzPXt9LHRoaXMuY29udnNbdF09ZSx0aGlzfSxkLnByb3RvdHlwZS5nZXRWYWx1ZXM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jb252c1t0XTtpZighZSl7dmFyIGE9dGhpcy5zcGFjZSxpPXRoaXMuY29udnNbYV07ZT1uW2FdW3RdKGkpLHRoaXMuY29udnNbdF09ZX1yZXR1cm4gZX0sW1wicmdiXCIsXCJoc2xcIixcImhzdlwiLFwiY215a1wiLFwia2V5d29yZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2QucHJvdG90eXBlW3RdPWZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnJvdXRlU3BhY2UodCxhcmd1bWVudHMpfX0pLGUuZXhwb3J0cz1ufSx7NDo0fV0sNjpbZnVuY3Rpb24odCxlLGEpe2UuZXhwb3J0cz17YWxpY2VibHVlOlsyNDAsMjQ4LDI1NV0sYW50aXF1ZXdoaXRlOlsyNTAsMjM1LDIxNV0sYXF1YTpbMCwyNTUsMjU1XSxhcXVhbWFyaW5lOlsxMjcsMjU1LDIxMl0sYXp1cmU6WzI0MCwyNTUsMjU1XSxiZWlnZTpbMjQ1LDI0NSwyMjBdLGJpc3F1ZTpbMjU1LDIyOCwxOTZdLGJsYWNrOlswLDAsMF0sYmxhbmNoZWRhbG1vbmQ6WzI1NSwyMzUsMjA1XSxibHVlOlswLDAsMjU1XSxibHVldmlvbGV0OlsxMzgsNDMsMjI2XSxicm93bjpbMTY1LDQyLDQyXSxidXJseXdvb2Q6WzIyMiwxODQsMTM1XSxjYWRldGJsdWU6Wzk1LDE1OCwxNjBdLGNoYXJ0cmV1c2U6WzEyNywyNTUsMF0sY2hvY29sYXRlOlsyMTAsMTA1LDMwXSxjb3JhbDpbMjU1LDEyNyw4MF0sY29ybmZsb3dlcmJsdWU6WzEwMCwxNDksMjM3XSxjb3Juc2lsazpbMjU1LDI0OCwyMjBdLGNyaW1zb246WzIyMCwyMCw2MF0sY3lhbjpbMCwyNTUsMjU1XSxkYXJrYmx1ZTpbMCwwLDEzOV0sZGFya2N5YW46WzAsMTM5LDEzOV0sZGFya2dvbGRlbnJvZDpbMTg0LDEzNCwxMV0sZGFya2dyYXk6WzE2OSwxNjksMTY5XSxkYXJrZ3JlZW46WzAsMTAwLDBdLGRhcmtncmV5OlsxNjksMTY5LDE2OV0sZGFya2toYWtpOlsxODksMTgzLDEwN10sZGFya21hZ2VudGE6WzEzOSwwLDEzOV0sZGFya29saXZlZ3JlZW46Wzg1LDEwNyw0N10sZGFya29yYW5nZTpbMjU1LDE0MCwwXSxkYXJrb3JjaGlkOlsxNTMsNTAsMjA0XSxkYXJrcmVkOlsxMzksMCwwXSxkYXJrc2FsbW9uOlsyMzMsMTUwLDEyMl0sZGFya3NlYWdyZWVuOlsxNDMsMTg4LDE0M10sZGFya3NsYXRlYmx1ZTpbNzIsNjEsMTM5XSxkYXJrc2xhdGVncmF5Ols0Nyw3OSw3OV0sZGFya3NsYXRlZ3JleTpbNDcsNzksNzldLGRhcmt0dXJxdW9pc2U6WzAsMjA2LDIwOV0sZGFya3Zpb2xldDpbMTQ4LDAsMjExXSxkZWVwcGluazpbMjU1LDIwLDE0N10sZGVlcHNreWJsdWU6WzAsMTkxLDI1NV0sZGltZ3JheTpbMTA1LDEwNSwxMDVdLGRpbWdyZXk6WzEwNSwxMDUsMTA1XSxkb2RnZXJibHVlOlszMCwxNDQsMjU1XSxmaXJlYnJpY2s6WzE3OCwzNCwzNF0sZmxvcmFsd2hpdGU6WzI1NSwyNTAsMjQwXSxmb3Jlc3RncmVlbjpbMzQsMTM5LDM0XSxmdWNoc2lhOlsyNTUsMCwyNTVdLGdhaW5zYm9ybzpbMjIwLDIyMCwyMjBdLGdob3N0d2hpdGU6WzI0OCwyNDgsMjU1XSxnb2xkOlsyNTUsMjE1LDBdLGdvbGRlbnJvZDpbMjE4LDE2NSwzMl0sZ3JheTpbMTI4LDEyOCwxMjhdLGdyZWVuOlswLDEyOCwwXSxncmVlbnllbGxvdzpbMTczLDI1NSw0N10sZ3JleTpbMTI4LDEyOCwxMjhdLGhvbmV5ZGV3OlsyNDAsMjU1LDI0MF0saG90cGluazpbMjU1LDEwNSwxODBdLGluZGlhbnJlZDpbMjA1LDkyLDkyXSxpbmRpZ286Wzc1LDAsMTMwXSxpdm9yeTpbMjU1LDI1NSwyNDBdLGtoYWtpOlsyNDAsMjMwLDE0MF0sbGF2ZW5kZXI6WzIzMCwyMzAsMjUwXSxsYXZlbmRlcmJsdXNoOlsyNTUsMjQwLDI0NV0sbGF3bmdyZWVuOlsxMjQsMjUyLDBdLGxlbW9uY2hpZmZvbjpbMjU1LDI1MCwyMDVdLGxpZ2h0Ymx1ZTpbMTczLDIxNiwyMzBdLGxpZ2h0Y29yYWw6WzI0MCwxMjgsMTI4XSxsaWdodGN5YW46WzIyNCwyNTUsMjU1XSxsaWdodGdvbGRlbnJvZHllbGxvdzpbMjUwLDI1MCwyMTBdLGxpZ2h0Z3JheTpbMjExLDIxMSwyMTFdLGxpZ2h0Z3JlZW46WzE0NCwyMzgsMTQ0XSxsaWdodGdyZXk6WzIxMSwyMTEsMjExXSxsaWdodHBpbms6WzI1NSwxODIsMTkzXSxsaWdodHNhbG1vbjpbMjU1LDE2MCwxMjJdLGxpZ2h0c2VhZ3JlZW46WzMyLDE3OCwxNzBdLGxpZ2h0c2t5Ymx1ZTpbMTM1LDIwNiwyNTBdLGxpZ2h0c2xhdGVncmF5OlsxMTksMTM2LDE1M10sbGlnaHRzbGF0ZWdyZXk6WzExOSwxMzYsMTUzXSxsaWdodHN0ZWVsYmx1ZTpbMTc2LDE5NiwyMjJdLGxpZ2h0eWVsbG93OlsyNTUsMjU1LDIyNF0sbGltZTpbMCwyNTUsMF0sbGltZWdyZWVuOls1MCwyMDUsNTBdLGxpbmVuOlsyNTAsMjQwLDIzMF0sbWFnZW50YTpbMjU1LDAsMjU1XSxtYXJvb246WzEyOCwwLDBdLG1lZGl1bWFxdWFtYXJpbmU6WzEwMiwyMDUsMTcwXSxtZWRpdW1ibHVlOlswLDAsMjA1XSxtZWRpdW1vcmNoaWQ6WzE4Niw4NSwyMTFdLG1lZGl1bXB1cnBsZTpbMTQ3LDExMiwyMTldLG1lZGl1bXNlYWdyZWVuOls2MCwxNzksMTEzXSxtZWRpdW1zbGF0ZWJsdWU6WzEyMywxMDQsMjM4XSxtZWRpdW1zcHJpbmdncmVlbjpbMCwyNTAsMTU0XSxtZWRpdW10dXJxdW9pc2U6WzcyLDIwOSwyMDRdLG1lZGl1bXZpb2xldHJlZDpbMTk5LDIxLDEzM10sbWlkbmlnaHRibHVlOlsyNSwyNSwxMTJdLG1pbnRjcmVhbTpbMjQ1LDI1NSwyNTBdLG1pc3R5cm9zZTpbMjU1LDIyOCwyMjVdLG1vY2Nhc2luOlsyNTUsMjI4LDE4MV0sbmF2YWpvd2hpdGU6WzI1NSwyMjIsMTczXSxuYXZ5OlswLDAsMTI4XSxvbGRsYWNlOlsyNTMsMjQ1LDIzMF0sb2xpdmU6WzEyOCwxMjgsMF0sb2xpdmVkcmFiOlsxMDcsMTQyLDM1XSxvcmFuZ2U6WzI1NSwxNjUsMF0sb3JhbmdlcmVkOlsyNTUsNjksMF0sb3JjaGlkOlsyMTgsMTEyLDIxNF0scGFsZWdvbGRlbnJvZDpbMjM4LDIzMiwxNzBdLHBhbGVncmVlbjpbMTUyLDI1MSwxNTJdLHBhbGV0dXJxdW9pc2U6WzE3NSwyMzgsMjM4XSxwYWxldmlvbGV0cmVkOlsyMTksMTEyLDE0N10scGFwYXlhd2hpcDpbMjU1LDIzOSwyMTNdLHBlYWNocHVmZjpbMjU1LDIxOCwxODVdLHBlcnU6WzIwNSwxMzMsNjNdLHBpbms6WzI1NSwxOTIsMjAzXSxwbHVtOlsyMjEsMTYwLDIyMV0scG93ZGVyYmx1ZTpbMTc2LDIyNCwyMzBdLHB1cnBsZTpbMTI4LDAsMTI4XSxyZWJlY2NhcHVycGxlOlsxMDIsNTEsMTUzXSxyZWQ6WzI1NSwwLDBdLHJvc3licm93bjpbMTg4LDE0MywxNDNdLHJveWFsYmx1ZTpbNjUsMTA1LDIyNV0sc2FkZGxlYnJvd246WzEzOSw2OSwxOV0sc2FsbW9uOlsyNTAsMTI4LDExNF0sc2FuZHlicm93bjpbMjQ0LDE2NCw5Nl0sc2VhZ3JlZW46WzQ2LDEzOSw4N10sc2Vhc2hlbGw6WzI1NSwyNDUsMjM4XSxzaWVubmE6WzE2MCw4Miw0NV0sc2lsdmVyOlsxOTIsMTkyLDE5Ml0sc2t5Ymx1ZTpbMTM1LDIwNiwyMzVdLHNsYXRlYmx1ZTpbMTA2LDkwLDIwNV0sc2xhdGVncmF5OlsxMTIsMTI4LDE0NF0sc2xhdGVncmV5OlsxMTIsMTI4LDE0NF0sc25vdzpbMjU1LDI1MCwyNTBdLHNwcmluZ2dyZWVuOlswLDI1NSwxMjddLHN0ZWVsYmx1ZTpbNzAsMTMwLDE4MF0sdGFuOlsyMTAsMTgwLDE0MF0sdGVhbDpbMCwxMjgsMTI4XSx0aGlzdGxlOlsyMTYsMTkxLDIxNl0sdG9tYXRvOlsyNTUsOTksNzFdLHR1cnF1b2lzZTpbNjQsMjI0LDIwOF0sdmlvbGV0OlsyMzgsMTMwLDIzOF0sd2hlYXQ6WzI0NSwyMjIsMTc5XSx3aGl0ZTpbMjU1LDI1NSwyNTVdLHdoaXRlc21va2U6WzI0NSwyNDUsMjQ1XSx5ZWxsb3c6WzI1NSwyNTUsMF0seWVsbG93Z3JlZW46WzE1NCwyMDUsNTBdfX0se31dLDc6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDI4KSgpO3QoMjYpKGkpLHQoMjIpKGkpLHQoMjUpKGkpLHQoMjEpKGkpLHQoMjMpKGkpLHQoMjQpKGkpLHQoMjkpKGkpLHQoMzMpKGkpLHQoMzEpKGkpLHQoMzQpKGkpLHQoMzIpKGkpLHQoMzUpKGkpLHQoMzApKGkpLHQoMjcpKGkpLHQoMzYpKGkpLHQoMzcpKGkpLHQoMzgpKGkpLHQoMzkpKGkpLHQoNDApKGkpLHQoNDMpKGkpLHQoNDEpKGkpLHQoNDIpKGkpLHQoNDQpKGkpLHQoNDUpKGkpLHQoNDYpKGkpLHQoMTUpKGkpLHQoMTYpKGkpLHQoMTcpKGkpLHQoMTgpKGkpLHQoMTkpKGkpLHQoMjApKGkpLHQoOCkoaSksdCg5KShpKSx0KDEwKShpKSx0KDExKShpKSx0KDEyKShpKSx0KDEzKShpKSx0KDE0KShpKSx3aW5kb3cuQ2hhcnQ9ZS5leHBvcnRzPWl9LHsxMDoxMCwxMToxMSwxMjoxMiwxMzoxMywxNDoxNCwxNToxNSwxNjoxNiwxNzoxNywxODoxOCwxOToxOSwyMDoyMCwyMToyMSwyMjoyMiwyMzoyMywyNDoyNCwyNToyNSwyNjoyNiwyNzoyNywyODoyOCwyOToyOSwzMDozMCwzMTozMSwzMjozMiwzMzozMywzNDozNCwzNTozNSwzNjozNiwzNzozNywzODozOCwzOTozOSw0MDo0MCw0MTo0MSw0Mjo0Miw0Mzo0Myw0NDo0NCw0NTo0NSw0Njo0Niw4OjgsOTo5fV0sODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkJhcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJiYXJcIixuZXcgdChlLGEpfX19LHt9XSw5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuQnViYmxlPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImJ1YmJsZVwiLG5ldyB0KGUsYSl9fX0se31dLDEwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuRG91Z2hudXQ9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiZG91Z2hudXRcIixuZXcgdChlLGEpfX19LHt9XSwxMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkxpbmU9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwibGluZVwiLG5ldyB0KGUsYSl9fX0se31dLDEyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuUG9sYXJBcmVhPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInBvbGFyQXJlYVwiLG5ldyB0KGUsYSl9fX0se31dLDEzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuUmFkYXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwicmFkYXJcIixuZXcgdChlLGEpfX19LHt9XSwxNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT17aG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGlkOlwieC1heGlzLTFcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwibGVmdFwiLGlkOlwieS1heGlzLTFcIn1dfSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQpe3JldHVyblwiKFwiK3QueExhYmVsK1wiLCBcIit0LnlMYWJlbCtcIilcIn19fX07dC5kZWZhdWx0cy5zY2F0dGVyPWUsdC5jb250cm9sbGVycy5zY2F0dGVyPXQuY29udHJvbGxlcnMubGluZSx0LlNjYXR0ZXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwic2NhdHRlclwiLG5ldyB0KGUsYSl9fX0se31dLDE1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmJhcj17aG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImNhdGVnb3J5XCIsY2F0ZWdvcnlQZXJjZW50YWdlOi44LGJhclBlcmNlbnRhZ2U6LjksZ3JpZExpbmVzOntvZmZzZXRHcmlkTGluZXM6ITB9fV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCJ9XX19LHQuY29udHJvbGxlcnMuYmFyPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5SZWN0YW5nbGUsaW5pdGlhbGl6ZTpmdW5jdGlvbihlLGEpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzLGUsYSksdGhpcy5nZXRNZXRhKCkuYmFyPSEwfSxnZXRCYXJDb3VudDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT0wO3JldHVybiBlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGUsaSl7dmFyIG49dC5jaGFydC5nZXREYXRhc2V0TWV0YShpKTtuLmJhciYmdC5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGkpJiYrK2F9LHQpLGF9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzO2UuZWFjaChhLmdldE1ldGEoKS5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0sYSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW4uZ2V0U2NhbGVGb3JJZChvLnhBeGlzSUQpLGw9bi5nZXRTY2FsZUZvcklkKG8ueUF4aXNJRCkscz1sLmdldEJhc2VQaXhlbCgpLGQ9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZSx1PXQuY3VzdG9tfHx7fSxjPW4uZ2V0RGF0YXNldCgpO3QuX3hTY2FsZT1yLHQuX3lTY2FsZT1sLHQuX2RhdGFzZXRJbmRleD1uLmluZGV4LHQuX2luZGV4PWE7dmFyIGg9bi5nZXRSdWxlcihhKTt0Ll9tb2RlbD17eDpuLmNhbGN1bGF0ZUJhclgoYSxuLmluZGV4LGgpLHk6aT9zOm4uY2FsY3VsYXRlQmFyWShhLG4uaW5kZXgpLGxhYmVsOm4uY2hhcnQuZGF0YS5sYWJlbHNbYV0sZGF0YXNldExhYmVsOmMubGFiZWwsYmFzZTppP3M6bi5jYWxjdWxhdGVCYXJCYXNlKG4uaW5kZXgsYSksd2lkdGg6bi5jYWxjdWxhdGVCYXJXaWR0aChoKSxiYWNrZ3JvdW5kQ29sb3I6dS5iYWNrZ3JvdW5kQ29sb3I/dS5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5iYWNrZ3JvdW5kQ29sb3IsYSxkLmJhY2tncm91bmRDb2xvciksYm9yZGVyU2tpcHBlZDp1LmJvcmRlclNraXBwZWQ/dS5ib3JkZXJTa2lwcGVkOmQuYm9yZGVyU2tpcHBlZCxib3JkZXJDb2xvcjp1LmJvcmRlckNvbG9yP3UuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5ib3JkZXJDb2xvcixhLGQuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOnUuYm9yZGVyV2lkdGg/dS5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJvcmRlcldpZHRoLGEsZC5ib3JkZXJXaWR0aCl9LHQucGl2b3QoKX0sY2FsY3VsYXRlQmFyQmFzZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89MDtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPWEuY2hhcnQsbD1yLmRhdGEuZGF0YXNldHMscz1OdW1iZXIobFt0XS5kYXRhW2VdKSxkPTA7dD5kO2QrKyl7dmFyIHU9bFtkXSxjPXIuZ2V0RGF0YXNldE1ldGEoZCk7aWYoYy5iYXImJmMueUF4aXNJRD09PW4uaWQmJnIuaXNEYXRhc2V0VmlzaWJsZShkKSl7dmFyIGg9TnVtYmVyKHUuZGF0YVtlXSk7bys9MD5zP01hdGgubWluKGgsMCk6TWF0aC5tYXgoaCwwKX19cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX1yZXR1cm4gbi5nZXRCYXNlUGl4ZWwoKX0sZ2V0UnVsZXI6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPWEuZ2V0QmFyQ291bnQoKTtlPVwiY2F0ZWdvcnlcIj09PW4ub3B0aW9ucy50eXBlP24uZ2V0UGl4ZWxGb3JUaWNrKHQrMSktbi5nZXRQaXhlbEZvclRpY2sodCk6bi53aWR0aC9uLnRpY2tzLmxlbmd0aDt2YXIgcj1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UsbD0oZS1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UpLzIscz1yL287aWYobi50aWNrcy5sZW5ndGghPT1hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aCl7dmFyIGQ9bi50aWNrcy5sZW5ndGgvYS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg7cyo9ZH12YXIgdT1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlLGM9cy1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlO3JldHVybntkYXRhc2V0Q291bnQ6byx0aWNrV2lkdGg6ZSxjYXRlZ29yeVdpZHRoOnIsY2F0ZWdvcnlTcGFjaW5nOmwsZnVsbEJhcldpZHRoOnMsYmFyV2lkdGg6dSxiYXJTcGFjaW5nOmN9fSxjYWxjdWxhdGVCYXJXaWR0aDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldFNjYWxlRm9ySWQodGhpcy5nZXRNZXRhKCkueEF4aXNJRCk7cmV0dXJuIGUub3B0aW9ucy5iYXJUaGlja25lc3M/ZS5vcHRpb25zLmJhclRoaWNrbmVzczplLm9wdGlvbnMuc3RhY2tlZD90LmNhdGVnb3J5V2lkdGg6dC5iYXJXaWR0aH0sZ2V0QmFySW5kZXg6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPTA7Zm9yKGE9MDt0PmE7KythKWU9dGhpcy5jaGFydC5nZXREYXRhc2V0TWV0YShhKSxlLmJhciYmdGhpcy5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGEpJiYrK2k7cmV0dXJuIGl9LGNhbGN1bGF0ZUJhclg6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1pLmdldE1ldGEoKSxvPWkuZ2V0U2NhbGVGb3JJZChuLnhBeGlzSUQpLHI9aS5nZXRCYXJJbmRleChlKSxsPW8uZ2V0UGl4ZWxGb3JWYWx1ZShudWxsLHQsZSxpLmNoYXJ0LmlzQ29tYm8pO3JldHVybiBsLT1pLmNoYXJ0LmlzQ29tYm8/YS50aWNrV2lkdGgvMjowLG8ub3B0aW9ucy5zdGFja2VkP2wrYS5jYXRlZ29yeVdpZHRoLzIrYS5jYXRlZ29yeVNwYWNpbmc6bCthLmJhcldpZHRoLzIrYS5jYXRlZ29yeVNwYWNpbmcrYS5iYXJXaWR0aCpyK2EuYmFyU3BhY2luZy8yK2EuYmFyU3BhY2luZypyfSxjYWxjdWxhdGVCYXJZOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz1OdW1iZXIoYS5nZXREYXRhc2V0KCkuZGF0YVt0XSk7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj0wLGw9MCxzPTA7ZT5zO3MrKyl7dmFyIGQ9YS5jaGFydC5kYXRhLmRhdGFzZXRzW3NdLHU9YS5jaGFydC5nZXREYXRhc2V0TWV0YShzKTtpZih1LmJhciYmdS55QXhpc0lEPT09bi5pZCYmYS5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKHMpKXt2YXIgYz1OdW1iZXIoZC5kYXRhW3RdKTswPmM/bCs9Y3x8MDpyKz1jfHwwfX1yZXR1cm4gMD5vP24uZ2V0UGl4ZWxGb3JWYWx1ZShsK28pOm4uZ2V0UGl4ZWxGb3JWYWx1ZShyK28pfXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXRoaXMsbj10fHwxLG89aS5nZXRNZXRhKCkuZGF0YSxyPWkuZ2V0RGF0YXNldCgpO2ZvcihlPTAsYT1vLmxlbmd0aDthPmU7KytlKXt2YXIgbD1yLmRhdGFbZV07bnVsbD09PWx8fHZvaWQgMD09PWx8fGlzTmFOKGwpfHxvW2VdLnRyYW5zaXRpb24obikuZHJhdygpfX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWw7by5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcj9uLmhvdmVyQmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCYWNrZ3JvdW5kQ29sb3IsaSxlLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcj9uLmhvdmVyQm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJvcmRlckNvbG9yLGksZS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aD9uLmhvdmVyQm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJvcmRlcldpZHRoLGksby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsLHI9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZTtvLmJhY2tncm91bmRDb2xvcj1uLmJhY2tncm91bmRDb2xvcj9uLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJhY2tncm91bmRDb2xvcixpLHIuYmFja2dyb3VuZENvbG9yKSxvLmJvcmRlckNvbG9yPW4uYm9yZGVyQ29sb3I/bi5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJvcmRlckNvbG9yLGksci5ib3JkZXJDb2xvciksby5ib3JkZXJXaWR0aD1uLmJvcmRlcldpZHRoP24uYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ib3JkZXJXaWR0aCxpLHIuYm9yZGVyV2lkdGgpfX0pLHQuZGVmYXVsdHMuaG9yaXpvbnRhbEJhcj17aG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCJ9XSx5QXhlczpbe3Bvc2l0aW9uOlwibGVmdFwiLHR5cGU6XCJjYXRlZ29yeVwiLGNhdGVnb3J5UGVyY2VudGFnZTouOCxiYXJQZXJjZW50YWdlOi45LGdyaWRMaW5lczp7b2Zmc2V0R3JpZExpbmVzOiEwfX1dfSxlbGVtZW50czp7cmVjdGFuZ2xlOntib3JkZXJTa2lwcGVkOlwibGVmdFwifX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT1cIlwiO3JldHVybiB0Lmxlbmd0aD4wJiYodFswXS55TGFiZWw/YT10WzBdLnlMYWJlbDplLmxhYmVscy5sZW5ndGg+MCYmdFswXS5pbmRleDxlLmxhYmVscy5sZW5ndGgmJihhPWUubGFiZWxzW3RbMF0uaW5kZXhdKSksYX0sbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIjtyZXR1cm4gYStcIjogXCIrdC54TGFiZWx9fX19LHQuY29udHJvbGxlcnMuaG9yaXpvbnRhbEJhcj10LmNvbnRyb2xsZXJzLmJhci5leHRlbmQoe3VwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW4uZ2V0U2NhbGVGb3JJZChvLnhBeGlzSUQpLGw9bi5nZXRTY2FsZUZvcklkKG8ueUF4aXNJRCkscz1yLmdldEJhc2VQaXhlbCgpLGQ9dC5jdXN0b218fHt9LHU9bi5nZXREYXRhc2V0KCksYz1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlO3QuX3hTY2FsZT1yLHQuX3lTY2FsZT1sLHQuX2RhdGFzZXRJbmRleD1uLmluZGV4LHQuX2luZGV4PWE7dmFyIGg9bi5nZXRSdWxlcihhKTt0Ll9tb2RlbD17eDppP3M6bi5jYWxjdWxhdGVCYXJYKGEsbi5pbmRleCkseTpuLmNhbGN1bGF0ZUJhclkoYSxuLmluZGV4LGgpLGxhYmVsOm4uY2hhcnQuZGF0YS5sYWJlbHNbYV0sZGF0YXNldExhYmVsOnUubGFiZWwsYmFzZTppP3M6bi5jYWxjdWxhdGVCYXJCYXNlKG4uaW5kZXgsYSksaGVpZ2h0Om4uY2FsY3VsYXRlQmFySGVpZ2h0KGgpLGJhY2tncm91bmRDb2xvcjpkLmJhY2tncm91bmRDb2xvcj9kLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJhY2tncm91bmRDb2xvcixhLGMuYmFja2dyb3VuZENvbG9yKSxib3JkZXJTa2lwcGVkOmQuYm9yZGVyU2tpcHBlZD9kLmJvcmRlclNraXBwZWQ6Yy5ib3JkZXJTa2lwcGVkLGJvcmRlckNvbG9yOmQuYm9yZGVyQ29sb3I/ZC5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJvcmRlckNvbG9yLGEsYy5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6ZC5ib3JkZXJXaWR0aD9kLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYm9yZGVyV2lkdGgsYSxjLmJvcmRlcldpZHRoKX0sdC5kcmF3PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gc1sodSt0KSU0XX12YXIgZT10aGlzLl9jaGFydC5jdHgsYT10aGlzLl92aWV3LGk9YS5oZWlnaHQvMixuPWEueS1pLG89YS55K2kscj1hLmJhc2UtKGEuYmFzZS1hLngpLGw9YS5ib3JkZXJXaWR0aC8yO2EuYm9yZGVyV2lkdGgmJihuKz1sLG8tPWwscis9bCksZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1hLmJhY2tncm91bmRDb2xvcixlLnN0cm9rZVN0eWxlPWEuYm9yZGVyQ29sb3IsZS5saW5lV2lkdGg9YS5ib3JkZXJXaWR0aDt2YXIgcz1bW2EuYmFzZSxvXSxbYS5iYXNlLG5dLFtyLG5dLFtyLG9dXSxkPVtcImJvdHRvbVwiLFwibGVmdFwiLFwidG9wXCIsXCJyaWdodFwiXSx1PWQuaW5kZXhPZihhLmJvcmRlclNraXBwZWQsMCk7LTE9PT11JiYodT0wKSxlLm1vdmVUby5hcHBseShlLHQoMCkpO2Zvcih2YXIgYz0xOzQ+YztjKyspZS5saW5lVG8uYXBwbHkoZSx0KGMpKTtlLmZpbGwoKSxhLmJvcmRlcldpZHRoJiZlLnN0cm9rZSgpfSx0LnBpdm90KCl9LGNhbGN1bGF0ZUJhckJhc2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPTA7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj1hLmNoYXJ0LGw9ci5kYXRhLmRhdGFzZXRzLHM9TnVtYmVyKGxbdF0uZGF0YVtlXSksZD0wO3Q+ZDtkKyspe3ZhciB1PWxbZF0sYz1yLmdldERhdGFzZXRNZXRhKGQpO2lmKGMuYmFyJiZjLnhBeGlzSUQ9PT1uLmlkJiZyLmlzRGF0YXNldFZpc2libGUoZCkpe1xudmFyIGg9TnVtYmVyKHUuZGF0YVtlXSk7bys9MD5zP01hdGgubWluKGgsMCk6TWF0aC5tYXgoaCwwKX19cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX1yZXR1cm4gbi5nZXRCYXNlUGl4ZWwoKX0sZ2V0UnVsZXI6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPWEuZ2V0QmFyQ291bnQoKTtlPVwiY2F0ZWdvcnlcIj09PW4ub3B0aW9ucy50eXBlP24uZ2V0UGl4ZWxGb3JUaWNrKHQrMSktbi5nZXRQaXhlbEZvclRpY2sodCk6bi53aWR0aC9uLnRpY2tzLmxlbmd0aDt2YXIgcj1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UsbD0oZS1lKm4ub3B0aW9ucy5jYXRlZ29yeVBlcmNlbnRhZ2UpLzIscz1yL287aWYobi50aWNrcy5sZW5ndGghPT1hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aCl7dmFyIGQ9bi50aWNrcy5sZW5ndGgvYS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg7cyo9ZH12YXIgdT1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlLGM9cy1zKm4ub3B0aW9ucy5iYXJQZXJjZW50YWdlO3JldHVybntkYXRhc2V0Q291bnQ6byx0aWNrSGVpZ2h0OmUsY2F0ZWdvcnlIZWlnaHQ6cixjYXRlZ29yeVNwYWNpbmc6bCxmdWxsQmFySGVpZ2h0OnMsYmFySGVpZ2h0OnUsYmFyU3BhY2luZzpjfX0sY2FsY3VsYXRlQmFySGVpZ2h0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmdldFNjYWxlRm9ySWQoZS5nZXRNZXRhKCkueUF4aXNJRCk7cmV0dXJuIGEub3B0aW9ucy5iYXJUaGlja25lc3M/YS5vcHRpb25zLmJhclRoaWNrbmVzczphLm9wdGlvbnMuc3RhY2tlZD90LmNhdGVnb3J5SGVpZ2h0OnQuYmFySGVpZ2h0fSxjYWxjdWxhdGVCYXJYOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz1OdW1iZXIoYS5nZXREYXRhc2V0KCkuZGF0YVt0XSk7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj0wLGw9MCxzPTA7ZT5zO3MrKyl7dmFyIGQ9YS5jaGFydC5kYXRhLmRhdGFzZXRzW3NdLHU9YS5jaGFydC5nZXREYXRhc2V0TWV0YShzKTtpZih1LmJhciYmdS54QXhpc0lEPT09bi5pZCYmYS5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKHMpKXt2YXIgYz1OdW1iZXIoZC5kYXRhW3RdKTswPmM/bCs9Y3x8MDpyKz1jfHwwfX1yZXR1cm4gMD5vP24uZ2V0UGl4ZWxGb3JWYWx1ZShsK28pOm4uZ2V0UGl4ZWxGb3JWYWx1ZShyK28pfXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9LGNhbGN1bGF0ZUJhclk6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1pLmdldE1ldGEoKSxvPWkuZ2V0U2NhbGVGb3JJZChuLnlBeGlzSUQpLHI9aS5nZXRCYXJJbmRleChlKSxsPW8uZ2V0UGl4ZWxGb3JWYWx1ZShudWxsLHQsZSxpLmNoYXJ0LmlzQ29tYm8pO3JldHVybiBsLT1pLmNoYXJ0LmlzQ29tYm8/YS50aWNrSGVpZ2h0LzI6MCxvLm9wdGlvbnMuc3RhY2tlZD9sK2EuY2F0ZWdvcnlIZWlnaHQvMithLmNhdGVnb3J5U3BhY2luZzpsK2EuYmFySGVpZ2h0LzIrYS5jYXRlZ29yeVNwYWNpbmcrYS5iYXJIZWlnaHQqcithLmJhclNwYWNpbmcvMithLmJhclNwYWNpbmcqcn19KX19LHt9XSwxNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5idWJibGU9e2hvdmVyOnttb2RlOlwic2luZ2xlXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIixpZDpcIngtYXhpcy0wXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImxlZnRcIixpZDpcInktYXhpcy0wXCJ9XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiLGk9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0uZGF0YVt0LmluZGV4XTtyZXR1cm4gYStcIjogKFwiK3QueExhYmVsK1wiLCBcIit0LnlMYWJlbCtcIiwgXCIraS5yK1wiKVwifX19fSx0LmNvbnRyb2xsZXJzLmJ1YmJsZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWkuZGF0YTtlLmVhY2gobixmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbihhLGksbil7dmFyIG89dGhpcyxyPW8uZ2V0TWV0YSgpLGw9by5nZXRTY2FsZUZvcklkKHIueEF4aXNJRCkscz1vLmdldFNjYWxlRm9ySWQoci55QXhpc0lEKSxkPWEuY3VzdG9tfHx7fSx1PW8uZ2V0RGF0YXNldCgpLGM9dS5kYXRhW2ldLGg9by5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LGY9by5pbmRleDtlLmV4dGVuZChhLHtfeFNjYWxlOmwsX3lTY2FsZTpzLF9kYXRhc2V0SW5kZXg6ZixfaW5kZXg6aSxfbW9kZWw6e3g6bj9sLmdldFBpeGVsRm9yRGVjaW1hbCguNSk6bC5nZXRQaXhlbEZvclZhbHVlKFwib2JqZWN0XCI9PXR5cGVvZiBjP2M6TmFOLGksZixvLmNoYXJ0LmlzQ29tYm8pLHk6bj9zLmdldEJhc2VQaXhlbCgpOnMuZ2V0UGl4ZWxGb3JWYWx1ZShjLGksZikscmFkaXVzOm4/MDpkLnJhZGl1cz9kLnJhZGl1czpvLmdldFJhZGl1cyhjKSxoaXRSYWRpdXM6ZC5oaXRSYWRpdXM/ZC5oaXRSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5oaXRSYWRpdXMsaSxoLmhpdFJhZGl1cyl9fSksdC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKG8sYSxoKTt2YXIgZz1hLl9tb2RlbDtnLnNraXA9ZC5za2lwP2Quc2tpcDppc05hTihnLngpfHxpc05hTihnLnkpLGEucGl2b3QoKX0sZ2V0UmFkaXVzOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJ8fHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5yYWRpdXN9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpczt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5zZXRIb3ZlclN0eWxlLmNhbGwoaSxhKTt2YXIgbj1pLmNoYXJ0LmRhdGEuZGF0YXNldHNbYS5fZGF0YXNldEluZGV4XSxvPWEuX2luZGV4LHI9YS5jdXN0b218fHt9LGw9YS5fbW9kZWw7bC5yYWRpdXM9ci5ob3ZlclJhZGl1cz9yLmhvdmVyUmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4uaG92ZXJSYWRpdXMsbyxpLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpK2kuZ2V0UmFkaXVzKG4uZGF0YVtvXSl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpczt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwoYSxlLGEuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCk7dmFyIGk9YS5jaGFydC5kYXRhLmRhdGFzZXRzW2UuX2RhdGFzZXRJbmRleF0uZGF0YVtlLl9pbmRleF0sbj1lLmN1c3RvbXx8e30sbz1lLl9tb2RlbDtvLnJhZGl1cz1uLnJhZGl1cz9uLnJhZGl1czphLmdldFJhZGl1cyhpKX19KX19LHt9XSwxNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzO2EuZG91Z2hudXQ9e2FuaW1hdGlvbjp7YW5pbWF0ZVJvdGF0ZTohMCxhbmltYXRlU2NhbGU6ITF9LGFzcGVjdFJhdGlvOjEsaG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTt2YXIgYT10LmRhdGEsaT1hLmRhdGFzZXRzLG49YS5sYWJlbHM7aWYoaS5sZW5ndGgpZm9yKHZhciBvPTA7bzxpWzBdLmRhdGEubGVuZ3RoOysrbyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JytpWzBdLmJhY2tncm91bmRDb2xvcltvXSsnXCI+PC9zcGFuPicpLG5bb10mJmUucHVzaChuW29dKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfSxsZWdlbmQ6e2xhYmVsczp7Z2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGE9dC5kYXRhO3JldHVybiBhLmxhYmVscy5sZW5ndGgmJmEuZGF0YXNldHMubGVuZ3RoP2EubGFiZWxzLm1hcChmdW5jdGlvbihpLG4pe3ZhciBvPXQuZ2V0RGF0YXNldE1ldGEoMCkscj1hLmRhdGFzZXRzWzBdLGw9by5kYXRhW25dLHM9bCYmbC5jdXN0b218fHt9LGQ9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsdT10Lm9wdGlvbnMuZWxlbWVudHMuYXJjLGM9cy5iYWNrZ3JvdW5kQ29sb3I/cy5iYWNrZ3JvdW5kQ29sb3I6ZChyLmJhY2tncm91bmRDb2xvcixuLHUuYmFja2dyb3VuZENvbG9yKSxoPXMuYm9yZGVyQ29sb3I/cy5ib3JkZXJDb2xvcjpkKHIuYm9yZGVyQ29sb3Isbix1LmJvcmRlckNvbG9yKSxmPXMuYm9yZGVyV2lkdGg/cy5ib3JkZXJXaWR0aDpkKHIuYm9yZGVyV2lkdGgsbix1LmJvcmRlcldpZHRoKTtyZXR1cm57dGV4dDppLGZpbGxTdHlsZTpjLHN0cm9rZVN0eWxlOmgsbGluZVdpZHRoOmYsaGlkZGVuOmlzTmFOKHIuZGF0YVtuXSl8fG8uZGF0YVtuXS5oaWRkZW4saW5kZXg6bn19KTpbXX19LG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLmluZGV4LHI9dGhpcy5jaGFydDtmb3IoYT0wLGk9KHIuZGF0YS5kYXRhc2V0c3x8W10pLmxlbmd0aDtpPmE7KythKW49ci5nZXREYXRhc2V0TWV0YShhKSxuLmRhdGFbb10mJihuLmRhdGFbb10uaGlkZGVuPSFuLmRhdGFbb10uaGlkZGVuKTtyLnVwZGF0ZSgpfX0sY3V0b3V0UGVyY2VudGFnZTo1MCxyb3RhdGlvbjpNYXRoLlBJKi0uNSxjaXJjdW1mZXJlbmNlOjIqTWF0aC5QSSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsYSl7dmFyIGk9YS5sYWJlbHNbdC5pbmRleF0sbj1cIjogXCIrYS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0uZGF0YVt0LmluZGV4XTtyZXR1cm4gZS5pc0FycmF5KGkpPyhpPWkuc2xpY2UoKSxpWzBdKz1uKTppKz1uLGl9fX19LGEucGllPWUuY2xvbmUoYS5kb3VnaG51dCksZS5leHRlbmQoYS5waWUse2N1dG91dFBlcmNlbnRhZ2U6MH0pLHQuY29udHJvbGxlcnMuZG91Z2hudXQ9dC5jb250cm9sbGVycy5waWU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkFyYyxsaW5rU2NhbGVzOmUubm9vcCxnZXRSaW5nSW5kZXg6ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAsYT0wO3Q+YTsrK2EpdGhpcy5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKGEpJiYrK2U7cmV0dXJuIGV9LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWkuY2hhcnRBcmVhLG89aS5vcHRpb25zLHI9by5lbGVtZW50cy5hcmMsbD1uLnJpZ2h0LW4ubGVmdC1yLmJvcmRlcldpZHRoLHM9bi5ib3R0b20tbi50b3Atci5ib3JkZXJXaWR0aCxkPU1hdGgubWluKGwscyksdT17eDowLHk6MH0sYz1hLmdldE1ldGEoKSxoPW8uY3V0b3V0UGVyY2VudGFnZSxmPW8uY2lyY3VtZmVyZW5jZTtpZihmPDIqTWF0aC5QSSl7dmFyIGc9by5yb3RhdGlvbiUoMipNYXRoLlBJKTtnKz0yKk1hdGguUEkqKGc+PU1hdGguUEk/LTE6ZzwtTWF0aC5QST8xOjApO3ZhciBwPWcrZixtPXt4Ok1hdGguY29zKGcpLHk6TWF0aC5zaW4oZyl9LGI9e3g6TWF0aC5jb3MocCkseTpNYXRoLnNpbihwKX0sdj0wPj1nJiZwPj0wfHxnPD0yKk1hdGguUEkmJjIqTWF0aC5QSTw9cCx4PWc8PS41Kk1hdGguUEkmJi41Kk1hdGguUEk8PXB8fGc8PTIuNSpNYXRoLlBJJiYyLjUqTWF0aC5QSTw9cCx5PWc8PS1NYXRoLlBJJiYtTWF0aC5QSTw9cHx8Zzw9TWF0aC5QSSYmTWF0aC5QSTw9cCxrPWc8PS41Ki1NYXRoLlBJJiYuNSotTWF0aC5QSTw9cHx8Zzw9MS41Kk1hdGguUEkmJjEuNSpNYXRoLlBJPD1wLFM9aC8xMDAsdz17eDp5Py0xOk1hdGgubWluKG0ueCoobS54PDA/MTpTKSxiLngqKGIueDwwPzE6UykpLHk6az8tMTpNYXRoLm1pbihtLnkqKG0ueTwwPzE6UyksYi55KihiLnk8MD8xOlMpKX0sTT17eDp2PzE6TWF0aC5tYXgobS54KihtLng+MD8xOlMpLGIueCooYi54PjA/MTpTKSkseTp4PzE6TWF0aC5tYXgobS55KihtLnk+MD8xOlMpLGIueSooYi55PjA/MTpTKSl9LEM9e3dpZHRoOi41KihNLngtdy54KSxoZWlnaHQ6LjUqKE0ueS13LnkpfTtkPU1hdGgubWluKGwvQy53aWR0aCxzL0MuaGVpZ2h0KSx1PXt4OihNLngrdy54KSotLjUseTooTS55K3cueSkqLS41fX1pLmJvcmRlcldpZHRoPWEuZ2V0TWF4Qm9yZGVyV2lkdGgoYy5kYXRhKSxpLm91dGVyUmFkaXVzPU1hdGgubWF4KChkLWkuYm9yZGVyV2lkdGgpLzIsMCksaS5pbm5lclJhZGl1cz1NYXRoLm1heChoP2kub3V0ZXJSYWRpdXMvMTAwKmg6MSwwKSxpLnJhZGl1c0xlbmd0aD0oaS5vdXRlclJhZGl1cy1pLmlubmVyUmFkaXVzKS9pLmdldFZpc2libGVEYXRhc2V0Q291bnQoKSxpLm9mZnNldFg9dS54Kmkub3V0ZXJSYWRpdXMsaS5vZmZzZXRZPXUueSppLm91dGVyUmFkaXVzLGMudG90YWw9YS5jYWxjdWxhdGVUb3RhbCgpLGEub3V0ZXJSYWRpdXM9aS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCphLmdldFJpbmdJbmRleChhLmluZGV4KSxhLmlubmVyUmFkaXVzPWEub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgsZS5lYWNoKGMuZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uY2hhcnQscj1vLmNoYXJ0QXJlYSxsPW8ub3B0aW9ucyxzPWwuYW5pbWF0aW9uLGQ9KHIubGVmdCtyLnJpZ2h0KS8yLHU9KHIudG9wK3IuYm90dG9tKS8yLGM9bC5yb3RhdGlvbixoPWwucm90YXRpb24sZj1uLmdldERhdGFzZXQoKSxnPWkmJnMuYW5pbWF0ZVJvdGF0ZT8wOnQuaGlkZGVuPzA6bi5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKGYuZGF0YVthXSkqKGwuY2lyY3VtZmVyZW5jZS8oMipNYXRoLlBJKSkscD1pJiZzLmFuaW1hdGVTY2FsZT8wOm4uaW5uZXJSYWRpdXMsbT1pJiZzLmFuaW1hdGVTY2FsZT8wOm4ub3V0ZXJSYWRpdXMsYj1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdDtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX21vZGVsOnt4OmQrby5vZmZzZXRYLHk6dStvLm9mZnNldFksc3RhcnRBbmdsZTpjLGVuZEFuZ2xlOmgsY2lyY3VtZmVyZW5jZTpnLG91dGVyUmFkaXVzOm0saW5uZXJSYWRpdXM6cCxsYWJlbDpiKGYubGFiZWwsYSxvLmRhdGEubGFiZWxzW2FdKX19KTt2YXIgdj10Ll9tb2RlbDt0aGlzLnJlbW92ZUhvdmVyU3R5bGUodCksaSYmcy5hbmltYXRlUm90YXRlfHwoMD09PWE/di5zdGFydEFuZ2xlPWwucm90YXRpb246di5zdGFydEFuZ2xlPW4uZ2V0TWV0YSgpLmRhdGFbYS0xXS5fbW9kZWwuZW5kQW5nbGUsdi5lbmRBbmdsZT12LnN0YXJ0QW5nbGUrdi5jaXJjdW1mZXJlbmNlKSx0LnBpdm90KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKHRoaXMsZSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMuYXJjKX0sY2FsY3VsYXRlVG90YWw6ZnVuY3Rpb24oKXt2YXIgdCxhPXRoaXMuZ2V0RGF0YXNldCgpLGk9dGhpcy5nZXRNZXRhKCksbj0wO3JldHVybiBlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUsaSl7dD1hLmRhdGFbaV0saXNOYU4odCl8fGUuaGlkZGVufHwobis9TWF0aC5hYnModCkpfSksbn0sY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldE1ldGEoKS50b3RhbDtyZXR1cm4gZT4wJiYhaXNOYU4odCk/MipNYXRoLlBJKih0L2UpOjB9LGdldE1heEJvcmRlcldpZHRoOmZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxhLGk9MCxuPXRoaXMuaW5kZXgsbz10Lmxlbmd0aCxyPTA7bz5yO3IrKyllPXRbcl0uX21vZGVsP3Rbcl0uX21vZGVsLmJvcmRlcldpZHRoOjAsYT10W3JdLl9jaGFydD90W3JdLl9jaGFydC5jb25maWcuZGF0YS5kYXRhc2V0c1tuXS5ob3ZlckJvcmRlcldpZHRoOjAsaT1lPmk/ZTppLGk9YT5pP2E6aTtyZXR1cm4gaX19KX19LHt9XSwxODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIGEuZ2V0VmFsdWVPckRlZmF1bHQodC5zaG93TGluZSxlLnNob3dMaW5lcyl9dmFyIGE9dC5oZWxwZXJzO3QuZGVmYXVsdHMubGluZT17c2hvd0xpbmVzOiEwLHNwYW5HYXBzOiExLGhvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJjYXRlZ29yeVwiLGlkOlwieC1heGlzLTBcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLGlkOlwieS1heGlzLTBcIn1dfX0sdC5jb250cm9sbGVycy5saW5lPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhc2V0RWxlbWVudFR5cGU6dC5lbGVtZW50cy5MaW5lLGRhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgaSxuLG8scj10aGlzLGw9ci5nZXRNZXRhKCkscz1sLmRhdGFzZXQsZD1sLmRhdGF8fFtdLHU9ci5jaGFydC5vcHRpb25zLGM9dS5lbGVtZW50cy5saW5lLGg9ci5nZXRTY2FsZUZvcklkKGwueUF4aXNJRCksZj1yLmdldERhdGFzZXQoKSxnPWUoZix1KTtmb3IoZyYmKG89cy5jdXN0b218fHt9LHZvaWQgMCE9PWYudGVuc2lvbiYmdm9pZCAwPT09Zi5saW5lVGVuc2lvbiYmKGYubGluZVRlbnNpb249Zi50ZW5zaW9uKSxzLl9zY2FsZT1oLHMuX2RhdGFzZXRJbmRleD1yLmluZGV4LHMuX2NoaWxkcmVuPWQscy5fbW9kZWw9e3NwYW5HYXBzOmYuc3BhbkdhcHM/Zi5zcGFuR2Fwczp1LnNwYW5HYXBzLHRlbnNpb246by50ZW5zaW9uP28udGVuc2lvbjphLmdldFZhbHVlT3JEZWZhdWx0KGYubGluZVRlbnNpb24sYy50ZW5zaW9uKSxiYWNrZ3JvdW5kQ29sb3I6by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6Zi5iYWNrZ3JvdW5kQ29sb3J8fGMuYmFja2dyb3VuZENvbG9yLGJvcmRlcldpZHRoOm8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDpmLmJvcmRlcldpZHRofHxjLmJvcmRlcldpZHRoLGJvcmRlckNvbG9yOm8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjpmLmJvcmRlckNvbG9yfHxjLmJvcmRlckNvbG9yLGJvcmRlckNhcFN0eWxlOm8uYm9yZGVyQ2FwU3R5bGU/by5ib3JkZXJDYXBTdHlsZTpmLmJvcmRlckNhcFN0eWxlfHxjLmJvcmRlckNhcFN0eWxlLGJvcmRlckRhc2g6by5ib3JkZXJEYXNoP28uYm9yZGVyRGFzaDpmLmJvcmRlckRhc2h8fGMuYm9yZGVyRGFzaCxib3JkZXJEYXNoT2Zmc2V0Om8uYm9yZGVyRGFzaE9mZnNldD9vLmJvcmRlckRhc2hPZmZzZXQ6Zi5ib3JkZXJEYXNoT2Zmc2V0fHxjLmJvcmRlckRhc2hPZmZzZXQsYm9yZGVySm9pblN0eWxlOm8uYm9yZGVySm9pblN0eWxlP28uYm9yZGVySm9pblN0eWxlOmYuYm9yZGVySm9pblN0eWxlfHxjLmJvcmRlckpvaW5TdHlsZSxmaWxsOm8uZmlsbD9vLmZpbGw6dm9pZCAwIT09Zi5maWxsP2YuZmlsbDpjLmZpbGwsc3RlcHBlZExpbmU6by5zdGVwcGVkTGluZT9vLnN0ZXBwZWRMaW5lOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5zdGVwcGVkTGluZSxjLnN0ZXBwZWQpLGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6by5jdWJpY0ludGVycG9sYXRpb25Nb2RlP28uY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTphLmdldFZhbHVlT3JEZWZhdWx0KGYuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSxjLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUpLHNjYWxlVG9wOmgudG9wLHNjYWxlQm90dG9tOmguYm90dG9tLHNjYWxlWmVybzpoLmdldEJhc2VQaXhlbCgpfSxzLnBpdm90KCkpLGk9MCxuPWQubGVuZ3RoO24+aTsrK2kpci51cGRhdGVFbGVtZW50KGRbaV0saSx0KTtmb3IoZyYmMCE9PXMuX21vZGVsLnRlbnNpb24mJnIudXBkYXRlQmV6aWVyQ29udHJvbFBvaW50cygpLGk9MCxuPWQubGVuZ3RoO24+aTsrK2kpZFtpXS5waXZvdCgpfSxnZXRQb2ludEJhY2tncm91bmRDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5iYWNrZ3JvdW5kQ29sb3Isbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5iYWNrZ3JvdW5kQ29sb3I/aT1vLmJhY2tncm91bmRDb2xvcjpuLnBvaW50QmFja2dyb3VuZENvbG9yP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJhY2tncm91bmRDb2xvcixlLGkpOm4uYmFja2dyb3VuZENvbG9yJiYoaT1uLmJhY2tncm91bmRDb2xvciksaX0sZ2V0UG9pbnRCb3JkZXJDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ib3JkZXJDb2xvcixuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJvcmRlckNvbG9yP2k9by5ib3JkZXJDb2xvcjpuLnBvaW50Qm9yZGVyQ29sb3I/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50Qm9yZGVyQ29sb3IsZSxpKTpuLmJvcmRlckNvbG9yJiYoaT1uLmJvcmRlckNvbG9yKSxpfSxnZXRQb2ludEJvcmRlcldpZHRoOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJvcmRlcldpZHRoLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYm9yZGVyV2lkdGg/aT1vLmJvcmRlcldpZHRoOm4ucG9pbnRCb3JkZXJXaWR0aD9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCb3JkZXJXaWR0aCxlLGkpOm4uYm9yZGVyV2lkdGgmJihpPW4uYm9yZGVyV2lkdGgpLGl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxlLGkpe3ZhciBuLG8scj10aGlzLGw9ci5nZXRNZXRhKCkscz10LmN1c3RvbXx8e30sZD1yLmdldERhdGFzZXQoKSx1PXIuaW5kZXgsYz1kLmRhdGFbZV0saD1yLmdldFNjYWxlRm9ySWQobC55QXhpc0lEKSxmPXIuZ2V0U2NhbGVGb3JJZChsLnhBeGlzSUQpLGc9ci5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LHA9ci5jaGFydC5kYXRhLmxhYmVsc3x8W10sbT0xPT09cC5sZW5ndGh8fDE9PT1kLmRhdGEubGVuZ3RofHxyLmNoYXJ0LmlzQ29tYm87dm9pZCAwIT09ZC5yYWRpdXMmJnZvaWQgMD09PWQucG9pbnRSYWRpdXMmJihkLnBvaW50UmFkaXVzPWQucmFkaXVzKSx2b2lkIDAhPT1kLmhpdFJhZGl1cyYmdm9pZCAwPT09ZC5wb2ludEhpdFJhZGl1cyYmKGQucG9pbnRIaXRSYWRpdXM9ZC5oaXRSYWRpdXMpLG49Zi5nZXRQaXhlbEZvclZhbHVlKFwib2JqZWN0XCI9PXR5cGVvZiBjP2M6TmFOLGUsdSxtKSxvPWk/aC5nZXRCYXNlUGl4ZWwoKTpyLmNhbGN1bGF0ZVBvaW50WShjLGUsdSksdC5feFNjYWxlPWYsdC5feVNjYWxlPWgsdC5fZGF0YXNldEluZGV4PXUsdC5faW5kZXg9ZSx0Ll9tb2RlbD17eDpuLHk6byxza2lwOnMuc2tpcHx8aXNOYU4obil8fGlzTmFOKG8pLHJhZGl1czpzLnJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludFJhZGl1cyxlLGcucmFkaXVzKSxwb2ludFN0eWxlOnMucG9pbnRTdHlsZXx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludFN0eWxlLGUsZy5wb2ludFN0eWxlKSxiYWNrZ3JvdW5kQ29sb3I6ci5nZXRQb2ludEJhY2tncm91bmRDb2xvcih0LGUpLGJvcmRlckNvbG9yOnIuZ2V0UG9pbnRCb3JkZXJDb2xvcih0LGUpLGJvcmRlcldpZHRoOnIuZ2V0UG9pbnRCb3JkZXJXaWR0aCh0LGUpLHRlbnNpb246bC5kYXRhc2V0Ll9tb2RlbD9sLmRhdGFzZXQuX21vZGVsLnRlbnNpb246MCxzdGVwcGVkTGluZTpsLmRhdGFzZXQuX21vZGVsP2wuZGF0YXNldC5fbW9kZWwuc3RlcHBlZExpbmU6ITEsaGl0UmFkaXVzOnMuaGl0UmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50SGl0UmFkaXVzLGUsZy5oaXRSYWRpdXMpfX0sY2FsY3VsYXRlUG9pbnRZOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxuLG8scj10aGlzLGw9ci5jaGFydCxzPXIuZ2V0TWV0YSgpLGQ9ci5nZXRTY2FsZUZvcklkKHMueUF4aXNJRCksdT0wLGM9MDtpZihkLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKGk9MDthPmk7aSsrKWlmKG49bC5kYXRhLmRhdGFzZXRzW2ldLG89bC5nZXREYXRhc2V0TWV0YShpKSxcImxpbmVcIj09PW8udHlwZSYmby55QXhpc0lEPT09ZC5pZCYmbC5pc0RhdGFzZXRWaXNpYmxlKGkpKXt2YXIgaD1OdW1iZXIoZC5nZXRSaWdodFZhbHVlKG4uZGF0YVtlXSkpOzA+aD9jKz1ofHwwOnUrPWh8fDB9dmFyIGY9TnVtYmVyKGQuZ2V0UmlnaHRWYWx1ZSh0KSk7cmV0dXJuIDA+Zj9kLmdldFBpeGVsRm9yVmFsdWUoYytmKTpkLmdldFBpeGVsRm9yVmFsdWUodStmKX1yZXR1cm4gZC5nZXRQaXhlbEZvclZhbHVlKHQpfSx1cGRhdGVCZXppZXJDb250cm9sUG9pbnRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUsYSl7cmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHQsYSksZSl9dmFyIGUsaSxuLG8scixsPXRoaXMscz1sLmdldE1ldGEoKSxkPWwuY2hhcnQuY2hhcnRBcmVhLHU9cy5kYXRhfHxbXTtpZihzLmRhdGFzZXQuX21vZGVsLnNwYW5HYXBzJiYodT11LmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hdC5fbW9kZWwuc2tpcH0pKSxcIm1vbm90b25lXCI9PT1zLmRhdGFzZXQuX21vZGVsLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUpYS5zcGxpbmVDdXJ2ZU1vbm90b25lKHUpO2Vsc2UgZm9yKGU9MCxpPXUubGVuZ3RoO2k+ZTsrK2Upbj11W2VdLG89bi5fbW9kZWwscj1hLnNwbGluZUN1cnZlKGEucHJldmlvdXNJdGVtKHUsZSkuX21vZGVsLG8sYS5uZXh0SXRlbSh1LGUpLl9tb2RlbCxzLmRhdGFzZXQuX21vZGVsLnRlbnNpb24pLG8uY29udHJvbFBvaW50UHJldmlvdXNYPXIucHJldmlvdXMueCxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT1yLnByZXZpb3VzLnksby5jb250cm9sUG9pbnROZXh0WD1yLm5leHQueCxvLmNvbnRyb2xQb2ludE5leHRZPXIubmV4dC55O2lmKGwuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLmNhcEJlemllclBvaW50cylmb3IoZT0wLGk9dS5sZW5ndGg7aT5lOysrZSlvPXVbZV0uX21vZGVsLG8uY29udHJvbFBvaW50UHJldmlvdXNYPXQoby5jb250cm9sUG9pbnRQcmV2aW91c1gsZC5sZWZ0LGQucmlnaHQpLG8uY29udHJvbFBvaW50UHJldmlvdXNZPXQoby5jb250cm9sUG9pbnRQcmV2aW91c1ksZC50b3AsZC5ib3R0b20pLG8uY29udHJvbFBvaW50TmV4dFg9dChvLmNvbnRyb2xQb2ludE5leHRYLGQubGVmdCxkLnJpZ2h0KSxvLmNvbnRyb2xQb2ludE5leHRZPXQoby5jb250cm9sUG9pbnROZXh0WSxkLnRvcCxkLmJvdHRvbSl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGEsaSxuPXRoaXMsbz1uLmdldE1ldGEoKSxyPW8uZGF0YXx8W10sbD10fHwxO2ZvcihhPTAsaT1yLmxlbmd0aDtpPmE7KythKXJbYV0udHJhbnNpdGlvbihsKTtmb3IoZShuLmdldERhdGFzZXQoKSxuLmNoYXJ0Lm9wdGlvbnMpJiZvLmRhdGFzZXQudHJhbnNpdGlvbihsKS5kcmF3KCksYT0wLGk9ci5sZW5ndGg7aT5hOysrYSlyW2FdLmRyYXcoKX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWw7by5yYWRpdXM9bi5ob3ZlclJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyUmFkaXVzLGksdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IsaSxhLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcnx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQm9yZGVyQ29sb3IsaSxhLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRofHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxpLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1lLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxuPXQuX2luZGV4LG89dC5jdXN0b218fHt9LHI9dC5fbW9kZWw7dm9pZCAwIT09aS5yYWRpdXMmJnZvaWQgMD09PWkucG9pbnRSYWRpdXMmJihpLnBvaW50UmFkaXVzPWkucmFkaXVzKSxyLnJhZGl1cz1vLnJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoaS5wb2ludFJhZGl1cyxuLGUuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5yYWRpdXMpLHIuYmFja2dyb3VuZENvbG9yPWUuZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3IodCxuKSxyLmJvcmRlckNvbG9yPWUuZ2V0UG9pbnRCb3JkZXJDb2xvcih0LG4pLHIuYm9yZGVyV2lkdGg9ZS5nZXRQb2ludEJvcmRlcldpZHRoKHQsbil9fSl9fSx7fV0sMTk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMucG9sYXJBcmVhPXtzY2FsZTp7dHlwZTpcInJhZGlhbExpbmVhclwiLGxpbmVBcmM6ITAsdGlja3M6e2JlZ2luQXRaZXJvOiEwfX0sYW5pbWF0aW9uOnthbmltYXRlUm90YXRlOiEwLGFuaW1hdGVTY2FsZTohMH0sc3RhcnRBbmdsZTotLjUqTWF0aC5QSSxhc3BlY3RSYXRpbzoxLGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7dmFyIGE9dC5kYXRhLGk9YS5kYXRhc2V0cyxuPWEubGFiZWxzO2lmKGkubGVuZ3RoKWZvcih2YXIgbz0wO288aVswXS5kYXRhLmxlbmd0aDsrK28pZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicraVswXS5iYWNrZ3JvdW5kQ29sb3Jbb10rJ1wiPjwvc3Bhbj4nKSxuW29dJiZlLnB1c2gobltvXSksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX0sbGVnZW5kOntsYWJlbHM6e2dlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBhPXQuZGF0YTtyZXR1cm4gYS5sYWJlbHMubGVuZ3RoJiZhLmRhdGFzZXRzLmxlbmd0aD9hLmxhYmVscy5tYXAoZnVuY3Rpb24oaSxuKXt2YXIgbz10LmdldERhdGFzZXRNZXRhKDApLHI9YS5kYXRhc2V0c1swXSxsPW8uZGF0YVtuXSxzPWwuY3VzdG9tfHx7fSxkPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHU9dC5vcHRpb25zLmVsZW1lbnRzLmFyYyxjPXMuYmFja2dyb3VuZENvbG9yP3MuYmFja2dyb3VuZENvbG9yOmQoci5iYWNrZ3JvdW5kQ29sb3Isbix1LmJhY2tncm91bmRDb2xvciksaD1zLmJvcmRlckNvbG9yP3MuYm9yZGVyQ29sb3I6ZChyLmJvcmRlckNvbG9yLG4sdS5ib3JkZXJDb2xvciksZj1zLmJvcmRlcldpZHRoP3MuYm9yZGVyV2lkdGg6ZChyLmJvcmRlcldpZHRoLG4sdS5ib3JkZXJXaWR0aCk7cmV0dXJue3RleHQ6aSxmaWxsU3R5bGU6YyxzdHJva2VTdHlsZTpoLGxpbmVXaWR0aDpmLGhpZGRlbjppc05hTihyLmRhdGFbbl0pfHxvLmRhdGFbbl0uaGlkZGVuLGluZGV4Om59fSk6W119fSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS5pbmRleCxyPXRoaXMuY2hhcnQ7Zm9yKGE9MCxpPShyLmRhdGEuZGF0YXNldHN8fFtdKS5sZW5ndGg7aT5hOysrYSluPXIuZ2V0RGF0YXNldE1ldGEoYSksbi5kYXRhW29dLmhpZGRlbj0hbi5kYXRhW29dLmhpZGRlbjtyLnVwZGF0ZSgpfX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGUpe3JldHVybiBlLmxhYmVsc1t0LmluZGV4XStcIjogXCIrdC55TGFiZWx9fX19LHQuY29udHJvbGxlcnMucG9sYXJBcmVhPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5BcmMsbGlua1NjYWxlczplLm5vb3AsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49aS5jaGFydEFyZWEsbz1hLmdldE1ldGEoKSxyPWkub3B0aW9ucyxsPXIuZWxlbWVudHMuYXJjLHM9TWF0aC5taW4obi5yaWdodC1uLmxlZnQsbi5ib3R0b20tbi50b3ApO2kub3V0ZXJSYWRpdXM9TWF0aC5tYXgoKHMtbC5ib3JkZXJXaWR0aC8yKS8yLDApLGkuaW5uZXJSYWRpdXM9TWF0aC5tYXgoci5jdXRvdXRQZXJjZW50YWdlP2kub3V0ZXJSYWRpdXMvMTAwKnIuY3V0b3V0UGVyY2VudGFnZToxLDApLGkucmFkaXVzTGVuZ3RoPShpLm91dGVyUmFkaXVzLWkuaW5uZXJSYWRpdXMpL2kuZ2V0VmlzaWJsZURhdGFzZXRDb3VudCgpLGEub3V0ZXJSYWRpdXM9aS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCphLmluZGV4LGEuaW5uZXJSYWRpdXM9YS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCxvLmNvdW50PWEuY291bnRWaXNpYmxlRWxlbWVudHMoKSxlLmVhY2goby5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXtmb3IodmFyIG49dGhpcyxvPW4uY2hhcnQscj1uLmdldERhdGFzZXQoKSxsPW8ub3B0aW9ucyxzPWwuYW5pbWF0aW9uLGQ9by5zY2FsZSx1PWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LGM9by5kYXRhLmxhYmVscyxoPW4uY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShyLmRhdGFbYV0pLGY9ZC54Q2VudGVyLGc9ZC55Q2VudGVyLHA9MCxtPW4uZ2V0TWV0YSgpLGI9MDthPmI7KytiKWlzTmFOKHIuZGF0YVtiXSl8fG0uZGF0YVtiXS5oaWRkZW58fCsrcDt2YXIgdj1sLnN0YXJ0QW5nbGUseD10LmhpZGRlbj8wOmQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoci5kYXRhW2FdKSx5PXYraCpwLGs9eSsodC5oaWRkZW4/MDpoKSxTPXMuYW5pbWF0ZVNjYWxlPzA6ZC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShyLmRhdGFbYV0pO2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfc2NhbGU6ZCxfbW9kZWw6e3g6Zix5OmcsaW5uZXJSYWRpdXM6MCxvdXRlclJhZGl1czppP1M6eCxzdGFydEFuZ2xlOmkmJnMuYW5pbWF0ZVJvdGF0ZT92OnksZW5kQW5nbGU6aSYmcy5hbmltYXRlUm90YXRlP3Y6ayxsYWJlbDp1KGMsYSxjW2FdKX19KSxuLnJlbW92ZUhvdmVyU3R5bGUodCksdC5waXZvdCgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbCh0aGlzLGUsdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmFyYyl9LGNvdW50VmlzaWJsZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXREYXRhc2V0KCksYT10aGlzLmdldE1ldGEoKSxpPTA7cmV0dXJuIGUuZWFjaChhLmRhdGEsZnVuY3Rpb24oZSxhKXtpc05hTih0LmRhdGFbYV0pfHxlLmhpZGRlbnx8aSsrfSksaX0sY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldE1ldGEoKS5jb3VudDtyZXR1cm4gZT4wJiYhaXNOYU4odCk/MipNYXRoLlBJL2U6MH19KX19LHt9XSwyMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5yYWRhcj17YXNwZWN0UmF0aW86MSxzY2FsZTp7dHlwZTpcInJhZGlhbExpbmVhclwifSxlbGVtZW50czp7bGluZTp7dGVuc2lvbjowfX19LHQuY29udHJvbGxlcnMucmFkYXI9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFzZXRFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkxpbmUsZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsbGlua1NjYWxlczplLm5vb3AsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWkuZGF0YXNldCxvPWkuZGF0YSxyPW4uY3VzdG9tfHx7fSxsPWEuZ2V0RGF0YXNldCgpLHM9YS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUsZD1hLmNoYXJ0LnNjYWxlO3ZvaWQgMCE9PWwudGVuc2lvbiYmdm9pZCAwPT09bC5saW5lVGVuc2lvbiYmKGwubGluZVRlbnNpb249bC50ZW5zaW9uKSxlLmV4dGVuZChpLmRhdGFzZXQse19kYXRhc2V0SW5kZXg6YS5pbmRleCxfY2hpbGRyZW46byxfbG9vcDohMCxfbW9kZWw6e3RlbnNpb246ci50ZW5zaW9uP3IudGVuc2lvbjplLmdldFZhbHVlT3JEZWZhdWx0KGwubGluZVRlbnNpb24scy50ZW5zaW9uKSxiYWNrZ3JvdW5kQ29sb3I6ci5iYWNrZ3JvdW5kQ29sb3I/ci5iYWNrZ3JvdW5kQ29sb3I6bC5iYWNrZ3JvdW5kQ29sb3J8fHMuYmFja2dyb3VuZENvbG9yLGJvcmRlcldpZHRoOnIuYm9yZGVyV2lkdGg/ci5ib3JkZXJXaWR0aDpsLmJvcmRlcldpZHRofHxzLmJvcmRlcldpZHRoLGJvcmRlckNvbG9yOnIuYm9yZGVyQ29sb3I/ci5ib3JkZXJDb2xvcjpsLmJvcmRlckNvbG9yfHxzLmJvcmRlckNvbG9yLGZpbGw6ci5maWxsP3IuZmlsbDp2b2lkIDAhPT1sLmZpbGw/bC5maWxsOnMuZmlsbCxib3JkZXJDYXBTdHlsZTpyLmJvcmRlckNhcFN0eWxlP3IuYm9yZGVyQ2FwU3R5bGU6bC5ib3JkZXJDYXBTdHlsZXx8cy5ib3JkZXJDYXBTdHlsZSxib3JkZXJEYXNoOnIuYm9yZGVyRGFzaD9yLmJvcmRlckRhc2g6bC5ib3JkZXJEYXNofHxzLmJvcmRlckRhc2gsYm9yZGVyRGFzaE9mZnNldDpyLmJvcmRlckRhc2hPZmZzZXQ/ci5ib3JkZXJEYXNoT2Zmc2V0OmwuYm9yZGVyRGFzaE9mZnNldHx8cy5ib3JkZXJEYXNoT2Zmc2V0LGJvcmRlckpvaW5TdHlsZTpyLmJvcmRlckpvaW5TdHlsZT9yLmJvcmRlckpvaW5TdHlsZTpsLmJvcmRlckpvaW5TdHlsZXx8cy5ib3JkZXJKb2luU3R5bGUsc2NhbGVUb3A6ZC50b3Asc2NhbGVCb3R0b206ZC5ib3R0b20sc2NhbGVaZXJvOmQuZ2V0QmFzZVBvc2l0aW9uKCl9fSksaS5kYXRhc2V0LnBpdm90KCksZS5lYWNoKG8sZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSxhKSxhLnVwZGF0ZUJlemllckNvbnRyb2xQb2ludHMoKX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPXQuY3VzdG9tfHx7fSxyPW4uZ2V0RGF0YXNldCgpLGw9bi5jaGFydC5zY2FsZSxzPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxkPWwuZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlKGEsci5kYXRhW2FdKTtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX3NjYWxlOmwsX21vZGVsOnt4Omk/bC54Q2VudGVyOmQueCx5Omk/bC55Q2VudGVyOmQueSx0ZW5zaW9uOm8udGVuc2lvbj9vLnRlbnNpb246ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLnRlbnNpb24sbi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUudGVuc2lvbikscmFkaXVzOm8ucmFkaXVzP28ucmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRSYWRpdXMsYSxzLnJhZGl1cyksYmFja2dyb3VuZENvbG9yOm8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCYWNrZ3JvdW5kQ29sb3IsYSxzLmJhY2tncm91bmRDb2xvciksYm9yZGVyQ29sb3I6by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCb3JkZXJDb2xvcixhLHMuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOm8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50Qm9yZGVyV2lkdGgsYSxzLmJvcmRlcldpZHRoKSxwb2ludFN0eWxlOm8ucG9pbnRTdHlsZT9vLnBvaW50U3R5bGU6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludFN0eWxlLGEscy5wb2ludFN0eWxlKSxoaXRSYWRpdXM6by5oaXRSYWRpdXM/by5oaXRSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5oaXRSYWRpdXMsYSxzLmhpdFJhZGl1cyl9fSksdC5fbW9kZWwuc2tpcD1vLnNraXA/by5za2lwOmlzTmFOKHQuX21vZGVsLngpfHxpc05hTih0Ll9tb2RlbC55KX0sdXBkYXRlQmV6aWVyQ29udHJvbFBvaW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuY2hhcnQuY2hhcnRBcmVhLGE9dGhpcy5nZXRNZXRhKCk7ZS5lYWNoKGEuZGF0YSxmdW5jdGlvbihpLG4pe3ZhciBvPWkuX21vZGVsLHI9ZS5zcGxpbmVDdXJ2ZShlLnByZXZpb3VzSXRlbShhLmRhdGEsbiwhMCkuX21vZGVsLG8sZS5uZXh0SXRlbShhLmRhdGEsbiwhMCkuX21vZGVsLG8udGVuc2lvbik7by5jb250cm9sUG9pbnRQcmV2aW91c1g9TWF0aC5tYXgoTWF0aC5taW4oci5wcmV2aW91cy54LHQucmlnaHQpLHQubGVmdCksby5jb250cm9sUG9pbnRQcmV2aW91c1k9TWF0aC5tYXgoTWF0aC5taW4oci5wcmV2aW91cy55LHQuYm90dG9tKSx0LnRvcCksby5jb250cm9sUG9pbnROZXh0WD1NYXRoLm1heChNYXRoLm1pbihyLm5leHQueCx0LnJpZ2h0KSx0LmxlZnQpLG8uY29udHJvbFBvaW50TmV4dFk9TWF0aC5tYXgoTWF0aC5taW4oci5uZXh0LnksdC5ib3R0b20pLHQudG9wKSxpLnBpdm90KCl9KX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmdldE1ldGEoKSxpPXR8fDE7ZS5lYWNoKGEuZGF0YSxmdW5jdGlvbih0KXt0LnRyYW5zaXRpb24oaSl9KSxhLmRhdGFzZXQudHJhbnNpdGlvbihpKS5kcmF3KCksZS5lYWNoKGEuZGF0YSxmdW5jdGlvbih0KXt0LmRyYXcoKX0pfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5jdXN0b218fHt9LG49dC5faW5kZXgsbz10Ll9tb2RlbDtvLnJhZGl1cz1pLmhvdmVyUmFkaXVzP2kuaG92ZXJSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyUmFkaXVzLG4sdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1pLmhvdmVyQmFja2dyb3VuZENvbG9yP2kuaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yLG4sZS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1pLmhvdmVyQm9yZGVyQ29sb3I/aS5ob3ZlckJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJvcmRlckNvbG9yLG4sZS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPWkuaG92ZXJCb3JkZXJXaWR0aD9pLmhvdmVyQm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQm9yZGVyV2lkdGgsbixvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuY3VzdG9tfHx7fSxuPXQuX2luZGV4LG89dC5fbW9kZWwscj10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQ7by5yYWRpdXM9aS5yYWRpdXM/aS5yYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5yYWRpdXMsbixyLnJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9aS5iYWNrZ3JvdW5kQ29sb3I/aS5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJhY2tncm91bmRDb2xvcixuLHIuYmFja2dyb3VuZENvbG9yKSxvLmJvcmRlckNvbG9yPWkuYm9yZGVyQ29sb3I/aS5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50Qm9yZGVyQ29sb3IsbixyLmJvcmRlckNvbG9yKSxvLmJvcmRlcldpZHRoPWkuYm9yZGVyV2lkdGg/aS5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50Qm9yZGVyV2lkdGgsbixyLmJvcmRlcldpZHRoKX19KX19LHt9XSwyMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwuYW5pbWF0aW9uPXtkdXJhdGlvbjoxZTMsZWFzaW5nOlwiZWFzZU91dFF1YXJ0XCIsb25Qcm9ncmVzczplLm5vb3Asb25Db21wbGV0ZTplLm5vb3B9LHQuQW5pbWF0aW9uPXQuRWxlbWVudC5leHRlbmQoe2N1cnJlbnRTdGVwOm51bGwsbnVtU3RlcHM6NjAsZWFzaW5nOlwiXCIscmVuZGVyOm51bGwsb25BbmltYXRpb25Qcm9ncmVzczpudWxsLG9uQW5pbWF0aW9uQ29tcGxldGU6bnVsbH0pLHQuYW5pbWF0aW9uU2VydmljZT17ZnJhbWVEdXJhdGlvbjoxNyxhbmltYXRpb25zOltdLGRyb3BGcmFtZXM6MCxyZXF1ZXN0Om51bGwsYWRkQW5pbWF0aW9uOmZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXRoaXM7aXx8KHQuYW5pbWF0aW5nPSEwKTtmb3IodmFyIG89MDtvPG4uYW5pbWF0aW9ucy5sZW5ndGg7KytvKWlmKG4uYW5pbWF0aW9uc1tvXS5jaGFydEluc3RhbmNlPT09dClyZXR1cm4gdm9pZChuLmFuaW1hdGlvbnNbb10uYW5pbWF0aW9uT2JqZWN0PWUpO24uYW5pbWF0aW9ucy5wdXNoKHtjaGFydEluc3RhbmNlOnQsYW5pbWF0aW9uT2JqZWN0OmV9KSwxPT09bi5hbmltYXRpb25zLmxlbmd0aCYmbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX0sY2FuY2VsQW5pbWF0aW9uOmZ1bmN0aW9uKHQpe3ZhciBhPWUuZmluZEluZGV4KHRoaXMuYW5pbWF0aW9ucyxmdW5jdGlvbihlKXtyZXR1cm4gZS5jaGFydEluc3RhbmNlPT09dH0pOy0xIT09YSYmKHRoaXMuYW5pbWF0aW9ucy5zcGxpY2UoYSwxKSx0LmFuaW1hdGluZz0hMSl9LHJlcXVlc3RBbmltYXRpb25GcmFtZTpmdW5jdGlvbigpe3ZhciB0PXRoaXM7bnVsbD09PXQucmVxdWVzdCYmKHQucmVxdWVzdD1lLnJlcXVlc3RBbmltRnJhbWUuY2FsbCh3aW5kb3csZnVuY3Rpb24oKXt0LnJlcXVlc3Q9bnVsbCx0LnN0YXJ0RGlnZXN0KCl9KSl9LHN0YXJ0RGlnZXN0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPURhdGUubm93KCksYT0wO3QuZHJvcEZyYW1lcz4xJiYoYT1NYXRoLmZsb29yKHQuZHJvcEZyYW1lcyksdC5kcm9wRnJhbWVzPXQuZHJvcEZyYW1lcyUxKTtmb3IodmFyIGk9MDtpPHQuYW5pbWF0aW9ucy5sZW5ndGg7KW51bGw9PT10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwJiYodC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD0wKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwKz0xK2EsdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD50LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzJiYodC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LnJlbmRlcih0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0KSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcy5jYWxsJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MuY2FsbCh0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0pLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9PT10LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm51bVN0ZXBzPyh0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZS5jYWxsJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUuY2FsbCh0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZSx0LmFuaW1hdGlvbnNbaV0pLHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLmFuaW1hdGluZz0hMSx0LmFuaW1hdGlvbnMuc3BsaWNlKGksMSkpOisraTt2YXIgbj1EYXRlLm5vdygpLG89KG4tZSkvdC5mcmFtZUR1cmF0aW9uO3QuZHJvcEZyYW1lcys9byx0LmFuaW1hdGlvbnMubGVuZ3RoPjAmJnQucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9fX19LHt9XSwyMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmNhbnZhc0hlbHBlcnM9e307ZS5kcmF3UG9pbnQ9ZnVuY3Rpb24odCxlLGEsaSxuKXt2YXIgbyxyLGwscyxkLHU7aWYoXCJvYmplY3RcIj09dHlwZW9mIGUmJihvPWUudG9TdHJpbmcoKSxcIltvYmplY3QgSFRNTEltYWdlRWxlbWVudF1cIj09PW98fFwiW29iamVjdCBIVE1MQ2FudmFzRWxlbWVudF1cIj09PW8pKXJldHVybiB2b2lkIHQuZHJhd0ltYWdlKGUsaS1lLndpZHRoLzIsbi1lLmhlaWdodC8yKTtpZighKGlzTmFOKGEpfHwwPj1hKSl7c3dpdGNoKGUpe2RlZmF1bHQ6dC5iZWdpblBhdGgoKSx0LmFyYyhpLG4sYSwwLDIqTWF0aC5QSSksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJ0cmlhbmdsZVwiOnQuYmVnaW5QYXRoKCkscj0zKmEvTWF0aC5zcXJ0KDMpLGQ9cipNYXRoLnNxcnQoMykvMix0Lm1vdmVUbyhpLXIvMixuK2QvMyksdC5saW5lVG8oaStyLzIsbitkLzMpLHQubGluZVRvKGksbi0yKmQvMyksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJyZWN0XCI6dT0xL01hdGguU1FSVDIqYSx0LmJlZ2luUGF0aCgpLHQuZmlsbFJlY3QoaS11LG4tdSwyKnUsMip1KSx0LnN0cm9rZVJlY3QoaS11LG4tdSwyKnUsMip1KTticmVhaztjYXNlXCJyZWN0Um90XCI6dT0xL01hdGguU1FSVDIqYSx0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGktdSxuKSx0LmxpbmVUbyhpLG4rdSksdC5saW5lVG8oaSt1LG4pLHQubGluZVRvKGksbi11KSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcImNyb3NzXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4rYSksdC5saW5lVG8oaSxuLWEpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJjcm9zc1JvdFwiOnQuYmVnaW5QYXRoKCksbD1NYXRoLmNvcyhNYXRoLlBJLzQpKmEscz1NYXRoLnNpbihNYXRoLlBJLzQpKmEsdC5tb3ZlVG8oaS1sLG4tcyksdC5saW5lVG8oaStsLG4rcyksdC5tb3ZlVG8oaS1sLG4rcyksdC5saW5lVG8oaStsLG4tcyksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJzdGFyXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4rYSksdC5saW5lVG8oaSxuLWEpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksbD1NYXRoLmNvcyhNYXRoLlBJLzQpKmEscz1NYXRoLnNpbihNYXRoLlBJLzQpKmEsdC5tb3ZlVG8oaS1sLG4tcyksdC5saW5lVG8oaStsLG4rcyksdC5tb3ZlVG8oaS1sLG4rcyksdC5saW5lVG8oaStsLG4tcyksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJsaW5lXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwiZGFzaFwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKX10LnN0cm9rZSgpfX19fSx7fV0sMjM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhPXIuZ2V0U3R5bGUodCxlKSxpPWEmJmEubWF0Y2goLyhcXGQrKXB4Lyk7cmV0dXJuIGk/TnVtYmVyKGlbMV0pOnZvaWQgMH1mdW5jdGlvbiBhKHQsYSl7dmFyIGk9dC5zdHlsZSxuPXQuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpLG89dC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKTtpZih0Ll9jaGFydGpzPXtpbml0aWFsOntoZWlnaHQ6bix3aWR0aDpvLHN0eWxlOntkaXNwbGF5OmkuZGlzcGxheSxoZWlnaHQ6aS5oZWlnaHQsd2lkdGg6aS53aWR0aH19fSxpLmRpc3BsYXk9aS5kaXNwbGF5fHxcImJsb2NrXCIsbnVsbD09PW98fFwiXCI9PT1vKXt2YXIgcj1lKHQsXCJ3aWR0aFwiKTt2b2lkIDAhPT1yJiYodC53aWR0aD1yKX1pZihudWxsPT09bnx8XCJcIj09PW4paWYoXCJcIj09PXQuc3R5bGUuaGVpZ2h0KXQuaGVpZ2h0PXQud2lkdGgvKGEub3B0aW9ucy5hc3BlY3RSYXRpb3x8Mik7ZWxzZXt2YXIgbD1lKHQsXCJoZWlnaHRcIik7dm9pZCAwIT09ciYmKHQuaGVpZ2h0PWwpfXJldHVybiB0fWZ1bmN0aW9uIGkodCl7aWYodC5fY2hhcnRqcyl7dmFyIGU9dC5fY2hhcnRqcy5pbml0aWFsO1tcImhlaWdodFwiLFwid2lkdGhcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgaT1lW2FdO3ZvaWQgMD09PWl8fG51bGw9PT1pP3QucmVtb3ZlQXR0cmlidXRlKGEpOnQuc2V0QXR0cmlidXRlKGEsaSl9KSxyLmVhY2goZS5zdHlsZXx8e30sZnVuY3Rpb24oZSxhKXt0LnN0eWxlW2FdPWV9KSx0LndpZHRoPXQud2lkdGgsZGVsZXRlIHQuX2NoYXJ0anN9fWZ1bmN0aW9uIG4odCxlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgdD90PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpOnQubGVuZ3RoJiYodD10WzBdKSx0JiZ0LmNhbnZhcyYmKHQ9dC5jYW52YXMpLHQgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCl7dmFyIGk9dC5nZXRDb250ZXh0JiZ0LmdldENvbnRleHQoXCIyZFwiKTtpZihpIGluc3RhbmNlb2YgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKXJldHVybiBhKHQsZSksaX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBvKGUpe2U9ZXx8e307dmFyIGE9ZS5kYXRhPWUuZGF0YXx8e307cmV0dXJuIGEuZGF0YXNldHM9YS5kYXRhc2V0c3x8W10sYS5sYWJlbHM9YS5sYWJlbHN8fFtdLGUub3B0aW9ucz1yLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLHQuZGVmYXVsdHNbZS50eXBlXSxlLm9wdGlvbnN8fHt9KSxlfXZhciByPXQuaGVscGVyczt0LnR5cGVzPXt9LHQuaW5zdGFuY2VzPXt9LHQuY29udHJvbGxlcnM9e30sdC5Db250cm9sbGVyPWZ1bmN0aW9uKGUsYSxpKXt2YXIgbD10aGlzO2E9byhhKTt2YXIgcz1uKGUsYSksZD1zJiZzLmNhbnZhcyx1PWQmJmQuaGVpZ2h0LGM9ZCYmZC53aWR0aDtyZXR1cm4gaS5jdHg9cyxpLmNhbnZhcz1kLGkuY29uZmlnPWEsaS53aWR0aD1jLGkuaGVpZ2h0PXUsaS5hc3BlY3RSYXRpbz11P2MvdTpudWxsLGwuaWQ9ci51aWQoKSxsLmNoYXJ0PWksbC5jb25maWc9YSxsLm9wdGlvbnM9YS5vcHRpb25zLGwuX2J1ZmZlcmVkUmVuZGVyPSExLHQuaW5zdGFuY2VzW2wuaWRdPWwsT2JqZWN0LmRlZmluZVByb3BlcnR5KGwsXCJkYXRhXCIse2dldDpmdW5jdGlvbigpe3JldHVybiBsLmNvbmZpZy5kYXRhfX0pLHMmJmQ/KHIucmV0aW5hU2NhbGUoaSksbC5vcHRpb25zLnJlc3BvbnNpdmUmJihyLmFkZFJlc2l6ZUxpc3RlbmVyKGQucGFyZW50Tm9kZSxmdW5jdGlvbigpe2wucmVzaXplKCl9KSxsLnJlc2l6ZSghMCkpLGwuaW5pdGlhbGl6ZSgpLGwpOihjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBjaGFydDogY2FuJ3QgYWNxdWlyZSBjb250ZXh0IGZyb20gdGhlIGdpdmVuIGl0ZW1cIiksbCl9LHIuZXh0ZW5kKHQuQ29udHJvbGxlci5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlSW5pdFwiLFtlXSksZS5iaW5kRXZlbnRzKCksZS5lbnN1cmVTY2FsZXNIYXZlSURzKCksZS5idWlsZE9yVXBkYXRlQ29udHJvbGxlcnMoKSxlLmJ1aWxkU2NhbGVzKCksZS51cGRhdGVMYXlvdXQoKSxlLnJlc2V0RWxlbWVudHMoKSxlLmluaXRUb29sVGlwKCksZS51cGRhdGUoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJJbml0XCIsW2VdKSxlfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiByLmNsZWFyKHRoaXMuY2hhcnQpLHRoaXN9LHN0b3A6ZnVuY3Rpb24oKXtyZXR1cm4gdC5hbmltYXRpb25TZXJ2aWNlLmNhbmNlbEFuaW1hdGlvbih0aGlzKSx0aGlzfSxyZXNpemU6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1hLm9wdGlvbnMsbz1pLmNhbnZhcyxsPW4ubWFpbnRhaW5Bc3BlY3RSYXRpbyYmaS5hc3BlY3RSYXRpb3x8bnVsbCxzPU1hdGguZmxvb3Ioci5nZXRNYXhpbXVtV2lkdGgobykpLGQ9TWF0aC5mbG9vcihsP3MvbDpyLmdldE1heGltdW1IZWlnaHQobykpO2lmKGkud2lkdGghPT1zfHxpLmhlaWdodCE9PWQpe28ud2lkdGg9aS53aWR0aD1zLG8uaGVpZ2h0PWkuaGVpZ2h0PWQsby5zdHlsZS53aWR0aD1zK1wicHhcIixvLnN0eWxlLmhlaWdodD1kK1wicHhcIixyLnJldGluYVNjYWxlKGkpO3ZhciB1PXt3aWR0aDpzLGhlaWdodDpkfTt0LnBsdWdpbnMubm90aWZ5KFwicmVzaXplXCIsW2EsdV0pLGEub3B0aW9ucy5vblJlc2l6ZSYmYS5vcHRpb25zLm9uUmVzaXplKGEsdSksZXx8KGEuc3RvcCgpLGEudXBkYXRlKGEub3B0aW9ucy5yZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb24pKX19LGVuc3VyZVNjYWxlc0hhdmVJRHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMsZT10LnNjYWxlc3x8e30sYT10LnNjYWxlO3IuZWFjaChlLnhBeGVzLGZ1bmN0aW9uKHQsZSl7dC5pZD10LmlkfHxcIngtYXhpcy1cIitlfSksci5lYWNoKGUueUF4ZXMsZnVuY3Rpb24odCxlKXt0LmlkPXQuaWR8fFwieS1heGlzLVwiK2V9KSxhJiYoYS5pZD1hLmlkfHxcInNjYWxlXCIpfSxidWlsZFNjYWxlczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1lLm9wdGlvbnMsaT1lLnNjYWxlcz17fSxuPVtdO2Euc2NhbGVzJiYobj1uLmNvbmNhdCgoYS5zY2FsZXMueEF4ZXN8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue29wdGlvbnM6dCxkdHlwZTpcImNhdGVnb3J5XCJ9fSksKGEuc2NhbGVzLnlBeGVzfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybntvcHRpb25zOnQsZHR5cGU6XCJsaW5lYXJcIn19KSkpLGEuc2NhbGUmJm4ucHVzaCh7b3B0aW9uczphLnNjYWxlLGR0eXBlOlwicmFkaWFsTGluZWFyXCIsaXNEZWZhdWx0OiEwfSksci5lYWNoKG4sZnVuY3Rpb24oYSl7dmFyIG49YS5vcHRpb25zLG89ci5nZXRWYWx1ZU9yRGVmYXVsdChuLnR5cGUsYS5kdHlwZSksbD10LnNjYWxlU2VydmljZS5nZXRTY2FsZUNvbnN0cnVjdG9yKG8pO2lmKGwpe3ZhciBzPW5ldyBsKHtpZDpuLmlkLG9wdGlvbnM6bixjdHg6ZS5jaGFydC5jdHgsY2hhcnQ6ZX0pO2lbcy5pZF09cyxhLmlzRGVmYXVsdCYmKGUuc2NhbGU9cyl9fSksdC5zY2FsZVNlcnZpY2UuYWRkU2NhbGVzVG9MYXlvdXQodGhpcyl9LHVwZGF0ZUxheW91dDpmdW5jdGlvbigpe3QubGF5b3V0U2VydmljZS51cGRhdGUodGhpcyx0aGlzLmNoYXJ0LndpZHRoLHRoaXMuY2hhcnQuaGVpZ2h0KX0sYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPVtdLGk9W107aWYoci5lYWNoKGUuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihuLG8pe3ZhciByPWUuZ2V0RGF0YXNldE1ldGEobyk7ci50eXBlfHwoci50eXBlPW4udHlwZXx8ZS5jb25maWcudHlwZSksYS5wdXNoKHIudHlwZSksci5jb250cm9sbGVyP3IuY29udHJvbGxlci51cGRhdGVJbmRleChvKTooci5jb250cm9sbGVyPW5ldyB0LmNvbnRyb2xsZXJzW3IudHlwZV0oZSxvKSxpLnB1c2goci5jb250cm9sbGVyKSl9LGUpLGEubGVuZ3RoPjEpZm9yKHZhciBuPTE7bjxhLmxlbmd0aDtuKyspaWYoYVtuXSE9PWFbbi0xXSl7ZS5pc0NvbWJvPSEwO2JyZWFrfXJldHVybiBpfSxyZXNldEVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyLmVhY2godC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGUsYSl7dC5nZXREYXRhc2V0TWV0YShhKS5jb250cm9sbGVyLnJlc2V0KCl9LHQpfSxyZXNldDpmdW5jdGlvbigpe3RoaXMucmVzZXRFbGVtZW50cygpLHRoaXMudG9vbHRpcC5pbml0aWFsaXplKCl9LHVwZGF0ZTpmdW5jdGlvbihlLGEpe3ZhciBpPXRoaXM7dC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZVVwZGF0ZVwiLFtpXSksaS50b29sdGlwLl9kYXRhPWkuZGF0YTt2YXIgbj1pLmJ1aWxkT3JVcGRhdGVDb250cm9sbGVycygpO3IuZWFjaChpLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24odCxlKXtpLmdldERhdGFzZXRNZXRhKGUpLmNvbnRyb2xsZXIuYnVpbGRPclVwZGF0ZUVsZW1lbnRzKCl9LGkpLHQubGF5b3V0U2VydmljZS51cGRhdGUoaSxpLmNoYXJ0LndpZHRoLGkuY2hhcnQuaGVpZ2h0KSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJTY2FsZVVwZGF0ZVwiLFtpXSksci5lYWNoKG4sZnVuY3Rpb24odCl7dC5yZXNldCgpfSksaS51cGRhdGVEYXRhc2V0cygpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlclVwZGF0ZVwiLFtpXSksaS5fYnVmZmVyZWRSZW5kZXI/aS5fYnVmZmVyZWRSZXF1ZXN0PXtsYXp5OmEsZHVyYXRpb246ZX06aS5yZW5kZXIoZSxhKX0sdXBkYXRlRGF0YXNldHM6ZnVuY3Rpb24oKXt2YXIgZSxhLGk9dGhpcztpZih0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRGF0YXNldHNVcGRhdGVcIixbaV0pKXtmb3IoZT0wLGE9aS5kYXRhLmRhdGFzZXRzLmxlbmd0aDthPmU7KytlKWkuZ2V0RGF0YXNldE1ldGEoZSkuY29udHJvbGxlci51cGRhdGUoKTt0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEYXRhc2V0c1VwZGF0ZVwiLFtpXSl9fSxyZW5kZXI6ZnVuY3Rpb24oZSxhKXt2YXIgaT10aGlzO3QucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVSZW5kZXJcIixbaV0pO3ZhciBuPWkub3B0aW9ucy5hbmltYXRpb247aWYobiYmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlJiYwIT09ZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGUmJjAhPT1uLmR1cmF0aW9uKSl7dmFyIG89bmV3IHQuQW5pbWF0aW9uO28ubnVtU3RlcHM9KGV8fG4uZHVyYXRpb24pLzE2LjY2LG8uZWFzaW5nPW4uZWFzaW5nLG8ucmVuZGVyPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ci5lYXNpbmdFZmZlY3RzW2UuZWFzaW5nXSxpPWUuY3VycmVudFN0ZXAvZS5udW1TdGVwcyxuPWEoaSk7dC5kcmF3KG4saSxlLmN1cnJlbnRTdGVwKX0sby5vbkFuaW1hdGlvblByb2dyZXNzPW4ub25Qcm9ncmVzcyxvLm9uQW5pbWF0aW9uQ29tcGxldGU9bi5vbkNvbXBsZXRlLHQuYW5pbWF0aW9uU2VydmljZS5hZGRBbmltYXRpb24oaSxvLGUsYSl9ZWxzZSBpLmRyYXcoKSxuJiZuLm9uQ29tcGxldGUmJm4ub25Db21wbGV0ZS5jYWxsJiZuLm9uQ29tcGxldGUuY2FsbChpKTtyZXR1cm4gaX0sZHJhdzpmdW5jdGlvbihlKXt2YXIgYT10aGlzLGk9ZXx8MTthLmNsZWFyKCksdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURyYXdcIixbYSxpXSksci5lYWNoKGEuYm94ZXMsZnVuY3Rpb24odCl7dC5kcmF3KGEuY2hhcnRBcmVhKX0sYSksYS5zY2FsZSYmYS5zY2FsZS5kcmF3KCksdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURhdGFzZXRzRHJhd1wiLFthLGldKSxyLmVhY2goYS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKHQsaSl7YS5pc0RhdGFzZXRWaXNpYmxlKGkpJiZhLmdldERhdGFzZXRNZXRhKGkpLmNvbnRyb2xsZXIuZHJhdyhlKX0sYSwhMCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRGF0YXNldHNEcmF3XCIsW2EsaV0pLGEudG9vbHRpcC50cmFuc2l0aW9uKGkpLmRyYXcoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEcmF3XCIsW2EsaV0pfSxnZXRFbGVtZW50QXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5zaW5nbGUodGhpcyxlKX0sZ2V0RWxlbWVudHNBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLmxhYmVsKHRoaXMsZSx7aW50ZXJzZWN0OiEwfSl9LGdldEVsZW1lbnRzQXRYQXhpczpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlc1tcIngtYXhpc1wiXSh0aGlzLGUse2ludGVyc2VjdDohMH0pfSxnZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlOmZ1bmN0aW9uKGUsYSxpKXt2YXIgbj10LkludGVyYWN0aW9uLm1vZGVzW2FdO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/bih0aGlzLGUsaSk6W119LGdldERhdGFzZXRBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLmRhdGFzZXQodGhpcyxlKX0sZ2V0RGF0YXNldE1ldGE6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZGF0YS5kYXRhc2V0c1t0XTthLl9tZXRhfHwoYS5fbWV0YT17fSk7XG52YXIgaT1hLl9tZXRhW2UuaWRdO3JldHVybiBpfHwoaT1hLl9tZXRhW2UuaWRdPXt0eXBlOm51bGwsZGF0YTpbXSxkYXRhc2V0Om51bGwsY29udHJvbGxlcjpudWxsLGhpZGRlbjpudWxsLHhBeGlzSUQ6bnVsbCx5QXhpc0lEOm51bGx9KSxpfSxnZXRWaXNpYmxlRGF0YXNldENvdW50OmZ1bmN0aW9uKCl7Zm9yKHZhciB0PTAsZT0wLGE9dGhpcy5kYXRhLmRhdGFzZXRzLmxlbmd0aDthPmU7KytlKXRoaXMuaXNEYXRhc2V0VmlzaWJsZShlKSYmdCsrO3JldHVybiB0fSxpc0RhdGFzZXRWaXNpYmxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0RGF0YXNldE1ldGEodCk7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBlLmhpZGRlbj8hZS5oaWRkZW46IXRoaXMuZGF0YS5kYXRhc2V0c1t0XS5oaWRkZW59LGdlbmVyYXRlTGVnZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5sZWdlbmRDYWxsYmFjayh0aGlzKX0sZGVzdHJveTpmdW5jdGlvbigpe3ZhciBlLGEsbixvPXRoaXMsbD1vLmNoYXJ0LmNhbnZhcztmb3Ioby5zdG9wKCksYT0wLG49by5kYXRhLmRhdGFzZXRzLmxlbmd0aDtuPmE7KythKWU9by5nZXREYXRhc2V0TWV0YShhKSxlLmNvbnRyb2xsZXImJihlLmNvbnRyb2xsZXIuZGVzdHJveSgpLGUuY29udHJvbGxlcj1udWxsKTtsJiYoci51bmJpbmRFdmVudHMobyxvLmV2ZW50cyksci5yZW1vdmVSZXNpemVMaXN0ZW5lcihsLnBhcmVudE5vZGUpLHIuY2xlYXIoby5jaGFydCksaShsKSxvLmNoYXJ0LmNhbnZhcz1udWxsLG8uY2hhcnQuY3R4PW51bGwpLHQucGx1Z2lucy5ub3RpZnkoXCJkZXN0cm95XCIsW29dKSxkZWxldGUgdC5pbnN0YW5jZXNbby5pZF19LHRvQmFzZTY0SW1hZ2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5jYW52YXMudG9EYXRhVVJMLmFwcGx5KHRoaXMuY2hhcnQuY2FudmFzLGFyZ3VtZW50cyl9LGluaXRUb29sVGlwOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLnRvb2x0aXA9bmV3IHQuVG9vbHRpcCh7X2NoYXJ0OmUuY2hhcnQsX2NoYXJ0SW5zdGFuY2U6ZSxfZGF0YTplLmRhdGEsX29wdGlvbnM6ZS5vcHRpb25zLnRvb2x0aXBzfSxlKSxlLnRvb2x0aXAuaW5pdGlhbGl6ZSgpfSxiaW5kRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyLmJpbmRFdmVudHModCx0Lm9wdGlvbnMuZXZlbnRzLGZ1bmN0aW9uKGUpe3QuZXZlbnRIYW5kbGVyKGUpfSl9LHVwZGF0ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpLG4sbyxyPWE/XCJzZXRIb3ZlclN0eWxlXCI6XCJyZW1vdmVIb3ZlclN0eWxlXCI7Zm9yKG49MCxvPXQubGVuZ3RoO28+bjsrK24paT10W25dLGkmJnRoaXMuZ2V0RGF0YXNldE1ldGEoaS5fZGF0YXNldEluZGV4KS5jb250cm9sbGVyW3JdKGkpfSxldmVudEhhbmRsZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUubGVnZW5kLGk9ZS50b29sdGlwLG49ZS5vcHRpb25zLmhvdmVyO2UuX2J1ZmZlcmVkUmVuZGVyPSEwLGUuX2J1ZmZlcmVkUmVxdWVzdD1udWxsO3ZhciBvPWUuaGFuZGxlRXZlbnQodCk7b3w9YSYmYS5oYW5kbGVFdmVudCh0KSxvfD1pJiZpLmhhbmRsZUV2ZW50KHQpO3ZhciByPWUuX2J1ZmZlcmVkUmVxdWVzdDtyZXR1cm4gcj9lLnJlbmRlcihyLmR1cmF0aW9uLHIubGF6eSk6byYmIWUuYW5pbWF0aW5nJiYoZS5zdG9wKCksZS5yZW5kZXIobi5hbmltYXRpb25EdXJhdGlvbiwhMCkpLGUuX2J1ZmZlcmVkUmVuZGVyPSExLGUuX2J1ZmZlcmVkUmVxdWVzdD1udWxsLGV9LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLm9wdGlvbnN8fHt9LGk9YS5ob3ZlcixuPSExO3JldHVybiBlLmxhc3RBY3RpdmU9ZS5sYXN0QWN0aXZlfHxbXSxcIm1vdXNlb3V0XCI9PT10LnR5cGU/ZS5hY3RpdmU9W106ZS5hY3RpdmU9ZS5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKHQsaS5tb2RlLGkpLGkub25Ib3ZlciYmaS5vbkhvdmVyLmNhbGwoZSxlLmFjdGl2ZSksKFwibW91c2V1cFwiPT09dC50eXBlfHxcImNsaWNrXCI9PT10LnR5cGUpJiZhLm9uQ2xpY2smJmEub25DbGljay5jYWxsKGUsdCxlLmFjdGl2ZSksZS5sYXN0QWN0aXZlLmxlbmd0aCYmZS51cGRhdGVIb3ZlclN0eWxlKGUubGFzdEFjdGl2ZSxpLm1vZGUsITEpLGUuYWN0aXZlLmxlbmd0aCYmaS5tb2RlJiZlLnVwZGF0ZUhvdmVyU3R5bGUoZS5hY3RpdmUsaS5tb2RlLCEwKSxuPSFyLmFycmF5RXF1YWxzKGUuYWN0aXZlLGUubGFzdEFjdGl2ZSksZS5sYXN0QWN0aXZlPWUuYWN0aXZlLG59fSl9fSx7fV0sMjQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiB0Ll9jaGFydGpzP3ZvaWQgdC5fY2hhcnRqcy5saXN0ZW5lcnMucHVzaChlKTooT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfY2hhcnRqc1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTp7bGlzdGVuZXJzOltlXX19KSx2b2lkIG4uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgYT1cIm9uRGF0YVwiK2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zbGljZSgxKSxuPXRbZV07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLG89bi5hcHBseSh0aGlzLGUpO3JldHVybiBpLmVhY2godC5fY2hhcnRqcy5saXN0ZW5lcnMsZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdFthXSYmdFthXS5hcHBseSh0LGUpfSksb319KX0pKX1mdW5jdGlvbiBhKHQsZSl7dmFyIGE9dC5fY2hhcnRqcztpZihhKXt2YXIgaT1hLmxpc3RlbmVycyxvPWkuaW5kZXhPZihlKTstMSE9PW8mJmkuc3BsaWNlKG8sMSksaS5sZW5ndGg+MHx8KG4uZm9yRWFjaChmdW5jdGlvbihlKXtkZWxldGUgdFtlXX0pLGRlbGV0ZSB0Ll9jaGFydGpzKX19dmFyIGk9dC5oZWxwZXJzLG49W1wicHVzaFwiLFwicG9wXCIsXCJzaGlmdFwiLFwic3BsaWNlXCIsXCJ1bnNoaWZ0XCJdO3QuRGF0YXNldENvbnRyb2xsZXI9ZnVuY3Rpb24odCxlKXt0aGlzLmluaXRpYWxpemUodCxlKX0saS5leHRlbmQodC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUse2RhdGFzZXRFbGVtZW50VHlwZTpudWxsLGRhdGFFbGVtZW50VHlwZTpudWxsLGluaXRpYWxpemU6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2EuY2hhcnQ9dCxhLmluZGV4PWUsYS5saW5rU2NhbGVzKCksYS5hZGRFbGVtZW50cygpfSx1cGRhdGVJbmRleDpmdW5jdGlvbih0KXt0aGlzLmluZGV4PXR9LGxpbmtTY2FsZXM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRNZXRhKCksYT10LmdldERhdGFzZXQoKTtudWxsPT09ZS54QXhpc0lEJiYoZS54QXhpc0lEPWEueEF4aXNJRHx8dC5jaGFydC5vcHRpb25zLnNjYWxlcy54QXhlc1swXS5pZCksbnVsbD09PWUueUF4aXNJRCYmKGUueUF4aXNJRD1hLnlBeGlzSUR8fHQuY2hhcnQub3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uaWQpfSxnZXREYXRhc2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0aGlzLmluZGV4XX0sZ2V0TWV0YTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKHRoaXMuaW5kZXgpfSxnZXRTY2FsZUZvcklkOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNoYXJ0LnNjYWxlc1t0XX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnVwZGF0ZSghMCl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9kYXRhJiZhKHRoaXMuX2RhdGEsdGhpcyl9LGNyZWF0ZU1ldGFEYXRhc2V0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZGF0YXNldEVsZW1lbnRUeXBlO3JldHVybiBlJiZuZXcgZSh7X2NoYXJ0OnQuY2hhcnQuY2hhcnQsX2RhdGFzZXRJbmRleDp0LmluZGV4fSl9LGNyZWF0ZU1ldGFEYXRhOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmRhdGFFbGVtZW50VHlwZTtyZXR1cm4gYSYmbmV3IGEoe19jaGFydDplLmNoYXJ0LmNoYXJ0LF9kYXRhc2V0SW5kZXg6ZS5pbmRleCxfaW5kZXg6dH0pfSxhZGRFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0LGUsYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldERhdGFzZXQoKS5kYXRhfHxbXSxvPWkuZGF0YTtmb3IodD0wLGU9bi5sZW5ndGg7ZT50OysrdClvW3RdPW9bdF18fGEuY3JlYXRlTWV0YURhdGEodCk7aS5kYXRhc2V0PWkuZGF0YXNldHx8YS5jcmVhdGVNZXRhRGF0YXNldCgpfSxhZGRFbGVtZW50QW5kUmVzZXQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jcmVhdGVNZXRhRGF0YSh0KTt0aGlzLmdldE1ldGEoKS5kYXRhLnNwbGljZSh0LDAsZSksdGhpcy51cGRhdGVFbGVtZW50KGUsdCwhMCl9LGJ1aWxkT3JVcGRhdGVFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10LmdldERhdGFzZXQoKSxuPWkuZGF0YXx8KGkuZGF0YT1bXSk7dC5fZGF0YSE9PW4mJih0Ll9kYXRhJiZhKHQuX2RhdGEsdCksZShuLHQpLHQuX2RhdGE9biksdC5yZXN5bmNFbGVtZW50cygpfSx1cGRhdGU6aS5ub29wLGRyYXc6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXR8fDEsbj10aGlzLmdldE1ldGEoKS5kYXRhO2ZvcihlPTAsYT1uLmxlbmd0aDthPmU7KytlKW5bZV0udHJhbnNpdGlvbihpKS5kcmF3KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxuPXQuX2luZGV4LG89dC5jdXN0b218fHt9LHI9aS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsbD10Ll9tb2RlbDtsLmJhY2tncm91bmRDb2xvcj1vLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjpyKGEuYmFja2dyb3VuZENvbG9yLG4sZS5iYWNrZ3JvdW5kQ29sb3IpLGwuYm9yZGVyQ29sb3I9by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOnIoYS5ib3JkZXJDb2xvcixuLGUuYm9yZGVyQ29sb3IpLGwuYm9yZGVyV2lkdGg9by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOnIoYS5ib3JkZXJXaWR0aCxuLGUuYm9yZGVyV2lkdGgpfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGE9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz1pLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxyPWkuZ2V0SG92ZXJDb2xvcixsPXQuX21vZGVsO2wuYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3I/bi5ob3ZlckJhY2tncm91bmRDb2xvcjpvKGUuaG92ZXJCYWNrZ3JvdW5kQ29sb3IsYSxyKGwuYmFja2dyb3VuZENvbG9yKSksbC5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3I/bi5ob3ZlckJvcmRlckNvbG9yOm8oZS5ob3ZlckJvcmRlckNvbG9yLGEscihsLmJvcmRlckNvbG9yKSksbC5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGg/bi5ob3ZlckJvcmRlcldpZHRoOm8oZS5ob3ZlckJvcmRlcldpZHRoLGEsbC5ib3JkZXJXaWR0aCl9LHJlc3luY0VsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TWV0YSgpLGE9dC5nZXREYXRhc2V0KCkuZGF0YSxpPWUuZGF0YS5sZW5ndGgsbj1hLmxlbmd0aDtpPm4/ZS5kYXRhLnNwbGljZShuLGktbik6bj5pJiZ0Lmluc2VydEVsZW1lbnRzKGksbi1pKX0saW5zZXJ0RWxlbWVudHM6ZnVuY3Rpb24odCxlKXtmb3IodmFyIGE9MDtlPmE7KythKXRoaXMuYWRkRWxlbWVudEFuZFJlc2V0KHQrYSl9LG9uRGF0YVB1c2g6ZnVuY3Rpb24oKXt0aGlzLmluc2VydEVsZW1lbnRzKHRoaXMuZ2V0RGF0YXNldCgpLmRhdGEubGVuZ3RoLTEsYXJndW1lbnRzLmxlbmd0aCl9LG9uRGF0YVBvcDpmdW5jdGlvbigpe3RoaXMuZ2V0TWV0YSgpLmRhdGEucG9wKCl9LG9uRGF0YVNoaWZ0OmZ1bmN0aW9uKCl7dGhpcy5nZXRNZXRhKCkuZGF0YS5zaGlmdCgpfSxvbkRhdGFTcGxpY2U6ZnVuY3Rpb24odCxlKXt0aGlzLmdldE1ldGEoKS5kYXRhLnNwbGljZSh0LGUpLHRoaXMuaW5zZXJ0RWxlbWVudHModCxhcmd1bWVudHMubGVuZ3RoLTIpfSxvbkRhdGFVbnNoaWZ0OmZ1bmN0aW9uKCl7dGhpcy5pbnNlcnRFbGVtZW50cygwLGFyZ3VtZW50cy5sZW5ndGgpfX0pLHQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kPWkuaW5oZXJpdHN9fSx7fV0sMjU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZWxlbWVudHM9e30sdC5FbGVtZW50PWZ1bmN0aW9uKHQpe2UuZXh0ZW5kKHRoaXMsdCksdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZS5leHRlbmQodC5FbGVtZW50LnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuaGlkZGVuPSExfSxwaXZvdDpmdW5jdGlvbigpe3ZhciB0PXRoaXM7cmV0dXJuIHQuX3ZpZXd8fCh0Ll92aWV3PWUuY2xvbmUodC5fbW9kZWwpKSx0Ll9zdGFydD1lLmNsb25lKHQuX3ZpZXcpLHR9LHRyYW5zaXRpb246ZnVuY3Rpb24odCl7dmFyIGE9dGhpcztyZXR1cm4gYS5fdmlld3x8KGEuX3ZpZXc9ZS5jbG9uZShhLl9tb2RlbCkpLDE9PT10PyhhLl92aWV3PWEuX21vZGVsLGEuX3N0YXJ0PW51bGwsYSk6KGEuX3N0YXJ0fHxhLnBpdm90KCksZS5lYWNoKGEuX21vZGVsLGZ1bmN0aW9uKGksbil7aWYoXCJfXCI9PT1uWzBdKTtlbHNlIGlmKGEuX3ZpZXcuaGFzT3duUHJvcGVydHkobikpaWYoaT09PWEuX3ZpZXdbbl0pO2Vsc2UgaWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpdHJ5e3ZhciBvPWUuY29sb3IoYS5fbW9kZWxbbl0pLm1peChlLmNvbG9yKGEuX3N0YXJ0W25dKSx0KTthLl92aWV3W25dPW8ucmdiU3RyaW5nKCl9Y2F0Y2gocil7YS5fdmlld1tuXT1pfWVsc2UgaWYoXCJudW1iZXJcIj09dHlwZW9mIGkpe3ZhciBsPXZvaWQgMCE9PWEuX3N0YXJ0W25dJiZpc05hTihhLl9zdGFydFtuXSk9PT0hMT9hLl9zdGFydFtuXTowO2EuX3ZpZXdbbl09KGEuX21vZGVsW25dLWwpKnQrbH1lbHNlIGEuX3ZpZXdbbl09aTtlbHNlXCJudW1iZXJcIiE9dHlwZW9mIGl8fGlzTmFOKGEuX3ZpZXdbbl0pP2EuX3ZpZXdbbl09aTphLl92aWV3W25dPWkqdH0sYSksYSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3JldHVybnt4OnRoaXMuX21vZGVsLngseTp0aGlzLl9tb2RlbC55fX0saGFzVmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZS5pc051bWJlcih0aGlzLl9tb2RlbC54KSYmZS5pc051bWJlcih0aGlzLl9tb2RlbC55KX19KSx0LkVsZW1lbnQuZXh0ZW5kPWUuaW5oZXJpdHN9fSx7fV0sMjY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KDMpO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSxhKXt2YXIgaTtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD8oaT1wYXJzZUludCh0LDEwKSwtMSE9PXQuaW5kZXhPZihcIiVcIikmJihpPWkvMTAwKmUucGFyZW50Tm9kZVthXSkpOmk9dCxpfWZ1bmN0aW9uIGEodCl7cmV0dXJuIHZvaWQgMCE9PXQmJm51bGwhPT10JiZcIm5vbmVcIiE9PXR9ZnVuY3Rpb24gbih0LGksbil7dmFyIG89ZG9jdW1lbnQuZGVmYXVsdFZpZXcscj10LnBhcmVudE5vZGUsbD1vLmdldENvbXB1dGVkU3R5bGUodClbaV0scz1vLmdldENvbXB1dGVkU3R5bGUocilbaV0sZD1hKGwpLHU9YShzKSxjPU51bWJlci5QT1NJVElWRV9JTkZJTklUWTtyZXR1cm4gZHx8dT9NYXRoLm1pbihkP2UobCx0LG4pOmMsdT9lKHMscixuKTpjKTpcIm5vbmVcIn12YXIgbz10LmhlbHBlcnM9e307by5lYWNoPWZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuLHI7aWYoby5pc0FycmF5KHQpKWlmKHI9dC5sZW5ndGgsaSlmb3Iobj1yLTE7bj49MDtuLS0pZS5jYWxsKGEsdFtuXSxuKTtlbHNlIGZvcihuPTA7cj5uO24rKyllLmNhbGwoYSx0W25dLG4pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIHQpe3ZhciBsPU9iamVjdC5rZXlzKHQpO2ZvcihyPWwubGVuZ3RoLG49MDtyPm47bisrKWUuY2FsbChhLHRbbFtuXV0sbFtuXSl9fSxvLmNsb25lPWZ1bmN0aW9uKHQpe3ZhciBlPXt9O3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0LGEpe28uaXNBcnJheSh0KT9lW2FdPXQuc2xpY2UoMCk6XCJvYmplY3RcIj09dHlwZW9mIHQmJm51bGwhPT10P2VbYV09by5jbG9uZSh0KTplW2FdPXR9KSxlfSxvLmV4dGVuZD1mdW5jdGlvbih0KXtmb3IodmFyIGU9ZnVuY3Rpb24oZSxhKXt0W2FdPWV9LGE9MSxpPWFyZ3VtZW50cy5sZW5ndGg7aT5hO2ErKylvLmVhY2goYXJndW1lbnRzW2FdLGUpO3JldHVybiB0fSxvLmNvbmZpZ01lcmdlPWZ1bmN0aW9uKGUpe3ZhciBhPW8uY2xvbmUoZSk7cmV0dXJuIG8uZWFjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSksZnVuY3Rpb24oZSl7by5lYWNoKGUsZnVuY3Rpb24oZSxpKXt2YXIgbj1hLmhhc093blByb3BlcnR5KGkpLHI9bj9hW2ldOnt9O1wic2NhbGVzXCI9PT1pP2FbaV09by5zY2FsZU1lcmdlKHIsZSk6XCJzY2FsZVwiPT09aT9hW2ldPW8uY29uZmlnTWVyZ2Uocix0LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKGUudHlwZSksZSk6IW58fFwib2JqZWN0XCIhPXR5cGVvZiByfHxvLmlzQXJyYXkocil8fG51bGw9PT1yfHxcIm9iamVjdFwiIT10eXBlb2YgZXx8by5pc0FycmF5KGUpP2FbaV09ZTphW2ldPW8uY29uZmlnTWVyZ2UocixlKX0pfSksYX0sby5zY2FsZU1lcmdlPWZ1bmN0aW9uKGUsYSl7dmFyIGk9by5jbG9uZShlKTtyZXR1cm4gby5lYWNoKGEsZnVuY3Rpb24oZSxhKXtcInhBeGVzXCI9PT1hfHxcInlBeGVzXCI9PT1hP2kuaGFzT3duUHJvcGVydHkoYSk/by5lYWNoKGUsZnVuY3Rpb24oZSxuKXt2YXIgcj1vLmdldFZhbHVlT3JEZWZhdWx0KGUudHlwZSxcInhBeGVzXCI9PT1hP1wiY2F0ZWdvcnlcIjpcImxpbmVhclwiKSxsPXQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMocik7bj49aVthXS5sZW5ndGh8fCFpW2FdW25dLnR5cGU/aVthXS5wdXNoKG8uY29uZmlnTWVyZ2UobCxlKSk6ZS50eXBlJiZlLnR5cGUhPT1pW2FdW25dLnR5cGU/aVthXVtuXT1vLmNvbmZpZ01lcmdlKGlbYV1bbl0sbCxlKTppW2FdW25dPW8uY29uZmlnTWVyZ2UoaVthXVtuXSxlKX0pOihpW2FdPVtdLG8uZWFjaChlLGZ1bmN0aW9uKGUpe3ZhciBuPW8uZ2V0VmFsdWVPckRlZmF1bHQoZS50eXBlLFwieEF4ZXNcIj09PWE/XCJjYXRlZ29yeVwiOlwibGluZWFyXCIpO2lbYV0ucHVzaChvLmNvbmZpZ01lcmdlKHQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMobiksZSkpfSkpOmkuaGFzT3duUHJvcGVydHkoYSkmJlwib2JqZWN0XCI9PXR5cGVvZiBpW2FdJiZudWxsIT09aVthXSYmXCJvYmplY3RcIj09dHlwZW9mIGU/aVthXT1vLmNvbmZpZ01lcmdlKGlbYV0sZSk6aVthXT1lfSksaX0sby5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQ9ZnVuY3Rpb24odCxlLGEpe3JldHVybiB2b2lkIDA9PT10fHxudWxsPT09dD9hOm8uaXNBcnJheSh0KT9lPHQubGVuZ3RoP3RbZV06YTp0fSxvLmdldFZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PXQ/ZTp0fSxvLmluZGV4T2Y9QXJyYXkucHJvdG90eXBlLmluZGV4T2Y/ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5pbmRleE9mKGUpfTpmdW5jdGlvbih0LGUpe2Zvcih2YXIgYT0wLGk9dC5sZW5ndGg7aT5hOysrYSlpZih0W2FdPT09ZSlyZXR1cm4gYTtyZXR1cm4tMX0sby53aGVyZT1mdW5jdGlvbih0LGUpe2lmKG8uaXNBcnJheSh0KSYmQXJyYXkucHJvdG90eXBlLmZpbHRlcilyZXR1cm4gdC5maWx0ZXIoZSk7dmFyIGE9W107cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQpe2UodCkmJmEucHVzaCh0KX0pLGF9LG8uZmluZEluZGV4PUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXg/ZnVuY3Rpb24odCxlLGEpe3JldHVybiB0LmZpbmRJbmRleChlLGEpfTpmdW5jdGlvbih0LGUsYSl7YT12b2lkIDA9PT1hP3Q6YTtmb3IodmFyIGk9MCxuPXQubGVuZ3RoO24+aTsrK2kpaWYoZS5jYWxsKGEsdFtpXSxpLHQpKXJldHVybiBpO3JldHVybi0xfSxvLmZpbmROZXh0V2hlcmU9ZnVuY3Rpb24odCxlLGEpeyh2b2lkIDA9PT1hfHxudWxsPT09YSkmJihhPS0xKTtmb3IodmFyIGk9YSsxO2k8dC5sZW5ndGg7aSsrKXt2YXIgbj10W2ldO2lmKGUobikpcmV0dXJuIG59fSxvLmZpbmRQcmV2aW91c1doZXJlPWZ1bmN0aW9uKHQsZSxhKXsodm9pZCAwPT09YXx8bnVsbD09PWEpJiYoYT10Lmxlbmd0aCk7Zm9yKHZhciBpPWEtMTtpPj0wO2ktLSl7dmFyIG49dFtpXTtpZihlKG4pKXJldHVybiBufX0sby5pbmhlcml0cz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9dCYmdC5oYXNPd25Qcm9wZXJ0eShcImNvbnN0cnVjdG9yXCIpP3QuY29uc3RydWN0b3I6ZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGk9ZnVuY3Rpb24oKXt0aGlzLmNvbnN0cnVjdG9yPWF9O3JldHVybiBpLnByb3RvdHlwZT1lLnByb3RvdHlwZSxhLnByb3RvdHlwZT1uZXcgaSxhLmV4dGVuZD1vLmluaGVyaXRzLHQmJm8uZXh0ZW5kKGEucHJvdG90eXBlLHQpLGEuX19zdXBlcl9fPWUucHJvdG90eXBlLGF9LG8ubm9vcD1mdW5jdGlvbigpe30sby51aWQ9ZnVuY3Rpb24oKXt2YXIgdD0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0Kyt9fSgpLG8uaXNOdW1iZXI9ZnVuY3Rpb24odCl7cmV0dXJuIWlzTmFOKHBhcnNlRmxvYXQodCkpJiZpc0Zpbml0ZSh0KX0sby5hbG1vc3RFcXVhbHM9ZnVuY3Rpb24odCxlLGEpe3JldHVybiBNYXRoLmFicyh0LWUpPGF9LG8ubWF4PWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBpc05hTihlKT90Ok1hdGgubWF4KHQsZSl9LE51bWJlci5ORUdBVElWRV9JTkZJTklUWSl9LG8ubWluPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBpc05hTihlKT90Ok1hdGgubWluKHQsZSl9LE51bWJlci5QT1NJVElWRV9JTkZJTklUWSl9LG8uc2lnbj1NYXRoLnNpZ24/ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc2lnbih0KX06ZnVuY3Rpb24odCl7cmV0dXJuIHQ9K3QsMD09PXR8fGlzTmFOKHQpP3Q6dD4wPzE6LTF9LG8ubG9nMTA9TWF0aC5sb2cxMD9mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5sb2cxMCh0KX06ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgubG9nKHQpL01hdGguTE4xMH0sby50b1JhZGlhbnM9ZnVuY3Rpb24odCl7cmV0dXJuIHQqKE1hdGguUEkvMTgwKX0sby50b0RlZ3JlZXM9ZnVuY3Rpb24odCl7cmV0dXJuIHQqKDE4MC9NYXRoLlBJKX0sby5nZXRBbmdsZUZyb21Qb2ludD1mdW5jdGlvbih0LGUpe3ZhciBhPWUueC10LngsaT1lLnktdC55LG49TWF0aC5zcXJ0KGEqYStpKmkpLG89TWF0aC5hdGFuMihpLGEpO3JldHVybiBvPC0uNSpNYXRoLlBJJiYobys9MipNYXRoLlBJKSx7YW5nbGU6byxkaXN0YW5jZTpufX0sby5kaXN0YW5jZUJldHdlZW5Qb2ludHM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGUueC10LngsMikrTWF0aC5wb3coZS55LXQueSwyKSl9LG8uYWxpYXNQaXhlbD1mdW5jdGlvbih0KXtyZXR1cm4gdCUyPT09MD8wOi41fSxvLnNwbGluZUN1cnZlPWZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXQuc2tpcD9lOnQsbz1lLHI9YS5za2lwP2U6YSxsPU1hdGguc3FydChNYXRoLnBvdyhvLngtbi54LDIpK01hdGgucG93KG8ueS1uLnksMikpLHM9TWF0aC5zcXJ0KE1hdGgucG93KHIueC1vLngsMikrTWF0aC5wb3coci55LW8ueSwyKSksZD1sLyhsK3MpLHU9cy8obCtzKTtkPWlzTmFOKGQpPzA6ZCx1PWlzTmFOKHUpPzA6dTt2YXIgYz1pKmQsaD1pKnU7cmV0dXJue3ByZXZpb3VzOnt4Om8ueC1jKihyLngtbi54KSx5Om8ueS1jKihyLnktbi55KX0sbmV4dDp7eDpvLngraCooci54LW4ueCkseTpvLnkraCooci55LW4ueSl9fX0sby5FUFNJTE9OPU51bWJlci5FUFNJTE9OfHwxZS0xNCxvLnNwbGluZUN1cnZlTW9ub3RvbmU9ZnVuY3Rpb24odCl7dmFyIGUsYSxpLG4scj0odHx8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57bW9kZWw6dC5fbW9kZWwsZGVsdGFLOjAsbUs6MH19KSxsPXIubGVuZ3RoO2ZvcihlPTA7bD5lOysrZSlpPXJbZV0saS5tb2RlbC5za2lwfHwoYT1lPjA/cltlLTFdOm51bGwsbj1sLTE+ZT9yW2UrMV06bnVsbCxuJiYhbi5tb2RlbC5za2lwJiYoaS5kZWx0YUs9KG4ubW9kZWwueS1pLm1vZGVsLnkpLyhuLm1vZGVsLngtaS5tb2RlbC54KSksIWF8fGEubW9kZWwuc2tpcD9pLm1LPWkuZGVsdGFLOiFufHxuLm1vZGVsLnNraXA/aS5tSz1hLmRlbHRhSzp0aGlzLnNpZ24oYS5kZWx0YUspIT09dGhpcy5zaWduKGkuZGVsdGFLKT9pLm1LPTA6aS5tSz0oYS5kZWx0YUsraS5kZWx0YUspLzIpO3ZhciBzLGQsdSxjO2ZvcihlPTA7bC0xPmU7KytlKWk9cltlXSxuPXJbZSsxXSxpLm1vZGVsLnNraXB8fG4ubW9kZWwuc2tpcHx8KG8uYWxtb3N0RXF1YWxzKGkuZGVsdGFLLDAsdGhpcy5FUFNJTE9OKT9pLm1LPW4ubUs9MDoocz1pLm1LL2kuZGVsdGFLLGQ9bi5tSy9pLmRlbHRhSyxjPU1hdGgucG93KHMsMikrTWF0aC5wb3coZCwyKSw5Pj1jfHwodT0zL01hdGguc3FydChjKSxpLm1LPXMqdSppLmRlbHRhSyxuLm1LPWQqdSppLmRlbHRhSykpKTt2YXIgaDtmb3IoZT0wO2w+ZTsrK2UpaT1yW2VdLGkubW9kZWwuc2tpcHx8KGE9ZT4wP3JbZS0xXTpudWxsLG49bC0xPmU/cltlKzFdOm51bGwsYSYmIWEubW9kZWwuc2tpcCYmKGg9KGkubW9kZWwueC1hLm1vZGVsLngpLzMsaS5tb2RlbC5jb250cm9sUG9pbnRQcmV2aW91c1g9aS5tb2RlbC54LWgsaS5tb2RlbC5jb250cm9sUG9pbnRQcmV2aW91c1k9aS5tb2RlbC55LWgqaS5tSyksbiYmIW4ubW9kZWwuc2tpcCYmKGg9KG4ubW9kZWwueC1pLm1vZGVsLngpLzMsaS5tb2RlbC5jb250cm9sUG9pbnROZXh0WD1pLm1vZGVsLngraCxpLm1vZGVsLmNvbnRyb2xQb2ludE5leHRZPWkubW9kZWwueStoKmkubUspKX0sby5uZXh0SXRlbT1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGE/ZT49dC5sZW5ndGgtMT90WzBdOnRbZSsxXTplPj10Lmxlbmd0aC0xP3RbdC5sZW5ndGgtMV06dFtlKzFdfSxvLnByZXZpb3VzSXRlbT1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGE/MD49ZT90W3QubGVuZ3RoLTFdOnRbZS0xXTowPj1lP3RbMF06dFtlLTFdfSxvLm5pY2VOdW09ZnVuY3Rpb24odCxlKXt2YXIgYSxpPU1hdGguZmxvb3Ioby5sb2cxMCh0KSksbj10L01hdGgucG93KDEwLGkpO3JldHVybiBhPWU/MS41Pm4/MTozPm4/Mjo3Pm4/NToxMDoxPj1uPzE6Mj49bj8yOjU+PW4/NToxMCxhKk1hdGgucG93KDEwLGkpfTt2YXIgcj1vLmVhc2luZ0VmZmVjdHM9e2xpbmVhcjpmdW5jdGlvbih0KXtyZXR1cm4gdH0sZWFzZUluUXVhZDpmdW5jdGlvbih0KXtyZXR1cm4gdCp0fSxlYXNlT3V0UXVhZDpmdW5jdGlvbih0KXtyZXR1cm4tMSp0Kih0LTIpfSxlYXNlSW5PdXRRdWFkOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQ6LTAuNSooLS10Kih0LTIpLTEpfSxlYXNlSW5DdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4gdCp0KnR9LGVhc2VPdXRDdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqdCsxKX0sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0Oi41KigodC09MikqdCp0KzIpfSxlYXNlSW5RdWFydDpmdW5jdGlvbih0KXtyZXR1cm4gdCp0KnQqdH0sZWFzZU91dFF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybi0xKigodD10LzEtMSkqdCp0KnQtMSl9LGVhc2VJbk91dFF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdCp0Oi0wLjUqKCh0LT0yKSp0KnQqdC0yKX0sZWFzZUluUXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKHQvPTEpKnQqdCp0KnR9LGVhc2VPdXRRdWludDpmdW5jdGlvbih0KXtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqdCp0KnQrMSl9LGVhc2VJbk91dFF1aW50OmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdCp0KnQ6LjUqKCh0LT0yKSp0KnQqdCp0KzIpfSxlYXNlSW5TaW5lOmZ1bmN0aW9uKHQpe3JldHVybi0xKk1hdGguY29zKHQvMSooTWF0aC5QSS8yKSkrMX0sZWFzZU91dFNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuIDEqTWF0aC5zaW4odC8xKihNYXRoLlBJLzIpKX0sZWFzZUluT3V0U2luZTpmdW5jdGlvbih0KXtyZXR1cm4tMC41KihNYXRoLmNvcyhNYXRoLlBJKnQvMSktMSl9LGVhc2VJbkV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDA9PT10PzE6MSpNYXRoLnBvdygyLDEwKih0LzEtMSkpfSxlYXNlT3V0RXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMT09PXQ/MToxKigtTWF0aC5wb3coMiwtMTAqdC8xKSsxKX0sZWFzZUluT3V0RXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMD09PXQ/MDoxPT09dD8xOih0Lz0uNSk8MT8uNSpNYXRoLnBvdygyLDEwKih0LTEpKTouNSooLU1hdGgucG93KDIsLTEwKi0tdCkrMil9LGVhc2VJbkNpcmM6ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PTE/dDotMSooTWF0aC5zcXJ0KDEtKHQvPTEpKnQpLTEpfSxlYXNlT3V0Q2lyYzpmdW5jdGlvbih0KXtyZXR1cm4gMSpNYXRoLnNxcnQoMS0odD10LzEtMSkqdCl9LGVhc2VJbk91dENpcmM6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy0wLjUqKE1hdGguc3FydCgxLXQqdCktMSk6LjUqKE1hdGguc3FydCgxLSh0LT0yKSp0KSsxKX0sZWFzZUluRWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6MT09PSh0Lz0xKT8xOihhfHwoYT0uMyksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksLShpKk1hdGgucG93KDIsMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKSl9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoxPT09KHQvPTEpPzE6KGF8fChhPS4zKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSxpKk1hdGgucG93KDIsLTEwKnQpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkrMSl9LGVhc2VJbk91dEVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjI9PT0odC89LjUpPzE6KGF8fChhPTEqKC4zKjEuNSkpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLDE+dD8tLjUqKGkqTWF0aC5wb3coMiwxMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkpOmkqTWF0aC5wb3coMiwtMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKi41KzEpfSxlYXNlSW5CYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuIDEqKHQvPTEpKnQqKChlKzEpKnQtZSl9LGVhc2VPdXRCYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KigoZSsxKSp0K2UpKzEpfSxlYXNlSW5PdXRCYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTg7cmV0dXJuKHQvPS41KTwxPy41Kih0KnQqKCgoZSo9MS41MjUpKzEpKnQtZSkpOi41KigodC09MikqdCooKChlKj0xLjUyNSkrMSkqdCtlKSsyKX0sZWFzZUluQm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybiAxLXIuZWFzZU91dEJvdW5jZSgxLXQpfSxlYXNlT3V0Qm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0xKTwxLzIuNzU/MSooNy41NjI1KnQqdCk6Mi8yLjc1PnQ/MSooNy41NjI1Kih0LT0xLjUvMi43NSkqdCsuNzUpOjIuNS8yLjc1PnQ/MSooNy41NjI1Kih0LT0yLjI1LzIuNzUpKnQrLjkzNzUpOjEqKDcuNTYyNSoodC09Mi42MjUvMi43NSkqdCsuOTg0Mzc1KX0sZWFzZUluT3V0Qm91bmNlOmZ1bmN0aW9uKHQpe3JldHVybi41PnQ/LjUqci5lYXNlSW5Cb3VuY2UoMip0KTouNSpyLmVhc2VPdXRCb3VuY2UoMip0LTEpKy41fX07by5yZXF1ZXN0QW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe3JldHVybiB3aW5kb3cuc2V0VGltZW91dCh0LDFlMy82MCl9fSgpLG8uY2FuY2VsQW5pbUZyYW1lPWZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5vQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc0NhbmNlbEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LmNsZWFyVGltZW91dCh0LDFlMy82MCl9fSgpLG8uZ2V0UmVsYXRpdmVQb3NpdGlvbj1mdW5jdGlvbih0LGUpe3ZhciBhLGksbj10Lm9yaWdpbmFsRXZlbnR8fHQscj10LmN1cnJlbnRUYXJnZXR8fHQuc3JjRWxlbWVudCxsPXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkscz1uLnRvdWNoZXM7cyYmcy5sZW5ndGg+MD8oYT1zWzBdLmNsaWVudFgsaT1zWzBdLmNsaWVudFkpOihhPW4uY2xpZW50WCxpPW4uY2xpZW50WSk7dmFyIGQ9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLWxlZnRcIikpLHU9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLXRvcFwiKSksYz1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctcmlnaHRcIikpLGg9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLWJvdHRvbVwiKSksZj1sLnJpZ2h0LWwubGVmdC1kLWMsZz1sLmJvdHRvbS1sLnRvcC11LWg7cmV0dXJuIGE9TWF0aC5yb3VuZCgoYS1sLmxlZnQtZCkvZipyLndpZHRoL2UuY3VycmVudERldmljZVBpeGVsUmF0aW8pLGk9TWF0aC5yb3VuZCgoaS1sLnRvcC11KS9nKnIuaGVpZ2h0L2UuY3VycmVudERldmljZVBpeGVsUmF0aW8pLHt4OmEseTppfX0sby5hZGRFdmVudD1mdW5jdGlvbih0LGUsYSl7dC5hZGRFdmVudExpc3RlbmVyP3QuYWRkRXZlbnRMaXN0ZW5lcihlLGEpOnQuYXR0YWNoRXZlbnQ/dC5hdHRhY2hFdmVudChcIm9uXCIrZSxhKTp0W1wib25cIitlXT1hfSxvLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKHQsZSxhKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXI/dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsYSwhMSk6dC5kZXRhY2hFdmVudD90LmRldGFjaEV2ZW50KFwib25cIitlLGEpOnRbXCJvblwiK2VdPW8ubm9vcH0sby5iaW5kRXZlbnRzPWZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10LmV2ZW50cz10LmV2ZW50c3x8e307by5lYWNoKGUsZnVuY3Rpb24oZSl7aVtlXT1mdW5jdGlvbigpe2EuYXBwbHkodCxhcmd1bWVudHMpfSxvLmFkZEV2ZW50KHQuY2hhcnQuY2FudmFzLGUsaVtlXSl9KX0sby51bmJpbmRFdmVudHM9ZnVuY3Rpb24odCxlKXt2YXIgYT10LmNoYXJ0LmNhbnZhcztvLmVhY2goZSxmdW5jdGlvbih0LGUpe28ucmVtb3ZlRXZlbnQoYSxlLHQpfSl9LG8uZ2V0Q29uc3RyYWludFdpZHRoPWZ1bmN0aW9uKHQpe3JldHVybiBuKHQsXCJtYXgtd2lkdGhcIixcImNsaWVudFdpZHRoXCIpfSxvLmdldENvbnN0cmFpbnRIZWlnaHQ9ZnVuY3Rpb24odCl7cmV0dXJuIG4odCxcIm1heC1oZWlnaHRcIixcImNsaWVudEhlaWdodFwiKX0sby5nZXRNYXhpbXVtV2lkdGg9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlLGE9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1sZWZ0XCIpLDEwKSxpPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctcmlnaHRcIiksMTApLG49ZS5jbGllbnRXaWR0aC1hLWkscj1vLmdldENvbnN0cmFpbnRXaWR0aCh0KTtyZXR1cm4gaXNOYU4ocik/bjpNYXRoLm1pbihuLHIpfSxvLmdldE1heGltdW1IZWlnaHQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlLGE9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy10b3BcIiksMTApLGk9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1ib3R0b21cIiksMTApLG49ZS5jbGllbnRIZWlnaHQtYS1pLHI9by5nZXRDb25zdHJhaW50SGVpZ2h0KHQpO3JldHVybiBpc05hTihyKT9uOk1hdGgubWluKG4scil9LG8uZ2V0U3R5bGU9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC5jdXJyZW50U3R5bGU/dC5jdXJyZW50U3R5bGVbZV06ZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSh0LG51bGwpLmdldFByb3BlcnR5VmFsdWUoZSl9LG8ucmV0aW5hU2NhbGU9ZnVuY3Rpb24odCl7dmFyIGU9dC5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbz13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpb3x8MTtpZigxIT09ZSl7dmFyIGE9dC5jYW52YXMsaT10LmhlaWdodCxuPXQud2lkdGg7YS5oZWlnaHQ9aSplLGEud2lkdGg9biplLHQuY3R4LnNjYWxlKGUsZSksYS5zdHlsZS5oZWlnaHQ9aStcInB4XCIsYS5zdHlsZS53aWR0aD1uK1wicHhcIn19LG8uY2xlYXI9ZnVuY3Rpb24odCl7dC5jdHguY2xlYXJSZWN0KDAsMCx0LndpZHRoLHQuaGVpZ2h0KX0sby5mb250U3RyaW5nPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gZStcIiBcIit0K1wicHggXCIrYX0sby5sb25nZXN0VGV4dD1mdW5jdGlvbih0LGUsYSxpKXtpPWl8fHt9O3ZhciBuPWkuZGF0YT1pLmRhdGF8fHt9LHI9aS5nYXJiYWdlQ29sbGVjdD1pLmdhcmJhZ2VDb2xsZWN0fHxbXTtpLmZvbnQhPT1lJiYobj1pLmRhdGE9e30scj1pLmdhcmJhZ2VDb2xsZWN0PVtdLGkuZm9udD1lKSx0LmZvbnQ9ZTt2YXIgbD0wO28uZWFjaChhLGZ1bmN0aW9uKGUpe3ZvaWQgMCE9PWUmJm51bGwhPT1lJiZvLmlzQXJyYXkoZSkhPT0hMD9sPW8ubWVhc3VyZVRleHQodCxuLHIsbCxlKTpvLmlzQXJyYXkoZSkmJm8uZWFjaChlLGZ1bmN0aW9uKGUpe3ZvaWQgMD09PWV8fG51bGw9PT1lfHxvLmlzQXJyYXkoZSl8fChsPW8ubWVhc3VyZVRleHQodCxuLHIsbCxlKSl9KX0pO3ZhciBzPXIubGVuZ3RoLzI7aWYocz5hLmxlbmd0aCl7Zm9yKHZhciBkPTA7cz5kO2QrKylkZWxldGUgbltyW2RdXTtyLnNwbGljZSgwLHMpfXJldHVybiBsfSxvLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQsZSxhLGksbil7dmFyIG89ZVtuXTtyZXR1cm4gb3x8KG89ZVtuXT10Lm1lYXN1cmVUZXh0KG4pLndpZHRoLGEucHVzaChuKSksbz5pJiYoaT1vKSxpfSxvLm51bWJlck9mTGFiZWxMaW5lcz1mdW5jdGlvbih0KXt2YXIgZT0xO3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0KXtvLmlzQXJyYXkodCkmJnQubGVuZ3RoPmUmJihlPXQubGVuZ3RoKX0pLGV9LG8uZHJhd1JvdW5kZWRSZWN0YW5nbGU9ZnVuY3Rpb24odCxlLGEsaSxuLG8pe3QuYmVnaW5QYXRoKCksdC5tb3ZlVG8oZStvLGEpLHQubGluZVRvKGUraS1vLGEpLHQucXVhZHJhdGljQ3VydmVUbyhlK2ksYSxlK2ksYStvKSx0LmxpbmVUbyhlK2ksYStuLW8pLHQucXVhZHJhdGljQ3VydmVUbyhlK2ksYStuLGUraS1vLGErbiksdC5saW5lVG8oZStvLGErbiksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUsYStuLGUsYStuLW8pLHQubGluZVRvKGUsYStvKSx0LnF1YWRyYXRpY0N1cnZlVG8oZSxhLGUrbyxhKSx0LmNsb3NlUGF0aCgpfSxvLmNvbG9yPWZ1bmN0aW9uKGUpe3JldHVybiBpP2koZSBpbnN0YW5jZW9mIENhbnZhc0dyYWRpZW50P3QuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRDb2xvcjplKTooY29uc29sZS5lcnJvcihcIkNvbG9yLmpzIG5vdCBmb3VuZCFcIiksZSl9LG8uYWRkUmVzaXplTGlzdGVuZXI9ZnVuY3Rpb24odCxlKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO2EuY2xhc3NOYW1lPVwiY2hhcnRqcy1oaWRkZW4taWZyYW1lXCIsYS5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTpibG9jaztvdmVyZmxvdzpoaWRkZW47Ym9yZGVyOjA7bWFyZ2luOjA7dG9wOjA7bGVmdDowO2JvdHRvbTowO3JpZ2h0OjA7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtwb3NpdGlvbjphYnNvbHV0ZTtwb2ludGVyLWV2ZW50czpub25lO3otaW5kZXg6LTE7XCIsYS50YWJJbmRleD0tMTt2YXIgaT10Ll9jaGFydGpzPXtyZXNpemVyOmEsdGlja2luZzohMX0sbj1mdW5jdGlvbigpe2kudGlja2luZ3x8KGkudGlja2luZz0hMCxvLnJlcXVlc3RBbmltRnJhbWUuY2FsbCh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gaS5yZXNpemVyPyhpLnRpY2tpbmc9ITEsZSgpKTp2b2lkIDB9KSl9O28uYWRkRXZlbnQoYSxcImxvYWRcIixmdW5jdGlvbigpe28uYWRkRXZlbnQoYS5jb250ZW50V2luZG93fHxhLFwicmVzaXplXCIsbiksbigpfSksdC5pbnNlcnRCZWZvcmUoYSx0LmZpcnN0Q2hpbGQpfSxvLnJlbW92ZVJlc2l6ZUxpc3RlbmVyPWZ1bmN0aW9uKHQpe2lmKHQmJnQuX2NoYXJ0anMpe3ZhciBlPXQuX2NoYXJ0anMucmVzaXplcjtlJiYoZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLHQuX2NoYXJ0anMucmVzaXplcj1udWxsKSxkZWxldGUgdC5fY2hhcnRqc319LG8uaXNBcnJheT1BcnJheS5pc0FycmF5P2Z1bmN0aW9uKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpfTpmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCl9LG8uYXJyYXlFcXVhbHM9ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4scjtpZighdHx8IWV8fHQubGVuZ3RoIT09ZS5sZW5ndGgpcmV0dXJuITE7Zm9yKGE9MCxpPXQubGVuZ3RoO2k+YTsrK2EpaWYobj10W2FdLHI9ZVthXSxuIGluc3RhbmNlb2YgQXJyYXkmJnIgaW5zdGFuY2VvZiBBcnJheSl7aWYoIW8uYXJyYXlFcXVhbHMobixyKSlyZXR1cm4hMX1lbHNlIGlmKG4hPT1yKXJldHVybiExO3JldHVybiEwfSxvLmNhbGxDYWxsYmFjaz1mdW5jdGlvbih0LGUsYSl7dCYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5jYWxsJiZ0LmFwcGx5KGEsZSl9LG8uZ2V0SG92ZXJDb2xvcj1mdW5jdGlvbih0KXtyZXR1cm4gdCBpbnN0YW5jZW9mIENhbnZhc1BhdHRlcm4/dDpvLmNvbG9yKHQpLnNhdHVyYXRlKC41KS5kYXJrZW4oLjEpLnJnYlN0cmluZygpfX19LHszOjN9XSwyNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGEsaSxuLG8scixsPXQuZGF0YS5kYXRhc2V0cztmb3IoaT0wLG89bC5sZW5ndGg7bz5pOysraSlpZih0LmlzRGF0YXNldFZpc2libGUoaSkpZm9yKGE9dC5nZXREYXRhc2V0TWV0YShpKSxuPTAscj1hLmRhdGEubGVuZ3RoO3I+bjsrK24pe3ZhciBzPWEuZGF0YVtuXTtzLl92aWV3LnNraXB8fGUocyl9fWZ1bmN0aW9uIGEodCxhKXt2YXIgaT1bXTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5SYW5nZShhLngsYS55KSYmaS5wdXNoKHQpfSksaX1mdW5jdGlvbiBpKHQsYSxpLG4pe3ZhciByPU51bWJlci5QT1NJVElWRV9JTkZJTklUWSxsPVtdO3JldHVybiBufHwobj1vLmRpc3RhbmNlQmV0d2VlblBvaW50cyksZSh0LGZ1bmN0aW9uKHQpe2lmKCFpfHx0LmluUmFuZ2UoYS54LGEueSkpe3ZhciBlPXQuZ2V0Q2VudGVyUG9pbnQoKSxvPW4oYSxlKTtyPm8/KGw9W3RdLHI9byk6bz09PXImJmwucHVzaCh0KX19KSxsfWZ1bmN0aW9uIG4odCxlLG4pe3ZhciByPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLGw9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWF0aC5hYnModC54LWUueCl9LHM9bi5pbnRlcnNlY3Q/YSh0LHIpOmkodCxyLCExLGwpLGQ9W107cmV0dXJuIHMubGVuZ3RoPyh0LmRhdGEuZGF0YXNldHMuZm9yRWFjaChmdW5jdGlvbihlLGEpe2lmKHQuaXNEYXRhc2V0VmlzaWJsZShhKSl7dmFyIGk9dC5nZXREYXRhc2V0TWV0YShhKSxuPWkuZGF0YVtzWzBdLl9pbmRleF07biYmIW4uX3ZpZXcuc2tpcCYmZC5wdXNoKG4pfX0pLGQpOltdfXZhciBvPXQuaGVscGVyczt0LkludGVyYWN0aW9uPXttb2Rlczp7c2luZ2xlOmZ1bmN0aW9uKHQsYSl7dmFyIGk9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCksbj1bXTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3JldHVybiB0LmluUmFuZ2UoaS54LGkueSk/KG4ucHVzaCh0KSxuKTp2b2lkIDB9KSxuLnNsaWNlKDAsMSl9LGxhYmVsOm4saW5kZXg6bixkYXRhc2V0OmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxsPW4uaW50ZXJzZWN0P2EodCxyKTppKHQsciwhMSk7cmV0dXJuIGwubGVuZ3RoPjAmJihsPXQuZ2V0RGF0YXNldE1ldGEobFswXS5fZGF0YXNldEluZGV4KS5kYXRhKSxsfSxcIngtYXhpc1wiOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG4odCxlLCEwKX0scG9pbnQ6ZnVuY3Rpb24odCxlKXt2YXIgaT1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KTtyZXR1cm4gYSh0LGkpfSxuZWFyZXN0OmZ1bmN0aW9uKHQsZSxhKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxyPWkodCxuLGEuaW50ZXJzZWN0KTtyZXR1cm4gci5sZW5ndGg+MSYmci5zb3J0KGZ1bmN0aW9uKHQsZSl7dmFyIGE9dC5nZXRBcmVhKCksaT1lLmdldEFyZWEoKSxuPWEtaTtyZXR1cm4gMD09PW4mJihuPXQuX2RhdGFzZXRJbmRleC1lLl9kYXRhc2V0SW5kZXgpLG59KSxyLnNsaWNlKDAsMSl9LHg6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLHI9W10sbD0hMTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5YUmFuZ2Uobi54KSYmci5wdXNoKHQpLHQuaW5SYW5nZShuLngsbi55KSYmKGw9ITApfSksaS5pbnRlcnNlY3QmJiFsJiYocj1bXSkscn0seTpmdW5jdGlvbih0LGEsaSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCkscj1bXSxsPSExO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pbllSYW5nZShuLnkpJiZyLnB1c2godCksdC5pblJhbmdlKG4ueCxuLnkpJiYobD0hMCl9KSxpLmludGVyc2VjdCYmIWwmJihyPVtdKSxyfX19fX0se31dLDI4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7dmFyIHQ9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gdGhpcy5jb250cm9sbGVyPW5ldyB0LkNvbnRyb2xsZXIoZSxhLHRoaXMpLHRoaXMuY29udHJvbGxlcn07cmV0dXJuIHQuZGVmYXVsdHM9e2dsb2JhbDp7cmVzcG9uc2l2ZTohMCxyZXNwb25zaXZlQW5pbWF0aW9uRHVyYXRpb246MCxtYWludGFpbkFzcGVjdFJhdGlvOiEwLGV2ZW50czpbXCJtb3VzZW1vdmVcIixcIm1vdXNlb3V0XCIsXCJjbGlja1wiLFwidG91Y2hzdGFydFwiLFwidG91Y2htb3ZlXCJdLGhvdmVyOntvbkhvdmVyOm51bGwsbW9kZTpcIm5lYXJlc3RcIixpbnRlcnNlY3Q6ITAsYW5pbWF0aW9uRHVyYXRpb246NDAwfSxvbkNsaWNrOm51bGwsZGVmYXVsdENvbG9yOlwicmdiYSgwLDAsMCwwLjEpXCIsZGVmYXVsdEZvbnRDb2xvcjpcIiM2NjZcIixkZWZhdWx0Rm9udEZhbWlseTpcIidIZWx2ZXRpY2EgTmV1ZScsICdIZWx2ZXRpY2EnLCAnQXJpYWwnLCBzYW5zLXNlcmlmXCIsZGVmYXVsdEZvbnRTaXplOjEyLGRlZmF1bHRGb250U3R5bGU6XCJub3JtYWxcIixzaG93TGluZXM6ITAsZWxlbWVudHM6e30sbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTtmb3IodmFyIGE9MDthPHQuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YSsrKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK3QuZGF0YS5kYXRhc2V0c1thXS5iYWNrZ3JvdW5kQ29sb3IrJ1wiPjwvc3Bhbj4nKSx0LmRhdGEuZGF0YXNldHNbYV0ubGFiZWwmJmUucHVzaCh0LmRhdGEuZGF0YXNldHNbYV0ubGFiZWwpLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9fX0sdC5DaGFydD10LHR9fSx7fV0sMjk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QubGF5b3V0U2VydmljZT17ZGVmYXVsdHM6e30sYWRkQm94OmZ1bmN0aW9uKHQsZSl7dC5ib3hlc3x8KHQuYm94ZXM9W10pLHQuYm94ZXMucHVzaChlKX0scmVtb3ZlQm94OmZ1bmN0aW9uKHQsZSl7dC5ib3hlcyYmdC5ib3hlcy5zcGxpY2UodC5ib3hlcy5pbmRleE9mKGUpLDEpfSx1cGRhdGU6ZnVuY3Rpb24odCxhLGkpe2Z1bmN0aW9uIG4odCl7dmFyIGUsYT10LmlzSG9yaXpvbnRhbCgpO2E/KGU9dC51cGRhdGUodC5vcHRpb25zLmZ1bGxXaWR0aD94OkMsTSksRC09ZS5oZWlnaHQpOihlPXQudXBkYXRlKHcsUyksQy09ZS53aWR0aCksSS5wdXNoKHtob3Jpem9udGFsOmEsbWluU2l6ZTplLGJveDp0fSl9ZnVuY3Rpb24gbyh0KXt2YXIgYT1lLmZpbmROZXh0V2hlcmUoSSxmdW5jdGlvbihlKXtyZXR1cm4gZS5ib3g9PT10fSk7aWYoYSlpZih0LmlzSG9yaXpvbnRhbCgpKXt2YXIgaT17bGVmdDpBLHJpZ2h0OlQsdG9wOjAsYm90dG9tOjB9O3QudXBkYXRlKHQub3B0aW9ucy5mdWxsV2lkdGg/eDpDLHkvMixpKX1lbHNlIHQudXBkYXRlKGEubWluU2l6ZS53aWR0aCxEKX1mdW5jdGlvbiByKHQpe3ZhciBhPWUuZmluZE5leHRXaGVyZShJLGZ1bmN0aW9uKGUpe3JldHVybiBlLmJveD09PXR9KSxpPXtsZWZ0OjAscmlnaHQ6MCx0b3A6UCxib3R0b206Rn07YSYmdC51cGRhdGUoYS5taW5TaXplLndpZHRoLEQsaSl9ZnVuY3Rpb24gbCh0KXt0LmlzSG9yaXpvbnRhbCgpPyh0LmxlZnQ9dC5vcHRpb25zLmZ1bGxXaWR0aD91OkEsdC5yaWdodD10Lm9wdGlvbnMuZnVsbFdpZHRoP2EtYzpBK0MsdC50b3A9TCx0LmJvdHRvbT1MK3QuaGVpZ2h0LEw9dC5ib3R0b20pOih0LmxlZnQ9Vix0LnJpZ2h0PVYrdC53aWR0aCx0LnRvcD1QLHQuYm90dG9tPVArRCxWPXQucmlnaHQpfWlmKHQpe3ZhciBzPXQub3B0aW9ucy5sYXlvdXQsZD1zP3MucGFkZGluZzpudWxsLHU9MCxjPTAsaD0wLGY9MDtpc05hTihkKT8odT1kLmxlZnR8fDAsYz1kLnJpZ2h0fHwwLGg9ZC50b3B8fDAsZj1kLmJvdHRvbXx8MCk6KHU9ZCxjPWQsaD1kLGY9ZCk7dmFyIGc9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwibGVmdFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSkscD1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJyaWdodFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksbT1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJ0b3BcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLGI9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwiYm90dG9tXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSx2PWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImNoYXJ0QXJlYVwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSk7bS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuKGUub3B0aW9ucy5mdWxsV2lkdGg/MTowKS0odC5vcHRpb25zLmZ1bGxXaWR0aD8xOjApfSksYi5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuKHQub3B0aW9ucy5mdWxsV2lkdGg/MTowKS0oZS5vcHRpb25zLmZ1bGxXaWR0aD8xOjApfSk7dmFyIHg9YS11LWMseT1pLWgtZixrPXgvMixTPXkvMix3PShhLWspLyhnLmxlbmd0aCtwLmxlbmd0aCksTT0oaS1TKS8obS5sZW5ndGgrYi5sZW5ndGgpLEM9eCxEPXksST1bXTtlLmVhY2goZy5jb25jYXQocCxtLGIpLG4pO3ZhciBBPXUsVD1jLFA9aCxGPWY7ZS5lYWNoKGcuY29uY2F0KHApLG8pLGUuZWFjaChnLGZ1bmN0aW9uKHQpe0ErPXQud2lkdGh9KSxlLmVhY2gocCxmdW5jdGlvbih0KXtUKz10LndpZHRofSksZS5lYWNoKG0uY29uY2F0KGIpLG8pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe1ArPXQuaGVpZ2h0fSksZS5lYWNoKGIsZnVuY3Rpb24odCl7Ris9dC5oZWlnaHR9KSxlLmVhY2goZy5jb25jYXQocCksciksQT11LFQ9YyxQPWgsRj1mLGUuZWFjaChnLGZ1bmN0aW9uKHQpe0ErPXQud2lkdGh9KSxlLmVhY2gocCxmdW5jdGlvbih0KXtUKz10LndpZHRofSksZS5lYWNoKG0sZnVuY3Rpb24odCl7UCs9dC5oZWlnaHR9KSxlLmVhY2goYixmdW5jdGlvbih0KXtGKz10LmhlaWdodH0pO3ZhciBfPWktUC1GLFI9YS1BLVQ7KFIhPT1DfHxfIT09RCkmJihlLmVhY2goZyxmdW5jdGlvbih0KXt0LmhlaWdodD1ffSksZS5lYWNoKHAsZnVuY3Rpb24odCl7dC5oZWlnaHQ9X30pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe3Qub3B0aW9ucy5mdWxsV2lkdGh8fCh0LndpZHRoPVIpfSksZS5lYWNoKGIsZnVuY3Rpb24odCl7dC5vcHRpb25zLmZ1bGxXaWR0aHx8KHQud2lkdGg9Uil9KSxEPV8sQz1SKTt2YXIgVj11LEw9aDtlLmVhY2goZy5jb25jYXQobSksbCksVis9QyxMKz1ELGUuZWFjaChwLGwpLGUuZWFjaChiLGwpLHQuY2hhcnRBcmVhPXtsZWZ0OkEsdG9wOlAscmlnaHQ6QStDLGJvdHRvbTpQK0R9LGUuZWFjaCh2LGZ1bmN0aW9uKGUpe2UubGVmdD10LmNoYXJ0QXJlYS5sZWZ0LGUudG9wPXQuY2hhcnRBcmVhLnRvcCxlLnJpZ2h0PXQuY2hhcnRBcmVhLnJpZ2h0LGUuYm90dG9tPXQuY2hhcnRBcmVhLmJvdHRvbSxlLnVwZGF0ZShDLEQpfSl9fX19fSx7fV0sMzA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiB0LnVzZVBvaW50U3R5bGU/ZSpNYXRoLlNRUlQyOnQuYm94V2lkdGh9dmFyIGE9dC5oZWxwZXJzLGk9YS5ub29wO3QuZGVmYXVsdHMuZ2xvYmFsLmxlZ2VuZD17ZGlzcGxheTohMCxwb3NpdGlvbjpcInRvcFwiLGZ1bGxXaWR0aDohMCxyZXZlcnNlOiExLG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRJbmRleCxpPXRoaXMuY2hhcnQsbj1pLmdldERhdGFzZXRNZXRhKGEpO24uaGlkZGVuPW51bGw9PT1uLmhpZGRlbj8haS5kYXRhLmRhdGFzZXRzW2FdLmhpZGRlbjpudWxsLGkudXBkYXRlKCl9LG9uSG92ZXI6bnVsbCxsYWJlbHM6e2JveFdpZHRoOjQwLHBhZGRpbmc6MTAsZ2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRhO3JldHVybiBhLmlzQXJyYXkoZS5kYXRhc2V0cyk/ZS5kYXRhc2V0cy5tYXAoZnVuY3Rpb24oZSxpKXtyZXR1cm57dGV4dDplLmxhYmVsLGZpbGxTdHlsZTphLmlzQXJyYXkoZS5iYWNrZ3JvdW5kQ29sb3IpP2UuYmFja2dyb3VuZENvbG9yWzBdOmUuYmFja2dyb3VuZENvbG9yLGhpZGRlbjohdC5pc0RhdGFzZXRWaXNpYmxlKGkpLGxpbmVDYXA6ZS5ib3JkZXJDYXBTdHlsZSxsaW5lRGFzaDplLmJvcmRlckRhc2gsbGluZURhc2hPZmZzZXQ6ZS5ib3JkZXJEYXNoT2Zmc2V0LGxpbmVKb2luOmUuYm9yZGVySm9pblN0eWxlLGxpbmVXaWR0aDplLmJvcmRlcldpZHRoLHN0cm9rZVN0eWxlOmUuYm9yZGVyQ29sb3IscG9pbnRTdHlsZTplLnBvaW50U3R5bGUsZGF0YXNldEluZGV4Oml9fSx0aGlzKTpbXX19fSx0LkxlZ2VuZD10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKHQpe2EuZXh0ZW5kKHRoaXMsdCksdGhpcy5sZWdlbmRIaXRCb3hlcz1bXSx0aGlzLmRvdWdobnV0TW9kZT0hMX0sYmVmb3JlVXBkYXRlOmksdXBkYXRlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzO3JldHVybiBpLmJlZm9yZVVwZGF0ZSgpLGkubWF4V2lkdGg9dCxpLm1heEhlaWdodD1lLGkubWFyZ2lucz1hLGkuYmVmb3JlU2V0RGltZW5zaW9ucygpLGkuc2V0RGltZW5zaW9ucygpLGkuYWZ0ZXJTZXREaW1lbnNpb25zKCksaS5iZWZvcmVCdWlsZExhYmVscygpLGkuYnVpbGRMYWJlbHMoKSxpLmFmdGVyQnVpbGRMYWJlbHMoKSxpLmJlZm9yZUZpdCgpLGkuZml0KCksaS5hZnRlckZpdCgpLGkuYWZ0ZXJVcGRhdGUoKSxpLm1pblNpemV9LGFmdGVyVXBkYXRlOmksYmVmb3JlU2V0RGltZW5zaW9uczppLHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MCx0Lm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9fSxhZnRlclNldERpbWVuc2lvbnM6aSxiZWZvcmVCdWlsZExhYmVsczppLGJ1aWxkTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxlZ2VuZEl0ZW1zPXQub3B0aW9ucy5sYWJlbHMuZ2VuZXJhdGVMYWJlbHMuY2FsbCh0LHQuY2hhcnQpLHQub3B0aW9ucy5yZXZlcnNlJiZ0LmxlZ2VuZEl0ZW1zLnJldmVyc2UoKX0sYWZ0ZXJCdWlsZExhYmVsczppLGJlZm9yZUZpdDppLGZpdDpmdW5jdGlvbigpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnMsbz1uLmxhYmVscyxyPW4uZGlzcGxheSxsPWkuY3R4LHM9dC5kZWZhdWx0cy5nbG9iYWwsZD1hLmdldFZhbHVlT3JEZWZhdWx0LHU9ZChvLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxjPWQoby5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSxoPWQoby5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLGY9YS5mb250U3RyaW5nKHUsYyxoKSxnPWkubGVnZW5kSGl0Qm94ZXM9W10scD1pLm1pblNpemUsbT1pLmlzSG9yaXpvbnRhbCgpO2lmKG0/KHAud2lkdGg9aS5tYXhXaWR0aCxwLmhlaWdodD1yPzEwOjApOihwLndpZHRoPXI/MTA6MCxwLmhlaWdodD1pLm1heEhlaWdodCkscilpZihsLmZvbnQ9ZixtKXt2YXIgYj1pLmxpbmVXaWR0aHM9WzBdLHY9aS5sZWdlbmRJdGVtcy5sZW5ndGg/dStvLnBhZGRpbmc6MDtsLnRleHRBbGlnbj1cImxlZnRcIixsLnRleHRCYXNlbGluZT1cInRvcFwiLGEuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsYSl7dmFyIG49ZShvLHUpLHI9bit1LzIrbC5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoO2JbYi5sZW5ndGgtMV0rcitvLnBhZGRpbmc+PWkud2lkdGgmJih2Kz11K28ucGFkZGluZyxiW2IubGVuZ3RoXT1pLmxlZnQpLGdbYV09e2xlZnQ6MCx0b3A6MCx3aWR0aDpyLGhlaWdodDp1fSxiW2IubGVuZ3RoLTFdKz1yK28ucGFkZGluZ30pLHAuaGVpZ2h0Kz12fWVsc2V7dmFyIHg9by5wYWRkaW5nLHk9aS5jb2x1bW5XaWR0aHM9W10saz1vLnBhZGRpbmcsUz0wLHc9MCxNPXUreDthLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGEpe3ZhciBpPWUobyx1KSxuPWkrdS8yK2wubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aDt3K00+cC5oZWlnaHQmJihrKz1TK28ucGFkZGluZyx5LnB1c2goUyksUz0wLHc9MCksUz1NYXRoLm1heChTLG4pLHcrPU0sZ1thXT17bGVmdDowLHRvcDowLHdpZHRoOm4saGVpZ2h0OnV9fSksays9Uyx5LnB1c2goUykscC53aWR0aCs9a31pLndpZHRoPXAud2lkdGgsaS5oZWlnaHQ9cC5oZWlnaHR9LGFmdGVyRml0OmksaXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJ0b3BcIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbn0sZHJhdzpmdW5jdGlvbigpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnMsbz1uLmxhYmVscyxyPXQuZGVmYXVsdHMuZ2xvYmFsLGw9ci5lbGVtZW50cy5saW5lLHM9aS53aWR0aCxkPWkubGluZVdpZHRocztpZihuLmRpc3BsYXkpe3ZhciB1LGM9aS5jdHgsaD1hLmdldFZhbHVlT3JEZWZhdWx0LGY9aChvLmZvbnRDb2xvcixyLmRlZmF1bHRGb250Q29sb3IpLGc9aChvLmZvbnRTaXplLHIuZGVmYXVsdEZvbnRTaXplKSxwPWgoby5mb250U3R5bGUsci5kZWZhdWx0Rm9udFN0eWxlKSxtPWgoby5mb250RmFtaWx5LHIuZGVmYXVsdEZvbnRGYW1pbHkpLGI9YS5mb250U3RyaW5nKGcscCxtKTtjLnRleHRBbGlnbj1cImxlZnRcIixjLnRleHRCYXNlbGluZT1cInRvcFwiLGMubGluZVdpZHRoPS41LGMuc3Ryb2tlU3R5bGU9ZixjLmZpbGxTdHlsZT1mLGMuZm9udD1iO3ZhciB2PWUobyxnKSx4PWkubGVnZW5kSGl0Qm94ZXMseT1mdW5jdGlvbihlLGEsaSl7aWYoIShpc05hTih2KXx8MD49dikpe2Muc2F2ZSgpLGMuZmlsbFN0eWxlPWgoaS5maWxsU3R5bGUsci5kZWZhdWx0Q29sb3IpLGMubGluZUNhcD1oKGkubGluZUNhcCxsLmJvcmRlckNhcFN0eWxlKSxjLmxpbmVEYXNoT2Zmc2V0PWgoaS5saW5lRGFzaE9mZnNldCxsLmJvcmRlckRhc2hPZmZzZXQpLGMubGluZUpvaW49aChpLmxpbmVKb2luLGwuYm9yZGVySm9pblN0eWxlKSxjLmxpbmVXaWR0aD1oKGkubGluZVdpZHRoLGwuYm9yZGVyV2lkdGgpLGMuc3Ryb2tlU3R5bGU9aChpLnN0cm9rZVN0eWxlLHIuZGVmYXVsdENvbG9yKTt2YXIgbz0wPT09aChpLmxpbmVXaWR0aCxsLmJvcmRlcldpZHRoKTtpZihjLnNldExpbmVEYXNoJiZjLnNldExpbmVEYXNoKGgoaS5saW5lRGFzaCxsLmJvcmRlckRhc2gpKSxuLmxhYmVscyYmbi5sYWJlbHMudXNlUG9pbnRTdHlsZSl7dmFyIHM9ZypNYXRoLlNRUlQyLzIsZD1zL01hdGguU1FSVDIsdT1lK2QsZj1hK2Q7dC5jYW52YXNIZWxwZXJzLmRyYXdQb2ludChjLGkucG9pbnRTdHlsZSxzLHUsZil9ZWxzZSBvfHxjLnN0cm9rZVJlY3QoZSxhLHYsZyksYy5maWxsUmVjdChlLGEsdixnKTtjLnJlc3RvcmUoKX19LGs9ZnVuY3Rpb24odCxlLGEsaSl7Yy5maWxsVGV4dChhLnRleHQsditnLzIrdCxlKSxhLmhpZGRlbiYmKGMuYmVnaW5QYXRoKCksYy5saW5lV2lkdGg9MixjLm1vdmVUbyh2K2cvMit0LGUrZy8yKSxjLmxpbmVUbyh2K2cvMit0K2ksZStnLzIpLGMuc3Ryb2tlKCkpfSxTPWkuaXNIb3Jpem9udGFsKCk7dT1TP3t4OmkubGVmdCsocy1kWzBdKS8yLHk6aS50b3Arby5wYWRkaW5nLGxpbmU6MH06e3g6aS5sZWZ0K28ucGFkZGluZyx5OmkudG9wK28ucGFkZGluZyxsaW5lOjB9O3ZhciB3PWcrby5wYWRkaW5nO2EuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsZSl7dmFyIGE9Yy5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoLG49ditnLzIrYSxyPXUueCxsPXUueTtTP3Irbj49cyYmKGw9dS55Kz13LHUubGluZSsrLHI9dS54PWkubGVmdCsocy1kW3UubGluZV0pLzIpOmwrdz5pLmJvdHRvbSYmKHI9dS54PXIraS5jb2x1bW5XaWR0aHNbdS5saW5lXStvLnBhZGRpbmcsbD11Lnk9aS50b3AsdS5saW5lKyspLHkocixsLHQpLHhbZV0ubGVmdD1yLHhbZV0udG9wPWwsayhyLGwsdCxhKSxTP3UueCs9bitvLnBhZGRpbmc6dS55Kz13fSl9fSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9ZS5vcHRpb25zLG49XCJtb3VzZXVwXCI9PT10LnR5cGU/XCJjbGlja1wiOnQudHlwZSxvPSExO2lmKFwibW91c2Vtb3ZlXCI9PT1uKXtpZighaS5vbkhvdmVyKXJldHVybn1lbHNle2lmKFwiY2xpY2tcIiE9PW4pcmV0dXJuO2lmKCFpLm9uQ2xpY2spcmV0dXJufXZhciByPWEuZ2V0UmVsYXRpdmVQb3NpdGlvbih0LGUuY2hhcnQuY2hhcnQpLGw9ci54LHM9ci55O2lmKGw+PWUubGVmdCYmbDw9ZS5yaWdodCYmcz49ZS50b3AmJnM8PWUuYm90dG9tKWZvcih2YXIgZD1lLmxlZ2VuZEhpdEJveGVzLHU9MDt1PGQubGVuZ3RoOysrdSl7dmFyIGM9ZFt1XTtpZihsPj1jLmxlZnQmJmw8PWMubGVmdCtjLndpZHRoJiZzPj1jLnRvcCYmczw9Yy50b3ArYy5oZWlnaHQpe2lmKFwiY2xpY2tcIj09PW4pe2kub25DbGljay5jYWxsKGUsdCxlLmxlZ2VuZEl0ZW1zW3VdKSxvPSEwO2JyZWFrfWlmKFwibW91c2Vtb3ZlXCI9PT1uKXtpLm9uSG92ZXIuY2FsbChlLHQsZS5sZWdlbmRJdGVtc1t1XSksbz0hMDticmVha319fXJldHVybiBvfX0pLHQucGx1Z2lucy5yZWdpc3Rlcih7YmVmb3JlSW5pdDpmdW5jdGlvbihlKXt2YXIgYT1lLm9wdGlvbnMsaT1hLmxlZ2VuZDtpJiYoZS5sZWdlbmQ9bmV3IHQuTGVnZW5kKHtjdHg6ZS5jaGFydC5jdHgsb3B0aW9uczppLGNoYXJ0OmV9KSx0LmxheW91dFNlcnZpY2UuYWRkQm94KGUsZS5sZWdlbmQpKX19KX19LHt9XSwzMTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMubm9vcDt0LnBsdWdpbnM9e19wbHVnaW5zOltdLHJlZ2lzdGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3BsdWdpbnM7W10uY29uY2F0KHQpLmZvckVhY2goZnVuY3Rpb24odCl7LTE9PT1lLmluZGV4T2YodCkmJmUucHVzaCh0KX0pfSx1bnJlZ2lzdGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3BsdWdpbnM7W10uY29uY2F0KHQpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGE9ZS5pbmRleE9mKHQpOy0xIT09YSYmZS5zcGxpY2UoYSwxKX0pfSxjbGVhcjpmdW5jdGlvbigpe3RoaXMuX3BsdWdpbnM9W119LGNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BsdWdpbnMubGVuZ3RofSxnZXRBbGw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGx1Z2luc30sbm90aWZ5OmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuPXRoaXMuX3BsdWdpbnMsbz1uLmxlbmd0aDtcbmZvcihhPTA7bz5hOysrYSlpZihpPW5bYV0sXCJmdW5jdGlvblwiPT10eXBlb2YgaVt0XSYmaVt0XS5hcHBseShpLGV8fFtdKT09PSExKXJldHVybiExO3JldHVybiEwfX0sdC5QbHVnaW5CYXNlPXQuRWxlbWVudC5leHRlbmQoe2JlZm9yZUluaXQ6ZSxhZnRlckluaXQ6ZSxiZWZvcmVVcGRhdGU6ZSxhZnRlclVwZGF0ZTplLGJlZm9yZURyYXc6ZSxhZnRlckRyYXc6ZSxkZXN0cm95OmV9KSx0LnBsdWdpblNlcnZpY2U9dC5wbHVnaW5zfX0se31dLDMyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnNjYWxlPXtkaXNwbGF5OiEwLHBvc2l0aW9uOlwibGVmdFwiLGdyaWRMaW5lczp7ZGlzcGxheTohMCxjb2xvcjpcInJnYmEoMCwgMCwgMCwgMC4xKVwiLGxpbmVXaWR0aDoxLGRyYXdCb3JkZXI6ITAsZHJhd09uQ2hhcnRBcmVhOiEwLGRyYXdUaWNrczohMCx0aWNrTWFya0xlbmd0aDoxMCx6ZXJvTGluZVdpZHRoOjEsemVyb0xpbmVDb2xvcjpcInJnYmEoMCwwLDAsMC4yNSlcIixvZmZzZXRHcmlkTGluZXM6ITEsYm9yZGVyRGFzaDpbXSxib3JkZXJEYXNoT2Zmc2V0OjB9LHNjYWxlTGFiZWw6e2xhYmVsU3RyaW5nOlwiXCIsZGlzcGxheTohMX0sdGlja3M6e2JlZ2luQXRaZXJvOiExLG1pblJvdGF0aW9uOjAsbWF4Um90YXRpb246NTAsbWlycm9yOiExLHBhZGRpbmc6MTAscmV2ZXJzZTohMSxkaXNwbGF5OiEwLGF1dG9Ta2lwOiEwLGF1dG9Ta2lwUGFkZGluZzowLGxhYmVsT2Zmc2V0OjAsY2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLnZhbHVlc319LHQuU2NhbGU9dC5FbGVtZW50LmV4dGVuZCh7YmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZSxbdGhpc10pfSx1cGRhdGU6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXM7cmV0dXJuIG4uYmVmb3JlVXBkYXRlKCksbi5tYXhXaWR0aD10LG4ubWF4SGVpZ2h0PWEsbi5tYXJnaW5zPWUuZXh0ZW5kKHtsZWZ0OjAscmlnaHQ6MCx0b3A6MCxib3R0b206MH0saSksbi5iZWZvcmVTZXREaW1lbnNpb25zKCksbi5zZXREaW1lbnNpb25zKCksbi5hZnRlclNldERpbWVuc2lvbnMoKSxuLmJlZm9yZURhdGFMaW1pdHMoKSxuLmRldGVybWluZURhdGFMaW1pdHMoKSxuLmFmdGVyRGF0YUxpbWl0cygpLG4uYmVmb3JlQnVpbGRUaWNrcygpLG4uYnVpbGRUaWNrcygpLG4uYWZ0ZXJCdWlsZFRpY2tzKCksbi5iZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb24oKSxuLmNvbnZlcnRUaWNrc1RvTGFiZWxzKCksbi5hZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbigpLG4uYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5jYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5iZWZvcmVGaXQoKSxuLmZpdCgpLG4uYWZ0ZXJGaXQoKSxuLmFmdGVyVXBkYXRlKCksbi5taW5TaXplfSxhZnRlclVwZGF0ZTpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclVwZGF0ZSxbdGhpc10pfSxiZWZvcmVTZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVNldERpbWVuc2lvbnMsW3RoaXNdKX0sc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wfSxhZnRlclNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJTZXREaW1lbnNpb25zLFt0aGlzXSl9LGJlZm9yZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlRGF0YUxpbWl0cyxbdGhpc10pfSxkZXRlcm1pbmVEYXRhTGltaXRzOmUubm9vcCxhZnRlckRhdGFMaW1pdHM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJEYXRhTGltaXRzLFt0aGlzXSl9LGJlZm9yZUJ1aWxkVGlja3M6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlQnVpbGRUaWNrcyxbdGhpc10pfSxidWlsZFRpY2tzOmUubm9vcCxhZnRlckJ1aWxkVGlja3M6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJCdWlsZFRpY2tzLFt0aGlzXSl9LGJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb24sW3RoaXNdKX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5vcHRpb25zLnRpY2tzO3QudGlja3M9dC50aWNrcy5tYXAoZS51c2VyQ2FsbGJhY2t8fGUuY2FsbGJhY2spfSxhZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclRpY2tUb0xhYmVsQ29udmVyc2lvbixbdGhpc10pfSxiZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uLFt0aGlzXSl9LGNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLmN0eCxuPXQuZGVmYXVsdHMuZ2xvYmFsLG89YS5vcHRpb25zLnRpY2tzLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRTaXplLG4uZGVmYXVsdEZvbnRTaXplKSxsPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250U3R5bGUsbi5kZWZhdWx0Rm9udFN0eWxlKSxzPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250RmFtaWx5LG4uZGVmYXVsdEZvbnRGYW1pbHkpLGQ9ZS5mb250U3RyaW5nKHIsbCxzKTtpLmZvbnQ9ZDt2YXIgdSxjPWkubWVhc3VyZVRleHQoYS50aWNrc1swXSkud2lkdGgsaD1pLm1lYXN1cmVUZXh0KGEudGlja3NbYS50aWNrcy5sZW5ndGgtMV0pLndpZHRoO2lmKGEubGFiZWxSb3RhdGlvbj1vLm1pblJvdGF0aW9ufHwwLGEucGFkZGluZ1JpZ2h0PTAsYS5wYWRkaW5nTGVmdD0wLGEub3B0aW9ucy5kaXNwbGF5JiZhLmlzSG9yaXpvbnRhbCgpKXthLnBhZGRpbmdSaWdodD1oLzIrMyxhLnBhZGRpbmdMZWZ0PWMvMiszLGEubG9uZ2VzdFRleHRDYWNoZXx8KGEubG9uZ2VzdFRleHRDYWNoZT17fSk7Zm9yKHZhciBmLGcscD1lLmxvbmdlc3RUZXh0KGksZCxhLnRpY2tzLGEubG9uZ2VzdFRleHRDYWNoZSksbT1wLGI9YS5nZXRQaXhlbEZvclRpY2soMSktYS5nZXRQaXhlbEZvclRpY2soMCktNjttPmImJmEubGFiZWxSb3RhdGlvbjxvLm1heFJvdGF0aW9uOyl7aWYoZj1NYXRoLmNvcyhlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSxnPU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLHU9ZipjLHUrci8yPmEueUxhYmVsV2lkdGgmJihhLnBhZGRpbmdMZWZ0PXUrci8yKSxhLnBhZGRpbmdSaWdodD1yLzIsZypwPmEubWF4SGVpZ2h0KXthLmxhYmVsUm90YXRpb24tLTticmVha31hLmxhYmVsUm90YXRpb24rKyxtPWYqcH19YS5tYXJnaW5zJiYoYS5wYWRkaW5nTGVmdD1NYXRoLm1heChhLnBhZGRpbmdMZWZ0LWEubWFyZ2lucy5sZWZ0LDApLGEucGFkZGluZ1JpZ2h0PU1hdGgubWF4KGEucGFkZGluZ1JpZ2h0LWEubWFyZ2lucy5yaWdodCwwKSl9LGFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyQ2FsY3VsYXRlVGlja1JvdGF0aW9uLFt0aGlzXSl9LGJlZm9yZUZpdDpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVGaXQsW3RoaXNdKX0sZml0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH0sbj1hLm9wdGlvbnMsbz10LmRlZmF1bHRzLmdsb2JhbCxyPW4udGlja3MsbD1uLnNjYWxlTGFiZWwscz1uLmdyaWRMaW5lcyxkPW4uZGlzcGxheSx1PWEuaXNIb3Jpem9udGFsKCksYz1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLGg9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRTdHlsZSxvLmRlZmF1bHRGb250U3R5bGUpLGY9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRGYW1pbHksby5kZWZhdWx0Rm9udEZhbWlseSksZz1lLmZvbnRTdHJpbmcoYyxoLGYpLHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChsLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxtPW4uZ3JpZExpbmVzLnRpY2tNYXJrTGVuZ3RoO2lmKHU/aS53aWR0aD1hLmlzRnVsbFdpZHRoKCk/YS5tYXhXaWR0aC1hLm1hcmdpbnMubGVmdC1hLm1hcmdpbnMucmlnaHQ6YS5tYXhXaWR0aDppLndpZHRoPWQmJnMuZHJhd1RpY2tzP206MCx1P2kuaGVpZ2h0PWQmJnMuZHJhd1RpY2tzP206MDppLmhlaWdodD1hLm1heEhlaWdodCxsLmRpc3BsYXkmJmQmJih1P2kuaGVpZ2h0Kz0xLjUqcDppLndpZHRoKz0xLjUqcCksci5kaXNwbGF5JiZkKXthLmxvbmdlc3RUZXh0Q2FjaGV8fChhLmxvbmdlc3RUZXh0Q2FjaGU9e30pO3ZhciBiPWUubG9uZ2VzdFRleHQoYS5jdHgsZyxhLnRpY2tzLGEubG9uZ2VzdFRleHRDYWNoZSksdj1lLm51bWJlck9mTGFiZWxMaW5lcyhhLnRpY2tzKSx4PS41KmM7aWYodSl7YS5sb25nZXN0TGFiZWxXaWR0aD1iO3ZhciB5PU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpKmEubG9uZ2VzdExhYmVsV2lkdGgrYyp2K3gqdjtpLmhlaWdodD1NYXRoLm1pbihhLm1heEhlaWdodCxpLmhlaWdodCt5KSxhLmN0eC5mb250PWc7dmFyIGs9YS5jdHgubWVhc3VyZVRleHQoYS50aWNrc1swXSkud2lkdGgsUz1hLmN0eC5tZWFzdXJlVGV4dChhLnRpY2tzW2EudGlja3MubGVuZ3RoLTFdKS53aWR0aCx3PU1hdGguY29zKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLE09TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSk7YS5wYWRkaW5nTGVmdD0wIT09YS5sYWJlbFJvdGF0aW9uP3cqayszOmsvMiszLGEucGFkZGluZ1JpZ2h0PTAhPT1hLmxhYmVsUm90YXRpb24/TSooYy8yKSszOlMvMiszfWVsc2V7dmFyIEM9YS5tYXhXaWR0aC1pLndpZHRoLEQ9ci5taXJyb3I7RD9iPTA6Yis9YS5vcHRpb25zLnRpY2tzLnBhZGRpbmcsQz5iP2kud2lkdGgrPWI6aS53aWR0aD1hLm1heFdpZHRoLGEucGFkZGluZ1RvcD1jLzIsYS5wYWRkaW5nQm90dG9tPWMvMn19YS5tYXJnaW5zJiYoYS5wYWRkaW5nTGVmdD1NYXRoLm1heChhLnBhZGRpbmdMZWZ0LWEubWFyZ2lucy5sZWZ0LDApLGEucGFkZGluZ1RvcD1NYXRoLm1heChhLnBhZGRpbmdUb3AtYS5tYXJnaW5zLnRvcCwwKSxhLnBhZGRpbmdSaWdodD1NYXRoLm1heChhLnBhZGRpbmdSaWdodC1hLm1hcmdpbnMucmlnaHQsMCksYS5wYWRkaW5nQm90dG9tPU1hdGgubWF4KGEucGFkZGluZ0JvdHRvbS1hLm1hcmdpbnMuYm90dG9tLDApKSxhLndpZHRoPWkud2lkdGgsYS5oZWlnaHQ9aS5oZWlnaHR9LGFmdGVyRml0OmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyRml0LFt0aGlzXSl9LGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3JldHVyblwidG9wXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb258fFwiYm90dG9tXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb259LGlzRnVsbFdpZHRoOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5mdWxsV2lkdGh9LGdldFJpZ2h0VmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIG51bGw9PT10fHxcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9OYU46XCJudW1iZXJcIiE9dHlwZW9mIHR8fGlzRmluaXRlKHQpP1wib2JqZWN0XCI9PXR5cGVvZiB0P3QgaW5zdGFuY2VvZiBEYXRlfHx0LmlzVmFsaWQ/dDp0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5pc0hvcml6b250YWwoKT90Lng6dC55KTp0Ok5hTn0sZ2V0TGFiZWxGb3JJbmRleDplLm5vb3AsZ2V0UGl4ZWxGb3JWYWx1ZTplLm5vb3AsZ2V0VmFsdWVGb3JQaXhlbDplLm5vb3AsZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztpZihhLmlzSG9yaXpvbnRhbCgpKXt2YXIgaT1hLndpZHRoLShhLnBhZGRpbmdMZWZ0K2EucGFkZGluZ1JpZ2h0KSxuPWkvTWF0aC5tYXgoYS50aWNrcy5sZW5ndGgtKGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSksbz1uKnQrYS5wYWRkaW5nTGVmdDtlJiYobys9bi8yKTt2YXIgcj1hLmxlZnQrTWF0aC5yb3VuZChvKTtyZXR1cm4gcis9YS5pc0Z1bGxXaWR0aCgpP2EubWFyZ2lucy5sZWZ0OjB9dmFyIGw9YS5oZWlnaHQtKGEucGFkZGluZ1RvcCthLnBhZGRpbmdCb3R0b20pO3JldHVybiBhLnRvcCt0KihsLyhhLnRpY2tzLmxlbmd0aC0xKSl9LGdldFBpeGVsRm9yRGVjaW1hbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKGUuaXNIb3Jpem9udGFsKCkpe3ZhciBhPWUud2lkdGgtKGUucGFkZGluZ0xlZnQrZS5wYWRkaW5nUmlnaHQpLGk9YSp0K2UucGFkZGluZ0xlZnQsbj1lLmxlZnQrTWF0aC5yb3VuZChpKTtyZXR1cm4gbis9ZS5pc0Z1bGxXaWR0aCgpP2UubWFyZ2lucy5sZWZ0OjB9cmV0dXJuIGUudG9wK3QqZS5oZWlnaHR9LGdldEJhc2VQaXhlbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm1pbixhPXQubWF4O3JldHVybiB0LmdldFBpeGVsRm9yVmFsdWUodC5iZWdpbkF0WmVybz8wOjA+ZSYmMD5hP2E6ZT4wJiZhPjA/ZTowKX0sZHJhdzpmdW5jdGlvbihhKXt2YXIgaT10aGlzLG49aS5vcHRpb25zO2lmKG4uZGlzcGxheSl7dmFyIG8scixsPWkuY3R4LHM9dC5kZWZhdWx0cy5nbG9iYWwsZD1uLnRpY2tzLHU9bi5ncmlkTGluZXMsYz1uLnNjYWxlTGFiZWwsaD0wIT09aS5sYWJlbFJvdGF0aW9uLGY9ZC5hdXRvU2tpcCxnPWkuaXNIb3Jpem9udGFsKCk7ZC5tYXhUaWNrc0xpbWl0JiYocj1kLm1heFRpY2tzTGltaXQpO3ZhciBwPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250Q29sb3Iscy5kZWZhdWx0Rm9udENvbG9yKSxtPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksYj1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksdj1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSx4PWUuZm9udFN0cmluZyhtLGIsdikseT11LnRpY2tNYXJrTGVuZ3RoLGs9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh1LmJvcmRlckRhc2gscy5ib3JkZXJEYXNoKSxTPWUuZ2V0VmFsdWVPckRlZmF1bHQodS5ib3JkZXJEYXNoT2Zmc2V0LHMuYm9yZGVyRGFzaE9mZnNldCksdz1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udENvbG9yLHMuZGVmYXVsdEZvbnRDb2xvciksTT1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLEM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLEQ9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSksST1lLmZvbnRTdHJpbmcoTSxDLEQpLEE9ZS50b1JhZGlhbnMoaS5sYWJlbFJvdGF0aW9uKSxUPU1hdGguY29zKEEpLFA9aS5sb25nZXN0TGFiZWxXaWR0aCpUO2wuZmlsbFN0eWxlPXA7dmFyIEY9W107aWYoZyl7aWYobz0hMSxoJiYoUC89MiksKFArZC5hdXRvU2tpcFBhZGRpbmcpKmkudGlja3MubGVuZ3RoPmkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpJiYobz0xK01hdGguZmxvb3IoKFArZC5hdXRvU2tpcFBhZGRpbmcpKmkudGlja3MubGVuZ3RoLyhpLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSkpKSxyJiZpLnRpY2tzLmxlbmd0aD5yKWZvcig7IW98fGkudGlja3MubGVuZ3RoLyhvfHwxKT5yOylvfHwobz0xKSxvKz0xO2Z8fChvPSExKX12YXIgXz1cInJpZ2h0XCI9PT1uLnBvc2l0aW9uP2kubGVmdDppLnJpZ2h0LXksUj1cInJpZ2h0XCI9PT1uLnBvc2l0aW9uP2kubGVmdCt5OmkucmlnaHQsVj1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLnRvcDppLmJvdHRvbS15LEw9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS50b3AreTppLmJvdHRvbTtpZihlLmVhY2goaS50aWNrcyxmdW5jdGlvbih0LHIpe2lmKHZvaWQgMCE9PXQmJm51bGwhPT10KXt2YXIgbD1pLnRpY2tzLmxlbmd0aD09PXIrMSxzPW8+MSYmciVvPjB8fHIlbz09PTAmJnIrbz49aS50aWNrcy5sZW5ndGg7aWYoKCFzfHxsKSYmdm9pZCAwIT09dCYmbnVsbCE9PXQpe3ZhciBjLGY7cj09PShcInVuZGVmaW5lZFwiIT10eXBlb2YgaS56ZXJvTGluZUluZGV4P2kuemVyb0xpbmVJbmRleDowKT8oYz11Lnplcm9MaW5lV2lkdGgsZj11Lnplcm9MaW5lQ29sb3IpOihjPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUubGluZVdpZHRoLHIpLGY9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5jb2xvcixyKSk7dmFyIHAsbSxiLHYseCx3LE0sQyxELEksVD1cIm1pZGRsZVwiLFA9XCJtaWRkbGVcIjtpZihnKXtofHwoUD1cInRvcFwiPT09bi5wb3NpdGlvbj9cImJvdHRvbVwiOlwidG9wXCIpLFQ9aD9cInJpZ2h0XCI6XCJjZW50ZXJcIjt2YXIgTz1pLmdldFBpeGVsRm9yVGljayhyKStlLmFsaWFzUGl4ZWwoYyk7RD1pLmdldFBpeGVsRm9yVGljayhyLHUub2Zmc2V0R3JpZExpbmVzKStkLmxhYmVsT2Zmc2V0LEk9aD9pLnRvcCsxMjpcInRvcFwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbS15OmkudG9wK3kscD1iPXg9TT1PLG09Vix2PUwsdz1hLnRvcCxDPWEuYm90dG9tfWVsc2V7XCJsZWZ0XCI9PT1uLnBvc2l0aW9uP2QubWlycm9yPyhEPWkucmlnaHQrZC5wYWRkaW5nLFQ9XCJsZWZ0XCIpOihEPWkucmlnaHQtZC5wYWRkaW5nLFQ9XCJyaWdodFwiKTpkLm1pcnJvcj8oRD1pLmxlZnQtZC5wYWRkaW5nLFQ9XCJyaWdodFwiKTooRD1pLmxlZnQrZC5wYWRkaW5nLFQ9XCJsZWZ0XCIpO3ZhciBCPWkuZ2V0UGl4ZWxGb3JUaWNrKHIpO0IrPWUuYWxpYXNQaXhlbChjKSxJPWkuZ2V0UGl4ZWxGb3JUaWNrKHIsdS5vZmZzZXRHcmlkTGluZXMpLHA9XyxiPVIseD1hLmxlZnQsTT1hLnJpZ2h0LG09dj13PUM9Qn1GLnB1c2goe3R4MTpwLHR5MTptLHR4MjpiLHR5Mjp2LHgxOngseTE6dyx4MjpNLHkyOkMsbGFiZWxYOkQsbGFiZWxZOkksZ2xXaWR0aDpjLGdsQ29sb3I6ZixnbEJvcmRlckRhc2g6ayxnbEJvcmRlckRhc2hPZmZzZXQ6Uyxyb3RhdGlvbjotMSpBLGxhYmVsOnQsdGV4dEJhc2VsaW5lOlAsdGV4dEFsaWduOlR9KX19fSksZS5lYWNoKEYsZnVuY3Rpb24odCl7aWYodS5kaXNwbGF5JiYobC5zYXZlKCksbC5saW5lV2lkdGg9dC5nbFdpZHRoLGwuc3Ryb2tlU3R5bGU9dC5nbENvbG9yLGwuc2V0TGluZURhc2gmJihsLnNldExpbmVEYXNoKHQuZ2xCb3JkZXJEYXNoKSxsLmxpbmVEYXNoT2Zmc2V0PXQuZ2xCb3JkZXJEYXNoT2Zmc2V0KSxsLmJlZ2luUGF0aCgpLHUuZHJhd1RpY2tzJiYobC5tb3ZlVG8odC50eDEsdC50eTEpLGwubGluZVRvKHQudHgyLHQudHkyKSksdS5kcmF3T25DaGFydEFyZWEmJihsLm1vdmVUbyh0LngxLHQueTEpLGwubGluZVRvKHQueDIsdC55MikpLGwuc3Ryb2tlKCksbC5yZXN0b3JlKCkpLGQuZGlzcGxheSl7bC5zYXZlKCksbC50cmFuc2xhdGUodC5sYWJlbFgsdC5sYWJlbFkpLGwucm90YXRlKHQucm90YXRpb24pLGwuZm9udD14LGwudGV4dEJhc2VsaW5lPXQudGV4dEJhc2VsaW5lLGwudGV4dEFsaWduPXQudGV4dEFsaWduO3ZhciBhPXQubGFiZWw7aWYoZS5pc0FycmF5KGEpKWZvcih2YXIgaT0wLG49LShhLmxlbmd0aC0xKSptKi43NTtpPGEubGVuZ3RoOysraSlsLmZpbGxUZXh0KFwiXCIrYVtpXSwwLG4pLG4rPTEuNSptO2Vsc2UgbC5maWxsVGV4dChhLDAsMCk7bC5yZXN0b3JlKCl9fSksYy5kaXNwbGF5KXt2YXIgTyxCLFc9MDtpZihnKU89aS5sZWZ0KyhpLnJpZ2h0LWkubGVmdCkvMixCPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tLU0vMjppLnRvcCtNLzI7ZWxzZXt2YXIgej1cImxlZnRcIj09PW4ucG9zaXRpb247Tz16P2kubGVmdCtNLzI6aS5yaWdodC1NLzIsQj1pLnRvcCsoaS5ib3R0b20taS50b3ApLzIsVz16Py0uNSpNYXRoLlBJOi41Kk1hdGguUEl9bC5zYXZlKCksbC50cmFuc2xhdGUoTyxCKSxsLnJvdGF0ZShXKSxsLnRleHRBbGlnbj1cImNlbnRlclwiLGwudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsbC5maWxsU3R5bGU9dyxsLmZvbnQ9SSxsLmZpbGxUZXh0KGMubGFiZWxTdHJpbmcsMCwwKSxsLnJlc3RvcmUoKX1pZih1LmRyYXdCb3JkZXIpe2wubGluZVdpZHRoPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUubGluZVdpZHRoLDApLGwuc3Ryb2tlU3R5bGU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5jb2xvciwwKTt2YXIgTj1pLmxlZnQsRT1pLnJpZ2h0LEg9aS50b3AsVT1pLmJvdHRvbSxqPWUuYWxpYXNQaXhlbChsLmxpbmVXaWR0aCk7Zz8oSD1VPVwidG9wXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tOmkudG9wLEgrPWosVSs9aik6KE49RT1cImxlZnRcIj09PW4ucG9zaXRpb24/aS5yaWdodDppLmxlZnQsTis9aixFKz1qKSxsLmJlZ2luUGF0aCgpLGwubW92ZVRvKE4sSCksbC5saW5lVG8oRSxVKSxsLnN0cm9rZSgpfX19fSl9fSx7fV0sMzM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3Quc2NhbGVTZXJ2aWNlPXtjb25zdHJ1Y3RvcnM6e30sZGVmYXVsdHM6e30scmVnaXN0ZXJTY2FsZVR5cGU6ZnVuY3Rpb24odCxhLGkpe3RoaXMuY29uc3RydWN0b3JzW3RdPWEsdGhpcy5kZWZhdWx0c1t0XT1lLmNsb25lKGkpfSxnZXRTY2FsZUNvbnN0cnVjdG9yOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9ycy5oYXNPd25Qcm9wZXJ0eSh0KT90aGlzLmNvbnN0cnVjdG9yc1t0XTp2b2lkIDB9LGdldFNjYWxlRGVmYXVsdHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZGVmYXVsdHMuaGFzT3duUHJvcGVydHkoYSk/ZS5zY2FsZU1lcmdlKHQuZGVmYXVsdHMuc2NhbGUsdGhpcy5kZWZhdWx0c1thXSk6e319LHVwZGF0ZVNjYWxlRGVmYXVsdHM6ZnVuY3Rpb24odCxhKXt2YXIgaT10aGlzLmRlZmF1bHRzO2kuaGFzT3duUHJvcGVydHkodCkmJihpW3RdPWUuZXh0ZW5kKGlbdF0sYSkpfSxhZGRTY2FsZXNUb0xheW91dDpmdW5jdGlvbihhKXtlLmVhY2goYS5zY2FsZXMsZnVuY3Rpb24oZSl7dC5sYXlvdXRTZXJ2aWNlLmFkZEJveChhLGUpfSl9fX19LHt9XSwzNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5UaWNrcz17Z2VuZXJhdG9yczp7bGluZWFyOmZ1bmN0aW9uKHQsYSl7dmFyIGksbj1bXTtpZih0LnN0ZXBTaXplJiZ0LnN0ZXBTaXplPjApaT10LnN0ZXBTaXplO2Vsc2V7dmFyIG89ZS5uaWNlTnVtKGEubWF4LWEubWluLCExKTtpPWUubmljZU51bShvLyh0Lm1heFRpY2tzLTEpLCEwKX12YXIgcj1NYXRoLmZsb29yKGEubWluL2kpKmksbD1NYXRoLmNlaWwoYS5tYXgvaSkqaTtpZih0Lm1pbiYmdC5tYXgmJnQuc3RlcFNpemUpe3ZhciBzPSh0Lm1heC10Lm1pbikldC5zdGVwU2l6ZT09PTA7cyYmKHI9dC5taW4sbD10Lm1heCl9dmFyIGQ9KGwtcikvaTtkPWUuYWxtb3N0RXF1YWxzKGQsTWF0aC5yb3VuZChkKSxpLzFlMyk/TWF0aC5yb3VuZChkKTpNYXRoLmNlaWwoZCksbi5wdXNoKHZvaWQgMCE9PXQubWluP3QubWluOnIpO2Zvcih2YXIgdT0xO2Q+dTsrK3Upbi5wdXNoKHIrdSppKTtyZXR1cm4gbi5wdXNoKHZvaWQgMCE9PXQubWF4P3QubWF4OmwpLG59LGxvZ2FyaXRobWljOmZ1bmN0aW9uKHQsYSl7Zm9yKHZhciBpPVtdLG49ZS5nZXRWYWx1ZU9yRGVmYXVsdCxvPW4odC5taW4sTWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWluKSkpKTtvPGEubWF4Oyl7aS5wdXNoKG8pO3ZhciByLGw7MD09PW8/KHI9TWF0aC5mbG9vcihlLmxvZzEwKGEubWluTm90WmVybykpLGw9TWF0aC5yb3VuZChhLm1pbk5vdFplcm8vTWF0aC5wb3coMTAscikpKToocj1NYXRoLmZsb29yKGUubG9nMTAobykpLGw9TWF0aC5mbG9vcihvL01hdGgucG93KDEwLHIpKSsxKSwxMD09PWwmJihsPTEsKytyKSxvPWwqTWF0aC5wb3coMTAscil9dmFyIHM9bih0Lm1heCxvKTtyZXR1cm4gaS5wdXNoKHMpLGl9fSxmb3JtYXR0ZXJzOnt2YWx1ZXM6ZnVuY3Rpb24odCl7cmV0dXJuIGUuaXNBcnJheSh0KT90OlwiXCIrdH0sbGluZWFyOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1pLmxlbmd0aD4zP2lbMl0taVsxXTppWzFdLWlbMF07TWF0aC5hYnMobik+MSYmdCE9PU1hdGguZmxvb3IodCkmJihuPXQtTWF0aC5mbG9vcih0KSk7dmFyIG89ZS5sb2cxMChNYXRoLmFicyhuKSkscj1cIlwiO2lmKDAhPT10KXt2YXIgbD0tMSpNYXRoLmZsb29yKG8pO2w9TWF0aC5tYXgoTWF0aC5taW4obCwyMCksMCkscj10LnRvRml4ZWQobCl9ZWxzZSByPVwiMFwiO3JldHVybiByfSxsb2dhcml0aG1pYzpmdW5jdGlvbih0LGEsaSl7dmFyIG49dC9NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAodCkpKTtyZXR1cm4gMD09PXQ/XCIwXCI6MT09PW58fDI9PT1ufHw1PT09bnx8MD09PWF8fGE9PT1pLmxlbmd0aC0xP3QudG9FeHBvbmVudGlhbCgpOlwiXCJ9fX19fSx7fV0sMzU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlPXtkaXNwbGF5OiExLHBvc2l0aW9uOlwidG9wXCIsZnVsbFdpZHRoOiEwLGZvbnRTdHlsZTpcImJvbGRcIixwYWRkaW5nOjEwLHRleHQ6XCJcIn07dmFyIGE9ZS5ub29wO3QuVGl0bGU9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbihhKXt2YXIgaT10aGlzO2UuZXh0ZW5kKGksYSksaS5vcHRpb25zPWUuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwudGl0bGUsYS5vcHRpb25zKSxpLmxlZ2VuZEhpdEJveGVzPVtdfSxiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNoYXJ0Lm9wdGlvbnM7YSYmYS50aXRsZSYmKHRoaXMub3B0aW9ucz1lLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlLGEudGl0bGUpKX0sdXBkYXRlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzO3JldHVybiBpLmJlZm9yZVVwZGF0ZSgpLGkubWF4V2lkdGg9dCxpLm1heEhlaWdodD1lLGkubWFyZ2lucz1hLGkuYmVmb3JlU2V0RGltZW5zaW9ucygpLGkuc2V0RGltZW5zaW9ucygpLGkuYWZ0ZXJTZXREaW1lbnNpb25zKCksaS5iZWZvcmVCdWlsZExhYmVscygpLGkuYnVpbGRMYWJlbHMoKSxpLmFmdGVyQnVpbGRMYWJlbHMoKSxpLmJlZm9yZUZpdCgpLGkuZml0KCksaS5hZnRlckZpdCgpLGkuYWZ0ZXJVcGRhdGUoKSxpLm1pblNpemV9LGFmdGVyVXBkYXRlOmEsYmVmb3JlU2V0RGltZW5zaW9uczphLHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MCx0Lm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9fSxhZnRlclNldERpbWVuc2lvbnM6YSxiZWZvcmVCdWlsZExhYmVsczphLGJ1aWxkTGFiZWxzOmEsYWZ0ZXJCdWlsZExhYmVsczphLGJlZm9yZUZpdDphLGZpdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1lLmdldFZhbHVlT3JEZWZhdWx0LG49YS5vcHRpb25zLG89dC5kZWZhdWx0cy5nbG9iYWwscj1uLmRpc3BsYXksbD1pKG4uZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLHM9YS5taW5TaXplO2EuaXNIb3Jpem9udGFsKCk/KHMud2lkdGg9YS5tYXhXaWR0aCxzLmhlaWdodD1yP2wrMipuLnBhZGRpbmc6MCk6KHMud2lkdGg9cj9sKzIqbi5wYWRkaW5nOjAscy5oZWlnaHQ9YS5tYXhIZWlnaHQpLGEud2lkdGg9cy53aWR0aCxhLmhlaWdodD1zLmhlaWdodH0sYWZ0ZXJGaXQ6YSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMucG9zaXRpb247cmV0dXJuXCJ0b3BcIj09PXR8fFwiYm90dG9tXCI9PT10fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEuY3R4LG49ZS5nZXRWYWx1ZU9yRGVmYXVsdCxvPWEub3B0aW9ucyxyPXQuZGVmYXVsdHMuZ2xvYmFsO2lmKG8uZGlzcGxheSl7dmFyIGwscyxkLHU9bihvLmZvbnRTaXplLHIuZGVmYXVsdEZvbnRTaXplKSxjPW4oby5mb250U3R5bGUsci5kZWZhdWx0Rm9udFN0eWxlKSxoPW4oby5mb250RmFtaWx5LHIuZGVmYXVsdEZvbnRGYW1pbHkpLGY9ZS5mb250U3RyaW5nKHUsYyxoKSxnPTAscD1hLnRvcCxtPWEubGVmdCxiPWEuYm90dG9tLHY9YS5yaWdodDtpLmZpbGxTdHlsZT1uKG8uZm9udENvbG9yLHIuZGVmYXVsdEZvbnRDb2xvciksaS5mb250PWYsYS5pc0hvcml6b250YWwoKT8obD1tKyh2LW0pLzIscz1wKyhiLXApLzIsZD12LW0pOihsPVwibGVmdFwiPT09by5wb3NpdGlvbj9tK3UvMjp2LXUvMixzPXArKGItcCkvMixkPWItcCxnPU1hdGguUEkqKFwibGVmdFwiPT09by5wb3NpdGlvbj8tLjU6LjUpKSxpLnNhdmUoKSxpLnRyYW5zbGF0ZShsLHMpLGkucm90YXRlKGcpLGkudGV4dEFsaWduPVwiY2VudGVyXCIsaS50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixpLmZpbGxUZXh0KG8udGV4dCwwLDAsZCksaS5yZXN0b3JlKCl9fX0pLHQucGx1Z2lucy5yZWdpc3Rlcih7YmVmb3JlSW5pdDpmdW5jdGlvbihlKXt2YXIgYT1lLm9wdGlvbnMsaT1hLnRpdGxlO2kmJihlLnRpdGxlQmxvY2s9bmV3IHQuVGl0bGUoe2N0eDplLmNoYXJ0LmN0eCxvcHRpb25zOmksY2hhcnQ6ZX0pLHQubGF5b3V0U2VydmljZS5hZGRCb3goZSxlLnRpdGxlQmxvY2spKX19KX19LHt9XSwzNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGE9cy5jb2xvcih0KTtyZXR1cm4gYS5hbHBoYShlKmEuYWxwaGEoKSkucmdiYVN0cmluZygpfWZ1bmN0aW9uIGEodCxlKXtyZXR1cm4gZSYmKHMuaXNBcnJheShlKT9BcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0LGUpOnQucHVzaChlKSksdH1mdW5jdGlvbiBpKHQpe3ZhciBlPXQuX3hTY2FsZSxhPXQuX3lTY2FsZXx8dC5fc2NhbGUsaT10Ll9pbmRleCxuPXQuX2RhdGFzZXRJbmRleDtyZXR1cm57eExhYmVsOmU/ZS5nZXRMYWJlbEZvckluZGV4KGksbik6XCJcIix5TGFiZWw6YT9hLmdldExhYmVsRm9ySW5kZXgoaSxuKTpcIlwiLGluZGV4OmksZGF0YXNldEluZGV4Om4seDp0Ll9tb2RlbC54LHk6dC5fbW9kZWwueX19ZnVuY3Rpb24gbihlKXt2YXIgYT10LmRlZmF1bHRzLmdsb2JhbCxpPXMuZ2V0VmFsdWVPckRlZmF1bHQ7cmV0dXJue3hQYWRkaW5nOmUueFBhZGRpbmcseVBhZGRpbmc6ZS55UGFkZGluZyx4QWxpZ246ZS54QWxpZ24seUFsaWduOmUueUFsaWduLGJvZHlGb250Q29sb3I6ZS5ib2R5Rm9udENvbG9yLF9ib2R5Rm9udEZhbWlseTppKGUuYm9keUZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX2JvZHlGb250U3R5bGU6aShlLmJvZHlGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxfYm9keUFsaWduOmUuYm9keUFsaWduLGJvZHlGb250U2l6ZTppKGUuYm9keUZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxib2R5U3BhY2luZzplLmJvZHlTcGFjaW5nLHRpdGxlRm9udENvbG9yOmUudGl0bGVGb250Q29sb3IsX3RpdGxlRm9udEZhbWlseTppKGUudGl0bGVGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF90aXRsZUZvbnRTdHlsZTppKGUudGl0bGVGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSx0aXRsZUZvbnRTaXplOmkoZS50aXRsZUZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxfdGl0bGVBbGlnbjplLnRpdGxlQWxpZ24sdGl0bGVTcGFjaW5nOmUudGl0bGVTcGFjaW5nLHRpdGxlTWFyZ2luQm90dG9tOmUudGl0bGVNYXJnaW5Cb3R0b20sZm9vdGVyRm9udENvbG9yOmUuZm9vdGVyRm9udENvbG9yLF9mb290ZXJGb250RmFtaWx5OmkoZS5mb290ZXJGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF9mb290ZXJGb250U3R5bGU6aShlLmZvb3RlckZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGZvb3RlckZvbnRTaXplOmkoZS5mb290ZXJGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksX2Zvb3RlckFsaWduOmUuZm9vdGVyQWxpZ24sZm9vdGVyU3BhY2luZzplLmZvb3RlclNwYWNpbmcsZm9vdGVyTWFyZ2luVG9wOmUuZm9vdGVyTWFyZ2luVG9wLGNhcmV0U2l6ZTplLmNhcmV0U2l6ZSxjb3JuZXJSYWRpdXM6ZS5jb3JuZXJSYWRpdXMsYmFja2dyb3VuZENvbG9yOmUuYmFja2dyb3VuZENvbG9yLG9wYWNpdHk6MCxsZWdlbmRDb2xvckJhY2tncm91bmQ6ZS5tdWx0aUtleUJhY2tncm91bmQsZGlzcGxheUNvbG9yczplLmRpc3BsYXlDb2xvcnN9fWZ1bmN0aW9uIG8odCxlKXt2YXIgYT10Ll9jaGFydC5jdHgsaT0yKmUueVBhZGRpbmcsbj0wLG89ZS5ib2R5LHI9by5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdCtlLmJlZm9yZS5sZW5ndGgrZS5saW5lcy5sZW5ndGgrZS5hZnRlci5sZW5ndGh9LDApO3IrPWUuYmVmb3JlQm9keS5sZW5ndGgrZS5hZnRlckJvZHkubGVuZ3RoO3ZhciBsPWUudGl0bGUubGVuZ3RoLGQ9ZS5mb290ZXIubGVuZ3RoLHU9ZS50aXRsZUZvbnRTaXplLGM9ZS5ib2R5Rm9udFNpemUsaD1lLmZvb3RlckZvbnRTaXplO2krPWwqdSxpKz1sPyhsLTEpKmUudGl0bGVTcGFjaW5nOjAsaSs9bD9lLnRpdGxlTWFyZ2luQm90dG9tOjAsaSs9cipjLGkrPXI/KHItMSkqZS5ib2R5U3BhY2luZzowLGkrPWQ/ZS5mb290ZXJNYXJnaW5Ub3A6MCxpKz1kKmgsaSs9ZD8oZC0xKSplLmZvb3RlclNwYWNpbmc6MDt2YXIgZj0wLGc9ZnVuY3Rpb24odCl7bj1NYXRoLm1heChuLGEubWVhc3VyZVRleHQodCkud2lkdGgrZil9O3JldHVybiBhLmZvbnQ9cy5mb250U3RyaW5nKHUsZS5fdGl0bGVGb250U3R5bGUsZS5fdGl0bGVGb250RmFtaWx5KSxzLmVhY2goZS50aXRsZSxnKSxhLmZvbnQ9cy5mb250U3RyaW5nKGMsZS5fYm9keUZvbnRTdHlsZSxlLl9ib2R5Rm9udEZhbWlseSkscy5lYWNoKGUuYmVmb3JlQm9keS5jb25jYXQoZS5hZnRlckJvZHkpLGcpLGY9ZS5kaXNwbGF5Q29sb3JzP2MrMjowLHMuZWFjaChvLGZ1bmN0aW9uKHQpe3MuZWFjaCh0LmJlZm9yZSxnKSxzLmVhY2godC5saW5lcyxnKSxzLmVhY2godC5hZnRlcixnKX0pLGY9MCxhLmZvbnQ9cy5mb250U3RyaW5nKGgsZS5fZm9vdGVyRm9udFN0eWxlLGUuX2Zvb3RlckZvbnRGYW1pbHkpLHMuZWFjaChlLmZvb3RlcixnKSxuKz0yKmUueFBhZGRpbmcse3dpZHRoOm4saGVpZ2h0Oml9fWZ1bmN0aW9uIHIodCxlKXt2YXIgYT10Ll9tb2RlbCxpPXQuX2NoYXJ0LG49dC5fY2hhcnRJbnN0YW5jZS5jaGFydEFyZWEsbz1cImNlbnRlclwiLHI9XCJjZW50ZXJcIjthLnk8ZS5oZWlnaHQ/cj1cInRvcFwiOmEueT5pLmhlaWdodC1lLmhlaWdodCYmKHI9XCJib3R0b21cIik7dmFyIGwscyxkLHUsYyxoPShuLmxlZnQrbi5yaWdodCkvMixmPShuLnRvcCtuLmJvdHRvbSkvMjtcImNlbnRlclwiPT09cj8obD1mdW5jdGlvbih0KXtyZXR1cm4gaD49dH0scz1mdW5jdGlvbih0KXtyZXR1cm4gdD5ofSk6KGw9ZnVuY3Rpb24odCl7cmV0dXJuIHQ8PWUud2lkdGgvMn0scz1mdW5jdGlvbih0KXtyZXR1cm4gdD49aS53aWR0aC1lLndpZHRoLzJ9KSxkPWZ1bmN0aW9uKHQpe3JldHVybiB0K2Uud2lkdGg+aS53aWR0aH0sdT1mdW5jdGlvbih0KXtyZXR1cm4gdC1lLndpZHRoPDB9LGM9ZnVuY3Rpb24odCl7cmV0dXJuIGY+PXQ/XCJ0b3BcIjpcImJvdHRvbVwifSxsKGEueCk/KG89XCJsZWZ0XCIsZChhLngpJiYobz1cImNlbnRlclwiLHI9YyhhLnkpKSk6cyhhLngpJiYobz1cInJpZ2h0XCIsdShhLngpJiYobz1cImNlbnRlclwiLHI9YyhhLnkpKSk7dmFyIGc9dC5fb3B0aW9ucztyZXR1cm57eEFsaWduOmcueEFsaWduP2cueEFsaWduOm8seUFsaWduOmcueUFsaWduP2cueUFsaWduOnJ9fWZ1bmN0aW9uIGwodCxlLGEpe3ZhciBpPXQueCxuPXQueSxvPXQuY2FyZXRTaXplLHI9dC5jYXJldFBhZGRpbmcsbD10LmNvcm5lclJhZGl1cyxzPWEueEFsaWduLGQ9YS55QWxpZ24sdT1vK3IsYz1sK3I7cmV0dXJuXCJyaWdodFwiPT09cz9pLT1lLndpZHRoOlwiY2VudGVyXCI9PT1zJiYoaS09ZS53aWR0aC8yKSxcInRvcFwiPT09ZD9uKz11Om4tPVwiYm90dG9tXCI9PT1kP2UuaGVpZ2h0K3U6ZS5oZWlnaHQvMixcImNlbnRlclwiPT09ZD9cImxlZnRcIj09PXM/aSs9dTpcInJpZ2h0XCI9PT1zJiYoaS09dSk6XCJsZWZ0XCI9PT1zP2ktPWM6XCJyaWdodFwiPT09cyYmKGkrPWMpLHt4OmkseTpufX12YXIgcz10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwudG9vbHRpcHM9e2VuYWJsZWQ6ITAsY3VzdG9tOm51bGwsbW9kZTpcIm5lYXJlc3RcIixwb3NpdGlvbjpcImF2ZXJhZ2VcIixpbnRlcnNlY3Q6ITAsYmFja2dyb3VuZENvbG9yOlwicmdiYSgwLDAsMCwwLjgpXCIsdGl0bGVGb250U3R5bGU6XCJib2xkXCIsdGl0bGVTcGFjaW5nOjIsdGl0bGVNYXJnaW5Cb3R0b206Nix0aXRsZUZvbnRDb2xvcjpcIiNmZmZcIix0aXRsZUFsaWduOlwibGVmdFwiLGJvZHlTcGFjaW5nOjIsYm9keUZvbnRDb2xvcjpcIiNmZmZcIixib2R5QWxpZ246XCJsZWZ0XCIsZm9vdGVyRm9udFN0eWxlOlwiYm9sZFwiLGZvb3RlclNwYWNpbmc6Mixmb290ZXJNYXJnaW5Ub3A6Nixmb290ZXJGb250Q29sb3I6XCIjZmZmXCIsZm9vdGVyQWxpZ246XCJsZWZ0XCIseVBhZGRpbmc6Nix4UGFkZGluZzo2LGNhcmV0U2l6ZTo1LGNvcm5lclJhZGl1czo2LG11bHRpS2V5QmFja2dyb3VuZDpcIiNmZmZcIixkaXNwbGF5Q29sb3JzOiEwLGNhbGxiYWNrczp7YmVmb3JlVGl0bGU6cy5ub29wLHRpdGxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9XCJcIixpPWUubGFiZWxzLG49aT9pLmxlbmd0aDowO2lmKHQubGVuZ3RoPjApe3ZhciBvPXRbMF07by54TGFiZWw/YT1vLnhMYWJlbDpuPjAmJm8uaW5kZXg8biYmKGE9aVtvLmluZGV4XSl9cmV0dXJuIGF9LGFmdGVyVGl0bGU6cy5ub29wLGJlZm9yZUJvZHk6cy5ub29wLGJlZm9yZUxhYmVsOnMubm9vcCxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiO3JldHVybiBhK1wiOiBcIit0LnlMYWJlbH0sbGFiZWxDb2xvcjpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZ2V0RGF0YXNldE1ldGEodC5kYXRhc2V0SW5kZXgpLGk9YS5kYXRhW3QuaW5kZXhdLG49aS5fdmlldztyZXR1cm57Ym9yZGVyQ29sb3I6bi5ib3JkZXJDb2xvcixiYWNrZ3JvdW5kQ29sb3I6bi5iYWNrZ3JvdW5kQ29sb3J9fSxhZnRlckxhYmVsOnMubm9vcCxhZnRlckJvZHk6cy5ub29wLGJlZm9yZUZvb3RlcjpzLm5vb3AsZm9vdGVyOnMubm9vcCxhZnRlckZvb3RlcjpzLm5vb3B9fSx0LlRvb2x0aXA9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3RoaXMuX21vZGVsPW4odGhpcy5fb3B0aW9ucyl9LGdldFRpdGxlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX29wdGlvbnMsaT1lLmNhbGxiYWNrcyxuPWkuYmVmb3JlVGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLG89aS50aXRsZS5hcHBseSh0LGFyZ3VtZW50cykscj1pLmFmdGVyVGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLGw9W107cmV0dXJuIGw9YShsLG4pLGw9YShsLG8pLGw9YShsLHIpfSxnZXRCZWZvcmVCb2R5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fb3B0aW9ucy5jYWxsYmFja3MuYmVmb3JlQm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHMuaXNBcnJheSh0KT90OnZvaWQgMCE9PXQ/W3RdOltdfSxnZXRCb2R5OmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcyxuPWkuX29wdGlvbnMuY2FsbGJhY2tzLG89W107cmV0dXJuIHMuZWFjaCh0LGZ1bmN0aW9uKHQpe3ZhciByPXtiZWZvcmU6W10sbGluZXM6W10sYWZ0ZXI6W119O2Eoci5iZWZvcmUsbi5iZWZvcmVMYWJlbC5jYWxsKGksdCxlKSksYShyLmxpbmVzLG4ubGFiZWwuY2FsbChpLHQsZSkpLGEoci5hZnRlcixuLmFmdGVyTGFiZWwuY2FsbChpLHQsZSkpLG8ucHVzaChyKX0pLG99LGdldEFmdGVyQm9keTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX29wdGlvbnMuY2FsbGJhY2tzLmFmdGVyQm9keS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHMuaXNBcnJheSh0KT90OnZvaWQgMCE9PXQ/W3RdOltdfSxnZXRGb290ZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5fb3B0aW9ucy5jYWxsYmFja3MsaT1lLmJlZm9yZUZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cyksbj1lLmZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cyksbz1lLmFmdGVyRm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxyPVtdO3JldHVybiByPWEocixpKSxyPWEocixuKSxyPWEocixvKX0sdXBkYXRlOmZ1bmN0aW9uKGUpe3ZhciBhLGQsdT10aGlzLGM9dS5fb3B0aW9ucyxoPXUuX21vZGVsLGY9dS5fbW9kZWw9bihjKSxnPXUuX2FjdGl2ZSxwPXUuX2RhdGEsbT11Ll9jaGFydEluc3RhbmNlLGI9e3hBbGlnbjpoLnhBbGlnbix5QWxpZ246aC55QWxpZ259LHY9e3g6aC54LHk6aC55fSx4PXt3aWR0aDpoLndpZHRoLGhlaWdodDpoLmhlaWdodH0seT17eDpoLmNhcmV0WCx5OmguY2FyZXRZfTtpZihnLmxlbmd0aCl7Zi5vcGFjaXR5PTE7dmFyIGs9W107eT10LlRvb2x0aXAucG9zaXRpb25lcnNbYy5wb3NpdGlvbl0oZyx1Ll9ldmVudFBvc2l0aW9uKTt2YXIgUz1bXTtmb3IoYT0wLGQ9Zy5sZW5ndGg7ZD5hOysrYSlTLnB1c2goaShnW2FdKSk7Yy5maWx0ZXImJihTPVMuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiBjLmZpbHRlcih0LHApfSkpLGMuaXRlbVNvcnQmJihTPVMuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiBjLml0ZW1Tb3J0KHQsZSxwKX0pKSxzLmVhY2goUyxmdW5jdGlvbih0KXtrLnB1c2goYy5jYWxsYmFja3MubGFiZWxDb2xvci5jYWxsKHUsdCxtKSl9KSxmLnRpdGxlPXUuZ2V0VGl0bGUoUyxwKSxmLmJlZm9yZUJvZHk9dS5nZXRCZWZvcmVCb2R5KFMscCksZi5ib2R5PXUuZ2V0Qm9keShTLHApLGYuYWZ0ZXJCb2R5PXUuZ2V0QWZ0ZXJCb2R5KFMscCksZi5mb290ZXI9dS5nZXRGb290ZXIoUyxwKSxmLng9TWF0aC5yb3VuZCh5LngpLGYueT1NYXRoLnJvdW5kKHkueSksZi5jYXJldFBhZGRpbmc9cy5nZXRWYWx1ZU9yRGVmYXVsdCh5LnBhZGRpbmcsMiksZi5sYWJlbENvbG9ycz1rLGYuZGF0YVBvaW50cz1TLHg9byh0aGlzLGYpLGI9cih0aGlzLHgpLHY9bChmLHgsYil9ZWxzZSBmLm9wYWNpdHk9MDtyZXR1cm4gZi54QWxpZ249Yi54QWxpZ24sZi55QWxpZ249Yi55QWxpZ24sZi54PXYueCxmLnk9di55LGYud2lkdGg9eC53aWR0aCxmLmhlaWdodD14LmhlaWdodCxmLmNhcmV0WD15LngsZi5jYXJldFk9eS55LHUuX21vZGVsPWYsZSYmYy5jdXN0b20mJmMuY3VzdG9tLmNhbGwodSxmKSx1fSxkcmF3Q2FyZXQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuLG8scixsLHMsZCx1PXRoaXMuX3ZpZXcsYz10aGlzLl9jaGFydC5jdHgsaD11LmNhcmV0U2l6ZSxmPXUuY29ybmVyUmFkaXVzLGc9dS54QWxpZ24scD11LnlBbGlnbixtPXQueCxiPXQueSx2PWEud2lkdGgseD1hLmhlaWdodDtcImNlbnRlclwiPT09cD8oXCJsZWZ0XCI9PT1nPyhuPW0sbz1uLWgscj1uKToobj1tK3Ysbz1uK2gscj1uKSxzPWIreC8yLGw9cy1oLGQ9cytoKTooXCJsZWZ0XCI9PT1nPyhuPW0rZixvPW4raCxyPW8raCk6XCJyaWdodFwiPT09Zz8obj1tK3YtZixvPW4taCxyPW8taCk6KG89bSt2LzIsbj1vLWgscj1vK2gpLFwidG9wXCI9PT1wPyhsPWIscz1sLWgsZD1sKToobD1iK3gscz1sK2gsZD1sKSksYy5maWxsU3R5bGU9ZSh1LmJhY2tncm91bmRDb2xvcixpKSxjLmJlZ2luUGF0aCgpLGMubW92ZVRvKG4sbCksYy5saW5lVG8obyxzKSxjLmxpbmVUbyhyLGQpLGMuY2xvc2VQYXRoKCksYy5maWxsKCl9LGRyYXdUaXRsZTpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLnRpdGxlO2lmKG8ubGVuZ3RoKXtpLnRleHRBbGlnbj1hLl90aXRsZUFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCI7dmFyIHI9YS50aXRsZUZvbnRTaXplLGw9YS50aXRsZVNwYWNpbmc7aS5maWxsU3R5bGU9ZShhLnRpdGxlRm9udENvbG9yLG4pLGkuZm9udD1zLmZvbnRTdHJpbmcocixhLl90aXRsZUZvbnRTdHlsZSxhLl90aXRsZUZvbnRGYW1pbHkpO3ZhciBkLHU7Zm9yKGQ9MCx1PW8ubGVuZ3RoO3U+ZDsrK2QpaS5maWxsVGV4dChvW2RdLHQueCx0LnkpLHQueSs9citsLGQrMT09PW8ubGVuZ3RoJiYodC55Kz1hLnRpdGxlTWFyZ2luQm90dG9tLWwpfX0sZHJhd0JvZHk6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS5ib2R5Rm9udFNpemUscj1hLmJvZHlTcGFjaW5nLGw9YS5ib2R5O2kudGV4dEFsaWduPWEuX2JvZHlBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiO3ZhciBkPWUoYS5ib2R5Rm9udENvbG9yLG4pO2kuZmlsbFN0eWxlPWQsaS5mb250PXMuZm9udFN0cmluZyhvLGEuX2JvZHlGb250U3R5bGUsYS5fYm9keUZvbnRGYW1pbHkpO3ZhciB1PTAsYz1mdW5jdGlvbihlKXtpLmZpbGxUZXh0KGUsdC54K3UsdC55KSx0LnkrPW8rcn07cy5lYWNoKGEuYmVmb3JlQm9keSxjKTt2YXIgaD1hLmRpc3BsYXlDb2xvcnM7dT1oP28rMjowLHMuZWFjaChsLGZ1bmN0aW9uKHIsbCl7cy5lYWNoKHIuYmVmb3JlLGMpLHMuZWFjaChyLmxpbmVzLGZ1bmN0aW9uKHIpe2gmJihpLmZpbGxTdHlsZT1lKGEubGVnZW5kQ29sb3JCYWNrZ3JvdW5kLG4pLGkuZmlsbFJlY3QodC54LHQueSxvLG8pLGkuc3Ryb2tlU3R5bGU9ZShhLmxhYmVsQ29sb3JzW2xdLmJvcmRlckNvbG9yLG4pLGkuc3Ryb2tlUmVjdCh0LngsdC55LG8sbyksaS5maWxsU3R5bGU9ZShhLmxhYmVsQ29sb3JzW2xdLmJhY2tncm91bmRDb2xvcixuKSxpLmZpbGxSZWN0KHQueCsxLHQueSsxLG8tMixvLTIpLGkuZmlsbFN0eWxlPWQpLGMocil9KSxzLmVhY2goci5hZnRlcixjKX0pLHU9MCxzLmVhY2goYS5hZnRlckJvZHksYyksdC55LT1yfSxkcmF3Rm9vdGVyOmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEuZm9vdGVyO28ubGVuZ3RoJiYodC55Kz1hLmZvb3Rlck1hcmdpblRvcCxpLnRleHRBbGlnbj1hLl9mb290ZXJBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiLGkuZmlsbFN0eWxlPWUoYS5mb290ZXJGb250Q29sb3IsbiksaS5mb250PXMuZm9udFN0cmluZyhhLmZvb3RlckZvbnRTaXplLGEuX2Zvb3RlckZvbnRTdHlsZSxhLl9mb290ZXJGb250RmFtaWx5KSxzLmVhY2gobyxmdW5jdGlvbihlKXtpLmZpbGxUZXh0KGUsdC54LHQueSksdC55Kz1hLmZvb3RlckZvbnRTaXplK2EuZm9vdGVyU3BhY2luZ30pKX0sZHJhd0JhY2tncm91bmQ6ZnVuY3Rpb24odCxhLGksbixvKXtpLmZpbGxTdHlsZT1lKGEuYmFja2dyb3VuZENvbG9yLG8pLHMuZHJhd1JvdW5kZWRSZWN0YW5nbGUoaSx0LngsdC55LG4ud2lkdGgsbi5oZWlnaHQsYS5jb3JuZXJSYWRpdXMpLGkuZmlsbCgpfSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY2hhcnQuY3R4LGU9dGhpcy5fdmlldztpZigwIT09ZS5vcGFjaXR5KXt2YXIgYT17d2lkdGg6ZS53aWR0aCxoZWlnaHQ6ZS5oZWlnaHR9LGk9e3g6ZS54LHk6ZS55fSxuPU1hdGguYWJzKGUub3BhY2l0eTwuMDAxKT8wOmUub3BhY2l0eTt0aGlzLl9vcHRpb25zLmVuYWJsZWQmJih0aGlzLmRyYXdCYWNrZ3JvdW5kKGksZSx0LGEsbiksdGhpcy5kcmF3Q2FyZXQoaSxhLG4pLGkueCs9ZS54UGFkZGluZyxpLnkrPWUueVBhZGRpbmcsdGhpcy5kcmF3VGl0bGUoaSxlLHQsbiksdGhpcy5kcmF3Qm9keShpLGUsdCxuKSx0aGlzLmRyYXdGb290ZXIoaSxlLHQsbikpfX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuX29wdGlvbnMsaT0hMTtpZihlLl9sYXN0QWN0aXZlPWUuX2xhc3RBY3RpdmV8fFtdLFwibW91c2VvdXRcIj09PXQudHlwZT9lLl9hY3RpdmU9W106ZS5fYWN0aXZlPWUuX2NoYXJ0SW5zdGFuY2UuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSh0LGEubW9kZSxhKSxpPSFzLmFycmF5RXF1YWxzKGUuX2FjdGl2ZSxlLl9sYXN0QWN0aXZlKSxlLl9sYXN0QWN0aXZlPWUuX2FjdGl2ZSxhLmVuYWJsZWR8fGEuY3VzdG9tKXtlLl9ldmVudFBvc2l0aW9uPXMuZ2V0UmVsYXRpdmVQb3NpdGlvbih0LGUuX2NoYXJ0KTt2YXIgbj1lLl9tb2RlbDtlLnVwZGF0ZSghMCksZS5waXZvdCgpLGl8PW4ueCE9PWUuX21vZGVsLnh8fG4ueSE9PWUuX21vZGVsLnl9cmV0dXJuIGl9fSksdC5Ub29sdGlwLnBvc2l0aW9uZXJzPXthdmVyYWdlOmZ1bmN0aW9uKHQpe2lmKCF0Lmxlbmd0aClyZXR1cm4hMTt2YXIgZSxhLGk9MCxuPTAsbz0wO2ZvcihlPTAsYT10Lmxlbmd0aDthPmU7KytlKXt2YXIgcj10W2VdO2lmKHImJnIuaGFzVmFsdWUoKSl7dmFyIGw9ci50b29sdGlwUG9zaXRpb24oKTtpKz1sLngsbis9bC55LCsrb319cmV0dXJue3g6TWF0aC5yb3VuZChpL28pLHk6TWF0aC5yb3VuZChuL28pfX0sbmVhcmVzdDpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUueCxyPWUueSxsPU51bWJlci5QT1NJVElWRV9JTkZJTklUWTtmb3IoaT0wLG49dC5sZW5ndGg7bj5pOysraSl7dmFyIGQ9dFtpXTtpZihkJiZkLmhhc1ZhbHVlKCkpe3ZhciB1PWQuZ2V0Q2VudGVyUG9pbnQoKSxjPXMuZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKGUsdSk7bD5jJiYobD1jLGE9ZCl9fWlmKGEpe3ZhciBoPWEudG9vbHRpcFBvc2l0aW9uKCk7bz1oLngscj1oLnl9cmV0dXJue3g6byx5OnJ9fX19fSx7fV0sMzc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWw7YS5lbGVtZW50cy5hcmM9e2JhY2tncm91bmRDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJDb2xvcjpcIiNmZmZcIixib3JkZXJXaWR0aDoyfSx0LmVsZW1lbnRzLkFyYz10LkVsZW1lbnQuZXh0ZW5kKHtpbkxhYmVsUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueCwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhvdmVyUmFkaXVzLDIpOiExfSxpblJhbmdlOmZ1bmN0aW9uKHQsYSl7dmFyIGk9dGhpcy5fdmlldztpZihpKXtmb3IodmFyIG49ZS5nZXRBbmdsZUZyb21Qb2ludChpLHt4OnQseTphfSksbz1uLmFuZ2xlLHI9bi5kaXN0YW5jZSxsPWkuc3RhcnRBbmdsZSxzPWkuZW5kQW5nbGU7bD5zOylzKz0yKk1hdGguUEk7Zm9yKDtvPnM7KW8tPTIqTWF0aC5QSTtmb3IoO2w+bzspbys9MipNYXRoLlBJO3ZhciBkPW8+PWwmJnM+PW8sdT1yPj1pLmlubmVyUmFkaXVzJiZyPD1pLm91dGVyUmFkaXVzO3JldHVybiBkJiZ1fXJldHVybiExfSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXcsZT0odC5zdGFydEFuZ2xlK3QuZW5kQW5nbGUpLzIsYT0odC5pbm5lclJhZGl1cyt0Lm91dGVyUmFkaXVzKS8yO3JldHVybnt4OnQueCtNYXRoLmNvcyhlKSphLHk6dC55K01hdGguc2luKGUpKmF9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gTWF0aC5QSSooKHQuZW5kQW5nbGUtdC5zdGFydEFuZ2xlKS8oMipNYXRoLlBJKSkqKE1hdGgucG93KHQub3V0ZXJSYWRpdXMsMiktTWF0aC5wb3codC5pbm5lclJhZGl1cywyKSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXcsZT10LnN0YXJ0QW5nbGUrKHQuZW5kQW5nbGUtdC5zdGFydEFuZ2xlKS8yLGE9KHQub3V0ZXJSYWRpdXMtdC5pbm5lclJhZGl1cykvMit0LmlubmVyUmFkaXVzO3JldHVybnt4OnQueCtNYXRoLmNvcyhlKSphLHk6dC55K01hdGguc2luKGUpKmF9fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fY2hhcnQuY3R4LGU9dGhpcy5fdmlldyxhPWUuc3RhcnRBbmdsZSxpPWUuZW5kQW5nbGU7dC5iZWdpblBhdGgoKSx0LmFyYyhlLngsZS55LGUub3V0ZXJSYWRpdXMsYSxpKSx0LmFyYyhlLngsZS55LGUuaW5uZXJSYWRpdXMsaSxhLCEwKSx0LmNsb3NlUGF0aCgpLHQuc3Ryb2tlU3R5bGU9ZS5ib3JkZXJDb2xvcix0LmxpbmVXaWR0aD1lLmJvcmRlcldpZHRoLHQuZmlsbFN0eWxlPWUuYmFja2dyb3VuZENvbG9yLHQuZmlsbCgpLHQubGluZUpvaW49XCJiZXZlbFwiLGUuYm9yZGVyV2lkdGgmJnQuc3Ryb2tlKCl9fSl9fSx7fV0sMzg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWw7dC5kZWZhdWx0cy5nbG9iYWwuZWxlbWVudHMubGluZT17dGVuc2lvbjouNCxiYWNrZ3JvdW5kQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyV2lkdGg6Myxib3JkZXJDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJDYXBTdHlsZTpcImJ1dHRcIixib3JkZXJEYXNoOltdLGJvcmRlckRhc2hPZmZzZXQ6MCxib3JkZXJKb2luU3R5bGU6XCJtaXRlclwiLGNhcEJlemllclBvaW50czohMCxmaWxsOiEwfSx0LmVsZW1lbnRzLkxpbmU9dC5FbGVtZW50LmV4dGVuZCh7ZHJhdzpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlKXt2YXIgYT1lLl92aWV3O2UuX3ZpZXcuc3RlcHBlZExpbmU9PT0hMD8ocy5saW5lVG8oYS54LHQuX3ZpZXcueSkscy5saW5lVG8oYS54LGEueSkpOjA9PT1lLl92aWV3LnRlbnNpb24/cy5saW5lVG8oYS54LGEueSk6cy5iZXppZXJDdXJ2ZVRvKHQuX3ZpZXcuY29udHJvbFBvaW50TmV4dFgsdC5fdmlldy5jb250cm9sUG9pbnROZXh0WSxhLmNvbnRyb2xQb2ludFByZXZpb3VzWCxhLmNvbnRyb2xQb2ludFByZXZpb3VzWSxhLngsYS55KX12YXIgaT10aGlzLG49aS5fdmlldyxvPW4uc3BhbkdhcHMscj1uLnNjYWxlWmVybyxsPWkuX2xvb3A7bHx8KFwidG9wXCI9PT1uLmZpbGw/cj1uLnNjYWxlVG9wOlwiYm90dG9tXCI9PT1uLmZpbGwmJihyPW4uc2NhbGVCb3R0b20pKTt2YXIgcz1pLl9jaGFydC5jdHg7cy5zYXZlKCk7dmFyIGQ9aS5fY2hpbGRyZW4uc2xpY2UoKSx1PS0xO2wmJmQubGVuZ3RoJiZkLnB1c2goZFswXSk7dmFyIGMsaCxmLGc7aWYoZC5sZW5ndGgmJm4uZmlsbCl7Zm9yKHMuYmVnaW5QYXRoKCksYz0wO2M8ZC5sZW5ndGg7KytjKWg9ZFtjXSxmPWUucHJldmlvdXNJdGVtKGQsYyksZz1oLl92aWV3LDA9PT1jPyhsP3MubW92ZVRvKHIueCxyLnkpOnMubW92ZVRvKGcueCxyKSxnLnNraXB8fCh1PWMscy5saW5lVG8oZy54LGcueSkpKTooZj0tMT09PXU/ZjpkW3VdLGcuc2tpcD9vfHx1IT09Yy0xfHwobD9zLmxpbmVUbyhyLngsci55KTpzLmxpbmVUbyhmLl92aWV3LngscikpOih1IT09Yy0xP28mJi0xIT09dT90KGYsaCk6bD9zLmxpbmVUbyhnLngsZy55KToocy5saW5lVG8oZy54LHIpLHMubGluZVRvKGcueCxnLnkpKTp0KGYsaCksdT1jKSk7bHx8LTE9PT11fHxzLmxpbmVUbyhkW3VdLl92aWV3Lngscikscy5maWxsU3R5bGU9bi5iYWNrZ3JvdW5kQ29sb3J8fGEuZGVmYXVsdENvbG9yLHMuY2xvc2VQYXRoKCkscy5maWxsKCl9dmFyIHA9YS5lbGVtZW50cy5saW5lO2ZvcihzLmxpbmVDYXA9bi5ib3JkZXJDYXBTdHlsZXx8cC5ib3JkZXJDYXBTdHlsZSxzLnNldExpbmVEYXNoJiZzLnNldExpbmVEYXNoKG4uYm9yZGVyRGFzaHx8cC5ib3JkZXJEYXNoKSxzLmxpbmVEYXNoT2Zmc2V0PW4uYm9yZGVyRGFzaE9mZnNldHx8cC5ib3JkZXJEYXNoT2Zmc2V0LHMubGluZUpvaW49bi5ib3JkZXJKb2luU3R5bGV8fHAuYm9yZGVySm9pblN0eWxlLHMubGluZVdpZHRoPW4uYm9yZGVyV2lkdGh8fHAuYm9yZGVyV2lkdGgscy5zdHJva2VTdHlsZT1uLmJvcmRlckNvbG9yfHxhLmRlZmF1bHRDb2xvcixzLmJlZ2luUGF0aCgpLHU9LTEsYz0wO2M8ZC5sZW5ndGg7KytjKWg9ZFtjXSxmPWUucHJldmlvdXNJdGVtKGQsYyksZz1oLl92aWV3LDA9PT1jP2cuc2tpcHx8KHMubW92ZVRvKGcueCxnLnkpLHU9Yyk6KGY9LTE9PT11P2Y6ZFt1XSxnLnNraXB8fCh1IT09Yy0xJiYhb3x8LTE9PT11P3MubW92ZVRvKGcueCxnLnkpOnQoZixoKSx1PWMpKTtzLnN0cm9rZSgpLHMucmVzdG9yZSgpfX0pfX0se31dLDM5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueCwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhpdFJhZGl1cywyKTohMX1mdW5jdGlvbiBhKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLnksMik8TWF0aC5wb3coZS5yYWRpdXMrZS5oaXRSYWRpdXMsMik6ITF9dmFyIGk9dC5oZWxwZXJzLG49dC5kZWZhdWx0cy5nbG9iYWwsbz1uLmRlZmF1bHRDb2xvcjtuLmVsZW1lbnRzLnBvaW50PXtyYWRpdXM6Myxwb2ludFN0eWxlOlwiY2lyY2xlXCIsYmFja2dyb3VuZENvbG9yOm8sYm9yZGVyV2lkdGg6MSxib3JkZXJDb2xvcjpvLGhpdFJhZGl1czoxLGhvdmVyUmFkaXVzOjQsaG92ZXJCb3JkZXJXaWR0aDoxfSx0LmVsZW1lbnRzLlBvaW50PXQuRWxlbWVudC5leHRlbmQoe2luUmFuZ2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLl92aWV3O3JldHVybiBhP01hdGgucG93KHQtYS54LDIpK01hdGgucG93KGUtYS55LDIpPE1hdGgucG93KGEuaGl0UmFkaXVzK2EucmFkaXVzLDIpOiExfSxpbkxhYmVsUmFuZ2U6ZSxpblhSYW5nZTplLGluWVJhbmdlOmEsZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueX19LGdldEFyZWE6ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5QSSpNYXRoLnBvdyh0aGlzLl92aWV3LnJhZGl1cywyKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0LnkscGFkZGluZzp0LnJhZGl1cyt0LmJvcmRlcldpZHRofX0sZHJhdzpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX3ZpZXcsYT10aGlzLl9jaGFydC5jdHgscj1lLnBvaW50U3R5bGUsbD1lLnJhZGl1cyxzPWUueCxkPWUueTtlLnNraXB8fChhLnN0cm9rZVN0eWxlPWUuYm9yZGVyQ29sb3J8fG8sYS5saW5lV2lkdGg9aS5nZXRWYWx1ZU9yRGVmYXVsdChlLmJvcmRlcldpZHRoLG4uZWxlbWVudHMucG9pbnQuYm9yZGVyV2lkdGgpLGEuZmlsbFN0eWxlPWUuYmFja2dyb3VuZENvbG9yfHxvLHQuY2FudmFzSGVscGVycy5kcmF3UG9pbnQoYSxyLGwscyxkKSl9fSl9fSx7fV0sNDA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdm9pZCAwIT09dC5fdmlldy53aWR0aH1mdW5jdGlvbiBhKHQpe3ZhciBhLGksbixvLHI9dC5fdmlldztpZihlKHQpKXt2YXIgbD1yLndpZHRoLzI7YT1yLngtbCxpPXIueCtsLG49TWF0aC5taW4oci55LHIuYmFzZSksbz1NYXRoLm1heChyLnksci5iYXNlKX1lbHNle3ZhciBzPXIuaGVpZ2h0LzI7YT1NYXRoLm1pbihyLngsci5iYXNlKSxpPU1hdGgubWF4KHIueCxyLmJhc2UpLG49ci55LXMsbz1yLnkrc31yZXR1cm57bGVmdDphLHRvcDpuLHJpZ2h0OmksYm90dG9tOm99fXZhciBpPXQuZGVmYXVsdHMuZ2xvYmFsO2kuZWxlbWVudHMucmVjdGFuZ2xlPXtiYWNrZ3JvdW5kQ29sb3I6aS5kZWZhdWx0Q29sb3IsYm9yZGVyV2lkdGg6MCxib3JkZXJDb2xvcjppLmRlZmF1bHRDb2xvcixib3JkZXJTa2lwcGVkOlwiYm90dG9tXCJ9LHQuZWxlbWVudHMuUmVjdGFuZ2xlPXQuRWxlbWVudC5leHRlbmQoe2RyYXc6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBzWyh1K3QpJTRdfXZhciBlPXRoaXMuX2NoYXJ0LmN0eCxhPXRoaXMuX3ZpZXcsaT1hLndpZHRoLzIsbj1hLngtaSxvPWEueCtpLHI9YS5iYXNlLShhLmJhc2UtYS55KSxsPWEuYm9yZGVyV2lkdGgvMjthLmJvcmRlcldpZHRoJiYobis9bCxvLT1sLHIrPWwpLGUuYmVnaW5QYXRoKCksZS5maWxsU3R5bGU9YS5iYWNrZ3JvdW5kQ29sb3IsZS5zdHJva2VTdHlsZT1hLmJvcmRlckNvbG9yLGUubGluZVdpZHRoPWEuYm9yZGVyV2lkdGg7dmFyIHM9W1tuLGEuYmFzZV0sW24scl0sW28scl0sW28sYS5iYXNlXV0sZD1bXCJib3R0b21cIixcImxlZnRcIixcInRvcFwiLFwicmlnaHRcIl0sdT1kLmluZGV4T2YoYS5ib3JkZXJTa2lwcGVkLDApOy0xPT09dSYmKHU9MCk7dmFyIGM9dCgwKTtlLm1vdmVUbyhjWzBdLGNbMV0pO2Zvcih2YXIgaD0xOzQ+aDtoKyspYz10KGgpLGUubGluZVRvKGNbMF0sY1sxXSk7ZS5maWxsKCksYS5ib3JkZXJXaWR0aCYmZS5zdHJva2UoKX0saGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gdC5iYXNlLXQueX0saW5SYW5nZTpmdW5jdGlvbih0LGUpe3ZhciBpPSExO2lmKHRoaXMuX3ZpZXcpe3ZhciBuPWEodGhpcyk7aT10Pj1uLmxlZnQmJnQ8PW4ucmlnaHQmJmU+PW4udG9wJiZlPD1uLmJvdHRvbX1yZXR1cm4gaX0saW5MYWJlbFJhbmdlOmZ1bmN0aW9uKHQsaSl7dmFyIG49dGhpcztpZighbi5fdmlldylyZXR1cm4hMTt2YXIgbz0hMSxyPWEobik7cmV0dXJuIG89ZShuKT90Pj1yLmxlZnQmJnQ8PXIucmlnaHQ6aT49ci50b3AmJmk8PXIuYm90dG9tfSxpblhSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpO3JldHVybiB0Pj1lLmxlZnQmJnQ8PWUucmlnaHR9LGluWVJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPWEodGhpcyk7cmV0dXJuIHQ+PWUudG9wJiZ0PD1lLmJvdHRvbX0sZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdCxhLGk9dGhpcy5fdmlldztyZXR1cm4gZSh0aGlzKT8odD1pLngsYT0oaS55K2kuYmFzZSkvMik6KHQ9KGkueCtpLmJhc2UpLzIsYT1pLnkpLHt4OnQseTphfX0sZ2V0QXJlYTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIHQud2lkdGgqTWF0aC5hYnModC55LXQuYmFzZSl9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55fX19KX19LHt9XSw0MTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJib3R0b21cIn0saT10LlNjYWxlLmV4dGVuZCh7Z2V0TGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jaGFydC5kYXRhO3JldHVybih0aGlzLmlzSG9yaXpvbnRhbCgpP3QueExhYmVsczp0LnlMYWJlbHMpfHx0LmxhYmVsc30sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10LmdldExhYmVscygpO3QubWluSW5kZXg9MCx0Lm1heEluZGV4PWEubGVuZ3RoLTE7dmFyIGk7dm9pZCAwIT09dC5vcHRpb25zLnRpY2tzLm1pbiYmKGk9ZS5pbmRleE9mKGEsdC5vcHRpb25zLnRpY2tzLm1pbiksdC5taW5JbmRleD0tMSE9PWk/aTp0Lm1pbkluZGV4KSx2b2lkIDAhPT10Lm9wdGlvbnMudGlja3MubWF4JiYoaT1lLmluZGV4T2YoYSx0Lm9wdGlvbnMudGlja3MubWF4KSx0Lm1heEluZGV4PS0xIT09aT9pOnQubWF4SW5kZXgpLHQubWluPWFbdC5taW5JbmRleF0sdC5tYXg9YVt0Lm1heEluZGV4XX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldExhYmVscygpO3QudGlja3M9MD09PXQubWluSW5kZXgmJnQubWF4SW5kZXg9PT1lLmxlbmd0aC0xP2U6ZS5zbGljZSh0Lm1pbkluZGV4LHQubWF4SW5kZXgrMSl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5jaGFydC5kYXRhLG49YS5pc0hvcml6b250YWwoKTtyZXR1cm4gaS54TGFiZWxzJiZufHxpLnlMYWJlbHMmJiFuP2EuZ2V0UmlnaHRWYWx1ZShpLmRhdGFzZXRzW2VdLmRhdGFbdF0pOmEudGlja3NbdF19LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dGhpcyxvPU1hdGgubWF4KG4ubWF4SW5kZXgrMS1uLm1pbkluZGV4LShuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpO2lmKHZvaWQgMCE9PXQmJmlzTmFOKGUpKXt2YXIgcj1uLmdldExhYmVscygpLGw9ci5pbmRleE9mKHQpO2U9LTEhPT1sP2w6ZX1pZihuLmlzSG9yaXpvbnRhbCgpKXt2YXIgcz1uLndpZHRoLShuLnBhZGRpbmdMZWZ0K24ucGFkZGluZ1JpZ2h0KSxkPXMvbyx1PWQqKGUtbi5taW5JbmRleCkrbi5wYWRkaW5nTGVmdDtyZXR1cm4obi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJml8fG4ubWF4SW5kZXg9PT1uLm1pbkluZGV4JiZpKSYmKHUrPWQvMiksXG5uLmxlZnQrTWF0aC5yb3VuZCh1KX12YXIgYz1uLmhlaWdodC0obi5wYWRkaW5nVG9wK24ucGFkZGluZ0JvdHRvbSksaD1jL28sZj1oKihlLW4ubWluSW5kZXgpK24ucGFkZGluZ1RvcDtyZXR1cm4gbi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJmkmJihmKz1oLzIpLG4udG9wK01hdGgucm91bmQoZil9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrc1t0XSx0K3RoaXMubWluSW5kZXgsbnVsbCxlKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1NYXRoLm1heChhLnRpY2tzLmxlbmd0aC0oYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKSxuPWEuaXNIb3Jpem9udGFsKCksbz1uP2Eud2lkdGgtKGEucGFkZGluZ0xlZnQrYS5wYWRkaW5nUmlnaHQpOmEuaGVpZ2h0LShhLnBhZGRpbmdUb3ArYS5wYWRkaW5nQm90dG9tKSxyPW8vaTtyZXR1cm4gdC09bj9hLmxlZnQ6YS50b3AsYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXMmJih0LT1yLzIpLHQtPW4/YS5wYWRkaW5nTGVmdDphLnBhZGRpbmdUb3AsZT0wPj10PzA6TWF0aC5yb3VuZCh0L3IpfSxnZXRCYXNlUGl4ZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ib3R0b219fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJjYXRlZ29yeVwiLGksYSl9fSx7fV0sNDI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwibGVmdFwiLHRpY2tzOntjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubGluZWFyfX0saT10LkxpbmVhclNjYWxlQmFzZS5leHRlbmQoe2RldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBsP3QueEF4aXNJRD09PWEuaWQ6dC55QXhpc0lEPT09YS5pZH12YXIgYT10aGlzLGk9YS5vcHRpb25zLG49YS5jaGFydCxvPW4uZGF0YSxyPW8uZGF0YXNldHMsbD1hLmlzSG9yaXpvbnRhbCgpO2lmKGEubWluPW51bGwsYS5tYXg9bnVsbCxpLnN0YWNrZWQpe3ZhciBzPXt9O2UuZWFjaChyLGZ1bmN0aW9uKG8scil7dmFyIGw9bi5nZXREYXRhc2V0TWV0YShyKTt2b2lkIDA9PT1zW2wudHlwZV0mJihzW2wudHlwZV09e3Bvc2l0aXZlVmFsdWVzOltdLG5lZ2F0aXZlVmFsdWVzOltdfSk7dmFyIGQ9c1tsLnR5cGVdLnBvc2l0aXZlVmFsdWVzLHU9c1tsLnR5cGVdLm5lZ2F0aXZlVmFsdWVzO24uaXNEYXRhc2V0VmlzaWJsZShyKSYmdChsKSYmZS5lYWNoKG8uZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBuPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4obil8fGwuZGF0YVtlXS5oaWRkZW58fChkW2VdPWRbZV18fDAsdVtlXT11W2VdfHwwLGkucmVsYXRpdmVQb2ludHM/ZFtlXT0xMDA6MD5uP3VbZV0rPW46ZFtlXSs9bil9KX0pLGUuZWFjaChzLGZ1bmN0aW9uKHQpe3ZhciBpPXQucG9zaXRpdmVWYWx1ZXMuY29uY2F0KHQubmVnYXRpdmVWYWx1ZXMpLG49ZS5taW4oaSksbz1lLm1heChpKTthLm1pbj1udWxsPT09YS5taW4/bjpNYXRoLm1pbihhLm1pbixuKSxhLm1heD1udWxsPT09YS5tYXg/bzpNYXRoLm1heChhLm1heCxvKX0pfWVsc2UgZS5lYWNoKHIsZnVuY3Rpb24oaSxvKXt2YXIgcj1uLmdldERhdGFzZXRNZXRhKG8pO24uaXNEYXRhc2V0VmlzaWJsZShvKSYmdChyKSYmZS5lYWNoKGkuZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBpPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4oaSl8fHIuZGF0YVtlXS5oaWRkZW58fChudWxsPT09YS5taW4/YS5taW49aTppPGEubWluJiYoYS5taW49aSksbnVsbD09PWEubWF4P2EubWF4PWk6aT5hLm1heCYmKGEubWF4PWkpKX0pfSk7dGhpcy5oYW5kbGVUaWNrUmFuZ2VPcHRpb25zKCl9LGdldFRpY2tMaW1pdDpmdW5jdGlvbigpe3ZhciBhLGk9dGhpcyxuPWkub3B0aW9ucy50aWNrcztpZihpLmlzSG9yaXpvbnRhbCgpKWE9TWF0aC5taW4obi5tYXhUaWNrc0xpbWl0P24ubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwoaS53aWR0aC81MCkpO2Vsc2V7dmFyIG89ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZvbnRTaXplLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSk7YT1NYXRoLm1pbihuLm1heFRpY2tzTGltaXQ/bi5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbChpLmhlaWdodC8oMipvKSkpfXJldHVybiBhfSxoYW5kbGVEaXJlY3Rpb25hbENoYW5nZXM6ZnVuY3Rpb24oKXt0aGlzLmlzSG9yaXpvbnRhbCgpfHx0aGlzLnRpY2tzLnJldmVyc2UoKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10aGlzLG49aS5wYWRkaW5nTGVmdCxvPWkucGFkZGluZ0JvdHRvbSxyPWkuc3RhcnQsbD0raS5nZXRSaWdodFZhbHVlKHQpLHM9aS5lbmQtcjtyZXR1cm4gaS5pc0hvcml6b250YWwoKT8oYT1pLndpZHRoLShuK2kucGFkZGluZ1JpZ2h0KSxlPWkubGVmdCthL3MqKGwtciksTWF0aC5yb3VuZChlK24pKTooYT1pLmhlaWdodC0oaS5wYWRkaW5nVG9wK28pLGU9aS5ib3R0b20tby1hL3MqKGwtciksTWF0aC5yb3VuZChlKSl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuaXNIb3Jpem9udGFsKCksaT1lLnBhZGRpbmdMZWZ0LG49ZS5wYWRkaW5nQm90dG9tLG89YT9lLndpZHRoLShpK2UucGFkZGluZ1JpZ2h0KTplLmhlaWdodC0oZS5wYWRkaW5nVG9wK24pLHI9KGE/dC1lLmxlZnQtaTplLmJvdHRvbS1uLXQpL287cmV0dXJuIGUuc3RhcnQrKGUuZW5kLWUuc3RhcnQpKnJ9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja3NBc051bWJlcnNbdF0pfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwibGluZWFyXCIsaSxhKX19LHt9XSw0MzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT1lLm5vb3A7dC5MaW5lYXJTY2FsZUJhc2U9dC5TY2FsZS5leHRlbmQoe2hhbmRsZVRpY2tSYW5nZU9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5vcHRpb25zLGk9YS50aWNrcztpZihpLmJlZ2luQXRaZXJvKXt2YXIgbj1lLnNpZ24odC5taW4pLG89ZS5zaWduKHQubWF4KTswPm4mJjA+bz90Lm1heD0wOm4+MCYmbz4wJiYodC5taW49MCl9dm9pZCAwIT09aS5taW4/dC5taW49aS5taW46dm9pZCAwIT09aS5zdWdnZXN0ZWRNaW4mJih0Lm1pbj1NYXRoLm1pbih0Lm1pbixpLnN1Z2dlc3RlZE1pbikpLHZvaWQgMCE9PWkubWF4P3QubWF4PWkubWF4OnZvaWQgMCE9PWkuc3VnZ2VzdGVkTWF4JiYodC5tYXg9TWF0aC5tYXgodC5tYXgsaS5zdWdnZXN0ZWRNYXgpKSx0Lm1pbj09PXQubWF4JiYodC5tYXgrKyxpLmJlZ2luQXRaZXJvfHx0Lm1pbi0tKX0sZ2V0VGlja0xpbWl0OmEsaGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzOmEsYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89YS5nZXRUaWNrTGltaXQoKTtvPU1hdGgubWF4KDIsbyk7dmFyIHI9e21heFRpY2tzOm8sbWluOm4ubWluLG1heDpuLm1heCxzdGVwU2l6ZTplLmdldFZhbHVlT3JEZWZhdWx0KG4uZml4ZWRTdGVwU2l6ZSxuLnN0ZXBTaXplKX0sbD1hLnRpY2tzPXQuVGlja3MuZ2VuZXJhdG9ycy5saW5lYXIocixhKTthLmhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlcygpLGEubWF4PWUubWF4KGwpLGEubWluPWUubWluKGwpLG4ucmV2ZXJzZT8obC5yZXZlcnNlKCksYS5zdGFydD1hLm1heCxhLmVuZD1hLm1pbik6KGEuc3RhcnQ9YS5taW4sYS5lbmQ9YS5tYXgpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS50aWNrc0FzTnVtYmVycz1lLnRpY2tzLnNsaWNlKCksZS56ZXJvTGluZUluZGV4PWUudGlja3MuaW5kZXhPZigwKSx0LlNjYWxlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKGUpfX0pfX0se31dLDQ0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImxlZnRcIix0aWNrczp7Y2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxvZ2FyaXRobWljfX0saT10LlNjYWxlLmV4dGVuZCh7ZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIGQ/dC54QXhpc0lEPT09YS5pZDp0LnlBeGlzSUQ9PT1hLmlkfXZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89YS5jaGFydCxyPW8uZGF0YSxsPXIuZGF0YXNldHMscz1lLmdldFZhbHVlT3JEZWZhdWx0LGQ9YS5pc0hvcml6b250YWwoKTtpZihhLm1pbj1udWxsLGEubWF4PW51bGwsYS5taW5Ob3RaZXJvPW51bGwsaS5zdGFja2VkKXt2YXIgdT17fTtlLmVhY2gobCxmdW5jdGlvbihuLHIpe3ZhciBsPW8uZ2V0RGF0YXNldE1ldGEocik7by5pc0RhdGFzZXRWaXNpYmxlKHIpJiZ0KGwpJiYodm9pZCAwPT09dVtsLnR5cGVdJiYodVtsLnR5cGVdPVtdKSxlLmVhY2gobi5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIG49dVtsLnR5cGVdLG89K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihvKXx8bC5kYXRhW2VdLmhpZGRlbnx8KG5bZV09bltlXXx8MCxpLnJlbGF0aXZlUG9pbnRzP25bZV09MTAwOm5bZV0rPW8pfSkpfSksZS5lYWNoKHUsZnVuY3Rpb24odCl7dmFyIGk9ZS5taW4odCksbj1lLm1heCh0KTthLm1pbj1udWxsPT09YS5taW4/aTpNYXRoLm1pbihhLm1pbixpKSxhLm1heD1udWxsPT09YS5tYXg/bjpNYXRoLm1heChhLm1heCxuKX0pfWVsc2UgZS5lYWNoKGwsZnVuY3Rpb24oaSxuKXt2YXIgcj1vLmdldERhdGFzZXRNZXRhKG4pO28uaXNEYXRhc2V0VmlzaWJsZShuKSYmdChyKSYmZS5lYWNoKGkuZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBpPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4oaSl8fHIuZGF0YVtlXS5oaWRkZW58fChudWxsPT09YS5taW4/YS5taW49aTppPGEubWluJiYoYS5taW49aSksbnVsbD09PWEubWF4P2EubWF4PWk6aT5hLm1heCYmKGEubWF4PWkpLDAhPT1pJiYobnVsbD09PWEubWluTm90WmVyb3x8aTxhLm1pbk5vdFplcm8pJiYoYS5taW5Ob3RaZXJvPWkpKX0pfSk7YS5taW49cyhuLm1pbixhLm1pbiksYS5tYXg9cyhuLm1heCxhLm1heCksYS5taW49PT1hLm1heCYmKDAhPT1hLm1pbiYmbnVsbCE9PWEubWluPyhhLm1pbj1NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5taW4pKS0xKSxhLm1heD1NYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5tYXgpKSsxKSk6KGEubWluPTEsYS5tYXg9MTApKX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1pLnRpY2tzLG89e21pbjpuLm1pbixtYXg6bi5tYXh9LHI9YS50aWNrcz10LlRpY2tzLmdlbmVyYXRvcnMubG9nYXJpdGhtaWMobyxhKTthLmlzSG9yaXpvbnRhbCgpfHxyLnJldmVyc2UoKSxhLm1heD1lLm1heChyKSxhLm1pbj1lLm1pbihyKSxuLnJldmVyc2U/KHIucmV2ZXJzZSgpLGEuc3RhcnQ9YS5tYXgsYS5lbmQ9YS5taW4pOihhLnN0YXJ0PWEubWluLGEuZW5kPWEubWF4KX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt0aGlzLnRpY2tWYWx1ZXM9dGhpcy50aWNrcy5zbGljZSgpLHQuU2NhbGUucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwodGhpcyl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrVmFsdWVzW3RdKX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgYSxpLG4sbz10aGlzLHI9by5zdGFydCxsPStvLmdldFJpZ2h0VmFsdWUodCkscz1vLnBhZGRpbmdUb3AsZD1vLnBhZGRpbmdCb3R0b20sdT1vLnBhZGRpbmdMZWZ0LGM9by5vcHRpb25zLGg9Yy50aWNrcztyZXR1cm4gby5pc0hvcml6b250YWwoKT8obj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKHIpLDA9PT1sP2k9by5sZWZ0K3U6KGE9by53aWR0aC0odStvLnBhZGRpbmdSaWdodCksaT1vLmxlZnQrYS9uKihlLmxvZzEwKGwpLWUubG9nMTAocikpLGkrPXUpKTooYT1vLmhlaWdodC0ocytkKSwwIT09cnx8aC5yZXZlcnNlPzA9PT1vLmVuZCYmaC5yZXZlcnNlPyhuPWUubG9nMTAoby5zdGFydCktZS5sb2cxMChvLm1pbk5vdFplcm8pLGk9bD09PW8uZW5kP28udG9wK3M6bD09PW8ubWluTm90WmVybz9vLnRvcCtzKy4wMiphOm8udG9wK3MrLjAyKmErLjk4KmEvbiooZS5sb2cxMChsKS1lLmxvZzEwKG8ubWluTm90WmVybykpKToobj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKHIpLGE9by5oZWlnaHQtKHMrZCksaT1vLmJvdHRvbS1kLWEvbiooZS5sb2cxMChsKS1lLmxvZzEwKHIpKSk6KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChvLm1pbk5vdFplcm8pLGk9bD09PXI/by5ib3R0b20tZDpsPT09by5taW5Ob3RaZXJvP28uYm90dG9tLWQtLjAyKmE6by5ib3R0b20tZC0uMDIqYS0uOTgqYS9uKihlLmxvZzEwKGwpLWUubG9nMTAoby5taW5Ob3RaZXJvKSkpKSxpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBhLGksbj10aGlzLG89ZS5sb2cxMChuLmVuZCktZS5sb2cxMChuLnN0YXJ0KTtyZXR1cm4gbi5pc0hvcml6b250YWwoKT8oaT1uLndpZHRoLShuLnBhZGRpbmdMZWZ0K24ucGFkZGluZ1JpZ2h0KSxhPW4uc3RhcnQqTWF0aC5wb3coMTAsKHQtbi5sZWZ0LW4ucGFkZGluZ0xlZnQpKm8vaSkpOihpPW4uaGVpZ2h0LShuLnBhZGRpbmdUb3Arbi5wYWRkaW5nQm90dG9tKSxhPU1hdGgucG93KDEwLChuLmJvdHRvbS1uLnBhZGRpbmdCb3R0b20tdCkqby9pKS9uLnN0YXJ0KSxhfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwibG9nYXJpdGhtaWNcIixpLGEpfX0se31dLDQ1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsLGk9e2Rpc3BsYXk6ITAsYW5pbWF0ZTohMCxsaW5lQXJjOiExLHBvc2l0aW9uOlwiY2hhcnRBcmVhXCIsYW5nbGVMaW5lczp7ZGlzcGxheTohMCxjb2xvcjpcInJnYmEoMCwgMCwgMCwgMC4xKVwiLGxpbmVXaWR0aDoxfSx0aWNrczp7c2hvd0xhYmVsQmFja2Ryb3A6ITAsYmFja2Ryb3BDb2xvcjpcInJnYmEoMjU1LDI1NSwyNTUsMC43NSlcIixiYWNrZHJvcFBhZGRpbmdZOjIsYmFja2Ryb3BQYWRkaW5nWDoyLGNhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5saW5lYXJ9LHBvaW50TGFiZWxzOntmb250U2l6ZToxMCxjYWxsYmFjazpmdW5jdGlvbih0KXtyZXR1cm4gdH19fSxuPXQuTGluZWFyU2NhbGVCYXNlLmV4dGVuZCh7Z2V0VmFsdWVDb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aH0sc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10Lm9wdGlvbnMsbj1pLnRpY2tzO3Qud2lkdGg9dC5tYXhXaWR0aCx0LmhlaWdodD10Lm1heEhlaWdodCx0LnhDZW50ZXI9TWF0aC5yb3VuZCh0LndpZHRoLzIpLHQueUNlbnRlcj1NYXRoLnJvdW5kKHQuaGVpZ2h0LzIpO3ZhciBvPWUubWluKFt0LmhlaWdodCx0LndpZHRoXSkscj1lLmdldFZhbHVlT3JEZWZhdWx0KG4uZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpO3QuZHJhd2luZ0FyZWE9aS5kaXNwbGF5P28vMi0oci8yK24uYmFja2Ryb3BQYWRkaW5nWSk6by8yfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQuY2hhcnQ7dC5taW49bnVsbCx0Lm1heD1udWxsLGUuZWFjaChhLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oaSxuKXtpZihhLmlzRGF0YXNldFZpc2libGUobikpe3ZhciBvPWEuZ2V0RGF0YXNldE1ldGEobik7ZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlLGEpe3ZhciBpPSt0LmdldFJpZ2h0VmFsdWUoZSk7aXNOYU4oaSl8fG8uZGF0YVthXS5oaWRkZW58fChudWxsPT09dC5taW4/dC5taW49aTppPHQubWluJiYodC5taW49aSksbnVsbD09PXQubWF4P3QubWF4PWk6aT50Lm1heCYmKHQubWF4PWkpKX0pfX0pLHQuaGFuZGxlVGlja1JhbmdlT3B0aW9ucygpfSxnZXRUaWNrTGltaXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMudGlja3MsaT1lLmdldFZhbHVlT3JEZWZhdWx0KHQuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpO3JldHVybiBNYXRoLm1pbih0Lm1heFRpY2tzTGltaXQ/dC5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbCh0aGlzLmRyYXdpbmdBcmVhLygxLjUqaSkpKX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3QuTGluZWFyU2NhbGVCYXNlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKGUpLGUucG9pbnRMYWJlbHM9ZS5jaGFydC5kYXRhLmxhYmVscy5tYXAoZS5vcHRpb25zLnBvaW50TGFiZWxzLmNhbGxiYWNrLGUpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGZpdDpmdW5jdGlvbigpe3ZhciB0LGksbixvLHIsbCxzLGQsdSxjLGgsZixnPXRoaXMub3B0aW9ucy5wb2ludExhYmVscyxwPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksbT1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksYj1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSx2PWUuZm9udFN0cmluZyhwLG0sYikseD1lLm1pbihbdGhpcy5oZWlnaHQvMi1wLTUsdGhpcy53aWR0aC8yXSkseT10aGlzLndpZHRoLGs9MDtmb3IodGhpcy5jdHguZm9udD12LGk9MDtpPHRoaXMuZ2V0VmFsdWVDb3VudCgpO2krKyl7dD10aGlzLmdldFBvaW50UG9zaXRpb24oaSx4KSxuPXRoaXMuY3R4Lm1lYXN1cmVUZXh0KHRoaXMucG9pbnRMYWJlbHNbaV0/dGhpcy5wb2ludExhYmVsc1tpXTpcIlwiKS53aWR0aCs1O3ZhciBTPXRoaXMuZ2V0SW5kZXhBbmdsZShpKStNYXRoLlBJLzIsdz0zNjAqUy8oMipNYXRoLlBJKSUzNjA7MD09PXd8fDE4MD09PXc/KG89bi8yLHQueCtvPnkmJih5PXQueCtvLHI9aSksdC54LW88ayYmKGs9dC54LW8scz1pKSk6MTgwPnc/dC54K24+eSYmKHk9dC54K24scj1pKTp0LngtbjxrJiYoaz10LngtbixzPWkpfXU9ayxjPU1hdGguY2VpbCh5LXRoaXMud2lkdGgpLGw9dGhpcy5nZXRJbmRleEFuZ2xlKHIpLGQ9dGhpcy5nZXRJbmRleEFuZ2xlKHMpLGg9Yy9NYXRoLnNpbihsK01hdGguUEkvMiksZj11L01hdGguc2luKGQrTWF0aC5QSS8yKSxoPWUuaXNOdW1iZXIoaCk/aDowLGY9ZS5pc051bWJlcihmKT9mOjAsdGhpcy5kcmF3aW5nQXJlYT1NYXRoLnJvdW5kKHgtKGYraCkvMiksdGhpcy5zZXRDZW50ZXJQb2ludChmLGgpfSxzZXRDZW50ZXJQb2ludDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLndpZHRoLWUtYS5kcmF3aW5nQXJlYSxuPXQrYS5kcmF3aW5nQXJlYTthLnhDZW50ZXI9TWF0aC5yb3VuZCgobitpKS8yK2EubGVmdCksYS55Q2VudGVyPU1hdGgucm91bmQoYS5oZWlnaHQvMithLnRvcCl9LGdldEluZGV4QW5nbGU6ZnVuY3Rpb24odCl7dmFyIGU9MipNYXRoLlBJL3RoaXMuZ2V0VmFsdWVDb3VudCgpLGE9dGhpcy5jaGFydC5vcHRpb25zJiZ0aGlzLmNoYXJ0Lm9wdGlvbnMuc3RhcnRBbmdsZT90aGlzLmNoYXJ0Lm9wdGlvbnMuc3RhcnRBbmdsZTowLGk9YSpNYXRoLlBJKjIvMzYwO3JldHVybiB0KmUtTWF0aC5QSS8yK2l9LGdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYobnVsbD09PXQpcmV0dXJuIDA7dmFyIGE9ZS5kcmF3aW5nQXJlYS8oZS5tYXgtZS5taW4pO3JldHVybiBlLm9wdGlvbnMucmV2ZXJzZT8oZS5tYXgtdCkqYToodC1lLm1pbikqYX0sZ2V0UG9pbnRQb3NpdGlvbjpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldEluZGV4QW5nbGUodCk7cmV0dXJue3g6TWF0aC5yb3VuZChNYXRoLmNvcyhpKSplKSthLnhDZW50ZXIseTpNYXRoLnJvdW5kKE1hdGguc2luKGkpKmUpK2EueUNlbnRlcn19LGdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZTpmdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLmdldFBvaW50UG9zaXRpb24odCx0aGlzLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKGUpKX0sZ2V0QmFzZVBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQubWluLGE9dC5tYXg7cmV0dXJuIHQuZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlKDAsdC5iZWdpbkF0WmVybz8wOjA+ZSYmMD5hP2E6ZT4wJiZhPjA/ZTowKX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMsaT10Lm9wdGlvbnMsbj1pLmdyaWRMaW5lcyxvPWkudGlja3Mscj1pLmFuZ2xlTGluZXMsbD1pLnBvaW50TGFiZWxzLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdDtpZihpLmRpc3BsYXkpe3ZhciBkPXQuY3R4LHU9cyhvLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxjPXMoby5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxoPXMoby5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLGY9ZS5mb250U3RyaW5nKHUsYyxoKTtpZihlLmVhY2godC50aWNrcyxmdW5jdGlvbihyLGwpe2lmKGw+MHx8aS5yZXZlcnNlKXt2YXIgYz10LmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHQudGlja3NBc051bWJlcnNbbF0pLGg9dC55Q2VudGVyLWM7aWYobi5kaXNwbGF5JiYwIT09bClpZihkLnN0cm9rZVN0eWxlPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4uY29sb3IsbC0xKSxkLmxpbmVXaWR0aD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmxpbmVXaWR0aCxsLTEpLGkubGluZUFyYylkLmJlZ2luUGF0aCgpLGQuYXJjKHQueENlbnRlcix0LnlDZW50ZXIsYywwLDIqTWF0aC5QSSksZC5jbG9zZVBhdGgoKSxkLnN0cm9rZSgpO2Vsc2V7ZC5iZWdpblBhdGgoKTtmb3IodmFyIGc9MDtnPHQuZ2V0VmFsdWVDb3VudCgpO2crKyl7dmFyIHA9dC5nZXRQb2ludFBvc2l0aW9uKGcsYyk7MD09PWc/ZC5tb3ZlVG8ocC54LHAueSk6ZC5saW5lVG8ocC54LHAueSl9ZC5jbG9zZVBhdGgoKSxkLnN0cm9rZSgpfWlmKG8uZGlzcGxheSl7dmFyIG09cyhvLmZvbnRDb2xvcixhLmRlZmF1bHRGb250Q29sb3IpO2lmKGQuZm9udD1mLG8uc2hvd0xhYmVsQmFja2Ryb3Ape3ZhciBiPWQubWVhc3VyZVRleHQocikud2lkdGg7ZC5maWxsU3R5bGU9by5iYWNrZHJvcENvbG9yLGQuZmlsbFJlY3QodC54Q2VudGVyLWIvMi1vLmJhY2tkcm9wUGFkZGluZ1gsaC11LzItby5iYWNrZHJvcFBhZGRpbmdZLGIrMipvLmJhY2tkcm9wUGFkZGluZ1gsdSsyKm8uYmFja2Ryb3BQYWRkaW5nWSl9ZC50ZXh0QWxpZ249XCJjZW50ZXJcIixkLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGQuZmlsbFN0eWxlPW0sZC5maWxsVGV4dChyLHQueENlbnRlcixoKX19fSksIWkubGluZUFyYyl7ZC5saW5lV2lkdGg9ci5saW5lV2lkdGgsZC5zdHJva2VTdHlsZT1yLmNvbG9yO2Zvcih2YXIgZz10LmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKGkucmV2ZXJzZT90Lm1pbjp0Lm1heCkscD1zKGwuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLG09cyhsLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGI9cyhsLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksdj1lLmZvbnRTdHJpbmcocCxtLGIpLHg9dC5nZXRWYWx1ZUNvdW50KCktMTt4Pj0wO3gtLSl7aWYoci5kaXNwbGF5KXt2YXIgeT10LmdldFBvaW50UG9zaXRpb24oeCxnKTtkLmJlZ2luUGF0aCgpLGQubW92ZVRvKHQueENlbnRlcix0LnlDZW50ZXIpLGQubGluZVRvKHkueCx5LnkpLGQuc3Ryb2tlKCksZC5jbG9zZVBhdGgoKX12YXIgaz10LmdldFBvaW50UG9zaXRpb24oeCxnKzUpLFM9cyhsLmZvbnRDb2xvcixhLmRlZmF1bHRGb250Q29sb3IpO2QuZm9udD12LGQuZmlsbFN0eWxlPVM7dmFyIHc9dC5wb2ludExhYmVscyxNPXRoaXMuZ2V0SW5kZXhBbmdsZSh4KStNYXRoLlBJLzIsQz0zNjAqTS8oMipNYXRoLlBJKSUzNjA7MD09PUN8fDE4MD09PUM/ZC50ZXh0QWxpZ249XCJjZW50ZXJcIjoxODA+Qz9kLnRleHRBbGlnbj1cImxlZnRcIjpkLnRleHRBbGlnbj1cInJpZ2h0XCIsOTA9PT1DfHwyNzA9PT1DP2QudGV4dEJhc2VsaW5lPVwibWlkZGxlXCI6Qz4yNzB8fDkwPkM/ZC50ZXh0QmFzZWxpbmU9XCJib3R0b21cIjpkLnRleHRCYXNlbGluZT1cInRvcFwiLGQuZmlsbFRleHQod1t4XT93W3hdOlwiXCIsay54LGsueSl9fX19fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJyYWRpYWxMaW5lYXJcIixuLGkpfX0se31dLDQ2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dCgxKTtpPVwiZnVuY3Rpb25cIj09dHlwZW9mIGk/aTp3aW5kb3cubW9tZW50LGUuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17dW5pdHM6W3tuYW1lOlwibWlsbGlzZWNvbmRcIixzdGVwczpbMSwyLDUsMTAsMjAsNTAsMTAwLDI1MCw1MDBdfSx7bmFtZTpcInNlY29uZFwiLHN0ZXBzOlsxLDIsNSwxMCwzMF19LHtuYW1lOlwibWludXRlXCIsc3RlcHM6WzEsMiw1LDEwLDMwXX0se25hbWU6XCJob3VyXCIsc3RlcHM6WzEsMiwzLDYsMTJdfSx7bmFtZTpcImRheVwiLHN0ZXBzOlsxLDIsNV19LHtuYW1lOlwid2Vla1wiLG1heFN0ZXA6NH0se25hbWU6XCJtb250aFwiLG1heFN0ZXA6M30se25hbWU6XCJxdWFydGVyXCIsbWF4U3RlcDo0fSx7bmFtZTpcInllYXJcIixtYXhTdGVwOiExfV19LG49e3Bvc2l0aW9uOlwiYm90dG9tXCIsdGltZTp7cGFyc2VyOiExLGZvcm1hdDohMSx1bml0OiExLHJvdW5kOiExLGRpc3BsYXlGb3JtYXQ6ITEsaXNvV2Vla2RheTohMSxtaW5Vbml0OlwibWlsbGlzZWNvbmRcIixkaXNwbGF5Rm9ybWF0czp7bWlsbGlzZWNvbmQ6XCJoOm1tOnNzLlNTUyBhXCIsc2Vjb25kOlwiaDptbTpzcyBhXCIsbWludXRlOlwiaDptbTpzcyBhXCIsaG91cjpcIk1NTSBELCBoQVwiLGRheTpcImxsXCIsd2VlazpcImxsXCIsbW9udGg6XCJNTU0gWVlZWVwiLHF1YXJ0ZXI6XCJbUV1RIC0gWVlZWVwiLHllYXI6XCJZWVlZXCJ9fSx0aWNrczp7YXV0b1NraXA6ITF9fSxvPXQuU2NhbGUuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7aWYoIWkpdGhyb3cgbmV3IEVycm9yKFwiQ2hhcnQuanMgLSBNb21lbnQuanMgY291bGQgbm90IGJlIGZvdW5kISBZb3UgbXVzdCBpbmNsdWRlIGl0IGJlZm9yZSBDaGFydC5qcyB0byB1c2UgdGhlIHRpbWUgc2NhbGUuIERvd25sb2FkIGF0IGh0dHBzOi8vbW9tZW50anMuY29tXCIpO3QuU2NhbGUucHJvdG90eXBlLmluaXRpYWxpemUuY2FsbCh0aGlzKX0sZ2V0TGFiZWxNb21lbnQ6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbnVsbD09PXR8fG51bGw9PT1lP251bGw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHRoaXMubGFiZWxNb21lbnRzW3RdP3RoaXMubGFiZWxNb21lbnRzW3RdW2VdOm51bGx9LGdldExhYmVsRGlmZjpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7cmV0dXJuIG51bGw9PT10fHxudWxsPT09ZT9udWxsOih2b2lkIDA9PT1hLmxhYmVsRGlmZnMmJmEuYnVpbGRMYWJlbERpZmZzKCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEubGFiZWxEaWZmc1t0XT9hLmxhYmVsRGlmZnNbdF1bZV06bnVsbCl9LGdldE1vbWVudFN0YXJ0T2Y6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm5cIndlZWtcIj09PWUub3B0aW9ucy50aW1lLnVuaXQmJmUub3B0aW9ucy50aW1lLmlzb1dlZWtkYXkhPT0hMT90LmNsb25lKCkuc3RhcnRPZihcImlzb1dlZWtcIikuaXNvV2Vla2RheShlLm9wdGlvbnMudGltZS5pc29XZWVrZGF5KTp0LmNsb25lKCkuc3RhcnRPZihlLnRpY2tVbml0KX0sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sYWJlbE1vbWVudHM9W107dmFyIGE9W107dC5jaGFydC5kYXRhLmxhYmVscyYmdC5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg+MD8oZS5lYWNoKHQuY2hhcnQuZGF0YS5sYWJlbHMsZnVuY3Rpb24oZSl7dmFyIGk9dC5wYXJzZVRpbWUoZSk7aS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmaS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxhLnB1c2goaSkpfSx0KSx0LmZpcnN0VGljaz1pLm1pbi5jYWxsKHQsYSksdC5sYXN0VGljaz1pLm1heC5jYWxsKHQsYSkpOih0LmZpcnN0VGljaz1udWxsLHQubGFzdFRpY2s9bnVsbCksZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihuLG8pe3ZhciByPVtdLGw9dC5jaGFydC5pc0RhdGFzZXRWaXNpYmxlKG8pO1wib2JqZWN0XCI9PXR5cGVvZiBuLmRhdGFbMF0mJm51bGwhPT1uLmRhdGFbMF0/ZS5lYWNoKG4uZGF0YSxmdW5jdGlvbihlKXt2YXIgYT10LnBhcnNlVGltZSh0LmdldFJpZ2h0VmFsdWUoZSkpO2EuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmEuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksci5wdXNoKGEpLGwmJih0LmZpcnN0VGljaz1udWxsIT09dC5maXJzdFRpY2s/aS5taW4odC5maXJzdFRpY2ssYSk6YSx0Lmxhc3RUaWNrPW51bGwhPT10Lmxhc3RUaWNrP2kubWF4KHQubGFzdFRpY2ssYSk6YSkpfSx0KTpyPWEsdC5sYWJlbE1vbWVudHMucHVzaChyKX0sdCksdC5vcHRpb25zLnRpbWUubWluJiYodC5maXJzdFRpY2s9dC5wYXJzZVRpbWUodC5vcHRpb25zLnRpbWUubWluKSksdC5vcHRpb25zLnRpbWUubWF4JiYodC5sYXN0VGljaz10LnBhcnNlVGltZSh0Lm9wdGlvbnMudGltZS5tYXgpKSx0LmZpcnN0VGljaz0odC5maXJzdFRpY2t8fGkoKSkuY2xvbmUoKSx0Lmxhc3RUaWNrPSh0Lmxhc3RUaWNrfHxpKCkpLmNsb25lKCl9LGJ1aWxkTGFiZWxEaWZmczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sYWJlbERpZmZzPVtdO3ZhciBhPVtdO3QuY2hhcnQuZGF0YS5sYWJlbHMmJnQuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoPjAmJmUuZWFjaCh0LmNoYXJ0LmRhdGEubGFiZWxzLGZ1bmN0aW9uKGUpe3ZhciBpPXQucGFyc2VUaW1lKGUpO2kuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmkuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksYS5wdXNoKGkuZGlmZih0LmZpcnN0VGljayx0LnRpY2tVbml0LCEwKSkpfSx0KSxlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGkpe3ZhciBuPVtdO1wib2JqZWN0XCI9PXR5cGVvZiBpLmRhdGFbMF0mJm51bGwhPT1pLmRhdGFbMF0/ZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlKXt2YXIgYT10LnBhcnNlVGltZSh0LmdldFJpZ2h0VmFsdWUoZSkpO2EuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmEuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksbi5wdXNoKGEuZGlmZih0LmZpcnN0VGljayx0LnRpY2tVbml0LCEwKSkpfSx0KTpuPWEsdC5sYWJlbERpZmZzLnB1c2gobil9LHQpfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGk9dGhpcztpLmN0eC5zYXZlKCk7dmFyIG49ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udFNpemUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplKSxvPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRTdHlsZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFN0eWxlKSxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRGYW1pbHksdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRGYW1pbHkpLGw9ZS5mb250U3RyaW5nKG4sbyxyKTtpZihpLmN0eC5mb250PWwsaS50aWNrcz1bXSxpLnVuaXRTY2FsZT0xLGkuc2NhbGVTaXplSW5Vbml0cz0wLGkub3B0aW9ucy50aW1lLnVuaXQpaS50aWNrVW5pdD1pLm9wdGlvbnMudGltZS51bml0fHxcImRheVwiLGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1tpLnRpY2tVbml0XSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApLGkudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLDEpO2Vsc2V7dmFyIHM9aS5pc0hvcml6b250YWwoKT9pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KTppLmhlaWdodC0oaS5wYWRkaW5nVG9wK2kucGFkZGluZ0JvdHRvbSksZD1pLnRpY2tGb3JtYXRGdW5jdGlvbihpLmZpcnN0VGljaywwLFtdKSx1PWkuY3R4Lm1lYXN1cmVUZXh0KGQpLndpZHRoLGM9TWF0aC5jb3MoZS50b1JhZGlhbnMoaS5vcHRpb25zLnRpY2tzLm1heFJvdGF0aW9uKSksaD1NYXRoLnNpbihlLnRvUmFkaWFucyhpLm9wdGlvbnMudGlja3MubWF4Um90YXRpb24pKTt1PXUqYytuKmg7dmFyIGY9cy91O2kudGlja1VuaXQ9aS5vcHRpb25zLnRpbWUubWluVW5pdCxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApLGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1tpLnRpY2tVbml0XTtmb3IodmFyIGc9MCxwPWEudW5pdHNbZ107ZzxhLnVuaXRzLmxlbmd0aDspe2lmKGkudW5pdFNjYWxlPTEsZS5pc0FycmF5KHAuc3RlcHMpJiZNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpPGUubWF4KHAuc3RlcHMpKXtmb3IodmFyIG09MDttPHAuc3RlcHMubGVuZ3RoOysrbSlpZihwLnN0ZXBzW21dPj1NYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpKXtpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSxwLnN0ZXBzW21dKTticmVha31icmVha31pZihwLm1heFN0ZXA9PT0hMXx8TWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKTxwLm1heFN0ZXApe2kudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLE1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZikpO2JyZWFrfSsrZyxwPWEudW5pdHNbZ10saS50aWNrVW5pdD1wLm5hbWU7dmFyIGI9aS5maXJzdFRpY2suZGlmZihpLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spLGkudGlja1VuaXQsITApLHY9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2suY2xvbmUoKS5hZGQoMSxpLnRpY2tVbml0KSkuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApO2kuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkrYit2LGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0c1twLm5hbWVdfX12YXIgeDtpZihpLm9wdGlvbnMudGltZS5taW4/eD1pLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spOihpLmZpcnN0VGljaz1pLmdldE1vbWVudFN0YXJ0T2YoaS5maXJzdFRpY2spLHg9aS5maXJzdFRpY2spLCFpLm9wdGlvbnMudGltZS5tYXgpe3ZhciB5PWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrKSxrPXkuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApOzA+az9pLmxhc3RUaWNrPWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrLmFkZCgxLGkudGlja1VuaXQpKTprPj0wJiYoaS5sYXN0VGljaz15KSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApfWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXQmJihpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdCksaS50aWNrcy5wdXNoKGkuZmlyc3RUaWNrLmNsb25lKCkpO2Zvcih2YXIgUz0xO1M8PWkuc2NhbGVTaXplSW5Vbml0czsrK1Mpe3ZhciB3PXguY2xvbmUoKS5hZGQoUyxpLnRpY2tVbml0KTtpZihpLm9wdGlvbnMudGltZS5tYXgmJncuZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQsITApPj0wKWJyZWFrO1MlaS51bml0U2NhbGU9PT0wJiZpLnRpY2tzLnB1c2godyl9dmFyIE09aS50aWNrc1tpLnRpY2tzLmxlbmd0aC0xXS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCk7KDAhPT1NfHwwPT09aS5zY2FsZVNpemVJblVuaXRzKSYmKGkub3B0aW9ucy50aW1lLm1heD8oaS50aWNrcy5wdXNoKGkubGFzdFRpY2suY2xvbmUoKSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLnRpY2tzWzBdLGkudGlja1VuaXQsITApKTooaS50aWNrcy5wdXNoKGkubGFzdFRpY2suY2xvbmUoKSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSkpLGkuY3R4LnJlc3RvcmUoKSxpLmxhYmVsRGlmZnM9dm9pZCAwfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQuZGF0YS5sYWJlbHMmJnQ8YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg/YS5jaGFydC5kYXRhLmxhYmVsc1t0XTpcIlwiO3JldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVswXSYmKGk9YS5nZXRSaWdodFZhbHVlKGEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKSksYS5vcHRpb25zLnRpbWUudG9vbHRpcEZvcm1hdCYmKGk9YS5wYXJzZVRpbWUoaSkuZm9ybWF0KGEub3B0aW9ucy50aW1lLnRvb2x0aXBGb3JtYXQpKSxpfSx0aWNrRm9ybWF0RnVuY3Rpb246ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXQuZm9ybWF0KHRoaXMuZGlzcGxheUZvcm1hdCksbz10aGlzLm9wdGlvbnMudGlja3Mscj1lLmdldFZhbHVlT3JEZWZhdWx0KG8uY2FsbGJhY2ssby51c2VyQ2FsbGJhY2spO3JldHVybiByP3IobixhLGkpOm59LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LnRpY2tNb21lbnRzPXQudGlja3MsdC50aWNrcz10LnRpY2tzLm1hcCh0LnRpY2tGb3JtYXRGdW5jdGlvbix0KX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPW51bGw7aWYodm9pZCAwIT09ZSYmdm9pZCAwIT09YSYmKG49aS5nZXRMYWJlbERpZmYoYSxlKSksbnVsbD09PW4mJih0JiZ0LmlzVmFsaWR8fCh0PWkucGFyc2VUaW1lKGkuZ2V0UmlnaHRWYWx1ZSh0KSkpLHQmJnQuaXNWYWxpZCYmdC5pc1ZhbGlkKCkmJihuPXQuZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSkpLG51bGwhPT1uKXt2YXIgbz0wIT09bj9uL2kuc2NhbGVTaXplSW5Vbml0czpuO2lmKGkuaXNIb3Jpem9udGFsKCkpe3ZhciByPWkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpLGw9cipvK2kucGFkZGluZ0xlZnQ7cmV0dXJuIGkubGVmdCtNYXRoLnJvdW5kKGwpfXZhciBzPWkuaGVpZ2h0LShpLnBhZGRpbmdUb3AraS5wYWRkaW5nQm90dG9tKSxkPXMqbytpLnBhZGRpbmdUb3A7cmV0dXJuIGkudG9wK01hdGgucm91bmQoZCl9fSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tNb21lbnRzW3RdLG51bGwsbnVsbCl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuaXNIb3Jpem9udGFsKCk/ZS53aWR0aC0oZS5wYWRkaW5nTGVmdCtlLnBhZGRpbmdSaWdodCk6ZS5oZWlnaHQtKGUucGFkZGluZ1RvcCtlLnBhZGRpbmdCb3R0b20pLG49KHQtKGUuaXNIb3Jpem9udGFsKCk/ZS5sZWZ0K2UucGFkZGluZ0xlZnQ6ZS50b3ArZS5wYWRkaW5nVG9wKSkvYTtyZXR1cm4gbio9ZS5zY2FsZVNpemVJblVuaXRzLGUuZmlyc3RUaWNrLmNsb25lKCkuYWRkKGkuZHVyYXRpb24obixlLnRpY2tVbml0KS5hc1NlY29uZHMoKSxcInNlY29uZHNcIil9LHBhcnNlVGltZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlLm9wdGlvbnMudGltZS5wYXJzZXI/aSh0LGUub3B0aW9ucy50aW1lLnBhcnNlcik6XCJmdW5jdGlvblwiPT10eXBlb2YgZS5vcHRpb25zLnRpbWUucGFyc2VyP2Uub3B0aW9ucy50aW1lLnBhcnNlcih0KTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmdldE1vbnRofHxcIm51bWJlclwiPT10eXBlb2YgdD9pKHQpOnQuaXNWYWxpZCYmdC5pc1ZhbGlkKCk/dDpcInN0cmluZ1wiIT10eXBlb2YgZS5vcHRpb25zLnRpbWUuZm9ybWF0JiZlLm9wdGlvbnMudGltZS5mb3JtYXQuY2FsbD8oY29uc29sZS53YXJuKFwib3B0aW9ucy50aW1lLmZvcm1hdCBpcyBkZXByZWNhdGVkIGFuZCByZXBsYWNlZCBieSBvcHRpb25zLnRpbWUucGFyc2VyLiBTZWUgaHR0cDovL25ubmljay5naXRodWIuaW8vQ2hhcnQuanMvZG9jcy12Mi8jc2NhbGVzLXRpbWUtc2NhbGVcIiksZS5vcHRpb25zLnRpbWUuZm9ybWF0KHQpKTppKHQsZS5vcHRpb25zLnRpbWUuZm9ybWF0KX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcInRpbWVcIixvLG4pfX0sezE6MX1dfSx7fSxbN10pKDcpfSk7IiwiLy9QbGF0Zm9ybSBMb2dvJ3NcbmZ1bmN0aW9uIFBsYXRmb3JtTG9nbyhwbGF0Zm9ybW5hYW0pXG57XG4gICAgcGxhdGZvcm1uYWFtID0gcGxhdGZvcm1uYWFtLnRvVXBwZXJDYXNlKCk7XG4gICAgc3dpdGNoIChwbGF0Zm9ybW5hYW0pXG4gICAge1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHBsYXRmb3JtbmFhbTtcblxuICAgICAgICAvL3BsYXRmb3JtcyAtIHNwZWxjb21wdXRlcnNcbiAgICAgICAgY2FzZSBcIlBTMVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMS5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJQUzNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczMucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiUFMyXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMyLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlBTNFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzNC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJQQ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3dpbmRvd3MucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiWEJPWFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3hib3gucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiTkVTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmVzLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIk42NFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL242NC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJOSU5URU5ETyBTV0lUQ0hcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9zd2l0Y2gucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiTkdDXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbmdjLnBuZycgLz5cIjtcblxuICAgICAgICAvL3B1Ymxpc2hlcnMgLSB1aXRnZXZlcnNcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9uaW50ZW5kby5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJVQklTT0ZUXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy91Ymlzb2Z0LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIkVMRUNUUk9OSUMgQVJUU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvZWEucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiU09OWVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc29ueS5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJST0NLU1RBUlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvcm9ja3N0YXIucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiU0VHQVwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvc2VnYS5wbmcnIC8+XCI7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBCZXNjaGlrYmFhcmhlaWRLbGV1cihzdG9ja3ZhbHVlKXtcbiAgICBcbiAgICAgICAgaWYgKHN0b2NrdmFsdWU8PTApIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9ucmVkLnBuZycgLz5cIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdG9ja3ZhbHVlPj0xKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbmdyZWVuLnBuZycgLz5cIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9ja3ZhbHVlXG4gICAgICAgIH1cbn0iLCIkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiYS5vcmRlcl9fbmF2aWdhdGVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImRpc2FibGVkXCIpID09IGZhbHNlKVxuICAgIHtcbiAgICAgICAgLy8gR2V0IHRoZSBvcmRlciBzdGVwXG4gICAgICAgIHZhciBzdGVwID0gICQodGhpcykuZGF0YShcInN0ZXBcIik7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBuZXcgb3JkZXIgc3RlcCBhcyBhY3RpdmVcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuXCIgKyBzdGVwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcbiAgICAgICAgJChcIiNcIiArIHN0ZXApLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcbiAgICB9XG59KVxuXG4kKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcInNlbGVjdCNzaGlwcGluZ19tZXRob2RcIiwgZnVuY3Rpb24gKGUpXG57XG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XG5cbiAgICBpZiAodmFsICE9IFwiXCIpXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuXG4gICAgJChcIi5zaGlwcGluZ19fZmllbGRzXCIpLmhpZGUoKTtcbiAgICAkKFwiLlwiICsgdmFsICsgXCJfZmllbGRzXCIpLnNob3coKTtcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3BheW1lbnRfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxue1xuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgaWYgKHZhbCAhPSBcIlwiKVxuICAgIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgXG4gICAgfVxufSk7IiwidmFyIFJvdXRlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgYmFzZVVybCA9IFwicHJvamVjdC13ZWJzaG9wL1wiO1xuXG4gICAgZnVuY3Rpb24gcm91dGUodXJsLCBoaXN0b3J5KVxuICAgIHtcbiAgICAgICAgaWYgKGlzSW50ZXJuYWwodXJsKSA9PSBmYWxzZSB8fCB1cmwgPT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IGdldFBhcnRpY2xlcyh1cmwpO1xuXG4gICAgICAgIHN3aXRjaChwYXJ0aWNsZXNbMF0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhc2UgXCJcIjpcbiAgICAgICAgICAgIGNhc2UgXCJpbmRleC5odG1sXCI6XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdHNcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdHNDb250cm9sbGVyKG5ldyBQcm9kdWN0c1ZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RzTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHJvZHVjdENvbnRyb2xsZXIobmV3IFByb2R1Y3RWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dpblwiOlxuICAgICAgICAgICAgICAgIG5ldyBMb2dpbkNvbnRyb2xsZXIobmV3IExvZ2luVmlld0hlbHBlcigpLCBuZXcgTG9naW5Nb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9nb3V0XCI6XG4gICAgICAgICAgICAgICAgbmV3IExvZ291dENvbnRyb2xsZXIobmV3IExvZ291dFZpZXdIZWxwZXIoKSwgbmV3IExvZ291dE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVzZXRwYXNzd29yZFwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZXNldFBhc3N3b3JkQ29udHJvbGxlcihuZXcgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIoKSwgbmV3IFJlc2V0UGFzc3dvcmRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwid2lzaGxpc3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgV2lzaGxpc3RDb250cm9sbGVyKG5ldyBXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFdpc2hsaXN0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInN0YXRzXCI6XG4gICAgICAgICAgICAgICAgbmV3IFN0YXRzQ29udHJvbGxlcihuZXcgU3RhdHNWaWV3SGVscGVyKCksIG5ldyBTdGF0c01vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pblwiOlxuICAgICAgICAgICAgICAgIG5ldyBBZG1pbkNvbnRyb2xsZXIobmV3IEFkbWluVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Nb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5fdXNlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBBZG1pblVzZXJDb250cm9sbGVyKG5ldyBBZG1pblVzZXJWaWV3SGVscGVyKCksIG5ldyBBZG1pblVzZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZmF2b3JpdGVsaXN0XCI6IFxuICAgICAgICAgICAgICAgIG5ldyBGYXZvcml0ZUxpc3RDb250cm9sbGVyKG5ldyBGYXZvcml0ZUxpc3RWaWV3SGVscGVyKCksIG5ldyBGYXZvcml0ZUxpc3RNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tvdXRcIjpcbiAgICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRDb250cm9sbGVyKG5ldyBDaGVja291dFZpZXdIZWxwZXIoKSwgbmV3IENoZWNrb3V0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm9yZGVyc1wiOlxuICAgICAgICAgICAgICAgIG5ldyBPcmRlcnNDb250cm9sbGVyKG5ldyBPcmRlcnNWaWV3SGVscGVyLCBuZXcgT3JkZXJzTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm9yZGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyQ29udHJvbGxlcihuZXcgT3JkZXJWaWV3SGVscGVyLCBuZXcgT3JkZXJNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHVibGljX3dpc2hsaXN0XCI6XG4gICAgICAgICAgICAgICAgbmV3IFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlcihuZXcgUHVibGljV2lzaGxpc3RWaWV3SGVscGVyKCksIG5ldyBQdWJsaWNXaXNobGlzdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgbmV3IEVycm9yQ29udHJvbGxlcihuZXcgRXJyb3JWaWV3SGVscGVyKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXN0b3J5ICE9IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodXJsICE9IFwiXCIgJiYgdHlwZW9mIHVybCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd3JpdGVIaXN0b3J5KHt9LCBcIkEtWiBHYW1lc1wiLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgLy8gTG9hZCBzY3JlZW4gYW5kIGNsb3NlIGNhcnRcbiAgICAgICAgICAgICAgICAkKFwiLnNpZGViYXJcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgICQoXCIub3ZlcmxheVwiKS5yZW1vdmVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICAgICAgICAgIHNob3dMb2FkU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBvZiBwYWdlXG4gICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNJbnRlcm5hbCh1cmwpXG4gICAge1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCJodHRwXCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwid3d3XCIpICE9IC0xIHx8IHVybC5pbmRleE9mKFwibWFpbHRvXCIpICE9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhcnRpY2xlcyh1cmwpXG4gICAge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IC9cbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiL1wiKSA9PSAwKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBiYXNlIHVybCBzZXQsIHJlbW92ZSB0aGUgYmFzZSB1cmxcbiAgICAgICAgaWYgKHRoaXMuYmFzZVVybCAhPSBudWxsICYmIHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgIT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcodXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSArIHRoaXMuYmFzZVVybC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybC5zcGxpdCgvXFwvKC4rKT8vKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdyaXRlSGlzdG9yeShvYmplY3QsIHRpdGxlLCB1cmwpXG4gICAge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUob2JqZWN0LCB0aXRsZSwgdXJsKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByb3V0ZTogcm91dGVcbiAgICB9XG59IiwiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKVxue1xuICAgICQoXCIuc2lkZWJhci10b2dnbGVcIikuY2xpY2soZnVuY3Rpb24gKGUpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgY2xpY2sgYWN0aW9uXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBJZCBvZiB0aGUgc2lkZWJhciB0byB0b2dnbGVcbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpLmRhdGEoXCJzaWRlYmFyXCIpO1xuXG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIiNcIiArIHNpZGViYXIpKTtcbiAgICB9KTtcblxuICAgICQoXCIuc2lkZWJhcl9fY2xvc2VcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpKTtcbiAgICB9KVxuXG4gICAgJChcIi5vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJChcIi5zaWRlYmFyXCIpLCB0cnVlKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHRvZ2dsZVNpZGViYXIoc2lkZWJhciwgZm9yY2VDbG9zZSlcbiAgICB7XG4gICAgICAgIGlmIChmb3JjZUNsb3NlKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHNpZGViYXIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTsgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoc2lkZWJhcikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChcIi5vdmVybGF5XCIpLnRvZ2dsZUNsYXNzKFwib3ZlcmxheS0tdmlzaWJsZVwiKTtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpO1xuICAgIH1cbn0pOyIsIiQoZG9jdW1lbnQpLm9uKFwibW91c2VlbnRlclwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KVxue1xuICAgIC8vIEdldCBjb250ZW50IGFuZCBwb3NpdGlvblxuICAgIHZhciBjb250ZW50ICA9ICQodGhpcykuZGF0YShcInRvb2x0aXBcIik7XG4gICAgdmFyIHBvc2l0aW9uID0gZ2V0T2Zmc2V0KHRoaXMpO1xuXG4gICAgLy8gQ3JlYXRlIHRvb2x0aXBcbiAgICB2YXIgdG9vbHRpcCA9ICQoXCI8ZGl2IGNsYXNzPSd0b29sdGlwJz5cIiArIGNvbnRlbnQgKyBcIjwvZGl2PlwiKTtcbiAgICAkKFwiYm9keVwiKS5hcHBlbmQodG9vbHRpcCk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbmV3IHBvc2l0aW9uc1xuICAgIHBvc2l0aW9uLnRvcCAgPSBwb3NpdGlvbi50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XG4gICAgcG9zaXRpb24ubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAoJCh0aGlzKS5vdXRlcldpZHRoKCkgLyAyKSAtICgkKFwiLnRvb2x0aXBcIikub3V0ZXJXaWR0aCgpIC8gMik7XG5cbiAgICAvLyBDaGFuZ2UgcG9zaXRpb24gb2YgdG9vbHRpcFxuICAgIHRvb2x0aXAuY3NzKFwibGVmdFwiLCBwb3NpdGlvbi5sZWZ0KTtcbiAgICB0b29sdGlwLmNzcyhcInRvcFwiLCBwb3NpdGlvbi50b3ApO1xufSk7XG5cbiQoZG9jdW1lbnQpLm9uKFwibW91c2VsZWF2ZVwiLCBcIi5oYXNUb29sdGlwXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJChcImJvZHlcIikuZmluZChcIi50b29sdGlwXCIpLnJlbW92ZSgpO1xufSk7XG5cbmZ1bmN0aW9uIGdldE9mZnNldChlbClcbntcbiAgICBlbCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGxlZnQ6IGVsLmxlZnQgKyB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgdG9wOiBlbC50b3AgKyB3aW5kb3cuc2Nyb2xsWVxuICB9XG59IiwiLyoqXG4gKiBIZWxwZXIgZm9yIGZpbmRpbmcsIGNyZWF0aW5nIGFuZCBkZWxldGluZyBjb29raWVzXG4gKi9cbmZ1bmN0aW9uIENvb2tpZUhlbHBlcigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5nZXRDb29raWUgPSBmdW5jdGlvbihuYW1lKVxuICAgIHtcbiAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBjb29raWUgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcblxuICAgICAgICAgICAgaWYgKGNvb2tpZVswXS50cmltKCkgPT0gbmFtZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29va2llWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgIFZhbHVlIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRoaXMuY3JlYXRlQ29va2llID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpXG4gICAge1xuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgxKjI0KjYwKjYwKjEwMDApKTtcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrIGQudG9VVENTdHJpbmcoKTtcblxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgJz0nICsgdmFsdWUgKyAnOycgKyBleHBpcmVzICsgJztwYXRoPS8nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIGNvb2tpZSBhbmQgaXQncyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRoaXMuZGVsZXRlQ29va2llID0gZnVuY3Rpb24obmFtZSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuICAgIH1cbn0iLCIvKipcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIEZhdm9yaXRlTGlzdEhlbHBlcigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgUHJvZGN1dCBJRCB0byByZW1vdmUgZm9tIHRoZSBjYXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgLy90aGlzLmFkZEl0ZW0gPSBmdW5jdGlvbihlYW5fbnVtYmVyKVxuICAgIHZhciBhZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIGZhdm9yaWV0ZW4uXCIpOyAvLyBpbSBzdGFhdCB2b29yIGltYWdpbmFyeS9kZW5rYmVlbGRpZ1xuICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IGlzIGFsIGluIGplIGZhdm9yaWV0ZW4uXCIpO1xuICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbVxuICAgIH1cbn0iLCJ2YXIgUm91dGVyICAgICAgID0gbmV3IFJvdXRlcigpO1xudmFyIENvb2tpZUhlbHBlciA9IG5ldyBDb29raWVIZWxwZXIoKTtcbnZhciBVc2VySGVscGVyICAgICA9IG5ldyBVc2VySGVscGVyKCk7XG52YXIgV2lzaGxpc3RIZWxwZXIgPSBuZXcgV2lzaGxpc3RIZWxwZXIoKTtcblxuZnVuY3Rpb24gc2hvd0xvYWRTY3JlZW4oKVxue1xuICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PGRpdiBjbGFzcz1cImJvdW5jZTFcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlMlwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UzXCI+PC9kaXY+IDwvZGl2PicpO1xufVxuXG5cbmZ1bmN0aW9uIG9uTG9hZFBhZ2UoKVxue1xuICAgICQoXCIubW1lbnVcIikuZW1wdHkoKTtcbiAgICAkKFwiLm5hdlwiKS5jbG9uZSgpLmFwcGVuZFRvKFwiLm1tZW51XCIpO1xuXG4gICAgaWYgKFVzZXJIZWxwZXIuaXNBZG1pbigpKVxuICAgIHtcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoVXNlckhlbHBlci5pc0N1c3RvbWVyKCkpXG4gICAge1xuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuaGlkZSgpO1xuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI2lubG9nZ2VuX3RleHRcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgIH1cbn0iLCIkLmZuLnNlcmlhbGl6ZU9iamVjdCA9IGZ1bmN0aW9uKClcbntcbiAgICB2YXIgbyA9IHt9O1xuICAgIHZhciBhID0gdGhpcy5zZXJpYWxpemVBcnJheSgpO1xuICAgICQuZWFjaChhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKG9bdGhpcy5uYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIW9bdGhpcy5uYW1lXS5wdXNoKSB7XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gW29bdGhpcy5uYW1lXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXS5wdXNoKHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG87XG59OyIsIi8qKlxuICogSGVscGVyIGZvciB1c2VyIHJlbGF0ZWQgc3R1ZmZcbiAqL1xuZnVuY3Rpb24gVXNlckhlbHBlcigpXG57XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaXMgYSBndWVzdCAobm90IGxvZ2dlZCBpbilcbiAgICAgKi9cbiAgICB0aGlzLmlzTG9nZWRJbiA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgIFxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4gIT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VuICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYSBjdXN0b21lclxuICAgICAqL1xuICAgIHRoaXMuaXNDdXN0b21lciA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgdXNlcnR5cGUgPSB0aGlzLmRlY29kZVRva2VuKCkudXNlcnR5cGU7XG5cbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImN1c3RvbWVyXCIgfHwgdXNlcnR5cGUgPT0gXCJhZG1pblwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgYWRtaW5cbiAgICAgKi9cbiAgICB0aGlzLmlzQWRtaW4gPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xuXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJhZG1pblwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY29kZSB0aGUgSldUIHRva2VuXG4gICAgICovXG4gICAgdGhpcy5kZWNvZGVUb2tlbiA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XG5cbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAgIT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBhY2Nlc3NUb2tlbi5zcGxpdChcIi5cIilbMV07XG5cbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IocGF5bG9hZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudCB1c2VyXG4gICAgICovXG4gICAgdGhpcy5nZXRVc2VySW5mbyA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9sb2dpblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG59IiwiLyoqXG4gKiBIZWxwZXIgZm9yIGNhcnQgYWN0aW9uc1xuICovXG5mdW5jdGlvbiBXaXNobGlzdEhlbHBlcigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSB2YWx1ZSBvZiBhIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAgUHJvZGN1dCBJRCB0byByZW1vdmUgZm9tIHRoZSBjYXJcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgZWFuX251bWJlcixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHt9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiSGV0IHByb2R1Y3QgaXMgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIHZlcmxhbmdsaWpzdC5cIik7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRGl0IHByb2R1Y3Qgc3RhYXQgYWwgb3AgamUgdmVybGFuZ2xpanN0LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jb3B5TGluayA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIC8vIFNlbGVjdCB0aGUgY29udGVudFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXQjcHVibGljX2xpbmtcIikuc2VsZWN0KCk7XG4gICAgICAgIC8vIENvcHkgdG8gdGhlIGNsaXBib2FyZFxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIH1cbn0iLCJ2YXIgQWRtaW5Nb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vyc1wiLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXG4gICAgfVxuXG59OyIsInZhciBBZG1pblVzZXJNb2RlbCA9IGZ1bmN0aW9uKGlkKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcbiAgICAgICAgZGF0YS5kYXRlX29mX2JpcnRoID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0YS5qYWFyLCBkYXRhLm1hYW5kLCBkYXRhLmRhZykpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB5ZWFyLCBtb250aCBhbmQgZGF5XG4gICAgICAgIGRlbGV0ZSBkYXRhLmphYXI7XG4gICAgICAgIGRlbGV0ZSBkYXRhLm1hYW5kO1xuICAgICAgICBkZWxldGUgZGF0YS5kYWc7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIGRhdGEudXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJQQVRDSFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIHVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZSxcbiAgICAgICAgc2F2ZVVzZXJJbmZvOiBzYXZlVXNlckluZm8sXG4gICAgICAgIGRlbGV0ZVVzZXI6IGRlbGV0ZVVzZXJcbiAgICB9XG59IiwidmFyIENhcnRNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRDYXJ0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgdmFyIGNhcnQgPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKTtcblxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcHJvZHVjdCB0byB0aGUgY2FydCBjb29raWUgYW5kIGRhdGFiYXNlIGlmIHRoZSB1c2VyIGlzIHJlZ2lzdGVyZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRQcm9kdWN0KGlkLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHMvXCIgKyBpZCxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhcnQgPSB7ZWFuX251bWJlcjpkYXRhWzBdLmVhbl9udW1iZXIsIHRpdGxlOmRhdGFbMF0udGl0bGUsIHByaWNlOmRhdGFbMF0ucHJpY2UsIGltYWdlOmRhdGFbMF0uaW1hZ2V9O1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBjYXJ0IGluIGNvb2tpZXNcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudENhcnQgPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q2FydCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShbY2FydF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcnQgPSBKU09OLnBhcnNlKGN1cnJlbnRDYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhcnQucHVzaChjYXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjdXJyZW50Q2FydCkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBpdGVtIGZyb20gdGhlIGNhcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2ludH0gaWQgUHJvZHVjdCBpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBjYXJ0ID0gSlNPTi5wYXJzZShDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKSk7XG5cbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKGNhcnRbaV0uZWFuX251bWJlciA9PSBpZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXJ0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0Q2FydDogZ2V0Q2FydCxcbiAgICAgICAgYWRkUHJvZHVjdDogYWRkUHJvZHVjdCxcbiAgICAgICAgcmVtb3ZlUHJvZHVjdDogcmVtb3ZlUHJvZHVjdFxuICAgIH1cbn07IiwidmFyIENoZWNrb3V0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0T3JkZXJJbmZvcm1hdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHZhciBjYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZSgnY2FydCcpO1xuXG4gICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKEpTT04ucGFyc2UoY2FydCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY2FsbGJhY2soW10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2F2ZU9yZGVyKG9yZGVyRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAvLyBBcHBlbmQgZGF0YSBmb3JtIG90aGVyIHNvdXJjZXNcbiAgICAgICAgb3JkZXJEYXRhLnN0YXR1cyAgICAgICAgID0gXCJwYWlkXCI7XG4gICAgICAgIG9yZGVyRGF0YS5idHdfcGVyY2VudGFnZSA9IDIxO1xuICAgICAgICBvcmRlckRhdGEub3JkZXJfZGF0ZSAgICAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBvcmRlckRhdGEuZGVsaXZlcnlfY29zdHMgPSAzLjk1O1xuICAgICAgICBvcmRlckRhdGEuY2FydCAgICAgICAgICAgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShvcmRlckRhdGEpLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImNhcnRcIik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9yZGVySW5mb3JtYXRpb246IGdldE9yZGVySW5mb3JtYXRpb24sXG4gICAgICAgIHNhdmVPcmRlcjogc2F2ZU9yZGVyXG4gICAgfVxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0RmF2b3JpdGVMaXN0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3RcIiwgLy8gXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3RcIlxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRGYXZvcml0ZUxpc3QgYWpheCBkb25lXCIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1xuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAvLyBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTsgLy9tb2V0IGRhdGEgcGVyIHNlIG1lZWdldmVuIGFhbiBjYWxsYmFjaz9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRGYXZvcml0ZUxpc3Q6IGdldEZhdm9yaXRlTGlzdCxcbiAgICAgICAgZGVsZXRlRnJvbUZhdm9yaXRlTGlzdDogZGVsZXRlRnJvbUZhdm9yaXRlTGlzdFxuICAgIH1cbn07IiwidmFyIExvZ2luTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9sb2dpblwiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmFzaWMgXCIgKyBidG9hKGVtYWlsICsgXCI6XCIgKyBwYXNzd29yZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIHB1dCB0b2tlbiBpbiBjb29raWVcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiYWNjZXNzX3Rva2VuXCIsIGRhdGEuYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwidXNlcl9pZFwiLCBkYXRhLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeGhyLnN0YXR1cyA9PSA0MDMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX2Jsb2NrZWRfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBsb2dpblxuICAgIH1cbn07IiwidmFyIExvZ291dE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ291dChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJ1c2VyX2lkXCIpO1xuXG4gICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgb25Mb2FkUGFnZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dvdXQ6IGxvZ291dFxuICAgIH1cbn07IiwidmFyIE9yZGVyTW9kZWwgPSBmdW5jdGlvbihvcmRlcl9pZClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9yZGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXIoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVycy9cIiArIG9yZGVyX2lkLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3QvXCIgKyBlYW5fbnVtYmVyLCAvLyBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIlxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9yZGVyOiBnZXRPcmRlcixcbiAgICAgICAgYWRkVG9GYXZvcml0ZUxpc3Q6IGFkZFRvRmF2b3JpdGVMaXN0XG4gICAgfVxufTsiLCJ2YXIgT3JkZXJzTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBvcmRlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPcmRlcnM6IGdldE9yZGVycyxcbiAgICB9XG59OyIsInZhciBQcm9kdWN0c01vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxuICAgIH1cbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbih1c2VyX2lkKVxue1xuICAgIHRoaXMuZ2V0UHVibGljV2lzaGxpc3QgPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdXNlcl9pZCxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcbiAgICAgICAgZm9ybURhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGZvcm1EYXRhLmphYXIsIGZvcm1EYXRhLm1hYW5kLCBmb3JtRGF0YS5kYWcpKTtcblxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxuICAgICAgICBkZWxldGUgZm9ybURhdGEuamFhcjtcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLm1hYW5kO1xuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUgOiBmb3JtRGF0YS52b29ybmFhbSxcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxuICAgICAgICAgICAgICAgIHN1cm5hbWUgOiBmb3JtRGF0YS5hY2h0ZXJuYWFtLFxuICAgICAgICAgICAgICAgIGdlbmRlciA6IGZvcm1EYXRhLmdlbmRlcixcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YS5tb2JpZWxfbnVtbWVyLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBmb3JtRGF0YS5wb3N0Y29kZSxcbiAgICAgICAgICAgICAgICBudW1iZXIgOiBmb3JtRGF0YS5odWlzbnVtbWVyLFxuICAgICAgICAgICAgICAgIHN0cmVldF9uYW1lIDogZm9ybURhdGEuc3RyYWF0bmFhbSxcbiAgICAgICAgICAgICAgICBjaXR5IDogZm9ybURhdGEucGxhYXRzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChmb3JtRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXG4gICAgICAgICAgICAgICAgcmVwZWF0X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZDJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcbiAgICB9XG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXG57XG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXG4gICAgfVxufTsiLCJ2YXIgU3RhdHNNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEocmFuZ2UsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9zdGF0cy90b3BnYW1lcz9yYW5nZT1cIiArIHJhbmdlLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmFuZ2UsIGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdyYXBoRGF0YTogZ2V0R3JhcGhEYXRhXG4gICAgfVxuXG59OyIsInZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbih1c2VyaWQpXG57XG4gICAgZnVuY3Rpb24gR2V0VXNlckluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJzL1wiICsgdXNlcmlkLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0VXNlckluZm86IEdldFVzZXJJbmZvXG4gICAgfVxufTsiLCJ2YXIgV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3RcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb1dpc2hsaXN0KHZpZXdEYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSAvKisgXCIvXCIgKyB2aWV3RGF0YS5lYW5fbnVtYmVyKi8sXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaWQgOiB2aWV3RGF0YS53aXNobGlzdF9pZCxcbiAgICAgICAgICAgICAgICAvL2Vhbl9udW1iZXIgOiB2aWV3RGF0YS5lYW5fbnVtYmVyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tV2lzaGxpc3QoZWFuLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgU3RyaW5nKGVhbiksXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHZhciBnbyA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBuZXdEQlN0YXR1cyA9IFwiMFwiO1xuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpe1xuICAgICAgICAgICAgbmV3REJTdGF0dXMgPSBcIjFcIjtcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpe1xuICAgICAgICAgICAgZ28gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdTdGF0dXMgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIG5ld1N0YXR1cyA9IFwiICsgbmV3U3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnbylcbiAgICAgICAge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3Qvc3dpdGNoX3B1YmxpY1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0Y2hcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcIm5ld0RCU3RhdHVzXCI6bmV3REJTdGF0dXN9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRXaXNobGlzdDogZ2V0V2lzaGxpc3QsXG4gICAgICAgIGFkZFRvV2lzaGxpc3Q6IGFkZFRvV2lzaGxpc3QsXG4gICAgICAgIGRlbGV0ZUZyb21XaXNobGlzdDogZGVsZXRlRnJvbVdpc2hsaXN0LFxuICAgICAgICBzd2l0Y2hQdWJsaWNTdGF0ZTogc3dpdGNoUHVibGljU3RhdGVcbiAgICB9XG59OyIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpOyAvL1wiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBBZG1pblVzZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICB2aWV3SGVscGVyLnNldFNhdmVMaXN0ZW5lcihzYXZlVXNlckluZm8pO1xuICAgICAgICB2aWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZVVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXG4gICAge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZU9iamVjdCgpO1xuXG4gICAgICAgIE1vZGVsLnNhdmVVc2VySW5mbyhmb3JtRGF0YSwgZnVuY3Rpb24oZm9ybURhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlZGVsZXRlLlwiKTtcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q2FydCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRDYXJ0KGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaXRlbSB0byB0aGUgY2FydCBhbmQgcGFzcyBpdCB0byB0aGUgdmlld0hlbHBlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCAgSXRlbSBpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmFkZEl0ZW0oZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxuICAgIHtcbiAgICAgICAgTW9kZWwucmVtb3ZlUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldENhcnQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRQcm9kdWN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBDaGVja291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJJbmZvcm1hdGlvbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcmRlcihldmVudClcbiAgICB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplT2JqZWN0KCk7XG5cbiAgICAgICAgTW9kZWwuc2F2ZU9yZGVyKGZvcm1EYXRhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuZmluaXNoT3JkZXIoKTtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuY2xlYXJDYXJ0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRPcmRlckxpc3RlbmVyKG9yZGVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgRGVsZXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBcbiAgICB9XG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXG57XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIEZhdm9yaXRlTGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEZhdm9yaXRlTGlzdCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbUZhdm9yaXRlTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RmF2b3JpdGVMaXN0KClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldEZhdm9yaXRlTGlzdChzZXRWaWV3KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XG5cbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcInByb2R1Y3RzXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dvdXRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgT3JkZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldE9yZGVyKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXIoYWRkVG9GYXZvcml0ZUxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRUb0Zhdm9yaXRlTGlzdChlYW5fbnVtYmVyLCBmdW5jdGlvbiBvblN1Y2Nlc3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcbiAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTtcbiIsInZhciBPcmRlcnNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldE9yZGVycyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQdWJsaWNXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcblxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBtYWluXCIpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFB1YmxpY1dpc2hsaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQdWJsaWNXaXNobGlzdCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQdWJsaWNXaXNobGlzdChzZXRWaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxuXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcbiAgICAgICAgeyBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG5cbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcImVfbWFpbGFkcmVzXCIsXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcblxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgICQoXCIjcmVzZXRfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL2FmdGVyX3Jlc2V0Lmh0bWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgIFxuICAgICAgICAvLyBzZXQgdmlldyB0byByZXNldCBwYXNzd29yZCBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcblxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTtcblxuXG5cblxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cblxuXG5cblxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIudWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBXZWVyZ2VlZiBlZW4gYW5kZXJlIHBhZ2luYSBnZWJhc3NlZXJkIG9wICdhZG1pbicgb2YgJ3JlZ2lzdGVyZWQgdXNlcidcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxuICAgIGZ1bmN0aW9uIHNob3dWaWV3KGRhdGEpXG4gICAge1xuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XG4gICAgICAgIC8vIDEpIHVzZXIgY2xpY2tzIG9uIGEgcHJvZHVjdCBcbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxuICAgICAgICAvLyA0KSB2aWV3IHNob3dzIGluZm9cblxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgLy8gMykgc3lzdGVtIHB1dHMgaW5mbyBpbiBodG1sXG4gICAgICAgIG1vZGVsLkdldFByb2R1Y3RJbmZvKHNob3dWaWV3KTtcblxuXG5cbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0VmlldygpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW4sXG4gICAgICAgIHNob3dWaWV3IDogc2hvd1ZpZXdcbiAgICB9XG59OyIsInZhciBTdGF0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0R3JhcGhEYXRhKTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihnZXRDaGFuZ2VkVG9wVGVuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0R3JhcGhEYXRhKFwicXVhcnRlclwiLCBzZXRUb3BUZW5WaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VG9wVGVuVmlldyhyYW5nZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VG9wVGVuVmlldyhyYW5nZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2hhbmdlZFRvcFRlbihyYW5nZSlcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldEdyYXBoRGF0YShyYW5nZSwgc2V0VG9wVGVuVmlldyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCIiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFdpc2hsaXN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tV2lzaGxpc3QpO1xuICAgICAgICBWaWV3SGVscGVyLnNldFB1YmxpY0xpc3RlbmVyKHN3aXRjaFB1YmxpY1N0YXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRXaXNobGlzdChzZXRWaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLmhpZGVJdGVtKGRpdl90b19oaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzKVxuICAgIHtcbiAgICAgICAgTW9kZWwuc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzLCBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIEFkbWluVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9ICQoJyNzaW5nbGVfdXNlcicpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuaHRtbCh2YWx1ZS5maXJzdF9uYW1lKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZmlyc3RuYW1lXCIpLmF0dHIoJ2hyZWYnLCAnL2FkbWluX3VzZXIvJyArIHZhbHVlLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19pbnNlcnRpb25cIikuaHRtbCh2YWx1ZS5pbnNlcnRpb24pO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19sYXN0bmFtZVwiKS5odG1sKHZhbHVlLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19lbWFpbFwiKS5odG1sKHZhbHVlLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fcGhvbmVudW1iZXJcIikuaHRtbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgJChcIiN1c2Vyc19ib2R5XCIpLmFwcGVuZCh1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3NpbmdsZV91c2VyXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICB9XG59XG5cbiAgICAvL2RhdCBoaWVyb25kZXIgemF0IGFhcmRpZyB3YXQgd2VyayBpbi4uLiBEb25hbGQgd2lsIG5vZyBmZiBob3VkZW5cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dVc2VycyhkYXRhKVxuICAgIC8vIHtcbiAgICAvLyAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgLy8gICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgdmFyIHRhYmxlID0gJChcIjx0YWJsZSBpZD0ndXNlcnNfdGFibGUnPjwvdGFibGU+XCIpO1xuXG4gICAgLy8gICAgICAgICAvLyB0YWJsZSBoZWFkZXJcbiAgICAvLyAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZD5Wb29ybmFhbTwvdGQ+PHRkPlR1c3NlbnY8L3RkPjx0ZD5BY2h0ZXJuYWFtPC90ZD48dGQ+R2VicnVpa2Vyc25hYW08L3RkPjx0ZD5lbWFpbDwvdGQ+PHRkPnR5cGU8L3RkPicpO1xuXG4gICAgLy8gICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24obnVtYmVyciwgdXNlcikgXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xuICAgIC8vICAgICAgICAgICAgICQuZWFjaCh1c2VyLCBmdW5jdGlvbihrZXksIHZhbHVlKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZClcbiAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikuaHRtbChTdHJpbmcodmFsdWUpKSApO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikgKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgdGFibGUuYXBwZW5kKHJvdyk7XG4gICAgLy8gICAgICAgICAgICAgLy8gLy9mb3IgYWRkaXRpb25hbCB1c2VyIGluZm8gaWYgY2xpY2tlZFxuICAgIC8vICAgICAgICAgICAgIC8vIHJvdyA9ICQoJzxkaXYgY2xhc3M9XCJ0b2JldGFibGVcIj48L2Rpdj4nKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0YWJsZS5hcHBlbmQocm93KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgJCgnI3VzZXJzJykuYXBwZW5kKHRhYmxlKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gcHV0SW5mb0luSHRtbChjbGlja2VkLCBkYXRhKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luIHB1dEluZm9Jbkh0bWwoKScpO1xuICAgIC8vICAgICAvLyBzaG93IGluZm8gb2YgdGhlIHJpZ2h0IHVzZXIgKGlmIG5vdCBhbHJlYWR5IHNob3dpbmcgaXQpXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgYXMgdGFibGUgaGVhZGVyXG4gICAgLy8gICAgIHZhciBoZWFkZXJyb3cgPSAkKCc8dHI+PC90cj4nKS5hcHBlbmQoJzx0ZD53dzwvdGQ+PHRkPmdlYmxva2tlZXJkPC90ZD48dGQ+aWQ8L3RkPjx0ZD5nZW5kZXI8L3RkPjx0ZD5nZWJvb3J0ZWRhdHVtPC90ZD48dGQ+dnJhYWc8L3RkPjx0ZD5hbnR3b29yZDwvdGQ+Jyk7XG5cbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyB3aXRoIHRlIHVzZXJpbmZvXG4gICAgLy8gICAgIHZhciBpbmZvcm93ID0gJCgnPHRyPjwvdHI+Jyk7XG5cbiAgICAvLyAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAvLyAgICAgJC5lYWNoKGRhdGFbMF0sIGZ1bmN0aW9uKGtleSwgdmFsdWUpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7IC8vIGdlYmxva2tlZXJkXG4gICAgLy8gICAgICAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnbmVlJztcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnamEnXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnZGIgZm91dD8nXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgLy8gICAgICAgICB2YXIgdGQgPSAkKCc8dGQ+PC90ZD4nKS5hcHBlbmQodmFsdWUpO1xuXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygna2V5LCB2YWx1ZTogJyArIGtleSwgdmFsdWUpO1xuXG4gICAgLy8gICAgICAgICBpbmZvcm93LmFwcGVuZCh0ZCk7XG5cbiAgICAvLyAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyAgICAgaW5mb3Jvdy5pbnNlcnRBZnRlciggJChjbGlja2VkKS5jbG9zZXN0KCd0cicpICk7XG4gICAgLy8gICAgIGhlYWRlcnJvdy5pbnNlcnRBZnRlcigkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykpO1xuICAgIC8vIH1cblxuIiwidmFyIEFkbWluVXNlclZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2YWx1ZSlcbiAgICB7XG4gICAgICAgIC8vcHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWludXNlci9hZG1pbnVzZXIuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS51c2VyX2lkKSAgIFxuICAgICAgICAgICAgJChcIiNmaXJzdF9uYW1lXCIpLnZhbCh2YWx1ZS5maXJzdF9uYW1lKTtcbiAgICAgICAgICAgICQoXCIjaW5zZXJ0aW9uXCIpLnZhbCh2YWx1ZS5pbnNlcnRpb24pO1xuICAgICAgICAgICAgJChcIiNzdXJuYW1lXCIpLnZhbCh2YWx1ZS5zdXJuYW1lKTtcbiAgICAgICAgICAgICQoXCIjdXNlcl90eXBlXCIpLnZhbCh2YWx1ZS51c2VyX3R5cGUpO1xuICAgICAgICAgICAgJChcIiNlbWFpbFwiKS52YWwodmFsdWUuZW1haWwpO1xuICAgICAgICAgICAgJChcIiNwYXNzd29yZFwiKS5hdHRyKCdwbGFjZWhvbGRlcicsICdWdWwgaGllciBpZXRzIGluIG9tIGhldCB3YWNodHdvb3JkIHRlIHZlcmFuZGVyZW4nKTtcbiAgICAgICAgICAgICQoXCIjZ2VuZGVyXCIpLnZhbCh2YWx1ZS5nZW5kZXIpO1xuICAgICAgICAgICAgJChcIiNkYXRlX29mX2JpcnRoXCIpLnZhbCh2YWx1ZS5kYXRlX29mX2JpcnRoKTtcbiAgICAgICAgICAgICQoXCIjcGhvbmVfbnVtYmVyXCIpLnZhbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xuICAgICAgICAgICAgJChcIiNpc19hY3RpdmVcIikudmFsKHZhbHVlLmlzX2FjdGl2ZSk7XG4gICAgICAgICAgICAkKFwiI3VzZXJfaWRcIikudmFsKHZhbHVlLnVzZXJfaWQpO1xuXG4gICAgICAgICAgICB2YXIgdG9kYXkgICAgICAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRhdGVPZkJpcnRoID0gbmV3IERhdGUodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XG5cbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgdG9kYXkuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChcIiNtYWFuZFwiKS52YWwoZGF0ZU9mQmlydGguZ2V0TW9udGgoKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2F2ZUxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnI3VzZXJmb3JtJywgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsICcjZGVsZXRlX2J0bicsIGZ1bmN0aW9uIChlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhY3Rpb24oJCh0aGlzKS5kYXRhKFwiaWRcIikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldFNhdmVMaXN0ZW5lcjogc2V0U2F2ZUxpc3RlbmVyLFxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXJcbiAgICB9XG59IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBpZiAodmlld0RhdGEgIT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdmlld0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBhZGRJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHRvdGFsIHByaWNlICBvZiB0aGUgY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSB0b3RhbFByaWNlICBUb3RhbCBwcmljZSBvZiB0aGUgY2FydFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXG4gICAge1xuICAgICAgICBuZXdQcmljZSA9IHBhcnNlRmxvYXQobmV3UHJpY2UpICsgcGFyc2VGbG9hdCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkuc3Vic3RyKDEpKTtcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBuZXcgY2FydCBpdGVtIHZpc2lhYmxlIGluIHRoZSBET01cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJdGVtKGl0ZW0pXG4gICAge1xuICAgICAgICB2YXIgY2FydEl0ZW0gPSAkKCc8ZGl2PicpLmh0bWwoJCgnLnNpZGViYXJfX2NvbnRlbnRfX3RtcCcpLmh0bWwoKSk7XG5cbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX3ByaWNlXCIpLmh0bWwoXCLigqxcIiArIGl0ZW0ucHJpY2UudG9GaXhlZCgyKSk7XG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgaXRlbS5pbWFnZSk7XG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXG5cbiAgICAgICAgJChcIi5jYXJ0XCIpLmFwcGVuZChjYXJ0SXRlbSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIGFtb3VudCBvZiBpdGVtc1xuICAgICAgICB2YXIgYW1vdW50ID0gJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbCgpO1xuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIHByaWNlXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgY2FydCB3aGVuIHRoZSBwYWdlIGlzICByZWFzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gYWRkdG9DYXJ0ICBNb2RlbCBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRUb0NhcnQpXG4gICAge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICBhZGRUb0NhcnQocHJvZHVjdF9pZCk7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIjdG9fc2hvcF9jYXJ0XCIpLmZpbmQoXCIjc2hvcF9jYXJ0XCIpLmZhZGVUbygwLCAxMDApLmRlbGF5KDEwMDApLmZhZGVUbyg2MDAsIDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIGZvciByZW1vdmUgYSBwcm9kdWN0IGZyb20gdGhlIERPTSBjYXJ0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0UmVtb3ZlTGlzdGVuZXIocmVtb3ZlUHJvZHVjdCkge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGNhcnRpdGVtICAgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEoXCJpZFwiKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBET00gY2FydFxuICAgICAgICAgICAgJChjYXJ0aXRlbSkuYWRkQ2xhc3MoXCJjYXJ0X19pdGVtLS1yZW1vdmVkXCIpO1xuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBEZWNyZXNlIGNvdW50XG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbCgpO1xuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XG5cbiAgICAgICAgICAgIHJlbW92ZVByb2R1Y3QocHJvZHVjdF9pZClcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbSxcbiAgICAgICAgdXBkYXRlVG90YWxQcmljZTogdXBkYXRlVG90YWxQcmljZSxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRBZGRQcm9kdWN0TGlzdGVuZXI6IHNldEFkZFByb2R1Y3RMaXN0ZW5lcixcbiAgICAgICAgc2V0UmVtb3ZlTGlzdGVuZXI6IHNldFJlbW92ZUxpc3RlbmVyLFxuICAgIH1cbn07IiwidmFyIEVycm9yVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJPZXBzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgQ2hlY2tvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoY2FydClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJCZXN0ZWxsZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9jaGVja291dC9jaGVja291dC5odG1sJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZCAmJiBjYXJ0ICE9IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGNhcnQgY29udGVudFxuICAgICAgICAgICAgICAgICQuZWFjaChjYXJ0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikgKyB2YWx1ZS5wcmljZS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKFwiPGhyIC8+XCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChcIiNvcmRlcl9pbmZvIC5vcmRlcl9fbmF2aWdhdGVcIikuZmlyc3QoKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5odG1sKFwiPGRpdiBjbGFzcz0nbWVzc2FnZSBtZXNzYWdlLS1pbmZvJz5KZSB3aW5rZWx3YWdlbiBpcyBub2cgbGVlZywgc3RvcCBlciBwcm9kdWN0ZW4gaW4gb20gZGV6ZSB0ZSBrdW5uZW4gYmVzdGVsbGVuLjwvZGl2PlwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XG4gICAgICAgICAgICAkKFwiLnRvdGFsX19wcmljZVwiKS5odG1sKCQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCBkZWxpdmVyeSBkYXRlICh3ZSBhbHdheXMgZGVsaXZlciBpbiBvbmUgZGF5KVxuICAgICAgICAgICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHRvZGF5LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSk7XG5cbiAgICAgICAgICAgICQoXCIuZGVsaXZlcnlfZGF0ZVwiKS5odG1sKHRvZGF5LmdldERhdGUoKSArIFwiIFwiICsgdG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkpO1xuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX21vbnRoXCIpLmh0bWwodG9kYXkudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwic2hvcnRcIn0pLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9fY2FsZW5kYXJfX2RheVwiKS5odG1sKHRvZGF5LmdldERhdGUoKSk7XG5cbiAgICAgICAgICAgIC8vIFNldCB1c2VyIGFkZHJlc3NcbiAgICAgICAgICAgIFVzZXJIZWxwZXIuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlcikge1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX25hbWVcIikuaHRtbCh1c2VyLmZpcnN0X25hbWUgKyBcIiBcIiArIHVzZXIuaW5zZXJ0aW9uICsgXCIgXCIgKyB1c2VyLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3N0cmVldFwiKS5odG1sKHVzZXIuYWRkcmVzcy5zdHJlZXQgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5ob3VzZV9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIuYWRyZXNfX3Bvc3RhbGNvZGVcIikuaHRtbCh1c2VyLmFkZHJlc3MucG9zdGFsX2NvZGUgKyBcIiBcIiArIHVzZXIuYWRkcmVzcy5jaXR5LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEdvIHRvIHRoZSBsYXN0IHN0ZXAgb2YgdGhlIG9yZGVyIHByb2Nlc3NcbiAgICBmdW5jdGlvbiBmaW5pc2hPcmRlcigpXG4gICAge1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaSBhXCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaS5jb25maXJtYXRpb25cIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XG4gICAgICAgICQoXCIjY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgdmlzaWJsZSBjYXJ0XG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KClcbiAgICB7XG4gICAgICAgICQoXCIuY2FydFwiKS5lbXB0eSgpO1xuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKFwiMFwiKTtcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrDAwLjAwXCIpXG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBDb25maXJtIHRoZSBvcmRlciB3aGVuIHNibWl0dGluZyB0aGUgZm9ybVxuICAgIGZ1bmN0aW9uIHNldE9yZGVyTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oXCJzdWJtaXRcIiwgXCIjb3JkZXJmb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldE9yZGVyTGlzdGVuZXI6IHNldE9yZGVyTGlzdGVuZXIsXG4gICAgICAgIGZpbmlzaE9yZGVyOiBmaW5pc2hPcmRlcixcbiAgICAgICAgY2xlYXJDYXJ0OiBjbGVhckNhcnRcbiAgICB9XG59OyIsInZhciBGYXZvcml0ZUxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJGYXZvcmlldGVubGlqc3QgLSBBWiBHYW1lc1wiO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwiZmF2b3JpdGVsaXN0XCI+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdCh2aWV3RGF0YSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRGYXZvcml0ZWxpc3Qodmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI2Zhdm9yaXRlbGlzdFwiKS5sb2FkKCcvdmlld3MvZmF2b3JpdGVsaXN0L2Zhdm9yaXRlbGlzdC5odG1sJywgZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gYWRkIGFsbCBmYXZvcml0ZWxpc3QgaXRlbXMgdG8gaHRtbFxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBmYXZvcml0ZV9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNmYXZvcml0ZV9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMTtcblxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlX19saXN0XCIpLmFwcGVuZChmYXZvcml0ZV9fbGlzdF9faXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlbGlzdF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNmYXZvcml0ZV9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldERlbGV0ZUxpc3RlbmVyKClcIik7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2J0blwiLCBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xuICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW0oZGl2X3RvX2hpZGUpXG4gICAge1xuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdDogbG9hZEZhdm9yaXRlbGlzdCxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXIsXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbVxuICAgIH1cbn0iLCJ2YXIgU3RhdHNWaWV3SGVscGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFRvcFRlblZpZXcocmFuZ2UsIGdyYXBoRGF0YSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIlN0YXRzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZ3JhcGhzL2dyYXBocy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAvLyBkZWZhdWx0IHNlbGVjdCBkYXRhXG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX3N3aXRjaFwiKS52YWwocmFuZ2UpO1xuXG4gICAgICAgICAgICAvLyBncmFwaFxuICAgICAgICAgICAgdmFyIGxhYmVscyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgdmFyIGdhbWVDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgbGFzdF9yYW5rX251bSA9IDA7IC8vYXNzdW1pbmcgdmFsdWUucmFuayBpcyBuZXZlciAwIVxuICAgICAgICAgICAgdmFyIGhpZ2hlc3RWYWwgPSAwO1xuXG4gICAgICAgICAgICAkLmVhY2goZ3JhcGhEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2FtZUNvdW50IDwgMTEgfHwgdmFsdWUucmFuayA9PSBsYXN0X3JhbmtfbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHZhbHVlLnVzZXJfY291bnQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVDb3VudCA9PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9yYW5rX251bSA9IHZhbHVlLnJhbms7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFiZWxzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKFwiI2dyYXBoX190b3B0ZW5pdGVtc19fY252c1wiKTtcbiAgICAgICAgICAgIHZhciBUb3BUZW5DaGFydCA9IG5ldyBDaGFydChlbCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdob3Jpem9udGFsQmFyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDIwMCwgMjYsIDEpJywgLy9ncm9lblxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk1lZXN0IHZlcmtvY2h0ZSBnYW1lc1wiIC8vIG5lZWQgaW4gamFudWFyaSwgaW4gZmVicnVhcmksIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1heFJvdGF0aW9uOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWluUm90YXRpb246IDkwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBwdXQgZGVzY2lwdGlvbiBiZWxvdyBncmFwaFxuICAgICAgICAgICAgdmFyIGRlc2NyID0gJ0RlemUgZ3JhZmllayBsYWF0IGRlIGdhbWVzIHppZW4gbWV0IGhldCBtZWVzdGUgYWFudGFsIGdlYnJ1aWtlcnMgZGF0IGRlIGdhbWUgMSBvZiBtZWVyIGtlZXIgaGVlZnQgZ2Vrb2NodCBpbiBkZSBnZWtvemVuIHRpamRzcGVyaW9kZS4nO1xuXG4gICAgICAgICAgICB2YXIgdGhlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbl9fdG9wdGVuXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcik7IFxuICAgICAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpOyBcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZVwiLCBcIiNyYW5nZV9zd2l0Y2hcIiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSAkKFwiI3JhbmdlX3N3aXRjaFwiKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFuZ2U6IFwiICsgcmFuZ2UpO1xuICAgICAgICAgICAgYWN0aW9uKHJhbmdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFRvcFRlblZpZXc6IHNldFRvcFRlblZpZXcsXG4gICAgICAgIHNldFRvcFRlbkNoYW5nZUxpc3RlbmVyOiBzZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lclxuICAgIH1cbn0iLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dpbi9sb2dpbi5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9nb3V0L2xvZ291dC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIE9yZGVyc1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcnMpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJCZXN0ZWxnZXNjaGllZGVuaXMgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9vcmRlcnMvb3JkZXJzLmh0bWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQuZWFjaChvcmRlcnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyID0gJCgnI3NpbmdsZV9vcmRlcicpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEYXRlXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5vcmRlcl9kYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcbiAgICAgICAgICAgICAgICBzd2l0Y2godmFsdWUuc2hpcHBpbmdfbWV0aG9kKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX251bWJlclwiKS5odG1sKHZhbHVlLm9yZGVyX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fZGF0ZVwiKS5odG1sKGRhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pICsgXCIgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fcHJpY2VcIikuaHRtbChcIuKCrCBcIiArIHZhbHVlLnRvdGFsX29yZGVyX3ByaWNlKTtcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwodmFsdWUucGF5bWVudF9tZXRob2QpO1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3NoaXBwcGluZ1wiKS5odG1sKHZhbHVlLnNoaXBwaW5nX21ldGhvZCk7XG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fbGluayBhXCIpLmF0dHIoXCJocmVmXCIsIFwiL29yZGVyL1wiICsgdmFsdWUub3JkZXJfbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJzX2JvZHlcIikuYXBwZW5kKG9yZGVyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3NpbmdsZV9vcmRlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgT3JkZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcob3JkZXIpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJCZXN0ZWxnZXNjaGllZGVuaXMgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9vcmRlci9vcmRlci5odG1sJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBEYXRlXG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKG9yZGVyLm9yZGVyX2RhdGUpO1xuXG4gICAgICAgICAgICAvLyBGb3JtYXQgc2hpcHBpbmcgbWV0aG9kXG4gICAgICAgICAgICBzd2l0Y2gob3JkZXIuc2hpcHBpbmdfbWV0aG9kKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxpdmVyXCI6XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaWNrdXBcIjpcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaWxsIG9yZGVyIGluZm9cbiAgICAgICAgICAgICQoXCIub3JkZXJfX2RhdGVcIikuaHRtbChkYXRlLmdldERhdGUoKSArIFwiIFwiICsgZGF0ZS50b0xvY2FsZVN0cmluZyhcIm5sLU5MXCIsIHttb250aDogXCJsb25nXCJ9KSArIFwiIFwiICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgJChcIi5vcmRlcl9fcGF5bWVudG1ldGhvZFwiKS5odG1sKG9yZGVyLnBheW1lbnRfbWV0aG9kKTtcbiAgICAgICAgICAgICQoXCIub3JkZXJfX3NoaXBwcGluZ1wiKS5odG1sKG9yZGVyLnNoaXBwaW5nX21ldGhvZCk7XG5cbiAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0c1xuICAgICAgICAgICAgJC5lYWNoKG9yZGVyLnByb2R1Y3RzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19hbW91bnRcIikuaHRtbChcIjxiPkFhbnRhbDo8L2I+IFwiICsgdmFsdWUuYW1vdW50KVxuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSArIHZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5hZGRUb0Zhdm9yaXRlc0J1dHRvblwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RcIikuZmlyc3QoKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgLy8gU2V0IGFuZCBtb3ZlIHRvdGFsIHByaWNlIHRvIGVuZCBvZiBsaXN0XG4gICAgICAgICAgICAkKFwiI3RvdGFsXCIpLmFwcGVuZFRvKFwiI3Byb2R1Y3RfX2xpc3RcIik7XG4gICAgICAgICAgICAkKFwiLnRvdGFsX19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgb3JkZXIudG90YWxfb3JkZXJfcHJpY2UpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNsaWNrXCIsIFwiLmFkZFRvRmF2b3JpdGVzQnV0dG9uXCIsIGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcbiAgICAgICAgICAgIGFjdGlvbihlYW4pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyOiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcbiAgICAgICAgJChcIiNmaWx0ZXJzXCIpLmxvYWQoJy92aWV3cy9wcm9kdWN0cy9maWx0ZXJzLmh0bWwnKTtcblxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXG4gICAgICAgIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RzKHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19zdWJ0aXRsZVwiKS5hcHBlbmQodmFsdWUuZ2VucmUgKyhcIiB8IFBFR0kgXCIpICsgdmFsdWUucGVnaV9hZ2UgKyhcIiB8IFwiKSsgUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2Rlc2NyaXB0aW9uXCIpLmh0bWwoQ3V0U3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIiNidXR0b25zX19pbmZvLCAucHJvZHVjdF9faW1hZ2UgYSwgLnByb2R1Y3RfX3RpdGxlXCIpLmF0dHIoXCJocmVmXCIsIFwicHJvZHVjdC9cIiArIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vU2hvdyBtb3JlL2xlc3NcbiAgICBmdW5jdGlvbiBDdXRTdHJpbmcodGV4dCl7XG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XG4gICAgICAgIHZhciBXb3Jkc0FycmF5ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmKFdvcmRzQXJyYXkubGVuZ3RoPlNob3dBbW91bnQpe1xuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvcihpPTA7IGk8U2hvd0Ftb3VudDsgaSsrKXtcbiAgICAgICAgICAgICAgICBTaG9ydFN0cmluZyArPSBXb3Jkc0FycmF5W2ldICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2hvcnRTdHJpbmcrXCIuLi5cIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEZpbHRlckxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZGUgcHJvZHVjdGVubGlqc3QgYWxzIGVlbiB3YWFyZGUgaW4gZGUgc2xpZGVyIHZlcmFuZGVyZChhbGxlIG1hbmllcmVuKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZigkKFwiI3ByaWNlbWluXCIpLnZhbCgpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3ByaWNlbWluXCIpLnZhbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNwcm9kdWN0X2ZpbHRlclwiLCBhY3Rpb24pO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldEZpbHRlckxpc3RlbmVyOiBzZXRGaWx0ZXJMaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pIC8vIGhlYiBkZSAkIGVyYmlqIGdlemV0LiBpbnRlcm5ldCBoYWQgaGV0IGRhYXJvdmVyICh6aWUgb25kZXJzdGFhbmRlIGNvbW1lbnQgb29rKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codmlld0RhdGEpXG4gICAgICAgIGlmICh2aWV3RGF0YS5sZW5ndGggPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkVycm9yIC0gQVogR2FtZXNcIlxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMSl7XG4gICAgICAgICAgICAgICAgbG9hZFB1YmxpY1dpc2hsaXN0KHZpZXdEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0uaXNfcHVibGljIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGFbMF0uaXNfcHVibGljID0gXCIgKyB2aWV3RGF0YVswXS5pc19wdWJsaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5sZW5ndGggaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YS5sZW5ndGggPSBcIiArIHZpZXdEYXRhLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUHVibGljV2lzaGxpc3QoZGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJWZXJsYW5nbGlqc3QgXCIgKyBkYXRhWzBdLmZpcnN0X25hbWUgKyBcIiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwicHVibGljX3dpc2hsaXN0XCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgJChcIiNwdWJsaWNfd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3B1YmxpY193aXNobGlzdC9wdWJsaWNfd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoXCIjcHVibGljX193aXNobGlzdF9faGVhZGVyXCIpLmh0bWwoXCJWZXJsYW5nbGlqc3QgdmFuIFwiICsgZGF0YVswXS5maXJzdF9uYW1lKTtcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB3aXNobGlzdF9pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoICQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSApO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudCsrO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2xpa2VidXR0b25cIikuYXBwZW5kKCk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaXRlbS5hcHBlbmRUbygkKFwiI3dpc2hfX2xpc3RcIikpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChcIiN3aXNoX19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdDogbG9hZFB1YmxpY1dpc2hsaXN0LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG5cblxufSIsInZhciBSZWdpc3RlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcbiAgICAgICAgXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpID09IDIwMDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZWdpc3RlcmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07XG5cbi8qXG52YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuKi8iLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucGxhdGZvcm0pKTsgLy8gZnVuY3RpZSB2b29yIGxvZ29cbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucHVibGlzaGVyKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2dlbnJlXCIpLmFwcGVuZChwcm9kdWN0LmdlbnJlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmFkZFRvV2lzaGxpc3RCdXR0b25cIikuYXR0cihcIm9uY2xpY2tcIiwgXCJXaXNobGlzdEhlbHBlci5hZGRJdGVtKFwiICsgcHJvZHVjdC5lYW5fbnVtYmVyICsgXCIpO1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcblxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcblxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFdpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2lzaGxpc3QgLSBBWiBHYW1lc1wiO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwid2lzaGxpc3RcIj48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICBsb2FkV2lzaGxpc3Qodmlld0RhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRXaXNobGlzdCh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgbG9hZFdpc2hMaXN0XCIpO1xuICAgICAgICAkKFwiI3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy93aXNobGlzdC93aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gYWRkIGFsbCB3aXNobGlzdCBpdGVtcyB0byBodG1sXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciB3aXNoX19saXN0X19pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3dpc2hfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArMVxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgICQoXCIjc2hhcmVfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIm1haWx0bzo/c3ViamVjdD1NaWpuIHZlcmxhbmdsaWpzdCBvcCBBWi1HYW1lcy5ubCEmYm9keT1CZWtpamsgbWlqbiB2ZXJsYW5nbGlqc3Qgb3A6IGh0dHA6Ly9hei1nYW1lcy5ubC9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTsgLy8gQ0hFQ0sgRElTIVxuICAgICAgICAgICAgICAgICQoXCIjY2xpcGJvYXJkX19idG5cIikuYXR0cihcImhyZWZcIiwgXCIvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7XG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfbGlua1wiKS52YWwoXCJodHRwczovL2F6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xuXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmFwcGVuZCh3aXNoX19saXN0X19pdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdG9yXCIpLnZhbChcInByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0biwgLnNoYXJlX19idG4sIC5jbGlwYm9hcmRfX2J0blwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNfcHVibGljID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwdWJsaWNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIGhhcyB1bmV4cGVjdGVkIHZhbHVlLiB2YWx1ZSA9IFwiICsgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWxzIGVyIGdlZW4gaXRlbXMgaW4gd2lzaGxpc3Qgc3RhYW4sIGRhbiBoaWRlIGRlIHZvbGdlbmRlIGRpdnMuXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICQoXCIjd2lzaGxpc3RfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfX3JlbGF0ZWRcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdFwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCEkKCcjZGVsZXRlX2J0bicpLmhhc0NsYXNzKFwiYnRuLS1wcmVzc2VkXCIpKXtcbiAgICAgICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYWRkQ2xhc3MoXCJidG4tLXByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xuICAgICAgICAgICAgICAgIGFjdGlvbihlYW4sIGRpdl90b19oaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFB1YmxpY0xpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiI3B1YmxpY2F0b3JcIiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW0oZGl2X3RvX2hpZGUpXG4gICAge1xuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3RhdHVzKTtcblxuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLmhpZGUoKTtcblxuICAgICAgICB9IGVsc2Uge2NvbnNvbGUubG9nKFwidW5leHBlY3RlZCBuZXdTdGF0dXMgdmFsdWUsIHZhbHVlID0gXCIrbmV3U3RhdHVzKX1cblxuXG4gICAgICAgICQoXCIjZXhhbXBsZV9fYnRuX19kaXZcIikuc2hvdygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE9wZW5TbWFsbE1haWxXaW5kb3codXJsLCB3aW5kb3dOYW1lLCBmZWF0dXJlcylcbiAgICB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgd2luZG93TmFtZSwgZmVhdHVyZXMpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZFdpc2hsaXN0OiBsb2FkV2lzaGxpc3QsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxuICAgICAgICBzZXRQdWJsaWNMaXN0ZW5lcjogc2V0UHVibGljTGlzdGVuZXIsXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbSxcbiAgICAgICAgc2hvd0V4YW1wbGVCdXR0b246IHNob3dFeGFtcGxlQnV0dG9uXG4gICAgfVxufSJdfQ==
