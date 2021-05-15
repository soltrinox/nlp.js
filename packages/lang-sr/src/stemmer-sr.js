/*
 * Copyright (c) AXA Group Operations Spain S.A.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const { Among, BaseStemmer } = require('@nlpjs/core');

/* eslint-disable */
class StemmerSr extends BaseStemmer {
  constructor(container) {
    super(container);
    this.name = 'stemmer-sr';
    this.I_p1 = 0;
    this.I_p2 = 0;
    this.I_p3 = 0;
    this.I_sbst = 0;
  }

  r_cyr_to_lat() {
    var among_var;
    var v_1 = this.cursor;
    lab0: {
      while (true) {
        var v_2 = this.cursor;
        lab1: {
          golab2: while (true) {
            var v_3 = this.cursor;
            lab3: {
              this.bra = this.cursor;
              among_var = this.find_among(StemmerSr.a_0);
              if (among_var == 0) {
                break lab3;
              }
              this.ket = this.cursor;
              switch (among_var) {
                case 1:
                  if (!this.slice_from("a")) {
                    return false;
                  }
                  break;
                case 2:
                  if (!this.slice_from("b")) {
                    return false;
                  }
                  break;
                case 3:
                  if (!this.slice_from("v")) {
                    return false;
                  }
                  break;
                case 4:
                  if (!this.slice_from("g")) {
                    return false;
                  }
                  break;
                case 5:
                  if (!this.slice_from("d")) {
                    return false;
                  }
                  break;
                case 6:
                  if (!this.slice_from("\u0111")) {
                    return false;
                  }
                  break;
                case 7:
                  if (!this.slice_from("e")) {
                    return false;
                  }
                  break;
                case 8:
                  if (!this.slice_from("\u017E")) {
                    return false;
                  }
                  break;
                case 9:
                  if (!this.slice_from("z")) {
                    return false;
                  }
                  break;
                case 10:
                  if (!this.slice_from("i")) {
                    return false;
                  }
                  break;
                case 11:
                  if (!this.slice_from("j")) {
                    return false;
                  }
                  break;
                case 12:
                  if (!this.slice_from("k")) {
                    return false;
                  }
                  break;
                case 13:
                  if (!this.slice_from("l")) {
                    return false;
                  }
                  break;
                case 14:
                  if (!this.slice_from("lj")) {
                    return false;
                  }
                  break;
                case 15:
                  if (!this.slice_from("m")) {
                    return false;
                  }
                  break;
                case 16:
                  if (!this.slice_from("n")) {
                    return false;
                  }
                  break;
                case 17:
                  if (!this.slice_from("nj")) {
                    return false;
                  }
                  break;
                case 18:
                  if (!this.slice_from("o")) {
                    return false;
                  }
                  break;
                case 19:
                  if (!this.slice_from("p")) {
                    return false;
                  }
                  break;
                case 20:
                  if (!this.slice_from("r")) {
                    return false;
                  }
                  break;
                case 21:
                  if (!this.slice_from("s")) {
                    return false;
                  }
                  break;
                case 22:
                  if (!this.slice_from("t")) {
                    return false;
                  }
                  break;
                case 23:
                  if (!this.slice_from("\u0107")) {
                    return false;
                  }
                  break;
                case 24:
                  if (!this.slice_from("u")) {
                    return false;
                  }
                  break;
                case 25:
                  if (!this.slice_from("f")) {
                    return false;
                  }
                  break;
                case 26:
                  if (!this.slice_from("h")) {
                    return false;
                  }
                  break;
                case 27:
                  if (!this.slice_from("c")) {
                    return false;
                  }
                  break;
                case 28:
                  if (!this.slice_from("\u010D")) {
                    return false;
                  }
                  break;
                case 29:
                  if (!this.slice_from("d\u017E")) {
                    return false;
                  }
                  break;
                case 30:
                  if (!this.slice_from("\u0161")) {
                    return false;
                  }
                  break;
              }
              this.cursor = v_3;
              break golab2;
            }
            this.cursor = v_3;
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
          }
          continue;
        }
        this.cursor = v_2;
        break;
      }
    }
    this.cursor = v_1;
    return true;
  };

  r_prelude() {
    var v_1 = this.cursor;
    lab0: {
      while (true) {
        var v_2 = this.cursor;
        lab1: {
          golab2: while (true) {
            var v_3 = this.cursor;
            lab3: {
              if (!(this.in_grouping(StemmerSr.g_ca, 98, 382))) {
                break lab3;
              }
              this.bra = this.cursor;
              if (!(this.eq_s("ije"))) {
                break lab3;
              }
              this.ket = this.cursor;
              if (!(this.in_grouping(StemmerSr.g_ca, 98, 382))) {
                break lab3;
              }
              if (!this.slice_from("e")) {
                return false;
              }
              this.cursor = v_3;
              break golab2;
            }
            this.cursor = v_3;
            if (this.cursor >= this.limit) {
              break lab1;
            }
            this.cursor++;
          }
          continue;
        }
        this.cursor = v_2;
        break;
      }
    }
    this.cursor = v_1;
    var v_4 = this.cursor;
    lab4: {
      while (true) {
        var v_5 = this.cursor;
        lab5: {
          golab6: while (true) {
            var v_6 = this.cursor;
            lab7: {
              if (!(this.in_grouping(StemmerSr.g_ca, 98, 382))) {
                break lab7;
              }
              this.bra = this.cursor;
              if (!(this.eq_s("je"))) {
                break lab7;
              }
              this.ket = this.cursor;
              if (!(this.in_grouping(StemmerSr.g_ca, 98, 382))) {
                break lab7;
              }
              if (!this.slice_from("e")) {
                return false;
              }
              this.cursor = v_6;
              break golab6;
            }
            this.cursor = v_6;
            if (this.cursor >= this.limit) {
              break lab5;
            }
            this.cursor++;
          }
          continue;
        }
        this.cursor = v_5;
        break;
      }
    }
    this.cursor = v_4;
    var v_7 = this.cursor;
    lab8: {
      while (true) {
        var v_8 = this.cursor;
        lab9: {
          golab10: while (true) {
            var v_9 = this.cursor;
            lab11: {
              this.bra = this.cursor;
              if (!(this.eq_s("dj"))) {
                break lab11;
              }
              this.ket = this.cursor;
              if (!this.slice_from("\u0111")) {
                return false;
              }
              this.cursor = v_9;
              break golab10;
            }
            this.cursor = v_9;
            if (this.cursor >= this.limit) {
              break lab9;
            }
            this.cursor++;
          }
          continue;
        }
        this.cursor = v_8;
        break;
      }
    }
    this.cursor = v_7;
    return true;
  };

