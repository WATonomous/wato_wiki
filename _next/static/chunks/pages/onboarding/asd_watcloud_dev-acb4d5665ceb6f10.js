(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{457:function(e,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/onboarding/asd_watcloud_dev",function(){return o(1570)}])},1570:function(e,n,o){"use strict";o.r(n),o.d(n,{__toc:function(){return u},default:function(){return g}});var s=o(5893),a=o(2673),t=o(7913),i=o(4102);o(9128);var r=o(2643),l={src:"/_next/static/media/watcloud_afar.6f5294d1.jpg",height:2244,width:2904,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAZEAEAAgMAAAAAAAAAAAAAAAABAAMCIWH/2gAIAQEAAT8AcbCw2dn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6},c={src:"/_next/static/media/vscode_ssh.c0aa57be.gif",height:720,width:1280,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/slurm_dev.0e2a590e.gif",height:720,width:1280,blurWidth:0,blurHeight:0},h=o(9013);let u=[{depth:2,value:"Why WATcloud? What is WATcloud?",id:"why-watcloud-what-is-watcloud"},{depth:2,value:"A Look from Afar",id:"a-look-from-afar"},{depth:3,value:"How does WATcloud share compute resources fairly?",id:"how-does-watcloud-share-compute-resources-fairly"},{depth:3,value:"So how does remote development actually work?",id:"so-how-does-remote-development-actually-work"},{depth:3,value:"Job Scheduling vs Interactive Development",id:"job-scheduling-vs-interactive-development"},{depth:2,value:"Setting up WATcloud for ASD",id:"setting-up-watcloud-for-asd"},{depth:2,value:"General Setup",id:"general-setup"},{depth:3,value:"[Local Machine] Clone the wato_asd_tooling repository",id:"local-machine-clone-the-wato_asd_tooling-repository"},{depth:3,value:"[Local Machine] Generate an SSH config",id:"local-machine-generate-an-ssh-config"},{depth:3,value:"[Local Machine] Setup VScode for SSH",id:"local-machine-setup-vscode-for-ssh"},{depth:3,value:"[Local Machine] Setup Agent Forwarding",id:"local-machine-setup-agent-forwarding"},{depth:3,value:"[Host Machine] Confirm Agent Forwarding Works",id:"host-machine-confirm-agent-forwarding-works"},{depth:2,value:"Setup for Interactive Development",id:"setup-for-interactive-development"},{depth:3,value:"[Local Machine] Build the Computer you desire!",id:"local-machine-build-the-computer-you-desire"},{depth:3,value:"[Local Machine] Start a SLURM Dev Session",id:"local-machine-start-a-slurm-dev-session"},{depth:3,value:"[Local Machine] Setup SSH for SLURM",id:"local-machine-setup-ssh-for-slurm"},{depth:3,value:"[Local Machine] Connect to the SLURM Dev Session with VScode",id:"local-machine-connect-to-the-slurm-dev-session-with-vscode"},{depth:2,value:"Setup for Job Scheduling",id:"setup-for-job-scheduling"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code",img:"img",pre:"pre",span:"span"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Developing with WATcloud"}),"\n","\n",(0,s.jsx)(h.UW,{type:"error",emoji:"️❗",children:(0,s.jsxs)(n.p,{children:["You must complete your ",(0,s.jsx)(n.a,{href:"https://cloud.watonomous.ca/docs/compute-cluster/getting-access",children:"Cluster Access Form"})," before proceeding with this guide."]})}),"\n",(0,s.jsx)(n.p,{children:"Here, we discuss setting up WATcloud to be used for software development in the Autonomous Software Division."}),"\n",(0,s.jsx)(n.h2,{id:"why-watcloud-what-is-watcloud",children:"Why WATcloud? What is WATcloud?"}),"\n",(0,s.jsxs)(n.p,{children:["Due to the high computational requirements of many aspects of the ASD stack, WATO has a large server infrastructure for remote development ",(0,s.jsx)(n.a,{href:"https://cloud.watonomous.ca/",children:"WATcloud"}),". In this section, you will learn to connect to WATcloud on VS code. Connecting to a server to do remote development is not only a crucial aspect of software development at WATonomous, but is also a very common practice in the industry."]}),"\n",(0,s.jsx)(h.UW,{type:"info",emoji:"ℹ️",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Fun Fact:"})," WATcloud closely mimics server infrastructures used by OpenAI, NASA, Nvidia, and more!"]})}),"\n",(0,s.jsx)(n.h2,{id:"a-look-from-afar",children:"A Look from Afar"}),"\n",(0,s.jsx)(n.h3,{id:"how-does-watcloud-share-compute-resources-fairly",children:"How does WATcloud share compute resources fairly?"}),"\n",(0,s.jsxs)(n.p,{children:["WATcloud relies heavily on a resource management tool known as ",(0,s.jsx)(n.a,{href:"https://slurm.schedmd.com/overview.html",children:"SLURM"}),". SLURM ensures that all resources in WATcloud are shared in a fair and well-managed manner."]}),"\n",(0,s.jsx)(n.p,{children:'For the everyday developer, you can imagine SLURM as a "build your own computer" tool. You specify to SLURM what compute resources you want (CPU, RAM, GPU, memory, time limit, etc.) and SLURM will build a compute node with the resources it has on hand.'}),"\n",(0,s.jsx)(n.h3,{id:"so-how-does-remote-development-actually-work",children:"So how does remote development actually work?"}),"\n",(0,s.jsx)(n.p,{children:"Remote development for a WATonomous member typically consists of a local machine, host machine, SLURM node, and a docker container. They are defined below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Local Machine"})," Your personal computer."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Host Machine"})," The computer you connect to. In the case of WATcloud, this is the SLURM login node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SLURM Node"})," Used to manage compute resources. It creates SLURM Jobs according to your needs."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"SLURM Job"}),' An "imaginary computer" that is created by WATcloud. You specify to WATcloud what compute you need by running commands in the SLURM login node.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Docker Container"})," An isolated coding environment."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To do remote development in the Autonomous Software Division, the process can be summed up by the image below:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{placeholder:"blur",src:l})}),"\n",(0,s.jsx)(h.UW,{type:"warning",emoji:"⚠️",children:(0,s.jsxs)(n.p,{children:["As shown in the image, ",(0,s.jsx)(n.strong,{children:"there are two ways to use a SLURM node"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"job-scheduling-vs-interactive-development",children:"Job Scheduling vs Interactive Development"}),"\n",(0,s.jsx)(n.p,{children:"Use job scheduling when you want to run a command for a very long time (>1 day long). Use interactive development when you are actively making changes to your code and testing it."}),"\n",(0,s.jsx)(n.p,{children:"For most WATonomous members, you would use job scheduling for tasks like training neural networks, large data processing, numerical optimization, etc. On the other hand, you would use interactive development when you are coding/testing ROS2 nodes, interacting with / visualizing live data, making code changes in general, etc."}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-watcloud-for-asd",children:"Setting up WATcloud for ASD"}),"\n",(0,s.jsx)(h.UW,{type:"warning",emoji:"⚠️",children:(0,s.jsx)(n.p,{children:"This section is experimental. Please let us know of any issues on our Discord"})}),"\n",(0,s.jsx)(n.p,{children:"Dealing with SSH can be quite foreign to alot of new developers. Thankfully, we provide a series of helper scripts that will make setup for WATcloud easier on you."}),"\n",(0,s.jsx)(n.h2,{id:"general-setup",children:"General Setup"}),"\n","\n",(0,s.jsx)(n.p,{children:"This section is required so that you have proper access to our server cluster."}),"\n",(0,s.jsxs)(h.Rg,{children:[(0,s.jsx)(n.h3,{id:"local-machine-clone-the-wato_asd_tooling-repository",children:"[Local Machine] Clone the wato_asd_tooling repository"}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:WATonomous/wato_asd_tooling.git"})]})})}),(0,s.jsx)(n.h3,{id:"local-machine-generate-an-ssh-config",children:"[Local Machine] Generate an SSH config"}),(0,s.jsxs)(n.p,{children:["If you have never created an ",(0,s.jsx)(n.code,{children:"~/.ssh/config"})," file before, do that now. Note, we assume that all your SSH files are stored under ",(0,s.jsx)(n.code,{children:"~/.ssh"})]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"touch"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"~/.ssh/config"})]})})}),(0,s.jsx)(n.p,{children:"Generate a WATcloud SSH config. Follow the prompts whenever you get them."}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/generate_ssh_config.sh"})]})]})}),(0,s.jsx)(n.p,{children:"You should now be able to connect our cluster using these commands:"}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"tr-ubuntu3"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"derek3-ubuntu2"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"delta-ubuntu2"})]})]})}),(0,s.jsx)(n.h3,{id:"local-machine-setup-vscode-for-ssh",children:"[Local Machine] Setup VScode for SSH"}),(0,s.jsxs)(n.p,{children:["To do this, download the ",(0,s.jsx)(n.code,{children:"Remote - SSH"})," VScode Extension. After that, you should be able to attach VScode to any of the machines."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:c})}),(0,s.jsx)(n.h3,{id:"local-machine-setup-agent-forwarding",children:"[Local Machine] Setup Agent Forwarding"}),(0,s.jsx)(n.p,{children:"Agent forwarding lets us carry our identity onto other machines that we connect to. What this means is, you can use git commands on other machines without having to create an SSH key on each machine you connect to."}),(0,s.jsx)(n.p,{children:"Setup agent forwarding with our helper script. Follow the prompts whenever you get them."}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/configure_agent_forwarding.sh"})]})]})}),(0,s.jsx)(n.h3,{id:"host-machine-confirm-agent-forwarding-works",children:"[Host Machine] Confirm Agent Forwarding Works"}),(0,s.jsxs)(n.p,{children:["You should now be able to use git on all the WATcloud machines you connect to. Confirm by running the following ",(0,s.jsx)(n.strong,{children:"inside a WATcloud machine you connected to"}),"."]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"-T"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com"})]})})})]}),"\n",(0,s.jsx)(h.UW,{type:"default",emoji:"✏️",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deliverable"})," Get SSH and SSH Agent Forwarding working."]})}),"\n",(0,s.jsx)(n.h2,{id:"setup-for-interactive-development",children:"Setup for Interactive Development"}),"\n",(0,s.jsx)(n.p,{children:"Unlike job scheduling, SLURM was not built to handle interactive development. Luckily we have a team of very talented individuals, and we managed to make interactive development work nonetheless :)."}),"\n",(0,s.jsx)(n.p,{children:"Creating an interactive development environment entails starting an SSH server inside the SLURM node, some wacky SSH key sharing, a netcast proxycommand, as well as pointing docker to a persistent filesystem. You don't have to do that though. You just need to do the following."}),"\n",(0,s.jsxs)(h.Rg,{children:[(0,s.jsx)(n.h3,{id:"local-machine-build-the-computer-you-desire",children:"[Local Machine] Build the Computer you desire!"}),(0,s.jsxs)(n.p,{children:["Use your favorite text editor to edit ",(0,s.jsx)(n.code,{children:"wato_asd_tooling/session_config.sh"}),"."]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"nano"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"session_config.sh"})]})]})}),(0,s.jsx)(n.p,{children:"The file itself contains descriptions of all of the parameters and how to set them."}),(0,s.jsx)(n.h3,{id:"local-machine-start-a-slurm-dev-session",children:"[Local Machine] Start a SLURM Dev Session"}),(0,s.jsx)(n.p,{children:"Run the helper script to startup a SLURM Dev Node. Follow all the prompts carefully."}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"start_interactive_session.sh"})]})]})}),(0,s.jsx)(h.UW,{type:"error",emoji:"\uD83D\uDEAB",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DO NOT START MORE THAN ONE DEV NODE."})," You have a chance of corrupting your docker filesystem. Starting more than one dev node is like building multiple computers. It is NOT the same as creating multiple terminals."]})}),(0,s.jsx)(n.h3,{id:"local-machine-setup-ssh-for-slurm",children:"[Local Machine] Setup SSH for SLURM"}),(0,s.jsxs)(n.p,{children:["Run this last helper script ",(0,s.jsx)(n.strong,{children:"LOCALLY"}),". Follow the prompts carefully."]}),(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/setup_slurm_ssh.sh"})]})]})}),(0,s.jsx)(n.h3,{id:"local-machine-connect-to-the-slurm-dev-session-with-vscode",children:"[Local Machine] Connect to the SLURM Dev Session with VScode"}),(0,s.jsx)(n.p,{children:"You can connect to the SLURM Dev Session using the VScode ssh extension. The remote host is called asd-dev-session by default."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:d})})]}),"\n",(0,s.jsx)(h.UW,{type:"default",children:(0,s.jsxs)(n.p,{children:["And you're good to go! Whenever you want to startup a SLURM Dev Node, start one up by running ",(0,s.jsx)(n.code,{children:"start_interactive_session.sh"}),", and then SSH into the SLURM node through VScode."]})}),"\n",(0,s.jsx)(n.h2,{id:"setup-for-job-scheduling",children:"Setup for Job Scheduling"}),"\n",(0,s.jsxs)(n.p,{children:["There is no setup. Creating an SLURM job is really easy. It was what SLURM was designed for. You can view docs on SLURM in the ",(0,s.jsx)(n.a,{href:"https://cloud.watonomous.ca/docs/compute-cluster/slurm",children:"WATcloud documentation"}),"."]}),"\n",(0,s.jsx)(h.UW,{type:"default",emoji:"✏️",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Deliverable"})," Run a SLURM batch job with 2 CPUs that counts to 60."]})}),"\n",(0,s.jsx)(n.p,{children:"If you want to create a slurm job that runs inside a docker container, you can use the following helper script."}),"\n",(0,s.jsx)(n.pre,{"data-language":"bash","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"bash","data-theme":"default",children:[(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"slurm_templates/custom_job_node.sh"})]})]})}),"\n",(0,s.jsx)(h.UW,{type:"warning",emoji:"⚠️",children:(0,s.jsxs)(n.p,{children:["You need to have access to our docker registry to make this work. You can come back to this when you've learned about docker in the ",(0,s.jsx)(n.a,{href:"/onboarding/asd_general_onboarding",children:"General Onboarding"})]})})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/onboarding/asd_watcloud_dev.mdx",route:"/onboarding/asd_watcloud_dev",timestamp:1726086166e3,pageMap:[{kind:"Meta",data:{index:"Welcome to the Wiki",about:"About WATonomous",onboarding:"Onboarding","Official Website":{title:"Official Website ↗",type:"page",href:"https://www.watonomous.ca",newWindow:!0},"WATcloud Website":{title:"WATcloud Website ↗",type:"page",href:"https://cloud.watonomous.ca/docs",newWindow:!0},finance:"Finance"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"finance",route:"/finance",children:[{kind:"MdxPage",name:"creating_personal_purchases",route:"/finance/creating_personal_purchases"},{kind:"MdxPage",name:"creating_purchase_requests",route:"/finance/creating_purchase_requests"},{kind:"Meta",data:{creating_personal_purchases:"Creating Personal Purchases",creating_purchase_requests:"Creating Purchase Requests"}}]},{kind:"MdxPage",name:"finance",route:"/finance"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"onboarding",route:"/onboarding",children:[{kind:"Meta",data:{asd_watcloud_dev:"ASD - Developing with WATcloud",asd_general_onboarding:"ASD - General Onboarding",vp_general_onboard:"VP - General Onboarding"}},{kind:"MdxPage",name:"asd_general_onboarding",route:"/onboarding/asd_general_onboarding"},{kind:"MdxPage",name:"asd_watcloud_dev",route:"/onboarding/asd_watcloud_dev"},{kind:"MdxPage",name:"vp_general_onboard",route:"/onboarding/vp_general_onboard"}]},{kind:"MdxPage",name:"onboarding",route:"/onboarding"}],flexsearch:{codeblocks:!0},title:"Developing with WATcloud",headings:u},pageNextRoute:"/onboarding/asd_watcloud_dev",nextraLayout:t.ZP,themeConfig:i.Z};var g=(0,a.j)(p)}},function(e){e.O(0,[318,630,774,888,179],function(){return e(e.s=457)}),_N_E=e.O()}]);