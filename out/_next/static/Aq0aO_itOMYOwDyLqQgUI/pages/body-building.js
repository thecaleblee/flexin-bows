(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{dJ2Y:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/body-building",function(){var e=a("kmPh");return{page:e.default||e}}])},kmPh:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),i=a("sLSF"),o=a("MI3g"),s=a("a7VT"),r=a("AT/M"),c=a("Tit0"),l=a("q1tI"),d=a.n(l),u=a("5Yp1"),m=a("vaaY"),h=function(e){function t(e){var a;return Object(n.default)(this,t),(a=Object(o.default)(this,Object(s.default)(t).call(this,e))).state={activeTab:"body-building-1-3",image:"/static/images/exercises/edited/decline-bench-press.jpg",value:""},a.onWorkoutClick=a.onWorkoutClick.bind(Object(r.default)(a)),a.onChange=a.onChange.bind(Object(r.default)(a)),a.onBodyPartClick=a.onBodyPartClick.bind(Object(r.default)(a)),a}return Object(c.default)(t,e),Object(i.default)(t,[{key:"onWorkoutClick",value:function(e){e.preventDefault();var t=e.target.dataset.id;this.setState({activeTab:t})}},{key:"onBodyPartClick",value:function(e){e.preventDefault();var t="/static/images/exercises/edited/".concat(e.target.dataset.file,".jpg");this.setState({image:t})}},{key:"onChange",value:function(e){e.preventDefault(),console.log("oh hai, stop")}},{key:"render",value:function(){return d.a.createElement(u.a,{data:m,activeTab:this.state.activeTab,onChange:this.onChange,onWorkoutClick:this.onWorkoutClick,onBodyPartClick:this.onBodyPartClick,image:this.state.image})}}]),t}(d.a.Component);t.default=h},vaaY:function(e){e.exports={title:"Body Building",frequency:"6 days on, 1 day off",time:"45-60 Minutes",content:"Body building requires focused concentration and dedication to training, as well as proper eating habits. Work each muscle group to fatigue before moving on to the next exercise. Do not neglect any muscle group If needed, include an aerobic activity to increase your caloric expenditure and help to reduce your body fat levels to achieve a defined muscular look. Res 30-60 seconds between each set and exercise. Focus on proper form. Tighten the muscle before you move, squeeze the muscle as you move, and crap the muscle at the point of full contraction., and resist the movement as you lower the weight. Move slowly on each rep. use a pace that would allow you to stop the movement instantly at any point in the rep. Count three seconds up and three seconds down and work to fatigue during each set.",workout:{days:[{title:"1 & 3",id:"body-building-1-3",bodyParts:[{name:"Chest",exercises:[{name:"Decline Bench Press",fileName:"decline-bench-press"},{name:"Bench Press",fileName:"bench-press-horizontal"}],sets:"2 - 4",reps:"8 - 12"},{name:"Shoulders",exercises:[{name:"Seated Shoulder Press",fileName:"seated-shouder-press"},{name:"Crossover Seated Rear Deltoid Rows",fileName:"cross-over-rear-deltiod"},{name:"Front Shoulder Raise",fileName:"should-relxion"},{name:"Scapular Retraction",fileName:"scapular-retraction"}],sets:"2 - 4",reps:"8 - 12"}]},{title:"2 & 4",id:"body-building-2-4",bodyParts:[{name:"Back",exercises:[{name:"Seated Lat Rows",fileName:"should-extension"},{name:"Reverse Grip Pulldowns",fileName:"reverse-grip-pulldown"}],sets:"2 - 4",reps:"8 - 12"},{name:"Arms",exercises:[{name:"Standing Biceps Curl",fileName:"bicep-curl"},{name:"Standing Wrist Curl",fileName:"wrist-curl"},{name:"Triceps Pushdown",fileName:"triceps-pushdown"},{name:"Lying Triceps Extension",fileName:"tricep-extension"}],sets:"2 - 4",reps:"8 - 12"}]},{title:"5 & 7",id:"body-building-5-7",bodyParts:[{name:"Legs",exercises:[{name:"Leg Press",fileName:"leg-press"},{name:"Leg Extension",fileName:"leg-extension"},{name:"Standing Leg Kickback",fileName:"standing-leg-kickback"},{name:"Seated Hip Abduction",fileName:"hip-abdction"}],sets:"2 - 4",reps:"8 - 12"},{name:"Trunk",exercises:[{name:"Seated Abdominal Crunch",fileName:"abdominal-crunch"},{name:"Trunk Rotation",fileName:"trunk-rotation"}],sets:"2 - 4",reps:"8 - 12"}]}]}}}},[["dJ2Y",1,0]]]);