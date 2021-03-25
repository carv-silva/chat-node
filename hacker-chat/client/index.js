import Events from 'events'
import TerminalController from "./src/terminalController.js";

const componentsEmitter = new Events()

const controller = new TerminalController()
await controller.initializeTable(componentsEmitter)