  r_mark_regions() {
    this.I_p3 = 0;
    var v_1 = this.cursor;
    lab0: {
      golab1: while (true) {
        lab2: {
          if (!(this.in_grouping(StemmerSr.g_sa, 263, 382))) {
            break lab2;
          }
          break golab1;
        }
        if (this.cursor >= this.limit) {
          break lab0;
        }
        this.cursor++;
      }
      this.I_p3 = this.cursor;
    }
    this.cursor = v_1;
    this.I_p1 = this.limit;
    this.I_p2 = 0;
    var v_3 = this.cursor;
    lab3: {
      golab4: while (true) {
        lab5: {
          if (!(this.eq_s("r"))) {
            break lab5;
          }
          break golab4;
        }
        if (this.cursor >= this.limit) {
          break lab3;
        }
        this.cursor++;
      }
      this.I_p2 = this.cursor;
    }
    this.cursor = v_3;
    var v_5 = this.cursor;
    lab6: {
      golab7: while (true) {
        lab8: {
          if (!(this.in_grouping(StemmerSr.g_v, 97, 117))) {
            break lab8;
          }
          break golab7;
        }
        if (this.cursor >= this.limit) {
          break lab6;
        }
        this.cursor++;
      }
      this.I_p1 = this.cursor;
      this.I_sbst = this.cursor;
    }
    this.cursor = v_5;
    lab9: {
      if (!(this.I_p2 != 0)) {
        break lab9;
      }
      if (!(this.I_p2 < this.I_p1)) {
        break lab9;
      }
      this.I_sbst -= this.I_p2;
      if (!(this.I_sbst > 1)) {
        break lab9;
      }
      this.I_p1 = this.I_p2;
    }
    if (!(this.I_p1 < 2)) {
      return false;
    }
    lab10: {
      var v_8 = this.cursor;
      lab11: {
        if (this.I_p1 !== this.I_p2) {
          break lab11;
        }
        golab12: while (true) {
          lab13: {
            if (!(this.eq_s("r"))) {
              break lab13;
            }
            break golab12;
          }
          if (this.cursor >= this.limit) {
            break lab11;
          }
          this.cursor++;
        }
        golab14: while (true) {
          lab15: {
            if (!(this.out_grouping(StemmerSr.g_rg, 114, 114))) {
              break lab15;
            }
            break golab14;
          }
          if (this.cursor >= this.limit) {
            break lab11;
          }
          this.cursor++;
        }
        break lab10;
      }
      this.cursor = v_8;
      if (!(this.I_p1 != this.I_p2)) {
        return false;
      }
      golab16: while (true) {
        lab17: {
          if (!(this.in_grouping(StemmerSr.g_v, 97, 117))) {
            break lab17;
          }
          break golab16;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
      golab18: while (true) {
        lab19: {
          if (!(this.out_grouping(StemmerSr.g_v, 97, 117))) {
            break lab19;
          }
          break golab18;
        }
        if (this.cursor >= this.limit) {
          return false;
        }
        this.cursor++;
      }
    }
    this.I_p1 = this.cursor;
    return true;
  }

  r_R1() {
    if (!(this.I_p1 <= this.cursor)) {
      return false;
    }
    return true;
  };

  r_R2() {
    if (this.I_p3 !== 0) {
      return false;
    }
    return true;
  }

  r_Step_1() {
    var among_var;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerSr.a_1);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    switch (among_var) {
      case 1:
        if (!this.slice_from("loga")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("peh")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("vojka")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("bojka")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("jak")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("\u010Dajni")) {
          return false;
        }
        break;
      case 7:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("cajni")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("erni")) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_from("larni")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("esni")) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from("anjca")) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from("ajca")) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from("ljca")) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_from("ejca")) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_from("ojca")) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_from("ajka")) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_from("ojka")) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_from("\u0161ca")) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from("ing")) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_from("tvenik")) {
          return false;
        }
        break;
      case 21:
        if (!this.slice_from("tetika")) {
          return false;
        }
        break;
      case 22:
        if (!this.slice_from("nstva")) {
          return false;
        }
        break;
      case 23:
        if (!this.slice_from("nik")) {
          return false;
        }
        break;
      case 24:
        if (!this.slice_from("tik")) {
          return false;
        }
        break;
      case 25:
        if (!this.slice_from("zik")) {
          return false;
        }
        break;
      case 26:
        if (!this.slice_from("snik")) {
          return false;
        }
        break;
      case 27:
        if (!this.slice_from("kusi")) {
          return false;
        }
        break;
      case 28:
        if (!this.slice_from("kusni")) {
          return false;
        }
        break;
      case 29:
        if (!this.slice_from("kustva")) {
          return false;
        }
        break;
      case 30:
        if (!this.slice_from("du\u0161ni")) {
          return false;
        }
        break;
      case 31:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("dusni")) {
          return false;
        }
        break;
      case 32:
        if (!this.slice_from("antni")) {
          return false;
        }
        break;
      case 33:
        if (!this.slice_from("bilni")) {
          return false;
        }
        break;
      case 34:
        if (!this.slice_from("tilni")) {
          return false;
        }
        break;
      case 35:
        if (!this.slice_from("avilni")) {
          return false;
        }
        break;
      case 36:
        if (!this.slice_from("silni")) {
          return false;
        }
        break;
      case 37:
        if (!this.slice_from("gilni")) {
          return false;
        }
        break;
      case 38:
        if (!this.slice_from("rilni")) {
          return false;
        }
        break;
      case 39:
        if (!this.slice_from("nilni")) {
          return false;
        }
        break;
      case 40:
        if (!this.slice_from("alni")) {
          return false;
        }
        break;
      case 41:
        if (!this.slice_from("ozni")) {
          return false;
        }
        break;
      case 42:
        if (!this.slice_from("ravi")) {
          return false;
        }
        break;
      case 43:
        if (!this.slice_from("stavni")) {
          return false;
        }
        break;
      case 44:
        if (!this.slice_from("pravni")) {
          return false;
        }
        break;
      case 45:
        if (!this.slice_from("tivni")) {
          return false;
        }
        break;
      case 46:
        if (!this.slice_from("sivni")) {
          return false;
        }
        break;
      case 47:
        if (!this.slice_from("atni")) {
          return false;
        }
        break;
      case 48:
        if (!this.slice_from("enta")) {
          return false;
        }
        break;
      case 49:
        if (!this.slice_from("tetni")) {
          return false;
        }
        break;
      case 50:
        if (!this.slice_from("pletni")) {
          return false;
        }
        break;
      case 51:
        if (!this.slice_from("\u0161avi")) {
          return false;
        }
        break;
      case 52:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("savi")) {
          return false;
        }
        break;
      case 53:
        if (!this.slice_from("anta")) {
          return false;
        }
        break;
      case 54:
        if (!this.slice_from("a\u010Dka")) {
          return false;
        }
        break;
      case 55:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("acka")) {
          return false;
        }
        break;
      case 56:
        if (!this.slice_from("u\u0161ka")) {
          return false;
        }
        break;
      case 57:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("uska")) {
          return false;
        }
        break;
      case 58:
        if (!this.slice_from("atka")) {
          return false;
        }
        break;
      case 59:
        if (!this.slice_from("etka")) {
          return false;
        }
        break;
      case 60:
        if (!this.slice_from("itka")) {
          return false;
        }
        break;
      case 61:
        if (!this.slice_from("otka")) {
          return false;
        }
        break;
      case 62:
        if (!this.slice_from("utka")) {
          return false;
        }
        break;
      case 63:
        if (!this.slice_from("eskna")) {
          return false;
        }
        break;
      case 64:
        if (!this.slice_from("ti\u010Dni")) {
          return false;
        }
        break;
      case 65:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ticni")) {
          return false;
        }
        break;
      case 66:
        if (!this.slice_from("ojska")) {
          return false;
        }
        break;
      case 67:
        if (!this.slice_from("esma")) {
          return false;
        }
        break;
      case 68:
        if (!this.slice_from("metra")) {
          return false;
        }
        break;
      case 69:
        if (!this.slice_from("centra")) {
          return false;
        }
        break;
      case 70:
        if (!this.slice_from("istra")) {
          return false;
        }
        break;
      case 71:
        if (!this.slice_from("osti")) {
          return false;
        }
        break;
      case 72:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("osti")) {
          return false;
        }
        break;
      case 73:
        if (!this.slice_from("dba")) {
          return false;
        }
        break;
      case 74:
        if (!this.slice_from("\u010Dka")) {
          return false;
        }
        break;
      case 75:
        if (!this.slice_from("mca")) {
          return false;
        }
        break;
      case 76:
        if (!this.slice_from("nca")) {
          return false;
        }
        break;
      case 77:
        if (!this.slice_from("voljni")) {
          return false;
        }
        break;
      case 78:
        if (!this.slice_from("anki")) {
          return false;
        }
        break;
      case 79:
        if (!this.slice_from("vca")) {
          return false;
        }
        break;
      case 80:
        if (!this.slice_from("sca")) {
          return false;
        }
        break;
      case 81:
        if (!this.slice_from("rca")) {
          return false;
        }
        break;
      case 82:
        if (!this.slice_from("alca")) {
          return false;
        }
        break;
      case 83:
        if (!this.slice_from("elca")) {
          return false;
        }
        break;
      case 84:
        if (!this.slice_from("olca")) {
          return false;
        }
        break;
      case 85:
        if (!this.slice_from("njca")) {
          return false;
        }
        break;
      case 86:
        if (!this.slice_from("ekta")) {
          return false;
        }
        break;
      case 87:
        if (!this.slice_from("izma")) {
          return false;
        }
        break;
      case 88:
        if (!this.slice_from("jebi")) {
          return false;
        }
        break;
      case 89:
        if (!this.slice_from("baci")) {
          return false;
        }
        break;
      case 90:
        if (!this.slice_from("a\u0161ni")) {
          return false;
        }
        break;
      case 91:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("asni")) {
          return false;
        }
        break;
    }
    return true;
  };

  r_Step_2() {
    var among_var;
    this.ket = this.cursor;
    among_var = this.find_among_b(StemmerSr.a_2);
    if (among_var == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    switch (among_var) {
      case 1:
        if (!this.slice_from("sk")) {
          return false;
        }
        break;
      case 2:
        if (!this.slice_from("\u0161k")) {
          return false;
        }
        break;
      case 3:
        if (!this.slice_from("stv")) {
          return false;
        }
        break;
      case 4:
        if (!this.slice_from("\u0161tv")) {
          return false;
        }
        break;
      case 5:
        if (!this.slice_from("tanij")) {
          return false;
        }
        break;
      case 6:
        if (!this.slice_from("manij")) {
          return false;
        }
        break;
      case 7:
        if (!this.slice_from("panij")) {
          return false;
        }
        break;
      case 8:
        if (!this.slice_from("ranij")) {
          return false;
        }
        break;
      case 9:
        if (!this.slice_from("ganij")) {
          return false;
        }
        break;
      case 10:
        if (!this.slice_from("an")) {
          return false;
        }
        break;
      case 11:
        if (!this.slice_from("in")) {
          return false;
        }
        break;
      case 12:
        if (!this.slice_from("on")) {
          return false;
        }
        break;
      case 13:
        if (!this.slice_from("n")) {
          return false;
        }
        break;
      case 14:
        if (!this.slice_from("a\u0107")) {
          return false;
        }
        break;
      case 15:
        if (!this.slice_from("e\u0107")) {
          return false;
        }
        break;
      case 16:
        if (!this.slice_from("u\u0107")) {
          return false;
        }
        break;
      case 17:
        if (!this.slice_from("ugov")) {
          return false;
        }
        break;
      case 18:
        if (!this.slice_from("ug")) {
          return false;
        }
        break;
      case 19:
        if (!this.slice_from("log")) {
          return false;
        }
        break;
      case 20:
        if (!this.slice_from("g")) {
          return false;
        }
        break;
      case 21:
        if (!this.slice_from("rari")) {
          return false;
        }
        break;
      case 22:
        if (!this.slice_from("oti")) {
          return false;
        }
        break;
      case 23:
        if (!this.slice_from("si")) {
          return false;
        }
        break;
      case 24:
        if (!this.slice_from("li")) {
          return false;
        }
        break;
      case 25:
        if (!this.slice_from("uj")) {
          return false;
        }
        break;
      case 26:
        if (!this.slice_from("caj")) {
          return false;
        }
        break;
      case 27:
        if (!this.slice_from("\u010Daj")) {
          return false;
        }
        break;
      case 28:
        if (!this.slice_from("\u0107aj")) {
          return false;
        }
        break;
      case 29:
        if (!this.slice_from("\u0111aj")) {
          return false;
        }
        break;
      case 30:
        if (!this.slice_from("laj")) {
          return false;
        }
        break;
      case 31:
        if (!this.slice_from("raj")) {
          return false;
        }
        break;
      case 32:
        if (!this.slice_from("bij")) {
          return false;
        }
        break;
      case 33:
        if (!this.slice_from("cij")) {
          return false;
        }
        break;
      case 34:
        if (!this.slice_from("dij")) {
          return false;
        }
        break;
      case 35:
        if (!this.slice_from("lij")) {
          return false;
        }
        break;
      case 36:
        if (!this.slice_from("nij")) {
          return false;
        }
        break;
      case 37:
        if (!this.slice_from("mij")) {
          return false;
        }
        break;
      case 38:
        if (!this.slice_from("\u017Eij")) {
          return false;
        }
        break;
      case 39:
        if (!this.slice_from("gij")) {
          return false;
        }
        break;
      case 40:
        if (!this.slice_from("fij")) {
          return false;
        }
        break;
      case 41:
        if (!this.slice_from("pij")) {
          return false;
        }
        break;
      case 42:
        if (!this.slice_from("rij")) {
          return false;
        }
        break;
      case 43:
        if (!this.slice_from("sij")) {
          return false;
        }
        break;
      case 44:
        if (!this.slice_from("tij")) {
          return false;
        }
        break;
      case 45:
        if (!this.slice_from("zij")) {
          return false;
        }
        break;
      case 46:
        if (!this.slice_from("nal")) {
          return false;
        }
        break;
      case 47:
        if (!this.slice_from("ijal")) {
          return false;
        }
        break;
      case 48:
        if (!this.slice_from("ozil")) {
          return false;
        }
        break;
      case 49:
        if (!this.slice_from("olov")) {
          return false;
        }
        break;
      case 50:
        if (!this.slice_from("ol")) {
          return false;
        }
        break;
      case 51:
        if (!this.slice_from("lem")) {
          return false;
        }
        break;
      case 52:
        if (!this.slice_from("ram")) {
          return false;
        }
        break;
      case 53:
        if (!this.slice_from("ar")) {
          return false;
        }
        break;
      case 54:
        if (!this.slice_from("dr")) {
          return false;
        }
        break;
      case 55:
        if (!this.slice_from("er")) {
          return false;
        }
        break;
      case 56:
        if (!this.slice_from("or")) {
          return false;
        }
        break;
      case 57:
        if (!this.slice_from("es")) {
          return false;
        }
        break;
      case 58:
        if (!this.slice_from("is")) {
          return false;
        }
        break;
      case 59:
        if (!this.slice_from("ta\u0161")) {
          return false;
        }
        break;
      case 60:
        if (!this.slice_from("na\u0161")) {
          return false;
        }
        break;
      case 61:
        if (!this.slice_from("ja\u0161")) {
          return false;
        }
        break;
      case 62:
        if (!this.slice_from("ka\u0161")) {
          return false;
        }
        break;
      case 63:
        if (!this.slice_from("ba\u0161")) {
          return false;
        }
        break;
      case 64:
        if (!this.slice_from("ga\u0161")) {
          return false;
        }
        break;
      case 65:
        if (!this.slice_from("va\u0161")) {
          return false;
        }
        break;
      case 66:
        if (!this.slice_from("e\u0161")) {
          return false;
        }
        break;
      case 67:
        if (!this.slice_from("i\u0161")) {
          return false;
        }
        break;
      case 68:
        if (!this.slice_from("ikat")) {
          return false;
        }
        break;
      case 69:
        if (!this.slice_from("lat")) {
          return false;
        }
        break;
      case 70:
        if (!this.slice_from("et")) {
          return false;
        }
        break;
      case 71:
        if (!this.slice_from("est")) {
          return false;
        }
        break;
      case 72:
        if (!this.slice_from("ist")) {
          return false;
        }
        break;
      case 73:
        if (!this.slice_from("kst")) {
          return false;
        }
        break;
      case 74:
        if (!this.slice_from("ost")) {
          return false;
        }
        break;
      case 75:
        if (!this.slice_from("i\u0161t")) {
          return false;
        }
        break;
      case 76:
        if (!this.slice_from("ova")) {
          return false;
        }
        break;
      case 77:
        if (!this.slice_from("av")) {
          return false;
        }
        break;
      case 78:
        if (!this.slice_from("ev")) {
          return false;
        }
        break;
      case 79:
        if (!this.slice_from("iv")) {
          return false;
        }
        break;
      case 80:
        if (!this.slice_from("ov")) {
          return false;
        }
        break;
      case 81:
        if (!this.slice_from("mov")) {
          return false;
        }
        break;
      case 82:
        if (!this.slice_from("lov")) {
          return false;
        }
        break;
      case 83:
        if (!this.slice_from("el")) {
          return false;
        }
        break;
      case 84:
        if (!this.slice_from("anj")) {
          return false;
        }
        break;
      case 85:
        if (!this.slice_from("enj")) {
          return false;
        }
        break;
      case 86:
        if (!this.slice_from("\u0161nj")) {
          return false;
        }
        break;
      case 87:
        if (!this.slice_from("en")) {
          return false;
        }
        break;
      case 88:
        if (!this.slice_from("\u0161n")) {
          return false;
        }
        break;
      case 89:
        if (!this.slice_from("\u010Din")) {
          return false;
        }
        break;
      case 90:
        if (!this.slice_from("ro\u0161i")) {
          return false;
        }
        break;
      case 91:
        if (!this.slice_from("o\u0161")) {
          return false;
        }
        break;
      case 92:
        if (!this.slice_from("evit")) {
          return false;
        }
        break;
      case 93:
        if (!this.slice_from("ovit")) {
          return false;
        }
        break;
      case 94:
        if (!this.slice_from("ast")) {
          return false;
        }
        break;
      case 95:
        if (!this.slice_from("k")) {
          return false;
        }
        break;
      case 96:
        if (!this.slice_from("eva")) {
          return false;
        }
        break;
      case 97:
        if (!this.slice_from("ava")) {
          return false;
        }
        break;
      case 98:
        if (!this.slice_from("iva")) {
          return false;
        }
        break;
      case 99:
        if (!this.slice_from("uva")) {
          return false;
        }
        break;
      case 100:
        if (!this.slice_from("ir")) {
          return false;
        }
        break;
      case 101:
        if (!this.slice_from("a\u010D")) {
          return false;
        }
        break;
      case 102:
        if (!this.slice_from("a\u010Da")) {
          return false;
        }
        break;
      case 103:
        if (!this.slice_from("ni")) {
          return false;
        }
        break;
      case 104:
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 105:
        if (!this.slice_from("ur")) {
          return false;
        }
        break;
      case 106:
        if (!this.slice_from("astaj")) {
          return false;
        }
        break;
      case 107:
        if (!this.slice_from("istaj")) {
          return false;
        }
        break;
      case 108:
        if (!this.slice_from("ostaj")) {
          return false;
        }
        break;
      case 109:
        if (!this.slice_from("aj")) {
          return false;
        }
        break;
      case 110:
        if (!this.slice_from("asta")) {
          return false;
        }
        break;
      case 111:
        if (!this.slice_from("ista")) {
          return false;
        }
        break;
      case 112:
        if (!this.slice_from("osta")) {
          return false;
        }
        break;
      case 113:
        if (!this.slice_from("ta")) {
          return false;
        }
        break;
      case 114:
        if (!this.slice_from("inj")) {
          return false;
        }
        break;
      case 115:
        if (!this.slice_from("as")) {
          return false;
        }
        break;
      case 116:
        if (!this.slice_from("i")) {
          return false;
        }
        break;
      case 117:
        if (!this.slice_from("lu\u010D")) {
          return false;
        }
        break;
      case 118:
        if (!this.slice_from("jeti")) {
          return false;
        }
        break;
      case 119:
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 120:
        if (!this.slice_from("at")) {
          return false;
        }
        break;
      case 121:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("luc")) {
          return false;
        }
        break;
      case 122:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("snj")) {
          return false;
        }
        break;
      case 123:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("os")) {
          return false;
        }
        break;
      case 124:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ac")) {
          return false;
        }
        break;
      case 125:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ec")) {
          return false;
        }
        break;
      case 126:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("uc")) {
          return false;
        }
        break;
      case 127:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("rosi")) {
          return false;
        }
        break;
      case 128:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("aca")) {
          return false;
        }
        break;
      case 129:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("jas")) {
          return false;
        }
        break;
      case 130:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("tas")) {
          return false;
        }
        break;
      case 131:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("gas")) {
          return false;
        }
        break;
      case 132:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("nas")) {
          return false;
        }
        break;
      case 133:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("kas")) {
          return false;
        }
        break;
      case 134:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("vas")) {
          return false;
        }
        break;
      case 135:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("bas")) {
          return false;
        }
        break;
      case 136:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("as")) {
          return false;
        }
        break;
      case 137:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("cin")) {
          return false;
        }
        break;
      case 138:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("astaj")) {
          return false;
        }
        break;
      case 139:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("istaj")) {
          return false;
        }
        break;
      case 140:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ostaj")) {
          return false;
        }
        break;
      case 141:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("asta")) {
          return false;
        }
        break;
      case 142:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ista")) {
          return false;
        }
        break;
      case 143:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("osta")) {
          return false;
        }
        break;
      case 144:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ava")) {
          return false;
        }
        break;
      case 145:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("eva")) {
          return false;
        }
        break;
      case 146:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("iva")) {
          return false;
        }
        break;
      case 147:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("uva")) {
          return false;
        }
        break;
      case 148:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ova")) {
          return false;
        }
        break;
      case 149:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("jeti")) {
          return false;
        }
        break;
      case 150:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("inj")) {
          return false;
        }
        break;
      case 151:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ist")) {
          return false;
        }
        break;
      case 152:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("es")) {
          return false;
        }
        break;
      case 153:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("et")) {
          return false;
        }
        break;
      case 154:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("is")) {
          return false;
        }
        break;
      case 155:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ir")) {
          return false;
        }
        break;
      case 156:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ur")) {
          return false;
        }
        break;
      case 157:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("uj")) {
          return false;
        }
        break;
      case 158:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ni")) {
          return false;
        }
        break;
      case 159:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("sn")) {
          return false;
        }
        break;
      case 160:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("ta")) {
          return false;
        }
        break;
      case 161:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("a")) {
          return false;
        }
        break;
      case 162:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("i")) {
          return false;
        }
        break;
      case 163:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("e")) {
          return false;
        }
        break;
      case 164:
        if (!this.r_R2()) {
          return false;
        }
        if (!this.slice_from("n")) {
          return false;
        }
        break;
    }
    return true;
  };

  r_Step_3() {
    this.ket = this.cursor;
    if (this.find_among_b(StemmerSr.a_3) == 0) {
      return false;
    }
    this.bra = this.cursor;
    if (!this.r_R1()) {
      return false;
    }
    if (!this.slice_from("")) {
      return false;
    }
    return true;
  };


  innerStem() {
    this.r_cyr_to_lat();
    this.r_prelude();
    var v_3 = this.cursor;
    this.r_mark_regions();
    this.cursor = v_3;
    this.limit_backward = this.cursor; this.cursor = this.limit;
    var v_4 = this.limit - this.cursor;
    this.r_Step_1();
    this.cursor = this.limit - v_4;
    var v_5 = this.limit - this.cursor;
    lab0: {
      lab1: {
        var v_6 = this.limit - this.cursor;
        lab2: {
          if (!this.r_Step_2()) {
            break lab2;
          }
          break lab1;
        }
        this.cursor = this.limit - v_6;
        if (!this.r_Step_3()) {
          break lab0;
        }
      }
    }
    this.cursor = this.limit - v_5;
    this.cursor = this.limit_backward;
    return true;
  }
}

