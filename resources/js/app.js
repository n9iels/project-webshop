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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LmpzIiwibWlub3J0b29scy5qcyIsIm9yZGVyLmpzIiwicm91dGVyLmpzIiwic2lkZWJhci5qcyIsInRvb2x0aXAuanMiLCJoZWxwZXJzL2Nvb2tpZS5qcyIsImhlbHBlcnMvZmF2b3JpdGVsaXN0LmpzIiwiaGVscGVycy9nbG9iYWwuanMiLCJoZWxwZXJzL3NlcmlhbGl6ZW9iamVjdC5qcyIsImhlbHBlcnMvdXNlci5qcyIsImhlbHBlcnMvd2lzaGxpc3QuanMiLCJhZG1pbl9tb2RlbC5qcyIsImFkbWludXNlcl9tb2RlbC5qcyIsImNhcnRfbW9kZWwuanMiLCJjaGVja291dF9tb2RlbC5qcyIsImZhdm9yaXRlbGlzdF9tb2RlbC5qcyIsImxvZ2luX21vZGVsLmpzIiwibG9nb3V0X21vZGVsLmpzIiwib3JkZXJfbW9kZWwuanMiLCJvcmRlcnNfbW9kZWwuanMiLCJwcm9kdWN0c19tb2RlbC5qcyIsInB1YmxpY193aXNobGlzdF9tb2RlbC5qcyIsInJlZ2lzdGVyX21vZGVsLmpzIiwicmVzZXRwYXNzd29yZF9tb2RlbC5qcyIsInNpbmdsZV9wcm9kdWN0X21vZGVsLmpzIiwic3RhdHNfbW9kZWwuanMiLCJ1c2VyX21vZGVsLmpzIiwid2lzaGxpc3RfbW9kZWwuanMiLCJhZG1pbl9jb250cm9sbGVyLmpzIiwiYWRtaW51c2VyX2NvbnRyb2xsZXIuanMiLCJjYXJ0X2NvbnRyb2xsZXIuanMiLCJjaGVja291dF9jb250cm9sbGVyLmpzIiwiZGVsZXRlX2NvbnRyb2xsZXIuanMiLCJlcnJvcl9jb250cm9sbGVyLmpzIiwiZmF2b3JpdGVsaXN0X2NvbnRyb2xsZXIuanMiLCJsb2dpbl9jb250cm9sbGVyLmpzIiwibG9nb3V0X2NvbnRyb2xsZXIuanMiLCJvcmRlcl9jb250cm9sbGVyLmpzIiwib3JkZXJzX2NvbnRyb2xsZXIuanMiLCJwcm9kdWN0c19jb250cm9sbGVyLmpzIiwicHVibGljX3dpc2hsaXN0X2NvbnRyb2xsZXIuanMiLCJyZWdpc3Rlcl9jb250cm9sbGVyLmpzIiwicmVzZXRwYXNzd29yZF9jb250cm9sbGVyLmpzIiwic2luZ2xlX3Byb2R1Y3RfY29udHJvbGxlci5qcyIsInN0YXRzX2NvbnRyb2xsZXIuanMiLCJ1c2VyX2NvbnRyb2xsZXIuanMiLCJ3aXNobGlzdF9jb250cm9sbGVyLmpzIiwiYWRtaW4vYWRtaW5fdmlldy5qcyIsImFkbWludXNlci9hZG1pbnVzZXJfdmlldy5qcyIsImNhcnQvY2FydF92aWV3LmpzIiwiY2hlY2tvdXQvY2hlY2tvdXRfdmlldy5qcyIsImVycm9yL2Vycm9yX3ZpZXcuanMiLCJmYXZvcml0ZWxpc3QvZmF2b3JpdGVsaXN0X3ZpZXcuanMiLCJncmFwaHMvZ3JhcGhzX3ZpZXcuanMiLCJsb2dpbi9sb2dpbl92aWV3LmpzIiwibG9nb3V0L2xvZ291dF92aWV3LmpzIiwib3JkZXIvb3JkZXJfdmlldy5qcyIsIm9yZGVycy9vcmRlcnNfdmlldy5qcyIsInByb2R1Y3RzL3Byb2R1Y3RzX3ZpZXcuanMiLCJwdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0X3ZpZXcuanMiLCJyZWdpc3Rlci9yZWdpc3Rlcl92aWV3LmpzIiwicmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkX3ZpZXcuanMiLCJzaW5nbGVfcHJvZHVjdC9zaW5nbGVfcHJvZHVjdF92aWV3LmpzIiwid2lzaGxpc3Qvd2lzaGxpc3Rfdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ2hhcnQuanNcbiAqIGh0dHA6Ly9jaGFydGpzLm9yZy9cbiAqIFZlcnNpb246IDIuNC4wXG4gKlxuICogQ29weXJpZ2h0IDIwMTYgTmljayBEb3duaWVcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJ0anMvQ2hhcnQuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG4hZnVuY3Rpb24odCl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9dCgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSx0KTtlbHNle3ZhciBlO2U9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLGUuQ2hhcnQ9dCgpfX0oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24gdChlLGEsaSl7ZnVuY3Rpb24gbihyLGwpe2lmKCFhW3JdKXtpZighZVtyXSl7dmFyIHM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighbCYmcylyZXR1cm4gcyhyLCEwKTtpZihvKXJldHVybiBvKHIsITApO3ZhciBkPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrcitcIidcIik7dGhyb3cgZC5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGR9dmFyIHU9YVtyXT17ZXhwb3J0czp7fX07ZVtyXVswXS5jYWxsKHUuZXhwb3J0cyxmdW5jdGlvbih0KXt2YXIgYT1lW3JdWzFdW3RdO3JldHVybiBuKGE/YTp0KX0sdSx1LmV4cG9ydHMsdCxlLGEsaSl9cmV0dXJuIGFbcl0uZXhwb3J0c31mb3IodmFyIG89XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxyPTA7cjxpLmxlbmd0aDtyKyspbihpW3JdKTtyZXR1cm4gbn0oezE6W2Z1bmN0aW9uKHQsZSxhKXt9LHt9XSwyOltmdW5jdGlvbih0LGUsYSl7ZnVuY3Rpb24gaSh0KXtpZih0KXt2YXIgZT0vXiMoW2EtZkEtRjAtOV17M30pJC8sYT0vXiMoW2EtZkEtRjAtOV17Nn0pJC8saT0vXnJnYmE/XFwoXFxzKihbKy1dP1xcZCspXFxzKixcXHMqKFsrLV0/XFxkKylcXHMqLFxccyooWystXT9cXGQrKVxccyooPzosXFxzKihbKy1dP1tcXGRcXC5dKylcXHMqKT9cXCkkLyxuPS9ecmdiYT9cXChcXHMqKFsrLV0/W1xcZFxcLl0rKVxcJVxccyosXFxzKihbKy1dP1tcXGRcXC5dKylcXCVcXHMqLFxccyooWystXT9bXFxkXFwuXSspXFwlXFxzKig/OixcXHMqKFsrLV0/W1xcZFxcLl0rKVxccyopP1xcKSQvLG89LyhcXHcrKS8scj1bMCwwLDBdLGw9MSxzPXQubWF0Y2goZSk7aWYocyl7cz1zWzFdO2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQoc1tkXStzW2RdLDE2KX1lbHNlIGlmKHM9dC5tYXRjaChhKSl7cz1zWzFdO2Zvcih2YXIgZD0wO2Q8ci5sZW5ndGg7ZCsrKXJbZF09cGFyc2VJbnQocy5zbGljZSgyKmQsMipkKzIpLDE2KX1lbHNlIGlmKHM9dC5tYXRjaChpKSl7Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1wYXJzZUludChzW2QrMV0pO2w9cGFyc2VGbG9hdChzWzRdKX1lbHNlIGlmKHM9dC5tYXRjaChuKSl7Zm9yKHZhciBkPTA7ZDxyLmxlbmd0aDtkKyspcltkXT1NYXRoLnJvdW5kKDIuNTUqcGFyc2VGbG9hdChzW2QrMV0pKTtsPXBhcnNlRmxvYXQoc1s0XSl9ZWxzZSBpZihzPXQubWF0Y2gobykpe2lmKFwidHJhbnNwYXJlbnRcIj09c1sxXSlyZXR1cm5bMCwwLDAsMF07aWYocj15W3NbMV1dLCFyKXJldHVybn1mb3IodmFyIGQ9MDtkPHIubGVuZ3RoO2QrKylyW2RdPXYocltkXSwwLDI1NSk7cmV0dXJuIGw9bHx8MD09bD92KGwsMCwxKToxLHJbM109bCxyfX1mdW5jdGlvbiBuKHQpe2lmKHQpe3ZhciBlPS9eaHNsYT9cXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLyxhPXQubWF0Y2goZSk7aWYoYSl7dmFyIGk9cGFyc2VGbG9hdChhWzRdKSxuPXYocGFyc2VJbnQoYVsxXSksMCwzNjApLG89dihwYXJzZUZsb2F0KGFbMl0pLDAsMTAwKSxyPXYocGFyc2VGbG9hdChhWzNdKSwwLDEwMCksbD12KGlzTmFOKGkpPzE6aSwwLDEpO3JldHVybltuLG8scixsXX19fWZ1bmN0aW9uIG8odCl7aWYodCl7dmFyIGU9L15od2JcXChcXHMqKFsrLV0/XFxkKykoPzpkZWcpP1xccyosXFxzKihbKy1dP1tcXGRcXC5dKyklXFxzKixcXHMqKFsrLV0/W1xcZFxcLl0rKSVcXHMqKD86LFxccyooWystXT9bXFxkXFwuXSspXFxzKik/XFwpLyxhPXQubWF0Y2goZSk7aWYoYSl7dmFyIGk9cGFyc2VGbG9hdChhWzRdKSxuPXYocGFyc2VJbnQoYVsxXSksMCwzNjApLG89dihwYXJzZUZsb2F0KGFbMl0pLDAsMTAwKSxyPXYocGFyc2VGbG9hdChhWzNdKSwwLDEwMCksbD12KGlzTmFOKGkpPzE6aSwwLDEpO3JldHVybltuLG8scixsXX19fWZ1bmN0aW9uIHIodCl7dmFyIGU9aSh0KTtyZXR1cm4gZSYmZS5zbGljZSgwLDMpfWZ1bmN0aW9uIGwodCl7dmFyIGU9bih0KTtyZXR1cm4gZSYmZS5zbGljZSgwLDMpfWZ1bmN0aW9uIHModCl7dmFyIGU9aSh0KTtyZXR1cm4gZT9lWzNdOihlPW4odCkpP2VbM106KGU9byh0KSk/ZVszXTp2b2lkIDB9ZnVuY3Rpb24gZCh0KXtyZXR1cm5cIiNcIit4KHRbMF0pK3godFsxXSkreCh0WzJdKX1mdW5jdGlvbiB1KHQsZSl7cmV0dXJuIDE+ZXx8dFszXSYmdFszXTwxP2ModCxlKTpcInJnYihcIit0WzBdK1wiLCBcIit0WzFdK1wiLCBcIit0WzJdK1wiKVwifWZ1bmN0aW9uIGModCxlKXtyZXR1cm4gdm9pZCAwPT09ZSYmKGU9dm9pZCAwIT09dFszXT90WzNdOjEpLFwicmdiYShcIit0WzBdK1wiLCBcIit0WzFdK1wiLCBcIit0WzJdK1wiLCBcIitlK1wiKVwifWZ1bmN0aW9uIGgodCxlKXtpZigxPmV8fHRbM10mJnRbM108MSlyZXR1cm4gZih0LGUpO3ZhciBhPU1hdGgucm91bmQodFswXS8yNTUqMTAwKSxpPU1hdGgucm91bmQodFsxXS8yNTUqMTAwKSxuPU1hdGgucm91bmQodFsyXS8yNTUqMTAwKTtyZXR1cm5cInJnYihcIithK1wiJSwgXCIraStcIiUsIFwiK24rXCIlKVwifWZ1bmN0aW9uIGYodCxlKXt2YXIgYT1NYXRoLnJvdW5kKHRbMF0vMjU1KjEwMCksaT1NYXRoLnJvdW5kKHRbMV0vMjU1KjEwMCksbj1NYXRoLnJvdW5kKHRbMl0vMjU1KjEwMCk7cmV0dXJuXCJyZ2JhKFwiK2ErXCIlLCBcIitpK1wiJSwgXCIrbitcIiUsIFwiKyhlfHx0WzNdfHwxKStcIilcIn1mdW5jdGlvbiBnKHQsZSl7cmV0dXJuIDE+ZXx8dFszXSYmdFszXTwxP3AodCxlKTpcImhzbChcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiUpXCJ9ZnVuY3Rpb24gcCh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT12b2lkIDAhPT10WzNdP3RbM106MSksXCJoc2xhKFwiK3RbMF0rXCIsIFwiK3RbMV0rXCIlLCBcIit0WzJdK1wiJSwgXCIrZStcIilcIn1mdW5jdGlvbiBtKHQsZSl7cmV0dXJuIHZvaWQgMD09PWUmJihlPXZvaWQgMCE9PXRbM10/dFszXToxKSxcImh3YihcIit0WzBdK1wiLCBcIit0WzFdK1wiJSwgXCIrdFsyXStcIiVcIisodm9pZCAwIT09ZSYmMSE9PWU/XCIsIFwiK2U6XCJcIikrXCIpXCJ9ZnVuY3Rpb24gYih0KXtyZXR1cm4ga1t0LnNsaWNlKDAsMyldfWZ1bmN0aW9uIHYodCxlLGEpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChlLHQpLGEpfWZ1bmN0aW9uIHgodCl7dmFyIGU9dC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtyZXR1cm4gZS5sZW5ndGg8Mj9cIjBcIitlOmV9dmFyIHk9dCg2KTtlLmV4cG9ydHM9e2dldFJnYmE6aSxnZXRIc2xhOm4sZ2V0UmdiOnIsZ2V0SHNsOmwsZ2V0SHdiOm8sZ2V0QWxwaGE6cyxoZXhTdHJpbmc6ZCxyZ2JTdHJpbmc6dSxyZ2JhU3RyaW5nOmMscGVyY2VudFN0cmluZzpoLHBlcmNlbnRhU3RyaW5nOmYsaHNsU3RyaW5nOmcsaHNsYVN0cmluZzpwLGh3YlN0cmluZzptLGtleXdvcmQ6Yn07dmFyIGs9e307Zm9yKHZhciBTIGluIHkpa1t5W1NdXT1TfSx7Njo2fV0sMzpbZnVuY3Rpb24odCxlLGEpe3ZhciBpPXQoNSksbj10KDIpLG89ZnVuY3Rpb24odCl7aWYodCBpbnN0YW5jZW9mIG8pcmV0dXJuIHQ7aWYoISh0aGlzIGluc3RhbmNlb2YgbykpcmV0dXJuIG5ldyBvKHQpO3RoaXMudmFsdWVzPXtyZ2I6WzAsMCwwXSxoc2w6WzAsMCwwXSxoc3Y6WzAsMCwwXSxod2I6WzAsMCwwXSxjbXlrOlswLDAsMCwwXSxhbHBoYToxfTt2YXIgZTtpZihcInN0cmluZ1wiPT10eXBlb2YgdClpZihlPW4uZ2V0UmdiYSh0KSl0aGlzLnNldFZhbHVlcyhcInJnYlwiLGUpO2Vsc2UgaWYoZT1uLmdldEhzbGEodCkpdGhpcy5zZXRWYWx1ZXMoXCJoc2xcIixlKTtlbHNle2lmKCEoZT1uLmdldEh3Yih0KSkpdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gcGFyc2UgY29sb3IgZnJvbSBzdHJpbmcgXCInK3QrJ1wiJyk7dGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKX1lbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiB0KWlmKGU9dCx2b2lkIDAhPT1lLnJ8fHZvaWQgMCE9PWUucmVkKXRoaXMuc2V0VmFsdWVzKFwicmdiXCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLmx8fHZvaWQgMCE9PWUubGlnaHRuZXNzKXRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSk7ZWxzZSBpZih2b2lkIDAhPT1lLnZ8fHZvaWQgMCE9PWUudmFsdWUpdGhpcy5zZXRWYWx1ZXMoXCJoc3ZcIixlKTtlbHNlIGlmKHZvaWQgMCE9PWUud3x8dm9pZCAwIT09ZS53aGl0ZW5lc3MpdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKTtlbHNle2lmKHZvaWQgMD09PWUuYyYmdm9pZCAwPT09ZS5jeWFuKXRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBwYXJzZSBjb2xvciBmcm9tIG9iamVjdCBcIitKU09OLnN0cmluZ2lmeSh0KSk7dGhpcy5zZXRWYWx1ZXMoXCJjbXlrXCIsZSl9fTtvLnByb3RvdHlwZT17cmdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJyZ2JcIixhcmd1bWVudHMpfSxoc2w6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zZXRTcGFjZShcImhzbFwiLGFyZ3VtZW50cyl9LGhzdjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNldFNwYWNlKFwiaHN2XCIsYXJndW1lbnRzKX0saHdiOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJod2JcIixhcmd1bWVudHMpfSxjbXlrOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2V0U3BhY2UoXCJjbXlrXCIsYXJndW1lbnRzKX0scmdiQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy52YWx1ZXMucmdifSxoc2xBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5oc2x9LGhzdkFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmFsdWVzLmhzdn0saHdiQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gMSE9PXQuYWxwaGE/dC5od2IuY29uY2F0KFt0LmFscGhhXSk6dC5od2J9LGNteWtBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlcy5jbXlrfSxyZ2JhQXJyYXk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcztyZXR1cm4gdC5yZ2IuY29uY2F0KFt0LmFscGhhXSl9LGhzbGFBcnJheTpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzO3JldHVybiB0LmhzbC5jb25jYXQoW3QuYWxwaGFdKX0sYWxwaGE6ZnVuY3Rpb24odCl7cmV0dXJuIHZvaWQgMD09PXQ/dGhpcy52YWx1ZXMuYWxwaGE6KHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIix0KSx0aGlzKX0scmVkOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJyZ2JcIiwwLHQpfSxncmVlbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMSx0KX0sYmx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwicmdiXCIsMix0KX0saHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0JiYodCU9MzYwLHQ9MD50PzM2MCt0OnQpLHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDAsdCl9LHNhdHVyYXRpb246ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzbFwiLDEsdCl9LGxpZ2h0bmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHNsXCIsMix0KX0sc2F0dXJhdGlvbnY6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImhzdlwiLDEsdCl9LHdoaXRlbmVzczpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHdiXCIsMSx0KX0sYmxhY2tuZXNzOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnNldENoYW5uZWwoXCJod2JcIiwyLHQpfSx2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiaHN2XCIsMix0KX0sY3lhbjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDAsdCl9LG1hZ2VudGE6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwxLHQpfSx5ZWxsb3c6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuc2V0Q2hhbm5lbChcImNteWtcIiwyLHQpfSxibGFjazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zZXRDaGFubmVsKFwiY215a1wiLDMsdCl9LGhleFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmhleFN0cmluZyh0aGlzLnZhbHVlcy5yZ2IpfSxyZ2JTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5yZ2JTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scmdiYVN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnJnYmFTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0scGVyY2VudFN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLnBlcmNlbnRTdHJpbmcodGhpcy52YWx1ZXMucmdiLHRoaXMudmFsdWVzLmFscGhhKX0saHNsU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuIG4uaHNsU3RyaW5nKHRoaXMudmFsdWVzLmhzbCx0aGlzLnZhbHVlcy5hbHBoYSl9LGhzbGFTdHJpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbi5oc2xhU3RyaW5nKHRoaXMudmFsdWVzLmhzbCx0aGlzLnZhbHVlcy5hbHBoYSl9LGh3YlN0cmluZzpmdW5jdGlvbigpe3JldHVybiBuLmh3YlN0cmluZyh0aGlzLnZhbHVlcy5od2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxrZXl3b3JkOmZ1bmN0aW9uKCl7cmV0dXJuIG4ua2V5d29yZCh0aGlzLnZhbHVlcy5yZ2IsdGhpcy52YWx1ZXMuYWxwaGEpfSxyZ2JOdW1iZXI6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2I7cmV0dXJuIHRbMF08PDE2fHRbMV08PDh8dFsyXX0sbHVtaW5vc2l0eTpmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT1bXSxhPTA7YTx0Lmxlbmd0aDthKyspe3ZhciBpPXRbYV0vMjU1O2VbYV09LjAzOTI4Pj1pP2kvMTIuOTI6TWF0aC5wb3coKGkrLjA1NSkvMS4wNTUsMi40KX1yZXR1cm4uMjEyNiplWzBdKy43MTUyKmVbMV0rLjA3MjIqZVsyXX0sY29udHJhc3Q6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5sdW1pbm9zaXR5KCksYT10Lmx1bWlub3NpdHkoKTtyZXR1cm4gZT5hPyhlKy4wNSkvKGErLjA1KTooYSsuMDUpLyhlKy4wNSl9LGxldmVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29udHJhc3QodCk7cmV0dXJuIGU+PTcuMT9cIkFBQVwiOmU+PTQuNT9cIkFBXCI6XCJcIn0sZGFyazpmdW5jdGlvbigpe3ZhciB0PXRoaXMudmFsdWVzLnJnYixlPSgyOTkqdFswXSs1ODcqdFsxXSsxMTQqdFsyXSkvMWUzO3JldHVybiAxMjg+ZX0sbGlnaHQ6ZnVuY3Rpb24oKXtyZXR1cm4hdGhpcy5kYXJrKCl9LG5lZ2F0ZTpmdW5jdGlvbigpe2Zvcih2YXIgdD1bXSxlPTA7Mz5lO2UrKyl0W2VdPTI1NS10aGlzLnZhbHVlcy5yZ2JbZV07cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwicmdiXCIsdCksdGhpc30sbGlnaHRlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMl0rPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LGRhcmtlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMl0tPWVbMl0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LHNhdHVyYXRlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWVzLmhzbDtyZXR1cm4gZVsxXSs9ZVsxXSp0LHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sZGVzYXR1cmF0ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5oc2w7cmV0dXJuIGVbMV0tPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImhzbFwiLGUpLHRoaXN9LHdoaXRlbjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5od2I7cmV0dXJuIGVbMV0rPWVbMV0qdCx0aGlzLnNldFZhbHVlcyhcImh3YlwiLGUpLHRoaXN9LGJsYWNrZW46ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHdiO3JldHVybiBlWzJdKz1lWzJdKnQsdGhpcy5zZXRWYWx1ZXMoXCJod2JcIixlKSx0aGlzfSxncmV5c2NhbGU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlcy5yZ2IsZT0uMyp0WzBdKy41OSp0WzFdKy4xMSp0WzJdO3JldHVybiB0aGlzLnNldFZhbHVlcyhcInJnYlwiLFtlLGUsZV0pLHRoaXN9LGNsZWFyZXI6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuYWxwaGE7cmV0dXJuIHRoaXMuc2V0VmFsdWVzKFwiYWxwaGFcIixlLWUqdCksdGhpc30sb3BhcXVlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLnZhbHVlcy5hbHBoYTtyZXR1cm4gdGhpcy5zZXRWYWx1ZXMoXCJhbHBoYVwiLGUrZSp0KSx0aGlzfSxyb3RhdGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy52YWx1ZXMuaHNsLGE9KGVbMF0rdCklMzYwO3JldHVybiBlWzBdPTA+YT8zNjArYTphLHRoaXMuc2V0VmFsdWVzKFwiaHNsXCIsZSksdGhpc30sbWl4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPXQsbj12b2lkIDA9PT1lPy41OmUsbz0yKm4tMSxyPWEuYWxwaGEoKS1pLmFscGhhKCksbD0oKG8qcj09PS0xP286KG8rcikvKDErbypyKSkrMSkvMixzPTEtbDtyZXR1cm4gdGhpcy5yZ2IobCphLnJlZCgpK3MqaS5yZWQoKSxsKmEuZ3JlZW4oKStzKmkuZ3JlZW4oKSxsKmEuYmx1ZSgpK3MqaS5ibHVlKCkpLmFscGhhKGEuYWxwaGEoKSpuK2kuYWxwaGEoKSooMS1uKSl9LHRvSlNPTjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJnYigpfSxjbG9uZTpmdW5jdGlvbigpe3ZhciB0LGUsYT1uZXcgbyxpPXRoaXMudmFsdWVzLG49YS52YWx1ZXM7Zm9yKHZhciByIGluIGkpaS5oYXNPd25Qcm9wZXJ0eShyKSYmKHQ9aVtyXSxlPXt9LnRvU3RyaW5nLmNhbGwodCksXCJbb2JqZWN0IEFycmF5XVwiPT09ZT9uW3JdPXQuc2xpY2UoMCk6XCJbb2JqZWN0IE51bWJlcl1cIj09PWU/bltyXT10OmNvbnNvbGUuZXJyb3IoXCJ1bmV4cGVjdGVkIGNvbG9yIHZhbHVlOlwiLHQpKTtyZXR1cm4gYX19LG8ucHJvdG90eXBlLnNwYWNlcz17cmdiOltcInJlZFwiLFwiZ3JlZW5cIixcImJsdWVcIl0saHNsOltcImh1ZVwiLFwic2F0dXJhdGlvblwiLFwibGlnaHRuZXNzXCJdLGhzdjpbXCJodWVcIixcInNhdHVyYXRpb25cIixcInZhbHVlXCJdLGh3YjpbXCJodWVcIixcIndoaXRlbmVzc1wiLFwiYmxhY2tuZXNzXCJdLGNteWs6W1wiY3lhblwiLFwibWFnZW50YVwiLFwieWVsbG93XCIsXCJibGFja1wiXX0sby5wcm90b3R5cGUubWF4ZXM9e3JnYjpbMjU1LDI1NSwyNTVdLGhzbDpbMzYwLDEwMCwxMDBdLGhzdjpbMzYwLDEwMCwxMDBdLGh3YjpbMzYwLDEwMCwxMDBdLGNteWs6WzEwMCwxMDAsMTAwLDEwMF19LG8ucHJvdG90eXBlLmdldFZhbHVlcz1mdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy52YWx1ZXMsYT17fSxpPTA7aTx0Lmxlbmd0aDtpKyspYVt0LmNoYXJBdChpKV09ZVt0XVtpXTtyZXR1cm4gMSE9PWUuYWxwaGEmJihhLmE9ZS5hbHBoYSksYX0sby5wcm90b3R5cGUuc2V0VmFsdWVzPWZ1bmN0aW9uKHQsZSl7dmFyIGEsbj10aGlzLnZhbHVlcyxvPXRoaXMuc3BhY2VzLHI9dGhpcy5tYXhlcyxsPTE7aWYoXCJhbHBoYVwiPT09dClsPWU7ZWxzZSBpZihlLmxlbmd0aCluW3RdPWUuc2xpY2UoMCx0Lmxlbmd0aCksbD1lW3QubGVuZ3RoXTtlbHNlIGlmKHZvaWQgMCE9PWVbdC5jaGFyQXQoMCldKXtmb3IoYT0wO2E8dC5sZW5ndGg7YSsrKW5bdF1bYV09ZVt0LmNoYXJBdChhKV07bD1lLmF9ZWxzZSBpZih2b2lkIDAhPT1lW29bdF1bMF1dKXt2YXIgcz1vW3RdO2ZvcihhPTA7YTx0Lmxlbmd0aDthKyspblt0XVthXT1lW3NbYV1dO2w9ZS5hbHBoYX1pZihuLmFscGhhPU1hdGgubWF4KDAsTWF0aC5taW4oMSx2b2lkIDA9PT1sP24uYWxwaGE6bCkpLFwiYWxwaGFcIj09PXQpcmV0dXJuITE7dmFyIGQ7Zm9yKGE9MDthPHQubGVuZ3RoO2ErKylkPU1hdGgubWF4KDAsTWF0aC5taW4oclt0XVthXSxuW3RdW2FdKSksblt0XVthXT1NYXRoLnJvdW5kKGQpO2Zvcih2YXIgdSBpbiBvKXUhPT10JiYoblt1XT1pW3RdW3VdKG5bdF0pKTtyZXR1cm4hMH0sby5wcm90b3R5cGUuc2V0U3BhY2U9ZnVuY3Rpb24odCxlKXt2YXIgYT1lWzBdO3JldHVybiB2b2lkIDA9PT1hP3RoaXMuZ2V0VmFsdWVzKHQpOihcIm51bWJlclwiPT10eXBlb2YgYSYmKGE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZSkpLHRoaXMuc2V0VmFsdWVzKHQsYSksdGhpcyl9LG8ucHJvdG90eXBlLnNldENoYW5uZWw9ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMudmFsdWVzW3RdO3JldHVybiB2b2lkIDA9PT1hP2lbZV06YT09PWlbZV0/dGhpczooaVtlXT1hLHRoaXMuc2V0VmFsdWVzKHQsaSksdGhpcyl9LFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3cuQ29sb3I9byksZS5leHBvcnRzPW99LHsyOjIsNTo1fV0sNDpbZnVuY3Rpb24odCxlLGEpe2Z1bmN0aW9uIGkodCl7dmFyIGUsYSxpLG49dFswXS8yNTUsbz10WzFdLzI1NSxyPXRbMl0vMjU1LGw9TWF0aC5taW4obixvLHIpLHM9TWF0aC5tYXgobixvLHIpLGQ9cy1sO3JldHVybiBzPT1sP2U9MDpuPT1zP2U9KG8tcikvZDpvPT1zP2U9Misoci1uKS9kOnI9PXMmJihlPTQrKG4tbykvZCksZT1NYXRoLm1pbig2MCplLDM2MCksMD5lJiYoZSs9MzYwKSxpPShsK3MpLzIsYT1zPT1sPzA6LjU+PWk/ZC8ocytsKTpkLygyLXMtbCksW2UsMTAwKmEsMTAwKmldfWZ1bmN0aW9uIG4odCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdLGw9TWF0aC5taW4obixvLHIpLHM9TWF0aC5tYXgobixvLHIpLGQ9cy1sO3JldHVybiBhPTA9PXM/MDpkL3MqMWUzLzEwLHM9PWw/ZT0wOm49PXM/ZT0oby1yKS9kOm89PXM/ZT0yKyhyLW4pL2Q6cj09cyYmKGU9NCsobi1vKS9kKSxlPU1hdGgubWluKDYwKmUsMzYwKSwwPmUmJihlKz0zNjApLGk9cy8yNTUqMWUzLzEwLFtlLGEsaV19ZnVuY3Rpb24gbyh0KXt2YXIgZT10WzBdLGE9dFsxXSxuPXRbMl0sbz1pKHQpWzBdLHI9MS8yNTUqTWF0aC5taW4oZSxNYXRoLm1pbihhLG4pKSxuPTEtMS8yNTUqTWF0aC5tYXgoZSxNYXRoLm1heChhLG4pKTtyZXR1cm5bbywxMDAqciwxMDAqbl19ZnVuY3Rpb24gbCh0KXt2YXIgZSxhLGksbixvPXRbMF0vMjU1LHI9dFsxXS8yNTUsbD10WzJdLzI1NTtyZXR1cm4gbj1NYXRoLm1pbigxLW8sMS1yLDEtbCksZT0oMS1vLW4pLygxLW4pfHwwLGE9KDEtci1uKS8oMS1uKXx8MCxpPSgxLWwtbikvKDEtbil8fDAsWzEwMCplLDEwMCphLDEwMCppLDEwMCpuXX1mdW5jdGlvbiBzKHQpe3JldHVybiBHW0pTT04uc3RyaW5naWZ5KHQpXX1mdW5jdGlvbiBkKHQpe3ZhciBlPXRbMF0vMjU1LGE9dFsxXS8yNTUsaT10WzJdLzI1NTtlPWU+LjA0MDQ1P01hdGgucG93KChlKy4wNTUpLzEuMDU1LDIuNCk6ZS8xMi45MixhPWE+LjA0MDQ1P01hdGgucG93KChhKy4wNTUpLzEuMDU1LDIuNCk6YS8xMi45MixpPWk+LjA0MDQ1P01hdGgucG93KChpKy4wNTUpLzEuMDU1LDIuNCk6aS8xMi45Mjt2YXIgbj0uNDEyNCplKy4zNTc2KmErLjE4MDUqaSxvPS4yMTI2KmUrLjcxNTIqYSsuMDcyMippLHI9LjAxOTMqZSsuMTE5MiphKy45NTA1Kmk7cmV0dXJuWzEwMCpuLDEwMCpvLDEwMCpyXX1mdW5jdGlvbiB1KHQpe3ZhciBlLGEsaSxuPWQodCksbz1uWzBdLHI9blsxXSxsPW5bMl07cmV0dXJuIG8vPTk1LjA0NyxyLz0xMDAsbC89MTA4Ljg4MyxvPW8+LjAwODg1Nj9NYXRoLnBvdyhvLDEvMyk6Ny43ODcqbysxNi8xMTYscj1yPi4wMDg4NTY/TWF0aC5wb3cociwxLzMpOjcuNzg3KnIrMTYvMTE2LGw9bD4uMDA4ODU2P01hdGgucG93KGwsMS8zKTo3Ljc4NypsKzE2LzExNixlPTExNipyLTE2LGE9NTAwKihvLXIpLGk9MjAwKihyLWwpLFtlLGEsaV19ZnVuY3Rpb24gYyh0KXtyZXR1cm4gVyh1KHQpKX1mdW5jdGlvbiBoKHQpe3ZhciBlLGEsaSxuLG8scj10WzBdLzM2MCxsPXRbMV0vMTAwLHM9dFsyXS8xMDA7aWYoMD09bClyZXR1cm4gbz0yNTUqcyxbbyxvLG9dO2E9LjU+cz9zKigxK2wpOnMrbC1zKmwsZT0yKnMtYSxuPVswLDAsMF07Zm9yKHZhciBkPTA7Mz5kO2QrKylpPXIrMS8zKi0oZC0xKSwwPmkmJmkrKyxpPjEmJmktLSxvPTE+NippP2UrNiooYS1lKSppOjE+MippP2E6Mj4zKmk/ZSsoYS1lKSooMi8zLWkpKjY6ZSxuW2RdPTI1NSpvO3JldHVybiBufWZ1bmN0aW9uIGYodCl7dmFyIGUsYSxpPXRbMF0sbj10WzFdLzEwMCxvPXRbMl0vMTAwO3JldHVybiAwPT09bz9bMCwwLDBdOihvKj0yLG4qPTE+PW8/bzoyLW8sYT0obytuKS8yLGU9MipuLyhvK24pLFtpLDEwMCplLDEwMCphXSl9ZnVuY3Rpb24gcCh0KXtyZXR1cm4gbyhoKHQpKX1mdW5jdGlvbiBtKHQpe3JldHVybiBsKGgodCkpfWZ1bmN0aW9uIHYodCl7cmV0dXJuIHMoaCh0KSl9ZnVuY3Rpb24geCh0KXt2YXIgZT10WzBdLzYwLGE9dFsxXS8xMDAsaT10WzJdLzEwMCxuPU1hdGguZmxvb3IoZSklNixvPWUtTWF0aC5mbG9vcihlKSxyPTI1NSppKigxLWEpLGw9MjU1KmkqKDEtYSpvKSxzPTI1NSppKigxLWEqKDEtbykpLGk9MjU1Kmk7c3dpdGNoKG4pe2Nhc2UgMDpyZXR1cm5baSxzLHJdO2Nhc2UgMTpyZXR1cm5bbCxpLHJdO2Nhc2UgMjpyZXR1cm5bcixpLHNdO2Nhc2UgMzpyZXR1cm5bcixsLGldO2Nhc2UgNDpyZXR1cm5bcyxyLGldO2Nhc2UgNTpyZXR1cm5baSxyLGxdfX1mdW5jdGlvbiB5KHQpe3ZhciBlLGEsaT10WzBdLG49dFsxXS8xMDAsbz10WzJdLzEwMDtyZXR1cm4gYT0oMi1uKSpvLGU9bipvLGUvPTE+PWE/YToyLWEsZT1lfHwwLGEvPTIsW2ksMTAwKmUsMTAwKmFdfWZ1bmN0aW9uIGsodCl7cmV0dXJuIG8oeCh0KSl9ZnVuY3Rpb24gUyh0KXtyZXR1cm4gbCh4KHQpKX1mdW5jdGlvbiB3KHQpe3JldHVybiBzKHgodCkpfWZ1bmN0aW9uIE0odCl7dmFyIGUsYSxpLG4sbz10WzBdLzM2MCxsPXRbMV0vMTAwLHM9dFsyXS8xMDAsZD1sK3M7c3dpdGNoKGQ+MSYmKGwvPWQscy89ZCksZT1NYXRoLmZsb29yKDYqbyksYT0xLXMsaT02Km8tZSwwIT0oMSZlKSYmKGk9MS1pKSxuPWwraSooYS1sKSxlKXtkZWZhdWx0OmNhc2UgNjpjYXNlIDA6cj1hLGc9bixiPWw7YnJlYWs7Y2FzZSAxOnI9bixnPWEsYj1sO2JyZWFrO2Nhc2UgMjpyPWwsZz1hLGI9bjticmVhaztjYXNlIDM6cj1sLGc9bixiPWE7YnJlYWs7Y2FzZSA0OnI9bixnPWwsYj1hO2JyZWFrO2Nhc2UgNTpyPWEsZz1sLGI9bn1yZXR1cm5bMjU1KnIsMjU1KmcsMjU1KmJdfWZ1bmN0aW9uIEModCl7cmV0dXJuIGkoTSh0KSl9ZnVuY3Rpb24gRCh0KXtyZXR1cm4gbihNKHQpKX1mdW5jdGlvbiBJKHQpe3JldHVybiBsKE0odCkpfWZ1bmN0aW9uIEEodCl7cmV0dXJuIHMoTSh0KSl9ZnVuY3Rpb24gVCh0KXt2YXIgZSxhLGksbj10WzBdLzEwMCxvPXRbMV0vMTAwLHI9dFsyXS8xMDAsbD10WzNdLzEwMDtyZXR1cm4gZT0xLU1hdGgubWluKDEsbiooMS1sKStsKSxhPTEtTWF0aC5taW4oMSxvKigxLWwpK2wpLGk9MS1NYXRoLm1pbigxLHIqKDEtbCkrbCksWzI1NSplLDI1NSphLDI1NSppXX1mdW5jdGlvbiBQKHQpe3JldHVybiBpKFQodCkpfWZ1bmN0aW9uIEYodCl7cmV0dXJuIG4oVCh0KSl9ZnVuY3Rpb24gXyh0KXtyZXR1cm4gbyhUKHQpKX1mdW5jdGlvbiBSKHQpe3JldHVybiBzKFQodCkpfWZ1bmN0aW9uIFYodCl7dmFyIGUsYSxpLG49dFswXS8xMDAsbz10WzFdLzEwMCxyPXRbMl0vMTAwO3JldHVybiBlPTMuMjQwNipuKy0xLjUzNzIqbytyKi0uNDk4NixhPW4qLS45Njg5KzEuODc1OCpvKy4wNDE1KnIsaT0uMDU1NypuK28qLS4yMDQrMS4wNTcqcixlPWU+LjAwMzEzMDg/MS4wNTUqTWF0aC5wb3coZSwxLzIuNCktLjA1NTplPTEyLjkyKmUsYT1hPi4wMDMxMzA4PzEuMDU1Kk1hdGgucG93KGEsMS8yLjQpLS4wNTU6YT0xMi45MiphLGk9aT4uMDAzMTMwOD8xLjA1NSpNYXRoLnBvdyhpLDEvMi40KS0uMDU1Omk9MTIuOTIqaSxlPU1hdGgubWluKE1hdGgubWF4KDAsZSksMSksYT1NYXRoLm1pbihNYXRoLm1heCgwLGEpLDEpLGk9TWF0aC5taW4oTWF0aC5tYXgoMCxpKSwxKSxbMjU1KmUsMjU1KmEsMjU1KmldfWZ1bmN0aW9uIEwodCl7dmFyIGUsYSxpLG49dFswXSxvPXRbMV0scj10WzJdO3JldHVybiBuLz05NS4wNDcsby89MTAwLHIvPTEwOC44ODMsbj1uPi4wMDg4NTY/TWF0aC5wb3cobiwxLzMpOjcuNzg3Km4rMTYvMTE2LG89bz4uMDA4ODU2P01hdGgucG93KG8sMS8zKTo3Ljc4NypvKzE2LzExNixyPXI+LjAwODg1Nj9NYXRoLnBvdyhyLDEvMyk6Ny43ODcqcisxNi8xMTYsZT0xMTYqby0xNixhPTUwMCoobi1vKSxpPTIwMCooby1yKSxbZSxhLGldfWZ1bmN0aW9uIE8odCl7cmV0dXJuIFcoTCh0KSl9ZnVuY3Rpb24gQih0KXt2YXIgZSxhLGksbixvPXRbMF0scj10WzFdLGw9dFsyXTtyZXR1cm4gOD49bz8oYT0xMDAqby85MDMuMyxuPTcuNzg3KihhLzEwMCkrMTYvMTE2KTooYT0xMDAqTWF0aC5wb3coKG8rMTYpLzExNiwzKSxuPU1hdGgucG93KGEvMTAwLDEvMykpLGU9LjAwODg1Nj49ZS85NS4wNDc/ZT05NS4wNDcqKHIvNTAwK24tMTYvMTE2KS83Ljc4Nzo5NS4wNDcqTWF0aC5wb3coci81MDArbiwzKSxpPS4wMDg4NTk+PWkvMTA4Ljg4Mz9pPTEwOC44ODMqKG4tbC8yMDAtMTYvMTE2KS83Ljc4NzoxMDguODgzKk1hdGgucG93KG4tbC8yMDAsMyksW2UsYSxpXX1mdW5jdGlvbiBXKHQpe3ZhciBlLGEsaSxuPXRbMF0sbz10WzFdLHI9dFsyXTtyZXR1cm4gZT1NYXRoLmF0YW4yKHIsbyksYT0zNjAqZS8yL01hdGguUEksMD5hJiYoYSs9MzYwKSxpPU1hdGguc3FydChvKm8rcipyKSxbbixpLGFdfWZ1bmN0aW9uIHoodCl7cmV0dXJuIFYoQih0KSl9ZnVuY3Rpb24gTih0KXt2YXIgZSxhLGksbj10WzBdLG89dFsxXSxyPXRbMl07cmV0dXJuIGk9ci8zNjAqMipNYXRoLlBJLGU9bypNYXRoLmNvcyhpKSxhPW8qTWF0aC5zaW4oaSksW24sZSxhXX1mdW5jdGlvbiBFKHQpe3JldHVybiBCKE4odCkpfWZ1bmN0aW9uIEgodCl7cmV0dXJuIHooTih0KSl9ZnVuY3Rpb24gVSh0KXtyZXR1cm4gWlt0XX1mdW5jdGlvbiBqKHQpe3JldHVybiBpKFUodCkpfWZ1bmN0aW9uIHEodCl7cmV0dXJuIG4oVSh0KSl9ZnVuY3Rpb24gWSh0KXtyZXR1cm4gbyhVKHQpKX1mdW5jdGlvbiBYKHQpe3JldHVybiBsKFUodCkpfWZ1bmN0aW9uIEsodCl7cmV0dXJuIHUoVSh0KSl9ZnVuY3Rpb24gSih0KXtyZXR1cm4gZChVKHQpKX1lLmV4cG9ydHM9e3JnYjJoc2w6aSxyZ2IyaHN2Om4scmdiMmh3YjpvLHJnYjJjbXlrOmwscmdiMmtleXdvcmQ6cyxyZ2IyeHl6OmQscmdiMmxhYjp1LHJnYjJsY2g6Yyxoc2wycmdiOmgsaHNsMmhzdjpmLGhzbDJod2I6cCxoc2wyY215azptLGhzbDJrZXl3b3JkOnYsaHN2MnJnYjp4LGhzdjJoc2w6eSxoc3YyaHdiOmssaHN2MmNteWs6Uyxoc3Yya2V5d29yZDp3LGh3YjJyZ2I6TSxod2IyaHNsOkMsaHdiMmhzdjpELGh3YjJjbXlrOkksaHdiMmtleXdvcmQ6QSxjbXlrMnJnYjpULGNteWsyaHNsOlAsY215azJoc3Y6RixjbXlrMmh3YjpfLGNteWsya2V5d29yZDpSLGtleXdvcmQycmdiOlUsa2V5d29yZDJoc2w6aixrZXl3b3JkMmhzdjpxLGtleXdvcmQyaHdiOlksa2V5d29yZDJjbXlrOlgsa2V5d29yZDJsYWI6SyxrZXl3b3JkMnh5ejpKLHh5ejJyZ2I6Vix4eXoybGFiOkwseHl6MmxjaDpPLGxhYjJ4eXo6QixsYWIycmdiOnosbGFiMmxjaDpXLGxjaDJsYWI6TixsY2gyeHl6OkUsbGNoMnJnYjpIfTt2YXIgWj17YWxpY2VibHVlOlsyNDAsMjQ4LDI1NV0sYW50aXF1ZXdoaXRlOlsyNTAsMjM1LDIxNV0sYXF1YTpbMCwyNTUsMjU1XSxhcXVhbWFyaW5lOlsxMjcsMjU1LDIxMl0sYXp1cmU6WzI0MCwyNTUsMjU1XSxiZWlnZTpbMjQ1LDI0NSwyMjBdLGJpc3F1ZTpbMjU1LDIyOCwxOTZdLGJsYWNrOlswLDAsMF0sYmxhbmNoZWRhbG1vbmQ6WzI1NSwyMzUsMjA1XSxibHVlOlswLDAsMjU1XSxibHVldmlvbGV0OlsxMzgsNDMsMjI2XSxicm93bjpbMTY1LDQyLDQyXSxidXJseXdvb2Q6WzIyMiwxODQsMTM1XSxjYWRldGJsdWU6Wzk1LDE1OCwxNjBdLGNoYXJ0cmV1c2U6WzEyNywyNTUsMF0sY2hvY29sYXRlOlsyMTAsMTA1LDMwXSxjb3JhbDpbMjU1LDEyNyw4MF0sY29ybmZsb3dlcmJsdWU6WzEwMCwxNDksMjM3XSxjb3Juc2lsazpbMjU1LDI0OCwyMjBdLGNyaW1zb246WzIyMCwyMCw2MF0sY3lhbjpbMCwyNTUsMjU1XSxkYXJrYmx1ZTpbMCwwLDEzOV0sZGFya2N5YW46WzAsMTM5LDEzOV0sZGFya2dvbGRlbnJvZDpbMTg0LDEzNCwxMV0sZGFya2dyYXk6WzE2OSwxNjksMTY5XSxkYXJrZ3JlZW46WzAsMTAwLDBdLGRhcmtncmV5OlsxNjksMTY5LDE2OV0sZGFya2toYWtpOlsxODksMTgzLDEwN10sZGFya21hZ2VudGE6WzEzOSwwLDEzOV0sZGFya29saXZlZ3JlZW46Wzg1LDEwNyw0N10sZGFya29yYW5nZTpbMjU1LDE0MCwwXSxkYXJrb3JjaGlkOlsxNTMsNTAsMjA0XSxkYXJrcmVkOlsxMzksMCwwXSxkYXJrc2FsbW9uOlsyMzMsMTUwLDEyMl0sZGFya3NlYWdyZWVuOlsxNDMsMTg4LDE0M10sZGFya3NsYXRlYmx1ZTpbNzIsNjEsMTM5XSxkYXJrc2xhdGVncmF5Ols0Nyw3OSw3OV0sZGFya3NsYXRlZ3JleTpbNDcsNzksNzldLGRhcmt0dXJxdW9pc2U6WzAsMjA2LDIwOV0sZGFya3Zpb2xldDpbMTQ4LDAsMjExXSxkZWVwcGluazpbMjU1LDIwLDE0N10sZGVlcHNreWJsdWU6WzAsMTkxLDI1NV0sZGltZ3JheTpbMTA1LDEwNSwxMDVdLGRpbWdyZXk6WzEwNSwxMDUsMTA1XSxkb2RnZXJibHVlOlszMCwxNDQsMjU1XSxmaXJlYnJpY2s6WzE3OCwzNCwzNF0sZmxvcmFsd2hpdGU6WzI1NSwyNTAsMjQwXSxmb3Jlc3RncmVlbjpbMzQsMTM5LDM0XSxmdWNoc2lhOlsyNTUsMCwyNTVdLGdhaW5zYm9ybzpbMjIwLDIyMCwyMjBdLGdob3N0d2hpdGU6WzI0OCwyNDgsMjU1XSxnb2xkOlsyNTUsMjE1LDBdLGdvbGRlbnJvZDpbMjE4LDE2NSwzMl0sZ3JheTpbMTI4LDEyOCwxMjhdLGdyZWVuOlswLDEyOCwwXSxncmVlbnllbGxvdzpbMTczLDI1NSw0N10sZ3JleTpbMTI4LDEyOCwxMjhdLGhvbmV5ZGV3OlsyNDAsMjU1LDI0MF0saG90cGluazpbMjU1LDEwNSwxODBdLGluZGlhbnJlZDpbMjA1LDkyLDkyXSxpbmRpZ286Wzc1LDAsMTMwXSxpdm9yeTpbMjU1LDI1NSwyNDBdLGtoYWtpOlsyNDAsMjMwLDE0MF0sbGF2ZW5kZXI6WzIzMCwyMzAsMjUwXSxsYXZlbmRlcmJsdXNoOlsyNTUsMjQwLDI0NV0sbGF3bmdyZWVuOlsxMjQsMjUyLDBdLGxlbW9uY2hpZmZvbjpbMjU1LDI1MCwyMDVdLGxpZ2h0Ymx1ZTpbMTczLDIxNiwyMzBdLGxpZ2h0Y29yYWw6WzI0MCwxMjgsMTI4XSxsaWdodGN5YW46WzIyNCwyNTUsMjU1XSxsaWdodGdvbGRlbnJvZHllbGxvdzpbMjUwLDI1MCwyMTBdLGxpZ2h0Z3JheTpbMjExLDIxMSwyMTFdLGxpZ2h0Z3JlZW46WzE0NCwyMzgsMTQ0XSxsaWdodGdyZXk6WzIxMSwyMTEsMjExXSxsaWdodHBpbms6WzI1NSwxODIsMTkzXSxsaWdodHNhbG1vbjpbMjU1LDE2MCwxMjJdLGxpZ2h0c2VhZ3JlZW46WzMyLDE3OCwxNzBdLGxpZ2h0c2t5Ymx1ZTpbMTM1LDIwNiwyNTBdLGxpZ2h0c2xhdGVncmF5OlsxMTksMTM2LDE1M10sbGlnaHRzbGF0ZWdyZXk6WzExOSwxMzYsMTUzXSxsaWdodHN0ZWVsYmx1ZTpbMTc2LDE5NiwyMjJdLGxpZ2h0eWVsbG93OlsyNTUsMjU1LDIyNF0sbGltZTpbMCwyNTUsMF0sbGltZWdyZWVuOls1MCwyMDUsNTBdLGxpbmVuOlsyNTAsMjQwLDIzMF0sbWFnZW50YTpbMjU1LDAsMjU1XSxtYXJvb246WzEyOCwwLDBdLG1lZGl1bWFxdWFtYXJpbmU6WzEwMiwyMDUsMTcwXSxtZWRpdW1ibHVlOlswLDAsMjA1XSxtZWRpdW1vcmNoaWQ6WzE4Niw4NSwyMTFdLG1lZGl1bXB1cnBsZTpbMTQ3LDExMiwyMTldLG1lZGl1bXNlYWdyZWVuOls2MCwxNzksMTEzXSxtZWRpdW1zbGF0ZWJsdWU6WzEyMywxMDQsMjM4XSxtZWRpdW1zcHJpbmdncmVlbjpbMCwyNTAsMTU0XSxtZWRpdW10dXJxdW9pc2U6WzcyLDIwOSwyMDRdLG1lZGl1bXZpb2xldHJlZDpbMTk5LDIxLDEzM10sbWlkbmlnaHRibHVlOlsyNSwyNSwxMTJdLG1pbnRjcmVhbTpbMjQ1LDI1NSwyNTBdLG1pc3R5cm9zZTpbMjU1LDIyOCwyMjVdLG1vY2Nhc2luOlsyNTUsMjI4LDE4MV0sbmF2YWpvd2hpdGU6WzI1NSwyMjIsMTczXSxuYXZ5OlswLDAsMTI4XSxvbGRsYWNlOlsyNTMsMjQ1LDIzMF0sb2xpdmU6WzEyOCwxMjgsMF0sb2xpdmVkcmFiOlsxMDcsMTQyLDM1XSxvcmFuZ2U6WzI1NSwxNjUsMF0sb3JhbmdlcmVkOlsyNTUsNjksMF0sb3JjaGlkOlsyMTgsMTEyLDIxNF0scGFsZWdvbGRlbnJvZDpbMjM4LDIzMiwxNzBdLHBhbGVncmVlbjpbMTUyLDI1MSwxNTJdLHBhbGV0dXJxdW9pc2U6WzE3NSwyMzgsMjM4XSxwYWxldmlvbGV0cmVkOlsyMTksMTEyLDE0N10scGFwYXlhd2hpcDpbMjU1LDIzOSwyMTNdLHBlYWNocHVmZjpbMjU1LDIxOCwxODVdLHBlcnU6WzIwNSwxMzMsNjNdLHBpbms6WzI1NSwxOTIsMjAzXSxwbHVtOlsyMjEsMTYwLDIyMV0scG93ZGVyYmx1ZTpbMTc2LDIyNCwyMzBdLHB1cnBsZTpbMTI4LDAsMTI4XSxyZWJlY2NhcHVycGxlOlsxMDIsNTEsMTUzXSxyZWQ6WzI1NSwwLDBdLHJvc3licm93bjpbMTg4LDE0MywxNDNdLHJveWFsYmx1ZTpbNjUsMTA1LDIyNV0sc2FkZGxlYnJvd246WzEzOSw2OSwxOV0sc2FsbW9uOlsyNTAsMTI4LDExNF0sc2FuZHlicm93bjpbMjQ0LDE2NCw5Nl0sc2VhZ3JlZW46WzQ2LDEzOSw4N10sc2Vhc2hlbGw6WzI1NSwyNDUsMjM4XSxzaWVubmE6WzE2MCw4Miw0NV0sc2lsdmVyOlsxOTIsMTkyLDE5Ml0sc2t5Ymx1ZTpbMTM1LDIwNiwyMzVdLHNsYXRlYmx1ZTpbMTA2LDkwLDIwNV0sc2xhdGVncmF5OlsxMTIsMTI4LDE0NF0sc2xhdGVncmV5OlsxMTIsMTI4LDE0NF0sc25vdzpbMjU1LDI1MCwyNTBdLHNwcmluZ2dyZWVuOlswLDI1NSwxMjddLHN0ZWVsYmx1ZTpbNzAsMTMwLDE4MF0sdGFuOlsyMTAsMTgwLDE0MF0sdGVhbDpbMCwxMjgsMTI4XSx0aGlzdGxlOlsyMTYsMTkxLDIxNl0sdG9tYXRvOlsyNTUsOTksNzFdLHR1cnF1b2lzZTpbNjQsMjI0LDIwOF0sdmlvbGV0OlsyMzgsMTMwLDIzOF0sd2hlYXQ6WzI0NSwyMjIsMTc5XSx3aGl0ZTpbMjU1LDI1NSwyNTVdLHdoaXRlc21va2U6WzI0NSwyNDUsMjQ1XSx5ZWxsb3c6WzI1NSwyNTUsMF0seWVsbG93Z3JlZW46WzE1NCwyMDUsNTBdfSxHPXt9O2Zvcih2YXIgUSBpbiBaKUdbSlNPTi5zdHJpbmdpZnkoWltRXSldPVF9LHt9XSw1OltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCg0KSxuPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBkfTtmb3IodmFyIG8gaW4gaSl7bltvK1wiUmF3XCJdPWZ1bmN0aW9uKHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZSYmKGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSksaVt0XShlKX19KG8pO3ZhciByPS8oXFx3KykyKFxcdyspLy5leGVjKG8pLGw9clsxXSxzPXJbMl07bltsXT1uW2xdfHx7fSxuW2xdW3NdPW5bb109ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKGUpe1wibnVtYmVyXCI9PXR5cGVvZiBlJiYoZT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTt2YXIgYT1pW3RdKGUpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhfHx2b2lkIDA9PT1hKXJldHVybiBhO2Zvcih2YXIgbj0wO248YS5sZW5ndGg7bisrKWFbbl09TWF0aC5yb3VuZChhW25dKTtyZXR1cm4gYX19KG8pfXZhciBkPWZ1bmN0aW9uKCl7dGhpcy5jb252cz17fX07ZC5wcm90b3R5cGUucm91dGVTcGFjZT1mdW5jdGlvbih0LGUpe3ZhciBhPWVbMF07cmV0dXJuIHZvaWQgMD09PWE/dGhpcy5nZXRWYWx1ZXModCk6KFwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlKSksdGhpcy5zZXRWYWx1ZXModCxhKSl9LGQucHJvdG90eXBlLnNldFZhbHVlcz1mdW5jdGlvbih0LGUpe3JldHVybiB0aGlzLnNwYWNlPXQsdGhpcy5jb252cz17fSx0aGlzLmNvbnZzW3RdPWUsdGhpc30sZC5wcm90b3R5cGUuZ2V0VmFsdWVzPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY29udnNbdF07aWYoIWUpe3ZhciBhPXRoaXMuc3BhY2UsaT10aGlzLmNvbnZzW2FdO2U9blthXVt0XShpKSx0aGlzLmNvbnZzW3RdPWV9cmV0dXJuIGV9LFtcInJnYlwiLFwiaHNsXCIsXCJoc3ZcIixcImNteWtcIixcImtleXdvcmRcIl0uZm9yRWFjaChmdW5jdGlvbih0KXtkLnByb3RvdHlwZVt0XT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5yb3V0ZVNwYWNlKHQsYXJndW1lbnRzKX19KSxlLmV4cG9ydHM9bn0sezQ6NH1dLDY6W2Z1bmN0aW9uKHQsZSxhKXtlLmV4cG9ydHM9e2FsaWNlYmx1ZTpbMjQwLDI0OCwyNTVdLGFudGlxdWV3aGl0ZTpbMjUwLDIzNSwyMTVdLGFxdWE6WzAsMjU1LDI1NV0sYXF1YW1hcmluZTpbMTI3LDI1NSwyMTJdLGF6dXJlOlsyNDAsMjU1LDI1NV0sYmVpZ2U6WzI0NSwyNDUsMjIwXSxiaXNxdWU6WzI1NSwyMjgsMTk2XSxibGFjazpbMCwwLDBdLGJsYW5jaGVkYWxtb25kOlsyNTUsMjM1LDIwNV0sYmx1ZTpbMCwwLDI1NV0sYmx1ZXZpb2xldDpbMTM4LDQzLDIyNl0sYnJvd246WzE2NSw0Miw0Ml0sYnVybHl3b29kOlsyMjIsMTg0LDEzNV0sY2FkZXRibHVlOls5NSwxNTgsMTYwXSxjaGFydHJldXNlOlsxMjcsMjU1LDBdLGNob2NvbGF0ZTpbMjEwLDEwNSwzMF0sY29yYWw6WzI1NSwxMjcsODBdLGNvcm5mbG93ZXJibHVlOlsxMDAsMTQ5LDIzN10sY29ybnNpbGs6WzI1NSwyNDgsMjIwXSxjcmltc29uOlsyMjAsMjAsNjBdLGN5YW46WzAsMjU1LDI1NV0sZGFya2JsdWU6WzAsMCwxMzldLGRhcmtjeWFuOlswLDEzOSwxMzldLGRhcmtnb2xkZW5yb2Q6WzE4NCwxMzQsMTFdLGRhcmtncmF5OlsxNjksMTY5LDE2OV0sZGFya2dyZWVuOlswLDEwMCwwXSxkYXJrZ3JleTpbMTY5LDE2OSwxNjldLGRhcmtraGFraTpbMTg5LDE4MywxMDddLGRhcmttYWdlbnRhOlsxMzksMCwxMzldLGRhcmtvbGl2ZWdyZWVuOls4NSwxMDcsNDddLGRhcmtvcmFuZ2U6WzI1NSwxNDAsMF0sZGFya29yY2hpZDpbMTUzLDUwLDIwNF0sZGFya3JlZDpbMTM5LDAsMF0sZGFya3NhbG1vbjpbMjMzLDE1MCwxMjJdLGRhcmtzZWFncmVlbjpbMTQzLDE4OCwxNDNdLGRhcmtzbGF0ZWJsdWU6WzcyLDYxLDEzOV0sZGFya3NsYXRlZ3JheTpbNDcsNzksNzldLGRhcmtzbGF0ZWdyZXk6WzQ3LDc5LDc5XSxkYXJrdHVycXVvaXNlOlswLDIwNiwyMDldLGRhcmt2aW9sZXQ6WzE0OCwwLDIxMV0sZGVlcHBpbms6WzI1NSwyMCwxNDddLGRlZXBza3libHVlOlswLDE5MSwyNTVdLGRpbWdyYXk6WzEwNSwxMDUsMTA1XSxkaW1ncmV5OlsxMDUsMTA1LDEwNV0sZG9kZ2VyYmx1ZTpbMzAsMTQ0LDI1NV0sZmlyZWJyaWNrOlsxNzgsMzQsMzRdLGZsb3JhbHdoaXRlOlsyNTUsMjUwLDI0MF0sZm9yZXN0Z3JlZW46WzM0LDEzOSwzNF0sZnVjaHNpYTpbMjU1LDAsMjU1XSxnYWluc2Jvcm86WzIyMCwyMjAsMjIwXSxnaG9zdHdoaXRlOlsyNDgsMjQ4LDI1NV0sZ29sZDpbMjU1LDIxNSwwXSxnb2xkZW5yb2Q6WzIxOCwxNjUsMzJdLGdyYXk6WzEyOCwxMjgsMTI4XSxncmVlbjpbMCwxMjgsMF0sZ3JlZW55ZWxsb3c6WzE3MywyNTUsNDddLGdyZXk6WzEyOCwxMjgsMTI4XSxob25leWRldzpbMjQwLDI1NSwyNDBdLGhvdHBpbms6WzI1NSwxMDUsMTgwXSxpbmRpYW5yZWQ6WzIwNSw5Miw5Ml0saW5kaWdvOls3NSwwLDEzMF0saXZvcnk6WzI1NSwyNTUsMjQwXSxraGFraTpbMjQwLDIzMCwxNDBdLGxhdmVuZGVyOlsyMzAsMjMwLDI1MF0sbGF2ZW5kZXJibHVzaDpbMjU1LDI0MCwyNDVdLGxhd25ncmVlbjpbMTI0LDI1MiwwXSxsZW1vbmNoaWZmb246WzI1NSwyNTAsMjA1XSxsaWdodGJsdWU6WzE3MywyMTYsMjMwXSxsaWdodGNvcmFsOlsyNDAsMTI4LDEyOF0sbGlnaHRjeWFuOlsyMjQsMjU1LDI1NV0sbGlnaHRnb2xkZW5yb2R5ZWxsb3c6WzI1MCwyNTAsMjEwXSxsaWdodGdyYXk6WzIxMSwyMTEsMjExXSxsaWdodGdyZWVuOlsxNDQsMjM4LDE0NF0sbGlnaHRncmV5OlsyMTEsMjExLDIxMV0sbGlnaHRwaW5rOlsyNTUsMTgyLDE5M10sbGlnaHRzYWxtb246WzI1NSwxNjAsMTIyXSxsaWdodHNlYWdyZWVuOlszMiwxNzgsMTcwXSxsaWdodHNreWJsdWU6WzEzNSwyMDYsMjUwXSxsaWdodHNsYXRlZ3JheTpbMTE5LDEzNiwxNTNdLGxpZ2h0c2xhdGVncmV5OlsxMTksMTM2LDE1M10sbGlnaHRzdGVlbGJsdWU6WzE3NiwxOTYsMjIyXSxsaWdodHllbGxvdzpbMjU1LDI1NSwyMjRdLGxpbWU6WzAsMjU1LDBdLGxpbWVncmVlbjpbNTAsMjA1LDUwXSxsaW5lbjpbMjUwLDI0MCwyMzBdLG1hZ2VudGE6WzI1NSwwLDI1NV0sbWFyb29uOlsxMjgsMCwwXSxtZWRpdW1hcXVhbWFyaW5lOlsxMDIsMjA1LDE3MF0sbWVkaXVtYmx1ZTpbMCwwLDIwNV0sbWVkaXVtb3JjaGlkOlsxODYsODUsMjExXSxtZWRpdW1wdXJwbGU6WzE0NywxMTIsMjE5XSxtZWRpdW1zZWFncmVlbjpbNjAsMTc5LDExM10sbWVkaXVtc2xhdGVibHVlOlsxMjMsMTA0LDIzOF0sbWVkaXVtc3ByaW5nZ3JlZW46WzAsMjUwLDE1NF0sbWVkaXVtdHVycXVvaXNlOls3MiwyMDksMjA0XSxtZWRpdW12aW9sZXRyZWQ6WzE5OSwyMSwxMzNdLG1pZG5pZ2h0Ymx1ZTpbMjUsMjUsMTEyXSxtaW50Y3JlYW06WzI0NSwyNTUsMjUwXSxtaXN0eXJvc2U6WzI1NSwyMjgsMjI1XSxtb2NjYXNpbjpbMjU1LDIyOCwxODFdLG5hdmFqb3doaXRlOlsyNTUsMjIyLDE3M10sbmF2eTpbMCwwLDEyOF0sb2xkbGFjZTpbMjUzLDI0NSwyMzBdLG9saXZlOlsxMjgsMTI4LDBdLG9saXZlZHJhYjpbMTA3LDE0MiwzNV0sb3JhbmdlOlsyNTUsMTY1LDBdLG9yYW5nZXJlZDpbMjU1LDY5LDBdLG9yY2hpZDpbMjE4LDExMiwyMTRdLHBhbGVnb2xkZW5yb2Q6WzIzOCwyMzIsMTcwXSxwYWxlZ3JlZW46WzE1MiwyNTEsMTUyXSxwYWxldHVycXVvaXNlOlsxNzUsMjM4LDIzOF0scGFsZXZpb2xldHJlZDpbMjE5LDExMiwxNDddLHBhcGF5YXdoaXA6WzI1NSwyMzksMjEzXSxwZWFjaHB1ZmY6WzI1NSwyMTgsMTg1XSxwZXJ1OlsyMDUsMTMzLDYzXSxwaW5rOlsyNTUsMTkyLDIwM10scGx1bTpbMjIxLDE2MCwyMjFdLHBvd2RlcmJsdWU6WzE3NiwyMjQsMjMwXSxwdXJwbGU6WzEyOCwwLDEyOF0scmViZWNjYXB1cnBsZTpbMTAyLDUxLDE1M10scmVkOlsyNTUsMCwwXSxyb3N5YnJvd246WzE4OCwxNDMsMTQzXSxyb3lhbGJsdWU6WzY1LDEwNSwyMjVdLHNhZGRsZWJyb3duOlsxMzksNjksMTldLHNhbG1vbjpbMjUwLDEyOCwxMTRdLHNhbmR5YnJvd246WzI0NCwxNjQsOTZdLHNlYWdyZWVuOls0NiwxMzksODddLHNlYXNoZWxsOlsyNTUsMjQ1LDIzOF0sc2llbm5hOlsxNjAsODIsNDVdLHNpbHZlcjpbMTkyLDE5MiwxOTJdLHNreWJsdWU6WzEzNSwyMDYsMjM1XSxzbGF0ZWJsdWU6WzEwNiw5MCwyMDVdLHNsYXRlZ3JheTpbMTEyLDEyOCwxNDRdLHNsYXRlZ3JleTpbMTEyLDEyOCwxNDRdLHNub3c6WzI1NSwyNTAsMjUwXSxzcHJpbmdncmVlbjpbMCwyNTUsMTI3XSxzdGVlbGJsdWU6WzcwLDEzMCwxODBdLHRhbjpbMjEwLDE4MCwxNDBdLHRlYWw6WzAsMTI4LDEyOF0sdGhpc3RsZTpbMjE2LDE5MSwyMTZdLHRvbWF0bzpbMjU1LDk5LDcxXSx0dXJxdW9pc2U6WzY0LDIyNCwyMDhdLHZpb2xldDpbMjM4LDEzMCwyMzhdLHdoZWF0OlsyNDUsMjIyLDE3OV0sd2hpdGU6WzI1NSwyNTUsMjU1XSx3aGl0ZXNtb2tlOlsyNDUsMjQ1LDI0NV0seWVsbG93OlsyNTUsMjU1LDBdLHllbGxvd2dyZWVuOlsxNTQsMjA1LDUwXX19LHt9XSw3OltmdW5jdGlvbih0LGUsYSl7dmFyIGk9dCgyOCkoKTt0KDI2KShpKSx0KDIyKShpKSx0KDI1KShpKSx0KDIxKShpKSx0KDIzKShpKSx0KDI0KShpKSx0KDI5KShpKSx0KDMzKShpKSx0KDMxKShpKSx0KDM0KShpKSx0KDMyKShpKSx0KDM1KShpKSx0KDMwKShpKSx0KDI3KShpKSx0KDM2KShpKSx0KDM3KShpKSx0KDM4KShpKSx0KDM5KShpKSx0KDQwKShpKSx0KDQzKShpKSx0KDQxKShpKSx0KDQyKShpKSx0KDQ0KShpKSx0KDQ1KShpKSx0KDQ2KShpKSx0KDE1KShpKSx0KDE2KShpKSx0KDE3KShpKSx0KDE4KShpKSx0KDE5KShpKSx0KDIwKShpKSx0KDgpKGkpLHQoOSkoaSksdCgxMCkoaSksdCgxMSkoaSksdCgxMikoaSksdCgxMykoaSksdCgxNCkoaSksd2luZG93LkNoYXJ0PWUuZXhwb3J0cz1pfSx7MTA6MTAsMTE6MTEsMTI6MTIsMTM6MTMsMTQ6MTQsMTU6MTUsMTY6MTYsMTc6MTcsMTg6MTgsMTk6MTksMjA6MjAsMjE6MjEsMjI6MjIsMjM6MjMsMjQ6MjQsMjU6MjUsMjY6MjYsMjc6MjcsMjg6MjgsMjk6MjksMzA6MzAsMzE6MzEsMzI6MzIsMzM6MzMsMzQ6MzQsMzU6MzUsMzY6MzYsMzc6MzcsMzg6MzgsMzk6MzksNDA6NDAsNDE6NDEsNDI6NDIsNDM6NDMsNDQ6NDQsNDU6NDUsNDY6NDYsODo4LDk6OX1dLDg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5CYXI9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gYS50eXBlPVwiYmFyXCIsbmV3IHQoZSxhKX19fSx7fV0sOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkJ1YmJsZT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJidWJibGVcIixuZXcgdChlLGEpfX19LHt9XSwxMDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LkRvdWdobnV0PWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImRvdWdobnV0XCIsbmV3IHQoZSxhKX19fSx7fV0sMTE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dC5MaW5lPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cImxpbmVcIixuZXcgdChlLGEpfX19LHt9XSwxMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LlBvbGFyQXJlYT1mdW5jdGlvbihlLGEpe3JldHVybiBhLnR5cGU9XCJwb2xhckFyZWFcIixuZXcgdChlLGEpfX19LHt9XSwxMzpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt0LlJhZGFyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInJhZGFyXCIsbmV3IHQoZSxhKX19fSx7fV0sMTQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9e2hvdmVyOnttb2RlOlwic2luZ2xlXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJib3R0b21cIixpZDpcIngtYXhpcy0xXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImxlZnRcIixpZDpcInktYXhpcy0xXCJ9XX0sdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0KXtyZXR1cm5cIihcIit0LnhMYWJlbCtcIiwgXCIrdC55TGFiZWwrXCIpXCJ9fX19O3QuZGVmYXVsdHMuc2NhdHRlcj1lLHQuY29udHJvbGxlcnMuc2NhdHRlcj10LmNvbnRyb2xsZXJzLmxpbmUsdC5TY2F0dGVyPWZ1bmN0aW9uKGUsYSl7cmV0dXJuIGEudHlwZT1cInNjYXR0ZXJcIixuZXcgdChlLGEpfX19LHt9XSwxNTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5iYXI9e2hvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJjYXRlZ29yeVwiLGNhdGVnb3J5UGVyY2VudGFnZTouOCxiYXJQZXJjZW50YWdlOi45LGdyaWRMaW5lczp7b2Zmc2V0R3JpZExpbmVzOiEwfX1dLHlBeGVzOlt7dHlwZTpcImxpbmVhclwifV19fSx0LmNvbnRyb2xsZXJzLmJhcj10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuUmVjdGFuZ2xlLGluaXRpYWxpemU6ZnVuY3Rpb24oZSxhKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyxlLGEpLHRoaXMuZ2V0TWV0YSgpLmJhcj0hMH0sZ2V0QmFyQ291bnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9MDtyZXR1cm4gZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihlLGkpe3ZhciBuPXQuY2hhcnQuZ2V0RGF0YXNldE1ldGEoaSk7bi5iYXImJnQuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSYmKythfSx0KSxhfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcztlLmVhY2goYS5nZXRNZXRhKCkuZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9LGEpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5nZXRNZXRhKCkscj1uLmdldFNjYWxlRm9ySWQoby54QXhpc0lEKSxsPW4uZ2V0U2NhbGVGb3JJZChvLnlBeGlzSUQpLHM9bC5nZXRCYXNlUGl4ZWwoKSxkPW4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGUsdT10LmN1c3RvbXx8e30sYz1uLmdldERhdGFzZXQoKTt0Ll94U2NhbGU9cix0Ll95U2NhbGU9bCx0Ll9kYXRhc2V0SW5kZXg9bi5pbmRleCx0Ll9pbmRleD1hO3ZhciBoPW4uZ2V0UnVsZXIoYSk7dC5fbW9kZWw9e3g6bi5jYWxjdWxhdGVCYXJYKGEsbi5pbmRleCxoKSx5Omk/czpuLmNhbGN1bGF0ZUJhclkoYSxuLmluZGV4KSxsYWJlbDpuLmNoYXJ0LmRhdGEubGFiZWxzW2FdLGRhdGFzZXRMYWJlbDpjLmxhYmVsLGJhc2U6aT9zOm4uY2FsY3VsYXRlQmFyQmFzZShuLmluZGV4LGEpLHdpZHRoOm4uY2FsY3VsYXRlQmFyV2lkdGgoaCksYmFja2dyb3VuZENvbG9yOnUuYmFja2dyb3VuZENvbG9yP3UuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYmFja2dyb3VuZENvbG9yLGEsZC5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlclNraXBwZWQ6dS5ib3JkZXJTa2lwcGVkP3UuYm9yZGVyU2tpcHBlZDpkLmJvcmRlclNraXBwZWQsYm9yZGVyQ29sb3I6dS5ib3JkZXJDb2xvcj91LmJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGMuYm9yZGVyQ29sb3IsYSxkLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDp1LmJvcmRlcldpZHRoP3UuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYy5ib3JkZXJXaWR0aCxhLGQuYm9yZGVyV2lkdGgpfSx0LnBpdm90KCl9LGNhbGN1bGF0ZUJhckJhc2U6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1hLmdldFNjYWxlRm9ySWQoaS55QXhpc0lEKSxvPTA7aWYobi5vcHRpb25zLnN0YWNrZWQpe2Zvcih2YXIgcj1hLmNoYXJ0LGw9ci5kYXRhLmRhdGFzZXRzLHM9TnVtYmVyKGxbdF0uZGF0YVtlXSksZD0wO3Q+ZDtkKyspe3ZhciB1PWxbZF0sYz1yLmdldERhdGFzZXRNZXRhKGQpO2lmKGMuYmFyJiZjLnlBeGlzSUQ9PT1uLmlkJiZyLmlzRGF0YXNldFZpc2libGUoZCkpe3ZhciBoPU51bWJlcih1LmRhdGFbZV0pO28rPTA+cz9NYXRoLm1pbihoLDApOk1hdGgubWF4KGgsMCl9fXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9cmV0dXJuIG4uZ2V0QmFzZVBpeGVsKCl9LGdldFJ1bGVyOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz1hLmdldEJhckNvdW50KCk7ZT1cImNhdGVnb3J5XCI9PT1uLm9wdGlvbnMudHlwZT9uLmdldFBpeGVsRm9yVGljayh0KzEpLW4uZ2V0UGl4ZWxGb3JUaWNrKHQpOm4ud2lkdGgvbi50aWNrcy5sZW5ndGg7dmFyIHI9ZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlLGw9KGUtZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlKS8yLHM9ci9vO2lmKG4udGlja3MubGVuZ3RoIT09YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGgpe3ZhciBkPW4udGlja3MubGVuZ3RoL2EuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoO3MqPWR9dmFyIHU9cypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZSxjPXMtcypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZTtyZXR1cm57ZGF0YXNldENvdW50Om8sdGlja1dpZHRoOmUsY2F0ZWdvcnlXaWR0aDpyLGNhdGVnb3J5U3BhY2luZzpsLGZ1bGxCYXJXaWR0aDpzLGJhcldpZHRoOnUsYmFyU3BhY2luZzpjfX0sY2FsY3VsYXRlQmFyV2lkdGg6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRTY2FsZUZvcklkKHRoaXMuZ2V0TWV0YSgpLnhBeGlzSUQpO3JldHVybiBlLm9wdGlvbnMuYmFyVGhpY2tuZXNzP2Uub3B0aW9ucy5iYXJUaGlja25lc3M6ZS5vcHRpb25zLnN0YWNrZWQ/dC5jYXRlZ29yeVdpZHRoOnQuYmFyV2lkdGh9LGdldEJhckluZGV4OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT0wO2ZvcihhPTA7dD5hOysrYSllPXRoaXMuY2hhcnQuZ2V0RGF0YXNldE1ldGEoYSksZS5iYXImJnRoaXMuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShhKSYmKytpO3JldHVybiBpfSxjYWxjdWxhdGVCYXJYOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49aS5nZXRNZXRhKCksbz1pLmdldFNjYWxlRm9ySWQobi54QXhpc0lEKSxyPWkuZ2V0QmFySW5kZXgoZSksbD1vLmdldFBpeGVsRm9yVmFsdWUobnVsbCx0LGUsaS5jaGFydC5pc0NvbWJvKTtyZXR1cm4gbC09aS5jaGFydC5pc0NvbWJvP2EudGlja1dpZHRoLzI6MCxvLm9wdGlvbnMuc3RhY2tlZD9sK2EuY2F0ZWdvcnlXaWR0aC8yK2EuY2F0ZWdvcnlTcGFjaW5nOmwrYS5iYXJXaWR0aC8yK2EuY2F0ZWdvcnlTcGFjaW5nK2EuYmFyV2lkdGgqcithLmJhclNwYWNpbmcvMithLmJhclNwYWNpbmcqcn0sY2FsY3VsYXRlQmFyWTpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnlBeGlzSUQpLG89TnVtYmVyKGEuZ2V0RGF0YXNldCgpLmRhdGFbdF0pO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9MCxsPTAscz0wO2U+cztzKyspe3ZhciBkPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tzXSx1PWEuY2hhcnQuZ2V0RGF0YXNldE1ldGEocyk7aWYodS5iYXImJnUueUF4aXNJRD09PW4uaWQmJmEuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShzKSl7dmFyIGM9TnVtYmVyKGQuZGF0YVt0XSk7MD5jP2wrPWN8fDA6cis9Y3x8MH19cmV0dXJuIDA+bz9uLmdldFBpeGVsRm9yVmFsdWUobCtvKTpuLmdldFBpeGVsRm9yVmFsdWUocitvKX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10aGlzLG49dHx8MSxvPWkuZ2V0TWV0YSgpLmRhdGEscj1pLmdldERhdGFzZXQoKTtmb3IoZT0wLGE9by5sZW5ndGg7YT5lOysrZSl7dmFyIGw9ci5kYXRhW2VdO251bGw9PT1sfHx2b2lkIDA9PT1sfHxpc05hTihsKXx8b1tlXS50cmFuc2l0aW9uKG4pLmRyYXcoKX19LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsO28uYmFja2dyb3VuZENvbG9yPW4uaG92ZXJCYWNrZ3JvdW5kQ29sb3I/bi5ob3ZlckJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLmhvdmVyQmFja2dyb3VuZENvbG9yLGksZS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3I/bi5ob3ZlckJvcmRlckNvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCb3JkZXJDb2xvcixpLGUuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1uLmhvdmVyQm9yZGVyV2lkdGg/bi5ob3ZlckJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuaG92ZXJCb3JkZXJXaWR0aCxpLG8uYm9yZGVyV2lkdGgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1t0Ll9kYXRhc2V0SW5kZXhdLGk9dC5faW5kZXgsbj10LmN1c3RvbXx8e30sbz10Ll9tb2RlbCxyPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5yZWN0YW5nbGU7by5iYWNrZ3JvdW5kQ29sb3I9bi5iYWNrZ3JvdW5kQ29sb3I/bi5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5iYWNrZ3JvdW5kQ29sb3IsaSxyLmJhY2tncm91bmRDb2xvciksby5ib3JkZXJDb2xvcj1uLmJvcmRlckNvbG9yP24uYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5ib3JkZXJDb2xvcixpLHIuYm9yZGVyQ29sb3IpLG8uYm9yZGVyV2lkdGg9bi5ib3JkZXJXaWR0aD9uLmJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEuYm9yZGVyV2lkdGgsaSxyLmJvcmRlcldpZHRoKX19KSx0LmRlZmF1bHRzLmhvcml6b250YWxCYXI9e2hvdmVyOnttb2RlOlwibGFiZWxcIn0sc2NhbGVzOnt4QXhlczpbe3R5cGU6XCJsaW5lYXJcIixwb3NpdGlvbjpcImJvdHRvbVwifV0seUF4ZXM6W3twb3NpdGlvbjpcImxlZnRcIix0eXBlOlwiY2F0ZWdvcnlcIixjYXRlZ29yeVBlcmNlbnRhZ2U6LjgsYmFyUGVyY2VudGFnZTouOSxncmlkTGluZXM6e29mZnNldEdyaWRMaW5lczohMH19XX0sZWxlbWVudHM6e3JlY3RhbmdsZTp7Ym9yZGVyU2tpcHBlZDpcImxlZnRcIn19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9XCJcIjtyZXR1cm4gdC5sZW5ndGg+MCYmKHRbMF0ueUxhYmVsP2E9dFswXS55TGFiZWw6ZS5sYWJlbHMubGVuZ3RoPjAmJnRbMF0uaW5kZXg8ZS5sYWJlbHMubGVuZ3RoJiYoYT1lLmxhYmVsc1t0WzBdLmluZGV4XSkpLGF9LGxhYmVsOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0c1t0LmRhdGFzZXRJbmRleF0ubGFiZWx8fFwiXCI7cmV0dXJuIGErXCI6IFwiK3QueExhYmVsfX19fSx0LmNvbnRyb2xsZXJzLmhvcml6b250YWxCYXI9dC5jb250cm9sbGVycy5iYXIuZXh0ZW5kKHt1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzLG89bi5nZXRNZXRhKCkscj1uLmdldFNjYWxlRm9ySWQoby54QXhpc0lEKSxsPW4uZ2V0U2NhbGVGb3JJZChvLnlBeGlzSUQpLHM9ci5nZXRCYXNlUGl4ZWwoKSxkPXQuY3VzdG9tfHx7fSx1PW4uZ2V0RGF0YXNldCgpLGM9bi5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnJlY3RhbmdsZTt0Ll94U2NhbGU9cix0Ll95U2NhbGU9bCx0Ll9kYXRhc2V0SW5kZXg9bi5pbmRleCx0Ll9pbmRleD1hO3ZhciBoPW4uZ2V0UnVsZXIoYSk7dC5fbW9kZWw9e3g6aT9zOm4uY2FsY3VsYXRlQmFyWChhLG4uaW5kZXgpLHk6bi5jYWxjdWxhdGVCYXJZKGEsbi5pbmRleCxoKSxsYWJlbDpuLmNoYXJ0LmRhdGEubGFiZWxzW2FdLGRhdGFzZXRMYWJlbDp1LmxhYmVsLGJhc2U6aT9zOm4uY2FsY3VsYXRlQmFyQmFzZShuLmluZGV4LGEpLGhlaWdodDpuLmNhbGN1bGF0ZUJhckhlaWdodChoKSxiYWNrZ3JvdW5kQ29sb3I6ZC5iYWNrZ3JvdW5kQ29sb3I/ZC5iYWNrZ3JvdW5kQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5iYWNrZ3JvdW5kQ29sb3IsYSxjLmJhY2tncm91bmRDb2xvciksYm9yZGVyU2tpcHBlZDpkLmJvcmRlclNraXBwZWQ/ZC5ib3JkZXJTa2lwcGVkOmMuYm9yZGVyU2tpcHBlZCxib3JkZXJDb2xvcjpkLmJvcmRlckNvbG9yP2QuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQodS5ib3JkZXJDb2xvcixhLGMuYm9yZGVyQ29sb3IpLGJvcmRlcldpZHRoOmQuYm9yZGVyV2lkdGg/ZC5ib3JkZXJXaWR0aDplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmJvcmRlcldpZHRoLGEsYy5ib3JkZXJXaWR0aCl9LHQuZHJhdz1mdW5jdGlvbigpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHNbKHUrdCklNF19dmFyIGU9dGhpcy5fY2hhcnQuY3R4LGE9dGhpcy5fdmlldyxpPWEuaGVpZ2h0LzIsbj1hLnktaSxvPWEueStpLHI9YS5iYXNlLShhLmJhc2UtYS54KSxsPWEuYm9yZGVyV2lkdGgvMjthLmJvcmRlcldpZHRoJiYobis9bCxvLT1sLHIrPWwpLGUuYmVnaW5QYXRoKCksZS5maWxsU3R5bGU9YS5iYWNrZ3JvdW5kQ29sb3IsZS5zdHJva2VTdHlsZT1hLmJvcmRlckNvbG9yLGUubGluZVdpZHRoPWEuYm9yZGVyV2lkdGg7dmFyIHM9W1thLmJhc2Usb10sW2EuYmFzZSxuXSxbcixuXSxbcixvXV0sZD1bXCJib3R0b21cIixcImxlZnRcIixcInRvcFwiLFwicmlnaHRcIl0sdT1kLmluZGV4T2YoYS5ib3JkZXJTa2lwcGVkLDApOy0xPT09dSYmKHU9MCksZS5tb3ZlVG8uYXBwbHkoZSx0KDApKTtmb3IodmFyIGM9MTs0PmM7YysrKWUubGluZVRvLmFwcGx5KGUsdChjKSk7ZS5maWxsKCksYS5ib3JkZXJXaWR0aCYmZS5zdHJva2UoKX0sdC5waXZvdCgpfSxjYWxjdWxhdGVCYXJCYXNlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueEF4aXNJRCksbz0wO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9YS5jaGFydCxsPXIuZGF0YS5kYXRhc2V0cyxzPU51bWJlcihsW3RdLmRhdGFbZV0pLGQ9MDt0PmQ7ZCsrKXt2YXIgdT1sW2RdLGM9ci5nZXREYXRhc2V0TWV0YShkKTtpZihjLmJhciYmYy54QXhpc0lEPT09bi5pZCYmci5pc0RhdGFzZXRWaXNpYmxlKGQpKXtcbnZhciBoPU51bWJlcih1LmRhdGFbZV0pO28rPTA+cz9NYXRoLm1pbihoLDApOk1hdGgubWF4KGgsMCl9fXJldHVybiBuLmdldFBpeGVsRm9yVmFsdWUobyl9cmV0dXJuIG4uZ2V0QmFzZVBpeGVsKCl9LGdldFJ1bGVyOmZ1bmN0aW9uKHQpe3ZhciBlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXRTY2FsZUZvcklkKGkueUF4aXNJRCksbz1hLmdldEJhckNvdW50KCk7ZT1cImNhdGVnb3J5XCI9PT1uLm9wdGlvbnMudHlwZT9uLmdldFBpeGVsRm9yVGljayh0KzEpLW4uZ2V0UGl4ZWxGb3JUaWNrKHQpOm4ud2lkdGgvbi50aWNrcy5sZW5ndGg7dmFyIHI9ZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlLGw9KGUtZSpuLm9wdGlvbnMuY2F0ZWdvcnlQZXJjZW50YWdlKS8yLHM9ci9vO2lmKG4udGlja3MubGVuZ3RoIT09YS5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGgpe3ZhciBkPW4udGlja3MubGVuZ3RoL2EuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoO3MqPWR9dmFyIHU9cypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZSxjPXMtcypuLm9wdGlvbnMuYmFyUGVyY2VudGFnZTtyZXR1cm57ZGF0YXNldENvdW50Om8sdGlja0hlaWdodDplLGNhdGVnb3J5SGVpZ2h0OnIsY2F0ZWdvcnlTcGFjaW5nOmwsZnVsbEJhckhlaWdodDpzLGJhckhlaWdodDp1LGJhclNwYWNpbmc6Y319LGNhbGN1bGF0ZUJhckhlaWdodDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5nZXRTY2FsZUZvcklkKGUuZ2V0TWV0YSgpLnlBeGlzSUQpO3JldHVybiBhLm9wdGlvbnMuYmFyVGhpY2tuZXNzP2Eub3B0aW9ucy5iYXJUaGlja25lc3M6YS5vcHRpb25zLnN0YWNrZWQ/dC5jYXRlZ29yeUhlaWdodDp0LmJhckhlaWdodH0sY2FsY3VsYXRlQmFyWDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmdldE1ldGEoKSxuPWEuZ2V0U2NhbGVGb3JJZChpLnhBeGlzSUQpLG89TnVtYmVyKGEuZ2V0RGF0YXNldCgpLmRhdGFbdF0pO2lmKG4ub3B0aW9ucy5zdGFja2VkKXtmb3IodmFyIHI9MCxsPTAscz0wO2U+cztzKyspe3ZhciBkPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tzXSx1PWEuY2hhcnQuZ2V0RGF0YXNldE1ldGEocyk7aWYodS5iYXImJnUueEF4aXNJRD09PW4uaWQmJmEuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShzKSl7dmFyIGM9TnVtYmVyKGQuZGF0YVt0XSk7MD5jP2wrPWN8fDA6cis9Y3x8MH19cmV0dXJuIDA+bz9uLmdldFBpeGVsRm9yVmFsdWUobCtvKTpuLmdldFBpeGVsRm9yVmFsdWUocitvKX1yZXR1cm4gbi5nZXRQaXhlbEZvclZhbHVlKG8pfSxjYWxjdWxhdGVCYXJZOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaT10aGlzLG49aS5nZXRNZXRhKCksbz1pLmdldFNjYWxlRm9ySWQobi55QXhpc0lEKSxyPWkuZ2V0QmFySW5kZXgoZSksbD1vLmdldFBpeGVsRm9yVmFsdWUobnVsbCx0LGUsaS5jaGFydC5pc0NvbWJvKTtyZXR1cm4gbC09aS5jaGFydC5pc0NvbWJvP2EudGlja0hlaWdodC8yOjAsby5vcHRpb25zLnN0YWNrZWQ/bCthLmNhdGVnb3J5SGVpZ2h0LzIrYS5jYXRlZ29yeVNwYWNpbmc6bCthLmJhckhlaWdodC8yK2EuY2F0ZWdvcnlTcGFjaW5nK2EuYmFySGVpZ2h0KnIrYS5iYXJTcGFjaW5nLzIrYS5iYXJTcGFjaW5nKnJ9fSl9fSx7fV0sMTY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuYnViYmxlPXtob3Zlcjp7bW9kZTpcInNpbmdsZVwifSxzY2FsZXM6e3hBeGVzOlt7dHlwZTpcImxpbmVhclwiLHBvc2l0aW9uOlwiYm90dG9tXCIsaWQ6XCJ4LWF4aXMtMFwifV0seUF4ZXM6W3t0eXBlOlwibGluZWFyXCIscG9zaXRpb246XCJsZWZ0XCIsaWQ6XCJ5LWF4aXMtMFwifV19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIixpPWUuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmRhdGFbdC5pbmRleF07cmV0dXJuIGErXCI6IChcIit0LnhMYWJlbCtcIiwgXCIrdC55TGFiZWwrXCIsIFwiK2kucitcIilcIn19fX0sdC5jb250cm9sbGVycy5idWJibGU9dC5EYXRhc2V0Q29udHJvbGxlci5leHRlbmQoe2RhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1pLmRhdGE7ZS5lYWNoKG4sZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24oYSxpLG4pe3ZhciBvPXRoaXMscj1vLmdldE1ldGEoKSxsPW8uZ2V0U2NhbGVGb3JJZChyLnhBeGlzSUQpLHM9by5nZXRTY2FsZUZvcklkKHIueUF4aXNJRCksZD1hLmN1c3RvbXx8e30sdT1vLmdldERhdGFzZXQoKSxjPXUuZGF0YVtpXSxoPW8uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxmPW8uaW5kZXg7ZS5leHRlbmQoYSx7X3hTY2FsZTpsLF95U2NhbGU6cyxfZGF0YXNldEluZGV4OmYsX2luZGV4OmksX21vZGVsOnt4Om4/bC5nZXRQaXhlbEZvckRlY2ltYWwoLjUpOmwuZ2V0UGl4ZWxGb3JWYWx1ZShcIm9iamVjdFwiPT10eXBlb2YgYz9jOk5hTixpLGYsby5jaGFydC5pc0NvbWJvKSx5Om4/cy5nZXRCYXNlUGl4ZWwoKTpzLmdldFBpeGVsRm9yVmFsdWUoYyxpLGYpLHJhZGl1czpuPzA6ZC5yYWRpdXM/ZC5yYWRpdXM6by5nZXRSYWRpdXMoYyksaGl0UmFkaXVzOmQuaGl0UmFkaXVzP2QuaGl0UmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuaGl0UmFkaXVzLGksaC5oaXRSYWRpdXMpfX0pLHQuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbChvLGEsaCk7dmFyIGc9YS5fbW9kZWw7Zy5za2lwPWQuc2tpcD9kLnNraXA6aXNOYU4oZy54KXx8aXNOYU4oZy55KSxhLnBpdm90KCl9LGdldFJhZGl1czpmdW5jdGlvbih0KXtyZXR1cm4gdC5yfHx0aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQucmFkaXVzfSxzZXRIb3ZlclN0eWxlOmZ1bmN0aW9uKGEpe3ZhciBpPXRoaXM7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUuc2V0SG92ZXJTdHlsZS5jYWxsKGksYSk7dmFyIG49aS5jaGFydC5kYXRhLmRhdGFzZXRzW2EuX2RhdGFzZXRJbmRleF0sbz1hLl9pbmRleCxyPWEuY3VzdG9tfHx7fSxsPWEuX21vZGVsO2wucmFkaXVzPXIuaG92ZXJSYWRpdXM/ci5ob3ZlclJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmhvdmVyUmFkaXVzLG8saS5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50LmhvdmVyUmFkaXVzKStpLmdldFJhZGl1cyhuLmRhdGFbb10pfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXM7dC5EYXRhc2V0Q29udHJvbGxlci5wcm90b3R5cGUucmVtb3ZlSG92ZXJTdHlsZS5jYWxsKGEsZSxhLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQpO3ZhciBpPWEuY2hhcnQuZGF0YS5kYXRhc2V0c1tlLl9kYXRhc2V0SW5kZXhdLmRhdGFbZS5faW5kZXhdLG49ZS5jdXN0b218fHt9LG89ZS5fbW9kZWw7by5yYWRpdXM9bi5yYWRpdXM/bi5yYWRpdXM6YS5nZXRSYWRpdXMoaSl9fSl9fSx7fV0sMTc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9dC5kZWZhdWx0czthLmRvdWdobnV0PXthbmltYXRpb246e2FuaW1hdGVSb3RhdGU6ITAsYW5pbWF0ZVNjYWxlOiExfSxhc3BlY3RSYXRpbzoxLGhvdmVyOnttb2RlOlwic2luZ2xlXCJ9LGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7dmFyIGE9dC5kYXRhLGk9YS5kYXRhc2V0cyxuPWEubGFiZWxzO2lmKGkubGVuZ3RoKWZvcih2YXIgbz0wO288aVswXS5kYXRhLmxlbmd0aDsrK28pZS5wdXNoKCc8bGk+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOicraVswXS5iYWNrZ3JvdW5kQ29sb3Jbb10rJ1wiPjwvc3Bhbj4nKSxuW29dJiZlLnB1c2gobltvXSksZS5wdXNoKFwiPC9saT5cIik7cmV0dXJuIGUucHVzaChcIjwvdWw+XCIpLGUuam9pbihcIlwiKX0sbGVnZW5kOntsYWJlbHM6e2dlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBhPXQuZGF0YTtyZXR1cm4gYS5sYWJlbHMubGVuZ3RoJiZhLmRhdGFzZXRzLmxlbmd0aD9hLmxhYmVscy5tYXAoZnVuY3Rpb24oaSxuKXt2YXIgbz10LmdldERhdGFzZXRNZXRhKDApLHI9YS5kYXRhc2V0c1swXSxsPW8uZGF0YVtuXSxzPWwmJmwuY3VzdG9tfHx7fSxkPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LHU9dC5vcHRpb25zLmVsZW1lbnRzLmFyYyxjPXMuYmFja2dyb3VuZENvbG9yP3MuYmFja2dyb3VuZENvbG9yOmQoci5iYWNrZ3JvdW5kQ29sb3Isbix1LmJhY2tncm91bmRDb2xvciksaD1zLmJvcmRlckNvbG9yP3MuYm9yZGVyQ29sb3I6ZChyLmJvcmRlckNvbG9yLG4sdS5ib3JkZXJDb2xvciksZj1zLmJvcmRlcldpZHRoP3MuYm9yZGVyV2lkdGg6ZChyLmJvcmRlcldpZHRoLG4sdS5ib3JkZXJXaWR0aCk7cmV0dXJue3RleHQ6aSxmaWxsU3R5bGU6YyxzdHJva2VTdHlsZTpoLGxpbmVXaWR0aDpmLGhpZGRlbjppc05hTihyLmRhdGFbbl0pfHxvLmRhdGFbbl0uaGlkZGVuLGluZGV4Om59fSk6W119fSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLG89ZS5pbmRleCxyPXRoaXMuY2hhcnQ7Zm9yKGE9MCxpPShyLmRhdGEuZGF0YXNldHN8fFtdKS5sZW5ndGg7aT5hOysrYSluPXIuZ2V0RGF0YXNldE1ldGEoYSksbi5kYXRhW29dJiYobi5kYXRhW29dLmhpZGRlbj0hbi5kYXRhW29dLmhpZGRlbik7ci51cGRhdGUoKX19LGN1dG91dFBlcmNlbnRhZ2U6NTAscm90YXRpb246TWF0aC5QSSotLjUsY2lyY3VtZmVyZW5jZToyKk1hdGguUEksdG9vbHRpcHM6e2NhbGxiYWNrczp7dGl0bGU6ZnVuY3Rpb24oKXtyZXR1cm5cIlwifSxsYWJlbDpmdW5jdGlvbih0LGEpe3ZhciBpPWEubGFiZWxzW3QuaW5kZXhdLG49XCI6IFwiK2EuZGF0YXNldHNbdC5kYXRhc2V0SW5kZXhdLmRhdGFbdC5pbmRleF07cmV0dXJuIGUuaXNBcnJheShpKT8oaT1pLnNsaWNlKCksaVswXSs9bik6aSs9bixpfX19fSxhLnBpZT1lLmNsb25lKGEuZG91Z2hudXQpLGUuZXh0ZW5kKGEucGllLHtjdXRvdXRQZXJjZW50YWdlOjB9KSx0LmNvbnRyb2xsZXJzLmRvdWdobnV0PXQuY29udHJvbGxlcnMucGllPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5BcmMsbGlua1NjYWxlczplLm5vb3AsZ2V0UmluZ0luZGV4OmZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLGE9MDt0PmE7KythKXRoaXMuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShhKSYmKytlO3JldHVybiBlfSx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcyxpPWEuY2hhcnQsbj1pLmNoYXJ0QXJlYSxvPWkub3B0aW9ucyxyPW8uZWxlbWVudHMuYXJjLGw9bi5yaWdodC1uLmxlZnQtci5ib3JkZXJXaWR0aCxzPW4uYm90dG9tLW4udG9wLXIuYm9yZGVyV2lkdGgsZD1NYXRoLm1pbihsLHMpLHU9e3g6MCx5OjB9LGM9YS5nZXRNZXRhKCksaD1vLmN1dG91dFBlcmNlbnRhZ2UsZj1vLmNpcmN1bWZlcmVuY2U7aWYoZjwyKk1hdGguUEkpe3ZhciBnPW8ucm90YXRpb24lKDIqTWF0aC5QSSk7Zys9MipNYXRoLlBJKihnPj1NYXRoLlBJPy0xOmc8LU1hdGguUEk/MTowKTt2YXIgcD1nK2YsbT17eDpNYXRoLmNvcyhnKSx5Ok1hdGguc2luKGcpfSxiPXt4Ok1hdGguY29zKHApLHk6TWF0aC5zaW4ocCl9LHY9MD49ZyYmcD49MHx8Zzw9MipNYXRoLlBJJiYyKk1hdGguUEk8PXAseD1nPD0uNSpNYXRoLlBJJiYuNSpNYXRoLlBJPD1wfHxnPD0yLjUqTWF0aC5QSSYmMi41Kk1hdGguUEk8PXAseT1nPD0tTWF0aC5QSSYmLU1hdGguUEk8PXB8fGc8PU1hdGguUEkmJk1hdGguUEk8PXAsaz1nPD0uNSotTWF0aC5QSSYmLjUqLU1hdGguUEk8PXB8fGc8PTEuNSpNYXRoLlBJJiYxLjUqTWF0aC5QSTw9cCxTPWgvMTAwLHc9e3g6eT8tMTpNYXRoLm1pbihtLngqKG0ueDwwPzE6UyksYi54KihiLng8MD8xOlMpKSx5Oms/LTE6TWF0aC5taW4obS55KihtLnk8MD8xOlMpLGIueSooYi55PDA/MTpTKSl9LE09e3g6dj8xOk1hdGgubWF4KG0ueCoobS54PjA/MTpTKSxiLngqKGIueD4wPzE6UykpLHk6eD8xOk1hdGgubWF4KG0ueSoobS55PjA/MTpTKSxiLnkqKGIueT4wPzE6UykpfSxDPXt3aWR0aDouNSooTS54LXcueCksaGVpZ2h0Oi41KihNLnktdy55KX07ZD1NYXRoLm1pbihsL0Mud2lkdGgscy9DLmhlaWdodCksdT17eDooTS54K3cueCkqLS41LHk6KE0ueSt3LnkpKi0uNX19aS5ib3JkZXJXaWR0aD1hLmdldE1heEJvcmRlcldpZHRoKGMuZGF0YSksaS5vdXRlclJhZGl1cz1NYXRoLm1heCgoZC1pLmJvcmRlcldpZHRoKS8yLDApLGkuaW5uZXJSYWRpdXM9TWF0aC5tYXgoaD9pLm91dGVyUmFkaXVzLzEwMCpoOjEsMCksaS5yYWRpdXNMZW5ndGg9KGkub3V0ZXJSYWRpdXMtaS5pbm5lclJhZGl1cykvaS5nZXRWaXNpYmxlRGF0YXNldENvdW50KCksaS5vZmZzZXRYPXUueCppLm91dGVyUmFkaXVzLGkub2Zmc2V0WT11LnkqaS5vdXRlclJhZGl1cyxjLnRvdGFsPWEuY2FsY3VsYXRlVG90YWwoKSxhLm91dGVyUmFkaXVzPWkub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgqYS5nZXRSaW5nSW5kZXgoYS5pbmRleCksYS5pbm5lclJhZGl1cz1hLm91dGVyUmFkaXVzLWkucmFkaXVzTGVuZ3RoLGUuZWFjaChjLmRhdGEsZnVuY3Rpb24oZSxpKXthLnVwZGF0ZUVsZW1lbnQoZSxpLHQpfSl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz1uLmNoYXJ0LHI9by5jaGFydEFyZWEsbD1vLm9wdGlvbnMscz1sLmFuaW1hdGlvbixkPShyLmxlZnQrci5yaWdodCkvMix1PShyLnRvcCtyLmJvdHRvbSkvMixjPWwucm90YXRpb24saD1sLnJvdGF0aW9uLGY9bi5nZXREYXRhc2V0KCksZz1pJiZzLmFuaW1hdGVSb3RhdGU/MDp0LmhpZGRlbj8wOm4uY2FsY3VsYXRlQ2lyY3VtZmVyZW5jZShmLmRhdGFbYV0pKihsLmNpcmN1bWZlcmVuY2UvKDIqTWF0aC5QSSkpLHA9aSYmcy5hbmltYXRlU2NhbGU/MDpuLmlubmVyUmFkaXVzLG09aSYmcy5hbmltYXRlU2NhbGU/MDpuLm91dGVyUmFkaXVzLGI9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQ7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9tb2RlbDp7eDpkK28ub2Zmc2V0WCx5OnUrby5vZmZzZXRZLHN0YXJ0QW5nbGU6YyxlbmRBbmdsZTpoLGNpcmN1bWZlcmVuY2U6ZyxvdXRlclJhZGl1czptLGlubmVyUmFkaXVzOnAsbGFiZWw6YihmLmxhYmVsLGEsby5kYXRhLmxhYmVsc1thXSl9fSk7dmFyIHY9dC5fbW9kZWw7dGhpcy5yZW1vdmVIb3ZlclN0eWxlKHQpLGkmJnMuYW5pbWF0ZVJvdGF0ZXx8KDA9PT1hP3Yuc3RhcnRBbmdsZT1sLnJvdGF0aW9uOnYuc3RhcnRBbmdsZT1uLmdldE1ldGEoKS5kYXRhW2EtMV0uX21vZGVsLmVuZEFuZ2xlLHYuZW5kQW5nbGU9di5zdGFydEFuZ2xlK3YuY2lyY3VtZmVyZW5jZSksdC5waXZvdCgpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKGUpe3QuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLnJlbW92ZUhvdmVyU3R5bGUuY2FsbCh0aGlzLGUsdGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLmFyYyl9LGNhbGN1bGF0ZVRvdGFsOmZ1bmN0aW9uKCl7dmFyIHQsYT10aGlzLmdldERhdGFzZXQoKSxpPXRoaXMuZ2V0TWV0YSgpLG49MDtyZXR1cm4gZS5lYWNoKGkuZGF0YSxmdW5jdGlvbihlLGkpe3Q9YS5kYXRhW2ldLGlzTmFOKHQpfHxlLmhpZGRlbnx8KG4rPU1hdGguYWJzKHQpKX0pLG59LGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRNZXRhKCkudG90YWw7cmV0dXJuIGU+MCYmIWlzTmFOKHQpPzIqTWF0aC5QSSoodC9lKTowfSxnZXRNYXhCb3JkZXJXaWR0aDpmdW5jdGlvbih0KXtmb3IodmFyIGUsYSxpPTAsbj10aGlzLmluZGV4LG89dC5sZW5ndGgscj0wO28+cjtyKyspZT10W3JdLl9tb2RlbD90W3JdLl9tb2RlbC5ib3JkZXJXaWR0aDowLGE9dFtyXS5fY2hhcnQ/dFtyXS5fY2hhcnQuY29uZmlnLmRhdGEuZGF0YXNldHNbbl0uaG92ZXJCb3JkZXJXaWR0aDowLGk9ZT5pP2U6aSxpPWE+aT9hOmk7cmV0dXJuIGl9fSl9fSx7fV0sMTg6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3JldHVybiBhLmdldFZhbHVlT3JEZWZhdWx0KHQuc2hvd0xpbmUsZS5zaG93TGluZXMpfXZhciBhPXQuaGVscGVyczt0LmRlZmF1bHRzLmxpbmU9e3Nob3dMaW5lczohMCxzcGFuR2FwczohMSxob3Zlcjp7bW9kZTpcImxhYmVsXCJ9LHNjYWxlczp7eEF4ZXM6W3t0eXBlOlwiY2F0ZWdvcnlcIixpZDpcIngtYXhpcy0wXCJ9XSx5QXhlczpbe3R5cGU6XCJsaW5lYXJcIixpZDpcInktYXhpcy0wXCJ9XX19LHQuY29udHJvbGxlcnMubGluZT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YXNldEVsZW1lbnRUeXBlOnQuZWxlbWVudHMuTGluZSxkYXRhRWxlbWVudFR5cGU6dC5lbGVtZW50cy5Qb2ludCx1cGRhdGU6ZnVuY3Rpb24odCl7dmFyIGksbixvLHI9dGhpcyxsPXIuZ2V0TWV0YSgpLHM9bC5kYXRhc2V0LGQ9bC5kYXRhfHxbXSx1PXIuY2hhcnQub3B0aW9ucyxjPXUuZWxlbWVudHMubGluZSxoPXIuZ2V0U2NhbGVGb3JJZChsLnlBeGlzSUQpLGY9ci5nZXREYXRhc2V0KCksZz1lKGYsdSk7Zm9yKGcmJihvPXMuY3VzdG9tfHx7fSx2b2lkIDAhPT1mLnRlbnNpb24mJnZvaWQgMD09PWYubGluZVRlbnNpb24mJihmLmxpbmVUZW5zaW9uPWYudGVuc2lvbikscy5fc2NhbGU9aCxzLl9kYXRhc2V0SW5kZXg9ci5pbmRleCxzLl9jaGlsZHJlbj1kLHMuX21vZGVsPXtzcGFuR2FwczpmLnNwYW5HYXBzP2Yuc3BhbkdhcHM6dS5zcGFuR2Fwcyx0ZW5zaW9uOm8udGVuc2lvbj9vLnRlbnNpb246YS5nZXRWYWx1ZU9yRGVmYXVsdChmLmxpbmVUZW5zaW9uLGMudGVuc2lvbiksYmFja2dyb3VuZENvbG9yOm8uYmFja2dyb3VuZENvbG9yP28uYmFja2dyb3VuZENvbG9yOmYuYmFja2dyb3VuZENvbG9yfHxjLmJhY2tncm91bmRDb2xvcixib3JkZXJXaWR0aDpvLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6Zi5ib3JkZXJXaWR0aHx8Yy5ib3JkZXJXaWR0aCxib3JkZXJDb2xvcjpvLmJvcmRlckNvbG9yP28uYm9yZGVyQ29sb3I6Zi5ib3JkZXJDb2xvcnx8Yy5ib3JkZXJDb2xvcixib3JkZXJDYXBTdHlsZTpvLmJvcmRlckNhcFN0eWxlP28uYm9yZGVyQ2FwU3R5bGU6Zi5ib3JkZXJDYXBTdHlsZXx8Yy5ib3JkZXJDYXBTdHlsZSxib3JkZXJEYXNoOm8uYm9yZGVyRGFzaD9vLmJvcmRlckRhc2g6Zi5ib3JkZXJEYXNofHxjLmJvcmRlckRhc2gsYm9yZGVyRGFzaE9mZnNldDpvLmJvcmRlckRhc2hPZmZzZXQ/by5ib3JkZXJEYXNoT2Zmc2V0OmYuYm9yZGVyRGFzaE9mZnNldHx8Yy5ib3JkZXJEYXNoT2Zmc2V0LGJvcmRlckpvaW5TdHlsZTpvLmJvcmRlckpvaW5TdHlsZT9vLmJvcmRlckpvaW5TdHlsZTpmLmJvcmRlckpvaW5TdHlsZXx8Yy5ib3JkZXJKb2luU3R5bGUsZmlsbDpvLmZpbGw/by5maWxsOnZvaWQgMCE9PWYuZmlsbD9mLmZpbGw6Yy5maWxsLHN0ZXBwZWRMaW5lOm8uc3RlcHBlZExpbmU/by5zdGVwcGVkTGluZTphLmdldFZhbHVlT3JEZWZhdWx0KGYuc3RlcHBlZExpbmUsYy5zdGVwcGVkKSxjdWJpY0ludGVycG9sYXRpb25Nb2RlOm8uY3ViaWNJbnRlcnBvbGF0aW9uTW9kZT9vLmN1YmljSW50ZXJwb2xhdGlvbk1vZGU6YS5nZXRWYWx1ZU9yRGVmYXVsdChmLmN1YmljSW50ZXJwb2xhdGlvbk1vZGUsYy5jdWJpY0ludGVycG9sYXRpb25Nb2RlKSxzY2FsZVRvcDpoLnRvcCxzY2FsZUJvdHRvbTpoLmJvdHRvbSxzY2FsZVplcm86aC5nZXRCYXNlUGl4ZWwoKX0scy5waXZvdCgpKSxpPTAsbj1kLmxlbmd0aDtuPmk7KytpKXIudXBkYXRlRWxlbWVudChkW2ldLGksdCk7Zm9yKGcmJjAhPT1zLl9tb2RlbC50ZW5zaW9uJiZyLnVwZGF0ZUJlemllckNvbnRyb2xQb2ludHMoKSxpPTAsbj1kLmxlbmd0aDtuPmk7KytpKWRbaV0ucGl2b3QoKX0sZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYmFja2dyb3VuZENvbG9yLG49dGhpcy5nZXREYXRhc2V0KCksbz10LmN1c3RvbXx8e307cmV0dXJuIG8uYmFja2dyb3VuZENvbG9yP2k9by5iYWNrZ3JvdW5kQ29sb3I6bi5wb2ludEJhY2tncm91bmRDb2xvcj9pPWEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KG4ucG9pbnRCYWNrZ3JvdW5kQ29sb3IsZSxpKTpuLmJhY2tncm91bmRDb2xvciYmKGk9bi5iYWNrZ3JvdW5kQ29sb3IpLGl9LGdldFBvaW50Qm9yZGVyQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQuYm9yZGVyQ29sb3Isbj10aGlzLmdldERhdGFzZXQoKSxvPXQuY3VzdG9tfHx7fTtyZXR1cm4gby5ib3JkZXJDb2xvcj9pPW8uYm9yZGVyQ29sb3I6bi5wb2ludEJvcmRlckNvbG9yP2k9YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5wb2ludEJvcmRlckNvbG9yLGUsaSk6bi5ib3JkZXJDb2xvciYmKGk9bi5ib3JkZXJDb2xvciksaX0sZ2V0UG9pbnRCb3JkZXJXaWR0aDpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ib3JkZXJXaWR0aCxuPXRoaXMuZ2V0RGF0YXNldCgpLG89dC5jdXN0b218fHt9O3JldHVybiBvLmJvcmRlcldpZHRoP2k9by5ib3JkZXJXaWR0aDpuLnBvaW50Qm9yZGVyV2lkdGg/aT1hLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLnBvaW50Qm9yZGVyV2lkdGgsZSxpKTpuLmJvcmRlcldpZHRoJiYoaT1uLmJvcmRlcldpZHRoKSxpfSx1cGRhdGVFbGVtZW50OmZ1bmN0aW9uKHQsZSxpKXt2YXIgbixvLHI9dGhpcyxsPXIuZ2V0TWV0YSgpLHM9dC5jdXN0b218fHt9LGQ9ci5nZXREYXRhc2V0KCksdT1yLmluZGV4LGM9ZC5kYXRhW2VdLGg9ci5nZXRTY2FsZUZvcklkKGwueUF4aXNJRCksZj1yLmdldFNjYWxlRm9ySWQobC54QXhpc0lEKSxnPXIuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludCxwPXIuY2hhcnQuZGF0YS5sYWJlbHN8fFtdLG09MT09PXAubGVuZ3RofHwxPT09ZC5kYXRhLmxlbmd0aHx8ci5jaGFydC5pc0NvbWJvO3ZvaWQgMCE9PWQucmFkaXVzJiZ2b2lkIDA9PT1kLnBvaW50UmFkaXVzJiYoZC5wb2ludFJhZGl1cz1kLnJhZGl1cyksdm9pZCAwIT09ZC5oaXRSYWRpdXMmJnZvaWQgMD09PWQucG9pbnRIaXRSYWRpdXMmJihkLnBvaW50SGl0UmFkaXVzPWQuaGl0UmFkaXVzKSxuPWYuZ2V0UGl4ZWxGb3JWYWx1ZShcIm9iamVjdFwiPT10eXBlb2YgYz9jOk5hTixlLHUsbSksbz1pP2guZ2V0QmFzZVBpeGVsKCk6ci5jYWxjdWxhdGVQb2ludFkoYyxlLHUpLHQuX3hTY2FsZT1mLHQuX3lTY2FsZT1oLHQuX2RhdGFzZXRJbmRleD11LHQuX2luZGV4PWUsdC5fbW9kZWw9e3g6bix5Om8sc2tpcDpzLnNraXB8fGlzTmFOKG4pfHxpc05hTihvKSxyYWRpdXM6cy5yYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRSYWRpdXMsZSxnLnJhZGl1cykscG9pbnRTdHlsZTpzLnBvaW50U3R5bGV8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGQucG9pbnRTdHlsZSxlLGcucG9pbnRTdHlsZSksYmFja2dyb3VuZENvbG9yOnIuZ2V0UG9pbnRCYWNrZ3JvdW5kQ29sb3IodCxlKSxib3JkZXJDb2xvcjpyLmdldFBvaW50Qm9yZGVyQ29sb3IodCxlKSxib3JkZXJXaWR0aDpyLmdldFBvaW50Qm9yZGVyV2lkdGgodCxlKSx0ZW5zaW9uOmwuZGF0YXNldC5fbW9kZWw/bC5kYXRhc2V0Ll9tb2RlbC50ZW5zaW9uOjAsc3RlcHBlZExpbmU6bC5kYXRhc2V0Ll9tb2RlbD9sLmRhdGFzZXQuX21vZGVsLnN0ZXBwZWRMaW5lOiExLGhpdFJhZGl1czpzLmhpdFJhZGl1c3x8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZC5wb2ludEhpdFJhZGl1cyxlLGcuaGl0UmFkaXVzKX19LGNhbGN1bGF0ZVBvaW50WTpmdW5jdGlvbih0LGUsYSl7dmFyIGksbixvLHI9dGhpcyxsPXIuY2hhcnQscz1yLmdldE1ldGEoKSxkPXIuZ2V0U2NhbGVGb3JJZChzLnlBeGlzSUQpLHU9MCxjPTA7aWYoZC5vcHRpb25zLnN0YWNrZWQpe2ZvcihpPTA7YT5pO2krKylpZihuPWwuZGF0YS5kYXRhc2V0c1tpXSxvPWwuZ2V0RGF0YXNldE1ldGEoaSksXCJsaW5lXCI9PT1vLnR5cGUmJm8ueUF4aXNJRD09PWQuaWQmJmwuaXNEYXRhc2V0VmlzaWJsZShpKSl7dmFyIGg9TnVtYmVyKGQuZ2V0UmlnaHRWYWx1ZShuLmRhdGFbZV0pKTswPmg/Yys9aHx8MDp1Kz1ofHwwfXZhciBmPU51bWJlcihkLmdldFJpZ2h0VmFsdWUodCkpO3JldHVybiAwPmY/ZC5nZXRQaXhlbEZvclZhbHVlKGMrZik6ZC5nZXRQaXhlbEZvclZhbHVlKHUrZil9cmV0dXJuIGQuZ2V0UGl4ZWxGb3JWYWx1ZSh0KX0sdXBkYXRlQmV6aWVyQ29udHJvbFBvaW50czpmdW5jdGlvbigpe2Z1bmN0aW9uIHQodCxlLGEpe3JldHVybiBNYXRoLm1heChNYXRoLm1pbih0LGEpLGUpfXZhciBlLGksbixvLHIsbD10aGlzLHM9bC5nZXRNZXRhKCksZD1sLmNoYXJ0LmNoYXJ0QXJlYSx1PXMuZGF0YXx8W107aWYocy5kYXRhc2V0Ll9tb2RlbC5zcGFuR2FwcyYmKHU9dS5maWx0ZXIoZnVuY3Rpb24odCl7cmV0dXJuIXQuX21vZGVsLnNraXB9KSksXCJtb25vdG9uZVwiPT09cy5kYXRhc2V0Ll9tb2RlbC5jdWJpY0ludGVycG9sYXRpb25Nb2RlKWEuc3BsaW5lQ3VydmVNb25vdG9uZSh1KTtlbHNlIGZvcihlPTAsaT11Lmxlbmd0aDtpPmU7KytlKW49dVtlXSxvPW4uX21vZGVsLHI9YS5zcGxpbmVDdXJ2ZShhLnByZXZpb3VzSXRlbSh1LGUpLl9tb2RlbCxvLGEubmV4dEl0ZW0odSxlKS5fbW9kZWwscy5kYXRhc2V0Ll9tb2RlbC50ZW5zaW9uKSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWD1yLnByZXZpb3VzLngsby5jb250cm9sUG9pbnRQcmV2aW91c1k9ci5wcmV2aW91cy55LG8uY29udHJvbFBvaW50TmV4dFg9ci5uZXh0Lngsby5jb250cm9sUG9pbnROZXh0WT1yLm5leHQueTtpZihsLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMubGluZS5jYXBCZXppZXJQb2ludHMpZm9yKGU9MCxpPXUubGVuZ3RoO2k+ZTsrK2Upbz11W2VdLl9tb2RlbCxvLmNvbnRyb2xQb2ludFByZXZpb3VzWD10KG8uY29udHJvbFBvaW50UHJldmlvdXNYLGQubGVmdCxkLnJpZ2h0KSxvLmNvbnRyb2xQb2ludFByZXZpb3VzWT10KG8uY29udHJvbFBvaW50UHJldmlvdXNZLGQudG9wLGQuYm90dG9tKSxvLmNvbnRyb2xQb2ludE5leHRYPXQoby5jb250cm9sUG9pbnROZXh0WCxkLmxlZnQsZC5yaWdodCksby5jb250cm9sUG9pbnROZXh0WT10KG8uY29udHJvbFBvaW50TmV4dFksZC50b3AsZC5ib3R0b20pfSxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBhLGksbj10aGlzLG89bi5nZXRNZXRhKCkscj1vLmRhdGF8fFtdLGw9dHx8MTtmb3IoYT0wLGk9ci5sZW5ndGg7aT5hOysrYSlyW2FdLnRyYW5zaXRpb24obCk7Zm9yKGUobi5nZXREYXRhc2V0KCksbi5jaGFydC5vcHRpb25zKSYmby5kYXRhc2V0LnRyYW5zaXRpb24obCkuZHJhdygpLGE9MCxpPXIubGVuZ3RoO2k+YTsrK2EpclthXS5kcmF3KCl9LHNldEhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10Ll9pbmRleCxuPXQuY3VzdG9tfHx7fSxvPXQuX21vZGVsO28ucmFkaXVzPW4uaG92ZXJSYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlclJhZGl1cyxpLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9bi5ob3ZlckJhY2tncm91bmRDb2xvcnx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQmFja2dyb3VuZENvbG9yLGksYS5nZXRIb3ZlckNvbG9yKG8uYmFja2dyb3VuZENvbG9yKSksby5ib3JkZXJDb2xvcj1uLmhvdmVyQm9yZGVyQ29sb3J8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGUucG9pbnRIb3ZlckJvcmRlckNvbG9yLGksYS5nZXRIb3ZlckNvbG9yKG8uYm9yZGVyQ29sb3IpKSxvLmJvcmRlcldpZHRoPW4uaG92ZXJCb3JkZXJXaWR0aHx8YS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoZS5wb2ludEhvdmVyQm9yZGVyV2lkdGgsaSxvLmJvcmRlcldpZHRoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGk9ZS5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sbj10Ll9pbmRleCxvPXQuY3VzdG9tfHx7fSxyPXQuX21vZGVsO3ZvaWQgMCE9PWkucmFkaXVzJiZ2b2lkIDA9PT1pLnBvaW50UmFkaXVzJiYoaS5wb2ludFJhZGl1cz1pLnJhZGl1cyksci5yYWRpdXM9by5yYWRpdXN8fGEuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGkucG9pbnRSYWRpdXMsbixlLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQucmFkaXVzKSxyLmJhY2tncm91bmRDb2xvcj1lLmdldFBvaW50QmFja2dyb3VuZENvbG9yKHQsbiksci5ib3JkZXJDb2xvcj1lLmdldFBvaW50Qm9yZGVyQ29sb3IodCxuKSxyLmJvcmRlcldpZHRoPWUuZ2V0UG9pbnRCb3JkZXJXaWR0aCh0LG4pfX0pfX0se31dLDE5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLnBvbGFyQXJlYT17c2NhbGU6e3R5cGU6XCJyYWRpYWxMaW5lYXJcIixsaW5lQXJjOiEwLHRpY2tzOntiZWdpbkF0WmVybzohMH19LGFuaW1hdGlvbjp7YW5pbWF0ZVJvdGF0ZTohMCxhbmltYXRlU2NhbGU6ITB9LHN0YXJ0QW5nbGU6LS41Kk1hdGguUEksYXNwZWN0UmF0aW86MSxsZWdlbmRDYWxsYmFjazpmdW5jdGlvbih0KXt2YXIgZT1bXTtlLnB1c2goJzx1bCBjbGFzcz1cIicrdC5pZCsnLWxlZ2VuZFwiPicpO3ZhciBhPXQuZGF0YSxpPWEuZGF0YXNldHMsbj1hLmxhYmVscztpZihpLmxlbmd0aClmb3IodmFyIG89MDtvPGlbMF0uZGF0YS5sZW5ndGg7KytvKWUucHVzaCgnPGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjonK2lbMF0uYmFja2dyb3VuZENvbG9yW29dKydcIj48L3NwYW4+JyksbltvXSYmZS5wdXNoKG5bb10pLGUucHVzaChcIjwvbGk+XCIpO3JldHVybiBlLnB1c2goXCI8L3VsPlwiKSxlLmpvaW4oXCJcIil9LGxlZ2VuZDp7bGFiZWxzOntnZW5lcmF0ZUxhYmVsczpmdW5jdGlvbih0KXt2YXIgYT10LmRhdGE7cmV0dXJuIGEubGFiZWxzLmxlbmd0aCYmYS5kYXRhc2V0cy5sZW5ndGg/YS5sYWJlbHMubWFwKGZ1bmN0aW9uKGksbil7dmFyIG89dC5nZXREYXRhc2V0TWV0YSgwKSxyPWEuZGF0YXNldHNbMF0sbD1vLmRhdGFbbl0scz1sLmN1c3RvbXx8e30sZD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCx1PXQub3B0aW9ucy5lbGVtZW50cy5hcmMsYz1zLmJhY2tncm91bmRDb2xvcj9zLmJhY2tncm91bmRDb2xvcjpkKHIuYmFja2dyb3VuZENvbG9yLG4sdS5iYWNrZ3JvdW5kQ29sb3IpLGg9cy5ib3JkZXJDb2xvcj9zLmJvcmRlckNvbG9yOmQoci5ib3JkZXJDb2xvcixuLHUuYm9yZGVyQ29sb3IpLGY9cy5ib3JkZXJXaWR0aD9zLmJvcmRlcldpZHRoOmQoci5ib3JkZXJXaWR0aCxuLHUuYm9yZGVyV2lkdGgpO3JldHVybnt0ZXh0OmksZmlsbFN0eWxlOmMsc3Ryb2tlU3R5bGU6aCxsaW5lV2lkdGg6ZixoaWRkZW46aXNOYU4oci5kYXRhW25dKXx8by5kYXRhW25dLmhpZGRlbixpbmRleDpufX0pOltdfX0sb25DbGljazpmdW5jdGlvbih0LGUpe3ZhciBhLGksbixvPWUuaW5kZXgscj10aGlzLmNoYXJ0O2ZvcihhPTAsaT0oci5kYXRhLmRhdGFzZXRzfHxbXSkubGVuZ3RoO2k+YTsrK2Epbj1yLmdldERhdGFzZXRNZXRhKGEpLG4uZGF0YVtvXS5oaWRkZW49IW4uZGF0YVtvXS5oaWRkZW47ci51cGRhdGUoKX19LHRvb2x0aXBzOntjYWxsYmFja3M6e3RpdGxlOmZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sbGFiZWw6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZS5sYWJlbHNbdC5pbmRleF0rXCI6IFwiK3QueUxhYmVsfX19fSx0LmNvbnRyb2xsZXJzLnBvbGFyQXJlYT10LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZCh7ZGF0YUVsZW1lbnRUeXBlOnQuZWxlbWVudHMuQXJjLGxpbmtTY2FsZXM6ZS5ub29wLHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5jaGFydCxuPWkuY2hhcnRBcmVhLG89YS5nZXRNZXRhKCkscj1pLm9wdGlvbnMsbD1yLmVsZW1lbnRzLmFyYyxzPU1hdGgubWluKG4ucmlnaHQtbi5sZWZ0LG4uYm90dG9tLW4udG9wKTtpLm91dGVyUmFkaXVzPU1hdGgubWF4KChzLWwuYm9yZGVyV2lkdGgvMikvMiwwKSxpLmlubmVyUmFkaXVzPU1hdGgubWF4KHIuY3V0b3V0UGVyY2VudGFnZT9pLm91dGVyUmFkaXVzLzEwMCpyLmN1dG91dFBlcmNlbnRhZ2U6MSwwKSxpLnJhZGl1c0xlbmd0aD0oaS5vdXRlclJhZGl1cy1pLmlubmVyUmFkaXVzKS9pLmdldFZpc2libGVEYXRhc2V0Q291bnQoKSxhLm91dGVyUmFkaXVzPWkub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgqYS5pbmRleCxhLmlubmVyUmFkaXVzPWEub3V0ZXJSYWRpdXMtaS5yYWRpdXNMZW5ndGgsby5jb3VudD1hLmNvdW50VmlzaWJsZUVsZW1lbnRzKCksZS5lYWNoKG8uZGF0YSxmdW5jdGlvbihlLGkpe2EudXBkYXRlRWxlbWVudChlLGksdCl9KX0sdXBkYXRlRWxlbWVudDpmdW5jdGlvbih0LGEsaSl7Zm9yKHZhciBuPXRoaXMsbz1uLmNoYXJ0LHI9bi5nZXREYXRhc2V0KCksbD1vLm9wdGlvbnMscz1sLmFuaW1hdGlvbixkPW8uc2NhbGUsdT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCxjPW8uZGF0YS5sYWJlbHMsaD1uLmNhbGN1bGF0ZUNpcmN1bWZlcmVuY2Uoci5kYXRhW2FdKSxmPWQueENlbnRlcixnPWQueUNlbnRlcixwPTAsbT1uLmdldE1ldGEoKSxiPTA7YT5iOysrYilpc05hTihyLmRhdGFbYl0pfHxtLmRhdGFbYl0uaGlkZGVufHwrK3A7dmFyIHY9bC5zdGFydEFuZ2xlLHg9dC5oaWRkZW4/MDpkLmdldERpc3RhbmNlRnJvbUNlbnRlckZvclZhbHVlKHIuZGF0YVthXSkseT12K2gqcCxrPXkrKHQuaGlkZGVuPzA6aCksUz1zLmFuaW1hdGVTY2FsZT8wOmQuZ2V0RGlzdGFuY2VGcm9tQ2VudGVyRm9yVmFsdWUoci5kYXRhW2FdKTtlLmV4dGVuZCh0LHtfZGF0YXNldEluZGV4Om4uaW5kZXgsX2luZGV4OmEsX3NjYWxlOmQsX21vZGVsOnt4OmYseTpnLGlubmVyUmFkaXVzOjAsb3V0ZXJSYWRpdXM6aT9TOngsc3RhcnRBbmdsZTppJiZzLmFuaW1hdGVSb3RhdGU/djp5LGVuZEFuZ2xlOmkmJnMuYW5pbWF0ZVJvdGF0ZT92OmssbGFiZWw6dShjLGEsY1thXSl9fSksbi5yZW1vdmVIb3ZlclN0eWxlKHQpLHQucGl2b3QoKX0scmVtb3ZlSG92ZXJTdHlsZTpmdW5jdGlvbihlKXt0LkRhdGFzZXRDb250cm9sbGVyLnByb3RvdHlwZS5yZW1vdmVIb3ZlclN0eWxlLmNhbGwodGhpcyxlLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5hcmMpfSxjb3VudFZpc2libGVFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0RGF0YXNldCgpLGE9dGhpcy5nZXRNZXRhKCksaT0wO3JldHVybiBlLmVhY2goYS5kYXRhLGZ1bmN0aW9uKGUsYSl7aXNOYU4odC5kYXRhW2FdKXx8ZS5oaWRkZW58fGkrK30pLGl9LGNhbGN1bGF0ZUNpcmN1bWZlcmVuY2U6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5nZXRNZXRhKCkuY291bnQ7cmV0dXJuIGU+MCYmIWlzTmFOKHQpPzIqTWF0aC5QSS9lOjB9fSl9fSx7fV0sMjA6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMucmFkYXI9e2FzcGVjdFJhdGlvOjEsc2NhbGU6e3R5cGU6XCJyYWRpYWxMaW5lYXJcIn0sZWxlbWVudHM6e2xpbmU6e3RlbnNpb246MH19fSx0LmNvbnRyb2xsZXJzLnJhZGFyPXQuRGF0YXNldENvbnRyb2xsZXIuZXh0ZW5kKHtkYXRhc2V0RWxlbWVudFR5cGU6dC5lbGVtZW50cy5MaW5lLGRhdGFFbGVtZW50VHlwZTp0LmVsZW1lbnRzLlBvaW50LGxpbmtTY2FsZXM6ZS5ub29wLHVwZGF0ZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLGk9YS5nZXRNZXRhKCksbj1pLmRhdGFzZXQsbz1pLmRhdGEscj1uLmN1c3RvbXx8e30sbD1hLmdldERhdGFzZXQoKSxzPWEuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLGQ9YS5jaGFydC5zY2FsZTt2b2lkIDAhPT1sLnRlbnNpb24mJnZvaWQgMD09PWwubGluZVRlbnNpb24mJihsLmxpbmVUZW5zaW9uPWwudGVuc2lvbiksZS5leHRlbmQoaS5kYXRhc2V0LHtfZGF0YXNldEluZGV4OmEuaW5kZXgsX2NoaWxkcmVuOm8sX2xvb3A6ITAsX21vZGVsOnt0ZW5zaW9uOnIudGVuc2lvbj9yLnRlbnNpb246ZS5nZXRWYWx1ZU9yRGVmYXVsdChsLmxpbmVUZW5zaW9uLHMudGVuc2lvbiksYmFja2dyb3VuZENvbG9yOnIuYmFja2dyb3VuZENvbG9yP3IuYmFja2dyb3VuZENvbG9yOmwuYmFja2dyb3VuZENvbG9yfHxzLmJhY2tncm91bmRDb2xvcixib3JkZXJXaWR0aDpyLmJvcmRlcldpZHRoP3IuYm9yZGVyV2lkdGg6bC5ib3JkZXJXaWR0aHx8cy5ib3JkZXJXaWR0aCxib3JkZXJDb2xvcjpyLmJvcmRlckNvbG9yP3IuYm9yZGVyQ29sb3I6bC5ib3JkZXJDb2xvcnx8cy5ib3JkZXJDb2xvcixmaWxsOnIuZmlsbD9yLmZpbGw6dm9pZCAwIT09bC5maWxsP2wuZmlsbDpzLmZpbGwsYm9yZGVyQ2FwU3R5bGU6ci5ib3JkZXJDYXBTdHlsZT9yLmJvcmRlckNhcFN0eWxlOmwuYm9yZGVyQ2FwU3R5bGV8fHMuYm9yZGVyQ2FwU3R5bGUsYm9yZGVyRGFzaDpyLmJvcmRlckRhc2g/ci5ib3JkZXJEYXNoOmwuYm9yZGVyRGFzaHx8cy5ib3JkZXJEYXNoLGJvcmRlckRhc2hPZmZzZXQ6ci5ib3JkZXJEYXNoT2Zmc2V0P3IuYm9yZGVyRGFzaE9mZnNldDpsLmJvcmRlckRhc2hPZmZzZXR8fHMuYm9yZGVyRGFzaE9mZnNldCxib3JkZXJKb2luU3R5bGU6ci5ib3JkZXJKb2luU3R5bGU/ci5ib3JkZXJKb2luU3R5bGU6bC5ib3JkZXJKb2luU3R5bGV8fHMuYm9yZGVySm9pblN0eWxlLHNjYWxlVG9wOmQudG9wLHNjYWxlQm90dG9tOmQuYm90dG9tLHNjYWxlWmVybzpkLmdldEJhc2VQb3NpdGlvbigpfX0pLGkuZGF0YXNldC5waXZvdCgpLGUuZWFjaChvLGZ1bmN0aW9uKGUsaSl7YS51cGRhdGVFbGVtZW50KGUsaSx0KX0sYSksYS51cGRhdGVCZXppZXJDb250cm9sUG9pbnRzKCl9LHVwZGF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXRoaXMsbz10LmN1c3RvbXx8e30scj1uLmdldERhdGFzZXQoKSxsPW4uY2hhcnQuc2NhbGUscz1uLmNoYXJ0Lm9wdGlvbnMuZWxlbWVudHMucG9pbnQsZD1sLmdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZShhLHIuZGF0YVthXSk7ZS5leHRlbmQodCx7X2RhdGFzZXRJbmRleDpuLmluZGV4LF9pbmRleDphLF9zY2FsZTpsLF9tb2RlbDp7eDppP2wueENlbnRlcjpkLngseTppP2wueUNlbnRlcjpkLnksdGVuc2lvbjpvLnRlbnNpb24/by50ZW5zaW9uOmUuZ2V0VmFsdWVPckRlZmF1bHQoci50ZW5zaW9uLG4uY2hhcnQub3B0aW9ucy5lbGVtZW50cy5saW5lLnRlbnNpb24pLHJhZGl1czpvLnJhZGl1cz9vLnJhZGl1czplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50UmFkaXVzLGEscy5yYWRpdXMpLGJhY2tncm91bmRDb2xvcjpvLmJhY2tncm91bmRDb2xvcj9vLmJhY2tncm91bmRDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50QmFja2dyb3VuZENvbG9yLGEscy5iYWNrZ3JvdW5kQ29sb3IpLGJvcmRlckNvbG9yOm8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChyLnBvaW50Qm9yZGVyQ29sb3IsYSxzLmJvcmRlckNvbG9yKSxib3JkZXJXaWR0aDpvLmJvcmRlcldpZHRoP28uYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoci5wb2ludEJvcmRlcldpZHRoLGEscy5ib3JkZXJXaWR0aCkscG9pbnRTdHlsZTpvLnBvaW50U3R5bGU/by5wb2ludFN0eWxlOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIucG9pbnRTdHlsZSxhLHMucG9pbnRTdHlsZSksaGl0UmFkaXVzOm8uaGl0UmFkaXVzP28uaGl0UmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHIuaGl0UmFkaXVzLGEscy5oaXRSYWRpdXMpfX0pLHQuX21vZGVsLnNraXA9by5za2lwP28uc2tpcDppc05hTih0Ll9tb2RlbC54KXx8aXNOYU4odC5fbW9kZWwueSl9LHVwZGF0ZUJlemllckNvbnRyb2xQb2ludHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmNoYXJ0LmNoYXJ0QXJlYSxhPXRoaXMuZ2V0TWV0YSgpO2UuZWFjaChhLmRhdGEsZnVuY3Rpb24oaSxuKXt2YXIgbz1pLl9tb2RlbCxyPWUuc3BsaW5lQ3VydmUoZS5wcmV2aW91c0l0ZW0oYS5kYXRhLG4sITApLl9tb2RlbCxvLGUubmV4dEl0ZW0oYS5kYXRhLG4sITApLl9tb2RlbCxvLnRlbnNpb24pO28uY29udHJvbFBvaW50UHJldmlvdXNYPU1hdGgubWF4KE1hdGgubWluKHIucHJldmlvdXMueCx0LnJpZ2h0KSx0LmxlZnQpLG8uY29udHJvbFBvaW50UHJldmlvdXNZPU1hdGgubWF4KE1hdGgubWluKHIucHJldmlvdXMueSx0LmJvdHRvbSksdC50b3ApLG8uY29udHJvbFBvaW50TmV4dFg9TWF0aC5tYXgoTWF0aC5taW4oci5uZXh0LngsdC5yaWdodCksdC5sZWZ0KSxvLmNvbnRyb2xQb2ludE5leHRZPU1hdGgubWF4KE1hdGgubWluKHIubmV4dC55LHQuYm90dG9tKSx0LnRvcCksaS5waXZvdCgpfSl9LGRyYXc6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5nZXRNZXRhKCksaT10fHwxO2UuZWFjaChhLmRhdGEsZnVuY3Rpb24odCl7dC50cmFuc2l0aW9uKGkpfSksYS5kYXRhc2V0LnRyYW5zaXRpb24oaSkuZHJhdygpLGUuZWFjaChhLmRhdGEsZnVuY3Rpb24odCl7dC5kcmF3KCl9KX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgYT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxpPXQuY3VzdG9tfHx7fSxuPXQuX2luZGV4LG89dC5fbW9kZWw7by5yYWRpdXM9aS5ob3ZlclJhZGl1cz9pLmhvdmVyUmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlclJhZGl1cyxuLHRoaXMuY2hhcnQub3B0aW9ucy5lbGVtZW50cy5wb2ludC5ob3ZlclJhZGl1cyksby5iYWNrZ3JvdW5kQ29sb3I9aS5ob3ZlckJhY2tncm91bmRDb2xvcj9pLmhvdmVyQmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcixuLGUuZ2V0SG92ZXJDb2xvcihvLmJhY2tncm91bmRDb2xvcikpLG8uYm9yZGVyQ29sb3I9aS5ob3ZlckJvcmRlckNvbG9yP2kuaG92ZXJCb3JkZXJDb2xvcjplLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChhLnBvaW50SG92ZXJCb3JkZXJDb2xvcixuLGUuZ2V0SG92ZXJDb2xvcihvLmJvcmRlckNvbG9yKSksby5ib3JkZXJXaWR0aD1pLmhvdmVyQm9yZGVyV2lkdGg/aS5ob3ZlckJvcmRlcldpZHRoOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRIb3ZlckJvcmRlcldpZHRoLG4sby5ib3JkZXJXaWR0aCl9LHJlbW92ZUhvdmVyU3R5bGU6ZnVuY3Rpb24odCl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0saT10LmN1c3RvbXx8e30sbj10Ll9pbmRleCxvPXQuX21vZGVsLHI9dGhpcy5jaGFydC5vcHRpb25zLmVsZW1lbnRzLnBvaW50O28ucmFkaXVzPWkucmFkaXVzP2kucmFkaXVzOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucmFkaXVzLG4sci5yYWRpdXMpLG8uYmFja2dyb3VuZENvbG9yPWkuYmFja2dyb3VuZENvbG9yP2kuYmFja2dyb3VuZENvbG9yOmUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KGEucG9pbnRCYWNrZ3JvdW5kQ29sb3IsbixyLmJhY2tncm91bmRDb2xvciksby5ib3JkZXJDb2xvcj1pLmJvcmRlckNvbG9yP2kuYm9yZGVyQ29sb3I6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJvcmRlckNvbG9yLG4sci5ib3JkZXJDb2xvciksby5ib3JkZXJXaWR0aD1pLmJvcmRlcldpZHRoP2kuYm9yZGVyV2lkdGg6ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQoYS5wb2ludEJvcmRlcldpZHRoLG4sci5ib3JkZXJXaWR0aCl9fSl9fSx7fV0sMjE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLmFuaW1hdGlvbj17ZHVyYXRpb246MWUzLGVhc2luZzpcImVhc2VPdXRRdWFydFwiLG9uUHJvZ3Jlc3M6ZS5ub29wLG9uQ29tcGxldGU6ZS5ub29wfSx0LkFuaW1hdGlvbj10LkVsZW1lbnQuZXh0ZW5kKHtjdXJyZW50U3RlcDpudWxsLG51bVN0ZXBzOjYwLGVhc2luZzpcIlwiLHJlbmRlcjpudWxsLG9uQW5pbWF0aW9uUHJvZ3Jlc3M6bnVsbCxvbkFuaW1hdGlvbkNvbXBsZXRlOm51bGx9KSx0LmFuaW1hdGlvblNlcnZpY2U9e2ZyYW1lRHVyYXRpb246MTcsYW5pbWF0aW9uczpbXSxkcm9wRnJhbWVzOjAscmVxdWVzdDpudWxsLGFkZEFuaW1hdGlvbjpmdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10aGlzO2l8fCh0LmFuaW1hdGluZz0hMCk7Zm9yKHZhciBvPTA7bzxuLmFuaW1hdGlvbnMubGVuZ3RoOysrbylpZihuLmFuaW1hdGlvbnNbb10uY2hhcnRJbnN0YW5jZT09PXQpcmV0dXJuIHZvaWQobi5hbmltYXRpb25zW29dLmFuaW1hdGlvbk9iamVjdD1lKTtuLmFuaW1hdGlvbnMucHVzaCh7Y2hhcnRJbnN0YW5jZTp0LGFuaW1hdGlvbk9iamVjdDplfSksMT09PW4uYW5pbWF0aW9ucy5sZW5ndGgmJm4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl9LGNhbmNlbEFuaW1hdGlvbjpmdW5jdGlvbih0KXt2YXIgYT1lLmZpbmRJbmRleCh0aGlzLmFuaW1hdGlvbnMsZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2hhcnRJbnN0YW5jZT09PXR9KTstMSE9PWEmJih0aGlzLmFuaW1hdGlvbnMuc3BsaWNlKGEsMSksdC5hbmltYXRpbmc9ITEpfSxyZXF1ZXN0QW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO251bGw9PT10LnJlcXVlc3QmJih0LnJlcXVlc3Q9ZS5yZXF1ZXN0QW5pbUZyYW1lLmNhbGwod2luZG93LGZ1bmN0aW9uKCl7dC5yZXF1ZXN0PW51bGwsdC5zdGFydERpZ2VzdCgpfSkpfSxzdGFydERpZ2VzdDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT1EYXRlLm5vdygpLGE9MDt0LmRyb3BGcmFtZXM+MSYmKGE9TWF0aC5mbG9vcih0LmRyb3BGcmFtZXMpLHQuZHJvcEZyYW1lcz10LmRyb3BGcmFtZXMlMSk7Zm9yKHZhciBpPTA7aTx0LmFuaW1hdGlvbnMubGVuZ3RoOyludWxsPT09dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcCYmKHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9MCksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5jdXJyZW50U3RlcCs9MSthLHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA+dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcyYmKHQuYW5pbWF0aW9uc1tpXS5hbmltYXRpb25PYmplY3QuY3VycmVudFN0ZXA9dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcyksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5yZW5kZXIodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdCksdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uUHJvZ3Jlc3MuY2FsbCYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvblByb2dyZXNzLmNhbGwodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldKSx0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0LmN1cnJlbnRTdGVwPT09dC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5udW1TdGVwcz8odC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlJiZ0LmFuaW1hdGlvbnNbaV0uYW5pbWF0aW9uT2JqZWN0Lm9uQW5pbWF0aW9uQ29tcGxldGUuY2FsbCYmdC5hbmltYXRpb25zW2ldLmFuaW1hdGlvbk9iamVjdC5vbkFuaW1hdGlvbkNvbXBsZXRlLmNhbGwodC5hbmltYXRpb25zW2ldLmNoYXJ0SW5zdGFuY2UsdC5hbmltYXRpb25zW2ldKSx0LmFuaW1hdGlvbnNbaV0uY2hhcnRJbnN0YW5jZS5hbmltYXRpbmc9ITEsdC5hbmltYXRpb25zLnNwbGljZShpLDEpKTorK2k7dmFyIG49RGF0ZS5ub3coKSxvPShuLWUpL3QuZnJhbWVEdXJhdGlvbjt0LmRyb3BGcmFtZXMrPW8sdC5hbmltYXRpb25zLmxlbmd0aD4wJiZ0LnJlcXVlc3RBbmltYXRpb25GcmFtZSgpfX19fSx7fV0sMjI6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5jYW52YXNIZWxwZXJzPXt9O2UuZHJhd1BvaW50PWZ1bmN0aW9uKHQsZSxhLGksbil7dmFyIG8scixsLHMsZCx1O2lmKFwib2JqZWN0XCI9PXR5cGVvZiBlJiYobz1lLnRvU3RyaW5nKCksXCJbb2JqZWN0IEhUTUxJbWFnZUVsZW1lbnRdXCI9PT1vfHxcIltvYmplY3QgSFRNTENhbnZhc0VsZW1lbnRdXCI9PT1vKSlyZXR1cm4gdm9pZCB0LmRyYXdJbWFnZShlLGktZS53aWR0aC8yLG4tZS5oZWlnaHQvMik7aWYoIShpc05hTihhKXx8MD49YSkpe3N3aXRjaChlKXtkZWZhdWx0OnQuYmVnaW5QYXRoKCksdC5hcmMoaSxuLGEsMCwyKk1hdGguUEkpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwidHJpYW5nbGVcIjp0LmJlZ2luUGF0aCgpLHI9MyphL01hdGguc3FydCgzKSxkPXIqTWF0aC5zcXJ0KDMpLzIsdC5tb3ZlVG8oaS1yLzIsbitkLzMpLHQubGluZVRvKGkrci8yLG4rZC8zKSx0LmxpbmVUbyhpLG4tMipkLzMpLHQuY2xvc2VQYXRoKCksdC5maWxsKCk7YnJlYWs7Y2FzZVwicmVjdFwiOnU9MS9NYXRoLlNRUlQyKmEsdC5iZWdpblBhdGgoKSx0LmZpbGxSZWN0KGktdSxuLXUsMip1LDIqdSksdC5zdHJva2VSZWN0KGktdSxuLXUsMip1LDIqdSk7YnJlYWs7Y2FzZVwicmVjdFJvdFwiOnU9MS9NYXRoLlNRUlQyKmEsdC5iZWdpblBhdGgoKSx0Lm1vdmVUbyhpLXUsbiksdC5saW5lVG8oaSxuK3UpLHQubGluZVRvKGkrdSxuKSx0LmxpbmVUbyhpLG4tdSksdC5jbG9zZVBhdGgoKSx0LmZpbGwoKTticmVhaztjYXNlXCJjcm9zc1wiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuK2EpLHQubGluZVRvKGksbi1hKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwiY3Jvc3NSb3RcIjp0LmJlZ2luUGF0aCgpLGw9TWF0aC5jb3MoTWF0aC5QSS80KSphLHM9TWF0aC5zaW4oTWF0aC5QSS80KSphLHQubW92ZVRvKGktbCxuLXMpLHQubGluZVRvKGkrbCxuK3MpLHQubW92ZVRvKGktbCxuK3MpLHQubGluZVRvKGkrbCxuLXMpLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwic3RhclwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaSxuK2EpLHQubGluZVRvKGksbi1hKSx0Lm1vdmVUbyhpLWEsbiksdC5saW5lVG8oaSthLG4pLGw9TWF0aC5jb3MoTWF0aC5QSS80KSphLHM9TWF0aC5zaW4oTWF0aC5QSS80KSphLHQubW92ZVRvKGktbCxuLXMpLHQubGluZVRvKGkrbCxuK3MpLHQubW92ZVRvKGktbCxuK3MpLHQubGluZVRvKGkrbCxuLXMpLHQuY2xvc2VQYXRoKCk7YnJlYWs7Y2FzZVwibGluZVwiOnQuYmVnaW5QYXRoKCksdC5tb3ZlVG8oaS1hLG4pLHQubGluZVRvKGkrYSxuKSx0LmNsb3NlUGF0aCgpO2JyZWFrO2Nhc2VcImRhc2hcIjp0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGksbiksdC5saW5lVG8oaSthLG4pLHQuY2xvc2VQYXRoKCl9dC5zdHJva2UoKX19fX0se31dLDIzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXt2YXIgYT1yLmdldFN0eWxlKHQsZSksaT1hJiZhLm1hdGNoKC8oXFxkKylweC8pO3JldHVybiBpP051bWJlcihpWzFdKTp2b2lkIDB9ZnVuY3Rpb24gYSh0LGEpe3ZhciBpPXQuc3R5bGUsbj10LmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSxvPXQuZ2V0QXR0cmlidXRlKFwid2lkdGhcIik7aWYodC5fY2hhcnRqcz17aW5pdGlhbDp7aGVpZ2h0Om4sd2lkdGg6byxzdHlsZTp7ZGlzcGxheTppLmRpc3BsYXksaGVpZ2h0OmkuaGVpZ2h0LHdpZHRoOmkud2lkdGh9fX0saS5kaXNwbGF5PWkuZGlzcGxheXx8XCJibG9ja1wiLG51bGw9PT1vfHxcIlwiPT09byl7dmFyIHI9ZSh0LFwid2lkdGhcIik7dm9pZCAwIT09ciYmKHQud2lkdGg9cil9aWYobnVsbD09PW58fFwiXCI9PT1uKWlmKFwiXCI9PT10LnN0eWxlLmhlaWdodCl0LmhlaWdodD10LndpZHRoLyhhLm9wdGlvbnMuYXNwZWN0UmF0aW98fDIpO2Vsc2V7dmFyIGw9ZSh0LFwiaGVpZ2h0XCIpO3ZvaWQgMCE9PXImJih0LmhlaWdodD1sKX1yZXR1cm4gdH1mdW5jdGlvbiBpKHQpe2lmKHQuX2NoYXJ0anMpe3ZhciBlPXQuX2NoYXJ0anMuaW5pdGlhbDtbXCJoZWlnaHRcIixcIndpZHRoXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGk9ZVthXTt2b2lkIDA9PT1pfHxudWxsPT09aT90LnJlbW92ZUF0dHJpYnV0ZShhKTp0LnNldEF0dHJpYnV0ZShhLGkpfSksci5lYWNoKGUuc3R5bGV8fHt9LGZ1bmN0aW9uKGUsYSl7dC5zdHlsZVthXT1lfSksdC53aWR0aD10LndpZHRoLGRlbGV0ZSB0Ll9jaGFydGpzfX1mdW5jdGlvbiBuKHQsZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQ/dD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0KTp0Lmxlbmd0aCYmKHQ9dFswXSksdCYmdC5jYW52YXMmJih0PXQuY2FudmFzKSx0IGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpe3ZhciBpPXQuZ2V0Q29udGV4dCYmdC5nZXRDb250ZXh0KFwiMmRcIik7aWYoaSBpbnN0YW5jZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRClyZXR1cm4gYSh0LGUpLGl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gbyhlKXtlPWV8fHt9O3ZhciBhPWUuZGF0YT1lLmRhdGF8fHt9O3JldHVybiBhLmRhdGFzZXRzPWEuZGF0YXNldHN8fFtdLGEubGFiZWxzPWEubGFiZWxzfHxbXSxlLm9wdGlvbnM9ci5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbCx0LmRlZmF1bHRzW2UudHlwZV0sZS5vcHRpb25zfHx7fSksZX12YXIgcj10LmhlbHBlcnM7dC50eXBlcz17fSx0Lmluc3RhbmNlcz17fSx0LmNvbnRyb2xsZXJzPXt9LHQuQ29udHJvbGxlcj1mdW5jdGlvbihlLGEsaSl7dmFyIGw9dGhpczthPW8oYSk7dmFyIHM9bihlLGEpLGQ9cyYmcy5jYW52YXMsdT1kJiZkLmhlaWdodCxjPWQmJmQud2lkdGg7cmV0dXJuIGkuY3R4PXMsaS5jYW52YXM9ZCxpLmNvbmZpZz1hLGkud2lkdGg9YyxpLmhlaWdodD11LGkuYXNwZWN0UmF0aW89dT9jL3U6bnVsbCxsLmlkPXIudWlkKCksbC5jaGFydD1pLGwuY29uZmlnPWEsbC5vcHRpb25zPWEub3B0aW9ucyxsLl9idWZmZXJlZFJlbmRlcj0hMSx0Lmluc3RhbmNlc1tsLmlkXT1sLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLFwiZGF0YVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gbC5jb25maWcuZGF0YX19KSxzJiZkPyhyLnJldGluYVNjYWxlKGkpLGwub3B0aW9ucy5yZXNwb25zaXZlJiYoci5hZGRSZXNpemVMaXN0ZW5lcihkLnBhcmVudE5vZGUsZnVuY3Rpb24oKXtsLnJlc2l6ZSgpfSksbC5yZXNpemUoITApKSxsLmluaXRpYWxpemUoKSxsKTooY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgY2hhcnQ6IGNhbid0IGFjcXVpcmUgY29udGV4dCBmcm9tIHRoZSBnaXZlbiBpdGVtXCIpLGwpfSxyLmV4dGVuZCh0LkNvbnRyb2xsZXIucHJvdG90eXBlLHtpbml0aWFsaXplOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZUluaXRcIixbZV0pLGUuYmluZEV2ZW50cygpLGUuZW5zdXJlU2NhbGVzSGF2ZUlEcygpLGUuYnVpbGRPclVwZGF0ZUNvbnRyb2xsZXJzKCksZS5idWlsZFNjYWxlcygpLGUudXBkYXRlTGF5b3V0KCksZS5yZXNldEVsZW1lbnRzKCksZS5pbml0VG9vbFRpcCgpLGUudXBkYXRlKCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVySW5pdFwiLFtlXSksZX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5jbGVhcih0aGlzLmNoYXJ0KSx0aGlzfSxzdG9wOmZ1bmN0aW9uKCl7cmV0dXJuIHQuYW5pbWF0aW9uU2VydmljZS5jYW5jZWxBbmltYXRpb24odGhpcyksdGhpc30scmVzaXplOmZ1bmN0aW9uKGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LG49YS5vcHRpb25zLG89aS5jYW52YXMsbD1uLm1haW50YWluQXNwZWN0UmF0aW8mJmkuYXNwZWN0UmF0aW98fG51bGwscz1NYXRoLmZsb29yKHIuZ2V0TWF4aW11bVdpZHRoKG8pKSxkPU1hdGguZmxvb3IobD9zL2w6ci5nZXRNYXhpbXVtSGVpZ2h0KG8pKTtpZihpLndpZHRoIT09c3x8aS5oZWlnaHQhPT1kKXtvLndpZHRoPWkud2lkdGg9cyxvLmhlaWdodD1pLmhlaWdodD1kLG8uc3R5bGUud2lkdGg9cytcInB4XCIsby5zdHlsZS5oZWlnaHQ9ZCtcInB4XCIsci5yZXRpbmFTY2FsZShpKTt2YXIgdT17d2lkdGg6cyxoZWlnaHQ6ZH07dC5wbHVnaW5zLm5vdGlmeShcInJlc2l6ZVwiLFthLHVdKSxhLm9wdGlvbnMub25SZXNpemUmJmEub3B0aW9ucy5vblJlc2l6ZShhLHUpLGV8fChhLnN0b3AoKSxhLnVwZGF0ZShhLm9wdGlvbnMucmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uKSl9fSxlbnN1cmVTY2FsZXNIYXZlSURzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLGU9dC5zY2FsZXN8fHt9LGE9dC5zY2FsZTtyLmVhY2goZS54QXhlcyxmdW5jdGlvbih0LGUpe3QuaWQ9dC5pZHx8XCJ4LWF4aXMtXCIrZX0pLHIuZWFjaChlLnlBeGVzLGZ1bmN0aW9uKHQsZSl7dC5pZD10LmlkfHxcInktYXhpcy1cIitlfSksYSYmKGEuaWQ9YS5pZHx8XCJzY2FsZVwiKX0sYnVpbGRTY2FsZXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLGE9ZS5vcHRpb25zLGk9ZS5zY2FsZXM9e30sbj1bXTthLnNjYWxlcyYmKG49bi5jb25jYXQoKGEuc2NhbGVzLnhBeGVzfHxbXSkubWFwKGZ1bmN0aW9uKHQpe3JldHVybntvcHRpb25zOnQsZHR5cGU6XCJjYXRlZ29yeVwifX0pLChhLnNjYWxlcy55QXhlc3x8W10pLm1hcChmdW5jdGlvbih0KXtyZXR1cm57b3B0aW9uczp0LGR0eXBlOlwibGluZWFyXCJ9fSkpKSxhLnNjYWxlJiZuLnB1c2goe29wdGlvbnM6YS5zY2FsZSxkdHlwZTpcInJhZGlhbExpbmVhclwiLGlzRGVmYXVsdDohMH0pLHIuZWFjaChuLGZ1bmN0aW9uKGEpe3ZhciBuPWEub3B0aW9ucyxvPXIuZ2V0VmFsdWVPckRlZmF1bHQobi50eXBlLGEuZHR5cGUpLGw9dC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVDb25zdHJ1Y3RvcihvKTtpZihsKXt2YXIgcz1uZXcgbCh7aWQ6bi5pZCxvcHRpb25zOm4sY3R4OmUuY2hhcnQuY3R4LGNoYXJ0OmV9KTtpW3MuaWRdPXMsYS5pc0RlZmF1bHQmJihlLnNjYWxlPXMpfX0pLHQuc2NhbGVTZXJ2aWNlLmFkZFNjYWxlc1RvTGF5b3V0KHRoaXMpfSx1cGRhdGVMYXlvdXQ6ZnVuY3Rpb24oKXt0LmxheW91dFNlcnZpY2UudXBkYXRlKHRoaXMsdGhpcy5jaGFydC53aWR0aCx0aGlzLmNoYXJ0LmhlaWdodCl9LGJ1aWxkT3JVcGRhdGVDb250cm9sbGVyczpmdW5jdGlvbigpe3ZhciBlPXRoaXMsYT1bXSxpPVtdO2lmKHIuZWFjaChlLmRhdGEuZGF0YXNldHMsZnVuY3Rpb24obixvKXt2YXIgcj1lLmdldERhdGFzZXRNZXRhKG8pO3IudHlwZXx8KHIudHlwZT1uLnR5cGV8fGUuY29uZmlnLnR5cGUpLGEucHVzaChyLnR5cGUpLHIuY29udHJvbGxlcj9yLmNvbnRyb2xsZXIudXBkYXRlSW5kZXgobyk6KHIuY29udHJvbGxlcj1uZXcgdC5jb250cm9sbGVyc1tyLnR5cGVdKGUsbyksaS5wdXNoKHIuY29udHJvbGxlcikpfSxlKSxhLmxlbmd0aD4xKWZvcih2YXIgbj0xO248YS5sZW5ndGg7bisrKWlmKGFbbl0hPT1hW24tMV0pe2UuaXNDb21ibz0hMDticmVha31yZXR1cm4gaX0scmVzZXRFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7ci5lYWNoKHQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihlLGEpe3QuZ2V0RGF0YXNldE1ldGEoYSkuY29udHJvbGxlci5yZXNldCgpfSx0KX0scmVzZXQ6ZnVuY3Rpb24oKXt0aGlzLnJlc2V0RWxlbWVudHMoKSx0aGlzLnRvb2x0aXAuaW5pdGlhbGl6ZSgpfSx1cGRhdGU6ZnVuY3Rpb24oZSxhKXt2YXIgaT10aGlzO3QucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVVcGRhdGVcIixbaV0pLGkudG9vbHRpcC5fZGF0YT1pLmRhdGE7dmFyIG49aS5idWlsZE9yVXBkYXRlQ29udHJvbGxlcnMoKTtyLmVhY2goaS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKHQsZSl7aS5nZXREYXRhc2V0TWV0YShlKS5jb250cm9sbGVyLmJ1aWxkT3JVcGRhdGVFbGVtZW50cygpfSxpKSx0LmxheW91dFNlcnZpY2UudXBkYXRlKGksaS5jaGFydC53aWR0aCxpLmNoYXJ0LmhlaWdodCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyU2NhbGVVcGRhdGVcIixbaV0pLHIuZWFjaChuLGZ1bmN0aW9uKHQpe3QucmVzZXQoKX0pLGkudXBkYXRlRGF0YXNldHMoKSx0LnBsdWdpbnMubm90aWZ5KFwiYWZ0ZXJVcGRhdGVcIixbaV0pLGkuX2J1ZmZlcmVkUmVuZGVyP2kuX2J1ZmZlcmVkUmVxdWVzdD17bGF6eTphLGR1cmF0aW9uOmV9OmkucmVuZGVyKGUsYSl9LHVwZGF0ZURhdGFzZXRzOmZ1bmN0aW9uKCl7dmFyIGUsYSxpPXRoaXM7aWYodC5wbHVnaW5zLm5vdGlmeShcImJlZm9yZURhdGFzZXRzVXBkYXRlXCIsW2ldKSl7Zm9yKGU9MCxhPWkuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YT5lOysrZSlpLmdldERhdGFzZXRNZXRhKGUpLmNvbnRyb2xsZXIudXBkYXRlKCk7dC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRGF0YXNldHNVcGRhdGVcIixbaV0pfX0scmVuZGVyOmZ1bmN0aW9uKGUsYSl7dmFyIGk9dGhpczt0LnBsdWdpbnMubm90aWZ5KFwiYmVmb3JlUmVuZGVyXCIsW2ldKTt2YXIgbj1pLm9wdGlvbnMuYW5pbWF0aW9uO2lmKG4mJihcInVuZGVmaW5lZFwiIT10eXBlb2YgZSYmMCE9PWV8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlJiYwIT09bi5kdXJhdGlvbikpe3ZhciBvPW5ldyB0LkFuaW1hdGlvbjtvLm51bVN0ZXBzPShlfHxuLmR1cmF0aW9uKS8xNi42NixvLmVhc2luZz1uLmVhc2luZyxvLnJlbmRlcj1mdW5jdGlvbih0LGUpe3ZhciBhPXIuZWFzaW5nRWZmZWN0c1tlLmVhc2luZ10saT1lLmN1cnJlbnRTdGVwL2UubnVtU3RlcHMsbj1hKGkpO3QuZHJhdyhuLGksZS5jdXJyZW50U3RlcCl9LG8ub25BbmltYXRpb25Qcm9ncmVzcz1uLm9uUHJvZ3Jlc3Msby5vbkFuaW1hdGlvbkNvbXBsZXRlPW4ub25Db21wbGV0ZSx0LmFuaW1hdGlvblNlcnZpY2UuYWRkQW5pbWF0aW9uKGksbyxlLGEpfWVsc2UgaS5kcmF3KCksbiYmbi5vbkNvbXBsZXRlJiZuLm9uQ29tcGxldGUuY2FsbCYmbi5vbkNvbXBsZXRlLmNhbGwoaSk7cmV0dXJuIGl9LGRyYXc6ZnVuY3Rpb24oZSl7dmFyIGE9dGhpcyxpPWV8fDE7YS5jbGVhcigpLHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEcmF3XCIsW2EsaV0pLHIuZWFjaChhLmJveGVzLGZ1bmN0aW9uKHQpe3QuZHJhdyhhLmNoYXJ0QXJlYSl9LGEpLGEuc2NhbGUmJmEuc2NhbGUuZHJhdygpLHQucGx1Z2lucy5ub3RpZnkoXCJiZWZvcmVEYXRhc2V0c0RyYXdcIixbYSxpXSksci5lYWNoKGEuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbih0LGkpe2EuaXNEYXRhc2V0VmlzaWJsZShpKSYmYS5nZXREYXRhc2V0TWV0YShpKS5jb250cm9sbGVyLmRyYXcoZSl9LGEsITApLHQucGx1Z2lucy5ub3RpZnkoXCJhZnRlckRhdGFzZXRzRHJhd1wiLFthLGldKSxhLnRvb2x0aXAudHJhbnNpdGlvbihpKS5kcmF3KCksdC5wbHVnaW5zLm5vdGlmeShcImFmdGVyRHJhd1wiLFthLGldKX0sZ2V0RWxlbWVudEF0RXZlbnQ6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXMuc2luZ2xlKHRoaXMsZSl9LGdldEVsZW1lbnRzQXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5sYWJlbCh0aGlzLGUse2ludGVyc2VjdDohMH0pfSxnZXRFbGVtZW50c0F0WEF4aXM6ZnVuY3Rpb24oZSl7cmV0dXJuIHQuSW50ZXJhY3Rpb24ubW9kZXNbXCJ4LWF4aXNcIl0odGhpcyxlLHtpbnRlcnNlY3Q6ITB9KX0sZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZTpmdW5jdGlvbihlLGEsaSl7dmFyIG49dC5JbnRlcmFjdGlvbi5tb2Rlc1thXTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuP24odGhpcyxlLGkpOltdfSxnZXREYXRhc2V0QXRFdmVudDpmdW5jdGlvbihlKXtyZXR1cm4gdC5JbnRlcmFjdGlvbi5tb2Rlcy5kYXRhc2V0KHRoaXMsZSl9LGdldERhdGFzZXRNZXRhOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmRhdGEuZGF0YXNldHNbdF07YS5fbWV0YXx8KGEuX21ldGE9e30pO1xudmFyIGk9YS5fbWV0YVtlLmlkXTtyZXR1cm4gaXx8KGk9YS5fbWV0YVtlLmlkXT17dHlwZTpudWxsLGRhdGE6W10sZGF0YXNldDpudWxsLGNvbnRyb2xsZXI6bnVsbCxoaWRkZW46bnVsbCx4QXhpc0lEOm51bGwseUF4aXNJRDpudWxsfSksaX0sZ2V0VmlzaWJsZURhdGFzZXRDb3VudDpmdW5jdGlvbigpe2Zvcih2YXIgdD0wLGU9MCxhPXRoaXMuZGF0YS5kYXRhc2V0cy5sZW5ndGg7YT5lOysrZSl0aGlzLmlzRGF0YXNldFZpc2libGUoZSkmJnQrKztyZXR1cm4gdH0saXNEYXRhc2V0VmlzaWJsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmdldERhdGFzZXRNZXRhKHQpO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgZS5oaWRkZW4/IWUuaGlkZGVuOiF0aGlzLmRhdGEuZGF0YXNldHNbdF0uaGlkZGVufSxnZW5lcmF0ZUxlZ2VuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMubGVnZW5kQ2FsbGJhY2sodGhpcyl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt2YXIgZSxhLG4sbz10aGlzLGw9by5jaGFydC5jYW52YXM7Zm9yKG8uc3RvcCgpLGE9MCxuPW8uZGF0YS5kYXRhc2V0cy5sZW5ndGg7bj5hOysrYSllPW8uZ2V0RGF0YXNldE1ldGEoYSksZS5jb250cm9sbGVyJiYoZS5jb250cm9sbGVyLmRlc3Ryb3koKSxlLmNvbnRyb2xsZXI9bnVsbCk7bCYmKHIudW5iaW5kRXZlbnRzKG8sby5ldmVudHMpLHIucmVtb3ZlUmVzaXplTGlzdGVuZXIobC5wYXJlbnROb2RlKSxyLmNsZWFyKG8uY2hhcnQpLGkobCksby5jaGFydC5jYW52YXM9bnVsbCxvLmNoYXJ0LmN0eD1udWxsKSx0LnBsdWdpbnMubm90aWZ5KFwiZGVzdHJveVwiLFtvXSksZGVsZXRlIHQuaW5zdGFuY2VzW28uaWRdfSx0b0Jhc2U2NEltYWdlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hhcnQuY2FudmFzLnRvRGF0YVVSTC5hcHBseSh0aGlzLmNoYXJ0LmNhbnZhcyxhcmd1bWVudHMpfSxpbml0VG9vbFRpcDpmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS50b29sdGlwPW5ldyB0LlRvb2x0aXAoe19jaGFydDplLmNoYXJ0LF9jaGFydEluc3RhbmNlOmUsX2RhdGE6ZS5kYXRhLF9vcHRpb25zOmUub3B0aW9ucy50b29sdGlwc30sZSksZS50b29sdGlwLmluaXRpYWxpemUoKX0sYmluZEV2ZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXM7ci5iaW5kRXZlbnRzKHQsdC5vcHRpb25zLmV2ZW50cyxmdW5jdGlvbihlKXt0LmV2ZW50SGFuZGxlcihlKX0pfSx1cGRhdGVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQsZSxhKXt2YXIgaSxuLG8scj1hP1wic2V0SG92ZXJTdHlsZVwiOlwicmVtb3ZlSG92ZXJTdHlsZVwiO2ZvcihuPTAsbz10Lmxlbmd0aDtvPm47KytuKWk9dFtuXSxpJiZ0aGlzLmdldERhdGFzZXRNZXRhKGkuX2RhdGFzZXRJbmRleCkuY29udHJvbGxlcltyXShpKX0sZXZlbnRIYW5kbGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmxlZ2VuZCxpPWUudG9vbHRpcCxuPWUub3B0aW9ucy5ob3ZlcjtlLl9idWZmZXJlZFJlbmRlcj0hMCxlLl9idWZmZXJlZFJlcXVlc3Q9bnVsbDt2YXIgbz1lLmhhbmRsZUV2ZW50KHQpO298PWEmJmEuaGFuZGxlRXZlbnQodCksb3w9aSYmaS5oYW5kbGVFdmVudCh0KTt2YXIgcj1lLl9idWZmZXJlZFJlcXVlc3Q7cmV0dXJuIHI/ZS5yZW5kZXIoci5kdXJhdGlvbixyLmxhenkpOm8mJiFlLmFuaW1hdGluZyYmKGUuc3RvcCgpLGUucmVuZGVyKG4uYW5pbWF0aW9uRHVyYXRpb24sITApKSxlLl9idWZmZXJlZFJlbmRlcj0hMSxlLl9idWZmZXJlZFJlcXVlc3Q9bnVsbCxlfSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5vcHRpb25zfHx7fSxpPWEuaG92ZXIsbj0hMTtyZXR1cm4gZS5sYXN0QWN0aXZlPWUubGFzdEFjdGl2ZXx8W10sXCJtb3VzZW91dFwiPT09dC50eXBlP2UuYWN0aXZlPVtdOmUuYWN0aXZlPWUuZ2V0RWxlbWVudHNBdEV2ZW50Rm9yTW9kZSh0LGkubW9kZSxpKSxpLm9uSG92ZXImJmkub25Ib3Zlci5jYWxsKGUsZS5hY3RpdmUpLChcIm1vdXNldXBcIj09PXQudHlwZXx8XCJjbGlja1wiPT09dC50eXBlKSYmYS5vbkNsaWNrJiZhLm9uQ2xpY2suY2FsbChlLHQsZS5hY3RpdmUpLGUubGFzdEFjdGl2ZS5sZW5ndGgmJmUudXBkYXRlSG92ZXJTdHlsZShlLmxhc3RBY3RpdmUsaS5tb2RlLCExKSxlLmFjdGl2ZS5sZW5ndGgmJmkubW9kZSYmZS51cGRhdGVIb3ZlclN0eWxlKGUuYWN0aXZlLGkubW9kZSwhMCksbj0hci5hcnJheUVxdWFscyhlLmFjdGl2ZSxlLmxhc3RBY3RpdmUpLGUubGFzdEFjdGl2ZT1lLmFjdGl2ZSxufX0pfX0se31dLDI0OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gdC5fY2hhcnRqcz92b2lkIHQuX2NoYXJ0anMubGlzdGVuZXJzLnB1c2goZSk6KE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX2NoYXJ0anNcIix7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITEsdmFsdWU6e2xpc3RlbmVyczpbZV19fSksdm9pZCBuLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIGE9XCJvbkRhdGFcIitlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Uuc2xpY2UoMSksbj10W2VdO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiExLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxvPW4uYXBwbHkodGhpcyxlKTtyZXR1cm4gaS5lYWNoKHQuX2NoYXJ0anMubGlzdGVuZXJzLGZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIHRbYV0mJnRbYV0uYXBwbHkodCxlKX0pLG99fSl9KSl9ZnVuY3Rpb24gYSh0LGUpe3ZhciBhPXQuX2NoYXJ0anM7aWYoYSl7dmFyIGk9YS5saXN0ZW5lcnMsbz1pLmluZGV4T2YoZSk7LTEhPT1vJiZpLnNwbGljZShvLDEpLGkubGVuZ3RoPjB8fChuLmZvckVhY2goZnVuY3Rpb24oZSl7ZGVsZXRlIHRbZV19KSxkZWxldGUgdC5fY2hhcnRqcyl9fXZhciBpPXQuaGVscGVycyxuPVtcInB1c2hcIixcInBvcFwiLFwic2hpZnRcIixcInNwbGljZVwiLFwidW5zaGlmdFwiXTt0LkRhdGFzZXRDb250cm9sbGVyPWZ1bmN0aW9uKHQsZSl7dGhpcy5pbml0aWFsaXplKHQsZSl9LGkuZXh0ZW5kKHQuRGF0YXNldENvbnRyb2xsZXIucHJvdG90eXBlLHtkYXRhc2V0RWxlbWVudFR5cGU6bnVsbCxkYXRhRWxlbWVudFR5cGU6bnVsbCxpbml0aWFsaXplOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpczthLmNoYXJ0PXQsYS5pbmRleD1lLGEubGlua1NjYWxlcygpLGEuYWRkRWxlbWVudHMoKX0sdXBkYXRlSW5kZXg6ZnVuY3Rpb24odCl7dGhpcy5pbmRleD10fSxsaW5rU2NhbGVzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuZ2V0TWV0YSgpLGE9dC5nZXREYXRhc2V0KCk7bnVsbD09PWUueEF4aXNJRCYmKGUueEF4aXNJRD1hLnhBeGlzSUR8fHQuY2hhcnQub3B0aW9ucy5zY2FsZXMueEF4ZXNbMF0uaWQpLG51bGw9PT1lLnlBeGlzSUQmJihlLnlBeGlzSUQ9YS55QXhpc0lEfHx0LmNoYXJ0Lm9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLmlkKX0sZ2V0RGF0YXNldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdGhpcy5pbmRleF19LGdldE1ldGE6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5nZXREYXRhc2V0TWV0YSh0aGlzLmluZGV4KX0sZ2V0U2NhbGVGb3JJZDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jaGFydC5zY2FsZXNbdF19LHJlc2V0OmZ1bmN0aW9uKCl7dGhpcy51cGRhdGUoITApfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fZGF0YSYmYSh0aGlzLl9kYXRhLHRoaXMpfSxjcmVhdGVNZXRhRGF0YXNldDpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmRhdGFzZXRFbGVtZW50VHlwZTtyZXR1cm4gZSYmbmV3IGUoe19jaGFydDp0LmNoYXJ0LmNoYXJ0LF9kYXRhc2V0SW5kZXg6dC5pbmRleH0pfSxjcmVhdGVNZXRhRGF0YTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLGE9ZS5kYXRhRWxlbWVudFR5cGU7cmV0dXJuIGEmJm5ldyBhKHtfY2hhcnQ6ZS5jaGFydC5jaGFydCxfZGF0YXNldEluZGV4OmUuaW5kZXgsX2luZGV4OnR9KX0sYWRkRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdCxlLGE9dGhpcyxpPWEuZ2V0TWV0YSgpLG49YS5nZXREYXRhc2V0KCkuZGF0YXx8W10sbz1pLmRhdGE7Zm9yKHQ9MCxlPW4ubGVuZ3RoO2U+dDsrK3Qpb1t0XT1vW3RdfHxhLmNyZWF0ZU1ldGFEYXRhKHQpO2kuZGF0YXNldD1pLmRhdGFzZXR8fGEuY3JlYXRlTWV0YURhdGFzZXQoKX0sYWRkRWxlbWVudEFuZFJlc2V0OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuY3JlYXRlTWV0YURhdGEodCk7dGhpcy5nZXRNZXRhKCkuZGF0YS5zcGxpY2UodCwwLGUpLHRoaXMudXBkYXRlRWxlbWVudChlLHQsITApfSxidWlsZE9yVXBkYXRlRWxlbWVudHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5nZXREYXRhc2V0KCksbj1pLmRhdGF8fChpLmRhdGE9W10pO3QuX2RhdGEhPT1uJiYodC5fZGF0YSYmYSh0Ll9kYXRhLHQpLGUobix0KSx0Ll9kYXRhPW4pLHQucmVzeW5jRWxlbWVudHMoKX0sdXBkYXRlOmkubm9vcCxkcmF3OmZ1bmN0aW9uKHQpe3ZhciBlLGEsaT10fHwxLG49dGhpcy5nZXRNZXRhKCkuZGF0YTtmb3IoZT0wLGE9bi5sZW5ndGg7YT5lOysrZSluW2VdLnRyYW5zaXRpb24oaSkuZHJhdygpfSxyZW1vdmVIb3ZlclN0eWxlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW3QuX2RhdGFzZXRJbmRleF0sbj10Ll9pbmRleCxvPXQuY3VzdG9tfHx7fSxyPWkuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0LGw9dC5fbW9kZWw7bC5iYWNrZ3JvdW5kQ29sb3I9by5iYWNrZ3JvdW5kQ29sb3I/by5iYWNrZ3JvdW5kQ29sb3I6cihhLmJhY2tncm91bmRDb2xvcixuLGUuYmFja2dyb3VuZENvbG9yKSxsLmJvcmRlckNvbG9yPW8uYm9yZGVyQ29sb3I/by5ib3JkZXJDb2xvcjpyKGEuYm9yZGVyQ29sb3IsbixlLmJvcmRlckNvbG9yKSxsLmJvcmRlcldpZHRoPW8uYm9yZGVyV2lkdGg/by5ib3JkZXJXaWR0aDpyKGEuYm9yZGVyV2lkdGgsbixlLmJvcmRlcldpZHRoKX0sc2V0SG92ZXJTdHlsZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbdC5fZGF0YXNldEluZGV4XSxhPXQuX2luZGV4LG49dC5jdXN0b218fHt9LG89aS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQscj1pLmdldEhvdmVyQ29sb3IsbD10Ll9tb2RlbDtsLmJhY2tncm91bmRDb2xvcj1uLmhvdmVyQmFja2dyb3VuZENvbG9yP24uaG92ZXJCYWNrZ3JvdW5kQ29sb3I6byhlLmhvdmVyQmFja2dyb3VuZENvbG9yLGEscihsLmJhY2tncm91bmRDb2xvcikpLGwuYm9yZGVyQ29sb3I9bi5ob3ZlckJvcmRlckNvbG9yP24uaG92ZXJCb3JkZXJDb2xvcjpvKGUuaG92ZXJCb3JkZXJDb2xvcixhLHIobC5ib3JkZXJDb2xvcikpLGwuYm9yZGVyV2lkdGg9bi5ob3ZlckJvcmRlcldpZHRoP24uaG92ZXJCb3JkZXJXaWR0aDpvKGUuaG92ZXJCb3JkZXJXaWR0aCxhLGwuYm9yZGVyV2lkdGgpfSxyZXN5bmNFbGVtZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LmdldE1ldGEoKSxhPXQuZ2V0RGF0YXNldCgpLmRhdGEsaT1lLmRhdGEubGVuZ3RoLG49YS5sZW5ndGg7aT5uP2UuZGF0YS5zcGxpY2UobixpLW4pOm4+aSYmdC5pbnNlcnRFbGVtZW50cyhpLG4taSl9LGluc2VydEVsZW1lbnRzOmZ1bmN0aW9uKHQsZSl7Zm9yKHZhciBhPTA7ZT5hOysrYSl0aGlzLmFkZEVsZW1lbnRBbmRSZXNldCh0K2EpfSxvbkRhdGFQdXNoOmZ1bmN0aW9uKCl7dGhpcy5pbnNlcnRFbGVtZW50cyh0aGlzLmdldERhdGFzZXQoKS5kYXRhLmxlbmd0aC0xLGFyZ3VtZW50cy5sZW5ndGgpfSxvbkRhdGFQb3A6ZnVuY3Rpb24oKXt0aGlzLmdldE1ldGEoKS5kYXRhLnBvcCgpfSxvbkRhdGFTaGlmdDpmdW5jdGlvbigpe3RoaXMuZ2V0TWV0YSgpLmRhdGEuc2hpZnQoKX0sb25EYXRhU3BsaWNlOmZ1bmN0aW9uKHQsZSl7dGhpcy5nZXRNZXRhKCkuZGF0YS5zcGxpY2UodCxlKSx0aGlzLmluc2VydEVsZW1lbnRzKHQsYXJndW1lbnRzLmxlbmd0aC0yKX0sb25EYXRhVW5zaGlmdDpmdW5jdGlvbigpe3RoaXMuaW5zZXJ0RWxlbWVudHMoMCxhcmd1bWVudHMubGVuZ3RoKX19KSx0LkRhdGFzZXRDb250cm9sbGVyLmV4dGVuZD1pLmluaGVyaXRzfX0se31dLDI1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmVsZW1lbnRzPXt9LHQuRWxlbWVudD1mdW5jdGlvbih0KXtlLmV4dGVuZCh0aGlzLHQpLHRoaXMuaW5pdGlhbGl6ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZXh0ZW5kKHQuRWxlbWVudC5wcm90b3R5cGUse2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLmhpZGRlbj0hMX0scGl2b3Q6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3JldHVybiB0Ll92aWV3fHwodC5fdmlldz1lLmNsb25lKHQuX21vZGVsKSksdC5fc3RhcnQ9ZS5jbG9uZSh0Ll92aWV3KSx0fSx0cmFuc2l0aW9uOmZ1bmN0aW9uKHQpe3ZhciBhPXRoaXM7cmV0dXJuIGEuX3ZpZXd8fChhLl92aWV3PWUuY2xvbmUoYS5fbW9kZWwpKSwxPT09dD8oYS5fdmlldz1hLl9tb2RlbCxhLl9zdGFydD1udWxsLGEpOihhLl9zdGFydHx8YS5waXZvdCgpLGUuZWFjaChhLl9tb2RlbCxmdW5jdGlvbihpLG4pe2lmKFwiX1wiPT09blswXSk7ZWxzZSBpZihhLl92aWV3Lmhhc093blByb3BlcnR5KG4pKWlmKGk9PT1hLl92aWV3W25dKTtlbHNlIGlmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXRyeXt2YXIgbz1lLmNvbG9yKGEuX21vZGVsW25dKS5taXgoZS5jb2xvcihhLl9zdGFydFtuXSksdCk7YS5fdmlld1tuXT1vLnJnYlN0cmluZygpfWNhdGNoKHIpe2EuX3ZpZXdbbl09aX1lbHNlIGlmKFwibnVtYmVyXCI9PXR5cGVvZiBpKXt2YXIgbD12b2lkIDAhPT1hLl9zdGFydFtuXSYmaXNOYU4oYS5fc3RhcnRbbl0pPT09ITE/YS5fc3RhcnRbbl06MDthLl92aWV3W25dPShhLl9tb2RlbFtuXS1sKSp0K2x9ZWxzZSBhLl92aWV3W25dPWk7ZWxzZVwibnVtYmVyXCIhPXR5cGVvZiBpfHxpc05hTihhLl92aWV3W25dKT9hLl92aWV3W25dPWk6YS5fdmlld1tuXT1pKnR9LGEpLGEpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm57eDp0aGlzLl9tb2RlbC54LHk6dGhpcy5fbW9kZWwueX19LGhhc1ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGUuaXNOdW1iZXIodGhpcy5fbW9kZWwueCkmJmUuaXNOdW1iZXIodGhpcy5fbW9kZWwueSl9fSksdC5FbGVtZW50LmV4dGVuZD1lLmluaGVyaXRzfX0se31dLDI2OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGk9dCgzKTtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUsYSl7dmFyIGk7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/KGk9cGFyc2VJbnQodCwxMCksLTEhPT10LmluZGV4T2YoXCIlXCIpJiYoaT1pLzEwMCplLnBhcmVudE5vZGVbYV0pKTppPXQsaX1mdW5jdGlvbiBhKHQpe3JldHVybiB2b2lkIDAhPT10JiZudWxsIT09dCYmXCJub25lXCIhPT10fWZ1bmN0aW9uIG4odCxpLG4pe3ZhciBvPWRvY3VtZW50LmRlZmF1bHRWaWV3LHI9dC5wYXJlbnROb2RlLGw9by5nZXRDb21wdXRlZFN0eWxlKHQpW2ldLHM9by5nZXRDb21wdXRlZFN0eWxlKHIpW2ldLGQ9YShsKSx1PWEocyksYz1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7cmV0dXJuIGR8fHU/TWF0aC5taW4oZD9lKGwsdCxuKTpjLHU/ZShzLHIsbik6Yyk6XCJub25lXCJ9dmFyIG89dC5oZWxwZXJzPXt9O28uZWFjaD1mdW5jdGlvbih0LGUsYSxpKXt2YXIgbixyO2lmKG8uaXNBcnJheSh0KSlpZihyPXQubGVuZ3RoLGkpZm9yKG49ci0xO24+PTA7bi0tKWUuY2FsbChhLHRbbl0sbik7ZWxzZSBmb3Iobj0wO3I+bjtuKyspZS5jYWxsKGEsdFtuXSxuKTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiB0KXt2YXIgbD1PYmplY3Qua2V5cyh0KTtmb3Iocj1sLmxlbmd0aCxuPTA7cj5uO24rKyllLmNhbGwoYSx0W2xbbl1dLGxbbl0pfX0sby5jbG9uZT1mdW5jdGlvbih0KXt2YXIgZT17fTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCxhKXtvLmlzQXJyYXkodCk/ZVthXT10LnNsaWNlKDApOlwib2JqZWN0XCI9PXR5cGVvZiB0JiZudWxsIT09dD9lW2FdPW8uY2xvbmUodCk6ZVthXT10fSksZX0sby5leHRlbmQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWZ1bmN0aW9uKGUsYSl7dFthXT1lfSxhPTEsaT1hcmd1bWVudHMubGVuZ3RoO2k+YTthKyspby5lYWNoKGFyZ3VtZW50c1thXSxlKTtyZXR1cm4gdH0sby5jb25maWdNZXJnZT1mdW5jdGlvbihlKXt2YXIgYT1vLmNsb25lKGUpO3JldHVybiBvLmVhY2goQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDEpLGZ1bmN0aW9uKGUpe28uZWFjaChlLGZ1bmN0aW9uKGUsaSl7dmFyIG49YS5oYXNPd25Qcm9wZXJ0eShpKSxyPW4/YVtpXTp7fTtcInNjYWxlc1wiPT09aT9hW2ldPW8uc2NhbGVNZXJnZShyLGUpOlwic2NhbGVcIj09PWk/YVtpXT1vLmNvbmZpZ01lcmdlKHIsdC5zY2FsZVNlcnZpY2UuZ2V0U2NhbGVEZWZhdWx0cyhlLnR5cGUpLGUpOiFufHxcIm9iamVjdFwiIT10eXBlb2Ygcnx8by5pc0FycmF5KHIpfHxudWxsPT09cnx8XCJvYmplY3RcIiE9dHlwZW9mIGV8fG8uaXNBcnJheShlKT9hW2ldPWU6YVtpXT1vLmNvbmZpZ01lcmdlKHIsZSl9KX0pLGF9LG8uc2NhbGVNZXJnZT1mdW5jdGlvbihlLGEpe3ZhciBpPW8uY2xvbmUoZSk7cmV0dXJuIG8uZWFjaChhLGZ1bmN0aW9uKGUsYSl7XCJ4QXhlc1wiPT09YXx8XCJ5QXhlc1wiPT09YT9pLmhhc093blByb3BlcnR5KGEpP28uZWFjaChlLGZ1bmN0aW9uKGUsbil7dmFyIHI9by5nZXRWYWx1ZU9yRGVmYXVsdChlLnR5cGUsXCJ4QXhlc1wiPT09YT9cImNhdGVnb3J5XCI6XCJsaW5lYXJcIiksbD10LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKHIpO24+PWlbYV0ubGVuZ3RofHwhaVthXVtuXS50eXBlP2lbYV0ucHVzaChvLmNvbmZpZ01lcmdlKGwsZSkpOmUudHlwZSYmZS50eXBlIT09aVthXVtuXS50eXBlP2lbYV1bbl09by5jb25maWdNZXJnZShpW2FdW25dLGwsZSk6aVthXVtuXT1vLmNvbmZpZ01lcmdlKGlbYV1bbl0sZSl9KTooaVthXT1bXSxvLmVhY2goZSxmdW5jdGlvbihlKXt2YXIgbj1vLmdldFZhbHVlT3JEZWZhdWx0KGUudHlwZSxcInhBeGVzXCI9PT1hP1wiY2F0ZWdvcnlcIjpcImxpbmVhclwiKTtpW2FdLnB1c2goby5jb25maWdNZXJnZSh0LnNjYWxlU2VydmljZS5nZXRTY2FsZURlZmF1bHRzKG4pLGUpKX0pKTppLmhhc093blByb3BlcnR5KGEpJiZcIm9iamVjdFwiPT10eXBlb2YgaVthXSYmbnVsbCE9PWlbYV0mJlwib2JqZWN0XCI9PXR5cGVvZiBlP2lbYV09by5jb25maWdNZXJnZShpW2FdLGUpOmlbYV09ZX0pLGl9LG8uZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0PWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gdm9pZCAwPT09dHx8bnVsbD09PXQ/YTpvLmlzQXJyYXkodCk/ZTx0Lmxlbmd0aD90W2VdOmE6dH0sby5nZXRWYWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0LGUpe3JldHVybiB2b2lkIDA9PT10P2U6dH0sby5pbmRleE9mPUFycmF5LnByb3RvdHlwZS5pbmRleE9mP2Z1bmN0aW9uKHQsZSl7cmV0dXJuIHQuaW5kZXhPZihlKX06ZnVuY3Rpb24odCxlKXtmb3IodmFyIGE9MCxpPXQubGVuZ3RoO2k+YTsrK2EpaWYodFthXT09PWUpcmV0dXJuIGE7cmV0dXJuLTF9LG8ud2hlcmU9ZnVuY3Rpb24odCxlKXtpZihvLmlzQXJyYXkodCkmJkFycmF5LnByb3RvdHlwZS5maWx0ZXIpcmV0dXJuIHQuZmlsdGVyKGUpO3ZhciBhPVtdO3JldHVybiBvLmVhY2godCxmdW5jdGlvbih0KXtlKHQpJiZhLnB1c2godCl9KSxhfSxvLmZpbmRJbmRleD1BcnJheS5wcm90b3R5cGUuZmluZEluZGV4P2Z1bmN0aW9uKHQsZSxhKXtyZXR1cm4gdC5maW5kSW5kZXgoZSxhKX06ZnVuY3Rpb24odCxlLGEpe2E9dm9pZCAwPT09YT90OmE7Zm9yKHZhciBpPTAsbj10Lmxlbmd0aDtuPmk7KytpKWlmKGUuY2FsbChhLHRbaV0saSx0KSlyZXR1cm4gaTtyZXR1cm4tMX0sby5maW5kTmV4dFdoZXJlPWZ1bmN0aW9uKHQsZSxhKXsodm9pZCAwPT09YXx8bnVsbD09PWEpJiYoYT0tMSk7Zm9yKHZhciBpPWErMTtpPHQubGVuZ3RoO2krKyl7dmFyIG49dFtpXTtpZihlKG4pKXJldHVybiBufX0sby5maW5kUHJldmlvdXNXaGVyZT1mdW5jdGlvbih0LGUsYSl7KHZvaWQgMD09PWF8fG51bGw9PT1hKSYmKGE9dC5sZW5ndGgpO2Zvcih2YXIgaT1hLTE7aT49MDtpLS0pe3ZhciBuPXRbaV07aWYoZShuKSlyZXR1cm4gbn19LG8uaW5oZXJpdHM9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxhPXQmJnQuaGFzT3duUHJvcGVydHkoXCJjb25zdHJ1Y3RvclwiKT90LmNvbnN0cnVjdG9yOmZ1bmN0aW9uKCl7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxpPWZ1bmN0aW9uKCl7dGhpcy5jb25zdHJ1Y3Rvcj1hfTtyZXR1cm4gaS5wcm90b3R5cGU9ZS5wcm90b3R5cGUsYS5wcm90b3R5cGU9bmV3IGksYS5leHRlbmQ9by5pbmhlcml0cyx0JiZvLmV4dGVuZChhLnByb3RvdHlwZSx0KSxhLl9fc3VwZXJfXz1lLnByb3RvdHlwZSxhfSxvLm5vb3A9ZnVuY3Rpb24oKXt9LG8udWlkPWZ1bmN0aW9uKCl7dmFyIHQ9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gdCsrfX0oKSxvLmlzTnVtYmVyPWZ1bmN0aW9uKHQpe3JldHVybiFpc05hTihwYXJzZUZsb2F0KHQpKSYmaXNGaW5pdGUodCl9LG8uYWxtb3N0RXF1YWxzPWZ1bmN0aW9uKHQsZSxhKXtyZXR1cm4gTWF0aC5hYnModC1lKTxhfSxvLm1heD1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gaXNOYU4oZSk/dDpNYXRoLm1heCh0LGUpfSxOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpfSxvLm1pbj1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gaXNOYU4oZSk/dDpNYXRoLm1pbih0LGUpfSxOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpfSxvLnNpZ249TWF0aC5zaWduP2Z1bmN0aW9uKHQpe3JldHVybiBNYXRoLnNpZ24odCl9OmZ1bmN0aW9uKHQpe3JldHVybiB0PSt0LDA9PT10fHxpc05hTih0KT90OnQ+MD8xOi0xfSxvLmxvZzEwPU1hdGgubG9nMTA/ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGgubG9nMTAodCl9OmZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmxvZyh0KS9NYXRoLkxOMTB9LG8udG9SYWRpYW5zPWZ1bmN0aW9uKHQpe3JldHVybiB0KihNYXRoLlBJLzE4MCl9LG8udG9EZWdyZWVzPWZ1bmN0aW9uKHQpe3JldHVybiB0KigxODAvTWF0aC5QSSl9LG8uZ2V0QW5nbGVGcm9tUG9pbnQ9ZnVuY3Rpb24odCxlKXt2YXIgYT1lLngtdC54LGk9ZS55LXQueSxuPU1hdGguc3FydChhKmEraSppKSxvPU1hdGguYXRhbjIoaSxhKTtyZXR1cm4gbzwtLjUqTWF0aC5QSSYmKG8rPTIqTWF0aC5QSSkse2FuZ2xlOm8sZGlzdGFuY2U6bn19LG8uZGlzdGFuY2VCZXR3ZWVuUG9pbnRzPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhlLngtdC54LDIpK01hdGgucG93KGUueS10LnksMikpfSxvLmFsaWFzUGl4ZWw9ZnVuY3Rpb24odCl7cmV0dXJuIHQlMj09PTA/MDouNX0sby5zcGxpbmVDdXJ2ZT1mdW5jdGlvbih0LGUsYSxpKXt2YXIgbj10LnNraXA/ZTp0LG89ZSxyPWEuc2tpcD9lOmEsbD1NYXRoLnNxcnQoTWF0aC5wb3coby54LW4ueCwyKStNYXRoLnBvdyhvLnktbi55LDIpKSxzPU1hdGguc3FydChNYXRoLnBvdyhyLngtby54LDIpK01hdGgucG93KHIueS1vLnksMikpLGQ9bC8obCtzKSx1PXMvKGwrcyk7ZD1pc05hTihkKT8wOmQsdT1pc05hTih1KT8wOnU7dmFyIGM9aSpkLGg9aSp1O3JldHVybntwcmV2aW91czp7eDpvLngtYyooci54LW4ueCkseTpvLnktYyooci55LW4ueSl9LG5leHQ6e3g6by54K2gqKHIueC1uLngpLHk6by55K2gqKHIueS1uLnkpfX19LG8uRVBTSUxPTj1OdW1iZXIuRVBTSUxPTnx8MWUtMTQsby5zcGxpbmVDdXJ2ZU1vbm90b25lPWZ1bmN0aW9uKHQpe3ZhciBlLGEsaSxuLHI9KHR8fFtdKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJue21vZGVsOnQuX21vZGVsLGRlbHRhSzowLG1LOjB9fSksbD1yLmxlbmd0aDtmb3IoZT0wO2w+ZTsrK2UpaT1yW2VdLGkubW9kZWwuc2tpcHx8KGE9ZT4wP3JbZS0xXTpudWxsLG49bC0xPmU/cltlKzFdOm51bGwsbiYmIW4ubW9kZWwuc2tpcCYmKGkuZGVsdGFLPShuLm1vZGVsLnktaS5tb2RlbC55KS8obi5tb2RlbC54LWkubW9kZWwueCkpLCFhfHxhLm1vZGVsLnNraXA/aS5tSz1pLmRlbHRhSzohbnx8bi5tb2RlbC5za2lwP2kubUs9YS5kZWx0YUs6dGhpcy5zaWduKGEuZGVsdGFLKSE9PXRoaXMuc2lnbihpLmRlbHRhSyk/aS5tSz0wOmkubUs9KGEuZGVsdGFLK2kuZGVsdGFLKS8yKTt2YXIgcyxkLHUsYztmb3IoZT0wO2wtMT5lOysrZSlpPXJbZV0sbj1yW2UrMV0saS5tb2RlbC5za2lwfHxuLm1vZGVsLnNraXB8fChvLmFsbW9zdEVxdWFscyhpLmRlbHRhSywwLHRoaXMuRVBTSUxPTik/aS5tSz1uLm1LPTA6KHM9aS5tSy9pLmRlbHRhSyxkPW4ubUsvaS5kZWx0YUssYz1NYXRoLnBvdyhzLDIpK01hdGgucG93KGQsMiksOT49Y3x8KHU9My9NYXRoLnNxcnQoYyksaS5tSz1zKnUqaS5kZWx0YUssbi5tSz1kKnUqaS5kZWx0YUspKSk7dmFyIGg7Zm9yKGU9MDtsPmU7KytlKWk9cltlXSxpLm1vZGVsLnNraXB8fChhPWU+MD9yW2UtMV06bnVsbCxuPWwtMT5lP3JbZSsxXTpudWxsLGEmJiFhLm1vZGVsLnNraXAmJihoPShpLm1vZGVsLngtYS5tb2RlbC54KS8zLGkubW9kZWwuY29udHJvbFBvaW50UHJldmlvdXNYPWkubW9kZWwueC1oLGkubW9kZWwuY29udHJvbFBvaW50UHJldmlvdXNZPWkubW9kZWwueS1oKmkubUspLG4mJiFuLm1vZGVsLnNraXAmJihoPShuLm1vZGVsLngtaS5tb2RlbC54KS8zLGkubW9kZWwuY29udHJvbFBvaW50TmV4dFg9aS5tb2RlbC54K2gsaS5tb2RlbC5jb250cm9sUG9pbnROZXh0WT1pLm1vZGVsLnkraCppLm1LKSl9LG8ubmV4dEl0ZW09ZnVuY3Rpb24odCxlLGEpe3JldHVybiBhP2U+PXQubGVuZ3RoLTE/dFswXTp0W2UrMV06ZT49dC5sZW5ndGgtMT90W3QubGVuZ3RoLTFdOnRbZSsxXX0sby5wcmV2aW91c0l0ZW09ZnVuY3Rpb24odCxlLGEpe3JldHVybiBhPzA+PWU/dFt0Lmxlbmd0aC0xXTp0W2UtMV06MD49ZT90WzBdOnRbZS0xXX0sby5uaWNlTnVtPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaT1NYXRoLmZsb29yKG8ubG9nMTAodCkpLG49dC9NYXRoLnBvdygxMCxpKTtyZXR1cm4gYT1lPzEuNT5uPzE6Mz5uPzI6Nz5uPzU6MTA6MT49bj8xOjI+PW4/Mjo1Pj1uPzU6MTAsYSpNYXRoLnBvdygxMCxpKX07dmFyIHI9by5lYXNpbmdFZmZlY3RzPXtsaW5lYXI6ZnVuY3Rpb24odCl7cmV0dXJuIHR9LGVhc2VJblF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdH0sZWFzZU91dFF1YWQ6ZnVuY3Rpb24odCl7cmV0dXJuLTEqdCoodC0yKX0sZWFzZUluT3V0UXVhZDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0Oi0wLjUqKC0tdCoodC0yKS0xKX0sZWFzZUluQ3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdCp0fSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KnQrMSl9LGVhc2VJbk91dEN1YmljOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8uNSp0KnQqdDouNSooKHQtPTIpKnQqdCsyKX0sZWFzZUluUXVhcnQ6ZnVuY3Rpb24odCl7cmV0dXJuIHQqdCp0KnR9LGVhc2VPdXRRdWFydDpmdW5jdGlvbih0KXtyZXR1cm4tMSooKHQ9dC8xLTEpKnQqdCp0LTEpfSxlYXNlSW5PdXRRdWFydDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQqdDotMC41KigodC09MikqdCp0KnQtMil9LGVhc2VJblF1aW50OmZ1bmN0aW9uKHQpe3JldHVybiAxKih0Lz0xKSp0KnQqdCp0fSxlYXNlT3V0UXVpbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIDEqKCh0PXQvMS0xKSp0KnQqdCp0KzEpfSxlYXNlSW5PdXRRdWludDpmdW5jdGlvbih0KXtyZXR1cm4odC89LjUpPDE/LjUqdCp0KnQqdCp0Oi41KigodC09MikqdCp0KnQqdCsyKX0sZWFzZUluU2luZTpmdW5jdGlvbih0KXtyZXR1cm4tMSpNYXRoLmNvcyh0LzEqKE1hdGguUEkvMikpKzF9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKHQpe3JldHVybiAxKk1hdGguc2luKHQvMSooTWF0aC5QSS8yKSl9LGVhc2VJbk91dFNpbmU6ZnVuY3Rpb24odCl7cmV0dXJuLTAuNSooTWF0aC5jb3MoTWF0aC5QSSp0LzEpLTEpfSxlYXNlSW5FeHBvOmZ1bmN0aW9uKHQpe3JldHVybiAwPT09dD8xOjEqTWF0aC5wb3coMiwxMCoodC8xLTEpKX0sZWFzZU91dEV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDE9PT10PzE6MSooLU1hdGgucG93KDIsLTEwKnQvMSkrMSl9LGVhc2VJbk91dEV4cG86ZnVuY3Rpb24odCl7cmV0dXJuIDA9PT10PzA6MT09PXQ/MToodC89LjUpPDE/LjUqTWF0aC5wb3coMiwxMCoodC0xKSk6LjUqKC1NYXRoLnBvdygyLC0xMCotLXQpKzIpfSxlYXNlSW5DaXJjOmZ1bmN0aW9uKHQpe3JldHVybiB0Pj0xP3Q6LTEqKE1hdGguc3FydCgxLSh0Lz0xKSp0KS0xKX0sZWFzZU91dENpcmM6ZnVuY3Rpb24odCl7cmV0dXJuIDEqTWF0aC5zcXJ0KDEtKHQ9dC8xLTEpKnQpfSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKHQpe3JldHVybih0Lz0uNSk8MT8tMC41KihNYXRoLnNxcnQoMS10KnQpLTEpOi41KihNYXRoLnNxcnQoMS0odC09MikqdCkrMSl9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24odCl7dmFyIGU9MS43MDE1OCxhPTAsaT0xO3JldHVybiAwPT09dD8wOjE9PT0odC89MSk/MTooYXx8KGE9LjMpLGk8TWF0aC5hYnMoMSk/KGk9MSxlPWEvNCk6ZT1hLygyKk1hdGguUEkpKk1hdGguYXNpbigxL2kpLC0oaSpNYXRoLnBvdygyLDEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSkpfSxlYXNlT3V0RWxhc3RpYzpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4LGE9MCxpPTE7cmV0dXJuIDA9PT10PzA6MT09PSh0Lz0xKT8xOihhfHwoYT0uMyksaTxNYXRoLmFicygxKT8oaT0xLGU9YS80KTplPWEvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEvaSksaSpNYXRoLnBvdygyLC0xMCp0KSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKzEpfSxlYXNlSW5PdXRFbGFzdGljOmZ1bmN0aW9uKHQpe3ZhciBlPTEuNzAxNTgsYT0wLGk9MTtyZXR1cm4gMD09PXQ/MDoyPT09KHQvPS41KT8xOihhfHwoYT0xKiguMyoxLjUpKSxpPE1hdGguYWJzKDEpPyhpPTEsZT1hLzQpOmU9YS8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMS9pKSwxPnQ/LS41KihpKk1hdGgucG93KDIsMTAqKHQtPTEpKSpNYXRoLnNpbigoMSp0LWUpKigyKk1hdGguUEkpL2EpKTppKk1hdGgucG93KDIsLTEwKih0LT0xKSkqTWF0aC5zaW4oKDEqdC1lKSooMipNYXRoLlBJKS9hKSouNSsxKX0sZWFzZUluQmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybiAxKih0Lz0xKSp0KigoZSsxKSp0LWUpfSxlYXNlT3V0QmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybiAxKigodD10LzEtMSkqdCooKGUrMSkqdCtlKSsxKX0sZWFzZUluT3V0QmFjazpmdW5jdGlvbih0KXt2YXIgZT0xLjcwMTU4O3JldHVybih0Lz0uNSk8MT8uNSoodCp0KigoKGUqPTEuNTI1KSsxKSp0LWUpKTouNSooKHQtPTIpKnQqKCgoZSo9MS41MjUpKzEpKnQrZSkrMil9LGVhc2VJbkJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4gMS1yLmVhc2VPdXRCb3VuY2UoMS10KX0sZWFzZU91dEJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4odC89MSk8MS8yLjc1PzEqKDcuNTYyNSp0KnQpOjIvMi43NT50PzEqKDcuNTYyNSoodC09MS41LzIuNzUpKnQrLjc1KToyLjUvMi43NT50PzEqKDcuNTYyNSoodC09Mi4yNS8yLjc1KSp0Ky45Mzc1KToxKig3LjU2MjUqKHQtPTIuNjI1LzIuNzUpKnQrLjk4NDM3NSl9LGVhc2VJbk91dEJvdW5jZTpmdW5jdGlvbih0KXtyZXR1cm4uNT50Py41KnIuZWFzZUluQm91bmNlKDIqdCk6LjUqci5lYXNlT3V0Qm91bmNlKDIqdC0xKSsuNX19O28ucmVxdWVzdEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxmdW5jdGlvbih0KXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQodCwxZTMvNjApfX0oKSxvLmNhbmNlbEFuaW1GcmFtZT1mdW5jdGlvbigpe3JldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubXNDYW5jZWxBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7cmV0dXJuIHdpbmRvdy5jbGVhclRpbWVvdXQodCwxZTMvNjApfX0oKSxvLmdldFJlbGF0aXZlUG9zaXRpb249ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG49dC5vcmlnaW5hbEV2ZW50fHx0LHI9dC5jdXJyZW50VGFyZ2V0fHx0LnNyY0VsZW1lbnQsbD1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLHM9bi50b3VjaGVzO3MmJnMubGVuZ3RoPjA/KGE9c1swXS5jbGllbnRYLGk9c1swXS5jbGllbnRZKTooYT1uLmNsaWVudFgsaT1uLmNsaWVudFkpO3ZhciBkPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1sZWZ0XCIpKSx1PXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy10b3BcIikpLGM9cGFyc2VGbG9hdChvLmdldFN0eWxlKHIsXCJwYWRkaW5nLXJpZ2h0XCIpKSxoPXBhcnNlRmxvYXQoby5nZXRTdHlsZShyLFwicGFkZGluZy1ib3R0b21cIikpLGY9bC5yaWdodC1sLmxlZnQtZC1jLGc9bC5ib3R0b20tbC50b3AtdS1oO3JldHVybiBhPU1hdGgucm91bmQoKGEtbC5sZWZ0LWQpL2Yqci53aWR0aC9lLmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvKSxpPU1hdGgucm91bmQoKGktbC50b3AtdSkvZypyLmhlaWdodC9lLmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvKSx7eDphLHk6aX19LG8uYWRkRXZlbnQ9ZnVuY3Rpb24odCxlLGEpe3QuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoZSxhKTp0LmF0dGFjaEV2ZW50P3QuYXR0YWNoRXZlbnQoXCJvblwiK2UsYSk6dFtcIm9uXCIrZV09YX0sby5yZW1vdmVFdmVudD1mdW5jdGlvbih0LGUsYSl7dC5yZW1vdmVFdmVudExpc3RlbmVyP3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLGEsITEpOnQuZGV0YWNoRXZlbnQ/dC5kZXRhY2hFdmVudChcIm9uXCIrZSxhKTp0W1wib25cIitlXT1vLm5vb3B9LG8uYmluZEV2ZW50cz1mdW5jdGlvbih0LGUsYSl7dmFyIGk9dC5ldmVudHM9dC5ldmVudHN8fHt9O28uZWFjaChlLGZ1bmN0aW9uKGUpe2lbZV09ZnVuY3Rpb24oKXthLmFwcGx5KHQsYXJndW1lbnRzKX0sby5hZGRFdmVudCh0LmNoYXJ0LmNhbnZhcyxlLGlbZV0pfSl9LG8udW5iaW5kRXZlbnRzPWZ1bmN0aW9uKHQsZSl7dmFyIGE9dC5jaGFydC5jYW52YXM7by5lYWNoKGUsZnVuY3Rpb24odCxlKXtvLnJlbW92ZUV2ZW50KGEsZSx0KX0pfSxvLmdldENvbnN0cmFpbnRXaWR0aD1mdW5jdGlvbih0KXtyZXR1cm4gbih0LFwibWF4LXdpZHRoXCIsXCJjbGllbnRXaWR0aFwiKX0sby5nZXRDb25zdHJhaW50SGVpZ2h0PWZ1bmN0aW9uKHQpe3JldHVybiBuKHQsXCJtYXgtaGVpZ2h0XCIsXCJjbGllbnRIZWlnaHRcIil9LG8uZ2V0TWF4aW11bVdpZHRoPWZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZSxhPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctbGVmdFwiKSwxMCksaT1wYXJzZUludChvLmdldFN0eWxlKGUsXCJwYWRkaW5nLXJpZ2h0XCIpLDEwKSxuPWUuY2xpZW50V2lkdGgtYS1pLHI9by5nZXRDb25zdHJhaW50V2lkdGgodCk7cmV0dXJuIGlzTmFOKHIpP246TWF0aC5taW4obixyKX0sby5nZXRNYXhpbXVtSGVpZ2h0PWZ1bmN0aW9uKHQpe3ZhciBlPXQucGFyZW50Tm9kZSxhPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctdG9wXCIpLDEwKSxpPXBhcnNlSW50KG8uZ2V0U3R5bGUoZSxcInBhZGRpbmctYm90dG9tXCIpLDEwKSxuPWUuY2xpZW50SGVpZ2h0LWEtaSxyPW8uZ2V0Q29uc3RyYWludEhlaWdodCh0KTtyZXR1cm4gaXNOYU4ocik/bjpNYXRoLm1pbihuLHIpfSxvLmdldFN0eWxlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuY3VycmVudFN0eWxlP3QuY3VycmVudFN0eWxlW2VdOmRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCxudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKGUpfSxvLnJldGluYVNjYWxlPWZ1bmN0aW9uKHQpe3ZhciBlPXQuY3VycmVudERldmljZVBpeGVsUmF0aW89d2luZG93LmRldmljZVBpeGVsUmF0aW98fDE7aWYoMSE9PWUpe3ZhciBhPXQuY2FudmFzLGk9dC5oZWlnaHQsbj10LndpZHRoO2EuaGVpZ2h0PWkqZSxhLndpZHRoPW4qZSx0LmN0eC5zY2FsZShlLGUpLGEuc3R5bGUuaGVpZ2h0PWkrXCJweFwiLGEuc3R5bGUud2lkdGg9bitcInB4XCJ9fSxvLmNsZWFyPWZ1bmN0aW9uKHQpe3QuY3R4LmNsZWFyUmVjdCgwLDAsdC53aWR0aCx0LmhlaWdodCl9LG8uZm9udFN0cmluZz1mdW5jdGlvbih0LGUsYSl7cmV0dXJuIGUrXCIgXCIrdCtcInB4IFwiK2F9LG8ubG9uZ2VzdFRleHQ9ZnVuY3Rpb24odCxlLGEsaSl7aT1pfHx7fTt2YXIgbj1pLmRhdGE9aS5kYXRhfHx7fSxyPWkuZ2FyYmFnZUNvbGxlY3Q9aS5nYXJiYWdlQ29sbGVjdHx8W107aS5mb250IT09ZSYmKG49aS5kYXRhPXt9LHI9aS5nYXJiYWdlQ29sbGVjdD1bXSxpLmZvbnQ9ZSksdC5mb250PWU7dmFyIGw9MDtvLmVhY2goYSxmdW5jdGlvbihlKXt2b2lkIDAhPT1lJiZudWxsIT09ZSYmby5pc0FycmF5KGUpIT09ITA/bD1vLm1lYXN1cmVUZXh0KHQsbixyLGwsZSk6by5pc0FycmF5KGUpJiZvLmVhY2goZSxmdW5jdGlvbihlKXt2b2lkIDA9PT1lfHxudWxsPT09ZXx8by5pc0FycmF5KGUpfHwobD1vLm1lYXN1cmVUZXh0KHQsbixyLGwsZSkpfSl9KTt2YXIgcz1yLmxlbmd0aC8yO2lmKHM+YS5sZW5ndGgpe2Zvcih2YXIgZD0wO3M+ZDtkKyspZGVsZXRlIG5bcltkXV07ci5zcGxpY2UoMCxzKX1yZXR1cm4gbH0sby5tZWFzdXJlVGV4dD1mdW5jdGlvbih0LGUsYSxpLG4pe3ZhciBvPWVbbl07cmV0dXJuIG98fChvPWVbbl09dC5tZWFzdXJlVGV4dChuKS53aWR0aCxhLnB1c2gobikpLG8+aSYmKGk9byksaX0sby5udW1iZXJPZkxhYmVsTGluZXM9ZnVuY3Rpb24odCl7dmFyIGU9MTtyZXR1cm4gby5lYWNoKHQsZnVuY3Rpb24odCl7by5pc0FycmF5KHQpJiZ0Lmxlbmd0aD5lJiYoZT10Lmxlbmd0aCl9KSxlfSxvLmRyYXdSb3VuZGVkUmVjdGFuZ2xlPWZ1bmN0aW9uKHQsZSxhLGksbixvKXt0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGUrbyxhKSx0LmxpbmVUbyhlK2ktbyxhKSx0LnF1YWRyYXRpY0N1cnZlVG8oZStpLGEsZStpLGErbyksdC5saW5lVG8oZStpLGErbi1vKSx0LnF1YWRyYXRpY0N1cnZlVG8oZStpLGErbixlK2ktbyxhK24pLHQubGluZVRvKGUrbyxhK24pLHQucXVhZHJhdGljQ3VydmVUbyhlLGErbixlLGErbi1vKSx0LmxpbmVUbyhlLGErbyksdC5xdWFkcmF0aWNDdXJ2ZVRvKGUsYSxlK28sYSksdC5jbG9zZVBhdGgoKX0sby5jb2xvcj1mdW5jdGlvbihlKXtyZXR1cm4gaT9pKGUgaW5zdGFuY2VvZiBDYW52YXNHcmFkaWVudD90LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Q29sb3I6ZSk6KGNvbnNvbGUuZXJyb3IoXCJDb2xvci5qcyBub3QgZm91bmQhXCIpLGUpfSxvLmFkZFJlc2l6ZUxpc3RlbmVyPWZ1bmN0aW9uKHQsZSl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTthLmNsYXNzTmFtZT1cImNoYXJ0anMtaGlkZGVuLWlmcmFtZVwiLGEuc3R5bGUuY3NzVGV4dD1cImRpc3BsYXk6YmxvY2s7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjowO21hcmdpbjowO3RvcDowO2xlZnQ6MDtib3R0b206MDtyaWdodDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Oi0xO1wiLGEudGFiSW5kZXg9LTE7dmFyIGk9dC5fY2hhcnRqcz17cmVzaXplcjphLHRpY2tpbmc6ITF9LG49ZnVuY3Rpb24oKXtpLnRpY2tpbmd8fChpLnRpY2tpbmc9ITAsby5yZXF1ZXN0QW5pbUZyYW1lLmNhbGwod2luZG93LGZ1bmN0aW9uKCl7cmV0dXJuIGkucmVzaXplcj8oaS50aWNraW5nPSExLGUoKSk6dm9pZCAwfSkpfTtvLmFkZEV2ZW50KGEsXCJsb2FkXCIsZnVuY3Rpb24oKXtvLmFkZEV2ZW50KGEuY29udGVudFdpbmRvd3x8YSxcInJlc2l6ZVwiLG4pLG4oKX0pLHQuaW5zZXJ0QmVmb3JlKGEsdC5maXJzdENoaWxkKX0sby5yZW1vdmVSZXNpemVMaXN0ZW5lcj1mdW5jdGlvbih0KXtpZih0JiZ0Ll9jaGFydGpzKXt2YXIgZT10Ll9jaGFydGpzLnJlc2l6ZXI7ZSYmKGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKSx0Ll9jaGFydGpzLnJlc2l6ZXI9bnVsbCksZGVsZXRlIHQuX2NoYXJ0anN9fSxvLmlzQXJyYXk9QXJyYXkuaXNBcnJheT9mdW5jdGlvbih0KXtyZXR1cm4gQXJyYXkuaXNBcnJheSh0KX06ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfSxvLmFycmF5RXF1YWxzPWZ1bmN0aW9uKHQsZSl7dmFyIGEsaSxuLHI7aWYoIXR8fCFlfHx0Lmxlbmd0aCE9PWUubGVuZ3RoKXJldHVybiExO2ZvcihhPTAsaT10Lmxlbmd0aDtpPmE7KythKWlmKG49dFthXSxyPWVbYV0sbiBpbnN0YW5jZW9mIEFycmF5JiZyIGluc3RhbmNlb2YgQXJyYXkpe2lmKCFvLmFycmF5RXF1YWxzKG4scikpcmV0dXJuITF9ZWxzZSBpZihuIT09cilyZXR1cm4hMTtyZXR1cm4hMH0sby5jYWxsQ2FsbGJhY2s9ZnVuY3Rpb24odCxlLGEpe3QmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHQuY2FsbCYmdC5hcHBseShhLGUpfSxvLmdldEhvdmVyQ29sb3I9ZnVuY3Rpb24odCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBDYW52YXNQYXR0ZXJuP3Q6by5jb2xvcih0KS5zYXR1cmF0ZSguNSkuZGFya2VuKC4xKS5yZ2JTdHJpbmcoKX19fSx7MzozfV0sMjc6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhLGksbixvLHIsbD10LmRhdGEuZGF0YXNldHM7Zm9yKGk9MCxvPWwubGVuZ3RoO28+aTsrK2kpaWYodC5pc0RhdGFzZXRWaXNpYmxlKGkpKWZvcihhPXQuZ2V0RGF0YXNldE1ldGEoaSksbj0wLHI9YS5kYXRhLmxlbmd0aDtyPm47KytuKXt2YXIgcz1hLmRhdGFbbl07cy5fdmlldy5za2lwfHxlKHMpfX1mdW5jdGlvbiBhKHQsYSl7dmFyIGk9W107cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluUmFuZ2UoYS54LGEueSkmJmkucHVzaCh0KX0pLGl9ZnVuY3Rpb24gaSh0LGEsaSxuKXt2YXIgcj1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksbD1bXTtyZXR1cm4gbnx8KG49by5kaXN0YW5jZUJldHdlZW5Qb2ludHMpLGUodCxmdW5jdGlvbih0KXtpZighaXx8dC5pblJhbmdlKGEueCxhLnkpKXt2YXIgZT10LmdldENlbnRlclBvaW50KCksbz1uKGEsZSk7cj5vPyhsPVt0XSxyPW8pOm89PT1yJiZsLnB1c2godCl9fSksbH1mdW5jdGlvbiBuKHQsZSxuKXt2YXIgcj1vLmdldFJlbGF0aXZlUG9zaXRpb24oZSx0LmNoYXJ0KSxsPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE1hdGguYWJzKHQueC1lLngpfSxzPW4uaW50ZXJzZWN0P2EodCxyKTppKHQsciwhMSxsKSxkPVtdO3JldHVybiBzLmxlbmd0aD8odC5kYXRhLmRhdGFzZXRzLmZvckVhY2goZnVuY3Rpb24oZSxhKXtpZih0LmlzRGF0YXNldFZpc2libGUoYSkpe3ZhciBpPXQuZ2V0RGF0YXNldE1ldGEoYSksbj1pLmRhdGFbc1swXS5faW5kZXhdO24mJiFuLl92aWV3LnNraXAmJmQucHVzaChuKX19KSxkKTpbXX12YXIgbz10LmhlbHBlcnM7dC5JbnRlcmFjdGlvbj17bW9kZXM6e3NpbmdsZTpmdW5jdGlvbih0LGEpe3ZhciBpPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLG49W107cmV0dXJuIGUodCxmdW5jdGlvbih0KXtyZXR1cm4gdC5pblJhbmdlKGkueCxpLnkpPyhuLnB1c2godCksbik6dm9pZCAwfSksbi5zbGljZSgwLDEpfSxsYWJlbDpuLGluZGV4Om4sZGF0YXNldDpmdW5jdGlvbih0LGUsbil7dmFyIHI9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCksbD1uLmludGVyc2VjdD9hKHQscik6aSh0LHIsITEpO3JldHVybiBsLmxlbmd0aD4wJiYobD10LmdldERhdGFzZXRNZXRhKGxbMF0uX2RhdGFzZXRJbmRleCkuZGF0YSksbH0sXCJ4LWF4aXNcIjpmdW5jdGlvbih0LGUpe3JldHVybiBuKHQsZSwhMCl9LHBvaW50OmZ1bmN0aW9uKHQsZSl7dmFyIGk9by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCk7cmV0dXJuIGEodCxpKX0sbmVhcmVzdDpmdW5jdGlvbih0LGUsYSl7dmFyIG49by5nZXRSZWxhdGl2ZVBvc2l0aW9uKGUsdC5jaGFydCkscj1pKHQsbixhLmludGVyc2VjdCk7cmV0dXJuIHIubGVuZ3RoPjEmJnIuc29ydChmdW5jdGlvbih0LGUpe3ZhciBhPXQuZ2V0QXJlYSgpLGk9ZS5nZXRBcmVhKCksbj1hLWk7cmV0dXJuIDA9PT1uJiYobj10Ll9kYXRhc2V0SW5kZXgtZS5fZGF0YXNldEluZGV4KSxufSksci5zbGljZSgwLDEpfSx4OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj1vLmdldFJlbGF0aXZlUG9zaXRpb24oYSx0LmNoYXJ0KSxyPVtdLGw9ITE7cmV0dXJuIGUodCxmdW5jdGlvbih0KXt0LmluWFJhbmdlKG4ueCkmJnIucHVzaCh0KSx0LmluUmFuZ2Uobi54LG4ueSkmJihsPSEwKX0pLGkuaW50ZXJzZWN0JiYhbCYmKHI9W10pLHJ9LHk6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPW8uZ2V0UmVsYXRpdmVQb3NpdGlvbihhLHQuY2hhcnQpLHI9W10sbD0hMTtyZXR1cm4gZSh0LGZ1bmN0aW9uKHQpe3QuaW5ZUmFuZ2Uobi55KSYmci5wdXNoKHQpLHQuaW5SYW5nZShuLngsbi55KSYmKGw9ITApfSksaS5pbnRlcnNlY3QmJiFsJiYocj1bXSkscn19fX19LHt9XSwyODpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciB0PWZ1bmN0aW9uKGUsYSl7cmV0dXJuIHRoaXMuY29udHJvbGxlcj1uZXcgdC5Db250cm9sbGVyKGUsYSx0aGlzKSx0aGlzLmNvbnRyb2xsZXJ9O3JldHVybiB0LmRlZmF1bHRzPXtnbG9iYWw6e3Jlc3BvbnNpdmU6ITAscmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uOjAsbWFpbnRhaW5Bc3BlY3RSYXRpbzohMCxldmVudHM6W1wibW91c2Vtb3ZlXCIsXCJtb3VzZW91dFwiLFwiY2xpY2tcIixcInRvdWNoc3RhcnRcIixcInRvdWNobW92ZVwiXSxob3Zlcjp7b25Ib3ZlcjpudWxsLG1vZGU6XCJuZWFyZXN0XCIsaW50ZXJzZWN0OiEwLGFuaW1hdGlvbkR1cmF0aW9uOjQwMH0sb25DbGljazpudWxsLGRlZmF1bHRDb2xvcjpcInJnYmEoMCwwLDAsMC4xKVwiLGRlZmF1bHRGb250Q29sb3I6XCIjNjY2XCIsZGVmYXVsdEZvbnRGYW1pbHk6XCInSGVsdmV0aWNhIE5ldWUnLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZlwiLGRlZmF1bHRGb250U2l6ZToxMixkZWZhdWx0Rm9udFN0eWxlOlwibm9ybWFsXCIsc2hvd0xpbmVzOiEwLGVsZW1lbnRzOnt9LGxlZ2VuZENhbGxiYWNrOmZ1bmN0aW9uKHQpe3ZhciBlPVtdO2UucHVzaCgnPHVsIGNsYXNzPVwiJyt0LmlkKyctbGVnZW5kXCI+Jyk7Zm9yKHZhciBhPTA7YTx0LmRhdGEuZGF0YXNldHMubGVuZ3RoO2ErKyllLnB1c2goJzxsaT48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6Jyt0LmRhdGEuZGF0YXNldHNbYV0uYmFja2dyb3VuZENvbG9yKydcIj48L3NwYW4+JyksdC5kYXRhLmRhdGFzZXRzW2FdLmxhYmVsJiZlLnB1c2godC5kYXRhLmRhdGFzZXRzW2FdLmxhYmVsKSxlLnB1c2goXCI8L2xpPlwiKTtyZXR1cm4gZS5wdXNoKFwiPC91bD5cIiksZS5qb2luKFwiXCIpfX19LHQuQ2hhcnQ9dCx0fX0se31dLDI5OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmxheW91dFNlcnZpY2U9e2RlZmF1bHRzOnt9LGFkZEJveDpmdW5jdGlvbih0LGUpe3QuYm94ZXN8fCh0LmJveGVzPVtdKSx0LmJveGVzLnB1c2goZSl9LHJlbW92ZUJveDpmdW5jdGlvbih0LGUpe3QuYm94ZXMmJnQuYm94ZXMuc3BsaWNlKHQuYm94ZXMuaW5kZXhPZihlKSwxKX0sdXBkYXRlOmZ1bmN0aW9uKHQsYSxpKXtmdW5jdGlvbiBuKHQpe3ZhciBlLGE9dC5pc0hvcml6b250YWwoKTthPyhlPXQudXBkYXRlKHQub3B0aW9ucy5mdWxsV2lkdGg/eDpDLE0pLEQtPWUuaGVpZ2h0KTooZT10LnVwZGF0ZSh3LFMpLEMtPWUud2lkdGgpLEkucHVzaCh7aG9yaXpvbnRhbDphLG1pblNpemU6ZSxib3g6dH0pfWZ1bmN0aW9uIG8odCl7dmFyIGE9ZS5maW5kTmV4dFdoZXJlKEksZnVuY3Rpb24oZSl7cmV0dXJuIGUuYm94PT09dH0pO2lmKGEpaWYodC5pc0hvcml6b250YWwoKSl7dmFyIGk9e2xlZnQ6QSxyaWdodDpULHRvcDowLGJvdHRvbTowfTt0LnVwZGF0ZSh0Lm9wdGlvbnMuZnVsbFdpZHRoP3g6Qyx5LzIsaSl9ZWxzZSB0LnVwZGF0ZShhLm1pblNpemUud2lkdGgsRCl9ZnVuY3Rpb24gcih0KXt2YXIgYT1lLmZpbmROZXh0V2hlcmUoSSxmdW5jdGlvbihlKXtyZXR1cm4gZS5ib3g9PT10fSksaT17bGVmdDowLHJpZ2h0OjAsdG9wOlAsYm90dG9tOkZ9O2EmJnQudXBkYXRlKGEubWluU2l6ZS53aWR0aCxELGkpfWZ1bmN0aW9uIGwodCl7dC5pc0hvcml6b250YWwoKT8odC5sZWZ0PXQub3B0aW9ucy5mdWxsV2lkdGg/dTpBLHQucmlnaHQ9dC5vcHRpb25zLmZ1bGxXaWR0aD9hLWM6QStDLHQudG9wPUwsdC5ib3R0b209TCt0LmhlaWdodCxMPXQuYm90dG9tKToodC5sZWZ0PVYsdC5yaWdodD1WK3Qud2lkdGgsdC50b3A9UCx0LmJvdHRvbT1QK0QsVj10LnJpZ2h0KX1pZih0KXt2YXIgcz10Lm9wdGlvbnMubGF5b3V0LGQ9cz9zLnBhZGRpbmc6bnVsbCx1PTAsYz0wLGg9MCxmPTA7aXNOYU4oZCk/KHU9ZC5sZWZ0fHwwLGM9ZC5yaWdodHx8MCxoPWQudG9wfHwwLGY9ZC5ib3R0b218fDApOih1PWQsYz1kLGg9ZCxmPWQpO3ZhciBnPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImxlZnRcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLHA9ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwicmlnaHRcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pLG09ZS53aGVyZSh0LmJveGVzLGZ1bmN0aW9uKHQpe3JldHVyblwidG9wXCI9PT10Lm9wdGlvbnMucG9zaXRpb259KSxiPWUud2hlcmUodC5ib3hlcyxmdW5jdGlvbih0KXtyZXR1cm5cImJvdHRvbVwiPT09dC5vcHRpb25zLnBvc2l0aW9ufSksdj1lLndoZXJlKHQuYm94ZXMsZnVuY3Rpb24odCl7cmV0dXJuXCJjaGFydEFyZWFcIj09PXQub3B0aW9ucy5wb3NpdGlvbn0pO20uc29ydChmdW5jdGlvbih0LGUpe3JldHVybihlLm9wdGlvbnMuZnVsbFdpZHRoPzE6MCktKHQub3B0aW9ucy5mdWxsV2lkdGg/MTowKX0pLGIuc29ydChmdW5jdGlvbih0LGUpe3JldHVybih0Lm9wdGlvbnMuZnVsbFdpZHRoPzE6MCktKGUub3B0aW9ucy5mdWxsV2lkdGg/MTowKX0pO3ZhciB4PWEtdS1jLHk9aS1oLWYsaz14LzIsUz15LzIsdz0oYS1rKS8oZy5sZW5ndGgrcC5sZW5ndGgpLE09KGktUykvKG0ubGVuZ3RoK2IubGVuZ3RoKSxDPXgsRD15LEk9W107ZS5lYWNoKGcuY29uY2F0KHAsbSxiKSxuKTt2YXIgQT11LFQ9YyxQPWgsRj1mO2UuZWFjaChnLmNvbmNhdChwKSxvKSxlLmVhY2goZyxmdW5jdGlvbih0KXtBKz10LndpZHRofSksZS5lYWNoKHAsZnVuY3Rpb24odCl7VCs9dC53aWR0aH0pLGUuZWFjaChtLmNvbmNhdChiKSxvKSxlLmVhY2gobSxmdW5jdGlvbih0KXtQKz10LmhlaWdodH0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe0YrPXQuaGVpZ2h0fSksZS5lYWNoKGcuY29uY2F0KHApLHIpLEE9dSxUPWMsUD1oLEY9ZixlLmVhY2goZyxmdW5jdGlvbih0KXtBKz10LndpZHRofSksZS5lYWNoKHAsZnVuY3Rpb24odCl7VCs9dC53aWR0aH0pLGUuZWFjaChtLGZ1bmN0aW9uKHQpe1ArPXQuaGVpZ2h0fSksZS5lYWNoKGIsZnVuY3Rpb24odCl7Ris9dC5oZWlnaHR9KTt2YXIgXz1pLVAtRixSPWEtQS1UOyhSIT09Q3x8XyE9PUQpJiYoZS5lYWNoKGcsZnVuY3Rpb24odCl7dC5oZWlnaHQ9X30pLGUuZWFjaChwLGZ1bmN0aW9uKHQpe3QuaGVpZ2h0PV99KSxlLmVhY2gobSxmdW5jdGlvbih0KXt0Lm9wdGlvbnMuZnVsbFdpZHRofHwodC53aWR0aD1SKX0pLGUuZWFjaChiLGZ1bmN0aW9uKHQpe3Qub3B0aW9ucy5mdWxsV2lkdGh8fCh0LndpZHRoPVIpfSksRD1fLEM9Uik7dmFyIFY9dSxMPWg7ZS5lYWNoKGcuY29uY2F0KG0pLGwpLFYrPUMsTCs9RCxlLmVhY2gocCxsKSxlLmVhY2goYixsKSx0LmNoYXJ0QXJlYT17bGVmdDpBLHRvcDpQLHJpZ2h0OkErQyxib3R0b206UCtEfSxlLmVhY2godixmdW5jdGlvbihlKXtlLmxlZnQ9dC5jaGFydEFyZWEubGVmdCxlLnRvcD10LmNoYXJ0QXJlYS50b3AsZS5yaWdodD10LmNoYXJ0QXJlYS5yaWdodCxlLmJvdHRvbT10LmNoYXJ0QXJlYS5ib3R0b20sZS51cGRhdGUoQyxEKX0pfX19fX0se31dLDMwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCxlKXtyZXR1cm4gdC51c2VQb2ludFN0eWxlP2UqTWF0aC5TUVJUMjp0LmJveFdpZHRofXZhciBhPXQuaGVscGVycyxpPWEubm9vcDt0LmRlZmF1bHRzLmdsb2JhbC5sZWdlbmQ9e2Rpc3BsYXk6ITAscG9zaXRpb246XCJ0b3BcIixmdWxsV2lkdGg6ITAscmV2ZXJzZTohMSxvbkNsaWNrOmZ1bmN0aW9uKHQsZSl7dmFyIGE9ZS5kYXRhc2V0SW5kZXgsaT10aGlzLmNoYXJ0LG49aS5nZXREYXRhc2V0TWV0YShhKTtuLmhpZGRlbj1udWxsPT09bi5oaWRkZW4/IWkuZGF0YS5kYXRhc2V0c1thXS5oaWRkZW46bnVsbCxpLnVwZGF0ZSgpfSxvbkhvdmVyOm51bGwsbGFiZWxzOntib3hXaWR0aDo0MCxwYWRkaW5nOjEwLGdlbmVyYXRlTGFiZWxzOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YTtyZXR1cm4gYS5pc0FycmF5KGUuZGF0YXNldHMpP2UuZGF0YXNldHMubWFwKGZ1bmN0aW9uKGUsaSl7cmV0dXJue3RleHQ6ZS5sYWJlbCxmaWxsU3R5bGU6YS5pc0FycmF5KGUuYmFja2dyb3VuZENvbG9yKT9lLmJhY2tncm91bmRDb2xvclswXTplLmJhY2tncm91bmRDb2xvcixoaWRkZW46IXQuaXNEYXRhc2V0VmlzaWJsZShpKSxsaW5lQ2FwOmUuYm9yZGVyQ2FwU3R5bGUsbGluZURhc2g6ZS5ib3JkZXJEYXNoLGxpbmVEYXNoT2Zmc2V0OmUuYm9yZGVyRGFzaE9mZnNldCxsaW5lSm9pbjplLmJvcmRlckpvaW5TdHlsZSxsaW5lV2lkdGg6ZS5ib3JkZXJXaWR0aCxzdHJva2VTdHlsZTplLmJvcmRlckNvbG9yLHBvaW50U3R5bGU6ZS5wb2ludFN0eWxlLGRhdGFzZXRJbmRleDppfX0sdGhpcyk6W119fX0sdC5MZWdlbmQ9dC5FbGVtZW50LmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbih0KXthLmV4dGVuZCh0aGlzLHQpLHRoaXMubGVnZW5kSGl0Qm94ZXM9W10sdGhpcy5kb3VnaG51dE1vZGU9ITF9LGJlZm9yZVVwZGF0ZTppLHVwZGF0ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcztyZXR1cm4gaS5iZWZvcmVVcGRhdGUoKSxpLm1heFdpZHRoPXQsaS5tYXhIZWlnaHQ9ZSxpLm1hcmdpbnM9YSxpLmJlZm9yZVNldERpbWVuc2lvbnMoKSxpLnNldERpbWVuc2lvbnMoKSxpLmFmdGVyU2V0RGltZW5zaW9ucygpLGkuYmVmb3JlQnVpbGRMYWJlbHMoKSxpLmJ1aWxkTGFiZWxzKCksaS5hZnRlckJ1aWxkTGFiZWxzKCksaS5iZWZvcmVGaXQoKSxpLmZpdCgpLGkuYWZ0ZXJGaXQoKSxpLmFmdGVyVXBkYXRlKCksaS5taW5TaXplfSxhZnRlclVwZGF0ZTppLGJlZm9yZVNldERpbWVuc2lvbnM6aSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTAsdC5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfX0sYWZ0ZXJTZXREaW1lbnNpb25zOmksYmVmb3JlQnVpbGRMYWJlbHM6aSxidWlsZExhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC5sZWdlbmRJdGVtcz10Lm9wdGlvbnMubGFiZWxzLmdlbmVyYXRlTGFiZWxzLmNhbGwodCx0LmNoYXJ0KSx0Lm9wdGlvbnMucmV2ZXJzZSYmdC5sZWdlbmRJdGVtcy5yZXZlcnNlKCl9LGFmdGVyQnVpbGRMYWJlbHM6aSxiZWZvcmVGaXQ6aSxmaXQ6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLG49aS5vcHRpb25zLG89bi5sYWJlbHMscj1uLmRpc3BsYXksbD1pLmN0eCxzPXQuZGVmYXVsdHMuZ2xvYmFsLGQ9YS5nZXRWYWx1ZU9yRGVmYXVsdCx1PWQoby5mb250U2l6ZSxzLmRlZmF1bHRGb250U2l6ZSksYz1kKG8uZm9udFN0eWxlLHMuZGVmYXVsdEZvbnRTdHlsZSksaD1kKG8uZm9udEZhbWlseSxzLmRlZmF1bHRGb250RmFtaWx5KSxmPWEuZm9udFN0cmluZyh1LGMsaCksZz1pLmxlZ2VuZEhpdEJveGVzPVtdLHA9aS5taW5TaXplLG09aS5pc0hvcml6b250YWwoKTtpZihtPyhwLndpZHRoPWkubWF4V2lkdGgscC5oZWlnaHQ9cj8xMDowKToocC53aWR0aD1yPzEwOjAscC5oZWlnaHQ9aS5tYXhIZWlnaHQpLHIpaWYobC5mb250PWYsbSl7dmFyIGI9aS5saW5lV2lkdGhzPVswXSx2PWkubGVnZW5kSXRlbXMubGVuZ3RoP3Urby5wYWRkaW5nOjA7bC50ZXh0QWxpZ249XCJsZWZ0XCIsbC50ZXh0QmFzZWxpbmU9XCJ0b3BcIixhLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGEpe3ZhciBuPWUobyx1KSxyPW4rdS8yK2wubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aDtiW2IubGVuZ3RoLTFdK3Irby5wYWRkaW5nPj1pLndpZHRoJiYodis9dStvLnBhZGRpbmcsYltiLmxlbmd0aF09aS5sZWZ0KSxnW2FdPXtsZWZ0OjAsdG9wOjAsd2lkdGg6cixoZWlnaHQ6dX0sYltiLmxlbmd0aC0xXSs9citvLnBhZGRpbmd9KSxwLmhlaWdodCs9dn1lbHNle3ZhciB4PW8ucGFkZGluZyx5PWkuY29sdW1uV2lkdGhzPVtdLGs9by5wYWRkaW5nLFM9MCx3PTAsTT11K3g7YS5lYWNoKGkubGVnZW5kSXRlbXMsZnVuY3Rpb24odCxhKXt2YXIgaT1lKG8sdSksbj1pK3UvMitsLm1lYXN1cmVUZXh0KHQudGV4dCkud2lkdGg7dytNPnAuaGVpZ2h0JiYoays9UytvLnBhZGRpbmcseS5wdXNoKFMpLFM9MCx3PTApLFM9TWF0aC5tYXgoUyxuKSx3Kz1NLGdbYV09e2xlZnQ6MCx0b3A6MCx3aWR0aDpuLGhlaWdodDp1fX0pLGsrPVMseS5wdXNoKFMpLHAud2lkdGgrPWt9aS53aWR0aD1wLndpZHRoLGkuaGVpZ2h0PXAuaGVpZ2h0fSxhZnRlckZpdDppLGlzSG9yaXpvbnRhbDpmdW5jdGlvbigpe3JldHVyblwidG9wXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb258fFwiYm90dG9tXCI9PT10aGlzLm9wdGlvbnMucG9zaXRpb259LGRyYXc6ZnVuY3Rpb24oKXt2YXIgaT10aGlzLG49aS5vcHRpb25zLG89bi5sYWJlbHMscj10LmRlZmF1bHRzLmdsb2JhbCxsPXIuZWxlbWVudHMubGluZSxzPWkud2lkdGgsZD1pLmxpbmVXaWR0aHM7aWYobi5kaXNwbGF5KXt2YXIgdSxjPWkuY3R4LGg9YS5nZXRWYWx1ZU9yRGVmYXVsdCxmPWgoby5mb250Q29sb3Isci5kZWZhdWx0Rm9udENvbG9yKSxnPWgoby5mb250U2l6ZSxyLmRlZmF1bHRGb250U2l6ZSkscD1oKG8uZm9udFN0eWxlLHIuZGVmYXVsdEZvbnRTdHlsZSksbT1oKG8uZm9udEZhbWlseSxyLmRlZmF1bHRGb250RmFtaWx5KSxiPWEuZm9udFN0cmluZyhnLHAsbSk7Yy50ZXh0QWxpZ249XCJsZWZ0XCIsYy50ZXh0QmFzZWxpbmU9XCJ0b3BcIixjLmxpbmVXaWR0aD0uNSxjLnN0cm9rZVN0eWxlPWYsYy5maWxsU3R5bGU9ZixjLmZvbnQ9Yjt2YXIgdj1lKG8sZykseD1pLmxlZ2VuZEhpdEJveGVzLHk9ZnVuY3Rpb24oZSxhLGkpe2lmKCEoaXNOYU4odil8fDA+PXYpKXtjLnNhdmUoKSxjLmZpbGxTdHlsZT1oKGkuZmlsbFN0eWxlLHIuZGVmYXVsdENvbG9yKSxjLmxpbmVDYXA9aChpLmxpbmVDYXAsbC5ib3JkZXJDYXBTdHlsZSksYy5saW5lRGFzaE9mZnNldD1oKGkubGluZURhc2hPZmZzZXQsbC5ib3JkZXJEYXNoT2Zmc2V0KSxjLmxpbmVKb2luPWgoaS5saW5lSm9pbixsLmJvcmRlckpvaW5TdHlsZSksYy5saW5lV2lkdGg9aChpLmxpbmVXaWR0aCxsLmJvcmRlcldpZHRoKSxjLnN0cm9rZVN0eWxlPWgoaS5zdHJva2VTdHlsZSxyLmRlZmF1bHRDb2xvcik7dmFyIG89MD09PWgoaS5saW5lV2lkdGgsbC5ib3JkZXJXaWR0aCk7aWYoYy5zZXRMaW5lRGFzaCYmYy5zZXRMaW5lRGFzaChoKGkubGluZURhc2gsbC5ib3JkZXJEYXNoKSksbi5sYWJlbHMmJm4ubGFiZWxzLnVzZVBvaW50U3R5bGUpe3ZhciBzPWcqTWF0aC5TUVJUMi8yLGQ9cy9NYXRoLlNRUlQyLHU9ZStkLGY9YStkO3QuY2FudmFzSGVscGVycy5kcmF3UG9pbnQoYyxpLnBvaW50U3R5bGUscyx1LGYpfWVsc2Ugb3x8Yy5zdHJva2VSZWN0KGUsYSx2LGcpLGMuZmlsbFJlY3QoZSxhLHYsZyk7Yy5yZXN0b3JlKCl9fSxrPWZ1bmN0aW9uKHQsZSxhLGkpe2MuZmlsbFRleHQoYS50ZXh0LHYrZy8yK3QsZSksYS5oaWRkZW4mJihjLmJlZ2luUGF0aCgpLGMubGluZVdpZHRoPTIsYy5tb3ZlVG8oditnLzIrdCxlK2cvMiksYy5saW5lVG8oditnLzIrdCtpLGUrZy8yKSxjLnN0cm9rZSgpKX0sUz1pLmlzSG9yaXpvbnRhbCgpO3U9Uz97eDppLmxlZnQrKHMtZFswXSkvMix5OmkudG9wK28ucGFkZGluZyxsaW5lOjB9Ont4OmkubGVmdCtvLnBhZGRpbmcseTppLnRvcCtvLnBhZGRpbmcsbGluZTowfTt2YXIgdz1nK28ucGFkZGluZzthLmVhY2goaS5sZWdlbmRJdGVtcyxmdW5jdGlvbih0LGUpe3ZhciBhPWMubWVhc3VyZVRleHQodC50ZXh0KS53aWR0aCxuPXYrZy8yK2Escj11LngsbD11Lnk7Uz9yK24+PXMmJihsPXUueSs9dyx1LmxpbmUrKyxyPXUueD1pLmxlZnQrKHMtZFt1LmxpbmVdKS8yKTpsK3c+aS5ib3R0b20mJihyPXUueD1yK2kuY29sdW1uV2lkdGhzW3UubGluZV0rby5wYWRkaW5nLGw9dS55PWkudG9wLHUubGluZSsrKSx5KHIsbCx0KSx4W2VdLmxlZnQ9cix4W2VdLnRvcD1sLGsocixsLHQsYSksUz91LngrPW4rby5wYWRkaW5nOnUueSs9d30pfX0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxpPWUub3B0aW9ucyxuPVwibW91c2V1cFwiPT09dC50eXBlP1wiY2xpY2tcIjp0LnR5cGUsbz0hMTtpZihcIm1vdXNlbW92ZVwiPT09bil7aWYoIWkub25Ib3ZlcilyZXR1cm59ZWxzZXtpZihcImNsaWNrXCIhPT1uKXJldHVybjtpZighaS5vbkNsaWNrKXJldHVybn12YXIgcj1hLmdldFJlbGF0aXZlUG9zaXRpb24odCxlLmNoYXJ0LmNoYXJ0KSxsPXIueCxzPXIueTtpZihsPj1lLmxlZnQmJmw8PWUucmlnaHQmJnM+PWUudG9wJiZzPD1lLmJvdHRvbSlmb3IodmFyIGQ9ZS5sZWdlbmRIaXRCb3hlcyx1PTA7dTxkLmxlbmd0aDsrK3Upe3ZhciBjPWRbdV07aWYobD49Yy5sZWZ0JiZsPD1jLmxlZnQrYy53aWR0aCYmcz49Yy50b3AmJnM8PWMudG9wK2MuaGVpZ2h0KXtpZihcImNsaWNrXCI9PT1uKXtpLm9uQ2xpY2suY2FsbChlLHQsZS5sZWdlbmRJdGVtc1t1XSksbz0hMDticmVha31pZihcIm1vdXNlbW92ZVwiPT09bil7aS5vbkhvdmVyLmNhbGwoZSx0LGUubGVnZW5kSXRlbXNbdV0pLG89ITA7YnJlYWt9fX1yZXR1cm4gb319KSx0LnBsdWdpbnMucmVnaXN0ZXIoe2JlZm9yZUluaXQ6ZnVuY3Rpb24oZSl7dmFyIGE9ZS5vcHRpb25zLGk9YS5sZWdlbmQ7aSYmKGUubGVnZW5kPW5ldyB0LkxlZ2VuZCh7Y3R4OmUuY2hhcnQuY3R4LG9wdGlvbnM6aSxjaGFydDplfSksdC5sYXlvdXRTZXJ2aWNlLmFkZEJveChlLGUubGVnZW5kKSl9fSl9fSx7fV0sMzE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLm5vb3A7dC5wbHVnaW5zPXtfcGx1Z2luczpbXSxyZWdpc3RlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wbHVnaW5zO1tdLmNvbmNhdCh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpey0xPT09ZS5pbmRleE9mKHQpJiZlLnB1c2godCl9KX0sdW5yZWdpc3RlcjpmdW5jdGlvbih0KXt2YXIgZT10aGlzLl9wbHVnaW5zO1tdLmNvbmNhdCh0KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3ZhciBhPWUuaW5kZXhPZih0KTstMSE9PWEmJmUuc3BsaWNlKGEsMSl9KX0sY2xlYXI6ZnVuY3Rpb24oKXt0aGlzLl9wbHVnaW5zPVtdfSxjb3VudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9wbHVnaW5zLmxlbmd0aH0sZ2V0QWxsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3BsdWdpbnN9LG5vdGlmeTpmdW5jdGlvbih0LGUpe3ZhciBhLGksbj10aGlzLl9wbHVnaW5zLG89bi5sZW5ndGg7XG5mb3IoYT0wO28+YTsrK2EpaWYoaT1uW2FdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGlbdF0mJmlbdF0uYXBwbHkoaSxlfHxbXSk9PT0hMSlyZXR1cm4hMTtyZXR1cm4hMH19LHQuUGx1Z2luQmFzZT10LkVsZW1lbnQuZXh0ZW5kKHtiZWZvcmVJbml0OmUsYWZ0ZXJJbml0OmUsYmVmb3JlVXBkYXRlOmUsYWZ0ZXJVcGRhdGU6ZSxiZWZvcmVEcmF3OmUsYWZ0ZXJEcmF3OmUsZGVzdHJveTplfSksdC5wbHVnaW5TZXJ2aWNlPXQucGx1Z2luc319LHt9XSwzMjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnM7dC5kZWZhdWx0cy5zY2FsZT17ZGlzcGxheTohMCxwb3NpdGlvbjpcImxlZnRcIixncmlkTGluZXM6e2Rpc3BsYXk6ITAsY29sb3I6XCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixsaW5lV2lkdGg6MSxkcmF3Qm9yZGVyOiEwLGRyYXdPbkNoYXJ0QXJlYTohMCxkcmF3VGlja3M6ITAsdGlja01hcmtMZW5ndGg6MTAsemVyb0xpbmVXaWR0aDoxLHplcm9MaW5lQ29sb3I6XCJyZ2JhKDAsMCwwLDAuMjUpXCIsb2Zmc2V0R3JpZExpbmVzOiExLGJvcmRlckRhc2g6W10sYm9yZGVyRGFzaE9mZnNldDowfSxzY2FsZUxhYmVsOntsYWJlbFN0cmluZzpcIlwiLGRpc3BsYXk6ITF9LHRpY2tzOntiZWdpbkF0WmVybzohMSxtaW5Sb3RhdGlvbjowLG1heFJvdGF0aW9uOjUwLG1pcnJvcjohMSxwYWRkaW5nOjEwLHJldmVyc2U6ITEsZGlzcGxheTohMCxhdXRvU2tpcDohMCxhdXRvU2tpcFBhZGRpbmc6MCxsYWJlbE9mZnNldDowLGNhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy52YWx1ZXN9fSx0LlNjYWxlPXQuRWxlbWVudC5leHRlbmQoe2JlZm9yZVVwZGF0ZTpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVVcGRhdGUsW3RoaXNdKX0sdXBkYXRlOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10aGlzO3JldHVybiBuLmJlZm9yZVVwZGF0ZSgpLG4ubWF4V2lkdGg9dCxuLm1heEhlaWdodD1hLG4ubWFyZ2lucz1lLmV4dGVuZCh7bGVmdDowLHJpZ2h0OjAsdG9wOjAsYm90dG9tOjB9LGkpLG4uYmVmb3JlU2V0RGltZW5zaW9ucygpLG4uc2V0RGltZW5zaW9ucygpLG4uYWZ0ZXJTZXREaW1lbnNpb25zKCksbi5iZWZvcmVEYXRhTGltaXRzKCksbi5kZXRlcm1pbmVEYXRhTGltaXRzKCksbi5hZnRlckRhdGFMaW1pdHMoKSxuLmJlZm9yZUJ1aWxkVGlja3MoKSxuLmJ1aWxkVGlja3MoKSxuLmFmdGVyQnVpbGRUaWNrcygpLG4uYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uKCksbi5jb252ZXJ0VGlja3NUb0xhYmVscygpLG4uYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb24oKSxuLmJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uY2FsY3VsYXRlVGlja1JvdGF0aW9uKCksbi5hZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbigpLG4uYmVmb3JlRml0KCksbi5maXQoKSxuLmFmdGVyRml0KCksbi5hZnRlclVwZGF0ZSgpLG4ubWluU2l6ZX0sYWZ0ZXJVcGRhdGU6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJVcGRhdGUsW3RoaXNdKX0sYmVmb3JlU2V0RGltZW5zaW9uczpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5iZWZvcmVTZXREaW1lbnNpb25zLFt0aGlzXSl9LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QuaXNIb3Jpem9udGFsKCk/KHQud2lkdGg9dC5tYXhXaWR0aCx0LmxlZnQ9MCx0LnJpZ2h0PXQud2lkdGgpOih0LmhlaWdodD10Lm1heEhlaWdodCx0LnRvcD0wLHQuYm90dG9tPXQuaGVpZ2h0KSx0LnBhZGRpbmdMZWZ0PTAsdC5wYWRkaW5nVG9wPTAsdC5wYWRkaW5nUmlnaHQ9MCx0LnBhZGRpbmdCb3R0b209MH0sYWZ0ZXJTZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyU2V0RGltZW5zaW9ucyxbdGhpc10pfSxiZWZvcmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZURhdGFMaW1pdHMsW3RoaXNdKX0sZGV0ZXJtaW5lRGF0YUxpbWl0czplLm5vb3AsYWZ0ZXJEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyRGF0YUxpbWl0cyxbdGhpc10pfSxiZWZvcmVCdWlsZFRpY2tzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUJ1aWxkVGlja3MsW3RoaXNdKX0sYnVpbGRUaWNrczplLm5vb3AsYWZ0ZXJCdWlsZFRpY2tzOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmFmdGVyQnVpbGRUaWNrcyxbdGhpc10pfSxiZWZvcmVUaWNrVG9MYWJlbENvbnZlcnNpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlVGlja1RvTGFiZWxDb252ZXJzaW9uLFt0aGlzXSl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQub3B0aW9ucy50aWNrczt0LnRpY2tzPXQudGlja3MubWFwKGUudXNlckNhbGxiYWNrfHxlLmNhbGxiYWNrKX0sYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb246ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYWZ0ZXJUaWNrVG9MYWJlbENvbnZlcnNpb24sW3RoaXNdKX0sYmVmb3JlQ2FsY3VsYXRlVGlja1JvdGF0aW9uOmZ1bmN0aW9uKCl7ZS5jYWxsQ2FsbGJhY2sodGhpcy5vcHRpb25zLmJlZm9yZUNhbGN1bGF0ZVRpY2tSb3RhdGlvbixbdGhpc10pfSxjYWxjdWxhdGVUaWNrUm90YXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5jdHgsbj10LmRlZmF1bHRzLmdsb2JhbCxvPWEub3B0aW9ucy50aWNrcyxyPWUuZ2V0VmFsdWVPckRlZmF1bHQoby5mb250U2l6ZSxuLmRlZmF1bHRGb250U2l6ZSksbD1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udFN0eWxlLG4uZGVmYXVsdEZvbnRTdHlsZSkscz1lLmdldFZhbHVlT3JEZWZhdWx0KG8uZm9udEZhbWlseSxuLmRlZmF1bHRGb250RmFtaWx5KSxkPWUuZm9udFN0cmluZyhyLGwscyk7aS5mb250PWQ7dmFyIHUsYz1pLm1lYXN1cmVUZXh0KGEudGlja3NbMF0pLndpZHRoLGg9aS5tZWFzdXJlVGV4dChhLnRpY2tzW2EudGlja3MubGVuZ3RoLTFdKS53aWR0aDtpZihhLmxhYmVsUm90YXRpb249by5taW5Sb3RhdGlvbnx8MCxhLnBhZGRpbmdSaWdodD0wLGEucGFkZGluZ0xlZnQ9MCxhLm9wdGlvbnMuZGlzcGxheSYmYS5pc0hvcml6b250YWwoKSl7YS5wYWRkaW5nUmlnaHQ9aC8yKzMsYS5wYWRkaW5nTGVmdD1jLzIrMyxhLmxvbmdlc3RUZXh0Q2FjaGV8fChhLmxvbmdlc3RUZXh0Q2FjaGU9e30pO2Zvcih2YXIgZixnLHA9ZS5sb25nZXN0VGV4dChpLGQsYS50aWNrcyxhLmxvbmdlc3RUZXh0Q2FjaGUpLG09cCxiPWEuZ2V0UGl4ZWxGb3JUaWNrKDEpLWEuZ2V0UGl4ZWxGb3JUaWNrKDApLTY7bT5iJiZhLmxhYmVsUm90YXRpb248by5tYXhSb3RhdGlvbjspe2lmKGY9TWF0aC5jb3MoZS50b1JhZGlhbnMoYS5sYWJlbFJvdGF0aW9uKSksZz1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSx1PWYqYyx1K3IvMj5hLnlMYWJlbFdpZHRoJiYoYS5wYWRkaW5nTGVmdD11K3IvMiksYS5wYWRkaW5nUmlnaHQ9ci8yLGcqcD5hLm1heEhlaWdodCl7YS5sYWJlbFJvdGF0aW9uLS07YnJlYWt9YS5sYWJlbFJvdGF0aW9uKyssbT1mKnB9fWEubWFyZ2lucyYmKGEucGFkZGluZ0xlZnQ9TWF0aC5tYXgoYS5wYWRkaW5nTGVmdC1hLm1hcmdpbnMubGVmdCwwKSxhLnBhZGRpbmdSaWdodD1NYXRoLm1heChhLnBhZGRpbmdSaWdodC1hLm1hcmdpbnMucmlnaHQsMCkpfSxhZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbjpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckNhbGN1bGF0ZVRpY2tSb3RhdGlvbixbdGhpc10pfSxiZWZvcmVGaXQ6ZnVuY3Rpb24oKXtlLmNhbGxDYWxsYmFjayh0aGlzLm9wdGlvbnMuYmVmb3JlRml0LFt0aGlzXSl9LGZpdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLm1pblNpemU9e3dpZHRoOjAsaGVpZ2h0OjB9LG49YS5vcHRpb25zLG89dC5kZWZhdWx0cy5nbG9iYWwscj1uLnRpY2tzLGw9bi5zY2FsZUxhYmVsLHM9bi5ncmlkTGluZXMsZD1uLmRpc3BsYXksdT1hLmlzSG9yaXpvbnRhbCgpLGM9ZS5nZXRWYWx1ZU9yRGVmYXVsdChyLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxoPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250U3R5bGUsby5kZWZhdWx0Rm9udFN0eWxlKSxmPWUuZ2V0VmFsdWVPckRlZmF1bHQoci5mb250RmFtaWx5LG8uZGVmYXVsdEZvbnRGYW1pbHkpLGc9ZS5mb250U3RyaW5nKGMsaCxmKSxwPWUuZ2V0VmFsdWVPckRlZmF1bHQobC5mb250U2l6ZSxvLmRlZmF1bHRGb250U2l6ZSksbT1uLmdyaWRMaW5lcy50aWNrTWFya0xlbmd0aDtpZih1P2kud2lkdGg9YS5pc0Z1bGxXaWR0aCgpP2EubWF4V2lkdGgtYS5tYXJnaW5zLmxlZnQtYS5tYXJnaW5zLnJpZ2h0OmEubWF4V2lkdGg6aS53aWR0aD1kJiZzLmRyYXdUaWNrcz9tOjAsdT9pLmhlaWdodD1kJiZzLmRyYXdUaWNrcz9tOjA6aS5oZWlnaHQ9YS5tYXhIZWlnaHQsbC5kaXNwbGF5JiZkJiYodT9pLmhlaWdodCs9MS41KnA6aS53aWR0aCs9MS41KnApLHIuZGlzcGxheSYmZCl7YS5sb25nZXN0VGV4dENhY2hlfHwoYS5sb25nZXN0VGV4dENhY2hlPXt9KTt2YXIgYj1lLmxvbmdlc3RUZXh0KGEuY3R4LGcsYS50aWNrcyxhLmxvbmdlc3RUZXh0Q2FjaGUpLHY9ZS5udW1iZXJPZkxhYmVsTGluZXMoYS50aWNrcykseD0uNSpjO2lmKHUpe2EubG9uZ2VzdExhYmVsV2lkdGg9Yjt2YXIgeT1NYXRoLnNpbihlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSphLmxvbmdlc3RMYWJlbFdpZHRoK2Mqdit4KnY7aS5oZWlnaHQ9TWF0aC5taW4oYS5tYXhIZWlnaHQsaS5oZWlnaHQreSksYS5jdHguZm9udD1nO3ZhciBrPWEuY3R4Lm1lYXN1cmVUZXh0KGEudGlja3NbMF0pLndpZHRoLFM9YS5jdHgubWVhc3VyZVRleHQoYS50aWNrc1thLnRpY2tzLmxlbmd0aC0xXSkud2lkdGgsdz1NYXRoLmNvcyhlLnRvUmFkaWFucyhhLmxhYmVsUm90YXRpb24pKSxNPU1hdGguc2luKGUudG9SYWRpYW5zKGEubGFiZWxSb3RhdGlvbikpO2EucGFkZGluZ0xlZnQ9MCE9PWEubGFiZWxSb3RhdGlvbj93KmsrMzprLzIrMyxhLnBhZGRpbmdSaWdodD0wIT09YS5sYWJlbFJvdGF0aW9uP00qKGMvMikrMzpTLzIrM31lbHNle3ZhciBDPWEubWF4V2lkdGgtaS53aWR0aCxEPXIubWlycm9yO0Q/Yj0wOmIrPWEub3B0aW9ucy50aWNrcy5wYWRkaW5nLEM+Yj9pLndpZHRoKz1iOmkud2lkdGg9YS5tYXhXaWR0aCxhLnBhZGRpbmdUb3A9Yy8yLGEucGFkZGluZ0JvdHRvbT1jLzJ9fWEubWFyZ2lucyYmKGEucGFkZGluZ0xlZnQ9TWF0aC5tYXgoYS5wYWRkaW5nTGVmdC1hLm1hcmdpbnMubGVmdCwwKSxhLnBhZGRpbmdUb3A9TWF0aC5tYXgoYS5wYWRkaW5nVG9wLWEubWFyZ2lucy50b3AsMCksYS5wYWRkaW5nUmlnaHQ9TWF0aC5tYXgoYS5wYWRkaW5nUmlnaHQtYS5tYXJnaW5zLnJpZ2h0LDApLGEucGFkZGluZ0JvdHRvbT1NYXRoLm1heChhLnBhZGRpbmdCb3R0b20tYS5tYXJnaW5zLmJvdHRvbSwwKSksYS53aWR0aD1pLndpZHRoLGEuaGVpZ2h0PWkuaGVpZ2h0fSxhZnRlckZpdDpmdW5jdGlvbigpe2UuY2FsbENhbGxiYWNrKHRoaXMub3B0aW9ucy5hZnRlckZpdCxbdGhpc10pfSxpc0hvcml6b250YWw6ZnVuY3Rpb24oKXtyZXR1cm5cInRvcFwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcHRpb25zLnBvc2l0aW9ufSxpc0Z1bGxXaWR0aDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm9wdGlvbnMuZnVsbFdpZHRofSxnZXRSaWdodFZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBudWxsPT09dHx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/TmFOOlwibnVtYmVyXCIhPXR5cGVvZiB0fHxpc0Zpbml0ZSh0KT9cIm9iamVjdFwiPT10eXBlb2YgdD90IGluc3RhbmNlb2YgRGF0ZXx8dC5pc1ZhbGlkP3Q6dGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuaXNIb3Jpem9udGFsKCk/dC54OnQueSk6dDpOYU59LGdldExhYmVsRm9ySW5kZXg6ZS5ub29wLGdldFBpeGVsRm9yVmFsdWU6ZS5ub29wLGdldFZhbHVlRm9yUGl4ZWw6ZS5ub29wLGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXM7aWYoYS5pc0hvcml6b250YWwoKSl7dmFyIGk9YS53aWR0aC0oYS5wYWRkaW5nTGVmdCthLnBhZGRpbmdSaWdodCksbj1pL01hdGgubWF4KGEudGlja3MubGVuZ3RoLShhLm9wdGlvbnMuZ3JpZExpbmVzLm9mZnNldEdyaWRMaW5lcz8wOjEpLDEpLG89bip0K2EucGFkZGluZ0xlZnQ7ZSYmKG8rPW4vMik7dmFyIHI9YS5sZWZ0K01hdGgucm91bmQobyk7cmV0dXJuIHIrPWEuaXNGdWxsV2lkdGgoKT9hLm1hcmdpbnMubGVmdDowfXZhciBsPWEuaGVpZ2h0LShhLnBhZGRpbmdUb3ArYS5wYWRkaW5nQm90dG9tKTtyZXR1cm4gYS50b3ArdCoobC8oYS50aWNrcy5sZW5ndGgtMSkpfSxnZXRQaXhlbEZvckRlY2ltYWw6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztpZihlLmlzSG9yaXpvbnRhbCgpKXt2YXIgYT1lLndpZHRoLShlLnBhZGRpbmdMZWZ0K2UucGFkZGluZ1JpZ2h0KSxpPWEqdCtlLnBhZGRpbmdMZWZ0LG49ZS5sZWZ0K01hdGgucm91bmQoaSk7cmV0dXJuIG4rPWUuaXNGdWxsV2lkdGgoKT9lLm1hcmdpbnMubGVmdDowfXJldHVybiBlLnRvcCt0KmUuaGVpZ2h0fSxnZXRCYXNlUGl4ZWw6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5taW4sYT10Lm1heDtyZXR1cm4gdC5nZXRQaXhlbEZvclZhbHVlKHQuYmVnaW5BdFplcm8/MDowPmUmJjA+YT9hOmU+MCYmYT4wP2U6MCl9LGRyYXc6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpcyxuPWkub3B0aW9ucztpZihuLmRpc3BsYXkpe3ZhciBvLHIsbD1pLmN0eCxzPXQuZGVmYXVsdHMuZ2xvYmFsLGQ9bi50aWNrcyx1PW4uZ3JpZExpbmVzLGM9bi5zY2FsZUxhYmVsLGg9MCE9PWkubGFiZWxSb3RhdGlvbixmPWQuYXV0b1NraXAsZz1pLmlzSG9yaXpvbnRhbCgpO2QubWF4VGlja3NMaW1pdCYmKHI9ZC5tYXhUaWNrc0xpbWl0KTt2YXIgcD1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udENvbG9yLHMuZGVmYXVsdEZvbnRDb2xvciksbT1lLmdldFZhbHVlT3JEZWZhdWx0KGQuZm9udFNpemUscy5kZWZhdWx0Rm9udFNpemUpLGI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRTdHlsZSxzLmRlZmF1bHRGb250U3R5bGUpLHY9ZS5nZXRWYWx1ZU9yRGVmYXVsdChkLmZvbnRGYW1pbHkscy5kZWZhdWx0Rm9udEZhbWlseSkseD1lLmZvbnRTdHJpbmcobSxiLHYpLHk9dS50aWNrTWFya0xlbmd0aCxrPWUuZ2V0VmFsdWVPckRlZmF1bHQodS5ib3JkZXJEYXNoLHMuYm9yZGVyRGFzaCksUz1lLmdldFZhbHVlT3JEZWZhdWx0KHUuYm9yZGVyRGFzaE9mZnNldCxzLmJvcmRlckRhc2hPZmZzZXQpLHc9ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRDb2xvcixzLmRlZmF1bHRGb250Q29sb3IpLE09ZS5nZXRWYWx1ZU9yRGVmYXVsdChjLmZvbnRTaXplLHMuZGVmYXVsdEZvbnRTaXplKSxDPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250U3R5bGUscy5kZWZhdWx0Rm9udFN0eWxlKSxEPWUuZ2V0VmFsdWVPckRlZmF1bHQoYy5mb250RmFtaWx5LHMuZGVmYXVsdEZvbnRGYW1pbHkpLEk9ZS5mb250U3RyaW5nKE0sQyxEKSxBPWUudG9SYWRpYW5zKGkubGFiZWxSb3RhdGlvbiksVD1NYXRoLmNvcyhBKSxQPWkubG9uZ2VzdExhYmVsV2lkdGgqVDtsLmZpbGxTdHlsZT1wO3ZhciBGPVtdO2lmKGcpe2lmKG89ITEsaCYmKFAvPTIpLChQK2QuYXV0b1NraXBQYWRkaW5nKSppLnRpY2tzLmxlbmd0aD5pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSYmKG89MStNYXRoLmZsb29yKChQK2QuYXV0b1NraXBQYWRkaW5nKSppLnRpY2tzLmxlbmd0aC8oaS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCkpKSksciYmaS50aWNrcy5sZW5ndGg+cilmb3IoOyFvfHxpLnRpY2tzLmxlbmd0aC8ob3x8MSk+cjspb3x8KG89MSksbys9MTtmfHwobz0hMSl9dmFyIF89XCJyaWdodFwiPT09bi5wb3NpdGlvbj9pLmxlZnQ6aS5yaWdodC15LFI9XCJyaWdodFwiPT09bi5wb3NpdGlvbj9pLmxlZnQreTppLnJpZ2h0LFY9XCJib3R0b21cIj09PW4ucG9zaXRpb24/aS50b3A6aS5ib3R0b20teSxMPVwiYm90dG9tXCI9PT1uLnBvc2l0aW9uP2kudG9wK3k6aS5ib3R0b207aWYoZS5lYWNoKGkudGlja3MsZnVuY3Rpb24odCxyKXtpZih2b2lkIDAhPT10JiZudWxsIT09dCl7dmFyIGw9aS50aWNrcy5sZW5ndGg9PT1yKzEscz1vPjEmJnIlbz4wfHxyJW89PT0wJiZyK28+PWkudGlja3MubGVuZ3RoO2lmKCghc3x8bCkmJnZvaWQgMCE9PXQmJm51bGwhPT10KXt2YXIgYyxmO3I9PT0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGkuemVyb0xpbmVJbmRleD9pLnplcm9MaW5lSW5kZXg6MCk/KGM9dS56ZXJvTGluZVdpZHRoLGY9dS56ZXJvTGluZUNvbG9yKTooYz1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmxpbmVXaWR0aCxyKSxmPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuY29sb3IscikpO3ZhciBwLG0sYix2LHgsdyxNLEMsRCxJLFQ9XCJtaWRkbGVcIixQPVwibWlkZGxlXCI7aWYoZyl7aHx8KFA9XCJ0b3BcIj09PW4ucG9zaXRpb24/XCJib3R0b21cIjpcInRvcFwiKSxUPWg/XCJyaWdodFwiOlwiY2VudGVyXCI7dmFyIE89aS5nZXRQaXhlbEZvclRpY2socikrZS5hbGlhc1BpeGVsKGMpO0Q9aS5nZXRQaXhlbEZvclRpY2socix1Lm9mZnNldEdyaWRMaW5lcykrZC5sYWJlbE9mZnNldCxJPWg/aS50b3ArMTI6XCJ0b3BcIj09PW4ucG9zaXRpb24/aS5ib3R0b20teTppLnRvcCt5LHA9Yj14PU09TyxtPVYsdj1MLHc9YS50b3AsQz1hLmJvdHRvbX1lbHNle1wibGVmdFwiPT09bi5wb3NpdGlvbj9kLm1pcnJvcj8oRD1pLnJpZ2h0K2QucGFkZGluZyxUPVwibGVmdFwiKTooRD1pLnJpZ2h0LWQucGFkZGluZyxUPVwicmlnaHRcIik6ZC5taXJyb3I/KEQ9aS5sZWZ0LWQucGFkZGluZyxUPVwicmlnaHRcIik6KEQ9aS5sZWZ0K2QucGFkZGluZyxUPVwibGVmdFwiKTt2YXIgQj1pLmdldFBpeGVsRm9yVGljayhyKTtCKz1lLmFsaWFzUGl4ZWwoYyksST1pLmdldFBpeGVsRm9yVGljayhyLHUub2Zmc2V0R3JpZExpbmVzKSxwPV8sYj1SLHg9YS5sZWZ0LE09YS5yaWdodCxtPXY9dz1DPUJ9Ri5wdXNoKHt0eDE6cCx0eTE6bSx0eDI6Yix0eTI6dix4MTp4LHkxOncseDI6TSx5MjpDLGxhYmVsWDpELGxhYmVsWTpJLGdsV2lkdGg6YyxnbENvbG9yOmYsZ2xCb3JkZXJEYXNoOmssZ2xCb3JkZXJEYXNoT2Zmc2V0OlMscm90YXRpb246LTEqQSxsYWJlbDp0LHRleHRCYXNlbGluZTpQLHRleHRBbGlnbjpUfSl9fX0pLGUuZWFjaChGLGZ1bmN0aW9uKHQpe2lmKHUuZGlzcGxheSYmKGwuc2F2ZSgpLGwubGluZVdpZHRoPXQuZ2xXaWR0aCxsLnN0cm9rZVN0eWxlPXQuZ2xDb2xvcixsLnNldExpbmVEYXNoJiYobC5zZXRMaW5lRGFzaCh0LmdsQm9yZGVyRGFzaCksbC5saW5lRGFzaE9mZnNldD10LmdsQm9yZGVyRGFzaE9mZnNldCksbC5iZWdpblBhdGgoKSx1LmRyYXdUaWNrcyYmKGwubW92ZVRvKHQudHgxLHQudHkxKSxsLmxpbmVUbyh0LnR4Mix0LnR5MikpLHUuZHJhd09uQ2hhcnRBcmVhJiYobC5tb3ZlVG8odC54MSx0LnkxKSxsLmxpbmVUbyh0LngyLHQueTIpKSxsLnN0cm9rZSgpLGwucmVzdG9yZSgpKSxkLmRpc3BsYXkpe2wuc2F2ZSgpLGwudHJhbnNsYXRlKHQubGFiZWxYLHQubGFiZWxZKSxsLnJvdGF0ZSh0LnJvdGF0aW9uKSxsLmZvbnQ9eCxsLnRleHRCYXNlbGluZT10LnRleHRCYXNlbGluZSxsLnRleHRBbGlnbj10LnRleHRBbGlnbjt2YXIgYT10LmxhYmVsO2lmKGUuaXNBcnJheShhKSlmb3IodmFyIGk9MCxuPS0oYS5sZW5ndGgtMSkqbSouNzU7aTxhLmxlbmd0aDsrK2kpbC5maWxsVGV4dChcIlwiK2FbaV0sMCxuKSxuKz0xLjUqbTtlbHNlIGwuZmlsbFRleHQoYSwwLDApO2wucmVzdG9yZSgpfX0pLGMuZGlzcGxheSl7dmFyIE8sQixXPTA7aWYoZylPPWkubGVmdCsoaS5yaWdodC1pLmxlZnQpLzIsQj1cImJvdHRvbVwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbS1NLzI6aS50b3ArTS8yO2Vsc2V7dmFyIHo9XCJsZWZ0XCI9PT1uLnBvc2l0aW9uO089ej9pLmxlZnQrTS8yOmkucmlnaHQtTS8yLEI9aS50b3ArKGkuYm90dG9tLWkudG9wKS8yLFc9ej8tLjUqTWF0aC5QSTouNSpNYXRoLlBJfWwuc2F2ZSgpLGwudHJhbnNsYXRlKE8sQiksbC5yb3RhdGUoVyksbC50ZXh0QWxpZ249XCJjZW50ZXJcIixsLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiLGwuZmlsbFN0eWxlPXcsbC5mb250PUksbC5maWxsVGV4dChjLmxhYmVsU3RyaW5nLDAsMCksbC5yZXN0b3JlKCl9aWYodS5kcmF3Qm9yZGVyKXtsLmxpbmVXaWR0aD1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdCh1LmxpbmVXaWR0aCwwKSxsLnN0cm9rZVN0eWxlPWUuZ2V0VmFsdWVBdEluZGV4T3JEZWZhdWx0KHUuY29sb3IsMCk7dmFyIE49aS5sZWZ0LEU9aS5yaWdodCxIPWkudG9wLFU9aS5ib3R0b20saj1lLmFsaWFzUGl4ZWwobC5saW5lV2lkdGgpO2c/KEg9VT1cInRvcFwiPT09bi5wb3NpdGlvbj9pLmJvdHRvbTppLnRvcCxIKz1qLFUrPWopOihOPUU9XCJsZWZ0XCI9PT1uLnBvc2l0aW9uP2kucmlnaHQ6aS5sZWZ0LE4rPWosRSs9aiksbC5iZWdpblBhdGgoKSxsLm1vdmVUbyhOLEgpLGwubGluZVRvKEUsVSksbC5zdHJva2UoKX19fX0pfX0se31dLDMzOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LnNjYWxlU2VydmljZT17Y29uc3RydWN0b3JzOnt9LGRlZmF1bHRzOnt9LHJlZ2lzdGVyU2NhbGVUeXBlOmZ1bmN0aW9uKHQsYSxpKXt0aGlzLmNvbnN0cnVjdG9yc1t0XT1hLHRoaXMuZGVmYXVsdHNbdF09ZS5jbG9uZShpKX0sZ2V0U2NhbGVDb25zdHJ1Y3RvcjpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcnMuaGFzT3duUHJvcGVydHkodCk/dGhpcy5jb25zdHJ1Y3RvcnNbdF06dm9pZCAwfSxnZXRTY2FsZURlZmF1bHRzOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRlZmF1bHRzLmhhc093blByb3BlcnR5KGEpP2Uuc2NhbGVNZXJnZSh0LmRlZmF1bHRzLnNjYWxlLHRoaXMuZGVmYXVsdHNbYV0pOnt9fSx1cGRhdGVTY2FsZURlZmF1bHRzOmZ1bmN0aW9uKHQsYSl7dmFyIGk9dGhpcy5kZWZhdWx0cztpLmhhc093blByb3BlcnR5KHQpJiYoaVt0XT1lLmV4dGVuZChpW3RdLGEpKX0sYWRkU2NhbGVzVG9MYXlvdXQ6ZnVuY3Rpb24oYSl7ZS5lYWNoKGEuc2NhbGVzLGZ1bmN0aW9uKGUpe3QubGF5b3V0U2VydmljZS5hZGRCb3goYSxlKX0pfX19fSx7fV0sMzQ6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzO3QuVGlja3M9e2dlbmVyYXRvcnM6e2xpbmVhcjpmdW5jdGlvbih0LGEpe3ZhciBpLG49W107aWYodC5zdGVwU2l6ZSYmdC5zdGVwU2l6ZT4wKWk9dC5zdGVwU2l6ZTtlbHNle3ZhciBvPWUubmljZU51bShhLm1heC1hLm1pbiwhMSk7aT1lLm5pY2VOdW0oby8odC5tYXhUaWNrcy0xKSwhMCl9dmFyIHI9TWF0aC5mbG9vcihhLm1pbi9pKSppLGw9TWF0aC5jZWlsKGEubWF4L2kpKmk7aWYodC5taW4mJnQubWF4JiZ0LnN0ZXBTaXplKXt2YXIgcz0odC5tYXgtdC5taW4pJXQuc3RlcFNpemU9PT0wO3MmJihyPXQubWluLGw9dC5tYXgpfXZhciBkPShsLXIpL2k7ZD1lLmFsbW9zdEVxdWFscyhkLE1hdGgucm91bmQoZCksaS8xZTMpP01hdGgucm91bmQoZCk6TWF0aC5jZWlsKGQpLG4ucHVzaCh2b2lkIDAhPT10Lm1pbj90Lm1pbjpyKTtmb3IodmFyIHU9MTtkPnU7Kyt1KW4ucHVzaChyK3UqaSk7cmV0dXJuIG4ucHVzaCh2b2lkIDAhPT10Lm1heD90Lm1heDpsKSxufSxsb2dhcml0aG1pYzpmdW5jdGlvbih0LGEpe2Zvcih2YXIgaT1bXSxuPWUuZ2V0VmFsdWVPckRlZmF1bHQsbz1uKHQubWluLE1hdGgucG93KDEwLE1hdGguZmxvb3IoZS5sb2cxMChhLm1pbikpKSk7bzxhLm1heDspe2kucHVzaChvKTt2YXIgcixsOzA9PT1vPyhyPU1hdGguZmxvb3IoZS5sb2cxMChhLm1pbk5vdFplcm8pKSxsPU1hdGgucm91bmQoYS5taW5Ob3RaZXJvL01hdGgucG93KDEwLHIpKSk6KHI9TWF0aC5mbG9vcihlLmxvZzEwKG8pKSxsPU1hdGguZmxvb3Ioby9NYXRoLnBvdygxMCxyKSkrMSksMTA9PT1sJiYobD0xLCsrciksbz1sKk1hdGgucG93KDEwLHIpfXZhciBzPW4odC5tYXgsbyk7cmV0dXJuIGkucHVzaChzKSxpfX0sZm9ybWF0dGVyczp7dmFsdWVzOmZ1bmN0aW9uKHQpe3JldHVybiBlLmlzQXJyYXkodCk/dDpcIlwiK3R9LGxpbmVhcjpmdW5jdGlvbih0LGEsaSl7dmFyIG49aS5sZW5ndGg+Mz9pWzJdLWlbMV06aVsxXS1pWzBdO01hdGguYWJzKG4pPjEmJnQhPT1NYXRoLmZsb29yKHQpJiYobj10LU1hdGguZmxvb3IodCkpO3ZhciBvPWUubG9nMTAoTWF0aC5hYnMobikpLHI9XCJcIjtpZigwIT09dCl7dmFyIGw9LTEqTWF0aC5mbG9vcihvKTtsPU1hdGgubWF4KE1hdGgubWluKGwsMjApLDApLHI9dC50b0ZpeGVkKGwpfWVsc2Ugcj1cIjBcIjtyZXR1cm4gcn0sbG9nYXJpdGhtaWM6ZnVuY3Rpb24odCxhLGkpe3ZhciBuPXQvTWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKHQpKSk7cmV0dXJuIDA9PT10P1wiMFwiOjE9PT1ufHwyPT09bnx8NT09PW58fDA9PT1hfHxhPT09aS5sZW5ndGgtMT90LnRvRXhwb25lbnRpYWwoKTpcIlwifX19fX0se31dLDM1OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVyczt0LmRlZmF1bHRzLmdsb2JhbC50aXRsZT17ZGlzcGxheTohMSxwb3NpdGlvbjpcInRvcFwiLGZ1bGxXaWR0aDohMCxmb250U3R5bGU6XCJib2xkXCIscGFkZGluZzoxMCx0ZXh0OlwiXCJ9O3ZhciBhPWUubm9vcDt0LlRpdGxlPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oYSl7dmFyIGk9dGhpcztlLmV4dGVuZChpLGEpLGkub3B0aW9ucz1lLmNvbmZpZ01lcmdlKHQuZGVmYXVsdHMuZ2xvYmFsLnRpdGxlLGEub3B0aW9ucyksaS5sZWdlbmRIaXRCb3hlcz1bXX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jaGFydC5vcHRpb25zO2EmJmEudGl0bGUmJih0aGlzLm9wdGlvbnM9ZS5jb25maWdNZXJnZSh0LmRlZmF1bHRzLmdsb2JhbC50aXRsZSxhLnRpdGxlKSl9LHVwZGF0ZTpmdW5jdGlvbih0LGUsYSl7dmFyIGk9dGhpcztyZXR1cm4gaS5iZWZvcmVVcGRhdGUoKSxpLm1heFdpZHRoPXQsaS5tYXhIZWlnaHQ9ZSxpLm1hcmdpbnM9YSxpLmJlZm9yZVNldERpbWVuc2lvbnMoKSxpLnNldERpbWVuc2lvbnMoKSxpLmFmdGVyU2V0RGltZW5zaW9ucygpLGkuYmVmb3JlQnVpbGRMYWJlbHMoKSxpLmJ1aWxkTGFiZWxzKCksaS5hZnRlckJ1aWxkTGFiZWxzKCksaS5iZWZvcmVGaXQoKSxpLmZpdCgpLGkuYWZ0ZXJGaXQoKSxpLmFmdGVyVXBkYXRlKCksaS5taW5TaXplfSxhZnRlclVwZGF0ZTphLGJlZm9yZVNldERpbWVuc2lvbnM6YSxzZXREaW1lbnNpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpczt0LmlzSG9yaXpvbnRhbCgpPyh0LndpZHRoPXQubWF4V2lkdGgsdC5sZWZ0PTAsdC5yaWdodD10LndpZHRoKToodC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC50b3A9MCx0LmJvdHRvbT10LmhlaWdodCksdC5wYWRkaW5nTGVmdD0wLHQucGFkZGluZ1RvcD0wLHQucGFkZGluZ1JpZ2h0PTAsdC5wYWRkaW5nQm90dG9tPTAsdC5taW5TaXplPXt3aWR0aDowLGhlaWdodDowfX0sYWZ0ZXJTZXREaW1lbnNpb25zOmEsYmVmb3JlQnVpbGRMYWJlbHM6YSxidWlsZExhYmVsczphLGFmdGVyQnVpbGRMYWJlbHM6YSxiZWZvcmVGaXQ6YSxmaXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9ZS5nZXRWYWx1ZU9yRGVmYXVsdCxuPWEub3B0aW9ucyxvPXQuZGVmYXVsdHMuZ2xvYmFsLHI9bi5kaXNwbGF5LGw9aShuLmZvbnRTaXplLG8uZGVmYXVsdEZvbnRTaXplKSxzPWEubWluU2l6ZTthLmlzSG9yaXpvbnRhbCgpPyhzLndpZHRoPWEubWF4V2lkdGgscy5oZWlnaHQ9cj9sKzIqbi5wYWRkaW5nOjApOihzLndpZHRoPXI/bCsyKm4ucGFkZGluZzowLHMuaGVpZ2h0PWEubWF4SGVpZ2h0KSxhLndpZHRoPXMud2lkdGgsYS5oZWlnaHQ9cy5oZWlnaHR9LGFmdGVyRml0OmEsaXNIb3Jpem9udGFsOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnBvc2l0aW9uO3JldHVyblwidG9wXCI9PT10fHxcImJvdHRvbVwiPT09dH0sZHJhdzpmdW5jdGlvbigpe3ZhciBhPXRoaXMsaT1hLmN0eCxuPWUuZ2V0VmFsdWVPckRlZmF1bHQsbz1hLm9wdGlvbnMscj10LmRlZmF1bHRzLmdsb2JhbDtpZihvLmRpc3BsYXkpe3ZhciBsLHMsZCx1PW4oby5mb250U2l6ZSxyLmRlZmF1bHRGb250U2l6ZSksYz1uKG8uZm9udFN0eWxlLHIuZGVmYXVsdEZvbnRTdHlsZSksaD1uKG8uZm9udEZhbWlseSxyLmRlZmF1bHRGb250RmFtaWx5KSxmPWUuZm9udFN0cmluZyh1LGMsaCksZz0wLHA9YS50b3AsbT1hLmxlZnQsYj1hLmJvdHRvbSx2PWEucmlnaHQ7aS5maWxsU3R5bGU9bihvLmZvbnRDb2xvcixyLmRlZmF1bHRGb250Q29sb3IpLGkuZm9udD1mLGEuaXNIb3Jpem9udGFsKCk/KGw9bSsodi1tKS8yLHM9cCsoYi1wKS8yLGQ9di1tKToobD1cImxlZnRcIj09PW8ucG9zaXRpb24/bSt1LzI6di11LzIscz1wKyhiLXApLzIsZD1iLXAsZz1NYXRoLlBJKihcImxlZnRcIj09PW8ucG9zaXRpb24/LS41Oi41KSksaS5zYXZlKCksaS50cmFuc2xhdGUobCxzKSxpLnJvdGF0ZShnKSxpLnRleHRBbGlnbj1cImNlbnRlclwiLGkudGV4dEJhc2VsaW5lPVwibWlkZGxlXCIsaS5maWxsVGV4dChvLnRleHQsMCwwLGQpLGkucmVzdG9yZSgpfX19KSx0LnBsdWdpbnMucmVnaXN0ZXIoe2JlZm9yZUluaXQ6ZnVuY3Rpb24oZSl7dmFyIGE9ZS5vcHRpb25zLGk9YS50aXRsZTtpJiYoZS50aXRsZUJsb2NrPW5ldyB0LlRpdGxlKHtjdHg6ZS5jaGFydC5jdHgsb3B0aW9uczppLGNoYXJ0OmV9KSx0LmxheW91dFNlcnZpY2UuYWRkQm94KGUsZS50aXRsZUJsb2NrKSl9fSl9fSx7fV0sMzY6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gZSh0LGUpe3ZhciBhPXMuY29sb3IodCk7cmV0dXJuIGEuYWxwaGEoZSphLmFscGhhKCkpLnJnYmFTdHJpbmcoKX1mdW5jdGlvbiBhKHQsZSl7cmV0dXJuIGUmJihzLmlzQXJyYXkoZSk/QXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodCxlKTp0LnB1c2goZSkpLHR9ZnVuY3Rpb24gaSh0KXt2YXIgZT10Ll94U2NhbGUsYT10Ll95U2NhbGV8fHQuX3NjYWxlLGk9dC5faW5kZXgsbj10Ll9kYXRhc2V0SW5kZXg7cmV0dXJue3hMYWJlbDplP2UuZ2V0TGFiZWxGb3JJbmRleChpLG4pOlwiXCIseUxhYmVsOmE/YS5nZXRMYWJlbEZvckluZGV4KGksbik6XCJcIixpbmRleDppLGRhdGFzZXRJbmRleDpuLHg6dC5fbW9kZWwueCx5OnQuX21vZGVsLnl9fWZ1bmN0aW9uIG4oZSl7dmFyIGE9dC5kZWZhdWx0cy5nbG9iYWwsaT1zLmdldFZhbHVlT3JEZWZhdWx0O3JldHVybnt4UGFkZGluZzplLnhQYWRkaW5nLHlQYWRkaW5nOmUueVBhZGRpbmcseEFsaWduOmUueEFsaWduLHlBbGlnbjplLnlBbGlnbixib2R5Rm9udENvbG9yOmUuYm9keUZvbnRDb2xvcixfYm9keUZvbnRGYW1pbHk6aShlLmJvZHlGb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLF9ib2R5Rm9udFN0eWxlOmkoZS5ib2R5Rm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksX2JvZHlBbGlnbjplLmJvZHlBbGlnbixib2R5Rm9udFNpemU6aShlLmJvZHlGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksYm9keVNwYWNpbmc6ZS5ib2R5U3BhY2luZyx0aXRsZUZvbnRDb2xvcjplLnRpdGxlRm9udENvbG9yLF90aXRsZUZvbnRGYW1pbHk6aShlLnRpdGxlRm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfdGl0bGVGb250U3R5bGU6aShlLnRpdGxlRm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksdGl0bGVGb250U2l6ZTppKGUudGl0bGVGb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksX3RpdGxlQWxpZ246ZS50aXRsZUFsaWduLHRpdGxlU3BhY2luZzplLnRpdGxlU3BhY2luZyx0aXRsZU1hcmdpbkJvdHRvbTplLnRpdGxlTWFyZ2luQm90dG9tLGZvb3RlckZvbnRDb2xvcjplLmZvb3RlckZvbnRDb2xvcixfZm9vdGVyRm9udEZhbWlseTppKGUuZm9vdGVyRm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxfZm9vdGVyRm9udFN0eWxlOmkoZS5mb290ZXJGb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxmb290ZXJGb250U2l6ZTppKGUuZm9vdGVyRm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLF9mb290ZXJBbGlnbjplLmZvb3RlckFsaWduLGZvb3RlclNwYWNpbmc6ZS5mb290ZXJTcGFjaW5nLGZvb3Rlck1hcmdpblRvcDplLmZvb3Rlck1hcmdpblRvcCxjYXJldFNpemU6ZS5jYXJldFNpemUsY29ybmVyUmFkaXVzOmUuY29ybmVyUmFkaXVzLGJhY2tncm91bmRDb2xvcjplLmJhY2tncm91bmRDb2xvcixvcGFjaXR5OjAsbGVnZW5kQ29sb3JCYWNrZ3JvdW5kOmUubXVsdGlLZXlCYWNrZ3JvdW5kLGRpc3BsYXlDb2xvcnM6ZS5kaXNwbGF5Q29sb3JzfX1mdW5jdGlvbiBvKHQsZSl7dmFyIGE9dC5fY2hhcnQuY3R4LGk9MiplLnlQYWRkaW5nLG49MCxvPWUuYm9keSxyPW8ucmVkdWNlKGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQrZS5iZWZvcmUubGVuZ3RoK2UubGluZXMubGVuZ3RoK2UuYWZ0ZXIubGVuZ3RofSwwKTtyKz1lLmJlZm9yZUJvZHkubGVuZ3RoK2UuYWZ0ZXJCb2R5Lmxlbmd0aDt2YXIgbD1lLnRpdGxlLmxlbmd0aCxkPWUuZm9vdGVyLmxlbmd0aCx1PWUudGl0bGVGb250U2l6ZSxjPWUuYm9keUZvbnRTaXplLGg9ZS5mb290ZXJGb250U2l6ZTtpKz1sKnUsaSs9bD8obC0xKSplLnRpdGxlU3BhY2luZzowLGkrPWw/ZS50aXRsZU1hcmdpbkJvdHRvbTowLGkrPXIqYyxpKz1yPyhyLTEpKmUuYm9keVNwYWNpbmc6MCxpKz1kP2UuZm9vdGVyTWFyZ2luVG9wOjAsaSs9ZCpoLGkrPWQ/KGQtMSkqZS5mb290ZXJTcGFjaW5nOjA7dmFyIGY9MCxnPWZ1bmN0aW9uKHQpe249TWF0aC5tYXgobixhLm1lYXN1cmVUZXh0KHQpLndpZHRoK2YpfTtyZXR1cm4gYS5mb250PXMuZm9udFN0cmluZyh1LGUuX3RpdGxlRm9udFN0eWxlLGUuX3RpdGxlRm9udEZhbWlseSkscy5lYWNoKGUudGl0bGUsZyksYS5mb250PXMuZm9udFN0cmluZyhjLGUuX2JvZHlGb250U3R5bGUsZS5fYm9keUZvbnRGYW1pbHkpLHMuZWFjaChlLmJlZm9yZUJvZHkuY29uY2F0KGUuYWZ0ZXJCb2R5KSxnKSxmPWUuZGlzcGxheUNvbG9ycz9jKzI6MCxzLmVhY2gobyxmdW5jdGlvbih0KXtzLmVhY2godC5iZWZvcmUsZykscy5lYWNoKHQubGluZXMsZykscy5lYWNoKHQuYWZ0ZXIsZyl9KSxmPTAsYS5mb250PXMuZm9udFN0cmluZyhoLGUuX2Zvb3RlckZvbnRTdHlsZSxlLl9mb290ZXJGb250RmFtaWx5KSxzLmVhY2goZS5mb290ZXIsZyksbis9MiplLnhQYWRkaW5nLHt3aWR0aDpuLGhlaWdodDppfX1mdW5jdGlvbiByKHQsZSl7dmFyIGE9dC5fbW9kZWwsaT10Ll9jaGFydCxuPXQuX2NoYXJ0SW5zdGFuY2UuY2hhcnRBcmVhLG89XCJjZW50ZXJcIixyPVwiY2VudGVyXCI7YS55PGUuaGVpZ2h0P3I9XCJ0b3BcIjphLnk+aS5oZWlnaHQtZS5oZWlnaHQmJihyPVwiYm90dG9tXCIpO3ZhciBsLHMsZCx1LGMsaD0obi5sZWZ0K24ucmlnaHQpLzIsZj0obi50b3Arbi5ib3R0b20pLzI7XCJjZW50ZXJcIj09PXI/KGw9ZnVuY3Rpb24odCl7cmV0dXJuIGg+PXR9LHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+aH0pOihsPWZ1bmN0aW9uKHQpe3JldHVybiB0PD1lLndpZHRoLzJ9LHM9ZnVuY3Rpb24odCl7cmV0dXJuIHQ+PWkud2lkdGgtZS53aWR0aC8yfSksZD1mdW5jdGlvbih0KXtyZXR1cm4gdCtlLndpZHRoPmkud2lkdGh9LHU9ZnVuY3Rpb24odCl7cmV0dXJuIHQtZS53aWR0aDwwfSxjPWZ1bmN0aW9uKHQpe3JldHVybiBmPj10P1widG9wXCI6XCJib3R0b21cIn0sbChhLngpPyhvPVwibGVmdFwiLGQoYS54KSYmKG89XCJjZW50ZXJcIixyPWMoYS55KSkpOnMoYS54KSYmKG89XCJyaWdodFwiLHUoYS54KSYmKG89XCJjZW50ZXJcIixyPWMoYS55KSkpO3ZhciBnPXQuX29wdGlvbnM7cmV0dXJue3hBbGlnbjpnLnhBbGlnbj9nLnhBbGlnbjpvLHlBbGlnbjpnLnlBbGlnbj9nLnlBbGlnbjpyfX1mdW5jdGlvbiBsKHQsZSxhKXt2YXIgaT10Lngsbj10Lnksbz10LmNhcmV0U2l6ZSxyPXQuY2FyZXRQYWRkaW5nLGw9dC5jb3JuZXJSYWRpdXMscz1hLnhBbGlnbixkPWEueUFsaWduLHU9bytyLGM9bCtyO3JldHVyblwicmlnaHRcIj09PXM/aS09ZS53aWR0aDpcImNlbnRlclwiPT09cyYmKGktPWUud2lkdGgvMiksXCJ0b3BcIj09PWQ/bis9dTpuLT1cImJvdHRvbVwiPT09ZD9lLmhlaWdodCt1OmUuaGVpZ2h0LzIsXCJjZW50ZXJcIj09PWQ/XCJsZWZ0XCI9PT1zP2krPXU6XCJyaWdodFwiPT09cyYmKGktPXUpOlwibGVmdFwiPT09cz9pLT1jOlwicmlnaHRcIj09PXMmJihpKz1jKSx7eDppLHk6bn19dmFyIHM9dC5oZWxwZXJzO3QuZGVmYXVsdHMuZ2xvYmFsLnRvb2x0aXBzPXtlbmFibGVkOiEwLGN1c3RvbTpudWxsLG1vZGU6XCJuZWFyZXN0XCIscG9zaXRpb246XCJhdmVyYWdlXCIsaW50ZXJzZWN0OiEwLGJhY2tncm91bmRDb2xvcjpcInJnYmEoMCwwLDAsMC44KVwiLHRpdGxlRm9udFN0eWxlOlwiYm9sZFwiLHRpdGxlU3BhY2luZzoyLHRpdGxlTWFyZ2luQm90dG9tOjYsdGl0bGVGb250Q29sb3I6XCIjZmZmXCIsdGl0bGVBbGlnbjpcImxlZnRcIixib2R5U3BhY2luZzoyLGJvZHlGb250Q29sb3I6XCIjZmZmXCIsYm9keUFsaWduOlwibGVmdFwiLGZvb3RlckZvbnRTdHlsZTpcImJvbGRcIixmb290ZXJTcGFjaW5nOjIsZm9vdGVyTWFyZ2luVG9wOjYsZm9vdGVyRm9udENvbG9yOlwiI2ZmZlwiLGZvb3RlckFsaWduOlwibGVmdFwiLHlQYWRkaW5nOjYseFBhZGRpbmc6NixjYXJldFNpemU6NSxjb3JuZXJSYWRpdXM6NixtdWx0aUtleUJhY2tncm91bmQ6XCIjZmZmXCIsZGlzcGxheUNvbG9yczohMCxjYWxsYmFja3M6e2JlZm9yZVRpdGxlOnMubm9vcCx0aXRsZTpmdW5jdGlvbih0LGUpe3ZhciBhPVwiXCIsaT1lLmxhYmVscyxuPWk/aS5sZW5ndGg6MDtpZih0Lmxlbmd0aD4wKXt2YXIgbz10WzBdO28ueExhYmVsP2E9by54TGFiZWw6bj4wJiZvLmluZGV4PG4mJihhPWlbby5pbmRleF0pfXJldHVybiBhfSxhZnRlclRpdGxlOnMubm9vcCxiZWZvcmVCb2R5OnMubm9vcCxiZWZvcmVMYWJlbDpzLm5vb3AsbGFiZWw6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmRhdGFzZXRzW3QuZGF0YXNldEluZGV4XS5sYWJlbHx8XCJcIjtyZXR1cm4gYStcIjogXCIrdC55TGFiZWx9LGxhYmVsQ29sb3I6ZnVuY3Rpb24odCxlKXt2YXIgYT1lLmdldERhdGFzZXRNZXRhKHQuZGF0YXNldEluZGV4KSxpPWEuZGF0YVt0LmluZGV4XSxuPWkuX3ZpZXc7cmV0dXJue2JvcmRlckNvbG9yOm4uYm9yZGVyQ29sb3IsYmFja2dyb3VuZENvbG9yOm4uYmFja2dyb3VuZENvbG9yfX0sYWZ0ZXJMYWJlbDpzLm5vb3AsYWZ0ZXJCb2R5OnMubm9vcCxiZWZvcmVGb290ZXI6cy5ub29wLGZvb3RlcjpzLm5vb3AsYWZ0ZXJGb290ZXI6cy5ub29wfX0sdC5Ub29sdGlwPXQuRWxlbWVudC5leHRlbmQoe2luaXRpYWxpemU6ZnVuY3Rpb24oKXt0aGlzLl9tb2RlbD1uKHRoaXMuX29wdGlvbnMpfSxnZXRUaXRsZTpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Ll9vcHRpb25zLGk9ZS5jYWxsYmFja3Msbj1pLmJlZm9yZVRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxvPWkudGl0bGUuYXBwbHkodCxhcmd1bWVudHMpLHI9aS5hZnRlclRpdGxlLmFwcGx5KHQsYXJndW1lbnRzKSxsPVtdO3JldHVybiBsPWEobCxuKSxsPWEobCxvKSxsPWEobCxyKX0sZ2V0QmVmb3JlQm9keTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX29wdGlvbnMuY2FsbGJhY2tzLmJlZm9yZUJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBzLmlzQXJyYXkodCk/dDp2b2lkIDAhPT10P1t0XTpbXX0sZ2V0Qm9keTpmdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMsbj1pLl9vcHRpb25zLmNhbGxiYWNrcyxvPVtdO3JldHVybiBzLmVhY2godCxmdW5jdGlvbih0KXt2YXIgcj17YmVmb3JlOltdLGxpbmVzOltdLGFmdGVyOltdfTthKHIuYmVmb3JlLG4uYmVmb3JlTGFiZWwuY2FsbChpLHQsZSkpLGEoci5saW5lcyxuLmxhYmVsLmNhbGwoaSx0LGUpKSxhKHIuYWZ0ZXIsbi5hZnRlckxhYmVsLmNhbGwoaSx0LGUpKSxvLnB1c2gocil9KSxvfSxnZXRBZnRlckJvZHk6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl9vcHRpb25zLmNhbGxiYWNrcy5hZnRlckJvZHkuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiBzLmlzQXJyYXkodCk/dDp2b2lkIDAhPT10P1t0XTpbXX0sZ2V0Rm9vdGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPXQuX29wdGlvbnMuY2FsbGJhY2tzLGk9ZS5iZWZvcmVGb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLG49ZS5mb290ZXIuYXBwbHkodCxhcmd1bWVudHMpLG89ZS5hZnRlckZvb3Rlci5hcHBseSh0LGFyZ3VtZW50cykscj1bXTtyZXR1cm4gcj1hKHIsaSkscj1hKHIsbikscj1hKHIsbyl9LHVwZGF0ZTpmdW5jdGlvbihlKXt2YXIgYSxkLHU9dGhpcyxjPXUuX29wdGlvbnMsaD11Ll9tb2RlbCxmPXUuX21vZGVsPW4oYyksZz11Ll9hY3RpdmUscD11Ll9kYXRhLG09dS5fY2hhcnRJbnN0YW5jZSxiPXt4QWxpZ246aC54QWxpZ24seUFsaWduOmgueUFsaWdufSx2PXt4OmgueCx5OmgueX0seD17d2lkdGg6aC53aWR0aCxoZWlnaHQ6aC5oZWlnaHR9LHk9e3g6aC5jYXJldFgseTpoLmNhcmV0WX07aWYoZy5sZW5ndGgpe2Yub3BhY2l0eT0xO3ZhciBrPVtdO3k9dC5Ub29sdGlwLnBvc2l0aW9uZXJzW2MucG9zaXRpb25dKGcsdS5fZXZlbnRQb3NpdGlvbik7dmFyIFM9W107Zm9yKGE9MCxkPWcubGVuZ3RoO2Q+YTsrK2EpUy5wdXNoKGkoZ1thXSkpO2MuZmlsdGVyJiYoUz1TLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gYy5maWx0ZXIodCxwKX0pKSxjLml0ZW1Tb3J0JiYoUz1TLnNvcnQoZnVuY3Rpb24odCxlKXtyZXR1cm4gYy5pdGVtU29ydCh0LGUscCl9KSkscy5lYWNoKFMsZnVuY3Rpb24odCl7ay5wdXNoKGMuY2FsbGJhY2tzLmxhYmVsQ29sb3IuY2FsbCh1LHQsbSkpfSksZi50aXRsZT11LmdldFRpdGxlKFMscCksZi5iZWZvcmVCb2R5PXUuZ2V0QmVmb3JlQm9keShTLHApLGYuYm9keT11LmdldEJvZHkoUyxwKSxmLmFmdGVyQm9keT11LmdldEFmdGVyQm9keShTLHApLGYuZm9vdGVyPXUuZ2V0Rm9vdGVyKFMscCksZi54PU1hdGgucm91bmQoeS54KSxmLnk9TWF0aC5yb3VuZCh5LnkpLGYuY2FyZXRQYWRkaW5nPXMuZ2V0VmFsdWVPckRlZmF1bHQoeS5wYWRkaW5nLDIpLGYubGFiZWxDb2xvcnM9ayxmLmRhdGFQb2ludHM9Uyx4PW8odGhpcyxmKSxiPXIodGhpcyx4KSx2PWwoZix4LGIpfWVsc2UgZi5vcGFjaXR5PTA7cmV0dXJuIGYueEFsaWduPWIueEFsaWduLGYueUFsaWduPWIueUFsaWduLGYueD12LngsZi55PXYueSxmLndpZHRoPXgud2lkdGgsZi5oZWlnaHQ9eC5oZWlnaHQsZi5jYXJldFg9eS54LGYuY2FyZXRZPXkueSx1Ll9tb2RlbD1mLGUmJmMuY3VzdG9tJiZjLmN1c3RvbS5jYWxsKHUsZiksdX0sZHJhd0NhcmV0OmZ1bmN0aW9uKHQsYSxpKXt2YXIgbixvLHIsbCxzLGQsdT10aGlzLl92aWV3LGM9dGhpcy5fY2hhcnQuY3R4LGg9dS5jYXJldFNpemUsZj11LmNvcm5lclJhZGl1cyxnPXUueEFsaWduLHA9dS55QWxpZ24sbT10LngsYj10Lnksdj1hLndpZHRoLHg9YS5oZWlnaHQ7XCJjZW50ZXJcIj09PXA/KFwibGVmdFwiPT09Zz8obj1tLG89bi1oLHI9bik6KG49bSt2LG89bitoLHI9bikscz1iK3gvMixsPXMtaCxkPXMraCk6KFwibGVmdFwiPT09Zz8obj1tK2Ysbz1uK2gscj1vK2gpOlwicmlnaHRcIj09PWc/KG49bSt2LWYsbz1uLWgscj1vLWgpOihvPW0rdi8yLG49by1oLHI9bytoKSxcInRvcFwiPT09cD8obD1iLHM9bC1oLGQ9bCk6KGw9Yit4LHM9bCtoLGQ9bCkpLGMuZmlsbFN0eWxlPWUodS5iYWNrZ3JvdW5kQ29sb3IsaSksYy5iZWdpblBhdGgoKSxjLm1vdmVUbyhuLGwpLGMubGluZVRvKG8scyksYy5saW5lVG8ocixkKSxjLmNsb3NlUGF0aCgpLGMuZmlsbCgpfSxkcmF3VGl0bGU6ZnVuY3Rpb24odCxhLGksbil7dmFyIG89YS50aXRsZTtpZihvLmxlbmd0aCl7aS50ZXh0QWxpZ249YS5fdGl0bGVBbGlnbixpLnRleHRCYXNlbGluZT1cInRvcFwiO3ZhciByPWEudGl0bGVGb250U2l6ZSxsPWEudGl0bGVTcGFjaW5nO2kuZmlsbFN0eWxlPWUoYS50aXRsZUZvbnRDb2xvcixuKSxpLmZvbnQ9cy5mb250U3RyaW5nKHIsYS5fdGl0bGVGb250U3R5bGUsYS5fdGl0bGVGb250RmFtaWx5KTt2YXIgZCx1O2ZvcihkPTAsdT1vLmxlbmd0aDt1PmQ7KytkKWkuZmlsbFRleHQob1tkXSx0LngsdC55KSx0LnkrPXIrbCxkKzE9PT1vLmxlbmd0aCYmKHQueSs9YS50aXRsZU1hcmdpbkJvdHRvbS1sKX19LGRyYXdCb2R5OmZ1bmN0aW9uKHQsYSxpLG4pe3ZhciBvPWEuYm9keUZvbnRTaXplLHI9YS5ib2R5U3BhY2luZyxsPWEuYm9keTtpLnRleHRBbGlnbj1hLl9ib2R5QWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIjt2YXIgZD1lKGEuYm9keUZvbnRDb2xvcixuKTtpLmZpbGxTdHlsZT1kLGkuZm9udD1zLmZvbnRTdHJpbmcobyxhLl9ib2R5Rm9udFN0eWxlLGEuX2JvZHlGb250RmFtaWx5KTt2YXIgdT0wLGM9ZnVuY3Rpb24oZSl7aS5maWxsVGV4dChlLHQueCt1LHQueSksdC55Kz1vK3J9O3MuZWFjaChhLmJlZm9yZUJvZHksYyk7dmFyIGg9YS5kaXNwbGF5Q29sb3JzO3U9aD9vKzI6MCxzLmVhY2gobCxmdW5jdGlvbihyLGwpe3MuZWFjaChyLmJlZm9yZSxjKSxzLmVhY2goci5saW5lcyxmdW5jdGlvbihyKXtoJiYoaS5maWxsU3R5bGU9ZShhLmxlZ2VuZENvbG9yQmFja2dyb3VuZCxuKSxpLmZpbGxSZWN0KHQueCx0LnksbyxvKSxpLnN0cm9rZVN0eWxlPWUoYS5sYWJlbENvbG9yc1tsXS5ib3JkZXJDb2xvcixuKSxpLnN0cm9rZVJlY3QodC54LHQueSxvLG8pLGkuZmlsbFN0eWxlPWUoYS5sYWJlbENvbG9yc1tsXS5iYWNrZ3JvdW5kQ29sb3IsbiksaS5maWxsUmVjdCh0LngrMSx0LnkrMSxvLTIsby0yKSxpLmZpbGxTdHlsZT1kKSxjKHIpfSkscy5lYWNoKHIuYWZ0ZXIsYyl9KSx1PTAscy5lYWNoKGEuYWZ0ZXJCb2R5LGMpLHQueS09cn0sZHJhd0Zvb3RlcjpmdW5jdGlvbih0LGEsaSxuKXt2YXIgbz1hLmZvb3RlcjtvLmxlbmd0aCYmKHQueSs9YS5mb290ZXJNYXJnaW5Ub3AsaS50ZXh0QWxpZ249YS5fZm9vdGVyQWxpZ24saS50ZXh0QmFzZWxpbmU9XCJ0b3BcIixpLmZpbGxTdHlsZT1lKGEuZm9vdGVyRm9udENvbG9yLG4pLGkuZm9udD1zLmZvbnRTdHJpbmcoYS5mb290ZXJGb250U2l6ZSxhLl9mb290ZXJGb250U3R5bGUsYS5fZm9vdGVyRm9udEZhbWlseSkscy5lYWNoKG8sZnVuY3Rpb24oZSl7aS5maWxsVGV4dChlLHQueCx0LnkpLHQueSs9YS5mb290ZXJGb250U2l6ZSthLmZvb3RlclNwYWNpbmd9KSl9LGRyYXdCYWNrZ3JvdW5kOmZ1bmN0aW9uKHQsYSxpLG4sbyl7aS5maWxsU3R5bGU9ZShhLmJhY2tncm91bmRDb2xvcixvKSxzLmRyYXdSb3VuZGVkUmVjdGFuZ2xlKGksdC54LHQueSxuLndpZHRoLG4uaGVpZ2h0LGEuY29ybmVyUmFkaXVzKSxpLmZpbGwoKX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NoYXJ0LmN0eCxlPXRoaXMuX3ZpZXc7aWYoMCE9PWUub3BhY2l0eSl7dmFyIGE9e3dpZHRoOmUud2lkdGgsaGVpZ2h0OmUuaGVpZ2h0fSxpPXt4OmUueCx5OmUueX0sbj1NYXRoLmFicyhlLm9wYWNpdHk8LjAwMSk/MDplLm9wYWNpdHk7dGhpcy5fb3B0aW9ucy5lbmFibGVkJiYodGhpcy5kcmF3QmFja2dyb3VuZChpLGUsdCxhLG4pLHRoaXMuZHJhd0NhcmV0KGksYSxuKSxpLngrPWUueFBhZGRpbmcsaS55Kz1lLnlQYWRkaW5nLHRoaXMuZHJhd1RpdGxlKGksZSx0LG4pLHRoaXMuZHJhd0JvZHkoaSxlLHQsbiksdGhpcy5kcmF3Rm9vdGVyKGksZSx0LG4pKX19LGhhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLl9vcHRpb25zLGk9ITE7aWYoZS5fbGFzdEFjdGl2ZT1lLl9sYXN0QWN0aXZlfHxbXSxcIm1vdXNlb3V0XCI9PT10LnR5cGU/ZS5fYWN0aXZlPVtdOmUuX2FjdGl2ZT1lLl9jaGFydEluc3RhbmNlLmdldEVsZW1lbnRzQXRFdmVudEZvck1vZGUodCxhLm1vZGUsYSksaT0hcy5hcnJheUVxdWFscyhlLl9hY3RpdmUsZS5fbGFzdEFjdGl2ZSksZS5fbGFzdEFjdGl2ZT1lLl9hY3RpdmUsYS5lbmFibGVkfHxhLmN1c3RvbSl7ZS5fZXZlbnRQb3NpdGlvbj1zLmdldFJlbGF0aXZlUG9zaXRpb24odCxlLl9jaGFydCk7dmFyIG49ZS5fbW9kZWw7ZS51cGRhdGUoITApLGUucGl2b3QoKSxpfD1uLnghPT1lLl9tb2RlbC54fHxuLnkhPT1lLl9tb2RlbC55fXJldHVybiBpfX0pLHQuVG9vbHRpcC5wb3NpdGlvbmVycz17YXZlcmFnZTpmdW5jdGlvbih0KXtpZighdC5sZW5ndGgpcmV0dXJuITE7dmFyIGUsYSxpPTAsbj0wLG89MDtmb3IoZT0wLGE9dC5sZW5ndGg7YT5lOysrZSl7dmFyIHI9dFtlXTtpZihyJiZyLmhhc1ZhbHVlKCkpe3ZhciBsPXIudG9vbHRpcFBvc2l0aW9uKCk7aSs9bC54LG4rPWwueSwrK299fXJldHVybnt4Ok1hdGgucm91bmQoaS9vKSx5Ok1hdGgucm91bmQobi9vKX19LG5lYXJlc3Q6ZnVuY3Rpb24odCxlKXt2YXIgYSxpLG4sbz1lLngscj1lLnksbD1OdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7Zm9yKGk9MCxuPXQubGVuZ3RoO24+aTsrK2kpe3ZhciBkPXRbaV07aWYoZCYmZC5oYXNWYWx1ZSgpKXt2YXIgdT1kLmdldENlbnRlclBvaW50KCksYz1zLmRpc3RhbmNlQmV0d2VlblBvaW50cyhlLHUpO2w+YyYmKGw9YyxhPWQpfX1pZihhKXt2YXIgaD1hLnRvb2x0aXBQb3NpdGlvbigpO289aC54LHI9aC55fXJldHVybnt4Om8seTpyfX19fX0se31dLDM3OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsO2EuZWxlbWVudHMuYXJjPXtiYWNrZ3JvdW5kQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyQ29sb3I6XCIjZmZmXCIsYm9yZGVyV2lkdGg6Mn0sdC5lbGVtZW50cy5BcmM9dC5FbGVtZW50LmV4dGVuZCh7aW5MYWJlbFJhbmdlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLngsMik8TWF0aC5wb3coZS5yYWRpdXMrZS5ob3ZlclJhZGl1cywyKTohMX0saW5SYW5nZTpmdW5jdGlvbih0LGEpe3ZhciBpPXRoaXMuX3ZpZXc7aWYoaSl7Zm9yKHZhciBuPWUuZ2V0QW5nbGVGcm9tUG9pbnQoaSx7eDp0LHk6YX0pLG89bi5hbmdsZSxyPW4uZGlzdGFuY2UsbD1pLnN0YXJ0QW5nbGUscz1pLmVuZEFuZ2xlO2w+czspcys9MipNYXRoLlBJO2Zvcig7bz5zOylvLT0yKk1hdGguUEk7Zm9yKDtsPm87KW8rPTIqTWF0aC5QSTt2YXIgZD1vPj1sJiZzPj1vLHU9cj49aS5pbm5lclJhZGl1cyYmcjw9aS5vdXRlclJhZGl1cztyZXR1cm4gZCYmdX1yZXR1cm4hMX0sZ2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3LGU9KHQuc3RhcnRBbmdsZSt0LmVuZEFuZ2xlKS8yLGE9KHQuaW5uZXJSYWRpdXMrdC5vdXRlclJhZGl1cykvMjtyZXR1cm57eDp0LngrTWF0aC5jb3MoZSkqYSx5OnQueStNYXRoLnNpbihlKSphfX0sZ2V0QXJlYTpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIE1hdGguUEkqKCh0LmVuZEFuZ2xlLXQuc3RhcnRBbmdsZSkvKDIqTWF0aC5QSSkpKihNYXRoLnBvdyh0Lm91dGVyUmFkaXVzLDIpLU1hdGgucG93KHQuaW5uZXJSYWRpdXMsMikpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3LGU9dC5zdGFydEFuZ2xlKyh0LmVuZEFuZ2xlLXQuc3RhcnRBbmdsZSkvMixhPSh0Lm91dGVyUmFkaXVzLXQuaW5uZXJSYWRpdXMpLzIrdC5pbm5lclJhZGl1cztyZXR1cm57eDp0LngrTWF0aC5jb3MoZSkqYSx5OnQueStNYXRoLnNpbihlKSphfX0sZHJhdzpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX2NoYXJ0LmN0eCxlPXRoaXMuX3ZpZXcsYT1lLnN0YXJ0QW5nbGUsaT1lLmVuZEFuZ2xlO3QuYmVnaW5QYXRoKCksdC5hcmMoZS54LGUueSxlLm91dGVyUmFkaXVzLGEsaSksdC5hcmMoZS54LGUueSxlLmlubmVyUmFkaXVzLGksYSwhMCksdC5jbG9zZVBhdGgoKSx0LnN0cm9rZVN0eWxlPWUuYm9yZGVyQ29sb3IsdC5saW5lV2lkdGg9ZS5ib3JkZXJXaWR0aCx0LmZpbGxTdHlsZT1lLmJhY2tncm91bmRDb2xvcix0LmZpbGwoKSx0LmxpbmVKb2luPVwiYmV2ZWxcIixlLmJvcmRlcldpZHRoJiZ0LnN0cm9rZSgpfX0pfX0se31dLDM4OltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXQuZGVmYXVsdHMuZ2xvYmFsO3QuZGVmYXVsdHMuZ2xvYmFsLmVsZW1lbnRzLmxpbmU9e3RlbnNpb246LjQsYmFja2dyb3VuZENvbG9yOmEuZGVmYXVsdENvbG9yLGJvcmRlcldpZHRoOjMsYm9yZGVyQ29sb3I6YS5kZWZhdWx0Q29sb3IsYm9yZGVyQ2FwU3R5bGU6XCJidXR0XCIsYm9yZGVyRGFzaDpbXSxib3JkZXJEYXNoT2Zmc2V0OjAsYm9yZGVySm9pblN0eWxlOlwibWl0ZXJcIixjYXBCZXppZXJQb2ludHM6ITAsZmlsbDohMH0sdC5lbGVtZW50cy5MaW5lPXQuRWxlbWVudC5leHRlbmQoe2RyYXc6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQsZSl7dmFyIGE9ZS5fdmlldztlLl92aWV3LnN0ZXBwZWRMaW5lPT09ITA/KHMubGluZVRvKGEueCx0Ll92aWV3LnkpLHMubGluZVRvKGEueCxhLnkpKTowPT09ZS5fdmlldy50ZW5zaW9uP3MubGluZVRvKGEueCxhLnkpOnMuYmV6aWVyQ3VydmVUbyh0Ll92aWV3LmNvbnRyb2xQb2ludE5leHRYLHQuX3ZpZXcuY29udHJvbFBvaW50TmV4dFksYS5jb250cm9sUG9pbnRQcmV2aW91c1gsYS5jb250cm9sUG9pbnRQcmV2aW91c1ksYS54LGEueSl9dmFyIGk9dGhpcyxuPWkuX3ZpZXcsbz1uLnNwYW5HYXBzLHI9bi5zY2FsZVplcm8sbD1pLl9sb29wO2x8fChcInRvcFwiPT09bi5maWxsP3I9bi5zY2FsZVRvcDpcImJvdHRvbVwiPT09bi5maWxsJiYocj1uLnNjYWxlQm90dG9tKSk7dmFyIHM9aS5fY2hhcnQuY3R4O3Muc2F2ZSgpO3ZhciBkPWkuX2NoaWxkcmVuLnNsaWNlKCksdT0tMTtsJiZkLmxlbmd0aCYmZC5wdXNoKGRbMF0pO3ZhciBjLGgsZixnO2lmKGQubGVuZ3RoJiZuLmZpbGwpe2ZvcihzLmJlZ2luUGF0aCgpLGM9MDtjPGQubGVuZ3RoOysrYyloPWRbY10sZj1lLnByZXZpb3VzSXRlbShkLGMpLGc9aC5fdmlldywwPT09Yz8obD9zLm1vdmVUbyhyLngsci55KTpzLm1vdmVUbyhnLngsciksZy5za2lwfHwodT1jLHMubGluZVRvKGcueCxnLnkpKSk6KGY9LTE9PT11P2Y6ZFt1XSxnLnNraXA/b3x8dSE9PWMtMXx8KGw/cy5saW5lVG8oci54LHIueSk6cy5saW5lVG8oZi5fdmlldy54LHIpKToodSE9PWMtMT9vJiYtMSE9PXU/dChmLGgpOmw/cy5saW5lVG8oZy54LGcueSk6KHMubGluZVRvKGcueCxyKSxzLmxpbmVUbyhnLngsZy55KSk6dChmLGgpLHU9YykpO2x8fC0xPT09dXx8cy5saW5lVG8oZFt1XS5fdmlldy54LHIpLHMuZmlsbFN0eWxlPW4uYmFja2dyb3VuZENvbG9yfHxhLmRlZmF1bHRDb2xvcixzLmNsb3NlUGF0aCgpLHMuZmlsbCgpfXZhciBwPWEuZWxlbWVudHMubGluZTtmb3Iocy5saW5lQ2FwPW4uYm9yZGVyQ2FwU3R5bGV8fHAuYm9yZGVyQ2FwU3R5bGUscy5zZXRMaW5lRGFzaCYmcy5zZXRMaW5lRGFzaChuLmJvcmRlckRhc2h8fHAuYm9yZGVyRGFzaCkscy5saW5lRGFzaE9mZnNldD1uLmJvcmRlckRhc2hPZmZzZXR8fHAuYm9yZGVyRGFzaE9mZnNldCxzLmxpbmVKb2luPW4uYm9yZGVySm9pblN0eWxlfHxwLmJvcmRlckpvaW5TdHlsZSxzLmxpbmVXaWR0aD1uLmJvcmRlcldpZHRofHxwLmJvcmRlcldpZHRoLHMuc3Ryb2tlU3R5bGU9bi5ib3JkZXJDb2xvcnx8YS5kZWZhdWx0Q29sb3Iscy5iZWdpblBhdGgoKSx1PS0xLGM9MDtjPGQubGVuZ3RoOysrYyloPWRbY10sZj1lLnByZXZpb3VzSXRlbShkLGMpLGc9aC5fdmlldywwPT09Yz9nLnNraXB8fChzLm1vdmVUbyhnLngsZy55KSx1PWMpOihmPS0xPT09dT9mOmRbdV0sZy5za2lwfHwodSE9PWMtMSYmIW98fC0xPT09dT9zLm1vdmVUbyhnLngsZy55KTp0KGYsaCksdT1jKSk7cy5zdHJva2UoKSxzLnJlc3RvcmUoKX19KX19LHt9XSwzOTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQpe3ZhciBlPXRoaXMuX3ZpZXc7cmV0dXJuIGU/TWF0aC5wb3codC1lLngsMik8TWF0aC5wb3coZS5yYWRpdXMrZS5oaXRSYWRpdXMsMik6ITF9ZnVuY3Rpb24gYSh0KXt2YXIgZT10aGlzLl92aWV3O3JldHVybiBlP01hdGgucG93KHQtZS55LDIpPE1hdGgucG93KGUucmFkaXVzK2UuaGl0UmFkaXVzLDIpOiExfXZhciBpPXQuaGVscGVycyxuPXQuZGVmYXVsdHMuZ2xvYmFsLG89bi5kZWZhdWx0Q29sb3I7bi5lbGVtZW50cy5wb2ludD17cmFkaXVzOjMscG9pbnRTdHlsZTpcImNpcmNsZVwiLGJhY2tncm91bmRDb2xvcjpvLGJvcmRlcldpZHRoOjEsYm9yZGVyQ29sb3I6byxoaXRSYWRpdXM6MSxob3ZlclJhZGl1czo0LGhvdmVyQm9yZGVyV2lkdGg6MX0sdC5lbGVtZW50cy5Qb2ludD10LkVsZW1lbnQuZXh0ZW5kKHtpblJhbmdlOmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcy5fdmlldztyZXR1cm4gYT9NYXRoLnBvdyh0LWEueCwyKStNYXRoLnBvdyhlLWEueSwyKTxNYXRoLnBvdyhhLmhpdFJhZGl1cythLnJhZGl1cywyKTohMX0saW5MYWJlbFJhbmdlOmUsaW5YUmFuZ2U6ZSxpbllSYW5nZTphLGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5fdmlldztyZXR1cm57eDp0LngseTp0Lnl9fSxnZXRBcmVhOmZ1bmN0aW9uKCl7cmV0dXJuIE1hdGguUEkqTWF0aC5wb3codGhpcy5fdmlldy5yYWRpdXMsMil9LHRvb2x0aXBQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJue3g6dC54LHk6dC55LHBhZGRpbmc6dC5yYWRpdXMrdC5ib3JkZXJXaWR0aH19LGRyYXc6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl92aWV3LGE9dGhpcy5fY2hhcnQuY3R4LHI9ZS5wb2ludFN0eWxlLGw9ZS5yYWRpdXMscz1lLngsZD1lLnk7ZS5za2lwfHwoYS5zdHJva2VTdHlsZT1lLmJvcmRlckNvbG9yfHxvLGEubGluZVdpZHRoPWkuZ2V0VmFsdWVPckRlZmF1bHQoZS5ib3JkZXJXaWR0aCxuLmVsZW1lbnRzLnBvaW50LmJvcmRlcldpZHRoKSxhLmZpbGxTdHlsZT1lLmJhY2tncm91bmRDb2xvcnx8byx0LmNhbnZhc0hlbHBlcnMuZHJhd1BvaW50KGEscixsLHMsZCkpfX0pfX0se31dLDQwOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIHZvaWQgMCE9PXQuX3ZpZXcud2lkdGh9ZnVuY3Rpb24gYSh0KXt2YXIgYSxpLG4sbyxyPXQuX3ZpZXc7aWYoZSh0KSl7dmFyIGw9ci53aWR0aC8yO2E9ci54LWwsaT1yLngrbCxuPU1hdGgubWluKHIueSxyLmJhc2UpLG89TWF0aC5tYXgoci55LHIuYmFzZSl9ZWxzZXt2YXIgcz1yLmhlaWdodC8yO2E9TWF0aC5taW4oci54LHIuYmFzZSksaT1NYXRoLm1heChyLngsci5iYXNlKSxuPXIueS1zLG89ci55K3N9cmV0dXJue2xlZnQ6YSx0b3A6bixyaWdodDppLGJvdHRvbTpvfX12YXIgaT10LmRlZmF1bHRzLmdsb2JhbDtpLmVsZW1lbnRzLnJlY3RhbmdsZT17YmFja2dyb3VuZENvbG9yOmkuZGVmYXVsdENvbG9yLGJvcmRlcldpZHRoOjAsYm9yZGVyQ29sb3I6aS5kZWZhdWx0Q29sb3IsYm9yZGVyU2tpcHBlZDpcImJvdHRvbVwifSx0LmVsZW1lbnRzLlJlY3RhbmdsZT10LkVsZW1lbnQuZXh0ZW5kKHtkcmF3OmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gc1sodSt0KSU0XX12YXIgZT10aGlzLl9jaGFydC5jdHgsYT10aGlzLl92aWV3LGk9YS53aWR0aC8yLG49YS54LWksbz1hLngraSxyPWEuYmFzZS0oYS5iYXNlLWEueSksbD1hLmJvcmRlcldpZHRoLzI7YS5ib3JkZXJXaWR0aCYmKG4rPWwsby09bCxyKz1sKSxlLmJlZ2luUGF0aCgpLGUuZmlsbFN0eWxlPWEuYmFja2dyb3VuZENvbG9yLGUuc3Ryb2tlU3R5bGU9YS5ib3JkZXJDb2xvcixlLmxpbmVXaWR0aD1hLmJvcmRlcldpZHRoO3ZhciBzPVtbbixhLmJhc2VdLFtuLHJdLFtvLHJdLFtvLGEuYmFzZV1dLGQ9W1wiYm90dG9tXCIsXCJsZWZ0XCIsXCJ0b3BcIixcInJpZ2h0XCJdLHU9ZC5pbmRleE9mKGEuYm9yZGVyU2tpcHBlZCwwKTstMT09PXUmJih1PTApO3ZhciBjPXQoMCk7ZS5tb3ZlVG8oY1swXSxjWzFdKTtmb3IodmFyIGg9MTs0Pmg7aCsrKWM9dChoKSxlLmxpbmVUbyhjWzBdLGNbMV0pO2UuZmlsbCgpLGEuYm9yZGVyV2lkdGgmJmUuc3Ryb2tlKCl9LGhlaWdodDpmdW5jdGlvbigpe3ZhciB0PXRoaXMuX3ZpZXc7cmV0dXJuIHQuYmFzZS10Lnl9LGluUmFuZ2U6ZnVuY3Rpb24odCxlKXt2YXIgaT0hMTtpZih0aGlzLl92aWV3KXt2YXIgbj1hKHRoaXMpO2k9dD49bi5sZWZ0JiZ0PD1uLnJpZ2h0JiZlPj1uLnRvcCYmZTw9bi5ib3R0b219cmV0dXJuIGl9LGluTGFiZWxSYW5nZTpmdW5jdGlvbih0LGkpe3ZhciBuPXRoaXM7aWYoIW4uX3ZpZXcpcmV0dXJuITE7dmFyIG89ITEscj1hKG4pO3JldHVybiBvPWUobik/dD49ci5sZWZ0JiZ0PD1yLnJpZ2h0Omk+PXIudG9wJiZpPD1yLmJvdHRvbX0saW5YUmFuZ2U6ZnVuY3Rpb24odCl7dmFyIGU9YSh0aGlzKTtyZXR1cm4gdD49ZS5sZWZ0JiZ0PD1lLnJpZ2h0fSxpbllSYW5nZTpmdW5jdGlvbih0KXt2YXIgZT1hKHRoaXMpO3JldHVybiB0Pj1lLnRvcCYmdDw9ZS5ib3R0b219LGdldENlbnRlclBvaW50OmZ1bmN0aW9uKCl7dmFyIHQsYSxpPXRoaXMuX3ZpZXc7cmV0dXJuIGUodGhpcyk/KHQ9aS54LGE9KGkueStpLmJhc2UpLzIpOih0PShpLngraS5iYXNlKS8yLGE9aS55KSx7eDp0LHk6YX19LGdldEFyZWE6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybiB0LndpZHRoKk1hdGguYWJzKHQueS10LmJhc2UpfSx0b29sdGlwUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLl92aWV3O3JldHVybnt4OnQueCx5OnQueX19fSl9fSx7fV0sNDE6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3Bvc2l0aW9uOlwiYm90dG9tXCJ9LGk9dC5TY2FsZS5leHRlbmQoe2dldExhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXMuY2hhcnQuZGF0YTtyZXR1cm4odGhpcy5pc0hvcml6b250YWwoKT90LnhMYWJlbHM6dC55TGFiZWxzKXx8dC5sYWJlbHN9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGE9dC5nZXRMYWJlbHMoKTt0Lm1pbkluZGV4PTAsdC5tYXhJbmRleD1hLmxlbmd0aC0xO3ZhciBpO3ZvaWQgMCE9PXQub3B0aW9ucy50aWNrcy5taW4mJihpPWUuaW5kZXhPZihhLHQub3B0aW9ucy50aWNrcy5taW4pLHQubWluSW5kZXg9LTEhPT1pP2k6dC5taW5JbmRleCksdm9pZCAwIT09dC5vcHRpb25zLnRpY2tzLm1heCYmKGk9ZS5pbmRleE9mKGEsdC5vcHRpb25zLnRpY2tzLm1heCksdC5tYXhJbmRleD0tMSE9PWk/aTp0Lm1heEluZGV4KSx0Lm1pbj1hW3QubWluSW5kZXhdLHQubWF4PWFbdC5tYXhJbmRleF19LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9dC5nZXRMYWJlbHMoKTt0LnRpY2tzPTA9PT10Lm1pbkluZGV4JiZ0Lm1heEluZGV4PT09ZS5sZW5ndGgtMT9lOmUuc2xpY2UodC5taW5JbmRleCx0Lm1heEluZGV4KzEpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7dmFyIGE9dGhpcyxpPWEuY2hhcnQuZGF0YSxuPWEuaXNIb3Jpem9udGFsKCk7cmV0dXJuIGkueExhYmVscyYmbnx8aS55TGFiZWxzJiYhbj9hLmdldFJpZ2h0VmFsdWUoaS5kYXRhc2V0c1tlXS5kYXRhW3RdKTphLnRpY2tzW3RdfSxnZXRQaXhlbEZvclZhbHVlOmZ1bmN0aW9uKHQsZSxhLGkpe3ZhciBuPXRoaXMsbz1NYXRoLm1heChuLm1heEluZGV4KzEtbi5taW5JbmRleC0obi5vcHRpb25zLmdyaWRMaW5lcy5vZmZzZXRHcmlkTGluZXM/MDoxKSwxKTtpZih2b2lkIDAhPT10JiZpc05hTihlKSl7dmFyIHI9bi5nZXRMYWJlbHMoKSxsPXIuaW5kZXhPZih0KTtlPS0xIT09bD9sOmV9aWYobi5pc0hvcml6b250YWwoKSl7dmFyIHM9bi53aWR0aC0obi5wYWRkaW5nTGVmdCtuLnBhZGRpbmdSaWdodCksZD1zL28sdT1kKihlLW4ubWluSW5kZXgpK24ucGFkZGluZ0xlZnQ7cmV0dXJuKG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiZpfHxuLm1heEluZGV4PT09bi5taW5JbmRleCYmaSkmJih1Kz1kLzIpLFxubi5sZWZ0K01hdGgucm91bmQodSl9dmFyIGM9bi5oZWlnaHQtKG4ucGFkZGluZ1RvcCtuLnBhZGRpbmdCb3R0b20pLGg9Yy9vLGY9aCooZS1uLm1pbkluZGV4KStuLnBhZGRpbmdUb3A7cmV0dXJuIG4ub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiZpJiYoZis9aC8yKSxuLnRvcCtNYXRoLnJvdW5kKGYpfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja3NbdF0sdCt0aGlzLm1pbkluZGV4LG51bGwsZSl9LGdldFZhbHVlRm9yUGl4ZWw6ZnVuY3Rpb24odCl7dmFyIGUsYT10aGlzLGk9TWF0aC5tYXgoYS50aWNrcy5sZW5ndGgtKGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzPzA6MSksMSksbj1hLmlzSG9yaXpvbnRhbCgpLG89bj9hLndpZHRoLShhLnBhZGRpbmdMZWZ0K2EucGFkZGluZ1JpZ2h0KTphLmhlaWdodC0oYS5wYWRkaW5nVG9wK2EucGFkZGluZ0JvdHRvbSkscj1vL2k7cmV0dXJuIHQtPW4/YS5sZWZ0OmEudG9wLGEub3B0aW9ucy5ncmlkTGluZXMub2Zmc2V0R3JpZExpbmVzJiYodC09ci8yKSx0LT1uP2EucGFkZGluZ0xlZnQ6YS5wYWRkaW5nVG9wLGU9MD49dD8wOk1hdGgucm91bmQodC9yKX0sZ2V0QmFzZVBpeGVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYm90dG9tfX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwiY2F0ZWdvcnlcIixpLGEpfX0se31dLDQyOltmdW5jdGlvbih0LGUsYSl7XCJ1c2Ugc3RyaWN0XCI7ZS5leHBvcnRzPWZ1bmN0aW9uKHQpe3ZhciBlPXQuaGVscGVycyxhPXtwb3NpdGlvbjpcImxlZnRcIix0aWNrczp7Y2FsbGJhY2s6dC5UaWNrcy5mb3JtYXR0ZXJzLmxpbmVhcn19LGk9dC5MaW5lYXJTY2FsZUJhc2UuZXh0ZW5kKHtkZXRlcm1pbmVEYXRhTGltaXRzOmZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtyZXR1cm4gbD90LnhBeGlzSUQ9PT1hLmlkOnQueUF4aXNJRD09PWEuaWR9dmFyIGE9dGhpcyxpPWEub3B0aW9ucyxuPWEuY2hhcnQsbz1uLmRhdGEscj1vLmRhdGFzZXRzLGw9YS5pc0hvcml6b250YWwoKTtpZihhLm1pbj1udWxsLGEubWF4PW51bGwsaS5zdGFja2VkKXt2YXIgcz17fTtlLmVhY2gocixmdW5jdGlvbihvLHIpe3ZhciBsPW4uZ2V0RGF0YXNldE1ldGEocik7dm9pZCAwPT09c1tsLnR5cGVdJiYoc1tsLnR5cGVdPXtwb3NpdGl2ZVZhbHVlczpbXSxuZWdhdGl2ZVZhbHVlczpbXX0pO3ZhciBkPXNbbC50eXBlXS5wb3NpdGl2ZVZhbHVlcyx1PXNbbC50eXBlXS5uZWdhdGl2ZVZhbHVlcztuLmlzRGF0YXNldFZpc2libGUocikmJnQobCkmJmUuZWFjaChvLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgbj0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKG4pfHxsLmRhdGFbZV0uaGlkZGVufHwoZFtlXT1kW2VdfHwwLHVbZV09dVtlXXx8MCxpLnJlbGF0aXZlUG9pbnRzP2RbZV09MTAwOjA+bj91W2VdKz1uOmRbZV0rPW4pfSl9KSxlLmVhY2gocyxmdW5jdGlvbih0KXt2YXIgaT10LnBvc2l0aXZlVmFsdWVzLmNvbmNhdCh0Lm5lZ2F0aXZlVmFsdWVzKSxuPWUubWluKGkpLG89ZS5tYXgoaSk7YS5taW49bnVsbD09PWEubWluP246TWF0aC5taW4oYS5taW4sbiksYS5tYXg9bnVsbD09PWEubWF4P286TWF0aC5tYXgoYS5tYXgsbyl9KX1lbHNlIGUuZWFjaChyLGZ1bmN0aW9uKGksbyl7dmFyIHI9bi5nZXREYXRhc2V0TWV0YShvKTtuLmlzRGF0YXNldFZpc2libGUobykmJnQocikmJmUuZWFjaChpLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgaT0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKGkpfHxyLmRhdGFbZV0uaGlkZGVufHwobnVsbD09PWEubWluP2EubWluPWk6aTxhLm1pbiYmKGEubWluPWkpLG51bGw9PT1hLm1heD9hLm1heD1pOmk+YS5tYXgmJihhLm1heD1pKSl9KX0pO3RoaXMuaGFuZGxlVGlja1JhbmdlT3B0aW9ucygpfSxnZXRUaWNrTGltaXQ6ZnVuY3Rpb24oKXt2YXIgYSxpPXRoaXMsbj1pLm9wdGlvbnMudGlja3M7aWYoaS5pc0hvcml6b250YWwoKSlhPU1hdGgubWluKG4ubWF4VGlja3NMaW1pdD9uLm1heFRpY2tzTGltaXQ6MTEsTWF0aC5jZWlsKGkud2lkdGgvNTApKTtlbHNle3ZhciBvPWUuZ2V0VmFsdWVPckRlZmF1bHQobi5mb250U2l6ZSx0LmRlZmF1bHRzLmdsb2JhbC5kZWZhdWx0Rm9udFNpemUpO2E9TWF0aC5taW4obi5tYXhUaWNrc0xpbWl0P24ubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwoaS5oZWlnaHQvKDIqbykpKX1yZXR1cm4gYX0saGFuZGxlRGlyZWN0aW9uYWxDaGFuZ2VzOmZ1bmN0aW9uKCl7dGhpcy5pc0hvcml6b250YWwoKXx8dGhpcy50aWNrcy5yZXZlcnNlKCl9LGdldExhYmVsRm9ySW5kZXg6ZnVuY3Rpb24odCxlKXtyZXR1cm4rdGhpcy5nZXRSaWdodFZhbHVlKHRoaXMuY2hhcnQuZGF0YS5kYXRhc2V0c1tlXS5kYXRhW3RdKX0sZ2V0UGl4ZWxGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgZSxhLGk9dGhpcyxuPWkucGFkZGluZ0xlZnQsbz1pLnBhZGRpbmdCb3R0b20scj1pLnN0YXJ0LGw9K2kuZ2V0UmlnaHRWYWx1ZSh0KSxzPWkuZW5kLXI7cmV0dXJuIGkuaXNIb3Jpem9udGFsKCk/KGE9aS53aWR0aC0obitpLnBhZGRpbmdSaWdodCksZT1pLmxlZnQrYS9zKihsLXIpLE1hdGgucm91bmQoZStuKSk6KGE9aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtvKSxlPWkuYm90dG9tLW8tYS9zKihsLXIpLE1hdGgucm91bmQoZSkpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmlzSG9yaXpvbnRhbCgpLGk9ZS5wYWRkaW5nTGVmdCxuPWUucGFkZGluZ0JvdHRvbSxvPWE/ZS53aWR0aC0oaStlLnBhZGRpbmdSaWdodCk6ZS5oZWlnaHQtKGUucGFkZGluZ1RvcCtuKSxyPShhP3QtZS5sZWZ0LWk6ZS5ib3R0b20tbi10KS9vO3JldHVybiBlLnN0YXJ0KyhlLmVuZC1lLnN0YXJ0KSpyfSxnZXRQaXhlbEZvclRpY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMuZ2V0UGl4ZWxGb3JWYWx1ZSh0aGlzLnRpY2tzQXNOdW1iZXJzW3RdKX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImxpbmVhclwiLGksYSl9fSx7fV0sNDM6W2Z1bmN0aW9uKHQsZSxhKXtcInVzZSBzdHJpY3RcIjtlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9ZS5ub29wO3QuTGluZWFyU2NhbGVCYXNlPXQuU2NhbGUuZXh0ZW5kKHtoYW5kbGVUaWNrUmFuZ2VPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxhPXQub3B0aW9ucyxpPWEudGlja3M7aWYoaS5iZWdpbkF0WmVybyl7dmFyIG49ZS5zaWduKHQubWluKSxvPWUuc2lnbih0Lm1heCk7MD5uJiYwPm8/dC5tYXg9MDpuPjAmJm8+MCYmKHQubWluPTApfXZvaWQgMCE9PWkubWluP3QubWluPWkubWluOnZvaWQgMCE9PWkuc3VnZ2VzdGVkTWluJiYodC5taW49TWF0aC5taW4odC5taW4saS5zdWdnZXN0ZWRNaW4pKSx2b2lkIDAhPT1pLm1heD90Lm1heD1pLm1heDp2b2lkIDAhPT1pLnN1Z2dlc3RlZE1heCYmKHQubWF4PU1hdGgubWF4KHQubWF4LGkuc3VnZ2VzdGVkTWF4KSksdC5taW49PT10Lm1heCYmKHQubWF4KyssaS5iZWdpbkF0WmVyb3x8dC5taW4tLSl9LGdldFRpY2tMaW1pdDphLGhhbmRsZURpcmVjdGlvbmFsQ2hhbmdlczphLGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPWEuZ2V0VGlja0xpbWl0KCk7bz1NYXRoLm1heCgyLG8pO3ZhciByPXttYXhUaWNrczpvLG1pbjpuLm1pbixtYXg6bi5tYXgsc3RlcFNpemU6ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZpeGVkU3RlcFNpemUsbi5zdGVwU2l6ZSl9LGw9YS50aWNrcz10LlRpY2tzLmdlbmVyYXRvcnMubGluZWFyKHIsYSk7YS5oYW5kbGVEaXJlY3Rpb25hbENoYW5nZXMoKSxhLm1heD1lLm1heChsKSxhLm1pbj1lLm1pbihsKSxuLnJldmVyc2U/KGwucmV2ZXJzZSgpLGEuc3RhcnQ9YS5tYXgsYS5lbmQ9YS5taW4pOihhLnN0YXJ0PWEubWluLGEuZW5kPWEubWF4KX0sY29udmVydFRpY2tzVG9MYWJlbHM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2UudGlja3NBc051bWJlcnM9ZS50aWNrcy5zbGljZSgpLGUuemVyb0xpbmVJbmRleD1lLnRpY2tzLmluZGV4T2YoMCksdC5TY2FsZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbChlKX19KX19LHt9XSw0NDpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT17cG9zaXRpb246XCJsZWZ0XCIsdGlja3M6e2NhbGxiYWNrOnQuVGlja3MuZm9ybWF0dGVycy5sb2dhcml0aG1pY319LGk9dC5TY2FsZS5leHRlbmQoe2RldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3JldHVybiBkP3QueEF4aXNJRD09PWEuaWQ6dC55QXhpc0lEPT09YS5pZH12YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPWEuY2hhcnQscj1vLmRhdGEsbD1yLmRhdGFzZXRzLHM9ZS5nZXRWYWx1ZU9yRGVmYXVsdCxkPWEuaXNIb3Jpem9udGFsKCk7aWYoYS5taW49bnVsbCxhLm1heD1udWxsLGEubWluTm90WmVybz1udWxsLGkuc3RhY2tlZCl7dmFyIHU9e307ZS5lYWNoKGwsZnVuY3Rpb24obixyKXt2YXIgbD1vLmdldERhdGFzZXRNZXRhKHIpO28uaXNEYXRhc2V0VmlzaWJsZShyKSYmdChsKSYmKHZvaWQgMD09PXVbbC50eXBlXSYmKHVbbC50eXBlXT1bXSksZS5lYWNoKG4uZGF0YSxmdW5jdGlvbih0LGUpe3ZhciBuPXVbbC50eXBlXSxvPSthLmdldFJpZ2h0VmFsdWUodCk7aXNOYU4obyl8fGwuZGF0YVtlXS5oaWRkZW58fChuW2VdPW5bZV18fDAsaS5yZWxhdGl2ZVBvaW50cz9uW2VdPTEwMDpuW2VdKz1vKX0pKX0pLGUuZWFjaCh1LGZ1bmN0aW9uKHQpe3ZhciBpPWUubWluKHQpLG49ZS5tYXgodCk7YS5taW49bnVsbD09PWEubWluP2k6TWF0aC5taW4oYS5taW4saSksYS5tYXg9bnVsbD09PWEubWF4P246TWF0aC5tYXgoYS5tYXgsbil9KX1lbHNlIGUuZWFjaChsLGZ1bmN0aW9uKGksbil7dmFyIHI9by5nZXREYXRhc2V0TWV0YShuKTtvLmlzRGF0YXNldFZpc2libGUobikmJnQocikmJmUuZWFjaChpLmRhdGEsZnVuY3Rpb24odCxlKXt2YXIgaT0rYS5nZXRSaWdodFZhbHVlKHQpO2lzTmFOKGkpfHxyLmRhdGFbZV0uaGlkZGVufHwobnVsbD09PWEubWluP2EubWluPWk6aTxhLm1pbiYmKGEubWluPWkpLG51bGw9PT1hLm1heD9hLm1heD1pOmk+YS5tYXgmJihhLm1heD1pKSwwIT09aSYmKG51bGw9PT1hLm1pbk5vdFplcm98fGk8YS5taW5Ob3RaZXJvKSYmKGEubWluTm90WmVybz1pKSl9KX0pO2EubWluPXMobi5taW4sYS5taW4pLGEubWF4PXMobi5tYXgsYS5tYXgpLGEubWluPT09YS5tYXgmJigwIT09YS5taW4mJm51bGwhPT1hLm1pbj8oYS5taW49TWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWluKSktMSksYS5tYXg9TWF0aC5wb3coMTAsTWF0aC5mbG9vcihlLmxvZzEwKGEubWF4KSkrMSkpOihhLm1pbj0xLGEubWF4PTEwKSl9LGJ1aWxkVGlja3M6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGk9YS5vcHRpb25zLG49aS50aWNrcyxvPXttaW46bi5taW4sbWF4Om4ubWF4fSxyPWEudGlja3M9dC5UaWNrcy5nZW5lcmF0b3JzLmxvZ2FyaXRobWljKG8sYSk7YS5pc0hvcml6b250YWwoKXx8ci5yZXZlcnNlKCksYS5tYXg9ZS5tYXgociksYS5taW49ZS5taW4ociksbi5yZXZlcnNlPyhyLnJldmVyc2UoKSxhLnN0YXJ0PWEubWF4LGEuZW5kPWEubWluKTooYS5zdGFydD1hLm1pbixhLmVuZD1hLm1heCl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dGhpcy50aWNrVmFsdWVzPXRoaXMudGlja3Muc2xpY2UoKSx0LlNjYWxlLnByb3RvdHlwZS5jb252ZXJ0VGlja3NUb0xhYmVscy5jYWxsKHRoaXMpfSxnZXRMYWJlbEZvckluZGV4OmZ1bmN0aW9uKHQsZSl7cmV0dXJuK3RoaXMuZ2V0UmlnaHRWYWx1ZSh0aGlzLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSl9LGdldFBpeGVsRm9yVGljazpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5nZXRQaXhlbEZvclZhbHVlKHRoaXMudGlja1ZhbHVlc1t0XSl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCl7dmFyIGEsaSxuLG89dGhpcyxyPW8uc3RhcnQsbD0rby5nZXRSaWdodFZhbHVlKHQpLHM9by5wYWRkaW5nVG9wLGQ9by5wYWRkaW5nQm90dG9tLHU9by5wYWRkaW5nTGVmdCxjPW8ub3B0aW9ucyxoPWMudGlja3M7cmV0dXJuIG8uaXNIb3Jpem9udGFsKCk/KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChyKSwwPT09bD9pPW8ubGVmdCt1OihhPW8ud2lkdGgtKHUrby5wYWRkaW5nUmlnaHQpLGk9by5sZWZ0K2EvbiooZS5sb2cxMChsKS1lLmxvZzEwKHIpKSxpKz11KSk6KGE9by5oZWlnaHQtKHMrZCksMCE9PXJ8fGgucmV2ZXJzZT8wPT09by5lbmQmJmgucmV2ZXJzZT8obj1lLmxvZzEwKG8uc3RhcnQpLWUubG9nMTAoby5taW5Ob3RaZXJvKSxpPWw9PT1vLmVuZD9vLnRvcCtzOmw9PT1vLm1pbk5vdFplcm8/by50b3ArcysuMDIqYTpvLnRvcCtzKy4wMiphKy45OCphL24qKGUubG9nMTAobCktZS5sb2cxMChvLm1pbk5vdFplcm8pKSk6KG49ZS5sb2cxMChvLmVuZCktZS5sb2cxMChyKSxhPW8uaGVpZ2h0LShzK2QpLGk9by5ib3R0b20tZC1hL24qKGUubG9nMTAobCktZS5sb2cxMChyKSkpOihuPWUubG9nMTAoby5lbmQpLWUubG9nMTAoby5taW5Ob3RaZXJvKSxpPWw9PT1yP28uYm90dG9tLWQ6bD09PW8ubWluTm90WmVybz9vLmJvdHRvbS1kLS4wMiphOm8uYm90dG9tLWQtLjAyKmEtLjk4KmEvbiooZS5sb2cxMChsKS1lLmxvZzEwKG8ubWluTm90WmVybykpKSksaX0sZ2V0VmFsdWVGb3JQaXhlbDpmdW5jdGlvbih0KXt2YXIgYSxpLG49dGhpcyxvPWUubG9nMTAobi5lbmQpLWUubG9nMTAobi5zdGFydCk7cmV0dXJuIG4uaXNIb3Jpem9udGFsKCk/KGk9bi53aWR0aC0obi5wYWRkaW5nTGVmdCtuLnBhZGRpbmdSaWdodCksYT1uLnN0YXJ0Kk1hdGgucG93KDEwLCh0LW4ubGVmdC1uLnBhZGRpbmdMZWZ0KSpvL2kpKTooaT1uLmhlaWdodC0obi5wYWRkaW5nVG9wK24ucGFkZGluZ0JvdHRvbSksYT1NYXRoLnBvdygxMCwobi5ib3R0b20tbi5wYWRkaW5nQm90dG9tLXQpKm8vaSkvbi5zdGFydCksYX19KTt0LnNjYWxlU2VydmljZS5yZWdpc3RlclNjYWxlVHlwZShcImxvZ2FyaXRobWljXCIsaSxhKX19LHt9XSw0NTpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO2UuZXhwb3J0cz1mdW5jdGlvbih0KXt2YXIgZT10LmhlbHBlcnMsYT10LmRlZmF1bHRzLmdsb2JhbCxpPXtkaXNwbGF5OiEwLGFuaW1hdGU6ITAsbGluZUFyYzohMSxwb3NpdGlvbjpcImNoYXJ0QXJlYVwiLGFuZ2xlTGluZXM6e2Rpc3BsYXk6ITAsY29sb3I6XCJyZ2JhKDAsIDAsIDAsIDAuMSlcIixsaW5lV2lkdGg6MX0sdGlja3M6e3Nob3dMYWJlbEJhY2tkcm9wOiEwLGJhY2tkcm9wQ29sb3I6XCJyZ2JhKDI1NSwyNTUsMjU1LDAuNzUpXCIsYmFja2Ryb3BQYWRkaW5nWToyLGJhY2tkcm9wUGFkZGluZ1g6MixjYWxsYmFjazp0LlRpY2tzLmZvcm1hdHRlcnMubGluZWFyfSxwb2ludExhYmVsczp7Zm9udFNpemU6MTAsY2FsbGJhY2s6ZnVuY3Rpb24odCl7cmV0dXJuIHR9fX0sbj10LkxpbmVhclNjYWxlQmFzZS5leHRlbmQoe2dldFZhbHVlQ291bnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFydC5kYXRhLmxhYmVscy5sZW5ndGh9LHNldERpbWVuc2lvbnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5vcHRpb25zLG49aS50aWNrczt0LndpZHRoPXQubWF4V2lkdGgsdC5oZWlnaHQ9dC5tYXhIZWlnaHQsdC54Q2VudGVyPU1hdGgucm91bmQodC53aWR0aC8yKSx0LnlDZW50ZXI9TWF0aC5yb3VuZCh0LmhlaWdodC8yKTt2YXIgbz1lLm1pbihbdC5oZWlnaHQsdC53aWR0aF0pLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChuLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKTt0LmRyYXdpbmdBcmVhPWkuZGlzcGxheT9vLzItKHIvMituLmJhY2tkcm9wUGFkZGluZ1kpOm8vMn0sZGV0ZXJtaW5lRGF0YUxpbWl0czpmdW5jdGlvbigpe3ZhciB0PXRoaXMsYT10LmNoYXJ0O3QubWluPW51bGwsdC5tYXg9bnVsbCxlLmVhY2goYS5kYXRhLmRhdGFzZXRzLGZ1bmN0aW9uKGksbil7aWYoYS5pc0RhdGFzZXRWaXNpYmxlKG4pKXt2YXIgbz1hLmdldERhdGFzZXRNZXRhKG4pO2UuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSxhKXt2YXIgaT0rdC5nZXRSaWdodFZhbHVlKGUpO2lzTmFOKGkpfHxvLmRhdGFbYV0uaGlkZGVufHwobnVsbD09PXQubWluP3QubWluPWk6aTx0Lm1pbiYmKHQubWluPWkpLG51bGw9PT10Lm1heD90Lm1heD1pOmk+dC5tYXgmJih0Lm1heD1pKSl9KX19KSx0LmhhbmRsZVRpY2tSYW5nZU9wdGlvbnMoKX0sZ2V0VGlja0xpbWl0OmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zLnRpY2tzLGk9ZS5nZXRWYWx1ZU9yRGVmYXVsdCh0LmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKTtyZXR1cm4gTWF0aC5taW4odC5tYXhUaWNrc0xpbWl0P3QubWF4VGlja3NMaW1pdDoxMSxNYXRoLmNlaWwodGhpcy5kcmF3aW5nQXJlYS8oMS41KmkpKSl9LGNvbnZlcnRUaWNrc1RvTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0LkxpbmVhclNjYWxlQmFzZS5wcm90b3R5cGUuY29udmVydFRpY2tzVG9MYWJlbHMuY2FsbChlKSxlLnBvaW50TGFiZWxzPWUuY2hhcnQuZGF0YS5sYWJlbHMubWFwKGUub3B0aW9ucy5wb2ludExhYmVscy5jYWxsYmFjayxlKX0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3JldHVybit0aGlzLmdldFJpZ2h0VmFsdWUodGhpcy5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbdF0pfSxmaXQ6ZnVuY3Rpb24oKXt2YXIgdCxpLG4sbyxyLGwscyxkLHUsYyxoLGYsZz10aGlzLm9wdGlvbnMucG9pbnRMYWJlbHMscD1lLmdldFZhbHVlT3JEZWZhdWx0KGcuZm9udFNpemUsYS5kZWZhdWx0Rm9udFNpemUpLG09ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRTdHlsZSxhLmRlZmF1bHRGb250U3R5bGUpLGI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChnLmZvbnRGYW1pbHksYS5kZWZhdWx0Rm9udEZhbWlseSksdj1lLmZvbnRTdHJpbmcocCxtLGIpLHg9ZS5taW4oW3RoaXMuaGVpZ2h0LzItcC01LHRoaXMud2lkdGgvMl0pLHk9dGhpcy53aWR0aCxrPTA7Zm9yKHRoaXMuY3R4LmZvbnQ9dixpPTA7aTx0aGlzLmdldFZhbHVlQ291bnQoKTtpKyspe3Q9dGhpcy5nZXRQb2ludFBvc2l0aW9uKGkseCksbj10aGlzLmN0eC5tZWFzdXJlVGV4dCh0aGlzLnBvaW50TGFiZWxzW2ldP3RoaXMucG9pbnRMYWJlbHNbaV06XCJcIikud2lkdGgrNTt2YXIgUz10aGlzLmdldEluZGV4QW5nbGUoaSkrTWF0aC5QSS8yLHc9MzYwKlMvKDIqTWF0aC5QSSklMzYwOzA9PT13fHwxODA9PT13PyhvPW4vMix0Lngrbz55JiYoeT10LngrbyxyPWkpLHQueC1vPGsmJihrPXQueC1vLHM9aSkpOjE4MD53P3QueCtuPnkmJih5PXQueCtuLHI9aSk6dC54LW48ayYmKGs9dC54LW4scz1pKX11PWssYz1NYXRoLmNlaWwoeS10aGlzLndpZHRoKSxsPXRoaXMuZ2V0SW5kZXhBbmdsZShyKSxkPXRoaXMuZ2V0SW5kZXhBbmdsZShzKSxoPWMvTWF0aC5zaW4obCtNYXRoLlBJLzIpLGY9dS9NYXRoLnNpbihkK01hdGguUEkvMiksaD1lLmlzTnVtYmVyKGgpP2g6MCxmPWUuaXNOdW1iZXIoZik/ZjowLHRoaXMuZHJhd2luZ0FyZWE9TWF0aC5yb3VuZCh4LShmK2gpLzIpLHRoaXMuc2V0Q2VudGVyUG9pbnQoZixoKX0sc2V0Q2VudGVyUG9pbnQ6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS53aWR0aC1lLWEuZHJhd2luZ0FyZWEsbj10K2EuZHJhd2luZ0FyZWE7YS54Q2VudGVyPU1hdGgucm91bmQoKG4raSkvMithLmxlZnQpLGEueUNlbnRlcj1NYXRoLnJvdW5kKGEuaGVpZ2h0LzIrYS50b3ApfSxnZXRJbmRleEFuZ2xlOmZ1bmN0aW9uKHQpe3ZhciBlPTIqTWF0aC5QSS90aGlzLmdldFZhbHVlQ291bnQoKSxhPXRoaXMuY2hhcnQub3B0aW9ucyYmdGhpcy5jaGFydC5vcHRpb25zLnN0YXJ0QW5nbGU/dGhpcy5jaGFydC5vcHRpb25zLnN0YXJ0QW5nbGU6MCxpPWEqTWF0aC5QSSoyLzM2MDtyZXR1cm4gdCplLU1hdGguUEkvMitpfSxnZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZTpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKG51bGw9PT10KXJldHVybiAwO3ZhciBhPWUuZHJhd2luZ0FyZWEvKGUubWF4LWUubWluKTtyZXR1cm4gZS5vcHRpb25zLnJldmVyc2U/KGUubWF4LXQpKmE6KHQtZS5taW4pKmF9LGdldFBvaW50UG9zaXRpb246ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzLGk9YS5nZXRJbmRleEFuZ2xlKHQpO3JldHVybnt4Ok1hdGgucm91bmQoTWF0aC5jb3MoaSkqZSkrYS54Q2VudGVyLHk6TWF0aC5yb3VuZChNYXRoLnNpbihpKSplKSthLnlDZW50ZXJ9fSxnZXRQb2ludFBvc2l0aW9uRm9yVmFsdWU6ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5nZXRQb2ludFBvc2l0aW9uKHQsdGhpcy5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShlKSl9LGdldEJhc2VQb3NpdGlvbjpmdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10Lm1pbixhPXQubWF4O3JldHVybiB0LmdldFBvaW50UG9zaXRpb25Gb3JWYWx1ZSgwLHQuYmVnaW5BdFplcm8/MDowPmUmJjA+YT9hOmU+MCYmYT4wP2U6MCl9LGRyYXc6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGk9dC5vcHRpb25zLG49aS5ncmlkTGluZXMsbz1pLnRpY2tzLHI9aS5hbmdsZUxpbmVzLGw9aS5wb2ludExhYmVscyxzPWUuZ2V0VmFsdWVPckRlZmF1bHQ7aWYoaS5kaXNwbGF5KXt2YXIgZD10LmN0eCx1PXMoby5mb250U2l6ZSxhLmRlZmF1bHRGb250U2l6ZSksYz1zKG8uZm9udFN0eWxlLGEuZGVmYXVsdEZvbnRTdHlsZSksaD1zKG8uZm9udEZhbWlseSxhLmRlZmF1bHRGb250RmFtaWx5KSxmPWUuZm9udFN0cmluZyh1LGMsaCk7aWYoZS5lYWNoKHQudGlja3MsZnVuY3Rpb24ocixsKXtpZihsPjB8fGkucmV2ZXJzZSl7dmFyIGM9dC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZSh0LnRpY2tzQXNOdW1iZXJzW2xdKSxoPXQueUNlbnRlci1jO2lmKG4uZGlzcGxheSYmMCE9PWwpaWYoZC5zdHJva2VTdHlsZT1lLmdldFZhbHVlQXRJbmRleE9yRGVmYXVsdChuLmNvbG9yLGwtMSksZC5saW5lV2lkdGg9ZS5nZXRWYWx1ZUF0SW5kZXhPckRlZmF1bHQobi5saW5lV2lkdGgsbC0xKSxpLmxpbmVBcmMpZC5iZWdpblBhdGgoKSxkLmFyYyh0LnhDZW50ZXIsdC55Q2VudGVyLGMsMCwyKk1hdGguUEkpLGQuY2xvc2VQYXRoKCksZC5zdHJva2UoKTtlbHNle2QuYmVnaW5QYXRoKCk7Zm9yKHZhciBnPTA7Zzx0LmdldFZhbHVlQ291bnQoKTtnKyspe3ZhciBwPXQuZ2V0UG9pbnRQb3NpdGlvbihnLGMpOzA9PT1nP2QubW92ZVRvKHAueCxwLnkpOmQubGluZVRvKHAueCxwLnkpfWQuY2xvc2VQYXRoKCksZC5zdHJva2UoKX1pZihvLmRpc3BsYXkpe3ZhciBtPXMoby5mb250Q29sb3IsYS5kZWZhdWx0Rm9udENvbG9yKTtpZihkLmZvbnQ9ZixvLnNob3dMYWJlbEJhY2tkcm9wKXt2YXIgYj1kLm1lYXN1cmVUZXh0KHIpLndpZHRoO2QuZmlsbFN0eWxlPW8uYmFja2Ryb3BDb2xvcixkLmZpbGxSZWN0KHQueENlbnRlci1iLzItby5iYWNrZHJvcFBhZGRpbmdYLGgtdS8yLW8uYmFja2Ryb3BQYWRkaW5nWSxiKzIqby5iYWNrZHJvcFBhZGRpbmdYLHUrMipvLmJhY2tkcm9wUGFkZGluZ1kpfWQudGV4dEFsaWduPVwiY2VudGVyXCIsZC50ZXh0QmFzZWxpbmU9XCJtaWRkbGVcIixkLmZpbGxTdHlsZT1tLGQuZmlsbFRleHQocix0LnhDZW50ZXIsaCl9fX0pLCFpLmxpbmVBcmMpe2QubGluZVdpZHRoPXIubGluZVdpZHRoLGQuc3Ryb2tlU3R5bGU9ci5jb2xvcjtmb3IodmFyIGc9dC5nZXREaXN0YW5jZUZyb21DZW50ZXJGb3JWYWx1ZShpLnJldmVyc2U/dC5taW46dC5tYXgpLHA9cyhsLmZvbnRTaXplLGEuZGVmYXVsdEZvbnRTaXplKSxtPXMobC5mb250U3R5bGUsYS5kZWZhdWx0Rm9udFN0eWxlKSxiPXMobC5mb250RmFtaWx5LGEuZGVmYXVsdEZvbnRGYW1pbHkpLHY9ZS5mb250U3RyaW5nKHAsbSxiKSx4PXQuZ2V0VmFsdWVDb3VudCgpLTE7eD49MDt4LS0pe2lmKHIuZGlzcGxheSl7dmFyIHk9dC5nZXRQb2ludFBvc2l0aW9uKHgsZyk7ZC5iZWdpblBhdGgoKSxkLm1vdmVUbyh0LnhDZW50ZXIsdC55Q2VudGVyKSxkLmxpbmVUbyh5LngseS55KSxkLnN0cm9rZSgpLGQuY2xvc2VQYXRoKCl9dmFyIGs9dC5nZXRQb2ludFBvc2l0aW9uKHgsZys1KSxTPXMobC5mb250Q29sb3IsYS5kZWZhdWx0Rm9udENvbG9yKTtkLmZvbnQ9dixkLmZpbGxTdHlsZT1TO3ZhciB3PXQucG9pbnRMYWJlbHMsTT10aGlzLmdldEluZGV4QW5nbGUoeCkrTWF0aC5QSS8yLEM9MzYwKk0vKDIqTWF0aC5QSSklMzYwOzA9PT1DfHwxODA9PT1DP2QudGV4dEFsaWduPVwiY2VudGVyXCI6MTgwPkM/ZC50ZXh0QWxpZ249XCJsZWZ0XCI6ZC50ZXh0QWxpZ249XCJyaWdodFwiLDkwPT09Q3x8MjcwPT09Qz9kLnRleHRCYXNlbGluZT1cIm1pZGRsZVwiOkM+MjcwfHw5MD5DP2QudGV4dEJhc2VsaW5lPVwiYm90dG9tXCI6ZC50ZXh0QmFzZWxpbmU9XCJ0b3BcIixkLmZpbGxUZXh0KHdbeF0/d1t4XTpcIlwiLGsueCxrLnkpfX19fX0pO3Quc2NhbGVTZXJ2aWNlLnJlZ2lzdGVyU2NhbGVUeXBlKFwicmFkaWFsTGluZWFyXCIsbixpKX19LHt9XSw0NjpbZnVuY3Rpb24odCxlLGEpe1widXNlIHN0cmljdFwiO3ZhciBpPXQoMSk7aT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBpP2k6d2luZG93Lm1vbWVudCxlLmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU9dC5oZWxwZXJzLGE9e3VuaXRzOlt7bmFtZTpcIm1pbGxpc2Vjb25kXCIsc3RlcHM6WzEsMiw1LDEwLDIwLDUwLDEwMCwyNTAsNTAwXX0se25hbWU6XCJzZWNvbmRcIixzdGVwczpbMSwyLDUsMTAsMzBdfSx7bmFtZTpcIm1pbnV0ZVwiLHN0ZXBzOlsxLDIsNSwxMCwzMF19LHtuYW1lOlwiaG91clwiLHN0ZXBzOlsxLDIsMyw2LDEyXX0se25hbWU6XCJkYXlcIixzdGVwczpbMSwyLDVdfSx7bmFtZTpcIndlZWtcIixtYXhTdGVwOjR9LHtuYW1lOlwibW9udGhcIixtYXhTdGVwOjN9LHtuYW1lOlwicXVhcnRlclwiLG1heFN0ZXA6NH0se25hbWU6XCJ5ZWFyXCIsbWF4U3RlcDohMX1dfSxuPXtwb3NpdGlvbjpcImJvdHRvbVwiLHRpbWU6e3BhcnNlcjohMSxmb3JtYXQ6ITEsdW5pdDohMSxyb3VuZDohMSxkaXNwbGF5Rm9ybWF0OiExLGlzb1dlZWtkYXk6ITEsbWluVW5pdDpcIm1pbGxpc2Vjb25kXCIsZGlzcGxheUZvcm1hdHM6e21pbGxpc2Vjb25kOlwiaDptbTpzcy5TU1MgYVwiLHNlY29uZDpcImg6bW06c3MgYVwiLG1pbnV0ZTpcImg6bW06c3MgYVwiLGhvdXI6XCJNTU0gRCwgaEFcIixkYXk6XCJsbFwiLHdlZWs6XCJsbFwiLG1vbnRoOlwiTU1NIFlZWVlcIixxdWFydGVyOlwiW1FdUSAtIFlZWVlcIix5ZWFyOlwiWVlZWVwifX0sdGlja3M6e2F1dG9Ta2lwOiExfX0sbz10LlNjYWxlLmV4dGVuZCh7aW5pdGlhbGl6ZTpmdW5jdGlvbigpe2lmKCFpKXRocm93IG5ldyBFcnJvcihcIkNoYXJ0LmpzIC0gTW9tZW50LmpzIGNvdWxkIG5vdCBiZSBmb3VuZCEgWW91IG11c3QgaW5jbHVkZSBpdCBiZWZvcmUgQ2hhcnQuanMgdG8gdXNlIHRoZSB0aW1lIHNjYWxlLiBEb3dubG9hZCBhdCBodHRwczovL21vbWVudGpzLmNvbVwiKTt0LlNjYWxlLnByb3RvdHlwZS5pbml0aWFsaXplLmNhbGwodGhpcyl9LGdldExhYmVsTW9tZW50OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIG51bGw9PT10fHxudWxsPT09ZT9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB0aGlzLmxhYmVsTW9tZW50c1t0XT90aGlzLmxhYmVsTW9tZW50c1t0XVtlXTpudWxsfSxnZXRMYWJlbERpZmY6ZnVuY3Rpb24odCxlKXt2YXIgYT10aGlzO3JldHVybiBudWxsPT09dHx8bnVsbD09PWU/bnVsbDoodm9pZCAwPT09YS5sYWJlbERpZmZzJiZhLmJ1aWxkTGFiZWxEaWZmcygpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmxhYmVsRGlmZnNbdF0/YS5sYWJlbERpZmZzW3RdW2VdOm51bGwpfSxnZXRNb21lbnRTdGFydE9mOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7cmV0dXJuXCJ3ZWVrXCI9PT1lLm9wdGlvbnMudGltZS51bml0JiZlLm9wdGlvbnMudGltZS5pc29XZWVrZGF5IT09ITE/dC5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpLmlzb1dlZWtkYXkoZS5vcHRpb25zLnRpbWUuaXNvV2Vla2RheSk6dC5jbG9uZSgpLnN0YXJ0T2YoZS50aWNrVW5pdCl9LGRldGVybWluZURhdGFMaW1pdHM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGFiZWxNb21lbnRzPVtdO3ZhciBhPVtdO3QuY2hhcnQuZGF0YS5sYWJlbHMmJnQuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoPjA/KGUuZWFjaCh0LmNoYXJ0LmRhdGEubGFiZWxzLGZ1bmN0aW9uKGUpe3ZhciBpPXQucGFyc2VUaW1lKGUpO2kuaXNWYWxpZCgpJiYodC5vcHRpb25zLnRpbWUucm91bmQmJmkuc3RhcnRPZih0Lm9wdGlvbnMudGltZS5yb3VuZCksYS5wdXNoKGkpKX0sdCksdC5maXJzdFRpY2s9aS5taW4uY2FsbCh0LGEpLHQubGFzdFRpY2s9aS5tYXguY2FsbCh0LGEpKToodC5maXJzdFRpY2s9bnVsbCx0Lmxhc3RUaWNrPW51bGwpLGUuZWFjaCh0LmNoYXJ0LmRhdGEuZGF0YXNldHMsZnVuY3Rpb24obixvKXt2YXIgcj1bXSxsPXQuY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShvKTtcIm9iamVjdFwiPT10eXBlb2Ygbi5kYXRhWzBdJiZudWxsIT09bi5kYXRhWzBdP2UuZWFjaChuLmRhdGEsZnVuY3Rpb24oZSl7dmFyIGE9dC5wYXJzZVRpbWUodC5nZXRSaWdodFZhbHVlKGUpKTthLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZhLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLHIucHVzaChhKSxsJiYodC5maXJzdFRpY2s9bnVsbCE9PXQuZmlyc3RUaWNrP2kubWluKHQuZmlyc3RUaWNrLGEpOmEsdC5sYXN0VGljaz1udWxsIT09dC5sYXN0VGljaz9pLm1heCh0Lmxhc3RUaWNrLGEpOmEpKX0sdCk6cj1hLHQubGFiZWxNb21lbnRzLnB1c2gocil9LHQpLHQub3B0aW9ucy50aW1lLm1pbiYmKHQuZmlyc3RUaWNrPXQucGFyc2VUaW1lKHQub3B0aW9ucy50aW1lLm1pbikpLHQub3B0aW9ucy50aW1lLm1heCYmKHQubGFzdFRpY2s9dC5wYXJzZVRpbWUodC5vcHRpb25zLnRpbWUubWF4KSksdC5maXJzdFRpY2s9KHQuZmlyc3RUaWNrfHxpKCkpLmNsb25lKCksdC5sYXN0VGljaz0odC5sYXN0VGlja3x8aSgpKS5jbG9uZSgpfSxidWlsZExhYmVsRGlmZnM6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO3QubGFiZWxEaWZmcz1bXTt2YXIgYT1bXTt0LmNoYXJ0LmRhdGEubGFiZWxzJiZ0LmNoYXJ0LmRhdGEubGFiZWxzLmxlbmd0aD4wJiZlLmVhY2godC5jaGFydC5kYXRhLmxhYmVscyxmdW5jdGlvbihlKXt2YXIgaT10LnBhcnNlVGltZShlKTtpLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZpLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLGEucHVzaChpLmRpZmYodC5maXJzdFRpY2ssdC50aWNrVW5pdCwhMCkpKX0sdCksZS5lYWNoKHQuY2hhcnQuZGF0YS5kYXRhc2V0cyxmdW5jdGlvbihpKXt2YXIgbj1bXTtcIm9iamVjdFwiPT10eXBlb2YgaS5kYXRhWzBdJiZudWxsIT09aS5kYXRhWzBdP2UuZWFjaChpLmRhdGEsZnVuY3Rpb24oZSl7dmFyIGE9dC5wYXJzZVRpbWUodC5nZXRSaWdodFZhbHVlKGUpKTthLmlzVmFsaWQoKSYmKHQub3B0aW9ucy50aW1lLnJvdW5kJiZhLnN0YXJ0T2YodC5vcHRpb25zLnRpbWUucm91bmQpLG4ucHVzaChhLmRpZmYodC5maXJzdFRpY2ssdC50aWNrVW5pdCwhMCkpKX0sdCk6bj1hLHQubGFiZWxEaWZmcy5wdXNoKG4pfSx0KX0sYnVpbGRUaWNrczpmdW5jdGlvbigpe3ZhciBpPXRoaXM7aS5jdHguc2F2ZSgpO3ZhciBuPWUuZ2V0VmFsdWVPckRlZmF1bHQoaS5vcHRpb25zLnRpY2tzLmZvbnRTaXplLHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250U2l6ZSksbz1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250U3R5bGUsdC5kZWZhdWx0cy5nbG9iYWwuZGVmYXVsdEZvbnRTdHlsZSkscj1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aWNrcy5mb250RmFtaWx5LHQuZGVmYXVsdHMuZ2xvYmFsLmRlZmF1bHRGb250RmFtaWx5KSxsPWUuZm9udFN0cmluZyhuLG8scik7aWYoaS5jdHguZm9udD1sLGkudGlja3M9W10saS51bml0U2NhbGU9MSxpLnNjYWxlU2l6ZUluVW5pdHM9MCxpLm9wdGlvbnMudGltZS51bml0KWkudGlja1VuaXQ9aS5vcHRpb25zLnRpbWUudW5pdHx8XCJkYXlcIixpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbaS50aWNrVW5pdF0saS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSxpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSwxKTtlbHNle3ZhciBzPWkuaXNIb3Jpem9udGFsKCk/aS53aWR0aC0oaS5wYWRkaW5nTGVmdCtpLnBhZGRpbmdSaWdodCk6aS5oZWlnaHQtKGkucGFkZGluZ1RvcCtpLnBhZGRpbmdCb3R0b20pLGQ9aS50aWNrRm9ybWF0RnVuY3Rpb24oaS5maXJzdFRpY2ssMCxbXSksdT1pLmN0eC5tZWFzdXJlVGV4dChkKS53aWR0aCxjPU1hdGguY29zKGUudG9SYWRpYW5zKGkub3B0aW9ucy50aWNrcy5tYXhSb3RhdGlvbikpLGg9TWF0aC5zaW4oZS50b1JhZGlhbnMoaS5vcHRpb25zLnRpY2tzLm1heFJvdGF0aW9uKSk7dT11KmMrbipoO3ZhciBmPXMvdTtpLnRpY2tVbml0PWkub3B0aW9ucy50aW1lLm1pblVuaXQsaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKSxpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbaS50aWNrVW5pdF07Zm9yKHZhciBnPTAscD1hLnVuaXRzW2ddO2c8YS51bml0cy5sZW5ndGg7KXtpZihpLnVuaXRTY2FsZT0xLGUuaXNBcnJheShwLnN0ZXBzKSYmTWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKTxlLm1heChwLnN0ZXBzKSl7Zm9yKHZhciBtPTA7bTxwLnN0ZXBzLmxlbmd0aDsrK20paWYocC5zdGVwc1ttXT49TWF0aC5jZWlsKGkuc2NhbGVTaXplSW5Vbml0cy9mKSl7aS51bml0U2NhbGU9ZS5nZXRWYWx1ZU9yRGVmYXVsdChpLm9wdGlvbnMudGltZS51bml0U3RlcFNpemUscC5zdGVwc1ttXSk7YnJlYWt9YnJlYWt9aWYocC5tYXhTdGVwPT09ITF8fE1hdGguY2VpbChpLnNjYWxlU2l6ZUluVW5pdHMvZik8cC5tYXhTdGVwKXtpLnVuaXRTY2FsZT1lLmdldFZhbHVlT3JEZWZhdWx0KGkub3B0aW9ucy50aW1lLnVuaXRTdGVwU2l6ZSxNYXRoLmNlaWwoaS5zY2FsZVNpemVJblVuaXRzL2YpKTticmVha30rK2cscD1hLnVuaXRzW2ddLGkudGlja1VuaXQ9cC5uYW1lO3ZhciBiPWkuZmlyc3RUaWNrLmRpZmYoaS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKSxpLnRpY2tVbml0LCEwKSx2PWkuZ2V0TW9tZW50U3RhcnRPZihpLmxhc3RUaWNrLmNsb25lKCkuYWRkKDEsaS50aWNrVW5pdCkpLmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKTtpLnNjYWxlU2l6ZUluVW5pdHM9aS5sYXN0VGljay5kaWZmKGkuZmlyc3RUaWNrLGkudGlja1VuaXQsITApK2IrdixpLmRpc3BsYXlGb3JtYXQ9aS5vcHRpb25zLnRpbWUuZGlzcGxheUZvcm1hdHNbcC5uYW1lXX19dmFyIHg7aWYoaS5vcHRpb25zLnRpbWUubWluP3g9aS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKTooaS5maXJzdFRpY2s9aS5nZXRNb21lbnRTdGFydE9mKGkuZmlyc3RUaWNrKSx4PWkuZmlyc3RUaWNrKSwhaS5vcHRpb25zLnRpbWUubWF4KXt2YXIgeT1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljayksaz15LmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKTswPms/aS5sYXN0VGljaz1pLmdldE1vbWVudFN0YXJ0T2YoaS5sYXN0VGljay5hZGQoMSxpLnRpY2tVbml0KSk6az49MCYmKGkubGFzdFRpY2s9eSksaS5zY2FsZVNpemVJblVuaXRzPWkubGFzdFRpY2suZGlmZihpLmZpcnN0VGljayxpLnRpY2tVbml0LCEwKX1pLm9wdGlvbnMudGltZS5kaXNwbGF5Rm9ybWF0JiYoaS5kaXNwbGF5Rm9ybWF0PWkub3B0aW9ucy50aW1lLmRpc3BsYXlGb3JtYXQpLGkudGlja3MucHVzaChpLmZpcnN0VGljay5jbG9uZSgpKTtmb3IodmFyIFM9MTtTPD1pLnNjYWxlU2l6ZUluVW5pdHM7KytTKXt2YXIgdz14LmNsb25lKCkuYWRkKFMsaS50aWNrVW5pdCk7aWYoaS5vcHRpb25zLnRpbWUubWF4JiZ3LmRpZmYoaS5sYXN0VGljayxpLnRpY2tVbml0LCEwKT49MClicmVhaztTJWkudW5pdFNjYWxlPT09MCYmaS50aWNrcy5wdXNoKHcpfXZhciBNPWkudGlja3NbaS50aWNrcy5sZW5ndGgtMV0uZGlmZihpLmxhc3RUaWNrLGkudGlja1VuaXQpOygwIT09TXx8MD09PWkuc2NhbGVTaXplSW5Vbml0cykmJihpLm9wdGlvbnMudGltZS5tYXg/KGkudGlja3MucHVzaChpLmxhc3RUaWNrLmNsb25lKCkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS50aWNrc1swXSxpLnRpY2tVbml0LCEwKSk6KGkudGlja3MucHVzaChpLmxhc3RUaWNrLmNsb25lKCkpLGkuc2NhbGVTaXplSW5Vbml0cz1pLmxhc3RUaWNrLmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkpKSxpLmN0eC5yZXN0b3JlKCksaS5sYWJlbERpZmZzPXZvaWQgMH0sZ2V0TGFiZWxGb3JJbmRleDpmdW5jdGlvbih0LGUpe3ZhciBhPXRoaXMsaT1hLmNoYXJ0LmRhdGEubGFiZWxzJiZ0PGEuY2hhcnQuZGF0YS5sYWJlbHMubGVuZ3RoP2EuY2hhcnQuZGF0YS5sYWJlbHNbdF06XCJcIjtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYS5jaGFydC5kYXRhLmRhdGFzZXRzW2VdLmRhdGFbMF0mJihpPWEuZ2V0UmlnaHRWYWx1ZShhLmNoYXJ0LmRhdGEuZGF0YXNldHNbZV0uZGF0YVt0XSkpLGEub3B0aW9ucy50aW1lLnRvb2x0aXBGb3JtYXQmJihpPWEucGFyc2VUaW1lKGkpLmZvcm1hdChhLm9wdGlvbnMudGltZS50b29sdGlwRm9ybWF0KSksaX0sdGlja0Zvcm1hdEZ1bmN0aW9uOmZ1bmN0aW9uKHQsYSxpKXt2YXIgbj10LmZvcm1hdCh0aGlzLmRpc3BsYXlGb3JtYXQpLG89dGhpcy5vcHRpb25zLnRpY2tzLHI9ZS5nZXRWYWx1ZU9yRGVmYXVsdChvLmNhbGxiYWNrLG8udXNlckNhbGxiYWNrKTtyZXR1cm4gcj9yKG4sYSxpKTpufSxjb252ZXJ0VGlja3NUb0xhYmVsczpmdW5jdGlvbigpe3ZhciB0PXRoaXM7dC50aWNrTW9tZW50cz10LnRpY2tzLHQudGlja3M9dC50aWNrcy5tYXAodC50aWNrRm9ybWF0RnVuY3Rpb24sdCl9LGdldFBpeGVsRm9yVmFsdWU6ZnVuY3Rpb24odCxlLGEpe3ZhciBpPXRoaXMsbj1udWxsO2lmKHZvaWQgMCE9PWUmJnZvaWQgMCE9PWEmJihuPWkuZ2V0TGFiZWxEaWZmKGEsZSkpLG51bGw9PT1uJiYodCYmdC5pc1ZhbGlkfHwodD1pLnBhcnNlVGltZShpLmdldFJpZ2h0VmFsdWUodCkpKSx0JiZ0LmlzVmFsaWQmJnQuaXNWYWxpZCgpJiYobj10LmRpZmYoaS5maXJzdFRpY2ssaS50aWNrVW5pdCwhMCkpKSxudWxsIT09bil7dmFyIG89MCE9PW4/bi9pLnNjYWxlU2l6ZUluVW5pdHM6bjtpZihpLmlzSG9yaXpvbnRhbCgpKXt2YXIgcj1pLndpZHRoLShpLnBhZGRpbmdMZWZ0K2kucGFkZGluZ1JpZ2h0KSxsPXIqbytpLnBhZGRpbmdMZWZ0O3JldHVybiBpLmxlZnQrTWF0aC5yb3VuZChsKX12YXIgcz1pLmhlaWdodC0oaS5wYWRkaW5nVG9wK2kucGFkZGluZ0JvdHRvbSksZD1zKm8raS5wYWRkaW5nVG9wO3JldHVybiBpLnRvcCtNYXRoLnJvdW5kKGQpfX0sZ2V0UGl4ZWxGb3JUaWNrOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmdldFBpeGVsRm9yVmFsdWUodGhpcy50aWNrTW9tZW50c1t0XSxudWxsLG51bGwpfSxnZXRWYWx1ZUZvclBpeGVsOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsYT1lLmlzSG9yaXpvbnRhbCgpP2Uud2lkdGgtKGUucGFkZGluZ0xlZnQrZS5wYWRkaW5nUmlnaHQpOmUuaGVpZ2h0LShlLnBhZGRpbmdUb3ArZS5wYWRkaW5nQm90dG9tKSxuPSh0LShlLmlzSG9yaXpvbnRhbCgpP2UubGVmdCtlLnBhZGRpbmdMZWZ0OmUudG9wK2UucGFkZGluZ1RvcCkpL2E7cmV0dXJuIG4qPWUuc2NhbGVTaXplSW5Vbml0cyxlLmZpcnN0VGljay5jbG9uZSgpLmFkZChpLmR1cmF0aW9uKG4sZS50aWNrVW5pdCkuYXNTZWNvbmRzKCksXCJzZWNvbmRzXCIpfSxwYXJzZVRpbWU6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcztyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZS5vcHRpb25zLnRpbWUucGFyc2VyP2kodCxlLm9wdGlvbnMudGltZS5wYXJzZXIpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUub3B0aW9ucy50aW1lLnBhcnNlcj9lLm9wdGlvbnMudGltZS5wYXJzZXIodCk6XCJmdW5jdGlvblwiPT10eXBlb2YgdC5nZXRNb250aHx8XCJudW1iZXJcIj09dHlwZW9mIHQ/aSh0KTp0LmlzVmFsaWQmJnQuaXNWYWxpZCgpP3Q6XCJzdHJpbmdcIiE9dHlwZW9mIGUub3B0aW9ucy50aW1lLmZvcm1hdCYmZS5vcHRpb25zLnRpbWUuZm9ybWF0LmNhbGw/KGNvbnNvbGUud2FybihcIm9wdGlvbnMudGltZS5mb3JtYXQgaXMgZGVwcmVjYXRlZCBhbmQgcmVwbGFjZWQgYnkgb3B0aW9ucy50aW1lLnBhcnNlci4gU2VlIGh0dHA6Ly9ubm5pY2suZ2l0aHViLmlvL0NoYXJ0LmpzL2RvY3MtdjIvI3NjYWxlcy10aW1lLXNjYWxlXCIpLGUub3B0aW9ucy50aW1lLmZvcm1hdCh0KSk6aSh0LGUub3B0aW9ucy50aW1lLmZvcm1hdCl9fSk7dC5zY2FsZVNlcnZpY2UucmVnaXN0ZXJTY2FsZVR5cGUoXCJ0aW1lXCIsbyxuKX19LHsxOjF9XX0se30sWzddKSg3KX0pOyIsIi8vUGxhdGZvcm0gTG9nbydzXG5mdW5jdGlvbiBQbGF0Zm9ybUxvZ28ocGxhdGZvcm1uYWFtKVxue1xuICAgIHBsYXRmb3JtbmFhbSA9IHBsYXRmb3JtbmFhbS50b1VwcGVyQ2FzZSgpO1xuICAgIHN3aXRjaCAocGxhdGZvcm1uYWFtKVxuICAgIHtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBwbGF0Zm9ybW5hYW07XG5cbiAgICAgICAgLy9wbGF0Zm9ybXMgLSBzcGVsY29tcHV0ZXJzXG4gICAgICAgIGNhc2UgXCJQUzFcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczEucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiUFMzXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvcHMzLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlBTMlwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL3BzMi5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJQUzRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9wczQucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiUENcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy93aW5kb3dzLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlhCT1hcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy94Ym94LnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIk5FU1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25lcy5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJONjRcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9pY29ucy9uNjQucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiTklOVEVORE8gU1dJVENIXCI6XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvaWNvbnMvc3dpdGNoLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIk5HQ1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2ljb25zL25nYy5wbmcnIC8+XCI7XG5cbiAgICAgICAgLy9wdWJsaXNoZXJzIC0gdWl0Z2V2ZXJzXG4gICAgICAgIGNhc2UgXCJOSU5URU5ET1wiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvbmludGVuZG8ucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiVUJJU09GVFwiOlxuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL3B1Ymxpc2hlcnMvdWJpc29mdC5wbmcnIC8+XCI7XG4gICAgICAgIGNhc2UgXCJFTEVDVFJPTklDIEFSVFNcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL2VhLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlNPTllcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3NvbnkucG5nJyAvPlwiO1xuICAgICAgICBjYXNlIFwiUk9DS1NUQVJcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3JvY2tzdGFyLnBuZycgLz5cIjtcbiAgICAgICAgY2FzZSBcIlNFR0FcIjpcbiAgICAgICAgICAgIHJldHVybiBcIjxpbWcgc3JjPScvcmVzb3VyY2VzL2ltYWdlcy9wdWJsaXNoZXJzL3NlZ2EucG5nJyAvPlwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gQmVzY2hpa2JhYXJoZWlkS2xldXIoc3RvY2t2YWx1ZSl7XG4gICAgXG4gICAgICAgIGlmIChzdG9ja3ZhbHVlPD0wKSB7XG4gICAgICAgICAgICByZXR1cm4gXCI8aW1nIHNyYz0nL3Jlc291cmNlcy9pbWFnZXMvYXZhaWxhYmlsaXR5L2J1dHRvbnJlZC5wbmcnIC8+XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RvY2t2YWx1ZT49MSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiPGltZyBzcmM9Jy9yZXNvdXJjZXMvaW1hZ2VzL2F2YWlsYWJpbGl0eS9idXR0b25ncmVlbi5wbmcnIC8+XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc3RvY2t2YWx1ZVxuICAgICAgICB9XG59IiwiJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcImEub3JkZXJfX25hdmlnYXRlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoXCJkaXNhYmxlZFwiKSA9PSBmYWxzZSlcbiAgICB7XG4gICAgICAgIC8vIEdldCB0aGUgb3JkZXIgc3RlcFxuICAgICAgICB2YXIgc3RlcCA9ICAkKHRoaXMpLmRhdGEoXCJzdGVwXCIpO1xuXG4gICAgICAgIC8vIFNldCB0aGUgbmV3IG9yZGVyIHN0ZXAgYXMgYWN0aXZlXG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpLlwiICsgc3RlcCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgJChcIi5vcmRlcl9fc3RlcFwiKS5yZW1vdmVDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XG4gICAgICAgICQoXCIjXCIgKyBzdGVwKS5hZGRDbGFzcyhcIm9yZGVyX19zdGVwLS1hY3RpdmVcIik7XG4gICAgfVxufSlcblxuJChkb2N1bWVudCkub24oXCJjaGFuZ2VcIiwgXCJzZWxlY3Qjc2hpcHBpbmdfbWV0aG9kXCIsIGZ1bmN0aW9uIChlKVxue1xuICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgaWYgKHZhbCAhPSBcIlwiKVxuICAgIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hZGRDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgIH1cblxuICAgICQoXCIuc2hpcHBpbmdfX2ZpZWxkc1wiKS5oaWRlKCk7XG4gICAgJChcIi5cIiArIHZhbCArIFwiX2ZpZWxkc1wiKS5zaG93KCk7XG59KVxuXG4kKGRvY3VtZW50KS5vbihcImNoYW5nZVwiLCBcInNlbGVjdCNwYXltZW50X21ldGhvZFwiLCBmdW5jdGlvbiAoZSlcbntcbiAgICB2YXIgdmFsID0gJCh0aGlzKS52YWwoKTtcblxuICAgIGlmICh2YWwgIT0gXCJcIilcbiAgICB7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5yZW1vdmVDbGFzcyhcImRpc2FibGVkXCIpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudHMoXCIub3JkZXJfX3N0ZXBcIikuZmluZChcIi5idG4tLW5leHRcIikuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnRzKFwiLm9yZGVyX19zdGVwXCIpLmZpbmQoXCIuYnRuLS1uZXh0XCIpLmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICQodGhpcykucGFyZW50cyhcIi5vcmRlcl9fc3RlcFwiKS5maW5kKFwiLmJ0bi0tbmV4dFwiKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XG4gICAgICAgIFxuICAgIH1cbn0pOyIsInZhciBSb3V0ZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGJhc2VVcmwgPSBcInByb2plY3Qtd2Vic2hvcC9cIjtcblxuICAgIGZ1bmN0aW9uIHJvdXRlKHVybCwgaGlzdG9yeSlcbiAgICB7XG4gICAgICAgIGlmIChpc0ludGVybmFsKHVybCkgPT0gZmFsc2UgfHwgdXJsID09IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0aWNsZXMgPSBnZXRQYXJ0aWNsZXModXJsKTtcblxuICAgICAgICBzd2l0Y2gocGFydGljbGVzWzBdKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYXNlIFwiXCI6XG4gICAgICAgICAgICBjYXNlIFwiaW5kZXguaHRtbFwiOlxuICAgICAgICAgICAgY2FzZSBcInByb2R1Y3RzXCI6XG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RzQ29udHJvbGxlcihuZXcgUHJvZHVjdHNWaWV3SGVscGVyKCksIG5ldyBQcm9kdWN0c01vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJwcm9kdWN0XCI6XG4gICAgICAgICAgICAgICAgbmV3IFByb2R1Y3RDb250cm9sbGVyKG5ldyBQcm9kdWN0Vmlld0hlbHBlcigpLCBuZXcgUHJvZHVjdE1vZGVsKHBhcnRpY2xlc1sxXSkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBSZWdpc3RlckNvbnRyb2xsZXIobmV3IFJlZ2lzdGVyVmlld0hlbHBlcigpLCBuZXcgUmVnaXN0ZXJNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgICAgICAgICAgICBuZXcgTG9naW5Db250cm9sbGVyKG5ldyBMb2dpblZpZXdIZWxwZXIoKSwgbmV3IExvZ2luTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImxvZ291dFwiOlxuICAgICAgICAgICAgICAgIG5ldyBMb2dvdXRDb250cm9sbGVyKG5ldyBMb2dvdXRWaWV3SGVscGVyKCksIG5ldyBMb2dvdXRNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVnaXN0ZXJDb250cm9sbGVyKG5ldyBSZWdpc3RlclZpZXdIZWxwZXIoKSwgbmV3IFJlZ2lzdGVyTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlc2V0cGFzc3dvcmRcIjpcbiAgICAgICAgICAgICAgICBuZXcgUmVzZXRQYXNzd29yZENvbnRyb2xsZXIobmV3IFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyKCksIG5ldyBSZXNldFBhc3N3b3JkTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIndpc2hsaXN0XCI6XG4gICAgICAgICAgICAgICAgbmV3IFdpc2hsaXN0Q29udHJvbGxlcihuZXcgV2lzaGxpc3RWaWV3SGVscGVyKCksIG5ldyBXaXNobGlzdE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJzdGF0c1wiOlxuICAgICAgICAgICAgICAgIG5ldyBTdGF0c0NvbnRyb2xsZXIobmV3IFN0YXRzVmlld0hlbHBlcigpLCBuZXcgU3RhdHNNb2RlbCgpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiYWRtaW5cIjpcbiAgICAgICAgICAgICAgICBuZXcgQWRtaW5Db250cm9sbGVyKG5ldyBBZG1pblZpZXdIZWxwZXIoKSwgbmV3IEFkbWluTW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFkbWluX3VzZXJcIjpcbiAgICAgICAgICAgICAgICBuZXcgQWRtaW5Vc2VyQ29udHJvbGxlcihuZXcgQWRtaW5Vc2VyVmlld0hlbHBlcigpLCBuZXcgQWRtaW5Vc2VyTW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImZhdm9yaXRlbGlzdFwiOiBcbiAgICAgICAgICAgICAgICBuZXcgRmF2b3JpdGVMaXN0Q29udHJvbGxlcihuZXcgRmF2b3JpdGVMaXN0Vmlld0hlbHBlcigpLCBuZXcgRmF2b3JpdGVMaXN0TW9kZWwoKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrb3V0XCI6XG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0Q29udHJvbGxlcihuZXcgQ2hlY2tvdXRWaWV3SGVscGVyKCksIG5ldyBDaGVja291dE1vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlcnNcIjpcbiAgICAgICAgICAgICAgICBuZXcgT3JkZXJzQ29udHJvbGxlcihuZXcgT3JkZXJzVmlld0hlbHBlciwgbmV3IE9yZGVyc01vZGVsKCkpLm1haW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJvcmRlclwiOlxuICAgICAgICAgICAgICAgIG5ldyBPcmRlckNvbnRyb2xsZXIobmV3IE9yZGVyVmlld0hlbHBlciwgbmV3IE9yZGVyTW9kZWwocGFydGljbGVzWzFdKSkubWFpbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInB1YmxpY193aXNobGlzdFwiOlxuICAgICAgICAgICAgICAgIG5ldyBQdWJsaWNXaXNobGlzdENvbnRyb2xsZXIobmV3IFB1YmxpY1dpc2hsaXN0Vmlld0hlbHBlcigpLCBuZXcgUHVibGljV2lzaGxpc3RNb2RlbChwYXJ0aWNsZXNbMV0pKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG5ldyBFcnJvckNvbnRyb2xsZXIobmV3IEVycm9yVmlld0hlbHBlcigpKS5tYWluKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGlzdG9yeSAhPSBmYWxzZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHVybCAhPSBcIlwiICYmIHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdyaXRlSGlzdG9yeSh7fSwgXCJBLVogR2FtZXNcIiwgdXJsKTtcblxuICAgICAgICAgICAgICAgIC8vIExvYWQgc2NyZWVuIGFuZCBjbG9zZSBjYXJ0XG4gICAgICAgICAgICAgICAgJChcIi5zaWRlYmFyXCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLm92ZXJsYXlcIikucmVtb3ZlQ2xhc3MoXCJvdmVybGF5LS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICAgICAgICAgICAgICBzaG93TG9hZFNjcmVlbigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCB0byB0b3Agb2YgcGFnZVxuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzSW50ZXJuYWwodXJsKVxuICAgIHtcbiAgICAgICAgaWYgKHVybC5pbmRleE9mKFwiaHR0cFwiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcInd3d1wiKSAhPSAtMSB8fCB1cmwuaW5kZXhPZihcIm1haWx0b1wiKSAhPSAtMSlcbiAgICAgICAge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYXJ0aWNsZXModXJsKVxuICAgIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCAvXG4gICAgICAgIGlmICh1cmwuaW5kZXhPZihcIi9cIikgPT0gMClcbiAgICAgICAge1xuICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgYmFzZSB1cmwgc2V0LCByZW1vdmUgdGhlIGJhc2UgdXJsXG4gICAgICAgIGlmICh0aGlzLmJhc2VVcmwgIT0gbnVsbCAmJiB1cmwuaW5kZXhPZih0aGlzLmJhc2VVcmwpICE9IC0xKVxuICAgICAgICB7XG4gICAgICAgICAgICB1cmwgPSB1cmwuc3Vic3RyaW5nKHVybC5pbmRleE9mKHRoaXMuYmFzZVVybCkgKyB0aGlzLmJhc2VVcmwubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmwuc3BsaXQoL1xcLyguKyk/LylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZUhpc3Rvcnkob2JqZWN0LCB0aXRsZSwgdXJsKVxuICAgIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKG9iamVjdCwgdGl0bGUsIHVybCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgfVxufSIsIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICAkKFwiLnNpZGViYXItdG9nZ2xlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKVxuICAgIHtcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGNsaWNrIGFjdGlvblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gSWQgb2YgdGhlIHNpZGViYXIgdG8gdG9nZ2xlXG4gICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5kYXRhKFwic2lkZWJhclwiKTtcblxuICAgICAgICB0b2dnbGVTaWRlYmFyKCQoXCIjXCIgKyBzaWRlYmFyKSk7XG4gICAgfSk7XG5cbiAgICAkKFwiLnNpZGViYXJfX2Nsb3NlXCIpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHRvZ2dsZVNpZGViYXIoJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSk7XG4gICAgfSlcblxuICAgICQoXCIub3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB0b2dnbGVTaWRlYmFyKCQoXCIuc2lkZWJhclwiKSwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVTaWRlYmFyKHNpZGViYXIsIGZvcmNlQ2xvc2UpXG4gICAge1xuICAgICAgICBpZiAoZm9yY2VDbG9zZSlcbiAgICAgICAge1xuICAgICAgICAgICAgJChzaWRlYmFyKS5yZW1vdmVDbGFzcyhcInNpZGViYXItLW9wZW5cIik7ICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKHNpZGViYXIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoXCIub3ZlcmxheVwiKS50b2dnbGVDbGFzcyhcIm92ZXJsYXktLXZpc2libGVcIik7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2lkZWJhci0tb3BlblwiKTtcbiAgICB9XG59KTsiLCIkKGRvY3VtZW50KS5vbihcIm1vdXNlZW50ZXJcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudClcbntcbiAgICAvLyBHZXQgY29udGVudCBhbmQgcG9zaXRpb25cbiAgICB2YXIgY29udGVudCAgPSAkKHRoaXMpLmRhdGEoXCJ0b29sdGlwXCIpO1xuICAgIHZhciBwb3NpdGlvbiA9IGdldE9mZnNldCh0aGlzKTtcblxuICAgIC8vIENyZWF0ZSB0b29sdGlwXG4gICAgdmFyIHRvb2x0aXAgPSAkKFwiPGRpdiBjbGFzcz0ndG9vbHRpcCc+XCIgKyBjb250ZW50ICsgXCI8L2Rpdj5cIik7XG4gICAgJChcImJvZHlcIikuYXBwZW5kKHRvb2x0aXApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIG5ldyBwb3NpdGlvbnNcbiAgICBwb3NpdGlvbi50b3AgID0gcG9zaXRpb24udG9wICsgJCh0aGlzKS5vdXRlckhlaWdodCgpO1xuICAgIHBvc2l0aW9uLmxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgKCQodGhpcykub3V0ZXJXaWR0aCgpIC8gMikgLSAoJChcIi50b29sdGlwXCIpLm91dGVyV2lkdGgoKSAvIDIpO1xuXG4gICAgLy8gQ2hhbmdlIHBvc2l0aW9uIG9mIHRvb2x0aXBcbiAgICB0b29sdGlwLmNzcyhcImxlZnRcIiwgcG9zaXRpb24ubGVmdCk7XG4gICAgdG9vbHRpcC5jc3MoXCJ0b3BcIiwgcG9zaXRpb24udG9wKTtcbn0pO1xuXG4kKGRvY3VtZW50KS5vbihcIm1vdXNlbGVhdmVcIiwgXCIuaGFzVG9vbHRpcFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICQoXCJib2R5XCIpLmZpbmQoXCIudG9vbHRpcFwiKS5yZW1vdmUoKTtcbn0pO1xuXG5mdW5jdGlvbiBnZXRPZmZzZXQoZWwpXG57XG4gICAgZWwgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBsZWZ0OiBlbC5sZWZ0ICsgd2luZG93LnNjcm9sbFgsXG4gICAgICAgIHRvcDogZWwudG9wICsgd2luZG93LnNjcm9sbFlcbiAgfVxufSIsIi8qKlxuICogSGVscGVyIGZvciBmaW5kaW5nLCBjcmVhdGluZyBhbmQgZGVsZXRpbmcgY29va2llc1xuICovXG5mdW5jdGlvbiBDb29raWVIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAgTmFtZSBvZiB0aGUgY29va2llXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSlcbiAgICB7XG4gICAgICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXS5zcGxpdChcIj1cIik7XG5cbiAgICAgICAgICAgIGlmIChjb29raWVbMF0udHJpbSgpID09IG5hbWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvb2tpZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgTmFtZSBvZiB0aGUgY29va2llXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlICBWYWx1ZSBvZiB0aGUgY29va2llXG4gICAgICogXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgICB0aGlzLmNyZWF0ZUNvb2tpZSA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKVxuICAgIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpOyBcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDEqMjQqNjAqNjAqMTAwMCkpOyBcbiAgICAgICAgdmFyIGV4cGlyZXMgPSBcImV4cGlyZXM9XCIrIGQudG9VVENTdHJpbmcoKTsgXG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9JyArIHZhbHVlICsgJzsnICsgZXhwaXJlcyArICc7cGF0aD0vJzsgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGEgY29va2llIGFuZCBpdCdzIHZhbHVlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgIE5hbWUgb2YgdGhlIGNvb2tpZVxuICAgICAqIFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgdGhpcy5kZWxldGVDb29raWUgPSBmdW5jdGlvbihuYW1lKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArICc9OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyc7XG4gICAgfVxufVxuIiwiLyoqXG4gKiBIZWxwZXIgZm9yIGNhcnQgYWN0aW9uc1xuICovXG5mdW5jdGlvbiBGYXZvcml0ZUxpc3RIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIC8vdGhpcy5hZGRJdGVtID0gZnVuY3Rpb24oZWFuX251bWJlcilcbiAgICB2YXIgYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9mYXZvcml0ZWxpc3QvXCIgKyBlYW5fbnVtYmVyLCAvLyBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIlxuICAgICAgICAgICAgdHlwZTogXCJwb3N0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe30pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQcm9kdWN0IHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSBmYXZvcmlldGVuLlwiKTsgLy8gaW0gc3RhYXQgdm9vciBpbWFnaW5hcnkvZGVua2JlZWxkaWdcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBpcyBhbCBpbiBqZSBmYXZvcmlldGVuLlwiKTtcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW1cbiAgICB9XG59IiwidmFyIFJvdXRlciAgICAgICA9IG5ldyBSb3V0ZXIoKTtcbnZhciBDb29raWVIZWxwZXIgPSBuZXcgQ29va2llSGVscGVyKCk7XG52YXIgVXNlckhlbHBlciAgICAgPSBuZXcgVXNlckhlbHBlcigpO1xudmFyIFdpc2hsaXN0SGVscGVyID0gbmV3IFdpc2hsaXN0SGVscGVyKCk7XG5cbmZ1bmN0aW9uIHNob3dMb2FkU2NyZWVuKClcbntcbiAgICAkKFwiI2NvbXBvbmVudFwiKS5odG1sKCc8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjxkaXYgY2xhc3M9XCJib3VuY2UxXCI+PC9kaXY+PGRpdiBjbGFzcz1cImJvdW5jZTJcIj48L2Rpdj48ZGl2IGNsYXNzPVwiYm91bmNlM1wiPjwvZGl2PiA8L2Rpdj4nKTtcbn1cblxuXG5mdW5jdGlvbiBvbkxvYWRQYWdlKClcbntcbiAgICAkKFwiLm1tZW51XCIpLmVtcHR5KCk7XG4gICAgJChcIi5uYXZcIikuY2xvbmUoKS5hcHBlbmRUbyhcIi5tbWVudVwiKTtcblxuICAgIGlmIChVc2VySGVscGVyLmlzQWRtaW4oKSlcbiAgICB7XG4gICAgICAgICQoXCIudmlzaWJsZS1hZG1pblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICQoXCIudmlzaWJsZS1jdXN0b21lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKFVzZXJIZWxwZXIuaXNDdXN0b21lcigpKVxuICAgIHtcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgJChcIi5pbmxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJChcIi52aXNpYmxlLWFkbWluXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIi52aXNpYmxlLWN1c3RvbWVyXCIpLmhpZGUoKTtcbiAgICAgICAgJChcIiNpbmxvZ2dlbl90ZXh0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICB9XG59IiwiJC5mbi5zZXJpYWxpemVPYmplY3QgPSBmdW5jdGlvbigpXG57XG4gICAgdmFyIG8gPSB7fTtcbiAgICB2YXIgYSA9IHRoaXMuc2VyaWFsaXplQXJyYXkoKTtcbiAgICAkLmVhY2goYSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChvW3RoaXMubmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKCFvW3RoaXMubmFtZV0ucHVzaCkge1xuICAgICAgICAgICAgICAgIG9bdGhpcy5uYW1lXSA9IFtvW3RoaXMubmFtZV1dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvW3RoaXMubmFtZV0ucHVzaCh0aGlzLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlICE9IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb1t0aGlzLm5hbWVdID0gdGhpcy52YWx1ZSB8fCAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvO1xufTsiLCIvKipcbiAqIEhlbHBlciBmb3IgdXNlciByZWxhdGVkIHN0dWZmXG4gKi9cbmZ1bmN0aW9uIFVzZXJIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIGEgZ3Vlc3QgKG5vdCBsb2dnZWQgaW4pXG4gICAgICovXG4gICAgdGhpcy5pc0xvZ2VkSW4gPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuICE9IHVuZGVmaW5lZCAmJiBhY2Nlc3NUb2tlbiAhPSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGEgY3VzdG9tZXJcbiAgICAgKi9cbiAgICB0aGlzLmlzQ3VzdG9tZXIgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICBpZiAoVXNlckhlbHBlci5pc0xvZ2VkSW4oKSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIHVzZXJ0eXBlID0gdGhpcy5kZWNvZGVUb2tlbigpLnVzZXJ0eXBlO1xuXG4gICAgICAgICAgICBpZiAodXNlcnR5cGUgPT0gXCJjdXN0b21lclwiIHx8IHVzZXJ0eXBlID09IFwiYWRtaW5cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCB1c2VyIGlzIGFkbWluXG4gICAgICovXG4gICAgdGhpcy5pc0FkbWluID0gZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgaWYgKFVzZXJIZWxwZXIuaXNMb2dlZEluKCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB1c2VydHlwZSA9IHRoaXMuZGVjb2RlVG9rZW4oKS51c2VydHlwZTtcblxuICAgICAgICAgICAgaWYgKHVzZXJ0eXBlID09IFwiYWRtaW5cIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWNvZGUgdGhlIEpXVCB0b2tlblxuICAgICAqL1xuICAgIHRoaXMuZGVjb2RlVG9rZW4gPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpO1xuXG4gICAgICAgIGlmIChhY2Nlc3NUb2tlbiAhPSB1bmRlZmluZWQgJiYgYWNjZXNzVG9rZW4gICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0gYWNjZXNzVG9rZW4uc3BsaXQoXCIuXCIpWzFdO1xuXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgdXNlclxuICAgICAqL1xuICAgIHRoaXMuZ2V0VXNlckluZm8gPSBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxufSIsIi8qKlxuICogSGVscGVyIGZvciBjYXJ0IGFjdGlvbnNcbiAqL1xuZnVuY3Rpb24gV2lzaGxpc3RIZWxwZXIoKVxue1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdmFsdWUgb2YgYSBjb29raWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgIFByb2RjdXQgSUQgdG8gcmVtb3ZlIGZvbSB0aGUgY2FyXG4gICAgICogXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuYWRkSXRlbSA9IGZ1bmN0aW9uKGVhbl9udW1iZXIpXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3dpc2hsaXN0L1wiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcInVzZXJfaWRcIikgKyBcIi9cIiArIGVhbl9udW1iZXIsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImxpa2UtLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkhldCBwcm9kdWN0IGlzIHN1Y2Nlc3ZvbCB0b2VnZXZvZWdkIGFhbiBqZSB2ZXJsYW5nbGlqc3QuXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkRpdCBwcm9kdWN0IHN0YWF0IGFsIG9wIGplIHZlcmxhbmdsaWpzdC5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY29weUxpbmsgPSBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICAvLyBTZWxlY3QgdGhlIGNvbnRlbnRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0I3B1YmxpY19saW5rXCIpLnNlbGVjdCgpO1xuICAgICAgICAvLyBDb3B5IHRvIHRoZSBjbGlwYm9hcmRcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICB9XG59IiwidmFyIEFkbWluTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0UGFnZShjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnNcIiwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL1xuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0UGFnZTogZ2V0UGFnZVxuICAgIH1cblxufTsiLCJ2YXIgQWRtaW5Vc2VyTW9kZWwgPSBmdW5jdGlvbihpZClcbntcbiAgICBmdW5jdGlvbiBnZXRQYWdlKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9hZG1pbi91c2Vycy9cIiArIGlkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2F2ZVVzZXJJbmZvKGRhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXG4gICAgICAgIGRhdGEuZGF0ZV9vZl9iaXJ0aCA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGEuamFhciwgZGF0YS5tYWFuZCwgZGF0YS5kYWcpKTtcblxuICAgICAgICAvLyBSZW1vdmUgeWVhciwgbW9udGggYW5kIGRheVxuICAgICAgICBkZWxldGUgZGF0YS5qYWFyO1xuICAgICAgICBkZWxldGUgZGF0YS5tYWFuZDtcbiAgICAgICAgZGVsZXRlIGRhdGEuZGFnO1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyBkYXRhLnVzZXJfaWQsIC8vXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9cbiAgICAgICAgICAgIHR5cGU6IFwiUEFUQ0hcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VyX2lkLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvYWRtaW4vdXNlcnMvXCIgKyB1c2VyX2lkLCAvL1wiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvXG4gICAgICAgICAgICB0eXBlOiBcIkRFTEVURVwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2UsXG4gICAgICAgIHNhdmVVc2VySW5mbzogc2F2ZVVzZXJJbmZvLFxuICAgICAgICBkZWxldGVVc2VyOiBkZWxldGVVc2VyXG4gICAgfVxufSIsInZhciBDYXJ0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBjYXJ0IGl0ZW1zXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0Q2FydChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIHZhciBjYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XG5cbiAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gdGhlIGNhcnQgY29va2llIGFuZCBkYXRhYmFzZSBpZiB0aGUgdXNlciBpcyByZWdpc3RlcmVkXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdChpZCwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3Byb2R1Y3RzL1wiICsgaWQsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYXJ0ID0ge2Vhbl9udW1iZXI6ZGF0YVswXS5lYW5fbnVtYmVyLCB0aXRsZTpkYXRhWzBdLnRpdGxlLCBwcmljZTpkYXRhWzBdLnByaWNlLCBpbWFnZTpkYXRhWzBdLmltYWdlfTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhjYXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIFNhdmUgY2FydCBpbiBjb29raWVzXG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRDYXJ0ID0gQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudENhcnQgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoW2NhcnRdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0ID0gSlNPTi5wYXJzZShjdXJyZW50Q2FydCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDYXJ0LnB1c2goY2FydCk7XG5cbiAgICAgICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudENhcnQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgaXRlbSBmcm9tIHRoZSBjYXJ0XG4gICAgICogXG4gICAgICogQHBhcmFtIHtpbnR9IGlkIFByb2R1Y3QgaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiByZW1vdmVQcm9kdWN0KGlkKVxuICAgIHtcbiAgICAgICAgY2FydCA9IEpTT04ucGFyc2UoQ29va2llSGVscGVyLmdldENvb2tpZShcImNhcnRcIikpO1xuXG4gICAgICAgIGZvcihpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmIChjYXJ0W2ldLmVhbl9udW1iZXIgPT0gaWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FydC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIENvb2tpZUhlbHBlci5jcmVhdGVDb29raWUoXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldENhcnQ6IGdldENhcnQsXG4gICAgICAgIGFkZFByb2R1Y3Q6IGFkZFByb2R1Y3QsXG4gICAgICAgIHJlbW92ZVByb2R1Y3Q6IHJlbW92ZVByb2R1Y3RcbiAgICB9XG59OyIsInZhciBDaGVja291dE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldE9yZGVySW5mb3JtYXRpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICB2YXIgY2FydCA9IENvb2tpZUhlbHBlci5nZXRDb29raWUoJ2NhcnQnKTtcblxuICAgICAgICBpZiAoY2FydCAhPSB1bmRlZmluZWQgJiYgY2FydCAhPSBcIlwiKVxuICAgICAgICB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnBhcnNlKGNhcnQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKFtdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVPcmRlcihvcmRlckRhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gQXBwZW5kIGRhdGEgZm9ybSBvdGhlciBzb3VyY2VzXG4gICAgICAgIG9yZGVyRGF0YS5zdGF0dXMgICAgICAgICA9IFwicGFpZFwiO1xuICAgICAgICBvcmRlckRhdGEuYnR3X3BlcmNlbnRhZ2UgPSAyMTtcbiAgICAgICAgb3JkZXJEYXRhLm9yZGVyX2RhdGUgICAgID0gbmV3IERhdGUoKTtcbiAgICAgICAgb3JkZXJEYXRhLmRlbGl2ZXJ5X2Nvc3RzID0gMy45NTtcbiAgICAgICAgb3JkZXJEYXRhLmNhcnQgICAgICAgICAgID0gSlNPTi5wYXJzZShDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiY2FydFwiKSk7XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9vcmRlcnNcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KG9yZGVyRGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIENvb2tpZUhlbHBlci5kZWxldGVDb29raWUoXCJjYXJ0XCIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbWV0aW5nIHdlbnQgd3JvbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPcmRlckluZm9ybWF0aW9uOiBnZXRPcmRlckluZm9ybWF0aW9uLFxuICAgICAgICBzYXZlT3JkZXI6IHNhdmVPcmRlclxuICAgIH1cbn07IiwidmFyIEZhdm9yaXRlTGlzdE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldEZhdm9yaXRlTGlzdChjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0XCJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0RmF2b3JpdGVMaXN0IGFqYXggZG9uZVwiKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlRnJvbUZhdm9yaXRlTGlzdChlYW4sIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9mYXZvcml0ZWxpc3QvXCIgKyBTdHJpbmcoZWFuKSwgLy9cImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgLy8gY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgLy8gZGF0YTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7IC8vbW9ldCBkYXRhIHBlciBzZSBtZWVnZXZlbiBhYW4gY2FsbGJhY2s/XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0RmF2b3JpdGVMaXN0OiBnZXRGYXZvcml0ZUxpc3QsXG4gICAgICAgIGRlbGV0ZUZyb21GYXZvcml0ZUxpc3Q6IGRlbGV0ZUZyb21GYXZvcml0ZUxpc3RcbiAgICB9XG59OyIsInZhciBMb2dpbk1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvbG9naW5cIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJhc2ljIFwiICsgYnRvYShlbWFpbCArIFwiOlwiICsgcGFzc3dvcmQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBwdXQgdG9rZW4gaW4gY29va2llXG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiLCBkYXRhLmFjY2Vzc190b2tlbik7XG4gICAgICAgICAgICAgICAgQ29va2llSGVscGVyLmNyZWF0ZUNvb2tpZShcInVzZXJfaWRcIiwgZGF0YS51c2VyX2lkKTtcblxuICAgICAgICAgICAgICAgIC8vICdyZWxvYWQnIHBhZ2VcbiAgICAgICAgICAgICAgICBvbkxvYWRQYWdlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gc2hvdyAnbm90IGdvb2QgZW1haWwgb3IgcGFzc3dvcmQgdG8gdXNlcidcbiAgICAgICAgICAgICAgICAkKFwiI2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5odG1sKFwiZXJyb3IgZnVuY3Rpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbG9naW46IGxvZ2luXG4gICAgfVxufTsiLCJ2YXIgTG9nb3V0TW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gbG9nb3V0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgICAgQ29va2llSGVscGVyLmRlbGV0ZUNvb2tpZShcInVzZXJfaWRcIik7XG5cbiAgICAgICAgLy8gJ3JlbG9hZCcgcGFnZVxuICAgICAgICBvbkxvYWRQYWdlKCk7XG5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGxvZ291dDogbG9nb3V0XG4gICAgfVxufTsiLCJ2YXIgT3JkZXJNb2RlbCA9IGZ1bmN0aW9uKG9yZGVyX2lkKVxue1xuICAgIC8qKlxuICAgICAqIEdldCBhbGwgb3JkZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPcmRlcihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvb3JkZXJzL1wiICsgb3JkZXJfaWQsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlciwgY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL2Zhdm9yaXRlbGlzdC9cIiArIGVhbl9udW1iZXIsIC8vIFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvZmF2b3JpdGVsaXN0L1wiXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7fSksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvZHVjdCBpcyBhbCBpbiBqZSBmYXZvcmlldGVuLlwiKTtcbiAgICAgICAgICAgICAgICAvLyBDb21tZW50IHRvIHNlbGYgPSAoT1JERVIgKyBPUkRFUiBISVNUT1JZIHZlcmhhYWwgTmllbHMpICsgKEZBVk9SSUVURU4gTElKU1QgdmVyaGFhbCBIYWJibykgU0FNRU5WT0VHRU4gU1RSQUtTIE9SIEVMU0UuLi4hISEhXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0T3JkZXI6IGdldE9yZGVyLFxuICAgICAgICBhZGRUb0Zhdm9yaXRlTGlzdDogYWRkVG9GYXZvcml0ZUxpc3RcbiAgICB9XG59OyIsInZhciBPcmRlcnNNb2RlbCA9IGZ1bmN0aW9uKClcbntcbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIG9yZGVyc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE9yZGVycyhjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvb3JkZXJzXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBDb29raWVIZWxwZXIuZ2V0Q29va2llKFwiYWNjZXNzX3Rva2VuXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRPcmRlcnM6IGdldE9yZGVycyxcbiAgICB9XG59OyIsInZhciBQcm9kdWN0c01vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFBhZ2UoZmlsdGVyLCBjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvcHJvZHVjdHM/XCIgKyBmaWx0ZXIsIC8vPyBodHRwOi8vODQuODQuMjQ1LjI5OjI0MyA9IEFQSS1sb2NhdGllP1xuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcbiAgICB9XG59OyIsInZhciBQdWJsaWNXaXNobGlzdE1vZGVsID0gZnVuY3Rpb24odXNlcl9pZClcbntcbiAgICB0aGlzLmdldFB1YmxpY1dpc2hsaXN0ID0gZnVuY3Rpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3B1YmxpY193aXNobGlzdC9cIiArIHVzZXJfaWQsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07IiwidmFyIFJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXIoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgLy8gTW9kaWZ5IGRhdGEgYmVmb3JlIHNlbmRpbmcgKGFsc28gY29udmVydCB0byBVVEMpXG4gICAgICAgIGZvcm1EYXRhLmRhdGVfb2ZfYmlydGggPSBuZXcgRGF0ZShEYXRlLlVUQyhmb3JtRGF0YS5qYWFyLCBmb3JtRGF0YS5tYWFuZCwgZm9ybURhdGEuZGFnKSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHllYXIsIG1vbnRoIGFuZCBkYXlcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmphYXI7XG4gICAgICAgIGRlbGV0ZSBmb3JtRGF0YS5tYWFuZDtcbiAgICAgICAgZGVsZXRlIGZvcm1EYXRhLmRhZztcblxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vYXBpLmF6LWdhbWVzLm5sL3VzZXIvcmVnaXN0ZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVfbWFpbCA6IGZvcm1EYXRhLmVfbWFpbGFkcmVzLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkIDogZm9ybURhdGEud2FjaHR3b29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lIDogZm9ybURhdGEudm9vcm5hYW0sXG4gICAgICAgICAgICAgICAgaW5zZXJ0aW9uIDogZm9ybURhdGEudHVzc2Vudm9lZ3NlbCxcbiAgICAgICAgICAgICAgICBzdXJuYW1lIDogZm9ybURhdGEuYWNodGVybmFhbSxcbiAgICAgICAgICAgICAgICBnZW5kZXIgOiBmb3JtRGF0YS5nZW5kZXIsXG4gICAgICAgICAgICAgICAgZGF0ZV9vZl9iaXJ0aCA6IGZvcm1EYXRhLmJpcnRoX2RhdGUsXG4gICAgICAgICAgICAgICAgcGhvbmVfbnVtYmVyIDogZm9ybURhdGEubW9iaWVsX251bW1lcixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb25fYW5zd2VyIDogZm9ybURhdGEuc2VjdXJpdHlfYW5zd2VyLFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlIDogZm9ybURhdGEucG9zdGNvZGUsXG4gICAgICAgICAgICAgICAgbnVtYmVyIDogZm9ybURhdGEuaHVpc251bW1lcixcbiAgICAgICAgICAgICAgICBzdHJlZXRfbmFtZSA6IGZvcm1EYXRhLnN0cmFhdG5hYW0sXG4gICAgICAgICAgICAgICAgY2l0eSA6IGZvcm1EYXRhLnBsYWF0c1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uO1wiLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjcmVnaV9hcGlfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyXG4gICAgfVxufTsiLCJ2YXIgUmVzZXRQYXNzd29yZE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIHJlc2V0cGFzc3dvcmQoZm9ybURhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC91c2VyL3Jlc2V0cGFzc3dvcmRcIixcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGVtYWlsIDogZm9ybURhdGEuZV9tYWlsYWRyZXMsXG4gICAgICAgICAgICAgICAgc2VjcmV0X3F1ZXN0aW9uX2Fuc3dlciA6IGZvcm1EYXRhLnNlY3VyaXR5X2Fuc3dlcixcbiAgICAgICAgICAgICAgICBzZWNyZXRfcXVlc3Rpb24gOiBmb3JtRGF0YS5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBuZXdfcGFzc3dvcmQgOiBmb3JtRGF0YS53YWNodHdvb3JkLFxuICAgICAgICAgICAgICAgIHJlcGVhdF9wYXNzd29yZCA6IGZvcm1EYXRhLndhY2h0d29vcmQyXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247XCIsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8kKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwidmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiI3Jlc2V0X3Bhc3N3b3JkX2FwaV9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICByZXNldHBhc3N3b3JkOiByZXNldHBhc3N3b3JkXG4gICAgfVxufTsiLCJ2YXIgUHJvZHVjdE1vZGVsID0gZnVuY3Rpb24oZWFuKVxue1xuICAgIGZ1bmN0aW9uIEdldFByb2R1Y3RJbmZvKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9wcm9kdWN0cy9cIiArIGVhbixcbiAgICAgICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udHJvbGxlciByZXN1bWUgd2l0aCBzdHVmZlxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGFbMF0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIEdldFByb2R1Y3RJbmZvOiBHZXRQcm9kdWN0SW5mb1xuICAgIH1cbn07IiwidmFyIFN0YXRzTW9kZWwgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhEYXRhKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC9zdGF0cy90b3BnYW1lc1wiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0R3JhcGhEYXRhOiBnZXRHcmFwaERhdGFcbiAgICB9XG5cbn07IiwidmFyIFVzZXJNb2RlbCA9IGZ1bmN0aW9uKHVzZXJpZClcbntcbiAgICBmdW5jdGlvbiBHZXRVc2VySW5mbyhjYWxsYmFjaylcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9hcGkuYXotZ2FtZXMubmwvdXNlcnMvXCIgKyB1c2VyaWQsXG4gICAgICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbnRyb2xsZXIgcmVzdW1lIHdpdGggc3R1ZmZcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhkYXRhWzBdKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBHZXRVc2VySW5mbzogR2V0VXNlckluZm9cbiAgICB9XG59OyIsInZhciBXaXNobGlzdE1vZGVsID0gZnVuY3Rpb24oKVxue1xuICAgIGZ1bmN0aW9uIGdldFdpc2hsaXN0KGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdFwiLFxuICAgICAgICAgICAgdHlwZTogXCJnZXRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICh4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFRvV2lzaGxpc3Qodmlld0RhdGEsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpIC8qKyBcIi9cIiArIHZpZXdEYXRhLmVhbl9udW1iZXIqLyxcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aXNobGlzdF9pZCA6IHZpZXdEYXRhLndpc2hsaXN0X2lkLFxuICAgICAgICAgICAgICAgIC8vZWFuX251bWJlciA6IHZpZXdEYXRhLmVhbl9udW1iZXJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9cIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJ1c2VyX2lkXCIpICsgXCIvXCIgKyBTdHJpbmcoZWFuKSxcbiAgICAgICAgICAgIHR5cGU6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIkJlYXJlciBcIiArIENvb2tpZUhlbHBlci5nZXRDb29raWUoXCJhY2Nlc3NfdG9rZW5cIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoeGhyLCBzdGF0dXMsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hQdWJsaWNTdGF0ZShuZXdTdGF0dXMsIGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgdmFyIGdvID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIG5ld0RCU3RhdHVzID0gXCIwXCI7XG4gICAgICAgIGlmIChuZXdTdGF0dXMgPT0gXCJwdWJsaWNcIil7XG4gICAgICAgICAgICBuZXdEQlN0YXR1cyA9IFwiMVwiO1xuICAgICAgICAgICAgZ28gPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyA9PSBcInByaXZhdGVcIil7XG4gICAgICAgICAgICBnbyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1N0YXR1cyBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gbmV3U3RhdHVzID0gXCIgKyBuZXdTdGF0dXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGdvKVxuICAgICAgICB7XG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2FwaS5hei1nYW1lcy5ubC93aXNobGlzdC9zd2l0Y2hfcHVibGljXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwYXRjaFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1wibmV3REJTdGF0dXNcIjpuZXdEQlN0YXR1c30pLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgQ29va2llSGVscGVyLmdldENvb2tpZShcImFjY2Vzc190b2tlblwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKFwiL3ZpZXdzL2Vycm9yL2Vycm9yLmh0bWxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFdpc2hsaXN0OiBnZXRXaXNobGlzdCxcbiAgICAgICAgYWRkVG9XaXNobGlzdDogYWRkVG9XaXNobGlzdCxcbiAgICAgICAgZGVsZXRlRnJvbVdpc2hsaXN0OiBkZWxldGVGcm9tV2lzaGxpc3QsXG4gICAgICAgIHN3aXRjaFB1YmxpY1N0YXRlOiBzd2l0Y2hQdWJsaWNTdGF0ZVxuICAgIH1cbn07IiwidmFyIEFkbWluQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRQYWdlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldFBhZ2Uoc2V0Vmlldyk7IC8vXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VmlldyhkYXRhKSBcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIEFkbWluVXNlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgICAgIHZpZXdIZWxwZXIuc2V0U2F2ZUxpc3RlbmVyKHNhdmVVc2VySW5mbyk7XG4gICAgICAgIHZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlVXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UGFnZSgpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRQYWdlKHNldFZpZXcpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXRWaWV3KGRhdGEpIFxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhdmVVc2VySW5mbyhldmVudClcbiAgICB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIHZhciBmb3JtRGF0YSA9ICQodGhpcykuc2VyaWFsaXplT2JqZWN0KCk7XG5cbiAgICAgICAgTW9kZWwuc2F2ZVVzZXJJbmZvKGZvcm1EYXRhLCBmdW5jdGlvbihmb3JtRGF0YSlcbiAgICAgICAge1xuICAgICAgICAgICAgYWxlcnQoXCJHZWJydWlrZXIgc3VjY2Vzdm9sIGdlw7xwZGF0ZS5cIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcl9pZClcbiAgICB7XG4gICAgICAgIE1vZGVsLmRlbGV0ZVVzZXIodXNlcl9pZCwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydChcIkdlYnJ1aWtlciBzdWNjZXN2b2wgZ2VkZWxldGUuXCIpO1xuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwiL2FkbWluXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBDYXJ0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgY2FydCBpdGVtcyBhbmQgcGFzcyB0aGUgaXRlbXMgdG8gdGhlIFZpZXdIZWxwZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRDYXJ0KClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldENhcnQoZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBpdGVtIHRvIHRoZSBjYXJ0IGFuZCBwYXNzIGl0IHRvIHRoZSB2aWV3SGVscGVyXG4gICAgICogXG4gICAgICogQHBhcmFtIHtpbnR9IGlkICBJdGVtIGlkXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkUHJvZHVjdChpZClcbiAgICB7XG4gICAgICAgIE1vZGVsLmFkZFByb2R1Y3QoaWQsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIuYWRkSXRlbShkYXRhKTsgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgcHJvZHVjdCBhbmQgY2FsbCB0aGUgdmlld0hlbHBlclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2R1Y3QoaWQpXG4gICAge1xuICAgICAgICBNb2RlbC5yZW1vdmVQcm9kdWN0KGlkLCBmdW5jdGlvbiAoZGF0YSkgeyB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0Q2FydCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWRkUHJvZHVjdExpc3RlbmVyKGFkZFByb2R1Y3QpO1xuICAgICAgICBWaWV3SGVscGVyLnNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIENoZWNrb3V0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICBNb2RlbC5nZXRPcmRlckluZm9ybWF0aW9uKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9yZGVyKGV2ZW50KVxuICAgIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgdmFyIGZvcm1EYXRhID0gJCh0aGlzKS5zZXJpYWxpemVPYmplY3QoKTtcblxuICAgICAgICBNb2RlbC5zYXZlT3JkZXIoZm9ybURhdGEsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5maW5pc2hPcmRlcigpO1xuICAgICAgICAgICAgVmlld0hlbHBlci5jbGVhckNhcnQoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpID09IGZhbHNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBSb3V0ZXIucm91dGUoXCIvbG9naW5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNldE9yZGVyTGlzdGVuZXIob3JkZXIpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBEZWxldGVDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG5cbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFxuICAgIH1cbn0iLCJ2YXIgRXJyb3JDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlcilcbntcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0RmF2b3JpdGVMaXN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXREZWxldGVMaXN0ZW5lcihkZWxldGVGcm9tRmF2b3JpdGVMaXN0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGYXZvcml0ZUxpc3QoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0RmF2b3JpdGVMaXN0KHNldFZpZXcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgZGl2X3RvX2hpZGUpXG4gICAge1xuICAgICAgICBNb2RlbC5kZWxldGVGcm9tRmF2b3JpdGVMaXN0KGVhbiwgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLmhpZGVJdGVtKGRpdl90b19oaWRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcblxuICAgICAgICAgICAgUm91dGVyLnJvdXRlKFwicHJvZHVjdHNcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIExvZ291dENvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwubG9nb3V0KGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gc2V0IHZpZXcgdG8gbG9naW4gZm9ybVxuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiBlbWFpbCBhbmQgcGFzc3dvcmQ7IGNsaWNrcyAnbG9naW4nOiBWSUVXIG5vdGljZXMgdGhpcyBhbmQgcmVhY3RzXG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uUGVyZm9ybWVkKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBPcmRlckNvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXIoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gZW1haWwgYW5kIHBhc3N3b3JkOyBjbGlja3MgJ2xvZ2luJzogVklFVyBub3RpY2VzIHRoaXMgYW5kIHJlYWN0c1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWRkVG9GYXZvcml0ZXNMaXN0ZW5lcihhZGRUb0Zhdm9yaXRlTGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9GYXZvcml0ZUxpc3QoZWFuX251bWJlcilcbiAgICB7XG4gICAgICAgIE1vZGVsLmFkZFRvRmF2b3JpdGVMaXN0KGVhbl9udW1iZXIsIGZ1bmN0aW9uIG9uU3VjY2VzcygpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJsaWtlLS1hY3RpdmVcIik7XG4gICAgICAgICAgICBhbGVydChcIlByb2R1Y3Qgc3VjY2Vzdm9sIHRvZWdldm9lZ2QgYWFuIGplIGZhdm9yaWV0ZW4uXCIpOyAvLyBpbSBzdGFhdCB2b29yIGltYWdpbmFyeS9kZW5rYmVlbGRpZ1xuICAgICAgICAgICAgLy8gQ29tbWVudCB0byBzZWxmID0gKE9SREVSICsgT1JERVIgSElTVE9SWSB2ZXJoYWFsIE5pZWxzKSArIChGQVZPUklFVEVOIExJSlNUIHZlcmhhYWwgSGFiYm8pIFNBTUVOVk9FR0VOIFNUUkFLUyBPUiBFTFNFLi4uISEhIVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59O1xuIiwidmFyIE9yZGVyc0NvbnRyb2xsZXIgPSBmdW5jdGlvbih2aWV3SGVscGVyLCBtb2RlbClcbntcbiAgICB2YXIgTW9kZWwgICAgICA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcbiAgICBcbiAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKGV2ZW50KVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0T3JkZXJzKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFByb2R1Y3RzQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldFBhZ2UoXCJcIiwgZnVuY3Rpb24gKGRhdGEpIHsgVmlld0hlbHBlci5zZXRWaWV3KGRhdGEpOyB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJQcm9kdWN0cyhldmVudClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybSAocGFnZSByZWxvYWQpXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGZpbHRlcnMgPSAkKHRoaXMpLnNlcmlhbGl6ZSgpO1xuICAgICAgICBNb2RlbC5nZXRQYWdlKGZpbHRlcnMsIGZ1bmN0aW9uIChkYXRhKSB7IFZpZXdIZWxwZXIubG9hZFByb2R1Y3RzKGRhdGEpOyB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UGFnZSk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RmlsdGVyTGlzdGVuZXIoZmlsdGVyUHJvZHVjdHMpO1xuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwidmFyIFB1YmxpY1dpc2hsaXN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBjb25zb2xlLmxvZyhcImluIG1haW5cIik7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0QWN0aW9uTGlzdGVuZXIoZ2V0UHVibGljV2lzaGxpc3QpO1xuICAgICAgICAvL1ZpZXdIZWxwZXIuZ2V0UGFnZShnZXRQdWJsaWNXaXNobGlzdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UHVibGljV2lzaGxpc3QoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0UHVibGljV2lzaGxpc3Qoc2V0Vmlldyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluXG4gICAgfVxufTsiLCJ2YXIgUmVnaXN0ZXJDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gRnVuY3Rpb24gdGhhdCBpcyBleGVjdXRlZCBvbiBhIGFjdGlvbiBsaXN0ZW5lclxuICAgIGZ1bmN0aW9uIGFjdGlvblBlcmZvcm1lZCgpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyByZXNldCBlcnJvciBtZXNzYWdlc1xuICAgICAgICAkKFwiI3JlZ2lfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG5cbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBmaXggZGF0ZSBvZiBiaXJ0aCAoQVBJIGV4cGVjdHMgY2VydGFpbiBmb3JtYXQpXG4gICAgICAgIGZvcm1EYXRhW1wiYmlydGhfZGF0ZVwiXSA9IGZvcm1EYXRhLmphYXIgKyBcIi1cIiArIGZvcm1EYXRhLm1hYW5kICsgXCItXCIgKyBmb3JtRGF0YS5kYWc7XG5cbiAgICAgICAgLy8gY2hlY2sgd2hldGhlciBhbnkgbWFuZGF0b3J5IGZpZWxkIGlzIGxlZnQgZW1wdHkgYnkgdXNlciBhbmRcbiAgICAgICAgLy8gaWYgc28sIGFib3J0IGZ1bmN0aW9uXG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgbWFuZGF0b3J5RmllbGRzID0gW1widm9vcm5hYW1cIiwgXCJhY2h0ZXJuYWFtXCIsIFwicG9zdGNvZGVcIiwgXCJodWlzbnVtbWVyXCIsIFwiZV9tYWlsYWRyZXNcIiwgXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJzZWN1cml0eV9hbnN3ZXJcIl07IC8vZHJvcGRvd25zIChsaWtlIGdlbmRlcikgYXJlIGFsd2F5cyBmaWxsZWQgaW4sIHNvIGRvbid0IHB1dCBpbiB0aGlzIGxpc3RcblxuICAgICAgICAvLyAocmVzZXQgYWxsIGZpZWxkcyB0byAndmFsaWQnIGJlY2F1c2UgdXNlciBtYXkgaGF2ZSBmaWxsZWQgaW4gZmllbGRzIHNpbmNlXG4gICAgICAgIC8vIHRoZSBwcmV2aW91cyB0aW1lIHRoaXMgZnVuY3Rpb24gd2FzIGNhbGxlZClcbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLnJlbW92ZUNsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfSlcblxuICAgICAgICAkLmVhY2gobWFuZGF0b3J5RmllbGRzLCBmdW5jdGlvbiAoaSwgbWFuRmllbGQpIHtcbiAgICAgICAgICAgIGlmIChmb3JtRGF0YVttYW5GaWVsZF0gPT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI1wiICsgbWFuRmllbGQpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcblxuICAgICAgICAgICAgICAgIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBcbiAgICAgICAgLy8gaWYgYSBtYW5kYXRvcnkgZmllbGQgaXMgZW1wdHksIHNob3cgZXJyb3IgbWVzc2FnZSB0byB1c2VyIGFuZCBhYm9ydCBmdW5jdGlvblxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMpXG4gICAgICAgIHsgXG4gICAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIG9mIHBhZ2Ugc28gdGhhdCB1c2VycyBzZWUgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIC8vIHNob3cgbWVzc2FnZSBcInNvbWV0aGluZyBpcyBub3QgZmlsbGVkIGluXCJcbiAgICAgICAgICAgICQoXCIjcmVnaXN0ZXJfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChmb3JtRGF0YS53YWNodHdvb3JkICE9IGZvcm1EYXRhLndhY2h0d29vcmQyKSBcbiAgICAgICAge1xuICAgICAgICAgICAgcGFzc3dvcmRzTm90SWRlbnRpY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICQoXCIjd3cyX2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIiN3YWNodHdvb3JkXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZDJcIikuYWRkQ2xhc3MoXCJpbnZhbGlkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWJvcnQgZnVuY3Rpb24gaWYgbWFuZGF0b3J5IGZpZWxkIG1pc3NlcyBvciBwYXNzd29yZHMgbm90IGlkZW50aWNhbFxuICAgICAgICBpZiAobWFuZGF0b3J5RmllbGRNaXNzZXMgfHwgcGFzc3dvcmRzTm90SWRlbnRpY2FsKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsZXQgbW9kZWwgc2VuZCB1c2VyIGluZm8gdG8gQVBJXG4gICAgICAgIE1vZGVsLnJlZ2lzdGVyKGZvcm1EYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvYWZ0ZXJfcmVnaXN0ZXIuaHRtbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBNYWluIGZ1bmN0aW9uLCBhbHNvIHRoZSBzdGFydCBzdGFydHBvaW50IGZvciBhIHBhZ2VcbiAgICBmdW5jdGlvbiBtYWluKClcbiAgICB7XG4gICAgICAgIC8vIHNldCB2aWV3IHRvIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgVmlld0hlbHBlci5zZXRWaWV3KCcvdmlld3MvcmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcpO1xuXG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gcmVnaXN0ZXIgaW5mbzsgY2xpY2tzICdyZWdpc3Rlcic6IHZpZXcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuXG4gICAgICAgIC8vIGVtYWlsIGFuZCBwYXNzd29yZCBhcmUgc2VuZCB0byBBUEk7IEFQSSBjaGVja3MgaWYgZW1haWwgYWxyZWFkeSBleGlzdHMgKGFuZCB3aGV0aGVyIHBhc3N3b3JkIGlzIGNvcnJlY3Q/KSBcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkQ29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgICAvLyBGdW5jdGlvbiB0aGF0IGlzIGV4ZWN1dGVkIG9uIGEgYWN0aW9uIGxpc3RlbmVyXG4gICAgZnVuY3Rpb24gYWN0aW9uUGVyZm9ybWVkKClcbiAgICB7XG4gICAgICAgIC8vIFByZXZlbnQgc2VuZGluZyB0aGUgZm9ybVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGVycm9yIG1lc3NhZ2VzXG4gICAgICAgICQoXCIjcmVzZXRfcGFzc3dvcmRfYXBpX2Vycm9yX21lc3NhZ2VcIikuaGlkZSgpO1xuICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLmhpZGUoKTtcblxuICAgICAgICAvLyBwdXQgZm9ybSBmaWVsZHMgaW4gamF2YXNjcmlwdCBPYmplY3RcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG5cbiAgICAgICAgJC5lYWNoKCQodGhpcykuc2VyaWFsaXplQXJyYXkoKSwgZnVuY3Rpb24gKGksIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3JtRGF0YVtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVjayB3aGV0aGVyIGFueSBtYW5kYXRvcnkgZmllbGQgaXMgbGVmdCBlbXB0eSBieSB1c2VyIGFuZFxuICAgICAgICAvLyBpZiBzbywgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgdmFyIG1hbmRhdG9yeUZpZWxkTWlzc2VzID0gZmFsc2U7XG4gICAgICAgIHZhciBtYW5kYXRvcnlGaWVsZHMgPSBbXCJ3YWNodHdvb3JkXCIsIFwid2FjaHR3b29yZDJcIiwgXCJlX21haWxhZHJlc1wiLFwic2VjdXJpdHlfYW5zd2VyXCJdOyAvL2Ryb3Bkb3ducyAobGlrZSBzZWN1cml0eV9xdWVzdGlvbl9hbnN3ZXIpIGFyZSBhbHdheXMgZmlsbGVkIGluLCBzbyBkb24ndCBwdXQgaW4gdGhpcyBsaXN0XG5cbiAgICAgICAgLy8gKHJlc2V0IGFsbCBmaWVsZHMgdG8gJ3ZhbGlkJyBiZWNhdXNlIHVzZXIgbWF5IGhhdmUgZmlsbGVkIGluIGZpZWxkcyBzaW5jZVxuICAgICAgICAvLyB0aGUgcHJldmlvdXMgdGltZSB0aGlzIGZ1bmN0aW9uIHdhcyBjYWxsZWQpXG4gICAgICAgICQuZWFjaChtYW5kYXRvcnlGaWVsZHMsIGZ1bmN0aW9uIChpLCBtYW5GaWVsZCkge1xuICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5yZW1vdmVDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgIH0pXG5cbiAgICAgICAgJC5lYWNoKG1hbmRhdG9yeUZpZWxkcywgZnVuY3Rpb24gKGksIG1hbkZpZWxkKSB7XG4gICAgICAgICAgICBpZiAoZm9ybURhdGFbbWFuRmllbGRdID09IFwiXCIpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIG1hbkZpZWxkKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG5cbiAgICAgICAgICAgICAgICBtYW5kYXRvcnlGaWVsZE1pc3NlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgXG4gICAgICAgIC8vIGlmIGEgbWFuZGF0b3J5IGZpZWxkIGlzIGVtcHR5LCBzaG93IGVycm9yIG1lc3NhZ2UgdG8gdXNlciBhbmQgYWJvcnQgZnVuY3Rpb25cbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzKVxuICAgICAgICB7IFxuICAgICAgICAgICAgLy8gc2Nyb2xsIHRvIHRvcCBvZiBwYWdlIHNvIHRoYXQgdXNlcnMgc2VlIG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICAvLyBzaG93IG1lc3NhZ2UgXCJzb21ldGhpbmcgaXMgbm90IGZpbGxlZCBpblwiXG4gICAgICAgICAgICAkKFwiI3Jlc2V0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBwYXNzd29yZHNOb3RJZGVudGljYWwgPSBmYWxzZTtcblxuICAgICAgICBpZiAoZm9ybURhdGEud2FjaHR3b29yZCAhPSBmb3JtRGF0YS53YWNodHdvb3JkMikgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhc3N3b3Jkc05vdElkZW50aWNhbCA9IHRydWU7XG4gICAgICAgICAgICAkKFwiI3d3Ml9lcnJvcl9tZXNzYWdlXCIpLnNob3coKTtcbiAgICAgICAgICAgICQoXCIjd2FjaHR3b29yZFwiKS5hZGRDbGFzcyhcImludmFsaWRcIik7XG4gICAgICAgICAgICAkKFwiI3dhY2h0d29vcmQyXCIpLmFkZENsYXNzKFwiaW52YWxpZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFib3J0IGZ1bmN0aW9uIGlmIG1hbmRhdG9yeSBmaWVsZCBtaXNzZXMgb3IgcGFzc3dvcmRzIG5vdCBpZGVudGljYWxcbiAgICAgICAgaWYgKG1hbmRhdG9yeUZpZWxkTWlzc2VzIHx8IHBhc3N3b3Jkc05vdElkZW50aWNhbClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxldCBtb2RlbCBzZW5kIHVzZXIgaW5mbyB0byBBUElcbiAgICAgICAgTW9kZWwucmVzZXRwYXNzd29yZChmb3JtRGF0YSwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIFZpZXdIZWxwZXIuc2V0Vmlldygndmlld3MvcmVzZXRwYXNzd29yZC9hZnRlcl9yZXNldC5odG1sJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHsgICAgICBcbiAgICAgICAgLy8gc2V0IHZpZXcgdG8gcmVzZXQgcGFzc3dvcmQgZm9ybVxuICAgICAgICBWaWV3SGVscGVyLnNldFZpZXcoJ3ZpZXdzL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5odG1sJyk7XG5cbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb25QZXJmb3JtZWQpO1xuICAgICAgICAvLyBuZXcgYWN0aW9uIHdhbm5lciBlciBvcCBmaWx0ZXIgd29yZHQgZ2VkcnVrdFxuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07XG5cblxuXG5cbiIsInZhciBQcm9kdWN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCAgICAgID0gbW9kZWw7XG4gICAgdmFyIFZpZXdIZWxwZXIgPSB2aWV3SGVscGVyO1xuICAgIFxuICAgIC8vIEZ1bmN0aW9uIHRoYXQgaXMgZXhlY3V0ZWQgb24gYSBhY3Rpb24gbGlzdGVuZXJcbiAgICBmdW5jdGlvbiBhY3Rpb25QZXJmb3JtZWQoZXZlbnQpXG4gICAge1xuICAgICAgICAvLyBQcmV2ZW50IHNlbmRpbmcgdGhlIGZvcm1cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXG5cblxuXG5cbiAgICAgICAgLy8gTG9vcCB0cm91Z2ggdGhlIGZvcm0gZGF0YSBhbmQgZ2V0IGFsbCBmaWVsZHNcbiAgICAgICAgdmFyIGZvcm1EYXRhID0ge307XG4gICAgICAgICQuZWFjaCgkKHRoaXMpLnNlcmlhbGl6ZUFycmF5KCksIGZ1bmN0aW9uIChpLCBmaWVsZCkge1xuICAgICAgICAgICAgZm9ybURhdGFbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IG1vZGVsIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSVxuICAgICAgICBNb2RlbC5sb2dpbihmb3JtRGF0YS5lbWFpbCwgZm9ybURhdGEucGFzc3dvcmQsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAvLyBzaG93IHVpdGxvZ2dlbiBidXR0b25cbiAgICAgICAgICAgICQoXCIuaW5sb2dnZW5fdGV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLnVpdGxvZ2dlbl90ZXh0XCIpLnNob3coKTtcblxuICAgICAgICAgICAgLy8gV2VlcmdlZWYgZWVuIGFuZGVyZSBwYWdpbmEgZ2ViYXNzZWVyZCBvcCAnYWRtaW4nIG9mICdyZWdpc3RlcmVkIHVzZXInXG4gICAgICAgICAgICBuZXcgUGFnZUNvbnRyb2xsZXIobmV3IFBhZ2VWaWV3SGVscGVyKCksIG5ldyBQYWdlTW9kZWwoKSkubWFpbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBsZXQgdmlldyBzaG93IHZpZXcgd2l0aCBkYXRhIGZyb20gZGF0YWJhc2VcbiAgICBmdW5jdGlvbiBzaG93VmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgdmlld0hlbHBlci5zZXRWaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIE1haW4gZnVuY3Rpb24sIGFsc28gdGhlIHN0YXJ0IHN0YXJ0cG9pbnQgZm9yIGEgcGFnZVxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgLy8gd2hhdCBoYXBwZW5zOlxuICAgICAgICAvLyAxKSB1c2VyIGNsaWNrcyBvbiBhIHByb2R1Y3QgXG4gICAgICAgIC8vIDIpIG1vZGVsIGdldHMgaW5mbyBvZiB0aGUgcHJvZHVjdFxuICAgICAgICAvLyAzKSBzeXN0ZW0gcHV0cyBpbmZvIGluIGh0bWxcbiAgICAgICAgLy8gNCkgdmlldyBzaG93cyBpbmZvXG5cbiAgICAgICAgLy8gMikgbW9kZWwgZ2V0cyBpbmZvIG9mIHRoZSBwcm9kdWN0XG4gICAgICAgIC8vIDMpIHN5c3RlbSBwdXRzIGluZm8gaW4gaHRtbFxuICAgICAgICBtb2RlbC5HZXRQcm9kdWN0SW5mbyhzaG93Vmlldyk7XG5cblxuXG4gICAgICAgIC8vIHNldCB2aWV3IHRvIGxvZ2luIGZvcm1cbiAgICAgICAgLy9WaWV3SGVscGVyLnNldFZpZXcoKTtcblxuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIGVtYWlsIGFuZCBwYXNzd29yZDsgY2xpY2tzICdsb2dpbic6IFZJRVcgbm90aWNlcyB0aGlzIGFuZCByZWFjdHNcbiAgICAgICAgLy9WaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGFjdGlvblBlcmZvcm1lZCk7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluOiBtYWluLFxuICAgICAgICBzaG93VmlldyA6IHNob3dWaWV3XG4gICAgfVxufTsiLCJ2YXIgU3RhdHNDb250cm9sbGVyID0gZnVuY3Rpb24odmlld0hlbHBlciwgbW9kZWwpXG57XG4gICAgdmFyIE1vZGVsICAgICAgPSBtb2RlbDtcbiAgICB2YXIgVmlld0hlbHBlciA9IHZpZXdIZWxwZXI7XG4gICAgXG4gICAgLy8gTWFpbiBmdW5jdGlvbiwgYWxzbyB0aGUgc3RhcnQgc3RhcnRwb2ludCBmb3IgYSBwYWdlXG4gICAgZnVuY3Rpb24gbWFpbigpXG4gICAge1xuICAgICAgICBWaWV3SGVscGVyLnNldEFjdGlvbkxpc3RlbmVyKGdldEdyYXBoRGF0YSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0R3JhcGhEYXRhKClcbiAgICB7XG4gICAgICAgIE1vZGVsLmdldEdyYXBoRGF0YShzZXRUb3BUZW5WaWV3KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0VG9wVGVuVmlldyhkYXRhKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRUb3BUZW5WaWV3KGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbjogbWFpblxuICAgIH1cbn07IiwiIiwidmFyIFdpc2hsaXN0Q29udHJvbGxlciA9IGZ1bmN0aW9uKHZpZXdIZWxwZXIsIG1vZGVsKVxue1xuICAgIHZhciBNb2RlbCA9IG1vZGVsO1xuICAgIHZhciBWaWV3SGVscGVyID0gdmlld0hlbHBlcjtcblxuICAgIGZ1bmN0aW9uIG1haW4oKVxuICAgIHtcbiAgICAgICAgVmlld0hlbHBlci5zZXRBY3Rpb25MaXN0ZW5lcihnZXRXaXNobGlzdCk7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0RGVsZXRlTGlzdGVuZXIoZGVsZXRlRnJvbVdpc2hsaXN0KTtcbiAgICAgICAgVmlld0hlbHBlci5zZXRQdWJsaWNMaXN0ZW5lcihzd2l0Y2hQdWJsaWNTdGF0ZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0V2lzaGxpc3QoKVxuICAgIHtcbiAgICAgICAgTW9kZWwuZ2V0V2lzaGxpc3Qoc2V0Vmlldyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIFZpZXdIZWxwZXIuc2V0VmlldyhkYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVGcm9tV2lzaGxpc3QoZWFuLCBkaXZfdG9faGlkZSlcbiAgICB7XG4gICAgICAgIE1vZGVsLmRlbGV0ZUZyb21XaXNobGlzdChlYW4sIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgVmlld0hlbHBlci5oaWRlSXRlbShkaXZfdG9faGlkZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cylcbiAgICB7XG4gICAgICAgIE1vZGVsLnN3aXRjaFB1YmxpY1N0YXRlKG5ld1N0YXR1cywgZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBWaWV3SGVscGVyLnNob3dFeGFtcGxlQnV0dG9uKG5ld1N0YXR1cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1haW46IG1haW5cbiAgICB9XG59OyIsInZhciBBZG1pblZpZXdIZWxwZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7IC8vIGlmICdkb2N1bWVudCByZWFkeScgcGVyZm9ybSBcImFjdGlvblwiXG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgIGZ1bmN0aW9uIHNldFZpZXcoZGF0YSlcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHsgLy8gd2FhciBpZCA9ICdjb21wb25lbnQnIGRvZSAubG9hZC4uLi4uLlxuICAgICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyBDbG9uZSBwcm9kdWN0XG4gICAgICAgICAgICAgICAgdmFyIHVzZXIgPSAkKCcjc2luZ2xlX3VzZXInKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZmlyc3RuYW1lXCIpLmh0bWwodmFsdWUuZmlyc3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX2ZpcnN0bmFtZVwiKS5hdHRyKCdocmVmJywgJy9hZG1pbl91c2VyLycgKyB2YWx1ZS51c2VyX2lkKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9faW5zZXJ0aW9uXCIpLmh0bWwodmFsdWUuaW5zZXJ0aW9uKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fbGFzdG5hbWVcIikuaHRtbCh2YWx1ZS5zdXJuYW1lKTtcbiAgICAgICAgICAgICAgICAkKHVzZXIpLmZpbmQoXCIudXNlcl9fZW1haWxcIikuaHRtbCh2YWx1ZS5lbWFpbCk7XG4gICAgICAgICAgICAgICAgJCh1c2VyKS5maW5kKFwiLnVzZXJfX3Bob25lbnVtYmVyXCIpLmh0bWwodmFsdWUucGhvbmVfbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgICQoXCIjdXNlcnNfYm9keVwiKS5hcHBlbmQodXNlcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNzaW5nbGVfdXNlclwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgfVxufVxuXG4gICAgLy9kYXQgaGllcm9uZGVyIHphdCBhYXJkaWcgd2F0IHdlcmsgaW4uLi4gRG9uYWxkIHdpbCBub2cgZmYgaG91ZGVuXG5cbiAgICAvLyBmdW5jdGlvbiBzaG93VXNlcnMoZGF0YSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGRvY3VtZW50LnRpdGxlID1cIkFkbWluIC0gQVogR2FtZXNcIjtcblxuICAgIC8vICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvYWRtaW4vYWRtaW4uaHRtbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyAgICAgICAgIHZhciB0YWJsZSA9ICQoXCI8dGFibGUgaWQ9J3VzZXJzX3RhYmxlJz48L3RhYmxlPlwiKTtcblxuICAgIC8vICAgICAgICAgLy8gdGFibGUgaGVhZGVyXG4gICAgLy8gICAgICAgICB2YXIgcm93ID0gJCgnPHRyPjwvdHI+Jyk7XG4gICAgLy8gICAgICAgICByb3cuYXBwZW5kKCc8dGQ+Vm9vcm5hYW08L3RkPjx0ZD5UdXNzZW52PC90ZD48dGQ+QWNodGVybmFhbTwvdGQ+PHRkPkdlYnJ1aWtlcnNuYWFtPC90ZD48dGQ+ZW1haWw8L3RkPjx0ZD50eXBlPC90ZD4nKTtcblxuICAgIC8vICAgICAgICAgJC5lYWNoKGRhdGEsIGZ1bmN0aW9uKG51bWJlcnIsIHVzZXIpIFxuICAgIC8vICAgICAgICAge1xuICAgIC8vICAgICAgICAgICAgIHZhciByb3cgPSAkKCc8dHI+PC90cj4nKTtcbiAgICAvLyAgICAgICAgICAgICAkLmVhY2godXNlciwgZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbiAgICAvLyAgICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQpXG4gICAgLy8gICAgICAgICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpLmh0bWwoU3RyaW5nKHZhbHVlKSkgKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoICQoXCI8dGQgY2xhc3M9J3RkX3VzZXInPjwvdGQ+XCIpICk7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xuICAgIC8vICAgICAgICAgICAgIC8vIC8vZm9yIGFkZGl0aW9uYWwgdXNlciBpbmZvIGlmIGNsaWNrZWRcbiAgICAvLyAgICAgICAgICAgICAvLyByb3cgPSAkKCc8ZGl2IGNsYXNzPVwidG9iZXRhYmxlXCI+PC9kaXY+Jyk7XG4gICAgLy8gICAgICAgICAgICAgLy8gdGFibGUuYXBwZW5kKHJvdyk7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgICAgICQoJyN1c2VycycpLmFwcGVuZCh0YWJsZSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIGZ1bmN0aW9uIHB1dEluZm9Jbkh0bWwoY2xpY2tlZCwgZGF0YSlcbiAgICAvLyB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdpbiBwdXRJbmZvSW5IdG1sKCknKTtcbiAgICAvLyAgICAgLy8gc2hvdyBpbmZvIG9mIHRoZSByaWdodCB1c2VyIChpZiBub3QgYWxyZWFkeSBzaG93aW5nIGl0KVxuICAgIC8vICAgICAvLyBpbnNlcnQgcm93IGFzIHRhYmxlIGhlYWRlclxuICAgIC8vICAgICB2YXIgaGVhZGVycm93ID0gJCgnPHRyPjwvdHI+JykuYXBwZW5kKCc8dGQ+d3c8L3RkPjx0ZD5nZWJsb2trZWVyZDwvdGQ+PHRkPmlkPC90ZD48dGQ+Z2VuZGVyPC90ZD48dGQ+Z2Vib29ydGVkYXR1bTwvdGQ+PHRkPnZyYWFnPC90ZD48dGQ+YW50d29vcmQ8L3RkPicpO1xuXG4gICAgLy8gICAgIC8vIGluc2VydCByb3cgd2l0aCB0ZSB1c2VyaW5mb1xuICAgIC8vICAgICB2YXIgaW5mb3JvdyA9ICQoJzx0cj48L3RyPicpO1xuXG4gICAgLy8gICAgIHZhciBjb3VudCA9IDA7XG4gICAgLy8gICAgICQuZWFjaChkYXRhWzBdLCBmdW5jdGlvbihrZXksIHZhbHVlKVxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBpZiAoY291bnQgPT0gMSkgeyAvLyBnZWJsb2trZWVyZFxuICAgIC8vICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAxKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ25lZSc7XG4gICAgLy8gICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2phJ1xuICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gJ2RiIGZvdXQ/J1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coY291bnQpO1xuICAgIC8vICAgICAgICAgdmFyIHRkID0gJCgnPHRkPjwvdGQ+JykuYXBwZW5kKHZhbHVlKTtcblxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2tleSwgdmFsdWU6ICcgKyBrZXksIHZhbHVlKTtcblxuICAgIC8vICAgICAgICAgaW5mb3Jvdy5hcHBlbmQodGQpO1xuXG4gICAgLy8gICAgICAgICBjb3VudCArPSAxO1xuICAgIC8vICAgICB9KVxuXG4gICAgLy8gICAgIGluZm9yb3cuaW5zZXJ0QWZ0ZXIoICQoY2xpY2tlZCkuY2xvc2VzdCgndHInKSApO1xuICAgIC8vICAgICBoZWFkZXJyb3cuaW5zZXJ0QWZ0ZXIoJChjbGlja2VkKS5jbG9zZXN0KCd0cicpKTtcbiAgICAvLyB9XG5cbiIsInZhciBBZG1pblVzZXJWaWV3SGVscGVyID0gZnVuY3Rpb24gKClcbntcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pOyAvLyBpZiAnZG9jdW1lbnQgcmVhZHknIHBlcmZvcm0gXCJhY3Rpb25cIlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmFsdWUpXG4gICAge1xuICAgICAgICAvL3ByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoJy92aWV3cy9hZG1pbnVzZXIvYWRtaW51c2VyLmh0bWwnLCBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKFwiI2RlbGV0ZV9idG5cIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUudXNlcl9pZCkgICBcbiAgICAgICAgICAgICQoXCIjZmlyc3RfbmFtZVwiKS52YWwodmFsdWUuZmlyc3RfbmFtZSk7XG4gICAgICAgICAgICAkKFwiI2luc2VydGlvblwiKS52YWwodmFsdWUuaW5zZXJ0aW9uKTtcbiAgICAgICAgICAgICQoXCIjc3VybmFtZVwiKS52YWwodmFsdWUuc3VybmFtZSk7XG4gICAgICAgICAgICAkKFwiI3VzZXJfdHlwZVwiKS52YWwodmFsdWUudXNlcl90eXBlKTtcbiAgICAgICAgICAgICQoXCIjZW1haWxcIikudmFsKHZhbHVlLmVtYWlsKTtcbiAgICAgICAgICAgICQoXCIjcGFzc3dvcmRcIikuYXR0cigncGxhY2Vob2xkZXInLCAnVnVsIGhpZXIgaWV0cyBpbiBvbSBoZXQgd2FjaHR3b29yZCB0ZSB2ZXJhbmRlcmVuJyk7XG4gICAgICAgICAgICAkKFwiI2dlbmRlclwiKS52YWwodmFsdWUuZ2VuZGVyKTtcbiAgICAgICAgICAgICQoXCIjZGF0ZV9vZl9iaXJ0aFwiKS52YWwodmFsdWUuZGF0ZV9vZl9iaXJ0aCk7XG4gICAgICAgICAgICAkKFwiI3Bob25lX251bWJlclwiKS52YWwodmFsdWUucGhvbmVfbnVtYmVyKTtcbiAgICAgICAgICAgICQoXCIjaXNfYWN0aXZlXCIpLnZhbCh2YWx1ZS5pc19hY3RpdmUpO1xuICAgICAgICAgICAgJChcIiN1c2VyX2lkXCIpLnZhbCh2YWx1ZS51c2VyX2lkKTtcblxuICAgICAgICAgICAgdmFyIHRvZGF5ICAgICAgID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIHZhciBkYXRlT2ZCaXJ0aCA9IG5ldyBEYXRlKHZhbHVlLmRhdGVfb2ZfYmlydGgpO1xuXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGVPZkJpcnRoLmdldERhdGUoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNkYWdcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IHRvZGF5LmdldEZ1bGxZZWFyKCkgKyAxOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0ZU9mQmlydGguZ2V0RnVsbFllYXIoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjamFhclwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGkgKyBcIicgc2VsZWN0ZWQ9J3NlbGVjdGVkJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoXCIjbWFhbmRcIikudmFsKGRhdGVPZkJpcnRoLmdldE1vbnRoKCkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNhdmVMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5vbignc3VibWl0JywgJyN1c2VyZm9ybScsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCAnI2RlbGV0ZV9idG4nLCBmdW5jdGlvbiAoZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWN0aW9uKCQodGhpcykuZGF0YShcImlkXCIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRTYXZlTGlzdGVuZXI6IHNldFNhdmVMaXN0ZW5lcixcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyXG4gICAgfVxufSIsInZhciBDYXJ0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgaWYgKHZpZXdEYXRhICE9IFwiXCIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpZXdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgYWRkSXRlbShpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB0b3RhbCBwcmljZSAgb2YgdGhlIGNhcnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2ludH0gdG90YWxQcmljZSAgVG90YWwgcHJpY2Ugb2YgdGhlIGNhcnRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVUb3RhbFByaWNlKG5ld1ByaWNlKVxuICAgIHtcbiAgICAgICAgbmV3UHJpY2UgPSBwYXJzZUZsb2F0KG5ld1ByaWNlKSArIHBhcnNlRmxvYXQoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpLnN1YnN0cigxKSk7XG4gICAgICAgICQoXCIuY2FydF9fdG90YWwgLnByaWNlXCIpLmh0bWwoXCLigqxcIiArIHBhcnNlRmxvYXQobmV3UHJpY2UpLnRvRml4ZWQoMikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2UgbmV3IGNhcnQgaXRlbSB2aXNpYWJsZSBpbiB0aGUgRE9NXG4gICAgICogXG4gICAgICogQHBhcmFtICB7YXJyYXl9ICBpdGVtICBQcm9kdWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKVxuICAgIHtcbiAgICAgICAgdmFyIGNhcnRJdGVtID0gJCgnPGRpdj4nKS5odG1sKCQoJy5zaWRlYmFyX19jb250ZW50X190bXAnKS5odG1sKCkpO1xuXG4gICAgICAgIGNhcnRJdGVtLmZpbmQoXCIuY2FydF9faXRlbV9fdGl0bGVcIikuaHRtbChpdGVtLnRpdGxlKTtcbiAgICAgICAgY2FydEl0ZW0uZmluZChcIi5jYXJ0X19pdGVtX19wcmljZVwiKS5odG1sKFwi4oKsXCIgKyBpdGVtLnByaWNlLnRvRml4ZWQoMikpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1fX2ltYWdlIGltZ1wiKS5hdHRyKFwic3JjXCIsIGl0ZW0uaW1hZ2UpO1xuICAgICAgICBjYXJ0SXRlbS5maW5kKFwiLmNhcnRfX2l0ZW1cIikuYXR0cihcImRhdGEtaWRcIiwgaXRlbS5lYW5fbnVtYmVyKVxuXG4gICAgICAgICQoXCIuY2FydFwiKS5hcHBlbmQoY2FydEl0ZW0pO1xuXG4gICAgICAgIC8vIENoYW5nZSBhbW91bnQgb2YgaXRlbXNcbiAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcbiAgICAgICAgJChcIi5jYXJ0X2J1dHRvbiAuY291bnRcIikuaHRtbChwYXJzZUludChhbW91bnQpICsgMSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSB0b3RhbCBwcmljZVxuICAgICAgICB1cGRhdGVUb3RhbFByaWNlKGl0ZW0ucHJpY2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGNhcnQgd2hlbiB0aGUgcGFnZSBpcyAgcmVhc2VcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIGZvciB0aGUgQWRkIHRvIGNhcnQgYnV0dG9uXG4gICAgICogXG4gICAgICogQHBhcmFtICB7ZnVuY3Rpb259IGFkZHRvQ2FydCAgTW9kZWwgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRBZGRQcm9kdWN0TGlzdGVuZXIoYWRkVG9DYXJ0KVxuICAgIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5hZGR0b2NhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgcHJvZHVjdF9pZCA9ICQodGhpcykuZGF0YShcImlkXCIpO1xuICAgICAgICAgICAgYWRkVG9DYXJ0KHByb2R1Y3RfaWQpO1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KFwiI3RvX3Nob3BfY2FydFwiKS5maW5kKFwiI3Nob3BfY2FydFwiKS5mYWRlVG8oMCwgMTAwKS5kZWxheSgxMDAwKS5mYWRlVG8oNjAwLCAwKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5lciBmb3IgcmVtb3ZlIGEgcHJvZHVjdCBmcm9tIHRoZSBET00gY2FydFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlbW92ZVByb2R1Y3QgQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBwcm9kY3V0IGZyb20gdGhlIG1lbW9yeVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldFJlbW92ZUxpc3RlbmVyKHJlbW92ZVByb2R1Y3QpIHtcbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5jYXJ0X19pdGVtX19yZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KXtcbiAgICAgICAgICAgIHZhciBjYXJ0aXRlbSAgID0gJCh0aGlzKS5wYXJlbnQoKTtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0X2lkID0gJCh0aGlzKS5wYXJlbnQoKS5kYXRhKFwiaWRcIik7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9kdWN0IGZyb20gRE9NIGNhcnRcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLmFkZENsYXNzKFwiY2FydF9faXRlbS0tcmVtb3ZlZFwiKTtcbiAgICAgICAgICAgICQoY2FydGl0ZW0pLm9uKFwiYW5pbWF0aW9uZW5kIHdlYmtpdEFuaW1hdGlvbkVuZCBvQW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRGVjcmVzZSBjb3VudFxuICAgICAgICAgICAgdmFyIGFtb3VudCA9ICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoKTtcbiAgICAgICAgICAgICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwocGFyc2VJbnQoYW1vdW50KSAtIDEpO1xuXG4gICAgICAgICAgICByZW1vdmVQcm9kdWN0KHByb2R1Y3RfaWQpXG4gICAgICAgICAgICB1cGRhdGVUb3RhbFByaWNlKC0kKGNhcnRpdGVtKS5maW5kKFwiLmNhcnRfX2l0ZW1fX3ByaWNlXCIpLmh0bWwoKS5zdWJzdHIoMSkpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGFkZEl0ZW06IGFkZEl0ZW0sXG4gICAgICAgIHVwZGF0ZVRvdGFsUHJpY2U6IHVwZGF0ZVRvdGFsUHJpY2UsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0QWRkUHJvZHVjdExpc3RlbmVyOiBzZXRBZGRQcm9kdWN0TGlzdGVuZXIsXG4gICAgICAgIHNldFJlbW92ZUxpc3RlbmVyOiBzZXRSZW1vdmVMaXN0ZW5lcixcbiAgICB9XG59OyIsInZhciBDaGVja291dFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldyhjYXJ0KVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIkJlc3RlbGxlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2NoZWNrb3V0L2NoZWNrb3V0Lmh0bWwnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgaWYgKGNhcnQgIT0gdW5kZWZpbmVkICYmIGNhcnQgIT0gXCJcIilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2FydCBjb250ZW50XG4gICAgICAgICAgICAgICAgJC5lYWNoKGNhcnQsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3QgPSAkKFwiI3Byb2R1Y3RcIikuY2xvbmUoKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fdGl0bGVcIikuaHRtbCh2YWx1ZS50aXRsZSk7XG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSArIHZhbHVlLnByaWNlLnRvRml4ZWQoMikpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdFwiKS5hcHBlbmQoXCI8aHIgLz5cIik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKFwiI29yZGVyX2luZm8gLm9yZGVyX19uYXZpZ2F0ZVwiKS5maXJzdCgpLnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmh0bWwoXCI8ZGl2IGNsYXNzPSdtZXNzYWdlIG1lc3NhZ2UtLWluZm8nPkplIHdpbmtlbHdhZ2VuIGlzIG5vZyBsZWVnLCBzdG9wIGVyIHByb2R1Y3RlbiBpbiBvbSBkZXplIHRlIGt1bm5lbiBiZXN0ZWxsZW4uPC9kaXY+XCIpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgYW5kIG1vdmUgdG90YWwgcHJpY2UgdG8gZW5kIG9mIGxpc3RcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcbiAgICAgICAgICAgICQoXCIudG90YWxfX3ByaWNlXCIpLmh0bWwoJChcIi5jYXJ0X190b3RhbCAucHJpY2VcIikuaHRtbCgpKTtcblxuICAgICAgICAgICAgLy8gU2V0IGRlbGl2ZXJ5IGRhdGUgKHdlIGFsd2F5cyBkZWxpdmVyIGluIG9uZSBkYXkpXG4gICAgICAgICAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdG9kYXkuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKTtcblxuICAgICAgICAgICAgJChcIi5kZWxpdmVyeV9kYXRlXCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpICsgXCIgXCIgKyB0b2RheS50b0xvY2FsZVN0cmluZyhcIm5sLU5MXCIsIHttb250aDogXCJsb25nXCJ9KSk7XG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fbW9udGhcIikuaHRtbCh0b2RheS50b0xvY2FsZVN0cmluZyhcIm5sLU5MXCIsIHttb250aDogXCJzaG9ydFwifSkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAkKFwiLmRlbGl2ZXJ5X19jYWxlbmRhcl9fZGF5XCIpLmh0bWwodG9kYXkuZ2V0RGF0ZSgpKTtcblxuICAgICAgICAgICAgLy8gU2V0IHVzZXIgYWRkcmVzc1xuICAgICAgICAgICAgVXNlckhlbHBlci5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fbmFtZVwiKS5odG1sKHVzZXIuZmlyc3RfbmFtZSArIFwiIFwiICsgdXNlci5pbnNlcnRpb24gKyBcIiBcIiArIHVzZXIuc3VybmFtZSk7XG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fc3RyZWV0XCIpLmh0bWwodXNlci5hZGRyZXNzLnN0cmVldCArIFwiIFwiICsgdXNlci5hZGRyZXNzLmhvdXNlX251bWJlcik7XG4gICAgICAgICAgICAgICAgJChcIi5hZHJlc19fcG9zdGFsY29kZVwiKS5odG1sKHVzZXIuYWRkcmVzcy5wb3N0YWxfY29kZSArIFwiIFwiICsgdXNlci5hZGRyZXNzLmNpdHkudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gR28gdG8gdGhlIGxhc3Qgc3RlcCBvZiB0aGUgb3JkZXIgcHJvY2Vzc1xuICAgIGZ1bmN0aW9uIGZpbmlzaE9yZGVyKClcbiAgICB7XG4gICAgICAgICQoXCJ1bC5vcmRlci1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpIGFcIikuYWRkQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgJChcInVsLm9yZGVyLXN0ZXBzIGxpLmNvbmZpcm1hdGlvblwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAkKFwiLm9yZGVyX19zdGVwXCIpLnJlbW92ZUNsYXNzKFwib3JkZXJfX3N0ZXAtLWFjdGl2ZVwiKTtcbiAgICAgICAgJChcIiNjb25maXJtYXRpb25cIikuYWRkQ2xhc3MoXCJvcmRlcl9fc3RlcC0tYWN0aXZlXCIpO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSB2aXNpYmxlIGNhcnRcbiAgICBmdW5jdGlvbiBjbGVhckNhcnQoKVxuICAgIHtcbiAgICAgICAgJChcIi5jYXJ0XCIpLmVtcHR5KCk7XG4gICAgICAgICQoXCIuY2FydF9idXR0b24gLmNvdW50XCIpLmh0bWwoXCIwXCIpO1xuICAgICAgICAkKFwiLmNhcnRfX3RvdGFsIC5wcmljZVwiKS5odG1sKFwi4oKsMDAuMDBcIilcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIENvbmZpcm0gdGhlIG9yZGVyIHdoZW4gc2JtaXR0aW5nIHRoZSBmb3JtXG4gICAgZnVuY3Rpb24gc2V0T3JkZXJMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5vbihcInN1Ym1pdFwiLCBcIiNvcmRlcmZvcm1cIiwgYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0T3JkZXJMaXN0ZW5lcjogc2V0T3JkZXJMaXN0ZW5lcixcbiAgICAgICAgZmluaXNoT3JkZXI6IGZpbmlzaE9yZGVyLFxuICAgICAgICBjbGVhckNhcnQ6IGNsZWFyQ2FydFxuICAgIH1cbn07IiwidmFyIEVycm9yVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJPZXBzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZXJyb3IvZXJyb3IuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTsiLCJ2YXIgRmF2b3JpdGVMaXN0Vmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvL2NoYW5nZSB2aWV3IG9mIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIldMIFZJRVc6IEluc2lkZSBzZXRWaWV3XCIpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiRmF2b3JpZXRlbmxpanN0IC0gQVogR2FtZXNcIjtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cImZhdm9yaXRlbGlzdFwiPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgIGxvYWRGYXZvcml0ZWxpc3Qodmlld0RhdGEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkRmF2b3JpdGVsaXN0KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgJChcIiNmYXZvcml0ZWxpc3RcIikubG9hZCgnL3ZpZXdzL2Zhdm9yaXRlbGlzdC9mYXZvcml0ZWxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgZmF2b3JpdGVsaXN0IGl0ZW1zIHRvIGh0bWxcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDA7XG5cbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgZmF2b3JpdGVfX2xpc3RfX2l0ZW0gPSAkKCc8ZGl2PicpLmFwcGVuZCgkKCcjZmF2b3JpdGVfX2xpc3RfX2l0ZW0nKS5jbG9uZSgpKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudCArIDE7XG5cbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19pZFwiKS5hcHBlbmQoY3VycmVudCk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIuZmF2b3JpdGVfX2xpc3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpK3ZhbHVlLnByaWNlKTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiLmZhdm9yaXRlX19saXN0X19wbGF0Zm9ybVwiKS5hcHBlbmQoUGxhdGZvcm1Mb2dvKHZhbHVlLnBsYXRmb3JtKSk7XG4gICAgICAgICAgICAgICAgJChmYXZvcml0ZV9fbGlzdF9faXRlbSkuZmluZChcIi5mYXZvcml0ZV9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xuICAgICAgICAgICAgICAgICQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pLmZpbmQoXCIjZGVsZXRlX2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKGZhdm9yaXRlX19saXN0X19pdGVtKS5maW5kKFwiI2NhcnRfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgJChcIiNmYXZvcml0ZV9fbGlzdFwiKS5hcHBlbmQoZmF2b3JpdGVfX2xpc3RfX2l0ZW0pO1xuXG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY291bnQgPT0gMCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNmYXZvcml0ZWxpc3RfZXJyb3JfbWVzc2FnZVwiKS5zaG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjZmF2b3JpdGVfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXREZWxldGVMaXN0ZW5lcigpXCIpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vZmYoKS5vbihcImNsaWNrXCIsIFwiI2RlbGV0ZV9idG5cIiwgZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGVhbiA9ICQodGhpcykuZGF0YShcImlkXCIpO1xuICAgICAgICAgICAgdmFyIGRpdl90b19oaWRlID0gJCh0aGlzKS5jbG9zZXN0KFwiLnJvd1wiKTtcbiAgICAgICAgICAgIGFjdGlvbihlYW4sIGRpdl90b19oaWRlKTtcbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgZGl2X3RvX2hpZGUuZmFkZVRvKDIwMCwgMCkuc2xpZGVVcCgyMDApO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRGYXZvcml0ZWxpc3Q6IGxvYWRGYXZvcml0ZWxpc3QsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0RGVsZXRlTGlzdGVuZXI6IHNldERlbGV0ZUxpc3RlbmVyLFxuICAgICAgICBoaWRlSXRlbTogaGlkZUl0ZW1cbiAgICB9XG59IiwidmFyIFN0YXRzVmlld0hlbHBlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcbiAgICB9XG5cbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRUb3BUZW5WaWV3KGdyYXBoRGF0YSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyYXBoRGF0YSk7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIlN0YXRzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvZ3JhcGhzL2dyYXBocy5odG1sJywgZnVuY3Rpb24gKCkgeyAvLyB3YWFyIGlkID0gJ2NvbXBvbmVudCcgZG9lIC5sb2FkLi4uLi4uXG4gICAgICAgICAgICB2YXIgbGFiZWxzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgICAgICAgICB2YXIgZ2FtZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHZhciBsYXN0X3JhbmtfbnVtID0gMDsgLy9hc3N1bWluZyB2YWx1ZS5yYW5rIGlzIG5ldmVyIDAhXG4gICAgICAgICAgICB2YXIgaGlnaGVzdFZhbCA9IDA7XG5cbiAgICAgICAgICAgICQuZWFjaChncmFwaERhdGEsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBnYW1lQ291bnQrKztcblxuICAgICAgICAgICAgICAgIGlmIChnYW1lQ291bnQgPCAxMSB8fCB2YWx1ZS5yYW5rID09IGxhc3RfcmFua19udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzLnB1c2godmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2godmFsdWUudXNlcl9jb3VudCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZUNvdW50ID09IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0X3JhbmtfbnVtID0gdmFsdWUucmFuaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsYWJlbHMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgICAgIHZhciBlbCA9ICQoXCIjZ3JhcGhfX3RvcHRlbml0ZW1zX19jbnZzXCIpO1xuICAgICAgICAgICAgdmFyIFRvcFRlbkNoYXJ0ID0gbmV3IENoYXJ0KGVsLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2hvcml6b250YWxCYXInLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMjAwLCAyNiwgMSknLCAvL2dyb2VuXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJXaWR0aDogMVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTWVlc3QgdmVya29jaHRlIGdhbWVzXCIgLy8gbmVlZCBpbiBqYW51YXJpLCBpbiBmZWJydWFyaSwgZXRjLlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOnRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeUF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgeEF4ZXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW5BdFplcm86dHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWF4Um90YXRpb246IDkwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaW5Sb3RhdGlvbjogOTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHB1dCBkZXNjaXB0aW9uIGJlbG93IGdyYXBoXG4gICAgICAgICAgICB2YXIgZGVzY3IgPSAnRGV6ZSBncmFmaWVrIGxhYXQgZGUgZ2FtZXMgemllbiBtZXQgaGV0IG1lZXN0ZSBhYW50YWwgZ2VicnVpa2VycyBkYXQgZGUgZ2FtZSAxIG9mIG1lZXIga2VlciBoZWVmdCBnZWtvY2h0IGluIGRlIGdla296ZW4gdGlqZHNwZXJpb2RlLic7XG5cbiAgICAgICAgICAgIHZhciB0aGVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uX190b3B0ZW5cIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRlc2NyKTsgXG4gICAgICAgICAgICB0aGVEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7IFxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lcixcbiAgICAgICAgc2V0VG9wVGVuVmlldzogc2V0VG9wVGVuVmlldyxcbiAgICB9XG59IiwidmFyIExvZ2luVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIklubG9nZ2VuIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3MvbG9naW4vbG9naW4uaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgIC8vIHVzZXIgZmlsbHMgaW4gbG9naW4gZm9ybVxuICAgICAgICAvLyB1c2VyIHByZXNzZXMgJ2xvZ2luJ1xuXG4gICAgICAgIC8vIGlmIHVzZXIgcHJlc3NlcyAnbG9naW4nLCBwZXJmb3JtIGFjdGlvbiAobWFrZSBjb250cm9sbGVyIHNlbmQgZW1haWwgYW5kIHBhc3N3b3JkIHRvIEFQSSlcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjbG9naW5mb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBMb2dvdXRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcoKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlVpdGxvZ2dlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL2xvZ291dC9sb2dvdXQuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEV4ZWN1dGUgdGhlIGV2ZW50IHdoZW4gJ3NvbWV0aGluZycgaGFwcGVucyAod2hlbiBhIGJ1dHRvbiBpcyBjbGlja2VkIGZvciBleGFtcGxlKVxuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBPcmRlclZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy8gQ2hhbmdlIHRoZSB2aWV3IG9mIHRoZSBwYWdlXG4gICAgZnVuY3Rpb24gc2V0VmlldyhvcmRlcilcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID1cIkJlc3RlbGdlc2NoaWVkZW5pcyAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL29yZGVyL29yZGVyLmh0bWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIERhdGVcbiAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUob3JkZXIub3JkZXJfZGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIEZvcm1hdCBzaGlwcGluZyBtZXRob2RcbiAgICAgICAgICAgIHN3aXRjaChvcmRlci5zaGlwcGluZ19tZXRob2QpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRlbGl2ZXJcIjpcbiAgICAgICAgICAgICAgICAgICAgb3JkZXIuc2hpcHBpbmdfbWV0aG9kID0gXCJCZXpvcmdlbiAodmlhIFBvc3ROTClcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInBpY2t1cFwiOlxuICAgICAgICAgICAgICAgICAgICBvcmRlci5zaGlwcGluZ19tZXRob2QgPSBcIk9waGFsZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbGwgb3JkZXIgaW5mb1xuICAgICAgICAgICAgJChcIi5vcmRlcl9fZGF0ZVwiKS5odG1sKGRhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBkYXRlLnRvTG9jYWxlU3RyaW5nKFwibmwtTkxcIiwge21vbnRoOiBcImxvbmdcIn0pICsgXCIgXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCkpXG4gICAgICAgICAgICAkKFwiLm9yZGVyX19wYXltZW50bWV0aG9kXCIpLmh0bWwob3JkZXIucGF5bWVudF9tZXRob2QpO1xuICAgICAgICAgICAgJChcIi5vcmRlcl9fc2hpcHBwaW5nXCIpLmh0bWwob3JkZXIuc2hpcHBpbmdfbWV0aG9kKTtcblxuICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3RzXG4gICAgICAgICAgICAkLmVhY2gob3JkZXIucHJvZHVjdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoXCIjcHJvZHVjdFwiKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX2Ftb3VudFwiKS5odG1sKFwiPGI+QWFudGFsOjwvYj4gXCIgKyB2YWx1ZS5hbW91bnQpXG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLnByb2R1Y3RfX3ByaWNlXCIpLmFwcGVuZCgoXCLigqwgXCIpICsgdmFsdWUucHJpY2UudG9GaXhlZCgyKSk7XG4gICAgICAgICAgICAgICAgJChwcm9kdWN0KS5maW5kKFwiLmFkZFRvRmF2b3JpdGVzQnV0dG9uXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuXG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X19saXN0XCIpLmFwcGVuZChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKFwiPGhyIC8+XCIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdFwiKS5maXJzdCgpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAvLyBTZXQgYW5kIG1vdmUgdG90YWwgcHJpY2UgdG8gZW5kIG9mIGxpc3RcbiAgICAgICAgICAgICQoXCIjdG90YWxcIikuYXBwZW5kVG8oXCIjcHJvZHVjdF9fbGlzdFwiKTtcbiAgICAgICAgICAgICQoXCIudG90YWxfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyBvcmRlci50b3RhbF9vcmRlcl9wcmljZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRBZGRUb0Zhdm9yaXRlc0xpc3RlbmVyKGFjdGlvbilcbiAgICB7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwiY2xpY2tcIiwgXCIuYWRkVG9GYXZvcml0ZXNCdXR0b25cIiwgZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGVhbiA9ICQodGhpcykuZGF0YShcImlkXCIpO1xuICAgICAgICAgICAgYWN0aW9uKGVhbik7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXI6IHNldEFkZFRvRmF2b3JpdGVzTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBPcmRlcnNWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcob3JkZXJzKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPVwiQmVzdGVsZ2VzY2hpZWRlbmlzIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCcvdmlld3Mvb3JkZXJzL29yZGVycy5odG1sJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkLmVhY2gob3JkZXJzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgLy8gQ2xvbmUgcHJvZHVjdFxuICAgICAgICAgICAgICAgIHZhciBvcmRlciA9ICQoJyNzaW5nbGVfb3JkZXInKS5jbG9uZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gRGF0ZVxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUodmFsdWUub3JkZXJfZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JtYXQgc2hpcHBpbmcgbWV0aG9kXG4gICAgICAgICAgICAgICAgc3dpdGNoKHZhbHVlLnNoaXBwaW5nX21ldGhvZClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkZWxpdmVyXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5zaGlwcGluZ19tZXRob2QgPSBcIkJlem9yZ2VuICh2aWEgUG9zdE5MKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwaWNrdXBcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLnNoaXBwaW5nX21ldGhvZCA9IFwiT3BoYWxlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBwcm9kdWN0IGluZm9cbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19udW1iZXJcIikuaHRtbCh2YWx1ZS5vcmRlcl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX2RhdGVcIikuaHRtbChkYXRlLmdldERhdGUoKSArIFwiIFwiICsgZGF0ZS50b0xvY2FsZVN0cmluZyhcIm5sLU5MXCIsIHttb250aDogXCJsb25nXCJ9KSArIFwiIFwiICsgZGF0ZS5nZXRGdWxsWWVhcigpKVxuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX3ByaWNlXCIpLmh0bWwoXCLigqwgXCIgKyB2YWx1ZS50b3RhbF9vcmRlcl9wcmljZSk7XG4gICAgICAgICAgICAgICAgJChvcmRlcikuZmluZChcIi5vcmRlcl9fcGF5bWVudG1ldGhvZFwiKS5odG1sKHZhbHVlLnBheW1lbnRfbWV0aG9kKTtcbiAgICAgICAgICAgICAgICAkKG9yZGVyKS5maW5kKFwiLm9yZGVyX19zaGlwcHBpbmdcIikuaHRtbCh2YWx1ZS5zaGlwcGluZ19tZXRob2QpO1xuICAgICAgICAgICAgICAgICQob3JkZXIpLmZpbmQoXCIub3JkZXJfX2xpbmsgYVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9vcmRlci9cIiArIHZhbHVlLm9yZGVyX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI29yZGVyc19ib2R5XCIpLmFwcGVuZChvcmRlcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBmaXJzdCBsaXN0IGl0ZW0sIGJlY2F1c2UgdGhpcyBpdGVtIGlzIGFsd2F5cyBlbXB0eVxuICAgICAgICAgICAgJChcIiNzaW5nbGVfb3JkZXJcIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gdGhlIG1ldGhvZHMgdGhhdCBjYW4gYmUgdXNlZCBieSBvdGhlciBwcm9ncmFtcyAodGhlIGNvbnRyb2xsZXIgaW4gdGhpcyBjYXNlKVxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIHNldEFjdGlvbkxpc3RlbmVyOiBzZXRBY3Rpb25MaXN0ZW5lclxuICAgIH1cbn07IiwidmFyIFByb2R1Y3RzVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdEYXRhKVxuICAgIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIlByb2R1Y3RlbiAtIEFaIEdhbWVzXCI7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtM1wiIGlkPVwiZmlsdGVyc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJjb2wtOVwiIGlkPVwicHJvZHVjdHNcIj48L2Rpdj48L2Rpdj4nKTtcbiAgICAgICAgLy8gbG9hZCBmaWx0ZXJzXG4gICAgICAgICQoXCIjZmlsdGVyc1wiKS5sb2FkKCcvdmlld3MvcHJvZHVjdHMvZmlsdGVycy5odG1sJyk7XG5cbiAgICAgICAgLy8gbG9hZCBwcm9kdWN0c1xuICAgICAgICBsb2FkUHJvZHVjdHModmlld0RhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxvYWRQcm9kdWN0cyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgICQoXCIjcHJvZHVjdHNcIikubG9hZCgnL3ZpZXdzL3Byb2R1Y3RzL3Byb2R1Y3RzLmh0bWwnLCBmdW5jdGlvbiAoKSB7IC8vIHdhYXIgaWQgPSAnY29tcG9uZW50JyBkb2UgLmxvYWQuLi4uLi5cbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdCA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyNwcm9kdWN0X19saXN0X19pdGVtJykuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIHByb2R1Y3QgaW5mb1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X190aXRsZVwiKS5odG1sKHZhbHVlLnRpdGxlKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9fc3VidGl0bGVcIikuYXBwZW5kKHZhbHVlLmdlbnJlICsoXCIgfCBQRUdJIFwiKSArIHZhbHVlLnBlZ2lfYWdlICsoXCIgfCBcIikrIFBsYXRmb3JtTG9nbyh2YWx1ZS5wbGF0Zm9ybSkpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19kZXNjcmlwdGlvblwiKS5odG1sKEN1dFN0cmluZyh2YWx1ZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5wcm9kdWN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIjYnV0dG9uc19faW5mbywgLnByb2R1Y3RfX2ltYWdlIGEsIC5wcm9kdWN0X190aXRsZVwiKS5hdHRyKFwiaHJlZlwiLCBcInByb2R1Y3QvXCIgKyB2YWx1ZS5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKHByb2R1Y3QpLmZpbmQoXCIucHJvZHVjdF9faW1hZ2UgaW1nXCIpLmF0dHIoXCJzcmNcIiwgdmFsdWUuaW1hZ2UpO1xuICAgICAgICAgICAgICAgICQocHJvZHVjdCkuZmluZChcIi5hZGR0b2NhcnRcIikuYXR0cihcImRhdGEtaWRcIiwgdmFsdWUuZWFuX251bWJlcik7XG5cbiAgICAgICAgICAgICAgICAkKFwiI3Byb2R1Y3RfX2xpc3RcIikuYXBwZW5kKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgZmlyc3QgbGlzdCBpdGVtLCBiZWNhdXNlIHRoaXMgaXRlbSBpcyBhbHdheXMgZW1wdHlcbiAgICAgICAgICAgICQoXCIjcHJvZHVjdF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL1Nob3cgbW9yZS9sZXNzXG4gICAgZnVuY3Rpb24gQ3V0U3RyaW5nKHRleHQpe1xuICAgICAgICB2YXIgU2hvd0Ftb3VudCA9IDUwO1xuICAgICAgICB2YXIgV29yZHNBcnJheSA9IHRleHQuc3BsaXQoXCIgXCIpO1xuICAgICAgICBpZihXb3Jkc0FycmF5Lmxlbmd0aD5TaG93QW1vdW50KXtcbiAgICAgICAgICAgIHZhciBTaG9ydFN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBmb3IoaT0wOyBpPFNob3dBbW91bnQ7IGkrKyl7XG4gICAgICAgICAgICAgICAgU2hvcnRTdHJpbmcgKz0gV29yZHNBcnJheVtpXSArIFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNob3J0U3RyaW5nK1wiLi4uXCI7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gRXhlY3V0ZSB0aGUgZXZlbnQgd2hlbiAnc29tZXRoaW5nJyBoYXBwZW5zICh3aGVuIGEgYnV0dG9uIGlzIGNsaWNrZWQgZm9yIGV4YW1wbGUpXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRGaWx0ZXJMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAgLy8gSGllciBoZXQgZm9ybXVsaWVyIHZlcnN0dXJlbiBhbHMgd2Ugb3AgZWVuIGNoZWNrYm94IGRydWtrZW5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPWNoZWNrYm94XVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGRlIHByb2R1Y3RlbmxpanN0IGFscyBlZW4gd2FhcmRlIGluIGRlIHNsaWRlciB2ZXJhbmRlcmQoYWxsZSBtYW5pZXJlbilcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJjaGFuZ2Uga2V5dXBcIiwgXCJpbnB1dFtuYW1lPXByaWNlLW1heF0sIGlucHV0W25hbWU9cHJpY2UtbWluXVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYoJChcIiNwcmljZW1pblwiKS52YWwoKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgJChcIiNwcmljZW1pblwiKS52YWwoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIiNwcm9kdWN0X2ZpbHRlclwiKS5zdWJtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcHJvZHVjdF9maWx0ZXJcIiwgYWN0aW9uKTtcbiAgICB9XG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBsb2FkUHJvZHVjdHM6IGxvYWRQcm9kdWN0cyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyLFxuICAgICAgICBzZXRGaWx0ZXJMaXN0ZW5lcjogc2V0RmlsdGVyTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBQdWJsaWNXaXNobGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKSAvLyBoZWIgZGUgJCBlcmJpaiBnZXpldC4gaW50ZXJuZXQgaGFkIGhldCBkYWFyb3ZlciAoemllIG9uZGVyc3RhYW5kZSBjb21tZW50IG9vaylcbiAgICB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZpZXdEYXRhKVxuICAgICAgICBpZiAodmlld0RhdGEubGVuZ3RoID09IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJFcnJvciAtIEFaIEdhbWVzXCJcbiAgICAgICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQoXCIvdmlld3MvZXJyb3IvZXJyb3IuaHRtbFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2aWV3RGF0YS5sZW5ndGggPiAwKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodmlld0RhdGFbMF0uaXNfcHVibGljID09IDEpe1xuICAgICAgICAgICAgICAgIGxvYWRQdWJsaWNXaXNobGlzdCh2aWV3RGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2aWV3RGF0YVswXS5pc19wdWJsaWMgPT0gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiRXJyb3IgLSBBWiBHYW1lc1wiXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZChcIi92aWV3cy9lcnJvci9lcnJvci5odG1sXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZpZXdEYXRhWzBdLmlzX3B1YmxpYyBoZWVmdCBvbnZlcndhY2h0ZSB3YWFyZGUuIHZpZXdEYXRhWzBdLmlzX3B1YmxpYyA9IFwiICsgdmlld0RhdGFbMF0uaXNfcHVibGljKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmlld0RhdGFbMF0ubGVuZ3RoIGhlZWZ0IG9udmVyd2FjaHRlIHdhYXJkZS4gdmlld0RhdGEubGVuZ3RoID0gXCIgKyB2aWV3RGF0YS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbG9hZFB1YmxpY1dpc2hsaXN0KGRhdGEpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiVmVybGFuZ2xpanN0IFwiICsgZGF0YVswXS5maXJzdF9uYW1lICsgXCIgLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmh0bWwoJzxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cInB1YmxpY193aXNobGlzdFwiPjwvZGl2PicpO1xuXG4gICAgICAgICQoXCIjcHVibGljX3dpc2hsaXN0XCIpLmxvYWQoJy92aWV3cy9wdWJsaWNfd2lzaGxpc3QvcHVibGljX3dpc2hsaXN0Lmh0bWwnLCBmdW5jdGlvbiAoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKFwiI3B1YmxpY19fd2lzaGxpc3RfX2hlYWRlclwiKS5odG1sKFwiVmVybGFuZ2xpanN0IHZhbiBcIiArIGRhdGFbMF0uZmlyc3RfbmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gMDtcbiAgICAgICAgICAgICQuZWFjaChkYXRhLCBmdW5jdGlvbihrZXksIHZhbHVlKVxuICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgd2lzaGxpc3RfaXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCAkKCcjd2lzaF9fbGlzdF9faXRlbScpLmNsb25lKCkgKTtcblxuICAgICAgICAgICAgICAgIGN1cnJlbnQrKztcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faWRcIikuYXBwZW5kKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNobGlzdF9pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hsaXN0X2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIi53aXNoX19saXN0X19saWtlYnV0dG9uXCIpLmFwcGVuZCgpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQod2lzaGxpc3RfaXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIHdpc2hsaXN0X2l0ZW0uYXBwZW5kVG8oJChcIiN3aXNoX19saXN0XCIpKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdF9faXRlbVwiKS5maXJzdCgpLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBsb2FkUHVibGljV2lzaGxpc3Q6IGxvYWRQdWJsaWNXaXNobGlzdCxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxuXG5cbn0iLCJ2YXIgUmVnaXN0ZXJWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld1RvU2hvdylcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gXCJSZWdpc3RyZXJlbiAtIEFaIEdhbWVzXCI7XG4gICAgICAgIFxuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKHZpZXdUb1Nob3csIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICBmb3IoaSA9IDE7IGkgPCAzMjsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjZGFnXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJz5cIiArIGkgKyBcIjwvb3B0aW9uPlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMTkwMDsgaSA8IGRhdGUuZ2V0RnVsbFllYXIoKSArIDE7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSAyMDAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNqYWFyXCIpLmFwcGVuZChcIjxvcHRpb24gdmFsdWU9J1wiICsgaSArIFwiJyBzZWxlY3RlZD0nc2VsZWN0ZWQnPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKFwiI2phYXJcIikuYXBwZW5kKFwiPG9wdGlvbiB2YWx1ZT0nXCIgKyBpICsgXCInPlwiICsgaSArIFwiPC9vcHRpb24+XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBFeGVjdXRlIHRoZSBldmVudCB3aGVuICdzb21ldGhpbmcnIGhhcHBlbnMgKHdoZW4gYSBidXR0b24gaXMgY2xpY2tlZCBmb3IgZXhhbXBsZSlcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAvLyB1c2VyIGZpbGxzIGluIHJlZ2lzdGVyIGZvcm1cbiAgICAgICAgLy8gdXNlciBwcmVzc2VzICdyZWdpc3RlcidcblxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZXMgJ3JlZ2lzdGVyJywgcGVyZm9ybSBhY3Rpb25cbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVnaXN0ZXJmb3JtXCIsIGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBSZXNldFBhc3N3b3JkVmlld0hlbHBlciA9IGZ1bmN0aW9uKClcbntcbiAgICAvLyBDaGFuZ2UgdGhlIHZpZXcgb2YgdGhlIHBhZ2VcbiAgICBmdW5jdGlvbiBzZXRWaWV3KHZpZXdUb1Nob3cpXG4gICAge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IFwiSW5sb2dnZW4gLSBBWiBHYW1lc1wiO1xuXG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLmxvYWQodmlld1RvU2hvdyk7XG4gICAgfVxuXG4gICAgLy8gQWN0aW9uTGlzdGVuZXIgdGhhdCBleGVjdXRlcyBhY3Rpb25zIG9uIHNwZWNpZmljIGV2ZW50c1xuICAgIGZ1bmN0aW9uIHNldEFjdGlvbkxpc3RlbmVyKGV2ZW50SGFuZGxlcilcbiAgICB7XG4gICAgICAgIC8vJChkb2N1bWVudCkucmVhZHkoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub24oXCJzdWJtaXRcIiwgXCIjcmVzZXRmb3JtXCIsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59O1xuXG4vKlxudmFyIFJlc2V0UGFzc3dvcmRWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcodmlld0RhdGEpXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5sb2FkKCd2aWV3cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuaHRtbCcpO1xuICAgIH1cblxuICAgIC8vIEFjdGlvbkxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgYWN0aW9ucyBvbiBzcGVjaWZpYyBldmVudHNcbiAgICBmdW5jdGlvbiBzZXRBY3Rpb25MaXN0ZW5lcihldmVudEhhbmRsZXIpXG4gICAge1xuICAgICAgICAvLyQoZG9jdW1lbnQpLnJlYWR5KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICQoXCIjY29tcG9uZW50XCIpLm9uKFwic3VibWl0XCIsIFwiI3Jlc2V0Zm9ybVwiLCBldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIC8vIFJldHVybiB0aGUgbWV0aG9kcyB0aGF0IGNhbiBiZSB1c2VkIGJ5IG90aGVyIHByb2dyYW1zICh0aGUgY29udHJvbGxlciBpbiB0aGlzIGNhc2UpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0Vmlldzogc2V0VmlldyxcbiAgICAgICAgc2V0QWN0aW9uTGlzdGVuZXI6IHNldEFjdGlvbkxpc3RlbmVyXG4gICAgfVxufTtcbiovIiwidmFyIFByb2R1Y3RWaWV3SGVscGVyID0gZnVuY3Rpb24oKVxue1xuICAgIC8vIENoYW5nZSB0aGUgdmlldyBvZiB0aGUgcGFnZVxuICAgIGZ1bmN0aW9uIHNldFZpZXcocHJvZHVjdClcbiAgICB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gcHJvZHVjdC50aXRsZSArIFwiIC0gQVogR2FtZXNcIjtcblxuICAgICAgICAgJChcIiNjb21wb25lbnRcIikubG9hZCgnL3ZpZXdzL3NpbmdsZV9wcm9kdWN0L3NpbmdsZV9wcm9kdWN0Lmh0bWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCBwcm9kdWN0LmltYWdlKTtcbiAgICAgICAgICAgICAgICAkKFwiLnNpbmdsZXByb2R1Y3RfX3RpdGxlXCIpLmh0bWwocHJvZHVjdC50aXRsZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wcmljZVwiKS5odG1sKFwi4oKsIFwiICsgcHJvZHVjdC5wcmljZS50b0ZpeGVkKDIpKTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fZWFuXCIpLmFwcGVuZChwcm9kdWN0LmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGxhdGZvcm1cIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnBsYXRmb3JtKSk7IC8vIGZ1bmN0aWUgdm9vciBsb2dvXG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19wdWJsaXNoZXJcIikuYXBwZW5kKFBsYXRmb3JtTG9nbyhwcm9kdWN0LnB1Ymxpc2hlcikpOyAvLyBmdW5jdGllIHZvb3IgbG9nb1xuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcGVnaVwiKS5hcHBlbmQocHJvZHVjdC5wZWdpX2FnZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19nZW5yZVwiKS5hcHBlbmQocHJvZHVjdC5nZW5yZSk7XG4gICAgICAgICAgICAgICAgJChcIi5zaW5nbGVwcm9kdWN0X19kZXNjclwiKS5odG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pXG4gICAgICAgICAgICAgICAgJChcIi5hZGR0b2NhcnRcIikuYXR0cihcImRhdGEtaWRcIiwgcHJvZHVjdC5lYW5fbnVtYmVyKTtcblxuICAgICAgICAgICAgICAgIGlmIChVc2VySGVscGVyLmlzTG9nZWRJbigpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5hZGRUb1dpc2hsaXN0QnV0dG9uXCIpLmF0dHIoXCJvbmNsaWNrXCIsIFwiV2lzaGxpc3RIZWxwZXIuYWRkSXRlbShcIiArIHByb2R1Y3QuZWFuX251bWJlciArIFwiKTtcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuYWRkVG9XaXNobGlzdEJ1dHRvblwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShwcm9kdWN0LnJlbGVhc2VfZGF0ZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgbW9udGhzID0gW1wiamFudWFyaVwiLCBcImZlYnJ1YXJpXCIsIFwibWFhcnRcIiwgXCJhcHJpbFwiLCBcIm1laVwiLCBcImp1bmlcIiwgXCJqdWxpXCIsIFwiYXVndXN0dXNcIiwgXCJzZXB0ZW1iZXJcIiwgXCJva3RvYmVyXCIsIFwibm92ZW1iZXJcIiwgXCJkZWNlbWJlclwiXTtcblxuICAgICAgICAgICAgICAgICQoXCIuc2luZ2xlcHJvZHVjdF9fcmVsZWFzZWRhdGVcIikuYXBwZW5kKGQuZ2V0RGF0ZSgpICsgXCIgXCIgKyBtb250aHNbZC5nZXRNb250aCgpXSArIFwiIFwiICsgZC5nZXRGdWxsWWVhcigpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgLy8gdXNlciBmaWxscyBpbiByZWdpc3RlciBmb3JtXG4gICAgICAgIC8vIHVzZXIgcHJlc3NlcyAncmVnaXN0ZXInXG5cbiAgICAgICAgLy8gaWYgdXNlciBwcmVzc2VzICdyZWdpc3RlcicsIHBlcmZvcm0gYWN0aW9uXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSBtZXRob2RzIHRoYXQgY2FuIGJlIHVzZWQgYnkgb3RoZXIgcHJvZ3JhbXMgKHRoZSBjb250cm9sbGVyIGluIHRoaXMgY2FzZSlcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRWaWV3OiBzZXRWaWV3LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXJcbiAgICB9XG59OyIsInZhciBXaXNobGlzdFZpZXdIZWxwZXIgPSBmdW5jdGlvbigpXG57XG4gICAgLy9jaGFuZ2UgdmlldyBvZiBwYWdlXG4gICAgZnVuY3Rpb24gc2V0Vmlldyh2aWV3RGF0YSlcbiAgICB7XG4gICAgICAgIC8vY29uc29sZS5sb2coXCJXTCBWSUVXOiBJbnNpZGUgc2V0Vmlld1wiKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBcIldpc2hsaXN0IC0gQVogR2FtZXNcIjtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikuaHRtbCgnPGRpdiBjbGFzcz1cImNvbC0xMlwiPjxkaXYgY2xhc3M9XCJjb2wtMTJcIiBpZD1cIndpc2hsaXN0XCI+PC9kaXY+PC9kaXY+Jyk7XG5cbiAgICAgICAgbG9hZFdpc2hsaXN0KHZpZXdEYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsb2FkV2lzaGxpc3Qodmlld0RhdGEpXG4gICAge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiV0wgVklFVzogSW5zaWRlIGxvYWRXaXNoTGlzdFwiKTtcbiAgICAgICAgJChcIiN3aXNobGlzdFwiKS5sb2FkKCcvdmlld3Mvd2lzaGxpc3Qvd2lzaGxpc3QuaHRtbCcsIGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgd2lzaGxpc3QgaXRlbXMgdG8gaHRtbFxuICAgICAgICAgICAgdmFyIGN1cnJlbnQgPSAwO1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgICAgICQuZWFjaCh2aWV3RGF0YSwgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIENsb25lIHByb2R1Y3RcbiAgICAgICAgICAgICAgICB2YXIgd2lzaF9fbGlzdF9faXRlbSA9ICQoJzxkaXY+JykuYXBwZW5kKCQoJyN3aXNoX19saXN0X19pdGVtJykuY2xvbmUoKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcHJvZHVjdCBpbmZvXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQgKzFcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9faWRcIikuYXBwZW5kKGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19pbWFnZSBpbWdcIikuYXR0cihcInNyY1wiLCB2YWx1ZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3RpdGxlXCIpLmh0bWwodmFsdWUudGl0bGUpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIi53aXNoX19saXN0X19wcmljZVwiKS5hcHBlbmQoKFwi4oKsIFwiKSt2YWx1ZS5wcmljZSk7XG4gICAgICAgICAgICAgICAgJCh3aXNoX19saXN0X19pdGVtKS5maW5kKFwiLndpc2hfX2xpc3RfX3BsYXRmb3JtXCIpLmFwcGVuZChQbGF0Zm9ybUxvZ28odmFsdWUucGxhdGZvcm0pKTtcbiAgICAgICAgICAgICAgICAkKHdpc2hfX2xpc3RfX2l0ZW0pLmZpbmQoXCIud2lzaF9fbGlzdF9fYXZhaWxhYmlsaXR5XCIpLmFwcGVuZChCZXNjaGlrYmFhcmhlaWRLbGV1cih2YWx1ZS5zdG9jaykpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIiNkZWxldGVfYnRuXCIpLmF0dHIoXCJkYXRhLWlkXCIsIHZhbHVlLmVhbl9udW1iZXIpO1xuICAgICAgICAgICAgICAgICQod2lzaF9fbGlzdF9faXRlbSkuZmluZChcIiNjYXJ0X2J0blwiKS5hdHRyKFwiZGF0YS1pZFwiLCB2YWx1ZS5lYW5fbnVtYmVyKTtcbiAgICAgICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5hdHRyKFwiaHJlZlwiLCBcIi9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTtcbiAgICAgICAgICAgICAgICAkKFwiI3NoYXJlX19idG5cIikuYXR0cihcImhyZWZcIiwgXCJtYWlsdG86P3N1YmplY3Q9TWlqbiB2ZXJsYW5nbGlqc3Qgb3AgQVotR2FtZXMubmwhJmJvZHk9QmVraWprIG1pam4gdmVybGFuZ2xpanN0IG9wOiBodHRwOi8vYXotZ2FtZXMubmwvcHVibGljX3dpc2hsaXN0L1wiICsgdmFsdWUudXNlcl9pZCk7IC8vIENIRUNLIERJUyFcbiAgICAgICAgICAgICAgICAkKFwiI2NsaXBib2FyZF9fYnRuXCIpLmF0dHIoXCJocmVmXCIsIFwiL3B1YmxpY193aXNobGlzdC9cIiArIHZhbHVlLnVzZXJfaWQpO1xuICAgICAgICAgICAgICAgICQoXCIjcHVibGljX2xpbmtcIikudmFsKFwiaHR0cHM6Ly9hei1nYW1lcy5ubC9wdWJsaWNfd2lzaGxpc3QvXCIgKyB2YWx1ZS51c2VyX2lkKTtcblxuICAgICAgICAgICAgICAgICQoXCIjd2lzaF9fbGlzdFwiKS5hcHBlbmQod2lzaF9fbGlzdF9faXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaXNfcHVibGljID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjcHVibGljYXRvclwiKS52YWwoXCJwcml2YXRlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG4sIC5zaGFyZV9fYnRuLCAuY2xpcGJvYXJkX19idG5cIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLmlzX3B1YmxpYyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI3B1YmxpY2F0b3JcIikudmFsKFwicHVibGljXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNleGFtcGxlX19idG5cIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSBoYXMgdW5leHBlY3RlZCB2YWx1ZS4gdmFsdWUgPSBcIiArIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEFscyBlciBnZWVuIGl0ZW1zIGluIHdpc2hsaXN0IHN0YWFuLCBkYW4gaGlkZSBkZSB2b2xnZW5kZSBkaXZzLlxuICAgICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hsaXN0X2Vycm9yX21lc3NhZ2VcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICQoXCIjcHVibGljX19yZWxhdGVkXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RcIikuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGZpcnN0IGxpc3QgaXRlbSwgYmVjYXVzZSB0aGlzIGl0ZW0gaXMgYWx3YXlzIGVtcHR5XG4gICAgICAgICAgICAkKFwiI3dpc2hfX2xpc3RfX2l0ZW1cIikuZmlyc3QoKS5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWN0aW9uTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoYWN0aW9uKTsgLy8gaWYgJ2RvY3VtZW50IHJlYWR5JyBwZXJmb3JtIFwiYWN0aW9uXCIgICAgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVsZXRlTGlzdGVuZXIoYWN0aW9uKVxuICAgIHtcbiAgICAgICAgJChcIiNjb21wb25lbnRcIikub2ZmKCkub24oXCJjbGlja1wiLCBcIiNkZWxldGVfYnRuXCIsIGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghJCgnI2RlbGV0ZV9idG4nKS5oYXNDbGFzcyhcImJ0bi0tcHJlc3NlZFwiKSl7XG4gICAgICAgICAgICAgICAgJChcIiNkZWxldGVfYnRuXCIpLmFkZENsYXNzKFwiYnRuLS1wcmVzc2VkXCIpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB2YXIgZWFuID0gJCh0aGlzKS5kYXRhKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgdmFyIGRpdl90b19oaWRlID0gJCh0aGlzKS5jbG9zZXN0KFwiLnJvd1wiKTtcbiAgICAgICAgICAgICAgICBhY3Rpb24oZWFuLCBkaXZfdG9faGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQdWJsaWNMaXN0ZW5lcihhY3Rpb24pXG4gICAge1xuICAgICAgICAkKFwiI2NvbXBvbmVudFwiKS5vbihcImNoYW5nZVwiLCBcIiNwdWJsaWNhdG9yXCIsIGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZSk7XG4gICAgICAgICAgICBhY3Rpb24odGhpcy52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpZGVJdGVtKGRpdl90b19oaWRlKVxuICAgIHtcbiAgICAgICAgZGl2X3RvX2hpZGUuZmFkZVRvKDIwMCwgMCkuc2xpZGVVcCgyMDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dFeGFtcGxlQnV0dG9uKG5ld1N0YXR1cylcbiAgICB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1N0YXR1cyk7XG5cbiAgICAgICAgaWYgKG5ld1N0YXR1cyA9PSBcInB1YmxpY1wiKSB7XG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5zaG93KCk7XG4gICAgICAgICAgICAkKFwiLnNoYXJlX19idG5cIikuc2hvdygpO1xuICAgICAgICAgICAgJChcIi5jbGlwYm9hcmRfX2J0blwiKS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdHVzID09IFwicHJpdmF0ZVwiKSB7XG4gICAgICAgICAgICAkKFwiI2V4YW1wbGVfX2J0blwiKS5oaWRlKCk7XG4gICAgICAgICAgICAkKFwiLnNoYXJlX19idG5cIikuaGlkZSgpO1xuICAgICAgICAgICAgJChcIi5jbGlwYm9hcmRfX2J0blwiKS5oaWRlKCk7XG5cbiAgICAgICAgfSBlbHNlIHtjb25zb2xlLmxvZyhcInVuZXhwZWN0ZWQgbmV3U3RhdHVzIHZhbHVlLCB2YWx1ZSA9IFwiK25ld1N0YXR1cyl9XG5cblxuICAgICAgICAkKFwiI2V4YW1wbGVfX2J0bl9fZGl2XCIpLnNob3coKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBPcGVuU21hbGxNYWlsV2luZG93KHVybCwgd2luZG93TmFtZSwgZmVhdHVyZXMpXG4gICAge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwsIHdpbmRvd05hbWUsIGZlYXR1cmVzKTtcbiAgICB9XG5cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNldFZpZXc6IHNldFZpZXcsXG4gICAgICAgIGxvYWRXaXNobGlzdDogbG9hZFdpc2hsaXN0LFxuICAgICAgICBzZXRBY3Rpb25MaXN0ZW5lcjogc2V0QWN0aW9uTGlzdGVuZXIsXG4gICAgICAgIHNldERlbGV0ZUxpc3RlbmVyOiBzZXREZWxldGVMaXN0ZW5lcixcbiAgICAgICAgc2V0UHVibGljTGlzdGVuZXI6IHNldFB1YmxpY0xpc3RlbmVyLFxuICAgICAgICBoaWRlSXRlbTogaGlkZUl0ZW0sXG4gICAgICAgIHNob3dFeGFtcGxlQnV0dG9uOiBzaG93RXhhbXBsZUJ1dHRvblxuICAgIH1cbn0iXX0=
