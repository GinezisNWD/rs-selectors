import levels from "./levels"

class CSSDinnerApp {
  levelNumber: number
  levels
  title: HTMLElement
  helpButton: Element | null
  table: Element | null
  input: HTMLInputElement | null
  enterButton: Element | null
  htmlField: Element | null
  curentLevel: HTMLElement
  maxLevels: HTMLElement
  helpTitle: HTMLElement
  helpSubTitle: HTMLElement
  helpSyntax: HTMLElement
  helpPromt: HTMLElement
  helpList: HTMLElement

  constructor(levelNumber: number) {
    this.levelNumber = levelNumber
    this.levels = levels
    this.title = document.querySelector('.css-diner__task') as HTMLElement
    this.helpButton = document.querySelector('.css-diner__help-btn')
    this.table = document.querySelector('.css-diner__table')
    this.input = document.querySelector('.css-diner__input')
    this.enterButton = document.querySelector('.css-diner__enter-btn')
    this.htmlField = document.querySelector('.css-diner__html-field')
    this.curentLevel = document.querySelector('.help__curent-level') as HTMLElement
    this.maxLevels = document.querySelector('.help__max-levels') as HTMLElement
    this.helpTitle = document.querySelector('.help__title') as HTMLElement
    this.helpSubTitle = document.querySelector('.help__subtitle') as HTMLElement
    this.helpSyntax = document.querySelector('.help__syntax') as HTMLElement
    this.helpPromt = document.querySelector('.help__promt') as HTMLElement
    this.helpList = document.querySelector('.help__list') as HTMLElement
  }

  public start(): void {
    // this.test()
    this.renderLevel(this.levelNumber)

    this.helpButton?.addEventListener('click', () => {
      console.log('help')
    })

    this.enterButton?.addEventListener('click', () => {
      if (this.input) {
        console.log(this.input.value)
      }
    })
  }

  private renderLevel(levelNumber: number): void {
    this.title.textContent = this.levels[levelNumber].title
    this.helpTitle.textContent = this.levels[levelNumber].helpTitle
    this.curentLevel.textContent = `${this.levels[levelNumber].curentLevel}`
    this.maxLevels.textContent = `${this.levels.length}`
    this.helpSubTitle.textContent = this.levels[levelNumber].helpSubTitle
    this.helpSyntax.textContent = this.levels[levelNumber].helpSyntax
    this.helpPromt.innerHTML = this.levels[levelNumber].helpPromt
    this.renderHelpList(this.levels[levelNumber].helpList)
  }

  private renderHelpList(helpList: string[]): void {
    this.helpList.innerHTML = ''
    console.log(helpList)
    helpList.forEach(example => {
      const helpExample = document.createElement('li')
      helpExample.classList.add('help__example')
      helpExample.innerHTML = example
      this.helpList.append(helpExample)
    })
  }

  private test(): void {
    console.log(this.title)
    console.log(this.helpButton)
    console.log(this.table)
    console.log(this.input)
    console.log(this.enterButton)
    console.log(this.htmlField)
    console.log(this.helpTitle)
    console.log(this.helpSubTitle)
    console.log(this.helpSyntax)
    console.log(this.helpPromt)
    console.log(this.helpList)
    console.log(this.levels)
  }
}

export default CSSDinnerApp
