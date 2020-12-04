// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cientes$1.0.0/src/app/views/clientes/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1> Cadastro de Clientes </h1><form action=\"/clientes\" method=\"post\">");

  if (data.cliente.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.cliente.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"nome\">Nome: </label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.cliente.nome) +
    "\"></div><div><br><label for=\"endereço\">Endereço: </label><input type=\"text\" id=\"endereco\" name=\"endereco\" value=\"" +
    marko_escapeXmlAttr(data.cliente.endereco) +
    "\"></div><div><br><label for=\"cep\">Cep: </label><input type=\"text\" id=\"cep\" name=\"cep\" value=\"" +
    marko_escapeXmlAttr(data.cliente.cep) +
    "\"></div><div><br><label for=\"data\">Data de nascimento: </label><input type=\"text\" id=\"data\" name=\"data\" value=\"" +
    marko_escapeXmlAttr(data.cliente.data) +
    "\"></div><div><br><label for=\"fone\">Fone: </label><input type=\"text\" id=\"fone\" name=\"fone\" value=\"" +
    marko_escapeXmlAttr(data.cliente.fone) +
    "\"></div><br><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cientes$1.0.0/src/app/views/clientes/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