StemmerSr.a_0 = [
  ["\u0430", -1, 1],
  ["\u0431", -1, 2],
  ["\u0432", -1, 3],
  ["\u0433", -1, 4],
  ["\u0434", -1, 5],
  ["\u0435", -1, 7],
  ["\u0436", -1, 8],
  ["\u0437", -1, 9],
  ["\u0438", -1, 10],
  ["\u043A", -1, 12],
  ["\u043B", -1, 13],
  ["\u043C", -1, 15],
  ["\u043D", -1, 16],
  ["\u043E", -1, 18],
  ["\u043F", -1, 19],
  ["\u0440", -1, 20],
  ["\u0441", -1, 21],
  ["\u0442", -1, 22],
  ["\u0443", -1, 24],
  ["\u0444", -1, 25],
  ["\u0445", -1, 26],
  ["\u0446", -1, 27],
  ["\u0447", -1, 28],
  ["\u0448", -1, 30],
  ["\u0452", -1, 6],
  ["\u0458", -1, 11],
  ["\u0459", -1, 14],
  ["\u045A", -1, 17],
  ["\u045B", -1, 23],
  ["\u045F", -1, 29]
].map(x => new Among(x[0], x[1], x[2]));

StemmerSr.a_1 = [
  ["daba", -1, 73],
  ["ajaca", -1, 12],
  ["ejaca", -1, 14],
  ["ljaca", -1, 13],
  ["njaca", -1, 85],
  ["ojaca", -1, 15],
  ["alaca", -1, 82],
  ["elaca", -1, 83],
  ["olaca", -1, 84],
  ["maca", -1, 75],
  ["naca", -1, 76],
  ["raca", -1, 81],
  ["saca", -1, 80],
  ["vaca", -1, 79],
  ["\u0161aca", -1, 18],
  ["aoca", -1, 82],
  ["acaka", -1, 55],
  ["ajaka", -1, 16],
  ["ojaka", -1, 17],
  ["anaka", -1, 78],
  ["ataka", -1, 58],
  ["etaka", -1, 59],
  ["itaka", -1, 60],
  ["otaka", -1, 61],
  ["utaka", -1, 62],
  ["a\u010Daka", -1, 54],
  ["esama", -1, 67],
  ["izama", -1, 87],
  ["jacima", -1, 5],
  ["nicima", -1, 23],
  ["ticima", -1, 24],
  ["teticima", 30, 21],
  ["zicima", -1, 25],
  ["atcima", -1, 58],
  ["utcima", -1, 62],
  ["\u010Dcima", -1, 74],
  ["pesima", -1, 2],
  ["inzima", -1, 19],
  ["lozima", -1, 1],
  ["metara", -1, 68],
  ["centara", -1, 69],
  ["istara", -1, 70],
  ["ekata", -1, 86],
  ["anata", -1, 53],
  ["nstava", -1, 22],
  ["kustava", -1, 29],
  ["ajac", -1, 12],
  ["ejac", -1, 14],
  ["ljac", -1, 13],
  ["njac", -1, 85],
  ["anjac", 49, 11],
  ["ojac", -1, 15],
  ["alac", -1, 82],
  ["elac", -1, 83],
  ["olac", -1, 84],
  ["mac", -1, 75],
  ["nac", -1, 76],
  ["rac", -1, 81],
  ["sac", -1, 80],
  ["vac", -1, 79],
  ["\u0161ac", -1, 18],
  ["jebe", -1, 88],
  ["olce", -1, 84],
  ["kuse", -1, 27],
  ["rave", -1, 42],
  ["save", -1, 52],
  ["\u0161ave", -1, 51],
  ["baci", -1, 89],
  ["jaci", -1, 5],
  ["tvenici", -1, 20],
  ["snici", -1, 26],
  ["tetici", -1, 21],
  ["bojci", -1, 4],
  ["vojci", -1, 3],
  ["ojsci", -1, 66],
  ["atci", -1, 58],
  ["itci", -1, 60],
  ["utci", -1, 62],
  ["\u010Dci", -1, 74],
  ["pesi", -1, 2],
  ["inzi", -1, 19],
  ["lozi", -1, 1],
  ["acak", -1, 55],
  ["usak", -1, 57],
  ["atak", -1, 58],
  ["etak", -1, 59],
  ["itak", -1, 60],
  ["otak", -1, 61],
  ["utak", -1, 62],
  ["a\u010Dak", -1, 54],
  ["u\u0161ak", -1, 56],
  ["izam", -1, 87],
  ["tican", -1, 65],
  ["cajan", -1, 7],
  ["\u010Dajan", -1, 6],
  ["voljan", -1, 77],
  ["eskan", -1, 63],
  ["alan", -1, 40],
  ["bilan", -1, 33],
  ["gilan", -1, 37],
  ["nilan", -1, 39],
  ["rilan", -1, 38],
  ["silan", -1, 36],
  ["tilan", -1, 34],
  ["avilan", -1, 35],
  ["laran", -1, 9],
  ["eran", -1, 8],
  ["asan", -1, 91],
  ["esan", -1, 10],
  ["dusan", -1, 31],
  ["kusan", -1, 28],
  ["atan", -1, 47],
  ["pletan", -1, 50],
  ["tetan", -1, 49],
  ["antan", -1, 32],
  ["pravan", -1, 44],
  ["stavan", -1, 43],
  ["sivan", -1, 46],
  ["tivan", -1, 45],
  ["ozan", -1, 41],
  ["ti\u010Dan", -1, 64],
  ["a\u0161an", -1, 90],
  ["du\u0161an", -1, 30],
  ["metar", -1, 68],
  ["centar", -1, 69],
  ["istar", -1, 70],
  ["ekat", -1, 86],
  ["enat", -1, 48],
  ["oscu", -1, 72],
  ["o\u0161\u0107u", -1, 71]
].map(x => new Among(x[0], x[1], x[2]));

