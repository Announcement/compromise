// convert british spellings into american ones
// built with patterns+exceptions from https://en.wikipedia.org/wiki/British_spelling
'use strict';

const patterns = [
  // ise -> ize
  {
    reg: /([^aeiou][iy])s(e|ed|es|ing)?$/,
    repl: '$1z$2'
  },
  // our -> or
  {
    reg: /(..)our(ly|y|ite|ed|ing|s|al|ous|ful)?$/,
    repl: '$1or$2'
  },

  // re -> er
  {
    reg: /(.[^cdnv])re(s)?$/,
    repl: '$1er$2'
  },
  // xion -> tion
  {
    reg: /([aeiou])xion([ed])?$/,
    repl: '$1tion$2'
  },
  //logue -> log
  {
    reg: /logue/,
    repl: 'log'
  },
  // ae -> e
  {
    reg: /([o|a])e/,
    repl: 'e'
  },
  //eing -> ing
  {
    reg: /e(ing|able)$/,
    repl: '$1'
  },
  // illful -> ilful
  {
    reg: /([aeiou]+[^aeiou]+[aeiou]+)ll(ful|ment|est|ing|or|er|ed)$/, //must be second-syllable
    repl: '$1l$2'
  },
  {
    reg: /(..)sation/,
    repl: '$1zation'
  },
  {
    reg: /isabl(i|e)/,
    repl: 'izabl$1'
  },
  {
    reg: /iliser/,
    repl: 'ilizer'
  },
  {
    reg: /(..)sing(ly)?/,
    repl: '$1zing$2'
  },
  {
    reg: /(i|a)niser/,
    repl: '$1nizer'
  },

  {
    reg: /isement/,
    repl: 'izement'
  },

  //re -> er
  {
    reg: /euvre/,
    repl: 'euver'
  },
  {
    reg: /outre/,
    repl: 'outer'
  },

  {
    reg: /centre/,
    repl: 'center'
  },
  {
    reg: /fibre/,
    repl: 'fiber'
  },

  {
    reg: /uring/,
    repl: 'oring'
  },
  {
    reg: /fence/,
    repl: 'fense'
  },

  {
    reg: /gramme/,
    repl: 'gram'
  },
  {
    reg: /anaes/,
    repl: 'anes'
  },
  {
    reg: /behove/,
    repl: 'behoove'
  },
  {
    reg: /baulk/,
    repl: 'balk'
  },



  {
    reg: /biass/,
    repl: 'bias'
  },
  {
    reg: /alyse/,
    repl: 'alyze'
  },

  {
    reg: /cheque/,
    repl: 'check'
  },

  {
    reg: /^cosi/,
    repl: 'cozi'
  },
  {
    reg: /defenc/,
    repl: 'defens'
  },
  {
    reg: /draught/,
    repl: 'draft'
  },
  {
    reg: /duell/,
    repl: 'duel'
  },
  {
    reg: /fillet/,
    repl: 'filet'
  },
  {
    reg: /fulfil/,
    repl: 'fulfill'
  },
  {
    reg: /gaol/,
    repl: 'jail'
  },
  {
    reg: /gauge/,
    repl: 'gage'
  },
  {
    reg: /grey/,
    repl: 'gray'
  },
  {
    reg: /licence/,
    repl: 'license'
  },
  {
    reg: /manoeuvre/,
    repl: 'maneuver'
  },
  {
    reg: /marvellous/,
    repl: 'marvelous'
  },
  {
    reg: /mould/,
    repl: 'mold'
  },

  {
    reg: /plough/,
    repl: 'plow'
  },
  {
    reg: /practise/,
    repl: 'practice'
  },

  {
    reg: /tranquill/,
    repl: 'tranquil'
  },
  {
    reg: /triall/,
    repl: 'trial'
  },
  {
    reg: /sceptic/,
    repl: 'skeptic'
  },
  {
    reg: /sulph/,
    repl: 'sulf'
  },
  {
    reg: /syphon/,
    repl: 'siphon'
  },
  {
    reg: /tonne/,
    repl: 'ton'
  },
  {
    reg: /anaesthetis/,
    repl: 'anesthetiz'
  }
];

const americanize = function(str) {
  for (let i = 0; i < patterns.length; i++) {
    if (str.match(patterns[i].reg)) {
      console.log(patterns[i]);
      return str.replace(patterns[i].reg, patterns[i].repl);
    }
  }

  return str;
};

// console.log(americanize("synthesise") === "synthesize")
console.log(americanize('are'));

module.exports = americanize;
