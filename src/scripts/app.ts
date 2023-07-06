import { levels, Level } from "./levels"

class CSSDinnerApp {
  game: HTMLElement | null
  levelNumber: number
  levels: Level[]
  title: HTMLElement
  helpButton: HTMLElement | null
  table: HTMLElement
  textEditor: HTMLElement
  input: HTMLInputElement
  enterButton: HTMLElement | null
  htmlField: HTMLElement
  curentLevel: HTMLElement
  maxLevels: HTMLElement
  levelState: HTMLElement | null
  prevLvlButton: HTMLElement | null
  nextLvlButton: HTMLElement | null
  burgerButton: HTMLElement | null
  levelsList: HTMLElement
  helpTitle: HTMLElement
  helpSubTitle: HTMLElement
  helpSyntax: HTMLElement
  helpPromt: HTMLElement
  helpList: HTMLElement
  resetButton: HTMLElement | null

  constructor(levelNumber: number) {
    this.game = document.querySelector('.css-diner__game')
    this.levelNumber = levelNumber
    this.levels = levels
    this.title = document.querySelector('.css-diner__task') as HTMLElement
    this.helpButton = document.querySelector('.css-diner__help-btn')
    this.table = document.querySelector('.css-diner__table') as HTMLElement
    this.textEditor = document.querySelector('.css-diner__text-editor') as HTMLElement
    this.input = document.querySelector('.css-diner__input') as HTMLInputElement
    this.enterButton = document.querySelector('.css-diner__enter-btn')
    this.htmlField = document.querySelector('.css-diner__html-field') as HTMLElement
    this.curentLevel = document.querySelector('.help__curent-level') as HTMLElement
    this.maxLevels = document.querySelector('.help__max-levels') as HTMLElement
    this.levelState = document.querySelector('.help__level-state')
    this.prevLvlButton = document.querySelector('.help__prev-level')
    this.nextLvlButton = document.querySelector('.help__next-level')
    this.burgerButton = document.querySelector('.help__burger')
    this.levelsList = document.querySelector('.css-diner__levels-list') as HTMLElement
    this.helpTitle = document.querySelector('.help__title') as HTMLElement
    this.helpSubTitle = document.querySelector('.help__subtitle') as HTMLElement
    this.helpSyntax = document.querySelector('.help__syntax') as HTMLElement
    this.helpPromt = document.querySelector('.help__promt') as HTMLElement
    this.helpList = document.querySelector('.help__list') as HTMLElement
    this.resetButton = document.querySelector('.header__reset-button')
  }

