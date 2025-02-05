
const registerValues_A = {
    0: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
    },
    1: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
    },
    2: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
    },
    3: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
    },
    4: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "5",
    },
    5: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "10",
        edx: "5",
    },
    6: {
        rax: "15",
        rbp: "0",
        rsp: "0",
        eax: "15",
        edx: "5",
    },
    7: {
        rax: "15",
        rbp: "0",
        rsp: "0",
        eax: "15",
        edx: "5",
    },
    8: {
        rax: "15",
        rbp: "0",
        rsp: "0",
        eax: "15",
        edx: "5",
    },
    9: {
        rax: "15",
        rbp: "0",
        rsp: "0",
        eax: "15",
        edx: "5",
    },
    10: {
        rax: "15",
        rbp: "0",
        rsp: "0",
        eax: "15",
        edx: "5",
    },
};

const Program_A_instructions = [
    { name: "0", value: "pushq %rbp ; Save the current value of the base pointer to the stack" },
    { name: "1", value: "movq %rsp, %rbp ; Set the base pointer to the current value of the stack pointer" },
    { name: "2", value: "movl $5, -12(%rbp) ; Move the value 5 into the memory location at offset -12 from the base pointer" },
    { name: "3", value: "movl $10, -8(%rbp) ; Move the value 10 into the memory location at offset -8 from the base pointer" },
    { name: "4", value: "movl -12(%rbp), %edx ; Move the value from the memory location at offset -12 from the base pointer into the %edx register" },
    { name: "5", value: "movl -8(%rbp), %eax ; Move the value from the memory location at offset -8 from the base pointer into the %eax register" },
    { name: "6", value: "addl %edx, %eax ; Add the values in the %edx and %eax registers and store the result in %eax" },
    { name: "7", value: "movl %eax, -4(%rbp) ; Move the value in the %eax register into the memory location at offset -4 from the base pointer" },
    { name: "8", value: "movl -4(%rbp), %eax ; Move the value from the memory location at offset -4 from the base pointer into the %eax register" },
    { name: "9", value: "popq %rbp ; Restore the base pointer from the stack" },
    { name: "10", value: "ret ; Return from the function" },
]

// Dictionary of registers for process A
const process_A_regSet = [
    { name: "0", value: ["rbp"] },
    { name: "1", value: ["rbp", "rsp"] },
    { name: "2", value: ["rbp", "rsp"] },
    { name: "3", value: ["rbp", "rsp", "edx"] },
    { name: "4", value: ["rbp", "rsp", "edx", "eax"] },
    { name: "5", value: ["rbp", "rsp", "edx", "eax"] },
    { name: "6", value: ["rbp", "rsp", "edx", "eax"] },
    { name: "7", value: ["rbp", "rsp", "edx", "eax"] },
    { name: "8", value: ["rbp", "rsp", "edx", "eax"] },
    { name: "9", value: ["--"] },
    { name: "10", value: ["--"] }
]

const registerValues_B = {
    0: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    1: {
        rax: "0",
        rbp: "0",
        rsp: "0",
        eax: "0",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    2: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    3: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    4: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    5: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "0",
        rsi: "0",
        rcx: "0"
    },
    6: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "0",
        rsi: "-20",
        rcx: "0"
    },
    7: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "0",
        rsi: "-20",
        rcx: "-20"
    },
    8: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "0",
        rsi: "-20",
        rcx: "-20"
    },
    9: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "0",
        rsi: "-20",
        rcx: "-20"
    },
    10: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "0",
        rsi: "-20",
        rcx: "-20"
    },
    11: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "-20",
        rsi: "-20",
        rcx: "-20"
    },
    12: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "-20",
        rsi: "-20",
        rcx: "-20"
    },
    13: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "-20",
        rsi: "-20",
        rcx: "-20"
    },
    14: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "0",
        edx: "-20",
        rsi: "-20",
        rcx: "-20"
    },
    15: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "-20",
        rsi: "-20",
        rcx: "-20"
    },
    16: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "-20",
        rsi: "-20",
        rcx: "-8"
    },
    17: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "-20",
        rsi: "-20",
        rcx: "-8"
    },
    18: {
        rax: "0",
        rbp: "0",
        rsp: "-32",
        eax: "-32",
        edx: "-20",
        rsi: "-20",
        rcx: "-8"
    }
};

