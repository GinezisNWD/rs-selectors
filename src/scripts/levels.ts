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
    htmlField: '<div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="apple1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="apple2">&nbsp;&nbsp;&lt;apple /&gt;</div>',
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
  {
    title: 'Select the pickle on the fancy plate',
    table: '<div class="css-diner__table"><div data-tag="bento1" class="bento"><div data-tag="orange1" class="orange"></div></div><div data-tag="fancy1" class="fancy"><div data-tag="pickle1" class="pickle strobe"></div></div><div data-tag="plate1" class="plate"><div data-tag="pickle2" class="pickle"></div></div>',
    htmlField: '<div data-tag="bento1">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="fancy1">&nbsp;&nbsp;&lt;plate id="fancy"&gt;</div> <div data-tag="pickle1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="fancy1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="pickle2">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div>',
    curentLevel: 5,
    isDone: false,
    helpTitle: '',
    helpSubTitle: 'Combine the Descendant & ID Selectors',
    helpSyntax: '#id  A',
    helpPromt: 'You can combine any selector with the descendent selector.',
    helpList: ['<strong>#cool span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'],
    correctAnswer: '#fancy pickle'
  },
  {
    title: 'Select the small apples',
    table: '<div data-tag="apple1" class="apple"></div> <div data-tag="apple2" class="apple small strobe"></div> <div data-tag="plate1" class="plate"> <div data-tag="apple3" class="apple small strobe"></div> </div><div data-tag="plate2" class="plate"></div>',
    htmlField: '<div data-tag="apple1">&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="apple2">&nbsp;&nbsp;&lt;apple class="small" /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="apple3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;apple class="small" /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate /&gt;</div>',
    curentLevel: 6,
    isDone: false,
    helpTitle: 'Class Selector',
    helpSubTitle: 'Select elements by their class',
    helpSyntax: '.classname',
    helpPromt: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    helpList: ['<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'],
    correctAnswer: '.small'
  },
  {
    title: 'Select the small oranges',
    table: '<div class="css-diner__table"><div data-tag="apple1" class="apple"></div> <div data-tag="apple2" class="apple small"></div> <div data-tag="bento1" class="bento"> <div data-tag="orange1" class="orange small strobe"></div></div> <div data-tag="plate1" class="plate"> <div data-tag="orange2" class="orange"></div></div> <div data-tag="plate2" class="plate"> <div data-tag="orange3" class="orange small strobe"></div> </div>',
    htmlField: '<div data-tag="apple1">&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="apple2">&nbsp;&nbsp;&lt;apple class="small" /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange class="small" /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="orange2">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="orange3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange class="small" /&gt;</div><div data-tag="plate2">&nbsp;&nbsp;&lt;plate /&gt;</div>',
    curentLevel: 7,
    isDone: false,
    helpTitle: '',
    helpSubTitle: 'Combine the Class Selector',
    helpSyntax: 'A.className',
    helpPromt: 'You can combine the class selector with other selectors, like the type selector..',
    helpList: ['<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'],
    correctAnswer: 'orange.small'
  },
  {
    title: 'Select the small oranges in the bentos',
    table: '<div data-tag="bento1" class="bento"> <div data-tag="orange1" class="orange"></div></div> <div data-tag="orange2" class="orange small"></div> <div data-tag="bento2" class="bento"> <div data-tag="orange3" class="orange small strobe"></div></div> <div data-tag="bento3" class="bento"> <div data-tag="apple1" class="apple small"></div></div> <div data-tag="bento4" class="bento"> <div data-tag="orange4" class="orange small strobe"></div> </div>',
    htmlField: '<div data-tag="bento1">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="orange2">&nbsp;&nbsp;&lt;orange class="small" /&gt;</div> <div data-tag="bento2">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange class="small" /&gt;</div> <div data-tag="bento2">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="bento3">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="apple1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;apple class="small" /&gt;</div> <div data-tag="bento3">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="bento4">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange class="small" /&gt;</div> <div data-tag="bento4">&nbsp;&nbsp;&lt;bento /&gt;</div>',
    curentLevel: 8,
    isDone: false,
    helpTitle: '',
    helpSubTitle: 'You can do it...',
    helpSyntax: 'Put your back into it!',
    helpPromt: 'Combine what you learned in the last few levels to solve this one!',
    helpList: [''],
    correctAnswer: 'bento orange.small'
  },
  {
    title: 'Select all the plates and bentos',
    table: '<div data-tag="pickle1" class="pickle"></div> <div data-tag="plate1" class="plate strobe"> <div data-tag="pickle2" class="pickle strobe"></div> </div> <div data-tag="bento1" class="bento strobe"> <div data-tag="pickle3" class="pickle strobe"></div> </div> <div data-tag="plate2" class="plate strobe"> <div data-tag="pickle4" class="pickle strobe"></div> </div> <div data-tag="pickle5" class="pickle"></div>',
    htmlField: '<div data-tag="pickle1">&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="pickle2">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="pickle3">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="pickle4">&nbsp;&nbsp;&nbsp;&nbsp;&lt;pickle /&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="pickle5">&nbsp;&nbsp;&lt;pickle /&gt;</div>',
    curentLevel: 9,
    isDone: false,
    helpTitle: 'Comma Combinator',
    helpSubTitle: 'Combine, selectors, with... commas!',
    helpSyntax: 'A, B',
    helpPromt: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    helpList: ['<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'],
    correctAnswer: 'plate, bento'
  },
  {
    title: 'Select all the things!',
    table: '<div data-tag="apple1" class="apple strobe"></div> <div data-tag="plate1" class="plate strobe"> <div data-tag="orange1" class="orange small strobe"></div> </div> <div data-tag="bento1" class="bento strobe"></div> <div data-tag="bento2" class="bento strobe"> <div data-tag="orange2" class="orange strobe"></div> </div> <div data-tag="fancy1" class="fancy strobe"></div>',
    htmlField: '<div data-tag="apple1">&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag="orange1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange class="small" /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div><div data-tag="bento2">&nbsp;&nbsp;&lt;bento&gt;</div> <div data-tag="orange2">&nbsp;&nbsp;&nbsp;&nbsp;&lt;orange /&gt;</div> <div data-tag="bento2">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="fancy1">&nbsp;&nbsp;&lt;plate id="fancy" /&gt;</div>',
    curentLevel: 10,
    isDone: false,
    helpTitle: 'The Universal Selector',
    helpSubTitle: 'You can select everything!',
    helpSyntax: '*',
    helpPromt: 'You can select all elements with the universal selector!',
    helpList: ['<strong>p *</strong> selects any element inside all <tag>p</tag> elements.'],
    correctAnswer: '*'
  },

]







export { levels, Level }






