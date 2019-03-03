import { getTargetTag } from '../../src/utils/getTargetTag'

describe('src/utils/getTargetTag', () => {
  describe('getTargetTag()', () => {
    describe('when given MSEdge UserAgent', () => {
      it('returns "body"', () => {
        const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; ServiceUI 11) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299'
        expect(getTargetTag(userAgent)).toBe('body')
      })
    })

    describe('when given Firefox UserAgent', () => {
      it('returns "html"', () => {
        const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:10.0) Gecko/20100101 Firefox/62.0'
        expect(getTargetTag(userAgent)).toBe('html')
      })
    })

    describe('when given Chrome UserAgent', () => {
      it('returns "html"', () => {
        const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36'
        const documentElement = {
          style: ['WebkitAppearance']
        }
        expect(getTargetTag(userAgent)).toBe('html')
      })
    })
  })
})
