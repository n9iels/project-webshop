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
            url: "http://localhost:8081/user/login",
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbl9tb2RlbC5qcyIsImFkbWludXNlcl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImZhdm9yaXRlbGlzdF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJvcmRlcnNfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwic3RhdHNfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiYWRtaW51c2VyX2NvbnRyb2xsZXIuanMiLCJjYXJ0X2NvbnRyb2xsZXIuanMiLCJjaGVja291dF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwiZmF2b3JpdGVsaXN0X2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJvcmRlcl9jb250cm9sbGVyLmpzIiwib3JkZXJzX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicHVibGljX3dpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsInN0YXRzX2NvbnRyb2xsZXIuanMiLCJ1c2VyX2NvbnRyb2xsZXIuanMiLCJ3aXNobGlzdF9jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW5fdmlldy5qcyIsImFkbWludXNlci9hZG1pbnVzZXJfdmlldy5qcyIsImNhcnQvY2FydF92aWV3LmpzIiwiY2hlY2tvdXQvY2hlY2tvdXRfdmlldy5qcyIsImVycm9yL2Vycm9yX3ZpZXcuanMiLCJmYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0X3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsIm9yZGVycy9vcmRlcnNfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwid2lzaGxpc3Qvd2lzaGxpc3Rfdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlCQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIENoYXJ0LmpzXG4gKiBodHRwOi8vY2hhcnRqcy5vcmcvXG4gKiBWZXJzaW9uOiAyLjQuMFxuICpcbiAqIENvcHlyaWdodCAyMDE2IE5pY2sgRG93bmllXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFydGpzL0NoYXJ0LmpzL2Jsb2IvbWFzdGVyL0xJQ0VOU0UubWRcbiAqL1xuIWZ1bmN0aW9uKHQpe2lmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlKW1vZHVsZS5leHBvcnRzPXQoKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sdCk7ZWxzZXt2YXIgZTtlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxlLkNoYXJ0PXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHQoZSxhLGkpe2Z1bmN0aW9uIG4ocixsKXtpZighYVtyXSl7aWYoIWVbcl0pe3ZhciBzPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWwmJnMpcmV0dXJuIHMociwhMCk7aWYobylyZXR1cm4gbyhyLCEwKTt2YXIgZD1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK3IrXCInXCIpO3Rocm93IGQuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixkfXZhciB1PWFbcl09e2V4cG9ydHM6e319O2Vbcl1bMF0uY2FsbCh1LmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGE9ZVtyXVsxXVt0XTtyZXR1cm4gbihhP2E6dCl9LHUsdS5leHBvcnRzLHQsZSxhLGkpfXJldHVybiBhW3JdLmV4cG9ydHN9Zm9yKHZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUscj0wO3I8aS5sZW5ndGg7cisrKW4oaVtyXSk7cmV0dXJuIG59KHsxOltmdW5jdGlvbih0LGUsYSl7fSx7fV0sMjpbZnVuY3Rpb24odCxlLGEpe2Z1bmN0aW9uIGkodCl7aWYodCl7dmFyIGU9L14jKFthLWZBLUYwLTldezN9KSQvLGE9L14jKFthLWZBLUYwLTldezZ9KSQvLGk9L15yZ2JhP1xcKFxccyooWystXT9cXGQrKVxccyosXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpJC8sbj0vXnJnYmE/XFwoXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxvPS8oXFx3KykvLHI9WzAsMCwwXSxsPTEscz10Lm1hdGNoKGUpO2lmKHMpe3M9c1sxXTtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHNbZF0rc1tkXSwxNil9ZWxzZSBpZihzPXQubWF0Y2goYSkpe3M9c1sxXTtmb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXBhcnNlSW50KHMuc2xpY2UoMipkLDIqZCsyKSwxNil9ZWxzZSBpZihzPXQubWF0Y2goaSkpe2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQoc1tkKzFdKTtsPXBhcnNlRmxvYXQoc1s0XSl9ZWxzZSBpZihzPXQubWF0Y2gobikpe2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09TWF0aC5yb3VuZCgyLjU1KnBhcnNlRmxvYXQoc1tkKzFdKSk7bD1wYXJzZUZsb2F0KHNbNF0pfWVsc2UgaWYocz10Lm1hdGNoKG8pKXtpZihcInRyYW5zcGFyZW50XCI9PXNbMV0pcmV0dXJuWzAsMCwwLDBdO2lmKHI9eVtzWzFdXSwhcilyZXR1cm59Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT12KHJbZF0sMCwyNTUpO3JldHVybiBsPWx8fDA9PWw/dihsLDAsMSk6MSxyWzNdPWwscn19ZnVuY3Rpb24gbih0KXtpZih0KXt2YXIgZT0vXmhzbGE/XFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS8sYT10Lm1hdGNoKGUpO2lmKGEpe3ZhciBpPXBhcnNlRmxvYXQoYVs0XSksbj12KHBhcnNlSW50KGFbMV0pLDAsMzYwKSxvPXYocGFyc2VGbG9hdChhWzJdKSwwLDEwMCkscj12KHBhcnNlRmxvYXQoYVszXSksMCwxMDApLGw9dihpc05hTihpKT8xOmksMCwxKTtyZXR1cm5bbixvLHIsbF19fX1mdW5jdGlvbiBvKHQpe2lmKHQpe3ZhciBlPS9eaHdiXFwoXFxzKihbKy1dP1xcZCspKD86ZGVnKT9cXHMqLFxccyooWystXT9bXFxkXFwuXSspJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKS8sYT10Lm1hdGNoKGUpO2lmKGEpe3ZhciBpPXBhcnNlRmxvYXQoYVs0XSksbj12KHBhcnNlSW50KGFbMV0pLDAsMzYwKSxvPXYocGFyc2VGbG9hdChhWzJdKSwwLDEwMCkscj12KHBhcnNlRmxvYXQoYVszXSksMCwxMDApLGw9dihpc05hTihpKT8xOmksMCwxKTtyZXR1cm5bbixvLHIsbF19fX1mdW5jdGlvbiByKHQpe3ZhciBlPWkodCk7cmV0dXJuIGUmJmUuc2xpY2UoMCwzKX1mdW5jdGlvbiBsKHQpe3ZhciBlPW4odCk7cmV0dXJuIGUmJmUuc2xpY2UoMCwzKX1mdW5jdGlvbiBzKHQpe3ZhciBlPWkodCk7cmV0dXJuIGU/ZVszXTooZT1uKHQpKT9lWzNdOihlPW8odCkpP2VbM106dm9pZCAwfWZ1bmN0aW9uIGQodCl7cmV0dXJuXCIjXCIreCh0WzBdKSt4KHRbMV0pK3godFsyXSl9ZnVuY3Rpb24gdSh0LGUpe3JldHVybiAxPmV8fHRbM10mJnRbM108MT9jKHQsZSk6XCJyZ2IoXCIrdFswXStcIiwgXCIrdFsxXStcIiwgXCIrdFsyXStcIilcIn1mdW5jdGlvbiBjKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcInJnYmEoXCIrdFswXStcIiwgXCIrdFsxXStcIiwgXCIrdFsyXStcIiwgXCIrZStcIilcIn1mdW5jdGlvbiBoKHQsZSl7aWYoMT5lfHx0WzNdJiZ0WzNdPDEpcmV0dXJuIGYodCxlKTt2YXIgYT1NYXRoLnJvdW5kKHRbMF0vMjU1KjEwMCksaT1NYXRoLnJvdW5kKHRbMV0vMjU1KjEwMCksbj1NYXRoLnJvdW5kKHRbMl0vMjU1KjEwMCk7cmV0dXJuXCJyZ2IoXCIrYStcIiUsIFwiK2krXCIlLCBcIituK1wiJSlcIn1mdW5jdGlvbiBmKHQsZSl7dmFyIGE9TWF0aC5yb3VuZCh0WzBdLzI1NSoxMDApLGk9TWF0aC5yb3VuZCh0WzFdLzI1NSoxMDApLG49TWF0aC5yb3VuZCh0WzJdLzI1NSoxMDApO3JldHVyblwicmdiYShcIithK1wiJSwgXCIraStcIiUsIFwiK24rXCIlLCBcIisoZXx8dFszXXx8MSkrXCIpXCJ9ZnVuY3Rpb24gZyh0LGUpe3JldHVybiAxPmV8fHRbM10mJnRbM108MT9wKHQsZSk6XCJoc2woXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlKVwifWZ1bmN0aW9uIHAodCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwiaHNsYShcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiUsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gbSh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJod2IoXCIrdFswXStcIiwgXCIrdFsxXStcIiUsIFwiK3RbMl0rXCIlXCIrKHZvaWQgMCE9PWUmJjEhPT1lP1wiLCBcIitlOlwiXCIpK1wiKVwifWZ1bmN0aW9uIGIodCl7cmV0dXJuIGtbdC5zbGljZSgwLDMpXX1mdW5jdGlvbiB2KHQsZSxhKXtyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZSx0KSxhKX1mdW5jdGlvbiB4KHQpe3ZhciBlPXQudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIGUubGVuZ3RoPDI/XCIwXCIrZTplfXZhciB5PXQoNik7ZS5leHBvcnRzPXtnZXRSZ2JhOmksZ2V0SHNsYTpuLGdldFJnYjpyLGdldEhzbDpsLGdldEh3YjpvLGdldEFscGhhOnMsaGV4U3RyaW5nOmQscmdiU3RyaW5nOnUscmdiYVN0cmluZzpjLHBlcmNlbnRTdHJpbmc6aCxwZXJjZW50YVN0cmluZzpmLGhzbFN0cmluZzpnLGhzbGFTdHJpbmc6cCxod2JTdHJpbmc6bSxrZXl3b3JkOmJ9O3ZhciBrPXt9O2Zvcih2YXIgUyBpbiB5KWtbeVtTXV09U30sezY6Nn1dLDM6W2Z1bmN0aW9uKHQsZSxhKXt2YXIgaT10KDUpLG49dCgyKSxvPWZ1bmN0aW9uKHQpe2lmKHQgaW5zdGFuY2VvZiBvKXJldHVybiB0O2lmKCEodGhpcyBpbnN0YW5jZW9mIG8pKXJldHVybiBuZXcgbyh0KTt0aGlzLnZhbHVlcz17cmdiOlswLDAsMF0saHNsOlswLDAsMF0saHN2OlswLDAsMF0saHdiOlswLDAsMF0sY215azpbMCwwLDAsMF0sYWxwaGE6MX07dmFyIGU7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaWYoZT1uLmdldFJnYmEodCkpdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixlKTtlbHNlIGlmKGU9bi5nZXRIc2xhKHQpKXRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSk7ZWxzZXtpZighKGU9bi5nZXRId2IodCkpKXRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIHBhcnNlIGNvbG9yIGZyb20gc3RyaW5nIFwiJyt0KydcIicpO3RoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSl9ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgdClpZihlPXQsdm9pZCAwIT09ZS5yfHx2b2lkIDAhPT1lLnJlZCl0aGlzLnNldFZhbHVlcyhcInJnYlwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS5sfHx2b2lkIDAhPT1lLmxpZ2h0bmVzcyl0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpO2Vsc2UgaWYodm9pZCAwIT09ZS52fHx2b2lkIDAhPT1lLnZhbHVlKXRoaXMuc2V0VmFsdWVzKFwiaHN2XCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLnd8fHZvaWQgMCE9PWUud2hpdGVuZXNzKXRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSk7ZWxzZXtpZih2b2lkIDA9PT1lLmMmJnZvaWQgMD09PWUuY3lhbil0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBvYmplY3QgXCIrSlNPTi5zdHJpbmdpZnkodCkpO3RoaXMuc2V0VmFsdWVzKFwiY215a1wiLGUpfX07by5wcm90b3R5cGU9e3JnYjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwicmdiXCIsYXJndW1lbnRzKX0saHNsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJoc2xcIixhcmd1bWVudHMpfSxoc3Y6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzdlwiLGFyZ3VtZW50cyl9LGh3YjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHdiXCIsYXJndW1lbnRzKX0sY215azpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiY215a1wiLGFyZ3VtZW50cyl9LHJnYkFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLnJnYn0saHNsQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuaHNsfSxoc3ZBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5oc3Z9LGh3YkFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIDEhPT10LmFscGhhP3QuaHdiLmNvbmNhdChbdC5hbHBoYV0pOnQuaHdifSxjbXlrQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMuY215a30scmdiYUFycmF5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXM7cmV0dXJuIHQucmdiLmNvbmNhdChbdC5hbHBoYV0pfSxoc2xhQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gdC5oc2wuY29uY2F0KFt0LmFscGhhXSl9LGFscGhhOmZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDA9PT10P3RoaXMudmFsdWVzLmFscGhhOih0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsdCksdGhpcyl9LHJlZDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMCx0KX0sZ3JlZW46ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDEsdCl9LGJsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcInJnYlwiLDIsdCl9LGh1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmKHQlPTM2MCx0PTA+dD8zNjArdDp0KSx0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwwLHQpfSxzYXR1cmF0aW9uOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc2xcIiwxLHQpfSxsaWdodG5lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDIsdCl9LHNhdHVyYXRpb252OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJoc3ZcIiwxLHQpfSx3aGl0ZW5lc3M6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImh3YlwiLDEsdCl9LGJsYWNrbmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsMix0KX0sdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLDIsdCl9LGN5YW46ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwwLHQpfSxtYWdlbnRhOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMSx0KX0seWVsbG93OmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJjbXlrXCIsMix0KX0sYmxhY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwzLHQpfSxoZXhTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oZXhTdHJpbmcodGhpcy52YWx1ZXMucmdiKX0scmdiU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucmdiU3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHJnYmFTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5yZ2JhU3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LHBlcmNlbnRTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wZXJjZW50U3RyaW5nKHRoaXMudmFsdWVzLnJnYix0aGlzLnZhbHVlcy5hbHBoYSl9LGhzbFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhzbFN0cmluZyh0aGlzLnZhbHVlcy5oc2wsdGhpcy52YWx1ZXMuYWxwaGEpfSxoc2xhU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHNsYVN0cmluZyh0aGlzLnZhbHVlcy5oc2wsdGhpcy52YWx1ZXMuYWxwaGEpfSxod2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5od2JTdHJpbmcodGhpcy52YWx1ZXMuaHdiLHRoaXMudmFsdWVzLmFscGhhKX0sa2V5d29yZDpmdW5jdGlvbigpe3JldHVybiBuLmtleXdvcmQodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scmdiTnVtYmVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiO3JldHVybiB0WzBdPDwxNnx0WzFdPDw4fHRbMl19LGx1bWlub3NpdHk6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9W10sYT0wO2E8dC5sZW5ndGg7YSsrKXt2YXIgaT10W2FdLzI1NTtlW2FdPS4wMzkyOD49aT9pLzEyLjkyOk1hdGgucG93KChpKy4wNTUpLzEuMDU1LDIuNCl9cmV0dXJuLjIxMjYqZVswXSsuNzE1MiplWzFdKy4wNzIyKmVbMl19LGNvbnRyYXN0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubHVtaW5vc2l0eSgpLGE9dC5sdW1pbm9zaXR5KCk7cmV0dXJuIGU+YT8oZSsuMDUpLyhhKy4wNSk6KGErLjA1KS8oZSsuMDUpfSxsZXZlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbnRyYXN0KHQpO3JldHVybiBlPj03LjE/XCJBQUFcIjplPj00LjU/XCJBQVwiOlwiXCJ9LGRhcms6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT0oMjk5KnRbMF0rNTg3KnRbMV0rMTE0KnRbMl0pLzFlMztyZXR1cm4gMTI4PmV9LGxpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIXRoaXMuZGFyaygpfSxuZWdhdGU6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W10sZT0wOzM+ZTtlKyspdFtlXT0yNTUtdGhpcy52YWx1ZXMucmdiW2VdO3JldHVybiB0aGlzLnNldFZhbHVlcyhcInJnYlwiLHQpLHRoaXN9LGxpZ2h0ZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzJdKz1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxkYXJrZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzJdLT1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSxzYXR1cmF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMV0rPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LGRlc2F0dXJhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsO3JldHVybiBlWzFdLT1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKSx0aGlzfSx3aGl0ZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHdiO3JldHVybiBlWzFdKz1lWzFdKnQsdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKSx0aGlzfSxibGFja2VuOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmh3YjtyZXR1cm4gZVsyXSs9ZVsyXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHdiXCIsZSksdGhpc30sZ3JleXNjYWxlOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy52YWx1ZXMucmdiLGU9LjMqdFswXSsuNTkqdFsxXSsuMTEqdFsyXTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJyZ2JcIixbZSxlLGVdKSx0aGlzfSxjbGVhcmVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmFscGhhO3JldHVybiB0aGlzLnNldFZhbHVlcyhcImFscGhhXCIsZS1lKnQpLHRoaXN9LG9wYXF1ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuYWxwaGE7cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIixlK2UqdCksdGhpc30scm90YXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbCxhPShlWzBdK3QpJTM2MDtyZXR1cm4gZVswXT0wPmE/MzYwK2E6YSx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LG1peDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT10LG49dm9pZCAwPT09ZT8uNTplLG89MipuLTEscj1hLmFscGhhKCktaS5hbHBoYSgpLGw9KChvKnI9PT0tMT9vOihvK3IpLygxK28qcikpKzEpLzIscz0xLWw7cmV0dXJuIHRoaXMucmdiKGwqYS5yZWQoKStzKmkucmVkKCksbCphLmdyZWVuKCkrcyppLmdyZWVuKCksbCphLmJsdWUoKStzKmkuYmx1ZSgpKS5hbHBoYShhLmFscGhhKCkqbitpLmFscGhhKCkqKDEtbikpfSx0b0pTT046ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZ2IoKX0sY2xvbmU6ZnVuY3Rpb24oKXt2YXIgdCxlLGE9bmV3IG8saT10aGlzLnZhbHVlcyxuPWEudmFsdWVzO2Zvcih2YXIgciBpbiBpKWkuaGFzT3duUHJvcGVydHkocikmJih0PWlbcl0sZT17fS50b1N0cmluZy5jYWxsKHQpLFwiW29iamVjdCBBcnJheV1cIj09PWU/bltyXT10LnNsaWNlKDApOlwiW29iamVjdCBOdW1iZXJdXCI9PT1lP25bcl09dDpjb25zb2xlLmVycm9yKFwidW5leHBlY3RlZCBjb2xvciB2YWx1ZTpcIix0KSk7cmV0dXJuIGF9fSxvLnByb3RvdHlwZS5zcGFjZXM9e3JnYjpbXCJyZWRcIixcImdyZWVuXCIsXCJibHVlXCJdLGhzbDpbXCJodWVcIixcInNhdHVyYXRpb25cIixcImxpZ2h0bmVzc1wiXSxoc3Y6W1wiaHVlXCIsXCJzYXR1cmF0aW9uXCIsXCJ2YWx1ZVwiXSxod2I6W1wiaHVlXCIsXCJ3aGl0ZW5lc3NcIixcImJsYWNrbmVzc1wiXSxjbXlrOltcImN5YW5cIixcIm1hZ2VudGFcIixcInllbGxvd1wiLFwiYmxhY2tcIl19LG8ucHJvdG90eXBlLm1heGVzPXtyZ2I6WzI1NSwyNTUsMjU1XSxoc2w6WzM2MCwxMDAsMTAwXSxoc3Y6WzM2MCwxMDAsMTAwXSxod2I6WzM2MCwxMDAsMTAwXSxjbXlrOlsxMDAsMTAwLDEwMCwxMDBdfSxvLnByb3RvdHlwZS5nZXRWYWx1ZXM9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXRoaXMudmFsdWVzLGE9e30saT0wO2k8dC5sZW5ndGg7aSsrKWFbdC5jaGFyQXQoaSldPWVbdF1baV07cmV0dXJuIDEhPT1lLmFscGhhJiYoYS5hPWUuYWxwaGEpLGF9LG8ucHJvdG90eXBlLnNldFZhbHVlcz1mdW5jdGlvbih0LGUpe3ZhciBhLG49dGhpcy52YWx1ZXMsbz10aGlzLnNwYWNlcyxyPXRoaXMubWF4ZXMsbD0xO2lmKFwiYWxwaGFcIj09PXQpbD1lO2Vsc2UgaWYoZS5sZW5ndGgpblt0XT1lLnNsaWNlKDAsdC5sZW5ndGgpLGw9ZVt0Lmxlbmd0aF07ZWxzZSBpZih2b2lkIDAhPT1lW3QuY2hhckF0KDApXSl7Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyluW3RdW2FdPWVbdC5jaGFyQXQoYSldO2w9ZS5hfWVsc2UgaWYodm9pZCAwIT09ZVtvW3RdWzBdXSl7dmFyIHM9b1t0XTtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKW5bdF1bYV09ZVtzW2FdXTtsPWUuYWxwaGF9aWYobi5hbHBoYT1NYXRoLm1heCgwLE1hdGgubWluKDEsdm9pZCAwPT09bD9uLmFscGhhOmwpKSxcImFscGhhXCI9PT10KXJldHVybiExO3ZhciBkO2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspZD1NYXRoLm1heCgwLE1hdGgubWluKHJbdF1bYV0sblt0XVthXSkpLG5bdF1bYV09TWF0aC5yb3VuZChkKTtmb3IodmFyIHUgaW4gbyl1IT09dCYmKG5bdV09aVt0XVt1XShuW3RdKSk7cmV0dXJuITB9LG8ucHJvdG90eXBlLnNldFNwYWNlPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZVswXTtyZXR1cm4gdm9pZCAwPT09YT90aGlzLmdldFZhbHVlcyh0KTooXCJudW1iZXJcIj09dHlwZW9mIGEmJihhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUpKSx0aGlzLnNldFZhbHVlcyh0LGEpLHRoaXMpfSxvLnByb3RvdHlwZS5zZXRDaGFubmVsPWZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLnZhbHVlc1t0XTtyZXR1cm4gdm9pZCAwPT09YT9pW2VdOmE9PT1pW2VdP3RoaXM6KGlbZV09YSx0aGlzLnNldFZhbHVlcyh0LGkpLHRoaXMpfSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93LkNvbG9yPW8pLGUuZXhwb3J0cz1vfSx7MjoyLDU6NX1dLDQ6W2Z1bmN0aW9uKHQsZSxhKXtmdW5jdGlvbiBpKHQpe3ZhciBlLGEsaSxuPXRbMF0vMjU1LG89dFsxXS8yNTUscj10WzJdLzI1NSxsPU1hdGgubWluKG4sbyxyKSxzPU1hdGgubWF4KG4sbyxyKSxkPXMtbDtyZXR1cm4gcz09bD9lPTA6bj09cz9lPShvLXIpL2Q6bz09cz9lPTIrKHItbikvZDpyPT1zJiYoZT00KyhuLW8pL2QpLGU9TWF0aC5taW4oNjAqZSwzNjApLDA+ZSYmKGUrPTM2MCksaT0obCtzKS8yLGE9cz09bD8wOi41Pj1pP2QvKHMrbCk6ZC8oMi1zLWwpLFtlLDEwMCphLDEwMCppXX1mdW5jdGlvbiBuKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXSxsPU1hdGgubWluKG4sbyxyKSxzPU1hdGgubWF4KG4sbyxyKSxkPXMtbDtyZXR1cm4gYT0wPT1zPzA6ZC9zKjFlMy8xMCxzPT1sP2U9MDpuPT1zP2U9KG8tcikvZDpvPT1zP2U9Misoci1uKS9kOnI9PXMmJihlPTQrKG4tbykvZCksZT1NYXRoLm1pbig2MCplLDM2MCksMD5lJiYoZSs9MzYwKSxpPXMvMjU1KjFlMy8xMCxbZSxhLGldfWZ1bmN0aW9uIG8odCl7dmFyIGU9dFswXSxhPXRbMV0sbj10WzJdLG89aSh0KVswXSxyPTEvMjU1Kk1hdGgubWluKGUsTWF0aC5taW4oYSxuKSksbj0xLTEvMjU1Kk1hdGgubWF4KGUsTWF0aC5tYXgoYSxuKSk7cmV0dXJuW28sMTAwKnIsMTAwKm5dfWZ1bmN0aW9uIGwodCl7dmFyIGUsYSxpLG4sbz10WzBdLzI1NSxyPXRbMV0vMjU1LGw9dFsyXS8yNTU7cmV0dXJuIG49TWF0aC5taW4oMS1vLDEtciwxLWwpLGU9KDEtby1uKS8oMS1uKXx8MCxhPSgxLXItbikvKDEtbil8fDAsaT0oMS1sLW4pLygxLW4pfHwwLFsxMDAqZSwxMDAqYSwxMDAqaSwxMDAqbl19ZnVuY3Rpb24gcyh0KXtyZXR1cm4gR1tKU09OLnN0cmluZ2lmeSh0KV19ZnVuY3Rpb24gZCh0KXt2YXIgZT10WzBdLzI1NSxhPXRbMV0vMjU1LGk9dFsyXS8yNTU7ZT1lPi4wNDA0NT9NYXRoLnBvdygoZSsuMDU1KS8xLjA1NSwyLjQpOmUvMTIuOTIsYT1hPi4wNDA0NT9NYXRoLnBvdygoYSsuMDU1KS8xLjA1NSwyLjQpOmEvMTIuOTIsaT1pPi4wNDA0NT9NYXRoLnBvdygoaSsuMDU1KS8xLjA1NSwyLjQpOmkvMTIuOTI7dmFyIG49LjQxMjQqZSsuMzU3NiphKy4xODA1Kmksbz0uMjEyNiplKy43MTUyKmErLjA3MjIqaSxyPS4wMTkzKmUrLjExOTIqYSsuOTUwNSppO3JldHVyblsxMDAqbiwxMDAqbywxMDAqcl19ZnVuY3Rpb24gdSh0KXt2YXIgZSxhLGksbj1kKHQpLG89blswXSxyPW5bMV0sbD1uWzJdO3JldHVybiBvLz05NS4wNDcsci89MTAwLGwvPTEwOC44ODMsbz1vPi4wMDg4NTY/TWF0aC5wb3cobywxLzMpOjcuNzg3Km8rMTYvMTE2LHI9cj4uMDA4ODU2P01hdGgucG93KHIsMS8zKTo3Ljc4NypyKzE2LzExNixsPWw+LjAwODg1Nj9NYXRoLnBvdyhsLDEvMyk6Ny43ODcqbCsxNi8xMTYsZT0xMTYqci0xNixhPTUwMCooby1yKSxpPTIwMCooci1sKSxbZSxhLGldfWZ1bmN0aW9uIGModCl7cmV0dXJuIFcodSh0KSl9ZnVuY3Rpb24gaCh0KXt2YXIgZSxhLGksbixvLHI9dFswXS8zNjAsbD10WzFdLzEwMCxzPXRbMl0vMTAwO2lmKDA9PWwpcmV0dXJuIG89MjU1KnMsW28sbyxvXTthPS41PnM/cyooMStsKTpzK2wtcypsLGU9MipzLWEsbj1bMCwwLDBdO2Zvcih2YXIgZD0wOzM+ZDtkKyspaT1yKzEvMyotKGQtMSksMD5pJiZpKyssaT4xJiZpLS0sbz0xPjYqaT9lKzYqKGEtZSkqaToxPjIqaT9hOjI+MyppP2UrKGEtZSkqKDIvMy1pKSo2OmUsbltkXT0yNTUqbztyZXR1cm4gbn1mdW5jdGlvbiBmKHQpe3ZhciBlLGEsaT10WzBdLG49dFsxXS8xMDAsbz10WzJdLzEwMDtyZXR1cm4gMD09PW8/WzAsMCwwXToobyo9MixuKj0xPj1vP286Mi1vLGE9KG8rbikvMixlPTIqbi8obytuKSxbaSwxMDAqZSwxMDAqYV0pfWZ1bmN0aW9uIHAodCl7cmV0dXJuIG8oaCh0KSl9ZnVuY3Rpb24gbSh0KXtyZXR1cm4gbChoKHQpKX1mdW5jdGlvbiB2KHQpe3JldHVybiBzKGgodCkpfWZ1bmN0aW9uIHgodCl7dmFyIGU9dFswXS82MCxhPXRbMV0vMTAwLGk9dFsyXS8xMDAsbj1NYXRoLmZsb29yKGUpJTYsbz1lLU1hdGguZmxvb3IoZSkscj0yNTUqaSooMS1hKSxsPTI1NSppKigxLWEqbykscz0yNTUqaSooMS1hKigxLW8pKSxpPTI1NSppO3N3aXRjaChuKXtjYXNlIDA6cmV0dXJuW2kscyxyXTtjYXNlIDE6cmV0dXJuW2wsaSxyXTtjYXNlIDI6cmV0dXJuW3IsaSxzXTtjYXNlIDM6cmV0dXJuW3IsbCxpXTtjYXNlIDQ6cmV0dXJuW3MscixpXTtjYXNlIDU6cmV0dXJuW2kscixsXX19ZnVuY3Rpb24geSh0KXt2YXIgZSxhLGk9dFswXSxuPXRbMV0vMTAwLG89dFsyXS8xMDA7cmV0dXJuIGE9KDItbikqbyxlPW4qbyxlLz0xPj1hP2E6Mi1hLGU9ZXx8MCxhLz0yLFtpLDEwMCplLDEwMCphXX1mdW5jdGlvbiBrKHQpe3JldHVybiBvKHgodCkpfWZ1bmN0aW9uIFModCl7cmV0dXJuIGwoeCh0KSl9ZnVuY3Rpb24gdyh0KXtyZXR1cm4gcyh4KHQpKX1mdW5jdGlvbiBNKHQpe3ZhciBlLGEsaSxuLG89dFswXS8zNjAsbD10WzFdLzEwMCxzPXRbMl0vMTAwLGQ9bCtzO3N3aXRjaChkPjEmJihsLz1kLHMvPWQpLGU9TWF0aC5mbG9vcig2Km8pLGE9MS1zLGk9NipvLWUsMCE9KDEmZSkmJihpPTEtaSksbj1sK2kqKGEtbCksZSl7ZGVmYXVsdDpjYXNlIDY6Y2FzZSAwOnI9YSxnPW4sYj1sO2JyZWFrO2Nhc2UgMTpyPW4sZz1hLGI9bDticmVhaztjYXNlIDI6cj1sLGc9YSxiPW47YnJlYWs7Y2FzZSAzOnI9bCxnPW4sYj1hO2JyZWFrO2Nhc2UgNDpyPW4sZz1sLGI9YTticmVhaztjYXNlIDU6cj1hLGc9bCxiPW59cmV0dXJuWzI1NSpyLDI1NSpnLDI1NSpiXX1mdW5jdGlvbiBDKHQpe3JldHVybiBpKE0odCkpfWZ1bmN0aW9uIEQodCl7cmV0dXJuIG4oTSh0KSl9ZnVuY3Rpb24gSSh0KXtyZXR1cm4gbChNKHQpKX1mdW5jdGlvbiBBKHQpe3JldHVybiBzKE0odCkpfWZ1bmN0aW9uIFQodCl7dmFyIGUsYSxpLG49dFswXS8xMDAsbz10WzFdLzEwMCxyPXRbMl0vMTAwLGw9dFszXS8xMDA7cmV0dXJuIGU9MS1NYXRoLm1pbigxLG4qKDEtbCkrbCksYT0xLU1hdGgubWluKDEsbyooMS1sKStsKSxpPTEtTWF0aC5taW4oMSxyKigxLWwpK2wpLFsyNTUqZSwyNTUqYSwyNTUqaV19ZnVuY3Rpb24gUCh0KXtyZXR1cm4gaShUKHQpKX1mdW5jdGlvbiBGKHQpe3JldHVybiBuKFQodCkpfWZ1bmN0aW9uIF8odCl7cmV0dXJuIG8oVCh0KSl9ZnVuY3Rpb24gUih0KXtyZXR1cm4gcyhUKHQpKX1mdW5jdGlvbiBWKHQpe3ZhciBlLGEsaSxuPXRbMF0vMTAwLG89dFsxXS8xMDAscj10WzJdLzEwMDtyZXR1cm4gZT0zLjI0MDYqbistMS41MzcyKm8rciotLjQ5ODYsYT1uKi0uOTY4OSsxLjg3NTgqbysuMDQxNSpyLGk9LjA1NTcqbitvKi0uMjA0KzEuMDU3KnIsZT1lPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGUsMS8yLjQpLS4wNTU6ZT0xMi45MiplLGE9YT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhhLDEvMi40KS0uMDU1OmE9MTIuOTIqYSxpPWk+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coaSwxLzIuNCktLjA1NTppPTEyLjkyKmksZT1NYXRoLm1pbihNYXRoLm1heCgwLGUpLDEpLGE9TWF0aC5taW4oTWF0aC5tYXgoMCxhKSwxKSxpPU1hdGgubWluKE1hdGgubWF4KDAsaSksMSksWzI1NSplLDI1NSphLDI1NSppXX1mdW5jdGlvbiBMKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gbi89OTUuMDQ3LG8vPTEwMCxyLz0xMDguODgzLG49bj4uMDA4ODU2P01hdGgucG93KG4sMS8zKTo3Ljc4NypuKzE2LzExNixvPW8+LjAwODg1Nj9NYXRoLnBvdyhvLDEvMyk6Ny43ODcqbysxNi8xMTYscj1yPi4wMDg4NTY/TWF0aC5wb3cociwxLzMpOjcuNzg3KnIrMTYvMTE2LGU9MTE2Km8tMTYsYT01MDAqKG4tbyksaT0yMDAqKG8tciksW2UsYSxpXX1mdW5jdGlvbiBPKHQpe3JldHVybiBXKEwodCkpfWZ1bmN0aW9uIEIodCl7dmFyIGUsYSxpLG4sbz10WzBdLHI9dFsxXSxsPXRbMl07cmV0dXJuIDg+PW8/KGE9MTAwKm8vOTAzLjMsbj03Ljc4NyooYS8xMDApKzE2LzExNik6KGE9MTAwKk1hdGgucG93KChvKzE2KS8xMTYsMyksbj1NYXRoLnBvdyhhLzEwMCwxLzMpKSxlPS4wMDg4NTY+PWUvOTUuMDQ3P2U9OTUuMDQ3KihyLzUwMCtuLTE2LzExNikvNy43ODc6OTUuMDQ3Kk1hdGgucG93KHIvNTAwK24sMyksaT0uMDA4ODU5Pj1pLzEwOC44ODM/aT0xMDguODgzKihuLWwvMjAwLTE2LzExNikvNy43ODc6MTA4Ljg4MypNYXRoLnBvdyhuLWwvMjAwLDMpLFtlLGEsaV19ZnVuY3Rpb24gVyh0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIGU9TWF0aC5hdGFuMihyLG8pLGE9MzYwKmUvMi9NYXRoLlBJLDA+YSYmKGErPTM2MCksaT1NYXRoLnNxcnQobypvK3IqciksW24saSxhXX1mdW5jdGlvbiB6KHQpe3JldHVybiBWKEIodCkpfWZ1bmN0aW9uIE4odCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBpPXIvMzYwKjIqTWF0aC5QSSxlPW8qTWF0aC5jb3MoaSksYT1vKk1hdGguc2luKGkpLFtuLGUsYV19ZnVuY3Rpb24gRSh0KXtyZXR1cm4gQihOKHQpKX1mdW5jdGlvbiBIKHQpe3JldHVybiB6KE4odCkpfWZ1bmN0aW9uIFUodCl7cmV0dXJuIFpbdF19ZnVuY3Rpb24gaih0KXtyZXR1cm4gaShVKHQpKX1mdW5jdGlvbiBxKHQpe3JldHVybiBuKFUodCkpfWZ1bmN0aW9uIFkodCl7cmV0dXJuIG8oVSh0KSl9ZnVuY3Rpb24gWCh0KXtyZXR1cm4gbChVKHQpKX1mdW5jdGlvbiBLKHQpe3JldHVybiB1KFUodCkpfWZ1bmN0aW9uIEoodCl7cmV0dXJuIGQoVSh0KSl9ZS5leHBvcnRzPXtyZ2IyaHNsOmkscmdiMmhzdjpuLHJnYjJod2I6byxyZ2IyY215azpsLHJnYjJrZXl3b3JkOnMscmdiMnh5ejpkLHJnYjJsYWI6dSxyZ2IybGNoOmMsaHNsMnJnYjpoLGhzbDJoc3Y6Zixoc2wyaHdiOnAsaHNsMmNteWs6bSxoc2wya2V5d29yZDp2LGhzdjJyZ2I6eCxoc3YyaHNsOnksaHN2Mmh3YjprLGhzdjJjbXlrOlMsaHN2MmtleXdvcmQ6dyxod2IycmdiOk0saHdiMmhzbDpDLGh3YjJoc3Y6RCxod2IyY215azpJLGh3YjJrZXl3b3JkOkEsY215azJyZ2I6VCxjbXlrMmhzbDpQLGNteWsyaHN2OkYsY215azJod2I6XyxjbXlrMmtleXdvcmQ6UixrZXl3b3JkMnJnYjpVLGtleXdvcmQyaHNsOmosa2V5d29yZDJoc3Y6cSxrZXl3b3JkMmh3YjpZLGtleXdvcmQyY215azpYLGtleXdvcmQybGFiOkssa2V5d29yZDJ4eXo6Six4eXoycmdiOlYseHl6MmxhYjpMLHh5ejJsY2g6TyxsYWIyeHl6OkIsbGFiMnJnYjp6LGxhYjJsY2g6VyxsY2gybGFiOk4sbGNoMnh5ejpFLGxjaDJyZ2I6SH07dmFyIFo9e2FsaWNlYmx1ZTpbMjQwLDI0OCwyNTVdLGFudGlxdWV3aGl0ZTpbMjUwLDIzNSwyMTVdLGFxdWE6WzAsMjU1LDI1NV0sYXF1YW1hcmluZTpbMTI3LDI1NSwyMTJdLGF6dXJlOlsyNDAsMjU1LDI1NV0sYmVpZ2U6WzI0NSwyNDUsMjIwXSxiaXNxdWU6WzI1NSwyMjgsMTk2XSxibGFjazpbMCwwLDBdLGJsYW5jaGVkYWxtb25kOlsyNTUsMjM1LDIwNV0sYmx1ZTpbMCwwLDI1NV0sYmx1ZXZpb2xldDpbMTM4LDQzLDIyNl0sYnJvd246WzE2NSw0Miw0Ml0sYnVybHl3b29kOlsyMjIsMTg0LDEzNV0sY2FkZXRibHVlOls5NSwxNTgsMTYwXSxjaGFydHJldXNlOlsxMjcsMjU1LDBdLGNob2NvbGF0ZTpbMjEwLDEwNSwzMF0sY29yYWw6WzI1NSwxMjcsODBdLGNvcm5mbG93ZXJibHVlOlsxMDAsMTQ5LDIzN10sY29ybnNpbGs6WzI1NSwyNDgsMjIwXSxjcmltc29uOlsyMjAsMjAsNjBdLGN5YW46WzAsMjU1LDI1NV0sZGFya2JsdWU6WzAsMCwxMzldLGRhcmtjeWFuOlswLDEzOSwxMzldLGRhcmtnb2xkZW5yb2Q6WzE4NCwxMzQsMTFdLGRhcmtncmF5OlsxNjksMTY5LDE2OV0sZGFya2dyZWVuOlswLDEwMCwwXSxkYXJrZ3JleTpbMTY5LDE2OSwxNjldLGRhcmtraGFraTpbMTg5LDE4MywxMDddLGRhcmttYWdlbnRhOlsxMzksMCwxMzldLGRhcmtvbGl2ZWdyZWVuOls4NSwxMDcsNDddLGRhcmtvcmFuZ2U6WzI1NSwxNDAsMF0sZGFya29yY2hpZDpbMTUzLDUwLDIwNF0sZGFya3JlZDpbMTM5LDAsMF0sZGFya3NhbG1vbjpbMjMzLDE1MCwxMjJdLGRhcmtzZWFncmVlbjpbMTQzLDE4OCwxNDNdLGRhcmtzbGF0ZWJsdWU6WzcyLDYxLDEzOV0sZGFya3NsYXRlZ3JheTpbNDcsNzksNzldLGRhcmtzbGF0ZWdyZXk6WzQ3LDc5LDc5XSxkYXJrdHVycXVvaXNlOlswLDIwNiwyMDldLGRhcmt2aW9sZXQ6WzE0OCwwLDIxMV0sZGVlcHBpbms6WzI1NSwyMCwxNDddLGRlZXBza3libHVlOlswLDE5MSwyNTVdLGRpbWdyYXk6WzEwNSwxMDUsMTA1XSxkaW1ncmV5OlsxMDUsMTA1LDEwNV0sZG9kZ2VyYmx1ZTpbMzAsMTQ0LDI1NV0sZmlyZWJyaWNrOlsxNzgsMzQsMzRdLGZsb3JhbHdoaXRlOlsyNTUsMjUwLDI0MF0sZm9yZXN0Z3JlZW46WzM0LDEzOSwzNF0sZnVjaHNpYTpbMjU1LDAsMjU1XSxnYWluc2Jvcm86WzIyMCwyMjAsMjIwXSxnaG9zdHdoaXRlOlsyNDgsMjQ4LDI1NV0sZ29sZDpbMjU1LDIxNSwwXSxnb2xkZW5yb2Q6WzIxOCwxNjUsMzJdLGdyYXk6WzEyOCwxMjgsMTI4XSxncmVlbjpbMCwxMjgsMF0sZ3JlZW55ZWxsb3c6WzE3MywyNTUsNDddLGdyZXk6WzEyOCwxMjgsMTI4XSxob25leWRldzpbMjQwLDI1NSwyNDBdLGhvdHBpbms6WzI1NSwxMDUsMTgwXSxpbmRpYW5yZWQ6WzIwNSw5Miw5Ml0saW5kaWdvOls3NSwwLDEzMF0saXZvcnk6WzI1NSwyNTUsMjQwXSxraGFraTpbMjQwLDIzMCwxNDBdLGxhdmVuZGVyOlsyMzAsMjMwLDI1MF0sbGF2ZW5kZXJibHVzaDpbMjU1LDI0MCwyNDVdLGxhd25ncmVlbjpbMTI0LDI1MiwwXSxsZW1vbmNoaWZmb246WzI1NSwyNTAsMjA1XSxsaWdodGJsdWU6WzE3MywyMTYsMjMwXSxsaWdodGNvcmFsOlsyNDAsMTI4LDEyOF0sbGlnaHRjeWFuOlsyMjQsMjU1LDI1NV0sbGlnaHRnb2xkZW5yb2R5ZWxsb3c6WzI1MCwyNTAsMjEwXSxsaWdodGdyYXk6WzIxMSwyMTEsMjExXSxsaWdodGdyZWVuOlsxNDQsMjM4LDE0NF0sbGlnaHRncmV5OlsyMTEsMjExLDIxMV0sbGlnaHRwaW5rOlsyNTUsMTgyLDE5M10sbGlnaHRzYWxtb246WzI1NSwxNjAsMTIyXSxsaWdodHNlYWdyZWVuOlszMiwxNzgsMTcwXSxsaWdodHNreWJsdWU6WzEzNSwyMDYsMjUwXSxsaWdodHNsYXRlZ3JheTpbMTE5LDEzNiwxNTNdLGxpZ2h0c2xhdGVncmV5OlsxMTksMTM2LDE1M10sbGlnaHRzdGVlbGJsdWU6WzE3NiwxOTYsMjIyXSxsaWdodHllbGxvdzpbMjU1LDI1NSwyMjRdLGxpbWU6WzAsMjU1LDBdLGxpbWVncmVlbjpbNTAsMjA1LDUwXSxsaW5lbjpbMjUwLDI0MCwyMzBdLG1hZ2VudGE6WzI1NSwwLDI1NV0sbWFyb29uOlsxMjgsMCwwXSxtZWRpdW1hcXVhbWFyaW5lOlsxMDIsMjA1LDE3MF0sbWVkaXVtYmx1ZTpbMCwwLDIwNV0sbWVkaXVtb3JjaGlkOlsxODYsODUsMjExXSxtZWRpdW1wdXJwbGU6WzE0NywxMTIsMjE5XSxtZWRpdW1zZWFncmVlbjpbNjAsMTc5LDExM10sbWVkaXVtc2xhdGVibHVlOlsxMjMsMTA0LDIzOF0sbWVkaXVtc3ByaW5nZ3JlZW46WzAsMjUwLDE1NF0sbWVkaXVtdHVycXVvaXNlOls3MiwyMDksMjA0XSxtZWRpdW12aW9sZXRyZWQ6WzE5OSwyMSwxMzNdLG1pZG5pZ2h0Ymx1ZTpbMjUsMjUsMTEyXSxtaW50Y3JlYW06WzI0NSwyNTUsMjUwXSxtaXN0eXJvc2U6WzI1NSwyMjgsMjI1XSxtb2NjYXNpbjpbMjU1LDIyOCwxODFdLG5hdmFqb3doaXRlOlsyNTUsMjIyLDE3M10sbmF2eTpbMCwwLDEyOF0sb2xkbGFjZTpbMjUzLDI0NSwyMzBdLG9saXZlOlsxMjgsMTI4LDBdLG9saXZlZHJhYjpbMTA3LDE0MiwzNV0sb3JhbmdlOlsyNTUsMTY1LDBdLG9yYW5nZXJlZDpbMjU1LDY5LDBdLG9yY2hpZDpbMjE4LDExMiwyMTRdLHBhbGVnb2xkZW5yb2Q6WzIzOCwyMzIsMTcwXSxwYWxlZ3JlZW46WzE1MiwyNTEsMTUyXSxwYWxldHVycXVvaXNlOlsxNzUsMjM4LDIzOF0scGFsZXZpb2xldHJlZDpbMjE5LDExMiwxNDddLHBhcGF5YXdoaXA6WzI1NSwyMzksMjEzXSxwZWFjaHB1ZmY6WzI1NSwyMTgsMTg1XSxwZXJ1OlsyMDUsMTMzLDYzXSxwaW5rOlsyNTUsMTkyLDIwM10scGx1bTpbMjIxLDE2MCwyMjFdLHBvd2RlcmJsdWU6WzE3NiwyMjQsMjMwXSxwdXJwbGU6WzEyOCwwLDEyOF0scmViZWNjYXB1cnBsZTpbMTAyLDUxLDE1M10scmVkOlsyNTUsMCwwXSxyb3N5YnJvd246WzE4OCwxNDMsMTQzXSxyb3lhbGJsdWU6WzY1LDEwNSwyMjVdLHNhZGRsZWJyb3duOlsxMzksNjksMTldLHNhbG1vbjpbMjUwLDEyOCwxMTRdLHNhbmR5YnJvd246WzI0NCwxNjQsOTZdLHNlYWdyZWVuOls0NiwxMzksODddLHNlYXNoZWxsOlsyNTUsMjQ1LDIzOF0sc2llbm5hOlsxNjAsODIsNDVdLHNpbHZlcjpbMTkyLDE5MiwxOTJdLHNreWJsdWU6WzEzNSwyMDYsMjM1XSxzbGF0ZWJsdWU6WzEwNiw5MCwyMDVdLHNsYXRlZ3JheTpbMTEyLDEyOCwxNDRdLHNsYXRlZ3JleTpbMTEyLDEyOCwxNDRdLHNub3c6WzI1NSwyNTAsMjUwXSxzcHJpbmdncmVlbjpbMCwyNTUsMTI3XSxzdGVlbGJsdWU6WzcwLDEzMCwxODBdLHRhbjpbMjEwLDE4MCwxNDBdLHRlYWw6WzAsMTI4LDEyOF0sdGhpc3RsZTpbMjE2LDE5MSwyMTZdLHRvbWF0bzpbMjU1LDk5LDcxXSx0dXJxdW9pc2U6WzY0LDIyNCwyMDhdLHZpb2xldDpbMjM4LDEzMCwyMzhdLHdoZWF0OlsyNDUsMjIyLDE3OV0sd2hpdGU6WzI1NSwyNTUsMjU1XSx3aGl0ZXNtb2tlOlsyNDUsMjQ1LDI0NV0seWVsbG93OlsyNTUsMjU1LDBdLHllbGxvd2dyZWVuOlsxNTQsMjA1LDUwXX0sRz17fTtmb3IodmFyIFEgaW4gWilHW0pTT04uc3RyaW5naWZ5KFpbUV0pXT1RfSx7fV0sNTpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoNCksbj1mdW5jdGlvbigpe3JldHVybiBuZXcgZH07Zm9yKHZhciBvIGluIGkpe25bbytcIlJhd1wiXT1mdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGUmJihlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpLGlbdF0oZSl9fShvKTt2YXIgcj0vKFxcdyspMihcXHcrKS8uZXhlYyhvKSxsPXJbMV0scz1yWzJdO25bbF09bltsXXx8e30sbltsXVtzXT1uW29dPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtcIm51bWJlclwiPT10eXBlb2YgZSYmKGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7dmFyIGE9aVt0XShlKTtpZihcInN0cmluZ1wiPT10eXBlb2YgYXx8dm9pZCAwPT09YSlyZXR1cm4gYTtmb3IodmFyIG49MDtuPGEubGVuZ3RoO24rKylhW25dPU1hdGgucm91bmQoYVtuXSk7cmV0dXJuIGF9fShvKX12YXIgZD1mdW5jdGlvbigpe3RoaXMuY29udnM9e319O2QucHJvdG90eXBlLnJvdXRlU3BhY2U9ZnVuY3Rpb24odCxlKXt2YXIgYT1lWzBdO3JldHVybiB2b2lkIDA9PT1hP3RoaXMuZ2V0VmFsdWVzKHQpOihcIm51bWJlclwiPT10eXBlb2YgYSYmKGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkpLHRoaXMuc2V0VmFsdWVzKHQsYSkpfSxkLnByb3RvdHlwZS5zZXRWYWx1ZXM9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5zcGFjZT10LHRoaXMuY29udnM9e30sdGhpcy5jb252c1t0XT1lLHRoaXN9LGQucHJvdG90eXBlLmdldFZhbHVlcz1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmNvbnZzW3RdO2lmKCFlKXt2YXIgYT10aGlzLnNwYWNlLGk9dGhpcy5jb252c1thXTtlPW5bYV1bdF0oaSksdGhpcy5jb252c1t0XT1lfXJldHVybiBlfSxbXCJyZ2JcIixcImhzbFwiLFwiaHN2XCIsXCJjbXlrXCIsXCJrZXl3b3JkXCJdLmZvckVhY2goZnVuY3Rpb24odCl7ZC5wcm90b3R5cGVbdF09ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucm91dGVTcGFjZSh0LGFyZ3VtZW50cyl9fSksZS5leHBvcnRzPW59LHs0OjR9XSw2OltmdW5jdGlvbih0LGUsYSl7ZS5leHBvcnRzPXthbGljZWJsdWU6WzI0MCwyNDgsMjU1XSxhbnRpcXVld2hpdGU6WzI1MCwyMzUsMjE1XSxhcXVhOlswLDI1NSwyNTVdLGFxdWFtYXJpbmU6WzEyNywyNTUsMjEyXSxhenVyZTpbMjQwLDI1NSwyNTVdLGJlaWdlOlsyNDUsMjQ1LDIyMF0sYmlzcXVlOlsyNTUsMjI4LDE5Nl0sYmxhY2s6WzAsMCwwXSxibGFuY2hlZGFsbW9uZDpbMjU1LDIzNSwyMDVdLGJsdWU6WzAsMCwyNTVdLGJsdWV2aW9sZXQ6WzEzOCw0MywyMjZdLGJyb3duOlsxNjUsNDIsNDJdLGJ1cmx5d29vZDpbMjIyLDE4NCwxMzVdLGNhZGV0Ymx1ZTpbOTUsMTU4LDE2MF0sY2hhcnRyZXVzZTpbMTI3LDI1NSwwXSxjaG9jb2xhdGU6WzIxMCwxMDUsMzBdLGNvcmFsOlsyNTUsMTI3LDgwXSxjb3JuZmxvd2VyYmx1ZTpbMTAwLDE0OSwyMzddLGNvcm5zaWxrOlsyNTUsMjQ4LDIyMF0sY3JpbXNvbjpbMjIwLDIwLDYwXSxjeWFuOlswLDI1NSwyNTVdLGRhcmtibHVlOlswLDAsMTM5XSxkYXJrY3lhbjpbMCwxMzksMTM5XSxkYXJrZ29sZGVucm9kOlsxODQsMTM0LDExXSxkYXJrZ3JheTpbMTY5LDE2OSwxNjldLGRhcmtncmVlbjpbMCwxMDAsMF0sZGFya2dyZXk6WzE2OSwxNjksMTY5XSxkYXJra2hha2k6WzE4OSwxODMsMTA3XSxkYXJrbWFnZW50YTpbMTM5LDAsMTM5XSxkYXJrb2xpdmVncmVlbjpbODUsMTA3LDQ3XSxkYXJrb3JhbmdlOlsyNTUsMTQwLDBdLGRhcmtvcmNoaWQ6WzE1Myw1MCwyMDRdLGRhcmtyZWQ6WzEzOSwwLDBdLGRhcmtzYWxtb246WzIzMywxNTAsMTIyXSxkYXJrc2VhZ3JlZW46WzE0MywxODgsMTQzXSxkYXJrc2xhdGVibHVlOls3Miw2MSwxMzldLGRhcmtzbGF0ZWdyYXk6WzQ3LDc5LDc5XSxkYXJrc2xhdGVncmV5Ols0Nyw3OSw3OV0sZGFya3R1cnF1b2lzZTpbMCwyMDYsMjA5XSxkYXJrdmlvbGV0OlsxNDgsMCwyMTFdLGRlZXBwaW5rOlsyNTUsMjAsMTQ3XSxkZWVwc2t5Ymx1ZTpbMCwxOTEsMjU1XSxkaW1ncmF5OlsxMDUsMTA1LDEwNV0sZGltZ3JleTpbMTA1LDEwNSwxMDVdLGRvZGdlcmJsdWU6WzMwLDE0NCwyNTVdLGZpcmVicmljazpbMTc4LDM0LDM0XSxmbG9yYWx3aGl0ZTpbMjU1LDI1MCwyNDBdLGZvcmVzdGdyZWVuOlszNCwxMzksMzRdLGZ1Y2hzaWE6WzI1NSwwLDI1NV0sZ2FpbnNib3JvOlsyMjAsMjIwLDIyMF0sZ2hvc3R3aGl0ZTpbMjQ4LDI0OCwyNTVdLGdvbGQ6WzI1NSwyMTUsMF0sZ29sZGVucm9kOlsyMTgsMTY1LDMyXSxncmF5OlsxMjgsMTI4LDEyOF0sZ3JlZW46WzAsMTI4LDBdLGdyZWVueWVsbG93OlsxNzMsMjU1LDQ3XSxncmV5OlsxMjgsMTI4LDEyOF0saG9uZXlkZXc6WzI0MCwyNTUsMjQwXSxob3RwaW5rOlsyNTUsMTA1LDE4MF0saW5kaWFucmVkOlsyMDUsOTIsOTJdLGluZGlnbzpbNzUsMCwxMzBdLGl2b3J5OlsyNTUsMjU1LDI0MF0sa2hha2k6WzI0MCwyMzAsMTQwXSxsYXZlbmRlcjpbMjMwLDIzMCwyNTBdLGxhdmVuZGVyYmx1c2g6WzI1NSwyNDAsMjQ1XSxsYXduZ3JlZW46WzEyNCwyNTIsMF0sbGVtb25jaGlmZm9uOlsyNTUsMjUwLDIwNV0sbGlnaHRibHVlOlsxNzMsMjE2LDIzMF0sbGlnaHRjb3JhbDpbMjQwLDEyOCwxMjhdLGxpZ2h0Y3lhbjpbMjI0LDI1NSwyNTVdLGxpZ2h0Z29sZGVucm9keWVsbG93OlsyNTAsMjUwLDIxMF0sbGlnaHRncmF5OlsyMTEsMjExLDIxMV0sbGlnaHRncmVlbjpbMTQ0LDIzOCwxNDRdLGxpZ2h0Z3JleTpbMjExLDIxMSwyMTFdLGxpZ2h0cGluazpbMjU1LDE4MiwxOTNdLGxpZ2h0c2FsbW9uOlsyNTUsMTYwLDEyMl0sbGlnaHRzZWFncmVlbjpbMzIsMTc4LDE3MF0sbGlnaHRza3libHVlOlsxMzUsMjA2LDI1MF0sbGlnaHRzbGF0ZWdyYXk6WzExOSwxMzYsMTUzXSxsaWdodHNsYXRlZ3JleTpbMTE5LDEzNiwxNTNdLGxpZ2h0c3RlZWxibHVlOlsxNzYsMTk2LDIyMl0sbGlnaHR5ZWxsb3c6WzI1NSwyNTUsMjI0XSxsaW1lOlswLDI1NSwwXSxsaW1lZ3JlZW46WzUwLDIwNSw1MF0sbGluZW46WzI1MCwyNDAsMjMwXSxtYWdlbnRhOlsyNTUsMCwyNTVdLG1hcm9vbjpbMTI4LDAsMF0sbWVkaXVtYXF1YW1hcmluZTpbMTAyLDIwNSwxNzBdLG1lZGl1bWJsdWU6WzAsMCwyMDVdLG1lZGl1bW9yY2hpZDpbMTg2LDg1LDIxMV0sbWVkaXVtcHVycGxlOlsxNDcsMTEyLDIxOV0sbWVkaXVtc2VhZ3JlZW46WzYwLDE3OSwxMTNdLG1lZGl1bXNsYXRlYmx1ZTpbMTIzLDEwNCwyMzhdLG1lZGl1bXNwcmluZ2dyZWVuOlswLDI1MCwxNTRdLG1lZGl1bXR1cnF1b2lzZTpbNzIsMjA5LDIwNF0sbWVkaXVtdmlvbGV0cmVkOlsxOTksMjEsMTMzXSxtaWRuaWdodGJsdWU6WzI1LDI1LDExMl0sbWludGNyZWFtOlsyNDUsMjU1LDI1MF0sbWlzdHlyb3NlOlsyNTUsMjI4LDIyNV0sbW9jY2FzaW46WzI1NSwyMjgsMTgxXSxuYXZham93aGl0ZTpbMjU1LDIyMiwxNzNdLG5hdnk6WzAsMCwxMjhdLG9sZGxhY2U6WzI1MywyNDUsMjMwXSxvbGl2ZTpbMTI4LDEyOCwwXSxvbGl2ZWRyYWI6WzEwNywxNDIsMzVdLG9yYW5nZTpbMjU1LDE2NSwwXSxvcmFuZ2VyZWQ6WzI1NSw2OSwwXSxvcmNoaWQ6WzIxOCwxMTIsMjE0XSxwYWxlZ29sZGVucm9kOlsyMzgsMjMyLDE3MF0scGFsZWdyZWVuOlsxNTIsMjUxLDE1Ml0scGFsZXR1cnF1b2lzZTpbMTc1LDIzOCwyMzhdLHBhbGV2aW9sZXRyZWQ6WzIxOSwxMTIsMTQ3XSxwYXBheWF3aGlwOlsyNTUsMjM5LDIxM10scGVhY2hwdWZmOlsyNTUsMjE4LDE4NV0scGVydTpbMjA1LDEzMyw2M10scGluazpbMjU1LDE5MiwyMDNdLHBsdW06WzIyMSwxNjAsMjIxXSxwb3dkZXJibHVlOlsxNzYsMjI0LDIzMF0scHVycGxlOlsxMjgsMCwxMjhdLHJlYmVjY2FwdXJwbGU6WzEwMiw1MSwxNTNdLHJlZDpbMjU1LDAsMF0scm9zeWJyb3duOlsxODgsMTQzLDE0M10scm95YWxibHVlOls2NSwxMDUsMjI1XSxzYWRkbGVicm93bjpbMTM5LDY5LDE5XSxzYWxtb246WzI1MCwxMjgsMTE0XSxzYW5keWJyb3duOlsyNDQsMTY0LDk2XSxzZWFncmVlbjpbNDYsMTM5LDg3XSxzZWFzaGVsbDpbMjU1LDI0NSwyMzhdLHNpZW5uYTpbMTYwLDgyLDQ1XSxzaWx2ZXI6WzE5MiwxOTIsMTkyXSxza3libHVlOlsxMzUsMjA2LDIzNV0sc2xhdGVibHVlOlsxMDYsOTAsMjA1XSxzbGF0ZWdyYXk6WzExMiwxMjgsMTQ0XSxzbGF0ZWdyZXk6WzExMiwxMjgsMTQ0XSxzbm93OlsyNTUsMjUwLDI1MF0sc3ByaW5nZ3JlZW46WzAsMjU1LDEyN10sc3RlZWxibHVlOls3MCwxMzAsMTgwXSx0YW46WzIxMCwxODAsMTQwXSx0ZWFsOlswLDEyOCwxMjhdLHRoaXN0bGU6WzIxNiwxOTEsMjE2XSx0b21hdG86WzI1NSw5OSw3MV0sdHVycXVvaXNlOls2NCwyMjQsMjA4XSx2aW9sZXQ6WzIzOCwxMzAsMjM4XSx3aGVhdDpbMjQ1LDIyMiwxNzldLHdoaXRlOlsyNTUsMjU1LDI1NV0sd2hpdGVzbW9rZTpbMjQ1LDI0NSwyNDVdLHllbGxvdzpbMjU1LDI1NSwwXSx5ZWxsb3dncmVlbjpbMTU0LDIwNSw1MF19fSx7fV0sNzpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoMjgpKCk7dCgyNikoaSksdCgyMikoaSksdCgyNSkoaSksdCgyMSkoaSksdCgyMykoaSksdCgyNCkoaSksdCgyOSkoaSksdCgzMykoaSksdCgzMSkoaSksdCgzNCkoaSksdCgzMikoaSksdCgzNSkoaSksdCgzMCkoaSksdCgyNykoaSksdCgzNikoaSksdCgzNykoaSksdCgzOCkoaSksdCgzOSkoaSksdCg0MCkoaSksdCg0MykoaSksdCg0MSkoaSksdCg0MikoaSksdCg0NCkoaSksdCg0NSkoaSksdCg0NikoaSksdCgxNSkoaSksdCgxNikoaSksdCgxNykoaSksdCgxOCkoaSksdCgxOSkoaSksdCgyMCkoaSksdCg4KShpKSx0KDkpKGkpLHQoMTApKGkpLHQoMTEpKGkpLHQoMTIpKGkpLHQoMTMpKGkpLHQoMTQpKGkpLHdpbmRvdy5DaGFydD1lLmV4cG9ydHM9aX0sezEwOjEwLDExOjExLDEyOjEyLDEzOjEzLDE0OjE0LDE1OjE1LDE2OjE2LDE3OjE3LDE4OjE4LDE5OjE5LDIwOjIwLDIxOjIxLDIyOjIyLDIzOjIzLDI0OjI0LDI1OjI1LDI2OjI2LDI3OjI3LDI4OjI4LDI5OjI5LDMwOjMwLDMxOjMxLDMyOjMyLDMzOjMzLDM0OjM0LDM1OjM1LDM2OjM2LDM3OjM3LDM4OjM4LDM5OjM5LDQwOjQwLDQxOjQxLDQyOjQyLDQzOjQzLDQ0OjQ0LDQ1OjQ1LDQ2OjQ2LDg6OCw5Ojl9XSw4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuQmFyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImJhclwiLG5ldyB0KGUsYSl9fX0se31dLDk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5CdWJibGU9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiYnViYmxlXCIsbmV3IHQoZSxhKX19fSx7fV0sMTA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5Eb3VnaG51dD1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJkb3VnaG51dFwiLG5ldyB0KGUsYSl9fX0se31dLDExOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3QuTGluZT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJsaW5lXCIsbmV3IHQoZSxhKX19fSx7fV0sMTI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5Qb2xhckFyZWE9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwicG9sYXJBcmVhXCIsbmV3IHQoZSxhKX19fSx7fV0sMTM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5SYWRhcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJyYWRhclwiLG5ldyB0KGUsYSl9fX0se31dLDE0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXtob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaWQ6XCJ4LWF4aXMtMVwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJsZWZ0XCIsaWQ6XCJ5LWF4aXMtMVwifV19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCl7cmV0dXJuXCIoXCIrdC54TGFiZWwrXCIsIFwiK3QueUxhYmVsK1wiKVwifX19fTt0LmRlZmF1bHRzLnNjYXR0ZXI9ZSx0LmNvbnRyb2xsZXJzLnNjYXR0ZXI9dC5jb250cm9sbGVycy5saW5lLHQuU2NhdHRlcj1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJzY2F0dGVyXCIsbmV3IHQoZSxhKX19fSx7fV0sMTU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuYmFyPXtob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwiY2F0ZWdvcnlcIixjYXRlZ29yeVBlcmNlbnRhZ2U6LjgsYmFyUGVyY2VudGFnZTouOSxncmlkTGluZXM6e29mZnNldEdyaWRMaW5lczohMH19XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIn1dfX0sdC5jb250cm9sbGVycy5iYXI9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlJlY3RhbmdsZSxpbml0aWFsaXplOmZ1bmN0aW9uKGUsYSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMsZSxhKSx0aGlzLmdldE1ldGEoKS5iYXI9ITB9LGdldEJhckNvdW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPTA7cmV0dXJuIGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oZSxpKXt2YXIgbj10LmNoYXJ0LmdldERhdGFzZXRNZXRhKGkpO24uYmFyJiZ0LmNoYXJ0LmlzRGF0YXNldFZpc2libGUoaSkmJisrYX0sdCksYX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXM7ZS5lYWNoKGEuZ2V0TWV0YSgpLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSxhKX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9bi5nZXRTY2FsZUZvcklkKG8ueEF4aXNJRCksbD1uLmdldFNjYWxlRm9ySWQoby55QXhpc0lEKSxzPWwuZ2V0QmFzZVBpeGVsKCksZD1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlLHU9dC5jdXN0b218fHt9LGM9bi5nZXREYXRhc2V0KCk7dC5feFNjYWxlPXIsdC5feVNjYWxlPWwsdC5fZGF0YXNldEluZGV4PW4uaW5kZXgsdC5faW5kZXg9YTt2YXIgaD1uLmdldFJ1bGVyKGEpO3QuX21vZGVsPXt4Om4uY2FsY3VsYXRlQmFyWChhLG4uaW5kZXgsaCkseTppP3M6bi5jYWxjdWxhdGVCYXJZKGEsbi5pbmRleCksbGFiZWw6bi5jaGFydC5kYXRhLmxhYmVsc1thXSxkYXRhc2V0TGFiZWw6Yy5sYWJlbCxiYXNlOmk/czpuLmNhbGN1bGF0ZUJhckJhc2Uobi5pbmRleCxhKSx3aWR0aDpuLmNhbGN1bGF0ZUJhcldpZHRoKGgpLGJhY2tncm91bmRDb2xvcjp1LmJhY2tncm91bmRDb2xvcj91LmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJhY2tncm91bmRDb2xvcixhLGQuYmFja2dyb3VuZENvbG9yKSxib3JkZXJTa2lwcGVkOnUuYm9yZGVyU2tpcHBlZD91LmJvcmRlclNraXBwZWQ6ZC5ib3JkZXJTa2lwcGVkLGJvcmRlckNvbG9yOnUuYm9yZGVyQ29sb3I/dS5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChjLmJvcmRlckNvbG9yLGEsZC5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6dS5ib3JkZXJXaWR0aD91LmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYm9yZGVyV2lkdGgsYSxkLmJvcmRlcldpZHRoKX0sdC5waXZvdCgpfSxjYWxjdWxhdGVCYXJCYXNlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz0wO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9YS5jaGFydCxsPXIuZGF0YS5kYXRhc2V0cyxzPU51bWJlcihsW3RdLmRhdGFbZV0pLGQ9MDt0PmQ7ZCsrKXt2YXIgdT1sW2RdLGM9ci5nZXREYXRhc2V0TWV0YShkKTtpZihjLmJhciYmYy55QXhpc0lEPT09bi5pZCYmci5pc0RhdGFzZXRWaXNpYmxlKGQpKXt2YXIgaD1OdW1iZXIodS5kYXRhW2VdKTtvKz0wPnM/TWF0aC5taW4oaCwwKTpNYXRoLm1heChoLDApfX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfXJldHVybiBuLmdldEJhc2VQaXhlbCgpfSxnZXRSdWxlcjpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89YS5nZXRCYXJDb3VudCgpO2U9XCJjYXRlZ29yeVwiPT09bi5vcHRpb25zLnR5cGU/bi5nZXRQaXhlbEZvclRpY2sodCsxKS1uLmdldFBpeGVsRm9yVGljayh0KTpuLndpZHRoL24udGlja3MubGVuZ3RoO3ZhciByPWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSxsPShlLWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSkvMixzPXIvbztpZihuLnRpY2tzLmxlbmd0aCE9PWEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoKXt2YXIgZD1uLnRpY2tzLmxlbmd0aC9hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aDtzKj1kfXZhciB1PXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2UsYz1zLXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2U7cmV0dXJue2RhdGFzZXRDb3VudDpvLHRpY2tXaWR0aDplLGNhdGVnb3J5V2lkdGg6cixjYXRlZ29yeVNwYWNpbmc6bCxmdWxsQmFyV2lkdGg6cyxiYXJXaWR0aDp1LGJhclNwYWNpbmc6Y319LGNhbGN1bGF0ZUJhcldpZHRoOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0U2NhbGVGb3JJZCh0aGlzLmdldE1ldGEoKS54QXhpc0lEKTtyZXR1cm4gZS5vcHRpb25zLmJhclRoaWNrbmVzcz9lLm9wdGlvbnMuYmFyVGhpY2tuZXNzOmUub3B0aW9ucy5zdGFja2VkP3QuY2F0ZWdvcnlXaWR0aDp0LmJhcldpZHRofSxnZXRCYXJJbmRleDpmdW5jdGlvbih0KXt2YXIgZSxhLGk9MDtmb3IoYT0wO3Q+YTsrK2EpZT10aGlzLmNoYXJ0LmdldERhdGFzZXRNZXRhKGEpLGUuYmFyJiZ0aGlzLmNoYXJ0LmlzRGF0YXNldFZpc2libGUoYSkmJisraTtyZXR1cm4gaX0sY2FsY3VsYXRlQmFyWDpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPWkuZ2V0TWV0YSgpLG89aS5nZXRTY2FsZUZvcklkKG4ueEF4aXNJRCkscj1pLmdldEJhckluZGV4KGUpLGw9by5nZXRQaXhlbEZvclZhbHVlKG51bGwsdCxlLGkuY2hhcnQuaXNDb21ibyk7cmV0dXJuIGwtPWkuY2hhcnQuaXNDb21ibz9hLnRpY2tXaWR0aC8yOjAsby5vcHRpb25zLnN0YWNrZWQ/bCthLmNhdGVnb3J5V2lkdGgvMithLmNhdGVnb3J5U3BhY2luZzpsK2EuYmFyV2lkdGgvMithLmNhdGVnb3J5U3BhY2luZythLmJhcldpZHRoKnIrYS5iYXJTcGFjaW5nLzIrYS5iYXJTcGFjaW5nKnJ9LGNhbGN1bGF0ZUJhclk6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPU51bWJlcihhLmdldERhdGFzZXQoKS5kYXRhW3RdKTtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPTAsbD0wLHM9MDtlPnM7cysrKXt2YXIgZD1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbc10sdT1hLmNoYXJ0LmdldERhdGFzZXRNZXRhKHMpO2lmKHUuYmFyJiZ1LnlBeGlzSUQ9PT1uLmlkJiZhLmNoYXJ0LmlzRGF0YXNldFZpc2libGUocykpe3ZhciBjPU51bWJlcihkLmRhdGFbdF0pOzA+Yz9sKz1jfHwwOnIrPWN8fDB9fXJldHVybiAwPm8/bi5nZXRQaXhlbEZvclZhbHVlKGwrbyk6bi5nZXRQaXhlbEZvclZhbHVlKHIrbyl9cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dGhpcyxuPXR8fDEsbz1pLmdldE1ldGEoKS5kYXRhLHI9aS5nZXREYXRhc2V0KCk7Zm9yKGU9MCxhPW8ubGVuZ3RoO2E+ZTsrK2Upe3ZhciBsPXIuZGF0YVtlXTtudWxsPT09bHx8dm9pZCAwPT09bHx8aXNOYU4obCl8fG9bZV0udHJhbnNpdGlvbihuKS5kcmF3KCl9fSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbDtvLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yP24uaG92ZXJCYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ob3ZlckJhY2tncm91bmRDb2xvcixpLGUuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yP24uaG92ZXJCb3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQm9yZGVyQ29sb3IsaSxlLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRoP24uaG92ZXJCb3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQm9yZGVyV2lkdGgsaSxvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89dC5fbW9kZWwscj10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucmVjdGFuZ2xlO28uYmFja2dyb3VuZENvbG9yPW4uYmFja2dyb3VuZENvbG9yP24uYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYmFja2dyb3VuZENvbG9yLGksci5iYWNrZ3JvdW5kQ29sb3IpLG8uYm9yZGVyQ29sb3I9bi5ib3JkZXJDb2xvcj9uLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYm9yZGVyQ29sb3IsaSxyLmJvcmRlckNvbG9yKSxvLmJvcmRlcldpZHRoPW4uYm9yZGVyV2lkdGg/bi5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmJvcmRlcldpZHRoLGksci5ib3JkZXJXaWR0aCl9fSksdC5kZWZhdWx0cy5ob3Jpem9udGFsQmFyPXtob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIn1dLHlBeGVzOlt7cG9zaXRpb246XCJsZWZ0XCIsdHlwZTpcImNhdGVnb3J5XCIsY2F0ZWdvcnlQZXJjZW50YWdlOi44LGJhclBlcmNlbnRhZ2U6LjksZ3JpZExpbmVzOntvZmZzZXRHcmlkTGluZXM6ITB9fV19LGVsZW1lbnRzOntyZWN0YW5nbGU6e2JvcmRlclNraXBwZWQ6XCJsZWZ0XCJ9fSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbih0LGUpe3ZhciBhPVwiXCI7cmV0dXJuIHQubGVuZ3RoPjAmJih0WzBdLnlMYWJlbD9hPXRbMF0ueUxhYmVsOmUubGFiZWxzLmxlbmd0aD4wJiZ0WzBdLmluZGV4PGUubGFiZWxzLmxlbmd0aCYmKGE9ZS5sYWJlbHNbdFswXS5pbmRleF0pKSxhfSxsYWJlbDpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmxhYmVsfHxcIlwiO3JldHVybiBhK1wiOiBcIit0LnhMYWJlbH19fX0sdC5jb250cm9sbGVycy5ob3Jpem9udGFsQmFyPXQuY29udHJvbGxlcnMuYmFyLmV4dGVuZCh7dXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9bi5nZXRTY2FsZUZvcklkKG8ueEF4aXNJRCksbD1uLmdldFNjYWxlRm9ySWQoby55QXhpc0lEKSxzPXIuZ2V0QmFzZVBpeGVsKCksZD10LmN1c3RvbXx8e30sdT1uLmdldERhdGFzZXQoKSxjPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGU7dC5feFNjYWxlPXIsdC5feVNjYWxlPWwsdC5fZGF0YXNldEluZGV4PW4uaW5kZXgsdC5faW5kZXg9YTt2YXIgaD1uLmdldFJ1bGVyKGEpO3QuX21vZGVsPXt4Omk/czpuLmNhbGN1bGF0ZUJhclgoYSxuLmluZGV4KSx5Om4uY2FsY3VsYXRlQmFyWShhLG4uaW5kZXgsaCksbGFiZWw6bi5jaGFydC5kYXRhLmxhYmVsc1thXSxkYXRhc2V0TGFiZWw6dS5sYWJlbCxiYXNlOmk/czpuLmNhbGN1bGF0ZUJhckJhc2Uobi5pbmRleCxhKSxoZWlnaHQ6bi5jYWxjdWxhdGVCYXJIZWlnaHQoaCksYmFja2dyb3VuZENvbG9yOmQuYmFja2dyb3VuZENvbG9yP2QuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYmFja2dyb3VuZENvbG9yLGEsYy5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlclNraXBwZWQ6ZC5ib3JkZXJTa2lwcGVkP2QuYm9yZGVyU2tpcHBlZDpjLmJvcmRlclNraXBwZWQsYm9yZGVyQ29sb3I6ZC5ib3JkZXJDb2xvcj9kLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuYm9yZGVyQ29sb3IsYSxjLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDpkLmJvcmRlcldpZHRoP2QuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5ib3JkZXJXaWR0aCxhLGMuYm9yZGVyV2lkdGgpfSx0LmRyYXc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBzWyh1K3QpJTRdfXZhciBlPXRoaXMuX2NoYXJ0LmN0eCxhPXRoaXMuX3ZpZXcsaT1hLmhlaWdodC8yLG49YS55LWksbz1hLnkraSxyPWEuYmFzZS0oYS5iYXNlLWEueCksbD1hLmJvcmRlcldpZHRoLzI7YS5ib3JkZXJXaWR0aCYmKG4rPWwsby09bCxyKz1sKSxlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPWEuYmFja2dyb3VuZENvbG9yLGUuc3Ryb2tlU3R5bGU9YS5ib3JkZXJDb2xvcixlLmxpbmVXaWR0aD1hLmJvcmRlcldpZHRoO3ZhciBzPVtbYS5iYXNlLG9dLFthLmJhc2Usbl0sW3Isbl0sW3Isb11dLGQ9W1wiYm90dG9tXCIsXCJsZWZ0XCIsXCJ0b3BcIixcInJpZ2h0XCJdLHU9ZC5pbmRleE9mKGEuYm9yZGVyU2tpcHBlZCwwKTstMT09PXUmJih1PTApLGUubW92ZVRvLmFwcGx5KGUsdCgwKSk7Zm9yKHZhciBjPTE7ND5jO2MrKyllLmxpbmVUby5hcHBseShlLHQoYykpO2UuZmlsbCgpLGEuYm9yZGVyV2lkdGgmJmUuc3Ryb2tlKCl9LHQucGl2b3QoKX0sY2FsY3VsYXRlQmFyQmFzZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89MDtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPWEuY2hhcnQsbD1yLmRhdGEuZGF0YXNldHMscz1OdW1iZXIobFt0XS5kYXRhW2VdKSxkPTA7dD5kO2QrKyl7dmFyIHU9bFtkXSxjPXIuZ2V0RGF0YXNldE1ldGEoZCk7aWYoYy5iYXImJmMueEF4aXNJRD09PW4uaWQmJnIuaXNEYXRhc2V0VmlzaWJsZShkKSl7XG52YXIgaD1OdW1iZXIodS5kYXRhW2VdKTtvKz0wPnM/TWF0aC5taW4oaCwwKTpNYXRoLm1heChoLDApfX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfXJldHVybiBuLmdldEJhc2VQaXhlbCgpfSxnZXRSdWxlcjpmdW5jdGlvbih0KXt2YXIgZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89YS5nZXRCYXJDb3VudCgpO2U9XCJjYXRlZ29yeVwiPT09bi5vcHRpb25zLnR5cGU/bi5nZXRQaXhlbEZvclRpY2sodCsxKS1uLmdldFBpeGVsRm9yVGljayh0KTpuLndpZHRoL24udGlja3MubGVuZ3RoO3ZhciByPWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSxsPShlLWUqbi5vcHRpb25zLmNhdGVnb3J5UGVyY2VudGFnZSkvMixzPXIvbztpZihuLnRpY2tzLmxlbmd0aCE9PWEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoKXt2YXIgZD1uLnRpY2tzLmxlbmd0aC9hLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aDtzKj1kfXZhciB1PXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2UsYz1zLXMqbi5vcHRpb25zLmJhclBlcmNlbnRhZ2U7cmV0dXJue2RhdGFzZXRDb3VudDpvLHRpY2tIZWlnaHQ6ZSxjYXRlZ29yeUhlaWdodDpyLGNhdGVnb3J5U3BhY2luZzpsLGZ1bGxCYXJIZWlnaHQ6cyxiYXJIZWlnaHQ6dSxiYXJTcGFjaW5nOmN9fSxjYWxjdWxhdGVCYXJIZWlnaHQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZ2V0U2NhbGVGb3JJZChlLmdldE1ldGEoKS55QXhpc0lEKTtyZXR1cm4gYS5vcHRpb25zLmJhclRoaWNrbmVzcz9hLm9wdGlvbnMuYmFyVGhpY2tuZXNzOmEub3B0aW9ucy5zdGFja2VkP3QuY2F0ZWdvcnlIZWlnaHQ6dC5iYXJIZWlnaHR9LGNhbGN1bGF0ZUJhclg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS54QXhpc0lEKSxvPU51bWJlcihhLmdldERhdGFzZXQoKS5kYXRhW3RdKTtpZihuLm9wdGlvbnMuc3RhY2tlZCl7Zm9yKHZhciByPTAsbD0wLHM9MDtlPnM7cysrKXt2YXIgZD1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbc10sdT1hLmNoYXJ0LmdldERhdGFzZXRNZXRhKHMpO2lmKHUuYmFyJiZ1LnhBeGlzSUQ9PT1uLmlkJiZhLmNoYXJ0LmlzRGF0YXNldFZpc2libGUocykpe3ZhciBjPU51bWJlcihkLmRhdGFbdF0pOzA+Yz9sKz1jfHwwOnIrPWN8fDB9fXJldHVybiAwPm8/bi5nZXRQaXhlbEZvclZhbHVlKGwrbyk6bi5nZXRQaXhlbEZvclZhbHVlKHIrbyl9cmV0dXJuIG4uZ2V0UGl4ZWxGb3JWYWx1ZShvKX0sY2FsY3VsYXRlQmFyWTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcyxuPWkuZ2V0TWV0YSgpLG89aS5nZXRTY2FsZUZvcklkKG4ueUF4aXNJRCkscj1pLmdldEJhckluZGV4KGUpLGw9by5nZXRQaXhlbEZvclZhbHVlKG51bGwsdCxlLGkuY2hhcnQuaXNDb21ibyk7cmV0dXJuIGwtPWkuY2hhcnQuaXNDb21ibz9hLnRpY2tIZWlnaHQvMjowLG8ub3B0aW9ucy5zdGFja2VkP2wrYS5jYXRlZ29yeUhlaWdodC8yK2EuY2F0ZWdvcnlTcGFjaW5nOmwrYS5iYXJIZWlnaHQvMithLmNhdGVnb3J5U3BhY2luZythLmJhckhlaWdodCpyK2EuYmFyU3BhY2luZy8yK2EuYmFyU3BhY2luZypyfX0pfX0se31dLDE2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmJ1YmJsZT17aG92ZXI6e21vZGU6XCJzaW5nbGVcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwiLGlkOlwieC1heGlzLTBcIn1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwibGVmdFwiLGlkOlwieS1heGlzLTBcIn1dfSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCIsaT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5kYXRhW3QuaW5kZXhdO3JldHVybiBhK1wiOiAoXCIrdC54TGFiZWwrXCIsIFwiK3QueUxhYmVsK1wiLCBcIitpLnIrXCIpXCJ9fX19LHQuY29udHJvbGxlcnMuYnViYmxlPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49aS5kYXRhO2UuZWFjaChuLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKGEsaSxuKXt2YXIgbz10aGlzLHI9by5nZXRNZXRhKCksbD1vLmdldFNjYWxlRm9ySWQoci54QXhpc0lEKSxzPW8uZ2V0U2NhbGVGb3JJZChyLnlBeGlzSUQpLGQ9YS5jdXN0b218fHt9LHU9by5nZXREYXRhc2V0KCksYz11LmRhdGFbaV0saD1vLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQsZj1vLmluZGV4O2UuZXh0ZW5kKGEse194U2NhbGU6bCxfeVNjYWxlOnMsX2RhdGFzZXRJbmRleDpmLF9pbmRleDppLF9tb2RlbDp7eDpuP2wuZ2V0UGl4ZWxGb3JEZWNpbWFsKC41KTpsLmdldFBpeGVsRm9yVmFsdWUoXCJvYmplY3RcIj09dHlwZW9mIGM/YzpOYU4saSxmLG8uY2hhcnQuaXNDb21ibykseTpuP3MuZ2V0QmFzZVBpeGVsKCk6cy5nZXRQaXhlbEZvclZhbHVlKGMsaSxmKSxyYWRpdXM6bj8wOmQucmFkaXVzP2QucmFkaXVzOm8uZ2V0UmFkaXVzKGMpLGhpdFJhZGl1czpkLmhpdFJhZGl1cz9kLmhpdFJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmhpdFJhZGl1cyxpLGguaGl0UmFkaXVzKX19KSx0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwobyxhLGgpO3ZhciBnPWEuX21vZGVsO2cuc2tpcD1kLnNraXA/ZC5za2lwOmlzTmFOKGcueCl8fGlzTmFOKGcueSksYS5waXZvdCgpfSxnZXRSYWRpdXM6ZnVuY3Rpb24odCl7cmV0dXJuIHQucnx8dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LnJhZGl1c30sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbihhKXt2YXIgaT10aGlzO3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnNldEhvdmVyU3R5bGUuY2FsbChpLGEpO3ZhciBuPWkuY2hhcnQuZGF0YS5kYXRhc2V0c1thLl9kYXRhc2V0SW5kZXhdLG89YS5faW5kZXgscj1hLmN1c3RvbXx8e30sbD1hLl9tb2RlbDtsLnJhZGl1cz1yLmhvdmVyUmFkaXVzP3IuaG92ZXJSYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5ob3ZlclJhZGl1cyxvLGkuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cykraS5nZXRSYWRpdXMobi5kYXRhW29dKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt2YXIgYT10aGlzO3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbChhLGUsYS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50KTt2YXIgaT1hLmNoYXJ0LmRhdGEuZGF0YXNldHNbZS5fZGF0YXNldEluZGV4XS5kYXRhW2UuX2luZGV4XSxuPWUuY3VzdG9tfHx7fSxvPWUuX21vZGVsO28ucmFkaXVzPW4ucmFkaXVzP24ucmFkaXVzOmEuZ2V0UmFkaXVzKGkpfX0pfX0se31dLDE3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHM7YS5kb3VnaG51dD17YW5pbWF0aW9uOnthbmltYXRlUm90YXRlOiEwLGFuaW1hdGVTY2FsZTohMX0sYXNwZWN0UmF0aW86MSxob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO3ZhciBhPXQuZGF0YSxpPWEuZGF0YXNldHMsbj1hLmxhYmVscztpZihpLmxlbmd0aClmb3IodmFyIG89MDtvPGlbMF0uZGF0YS5sZW5ndGg7KytvKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2lbMF0uYmFja2dyb3VuZENvbG9yW29dKydcIj48L3NwYW4+JyksbltvXSYmZS5wdXNoKG5bb10pLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9LGxlZ2VuZDp7bGFiZWxzOntnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgYT10LmRhdGE7cmV0dXJuIGEubGFiZWxzLmxlbmd0aCYmYS5kYXRhc2V0cy5sZW5ndGg/YS5sYWJlbHMubWFwKGZ1bmN0aW9uKGksbil7dmFyIG89dC5nZXREYXRhc2V0TWV0YSgwKSxyPWEuZGF0YXNldHNbMF0sbD1vLmRhdGFbbl0scz1sJiZsLmN1c3RvbXx8e30sZD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCx1PXQub3B0aW9ucy5lbGVtZW50cy5hcmMsYz1zLmJhY2tncm91bmRDb2xvcj9zLmJhY2tncm91bmRDb2xvcjpkKHIuYmFja2dyb3VuZENvbG9yLG4sdS5iYWNrZ3JvdW5kQ29sb3IpLGg9cy5ib3JkZXJDb2xvcj9zLmJvcmRlckNvbG9yOmQoci5ib3JkZXJDb2xvcixuLHUuYm9yZGVyQ29sb3IpLGY9cy5ib3JkZXJXaWR0aD9zLmJvcmRlcldpZHRoOmQoci5ib3JkZXJXaWR0aCxuLHUuYm9yZGVyV2lkdGgpO3JldHVybnt0ZXh0OmksZmlsbFN0eWxlOmMsc3Ryb2tlU3R5bGU6aCxsaW5lV2lkdGg6ZixoaWRkZW46aXNOYU4oci5kYXRhW25dKXx8by5kYXRhW25dLmhpZGRlbixpbmRleDpufX0pOltdfX0sb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUuaW5kZXgscj10aGlzLmNoYXJ0O2ZvcihhPTAsaT0oci5kYXRhLmRhdGFzZXRzfHxbXSkubGVuZ3RoO2k+YTsrK2Epbj1yLmdldERhdGFzZXRNZXRhKGEpLG4uZGF0YVtvXSYmKG4uZGF0YVtvXS5oaWRkZW49IW4uZGF0YVtvXS5oaWRkZW4pO3IudXBkYXRlKCl9fSxjdXRvdXRQZXJjZW50YWdlOjUwLHJvdGF0aW9uOk1hdGguUEkqLS41LGNpcmN1bWZlcmVuY2U6MipNYXRoLlBJLHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxhKXt2YXIgaT1hLmxhYmVsc1t0LmluZGV4XSxuPVwiOiBcIithLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5kYXRhW3QuaW5kZXhdO3JldHVybiBlLmlzQXJyYXkoaSk/KGk9aS5zbGljZSgpLGlbMF0rPW4pOmkrPW4saX19fX0sYS5waWU9ZS5jbG9uZShhLmRvdWdobnV0KSxlLmV4dGVuZChhLnBpZSx7Y3V0b3V0UGVyY2VudGFnZTowfSksdC5jb250cm9sbGVycy5kb3VnaG51dD10LmNvbnRyb2xsZXJzLnBpZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuQXJjLGxpbmtTY2FsZXM6ZS5ub29wLGdldFJpbmdJbmRleDpmdW5jdGlvbih0KXtmb3IodmFyIGU9MCxhPTA7dD5hOysrYSl0aGlzLmNoYXJ0LmlzRGF0YXNldFZpc2libGUoYSkmJisrZTtyZXR1cm4gZX0sdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49aS5jaGFydEFyZWEsbz1pLm9wdGlvbnMscj1vLmVsZW1lbnRzLmFyYyxsPW4ucmlnaHQtbi5sZWZ0LXIuYm9yZGVyV2lkdGgscz1uLmJvdHRvbS1uLnRvcC1yLmJvcmRlcldpZHRoLGQ9TWF0aC5taW4obCxzKSx1PXt4OjAseTowfSxjPWEuZ2V0TWV0YSgpLGg9by5jdXRvdXRQZXJjZW50YWdlLGY9by5jaXJjdW1mZXJlbmNlO2lmKGY8MipNYXRoLlBJKXt2YXIgZz1vLnJvdGF0aW9uJSgyKk1hdGguUEkpO2crPTIqTWF0aC5QSSooZz49TWF0aC5QST8tMTpnPC1NYXRoLlBJPzE6MCk7dmFyIHA9ZytmLG09e3g6TWF0aC5jb3MoZykseTpNYXRoLnNpbihnKX0sYj17eDpNYXRoLmNvcyhwKSx5Ok1hdGguc2luKHApfSx2PTA+PWcmJnA+PTB8fGc8PTIqTWF0aC5QSSYmMipNYXRoLlBJPD1wLHg9Zzw9LjUqTWF0aC5QSSYmLjUqTWF0aC5QSTw9cHx8Zzw9Mi41Kk1hdGguUEkmJjIuNSpNYXRoLlBJPD1wLHk9Zzw9LU1hdGguUEkmJi1NYXRoLlBJPD1wfHxnPD1NYXRoLlBJJiZNYXRoLlBJPD1wLGs9Zzw9LjUqLU1hdGguUEkmJi41Ki1NYXRoLlBJPD1wfHxnPD0xLjUqTWF0aC5QSSYmMS41Kk1hdGguUEk8PXAsUz1oLzEwMCx3PXt4Onk/LTE6TWF0aC5taW4obS54KihtLng8MD8xOlMpLGIueCooYi54PDA/MTpTKSkseTprPy0xOk1hdGgubWluKG0ueSoobS55PDA/MTpTKSxiLnkqKGIueTwwPzE6UykpfSxNPXt4OnY/MTpNYXRoLm1heChtLngqKG0ueD4wPzE6UyksYi54KihiLng+MD8xOlMpKSx5Ong/MTpNYXRoLm1heChtLnkqKG0ueT4wPzE6UyksYi55KihiLnk+MD8xOlMpKX0sQz17d2lkdGg6LjUqKE0ueC13LngpLGhlaWdodDouNSooTS55LXcueSl9O2Q9TWF0aC5taW4obC9DLndpZHRoLHMvQy5oZWlnaHQpLHU9e3g6KE0ueCt3LngpKi0uNSx5OihNLnkrdy55KSotLjV9fWkuYm9yZGVyV2lkdGg9YS5nZXRNYXhCb3JkZXJXaWR0aChjLmRhdGEpLGkub3V0ZXJSYWRpdXM9TWF0aC5tYXgoKGQtaS5ib3JkZXJXaWR0aCkvMiwwKSxpLmlubmVyUmFkaXVzPU1hdGgubWF4KGg/aS5vdXRlclJhZGl1cy8xMDAqaDoxLDApLGkucmFkaXVzTGVuZ3RoPShpLm91dGVyUmFkaXVzLWkuaW5uZXJSYWRpdXMpL2kuZ2V0VmlzaWJsZURhdGFzZXRDb3VudCgpLGkub2Zmc2V0WD11LngqaS5vdXRlclJhZGl1cyxpLm9mZnNldFk9dS55Kmkub3V0ZXJSYWRpdXMsYy50b3RhbD1hLmNhbGN1bGF0ZVRvdGFsKCksYS5vdXRlclJhZGl1cz1pLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoKmEuZ2V0UmluZ0luZGV4KGEuaW5kZXgpLGEuaW5uZXJSYWRpdXM9YS5vdXRlclJhZGl1cy1pLnJhZGl1c0xlbmd0aCxlLmVhY2goYy5kYXRhLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0pfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5jaGFydCxyPW8uY2hhcnRBcmVhLGw9by5vcHRpb25zLHM9bC5hbmltYXRpb24sZD0oci5sZWZ0K3IucmlnaHQpLzIsdT0oci50b3Arci5ib3R0b20pLzIsYz1sLnJvdGF0aW9uLGg9bC5yb3RhdGlvbixmPW4uZ2V0RGF0YXNldCgpLGc9aSYmcy5hbmltYXRlUm90YXRlPzA6dC5oaWRkZW4/MDpuLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2UoZi5kYXRhW2FdKSoobC5jaXJjdW1mZXJlbmNlLygyKk1hdGguUEkpKSxwPWkmJnMuYW5pbWF0ZVNjYWxlPzA6bi5pbm5lclJhZGl1cyxtPWkmJnMuYW5pbWF0ZVNjYWxlPzA6bi5vdXRlclJhZGl1cyxiPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0O2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfbW9kZWw6e3g6ZCtvLm9mZnNldFgseTp1K28ub2Zmc2V0WSxzdGFydEFuZ2xlOmMsZW5kQW5nbGU6aCxjaXJjdW1mZXJlbmNlOmcsb3V0ZXJSYWRpdXM6bSxpbm5lclJhZGl1czpwLGxhYmVsOmIoZi5sYWJlbCxhLG8uZGF0YS5sYWJlbHNbYV0pfX0pO3ZhciB2PXQuX21vZGVsO3RoaXMucmVtb3ZlSG92ZXJTdHlsZSh0KSxpJiZzLmFuaW1hdGVSb3RhdGV8fCgwPT09YT92LnN0YXJ0QW5nbGU9bC5yb3RhdGlvbjp2LnN0YXJ0QW5nbGU9bi5nZXRNZXRhKCkuZGF0YVthLTFdLl9tb2RlbC5lbmRBbmdsZSx2LmVuZEFuZ2xlPXYuc3RhcnRBbmdsZSt2LmNpcmN1bWZlcmVuY2UpLHQucGl2b3QoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwodGhpcyxlLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5hcmMpfSxjYWxjdWxhdGVUb3RhbDpmdW5jdGlvbigpe3ZhciB0LGE9dGhpcy5nZXREYXRhc2V0KCksaT10aGlzLmdldE1ldGEoKSxuPTA7cmV0dXJuIGUuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSxpKXt0PWEuZGF0YVtpXSxpc05hTih0KXx8ZS5oaWRkZW58fChuKz1NYXRoLmFicyh0KSl9KSxufSxjYWxjdWxhdGVDaXJjdW1mZXJlbmNlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0TWV0YSgpLnRvdGFsO3JldHVybiBlPjAmJiFpc05hTih0KT8yKk1hdGguUEkqKHQvZSk6MH0sZ2V0TWF4Qm9yZGVyV2lkdGg6ZnVuY3Rpb24odCl7Zm9yKHZhciBlLGEsaT0wLG49dGhpcy5pbmRleCxvPXQubGVuZ3RoLHI9MDtvPnI7cisrKWU9dFtyXS5fbW9kZWw/dFtyXS5fbW9kZWwuYm9yZGVyV2lkdGg6MCxhPXRbcl0uX2NoYXJ0P3Rbcl0uX2NoYXJ0LmNvbmZpZy5kYXRhLmRhdGFzZXRzW25dLmhvdmVyQm9yZGVyV2lkdGg6MCxpPWU+aT9lOmksaT1hPmk/YTppO3JldHVybiBpfX0pfX0se31dLDE4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gYS5nZXRWYWx1ZU9yRGVmYXVsdCh0LnNob3dMaW5lLGUuc2hvd0xpbmVzKX12YXIgYT10LmhlbHBlcnM7dC5kZWZhdWx0cy5saW5lPXtzaG93TGluZXM6ITAsc3BhbkdhcHM6ITEsaG92ZXI6e21vZGU6XCJsYWJlbFwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImNhdGVnb3J5XCIsaWQ6XCJ4LWF4aXMtMFwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIsaWQ6XCJ5LWF4aXMtMFwifV19fSx0LmNvbnRyb2xsZXJzLmxpbmU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFzZXRFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkxpbmUsZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUG9pbnQsdXBkYXRlOmZ1bmN0aW9uKHQpe3ZhciBpLG4sbyxyPXRoaXMsbD1yLmdldE1ldGEoKSxzPWwuZGF0YXNldCxkPWwuZGF0YXx8W10sdT1yLmNoYXJ0Lm9wdGlvbnMsYz11LmVsZW1lbnRzLmxpbmUsaD1yLmdldFNjYWxlRm9ySWQobC55QXhpc0lEKSxmPXIuZ2V0RGF0YXNldCgpLGc9ZShmLHUpO2ZvcihnJiYobz1zLmN1c3RvbXx8e30sdm9pZCAwIT09Zi50ZW5zaW9uJiZ2b2lkIDA9PT1mLmxpbmVUZW5zaW9uJiYoZi5saW5lVGVuc2lvbj1mLnRlbnNpb24pLHMuX3NjYWxlPWgscy5fZGF0YXNldEluZGV4PXIuaW5kZXgscy5fY2hpbGRyZW49ZCxzLl9tb2RlbD17c3BhbkdhcHM6Zi5zcGFuR2Fwcz9mLnNwYW5HYXBzOnUuc3BhbkdhcHMsdGVuc2lvbjpvLnRlbnNpb24/by50ZW5zaW9uOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5saW5lVGVuc2lvbixjLnRlbnNpb24pLGJhY2tncm91bmRDb2xvcjpvLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjpmLmJhY2tncm91bmRDb2xvcnx8Yy5iYWNrZ3JvdW5kQ29sb3IsYm9yZGVyV2lkdGg6by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOmYuYm9yZGVyV2lkdGh8fGMuYm9yZGVyV2lkdGgsYm9yZGVyQ29sb3I6by5ib3JkZXJDb2xvcj9vLmJvcmRlckNvbG9yOmYuYm9yZGVyQ29sb3J8fGMuYm9yZGVyQ29sb3IsYm9yZGVyQ2FwU3R5bGU6by5ib3JkZXJDYXBTdHlsZT9vLmJvcmRlckNhcFN0eWxlOmYuYm9yZGVyQ2FwU3R5bGV8fGMuYm9yZGVyQ2FwU3R5bGUsYm9yZGVyRGFzaDpvLmJvcmRlckRhc2g/by5ib3JkZXJEYXNoOmYuYm9yZGVyRGFzaHx8Yy5ib3JkZXJEYXNoLGJvcmRlckRhc2hPZmZzZXQ6by5ib3JkZXJEYXNoT2Zmc2V0P28uYm9yZGVyRGFzaE9mZnNldDpmLmJvcmRlckRhc2hPZmZzZXR8fGMuYm9yZGVyRGFzaE9mZnNldCxib3JkZXJKb2luU3R5bGU6by5ib3JkZXJKb2luU3R5bGU/by5ib3JkZXJKb2luU3R5bGU6Zi5ib3JkZXJKb2luU3R5bGV8fGMuYm9yZGVySm9pblN0eWxlLGZpbGw6by5maWxsP28uZmlsbDp2b2lkIDAhPT1mLmZpbGw/Zi5maWxsOmMuZmlsbCxzdGVwcGVkTGluZTpvLnN0ZXBwZWRMaW5lP28uc3RlcHBlZExpbmU6YS5nZXRWYWx1ZU9yRGVmYXVsdChmLnN0ZXBwZWRMaW5lLGMuc3RlcHBlZCksY3ViaWNJbnRlcnBvbGF0aW9uTW9kZTpvLmN1YmljSW50ZXJwb2xhdGlvbk1vZGU/by5jdWJpY0ludGVycG9sYXRpb25Nb2RlOmEuZ2V0VmFsdWVPckRlZmF1bHQoZi5jdWJpY0ludGVycG9sYXRpb25Nb2RlLGMuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSksc2NhbGVUb3A6aC50b3Asc2NhbGVCb3R0b206aC5ib3R0b20sc2NhbGVaZXJvOmguZ2V0QmFzZVBpeGVsKCl9LHMucGl2b3QoKSksaT0wLG49ZC5sZW5ndGg7bj5pOysraSlyLnVwZGF0ZUVsZW1lbnQoZFtpXSxpLHQpO2ZvcihnJiYwIT09cy5fbW9kZWwudGVuc2lvbiYmci51cGRhdGVCZXppZXJDb250cm9sUG9pbnRzKCksaT0wLG49ZC5sZW5ndGg7bj5pOysraSlkW2ldLnBpdm90KCl9LGdldFBvaW50QmFja2dyb3VuZENvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJhY2tncm91bmRDb2xvcixuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJhY2tncm91bmRDb2xvcj9pPW8uYmFja2dyb3VuZENvbG9yOm4ucG9pbnRCYWNrZ3JvdW5kQ29sb3I/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50QmFja2dyb3VuZENvbG9yLGUsaSk6bi5iYWNrZ3JvdW5kQ29sb3ImJihpPW4uYmFja2dyb3VuZENvbG9yKSxpfSxnZXRQb2ludEJvcmRlckNvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmJvcmRlckNvbG9yLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYm9yZGVyQ29sb3I/aT1vLmJvcmRlckNvbG9yOm4ucG9pbnRCb3JkZXJDb2xvcj9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCb3JkZXJDb2xvcixlLGkpOm4uYm9yZGVyQ29sb3ImJihpPW4uYm9yZGVyQ29sb3IpLGl9LGdldFBvaW50Qm9yZGVyV2lkdGg6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYm9yZGVyV2lkdGgsbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5ib3JkZXJXaWR0aD9pPW8uYm9yZGVyV2lkdGg6bi5wb2ludEJvcmRlcldpZHRoP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJvcmRlcldpZHRoLGUsaSk6bi5ib3JkZXJXaWR0aCYmKGk9bi5ib3JkZXJXaWR0aCksaX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGUsaSl7dmFyIG4sbyxyPXRoaXMsbD1yLmdldE1ldGEoKSxzPXQuY3VzdG9tfHx7fSxkPXIuZ2V0RGF0YXNldCgpLHU9ci5pbmRleCxjPWQuZGF0YVtlXSxoPXIuZ2V0U2NhbGVGb3JJZChsLnlBeGlzSUQpLGY9ci5nZXRTY2FsZUZvcklkKGwueEF4aXNJRCksZz1yLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQscD1yLmNoYXJ0LmRhdGEubGFiZWxzfHxbXSxtPTE9PT1wLmxlbmd0aHx8MT09PWQuZGF0YS5sZW5ndGh8fHIuY2hhcnQuaXNDb21ibzt2b2lkIDAhPT1kLnJhZGl1cyYmdm9pZCAwPT09ZC5wb2ludFJhZGl1cyYmKGQucG9pbnRSYWRpdXM9ZC5yYWRpdXMpLHZvaWQgMCE9PWQuaGl0UmFkaXVzJiZ2b2lkIDA9PT1kLnBvaW50SGl0UmFkaXVzJiYoZC5wb2ludEhpdFJhZGl1cz1kLmhpdFJhZGl1cyksbj1mLmdldFBpeGVsRm9yVmFsdWUoXCJvYmplY3RcIj09dHlwZW9mIGM/YzpOYU4sZSx1LG0pLG89aT9oLmdldEJhc2VQaXhlbCgpOnIuY2FsY3VsYXRlUG9pbnRZKGMsZSx1KSx0Ll94U2NhbGU9Zix0Ll95U2NhbGU9aCx0Ll9kYXRhc2V0SW5kZXg9dSx0Ll9pbmRleD1lLHQuX21vZGVsPXt4Om4seTpvLHNraXA6cy5za2lwfHxpc05hTihuKXx8aXNOYU4obykscmFkaXVzOnMucmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50UmFkaXVzLGUsZy5yYWRpdXMpLHBvaW50U3R5bGU6cy5wb2ludFN0eWxlfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChkLnBvaW50U3R5bGUsZSxnLnBvaW50U3R5bGUpLGJhY2tncm91bmRDb2xvcjpyLmdldFBvaW50QmFja2dyb3VuZENvbG9yKHQsZSksYm9yZGVyQ29sb3I6ci5nZXRQb2ludEJvcmRlckNvbG9yKHQsZSksYm9yZGVyV2lkdGg6ci5nZXRQb2ludEJvcmRlcldpZHRoKHQsZSksdGVuc2lvbjpsLmRhdGFzZXQuX21vZGVsP2wuZGF0YXNldC5fbW9kZWwudGVuc2lvbjowLHN0ZXBwZWRMaW5lOmwuZGF0YXNldC5fbW9kZWw/bC5kYXRhc2V0Ll9tb2RlbC5zdGVwcGVkTGluZTohMSxoaXRSYWRpdXM6cy5oaXRSYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRIaXRSYWRpdXMsZSxnLmhpdFJhZGl1cyl9fSxjYWxjdWxhdGVQb2ludFk6ZnVuY3Rpb24odCxlLGEpe3ZhciBpLG4sbyxyPXRoaXMsbD1yLmNoYXJ0LHM9ci5nZXRNZXRhKCksZD1yLmdldFNjYWxlRm9ySWQocy55QXhpc0lEKSx1PTAsYz0wO2lmKGQub3B0aW9ucy5zdGFja2VkKXtmb3IoaT0wO2E+aTtpKyspaWYobj1sLmRhdGEuZGF0YXNldHNbaV0sbz1sLmdldERhdGFzZXRNZXRhKGkpLFwibGluZVwiPT09by50eXBlJiZvLnlBeGlzSUQ9PT1kLmlkJiZsLmlzRGF0YXNldFZpc2libGUoaSkpe3ZhciBoPU51bWJlcihkLmdldFJpZ2h0VmFsdWUobi5kYXRhW2VdKSk7MD5oP2MrPWh8fDA6dSs9aHx8MH12YXIgZj1OdW1iZXIoZC5nZXRSaWdodFZhbHVlKHQpKTtyZXR1cm4gMD5mP2QuZ2V0UGl4ZWxGb3JWYWx1ZShjK2YpOmQuZ2V0UGl4ZWxGb3JWYWx1ZSh1K2YpfXJldHVybiBkLmdldFBpeGVsRm9yVmFsdWUodCl9LHVwZGF0ZUJlemllckNvbnRyb2xQb2ludHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSxhKXtyZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odCxhKSxlKX12YXIgZSxpLG4sbyxyLGw9dGhpcyxzPWwuZ2V0TWV0YSgpLGQ9bC5jaGFydC5jaGFydEFyZWEsdT1zLmRhdGF8fFtdO2lmKHMuZGF0YXNldC5fbW9kZWwuc3BhbkdhcHMmJih1PXUuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiF0Ll9tb2RlbC5za2lwfSkpLFwibW9ub3RvbmVcIj09PXMuZGF0YXNldC5fbW9kZWwuY3ViaWNJbnRlcnBvbGF0aW9uTW9kZSlhLnNwbGluZUN1cnZlTW9ub3RvbmUodSk7ZWxzZSBmb3IoZT0wLGk9dS5sZW5ndGg7aT5lOysrZSluPXVbZV0sbz1uLl9tb2RlbCxyPWEuc3BsaW5lQ3VydmUoYS5wcmV2aW91c0l0ZW0odSxlKS5fbW9kZWwsbyxhLm5leHRJdGVtKHUsZSkuX21vZGVsLHMuZGF0YXNldC5fbW9kZWwudGVuc2lvbiksby5jb250cm9sUG9pbnRQcmV2aW91c1g9ci5wcmV2aW91cy54LG8uY29udHJvbFBvaW50UHJldmlvdXNZPXIucHJldmlvdXMueSxvLmNvbnRyb2xQb2ludE5leHRYPXIubmV4dC54LG8uY29udHJvbFBvaW50TmV4dFk9ci5uZXh0Lnk7aWYobC5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmxpbmUuY2FwQmV6aWVyUG9pbnRzKWZvcihlPTAsaT11Lmxlbmd0aDtpPmU7KytlKW89dVtlXS5fbW9kZWwsby5jb250cm9sUG9pbnRQcmV2aW91c1g9dChvLmNvbnRyb2xQb2ludFByZXZpb3VzWCxkLmxlZnQsZC5yaWdodCksby5jb250cm9sUG9pbnRQcmV2aW91c1k9dChvLmNvbnRyb2xQb2ludFByZXZpb3VzWSxkLnRvcCxkLmJvdHRvbSksby5jb250cm9sUG9pbnROZXh0WD10KG8uY29udHJvbFBvaW50TmV4dFgsZC5sZWZ0LGQucmlnaHQpLG8uY29udHJvbFBvaW50TmV4dFk9dChvLmNvbnRyb2xQb2ludE5leHRZLGQudG9wLGQuYm90dG9tKX0sZHJhdzpmdW5jdGlvbih0KXt2YXIgYSxpLG49dGhpcyxvPW4uZ2V0TWV0YSgpLHI9by5kYXRhfHxbXSxsPXR8fDE7Zm9yKGE9MCxpPXIubGVuZ3RoO2k+YTsrK2EpclthXS50cmFuc2l0aW9uKGwpO2ZvcihlKG4uZ2V0RGF0YXNldCgpLG4uY2hhcnQub3B0aW9ucykmJm8uZGF0YXNldC50cmFuc2l0aW9uKGwpLmRyYXcoKSxhPTAsaT1yLmxlbmd0aDtpPmE7KythKXJbYV0uZHJhdygpfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbDtvLnJhZGl1cz1uLmhvdmVyUmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJSYWRpdXMsaSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3J8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixpLGEuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChlLnBvaW50SG92ZXJCb3JkZXJDb2xvcixpLGEuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGh8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJvcmRlcldpZHRoLGksby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxpPWUuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLG49dC5faW5kZXgsbz10LmN1c3RvbXx8e30scj10Ll9tb2RlbDt2b2lkIDAhPT1pLnJhZGl1cyYmdm9pZCAwPT09aS5wb2ludFJhZGl1cyYmKGkucG9pbnRSYWRpdXM9aS5yYWRpdXMpLHIucmFkaXVzPW8ucmFkaXVzfHxhLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChpLnBvaW50UmFkaXVzLG4sZS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LnJhZGl1cyksci5iYWNrZ3JvdW5kQ29sb3I9ZS5nZXRQb2ludEJhY2tncm91bmRDb2xvcih0LG4pLHIuYm9yZGVyQ29sb3I9ZS5nZXRQb2ludEJvcmRlckNvbG9yKHQsbiksci5ib3JkZXJXaWR0aD1lLmdldFBvaW50Qm9yZGVyV2lkdGgodCxuKX19KX19LHt9XSwxOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5wb2xhckFyZWE9e3NjYWxlOnt0eXBlOlwicmFkaWFsTGluZWFyXCIsbGluZUFyYzohMCx0aWNrczp7YmVnaW5BdFplcm86ITB9fSxhbmltYXRpb246e2FuaW1hdGVSb3RhdGU6ITAsYW5pbWF0ZVNjYWxlOiEwfSxzdGFydEFuZ2xlOi0uNSpNYXRoLlBJLGFzcGVjdFJhdGlvOjEsbGVnZW5kQ2FsbGJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9W107ZS5wdXNoKCc8dWwgY2xhc3M9XCInK3QuaWQrJy1sZWdlbmRcIj4nKTt2YXIgYT10LmRhdGEsaT1hLmRhdGFzZXRzLG49YS5sYWJlbHM7aWYoaS5sZW5ndGgpZm9yKHZhciBvPTA7bzxpWzBdLmRhdGEubGVuZ3RoOysrbyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JytpWzBdLmJhY2tncm91bmRDb2xvcltvXSsnXCI+PC9zcGFuPicpLG5bb10mJmUucHVzaChuW29dKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfSxsZWdlbmQ6e2xhYmVsczp7Z2VuZXJhdGVMYWJlbHM6ZnVuY3Rpb24odCl7dmFyIGE9dC5kYXRhO3JldHVybiBhLmxhYmVscy5sZW5ndGgmJmEuZGF0YXNldHMubGVuZ3RoP2EubGFiZWxzLm1hcChmdW5jdGlvbihpLG4pe3ZhciBvPXQuZ2V0RGF0YXNldE1ldGEoMCkscj1hLmRhdGFzZXRzWzBdLGw9by5kYXRhW25dLHM9bC5jdXN0b218fHt9LGQ9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsdT10Lm9wdGlvbnMuZWxlbWVudHMuYXJjLGM9cy5iYWNrZ3JvdW5kQ29sb3I/cy5iYWNrZ3JvdW5kQ29sb3I6ZChyLmJhY2tncm91bmRDb2xvcixuLHUuYmFja2dyb3VuZENvbG9yKSxoPXMuYm9yZGVyQ29sb3I/cy5ib3JkZXJDb2xvcjpkKHIuYm9yZGVyQ29sb3Isbix1LmJvcmRlckNvbG9yKSxmPXMuYm9yZGVyV2lkdGg/cy5ib3JkZXJXaWR0aDpkKHIuYm9yZGVyV2lkdGgsbix1LmJvcmRlcldpZHRoKTtyZXR1cm57dGV4dDppLGZpbGxTdHlsZTpjLHN0cm9rZVN0eWxlOmgsbGluZVdpZHRoOmYsaGlkZGVuOmlzTmFOKHIuZGF0YVtuXSl8fG8uZGF0YVtuXS5oaWRkZW4saW5kZXg6bn19KTpbXX19LG9uQ2xpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLmluZGV4LHI9dGhpcy5jaGFydDtmb3IoYT0wLGk9KHIuZGF0YS5kYXRhc2V0c3x8W10pLmxlbmd0aDtpPmE7KythKW49ci5nZXREYXRhc2V0TWV0YShhKSxuLmRhdGFbb10uaGlkZGVuPSFuLmRhdGFbb10uaGlkZGVuO3IudXBkYXRlKCl9fSx0b29sdGlwczp7Y2FsbGJhY2tzOnt0aXRsZTpmdW5jdGlvbigpe3JldHVyblwiXCJ9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUubGFiZWxzW3QuaW5kZXhdK1wiOiBcIit0LnlMYWJlbH19fX0sdC5jb250cm9sbGVycy5wb2xhckFyZWE9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLkFyYyxsaW5rU2NhbGVzOmUubm9vcCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1pLmNoYXJ0QXJlYSxvPWEuZ2V0TWV0YSgpLHI9aS5vcHRpb25zLGw9ci5lbGVtZW50cy5hcmMscz1NYXRoLm1pbihuLnJpZ2h0LW4ubGVmdCxuLmJvdHRvbS1uLnRvcCk7aS5vdXRlclJhZGl1cz1NYXRoLm1heCgocy1sLmJvcmRlcldpZHRoLzIpLzIsMCksaS5pbm5lclJhZGl1cz1NYXRoLm1heChyLmN1dG91dFBlcmNlbnRhZ2U/aS5vdXRlclJhZGl1cy8xMDAqci5jdXRvdXRQZXJjZW50YWdlOjEsMCksaS5yYWRpdXNMZW5ndGg9KGkub3V0ZXJSYWRpdXMtaS5pbm5lclJhZGl1cykvaS5nZXRWaXNpYmxlRGF0YXNldENvdW50KCksYS5vdXRlclJhZGl1cz1pLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoKmEuaW5kZXgsYS5pbm5lclJhZGl1cz1hLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoLG8uY291bnQ9YS5jb3VudFZpc2libGVFbGVtZW50cygpLGUuZWFjaChvLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe2Zvcih2YXIgbj10aGlzLG89bi5jaGFydCxyPW4uZ2V0RGF0YXNldCgpLGw9by5vcHRpb25zLHM9bC5hbmltYXRpb24sZD1vLnNjYWxlLHU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQsYz1vLmRhdGEubGFiZWxzLGg9bi5jYWxjdWxhdGVDaXJjdW1mZXJlbmNlKHIuZGF0YVthXSksZj1kLnhDZW50ZXIsZz1kLnlDZW50ZXIscD0wLG09bi5nZXRNZXRhKCksYj0wO2E+YjsrK2IpaXNOYU4oci5kYXRhW2JdKXx8bS5kYXRhW2JdLmhpZGRlbnx8KytwO3ZhciB2PWwuc3RhcnRBbmdsZSx4PXQuaGlkZGVuPzA6ZC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShyLmRhdGFbYV0pLHk9ditoKnAsaz15Kyh0LmhpZGRlbj8wOmgpLFM9cy5hbmltYXRlU2NhbGU/MDpkLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHIuZGF0YVthXSk7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9zY2FsZTpkLF9tb2RlbDp7eDpmLHk6Zyxpbm5lclJhZGl1czowLG91dGVyUmFkaXVzOmk/Uzp4LHN0YXJ0QW5nbGU6aSYmcy5hbmltYXRlUm90YXRlP3Y6eSxlbmRBbmdsZTppJiZzLmFuaW1hdGVSb3RhdGU/djprLGxhYmVsOnUoYyxhLGNbYV0pfX0pLG4ucmVtb3ZlSG92ZXJTdHlsZSh0KSx0LnBpdm90KCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24oZSl7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKHRoaXMsZSx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMuYXJjKX0sY291bnRWaXNpYmxlRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldERhdGFzZXQoKSxhPXRoaXMuZ2V0TWV0YSgpLGk9MDtyZXR1cm4gZS5lYWNoKGEuZGF0YSxmdW5jdGlvbihlLGEpe2lzTmFOKHQuZGF0YVthXSl8fGUuaGlkZGVufHxpKyt9KSxpfSxjYWxjdWxhdGVDaXJjdW1mZXJlbmNlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0TWV0YSgpLmNvdW50O3JldHVybiBlPjAmJiFpc05hTih0KT8yKk1hdGguUEkvZTowfX0pfX0se31dLDIwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnJhZGFyPXthc3BlY3RSYXRpbzoxLHNjYWxlOnt0eXBlOlwicmFkaWFsTGluZWFyXCJ9LGVsZW1lbnRzOntsaW5lOnt0ZW5zaW9uOjB9fX0sdC5jb250cm9sbGVycy5yYWRhcj10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YXNldEVsZW1lbnRUeXBlOnQuZWxlbWVudHMuTGluZSxkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCxsaW5rU2NhbGVzOmUubm9vcCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49aS5kYXRhc2V0LG89aS5kYXRhLHI9bi5jdXN0b218fHt9LGw9YS5nZXREYXRhc2V0KCkscz1hLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZSxkPWEuY2hhcnQuc2NhbGU7dm9pZCAwIT09bC50ZW5zaW9uJiZ2b2lkIDA9PT1sLmxpbmVUZW5zaW9uJiYobC5saW5lVGVuc2lvbj1sLnRlbnNpb24pLGUuZXh0ZW5kKGkuZGF0YXNldCx7X2RhdGFzZXRJbmRleDphLmluZGV4LF9jaGlsZHJlbjpvLF9sb29wOiEwLF9tb2RlbDp7dGVuc2lvbjpyLnRlbnNpb24/ci50ZW5zaW9uOmUuZ2V0VmFsdWVPckRlZmF1bHQobC5saW5lVGVuc2lvbixzLnRlbnNpb24pLGJhY2tncm91bmRDb2xvcjpyLmJhY2tncm91bmRDb2xvcj9yLmJhY2tncm91bmRDb2xvcjpsLmJhY2tncm91bmRDb2xvcnx8cy5iYWNrZ3JvdW5kQ29sb3IsYm9yZGVyV2lkdGg6ci5ib3JkZXJXaWR0aD9yLmJvcmRlcldpZHRoOmwuYm9yZGVyV2lkdGh8fHMuYm9yZGVyV2lkdGgsYm9yZGVyQ29sb3I6ci5ib3JkZXJDb2xvcj9yLmJvcmRlckNvbG9yOmwuYm9yZGVyQ29sb3J8fHMuYm9yZGVyQ29sb3IsZmlsbDpyLmZpbGw/ci5maWxsOnZvaWQgMCE9PWwuZmlsbD9sLmZpbGw6cy5maWxsLGJvcmRlckNhcFN0eWxlOnIuYm9yZGVyQ2FwU3R5bGU/ci5ib3JkZXJDYXBTdHlsZTpsLmJvcmRlckNhcFN0eWxlfHxzLmJvcmRlckNhcFN0eWxlLGJvcmRlckRhc2g6ci5ib3JkZXJEYXNoP3IuYm9yZGVyRGFzaDpsLmJvcmRlckRhc2h8fHMuYm9yZGVyRGFzaCxib3JkZXJEYXNoT2Zmc2V0OnIuYm9yZGVyRGFzaE9mZnNldD9yLmJvcmRlckRhc2hPZmZzZXQ6bC5ib3JkZXJEYXNoT2Zmc2V0fHxzLmJvcmRlckRhc2hPZmZzZXQsYm9yZGVySm9pblN0eWxlOnIuYm9yZGVySm9pblN0eWxlP3IuYm9yZGVySm9pblN0eWxlOmwuYm9yZGVySm9pblN0eWxlfHxzLmJvcmRlckpvaW5TdHlsZSxzY2FsZVRvcDpkLnRvcCxzY2FsZUJvdHRvbTpkLmJvdHRvbSxzY2FsZVplcm86ZC5nZXRCYXNlUG9zaXRpb24oKX19KSxpLmRhdGFzZXQucGl2b3QoKSxlLmVhY2gobyxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9LGEpLGEudXBkYXRlQmV6aWVyQ29udHJvbFBvaW50cygpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89dC5jdXN0b218fHt9LHI9bi5nZXREYXRhc2V0KCksbD1uLmNoYXJ0LnNjYWxlLHM9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LGQ9bC5nZXRQb2ludFBvc2l0aW9uRm9yVmFsdWUoYSxyLmRhdGFbYV0pO2UuZXh0ZW5kKHQse19kYXRhc2V0SW5kZXg6bi5pbmRleCxfaW5kZXg6YSxfc2NhbGU6bCxfbW9kZWw6e3g6aT9sLnhDZW50ZXI6ZC54LHk6aT9sLnlDZW50ZXI6ZC55LHRlbnNpb246by50ZW5zaW9uP28udGVuc2lvbjplLmdldFZhbHVlT3JEZWZhdWx0KHIudGVuc2lvbixuLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZS50ZW5zaW9uKSxyYWRpdXM6by5yYWRpdXM/by5yYWRpdXM6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludFJhZGl1cyxhLHMucmFkaXVzKSxiYWNrZ3JvdW5kQ29sb3I6by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJhY2tncm91bmRDb2xvcixhLHMuYmFja2dyb3VuZENvbG9yKSxib3JkZXJDb2xvcjpvLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJvcmRlckNvbG9yLGEscy5ib3JkZXJDb2xvciksYm9yZGVyV2lkdGg6by5ib3JkZXJXaWR0aD9vLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRCb3JkZXJXaWR0aCxhLHMuYm9yZGVyV2lkdGgpLHBvaW50U3R5bGU6by5wb2ludFN0eWxlP28ucG9pbnRTdHlsZTplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50U3R5bGUsYSxzLnBvaW50U3R5bGUpLGhpdFJhZGl1czpvLmhpdFJhZGl1cz9vLmhpdFJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLmhpdFJhZGl1cyxhLHMuaGl0UmFkaXVzKX19KSx0Ll9tb2RlbC5za2lwPW8uc2tpcD9vLnNraXA6aXNOYU4odC5fbW9kZWwueCl8fGlzTmFOKHQuX21vZGVsLnkpfSx1cGRhdGVCZXppZXJDb250cm9sUG9pbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5jaGFydC5jaGFydEFyZWEsYT10aGlzLmdldE1ldGEoKTtlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKGksbil7dmFyIG89aS5fbW9kZWwscj1lLnNwbGluZUN1cnZlKGUucHJldmlvdXNJdGVtKGEuZGF0YSxuLCEwKS5fbW9kZWwsbyxlLm5leHRJdGVtKGEuZGF0YSxuLCEwKS5fbW9kZWwsby50ZW5zaW9uKTtvLmNvbnRyb2xQb2ludFByZXZpb3VzWD1NYXRoLm1heChNYXRoLm1pbihyLnByZXZpb3VzLngsdC5yaWdodCksdC5sZWZ0KSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT1NYXRoLm1heChNYXRoLm1pbihyLnByZXZpb3VzLnksdC5ib3R0b20pLHQudG9wKSxvLmNvbnRyb2xQb2ludE5leHRYPU1hdGgubWF4KE1hdGgubWluKHIubmV4dC54LHQucmlnaHQpLHQubGVmdCksby5jb250cm9sUG9pbnROZXh0WT1NYXRoLm1heChNYXRoLm1pbihyLm5leHQueSx0LmJvdHRvbSksdC50b3ApLGkucGl2b3QoKX0pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuZ2V0TWV0YSgpLGk9dHx8MTtlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKHQpe3QudHJhbnNpdGlvbihpKX0pLGEuZGF0YXNldC50cmFuc2l0aW9uKGkpLmRyYXcoKSxlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKHQpe3QuZHJhdygpfSl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10LmN1c3RvbXx8e30sbj10Ll9pbmRleCxvPXQuX21vZGVsO28ucmFkaXVzPWkuaG92ZXJSYWRpdXM/aS5ob3ZlclJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJSYWRpdXMsbix0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuaG92ZXJSYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPWkuaG92ZXJCYWNrZ3JvdW5kQ29sb3I/aS5ob3ZlckJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IsbixlLmdldEhvdmVyQ29sb3Ioby5iYWNrZ3JvdW5kQ29sb3IpKSxvLmJvcmRlckNvbG9yPWkuaG92ZXJCb3JkZXJDb2xvcj9pLmhvdmVyQm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEhvdmVyQm9yZGVyQ29sb3IsbixlLmdldEhvdmVyQ29sb3Ioby5ib3JkZXJDb2xvcikpLG8uYm9yZGVyV2lkdGg9aS5ob3ZlckJvcmRlcldpZHRoP2kuaG92ZXJCb3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCb3JkZXJXaWR0aCxuLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5jdXN0b218fHt9LG49dC5faW5kZXgsbz10Ll9tb2RlbCxyPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludDtvLnJhZGl1cz1pLnJhZGl1cz9pLnJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnJhZGl1cyxuLHIucmFkaXVzKSxvLmJhY2tncm91bmRDb2xvcj1pLmJhY2tncm91bmRDb2xvcj9pLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50QmFja2dyb3VuZENvbG9yLG4sci5iYWNrZ3JvdW5kQ29sb3IpLG8uYm9yZGVyQ29sb3I9aS5ib3JkZXJDb2xvcj9pLmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCb3JkZXJDb2xvcixuLHIuYm9yZGVyQ29sb3IpLG8uYm9yZGVyV2lkdGg9aS5ib3JkZXJXaWR0aD9pLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCb3JkZXJXaWR0aCxuLHIuYm9yZGVyV2lkdGgpfX0pfX0se31dLDIxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC5hbmltYXRpb249e2R1cmF0aW9uOjFlMyxlYXNpbmc6XCJlYXNlT3V0UXVhcnRcIixvblByb2dyZXNzOmUubm9vcCxvbkNvbXBsZXRlOmUubm9vcH0sdC5BbmltYXRpb249dC5FbGVtZW50LmV4dGVuZCh7Y3VycmVudFN0ZXA6bnVsbCxudW1TdGVwczo2MCxlYXNpbmc6XCJcIixyZW5kZXI6bnVsbCxvbkFuaW1hdGlvblByb2dyZXNzOm51bGwsb25BbmltYXRpb25Db21wbGV0ZTpudWxsfSksdC5hbmltYXRpb25TZXJ2aWNlPXtmcmFtZUR1cmF0aW9uOjE3LGFuaW1hdGlvbnM6W10sZHJvcEZyYW1lczowLHJlcXVlc3Q6bnVsbCxhZGRBbmltYXRpb246ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dGhpcztpfHwodC5hbmltYXRpbmc9ITApO2Zvcih2YXIgbz0wO288bi5hbmltYXRpb25zLmxlbmd0aDsrK28paWYobi5hbmltYXRpb25zW29dLmNoYXJ0SW5zdGFuY2U9PT10KXJldHVybiB2b2lkKG4uYW5pbWF0aW9uc1tvXS5hbmltYXRpb25PYmplY3Q9ZSk7bi5hbmltYXRpb25zLnB1c2goe2NoYXJ0SW5zdGFuY2U6dCxhbmltYXRpb25PYmplY3Q6ZX0pLDE9PT1uLmFuaW1hdGlvbnMubGVuZ3RoJiZuLnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfSxjYW5jZWxBbmltYXRpb246ZnVuY3Rpb24odCl7dmFyIGE9ZS5maW5kSW5kZXgodGhpcy5hbmltYXRpb25zLGZ1bmN0aW9uKGUpe3JldHVybiBlLmNoYXJ0SW5zdGFuY2U9PT10fSk7LTEhPT1hJiYodGhpcy5hbmltYXRpb25zLnNwbGljZShhLDEpLHQuYW5pbWF0aW5nPSExKX0scmVxdWVzdEFuaW1hdGlvbkZyYW1lOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztudWxsPT09dC5yZXF1ZXN0JiYodC5yZXF1ZXN0PWUucmVxdWVzdEFuaW1GcmFtZS5jYWxsKHdpbmRvdyxmdW5jdGlvbigpe3QucmVxdWVzdD1udWxsLHQuc3RhcnREaWdlc3QoKX0pKX0sc3RhcnREaWdlc3Q6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9RGF0ZS5ub3coKSxhPTA7dC5kcm9wRnJhbWVzPjEmJihhPU1hdGguZmxvb3IodC5kcm9wRnJhbWVzKSx0LmRyb3BGcmFtZXM9dC5kcm9wRnJhbWVzJTEpO2Zvcih2YXIgaT0wO2k8dC5hbmltYXRpb25zLmxlbmd0aDspbnVsbD09PXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXAmJih0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPTApLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXArPTErYSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHMmJih0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHMpLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QucmVuZGVyKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QpLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcyYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzLmNhbGwmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Qcm9ncmVzcy5jYWxsKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXSksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcD09PXQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QubnVtU3RlcHM/KHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZSYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlLmNhbGwmJnQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3Qub25BbmltYXRpb25Db21wbGV0ZS5jYWxsKHQuYW5pbWF0aW9uc1tpXS5jaGFydEluc3RhbmNlLHQuYW5pbWF0aW9uc1tpXSksdC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UuYW5pbWF0aW5nPSExLHQuYW5pbWF0aW9ucy5zcGxpY2UoaSwxKSk6KytpO3ZhciBuPURhdGUubm93KCksbz0obi1lKS90LmZyYW1lRHVyYXRpb247dC5kcm9wRnJhbWVzKz1vLHQuYW5pbWF0aW9ucy5sZW5ndGg+MCYmdC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKX19fX0se31dLDIyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY2FudmFzSGVscGVycz17fTtlLmRyYXdQb2ludD1mdW5jdGlvbih0LGUsYSxpLG4pe3ZhciBvLHIsbCxzLGQsdTtpZihcIm9iamVjdFwiPT10eXBlb2YgZSYmKG89ZS50b1N0cmluZygpLFwiW29iamVjdCBIVE1MSW1hZ2VFbGVtZW50XVwiPT09b3x8XCJbb2JqZWN0IEhUTUxDYW52YXNFbGVtZW50XVwiPT09bykpcmV0dXJuIHZvaWQgdC5kcmF3SW1hZ2UoZSxpLWUud2lkdGgvMixuLWUuaGVpZ2h0LzIpO2lmKCEoaXNOYU4oYSl8fDA+PWEpKXtzd2l0Y2goZSl7ZGVmYXVsdDp0LmJlZ2luUGF0aCgpLHQuYXJjKGksbixhLDAsMipNYXRoLlBJKSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcInRyaWFuZ2xlXCI6dC5iZWdpblBhdGgoKSxyPTMqYS9NYXRoLnNxcnQoMyksZD1yKk1hdGguc3FydCgzKS8yLHQubW92ZVRvKGktci8yLG4rZC8zKSx0LmxpbmVUbyhpK3IvMixuK2QvMyksdC5saW5lVG8oaSxuLTIqZC8zKSx0LmNsb3NlUGF0aCgpLHQuZmlsbCgpO2JyZWFrO2Nhc2VcInJlY3RcIjp1PTEvTWF0aC5TUVJUMiphLHQuYmVnaW5QYXRoKCksdC5maWxsUmVjdChpLXUsbi11LDIqdSwyKnUpLHQuc3Ryb2tlUmVjdChpLXUsbi11LDIqdSwyKnUpO2JyZWFrO2Nhc2VcInJlY3RSb3RcIjp1PTEvTWF0aC5TUVJUMiphLHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaS11LG4pLHQubGluZVRvKGksbit1KSx0LmxpbmVUbyhpK3UsbiksdC5saW5lVG8oaSxuLXUpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwiY3Jvc3NcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbithKSx0LmxpbmVUbyhpLG4tYSksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImNyb3NzUm90XCI6dC5iZWdpblBhdGgoKSxsPU1hdGguY29zKE1hdGguUEkvNCkqYSxzPU1hdGguc2luKE1hdGguUEkvNCkqYSx0Lm1vdmVUbyhpLWwsbi1zKSx0LmxpbmVUbyhpK2wsbitzKSx0Lm1vdmVUbyhpLWwsbitzKSx0LmxpbmVUbyhpK2wsbi1zKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcInN0YXJcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbithKSx0LmxpbmVUbyhpLG4tYSksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSxsPU1hdGguY29zKE1hdGguUEkvNCkqYSxzPU1hdGguc2luKE1hdGguUEkvNCkqYSx0Lm1vdmVUbyhpLWwsbi1zKSx0LmxpbmVUbyhpK2wsbitzKSx0Lm1vdmVUbyhpLWwsbitzKSx0LmxpbmVUbyhpK2wsbi1zKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImxpbmVcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGktYSxuKSx0LmxpbmVUbyhpK2EsbiksdC5jbG9zZVBhdGgoKTticmVhaztjYXNlXCJkYXNoXCI6dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpfXQuc3Ryb2tlKCl9fX19LHt9XSwyMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7dmFyIGE9ci5nZXRTdHlsZSh0LGUpLGk9YSYmYS5tYXRjaCgvKFxcZCspcHgvKTtyZXR1cm4gaT9OdW1iZXIoaVsxXSk6dm9pZCAwfWZ1bmN0aW9uIGEodCxhKXt2YXIgaT10LnN0eWxlLG49dC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiksbz10LmdldEF0dHJpYnV0ZShcIndpZHRoXCIpO2lmKHQuX2NoYXJ0anM9e2luaXRpYWw6e2hlaWdodDpuLHdpZHRoOm8sc3R5bGU6e2Rpc3BsYXk6aS5kaXNwbGF5LGhlaWdodDppLmhlaWdodCx3aWR0aDppLndpZHRofX19LGkuZGlzcGxheT1pLmRpc3BsYXl8fFwiYmxvY2tcIixudWxsPT09b3x8XCJcIj09PW8pe3ZhciByPWUodCxcIndpZHRoXCIpO3ZvaWQgMCE9PXImJih0LndpZHRoPXIpfWlmKG51bGw9PT1ufHxcIlwiPT09bilpZihcIlwiPT09dC5zdHlsZS5oZWlnaHQpdC5oZWlnaHQ9dC53aWR0aC8oYS5vcHRpb25zLmFzcGVjdFJhdGlvfHwyKTtlbHNle3ZhciBsPWUodCxcImhlaWdodFwiKTt2b2lkIDAhPT1yJiYodC5oZWlnaHQ9bCl9cmV0dXJuIHR9ZnVuY3Rpb24gaSh0KXtpZih0Ll9jaGFydGpzKXt2YXIgZT10Ll9jaGFydGpzLmluaXRpYWw7W1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBpPWVbYV07dm9pZCAwPT09aXx8bnVsbD09PWk/dC5yZW1vdmVBdHRyaWJ1dGUoYSk6dC5zZXRBdHRyaWJ1dGUoYSxpKX0pLHIuZWFjaChlLnN0eWxlfHx7fSxmdW5jdGlvbihlLGEpe3Quc3R5bGVbYV09ZX0pLHQud2lkdGg9dC53aWR0aCxkZWxldGUgdC5fY2hhcnRqc319ZnVuY3Rpb24gbih0LGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCk6dC5sZW5ndGgmJih0PXRbMF0pLHQmJnQuY2FudmFzJiYodD10LmNhbnZhcyksdCBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KXt2YXIgaT10LmdldENvbnRleHQmJnQuZ2V0Q29udGV4dChcIjJkXCIpO2lmKGkgaW5zdGFuY2VvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpcmV0dXJuIGEodCxlKSxpfXJldHVybiBudWxsfWZ1bmN0aW9uIG8oZSl7ZT1lfHx7fTt2YXIgYT1lLmRhdGE9ZS5kYXRhfHx7fTtyZXR1cm4gYS5kYXRhc2V0cz1hLmRhdGFzZXRzfHxbXSxhLmxhYmVscz1hLmxhYmVsc3x8W10sZS5vcHRpb25zPXIuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwsdC5kZWZhdWx0c1tlLnR5cGVdLGUub3B0aW9uc3x8e30pLGV9dmFyIHI9dC5oZWxwZXJzO3QudHlwZXM9e30sdC5pbnN0YW5jZXM9e30sdC5jb250cm9sbGVycz17fSx0LkNvbnRyb2xsZXI9ZnVuY3Rpb24oZSxhLGkpe3ZhciBsPXRoaXM7YT1vKGEpO3ZhciBzPW4oZSxhKSxkPXMmJnMuY2FudmFzLHU9ZCYmZC5oZWlnaHQsYz1kJiZkLndpZHRoO3JldHVybiBpLmN0eD1zLGkuY2FudmFzPWQsaS5jb25maWc9YSxpLndpZHRoPWMsaS5oZWlnaHQ9dSxpLmFzcGVjdFJhdGlvPXU/Yy91Om51bGwsbC5pZD1yLnVpZCgpLGwuY2hhcnQ9aSxsLmNvbmZpZz1hLGwub3B0aW9ucz1hLm9wdGlvbnMsbC5fYnVmZmVyZWRSZW5kZXI9ITEsdC5pbnN0YW5jZXNbbC5pZF09bCxPYmplY3QuZGVmaW5lUHJvcGVydHkobCxcImRhdGFcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGwuY29uZmlnLmRhdGF9fSkscyYmZD8oci5yZXRpbmFTY2FsZShpKSxsLm9wdGlvbnMucmVzcG9uc2l2ZSYmKHIuYWRkUmVzaXplTGlzdGVuZXIoZC5wYXJlbnROb2RlLGZ1bmN0aW9uKCl7bC5yZXNpemUoKX0pLGwucmVzaXplKCEwKSksbC5pbml0aWFsaXplKCksbCk6KGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIGNoYXJ0OiBjYW4ndCBhY3F1aXJlIGNvbnRleHQgZnJvbSB0aGUgZ2l2ZW4gaXRlbVwiKSxsKX0sci5leHRlbmQodC5Db250cm9sbGVyLnByb3RvdHlwZSx7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVJbml0XCIsW2VdKSxlLmJpbmRFdmVudHMoKSxlLmVuc3VyZVNjYWxlc0hhdmVJRHMoKSxlLmJ1aWxkT3JVcGRhdGVDb250cm9sbGVycygpLGUuYnVpbGRTY2FsZXMoKSxlLnVwZGF0ZUxheW91dCgpLGUucmVzZXRFbGVtZW50cygpLGUuaW5pdFRvb2xUaXAoKSxlLnVwZGF0ZSgpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckluaXRcIixbZV0pLGV9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHIuY2xlYXIodGhpcy5jaGFydCksdGhpc30sc3RvcDpmdW5jdGlvbigpe3JldHVybiB0LmFuaW1hdGlvblNlcnZpY2UuY2FuY2VsQW5pbWF0aW9uKHRoaXMpLHRoaXN9LHJlc2l6ZTpmdW5jdGlvbihlKXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWEub3B0aW9ucyxvPWkuY2FudmFzLGw9bi5tYWludGFpbkFzcGVjdFJhdGlvJiZpLmFzcGVjdFJhdGlvfHxudWxsLHM9TWF0aC5mbG9vcihyLmdldE1heGltdW1XaWR0aChvKSksZD1NYXRoLmZsb29yKGw/cy9sOnIuZ2V0TWF4aW11bUhlaWdodChvKSk7aWYoaS53aWR0aCE9PXN8fGkuaGVpZ2h0IT09ZCl7by53aWR0aD1pLndpZHRoPXMsby5oZWlnaHQ9aS5oZWlnaHQ9ZCxvLnN0eWxlLndpZHRoPXMrXCJweFwiLG8uc3R5bGUuaGVpZ2h0PWQrXCJweFwiLHIucmV0aW5hU2NhbGUoaSk7dmFyIHU9e3dpZHRoOnMsaGVpZ2h0OmR9O3QucGx1Z2lucy5ub3RpZnkoXCJyZXNpemVcIixbYSx1XSksYS5vcHRpb25zLm9uUmVzaXplJiZhLm9wdGlvbnMub25SZXNpemUoYSx1KSxlfHwoYS5zdG9wKCksYS51cGRhdGUoYS5vcHRpb25zLnJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbikpfX0sZW5zdXJlU2NhbGVzSGF2ZUlEczpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucyxlPXQuc2NhbGVzfHx7fSxhPXQuc2NhbGU7ci5lYWNoKGUueEF4ZXMsZnVuY3Rpb24odCxlKXt0LmlkPXQuaWR8fFwieC1heGlzLVwiK2V9KSxyLmVhY2goZS55QXhlcyxmdW5jdGlvbih0LGUpe3QuaWQ9dC5pZHx8XCJ5LWF4aXMtXCIrZX0pLGEmJihhLmlkPWEuaWR8fFwic2NhbGVcIil9LGJ1aWxkU2NhbGVzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyxhPWUub3B0aW9ucyxpPWUuc2NhbGVzPXt9LG49W107YS5zY2FsZXMmJihuPW4uY29uY2F0KChhLnNjYWxlcy54QXhlc3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57b3B0aW9uczp0LGR0eXBlOlwiY2F0ZWdvcnlcIn19KSwoYS5zY2FsZXMueUF4ZXN8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue29wdGlvbnM6dCxkdHlwZTpcImxpbmVhclwifX0pKSksYS5zY2FsZSYmbi5wdXNoKHtvcHRpb25zOmEuc2NhbGUsZHR5cGU6XCJyYWRpYWxMaW5lYXJcIixpc0RlZmF1bHQ6ITB9KSxyLmVhY2gobixmdW5jdGlvbihhKXt2YXIgbj1hLm9wdGlvbnMsbz1yLmdldFZhbHVlT3JEZWZhdWx0KG4udHlwZSxhLmR0eXBlKSxsPXQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlQ29uc3RydWN0b3Iobyk7aWYobCl7dmFyIHM9bmV3IGwoe2lkOm4uaWQsb3B0aW9uczpuLGN0eDplLmNoYXJ0LmN0eCxjaGFydDplfSk7aVtzLmlkXT1zLGEuaXNEZWZhdWx0JiYoZS5zY2FsZT1zKX19KSx0LnNjYWxlU2VydmljZS5hZGRTY2FsZXNUb0xheW91dCh0aGlzKX0sdXBkYXRlTGF5b3V0OmZ1bmN0aW9uKCl7dC5sYXlvdXRTZXJ2aWNlLnVwZGF0ZSh0aGlzLHRoaXMuY2hhcnQud2lkdGgsdGhpcy5jaGFydC5oZWlnaHQpfSxidWlsZE9yVXBkYXRlQ29udHJvbGxlcnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGE9W10saT1bXTtpZihyLmVhY2goZS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKG4sbyl7dmFyIHI9ZS5nZXREYXRhc2V0TWV0YShvKTtyLnR5cGV8fChyLnR5cGU9bi50eXBlfHxlLmNvbmZpZy50eXBlKSxhLnB1c2goci50eXBlKSxyLmNvbnRyb2xsZXI/ci5jb250cm9sbGVyLnVwZGF0ZUluZGV4KG8pOihyLmNvbnRyb2xsZXI9bmV3IHQuY29udHJvbGxlcnNbci50eXBlXShlLG8pLGkucHVzaChyLmNvbnRyb2xsZXIpKX0sZSksYS5sZW5ndGg+MSlmb3IodmFyIG49MTtuPGEubGVuZ3RoO24rKylpZihhW25dIT09YVtuLTFdKXtlLmlzQ29tYm89ITA7YnJlYWt9cmV0dXJuIGl9LHJlc2V0RWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3IuZWFjaCh0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oZSxhKXt0LmdldERhdGFzZXRNZXRhKGEpLmNvbnRyb2xsZXIucmVzZXQoKX0sdCl9LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5yZXNldEVsZW1lbnRzKCksdGhpcy50b29sdGlwLmluaXRpYWxpemUoKX0sdXBkYXRlOmZ1bmN0aW9uKGUsYSl7dmFyIGk9dGhpczt0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlVXBkYXRlXCIsW2ldKSxpLnRvb2x0aXAuX2RhdGE9aS5kYXRhO3ZhciBuPWkuYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzKCk7ci5lYWNoKGkuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbih0LGUpe2kuZ2V0RGF0YXNldE1ldGEoZSkuY29udHJvbGxlci5idWlsZE9yVXBkYXRlRWxlbWVudHMoKX0saSksdC5sYXlvdXRTZXJ2aWNlLnVwZGF0ZShpLGkuY2hhcnQud2lkdGgsaS5jaGFydC5oZWlnaHQpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlclNjYWxlVXBkYXRlXCIsW2ldKSxyLmVhY2gobixmdW5jdGlvbih0KXt0LnJlc2V0KCl9KSxpLnVwZGF0ZURhdGFzZXRzKCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyVXBkYXRlXCIsW2ldKSxpLl9idWZmZXJlZFJlbmRlcj9pLl9idWZmZXJlZFJlcXVlc3Q9e2xhenk6YSxkdXJhdGlvbjplfTppLnJlbmRlcihlLGEpfSx1cGRhdGVEYXRhc2V0czpmdW5jdGlvbigpe3ZhciBlLGEsaT10aGlzO2lmKHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEYXRhc2V0c1VwZGF0ZVwiLFtpXSkpe2ZvcihlPTAsYT1pLmRhdGEuZGF0YXNldHMubGVuZ3RoO2E+ZTsrK2UpaS5nZXREYXRhc2V0TWV0YShlKS5jb250cm9sbGVyLnVwZGF0ZSgpO3QucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRhdGFzZXRzVXBkYXRlXCIsW2ldKX19LHJlbmRlcjpmdW5jdGlvbihlLGEpe3ZhciBpPXRoaXM7dC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZVJlbmRlclwiLFtpXSk7dmFyIG49aS5vcHRpb25zLmFuaW1hdGlvbjtpZihuJiYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGUmJjAhPT1lfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgZSYmMCE9PW4uZHVyYXRpb24pKXt2YXIgbz1uZXcgdC5BbmltYXRpb247by5udW1TdGVwcz0oZXx8bi5kdXJhdGlvbikvMTYuNjYsby5lYXNpbmc9bi5lYXNpbmcsby5yZW5kZXI9ZnVuY3Rpb24odCxlKXt2YXIgYT1yLmVhc2luZ0VmZmVjdHNbZS5lYXNpbmddLGk9ZS5jdXJyZW50U3RlcC9lLm51bVN0ZXBzLG49YShpKTt0LmRyYXcobixpLGUuY3VycmVudFN0ZXApfSxvLm9uQW5pbWF0aW9uUHJvZ3Jlc3M9bi5vblByb2dyZXNzLG8ub25BbmltYXRpb25Db21wbGV0ZT1uLm9uQ29tcGxldGUsdC5hbmltYXRpb25TZXJ2aWNlLmFkZEFuaW1hdGlvbihpLG8sZSxhKX1lbHNlIGkuZHJhdygpLG4mJm4ub25Db21wbGV0ZSYmbi5vbkNvbXBsZXRlLmNhbGwmJm4ub25Db21wbGV0ZS5jYWxsKGkpO3JldHVybiBpfSxkcmF3OmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsaT1lfHwxO2EuY2xlYXIoKSx0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRHJhd1wiLFthLGldKSxyLmVhY2goYS5ib3hlcyxmdW5jdGlvbih0KXt0LmRyYXcoYS5jaGFydEFyZWEpfSxhKSxhLnNjYWxlJiZhLnNjYWxlLmRyYXcoKSx0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlRGF0YXNldHNEcmF3XCIsW2EsaV0pLHIuZWFjaChhLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24odCxpKXthLmlzRGF0YXNldFZpc2libGUoaSkmJmEuZ2V0RGF0YXNldE1ldGEoaSkuY29udHJvbGxlci5kcmF3KGUpfSxhLCEwKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIixbYSxpXSksYS50b29sdGlwLnRyYW5zaXRpb24oaSkuZHJhdygpLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRyYXdcIixbYSxpXSl9LGdldEVsZW1lbnRBdEV2ZW50OmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzLnNpbmdsZSh0aGlzLGUpfSxnZXRFbGVtZW50c0F0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMubGFiZWwodGhpcyxlLHtpbnRlcnNlY3Q6ITB9KX0sZ2V0RWxlbWVudHNBdFhBeGlzOmZ1bmN0aW9uKGUpe3JldHVybiB0LkludGVyYWN0aW9uLm1vZGVzW1wieC1heGlzXCJdKHRoaXMsZSx7aW50ZXJzZWN0OiEwfSl9LGdldEVsZW1lbnRzQXRFdmVudEZvck1vZGU6ZnVuY3Rpb24oZSxhLGkpe3ZhciBuPXQuSW50ZXJhY3Rpb24ubW9kZXNbYV07cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbj9uKHRoaXMsZSxpKTpbXX0sZ2V0RGF0YXNldEF0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMuZGF0YXNldCh0aGlzLGUpfSxnZXREYXRhc2V0TWV0YTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5kYXRhLmRhdGFzZXRzW3RdO2EuX21ldGF8fChhLl9tZXRhPXt9KTtcbnZhciBpPWEuX21ldGFbZS5pZF07cmV0dXJuIGl8fChpPWEuX21ldGFbZS5pZF09e3R5cGU6bnVsbCxkYXRhOltdLGRhdGFzZXQ6bnVsbCxjb250cm9sbGVyOm51bGwsaGlkZGVuOm51bGwseEF4aXNJRDpudWxsLHlBeGlzSUQ6bnVsbH0pLGl9LGdldFZpc2libGVEYXRhc2V0Q291bnQ6ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPTAsYT10aGlzLmRhdGEuZGF0YXNldHMubGVuZ3RoO2E+ZTsrK2UpdGhpcy5pc0RhdGFzZXRWaXNpYmxlKGUpJiZ0Kys7cmV0dXJuIHR9LGlzRGF0YXNldFZpc2libGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXREYXRhc2V0TWV0YSh0KTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGUuaGlkZGVuPyFlLmhpZGRlbjohdGhpcy5kYXRhLmRhdGFzZXRzW3RdLmhpZGRlbn0sZ2VuZXJhdGVMZWdlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmxlZ2VuZENhbGxiYWNrKHRoaXMpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dmFyIGUsYSxuLG89dGhpcyxsPW8uY2hhcnQuY2FudmFzO2ZvcihvLnN0b3AoKSxhPTAsbj1vLmRhdGEuZGF0YXNldHMubGVuZ3RoO24+YTsrK2EpZT1vLmdldERhdGFzZXRNZXRhKGEpLGUuY29udHJvbGxlciYmKGUuY29udHJvbGxlci5kZXN0cm95KCksZS5jb250cm9sbGVyPW51bGwpO2wmJihyLnVuYmluZEV2ZW50cyhvLG8uZXZlbnRzKSxyLnJlbW92ZVJlc2l6ZUxpc3RlbmVyKGwucGFyZW50Tm9kZSksci5jbGVhcihvLmNoYXJ0KSxpKGwpLG8uY2hhcnQuY2FudmFzPW51bGwsby5jaGFydC5jdHg9bnVsbCksdC5wbHVnaW5zLm5vdGlmeShcImRlc3Ryb3lcIixbb10pLGRlbGV0ZSB0Lmluc3RhbmNlc1tvLmlkXX0sdG9CYXNlNjRJbWFnZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmNhbnZhcy50b0RhdGFVUkwuYXBwbHkodGhpcy5jaGFydC5jYW52YXMsYXJndW1lbnRzKX0saW5pdFRvb2xUaXA6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UudG9vbHRpcD1uZXcgdC5Ub29sdGlwKHtfY2hhcnQ6ZS5jaGFydCxfY2hhcnRJbnN0YW5jZTplLF9kYXRhOmUuZGF0YSxfb3B0aW9uczplLm9wdGlvbnMudG9vbHRpcHN9LGUpLGUudG9vbHRpcC5pbml0aWFsaXplKCl9LGJpbmRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3IuYmluZEV2ZW50cyh0LHQub3B0aW9ucy5ldmVudHMsZnVuY3Rpb24oZSl7dC5ldmVudEhhbmRsZXIoZSl9KX0sdXBkYXRlSG92ZXJTdHlsZTpmdW5jdGlvbih0LGUsYSl7dmFyIGksbixvLHI9YT9cInNldEhvdmVyU3R5bGVcIjpcInJlbW92ZUhvdmVyU3R5bGVcIjtmb3Iobj0wLG89dC5sZW5ndGg7bz5uOysrbilpPXRbbl0saSYmdGhpcy5nZXREYXRhc2V0TWV0YShpLl9kYXRhc2V0SW5kZXgpLmNvbnRyb2xsZXJbcl0oaSl9LGV2ZW50SGFuZGxlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5sZWdlbmQsaT1lLnRvb2x0aXAsbj1lLm9wdGlvbnMuaG92ZXI7ZS5fYnVmZmVyZWRSZW5kZXI9ITAsZS5fYnVmZmVyZWRSZXF1ZXN0PW51bGw7dmFyIG89ZS5oYW5kbGVFdmVudCh0KTtvfD1hJiZhLmhhbmRsZUV2ZW50KHQpLG98PWkmJmkuaGFuZGxlRXZlbnQodCk7dmFyIHI9ZS5fYnVmZmVyZWRSZXF1ZXN0O3JldHVybiByP2UucmVuZGVyKHIuZHVyYXRpb24sci5sYXp5KTpvJiYhZS5hbmltYXRpbmcmJihlLnN0b3AoKSxlLnJlbmRlcihuLmFuaW1hdGlvbkR1cmF0aW9uLCEwKSksZS5fYnVmZmVyZWRSZW5kZXI9ITEsZS5fYnVmZmVyZWRSZXF1ZXN0PW51bGwsZX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUub3B0aW9uc3x8e30saT1hLmhvdmVyLG49ITE7cmV0dXJuIGUubGFzdEFjdGl2ZT1lLmxhc3RBY3RpdmV8fFtdLFwibW91c2VvdXRcIj09PXQudHlwZT9lLmFjdGl2ZT1bXTplLmFjdGl2ZT1lLmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUodCxpLm1vZGUsaSksaS5vbkhvdmVyJiZpLm9uSG92ZXIuY2FsbChlLGUuYWN0aXZlKSwoXCJtb3VzZXVwXCI9PT10LnR5cGV8fFwiY2xpY2tcIj09PXQudHlwZSkmJmEub25DbGljayYmYS5vbkNsaWNrLmNhbGwoZSx0LGUuYWN0aXZlKSxlLmxhc3RBY3RpdmUubGVuZ3RoJiZlLnVwZGF0ZUhvdmVyU3R5bGUoZS5sYXN0QWN0aXZlLGkubW9kZSwhMSksZS5hY3RpdmUubGVuZ3RoJiZpLm1vZGUmJmUudXBkYXRlSG92ZXJTdHlsZShlLmFjdGl2ZSxpLm1vZGUsITApLG49IXIuYXJyYXlFcXVhbHMoZS5hY3RpdmUsZS5sYXN0QWN0aXZlKSxlLmxhc3RBY3RpdmU9ZS5hY3RpdmUsbn19KX19LHt9XSwyNDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHQuX2NoYXJ0anM/dm9pZCB0Ll9jaGFydGpzLmxpc3RlbmVycy5wdXNoKGUpOihPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9jaGFydGpzXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOntsaXN0ZW5lcnM6W2VdfX0pLHZvaWQgbi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciBhPVwib25EYXRhXCIrZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStlLnNsaWNlKDEpLG49dFtlXTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMSx2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksbz1uLmFwcGx5KHRoaXMsZSk7cmV0dXJuIGkuZWFjaCh0Ll9jaGFydGpzLmxpc3RlbmVycyxmdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiB0W2FdJiZ0W2FdLmFwcGx5KHQsZSl9KSxvfX0pfSkpfWZ1bmN0aW9uIGEodCxlKXt2YXIgYT10Ll9jaGFydGpzO2lmKGEpe3ZhciBpPWEubGlzdGVuZXJzLG89aS5pbmRleE9mKGUpOy0xIT09byYmaS5zcGxpY2UobywxKSxpLmxlbmd0aD4wfHwobi5mb3JFYWNoKGZ1bmN0aW9uKGUpe2RlbGV0ZSB0W2VdfSksZGVsZXRlIHQuX2NoYXJ0anMpfX12YXIgaT10LmhlbHBlcnMsbj1bXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJzcGxpY2VcIixcInVuc2hpZnRcIl07dC5EYXRhc2V0Q29udHJvbGxlcj1mdW5jdGlvbih0LGUpe3RoaXMuaW5pdGlhbGl6ZSh0LGUpfSxpLmV4dGVuZCh0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZSx7ZGF0YXNldEVsZW1lbnRUeXBlOm51bGwsZGF0YUVsZW1lbnRUeXBlOm51bGwsaW5pdGlhbGl6ZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7YS5jaGFydD10LGEuaW5kZXg9ZSxhLmxpbmtTY2FsZXMoKSxhLmFkZEVsZW1lbnRzKCl9LHVwZGF0ZUluZGV4OmZ1bmN0aW9uKHQpe3RoaXMuaW5kZXg9dH0sbGlua1NjYWxlczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldE1ldGEoKSxhPXQuZ2V0RGF0YXNldCgpO251bGw9PT1lLnhBeGlzSUQmJihlLnhBeGlzSUQ9YS54QXhpc0lEfHx0LmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLmlkKSxudWxsPT09ZS55QXhpc0lEJiYoZS55QXhpc0lEPWEueUF4aXNJRHx8dC5jaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5pZCl9LGdldERhdGFzZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3RoaXMuaW5kZXhdfSxnZXRNZXRhOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEodGhpcy5pbmRleCl9LGdldFNjYWxlRm9ySWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY2hhcnQuc2NhbGVzW3RdfSxyZXNldDpmdW5jdGlvbigpe3RoaXMudXBkYXRlKCEwKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX2RhdGEmJmEodGhpcy5fZGF0YSx0aGlzKX0sY3JlYXRlTWV0YURhdGFzZXQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5kYXRhc2V0RWxlbWVudFR5cGU7cmV0dXJuIGUmJm5ldyBlKHtfY2hhcnQ6dC5jaGFydC5jaGFydCxfZGF0YXNldEluZGV4OnQuaW5kZXh9KX0sY3JlYXRlTWV0YURhdGE6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPWUuZGF0YUVsZW1lbnRUeXBlO3JldHVybiBhJiZuZXcgYSh7X2NoYXJ0OmUuY2hhcnQuY2hhcnQsX2RhdGFzZXRJbmRleDplLmluZGV4LF9pbmRleDp0fSl9LGFkZEVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQsZSxhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0RGF0YXNldCgpLmRhdGF8fFtdLG89aS5kYXRhO2Zvcih0PTAsZT1uLmxlbmd0aDtlPnQ7Kyt0KW9bdF09b1t0XXx8YS5jcmVhdGVNZXRhRGF0YSh0KTtpLmRhdGFzZXQ9aS5kYXRhc2V0fHxhLmNyZWF0ZU1ldGFEYXRhc2V0KCl9LGFkZEVsZW1lbnRBbmRSZXNldDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNyZWF0ZU1ldGFEYXRhKHQpO3RoaXMuZ2V0TWV0YSgpLmRhdGEuc3BsaWNlKHQsMCxlKSx0aGlzLnVwZGF0ZUVsZW1lbnQoZSx0LCEwKX0sYnVpbGRPclVwZGF0ZUVsZW1lbnRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQuZ2V0RGF0YXNldCgpLG49aS5kYXRhfHwoaS5kYXRhPVtdKTt0Ll9kYXRhIT09biYmKHQuX2RhdGEmJmEodC5fZGF0YSx0KSxlKG4sdCksdC5fZGF0YT1uKSx0LnJlc3luY0VsZW1lbnRzKCl9LHVwZGF0ZTppLm5vb3AsZHJhdzpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dHx8MSxuPXRoaXMuZ2V0TWV0YSgpLmRhdGE7Zm9yKGU9MCxhPW4ubGVuZ3RoO2E+ZTsrK2UpbltlXS50cmFuc2l0aW9uKGkpLmRyYXcoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLG49dC5faW5kZXgsbz10LmN1c3RvbXx8e30scj1pLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxsPXQuX21vZGVsO2wuYmFja2dyb3VuZENvbG9yPW8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOnIoYS5iYWNrZ3JvdW5kQ29sb3IsbixlLmJhY2tncm91bmRDb2xvciksbC5ib3JkZXJDb2xvcj1vLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6cihhLmJvcmRlckNvbG9yLG4sZS5ib3JkZXJDb2xvciksbC5ib3JkZXJXaWR0aD1vLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6cihhLmJvcmRlcldpZHRoLG4sZS5ib3JkZXJXaWR0aCl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sYT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPWkuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHI9aS5nZXRIb3ZlckNvbG9yLGw9dC5fbW9kZWw7bC5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcj9uLmhvdmVyQmFja2dyb3VuZENvbG9yOm8oZS5ob3ZlckJhY2tncm91bmRDb2xvcixhLHIobC5iYWNrZ3JvdW5kQ29sb3IpKSxsLmJvcmRlckNvbG9yPW4uaG92ZXJCb3JkZXJDb2xvcj9uLmhvdmVyQm9yZGVyQ29sb3I6byhlLmhvdmVyQm9yZGVyQ29sb3IsYSxyKGwuYm9yZGVyQ29sb3IpKSxsLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aD9uLmhvdmVyQm9yZGVyV2lkdGg6byhlLmhvdmVyQm9yZGVyV2lkdGgsYSxsLmJvcmRlcldpZHRoKX0scmVzeW5jRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRNZXRhKCksYT10LmdldERhdGFzZXQoKS5kYXRhLGk9ZS5kYXRhLmxlbmd0aCxuPWEubGVuZ3RoO2k+bj9lLmRhdGEuc3BsaWNlKG4saS1uKTpuPmkmJnQuaW5zZXJ0RWxlbWVudHMoaSxuLWkpfSxpbnNlcnRFbGVtZW50czpmdW5jdGlvbih0LGUpe2Zvcih2YXIgYT0wO2U+YTsrK2EpdGhpcy5hZGRFbGVtZW50QW5kUmVzZXQodCthKX0sb25EYXRhUHVzaDpmdW5jdGlvbigpe3RoaXMuaW5zZXJ0RWxlbWVudHModGhpcy5nZXREYXRhc2V0KCkuZGF0YS5sZW5ndGgtMSxhcmd1bWVudHMubGVuZ3RoKX0sb25EYXRhUG9wOmZ1bmN0aW9uKCl7dGhpcy5nZXRNZXRhKCkuZGF0YS5wb3AoKX0sb25EYXRhU2hpZnQ6ZnVuY3Rpb24oKXt0aGlzLmdldE1ldGEoKS5kYXRhLnNoaWZ0KCl9LG9uRGF0YVNwbGljZTpmdW5jdGlvbih0LGUpe3RoaXMuZ2V0TWV0YSgpLmRhdGEuc3BsaWNlKHQsZSksdGhpcy5pbnNlcnRFbGVtZW50cyh0LGFyZ3VtZW50cy5sZW5ndGgtMil9LG9uRGF0YVVuc2hpZnQ6ZnVuY3Rpb24oKXt0aGlzLmluc2VydEVsZW1lbnRzKDAsYXJndW1lbnRzLmxlbmd0aCl9fSksdC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQ9aS5pbmhlcml0c319LHt9XSwyNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5lbGVtZW50cz17fSx0LkVsZW1lbnQ9ZnVuY3Rpb24odCl7ZS5leHRlbmQodGhpcyx0KSx0aGlzLmluaXRpYWxpemUuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxlLmV4dGVuZCh0LkVsZW1lbnQucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5oaWRkZW49ITF9LHBpdm90OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcztyZXR1cm4gdC5fdmlld3x8KHQuX3ZpZXc9ZS5jbG9uZSh0Ll9tb2RlbCkpLHQuX3N0YXJ0PWUuY2xvbmUodC5fdmlldyksdH0sdHJhbnNpdGlvbjpmdW5jdGlvbih0KXt2YXIgYT10aGlzO3JldHVybiBhLl92aWV3fHwoYS5fdmlldz1lLmNsb25lKGEuX21vZGVsKSksMT09PXQ/KGEuX3ZpZXc9YS5fbW9kZWwsYS5fc3RhcnQ9bnVsbCxhKTooYS5fc3RhcnR8fGEucGl2b3QoKSxlLmVhY2goYS5fbW9kZWwsZnVuY3Rpb24oaSxuKXtpZihcIl9cIj09PW5bMF0pO2Vsc2UgaWYoYS5fdmlldy5oYXNPd25Qcm9wZXJ0eShuKSlpZihpPT09YS5fdmlld1tuXSk7ZWxzZSBpZihcInN0cmluZ1wiPT10eXBlb2YgaSl0cnl7dmFyIG89ZS5jb2xvcihhLl9tb2RlbFtuXSkubWl4KGUuY29sb3IoYS5fc3RhcnRbbl0pLHQpO2EuX3ZpZXdbbl09by5yZ2JTdHJpbmcoKX1jYXRjaChyKXthLl92aWV3W25dPWl9ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgaSl7dmFyIGw9dm9pZCAwIT09YS5fc3RhcnRbbl0mJmlzTmFOKGEuX3N0YXJ0W25dKT09PSExP2EuX3N0YXJ0W25dOjA7YS5fdmlld1tuXT0oYS5fbW9kZWxbbl0tbCkqdCtsfWVsc2UgYS5fdmlld1tuXT1pO2Vsc2VcIm51bWJlclwiIT10eXBlb2YgaXx8aXNOYU4oYS5fdmlld1tuXSk/YS5fdmlld1tuXT1pOmEuX3ZpZXdbbl09aSp0fSxhKSxhKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJue3g6dGhpcy5fbW9kZWwueCx5OnRoaXMuX21vZGVsLnl9fSxoYXNWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBlLmlzTnVtYmVyKHRoaXMuX21vZGVsLngpJiZlLmlzTnVtYmVyKHRoaXMuX21vZGVsLnkpfX0pLHQuRWxlbWVudC5leHRlbmQ9ZS5pbmhlcml0c319LHt9XSwyNjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoMyk7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlLGEpe3ZhciBpO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0PyhpPXBhcnNlSW50KHQsMTApLC0xIT09dC5pbmRleE9mKFwiJVwiKSYmKGk9aS8xMDAqZS5wYXJlbnROb2RlW2FdKSk6aT10LGl9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gdm9pZCAwIT09dCYmbnVsbCE9PXQmJlwibm9uZVwiIT09dH1mdW5jdGlvbiBuKHQsaSxuKXt2YXIgbz1kb2N1bWVudC5kZWZhdWx0VmlldyxyPXQucGFyZW50Tm9kZSxsPW8uZ2V0Q29tcHV0ZWRTdHlsZSh0KVtpXSxzPW8uZ2V0Q29tcHV0ZWRTdHlsZShyKVtpXSxkPWEobCksdT1hKHMpLGM9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO3JldHVybiBkfHx1P01hdGgubWluKGQ/ZShsLHQsbik6Yyx1P2UocyxyLG4pOmMpOlwibm9uZVwifXZhciBvPXQuaGVscGVycz17fTtvLmVhY2g9ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG4scjtpZihvLmlzQXJyYXkodCkpaWYocj10Lmxlbmd0aCxpKWZvcihuPXItMTtuPj0wO24tLSllLmNhbGwoYSx0W25dLG4pO2Vsc2UgZm9yKG49MDtyPm47bisrKWUuY2FsbChhLHRbbl0sbik7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGw9T2JqZWN0LmtleXModCk7Zm9yKHI9bC5sZW5ndGgsbj0wO3I+bjtuKyspZS5jYWxsKGEsdFtsW25dXSxsW25dKX19LG8uY2xvbmU9ZnVuY3Rpb24odCl7dmFyIGU9e307cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQsYSl7by5pc0FycmF5KHQpP2VbYV09dC5zbGljZSgwKTpcIm9iamVjdFwiPT10eXBlb2YgdCYmbnVsbCE9PXQ/ZVthXT1vLmNsb25lKHQpOmVbYV09dH0pLGV9LG8uZXh0ZW5kPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT1mdW5jdGlvbihlLGEpe3RbYV09ZX0sYT0xLGk9YXJndW1lbnRzLmxlbmd0aDtpPmE7YSsrKW8uZWFjaChhcmd1bWVudHNbYV0sZSk7cmV0dXJuIHR9LG8uY29uZmlnTWVyZ2U9ZnVuY3Rpb24oZSl7dmFyIGE9by5jbG9uZShlKTtyZXR1cm4gby5lYWNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxmdW5jdGlvbihlKXtvLmVhY2goZSxmdW5jdGlvbihlLGkpe3ZhciBuPWEuaGFzT3duUHJvcGVydHkoaSkscj1uP2FbaV06e307XCJzY2FsZXNcIj09PWk/YVtpXT1vLnNjYWxlTWVyZ2UocixlKTpcInNjYWxlXCI9PT1pP2FbaV09by5jb25maWdNZXJnZShyLHQuc2NhbGVTZXJ2aWNlLmdldFNjYWxlRGVmYXVsdHMoZS50eXBlKSxlKTohbnx8XCJvYmplY3RcIiE9dHlwZW9mIHJ8fG8uaXNBcnJheShyKXx8bnVsbD09PXJ8fFwib2JqZWN0XCIhPXR5cGVvZiBlfHxvLmlzQXJyYXkoZSk/YVtpXT1lOmFbaV09by5jb25maWdNZXJnZShyLGUpfSl9KSxhfSxvLnNjYWxlTWVyZ2U9ZnVuY3Rpb24oZSxhKXt2YXIgaT1vLmNsb25lKGUpO3JldHVybiBvLmVhY2goYSxmdW5jdGlvbihlLGEpe1wieEF4ZXNcIj09PWF8fFwieUF4ZXNcIj09PWE/aS5oYXNPd25Qcm9wZXJ0eShhKT9vLmVhY2goZSxmdW5jdGlvbihlLG4pe3ZhciByPW8uZ2V0VmFsdWVPckRlZmF1bHQoZS50eXBlLFwieEF4ZXNcIj09PWE/XCJjYXRlZ29yeVwiOlwibGluZWFyXCIpLGw9dC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhyKTtuPj1pW2FdLmxlbmd0aHx8IWlbYV1bbl0udHlwZT9pW2FdLnB1c2goby5jb25maWdNZXJnZShsLGUpKTplLnR5cGUmJmUudHlwZSE9PWlbYV1bbl0udHlwZT9pW2FdW25dPW8uY29uZmlnTWVyZ2UoaVthXVtuXSxsLGUpOmlbYV1bbl09by5jb25maWdNZXJnZShpW2FdW25dLGUpfSk6KGlbYV09W10sby5lYWNoKGUsZnVuY3Rpb24oZSl7dmFyIG49by5nZXRWYWx1ZU9yRGVmYXVsdChlLnR5cGUsXCJ4QXhlc1wiPT09YT9cImNhdGVnb3J5XCI6XCJsaW5lYXJcIik7aVthXS5wdXNoKG8uY29uZmlnTWVyZ2UodC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhuKSxlKSl9KSk6aS5oYXNPd25Qcm9wZXJ0eShhKSYmXCJvYmplY3RcIj09dHlwZW9mIGlbYV0mJm51bGwhPT1pW2FdJiZcIm9iamVjdFwiPT10eXBlb2YgZT9pW2FdPW8uY29uZmlnTWVyZ2UoaVthXSxlKTppW2FdPWV9KSxpfSxvLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdD1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIHZvaWQgMD09PXR8fG51bGw9PT10P2E6by5pc0FycmF5KHQpP2U8dC5sZW5ndGg/dFtlXTphOnR9LG8uZ2V0VmFsdWVPckRlZmF1bHQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdm9pZCAwPT09dD9lOnR9LG8uaW5kZXhPZj1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbih0LGUpe3JldHVybiB0LmluZGV4T2YoZSl9OmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBhPTAsaT10Lmxlbmd0aDtpPmE7KythKWlmKHRbYV09PT1lKXJldHVybiBhO3JldHVybi0xfSxvLndoZXJlPWZ1bmN0aW9uKHQsZSl7aWYoby5pc0FycmF5KHQpJiZBcnJheS5wcm90b3R5cGUuZmlsdGVyKXJldHVybiB0LmZpbHRlcihlKTt2YXIgYT1bXTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCl7ZSh0KSYmYS5wdXNoKHQpfSksYX0sby5maW5kSW5kZXg9QXJyYXkucHJvdG90eXBlLmZpbmRJbmRleD9mdW5jdGlvbih0LGUsYSl7cmV0dXJuIHQuZmluZEluZGV4KGUsYSl9OmZ1bmN0aW9uKHQsZSxhKXthPXZvaWQgMD09PWE/dDphO2Zvcih2YXIgaT0wLG49dC5sZW5ndGg7bj5pOysraSlpZihlLmNhbGwoYSx0W2ldLGksdCkpcmV0dXJuIGk7cmV0dXJuLTF9LG8uZmluZE5leHRXaGVyZT1mdW5jdGlvbih0LGUsYSl7KHZvaWQgMD09PWF8fG51bGw9PT1hKSYmKGE9LTEpO2Zvcih2YXIgaT1hKzE7aTx0Lmxlbmd0aDtpKyspe3ZhciBuPXRbaV07aWYoZShuKSlyZXR1cm4gbn19LG8uZmluZFByZXZpb3VzV2hlcmU9ZnVuY3Rpb24odCxlLGEpeyh2b2lkIDA9PT1hfHxudWxsPT09YSkmJihhPXQubGVuZ3RoKTtmb3IodmFyIGk9YS0xO2k+PTA7aS0tKXt2YXIgbj10W2ldO2lmKGUobikpcmV0dXJuIG59fSxvLmluaGVyaXRzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT10JiZ0Lmhhc093blByb3BlcnR5KFwiY29uc3RydWN0b3JcIik/dC5jb25zdHJ1Y3RvcjpmdW5jdGlvbigpe3JldHVybiBlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0saT1mdW5jdGlvbigpe3RoaXMuY29uc3RydWN0b3I9YX07cmV0dXJuIGkucHJvdG90eXBlPWUucHJvdG90eXBlLGEucHJvdG90eXBlPW5ldyBpLGEuZXh0ZW5kPW8uaW5oZXJpdHMsdCYmby5leHRlbmQoYS5wcm90b3R5cGUsdCksYS5fX3N1cGVyX189ZS5wcm90b3R5cGUsYX0sby5ub29wPWZ1bmN0aW9uKCl7fSxvLnVpZD1mdW5jdGlvbigpe3ZhciB0PTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHQrK319KCksby5pc051bWJlcj1mdW5jdGlvbih0KXtyZXR1cm4haXNOYU4ocGFyc2VGbG9hdCh0KSkmJmlzRmluaXRlKHQpfSxvLmFsbW9zdEVxdWFscz1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIE1hdGguYWJzKHQtZSk8YX0sby5tYXg9ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGlzTmFOKGUpP3Q6TWF0aC5tYXgodCxlKX0sTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZKX0sby5taW49ZnVuY3Rpb24odCl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGlzTmFOKGUpP3Q6TWF0aC5taW4odCxlKX0sTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZKX0sby5zaWduPU1hdGguc2lnbj9mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zaWduKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gdD0rdCwwPT09dHx8aXNOYU4odCk/dDp0PjA/MTotMX0sby5sb2cxMD1NYXRoLmxvZzEwP2Z1bmN0aW9uKHQpe3JldHVybiBNYXRoLmxvZzEwKHQpfTpmdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5sb2codCkvTWF0aC5MTjEwfSxvLnRvUmFkaWFucz1mdW5jdGlvbih0KXtyZXR1cm4gdCooTWF0aC5QSS8xODApfSxvLnRvRGVncmVlcz1mdW5jdGlvbih0KXtyZXR1cm4gdCooMTgwL01hdGguUEkpfSxvLmdldEFuZ2xlRnJvbVBvaW50PWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS54LXQueCxpPWUueS10Lnksbj1NYXRoLnNxcnQoYSphK2kqaSksbz1NYXRoLmF0YW4yKGksYSk7cmV0dXJuIG88LS41Kk1hdGguUEkmJihvKz0yKk1hdGguUEkpLHthbmdsZTpvLGRpc3RhbmNlOm59fSxvLmRpc3RhbmNlQmV0d2VlblBvaW50cz1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coZS54LXQueCwyKStNYXRoLnBvdyhlLnktdC55LDIpKX0sby5hbGlhc1BpeGVsPWZ1bmN0aW9uKHQpe3JldHVybiB0JTI9PT0wPzA6LjV9LG8uc3BsaW5lQ3VydmU9ZnVuY3Rpb24odCxlLGEsaSl7dmFyIG49dC5za2lwP2U6dCxvPWUscj1hLnNraXA/ZTphLGw9TWF0aC5zcXJ0KE1hdGgucG93KG8ueC1uLngsMikrTWF0aC5wb3coby55LW4ueSwyKSkscz1NYXRoLnNxcnQoTWF0aC5wb3coci54LW8ueCwyKStNYXRoLnBvdyhyLnktby55LDIpKSxkPWwvKGwrcyksdT1zLyhsK3MpO2Q9aXNOYU4oZCk/MDpkLHU9aXNOYU4odSk/MDp1O3ZhciBjPWkqZCxoPWkqdTtyZXR1cm57cHJldmlvdXM6e3g6by54LWMqKHIueC1uLngpLHk6by55LWMqKHIueS1uLnkpfSxuZXh0Ont4Om8ueCtoKihyLngtbi54KSx5Om8ueStoKihyLnktbi55KX19fSxvLkVQU0lMT049TnVtYmVyLkVQU0lMT058fDFlLTE0LG8uc3BsaW5lQ3VydmVNb25vdG9uZT1mdW5jdGlvbih0KXt2YXIgZSxhLGksbixyPSh0fHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybnttb2RlbDp0Ll9tb2RlbCxkZWx0YUs6MCxtSzowfX0pLGw9ci5sZW5ndGg7Zm9yKGU9MDtsPmU7KytlKWk9cltlXSxpLm1vZGVsLnNraXB8fChhPWU+MD9yW2UtMV06bnVsbCxuPWwtMT5lP3JbZSsxXTpudWxsLG4mJiFuLm1vZGVsLnNraXAmJihpLmRlbHRhSz0obi5tb2RlbC55LWkubW9kZWwueSkvKG4ubW9kZWwueC1pLm1vZGVsLngpKSwhYXx8YS5tb2RlbC5za2lwP2kubUs9aS5kZWx0YUs6IW58fG4ubW9kZWwuc2tpcD9pLm1LPWEuZGVsdGFLOnRoaXMuc2lnbihhLmRlbHRhSykhPT10aGlzLnNpZ24oaS5kZWx0YUspP2kubUs9MDppLm1LPShhLmRlbHRhSytpLmRlbHRhSykvMik7dmFyIHMsZCx1LGM7Zm9yKGU9MDtsLTE+ZTsrK2UpaT1yW2VdLG49cltlKzFdLGkubW9kZWwuc2tpcHx8bi5tb2RlbC5za2lwfHwoby5hbG1vc3RFcXVhbHMoaS5kZWx0YUssMCx0aGlzLkVQU0lMT04pP2kubUs9bi5tSz0wOihzPWkubUsvaS5kZWx0YUssZD1uLm1LL2kuZGVsdGFLLGM9TWF0aC5wb3cocywyKStNYXRoLnBvdyhkLDIpLDk+PWN8fCh1PTMvTWF0aC5zcXJ0KGMpLGkubUs9cyp1KmkuZGVsdGFLLG4ubUs9ZCp1KmkuZGVsdGFLKSkpO3ZhciBoO2ZvcihlPTA7bD5lOysrZSlpPXJbZV0saS5tb2RlbC5za2lwfHwoYT1lPjA/cltlLTFdOm51bGwsbj1sLTE+ZT9yW2UrMV06bnVsbCxhJiYhYS5tb2RlbC5za2lwJiYoaD0oaS5tb2RlbC54LWEubW9kZWwueCkvMyxpLm1vZGVsLmNvbnRyb2xQb2ludFByZXZpb3VzWD1pLm1vZGVsLngtaCxpLm1vZGVsLmNvbnRyb2xQb2ludFByZXZpb3VzWT1pLm1vZGVsLnktaCppLm1LKSxuJiYhbi5tb2RlbC5za2lwJiYoaD0obi5tb2RlbC54LWkubW9kZWwueCkvMyxpLm1vZGVsLmNvbnRyb2xQb2ludE5leHRYPWkubW9kZWwueCtoLGkubW9kZWwuY29udHJvbFBvaW50TmV4dFk9aS5tb2RlbC55K2gqaS5tSykpfSxvLm5leHRJdGVtPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gYT9lPj10Lmxlbmd0aC0xP3RbMF06dFtlKzFdOmU+PXQubGVuZ3RoLTE/dFt0Lmxlbmd0aC0xXTp0W2UrMV19LG8ucHJldmlvdXNJdGVtPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gYT8wPj1lP3RbdC5sZW5ndGgtMV06dFtlLTFdOjA+PWU/dFswXTp0W2UtMV19LG8ubmljZU51bT1mdW5jdGlvbih0LGUpe3ZhciBhLGk9TWF0aC5mbG9vcihvLmxvZzEwKHQpKSxuPXQvTWF0aC5wb3coMTAsaSk7cmV0dXJuIGE9ZT8xLjU+bj8xOjM+bj8yOjc+bj81OjEwOjE+PW4/MToyPj1uPzI6NT49bj81OjEwLGEqTWF0aC5wb3coMTAsaSl9O3ZhciByPW8uZWFzaW5nRWZmZWN0cz17bGluZWFyOmZ1bmN0aW9uKHQpe3JldHVybiB0fSxlYXNlSW5RdWFkOmZ1bmN0aW9uKHQpe3JldHVybiB0KnR9LGVhc2VPdXRRdWFkOmZ1bmN0aW9uKHQpe3JldHVybi0xKnQqKHQtMil9LGVhc2VJbk91dFF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdDotMC41KigtLXQqKHQtMiktMSl9LGVhc2VJbkN1YmljOmZ1bmN0aW9uKHQpe3JldHVybiB0KnQqdH0sZWFzZU91dEN1YmljOmZ1bmN0aW9uKHQpe3JldHVybiAxKigodD10LzEtMSkqdCp0KzEpfSxlYXNlSW5PdXRDdWJpYzpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQ6LjUqKCh0LT0yKSp0KnQrMil9LGVhc2VJblF1YXJ0OmZ1bmN0aW9uKHQpe3JldHVybiB0KnQqdCp0fSxlYXNlT3V0UXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuLTEqKCh0PXQvMS0xKSp0KnQqdC0xKX0sZWFzZUluT3V0UXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0KnQ6LTAuNSooKHQtPTIpKnQqdCp0LTIpfSxlYXNlSW5RdWludDpmdW5jdGlvbih0KXtyZXR1cm4gMSoodC89MSkqdCp0KnQqdH0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKHQpe3JldHVybiAxKigodD10LzEtMSkqdCp0KnQqdCsxKX0sZWFzZUluT3V0UXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPS41KTwxPy41KnQqdCp0KnQqdDouNSooKHQtPTIpKnQqdCp0KnQrMil9LGVhc2VJblNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuLTEqTWF0aC5jb3ModC8xKihNYXRoLlBJLzIpKSsxfSxlYXNlT3V0U2luZTpmdW5jdGlvbih0KXtyZXR1cm4gMSpNYXRoLnNpbih0LzEqKE1hdGguUEkvMikpfSxlYXNlSW5PdXRTaW5lOmZ1bmN0aW9uKHQpe3JldHVybi0wLjUqKE1hdGguY29zKE1hdGguUEkqdC8xKS0xKX0sZWFzZUluRXhwbzpmdW5jdGlvbih0KXtyZXR1cm4gMD09PXQ/MToxKk1hdGgucG93KDIsMTAqKHQvMS0xKSl9LGVhc2VPdXRFeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAxPT09dD8xOjEqKC1NYXRoLnBvdygyLC0xMCp0LzEpKzEpfSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAwPT09dD8wOjE9PT10PzE6KHQvPS41KTwxPy41Kk1hdGgucG93KDIsMTAqKHQtMSkpOi41KigtTWF0aC5wb3coMiwtMTAqLS10KSsyKX0sZWFzZUluQ2lyYzpmdW5jdGlvbih0KXtyZXR1cm4gdD49MT90Oi0xKihNYXRoLnNxcnQoMS0odC89MSkqdCktMSl9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKHQpe3JldHVybiAxKk1hdGguc3FydCgxLSh0PXQvMS0xKSp0KX0sZWFzZUluT3V0Q2lyYzpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LTAuNSooTWF0aC5zcXJ0KDEtdCp0KS0xKTouNSooTWF0aC5zcXJ0KDEtKHQtPTIpKnQpKzEpfSxlYXNlSW5FbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoxPT09KHQvPTEpPzE6KGF8fChhPS4zKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSwtKGkqTWF0aC5wb3coMiwxMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkpKX0sZWFzZU91dEVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjE9PT0odC89MSk/MTooYXx8KGE9LjMpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLGkqTWF0aC5wb3coMiwtMTAqdCkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSsxKX0sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6Mj09PSh0Lz0uNSk/MTooYXx8KGE9MSooLjMqMS41KSksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksMT50Py0uNSooaSpNYXRoLnBvdygyLDEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSk6aSpNYXRoLnBvdygyLC0xMCoodC09MSkpKk1hdGguc2luKCgxKnQtZSkqKDIqTWF0aC5QSSkvYSkqLjUrMSl9LGVhc2VJbkJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4gMSoodC89MSkqdCooKGUrMSkqdC1lKX0sZWFzZU91dEJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4gMSooKHQ9dC8xLTEpKnQqKChlKzEpKnQrZSkrMSl9LGVhc2VJbk91dEJhY2s6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1ODtyZXR1cm4odC89LjUpPDE/LjUqKHQqdCooKChlKj0xLjUyNSkrMSkqdC1lKSk6LjUqKCh0LT0yKSp0KigoKGUqPTEuNTI1KSsxKSp0K2UpKzIpfSxlYXNlSW5Cb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuIDEtci5lYXNlT3V0Qm91bmNlKDEtdCl9LGVhc2VPdXRCb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuKHQvPTEpPDEvMi43NT8xKig3LjU2MjUqdCp0KToyLzIuNzU+dD8xKig3LjU2MjUqKHQtPTEuNS8yLjc1KSp0Ky43NSk6Mi41LzIuNzU+dD8xKig3LjU2MjUqKHQtPTIuMjUvMi43NSkqdCsuOTM3NSk6MSooNy41NjI1Kih0LT0yLjYyNS8yLjc1KSp0Ky45ODQzNzUpfSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24odCl7cmV0dXJuLjU+dD8uNSpyLmVhc2VJbkJvdW5jZSgyKnQpOi41KnIuZWFzZU91dEJvdW5jZSgyKnQtMSkrLjV9fTtvLnJlcXVlc3RBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7cmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KHQsMWUzLzYwKX19KCksby5jYW5jZWxBbmltRnJhbWU9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWV8fGZ1bmN0aW9uKHQpe3JldHVybiB3aW5kb3cuY2xlYXJUaW1lb3V0KHQsMWUzLzYwKX19KCksby5nZXRSZWxhdGl2ZVBvc2l0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuPXQub3JpZ2luYWxFdmVudHx8dCxyPXQuY3VycmVudFRhcmdldHx8dC5zcmNFbGVtZW50LGw9ci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxzPW4udG91Y2hlcztzJiZzLmxlbmd0aD4wPyhhPXNbMF0uY2xpZW50WCxpPXNbMF0uY2xpZW50WSk6KGE9bi5jbGllbnRYLGk9bi5jbGllbnRZKTt2YXIgZD1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctbGVmdFwiKSksdT1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctdG9wXCIpKSxjPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1yaWdodFwiKSksaD1wYXJzZUZsb2F0KG8uZ2V0U3R5bGUocixcInBhZGRpbmctYm90dG9tXCIpKSxmPWwucmlnaHQtbC5sZWZ0LWQtYyxnPWwuYm90dG9tLWwudG9wLXUtaDtyZXR1cm4gYT1NYXRoLnJvdW5kKChhLWwubGVmdC1kKS9mKnIud2lkdGgvZS5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbyksaT1NYXRoLnJvdW5kKChpLWwudG9wLXUpL2cqci5oZWlnaHQvZS5jdXJyZW50RGV2aWNlUGl4ZWxSYXRpbykse3g6YSx5Oml9fSxvLmFkZEV2ZW50PWZ1bmN0aW9uKHQsZSxhKXt0LmFkZEV2ZW50TGlzdGVuZXI/dC5hZGRFdmVudExpc3RlbmVyKGUsYSk6dC5hdHRhY2hFdmVudD90LmF0dGFjaEV2ZW50KFwib25cIitlLGEpOnRbXCJvblwiK2VdPWF9LG8ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24odCxlLGEpe3QucmVtb3ZlRXZlbnRMaXN0ZW5lcj90LnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxhLCExKTp0LmRldGFjaEV2ZW50P3QuZGV0YWNoRXZlbnQoXCJvblwiK2UsYSk6dFtcIm9uXCIrZV09by5ub29wfSxvLmJpbmRFdmVudHM9ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQuZXZlbnRzPXQuZXZlbnRzfHx7fTtvLmVhY2goZSxmdW5jdGlvbihlKXtpW2VdPWZ1bmN0aW9uKCl7YS5hcHBseSh0LGFyZ3VtZW50cyl9LG8uYWRkRXZlbnQodC5jaGFydC5jYW52YXMsZSxpW2VdKX0pfSxvLnVuYmluZEV2ZW50cz1mdW5jdGlvbih0LGUpe3ZhciBhPXQuY2hhcnQuY2FudmFzO28uZWFjaChlLGZ1bmN0aW9uKHQsZSl7by5yZW1vdmVFdmVudChhLGUsdCl9KX0sby5nZXRDb25zdHJhaW50V2lkdGg9ZnVuY3Rpb24odCl7cmV0dXJuIG4odCxcIm1heC13aWR0aFwiLFwiY2xpZW50V2lkdGhcIil9LG8uZ2V0Q29uc3RyYWludEhlaWdodD1mdW5jdGlvbih0KXtyZXR1cm4gbih0LFwibWF4LWhlaWdodFwiLFwiY2xpZW50SGVpZ2h0XCIpfSxvLmdldE1heGltdW1XaWR0aD1mdW5jdGlvbih0KXt2YXIgZT10LnBhcmVudE5vZGUsYT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLWxlZnRcIiksMTApLGk9cGFyc2VJbnQoby5nZXRTdHlsZShlLFwicGFkZGluZy1yaWdodFwiKSwxMCksbj1lLmNsaWVudFdpZHRoLWEtaSxyPW8uZ2V0Q29uc3RyYWludFdpZHRoKHQpO3JldHVybiBpc05hTihyKT9uOk1hdGgubWluKG4scil9LG8uZ2V0TWF4aW11bUhlaWdodD1mdW5jdGlvbih0KXt2YXIgZT10LnBhcmVudE5vZGUsYT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLXRvcFwiKSwxMCksaT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCksbj1lLmNsaWVudEhlaWdodC1hLWkscj1vLmdldENvbnN0cmFpbnRIZWlnaHQodCk7cmV0dXJuIGlzTmFOKHIpP246TWF0aC5taW4obixyKX0sby5nZXRTdHlsZT1mdW5jdGlvbih0LGUpe3JldHVybiB0LmN1cnJlbnRTdHlsZT90LmN1cnJlbnRTdHlsZVtlXTpkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKHQsbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShlKX0sby5yZXRpbmFTY2FsZT1mdW5jdGlvbih0KXt2YXIgZT10LmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvPXdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxO2lmKDEhPT1lKXt2YXIgYT10LmNhbnZhcyxpPXQuaGVpZ2h0LG49dC53aWR0aDthLmhlaWdodD1pKmUsYS53aWR0aD1uKmUsdC5jdHguc2NhbGUoZSxlKSxhLnN0eWxlLmhlaWdodD1pK1wicHhcIixhLnN0eWxlLndpZHRoPW4rXCJweFwifX0sby5jbGVhcj1mdW5jdGlvbih0KXt0LmN0eC5jbGVhclJlY3QoMCwwLHQud2lkdGgsdC5oZWlnaHQpfSxvLmZvbnRTdHJpbmc9ZnVuY3Rpb24odCxlLGEpe3JldHVybiBlK1wiIFwiK3QrXCJweCBcIithfSxvLmxvbmdlc3RUZXh0PWZ1bmN0aW9uKHQsZSxhLGkpe2k9aXx8e307dmFyIG49aS5kYXRhPWkuZGF0YXx8e30scj1pLmdhcmJhZ2VDb2xsZWN0PWkuZ2FyYmFnZUNvbGxlY3R8fFtdO2kuZm9udCE9PWUmJihuPWkuZGF0YT17fSxyPWkuZ2FyYmFnZUNvbGxlY3Q9W10saS5mb250PWUpLHQuZm9udD1lO3ZhciBsPTA7by5lYWNoKGEsZnVuY3Rpb24oZSl7dm9pZCAwIT09ZSYmbnVsbCE9PWUmJm8uaXNBcnJheShlKSE9PSEwP2w9by5tZWFzdXJlVGV4dCh0LG4scixsLGUpOm8uaXNBcnJheShlKSYmby5lYWNoKGUsZnVuY3Rpb24oZSl7dm9pZCAwPT09ZXx8bnVsbD09PWV8fG8uaXNBcnJheShlKXx8KGw9by5tZWFzdXJlVGV4dCh0LG4scixsLGUpKX0pfSk7dmFyIHM9ci5sZW5ndGgvMjtpZihzPmEubGVuZ3RoKXtmb3IodmFyIGQ9MDtzPmQ7ZCsrKWRlbGV0ZSBuW3JbZF1dO3Iuc3BsaWNlKDAscyl9cmV0dXJuIGx9LG8ubWVhc3VyZVRleHQ9ZnVuY3Rpb24odCxlLGEsaSxuKXt2YXIgbz1lW25dO3JldHVybiBvfHwobz1lW25dPXQubWVhc3VyZVRleHQobikud2lkdGgsYS5wdXNoKG4pKSxvPmkmJihpPW8pLGl9LG8ubnVtYmVyT2ZMYWJlbExpbmVzPWZ1bmN0aW9uKHQpe3ZhciBlPTE7cmV0dXJuIG8uZWFjaCh0LGZ1bmN0aW9uKHQpe28uaXNBcnJheSh0KSYmdC5sZW5ndGg+ZSYmKGU9dC5sZW5ndGgpfSksZX0sby5kcmF3Um91bmRlZFJlY3RhbmdsZT1mdW5jdGlvbih0LGUsYSxpLG4sbyl7dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhlK28sYSksdC5saW5lVG8oZStpLW8sYSksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUraSxhLGUraSxhK28pLHQubGluZVRvKGUraSxhK24tbyksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUraSxhK24sZStpLW8sYStuKSx0LmxpbmVUbyhlK28sYStuKSx0LnF1YWRyYXRpY0N1cnZlVG8oZSxhK24sZSxhK24tbyksdC5saW5lVG8oZSxhK28pLHQucXVhZHJhdGljQ3VydmVUbyhlLGEsZStvLGEpLHQuY2xvc2VQYXRoKCl9LG8uY29sb3I9ZnVuY3Rpb24oZSl7cmV0dXJuIGk/aShlIGluc3RhbmNlb2YgQ2FudmFzR3JhZGllbnQ/dC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdENvbG9yOmUpOihjb25zb2xlLmVycm9yKFwiQ29sb3IuanMgbm90IGZvdW5kIVwiKSxlKX0sby5hZGRSZXNpemVMaXN0ZW5lcj1mdW5jdGlvbih0LGUpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7YS5jbGFzc05hbWU9XCJjaGFydGpzLWhpZGRlbi1pZnJhbWVcIixhLnN0eWxlLmNzc1RleHQ9XCJkaXNwbGF5OmJsb2NrO292ZXJmbG93OmhpZGRlbjtib3JkZXI6MDttYXJnaW46MDt0b3A6MDtsZWZ0OjA7Ym90dG9tOjA7cmlnaHQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOm5vbmU7ei1pbmRleDotMTtcIixhLnRhYkluZGV4PS0xO3ZhciBpPXQuX2NoYXJ0anM9e3Jlc2l6ZXI6YSx0aWNraW5nOiExfSxuPWZ1bmN0aW9uKCl7aS50aWNraW5nfHwoaS50aWNraW5nPSEwLG8ucmVxdWVzdEFuaW1GcmFtZS5jYWxsKHdpbmRvdyxmdW5jdGlvbigpe3JldHVybiBpLnJlc2l6ZXI/KGkudGlja2luZz0hMSxlKCkpOnZvaWQgMH0pKX07by5hZGRFdmVudChhLFwibG9hZFwiLGZ1bmN0aW9uKCl7by5hZGRFdmVudChhLmNvbnRlbnRXaW5kb3d8fGEsXCJyZXNpemVcIixuKSxuKCl9KSx0Lmluc2VydEJlZm9yZShhLHQuZmlyc3RDaGlsZCl9LG8ucmVtb3ZlUmVzaXplTGlzdGVuZXI9ZnVuY3Rpb24odCl7aWYodCYmdC5fY2hhcnRqcyl7dmFyIGU9dC5fY2hhcnRqcy5yZXNpemVyO2UmJihlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSksdC5fY2hhcnRqcy5yZXNpemVyPW51bGwpLGRlbGV0ZSB0Ll9jaGFydGpzfX0sby5pc0FycmF5PUFycmF5LmlzQXJyYXk/ZnVuY3Rpb24odCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCl9OmZ1bmN0aW9uKHQpe3JldHVyblwiW29iamVjdCBBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KX0sby5hcnJheUVxdWFscz1mdW5jdGlvbih0LGUpe3ZhciBhLGksbixyO2lmKCF0fHwhZXx8dC5sZW5ndGghPT1lLmxlbmd0aClyZXR1cm4hMTtmb3IoYT0wLGk9dC5sZW5ndGg7aT5hOysrYSlpZihuPXRbYV0scj1lW2FdLG4gaW5zdGFuY2VvZiBBcnJheSYmciBpbnN0YW5jZW9mIEFycmF5KXtpZighby5hcnJheUVxdWFscyhuLHIpKXJldHVybiExfWVsc2UgaWYobiE9PXIpcmV0dXJuITE7cmV0dXJuITB9LG8uY2FsbENhbGxiYWNrPWZ1bmN0aW9uKHQsZSxhKXt0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNhbGwmJnQuYXBwbHkoYSxlKX0sby5nZXRIb3ZlckNvbG9yPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgQ2FudmFzUGF0dGVybj90Om8uY29sb3IodCkuc2F0dXJhdGUoLjUpLmRhcmtlbiguMSkucmdiU3RyaW5nKCl9fX0sezM6M31dLDI3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYSxpLG4sbyxyLGw9dC5kYXRhLmRhdGFzZXRzO2ZvcihpPTAsbz1sLmxlbmd0aDtvPmk7KytpKWlmKHQuaXNEYXRhc2V0VmlzaWJsZShpKSlmb3IoYT10LmdldERhdGFzZXRNZXRhKGkpLG49MCxyPWEuZGF0YS5sZW5ndGg7cj5uOysrbil7dmFyIHM9YS5kYXRhW25dO3MuX3ZpZXcuc2tpcHx8ZShzKX19ZnVuY3Rpb24gYSh0LGEpe3ZhciBpPVtdO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pblJhbmdlKGEueCxhLnkpJiZpLnB1c2godCl9KSxpfWZ1bmN0aW9uIGkodCxhLGksbil7dmFyIHI9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLGw9W107cmV0dXJuIG58fChuPW8uZGlzdGFuY2VCZXR3ZWVuUG9pbnRzKSxlKHQsZnVuY3Rpb24odCl7aWYoIWl8fHQuaW5SYW5nZShhLngsYS55KSl7dmFyIGU9dC5nZXRDZW50ZXJQb2ludCgpLG89bihhLGUpO3I+bz8obD1bdF0scj1vKTpvPT09ciYmbC5wdXNoKHQpfX0pLGx9ZnVuY3Rpb24gbih0LGUsbil7dmFyIHI9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCksbD1mdW5jdGlvbih0LGUpe3JldHVybiBNYXRoLmFicyh0LngtZS54KX0scz1uLmludGVyc2VjdD9hKHQscik6aSh0LHIsITEsbCksZD1bXTtyZXR1cm4gcy5sZW5ndGg/KHQuZGF0YS5kYXRhc2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGUsYSl7aWYodC5pc0RhdGFzZXRWaXNpYmxlKGEpKXt2YXIgaT10LmdldERhdGFzZXRNZXRhKGEpLG49aS5kYXRhW3NbMF0uX2luZGV4XTtuJiYhbi5fdmlldy5za2lwJiZkLnB1c2gobil9fSksZCk6W119dmFyIG89dC5oZWxwZXJzO3QuSW50ZXJhY3Rpb249e21vZGVzOntzaW5nbGU6ZnVuY3Rpb24odCxhKXt2YXIgaT1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxuPVtdO3JldHVybiBlKHQsZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5SYW5nZShpLngsaS55KT8obi5wdXNoKHQpLG4pOnZvaWQgMH0pLG4uc2xpY2UoMCwxKX0sbGFiZWw6bixpbmRleDpuLGRhdGFzZXQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLGw9bi5pbnRlcnNlY3Q/YSh0LHIpOmkodCxyLCExKTtyZXR1cm4gbC5sZW5ndGg+MCYmKGw9dC5nZXREYXRhc2V0TWV0YShsWzBdLl9kYXRhc2V0SW5kZXgpLmRhdGEpLGx9LFwieC1heGlzXCI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gbih0LGUsITApfSxwb2ludDpmdW5jdGlvbih0LGUpe3ZhciBpPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpO3JldHVybiBhKHQsaSl9LG5lYXJlc3Q6ZnVuY3Rpb24odCxlLGEpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihlLHQuY2hhcnQpLHI9aSh0LG4sYS5pbnRlcnNlY3QpO3JldHVybiByLmxlbmd0aD4xJiZyLnNvcnQoZnVuY3Rpb24odCxlKXt2YXIgYT10LmdldEFyZWEoKSxpPWUuZ2V0QXJlYSgpLG49YS1pO3JldHVybiAwPT09biYmKG49dC5fZGF0YXNldEluZGV4LWUuX2RhdGFzZXRJbmRleCksbn0pLHIuc2xpY2UoMCwxKX0seDpmdW5jdGlvbih0LGEsaSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGEsdC5jaGFydCkscj1bXSxsPSExO3JldHVybiBlKHQsZnVuY3Rpb24odCl7dC5pblhSYW5nZShuLngpJiZyLnB1c2godCksdC5pblJhbmdlKG4ueCxuLnkpJiYobD0hMCl9KSxpLmludGVyc2VjdCYmIWwmJihyPVtdKSxyfSx5OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxyPVtdLGw9ITE7cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluWVJhbmdlKG4ueSkmJnIucHVzaCh0KSx0LmluUmFuZ2Uobi54LG4ueSkmJihsPSEwKX0pLGkuaW50ZXJzZWN0JiYhbCYmKHI9W10pLHJ9fX19fSx7fV0sMjg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgdD1mdW5jdGlvbihlLGEpe3JldHVybiB0aGlzLmNvbnRyb2xsZXI9bmV3IHQuQ29udHJvbGxlcihlLGEsdGhpcyksdGhpcy5jb250cm9sbGVyfTtyZXR1cm4gdC5kZWZhdWx0cz17Z2xvYmFsOntyZXNwb25zaXZlOiEwLHJlc3BvbnNpdmVBbmltYXRpb25EdXJhdGlvbjowLG1haW50YWluQXNwZWN0UmF0aW86ITAsZXZlbnRzOltcIm1vdXNlbW92ZVwiLFwibW91c2VvdXRcIixcImNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaG1vdmVcIl0saG92ZXI6e29uSG92ZXI6bnVsbCxtb2RlOlwibmVhcmVzdFwiLGludGVyc2VjdDohMCxhbmltYXRpb25EdXJhdGlvbjo0MDB9LG9uQ2xpY2s6bnVsbCxkZWZhdWx0Q29sb3I6XCJyZ2JhKDAsMCwwLDAuMSlcIixkZWZhdWx0Rm9udENvbG9yOlwiIzY2NlwiLGRlZmF1bHRGb250RmFtaWx5OlwiJ0hlbHZldGljYSBOZXVlJywgJ0hlbHZldGljYScsICdBcmlhbCcsIHNhbnMtc2VyaWZcIixkZWZhdWx0Rm9udFNpemU6MTIsZGVmYXVsdEZvbnRTdHlsZTpcIm5vcm1hbFwiLHNob3dMaW5lczohMCxlbGVtZW50czp7fSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO2Zvcih2YXIgYT0wO2E8dC5kYXRhLmRhdGFzZXRzLmxlbmd0aDthKyspZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicrdC5kYXRhLmRhdGFzZXRzW2FdLmJhY2tncm91bmRDb2xvcisnXCI+PC9zcGFuPicpLHQuZGF0YS5kYXRhc2V0c1thXS5sYWJlbCYmZS5wdXNoKHQuZGF0YS5kYXRhc2V0c1thXS5sYWJlbCksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX19fSx0LkNoYXJ0PXQsdH19LHt9XSwyOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5sYXlvdXRTZXJ2aWNlPXtkZWZhdWx0czp7fSxhZGRCb3g6ZnVuY3Rpb24odCxlKXt0LmJveGVzfHwodC5ib3hlcz1bXSksdC5ib3hlcy5wdXNoKGUpfSxyZW1vdmVCb3g6ZnVuY3Rpb24odCxlKXt0LmJveGVzJiZ0LmJveGVzLnNwbGljZSh0LmJveGVzLmluZGV4T2YoZSksMSl9LHVwZGF0ZTpmdW5jdGlvbih0LGEsaSl7ZnVuY3Rpb24gbih0KXt2YXIgZSxhPXQuaXNIb3Jpem9udGFsKCk7YT8oZT10LnVwZGF0ZSh0Lm9wdGlvbnMuZnVsbFdpZHRoP3g6QyxNKSxELT1lLmhlaWdodCk6KGU9dC51cGRhdGUodyxTKSxDLT1lLndpZHRoKSxJLnB1c2goe2hvcml6b250YWw6YSxtaW5TaXplOmUsYm94OnR9KX1mdW5jdGlvbiBvKHQpe3ZhciBhPWUuZmluZE5leHRXaGVyZShJLGZ1bmN0aW9uKGUpe3JldHVybiBlLmJveD09PXR9KTtpZihhKWlmKHQuaXNIb3Jpem9udGFsKCkpe3ZhciBpPXtsZWZ0OkEscmlnaHQ6VCx0b3A6MCxib3R0b206MH07dC51cGRhdGUodC5vcHRpb25zLmZ1bGxXaWR0aD94OkMseS8yLGkpfWVsc2UgdC51cGRhdGUoYS5taW5TaXplLndpZHRoLEQpfWZ1bmN0aW9uIHIodCl7dmFyIGE9ZS5maW5kTmV4dFdoZXJlKEksZnVuY3Rpb24oZSl7cmV0dXJuIGUuYm94PT09dH0pLGk9e2xlZnQ6MCxyaWdodDowLHRvcDpQLGJvdHRvbTpGfTthJiZ0LnVwZGF0ZShhLm1pblNpemUud2lkdGgsRCxpKX1mdW5jdGlvbiBsKHQpe3QuaXNIb3Jpem9udGFsKCk/KHQubGVmdD10Lm9wdGlvbnMuZnVsbFdpZHRoP3U6QSx0LnJpZ2h0PXQub3B0aW9ucy5mdWxsV2lkdGg/YS1jOkErQyx0LnRvcD1MLHQuYm90dG9tPUwrdC5oZWlnaHQsTD10LmJvdHRvbSk6KHQubGVmdD1WLHQucmlnaHQ9Vit0LndpZHRoLHQudG9wPVAsdC5ib3R0b209UCtELFY9dC5yaWdodCl9aWYodCl7dmFyIHM9dC5vcHRpb25zLmxheW91dCxkPXM/cy5wYWRkaW5nOm51bGwsdT0wLGM9MCxoPTAsZj0wO2lzTmFOKGQpPyh1PWQubGVmdHx8MCxjPWQucmlnaHR8fDAsaD1kLnRvcHx8MCxmPWQuYm90dG9tfHwwKToodT1kLGM9ZCxoPWQsZj1kKTt2YXIgZz1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJsZWZ0XCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxwPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cInJpZ2h0XCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxtPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cInRvcFwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksYj1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJib3R0b21cIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLHY9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwiY2hhcnRBcmVhXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KTttLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4oZS5vcHRpb25zLmZ1bGxXaWR0aD8xOjApLSh0Lm9wdGlvbnMuZnVsbFdpZHRoPzE6MCl9KSxiLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4odC5vcHRpb25zLmZ1bGxXaWR0aD8xOjApLShlLm9wdGlvbnMuZnVsbFdpZHRoPzE6MCl9KTt2YXIgeD1hLXUtYyx5PWktaC1mLGs9eC8yLFM9eS8yLHc9KGEtaykvKGcubGVuZ3RoK3AubGVuZ3RoKSxNPShpLVMpLyhtLmxlbmd0aCtiLmxlbmd0aCksQz14LEQ9eSxJPVtdO2UuZWFjaChnLmNvbmNhdChwLG0sYiksbik7dmFyIEE9dSxUPWMsUD1oLEY9ZjtlLmVhY2goZy5jb25jYXQocCksbyksZS5lYWNoKGcsZnVuY3Rpb24odCl7QSs9dC53aWR0aH0pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe1QrPXQud2lkdGh9KSxlLmVhY2gobS5jb25jYXQoYiksbyksZS5lYWNoKG0sZnVuY3Rpb24odCl7UCs9dC5oZWlnaHR9KSxlLmVhY2goYixmdW5jdGlvbih0KXtGKz10LmhlaWdodH0pLGUuZWFjaChnLmNvbmNhdChwKSxyKSxBPXUsVD1jLFA9aCxGPWYsZS5lYWNoKGcsZnVuY3Rpb24odCl7QSs9dC53aWR0aH0pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe1QrPXQud2lkdGh9KSxlLmVhY2gobSxmdW5jdGlvbih0KXtQKz10LmhlaWdodH0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe0YrPXQuaGVpZ2h0fSk7dmFyIF89aS1QLUYsUj1hLUEtVDsoUiE9PUN8fF8hPT1EKSYmKGUuZWFjaChnLGZ1bmN0aW9uKHQpe3QuaGVpZ2h0PV99KSxlLmVhY2gocCxmdW5jdGlvbih0KXt0LmhlaWdodD1ffSksZS5lYWNoKG0sZnVuY3Rpb24odCl7dC5vcHRpb25zLmZ1bGxXaWR0aHx8KHQud2lkdGg9Uil9KSxlLmVhY2goYixmdW5jdGlvbih0KXt0Lm9wdGlvbnMuZnVsbFdpZHRofHwodC53aWR0aD1SKX0pLEQ9XyxDPVIpO3ZhciBWPXUsTD1oO2UuZWFjaChnLmNvbmNhdChtKSxsKSxWKz1DLEwrPUQsZS5lYWNoKHAsbCksZS5lYWNoKGIsbCksdC5jaGFydEFyZWE9e2xlZnQ6QSx0b3A6UCxyaWdodDpBK0MsYm90dG9tOlArRH0sZS5lYWNoKHYsZnVuY3Rpb24oZSl7ZS5sZWZ0PXQuY2hhcnRBcmVhLmxlZnQsZS50b3A9dC5jaGFydEFyZWEudG9wLGUucmlnaHQ9dC5jaGFydEFyZWEucmlnaHQsZS5ib3R0b209dC5jaGFydEFyZWEuYm90dG9tLGUudXBkYXRlKEMsRCl9KX19fX19LHt9XSwzMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsZSl7cmV0dXJuIHQudXNlUG9pbnRTdHlsZT9lKk1hdGguU1FSVDI6dC5ib3hXaWR0aH12YXIgYT10LmhlbHBlcnMsaT1hLm5vb3A7dC5kZWZhdWx0cy5nbG9iYWwubGVnZW5kPXtkaXNwbGF5OiEwLHBvc2l0aW9uOlwidG9wXCIsZnVsbFdpZHRoOiEwLHJldmVyc2U6ITEsb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhPWUuZGF0YXNldEluZGV4LGk9dGhpcy5jaGFydCxuPWkuZ2V0RGF0YXNldE1ldGEoYSk7bi5oaWRkZW49bnVsbD09PW4uaGlkZGVuPyFpLmRhdGEuZGF0YXNldHNbYV0uaGlkZGVuOm51bGwsaS51cGRhdGUoKX0sb25Ib3ZlcjpudWxsLGxhYmVsczp7Ym94V2lkdGg6NDAscGFkZGluZzoxMCxnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgZT10LmRhdGE7cmV0dXJuIGEuaXNBcnJheShlLmRhdGFzZXRzKT9lLmRhdGFzZXRzLm1hcChmdW5jdGlvbihlLGkpe3JldHVybnt0ZXh0OmUubGFiZWwsZmlsbFN0eWxlOmEuaXNBcnJheShlLmJhY2tncm91bmRDb2xvcik/ZS5iYWNrZ3JvdW5kQ29sb3JbMF06ZS5iYWNrZ3JvdW5kQ29sb3IsaGlkZGVuOiF0LmlzRGF0YXNldFZpc2libGUoaSksbGluZUNhcDplLmJvcmRlckNhcFN0eWxlLGxpbmVEYXNoOmUuYm9yZGVyRGFzaCxsaW5lRGFzaE9mZnNldDplLmJvcmRlckRhc2hPZmZzZXQsbGluZUpvaW46ZS5ib3JkZXJKb2luU3R5bGUsbGluZVdpZHRoOmUuYm9yZGVyV2lkdGgsc3Ryb2tlU3R5bGU6ZS5ib3JkZXJDb2xvcixwb2ludFN0eWxlOmUucG9pbnRTdHlsZSxkYXRhc2V0SW5kZXg6aX19LHRoaXMpOltdfX19LHQuTGVnZW5kPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24odCl7YS5leHRlbmQodGhpcyx0KSx0aGlzLmxlZ2VuZEhpdEJveGVzPVtdLHRoaXMuZG91Z2hudXRNb2RlPSExfSxiZWZvcmVVcGRhdGU6aSx1cGRhdGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXM7cmV0dXJuIGkuYmVmb3JlVXBkYXRlKCksaS5tYXhXaWR0aD10LGkubWF4SGVpZ2h0PWUsaS5tYXJnaW5zPWEsaS5iZWZvcmVTZXREaW1lbnNpb25zKCksaS5zZXREaW1lbnNpb25zKCksaS5hZnRlclNldERpbWVuc2lvbnMoKSxpLmJlZm9yZUJ1aWxkTGFiZWxzKCksaS5idWlsZExhYmVscygpLGkuYWZ0ZXJCdWlsZExhYmVscygpLGkuYmVmb3JlRml0KCksaS5maXQoKSxpLmFmdGVyRml0KCksaS5hZnRlclVwZGF0ZSgpLGkubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6aSxiZWZvcmVTZXREaW1lbnNpb25zOmksc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wLHQubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH19LGFmdGVyU2V0RGltZW5zaW9uczppLGJlZm9yZUJ1aWxkTGFiZWxzOmksYnVpbGRMYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGVnZW5kSXRlbXM9dC5vcHRpb25zLmxhYmVscy5nZW5lcmF0ZUxhYmVscy5jYWxsKHQsdC5jaGFydCksdC5vcHRpb25zLnJldmVyc2UmJnQubGVnZW5kSXRlbXMucmV2ZXJzZSgpfSxhZnRlckJ1aWxkTGFiZWxzOmksYmVmb3JlRml0OmksZml0OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucyxvPW4ubGFiZWxzLHI9bi5kaXNwbGF5LGw9aS5jdHgscz10LmRlZmF1bHRzLmdsb2JhbCxkPWEuZ2V0VmFsdWVPckRlZmF1bHQsdT1kKG8uZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLGM9ZChvLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLGg9ZChvLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSksZj1hLmZvbnRTdHJpbmcodSxjLGgpLGc9aS5sZWdlbmRIaXRCb3hlcz1bXSxwPWkubWluU2l6ZSxtPWkuaXNIb3Jpem9udGFsKCk7aWYobT8ocC53aWR0aD1pLm1heFdpZHRoLHAuaGVpZ2h0PXI/MTA6MCk6KHAud2lkdGg9cj8xMDowLHAuaGVpZ2h0PWkubWF4SGVpZ2h0KSxyKWlmKGwuZm9udD1mLG0pe3ZhciBiPWkubGluZVdpZHRocz1bMF0sdj1pLmxlZ2VuZEl0ZW1zLmxlbmd0aD91K28ucGFkZGluZzowO2wudGV4dEFsaWduPVwibGVmdFwiLGwudGV4dEJhc2VsaW5lPVwidG9wXCIsYS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxhKXt2YXIgbj1lKG8sdSkscj1uK3UvMitsLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGg7YltiLmxlbmd0aC0xXStyK28ucGFkZGluZz49aS53aWR0aCYmKHYrPXUrby5wYWRkaW5nLGJbYi5sZW5ndGhdPWkubGVmdCksZ1thXT17bGVmdDowLHRvcDowLHdpZHRoOnIsaGVpZ2h0OnV9LGJbYi5sZW5ndGgtMV0rPXIrby5wYWRkaW5nfSkscC5oZWlnaHQrPXZ9ZWxzZXt2YXIgeD1vLnBhZGRpbmcseT1pLmNvbHVtbldpZHRocz1bXSxrPW8ucGFkZGluZyxTPTAsdz0wLE09dSt4O2EuZWFjaChpLmxlZ2VuZEl0ZW1zLGZ1bmN0aW9uKHQsYSl7dmFyIGk9ZShvLHUpLG49aSt1LzIrbC5tZWFzdXJlVGV4dCh0LnRleHQpLndpZHRoO3crTT5wLmhlaWdodCYmKGsrPVMrby5wYWRkaW5nLHkucHVzaChTKSxTPTAsdz0wKSxTPU1hdGgubWF4KFMsbiksdys9TSxnW2FdPXtsZWZ0OjAsdG9wOjAsd2lkdGg6bixoZWlnaHQ6dX19KSxrKz1TLHkucHVzaChTKSxwLndpZHRoKz1rfWkud2lkdGg9cC53aWR0aCxpLmhlaWdodD1wLmhlaWdodH0sYWZ0ZXJGaXQ6aSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXtyZXR1cm5cInRvcFwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucyxvPW4ubGFiZWxzLHI9dC5kZWZhdWx0cy5nbG9iYWwsbD1yLmVsZW1lbnRzLmxpbmUscz1pLndpZHRoLGQ9aS5saW5lV2lkdGhzO2lmKG4uZGlzcGxheSl7dmFyIHUsYz1pLmN0eCxoPWEuZ2V0VmFsdWVPckRlZmF1bHQsZj1oKG8uZm9udENvbG9yLHIuZGVmYXVsdEZvbnRDb2xvciksZz1oKG8uZm9udFNpemUsci5kZWZhdWx0Rm9udFNpemUpLHA9aChvLmZvbnRTdHlsZSxyLmRlZmF1bHRGb250U3R5bGUpLG09aChvLmZvbnRGYW1pbHksci5kZWZhdWx0Rm9udEZhbWlseSksYj1hLmZvbnRTdHJpbmcoZyxwLG0pO2MudGV4dEFsaWduPVwibGVmdFwiLGMudGV4dEJhc2VsaW5lPVwidG9wXCIsYy5saW5lV2lkdGg9LjUsYy5zdHJva2VTdHlsZT1mLGMuZmlsbFN0eWxlPWYsYy5mb250PWI7dmFyIHY9ZShvLGcpLHg9aS5sZWdlbmRIaXRCb3hlcyx5PWZ1bmN0aW9uKGUsYSxpKXtpZighKGlzTmFOKHYpfHwwPj12KSl7Yy5zYXZlKCksYy5maWxsU3R5bGU9aChpLmZpbGxTdHlsZSxyLmRlZmF1bHRDb2xvciksYy5saW5lQ2FwPWgoaS5saW5lQ2FwLGwuYm9yZGVyQ2FwU3R5bGUpLGMubGluZURhc2hPZmZzZXQ9aChpLmxpbmVEYXNoT2Zmc2V0LGwuYm9yZGVyRGFzaE9mZnNldCksYy5saW5lSm9pbj1oKGkubGluZUpvaW4sbC5ib3JkZXJKb2luU3R5bGUpLGMubGluZVdpZHRoPWgoaS5saW5lV2lkdGgsbC5ib3JkZXJXaWR0aCksYy5zdHJva2VTdHlsZT1oKGkuc3Ryb2tlU3R5bGUsci5kZWZhdWx0Q29sb3IpO3ZhciBvPTA9PT1oKGkubGluZVdpZHRoLGwuYm9yZGVyV2lkdGgpO2lmKGMuc2V0TGluZURhc2gmJmMuc2V0TGluZURhc2goaChpLmxpbmVEYXNoLGwuYm9yZGVyRGFzaCkpLG4ubGFiZWxzJiZuLmxhYmVscy51c2VQb2ludFN0eWxlKXt2YXIgcz1nKk1hdGguU1FSVDIvMixkPXMvTWF0aC5TUVJUMix1PWUrZCxmPWErZDt0LmNhbnZhc0hlbHBlcnMuZHJhd1BvaW50KGMsaS5wb2ludFN0eWxlLHMsdSxmKX1lbHNlIG98fGMuc3Ryb2tlUmVjdChlLGEsdixnKSxjLmZpbGxSZWN0KGUsYSx2LGcpO2MucmVzdG9yZSgpfX0saz1mdW5jdGlvbih0LGUsYSxpKXtjLmZpbGxUZXh0KGEudGV4dCx2K2cvMit0LGUpLGEuaGlkZGVuJiYoYy5iZWdpblBhdGgoKSxjLmxpbmVXaWR0aD0yLGMubW92ZVRvKHYrZy8yK3QsZStnLzIpLGMubGluZVRvKHYrZy8yK3QraSxlK2cvMiksYy5zdHJva2UoKSl9LFM9aS5pc0hvcml6b250YWwoKTt1PVM/e3g6aS5sZWZ0KyhzLWRbMF0pLzIseTppLnRvcCtvLnBhZGRpbmcsbGluZTowfTp7eDppLmxlZnQrby5wYWRkaW5nLHk6aS50b3Arby5wYWRkaW5nLGxpbmU6MH07dmFyIHc9ZytvLnBhZGRpbmc7YS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxlKXt2YXIgYT1jLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGgsbj12K2cvMithLHI9dS54LGw9dS55O1M/cituPj1zJiYobD11LnkrPXcsdS5saW5lKysscj11Lng9aS5sZWZ0KyhzLWRbdS5saW5lXSkvMik6bCt3PmkuYm90dG9tJiYocj11Lng9citpLmNvbHVtbldpZHRoc1t1LmxpbmVdK28ucGFkZGluZyxsPXUueT1pLnRvcCx1LmxpbmUrKykseShyLGwsdCkseFtlXS5sZWZ0PXIseFtlXS50b3A9bCxrKHIsbCx0LGEpLFM/dS54Kz1uK28ucGFkZGluZzp1LnkrPXd9KX19LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsaT1lLm9wdGlvbnMsbj1cIm1vdXNldXBcIj09PXQudHlwZT9cImNsaWNrXCI6dC50eXBlLG89ITE7aWYoXCJtb3VzZW1vdmVcIj09PW4pe2lmKCFpLm9uSG92ZXIpcmV0dXJufWVsc2V7aWYoXCJjbGlja1wiIT09bilyZXR1cm47aWYoIWkub25DbGljaylyZXR1cm59dmFyIHI9YS5nZXRSZWxhdGl2ZVBvc2l0aW9uKHQsZS5jaGFydC5jaGFydCksbD1yLngscz1yLnk7aWYobD49ZS5sZWZ0JiZsPD1lLnJpZ2h0JiZzPj1lLnRvcCYmczw9ZS5ib3R0b20pZm9yKHZhciBkPWUubGVnZW5kSGl0Qm94ZXMsdT0wO3U8ZC5sZW5ndGg7Kyt1KXt2YXIgYz1kW3VdO2lmKGw+PWMubGVmdCYmbDw9Yy5sZWZ0K2Mud2lkdGgmJnM+PWMudG9wJiZzPD1jLnRvcCtjLmhlaWdodCl7aWYoXCJjbGlja1wiPT09bil7aS5vbkNsaWNrLmNhbGwoZSx0LGUubGVnZW5kSXRlbXNbdV0pLG89ITA7YnJlYWt9aWYoXCJtb3VzZW1vdmVcIj09PW4pe2kub25Ib3Zlci5jYWxsKGUsdCxlLmxlZ2VuZEl0ZW1zW3VdKSxvPSEwO2JyZWFrfX19cmV0dXJuIG99fSksdC5wbHVnaW5zLnJlZ2lzdGVyKHtiZWZvcmVJbml0OmZ1bmN0aW9uKGUpe3ZhciBhPWUub3B0aW9ucyxpPWEubGVnZW5kO2kmJihlLmxlZ2VuZD1uZXcgdC5MZWdlbmQoe2N0eDplLmNoYXJ0LmN0eCxvcHRpb25zOmksY2hhcnQ6ZX0pLHQubGF5b3V0U2VydmljZS5hZGRCb3goZSxlLmxlZ2VuZCkpfX0pfX0se31dLDMxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycy5ub29wO3QucGx1Z2lucz17X3BsdWdpbnM6W10scmVnaXN0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcGx1Z2lucztbXS5jb25jYXQodCkuZm9yRWFjaChmdW5jdGlvbih0KXstMT09PWUuaW5kZXhPZih0KSYmZS5wdXNoKHQpfSl9LHVucmVnaXN0ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5fcGx1Z2lucztbXS5jb25jYXQodCkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgYT1lLmluZGV4T2YodCk7LTEhPT1hJiZlLnNwbGljZShhLDEpfSl9LGNsZWFyOmZ1bmN0aW9uKCl7dGhpcy5fcGx1Z2lucz1bXX0sY291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fcGx1Z2lucy5sZW5ndGh9LGdldEFsbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wbHVnaW5zfSxub3RpZnk6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG49dGhpcy5fcGx1Z2lucyxvPW4ubGVuZ3RoO1xuZm9yKGE9MDtvPmE7KythKWlmKGk9blthXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBpW3RdJiZpW3RdLmFwcGx5KGksZXx8W10pPT09ITEpcmV0dXJuITE7cmV0dXJuITB9fSx0LlBsdWdpbkJhc2U9dC5FbGVtZW50LmV4dGVuZCh7YmVmb3JlSW5pdDplLGFmdGVySW5pdDplLGJlZm9yZVVwZGF0ZTplLGFmdGVyVXBkYXRlOmUsYmVmb3JlRHJhdzplLGFmdGVyRHJhdzplLGRlc3Ryb3k6ZX0pLHQucGx1Z2luU2VydmljZT10LnBsdWdpbnN9fSx7fV0sMzI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuc2NhbGU9e2Rpc3BsYXk6ITAscG9zaXRpb246XCJsZWZ0XCIsZ3JpZExpbmVzOntkaXNwbGF5OiEwLGNvbG9yOlwicmdiYSgwLCAwLCAwLCAwLjEpXCIsbGluZVdpZHRoOjEsZHJhd0JvcmRlcjohMCxkcmF3T25DaGFydEFyZWE6ITAsZHJhd1RpY2tzOiEwLHRpY2tNYXJrTGVuZ3RoOjEwLHplcm9MaW5lV2lkdGg6MSx6ZXJvTGluZUNvbG9yOlwicmdiYSgwLDAsMCwwLjI1KVwiLG9mZnNldEdyaWRMaW5lczohMSxib3JkZXJEYXNoOltdLGJvcmRlckRhc2hPZmZzZXQ6MH0sc2NhbGVMYWJlbDp7bGFiZWxTdHJpbmc6XCJcIixkaXNwbGF5OiExfSx0aWNrczp7YmVnaW5BdFplcm86ITEsbWluUm90YXRpb246MCxtYXhSb3RhdGlvbjo1MCxtaXJyb3I6ITEscGFkZGluZzoxMCxyZXZlcnNlOiExLGRpc3BsYXk6ITAsYXV0b1NraXA6ITAsYXV0b1NraXBQYWRkaW5nOjAsbGFiZWxPZmZzZXQ6MCxjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMudmFsdWVzfX0sdC5TY2FsZT10LkVsZW1lbnQuZXh0ZW5kKHtiZWZvcmVVcGRhdGU6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlLFt0aGlzXSl9LHVwZGF0ZTpmdW5jdGlvbih0LGEsaSl7dmFyIG49dGhpcztyZXR1cm4gbi5iZWZvcmVVcGRhdGUoKSxuLm1heFdpZHRoPXQsbi5tYXhIZWlnaHQ9YSxuLm1hcmdpbnM9ZS5leHRlbmQoe2xlZnQ6MCxyaWdodDowLHRvcDowLGJvdHRvbTowfSxpKSxuLmJlZm9yZVNldERpbWVuc2lvbnMoKSxuLnNldERpbWVuc2lvbnMoKSxuLmFmdGVyU2V0RGltZW5zaW9ucygpLG4uYmVmb3JlRGF0YUxpbWl0cygpLG4uZGV0ZXJtaW5lRGF0YUxpbWl0cygpLG4uYWZ0ZXJEYXRhTGltaXRzKCksbi5iZWZvcmVCdWlsZFRpY2tzKCksbi5idWlsZFRpY2tzKCksbi5hZnRlckJ1aWxkVGlja3MoKSxuLmJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbigpLG4uY29udmVydFRpY2tzVG9MYWJlbHMoKSxuLmFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uKCksbi5iZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb24oKSxuLmJlZm9yZUZpdCgpLG4uZml0KCksbi5hZnRlckZpdCgpLG4uYWZ0ZXJVcGRhdGUoKSxuLm1pblNpemV9LGFmdGVyVXBkYXRlOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyVXBkYXRlLFt0aGlzXSl9LGJlZm9yZVNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlU2V0RGltZW5zaW9ucyxbdGhpc10pfSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTB9LGFmdGVyU2V0RGltZW5zaW9uczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlclNldERpbWVuc2lvbnMsW3RoaXNdKX0sYmVmb3JlRGF0YUxpbWl0czpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVEYXRhTGltaXRzLFt0aGlzXSl9LGRldGVybWluZURhdGFMaW1pdHM6ZS5ub29wLGFmdGVyRGF0YUxpbWl0czpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckRhdGFMaW1pdHMsW3RoaXNdKX0sYmVmb3JlQnVpbGRUaWNrczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVCdWlsZFRpY2tzLFt0aGlzXSl9LGJ1aWxkVGlja3M6ZS5ub29wLGFmdGVyQnVpbGRUaWNrczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckJ1aWxkVGlja3MsW3RoaXNdKX0sYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZVRpY2tUb0xhYmVsQ29udmVyc2lvbixbdGhpc10pfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm9wdGlvbnMudGlja3M7dC50aWNrcz10LnRpY2tzLm1hcChlLnVzZXJDYWxsYmFja3x8ZS5jYWxsYmFjayl9LGFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyVGlja1RvTGFiZWxDb252ZXJzaW9uLFt0aGlzXSl9LGJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVDYWxjdWxhdGVUaWNrUm90YXRpb24sW3RoaXNdKX0sY2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEuY3R4LG49dC5kZWZhdWx0cy5nbG9iYWwsbz1hLm9wdGlvbnMudGlja3Mscj1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udFNpemUsbi5kZWZhdWx0Rm9udFNpemUpLGw9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRTdHlsZSxuLmRlZmF1bHRGb250U3R5bGUpLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmZvbnRGYW1pbHksbi5kZWZhdWx0Rm9udEZhbWlseSksZD1lLmZvbnRTdHJpbmcocixsLHMpO2kuZm9udD1kO3ZhciB1LGM9aS5tZWFzdXJlVGV4dChhLnRpY2tzWzBdKS53aWR0aCxoPWkubWVhc3VyZVRleHQoYS50aWNrc1thLnRpY2tzLmxlbmd0aC0xXSkud2lkdGg7aWYoYS5sYWJlbFJvdGF0aW9uPW8ubWluUm90YXRpb258fDAsYS5wYWRkaW5nUmlnaHQ9MCxhLnBhZGRpbmdMZWZ0PTAsYS5vcHRpb25zLmRpc3BsYXkmJmEuaXNIb3Jpem9udGFsKCkpe2EucGFkZGluZ1JpZ2h0PWgvMiszLGEucGFkZGluZ0xlZnQ9Yy8yKzMsYS5sb25nZXN0VGV4dENhY2hlfHwoYS5sb25nZXN0VGV4dENhY2hlPXt9KTtmb3IodmFyIGYsZyxwPWUubG9uZ2VzdFRleHQoaSxkLGEudGlja3MsYS5sb25nZXN0VGV4dENhY2hlKSxtPXAsYj1hLmdldFBpeGVsRm9yVGljaygxKS1hLmdldFBpeGVsRm9yVGljaygwKS02O20+YiYmYS5sYWJlbFJvdGF0aW9uPG8ubWF4Um90YXRpb247KXtpZihmPU1hdGguY29zKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpLGc9TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksdT1mKmMsdStyLzI+YS55TGFiZWxXaWR0aCYmKGEucGFkZGluZ0xlZnQ9dStyLzIpLGEucGFkZGluZ1JpZ2h0PXIvMixnKnA+YS5tYXhIZWlnaHQpe2EubGFiZWxSb3RhdGlvbi0tO2JyZWFrfWEubGFiZWxSb3RhdGlvbisrLG09ZipwfX1hLm1hcmdpbnMmJihhLnBhZGRpbmdMZWZ0PU1hdGgubWF4KGEucGFkZGluZ0xlZnQtYS5tYXJnaW5zLmxlZnQsMCksYS5wYWRkaW5nUmlnaHQ9TWF0aC5tYXgoYS5wYWRkaW5nUmlnaHQtYS5tYXJnaW5zLnJpZ2h0LDApKX0sYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJDYWxjdWxhdGVUaWNrUm90YXRpb24sW3RoaXNdKX0sYmVmb3JlRml0OmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUZpdCxbdGhpc10pfSxmaXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfSxuPWEub3B0aW9ucyxvPXQuZGVmYXVsdHMuZ2xvYmFsLHI9bi50aWNrcyxsPW4uc2NhbGVMYWJlbCxzPW4uZ3JpZExpbmVzLGQ9bi5kaXNwbGF5LHU9YS5pc0hvcml6b250YWwoKSxjPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSksaD1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udFN0eWxlLG8uZGVmYXVsdEZvbnRTdHlsZSksZj1lLmdldFZhbHVlT3JEZWZhdWx0KHIuZm9udEZhbWlseSxvLmRlZmF1bHRGb250RmFtaWx5KSxnPWUuZm9udFN0cmluZyhjLGgsZikscD1lLmdldFZhbHVlT3JEZWZhdWx0KGwuZm9udFNpemUsby5kZWZhdWx0Rm9udFNpemUpLG09bi5ncmlkTGluZXMudGlja01hcmtMZW5ndGg7aWYodT9pLndpZHRoPWEuaXNGdWxsV2lkdGgoKT9hLm1heFdpZHRoLWEubWFyZ2lucy5sZWZ0LWEubWFyZ2lucy5yaWdodDphLm1heFdpZHRoOmkud2lkdGg9ZCYmcy5kcmF3VGlja3M/bTowLHU/aS5oZWlnaHQ9ZCYmcy5kcmF3VGlja3M/bTowOmkuaGVpZ2h0PWEubWF4SGVpZ2h0LGwuZGlzcGxheSYmZCYmKHU/aS5oZWlnaHQrPTEuNSpwOmkud2lkdGgrPTEuNSpwKSxyLmRpc3BsYXkmJmQpe2EubG9uZ2VzdFRleHRDYWNoZXx8KGEubG9uZ2VzdFRleHRDYWNoZT17fSk7dmFyIGI9ZS5sb25nZXN0VGV4dChhLmN0eCxnLGEudGlja3MsYS5sb25nZXN0VGV4dENhY2hlKSx2PWUubnVtYmVyT2ZMYWJlbExpbmVzKGEudGlja3MpLHg9LjUqYztpZih1KXthLmxvbmdlc3RMYWJlbFdpZHRoPWI7dmFyIHk9TWF0aC5zaW4oZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSkqYS5sb25nZXN0TGFiZWxXaWR0aCtjKnYreCp2O2kuaGVpZ2h0PU1hdGgubWluKGEubWF4SGVpZ2h0LGkuaGVpZ2h0K3kpLGEuY3R4LmZvbnQ9Zzt2YXIgaz1hLmN0eC5tZWFzdXJlVGV4dChhLnRpY2tzWzBdKS53aWR0aCxTPWEuY3R4Lm1lYXN1cmVUZXh0KGEudGlja3NbYS50aWNrcy5sZW5ndGgtMV0pLndpZHRoLHc9TWF0aC5jb3MoZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksTT1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKTthLnBhZGRpbmdMZWZ0PTAhPT1hLmxhYmVsUm90YXRpb24/dyprKzM6ay8yKzMsYS5wYWRkaW5nUmlnaHQ9MCE9PWEubGFiZWxSb3RhdGlvbj9NKihjLzIpKzM6Uy8yKzN9ZWxzZXt2YXIgQz1hLm1heFdpZHRoLWkud2lkdGgsRD1yLm1pcnJvcjtEP2I9MDpiKz1hLm9wdGlvbnMudGlja3MucGFkZGluZyxDPmI/aS53aWR0aCs9YjppLndpZHRoPWEubWF4V2lkdGgsYS5wYWRkaW5nVG9wPWMvMixhLnBhZGRpbmdCb3R0b209Yy8yfX1hLm1hcmdpbnMmJihhLnBhZGRpbmdMZWZ0PU1hdGgubWF4KGEucGFkZGluZ0xlZnQtYS5tYXJnaW5zLmxlZnQsMCksYS5wYWRkaW5nVG9wPU1hdGgubWF4KGEucGFkZGluZ1RvcC1hLm1hcmdpbnMudG9wLDApLGEucGFkZGluZ1JpZ2h0PU1hdGgubWF4KGEucGFkZGluZ1JpZ2h0LWEubWFyZ2lucy5yaWdodCwwKSxhLnBhZGRpbmdCb3R0b209TWF0aC5tYXgoYS5wYWRkaW5nQm90dG9tLWEubWFyZ2lucy5ib3R0b20sMCkpLGEud2lkdGg9aS53aWR0aCxhLmhlaWdodD1pLmhlaWdodH0sYWZ0ZXJGaXQ6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJGaXQsW3RoaXNdKX0saXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7cmV0dXJuXCJ0b3BcIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbnx8XCJib3R0b21cIj09PXRoaXMub3B0aW9ucy5wb3NpdGlvbn0saXNGdWxsV2lkdGg6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmZ1bGxXaWR0aH0sZ2V0UmlnaHRWYWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09PXR8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P05hTjpcIm51bWJlclwiIT10eXBlb2YgdHx8aXNGaW5pdGUodCk/XCJvYmplY3RcIj09dHlwZW9mIHQ/dCBpbnN0YW5jZW9mIERhdGV8fHQuaXNWYWxpZD90OnRoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmlzSG9yaXpvbnRhbCgpP3QueDp0LnkpOnQ6TmFOfSxnZXRMYWJlbEZvckluZGV4OmUubm9vcCxnZXRQaXhlbEZvclZhbHVlOmUubm9vcCxnZXRWYWx1ZUZvclBpeGVsOmUubm9vcCxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO2lmKGEuaXNIb3Jpem9udGFsKCkpe3ZhciBpPWEud2lkdGgtKGEucGFkZGluZ0xlZnQrYS5wYWRkaW5nUmlnaHQpLG49aS9NYXRoLm1heChhLnRpY2tzLmxlbmd0aC0oYS5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKSxvPW4qdCthLnBhZGRpbmdMZWZ0O2UmJihvKz1uLzIpO3ZhciByPWEubGVmdCtNYXRoLnJvdW5kKG8pO3JldHVybiByKz1hLmlzRnVsbFdpZHRoKCk/YS5tYXJnaW5zLmxlZnQ6MH12YXIgbD1hLmhlaWdodC0oYS5wYWRkaW5nVG9wK2EucGFkZGluZ0JvdHRvbSk7cmV0dXJuIGEudG9wK3QqKGwvKGEudGlja3MubGVuZ3RoLTEpKX0sZ2V0UGl4ZWxGb3JEZWNpbWFsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7aWYoZS5pc0hvcml6b250YWwoKSl7dmFyIGE9ZS53aWR0aC0oZS5wYWRkaW5nTGVmdCtlLnBhZGRpbmdSaWdodCksaT1hKnQrZS5wYWRkaW5nTGVmdCxuPWUubGVmdCtNYXRoLnJvdW5kKGkpO3JldHVybiBuKz1lLmlzRnVsbFdpZHRoKCk/ZS5tYXJnaW5zLmxlZnQ6MH1yZXR1cm4gZS50b3ArdCplLmhlaWdodH0sZ2V0QmFzZVBpeGVsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQubWluLGE9dC5tYXg7cmV0dXJuIHQuZ2V0UGl4ZWxGb3JWYWx1ZSh0LmJlZ2luQXRaZXJvPzA6MD5lJiYwPmE/YTplPjAmJmE+MD9lOjApfSxkcmF3OmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXMsbj1pLm9wdGlvbnM7aWYobi5kaXNwbGF5KXt2YXIgbyxyLGw9aS5jdHgscz10LmRlZmF1bHRzLmdsb2JhbCxkPW4udGlja3MsdT1uLmdyaWRMaW5lcyxjPW4uc2NhbGVMYWJlbCxoPTAhPT1pLmxhYmVsUm90YXRpb24sZj1kLmF1dG9Ta2lwLGc9aS5pc0hvcml6b250YWwoKTtkLm1heFRpY2tzTGltaXQmJihyPWQubWF4VGlja3NMaW1pdCk7dmFyIHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRDb2xvcixzLmRlZmF1bHRGb250Q29sb3IpLG09ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxiPWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSx2PWUuZ2V0VmFsdWVPckRlZmF1bHQoZC5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLHg9ZS5mb250U3RyaW5nKG0sYix2KSx5PXUudGlja01hcmtMZW5ndGgsaz1lLmdldFZhbHVlT3JEZWZhdWx0KHUuYm9yZGVyRGFzaCxzLmJvcmRlckRhc2gpLFM9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh1LmJvcmRlckRhc2hPZmZzZXQscy5ib3JkZXJEYXNoT2Zmc2V0KSx3PWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250Q29sb3Iscy5kZWZhdWx0Rm9udENvbG9yKSxNPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksQz1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksRD1lLmdldFZhbHVlT3JEZWZhdWx0KGMuZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSxJPWUuZm9udFN0cmluZyhNLEMsRCksQT1lLnRvUmFkaWFucyhpLmxhYmVsUm90YXRpb24pLFQ9TWF0aC5jb3MoQSksUD1pLmxvbmdlc3RMYWJlbFdpZHRoKlQ7bC5maWxsU3R5bGU9cDt2YXIgRj1bXTtpZihnKXtpZihvPSExLGgmJihQLz0yKSwoUCtkLmF1dG9Ta2lwUGFkZGluZykqaS50aWNrcy5sZW5ndGg+aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCkmJihvPTErTWF0aC5mbG9vcigoUCtkLmF1dG9Ta2lwUGFkZGluZykqaS50aWNrcy5sZW5ndGgvKGkud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpKSkpLHImJmkudGlja3MubGVuZ3RoPnIpZm9yKDshb3x8aS50aWNrcy5sZW5ndGgvKG98fDEpPnI7KW98fChvPTEpLG8rPTE7Znx8KG89ITEpfXZhciBfPVwicmlnaHRcIj09PW4ucG9zaXRpb24/aS5sZWZ0OmkucmlnaHQteSxSPVwicmlnaHRcIj09PW4ucG9zaXRpb24/aS5sZWZ0K3k6aS5yaWdodCxWPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kudG9wOmkuYm90dG9tLXksTD1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLnRvcCt5OmkuYm90dG9tO2lmKGUuZWFjaChpLnRpY2tzLGZ1bmN0aW9uKHQscil7aWYodm9pZCAwIT09dCYmbnVsbCE9PXQpe3ZhciBsPWkudGlja3MubGVuZ3RoPT09cisxLHM9bz4xJiZyJW8+MHx8ciVvPT09MCYmcitvPj1pLnRpY2tzLmxlbmd0aDtpZigoIXN8fGwpJiZ2b2lkIDAhPT10JiZudWxsIT09dCl7dmFyIGMsZjtyPT09KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBpLnplcm9MaW5lSW5kZXg/aS56ZXJvTGluZUluZGV4OjApPyhjPXUuemVyb0xpbmVXaWR0aCxmPXUuemVyb0xpbmVDb2xvcik6KGM9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5saW5lV2lkdGgsciksZj1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmNvbG9yLHIpKTt2YXIgcCxtLGIsdix4LHcsTSxDLEQsSSxUPVwibWlkZGxlXCIsUD1cIm1pZGRsZVwiO2lmKGcpe2h8fChQPVwidG9wXCI9PT1uLnBvc2l0aW9uP1wiYm90dG9tXCI6XCJ0b3BcIiksVD1oP1wicmlnaHRcIjpcImNlbnRlclwiO3ZhciBPPWkuZ2V0UGl4ZWxGb3JUaWNrKHIpK2UuYWxpYXNQaXhlbChjKTtEPWkuZ2V0UGl4ZWxGb3JUaWNrKHIsdS5vZmZzZXRHcmlkTGluZXMpK2QubGFiZWxPZmZzZXQsST1oP2kudG9wKzEyOlwidG9wXCI9PT1uLnBvc2l0aW9uP2kuYm90dG9tLXk6aS50b3AreSxwPWI9eD1NPU8sbT1WLHY9TCx3PWEudG9wLEM9YS5ib3R0b219ZWxzZXtcImxlZnRcIj09PW4ucG9zaXRpb24/ZC5taXJyb3I/KEQ9aS5yaWdodCtkLnBhZGRpbmcsVD1cImxlZnRcIik6KEQ9aS5yaWdodC1kLnBhZGRpbmcsVD1cInJpZ2h0XCIpOmQubWlycm9yPyhEPWkubGVmdC1kLnBhZGRpbmcsVD1cInJpZ2h0XCIpOihEPWkubGVmdCtkLnBhZGRpbmcsVD1cImxlZnRcIik7dmFyIEI9aS5nZXRQaXhlbEZvclRpY2socik7Qis9ZS5hbGlhc1BpeGVsKGMpLEk9aS5nZXRQaXhlbEZvclRpY2socix1Lm9mZnNldEdyaWRMaW5lcykscD1fLGI9Uix4PWEubGVmdCxNPWEucmlnaHQsbT12PXc9Qz1CfUYucHVzaCh7dHgxOnAsdHkxOm0sdHgyOmIsdHkyOnYseDE6eCx5MTp3LHgyOk0seTI6QyxsYWJlbFg6RCxsYWJlbFk6SSxnbFdpZHRoOmMsZ2xDb2xvcjpmLGdsQm9yZGVyRGFzaDprLGdsQm9yZGVyRGFzaE9mZnNldDpTLHJvdGF0aW9uOi0xKkEsbGFiZWw6dCx0ZXh0QmFzZWxpbmU6UCx0ZXh0QWxpZ246VH0pfX19KSxlLmVhY2goRixmdW5jdGlvbih0KXtpZih1LmRpc3BsYXkmJihsLnNhdmUoKSxsLmxpbmVXaWR0aD10LmdsV2lkdGgsbC5zdHJva2VTdHlsZT10LmdsQ29sb3IsbC5zZXRMaW5lRGFzaCYmKGwuc2V0TGluZURhc2godC5nbEJvcmRlckRhc2gpLGwubGluZURhc2hPZmZzZXQ9dC5nbEJvcmRlckRhc2hPZmZzZXQpLGwuYmVnaW5QYXRoKCksdS5kcmF3VGlja3MmJihsLm1vdmVUbyh0LnR4MSx0LnR5MSksbC5saW5lVG8odC50eDIsdC50eTIpKSx1LmRyYXdPbkNoYXJ0QXJlYSYmKGwubW92ZVRvKHQueDEsdC55MSksbC5saW5lVG8odC54Mix0LnkyKSksbC5zdHJva2UoKSxsLnJlc3RvcmUoKSksZC5kaXNwbGF5KXtsLnNhdmUoKSxsLnRyYW5zbGF0ZSh0LmxhYmVsWCx0LmxhYmVsWSksbC5yb3RhdGUodC5yb3RhdGlvbiksbC5mb250PXgsbC50ZXh0QmFzZWxpbmU9dC50ZXh0QmFzZWxpbmUsbC50ZXh0QWxpZ249dC50ZXh0QWxpZ247dmFyIGE9dC5sYWJlbDtpZihlLmlzQXJyYXkoYSkpZm9yKHZhciBpPTAsbj0tKGEubGVuZ3RoLTEpKm0qLjc1O2k8YS5sZW5ndGg7KytpKWwuZmlsbFRleHQoXCJcIithW2ldLDAsbiksbis9MS41Km07ZWxzZSBsLmZpbGxUZXh0KGEsMCwwKTtsLnJlc3RvcmUoKX19KSxjLmRpc3BsYXkpe3ZhciBPLEIsVz0wO2lmKGcpTz1pLmxlZnQrKGkucmlnaHQtaS5sZWZ0KS8yLEI9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS5ib3R0b20tTS8yOmkudG9wK00vMjtlbHNle3ZhciB6PVwibGVmdFwiPT09bi5wb3NpdGlvbjtPPXo/aS5sZWZ0K00vMjppLnJpZ2h0LU0vMixCPWkudG9wKyhpLmJvdHRvbS1pLnRvcCkvMixXPXo/LS41Kk1hdGguUEk6LjUqTWF0aC5QSX1sLnNhdmUoKSxsLnRyYW5zbGF0ZShPLEIpLGwucm90YXRlKFcpLGwudGV4dEFsaWduPVwiY2VudGVyXCIsbC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixsLmZpbGxTdHlsZT13LGwuZm9udD1JLGwuZmlsbFRleHQoYy5sYWJlbFN0cmluZywwLDApLGwucmVzdG9yZSgpfWlmKHUuZHJhd0JvcmRlcil7bC5saW5lV2lkdGg9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5saW5lV2lkdGgsMCksbC5zdHJva2VTdHlsZT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmNvbG9yLDApO3ZhciBOPWkubGVmdCxFPWkucmlnaHQsSD1pLnRvcCxVPWkuYm90dG9tLGo9ZS5hbGlhc1BpeGVsKGwubGluZVdpZHRoKTtnPyhIPVU9XCJ0b3BcIj09PW4ucG9zaXRpb24/aS5ib3R0b206aS50b3AsSCs9aixVKz1qKTooTj1FPVwibGVmdFwiPT09bi5wb3NpdGlvbj9pLnJpZ2h0OmkubGVmdCxOKz1qLEUrPWopLGwuYmVnaW5QYXRoKCksbC5tb3ZlVG8oTixIKSxsLmxpbmVUbyhFLFUpLGwuc3Ryb2tlKCl9fX19KX19LHt9XSwzMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5zY2FsZVNlcnZpY2U9e2NvbnN0cnVjdG9yczp7fSxkZWZhdWx0czp7fSxyZWdpc3RlclNjYWxlVHlwZTpmdW5jdGlvbih0LGEsaSl7dGhpcy5jb25zdHJ1Y3RvcnNbdF09YSx0aGlzLmRlZmF1bHRzW3RdPWUuY2xvbmUoaSl9LGdldFNjYWxlQ29uc3RydWN0b3I6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuY29uc3RydWN0b3JzLmhhc093blByb3BlcnR5KHQpP3RoaXMuY29uc3RydWN0b3JzW3RdOnZvaWQgMH0sZ2V0U2NhbGVEZWZhdWx0czpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5kZWZhdWx0cy5oYXNPd25Qcm9wZXJ0eShhKT9lLnNjYWxlTWVyZ2UodC5kZWZhdWx0cy5zY2FsZSx0aGlzLmRlZmF1bHRzW2FdKTp7fX0sdXBkYXRlU2NhbGVEZWZhdWx0czpmdW5jdGlvbih0LGEpe3ZhciBpPXRoaXMuZGVmYXVsdHM7aS5oYXNPd25Qcm9wZXJ0eSh0KSYmKGlbdF09ZS5leHRlbmQoaVt0XSxhKSl9LGFkZFNjYWxlc1RvTGF5b3V0OmZ1bmN0aW9uKGEpe2UuZWFjaChhLnNjYWxlcyxmdW5jdGlvbihlKXt0LmxheW91dFNlcnZpY2UuYWRkQm94KGEsZSl9KX19fX0se31dLDM0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LlRpY2tzPXtnZW5lcmF0b3JzOntsaW5lYXI6ZnVuY3Rpb24odCxhKXt2YXIgaSxuPVtdO2lmKHQuc3RlcFNpemUmJnQuc3RlcFNpemU+MClpPXQuc3RlcFNpemU7ZWxzZXt2YXIgbz1lLm5pY2VOdW0oYS5tYXgtYS5taW4sITEpO2k9ZS5uaWNlTnVtKG8vKHQubWF4VGlja3MtMSksITApfXZhciByPU1hdGguZmxvb3IoYS5taW4vaSkqaSxsPU1hdGguY2VpbChhLm1heC9pKSppO2lmKHQubWluJiZ0Lm1heCYmdC5zdGVwU2l6ZSl7dmFyIHM9KHQubWF4LXQubWluKSV0LnN0ZXBTaXplPT09MDtzJiYocj10Lm1pbixsPXQubWF4KX12YXIgZD0obC1yKS9pO2Q9ZS5hbG1vc3RFcXVhbHMoZCxNYXRoLnJvdW5kKGQpLGkvMWUzKT9NYXRoLnJvdW5kKGQpOk1hdGguY2VpbChkKSxuLnB1c2godm9pZCAwIT09dC5taW4/dC5taW46cik7Zm9yKHZhciB1PTE7ZD51OysrdSluLnB1c2gocit1KmkpO3JldHVybiBuLnB1c2godm9pZCAwIT09dC5tYXg/dC5tYXg6bCksbn0sbG9nYXJpdGhtaWM6ZnVuY3Rpb24odCxhKXtmb3IodmFyIGk9W10sbj1lLmdldFZhbHVlT3JEZWZhdWx0LG89bih0Lm1pbixNYXRoLnBvdygxMCxNYXRoLmZsb29yKGUubG9nMTAoYS5taW4pKSkpO288YS5tYXg7KXtpLnB1c2gobyk7dmFyIHIsbDswPT09bz8ocj1NYXRoLmZsb29yKGUubG9nMTAoYS5taW5Ob3RaZXJvKSksbD1NYXRoLnJvdW5kKGEubWluTm90WmVyby9NYXRoLnBvdygxMCxyKSkpOihyPU1hdGguZmxvb3IoZS5sb2cxMChvKSksbD1NYXRoLmZsb29yKG8vTWF0aC5wb3coMTAscikpKzEpLDEwPT09bCYmKGw9MSwrK3IpLG89bCpNYXRoLnBvdygxMCxyKX12YXIgcz1uKHQubWF4LG8pO3JldHVybiBpLnB1c2gocyksaX19LGZvcm1hdHRlcnM6e3ZhbHVlczpmdW5jdGlvbih0KXtyZXR1cm4gZS5pc0FycmF5KHQpP3Q6XCJcIit0fSxsaW5lYXI6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPWkubGVuZ3RoPjM/aVsyXS1pWzFdOmlbMV0taVswXTtNYXRoLmFicyhuKT4xJiZ0IT09TWF0aC5mbG9vcih0KSYmKG49dC1NYXRoLmZsb29yKHQpKTt2YXIgbz1lLmxvZzEwKE1hdGguYWJzKG4pKSxyPVwiXCI7aWYoMCE9PXQpe3ZhciBsPS0xKk1hdGguZmxvb3Iobyk7bD1NYXRoLm1heChNYXRoLm1pbihsLDIwKSwwKSxyPXQudG9GaXhlZChsKX1lbHNlIHI9XCIwXCI7cmV0dXJuIHJ9LGxvZ2FyaXRobWljOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10L01hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMCh0KSkpO3JldHVybiAwPT09dD9cIjBcIjoxPT09bnx8Mj09PW58fDU9PT1ufHwwPT09YXx8YT09PWkubGVuZ3RoLTE/dC50b0V4cG9uZW50aWFsKCk6XCJcIn19fX19LHt9XSwzNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5nbG9iYWwudGl0bGU9e2Rpc3BsYXk6ITEscG9zaXRpb246XCJ0b3BcIixmdWxsV2lkdGg6ITAsZm9udFN0eWxlOlwiYm9sZFwiLHBhZGRpbmc6MTAsdGV4dDpcIlwifTt2YXIgYT1lLm5vb3A7dC5UaXRsZT10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXM7ZS5leHRlbmQoaSxhKSxpLm9wdGlvbnM9ZS5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbC50aXRsZSxhLm9wdGlvbnMpLGkubGVnZW5kSGl0Qm94ZXM9W119LGJlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMuY2hhcnQub3B0aW9uczthJiZhLnRpdGxlJiYodGhpcy5vcHRpb25zPWUuY29uZmlnTWVyZ2UodC5kZWZhdWx0cy5nbG9iYWwudGl0bGUsYS50aXRsZSkpfSx1cGRhdGU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXM7cmV0dXJuIGkuYmVmb3JlVXBkYXRlKCksaS5tYXhXaWR0aD10LGkubWF4SGVpZ2h0PWUsaS5tYXJnaW5zPWEsaS5iZWZvcmVTZXREaW1lbnNpb25zKCksaS5zZXREaW1lbnNpb25zKCksaS5hZnRlclNldERpbWVuc2lvbnMoKSxpLmJlZm9yZUJ1aWxkTGFiZWxzKCksaS5idWlsZExhYmVscygpLGkuYWZ0ZXJCdWlsZExhYmVscygpLGkuYmVmb3JlRml0KCksaS5maXQoKSxpLmFmdGVyRml0KCksaS5hZnRlclVwZGF0ZSgpLGkubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6YSxiZWZvcmVTZXREaW1lbnNpb25zOmEsc2V0RGltZW5zaW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5pc0hvcml6b250YWwoKT8odC53aWR0aD10Lm1heFdpZHRoLHQubGVmdD0wLHQucmlnaHQ9dC53aWR0aCk6KHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQudG9wPTAsdC5ib3R0b209dC5oZWlnaHQpLHQucGFkZGluZ0xlZnQ9MCx0LnBhZGRpbmdUb3A9MCx0LnBhZGRpbmdSaWdodD0wLHQucGFkZGluZ0JvdHRvbT0wLHQubWluU2l6ZT17d2lkdGg6MCxoZWlnaHQ6MH19LGFmdGVyU2V0RGltZW5zaW9uczphLGJlZm9yZUJ1aWxkTGFiZWxzOmEsYnVpbGRMYWJlbHM6YSxhZnRlckJ1aWxkTGFiZWxzOmEsYmVmb3JlRml0OmEsZml0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWUuZ2V0VmFsdWVPckRlZmF1bHQsbj1hLm9wdGlvbnMsbz10LmRlZmF1bHRzLmdsb2JhbCxyPW4uZGlzcGxheSxsPWkobi5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSkscz1hLm1pblNpemU7YS5pc0hvcml6b250YWwoKT8ocy53aWR0aD1hLm1heFdpZHRoLHMuaGVpZ2h0PXI/bCsyKm4ucGFkZGluZzowKToocy53aWR0aD1yP2wrMipuLnBhZGRpbmc6MCxzLmhlaWdodD1hLm1heEhlaWdodCksYS53aWR0aD1zLndpZHRoLGEuaGVpZ2h0PXMuaGVpZ2h0fSxhZnRlckZpdDphLGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5wb3NpdGlvbjtyZXR1cm5cInRvcFwiPT09dHx8XCJib3R0b21cIj09PXR9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5jdHgsbj1lLmdldFZhbHVlT3JEZWZhdWx0LG89YS5vcHRpb25zLHI9dC5kZWZhdWx0cy5nbG9iYWw7aWYoby5kaXNwbGF5KXt2YXIgbCxzLGQsdT1uKG8uZm9udFNpemUsci5kZWZhdWx0Rm9udFNpemUpLGM9bihvLmZvbnRTdHlsZSxyLmRlZmF1bHRGb250U3R5bGUpLGg9bihvLmZvbnRGYW1pbHksci5kZWZhdWx0Rm9udEZhbWlseSksZj1lLmZvbnRTdHJpbmcodSxjLGgpLGc9MCxwPWEudG9wLG09YS5sZWZ0LGI9YS5ib3R0b20sdj1hLnJpZ2h0O2kuZmlsbFN0eWxlPW4oby5mb250Q29sb3Isci5kZWZhdWx0Rm9udENvbG9yKSxpLmZvbnQ9ZixhLmlzSG9yaXpvbnRhbCgpPyhsPW0rKHYtbSkvMixzPXArKGItcCkvMixkPXYtbSk6KGw9XCJsZWZ0XCI9PT1vLnBvc2l0aW9uP20rdS8yOnYtdS8yLHM9cCsoYi1wKS8yLGQ9Yi1wLGc9TWF0aC5QSSooXCJsZWZ0XCI9PT1vLnBvc2l0aW9uPy0uNTouNSkpLGkuc2F2ZSgpLGkudHJhbnNsYXRlKGwscyksaS5yb3RhdGUoZyksaS50ZXh0QWxpZ249XCJjZW50ZXJcIixpLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGkuZmlsbFRleHQoby50ZXh0LDAsMCxkKSxpLnJlc3RvcmUoKX19fSksdC5wbHVnaW5zLnJlZ2lzdGVyKHtiZWZvcmVJbml0OmZ1bmN0aW9uKGUpe3ZhciBhPWUub3B0aW9ucyxpPWEudGl0bGU7aSYmKGUudGl0bGVCbG9jaz1uZXcgdC5UaXRsZSh7Y3R4OmUuY2hhcnQuY3R4LG9wdGlvbnM6aSxjaGFydDplfSksdC5sYXlvdXRTZXJ2aWNlLmFkZEJveChlLGUudGl0bGVCbG9jaykpfX0pfX0se31dLDM2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYT1zLmNvbG9yKHQpO3JldHVybiBhLmFscGhhKGUqYS5hbHBoYSgpKS5yZ2JhU3RyaW5nKCl9ZnVuY3Rpb24gYSh0LGUpe3JldHVybiBlJiYocy5pc0FycmF5KGUpP0FycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHQsZSk6dC5wdXNoKGUpKSx0fWZ1bmN0aW9uIGkodCl7dmFyIGU9dC5feFNjYWxlLGE9dC5feVNjYWxlfHx0Ll9zY2FsZSxpPXQuX2luZGV4LG49dC5fZGF0YXNldEluZGV4O3JldHVybnt4TGFiZWw6ZT9lLmdldExhYmVsRm9ySW5kZXgoaSxuKTpcIlwiLHlMYWJlbDphP2EuZ2V0TGFiZWxGb3JJbmRleChpLG4pOlwiXCIsaW5kZXg6aSxkYXRhc2V0SW5kZXg6bix4OnQuX21vZGVsLngseTp0Ll9tb2RlbC55fX1mdW5jdGlvbiBuKGUpe3ZhciBhPXQuZGVmYXVsdHMuZ2xvYmFsLGk9cy5nZXRWYWx1ZU9yRGVmYXVsdDtyZXR1cm57eFBhZGRpbmc6ZS54UGFkZGluZyx5UGFkZGluZzplLnlQYWRkaW5nLHhBbGlnbjplLnhBbGlnbix5QWxpZ246ZS55QWxpZ24sYm9keUZvbnRDb2xvcjplLmJvZHlGb250Q29sb3IsX2JvZHlGb250RmFtaWx5OmkoZS5ib2R5Rm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfYm9keUZvbnRTdHlsZTppKGUuYm9keUZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLF9ib2R5QWxpZ246ZS5ib2R5QWxpZ24sYm9keUZvbnRTaXplOmkoZS5ib2R5Rm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLGJvZHlTcGFjaW5nOmUuYm9keVNwYWNpbmcsdGl0bGVGb250Q29sb3I6ZS50aXRsZUZvbnRDb2xvcixfdGl0bGVGb250RmFtaWx5OmkoZS50aXRsZUZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX3RpdGxlRm9udFN0eWxlOmkoZS50aXRsZUZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLHRpdGxlRm9udFNpemU6aShlLnRpdGxlRm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLF90aXRsZUFsaWduOmUudGl0bGVBbGlnbix0aXRsZVNwYWNpbmc6ZS50aXRsZVNwYWNpbmcsdGl0bGVNYXJnaW5Cb3R0b206ZS50aXRsZU1hcmdpbkJvdHRvbSxmb290ZXJGb250Q29sb3I6ZS5mb290ZXJGb250Q29sb3IsX2Zvb3RlckZvbnRGYW1pbHk6aShlLmZvb3RlckZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksX2Zvb3RlckZvbnRTdHlsZTppKGUuZm9vdGVyRm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksZm9vdGVyRm9udFNpemU6aShlLmZvb3RlckZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxfZm9vdGVyQWxpZ246ZS5mb290ZXJBbGlnbixmb290ZXJTcGFjaW5nOmUuZm9vdGVyU3BhY2luZyxmb290ZXJNYXJnaW5Ub3A6ZS5mb290ZXJNYXJnaW5Ub3AsY2FyZXRTaXplOmUuY2FyZXRTaXplLGNvcm5lclJhZGl1czplLmNvcm5lclJhZGl1cyxiYWNrZ3JvdW5kQ29sb3I6ZS5iYWNrZ3JvdW5kQ29sb3Isb3BhY2l0eTowLGxlZ2VuZENvbG9yQmFja2dyb3VuZDplLm11bHRpS2V5QmFja2dyb3VuZCxkaXNwbGF5Q29sb3JzOmUuZGlzcGxheUNvbG9yc319ZnVuY3Rpb24gbyh0LGUpe3ZhciBhPXQuX2NoYXJ0LmN0eCxpPTIqZS55UGFkZGluZyxuPTAsbz1lLmJvZHkscj1vLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiB0K2UuYmVmb3JlLmxlbmd0aCtlLmxpbmVzLmxlbmd0aCtlLmFmdGVyLmxlbmd0aH0sMCk7cis9ZS5iZWZvcmVCb2R5Lmxlbmd0aCtlLmFmdGVyQm9keS5sZW5ndGg7dmFyIGw9ZS50aXRsZS5sZW5ndGgsZD1lLmZvb3Rlci5sZW5ndGgsdT1lLnRpdGxlRm9udFNpemUsYz1lLmJvZHlGb250U2l6ZSxoPWUuZm9vdGVyRm9udFNpemU7aSs9bCp1LGkrPWw/KGwtMSkqZS50aXRsZVNwYWNpbmc6MCxpKz1sP2UudGl0bGVNYXJnaW5Cb3R0b206MCxpKz1yKmMsaSs9cj8oci0xKSplLmJvZHlTcGFjaW5nOjAsaSs9ZD9lLmZvb3Rlck1hcmdpblRvcDowLGkrPWQqaCxpKz1kPyhkLTEpKmUuZm9vdGVyU3BhY2luZzowO3ZhciBmPTAsZz1mdW5jdGlvbih0KXtuPU1hdGgubWF4KG4sYS5tZWFzdXJlVGV4dCh0KS53aWR0aCtmKX07cmV0dXJuIGEuZm9udD1zLmZvbnRTdHJpbmcodSxlLl90aXRsZUZvbnRTdHlsZSxlLl90aXRsZUZvbnRGYW1pbHkpLHMuZWFjaChlLnRpdGxlLGcpLGEuZm9udD1zLmZvbnRTdHJpbmcoYyxlLl9ib2R5Rm9udFN0eWxlLGUuX2JvZHlGb250RmFtaWx5KSxzLmVhY2goZS5iZWZvcmVCb2R5LmNvbmNhdChlLmFmdGVyQm9keSksZyksZj1lLmRpc3BsYXlDb2xvcnM/YysyOjAscy5lYWNoKG8sZnVuY3Rpb24odCl7cy5lYWNoKHQuYmVmb3JlLGcpLHMuZWFjaCh0LmxpbmVzLGcpLHMuZWFjaCh0LmFmdGVyLGcpfSksZj0wLGEuZm9udD1zLmZvbnRTdHJpbmcoaCxlLl9mb290ZXJGb250U3R5bGUsZS5fZm9vdGVyRm9udEZhbWlseSkscy5lYWNoKGUuZm9vdGVyLGcpLG4rPTIqZS54UGFkZGluZyx7d2lkdGg6bixoZWlnaHQ6aX19ZnVuY3Rpb24gcih0LGUpe3ZhciBhPXQuX21vZGVsLGk9dC5fY2hhcnQsbj10Ll9jaGFydEluc3RhbmNlLmNoYXJ0QXJlYSxvPVwiY2VudGVyXCIscj1cImNlbnRlclwiO2EueTxlLmhlaWdodD9yPVwidG9wXCI6YS55PmkuaGVpZ2h0LWUuaGVpZ2h0JiYocj1cImJvdHRvbVwiKTt2YXIgbCxzLGQsdSxjLGg9KG4ubGVmdCtuLnJpZ2h0KS8yLGY9KG4udG9wK24uYm90dG9tKS8yO1wiY2VudGVyXCI9PT1yPyhsPWZ1bmN0aW9uKHQpe3JldHVybiBoPj10fSxzPWZ1bmN0aW9uKHQpe3JldHVybiB0Pmh9KToobD1mdW5jdGlvbih0KXtyZXR1cm4gdDw9ZS53aWR0aC8yfSxzPWZ1bmN0aW9uKHQpe3JldHVybiB0Pj1pLndpZHRoLWUud2lkdGgvMn0pLGQ9ZnVuY3Rpb24odCl7cmV0dXJuIHQrZS53aWR0aD5pLndpZHRofSx1PWZ1bmN0aW9uKHQpe3JldHVybiB0LWUud2lkdGg8MH0sYz1mdW5jdGlvbih0KXtyZXR1cm4gZj49dD9cInRvcFwiOlwiYm90dG9tXCJ9LGwoYS54KT8obz1cImxlZnRcIixkKGEueCkmJihvPVwiY2VudGVyXCIscj1jKGEueSkpKTpzKGEueCkmJihvPVwicmlnaHRcIix1KGEueCkmJihvPVwiY2VudGVyXCIscj1jKGEueSkpKTt2YXIgZz10Ll9vcHRpb25zO3JldHVybnt4QWxpZ246Zy54QWxpZ24/Zy54QWxpZ246byx5QWxpZ246Zy55QWxpZ24/Zy55QWxpZ246cn19ZnVuY3Rpb24gbCh0LGUsYSl7dmFyIGk9dC54LG49dC55LG89dC5jYXJldFNpemUscj10LmNhcmV0UGFkZGluZyxsPXQuY29ybmVyUmFkaXVzLHM9YS54QWxpZ24sZD1hLnlBbGlnbix1PW8rcixjPWwrcjtyZXR1cm5cInJpZ2h0XCI9PT1zP2ktPWUud2lkdGg6XCJjZW50ZXJcIj09PXMmJihpLT1lLndpZHRoLzIpLFwidG9wXCI9PT1kP24rPXU6bi09XCJib3R0b21cIj09PWQ/ZS5oZWlnaHQrdTplLmhlaWdodC8yLFwiY2VudGVyXCI9PT1kP1wibGVmdFwiPT09cz9pKz11OlwicmlnaHRcIj09PXMmJihpLT11KTpcImxlZnRcIj09PXM/aS09YzpcInJpZ2h0XCI9PT1zJiYoaSs9Yykse3g6aSx5Om59fXZhciBzPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC50b29sdGlwcz17ZW5hYmxlZDohMCxjdXN0b206bnVsbCxtb2RlOlwibmVhcmVzdFwiLHBvc2l0aW9uOlwiYXZlcmFnZVwiLGludGVyc2VjdDohMCxiYWNrZ3JvdW5kQ29sb3I6XCJyZ2JhKDAsMCwwLDAuOClcIix0aXRsZUZvbnRTdHlsZTpcImJvbGRcIix0aXRsZVNwYWNpbmc6Mix0aXRsZU1hcmdpbkJvdHRvbTo2LHRpdGxlRm9udENvbG9yOlwiI2ZmZlwiLHRpdGxlQWxpZ246XCJsZWZ0XCIsYm9keVNwYWNpbmc6Mixib2R5Rm9udENvbG9yOlwiI2ZmZlwiLGJvZHlBbGlnbjpcImxlZnRcIixmb290ZXJGb250U3R5bGU6XCJib2xkXCIsZm9vdGVyU3BhY2luZzoyLGZvb3Rlck1hcmdpblRvcDo2LGZvb3RlckZvbnRDb2xvcjpcIiNmZmZcIixmb290ZXJBbGlnbjpcImxlZnRcIix5UGFkZGluZzo2LHhQYWRkaW5nOjYsY2FyZXRTaXplOjUsY29ybmVyUmFkaXVzOjYsbXVsdGlLZXlCYWNrZ3JvdW5kOlwiI2ZmZlwiLGRpc3BsYXlDb2xvcnM6ITAsY2FsbGJhY2tzOntiZWZvcmVUaXRsZTpzLm5vb3AsdGl0bGU6ZnVuY3Rpb24odCxlKXt2YXIgYT1cIlwiLGk9ZS5sYWJlbHMsbj1pP2kubGVuZ3RoOjA7aWYodC5sZW5ndGg+MCl7dmFyIG89dFswXTtvLnhMYWJlbD9hPW8ueExhYmVsOm4+MCYmby5pbmRleDxuJiYoYT1pW28uaW5kZXhdKX1yZXR1cm4gYX0sYWZ0ZXJUaXRsZTpzLm5vb3AsYmVmb3JlQm9keTpzLm5vb3AsYmVmb3JlTGFiZWw6cy5ub29wLGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCI7cmV0dXJuIGErXCI6IFwiK3QueUxhYmVsfSxsYWJlbENvbG9yOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5nZXREYXRhc2V0TWV0YSh0LmRhdGFzZXRJbmRleCksaT1hLmRhdGFbdC5pbmRleF0sbj1pLl92aWV3O3JldHVybntib3JkZXJDb2xvcjpuLmJvcmRlckNvbG9yLGJhY2tncm91bmRDb2xvcjpuLmJhY2tncm91bmRDb2xvcn19LGFmdGVyTGFiZWw6cy5ub29wLGFmdGVyQm9keTpzLm5vb3AsYmVmb3JlRm9vdGVyOnMubm9vcCxmb290ZXI6cy5ub29wLGFmdGVyRm9vdGVyOnMubm9vcH19LHQuVG9vbHRpcD10LkVsZW1lbnQuZXh0ZW5kKHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dGhpcy5fbW9kZWw9bih0aGlzLl9vcHRpb25zKX0sZ2V0VGl0bGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5fb3B0aW9ucyxpPWUuY2FsbGJhY2tzLG49aS5iZWZvcmVUaXRsZS5hcHBseSh0LGFyZ3VtZW50cyksbz1pLnRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxyPWkuYWZ0ZXJUaXRsZS5hcHBseSh0LGFyZ3VtZW50cyksbD1bXTtyZXR1cm4gbD1hKGwsbiksbD1hKGwsbyksbD1hKGwscil9LGdldEJlZm9yZUJvZHk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9vcHRpb25zLmNhbGxiYWNrcy5iZWZvcmVCb2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcy5pc0FycmF5KHQpP3Q6dm9pZCAwIT09dD9bdF06W119LGdldEJvZHk6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLG49aS5fb3B0aW9ucy5jYWxsYmFja3Msbz1bXTtyZXR1cm4gcy5lYWNoKHQsZnVuY3Rpb24odCl7dmFyIHI9e2JlZm9yZTpbXSxsaW5lczpbXSxhZnRlcjpbXX07YShyLmJlZm9yZSxuLmJlZm9yZUxhYmVsLmNhbGwoaSx0LGUpKSxhKHIubGluZXMsbi5sYWJlbC5jYWxsKGksdCxlKSksYShyLmFmdGVyLG4uYWZ0ZXJMYWJlbC5jYWxsKGksdCxlKSksby5wdXNoKHIpfSksb30sZ2V0QWZ0ZXJCb2R5OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fb3B0aW9ucy5jYWxsYmFja3MuYWZ0ZXJCb2R5LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gcy5pc0FycmF5KHQpP3Q6dm9pZCAwIT09dD9bdF06W119LGdldEZvb3RlcjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Ll9vcHRpb25zLmNhbGxiYWNrcyxpPWUuYmVmb3JlRm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxuPWUuZm9vdGVyLmFwcGx5KHQsYXJndW1lbnRzKSxvPWUuYWZ0ZXJGb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLHI9W107cmV0dXJuIHI9YShyLGkpLHI9YShyLG4pLHI9YShyLG8pfSx1cGRhdGU6ZnVuY3Rpb24oZSl7dmFyIGEsZCx1PXRoaXMsYz11Ll9vcHRpb25zLGg9dS5fbW9kZWwsZj11Ll9tb2RlbD1uKGMpLGc9dS5fYWN0aXZlLHA9dS5fZGF0YSxtPXUuX2NoYXJ0SW5zdGFuY2UsYj17eEFsaWduOmgueEFsaWduLHlBbGlnbjpoLnlBbGlnbn0sdj17eDpoLngseTpoLnl9LHg9e3dpZHRoOmgud2lkdGgsaGVpZ2h0OmguaGVpZ2h0fSx5PXt4OmguY2FyZXRYLHk6aC5jYXJldFl9O2lmKGcubGVuZ3RoKXtmLm9wYWNpdHk9MTt2YXIgaz1bXTt5PXQuVG9vbHRpcC5wb3NpdGlvbmVyc1tjLnBvc2l0aW9uXShnLHUuX2V2ZW50UG9zaXRpb24pO3ZhciBTPVtdO2ZvcihhPTAsZD1nLmxlbmd0aDtkPmE7KythKVMucHVzaChpKGdbYV0pKTtjLmZpbHRlciYmKFM9Uy5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIGMuZmlsdGVyKHQscCl9KSksYy5pdGVtU29ydCYmKFM9Uy5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIGMuaXRlbVNvcnQodCxlLHApfSkpLHMuZWFjaChTLGZ1bmN0aW9uKHQpe2sucHVzaChjLmNhbGxiYWNrcy5sYWJlbENvbG9yLmNhbGwodSx0LG0pKX0pLGYudGl0bGU9dS5nZXRUaXRsZShTLHApLGYuYmVmb3JlQm9keT11LmdldEJlZm9yZUJvZHkoUyxwKSxmLmJvZHk9dS5nZXRCb2R5KFMscCksZi5hZnRlckJvZHk9dS5nZXRBZnRlckJvZHkoUyxwKSxmLmZvb3Rlcj11LmdldEZvb3RlcihTLHApLGYueD1NYXRoLnJvdW5kKHkueCksZi55PU1hdGgucm91bmQoeS55KSxmLmNhcmV0UGFkZGluZz1zLmdldFZhbHVlT3JEZWZhdWx0KHkucGFkZGluZywyKSxmLmxhYmVsQ29sb3JzPWssZi5kYXRhUG9pbnRzPVMseD1vKHRoaXMsZiksYj1yKHRoaXMseCksdj1sKGYseCxiKX1lbHNlIGYub3BhY2l0eT0wO3JldHVybiBmLnhBbGlnbj1iLnhBbGlnbixmLnlBbGlnbj1iLnlBbGlnbixmLng9di54LGYueT12LnksZi53aWR0aD14LndpZHRoLGYuaGVpZ2h0PXguaGVpZ2h0LGYuY2FyZXRYPXkueCxmLmNhcmV0WT15LnksdS5fbW9kZWw9ZixlJiZjLmN1c3RvbSYmYy5jdXN0b20uY2FsbCh1LGYpLHV9LGRyYXdDYXJldDpmdW5jdGlvbih0LGEsaSl7dmFyIG4sbyxyLGwscyxkLHU9dGhpcy5fdmlldyxjPXRoaXMuX2NoYXJ0LmN0eCxoPXUuY2FyZXRTaXplLGY9dS5jb3JuZXJSYWRpdXMsZz11LnhBbGlnbixwPXUueUFsaWduLG09dC54LGI9dC55LHY9YS53aWR0aCx4PWEuaGVpZ2h0O1wiY2VudGVyXCI9PT1wPyhcImxlZnRcIj09PWc/KG49bSxvPW4taCxyPW4pOihuPW0rdixvPW4raCxyPW4pLHM9Yit4LzIsbD1zLWgsZD1zK2gpOihcImxlZnRcIj09PWc/KG49bStmLG89bitoLHI9bytoKTpcInJpZ2h0XCI9PT1nPyhuPW0rdi1mLG89bi1oLHI9by1oKToobz1tK3YvMixuPW8taCxyPW8raCksXCJ0b3BcIj09PXA/KGw9YixzPWwtaCxkPWwpOihsPWIreCxzPWwraCxkPWwpKSxjLmZpbGxTdHlsZT1lKHUuYmFja2dyb3VuZENvbG9yLGkpLGMuYmVnaW5QYXRoKCksYy5tb3ZlVG8obixsKSxjLmxpbmVUbyhvLHMpLGMubGluZVRvKHIsZCksYy5jbG9zZVBhdGgoKSxjLmZpbGwoKX0sZHJhd1RpdGxlOmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEudGl0bGU7aWYoby5sZW5ndGgpe2kudGV4dEFsaWduPWEuX3RpdGxlQWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIjt2YXIgcj1hLnRpdGxlRm9udFNpemUsbD1hLnRpdGxlU3BhY2luZztpLmZpbGxTdHlsZT1lKGEudGl0bGVGb250Q29sb3IsbiksaS5mb250PXMuZm9udFN0cmluZyhyLGEuX3RpdGxlRm9udFN0eWxlLGEuX3RpdGxlRm9udEZhbWlseSk7dmFyIGQsdTtmb3IoZD0wLHU9by5sZW5ndGg7dT5kOysrZClpLmZpbGxUZXh0KG9bZF0sdC54LHQueSksdC55Kz1yK2wsZCsxPT09by5sZW5ndGgmJih0LnkrPWEudGl0bGVNYXJnaW5Cb3R0b20tbCl9fSxkcmF3Qm9keTpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLmJvZHlGb250U2l6ZSxyPWEuYm9keVNwYWNpbmcsbD1hLmJvZHk7aS50ZXh0QWxpZ249YS5fYm9keUFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCI7dmFyIGQ9ZShhLmJvZHlGb250Q29sb3Isbik7aS5maWxsU3R5bGU9ZCxpLmZvbnQ9cy5mb250U3RyaW5nKG8sYS5fYm9keUZvbnRTdHlsZSxhLl9ib2R5Rm9udEZhbWlseSk7dmFyIHU9MCxjPWZ1bmN0aW9uKGUpe2kuZmlsbFRleHQoZSx0LngrdSx0LnkpLHQueSs9bytyfTtzLmVhY2goYS5iZWZvcmVCb2R5LGMpO3ZhciBoPWEuZGlzcGxheUNvbG9yczt1PWg/bysyOjAscy5lYWNoKGwsZnVuY3Rpb24ocixsKXtzLmVhY2goci5iZWZvcmUsYykscy5lYWNoKHIubGluZXMsZnVuY3Rpb24ocil7aCYmKGkuZmlsbFN0eWxlPWUoYS5sZWdlbmRDb2xvckJhY2tncm91bmQsbiksaS5maWxsUmVjdCh0LngsdC55LG8sbyksaS5zdHJva2VTdHlsZT1lKGEubGFiZWxDb2xvcnNbbF0uYm9yZGVyQ29sb3IsbiksaS5zdHJva2VSZWN0KHQueCx0LnksbyxvKSxpLmZpbGxTdHlsZT1lKGEubGFiZWxDb2xvcnNbbF0uYmFja2dyb3VuZENvbG9yLG4pLGkuZmlsbFJlY3QodC54KzEsdC55KzEsby0yLG8tMiksaS5maWxsU3R5bGU9ZCksYyhyKX0pLHMuZWFjaChyLmFmdGVyLGMpfSksdT0wLHMuZWFjaChhLmFmdGVyQm9keSxjKSx0LnktPXJ9LGRyYXdGb290ZXI6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS5mb290ZXI7by5sZW5ndGgmJih0LnkrPWEuZm9vdGVyTWFyZ2luVG9wLGkudGV4dEFsaWduPWEuX2Zvb3RlckFsaWduLGkudGV4dEJhc2VsaW5lPVwidG9wXCIsaS5maWxsU3R5bGU9ZShhLmZvb3RlckZvbnRDb2xvcixuKSxpLmZvbnQ9cy5mb250U3RyaW5nKGEuZm9vdGVyRm9udFNpemUsYS5fZm9vdGVyRm9udFN0eWxlLGEuX2Zvb3RlckZvbnRGYW1pbHkpLHMuZWFjaChvLGZ1bmN0aW9uKGUpe2kuZmlsbFRleHQoZSx0LngsdC55KSx0LnkrPWEuZm9vdGVyRm9udFNpemUrYS5mb290ZXJTcGFjaW5nfSkpfSxkcmF3QmFja2dyb3VuZDpmdW5jdGlvbih0LGEsaSxuLG8pe2kuZmlsbFN0eWxlPWUoYS5iYWNrZ3JvdW5kQ29sb3Isbykscy5kcmF3Um91bmRlZFJlY3RhbmdsZShpLHQueCx0Lnksbi53aWR0aCxuLmhlaWdodCxhLmNvcm5lclJhZGl1cyksaS5maWxsKCl9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jaGFydC5jdHgsZT10aGlzLl92aWV3O2lmKDAhPT1lLm9wYWNpdHkpe3ZhciBhPXt3aWR0aDplLndpZHRoLGhlaWdodDplLmhlaWdodH0saT17eDplLngseTplLnl9LG49TWF0aC5hYnMoZS5vcGFjaXR5PC4wMDEpPzA6ZS5vcGFjaXR5O3RoaXMuX29wdGlvbnMuZW5hYmxlZCYmKHRoaXMuZHJhd0JhY2tncm91bmQoaSxlLHQsYSxuKSx0aGlzLmRyYXdDYXJldChpLGEsbiksaS54Kz1lLnhQYWRkaW5nLGkueSs9ZS55UGFkZGluZyx0aGlzLmRyYXdUaXRsZShpLGUsdCxuKSx0aGlzLmRyYXdCb2R5KGksZSx0LG4pLHRoaXMuZHJhd0Zvb3RlcihpLGUsdCxuKSl9fSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5fb3B0aW9ucyxpPSExO2lmKGUuX2xhc3RBY3RpdmU9ZS5fbGFzdEFjdGl2ZXx8W10sXCJtb3VzZW91dFwiPT09dC50eXBlP2UuX2FjdGl2ZT1bXTplLl9hY3RpdmU9ZS5fY2hhcnRJbnN0YW5jZS5nZXRFbGVtZW50c0F0RXZlbnRGb3JNb2RlKHQsYS5tb2RlLGEpLGk9IXMuYXJyYXlFcXVhbHMoZS5fYWN0aXZlLGUuX2xhc3RBY3RpdmUpLGUuX2xhc3RBY3RpdmU9ZS5fYWN0aXZlLGEuZW5hYmxlZHx8YS5jdXN0b20pe2UuX2V2ZW50UG9zaXRpb249cy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHQsZS5fY2hhcnQpO3ZhciBuPWUuX21vZGVsO2UudXBkYXRlKCEwKSxlLnBpdm90KCksaXw9bi54IT09ZS5fbW9kZWwueHx8bi55IT09ZS5fbW9kZWwueX1yZXR1cm4gaX19KSx0LlRvb2x0aXAucG9zaXRpb25lcnM9e2F2ZXJhZ2U6ZnVuY3Rpb24odCl7aWYoIXQubGVuZ3RoKXJldHVybiExO3ZhciBlLGEsaT0wLG49MCxvPTA7Zm9yKGU9MCxhPXQubGVuZ3RoO2E+ZTsrK2Upe3ZhciByPXRbZV07aWYociYmci5oYXNWYWx1ZSgpKXt2YXIgbD1yLnRvb2x0aXBQb3NpdGlvbigpO2krPWwueCxuKz1sLnksKytvfX1yZXR1cm57eDpNYXRoLnJvdW5kKGkvbykseTpNYXRoLnJvdW5kKG4vbyl9fSxuZWFyZXN0OmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS54LHI9ZS55LGw9TnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO2ZvcihpPTAsbj10Lmxlbmd0aDtuPmk7KytpKXt2YXIgZD10W2ldO2lmKGQmJmQuaGFzVmFsdWUoKSl7dmFyIHU9ZC5nZXRDZW50ZXJQb2ludCgpLGM9cy5kaXN0YW5jZUJldHdlZW5Qb2ludHMoZSx1KTtsPmMmJihsPWMsYT1kKX19aWYoYSl7dmFyIGg9YS50b29sdGlwUG9zaXRpb24oKTtvPWgueCxyPWgueX1yZXR1cm57eDpvLHk6cn19fX19LHt9XSwzNzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbDthLmVsZW1lbnRzLmFyYz17YmFja2dyb3VuZENvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlckNvbG9yOlwiI2ZmZlwiLGJvcmRlcldpZHRoOjJ9LHQuZWxlbWVudHMuQXJjPXQuRWxlbWVudC5leHRlbmQoe2luTGFiZWxSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS54LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaG92ZXJSYWRpdXMsMik6ITF9LGluUmFuZ2U6ZnVuY3Rpb24odCxhKXt2YXIgaT10aGlzLl92aWV3O2lmKGkpe2Zvcih2YXIgbj1lLmdldEFuZ2xlRnJvbVBvaW50KGkse3g6dCx5OmF9KSxvPW4uYW5nbGUscj1uLmRpc3RhbmNlLGw9aS5zdGFydEFuZ2xlLHM9aS5lbmRBbmdsZTtsPnM7KXMrPTIqTWF0aC5QSTtmb3IoO28+czspby09MipNYXRoLlBJO2Zvcig7bD5vOylvKz0yKk1hdGguUEk7dmFyIGQ9bz49bCYmcz49byx1PXI+PWkuaW5uZXJSYWRpdXMmJnI8PWkub3V0ZXJSYWRpdXM7cmV0dXJuIGQmJnV9cmV0dXJuITF9LGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldyxlPSh0LnN0YXJ0QW5nbGUrdC5lbmRBbmdsZSkvMixhPSh0LmlubmVyUmFkaXVzK3Qub3V0ZXJSYWRpdXMpLzI7cmV0dXJue3g6dC54K01hdGguY29zKGUpKmEseTp0LnkrTWF0aC5zaW4oZSkqYX19LGdldEFyZWE6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiBNYXRoLlBJKigodC5lbmRBbmdsZS10LnN0YXJ0QW5nbGUpLygyKk1hdGguUEkpKSooTWF0aC5wb3codC5vdXRlclJhZGl1cywyKS1NYXRoLnBvdyh0LmlubmVyUmFkaXVzLDIpKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldyxlPXQuc3RhcnRBbmdsZSsodC5lbmRBbmdsZS10LnN0YXJ0QW5nbGUpLzIsYT0odC5vdXRlclJhZGl1cy10LmlubmVyUmFkaXVzKS8yK3QuaW5uZXJSYWRpdXM7cmV0dXJue3g6dC54K01hdGguY29zKGUpKmEseTp0LnkrTWF0aC5zaW4oZSkqYX19LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9jaGFydC5jdHgsZT10aGlzLl92aWV3LGE9ZS5zdGFydEFuZ2xlLGk9ZS5lbmRBbmdsZTt0LmJlZ2luUGF0aCgpLHQuYXJjKGUueCxlLnksZS5vdXRlclJhZGl1cyxhLGkpLHQuYXJjKGUueCxlLnksZS5pbm5lclJhZGl1cyxpLGEsITApLHQuY2xvc2VQYXRoKCksdC5zdHJva2VTdHlsZT1lLmJvcmRlckNvbG9yLHQubGluZVdpZHRoPWUuYm9yZGVyV2lkdGgsdC5maWxsU3R5bGU9ZS5iYWNrZ3JvdW5kQ29sb3IsdC5maWxsKCksdC5saW5lSm9pbj1cImJldmVsXCIsZS5ib3JkZXJXaWR0aCYmdC5zdHJva2UoKX19KX19LHt9XSwzODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbDt0LmRlZmF1bHRzLmdsb2JhbC5lbGVtZW50cy5saW5lPXt0ZW5zaW9uOi40LGJhY2tncm91bmRDb2xvcjphLmRlZmF1bHRDb2xvcixib3JkZXJXaWR0aDozLGJvcmRlckNvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlckNhcFN0eWxlOlwiYnV0dFwiLGJvcmRlckRhc2g6W10sYm9yZGVyRGFzaE9mZnNldDowLGJvcmRlckpvaW5TdHlsZTpcIm1pdGVyXCIsY2FwQmV6aWVyUG9pbnRzOiEwLGZpbGw6ITB9LHQuZWxlbWVudHMuTGluZT10LkVsZW1lbnQuZXh0ZW5kKHtkcmF3OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LGUpe3ZhciBhPWUuX3ZpZXc7ZS5fdmlldy5zdGVwcGVkTGluZT09PSEwPyhzLmxpbmVUbyhhLngsdC5fdmlldy55KSxzLmxpbmVUbyhhLngsYS55KSk6MD09PWUuX3ZpZXcudGVuc2lvbj9zLmxpbmVUbyhhLngsYS55KTpzLmJlemllckN1cnZlVG8odC5fdmlldy5jb250cm9sUG9pbnROZXh0WCx0Ll92aWV3LmNvbnRyb2xQb2ludE5leHRZLGEuY29udHJvbFBvaW50UHJldmlvdXNYLGEuY29udHJvbFBvaW50UHJldmlvdXNZLGEueCxhLnkpfXZhciBpPXRoaXMsbj1pLl92aWV3LG89bi5zcGFuR2FwcyxyPW4uc2NhbGVaZXJvLGw9aS5fbG9vcDtsfHwoXCJ0b3BcIj09PW4uZmlsbD9yPW4uc2NhbGVUb3A6XCJib3R0b21cIj09PW4uZmlsbCYmKHI9bi5zY2FsZUJvdHRvbSkpO3ZhciBzPWkuX2NoYXJ0LmN0eDtzLnNhdmUoKTt2YXIgZD1pLl9jaGlsZHJlbi5zbGljZSgpLHU9LTE7bCYmZC5sZW5ndGgmJmQucHVzaChkWzBdKTt2YXIgYyxoLGYsZztpZihkLmxlbmd0aCYmbi5maWxsKXtmb3Iocy5iZWdpblBhdGgoKSxjPTA7YzxkLmxlbmd0aDsrK2MpaD1kW2NdLGY9ZS5wcmV2aW91c0l0ZW0oZCxjKSxnPWguX3ZpZXcsMD09PWM/KGw/cy5tb3ZlVG8oci54LHIueSk6cy5tb3ZlVG8oZy54LHIpLGcuc2tpcHx8KHU9YyxzLmxpbmVUbyhnLngsZy55KSkpOihmPS0xPT09dT9mOmRbdV0sZy5za2lwP298fHUhPT1jLTF8fChsP3MubGluZVRvKHIueCxyLnkpOnMubGluZVRvKGYuX3ZpZXcueCxyKSk6KHUhPT1jLTE/byYmLTEhPT11P3QoZixoKTpsP3MubGluZVRvKGcueCxnLnkpOihzLmxpbmVUbyhnLngscikscy5saW5lVG8oZy54LGcueSkpOnQoZixoKSx1PWMpKTtsfHwtMT09PXV8fHMubGluZVRvKGRbdV0uX3ZpZXcueCxyKSxzLmZpbGxTdHlsZT1uLmJhY2tncm91bmRDb2xvcnx8YS5kZWZhdWx0Q29sb3Iscy5jbG9zZVBhdGgoKSxzLmZpbGwoKX12YXIgcD1hLmVsZW1lbnRzLmxpbmU7Zm9yKHMubGluZUNhcD1uLmJvcmRlckNhcFN0eWxlfHxwLmJvcmRlckNhcFN0eWxlLHMuc2V0TGluZURhc2gmJnMuc2V0TGluZURhc2gobi5ib3JkZXJEYXNofHxwLmJvcmRlckRhc2gpLHMubGluZURhc2hPZmZzZXQ9bi5ib3JkZXJEYXNoT2Zmc2V0fHxwLmJvcmRlckRhc2hPZmZzZXQscy5saW5lSm9pbj1uLmJvcmRlckpvaW5TdHlsZXx8cC5ib3JkZXJKb2luU3R5bGUscy5saW5lV2lkdGg9bi5ib3JkZXJXaWR0aHx8cC5ib3JkZXJXaWR0aCxzLnN0cm9rZVN0eWxlPW4uYm9yZGVyQ29sb3J8fGEuZGVmYXVsdENvbG9yLHMuYmVnaW5QYXRoKCksdT0tMSxjPTA7YzxkLmxlbmd0aDsrK2MpaD1kW2NdLGY9ZS5wcmV2aW91c0l0ZW0oZCxjKSxnPWguX3ZpZXcsMD09PWM/Zy5za2lwfHwocy5tb3ZlVG8oZy54LGcueSksdT1jKTooZj0tMT09PXU/ZjpkW3VdLGcuc2tpcHx8KHUhPT1jLTEmJiFvfHwtMT09PXU/cy5tb3ZlVG8oZy54LGcueSk6dChmLGgpLHU9YykpO3Muc3Ryb2tlKCkscy5yZXN0b3JlKCl9fSl9fSx7fV0sMzk6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS54LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaGl0UmFkaXVzLDIpOiExfWZ1bmN0aW9uIGEodCl7dmFyIGU9dGhpcy5fdmlldztyZXR1cm4gZT9NYXRoLnBvdyh0LWUueSwyKTxNYXRoLnBvdyhlLnJhZGl1cytlLmhpdFJhZGl1cywyKTohMX12YXIgaT10LmhlbHBlcnMsbj10LmRlZmF1bHRzLmdsb2JhbCxvPW4uZGVmYXVsdENvbG9yO24uZWxlbWVudHMucG9pbnQ9e3JhZGl1czozLHBvaW50U3R5bGU6XCJjaXJjbGVcIixiYWNrZ3JvdW5kQ29sb3I6byxib3JkZXJXaWR0aDoxLGJvcmRlckNvbG9yOm8saGl0UmFkaXVzOjEsaG92ZXJSYWRpdXM6NCxob3ZlckJvcmRlcldpZHRoOjF9LHQuZWxlbWVudHMuUG9pbnQ9dC5FbGVtZW50LmV4dGVuZCh7aW5SYW5nZTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMuX3ZpZXc7cmV0dXJuIGE/TWF0aC5wb3codC1hLngsMikrTWF0aC5wb3coZS1hLnksMik8TWF0aC5wb3coYS5oaXRSYWRpdXMrYS5yYWRpdXMsMik6ITF9LGluTGFiZWxSYW5nZTplLGluWFJhbmdlOmUsaW5ZUmFuZ2U6YSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55fX0sZ2V0QXJlYTpmdW5jdGlvbigpe3JldHVybiBNYXRoLlBJKk1hdGgucG93KHRoaXMuX3ZpZXcucmFkaXVzLDIpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueSxwYWRkaW5nOnQucmFkaXVzK3QuYm9yZGVyV2lkdGh9fSxkcmF3OmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fdmlldyxhPXRoaXMuX2NoYXJ0LmN0eCxyPWUucG9pbnRTdHlsZSxsPWUucmFkaXVzLHM9ZS54LGQ9ZS55O2Uuc2tpcHx8KGEuc3Ryb2tlU3R5bGU9ZS5ib3JkZXJDb2xvcnx8byxhLmxpbmVXaWR0aD1pLmdldFZhbHVlT3JEZWZhdWx0KGUuYm9yZGVyV2lkdGgsbi5lbGVtZW50cy5wb2ludC5ib3JkZXJXaWR0aCksYS5maWxsU3R5bGU9ZS5iYWNrZ3JvdW5kQ29sb3J8fG8sdC5jYW52YXNIZWxwZXJzLmRyYXdQb2ludChhLHIsbCxzLGQpKX19KX19LHt9XSw0MDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe3JldHVybiB2b2lkIDAhPT10Ll92aWV3LndpZHRofWZ1bmN0aW9uIGEodCl7dmFyIGEsaSxuLG8scj10Ll92aWV3O2lmKGUodCkpe3ZhciBsPXIud2lkdGgvMjthPXIueC1sLGk9ci54K2wsbj1NYXRoLm1pbihyLnksci5iYXNlKSxvPU1hdGgubWF4KHIueSxyLmJhc2UpfWVsc2V7dmFyIHM9ci5oZWlnaHQvMjthPU1hdGgubWluKHIueCxyLmJhc2UpLGk9TWF0aC5tYXgoci54LHIuYmFzZSksbj1yLnktcyxvPXIueStzfXJldHVybntsZWZ0OmEsdG9wOm4scmlnaHQ6aSxib3R0b206b319dmFyIGk9dC5kZWZhdWx0cy5nbG9iYWw7aS5lbGVtZW50cy5yZWN0YW5nbGU9e2JhY2tncm91bmRDb2xvcjppLmRlZmF1bHRDb2xvcixib3JkZXJXaWR0aDowLGJvcmRlckNvbG9yOmkuZGVmYXVsdENvbG9yLGJvcmRlclNraXBwZWQ6XCJib3R0b21cIn0sdC5lbGVtZW50cy5SZWN0YW5nbGU9dC5FbGVtZW50LmV4dGVuZCh7ZHJhdzpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHNbKHUrdCklNF19dmFyIGU9dGhpcy5fY2hhcnQuY3R4LGE9dGhpcy5fdmlldyxpPWEud2lkdGgvMixuPWEueC1pLG89YS54K2kscj1hLmJhc2UtKGEuYmFzZS1hLnkpLGw9YS5ib3JkZXJXaWR0aC8yO2EuYm9yZGVyV2lkdGgmJihuKz1sLG8tPWwscis9bCksZS5iZWdpblBhdGgoKSxlLmZpbGxTdHlsZT1hLmJhY2tncm91bmRDb2xvcixlLnN0cm9rZVN0eWxlPWEuYm9yZGVyQ29sb3IsZS5saW5lV2lkdGg9YS5ib3JkZXJXaWR0aDt2YXIgcz1bW24sYS5iYXNlXSxbbixyXSxbbyxyXSxbbyxhLmJhc2VdXSxkPVtcImJvdHRvbVwiLFwibGVmdFwiLFwidG9wXCIsXCJyaWdodFwiXSx1PWQuaW5kZXhPZihhLmJvcmRlclNraXBwZWQsMCk7LTE9PT11JiYodT0wKTt2YXIgYz10KDApO2UubW92ZVRvKGNbMF0sY1sxXSk7Zm9yKHZhciBoPTE7ND5oO2grKyljPXQoaCksZS5saW5lVG8oY1swXSxjWzFdKTtlLmZpbGwoKSxhLmJvcmRlcldpZHRoJiZlLnN0cm9rZSgpfSxoZWlnaHQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiB0LmJhc2UtdC55fSxpblJhbmdlOmZ1bmN0aW9uKHQsZSl7dmFyIGk9ITE7aWYodGhpcy5fdmlldyl7dmFyIG49YSh0aGlzKTtpPXQ+PW4ubGVmdCYmdDw9bi5yaWdodCYmZT49bi50b3AmJmU8PW4uYm90dG9tfXJldHVybiBpfSxpbkxhYmVsUmFuZ2U6ZnVuY3Rpb24odCxpKXt2YXIgbj10aGlzO2lmKCFuLl92aWV3KXJldHVybiExO3ZhciBvPSExLHI9YShuKTtyZXR1cm4gbz1lKG4pP3Q+PXIubGVmdCYmdDw9ci5yaWdodDppPj1yLnRvcCYmaTw9ci5ib3R0b219LGluWFJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPWEodGhpcyk7cmV0dXJuIHQ+PWUubGVmdCYmdDw9ZS5yaWdodH0saW5ZUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9YSh0aGlzKTtyZXR1cm4gdD49ZS50b3AmJnQ8PWUuYm90dG9tfSxnZXRDZW50ZXJQb2ludDpmdW5jdGlvbigpe3ZhciB0LGEsaT10aGlzLl92aWV3O3JldHVybiBlKHRoaXMpPyh0PWkueCxhPShpLnkraS5iYXNlKS8yKToodD0oaS54K2kuYmFzZSkvMixhPWkueSkse3g6dCx5OmF9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm4gdC53aWR0aCpNYXRoLmFicyh0LnktdC5iYXNlKX0sdG9vbHRpcFBvc2l0aW9uOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0Lnl9fX0pfX0se31dLDQxOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImJvdHRvbVwifSxpPXQuU2NhbGUuZXh0ZW5kKHtnZXRMYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNoYXJ0LmRhdGE7cmV0dXJuKHRoaXMuaXNIb3Jpem9udGFsKCk/dC54TGFiZWxzOnQueUxhYmVscyl8fHQubGFiZWxzfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQuZ2V0TGFiZWxzKCk7dC5taW5JbmRleD0wLHQubWF4SW5kZXg9YS5sZW5ndGgtMTt2YXIgaTt2b2lkIDAhPT10Lm9wdGlvbnMudGlja3MubWluJiYoaT1lLmluZGV4T2YoYSx0Lm9wdGlvbnMudGlja3MubWluKSx0Lm1pbkluZGV4PS0xIT09aT9pOnQubWluSW5kZXgpLHZvaWQgMCE9PXQub3B0aW9ucy50aWNrcy5tYXgmJihpPWUuaW5kZXhPZihhLHQub3B0aW9ucy50aWNrcy5tYXgpLHQubWF4SW5kZXg9LTEhPT1pP2k6dC5tYXhJbmRleCksdC5taW49YVt0Lm1pbkluZGV4XSx0Lm1heD1hW3QubWF4SW5kZXhdfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TGFiZWxzKCk7dC50aWNrcz0wPT09dC5taW5JbmRleCYmdC5tYXhJbmRleD09PWUubGVuZ3RoLTE/ZTplLnNsaWNlKHQubWluSW5kZXgsdC5tYXhJbmRleCsxKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LmRhdGEsbj1hLmlzSG9yaXpvbnRhbCgpO3JldHVybiBpLnhMYWJlbHMmJm58fGkueUxhYmVscyYmIW4/YS5nZXRSaWdodFZhbHVlKGkuZGF0YXNldHNbZV0uZGF0YVt0XSk6YS50aWNrc1t0XX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10aGlzLG89TWF0aC5tYXgobi5tYXhJbmRleCsxLW4ubWluSW5kZXgtKG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSk7aWYodm9pZCAwIT09dCYmaXNOYU4oZSkpe3ZhciByPW4uZ2V0TGFiZWxzKCksbD1yLmluZGV4T2YodCk7ZT0tMSE9PWw/bDplfWlmKG4uaXNIb3Jpem9udGFsKCkpe3ZhciBzPW4ud2lkdGgtKG4ucGFkZGluZ0xlZnQrbi5wYWRkaW5nUmlnaHQpLGQ9cy9vLHU9ZCooZS1uLm1pbkluZGV4KStuLnBhZGRpbmdMZWZ0O3JldHVybihuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmaXx8bi5tYXhJbmRleD09PW4ubWluSW5kZXgmJmkpJiYodSs9ZC8yKSxcbm4ubGVmdCtNYXRoLnJvdW5kKHUpfXZhciBjPW4uaGVpZ2h0LShuLnBhZGRpbmdUb3Arbi5wYWRkaW5nQm90dG9tKSxoPWMvbyxmPWgqKGUtbi5taW5JbmRleCkrbi5wYWRkaW5nVG9wO3JldHVybiBuLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmaSYmKGYrPWgvMiksbi50b3ArTWF0aC5yb3VuZChmKX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tzW3RdLHQrdGhpcy5taW5JbmRleCxudWxsLGUpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPU1hdGgubWF4KGEudGlja3MubGVuZ3RoLShhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpLG49YS5pc0hvcml6b250YWwoKSxvPW4/YS53aWR0aC0oYS5wYWRkaW5nTGVmdCthLnBhZGRpbmdSaWdodCk6YS5oZWlnaHQtKGEucGFkZGluZ1RvcCthLnBhZGRpbmdCb3R0b20pLHI9by9pO3JldHVybiB0LT1uP2EubGVmdDphLnRvcCxhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcyYmKHQtPXIvMiksdC09bj9hLnBhZGRpbmdMZWZ0OmEucGFkZGluZ1RvcCxlPTA+PXQ/MDpNYXRoLnJvdW5kKHQvcil9LGdldEJhc2VQaXhlbDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmJvdHRvbX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImNhdGVnb3J5XCIsaSxhKX19LHt9XSw0MjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJsZWZ0XCIsdGlja3M6e2NhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5saW5lYXJ9fSxpPXQuTGluZWFyU2NhbGVCYXNlLmV4dGVuZCh7ZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIGw/dC54QXhpc0lEPT09YS5pZDp0LnlBeGlzSUQ9PT1hLmlkfXZhciBhPXRoaXMsaT1hLm9wdGlvbnMsbj1hLmNoYXJ0LG89bi5kYXRhLHI9by5kYXRhc2V0cyxsPWEuaXNIb3Jpem9udGFsKCk7aWYoYS5taW49bnVsbCxhLm1heD1udWxsLGkuc3RhY2tlZCl7dmFyIHM9e307ZS5lYWNoKHIsZnVuY3Rpb24obyxyKXt2YXIgbD1uLmdldERhdGFzZXRNZXRhKHIpO3ZvaWQgMD09PXNbbC50eXBlXSYmKHNbbC50eXBlXT17cG9zaXRpdmVWYWx1ZXM6W10sbmVnYXRpdmVWYWx1ZXM6W119KTt2YXIgZD1zW2wudHlwZV0ucG9zaXRpdmVWYWx1ZXMsdT1zW2wudHlwZV0ubmVnYXRpdmVWYWx1ZXM7bi5pc0RhdGFzZXRWaXNpYmxlKHIpJiZ0KGwpJiZlLmVhY2goby5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIG49K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihuKXx8bC5kYXRhW2VdLmhpZGRlbnx8KGRbZV09ZFtlXXx8MCx1W2VdPXVbZV18fDAsaS5yZWxhdGl2ZVBvaW50cz9kW2VdPTEwMDowPm4/dVtlXSs9bjpkW2VdKz1uKX0pfSksZS5lYWNoKHMsZnVuY3Rpb24odCl7dmFyIGk9dC5wb3NpdGl2ZVZhbHVlcy5jb25jYXQodC5uZWdhdGl2ZVZhbHVlcyksbj1lLm1pbihpKSxvPWUubWF4KGkpO2EubWluPW51bGw9PT1hLm1pbj9uOk1hdGgubWluKGEubWluLG4pLGEubWF4PW51bGw9PT1hLm1heD9vOk1hdGgubWF4KGEubWF4LG8pfSl9ZWxzZSBlLmVhY2gocixmdW5jdGlvbihpLG8pe3ZhciByPW4uZ2V0RGF0YXNldE1ldGEobyk7bi5pc0RhdGFzZXRWaXNpYmxlKG8pJiZ0KHIpJiZlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIGk9K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihpKXx8ci5kYXRhW2VdLmhpZGRlbnx8KG51bGw9PT1hLm1pbj9hLm1pbj1pOmk8YS5taW4mJihhLm1pbj1pKSxudWxsPT09YS5tYXg/YS5tYXg9aTppPmEubWF4JiYoYS5tYXg9aSkpfSl9KTt0aGlzLmhhbmRsZVRpY2tSYW5nZU9wdGlvbnMoKX0sZ2V0VGlja0xpbWl0OmZ1bmN0aW9uKCl7dmFyIGEsaT10aGlzLG49aS5vcHRpb25zLnRpY2tzO2lmKGkuaXNIb3Jpem9udGFsKCkpYT1NYXRoLm1pbihuLm1heFRpY2tzTGltaXQ/bi5tYXhUaWNrc0xpbWl0OjExLE1hdGguY2VpbChpLndpZHRoLzUwKSk7ZWxzZXt2YXIgbz1lLmdldFZhbHVlT3JEZWZhdWx0KG4uZm9udFNpemUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTaXplKTthPU1hdGgubWluKG4ubWF4VGlja3NMaW1pdD9uLm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKGkuaGVpZ2h0LygyKm8pKSl9cmV0dXJuIGF9LGhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlczpmdW5jdGlvbigpe3RoaXMuaXNIb3Jpem9udGFsKCl8fHRoaXMudGlja3MucmV2ZXJzZSgpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGUsYSxpPXRoaXMsbj1pLnBhZGRpbmdMZWZ0LG89aS5wYWRkaW5nQm90dG9tLHI9aS5zdGFydCxsPStpLmdldFJpZ2h0VmFsdWUodCkscz1pLmVuZC1yO3JldHVybiBpLmlzSG9yaXpvbnRhbCgpPyhhPWkud2lkdGgtKG4raS5wYWRkaW5nUmlnaHQpLGU9aS5sZWZ0K2EvcyoobC1yKSxNYXRoLnJvdW5kKGUrbikpOihhPWkuaGVpZ2h0LShpLnBhZGRpbmdUb3ArbyksZT1pLmJvdHRvbS1vLWEvcyoobC1yKSxNYXRoLnJvdW5kKGUpKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5pc0hvcml6b250YWwoKSxpPWUucGFkZGluZ0xlZnQsbj1lLnBhZGRpbmdCb3R0b20sbz1hP2Uud2lkdGgtKGkrZS5wYWRkaW5nUmlnaHQpOmUuaGVpZ2h0LShlLnBhZGRpbmdUb3Arbikscj0oYT90LWUubGVmdC1pOmUuYm90dG9tLW4tdCkvbztyZXR1cm4gZS5zdGFydCsoZS5lbmQtZS5zdGFydCkqcn0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrc0FzTnVtYmVyc1t0XSl9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJsaW5lYXJcIixpLGEpfX0se31dLDQzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPWUubm9vcDt0LkxpbmVhclNjYWxlQmFzZT10LlNjYWxlLmV4dGVuZCh7aGFuZGxlVGlja1JhbmdlT3B0aW9uczpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10Lm9wdGlvbnMsaT1hLnRpY2tzO2lmKGkuYmVnaW5BdFplcm8pe3ZhciBuPWUuc2lnbih0Lm1pbiksbz1lLnNpZ24odC5tYXgpOzA+biYmMD5vP3QubWF4PTA6bj4wJiZvPjAmJih0Lm1pbj0wKX12b2lkIDAhPT1pLm1pbj90Lm1pbj1pLm1pbjp2b2lkIDAhPT1pLnN1Z2dlc3RlZE1pbiYmKHQubWluPU1hdGgubWluKHQubWluLGkuc3VnZ2VzdGVkTWluKSksdm9pZCAwIT09aS5tYXg/dC5tYXg9aS5tYXg6dm9pZCAwIT09aS5zdWdnZXN0ZWRNYXgmJih0Lm1heD1NYXRoLm1heCh0Lm1heCxpLnN1Z2dlc3RlZE1heCkpLHQubWluPT09dC5tYXgmJih0Lm1heCsrLGkuYmVnaW5BdFplcm98fHQubWluLS0pfSxnZXRUaWNrTGltaXQ6YSxoYW5kbGVEaXJlY3Rpb25hbENoYW5nZXM6YSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz1hLmdldFRpY2tMaW1pdCgpO289TWF0aC5tYXgoMixvKTt2YXIgcj17bWF4VGlja3M6byxtaW46bi5taW4sbWF4Om4ubWF4LHN0ZXBTaXplOmUuZ2V0VmFsdWVPckRlZmF1bHQobi5maXhlZFN0ZXBTaXplLG4uc3RlcFNpemUpfSxsPWEudGlja3M9dC5UaWNrcy5nZW5lcmF0b3JzLmxpbmVhcihyLGEpO2EuaGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzKCksYS5tYXg9ZS5tYXgobCksYS5taW49ZS5taW4obCksbi5yZXZlcnNlPyhsLnJldmVyc2UoKSxhLnN0YXJ0PWEubWF4LGEuZW5kPWEubWluKTooYS5zdGFydD1hLm1pbixhLmVuZD1hLm1heCl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLnRpY2tzQXNOdW1iZXJzPWUudGlja3Muc2xpY2UoKSxlLnplcm9MaW5lSW5kZXg9ZS50aWNrcy5pbmRleE9mKDApLHQuU2NhbGUucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwoZSl9fSl9fSx7fV0sNDQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwibGVmdFwiLHRpY2tzOntjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubG9nYXJpdGhtaWN9fSxpPXQuU2NhbGUuZXh0ZW5kKHtkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gZD90LnhBeGlzSUQ9PT1hLmlkOnQueUF4aXNJRD09PWEuaWR9dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz1hLmNoYXJ0LHI9by5kYXRhLGw9ci5kYXRhc2V0cyxzPWUuZ2V0VmFsdWVPckRlZmF1bHQsZD1hLmlzSG9yaXpvbnRhbCgpO2lmKGEubWluPW51bGwsYS5tYXg9bnVsbCxhLm1pbk5vdFplcm89bnVsbCxpLnN0YWNrZWQpe3ZhciB1PXt9O2UuZWFjaChsLGZ1bmN0aW9uKG4scil7dmFyIGw9by5nZXREYXRhc2V0TWV0YShyKTtvLmlzRGF0YXNldFZpc2libGUocikmJnQobCkmJih2b2lkIDA9PT11W2wudHlwZV0mJih1W2wudHlwZV09W10pLGUuZWFjaChuLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgbj11W2wudHlwZV0sbz0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKG8pfHxsLmRhdGFbZV0uaGlkZGVufHwobltlXT1uW2VdfHwwLGkucmVsYXRpdmVQb2ludHM/bltlXT0xMDA6bltlXSs9byl9KSl9KSxlLmVhY2godSxmdW5jdGlvbih0KXt2YXIgaT1lLm1pbih0KSxuPWUubWF4KHQpO2EubWluPW51bGw9PT1hLm1pbj9pOk1hdGgubWluKGEubWluLGkpLGEubWF4PW51bGw9PT1hLm1heD9uOk1hdGgubWF4KGEubWF4LG4pfSl9ZWxzZSBlLmVhY2gobCxmdW5jdGlvbihpLG4pe3ZhciByPW8uZ2V0RGF0YXNldE1ldGEobik7by5pc0RhdGFzZXRWaXNpYmxlKG4pJiZ0KHIpJiZlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKHQsZSl7dmFyIGk9K2EuZ2V0UmlnaHRWYWx1ZSh0KTtpc05hTihpKXx8ci5kYXRhW2VdLmhpZGRlbnx8KG51bGw9PT1hLm1pbj9hLm1pbj1pOmk8YS5taW4mJihhLm1pbj1pKSxudWxsPT09YS5tYXg/YS5tYXg9aTppPmEubWF4JiYoYS5tYXg9aSksMCE9PWkmJihudWxsPT09YS5taW5Ob3RaZXJvfHxpPGEubWluTm90WmVybykmJihhLm1pbk5vdFplcm89aSkpfSl9KTthLm1pbj1zKG4ubWluLGEubWluKSxhLm1heD1zKG4ubWF4LGEubWF4KSxhLm1pbj09PWEubWF4JiYoMCE9PWEubWluJiZudWxsIT09YS5taW4/KGEubWluPU1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1pbikpLTEpLGEubWF4PU1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1heCkpKzEpKTooYS5taW49MSxhLm1heD0xMCkpfSxidWlsZFRpY2tzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWkudGlja3Msbz17bWluOm4ubWluLG1heDpuLm1heH0scj1hLnRpY2tzPXQuVGlja3MuZ2VuZXJhdG9ycy5sb2dhcml0aG1pYyhvLGEpO2EuaXNIb3Jpem9udGFsKCl8fHIucmV2ZXJzZSgpLGEubWF4PWUubWF4KHIpLGEubWluPWUubWluKHIpLG4ucmV2ZXJzZT8oci5yZXZlcnNlKCksYS5zdGFydD1hLm1heCxhLmVuZD1hLm1pbik6KGEuc3RhcnQ9YS5taW4sYS5lbmQ9YS5tYXgpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3RoaXMudGlja1ZhbHVlcz10aGlzLnRpY2tzLnNsaWNlKCksdC5TY2FsZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbCh0aGlzKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tWYWx1ZXNbdF0pfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBhLGksbixvPXRoaXMscj1vLnN0YXJ0LGw9K28uZ2V0UmlnaHRWYWx1ZSh0KSxzPW8ucGFkZGluZ1RvcCxkPW8ucGFkZGluZ0JvdHRvbSx1PW8ucGFkZGluZ0xlZnQsYz1vLm9wdGlvbnMsaD1jLnRpY2tzO3JldHVybiBvLmlzSG9yaXpvbnRhbCgpPyhuPWUubG9nMTAoby5lbmQpLWUubG9nMTAociksMD09PWw/aT1vLmxlZnQrdTooYT1vLndpZHRoLSh1K28ucGFkZGluZ1JpZ2h0KSxpPW8ubGVmdCthL24qKGUubG9nMTAobCktZS5sb2cxMChyKSksaSs9dSkpOihhPW8uaGVpZ2h0LShzK2QpLDAhPT1yfHxoLnJldmVyc2U/MD09PW8uZW5kJiZoLnJldmVyc2U/KG49ZS5sb2cxMChvLnN0YXJ0KS1lLmxvZzEwKG8ubWluTm90WmVybyksaT1sPT09by5lbmQ/by50b3ArczpsPT09by5taW5Ob3RaZXJvP28udG9wK3MrLjAyKmE6by50b3ArcysuMDIqYSsuOTgqYS9uKihlLmxvZzEwKGwpLWUubG9nMTAoby5taW5Ob3RaZXJvKSkpOihuPWUubG9nMTAoby5lbmQpLWUubG9nMTAociksYT1vLmhlaWdodC0ocytkKSxpPW8uYm90dG9tLWQtYS9uKihlLmxvZzEwKGwpLWUubG9nMTAocikpKToobj1lLmxvZzEwKG8uZW5kKS1lLmxvZzEwKG8ubWluTm90WmVybyksaT1sPT09cj9vLmJvdHRvbS1kOmw9PT1vLm1pbk5vdFplcm8/by5ib3R0b20tZC0uMDIqYTpvLmJvdHRvbS1kLS4wMiphLS45OCphL24qKGUubG9nMTAobCktZS5sb2cxMChvLm1pbk5vdFplcm8pKSkpLGl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGEsaSxuPXRoaXMsbz1lLmxvZzEwKG4uZW5kKS1lLmxvZzEwKG4uc3RhcnQpO3JldHVybiBuLmlzSG9yaXpvbnRhbCgpPyhpPW4ud2lkdGgtKG4ucGFkZGluZ0xlZnQrbi5wYWRkaW5nUmlnaHQpLGE9bi5zdGFydCpNYXRoLnBvdygxMCwodC1uLmxlZnQtbi5wYWRkaW5nTGVmdCkqby9pKSk6KGk9bi5oZWlnaHQtKG4ucGFkZGluZ1RvcCtuLnBhZGRpbmdCb3R0b20pLGE9TWF0aC5wb3coMTAsKG4uYm90dG9tLW4ucGFkZGluZ0JvdHRvbS10KSpvL2kpL24uc3RhcnQpLGF9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJsb2dhcml0aG1pY1wiLGksYSl9fSx7fV0sNDU6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0cy5nbG9iYWwsaT17ZGlzcGxheTohMCxhbmltYXRlOiEwLGxpbmVBcmM6ITEscG9zaXRpb246XCJjaGFydEFyZWFcIixhbmdsZUxpbmVzOntkaXNwbGF5OiEwLGNvbG9yOlwicmdiYSgwLCAwLCAwLCAwLjEpXCIsbGluZVdpZHRoOjF9LHRpY2tzOntzaG93TGFiZWxCYWNrZHJvcDohMCxiYWNrZHJvcENvbG9yOlwicmdiYSgyNTUsMjU1LDI1NSwwLjc1KVwiLGJhY2tkcm9wUGFkZGluZ1k6MixiYWNrZHJvcFBhZGRpbmdYOjIsY2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxpbmVhcn0scG9pbnRMYWJlbHM6e2ZvbnRTaXplOjEwLGNhbGxiYWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0fX19LG49dC5MaW5lYXJTY2FsZUJhc2UuZXh0ZW5kKHtnZXRWYWx1ZUNvdW50OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RofSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQub3B0aW9ucyxuPWkudGlja3M7dC53aWR0aD10Lm1heFdpZHRoLHQuaGVpZ2h0PXQubWF4SGVpZ2h0LHQueENlbnRlcj1NYXRoLnJvdW5kKHQud2lkdGgvMiksdC55Q2VudGVyPU1hdGgucm91bmQodC5oZWlnaHQvMik7dmFyIG89ZS5taW4oW3QuaGVpZ2h0LHQud2lkdGhdKSxyPWUuZ2V0VmFsdWVPckRlZmF1bHQobi5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSk7dC5kcmF3aW5nQXJlYT1pLmRpc3BsYXk/by8yLShyLzIrbi5iYWNrZHJvcFBhZGRpbmdZKTpvLzJ9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5jaGFydDt0Lm1pbj1udWxsLHQubWF4PW51bGwsZS5lYWNoKGEuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihpLG4pe2lmKGEuaXNEYXRhc2V0VmlzaWJsZShuKSl7dmFyIG89YS5nZXREYXRhc2V0TWV0YShuKTtlLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUsYSl7dmFyIGk9K3QuZ2V0UmlnaHRWYWx1ZShlKTtpc05hTihpKXx8by5kYXRhW2FdLmhpZGRlbnx8KG51bGw9PT10Lm1pbj90Lm1pbj1pOmk8dC5taW4mJih0Lm1pbj1pKSxudWxsPT09dC5tYXg/dC5tYXg9aTppPnQubWF4JiYodC5tYXg9aSkpfSl9fSksdC5oYW5kbGVUaWNrUmFuZ2VPcHRpb25zKCl9LGdldFRpY2tMaW1pdDpmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy50aWNrcyxpPWUuZ2V0VmFsdWVPckRlZmF1bHQodC5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSk7cmV0dXJuIE1hdGgubWluKHQubWF4VGlja3NMaW1pdD90Lm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKHRoaXMuZHJhd2luZ0FyZWEvKDEuNSppKSkpfSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dC5MaW5lYXJTY2FsZUJhc2UucHJvdG90eXBlLmNvbnZlcnRUaWNrc1RvTGFiZWxzLmNhbGwoZSksZS5wb2ludExhYmVscz1lLmNoYXJ0LmRhdGEubGFiZWxzLm1hcChlLm9wdGlvbnMucG9pbnRMYWJlbHMuY2FsbGJhY2ssZSl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZml0OmZ1bmN0aW9uKCl7dmFyIHQsaSxuLG8scixsLHMsZCx1LGMsaCxmLGc9dGhpcy5vcHRpb25zLnBvaW50TGFiZWxzLHA9ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxtPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxiPWUuZ2V0VmFsdWVPckRlZmF1bHQoZy5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLHY9ZS5mb250U3RyaW5nKHAsbSxiKSx4PWUubWluKFt0aGlzLmhlaWdodC8yLXAtNSx0aGlzLndpZHRoLzJdKSx5PXRoaXMud2lkdGgsaz0wO2Zvcih0aGlzLmN0eC5mb250PXYsaT0wO2k8dGhpcy5nZXRWYWx1ZUNvdW50KCk7aSsrKXt0PXRoaXMuZ2V0UG9pbnRQb3NpdGlvbihpLHgpLG49dGhpcy5jdHgubWVhc3VyZVRleHQodGhpcy5wb2ludExhYmVsc1tpXT90aGlzLnBvaW50TGFiZWxzW2ldOlwiXCIpLndpZHRoKzU7dmFyIFM9dGhpcy5nZXRJbmRleEFuZ2xlKGkpK01hdGguUEkvMix3PTM2MCpTLygyKk1hdGguUEkpJTM2MDswPT09d3x8MTgwPT09dz8obz1uLzIsdC54K28+eSYmKHk9dC54K28scj1pKSx0LngtbzxrJiYoaz10LngtbyxzPWkpKToxODA+dz90Lngrbj55JiYoeT10LngrbixyPWkpOnQueC1uPGsmJihrPXQueC1uLHM9aSl9dT1rLGM9TWF0aC5jZWlsKHktdGhpcy53aWR0aCksbD10aGlzLmdldEluZGV4QW5nbGUociksZD10aGlzLmdldEluZGV4QW5nbGUocyksaD1jL01hdGguc2luKGwrTWF0aC5QSS8yKSxmPXUvTWF0aC5zaW4oZCtNYXRoLlBJLzIpLGg9ZS5pc051bWJlcihoKT9oOjAsZj1lLmlzTnVtYmVyKGYpP2Y6MCx0aGlzLmRyYXdpbmdBcmVhPU1hdGgucm91bmQoeC0oZitoKS8yKSx0aGlzLnNldENlbnRlclBvaW50KGYsaCl9LHNldENlbnRlclBvaW50OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEud2lkdGgtZS1hLmRyYXdpbmdBcmVhLG49dCthLmRyYXdpbmdBcmVhO2EueENlbnRlcj1NYXRoLnJvdW5kKChuK2kpLzIrYS5sZWZ0KSxhLnlDZW50ZXI9TWF0aC5yb3VuZChhLmhlaWdodC8yK2EudG9wKX0sZ2V0SW5kZXhBbmdsZTpmdW5jdGlvbih0KXt2YXIgZT0yKk1hdGguUEkvdGhpcy5nZXRWYWx1ZUNvdW50KCksYT10aGlzLmNoYXJ0Lm9wdGlvbnMmJnRoaXMuY2hhcnQub3B0aW9ucy5zdGFydEFuZ2xlP3RoaXMuY2hhcnQub3B0aW9ucy5zdGFydEFuZ2xlOjAsaT1hKk1hdGguUEkqMi8zNjA7cmV0dXJuIHQqZS1NYXRoLlBJLzIraX0sZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihudWxsPT09dClyZXR1cm4gMDt2YXIgYT1lLmRyYXdpbmdBcmVhLyhlLm1heC1lLm1pbik7cmV0dXJuIGUub3B0aW9ucy5yZXZlcnNlPyhlLm1heC10KSphOih0LWUubWluKSphfSxnZXRQb2ludFBvc2l0aW9uOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0SW5kZXhBbmdsZSh0KTtyZXR1cm57eDpNYXRoLnJvdW5kKE1hdGguY29zKGkpKmUpK2EueENlbnRlcix5Ok1hdGgucm91bmQoTWF0aC5zaW4oaSkqZSkrYS55Q2VudGVyfX0sZ2V0UG9pbnRQb3NpdGlvbkZvclZhbHVlOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZ2V0UG9pbnRQb3NpdGlvbih0LHRoaXMuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoZSkpfSxnZXRCYXNlUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5taW4sYT10Lm1heDtyZXR1cm4gdC5nZXRQb2ludFBvc2l0aW9uRm9yVmFsdWUoMCx0LmJlZ2luQXRaZXJvPzA6MD5lJiYwPmE/YTplPjAmJmE+MD9lOjApfSxkcmF3OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxpPXQub3B0aW9ucyxuPWkuZ3JpZExpbmVzLG89aS50aWNrcyxyPWkuYW5nbGVMaW5lcyxsPWkucG9pbnRMYWJlbHMscz1lLmdldFZhbHVlT3JEZWZhdWx0O2lmKGkuZGlzcGxheSl7dmFyIGQ9dC5jdHgsdT1zKG8uZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLGM9cyhvLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGg9cyhvLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksZj1lLmZvbnRTdHJpbmcodSxjLGgpO2lmKGUuZWFjaCh0LnRpY2tzLGZ1bmN0aW9uKHIsbCl7aWYobD4wfHxpLnJldmVyc2Upe3ZhciBjPXQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUodC50aWNrc0FzTnVtYmVyc1tsXSksaD10LnlDZW50ZXItYztpZihuLmRpc3BsYXkmJjAhPT1sKWlmKGQuc3Ryb2tlU3R5bGU9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5jb2xvcixsLTEpLGQubGluZVdpZHRoPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ubGluZVdpZHRoLGwtMSksaS5saW5lQXJjKWQuYmVnaW5QYXRoKCksZC5hcmModC54Q2VudGVyLHQueUNlbnRlcixjLDAsMipNYXRoLlBJKSxkLmNsb3NlUGF0aCgpLGQuc3Ryb2tlKCk7ZWxzZXtkLmJlZ2luUGF0aCgpO2Zvcih2YXIgZz0wO2c8dC5nZXRWYWx1ZUNvdW50KCk7ZysrKXt2YXIgcD10LmdldFBvaW50UG9zaXRpb24oZyxjKTswPT09Zz9kLm1vdmVUbyhwLngscC55KTpkLmxpbmVUbyhwLngscC55KX1kLmNsb3NlUGF0aCgpLGQuc3Ryb2tlKCl9aWYoby5kaXNwbGF5KXt2YXIgbT1zKG8uZm9udENvbG9yLGEuZGVmYXVsdEZvbnRDb2xvcik7aWYoZC5mb250PWYsby5zaG93TGFiZWxCYWNrZHJvcCl7dmFyIGI9ZC5tZWFzdXJlVGV4dChyKS53aWR0aDtkLmZpbGxTdHlsZT1vLmJhY2tkcm9wQ29sb3IsZC5maWxsUmVjdCh0LnhDZW50ZXItYi8yLW8uYmFja2Ryb3BQYWRkaW5nWCxoLXUvMi1vLmJhY2tkcm9wUGFkZGluZ1ksYisyKm8uYmFja2Ryb3BQYWRkaW5nWCx1KzIqby5iYWNrZHJvcFBhZGRpbmdZKX1kLnRleHRBbGlnbj1cImNlbnRlclwiLGQudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsZC5maWxsU3R5bGU9bSxkLmZpbGxUZXh0KHIsdC54Q2VudGVyLGgpfX19KSwhaS5saW5lQXJjKXtkLmxpbmVXaWR0aD1yLmxpbmVXaWR0aCxkLnN0cm9rZVN0eWxlPXIuY29sb3I7Zm9yKHZhciBnPXQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoaS5yZXZlcnNlP3QubWluOnQubWF4KSxwPXMobC5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksbT1zKGwuZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksYj1zKGwuZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSx2PWUuZm9udFN0cmluZyhwLG0sYikseD10LmdldFZhbHVlQ291bnQoKS0xO3g+PTA7eC0tKXtpZihyLmRpc3BsYXkpe3ZhciB5PXQuZ2V0UG9pbnRQb3NpdGlvbih4LGcpO2QuYmVnaW5QYXRoKCksZC5tb3ZlVG8odC54Q2VudGVyLHQueUNlbnRlciksZC5saW5lVG8oeS54LHkueSksZC5zdHJva2UoKSxkLmNsb3NlUGF0aCgpfXZhciBrPXQuZ2V0UG9pbnRQb3NpdGlvbih4LGcrNSksUz1zKGwuZm9udENvbG9yLGEuZGVmYXVsdEZvbnRDb2xvcik7ZC5mb250PXYsZC5maWxsU3R5bGU9Uzt2YXIgdz10LnBvaW50TGFiZWxzLE09dGhpcy5nZXRJbmRleEFuZ2xlKHgpK01hdGguUEkvMixDPTM2MCpNLygyKk1hdGguUEkpJTM2MDswPT09Q3x8MTgwPT09Qz9kLnRleHRBbGlnbj1cImNlbnRlclwiOjE4MD5DP2QudGV4dEFsaWduPVwibGVmdFwiOmQudGV4dEFsaWduPVwicmlnaHRcIiw5MD09PUN8fDI3MD09PUM/ZC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIjpDPjI3MHx8OTA+Qz9kLnRleHRCYXNlbGluZT1cImJvdHRvbVwiOmQudGV4dEJhc2VsaW5lPVwidG9wXCIsZC5maWxsVGV4dCh3W3hdP3dbeF06XCJcIixrLngsay55KX19fX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcInJhZGlhbExpbmVhclwiLG4saSl9fSx7fV0sNDY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjt2YXIgaT10KDEpO2k9XCJmdW5jdGlvblwiPT10eXBlb2YgaT9pOndpbmRvdy5tb21lbnQsZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXt1bml0czpbe25hbWU6XCJtaWxsaXNlY29uZFwiLHN0ZXBzOlsxLDIsNSwxMCwyMCw1MCwxMDAsMjUwLDUwMF19LHtuYW1lOlwic2Vjb25kXCIsc3RlcHM6WzEsMiw1LDEwLDMwXX0se25hbWU6XCJtaW51dGVcIixzdGVwczpbMSwyLDUsMTAsMzBdfSx7bmFtZTpcImhvdXJcIixzdGVwczpbMSwyLDMsNiwxMl19LHtuYW1lOlwiZGF5XCIsc3RlcHM6WzEsMiw1XX0se25hbWU6XCJ3ZWVrXCIsbWF4U3RlcDo0fSx7bmFtZTpcIm1vbnRoXCIsbWF4U3RlcDozfSx7bmFtZTpcInF1YXJ0ZXJcIixtYXhTdGVwOjR9LHtuYW1lOlwieWVhclwiLG1heFN0ZXA6ITF9XX0sbj17cG9zaXRpb246XCJib3R0b21cIix0aW1lOntwYXJzZXI6ITEsZm9ybWF0OiExLHVuaXQ6ITEscm91bmQ6ITEsZGlzcGxheUZvcm1hdDohMSxpc29XZWVrZGF5OiExLG1pblVuaXQ6XCJtaWxsaXNlY29uZFwiLGRpc3BsYXlGb3JtYXRzOnttaWxsaXNlY29uZDpcImg6bW06c3MuU1NTIGFcIixzZWNvbmQ6XCJoOm1tOnNzIGFcIixtaW51dGU6XCJoOm1tOnNzIGFcIixob3VyOlwiTU1NIEQsIGhBXCIsZGF5OlwibGxcIix3ZWVrOlwibGxcIixtb250aDpcIk1NTSBZWVlZXCIscXVhcnRlcjpcIltRXVEgLSBZWVlZXCIseWVhcjpcIllZWVlcIn19LHRpY2tzOnthdXRvU2tpcDohMX19LG89dC5TY2FsZS5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oKXtpZighaSl0aHJvdyBuZXcgRXJyb3IoXCJDaGFydC5qcyAtIE1vbWVudC5qcyBjb3VsZCBub3QgYmUgZm91bmQhIFlvdSBtdXN0IGluY2x1ZGUgaXQgYmVmb3JlIENoYXJ0LmpzIHRvIHVzZSB0aGUgdGltZSBzY2FsZS4gRG93bmxvYWQgYXQgaHR0cHM6Ly9tb21lbnRqcy5jb21cIik7dC5TY2FsZS5wcm90b3R5cGUuaW5pdGlhbGl6ZS5jYWxsKHRoaXMpfSxnZXRMYWJlbE1vbWVudDpmdW5jdGlvbih0LGUpe3JldHVybiBudWxsPT09dHx8bnVsbD09PWU/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgdGhpcy5sYWJlbE1vbWVudHNbdF0/dGhpcy5sYWJlbE1vbWVudHNbdF1bZV06bnVsbH0sZ2V0TGFiZWxEaWZmOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcztyZXR1cm4gbnVsbD09PXR8fG51bGw9PT1lP251bGw6KHZvaWQgMD09PWEubGFiZWxEaWZmcyYmYS5idWlsZExhYmVsRGlmZnMoKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5sYWJlbERpZmZzW3RdP2EubGFiZWxEaWZmc1t0XVtlXTpudWxsKX0sZ2V0TW9tZW50U3RhcnRPZjpmdW5jdGlvbih0KXt2YXIgZT10aGlzO3JldHVyblwid2Vla1wiPT09ZS5vcHRpb25zLnRpbWUudW5pdCYmZS5vcHRpb25zLnRpbWUuaXNvV2Vla2RheSE9PSExP3QuY2xvbmUoKS5zdGFydE9mKFwiaXNvV2Vla1wiKS5pc29XZWVrZGF5KGUub3B0aW9ucy50aW1lLmlzb1dlZWtkYXkpOnQuY2xvbmUoKS5zdGFydE9mKGUudGlja1VuaXQpfSxkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxhYmVsTW9tZW50cz1bXTt2YXIgYT1bXTt0LmNoYXJ0LmRhdGEubGFiZWxzJiZ0LmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD4wPyhlLmVhY2godC5jaGFydC5kYXRhLmxhYmVscyxmdW5jdGlvbihlKXt2YXIgaT10LnBhcnNlVGltZShlKTtpLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZpLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLGEucHVzaChpKSl9LHQpLHQuZmlyc3RUaWNrPWkubWluLmNhbGwodCxhKSx0Lmxhc3RUaWNrPWkubWF4LmNhbGwodCxhKSk6KHQuZmlyc3RUaWNrPW51bGwsdC5sYXN0VGljaz1udWxsKSxlLmVhY2godC5jaGFydC5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKG4sbyl7dmFyIHI9W10sbD10LmNoYXJ0LmlzRGF0YXNldFZpc2libGUobyk7XCJvYmplY3RcIj09dHlwZW9mIG4uZGF0YVswXSYmbnVsbCE9PW4uZGF0YVswXT9lLmVhY2gobi5kYXRhLGZ1bmN0aW9uKGUpe3ZhciBhPXQucGFyc2VUaW1lKHQuZ2V0UmlnaHRWYWx1ZShlKSk7YS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmYS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxyLnB1c2goYSksbCYmKHQuZmlyc3RUaWNrPW51bGwhPT10LmZpcnN0VGljaz9pLm1pbih0LmZpcnN0VGljayxhKTphLHQubGFzdFRpY2s9bnVsbCE9PXQubGFzdFRpY2s/aS5tYXgodC5sYXN0VGljayxhKTphKSl9LHQpOnI9YSx0LmxhYmVsTW9tZW50cy5wdXNoKHIpfSx0KSx0Lm9wdGlvbnMudGltZS5taW4mJih0LmZpcnN0VGljaz10LnBhcnNlVGltZSh0Lm9wdGlvbnMudGltZS5taW4pKSx0Lm9wdGlvbnMudGltZS5tYXgmJih0Lmxhc3RUaWNrPXQucGFyc2VUaW1lKHQub3B0aW9ucy50aW1lLm1heCkpLHQuZmlyc3RUaWNrPSh0LmZpcnN0VGlja3x8aSgpKS5jbG9uZSgpLHQubGFzdFRpY2s9KHQubGFzdFRpY2t8fGkoKSkuY2xvbmUoKX0sYnVpbGRMYWJlbERpZmZzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmxhYmVsRGlmZnM9W107dmFyIGE9W107dC5jaGFydC5kYXRhLmxhYmVscyYmdC5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGg+MCYmZS5lYWNoKHQuY2hhcnQuZGF0YS5sYWJlbHMsZnVuY3Rpb24oZSl7dmFyIGk9dC5wYXJzZVRpbWUoZSk7aS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmaS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxhLnB1c2goaS5kaWZmKHQuZmlyc3RUaWNrLHQudGlja1VuaXQsITApKSl9LHQpLGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24oaSl7dmFyIG49W107XCJvYmplY3RcIj09dHlwZW9mIGkuZGF0YVswXSYmbnVsbCE9PWkuZGF0YVswXT9lLmVhY2goaS5kYXRhLGZ1bmN0aW9uKGUpe3ZhciBhPXQucGFyc2VUaW1lKHQuZ2V0UmlnaHRWYWx1ZShlKSk7YS5pc1ZhbGlkKCkmJih0Lm9wdGlvbnMudGltZS5yb3VuZCYmYS5zdGFydE9mKHQub3B0aW9ucy50aW1lLnJvdW5kKSxuLnB1c2goYS5kaWZmKHQuZmlyc3RUaWNrLHQudGlja1VuaXQsITApKSl9LHQpOm49YSx0LmxhYmVsRGlmZnMucHVzaChuKX0sdCl9LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgaT10aGlzO2kuY3R4LnNhdmUoKTt2YXIgbj1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250U2l6ZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUpLG89ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udFN0eWxlLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U3R5bGUpLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGlja3MuZm9udEZhbWlseSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udEZhbWlseSksbD1lLmZvbnRTdHJpbmcobixvLHIpO2lmKGkuY3R4LmZvbnQ9bCxpLnRpY2tzPVtdLGkudW5pdFNjYWxlPTEsaS5zY2FsZVNpemVJblVuaXRzPTAsaS5vcHRpb25zLnRpbWUudW5pdClpLnRpY2tVbml0PWkub3B0aW9ucy50aW1lLnVuaXR8fFwiZGF5XCIsaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW2kudGlja1VuaXRdLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCksaS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUsMSk7ZWxzZXt2YXIgcz1pLmlzSG9yaXpvbnRhbCgpP2kud2lkdGgtKGkucGFkZGluZ0xlZnQraS5wYWRkaW5nUmlnaHQpOmkuaGVpZ2h0LShpLnBhZGRpbmdUb3AraS5wYWRkaW5nQm90dG9tKSxkPWkudGlja0Zvcm1hdEZ1bmN0aW9uKGkuZmlyc3RUaWNrLDAsW10pLHU9aS5jdHgubWVhc3VyZVRleHQoZCkud2lkdGgsYz1NYXRoLmNvcyhlLnRvUmFkaWFucyhpLm9wdGlvbnMudGlja3MubWF4Um90YXRpb24pKSxoPU1hdGguc2luKGUudG9SYWRpYW5zKGkub3B0aW9ucy50aWNrcy5tYXhSb3RhdGlvbikpO3U9dSpjK24qaDt2YXIgZj1zL3U7aS50aWNrVW5pdD1pLm9wdGlvbnMudGltZS5taW5Vbml0LGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCksaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW2kudGlja1VuaXRdO2Zvcih2YXIgZz0wLHA9YS51bml0c1tnXTtnPGEudW5pdHMubGVuZ3RoOyl7aWYoaS51bml0U2NhbGU9MSxlLmlzQXJyYXkocC5zdGVwcykmJk1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZik8ZS5tYXgocC5zdGVwcykpe2Zvcih2YXIgbT0wO208cC5zdGVwcy5sZW5ndGg7KyttKWlmKHAuc3RlcHNbbV0+PU1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZikpe2kudW5pdFNjYWxlPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpbWUudW5pdFN0ZXBTaXplLHAuc3RlcHNbbV0pO2JyZWFrfWJyZWFrfWlmKHAubWF4U3RlcD09PSExfHxNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpPHAubWF4U3RlcCl7aS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUsTWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKSk7YnJlYWt9KytnLHA9YS51bml0c1tnXSxpLnRpY2tVbml0PXAubmFtZTt2YXIgYj1pLmZpcnN0VGljay5kaWZmKGkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljayksaS50aWNrVW5pdCwhMCksdj1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljay5jbG9uZSgpLmFkZCgxLGkudGlja1VuaXQpKS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk7aS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKStiK3YsaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXRzW3AubmFtZV19fXZhciB4O2lmKGkub3B0aW9ucy50aW1lLm1pbj94PWkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljayk6KGkuZmlyc3RUaWNrPWkuZ2V0TW9tZW50U3RhcnRPZihpLmZpcnN0VGljaykseD1pLmZpcnN0VGljayksIWkub3B0aW9ucy50aW1lLm1heCl7dmFyIHk9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2spLGs9eS5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk7MD5rP2kubGFzdFRpY2s9aS5nZXRNb21lbnRTdGFydE9mKGkubGFzdFRpY2suYWRkKDEsaS50aWNrVW5pdCkpOms+PTAmJihpLmxhc3RUaWNrPXkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCl9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdCYmKGkuZGlzcGxheUZvcm1hdD1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0KSxpLnRpY2tzLnB1c2goaS5maXJzdFRpY2suY2xvbmUoKSk7Zm9yKHZhciBTPTE7Uzw9aS5zY2FsZVNpemVJblVuaXRzOysrUyl7dmFyIHc9eC5jbG9uZSgpLmFkZChTLGkudGlja1VuaXQpO2lmKGkub3B0aW9ucy50aW1lLm1heCYmdy5kaWZmKGkubGFzdFRpY2ssaS50aWNrVW5pdCwhMCk+PTApYnJlYWs7UyVpLnVuaXRTY2FsZT09PTAmJmkudGlja3MucHVzaCh3KX12YXIgTT1pLnRpY2tzW2kudGlja3MubGVuZ3RoLTFdLmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0KTsoMCE9PU18fDA9PT1pLnNjYWxlU2l6ZUluVW5pdHMpJiYoaS5vcHRpb25zLnRpbWUubWF4PyhpLnRpY2tzLnB1c2goaS5sYXN0VGljay5jbG9uZSgpKSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkudGlja3NbMF0saS50aWNrVW5pdCwhMCkpOihpLnRpY2tzLnB1c2goaS5sYXN0VGljay5jbG9uZSgpKSxpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApKSksaS5jdHgucmVzdG9yZSgpLGkubGFiZWxEaWZmcz12b2lkIDB9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5jaGFydC5kYXRhLmxhYmVscyYmdDxhLmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD9hLmNoYXJ0LmRhdGEubGFiZWxzW3RdOlwiXCI7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhWzBdJiYoaT1hLmdldFJpZ2h0VmFsdWUoYS5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pKSxhLm9wdGlvbnMudGltZS50b29sdGlwRm9ybWF0JiYoaT1hLnBhcnNlVGltZShpKS5mb3JtYXQoYS5vcHRpb25zLnRpbWUudG9vbHRpcEZvcm1hdCkpLGl9LHRpY2tGb3JtYXRGdW5jdGlvbjpmdW5jdGlvbih0LGEsaSl7dmFyIG49dC5mb3JtYXQodGhpcy5kaXNwbGF5Rm9ybWF0KSxvPXRoaXMub3B0aW9ucy50aWNrcyxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5jYWxsYmFjayxvLnVzZXJDYWxsYmFjayk7cmV0dXJuIHI/cihuLGEsaSk6bn0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QudGlja01vbWVudHM9dC50aWNrcyx0LnRpY2tzPXQudGlja3MubWFwKHQudGlja0Zvcm1hdEZ1bmN0aW9uLHQpfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49bnVsbDtpZih2b2lkIDAhPT1lJiZ2b2lkIDAhPT1hJiYobj1pLmdldExhYmVsRGlmZihhLGUpKSxudWxsPT09biYmKHQmJnQuaXNWYWxpZHx8KHQ9aS5wYXJzZVRpbWUoaS5nZXRSaWdodFZhbHVlKHQpKSksdCYmdC5pc1ZhbGlkJiZ0LmlzVmFsaWQoKSYmKG49dC5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApKSksbnVsbCE9PW4pe3ZhciBvPTAhPT1uP24vaS5zY2FsZVNpemVJblVuaXRzOm47aWYoaS5pc0hvcml6b250YWwoKSl7dmFyIHI9aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCksbD1yKm8raS5wYWRkaW5nTGVmdDtyZXR1cm4gaS5sZWZ0K01hdGgucm91bmQobCl9dmFyIHM9aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtpLnBhZGRpbmdCb3R0b20pLGQ9cypvK2kucGFkZGluZ1RvcDtyZXR1cm4gaS50b3ArTWF0aC5yb3VuZChkKX19LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja01vbWVudHNbdF0sbnVsbCxudWxsKX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5pc0hvcml6b250YWwoKT9lLndpZHRoLShlLnBhZGRpbmdMZWZ0K2UucGFkZGluZ1JpZ2h0KTplLmhlaWdodC0oZS5wYWRkaW5nVG9wK2UucGFkZGluZ0JvdHRvbSksbj0odC0oZS5pc0hvcml6b250YWwoKT9lLmxlZnQrZS5wYWRkaW5nTGVmdDplLnRvcCtlLnBhZGRpbmdUb3ApKS9hO3JldHVybiBuKj1lLnNjYWxlU2l6ZUluVW5pdHMsZS5maXJzdFRpY2suY2xvbmUoKS5hZGQoaS5kdXJhdGlvbihuLGUudGlja1VuaXQpLmFzU2Vjb25kcygpLFwic2Vjb25kc1wiKX0scGFyc2VUaW1lOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUub3B0aW9ucy50aW1lLnBhcnNlcj9pKHQsZS5vcHRpb25zLnRpbWUucGFyc2VyKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9wdGlvbnMudGltZS5wYXJzZXI/ZS5vcHRpb25zLnRpbWUucGFyc2VyKHQpOlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuZ2V0TW9udGh8fFwibnVtYmVyXCI9PXR5cGVvZiB0P2kodCk6dC5pc1ZhbGlkJiZ0LmlzVmFsaWQoKT90Olwic3RyaW5nXCIhPXR5cGVvZiBlLm9wdGlvbnMudGltZS5mb3JtYXQmJmUub3B0aW9ucy50aW1lLmZvcm1hdC5jYWxsPyhjb25zb2xlLndhcm4oXCJvcHRpb25zLnRpbWUuZm9ybWF0IGlzIGRlcHJlY2F0ZWQgYW5kIHJlcGxhY2VkIGJ5IG9wdGlvbnMudGltZS5wYXJzZXIuIFNlZSBodHRwOi8vbm5uaWNrLmdpdGh1Yi5pby9DaGFydC5qcy9kb2NzLXYyLyNzY2FsZXMtdGltZS1zY2FsZVwiKSxlLm9wdGlvbnMudGltZS5mb3JtYXQodCkpOmkodCxlLm9wdGlvbnMudGltZS5mb3JtYXQpfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwidGltZVwiLG8sbil9fSx7MToxfV19LHt9LFs3XSkoNyl9KTsiLCIvL1BsYXRmb3JtIExvZ28nc1xuZnVuY3Rpb24gUGxhdGZvcm1Mb2dvKHBsYXRmb3JtbmFhbSlcbntcbiAgICBwbGF0Zm9ybW5hYW0gPSBwbGF0Zm9ybW5hYW0udG9VcHBlckNhc2UoKTtcbiAgICBzd2l0Y2ggKHBsYXRmb3JtbmFhbSlcbiAgICB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gcGxhdGZvcm1uYWFtO1xuXG4gICAgICAgIC8vcGxhdGZvcm1zIC0gc3BlbGNvbXB1dGVyc1xuICAgICAgICBjYXNlIFwiUFMxXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMxLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlBTM1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMy5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJQUzJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczIucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiUFM0XCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHM0LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlBDXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvd2luZG93cy5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJYQk9YXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMveGJveC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJORVNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uZXMucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiTjY0XCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvbjY0LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIk5JTlRFTkRPIFNXSVRDSFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3N3aXRjaC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJOR0NcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uZ2MucG5nJyAvPlwiO1xuXG4gICAgICAgIC8vcHVibGlzaGVycyAtIHVpdGdldmVyc1xuICAgICAgICBjYXNlIFwiTklOVEVORE9cIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL25pbnRlbmRvLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlVCSVNPRlRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3ViaXNvZnQucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiRUxFQ1RST05JQyBBUlRTXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9lYS5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJTT05ZXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9zb255LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlJPQ0tTVEFSXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9yb2Nrc3Rhci5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJTRUdBXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvcHVibGlzaGVycy9zZWdhLnBuZycgLz5cIjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIEJlc2NoaWtiYWFyaGVpZEtsZXVyKHN0b2NrdmFsdWUpe1xuICAgIFxuICAgICAgICBpZiAoc3RvY2t2YWx1ZTw9MCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2F2YWlsYWJpbGl0eS9idXR0b25yZWQucG5nJyAvPlwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0b2NrdmFsdWU+PTEpIHtcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9hdmFpbGFiaWxpdHkvYnV0dG9uZ3JlZW4ucG5nJyAvPlwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHN0b2NrdmFsdWVcbiAgICAgICAgfVxufSIsIiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJhLm9yZGVyX19uYXZpZ2F0ZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIikgPT0gZmFsc2UpXG4gICAge1xuICAgICAgICAvLyBHZXQgdGhlIG9yZGVyIHN0ZXBcbiAgICAgICAgdmFyIHN0ZXAgPSAgJCh0aGlzKS5kYXRhKFwic3RlcFwiKTtcblxuICAgICAgICAvLyBTZXQgdGhlIG5ldyBvcmRlciBzdGVwIGFzIGFjdGl2ZVxuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaS5cIiArIHN0ZXApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICQoXCIub3JkZXJfX3N0ZXBcIikucmVtb3ZlQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgICAgICAkKFwiI1wiICsgc3RlcCkuYWRkQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgIH1cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2hhbmdlXCIsIFwic2VsZWN0I3NoaXBwaW5nX21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcbntcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcblxuICAgIGlmICh2YWwgIT0gXCJcIilcbiAgICB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICB9XG5cbiAgICAkKFwiLnNoaXBwaW5nX19maWVsZHNcIikuaGlkZSgpO1xuICAgICQoXCIuXCIgKyB2YWwgKyBcIl9maWVsZHNcIikuc2hvdygpO1xufSlcblxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3QjcGF5bWVudF9tZXRob2RcIiwgZnVuY3Rpb24gKGUpXG57XG4gICAgdmFyIHZhbCA9ICQodGhpcykudmFsKCk7XG5cbiAgICBpZiAodmFsICE9IFwiXCIpXG4gICAge1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICBcbiAgICB9XG59KTsiLCJ2YXIgUm91dGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBiYXNlVXJsID0gXCJwcm9qZWN0LXdlYnNob3AvXCI7XG5cbiAgICBmdW5jdGlvbiByb3V0ZSh1cmwsIGhpc3RvcnkpXG4gICAge1xuICAgICAgICBpZiAoaXNJbnRlcm5hbCh1cmwpID09IGZhbHNlIHx8IHVybCA9PSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydGljbGVzID0gZ2V0UGFydGljbGVzKHVybCk7XG5cbiAgICAgICAgc3dpdGNoKHBhcnRpY2xlc1swXSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2FzZSBcIlwiOlxuICAgICAgICAgICAgY2FzZSBcImluZGV4Lmh0bWxcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0c1wiOlxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0c0NvbnRyb2xsZXIobmV3IFByb2R1Y3RzVmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdHNNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicHJvZHVjdFwiOlxuICAgICAgICAgICAgICAgIG5ldyBQcm9kdWN0Q29udHJvbGxlcihuZXcgUHJvZHVjdFZpZXdIZWxwZXIoKSwgbmV3IFByb2R1Y3RNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxvZ2luXCI6XG4gICAgICAgICAgICAgICAgbmV3IExvZ2luQ29udHJvbGxlcihuZXcgTG9naW5WaWV3SGVscGVyKCksIG5ldyBMb2dpbk1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJsb2dvdXRcIjpcbiAgICAgICAgICAgICAgICBuZXcgTG9nb3V0Q29udHJvbGxlcihuZXcgTG9nb3V0Vmlld0hlbHBlcigpLCBuZXcgTG9nb3V0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZ2lzdGVyXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlZ2lzdGVyQ29udHJvbGxlcihuZXcgUmVnaXN0ZXJWaWV3SGVscGVyKCksIG5ldyBSZWdpc3Rlck1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZXNldHBhc3N3b3JkXCI6XG4gICAgICAgICAgICAgICAgbmV3IFJlc2V0UGFzc3dvcmRDb250cm9sbGVyKG5ldyBSZXNldFBhc3N3b3JkVmlld0hlbHBlcigpLCBuZXcgUmVzZXRQYXNzd29yZE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ3aXNobGlzdFwiOlxuICAgICAgICAgICAgICAgIG5ldyBXaXNobGlzdENvbnRyb2xsZXIobmV3IFdpc2hsaXN0Vmlld0hlbHBlcigpLCBuZXcgV2lzaGxpc3RNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic3RhdHNcIjpcbiAgICAgICAgICAgICAgICBuZXcgU3RhdHNDb250cm9sbGVyKG5ldyBTdGF0c1ZpZXdIZWxwZXIoKSwgbmV3IFN0YXRzTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkbWluXCI6XG4gICAgICAgICAgICAgICAgbmV3IEFkbWluQ29udHJvbGxlcihuZXcgQWRtaW5WaWV3SGVscGVyKCksIG5ldyBBZG1pbk1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhZG1pbl91c2VyXCI6XG4gICAgICAgICAgICAgICAgbmV3IEFkbWluVXNlckNvbnRyb2xsZXIobmV3IEFkbWluVXNlclZpZXdIZWxwZXIoKSwgbmV3IEFkbWluVXNlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJmYXZvcml0ZWxpc3RcIjogXG4gICAgICAgICAgICAgICAgbmV3IEZhdm9yaXRlTGlzdENvbnRyb2xsZXIobmV3IEZhdm9yaXRlTGlzdFZpZXdIZWxwZXIoKSwgbmV3IEZhdm9yaXRlTGlzdE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja291dFwiOlxuICAgICAgICAgICAgICAgIG5ldyBDaGVja291dENvbnRyb2xsZXIobmV3IENoZWNrb3V0Vmlld0hlbHBlcigpLCBuZXcgQ2hlY2tvdXRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3JkZXJzXCI6XG4gICAgICAgICAgICAgICAgbmV3IE9yZGVyc0NvbnRyb2xsZXIobmV3IE9yZGVyc1ZpZXdIZWxwZXIsIG5ldyBPcmRlcnNNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwib3JkZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJDb250cm9sbGVyKG5ldyBPcmRlclZpZXdIZWxwZXIsIG5ldyBPcmRlck1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwdWJsaWNfd2lzaGxpc3RcIjpcbiAgICAgICAgICAgICAgICBuZXcgUHVibGljV2lzaGxpc3RDb250cm9sbGVyKG5ldyBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIoKSwgbmV3IFB1YmxpY1dpc2hsaXN0TW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3JDb250cm9sbGVyKG5ldyBFcnJvclZpZXdIZWxwZXIoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhpc3RvcnkgIT0gZmFsc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh1cmwgIT0gXCJcIiAmJiB0eXBlb2YgdXJsID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB3cml0ZUhpc3Rvcnkoe30sIFwiQS1aIEdhbWVzXCIsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAvLyBMb2FkIHNjcmVlbiBhbmQgY2xvc2UgY2FydFxuICAgICAgICAgICAgICAgICQoXCIuc2lkZWJhclwiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgJChcIi5vdmVybGF5XCIpLnJlbW92ZUNsYXNzKFwib3ZlcmxheS0tdmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgICAgICAgICAgICAgc2hvd0xvYWRTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIG9mIHBhZ2VcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0ludGVybmFsKHVybClcbiAgICB7XG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcImh0dHBcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJ3d3dcIikgIT0gLTEgfHwgdXJsLmluZGV4T2YoXCJtYWlsdG9cIikgIT0gLTEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFydGljbGVzKHVybClcbiAgICB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgL1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoXCIvXCIpID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIGJhc2UgdXJsIHNldCwgcmVtb3ZlIHRoZSBiYXNlIHVybFxuICAgICAgICBpZiAodGhpcy5iYXNlVXJsICE9IG51bGwgJiYgdXJsLmluZGV4T2YodGhpcy5iYXNlVXJsKSAhPSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZyh1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICsgdGhpcy5iYXNlVXJsLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsLnNwbGl0KC9cXC8oLispPy8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd3JpdGVIaXN0b3J5KG9iamVjdCwgdGl0bGUsIHVybClcbiAgICB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShvYmplY3QsIHRpdGxlLCB1cmwpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRlOiByb3V0ZVxuICAgIH1cbn0iLCIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpXG57XG4gICAgJChcIi5zaWRlYmFyLXRvZ2dsZVwiKS5jbGljayhmdW5jdGlvbiAoZSlcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIElkIG9mIHRoZSBzaWRlYmFyIHRvIHRvZ2dsZVxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcykuZGF0YShcInNpZGViYXJcIik7XG5cbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiI1wiICsgc2lkZWJhcikpO1xuICAgIH0pO1xuXG4gICAgJChcIi5zaWRlYmFyX19jbG9zZVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCQodGhpcykucGFyZW50KCkucGFyZW50KCkpO1xuICAgIH0pXG5cbiAgICAkKFwiLm92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdG9nZ2xlU2lkZWJhcigkKFwiLnNpZGViYXJcIiksIHRydWUpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdG9nZ2xlU2lkZWJhcihzaWRlYmFyLCBmb3JjZUNsb3NlKVxuICAgIHtcbiAgICAgICAgaWYgKGZvcmNlQ2xvc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoc2lkZWJhcikucmVtb3ZlQ2xhc3MoXCJzaWRlYmFyLS1vcGVuXCIpOyAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJChzaWRlYmFyKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAkKFwiLm92ZXJsYXlcIikudG9nZ2xlQ2xhc3MoXCJvdmVybGF5LS12aXNpYmxlXCIpO1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7XG4gICAgfVxufSk7IiwiJChkb2N1bWVudCkub24oXCJtb3VzZWVudGVyXCIsIFwiLmhhc1Rvb2x0aXBcIiwgZnVuY3Rpb24oZXZlbnQpXG57XG4gICAgLy8gR2V0IGNvbnRlbnQgYW5kIHBvc2l0aW9uXG4gICAgdmFyIGNvbnRlbnQgID0gJCh0aGlzKS5kYXRhKFwidG9vbHRpcFwiKTtcbiAgICB2YXIgcG9zaXRpb24gPSBnZXRPZmZzZXQodGhpcyk7XG5cbiAgICAvLyBDcmVhdGUgdG9vbHRpcFxuICAgIHZhciB0b29sdGlwID0gJChcIjxkaXYgY2xhc3M9J3Rvb2x0aXAnPlwiICsgY29udGVudCArIFwiPC9kaXY+XCIpO1xuICAgICQoXCJib2R5XCIpLmFwcGVuZCh0b29sdGlwKTtcblxuICAgIC8vIENhbGN1bGF0ZSBuZXcgcG9zaXRpb25zXG4gICAgcG9zaXRpb24udG9wICA9IHBvc2l0aW9uLnRvcCArICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICBwb3NpdGlvbi5sZWZ0ID0gcG9zaXRpb24ubGVmdCArICgkKHRoaXMpLm91dGVyV2lkdGgoKSAvIDIpIC0gKCQoXCIudG9vbHRpcFwiKS5vdXRlcldpZHRoKCkgLyAyKTtcblxuICAgIC8vIENoYW5nZSBwb3NpdGlvbiBvZiB0b29sdGlwXG4gICAgdG9vbHRpcC5jc3MoXCJsZWZ0XCIsIHBvc2l0aW9uLmxlZnQpO1xuICAgIHRvb2x0aXAuY3NzKFwidG9wXCIsIHBvc2l0aW9uLnRvcCk7XG59KTtcblxuJChkb2N1bWVudCkub24oXCJtb3VzZWxlYXZlXCIsIFwiLmhhc1Rvb2x0aXBcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAkKFwiYm9keVwiKS5maW5kKFwiLnRvb2x0aXBcIikucmVtb3ZlKCk7XG59KTtcblxuZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKVxue1xuICAgIGVsID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogZWwubGVmdCArIHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICB0b3A6IGVsLnRvcCArIHdpbmRvdy5zY3JvbGxZXG4gIH1cbn0iLCIvKipcbiAqIEhlbHBlciBmb3IgZmluZGluZywgY3JlYXRpbmcgYW5kIGRlbGV0aW5nIGNvb2tpZXNcbiAqL1xuZnVuY3Rpb24gQ29va2llSGVscGVyKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmdldENvb2tpZSA9IGZ1bmN0aW9uKG5hbWUpXG4gICAge1xuICAgICAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKylcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZXNbaV0uc3BsaXQoXCI9XCIpO1xuXG4gICAgICAgICAgICBpZiAoY29va2llWzBdLnRyaW0oKSA9PSBuYW1lKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb29raWVbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVmFsdWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdGhpcy5jcmVhdGVDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSlcbiAgICB7XG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoKTsgXG4gICAgICAgIGQuc2V0VGltZShkLmdldFRpbWUoKSArICgxKjI0KjYwKjYwKjEwMDApKTsgXG4gICAgICAgIHZhciBleHBpcmVzID0gXCJleHBpcmVzPVwiKyBkLnRvVVRDU3RyaW5nKCk7IFxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPScgKyB2YWx1ZSArICc7JyArIGV4cGlyZXMgKyAnO3BhdGg9Lyc7IFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhIGNvb2tpZSBhbmQgaXQncyB2YWx1ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICBOYW1lIG9mIHRoZSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICAgIHRoaXMuZGVsZXRlQ29va2llID0gZnVuY3Rpb24obmFtZSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyAnPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVDsnO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSGVscGVyIGZvciBjYXJ0IGFjdGlvbnNcbiAqL1xuZnVuY3Rpb24gRmF2b3JpdGVMaXN0SGVscGVyKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICAvL3RoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXG4gICAgdmFyIGFkZEl0ZW0gPSBmdW5jdGlvbihlYW5fbnVtYmVyKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwODEvZmF2b3JpdGVsaXN0L1wiICsgZWFuX251bWJlciwgLy8gXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3QvXCJcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHt9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBzdWNjZXN2b2wgdG9lZ2V2b2VnZCBhYW4gamUgZmF2b3JpZXRlbi5cIik7IC8vIGltIHN0YWF0IHZvb3IgaW1hZ2luYXJ5L2RlbmtiZWVsZGlnXG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRJdGVtOiBhZGRJdGVtXG4gICAgfVxufSIsInZhciBSb3V0ZXIgICAgICAgPSBuZXcgUm91dGVyKCk7XG52YXIgQ29va2llSGVscGVyID0gbmV3IENvb2tpZUhlbHBlcigpO1xudmFyIFVzZXJIZWxwZXIgICAgID0gbmV3IFVzZXJIZWxwZXIoKTtcbnZhciBXaXNobGlzdEhlbHBlciA9IG5ldyBXaXNobGlzdEhlbHBlcigpO1xuXG5mdW5jdGlvbiBzaG93TG9hZFNjcmVlbigpXG57XG4gICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48ZGl2IGNsYXNzPVwiYm91bmNlMVwiPjwvZGl2PjxkaXYgY2xhc3M9XCJib3VuY2UyXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTNcIj48L2Rpdj4gPC9kaXY+Jyk7XG59XG5cblxuZnVuY3Rpb24gb25Mb2FkUGFnZSgpXG57XG4gICAgJChcIi5tbWVudVwiKS5lbXB0eSgpO1xuICAgICQoXCIubmF2XCIpLmNsb25lKCkuYXBwZW5kVG8oXCIubW1lbnVcIik7XG5cbiAgICBpZiAoVXNlckhlbHBlci5pc0FkbWluKCkpXG4gICAge1xuICAgICAgICAkKFwiLnZpc2libGUtYWRtaW5cIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAkKFwiLnZpc2libGUtY3VzdG9tZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChVc2VySGVscGVyLmlzQ3VzdG9tZXIoKSlcbiAgICB7XG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQoXCIudmlzaWJsZS1hZG1pblwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjaW5sb2dnZW5fdGV4dFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgfVxufSIsIiQuZm4uc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24oKVxue1xuICAgIHZhciBvID0ge307XG4gICAgdmFyIGEgPSB0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgJC5lYWNoKGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAob1t0aGlzLm5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICghb1t0aGlzLm5hbWVdLnB1c2gpIHtcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0gPSBbb1t0aGlzLm5hbWVdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdLnB1c2godGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IHRoaXMudmFsdWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbztcbn07IiwiLyoqXG4gKiBIZWxwZXIgZm9yIHVzZXIgcmVsYXRlZCBzdHVmZlxuICovXG5mdW5jdGlvbiBVc2VySGVscGVyKClcbntcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBhIGd1ZXN0IChub3QgbG9nZ2VkIGluKVxuICAgICAqL1xuICAgIHRoaXMuaXNMb2dlZEluID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gIT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhIGN1c3RvbWVyXG4gICAgICovXG4gICAgdGhpcy5pc0N1c3RvbWVyID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcblxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiY3VzdG9tZXJcIiB8fCB1c2VydHlwZSA9PSBcImFkbWluXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGN1cnJlbnQgdXNlciBpcyBhZG1pblxuICAgICAqL1xuICAgIHRoaXMuaXNBZG1pbiA9IGZ1bmN0aW9uKClcbiAgICB7XG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgdXNlcnR5cGUgPSB0aGlzLmRlY29kZVRva2VuKCkudXNlcnR5cGU7XG5cbiAgICAgICAgICAgIGlmICh1c2VydHlwZSA9PSBcImFkbWluXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjb2RlIHRoZSBKV1QgdG9rZW5cbiAgICAgKi9cbiAgICB0aGlzLmRlY29kZVRva2VuID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKTtcblxuICAgICAgICBpZiAoYWNjZXNzVG9rZW4gIT0gdW5kZWZpbmVkICYmIGFjY2Vzc1Rva2VuICAhPSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGFjY2Vzc1Rva2VuLnNwbGl0KFwiLlwiKVsxXTtcblxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYXRvYihwYXlsb2FkKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IHVzZXJcbiAgICAgKi9cbiAgICB0aGlzLmdldFVzZXJJbmZvID0gZnVuY3Rpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cbn0iLCIvKipcbiAqIEhlbHBlciBmb3IgY2FydCBhY3Rpb25zXG4gKi9cbmZ1bmN0aW9uIFdpc2hsaXN0SGVscGVyKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHZhbHVlIG9mIGEgY29va2llXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkICBQcm9kY3V0IElEIHRvIHJlbW92ZSBmb20gdGhlIGNhclxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLmFkZEl0ZW0gPSBmdW5jdGlvbihlYW5fbnVtYmVyKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpICsgXCIvXCIgKyBlYW5fbnVtYmVyLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJIZXQgcHJvZHVjdCBpcyBzdWNjZXN2b2wgdG9lZ2V2b2VnZCBhYW4gamUgdmVybGFuZ2xpanN0LlwiKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJEaXQgcHJvZHVjdCBzdGFhdCBhbCBvcCBqZSB2ZXJsYW5nbGlqc3QuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmNvcHlMaW5rID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgLy8gU2VsZWN0IHRoZSBjb250ZW50XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dCNwdWJsaWNfbGlua1wiKS5zZWxlY3QoKTtcbiAgICAgICAgLy8gQ29weSB0byB0aGUgY2xpcGJvYXJkXG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgfVxufSIsInZhciBBZG1pbk1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzXCIsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcbiAgICB9XG5cbn07IiwidmFyIEFkbWluVXNlck1vZGVsID0gZnVuY3Rpb24oaWQpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBpZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVVc2VySW5mbyhkYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vIE1vZGlmeSBkYXRhIGJlZm9yZSBzZW5kaW5nIChhbHNvIGNvbnZlcnQgdG8gVVRDKVxuICAgICAgICBkYXRhLmRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRhLmphYXIsIGRhdGEubWFhbmQsIGRhdGEuZGFnKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgZGVsZXRlIGRhdGEuamFhcjtcbiAgICAgICAgZGVsZXRlIGRhdGEubWFhbmQ7XG4gICAgICAgIGRlbGV0ZSBkYXRhLmRhZztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgZGF0YS51c2VyX2lkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIlBBVENIXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZCwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2FkbWluL3VzZXJzL1wiICsgdXNlcl9pZCwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlLFxuICAgICAgICBzYXZlVXNlckluZm86IHNhdmVVc2VySW5mbyxcbiAgICAgICAgZGVsZXRlVXNlcjogZGVsZXRlVXNlclxuICAgIH1cbn0iLCJ2YXIgQ2FydE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldENhcnQoY2FsbGJhY2spXG4gICAge1xuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgIGlmIChjYXJ0ICE9IHVuZGVmaW5lZClcbiAgICAgICAge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIHRoZSBjYXJ0IGNvb2tpZSBhbmQgZGF0YWJhc2UgaWYgdGhlIHVzZXIgaXMgcmVnaXN0ZXJlZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGlkLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FydCA9IHtlYW5fbnVtYmVyOmRhdGFbMF0uZWFuX251bWJlciwgdGl0bGU6ZGF0YVswXS50aXRsZSwgcHJpY2U6ZGF0YVswXS5wcmljZSwgaW1hZ2U6ZGF0YVswXS5pbWFnZX07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIGNhcnQgaW4gY29va2llc1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50Q2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRDYXJ0ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KFtjYXJ0XSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UoY3VycmVudENhcnQpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2FydC5wdXNoKGNhcnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGN1cnJlbnRDYXJ0KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIGl0ZW0gZnJvbSB0aGUgY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCBQcm9kdWN0IGlkXG4gICAgICovXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChpZClcbiAgICB7XG4gICAgICAgIGNhcnQgPSBKU09OLnBhcnNlKENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJjYXJ0XCIpKTtcblxuICAgICAgICBmb3IoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoY2FydFtpXS5lYW5fbnVtYmVyID09IGlkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNhcnQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBDb29raWVIZWxwZXIuY3JlYXRlQ29va2llKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRDYXJ0OiBnZXRDYXJ0LFxuICAgICAgICBhZGRQcm9kdWN0OiBhZGRQcm9kdWN0LFxuICAgICAgICByZW1vdmVQcm9kdWN0OiByZW1vdmVQcm9kdWN0XG4gICAgfVxufTsiLCJ2YXIgQ2hlY2tvdXRNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRPcmRlckluZm9ybWF0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgdmFyIGNhcnQgPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKCdjYXJ0Jyk7XG5cbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkICYmIGNhcnQgIT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShjYXJ0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBjYWxsYmFjayhbXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlT3JkZXIob3JkZXJEYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vIEFwcGVuZCBkYXRhIGZvcm0gb3RoZXIgc291cmNlc1xuICAgICAgICBvcmRlckRhdGEuc3RhdHVzICAgICAgICAgPSBcInBhaWRcIjtcbiAgICAgICAgb3JkZXJEYXRhLmJ0d19wZXJjZW50YWdlID0gMjE7XG4gICAgICAgIG9yZGVyRGF0YS5vcmRlcl9kYXRlICAgICA9IG5ldyBEYXRlKCk7XG4gICAgICAgIG9yZGVyRGF0YS5kZWxpdmVyeV9jb3N0cyA9IDMuOTU7XG4gICAgICAgIG9yZGVyRGF0YS5jYXJ0ICAgICAgICAgICA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL29yZGVyc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShvcmRlckRhdGEpLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImNhcnRcIik7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic29tZXRpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9yZGVySW5mb3JtYXRpb246IGdldE9yZGVySW5mb3JtYXRpb24sXG4gICAgICAgIHNhdmVPcmRlcjogc2F2ZU9yZGVyXG4gICAgfVxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0RmF2b3JpdGVMaXN0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3RcIiwgLy8gXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3RcIlxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXRGYXZvcml0ZUxpc3QgYWpheCBkb25lXCIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIFN0cmluZyhlYW4pLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1xuICAgICAgICAgICAgdHlwZTogXCJERUxFVEVcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAvLyBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICAvLyBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTsgLy9tb2V0IGRhdGEgcGVyIHNlIG1lZWdldmVuIGFhbiBjYWxsYmFjaz9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRGYXZvcml0ZUxpc3Q6IGdldEZhdm9yaXRlTGlzdCxcbiAgICAgICAgZGVsZXRlRnJvbUZhdm9yaXRlTGlzdDogZGVsZXRlRnJvbUZhdm9yaXRlTGlzdFxuICAgIH1cbn07IiwidmFyIExvZ2luTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9naW4oZW1haWwsIHBhc3N3b3JkLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgxL3VzZXIvbG9naW5cIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgYnRvYShlbWFpbCArIFwiOlwiICsgcGFzc3dvcmQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBwdXQgdG9rZW4gaW4gY29va2llXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcInVzZXJfaWRcIiwgZGF0YS51c2VyX2lkKTtcblxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPT0gNDAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNlcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoeGhyLnN0YXR1cyA9PSA0MDMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX2Jsb2NrZWRfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ2luOiBsb2dpblxuICAgIH1cbn07IiwidmFyIExvZ291dE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ291dChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJ1c2VyX2lkXCIpO1xuXG4gICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgb25Mb2FkUGFnZSgpO1xuXG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBsb2dvdXQ6IGxvZ291dFxuICAgIH1cbn07IiwidmFyIE9yZGVyTW9kZWwgPSBmdW5jdGlvbihvcmRlcl9pZClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9yZGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T3JkZXIoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVycy9cIiArIG9yZGVyX2lkLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3QvXCIgKyBlYW5fbnVtYmVyLCAvLyBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIlxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIlByb2R1Y3QgaXMgYWwgaW4gamUgZmF2b3JpZXRlbi5cIik7XG4gICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldE9yZGVyOiBnZXRPcmRlcixcbiAgICAgICAgYWRkVG9GYXZvcml0ZUxpc3Q6IGFkZFRvRmF2b3JpdGVMaXN0XG4gICAgfVxufTsiLCJ2YXIgT3JkZXJzTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBvcmRlcnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPcmRlcnMoY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL29yZGVyc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPcmRlcnM6IGdldE9yZGVycyxcbiAgICB9XG59OyIsInZhciBQcm9kdWN0c01vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxuICAgIH1cbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0TW9kZWwgPSBmdW5jdGlvbih1c2VyX2lkKVxue1xuICAgIHRoaXMuZ2V0UHVibGljV2lzaGxpc3QgPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdXNlcl9pZCxcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiByZWdpc3Rlcihmb3JtRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAvLyBNb2RpZnkgZGF0YSBiZWZvcmUgc2VuZGluZyAoYWxzbyBjb252ZXJ0IHRvIFVUQylcbiAgICAgICAgZm9ybURhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGZvcm1EYXRhLmphYXIsIGZvcm1EYXRhLm1hYW5kLCBmb3JtRGF0YS5kYWcpKTtcblxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxuICAgICAgICBkZWxldGUgZm9ybURhdGEuamFhcjtcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLm1hYW5kO1xuICAgICAgICBkZWxldGUgZm9ybURhdGEuZGFnO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlci9yZWdpc3RlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZV9tYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUgOiBmb3JtRGF0YS52b29ybmFhbSxcbiAgICAgICAgICAgICAgICBpbnNlcnRpb24gOiBmb3JtRGF0YS50dXNzZW52b2Vnc2VsLFxuICAgICAgICAgICAgICAgIHN1cm5hbWUgOiBmb3JtRGF0YS5hY2h0ZXJuYWFtLFxuICAgICAgICAgICAgICAgIGdlbmRlciA6IGZvcm1EYXRhLmdlbmRlcixcbiAgICAgICAgICAgICAgICBkYXRlX29mX2JpcnRoIDogZm9ybURhdGEuYmlydGhfZGF0ZSxcbiAgICAgICAgICAgICAgICBwaG9uZV9udW1iZXIgOiBmb3JtRGF0YS5tb2JpZWxfbnVtbWVyLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbl9hbnN3ZXIgOiBmb3JtRGF0YS5zZWN1cml0eV9hbnN3ZXIsXG4gICAgICAgICAgICAgICAgcG9zdGFsX2NvZGUgOiBmb3JtRGF0YS5wb3N0Y29kZSxcbiAgICAgICAgICAgICAgICBudW1iZXIgOiBmb3JtRGF0YS5odWlzbnVtbWVyLFxuICAgICAgICAgICAgICAgIHN0cmVldF9uYW1lIDogZm9ybURhdGEuc3RyYWF0bmFhbSxcbiAgICAgICAgICAgICAgICBjaXR5IDogZm9ybURhdGEucGxhYXRzXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNyZWdpX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICByZWdpc3RlcjogcmVnaXN0ZXJcbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gcmVzZXRwYXNzd29yZChmb3JtRGF0YSwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgZW1haWwgOiBmb3JtRGF0YS5lX21haWxhZHJlcyxcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxuICAgICAgICAgICAgICAgIHNlY3JldF9xdWVzdGlvbiA6IGZvcm1EYXRhLnNlY3VyaXR5X3F1ZXN0aW9uLFxuICAgICAgICAgICAgICAgIG5ld19wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQsXG4gICAgICAgICAgICAgICAgcmVwZWF0X3Bhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZDJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAvLyQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCJ2aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlc2V0cGFzc3dvcmQ6IHJlc2V0cGFzc3dvcmRcbiAgICB9XG59OyIsInZhciBQcm9kdWN0TW9kZWwgPSBmdW5jdGlvbihlYW4pXG57XG4gICAgZnVuY3Rpb24gR2V0UHJvZHVjdEluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgZWFuLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0UHJvZHVjdEluZm86IEdldFByb2R1Y3RJbmZvXG4gICAgfVxufTsiLCJ2YXIgU3RhdHNNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEocmFuZ2UsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9zdGF0cy90b3BnYW1lcz9yYW5nZT1cIiArIHJhbmdlLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjtcIixcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmFuZ2UsIGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldEdyYXBoRGF0YTogZ2V0R3JhcGhEYXRhXG4gICAgfVxuXG59OyIsInZhciBVc2VyTW9kZWwgPSBmdW5jdGlvbih1c2VyaWQpXG57XG4gICAgZnVuY3Rpb24gR2V0VXNlckluZm8oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXJzL1wiICsgdXNlcmlkLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCBjb250cm9sbGVyIHJlc3VtZSB3aXRoIHN0dWZmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YVswXSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgR2V0VXNlckluZm86IEdldFVzZXJJbmZvXG4gICAgfVxufTsiLCJ2YXIgV2lzaGxpc3RNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3RcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb1dpc2hsaXN0KHZpZXdEYXRhLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSAvKisgXCIvXCIgKyB2aWV3RGF0YS5lYW5fbnVtYmVyKi8sXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaWQgOiB2aWV3RGF0YS53aXNobGlzdF9pZCxcbiAgICAgICAgICAgICAgICAvL2Vhbl9udW1iZXIgOiB2aWV3RGF0YS5lYW5fbnVtYmVyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tV2lzaGxpc3QoZWFuLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3QvXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwidXNlcl9pZFwiKSArIFwiL1wiICsgU3RyaW5nKGVhbiksXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHZhciBnbyA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBuZXdEQlN0YXR1cyA9IFwiMFwiO1xuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpe1xuICAgICAgICAgICAgbmV3REJTdGF0dXMgPSBcIjFcIjtcbiAgICAgICAgICAgIGdvID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpe1xuICAgICAgICAgICAgZ28gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdTdGF0dXMgaGFzIHVuZXhwZWN0ZWQgdmFsdWUuIG5ld1N0YXR1cyA9IFwiICsgbmV3U3RhdHVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChnbylcbiAgICAgICAge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvd2lzaGxpc3Qvc3dpdGNoX3B1YmxpY1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicGF0Y2hcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcIm5ld0RCU3RhdHVzXCI6bmV3REJTdGF0dXN9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRXaXNobGlzdDogZ2V0V2lzaGxpc3QsXG4gICAgICAgIGFkZFRvV2lzaGxpc3Q6IGFkZFRvV2lzaGxpc3QsXG4gICAgICAgIGRlbGV0ZUZyb21XaXNobGlzdDogZGVsZXRlRnJvbVdpc2hsaXN0LFxuICAgICAgICBzd2l0Y2hQdWJsaWNTdGF0ZTogc3dpdGNoUHVibGljU3RhdGVcbiAgICB9XG59OyIsInZhciBBZG1pbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpOyAvL1wiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSkgXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBBZG1pblVzZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICB2aWV3SGVscGVyLnNldFNhdmVMaXN0ZW5lcihzYXZlVXNlckluZm8pO1xuICAgICAgICB2aWV3SGVscGVyLnNldERlbGV0ZUxpc3RlbmVyKGRlbGV0ZVVzZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFBhZ2UoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShzZXRWaWV3KTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzYXZlVXNlckluZm8oZXZlbnQpXG4gICAge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB2YXIgZm9ybURhdGEgPSAkKHRoaXMpLnNlcmlhbGl6ZU9iamVjdCgpO1xuXG4gICAgICAgIE1vZGVsLnNhdmVVc2VySW5mbyhmb3JtRGF0YSwgZnVuY3Rpb24oZm9ybURhdGEpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiR2VicnVpa2VyIHN1Y2Nlc3ZvbCBnZcO8cGRhdGUuXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJfaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5kZWxldGVVc2VyKHVzZXJfaWQsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlZGVsZXRlLlwiKTtcbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcIi9hZG1pblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgQ2FydENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIGNhcnQgaXRlbXMgYW5kIHBhc3MgdGhlIGl0ZW1zIHRvIHRoZSBWaWV3SGVscGVyXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q2FydCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRDYXJ0KGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgaXRlbSB0byB0aGUgY2FydCBhbmQgcGFzcyBpdCB0byB0aGUgdmlld0hlbHBlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSBpZCAgSXRlbSBpZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZFByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmFkZEl0ZW0oZGF0YSk7IH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHByb2R1Y3QgYW5kIGNhbGwgdGhlIHZpZXdIZWxwZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxuICAgIHtcbiAgICAgICAgTW9kZWwucmVtb3ZlUHJvZHVjdChpZCwgZnVuY3Rpb24gKGRhdGEpIHsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldENhcnQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRQcm9kdWN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRSZW1vdmVMaXN0ZW5lcihyZW1vdmVQcm9kdWN0KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBDaGVja291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJJbmZvcm1hdGlvbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvcmRlcihldmVudClcbiAgICB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplT2JqZWN0KCk7XG5cbiAgICAgICAgTW9kZWwuc2F2ZU9yZGVyKGZvcm1EYXRhLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuZmluaXNoT3JkZXIoKTtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuY2xlYXJDYXJ0KCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSA9PSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRPcmRlckxpc3RlbmVyKG9yZGVyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgRGVsZXRlQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBcbiAgICB9XG59IiwidmFyIEVycm9yQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIpXG57XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyBzZXQgdmlldyB0byBsb2dpbiBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIEZhdm9yaXRlTGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEZhdm9yaXRlTGlzdCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbUZhdm9yaXRlTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RmF2b3JpdGVMaXN0KClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldEZhdm9yaXRlTGlzdChzZXRWaWV3KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIExvb3AgdHJvdWdoIHRoZSBmb3JtIGRhdGEgYW5kIGdldCBhbGwgZmllbGRzXG4gICAgICAgIHZhciBmb3JtRGF0YSA9IHt9O1xuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIGVtYWlsIGFuZCBwYXNzd29yZCB0byBBUElcbiAgICAgICAgTW9kZWwubG9naW4oZm9ybURhdGEuZW1haWwsIGZvcm1EYXRhLnBhc3N3b3JkLCBmdW5jdGlvbiBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5zaG93KCk7XG5cbiAgICAgICAgICAgIFJvdXRlci5yb3V0ZShcInByb2R1Y3RzXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBMb2dvdXRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmxvZ291dChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgLy8gc2hvdyB1aXRsb2dnZW4gYnV0dG9uXG4gICAgICAgICAgICAkKFwiLmlubG9nZ2VuX3RleHRcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIi51aXRsb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgT3JkZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldE9yZGVyKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXIoYWRkVG9GYXZvcml0ZUxpc3QpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIpXG4gICAge1xuICAgICAgICBNb2RlbC5hZGRUb0Zhdm9yaXRlTGlzdChlYW5fbnVtYmVyLCBmdW5jdGlvbiBvblN1Y2Nlc3MoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwibGlrZS0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcbiAgICAgICAgICAgIC8vIENvbW1lbnQgdG8gc2VsZiA9IChPUkRFUiArIE9SREVSIEhJU1RPUlkgdmVyaGFhbCBOaWVscykgKyAoRkFWT1JJRVRFTiBMSUpTVCB2ZXJoYWFsIEhhYmJvKSBTQU1FTlZPRUdFTiBTVFJBS1MgT1IgRUxTRS4uLiEhISFcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTtcbiIsInZhciBPcmRlcnNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldE9yZGVycyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQcm9kdWN0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyUHJvZHVjdHMoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm0gKHBhZ2UgcmVsb2FkKVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBmaWx0ZXJzID0gJCh0aGlzKS5zZXJpYWxpemUoKTtcbiAgICAgICAgTW9kZWwuZ2V0UGFnZShmaWx0ZXJzLCBmdW5jdGlvbiAoZGF0YSkgeyBWaWV3SGVscGVyLmxvYWRQcm9kdWN0cyhkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFBhZ2UpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEZpbHRlckxpc3RlbmVyKGZpbHRlclByb2R1Y3RzKTtcbiAgICAgICAgLy8gbmV3IGFjdGlvbiB3YW5uZXIgZXIgb3AgZmlsdGVyIHdvcmR0IGdlZHJ1a3RcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBQdWJsaWNXaXNobGlzdENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcblxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJpbiBtYWluXCIpO1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFB1YmxpY1dpc2hsaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQdWJsaWNXaXNobGlzdCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQdWJsaWNXaXNobGlzdChzZXRWaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZWdpc3RlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGZpeCBkYXRlIG9mIGJpcnRoIChBUEkgZXhwZWN0cyBjZXJ0YWluIGZvcm1hdClcbiAgICAgICAgZm9ybURhdGFbXCJiaXJ0aF9kYXRlXCJdID0gZm9ybURhdGEuamFhciArIFwiLVwiICsgZm9ybURhdGEubWFhbmQgKyBcIi1cIiArIGZvcm1EYXRhLmRhZztcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ2b29ybmFhbVwiLCBcImFjaHRlcm5hYW1cIiwgXCJwb3N0Y29kZVwiLCBcImh1aXNudW1tZXJcIiwgXCJlX21haWxhZHJlc1wiLCBcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcInNlY3VyaXR5X2Fuc3dlclwiXTsgLy9kcm9wZG93bnMgKGxpa2UgZ2VuZGVyKSBhcmUgYWx3YXlzIGZpbGxlZCBpbiwgc28gZG9uJ3QgcHV0IGluIHRoaXMgbGlzdFxuXG4gICAgICAgIC8vIChyZXNldCBhbGwgZmllbGRzIHRvICd2YWxpZCcgYmVjYXVzZSB1c2VyIG1heSBoYXZlIGZpbGxlZCBpbiBmaWVsZHMgc2luY2VcbiAgICAgICAgLy8gdGhlIHByZXZpb3VzIHRpbWUgdGhpcyBmdW5jdGlvbiB3YXMgY2FsbGVkKVxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkucmVtb3ZlQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgaWYgKGZvcm1EYXRhW21hbkZpZWxkXSA9PSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIgKyBtYW5GaWVsZCkuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIFxuICAgICAgICAvLyBpZiBhIG1hbmRhdG9yeSBmaWVsZCBpcyBlbXB0eSwgc2hvdyBlcnJvciBtZXNzYWdlIHRvIHVzZXIgYW5kIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcylcbiAgICAgICAgeyBcbiAgICAgICAgICAgIC8vIHNjcm9sbCB0byB0b3Agb2YgcGFnZSBzbyB0aGF0IHVzZXJzIHNlZSBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgLy8gc2hvdyBtZXNzYWdlIFwic29tZXRoaW5nIGlzIG5vdCBmaWxsZWQgaW5cIlxuICAgICAgICAgICAgJChcIiNyZWdpc3Rlcl9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGZvcm1EYXRhLndhY2h0d29vcmQgIT0gZm9ybURhdGEud2FjaHR3b29yZDIpIFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXNzd29yZHNOb3RJZGVudGljYWwgPSB0cnVlO1xuICAgICAgICAgICAgJChcIiN3dzJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmRcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkMlwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhYm9ydCBmdW5jdGlvbiBpZiBtYW5kYXRvcnkgZmllbGQgbWlzc2VzIG9yIHBhc3N3b3JkcyBub3QgaWRlbnRpY2FsXG4gICAgICAgIGlmIChtYW5kYXRvcnlGaWVsZE1pc3NlcyB8fCBwYXNzd29yZHNOb3RJZGVudGljYWwpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVnaXN0ZXIoZm9ybURhdGEsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9hZnRlcl9yZWdpc3Rlci5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVnaXN0ZXIgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJy92aWV3cy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sJyk7XG5cbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBpbmZvOyBjbGlja3MgJ3JlZ2lzdGVyJzogdmlldyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG5cbiAgICAgICAgLy8gZW1haWwgYW5kIHBhc3N3b3JkIGFyZSBzZW5kIHRvIEFQSTsgQVBJIGNoZWNrcyBpZiBlbWFpbCBhbHJlYWR5IGV4aXN0cyAoYW5kIHdoZXRoZXIgcGFzc3dvcmQgaXMgY29ycmVjdD8pIFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoKVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBzZW5kaW5nIHRoZSBmb3JtXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gcmVzZXQgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgJChcIiNyZXNldF9wYXNzd29yZF9hcGlfZXJyb3JfbWVzc2FnZVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuXG4gICAgICAgIC8vIHB1dCBmb3JtIGZpZWxkcyBpbiBqYXZhc2NyaXB0IE9iamVjdFxuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcblxuICAgICAgICAkLmVhY2goJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpLCBmdW5jdGlvbiAoaSwgZmllbGQpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNoZWNrIHdoZXRoZXIgYW55IG1hbmRhdG9yeSBmaWVsZCBpcyBsZWZ0IGVtcHR5IGJ5IHVzZXIgYW5kXG4gICAgICAgIC8vIGlmIHNvLCBhYm9ydCBmdW5jdGlvblxuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRNaXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkcyA9IFtcIndhY2h0d29vcmRcIiwgXCJ3YWNodHdvb3JkMlwiLCBcImVfbWFpbGFkcmVzXCIsXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIHNlY3VyaXR5X3F1ZXN0aW9uX2Fuc3dlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcblxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgICQoXCIjcmVzZXRfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgdXNlciBpbmZvIHRvIEFQSVxuICAgICAgICBNb2RlbC5yZXNldHBhc3N3b3JkKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCd2aWV3cy9yZXNldHBhc3N3b3JkL2FmdGVyX3Jlc2V0Lmh0bWwnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAgeyAgICAgIFxuICAgICAgICAvLyBzZXQgdmlldyB0byByZXNldCBwYXNzd29yZCBmb3JtXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmh0bWwnKTtcblxuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgIC8vIG5ldyBhY3Rpb24gd2FubmVyIGVyIG9wIGZpbHRlciB3b3JkdCBnZWRydWt0XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTtcblxuXG5cblxuIiwidmFyIFByb2R1Y3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZChldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cblxuXG5cblxuICAgICAgICAvLyBMb29wIHRyb3VnaCB0aGUgZm9ybSBkYXRhIGFuZCBnZXQgYWxsIGZpZWxkc1xuICAgICAgICB2YXIgZm9ybURhdGEgPSB7fTtcbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJXG4gICAgICAgIE1vZGVsLmxvZ2luKGZvcm1EYXRhLmVtYWlsLCBmb3JtRGF0YS5wYXNzd29yZCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIC8vIHNob3cgdWl0bG9nZ2VuIGJ1dHRvblxuICAgICAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIudWl0bG9nZ2VuX3RleHRcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBXZWVyZ2VlZiBlZW4gYW5kZXJlIHBhZ2luYSBnZWJhc3NlZXJkIG9wICdhZG1pbicgb2YgJ3JlZ2lzdGVyZWQgdXNlcidcbiAgICAgICAgICAgIG5ldyBQYWdlQ29udHJvbGxlcihuZXcgUGFnZVZpZXdIZWxwZXIoKSwgbmV3IFBhZ2VNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGxldCB2aWV3IHNob3cgdmlldyB3aXRoIGRhdGEgZnJvbSBkYXRhYmFzZVxuICAgIGZ1bmN0aW9uIHNob3dWaWV3KGRhdGEpXG4gICAge1xuICAgICAgICB2aWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB3aGF0IGhhcHBlbnM6XG4gICAgICAgIC8vIDEpIHVzZXIgY2xpY2tzIG9uIGEgcHJvZHVjdCBcbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxuICAgICAgICAvLyA0KSB2aWV3IHNob3dzIGluZm9cblxuICAgICAgICAvLyAyKSBtb2RlbCBnZXRzIGluZm8gb2YgdGhlIHByb2R1Y3RcbiAgICAgICAgLy8gMykgc3lzdGVtIHB1dHMgaW5mbyBpbiBodG1sXG4gICAgICAgIG1vZGVsLkdldFByb2R1Y3RJbmZvKHNob3dWaWV3KTtcblxuXG5cbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0VmlldygpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICAvL1ZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW4sXG4gICAgICAgIHNob3dWaWV3IDogc2hvd1ZpZXdcbiAgICB9XG59OyIsInZhciBTdGF0c0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0R3JhcGhEYXRhKTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihnZXRDaGFuZ2VkVG9wVGVuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRHcmFwaERhdGEoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0R3JhcGhEYXRhKFwicXVhcnRlclwiLCBzZXRUb3BUZW5WaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VG9wVGVuVmlldyhyYW5nZSwgZGF0YSlcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VG9wVGVuVmlldyhyYW5nZSwgZGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q2hhbmdlZFRvcFRlbihyYW5nZSlcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldEdyYXBoRGF0YShyYW5nZSwgc2V0VG9wVGVuVmlldyk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCIiLCJ2YXIgV2lzaGxpc3RDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldFdpc2hsaXN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tV2lzaGxpc3QpO1xuICAgICAgICBWaWV3SGVscGVyLnNldFB1YmxpY0xpc3RlbmVyKHN3aXRjaFB1YmxpY1N0YXRlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXaXNobGlzdCgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRXaXNobGlzdChzZXRWaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZGVsZXRlRnJvbVdpc2hsaXN0KGVhbiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLmhpZGVJdGVtKGRpdl90b19oaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzKVxuICAgIHtcbiAgICAgICAgTW9kZWwuc3dpdGNoUHVibGljU3RhdGUobmV3U3RhdHVzLCBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIEFkbWluVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgdXNlciA9ICQoJyNzaW5nbGVfdXNlcicpLmNsb25lKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19maXJzdG5hbWVcIikuaHRtbCh2YWx1ZS5maXJzdF9uYW1lKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZmlyc3RuYW1lXCIpLmF0dHIoJ2hyZWYnLCAnL2FkbWluX3VzZXIvJyArIHZhbHVlLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19pbnNlcnRpb25cIikuaHRtbCh2YWx1ZS5pbnNlcnRpb24pO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19sYXN0bmFtZVwiKS5odG1sKHZhbHVlLnN1cm5hbWUpO1xuICAgICAgICAgICAgICAgICQodXNlcikuZmluZChcIi51c2VyX19lbWFpbFwiKS5odG1sKHZhbHVlLmVtYWlsKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fcGhvbmVudW1iZXJcIikuaHRtbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgJChcIiN1c2Vyc19ib2R5XCIpLmFwcGVuZCh1c2VyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3NpbmdsZV91c2VyXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICB9XG59XG5cbiAgICAvL2RhdCBoaWVyb25kZXIgemF0IGFhcmRpZyB3YXQgd2VyayBpbi4uLiBEb25hbGQgd2lsIG5vZyBmZiBob3VkZW5cblxuICAgIC8vIGZ1bmN0aW9uIHNob3dVc2VycyhkYXRhKVxuICAgIC8vIHtcbiAgICAvLyAgICAgZG9jdW1lbnQudGl0bGUgPVwiQWRtaW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgLy8gICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbi9hZG1pbi5odG1sJywgZnVuY3Rpb24gKCkge1xuICAgIC8vICAgICAgICAgdmFyIHRhYmxlID0gJChcIjx0YWJsZSBpZD0ndXNlcnNfdGFibGUnPjwvdGFibGU+XCIpO1xuXG4gICAgLy8gICAgICAgICAvLyB0YWJsZSBoZWFkZXJcbiAgICAvLyAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcbiAgICAvLyAgICAgICAgIHJvdy5hcHBlbmQoJzx0ZD5Wb29ybmFhbTwvdGQ+PHRkPlR1c3NlbnY8L3RkPjx0ZD5BY2h0ZXJuYWFtPC90ZD48dGQ+R2VicnVpa2Vyc25hYW08L3RkPjx0ZD5lbWFpbDwvdGQ+PHRkPnR5cGU8L3RkPicpO1xuXG4gICAgLy8gICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24obnVtYmVyciwgdXNlcikgXG4gICAgLy8gICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgdmFyIHJvdyA9ICQoJzx0cj48L3RyPicpO1xuICAgIC8vICAgICAgICAgICAgICQuZWFjaCh1c2VyLCBmdW5jdGlvbihrZXksIHZhbHVlKVxuICAgIC8vICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IHVuZGVmaW5lZClcbiAgICAvLyAgICAgICAgICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikuaHRtbChTdHJpbmcodmFsdWUpKSApO1xuICAgIC8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZCggJChcIjx0ZCBjbGFzcz0ndGRfdXNlcic+PC90ZD5cIikgKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAgICAgdGFibGUuYXBwZW5kKHJvdyk7XG4gICAgLy8gICAgICAgICAgICAgLy8gLy9mb3IgYWRkaXRpb25hbCB1c2VyIGluZm8gaWYgY2xpY2tlZFxuICAgIC8vICAgICAgICAgICAgIC8vIHJvdyA9ICQoJzxkaXYgY2xhc3M9XCJ0b2JldGFibGVcIj48L2Rpdj4nKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB0YWJsZS5hcHBlbmQocm93KTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgJCgnI3VzZXJzJykuYXBwZW5kKHRhYmxlKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZnVuY3Rpb24gcHV0SW5mb0luSHRtbChjbGlja2VkLCBkYXRhKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2luIHB1dEluZm9Jbkh0bWwoKScpO1xuICAgIC8vICAgICAvLyBzaG93IGluZm8gb2YgdGhlIHJpZ2h0IHVzZXIgKGlmIG5vdCBhbHJlYWR5IHNob3dpbmcgaXQpXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgYXMgdGFibGUgaGVhZGVyXG4gICAgLy8gICAgIHZhciBoZWFkZXJyb3cgPSAkKCc8dHI+PC90cj4nKS5hcHBlbmQoJzx0ZD53dzwvdGQ+PHRkPmdlYmxva2tlZXJkPC90ZD48dGQ+aWQ8L3RkPjx0ZD5nZW5kZXI8L3RkPjx0ZD5nZWJvb3J0ZWRhdHVtPC90ZD48dGQ+dnJhYWc8L3RkPjx0ZD5hbnR3b29yZDwvdGQ+Jyk7XG5cbiAgICAvLyAgICAgLy8gaW5zZXJ0IHJvdyB3aXRoIHRlIHVzZXJpbmZvXG4gICAgLy8gICAgIHZhciBpbmZvcm93ID0gJCgnPHRyPjwvdHI+Jyk7XG5cbiAgICAvLyAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAvLyAgICAgJC5lYWNoKGRhdGFbMF0sIGZ1bmN0aW9uKGtleSwgdmFsdWUpXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIGlmIChjb3VudCA9PSAxKSB7IC8vIGdlYmxva2tlZXJkXG4gICAgLy8gICAgICAgICAgICAgaWYgKHZhbHVlID09IDEpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnbmVlJztcbiAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09IDApIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnamEnXG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWUgPSAnZGIgZm91dD8nXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhjb3VudCk7XG4gICAgLy8gICAgICAgICB2YXIgdGQgPSAkKCc8dGQ+PC90ZD4nKS5hcHBlbmQodmFsdWUpO1xuXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygna2V5LCB2YWx1ZTogJyArIGtleSwgdmFsdWUpO1xuXG4gICAgLy8gICAgICAgICBpbmZvcm93LmFwcGVuZCh0ZCk7XG5cbiAgICAvLyAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgLy8gICAgIH0pXG5cbiAgICAvLyAgICAgaW5mb3Jvdy5pbnNlcnRBZnRlciggJChjbGlja2VkKS5jbG9zZXN0KCd0cicpICk7XG4gICAgLy8gICAgIGhlYWRlcnJvdy5pbnNlcnRBZnRlcigkKGNsaWNrZWQpLmNsb3Nlc3QoJ3RyJykpO1xuICAgIC8vIH1cblxuIiwidmFyIEFkbWluVXNlclZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2YWx1ZSlcbiAgICB7XG4gICAgICAgIC8vcHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2FkbWludXNlci9hZG1pbnVzZXIuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS51c2VyX2lkKSAgIFxuICAgICAgICAgICAgJChcIiNmaXJzdF9uYW1lXCIpLnZhbCh2YWx1ZS5maXJzdF9uYW1lKTtcbiAgICAgICAgICAgICQoXCIjaW5zZXJ0aW9uXCIpLnZhbCh2YWx1ZS5pbnNlcnRpb24pO1xuICAgICAgICAgICAgJChcIiNzdXJuYW1lXCIpLnZhbCh2YWx1ZS5zdXJuYW1lKTtcbiAgICAgICAgICAgICQoXCIjdXNlcl90eXBlXCIpLnZhbCh2YWx1ZS51c2VyX3R5cGUpO1xuICAgICAgICAgICAgJChcIiNlbWFpbFwiKS52YWwodmFsdWUuZW1haWwpO1xuICAgICAgICAgICAgJChcIiNwYXNzd29yZFwiKS5hdHRyKCdwbGFjZWhvbGRlcicsICdWdWwgaGllciBpZXRzIGluIG9tIGhldCB3YWNodHdvb3JkIHRlIHZlcmFuZGVyZW4nKTtcbiAgICAgICAgICAgICQoXCIjZ2VuZGVyXCIpLnZhbCh2YWx1ZS5nZW5kZXIpO1xuICAgICAgICAgICAgJChcIiNkYXRlX29mX2JpcnRoXCIpLnZhbCh2YWx1ZS5kYXRlX29mX2JpcnRoKTtcbiAgICAgICAgICAgICQoXCIjcGhvbmVfbnVtYmVyXCIpLnZhbCh2YWx1ZS5waG9uZV9udW1iZXIpO1xuICAgICAgICAgICAgJChcIiNpc19hY3RpdmVcIikudmFsKHZhbHVlLmlzX2FjdGl2ZSk7XG4gICAgICAgICAgICAkKFwiI3VzZXJfaWRcIikudmFsKHZhbHVlLnVzZXJfaWQpO1xuXG4gICAgICAgICAgICB2YXIgdG9kYXkgICAgICAgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRhdGVPZkJpcnRoID0gbmV3IERhdGUodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XG5cbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RGF0ZSgpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2RhZ1wiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgdG9kYXkuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBkYXRlT2ZCaXJ0aC5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJChcIiNtYWFuZFwiKS52YWwoZGF0ZU9mQmlydGguZ2V0TW9udGgoKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U2F2ZUxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzdWJtaXQnLCAnI3VzZXJmb3JtJywgYWN0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsICcjZGVsZXRlX2J0bicsIGZ1bmN0aW9uIChlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhY3Rpb24oJCh0aGlzKS5kYXRhKFwiaWRcIikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldFNhdmVMaXN0ZW5lcjogc2V0U2F2ZUxpc3RlbmVyLFxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXJcbiAgICB9XG59IiwidmFyIENhcnRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBpZiAodmlld0RhdGEgIT0gXCJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgdmlld0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBhZGRJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHRvdGFsIHByaWNlICBvZiB0aGUgY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7aW50fSB0b3RhbFByaWNlICBUb3RhbCBwcmljZSBvZiB0aGUgY2FydFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVRvdGFsUHJpY2UobmV3UHJpY2UpXG4gICAge1xuICAgICAgICBuZXdQcmljZSA9IHBhcnNlRmxvYXQobmV3UHJpY2UpICsgcGFyc2VGbG9hdCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkuc3Vic3RyKDEpKTtcbiAgICAgICAgJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbChcIuKCrFwiICsgcGFyc2VGbG9hdChuZXdQcmljZSkudG9GaXhlZCgyKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBuZXcgY2FydCBpdGVtIHZpc2lhYmxlIGluIHRoZSBET01cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHthcnJheX0gIGl0ZW0gIFByb2R1Y3RcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRJdGVtKGl0ZW0pXG4gICAge1xuICAgICAgICB2YXIgY2FydEl0ZW0gPSAkKCc8ZGl2PicpLmh0bWwoJCgnLnNpZGViYXJfX2NvbnRlbnRfX3RtcCcpLmh0bWwoKSk7XG5cbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX190aXRsZVwiKS5odG1sKGl0ZW0udGl0bGUpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX3ByaWNlXCIpLmh0bWwoXCLigqxcIiArIGl0ZW0ucHJpY2UudG9GaXhlZCgyKSk7XG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgaXRlbS5pbWFnZSk7XG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbVwiKS5hdHRyKFwiZGF0YS1pZFwiLCBpdGVtLmVhbl9udW1iZXIpXG5cbiAgICAgICAgJChcIi5jYXJ0XCIpLmFwcGVuZChjYXJ0SXRlbSk7XG5cbiAgICAgICAgLy8gQ2hhbmdlIGFtb3VudCBvZiBpdGVtc1xuICAgICAgICB2YXIgYW1vdW50ID0gJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbCgpO1xuICAgICAgICAkKFwiLmNhcnRfYnV0dG9uIC5jb3VudFwiKS5odG1sKHBhcnNlSW50KGFtb3VudCkgKyAxKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRvdGFsIHByaWNlXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoaXRlbS5wcmljZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCB0aGUgY2FydCB3aGVuIHRoZSBwYWdlIGlzICByZWFzZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuZXIgZm9yIHRoZSBBZGQgdG8gY2FydCBidXR0b25cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gIHtmdW5jdGlvbn0gYWRkdG9DYXJ0ICBNb2RlbCBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldEFkZFByb2R1Y3RMaXN0ZW5lcihhZGRUb0NhcnQpXG4gICAge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmFkZHRvY2FydFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICBhZGRUb0NhcnQocHJvZHVjdF9pZCk7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIjdG9fc2hvcF9jYXJ0XCIpLmZpbmQoXCIjc2hvcF9jYXJ0XCIpLmZhZGVUbygwLCAxMDApLmRlbGF5KDEwMDApLmZhZGVUbyg2MDAsIDApO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIGZvciByZW1vdmUgYSBwcm9kdWN0IGZyb20gdGhlIERPTSBjYXJ0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcmVtb3ZlUHJvZHVjdCBDYWxsYmFjayBmdW5jdGlvbiB0byByZW1vdmUgdGhlIHByb2RjdXQgZnJvbSB0aGUgbWVtb3J5XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0UmVtb3ZlTGlzdGVuZXIocmVtb3ZlUHJvZHVjdCkge1xuICAgICAgICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLmNhcnRfX2l0ZW1fX3JlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpe1xuICAgICAgICAgICAgdmFyIGNhcnRpdGVtICAgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICAgICAgdmFyIHByb2R1Y3RfaWQgPSAkKHRoaXMpLnBhcmVudCgpLmRhdGEoXCJpZFwiKTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHByb2R1Y3QgZnJvbSBET00gY2FydFxuICAgICAgICAgICAgJChjYXJ0aXRlbSkuYWRkQ2xhc3MoXCJjYXJ0X19pdGVtLS1yZW1vdmVkXCIpO1xuICAgICAgICAgICAgJChjYXJ0aXRlbSkub24oXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIG9BbmltYXRpb25FbmQgTVNBbmltYXRpb25FbmRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBEZWNyZXNlIGNvdW50XG4gICAgICAgICAgICB2YXIgYW1vdW50ID0gJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbCgpO1xuICAgICAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpIC0gMSk7XG5cbiAgICAgICAgICAgIHJlbW92ZVByb2R1Y3QocHJvZHVjdF9pZClcbiAgICAgICAgICAgIHVwZGF0ZVRvdGFsUHJpY2UoLSQoY2FydGl0ZW0pLmZpbmQoXCIuY2FydF9faXRlbV9fcHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgYWRkSXRlbTogYWRkSXRlbSxcbiAgICAgICAgdXBkYXRlVG90YWxQcmljZTogdXBkYXRlVG90YWxQcmljZSxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRBZGRQcm9kdWN0TGlzdGVuZXI6IHNldEFkZFByb2R1Y3RMaXN0ZW5lcixcbiAgICAgICAgc2V0UmVtb3ZlTGlzdGVuZXI6IHNldFJlbW92ZUxpc3RlbmVyLFxuICAgIH1cbn07IiwidmFyIENoZWNrb3V0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGNhcnQpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiQmVzdGVsbGVuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvY2hlY2tvdXQvY2hlY2tvdXQuaHRtbCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQgJiYgY2FydCAhPSBcIlwiKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBjYXJ0IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAkLmVhY2goY2FydCwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoXCIjcHJvZHVjdFwiKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChcIjxociAvPlwiKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJfaW5mbyAub3JkZXJfX25hdmlnYXRlXCIpLmZpcnN0KCkucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuaHRtbChcIjxkaXYgY2xhc3M9J21lc3NhZ2UgbWVzc2FnZS0taW5mbyc+SmUgd2lua2Vsd2FnZW4gaXMgbm9nIGxlZWcsIHN0b3AgZXIgcHJvZHVjdGVuIGluIG9tIGRlemUgdGUga3VubmVuIGJlc3RlbGxlbi48L2Rpdj5cIilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNwcm9kdWN0XCIpLmZpcnN0KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBhbmQgbW92ZSB0b3RhbCBwcmljZSB0byBlbmQgb2YgbGlzdFxuICAgICAgICAgICAgJChcIiN0b3RhbFwiKS5hcHBlbmRUbyhcIiNwcm9kdWN0X19saXN0XCIpO1xuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbCgkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKCkpO1xuXG4gICAgICAgICAgICAvLyBTZXQgZGVsaXZlcnkgZGF0ZSAod2UgYWx3YXlzIGRlbGl2ZXIgaW4gb25lIGRheSlcbiAgICAgICAgICAgIHZhciB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDEpO1xuXG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X2RhdGVcIikuaHRtbCh0b2RheS5nZXREYXRlKCkgKyBcIiBcIiArIHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pKTtcbiAgICAgICAgICAgICQoXCIuZGVsaXZlcnlfX2NhbGVuZGFyX19tb250aFwiKS5odG1sKHRvZGF5LnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcInNob3J0XCJ9KS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgICQoXCIuZGVsaXZlcnlfX2NhbGVuZGFyX19kYXlcIikuaHRtbCh0b2RheS5nZXREYXRlKCkpO1xuXG4gICAgICAgICAgICAvLyBTZXQgdXNlciBhZGRyZXNzXG4gICAgICAgICAgICBVc2VySGVscGVyLmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19uYW1lXCIpLmh0bWwodXNlci5maXJzdF9uYW1lICsgXCIgXCIgKyB1c2VyLmluc2VydGlvbiArIFwiIFwiICsgdXNlci5zdXJuYW1lKTtcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19zdHJlZXRcIikuaHRtbCh1c2VyLmFkZHJlc3Muc3RyZWV0ICsgXCIgXCIgKyB1c2VyLmFkZHJlc3MuaG91c2VfbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKFwiLmFkcmVzX19wb3N0YWxjb2RlXCIpLmh0bWwodXNlci5hZGRyZXNzLnBvc3RhbF9jb2RlICsgXCIgXCIgKyB1c2VyLmFkZHJlc3MuY2l0eS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBHbyB0byB0aGUgbGFzdCBzdGVwIG9mIHRoZSBvcmRlciBwcm9jZXNzXG4gICAgZnVuY3Rpb24gZmluaXNoT3JkZXIoKVxuICAgIHtcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkgYVwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAkKFwidWwub3JkZXItc3RlcHMgbGkuY29uZmlybWF0aW9uXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICQoXCIub3JkZXJfX3N0ZXBcIikucmVtb3ZlQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgICAgICAkKFwiI2NvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIHZpc2libGUgY2FydFxuICAgIGZ1bmN0aW9uIGNsZWFyQ2FydCgpXG4gICAge1xuICAgICAgICAkKFwiLmNhcnRcIikuZW1wdHkoKTtcbiAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChcIjBcIik7XG4gICAgICAgICQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoXCLigqwwMC4wMFwiKVxuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gQ29uZmlybSB0aGUgb3JkZXIgd2hlbiBzYm1pdHRpbmcgdGhlIGZvcm1cbiAgICBmdW5jdGlvbiBzZXRPcmRlckxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKFwic3VibWl0XCIsIFwiI29yZGVyZm9ybVwiLCBhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRPcmRlckxpc3RlbmVyOiBzZXRPcmRlckxpc3RlbmVyLFxuICAgICAgICBmaW5pc2hPcmRlcjogZmluaXNoT3JkZXIsXG4gICAgICAgIGNsZWFyQ2FydDogY2xlYXJDYXJ0XG4gICAgfVxufTsiLCJ2YXIgRXJyb3JWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIk9lcHMgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9lcnJvci9lcnJvci5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBGYXZvcml0ZUxpc3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vY2hhbmdlIHZpZXcgb2YgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIHNldFZpZXdcIik7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJGYXZvcmlldGVubGlqc3QgLSBBWiBHYW1lc1wiO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwiZmF2b3JpdGVsaXN0XCI+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdCh2aWV3RGF0YSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRGYXZvcml0ZWxpc3Qodmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI2Zhdm9yaXRlbGlzdFwiKS5sb2FkKCcvdmlld3MvZmF2b3JpdGVsaXN0L2Zhdm9yaXRlbGlzdC5odG1sJywgZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gYWRkIGFsbCBmYXZvcml0ZWxpc3QgaXRlbXMgdG8gaHRtbFxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcblxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBmYXZvcml0ZV9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNmYXZvcml0ZV9fbGlzdF9faXRlbScpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50ICsgMTtcblxuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX2lkXCIpLmFwcGVuZChjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikrdmFsdWUucHJpY2UpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjY2FydF9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlX19saXN0XCIpLmFwcGVuZChmYXZvcml0ZV9fbGlzdF9faXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI2Zhdm9yaXRlbGlzdF9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNmYXZvcml0ZV9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNldERlbGV0ZUxpc3RlbmVyKClcIik7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9mZigpLm9uKFwiY2xpY2tcIiwgXCIjZGVsZXRlX2J0blwiLCBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xuICAgICAgICAgICAgYWN0aW9uKGVhbiwgZGl2X3RvX2hpZGUpO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW0oZGl2X3RvX2hpZGUpXG4gICAge1xuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZEZhdm9yaXRlbGlzdDogbG9hZEZhdm9yaXRlbGlzdCxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXREZWxldGVMaXN0ZW5lcjogc2V0RGVsZXRlTGlzdGVuZXIsXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbVxuICAgIH1cbn0iLCJ2YXIgU3RhdHNWaWV3SGVscGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFRvcFRlblZpZXcocmFuZ2UsIGdyYXBoRGF0YSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIlN0YXRzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZ3JhcGhzL2dyYXBocy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICAvLyBkZWZhdWx0IHNlbGVjdCBkYXRhXG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5maW5kKFwiI3JhbmdlX3N3aXRjaFwiKS52YWwocmFuZ2UpO1xuXG4gICAgICAgICAgICAvLyBncmFwaFxuICAgICAgICAgICAgdmFyIGxhYmVscyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBbXTtcblxuICAgICAgICAgICAgdmFyIGdhbWVDb3VudCA9IDA7XG4gICAgICAgICAgICB2YXIgbGFzdF9yYW5rX251bSA9IDA7IC8vYXNzdW1pbmcgdmFsdWUucmFuayBpcyBuZXZlciAwIVxuICAgICAgICAgICAgdmFyIGhpZ2hlc3RWYWwgPSAwO1xuXG4gICAgICAgICAgICAkLmVhY2goZ3JhcGhEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICBpZiAoZ2FtZUNvdW50IDwgMTEgfHwgdmFsdWUucmFuayA9PSBsYXN0X3JhbmtfbnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVscy5wdXNoKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHZhbHVlLnVzZXJfY291bnQpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVDb3VudCA9PSAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdF9yYW5rX251bSA9IHZhbHVlLnJhbms7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFiZWxzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICB2YXIgZWwgPSAkKFwiI2dyYXBoX190b3B0ZW5pdGVtc19fY252c1wiKTtcbiAgICAgICAgICAgIHZhciBUb3BUZW5DaGFydCA9IG5ldyBDaGFydChlbCwge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdob3Jpem9udGFsQmFyJyxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDIwMCwgMjYsIDEpJywgLy9ncm9lblxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk1lZXN0IHZlcmtvY2h0ZSBnYW1lc1wiIC8vIG5lZWQgaW4gamFudWFyaSwgaW4gZmVicnVhcmksIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTp0cnVlLFxuICAgICAgICAgICAgICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhBeGVzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlZ2luQXRaZXJvOnRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1heFJvdGF0aW9uOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWluUm90YXRpb246IDkwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBwdXQgZGVzY2lwdGlvbiBiZWxvdyBncmFwaFxuICAgICAgICAgICAgdmFyIGRlc2NyID0gJ0RlemUgZ3JhZmllayBsYWF0IGRlIGdhbWVzIHppZW4gbWV0IGhldCBtZWVzdGUgYWFudGFsIGdlYnJ1aWtlcnMgZGF0IGRlIGdhbWUgMSBvZiBtZWVyIGtlZXIgaGVlZnQgZ2Vrb2NodCBpbiBkZSBnZWtvemVuIHRpamRzcGVyaW9kZS4nO1xuXG4gICAgICAgICAgICB2YXIgdGhlRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvbl9fdG9wdGVuXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShkZXNjcik7IFxuICAgICAgICAgICAgdGhlRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpOyBcblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZVwiLCBcIiNyYW5nZV9zd2l0Y2hcIiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSAkKFwiI3JhbmdlX3N3aXRjaFwiKS52YWwoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmFuZ2U6IFwiICsgcmFuZ2UpO1xuICAgICAgICAgICAgYWN0aW9uKHJhbmdlKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFRvcFRlblZpZXc6IHNldFRvcFRlblZpZXcsXG4gICAgICAgIHNldFRvcFRlbkNoYW5nZUxpc3RlbmVyOiBzZXRUb3BUZW5DaGFuZ2VMaXN0ZW5lclxuICAgIH1cbn0iLCJ2YXIgTG9naW5WaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9sb2dpbi9sb2dpbi5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBsb2dpbiBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAnbG9naW4nXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdsb2dpbicsIHBlcmZvcm0gYWN0aW9uIChtYWtlIGNvbnRyb2xsZXIgc2VuZCBlbWFpbCBhbmQgcGFzc3dvcmQgdG8gQVBJKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNsb2dpbmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIExvZ291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldygpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVWl0bG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9nb3V0L2xvZ291dC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIE9yZGVyVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KG9yZGVyKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvb3JkZXIvb3JkZXIuaHRtbCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRGF0ZVxuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZShvcmRlci5vcmRlcl9kYXRlKTtcblxuICAgICAgICAgICAgLy8gRm9ybWF0IHNoaXBwaW5nIG1ldGhvZFxuICAgICAgICAgICAgc3dpdGNoKG9yZGVyLnNoaXBwaW5nX21ldGhvZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGVsaXZlclwiOlxuICAgICAgICAgICAgICAgICAgICBvcmRlci5zaGlwcGluZ19tZXRob2QgPSBcIkJlem9yZ2VuICh2aWEgUG9zdE5MKVwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGlja3VwXCI6XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyLnNoaXBwaW5nX21ldGhvZCA9IFwiT3BoYWxlblwiO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlsbCBvcmRlciBpbmZvXG4gICAgICAgICAgICAkKFwiLm9yZGVyX19kYXRlXCIpLmh0bWwoZGF0ZS5nZXREYXRlKCkgKyBcIiBcIiArIGRhdGUudG9Mb2NhbGVTdHJpbmcoXCJubC1OTFwiLCB7bW9udGg6IFwibG9uZ1wifSkgKyBcIiBcIiArIGRhdGUuZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgICQoXCIub3JkZXJfX3BheW1lbnRtZXRob2RcIikuaHRtbChvcmRlci5wYXltZW50X21ldGhvZCk7XG4gICAgICAgICAgICAkKFwiLm9yZGVyX19zaGlwcHBpbmdcIikuaHRtbChvcmRlci5zaGlwcGluZ19tZXRob2QpO1xuXG4gICAgICAgICAgICAvLyBBZGQgcHJvZHVjdHNcbiAgICAgICAgICAgICQuZWFjaChvcmRlci5wcm9kdWN0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJChcIiNwcm9kdWN0XCIpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fYW1vdW50XCIpLmh0bWwoXCI8Yj5BYW50YWw6PC9iPiBcIiArIHZhbHVlLmFtb3VudClcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fcHJpY2VcIikuYXBwZW5kKChcIuKCrCBcIikgKyB2YWx1ZS5wcmljZS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIuYWRkVG9GYXZvcml0ZXNCdXR0b25cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8aHIgLz5cIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNwcm9kdWN0XCIpLmZpcnN0KCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIC8vIFNldCBhbmQgbW92ZSB0b3RhbCBwcmljZSB0byBlbmQgb2YgbGlzdFxuICAgICAgICAgICAgJChcIiN0b3RhbFwiKS5hcHBlbmRUbyhcIiNwcm9kdWN0X19saXN0XCIpO1xuICAgICAgICAgICAgJChcIi50b3RhbF9fcHJpY2VcIikuaHRtbChcIuKCrCBcIiArIG9yZGVyLnRvdGFsX29yZGVyX3ByaWNlKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjbGlja1wiLCBcIi5hZGRUb0Zhdm9yaXRlc0J1dHRvblwiLCBmdW5jdGlvbihlKVxuICAgICAgICB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICBhY3Rpb24oZWFuKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lcjogc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIE9yZGVyc1ZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcnMpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9XCJCZXN0ZWxnZXNjaGllZGVuaXMgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9vcmRlcnMvb3JkZXJzLmh0bWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQuZWFjaChvcmRlcnMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIG9yZGVyID0gJCgnI3NpbmdsZV9vcmRlcicpLmNsb25lKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEYXRlXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5vcmRlcl9kYXRlKTtcblxuICAgICAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcbiAgICAgICAgICAgICAgICBzd2l0Y2godmFsdWUuc2hpcHBpbmdfbWV0aG9kKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNoaXBwaW5nX21ldGhvZCA9IFwiQmV6b3JnZW4gKHZpYSBQb3N0TkwpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUuc2hpcHBpbmdfbWV0aG9kID0gXCJPcGhhbGVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX251bWJlclwiKS5odG1sKHZhbHVlLm9yZGVyX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fZGF0ZVwiKS5odG1sKGRhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pICsgXCIgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fcHJpY2VcIikuaHRtbChcIuKCrCBcIiArIHZhbHVlLnRvdGFsX29yZGVyX3ByaWNlKTtcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwodmFsdWUucGF5bWVudF9tZXRob2QpO1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3NoaXBwcGluZ1wiKS5odG1sKHZhbHVlLnNoaXBwaW5nX21ldGhvZCk7XG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fbGluayBhXCIpLmF0dHIoXCJocmVmXCIsIFwiL29yZGVyL1wiICsgdmFsdWUub3JkZXJfbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjb3JkZXJzX2JvZHlcIikuYXBwZW5kKG9yZGVyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3NpbmdsZV9vcmRlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdHNWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiUHJvZHVjdGVuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0zXCIgaWQ9XCJmaWx0ZXJzXCI+PC9kaXY+PGRpdiBjbGFzcz1cImNvbC05XCIgaWQ9XCJwcm9kdWN0c1wiPjwvZGl2PjwvZGl2PicpO1xuICAgICAgICAvLyBsb2FkIGZpbHRlcnNcbiAgICAgICAgJChcIiNmaWx0ZXJzXCIpLmxvYWQoJy92aWV3cy9wcm9kdWN0cy9maWx0ZXJzLmh0bWwnKTtcblxuICAgICAgICAvLyBsb2FkIHByb2R1Y3RzXG4gICAgICAgIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFByb2R1Y3RzKHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNwcm9kdWN0c1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvcHJvZHVjdHMuaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0ID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3Byb2R1Y3RfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19zdWJ0aXRsZVwiKS5hcHBlbmQodmFsdWUuZ2VucmUgKyhcIiB8IFBFR0kgXCIpICsgdmFsdWUucGVnaV9hZ2UgKyhcIiB8IFwiKSsgUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2Rlc2NyaXB0aW9uXCIpLmh0bWwoQ3V0U3RyaW5nKHZhbHVlLmRlc2NyaXB0aW9uKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIiNidXR0b25zX19pbmZvLCAucHJvZHVjdF9faW1hZ2UgYSwgLnByb2R1Y3RfX3RpdGxlXCIpLmF0dHIoXCJocmVmXCIsIFwicHJvZHVjdC9cIiArIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vU2hvdyBtb3JlL2xlc3NcbiAgICBmdW5jdGlvbiBDdXRTdHJpbmcodGV4dCl7XG4gICAgICAgIHZhciBTaG93QW1vdW50ID0gNTA7XG4gICAgICAgIHZhciBXb3Jkc0FycmF5ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gICAgICAgIGlmKFdvcmRzQXJyYXkubGVuZ3RoPlNob3dBbW91bnQpe1xuICAgICAgICAgICAgdmFyIFNob3J0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgIGZvcihpPTA7IGk8U2hvd0Ftb3VudDsgaSsrKXtcbiAgICAgICAgICAgICAgICBTaG9ydFN0cmluZyArPSBXb3Jkc0FycmF5W2ldICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gU2hvcnRTdHJpbmcrXCIuLi5cIjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldEZpbHRlckxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICAvLyBIaWVyIGhldCBmb3JtdWxpZXIgdmVyc3R1cmVuIGFscyB3ZSBvcCBlZW4gY2hlY2tib3ggZHJ1a2tlblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9Y2hlY2tib3hdXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBVcGRhdGUgZGUgcHJvZHVjdGVubGlqc3QgYWxzIGVlbiB3YWFyZGUgaW4gZGUgc2xpZGVyIHZlcmFuZGVyZChhbGxlIG1hbmllcmVuKVxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZSBrZXl1cFwiLCBcImlucHV0W25hbWU9cHJpY2UtbWF4XSwgaW5wdXRbbmFtZT1wcmljZS1taW5dXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZigkKFwiI3ByaWNlbWluXCIpLnZhbCgpID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAkKFwiI3ByaWNlbWluXCIpLnZhbCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfZmlsdGVyXCIpLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNwcm9kdWN0X2ZpbHRlclwiLCBhY3Rpb24pO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRQcm9kdWN0czogbG9hZFByb2R1Y3RzLFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldEZpbHRlckxpc3RlbmVyOiBzZXRGaWx0ZXJMaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pIC8vIGhlYiBkZSAkIGVyYmlqIGdlemV0LiBpbnRlcm5ldCBoYWQgaGV0IGRhYXJvdmVyICh6aWUgb25kZXJzdGFhbmRlIGNvbW1lbnQgb29rKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2codmlld0RhdGEpXG4gICAgICAgIGlmICh2aWV3RGF0YS5sZW5ndGggPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkVycm9yIC0gQVogR2FtZXNcIlxuICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhLmxlbmd0aCA+IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMSl7XG4gICAgICAgICAgICAgICAgbG9hZFB1YmxpY1dpc2hsaXN0KHZpZXdEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0uaXNfcHVibGljIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGFbMF0uaXNfcHVibGljID0gXCIgKyB2aWV3RGF0YVswXS5pc19wdWJsaWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2aWV3RGF0YVswXS5sZW5ndGggaGVlZnQgb252ZXJ3YWNodGUgd2FhcmRlLiB2aWV3RGF0YS5sZW5ndGggPSBcIiArIHZpZXdEYXRhLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkUHVibGljV2lzaGxpc3QoZGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJWZXJsYW5nbGlqc3QgXCIgKyBkYXRhWzBdLmZpcnN0X25hbWUgKyBcIiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwicHVibGljX3dpc2hsaXN0XCI+PC9kaXY+Jyk7XG5cbiAgICAgICAgJChcIiNwdWJsaWNfd2lzaGxpc3RcIikubG9hZCgnL3ZpZXdzL3B1YmxpY193aXNobGlzdC9wdWJsaWNfd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoXCIjcHVibGljX193aXNobGlzdF9faGVhZGVyXCIpLmh0bWwoXCJWZXJsYW5nbGlqc3QgdmFuIFwiICsgZGF0YVswXS5maXJzdF9uYW1lKTtcblxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpXG4gICAgICAgICAgICB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciB3aXNobGlzdF9pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoICQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSApO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudCsrO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2xpa2VidXR0b25cIikuYXBwZW5kKCk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgd2lzaGxpc3RfaXRlbS5hcHBlbmRUbygkKFwiI3dpc2hfX2xpc3RcIikpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgJChcIiN3aXNoX19saXN0X19pdGVtXCIpLmZpcnN0KCkucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdDogbG9hZFB1YmxpY1dpc2hsaXN0LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG5cblxufSIsInZhciBSZWdpc3RlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3VG9TaG93KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlJlZ2lzdHJlcmVuIC0gQVogR2FtZXNcIjtcbiAgICAgICAgXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdywgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgICAgIGZvcihpID0gMTsgaSA8IDMyOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGkgPSAxOTAwOyBpIDwgZGF0ZS5nZXRGdWxsWWVhcigpICsgMTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpID09IDIwMDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInIHNlbGVjdGVkPSdzZWxlY3RlZCc+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIic+XCIgKyBpICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInLCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZWdpc3RlcmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJJbmxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCh2aWV3VG9TaG93KTtcbiAgICB9XG5cbiAgICAvLyBBY3Rpb25MaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIGFjdGlvbnMgb24gc3BlY2lmaWMgZXZlbnRzXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoZXZlbnRIYW5kbGVyKVxuICAgIHtcbiAgICAgICAgLy8kKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcInN1Ym1pdFwiLCBcIiNyZXNldGZvcm1cIiwgZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07XG5cbi8qXG52YXIgUmVzZXRQYXNzd29yZFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuKi8iLCJ2YXIgUHJvZHVjdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyhwcm9kdWN0KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBwcm9kdWN0LnRpdGxlICsgXCIgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvc2luZ2xlX3Byb2R1Y3Qvc2luZ2xlX3Byb2R1Y3QuaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHByb2R1Y3QuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fdGl0bGVcIikuaHRtbChwcm9kdWN0LnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBwcm9kdWN0LnByaWNlLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19lYW5cIikuYXBwZW5kKHByb2R1Y3QuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucGxhdGZvcm0pKTsgLy8gZnVuY3RpZSB2b29yIGxvZ29cbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3B1Ymxpc2hlclwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHByb2R1Y3QucHVibGlzaGVyKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wZWdpXCIpLmFwcGVuZChwcm9kdWN0LnBlZ2lfYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2dlbnJlXCIpLmFwcGVuZChwcm9kdWN0LmdlbnJlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX2Rlc2NyXCIpLmh0bWwocHJvZHVjdC5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICAkKFwiLmFkZHRvY2FydFwiKS5hdHRyKFwiZGF0YS1pZFwiLCBwcm9kdWN0LmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmFkZFRvV2lzaGxpc3RCdXR0b25cIikuYXR0cihcIm9uY2xpY2tcIiwgXCJXaXNobGlzdEhlbHBlci5hZGRJdGVtKFwiICsgcHJvZHVjdC5lYW5fbnVtYmVyICsgXCIpO1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKHByb2R1Y3QucmVsZWFzZV9kYXRlKTtcblxuICAgICAgICAgICAgICAgIHZhciBtb250aHMgPSBbXCJqYW51YXJpXCIsIFwiZmVicnVhcmlcIiwgXCJtYWFydFwiLCBcImFwcmlsXCIsIFwibWVpXCIsIFwianVuaVwiLCBcImp1bGlcIiwgXCJhdWd1c3R1c1wiLCBcInNlcHRlbWJlclwiLCBcIm9rdG9iZXJcIiwgXCJub3ZlbWJlclwiLCBcImRlY2VtYmVyXCJdO1xuXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19yZWxlYXNlZGF0ZVwiKS5hcHBlbmQoZC5nZXREYXRlKCkgKyBcIiBcIiArIG1vbnRoc1tkLmdldE1vbnRoKCldICsgXCIgXCIgKyBkLmdldEZ1bGxZZWFyKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcblxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFdpc2hsaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiV2lzaGxpc3QgLSBBWiBHYW1lc1wiO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGRpdiBjbGFzcz1cImNvbC0xMlwiIGlkPVwid2lzaGxpc3RcIj48L2Rpdj48L2Rpdj4nKTtcblxuICAgICAgICBsb2FkV2lzaGxpc3Qodmlld0RhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRXaXNobGlzdCh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgbG9hZFdpc2hMaXN0XCIpO1xuICAgICAgICAkKFwiI3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy93aXNobGlzdC93aXNobGlzdC5odG1sJywgZnVuY3Rpb24gKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8gYWRkIGFsbCB3aXNobGlzdCBpdGVtcyB0byBodG1sXG4gICAgICAgICAgICB2YXIgY3VycmVudCA9IDA7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICAgICAgJC5lYWNoKHZpZXdEYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciB3aXNoX19saXN0X19pdGVtID0gJCgnPGRpdj4nKS5hcHBlbmQoJCgnI3dpc2hfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArMVxuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIHZhbHVlLmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19hdmFpbGFiaWxpdHlcIikuYXBwZW5kKEJlc2NoaWtiYWFyaGVpZEtsZXVyKHZhbHVlLnN0b2NrKSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgICQoXCIjc2hhcmVfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIm1haWx0bzo/c3ViamVjdD1NaWpuIHZlcmxhbmdsaWpzdCBvcCBBWi1HYW1lcy5ubCEmYm9keT1CZWtpamsgbWlqbiB2ZXJsYW5nbGlqc3Qgb3A6IGh0dHA6Ly9hei1nYW1lcy5ubC9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTsgLy8gQ0hFQ0sgRElTIVxuICAgICAgICAgICAgICAgICQoXCIjY2xpcGJvYXJkX19idG5cIikuYXR0cihcImhyZWZcIiwgXCIvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7XG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfbGlua1wiKS52YWwoXCJodHRwczovL2F6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xuXG4gICAgICAgICAgICAgICAgJChcIiN3aXNoX19saXN0XCIpLmFwcGVuZCh3aXNoX19saXN0X19pdGVtKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pc19wdWJsaWMgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNwdWJsaWNhdG9yXCIpLnZhbChcInByaXZhdGVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0biwgLnNoYXJlX19idG4sIC5jbGlwYm9hcmRfX2J0blwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuaXNfcHVibGljID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwdWJsaWNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIGhhcyB1bmV4cGVjdGVkIHZhbHVlLiB2YWx1ZSA9IFwiICsgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQWxzIGVyIGdlZW4gaXRlbXMgaW4gd2lzaGxpc3Qgc3RhYW4sIGRhbiBoaWRlIGRlIHZvbGdlbmRlIGRpdnMuXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICQoXCIjd2lzaGxpc3RfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJChcIiNwdWJsaWNfX3JlbGF0ZWRcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdFwiKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIiAgICAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREZWxldGVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCEkKCcjZGVsZXRlX2J0bicpLmhhc0NsYXNzKFwiYnRuLS1wcmVzc2VkXCIpKXtcbiAgICAgICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYWRkQ2xhc3MoXCJidG4tLXByZXNzZWRcIik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHZhciBlYW4gPSAkKHRoaXMpLmRhdGEoXCJpZFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZGl2X3RvX2hpZGUgPSAkKHRoaXMpLmNsb3Nlc3QoXCIucm93XCIpO1xuICAgICAgICAgICAgICAgIGFjdGlvbihlYW4sIGRpdl90b19oaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFB1YmxpY0xpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2hhbmdlXCIsIFwiI3B1YmxpY2F0b3JcIiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIGFjdGlvbih0aGlzLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUl0ZW0oZGl2X3RvX2hpZGUpXG4gICAge1xuICAgICAgICBkaXZfdG9faGlkZS5mYWRlVG8oMjAwLCAwKS5zbGlkZVVwKDIwMCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd0V4YW1wbGVCdXR0b24obmV3U3RhdHVzKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2cobmV3U3RhdHVzKTtcblxuICAgICAgICBpZiAobmV3U3RhdHVzID09IFwicHVibGljXCIpIHtcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0dXMgPT0gXCJwcml2YXRlXCIpIHtcbiAgICAgICAgICAgICQoXCIjZXhhbXBsZV9fYnRuXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICQoXCIuc2hhcmVfX2J0blwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLmNsaXBib2FyZF9fYnRuXCIpLmhpZGUoKTtcblxuICAgICAgICB9IGVsc2Uge2NvbnNvbGUubG9nKFwidW5leHBlY3RlZCBuZXdTdGF0dXMgdmFsdWUsIHZhbHVlID0gXCIrbmV3U3RhdHVzKX1cblxuXG4gICAgICAgICQoXCIjZXhhbXBsZV9fYnRuX19kaXZcIikuc2hvdygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIE9wZW5TbWFsbE1haWxXaW5kb3codXJsLCB3aW5kb3dOYW1lLCBmZWF0dXJlcylcbiAgICB7XG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgd2luZG93TmFtZSwgZmVhdHVyZXMpO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgbG9hZFdpc2hsaXN0OiBsb2FkV2lzaGxpc3QsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxuICAgICAgICBzZXRQdWJsaWNMaXN0ZW5lcjogc2V0UHVibGljTGlzdGVuZXIsXG4gICAgICAgIGhpZGVJdGVtOiBoaWRlSXRlbSxcbiAgICAgICAgc2hvd0V4YW1wbGVCdXR0b246IHNob3dFeGFtcGxlQnV0dG9uXG4gICAgfVxufSJdfQ==