StemmerSr.a_2 = [
  ["aca", -1, 124],
  ["eca", -1, 125],
  ["uca", -1, 126],
  ["ga", -1, 20],
  ["acega", 3, 124],
  ["ecega", 3, 125],
  ["ucega", 3, 126],
  ["anjijega", 3, 84],
  ["enjijega", 3, 85],
  ["snjijega", 3, 122],
  ["\u0161njijega", 3, 86],
  ["kijega", 3, 95],
  ["skijega", 11, 1],
  ["\u0161kijega", 11, 2],
  ["elijega", 3, 83],
  ["nijega", 3, 13],
  ["osijega", 3, 123],
  ["atijega", 3, 120],
  ["evitijega", 3, 92],
  ["ovitijega", 3, 93],
  ["astijega", 3, 94],
  ["avijega", 3, 77],
  ["evijega", 3, 78],
  ["ivijega", 3, 79],
  ["ovijega", 3, 80],
  ["o\u0161ijega", 3, 91],
  ["anjega", 3, 84],
  ["enjega", 3, 85],
  ["snjega", 3, 122],
  ["\u0161njega", 3, 86],
  ["kega", 3, 95],
  ["skega", 30, 1],
  ["\u0161kega", 30, 2],
  ["elega", 3, 83],
  ["nega", 3, 13],
  ["anega", 34, 10],
  ["enega", 34, 87],
  ["snega", 34, 159],
  ["\u0161nega", 34, 88],
  ["osega", 3, 123],
  ["atega", 3, 120],
  ["evitega", 3, 92],
  ["ovitega", 3, 93],
  ["astega", 3, 94],
  ["avega", 3, 77],
  ["evega", 3, 78],
  ["ivega", 3, 79],
  ["ovega", 3, 80],
  ["a\u0107ega", 3, 14],
  ["e\u0107ega", 3, 15],
  ["u\u0107ega", 3, 16],
  ["o\u0161ega", 3, 91],
  ["acoga", 3, 124],
  ["ecoga", 3, 125],
  ["ucoga", 3, 126],
  ["anjoga", 3, 84],
  ["enjoga", 3, 85],
  ["snjoga", 3, 122],
  ["\u0161njoga", 3, 86],
  ["koga", 3, 95],
  ["skoga", 59, 1],
  ["\u0161koga", 59, 2],
  ["loga", 3, 19],
  ["eloga", 62, 83],
  ["noga", 3, 13],
  ["cinoga", 64, 137],
  ["\u010Dinoga", 64, 89],
  ["osoga", 3, 123],
  ["atoga", 3, 120],
  ["evitoga", 3, 92],
  ["ovitoga", 3, 93],
  ["astoga", 3, 94],
  ["avoga", 3, 77],
  ["evoga", 3, 78],
  ["ivoga", 3, 79],
  ["ovoga", 3, 80],
  ["a\u0107oga", 3, 14],
  ["e\u0107oga", 3, 15],
  ["u\u0107oga", 3, 16],
  ["o\u0161oga", 3, 91],
  ["uga", 3, 18],
  ["aja", -1, 109],
  ["caja", 81, 26],
  ["laja", 81, 30],
  ["raja", 81, 31],
  ["\u0107aja", 81, 28],
  ["\u010Daja", 81, 27],
  ["\u0111aja", 81, 29],
  ["bija", -1, 32],
  ["cija", -1, 33],
  ["dija", -1, 34],
  ["fija", -1, 40],
  ["gija", -1, 39],
  ["anjija", -1, 84],
  ["enjija", -1, 85],
  ["snjija", -1, 122],
  ["\u0161njija", -1, 86],
  ["kija", -1, 95],
  ["skija", 97, 1],
  ["\u0161kija", 97, 2],
  ["lija", -1, 24],
  ["elija", 100, 83],
  ["mija", -1, 37],
  ["nija", -1, 13],
  ["ganija", 103, 9],
  ["manija", 103, 6],
  ["panija", 103, 7],
  ["ranija", 103, 8],
  ["tanija", 103, 5],
  ["pija", -1, 41],
  ["rija", -1, 42],
  ["rarija", 110, 21],
  ["sija", -1, 23],
  ["osija", 112, 123],
  ["tija", -1, 44],
  ["atija", 114, 120],
  ["evitija", 114, 92],
  ["ovitija", 114, 93],
  ["otija", 114, 22],
  ["astija", 114, 94],
  ["avija", -1, 77],
  ["evija", -1, 78],
  ["ivija", -1, 79],
  ["ovija", -1, 80],
  ["zija", -1, 45],
  ["o\u0161ija", -1, 91],
  ["\u017Eija", -1, 38],
  ["anja", -1, 84],
  ["enja", -1, 85],
  ["snja", -1, 122],
  ["\u0161nja", -1, 86],
  ["ka", -1, 95],
  ["ska", 131, 1],
  ["\u0161ka", 131, 2],
  ["ala", -1, 104],
  ["acala", 134, 128],
  ["astajala", 134, 106],
  ["istajala", 134, 107],
  ["ostajala", 134, 108],
  ["ijala", 134, 47],
  ["injala", 134, 114],
  ["nala", 134, 46],
  ["irala", 134, 100],
  ["urala", 134, 105],
  ["tala", 134, 113],
  ["astala", 144, 110],
  ["istala", 144, 111],
  ["ostala", 144, 112],
  ["avala", 134, 97],
  ["evala", 134, 96],
  ["ivala", 134, 98],
  ["ovala", 134, 76],
  ["uvala", 134, 99],
  ["a\u010Dala", 134, 102],
  ["ela", -1, 83],
  ["ila", -1, 116],
  ["acila", 155, 124],
  ["lucila", 155, 121],
  ["nila", 155, 103],
  ["astanila", 158, 110],
  ["istanila", 158, 111],
  ["ostanila", 158, 112],
  ["rosila", 155, 127],
  ["jetila", 155, 118],
  ["ozila", 155, 48],
  ["a\u010Dila", 155, 101],
  ["lu\u010Dila", 155, 117],
  ["ro\u0161ila", 155, 90],
  ["ola", -1, 50],
  ["asla", -1, 115],
  ["nula", -1, 13],
  ["gama", -1, 20],
  ["logama", 171, 19],
  ["ugama", 171, 18],
  ["ajama", -1, 109],
  ["cajama", 174, 26],
  ["lajama", 174, 30],
  ["rajama", 174, 31],
  ["\u0107ajama", 174, 28],
  ["\u010Dajama", 174, 27],
  ["\u0111ajama", 174, 29],
  ["bijama", -1, 32],
  ["cijama", -1, 33],
  ["dijama", -1, 34],
  ["fijama", -1, 40],
  ["gijama", -1, 39],
  ["lijama", -1, 35],
  ["mijama", -1, 37],
  ["nijama", -1, 36],
  ["ganijama", 188, 9],
  ["manijama", 188, 6],
  ["panijama", 188, 7],
  ["ranijama", 188, 8],
  ["tanijama", 188, 5],
  ["pijama", -1, 41],
  ["rijama", -1, 42],
  ["sijama", -1, 43],
  ["tijama", -1, 44],
  ["zijama", -1, 45],
  ["\u017Eijama", -1, 38],
  ["alama", -1, 104],
  ["ijalama", 200, 47],
  ["nalama", 200, 46],
  ["elama", -1, 119],
  ["ilama", -1, 116],
  ["ramama", -1, 52],
  ["lemama", -1, 51],
  ["inama", -1, 11],
  ["cinama", 207, 137],
  ["\u010Dinama", 207, 89],
  ["rama", -1, 52],
  ["arama", 210, 53],
  ["drama", 210, 54],
  ["erama", 210, 55],
  ["orama", 210, 56],
  ["basama", -1, 135],
  ["gasama", -1, 131],
  ["jasama", -1, 129],
  ["kasama", -1, 133],
  ["nasama", -1, 132],
  ["tasama", -1, 130],
  ["vasama", -1, 134],
  ["esama", -1, 152],
  ["isama", -1, 154],
  ["etama", -1, 70],
  ["estama", -1, 71],
  ["istama", -1, 72],
  ["kstama", -1, 73],
  ["ostama", -1, 74],
  ["avama", -1, 77],
  ["evama", -1, 78],
  ["ivama", -1, 79],
  ["ba\u0161ama", -1, 63],
  ["ga\u0161ama", -1, 64],
  ["ja\u0161ama", -1, 61],
  ["ka\u0161ama", -1, 62],
  ["na\u0161ama", -1, 60],
  ["ta\u0161ama", -1, 59],
  ["va\u0161ama", -1, 65],
  ["e\u0161ama", -1, 66],
  ["i\u0161ama", -1, 67],
  ["lema", -1, 51],
  ["acima", -1, 124],
  ["ecima", -1, 125],
  ["ucima", -1, 126],
  ["ajima", -1, 109],
  ["cajima", 245, 26],
  ["lajima", 245, 30],
  ["rajima", 245, 31],
  ["\u0107ajima", 245, 28],
  ["\u010Dajima", 245, 27],
  ["\u0111ajima", 245, 29],
  ["bijima", -1, 32],
  ["cijima", -1, 33],
  ["dijima", -1, 34],
  ["fijima", -1, 40],
  ["gijima", -1, 39],
  ["anjijima", -1, 84],
  ["enjijima", -1, 85],
  ["snjijima", -1, 122],
  ["\u0161njijima", -1, 86],
  ["kijima", -1, 95],
  ["skijima", 261, 1],
  ["\u0161kijima", 261, 2],
  ["lijima", -1, 35],
  ["elijima", 264, 83],
  ["mijima", -1, 37],
  ["nijima", -1, 13],
  ["ganijima", 267, 9],
  ["manijima", 267, 6],
  ["panijima", 267, 7],
  ["ranijima", 267, 8],
  ["tanijima", 267, 5],
  ["pijima", -1, 41],
  ["rijima", -1, 42],
  ["sijima", -1, 43],
  ["osijima", 275, 123],
  ["tijima", -1, 44],
  ["atijima", 277, 120],
  ["evitijima", 277, 92],
  ["ovitijima", 277, 93],
  ["astijima", 277, 94],
  ["avijima", -1, 77],
  ["evijima", -1, 78],
  ["ivijima", -1, 79],
  ["ovijima", -1, 80],
  ["zijima", -1, 45],
  ["o\u0161ijima", -1, 91],
  ["\u017Eijima", -1, 38],
  ["anjima", -1, 84],
  ["enjima", -1, 85],
  ["snjima", -1, 122],
  ["\u0161njima", -1, 86],
  ["kima", -1, 95],
  ["skima", 293, 1],
  ["\u0161kima", 293, 2],
  ["alima", -1, 104],
  ["ijalima", 296, 47],
  ["nalima", 296, 46],
  ["elima", -1, 83],
  ["ilima", -1, 116],
  ["ozilima", 300, 48],
  ["olima", -1, 50],
  ["lemima", -1, 51],
  ["nima", -1, 13],
  ["anima", 304, 10],
  ["inima", 304, 11],
  ["cinima", 306, 137],
  ["\u010Dinima", 306, 89],
  ["onima", 304, 12],
  ["arima", -1, 53],
  ["drima", -1, 54],
  ["erima", -1, 55],
  ["orima", -1, 56],
  ["basima", -1, 135],
  ["gasima", -1, 131],
  ["jasima", -1, 129],
  ["kasima", -1, 133],
  ["nasima", -1, 132],
  ["tasima", -1, 130],
  ["vasima", -1, 134],
  ["esima", -1, 57],
  ["isima", -1, 58],
  ["osima", -1, 123],
  ["atima", -1, 120],
  ["ikatima", 324, 68],
  ["latima", 324, 69],
  ["etima", -1, 70],
  ["evitima", -1, 92],
  ["ovitima", -1, 93],
  ["astima", -1, 94],
  ["estima", -1, 71],
  ["istima", -1, 72],
  ["kstima", -1, 73],
  ["ostima", -1, 74],
  ["i\u0161tima", -1, 75],
  ["avima", -1, 77],
  ["evima", -1, 78],
  ["ajevima", 337, 109],
  ["cajevima", 338, 26],
  ["lajevima", 338, 30],
  ["rajevima", 338, 31],
  ["\u0107ajevima", 338, 28],
  ["\u010Dajevima", 338, 27],
  ["\u0111ajevima", 338, 29],
  ["ivima", -1, 79],
  ["ovima", -1, 80],
  ["govima", 346, 20],
  ["ugovima", 347, 17],
  ["lovima", 346, 82],
  ["olovima", 349, 49],
  ["movima", 346, 81],
  ["onovima", 346, 12],
  ["stvima", -1, 3],
  ["\u0161tvima", -1, 4],
  ["a\u0107ima", -1, 14],
  ["e\u0107ima", -1, 15],
  ["u\u0107ima", -1, 16],
  ["ba\u0161ima", -1, 63],
  ["ga\u0161ima", -1, 64],
  ["ja\u0161ima", -1, 61],
  ["ka\u0161ima", -1, 62],
  ["na\u0161ima", -1, 60],
  ["ta\u0161ima", -1, 59],
  ["va\u0161ima", -1, 65],
  ["e\u0161ima", -1, 66],
  ["i\u0161ima", -1, 67],
  ["o\u0161ima", -1, 91],
  ["na", -1, 13],
  ["ana", 368, 10],
  ["acana", 369, 128],
  ["urana", 369, 105],
  ["tana", 369, 113],
  ["avana", 369, 97],
  ["evana", 369, 96],
  ["ivana", 369, 98],
  ["uvana", 369, 99],
  ["a\u010Dana", 369, 102],
  ["acena", 368, 124],
  ["lucena", 368, 121],
  ["a\u010Dena", 368, 101],
  ["lu\u010Dena", 368, 117],
  ["ina", 368, 11],
  ["cina", 382, 137],
  ["anina", 382, 10],
  ["\u010Dina", 382, 89],
  ["ona", 368, 12],
  ["ara", -1, 53],
  ["dra", -1, 54],
  ["era", -1, 55],
  ["ora", -1, 56],
  ["basa", -1, 135],
  ["gasa", -1, 131],
  ["jasa", -1, 129],
  ["kasa", -1, 133],
  ["nasa", -1, 132],
  ["tasa", -1, 130],
  ["vasa", -1, 134],
  ["esa", -1, 57],
  ["isa", -1, 58],
  ["osa", -1, 123],
  ["ata", -1, 120],
  ["ikata", 401, 68],
  ["lata", 401, 69],
  ["eta", -1, 70],
  ["evita", -1, 92],
  ["ovita", -1, 93],
  ["asta", -1, 94],
  ["esta", -1, 71],
  ["ista", -1, 72],
  ["ksta", -1, 73],
  ["osta", -1, 74],
  ["nuta", -1, 13],
  ["i\u0161ta", -1, 75],
  ["ava", -1, 77],
  ["eva", -1, 78],
  ["ajeva", 415, 109],
  ["cajeva", 416, 26],
  ["lajeva", 416, 30],
  ["rajeva", 416, 31],
  ["\u0107ajeva", 416, 28],
  ["\u010Dajeva", 416, 27],
  ["\u0111ajeva", 416, 29],
  ["iva", -1, 79],
  ["ova", -1, 80],
  ["gova", 424, 20],
  ["ugova", 425, 17],
  ["lova", 424, 82],
  ["olova", 427, 49],
  ["mova", 424, 81],
  ["onova", 424, 12],
  ["stva", -1, 3],
  ["\u0161tva", -1, 4],
  ["a\u0107a", -1, 14],
  ["e\u0107a", -1, 15],
  ["u\u0107a", -1, 16],
  ["ba\u0161a", -1, 63],
  ["ga\u0161a", -1, 64],
  ["ja\u0161a", -1, 61],
  ["ka\u0161a", -1, 62],
  ["na\u0161a", -1, 60],
  ["ta\u0161a", -1, 59],
  ["va\u0161a", -1, 65],
  ["e\u0161a", -1, 66],
  ["i\u0161a", -1, 67],
  ["o\u0161a", -1, 91],
  ["ace", -1, 124],
  ["ece", -1, 125],
  ["uce", -1, 126],
  ["luce", 448, 121],
  ["astade", -1, 110],
  ["istade", -1, 111],
  ["ostade", -1, 112],
  ["ge", -1, 20],
  ["loge", 453, 19],
  ["uge", 453, 18],
  ["aje", -1, 104],
  ["caje", 456, 26],
  ["laje", 456, 30],
  ["raje", 456, 31],
  ["astaje", 456, 106],
  ["istaje", 456, 107],
  ["ostaje", 456, 108],
  ["\u0107aje", 456, 28],
  ["\u010Daje", 456, 27],
  ["\u0111aje", 456, 29],
  ["ije", -1, 116],
  ["bije", 466, 32],
  ["cije", 466, 33],
  ["dije", 466, 34],
  ["fije", 466, 40],
  ["gije", 466, 39],
  ["anjije", 466, 84],
  ["enjije", 466, 85],
  ["snjije", 466, 122],
  ["\u0161njije", 466, 86],
  ["kije", 466, 95],
  ["skije", 476, 1],
  ["\u0161kije", 476, 2],
  ["lije", 466, 35],
  ["elije", 479, 83],
  ["mije", 466, 37],
  ["nije", 466, 13],
  ["ganije", 482, 9],
  ["manije", 482, 6],
  ["panije", 482, 7],
  ["ranije", 482, 8],
  ["tanije", 482, 5],
  ["pije", 466, 41],
  ["rije", 466, 42],
  ["sije", 466, 43],
  ["osije", 490, 123],
  ["tije", 466, 44],
  ["atije", 492, 120],
  ["evitije", 492, 92],
  ["ovitije", 492, 93],
  ["astije", 492, 94],
  ["avije", 466, 77],
  ["evije", 466, 78],
  ["ivije", 466, 79],
  ["ovije", 466, 80],
  ["zije", 466, 45],
  ["o\u0161ije", 466, 91],
  ["\u017Eije", 466, 38],
  ["anje", -1, 84],
  ["enje", -1, 85],
  ["snje", -1, 122],
  ["\u0161nje", -1, 86],
  ["uje", -1, 25],
  ["lucuje", 508, 121],
  ["iruje", 508, 100],
  ["lu\u010Duje", 508, 117],
  ["ke", -1, 95],
  ["ske", 512, 1],
  ["\u0161ke", 512, 2],
  ["ale", -1, 104],
  ["acale", 515, 128],
  ["astajale", 515, 106],
  ["istajale", 515, 107],
  ["ostajale", 515, 108],
  ["ijale", 515, 47],
  ["injale", 515, 114],
  ["nale", 515, 46],
  ["irale", 515, 100],
  ["urale", 515, 105],
  ["tale", 515, 113],
  ["astale", 525, 110],
  ["istale", 525, 111],
  ["ostale", 525, 112],
  ["avale", 515, 97],
  ["evale", 515, 96],
  ["ivale", 515, 98],
  ["ovale", 515, 76],
  ["uvale", 515, 99],
  ["a\u010Dale", 515, 102],
  ["ele", -1, 83],
  ["ile", -1, 116],
  ["acile", 536, 124],
  ["lucile", 536, 121],
  ["nile", 536, 103],
  ["rosile", 536, 127],
  ["jetile", 536, 118],
  ["ozile", 536, 48],
  ["a\u010Dile", 536, 101],
  ["lu\u010Dile", 536, 117],
  ["ro\u0161ile", 536, 90],
  ["ole", -1, 50],
  ["asle", -1, 115],
  ["nule", -1, 13],
  ["rame", -1, 52],
  ["leme", -1, 51],
  ["acome", -1, 124],
  ["ecome", -1, 125],
  ["ucome", -1, 126],
  ["anjome", -1, 84],
  ["enjome", -1, 85],
  ["snjome", -1, 122],
  ["\u0161njome", -1, 86],
  ["kome", -1, 95],
  ["skome", 558, 1],
  ["\u0161kome", 558, 2],
  ["elome", -1, 83],
  ["nome", -1, 13],
  ["cinome", 562, 137],
  ["\u010Dinome", 562, 89],
  ["osome", -1, 123],
  ["atome", -1, 120],
  ["evitome", -1, 92],
  ["ovitome", -1, 93],
  ["astome", -1, 94],
  ["avome", -1, 77],
  ["evome", -1, 78],
  ["ivome", -1, 79],
  ["ovome", -1, 80],
  ["a\u0107ome", -1, 14],
  ["e\u0107ome", -1, 15],
  ["u\u0107ome", -1, 16],
  ["o\u0161ome", -1, 91],
  ["ne", -1, 13],
  ["ane", 578, 10],
  ["acane", 579, 128],
  ["urane", 579, 105],
  ["tane", 579, 113],
  ["astane", 582, 110],
  ["istane", 582, 111],
  ["ostane", 582, 112],
  ["avane", 579, 97],
  ["evane", 579, 96],
  ["ivane", 579, 98],
  ["uvane", 579, 99],
  ["a\u010Dane", 579, 102],
  ["acene", 578, 124],
  ["lucene", 578, 121],
  ["a\u010Dene", 578, 101],
  ["lu\u010Dene", 578, 117],
  ["ine", 578, 11],
  ["cine", 595, 137],
  ["anine", 595, 10],
  ["\u010Dine", 595, 89],
  ["one", 578, 12],
  ["are", -1, 53],
  ["dre", -1, 54],
  ["ere", -1, 55],
  ["ore", -1, 56],
  ["ase", -1, 161],
  ["base", 604, 135],
  ["acase", 604, 128],
  ["gase", 604, 131],
  ["jase", 604, 129],
  ["astajase", 608, 138],
  ["istajase", 608, 139],
  ["ostajase", 608, 140],
  ["injase", 608, 150],
  ["kase", 604, 133],
  ["nase", 604, 132],
  ["irase", 604, 155],
  ["urase", 604, 156],
  ["tase", 604, 130],
  ["vase", 604, 134],
  ["avase", 618, 144],
  ["evase", 618, 145],
  ["ivase", 618, 146],
  ["ovase", 618, 148],
  ["uvase", 618, 147],
  ["ese", -1, 57],
  ["ise", -1, 58],
  ["acise", 625, 124],
  ["lucise", 625, 121],
  ["rosise", 625, 127],
  ["jetise", 625, 149],
  ["ose", -1, 123],
  ["astadose", 630, 141],
  ["istadose", 630, 142],
  ["ostadose", 630, 143],
  ["ate", -1, 104],
  ["acate", 634, 128],
  ["ikate", 634, 68],
  ["late", 634, 69],
  ["irate", 634, 100],
  ["urate", 634, 105],
  ["tate", 634, 113],
  ["avate", 634, 97],
  ["evate", 634, 96],
  ["ivate", 634, 98],
  ["uvate", 634, 99],
  ["a\u010Date", 634, 102],
  ["ete", -1, 70],
  ["astadete", 646, 110],
  ["istadete", 646, 111],
  ["ostadete", 646, 112],
  ["astajete", 646, 106],
  ["istajete", 646, 107],
  ["ostajete", 646, 108],
  ["ijete", 646, 116],
  ["injete", 646, 114],
  ["ujete", 646, 25],
  ["lucujete", 655, 121],
  ["irujete", 655, 100],
  ["lu\u010Dujete", 655, 117],
  ["nete", 646, 13],
  ["astanete", 659, 110],
  ["istanete", 659, 111],
  ["ostanete", 659, 112],
  ["astete", 646, 115],
  ["ite", -1, 116],
  ["acite", 664, 124],
  ["lucite", 664, 121],
  ["nite", 664, 13],
  ["astanite", 667, 110],
  ["istanite", 667, 111],
  ["ostanite", 667, 112],
  ["rosite", 664, 127],
  ["jetite", 664, 118],
  ["astite", 664, 115],
  ["evite", 664, 92],
  ["ovite", 664, 93],
  ["a\u010Dite", 664, 101],
  ["lu\u010Dite", 664, 117],
  ["ro\u0161ite", 664, 90],
  ["ajte", -1, 104],
  ["urajte", 679, 105],
  ["tajte", 679, 113],
  ["astajte", 681, 106],
  ["istajte", 681, 107],
  ["ostajte", 681, 108],
  ["avajte", 679, 97],
  ["evajte", 679, 96],
  ["ivajte", 679, 98],
  ["uvajte", 679, 99],
  ["ijte", -1, 116],
  ["lucujte", -1, 121],
  ["irujte", -1, 100],
  ["lu\u010Dujte", -1, 117],
  ["aste", -1, 94],
  ["acaste", 693, 128],
  ["astajaste", 693, 106],
  ["istajaste", 693, 107],
  ["ostajaste", 693, 108],
  ["injaste", 693, 114],
  ["iraste", 693, 100],
  ["uraste", 693, 105],
  ["taste", 693, 113],
  ["avaste", 693, 97],
  ["evaste", 693, 96],
  ["ivaste", 693, 98],
  ["ovaste", 693, 76],
  ["uvaste", 693, 99],
  ["a\u010Daste", 693, 102],
  ["este", -1, 71],
  ["iste", -1, 72],
  ["aciste", 709, 124],
  ["luciste", 709, 121],
  ["niste", 709, 103],
  ["rosiste", 709, 127],
  ["jetiste", 709, 118],
  ["a\u010Diste", 709, 101],
  ["lu\u010Diste", 709, 117],
  ["ro\u0161iste", 709, 90],
  ["kste", -1, 73],
  ["oste", -1, 74],
  ["astadoste", 719, 110],
  ["istadoste", 719, 111],
  ["ostadoste", 719, 112],
  ["nuste", -1, 13],
  ["i\u0161te", -1, 75],
  ["ave", -1, 77],
  ["eve", -1, 78],
  ["ajeve", 726, 109],
  ["cajeve", 727, 26],
  ["lajeve", 727, 30],
  ["rajeve", 727, 31],
  ["\u0107ajeve", 727, 28],
  ["\u010Dajeve", 727, 27],
  ["\u0111ajeve", 727, 29],
  ["ive", -1, 79],
  ["ove", -1, 80],
  ["gove", 735, 20],
  ["ugove", 736, 17],
  ["love", 735, 82],
  ["olove", 738, 49],
  ["move", 735, 81],
  ["onove", 735, 12],
  ["a\u0107e", -1, 14],
  ["e\u0107e", -1, 15],
  ["u\u0107e", -1, 16],
  ["a\u010De", -1, 101],
  ["lu\u010De", -1, 117],
  ["a\u0161e", -1, 104],
  ["ba\u0161e", 747, 63],
  ["ga\u0161e", 747, 64],
  ["ja\u0161e", 747, 61],
  ["astaja\u0161e", 750, 106],
  ["istaja\u0161e", 750, 107],
  ["ostaja\u0161e", 750, 108],
  ["inja\u0161e", 750, 114],
  ["ka\u0161e", 747, 62],
  ["na\u0161e", 747, 60],
  ["ira\u0161e", 747, 100],
  ["ura\u0161e", 747, 105],
  ["ta\u0161e", 747, 59],
  ["va\u0161e", 747, 65],
  ["ava\u0161e", 760, 97],
  ["eva\u0161e", 760, 96],
  ["iva\u0161e", 760, 98],
  ["ova\u0161e", 760, 76],
  ["uva\u0161e", 760, 99],
  ["a\u010Da\u0161e", 747, 102],
  ["e\u0161e", -1, 66],
  ["i\u0161e", -1, 67],
  ["jeti\u0161e", 768, 118],
  ["a\u010Di\u0161e", 768, 101],
  ["lu\u010Di\u0161e", 768, 117],
  ["ro\u0161i\u0161e", 768, 90],
  ["o\u0161e", -1, 91],
  ["astado\u0161e", 773, 110],
  ["istado\u0161e", 773, 111],
  ["ostado\u0161e", 773, 112],
  ["aceg", -1, 124],
  ["eceg", -1, 125],
  ["uceg", -1, 126],
  ["anjijeg", -1, 84],
  ["enjijeg", -1, 85],
  ["snjijeg", -1, 122],
  ["\u0161njijeg", -1, 86],
  ["kijeg", -1, 95],
  ["skijeg", 784, 1],
  ["\u0161kijeg", 784, 2],
  ["elijeg", -1, 83],
  ["nijeg", -1, 13],
  ["osijeg", -1, 123],
  ["atijeg", -1, 120],
  ["evitijeg", -1, 92],
  ["ovitijeg", -1, 93],
  ["astijeg", -1, 94],
  ["avijeg", -1, 77],
  ["evijeg", -1, 78],
  ["ivijeg", -1, 79],
  ["ovijeg", -1, 80],
  ["o\u0161ijeg", -1, 91],
  ["anjeg", -1, 84],
  ["enjeg", -1, 85],
  ["snjeg", -1, 122],
  ["\u0161njeg", -1, 86],
  ["keg", -1, 95],
  ["eleg", -1, 83],
  ["neg", -1, 13],
  ["aneg", 805, 10],
  ["eneg", 805, 87],
  ["sneg", 805, 159],
  ["\u0161neg", 805, 88],
  ["oseg", -1, 123],
  ["ateg", -1, 120],
  ["aveg", -1, 77],
  ["eveg", -1, 78],
  ["iveg", -1, 79],
  ["oveg", -1, 80],
  ["a\u0107eg", -1, 14],
  ["e\u0107eg", -1, 15],
  ["u\u0107eg", -1, 16],
  ["o\u0161eg", -1, 91],
  ["acog", -1, 124],
  ["ecog", -1, 125],
  ["ucog", -1, 126],
  ["anjog", -1, 84],
  ["enjog", -1, 85],
  ["snjog", -1, 122],
  ["\u0161njog", -1, 86],
  ["kog", -1, 95],
  ["skog", 827, 1],
  ["\u0161kog", 827, 2],
  ["elog", -1, 83],
  ["nog", -1, 13],
  ["cinog", 831, 137],
  ["\u010Dinog", 831, 89],
  ["osog", -1, 123],
  ["atog", -1, 120],
  ["evitog", -1, 92],
  ["ovitog", -1, 93],
  ["astog", -1, 94],
  ["avog", -1, 77],
  ["evog", -1, 78],
  ["ivog", -1, 79],
  ["ovog", -1, 80],
  ["a\u0107og", -1, 14],
  ["e\u0107og", -1, 15],
  ["u\u0107og", -1, 16],
  ["o\u0161og", -1, 91],
  ["ah", -1, 104],
  ["acah", 847, 128],
  ["astajah", 847, 106],
  ["istajah", 847, 107],
  ["ostajah", 847, 108],
  ["injah", 847, 114],
  ["irah", 847, 100],
  ["urah", 847, 105],
  ["tah", 847, 113],
  ["avah", 847, 97],
  ["evah", 847, 96],
  ["ivah", 847, 98],
  ["ovah", 847, 76],
  ["uvah", 847, 99],
  ["a\u010Dah", 847, 102],
  ["ih", -1, 116],
  ["acih", 862, 124],
  ["ecih", 862, 125],
  ["ucih", 862, 126],
  ["lucih", 865, 121],
  ["anjijih", 862, 84],
  ["enjijih", 862, 85],
  ["snjijih", 862, 122],
  ["\u0161njijih", 862, 86],
  ["kijih", 862, 95],
  ["skijih", 871, 1],
  ["\u0161kijih", 871, 2],
  ["elijih", 862, 83],
  ["nijih", 862, 13],
  ["osijih", 862, 123],
  ["atijih", 862, 120],
  ["evitijih", 862, 92],
  ["ovitijih", 862, 93],
  ["astijih", 862, 94],
  ["avijih", 862, 77],
  ["evijih", 862, 78],
  ["ivijih", 862, 79],
  ["ovijih", 862, 80],
  ["o\u0161ijih", 862, 91],
  ["anjih", 862, 84],
  ["enjih", 862, 85],
  ["snjih", 862, 122],
  ["\u0161njih", 862, 86],
  ["kih", 862, 95],
  ["skih", 890, 1],
  ["\u0161kih", 890, 2],
  ["elih", 862, 83],
  ["nih", 862, 13],
  ["cinih", 894, 137],
  ["\u010Dinih", 894, 89],
  ["osih", 862, 123],
  ["rosih", 897, 127],
  ["atih", 862, 120],
  ["jetih", 862, 118],
  ["evitih", 862, 92],
  ["ovitih", 862, 93],
  ["astih", 862, 94],
  ["avih", 862, 77],
  ["evih", 862, 78],
  ["ivih", 862, 79],
  ["ovih", 862, 80],
  ["a\u0107ih", 862, 14],
  ["e\u0107ih", 862, 15],
  ["u\u0107ih", 862, 16],
  ["a\u010Dih", 862, 101],
  ["lu\u010Dih", 862, 117],
  ["o\u0161ih", 862, 91],
  ["ro\u0161ih", 913, 90],
  ["astadoh", -1, 110],
  ["istadoh", -1, 111],
  ["ostadoh", -1, 112],
  ["acuh", -1, 124],
  ["ecuh", -1, 125],
  ["ucuh", -1, 126],
  ["a\u0107uh", -1, 14],
  ["e\u0107uh", -1, 15],
  ["u\u0107uh", -1, 16],
  ["aci", -1, 124],
  ["aceci", -1, 124],
  ["ieci", -1, 162],
  ["ajuci", -1, 161],
  ["irajuci", 927, 155],
  ["urajuci", 927, 156],
  ["astajuci", 927, 138],
  ["istajuci", 927, 139],
  ["ostajuci", 927, 140],
  ["avajuci", 927, 144],
  ["evajuci", 927, 145],
  ["ivajuci", 927, 146],
  ["uvajuci", 927, 147],
  ["ujuci", -1, 157],
  ["lucujuci", 937, 121],
  ["irujuci", 937, 155],
  ["luci", -1, 121],
  ["nuci", -1, 164],
  ["etuci", -1, 153],
  ["astuci", -1, 136],
  ["gi", -1, 20],
  ["ugi", 944, 18],
  ["aji", -1, 109],
  ["caji", 946, 26],
  ["laji", 946, 30],
  ["raji", 946, 31],
  ["\u0107aji", 946, 28],
  ["\u010Daji", 946, 27],
  ["\u0111aji", 946, 29],
  ["biji", -1, 32],
  ["ciji", -1, 33],
  ["diji", -1, 34],
  ["fiji", -1, 40],
  ["giji", -1, 39],
  ["anjiji", -1, 84],
  ["enjiji", -1, 85],
  ["snjiji", -1, 122],
  ["\u0161njiji", -1, 86],
  ["kiji", -1, 95],
  ["skiji", 962, 1],
  ["\u0161kiji", 962, 2],
  ["liji", -1, 35],
  ["eliji", 965, 83],
  ["miji", -1, 37],
  ["niji", -1, 13],
  ["ganiji", 968, 9],
  ["maniji", 968, 6],
  ["paniji", 968, 7],
  ["raniji", 968, 8],
  ["taniji", 968, 5],
  ["piji", -1, 41],
  ["riji", -1, 42],
  ["siji", -1, 43],
  ["osiji", 976, 123],
  ["tiji", -1, 44],
  ["atiji", 978, 120],
  ["evitiji", 978, 92],
  ["ovitiji", 978, 93],
  ["astiji", 978, 94],
  ["aviji", -1, 77],
  ["eviji", -1, 78],
  ["iviji", -1, 79],
  ["oviji", -1, 80],
  ["ziji", -1, 45],
  ["o\u0161iji", -1, 91],
  ["\u017Eiji", -1, 38],
  ["anji", -1, 84],
  ["enji", -1, 85],
  ["snji", -1, 122],
  ["\u0161nji", -1, 86],
  ["ki", -1, 95],
  ["ski", 994, 1],
  ["\u0161ki", 994, 2],
  ["ali", -1, 104],
  ["acali", 997, 128],
  ["astajali", 997, 106],
  ["istajali", 997, 107],
  ["ostajali", 997, 108],
  ["ijali", 997, 47],
  ["injali", 997, 114],
  ["nali", 997, 46],
  ["irali", 997, 100],
  ["urali", 997, 105],
  ["tali", 997, 113],
  ["astali", 1007, 110],
  ["istali", 1007, 111],
  ["ostali", 1007, 112],
  ["avali", 997, 97],
  ["evali", 997, 96],
  ["ivali", 997, 98],
  ["ovali", 997, 76],
  ["uvali", 997, 99],
  ["a\u010Dali", 997, 102],
  ["eli", -1, 83],
  ["ili", -1, 116],
  ["acili", 1018, 124],
  ["lucili", 1018, 121],
  ["nili", 1018, 103],
  ["rosili", 1018, 127],
  ["jetili", 1018, 118],
  ["ozili", 1018, 48],
  ["a\u010Dili", 1018, 101],
  ["lu\u010Dili", 1018, 117],
  ["ro\u0161ili", 1018, 90],
  ["oli", -1, 50],
  ["asli", -1, 115],
  ["nuli", -1, 13],
  ["rami", -1, 52],
  ["lemi", -1, 51],
  ["ni", -1, 13],
  ["ani", 1033, 10],
  ["acani", 1034, 128],
  ["urani", 1034, 105],
  ["tani", 1034, 113],
  ["avani", 1034, 97],
  ["evani", 1034, 96],
  ["ivani", 1034, 98],
  ["uvani", 1034, 99],
  ["a\u010Dani", 1034, 102],
  ["aceni", 1033, 124],
  ["luceni", 1033, 121],
  ["a\u010Deni", 1033, 101],
  ["lu\u010Deni", 1033, 117],
  ["ini", 1033, 11],
  ["cini", 1047, 137],
  ["\u010Dini", 1047, 89],
  ["oni", 1033, 12],
  ["ari", -1, 53],
  ["dri", -1, 54],
  ["eri", -1, 55],
  ["ori", -1, 56],
  ["basi", -1, 135],
  ["gasi", -1, 131],
  ["jasi", -1, 129],
  ["kasi", -1, 133],
  ["nasi", -1, 132],
  ["tasi", -1, 130],
  ["vasi", -1, 134],
  ["esi", -1, 152],
  ["isi", -1, 154],
  ["osi", -1, 123],
  ["avsi", -1, 161],
  ["acavsi", 1065, 128],
  ["iravsi", 1065, 155],
  ["tavsi", 1065, 160],
  ["etavsi", 1068, 153],
  ["astavsi", 1068, 141],
  ["istavsi", 1068, 142],
  ["ostavsi", 1068, 143],
  ["ivsi", -1, 162],
  ["nivsi", 1073, 158],
  ["rosivsi", 1073, 127],
  ["nuvsi", -1, 164],
  ["ati", -1, 104],
  ["acati", 1077, 128],
  ["astajati", 1077, 106],
  ["istajati", 1077, 107],
  ["ostajati", 1077, 108],
  ["injati", 1077, 114],
  ["ikati", 1077, 68],
  ["lati", 1077, 69],
  ["irati", 1077, 100],
  ["urati", 1077, 105],
  ["tati", 1077, 113],
  ["astati", 1087, 110],
  ["istati", 1087, 111],
  ["ostati", 1087, 112],
  ["avati", 1077, 97],
  ["evati", 1077, 96],
  ["ivati", 1077, 98],
  ["ovati", 1077, 76],
  ["uvati", 1077, 99],
  ["a\u010Dati", 1077, 102],
  ["eti", -1, 70],
  ["iti", -1, 116],
  ["aciti", 1098, 124],
  ["luciti", 1098, 121],
  ["niti", 1098, 103],
  ["rositi", 1098, 127],
  ["jetiti", 1098, 118],
  ["eviti", 1098, 92],
  ["oviti", 1098, 93],
  ["a\u010Diti", 1098, 101],
  ["lu\u010Diti", 1098, 117],
  ["ro\u0161iti", 1098, 90],
  ["asti", -1, 94],
  ["esti", -1, 71],
  ["isti", -1, 72],
  ["ksti", -1, 73],
  ["osti", -1, 74],
  ["nuti", -1, 13],
  ["avi", -1, 77],
  ["evi", -1, 78],
  ["ajevi", 1116, 109],
  ["cajevi", 1117, 26],
  ["lajevi", 1117, 30],
  ["rajevi", 1117, 31],
  ["\u0107ajevi", 1117, 28],
  ["\u010Dajevi", 1117, 27],
  ["\u0111ajevi", 1117, 29],
  ["ivi", -1, 79],
  ["ovi", -1, 80],
  ["govi", 1125, 20],
  ["ugovi", 1126, 17],
  ["lovi", 1125, 82],
  ["olovi", 1128, 49],
  ["movi", 1125, 81],
  ["onovi", 1125, 12],
  ["ie\u0107i", -1, 116],
  ["a\u010De\u0107i", -1, 101],
  ["aju\u0107i", -1, 104],
  ["iraju\u0107i", 1134, 100],
  ["uraju\u0107i", 1134, 105],
  ["astaju\u0107i", 1134, 106],
  ["istaju\u0107i", 1134, 107],
  ["ostaju\u0107i", 1134, 108],
  ["avaju\u0107i", 1134, 97],
  ["evaju\u0107i", 1134, 96],
  ["ivaju\u0107i", 1134, 98],
  ["uvaju\u0107i", 1134, 99],
  ["uju\u0107i", -1, 25],
  ["iruju\u0107i", 1144, 100],
  ["lu\u010Duju\u0107i", 1144, 117],
  ["nu\u0107i", -1, 13],
  ["etu\u0107i", -1, 70],
  ["astu\u0107i", -1, 115],
  ["a\u010Di", -1, 101],
  ["lu\u010Di", -1, 117],
  ["ba\u0161i", -1, 63],
  ["ga\u0161i", -1, 64],
  ["ja\u0161i", -1, 61],
  ["ka\u0161i", -1, 62],
  ["na\u0161i", -1, 60],
  ["ta\u0161i", -1, 59],
  ["va\u0161i", -1, 65],
  ["e\u0161i", -1, 66],
  ["i\u0161i", -1, 67],
  ["o\u0161i", -1, 91],
  ["av\u0161i", -1, 104],
  ["irav\u0161i", 1162, 100],
  ["tav\u0161i", 1162, 113],
  ["etav\u0161i", 1164, 70],
  ["astav\u0161i", 1164, 110],
  ["istav\u0161i", 1164, 111],
  ["ostav\u0161i", 1164, 112],
  ["a\u010Dav\u0161i", 1162, 102],
  ["iv\u0161i", -1, 116],
  ["niv\u0161i", 1170, 103],
  ["ro\u0161iv\u0161i", 1170, 90],
  ["nuv\u0161i", -1, 13],
  ["aj", -1, 104],
  ["uraj", 1174, 105],
  ["taj", 1174, 113],
  ["avaj", 1174, 97],
  ["evaj", 1174, 96],
  ["ivaj", 1174, 98],
  ["uvaj", 1174, 99],
  ["ij", -1, 116],
  ["acoj", -1, 124],
  ["ecoj", -1, 125],
  ["ucoj", -1, 126],
  ["anjijoj", -1, 84],
  ["enjijoj", -1, 85],
  ["snjijoj", -1, 122],
  ["\u0161njijoj", -1, 86],
  ["kijoj", -1, 95],
  ["skijoj", 1189, 1],
  ["\u0161kijoj", 1189, 2],
  ["elijoj", -1, 83],
  ["nijoj", -1, 13],
  ["osijoj", -1, 123],
  ["evitijoj", -1, 92],
  ["ovitijoj", -1, 93],
  ["astijoj", -1, 94],
  ["avijoj", -1, 77],
  ["evijoj", -1, 78],
  ["ivijoj", -1, 79],
  ["ovijoj", -1, 80],
  ["o\u0161ijoj", -1, 91],
  ["anjoj", -1, 84],
  ["enjoj", -1, 85],
  ["snjoj", -1, 122],
  ["\u0161njoj", -1, 86],
  ["koj", -1, 95],
  ["skoj", 1207, 1],
  ["\u0161koj", 1207, 2],
  ["aloj", -1, 104],
  ["eloj", -1, 83],
  ["noj", -1, 13],
  ["cinoj", 1212, 137],
  ["\u010Dinoj", 1212, 89],
  ["osoj", -1, 123],
  ["atoj", -1, 120],
  ["evitoj", -1, 92],
  ["ovitoj", -1, 93],
  ["astoj", -1, 94],
  ["avoj", -1, 77],
  ["evoj", -1, 78],
  ["ivoj", -1, 79],
  ["ovoj", -1, 80],
  ["a\u0107oj", -1, 14],
  ["e\u0107oj", -1, 15],
  ["u\u0107oj", -1, 16],
  ["o\u0161oj", -1, 91],
  ["lucuj", -1, 121],
  ["iruj", -1, 100],
  ["lu\u010Duj", -1, 117],
  ["al", -1, 104],
  ["iral", 1231, 100],
  ["ural", 1231, 105],
  ["el", -1, 119],
  ["il", -1, 116],
  ["am", -1, 104],
  ["acam", 1236, 128],
  ["iram", 1236, 100],
  ["uram", 1236, 105],
  ["tam", 1236, 113],
  ["avam", 1236, 97],
  ["evam", 1236, 96],
  ["ivam", 1236, 98],
  ["uvam", 1236, 99],
  ["a\u010Dam", 1236, 102],
  ["em", -1, 119],
  ["acem", 1246, 124],
  ["ecem", 1246, 125],
  ["ucem", 1246, 126],
  ["astadem", 1246, 110],
  ["istadem", 1246, 111],
  ["ostadem", 1246, 112],
  ["ajem", 1246, 104],
  ["cajem", 1253, 26],
  ["lajem", 1253, 30],
  ["rajem", 1253, 31],
  ["astajem", 1253, 106],
  ["istajem", 1253, 107],
  ["ostajem", 1253, 108],
  ["\u0107ajem", 1253, 28],
  ["\u010Dajem", 1253, 27],
  ["\u0111ajem", 1253, 29],
  ["ijem", 1246, 116],
  ["anjijem", 1263, 84],
  ["enjijem", 1263, 85],
  ["snjijem", 1263, 123],
  ["\u0161njijem", 1263, 86],
  ["kijem", 1263, 95],
  ["skijem", 1268, 1],
  ["\u0161kijem", 1268, 2],
  ["lijem", 1263, 24],
  ["elijem", 1271, 83],
  ["nijem", 1263, 13],
  ["rarijem", 1263, 21],
  ["sijem", 1263, 23],
  ["osijem", 1275, 123],
  ["atijem", 1263, 120],
  ["evitijem", 1263, 92],
  ["ovitijem", 1263, 93],
  ["otijem", 1263, 22],
  ["astijem", 1263, 94],
  ["avijem", 1263, 77],
  ["evijem", 1263, 78],
  ["ivijem", 1263, 79],
  ["ovijem", 1263, 80],
  ["o\u0161ijem", 1263, 91],
  ["anjem", 1246, 84],
  ["enjem", 1246, 85],
  ["injem", 1246, 114],
  ["snjem", 1246, 122],
  ["\u0161njem", 1246, 86],
  ["ujem", 1246, 25],
  ["lucujem", 1292, 121],
  ["irujem", 1292, 100],
  ["lu\u010Dujem", 1292, 117],
  ["kem", 1246, 95],
  ["skem", 1296, 1],
  ["\u0161kem", 1296, 2],
  ["elem", 1246, 83],
  ["nem", 1246, 13],
  ["anem", 1300, 10],
  ["astanem", 1301, 110],
  ["istanem", 1301, 111],
  ["ostanem", 1301, 112],
  ["enem", 1300, 87],
  ["snem", 1300, 159],
  ["\u0161nem", 1300, 88],
  ["basem", 1246, 135],
  ["gasem", 1246, 131],
  ["jasem", 1246, 129],
  ["kasem", 1246, 133],
  ["nasem", 1246, 132],
  ["tasem", 1246, 130],
  ["vasem", 1246, 134],
  ["esem", 1246, 152],
  ["isem", 1246, 154],
  ["osem", 1246, 123],
  ["atem", 1246, 120],
  ["etem", 1246, 70],
  ["evitem", 1246, 92],
  ["ovitem", 1246, 93],
  ["astem", 1246, 94],
  ["istem", 1246, 151],
  ["i\u0161tem", 1246, 75],
  ["avem", 1246, 77],
  ["evem", 1246, 78],
  ["ivem", 1246, 79],
  ["a\u0107em", 1246, 14],
  ["e\u0107em", 1246, 15],
  ["u\u0107em", 1246, 16],
  ["ba\u0161em", 1246, 63],
  ["ga\u0161em", 1246, 64],
  ["ja\u0161em", 1246, 61],
  ["ka\u0161em", 1246, 62],
  ["na\u0161em", 1246, 60],
  ["ta\u0161em", 1246, 59],
  ["va\u0161em", 1246, 65],
  ["e\u0161em", 1246, 66],
  ["i\u0161em", 1246, 67],
  ["o\u0161em", 1246, 91],
  ["im", -1, 116],
  ["acim", 1341, 124],
  ["ecim", 1341, 125],
  ["ucim", 1341, 126],
  ["lucim", 1344, 121],
  ["anjijim", 1341, 84],
  ["enjijim", 1341, 85],
  ["snjijim", 1341, 122],
  ["\u0161njijim", 1341, 86],
  ["kijim", 1341, 95],
  ["skijim", 1350, 1],
  ["\u0161kijim", 1350, 2],
  ["elijim", 1341, 83],
  ["nijim", 1341, 13],
  ["osijim", 1341, 123],
  ["atijim", 1341, 120],
  ["evitijim", 1341, 92],
  ["ovitijim", 1341, 93],
  ["astijim", 1341, 94],
  ["avijim", 1341, 77],
  ["evijim", 1341, 78],
  ["ivijim", 1341, 79],
  ["ovijim", 1341, 80],
  ["o\u0161ijim", 1341, 91],
  ["anjim", 1341, 84],
  ["enjim", 1341, 85],
  ["snjim", 1341, 122],
  ["\u0161njim", 1341, 86],
  ["kim", 1341, 95],
  ["skim", 1369, 1],
  ["\u0161kim", 1369, 2],
  ["elim", 1341, 83],
  ["nim", 1341, 13],
  ["cinim", 1373, 137],
  ["\u010Dinim", 1373, 89],
  ["osim", 1341, 123],
  ["rosim", 1376, 127],
  ["atim", 1341, 120],
  ["jetim", 1341, 118],
  ["evitim", 1341, 92],
  ["ovitim", 1341, 93],
  ["astim", 1341, 94],
  ["avim", 1341, 77],
  ["evim", 1341, 78],
  ["ivim", 1341, 79],
  ["ovim", 1341, 80],
  ["a\u0107im", 1341, 14],
  ["e\u0107im", 1341, 15],
  ["u\u0107im", 1341, 16],
  ["a\u010Dim", 1341, 101],
  ["lu\u010Dim", 1341, 117],
  ["o\u0161im", 1341, 91],
  ["ro\u0161im", 1392, 90],
  ["acom", -1, 124],
  ["ecom", -1, 125],
  ["ucom", -1, 126],
  ["gom", -1, 20],
  ["logom", 1397, 19],
  ["ugom", 1397, 18],
  ["bijom", -1, 32],
  ["cijom", -1, 33],
  ["dijom", -1, 34],
  ["fijom", -1, 40],
  ["gijom", -1, 39],
  ["lijom", -1, 35],
  ["mijom", -1, 37],
  ["nijom", -1, 36],
  ["ganijom", 1407, 9],
  ["manijom", 1407, 6],
  ["panijom", 1407, 7],
  ["ranijom", 1407, 8],
  ["tanijom", 1407, 5],
  ["pijom", -1, 41],
  ["rijom", -1, 42],
  ["sijom", -1, 43],
  ["tijom", -1, 44],
  ["zijom", -1, 45],
  ["\u017Eijom", -1, 38],
  ["anjom", -1, 84],
  ["enjom", -1, 85],
  ["snjom", -1, 122],
  ["\u0161njom", -1, 86],
  ["kom", -1, 95],
  ["skom", 1423, 1],
  ["\u0161kom", 1423, 2],
  ["alom", -1, 104],
  ["ijalom", 1426, 47],
  ["nalom", 1426, 46],
  ["elom", -1, 83],
  ["ilom", -1, 116],
  ["ozilom", 1430, 48],
  ["olom", -1, 50],
  ["ramom", -1, 52],
  ["lemom", -1, 51],
  ["nom", -1, 13],
  ["anom", 1435, 10],
  ["inom", 1435, 11],
  ["cinom", 1437, 137],
  ["aninom", 1437, 10],
  ["\u010Dinom", 1437, 89],
  ["onom", 1435, 12],
  ["arom", -1, 53],
  ["drom", -1, 54],
  ["erom", -1, 55],
  ["orom", -1, 56],
  ["basom", -1, 135],
  ["gasom", -1, 131],
  ["jasom", -1, 129],
  ["kasom", -1, 133],
  ["nasom", -1, 132],
  ["tasom", -1, 130],
  ["vasom", -1, 134],
  ["esom", -1, 57],
  ["isom", -1, 58],
  ["osom", -1, 123],
  ["atom", -1, 120],
  ["ikatom", 1456, 68],
  ["latom", 1456, 69],
  ["etom", -1, 70],
  ["evitom", -1, 92],
  ["ovitom", -1, 93],
  ["astom", -1, 94],
  ["estom", -1, 71],
  ["istom", -1, 72],
  ["kstom", -1, 73],
  ["ostom", -1, 74],
  ["avom", -1, 77],
  ["evom", -1, 78],
  ["ivom", -1, 79],
  ["ovom", -1, 80],
  ["lovom", 1470, 82],
  ["movom", 1470, 81],
  ["stvom", -1, 3],
  ["\u0161tvom", -1, 4],
  ["a\u0107om", -1, 14],
  ["e\u0107om", -1, 15],
  ["u\u0107om", -1, 16],
  ["ba\u0161om", -1, 63],
  ["ga\u0161om", -1, 64],
  ["ja\u0161om", -1, 61],
  ["ka\u0161om", -1, 62],
  ["na\u0161om", -1, 60],
  ["ta\u0161om", -1, 59],
  ["va\u0161om", -1, 65],
  ["e\u0161om", -1, 66],
  ["i\u0161om", -1, 67],
  ["o\u0161om", -1, 91],
  ["an", -1, 104],
  ["acan", 1488, 128],
  ["iran", 1488, 100],
  ["uran", 1488, 105],
  ["tan", 1488, 113],
  ["avan", 1488, 97],
  ["evan", 1488, 96],
  ["ivan", 1488, 98],
  ["uvan", 1488, 99],
  ["a\u010Dan", 1488, 102],
  ["acen", -1, 124],
  ["lucen", -1, 121],
  ["a\u010Den", -1, 101],
  ["lu\u010Den", -1, 117],
  ["anin", -1, 10],
  ["ao", -1, 104],
  ["acao", 1503, 128],
  ["astajao", 1503, 106],
  ["istajao", 1503, 107],
  ["ostajao", 1503, 108],
  ["injao", 1503, 114],
  ["irao", 1503, 100],
  ["urao", 1503, 105],
  ["tao", 1503, 113],
  ["astao", 1511, 110],
  ["istao", 1511, 111],
  ["ostao", 1511, 112],
  ["avao", 1503, 97],
  ["evao", 1503, 96],
  ["ivao", 1503, 98],
  ["ovao", 1503, 76],
  ["uvao", 1503, 99],
  ["a\u010Dao", 1503, 102],
  ["go", -1, 20],
  ["ugo", 1521, 18],
  ["io", -1, 116],
  ["acio", 1523, 124],
  ["lucio", 1523, 121],
  ["lio", 1523, 24],
  ["nio", 1523, 103],
  ["rario", 1523, 21],
  ["sio", 1523, 23],
  ["rosio", 1529, 127],
  ["jetio", 1523, 118],
  ["otio", 1523, 22],
  ["a\u010Dio", 1523, 101],
  ["lu\u010Dio", 1523, 117],
  ["ro\u0161io", 1523, 90],
  ["bijo", -1, 32],
  ["cijo", -1, 33],
  ["dijo", -1, 34],
  ["fijo", -1, 40],
  ["gijo", -1, 39],
  ["lijo", -1, 35],
  ["mijo", -1, 37],
  ["nijo", -1, 36],
  ["pijo", -1, 41],
  ["rijo", -1, 42],
  ["sijo", -1, 43],
  ["tijo", -1, 44],
  ["zijo", -1, 45],
  ["\u017Eijo", -1, 38],
  ["anjo", -1, 84],
  ["enjo", -1, 85],
  ["snjo", -1, 122],
  ["\u0161njo", -1, 86],
  ["ko", -1, 95],
  ["sko", 1554, 1],
  ["\u0161ko", 1554, 2],
  ["alo", -1, 104],
  ["acalo", 1557, 128],
  ["astajalo", 1557, 106],
  ["istajalo", 1557, 107],
  ["ostajalo", 1557, 108],
  ["ijalo", 1557, 47],
  ["injalo", 1557, 114],
  ["nalo", 1557, 46],
  ["iralo", 1557, 100],
  ["uralo", 1557, 105],
  ["talo", 1557, 113],
  ["astalo", 1567, 110],
  ["istalo", 1567, 111],
  ["ostalo", 1567, 112],
  ["avalo", 1557, 97],
  ["evalo", 1557, 96],
  ["ivalo", 1557, 98],
  ["ovalo", 1557, 76],
  ["uvalo", 1557, 99],
  ["a\u010Dalo", 1557, 102],
  ["elo", -1, 83],
  ["ilo", -1, 116],
  ["acilo", 1578, 124],
  ["lucilo", 1578, 121],
  ["nilo", 1578, 103],
  ["rosilo", 1578, 127],
  ["jetilo", 1578, 118],
  ["a\u010Dilo", 1578, 101],
  ["lu\u010Dilo", 1578, 117],
  ["ro\u0161ilo", 1578, 90],
  ["aslo", -1, 115],
  ["nulo", -1, 13],
  ["amo", -1, 104],
  ["acamo", 1589, 128],
  ["ramo", 1589, 52],
  ["iramo", 1591, 100],
  ["uramo", 1591, 105],
  ["tamo", 1589, 113],
  ["avamo", 1589, 97],
  ["evamo", 1589, 96],
  ["ivamo", 1589, 98],
  ["uvamo", 1589, 99],
  ["a\u010Damo", 1589, 102],
  ["emo", -1, 119],
  ["astademo", 1600, 110],
  ["istademo", 1600, 111],
  ["ostademo", 1600, 112],
  ["astajemo", 1600, 106],
  ["istajemo", 1600, 107],
  ["ostajemo", 1600, 108],
  ["ijemo", 1600, 116],
  ["injemo", 1600, 114],
  ["ujemo", 1600, 25],
  ["lucujemo", 1609, 121],
  ["irujemo", 1609, 100],
  ["lu\u010Dujemo", 1609, 117],
  ["lemo", 1600, 51],
  ["nemo", 1600, 13],
  ["astanemo", 1614, 110],
  ["istanemo", 1614, 111],
  ["ostanemo", 1614, 112],
  ["etemo", 1600, 70],
  ["astemo", 1600, 115],
  ["imo", -1, 116],
  ["acimo", 1620, 124],
  ["lucimo", 1620, 121],
  ["nimo", 1620, 13],
  ["astanimo", 1623, 110],
  ["istanimo", 1623, 111],
  ["ostanimo", 1623, 112],
  ["rosimo", 1620, 127],
  ["etimo", 1620, 70],
  ["jetimo", 1628, 118],
  ["astimo", 1620, 115],
  ["a\u010Dimo", 1620, 101],
  ["lu\u010Dimo", 1620, 117],
  ["ro\u0161imo", 1620, 90],
  ["ajmo", -1, 104],
  ["urajmo", 1634, 105],
  ["tajmo", 1634, 113],
  ["astajmo", 1636, 106],
  ["istajmo", 1636, 107],
  ["ostajmo", 1636, 108],
  ["avajmo", 1634, 97],
  ["evajmo", 1634, 96],
  ["ivajmo", 1634, 98],
  ["uvajmo", 1634, 99],
  ["ijmo", -1, 116],
  ["ujmo", -1, 25],
  ["lucujmo", 1645, 121],
  ["irujmo", 1645, 100],
  ["lu\u010Dujmo", 1645, 117],
  ["asmo", -1, 104],
  ["acasmo", 1649, 128],
  ["astajasmo", 1649, 106],
  ["istajasmo", 1649, 107],
  ["ostajasmo", 1649, 108],
  ["injasmo", 1649, 114],
  ["irasmo", 1649, 100],
  ["urasmo", 1649, 105],
  ["tasmo", 1649, 113],
  ["avasmo", 1649, 97],
  ["evasmo", 1649, 96],
  ["ivasmo", 1649, 98],
  ["ovasmo", 1649, 76],
  ["uvasmo", 1649, 99],
  ["a\u010Dasmo", 1649, 102],
  ["ismo", -1, 116],
  ["acismo", 1664, 124],
  ["lucismo", 1664, 121],
  ["nismo", 1664, 103],
  ["rosismo", 1664, 127],
  ["jetismo", 1664, 118],
  ["a\u010Dismo", 1664, 101],
  ["lu\u010Dismo", 1664, 117],
  ["ro\u0161ismo", 1664, 90],
  ["astadosmo", -1, 110],
  ["istadosmo", -1, 111],
  ["ostadosmo", -1, 112],
  ["nusmo", -1, 13],
  ["no", -1, 13],
  ["ano", 1677, 104],
  ["acano", 1678, 128],
  ["urano", 1678, 105],
  ["tano", 1678, 113],
  ["avano", 1678, 97],
  ["evano", 1678, 96],
  ["ivano", 1678, 98],
  ["uvano", 1678, 99],
  ["a\u010Dano", 1678, 102],
  ["aceno", 1677, 124],
  ["luceno", 1677, 121],
  ["a\u010Deno", 1677, 101],
  ["lu\u010Deno", 1677, 117],
  ["ino", 1677, 11],
  ["cino", 1691, 137],
  ["\u010Dino", 1691, 89],
  ["ato", -1, 120],
  ["ikato", 1694, 68],
  ["lato", 1694, 69],
  ["eto", -1, 70],
  ["evito", -1, 92],
  ["ovito", -1, 93],
  ["asto", -1, 94],
  ["esto", -1, 71],
  ["isto", -1, 72],
  ["ksto", -1, 73],
  ["osto", -1, 74],
  ["nuto", -1, 13],
  ["nuo", -1, 13],
  ["avo", -1, 77],
  ["evo", -1, 78],
  ["ivo", -1, 79],
  ["ovo", -1, 80],
  ["stvo", -1, 3],
  ["\u0161tvo", -1, 4],
  ["as", -1, 161],
  ["acas", 1713, 128],
  ["iras", 1713, 155],
  ["uras", 1713, 156],
  ["tas", 1713, 160],
  ["avas", 1713, 144],
  ["evas", 1713, 145],
  ["ivas", 1713, 146],
  ["uvas", 1713, 147],
  ["es", -1, 163],
  ["astades", 1722, 141],
  ["istades", 1722, 142],
  ["ostades", 1722, 143],
  ["astajes", 1722, 138],
  ["istajes", 1722, 139],
  ["ostajes", 1722, 140],
  ["ijes", 1722, 162],
  ["injes", 1722, 150],
  ["ujes", 1722, 157],
  ["lucujes", 1731, 121],
  ["irujes", 1731, 155],
  ["nes", 1722, 164],
  ["astanes", 1734, 141],
  ["istanes", 1734, 142],
  ["ostanes", 1734, 143],
  ["etes", 1722, 153],
  ["astes", 1722, 136],
  ["is", -1, 162],
  ["acis", 1740, 124],
  ["lucis", 1740, 121],
  ["nis", 1740, 158],
  ["rosis", 1740, 127],
  ["jetis", 1740, 149],
  ["at", -1, 104],
  ["acat", 1746, 128],
  ["astajat", 1746, 106],
  ["istajat", 1746, 107],
  ["ostajat", 1746, 108],
  ["injat", 1746, 114],
  ["irat", 1746, 100],
  ["urat", 1746, 105],
  ["tat", 1746, 113],
  ["astat", 1754, 110],
  ["istat", 1754, 111],
  ["ostat", 1754, 112],
  ["avat", 1746, 97],
  ["evat", 1746, 96],
  ["ivat", 1746, 98],
  ["irivat", 1760, 100],
  ["ovat", 1746, 76],
  ["uvat", 1746, 99],
  ["a\u010Dat", 1746, 102],
  ["it", -1, 116],
  ["acit", 1765, 124],
  ["lucit", 1765, 121],
  ["rosit", 1765, 127],
  ["jetit", 1765, 118],
  ["a\u010Dit", 1765, 101],
  ["lu\u010Dit", 1765, 117],
  ["ro\u0161it", 1765, 90],
  ["nut", -1, 13],
  ["astadu", -1, 110],
  ["istadu", -1, 111],
  ["ostadu", -1, 112],
  ["gu", -1, 20],
  ["logu", 1777, 19],
  ["ugu", 1777, 18],
  ["ahu", -1, 104],
  ["acahu", 1780, 128],
  ["astajahu", 1780, 106],
  ["istajahu", 1780, 107],
  ["ostajahu", 1780, 108],
  ["injahu", 1780, 114],
  ["irahu", 1780, 100],
  ["urahu", 1780, 105],
  ["avahu", 1780, 97],
  ["evahu", 1780, 96],
  ["ivahu", 1780, 98],
  ["ovahu", 1780, 76],
  ["uvahu", 1780, 99],
  ["a\u010Dahu", 1780, 102],
  ["aju", -1, 104],
  ["caju", 1794, 26],
  ["acaju", 1795, 128],
  ["laju", 1794, 30],
  ["raju", 1794, 31],
  ["iraju", 1798, 100],
  ["uraju", 1798, 105],
  ["taju", 1794, 113],
  ["astaju", 1801, 106],
  ["istaju", 1801, 107],
  ["ostaju", 1801, 108],
  ["avaju", 1794, 97],
  ["evaju", 1794, 96],
  ["ivaju", 1794, 98],
  ["uvaju", 1794, 99],
  ["\u0107aju", 1794, 28],
  ["\u010Daju", 1794, 27],
  ["a\u010Daju", 1810, 102],
  ["\u0111aju", 1794, 29],
  ["iju", -1, 116],
  ["biju", 1813, 32],
  ["ciju", 1813, 33],
  ["diju", 1813, 34],
  ["fiju", 1813, 40],
  ["giju", 1813, 39],
  ["anjiju", 1813, 84],
  ["enjiju", 1813, 85],
  ["snjiju", 1813, 122],
  ["\u0161njiju", 1813, 86],
  ["kiju", 1813, 95],
  ["liju", 1813, 24],
  ["eliju", 1824, 83],
  ["miju", 1813, 37],
  ["niju", 1813, 13],
  ["ganiju", 1827, 9],
  ["maniju", 1827, 6],
  ["paniju", 1827, 7],
  ["raniju", 1827, 8],
  ["taniju", 1827, 5],
  ["piju", 1813, 41],
  ["riju", 1813, 42],
  ["rariju", 1834, 21],
  ["siju", 1813, 23],
  ["osiju", 1836, 123],
  ["tiju", 1813, 44],
  ["atiju", 1838, 120],
  ["otiju", 1838, 22],
  ["aviju", 1813, 77],
  ["eviju", 1813, 78],
  ["iviju", 1813, 79],
  ["oviju", 1813, 80],
  ["ziju", 1813, 45],
  ["o\u0161iju", 1813, 91],
  ["\u017Eiju", 1813, 38],
  ["anju", -1, 84],
  ["enju", -1, 85],
  ["snju", -1, 122],
  ["\u0161nju", -1, 86],
  ["uju", -1, 25],
  ["lucuju", 1852, 121],
  ["iruju", 1852, 100],
  ["lu\u010Duju", 1852, 117],
  ["ku", -1, 95],
  ["sku", 1856, 1],
  ["\u0161ku", 1856, 2],
  ["alu", -1, 104],
  ["ijalu", 1859, 47],
  ["nalu", 1859, 46],
  ["elu", -1, 83],
  ["ilu", -1, 116],
  ["ozilu", 1863, 48],
  ["olu", -1, 50],
  ["ramu", -1, 52],
  ["acemu", -1, 124],
  ["ecemu", -1, 125],
  ["ucemu", -1, 126],
  ["anjijemu", -1, 84],
  ["enjijemu", -1, 85],
  ["snjijemu", -1, 122],
  ["\u0161njijemu", -1, 86],
  ["kijemu", -1, 95],
  ["skijemu", 1874, 1],
  ["\u0161kijemu", 1874, 2],
  ["elijemu", -1, 83],
  ["nijemu", -1, 13],
  ["osijemu", -1, 123],
  ["atijemu", -1, 120],
  ["evitijemu", -1, 92],
  ["ovitijemu", -1, 93],
  ["astijemu", -1, 94],
  ["avijemu", -1, 77],
  ["evijemu", -1, 78],
  ["ivijemu", -1, 79],
  ["ovijemu", -1, 80],
  ["o\u0161ijemu", -1, 91],
  ["anjemu", -1, 84],
  ["enjemu", -1, 85],
  ["snjemu", -1, 122],
  ["\u0161njemu", -1, 86],
  ["kemu", -1, 95],
  ["skemu", 1893, 1],
  ["\u0161kemu", 1893, 2],
  ["lemu", -1, 51],
  ["elemu", 1896, 83],
  ["nemu", -1, 13],
  ["anemu", 1898, 10],
  ["enemu", 1898, 87],
  ["snemu", 1898, 159],
  ["\u0161nemu", 1898, 88],
  ["osemu", -1, 123],
  ["atemu", -1, 120],
  ["evitemu", -1, 92],
  ["ovitemu", -1, 93],
  ["astemu", -1, 94],
  ["avemu", -1, 77],
  ["evemu", -1, 78],
  ["ivemu", -1, 79],
  ["ovemu", -1, 80],
  ["a\u0107emu", -1, 14],
  ["e\u0107emu", -1, 15],
  ["u\u0107emu", -1, 16],
  ["o\u0161emu", -1, 91],
  ["acomu", -1, 124],
  ["ecomu", -1, 125],
  ["ucomu", -1, 126],
  ["anjomu", -1, 84],
  ["enjomu", -1, 85],
  ["snjomu", -1, 122],
  ["\u0161njomu", -1, 86],
  ["komu", -1, 95],
  ["skomu", 1923, 1],
  ["\u0161komu", 1923, 2],
  ["elomu", -1, 83],
  ["nomu", -1, 13],
  ["cinomu", 1927, 137],
  ["\u010Dinomu", 1927, 89],
  ["osomu", -1, 123],
  ["atomu", -1, 120],
  ["evitomu", -1, 92],
  ["ovitomu", -1, 93],
  ["astomu", -1, 94],
  ["avomu", -1, 77],
  ["evomu", -1, 78],
  ["ivomu", -1, 79],
  ["ovomu", -1, 80],
  ["a\u0107omu", -1, 14],
  ["e\u0107omu", -1, 15],
  ["u\u0107omu", -1, 16],
  ["o\u0161omu", -1, 91],
  ["nu", -1, 13],
  ["anu", 1943, 10],
  ["astanu", 1944, 110],
  ["istanu", 1944, 111],
  ["ostanu", 1944, 112],
  ["inu", 1943, 11],
  ["cinu", 1948, 137],
  ["aninu", 1948, 10],
  ["\u010Dinu", 1948, 89],
  ["onu", 1943, 12],
  ["aru", -1, 53],
  ["dru", -1, 54],
  ["eru", -1, 55],
  ["oru", -1, 56],
  ["basu", -1, 135],
  ["gasu", -1, 131],
  ["jasu", -1, 129],
  ["kasu", -1, 133],
  ["nasu", -1, 132],
  ["tasu", -1, 130],
  ["vasu", -1, 134],
  ["esu", -1, 57],
  ["isu", -1, 58],
  ["osu", -1, 123],
  ["atu", -1, 120],
  ["ikatu", 1967, 68],
  ["latu", 1967, 69],
  ["etu", -1, 70],
  ["evitu", -1, 92],
  ["ovitu", -1, 93],
  ["astu", -1, 94],
  ["estu", -1, 71],
  ["istu", -1, 72],
  ["kstu", -1, 73],
  ["ostu", -1, 74],
  ["i\u0161tu", -1, 75],
  ["avu", -1, 77],
  ["evu", -1, 78],
  ["ivu", -1, 79],
  ["ovu", -1, 80],
  ["lovu", 1982, 82],
  ["movu", 1982, 81],
  ["stvu", -1, 3],
  ["\u0161tvu", -1, 4],
  ["ba\u0161u", -1, 63],
  ["ga\u0161u", -1, 64],
  ["ja\u0161u", -1, 61],
  ["ka\u0161u", -1, 62],
  ["na\u0161u", -1, 60],
  ["ta\u0161u", -1, 59],
  ["va\u0161u", -1, 65],
  ["e\u0161u", -1, 66],
  ["i\u0161u", -1, 67],
  ["o\u0161u", -1, 91],
  ["avav", -1, 97],
  ["evav", -1, 96],
  ["ivav", -1, 98],
  ["uvav", -1, 99],
  ["kov", -1, 95],
  ["a\u0161", -1, 104],
  ["ira\u0161", 2002, 100],
  ["ura\u0161", 2002, 105],
  ["ta\u0161", 2002, 113],
  ["ava\u0161", 2002, 97],
  ["eva\u0161", 2002, 96],
  ["iva\u0161", 2002, 98],
  ["uva\u0161", 2002, 99],
  ["a\u010Da\u0161", 2002, 102],
  ["e\u0161", -1, 119],
  ["astade\u0161", 2011, 110],
  ["istade\u0161", 2011, 111],
  ["ostade\u0161", 2011, 112],
  ["astaje\u0161", 2011, 106],
  ["istaje\u0161", 2011, 107],
  ["ostaje\u0161", 2011, 108],
  ["ije\u0161", 2011, 116],
  ["inje\u0161", 2011, 114],
  ["uje\u0161", 2011, 25],
  ["iruje\u0161", 2020, 100],
  ["lu\u010Duje\u0161", 2020, 117],
  ["ne\u0161", 2011, 13],
  ["astane\u0161", 2023, 110],
  ["istane\u0161", 2023, 111],
  ["ostane\u0161", 2023, 112],
  ["ete\u0161", 2011, 70],
  ["aste\u0161", 2011, 115],
  ["i\u0161", -1, 116],
  ["ni\u0161", 2029, 103],
  ["jeti\u0161", 2029, 118],
  ["a\u010Di\u0161", 2029, 101],
  ["lu\u010Di\u0161", 2029, 117],
  ["ro\u0161i\u0161", 2029, 90]
].map(x => new Among(x[0], x[1], x[2]));