  public start(): void {
    this.getLevelsProgress()
    this.renderLevel(this.levelNumber)
    this.contolsValidation()
    this.game?.addEventListener('mouseover', this.hover)
    this.input?.addEventListener('input', this.inputState)
    this.helpButton?.addEventListener('click', this.levelAssistant)
    this.enterButton?.addEventListener('click', this.isCorrectAnswer)
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        e.preventDefault()
        this.isCorrectAnswer()
      }
    })
    this.prevLvlButton?.addEventListener('click', this.renderPrevLevel)
    this.nextLvlButton?.addEventListener('click', this.renderNextLevel)
    this.burgerButton?.addEventListener('click', () => {
      this.levelsList?.classList.toggle('_active')
      if (!this.levelsList.classList.contains('_active')) return
      this.renderBurgerMenu()
    })
    this.resetButton?.addEventListener('click', this.resetProgress)
  }

  private renderBurgerMenu() {
    this.levelsList.innerHTML = ''
    this.levels.forEach(elem => this.createBurgerMenu(elem))
  }

  private createBurgerMenu(level: Level) {
    const item = document.createElement('li')
    item.classList.add('css-diner__levels-item')
    item.innerText = `${level.curentLevel} ${level.title}`
    if (level.isDone) item.classList.add('done')
    this.levelsList.append(item)
  }

  private renderLevel(levelNumber: number): void {
    this.title.textContent = this.levels[levelNumber].title
    this.input.value = ''
    this.input.classList.add('css-diner__input_strobe')
    this.table.innerHTML = this.levels[levelNumber].table
    this.htmlField.innerHTML = this.levels[levelNumber].htmlField
    this.curentLevel.textContent = `${this.levels[levelNumber].curentLevel}`
    this.maxLevels.textContent = `${this.levels.length}`
    this.renderLevelState()
    this.helpTitle.textContent = this.levels[levelNumber].helpTitle
    this.helpSubTitle.textContent = this.levels[levelNumber].helpSubTitle
    this.helpSyntax.textContent = this.levels[levelNumber].helpSyntax
    this.helpPromt.innerHTML = this.levels[levelNumber].helpPromt
    this.renderHelpList(this.levels[levelNumber].helpList)
    localStorage.setItem('levelNumber', `${this.levelNumber}`)
    this.renderBurgerMenu()
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

  private isCorrectAnswer = (): void => {
    if (this.input?.value.trim() === this.levels[this.levelNumber].correctAnswer) {
      this.levelState?.classList.add('_done')
      this.levels[this.levelNumber].isDone = true
      this.setLevelsProgress()
      this.textEditor.classList.add('win')
      this.textEditor.addEventListener('animationend', () => {
        this.textEditor.classList.remove('win')
      })
      this.renderNextLevel()
      this.renderLevel(this.levelNumber)

    } else {
      this.textEditor.classList.add('shake')
      this.textEditor.addEventListener('animationend', () => {
        this.textEditor.classList.remove('shake')
      })
    }
  }

  private renderPrevLevel = () => {
    if (!this.prevLvlButton?.classList.contains('_active')) return
    if (!this.nextLvlButton?.classList.contains('_active')) this.nextLvlButton?.classList.add('_active')
    this.levelNumber -= 1
    this.renderLevel(this.levelNumber)
    this.contolsValidation()
  }

  private renderNextLevel = () => {
    if (!this.nextLvlButton?.classList.contains('_active')) return
    if (!this.prevLvlButton?.classList.contains('_active')) this.prevLvlButton?.classList.add('_active')

    this.levelNumber += 1
    this.renderLevel(this.levelNumber)

    this.contolsValidation()
  }

  private contolsValidation() {
    if (this.levelNumber + 1 >= this.levels.length) {
      this.nextLvlButton?.classList.remove('_active')
    }

    if (this.levelNumber === 0) {
      this.prevLvlButton?.classList.remove('_active')
    }
  }

  private levelAssistant = () => {
    this.input.value = ''
    this.input.classList.remove('css-diner__input_strobe')
    this.printAnswer(this.levels[this.levelNumber].correctAnswer)
  }

  private printAnswer = (str: string) => {
    this.helpButton?.removeEventListener('click', this.levelAssistant)
    this.prevLvlButton?.removeEventListener('click', this.renderPrevLevel)
    this.nextLvlButton?.removeEventListener('click', this.renderNextLevel)
    let text = str
    if (text.length > 0) {
      this.input.value += text[0]
      setTimeout(() => {
        this.printAnswer(text.slice(1))
      }, 100)
    } else {
      this.helpButton?.addEventListener('click', this.levelAssistant)
      this.prevLvlButton?.addEventListener('click', this.renderPrevLevel)
      this.nextLvlButton?.addEventListener('click', this.renderNextLevel)
    }
  }

  private getLevelsProgress() {
    if (localStorage.getItem('levelsProgress') === null) {
      const defaultLevelProgress: boolean[] = new Array(this.levels.length).fill(false)
      localStorage.setItem('levelsProgress', JSON.stringify(defaultLevelProgress))
    }
    const savedLevelProgress: boolean[] = JSON.parse(localStorage.getItem('levelsProgress')!)
    for (let i = 0; i < this.levels.length; i += 1) {
      this.levels[i].isDone = savedLevelProgress[i]
    }
  }

  private setLevelsProgress() {
    const curenLevelsProgress: boolean[] = this.levels.map(level => level.isDone)
    localStorage.setItem('levelsProgress', JSON.stringify(curenLevelsProgress))
  }

  private resetProgress = () => {
    localStorage.removeItem('levelsProgress')
    this.getLevelsProgress()
    this.levelNumber = 0
    this.renderLevel(this.levelNumber)
  }
}

export default CSSDinnerApp
