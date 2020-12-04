// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cientes$1.0.0/src/app/views/clientes/lista/lista.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Listagem de Clientes </h1><table id=\"clientes\"><tr><td>ID</td><td>Nome</td><td>Endereço</td><td>Cep</td><td>Data Nascimento</td><td>Fone</td><td></td><td></td></tr>");

  var for__15 = 0;

  marko_forEach(data.clientes, function(cliente) {
    var keyscope__16 = "[" + ((for__15++) + "]");

    out.w("<tr id=\"cliente_" +
      marko_escapeXmlAttr(cliente.id) +
      "\"><td>" +
      marko_escapeXml(cliente.id) +
      "</td><td>" +
      marko_escapeXml(cliente.nome) +
      "</td><td>" +
      marko_escapeXml(cliente.endereco) +
      "</td><td>" +
      marko_escapeXml(cliente.cep) +
      "</td><td>" +
      marko_escapeXml(cliente.data) +
      "</td><td>" +
      marko_escapeXml(cliente.fone) +
      "</td><td><a href=\"/clientes/form/" +
      marko_escapeXmlAttr(cliente.id) +
      "\"><button>Editar</button></a></td><td><a href=\"#\" data-ref=\"" +
      marko_escapeXmlAttr(cliente.id) +
      "\" data-type=\"remocao\">Remover</a></td></tr>");
  });

  out.w("</table><div><br><br><a href=\"/clientes/form\"><button> Cadastrar Cliente </button></a></div><script src=\"/estatico/js/remove-cliente.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cientes$1.0.0/src/app/views/clientes/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
