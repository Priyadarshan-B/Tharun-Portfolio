import{a as s}from"/build/_shared/chunk-G6GZU55D.js";import{f as r}from"/build/_shared/chunk-CG2D626R.js";import{a as b,b as l}from"/build/_shared/chunk-GDLBX7ER.js";import{c as H}from"/build/_shared/chunk-Q3IECNXJ.js";var f="/build/_assets/spr-background-large-IFPZ2AZ6.jpg";var V="/build/_assets/spr-background-placeholder-62USQQ5L.jpg";var w="/build/_assets/spr-background-Y7TR2J6L.jpg";var P=H(b(),1);var X={container:"-t9v8",options:"f-Fnj",button:"TDZKT",indicator:"rEUvW"};var A=H(l(),1),u=(0,P.createContext)({}),j=({children:Y,currentIndex:e,onChange:Z,label:i,...Q})=>{let T=`${(0,P.useId)()}segmented-control-label`,E=(0,P.useRef)([]),[k,J]=(0,P.useState)(),c=B=>{let{length:R}=E.current,I=(e-1+R)%R,M=(e+1)%R;["ArrowLeft","ArrowUp"].includes(B.key)?(Z(I),E.current[I].current.focus()):["ArrowRight","ArrowDown"].includes(B.key)&&(Z(M),E.current[M].current.focus())},y=(0,P.useCallback)(B=>{E.current=[...E.current,B]},[]),D=(0,P.useCallback)(B=>{E.current=E.current.filter(R=>R!==B)},[]);return(0,P.useEffect)(()=>{let B=E.current[e]?.current,R=new ResizeObserver(()=>{let I=B?.getBoundingClientRect(),M=B?.offsetLeft;J({width:I?.width,left:M})});return R.observe(B),()=>{R.disconnect()}},[e]),(0,A.jsx)(u.Provider,{value:{optionRefs:E,currentIndex:e,onChange:Z,registerOption:y,unRegisterOption:D},children:(0,A.jsxs)("div",{className:X.container,role:"radiogroup",tabIndex:"0","aria-labelledby":T,onKeyDown:c,...Q,children:[(0,A.jsx)(s,{as:"label",id:T,children:i}),(0,A.jsxs)("div",{className:X.options,children:[!!k&&(0,A.jsx)("div",{className:X.indicator,"data-last":e===E.current.length-1,style:r(k)}),Y]})]})})},z=({children:Y,...e})=>{let{optionRefs:Z,currentIndex:i,onChange:Q,registerOption:t,unRegisterOption:T}=(0,P.useContext)(u),E=(0,P.useRef)(),k=Z.current.indexOf(E),J=i===k;return(0,P.useEffect)(()=>(t(E),()=>{T(E)}),[t,T]),(0,A.jsx)("button",{className:X.button,tabIndex:J?0:-1,role:"radio","aria-checked":J,onClick:()=>Q(k),ref:E,...e,children:Y})};export{f as a,V as b,w as c,j as d,z as e};