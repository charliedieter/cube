// Once again, eternally grateful to https://github.com/diervo/html5rubik/blob/master/tutorial/step3/rubik-simple.js for doing all of the heavy lifting here.
export const TWISTS = {
  "LM-left": {
    type: "twist",
    moves: {
      utl: "btl",
      ucl: "bcl",
      ubl: "bbl",
      ftl: "utl",
      fcl: "ucl",
      fbl: "ubl",
      dtl: "ftl",
      dcl: "fcl",
      dbl: "fbl",
      btl: "dtl",
      bcl: "dcl",
      bbl: "dbl",
      ltl: "lbl",
      lcl: "lbc",
      lbl: "lbr",
      ltc: "lcl",
      lbc: "lcr",
      ltr: "ltl",
      lcr: "ltc",
      lbr: "ltr",
      lcc: "lcc"
    }
  },
  "LM-right": {
    type: "twist",
    moves: {
      utl: "ftl",
      ucl: "fcl",
      ubl: "fbl",
      ftl: "dtl",
      fcl: "dcl",
      fbl: "dbl",
      dtl: "btl",
      dcl: "bcl",
      dbl: "bbl",
      btl: "utl",
      bcl: "ucl",
      bbl: "ubl",
      ltl: "ltr",
      lcl: "ltc",
      lbl: "ltl",
      ltc: "lcr",
      lbc: "lcl",
      ltr: "lbr",
      lcr: "lbc",
      lbr: "lbl",
      lcc: "lcc"
    }
  },
  "RM-right": {
    type: "twist",
    moves: {
      utr: "ftr",
      ucr: "fcr",
      ubr: "fbr",
      ftr: "dtr",
      fcr: "dcr",
      fbr: "dbr",
      dtr: "btr",
      dcr: "bcr",
      dbr: "bbr",
      btr: "utr",
      bcr: "ucr",
      bbr: "ubr",
      rtl: "rbl",
      rcl: "rbc",
      rbl: "rbr",
      rtc: "rcl",
      rcc: "rcc",
      rbc: "rcr",
      rtr: "rtl",
      rcr: "rtc",
      rbr: "rtr"
    }
  },
  "RM-left": {
    type: "twist",
    moves: {
      utr: "btr",
      ucr: "bcr",
      ubr: "bbr",
      ftr: "utr",
      fcr: "ucr",
      fbr: "ubr",
      dtr: "ftr",
      dcr: "fcr",
      dbr: "fbr",
      btr: "dtr",
      bcr: "dcr",
      bbr: "dbr",
      rtl: "rtr",
      rcl: "rtc",
      rbl: "rtl",
      rtc: "rcr",
      rbc: "rcl",
      rtr: "rbr",
      rcr: "rbc",
      rbr: "rbl",
      rcc: "rcc"
    }
  },
  "CM-right": {
    type: "twist",
    moves: {
      utc: "ftc",
      ucc: "fcc",
      ubc: "fbc",
      ftc: "dtc",
      fcc: "dcc",
      fbc: "dbc",
      dtc: "btc",
      dcc: "bcc",
      dbc: "bbc",
      btc: "utc",
      bcc: "ucc",
      bbc: "ubc"
    }
  },
  "CM-left": {
    type: "twist",
    moves: {
      utc: "btc",
      ucc: "bcc",
      ubc: "bbc",
      ftc: "utc",
      fcc: "ucc",
      fbc: "ubc",
      dtc: "ftc",
      dcc: "fcc",
      dbc: "fbc",
      btc: "dtc",
      bcc: "dcc",
      bbc: "dbc"
    }
  },
  "UE-left": {
    type: "twist",
    moves: {
      rtl: "ftl",
      rtc: "ftc",
      rtr: "ftr",
      ftl: "ltl",
      ftc: "ltc",
      ftr: "ltr",
      ltl: "bbr",
      ltc: "bbc",
      ltr: "bbl",
      bbr: "rtl",
      bbc: "rtc",
      bbl: "rtr",
      utl: "utr",
      ucl: "utc",
      ubl: "utl",
      utc: "ucr",
      ubc: "ucl",
      utr: "ubr",
      ucr: "ubc",
      ubr: "ubl",
      ucc: "ucc"
    }
  },
  "UE-right": {
    type: "twist",
    moves: {
      ltl: "ftl",
      ltc: "ftc",
      ltr: "ftr",
      ftl: "rtl",
      ftc: "rtc",
      ftr: "rtr",
      rtl: "bbr",
      rtc: "bbc",
      rtr: "bbl",
      bbr: "ltl",
      bbc: "ltc",
      bbl: "ltr",
      utl: "ubl",
      ucl: "ubc",
      ubl: "ubr",
      utc: "ucl",
      ucc: "ucc",
      ubc: "ucr",
      utr: "utl",
      ucr: "utc",
      ubr: "utr"
    }
  },
  "CE-right": {
    type: "twist",
    moves: {
      fcl: "rcl",
      fcc: "rcc",
      fcr: "rcr",
      lcl: "fcl",
      lcc: "fcc",
      lcr: "fcr",
      bcl: "lcr",
      bcc: "lcc",
      bcr: "lcl",
      rcl: "bcr",
      rcc: "bcc",
      rcr: "bcl"
    }
  },
  "CE-left": {
    type: "twist",
    moves: {
      fcl: "lcl",
      fcc: "lcc",
      fcr: "lcr",
      rcl: "fcl",
      rcc: "fcc",
      rcr: "fcr",
      bcl: "rcr",
      bcc: "rcc",
      bcr: "rcl",
      lcl: "bcr",
      lcc: "bcc",
      lcr: "bcl"
    }
  },
  "DE-left": {
    type: "twist",
    moves: {
      fbl: "lbl",
      fbc: "lbc",
      fbr: "lbr",
      lbl: "btr",
      lbc: "btc",
      lbr: "btl",
      btr: "rbl",
      btc: "rbc",
      btl: "rbr",
      rbl: "fbl",
      rbc: "fbc",
      rbr: "fbr",
      dtl: "dbl",
      dcl: "dbc",
      dbl: "dbr",
      dtc: "dcl",
      dcc: "dcc",
      dbc: "dcr",
      dtr: "dtl",
      dcr: "dtc",
      dbr: "dtr"
    }
  },
  "DE-right": {
    type: "twist",
    moves: {
      fbl: "rbl",
      fbc: "rbc",
      fbr: "rbr",
      rbl: "btr",
      rbc: "btc",
      rbr: "btl",
      btr: "lbl",
      btc: "lbc",
      btl: "lbr",
      lbl: "fbl",
      lbc: "fbc",
      lbr: "fbr",
      dtl: "dtr",
      dcl: "dtc",
      dbl: "dtl",
      dtc: "dcr",
      dbc: "dcl",
      dtr: "dbr",
      dcr: "dbc",
      dbr: "dbl",
      dcc: "dcc"
    }
  },
  "FS-left": {
    type: "twist",
    moves: {
      ubl: "lbr",
      ubc: "lcr",
      ubr: "ltr",
      lbr: "dtr",
      lcr: "dtc",
      ltr: "dtl",
      dtl: "rbl",
      dtc: "rcl",
      dtr: "rtl",
      rbl: "ubr",
      rcl: "ubc",
      rtl: "ubl",
      ftl: "fbl",
      fcl: "fbc",
      fbl: "fbr",
      ftc: "fcl",
      fcc: "fcc",
      fbc: "fcr",
      ftr: "ftl",
      fcr: "ftc",
      fbr: "ftr"
    }
  },
  "FS-right": {
    type: "twist",
    moves: {
      ubl: "rtl",
      ubc: "rcl",
      ubr: "rbl",
      lbr: "ubl",
      lcr: "ubc",
      ltr: "ubr",
      dtl: "ltr",
      dtc: "lcr",
      dtr: "lbr",
      rbl: "dtl",
      rcl: "dtc",
      rtl: "dtr",
      ftl: "ftr",
      fcl: "ftc",
      fbl: "ftl",
      ftc: "fcr",
      fbc: "fcl",
      ftr: "fbr",
      fcr: "fbc",
      fbr: "fbl",
      fcc: "fcc"
    }
  },
  "CS-left": {
    type: "twist",
    moves: {
      ucl: "lbc",
      ucc: "lcc",
      ucr: "ltc",
      ltc: "dcl",
      lcc: "dcc",
      lbc: "dcr",
      dcl: "rbc",
      dcc: "rcc",
      dcr: "rtc",
      rbc: "ucr",
      rcc: "ucc",
      rtc: "ucl"
    }
  },
  "CS-right": {
    type: "twist",
    moves: {
      lbc: "ucl",
      lcc: "ucc",
      ltc: "ucr",
      dcl: "ltc",
      dcc: "lcc",
      dcr: "lbc",
      rbc: "dcl",
      rcc: "dcc",
      rtc: "dcr",
      ucr: "rbc",
      ucc: "rcc",
      ucl: "rtc"
    }
  },
  "BS-right": {
    type: "twist",
    moves: {
      utl: "rtr",
      utc: "rcr",
      utr: "rbr",
      rtr: "dbr",
      rcr: "dbc",
      rbr: "dbl",
      dbr: "lbl",
      dbc: "lcl",
      dbl: "ltl",
      lbl: "utl",
      lcl: "utc",
      ltl: "utr",
      btl: "bbl",
      bcl: "bbc",
      bbl: "bbr",
      btc: "bcl",
      bcc: "bcc",
      bbc: "bcr",
      btr: "btl",
      bcr: "btc",
      bbr: "btr"
    }
  },
  "BS-left": {
    type: "twist",
    moves: {
      rtr: "utl",
      rcr: "utc",
      rbr: "utr",
      dbr: "rtr",
      dbc: "rcr",
      dbl: "rbr",
      lbl: "dbr",
      lcl: "dbc",
      ltl: "dbl",
      utl: "lbl",
      utc: "lcl",
      utr: "ltl",
      btl: "btr",
      bcl: "btc",
      bbl: "btl",
      btc: "bcr",
      bbc: "bcl",
      btr: "bbr",
      bcr: "bbc",
      bbr: "bbl",
      bcc: "bcc"
    }
  }
};

export const ROTATIONS = {
  down: {
    type: "rotation",
    moves: ["LM", "RM", "CM"].map(prefix =>
      TWISTS[`${prefix}-left`].moves
    ).reduce((acc, obj) => ({ ...acc, ...obj }), {})
  }
}

export default {
  ...TWISTS,
  ...ROTATIONS
};