(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[765],{3184:function(e,s,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/autonomous_software_general/watcloud_dev",function(){return o(4110)}])},4110:function(e,s,o){"use strict";o.r(s),o.d(s,{__toc:function(){return u},default:function(){return x}});var n=o(5893),t=o(2673),a=o(7913),i=o(4102);o(3150),o(9128);var r=o(2643),l={src:"/_next/static/media/watcloud_afar.6f5294d1.jpg",height:2244,width:2904,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAsAP/xAAZEAEAAgMAAAAAAAAAAAAAAAABAAMCIWH/2gAIAQEAAT8AcbCw2dn/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwCP/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",blurWidth:8,blurHeight:6},c={src:"/_next/static/media/vscode_ssh.c0aa57be.gif",height:720,width:1280,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/slurm_dev.0e2a590e.gif",height:720,width:1280,blurWidth:0,blurHeight:0},h=o(9013);let u=[{depth:2,value:"Why WATcloud? What is WATcloud?",id:"why-watcloud-what-is-watcloud"},{depth:2,value:"A Look from Afar",id:"a-look-from-afar"},{depth:3,value:"How does WATcloud share compute resources fairly?",id:"how-does-watcloud-share-compute-resources-fairly"},{depth:3,value:"So how does remote development actually work?",id:"so-how-does-remote-development-actually-work"},{depth:3,value:"Job Scheduling vs Interactive Development",id:"job-scheduling-vs-interactive-development"},{depth:2,value:"Setting up WATcloud for ASD",id:"setting-up-watcloud-for-asd"},{depth:2,value:"General Setup",id:"general-setup"},{depth:3,value:"[Local Machine] Clone the wato_asd_tooling repository",id:"local-machine-clone-the-wato_asd_tooling-repository"},{depth:3,value:"[Local Machine] Generate an SSH config",id:"local-machine-generate-an-ssh-config"},{depth:3,value:"[Local Machine] Setup VScode for SSH",id:"local-machine-setup-vscode-for-ssh"},{depth:3,value:"[Local Machine] Setup Agent Forwarding",id:"local-machine-setup-agent-forwarding"},{depth:3,value:"[Host Machine] Confirm Agent Forwarding Works",id:"host-machine-confirm-agent-forwarding-works"},{depth:2,value:"Setup for Interactive Development",id:"setup-for-interactive-development"},{depth:3,value:"One-time Setup",id:"one-time-setup"},{depth:3,value:"[Host Machine] Add your public key into the SLURM node's authorized keys",id:"host-machine-add-your-public-key-into-the-slurm-nodes-authorized-keys"},{depth:3,value:"[Host Machine] Add the following to your bashrc in your SLURM node",id:"host-machine-add-the-following-to-your-bashrc-in-your-slurm-node"},{depth:3,value:"[Local Machine] Build the Computer you desire!",id:"local-machine-build-the-computer-you-desire"},{depth:3,value:"[Local Machine] Start a SLURM Dev Session",id:"local-machine-start-a-slurm-dev-session"},{depth:3,value:"[Local Machine] Setup SSH for SLURM",id:"local-machine-setup-ssh-for-slurm"},{depth:3,value:"[Local Machine] Stop the SLURM Dev Session",id:"local-machine-stop-the-slurm-dev-session"},{depth:3,value:"Starting a SLURM Dev Session Regularly",id:"starting-a-slurm-dev-session-regularly"},{depth:3,value:"[Local Machine][Optional] Build the Computer you desire!",id:"local-machineoptional-build-the-computer-you-desire"},{depth:3,value:"[Local Machine] Start a SLURM Dev Session",id:"local-machine-start-a-slurm-dev-session-1"},{depth:3,value:"[Local Machine] Connect to the SLURM Dev Session with VScode",id:"local-machine-connect-to-the-slurm-dev-session-with-vscode"},{depth:2,value:"Setup for Job Scheduling",id:"setup-for-job-scheduling"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",strong:"strong",h3:"h3",ul:"ul",li:"li",code:"code",img:"img",pre:"pre",span:"span"},(0,r.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{children:"Developing with WATcloud"}),"\n","\n",(0,n.jsx)(h.UW,{type:"error",emoji:"️❗",children:(0,n.jsxs)(s.p,{children:["You must complete your ",(0,n.jsx)(s.a,{href:"https://cloud.watonomous.ca/docs/compute-cluster/getting-access",children:"Cluster Access Form"})," before proceeding with this guide."]})}),"\n",(0,n.jsx)(s.p,{children:"Here, we discuss setting up WATcloud to be used for software development in the Autonomous Software Division."}),"\n",(0,n.jsx)(s.h2,{id:"why-watcloud-what-is-watcloud",children:"Why WATcloud? What is WATcloud?"}),"\n",(0,n.jsxs)(s.p,{children:["Due to the high computational requirements of many aspects of the ASD stack, WATO has a large server infrastructure for remote development ",(0,n.jsx)(s.a,{href:"https://cloud.watonomous.ca/",children:"WATcloud"}),". In this section, you will learn to connect to WATcloud on VS code. Connecting to a server to do remote development is not only a crucial aspect of software development at WATonomous, but is also a very common practice in the industry."]}),"\n",(0,n.jsx)(h.UW,{type:"info",emoji:"ℹ️",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Fun Fact:"})," WATcloud closely mimics server infrastructures used by OpenAI, NASA, Nvidia, and more!"]})}),"\n",(0,n.jsx)(s.h2,{id:"a-look-from-afar",children:"A Look from Afar"}),"\n",(0,n.jsx)(s.h3,{id:"how-does-watcloud-share-compute-resources-fairly",children:"How does WATcloud share compute resources fairly?"}),"\n",(0,n.jsxs)(s.p,{children:["WATcloud relies heavily on a resource management tool known as ",(0,n.jsx)(s.a,{href:"https://slurm.schedmd.com/overview.html",children:"SLURM"}),". SLURM ensures that all resources in WATcloud are shared in a fair and well-managed manner."]}),"\n",(0,n.jsx)(s.p,{children:'For the everyday developer, you can imagine SLURM as a "build your own computer" tool. You specify to SLURM what compute resources you want (CPU, RAM, GPU, memory, time limit, etc.) and SLURM will build a compute node with the resources it has on hand.'}),"\n",(0,n.jsx)(s.h3,{id:"so-how-does-remote-development-actually-work",children:"So how does remote development actually work?"}),"\n",(0,n.jsx)(s.p,{children:"Remote development for a WATonomous member typically consists of a local machine, host machine, SLURM node, and a docker container. They are defined below:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Local Machine"})," Your personal computer."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Host Machine"})," The computer you connect to. In the case of WATcloud, this is the SLURM login node."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"SLURM Node"})," Used to manage compute resources. It creates SLURM Jobs according to your needs."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"SLURM Job"}),' An "imaginary computer" that is created by WATcloud. You specify to WATcloud what compute you need by running commands in the SLURM login node.']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Docker Container"})," An isolated coding environment."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To do remote development in the Autonomous Software Division, the process can be summed up by the image below:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{placeholder:"blur",src:l})}),"\n",(0,n.jsx)(h.UW,{type:"warning",emoji:"⚠️",children:(0,n.jsxs)(s.p,{children:["As shown in the image, ",(0,n.jsx)(s.strong,{children:"there are two ways to use a SLURM node"}),"."]})}),"\n",(0,n.jsx)(s.h3,{id:"job-scheduling-vs-interactive-development",children:"Job Scheduling vs Interactive Development"}),"\n",(0,n.jsx)(s.p,{children:"Use job scheduling when you want to run a command for a very long time (>1 day long). Use interactive development when you are actively making changes to your code and testing it."}),"\n",(0,n.jsx)(s.p,{children:"For most WATonomous members, you would use job scheduling for tasks like training neural networks, large data processing, numerical optimization, etc. On the other hand, you would use interactive development when you are coding/testing ROS2 nodes, interacting with / visualizing live data, making code changes in general, etc."}),"\n",(0,n.jsx)(s.h2,{id:"setting-up-watcloud-for-asd",children:"Setting up WATcloud for ASD"}),"\n",(0,n.jsx)(h.UW,{type:"warning",emoji:"⚠️",children:(0,n.jsx)(s.p,{children:"This section is experimental. Please let us know of any issues on our Discord"})}),"\n",(0,n.jsx)(s.p,{children:"Dealing with SSH can be quite foreign to alot of new developers. Thankfully, we provide a series of helper scripts that will make setup for WATcloud easier on you."}),"\n",(0,n.jsx)(s.h2,{id:"general-setup",children:"General Setup"}),"\n","\n",(0,n.jsx)(s.p,{children:"This section is required so that you have proper access to our server cluster."}),"\n",(0,n.jsxs)(h.Rg,{children:[(0,n.jsx)(s.h3,{id:"local-machine-clone-the-wato_asd_tooling-repository",children:"[Local Machine] Clone the wato_asd_tooling repository"}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"git"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"clone"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com:WATonomous/wato_asd_tooling.git"})]})})}),(0,n.jsx)(s.h3,{id:"local-machine-generate-an-ssh-config",children:"[Local Machine] Generate an SSH config"}),(0,n.jsxs)(s.p,{children:["If you have never created an ",(0,n.jsx)(s.code,{children:"~/.ssh/config"})," file before, do that now. Note, we assume that all your SSH files are stored under ",(0,n.jsx)(s.code,{children:"~/.ssh"})]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"touch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.ssh/config"})]})})}),(0,n.jsx)(s.p,{children:"Generate a WATcloud SSH config. Follow the prompts whenever you get them."}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/generate_ssh_config.sh"})]})]})}),(0,n.jsx)(s.p,{children:"You should now be able to connect our cluster using these commands:"}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"tr-ubuntu3"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"derek3-ubuntu2"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"delta-ubuntu2"})]})]})}),(0,n.jsx)(s.h3,{id:"local-machine-setup-vscode-for-ssh",children:"[Local Machine] Setup VScode for SSH"}),(0,n.jsxs)(s.p,{children:["To do this, download the ",(0,n.jsx)(s.code,{children:"Remote - SSH"})," VScode Extension. After that, you should be able to attach VScode to any of the machines."]}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:c})}),(0,n.jsx)(s.h3,{id:"local-machine-setup-agent-forwarding",children:"[Local Machine] Setup Agent Forwarding"}),(0,n.jsx)(s.p,{children:"Agent forwarding lets us carry our identity onto other machines that we connect to. What this means is, you can use git commands on other machines without having to create an SSH key on each machine you connect to."}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Linux/Mac"}),": Setup agent forwarding with our helper script. Follow the prompts whenever you get them."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/configure_agent_forwarding.sh"})]})]})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Mac Users Beware:"})," Whenever you restart/shutdown your mac, your ssh keys are removed from your agent, so you’ll have to re-add them on startup."]}),(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"ssh-add --apple-use-keychain $PATH_TO_PRIVATE_KEY"})})})}),(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Windows"}),": Open Powershell (as adminstrator) and run the following command,"]}),(0,n.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"text","data-theme":"default",children:(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"Set-Service -Name ssh-agent -StartupType Automatic; Start-Service ssh-agent"})})})}),(0,n.jsx)(s.h3,{id:"host-machine-confirm-agent-forwarding-works",children:"[Host Machine] Confirm Agent Forwarding Works"}),(0,n.jsxs)(s.p,{children:["You should now be able to use git on all the WATcloud machines you connect to. Confirm by running the following ",(0,n.jsx)(s.strong,{children:"inside a WATcloud machine you connected to"}),"."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ssh"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-T"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"git@github.com"})]})})})]}),"\n",(0,n.jsx)(h.UW,{type:"default",emoji:"✏️",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Deliverable"})," Get SSH and SSH Agent Forwarding working."]})}),"\n",(0,n.jsx)(s.h2,{id:"setup-for-interactive-development",children:"Setup for Interactive Development"}),"\n",(0,n.jsx)(s.p,{children:"Unlike job scheduling, SLURM was not built to handle interactive development. Luckily we have a team of very talented individuals, and we managed to make interactive development work nonetheless :)."}),"\n",(0,n.jsx)(s.p,{children:"Creating an interactive development environment entails starting an SSH server inside the SLURM node, some wacky SSH key sharing, a netcast proxycommand, as well as pointing docker to a persistent filesystem. You don't have to do that though. You just need to do the following."}),"\n",(0,n.jsx)(s.h3,{id:"one-time-setup",children:"One-time Setup"}),"\n",(0,n.jsx)(s.p,{children:"Follow these steps if you are setting up the SLURM dev sessions for the first time, or you were using past solutions for SLURM that WATO provided."}),"\n",(0,n.jsxs)(h.Rg,{children:[(0,n.jsx)(s.h3,{id:"host-machine-add-your-public-key-into-the-slurm-nodes-authorized-keys",children:"[Host Machine] Add your public key into the SLURM node's authorized keys"}),(0,n.jsx)(s.p,{children:"Copy your public key on your local computer and paste it into the authorized_keys file on the SLURM node."}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"your_local_machine$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"cat"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.ssh/your_key.pub"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (copy "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"the"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"of"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"this"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"your_local_machine$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ssh"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [tr-ubuntu3 "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"or"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"derek3-ubuntu2]"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"watcloud_slurm_node$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"touch"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.ssh/authorized_keys"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"watcloud_slurm_node$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nano"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.ssh/authorized_keys"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (paste "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"you"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"rpublic"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"key"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"into"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"here"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})}),(0,n.jsx)(s.h3,{id:"host-machine-add-the-following-to-your-bashrc-in-your-slurm-node",children:"[Host Machine] Add the following to your bashrc in your SLURM node"}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsx)(s.code,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"watcloud_slurm_node$"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"nano"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"~/.bashrc"})]})})}),(0,n.jsxs)(s.p,{children:["Add the following to the end of your ",(0,n.jsx)(s.code,{children:"~/.bashrc"})," file."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" [[ "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"$('}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"hostname"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:')"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"slurm"'}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ]]; "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"then"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" XDG_RUNTIME_DIR"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"${XDG_RUNTIME_DIR"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":-/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"tmp"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"run}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" XDG_CONFIG_HOME"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"${XDG_CONFIG_HOME"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":-/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"tmp"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"/"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"config}"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" DOCKER_HOST"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"unix://${XDG_RUNTIME_DIR}/docker.sock"'})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"fi"})})]})}),(0,n.jsx)(s.h3,{id:"local-machine-build-the-computer-you-desire",children:"[Local Machine] Build the Computer you desire!"}),(0,n.jsxs)(s.p,{children:["Use your favorite text editor to edit ",(0,n.jsx)(s.code,{children:"wato_asd_tooling/session_config.sh"}),"."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nano"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"session_config.sh"})]})]})}),(0,n.jsx)(s.p,{children:"The file itself contains descriptions of all of the parameters and how to set them."}),(0,n.jsx)(s.h3,{id:"local-machine-start-a-slurm-dev-session",children:"[Local Machine] Start a SLURM Dev Session"}),(0,n.jsx)(s.p,{children:"Run the helper script to startup a SLURM Dev Node. Follow all the prompts carefully."}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"start_interactive_session.sh"})]})]})}),(0,n.jsx)(h.UW,{type:"error",emoji:"\uD83D\uDEAB",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"DO NOT START MORE THAN ONE DEV NODE."})," You have a chance of corrupting your docker filesystem. Starting more than one dev node is like building multiple computers. It is NOT the same as creating multiple terminals."]})}),(0,n.jsx)(s.h3,{id:"local-machine-setup-ssh-for-slurm",children:"[Local Machine] Setup SSH for SLURM"}),(0,n.jsxs)(s.p,{children:["Run this last helper script ",(0,n.jsx)(s.strong,{children:"LOCALLY"}),". Follow the prompts carefully."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"ssh_helpers/setup_slurm_ssh.sh"})]})]})}),(0,n.jsx)(s.h3,{id:"local-machine-stop-the-slurm-dev-session",children:"[Local Machine] Stop the SLURM Dev Session"}),(0,n.jsxs)(s.p,{children:["Stop the interactive session by hitting ",(0,n.jsx)(s.code,{children:"Ctrl+C"}),"."]})]}),"\n",(0,n.jsx)(s.h3,{id:"starting-a-slurm-dev-session-regularly",children:"Starting a SLURM Dev Session Regularly"}),"\n",(0,n.jsx)(s.p,{children:"Once you have done the one-time setup, connecting to a SLURM Dev Session is easy."}),"\n",(0,n.jsxs)(h.Rg,{children:[(0,n.jsx)(s.h3,{id:"local-machineoptional-build-the-computer-you-desire",children:"[Local Machine][Optional] Build the Computer you desire!"}),(0,n.jsxs)(s.p,{children:["Use your favorite text editor to edit ",(0,n.jsx)(s.code,{children:"wato_asd_tooling/session_config.sh"}),"."]}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"nano"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"session_config.sh"})]})]})}),(0,n.jsx)(s.h3,{id:"local-machine-start-a-slurm-dev-session-1",children:"[Local Machine] Start a SLURM Dev Session"}),(0,n.jsx)(s.p,{children:"Run the helper script to startup a SLURM Dev Node. Follow all the prompts carefully."}),(0,n.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,n.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"cd"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"wato_asd_tooling"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"bash"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"start_interactive_session.sh"})]})]})}),(0,n.jsx)(s.h3,{id:"local-machine-connect-to-the-slurm-dev-session-with-vscode",children:"[Local Machine] Connect to the SLURM Dev Session with VScode"}),(0,n.jsx)(s.p,{children:"You can connect to the SLURM Dev Session using the VScode ssh extension. The remote host is called asd-dev-session by default."}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:d})})]}),"\n",(0,n.jsx)(h.UW,{type:"default",children:(0,n.jsxs)(s.p,{children:["And you're good to go! Whenever you want to startup a SLURM Dev Node, start one up by running ",(0,n.jsx)(s.code,{children:"start_interactive_session.sh"}),", and then SSH into the SLURM node through VScode."]})}),"\n",(0,n.jsx)(s.h2,{id:"setup-for-job-scheduling",children:"Setup for Job Scheduling"}),"\n",(0,n.jsxs)(s.p,{children:["There is no setup. Creating an SLURM job is really easy. It was what SLURM was designed for. You can view docs on SLURM in the ",(0,n.jsx)(s.a,{href:"https://cloud.watonomous.ca/docs/compute-cluster/slurm",children:"WATcloud documentation"}),"."]}),"\n",(0,n.jsx)(h.UW,{type:"default",emoji:"✏️",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Deliverable"})," Run a SLURM batch job with 2 CPUs that counts to 60."]})})]})}let p={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.a)(),e.components);return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/autonomous_software_general/watcloud_dev.mdx",route:"/autonomous_software_general/watcloud_dev",timestamp:174156669e4,pageMap:[{kind:"Meta",data:{index:"Welcome to the Wiki",about:"About WATonomous","Official Website":{title:"Official Website ↗",type:"page",href:"https://www.watonomous.ca",newWindow:!0},"WATcloud Website":{title:"WATcloud Website ↗",type:"page",href:"https://cloud.watonomous.ca/docs",newWindow:!0},admission_assignments:"Admission Assignments",autonomous_platform_general:"Autonomous Platform General",autonomous_software_general:"Autonomous Software General",finance:"Finance",quest_books:"Quest Books"}},{kind:"MdxPage",name:"about",route:"/about"},{kind:"Folder",name:"admission_assignments",route:"/admission_assignments",children:[{kind:"Meta",data:{asd_admission_assignment:"ASD Admission Assignment"}},{kind:"MdxPage",name:"asd_admission_assignment",route:"/admission_assignments/asd_admission_assignment"}]},{kind:"MdxPage",name:"admission_assignments",route:"/admission_assignments"},{kind:"Folder",name:"autonomous_platform_general",route:"/autonomous_platform_general",children:[{kind:"Meta",data:{about_ap:"About Autonomous Platform"}},{kind:"MdxPage",name:"about_ap",route:"/autonomous_platform_general/about_ap"}]},{kind:"MdxPage",name:"autonomous_platform_general",route:"/autonomous_platform_general"},{kind:"Folder",name:"autonomous_software_general",route:"/autonomous_software_general",children:[{kind:"Meta",data:{about_asd:"About Autonomous Software",monorepo_infrastructure:"Monorepo Infrastructure",watcloud_dev:"Developing with WATcloud"}},{kind:"MdxPage",name:"about_asd",route:"/autonomous_software_general/about_asd"},{kind:"MdxPage",name:"monorepo_infrastructure",route:"/autonomous_software_general/monorepo_infrastructure"},{kind:"MdxPage",name:"watcloud_dev",route:"/autonomous_software_general/watcloud_dev"}]},{kind:"MdxPage",name:"autonomous_software_general",route:"/autonomous_software_general"},{kind:"Folder",name:"finance",route:"/finance",children:[{kind:"Meta",data:{creating_personal_purchases:"Creating Personal Purchases",creating_purchase_requests:"Creating Purchase Requests"}},{kind:"MdxPage",name:"creating_personal_purchases",route:"/finance/creating_personal_purchases"},{kind:"MdxPage",name:"creating_purchase_requests",route:"/finance/creating_purchase_requests"}]},{kind:"MdxPage",name:"finance",route:"/finance"},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"quest_books",route:"/quest_books",children:[{kind:"Meta",data:{w25_eve_quests:"W25 Eve Quests",w25_micro_quests:"W25 Micro Quests",w25_rover_quests:"W25 Rover Quests",w25_humanoid_quests:"W25 Humanoid Quests",w25_bizops_quests:"W25 Bizops Quests"}},{kind:"MdxPage",name:"w25_bizops_quests",route:"/quest_books/w25_bizops_quests"},{kind:"MdxPage",name:"w25_eve_quests",route:"/quest_books/w25_eve_quests"},{kind:"MdxPage",name:"w25_humanoid_quests",route:"/quest_books/w25_humanoid_quests"},{kind:"MdxPage",name:"w25_micro_quests",route:"/quest_books/w25_micro_quests"},{kind:"MdxPage",name:"w25_rover_quests",route:"/quest_books/w25_rover_quests"}]},{kind:"MdxPage",name:"quest_books",route:"/quest_books"}],flexsearch:{codeblocks:!0},title:"Developing with WATcloud",headings:u},pageNextRoute:"/autonomous_software_general/watcloud_dev",nextraLayout:a.ZP,themeConfig:i.Z};var x=(0,t.j)(p)}},function(e){e.O(0,[879,630,774,888,179],function(){return e(e.s=3184)}),_N_E=e.O()}]);