import levels from "./levels"

class CSSDinnerApp {
  game: HTMLElement | null
  levelNumber: number
  levels
  title: HTMLElement
  helpButton: HTMLElement | null
  table: HTMLElement
  input: HTMLInputElement
  enterButton: HTMLElement | null
  htmlField: HTMLElement
  curentLevel: HTMLElement
  maxLevels: HTMLElement
  levelState: HTMLElement | null
  prevLvlButton: HTMLElement | null
  nextLvlButton: HTMLElement | null
  helpTitle: HTMLElement
  helpSubTitle: HTMLElement
  helpSyntax: HTMLElement
  helpPromt: HTMLElement
  helpList: HTMLElement

  constructor(levelNumber: number) {
    this.game = document.querySelector('.css-diner__game')
    this.levelNumber = levelNumber
    this.levels = levels
    this.title = document.querySelector('.css-diner__task') as HTMLElement
    this.helpButton = document.querySelector('.css-diner__help-btn')
    this.table = document.querySelector('.css-diner__table') as HTMLElement
    this.input = document.querySelector('.css-diner__input') as HTMLInputElement
    this.enterButton = document.querySelector('.css-diner__enter-btn')
    this.htmlField = document.querySelector('.css-diner__html-field') as HTMLElement
    this.curentLevel = document.querySelector('.help__curent-level') as HTMLElement
    this.maxLevels = document.querySelector('.help__max-levels') as HTMLElement
    this.levelState = document.querySelector('.help__level-state')
    this.prevLvlButton = document.querySelector('.help__prev-level')
    this.nextLvlButton = document.querySelector('.help__next-level')
    this.helpTitle = document.querySelector('.help__title') as HTMLElement
    this.helpSubTitle = document.querySelector('.help__subtitle') as HTMLElement
    this.helpSyntax = document.querySelector('.help__syntax') as HTMLElement
    this.helpPromt = document.querySelector('.help__promt') as HTMLElement
    this.helpList = document.querySelector('.help__list') as HTMLElement
  }

  public start(): void {
    this.renderLevel(this.levelNumber)
    this.game?.addEventListener('mouseover', this.hover)
    this.input?.addEventListener('input', this.inputState)
    this.helpButton?.addEventListener('click', () => {
      console.log(this.levels[this.levelNumber].correctAnswer)
    })
    this.enterButton?.addEventListener('click', this.isCorrectAnswer)
    this.prevLvlButton?.addEventListener('click', this.renderPrevLevel)
    this.nextLvlButton?.addEventListener('click', this.renderNextLevel)
  }

  private renderLevel(levelNumber: number): void {
    this.title.textContent = this.levels[levelNumber].title
    this.input.value = ''
    this.input.classList.add('css-diner__input_strobe')
    this.htmlField.innerHTML = this.levels[levelNumber].htmlField
    this.table.innerHTML = this.levels[levelNumber].table
    this.curentLevel.textContent = `${this.levels[levelNumber].curentLevel}`
    this.maxLevels.textContent = `${this.levels.length}`
    this.renderLevelState()
    this.helpTitle.textContent = this.levels[levelNumber].helpTitle
    this.helpSubTitle.textContent = this.levels[levelNumber].helpSubTitle
    this.helpSyntax.textContent = this.levels[levelNumber].helpSyntax
    this.helpPromt.innerHTML = this.levels[levelNumber].helpPromt
    this.renderHelpList(this.levels[levelNumber].helpList)
  }

  private renderLevelState(): void {
    if (this.levels[this.levelNumber].isDone === true) {
      this.levelState?.classList.add('_done')
    } else {
      this.levelState?.classList.remove('_done')
    }
  }

  private renderHelpList(helpList: string[]): void {
    this.helpList.innerHTML = ''
    helpList.forEach(example => {
      const helpExample = document.createElement('li')
      helpExample.classList.add('help__example')
      helpExample.innerHTML = example
      this.helpList.append(helpExample)
    })
  }

  private hover(e: MouseEvent): void {
    const target: HTMLElement = e.target as HTMLElement
    if (target.hasAttribute('data-tag')) {
      const tagValue = target.getAttribute('data-tag')
      const elements = document.querySelectorAll(`[data-tag = ${tagValue} ]`)

      elements.forEach(element => {
        element.classList.add('_hover')
      })
    }
    if (!target.hasAttribute('data-tag')) {
      const tagValue = target.getAttribute('data-tag')
      const elements = document.querySelectorAll(`[data-tag]`)
      elements.forEach(element => {
        element.classList.remove('_hover')
      })
    }
  }

  private inputState = (): void => {
    if (this.input?.value) {
      this.input?.classList.remove('css-diner__input_strobe')
    } else { this.input?.classList.add('css-diner__input_strobe') }
  }

  private isCorrectAnswer = (e: Event): void => {
    e.preventDefault()
    if (this.input?.value.trim() === this.levels[this.levelNumber].correctAnswer) {
      this.levelState?.classList.add('_done')
      this.levels[this.levelNumber].isDone = true
      this.renderNextLevel()

      this.renderLevel(this.levelNumber)

    } else {
      console.log(false)
    }
  }

  private renderPrevLevel = () => {
    if (!this.prevLvlButton?.classList.contains('_active')) return
    if (!this.nextLvlButton?.classList.contains('_active')) this.nextLvlButton?.classList.add('_active')
    this.levelNumber -= 1
    this.renderLevel(this.levelNumber)
    if (this.levelNumber === 0) {
      this.prevLvlButton?.classList.remove('_active')
    }
  }

  private renderNextLevel = () => {
    if (!this.nextLvlButton?.classList.contains('_active')) return
    if (!this.prevLvlButton?.classList.contains('_active')) this.prevLvlButton?.classList.add('_active')

    this.levelNumber += 1
    this.renderLevel(this.levelNumber)

    if (this.levelNumber + 1 >= this.levels.length) {
      this.nextLvlButton?.classList.remove('_active')
    }
  }
}

export default CSSDinnerApp
