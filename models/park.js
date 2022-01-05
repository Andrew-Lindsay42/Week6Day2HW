const Park = function(name, ticketPrice, dinosaurs){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = dinosaurs;
};

Park.prototype.addDino = function (new_dino){
    this.dinosaurs.push(new_dino);
};

Park.prototype.removeDino = function (dino){
    const index = this.dinosaurs.indexOf(dino);
    if (index !== -1) {
        this.dinosaurs.splice(index, 1);
    };
};

Park.prototype.coolestDino = function (){
    let coolest_dino;
    let visitors = 0;
    for (let dino of this.dinosaurs){
        if (dino.guestsAttractedPerDay > visitors) {
            coolest_dino = dino;
            visitors = dino.guestsAttractedPerDay;
        };
    };
    return coolest_dino;
};

Park.prototype.findDinos = function (species){
    let dinos = [];
    for (let dino of this.dinosaurs){
        if (dino.species === species) {
            dinos.push(dino);
        };
    };
    return dinos;
};

Park.prototype.visitorsPerDay = function (){
    let visitors = 0;
    for (let dino of this.dinosaurs){
        visitors += dino.guestsAttractedPerDay;
    };
    return visitors;
};

Park.prototype.visitorsPerYear = function (){
    let visitors = this.visitorsPerDay() * 365;
    return visitors;
};

Park.prototype.yearRevenue = function (){
    let revenue = this.visitorsPerYear() * this.ticketPrice;
    return revenue;
}

Park.prototype.makeExtinct = function (species){
    let alive_dinos = [];
    for (let dino of this.dinosaurs){
        if (dino.species !== species) {
            alive_dinos.push(dino);
        };
    };
    this.dinosaurs = alive_dinos;
}

module.exports = Park;