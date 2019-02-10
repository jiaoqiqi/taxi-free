const main = require('../main/main');

describe('taxi fee', function () {
    var kilo ;
    var waitMin ;
    it('公里数在2以内' , function(){
        kilo = 2;
        waitMin = 0;
        spyOn(console , 'log');
        main(kilo , waitMin);
        var expectResult = 6;

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });

    it('公里数在8以内' , function(){
        kilo = 7;
        waitMin = 2;
        spyOn(console , 'log');
        main(kilo , waitMin);
        var expectResult = 11;

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });

    it('公里数大于8' , function(){
        kilo = 10;
        waitMin = 20;
        spyOn(console , 'log');
        main(kilo , waitMin);
        var expectResult = 18;

        expect(console.log).toHaveBeenCalledWith(expectResult);
    });
});