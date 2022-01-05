const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

    let t_rex;
    let stegosaurus;
    let velociraptor;
    let park;

  beforeEach(function () {
    t_rex = new Dinosaur('T-Rex', 'carnivore', 50);
    stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 25);
    velociraptor = new Dinosaur('Velociraptor', 'carnivore', 35);
    park = new Park('Jurassic Park', 10, [t_rex, stegosaurus, velociraptor]);
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
    assert.deepStrictEqual(actual, [t_rex, stegosaurus, velociraptor]);
  });

  it('should be able to add a dinosaur to its collection', function (){
    const new_dino = new Dinosaur('Brontosaurus', 'herbivore', 30);
    park.addDino(new_dino);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [t_rex, stegosaurus, velociraptor, new_dino]);
  });

  it('should be able to remove a dinosaur from its collection', function (){
    park.removeDino(t_rex);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [stegosaurus, velociraptor]);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function (){
    const actual = park.coolestDino();
    assert.deepStrictEqual(actual, t_rex);
  });

  it('should be able to find all dinosaurs of a particular species', function (){
    const velociraptor2 = new Dinosaur('Velociraptor', 'carnivore', 30);
    const velociraptor3 = new Dinosaur('Velociraptor', 'carnivore', 33);
    const velociraptor4 = new Dinosaur('Velociraptor', 'carnivore', 31);
    park.addDino(velociraptor2);
    park.addDino(velociraptor3);
    park.addDino(velociraptor4);

    const actual = park.findDinos('Velociraptor');
    assert.deepStrictEqual(actual, [velociraptor, velociraptor2, velociraptor3, velociraptor4])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
