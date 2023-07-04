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
    title: 'Select the plates',
    table: '<div data-tag="plate1" class="plate strobe"></div> <div data-tag="plate2" class="plate strobe"></div>',
    htmlField: '<div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate/&gt;</div>',
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
    table: '<div data-tag="bento1" class="bento strobe"></div> <div data-tag="plate1" class="plate"></div> <div data-tag="bento2" class="bento strobe"></div>',
    htmlField: '<div data-tag="bento1">&nbsp;&nbsp;&lt;bento/&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="bento2">&nbsp;&nbsp;&lt;bento/&gt;</div>',
    curentLevel: 2,
    isDone: false,
    helpTitle: 'Type Selector',
    helpSubTitle: 'Select elements by their type',
    helpSyntax: 'A',
    helpPromt: 'Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.',
    helpList: ['<strong>div</strong> selects all <tag>div</tag> elements.', '<strong>p</strong> selects all <tag>p</tag> elements.'],
    correctAnswer: 'bento'
  },
  {
    title: 'Select the fancy plate',
    table: '<div data-tag="fancy1" class="fancy strobe"></div> <div data-tag="plate1" class="plate"></div> <div data-tag="bento1" class="bento"></div>',
    htmlField: '<div data-tag="fancy1">&nbsp;&nbsp;&lt;plate id="fancy" /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento/&gt;</div>',
    curentLevel: 3,
    isDone: false,
    helpTitle: 'ID Selector',
    helpSubTitle: 'Select elements with an ID',
    helpSyntax: '#id',
    helpPromt: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    helpList: ['<strong>#cool</strong> selects any element with <strong>id="cool"</strong>', '<strong>ul#long</strong> selects <strong>ul id="long"</strong>'],
    correctAnswer: '#fancy'
  },
  {
    title: 'Select the apple on the plate',
    table: '<div data-tag="bento1" class="bento"></div><div data-tag="plate1" class="plate"><div data-tag="apple1" class="apple strobe"></div></div><div data-tag="apple2" class="apple"></div>',
    htmlField: '<div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag=" apple1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="apple2">&nbsp;&nbsp;&lt;apple /&gt;</div>',
    curentLevel: 4,
    isDone: false,
    helpTitle: 'Descendant Selector',
    helpSubTitle: 'Select an element inside another element',
    helpSyntax: 'A  B',
    helpPromt: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
    helpList: ['<strong>p</strong><strong>strong</strong>selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy</strong><strong>span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'],
    correctAnswer: 'plate apple'
  },

]

export default levels






