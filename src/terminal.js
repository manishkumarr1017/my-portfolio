import React, { Component } from 'react';
import Terminal from 'terminal-in-react';


class terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.aboutMe=()=>'ABOUT ME 👋\n\n-> Hello!\n-> My name is U Manish Kumar.I am from India 🇮🇳\n-> A Cyber Security Enthusiast, passionate in web devolopment, coding and open-source contribution. Mainly I do binary exploitation ☠️ and reverse engineering 👨‍💻 with DarkArmy and actively participate in CTFs. I am looking to collaborate in security related open-source projects.';
    this.edu=()=>'Education 👨‍🎓\n\n-> Bachelor\'s in Computer Science and Engineering\n\n--> Indian Institute of Engineering Science and Technology\n--> 2018-2022\n\n-> Higher Secondary Education\n\n--> Sri Sathya Sai Higher Secondary School\n--> 2016-2018';
    this.skills=()=>'Tech Stack 👨‍💻 \n\n-> Programming Languages: C, C++, Python\n-> Web Devolopment Skills: HTML, CSS, Javascript, Bootstrap, React, Node\n-> CTF skills: Pwning, Reversing, Web Exploitation, Cryptography\n-> Miscellaneous: Docker, GDB(GEF), Ghidra, radare2, Bash, Good with Assembly x86 intel syntax, Networking Concepts, MYSQL, MongoDB, Data Structures and Algorithms, pwntools, Object Oriented Programming\n-> Mainly familiar with Stack and Heap Overflows\n';
    this.projects=()=>'Projects 🚀\n\n-> Follow The White Rabbit Teleport Hack\n--> Implemented Teleportation hack for the Follow The White Rabbit game using DLL Injection where you can save the co-ordinatesand can teleport to the saved co-ordinates.\n\n-> Tic-Tac-Toe With React\n--> https://adoring-liskov-49466d.netlify.app/\n--> Implemented a Single Page Web application for the Tic-Tac-Toe game.Minimax algorithm is used to build a AI for the game in vedierent levels.The framework used to build is ReactJS\n\n-> Built a vulnhub machine\n--> Built a CTF vulnhub machine consisting of web, forensics, Reverse and pwn challenges';
    this.exp=()=>'Experience 💼\n\n-> Microsoft Colonization Program\n--> I am part of this Microsoft Colonization program where I implemented a Tic-Tac-Toe using ReactJS\n--> June 2020\n\n-> VIEH Cyber Security Intern\n-->I was a part of Research and Devolopment Team as a cyber security intern of VIEH group. I made a vulnhub machine and I was the CTF challenge author for the CIACON CTF conducted during the CIACON conference.\n--> August 2020';
    this.achievements=()=>'Achievements 🎖️\n\n-> Our Team DarkArmy is in 5th rank in CTFtime all over India.\n->';
    this.contact=()=>'Contact Me 📫\n\n-> Github: https://github.com/manishkumarr1017\n-> Gmail: manishkumarr1017@gmail.com';
  }
  render() {
     return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Terminal
          color='#FFD700'
          backgroundColor='#3B3629'
          barColor='black'
          prompt="#FFD700"
          allowTabs={false}
          promptSymbol="[My@Portfolio] ~ $"
          hideTopBar="True"
          startState='maximised'
          style={{ fontSize: "20px" }}
          commands={{
            intro: this.aboutMe,
            edu:this.edu,
            skills:this.skills,
            projects:this.projects,
            exp:this.exp,
            achievements:this.achievements,
            contact:this.contact
          }}
          descriptions={{
            intro:'Want to know about me?',
            edu:'Everything about my education',
            skills:'Skills I am Good at!!',
            projects:'Projects I have done.',
            exp:'My work',
            achievements:'My Accomplishments',
            contact:'Contact Me'
          }}

          msg=' __  ____   __  ____   ___  ____ _____ _____ ___  _     ___ ___  
|  \/  \ \ / / |  _ \ / _ \|  _ \_   _|  ___/ _ \| |   |_ _/ _ \ 
| |\/| |\ V /  | |_) | | | | |_) || | | |_ | | | | |    | | | | |
| |  | | | |   |  __/| |_| |  _ < | | |  _|| |_| | |___ | | |_| |
|_|  |_| |_|   |_|    \___/|_| \_\|_| |_|   \___/|_____|___\___/ 
Please type "help" to list all the commands available!' />
      </div>
    );
  }
}

export default terminal;