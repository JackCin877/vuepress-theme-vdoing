(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{385:function(t,s,a){"use strict";a.r(s);var i=a(3),l=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"进程状态转换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程状态转换"}},[t._v("#")]),t._v(" 进程状态转换")]),t._v(" "),s("h2",{attrs:{id:"_1、进程的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、进程的状态"}},[t._v("#")]),t._v(" 1、进程的状态")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("进程状态反映进程执行过程的变化")]),t._v("。这些状态随着进程的执行和外界条件的变化而转换。\n"),s("ul",[s("li",[t._v("在三态模型中，进程状态分为三个基本状态，即就绪态，运行态，阻塞态。")])])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("运行态：进程占有处理器正在运行")]),t._v(" "),s("li",[t._v("就绪态：进程具备运行条件，等待系统分配处理器以便运 行。当进程已分配到除CPU以外的所有必要资源后，只要再 获得CPU，便可立即执行。在一个系统中处于就绪状态的进 程可能有多个，通常将它们排成一个队列，称为就绪队列")]),t._v(" "),s("li",[t._v("阻塞态：又称为等待(wait)态或睡眠(sleep)态，指进程 不具备运行条件，正在等待某个事件的完成")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/%E4%B8%89%E6%80%81%E6%A8%A1%E5%9E%8B.4c03vx8qj780.webp",alt:"三态模型"}})]),t._v(" "),s("ul",[s("li",[t._v("在五态模型 中，进程分为新建态、就绪态，运行态，阻塞态，终止态。")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("新建态：进程刚被创建时的状态，尚未进入就绪队列")]),t._v(" "),s("li",[t._v("终止态：进程完成任务到达正常结束点，或出现无法克服的错误而异常终止，或被操作系统及 有终止权的进程所终止时所处的状态。进入终止态的进程以后不再执行，但依然保留在操作系 统中等待善后。一旦其他进程完成了对终止态进程的信息抽取之后，操作系统将删除该进程。")])])]),t._v(" "),s("h2",{attrs:{id:"_2、查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看进程"}},[t._v("#")]),t._v(" 2、查看进程")]),t._v(" "),s("ul",[s("li",[s("strong",[s("code",[t._v("ps aux / ajx")])]),t._v(" "),s("ul",[s("li",[t._v("a：显示终端上的所有进程，包括其他用户的进程")]),t._v(" "),s("li",[t._v("u：显示进程的详细信息")]),t._v(" "),s("li",[t._v("x：显示没有控制终端的进程")]),t._v(" "),s("li",[t._v("j：列出与作业控制相关的信息")])])]),t._v(" "),s("li",[s("strong",[t._v("打印出来的信息是当前时间点的进程信息，相当于快照")])])]),t._v(" "),s("h3",{attrs:{id:"_2-1-ps-aux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-ps-aux"}},[t._v("#")]),t._v(" 2.1 ps aux")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/ps-aux.223p9kaj561s.webp",alt:"ps-aux"}})]),t._v(" "),s("ul",[s("li",[t._v("每列对应的意思是：")])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("USER : 进程所属用户")]),t._v(" "),s("li",[t._v("PID : 进程id")]),t._v(" "),s("li",[t._v("%CPU :cpu使用率")]),t._v(" "),s("li",[t._v("%MEM ： 内存使用率 ，")]),t._v(" "),s("li",[t._v("（VSZ 和 RSS没说）")]),t._v(" "),s("li",[t._v("TTY : 当前进程所属终端  ，可以直接在终端输入 "),s("code",[t._v("tty")]),t._v("查看当前所对应终端")]),t._v(" "),s("li",[t._v("STAT : 状态")])]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v(" STAT参数意义：\n\tD 不可中断 Uninterruptible（usually IO）\n\tR 正在运行，或在队列中的进程\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("大写"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 处于休眠状态\n\tT 停止或被追踪\n\tZ 僵尸进程\n\tW 进入内存交换（从内核"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v("开始无效）\n\tX 死掉的进程\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 高优先级\n\tN 低优先级\n\ts 包含子进程\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 位于前台的进程组\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("ul",[s("li",[t._v("start : 开始时间")]),t._v(" "),s("li",[t._v("COMMAND : 执行了什么命令，执行什么命令产生的进程\n"),s("ul",[s("li",[t._v("看上图最后一条命令就知道，外面是用 ps aux 命令生成了这个进程")])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-ps-ajx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-ps-ajx"}},[t._v("#")]),t._v(" 2.2 ps ajx")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/ps-ajx.47xsgfhhue00.webp",alt:"ps-ajx"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("每列对应的意思是：")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("父进程id")]),t._v(" "),s("li",[t._v("进程id")]),t._v(" "),s("li",[t._v("进程组id")]),t._v(" "),s("li",[t._v("会话组id")]),t._v(" "),s("li",[t._v("tty 当前进程所属终端")]),t._v(" "),s("li",[t._v("。。。")])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-stat参数的含义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-stat参数的含义"}},[t._v("#")]),t._v(" 2.3 stat参数的含义")]),t._v(" "),s("div",{staticClass:"language-c line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[t._v(" STAT参数意义：\n\tD 不可中断 Uninterruptible（usually IO）\n\tR 正在运行，或在队列中的进程\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("S")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("大写"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 处于休眠状态\n\tT 停止或被追踪\n\tZ 僵尸进程\n\tW 进入内存交换（从内核"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.6")]),t._v("开始无效）\n\tX 死掉的进程\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" 高优先级\n\tN 低优先级\n\ts 包含子进程\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" 位于前台的进程组\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("h3",{attrs:{id:"_2-4-实时显示进程动态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-实时显示进程动态"}},[t._v("#")]),t._v(" 2.4 实时显示进程动态")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/m0_50809603/article/details/127663191",target:"_blank",rel:"noopener noreferrer"}},[t._v("(19条消息) linux下top指令参数详解及用法_linux top参数_亿只猪儿虫的博客-CSDN博客"),s("OutboundLink")],1)]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("top")])]),t._v(" "),s("li",[t._v("可以在使用 top 命令时加上 -d 来指定显示信息更新的时间间隔，在 top 命令 执行后，可以按以下按键对显示的结果进行排序：\n"),s("ul",[s("li",[s("strong",[t._v("M")]),t._v("   根据内存使用量排序")]),t._v(" "),s("li",[s("strong",[t._v("P")]),t._v("    根据 CPU 占有率排序")]),t._v(" "),s("li",[s("strong",[t._v("T")]),t._v("    根据进程运行时间长短排序")]),t._v(" "),s("li",[s("strong",[t._v("U")]),t._v("    根据用户名来筛选进程")]),t._v(" "),s("li",[s("strong",[t._v("K")]),t._v("    输入指定的 PID 杀死进程")]),t._v(" "),s("li",[s("strong",[t._v("q")]),t._v("     退出")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/top%E5%91%BD%E4%BB%A4-%E5%AE%9E%E6%97%B6%E6%98%BE%E7%A4%BA%E8%BF%9B%E7%A8%8B%E5%8A%A8%E6%80%81.uvh7sna48v4.webp",alt:"top命令-实时显示进程动态"}})]),t._v(" "),s("h3",{attrs:{id:"_2-5-杀死进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-杀死进程"}},[t._v("#")]),t._v(" 2.5 杀死进程")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("kill [-signal] pid")])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v('kill命令默认的信号是15，即kill -15，此时系统发送一个SIGTERM的信号给对应程序，当程序接收到该信号后，具体如何处理是自己可以决定的（可结束，可忽略），结束前一般会进行一些"准备工作"。由于SIGTERM（15）的信号可以被阻塞和忽略，这也导致有时候使用kill命令没办法"杀死"应用；')]),t._v(" "),s("li",[t._v('9 号信号能够强制杀死进程，系统会发出SIGKILL信号，要求接收到该信号的程序立即结束运行，不能被阻塞或忽略，这通常会带来一些副作用，因为应用程序没有时间进行"准备工作"，可能造成数据丢失或者终端无法恢复到正常状态等；')])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/kill-%E6%9D%80%E6%AD%BB%E8%BF%9B%E7%A8%8B.1j10hyl1w0yo.webp",alt:"kill-杀死进程"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("kill –l")]),t._v(" 列出所有信号")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/kill--l%E6%9F%A5%E7%9C%8B%E4%BF%A1%E5%8F%B7.49chz8tpxfq0.webp",alt:"kill--l查看信号"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("kill –SIGKILL 进程ID")]),t._v(" /  "),s("code",[t._v("kill -9 进程ID")]),t._v("（可以直接写宏，也可以写对应的信号值）")]),t._v(" "),s("li",[t._v("下图，在自己终端，杀死自己终端是不成功的，必须加 "),s("code",[t._v("-9")]),t._v(" 来强制杀死进程")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/kill-%E5%BC%BA%E5%88%B6%E6%9D%80%E6%AD%BB%E8%BF%9B%E7%A8%8B.23aj7mpf3rk0.webp",alt:"kill-强制杀死进程"}})]),t._v(" "),s("ul",[s("li",[s("code",[t._v("killall name")]),t._v(" 根据进程名杀死进程\n"),s("ul",[s("li",[t._v("这里要注意写入命令的当前路径，比如在终端2里删除，但是这时我们已经进入到了Linux目录下，那我们就应该这样写： "),s("code",[t._v("killall ./a.out")])])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/killall-name%E6%9D%80%E6%AD%BB%E8%BF%9B%E7%A8%8B.4v2sniyd4fc0.webp",alt:"killall-name杀死进程"}})]),t._v(" "),s("h3",{attrs:{id:"_2-6-后台运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-后台运行"}},[t._v("#")]),t._v(" 2.6 后台运行")]),t._v(" "),s("ul",[s("li",[t._v("有时我们可以使用 "),s("strong",[s("code",[t._v("可执行文件 &")])]),t._v(" 这样的命令让程序在后台运行，但是显示到终端\n"),s("ul",[s("li",[t._v("下图，第一次运行，就是前台运行，这样如果我们不杀死这个进程，我们就不能输入其他命令")]),t._v(" "),s("li",[t._v("所以，后台运行的好处就是可以在执行其他进程的同时，进行写入指令")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jackcin877.github.io/image-hosting/Linux/%E5%90%8E%E5%8F%B0%E8%BF%90%E8%A1%8C.4xpbki2k1vo0.webp",alt:"后台运行"}})]),t._v(" "),s("h2",{attrs:{id:"_3、进程号和相关函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、进程号和相关函数"}},[t._v("#")]),t._v(" 3、进程号和相关函数")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("每个进程都由进程号来标识，其类型为 pid_t（整型），进程号的范围：0～32767。")]),t._v(" "),s("strong",[t._v("进程号总是唯一的")]),t._v("，"),s("strong",[t._v("但可以重用")]),t._v("。当一个进程终止后，其进程号就可以再次使用。")]),t._v(" "),s("li",[s("strong",[t._v("任何进程（除 init 进程）都是由另一个进程创建，该进程称为被创建进程的父进程， 对应的进程号称为父进程号（PPID）")]),t._v("。")]),t._v(" "),s("li",[t._v("**进程组是一个或多个进程的集合。**他们之间相互关联，进程组可以接收同一终端的各 种信号，关联的进程有一个进程组号（PGID）。默认情况下，当前的进程号会当做当前的进程组号。")]),t._v(" "),s("li",[t._v("进程号和进程组相关函数：\n"),s("ul",[s("li",[s("strong",[s("code",[t._v("pid_t getpid(void);")])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("pid_t getppid(void);")])])]),t._v(" "),s("li",[s("strong",[s("code",[t._v("pid_t getpgid(pid_t pid);")])])])])])])])}),[],!1,null,null,null);s.default=l.exports}}]);