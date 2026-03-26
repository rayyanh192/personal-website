export type CommandResult = {
  output: string;
  action?: "clear";
};

const COMMANDS: Record<string, () => CommandResult> = {
  help: () => ({
    output: `
Available commands:
  help      - Show this help message
  whoami    - Learn about me
  skills    - View my technical skills
  projects  - See my projects
  contact   - Get my contact info
  flight    - Take flight
  clear     - Clear the terminal
  secret    - ???
    `.trim(),
  }),

  whoami: () => ({
    output: `
┌─────────────────────────────────────────┐
│  RAYYAN HUSSAIN                         │
│  ═══════════════                        │
│  Role: CS & Engineering Student @ SCU   │
│  Focus: Robotics, ML, Creative Tech     │
│  Status: Building cool stuff            │
└─────────────────────────────────────────┘
    `.trim(),
  }),

  skills: () => ({
    output: `
╔════════════════════════════════════════════╗
║           TECHNICAL SKILLS                 ║
╠════════════════════════════════════════════╣
║ Languages:  Python, TypeScript, C++, Swift ║
║ Frontend:   React, Next.js, Tailwind       ║
║ Backend:    Node.js, FastAPI               ║
║ ML/AI:      PyTorch, TensorFlow, RAG       ║
║ Robotics:   ROS 2, OptiTrack               ║
║ Mobile:     iOS, SwiftUI                   ║
║ Tools:      Git, Docker, Linux, NVIDIA DGX ║
╚════════════════════════════════════════════╝
    `.trim(),
  }),

  projects: () => ({
    output: `
┌──────────────────────────────────────────┐
│  FEATURED PROJECTS                       │
├──────────────────────────────────────────┤
│  [1] Power2ThePeople  ★ 1ST PLACE        │
│      AI legal rights assistant           │
│      NVIDIA Spark Hackathon 2026         │
│                                          │
│  [2] Drone Swarm Control                 │
│      Multi-robot adaptive navigation     │
│      with Crazyflie microdrones          │
│                                          │
│  [3] ASCII Art Engine                    │
│      Perlin noise animated backgrounds   │
│      (you're looking at it!)             │
│                                          │
│  [4] More on GitHub...                   │
│      github.com/rayyanh192                │
└──────────────────────────────────────────┘
    `.trim(),
  }),

  contact: () => ({
    output: `
╭───────────────────────────────────────╮
│  LET'S CONNECT                        │
├───────────────────────────────────────┤
│  Email:    rayyanhussain2024@gmail.com│
│  LinkedIn: linkedin.com/in/rayyan-h   │
│  GitHub:   github.com/rayyanh         │
╰───────────────────────────────────────╯
    `.trim(),
  }),

  clear: () => ({ output: "", action: "clear" }),

  // Easter eggs
  secret: () => ({
    output: `

    You found the secret!

    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░█▀▀░█▀█░█▀█░█░░░░█░░░░░░░░
    ░░░░█░░░█░█░█░█░█░░░░█░░░░░░░░
    ░░░░█▄▄░█▄█░█▄█░█▄▄░░▄░░░░░░░░
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

    Thanks for exploring!
    `.trim(),
  }),

  sudo: () => ({
    output: "Nice try, but this terminal doesn't have root access ;)",
  }),

  ls: () => ({
    output: "README.md  projects/  skills.json  contact.txt",
  }),

  pwd: () => ({
    output: "/home/rayyan/portfolio",
  }),

  cat: () => ({
    output: "Try: help, whoami, skills, projects, or contact",
  }),

  hello: () => ({
    output: "Hey there! Welcome to my portfolio",
  }),

  hi: () => ({
    output: "Hello! Type 'help' to see available commands.",
  }),

  exit: () => ({
    output: "You can't escape that easily! Try exploring with 'help'",
  }),

  neofetch: () => ({
    output: `
       _____
      |  __ \\
      | |__) |__ _ _   _ _   _  __ _ _ __
      |  _  // _\` | | | | | | |/ _\` | '_ \\
      | | \\ \\ (_| | |_| | |_| | (_| | | | |
      |_|  \\_\\__,_|\\__, |\\__, |\\__,_|_| |_|
                    __/ | __/ |
                   |___/ |___/

      OS: Portfolio v1.0.0
      Host: Personal Website
      Shell: Custom Terminal
      Theme: Dark Mode
    `.trim(),
  }),

  flight: () => ({
    output: `
⣿⣿⣿⣿⠿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣸⣿⣿⣿⣿⣾⠿⣿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣺⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⢿⠛⠉⢒⣠⢽⡿⣿⣿⣿⣿⣿⣿⣹⣿
⣿⣿⣿⣿⠀⠀⠀⠀⠀⠰⣖⣦⠟⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡝⣿⣿⣿⣿⣿⣿⣿⣿⠟⣚⠁⠀⠀⠀⠉⠁⠙⣽⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣇⢀⠀⠀⠀⡀⡀⡀⠙⢧⠀⠙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣿⣿⣏⡾⠿⡀⡀⠀⠀⣠⣯⣤⠸⣾⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣦⡇⠀⣸⢦⣷⢶⡀⠈⠀⠀⠈⠟⢛⢙⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢠⣼⣷⣽⡄⠀⣿⣛⠞⠀⣽⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠿⡇⠀⢿⣿⣿⣓⡧⠀⠀⠀⠀⢰⣶⢸⣏⣹⣽⣽⣿⣿⣿⡿⢿⣿⣿⣿⢿⣝⠸⠿⣗⡿⡄⠀⠈⠁⠀⠀⣿⣿⣽⣿⣭⣿⣿
⡯⣿⣿⣿⠈⠀⠀⠀⢳⣽⠎⠀⠀⠀⠀⠀⢠⡜⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⠀⠙⠛⢁⣧⢀⢀⡀⠀⠀⣿⣿⣿⣿⣿⣿⣿
⣯⣿⣿⣿⠀⠀⠀⢀⠀⠉⠁⠀⠀⠀⠀⠀⡠⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⢸⣿⣶⡛⢁⡀⠀⣟⣭⢿⣿⣿⡿⣉
⣿⣿⣿⣿⢠⣠⣀⠈⠆⠀⠀⠀⠀⠀⠀⠀⠰⣾⣿⣿⣿⡟⣉⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢀⢎⡠⣷⢯⣻⠷⠀⣿⣿⣾⣿⣿⣇⡿
⣿⣿⣿⣿⡄⠙⠻⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡅⣿⣷⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⠻⠛⣟⡻⡰⠀⡀⢻⣿⣿⣿⣿⣿⠀
⣿⣿⣿⣿⡏⢒⡲⢤⣲⠀⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣷⡏⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⢘⢛⣋⣥⣾⡁⢞⢿⣿⣿⣿⣿⡇
⣿⣿⣿⣿⡇⠻⠶⠒⠻⣆⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⡇⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠒⡄⢹⣿⣿⡿⠃⡿⢸⠀⠈⠙⠻⣿⣇
⣿⣿⣿⣿⣿⡜⢤⣦⠄⠉⠀⠀⠀⠀⠀⠁⢾⣿⣿⣿⣿⣿⡇⠀⠀⣿⣿⣿⣿⣿⣿⣿⠟⠊⠀⠀⠇⠀⢻⠋⢀⢧⢠⢸⠀⠀⠀⠀⠈⠻
⣿⣿⣿⣿⣿⢳⣶⣤⣤⣤⣀⣀⠄⠁⠈⠸⠈⡎⠉⠻⣽⣿⣧⠀⠀⣿⣿⣿⣆⠖⠋⠁⠀⠀⠀⠀⡇⠀⠨⢃⡘⣆⢹⡟⠀⠀⠀⠀⠀⠀
⣽⣿⣿⡽⠃⠈⠛⢿⠿⠿⣿⠋⠀⠀⠀⠀⠀⠁⠀⠀⠈⢻⣿⠀⠀⣿⡿⣧⠃⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠚⠀⠀⣿⠁⠀⠀⠀⠀⠀⠀

    you can call me ftc
    `.trim(),
  }),
};

export function executeCommand(cmd: string): CommandResult {
  const command = cmd.toLowerCase().trim().split(" ")[0];

  if (command in COMMANDS) {
    return COMMANDS[command]();
  }

  return {
    output: `Command not found: ${cmd}\nType 'help' for available commands.`,
  };
}

export const WELCOME_MESSAGE = `
Welcome to Rayyan's Terminal v1.0.0
Type 'help' for available commands.
──────────────────────────────────────
`.trim();
