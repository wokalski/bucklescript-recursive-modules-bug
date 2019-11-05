// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_module = require("bs-platform/lib/js/caml_module.js");
var Spec$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/spec.bs.js");
var Serialize$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/serialize.bs.js");
var Deserialize$Ocamlprotocplugin = require("ocaml-protoc-plugin-runtime-bs/src/ocaml_protoc_plugin/deserialize.bs.js");

var NullValue = Caml_module.init_mod([
      "nars_struct.ml",
      25,
      10
    ], [[
        [
          0,
          "to_int"
        ],
        [
          0,
          "from_int"
        ]
      ]]);

var Struct = Caml_module.init_mod([
      "nars_struct.ml",
      46,
      10
    ], [[
        [
          [[
              [
                0,
                "name'"
              ],
              [
                0,
                "to_proto"
              ],
              [
                0,
                "from_proto"
              ]
            ]],
          "FieldsEntry"
        ],
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]]);

var Value = Caml_module.init_mod([
      "nars_struct.ml",
      88,
      10
    ], [[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]]);

var ListValue = Caml_module.init_mod([
      "nars_struct.ml",
      109,
      10
    ], [[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]]);

function to_int(param) {
  return 0;
}

function from_int(n) {
  if (n !== 0) {
    return /* Error */Block.__(1, [/* `Unknown_enum_value */[
                353152616,
                n
              ]]);
  } else {
    return /* Ok */Block.__(0, [/* NULL_VALUE */0]);
  }
}

Caml_module.update_mod([[
        [
          0,
          "to_int"
        ],
        [
          0,
          "from_int"
        ]
      ]], NullValue, {
      to_int: to_int,
      from_int: from_int
    });

var FieldsEntry = Caml_module.init_mod([
      "nars_struct.ml",
      52,
      12
    ], [[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]]);

function name$prime(param) {
  return "Nars_struct.google_mirror.protobuf.Struct.FieldsEntry";
}

var spec = Curry._2(Spec$Ocamlprotocplugin.Serialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Serialize.C.basic, /* tuple */[
          1,
          Spec$Ocamlprotocplugin.Serialize.C.string,
          Spec$Ocamlprotocplugin.Serialize.C.proto3
        ]), Curry._2(Spec$Ocamlprotocplugin.Serialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Serialize.C.basic_opt, /* tuple */[
              2,
              Curry._1(Spec$Ocamlprotocplugin.Serialize.C.message, Value.to_proto)
            ]), Spec$Ocamlprotocplugin.Serialize.C.nil));

var serialize = Serialize$Ocamlprotocplugin.serialize(spec);

function to_proto(t) {
  var f = Curry._1(serialize, /* () */0);
  var param = t;
  return Curry._2(f, param[0], param[1]);
}

function constructor(a, b) {
  return /* tuple */[
          a,
          b
        ];
}

var spec$1 = Curry._2(Spec$Ocamlprotocplugin.Deserialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.basic, /* tuple */[
          1,
          Spec$Ocamlprotocplugin.Deserialize.C.string,
          Spec$Ocamlprotocplugin.Deserialize.C.proto3
        ]), Curry._2(Spec$Ocamlprotocplugin.Deserialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.basic_opt, /* tuple */[
              2,
              Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.message, Value.from_proto)
            ]), Spec$Ocamlprotocplugin.Deserialize.C.nil));

var deserialize = Deserialize$Ocamlprotocplugin.deserialize(spec$1, constructor);

var from_proto = Curry.__1(deserialize);

Caml_module.update_mod([[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]], FieldsEntry, {
      name$prime: name$prime,
      to_proto: to_proto,
      from_proto: from_proto
    });

function name$prime$1(param) {
  return "Nars_struct.google_mirror.protobuf.Struct";
}

var spec$2 = Curry._2(Spec$Ocamlprotocplugin.Serialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Serialize.C.repeated, /* tuple */[
          1,
          Curry._1(Spec$Ocamlprotocplugin.Serialize.C.message, FieldsEntry.to_proto),
          Spec$Ocamlprotocplugin.Serialize.C.not_packed
        ]), Spec$Ocamlprotocplugin.Serialize.C.nil);

var serialize$1 = Serialize$Ocamlprotocplugin.serialize(spec$2);

function to_proto$1(t) {
  return Curry._2(serialize$1, /* () */0, t);
}

function constructor$1(a) {
  return a;
}

var spec$3 = Curry._2(Spec$Ocamlprotocplugin.Deserialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.repeated, /* tuple */[
          1,
          Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.message, FieldsEntry.from_proto),
          Spec$Ocamlprotocplugin.Deserialize.C.not_packed
        ]), Spec$Ocamlprotocplugin.Deserialize.C.nil);

var deserialize$1 = Deserialize$Ocamlprotocplugin.deserialize(spec$3, constructor$1);

var from_proto$1 = Curry.__1(deserialize$1);

Caml_module.update_mod([[
        [
          [[
              [
                0,
                "name'"
              ],
              [
                0,
                "to_proto"
              ],
              [
                0,
                "from_proto"
              ]
            ]],
          "FieldsEntry"
        ],
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]], Struct, {
      FieldsEntry: FieldsEntry,
      name$prime: name$prime$1,
      to_proto: to_proto$1,
      from_proto: from_proto$1
    });

function name$prime$2(param) {
  return "Nars_struct.google_mirror.protobuf.Value";
}

