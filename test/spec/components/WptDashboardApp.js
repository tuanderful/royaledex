'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var WptDashboardApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WptDashboardApp = require('components/WptDashboardApp.js');
    component = React.createElement(WptDashboardApp);
  });

  it('should create a new instance of WptDashboardApp', function () {
    expect(component).toBeDefined();
  });
});
