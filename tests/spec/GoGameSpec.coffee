describe 'A go game', ->

  beforeEach ->
    jasmine.addMatchers
      toBeEmpty: ->
        compare: (actual) ->
          expected = new GoGame()
          pass: actual.toString() == expected.toString()

    @game = new GoGame()

  it 'starts empty', ->
    expect @game
      .toBeEmpty()
