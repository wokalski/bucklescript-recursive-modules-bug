open Nars_struct.Google_mirror.Protobuf.Struct;

[("fieldA", Some(`Number_value(1.))), ("fieldB", Some(`Bool_value(true)))]
|> to_proto
|> Ocaml_protoc_plugin.Writer.contents
|> Ocaml_protoc_plugin.Reader.create
|> from_proto
