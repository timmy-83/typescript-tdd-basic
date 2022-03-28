import { date } from './date'

describe('Date ', ()=>{
    test('imports module', ()=> {
        //Arrange
        const ONE_DAY_IN_MS = 3600 * 24 * 1000;
        const today = new Date()
        const twoDaysAgo = new Date(+today - 2* ONE_DAY_IN_MS)

        const twoDaysAgoArticle = {
            publicationDate: twoDaysAgo.toISOString()
        }
        
        //Act
        //Assert
        expect(date(twoDaysAgoArticle)).toBe(true)
    })
})