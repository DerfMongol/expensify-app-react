import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set start date action object', () => {
    const action = setStartDate(new Date(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: new Date(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(new Date(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: new Date(0)
    })
})

test('should generate set text filter action object with provided values', () => {
    const text = 'Billy Jean'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})
test('should generate set text filter action object with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})
test('should generate sort by amount action object', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})
test('should generate sort by date action object', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})