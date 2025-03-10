(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96],{4402:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quest_books/w25_rover_quests",function(){return s(4453)}])},4453:function(e,t,s){"use strict";s.r(t),s.d(t,{__toc:function(){return l}});var n=s(5893),r=s(2673),o=s(7913),i=s(4102);s(3150),s(9128);var a=s(2643);let l=[{depth:2,value:"The Great Objective: Autonomous Navigation for the UWRT Rover",id:"the-great-objective-autonomous-navigation-for-the-uwrt-rover"},{depth:2,value:"Term Objectives Summary",id:"term-objectives-summary"},{depth:3,value:"Term Objectives and Scoring",id:"term-objectives-and-scoring"},{depth:2,value:"Scoring Template",id:"scoring-template"}];function _createMdxContent(e){let t=Object.assign({h1:"h1",h2:"h2",p:"p",a:"a",ol:"ol",li:"li",strong:"strong",ul:"ul",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{children:"Rover Quest Book - Winter 2025 (W25)"}),"\n",(0,n.jsx)(t.h2,{id:"the-great-objective-autonomous-navigation-for-the-uwrt-rover",children:"The Great Objective: Autonomous Navigation for the UWRT Rover"}),"\n",(0,n.jsxs)(t.p,{children:["The WATO Rover Team is helping build the autonomous navigation system for the UWRT's ",(0,n.jsx)(t.a,{href:"https://urc.marssociety.org/home/requirements-guidelines",children:"URC 2025"})," rover."]}),"\n",(0,n.jsx)(t.h2,{id:"term-objectives-summary",children:"Term Objectives Summary"}),"\n",(0,n.jsx)(t.p,{children:"The objectives for Winter 2025 focus on integrating UWRT's existing modules with the WATO Monorepo/watod infrastructure, as well as building out the autonomy software using nav2."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Point Cloud Generator"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Create a point cloud using the IntelRealSense D435 cameras, and publish that to Nav2 for Costmap Generation, and localization."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Object Detection"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Using camera feeds to generate field relative poses for mission-critical objects."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"ArUco Marker Detection"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Using camera feeds to generate field relative poses for ArUco markers."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Behaviour Tree"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Using the Behaviour Tree to plan the navigation of the rover."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Nav2 Integration"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Use sensor data from rover to plan and control the rover."}),"\n",(0,n.jsx)(t.li,{children:"Use the rover's odometry to plan and control the rover (costmap, localize, plan, and control)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"term-objectives-and-scoring",children:"Term Objectives and Scoring"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Point Cloud Generator"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Score"}),(0,n.jsx)(t.th,{children:"Criteria"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10/10"}),(0,n.jsx)(t.td,{children:"Rover is able to reliably generate and publish a point cloud to Nav2."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"5/10"}),(0,n.jsx)(t.td,{children:"Rover is able to inreliably generate and publish a point cloud to Nav2."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0/10"}),(0,n.jsx)(t.td,{children:"We were not able to meet the above goals"})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimum Requirements:"}),"  Partially integrated with basic functionality for a score above 7/10."]}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Object Detection"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Score"}),(0,n.jsx)(t.th,{children:"Criteria"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10/10"}),(0,n.jsx)(t.td,{children:"Rover is able to accurately detect and publish goal pose for Object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7/10"}),(0,n.jsx)(t.td,{children:"Rover is able to accurately detect but not publish goal pose for Object."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4/10"}),(0,n.jsx)(t.td,{children:"Rover is able to inaccurately/unreliably detect Object but not publish goal pose."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0/10"}),(0,n.jsx)(t.td,{children:"No progress."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimum Requirements:"})," Rover is able to inaccurately/unreliably detect Object but not publish goal pose for a score above 4/10."]}),"\n",(0,n.jsxs)(t.ol,{start:"3",children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"ArUco Marker Detection"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Score"}),(0,n.jsx)(t.th,{children:"Criteria"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10/10"}),(0,n.jsx)(t.td,{children:"Rover is able to accurately detect and publish goal pose for ArUco marker."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7/10"}),(0,n.jsx)(t.td,{children:"Rover is able to accurately detect but not publish goal pose for ArUco marker."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4/10"}),(0,n.jsx)(t.td,{children:"Rover is able to inaccurately/unreliably detect ArUco marker but not publish goal pose."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0/10"}),(0,n.jsx)(t.td,{children:"No progress."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimum Requirements:"})," Rover is able to inaccurately/unreliably detect ArUco marker but not publish goal pose for a score above 4/10."]}),"\n",(0,n.jsxs)(t.ol,{start:"4",children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Behaviour Tree"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Score"}),(0,n.jsx)(t.th,{children:"Criteria"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10/10"}),(0,n.jsx)(t.td,{children:"Rover is successfully able to navigate to any goal autonomously. (Object, ArUco, or GNSS Waypoint)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7/10"}),(0,n.jsx)(t.td,{children:"Rover is able to navigate to one of the goals, but is not able to switch between them."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4/10"}),(0,n.jsx)(t.td,{children:"Rover has a basic behaviour tree set up but is not able to navigate to any goal."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0/10"}),(0,n.jsx)(t.td,{children:"No progress."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimum Requirements:"}),": Rover has a basic behaviour tree set up but is not able to navigate to any goal for a score above 4/10."]}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Nav2 Integration"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Score"}),(0,n.jsx)(t.th,{children:"Criteria"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"10/10"}),(0,n.jsx)(t.td,{children:"Rover is achieve all mission goals. Costmap, localization, planning, and control all work together and fully implemented."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"7/10"}),(0,n.jsx)(t.td,{children:"Rover is able to navigate to all mission goals, but slowly/slightly illegally. Costmap, localization, planning, and control work together but not fully implemented."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"4/10"}),(0,n.jsx)(t.td,{children:"Rover is unable to navigate to all mission goals. One more more aspects of Nav2 not implemented."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0/10"}),(0,n.jsx)(t.td,{children:"No progress."})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Minimum Requirements:"})," Rover is unable to navigate to all mission goals. One more more aspects of Nav2 not implemented for a score above 4/10."]}),"\n",(0,n.jsx)(t.h2,{id:"scoring-template",children:"Scoring Template"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Quest Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Due Date"}),(0,n.jsx)(t.th,{children:"Score"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Point Cloud Generator"}),(0,n.jsx)(t.td,{children:"Create a point cloud using the IntelRealSense D435 cameras, and publish that to Nav2 for Costmap Generation, and localization."}),(0,n.jsx)(t.td,{children:"2025-03-31"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Object Detection"}),(0,n.jsx)(t.td,{children:"Using camera feeds to generate field relative poses for mission-critical objects."}),(0,n.jsx)(t.td,{children:"2025-03-31"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ArUco Marker Detection"}),(0,n.jsx)(t.td,{children:"Using camera feeds to generate field relative poses for ArUco markers."}),(0,n.jsx)(t.td,{children:"2025-03-31"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Behaviour Tree"}),(0,n.jsx)(t.td,{children:"Using the Behaviour Tree to plan the navigation of the rover."}),(0,n.jsx)(t.td,{children:"2025-04-25"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Nav2 Integration"}),(0,n.jsx)(t.td,{children:"Use sensor data from rover to plan and control the rover."}),(0,n.jsx)(t.td,{children:"2025-04-25"}),(0,n.jsx)(t.td,{})]})]})]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.a)(),e.components);return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/quest_books/w25_rover_quests.mdx",route:"/quest_books/w25_rover_quests",timestamp:174156669e4,pageMap:[{kind:"Meta",data:{index:"Welcome to the Wiki",about:"About WATonomous","Official Website":{title:"Official Website ↗",type:"page",href:"https://www.watonomous.ca",newWindow:!0},"WATcloud Website":{title:"WATcloud Website ↗",type:"page",href:"https://cloud.watonomous.ca/docs",newWindow:!0},admission_assignments:"Admission Assignments",autonomous_platform_general:"Autonomous Platform General",autonomous_software_general:"Autonomous Software General",finance:"Finance",quest_books:"Quest Books"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"admission_assignments",route:"/admission_assignments",children:[{kind:"Meta",data:{asd_admission_assignment:"ASD Admission Assignment"}},{kind:"MdxPage",name:"asd_admission_assignment",route:"/admission_assignments/asd_admission_assignment"}]},{kind:"MdxPage",name:"admission_assignments",route:"/admission_assignments"},{kind:"Folder",name:"autonomous_platform_general",route:"/autonomous_platform_general",children:[{kind:"Meta",data:{about_ap:"About Autonomous Platform"}},{kind:"MdxPage",name:"about_ap",route:"/autonomous_platform_general/about_ap"}]},{kind:"MdxPage",name:"autonomous_platform_general",route:"/autonomous_platform_general"},{kind:"Folder",name:"autonomous_software_general",route:"/autonomous_software_general",children:[{kind:"Meta",data:{about_asd:"About Autonomous Software",monorepo_infrastructure:"Monorepo Infrastructure",watcloud_dev:"Developing with WATcloud"}},{kind:"MdxPage",name:"about_asd",route:"/autonomous_software_general/about_asd"},{kind:"MdxPage",name:"monorepo_infrastructure",route:"/autonomous_software_general/monorepo_infrastructure"},{kind:"MdxPage",name:"watcloud_dev",route:"/autonomous_software_general/watcloud_dev"}]},{kind:"MdxPage",name:"autonomous_software_general",route:"/autonomous_software_general"},{kind:"Folder",name:"finance",route:"/finance",children:[{kind:"Meta",data:{creating_personal_purchases:"Creating Personal Purchases",creating_purchase_requests:"Creating Purchase Requests"}},{kind:"MdxPage",name:"creating_personal_purchases",route:"/finance/creating_personal_purchases"},{kind:"MdxPage",name:"creating_purchase_requests",route:"/finance/creating_purchase_requests"}]},{kind:"MdxPage",name:"finance",route:"/finance"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quest_books",route:"/quest_books",children:[{kind:"Meta",data:{w25_eve_quests:"W25 Eve Quests",w25_micro_quests:"W25 Micro Quests",w25_rover_quests:"W25 Rover Quests",w25_humanoid_quests:"W25 Humanoid Quests",w25_bizops_quests:"W25 Bizops Quests"}},{kind:"MdxPage",name:"w25_bizops_quests",route:"/quest_books/w25_bizops_quests"},{kind:"MdxPage",name:"w25_eve_quests",route:"/quest_books/w25_eve_quests"},{kind:"MdxPage",name:"w25_humanoid_quests",route:"/quest_books/w25_humanoid_quests"},{kind:"MdxPage",name:"w25_micro_quests",route:"/quest_books/w25_micro_quests"},{kind:"MdxPage",name:"w25_rover_quests",route:"/quest_books/w25_rover_quests"}]},{kind:"MdxPage",name:"quest_books",route:"/quest_books"}],flexsearch:{codeblocks:!0},title:"Rover Quest Book - Winter 2025 (W25)",headings:l},pageNextRoute:"/quest_books/w25_rover_quests",nextraLayout:o.ZP,themeConfig:i.Z};t.default=(0,r.j)(d)}},function(e){e.O(0,[879,630,774,888,179],function(){return e(e.s=4402)}),_N_E=e.O()}]);