StemmerSr.a_3 = [
  ["a", -1, 1],
  ["oga", 0, 1],
  ["ama", 0, 1],
  ["ima", 0, 1],
  ["ena", 0, 1],
  ["e", -1, 1],
  ["og", -1, 1],
  ["anog", 6, 1],
  ["enog", 6, 1],
  ["anih", -1, 1],
  ["enih", -1, 1],
  ["i", -1, 1],
  ["ani", 11, 1],
  ["eni", 11, 1],
  ["anoj", -1, 1],
  ["enoj", -1, 1],
  ["anim", -1, 1],
  ["enim", -1, 1],
  ["om", -1, 1],
  ["enom", 18, 1],
  ["o", -1, 1],
  ["ano", 20, 1],
  ["eno", 20, 1],
  ["ost", -1, 1],
  ["u", -1, 1],
  ["enu", 24, 1]
].map(x => new Among(x[0], x[1], x[2]));

StemmerSr.g_v = [17, 65, 16];
StemmerSr.g_sa = [65, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 128];
StemmerSr.g_ca = [119, 95, 23, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 136, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 0, 0, 0, 16];
StemmerSr.g_rg = [1];

module.exports = StemmerSr;



//   this.stem = /** @return {boolean} */ function() {
//   };

//   /**@return{string}*/
//   this['stemWord'] = function(/**string*/word) {
//       this.setCurrent(word);
//       this.stem();
//       return this.getCurrent();
//   };
// };
// window['SerbianStemmer'] = SerbianStemmer;