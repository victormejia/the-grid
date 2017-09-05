import { datetimeParse } from './datetime-parse'

describe('DateTime Parser', () => {
  it('returned value should contain date format dd/mm/yyyy', () => {
    const isoString = '1960-06-01T11:01:12.720Z'
    expect(datetimeParse(isoString)).toContain('06/01/1960')
  })

  it('returned value should contain time hh:mm[am|pm]', () => {
    const isoString = '1960-06-01T11:01:12.720Z'
    expect(datetimeParse(isoString)).toContain('11:01am')
  })

  it('should convert ISO string to correct date format (am)', () => {
    const isoString = '1960-06-01T11:01:12.720Z'
    expect(datetimeParse(isoString)).toBe('06/01/1960, 11:01am')
  })

  it('should convert ISO string to correct date format (pm)', () => {
    const isoString = '1980-10-04T21:35:51.869Z'
    expect(datetimeParse(isoString)).toBe('10/04/1980, 09:35pm')
  })
})