var spec$4 = Curry._2(Spec$Ocamlprotocplugin.Serialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof, (function (param) {
            var variant = param[0];
            if (variant >= -663343517) {
              if (variant >= -483181849) {
                if (variant >= 258787964) {
                  return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                              4,
                              Spec$Ocamlprotocplugin.Serialize.C.bool,
                              param[1]
                            ]);
                } else {
                  return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                              5,
                              Curry._1(Spec$Ocamlprotocplugin.Serialize.C.message, Struct.to_proto),
                              param[1]
                            ]);
                }
              } else if (variant >= -654604135) {
                return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                            1,
                            Curry._1(Spec$Ocamlprotocplugin.Serialize.C.$$enum, NullValue.to_int),
                            param[1]
                          ]);
              } else {
                return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                            3,
                            Spec$Ocamlprotocplugin.Serialize.C.string,
                            param[1]
                          ]);
              }
            } else if (variant >= -769490512) {
              return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                          6,
                          Curry._1(Spec$Ocamlprotocplugin.Serialize.C.message, ListValue.to_proto),
                          param[1]
                        ]);
            } else {
              return Curry._1(Spec$Ocamlprotocplugin.Serialize.C.oneof_elem, /* tuple */[
                          2,
                          Spec$Ocamlprotocplugin.Serialize.C.$$double,
                          param[1]
                        ]);
            }
          })), Spec$Ocamlprotocplugin.Serialize.C.nil);

var serialize$2 = Serialize$Ocamlprotocplugin.serialize(spec$4);

function to_proto$2(t) {
  return Curry._2(serialize$2, /* () */0, t);
}

function constructor$2(a) {
  return a;
}

var spec$5 = Curry._2(Spec$Ocamlprotocplugin.Deserialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof, /* :: */[
          Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                1,
                Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.$$enum, NullValue.from_int),
                (function (v) {
                    return /* `Null_value */[
                            -654604135,
                            v
                          ];
                  })
              ]),
          /* :: */[
            Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                  2,
                  Spec$Ocamlprotocplugin.Deserialize.C.$$double,
                  (function (v) {
                      return /* `Number_value */[
                              -785426853,
                              v
                            ];
                    })
                ]),
            /* :: */[
              Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                    3,
                    Spec$Ocamlprotocplugin.Deserialize.C.string,
                    (function (v) {
                        return /* `String_value */[
                                -663343517,
                                v
                              ];
                      })
                  ]),
              /* :: */[
                Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                      4,
                      Spec$Ocamlprotocplugin.Deserialize.C.bool,
                      (function (v) {
                          return /* `Bool_value */[
                                  258787964,
                                  v
                                ];
                        })
                    ]),
                /* :: */[
                  Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                        5,
                        Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.message, Struct.from_proto),
                        (function (v) {
                            return /* `Struct_value */[
                                    -483181849,
                                    v
                                  ];
                          })
                      ]),
                  /* :: */[
                    Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.oneof_elem, /* tuple */[
                          6,
                          Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.message, ListValue.from_proto),
                          (function (v) {
                              return /* `List_value */[
                                      -769490512,
                                      v
                                    ];
                            })
                        ]),
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ]), Spec$Ocamlprotocplugin.Deserialize.C.nil);

var deserialize$2 = Deserialize$Ocamlprotocplugin.deserialize(spec$5, constructor$2);

var from_proto$2 = Curry.__1(deserialize$2);

Caml_module.update_mod([[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]], Value, {
      name$prime: name$prime$2,
      to_proto: to_proto$2,
      from_proto: from_proto$2
    });

function name$prime$3(param) {
  return "Nars_struct.google_mirror.protobuf.ListValue";
}

var spec$6 = Curry._2(Spec$Ocamlprotocplugin.Serialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Serialize.C.repeated, /* tuple */[
          1,
          Curry._1(Spec$Ocamlprotocplugin.Serialize.C.message, Value.to_proto),
          Spec$Ocamlprotocplugin.Serialize.C.not_packed
        ]), Spec$Ocamlprotocplugin.Serialize.C.nil);

var serialize$3 = Serialize$Ocamlprotocplugin.serialize(spec$6);

function to_proto$3(t) {
  return Curry._2(serialize$3, /* () */0, t);
}

function constructor$3(a) {
  return a;
}

var spec$7 = Curry._2(Spec$Ocamlprotocplugin.Deserialize.C.$caret$colon$colon, Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.repeated, /* tuple */[
          1,
          Curry._1(Spec$Ocamlprotocplugin.Deserialize.C.message, Value.from_proto),
          Spec$Ocamlprotocplugin.Deserialize.C.not_packed
        ]), Spec$Ocamlprotocplugin.Deserialize.C.nil);

var deserialize$3 = Deserialize$Ocamlprotocplugin.deserialize(spec$7, constructor$3);

var from_proto$3 = Curry.__1(deserialize$3);

Caml_module.update_mod([[
        [
          0,
          "name'"
        ],
        [
          0,
          "to_proto"
        ],
        [
          0,
          "from_proto"
        ]
      ]], ListValue, {
      name$prime: name$prime$3,
      to_proto: to_proto$3,
      from_proto: from_proto$3
    });

var Protobuf = {
  NullValue: NullValue,
  Struct: Struct,
  Value: Value,
  ListValue: ListValue
};

var Google_mirror = {
  Protobuf: Protobuf
};

exports.Google_mirror = Google_mirror;
/* NullValue Not a pure module */
