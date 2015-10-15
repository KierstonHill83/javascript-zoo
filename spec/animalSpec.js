var Animal = require('../js/animal.js');


var animal;

//the describe just tells you what is being tested. Describes the overall test. the beforeEach function is what drives all the other tests. It gives you an object you need for everything else.

//There are smaller functions you are testing. Describe what each smaller test is looking for. Put in the smaller function. and put what you expect have happen.


describe('Animal', function(){

  beforeEach(function(){
    animal = new Animal("Fido", 27, "Pig");
  });

  describe('#oink', function(){
    it('should oink if it is a pig', function(){
      expect(animal.oink()).toEqual('oink');
    });
    it('should not oink if it is not pig', function(){
      lion = new Animal("Fido", 27, "Lion");
      expect(lion.oink()).toEqual('I\'m not a pig');
    });
  });

  describe('#growUp', function(){
    it('should increment the age by one', function(){
      animal.growUp();
      expect(animal.age).toEqual(28);
    });
  });

  describe('#awake', function(){
    it('should initially be off', function(){
      expect(animal.awake).toEqual('false');
    });
  });

   describe('#wakeUp', function(){
    it('should change state to awake', function(){
      animal.wakeUp();
      expect(animal.awake).toEqual('true');
    });
  });

  describe('#sleep', function(){
    it('should be sleeping', function(){
      animal.wakeUp();
      animal.sleep();
      expect(animal.awake).toEqual('false');
    });
  });

  describe('#feed', function(){
    it('should get fed if awake', function(){
      animal.wakeUp();
      expect(animal.feed()).toEqual("NOM NOM NOM");
    });
    it('not should get fed if sleeping', function(){
      expect(animal.feed()).toEqual("I'm not awake!");
    });
  });

});
//each "it" uses the condition that is stated in the describe above it. It is local.
