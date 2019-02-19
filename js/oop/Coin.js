// jshint esversion: 6

// ECMAScript 2015, aka ECMAScript 6th Edition (latest major version; use in strict mode)
// ECMAScript 2017, aka ECMAScript 8th Edition (added async/await)


/**
* A coin to be used for a flipping action for decision making.<br/>
* For class definition guide see:<br/>
* <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes</a><br/>
* Documentation generated via <br/>
* <code>$jsdoc Coin.js</code>
* Usage:
* @example
* var c = new Coin("mycoinidentifier");
* console.log("heads: " + c.isHeads());
* @copyright Streusel Cake, 2019
* @license MIT
*/
class Coin {
  // the class body is subject to strict mode

  /**
  * Coin constructor
  *
  * @arg name {undefined} identifier for convenience
  * @constructs
  */
  constructor (n){
    // properties are defined via this in the class functions
    /** @member {} */
    this._name = n;
    /** @member {number} */
    this._heads_count = 0;
    /** @member {number} */
    this._tails_count = 0;
    /** @member {boolean} */
    this._observe = false;
    /** @member {float} */
    this._heads_chance = 0.5;
  }

  /**
  * get/set coin's name
  */
  get name(){
    return this._name;
  }
  set name(n){
    this._name = n;
  }


  /**
  * get/set whether the coin keeps track of flipping results (enable/disable)
  */
  set observe(o){
    this._observe = o;
  }
  get observe(){
    return this._observe;
  }

  /**
  * get/set the number of times the flipping of the coin resulted in heads during observation
  */
  set headsCount(c){
    this._heads_count = c;
  }
  get headsCount(){
    return this._heads_count;
  }

  /**
  * get/set the number of times the flipping of the coin resulted in tails during observation
  */
  set tailsCount(c){
    this._tails_count = c;
  }
  get tailsCount(){
    return this._tails_count;
  }

  /**
  * Calculates the chance for heads to be true given the observations
  */
  get headsChance(){
    return this._heads_count  / (this._heads_count + this._tails_count);
  }

  /**
  * Flip coin and report on if is heads.
  * It optionally calculates the results based on a given chance.
  * Also observes results (counts for heads and tails true) if coin is configured to count.
  * @see heads_count, tails_count
  * @arg heads_chance {float} chance for heads to be true
  * @return isheads {boolean} coin flipping result
  */
  isHeads(heads_chance=0.5){
    let h = Coin.staticIsHeads(heads_chance);
    if(this._observe){
      if(h){
        ++this._heads_count;
      } else {
        ++this._tails_count;
      }
    }
    return h;
  }

  /**
  * Calculates: Flip coin and tell if is heads.
  * It optionally calculates the results based on a given chance.
  * Random in [0.5, 1), therefore isheads uses >= to make equal chances for 0.5 as border.
  * @arg heads_chance {float} chance for heads to be true
  * @return isheads {boolean} coin flipping result
  */
  static staticIsHeads(heads_chance=0.5){
    return Math.random() >= heads_chance;
  }

  /**
  * Flips coin and check for both sides.
  * It optionally calculates the results based on a given chance.
  * @see isHeads
  * @arg heads_chance {float} chance for heads to be true
  * @return [heads, tails] {array} coin flipping result
  */
  flipCoin(heads_chance=0.5){
    var heads = isHeads(heads_chance);
    let tails = !heads;
    return [heads, tails];
  }

  /**
  * Uses the coin's counts to flip and check for heads.
  * This method doesn't flip the coin itself so that the counts remain untouched.
  * @return isheads {boolean} coin flipping result
  * @see staticIsHeadsObserved
  */
  isHeadsObserved(){
    return Coin.staticIsHeadsObserved(this._heads_count, this._tails_count);
  }

  /**
  * Uses the coin's counts flip and to check for both sides of the coin.
  * This method doesn't flip the coin itself so that the counts remain untouched.
  * @return [heads, tails] {array} coin flipping result
  * @see staticFlipCoinObserved
  */
  flipCoinObserved(){
    return Coin.staticFlipCoinObserved(this._heads_count, this._tails_count);
  }


  /**
  * Calculation of flip coin and report on if is heads or not;
  * based on a chance given as counts of an observation
  * @arg heads_count {int} number of times the coin showed heads during obeserveation
  * @arg tails_count {int} number of times the coin showed tails during obeserveation
  * @return isheads {boolean} coin flipping result
  * @see staticIsHeads
  */
  static staticIsHeadsObserved(heads_count, tails_count){
    var sum_count = heads_count + tails_count;
    var heads_chance = heads_count / sum_count;
    //console.log(heads_chance);
    //var normalized_tails_chance = tails_count / sum_count;
    return Coin.staticIsHeads(heads_chance);
  }


  /**
  * Calculation of flip coin and report on true or false for both sides;
  * based on a chance given as counts of an observation
  * @arg heads_count {int} number of times the coin showed heads during obeserveation
  * @arg tails_count {int} number of times the coin showed tails during obeserveation
  * @return [heads, tails] {array}
  * @see staticIsHeadsObserved
  */
  static staticFlipCoinObserved(heads_count, tails_count){
    let heads = Coin.staticIsHeadsObserved(heads_count, tails_count);
    let tails = !heads;
    return [heads, tails];
  }

}


/**
* This special coin allows the user to throw really high to make better decisions.
* However, flight times with functions from LongFlyingCoin are too long for a program to synchronously use the result!
* Thus, throwing this coin requires the use of callback methods.
* @extends Coin
*/
class LongFlyingCoin extends Coin
{
  /**
  * Throws really high and calls 'cb' as soon as the coin is back.
  * @async
  * @todo use coin as identifier instead of taskid
  * @arg taskid {undefined}
  * @arg cb {callback function}
  * @see isHeads
  */
  isHeadsThrowHigh(taskid, resolve){
    let time = Math.floor(Math.random() * (5000 - 2000)) + 2000; // random time between 2000 and 5000 to wait
    setTimeout( () => {
      resolve(taskid, super.isHeads());
    }, time);
  }

  // @throws (synonyms: @exception)
  // Describe what errors could be thrown.


}


// hack to make "exports" available in the browser as globals
if(typeof exports == "undefined"){
  var exports = window;
}

// exports in commonjs
exports.Coin = Coin;
exports.LongFlyingCoin = LongFlyingCoin;
