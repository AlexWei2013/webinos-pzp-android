/* widgetmanager.js: starts the widgetmanager in a separate isolate */
var widgetmanager = require('webinos/node_modules/webinos-widget');
process.env.WRT_HOME = '/data/data/org.webinos.app/wrt';
var bridgewm = require('bridge').load('org.webinos.app.wrt.mgr.WidgetManagerImpl', this);
bridgewm.setWidgetProcessor(widgetmanager.widgetmanager);