const process_B_regSet = [
    { name: "0", value: ["rbp"] },
    { name: "1", value: ["rbp", "rsp"] },
    { name: "2", value: ["rbp", "rsp"] },
    { name: "3", value: ["rbp", "rsp", "rax"] },
    { name: "4", value: ["rbp", "rsp", "rax"] },
    { name: "5", value: ["rbp", "rsp", "rax", "eax"] },
    { name: "6", value: ["rbp", "rsp", "rax", "eax"] },
    { name: "7", value: ["rbp", "rsp", "rax", "eax"] },
    { name: "8", value: ["rbp", "rsp", "rax", "eax", "rsi"] },
    { name: "9", value: ["rbp", "rsp", "rax", "eax", "rsi"] },
    { name: "10", value: ["rbp", "rsp", "rax", "eax", "rsi"] },
    { name: "11", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx"] },
    { name: "12", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx"] },
    { name: "13", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx"] },
    { name: "14", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx"] },
    { name: "15", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx"] },
    { name: "16", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx", "rcx"] },
    { name: "17", value: ["rbp", "rsp", "rax", "eax", "rsi", "edx", "rcx"] },
    { name: "18", value: ["--"] }
]
const Program_B_instructions = [
    { name: "0", value: "pushq %rbp ; Save the current value of the base pointer to the stack" },
    { name: "1", value: "movq %rsp, %rbp ; Set the base pointer to the current value of the stack pointer" },
    { name: "2", value: "subq $32, %rsp ; Allocate 32 bytes of space on the stack" },
    { name: "3", value: "movq %fs:40, %rax ; Move the value at address fs:40 into the %rax register" },
    { name: "4", value: "movq %rax, -8(%rbp) ; Move the value in %rax into the memory location at offset -8 from the base pointer" },
    { name: "5", value: "xorl %eax, %eax ; Set the %eax register to 0 using XOR operation" },
    { name: "6", value: "movl $15, -16(%rbp) ; Move the value 15 into the memory location at offset -16 from the base pointer" },
    { name: "7", value: "leaq -20(%rbp), %rax ; Load the effective address of the memory location at offset -20 from the base pointer into the %rax register" },
    { name: "8", value: "movq %rax, %rsi ; Move the value in %rax into the %rsi register" },
    { name: "9", value: "movl $0, %eax ; Move the value 0 into the %eax register" },
    { name: "10", value: "call __isoc99_scanf@PLT ; Call the function __isoc99_scanf from the PLT (Procedure Linkage Table)" },
    { name: "11", value: "movl -20(%rbp), %edx ; Move the value in the memory location at offset -20 from the base pointer into the %edx register" },
    { name: "12", value: "movl -16(%rbp), %eax ; Move the value in the memory location at offset -16 from the base pointer into the %eax register" },
    { name: "13", value: "addl %edx, %eax ; Add the values in the %edx and %eax registers and store the result in %eax" },
    { name: "14", value: "movl %eax, -12(%rbp) ; Move the value in the %eax register into the memory location at offset -12 from the base pointer" },
    { name: "15", value: "movl 12(%rbp), %eax ; Move the value in the memory location at offset 12 from the base pointer into the %eax register" },
    { name: "16", value: "movq -8(%rbp), %rcx ; Move the value in the memory location at offset -8 from the base pointer into the %rcx register" },
    { name: "17", value: "xorq %fs:40, %rcx ; XOR the value at address fs:40 with the %rcx register" },
    { name: "18", value: "ret ; Return from the function" },
]
interrupt = "";
current_process = "A";
next_process = "B";

no_of_interrupts = 0;
no_of_context_switches = 0;
no_of_wrong_ints_selections = 0;

hardwarePointer = 0;
kPointer = 0;

k_trap_execute = 0;

class PCB {
    constructor(pid, state, instructionPointer, programCounter, registers) {
        this.pid = pid;
        this.state = state;
        this.instructionPointer = instructionPointer;
        this.programCounter = programCounter;
        this.registers = registers;
    }

    // getters and setters
    getPid() {
        return this.pid;
    }

    getState() {
        return this.state;
    }

    getInstructionPointer() {
        return this.instructionPointer;
    }

    getProgramCounter() {
        return this.programCounter;
    }

    getRegisters() {
        return this.registers;
    }

    setPid(pid) {
        this.pid = pid;
    }

    setState(state) {
        this.state = state;
    }

    setInstructionPointer(instructionPointer) {
        this.instructionPointer = instructionPointer;
    }

    setProgramCounter(programCounter) {
        this.programCounter = programCounter;
    }

    setRegisters(registers) {
        this.registers = registers;
    }

    // toString method
    toString() {
        return "PID: " + this.pid + " State: " + this.state + " Program Counter: " + this.programCounter + " Registers: " + this.registers;
    }
}

const processB = {
    name: 'Process B',
    pid: 1,
    state: 'Ready',
    mode: '1 (User mode)',
    instructionPointer: 0,
    programCounter: 0,
    registers: [],
    readInterrupt: 0,
    exitInterrupt: 0,
    pcb: new PCB(0, 'New', 0, 0, []),

    process: function () {
        console.log('Process B');
    }
    ,
    init: function () {
        console.log('Init Process B');
    }
    ,
    destroy: function () {
        console.log('Destroy Process B');
    }
    ,
    setPCB: function (pcb) {
        this.pcb = pcb;
    }
    ,
    setState: function (state) {
        this.state = state;
    }
    ,
    setMode: function (mode) {
        this.mode = mode;
    }
    ,
    setIP: function (ip) {
        this.instructionPointer = ip;
    }
    ,
    setPC: function (pc) {
        this.programCounter = pc;
    }
    ,
    setRegisters: function (registers) {
        this.registers = registers;
    },
    getPCB: function () {
        return this.pcb;
    },
    getState: function () {
        return this.state;
    },
    getMode: function () {
        return this.mode;
    },
    getIP: function () {
        return this.instructionPointer;
    },
    getPC: function () {
        return this.programCounter;
    }
    ,
    getRegisters: function () {
        let regs = "";
        // Print registers along with the register values
        const values = registerValues_B[processB.instructionPointer];
        for (let j = 0; j < process_B_regSet[processB.instructionPointer].value.length; j++) {
            
            register = process_B_regSet[processB.instructionPointer].value[j];
            regs += register + "-" + values[register] + " ";
        }

        return regs;
    },
    load: function () {
        const process = document.getElementById("process");
        process.innerHTML = "";
        const tbody = document.createElement("tbody");

        for (let i = 0; i < Program_B_instructions.length; i++) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");

            td.appendChild(document.createTextNode(Program_B_instructions[i].name));
            text = Program_B_instructions[i].value;

            const startIndex = 0; // Index where you want to start extracting (inclusive)
            const endingCharacter = ';'; // Character where you want to stop extracting (exclusive)
            const endIndex = text.indexOf(endingCharacter);
            const asmCommand = text.substring(startIndex, endIndex);
            const comment = text.substring(endIndex);

            const asm_cmd = `<span style="color: red">${asmCommand}</span>`;
            const comment_cmd = `<span style="color: green">${comment}</span>`;

            td2.innerHTML = asm_cmd + comment_cmd;
            tr.appendChild(td);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }

        process.appendChild(tbody);
    },
    begin: function () {
        const stBox = document.getElementById("st-box");
        stBox.style.borderColor = "dodgerBlue";
        document.getElementById("umode").style.backgroundColor = "dodgerBlue";
        document.getElementById("umode").style.color = "white";
        document.getElementById("process_buttons").style.backgroundColor = "dodgerBlue";
        this.setPC(this.getPC() + 1);
        this.setState("Running");
        this.setRegisters(process_A_regSet[this.getIP()].value);
        console.log(this.getPC() + " " + this.getIP());
    },

    setCPU: function () {
        document.getElementById("cpu").style.borderColor = "red";
        document.getElementById("mycpu").style.backgroundColor = "red";
        document.getElementById("mycpu").style.color = "white";

        const cpu_section = document.getElementById("cpu_section");
        cpu_section.innerHTML = "";

        tbody = document.createElement("tbody");

        const createRow = (label, value, tooltip) => {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            td2.innerHTML = value;

            const tooltipContainer = document.createElement("span");
            tooltipContainer.classList.add("note");
            // set attribute
            tooltipContainer.setAttribute("data-tooltip", tooltip);
            // tooltipContainer.setAttribute("data-tooltip", tooltip);
            tooltipContainer.innerHTML = label + ": ";
            td.appendChild(tooltipContainer);

            tr.appendChild(td);
            tr.appendChild(td2);
            return tr;
        };

        const tr = createRow("pc", this.getPC(), "Program Counter");
        const tr1 = createRow("psw", this.getMode(), "Program Status Word - Stores the current mode of the processor");
        const tr2 = createRow("Registers", this.getRegisters(), "CPU Registers");

        tbody.appendChild(tr);
        tbody.appendChild(tr1);
        tbody.appendChild(tr2);

        cpu_section.appendChild(tbody);
    },

    remove: function () {
        const process = document.getElementById("process");
        const tbody = document.getElementsByTagName("tbody")[0];

        process.removeChild(tbody);
    },

    highlight: function () {
        const process = document.getElementById("process");
        process.rows[this.instructionPointer].style.backgroundColor = "yellow";
        process.rows[this.instructionPointer].style.fontWeight = "bold";
    },
    next: function () {
        const process = document.getElementById("process");
        // Handle corner cases
        if (this.instructionPointer == Program_B_instructions.length - 1) {
            this.exitInterrupt = 1;
            this.setState("Terminated");
            interrupt = "Exit";
            no_of_interrupts++;
            document.getElementById("interrupts").innerHTML = "";
            document.getElementById("interrupts").innerHTML = no_of_interrupts;

            const stBox = document.getElementById("st-box");
            stBox.style.borderColor = "darkgrey";
            document.getElementById("umode").style.backgroundColor = "darkgrey";
            document.getElementById("umode").style.color = "black";
            document.getElementById("process_buttons").style.backgroundColor = "darkgrey";
            process.rows[this.instructionPointer].style.backgroundColor = "white";
            process.rows[this.instructionPointer].style.fontWeight = "normal";

            // disable the process buttons
            document.getElementById("next_process").disabled = true;
            document.getElementById("prev_process").disabled = true;

            var modal = document.getElementById("myModal_exit2");
            modal.style.display = "block";
            var span = document.getElementsByClassName("boot-ex2")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            document.getElementById("cpu_section").innerHTML = "";
            const overlay = document.querySelector('.overlay');
            overlay.style.display = 'block';

            document.getElementById("remark").innerHTML += "<br> > <br> a) You have entered the hardware to deal with the exit interrupt. <br> b) Select the correct instruction which will enable you to load the registers of process B to it's k-stack so that it can be later used by the kernel during it's execution.</br>";
            document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
            setUp_hardware();

            return;
        }

        if (this.instructionPointer == 10 && this.readInterrupt == 0) {
            this.readInterrupt = 1;
            this.setState("Waiting");
            interrupt = "Read";
            no_of_interrupts++;
            document.getElementById("interrupts").innerHTML = "";
            document.getElementById("interrupts").innerHTML = no_of_interrupts;

            const stBox = document.getElementById("st-box");
            stBox.style.borderColor = "darkgrey";
            document.getElementById("umode").style.backgroundColor = "darkgrey";
            document.getElementById("umode").style.color = "black";
            document.getElementById("process_buttons").style.backgroundColor = "darkgrey";
            process.rows[this.instructionPointer].style.backgroundColor = "white";
            process.rows[this.instructionPointer].style.fontWeight = "normal";

            // disable the process buttons
            document.getElementById("next_process").disabled = true;
            document.getElementById("prev_process").disabled = true;

            var modal = document.getElementById("myModal_read");
            modal.style.display = "block";
            var span = document.getElementsByClassName("boot-r")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            document.getElementById("cpu_section").innerHTML = "";
            const overlay = document.querySelector('.overlay');
            overlay.style.display = 'block';

            document.getElementById("remark").innerHTML += "<br> > <br> a) You have entered the hardware to deal with the read interrupt. <br> b) Select the correct instruction which will enable you to load the registers of process B to it's k-stack so that it can be later used by the kernel during it's execution.<br>";
            document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
            setUp_hardware();
            // hardware_u_to_k(current_process);

            return;
        }

        process.rows[this.instructionPointer].style.backgroundColor = "white";
        process.rows[this.instructionPointer].style.fontWeight = "normal";
        this.setIP(this.getIP() + 1);
        // console.log(this.getPC());
        if (this.getIP() == Program_B_instructions.length - 1) {
            this.setPC(this.getIP());
        }
        else {
            this.setPC(this.getIP() + 1);
        }

        console.log(this.getPC() + " " + this.getIP());
        this.highlight();

        // set registers
        this.setRegisters(process_B_regSet[this.instructionPointer].value);
        this.setCPU();

    },
    previous: function () {
        const process = document.getElementById("process");
        // Handle corner cases
        if (this.instructionPointer == 0) {
            return;
        }

        process.rows[this.instructionPointer].style.backgroundColor = "white";
        process.rows[this.instructionPointer].style.fontWeight = "normal";
        this.setIP(this.getIP() - 1);
        this.setPC(this.getIP() + 1);
        this.highlight();

        // set registers
        this.setRegisters(process_B_regSet[this.instructionPointer].value);
        this.setCPU();
    }
}

const processA = {
    name: 'Process A',
    pid: 0,
    state: 'ready',
    mode: '1 (User mode)',
    instructionPointer: 0,
    programCounter: 0,
    registers: [],
    timerInterrupt: 0,
    exitInterrupt: 0,
    pcb: new PCB(0, 'New', 0, 0, []),

    process: function () {
        console.log('Process A');
    },
    init: function () {
        console.log('Init Process A');
    },
    destroy: function () {
        console.log('Destroy Process A');
    },
    setPCB: function (pcb) {
        this.pcb = pcb;
    },
    setState: function (state) {
        this.state = state;
    },
    setMode: function (mode) {
        this.mode = mode;
    },
    setIP: function (ip) {
        this.instructionPointer = ip;
    },
    setPC: function (pc) {
        this.programCounter = pc;
    },
    setRegisters: function (registers) {
        this.registers = registers;
    },
    getPCB: function () {
        return this.pcb;
    },
    getState: function () {
        return this.state;
    },
    getMode: function () {
        return this.mode;
    },
    getIP: function () {
        return this.instructionPointer;
    },
    getPC: function () {
        return this.programCounter;
    },
    getRegisters: function () {
        let regs = "";
        // Print registers along with the register values
        const values = registerValues_A[processA.instructionPointer];
        for (let j = 0; j < process_A_regSet[processA.instructionPointer].value.length; j++) {
            
            register = process_A_regSet[processA.instructionPointer].value[j];
            regs += register + "-" + values[register] + " ";
        }

        return regs;
    },

    load: function () {
        const process = document.getElementById("process");
        process.innerHTML = "";
        const tbody = document.createElement("tbody");

        for (let i = 0; i < Program_A_instructions.length; i++) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");

            td.appendChild(document.createTextNode(Program_A_instructions[i].name));
            text = Program_A_instructions[i].value;

            const startIndex = 0; // Index where you want to start extracting (inclusive)
            const endingCharacter = ';'; // Character where you want to stop extracting (exclusive)
            const endIndex = text.indexOf(endingCharacter);
            const asmCommand = text.substring(startIndex, endIndex);
            const comment = text.substring(endIndex);

            const asm_cmd = `<span style="color: red">${asmCommand}</span>`;
            const comment_cmd = `<span style="color: green">${comment}</span>`;

            td2.innerHTML = asm_cmd + comment_cmd;

            tr.appendChild(td);
            tr.appendChild(td2);
            tbody.appendChild(tr);
        }

        process.appendChild(tbody);
    },

    begin: function () {
        const stBox = document.getElementById("st-box");
        stBox.style.borderColor = "dodgerBlue";
        document.getElementById("umode").style.backgroundColor = "dodgerBlue";
        document.getElementById("umode").style.color = "white";
        document.getElementById("process_buttons").style.backgroundColor = "dodgerBlue";
        this.setPC(this.getPC() + 1);
        this.setState("Running");
        this.setRegisters(process_A_regSet[this.getIP()].value);
        console.log(this.getPC() + " " + this.getIP());
    },

    setCPU: function () {
        document.getElementById("cpu").style.borderColor = "red";
        document.getElementById("mycpu").style.backgroundColor = "red";
        document.getElementById("mycpu").style.color = "white";

        const cpu_section = document.getElementById("cpu_section");
        cpu_section.innerHTML = "";

        tbody = document.createElement("tbody");

        const createRow = (label, value, tooltip) => {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td2 = document.createElement("td");
            td2.innerHTML = value;

            const tooltipContainer = document.createElement("span");
            tooltipContainer.classList.add("note");
            // set attribute
            tooltipContainer.setAttribute("data-tooltip", tooltip);
            // tooltipContainer.setAttribute("data-tooltip", tooltip);
            tooltipContainer.innerHTML = label + ": ";
            td.appendChild(tooltipContainer);

            tr.appendChild(td);
            tr.appendChild(td2);
            return tr;
        };

        const tr = createRow("pc", this.getPC(), "Program Counter");
        const tr1 = createRow("psw", this.getMode(), "Program Status Word - Stores the current mode of the processor");
        const tr2 = createRow("Registers", this.getRegisters(), "CPU Registers");

        tbody.appendChild(tr);
        tbody.appendChild(tr1);
        tbody.appendChild(tr2);

        cpu_section.appendChild(tbody);
    },

    remove: function () {
        const process = document.getElementById("process");
        const tbody = document.getElementsByTagName("tbody")[0];

        process.removeChild(tbody);
    },

    highlight: function () {
        const process = document.getElementById("process");
        process.rows[this.instructionPointer].style.backgroundColor = "yellow";
        process.rows[this.instructionPointer].style.fontWeight = "bold";
    },
    next: function () {
        const process = document.getElementById("process");
        // Handle corner cases
        if (this.instructionPointer == Program_A_instructions.length - 1) {
            this.exitInterrupt = 1;
            this.setState("Terminated");
            interrupt = "Exit";
            no_of_interrupts++;
            document.getElementById("interrupts").innerHTML = "";
            document.getElementById("interrupts").innerHTML = no_of_interrupts;

            const stBox = document.getElementById("st-box");
            stBox.style.borderColor = "darkgrey";
            document.getElementById("umode").style.backgroundColor = "darkgrey";
            document.getElementById("umode").style.color = "black";
            document.getElementById("process_buttons").style.backgroundColor = "darkgrey";
            process.rows[this.instructionPointer].style.backgroundColor = "white";
            process.rows[this.instructionPointer].style.fontWeight = "normal";

            // disable the process buttons
            document.getElementById("next_process").disabled = true;
            document.getElementById("prev_process").disabled = true;

            var modal = document.getElementById("myModal_exit1");
            modal.style.display = "block";
            var span = document.getElementsByClassName("boot-ex1")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            document.getElementById("remark").innerHTML = "";
            const overlay = document.querySelector('.overlay');
            overlay.style.display = 'block';


            // document.getElementById("remark").innerHTML = "";
            document.getElementById("remark").innerHTML += "<br> > <br> a) You have entered the hardware to deal with the exit interrupt. <br> b) Select the correct instruction which will enable you to load the registers of process A to it's k-stack so that it can be later used by the kernel during it's execution in kernel mode.";
            document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
            setUp_hardware();

            return;
        }

        if (this.instructionPointer == 6 && this.timerInterrupt == 0) {
            this.timerInterrupt = 1;
            interrupt = "Timer";
            no_of_interrupts++;
            document.getElementById("interrupts").innerHTML = "";
            document.getElementById("interrupts").innerHTML = no_of_interrupts;

            const stBox = document.getElementById("st-box");
            stBox.style.borderColor = "darkgrey";
            document.getElementById("umode").style.backgroundColor = "darkgrey";
            document.getElementById("umode").style.color = "black";
            document.getElementById("process_buttons").style.backgroundColor = "darkgrey";
            process.rows[this.instructionPointer].style.backgroundColor = "white";
            process.rows[this.instructionPointer].style.fontWeight = "normal";

            // disable the process buttons
            document.getElementById("next_process").disabled = true;
            document.getElementById("prev_process").disabled = true;

            var modal = document.getElementById("myModal_timer");
            modal.style.display = "block";
            var span = document.getElementsByClassName("boot-t")[0];
            span.onclick = function () {
                modal.style.display = "none";
            }

            document.getElementById("remark").innerHTML = "";
            const overlay = document.querySelector('.overlay');
            overlay.style.display = 'block';


            // document.getElementById("remark").innerHTML = "";
            document.getElementById("remark").innerHTML += "<br> > <br> a) You have entered the hardware to deal with the timer interrupt. <br> b) Select the correct instruction which will enable you to load the registers of process A to it's k-stack so that it can be later used by the kernel during it's execution in kernel mode.";
            document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
            setUp_hardware();
            // hardware_u_to_k(current_process);

            return;
        }

        process.rows[this.instructionPointer].style.backgroundColor = "white";
        process.rows[this.instructionPointer].style.fontWeight = "normal";
        this.setIP(this.getIP() + 1);
        // console.log(this.getPC());
        if (this.getIP() == Program_A_instructions.length - 1) {
            this.setPC(this.getIP());
        }
        else {
            this.setPC(this.getIP() + 1);
        }

        console.log(this.getPC() + " " + this.getIP());
        this.highlight();

        // set registers
        this.setRegisters(process_A_regSet[this.instructionPointer].value);
        this.setCPU();

    },
    previous: function () {
        const process = document.getElementById("process");
        // Handle corner cases
        if (this.instructionPointer == 0) {
            return;
        }

        process.rows[this.instructionPointer].style.backgroundColor = "white";
        process.rows[this.instructionPointer].style.fontWeight = "normal";
        this.setIP(this.getIP() - 1);
        this.setPC(this.getIP() + 1);
        this.highlight();

        // set registers
        this.setRegisters(process_A_regSet[this.instructionPointer].value);
        this.setCPU();
    }
}


let start_simulation = 0;

function start() {
    if (start_simulation == 0) {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
        var span = document.getElementsByClassName("boot")[0];
        span.onclick = function () {
            modal.style.display = "none";
        }

        start_simulation = 1;
        document.getElementById("start_simulation").innerHTML = "Restart";
        document.getElementById("start_simulation").style.backgroundColor = "red";
        document.getElementById("start_simulation").style.color = "white";

        // Start the simulation
        document.getElementById("remark").innerHTML += "<br> > <br> a) 'User' is running Process A. <br> b) Traverse the process using 'previous' and 'next' buttons. <br> c) Observe the changes in CPU."
        document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
        document.getElementById("current_running_process").innerHTML = "Current Running Process: " + current_process;
        simulation();
    }
    else {
        // Restart the simulation
        location.reload();
    }
}
function back_to_user_mode() {
    window.alert(hardwarePointer);
    if (hardwarePointer == 0) {
        const h_box = document.getElementById("nd-box");
        h_box.style.borderColor = "darkgrey";
        document.getElementById("hardware").style.backgroundColor = "darkgrey";
        document.getElementById("hardware").style.color = "black";

        document.getElementById("k-stack_A").style.borderColor = "darkgrey";
        document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
        document.getElementById("k-stack-A").style.color = "black";

        document.getElementById("interrupt").innerHTML = "";

        if(current_process=="A")
        {
            document.getElementById("kernel_stack").style.backgroundColor = "white";
            document.getElementById("kernel_stack").style.color = "black";
        }
    }
    else{
        var select = document.getElementById("interrupt");
        select.removeChild(select.lastChild); 
        if(current_process=="A"){

            if(hardwarePointer == 2){
            document.getElementById("int_handlers").style.backgroundColor = "white";
            document.getElementById("int_handlers").style.color = "black";
            }
            else {
                document.getElementById("changemode").style.backgroundColor = "white";
                document.getElementById("changemode").style.color = "black";
            }
        }
        else{
            if(hardwarePointer == 2){
                document.getElementById("move_to_user_mode").style.backgroundColor = "white";
                document.getElementById("move_to_user_mode").style.color = "black";
                }
                else {
                    document.getElementById("restore_registers").style.backgroundColor = "white";
                    document.getElementById("restore_registers").style.color = "black";
                }
        }
    }
    hardwarePointer--;

}

function simulation() {
    // Load the process
    processA.load();
    processA.begin();
    processA.highlight();
    processA.setCPU();

    // Set the PCB
    processA.setPCB(0);
    processA.setPC(0);
    processA.setRegisters(process_A_regSet[processA.getPC()].value);

    // Run the process
    processA.init();
    processA.process();
    processA.destroy();
}

function process_previous() {
    if (current_process == 'A') {
        processA.previous();
    }
    else {
        processB.previous();
    }
}

function process_next() {
    if (current_process == 'A') {
        processA.next();
    }
    else {
        processB.next();
    }
}

function setUp_hardware() {
    const h_box = document.getElementById("nd-box");
    h_box.style.borderColor = "dodgerblue";
    document.getElementById("hardware").style.backgroundColor = "dodgerblue";
    document.getElementById("hardware").style.color = "white";
    document.getElementById("interrupt_type").innerHTML = "Interrupt type: " + interrupt;

    const instructionBox = document.getElementById("i");
    const tbody = document.createElement("tbody");

    const hardwareInstructions_u_to_k = hardware_u_to_k(current_process);

    const tr1 = document.createElement("tr");
    const i1 = document.createElement("button");
    i1.setAttribute("onclick", "load_trap_handlers()");
    i1.setAttribute("id", "int_handlers");
    i1.innerHTML = hardwareInstructions_u_to_k[2]();
    tr1.appendChild(i1);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const i2 = document.createElement("button");
    i2.setAttribute("onclick", "load_k_stack()");
    i2.setAttribute("id", "kernel_stack");
    i2.innerHTML = hardwareInstructions_u_to_k[0]();
    tr2.appendChild(i2);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const i3 = document.createElement("button");
    i3.setAttribute("onclick", "change_mode()");
    i3.setAttribute("id", "changemode");
    i3.innerHTML = hardwareInstructions_u_to_k[1]();
    tr3.appendChild(i3);
    tbody.appendChild(tr3);

    instructionBox.appendChild(tbody);

    // document.getElementById("start_hardware_button").disabled = false;
}

function change_mode() {
    if (hardwarePointer != 1) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    // document.getElementById("remark").innerHTML = "";
    document.getElementById("remark").innerHTML += "<br> > <br> a) Observe the mode into which CPU had shifted. <br> b) Now select the correct instruction to get the correct interrupt handler."
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    const hardware = document.getElementById("interrupt");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = hardware_u_to_k(current_process)[1]();
    tr.appendChild(td);
    hardware.appendChild(tr);

    document.getElementById("changemode").style.backgroundColor = "green";
    document.getElementById("changemode").style.color = "white";

    const cpu = document.getElementById("cpu_section");
    let mode = cpu.rows[1].cells[1].innerHTML;

    if (mode == "1 (User mode)") {
        mode = "0 (Kernel mode)";
    }
    else {
        mode = "1 (User mode)";
    }

    cpu.rows[1].cells[1].innerHTML = mode;
    cpu.rows[1].style.backgroundColor = "yellow";
    hardwarePointer++;
}

function load_trap_handlers() {
    if (hardwarePointer != 2) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    const cpu = document.getElementById("cpu_section");
    cpu.rows[1].style.backgroundColor = "white";

    // window.alert("Select the appropriate trap handler for the " + interrupt + " interrupt from the interrupt handler box.");
    // document.getElementById("remark").innerHTML = "";
    document.getElementById("remark").innerHTML += "<br> > Select the correct handler from the interrupt handler box in the student control panel.";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    const hardware = document.getElementById("interrupt");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = hardware_u_to_k(current_process)[2]();
    tr.appendChild(td);
    hardware.appendChild(tr);

    const handlers = document.getElementById("handlers");
    const tbody = document.createElement("tbody");

    document.getElementById("int_handlers").style.backgroundColor = "green";
    document.getElementById("int_handlers").style.color = "white";

    const tr1 = document.createElement("tr");
    const b1 = document.createElement("button");
    b1.setAttribute("id", "timer");
    b1.setAttribute("onclick", "timerHandler()");
    b1.innerHTML = "Timer Handler";
    tr1.appendChild(b1);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const b2 = document.createElement("button");
    b2.setAttribute("id", "read");
    b2.setAttribute("onclick", "readHandler()");
    b2.innerHTML = "Read Handler";
    tr2.appendChild(b2);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const b3 = document.createElement("button");
    b3.setAttribute("id", "io_complete");
    b3.setAttribute("onclick", "ioCompleteHandler()");
    b3.innerHTML = "IO complete handler";
    tr3.appendChild(b3);
    tbody.appendChild(tr3);

    const tr4 = document.createElement("tr");
    const b4 = document.createElement("button");
    b4.setAttribute("id", "exit");
    b4.setAttribute("onclick", "exitHandler()");
    b4.innerHTML = "Exit handler";
    tr4.appendChild(b4);
    tbody.appendChild(tr4);

    handlers.appendChild(tbody);
}

function timerHandler() {
    hardwarePointer = 0;

    if (interrupt == "Timer") {
        document.getElementById("timer").style.backgroundColor = "green";
        document.getElementById("timer").style.color = "white";

        // window.alert("You have selected the correct trap handler to resolve timer interrupt. The kernel will take over the control now.");
        // document.getElementById("remark").innerHTML = "";
        document.getElementById("remark").innerHTML += "<br> > You have selected the correct trap handler to resolve timer interrupt. The kernel now has the control to execute the interrupt handler.";
        document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
        runTimerHandler();
    }
}

function runTimerHandler() {
    const h_box = document.getElementById("nd-box");
    h_box.style.borderColor = "darkgrey";
    document.getElementById("hardware").style.backgroundColor = "darkgrey";
    document.getElementById("hardware").style.color = "black";

    document.getElementById("k-stack_A").style.borderColor = "darkgrey";
    document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
    document.getElementById("k-stack-A").style.color = "black";

    document.getElementById("interrupt").innerHTML = "";

    const kernelSection = document.getElementById("kernel");

    const k_box = document.getElementById("rd-box");
    k_box.style.borderColor = "dodgerblue";
    document.getElementById("kmode").style.backgroundColor = "dodgerblue";
    document.getElementById("kmode").style.color = "white";
    document.getElementById("kernel_buttons").backgroundColor = "dodgerblue";

    // Remove existing content from the kernel section
    kernelSection.innerHTML = "";


    // Create a tbody element
    const tbody = document.createElement("tbody");
    tbody.insertRow(0).insertCell(0).innerHTML = "This code represents the handling of timer interrupts generated by the local APIC timer. It checks if there's a valid event handler registered for the timer event and takes appropriate actions in case of a spurious interrupt. If a valid handler is present, it increments IRQ statistics and invokes the event handler for further processing. This code is a crucial part of managing timer interrupts in the kernel.";
    tbody.rows[0].cells[0].style.backgroundColor = "yellow";
    // Add rows to the tbody
    tbody.insertRow(-1).insertCell(0).innerHTML = "static void local_apic_timer_interrupt(void)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "{";
    tbody.insertRow(-1).insertCell(0).innerHTML = "   struct clock_event_device *evt = this_cpu_ptr(&lapic_events);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "   if (!evt->event_handler) {";
    tbody.insertRow(-1).insertCell(0).innerHTML = "       pr_warn(\"Spurious LAPIC timer interrupt on cpu %d\\n\", smp_processor_id());";
    tbody.insertRow(-1).insertCell(0).innerHTML = "       lapic_timer_shutdown(evt);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "       return;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "   }";
    tbody.insertRow(-1).insertCell(0).innerHTML = "   inc_irq_stat(apic_timer_irqs);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "   evt->event_handler(evt);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "}";

    // Append the tbody to the kernelTable
    kernelSection.appendChild(tbody);

    document.getElementById("kernelCode_execute").disabled = false;
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})

function endEx() {
    window.alert("Hurray!. You have finished the context switching between program A and program B.");
    // reload
    window.location.reload();
}

function execute() {
    k_trap_execute = 1;

    const kernelSection = document.getElementById("kernel");
    // Remove existing content from the kernel section
    kernelSection.innerHTML = "";

    // Create the spinner container element
    const spinnerContainer = document.createElement("div");
    spinnerContainer.classList.add("spinner-container");

    // Create and append the spinner element
    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinnerContainer.appendChild(spinner);

    // Append the spinner container to the kernel section
    kernelSection.appendChild(spinnerContainer);

    // Simulate an asynchronous operation
    setTimeout(function () {
        // Remove the spinner container and add the executed code
        if (processB.exitInterrupt == 1) {
            kernelSection.innerHTML = "<tr><td>Executed the trap Handler</td></tr><tr><td>Both Process A and Process B are terminated.</td></tr>";
            const pcbTable = document.getElementById("pcb_B_table");
            pcbTable.innerHTML = "";
            const tbody = document.createElement("tbody");

            const tr1 = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.innerHTML = "PC: ";
            td2.innerHTML = processB.getPC();
            tr1.appendChild(td1);
            tr1.appendChild(td2);
            tbody.appendChild(tr1);

            const tr2 = document.createElement("tr");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            td3.innerHTML = "State: ";
            td4.innerHTML = processB.getState();
            tr2.appendChild(td3);
            tr2.appendChild(td4);
            tbody.appendChild(tr2);

            const tr3 = document.createElement("tr");
            const td5 = document.createElement("td");
            const td6 = document.createElement("td");
            td5.innerHTML = "Registers: ";
            td6.innerHTML = processB.getRegisters();
            tr3.appendChild(td5);
            tr3.appendChild(td6);
            tbody.appendChild(tr3);

            pcbTable.appendChild(tbody);

            document.getElementById("handlers").innerHTML = "";

            const instructionBox = document.getElementById("i");
            instructionBox.innerHTML = "";

            const kernel_button = document.getElementById("kernel_buttons");
            kernel_button.innerHTML = "";
            kernel_button.style.backgroundColor = "dodgerblue";

            const end = document.createElement("button");
            end.setAttribute("id", "end");
            k_trap_execute = 1;
            end.innerHTML = "End";
            end.setAttribute("onclick", "endEx()");

            kernel_button.appendChild(end);
            return;
        }
        kernelSection.innerHTML =
            "<tr><td>Executed the trap Handler</td></tr><tr><td>Please do the context switch ... </td></tr>";
        // document.getElementById("remark").innerHTML = "";
        document.getElementById("remark").innerHTML += "<br> > The trap handler is executed. Now proceed to do the context switch."
        document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
        const kernel_button = document.getElementById("kernel_buttons");
        kernel_button.innerHTML = "";
        kernel_button.style.backgroundColor = "dodgerblue";

        const contextSwitchButton = document.createElement("button");
        contextSwitchButton.setAttribute("id", "contxtSwitch");
        k_trap_execute = 1;
        contextSwitchButton.innerHTML = "Context Switch";
        contextSwitchButton.setAttribute("onclick", "contextSwitch()");

        kernel_button.appendChild(contextSwitchButton);
    }, 2000); // Change the delay time to suit your needs

}


// Dictionary of instructions for context Switch 
function context_switch_instructions(process, next_process) {
    return [
        () => `save registers of process ${process} from K-Stack of process ${process} to PCB of process ${process}`,
        () => `load registers of process ${next_process} to K-Stack of process ${next_process} from PCB of process ${next_process}`,
        () => `switch to k-stack of process ${next_process}`,
        () => `return from trap into process ${next_process}`,
    ]
}

function contextSwitch() {
    if (k_trap_execute == 1) {
        document.getElementById("handlers").innerHTML = "";
        document.getElementById("kernel").innerHTML = "";
        document.getElementById("kernel_buttons").innerHTML = "";
        document.getElementById("kernel_buttons").style.backgroundColor = "white";

        const instructionBox = document.getElementById("i");
        instructionBox.innerHTML = "";
        const tbody = document.createElement("tbody");

        // document.getElementById("remark").innerHTML = "";
        document.getElementById("remark").innerHTML += "<br> > Select the instruction that will save the context of the current process to it's PCB from the instruction box in student control panel."
        document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
        const context_switch_instruction = context_switch_instructions(current_process, next_process);

        const tr1 = document.createElement("tr");
        const i1 = document.createElement("button");
        i1.setAttribute("onclick", "load_k_stack_kernel()");
        i1.setAttribute("id", "kernel_stack_k");
        // i1.innerHTML = context_switch_instruction[2]();
        // create a tooltip
        const tooltipContainer = document.createElement("span");
        tooltipContainer.classList.add("note");
        // set attribute
        const code2 = document.createElement("code");
        code2.innerHTML = `movl 4(%eax), %esp # stack is switched here`;
        tooltipContainer.setAttribute("data-tooltip", code2.textContent);
        // tooltipContainer.setAttribute("data-tooltip", tooltip);
        tooltipContainer.innerHTML = context_switch_instruction[2]();
        // tooltip.innerHTML = "This instruction will load the kernel stack of the next process from it's PCB.";
        i1.appendChild(tooltipContainer);
        tr1.appendChild(i1);
        tbody.appendChild(tr1);

        const tr2 = document.createElement("tr");
        const i2 = document.createElement("button");
        i2.setAttribute("onclick", "updatePCB()");
        i2.setAttribute("id", "update_pcb");
        // i2.innerHTML = context_switch_instruction[0]();
        const tooltipContainer1 = document.createElement("span");
        tooltipContainer1.classList.add("note");
        // set attribute
        const code0 = document.createElement("code");
        code0.innerHTML = `# Save old registers
        movl 4(%esp), %eax # put old ptr into eax
        popl 0(%eax) # save the old IP
        movl %esp, 4(%eax) # and stack
        movl %ebx, 8(%eax) # and other registers`;
        tooltipContainer1.setAttribute("data-tooltip", code0.textContent);
        // tooltipContainer.setAttribute("data-tooltip", tooltip);
        tooltipContainer1.innerHTML = context_switch_instruction[0]();
        // tooltip.innerHTML = "This instruction will load the kernel stack of the next process from it's PCB.";
        i2.appendChild(tooltipContainer1);
        tr2.appendChild(i2);
        tbody.appendChild(tr2);

        const tr3 = document.createElement("tr");
        const i3 = document.createElement("button");
        i3.setAttribute("onclick", "hardware_k_to_u()");
        i3.setAttribute("id", "hardware_kTOu");
        // i3.innerHTML = context_switch_instruction[3]();
        const tooltipContainer2 = document.createElement("span");
        tooltipContainer2.classList.add("note");
        // set attribute
        const code3 = document.createElement("code");
        code3.innerHTML = `pushl 0(%eax) # return addr put in place
        ret # finally return into new ctxt`;
        tooltipContainer2.setAttribute("data-tooltip", code3.textContent);
        // tooltipContainer.setAttribute("data-tooltip", tooltip);
        tooltipContainer2.innerHTML = context_switch_instruction[3]();
        i3.appendChild(tooltipContainer2);
        tr3.appendChild(i3);
        tbody.appendChild(tr3);

        const tr4 = document.createElement("tr");
        const i4 = document.createElement("button");
        i4.setAttribute("onclick", "restorePCB()");
        i4.setAttribute("id", "restore_pcb");
        // i4.innerHTML = context_switch_instruction[1]();
        const tooltipContainer3 = document.createElement("span");
        tooltipContainer3.classList.add("note");
        // set attribute
        const code1 = document.createElement("code");
        code1.innerHTML = `# Load new registers
        movl 4(%esp), %eax # put new ptr into eax
        movl 28(%eax), %ebp # restore other registers`;
        tooltipContainer3.setAttribute("data-tooltip", code1.textContent);
        // tooltipContainer.setAttribute("data-tooltip", tooltip);
        tooltipContainer3.innerHTML = context_switch_instruction[1]();
        i4.appendChild(tooltipContainer3);
        tr4.appendChild(i4);
        tbody.appendChild(tr4);

        instructionBox.appendChild(tbody);
    }
    k_trap_execute = 0;
}

// Hardware instructions for kernel mode to user mode
function Hardware_kernelToUserMode(process) {
    return [
        () => `restore registers of process ${process} from k-stack of process ${process}`,
        () => `Move to user mode`,
        () => `jump to process ${process}'s PC`,
    ]
}

let io = 0;

function trigger_io() {
    if (io == 1) {
        const kernelSection = document.getElementById("kernel");

        const k_box = document.getElementById("rd-box");
        k_box.style.borderColor = "dodgerblue";
        document.getElementById("kmode").style.backgroundColor = "dodgerblue";
        document.getElementById("kmode").style.color = "white";
        document.getElementById("kernel_buttons").backgroundColor = "dodgerblue";

        // Remove existing content from the kernel section
        kernelSection.innerHTML = "";


        // Create a tbody element
        const tbody = document.createElement("tbody");
        // Appending a yellow colored text
        tbody.insertRow(0).insertCell(0).innerHTML = "This function is part of a larger system that deals with asynchronous I/O operations. It prepares and processes linked lists of I/O requests and performs different actions based on whether a specific flag is set in the request structure.";
        tbody.rows[0].cells[0].style.backgroundColor = "yellow";
        // Add rows to the tbody
        tbody.insertRow(-1).insertCell(0).innerHTML = "static void io_prep_async_link(struct io_kiocb *req)";
        tbody.insertRow(-1).insertCell(0).innerHTML = "{";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   struct io_kiocb *cur;";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   if (req->flags & REQ_F_LINK_TIMEOUT) {";
        tbody.insertRow(-1).insertCell(0).innerHTML = "       struct io_ring_ctx *ctx = req->ctx;";
        tbody.insertRow(-1).insertCell(0).innerHTML = "       spin_lock_irq(&ctx->timeout_lock);";
        tbody.insertRow(-1).insertCell(0).innerHTML = "       io_for_each_link(cur, req)";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   io_prep_async_work(cur);";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   spin_unlock_irq(&ctx->timeout_lock);";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   } else {";
        tbody.insertRow(-1).insertCell(0).innerHTML = "       io_for_each_link(cur, req)";
        tbody.insertRow(-1).insertCell(0).innerHTML = "       io_prep_async_work(cur);";
        tbody.insertRow(-1).insertCell(0).innerHTML = "   }";
        tbody.insertRow(-1).insertCell(0).innerHTML = "}";

        // Append the tbody to the kernelTable
        kernelSection.appendChild(tbody);

        const kernel_button = document.getElementById("kernel_buttons");
        kernel_button.innerHTML = "";
        kernel_button.style.backgroundColor = "dodgerblue";
        const executeButton = document.createElement("button");
        executeButton.setAttribute("id", "kernelCode_execute");
        executeButton.innerHTML = "Execute";
        executeButton.setAttribute("onclick", "execute()");
        kernel_button.appendChild(executeButton);
    }
}

function hardware_k_to_u() {
    if (kPointer != 3) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    kPointer = 0;


    if (interrupt == "Exit") {
        console.log("Exit");
        io = 1;
        interrupt = "";
        // window.alert("Process " + next_process + " is still waiting for I/O to complete. Click on I/O trigger to complete the I/O operation.");
        // document.getElementById("remark").innerHTML = "";
        document.getElementById("remark").innerHTML += "<br> > <br> a) Process " + next_process + " is still waiting for I/O to complete. <br> b) Click on I/O trigger in student controls to send a signal to the hardware that the I/O operation is complete.";
        document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
        return;
    }

    const dummy_process = current_process;
    current_process = next_process;
    next_process = dummy_process;

    no_of_context_switches++;
    document.getElementById("context_switches").innerHTML = "";
    document.getElementById("context_switches").innerHTML = no_of_context_switches;

    document.getElementById("hardware_kTOu").style.backgroundColor = "green";
    document.getElementById("hardware_kTOu").style.color = "white";

    document.getElementById("rd-box").style.borderColor = "darkgrey";
    document.getElementById("kmode").style.backgroundColor = "darkgrey";
    document.getElementById("kmode").style.color = "black";

    document.getElementById("nd-box").style.borderColor = "dodgerblue";
    document.getElementById("hardware").style.backgroundColor = "dodgerblue";
    document.getElementById("hardware").style.color = "white";

    document.getElementById("k-stack_A").style.borderColor = "darkgrey";
    document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
    document.getElementById("k-stack-A").style.color = "black";

    document.getElementById("k-stack_B").style.borderColor = "darkgrey";
    document.getElementById("k-stack-B").style.backgroundColor = "darkgrey";
    document.getElementById("k-stack-B").style.color = "black";

    const kernel = document.getElementById("kernel");
    kernel.innerHTML = "";

    const instructionBox = document.getElementById("i");
    instructionBox.innerHTML = "";
    const tbody = document.createElement("tbody");

    const hardware_kernelToUserMode = Hardware_kernelToUserMode(current_process);
    const tr1 = document.createElement("tr");
    const i1 = document.createElement("button");
    i1.setAttribute("onclick", "restore_registers()");
    i1.setAttribute("id", "restore_registers");
    i1.innerHTML = hardware_kernelToUserMode[0]();
    tr1.appendChild(i1);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const i2 = document.createElement("button");
    i2.setAttribute("onclick", "move_to_user_mode()");
    i2.setAttribute("id", "move_to_user_mode");
    i2.innerHTML = hardware_kernelToUserMode[1]();
    tr2.appendChild(i2);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const i3 = document.createElement("button");
    i3.setAttribute("onclick", "jump_to_process()");
    i3.setAttribute("id", "jump_to_process");
    i3.innerHTML = hardware_kernelToUserMode[2]();
    tr3.appendChild(i3);
    tbody.appendChild(tr3);

    instructionBox.appendChild(tbody);

    console.log("Going from kernel to hardware mode");
    // window.alert("The kernel execution for dealing with the trap and context switching is done. Now the hardware will switch to user mode. Select the correct instructions from the instruction box for the hardware to execute. Click OK to continue");
    // document.getElementById("remark").innerHTML = "";
    document.getElementById("remark").innerHTML += "<br> > <br> a) You are in the hardware now. <br> b) Select the correct instructions from the instruction box to load the registers into CPU from k-stack for it's execution.";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
}

function jump_to_process() {
    if (hardwarePointer != 2) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    const instructionBox = document.getElementById("i");
    instructionBox.innerHTML = "";

    const htable = document.getElementById("interrupt");
    htable.innerHTML = "";

    // document.getElementById("remark").innerHTML = "";
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none';

    document.getElementById("remark").innerHTML += "<br> > <br> a) You are in the User mode now. <br> b) Use the 'next' and 'previous' buttons in the user mode to traverse through the program."
    scrollToBottom();
    document.getElementById("st-box").style.borderColor = "dodgerblue";
    document.getElementById("umode").style.backgroundColor = "dodgerblue";
    document.getElementById("umode").style.color = "white";
    document.getElementById("current_running_process").innerText = "Current running process: " + current_process;

    document.getElementById("nd-box").style.borderColor = "darkgrey";
    document.getElementById("hardware").style.backgroundColor = "darkgrey";
    document.getElementById("hardware").style.color = "black";

    document.getElementById("process_buttons").style.backgroundColor = "dodgerblue";

    if (current_process == "A") {
        processA.load();
        document.getElementById("next_process").disabled = false;
        document.getElementById("prev_process").disabled = false;
        processA.highlight();
        processA.setCPU();
    } else {
        processB.load();
        document.getElementById("next_process").disabled = false;
        document.getElementById("prev_process").disabled = false;
        processB.highlight();
        processB.setCPU();
    }

    hardwarePointer = 0;

    console.log("Going from hardware to user mode");
    // window.alert("User mode will take over the control now. We are going into ${current_process}'s user mode. Click OK to continue");
}

function move_to_user_mode() {
    if (hardwarePointer != 1) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    document.getElementById("move_to_user_mode").style.backgroundColor = "green";
    document.getElementById("move_to_user_mode").style.color = "white";

    // document.getElementById("remark").innerHTML = "";
    document.getElementById("remark").innerHTML += "<br> > <br> a) Observe the change in the mode CPU is running. <br> b) Now select the instruction to jump to the process. <br> c) This will lead you into User mode.";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    const htable = document.getElementById("interrupt");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = Hardware_kernelToUserMode(current_process)[1]();
    tr.appendChild(td);
    tbody.appendChild(tr);
    htable.appendChild(tbody);

    const cpu = document.getElementById("cpu_section");
    if (current_process == "A") {
        document.getElementById("k-stack_A").style.borderColor = "darkgrey";
        document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
        document.getElementById("k-stack-A").style.color = "black";
    }
    else {
        document.getElementById("k-stack_B").style.borderColor = "darkgrey";
        document.getElementById("k-stack-B").style.backgroundColor = "darkgrey";
        document.getElementById("k-stack-B").style.color = "black";
    }
    cpu.rows[1].cells[1].innerHTML = "1 (User Mode)";
    cpu.rows[1].style.backgroundColor = "yellow";

    console.log("Moving to user mode");

    hardwarePointer++;
}
$('.footer').click(function () {

    if ($(this).height() > 40) {

        $(this).animate({
            height: "40px"
        }, 600, 'swing', function () {
            $(this).html("Click me!");
        });

    } else {

        $(this).animate({
            height: "450px"
        }, 600, 'swing', function () {
            $(this).html("Click me again!");
        });

    }
});
function restore_registers() {
    if (hardwarePointer != 0) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    document.getElementById("remark").innerHTML += "<br> > <br> a) Observe the registers CPU will be working on from now on. <br> b) These are the registers of the process we have switched to. <br> c) To execute the process, select the instruction that will change the CPU mode to user mode.";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    let reg = "";

    const cpu = document.getElementById("cpu_section");
    if (current_process == "A") {
        reg = processA.getRegisters();
        if (processA.instructionPointer == 0) {
            reg = "--";
        }

        document.getElementById("k-stack_A").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-A").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-A").style.color = "black";
    }
    else {
        reg = processB.getRegisters();
        if (processB.instructionPointer == 0) {
            reg = "--";
        }

        document.getElementById("k-stack_B").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-B").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-B").style.color = "black";
    }
    cpu.rows[2].cells[1].innerHTML = reg;

    document.getElementById("restore_registers").style.backgroundColor = "green";
    document.getElementById("restore_registers").style.color = "white";

    const htable = document.getElementById("interrupt");
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = Hardware_kernelToUserMode(current_process)[0]();
    tr.appendChild(td);
    tbody.appendChild(tr);
    htable.appendChild(tbody);

    console.log("Restoring registers of " + current_process);

    hardwarePointer++;
}

function restorePCB() {
    if (kPointer != 1) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    // document.getElementById("remark").innerHTML = "";
    document.getElementById("remark").innerHTML += "<br> > <br> a) The k-stack of new process is loaded succesfully from it's PCB. <br> b) Now select the appropriate instruction to switch to the k-stack of new process.";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    console.log("Restoring PCB of " + current_process);

    const kernel = document.getElementById("kernel");

    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = context_switch_instructions(current_process, next_process)[1]();
    tr.appendChild(td);
    tbody.appendChild(tr);
    kernel.appendChild(tbody);

    document.getElementById("restore_pcb").style.backgroundColor = "green";
    document.getElementById("restore_pcb").style.color = "white";

    if (next_process == "A") {
        restorePCB_A();

        document.getElementById("pcbB").style.borderColor = "darkgrey";
        document.getElementById("pcb_B_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_B_p").style.color = "black";

        document.getElementById("pcbA").style.borderColor = "#555";
        document.getElementById("pcb_A_p").style.backgroundColor = "#555";
        document.getElementById("pcb_A_p").style.color = "white";
    }
    else if (next_process == "B") {
        restorePCB_B();

        document.getElementById("pcbA").style.borderColor = "darkgrey";
        document.getElementById("pcb_A_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_A_p").style.color = "black";

        document.getElementById("pcbB").style.borderColor = "#555";
        document.getElementById("pcb_B_p").style.backgroundColor = "#555";
        document.getElementById("pcb_B_p").style.color = "white";
    }

    kPointer++;
}

function restorePCB_B() {

    document.getElementById("k-stack_B").style.borderColor = "dodgerblue";
    document.getElementById("k-stack-B").style.backgroundColor = "dodgerblue";
    document.getElementById("k-stack-B").style.color = "black";

    const pcbTable = document.getElementById("pcb_B_table");
    pcbTable.innerHTML = "";
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = "PC: ";
    td2.innerHTML = processB.getPC();
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td3.innerHTML = "State: ";
    td4.innerHTML = processB.getState();
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    td5.innerHTML = "Registers: ";
    td6.innerHTML = processB.getRegisters();
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tbody.appendChild(tr3);

    pcbTable.appendChild(tbody);

    const stack = document.getElementById("kStack_B_Table");
    stack.innerHTML = "";
    for (let i = 0; i < process_B_regSet[processB.instructionPointer].value.length; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = process_B_regSet[processB.instructionPointer].value[i];
        if (processB.instructionPointer == 0) {
            td.innerHTML = "--";
        }
        tr.appendChild(td);
        stack.appendChild(tr);
    }
}

function restorePCB_A() {

    document.getElementById("k-stack_A").style.borderColor = "dodgerblue";
    document.getElementById("k-stack-A").style.backgroundColor = "dodgerblue";
    document.getElementById("k-stack-A").style.color = "black";

    const pcbTable = document.getElementById("pcb_A_table");
    pcbTable.innerHTML = "";
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = "PC: ";
    td2.innerHTML = processA.getPC();
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td3.innerHTML = "State: ";
    td4.innerHTML = processA.getState();
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    td5.innerHTML = "Registers: ";
    td6.innerHTML = processA.getRegisters();
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tbody.appendChild(tr3);

    pcbTable.appendChild(tbody);

    const stack = document.getElementById("kStack_A_Table");
    const tbody1 = document.createElement("tbody");
    stack.innerHTML = "";
    for (let i = 0; i < process_A_regSet[processA.instructionPointer].value.length; i++) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = process_A_regSet[processA.instructionPointer].value[i];
        if (processA.instructionPointer == 0) {
            td.innerHTML = "--";
        }
        tr.appendChild(td);
        tbody1.appendChild(tr);
    }
    stack.appendChild(tbody1);
}
function scrollToBottom() {
    var remarkDiv = document.getElementById("remark");
    remarkDiv.scrollTop = remarkDiv.scrollHeight;
    // requestAnimationFrame(scrollToBottom);
}


function updatePCB() {
    if (kPointer != 0) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    document.getElementById("remark").innerHTML += "<br> > <br> a) You have successfully updated the PCB of process " + current_process + ". <br> b) Now select the instruction that will load the k-stack of process " + next_process + " from the PCB so that kernel can start the execution of new process.<br>";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    console.log("Updating PCB of " + current_process);

    const kernel = document.getElementById("kernel");
    kernel.innerHTML = "";

    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = context_switch_instructions(current_process, next_process)[0]();
    tr.appendChild(td);
    tbody.appendChild(tr);
    kernel.appendChild(tbody);

    document.getElementById("update_pcb").style.backgroundColor = "green";
    document.getElementById("update_pcb").style.color = "white";

    if (current_process == "A") {
        updatePCB_A();

        document.getElementById("pcbB").style.borderColor = "darkgrey";
        document.getElementById("pcb_B_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_B_p").style.color = "black";

        document.getElementById("pcbA").style.borderColor = "#555";
        document.getElementById("pcb_A_p").style.backgroundColor = "#555";
        document.getElementById("pcb_A_p").style.color = "white";
    }
    else if (current_process == "B") {
        updatePCB_B();

        document.getElementById("pcbA").style.borderColor = "darkgrey";
        document.getElementById("pcb_A_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_A_p").style.color = "black";

        document.getElementById("pcbB").style.borderColor = "#555";
        document.getElementById("pcb_B_p").style.backgroundColor = "#555";
        document.getElementById("pcb_B_p").style.color = "white";
    }

    kPointer++;
}

function updatePCB_A() {
    const pcbTable = document.getElementById("pcb_A_table");
    pcbTable.innerHTML = "";
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = "PC: ";
    td2.innerHTML = processA.getPC();
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td3.innerHTML = "State: ";
    td4.innerHTML = processA.getState();
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    td5.innerHTML = "Registers: ";
    td6.innerHTML = processA.getRegisters();
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tbody.appendChild(tr3);

    pcbTable.appendChild(tbody);

}

function updatePCB_B() {
    const pcbTable = document.getElementById("pcb_B_table");
    pcbTable.innerHTML = "";
    const tbody = document.createElement("tbody");

    const tr1 = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    td1.innerHTML = "PC: ";
    td2.innerHTML = processB.getPC();
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tbody.appendChild(tr1);

    const tr2 = document.createElement("tr");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td3.innerHTML = "State: ";
    td4.innerHTML = processB.getState();
    tr2.appendChild(td3);
    tr2.appendChild(td4);
    tbody.appendChild(tr2);

    const tr3 = document.createElement("tr");
    const td5 = document.createElement("td");
    const td6 = document.createElement("td");
    td5.innerHTML = "Registers: ";
    td6.innerHTML = processB.getRegisters();
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tbody.appendChild(tr3);

    pcbTable.appendChild(tbody);

}

function readHandler() {
    hardwarePointer = 0;

    if (interrupt == "Read") {
        document.getElementById("read").style.backgroundColor = "green";
        document.getElementById("read").style.color = "white";

        // window.alert("You have selected the correct trap handler to resolve I/O Read interrupt. The kernel will take over the control now.");

        runReadHandler();
    }
}

function runExitHandler() {
    const h_box = document.getElementById("nd-box");
    h_box.style.borderColor = "darkgrey";
    document.getElementById("hardware").style.backgroundColor = "darkgrey";
    document.getElementById("hardware").style.color = "black";
    document.getElementById("hardware").innerHTML = "HARDWARE";

    document.getElementById("k-stack_A").style.borderColor = "darkgrey";
    document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
    document.getElementById("k-stack-A").style.color = "black";

    document.getElementById("interrupt").innerHTML = "";

    const kernelSection = document.getElementById("kernel");

    const k_box = document.getElementById("rd-box");
    k_box.style.borderColor = "dodgerblue";
    document.getElementById("kmode").style.backgroundColor = "dodgerblue";
    document.getElementById("kmode").style.color = "white";
    document.getElementById("kernel_buttons").backgroundColor = "dodgerblue";

    // Remove existing content from the kernel section
    kernelSection.innerHTML = "";


    // Create a tbody element
    const tbody = document.createElement("tbody");

    tbody.insertRow(0).insertCell(0).innerHTML = "This code essentially manages the termination of a task (process) within an operating system kernel or similar system-level software. It ensures that various resources are cleaned up and that the exit is properly synchronized with other tasks and processes. It also handles the case where the entire process group is exiting, taking additional actions in that scenario.";
    tbody.rows[0].cells[0].style.backgroundColor = "yellow";

    // Add rows to the tbody
    tbody.insertRow(-1).insertCell(0).innerHTML = "void __noreturn do_exit(long code)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "{";
    tbody.insertRow(-1).insertCell(0).innerHTML = "struct task_struct *tsk = current;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "int group_dead;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "WARN_ON(irqs_disabled());";
    tbody.insertRow(-1).insertCell(0).innerHTML = "synchronize_group_exit(tsk, code);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "WARN_ON(tsk->plug);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "kcov_task_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "kmsan_task_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "coredump_task_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "ptrace_event(PTRACE_EVENT_EXIT, code);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "user_events_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "validate_creds_for_do_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "io_uring_files_cancel();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_signals(tsk);  /* sets PF_EXITING */";
    tbody.insertRow(-1).insertCell(0).innerHTML = "/* sync mm's RSS info before statistics gathering */";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->mm)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "sync_mm_rss(tsk->mm);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "account_update_integrals(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "group_dead = atomic_dec_and_test(&tsk->signal->live);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (group_dead) {";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (unlikely(is_global_init(tsk)))";
    tbody.insertRow(-1).insertCell(0).innerHTML = "panic(\"Attempted to kill init! exitcode=0x%08x\\n\",";
    tbody.insertRow(-1).insertCell(0).innerHTML = "tsk->signal->group_exit_code ?: (int)code);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "#ifdef CONFIG_POSIX_TIMERS";
    tbody.insertRow(-1).insertCell(0).innerHTML = "hrtimer_cancel(&tsk->signal->real_timer);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_itimers(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "#endif";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->mm)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "setmax_mm_hiwater_rss(&tsk->signal->maxrss, tsk->mm);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "}";
    tbody.insertRow(-1).insertCell(0).innerHTML = "acct_collect(code, group_dead);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (group_dead)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "tty_audit_exit();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "audit_free(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "tsk->exit_code = code;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "taskstats_exit(tsk, group_dead);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_mm();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (group_dead)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "acct_process();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "trace_sched_process_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_sem(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_shm(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_files(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_fs(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (group_dead)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "disassociate_ctty(1);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_task_namespaces(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_task_work(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_thread(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "perf_event_exit_task(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "sched_autogroup_exit_task(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "cgroup_exit(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_task_rcu_start();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_notify(tsk, group_dead);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "proc_exit_connector(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "mpol_put_task_policy(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "#ifdef CONFIG_FUTEX";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (unlikely(current->pi_state_cache))";
    tbody.insertRow(-1).insertCell(0).innerHTML = "kfree(current->pi_state_cache);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "#endif";
    tbody.insertRow(-1).insertCell(0).innerHTML = "debug_check_no_locks_held();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->io_context)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_io_context(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->splice_pipe)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "free_pipe_info(tsk->splice_pipe);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->vfork_done)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "vfree(tsk->vfork_done);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->vfork_parent)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "vfree(tsk->vfork_parent);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->vfork_exec_parent)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "vfree(tsk->vfork_exec_parent);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (tsk->vfork_child)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "vfree(tsk->vfork_child);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_rcu();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "exit_tasks_rcu_finish();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "lockdep_free_task(tsk);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "do_task_dead();";
    tbody.insertRow(-1).insertCell(0).innerHTML = "}";
    // Append the tbody to the kernelTable
    kernelSection.appendChild(tbody);


    const kernel_button = document.getElementById("kernel_buttons");
    kernel_button.innerHTML = "";
    kernel_button.style.backgroundColor = "green";
    const executeButton = document.createElement("button");
    executeButton.setAttribute("id", "kernelCode_execute");
    executeButton.innerHTML = "Execute";
    executeButton.setAttribute("onclick", "execute()");
    kernel_button.appendChild(executeButton);
}

function runReadHandler() {
    const h_box = document.getElementById("nd-box");
    h_box.style.borderColor = "darkgrey";
    document.getElementById("hardware").style.backgroundColor = "darkgrey";
    document.getElementById("hardware").style.color = "black";

    document.getElementById("k-stack_A").style.borderColor = "darkgrey";
    document.getElementById("k-stack-A").style.backgroundColor = "darkgrey";
    document.getElementById("k-stack-A").style.color = "black";

    document.getElementById("interrupt").innerHTML = "";

    const kernelSection = document.getElementById("kernel");

    const k_box = document.getElementById("rd-box");
    k_box.style.borderColor = "dodgerblue";
    document.getElementById("kmode").style.backgroundColor = "dodgerblue";
    document.getElementById("kmode").style.color = "white";
    document.getElementById("kernel_buttons").backgroundColor = "dodgerblue";

    // Remove existing content from the kernel section
    kernelSection.innerHTML = "";


    // Create a tbody element
    const tbody = document.createElement("tbody");
    tbody.insertRow(0).insertCell(0).innerHTML = "this code defines a function for synchronous reading of data from a file. It initializes data structures, performs the read operation, handles errors, and updates the file position if necessary before returning the result. This code is typical in file I/O operations within operating systems and file systems.";
    tbody.rows[0].cells[0].style.backgroundColor = "yellow";
    // Add rows to the tbody
    tbody.insertRow(-1).insertCell(0).innerHTML = "static ssize_t new_sync_read(struct file *filp, char __user *buf, size_t len, loff_t *ppos)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "{";
    tbody.insertRow(-1).insertCell(0).innerHTML = "struct kiocb kiocb;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "struct iov_iter iter;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "ssize_t ret;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "init_sync_kiocb(&kiocb, filp);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "kiocb.ki_pos = (ppos ? *ppos : 0);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "iov_iter_ubuf(&iter, ITER_DEST, buf, len);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "ret = call_read_iter(filp, &kiocb, &iter);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "BUG_ON(ret == -EIOCBQUEUED);";
    tbody.insertRow(-1).insertCell(0).innerHTML = "if (ppos)";
    tbody.insertRow(-1).insertCell(0).innerHTML = "*ppos = kiocb.ki_pos;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "return ret;";
    tbody.insertRow(-1).insertCell(0).innerHTML = "}";

    // Append the tbody to the kernelTable
    kernelSection.appendChild(tbody);


    const kernel_button = document.getElementById("kernel_buttons");
    kernel_button.innerHTML = "";
    kernel_button.style.backgroundColor = "dodgerblue";
    const executeButton = document.createElement("button");
    executeButton.setAttribute("id", "kernelCode_execute");
    executeButton.innerHTML = "Execute";
    executeButton.setAttribute("onclick", "execute()");
    kernel_button.appendChild(executeButton);

}

function ioCompleteHandler() {
    if (interrupt == "IO_complete") {
        document.getElementById("io_complete").style.backgroundColor = "green";
        document.getElementById("io_complete").style.color = "white";
    }
}

function exitHandler() {
    hardwarePointer = 0;

    if (interrupt == "Exit") {
        document.getElementById("exit").style.backgroundColor = "green";
        document.getElementById("exit").style.color = "white";

        // window.alert("You have selected the correct trap handler to resolve I/O Read interrupt. The kernel will take over the control now.");

        runExitHandler();
    }
}

function hardware_u_to_k(current_process) {
    return [
        () => `save registers of process ${current_process} to k-stack of process ${current_process}`,
        () => `Move to kernel mode`,
        () => `move to trap handler`,
    ]
}

function load_k_stack_kernel() {
    console.log("load_k_stack_kernel");
    if (kPointer != 2) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }

    const context_switch_instruction = context_switch_instructions(current_process, next_process);
    const kernel = document.getElementById("kernel");
    const tbody = document.createElement("tbody");
    tbody.insertRow(-1).insertCell(0).innerHTML = context_switch_instruction[2]();
    kernel.appendChild(tbody);

    document.getElementById("remark").innerHTML += "<br> > Now select the correct instruction to jump into the new process and complete the context switch.<br>";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    document.getElementById("kernel_stack_k").style.backgroundColor = "green";
    document.getElementById("kernel_stack_k").style.color = "white";

    if (next_process == "A") {
        load_k_stack_A();
        document.getElementById("pcbA").style.borderColor = "darkgrey";
        document.getElementById("pcb_A_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_A_p").style.color = "black";

        document.getElementById("k-stack_A").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-A").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-A").style.color = "white";
    }
    else if (next_process == "B") {
        load_k_stack_B();
        document.getElementById("pcbB").style.borderColor = "darkgrey";
        document.getElementById("pcb_B_p").style.backgroundColor = "darkgrey";
        document.getElementById("pcb_B_p").style.color = "black";

        document.getElementById("k-stack_B").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-B").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-B").style.color = "white";
    }

    kPointer++;
}

function load_k_stack() {
    console.log("load_k_stack");
    if (hardwarePointer != 0) {
        no_of_wrong_ints_selections++;
        document.getElementById("wrong_ints_selection").innerHTML = no_of_wrong_ints_selections;
        return;
    }


    document.getElementById("remark").innerHTML += "<br> > <br> a) You have now populated your kernel stack. <br> b) Now you need to change to kernel mode. Select the correct instruction to do that.<br>";
    document.getElementById("remarkDiv").scrollTop = document.getElementById("remarkDiv").scrollHeight;
    document.getElementById("kernel_stack").style.backgroundColor = "green";
    document.getElementById("kernel_stack").style.color = "white";

    const hardware = document.getElementById("interrupt");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.innerHTML = hardware_u_to_k(current_process)[0]();
    tr.appendChild(td);
    hardware.appendChild(tr);

    if (current_process == "A") {
        load_k_stack_A();
        document.getElementById("k-stack_A").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-A").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-A").style.color = "white";
    }
    else if (current_process == "B") {
        load_k_stack_B();
        document.getElementById("k-stack_B").style.borderColor = "dodgerblue";
        document.getElementById("k-stack-B").style.backgroundColor = "dodgerblue";
        document.getElementById("k-stack-B").style.color = "white";
    }

    hardwarePointer++;
}

function load_k_stack_A() {
    const table = document.getElementById("kStack_A_Table");
    table.innerHTML = "";
    const tbody = document.createElement("tbody");

    const values = registerValues_A[processA.instructionPointer];
    for (let j = 0; j < process_A_regSet[processA.instructionPointer].value.length; j++) {

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");

        register = process_A_regSet[processA.instructionPointer].value[j];

        td1.innerHTML = register + ": " + values[register];

        tr.appendChild(td1);
        tbody.appendChild(tr);
    }
    if (processA.instructionPointer == 0) {
        tbody.innerHTML = "";
    }

    table.appendChild(tbody);
}

function load_k_stack_B() {
    const table = document.getElementById("kStack_B_Table");
    table.innerHTML = "";
    const tbody = document.createElement("tbody");
    const values = registerValues_B[processB.instructionPointer];

    for (let j = 0; j < process_B_regSet[processB.instructionPointer].value.length; j++) {

        const tr = document.createElement("tr");
        const td1 = document.createElement("td");

        register = process_B_regSet[processB.instructionPointer].value[j];
        td1.innerHTML = register + ": " + values[register];

        tr.appendChild(td1);
        tbody.appendChild(tr);
    }

    if (processB.instructionPointer == 0) {
        tbody.innerHTML = "";
    }

    table.appendChild(tbody);
}

