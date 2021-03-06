var Animal = require('../js/animal.js'),

Zoo = require('../js/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation('Denver');
      expect(zoo.location).toEqual('Denver');
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual('open');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual('Open!');
    });
    it('should see if the zoo is closed', function(){
      expect(zoo.isOpen()).toEqual('closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals).toEqual([]);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);
      index = zoo.animals.length-1;
      expect(zoo.animals[index]).not.toEqual(pig);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      index = zoo.animals.length-1;
      expect(zoo.animals[index]).toEqual(pig);
    });

    it('should only add instances of animals', function(){
      zoo.open();
      zoo.addAnimal(zoo);
      expect(zoo.animals).not.toEqual([zoo]);
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals).toEqual([pig]);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      zoo.open();
      zoo.addAnimal(lion);
      zoo.removeAnimal(lion);
      expect(zoo.animals).toEqual([]);
    });
  });
});
