interface Level {
  title: string
  table: string
  htmlField: string
  curentLevel: number
  isDone: boolean
  helpTitle: string
  helpSubTitle: string
  helpSyntax: string
  helpPromt: string
  helpList: string[]
  correctAnswer: string
}

const levels: Level[] = [
  {
    title: 'Select the bento boxes',
    table: 'string',
    htmlField: 'string',
    curentLevel: 1,
    isDone: false,
    helpTitle: 'Type Selector',
    helpSubTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpPromt: 'Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.',
    helpList: ['<strong>div</strong> selects all <tag>div</tag> elements.', '<strong>p</strong> selects all <tag>p</tag> elements.'],
    correctAnswer: 'plate'
  },

  {
    title: 'Select the bento boxes',
    table: 'string',
    htmlField: 'string',
    curentLevel: 2,
    isDone: false,
    helpTitle: 'Type Selector',
    helpSubTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpPromt: 'Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.',
    helpList: ['<strong>div</strong> selects all <tag>div</tag> elements.', '<strong>p</strong> selects all <tag>p</tag> elements.'],
    correctAnswer: 'plate'
  },
  {
    title: 'Select the bento boxes',
    table: 'string',
    htmlField: 'string',
    curentLevel: 3,
    isDone: false,
    helpTitle: 'Type Selector',
    helpSubTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpPromt: 'Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.',
    helpList: ['<strong>div</strong> selects all <tag>div</tag> elements.', '<strong>p</strong> selects all <tag>p</tag> elements.'],
    correctAnswer: 'plate'
  },

]

export default levels
