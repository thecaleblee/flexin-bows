(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Tfk":function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),s=n("sLSF"),i=n("MI3g"),o=n("a7VT"),r=n("AT/M"),c=n("Tit0"),l=n("q1tI"),u=n.n(l),d=n("5Yp1"),h=n("CRr+"),m=function(e){function t(e){var n;return Object(a.default)(this,t),(n=Object(i.default)(this,Object(o.default)(t).call(this,e))).state={activeTab:"strength-training-1-3",image:"/static/images/exercises/edited/decline-bench-press.jpg",value:""},n.onWorkoutClick=n.onWorkoutClick.bind(Object(r.default)(n)),n.onChange=n.onChange.bind(Object(r.default)(n)),n.onBodyPartClick=n.onBodyPartClick.bind(Object(r.default)(n)),n}return Object(c.default)(t,e),Object(s.default)(t,[{key:"onWorkoutClick",value:function(e){e.preventDefault();var t=e.target.dataset.id;this.setState({activeTab:t})}},{key:"onBodyPartClick",value:function(e){e.preventDefault();var t="/static/images/exercises/edited/".concat(e.target.dataset.file,".jpg");this.setState({image:t})}},{key:"onChange",value:function(e){e.preventDefault(),console.log("oh hai, stop")}},{key:"render",value:function(){return u.a.createElement(d.a,{data:h,activeTab:this.state.activeTab,onChange:this.onChange,onWorkoutClick:this.onWorkoutClick,onBodyPartClick:this.onBodyPartClick,image:this.state.image})}}]),t}(u.a.Component);t.default=m},"CRr+":function(e){e.exports={title:"Strength Training",frequency:"3 days per week (M-W-F)",time:"45-60 Minutes",content:"This program is designed to emphasize overall strength development. This is an advanced routine to be used only after you have progressed from teh advanced general conditioning routine and only after you have perfected your exercise techniques. Work each set to near exhaustion. If you can perform more than 5 to 8 reps, you should in crease your resistance 5 lbs and decrease your reps to 5. Reset 60 - 120 seconds between each set and exercise. Focus on proper form. Tighten the muscle before you move, squeeze the muscle as you move, cramp the muscle as the point of full contraction, and resist the movement as you lower the weight. Move slowly on each rep, use a pace that would allow you to stop the movement instantly at any point in the rep. Counting the two seconds up th and four seconds down and work to fatigue during each set.",workout:{days:[{title:"1 & 3",id:"strength-training-1-3",bodyParts:[{name:"Chest",exercises:[{name:"Decline Bench Press",fileName:"decline-bench-press"},{name:"Bench Press",fileName:"bench-press-horizontal"}],sets:"2 - 4",reps:"5 - 8"},{name:"Shoulders",exercises:[{name:"Seated Shoulder Press",fileName:"should-relxion"},{name:"Crossover Seated Rear Deltoid Rows",fileName:"cross-over-rear-deltiod"},{name:"Front Shoulder Raise",fileName:"scapular-retraction"}],sets:"2 - 4",reps:"5 - 8"}]},{title:"2 & 4",id:"strength-training-2-4",bodyParts:[{name:"Back",exercises:[{name:"Seated Lat Rows",fileName:"shoulder-extension"},{name:"Stiff Arm Pulldowns",fileName:"stiff-arm-pulldowns"}],sets:"2 - 4",reps:"5 - 8"},{name:"Arms",exercises:[{name:"Standing Biceps Curl",fileName:"bicep-curl"},{name:"Standing Wrist Curl",fileName:"wrist-curl"},{name:"Triceps Pushdown",fileName:"triceps-pushdown"},{name:"Triceps Extension",fileName:"tricep-extension"}],sets:"2 - 4",reps:"5 - 8"}]},{title:"5 & 7",id:"strength-training-5-7",bodyParts:[{name:"Legs",exercises:[{name:"Leg Press",fileName:"calf-raise"},{name:"Leg Extension",fileName:"leg-extension"},{name:"Standing Leg Kickback",fileName:"standing-leg-kickback"}],sets:"2 - 4",reps:"5 - 8"},{name:"Trunk",exercises:[{name:"Seated Abdominal Crunch",fileName:"abdominal-crunch"},{name:"Trunk Rotation",fileName:"trunk-rotation"}],sets:"2 - 4",reps:"5 - 8"}]}]}}},Yoor:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/strength-training",function(){var e=n("7Tfk");return{page:e.default||e}}])}},[["Yoor",1,0]]]);