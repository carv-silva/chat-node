import blessed from 'blessed'

export default class ComponentBuilder {

    #screen
    #layout

    constructor() { }

    #baseComponent() {
        return {
            boder: 'line',
            mouse: true,
            keys: true,
            top: 0,
            scrollboar: {
                ch: ' ',
                inverse: true
            },
            // Habilita colocar cores e tags no texto
            tags: true
        }
    }

    setScreen({ title }) {
        this.#screen = blessed.screen({
            smartCSR: true,
            title
        })
        return this
    }

    setLayoutComponent() {
        this.#layout = blessed.layout({
            parent: this.#screen,
            width: '100',
            height: '100',
        })

        return this
    }
}