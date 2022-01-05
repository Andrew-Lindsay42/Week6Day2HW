const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    const t_rex = new Dinosaur('T-Rex', 'carnivore', 50);
    const stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 25);
    const velociraptor = new Dinosaur('Velociraptor', 'carnivore', 35);
    const park = new Park('Jurassic Park', 10, [t_rex, stegosaurus, velociraptor]);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [t_rex, stegosaurus, velociraptor])
  });

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
